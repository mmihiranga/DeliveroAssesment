// import controllers review, products
const userController = require('../controllers/UserController.js')

// router
const router = require('express').Router()


// use routers
router.post('/register', userController.Register)
router.post('/validateUser', userController.CheckUser)
router.post('/getUserDetails', userController.getUserByEmail)


module.exports = router