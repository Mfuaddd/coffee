const btn = document.querySelector(".navbar_menu_btn")
const menu = document.querySelector(".navbar_menu")
const header= document.querySelector("header")

btn.addEventListener("click",function () {
    header.classList.toggle("hei")
    menu.classList.toggle("dispblock")
})