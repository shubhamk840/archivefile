const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require("path");
const static_path = path.join(__dirname,"./public");
const hbs = require('ejs');
const Archive = require('./src/models/register');
const connect = require('./src/db/conn');
const { MongooseDocument } = require('mongoose');
app.set('view engine','ejs');

app.use(express.urlencoded({extended:false}));

// const Register = require('./src/db/models/register');

//For static website 
app.use(express.static(static_path));

app.get('/',(req,res)=>{
      res.render('index');
})
// Creating a new user in database
app.post('/register',async (req,res)=>{
    try{
          console.log(req.body);
       const data = new Archive({
             fname : req.body.fname,
             lname : req.body.lname,
             link : req.body.link,
             Difficulty : req.body.Difficulty
       });
       data.save();
       res.render('thanks',{user:req.body})
    }
    catch(error){
          res.status(400).send(errpr);
    }
})

app.listen(port,()=>{
      console.log("The port has been succesfully connected");
});
app.get('/showarchive',(req,res)=>{
    Archive.find({},(err,users)=>{
          console.log(users);
         res.render('showarchive',{"arr":users});
    })

});