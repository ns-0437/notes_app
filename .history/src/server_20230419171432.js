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
        const response = { message: "API Works!"};
        res.json(response);
        //res.send("This is the Home Page");
    });

    
    app.get("/notes/list/:userid", async function(req, res){
        const userid= req.params.userid;
        const notes = await Note.findOne({ userid: userid});
        if(!notes){
            res.json({success:false, error: "no such user id exists" });
            return;
        }
        res.json(notes);
    });  

    app.post("/notes/add", async function(req, res){

        await Note.deleteOne({id: req.body.id});
                
        const newNote = new Note({
            id: req.body.id,
            userid: req.body.userid,
            title: req.body.title,
            content: req.body.content
        });     
        await newNote.save();
 
        const response = { message: "New Note created!"+'id:'+ req.body.id};
        res.json(response);
    });

    app.post("/notes/delete", async function(req, res){
        const notes = await Note.findOne({ id: req.body.id});
        if(!notes){
            res.json({success:false, error: "no user id exists"});
            return;
        }
        await Note.deleteOne({id: req.body.id});
        const response = { message: "Note Deleted!"+'id:'+ req.body.id};
        res.json(response);
    });
});



//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
