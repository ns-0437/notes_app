//initialization of express
const express = require('express');
const app=express();
require("dotenv").config();

//initialization of mongoose
const mongoose = require('mongoose');
// const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//true-> Nested Objects (correct)
//false-> Nested Objects (Not Correct)

const mongoDBPath = process.env.MONGO_URI;
mongoose.connect(mongoDBPath).then(function()
 {  
    app.get("/", function(req, res){
        const response = { message: "API Works!"};
        res.json(response);
        //res.send("This is the Home Page");
    });

    const noteRouter = require(('./src/routes/Note.js'));
    app.use = ("/notes", noteRouter);
    
});


//starting the server on the PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function(){
    console.log("Server started at PORT: " + PORT);
});
