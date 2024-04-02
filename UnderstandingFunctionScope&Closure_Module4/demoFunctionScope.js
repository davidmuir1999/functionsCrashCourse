let maxAltitude = 10000; //global variable

const changeAltitude = (altitudeMeters) => {
    let minAltitude = 0; //local variable

    if (altitudeMeters < maxAltitude &&
        altitudeMeters > minAltitude){
            console.log(`Changing altitude to ${altitudeMeters}`);
            return;
        }
        console.log('Can not change altitude: out of bounds')
}

changeAltitude(5000)
console.log(minAltitude)// this will make error as 'minAltitude' is function scope