fetch("https://dummyjson.com/products")
  .then(res => res.json())
  .then(data => {

    const products = data.products
    const container = document.getElementById("products")

    products.forEach(product => {

      const item = document.createElement("div")

      item.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.thumbnail}" width="150">
        <p>Price: $${product.price}</p>
        <hr>
      `

      container.appendChild(item)

    })

  })