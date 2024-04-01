class flightPlan{
    constructor(callsign = '', departure = '', destination = ''){
        this.callsign = callsign;
        this.departure = departure;
        this.destination = destination;
    }

    print(){
        let info = `${this.callsign} departs from ${this.departure} and lands at ${this.destination}`;
        console.log(info);
    }
}

const berlinToParis = new flightPlan('FR35TP', 'Berlin', 'Paris');
berlinToParis.print();