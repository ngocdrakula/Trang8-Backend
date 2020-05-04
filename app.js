const express = require('express');

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