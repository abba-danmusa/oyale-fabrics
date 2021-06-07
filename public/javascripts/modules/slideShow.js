import { $, $$ } from './bling'

const prev = $('.prev')
const next = $('.next')
const slides = $$('.image__slide')
const dots = $$('.dot')

let slideIndex = 1

function slider() {
    setInterval(() => { showSlides(slideIndex += 1) }, 3000)
    prev.on('click', () => {
        showSlides(slideIndex += -1)
    })

    next.on('click', () => {
        showSlides(slideIndex += 1)
    })

    let numbers = [1, 2, 3, 4]
    for (let i, j = 0; i < dots.length && j < numbers.length; i++) {
        dots[i].on('click', () => {
            showSlides(slideIndex = numbers[j])
        })
    }

}

showSlides(slideIndex)

function showSlides(n) {
    let i

    if (n > slides.length) slideIndex = 1
    if (n < 1) slideIndex = slides.length

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

export { slider }