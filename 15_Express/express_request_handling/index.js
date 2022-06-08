"use strict"

const express = require("express");
const app = express();

const namesRouter = require("./routes/names.js");

// for 9. after npm install body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // converts request body from JSON

// Middleware exercise
const timeLogger = (req, res, next) => {
    console.log(`Time middleware ${new Date()}`);
    // no return example
    next();
    console.log("Time middleware logging after all middlewares finish");
}
app.use(timeLogger);

app.use((req, res, next) => {
    console.log("Another middleware");
    // return example
    return next();
    console.log("Another middleware unreachable code");
});

// 4.
app.get("/", (req, res) => {
    res.send("Hello, my name is M!");
});

app.use("/names", namesRouter);

const server = app.listen(3000, () => {
    console.log(`Server started on port ${server.address().port}`);
});
