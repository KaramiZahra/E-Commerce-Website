// hamburger menu
let menu = document.querySelector(".menu");
let menuIcon = document.querySelector(".header-icon");
let icon = document.querySelector(".header-icon i");

menuIcon.addEventListener("click", function () {
  if (icon.classList.contains("fa-bars")) {
    icon.classList.replace("fa-bars", "fa-times");
    // styles of menu when it's in lg size
    menu.style.cssText =
      "display:block; position:absolute; left:0; top:3.4rem; padding-left:1rem; padding-top:0.5rem; background-color:rgba(0,0,0,0.4); width:100%; height:max-content; transition:all 0.5s;";
  } else {
    icon.classList.replace("fa-times", "fa-bars");
    menu.style.display = "none";
  }
});

// you can add new products of the website in here
let productsArray = [
  {
    id: 1,
    title: "Laptop",
    label: "laptop",
    price: 1170,
    img: "img/laptop-1.jpg",
    count: 1,
  },
  {
    id: 2,
    title: "Mobile",
    label: "mobile",
    price: 649,
    img: "img/mobile-1.jpg",
    count: 1,
  },
  {
    id: 3,
    title: "Laptop",
    label: "laptop",
    price: 2184,
    img: "img/laptop-2.jpg",
    count: 1,
  },
  {
    id: 4,
    title: "E-book",
    label: "e-book",
    price: 235,
    img: "img/e-book-1.jpg",
    count: 1,
  },
  {
    id: 5,
    title: "E-book",
    label: "e-book",
    price: 144,
    img: "img/e-book-2.jpg",
    count: 1,
  },
  {
    id: 6,
    title: "Laptop",
    label: "laptop",
    price: 890,
    img: "img/laptop-3.jpg",
    count: 1,
  },
  {
    id: 7,
    title: "Laptop",
    label: "laptop",
    price: 1657,
    img: "img/laptop-4.jpg",
    count: 1,
  },
  {
    id: 8,
    title: "Mobile",
    label: "mobile",
    price: 580,
    img: "img/mobile-2.jpg",
    count: 1,
  },
  {
    id: 9,
    title: "Laptop",
    label: "laptop",
    price: 678,
    img: "img/laptop-5.jpg",
    count: 1,
  },
  {
    id: 10,
    title: "E-book",
    label: "e-book",
    price: 99,
    img: "img/e-book-3.jpg",
    count: 1,
  },
  {
    id: 11,
    title: "Mobile",
    label: "mobile",
    price: 812,
    img: "img/mobile-3.jpg",
    count: 1,
  },
  {
    id: 12,
    title: "E-book",
    label: "e-book",
    price: 418,
    img: "img/e-book-4.jpg",
    count: 1,
  },
];
let productsContainer = document.querySelector(".products-container");

// insert html for the respective products in array
function createProductCard(products) {
  productsContainer.innerHTML = "";

  products.forEach(function (product) {
    productsContainer.insertAdjacentHTML(
      "beforeend",
      '<div class="product m-3 border rounded-md h-64 relative overflow-hidden"><div class="w-full h-5/6 overflow-hidden"><img src="' +
        product.img +
        '" class="rounded-tr-md rounded-tl-md w-full h-full object-cover transition-all duration-700 hover:scale-110"><i data-icon-id="' +
        product.id +
        '" class="fa-solid fa-cart-shopping inline-block absolute -bottom-2 -right-14 z-10 text-lg bg-white px-4 py-3 rounded-tl-3xl transition-all duration-500"></i></div><div class="flex justify-between items-center px-4 py-2"><div class="title">' +
        product.title +
        '</div><div class="price">$' +
        product.price +
        "</div></div></div>"
    );
  });
}
createProductCard(productsArray);

// categorization
const allBtn = document.querySelector(".all-btn");
const laptopBtn = document.querySelector(".laptops-btn");
const mobileBtn = document.querySelector(".mobiles-btn");
const ebookBtn = document.querySelector(".ebooks-btn");

// shows all the products
allBtn.addEventListener("click", function () {
  let allFilter = productsArray.filter(function (all) {
    return all.label;
  });
  createProductCard(allFilter);
});

// shows only laptops
laptopBtn.addEventListener("click", function () {
  let laptopFilter = productsArray.filter(function (laptop) {
    return laptop.label === "laptop";
  });
  createProductCard(laptopFilter);
});

// shows only mobiles
mobileBtn.addEventListener("click", function () {
  let mobileFilter = productsArray.filter(function (mobile) {
    return mobile.label === "mobile";
  });
  createProductCard(mobileFilter);
});

// shows only e-books
ebookBtn.addEventListener("click", function () {
  let ebookFilter = productsArray.filter(function (ebook) {
    return ebook.label === "e-book";
  });
  createProductCard(ebookFilter);
});

// shopping cart
let products = document.querySelectorAll(".product");
// shopping cart icon appears
function productCartIcon(e) {
  let cartIcon = e.currentTarget.querySelector(".fa-cart-shopping");
  cartIcon.style.cssText = "bottom:2.5rem; right:0;";
}
// shopping cart icon disappears
function resetCartIcon(e) {
  let cartIcon = e.currentTarget.querySelector(".fa-cart-shopping");
  cartIcon.style.cssText = "bottom:-0.5rem; right:-3.5rem;";
}
// the respective events works for both touch and mouse
products.forEach(function (product) {
  product.addEventListener("mouseenter", productCartIcon);
  product.addEventListener("touchstart", productCartIcon);
  product.addEventListener("mouseleave", resetCartIcon);
  product.addEventListener("touchend", resetCartIcon);
});

// add to cart
let userBasket = [];
let cartIcons = document.querySelectorAll(".fa-cart-shopping");

cartIcons.forEach(function (icon) {
  icon.addEventListener("click", function () {
    let productId = icon.getAttribute("data-icon-id");
    // find in products array
    let productToAdd = productsArray.find(function (product) {
      return product.id == productId;
    });
    // check whether it's already in basket or not
    let isInBasket = userBasket.some(function (product) {
      return product.id == productToAdd.id;
    });
    // add to basket when the product doesn't exist in it
    if (!isInBasket) {
      userBasket.push(productToAdd);
      console.log(userBasket);
    }
  });
});

////////////// Basket ////////////////

// create products in basket 
let productsBasket = document.querySelector(".products-basket");
function createProductInBasket(basket) {
  basket.forEach(function (product) {
    productsBasket.innerHTML = "";
    productsBasket.insertAdjacentHTML(
      "beforeend",
      '<div class="product-basket py-8 flex justify-between items-center border-b border-gray-500"><div class="flex items-center"><img src="' +
        product.img +
        '" class="h-16 w-16 rounded"><div class="product-basket-title pl-8 text-lg">' +
        product.title +
        '</div></div><button class="product-basket-btn data-basket-id="' +
        product.id +
        '" rounded bg-red-500 py-3 px-16 text-white text-lg hover:bg-red-600">Remove</button></div>'
    );
  });
}