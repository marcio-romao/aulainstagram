let user = "marcio.a.romao@gmail.com";
let senha = "123456";



function botaoEntrar(){
    let form = document.querySelector(".form");
    let userAcesso = form.querySelector(".login-email");
    let senhaAcesso = form.querySelector(".senha");

    console.log(userAcesso.value, senhaAcesso.value);
    
    if (userAcesso.value === user && senhaAcesso.value === senha){
        window.location.href = "perfil.html";
    }
    else {
        alert("USUÁRIO OU SENHA INVÁLIDOS");
    }
    
}