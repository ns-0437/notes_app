//initialization of express
const express = require('express');
const app=express();

//initialization of mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nsharma_03:Navin@22670437@cluster0.c4hurkz.mongodb.net/notesdb").then(function()
{});


/*Making APIs
app route
route of home page(/)*/
app.get("/", function(req, res){
    res.send("This is the Home Page");
})

//route of notes page(/)
app.get("/notes", function(req, res){
    res.send("This is the Notes Page");
})

//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
