const ejs = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 4444;
const mongoUrl = "mongodb+srv://mytodo111:No89u9YyH4wikfrx@cluster0.bjtnivp.mongodb.net/Todo-app";


mongoose.connect(mongoUrl, { useNewUrlParser: true })
    .then(() => { console.log("Connected To Database") })
    .catch((error) => { console.log(error.message) })

//set
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));
// console.log(path.join(__dirname, 'views'))


//use
app.use(bodyParser.urlencoded({ extended: true }));

// schema
const userDetailsSchema = new mongoose.Schema(
    {
        username: { type: String },
        email: { type: String },
        name: { type: String },
        password: { type: String },
    }, {
    collection: "userData"
})

const userModel = mongoose.model("userData", userDetailsSchema)
app.post('/userregister', async (req, res) => {
    // const { username, email, name, password, confirmPass } = req.body;
    const name = req.body.nameField;    
    const username = req.body.userField;
    const email = req.body.emailField;
    const password = req.body.passwordField;
    // const confirmPass = req.body.confirmPasswordField;
    // res.send({status:"Ok"})

    try {
        // const existingUser = await userModel.findOne({ username });
        const existingUser = false;
        if (existingUser) {
            res.render('error',{status:"USER EXUST"});
        }
        else {
            await userModel.create({
                username,
                email,
                name,
                password,
            });
            res.send({ status: "Ok" })
        }
    } catch (error) {
        console.log(error)
        res.send({ status: "error" });
    }
    res.end()
})


//get
app.get("/login", (req, res) => {
    res.render('login', { title: "Login - todo" })
})

app.get("/signup", (req, res) => {
    res.render('signup', { title: "signup - todo" })
})

app.get('/', (req, res) => {
    let options = { weekday: "long", year: "numeric", month: 'long', day: 'numeric' };
    let date = new Date();
    let currentDay = date.toLocaleDateString("en-US", options);
    // console.log(currentDay)
    // res.send("Hello World");
    res.render('home', { currentDay })
})


app.listen(port, () => {
    console.log("Backend is working on port : http://localhost:" + port);
})