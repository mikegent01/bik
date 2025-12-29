// ===============================================
// LOCATION DATABASE - VIGILANCE TERMINAL V2.1
// STATUS: PLANAR FRACTURE DETECTED
// DATE: DAY 22, 1040 BF
// ===============================================

const LOCATIONS = {

    // ===============================================
    // ROOT: RAVENTREE MANOR (THE FRACTURE)
    // ===============================================
    raventree_manor: {
        id: 'raventree_manor',
        name: "Raventree Manor (Fractured)",
        parent: null,
        type: 'dimensional_nexus',
        status: 'critical_failure',
        statusClass: 'status-hostile',
        dangerLevel: 'catastrophic',
        dangerClass: 'danger-extreme',
        
        description: `<p><strong>WARNING: GEOMETRY UNSTABLE.</strong></p>
        <p>Following the catastrophic failure of the Synchronization Rite on Day 21, Raventree Manor no longer exists as a singular physical entity. It has shattered into three distinct "Shards" of reality, anchored loosely to the physical ruins.</p>
        <p>The <strong>Physical Manor</strong> is currently under martial law by the Iron Legion. The <strong>Shadowfell Reflection</strong> is hosting a vampire gala. The <strong>Feywild Echo</strong> has exploded into a jungle. The <strong>Void</strong> between them threatens to consume all three.</p>
        <p>The party is scattered. Communication between Shards is impossible without specific artifacts. The "House" is no longer a shelter; it is a puzzle box of dimensions that must be solved before it implodes.</p>`,

        features: [
            { name: "The Physical Shell", description: "The material ruins. Occupied by Agent Malissia and the Iron Legion. Secure, sterile, and heavily guarded.", type: "feature-tech" },
            { name: "The Shadow Shard", description: "Accessible via mirrors or deep shadows. A monochrome, frozen version of the estate ruled by the Onyx Hand.", type: "feature-magic" },
            { name: "The Wild Shard", description: "Accessible via the attic or overgrown paths. A hyper-evolved Fey jungle consuming the upper floors.", type: "feature-danger" },
            { name: "The Void Breach", description: "The ritual chamber itself has fallen out of reality. It exists only in the Deep Mirror.", type: "feature-temporal" }
        ],

        history: `<p>For centuries, Raventree stood as a monument to noble decay. On Day 21, 1040 BF, the Oracle attempted to synchronize the manor's timelines to align with the "Deep Layers."</p>
        <p>The ritual failed due to the absence of the 13th Witness (Green T) and Archie Miser's unstable magic. The resulting backlash did not destroy the manor—it unzipped it. The timeline has not just bled; it has been vivisected.</p>`,

        currentState: "PLANAR FRACTURE ACTIVE. Reality integrity at 14%. The Iron Legion is attempting to stabilize the physical shell while Toadburt acts as a planar probe. Green T is confirmed lost to the Shadow Shard.",
        stateClass: "state-danger",

        connectedLocations: [
            { id: 'shadowfell_estate', name: 'Shadowfell Estate', direction: 'Planar Shift', status: 'hostile' },
            { id: 'feywild_attic', name: 'Feywild Attic', direction: 'Planar Shift', status: 'dangerous' },
            { id: 'silent_grove', name: 'Silent Grove', direction: 'Physical', status: 'cleared' },
            { id: 'solarium', name: 'The Solarium', direction: 'Interior', status: 'dangerous' }
        ],

        notableEvents: [
            { name: "The Shattered Ritual", date: "Day 21", type: "magic", description: "Ritual failure. Planar separation. Party scattered." },
            { name: "Iron Mandate Enforcement", date: "Day 21", type: "military", description: "Legion seizes physical grounds. Order 120 declared." }
        ]
    },

    // ===============================================
    // SHADOWFELL ESTATE (ARCHIE & BOWSER)
    // ===============================================
    shadowfell_estate: {
        id: 'shadowfell_estate',
        name: "The Shadow Estate",
        parent: 'raventree_manor',
        type: 'planar_shard',
        status: 'hostile_diplomatic',
        statusClass: 'status-warning',
        dangerLevel: 'extreme',
        dangerClass: 'danger-high',
        
        description: `<p>A colorless, frozen reflection of the Manor existing in the Shadowfell. Here, the sky is a bruised violet, the stone is bone-white, and the roses weep gray dust. The physics of this plane are inverted: Fire magic produces no heat, only blinding light and concussive force.</p>
        <p>This domain is ruled by <strong>Orangus Cornelius</strong>, a Vampiric Ape Lord of the Onyx Hand. He is currently hosting a formal dinner party. Archie Miser and Bowser are present as "guests," alongside the captive Green T.</p>
        <p>Violence here is a breach of etiquette, and etiquette is the only law that matters. Survival requires social maneuvering, not just brute strength.</p>`,

        features: [
            { name: "The Gray Banquet", description: "A never-ending dinner party attended by vampires, ghouls, and thralls. The food is ash; the wine is blood.", type: "feature-social" },
            { name: "Inverted Physics", description: "Fire spells deal Force/Radiant damage but create no heat. Cold spells heal the undead. Light is solid.", type: "feature-magic" },
            { name: "Cornelius's Throne", description: "A massive chair of woven bone where the Vampiric Kong holds court. Green T is chained to the leg.", type: "feature-danger" },
            { name: "The Weeping Garden", description: "Roses that drain color from anything they touch. Used as a perimeter defense.", type: "feature-danger" }
        ],

        history: `<p>When the ritual shattered, this shard was claimed by the Onyx Hand. It serves as a "neutral" ground for the undead aristocracy of the region, protected from the Regal Empire's sun.</p>
        <p>Archie and Bowser were deposited here by the portal malfunction. Their arrival interrupted the first course.</p>`,

        currentState: "ACTIVE DIPLOMATIC INCIDENT. Archie is bluffing as the 'Vizier of the Sun.' Bowser is eating the furniture. Green T is alive but terrified.",
        stateClass: "state-warning",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Physical Ruins', direction: 'Portal (Unstable)', status: 'sealed' },
            { id: 'mirror_dimension', name: 'Mirror Dimension', direction: 'Reflections', status: 'dangerous' }
        ],

        notableEvents: [
            { name: "Dinner with the Damned", date: "Day 21", type: "social", description: "Archie and Bowser infiltrate the vampire gala." }
        ]
    },

    // ===============================================
    // FEYWILD ATTIC (WALUIGI & TOAD LEE)
    // ===============================================
    feywild_attic: {
        id: 'feywild_attic',
        name: "The Overgrown Attic",
        parent: 'raventree_manor',
        type: 'planar_shard',
        status: 'wild',
        statusClass: 'status-dangerous',
        dangerLevel: 'high',
        dangerClass: 'danger-high',
        
        description: `<p>The upper floors of the manor have exploded into a hyper-vibrant Feywild jungle. The roof is gone, replaced by a twilight sky of swirling oranges and purples. Oak trees grow from floorboards, and furniture has become animate and feral.</p>
        <p>Waluigi and Toad Lee are trapped here. The area is guarded by a <strong>Giant Butterfly</strong> (The Monarch) protecting a massive hoard of gold and gems. The goblin staff have unionized to survive the flora.</p>
        <p>Toadburt has entered this shard wearing an <strong>Entropy Ring</strong>—a magical bomb strapped to his finger by the Iron Legion. He has 72 hours to capture the Oracle or he detonates.</p>`,

        features: [
            { name: "The Butterfly's Hoard", description: "A mountain of gold, gems, and magical curios guarded by a house-sized insect. Waluigi is currently attempting to loot it.", type: "feature-treasure" },
            { name: "Unionized Goblins", description: "The manor's goblin staff have formed 'Local 404' and are refusing to fight adventurers, preferring to trade snacks for safety.", type: "feature-social" },
            { name: "Hyper-Growth", description: "Plants grow fast enough to crush bone. Vines react to movement. The floor is treacherous.", type: "feature-danger" },
            { name: "The Sleeper Agent", description: "Toadburt is here. He is terrified, dangerous, and ticking.", type: "feature-tech" }
        ],

        history: `<p>The explosion of magic from the ritual tore the roof off the reality of the manor, merging it with the Feywild's eternal forest. Time here is loose; minutes can be hours.</p>`,

        currentState: "CHAOTIC LOOTING IN PROGRESS. Waluigi is engaging mega-fauna. Toad Lee is attempting to establish a perimeter. Toadburt is closing in.",
        stateClass: "state-danger",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Physical Ruins', direction: 'Down (One Way)', status: 'sealed' }
        ],

        notableEvents: [
            { name: "The Butterfly Heist", date: "Day 21", type: "exploration", description: "Waluigi attempts to ride the Giant Butterfly." },
            { name: "Project Sleeper Deployment", date: "Day 21", type: "military", description: "Toadburt deployed by Legion with Entropy Ring." }
        ]
    },

    // ===============================================
    // SILENT GROVE (CLEARED)
    // ===============================================
    silent_grove: {
        id: 'silent_grove',
        name: "The Silent Grove",
        parent: 'raventree_manor',
        type: 'outdoor_area',
        status: 'cleared',
        statusClass: 'status-cleared',
        dangerLevel: 'low',
        dangerClass: 'danger-low',
        
        description: `<p>The one stabilized zone in the entire complex. Once the lair of the Arachnid Matriarch, it was purged on Day 21 by the combined efforts of Markop (Titan Form), Remi, and Salem.</p>
        <p>The webs hang in tatters. The spider corpses are beginning to dissolve into ectoplasm. At the center lies the <strong>Oracle's Banishment Circle</strong>, a scorched geometric scar on the earth that still thrums with residual banishment magic.</p>
        <p>This area currently serves as the only safe forward operating base (FOB) for the scattered Toad Squad, though it is dangerously close to the Legion's perimeter.</p>`,

        features: [
            { name: "Banishment Crater", description: "Where the Matriarch was erased. The residue here repels other supernatural entities.", type: "feature-magic" },
            { name: "Loot Piles", description: "Remnants of the spider's hoard not yet carried off. Mostly rusted armor and drained potions.", type: "feature-cleared" },
            { name: "Toad Squad Camp", description: "A makeshift triage center where Eager was stabilized before being lost again in the fracture.", type: "" }
        ],

        history: `<p>Cleared Day 21, 00:00. The battle saw the first usage of the 'Titan' blessing on Markop and the destruction of FNG Remi's mechanical hound.</p>`,

        currentState: "SECURE. Ambient magical radiation is high but non-hostile. Useful for resting or crafting.",
        stateClass: "state-safe",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Physical Ruins', direction: 'North', status: 'hostile' },
            { id: 'fountain_district', name: 'Fountain District', direction: 'East', status: 'unexplored' }
        ],

        notableEvents: [
            { name: "The Titan Protocol", date: "Day 20", type: "combat", description: "Markop grows to 50ft to wrestle the Matriarch." },
            { name: "The Purge", date: "Day 21", type: "combat", description: "Matriarch banished. Eager rescued (temporarily)." }
        ]
    },

    // ===============================================
    // SOLARIUM (THE BREACH)
    // ===============================================
    solarium: {
        id: 'solarium',
        name: "The Solarium",
        parent: 'raventree_manor',
        type: 'interior',
        status: 'breached',
        statusClass: 'status-dangerous',
        dangerLevel: 'critical',
        dangerClass: 'danger-high',
        
        description: `<p>A shattered glass conservatory that serves as the primary wound in the manor's reality. This is where Humpik was pulled into the Mirror Dimension, and where the Shard Stalker was first encountered.</p>
        <p>The mirrors here do not reflect the room; they show the <strong>Deep Void</strong>. Shards of glass float in mid-air, suspended by gravity anomalies. The air tastes like copper and static.</p>
        <p>This location is the most likely entry point to finding Markop and the Oracle, who are trapped in the Void between shards.</p>`,

        features: [
            { name: "Floating Shards", description: " razor-sharp mirror fragments orbiting a central singularity. Touching them causes cuts that bleed mana, not blood.", type: "feature-danger" },
            { name: "The Void Window", description: "The central mirror frame contains no glass, only a view into absolute nothingness.", type: "feature-magic" },
            { name: "Humpik's Anchor", description: "A climbing piton driven into the floor where Humpik tethered himself before being dragged through.", type: "" }
        ],

        history: `<p>Site of the "Shard Stalker" incident. Humpik fought his doppelganger here and spared it, a decision that weakened the ritual's integrity.</p>`,

        currentState: "DIMENSIONAL LEAK. Gravity is subjective. Proceed with extreme caution.",
        stateClass: "state-danger",

        connectedLocations: [
            { id: 'mirror_dimension', name: 'The Void / Deep Mirror', direction: 'Enter', status: 'unknown' },
            { id: 'dance_hall', name: 'Dance Hall', direction: 'West', status: 'hostile' }
        ],

        notableEvents: [
            { name: "Humpik's Choice", date: "Day 21", type: "encounter", description: "Humpik spares the Mirror Terror, preserving the curse." }
        ]
    },

    // ===============================================
    // FOUNTAIN DISTRICT
    // ===============================================
    fountain_district: {
        id: 'fountain_district',
        name: "Fountain District",
        parent: 'silent_grove',
        type: 'outdoor_area',
        status: 'unexplored',
        statusClass: 'status-unexplored',
        dangerLevel: 'unknown',
        dangerClass: 'danger-unknown',
        
        description: `<p>A flooded, pitch-black section of the gardens located east of the Silent Grove. Toad Squad Alpha navigated through this area during the flank maneuver but reported "something watching from the water."</p>
        <p>The darkness here is magical; torches shed light for only 5 feet. The water is stagnant, oily, and cold. Statues of weeping maidens line the pathways, their faces eroded or deliberately smashed.</p>
        <p>With the manor fractured, this area may have flooded with more than just water—it may be leaking fluid from the Shadowfell.</p>`,

        features: [
            { name: "Oily Water", description: "Knee-deep floodwaters. Difficult terrain. Contains unseen hazards.", type: "feature-danger" },
            { name: "The Weeping Statues", description: "They appear to move when not observed. Classic Weeping Angel protocols advised.", type: "feature-magic" },
            { name: "The Darkness", description: "Suppresses non-magical light. Inflicts disadvantage on Perception checks.", type: "feature-magic" }
        ],

        currentState: "UNEXPLORED. Squad Alpha bypassed this area rapidly. Hostiles unknown.",
        stateClass: "state-unknown",

        connectedLocations: [
            { id: 'silent_grove', name: 'Silent Grove', direction: 'West', status: 'cleared' },
            { id: 'unknown_left', name: '???', direction: 'North', status: 'unexplored' }
        ],

        notableEvents: []
    },

    // ===============================================
    // UPPER HOUSE (SEALED)
    // ===============================================
    upper_house: {
        id: 'upper_house',
        name: "The Upper House",
        parent: 'raventree_manor',
        type: 'interior',
        status: 'missing',
        statusClass: 'status-sealed',
        dangerLevel: 'unknown',
        dangerClass: 'danger-unknown',
        
        description: `<p><strong>ERROR: LOCALITY NOT FOUND.</strong></p>
        <p>The Upper House, where the ritual took place, has vanished from the physical layout of the manor. The staircase leads to a solid wall of gray fog.</p>
        <p>This section of the building has likely been pulled fully into the <strong>Void Key</strong> (Deep Mirror). Markop, Remi, and the Oracle(s) are trapped here, suspended in a pocket of reality that is slowly dissolving.</p>
        <p>Access requires synchronizing the Shadow and Wild Keys to re-anchor this location to the material plane.</p>`,

        features: [
            { name: "The Fog Wall", description: "A barrier of impenetrable gray mist at the top of the main stairs. Touches induce vertigo.", type: "feature-magic" },
            { name: "Missing Geometry", description: "External observation shows the windows of the upper floor are black voids.", type: "feature-temporal" }
        ],

        currentState: "DESYNCHRONIZED. The floor plan no longer exists in 3D space.",
        stateClass: "state-unknown",

        connectedLocations: [
            { id: 'raventree_manor', name: 'Main Hall', direction: 'Down', status: 'hostile' }
        ],

        notableEvents: [
            { name: "The Ritual Failure", date: "Day 21", type: "magic", description: "The synchronization rite collapsed here, erasing the floor from reality." }
        ]
    }
};

// ===============================================
// DOM ELEMENTS
// ===============================================
const locationDisplay = document.getElementById('location-display');
const locationButtons = document.querySelectorAll('.loc-btn');

// ===============================================
// STATE
// ===============================================
let currentLocation = 'raventree_manor';

// ===============================================
// RENDER FUNCTION
// ===============================================
function renderLocation(locationId) {
    const loc = LOCATIONS[locationId];
    if (!loc) {
        locationDisplay.innerHTML = `
            <div class="panel-alert alert-error">
                <strong>DATA CORRUPTION:</strong> Location ID "${locationId}" not found in local cache.
            </div>`;
        return;
    }

    // Build features HTML
    const featuresHTML = (loc.features || []).map(f => `
        <div class="feature-item ${f.type || ''}">
            <div class="feature-header">
                <span class="feature-icon"></span>
                <span class="feature-title">${f.name}</span>
            </div>
            <p class="feature-text">${f.description}</p>
        </div>
    `).join('');

    // Build connections HTML
    const connectionsHTML = (loc.connectedLocations || []).map(c => `
        <button class="connection-btn status-${c.status}" data-target="${c.id}">
            <span class="conn-dir">${c.direction}</span>
            <span class="conn-name">${c.name}</span>
            <span class="conn-status">${c.status.toUpperCase()}</span>
        </button>
    `).join('');

    // Build events HTML
    const eventsHTML = (loc.notableEvents || []).map(e => `
        <div class="log-entry">
            <span class="log-timestamp">${e.date}</span>
            <span class="log-text"><strong>${e.name}:</strong> ${e.description}</span>
        </div>
    `).join('');

    locationDisplay.innerHTML = `
        <div class="loc-header">
            <div class="loc-title-group">
                <h2 class="loc-name">${loc.name}</h2>
                <div class="loc-meta">
                    <span class="loc-type">${loc.type.toUpperCase()}</span>
                    <span class="loc-status ${loc.statusClass}">${loc.status.toUpperCase()}</span>
                </div>
            </div>
            <div class="loc-danger ${loc.dangerClass}">
                THREAT: ${loc.dangerLevel.toUpperCase()}
            </div>
        </div>

        <div class="loc-body">
            <div class="loc-desc">${loc.description}</div>
            
            <div class="loc-section">
                <h4 class="section-header">TACTICAL FEATURES</h4>
                <div class="features-grid">${featuresHTML || '<p>No data available.</p>'}</div>
            </div>

            <div class="loc-section">
                <h4 class="section-header">OPERATIONAL HISTORY</h4>
                <div class="history-block">${loc.history}</div>
            </div>

            <div class="loc-section">
                <h4 class="section-header">CURRENT STATE</h4>
                <div class="state-box ${loc.stateClass}">
                    ${loc.currentState}
                </div>
            </div>

            <div class="loc-columns">
                <div class="loc-col">
                    <h4 class="section-header">ADJACENT SECTORS</h4>
                    <div class="connections-list">${connectionsHTML}</div>
                </div>
                <div class="loc-col">
                    <h4 class="section-header">LOCAL LOGS</h4>
                    <div class="mini-log">${eventsHTML || '<p>No recent logs.</p>'}</div>
                </div>
            </div>
        </div>
    `;

    // Re-attach connection listeners
    locationDisplay.querySelectorAll('.connection-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            if (LOCATIONS[target]) {
                // Update active button state
                document.querySelectorAll('.loc-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.location === target);
                });
                renderLocation(target);
            }
        });
    });
}

// ===============================================
// INITIALIZATION
// ===============================================
function initLocationSystem() {
    // Render initial
    renderLocation(currentLocation);

    // Setup main buttons
    locationButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            locationButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentLocation = btn.dataset.location;
            renderLocation(currentLocation);
        });
    });
}

// Run init
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initLocationSystem);
} else {
    initLocationSystem();
}

export { LOCATIONS, renderLocation, initLocationSystem };