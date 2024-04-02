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

const getFlights = () => {
    return fetch("flight-summary.json");
};

const getFlightDetails = (flightNumber) => {
    return fetch('flight-details.json')
        .then(res => res.json()
            .then(data => data.find(f => f.flight === flightNumber)))
}

getFlights().then((res) =>
    res.json().then((data) => {
        data.forEach(f => getFlightDetails(f.flight)
            .then(details => {
                createFlightEntry(f.flight, f.from, details.status)
            }));
    })
);
