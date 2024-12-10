// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Theme Toggle (Dark Mode)
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  themeToggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
});

// Cart Logic
const cart = [];
const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const name = button.dataset.name;
    const price = parseFloat(button.dataset.price);

    const item = cart.find(product => product.id === id);
    if (item) {
      item.quantity++;
    } else {
      cart.push({ id, name, price, quantity: 1 });
    }
    updateCart();
  });
});

function updateCart() {
  cartItemsElement.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.name} x ${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
    cartItemsElement.appendChild(listItem);

    total += item.price * item.quantity;
  });

  cartTotalElement.textContent = total.toFixed(2);
}

// Checkout Button Logic
document.getElementById('checkout').addEventListener('click', () => {
  alert('Proceeding to checkout...');
  // Integrate Stripe or PayPal here
});
