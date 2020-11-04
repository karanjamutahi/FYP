import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyYW5qYW11dGFoaSIsImEiOiJja2c0dXFtMTkwb2J1MzNwNHdpbWk2dW5pIn0.UtXqlLEtuv87e_cxFaZepQ';

export default (context, inject) => {
    //console.log("Populating Map");

    const myMap = new mapboxgl.Map({
        container: 'mapHolder',
        style: "mapbox://styles/mapbox/streets-v11",
        center: [ 37.01454335, -1.1070745666666666 ],
        zoom: 14.3,
    });
    
    let busMarker = document.createElement('div');
    busMarker.style.backgroundImage = 'url(/bus-15.svg)';
    busMarker.style.backgroundRepeat = 'no-repeat';
    busMarker.style.height = '30px';
    busMarker.style.width = '30px';
    busMarker.style.zIndex = '10';

    const marker = new mapboxgl.Marker(busMarker)
                                .setLngLat([37.01454335, -1.1070745666666666])
                                .addTo(myMap);

    inject('myMap', myMap);
    context.$myMap = myMap;
    
    inject('marker', marker);
    context.$marker = marker;
};
