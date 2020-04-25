const express = require('express');
const bodyParser = require('body-parser');
app.use(express.static("File"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));
server = app.listen(process.env.PORT || 3000, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server start!");
    }
});
app.get("/", (req, res) => {
    res.sendFile("HTML/index.html", { root: __dirname });
});