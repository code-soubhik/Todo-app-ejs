const mongoose = require('mongoose');

const userDetailsSchema = new mongoose.Schema(
    {
        username: { type: String, unique: true, required: true },
        email: { type: String, required: true },
        name: { type: String, required: true },
        password: { type: String, required: true },
    }, {
    collection: "userData"
})

const userModel = mongoose.model("userData", userDetailsSchema)

module.exports = userModel;