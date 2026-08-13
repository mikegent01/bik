// main.js - Main script execution, event handling, state management

import { showModal, hideModal } from './modal.js';
import { performExaminationRoll, performInsightRoll } from './dice.js';
// Import consolidated data instead of config and content
import { caseData } from './data.js';

// --- Elements ---
const evidenceItems = document.querySelectorAll('.evidence-item');
const modal = document.getElementById('evidence-modal');
const modalContent = document.getElementById('modal-content-main'); // Renamed for clarity
const modalFullReportView = document.getElementById('modal-full-report-view');
const examineButton = document.getElementById('examine-button');
const readReportButton = document.getElementById('read-report-button');
const backToSummaryButton = document.getElementById('back-to-summary-button');
const rollResultArea = document.getElementById('roll-result');
const hiddenDetailsContainer = document.getElementById('hidden-details-content');
const modalHiddenDetailsContentEl = hiddenDetailsContainer?.querySelector('p');
const resetButton = document.getElementById('reset-rolls-button');
// Placeholders for dynamic content
const caseDetailsContentEl = document.getElementById('case-details-content');
const caseChargesContentEl = document.getElementById('case-charges-content');
const summaryContentEl = document.getElementById('summary-content');
const prosecutionArgumentContentEl = document.getElementById('prosecution-argument-content');
const defenseAnglesContentEl = document.getElementById('defense-angles-content');
const timelineContentEl = document.getElementById('timeline-content');
const loreContextContentEl = document.getElementById('lore-context-content');
const additionalLoreContainer = document.getElementById('additional-lore'); // Container for added lore
const mainContentArea = document.querySelector('main');

// --- State ---
let currentEvidenceId = null;
// Store examination state per item ID: 'not_examined', 'success', 'failure'
let examinationStates = {};
// Store insight roll states per roll ID: 'not_rolled', 'success', 'failure'
let insightRollStates = {};

// --- Function to Load Dynamic Content ---
function loadPageContent() {
    const { pageContent } = caseData; // Destructure from imported data

    // Load main page sections
    if (caseDetailsContentEl && pageContent["case-details-content"]) {
        caseDetailsContentEl.innerHTML = pageContent["case-details-content"];
    }
    if (caseChargesContentEl && pageContent["case-charges-content"]) {
        caseChargesContentEl.innerHTML = pageContent["case-charges-content"];
    }
    if (summaryContentEl && pageContent["summary-content"]) {
        summaryContentEl.innerHTML = pageContent["summary-content"];
    }
    if (prosecutionArgumentContentEl && pageContent["prosecution-argument-content"]) {
        prosecutionArgumentContentEl.innerHTML = pageContent["prosecution-argument-content"];
    }
    if (defenseAnglesContentEl && pageContent["defense-angles-content"]) {
        defenseAnglesContentEl.innerHTML = pageContent["defense-angles-content"];
    }
    if (timelineContentEl && pageContent["timeline-content"]) {
        timelineContentEl.innerHTML = pageContent["timeline-content"];
    }
    if (loreContextContentEl && pageContent["lore-context-content"]) {
        loreContextContentEl.innerHTML = pageContent["lore-context-content"];
    }

    // Load additional lore sections into the dedicated container
    if (additionalLoreContainer) {
        additionalLoreContainer.innerHTML = ''; // Clear existing content first
        if (pageContent["additional-lore-kamidere"]) {
            additionalLoreContainer.innerHTML += pageContent["additional-lore-kamidere"];
        }
        if (pageContent["additional-lore-cliffs"]) {
            additionalLoreContainer.innerHTML += pageContent["additional-lore-cliffs"];
        }
    }

    // Process any rollable text spans in the newly loaded main page content
    processRollableSpans(mainContentArea);

    console.log("Dynamic page content loaded and rollable spans processed.");
}

// --- Function to process and update rollable text spans based on state ---
function processRollableSpans(parentElement) {
    if (!parentElement) return;
    const spans = parentElement.querySelectorAll('.rollable-text');
    spans.forEach(span => {
        const rollId = span.dataset.rollId;
        if (!rollId) return;

        const state = insightRollStates[rollId] || 'not_rolled';

        // Always remove existing result spans to prevent duplicates
        const nextSibling = span.nextElementSibling;
        if (nextSibling && nextSibling.classList.contains('insight-roll-result')) {
            nextSibling.remove();
        }

        // Reset or apply appropriate state
        span.classList.remove('rolled', 'success', 'failure');
        span.style.cursor = 'pointer'; // Ensure cursor is pointer by default

        if (state === 'success' || state === 'failure') {
            // Recreate the result span based on saved state
            const resultSpan = document.createElement('span');
            resultSpan.classList.add('insight-roll-result');
            // Use specific success/failure text stored on the span's dataset
            const messageText = state === 'success'
                ? span.dataset.rollSuccess
                : span.dataset.rollFailure;

            resultSpan.innerHTML = `<span class="${state}">${messageText || '[Outcome details unavailable]'}</span>`;
            span.parentNode.insertBefore(resultSpan, span.nextSibling);

            // Mark as rolled
            span.classList.add('rolled');
            span.style.cursor = 'default';
        }
    });
}

// --- Reset Function ---
function resetAllStates() {
    examinationStates = {};
    insightRollStates = {};
    // Use caseData.evidence instead of EvidenceConfig
    Object.keys(caseData.evidence).forEach(id => { examinationStates[id] = 'not_examined'; });
    // Insight states are reset by clearing the object
    localStorage.removeItem('case4739_examinationStates');
    localStorage.removeItem('case4739_insightRollStates');
    console.log("Examination and Insight states reset. Reloading page...");
    location.reload();
}

// Ensure event listeners are added after DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM fully loaded, initializing...");
    init();
});

// --- Event Handlers ---

document.addEventListener('click', (event) => {
    const target = event.target;

    // Check if the clicked element is a rollable text span
    if (target.classList.contains('rollable-text') && !target.classList.contains('rolled')) {
        // Prevent default and stop propagation to avoid potential conflicts
        event.preventDefault();
        event.stopPropagation();

        // Extract roll details from the data attributes
        const rollId = target.dataset.rollId;
        const dc = parseInt(target.dataset.rollDc, 10);
        const successText = target.dataset.rollSuccess || "[Insight gained!]";
        const failureText = target.dataset.rollFailure || "[No specific insight gained.]";

        // Validate required attributes
        if (!rollId || isNaN(dc)) {
            console.warn("Invalid rollable text: missing roll ID or DC", target);
            return;
        }

        // Check if already rolled
        if (insightRollStates[rollId] === 'success' || insightRollStates[rollId] === 'failure') {
            console.log("Already rolled:", rollId);
            return;
        }

        // Perform the insight roll
        const result = performInsightRoll(dc, successText, failureText, target);

        // Update and save state
        insightRollStates[rollId] = result.success ? 'success' : 'failure';
        localStorage.setItem('case4739_insightRollStates', JSON.stringify(insightRollStates));

        // Re-process spans within the current container to update the clicked one
        // Find the closest container that might hold spans (modal body or full report view)
        // Let performInsightRoll handle the immediate update of the specific span + result
        // No need to reprocess the whole container here.
    }
});

// Listener for the examine button (Evidence Analysis)
examineButton?.addEventListener('click', () => {
    if (!currentEvidenceId || !examinationStates[currentEvidenceId] || examinationStates[currentEvidenceId] !== 'not_examined') {
        console.warn("Attempted to roll on already examined or invalid item.");
        return;
    }

    // Use caseData.evidence instead of EvidenceConfig
    const config = caseData.evidence[currentEvidenceId];
    if (!config || !modalHiddenDetailsContentEl || !rollResultArea || !hiddenDetailsContainer) {
        console.error("Missing config or modal elements for examination.");
        return;
    }

    const hiddenDetailsText = config.hiddenDetails || "[No further insights available.]";
    const dc = config.dc || 10;

    // Perform the roll - dice.js handles UI updates for roll result and details
    const success = performExaminationRoll(dc, hiddenDetailsText, rollResultArea, modalHiddenDetailsContentEl, hiddenDetailsContainer);

    // Update the state based on the outcome
    examinationStates[currentEvidenceId] = success ? 'success' : 'failure';
    localStorage.setItem('case4739_examinationStates', JSON.stringify(examinationStates));

    // Disable button after the roll attempt
    examineButton.disabled = true;

    // Process any rollable spans within the newly revealed hidden details
    processRollableSpans(hiddenDetailsContainer);
});

// Add listener for evidence items (Modal Openers)
evidenceItems.forEach(item => {
    item.addEventListener('click', () => {
        currentEvidenceId = item.id;
        // Use caseData.evidence instead of EvidenceConfig
        const config = caseData.evidence[currentEvidenceId];

        if (!config) {
            console.error(`No config found for evidence ID: ${currentEvidenceId}`);
            if (modal && document.getElementById('modal-title') && document.getElementById('modal-report-content')) {
                showModal("Error", "Evidence details could not be loaded.", currentEvidenceId);
            }
            return;
        }
        if (!modal || !examineButton || !rollResultArea || !hiddenDetailsContainer || !modalHiddenDetailsContentEl || !readReportButton || !modalContent || !modalFullReportView) {
            console.error("Cannot open modal: Critical UI elements are missing.");
            return;
        }

        const title = config.title;
        const reportHTML = config.report;
        const hiddenDetailsHTML = config.hiddenDetails || "[No further insights available.]";
        const dc = config.dc || 10;

        const currentState = examinationStates[currentEvidenceId] || 'not_examined';

        // Reset modal UI elements to default state (summary view)
        modalContent.style.display = 'block'; // Show summary/examine view
        modalFullReportView.style.display = 'none'; // Hide full report view
        modalFullReportView.innerHTML = ''; // Clear full report content
        modalFullReportView.className = 'full-report-view'; // Reset style classes

        rollResultArea.innerHTML = '';
        modalHiddenDetailsContentEl.innerHTML = '...';
        hiddenDetailsContainer.classList.remove('show');
        examineButton.disabled = false;
        readReportButton.style.display = 'none'; // Hide by default


        // Handle based on examination state
        if (currentState === 'success') {
            rollResultArea.innerHTML = `<span class="success">Analysis previously successful. DC ${dc} met.</span>`;
            modalHiddenDetailsContentEl.innerHTML = hiddenDetailsHTML;
            hiddenDetailsContainer.classList.add('show');
            examineButton.disabled = true;
            // Process spans in the now visible hidden details
            processRollableSpans(hiddenDetailsContainer);
        } else if (currentState === 'failure') {
            rollResultArea.innerHTML = `<span class="failure">Analysis previously failed. DC ${dc} not met.</span>`;
            modalHiddenDetailsContentEl.innerHTML = `[Previous examination failed to reveal further details.]`;
            hiddenDetailsContainer.classList.add('show');
            examineButton.disabled = true;
            // No hidden details to process spans in
        } else {
            // State is 'not_examined'
            rollResultArea.innerHTML = `Ready to analyze. Roll d6+1 vs DC: ${dc}`;
            hiddenDetailsContainer.classList.remove('show');
            modalHiddenDetailsContentEl.innerHTML = '...';
            examineButton.disabled = false;
        }

        // Show the "Read Full Document" button if applicable
        if (config.hasFullReport) {
            readReportButton.style.display = 'inline-block';
        } else {
            readReportButton.style.display = 'none';
        }

        // Show the modal - modal.js handles setting report innerHTML
        showModal(title, reportHTML, currentEvidenceId); // reportHTML is the summary

        // Process rollable spans within the main report summary section *after* it's shown
        const reportSection = modalContent.querySelector('#modal-report-content');
        if (reportSection) {
            processRollableSpans(reportSection);
        } else {
            console.warn("Could not find report section paragraph to process spans.");
        }
    });
});

// --- NEW: Listener for the "Read Full Document" button ---
readReportButton?.addEventListener('click', () => {
    if (!currentEvidenceId || !modalContent || !modalFullReportView) return;

    const config = caseData.evidence[currentEvidenceId];
    if (!config || !config.hasFullReport || !config.fullReportContent) {
        console.error("Cannot show full report: Missing config or content for", currentEvidenceId);
        return;
    }

    // Insert the "Back" button before adding the content
    const backButtonHTML = `<button id="back-to-summary-button" class="action-button">← Back to Summary</button>`;
    modalFullReportView.innerHTML = backButtonHTML + config.fullReportContent;

    // Re-add the event listener for the newly created back button
    const newBackButton = modalFullReportView.querySelector('#back-to-summary-button');
    newBackButton?.addEventListener('click', handleBackToSummaryClick);

    // Apply specific document styling
    modalFullReportView.className = 'full-report-view'; // Reset first
    if (config.documentStyle) {
        // FIX: Handle multiple classes separated by space
        const classes = config.documentStyle.split(' ');
        classes.forEach(cls => {
            if (cls) { // Check for empty strings resulting from multiple spaces
                modalFullReportView.classList.add(cls);
            }
        });
    }

    // Process rollable spans within the newly added full report content
    processRollableSpans(modalFullReportView);

    // Hide the summary/examine view and show the full report view
    modalContent.style.display = 'none';
    modalFullReportView.style.display = 'block';
});

// --- Centralized handler for "Back to Summary" button clicks ---
function handleBackToSummaryClick() {
    if (!modalContent || !modalFullReportView) return;

    // Hide the full report view and show the summary/examine view
    modalFullReportView.style.display = 'none';
    modalFullReportView.innerHTML = ''; // Clear content
    modalFullReportView.className = 'full-report-view'; // Reset style classes
    modalContent.style.display = 'block';

    // Re-process spans in the summary view in case state changed while reading full doc
    // (e.g., if a roll in the full doc revealed something relevant to summary)
    const reportSection = modalContent.querySelector('#modal-report-content');
    if (reportSection) {
        processRollableSpans(reportSection);
    }
    // Also re-process spans in the hidden details section if it's visible
    if (hiddenDetailsContainer.classList.contains('show')) {
        processRollableSpans(hiddenDetailsContainer);
    }
}

// --- Initial listener setup for the back button (will be replaced dynamically) ---
backToSummaryButton?.addEventListener('click', handleBackToSummaryClick);

// Add listener to modal itself for closing (backdrop click)
if (modal) {
    modal.addEventListener('click', (event) => {
        // Close only if backdrop is clicked, not content inside
        if (event.target === modal) {
            hideModalAndResetView(); // Use helper to reset view on close
        }
    });
}
// Add listener for close button
const closeButton = document.querySelector('.close-button');
if (closeButton) {
    closeButton.addEventListener('click', hideModalAndResetView); // Use helper
}

// Add listener for the reset button
resetButton?.addEventListener('click', () => {
    if (confirm("Are you sure you want to reset all examination and insight roll progress? This action cannot be undone.")) {
        resetAllStates();
    }
});

// --- Helper function to hide modal and reset view ---
function hideModalAndResetView() {
    if (modalContent && modalFullReportView) {
        // Ensure summary view is visible and full report is hidden/cleared on close
        modalFullReportView.style.display = 'none';
        modalFullReportView.innerHTML = '';
        modalFullReportView.className = 'full-report-view';
        modalContent.style.display = 'block';
    }
    hideModal(); // Call original hideModal function
}

// Add debugging access
window.debugResetStates = resetAllStates;
console.log("Run `debugResetStates()` in console to clear ALL saved roll progress and reload.");

// --- Initialisation ---
function init() {
    console.log("Defense Brief Interface Initialized.");

    // 1. Load saved states first
    // Load Examination States
    const savedExamStates = localStorage.getItem('case4739_examinationStates');
    if (savedExamStates) {
        try {
            examinationStates = JSON.parse(savedExamStates);
        } catch (e) {
            console.error("Error parsing saved examination states, resetting.", e);
            examinationStates = {};
        }
    }
    // Load Insight Roll States
    const savedInsightStates = localStorage.getItem('case4739_insightRollStates');
    if (savedInsightStates) {
        try {
            insightRollStates = JSON.parse(savedInsightStates);
        } catch (e) {
            console.error("Error parsing saved insight roll states, resetting.", e);
            insightRollStates = {};
        }
    }

    // Initialize default states for any items/rolls not found in saved data
    // Use caseData.evidence instead of EvidenceConfig
    Object.keys(caseData.evidence).forEach(id => {
        if (!examinationStates[id]) {
            examinationStates[id] = 'not_examined';
        }
    });
    // Note: Insight roll states are initialized dynamically when content is processed

    console.log("Initial examination states:", examinationStates);
    console.log("Initial insight roll states:", insightRollStates);

    // 2. Load dynamic page content (which includes initial processing of rollable spans)
    loadPageContent();
}

// Function to reload JSON data dynamically
async function reloadJSONData() {
    try {
        // Force reload of data.js module
        const freshModule = await import(`./data.js?reload=${Date.now()}`);
        
        // Update global caseData with fresh import
        window.caseData = freshModule.caseData;
        
        // Re-run content loading
        loadPageContent();
        
        // Optional: Reset roll states
        examinationStates = {};
        insightRollStates = {};
        
        console.log("JSON Data Reloaded Successfully");
        alert("JSON Data Reloaded Successfully");
    } catch (error) {
        console.error("Error reloading JSON:", error);
        alert("Failed to reload JSON data. Check console for details.");
    }
}

// Add event listener for reload button
document.getElementById('reload-json-button')?.addEventListener('click', reloadJSONData);