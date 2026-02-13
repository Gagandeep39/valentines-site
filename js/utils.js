/**
 * Utility functions
 */

/**
 * Calculate days, hours, and heartbeats between two dates
 */
function calculateDaysTogether() {
    const diffTime = Math.abs(CONFIG.currentDateActual - CONFIG.dateMetActual);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const hours = diffDays * 24;
    const heartbeats = Math.round(diffDays * 24 * 60 * 60 * 1.4); // Assuming ~1.4 beats per second
    
    return { days: diffDays, hours: hours, heartbeats: heartbeats };
}

/**
 * Format number with commas
 */
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/**
 * Animate a number from 0 to target value
 */
function animateNumber(element, targetValue, duration = 2000, formatting = true) {
    const startTime = performance.now();
    const startValue = 0;
    
    function updateNumber(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function for smooth animation (ease-out)
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.floor(startValue + (targetValue - startValue) * easeOut);
        
        element.textContent = formatting ? formatNumber(currentValue) : currentValue;
        
        if (progress < 1) {
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = formatting ? formatNumber(targetValue) : targetValue;
        }
    }
    
    requestAnimationFrame(updateNumber);
}

/**
 * Get position from mouse or touch event
 */
function getEventPosition(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
        x: (clientX - rect.left) * scaleX,
        y: (clientY - rect.top) * scaleY
    };
}
