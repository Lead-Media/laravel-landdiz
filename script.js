function toggle(a, b, c) {
    document.getElementById(a).classList.toggle('visible')
    if (b != null) b.classList.toggle(c)
}
function innerSelf(a, b, c) {
    a.innerHTML = a.innerHTML == b ? c : b
}