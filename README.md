# Valentine's Day Website

A Valentine's Day website with multiple slides, timeline gallery, and interactive scratch card.

## Project Structure

```
valentines-site/
├── index.html                 # Main HTML file
├── css/
│   └── styles.css            # All CSS styles
├── js/
│   ├── config.js             # Configuration (edit your content here)
│   ├── utils.js              # Utility functions
│   ├── starsBackground.js    # Star field animation
│   ├── slideManager.js       # Slide navigation logic
│   ├── contentPopulator.js   # Dynamic content population
│   ├── scratchCard.js        # Scratch card functionality
│   └── main.js               # App initialization
└── index_old.html            # Backup of original file
```

## How to Customize

### 1. Edit Configuration (js/config.js)
All customizable content is in this file:
- Your name and partner's name
- Dates (for calculating days together)
- Messages and titles
- Timeline images and captions
- Scratch card image

Example:
```javascript
const CONFIG = {
    yourName: "Your Name",
    partnerName: "Partner Name",
    // ... more settings
};
```