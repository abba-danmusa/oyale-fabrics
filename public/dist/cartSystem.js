const cartBtn = document.querySelector('.cart__btn')
const closeCartBtn = document.querySelector('.close__cart')
const clearCartBtn = document.querySelector('.clear__cart')
const cartDOM = document.querySelector('.cart')
const cartOverlay = document.querySelector('.cart__overlay')
const cartItems = document.querySelector('.cart__items')
const cartTotal = document.querySelector('.cart__total')
const cartContent = document.querySelector('.cart__content')
const productsDOM = document.querySelector('.products__center')

// cart

let cart = []

// get all buttons

let buttonsDOM = []

class Products {
    async getProducts() {
        try {
            let result = await fetch('/dist/products.json')
            let data = await result.json()
            let products = data.items
            products = products.map(item => {
                const { title, price } = item.fields
                const { id } = item.sys
                const image = item.fields.image.fields.file.url
                return { title, price, id, image }
            })
            return products
        } catch (error) {
            console.log(error)
        }
    }
}

// display products

class UI {
    displayProducts(products) {
        let result = ""
        products.forEach(products => {
            result += `
         <article class="product">
            <div class="img__container">
                <img src=${products.image} alt="product" class="product__img">
                <form action='/api/products/${products.id}/cart' method="POST">
                    <button type="submit" class="bag__btn" data-id=${products.id}>
                        <i class="fas fa-shopping-cart"></i>
                        add to cart
                    </button>
                </form>
            </div>
            <h3>${products.title}</h3>
            <h4>$${products.price}</h4>
         </article>`
        })
        productsDOM.innerHTML = result
    }

    // adding functionality to the bag buttons
    // getBagButtons() {
    //     const buttons = [...document.querySelectorAll('.bag__btn')]
    //     buttonsDOM = buttons
    //     buttons.forEach(button => {
    //         let id = button.dataset.id
    //         let inCart = cart.find(item => item.id === id)
    //         if (inCart) {
    //             button.innerText = "In Cart"
    //             button.disabled = true
    //         }
    //         button.addEventListener('click', event => {
    //             event.target.disabled = true
    //             event.target.innerText = "In Cart"
    //                 // get the targeted product from the local storage
    //             let cartItem = {...Storage.getProduct(id), amount: 1 }

    //             // add the targeted product into the cart
    //             cart = [...cart, cartItem]

    //             // save the cart in the local storage
    //             Storage.saveCart(cart)

    //             // set cart value
    //             this.setCartValues(cart)

    //             // display the items in the cart
    //             this.addCartItem(cartItem)

    //             // show the cart
    //             // this.showCart();
    //         })
    //     })
    // }

    setCartValues(cart) {
        let tempTotal = 0
        let itemsTotal = 0
        cart.map(item => {
            tempTotal += item.price * item.amount
            itemsTotal += item.amount
        })
        cartTotal.innerText = parseFloat(tempTotal.toFixed(2))
        cartItems.innerText = itemsTotal

    }

    addCartItem(item) {
        const div = document.createElement('div');
        div.classList.add('cart__item');
        div.innerHTML = `
      <img src= ${item.image} alt="">
      <div>
          <h4>${item.title}</h4>
          <h5>$${item.price}</h5>
          <span class="remove__item" data-id=${item.id}>remove</span>
      </div>
      <div>
          <i class="fas fa-chevron-up" data-id=${item.id}></i>
          <p class="item__amount">${item.amount}</p>
          <i class="fas fa-chevron-down" data-id=${item.id}></i>
      </div>
      `
        cartContent.appendChild(div)

    }
    showCart() {
        cartOverlay.classList.add('transparentBcg')
        cartDOM.classList.add('showCart')
    }
    setupAPP() {
        cart = Storage.getCart()
        this.setCartValues(cart)
        this.populateCart(cart)
        cartBtn.addEventListener('click', this.showCart)
        closeCartBtn.addEventListener('click', this.closeCart)
    }
    populateCart(cart) {
        cart.forEach(item => this.addCartItem(item))
    }
    closeCart() {
        cartOverlay.classList.remove('transparentBcg');
        cartDOM.classList.remove('showCart')
    }
    cartLogic() {
        // clear cart button
        clearCartBtn.addEventListener('click', () => {
            this.clearCart(cart)
        })

        // cart functionality
        cartContent.addEventListener('click', event => {
            if (event.target.classList.contains("remove__item")) {

                let removeItem = event.target
                let id = removeItem.dataset.id
                cartContent.removeChild(removeItem.parentElement.parentElement);
                this.removeItem(id)
            } else if (event.target.classList.contains("fa-chevron-up")) {
                let addAmount = event.target
                let id = addAmount.dataset.id
                let tempItem = cart.find(item => item.id === id)
                tempItem.amount = tempItem.amount + 1
                Storage.saveCart(cart)
                this.setCartValues(cart)
                addAmount.nextElementSibling.innerText = tempItem.amount
            } else if (event.target.classList.contains("fa-chevron-down")) {
                let lowerAmount = event.target
                let id = lowerAmount.dataset.id
                let tempItem = cart.find(item => item.id === id)
                tempItem.amount = tempItem.amount - 1
                if (tempItem.amount > 0) {
                    Storage.saveCart(cart)
                    this.setCartValues(cart)
                    lowerAmount.nextElementSibling.innerText = tempItem.amount;
                } else {
                    cartContent.removeChild(lowerAmount.parentElement.parentElement);
                    this.removeItem(id)
                }

            }
        })
    }
    clearCart(cart) {

        let cartItems = cart.map(item => item.id)
        cartItems.forEach(id => this.removeItem(id))

        while (cartContent.children.length > 0) {
            cartContent.removeChild(cartContent.children[0])
        }
        this.closeCart()
    }
    removeItem(id) {
        cart = cart.filter(item => item.id !== id)
        this.setCartValues(cart)
        Storage.saveCart(cart)
        let button = this.getSingleBtn(id)
        button.disabled = false
        button.innerHTML = `<i class= "fas fa-shopping-cart"></i> add to cart`
    }
    getSingleBtn(id) {
        return buttonsDOM.find(button => button.dataset.id === id)
    }
}

// local storagee
class Storage {
    static saveProducts(products) {
        localStorage.setItem("products", JSON.stringify(products))
    }

    static getProduct(id) {
        let products = JSON.parse(localStorage.getItem("products"))
        return products.find(product => product.id === id)
    }
    static saveCart(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
    }
    static getCart() {
        return localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const products = new Products()
    const ui = new UI()

    //setup cart app
    ui.setupAPP()
        // get all the products

    products.getProducts().then(products => {
        ui.displayProducts(products)
        Storage.saveProducts(products)
    }).then(() => {
        // ui.getBagButtons()
        ui.cartLogic()
    })
})