var btnEntrar = document.querySelector(".entrar-btn")
var senhaErro = document.getElementById("senhaErrada")
var msgErro = document.getElementById("msgErro")
btnEntrar.addEventListener("click", btnEntrarFunction)
function btnEntrarFunction(){
    var emailValue = document.getElementById("email").value;
    var senhaValue = document.getElementById("senha").value;
    if (emailValue == 'email@gmail.com' && senhaValue != 'a'){
        senhaErro.classList.add("active")
        msgErro.classList.remove("active")
    }
    else if(emailValue == 'email@gmail.com' && senhaValue == 'a'){
        window.location.href= "mainLogado.html"
        console.log("Teste")
    }
    else{
        senhaErro.classList.remove("active")
        msgErro.classList.add("active")
    }
    if (emailValue == senhaValue){
        window.location.href = 'mainLogadoAdmin.html'
    }
}