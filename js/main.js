let openMenu = document.querySelector(".open-btn")
let closeMenu = document.querySelector(".close-btn")




openMenu.addEventListener("click", () =>{
    let navMenu = document.querySelector(".nav__menu");
    let closeMenu = document.querySelector(".close-btn")

    closeMenu.style.display = "inline-block"
    openMenu.style.display = "none"
    navMenu.style.display = "block"

})



closeMenu.addEventListener("click", () =>{
    let navMenu = document.querySelector(".nav__menu");
    let closeMenu = document.querySelector(".close-btn")

    openMenu.style.display = "inline-block"
    closeMenu.style.display = "none"
    navMenu.style.display = "none"

})