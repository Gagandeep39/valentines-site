/**
 * Populate dynamic content
 */
function populateContent() {
    // Slide 1: Partner name
    document.getElementById('partnerName').textContent = CONFIG.partnerName;
    
    // Slide 2: Days together calculation
    const daysData = calculateDaysTogether();
    document.getElementById('daysNumber').textContent = daysData.days;
    document.getElementById('daysSubtitle').textContent = 
        `That's roughly ${formatNumber(daysData.hours)} hours. Or around ${formatNumber(daysData.heartbeats)} heartbeats.`;
    
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
