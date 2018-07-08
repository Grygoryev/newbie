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

    var label = document.createElement('p');
    label.className = 'product-card__label';

    var name = document.createElement('h2');
    name.className = 'product-card__name';

    var taste = document.createElement('h3');
    taste.className = 'product-card__taste';

    var quantity = document.createElement('p');
    quantity.className = 'product-card__quantity';

    var bonus = document.createElement('p');
    bonus.className = 'product-card__bonus';

    var customerState = document.createElement('p');
    customerState.className = 'product-card__customer-state';

    var available = products[i].available;

    label.textContent = products[i].label;
    name.textContent = products[i].name;
    taste.textContent = products[i].taste;
    quantity.textContent = products[i].quantity;
    bonus.textContent = products[i].bonus;

    productCard.appendChild(label);
    productCard.appendChild(name);
    productCard.appendChild(taste);
    productCard.appendChild(quantity);
    productCard.appendChild(bonus);

    if (customerState in products[i]) {
      productCard.appendChild(customerState)
    }

    if (available === false) {
      productCard.className = 'product-card product-card_disable';
    }

    productCards.appendChild(productCard);
  }
}
