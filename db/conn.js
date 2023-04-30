const mongoose = require('mongoose');
require('dotenv').config();

const mongoUrl = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASSWORD}@${process.env.CLUSTER_NAME}.mongodb.net/${process.env.COLLECTION_NAME}`;

mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => { console.log("Connected To Database") })
    .catch((error) => { console.log(error.message) })