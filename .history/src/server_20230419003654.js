//initialization of express
const express = require('express');
const app=express();

//initialization of mongoose
const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//true-> Nested Objects (correct)
//false-> Nested Objects (Not Correct)


mongoose.connect("mongodb+srv://nsharma_03:Navin%4022670437@cluster0.c4hurkz.mongodb.net/notesdb").then(function()
 {  
    app.get("/", function(req, res){
    res.send("This is the Home Page");
    });

    
    app.get("/notes/list/:userid", async function(req, res){
        var notes = await Note.find({ userid: req.params.userid});
        res.json(notes);
    });  

    app.post("/notes/add", async function(req, res){
                
        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content
        });     
        await newNote.save();
        
        const 
        const response = { message: "New Note created! " + 'id:  ${req.body.id} };
        res.json(response);
    });
});



//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
