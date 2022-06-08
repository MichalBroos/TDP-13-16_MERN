"use strict"

const express = require("express");
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

const moviesRouter = require("./routes/movies.js");

app.get("/", (req, res) => {
    res.send("Movies homepage");
});

app.use("/movies", moviesRouter);

const server = app.listen(3000, () => {
    console.log(`Server started on port ${server.address().port}`);
});
