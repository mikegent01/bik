
// This module handles the unique Chaos Index display for the Cosmic Jesters.
import { LORE_DATA } from '../core/lore.js';
import { getIntelForFaction } from '../core/common.js';
import { playSound } from '../core/common.js';
import { state } from '../core/state.js';
import { calculateGlobalCycle } from '../../data/support/research-data.js';
import { WAHBOOK_POSTS } from '../../data/assembly/assembly-data.js';

/**
 * Renders the HTML structure for the Chaos Index.
 * @returns {string} HTML for the system.
 */
export function renderCosmicJestersSystem() {
    return `
        <p class="system-description">To measure the Jesters is to measure madness. Their "influence" is a fiction, their "goals" a paradox. This display attempts to quantify the current level of cosmic absurdity based on the world's instability. It is not guaranteed to be accurate, or even sensical. Try interacting with it... if you dare.</p>
        <div class="system-content chaos-system">
             <div id="chaos-index-display" title="Click to tempt fate">Calculating...</div>
        </div>
    `;
}

/**
 * Triggers a random cosmic event based on intel level.
 */
function triggerCosmicEvent() {
    const intel = getIntelForFaction('cosmic_jesters');
    const possibleEvents = LORE_DATA.faction_details.cosmic_jesters.events.filter(e => intel >= e.intel_min);
    if (possibleEvents.length === 0) return;

    const event = possibleEvents[Math.floor(Math.random() * possibleEvents.length)];

    switch (event.event_type) {
        case 'color_shift':
            const allElements = document.querySelectorAll('*');
            const randomElement = allElements[Math.floor(Math.random() * allElements.length)];
            const originalColor = randomElement.style.color;
            randomElement.style.transition = 'color 0.2s ease-in-out';
            randomElement.style.color = `hsl(${Math.random() * 360}, 100%, 70%)`;
            setTimeout(() => {
                randomElement.style.color = originalColor;
            }, 2000);
            break;
        case 'wah_flash':
            const flash = document.createElement('div');
            flash.className = 'cosmic-event-flash';
            document.body.appendChild(flash);
            setTimeout(() => flash.remove(), 500);
            break;
        case 'invert_screen':
            document.body.classList.add('cosmic-event-invert');
            setTimeout(() => document.body.classList.remove('cosmic-event-invert'), 3000);
            break;
        case 'random_sound':
            playSound('../../assets/audio/ui/wah.mp3');
            break;
        default: // glitch_text
             document.body.classList.add('cosmic-event-glitch');
            setTimeout(() => document.body.classList.remove('cosmic-event-glitch'), 1000);
            break;
    }
}


/**
 * Initializes the interval to update the Chaos Index display with random, chaotic text.
 */
export function initCosmicJestersSystem() {
    const display = document.getElementById('chaos-index-display');
    if (!display) return;
    
    const globalCycle = calculateGlobalCycle(WAHBOOK_POSTS);
    const momentum = Math.abs(globalCycle.momentum);
    const phaseId = globalCycle.phase.id;

    // Determine base chaos level
    let baseChaos = momentum * 5; 
    if (phaseId === 'crisis' || phaseId === 'conflict') baseChaos += 50;
    else if (phaseId === 'calm') baseChaos -= 20;
    
    baseChaos = Math.max(1, Math.min(100, baseChaos));

    const chaoticOutcomes = [
        "Probability: Mauve", 
        "Error: Success!", 
        "Cheese Found", 
        "The Punchline Approaches", 
        "WAAH!", 
        "Reality: Buffer Overflow",
        "Honk Honk",
        "404: Logic Not Found"
    ];

    const stableOutcomes = [
        "Chaos: Low",
        "Boring...",
        "Reality: Stable",
        "Waiting for the Joke",
        "Entropy: 12%"
    ];

    const intervalSpeed = Math.max(100, 1500 - (baseChaos * 10)); // Faster updates for higher chaos

    const intervalId = setInterval(() => {
        if (!document.body.contains(display)) {
            clearInterval(intervalId);
            return;
        }
        
        const outcomes = baseChaos > 40 ? chaoticOutcomes : stableOutcomes;
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        
        // Color reflects chaos level (Blue -> Red/Rainbow)
        let color;
        if (baseChaos > 70) {
             color = `hsl(${Math.random() * 360}, 100%, 70%)`; // Rainbow
        } else if (baseChaos > 40) {
             color = '#f85149'; // Red
        } else {
             color = '#58a6ff'; // Blue
        }

        let text = outcomes[randomIndex];
        if (baseChaos > 50) text += ` (${Math.round(baseChaos)}%)`;

        display.textContent = text;
        display.style.color = color;
        display.style.textShadow = `0 0 ${baseChaos / 5}px ${color}`;
        
        // Shake effect for high chaos
        if (baseChaos > 60) {
            display.style.transform = `translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`;
        } else {
            display.style.transform = 'none';
        }

    }, intervalSpeed);

    display.addEventListener('click', () => {
        playSound('../../assets/audio/ui/click.mp3');
        triggerCosmicEvent();
    });
}
