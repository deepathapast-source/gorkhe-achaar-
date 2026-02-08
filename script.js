// Update price dynamically based on dropdown
function updatePrice(select) {
  const price = select.value;
  // Find the closest product container
  const productCard = select.closest(".product");
  // Update the <span> inside <p>
  const priceSpan = productCard.querySelector("p span");
  if (priceSpan) {
    priceSpan.innerText = price;
  }
}

// Order button opens WhatsApp with pre-filled message
function orderNow(product) {
  const msg = `Hello, I want to order:\nProduct: ${product}`;
  const url = "https://wa.me/919832063165?text=" + encodeURIComponent(msg);
  window.open(url, "_blank");
}