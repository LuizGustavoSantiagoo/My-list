    let pnome = document.getElementById("Pname");
    let lname = document.getElementById("Lname");
    let email = document.getElementById("email");
    let dataNasc = document.getElementById("dataNasc");
    let senha = document.getElementById("senha");
    let place =  document.getElementById("place");
    let form = document.getElementById("form");

function check() {

    if(pnome.checkValidity() && lname.checkValidity() && email.checkValidity() && dataNasc.checkValidity() && senha.checkValidity()) {
        return true;
    }
}  

form.addEventListener('submit', (e) => {
    e.preventDefault();
        
    if(check()) {

        place.innerHTML = "";

        place.innerHTML = "cadastro concluido com sucesso!";
        place.innerHTML = "Re-direcionando para pagina de login";

        

        localStorage.setItem("name", pnome.value);
        localStorage.setItem("Lname", lname.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("senha", senha.value);
        localStorage.setItem("dataNasc", dataNasc.value)

        window.location.href="login.html"
    } else {

        place.innerHTML = "";

        place.innerHTML = "dados errados";
    }
    
})
