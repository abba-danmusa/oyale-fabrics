import { $, $$ } from './bling'


function openMenu() {
    console.log('clicked')
    let menu = $("#menu");
    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
export default openMenu