const express = require('express')
const flash = require('connect-flash')
const path = require('path')
const bodyParser = require('body-parser')
const routes = require('./routes/index')
const helpers = require('./helpers')
const errorHandlers = require('./handlers/errorHandlers')

// create express app 
const app = express()

// view engine setup
app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

// Takes the raw requests and turns them into usable properties on req.body
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// use flash to pass message to the next page the user request
app.use(flash())

// pass variables to all of the templates
app.use((req, res, next) => {
    res.locals.h = helpers
    res.locals.flashes = req.flash()
    res.locals.currentPath = req.path
    next()
})

// promisify some callback based APIs
// app.use((req, res, next) => {
//     req.login = promisify(req.login, req)
//     next()
// })

app.use('/', routes)

// if that above routes didnt work, 404 them and forward to error handler
app.use(errorHandlers.notFound)

// one of the error handlers will see if these errors are just validation errors
// app.use(errorHandlers.flashValidationErrors)

// otherwise 
if (app.get('env') === 'development') {
    app.use(errorHandlers.developmentErrors)
}

// production error handler
app.use(errorHandlers.productionErrors)

module.exports = app