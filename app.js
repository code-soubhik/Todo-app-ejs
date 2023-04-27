const ejs = require('ejs');
const express = require('express');
const bodyParser = require('body-parser');
const allRoutes = require('./router/allRoutes')
const session = require('express-session');
require('./db/conn')

const app = express();
const port = process.env.PORT || 4444;

app.set('view engine', 'ejs');
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(allRoutes)

app.listen(port, () => {
    console.log("Backend is working on port : http://localhost:" + port);
})