import 'mapbox.js';

export default(context, inject) => {
    L.mapbox.accessToken = 'pk.eyJ1Ijoia2FyYW5qYW11dGFoaSIsImEiOiJja2c0dXFtMTkwb2J1MzNwNHdpbWk2dW5pIn0.UtXqlLEtuv87e_cxFaZepQ';
    const myMap = new L.mapbox.map('mapHolder')
                            .setView([ 37.01454335, -1.1070745666666666 ], 8)
                            .addLayer(new L.mapbox.StyleLayer('mapbox://styles/mapbox/streets-v11'));
    
    const busIcon = new L.icon({
        iconUrl: '/bus-15.svg',
        iconSize: [30, 30],
    });

    const marker = new L.marker([ 37.01454335, -1.1070745666666666 ], {
        icon: busIcon
    }).addTo(myMap);

    inject('myMap', myMap);
    context.$myMap = myMap;

    inject('marker', marker);
    context.$marker = marker;
}