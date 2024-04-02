// function printThis(){
//     'use strict' -> output =undefined
//     console.log(this)
// }

// printThis() -> strict more off, output = global window object

function helicopter(speed){
    this.speeds = speed;
}

const h = new helicopter(100);
console.log(h.speeds);
