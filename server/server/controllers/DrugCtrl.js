const Drug = require("../models/DrugModel")
const User = require("../models/UserModel")

let DrugCtrl = {
    create: async (req, res) => {
        try {
            let { nom, quantite, historique, center } = req.body
            let drug = new Drug({
                nom, quantite, historique, center
            })
            await drug.save()

            return res.status(200).json({ success: true, data: drug })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readOne: async (req, res) => {
        try {
            let { nom } = req.params
            let user = await User.findById({ _id: req.user.id })
            if(!user) return res.status(500).json({ success: false, message: 'user not found!' })
            
            let drug = await Drug.findOne({ nom: nom, center: user.address })
            if(!drug) return res.status(400).json({ success: false, message: 'drug not found!' })
            return res.status(200).json({ success: true, data: drug })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readAll: async (req, res) => {
        try {
            let drugs = await Drug.find()
            return res.status(200).json({ success: true, data: drugs })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            let { nom } = req.params
            let user = await User.findById({ _id: req.user.id })
            console.log(user)
            if(!user) return res.status(500).json({ success: false, message: 'user not found!' })

            let drug = await Drug.findOne({ nom: nom, center: user.address })
            if(!drug) return res.status(400).json({ success: false, message: 'Drug not found!' })
            let { quantite, rest, used } = req.body

            if(quantite.length === 0) return res.status(500).json({ success: false, message: 'please enter the quantity!' })
            
            let historique = [
                ...drug.historique,
                {
                    quantite: quantite,
                    rest: rest,
                    used: used,
                    date: new Date(),
                    id: new Date().getTime()
                },
            ]

            let updatedDrug = await Drug.findByIdAndUpdate({ _id: drug._id }, {
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
            await Drug.findByIdAndDelete({ _id: id })

            return res.status(200).json({ success: true, data: 'Drug deleted successfuly!' })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
}

module.exports = DrugCtrl