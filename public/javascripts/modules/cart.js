import axios from 'axios'
import { $ } from './bling'

function ajaxCart(event) {
    event.preventDefault()
    axios
        .post(this.action)
        .then(res => {
            console.log(res)
        })
        .catch(error => console.log(error))
        .then(res => $('.cart__items').textContent = res.data.products.length)
}

export default ajaxCart