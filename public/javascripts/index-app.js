import { $, $$ } from './modules/bling'
import openMenu from './modules/openMenu'
import ajaxCart from './modules/cart'
import heroSlider from './modules/slideShow'


document.addEventListener('DOMContentLoaded', () => {
    const home = $('.hero')
    if (home) {
        heroSlider()
    }
    $('.menu__btn').on('click', openMenu)
    console.log('clicked')
    const cartForms = $$('.addToCart')
    cartForms.on('submit', ajaxCart)


})