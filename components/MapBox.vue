<template>
    <div class="mapContainer" id="route-creator-map-1"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import {mapInstance, startMap} from '../assets/mapbox.js';

export default {
    name: 'MapBox',
    data: function() {
        return {
            accessToken: 'pk.eyJ1Ijoia2FyYW5qYW11dGFoaSIsImEiOiJja2c0dXFtMTkwb2J1MzNwNHdpbWk2dW5pIn0.UtXqlLEtuv87e_cxFaZepQ'
        };
    },
    mounted: function() {
        console.log(this.accessToken);
        mapboxgl.accessToken = this.accessToken;
        /*
        const GlobalMap = new mapboxgl.Map({
            container: 'route-creator-map-1',
            style: "mapbox://styles/mapbox/streets-v11",
            center: [37.01454335, -1.1070745666666666],
            zoom: 14,
        });
        */
       const GlobalMap = startMap('route-creator-map-1');
    },
}

</script>

<style scoped>
    .mapContainer {
        border-radius: 5px;
        margin: 10px 50px;
        width: 100%;
        height: 700px;
    }
</style>