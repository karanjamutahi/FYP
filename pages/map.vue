<template>
    <div class="row">
        <MapBox/>
        <div class="rowitem">
            <VerticalProgress>
                <li class="children active">Juja</li>
                <li class="children">K Road</li>
                <li class="children">Kimbo</li>
                <li class="children">Ruiru</li>
                <li class="children">Roysambu</li>
                <li class="children">Garden City</li>
                <li class="children">AllSops</li>
                <li class="children">Drive Inn</li>
                <li class="children">Muthaiga</li>
                <li class="children">Ngara</li>
                <li class="children">CBD</li>
            </VerticalProgress>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: 'Map'
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
        background-color: rgb(254, 254, 253);
        box-shadow: #eeeeee 2px 2px 4px 4px;
    }

    div.center-text {
        display: inline-block;
        margin: 0 auto;
    }
</style>