// Manages all common, shared functionality for the application.

// --- AUDIO ---
let audioContext = null;
let audioInitialized = false;
const audioBuffers = {};
const failedSounds = new Set();
// Run this in browser console to check if image exists
async function testImage(path) {

}

// Test the specific image
testImage('portraits/speaker_l.png');

// Also try variations
testImage('portraits/Speaker_L.png');
testImage('portraits/speaker_L.png');
testImage('portraits/speaker_l.PNG');
testImage('Portraits/speaker_l.png');
export function initAudio() {
    if (audioInitialized) return;
    audioInitialized = true;
    
    try {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        console.log('[Audio] AudioContext initialized');
        
        // Preload sounds - don't await, let them load in background
        preloadSound('click.mp3');
        preloadSound('wah.mp3');
        preloadSound('confirm.mp3');
    } catch (e) {
        console.warn('[Audio] Web Audio API not supported:', e.message);
        audioContext = null;
    }
}

async function preloadSound(filename) {
    if (!audioContext || audioBuffers[filename] || failedSounds.has(filename)) return;
    
    try {
        const response = await fetch('Reputation-Matrix2/assets/audio/ui/' + filename);
        
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        
        const arrayBuffer = await response.arrayBuffer();
        const buffer = await audioContext.decodeAudioData(arrayBuffer);
        audioBuffers[filename] = buffer;
        console.log(`[Audio] Loaded: ${filename}`);
    } catch (e) {
        // Only log once per sound file
        if (!failedSounds.has(filename)) {
            failedSounds.add(filename);
            console.warn(`[Audio] Could not load "${filename}": ${e.message}`);
            console.warn(`[Audio] Make sure the file exists in the same directory as your HTML file`);
        }
    }
}

export function playSound(filename, volume = 0.7) {
    // Don't try to play if audio isn't set up
    if (!audioContext) return;
    
    // If sound isn't loaded yet, try to load it
    if (!audioBuffers[filename]) {
        // Don't retry failed sounds
        if (failedSounds.has(filename)) return;
        
        // Try to load and play async
        preloadSound(filename).then(() => {
            if (audioBuffers[filename]) {
                playBufferedSound(filename, volume);
            }
        });
        return;
    }
    
    playBufferedSound(filename, volume);
}

function playBufferedSound(filename, volume) {
    try {
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffers[filename];
        
        const gainNode = audioContext.createGain();
        gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
        
        source.connect(gainNode).connect(audioContext.destination);
        source.start(0);
    } catch (e) {
        console.warn(`[Audio] Error playing ${filename}:`, e.message);
    }
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
    
    // Add inline styles in case CSS isn't loaded
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 10000;
    `;

    let contentHTML;
    if (missingImages.length === 0) {
        contentHTML = `
            <h4 style="margin: 0 0 16px 0; color: #2ecc71;">✅ Asset Scan Complete</h4>
            <p style="color: #2ecc71; margin: 0;">WAH-HAA-HAA! No missing images found on this page!</p>
        `;
    } else {
        contentHTML = `
            <h4 style="margin: 0 0 16px 0; color: #e74c3c;">⚠️ Asset Scan Complete</h4>
            <p style="color: #e74c3c; margin-bottom: 12px;">Found ${missingImages.length} missing image(s):</p>
            <ul style="list-style: none; padding: 0; margin: 0; max-height: 300px; overflow-y: auto;">
                ${missingImages.map(img => `<li style="margin-bottom: 8px; font-size: 0.9em;"><code style="background: #333; padding: 4px 8px; border-radius: 4px; word-break: break-all;">${img.src}</code></li>`).join('')}
            </ul>
        `;
    }

    modal.innerHTML = `
        <div style="background: #1a1a2e; border: 1px solid #333; border-radius: 12px; padding: 24px; max-width: 500px; max-height: 80vh; overflow: auto; position: relative;">
            <button style="position: absolute; top: 12px; right: 12px; background: none; border: none; color: #888; font-size: 24px; cursor: pointer; line-height: 1;">&times;</button>
            ${contentHTML}
        </div>
    `;

    document.body.appendChild(modal);

    // Close handlers
    modal.querySelector('button').addEventListener('click', () => modal.remove());
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.remove();
    });
}

// --- GLOBAL EVENT LISTENERS ---
function setupCommonEventListeners() {
    document.body.addEventListener('click', (event) => {
        // Logo click for asset scanner
        if (event.target.closest('#waluigi-logo')) {
            scanCurrentPageForMissingImages();
        }

        // Debug toggle
        if (event.target.id === 'debug-toggle-btn') {
            const isDebug = localStorage.getItem('vigilanceDebugMode') === 'true';
            const newDebugState = !isDebug;
            
            localStorage.setItem('vigilanceDebugMode', String(newDebugState));
            window.debugMode = newDebugState;
            
            playSound('confirm.mp3', 0.5);
            
            alert(`Debug Mode ${newDebugState ? 'ACTIVATED' : 'DEACTIVATED'}. Page will now reload.`);
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

    // Init audio on first user interaction
    document.body.addEventListener('click', () => initAudio(), { once: true });
    document.body.addEventListener('keydown', () => initAudio(), { once: true });
}

// Run setup immediately
setupCommonEventListeners();

// Also try to init audio right away (may fail until user interaction)
try {
    initAudio();
} catch (e) {
    // Will be initialized on first click
}

console.log('[Common] Module loaded');