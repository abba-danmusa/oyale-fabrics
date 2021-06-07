import { $, $$ } from './modules/bling'
import { slider } from './modules/slideShow'

const homePage = $('.hero')

document.addEventListener('DOMContentLoaded', () => {
    if (homePage) slider()
})