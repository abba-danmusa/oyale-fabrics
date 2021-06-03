const fs = require('fs')

exports.moment = require('moment')

// helps in debugging when using templates
exports.dump = (obj) => JSON.stringify(obj, null, 2)

// Icons directory (inserting an svg)
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`)

// Images directory (inserting an image)
exports.image = (name) => fs.readFileSync(`./public/images/photos/${name}.jpg`)

// site info
exports.siteName = `Oyale Fabrics & Fashion Empire`

exports.menu = [
    { title: 'Men', link: '/categories/men' },
    { title: 'Women', link: '/categories/women' },
    { title: 'About', link: '/about' }
]