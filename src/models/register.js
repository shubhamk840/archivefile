const mongoose = require('mongoose');

const userData = new mongoose.Schema({
    fname: {
        type: String,
        required: true,
    },
    lname :{
        type: String,
        required:true
    },
    link:{
        type:String,
        required:true
    },
    Difficulty:{
        type:Number,
        required:true
    }
});

//Now creating a collection.
const Archive = new mongoose.model('Archive',userData); 

module.exports = Archive;