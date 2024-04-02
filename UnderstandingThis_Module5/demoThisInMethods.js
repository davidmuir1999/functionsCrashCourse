//In an Object

const aircraft = {
    altitude: 1000,

    changeAltitude: function(value){
        this.altitude += value;
        console.log(this.altitude);
    },
};

aircraft.changeAltitude(200)

//In a Class

class Aircraft{
    constructor(altitude){
        this.altitude = altitude;
    }

    changeAltitude(value){
        this.altitude += value
        console.log(this.altitude)
    }
}

const a1 = new Aircraft(2000)
a1.changeAltitude(200)