let url = `https://fakestoreapi.com/products?limit=20`;
let impresao = "";
let place = document.getElementById('place');

async function produtos() { 

    fetch(url)
        .then((res) => res.json())
        .then((array) => array.forEach(element => {
            console.log(element)
            
            impresao += `
            <div class="card">
                <img class="card-img-top" src="${element.image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${element.title}</h5>
                </div>
            </div>
            `
            place.innerHTML = impresao;
        }))
}


function clean() {
    impresao = ""
    place.innerHTML = "";
}

function eletronico() {
    clean();

    url = "https://fakestoreapi.com/products/category/electronics"
    produtos();
}

function joias() {
  
    clean();

    url = "https://fakestoreapi.com/products/category/jewelery"
    produtos();
}

function homenRoupas() {

    clean();
    url = "https://fakestoreapi.com/products/category/men's%20clothing"
    produtos();
}

function mulheresRoupas() {

    clean();
    url = "https://fakestoreapi.com/products/category/women's%20clothing"
    produtos();
}

function allItems() {
    clean();
    let url = `https://fakestoreapi.com/products?limit=20`;
    produtos();
}


produtos();