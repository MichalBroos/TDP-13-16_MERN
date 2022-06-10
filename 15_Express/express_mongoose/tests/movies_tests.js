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
                        done();
                    }
                    // done() here would run it 5 times = wrong!
                }).catch((err) => console.error(err));
            }
        }).catch((err) => console.error(err));
    });

    mocha.it("should get all 5 movies", (done) => {
        chai.request(server).get("/movies/getAll").end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            chai.expect(res.body.length).to.equal(5);
            done();
        });
    });

    mocha.it(`should get movie "title0" (first movie)`, (done) => {
        chai.request(server).get(`/movies/getById/${id}`).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(200);
            // console.log(id);
            // console.log(res.req._header);
            // console.log(res.req.path);
            chai.expect(res.body.title).to.equal("title0");
            done();
        });
    });

    mocha.it("should create a movie", (done) => {
        const newMovie = {
            title: "newMovie",
            releaseDate: "2005, 11, 17",
            earnings: "666666",
            actors: ["z1", "z2"]
        };
        // send = request body
        chai.request(server).post("/movies/create").send(newMovie).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(201);
            // console.log(res.text);
            chai.expect(res.text).to.include(`Created ${newMovie.title} with id `);
            done();
        });
    });

    mocha.it("should replace the first movie", (done) => {
        const replacement = {
            title: "replacementMovie",
            releaseDate: "2015, 11, 17",
            earnings: "333333",
            actors: ["r1", "r2"]
        };
        chai.request(server).put(`/movies/replace/${id}`).send(replacement).end((err, res) => {
            chai.expect(err).to.be.null;
            chai.expect(res.status).to.equal(202);
            // console.log(res.body);
            chai.expect(res.body.title).to.equal("title0");
            done();
        });
    });
});
