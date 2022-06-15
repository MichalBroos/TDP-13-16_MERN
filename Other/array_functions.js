"use strict"
// Starting with a list of numbers, use forEach/filter/map/reduce to...
const numbers = [15,42,5,10,6,41];
// const numbers = [];
console.log("Numbers:", numbers);

// find the max value
console.log("Max w/o AF:", Math.max(...numbers));
console.log("Max w AF:", numbers.reduce((acc, next) => acc > next ? acc : next, -Infinity));

// find the min value
console.log("Min w AF:", numbers.reduce((acc, next) => acc < next ? acc : next, Infinity));

// remove the odd numbers
console.log("Odd removed:", numbers.filter(num => !(num % 2)));

// remove the even numbers
console.log("Even removed:", numbers.filter(num => num % 2));

// find the sum of the list
console.log("Sum:", numbers.reduce((acc, next) => acc + next, 0));

// square every number in the list, then remove the even numbers, then find the min value
console.log("Chain result:", numbers.map(num => Math.pow(num, 2))
                             .filter(num => num % 2)
                             .reduce((acc, next) => acc < next ? acc : next, Infinity));
