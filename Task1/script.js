function toggleSection(id) {
  const section = document.getElementById(id);
  section.style.display = section.style.display === "block" ? "none" : "block";
}

function showTip() {
  document.getElementById("tip").style.display = "block";
}

function submitFeedback() {
  const name = document.getElementById("name").value;
  const comments = document.getElementById("comments").value;
  const rating = document.getElementById("rating").value;

  if (name && comments && rating) {
    alert(`Thanks, ${name}! 🎉\nRating: ${rating} star(s)\nComment: ${comments}`);
    document.querySelector("form").reset();
  } else {
    alert("Please fill out all fields.");
  }

  return false;
}
