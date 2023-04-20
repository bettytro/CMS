const queryString = window.location.search;
// console.log(queryString);
const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
const id = urlParams.get('id');
console.log(id);
var col1 = document.getElementById('col1')
var col2 = document.getElementById('col2')

const API_URL = "http://ca-elisabeth.test/wp-json/wc/store/products/"

fetch(API_URL + id)
    .then(response => response.json())
    .then(data => {
console.log(data);
    let newprice = data.prices.price / 100;
    col1data = `
    <img width="400" src="${data.images[0].src}" alt="${data.name}">
    `
    col1.innerHTML += col1data;
    col2data = `
    <div class="details">
    <h1>${data.name}</h1>
    <p class="price"><strong>Price:</strong>${newprice}kr</p>
    <div><strong>Description</strong>${data.description}</div>
    </div>
    <a href="${data.permalink}" class="buy-button">Buy now</a>

    `
    col2.innerHTML += col2data;
    })