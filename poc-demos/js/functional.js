/*
    currying - the technique of translating the evaluation of a function 
               that takes multiple arguments into evaluating a sequence 
               of functions, each with a single argument. 

    Curried functions use closure to cache the previously provided arguments,
    the resulting function only needs to remaining args provided to calculate 
    a value.
*/

// Using .bind to facilitate "currying"
function convertUnits(toUnit, factor, input) {
    return `${(input * factor).toFixed(4)} ${toUnit}`;
}

let meterToKm = convertUnits.bind(null, 'km', 0.001);
let kgToGram = convertUnits.bind(null, 'g', 1000);
let feetToYards = convertUnits.bind(null, 'yds', (1/3));

let r1 = meterToKm(2000); // 2km
let r2 = kgToGram(3.4); // 3400g
let r3 = feetToYards(300); // 100yds
console.log(r1, r2, r3);