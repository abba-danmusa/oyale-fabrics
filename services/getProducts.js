const fs = require('fs')

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

module.exports = { getProducts }