function changeHeaderColor() {
    var header = document.querySelector('.header-bg')
    if (scrollY != 0) header.classList.add('header-gray')
    else header.classList.remove('header-gray')
    var header_menu_bg = document.querySelector('.header-menu-bg')
    if (scrollY != 0) header_menu_bg.classList.add('header-gray')
    else header_menu_bg.classList.remove('header-gray')
}

const observer = new IntersectionObserver(entry => {
    console.log(entry[0])
    var header_menu = document.querySelector('.header-menu')
    if (entry[0].isIntersecting) header_menu.classList.remove('b-x')
    else header_menu.classList.add('b-x')
}, {
    rootMargin: '100% 0px -100% 0px',
    threshold: 1,
})

observer.observe(document.querySelector('.header-bg'))

window.addEventListener('scroll', changeHeaderColor)