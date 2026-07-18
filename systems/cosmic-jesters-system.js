// This module handles the unique Chaos Index display for the Cosmic Jesters.
import { LORE_DATA } from '../lore.js';
import { getIntelForFaction } from './common.js';
import { playSound } from '../common.js';
import { state } from '../state.js';

/**
 * Renders the HTML structure for the Chaos Index.
 * @returns {string} HTML for the system.
 */
export function renderCosmicJestersSystem() {
    return `
        <p class="system-description">To measure the Jesters is to measure madness. Their "influence" is a fiction, their "goals" a paradox. This display attempts to quantify the current level of cosmic absurdity. It is not guaranteed to be accurate, or even sensical. Try interacting with it... if you dare.</p>
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
            playSound('wah.mp3');
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
    
    const outcomes = ["Probability: Mauve", "42%", "Error: Success!", "Cheese Found", "The Punchline Approaches", "WAAH!"];
    const intervalId = setInterval(() => {
        if (!document.body.contains(display)) {
            clearInterval(intervalId);
            return;
        }
        const randomIndex = Math.floor(Math.random() * outcomes.length);
        const randomColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        display.textContent = outcomes[randomIndex];
        display.style.color = randomColor;
        display.style.textShadow = `0 0 10px ${randomColor}`;
    }, 1500);

    display.addEventListener('click', () => {
        playSound('click.mp3');
        triggerCosmicEvent();
    });
}