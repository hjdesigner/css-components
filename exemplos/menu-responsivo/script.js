let botao = document.querySelector(".cabecalho_botao")
let menu = document.querySelector(".cabecalho_menu")
botao.addEventListener("click", ()=>{
    menu.classList.toggle("show")
})