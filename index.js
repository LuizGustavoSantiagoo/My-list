let search = "pokemon";

const url = `https://real-time-amazon-data.p.rapidapi.com/search?query=${search}&page=1&country=BR&sort_by=RELEVANCE&product_condition=ALL`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '35caf11d85msh9348b8c6b71413ep196993jsn6e6e46fb4c0c',
		'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
	}
};

async function GetItems() {
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const resultjason = JSON.parse(result)
        console.log(resultjason.data.products);
    } catch (error) {
        console.error(error);
    }
}

GetItems();