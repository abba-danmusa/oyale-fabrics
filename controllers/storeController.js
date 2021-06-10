const { getProducts } = require('../services/getProducts')

exports.homePage = async(req, res) => {
    const products = await getProducts()
    res.render('home', { title: 'Home', products })
}