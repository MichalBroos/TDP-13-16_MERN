"use strict"

const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const moviesRouter = require("./routes/movies.js");

app.get("/", (req, res) => {
    res.send("Movies homepage");
});

app.use("/movies", moviesRouter);

const server = app.listen(3001, () => {
    console.log(`Server started on port ${server.address().port}`);
});

module.exports = server;
