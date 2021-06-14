const User = require('../models/user')
const { getContentfulProducts } = require('../services/getProducts')

exports.homePage = async(req, res) => {
    const products = await getContentfulProducts()
    res.render('home', { title: 'Home', products })
}