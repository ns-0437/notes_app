const express = require('express');
const router = express.Router();


router.get("/notes/list/:userid", async function(req, res){
    const userid= req.params.userid;
    const notes = await Note.find({ userid: userid});
    if(!notes){
        res.json({success:false, error: "no such user id exists" });
        return;
    }
    res.json(notes);
});  

router.post("/notes/add", async function(req, res){

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

router.post("/notes/delete", async function(req, res){
    const notes = await Note.findOne({ id: req.body.id});
    if(!notes){
        res.json({success:false, error: "no user id exists"});
        return;
    }
    await Note.deleteOne({id: req.body.id});
    const response = { message: "Note Deleted!"+'id:'+ req.body.id};
    res.json(response);
});