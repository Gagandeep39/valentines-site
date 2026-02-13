/**
 * Populate dynamic content
 */
function populateContent() {
    // Slide 1: Partner name
    document.getElementById('partnerName').textContent = CONFIG.partnerName;
    
    // Slide 2: Days together calculation - store data for animation
    window.daysTogetherData = calculateDaysTogether();
    // Set initial values to 0 (will be animated when slide is shown)
    document.getElementById('daysNumber').textContent = '0';
    document.getElementById('daysSubtitle').textContent = 
        `That's roughly 0 hours. Or around 0 heartbeats.`;
    
    // Slide 3: Miracle message
    document.getElementById('miracleTitle').textContent = CONFIG.miracleTitle;
    document.getElementById('miracleText').innerHTML = CONFIG.miracleText;
    document.getElementById('miracleConclusion').textContent = CONFIG.miracleConclusion;
    
    // Slide 4: Timeline
    populateTimeline();
    
    // Scratch card image
    if (CONFIG.scratchCardImage) {
        const placeholder = document.querySelector('.placeholder-image');
        placeholder.innerHTML = `<img src="${CONFIG.scratchCardImage}" style="width: 100%; height: 100%; object-fit: cover;">`;
    }
}

/**
 * Populate timeline cards
 */
function populateTimeline() {
    const timelineScroll = document.getElementById('timelineScroll');
    timelineScroll.innerHTML = CONFIG.timelineImages.map((item, index) => {
        const imageContent = item.src 
            ? `<img src="${item.src}" alt="${item.caption}">` 
            : '💝';
        
        return `
            <div class="timeline-card">
                <div class="timeline-card-image">${imageContent}</div>
                <div class="timeline-card-content">
                    <div class="timeline-card-date">${item.date}</div>
                    <div class="timeline-card-caption">${item.caption}</div>
                </div>
            </div>
        `;
    }).join('');
    
    // Center first card on load
    setTimeout(() => {
        const firstCard = timelineScroll.querySelector('.timeline-card');
        if (firstCard) {
            const scrollLeft = firstCard.offsetLeft - (timelineScroll.offsetWidth / 2) + (firstCard.offsetWidth / 2);
            timelineScroll.scrollLeft = scrollLeft;
        }
    }, 100);
}

/**
 * Animate the days together numbers
 */
function animateDaysNumbers() {
    if (!window.daysTogetherData || window.daysAnimated) return;
    
    const data = window.daysTogetherData;
    const daysElement = document.getElementById('daysNumber');
    const subtitleElement = document.getElementById('daysSubtitle');
    
    // Animate the main days number
    animateNumber(daysElement, data.days, 2000, false);
    
    // Animate the subtitle text with hours and heartbeats
    const startTime = performance.now();
    function updateSubtitle(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / 2000, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        const currentHours = Math.floor(data.hours * easeOut);
        const currentHeartbeats = Math.floor(data.heartbeats * easeOut);
        
        subtitleElement.textContent = 
            `That's roughly ${formatNumber(currentHours)} hours. Or around ${formatNumber(currentHeartbeats)} heartbeats.`;
        
        if (progress < 1) {
            requestAnimationFrame(updateSubtitle);
        } else {
            subtitleElement.textContent = 
                `That's roughly ${formatNumber(data.hours)} hours. Or around ${formatNumber(data.heartbeats)} heartbeats.`;
        }
    }
    requestAnimationFrame(updateSubtitle);
    
    window.daysAnimated = true;
}
