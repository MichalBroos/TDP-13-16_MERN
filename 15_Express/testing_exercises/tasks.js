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
    let places = [];
    const specialPlaces = [11, 12, 13];
    const specialEndings = {1: "st", 2: "nd", 3:"rd"};//[1, 2, 3]
    for (let i = 1; i < 101; i++) {
        if (i !== place) {
            const specialEnding = String(i).slice(-1);
            if (!specialPlaces.includes(i) && specialEndings[specialEnding]) {
                places.push(i + specialEndings[specialEnding]);
            } else {
                places.push(i + "th");
            }
        }
    }

    // console.log(places.join(", "));
    let prettyPrintResults = () => {
        for (let i = 0; i < places.length; i++) {
            if (i === places.length - 1) {
                // last element
                console.log(places[i]);
            } else if ((i + 1) % 10) { // equivalent to (String(i).slice(-1) !== "9")
                // inner elements
                process.stdout.write(places[i] + ", ");
            } else {
                // end of line but not last element
                process.stdout.write(places[i] + ",\n");
            }
        }
    }

    prettyPrintResults();
    // console.log(places);
    return places;
}
// doggoCompetition(80);

module.exports = {
    isFactorial,
    doggoCompetition
}
