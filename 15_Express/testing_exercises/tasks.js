"use strict"

// Task 1
let isFactorial = (intToTest) => {
    let dividend = intToTest;
    let divisor = 2;
    let keepGoing = true;

    while (keepGoing && dividend !== 1) {
        if (dividend % divisor === 0) {
            dividend /= divisor;
            divisor++;
        } else {
            keepGoing = false;
        }
    }

    return keepGoing ? `${intToTest} = ${divisor-1}!` : `${intToTest} NONE`;
};

const testInts = [120, 150, 3628800, 479001600, 6, 18];
for (let testInt of testInts) {
    console.log(isFactorial(testInt));
}

module.exports = {
    isFactorial
}
