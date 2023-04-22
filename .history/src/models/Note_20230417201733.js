//Steps:
//1. Define Schema -> Note: id, userid, title, content, dateadded
//2. Create Model -> <model name> <schema> Note

const mongoose = require('mongoose');

const noteSchema = mongoose.Schema({
    id:{
        type: string,
        unique: true,
        required: true
    },
    userid:{
        type: string,
        required: true
    },
    title:{
        type: string,
        required: true
    },
    content:{
        type: string,
        
    },
    dateAddexd
})