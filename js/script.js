var slides = document.querySelectorAll(".slider");
var index = 0;
var proximo = document.querySelector(".fa-circle-arrow-right")
var prev1 = document.querySelector(".fa-circle-arrow-left")
var pontos = document.querySelectorAll(".pontos")
proximo.addEventListener("click", next)
prev1.addEventListener("click", prev)
function next(){
    slides[index].classList.remove("active");
    pontos[index].classList.remove("active");
    index = (index + 1 ) % slides.length;
    slides[index].classList.add("active");
    pontos[index].classList.add("active");
}
function prev(){
    slides[index].classList.remove("active")
    pontos[index].classList.remove("active");
    index = (index-1+slides.length) % slides.length
    slides[index].classList.add("active")
    pontos[index].classList.add("active");
}
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