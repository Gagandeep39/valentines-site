/**
 * Scratch card functionality
 */
function initScratchCard() {
    const canvas = document.getElementById('scratchCanvas');
    if (!canvas) return;

    const container = canvas.parentElement;
    canvas.width = container.offsetWidth;
    canvas.height = container.offsetHeight;

    const ctx = canvas.getContext('2d');
    let isDrawing = false;

    // Draw scratch surface
    drawScratchSurface(ctx, canvas);

    // Setup event listeners
    setupScratchEventListeners(canvas, ctx, isDrawing);

    // Check scratch progress
    checkScratchProgress(ctx, canvas);
}

/**
 * Draw the initial scratch card surface
 */
function drawScratchSurface(ctx, canvas) {
    ctx.fillStyle = 'rgba(255, 179, 186, 1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.font = '20px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Scratch here', canvas.width / 2, canvas.height / 2);
}

/**
 * Setup scratch event listeners
 */
function setupScratchEventListeners(canvas, ctx, isDrawing) {
    function scratch(x, y) {
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(x, y, 30, 0, Math.PI * 2);
        ctx.fill();
    }

    canvas.addEventListener('mousedown', () => {
        isDrawing = true;
    });
    canvas.addEventListener('mouseup', () => {
        isDrawing = false;
    });
    canvas.addEventListener('mousemove', (e) => {
        if (isDrawing) {
            const pos = getEventPosition(e, canvas);
            scratch(pos.x, pos.y);
        }
    });

    canvas.addEventListener('touchstart', (e) => {
        isDrawing = true;
        const pos = getEventPosition(e, canvas);
        scratch(pos.x, pos.y);
    });
    canvas.addEventListener('touchmove', (e) => {
        e.preventDefault();
        if (isDrawing) {
            const pos = getEventPosition(e, canvas);
            scratch(pos.x, pos.y);
        }
    });
    canvas.addEventListener('touchend', () => {
        isDrawing = false;
    });
}

/**
 * Check if card is scratched enough and reveal message
 */
function checkScratchProgress(ctx, canvas) {
    let hasRevealed = false;
    const checkInterval = setInterval(() => {
        if (hasRevealed) return;
        
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        let transparentPixels = 0;
        
        for (let i = 3; i < data.length; i += 4) {
            if (data[i] === 0) {
                transparentPixels++;
            }
        }
        
        const revealPercentage = (transparentPixels / (data.length / 4)) * 100;
        
        if (revealPercentage > 70) {
            hasRevealed = true;
            clearInterval(checkInterval);
            
            // Disable canvas interaction and show message
            canvas.style.pointerEvents = 'none';
            const message = document.getElementById('scratchMessage');
            message.style.visibility = 'visible';
        }
    }, 200);
}
