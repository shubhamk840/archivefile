const mongoose = require("mongoose");

mongoose.connect(" mongodb://127.0.0.1:27017/MyArchives",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
    console.log("connection fine");
}).catch((e)=>{
        console.log("there is some error while connecting to the database");
})