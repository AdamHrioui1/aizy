const mongoose = require('mongoose');

const PatientSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: [true, "s'il vous plait écrivez le nom de patient"],
    },
    prenom: {
        type: String,
        required: [true, "s'il vous plait écrivez le prenom de patient"],
    },
    smi: {
        type: String,
        required: [true, "s'il vous plait écrivez le smi de patient"],
        unique: [true, "ce smi est déja dans la base de données, s'il vous plait entrer un autre smi"],
    },
    date_naissance: {
        type: Date,
        required: [true, "s'il vous plait écrivez la date de naissance de patient"],
    },
    address: {
        type: String,
    },
    location: {
        type: String,
    },
    telephone: {
        type: String,
    },
    sexe: {
        type: String,
        required: [true, "s'il vous plait entrer le sexe de patient"],
    },
    maternite: {
        type: Boolean,
        required: [true, "maternité required"],
    },
    premature: {
        type: Boolean,
        required: [true, "la premature de patient"],
    },
    rattrapage_vaccinale: {
        type: Boolean,
        required: [true, "est ce que le patient est rattrapage vaccinale?"],
    },
    rv_duree: {
        type: String,
    },
    nee_proteger: {
        type: Boolean,
    },
    combien_dose: {
        type: Number,
    },
    perimetre_cranien: {
        type: Number,
    },
    poid: {
        type: Number,
        default: 0,
    },
    taille: {
        type: Number,
        default: 0,
    },

    poids: {
        type: Array,
        default: [],
    },
    tailles: {
        type: Array,
        default: [],
    },


    bcg: {
        type: Number,
        default: 0,
    },
    hb: {
        type: Number,
        default: 0,
    },
    vpo: {
        type: Number,
        default: 0,
    },
    vpi: {
        type: Number,
        default: 0,
    },
    dtc: {
        type: Number,
        default: 0,
    },
    pneumo: {
        type: Number,
        default: 0,
    },
    penta: {
        type: Number,
        default: 0,
    },
    rota: {
        type: Number,
        default: 0,
    },
    rr: {
        type: Number,
        default: 0,
    },
    hpv: {
        type: Number,
        default: 0,
    },
    vita: {
        type: Number,
        default: 0,
    },
    vitd: {
        type: Number,
        default: 0,
    },


    bcg_rdv: {
        type: Number,
        default: 0,
    },
    hb_rdv: {
        type: Number,
        default: 0,
    },
    vpo_rdv: {
        type: Number,
        default: 0,
    },
    vpi_rdv: {
        type: Number,
        default: 0,
    },
    dtc_rdv: {
        type: Number,
        default: 0,
    },
    pneudo_rdv: {
        type: Number,
        default: 0,
    },
    penta_rdv: {
        type: Number,
        default: 0,
    },
    rota_rdv: {
        type: Number,
        default: 0,
    },
    rr_rdv: {
        type: Number,
        default: 0,
    },
    hpv_rdv: {
        type: Number,
        default: 0,
    },
    vita_rdv: {
        type: Number,
        default: 0,
    },
    vitd_rdv: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true
})

const Patient = mongoose.model('Patient', PatientSchema)
module.exports = Patient