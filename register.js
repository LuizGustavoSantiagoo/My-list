    let pnome = document.getElementById("Pname");
    let lname = document.getElementById("Lname");
    let email = document.getElementById("email")
    let senha = document.getElementById("senha")
    let confirmaSenha = document.getElementById("Csenha")
    let place =  document.getElementById("place")

function check() {

    if(pnome.checkValidity() && lname.checkValidity() && email.checkValidity() && senha.checkValidity())

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        
        if(check()){
            place.innerHTML = "ok"
        } else {
            place.innerHTML = "nou"
        }
})
}
