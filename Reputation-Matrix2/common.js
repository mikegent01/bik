// Manages all common, shared functionality for the application.

// --- AUDIO ---
let audioContext;
const audioBuffers = {};

export function initAudio() {
    if (audioContext) return;
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        // Load all sounds at once
        loadSound('click.mp3');
        loadSound('wah.mp3');
        loadSound('confirm.mp3');
    } catch (e) {
        console.warn('Web Audio API is not supported in this browser');
    }
}

async function loadSound(url) {
    if (!audioContext || audioBuffers[url]) return;
    try {
        const response = await fetch(url);
        const arrayBuffer = await response.arrayBuffer();
        const buffer = await audioContext.decodeAudioData(arrayBuffer);
        audioBuffers[url] = buffer;
    } catch (e) {
        console.error(`Failed to load sound: ${url}`, e);
    }
}

export function playSound(url, volume = 0.7) {
    if (!audioContext || !audioBuffers[url]) {
        return;
    }
    const source = audioContext.createBufferSource();
    source.buffer = audioBuffers[url];
    const gainNode = audioContext.createGain();
    gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
    source.connect(gainNode).connect(audioContext.destination);
    source.start(0);
}


// --- ON-PAGE ASSET SCANNER ---

async function checkImage(src) {
    return new Promise(resolve => {
        if (!src || src.startsWith('http') || src.startsWith('data:')) {
            resolve({ src, status: 'skipped' });
            return;
        }
        const img = new Image();
        img.onload = () => resolve({ src, status: 'ok' });
        img.onerror = () => resolve({ src, status: 'missing' });
        img.src = src;
    });
}

async function scanCurrentPageForMissingImages() {
    playSound('wah.mp3', 0.8);
    
    const images = document.querySelectorAll('img');
    const imageCheckPromises = Array.from(images).map(img => checkImage(img.getAttribute('src')));
    
    const results = await Promise.all(imageCheckPromises);
    const missingImages = results.filter(res => res.status === 'missing');
    
    showScannerModal(missingImages);
}

function showScannerModal(missingImages) {
    // Remove existing modal if any
    const existingModal = document.getElementById('asset-scanner-modal');
    if (existingModal) {
        existingModal.remove();
    }

    const modal = document.createElement('div');
    modal.id = 'asset-scanner-modal';
    modal.className = 'scanner-modal';

    let contentHTML;
    if (missingImages.length === 0) {
        contentHTML = `
            <h4>Asset Scan Complete</h4>
            <p class="positive">WAH-HAA-HAA! No missing images found on this page!</p>
        `;
    } else {
        contentHTML = `
            <h4>Asset Scan Complete</h4>
            <p class="negative">Found ${missingImages.length} missing image(s) on this page:</p>
            <ul>
                ${missingImages.map(img => `<li><code>${img.src}</code></li>`).join('')}
            </ul>
        `;
    }

    modal.innerHTML = `
        <div class="scanner-modal-content">
            <button class="scanner-modal-close">&times;</button>
            ${contentHTML}
        </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector('.scanner-modal-close').addEventListener('click', () => {
        modal.remove();
    });
     modal.addEventListener('click', (e) => {
        if(e.target === modal) {
            modal.remove();
        }
    });
}

// --- GLOBAL EVENT LISTENERS ---
function setupCommonEventListeners() {
    // Use event delegation for various clicks to avoid race conditions
    // as elements are loaded asynchronously.
    document.body.addEventListener('click', (event) => {
        // Logo click for asset scanner
        if (event.target.closest('#waluigi-logo')) {
            scanCurrentPageForMissingImages();
        }

        // Sidebar status click for debug mode
        if (event.target.id === 'debug-toggle-btn') {
            const isDebug = localStorage.getItem('vigilanceDebugMode') === 'true';
            const newDebugState = !isDebug;
            
            localStorage.setItem('vigilanceDebugMode', String(newDebugState));
            
            playSound('confirm.mp3', 0.5);
            
            const message = `Debug Mode ${newDebugState ? 'ACTIVATED' : 'DEACTIVATED'}. Page will now reload.`;
            alert(message);
            
            window.location.reload();
        }

        // Logout button
        if (event.target.id === 'switch-operator-btn') {
            playSound('wah.mp3', 0.8);
            localStorage.removeItem('vigilanceTerminalUser');
            localStorage.removeItem('vigilanceDebugMode');
            window.location.href = 'index.html';
        }
    });

    // Init audio on the first user interaction anywhere on the page.
    document.body.addEventListener('click', () => {
        initAudio();
    }, { once: true });
}

// Run setup
setupCommonEventListeners();