const express = require("express");
const app = express();
const logsController = require("./controllers/logController.js");

app.get('/', (req,res) => {
    res.send("Welcome to captain's log")
});

//parses all incomming req as json
app.use(express.json())

app.use("/logs", logsController);

app.get("*", (req,res) => {
    res.status(404).send("Page not found");
});

module.exports= app;

