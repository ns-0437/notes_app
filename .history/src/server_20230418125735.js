//initialization of express
const express = require('express');
const app=express();

//initialization of mongoose
const mongoose = require('mongoose');


mongoose.connect("mongodb+srv://nsharma_03:Navin%4022670437@cluster0.c4hurkz.mongodb.net/notesdb").then(function()
 {  
    app.get("/", function(req, res){
    res.send("This is the Home Page");
    });

    const Note = require('./models/Note');
    app.get("/notes", function(req, res){
        var notes =  Note.find();
        // res.json(notes);
        res.send();
    });  
});



//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
