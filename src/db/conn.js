const mongoose = require("mongoose");

mongoose.connect(" mongodb+srv://iamskk0502:iamskk0502@zcluster.6271j.mongodb.net/codeArchive?retryWrites=true&w=majority",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connection fine");
}).catch((e)=>{
        console.log("there is some error while connecting to the database");
})