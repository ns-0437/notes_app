//initialization of express
import express from 'express';
const app=express();

//initialization of mongoose
import { connect } from 'mongoose';
import { find } from './models/Note';

connect("mongodb+srv://nsharma_03:Navin%4022670437@cluster0.c4hurkz.mongodb.net/notesdb").then(function()
 {  
    app.get("/", function(req, res){
    res.send("This is the Home Page");
    });

    app.get("/notes", async function(req, res){
        var notes = await find();
        res.json(notes);
    });  
});



//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
