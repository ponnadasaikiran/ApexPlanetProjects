// Contact Form Validation
const form = document.getElementById("form");
const errorDiv = document.getElementById("error");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    errorDiv.style.color = 'red';
    errorDiv.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorDiv.style.color = 'red';
    errorDiv.textContent = "Please enter a valid email address.";
    return;
  }

  errorDiv.style.color = 'green';
  errorDiv.textContent = "Form submitted successfully!";
  form.reset();
});

// To-Do List with Edit, Complete, and Delete
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = taskText;

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.style.backgroundColor = "green";
  completeBtn.onclick = () => {
    span.style.textDecoration = span.style.textDecoration === "line-through" ? "none" : "line-through";
  };

  // Edit button
  const editBtn = document.createElement("button");
  editBtn.textContent = "✏";
  editBtn.style.backgroundColor = "orange";
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", span.textContent);
    if (newText) span.textContent = newText;
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "🗑";
  deleteBtn.style.backgroundColor = "crimson";
  deleteBtn.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(completeBtn);
  li.appendChild(editBtn);
  li.appendChild(deleteBtn);

  document.getElementById("todoList").appendChild(li);
  taskInput.value = "";
}
