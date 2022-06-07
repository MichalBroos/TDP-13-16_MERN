"use strict"
const cowsay = require("cowsay");

const cowThink = (textToThink) => cowsay.think({text: textToThink, r: false, e: "*|*"});

module.exports = {
    cowThink
}
