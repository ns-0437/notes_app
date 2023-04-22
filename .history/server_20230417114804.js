//initialization of express
const express = require('express');
const app=express();

/*Making APIs*/

//route of home page(/)
app.get("/", function(req, res){
    res.send("This is the Home Page");
})

app.get("/notes", function(req, res){
    res.send("This is the Notes Page");
})

//Starting the server on the port
app.listen(5000, function()
    console.log
);
