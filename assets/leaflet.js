import 'mapbox.js';
L.mapbox.accessToken = 'pk.eyJ1Ijoia2FyYW5qYW11dGFoaSIsImEiOiJja2c0dXFtMTkwb2J1MzNwNHdpbWk2dW5pIn0.UtXqlLEtuv87e_cxFaZepQ';
let LMapInstance = null;
let LprettyMarker = null;

const startLeafletMap = function(container) {
    if (LMapInstance === null) {
        try {
            LMapInstance = L.mapbox.map(container)
                                    .setView([  -1.1070745666666666, 37.01454335 ], 14)
                                    .addLayer(new L.mapbox.StyleLayer('mapbox://styles/mapbox/streets-v11'));

            const busIcon = new L.icon({
                iconUrl: '/bus-15.svg',
                iconSize: [30, 30],
            });

            LprettyMarker = new L.marker([ -1.1070745666666666, 37.01454335 ], 
                {
                    icon: busIcon
                }).addTo(LMapInstance);
        } catch (error) {
            console.log(error);
        }
    }
    return LMapInstance;
}

const LcreateMarker = function(coords) {
    if(LMapInstance !== null) {
        try {
            let marker = new L.marker(coords).addTo(LMapInstance);
        } catch (error) {
            console.error(error);
        }
    } else {
        console.log('Map Instance is null');
    }
}

export {LMapInstance as LMapInstance, startLeafletMap as startLeafletMap, LprettyMarker as LprettyMarker, LcreateMarker as LcreateMarker };