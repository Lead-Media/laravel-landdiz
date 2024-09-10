function changeHeaderColor() {
    var header = document.querySelector('.header-bg')
    if (scrollY != 0) header.classList.add('header-gray')
    else header.classList.remove('header-gray')
}

window.addEventListener('scroll', changeHeaderColor)