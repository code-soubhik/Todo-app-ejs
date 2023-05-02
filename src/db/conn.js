require('dotenv').config();
const { connect } = require('mongoose');

const mongoUrl = process.env.DB_URL
const mongoUrlData = "mongodb+srv://mytodo111:No89u9YyH4wikfrx@cluster0.bjtnivp.mongodb.net/Todo-app"

connect(mongoUrlData,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 30000, // set the timeout to 30 seconds
})
.then(()=>console.log("Connected to the database","\nmongoUrl",mongoUrl))
.catch((error)=>console.log("Error connecting to the database:", error))
