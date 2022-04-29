const hamburger = document.querySelector("#hamburger")
const nav = document.querySelector(".nav")
const cross = document.querySelector("#cross")

hamburger.addEventListener("click", ()=>{
    hamburger.classList.add("d-none")
    nav.classList.remove("d-none")
})

cross.addEventListener("click", ()=>{
    nav.classList.add("d-none")
    hamburger.classList.remove("d-none")
})

