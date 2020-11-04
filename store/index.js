export const state = function() {
    return {
        randomCoordinates: null,
        progressLevel: null,
        progressMax: null,
        staleTime: (new Date().getTime())/1000
    }
}

export const mutations = {
    setRandomCoordinates(state, coords) {
        state.randomCoordinates = coords;
    },
    setProgressLevel(state, progressLevel) {
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
    }
}