const router = require('express').Router()
const UserCtrl = require('../controllers/UserCtrl')
const adminAuth = require('../middleware/adminAuth')
const auth = require('../middleware/auth')

router.post('/register', UserCtrl.register)
router.post('/login', UserCtrl.login)
router.get('/refreshtoken', UserCtrl.refreshtoken)
router.get('/logout', UserCtrl.logout)
router.get('/userinfo', auth, UserCtrl.userInfo)
router.get('/all', auth, UserCtrl.all)
router.delete('/delete/:id', auth, adminAuth, UserCtrl.remove)

module.exports = router