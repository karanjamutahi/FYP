import Vue from 'vue'
import mqtt from 'mqtt';

export default(context, inject) => {
    if (!process.server) {
        const options = {
            clean: true,
            connectTimeout:3000,
            clientId: 'webapp_instance',
            reconnectPeriod: 1000,
        };

        const retries = 3;
        const url =  location.protocol === 'https:' ? 'wss://broker.emqx.io:8084/mqtt' : 'ws://broker.emqx.io:8083/mqtt'
        const mqttClient = mqtt.connect(url, options);
        mqttClient.publish('/sawaTVCollector/webapp', 'connected');
        mqttClient.subscribe('/sawaTVCollector/incoming', (err) => {
            if(err) {
                console.log("Failed to subscribe to /sawaTVCollector/incoming");

            } else {
                mqttClient.publish('/sawaTVCollector/webapp', 'Subsccribed to /sawaTVCollector/incoming');
            }
        });
        console.log('Connected & published');
        inject('mqttClient', mqttClient);
        context.$mqttClient = mqttClient;
    }
};