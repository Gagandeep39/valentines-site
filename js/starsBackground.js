/**
 * Create and manage floating rose petals background
 */
function initStarField() {
    const starsContainer = document.getElementById('stars');
    
    // Rose and heart emojis for romantic feel
    const petals = ['🌹', '❤️', '🌹', '❤️', '✨', '🌹'];
    
    // Create 40 floating petals
    for (let i = 0; i < 40; i++) {
        const petal = document.createElement('div');
        petal.className = 'star';
        petal.textContent = petals[Math.floor(Math.random() * petals.length)];
        
        // Random horizontal position
        petal.style.left = Math.random() * 100 + '%';
        
        // Random animation duration (5-15 seconds)
        const duration = Math.random() * 10 + 5;
        petal.style.animationDuration = duration + 's';
        
        // Random delay for staggered start
        petal.style.animationDelay = Math.random() * 2 + 's';
        
        // Slight horizontal drift
        petal.style.setProperty('--drift', (Math.random() - 0.5) * 100 + 'px');
        
        starsContainer.appendChild(petal);
    }
}
