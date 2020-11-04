export default(context, inject) => {
    /*
    setInterval(()=> {
        fetch('https://wanderdrone.appspot.com/').then((res) => {
            res.json().then(data => {
                context.store.commit('setRandomCoordinates', data.geometry.coordinates);
                if(context.$myMap) {
                    context.$myMap.flyTo({
                        center: data.geometry.coordinates,
                    });
                    context.$marker.setLngLat(data.geometry.coordinates);
                    context.store.commit('incrementProgress');
                }
            })
        })
    }, 2000);
    */
}