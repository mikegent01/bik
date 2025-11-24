
// toads_event.js - Mission Overview Renderer

const TACTICAL_LOGS = [
    {
        time: "DAY 20 17:00",
        type: "normal",
        text: "Bones successfully infiltrates Imperial Processing Facility disguised as a Legionnaire. Transmitting intel on industrial operations."
    },
    {
        time: "DAY 20 16:45",
        type: "critical",
        text: "Ryan confirmed alive. Taken in by Rakasha spirit-walker Koda. Location: Rakasha Camp (Wilderlands)."
    },
    {
        time: "DAY 20 16:30",
        type: "critical",
        text: "THE VIGILANCE HAS FALLEN. Iron Legion boarding party successful. Airship captured. Ryan forced to jump to avoid capture."
    },
    {
        time: "DAY 20 14:15",
        type: "danger",
        text: "Archie Miser escapes Cohort custody via 'Third Eye' interdimensional travel. Cohort containment shattered."
    },
    {
        time: "DAY 20 07:30",
        type: "critical",
        text: "THE BARGAIN: Oracle offers healing for Eager in exchange for purging three demons. Party chooses to aid allies outside first. Marching on Greenhouse."
    },
    {
        time: "DAY 20 07:15",
        type: "normal",
        text: "Archie Miser returned from unknown dimension. Claims to have ticket for 'Smoken Al'. Asset secured."
    },
    {
        time: "DAY 20 07:00",
        type: "critical",
        text: "Ghost ambush in Piano Room. 'Just Desserts' performance. Bowser confirmed able to punch ghosts. Humpik headbutt effective."
    },
    {
        time: "DAY 20 06:30",
        type: "danger",
        text: "Roof collapse. Toadburt fell, rescued by Humpik. Party forced back inside Manor."
    },
    {
        time: "DAY 20 06:00",
        type: "critical",
        text: "Mirror Stalker incident. Subject Green T pulled into reflection. Status: LOST. Bowser engaged entity."
    },
    {
        time: "DAY 19 07:10",
        type: "danger",
        text: "Bowser, Waluigi, and Hjumpik trapped inside Manor. Engaging Mirror-Entity. Structural integrity of West Wing failing."
    },
    {
        time: "DAY 19 06:55",
        type: "critical",
        text: "CONTAINMENT BREACH. A 'Monstrosity of Glass' has emerged from a shattered mirror within the manor. Subject 'Green T' pulled into mirror dimension. Status: LOST."
    },
    {
        time: "DAY 19 06:45",
        type: "critical",
        text: "SURRENDER CONFIRMED. Archie Miser taken into custody by Speaker L. Reason: To buy time for allies."
    }
];

const ASSETS = [
    { name: "Archie Miser", status: "ESCAPED", class: "status-deployed", icon: "portraits/archie.png" },
    { name: "Vigilance", status: "CAPTURED", class: "status-captured", icon: "newspaper_airship.png" },
    { name: "Ryan", status: "MIA (SAFE)", class: "status-warning", icon: "toads/ryan.png" },
    { name: "Bones", status: "UNDERCOVER", class: "status-scheming", icon: "toads/bones.png" },
    { name: "Green T", status: "LOST IN MIRROR", class: "status-mia", icon: "portraits/green_t.png" },
    { name: "Speaker L", status: "CAPTURED", class: "status-captured", icon: "toads/toad_lee.png" },
    { name: "Embercap", status: "ASSAULTING", class: "status-combat", icon: "toads/embercap.png" },
    { name: "Bowser", status: "REGROUPING", class: "status-warning", icon: "portraits/bowser.png" },
    { name: "Waluigi", status: "WATCHING", class: "status-scheming", icon: "portraits/waluigi.png" },
    { name: "Markop", status: "REGROUPING", class: "status-warning", icon: "portraits/markop.png" }
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
