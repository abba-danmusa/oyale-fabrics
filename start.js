const mongoose = require('mongoose')

// import enviromental variables
require('dotenv').config({ path: 'variables.env' })

// Connects to the database and handles any bad connections
mongoose.connect(process.env.DATABASE, { useUnifiedTopology: true, useCreateIndex: true, useNewUrlParser: true })
mongoose.Promise = global.Promise // Tells mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
    console.error(`${err.message}`)
})

mongoose.connection.once('open', () => {
    console.log('connected to mongoose');
})

// import all models


// start the app
const app = require('./app')
app.set('port', process.env.PORT || 3000)
const server = app.listen(app.get('port'), () => {
    console.log(`Server running on PORT ${server.address().port}`)
})