// Image Carousel Logic
const images = ['img1.jpg', 'img2.jpg', 'img3.jpg'];
let currentIndex = 0;
const imgElement = document.getElementById('carousel-image');

function showImage(index) {
  imgElement.src = images[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

// API Fetch Logic
async function fetchJoke() {
  const jokeDisplay = document.getElementById('joke-display');
  jokeDisplay.textContent = 'Loading...';
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    const data = await response.json();
    jokeDisplay.textContent = `${data.setup} - ${data.punchline}`;
  } catch (error) {
    jokeDisplay.textContent = 'Failed to load joke. Please try again.';
  }
}