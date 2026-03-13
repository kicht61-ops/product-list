// LOAD ALL PRODUCTS
fetch("https://dummyjson.com/products")
.then(res => res.json())
.then(data => {

let html = ""

data.products.forEach(p => {

html += `
<div class="product">
<h3>${p.title}</h3>
<img src="${p.thumbnail}" width="120">
<p>Price: $${p.price}</p>
</div>
`

})

document.getElementById("productList").innerHTML = html

})


// LOAD CATEGORIES
fetch("https://dummyjson.com/products/categories")
.then(res => res.json())
.then(data => {

let html = ""

data.forEach(c => {

let name = typeof c === "string" ? c : c.name

html += `<li onclick="loadByCategory('${name}')">${name}</li>`

})

document.getElementById("categoryList").innerHTML = html

})



// LOAD PRODUCT BY CATEGORY
function loadByCategory(category){

fetch(`https://dummyjson.com/products/category/${category}`)
.then(res => res.json())
.then(data => {

let html = ""

data.products.forEach(p => {

html += `
<div class="product">
<h3>${p.title}</h3>
<img src="${p.thumbnail}" width="120">
<p>Price: $${p.price}</p>
</div>
`

})

document.getElementById("productList").innerHTML = html

})

}