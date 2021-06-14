import { $, $$ } from './modules/bling'
import heroSlider from './modules/slideShow'
import openMenu from './modules/showMenu'
import ajaxHeart from './modules/cart'


document.addEventListener('DOMContentLoaded', () => {

    $('.menu__btn').on('click', openMenu)

    const cartForms = $$('.addToCart')
    cartForms.on('submit', ajaxHeart)

})