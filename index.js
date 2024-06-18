const url = `https://fakestoreapi.com/products?limit=20`;
let impresao;
let place = document.getElementById('place');
let array= [];

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
                    <p>${element.description}</p>
                    <a href="#" class="btn btn-primary"><i class="bi bi-heart"></i></a>
                </div>
            </div>
            `
            place.innerHTML = impresao;
        }))
}


produtos();