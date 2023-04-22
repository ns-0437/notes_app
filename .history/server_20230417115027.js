//initialization of express
const express = require('express');
const app=express();

/*Making APIs*/

//route of home page(/)
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
