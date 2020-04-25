const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(express.static("File"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/trang8',
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if(err){
            console.log(err);
        }
        else{
            console.log("DB conected!")
        }
    }
);

server = app.listen(process.env.PORT || 3000, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server start!");
    }
});
app.get("/", (req, res) => {
    res.sendFile("HTML/404.html", { root: __dirname });
});