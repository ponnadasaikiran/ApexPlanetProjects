let cart = [];

export function addToCart(book) {
  const exists = cart.find(item => item.id === book.id);
  if (exists) {
    showToast(`⚠️ ${book.title} is already in your cart.`);
    return;
  }

  cart.push(book);
  updateCartDisplay();
  showToast(`📚 ${book.title} added to cart!`);
}

export function initializeCart() {
  updateCartDisplay();
  setupCartModal();
}

function updateCartDisplay() {
  const cartCount = document.getElementById('cart-count');
  const cartItems = document.getElementById('cartItems');
  const totalItems = document.getElementById('totalItems');
  const totalAmount = document.getElementById('totalAmount');

  if (cartCount) cartCount.textContent = cart.length;

  if (cartItems) {
    cartItems.innerHTML = '';
    let subtotal = 0;

    cart.forEach(book => {
      const item = document.createElement('div');
      item.className = 'cart-item';
      item.innerHTML = `
        <span>${book.title}</span>
        <button data-id="${book.id}">❌</button>
      `;
      item.querySelector('button').addEventListener('click', () => removeFromCart(book.id));
      cartItems.appendChild(item);

      subtotal += 250; // Example price per book
    });

    if (totalItems) totalItems.textContent = cart.length;
    if (totalAmount) totalAmount.textContent = subtotal;
  }
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCartDisplay();
  showToast(`🗑️ Removed from cart`);
}

function showToast(message) {
  let toast = document.getElementById('toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

function setupCartModal() {
  const cartIcon = document.getElementById('cart-icon');
  const cartModal = document.getElementById('cartModal');
  const closeBtn = document.getElementById('closeCart');

  if (cartIcon && cartModal && closeBtn) {
    cartIcon.addEventListener('click', (e) => {
      e.preventDefault();
      cartModal.classList.toggle('hidden');
    });

    closeBtn.addEventListener('click', () => {
      cartModal.classList.add('hidden');
    });
  }
}
