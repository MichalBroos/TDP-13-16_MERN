"use strict"

const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../index.js");
const Movie = require("../db.js");

Mocha.describe("Movies CRUD testing", () => {
    mocha.beforeEach(() => {
    });

    mocha.it("should ", () => {
    });
});
