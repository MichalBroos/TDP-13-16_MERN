"use strict"
// Starting with a list of numbers, use forEach/filter/map/reduce to...
const numbers = [15,42,5,9,6,41];
console.log("Numbers:", numbers);

// find the max value
console.log("Max w/o AF:", Math.max(...numbers));
console.log("Max w AF:", numbers.reduce((acc, next) => acc > next ? acc : next));

