import { $, $$ } from './modules/bling'
import openMenu from './modules/openMenu'
import { addToCart, removeFromCart, incrementCartItem } from './modules/cart'
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

    // increments/decrements an item in the cart
    const increments = $$('.fas.fa-chevron-up')
    const decrements = $$('.fas.fa-chevron-down')
    increments.on('click', event=> {
        incrementCartItem(event)
    })
    decrements.on('click', event=> {
        incrementCartItem(event)
    })

})