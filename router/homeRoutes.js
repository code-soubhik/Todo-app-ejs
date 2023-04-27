const express = require('express');
const router = new express.Router();

router.get("/login", (req, res) => {
    res.render('login', { title: "Login - todo" })
})

router.get("/signup", (req, res) => {
    res.render('signup', { title: "signup - todo" })
})

module.exports = router;