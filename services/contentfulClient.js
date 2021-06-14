const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACEID,
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN
})

exports.client = client