const coursesListContainer = document.querySelector("#lista-cursos");
const cartProductsContainer = document.querySelector("#lista-carrito tbody");
const cart = document.querySelector("#carrito");
const removeAllButton = document.querySelector("#vaciar-carrito");
const cartProductsNumber = document.querySelector("#cart-number");

let cartProducts = [];

callEventListeners();
function callEventListeners() {
  coursesListContainer.addEventListener("click", addToCart);
  cartProductsContainer.addEventListener("click", removeProduct);
  removeAllButton.addEventListener("click", () => {
    cartProducts = [];
    cleanCart();
  });
}

function addToCart(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const course = e.target.parentElement.parentElement;
    readCourse(course);
  }
}

function removeProduct(e) {
  e.preventDefault();
  if (e.target.classList.contains("borrar-curso")) {
    const course = e.target.parentElement.parentElement;
    const courseId = course.querySelector("a").getAttribute("data-id");
    let products = [];
    cartProducts.forEach((product) => {
      if (product.quantity > 1 && product.id === courseId) {
        product.quantity--;
        products.push(product);
      } else {
        if (product.id !== courseId) {
          products.push(product);
        }
      }
    });

    cartProducts = products;
    console.log(courseId);
    printCartProducts();
  }
}

function readCourse(course) {
  const courseInfo = {
    id: course.querySelector("a").getAttribute("data-id"),
    image: course.querySelector("img").src,
    name: course.querySelector("h4").textContent,
    price: course.querySelector(".precio span").textContent,
    quantity: 1,
  };

  const productExist = cartProducts.some(
    (product) => product.id === courseInfo.id
  );
  console.log(productExist);
  if (productExist) {
    let products = cartProducts.map((product) => {
      if (product.id === courseInfo.id) {
        product.quantity++;
      }
      return product;
    });
    cartProducts = products;
  } else {
    cartProducts = [...cartProducts, courseInfo];
  }

  console.log(cartProducts);
  printCartProducts();
}

function printCartProducts() {
  cleanCart();

  cartProducts.forEach(({ id, image, name, price, quantity }) => {
    let row = document.createElement("tr");
    row.innerHTML = `<td><img src="${image}" width="100"></td>
    <td>${name}</td>
    <td>${price}</td>
    <td>${quantity}</td>
    <td><a href="#" class="borrar-curso" data-id="${id}">X</a></td>`;
    cartProductsContainer.appendChild(row);
  });
  cartProductsNumber.textContent = cartProducts.length;
}

function cleanCart() {
  //   while (cartProductsContainer.firstChild) {
  //     cartProductsContainer.removeChild(cartProductsContainer.firstChild);
  //   }
  cartProductsContainer.innerHTML = "";
}
