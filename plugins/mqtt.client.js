import mqtt from 'mqtt';
import {mapInstance, prettyMarker} from '../assets/mapbox';
import distance from '@turf/distance';


export default(context, inject) => {
    const url =  'wss://broker.emqx.io:8084/mqtt';
    const mqttClient = mqtt.connect(url, {"clientId": "webapp_instance"});

    let previousDistance = 0;
    let marqueeSet = false;

    mqttClient.on('message', (topic, payload, packet) => {
        let coordinates = JSON.parse(payload.toString());
        let lastDistance = 1000;
        let located = false;
        let currentIndex = 0;

        //console.log("Got a message");
        //console.log(context);
        console.log(`${topic} --> ${coordinates}`);
        context.store.commit('setStaleTime', (new Date().getTime())/1000);
        context.store.commit('setRandomCoordinates', coordinates);
        if(mapInstance) {
            //context.$myMap.setView(coordinates);
            try{
                mapInstance.easeTo({
                    center: coordinates
                });
                prettyMarker.setLngLat(coordinates);
                context.store.commit('incrementProgress');
            } catch(e) {
                console.error(e);
            }
            //console.log(context.store.state);
            try{
                if(!located && context.store.state.routeCoordinates.length > 0) {
                    let routeCoords = context.store.state.routeCoordinates;
                    let increment = true;
                    let arrayLength = context.store.state.routeCoordinates.length;

                    context.store.state.routeCoordinates.forEach((element, index, array) => {
                        let variance = distance(coordinates, element.center, {units: 'kilometers'});
                        //console.log(`Distance to ${element.name} -- ${variance}`);
                        
                        let approaching = false;
                        if (variance < lastDistance) {
                            //console.log(`Found a lower variance ${variance} < ${lastDistance} @ ${element.name}`)
                            lastDistance = variance;
                        }
                        else {
                            //If increment is true, then this is where we're closest to. Make increment false regardless
                            if(increment) {
                                let place = routeCoords[currentIndex-1].name;
                                //is our current lastDistance smaller then 
                                approaching = lastDistance < previousDistance;
                                previousDistance = lastDistance;
                                //Also check for when we're switching between two locations. It should always be we're approaching next destination in case it is a bit further away and can falsely flag as 'leaving' the first time
                                console.log(`We're ${approaching ? 'approaching' : 'leaving'} ${place} -- Distance: ${lastDistance}`);
                                if(approaching) {
                                    if(!marqueeSet) {
                                        let obj = {
                                            message: routeCoords[currentIndex-1].amenities,
                                            stage: place,
                                            speed: 60
                                        };
                                        context.store.commit('setMarqueeMessage', obj);
                                        marqueeSet = true;
                                    }
                                    if(lastDistance < 0.1){
                                        console.log(`YOU'RE NOW ARRIVING AT ${place}`);
                                    }
                                } else {
                                    if(marqueeSet){
                                        console.log("RESETTING TO AD");
                                        context.store.commit('resetMarqueeMessage')
                                        marqueeSet = false;
                                    }
                                }
                            }
                            increment = false;
                        }
                        if(increment){
                            currentIndex++;
                        }
                    });
                }
            }
            catch(e) {
                console.error(e);
            }
            context.store.commit('setProgressLevel', currentIndex-1);
            //console.log(prettyMarker);
            //console.log(mapInstance);
        }
    });

    mqttClient.subscribe('sawaTV/real', console.log);
    inject('mqttClient', mqttClient);
    context.$mqttClient = mqttClient;
};