import { $, $$ } from './modules/bling'
import heroSlider from './modules/slideShow'
import { openMenu, closeMenu } from './modules/showMenu'

document.addEventListener('DOMContentLoaded', () => {
    $('.menu__btn').on('click', openMenu)
    $('.close__menu').on('click', closeMenu)
})