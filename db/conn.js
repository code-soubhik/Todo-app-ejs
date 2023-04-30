// require('dotenv').config();
const mongoose = require('mongoose');

// const mongoUrl = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_NAME}.mongodb.net/${process.env.COLLECTION_NAME}`;
const mongoUrl = `mongodb+srv://mytodo111:No89u9YyH4wikfrx@cluster0.bjtnivp.mongodb.net/Todo-app`;

mongoose.connect(mongoUrl,{useNewUrlParser: true})
.then(()=>console.log("Connected to the database"))
.catch((error)=>console.log("Error connecting to the database:", error))
