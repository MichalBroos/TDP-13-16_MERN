"use strict"

const express = require("express");
const app = express();
// for 9. after npm install body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // converts request body from JSON

// 4.
app.get("/", (req, res) => {
    res.send("Hello, my name is M!");
});

// 5. + 6.
let names = [];
for (let i = 1; i < 6; i++) {
    names.push(`Name${i}`);
}
app.get("/getAll", (req, res) => {
    res.send(names);
});

// 7.
app.get("/getById/:id", (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < names.length) {
        res.send(names[req.params.id]);
    } else {
        res.status(404).send("Invalid id provided");
    }
});

// 8.
// Postman needed because doing as DELETE, not GET
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < names.length) {
        const deleted = names.splice(id, 1);
        res.send(`Deleted ${deleted} at id ${id}; remaining ${names}`);
    } else {
        res.status(204).send("Nothing deleted, No content sent");
    }
});

// 9.
app.post("/create", (req, res) => {
    console.log(`POST to create ${JSON.stringify(req.body)}`); // stringify required in ``
    console.log("POST to create", req.body);
    const created = req.body.name;
    names.push(created);
    // 201 Created typical after POST
    res.status(201).send(`Created ${created} with id ${names.length-1}; names now ${names}`);
});

const server = app.listen(3000, () => {
    console.log(`Server started on port ${server.address().port}`);
});
