const TemperatureCtrl = require('../controllers/TemperatureCtrl')
const auth = require('../middleware/auth')
let router = require('express').Router()

router.post('/', auth, TemperatureCtrl.create)
router.get('/', auth, TemperatureCtrl.readAll)
router.get('/:id', auth, TemperatureCtrl.readOne)
router.put('/:id', auth, TemperatureCtrl.update)
router.delete('/:id', auth, TemperatureCtrl.delete)

module.exports = router