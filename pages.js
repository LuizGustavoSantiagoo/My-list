let impresao;
let place = document.getElementById("place")
let eletro = document.getElementById("eletro")
let joias = document.getElementById("joias")
let homens = document.getElementById("homens")
let fem = document.getElementById("fem")
const pagina ='';

async function pages() {

    fetch(paginas)
                .then(res=>res.json())
                .then((json) => json.forEach(element => {
                    impresao += `
                <div class="card">
                    <img class="card-img-top" src="${element.image}" alt="Card image cap">
                    <div class="card-body">
                        <h5 class="card-title">${element.title}</h5>
                        <button type="submit"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
                `
                place.innerHTML = impresao

}))}


function page() {
    if(eletro == true){
        pagina += paginas = 'https://fakestoreapi.com/products/category/electronics'
    } else if(joias == true) {
        pagina += paginas = 'https://fakestoreapi.com/products/category/jewelery'
    } else if(homens == true) {
       pagina += paginas = `https://fakestoreapi.com/products/category/men's%20clothing`
    } else if(fem == true) {
       pagina += paginas = `https://fakestoreapi.com/products/category/women's%20clothing`
    }}

page();
pages();