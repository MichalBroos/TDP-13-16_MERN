"use strict"

const express = require("express");
const app = express();
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
})

// 4.
app.get("/", (req, res) => {
    res.send("Hello, my name is M!");
});

// 5. + 6.
let names = [];
for (let i = 1; i < 6; i++) {
    names.push(`NameNodemon${i}`);
}
app.get("/getAll", (req, res) => {
    console.log(`Names shown for middleware exercise ${names}`);
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
// Postman needed because doing as DELETE, not GET - http://localhost:3000/delete/4
app.delete("/delete/:id", (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < names.length) {
        const deleted = names.splice(id, 1);
        res.send(`Deleted ${deleted} at id ${id}; remaining ${names}`);
    } else {
        console.log("Nothing deleted, No content sent");
        res.status(204).send("204 No content = not shown in response");
    }
});

// 9.
// Postman - http://localhost:3000/create + {"name": "newName2", "anotherField":  "random"} in request body
app.post("/create", (req, res) => {
    console.log(`POST to create ${JSON.stringify(req.body)}`); // stringify required in ``
    console.log("POST to create", req.body);
    const created = req.body.name;
    names.push(created);
    // 201 Created typical after POST
    res.status(201).send(`Created ${created} with id ${names.length-1}; names now ${names}`);
});

// 10. Postman - http://localhost:3000/replace/0/?name=queryParameterName
app.put("/replace/:id", (req, res) => {
    const id = req.params.id;
    console.log(`Full query ${JSON.stringify(req.query)}`);
    if (id >= 0 && id < names.length) {
        const replaced = names[id];
        names[id] = req.query.name;
        res.send(`Replaced ${replaced} with ${names[id]} at id ${id}; names now ${names}`);
    } else {
        console.log("Nothing replaced, No content sent");
        res.status(204).send("204 No content = not shown in response");
    }
});

const server = app.listen(3000, () => {
    console.log(`Server started on port ${server.address().port}`);
});
