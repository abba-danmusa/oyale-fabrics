import axios from 'axios'
import { $ } from './bling'

function addToCart(event) {
    event.preventDefault()
    axios
        .post(this.action)
        .then(res => {
            $('.cart__items').innerHTML = res.data.products.length
        })
        .catch(error => console.log(error))
}

function removeFromCart(event) {
    event.preventDefault()
    axios
        .post(this.action)
        .then(res => {
            $('.cart__items').innerHTML = res.data.products.length
            event.target.parentElement.parentElement.remove()
        })
        .catch(error => console.log(error))
}

export {
    addToCart,
    removeFromCart
}