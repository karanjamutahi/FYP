<template>
    <div>
        <div class="row">
            <div id="route-creator-map" class="route-creator-map">

            </div>
            <div class="route-creator-panel">
                <p id="coordinate" v-for="coord in $store.state.routeCoordinates" v-bind:key="coord[0]">
                    {{`${coord[0]}, ${coord[1]}`}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data: function(context) {
        console.log("Mounted")
        return {
            coords: "37.00, -1.00"
        }
    },
    
}
</script>

<style scoped>
div.row {
    display: flex;
    flex-direction: row;
    padding: 20px;
}

div.route-creator-map {
    width: 1000px;
    height: 750px;
    border-radius: 5px;
    margin: 0px 20px;
}

div.route-creator-panel {
    width: 350px;
    height: 750px;
    border-radius: 5px;
    background-color: #eee;
    margin: 0px 20px;
}

p#coordinate{
    padding: 5px;
}

</style>