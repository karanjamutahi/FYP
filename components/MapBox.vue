<template>
    <div class="mapContainer" id="mapHolder"></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';

export default {
    name: 'MapBox',
    data: function() {
        return {
            
        };
    },
    mounted: function() {
        /*
        console.log(this.accessToken);
        mapboxgl.accessToken = this.accessToken;
        const GlobalMap = new mapboxgl.Map({
            container: 'mapHolder',
            style: "mapbox://styles/mapbox/streets-v11",
            center: [37.01454335, -1.1070745666666666],
            zoom: 14,
        });
        //this.$store.commit('setGlobalMap', GlobalMap);
        //this.$store.commit('setMarker', marker);
        */
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