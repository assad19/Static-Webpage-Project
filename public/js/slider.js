let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let autoPlayInterval;

function moveSlide(direction) {
  const isMobile = window.innerWidth <= 767; // Mobile screen width (adjust as needed)
  const slideWidth = isMobile ? 100 : 50;    // Move by 100% for mobile (1 slide), 50% for others (2 slides)

  currentIndex += direction;

  // Handle overflow by cycling through slides
  if (currentIndex < 0) {
    currentIndex = isMobile ? totalSlides - 1 : totalSlides - 2; // Adjust based on screen size
  } else if (currentIndex > (isMobile ? totalSlides - 1 : totalSlides - 2)) {
    currentIndex = 0; // Reset to the first slide
  }

  const offset = -(currentIndex * slideWidth); // Move the slides
  document.querySelector('.slider').style.transform = `translateX(${offset}%)`;
}

// Autoplay function to move the slide automatically
function startAutoplay() {
  autoPlayInterval = setInterval(() => {
    moveSlide(1); // Move to the next slide every 3 seconds
  }, 2000);
}

// Stop autoplay when needed (e.g., when user hovers over the slider)
function stopAutoplay() {
  clearInterval(autoPlayInterval);
}

// Optionally, listen for window resize and reset the index
window.addEventListener('resize', () => {
  currentIndex = 0;
  document.querySelector('.slider').style.transform = `translateX(0%)`;
});

// Start autoplay when the page loads
window.onload = startAutoplay;

// Example of stopping autoplay on mouse enter and resuming on mouse leave (optional)
document.querySelector('.slider').addEventListener('mouseenter', stopAutoplay);
document.querySelector('.slider').addEventListener('mouseleave', startAutoplay);
