// require('dotenv').config();
const mongoose = require('mongoose');

// const mongoUrl = process.env.DB_URL

mongoose.connect("mongodb+srv://mytodo111:No89u9YyH4wikfrx@cluster0.bjtnivp.mongodb.net/Todo-app",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 30000, // set the timeout to 30 seconds
})
.then(()=>console.log("Connected to the database"))
.catch((error)=>console.log("Error connecting to the database:", error))
