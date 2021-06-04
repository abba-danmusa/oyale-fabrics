const mongoose = require('mongoose')
const promisify = require('es6-promisify')
const User = require('../models/user')

exports.loginPage = (req, res) => {
    res.render('login', { title: 'Account Login' })
}

exports.registerForm = (req, res) => {
    const body = req.body
    res.render('register', { title: 'Register', body })
}

exports.validateRegister = (req, res, next) => {

    req.body('name')
    req.check('name', 'You must supply a name').notEmpty()
    req.check('email', 'You must supply an email').notEmpty()
    req.body('email')
    normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    })
    req.check('password', 'Password cannot be blank').notEmpty()
    req.check('confirm-password', 'Confirm-password cannot be empty').notEmpty()
    req.check('confirm-password', 'Oops\! passwords must be equal').equals(req.body.password)

    const errors = req.validationErrors()

    if (errors) {
        req.flash('error', errors.map(err => err.msg))
        res.render('register', { title: 'Register', body: req.body, flashes: req.flash() })
        return
    }
    next()
}

exports.register = async(req, res, next) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email
    })
    const register = promisify(User.register, User)
    await register(user, req.body.password)
    next()
}