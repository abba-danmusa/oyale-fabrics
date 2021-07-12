const express = require('express')
storeController = require('../controllers/storeController')
const userController = require('../controllers/userController')
const authController = require('../controllers/authController')
const { catchErrors } = require('../handlers/errorHandlers')


// creates an express router
const router = express.Router()

// GET routes
router.get('/', catchErrors(storeController.homePage))
    // router.get('/men', storeController.menPage)
router.get('/women', catchErrors(storeController.womenPage))
    // router.get('/women/collections/lace')
    // router.get('/women/collections/lycra')
    // router.get('/women/collections/chiffon')
    // router.get('/women/collections/Organza')
    // router.get('/women/collections/crepe')
    // router.get('/women/collections/silk')
    // router.get('/women/collections/velvet')
router.get('/register', userController.validateRegister, userController.registerForm)
router.get('/login', userController.loginPage)
router.get('/logout', authController.logout)
router.get('/user/:id', catchErrors(userController.userAccount))
router.get('/user/:id/Cart', catchErrors(userController.userCart))
router.get('/closeCart', userController.closeCart)

// POST routes
router.post('/register', userController.validateRegister, catchErrors(userController.register), authController.login)
router.post('/login', authController.login)

// API's //

router.post('/api/products/:id/cart', authController.isLoggedIn, catchErrors(userController.addToCart))
router.post('/api/products/:id/remove', authController.isLoggedIn, catchErrors(userController.addToCart))

// exports the express router
module.exports = router