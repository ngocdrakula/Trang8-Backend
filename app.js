const express = require('express');
const bodyParser = require('body-parser');
<<<<<<< HEAD
const mongoose = require('mongoose');
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

=======
>>>>>>> d1ec725d91964ad5c05d1c6fcc265572e00aa417
const app = express();
app.use(express.static("File"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json({}));
<<<<<<< HEAD

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

app.use((req, res, next) => {
    if(req.session.userInfo)
        if(Date.now() > req.session.userInfo.last + 1000*60*5){
            req.session.userInfo.last = Date.now();
            io.sockets.emit('online', {
                _id: req.session.userInfo._id,
                username: req.session.userInfo.username
            });
        }
    next();
});
app.get("/", (req, res) =>{
    res.sendFile("HTML/index.html", { root: __dirname });
});
const profileRouter = require("./routers/profile");
app.use("/profile", profileRouter);

const conversationRouter = require("./routers/conversation");
app.use("/conversation", conversationRouter);

const userRouter = require("./routers/user");
app.use("/user", userRouter);

const postRouter = require("./routers/post");
app.use("/post", postRouter);

const imageRouter = require("./routers/image");
app.use("/image", imageRouter);

const apiRouter = require("./routers/api");
app.use("/api", apiRouter);

server = app.listen(1505, (err) => {
=======
server = app.listen(process.env.PORT || 3000, (err) => {
>>>>>>> d1ec725d91964ad5c05d1c6fcc265572e00aa417
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