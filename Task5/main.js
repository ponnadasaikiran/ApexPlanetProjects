import { renderBooks, applyFilters } from './books.js';
import { initializeCart } from './cart.js';
import { setupUI } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  const res = await fetch('books.json');
  const books = await res.json();

  renderBooks(books);
  applyFilters(books);
  initializeCart();
  setupUI();
});
