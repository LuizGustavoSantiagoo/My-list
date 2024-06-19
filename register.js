    let pnome = document.getElementById("Pname");
    let lname = document.getElementById("Lname");
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let confirmaSenha = document.getElementById("Csenha")
    let place =  document.getElementById("place")

function check() {

    if(pnome.checkValidity()) {
       place.innerHTML = "nome ok";
    }

    if(lname.checkValidity()) {

    }

    if(email.checkValidity()) {
        place.innerText
    }

    if(senha.checkValidity()) {

    }

    if(confirmaSenha.checkValidity()) {

    }

    if(confirmaSenhasenha.checkValidity() === senha.checkValidity()) {
        place.innerHTML = "baozinho"
    } else {
        place.innerHTML = "As senhas não são iguais";
    }
}