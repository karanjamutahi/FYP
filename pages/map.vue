<template>
    <div>
        <div class="row">
            <MapBox/>
            <div class="rowitem">
                <VerticalProgress v-bind:progress="(this.randomIndex)/(this.busStops.length - 1)">
                    <li v-for='({ name }, index) in busStops' v-bind:key="index" v-bind:class="['children', name === presentLocation ? 'active' : '', index < randomIndex ? 'visited' : '' ]" > {{ name }} </li>
                </VerticalProgress>
                <div class="row">
                    <div class="button" v-on:click="incrementRadom">Next</div>
                    <div class="button" v-on:click="decrementRandom">Previous</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { GlobalMap, marker } from '../components/MapBox';

let randomIndex = Math.floor((Math.random()*10) + 1);

setInterval(() => {
    //console.log("Attempting to Fetch ...");
    fetch('https://wanderdrone.appspot.com').then((res) => {
        if(res.ok) {
            res.json().then(data => {
                //console.log(data.geometry.coordinates);
            });
        }
    });
}, 2000);

export default {
    data() {
        return {
            name: 'Map',
            randomIndex: randomIndex,
            busStops: [
                {
                    name: 'Juja' 
                },
                {
                    name: 'K Road'
                },
                {
                    name: 'Kimbo'
                },
                {
                    name: 'Ruiru'
                },
                {
                    name: 'Roysambu'
                },
                {
                    name: 'Garden City'
                },
                {
                    name: 'Allsops'
                },
                {
                    name: 'Drive Inn'
                },
                {
                    name: 'Muthaiga'
                },
                {
                    name: 'Ngara'
                },
                {
                    name: 'CBD'
                }
                ],
        }
    },
    watch: {

    },
    computed: {
        presentLocation: function() {
            const presentLocation =  this.busStops[this.randomIndex].name
            //console.log(`Random Index is ${this.randomIndex}`);
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
        margin: 50px;
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

</style>