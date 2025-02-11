const router = require('express').Router()
const StockCtrl = require('../controllers/StockCtrl')
const auth = require('../middleware/auth')

router.post('/', auth, StockCtrl.create)
router.get('/:id', auth, StockCtrl.read)
router.get('/', auth, StockCtrl.readAll)
router.put('/:id', auth, StockCtrl.update)
router.delete('/:id', auth, StockCtrl.delete)

module.exports = router