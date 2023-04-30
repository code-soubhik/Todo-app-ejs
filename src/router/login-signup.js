const express = require('express');
const router = new express.Router();
const userModel = require('../Schemas/user');

//sign up route
router.post('/users', async (req, res) => {
    const { nameField, emailField, userField, passwordField, confirmPasswordField } = req.body;
    if (passwordField === confirmPasswordField) {
        try {
            const existingUser = await userModel.findOne({ userField });
            if (existingUser) {
                res.render('error', { errorMessage: "USER EXIST" });
            }
            else {
                const newUser = await userModel.create({
                    username: userField,
                    email: emailField,
                    name: nameField,
                    password: passwordField,
                });
                req.session.token = newUser._id;
                res.redirect("/")
            }
        } catch (error) {
            console.log(error);
            res.render('error', { errorMessage: "Please Try again" });
        }
    }
    else {
        res.status(501).render('error', { errorMessage: "Password Mismatch" });
    }
})

//login route
router.get("/users", async (req, res) => {
    const { userField, passwordField } = req.query;
    const existingUser = await userModel.findOne({ username: userField });
    if (existingUser) {
        if (existingUser.password === passwordField) {
            req.session.token = existingUser._id;
            res.redirect("/")
        } else {
            res.status(501).render('error', { errorMessage: "Invalid password" });
        }
    }
    else {
        res.status(502).render('error', { errorMessage: "Invalid username or password" });
    }
    res.end();
})


module.exports = router;