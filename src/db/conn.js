require('dotenv').config();
const mongoose = require('mongoose');

const mongoUrl = process.env.DB_URL

mongoose.connect(mongoUrl,{useNewUrlParser: true})
.then(()=>console.log("Connected to the database"))
.catch((error)=>console.log("Error connecting to the database:", error))
