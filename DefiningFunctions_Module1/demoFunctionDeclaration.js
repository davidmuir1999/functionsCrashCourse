//Creating a function that converts gallons to litres
function gallonsToLitresConvert(gallons){
    let conversion = gallons * 4.5461;
    return conversion.toFixed(4); //4 sig fig
}

console.log(gallonsToLitresConvert(3));