// ✅ To-Do List
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskList = document.getElementById('taskList');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const li = document.createElement('li');
  li.textContent = taskText;

  const completeBtn = document.createElement('button');
  completeBtn.textContent = '✔';
  completeBtn.onclick = () => {
    li.classList.toggle('completed');
    saveTasks();
  };

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = '🗑️';
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
    saveTasks();
  };

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
  taskInput.value = '';
  saveTasks();
}

function saveTasks() {
  const tasks = [];
  document.querySelectorAll('#taskList li').forEach(li => {
    tasks.push({
      text: li.firstChild.textContent,
      completed: li.classList.contains('completed')
    });
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks') || '[]');
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task.text;
    if (task.completed) li.classList.add('completed');

    const completeBtn = document.createElement('button');
    completeBtn.textContent = '✔';
    completeBtn.onclick = () => {
      li.classList.toggle('completed');
      saveTasks();
    };

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '🗑️';
    deleteBtn.onclick = () => {
      li.remove();
      saveTasks();
    };

    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);
  });
}
loadTasks();

// ✅ Product Listing
const products = [
  { name: "Smartphone", category: "Electronics", price: 15000, rating: 4.5, img: "images/product1.webp" },
  { name: "T-Shirt", category: "Clothing", price: 500, rating: 4.0, img: "images/product2.jpg" },
  { name: "Laptop", category: "Electronics", price: 40000, rating: 4.8, img: "images/product3.webp" },
  { name: "Jeans", category: "Clothing", price: 1100, rating: 4.2, img: "images/product4.webp" }
];

function displayProducts(list) {
  const container = document.getElementById('productList');
  container.innerHTML = '';
  list.forEach(product => {
    container.innerHTML += `
      <div class="product">
        <img src="${product.img}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₹${product.price}</p>
        <p>⭐ ${product.rating}</p>
      </div>`;
  });
}

function filterProducts() {
  const category = document.getElementById('filter').value;
  const filtered = category === 'all' ? products : products.filter(p => p.category === category);
  displayProducts(filtered);
}

function sortProducts() {
  const criteria = document.getElementById('sort').value;
  const sorted = [...products].sort((a, b) => b[criteria] - a[criteria]);
  displayProducts(sorted);
}

window.onload = () => displayProducts(products);
