//initialization of express
const express = require('express');
const app=express();

//initialization of mongoose
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://nsharma_03:Navin@22670437@cluster0.c4hurkz.mongodb.net/notesdb").then(function()
{
    
});


/*Making APIs
app route
route of home page(/)*/


//Starting the server on the port
app.listen(5000, function(){
    console.log("Server started at PORT:5000")
});
