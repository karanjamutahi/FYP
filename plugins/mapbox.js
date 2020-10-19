import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1Ijoia2FyYW5qYW11dGFoaSIsImEiOiJja2c0dXFtMTkwb2J1MzNwNHdpbWk2dW5pIn0.UtXqlLEtuv87e_cxFaZepQ';

export default (comtext, inject) => {
    const myMap = new mapboxgl.Map({
        container: 'mapHolder',
        style: "mapbox://styles/mapbox/streets-v11",
        center: [37.01454335, -1.1070745666666666],
        zoom: 14,
    });
    
};
