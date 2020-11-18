<template>
    <div>
        <div class="row">
            <Leaflet/>
            <VueVideoPlayer v-if="this.$store.state.adTime" src='/Jumia.mp4'></VueVideoPlayer>
            <div class="rowitem">
                <VerticalProgress v-bind:progress="(this.$store.state.progressLevel != null ? this.$store.state.progressLevel : 0)/(this.$store.state.progressMax ? this.$store.state.progressMax - 1 : 10)">
                    <li v-for='({ name }, index) in busStops' v-bind:key="index" v-bind:class="['children', name === presentLocation ? 'active' : '', index < $store.state.progressLevel ? 'visited' : '' ]" > {{ name }} </li>
                </VerticalProgress>
            </div>
        </div>
        <div class="adMarquee">
            <VTextMarquee :content="this.$store.state.marqueeMessage.message" :speed="this.$store.state.marqueeMessage.speed"></VTextMarquee>
        </div>
    </div>
</template>

<script>
//import {createMarker} from '../assets/mapbox';
import {LcreateMarker} from '../assets/leaflet';

let randomIndex = Math.floor((Math.random()*10) + 1);
const busStops = [
                {
                    "name": "Juja",
                    "center": [37.01548157438185, -1.1073284066916216],
                    "amenities": ['JKUAT', 'Juja Police Station', 'Senate Hotel', 'Juja City Mall']
                },
                {
                    "name": "Kenyatta Road",
                    "center": [37.00342510444577, -1.1251050951709516],
                    "amenities": ['Kalimoni High School', 'Juja City Mall']
                },
                {
                    "name": "Kimbo",
                    "center": [36.97443255179667, -1.1331801907088987],
                    "amenities": ['Nairobi Institute of Business Studies', 'GSU Training Camp']
                },
                {
                    "name": "Ruiru",
                    "center": [36.96217259389775, -1.150276630396391],
                    "amenities": ['Rainbow Resort', 'KU - Ruiru Campus', 'Ruiru Railway Station']
                },
                {
                    "name": "Roysambu",
                    "center": [36.89283239316032, -1.2186547291484686],
                    "amenities": ['Thika Road Mall', 'Kasarani Police Station']
                },
                {
                    "name": "Garden City",
                    "center": [36.87809697227868, -1.2310606454807669],
                    "amenities": ['Garden City Mall', 'EABL HQ']
                },
                {
                    "name": "Allsops",
                    "center": [36.86921915938834, -1.2420022953580627],
                    "amenities": ['GSU Headquarters', 'ABSA ATM @ Bayer Building']
                },
                {
                    "name": "Drive Inn",
                    "center": [36.86355149914124, -1.2486360660944484],
                    "amenities": ['Kenya School of Monetary Studies', 'KCA University']
                },
                {
                    "name": "Muthaiga",
                    "center": [36.84359800414873, -1.2603368679351519],
                    "amenities": ["Mathari Mental Hospital", "Muthaiga Shopping Center", "Muthaiga Golf Club"]
                },
                {
                    "name": "Ngara",
                    "center": [36.824396030746925, -1.2745684144535119],
                    "amenities": ["Fig Tree Market", "Arya Girls High School"]
                },
                {
                    "name": "CBD",
                    "center": [36.82524217474665, -1.284260717248003],
                    "amenities": ["National Assembly of Kenya", "National Archives", "Uhuru Park"]
                }
                ];

export default {
    data: function(context) {
        const dataObj = {
            randomIndex: randomIndex,
            busStops: JSON.parse(JSON.stringify(busStops)),
        };
        this.$store.commit('setProgressLevel', 0);
        this.$store.commit('setRouteCoordinates', dataObj.busStops);
        this.$store.commit('setProgressMax', dataObj.busStops.length);
        return dataObj;
    },
    watch: {

    },
    computed: {
        presentLocation: function() {
            //console.log(this.$store.state.progressLevel);
            let level = this.$store.state.progressLevel != null ? this.$store.state.progressLevel : 0 ;
            //console.log(`Random Index is ${level}`);
            const presentLocation =  this.busStops[level].name
            //console.log(presentLocation);
            return presentLocation;
        }
    },
    methods: {
        incrementRadom: function() {
            this.randomIndex < this.busStops.length && this.randomIndex++
        },
        decrementRandom: function() {
            this.randomIndex > 0 && this.randomIndex--
        }
    },
    mounted: function() {
        //console.log(`Error is here: ${busStops}`);
        let stops = busStops.slice(0);
        stops.forEach((stop) => {
            //console.log(stop.center);
            let center = stop.center;
            LcreateMarker(center.reverse());
        });
   
    }
 }
</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
    }

    div.rowitem { 
        border-radius: 5px;
        padding: 10px;
        margin: 10px 50px;
        width: 600px;
        height: 700px;
        background-color: #000333;
        box-shadow: #eeeeee 2px 2px 4px 4px;
    }

    div.center-text {
        display: inline-block;
        margin: 0 auto;
    }

    div.button {
        background-color: #ffa600;
        color: #000333;
        min-width: 20%;
        min-height: 2.5em;
        margin: 20px 10px;
        border-radius: 3px;
        text-align: center;
        line-height: 2.5em;
        font-weight: 600;
        padding: 0px 10px;
    }

    div.button:hover {
        cursor: pointer;
    }

    div.adMarquee{
        position: absolute;
        bottom: 0%;
        left: 0%;
        right: 0%;
        background-color: #fbbc04;
        color: #000333;
        font-size: 2.5em;
        font-weight: 500;
    }

    @media only screen and (max-width: 1300px) {
        div.adMarquee {
            font-size: 1em;
            font-weight: 700;
            background-color: white;
        }
    }
</style>