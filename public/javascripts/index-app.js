import { $, $$ } from './modules/bling'
import heroSlider from './modules/slideShow'
import openMenu from './modules/showMenu'

document.addEventListener('DOMContentLoaded', () => {
    $('.menu__btn').on('click', openMenu)

})