const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 4444;
const mongoUrl = "mongodb+srv://todo111:A5VDUAvQzGlP31CM@cluster0.ymx24ay.mongodb.net/test";


mongoose.connect(mongoUrl,{useNewUrlParser:true})
.then(()=>{console.log("Connected To Database")})
.catch((error)=>{console.log(error.message)})


app.set('view engine', 'ejs')

app.get('/',(req,res)=>{
    // let options = {weekday:"long",year:"numeric", month: 'long', day: 'numeric' };
    // let date = new Date();
    // let currentDay = date.toLocaleDateString("en-US", options);
    // console.log(currentDay)
    // res.send("Hello World");
    res.render('Views/login')
})


app.listen(port,()=>{
    console.log("Backend is working on port : http://localhost:"+port);
})