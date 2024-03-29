const convert = new Function('gallons', 'return gallons * 4.5461;')

console.log(convert(10).toFixed(4));