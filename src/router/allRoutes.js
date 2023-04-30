const express = require('express');
const router = new express.Router();

const loginRouter = require('./login-signup');
const homeRouter = require('./homeRoutes');
const todoRouter = require('./todosRoute');

router.use(loginRouter);
router.use(homeRouter);
router.use(todoRouter);

module.exports = router