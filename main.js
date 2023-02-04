// const menuMain = document.querySelector('.navbar-email');
// const desktopMenu = document.querySelector('.desktop-menu ');

// menuMain.addEventListener ('click',toggleDesktopMenu);

// function toggleDesktopMenu(){
//     desktopMenu.classList.toggle('inactive');
//     console.log ('click');
// }

// console.log ('funciona maim.js')


const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const shoppingCardContainer = document.querySelector('#shoppingCartContainer');
const cardsContainer = document.querySelector('.cards-container');
const productDetailContainer = document.querySelector("#productDetail");
const productDetailClose = document.querySelector('.product-detail-close')
menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);
productDetailClose.addEventListener('click', closeProductDetailAside);
function toggleDesktopMenu() {
  const isAsideClosed = shoppingCardContainer.classList.contains ('inactive');
  if (!isAsideClosed) {
    shoppingCardContainer.classList.add ('inactive');
  }
  desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu() {
  //mobileMenu.classList.toggle('inactive');
  const isAsideClosed = shoppingCardContainer.classList.contains ('inactive');
  if (!isAsideClosed) {
    shoppingCardContainer.classList.add ('inactive');
  }
  mobileMenu.classList.toggle ('inactive');
  desktopMenu.classList.toggle('inactive');
  closeProductDetailAside();
}

function toggleCarritoAside() {
  //aside.classList.toggle('inactive');
  const isMobileClosed = mobileMenu.classList.contains ('inactive');
  const isDesktopClosed = desktopMenu.classList.contains ('inactive');
  if (!isMobileClosed){
    mobileMenu.classList.add ('inactive');
  }
 
  if (!isDesktopClosed){
    desktopMenu.classList.add ('inactive');
  }
  const isProductDetailClose = productDetailContainer.classList.contains ('inactive');
  if (!isProductDetailClose){
    productDetailContainer.classList.add ('inactive');
  }
 
  if (!isDesktopClosed){
    desktopMenu.classList.add ('inactive');
  }
  shoppingCardContainer.classList.toggle('inactive');
}

  shoppingCardContainer.classList.toggle('inactive');


function openProductDetailAside(){
  shoppingCardContainer.classList.add('inactive');
  productDetailContainer.classList.remove('inactive');
}

function closeProductDetailAside(){
  productDetailContainer.classList.add('inactive');
}
/* lista de productos */
const productList = [];
productList.push({
  name: 'Bike',
  price: 120,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Pantalla',
  price: 220,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
  name: 'Compu',
  price: 620,
  image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});

// <div class="product-card">
// <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
// <div class="product-info">
//   <div>
//     <p>$120,00</p>
//     <p>Bike</p>
//   </div>
//   <figure>
//     <img src="./icons/bt_add_to_cart.svg" alt="">
//   </figure>
// </div>
// </div>

function renderProducts(arr) {
  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product= {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
    productImg.addEventListener ('click', openProductDetailAside);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
  
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    cardsContainer.appendChild(productCard);
  }
}

renderProducts(productList);