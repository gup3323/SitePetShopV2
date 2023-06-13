
function login(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login == senha){
        window.location.href = "restrito.html";
    }
};
