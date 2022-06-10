"use strict"

const mocha = require("mocha");
const chai = require("chai");
const tasks = require("../tasks.js");

mocha.describe("Test factorial", () => {
    // Efficient version
    const NONE = "NONE";
    let testValues = {120: "5!", 150: NONE, 3628800: "10!", 479001600: "12!", 6: "3!", 18: NONE};

    for (let key in testValues) {
        const result = testValues[key];
        mocha.it(`${key} should equal to ${result}`, () => {
            chai.expect(`${key}${result !== NONE ? " = " : " "}${result}`)
                .to.equal(tasks.isFactorial(parseInt(key, 10)));
        });
    }

    // Repetitive version
    const testValue1 = 120;
    const result1 = "5!";
    mocha.it(`${testValue1} should equal to ${result1}`, () => {
        chai.expect(`${testValue1} = 5!`).to.equal(tasks.isFactorial(testValue1));
    });

    const testValue2 = 150;
    mocha.it(`${testValue2} should equal to ${NONE}`, () => {
        chai.expect(`${testValue2} ${NONE}`).to.equal(tasks.isFactorial(testValue2));
    });

    const testValue3 = 3628800;
    const result3 = "10!";
    mocha.it(`${testValue3} should equal to 10!`, () => {
        chai.expect(`${testValue3} = 10!`).to.equal(tasks.isFactorial(testValue3));
    });

    const testValue4 = 479001600;
    const result4 = "12!";
    mocha.it(`${testValue4} should equal to 12!`, () => {
        chai.expect(`${testValue4} = 12!`).to.equal(tasks.isFactorial(testValue4));
    });

    const testValue5 = 6;
    const result5 = "3!";
    mocha.it(`${testValue5} should equal to 3!`, () => {
        chai.expect(`${testValue5} = 3!`).to.equal(tasks.isFactorial(testValue5));
    });

    const testValue6 = 18;
    mocha.it(`${testValue6} should equal to ${NONE}`, () => {
        chai.expect(`${testValue6} ${NONE}`).to.equal(tasks.isFactorial(testValue6));
    });
});

mocha.describe("Test doggo competition", () => {
    mocha.it(`length should be 99`, () => {
        chai.expect(99).to.equal(tasks.doggoCompetition(50).length);
    });
    
    // Hardcoded
    mocha.it(`removing 5th shifts 6th left`, () => {
        chai.expect("6th").to.equal(tasks.doggoCompetition(5)[5-1]);
    });

    // Reusable + tests 5 random places in <1,99>
    for (let i = 0; i < 5; i++) {
        // test doesn't make sense for 100 as there is nothing to shift left, thus max=99
        const place = getRandomIntInclusive(1, 99);
        const placeIndex = place - 1;
        const nextPlaceString = String(place + 1);
        mocha.it(`removing ${place} shifts ${nextPlaceString} left`, () => {
            chai.expect(nextPlaceString)
                .to.equal(tasks.doggoCompetition(place)[placeIndex].substring(0, nextPlaceString.length));
        });
    }

    for (let i = 0; i < 5; i++) {
        // test doesn't make sense for 1 as there is no previous place, thus min=2
        const place = getRandomIntInclusive(2, 100);
        const prevPlaceIndex = place - 2;
        const prevPlaceString = String(place - 1);
        mocha.it(`removing ${place} leaves ${prevPlaceString} unchanged`, () => {
            chai.expect(prevPlaceString)
                .to.equal(tasks.doggoCompetition(place)[prevPlaceIndex].substring(0, prevPlaceString.length));
        });
    }

    const last = 100;
    const penultimate = last - 1;
    mocha.it(`removing ${last} makes ${penultimate} last element`, () => {
        chai.expect(`${penultimate}`)
            .to.equal(tasks.doggoCompetition(last).slice(-1)[0].substring(0, String(penultimate).length));
    });

    const first = 1;
    const second = first + 1;
    mocha.it(`removing ${first} makes ${second} first element`, () => {
        chai.expect(`${second}`)
            .to.equal(tasks.doggoCompetition(first)[0].substring(0, String(second).length));
    });
});

function getRandomIntInclusive(min, max) {
    // both max and min inclusive
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
extensions:
DONE - include rng + loop for indices in doggo element testing
test prettyPrintResults
*/
