//initialization of express
const express = require('express');
const app=express();

//initialization of mongoose
const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');


mongoose.connect("mongodb+srv://nsharma_03:Navin%4022670437@cluster0.c4hurkz.mongodb.net/notesdb").then(function()
 {  
    app.get("/", function(req, res){
    res.send("This is the Home Page");
    });

    
    app.get("/notes/list/:userid", async function(req, res){
        var notes = await Note.find({ userid: req.params.userid});
        res.json(notes);
    });  

    app.post("/notes/list/add", async function(req, res){

        res.json(req.body);


        // const newNote = new Note({
        //     id: "0004",
        //     userid: "navin12820022@gmail.com",
        //     title: "My First Note with second Account",
        //     content: "This is the content"
        // });     
        // await newNote.save();
        // const response = { message: "New Note created!"}
        // res.json(response);
    });
});



//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
