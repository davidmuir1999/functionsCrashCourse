const gallonsToLitres = function(gallons){
    let conversion = gallons * 4.5461;
    return conversion.toFixed(4);
}

console.log(gallonsToLitres(10));