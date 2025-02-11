const Patient = require("../models/PatientModel")
const User = require("../models/UserModel")

let PatientCtrl = {
    create: async (req, res) => {
        try {
            let { nom, prenom, date_naissance, address, telephone, sexe, maternite, premature, rattrapage_vaccinale, rv_duree, nee_proteger, combien_dose } = req.body
            let patients = await Patient.find()
            
            let user = await User.findById({ _id: req.user.id })
            let patient = new Patient({
                nom, prenom, date_naissance, address, telephone, sexe, maternite, premature, rattrapage_vaccinale, rv_duree, nee_proteger, combien_dose,
                smi: patients.length + 10,
                location: user.address,
            })
            await patient.save()

            return res.status(200).json({ success: true, data: patient })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    read: async (req, res) => {
        try {
            let { id } = req.params
            let patient = await Patient.findById({ _id: id })
            if(!patient) return res.status(400).json({ success: false, message: 'Patient not found!' })
            return res.status(200).json({ success: true, data: patient })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    findOne: async (req, res) => {
        try {
            let { smi } = req.params
            let patient = await Patient.findOne({ smi: smi })
            if(!patient) return res.status(400).json({ success: false, message: 'Patient not found!' })
            return res.status(200).json({ success: true, data: patient })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readAll: async (req, res) => {
        try {
            let user = await User.findById({ _id: req.user.id })
            let patients = await Patient.find({ location: user.address })
            return res.status(200).json({ success: true, data: patients })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    readAllOfLocation: async (req, res) => {
        try {
            let user = await User.findById({ _id: req.user.id })
            let patients = await Patient.find({ location: user.address })
            return res.status(200).json({ success: true, data: patients })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            let { id } = req.params
            let patient = await Patient.findById({ _id: id })
            if(!patient) return res.status(400).json({ success: false, message: 'Patient not found!' })
            let { perimetre_cranien, poid, taille, bcg, hb, vpo, vpi, dtc, pneumo, penta, rota, rr, hpv, vita, vitd, bcg_rdv, hb_rdv, vpo_rdv, vpi_rdv, dtc_rdv, pneumo_rdv, penta_rdv, rota_rdv, rr_rdv, hpv_rdv, vita_rdv, vitd_rdv } = req.body

            let poids = []
            let tailles = []

            if(poid.length !== 0) {
                poids = [
                    ...patient.poids,
                    {
                        poid: parseFloat(poid),
                        date: new Date(),
                        id: new Date().getTime()
                    },
                ]
            }
            if(taille.length !== 0) {
                tailles = [
                    ...patient.tailles,
                    {
                        taille: parseFloat(taille),
                        date: new Date(),
                        id: new Date().getTime()
                    },
                ]
            }

            let updatedPatient = await Patient.findByIdAndUpdate({ _id: id }, {
                poid, taille, bcg, hb, vpo, vpi, dtc, pneumo, penta, rota, rr, hpv, vita, vitd,
                bcg_rdv, hb_rdv, vpo_rdv, vpi_rdv, dtc_rdv, pneumo_rdv, penta_rdv, rota_rdv, rr_rdv, hpv_rdv, vita_rdv, vitd_rdv, 
                perimetre_cranien: perimetre_cranien,
                poids: poids, 
                tailles: tailles
            })

            return res.status(200).json({ success: true, data: updatedPatient })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    updateOne: async (req, res) => {
        try {
            let { smi } = req.params
            let patient = await Patient.findOne({ smi: smi })
            if(!patient) return res.status(400).json({ success: false, message: 'Patient not found!' })
            let { perimetre_cranien, poid, taille, bcg, hb, vpo, vpi, dtc, pneumo, penta, rota, rr, hpv, vita, vitd, bcg_rdv, hb_rdv, vpo_rdv, vpi_rdv, dtc_rdv, pneumo_rdv, penta_rdv, rota_rdv, rr_rdv, hpv_rdv, vita_rdv, vitd_rdv } = req.body

            let poids = []
            let tailles = []

            console.log(poid.length)
            console.log(patient)
            if(poid) {
                poids = [
                    ...patient.poids,
                    {
                        poid: parseFloat(poid),
                        date: new Date(),
                        id: new Date().getTime()
                    },
                ]
            }
            if(taille) {
                tailles = [
                    ...patient.tailles,
                    {
                        taille: parseFloat(taille),
                        date: new Date(),
                        id: new Date().getTime()
                    },
                ]
            }

            let updatedPatient = await Patient.findOneAndUpdate({ smi: smi }, {
                poid, taille, bcg, hb, vpo, vpi, dtc, pneumo, penta, rota, rr, hpv, vita, vitd,
                bcg_rdv, hb_rdv, vpo_rdv, vpi_rdv, dtc_rdv, pneumo_rdv, penta_rdv, rota_rdv, rr_rdv, hpv_rdv, vita_rdv, vitd_rdv, 
                perimetre_cranien: perimetre_cranien,
                poids: poids, 
                tailles: tailles
            })

            return res.status(200).json({ success: true, data: updatedPatient })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            let { id } = req.params
            await Patient.findByIdAndDelete({ _id: id })

            return res.status(200).json({ success: true, data: 'Patient deleted successfuly!' })
        } catch (error) {
            return res.status(500).json({ success: false, message: error.message })
        }
    },
}

 

module.exports = PatientCtrl