// onyx-hand.js - Complete script for Onyx Hand faction page with imports

import { LORE_DATA } from '../../../lore.js';
import { getIntelForFaction } from '../../../systems/common.js';
import { state } from '../../core/state.js';
import { getAbsoluteDay } from '../../../data/support/research-data.js';
import { MOON_PHASES, CURRENT_GAME_DATE, CURRENT_GAME_TIME, CALENDAR_DATA } from '../../../data/world/calendar.js';

// ============================================================================
// ONYX HAND DATA
// ============================================================================
// ============================================================================
// RENDER: SHADOW ESTATE SITUATION
// ============================================================================

function renderShadowEstate() {
    const estate = ONYX_HAND_DATA.shadowEstateStatus;
    const intel = getIntel();
    
    if (!isKnown(25)) {
        return `
            <div class="shadow-estate-section">
                <h5 class="section-title">
                    <span class="section-icon">🏚️</span>
                    The Shadow Estate
                </h5>
                <div class="redacted-panel">
                    <span class="lock-icon">🔒</span>
                    <p>Intelligence level insufficient to access Shadow Estate operations.</p>
                    <p>Required: 25 | Current: ${intel}</p>
                </div>
            </div>
        `;
    }
    
    const guestsHTML = estate.currentGuests.map(guest => {
        const threatClass = guest.designation.includes('EXTREME') ? 'extreme' : 
                           guest.designation.includes('HIGH') ? 'high' : 'moderate';
        
        return `
            <div class="guest-card threat-${threatClass}">
                <div class="guest-header">
                    <h6>${guest.name}</h6>
                    <span class="guest-designation">${guest.designation}</span>
                </div>
                <div class="guest-status">
                    <span class="status-label">Status:</span>
                    <span class="status-value">${guest.status}</span>
                </div>
                <p class="guest-notes">${guest.notes}</p>
                <div class="legion-bounty">
                    <span class="bounty-icon">⚔️</span>
                    <span class="bounty-text">Legion Interest: ${guest.legionBounty}</span>
                </div>
                <div class="coven-interests">
                    <h6>Coven Positions</h6>
                    ${Object.entries(guest.covenInterest).map(([covenId, position]) => `
                        <div class="coven-position type-${covenId}">
                            <span class="coven-icon">${getCovenIcon(covenId)}</span>
                            <p>${position}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
    }).join('');
    
    const hospitalityHTML = `
        <div class="hospitality-panel">
            <div class="hospitality-header">
                <span class="hospitality-icon">🍷</span>
                <h6>Vampire Hospitality Protocol</h6>
                <span class="hospitality-status">${estate.hostProtocol.status}</span>
            </div>
            <p class="hospitality-meaning">${estate.hostProtocol.meaning}</p>
            <p class="hospitality-duration"><strong>Duration:</strong> ${estate.hostProtocol.duration}</p>
            <div class="hospitality-loopholes">
                <h6>Known Loopholes</h6>
                <ul>
                    ${estate.hostProtocol.loopholes.map(l => `<li>${l}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
    
    const negotiationsHTML = isKnown(35) ? `
        <div class="negotiations-panel">
            <div class="negotiations-header">
                <h6>Legion Negotiations</h6>
                <span class="operation-codename">Operation: ${estate.legionNegotiations.operationCodename}</span>
                <span class="negotiations-status status-${estate.legionNegotiations.status.toLowerCase()}">${estate.legionNegotiations.status}</span>
            </div>
            
            <div class="demands-grid">
                <div class="demands-column legion">
                    <h6>⚔️ Legion Demands</h6>
                    <ul>
                        ${estate.legionNegotiations.legionDemands.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
                <div class="demands-column onyx">
                    <h6>🧛 Potential Onyx Demands</h6>
                    <ul>
                        ${estate.legionNegotiations.potentialOnyxDemands.map(d => `<li>${d}</li>`).join('')}
                    </ul>
                </div>
            </div>
            
            <div class="coven-assessments">
                <h6>Coven Assessments</h6>
                <div class="assessment-grid">
                    <div class="assessment type-shadow">
                        <span class="coven-label">Shadow Coven:</span>
                        <p>${estate.legionNegotiations.shadowCovenAssessment}</p>
                    </div>
                    <div class="assessment type-blood">
                        <span class="coven-label">Blood Coven:</span>
                        <p>${estate.legionNegotiations.bloodCovenAssessment}</p>
                    </div>
                    <div class="assessment type-iron">
                        <span class="coven-label">Iron Coven:</span>
                        <p>${estate.legionNegotiations.ironCovenAssessment}</p>
                    </div>
                    <div class="assessment type-silk">
                        <span class="coven-label">Silk Coven:</span>
                        <p>${estate.legionNegotiations.silkCovenAssessment}</p>
                    </div>
                </div>
            </div>
        </div>
    ` : `
        <div class="negotiations-panel redacted">
            <p>🔒 Negotiation details require intel level 35 (Current: ${intel})</p>
        </div>
    `;
    
    return `
        <div class="shadow-estate-section">
            <h5 class="section-title">
                <span class="section-icon">🏚️</span>
                The Shadow Estate - Current Situation
            </h5>
            
            <div class="estate-header">
                <div class="estate-location">
                    <span class="location-label">Location:</span>
                    <span class="location-value">${estate.location}</span>
                </div>
                <div class="estate-controller">
                    <span class="controller-label">Host:</span>
                    <span class="controller-value">${estate.controller}</span>
                </div>
                <div class="estate-status">
                    <span class="status-badge status-active">${estate.status}</span>
                </div>
            </div>
            
            <p class="estate-description">${estate.description}</p>
            
            <div class="current-guests-section">
                <h6>Current "Guests"</h6>
                <div class="guests-grid">
                    ${guestsHTML}
                </div>
            </div>
            
            ${hospitalityHTML}
            ${negotiationsHTML}
        </div>
    `;
}
export const ONYX_HAND_DATA = {
    patriarch: {
        name: "Lord Sanguinus the Eternal",
        title: "Patriarch of the Onyx Hand",
        age: "Unknown - rumored to be over 800 years old",
        description: "The shadowy ruler of the Onyx Hand has not been seen in public for decades. Some whisper he has entered the Long Sleep, while others claim he pulls every string from his obsidian throne deep beneath the Crimson Spire.",
        knownAbilities: [
            "Complete mastery of blood magic",
            "Domination of lesser vampires within miles",
            "Rumored ability to walk in daylight",
            "Can see through the eyes of his progeny"
        ],
        intel_req: 60
    },

    covens: [
        {
            id: 'blood',
            name: "The Blood Coven",
            leader: "Countess Vermillia",
            leaderTitle: "The Crimson Matriarch",
            specialty: "Blood magic, ritual sacrifice, and the creation of thralls",
            description: "The Blood Coven represents the raw, primal power of vampirism. They revel in the hunt, the feed, and the ancient blood rituals that strengthen their kind. They are often at odds with the Shadow Coven's more subtle approach.",
            territory: "The Crimson District - a maze of slaughterhouses and underground blood dens",
            strength: 85,
            influence: 70,
            relations: {
                shadow: -30,
                iron: 20,
                silk: -10
            },
            moonAffinity: [1, 2],
            rituals: [
                { name: "The Crimson Feast", description: "A monthly gathering where captured prey are hunted through a labyrinth.", frequency: "Monthly" },
                { name: "Blood Binding", description: "Creating permanent thralls through repeated feeding.", frequency: "As needed" },
                { name: "The Sanguine Tide", description: "A mass ritual that strengthens all coven members.", frequency: "Full Moon" }
            ],
            notableMembers: [
                { name: "Viktor the Flayed", role: "Chief Torturer", status: "Active" },
                { name: "The Red Twins", role: "Assassins", status: "Active" },
                { name: "Baron Hemostat", role: "Blood Banker", status: "Missing" }
            ],
            intel_req: 20
        },
        {
            id: 'shadow',
            name: "The Shadow Coven",
            leader: "Whisper",
            leaderTitle: "The Unseen",
            specialty: "Infiltration, intelligence gathering, and political manipulation",
            description: "Where the Blood Coven is a hammer, the Shadow Coven is a scalpel. They have infiltrated every major organization in the region, planting agents and gathering secrets. Their leader, known only as 'Whisper,' may be multiple individuals—or none at all.",
            territory: "Unknown - suspected to operate from within other factions' territories",
            strength: 45,
            influence: 95,
            relations: {
                blood: -30,
                iron: 10,
                silk: 40
            },
            moonAffinity: [0, 4],
            rituals: [
                { name: "The Veil Walk", description: "Becoming one with shadows for extended periods.", frequency: "Nightly" },
                { name: "Memory Theft", description: "Extracting information from unwilling minds.", frequency: "As needed" },
                { name: "The Silent Council", description: "Telepathic meetings across vast distances.", frequency: "Weekly" }
            ],
            notableMembers: [
                { name: "Echo", role: "Master of Whispers", status: "Active" },
                { name: "The Faceless", role: "Infiltration Specialist", status: "Unknown" },
                { name: "Shade", role: "Assassin", status: "Active" }
            ],
            intel_req: 40
        },
        {
            id: 'iron',
            name: "The Iron Coven",
            leader: "General Ferrus",
            leaderTitle: "The Undying Commander",
            specialty: "Military operations, enforcement, and protection of vampire interests",
            description: "The Iron Coven serves as the Onyx Hand's military arm. Composed of warrior-vampires who remember ancient wars, they enforce the Patriarch's will and protect vampire territories from hunters and rival supernatural factions.",
            territory: "The Iron Bastion - a fortified compound in the industrial district",
            strength: 95,
            influence: 50,
            relations: {
                blood: 20,
                shadow: 10,
                silk: -20
            },
            moonAffinity: [3],
            rituals: [
                { name: "The Blood Oath", description: "Binding warriors to absolute loyalty.", frequency: "Upon induction" },
                { name: "The Hunt Protocol", description: "Coordinated strikes against enemies.", frequency: "As needed" },
                { name: "Dawn Watch", description: "Defensive rituals protecting vampire havens.", frequency: "Daily" }
            ],
            notableMembers: [
                { name: "Captain Steelheart", role: "Elite Guard Commander", status: "Active" },
                { name: "The Siege Twins", role: "Heavy Assault", status: "Active" },
                { name: "Sentinel Prime", role: "Haven Defense", status: "Active" }
            ],
            intel_req: 25
        },
        {
            id: 'silk',
            name: "The Silk Coven",
            leader: "Madame Nocturne",
            leaderTitle: "The Velvet Spider",
            specialty: "Seduction, entertainment, and maintaining the masquerade",
            description: "The Silk Coven operates the Onyx Hand's public-facing operations—exclusive clubs, theaters, and 'entertainment' venues that serve as both feeding grounds and recruitment centers. They maintain the illusion that vampires are merely a myth.",
            territory: "The Velvet Quarter - upscale entertainment district",
            strength: 30,
            influence: 80,
            relations: {
                blood: -10,
                shadow: 40,
                iron: -20
            },
            moonAffinity: [1, 2, 3],
            rituals: [
                { name: "The Masquerade Ball", description: "Elaborate parties where prey come willingly.", frequency: "Weekly" },
                { name: "The Embrace", description: "Carefully selecting and turning new vampires.", frequency: "Rare" },
                { name: "Memory Weaving", description: "Altering mortal memories of vampire encounters.", frequency: "Nightly" }
            ],
            notableMembers: [
                { name: "Desire", role: "Master of Revels", status: "Active" },
                { name: "The Muse", role: "Talent Scout", status: "Active" },
                { name: "Silvertongue", role: "Diplomat", status: "Active" }
            ],
            intel_req: 15
        }
    ],

    courtMembers: [
        {
            name: "Lord Sanguinus the Eternal",
            title: "The Patriarch",
            role: "Supreme Ruler",
            description: "The ancient lord who founded the Onyx Hand centuries ago. His word is absolute law.",
            status: "Unknown",
            intel_req: 60
        },
        {
            name: "Countess Vermillia",
            title: "Voice of Blood",
            role: "Blood Coven Representative",
            description: "Speaks for the primal traditions and the old ways of vampirism.",
            status: "Active",
            intel_req: 25
        },
        {
            name: "Whisper",
            title: "Voice of Shadow",
            role: "Shadow Coven Representative",
            description: "The spymaster whose true identity remains unknown even to other council members.",
            status: "Active",
            intel_req: 45
        },
        {
            name: "General Ferrus",
            title: "Voice of Iron",
            role: "Iron Coven Representative",
            description: "Commands the military forces and oversees defense of vampire territories.",
            status: "Active",
            intel_req: 30
        },
        {
            name: "Madame Nocturne",
            title: "Voice of Silk",
            role: "Silk Coven Representative",
            description: "Manages relations with the mortal world and maintains the Masquerade.",
            status: "Active",
            intel_req: 20
        },
        {
            name: "The Arbiter",
            title: "Judge of Blood",
            role: "Judicial Authority",
            description: "Settles disputes between covens and enforces the Crimson Laws.",
            status: "Active",
            intel_req: 35
        }
    ],

    bloodlines: [
        {
            name: "The Sanguine Line",
            progenitor: "Lord Sanguinus",
            traits: "Pure blood magic mastery, enhanced regeneration, sunlight resistance",
            rarity: "Extremely Rare",
            description: "Direct descendants of the Patriarch. They are few but immensely powerful.",
            intel_req: 50
        },
        {
            name: "The Shadowborn",
            progenitor: "Unknown Ancient",
            traits: "Shadow manipulation, invisibility, incorporeal movement",
            rarity: "Rare",
            description: "These vampires can merge with darkness itself, becoming living shadows.",
            intel_req: 40
        },
        {
            name: "The Crimson Reavers",
            progenitor: "Countess Vermillia",
            traits: "Enhanced strength, blood frenzy, terror aura",
            rarity: "Uncommon",
            description: "Savage hunters who embrace the beast within. Often serve as shock troops.",
            intel_req: 20
        },
        {
            name: "The Velvet Kiss",
            progenitor: "Madame Nocturne",
            traits: "Supernatural beauty, mind influence, emotion manipulation",
            rarity: "Uncommon",
            description: "Seducers and manipulators who rarely need force to get what they want.",
            intel_req: 15
        },
        {
            name: "The Iron Guard",
            progenitor: "General Ferrus",
            traits: "Enhanced durability, pain immunity, combat instincts",
            rarity: "Common",
            description: "Warrior vampires bred for battle. The backbone of vampire military forces.",
            intel_req: 20
        },
        {
            name: "The Hollow Ones",
            progenitor: "Unknown",
            traits: "Emotional void, analytical mind, resistance to mental powers",
            rarity: "Very Rare",
            description: "A mysterious bloodline that seems to lack the emotional volatility of other vampires.",
            intel_req: 55
        }
    ],

    territories: [
        {
            name: "The Crimson Spire",
            controller: "Patriarch",
            type: "Headquarters",
            description: "The ancient tower that serves as the seat of vampire power. Location known only to the inner circle.",
            securityLevel: "Absolute",
            intel_req: 70
        },
        {
            name: "The Velvet Quarter",
            controller: "silk",
            type: "Feeding Ground",
            description: "Upscale entertainment district with exclusive clubs, theaters, and 'private venues'.",
            securityLevel: "Moderate",
            intel_req: 15
        },
        {
            name: "The Crimson District",
            controller: "blood",
            type: "Stronghold",
            description: "Industrial area of slaughterhouses and warehouses concealing blood dens and ritual chambers.",
            securityLevel: "High",
            intel_req: 25
        },
        {
            name: "The Iron Bastion",
            controller: "iron",
            type: "Military Base",
            description: "Fortified compound housing the vampire military and armories of ancient weapons.",
            securityLevel: "Maximum",
            intel_req: 35
        },
        {
            name: "The Undercity",
            controller: "shadow",
            type: "Hidden Network",
            description: "Vast tunnel network beneath the city used for movement and clandestine operations.",
            securityLevel: "Variable",
            intel_req: 45
        },
        {
            name: "The Docks",
            controller: "iron",
            type: "Transit Point",
            description: "Control of shipping allows movement of supplies and 'cargo' in and out of the city.",
            securityLevel: "Moderate",
            intel_req: 20
        }
    ],
threats: [
    {
        name: "The Iron Legion",
        type: "Military Organization",
        threatLevel: "Extreme",
        description: "The Supernatural Sovereignty Act and Iron Mandate have transformed the Legion from a regional nuisance into an existential threat. They have authorization for warrantless searches, asset seizure, and summary detention in border provinces.",
        status: "Active Hostility",
        recentActivity: "Deploying 6,500+ troops to border provinces. Operation IRON SKY captured the Vigilance. Seeking to negotiate for Shadow Estate guests.",
        legionOperations: ["IRON GATE", "IRON SKY", "SHATTERED GLASS", "SHADOW PARLEY (proposed)"],
        intel_req: 10
    },
    {
        name: "The Silver Flame",
        type: "Hunter Organization",
        threatLevel: "Critical",
        description: "Religious zealots dedicated to the extermination of all vampires. Well-funded and fanatical. Now operating with tacit Legion support.",
        status: "Active",
        recentActivity: "Destroyed the Thornwood Haven, killing 12 vampires. Emboldened by Supernatural Sovereignty Act.",
        intel_req: 15
    },
    {
        name: "Moonfang Pack",
        type: "Werewolf Clan",
        threatLevel: "High",
        description: "Ancient enemies of vampirekind. Border conflicts have escalated into open warfare. However, both factions now face a common enemy in the Iron Legion.",
        status: "At War (potential détente)",
        recentActivity: "Attacked Blood Coven patrol, 3 casualties. Rumors of a Grand Moot being called—unprecedented in 200 years.",
        potentialAlliance: "Shadow Coven has opened back-channel communications. Enemy of my enemy...",
        intel_req: 20
    },
    {
        name: "The Planar Fracture",
        type: "Dimensional Anomaly",
        threatLevel: "Unknown",
        description: "The tear in reality at Raventree Manor connects the Shadowfell to the mortal plane and possibly other dimensions. While currently advantageous, it also represents an unpredictable variable.",
        status: "Active",
        recentActivity: "Deposited mortal insurgents into Shadow Estate. Legion forces attempting to secure physical site.",
        risks: [
            "Unknown entities may emerge from Deep Mirror",
            "Legion may develop planar countermeasures",
            "Feywild entities may prove hostile",
            "Fracture may expand or collapse unpredictably"
        ],
        intel_req: 25
    },
    {
        name: "The Daywalker",
        type: "Rogue Vampire",
        threatLevel: "Unknown",
        description: "Rumors of a vampire hunting other vampires. Possibly a dhampir or cursed ancient.",
        status: "Unconfirmed",
        recentActivity: "Three elders disappeared under mysterious circumstances.",
        intel_req: 50
    },
    {
        name: "Internal Dissent",
        type: "Political",
        threatLevel: "High",
        description: "The Patriarch's long silence, combined with the Diet expulsion and arrival of valuable guests, has intensified factional competition. Blood and Shadow covens openly disagree on how to handle the Shadow Estate situation.",
        status: "Escalating",
        recentActivity: "Countess Vermillia and Whisper nearly came to blows over the fate of Archie Miser.",
        intel_req: 30
    }
],

    bloodHunts: [
        {
            id: 'hunt_traitor_marcus',
            target: "Marcus the Betrayer",
            crime: "Revealing vampire havens to Silver Flame hunters",
            status: "active",
            reward: "Favor of the Patriarch, 500 gold",
            declaredBy: "The Iron Coven",
            intel_req: 30
        },
        {
            id: 'hunt_rogue_nest',
            target: "The Sewer Court",
            crime: "Uncontrolled feeding causing mortal attention",
            status: "active",
            reward: "Territory rights, 200 gold",
            declaredBy: "The Shadow Coven",
            intel_req: 25
        },
        {
            id: 'hunt_hunter_cell',
            target: "Silver Flame Cell 'Dawn's Edge'",
            crime: "Destruction of the Thornwood Haven",
            status: "ongoing",
            reward: "Blood Boon from the Patriarch",
            declaredBy: "Lord Sanguinus",
            intel_req: 35
        }
    ],

    traditions: [
        {
            name: "The First Law: The Masquerade",
            description: "Never reveal the existence of vampires to mortals. Those who break this law face Final Death.",
            penalty: "Blood Hunt / Final Death",
            intel_req: 10
        },
        {
            name: "The Second Law: The Domain",
            description: "Respect the territory of other vampires. Hunting in another's domain without permission is punishable.",
            penalty: "Exile / Bloodletting",
            intel_req: 10
        },
        {
            name: "The Third Law: The Progeny",
            description: "Creating new vampires requires the Patriarch's blessing. Unsanctioned childer are destroyed along with their sire.",
            penalty: "Final Death for both",
            intel_req: 15
        },
        {
            name: "The Fourth Law: The Amaranth",
            description: "Diablerie—consuming another vampire's soul—is forbidden except by Patriarch decree.",
            penalty: "Eternal Torment",
            intel_req: 40
        },
        {
            name: "The Fifth Law: The Tribute",
            description: "All vampires must tithe blood to the Patriarch monthly. Failure invites... correction.",
            penalty: "Blood Debt / Thralldom",
            intel_req: 25
        }
    ],
currentEvents: [
    {
        id: 'event_sovereignty_act',
        title: "The Supernatural Sovereignty Act",
        description: "The Regal Empire has declared organized vampires illegal. The Onyx Hand must decide: go to war, go deeper underground, or negotiate from the shadows.",
        status: "crisis",
        responses: {
            blood: "Countess Vermillia demands open war. 'Let them learn why their ancestors feared the night.'",
            shadow: "Whisper counsels patience. 'We have survived worse. We will outlast this empire as we have all others.'",
            iron: "General Ferrus prepares defensive positions. 'Let them come. We will bleed them dry.'",
            silk: "Madame Nocturne works her contacts. 'Laws can be changed. Officials can be... persuaded.'"
        },
        intel_req: 20
    },
    {
        id: 'event_moonfang_war',
        title: "The Shadow War with Moonfang Pack",
        description: "Ancient enmity between vampires and werewolves has flared into open conflict. Border skirmishes are becoming pitched battles.",
        status: "ongoing",
        responses: {
            blood: "Leading night raids against werewolf territory.",
            shadow: "Attempting to assassinate pack leadership.",
            iron: "Fortifying the border and repelling incursions.",
            silk: "Seeking neutral parties to mediate."
        },
        intel_req: 15
    },
    {
        id: 'event_patriarch_silence',
        title: "The Patriarch's Silence",
        description: "Lord Sanguinus has not issued a decree in months. Rumors swirl: has he entered torpor? Been destroyed? Or is this a test of his children's loyalty?",
        status: "mystery",
        responses: {
            blood: "Growing restless, some speak of succession.",
            shadow: "Investigating quietly, trusting no one.",
            iron: "Maintaining order through force of will.",
            silk: "Spreading disinformation to prevent panic."
        },
        intel_req: 50
    },
    {
        id: 'event_shadow_estate_guests',
        title: "Uninvited Guests in the Shadow Estate",
        description: "The planar fracture at Raventree Manor has deposited two mortal insurgents—including the notorious 'Archie Miser'—directly into the Shadowfell reflection controlled by the Onyx Hand. They have been 'welcomed' as guests by Orangus Cornelius. Additionally, the asset known as 'Green T' is being held in vampire custody.",
        status: "opportunity",
        dateOccurred: { year: 1040, monthIndex: 6, day: 21 },
        responses: {
            blood: "Countess Vermillia demands they be drained immediately. 'Mortals in our realm? They are prey, nothing more.'",
            shadow: "Whisper sees leverage. 'The Iron Legion wants these ones badly. Information is worth more than blood.'",
            iron: "General Ferrus assesses the tactical situation. 'One of them is a dragon's ally. Caution is warranted.'",
            silk: "Madame Nocturne is intrigued. 'The one called Archie... his magic caused the planar tear. Such power could be useful—or dangerous.'"
        },
        legionInterest: {
            status: "HIGH",
            proposedOperation: "SHADOW PARLEY",
            objective: "Negotiate handover of insurgents or intelligence",
            notes: "Iron Legion cannot enter Shadowfell directly. Diplomatic approach required."
        },
        guests: [
            { name: "Archie Miser", status: "Guest (unwilling)", threat: "EXTREME - unstable magic", notes: "Caused the planar fracture. Fire magic suppressed by Shadowfell physics." },
            { name: "Bowser", status: "Guest (hostile)", threat: "HIGH - dragon ally", notes: "Stripped of fire abilities in this plane. Still physically formidable." },
            { name: "Green T", status: "Captive", threat: "LOW", notes: "Held separately. Possible bargaining chip or feeding stock." }
        ],
        intel_req: 25
    },
    {
        id: 'event_planar_opportunity',
        title: "The Raventree Fracture",
        description: "A catastrophic ritual failure has shattered reality at Raventree Manor, creating stable portals to the Shadowfell, Feywild, and an unknown 'Deep Mirror' dimension. The Onyx Hand now has unprecedented access to the mortal plane—if they can exploit it before the Legion seals the breach.",
        status: "critical",
        dateOccurred: { year: 1040, monthIndex: 6, day: 21 },
        responses: {
            blood: "Already sending hunting parties through the fracture. 'Fresh feeding grounds await.'",
            shadow: "Mapping the dimensional connections. 'This changes everything. New routes, new hiding places, new opportunities.'",
            iron: "Establishing defensive positions on the Shadowfell side. 'If the Legion tries to follow, we will be ready.'",
            silk: "Concerned about exposure. 'A tear in reality draws attention we cannot afford.'"
        },
        strategicImplications: [
            "Direct access to mortal plane bypassing normal barriers",
            "Potential alliance with Feywild entities against common enemy",
            "Risk of Legion developing counter-incursion capabilities",
            "Unknown entities from Deep Mirror may emerge"
        ],
        intel_req: 30
    },
    {
        id: 'event_diet_expulsion',
        title: "Expelled from the Diet",
        description: "Following the Supernatural Sovereignty Act, all Onyx Hand representatives have been forcibly expelled from the Holy Midlands Diet. Centuries of careful political positioning undone in a single vote.",
        status: "crisis",
        dateOccurred: { year: 1040, monthIndex: 6, day: 18 },
        responses: {
            blood: "Demands retribution. 'They have made their choice. Now they will learn the cost.'",
            shadow: "Already activating sleeper agents within the remaining Diet factions.",
            iron: "Recalls all vampire personnel from Diet-controlled territories.",
            silk: "Mourns the loss but sees opportunity. 'In the shadows, we have always been stronger.'"
        },
        intel_req: 15
    }
],
shadowEstateStatus: {
    location: "Shadowfell Reflection of Raventree Manor",
    controller: "Orangus Cornelius (Blood Coven Affiliate)",
    status: "ACTIVE - HOSTING MORTAL GUESTS",
    lastUpdate: { year: 1040, monthIndex: 6, day: 21, hour: 3, minute: 30 },
    
    description: "The Shadow Estate is the Shadowfell reflection of Raventree Manor—a monochrome realm where color is drained from reality and vampires rule absolutely. Following the planar fracture, two mortal insurgents have been deposited here.",
    
    currentGuests: [
        {
            name: "Archie Miser",
            designation: "Primary Asset / Extreme Threat",
            status: "Guest under observation",
            notes: "Caused the planar fracture through unstable magic. Fire abilities suppressed by Shadowfell physics. Currently attending a vampire dinner party. Displaying remarkable composure for a mortal in our realm.",
            legionBounty: "PRIORITY TARGET - Operation IRON SKY",
            covenInterest: {
                blood: "Drain him. His blood may carry magical properties.",
                shadow: "Study him. Understand how he broke reality.",
                iron: "Contain him. He is too dangerous to ignore.",
                silk: "Befriend him. Power like his could be... directed."
            }
        },
        {
            name: "Bowser",
            designation: "Secondary Asset",
            status: "Guest under observation",
            notes: "Dragon ally, typically fire-based. All flame abilities nullified in the Shadowfell. Physically imposing but strategically limited without his primary capabilities.",
            legionBounty: "HIGH VALUE - Known insurgent",
            covenInterest: {
                blood: "A dragon's blood... the old texts speak of its potency.",
                shadow: "He knows the insurgent network. Extract that knowledge.",
                iron: "Respect a warrior. But do not trust him.",
                silk: "Separation from his ally makes him vulnerable. Exploit this."
            }
        },
        {
            name: "Green T",
            designation: "Tertiary Asset / Bargaining Chip",
            status: "Captive",
            notes: "Toad insurgent captured separately. Limited strategic value but may be useful for prisoner exchanges or Legion negotiations.",
            legionBounty: "MODERATE - Known associate",
            covenInterest: {
                blood: "Barely a snack.",
                shadow: "Keep him alive. He may know things the others don't.",
                iron: "Irrelevant. Focus on the real threats.",
                silk: "A hostage is always useful."
            }
        }
    ],
    
    hostProtocol: {
        status: "VAMPIRE HOSPITALITY INVOKED",
        meaning: "Guests are under the protection of Orangus Cornelius and cannot be harmed without violating sacred hospitality laws. However, they also cannot leave without permission.",
        duration: "Until the host releases them or they violate guest protocols",
        loopholes: [
            "Guests who attack their host forfeit protection",
            "The Patriarch can override any hospitality claim",
            "Hospitality does not extend to information extraction",
            "Guests may be 'persuaded' to leave voluntarily"
        ]
    },
    
    legionNegotiations: {
        status: "PROPOSED",
        operationCodename: "SHADOW PARLEY",
        legionDemands: [
            "Handover of Archie Miser (PRIORITY)",
            "Handover of Bowser",
            "Intelligence on insurgent network",
            "Return of asset Green T"
        ],
        potentialOnyxDemands: [
            "Reversal of Supernatural Sovereignty Act",
            "Recognition of vampire territorial rights",
            "Cessation of Iron Mandate enforcement in vampire territories",
            "Release of captured vampire assets",
            "Non-aggression pact"
        ],
        shadowCovenAssessment: "The Legion is desperate. They cannot reach us here. This is the strongest negotiating position we have had in decades.",
        bloodCovenAssessment: "Negotiating with mortals? We should drain these guests and send their corpses back as our answer.",
        ironCovenAssessment: "Proceed cautiously. The Legion is weakened but not defeated. Overreach now could unite mortal factions against us.",
        silkCovenAssessment: "Let us see what they offer. We can always kill the guests later."
    }
},
    feedingGrounds: [
        { name: "The Velvet Quarter", controller: "silk", quality: "Premium", risk: "Low", notes: "Willing victims, discrete" },
        { name: "The Slaughterhouse District", controller: "blood", quality: "Abundant", risk: "Medium", notes: "Animal blood available, some mortals" },
        { name: "The Docks", controller: "iron", quality: "Variable", risk: "High", notes: "Transients, but also hunters" },
        { name: "The Undercity", controller: "shadow", quality: "Poor", risk: "Very High", notes: "Desperate prey, many dangers" },
        { name: "Noble Quarter", controller: "silk", quality: "Exquisite", risk: "Extreme", notes: "Political consequences if discovered" }
    ]
};

// ============================================================================
// LOCAL STATE FOR THIS MODULE
// ============================================================================

// Initialize onyx-hand specific state if not present
if (!state.onyxHand) {
    state.onyxHand = {
        selectedCoven: 'blood',
        currentSection: 'overview'
    };
}

// ============================================================================
// UTILITY FUNCTIONS
// ============================================================================

function getCovenIcon(covenId) {
    const icons = {
        blood: '🩸',
        shadow: '🌑',
        iron: '⚔️',
        silk: '🎭'
    };
    return icons[covenId] || '❓';
}

function getIntel() {
    return getIntelForFaction('onyx_hand');
}

function isKnown(intel_req) {
    return getIntel() >= intel_req || state.debugMode;
}

// ============================================================================
// MOON PHASE CALCULATIONS
// ============================================================================

function getMoonPhaseData() {
    const MOON_CYCLE_LENGTH = 28;
    const day = getAbsoluteDay();
    const cyclePos = day % MOON_CYCLE_LENGTH;
    const phaseIndex = Math.floor((cyclePos / MOON_CYCLE_LENGTH) * MOON_PHASES.length);
    const currentPhase = MOON_PHASES[phaseIndex];
    
    const daysPerPhase = MOON_CYCLE_LENGTH / MOON_PHASES.length;
    const daysIntoPhase = cyclePos % daysPerPhase;
    const daysUntilNext = Math.ceil(daysPerPhase - daysIntoPhase);
    
    const covenPower = {};
    ONYX_HAND_DATA.covens.forEach(coven => {
        covenPower[coven.id] = coven.moonAffinity.includes(phaseIndex) ? 'ascendant' : 'normal';
    });

    return {
        phase: currentPhase,
        phaseIndex,
        cyclePos,
        daysUntilNext,
        covenPower,
        vampireEffects: getVampireEffects(phaseIndex)
    };
}

function getVampireEffects(phaseIndex) {
    const effects = {
        0: { power: "Maximum", hunting: "Excellent - darkness provides perfect cover", weakness: "None - vampires are at their strongest", special: "Shadow walking and invisibility enhanced" },
        1: { power: "High", hunting: "Good - sufficient darkness", weakness: "Minor - some light sensitivity", special: "Blood magic potency increased" },
        2: { power: "Reduced", hunting: "Difficult - too much light", weakness: "Significant - werewolves at peak power", special: "Defensive operations prioritized" },
        3: { power: "Moderate", hunting: "Moderate - manageable conditions", weakness: "Minor - some discomfort", special: "Military operations favored" },
        4: { power: "Rising", hunting: "Good - darkness returning", weakness: "Minimal", special: "Spirit communication possible" }
    };
    return effects[phaseIndex] || effects[0];
}

// ============================================================================
// RENDER: MOON PHASE BANNER
// ============================================================================

function renderMoonBanner() {
    const moonData = getMoonPhaseData();
    const phase = moonData.phase;
    const effects = moonData.vampireEffects;
    
    return `
        <div class="moon-phase-panel">
            <div class="moon-visual">
                <div class="moon-icon">${phase.icon}</div>
                <div class="moon-glow phase-${moonData.phaseIndex}"></div>
            </div>
            <div class="moon-info">
                <h4 class="moon-name">${phase.name}</h4>
                <p class="moon-lore">${phase.lore}</p>
                <div class="moon-countdown">
                    <span class="countdown-label">Next Phase In:</span>
                    <span class="countdown-value">${moonData.daysUntilNext} days</span>
                </div>
            </div>
            <div class="vampire-effects">
                <h5>Vampire Conditions</h5>
                <div class="effect-grid">
                    <div class="effect-item">
                        <span class="effect-label">Power Level</span>
                        <span class="effect-value power-${effects.power.toLowerCase()}">${effects.power}</span>
                    </div>
                    <div class="effect-item">
                        <span class="effect-label">Hunting</span>
                        <span class="effect-value">${effects.hunting}</span>
                    </div>
                    <div class="effect-item">
                        <span class="effect-label">Weakness</span>
                        <span class="effect-value">${effects.weakness}</span>
                    </div>
                    <div class="effect-item special">
                        <span class="effect-label">Special</span>
                        <span class="effect-value">${effects.special}</span>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// ============================================================================
// RENDER: OVERVIEW SECTION
// ============================================================================

function renderOverview() {
    const intel = getIntel();
    const p = ONYX_HAND_DATA.patriarch;
    const isPatriarchKnown = isKnown(p.intel_req);

    let patriarchHTML;
    if (!isPatriarchKnown) {
        patriarchHTML = `
            <div class="patriarch-panel redacted">
                <div class="patriarch-silhouette">
                    <div class="silhouette-icon">👤</div>
                </div>
                <div class="patriarch-info">
                    <h4>[CLASSIFIED]</h4>
                    <p class="redacted-text">Intelligence level insufficient to access information about Onyx Hand leadership.</p>
                    <div class="intel-requirement">
                        <span>Required Intel: ${p.intel_req}</span>
                        <span>Current: ${intel}</span>
                    </div>
                </div>
            </div>
        `;
    } else {
        patriarchHTML = `
            <div class="patriarch-panel">
                <div class="patriarch-portrait">
                    <div class="portrait-frame">
                        <div class="patriarch-icon">🧛</div>
                    </div>
                    <div class="blood-drip"></div>
                </div>
                <div class="patriarch-info">
                    <h4>${p.name}</h4>
                    <span class="patriarch-title">${p.title}</span>
                    <p class="patriarch-age">Age: ${p.age}</p>
                    <p class="patriarch-desc">${p.description}</p>
                    <div class="patriarch-abilities">
                        <h6>Known Abilities</h6>
                        <ul>
                            ${p.knownAbilities.map(a => `<li>${a}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        `;
    }

    // Current Events
    const eventsHTML = ONYX_HAND_DATA.currentEvents.map(event => {
        if (!isKnown(event.intel_req)) {
            return `
                <div class="event-card redacted">
                    <h6>[CLASSIFIED EVENT]</h6>
                    <p>Intel requirement: ${event.intel_req}</p>
                </div>
            `;
        }
        
        const responsesHTML = Object.entries(event.responses).map(([covenId, response]) => {
            const coven = ONYX_HAND_DATA.covens.find(c => c.id === covenId);
            return `
                <div class="response-item type-${covenId}">
                    <span class="response-coven">${coven?.name || covenId}:</span>
                    <p>${response}</p>
                </div>
            `;
        }).join('');
        
        return `
            <div class="event-card ${event.status}">
                <div class="event-header">
                    <h6>${event.title}</h6>
                    <span class="event-status">${event.status.toUpperCase()}</span>
                </div>
                <p class="event-description">${event.description}</p>
                <div class="event-responses">
                    <h6>Coven Responses</h6>
                    ${responsesHTML}
                </div>
            </div>
        `;
    }).join('');

    // Traditions
    const traditionsHTML = ONYX_HAND_DATA.traditions.map(t => {
        const known = isKnown(t.intel_req);
        return `
            <div class="tradition-item ${known ? '' : 'redacted'}">
                <div class="tradition-header">
                    <h6>${known ? t.name : '[REDACTED]'}</h6>
                    <span class="tradition-penalty">${known ? t.penalty : '???'}</span>
                </div>
                <p>${known ? t.description : 'Insufficient intel level.'}</p>
            </div>
        `;
    }).join('');

    return `
        <div class="patriarch-section">
            <h5 class="section-title">
                <span class="section-icon">👑</span>
                The Patriarch
            </h5>
            ${patriarchHTML}
        </div>

        <div class="events-section">
            <h5 class="section-title">
                <span class="section-icon">⚡</span>
                Current Crises
            </h5>
            <div class="events-list">
                ${eventsHTML}
            </div>
        </div>

        <div class="traditions-section">
            <h5 class="section-title">
                <span class="section-icon">📜</span>
                The Crimson Laws
            </h5>
            <div class="traditions-list">
                ${traditionsHTML}
            </div>
        </div>
    `;
}

// ============================================================================
// RENDER: COVENS SECTION
// ============================================================================

function renderCovens() {
    const intel = getIntel();
    const moonData = getMoonPhaseData();
    const selectedCovenId = state.onyxHand.selectedCoven;
    const selectedCoven = ONYX_HAND_DATA.covens.find(c => c.id === selectedCovenId);
    const isCovenKnown = isKnown(selectedCoven.intel_req);
    const isAscendant = moonData.covenPower[selectedCovenId] === 'ascendant';

    // Coven Circle
    const covenNodes = ONYX_HAND_DATA.covens.map((coven, index) => {
        const angle = (index * 90) - 45;
        const radius = 130;
        const x = Math.cos(angle * Math.PI / 180) * radius;
        const y = Math.sin(angle * Math.PI / 180) * radius;
        
        const isActive = coven.id === selectedCovenId;
        const covenAscendant = moonData.covenPower[coven.id] === 'ascendant';
        
        return `
            <div class="coven-node ${isActive ? 'active' : ''} ${covenAscendant ? 'ascendant' : ''}" 
                 data-coven="${coven.id}"
                 style="transform: translate(${x}px, ${y}px)"
                 title="${isKnown(coven.intel_req) ? coven.name : 'Unknown Coven'}">
                <span class="coven-icon">${getCovenIcon(coven.id)}</span>
                ${covenAscendant ? '<div class="ascendant-glow"></div>' : ''}
            </div>
        `;
    }).join('');

    // Coven Details
    let covenDetailsHTML;
    if (!isCovenKnown) {
        covenDetailsHTML = `
            <div class="coven-details redacted">
                <div class="redacted-overlay">
                    <span class="lock-icon">🔒</span>
                    <p>Insufficient intelligence to access coven details.</p>
                    <p>Required: ${selectedCoven.intel_req} | Current: ${intel}</p>
                </div>
            </div>
        `;
    } else {
        const coven = selectedCoven;
        
        const relationsHTML = Object.entries(coven.relations).map(([otherId, value]) => {
            const otherCoven = ONYX_HAND_DATA.covens.find(c => c.id === otherId);
            const relationClass = value > 0 ? 'positive' : value < 0 ? 'negative' : 'neutral';
            const relationIcon = value > 0 ? '👍' : value < 0 ? '👎' : '➖';
            return `
                <div class="relation-item ${relationClass}">
                    <span class="relation-target">${otherCoven?.name || otherId}</span>
                    <span class="relation-value">${relationIcon} ${value > 0 ? '+' : ''}${value}</span>
                </div>
            `;
        }).join('');
        
        const ritualsHTML = coven.rituals.map(r => `
            <div class="ritual-item">
                <span class="ritual-name">${r.name}</span>
                <span class="ritual-freq">${r.frequency}</span>
                <p class="ritual-desc">${r.description}</p>
            </div>
        `).join('');
        
        const membersHTML = coven.notableMembers.map(m => `
            <div class="member-item">
                <span class="member-name">${m.name}</span>
                <span class="member-role">${m.role}</span>
                <span class="member-status status-${m.status.toLowerCase()}">${m.status}</span>
            </div>
        `).join('');

        covenDetailsHTML = `
            <div class="coven-details type-${coven.id} ${isAscendant ? 'ascendant' : ''}">
                <div class="coven-header">
                    <div class="coven-title">
                        <span class="coven-icon-large">${getCovenIcon(coven.id)}</span>
                        <div>
                            <h4>${coven.name}</h4>
                            <span class="coven-leader-name">${coven.leader}</span>
                            <span class="coven-leader-title">${coven.leaderTitle}</span>
                        </div>
                    </div>
                    ${isAscendant ? '<div class="ascendant-badge">✨ Moon Ascendant</div>' : ''}
                </div>
                
                <p class="coven-specialty">${coven.specialty}</p>
                <p class="coven-description">${coven.description}</p>
                
                <div class="coven-stats">
                    <div class="stat-bar">
                        <span class="stat-label">Military Strength</span>
                        <div class="stat-track">
                            <div class="stat-fill strength" style="width: ${coven.strength}%"></div>
                        </div>
                        <span class="stat-value">${coven.strength}%</span>
                    </div>
                    <div class="stat-bar">
                        <span class="stat-label">Political Influence</span>
                        <div class="stat-track">
                            <div class="stat-fill influence" style="width: ${coven.influence}%"></div>
                        </div>
                        <span class="stat-value">${coven.influence}%</span>
                    </div>
                </div>
                
                <div class="coven-territory">
                    <h6>Territory</h6>
                    <p>${coven.territory}</p>
                </div>
                
                <div class="coven-relations">
                    <h6>Relations with Other Covens</h6>
                    <div class="relations-grid">
                        ${relationsHTML}
                    </div>
                </div>
                
                <div class="coven-rituals">
                    <h6>Known Rituals</h6>
                    <div class="rituals-list">
                        ${ritualsHTML}
                    </div>
                </div>
                
                <div class="coven-members">
                    <h6>Notable Members</h6>
                    <div class="members-list">
                        ${membersHTML}
                    </div>
                </div>
            </div>
        `;
    }

    return `
        <div class="covens-section">
            <h5 class="section-title">
                <span class="section-icon">🏛️</span>
                The Four Covens
            </h5>
            <div class="covens-layout">
                <div class="coven-selector">
                    <div class="coven-circle-container">
                        <div class="circle-background">
                            <svg viewBox="0 0 300 300" class="connection-lines">
                                <circle cx="150" cy="150" r="130" fill="none" stroke="var(--border-color, #333)" stroke-width="1" stroke-dasharray="5,5"/>
                                <circle cx="150" cy="150" r="80" fill="none" stroke="var(--border-color, #333)" stroke-width="1" opacity="0.5"/>
                            </svg>
                        </div>
                        <div class="patriarch-center" data-action="patriarch">
                            <span class="patriarch-icon">👁️</span>
                            <div class="patriarch-pulse"></div>
                        </div>
                        ${covenNodes}
                    </div>
                </div>
                <div class="coven-info-panel" id="coven-details-panel">
                    ${covenDetailsHTML}
                </div>
            </div>
        </div>
    `;
}

// ============================================================================
// RENDER: CRIMSON COURT SECTION
// ============================================================================

function renderCourt() {
    const membersHTML = ONYX_HAND_DATA.courtMembers.map(member => {
        const known = isKnown(member.intel_req);
        
        if (!known) {
            return `
                <div class="court-member redacted">
                    <div class="member-icon">👤</div>
                    <div class="member-info">
                        <h6>[CLASSIFIED]</h6>
                        <p>Intel requirement: ${member.intel_req}</p>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="court-member">
                <div class="member-icon">🧛</div>
                <div class="member-info">
                    <h6>${member.name}</h6>
                    <span class="member-title">${member.title}</span>
                    <span class="member-role">${member.role}</span>
                    <p>${member.description}</p>
                    <span class="member-status status-${member.status.toLowerCase()}">${member.status}</span>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="court-section">
            <h5 class="section-title">
                <span class="section-icon">⚖️</span>
                The Crimson Court
            </h5>
            <p class="section-intro">The ruling council of the Onyx Hand. Each voice represents a faction, and together they interpret the Patriarch's will.</p>
            <div class="court-members-grid">
                ${membersHTML}
            </div>
        </div>
    `;
}

// ============================================================================
// RENDER: BLOODLINES SECTION
// ============================================================================

function renderBloodlines() {
    const bloodlinesHTML = ONYX_HAND_DATA.bloodlines.map(bloodline => {
        const known = isKnown(bloodline.intel_req);
        
        if (!known) {
            return `
                <div class="bloodline-card redacted">
                    <h6>[CLASSIFIED BLOODLINE]</h6>
                    <p>Intel requirement: ${bloodline.intel_req}</p>
                </div>
            `;
        }
        
        return `
            <div class="bloodline-card">
                <div class="bloodline-header">
                    <h6>${bloodline.name}</h6>
                    <span class="bloodline-rarity rarity-${bloodline.rarity.toLowerCase().replace(' ', '-')}">${bloodline.rarity}</span>
                </div>
                <p class="bloodline-progenitor"><strong>Progenitor:</strong> ${bloodline.progenitor}</p>
                <p class="bloodline-traits"><strong>Traits:</strong> ${bloodline.traits}</p>
                <p class="bloodline-desc">${bloodline.description}</p>
            </div>
        `;
    }).join('');

    return `
        <div class="bloodlines-section">
            <h5 class="section-title">
                <span class="section-icon">🩸</span>
                Vampire Bloodlines
            </h5>
            <p class="section-intro">The blood is everything. Each bloodline carries unique gifts and curses from their progenitors.</p>
            <div class="bloodlines-grid">
                ${bloodlinesHTML}
            </div>
        </div>
    `;
}

// ============================================================================
// RENDER: TERRITORIES SECTION
// ============================================================================

function renderTerritories() {
    const territoriesHTML = ONYX_HAND_DATA.territories.map(territory => {
        const known = isKnown(territory.intel_req);
        const controller = ONYX_HAND_DATA.covens.find(c => c.id === territory.controller);
        
        if (!known) {
            return `
                <div class="territory-card redacted">
                    <h6>[CLASSIFIED LOCATION]</h6>
                    <p>Intel requirement: ${territory.intel_req}</p>
                </div>
            `;
        }
        
        return `
            <div class="territory-card type-${territory.controller}">
                <div class="territory-header">
                    <h6>${territory.name}</h6>
                    <span class="territory-type">${territory.type}</span>
                </div>
                <p class="territory-controller"><strong>Controller:</strong> ${controller?.name || territory.controller}</p>
                <p class="territory-security"><strong>Security:</strong> <span class="security-${territory.securityLevel.toLowerCase()}">${territory.securityLevel}</span></p>
                <p class="territory-desc">${territory.description}</p>
            </div>
        `;
    }).join('');

    // Feeding Grounds
    const feedingHTML = ONYX_HAND_DATA.feedingGrounds.map(ground => {
        const controller = ONYX_HAND_DATA.covens.find(c => c.id === ground.controller);
        const riskClass = ground.risk.toLowerCase().replace(' ', '-');
        
        return `
            <div class="feeding-ground type-${ground.controller}">
                <div class="ground-header">
                    <span class="ground-name">${ground.name}</span>
                    <span class="ground-controller">${controller?.name || ground.controller}</span>
                </div>
                <div class="ground-stats">
                    <span class="ground-quality">Quality: ${ground.quality}</span>
                    <span class="ground-risk risk-${riskClass}">Risk: ${ground.risk}</span>
                </div>
                <p class="ground-notes">${ground.notes}</p>
            </div>
        `;
    }).join('');

    return `
        <div class="territories-section">
            <h5 class="section-title">
                <span class="section-icon">🗺️</span>
                Controlled Territories
            </h5>
            <div class="territories-grid">
                ${territoriesHTML}
            </div>
        </div>

        <div class="feeding-grounds-section">
            <h5 class="section-title">
                <span class="section-icon">🍷</span>
                Feeding Grounds
            </h5>
            <div class="feeding-grounds-grid">
                ${feedingHTML}
            </div>
        </div>
    `;
}

// ============================================================================
// RENDER: THREATS SECTION
// ============================================================================

function renderThreats() {
    const threatsHTML = ONYX_HAND_DATA.threats.map(threat => {
        const known = isKnown(threat.intel_req);
        
        if (!known) {
            return `
                <div class="threat-card redacted">
                    <h6>[CLASSIFIED THREAT]</h6>
                    <p>Intel requirement: ${threat.intel_req}</p>
                </div>
            `;
        }
        
        const levelClass = threat.threatLevel.toLowerCase().replace(' ', '-');
        
        return `
            <div class="threat-card level-${levelClass}">
                <div class="threat-header">
                    <h6>${threat.name}</h6>
                    <span class="threat-level level-${levelClass}">${threat.threatLevel}</span>
                </div>
                <span class="threat-type">${threat.type}</span>
                <p class="threat-desc">${threat.description}</p>
                <p class="threat-status"><strong>Status:</strong> ${threat.status}</p>
                <p class="threat-activity"><strong>Recent Activity:</strong> ${threat.recentActivity}</p>
            </div>
        `;
    }).join('');

    // Blood Hunts
    const huntsHTML = ONYX_HAND_DATA.bloodHunts.map(hunt => {
        const known = isKnown(hunt.intel_req);
        
        if (!known) {
            return `
                <div class="blood-hunt-card redacted">
                    <div class="hunt-header">
                        <span class="hunt-icon">🎯</span>
                        <span class="hunt-target">[CLASSIFIED]</span>
                    </div>
                    <p class="redacted-text">Intel requirement: ${hunt.intel_req}</p>
                </div>
            `;
        }
        
        return `
            <div class="blood-hunt-card ${hunt.status}">
                <div class="hunt-header">
                    <span class="hunt-icon">🎯</span>
                    <span class="hunt-target">${hunt.target}</span>
                    <span class="hunt-status">${hunt.status.toUpperCase()}</span>
                </div>
                <div class="hunt-details">
                    <p class="hunt-crime"><strong>Crime:</strong> ${hunt.crime}</p>
                    <p class="hunt-reward"><strong>Reward:</strong> ${hunt.reward}</p>
                    <p class="hunt-declared"><strong>Declared by:</strong> ${hunt.declaredBy}</p>
                </div>
            </div>
        `;
    }).join('');

    return `
        <div class="threats-section">
            <h5 class="section-title">
                <span class="section-icon">⚠️</span>
                Active Threats
            </h5>
            <div class="threats-grid">
                ${threatsHTML}
            </div>
        </div>

        <div class="blood-hunts-section">
            <h5 class="section-title">
                <span class="section-icon">🎯</span>
                Active Blood Hunts
            </h5>
            <div class="blood-hunts-grid">
                ${huntsHTML}
            </div>
        </div>
    `;
}

// ============================================================================
// NAVIGATION & SECTION SWITCHING
// ============================================================================

function switchSection(sectionId) {
    state.onyxHand.currentSection = sectionId;
    
    // Update nav buttons
    document.querySelectorAll('.faction-nav-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.section === sectionId);
    });
    
    // Update sections
    document.querySelectorAll('.faction-section').forEach(section => {
        section.classList.toggle('active', section.id === `section-${sectionId}`);
    });
    
    // Render content for the section
    renderSectionContent(sectionId);
}

function renderSectionContent(sectionId) {
const contentMap = {
    'overview': { container: 'overview-content', render: renderOverview },
    'covens': { container: 'covens-content', render: renderCovens },
    'court': { container: 'court-content', render: renderCourt },
    'bloodlines': { container: 'bloodlines-content', render: renderBloodlines },
    'territories': { container: 'territories-content', render: renderTerritories },
    'threats': { container: 'threats-content', render: renderThreats },
    'shadow-estate': { container: 'shadow-estate-content', render: renderShadowEstate } // NEW
};
     
    const config = contentMap[sectionId];
    if (config) {
        const container = document.getElementById(config.container);
        if (container) {
            container.innerHTML = config.render();
            attachSectionEventListeners(sectionId);
        }
    }
}

function attachSectionEventListeners(sectionId) {
    if (sectionId === 'covens') {
        // Coven node click handlers
        document.querySelectorAll('.coven-node').forEach(node => {
            node.addEventListener('click', (e) => {
                const covenId = e.currentTarget.dataset.coven;
                selectCoven(covenId);
            });
        });
        
        // Patriarch center click
        const patriarchCenter = document.querySelector('.patriarch-center');
        if (patriarchCenter) {
            patriarchCenter.addEventListener('click', () => {
                switchSection('overview');
                setTimeout(() => {
                    const patriarchSection = document.querySelector('.patriarch-section');
                    if (patriarchSection) {
                        patriarchSection.scrollIntoView({ behavior: 'smooth' });
                        patriarchSection.classList.add('highlighted');
                        setTimeout(() => patriarchSection.classList.remove('highlighted'), 2000);
                    }
                }, 100);
            });
        }
    }
}

function selectCoven(covenId) {
    state.onyxHand.selectedCoven = covenId;
    
    // Update active states on nodes
    document.querySelectorAll('.coven-node').forEach(node => {
        node.classList.toggle('active', node.dataset.coven === covenId);
    });
    
    // Re-render coven details
    const panel = document.getElementById('coven-details-panel');
    if (panel) {
        panel.classList.add('updating');
        
        setTimeout(() => {
            renderSectionContent('covens');
            panel.classList.remove('updating');
        }, 150);
    }
}

// ============================================================================
// EXPORTED RENDER FUNCTION (for use by other modules)
// ============================================================================

export function renderOnyxHandCovenSystem() {
    const moonData = getMoonPhaseData();
    const selectedCovenId = state.onyxHand?.selectedCoven || 'blood';
    const selectedCoven = ONYX_HAND_DATA.covens.find(c => c.id === selectedCovenId);
    const isCovenKnown = isKnown(selectedCoven.intel_req);
    const isAscendant = moonData.covenPower[selectedCovenId] === 'ascendant';
    
    return `
        <div class="onyx-hand-system">
            ${renderMoonBanner()}
            ${renderOverview()}
            ${renderCovens()}
        </div>
    `;
}

// ============================================================================
// INITIALIZATION
// ============================================================================

export function initOnyxHandSystem() {
    console.log('Initializing Onyx Hand system...');
    
    // Ensure state is initialized
    if (!state.onyxHand) {
        state.onyxHand = {
            selectedCoven: 'blood',
            currentSection: 'overview'
        };
    }
    
    // Render moon banner
    const moonBanner = document.getElementById('moon-phase-banner');
    if (moonBanner) {
        moonBanner.innerHTML = renderMoonBanner();
    }
    
    // Set up navigation
    document.querySelectorAll('.faction-nav-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const section = e.currentTarget.dataset.section;
            switchSection(section);
        });
    });
    
    // Render initial section (overview)
    switchSection('overview');
    
    console.log('Onyx Hand system initialized!');
}

// ============================================================================
// ADDITIONAL CSS STYLES (injected for missing styles)
// ============================================================================

const additionalStyles = `
    /* Court Members */
    .court-section .section-intro,
    .bloodlines-section .section-intro {
        color: var(--text-secondary, #a0a0a0);
        font-style: italic;
        margin-bottom: 20px;
    }

    .court-members-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
    }

    .court-member {
        display: flex;
        gap: 16px;
        padding: 20px;
        background: var(--main-bg, #0d0d0d);
        border: 1px solid var(--border-color, #333);
        border-radius: 8px;
        border-left: 4px solid var(--accent-color, #8a2be2);
    }

    .court-member.redacted {
        opacity: 0.6;
        border-left-color: var(--border-color, #333);
    }

    .court-member .member-icon {
        font-size: 2.5rem;
    }

    .court-member .member-info h6 {
        font-family: var(--font-display, 'Orbitron', sans-serif);
        font-size: 1.1rem;
        color: var(--text-color, #ffffff);
        margin: 0 0 4px 0;
    }

    .court-member .member-title {
        display: block;
        color: var(--accent-color, #8a2be2);
        font-weight: bold;
        font-size: 0.9rem;
    }

    .court-member .member-role {
        display: block;
        color: var(--text-secondary, #a0a0a0);
        font-size: 0.85rem;
        font-style: italic;
        margin-bottom: 8px;
    }

    .court-member p {
        font-size: 0.9rem;
        color: var(--text-secondary, #a0a0a0);
        margin: 0 0 8px 0;
    }

    /* Bloodlines */
    .bloodlines-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
    }

    .bloodline-card {
        padding: 20px;
        background: var(--main-bg, #0d0d0d);
        border: 1px solid var(--border-color, #333);
        border-radius: 8px;
        border-left: 4px solid #8b0000;
    }

    .bloodline-card.redacted {
        opacity: 0.6;
        border-left-color: var(--border-color, #333);
    }

    .bloodline-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        flex-wrap: wrap;
        gap: 8px;
    }

    .bloodline-header h6 {
        font-family: var(--font-display, 'Orbitron', sans-serif);
        font-size: 1.1rem;
        color: #dc2626;
        margin: 0;
    }

    .bloodline-rarity {
        font-size: 0.75rem;
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
    }

    .bloodline-rarity.rarity-common {
        background: rgba(156, 163, 175, 0.2);
        color: #9ca3af;
    }

    .bloodline-rarity.rarity-uncommon {
        background: rgba(74, 222, 128, 0.2);
        color: #4ade80;
    }

    .bloodline-rarity.rarity-rare {
        background: rgba(96, 165, 250, 0.2);
        color: #60a5fa;
    }

    .bloodline-rarity.rarity-very-rare {
        background: rgba(167, 139, 250, 0.2);
        color: #a78bfa;
    }

    .bloodline-rarity.rarity-extremely-rare {
        background: rgba(251, 191, 36, 0.2);
        color: #fbbf24;
    }

    .bloodline-progenitor,
    .bloodline-traits {
        font-size: 0.85rem;
        color: var(--text-secondary, #a0a0a0);
        margin: 4px 0;
    }

    .bloodline-desc {
        font-size: 0.9rem;
        color: var(--text-secondary, #a0a0a0);
        margin: 12px 0 0 0;
        font-style: italic;
    }

    /* Territories */
    .territories-grid,
    .threats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 16px;
        margin-bottom: 32px;
    }

    .territory-card,
    .threat-card {
        padding: 20px;
        background: var(--main-bg, #0d0d0d);
        border: 1px solid var(--border-color, #333);
        border-radius: 8px;
        border-left: 4px solid var(--border-color, #333);
    }

    .territory-card.redacted,
    .threat-card.redacted {
        opacity: 0.6;
    }

    .territory-card.type-blood { border-left-color: #8b0000; }
    .territory-card.type-shadow { border-left-color: #6366f1; }
    .territory-card.type-iron { border-left-color: #4a5568; }
    .territory-card.type-silk { border-left-color: #9f7aea; }
    .territory-card.type-Patriarch { border-left-color: gold; }

    .territory-header,
    .threat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;
        flex-wrap: wrap;
        gap: 8px;
    }

    .territory-header h6,
    .threat-header h6 {
        font-family: var(--font-display, 'Orbitron', sans-serif);
        font-size: 1.1rem;
        color: var(--text-color, #ffffff);
        margin: 0;
    }

    .territory-type,
    .threat-type {
        font-size: 0.75rem;
        padding: 4px 8px;
        background: rgba(138, 43, 226, 0.2);
        color: var(--accent-color, #8a2be2);
        border-radius: 4px;
        display: inline-block;
        margin-bottom: 8px;
    }

    .territory-controller,
    .territory-security,
    .threat-status,
    .threat-activity {
        font-size: 0.85rem;
        color: var(--text-secondary, #a0a0a0);
        margin: 4px 0;
    }

    .security-absolute { color: #dc2626; font-weight: bold; }
    .security-maximum { color: #f97316; }
    .security-high { color: #fbbf24; }
    .security-moderate { color: #4ade80; }
    .security-variable { color: var(--accent-color, #8a2be2); }

    .territory-desc,
    .threat-desc {
        font-size: 0.9rem;
        color: var(--text-secondary, #a0a0a0);
        margin: 12px 0;
    }

    /* Threats */
    .threat-card.level-critical { border-left-color: #dc2626; }
    .threat-card.level-high { border-left-color: #f97316; }
    .threat-card.level-moderate { border-left-color: #fbbf24; }
    .threat-card.level-unknown { border-left-color: var(--accent-color, #8a2be2); }

    .threat-level {
        font-size: 0.75rem;
        padding: 4px 8px;
        border-radius: 4px;
        font-weight: bold;
    }

    .threat-level.level-critical {
        background: rgba(220, 38, 38, 0.2);
        color: #dc2626;
    }

    .threat-level.level-high {
        background: rgba(249, 115, 22, 0.2);
        color: #f97316;
    }

    .threat-level.level-moderate {
        background: rgba(251, 191, 36, 0.2);
        color: #fbbf24;
    }

    .threat-level.level-unknown {
        background: rgba(138, 43, 226, 0.2);
        color: var(--accent-color, #8a2be2);
    }

    /* Section containers */
    .faction-section {
        display: none;
    }

    .faction-section.active {
        display: block;
    }

    /* Responsive */
    @media (max-width: 768px) {
        .court-members-grid,
        .bloodlines-grid,
        .territories-grid,
        .threats-grid {
            grid-template-columns: 1fr;
        }
    }
`;

// Inject additional styles
function injectStyles() {
    if (!document.getElementById('onyx-hand-extra-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'onyx-hand-extra-styles';
        styleSheet.textContent = additionalStyles;
        document.head.appendChild(styleSheet);
    }
}

// ============================================================================
// AUTO-INITIALIZATION
// ============================================================================

function autoInit() {
    injectStyles();
    initOnyxHandSystem();
    renderShadowEstate();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', autoInit);
} else {
    autoInit();
}