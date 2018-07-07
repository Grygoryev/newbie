var requestURL = '../assets/json/productsData.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  var productsData = request.response;
  showProductsData(productsData);
};

var productCards = document.querySelector('.products-catalog__body');

function showProductsData(jsonObj) {
  var products = jsonObj['products'];

  for (var i = 0; i < products.length; i++) {
    var productCard = document.createElement('figure');
    productCard.className = 'product-card';

    var productCardLabel = document.createElement('p');
    productCardLabel.className = 'product-card__label';

    var productCardName = document.createElement('h2');
    productCardName.className = 'product-card__name';

    var productCardTaste = document.createElement('h3');
    productCardTaste.className = 'product-card__taste';

    var productCardBonus = document.createElement('p');
    productCardBonus.className = 'product-card__bonus';

    var productCardQuantity = document.createElement('p');
    productCardQuantity.className = 'product-card__quantity';

    productCardLabel.textContent = products[i].label;
    productCardName.textContent = products[i].name;
    productCardTaste.textContent = products[i].taste;
    productCardBonus.textContent = products[i].bonus;
    productCardQuantity.textContent = products[i].quantity;

    productCard.appendChild(productCardLabel);
    productCard.appendChild(productCardName);
    productCard.appendChild(productCardTaste);
    productCard.appendChild(productCardQuantity);
    productCard.appendChild(productCardBonus);

    productCards.appendChild(productCard);
  }
}