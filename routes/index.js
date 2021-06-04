const express = require('express')
storeController = require('../controllers/storeController')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const { catchErrors } = require('../handlers/errorHandlers')


// creates an express router
const router = express.Router()

// GET routes
router.get('/', storeController.homePage)
router.get('/register', userController.registerForm)
router.get('/login', userController.loginPage)

// POST routes
router.post('/register', userController.validateRegister, catchErrors(userController.register), authController.login)

router.post('/login', authController.login)

// exports the express router
module.exports = router