//console.log("Hello world from Node");
const express = require('express');
const app=express();

//rote of home page(/)
app.get("/", function(req, res){
    res.send("This is the Home Page");
})

app.get("/notes", function(req, res){
    res.send("This is the Home Page");
})

app.listen(5000);
