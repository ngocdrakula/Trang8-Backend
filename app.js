const express = require('express');

// const { MongoClient } = require("mongodb");
// const client = new MongoClient("mongodb+srv://Trang8:AdminTrang8@trang8-cepg4.mongodb.net/test?retryWrites=true&w=majority&useNewUrlParser=true&useUnifiedTopology=true");
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");

//     } catch (err) {
//         console.log(err.stack);
//     }
//     finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);

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
app.get("/", (req, res) =>{
    res.json({
        success: true,
        link: "Home"
    });
});
app.use("/:link", (req, res) =>{
    res.json({
        success: true,
        link: req.params.link
    });
});
server = app.listen(process.env.PORT || 3000, (err) => {
    if(err){
        console.log(err);
    }
    else{
        console.log("Server start!");
    }
});