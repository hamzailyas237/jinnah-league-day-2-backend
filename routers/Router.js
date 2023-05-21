const { signup, login } = require('../controllers/AuthController')
const { finance, updatefinance, getAllFinance } = require('../controllers/financeController')
const { authMiddleware } = require('../middlewares/Middleware')
const router = require('express').Router()


router.post('/signup', signup)
router.post('/login', login)
router.post('/finance', finance)
router.put('/finance', updatefinance)
router.get('/finance', getAllFinance)

module.exports = router
