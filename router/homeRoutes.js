const express = require('express');
const router = new express.Router();
const userTodoModel = require('../Schemas/userTask');
const isLogout = require('../middleware/isLogout');
const isLogIn = require('../middleware/isLogin');

let options = { weekday: "long", year: "numeric", month: 'long', day: 'numeric' };
let date = new Date();
let currentDay = date.toLocaleDateString("en-US", options);

router.get("/login", isLogout, (req, res) => {
    res.render('login')
})

router.get("/signup", isLogout, (req, res) => {
    res.render('signup')
})

router.get("/logout", isLogIn, (req, res) => {
    delete req.session.token;
    return res.redirect('/');
})

router.get("/", async (req, res) => {
    try {
        if (req.session && req.session.token) {
            const id = req.session.token;
            let todo = [];
            const userData = await userTodoModel.findOne({ _id: id })
            if (userData) {
                todo = userData.mytodo;
            }
            res.render("home", { currentDay, todo, id })
        }
        else {
                res.render("home", { currentDay, todo: [], id: null })
            }
        }
    catch (error) {
        res.status(502).render('error', { errorMessage: "Something went wrong!" });
    }
})

module.exports = router;