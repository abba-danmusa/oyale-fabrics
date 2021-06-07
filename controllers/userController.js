const mongoose = require('mongoose')
const { promisify } = require('es6-promisify')
const User = require('../models/user')
const { check, validationResult } = require('express-validator')

exports.loginPage = (req, res) => {
    res.render('login', { title: 'Account Login' })
}

exports.registerForm = (req, res) => {

    res.render('register', { title: 'Register' })
}

exports.validateRegister = async(req, res, next) => {

    await check('name').run(req)
    await check('name', 'You must supply a name').notEmpty().run(req)
    await check('email', 'You must supply an email').notEmpty().run(req)
    await check('email').run(req)
    await check('email').normalizeEmail({
        remove_dots: false,
        remove_extension: false,
        gmail_remove_subaddress: false
    }).run(req)
    await check('password', 'Password cannot be blank').notEmpty().run(req)
    await check('confirm-password', 'Confirm-password cannot be empty').notEmpty().run(req)
    await check('confirm-password', 'Oops\! passwords must be equal').equals(req.body.password).run(req)

    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        req.flash('error', errors.array().map(err => err.msg))
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
    const register = promisify(User.register.bind(User))
    await register(user, req.body.password)
    next()
}