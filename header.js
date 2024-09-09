function toggle(a, b, c) {
    document.getElementById(a).classList.toggle('visible')
    if (b != null) b.classList.toggle(c)
}
function innerSelf(a, b, c) {
    a.innerHTML = a.innerHTML == b ? c : b
}

function changeHeaderColor() {
    var header = document.querySelector('.header-bg')
    if (scrollY != 0) header.classList.add('header-gray')
    else header.classList.remove('header-gray')
}

window.addEventListener('scroll', changeHeaderColor)