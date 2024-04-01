class flightPlan{

    #internalDepartureTime = null;

    constructor(callsign = '', departure = '', destination = ''){
        this.callsign = callsign;
        this.departure = departure;
        this.destination = destination;
    }

    print(){
        let info = `${this.callsign} departs from ${this.departure} and lands at ${this.destination}`;
        console.log(info);
    }

    get departureTime(){
        return this.#internalDepartureTime.toLocaleString();
    }
    set departureTime(date){
        if(!date){
            throw new Error('Date cannot be null')
        }
        if(date - Date.now() < 0){
            throw new Error('Date is in past')
        }
        this.#internalDepartureTime = date
    }
}

const berlinToParis = new flightPlan('FR35TP', 'Berlin', 'Paris');
berlinToParis.departureTime = new Date(2024,4,1,18,0);
console.log(berlinToParis.departureTime);

//if we try to access the internal data
berlinToParis.#internalDepartureTime  = new Date(2024,7,8);// error private field