import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyYW5qYW11dGFoaSIsImEiOiJja2c0dXFtMTkwb2J1MzNwNHdpbWk2dW5pIn0.UtXqlLEtuv87e_cxFaZepQ';

let mapInstance = null;
let prettyMarker = null;

const startMap = function(container) {
    if (mapInstance === null) {
        try{
            mapInstance = new mapboxgl.Map({
                container: container,
                style: "mapbox://styles/mapbox/streets-v11",
                center: [37.01454335, -1.1070745666666666],
                zoom: 14,
            });

                let busMarker = document.createElement('div');
                busMarker.style.backgroundImage = 'url(/bus-15.svg)';
                busMarker.style.backgroundRepeat = 'no-repeat';
                busMarker.style.height = '30px';
                busMarker.style.width = '30px';
                busMarker.style.zIndex = '10';

                prettyMarker = new mapboxgl.Marker(busMarker)
                                     .setLngLat([37.01454335, -1.1070745666666666])
                                     .addTo(mapInstance);
        }
        catch(e) {
            console.log(e);
        }
    } 

    return mapInstance;
};

const createMarker = function(coords) {
    if(mapInstance !== null) {
        try{
            let marker = new mapboxgl.Marker().setLngLat(coords).addTo(mapInstance);
            console.log(`Added marker at ${coords}`);
        } catch(e) {
            console.error(e);
        }
    } else {
        console.log("We're null");
    }
}

export {mapInstance as mapInstance, startMap as startMap, prettyMarker as prettyMarker, createMarker as createMarker};