/**
 * Create and manage animated floating particles background
 */
function initStarField() {
    const starsContainer = document.getElementById('stars');
    
    // Create 30 floating glowing particles
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'star';
        
        // Random horizontal position
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        
        // Random animation duration (8-20 seconds)
        const duration = Math.random() * 12 + 8;
        particle.style.animationDuration = duration + 's';
        
        // Staggered start - minimal delay for immediate visibility
        particle.style.animationDelay = Math.random() * 0.5 + 's';
        
        // Random size variation
        const size = Math.random() * 3 + 1;
        particle.style.setProperty('--size', size + 'px');
        
        starsContainer.appendChild(particle);
    }
}
