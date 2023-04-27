const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false,
    },
    completed: {
        type: Boolean,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    dueDate: {
        type: Date,
        default:Date.now()
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    difficulty: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    collection: "taskdetails"
})

const userDetailsModel = mongoose.model("taskdetails", userDetailsSchema)

module.exports = userDetailsModel;



