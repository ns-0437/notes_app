//initialization of express
const express = require('express');
const app=express();

//initialization of mongoose
const mongoose = require('mongoose');
const Note = require('./models/Note');

mongoose.connect("mongodb+srv://nsharma_03:Navin%4022670437@cluster0.c4hurkz.mongodb.net/notesdb").then(function()
 {  
    app.get("/", function(req, res){
    res.send("This is the Home Page");
    });

    app.get("/notes", function(req, res){
        var notes = await
    res.send("This is the Notes Page");
    });
});



//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
