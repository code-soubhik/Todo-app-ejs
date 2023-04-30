require('dotenv').config();
const mongoose = require('mongoose');

// const mongoUrl = `mongodb+srv://mytodo111:No89u9YyH4wikfrx@cluster0.bjtnivp.mongodb.net/Todo-app`;

const mongoUrl = process.env.DB_URL

mongoose.connect(mongoUrl,{useNewUrlParser: true})
.then(()=>console.log("Connected to the database"))
.catch((error)=>console.log("Error connecting to the database:", error))
