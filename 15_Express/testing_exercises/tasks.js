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
// for (let testInt of testInts) {
//     console.log(isFactorial(testInt));
// }

// Task 2
let doggoCompetition = (place) => {
    // let places = [...Array(100).keys()]
    // places.splice(--place, 1);
    // console.log(places);

    for (let i = 1; i < 101; i++) {
        switch (i) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 100:
                break;
            default:
                //
        }
    }
}
doggoCompetition(1);

module.exports = {
    isFactorial
}
