const mongoose = require('mongoose')
const validator = require('validator')
const passportLocalMongoose = require('passport-local-mongoose')
const mongodbErrorHandler = require('mongoose-mongodb-errors')
const slug = require('slug')

const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        trim: true,
        required: 'Please supply an email address',
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, 'Invalid email address']
    },
    name: {
        type: String,
        required: 'Please supply a name',
        trim: true
    },
    slug: String,
    description: {
        type: String,
        trim: true
    },
    // resetPasswordToken: String,
    // resetPasswordExpires: Date,
    products: [{
        type: String
    }]
})

userSchema.pre('save', async function(next) {
    if (!this.isModified('name')) {
        next()
        return
    }
    this.slug = slug(this.name)

    const slugRegEx = new RegExp(`^(${this.slug})((-[0-9]*$)?)$`, 'i')

    const nameWithSlug = await this.constructor.find({ slug: slugRegEx })

    if (nameWithSlug.length) {
        this.slug = `${this.slug}-${nameWithSlug.length + 1}`
    }

    next()

})

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email'
})
userSchema.plugin(mongodbErrorHandler)

module.exports = mongoose.model('User', userSchema)