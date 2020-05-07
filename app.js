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

app.use(cors());
// app.use(cors({
//     'allowedHeaders': ['sessionId', 'Content-Type'],
//     'exposedHeaders': ['sessionId'],
//     'origin': '*',
//     'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     'preflightContinue': false
//   }));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });
// app.use(cors({
//     origin:['http://trang8.herokuapp.com', 'http://localhost:3000'],
//     methods:['http://trang8.herokuapp.com', 'http://localhost:3000'],
//     credentials: true}))
app.use(session);
if(0){
    app.use('', (req, res, next) => {
        req.session.userInfo = {
            _id: "user._id",
            email: "email",
            username: "username",
            name: "user.name",
            last: Date.now()
        }
        next();
    });}
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

app.use("/:link", (req, res) => {
    res.json({
        success: false,
        link: undefined,
        undefined: req.params.link
    });
});
server = app.listen(process.env.PORT || 1505, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server start!");
    }
});
const io = require("socket.io")(server);
io.use(sharedsession(session, {
    autoSave:true
}));
app.set('socketio', io);
io.on('connection', (socket) => {
    socket.on('online', (data) => {
        if(socket.handshake.session.userInfo){
            var userInfo = socket.handshake.session.userInfo;
            io.sockets.emit('online', {
                _id: userInfo._id,
                username: userInfo.username
            });
        }
    });
});