import { $, $$ } from './modules/bling'
import openMenu from './modules/openMenu'
import { addToCart, removeFromCart } from './modules/cart'
import heroSlider from './modules/slideShow'


document.addEventListener('DOMContentLoaded', () => {
    const hero = $('.hero')
    if (hero !== undefined) {
        heroSlider
    }
    $('.menu__btn').on('click', openMenu)

    // Adds to cart on submit
    const cartForms = $$('.addToCart')
    cartForms.on('submit', addToCart)

    // removes from cart on submit
    const removeForms = $$('.remove__from--cart')
    removeForms.on('submit', removeFromCart)

})