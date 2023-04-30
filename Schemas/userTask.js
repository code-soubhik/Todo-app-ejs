const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        mytodo:{
            type:Array
        }
    }
)

const userTodoModel = mongoose.model("todos", userSchema)

module.exports = userTodoModel;