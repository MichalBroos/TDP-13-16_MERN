"use strict"

const router = require("express").Router();
const Movie = require("../db.js");

// http://localhost:3000/movies/getall
router.get("/getAll", (req, res, next) => {
    Movie.find()
        .then((allMovies) => res.send(allMovies))
        .catch((err) => next(err));
});

// http://localhost:3000/movies/getbyid/mongo_id
router.get("/getById/:id", (req, res, next) => {
    const id = req.params.id;
    Movie.findById(id)
        .then((movie) => res.send(movie))
        .catch((err) => next(err));
});

/*
http://localhost:3000/movies/create
+ body
{
    "title": "title",
    "releaseDate": "1995, 11, 17",
    "earnings": "999999",
    "actors": ["a1", "a2"]
}
*/
router.post("/create", (req, res, next) => {
    // 1. using create
    // const newMovie = req.body;
    // Movie.create(newMovie).then...

    // 2. OOP way
    const newMovie = new Movie(req.body);
    newMovie.save()
        .then((createdMovie) => res.status(201)
            .send(`Created ${createdMovie.title} with id ${createdMovie._id}`))
        .catch((err) => next(err));
});

// http://localhost:3000/movies/replace/mongo_id
router.put("/replace/:id", (req, res, next) => {
    const id = req.params.id;
    const newMovie = req.body;
    Movie.findByIdAndUpdate(id, newMovie)
        .then((updatedMovie) => res.status(202).send(updatedMovie))
        .catch((err) => next(err));
});

// http://localhost:3000/movies/delete/mongo_id
router.delete("/delete/:id", (req, res, next) => {
    const id = req.params.id;
    Movie.findByIdAndDelete(id)
        .then((deletedMovie) => {
            console.log(`Deleted ${deletedMovie}`);
            res.status(204).send();
        })
        .catch((err) => next(err));
});

module.exports = router;

/*
extension - error handling & custom response messages as in the previous exercises
*/
