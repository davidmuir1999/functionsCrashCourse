const createFlightEntry = function(flight, from, status, colour = 'lightgreen'){ //default param for colour
    // How to achieve this code using the arguments object
    //const createFlightEntry = function(){

    const row = document.createElement('tr');

    const flightCol = document.createElement('td');
    flightCol.innerText = flight;
    //flightCol.innerText = arguments[0];

    const fromCol = document.createElement('td');
    fromCol.innerText = from;
    //fromCol.innerText = arguments[1];

    const statusCol = document.createElement('td');
    statusCol.innerText = status;
    //statusCol.innerText = arguments[2];
    statusCol.style.color = colour;
    //statusCol.style.color = arguments[3] ? arguments[3] : 'lightgreen';

    row.appendChild(flightCol);
    row.appendChild(fromCol);
    row.appendChild(statusCol);

    const parent = document.getElementById('arrivalList');
    parent.appendChild(row);

}

//using rest parameters
const displayFlights = function(...flights){
    flights.forEach(f => {
        createFlightEntry(f.flight, f.from, f.status, f.colour);
    });
}

displayFlights(
    {flight:'S29DRJ',from:'Paris',status: 'On Time'},
    {flight:'RH7JRD',from:'Glasgow',status: 'Delayed',colour: 'orange'},
    {flight:'X90HKL',from:'Dubai',status: 'On Time'},
    {flight:'HS9PPL',from:'Rome',status: 'On Time'},
    {flight:'ZA4LL8',from:'LA',status: 'On Time'},
    {flight:'K40POQ',from:'Venice',status: 'Delayed',colour:  'orange'},
    {flight:'MN7JJS',from:'London',status: 'Cancelled',colour:  'red'},
    {flight:'YU2TTS',from:'Madrid',status: 'On Time'}
);

//implementing callbacks
const displayTime = () => {
    const time = new Date().toLocaleTimeString();
    document.getElementById('time').innerText = time;
}
displayTime();
setInterval(displayTime, 1000);

// createFlightEntry('S29DRJ','Paris', 'On Time');
// createFlightEntry('RH7JRD','Glasgow', 'Delayed', 'orange');
// createFlightEntry('X90HKL','Dubai', 'On Time');
// createFlightEntry('HS9PPL','Rome', 'On Time');
// createFlightEntry('ZA4LL8','LA', 'On Time');
// createFlightEntry('K40POQ','Venice', 'Delayed', 'orange');
// createFlightEntry('MN7JJS','London', 'Cancelled', 'red');
// createFlightEntry('YU2TTS','Madrid', 'On Time');