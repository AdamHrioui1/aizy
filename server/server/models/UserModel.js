const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 0
    },
    address: {
        type: String,
        required: true,
    },
}, {
    timestamps: true
})

const User = mongoose.model('User', UserSchema)
module.exports = User