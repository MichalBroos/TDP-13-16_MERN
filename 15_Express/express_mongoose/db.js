"use strict"

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost:27017/movies_exercise", {useNewUrlParser: true}, (err) => {
    return err ? console.log("db connection error") : console.log("db connected");
});

const movieSchema = new Schema({
    title: {
        type: String,
        required: true},
    releaseDate: {
        type: Date,
        required: true
    },
    earnings: {
        type: Number,
        min: 0,
        max: Number.MAX_SAFE_INTEGER,
        default: 0
    },
    actors: {
        type: [String],
        default: ["default actor 1", "default actor 2"]
    }
});

const Movie = mongoose.model("movie", movieSchema);

module.exports = Movie;
