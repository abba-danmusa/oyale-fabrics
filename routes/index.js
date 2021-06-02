const express = require('express')
const siteController = require('../controllers/siteController')


// creates an express router
const router = express.Router()

// GET routes
router.get('/', siteController.homePage)

// POST routes


// exports the express router
module.exports = router