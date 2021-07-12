const contentful = require('contentful')

const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACEID,
    accessToken: process.env.CONTENTFUL_ACCESSTOKEN,
    environment: process.env.CONTENTFUL_ENVIRONMENT
})

exports.client = client