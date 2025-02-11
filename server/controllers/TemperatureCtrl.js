const Temperature = require("../models/TemperatureModel")

let TemperatureCtrl = {
    create: async (req, res) => {
        try {
            let { entre, sortie } = req.body
            let temp = new Temperature({
                entre: entre,
                sortie: sortie,
            })

            await temp.save()
            return res.status(200).json({ success: true, data: temp })
        } catch(error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readAll: async (req, res) => {
        try {
            let temps = await Temperature.find()
            return res.status(200).json({ success: true, data: temps })
        } catch(error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readOne: async (req, res) => {
        try {
            let { id } = req.params
            let temp = await Temperature.findById({ _id: id })
            return res.status(200).json({ success: true, data: temp })
        } catch(error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            let { entre, sortie } = req.body
            let { id } = req.params
            let temp = await Temperature.findByIdAndUpdate({ _id: id }, {
                entre: entre, 
                sortie: sortie,
            })
            
            return res.status(200).json({ success: true, data: temp })
        } catch(error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            let { id } = req.params
            await Temperature.findByIdAndDelete({ _id: id })
            return res.status(200).json({ success: true, data: 'deleted successfuly!' })
        } catch(error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
}

module.exports = TemperatureCtrl