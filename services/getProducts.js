const fs = require('fs')
const client = require('./contentfulClient').client
require('dotenv').config({ path: 'variables.env' })

async function getProducts() {
    try {
        let result = await fs.readFileSync('public/dist/products.json')
        let data = await JSON.parse(result)
        let products = data.items
        products = products.map(item => {
            const { title, price } = item.fields
            const { id } = item.sys
            const image = item.fields.image.fields.file.url
            return { title, price, id, image }
        })
        return products
    } catch (error) {
        console.log(error)
    }
}

async function getContentfulProducts(contentTypeId) {

    return client.getEntries(contentTypeId)
        .then((data) => {
            let products = data.items
            products = products.map(item => {
                const { title, price } = item.fields
                const { id } = item.sys
                const image = item.fields.image.fields.file.url
                return { title, price, id, image }
            })
            return products
        })
        .catch(console.error)
}

async function getTaggedContents(tags) {

    return client.getEntries({ 'metadata.tags.sys.id[in]': tags })
        .then((data) => {
            let products = data.items
            products = products.map(item => {
                const { title, price } = item.fields
                const { id } = item.sys
                const image = item.fields.image.fields.file.url
                return { title, price, id, image }
            })
            return products
        })
        .catch(console.error)
}

async function getContentfulProduct(contentTypeId) {

    return client.getEntry(contentTypeId)
        .then(data => {
            return data
        }).catch(console.error)
}


module.exports = {
    getProducts,
    getContentfulProduct,
    getContentfulProducts,
    getTaggedContents
}