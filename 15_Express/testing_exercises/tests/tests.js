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
