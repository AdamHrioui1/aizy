const Stock = require("../models/StockModel")
const User = require("../models/UserModel")

let StockCtrl = {
    create: async (req, res) => {
        try {
            let { nom, quantite, historique } = req.body
            let drag = new Stock({
                nom, quantite, historique
            })
            await drag.save()

            return res.status(200).json({ success: true, data: drag })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    read: async (req, res) => {
        try {
            let { id } = req.params
            let drag = await Stock.findById({ _id: id })
            if(!drag) return res.status(400).json({ success: false, message: 'drug not found!' })
            return res.status(200).json({ success: true, data: drag })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readDrug: async (req, res) => {
        try {
            let { name } = req.params
            let user = await User.findById({ _id: req.user.id })
            // e .
            let drug = await Stock.findOne({ name: name, center: user.location })
            if(!drug) return res.status(400).json({ success: false, message: 'drug not found!' })
            return res.status(200).json({ success: true, data: drug })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readAll: async (req, res) => {
        try {
            let drags = await Stock.find()
            return res.status(200).json({ success: true, data: drags })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            let { id } = req.params
            let drug = await Stock.findById({ _id: id })
            if(!drug) return res.status(400).json({ success: false, message: 'Drug not found!' })
            let { quantite } = req.body

            if(quantite.length === 0) return res.status(500).json({ success: false, message: 'please enter the quantity!' })
            
            let historique = [
                ...drug.historique,
                {
                    quantite: quantite,
                    date: new Date(),
                    id: new Date().getTime()
                },
            ]

            let updatedDrug = await Stock.findByIdAndUpdate({ _id: id }, {
                quantite, historique: historique
            })

            return res.status(200).json({ success: true, data: updatedDrug })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            let { id } = req.params
            await Stock.findByIdAndDelete({ _id: id })

            return res.status(200).json({ success: true, data: 'Stock deleted successfuly!' })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
}

module.exports = StockCtrl