import { playSound } from './common.js';

function initMapSelection() {
    const gallery = document.querySelector('.map-gallery-container');
    if (gallery) {
        // Use event delegation on the container
        gallery.addEventListener('click', (e) => {
            const item = e.target.closest('.gallery-item');
            if (item && item.dataset.href) {
                playSound('confirm.mp3');
                window.location.href = item.dataset.href;
            }
        });
    }
}

// Run initialization
if (document.querySelector('.map-gallery-container')) {
    initMapSelection();
}
