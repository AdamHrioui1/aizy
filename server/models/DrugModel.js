const mongoose = require('mongoose');

const DrugSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
    },
    quantite: {
        type: Number,
        default: 0
    },
    historique: {
        type: Array,
        default: []
    },
    center: {
        type: String,
        required: [true, 'Please choose the center']
    },
}, {
    timestamps: true
})

const Drug = mongoose.model('Drug', DrugSchema)
module.exports = Drug