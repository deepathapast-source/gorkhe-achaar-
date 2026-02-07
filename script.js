function updatePrice(select) {
  const price = select.value;
  select.nextElementSibling.nextElementSibling.querySelector("span").innerText = price;
}

function orderNow(product) {
  const msg = `Hello, I want to order:\nProduct: ${product}`;
  window.open("https://wa.me/919832063165?text=" + encodeURIComponent(msg));
}
