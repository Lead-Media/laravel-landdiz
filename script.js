function toggle(a, b = null) {
    var element = typeof(a) === "string" ? element = document.getElementById(a) : a
    element.classList.toggle(b ? b : 'visible')
}
function inner(a, b, c) {
    a.innerHTML = a.innerHTML == b ? c : b
}

function modalClose(a) {
    a.parentNode.classList.remove('active')
}

function imagesResize(a) {
    var container = a.parentNode.parentNode
    var imgs = container.querySelectorAll('img')
    let value = 40
    imgs[0].style.clipPath = `inset(0 ${toString(100 - value)}% 0 0)`
    imgs[1].style.clipPath = `inset(0 0 0 ${toString(value)}%)`
}

function choosenOne(a, class_name = null) {
    var children = a.parentNode.children
    for (const key in children) {
        if (Object.prototype.hasOwnProperty.call(children, key)) {
            children[key].classList.remove(class_name ?? 'active')
        }
    }
    a.classList.add(class_name ?? 'active')
}