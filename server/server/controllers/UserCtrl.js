const User = require("../models/UserModel")
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");

const UserCtrl = {
    register: async (req, res) => {
        try {
            const { name, lastname, email, password, address, role } = req.body
            
            if(address.length < 4) return res.status(400).json({ success: false, message: "Veuillez entrer le nom de votre centre !"}) 
            if(name.length < 3) return res.status(400).json({ success: false, message: "Le nom doit comporter au moins 3 caractères !"}) 
            if(lastname.length < 3) return res.status(400).json({ success: false, message: "Le nom de famille doit comporter au moins 3 caractères !"}) 
            if(email.length < 6) return res.status(400).json({ success: false, message: 'Veuillez entrer un nom complet'}) 
            if(password.length < 6) return res.status(400).json({ success: false, message: 'Veuillez saisir un mot de passe d’au moins 6 caractères !'}) 
            
            const user = await User.findOne({ email })
            if(user) return res.status(400).json({ success: false, message: "Ce « nom complet » est déjà symbolique. S’il vous plaît, choisissez-en un autre !"})
            
            const salt = 10
            const hashedPassword = await bcrypt.hash(password, salt)
            const newUser = new User({
                address, name, lastname, email, password: hashedPassword, role
            })

            await newUser.save()
            const accessToken = createAccessToken({ id: newUser._id })
            const refreshtoken = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/api/user/refreshtoken'
            })

            return res.status(200).json({ success: true, accessToken })
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            if(email < 6) return res.status(400).json({ success: false, message: "Veuillez entrer un nom complet valide !"}) 
            const user = await User.findOne({ email })
            if(!user) return res.status(400).json({ success: false, message: "Utilisateur n'exist pas" })
            if(password.length < 6) return res.status(400).json({ success: false, message: "Veuillez saisir un mot de passe d’au moins 6 caractères !"}) 
            
            const isMatch = await bcrypt.compare(password, user.password)
            if(!isMatch) return res.status(400).json({ success: false, message: 'Mot de passe est incorrect!!' })

            const accesstoken = createAccessToken({ id: user._id })
            const refreshtoken = createRefreshToken({ id: user._id })

            res.cookie('refreshtoken', refreshtoken, {
                httpOnly: true,
                path: '/api/user/refreshtoken'
            })

            return res.status(200).json({ success: true, accesstoken })            
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
    refreshtoken: async (req, res) => {
        try {
            const token = req.cookies.refreshtoken
            if(!token) return res.status(400).json({ success: false, message: 'Invalid Authentication!' })
            jwt.verify(token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
                if(err) return res.status(400).json({ success: false, message: 'Invalid Authentication!'})

                const accesstoken = createAccessToken({ id: user.id })
                return res.status(200).json({ success: true, accesstoken })
            })
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/api/user/refreshtoken' })
            res.status(200).json({ success: true, message: 'Logout successfult!'})
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
    userInfo: async (req, res) => {
        try {
            const user = await User.findById(req.user.id).select('-password')
            return res.json({ success: true, data: user })
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
    all: async (req, res) => {
        try {
            const users = await User.find().select('-password')
            return res.json({ success: true, data: users })
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
    remove: async (req, res) => {
        try {
            let { id } = req.params
            const user = await User.findByIdAndDelete({ _id: id })
            return res.json({ success: true, data: user })
        } catch (err) {
            return res.status(500).json({ success: false, message: err.message })
        }
    },
}

const createAccessToken = (id) => {
    return jwt.sign(id, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
}

const createRefreshToken = (id) => {
    return jwt.sign(id, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' })
}

module.exports = UserCtrl