import axios from 'axios'
import { $ } from './bling'

function ajaxCart(event) {
    console.log(event)
    event.preventDefault()
    axios
        .post(this.action)
        .then(() => {
            button.textContent = 'Remove from cart'
        })
        .catch(console.error)
}

export default ajaxCart