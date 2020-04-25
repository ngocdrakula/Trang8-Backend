const express = require('express');
const bodyParser = require('body-parser');
app.use(express.static("File"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));
app.get("/", (req, res) => {
    res.sendFile("HTML/index.html", { root: __dirname });
});