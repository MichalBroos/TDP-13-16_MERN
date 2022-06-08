"use strict"

const express = require("express");
const app = express();

app.get("/throwError", (req, res, next) => {
    // endpoint which throws an error
    const err = new Error("Explanatory error message");
    next(err); // return not strictly necessary because nothing below
});

app.use((err, req, res, next) => {
    // error logger
    console.log(err.stack);
    next(err);
});

// don't forget 4 params for error handling, see 04_ErrorHandling.pdf note
app.use((err, req, res, next) => {
    // send response
    res.status(500).send(err.message);
});

const server = app.listen(4000, () => {
    console.log(`Server started on port ${server.address().port}`);
});
