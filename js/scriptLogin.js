var btnEntrar = document.querySelector(".entrar-btn")
var senhaErro = document.getElementById("senhaErrada")
var msgErro = document.getElementById("msgErro")
btnEntrar.addEventListener("click", btnEntrarFunction)
function btnEntrarFunction(){
    var emailValue = document.getElementById("email").value;
    var senhaValue = document.getElementById("senha").value;
    if (emailValue == 'email@gmail.com' && senhaValue == 'senha123'){
        window.location.href= "mainLogado.html"
        console.log("Teste")
    }
    if (senhaValue != 'senha123' && emailValue == 'email@gmail.com'){
        senhaErro.classList.add("active")
        msgErro.classList.remove("active")
    }
    else{
        msgErro.classList.add("active")
        senhaErro.classList.remove("active")
    }
}