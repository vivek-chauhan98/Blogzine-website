const body = document.querySelector('body')
const carouselContainer = document.querySelector('.carousel-container')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const wrapper = document.querySelector('.wrapper')
let carouselCards = document.querySelectorAll('.carousel-card')

let index = 1;
let interval = 3000
let slideId

const firstClone = carouselCards[0].cloneNode(true);
const lastClone = carouselCards[carouselCards.length - 1].cloneNode(true);

const secondClone = carouselCards[1].cloneNode(true);
const thirdClone = carouselCards[2].cloneNode(true);
const fourthClone = carouselCards[3].cloneNode(true);


firstClone.id = 'first-clone'
lastClone.id = 'last-clone'

wrapper.append(firstClone, secondClone, thirdClone, fourthClone)
wrapper.prepend(lastClone)

let slideWidth = carouselCards[index].clientWidth + 25

wrapper.style.transform = `translateX(${-slideWidth * index}px)`

let startSlide = () => {
    slideId = setInterval(() => {
        moveToNextSlide()
    }, interval);
}

wrapper.addEventListener('transitionend', () => {

    carouselCards = document.querySelectorAll('.carousel-card')

    if (carouselCards[index].id === firstClone.id) {
        wrapper.style.transition = 'none'
        index = 1
        wrapper.style.transform = `translateX(${-slideWidth * index}px)`
    }

    if (carouselCards[index].id === lastClone.id) {
        wrapper.style.transition = 'none'
        index = 5
        wrapper.style.transform = `translateX(${-slideWidth * index}px)`
    }
})

const moveToPrevSlide = () => {
 
    if (index < 1) return;

    index--
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`
    wrapper.style.transition = '0.5s'

}

const moveToNextSlide = () => {
    
    if(index > 5) return

    index++
    wrapper.style.transform = `translateX(${-slideWidth * index}px)`
    wrapper.style.transition = '0.5s'
}

carouselContainer.addEventListener('mouseenter', () => {
    clearInterval(slideId)
})

carouselContainer.addEventListener('mouseleave', () => {
    startSlide()
})

nextBtn.addEventListener('click', moveToNextSlide)

prevBtn.addEventListener('click', moveToPrevSlide)

startSlide()


// ******************

const languageTag = document.querySelector('.open-tag')
const editionsBox = document.querySelector('.footer-container-3 .right .edition-types')

languageTag.addEventListener('click', (e) => {
    e.stopPropagation()
    editionsBox.classList.toggle('open')
})




// *******************

const themeSlider = document.querySelector('.theme-slider')
const sliderCircle = document.querySelector('.slider-circle')
const logo = document.querySelectorAll('.logo')
const searchIcon = document.querySelector('.search')
const searchAndMenu = document.querySelector('.search-and-menu')
const searchInput = document.querySelector('.search-and-menu .form input')
const menu = document.querySelector('.menu')
const sideBar = document.querySelector('.side-bar')
const sideBarCloseBtn = document.querySelector('.side-bar .close')
const sun = document.querySelector('.sun')
const moon = document.querySelector('.moon')
const smallSizeBtn = document.querySelector('.small-size-btn')
const normalSizeBtn = document.querySelector('.normal-size-btn')
const largeSizeBtn = document.querySelector('.large-size-btn')
const listMenu = document.querySelector('.lists-menu')
const subListItems = document.querySelector('.sub-list-items')
const goToTopBtn = document.querySelector('.go-to-top')

sun.addEventListener('click', () => {
    sliderCircle.classList.remove('mode-change')
    body.classList.remove('dark-mode')
    logo[0].classList.remove('dark-mode')
    logo[1].classList.remove('dark-mode')
})

moon.addEventListener('click', () => {
    sliderCircle.classList.add('mode-change')
    body.classList.add('dark-mode')
    logo[0].classList.add('dark-mode')
    logo[1].classList.add('dark-mode')
})

themeSlider.addEventListener('click', () => {
    sliderCircle.classList.toggle('mode-change')
    body.classList.toggle('dark-mode')
    logo[0].classList.toggle('dark-mode')
    logo[1].classList.toggle('dark-mode')
})

searchIcon.addEventListener('click', (e) => {
    e.stopPropagation()
    searchAndMenu.classList.toggle('open-search-box')
})

searchInput.addEventListener('click', (e) => {
    e.stopPropagation()
})

menu.addEventListener('click', (e) => {
    e.stopPropagation()
    body.classList.add('side-bar-open')
    sideBar.classList.toggle('open')    
})

sideBarCloseBtn.addEventListener('click', () => {
    sideBar.classList.remove('open')
    body.classList.remove('side-bar-open')
})

sideBar.addEventListener('click', (e) => {
    e.stopPropagation()
})

// ************
normalSizeBtn.classList.add('active-btn-bg')

normalSizeBtn.addEventListener('click', () => {
    smallSizeBtn.classList.remove('active-btn-bg')
    largeSizeBtn.classList.remove('active-btn-bg')
    normalSizeBtn.classList.add('active-btn-bg')
    body.classList.remove('small-text-size')
    body.classList.remove('large-text-size')
})

smallSizeBtn.addEventListener('click', () => {
    normalSizeBtn.classList.remove('active-btn-bg')
    largeSizeBtn.classList.remove('active-btn-bg')
    smallSizeBtn.classList.add('active-btn-bg')
    body.classList.remove('large-text-size')
    body.classList.add('small-text-size')
})

largeSizeBtn.addEventListener('click', () => {
    normalSizeBtn.classList.remove('active-btn-bg')
    smallSizeBtn.classList.remove('active-btn-bg')
    largeSizeBtn.classList.add('active-btn-bg')
    body.classList.remove('small-text-size')
    body.classList.add('large-text-size')
})

// ************


listMenu.addEventListener('click', (e) => {
    e.stopPropagation()
    subListItems.classList.toggle('open')
})

goToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
})
// ***

document.addEventListener('click', () => {
    editionsBox.classList.remove('open')
    searchAndMenu.classList.remove('open-search-box')
    sideBar.classList.remove('open')
    body.classList.remove('side-bar-open')
    subListItems.classList.remove('open')
})

// ***

const moveSideBar = () => {
    const scrollPosition = window.scrollY
    sideBar.style.transform = `translateY(${scrollPosition}px)`
}