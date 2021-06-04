import { $, $$ } from './bling'
const menu = $('.menu__overlay')
const menuDom = $('.menu')

function openMenu() {
    menu.classList.add('transparentBcg')
    menuDOM.classList.add('showCart')
}

function closeMenu() {
    menu.classList.remove('transparentBcg');
    menuDOM.classList.remove('showCart')
}
export { openMenu, closeMenu }