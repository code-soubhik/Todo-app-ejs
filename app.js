const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const allRoutes = require('./src//router/allRoutes');
const conn = require('./src/db/conn');
require('./src/db/conn')

const app = express();
const port = process.env.PORT || 4444;

app.set('view engine', 'ejs');

app.use(conn)
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allRoutes)

app.listen(port, () => {
    console.log("Backend is working on port : http://localhost:" + port);
})