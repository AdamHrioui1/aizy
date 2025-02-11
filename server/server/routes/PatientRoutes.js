const router = require('express').Router()
const PatientCtrl = require('../controllers/PatientCtrl')
const auth = require('../middleware/auth')

router.post('/', auth, PatientCtrl.create)
router.get('/read/:id', auth, PatientCtrl.read)
router.get('/find/:smi', auth, PatientCtrl.findOne)
router.get('/', auth, PatientCtrl.readAll)
router.get('/all', auth, PatientCtrl.readAllOfLocation)
router.put('/:id', auth, PatientCtrl.update)
router.put('/find/:smi', auth, PatientCtrl.updateOne)
router.delete('/:id', auth, PatientCtrl.delete)

module.exports = router