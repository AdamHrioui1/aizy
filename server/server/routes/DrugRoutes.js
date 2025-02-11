const router = require('express').Router()
const DrugCtrl = require('../controllers/DrugCtrl')
const auth = require('../middleware/auth')

router.post('/', auth, DrugCtrl.create)
router.get('/', auth, DrugCtrl.readAll)
router.get('/:nom', auth, DrugCtrl.readOne)
router.put('/:nom', auth, DrugCtrl.update)
router.delete('/:id', auth, DrugCtrl.delete)

module.exports = router