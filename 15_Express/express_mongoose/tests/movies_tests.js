"use strict"

const mocha = require("mocha");
const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);

const server = require("../index.js");
const Movie = require("../db.js");

mocha.describe("Movies CRUD testing", () => {
    let id;

    mocha.beforeEach((done) => {
        Movie.deleteMany({}).then(() => {
            for (let i = 0; i < 5; i++) {
                Movie.create({
                    title: `title${i}`,
                    releaseDate: `${1995+i}, 11, 17`,
                    earnings: `99999${i}`,
                    actors: [`a${i}`, `b${i}`]
                }).then((createdMovie) => {
                    if (i === 0) {
                        id = createdMovie._id;
                    }
                    // done() here would run it 5 times = wrong!
                }).catch((err) => console.error(err));
            }
            done();
        }).catch((err) => console.error(err));
    });

    mocha.it("should get all 5 trainers", (done) => {
        chai.request(server).get("/movies/getAll").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.length).to.equal(5);
            done();
        });
    });
});
