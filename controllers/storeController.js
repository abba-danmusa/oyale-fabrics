const User = require('../models/user')
const { getContentfulProducts, getTaggedContents } = require('../services/getProducts')

exports.homePage = async(req, res) => {
    const products = await getTaggedContents('women')
    res.render('home', { title: 'Home', products })
}

exports.womenPage = async(req, res) => {
    const products = await getTaggedContents('lace')
    res.render('women', { title: 'Shop Women', products })
}