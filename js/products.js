
const all = document.getElementById("all")

let getProducts = async () => {
  let response = await fetch('https://dummyjson.com/products')
  let result = await response.json()
  let products = await result.products
  return products
}

let displayProducts = async () => {
  const products = await getProducts()
  
  let container = [];

  for (let i = 0; i < products.length; i++) {
    container += `
      <div class="col-md-4">
          <div class="content">
            <div class="card">
              <img src="${products[i].thumbnail}" class="card-img-top" alt="${products[i].title}">
              <div class="card-body">
                <h5 class="card-title">${products[i].title}</h5>
                <p class="card-text">${products[i].description}</p>
              </div>
            </div>
          </div>
        </div>
    `

    all.innerHTML = container;
  }
}

displayProducts()



