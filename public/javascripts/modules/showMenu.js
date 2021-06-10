import { $, $$ } from './bling'


function openMenu() {
    var x = $("#menu");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
export default openMenu