export default(context, inject) => {
    setInterval(() => {
        let disconnected = context.$store.state.staleTIme - (new Date().getTime()) > 5;
        console.log(`Disconnectd: ${disconnected}`);
    }, 5000);
}