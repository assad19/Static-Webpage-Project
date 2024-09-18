let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
  const isMobile = window.innerWidth <= 767; // Mobile screen width (adjust as needed)
  const slideWidth = isMobile ? 100 : 50;   // Move by 100% for mobile (1 slide), 50% for others (2 slides)

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

// Optionally, listen for window resize and reset the index
window.addEventListener('resize', () => {
  currentIndex = 0;
  document.querySelector('.slider').style.transform = `translateX(0%)`;
});
