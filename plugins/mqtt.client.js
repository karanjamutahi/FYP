import mqtt from 'mqtt';
import {mapInstance, prettyMarker} from '../assets/mapbox';
import distance from '@turf/distance';


export default(context, inject) => {
    const url =  'wss://broker.emqx.io:8084/mqtt';
    const mqttClient = mqtt.connect(url, {"clientId": "webapp_instance"});
    mqttClient.on('message', (topic, payload, packet) => {
        let lastDistance = 1000;
        let located = false;
        let currentIndex = 0;

        let coordinates = JSON.parse(payload.toString());
        
        console.log("Got a message");
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
            if(!located && context.store.state.routeCoordinates.length > 0) {
                let routeCoords = context.store.state.routeCoordinates;
                context.store.state.routeCoordinates.forEach(element => {
                    let variance = distance(coordinates, element.center, {units: 'kilometers'});
                    //console.log(`Distance to ${element.name} -- ${variance}`);
                    let increment = true;
                    if (variance < lastDistance) {
                        //console.log(`Found a lower variance ${variance} < ${lastDistance} @ ${element.name}`)
                        lastDistance = variance;
                    }
                    else {
                        if(increment) {
                            let place = routeCoords[currentIndex-1].name;
                            console.log(`We're closest to ${place}`);
                        }
                        increment = false;
                    }
                    if(increment){
                        currentIndex++;
                    }
                });
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