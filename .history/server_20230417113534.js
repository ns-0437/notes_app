//console.log("Hello world from Node");
const express = require('express');
const app=express();

app.get("/", function(req, res)){
    res.send("")
}

app.listen(5000);
