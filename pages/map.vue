<template>
    <div>
        <div class="row">
            <MapBox/>
            <div class="rowitem">
                <VerticalProgress v-bind:progress="(this.$store.state.progressLevel != null ? this.$store.state.progressLevel : 0)/(this.$store.state.progressMax ? this.$store.state.progressMax - 1 : 10)">
                    <li v-for='({ name }, index) in busStops' v-bind:key="index" v-bind:class="['children', name === presentLocation ? 'active' : '', index < $store.state.progressLevel ? 'visited' : '' ]" > {{ name }} </li>
                </VerticalProgress>
            </div>
        </div>
        <div class="adMarquee">
            <VTextMarquee content="SEND BETWAY TO 3553 AND STAND A CHANCE TO BECOME A MILLIONAIRE!"></VTextMarquee>
        </div>
    </div>
</template>

<script>
let randomIndex = Math.floor((Math.random()*10) + 1);

export default {
    data: function() {
        const dataObj = {
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
        };

        this.$store.commit('setProgressLevel', randomIndex);
        //console.log(`Setting Initial Progress Level @ ${this.$store.state.progressLevel}`);
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
</style>