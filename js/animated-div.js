// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    // Find the animated paragraph
    const animatedParagraph = document.getElementById("animated-text");
  
    // Function to continuously fade in and out the element
    function fadeInOut() {
      let opacity = 0;
      const fadeInterval = setInterval(function () {
        if (opacity >= 1) {
          clearInterval(fadeInterval); // Stop fading in
          setTimeout(fadeOut, 1000); // Wait for 1 second and then fade out
        } else {
          opacity += 0.05; // Adjust the increment value as needed for speed
          animatedParagraph.style.opacity = opacity;
        }
      }, 50); // Adjust the interval duration as needed for smoothness
    }
  
    function fadeOut() {
      let opacity = 1;
      const fadeInterval = setInterval(function () {
        if (opacity <= 0) {
          clearInterval(fadeInterval); // Stop fading out
          setTimeout(fadeInOut, 1000); // Wait for 1 second and then fade in again
        } else {
          opacity -= 0.05; // Adjust the decrement value as needed for speed
          animatedParagraph.style.opacity = opacity;
        }
      }, 50); // Adjust the interval duration as needed for smoothness
    }
  
    // Start the animation
    fadeInOut();
  });
  