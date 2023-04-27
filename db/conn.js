const mongoose = require('mongoose');

const mongoUrl = "mongodb+srv://mytodo111:No89u9YyH4wikfrx@cluster0.bjtnivp.mongodb.net/Todo-app";

mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => { console.log("Connected To Database") })
    .catch((error) => { console.log(error.message) })