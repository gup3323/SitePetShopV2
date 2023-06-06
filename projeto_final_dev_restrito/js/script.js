let btnContato = document.getElementById("btnContato");

btnContato.addEventListener("click",  () => {
    let msg = document.getElementById("frmMessageSubmited");
    let back = document.getElementById("linkBackHome");

    msg.innerHTML = "Mensagem Enviada com sucesso!";
    back.style.display = "block";
});