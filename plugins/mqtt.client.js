import mqtt from 'mqtt';

const subscribe = function(client, topic) {
    client.subscribe(topic, (err) => {
        if(err) {
            console.log("Failed to subscribe");
        }
    });
};

export default(context, inject) => {
    const url =  'wss://broker.emqx.io:8084/mqtt';
    const mqttClient = mqtt.connect(url, {"clientId": "webapp_instance"});
    mqttClient.on('message', (topic, payload, packet) => {
        let coordinates = JSON.parse(payload.toString()).reverse();
        console.log("Got a message");
        console.log(`${topic} --> ${coordinates}`);
        context.store.commit('setStaleTime', (new Date().getTime())/1000);
        context.store.commit('setRandomCoordinates', coordinates);
        if(context.$myMap) {
            context.$myMap.setView(coordinates);
            context.$marker.setLatLng(coordinates);
            context.store.commit('incrementProgress');
        }
    });

    mqttClient.subscribe('sawaTV/coordinates', console.log);
    inject('mqttClient', mqttClient);
    context.$mqttClient = mqttClient;
};