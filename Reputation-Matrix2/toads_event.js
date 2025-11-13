
// toads_event.js - Mission Overview Renderer

const TACTICAL_LOGS = [
    {
        time: "06:00",
        type: "normal",
        text: "Pond Patrol, led by Speaker L, establishes containment perimeter around Raventree Manor. Heavy rain reported."
    },
    {
        time: "06:15",
        type: "normal",
        text: "Speaker L initiates 'March of the Mandate.' Loudspeakers broadcast demand for Archie Miser's surrender. Drums audible from 2km."
    },
    {
        time: "06:30",
        type: "critical",
        text: "Manor defenses activated. Supernatural energy spike detected. Spectral wraiths manifesting in the courtyard. Cohort forces engaging."
    },
    {
        time: "06:42",
        type: "normal",
        text: "Visual confirmation: Archie Miser cauterizes ally Eager's wound. Subject appears erratic."
    },
    {
        time: "06:45",
        type: "critical",
        text: "SURRENDER CONFIRMED. Archie Miser taken into custody by Speaker L. Reason: To buy time for allies."
    },
    {
        time: "06:55",
        type: "critical",
        text: "CONTAINMENT BREACH. A 'Monstrosity of Glass' has emerged from a shattered mirror within the manor. Subject 'Green T' pulled into mirror dimension. Status: LOST."
    },
    {
        time: "07:10",
        type: "danger",
        text: "Bowser, Waluigi, and Hjumpik trapped inside Manor. Engaging Mirror-Entity. Structural integrity of West Wing failing."
    },
    {
        time: "NOW",
        type: "normal",
        text: "Standoff ongoing. Cohort holding perimeter. Inside team fighting for survival."
    }
];

const ASSETS = [
    { name: "Archie Miser", status: "CAPTURED", class: "status-captured", icon: "portraits/archie.png" },
    { name: "Speaker L", status: "COMMAND", class: "status-deployed", icon: "toads/toad_lee.png" },
    { name: "Bowser", status: "TRAPPED", class: "status-danger", icon: "portraits/bowser.png" },
    { name: "Green T", status: "M.I.A.", class: "status-mia", icon: "portraits/green_t.png" },
    { name: "Waluigi", status: "TRAPPED", class: "status-danger", icon: "portraits/waluigi.png" },
    { name: "Hjumpik", status: "TRAPPED", class: "status-danger", icon: "portraits/humpik.png" },
    { name: "Markop", status: "ENGAGED", class: "status-combat", icon: "portraits/markop.png" },
    { name: "Remi (FNG)", status: "DISORIENTED", class: "status-danger", icon: "portraits/remi.png" }
];

function renderLog() {
    const container = document.getElementById('tactical-log-feed');
    if (!container) return;

    let html = '';
    TACTICAL_LOGS.forEach(log => {
        html += `
            <div class="log-entry log-${log.type}">
                <span class="log-timestamp">[${log.time}]</span>
                <span class="log-text">${log.text}</span>
            </div>
        `;
    });
    container.innerHTML = html;
}

function renderAssets() {
    const container = document.getElementById('asset-grid');
    if (!container) return;

    let html = '';
    ASSETS.forEach(asset => {
        html += `
            <div class="asset-card">
                <div class="asset-icon"><img src="${asset.icon}" alt="${asset.name}"></div>
                <div class="asset-info">
                    <h4>${asset.name}</h4>
                    <span class="status-tag ${asset.class}">${asset.status}</span>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function init() {
    renderLog();
    renderAssets();
}

document.addEventListener('DOMContentLoaded', init);
