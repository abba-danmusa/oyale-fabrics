import axios from 'axios'
import { $ } from './bling'

function ajaxCart(event) {
    event.preventDefault()
    axios
        .post(this.action)
        .then(res => {
            console.log('hello world')
            $('.cart__items').textContent = res.data.products.length
        })
        .catch(error => console.log(error))
}

export default ajaxCart