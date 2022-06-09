"use strict"

const mocha = require("mocha");
const chai = require("chai");
const tasks = require("../tasks.js");

mocha.describe("Test factorial", () => {
    mocha.it("120 should equal to 5!", () => {
        chai.expect("120 = 5!").to.equal(tasks.isFactorial(120));
    });
    mocha.it("150 should equal to NONE", () => {
        chai.expect("150 NONE").to.equal(tasks.isFactorial(150));
    });
    mocha.it("3628800 should equal to 10!", () => {
        chai.expect("3628800 = 10!").to.equal(tasks.isFactorial(3628800));
    });
    mocha.it("479001600 should equal to 12!", () => {
        chai.expect("479001600 = 12!").to.equal(tasks.isFactorial(479001600));
    });
    mocha.it("6 should equal to 3!", () => {
        chai.expect("6 = 3!").to.equal(tasks.isFactorial(6));
    });
    mocha.it("18 should equal to NONE", () => {
        chai.expect("18 NONE").to.equal(tasks.isFactorial(18));
    });
});

mocha.describe("Test doggo competition", () => {
    mocha.it(`length should be 99`, () => {
        chai.expect(99).to.equal(tasks.doggoCompetition(50).length);
    });
    
    mocha.it(`removing 5th shifts 6th left`, () => {
        chai.expect("6th").to.equal(tasks.doggoCompetition(5)[5-1]);
    });

    let place = 80;
    let nextPlaceString = String(place+1, 10);
    // let placesRemoved = tasks.doggoCompetition(place);
    mocha.it(`reusable shift left with 80 as example`, () => {
        chai.expect(nextPlaceString)
            .to.equal(tasks.doggoCompetition(place)[place-1].substring(0, nextPlaceString.length));
    });
});

/*
extensions:
include rng + loop for indices in doggo element testing
test prettyPrintResults
*/
