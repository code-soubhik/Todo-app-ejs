const express = require('express');
const router = new express.Router();

const userModel = require('../Schemas/user')
const userTodoModel = require('../Schemas/userTask');
const loginMiddleware = require('../middleware/loginMiddleware');

//Add Todos
router.post("/task", loginMiddleware, async (req, res) => {
    const { title, description } = req.body;
    const id = req.session.token;
    try {
        const idPresent = await userModel.findOne({ _id: id })
        if (idPresent) {
            const newData = await userTodoModel.findOne({ _id: id })
            if (newData) {
                await userTodoModel.findByIdAndUpdate(id, {
                    $push: {
                        mytodo: {
                            "sno": newData.mytodo.length + 1,
                            "Title": title,
                            "Description": description,
                            "date": new Date()
                        }
                    }
                })
            }
            else {
                await userTodoModel.create({
                    _id: id,
                    mytodo: [{
                        "sno": 1,
                        "Title": title,
                        "Description": description,
                        "date": new Date()
                    }]
                })
            }
            res.redirect("/")
        }
        else {
            res.status(501).render('error', { errorMessage: "Something went wrong!" });

        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

//delete Todo
router.post("/:id/del/:key", loginMiddleware, async (req, res) => {
    const id = req.params.id;
    const key = req.params.key;
    try {
        const idPresent = await userModel.findOne({ _id: id })
        if (idPresent) {
            const newData = await userTodoModel.findOne({ _id: req.session.token })
            if (newData) {
                let mytodo = newData.mytodo.filter(item => item.sno != key)
                mytodo.forEach((item, index) => { item.sno = index + 1 })
                await userTodoModel.findByIdAndUpdate(id, {
                    $set: { mytodo }
                })
                res.send("ok").status(200)
            }
        }
        else {
            res.status(501).render('error', { errorMessage: "Something went wrong!" });
        }
    } catch (error) {
        console.log(error);
        res.status(502).render('error', { errorMessage: "Something went wrong!" });
    }
})

//edit Todo
router.post("/:id/edit/:key", loginMiddleware, async (req, res) => {
    const id = req.params.id;
    const key = req.params.key;
    const { title, description } = req.body;
    try {
        const idPresent = await userModel.findOne({ _id: id })
        if (idPresent && id == req.session.token) {
            const newData = await userTodoModel.findOne({ _id: id })
            if (newData) {
                newData.mytodo.forEach((item) => {
                    if (item.sno == key) {
                        item.Title = title,
                            item.Description = description
                    }
                })
                await userTodoModel.findByIdAndUpdate(id, {
                    $set: { mytodo: newData.mytodo }
                })
                res.redirect("/")
            }
        }
        else {
            res.status(501).render('error', { errorMessage: "Something went wrong!" });
        }
    } catch (error) {
        console.log(error);
        res.status(502).render('error', { errorMessage: "Something went wrong!" });
    }
})


module.exports = router;