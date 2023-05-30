var menuH = document.getElementById("menuH")
var itensM = document.querySelector(".itens-menu")
menuH.addEventListener("click", menuHambur)
function menuHambur(){
    if (menuH.classList.contains("fa-bars")){
        menuH.classList.remove("fa-bars")
        menuH.classList.add("fa-x")
        itensM.classList.add("active")
    }
    else{
        menuH.classList.remove("fa-x")
        menuH.classList.add("fa-bars")
        itensM.classList.remove("active")
    }
}
var lucros = document.querySelector("#lucros")
var resultados = document.querySelector("#resultados")
var acessos = document.querySelector("#cessos")
lucros.addEventListener('click', lucrosF)
function lucrosF(){
    if (resultados.classList.contains('active') && acessos.classList.contains("active")){
        resultados.classList.remove("active")
        acessos.classList.remove('active')
    }
    else{
        lucros.classList.add('active')
    }
}