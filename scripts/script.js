var grid = document.getElementById('grid-element')
var featured = document.getElementById('featured-grid-element')

API_URL = "http://ca-elisabeth.test/wp-json/wc/store/products"
fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    }).catch(function (err) {
        console.log(err);
    })

fetch(API_URL + "/20")
    .then(response => response.json())
    .then(data => {
        console.log(data)
    }).catch(function (err) {
        console.log(err)
    })

fetch(API_URL)
    .then(response => response.json())
    .then(data => {
        data.forEach(product => {
            let newprice = product.prices.price / 100;
            html = `
            <a href="product.html?id=${product.id}" >
            <div class="box">
            <img width="200" src="${product.images[0].src}">
            <h2>${product.name}</h2>
            <p class="price">${newprice}</p>
            <div>${product.description}</div>
            </div>
            </a>
            `
            grid.innerHTML += html;
        })
    })

fetch(API_URL + "/?featured=true")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(product => {
            let newprice = product.prices.price / 100;
            html = `
        <a href="product.html?id=${product.id}" target="_blank">
        <div class="box">
        <img width="200" src="${product.images[0].src}">
        <h2>${product.name}</h2>
        <p class="price">${newprice}</p>
        <div>${product.description}</div>
        </div>
        </a>
        `
            featured.innerHTML += html;
        })
    })