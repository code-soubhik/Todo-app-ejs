const express = require('express');
const router = new express.Router();

let options = { weekday: "long", year: "numeric", month: 'long', day: 'numeric' };
let date = new Date();
let currentDay = date.toLocaleDateString("en-US", options);

const userModel = require('../Schemas/user');

//middle ware for login authentication
const authenticate = async (req,res,next)=>{
    const token = req.session.token;
    if(!token){
        return res.redirect
    }
}

router.get("/user/:id",async (req,res)=>{
    const id = req.params.id;
    try {
        const idPresent = await userModel.findOne({ _id:id })
        if(idPresent){
            req.session.token = id;
            res.render("home",{id,currentDay})
        }
        else{
            res.status(502).send("Something went wrong")
        }
    } catch (error) {
        console.log(error);
        res.status(401).send("Error! Please try after some time")
    }
})

router.post('/users', async (req, res) => {
    const { nameField, emailField, userField, passwordField, confirmPasswordField } = req.body;
    if (passwordField === confirmPasswordField) {
        try {
            const existingUser = await userModel.findOne({ userField });
            if (existingUser) {
                res.render('error', { status: "USER EXIST" });
            }
            else {
                const newUser = await userModel.create({
                    username: userField,
                    email: emailField,
                    name: nameField,
                    password: passwordField,
                });
                res.redirect(`/user/${newUser._id}`)
            }
        } catch (error) {
            console.log(error);
            res.send({ status: "Please Try again" });
        }
    }
    else {
        res.status(501).send("Password Error")
    }
})

router.get("/users", async (req, res) => {
    const { userField, passwordField } = req.query;
    const existingUser = await userModel.findOne({username:userField });
    if (existingUser) {
        if (existingUser.password === passwordField) {
            // res.render('home', { currentDay })
            res.redirect(`/user/${existingUser._id}`)
        } else {
            res.send({ Status: "Invalid password" });
        }
    }
    else {
        res.send({ Status: "Invalid username or password" });
    }
    res.end();
})



module.exports = router;