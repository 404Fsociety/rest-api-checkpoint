//require express
const express = require('express')
const { register, login } = require('../controllers/user')
const { registerValidation, validator } = require('../middleware/validator')
const isAuth = require ('../middleware/isAuth')

//require router
const router = express.Router()

// register 
router.post('/register',registerValidation(),validator,register)

//login
router.post('/login',login)

//current
router.get('/current', isAuth, (req,res)=>{
    res.send(req.user)
})

//export router
module.exports = router