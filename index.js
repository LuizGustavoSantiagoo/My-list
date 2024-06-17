const url = `https://fakestoreapi.com/products?limit=20`;
let impresao;
let place = document.getElementById('place');
let array= [];

async function produtos() { 

    fetch(url)
        .then((res) => res.json())
        .then((json) => {
            array = json;
            console.log(json)
            return array;
        })
        .then((array) => array.forEach(element => {
            console.log(array)
        }))
        .then((array) => {
                impresao += `
                <div class="card" style="width: 30%;">
                    <img class="card-img-top" src="" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title"></h5>
                        <p></p>
                        <a href="#" class="btn btn-primary"><i class="bi bi-heart"></i></a>
                    </div>
                </div>
                `,
                place.innerHTML = impresao}
        );
}

produtos();