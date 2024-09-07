

let queries = new URLSearchParams(window.location.search)
let id = queries.get('id')


const all = document.getElementById('all')


let getProduct = async () => {
  let response = await fetch('https://dummyjson.com/products/' + id)
  let result = await response.json()
  return result;
}


let displayProduct = async () => {
  const product = await getProduct()
  
  let container;

  
    container += `
    <div class="row align-items-center gy-5">
        <div class="col-md-6"></div>
          <div class="content d-flex justify-content-center">
            <img src="${product.thumbnail}" class="w-25" alt="">
          </div>
        </div>
        <div class="col-md-6">
          <div class="content d-flex flex-column justify-content-around">
            <h2>${product.title}</h2>
            <p class="lead">${product.description}</p>
              <ul class="fa-ul">
                <li><span class="fa-li"><i class="fa-solid fa-hand-point-right"></i></span>Category: <span>${product.category}</span></li>
                <li><span class="fa-li"><i class="fa-solid fa-hand-point-right"></i></span>Price: <span>${product.price}</span></li>
                <li><span class="fa-li"><i class="fa-solid fa-hand-point-right"></i></span>Discount: <span>${product.discountPercentage}</span></li>
                <li><span class="fa-li"><i class="fa-solid fa-hand-point-right"></i></span>Stock: <span>${product.stock}</span></li>
              </ul>
          </div>
        </div>
    `

    all.innerHTML = container;
  
}

displayProduct();



