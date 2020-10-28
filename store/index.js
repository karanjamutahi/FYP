export const state = function() {
    return {
        GlobalMap: null,
        randomCoordinates: null,
        marker: null
    }
}

export const mutations = {
    setGlobalMap(state, mapObj) {
        state.GlobalMap = mapObj;
    },
    setRandomCoordinates(state, coords) {
        state.randomCoordinates = coords;
    },
    setMarker(state, markerObj) {
        state.marker = markerObj;
    }
}