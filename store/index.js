//export const strict = 'false';

export const state = function() {
    return {
        adTime: false,
        randomCoordinates: null,
        progressLevel: null,
        progressMax: null,
        staleTime: (new Date().getTime())/1000,
        routeCoordinates: [],
        marqueeMessage: {
            message: "SMS BETWAY TO 4455 AND WIN BIG!",
            speed: 50
        },
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
        console.log(`Progress Max set to ${progressMax}`);
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
        console.log('Setting Route coordinates');
        state.routeCoordinates = [...coords];
        console.log(`NEW ROUTE COORDS: ${state.routeCoordinates}`);
    },
    setMarqueeMessage(state, obj){
        console.log(obj.stage);
        let messageString = `We're approaching ${obj.stage} where you can find: `;
        let arrayLength = obj.message.length;

        obj.message.forEach((element, index, array) => {
            messageString += element;
            if(index < arrayLength - 1) {
                messageString += ", ";
            }
        });
        messageString += ' and much more';
        state.marqueeMessage.message = messageString;
        state.marqueeMessage.speed = obj.speed;
        console.log(`Marquee Message set as ${obj.message}`);
    },
    resetMarqueeMessage(state){
        state.marqueeMessage.message = "SMS BETWAY TO 4455 AND WIN BIG!";
    }
}