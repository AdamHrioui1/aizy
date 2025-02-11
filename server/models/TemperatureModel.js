const mongoose = require('mongoose');

const TemperatureSchema = new mongoose.Schema({
    entre: {
        type: Number
    },
    sortie: {
        type: Number
    },
}, {
    timestamps: true
})

const Temperature = mongoose.model('Temperature', TemperatureSchema)
module.exports = Temperature