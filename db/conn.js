require('dotenv').config();
const express = require('express');
const conn = new express.Router();
const mongoUrl = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_NAME}.mongodb.net/${process.env.COLLECTION_NAME}`;

const session = require('express-session');
const MongoStore = require('connect-mongo');
const { default: mongoose } = require('mongoose');

mongoose.connect(mongoUrl,{useNewUrlParser: true})
.then(()=>console.log("Connected to the database"))
.catch((error)=>console.log("Error connecting to the database:", error))

conn.use(session({
    secret: 'foo',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: mongoUrl})
}));

module.exports = conn;