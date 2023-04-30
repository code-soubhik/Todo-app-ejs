const express = require('express');
const session = require('express-session');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const allRoutes = require('./src/router/allRoutes');
require('./src/db/conn')

const app = express();
const port = process.env.PORT || 4444;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));
app.use(session({
    secret: 'my-secret-key',
    resave: false,
    saveUninitialized: true
  }));

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allRoutes)

app.listen(port, () => {
    console.log("Backend is working on port : http://localhost:" + port);
})