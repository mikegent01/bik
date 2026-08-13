// modal.js - Handles showing, hiding, and content setup of the modal

// --- DOM Elements ---
const modal = document.getElementById('evidence-modal');
const modalTitle = document.getElementById('modal-title');
const modalReportContent = document.getElementById('modal-report-content');

// --- Modal Functions ---

/**
 * Shows the modal with the specified content.
 * @param {string} title - The title for the modal.
 * @param {string} report - The main report text (can contain HTML).
 * @param {string} evidenceId - The ID of the evidence item being shown.
 */
export function showModal(title, report, evidenceId) {
    if (!modal || !modalTitle || !modalReportContent) return;

    modalTitle.textContent = title;
    modalReportContent.innerHTML = report;

    modal.classList.add('show');
}

/**
 * Hides the modal.
 */
export function hideModal() {
    if (!modal) return;
    modal.classList.remove('show');
}

// Note: Event listeners for closing (X button, outside click) are now in main.js
// to keep modal.js focused on content manipulation and showing/hiding state.