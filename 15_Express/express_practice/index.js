"use strict"

// import
const express = require("express");

// initialise
const app = express();

// start
const server = app.listen(3000, () => {
    console.log(`Server started on port ${server.address().port}`);
});

// app.get("/", function(req, res) {
//     res.send("Hello from Express");
// });
// app.listen(3000);
