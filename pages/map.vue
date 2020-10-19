<template>
    <div class="row">
        <MapBox/>
        <div class="rowitem">
            <VerticalProgress v-bind:progress="(this.randomIndex+1)/this.busStops.length">
                <li v-for='({ name }, index) in busStops' v-bind:key="index" v-bind:class="['children', name === presentLocation ? 'active' : '', index < randomIndex ? 'visited' : '' ]" > {{ name }} </li>
            </VerticalProgress>
        </div>
    </div>
</template>

<script>
const randomIndex = Math.floor((Math.random()*10) + 1);

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
            //console.log(`Random Index is ${this.randomIndex}`);
            const presentLocation =  this.busStops[this.randomIndex].name
            //console.log(presentLocation);
            return presentLocation;
        }
    }
 }
</script>

<style scoped>
    .row {
        display: flex;
        flex-direction: row;
        overflow: scroll;
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
</style>