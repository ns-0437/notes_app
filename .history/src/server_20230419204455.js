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

const mongoDBPath = "mongodb+srv://nsharma_03:Navin%4022670437@cluster0.c4hurkz.mongodb.net/notesdb";
mongoose.connect(mongoDBPath).then(function()
 {  
    app.get("/", function(req, res){
        const response = { message: "API Works!"};
        res.json(response);
        //res.send("This is the Home Page");
    });

    const noteRouter = require(('./routes/Note'));
    app.use = ("/notes", noteRouter);
    
});


//starting the server on the PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server started at PORT: " + PORT);
});
