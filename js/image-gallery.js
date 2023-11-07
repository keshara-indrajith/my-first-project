const imageList = document.querySelector('.image-list');
const images = document.querySelectorAll('.image-list li');
let currentIndex = 0;

function shiftImages() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

// Adjust the interval speed (in milliseconds) as needed
const shiftInterval = setInterval(shiftImages, 2000); // Shifts every 2 seconds
