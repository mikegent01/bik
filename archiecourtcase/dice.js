// dice.js - Handles the dice roll logic with sound effect

// Attempt to preload the dice sound
let diceSound;
try {
    diceSound = new Audio('/dice noise.mp3'); // Use absolute path from root
    diceSound.volume = 0.5; // Adjust volume as needed
    diceSound.load(); // Explicitly load the audio
    console.log("Dice sound preloaded.");
} catch (error) {
    console.error("Error creating or preloading dice sound:", error);
    diceSound = null; // Ensure diceSound is null if loading failed
}

/**
 * Plays the dice sound effect if available and loaded.
 */
function playDiceSound() {
    if (!diceSound) {
        console.warn("Dice sound not available or failed to load.");
        return;
    }

    // Check if the audio context needs resuming (common browser restriction)
    if (diceSound.readyState >= 2) { // HAVE_CURRENT_DATA or more
         // Reset playback position and play
        diceSound.currentTime = 0;
        const playPromise = diceSound.play();

        if (playPromise !== undefined) {
            playPromise.then(_ => {
                // Automatic playback started!
                console.log("Dice sound played.");
            }).catch(error => {
                // Auto-play was prevented
                console.warn("Dice sound failed to play:", error);
                // Attempt to play again after a user interaction might be needed
                // or inform the user that sound couldn't play.
            });
        }
    } else {
        console.warn("Dice sound not ready to play (readyState:", diceSound.readyState + ")");
        // Optionally try loading again or wait for 'canplaythrough' event
        diceSound.load();
    }
}


/**
 * Performs the d6+1 roll against a DC for evidence examination.
 * @param {number} dc - The Difficulty Check to beat.
 * @param {string} hiddenDetailsText - The text to reveal on success.
 * @param {HTMLElement} rollResultEl - The element to display the roll result message.
 * @param {HTMLElement} hiddenDetailsContentEl - The element (e.g., <p>) to display the hidden details text inside.
 * @param {HTMLElement} hiddenDetailsContainerEl - The container element (e.g., <div>) holding the hidden details, to toggle visibility.
 * @returns {boolean} - True if the roll was successful, false otherwise.
 */
export function performExaminationRoll(dc, hiddenDetailsText, rollResultEl, hiddenDetailsContentEl, hiddenDetailsContainerEl) {
    if (!rollResultEl || !hiddenDetailsContentEl || !hiddenDetailsContainerEl) {
        console.error("Missing UI elements for dice roll display.");
        return false; // Indicate failure due to missing elements
    }

    // Play dice sound
    playDiceSound();

    const roll = Math.floor(Math.random() * 6) + 1; // d6 roll
    const result = roll + 1; // Add the +1 bonus
    const successThreshold = dc; // Use the passed DC
    let success = false; // Track success state

    let outcomeMessage = `Rolling Evidence Analysis (d6+1 vs DC ${successThreshold})... Rolled ${roll} + 1 = ${result}. `;

    if (result >= successThreshold) {
        success = true;
        outcomeMessage += `<span class="success">Success! Further Analysis Unlocked!</span>`;
        // Update the content element (e.g., the <p> tag)
        hiddenDetailsContentEl.innerHTML = hiddenDetailsText;
        // Show the container div
        hiddenDetailsContainerEl.classList.add('show');
    } else {
        success = false;
        outcomeMessage += `<span class="failure">Failure. Analysis yielded no new insights.</span>`;
        // Update the content element with a failure message
        hiddenDetailsContentEl.innerHTML = `[Examination failed to reveal further details.]`;
        // Show the container div even on failure to display the message
        hiddenDetailsContainerEl.classList.add('show');
    }

    rollResultEl.innerHTML = outcomeMessage;
    return success; // Return the outcome
}

/**
 * Performs a simple d6 roll against a DC for insight checks on text elements.
 * @param {number} dc - The Difficulty Check to beat.
 * @param {string} successText - The text to display on success.
 * @param {string} failureText - The text to display on failure.
 * @param {HTMLElement} targetElement - The span element that was clicked.
 * @returns {{success: boolean, message: string}} - Object indicating success and the message to display.
 */
export function performInsightRoll(dc, successText, failureText, targetElement) {
    // Play dice sound
    playDiceSound();

    const roll = Math.floor(Math.random() * 6) + 1; // Simple d6 roll
    const success = roll >= dc;
    let message;

    if (success) {
        message = `<span class="success">(Rolled ${roll} vs DC ${dc}) ${successText}</span>`;
    } else {
        message = `<span class="failure">(Rolled ${roll} vs DC ${dc}) ${failureText}</span>`;
    }

    // Add the result message *after* the clicked element
    const resultSpan = document.createElement('span');
    resultSpan.classList.add('insight-roll-result');
    resultSpan.innerHTML = message;

    // Insert the result span immediately after the target span
    targetElement.parentNode.insertBefore(resultSpan, targetElement.nextSibling);

    // Disable the original span
    targetElement.classList.add('rolled'); // Mark as rolled (disables hover, changes style)
    targetElement.style.cursor = 'default';

    return { success, message }; // Return outcome object
}