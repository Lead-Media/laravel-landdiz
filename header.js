function changeHeaderColor() {
    var header = document.querySelector('.header-bg')
    if (scrollY != 0) header.classList.add('header-gray')
    else header.classList.remove('header-gray')
    var header_menu_bg = document.querySelector('.header-menu-bg')
    if (scrollY != 0) header_menu_bg.classList.add('header-gray')
    else header_menu_bg.classList.remove('header-gray')
}

const observer = new IntersectionObserver(entry => {
    if (entry[0].isIntersecting) entry[0].target.classList.remove('b-x')
    else entry[0].target.classList.add('b-x')
}, {
    rootMargin: '0px 0px -99% 0px',
    threshold: 0,
})

observer.observe(document.querySelector('.header-menu'))

window.addEventListener('scroll', changeHeaderColor)