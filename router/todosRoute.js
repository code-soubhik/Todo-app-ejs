const express = require('express');
const router = new express.Router();

const userDetailsModel = require('../Schemas/todo');
const userModel = require('../Schemas/user')


//setting id as token
router.post("/user/:id/addtask", async (req, res) => {
    console.log(req.body)
    try {
        const idPresent = await userModel.findOne({ _id: req.params.id })
        if (idPresent) {
            await userDetailsModel.create({
                title:"hello",
                description:"desc",
                completed,
                createdAt,
                dueDate,
                priority,
                difficulty,
                user
            });
            res.send("OK")
        }
        else {
            res.send("Something went wrong")
        }
    } catch (error) {
        console.log(error);
        res.send(error)
    }
})

module.exports = router;