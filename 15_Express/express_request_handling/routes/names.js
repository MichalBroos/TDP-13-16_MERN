"use strict"

const router = require("express").Router();

// 5. + 6.
let names = [];
for (let i = 1; i < 6; i++) {
    names.push(`NameNodemon${i}`);
}
router.get("/getAll", (req, res) => {
    console.log(`Names shown for middleware exercise ${names}`);
    res.send(names);
});

// 7.
router.get("/getById/:id", (req, res) => {
    const id = req.params.id;
    if (id >= 0 && id < names.length) {
        res.send(names[req.params.id]);
    } else {
        res.status(404).send("Invalid id provided");
    }
});

// 8.
// Postman needed because doing as DELETE, not GET - http://localhost:3000/delete/4
router.delete("/delete/:id", (req, res) => {
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
router.post("/create", (req, res) => {
    console.log(`POST to create ${JSON.stringify(req.body)}`); // stringify required in ``
    console.log("POST to create", req.body);
    const created = req.body.name;
    names.push(created);
    // 201 Created typical after POST
    res.status(201).send(`Created ${created} with id ${names.length-1}; names now ${names}`);
});

// 10. Postman - http://localhost:3000/replace/0/?name=queryParameterName
router.put("/replace/:id", (req, res) => {
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

// throws "Router.use() requires a middleware function but got a Object"
// module.exports = {
//     router
// }
module.exports = router;
