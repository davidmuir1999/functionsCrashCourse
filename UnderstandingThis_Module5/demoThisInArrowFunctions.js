// let aircraft = {
//     make: 'Boeing 747',
//     capacity : 450,

//     print(){
//         console.log(this)
//     }
// }

// aircraft.print() //ideal output

let aircraft = {
    make: 'Boeing 747',
    capacity : 450,

    print: () => {
        console.log(this)
    }
}

aircraft.print() //Output {}