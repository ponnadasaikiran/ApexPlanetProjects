import { addToCart } from './cart.js';

export function renderBooks(bookList) {
  const booksContainer = document.getElementById('booksContainer');
  if (!booksContainer) return;
  booksContainer.innerHTML = '';

  bookList.forEach(book => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <img src="${book.image}" alt="${book.title}" loading="lazy" />
      <div class="book-info">
        <h3>${book.title}</h3>
        <p>by ${book.author}</p>
        <a href="#" class="btn" data-id="${book.id}">Add to Cart</a>
      </div>
    `;

    bookCard.querySelector('.btn').addEventListener('click', (e) => {
      e.preventDefault();
      addToCart(book);
    });

    booksContainer.appendChild(bookCard);
  });
}

export function applyFilters(allBooks) {
  const searchInput = document.getElementById('searchInput');
  const genreFilter = document.getElementById('genreFilter');

  function updateDisplay() {
    const search = searchInput.value.toLowerCase();
    const genre = genreFilter.value;

    const filtered = allBooks.filter(book => {
      return (
        (book.title.toLowerCase().includes(search) || book.author.toLowerCase().includes(search)) &&
        (genre === '' || book.genre === genre)
      );
    });

    renderBooks(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', updateDisplay);
  if (genreFilter) genreFilter.addEventListener('change', updateDisplay);
}
