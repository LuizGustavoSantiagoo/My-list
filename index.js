let url = `https://fakestoreapi.com/products?limit=20`;
let impresao;
let place = document.getElementById('place');
let array = [];

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
                    <button type="submit"><i class="bi bi-heart"></i></button>
                </div>
            </div>
            `
            place.innerHTML = impresao;
        }))
}


function eletronico() {

    while (place.firstChild) {
        place.removeChild(place.firstChild);
    }

    url = "https://fakestoreapi.com/products/category/jewelery"

    window.onload;
}

function joias() {
  
    url = "https://fakestoreapi.com/products/category/jewelery"
    window.onload;
}
function homenRoupas() {

    url = "https://fakestoreapi.com/products/category/jewelery"
    window.onload;
  }

function mulheresRoupas() {

    url = "https://fakestoreapi.com/products/category/jewelery"
    window.onload;
}


    produtos();