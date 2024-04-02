const createFlightEntry = function (flight, from, status) {
    const row = document.createElement("tr");

    const flightCol = document.createElement("td");
    flightCol.innerText = flight;

    const fromCol = document.createElement("td");
    fromCol.innerText = from;

    const statusCol = document.createElement("td");
    statusCol.innerText = status;

    row.appendChild(flightCol);
    row.appendChild(fromCol);
    row.appendChild(statusCol);

    const parent = document.getElementById("arrivalList");
    parent.appendChild(row);
};

//implementing callbacks
const displayTime = () => {
    const time = new Date().toLocaleTimeString();
    document.getElementById("time").innerText = time;
};
displayTime();
setInterval(displayTime, 1000);

//This example is refactoring from the demoPromises.js using Async and Await pattern

const getFlights = async () => {
    const result = await fetch('flight-summary.json');
    const flights = await result.json();
    for (let flightSummary of flights) {
        const flightDetails = await getFlightDetails(flightSummary.flight);
        createFlightEntry(flightSummary.flight, flightSummary.from,
            flightDetails.status);
    }
};

const getFlightDetails = async (flightNumber) => {
    const result = await fetch('flight-details.json');
    const detailedFlight = await result.json();
    return detailedFlight.find(f => f.flight === flightNumber);
}

getFlights();

/////PREVIOUS EXAMPLE/////////
// const getFlights = () => {
//     return fetch("flight-summary.json");
// };

// const getFlightDetails = (flightNumber) => {
//     return fetch('flight-details.json')
//         .then(res => res.json()
//             .then(data => data.find(f => f.flight === flightNumber)))
// }

// getFlights().then((res) =>
//     res.json().then((data) => {
//         data.forEach(f => getFlightDetails(f.flight)
//             .then(details => {
//                 createFlightEntry(f.flight, f.from, details.status)
//             }));
//     })
// );
