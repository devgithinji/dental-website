'use strict'

//add event on element
const addEventOnElement = function (elem, type, callback) {
    if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
            elem[i].addEventListener(type, callback)
        }
    } else {
        elem.addEventListener(type, callback)
    }
}

//navbar toggle
const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navbarToggler = document.querySelector("[data-nav-toggler]")

const toggleNav = function () {
    navbar.classList.toggle("active")
    navbarToggler.classList.toggle("active")
}

addEventOnElement(navbarToggler, "click", toggleNav)

const closeNav = function () {
    navbar.classList.remove("active")
    navbarToggler.classList.remove("active")
}

addEventOnElement(navbarLinks, "click", closeNav)

//header active

const header = document.querySelector("[data-header]")
const backTopBtn = document.querySelector("[data-back-top-btn]")

window.addEventListener("scroll", function () {
    if (window.scrollY >= 100) {
        header.classList.add("active")
        backTopBtn.classList.add("active")
    } else {
        header.classList.remove("active")
        backTopBtn.classList.remove("active")
    }
})