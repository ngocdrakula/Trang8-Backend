const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')({
    secret: "Kitumahoa",
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 7*24*60*60*1000
    }
});
const sharedsession = require("express-socket.io-session");
const mongoose = require("mongoose");
mongoose.connect('mongodb+srv://Trang8:AdminTrang8@trang8-cepg4.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true',
    {
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
        if(err){
            console.log("DB can't connect: ", err);
        }
        else{
            console.log("DB connected!")
        }
    }
);

const app = express();

app.use(cors({origin:['http://localhost:3000', 'trang8.herokuapp.com'], credentials: true}))
app.use(session);
app.use(express.static("File"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));

app.get("/", (req, res) => {
    res.json({
        success: true,
        link: "Home"
    });
});
const apiRouter = require("./routers/api");
app.use("/api", apiRouter);

server = app.listen(process.env.PORT || 3000, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server start!");
    }
});