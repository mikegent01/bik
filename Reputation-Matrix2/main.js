import { loadState } from './state.js';
import { router, renderPartyList, renderEventList, setupEventListeners } from './ui.js';

/**
 * Renders the main UI components that are present on every view.
 */
function renderCoreUI() {
    renderPartyList();
    renderEventList();
}

/**
 * Main application entry point.
 */
function main() {
    const viewContainer = document.getElementById('view-container');
    if (!viewContainer) {
        // This script is likely running on a page without the main app structure,
        // like relations.html. Exit gracefully to prevent errors.
        return;
    }

    loadState();
    renderCoreUI();
    setupEventListeners();
    router(); // Initial route call
}

main();
