function alterPassenger(name){
    console.log(`${name}: ${this.message}`);
}

const presentToGateWarning = {
    message: 'Please present to boarding gate 3',
    priority: 1
}

alterPassenger.call(presentToGateWarning, 'John Doe')
