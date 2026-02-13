# Valentine's Day Website

A beautiful, modular Valentine's Day website with multiple slides, timeline gallery, and interactive scratch card.

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

### 2. Modify Styles (css/styles.css)
All styling is separated into one CSS file for easy customization.

### 3. Add Timeline Images
Add image paths to the `timelineImages` array in `config.js`:
```javascript
timelineImages: [
    { src: "path/to/image.jpg", caption: "January 2025", date: "Jan" },
    // ...
]
```

## File Descriptions

- **index.html**: Clean HTML structure with minimal markup
- **config.js**: All configuration and customizable content
- **utils.js**: Helper functions (date calculation, formatting, etc.)
- **starsBackground.js**: Creates and animates star field
- **slideManager.js**: Handles slide navigation and keyboard/click events
- **contentPopulator.js**: Dynamically populates content from CONFIG
- **scratchCard.js**: Manages the scratch card interaction
- **main.js**: Initializes the application

## Features

- ✨ Beautiful star field background
- 📱 Fully responsive design
- 🎬 Smooth slide transitions
- 📸 Timeline gallery with scroll
- 🎫 Interactive scratch card
- ⌨️ Keyboard navigation support
- 🎨 Customizable colors and content

## Navigation

- **Click "Next" button** to go to next slide
- **Press Arrow Right, Space, or Enter** for keyboard navigation
- The Next button is hidden on the scratch card page
- Scratch the card to reveal your message

## Tips

- Keep the file structure organized
- Edit `config.js` for all content changes
- Test on mobile devices since it's responsive
- Add your images to improve the timeline section
