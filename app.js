
const mongoose=require('mongoose');
const express=require('express');
const Posts = require('https://github.com/divy-rj/Social-media-clone/blob/master/models/post');
 let user_function=require("https://github.com/divy-rj/Social-media-clone/blob/master/models/user.js");
 let rout=require("https://github.com/divy-rj/Social-media-clone/blob/master/Routes/user.js");
 const interaction=require("https://github.com/divy-rj/Social-media-clone/blob/master/Routes/interection");
 const user_interaction=require("https://github.com/divy-rj/Social-media-clone/blob/master/Routes/interection")
const comm=require("https://github.com/divy-rj/Social-media-clone/blob/master/Routes/community.js");
const Process = require("process");
const Grid = require("gridfs-stream");
const {GridFsStorage} = require("multer-gridfs-storage");
const multer = require("multer");

var app=express();
app.use(express.json());

const uri = Process.env.uri||'mongodb+srv://divyraj:19992000.Dr@cluster0.pv8ur.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
app.use('/routes/user/',rout);
app.use('/routes/friend/',user_interaction);
app.use('/routes/post/',interaction);
app.use('/routes/comm/',comm)
const conn=mongoose.connect(uri,{useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=>{
        console.log("connected to db");
    })
    .catch(()=>{
        console.log("not connected");
    });


const port=Process.env.PORT||3000;
app.listen(port,()=>{
    console.log(`listening at ${port}`);
})

