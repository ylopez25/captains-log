const express = require('express');
const app = express();
const logsController = require("./controllers/logController.js");

app.get('/', (req,res) => {
    res.send("Welcome to captain's log")
})
module.exports= app;

