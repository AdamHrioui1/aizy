const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
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
    },
}, {
    timestamps: true
})

const Stock = mongoose.model('Stock', StockSchema)
module.exports = Stock