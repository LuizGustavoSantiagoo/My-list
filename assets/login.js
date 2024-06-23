let user = document.getElementById("user")
let senha = document.getElementById("senha")
let place = document.getElementById("place")
let log = true;

function logar() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const password = localStorage.getItem("senha");

    console.log(`user = ${user}`)
    return user.value === name && senha.value === password || user.value === email && senha.value === password;
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if(logar()) {
        place.innerHTML = "Logado com sucesso"
        window.location.href = "index.html";
        localStorage.setItem("autentication", log)
    }else {
        place.innerHTML = "Dados errados"
    }

})




