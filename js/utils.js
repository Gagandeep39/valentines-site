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
