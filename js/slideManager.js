/**
 * Slide navigation management
 */
let currentSlide = 0;
let slides = [];
let nextBtn = null;
let totalSlides = 0;

/**
 * Initialize slide manager
 */
function initSlideManager() {
    slides = document.querySelectorAll('.slide');
    nextBtn = document.getElementById('nextBtn');
    totalSlides = slides.length;
    
    // Attach event listeners
    nextBtn.addEventListener('click', nextSlide);
    document.addEventListener('keydown', handleKeyboardNavigation);
}

/**
 * Navigate to next slide
 */
function nextSlide() {
    slides[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % totalSlides;
    slides[currentSlide].classList.add('active');

    // Hide button on scratch card page (slide 4), show on others
    nextBtn.style.display = currentSlide === 4 ? 'none' : 'block';

    // Animate days numbers when reaching slide 2 (index 1)
    if (currentSlide === 1 && typeof animateDaysNumbers === 'function') {
        setTimeout(animateDaysNumbers, 100);
    }

    // Initialize scratch card when reaching that slide
    if (currentSlide === 4 && !window.scratchInitialized) {
        setTimeout(initScratchCard, 100);
        window.scratchInitialized = true;
    }
}

/**
 * Handle keyboard navigation
 */
function handleKeyboardNavigation(e) {
    if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'Enter') {
        nextSlide();
    }
}

/**
 * Get current slide index
 */
function getCurrentSlideIndex() {
    return currentSlide;
}
