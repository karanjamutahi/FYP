export const state = function() {
    return {
        randomCoordinates: null,
        progressLevel: null,
        progressMax: null,
        staleTime: (new Date().getTime())/1000,
        routeCoordinates: [],
    }
}

export const mutations = {
    setRandomCoordinates(state, coords) {
        state.randomCoordinates = coords;
    },
    setProgressLevel(state, progressLevel) {
        //console.log(`Committing Progress Level ${progressLevel}`);
        state.progressLevel = progressLevel;
    },
    setProgressMax(state, progressMax) {
        //console.log(`Progress Max set to ${progressMax}`);
        state.progressMax = progressMax;
    },
    incrementProgress(state) {
        state.progressLevel !== null && state.progressMax && state.progressLevel < state.progressMax - 1 ? state.progressLevel++ : state.progressLevel = 0;
        //console.log(`Progress now @ ${state.progressLevel}`); 
    },
    setStaleTime(state, time) {
        state.staleTime = time;
    },
    addCoordinate(state, coords) {
        let Newcoords = [coords.lng, coords.lat];
        //console.log(coords);
        state.routeCoordinates.push(Newcoords);
        console.log(`Appended coords: ${state.routeCoordinates} `);
    },
    setRouteCoordinates(state, coords){
        state.routeCoordinates = coords;
        console.log(`NEW ROUTE COORDS: ${state.routeCoordinates}`);
    }
}