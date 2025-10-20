async function getPlanesRomania() {
    // coordonate
    const lamin = 43.5;
    const lomin = 20.0;
    const lamax = 48.3;
    const lomax = 29.6;

    const url = `https://opensky-network.org/api/states/all?lamin=${lamin}&lomin=${lomin}&lamax=${lamax}&lomax=${lomax}`;

    try {
        const response = await fetch(url);

        const data = await response.json();
        const planes = data.states || [];
        return planes;

    } catch (err) {
        console.error(err);
    }
}

getPlanesRomania().then(planes => {
    console.log("Avioane deasupra României:", planes);
});