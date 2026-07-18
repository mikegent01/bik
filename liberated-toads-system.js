// liberated-toads-system.js
// Complete Overhaul - Full Faction Management System
// Properly represents 150+ toads, Speaker L's power, governance, voting, XP, abilities

import { state, loadState, saveState } from './state.js';
import { CURRENT_GAME_DATE, CURRENT_GAME_TIME, CALENDAR_DATA, getDynamicTimestamp } from './calendar-data.js';

// ========================================
// CONSTANTS & CONFIGURATION
// ========================================

const CURRENT_DAY = CURRENT_GAME_DATE.day;
const CURRENT_MONTH = CALENDAR_DATA.months.values[CURRENT_GAME_DATE.monthIndex].name;
const CURRENT_YEAR = CURRENT_GAME_DATE.year;
const CURRENT_DATE_STRING = `${CURRENT_MONTH} ${CURRENT_DAY}, ${CURRENT_YEAR} BF`;

// XP thresholds for leveling (cumulative)
const XP_THRESHOLDS = {
    1: 0,
    2: 100,
    3: 300,
    4: 600,
    5: 1000,
    6: 1500,
    7: 2100,
    8: 2800,
    9: 3600,
    10: 4500,
    11: 5500,
    12: 6600,
    13: 7800,
    14: 9100,
    15: 10500,
    16: 12000,
    17: 13600,
    18: 15300,
    19: 17100,
    20: 19000
};

// Get XP needed for next level
function getXPForLevel(level) {
    return XP_THRESHOLDS[level] || 0;
}

function getXPToNextLevel(currentLevel, currentXP) {
    const nextLevelXP = XP_THRESHOLDS[currentLevel + 1];
    if (!nextLevelXP) return 0; // Max level
    const currentLevelXP = XP_THRESHOLDS[currentLevel];
    return nextLevelXP - currentXP;
}

function getXPProgress(currentLevel, currentXP) {
    const currentLevelXP = XP_THRESHOLDS[currentLevel];
    const nextLevelXP = XP_THRESHOLDS[currentLevel + 1];
    if (!nextLevelXP) return 100; // Max level
    const progressXP = currentXP - currentLevelXP;
    const neededXP = nextLevelXP - currentLevelXP;
    return Math.min(100, Math.floor((progressXP / neededXP) * 100));
}

// ========================================
// GOVERNANCE STRUCTURE - SPEAKER L'S POWER
// ========================================

const GOVERNANCE = {
       structure: {
        type: "Emergency Military Junta", // Updated from Theocratic Council
        established: "Day 21, Hour 14:00",
        authority_basis: "Order 120 (Martial Law Response)",
        description: "Following the discovery that Speaker L is a decoy and the imminent execution of Toad prisoners, Captain Fernback has assumed temporary command. The Council is in disarray."
    },
    heroes_council: {
        name: "The Liberators' Circle",
        description: "The original heroes who freed the 150 toads. With Speaker L missing, their 'advisory' status has effectively become command authority for those willing to listen.",
        established: "Day 12, following the Barrel Liberation",
        authority: "De Facto Command",
        
        privileges: [
            { name: "Liberation Veto", description: "Can veto any decision that would re-enslave, abandon, or betray freed toads", requires: "2/4 Core members present" },
            { name: "Sanctuary Right", description: "Any Core member can grant temporary sanctuary to anyone aboard the Vigilance", requires: "1 Core member" },
            { name: "Mission Override", description: "Can call emergency missions without Council approval if toads are in immediate danger", requires: "3/4 Core members" },
            { name: "Speaker Audience", description: "Guaranteed immediate audience with Speaker L at any time", requires: "Any Core member" },
            { name: "Resource Priority", description: "Priority access to healing, equipment, and supplies during emergencies", requires: "Automatic" },
            { name: "Council Voice", description: "Non-voting seat at all Council meetings; can speak and propose but not vote", requires: "1 Core member present" }
        ],
        
        seats: [
            { 
                id: "dan", 
                name: "Dan", 
                title: "The Faithful", 
                status: "Active - Injured", // Updated
                canVote: true,
                notes: "Rallied from catatonia to fight the Wraith. Missing right arm. Currently separated in the Shadowfell/Void fracture.",
                contributions: ["Led the charge against X.O.", "Protected wounded during raids", "Moral compass of the group", "Fought Arcane Wraith one-handed"]
            },
            { 
                id: "eager", 
                name: "Eager", 
                title: "The Swift", 
                status: "Active", // Updated
                canVote: true,
                notes: "Recovered from coma due to magical healing. Currently in the Feywild Attic.",
                contributions: ["First successful recon", "Gathered critical intel", "Saved party multiple times with quick thinking"]
            },
            { 
                id: "roger", 
                name: "Roger", 
                title: "The Sharpshooter", 
                status: "Active",
                canVote: true,
                notes: "Defending the Vigilance perimeter.",
                contributions: ["Eliminated key threats", "Earl Grey kill", "Consistent ranged support"]
            },
            { 
                id: "ryan", 
                name: "Ryan", 
                title: "The Arcane", 
                status: "Separated",
                canVote: false,
                notes: "With Rakasha - can invoke privileges if communication established",
                contributions: ["Arcane expertise", "Darkness spell saved the party", "Puzzle solving"]
            },
            { 
                id: "bones", 
                name: "Bones", 
                title: "The Unbreakable", 
                status: "Critical - Captured",
                canVote: false,
                notes: "Stabbed by Ironhand. Execution imminent (Order 120). Rescue is top priority.",
                contributions: ["Front-line defender", "Discovered Legion infiltrators", "Held chokepoints alone", "Exposed Speaker L decoy"]
            },
            { 
                id: "toad_lee", 
                name: "Toad Lee", 
                title: "The Relentless", 
                status: "Active",
                canVote: true,
                notes: "Currently in the Feywild Attic with Waluigi.",
                contributions: ["Survived Shadeward dinner", "Symbol of resilience", "Steadfast fighter"]
            }
        ],
        
        active_members: 4, // Dan, Eager, Roger, Toad Lee (technically active, just scattered)
        quorum_for_veto: 2,
        
        recent_actions: [
            { day: 21, action: "Dan invoked Mission Override to fight the Wraith", result: "Granted" },
            { day: 21, action: "Roger authorized lethal force against Legion spies", result: "Executed" },
            { day: 20, action: "Roger invoked Speaker Audience to report on Rakasha contact", result: "Granted" }
        ],
        
        speaker_relationship: {
            status: "Broken Chain of Command",
            notes: "With Speaker L revealed as a decoy/missing, the Liberators act independently. Captain Fernback respects them but is prioritizing military defense."
        }
    },
    speaker: {
        id: "speaker_l",
        name: "Speaker L",
        fullTitle: "Voice of the Pond, Keeper of the Cohort, Emergency Commander",
        title: "Voice of the Pond",
        authority_level: "Supreme (Emergency Powers)",
        portrait: "🐸👑",
        level: 8,
        class: "leader",
        xp: 3200,
        stats: {
            str: 10, dex: 12, con: 14, int: 16, wis: 18, cha: 20,
            hp: 64, maxHp: 64, ac: 14, speed: 30
        },
        abilities: [
            { name: "Commanding Presence", level: 1, description: "Allies within 30 feet gain +2 to saves against fear" },
            { name: "Rally the Faithful", level: 2, description: "Grant temporary HP equal to level + CHA to all allies who can hear" },
            { name: "Divine Mandate", level: 3, description: "Spoken decrees carry weight of law; resistance checks at disadvantage" },
            { name: "Tactical Direction", level: 5, description: "Grant one ally an additional action on their turn" },
            { name: "Pond's Judgment", level: 6, description: "Declare formal judgment that binds the Cohort" },
            { name: "Emergency Decree", level: 8, description: "Bypass council vote in times of crisis" }
        ],
        description: "Speaker L emerged as the spiritual and political leader during the chaos aboard the Vigilance. Their calm demeanor, unwavering moral compass, and almost supernatural ability to inspire loyalty rallied the traumatized toads into a cohesive force. While their methods can seem harsh, none doubt their commitment to the Cohort's survival.",
        philosophy: "Order through unity. Safety through vigilance. Justice through accountability.",
        powers: [
            { name: "Issue Emergency Decrees", description: "Bypass council vote in crisis situations", requires: null },
            { name: "Veto Council Decisions", description: "Block any council vote; requires 2/3 override", requires: null },
            { name: "Appoint Cohort Leaders", description: "Name and dismiss leaders of all cohorts", requires: null },
            { name: "Command Pond Patrol", description: "Direct control of enforcement arm", requires: null },
            { name: "Declare States of Emergency", description: "Activate emergency protocols faction-wide", requires: null },
            { name: "Authorize Lethal Force", description: "Only Speaker L can authorize killing", requires: "Emergency conditions" }
        ],
        current_decrees: [
            { 
                id: "ED-001", 
                title: "The Accountability Docket", 
                status: "active", 
                date: "Day 18",
                summary: "Establishes formal charges against Archie, Bowser, Waluigi, Dan, and Eager"
            },
            { 
                id: "ED-002", 
                title: "Containment Protocol Alpha", 
                status: "active", 
                date: "Day 19",
                summary: "Authorizes Pond Patrol to establish perimeter around Raventree Manor"
            },
            { 
                id: "ED-003", 
                title: "Iron Mandate Response", 
                status: "pending_vote", 
                date: "Day 21",
                summary: "Strategic withdrawal from current position pending council deliberation"
            }
        ],
        quotes: [
            "This is not retribution's art, but the mending of the fractured heart.",
            "By pond and law, by vow and steel, the wound must close for peace to heal.",
            "We are not slaves to chaos. We are the Liberated.",
            "Every toad who falls under my watch is a failure I carry forever."
        ]
    },
    
    council: {
        name: "The Cohort Council",
        seats: 7,
        description: "Seven elected representatives from each major cohort advise Speaker L. While the Speaker holds emergency powers, the Council provides crucial perspective and can override vetoes with a 2/3 majority.",
        meeting_schedule: "Daily at dawn, emergency sessions as needed",
        current_session: "Emergency Session - Iron Mandate Response",
        members: [
            { 
                id: "elder_mudcap",
                name: "Elder Mudcap", 
                cohort: "Barrel Survivors", 
                seat: 1, 
                level: 5, 
                loyalty: 95,
                portrait: "🐸👴",
                stance: "Conservative",
                description: "The oldest of the barrel survivors. Speaks for the traumatized majority.",
                current_vote: "Strategic Withdrawal"
            },
            { 
                id: "captain_fernback",
                name: "Captain Fernback", 
                cohort: "Pond Patrol", 
                seat: 2, 
                level: 6, 
                loyalty: 100,
                portrait: "🐸🛡️",
                stance: "Loyalist",
                description: "Fanatically devoted to Speaker L. Commands the enforcement arm.",
                current_vote: "Strategic Withdrawal"
            },
            { 
                id: "scribe_dewdrop",
                name: "Scribe Dewdrop", 
                cohort: "The Chroniclers", 
                seat: 3, 
                level: 4, 
                loyalty: 85,
                portrait: "🐸📜",
                stance: "Moderate",
                description: "Maintains faction records. Values knowledge over conflict.",
                current_vote: "Diplomatic Outreach"
            },
            { 
                id: "forgemaster_ironspore",
                name: "Forgemaster Ironspore", 
                cohort: "The Crafters", 
                seat: 4, 
                level: 5, 
                loyalty: 90,
                portrait: "🐸🔨",
                stance: "Pragmatic",
                description: "Keeps the Vigilance running. Practical above all.",
                current_vote: "Strategic Withdrawal"
            },
            { 
                id: "warden_thornshell",
                name: "Warden Thornshell", 
                cohort: "The Wardens", 
                seat: 5, 
                level: 5, 
                loyalty: 88,
                portrait: "🐸⚔️",
                stance: "Militant",
                description: "Commands the combat forces. Favors direct action.",
                current_vote: "Armed Resistance"
            },
            { 
                id: "healer_mistpetal",
                name: "Healer Mistpetal", 
                cohort: "The Menders", 
                seat: 6, 
                level: 6, 
                loyalty: 92,
                portrait: "🐸💚",
                stance: "Humanitarian",
                description: "Leads medical operations. Prioritizes lives above all.",
                current_vote: "Diplomatic Outreach"
            },
            { 
                id: "vacant_scout",
                name: "VACANT", 
                cohort: "The Scouts", 
                seat: 7, 
                level: null, 
                loyalty: null,
                portrait: "❓",
                stance: null,
                description: "Previous holder was The Mole - an Iron Legion spy. Seat remains unfilled.",
                note: "Betrayer defected Day 16",
                current_vote: null
            }
        ]
    },
    
    cohorts: [
        {
            id: "pond_patrol",
            name: "Pond Patrol",
            icon: "🛡️",
            color: "#4a9c6d",
            leader: "Captain Fernback",
            purpose: "Security, enforcement of Speaker L's decrees, protection of the Cohort",
            role: "Elite enforcement arm, directly commanded by Speaker L",
            members: 24,
            maxMembers: 30,
            loyalty: 100,
            morale: 85,
            combatReadiness: 95,
            status: "active",
            statusDetail: "On high alert following Iron Mandate",
            description: "The elite enforcement arm of the Liberated Toads. Hand-picked by Captain Fernback for loyalty and skill. Fanatically devoted to Speaker L.",
            equipment: ["Standard arms", "Patrol gear", "Restraint equipment"],
            specializations: ["Containment", "Apprehension", "Protection"],
            notable_members: [
                { name: "Sergeant Pondscum", level: 4, role: "Second-in-command" },
                { name: "Corporal Lilystalker", level: 3, role: "Night watch captain" }
            ]
        },
        {
            id: "barrel_survivors",
            name: "Barrel Survivors",
            icon: "🪣",
            color: "#8b7355",
            leader: "Elder Mudcap",
            purpose: "The original 150 trafficked toads - the heart of the movement",
            role: "Core membership, moral authority of the faction",
            members: 147,
            maxMembers: 150,
            loyalty: 88,
            morale: 62,
            combatReadiness: 35,
            status: "recovering",
            statusDetail: "Many still traumatized; 3 confirmed deceased",
            description: "The traumatized survivors of the barrel trafficking operation. Many still bear psychological and physical scars. They are the reason the Liberated Toads exist.",
            casualties: {
                deceased: 3,
                missing: 0,
                critical: 12,
                recovering: 28
            },
            specializations: ["Testimony", "Unity", "Moral authority"],
            notable_members: [
                { name: "Mudwhisper", level: 2, role: "Elder Mudcap's aide", note: "First to speak out about conditions" },
                { name: "Croakston", level: 1, role: "Barrel 47 survivor", note: "Lost family in transit" }
            ]
        },
        {
            id: "chroniclers",
            name: "The Chroniclers",
            icon: "📜",
            color: "#c9a227",
            leader: "Scribe Dewdrop",
            purpose: "Record keeping, intelligence analysis, education, history preservation",
            role: "Information management and institutional memory",
            members: 12,
            maxMembers: 20,
            loyalty: 85,
            morale: 78,
            combatReadiness: 15,
            status: "active",
            statusDetail: "Documenting current crisis extensively",
            description: "Scholars and scribes who maintain the faction's records, analyze intelligence, and preserve the stories of liberation. They ensure nothing is forgotten.",
            equipment: ["Writing supplies", "Archive materials", "Cipher books"],
            specializations: ["Documentation", "Intelligence analysis", "Education"],
            notable_members: [
                { name: "Inkspot", level: 3, role: "Chief archivist" },
                { name: "Quillback", level: 2, role: "Intelligence analyst" }
            ]
        },
        {
            id: "crafters",
            name: "The Crafters",
            icon: "🔨",
            color: "#cd7f32",
            leader: "Forgemaster Ironspore",
            purpose: "Equipment maintenance, construction, repairs, supply management",
            role: "Keep the faction equipped and the Vigilance operational",
            members: 18,
            maxMembers: 25,
            loyalty: 90,
            morale: 80,
            combatReadiness: 40,
            status: "active",
            statusDetail: "Working overtime on ship repairs",
            description: "Skilled artisans who maintain equipment, repair the Vigilance, and craft what the faction needs. Practical problem-solvers.",
            equipment: ["Workshop tools", "Repair materials", "Salvage equipment"],
            specializations: ["Ship repair", "Weapon maintenance", "Construction"],
            notable_members: [
                { name: "Gearspore", level: 3, role: "Ship engineer" },
                { name: "Hammerling", level: 3, role: "Weapons smith" }
            ]
        },
        {
            id: "wardens",
            name: "The Wardens",
            icon: "⚔️",
            color: "#c94a4a",
            leader: "Warden Thornshell",
            purpose: "Combat operations, defense, external threats, prisoner management",
            role: "Primary fighting force, distinct from Pond Patrol's enforcement role",
            members: 22,
            maxMembers: 35,
            loyalty: 88,
            morale: 75,
            combatReadiness: 85,
            status: "strained",
            statusDetail: "Losses from recent engagements; stretched thin",
            description: "The primary fighting force of the Liberated Toads. They handle external threats while the Pond Patrol handles internal order.",
            equipment: ["Combat gear", "Defensive armaments", "Field supplies"],
            specializations: ["Combat", "Defense", "Prisoner escort"],
            casualties: {
                deceased: 2,
                wounded: 5,
                recovering: 3
            },
            notable_members: [
                { name: "Spearwort", level: 4, role: "Combat instructor" },
                { name: "Shieldback", level: 3, role: "Defense coordinator" }
            ]
        },
        {
            id: "menders",
            name: "The Menders",
            icon: "💚",
            color: "#27ae60",
            leader: "Healer Mistpetal",
            purpose: "Medical care, psychological support, recovery assistance",
            role: "Keep the faction alive and mentally stable",
            members: 15,
            maxMembers: 20,
            loyalty: 92,
            morale: 70,
            combatReadiness: 20,
            status: "overwhelmed",
            statusDetail: "Too many patients, not enough healers",
            description: "Healers and caretakers stretched thin by the faction's many wounded. They treat both body and mind.",
            equipment: ["Medical supplies", "Healing herbs", "Psychological care materials"],
            specializations: ["Trauma care", "Psychological support", "Recovery"],
            current_patients: {
                critical: 4,
                serious: 8,
                recovering: 15,
                psychological: 28
            },
            notable_members: [
                { name: "Soothing Moss", level: 4, role: "Chief surgeon" },
                { name: "Gentlepad", level: 3, role: "Psychological counselor" }
            ]
        },
        {
            id: "scouts",
            name: "The Scouts",
            icon: "👁️",
            color: "#9b59b6",
            leader: "VACANT",
            purpose: "Reconnaissance, infiltration, information gathering, early warning",
            role: "Eyes and ears of the faction beyond the ship",
            members: 8,
            maxMembers: 15,
            loyalty: 65,
            morale: 45,
            combatReadiness: 70,
            status: "compromised",
            statusDetail: "Previous leader was Iron Legion mole; trust shattered",
            description: "Reeling from the revelation that their previous leader was an Iron Legion mole. Many question if other spies remain.",
            equipment: ["Stealth gear", "Communication devices", "Disguises"],
            specializations: ["Reconnaissance", "Infiltration", "Signals"],
            concerns: [
                "Possible remaining infiltrators",
                "Compromised safe houses",
                "Burned cover identities"
            ],
            notable_members: [
                { name: "Shadowleap", level: 4, role: "Acting leader (unofficial)" },
                { name: "Whispertail", level: 3, role: "Signal specialist" }
            ]
        },
        {
            id: "unassigned",
            name: "The Unassigned",
            icon: "❓",
            color: "#7f8c8d",
            leader: null,
            purpose: "New arrivals, recovering members, those between assignments",
            role: "Transition pool for cohort assignment",
            members: 31,
            maxMembers: null,
            loyalty: 70,
            morale: 55,
            combatReadiness: 25,
            status: "transitional",
            statusDetail: "Awaiting assignment or recovery",
            description: "Toads who have not yet been assigned to a cohort, are recovering from injuries, or are between assignments. Some are new rescues.",
            breakdown: {
                new_arrivals: 8,
                recovering: 12,
                pending_assignment: 7,
                disciplinary: 4
            }
        }
    ]
};

// ========================================
// VOTING SYSTEM
// ========================================
function renderHeroesCouncilPanel() {
    const heroes = GOVERNANCE.heroes_council;
    
    return `
        <div class="heroes-council-panel">
            <div class="heroes-header">
                <div class="heroes-icon">⭐</div>
                <div class="heroes-info">
                    <h3>${heroes.name}</h3>
                    <div class="heroes-authority">${heroes.authority}</div>
                </div>
                <div class="heroes-quorum">
                    <span class="quorum-count">${heroes.active_members}/${heroes.seats.length}</span>
                    <span class="quorum-label">Active</span>
                </div>
            </div>
            
            <p class="heroes-description">${heroes.description}</p>
            
            <div class="heroes-section">
                <h4>Special Privileges</h4>
                <div class="privileges-grid">
                    ${heroes.privileges.map(p => `
                        <div class="privilege-card">
                            <div class="privilege-name">${p.name}</div>
                            <div class="privilege-desc">${p.description}</div>
                            <div class="privilege-req"><strong>Requires:</strong> ${p.requires}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="heroes-section">
                <h4>The Liberators</h4>
                <div class="liberators-grid">
                    ${heroes.seats.map(seat => {
                        const toad = CORE_TOADS[seat.id];
                        const canAct = seat.canVote;
                        
                        return `
                            <div class="liberator-card ${canAct ? 'active' : 'inactive'}">
                                <div class="liberator-header">
                                    <div class="liberator-portrait">${toad?.portrait || '🐸'}</div>
                                    <div class="liberator-info">
                                        <div class="liberator-name">${seat.name}</div>
                                        <div class="liberator-title">${seat.title}</div>
                                        <div class="liberator-status ${seat.status.toLowerCase().replace(' ', '-')}">${seat.status}</div>
                                    </div>
                                    <div class="liberator-vote-status">
                                        ${canAct ? '✓ Can Act' : '✗ Cannot Act'}
                                    </div>
                                </div>
                                <div class="liberator-notes">${seat.notes}</div>
                                <div class="liberator-contributions">
                                    <strong>Key Contributions:</strong>
                                    <ul>
                                        ${seat.contributions.map(c => `<li>${c}</li>`).join('')}
                                    </ul>
                                </div>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            <div class="heroes-section">
                <h4>Recent Actions</h4>
                <div class="recent-actions-list">
                    ${heroes.recent_actions.map(a => `
                        <div class="action-item">
                            <span class="action-day">Day ${a.day}</span>
                            <span class="action-text">${a.action}</span>
                            <span class="action-result result-${a.result.toLowerCase()}">${a.result}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="speaker-relationship-box">
                <h4>Relationship with Speaker L</h4>
                <div class="relationship-status">${heroes.speaker_relationship.status}</div>
                <p>${heroes.speaker_relationship.notes}</p>
            </div>
        </div>
    `;
}
const VOTING_SYSTEM = {
    types: {
        emergency: { 
            name: "Emergency Vote", 
            threshold: "Simple Majority (4/7)", 
            duration: "1 hour", 
            caller: "Speaker L only (Currently suspended)",
            description: "For immediate crises requiring rapid response"
        },
        standard: { 
            name: "Standard Vote", 
            threshold: "Simple Majority (4/7)", 
            duration: "24 hours", 
            caller: "Any Council Member",
            description: "Normal faction business and policy decisions"
        },
        constitutional: { 
            name: "Constitutional Vote", 
            threshold: "2/3 Majority (5/7)", 
            duration: "48 hours", 
            caller: "3+ Council Members",
            description: "Changes to faction structure or fundamental policies"
        },
        override: { 
            name: "Speaker Override", 
            threshold: "2/3 Majority (5/7)", 
            duration: "12 hours", 
            caller: "4+ Council Members",
            description: "Override a Speaker veto or emergency decree"
        },
        impeachment: {
            name: "Impeachment Vote",
            threshold: "Unanimous (6/6 non-Speaker)",
            duration: "72 hours",
            caller: "All Council Members",
            description: "Remove Speaker L from power (never invoked)"
        }
    },
    
    active_votes: [
        {
            id: "V-2021-002", // Updated ID
            title: "CRISIS RESPONSE: ORDER 120",
            type: "emergency",
            status: "active",
            proposed_by: "Captain Fernback", // Speaker L is missing/decoy
            proposed_date: { day: 21, monthIndex: 6, year: 1040, hour: 14, minute: 45 },
            deadline: { day: 21, monthIndex: 6, year: 1040, hour: 15, minute: 45 },
            description: "General Ironhand has issued 'Order 120': The immediate execution of all Toad prisoners at Aegis Command. Bones is confirmed among them, critically wounded. The 'Speaker L' in custody is confirmed to be a decoy.",
            background: "We have less than an hour before executions begin. The infiltration team (Creek) is pinned down.",
            options: [
                { 
                    id: "A", 
                    text: "Suicide Assault - Throw everything at Aegis Command immediately", 
                    votes: 2, 
                    voters: ["Warden Thornshell", "Captain Fernback"],
                    pros: ["Only chance to save them", "Honor"],
                    cons: ["Likely total faction wipeout", "Aegis is a fortress"]
                },
                { 
                    id: "B", 
                    text: "The hjumpik Bargain - Use the Oracle as leverage (hjumpik's connection)", 
                    votes: 1, 
                    voters: ["Forgemaster Ironspore"],
                    pros: ["Diplomatic leverage", "High value trade"],
                    cons: ["Requires hjumpik's cooperation", "Betrays the Oracle"]
                },
                { 
                    id: "C", 
                    text: "Distraction Strike - Hit a different target to draw forces away", 
                    votes: 1, 
                    voters: ["Scribe Dewdrop"],
                    pros: ["Lower risk", "Strategic"],
                    cons: ["Might not stop executions in time"]
                }
            ],
            speaker_recommendation: null, // Speaker L is missing
            speaker_statement: "SPEAKER ABSENT. CAPTAIN FERNBACK ASSUMING TEMPORARY COMMAND.",
            quorum_required: 4,
            current_quorum: 4,
            notes: "Situation critical. Bones life signs fading."
        },        
        {
            id: "V-2021-001",
            title: "Response to the Iron Mandate",
            type: "emergency",
            status: "suspended",
            proposed_by: "Speaker L (Decoy?)",
            proposed_date: { day: 21, monthIndex: 6, year: 1040, hour: 10, minute: 0 },
            deadline: { day: 21, monthIndex: 6, year: 1040, hour: 11, minute: 0 },
            description: "Suspended due to active combat scenario (Order 120).",
            background: "Speaker Rivers resigned in protest. Legion patrols are mobilizing immediately. We have perhaps hours before they reach our position.",
            options: [
                { 
                    id: "A", 
                    text: "Full Evacuation - Abandon the Vigilance and scatter to pre-arranged safe houses", 
                    votes: 0, 
                    voters: [],
                    pros: ["Maximum survival chance", "Preserves lives"],
                    cons: ["Loses Vigilance", "Fractures faction", "Abandons wounded"]
                },
                { 
                    id: "B", 
                    text: "Diplomatic Outreach - Contact moderate Diet members and attempt negotiation", 
                    votes: 2, 
                    voters: ["Scribe Dewdrop", "Healer Mistpetal"],
                    pros: ["Non-violent", "Possible allies", "Buys time"],
                    cons: ["May be too slow", "Relies on others' goodwill"]
                },
                { 
                    id: "C", 
                    text: "Armed Resistance - Fortify current position and prepare for siege", 
                    votes: 1, 
                    voters: ["Warden Thornshell"],
                    pros: ["Shows strength", "Protects wounded"],
                    cons: ["High casualties likely", "Creates martyrs", "May be unwinnable"]
                },
                { 
                    id: "D", 
                    text: "Strategic Withdrawal - Relocate Vigilance to allied territory (Rakasha lands)", 
                    votes: 3, 
                    voters: ["Elder Mudcap", "Captain Fernback", "Forgemaster Ironspore"],
                    pros: ["Preserves faction", "Maintains Vigilance", "Potential allies"],
                    cons: ["Unknown reception", "Distance from MK civil war"]
                }
            ],
            speaker_recommendation: "D",
            speaker_statement: "Vote suspended.",
            quorum_required: 4,
            current_quorum: 0,
            notes: "Superseded by V-2021-002"
        },
        {
            id: "V-2021-002",
            title: "Fate of the Iron Legion Prisoners",
            type: "standard",
            status: "pending",
            proposed_by: "Warden Thornshell",
            proposed_date: { day: 20, monthIndex: 6, year: 1040, hour: 14, minute: 0 },
            deadline: { day: 21, monthIndex: 6, year: 1040, hour: 14, minute: 0 },
            description: "We hold 6 Iron Legion soldiers captured during various engagements. With the Iron Mandate now in effect, their status becomes more complicated.",
            prisoners: [
                { name: "Sergeant Ironside", rank: "NCO", captured: "Day 16", condition: "Healthy" },
                { name: "Private Steelhelm", rank: "Enlisted", captured: "Day 16", condition: "Minor wounds" },
                { name: "Private Chainlink", rank: "Enlisted", captured: "Day 16", condition: "Healthy" },
                { name: "Private Rustguard", rank: "Enlisted", captured: "Day 20", condition: "Healthy" },
                { name: "Corporal Boltcutter", rank: "NCO", captured: "Day 20", condition: "Serious wounds" },
                { name: "Private Shieldwall", rank: "Enlisted", captured: "Day 20", condition: "Healthy" }
            ],
            options: [
                { 
                    id: "A", 
                    text: "Execute as enemy combatants under wartime protocols", 
                    votes: 1, 
                    voters: ["Warden Thornshell"],
                    pros: ["Eliminates threat", "Sends message"],
                    cons: ["Moral cost", "Propaganda for Legion", "Speaker unlikely to authorize"]
                },
                { 
                    id: "B", 
                    text: "Prisoner exchange - Trade for Bones and any other captured toads", 
                    votes: 2, 
                    voters: ["Elder Mudcap", "Captain Fernback"],
                    pros: ["Recovers our people", "Establishes precedent"],
                    cons: ["Legion may not negotiate", "Returns soldiers to enemy"]
                },
                { 
                    id: "C", 
                    text: "Release with a message - Let them go with terms for future engagement", 
                    votes: 1, 
                    voters: ["Scribe Dewdrop"],
                    pros: ["Shows mercy", "Possible future goodwill"],
                    cons: ["Returns soldiers", "May appear weak"]
                },
                { 
                    id: "D", 
                    text: "Continue detention pending formal trial", 
                    votes: 1, 
                    voters: ["Healer Mistpetal"],
                    pros: ["Maintains options", "Proper process"],
                    cons: ["Resource drain", "Indefinite situation"]
                }
            ],
            speaker_recommendation: "B",
            speaker_statement: "Bones was taken under my watch. I want him back. If we can trade soldiers for our people, we should.",
            quorum_required: 4,
            current_quorum: 5,
            notes: "Forgemaster Ironspore has abstained, citing conflict of interest - his brother was killed by the Legion."
        }
    ],
    
    recent_votes: [
        {
            id: "V-2016-001",
            title: "The Scavenging Doctrine",
            type: "standard",
            status: "passed",
            result: "Option B (Dan's Proposal) - Large cautious expeditions",
            final_tally: { for: 5, against: 1, abstain: 0 },
            date: { day: 16, monthIndex: 6, year: 1040 },
            summary: "Established protocol for larger, more cautious resource gathering expeditions over Archie's proposed small high-risk teams. This marked a significant return to influence for Dan and a shift toward safety.",
            long_term_effects: "Resource gathering slowed but casualties reduced"
        },
        {
            id: "V-2018-001",
            title: "Emergency Resolution 17-A",
            type: "constitutional",
            status: "passed",
            result: "Enacted - Speaker L granted emergency powers",
            final_tally: { for: 6, against: 0, abstain: 0 },
            date: { day: 18, monthIndex: 6, year: 1040 },
            summary: "Granted Speaker L emergency powers following the Raventree Manor crisis. Established the Accountability Docket. Created the current governance structure.",
            long_term_effects: "Centralized authority, increased order, some liberty concerns"
        },
        {
            id: "V-2019-001",
            title: "Containment of Raventree Manor",
            type: "emergency",
            status: "passed",
            result: "Enacted - Perimeter established",
            final_tally: { for: 5, against: 1, abstain: 0 },
            date: { day: 19, monthIndex: 6, year: 1040 },
            summary: "Authorized the Pond Patrol to establish a containment perimeter around Raventree Manor to prevent supernatural threats from spreading.",
            dissent: "Healer Mistpetal voted against, concerned about cutting off trapped individuals",
            long_term_effects: "Manor contained but situation unresolved"
        },
        {
            id: "V-2018-002",
            title: "Medical Priority Protocol",
            type: "standard",
            status: "passed",
            result: "Enacted - Triage system established",
            final_tally: { for: 6, against: 0, abstain: 0 },
            date: { day: 18, monthIndex: 6, year: 1040 },
            summary: "Established formal triage protocols for the overwhelmed Menders cohort. Core party members do not receive priority over other toads.",
            long_term_effects: "Fair but slower treatment for high-profile patients"
        }
    ]
};

// ========================================
// ACCOUNTABILITY DOCKET
// ========================================

const ACCOUNTABILITY_DOCKET = {
    authority: "Emergency Resolution 17-A",
    established: "Day 18",
    enforcer: "Pond Patrol under Captain Fernback",
    protocol: "Apprehend, but do not slay. Lethal force denied unless by threat defied.",
    purpose: "To account for actions that endangered the Cohort, not as punishment but as restoration",
    
    quote: {
        text: "This is not retribution's art, but the mending of the fractured heart. By pond and law, by vow and steel, the wound must close for peace to heal.",
        speaker: "Speaker L, Day 18"
    },
    
    pillars: [
        { name: "CONTAIN", icon: "🛡️", description: "Halt the spread of disorder" },
        { name: "ACCOUNT", icon: "📜", description: "Every action has a cost that must be acknowledged" },
        { name: "RESTORE", icon: "🔨", description: "Rebuild what was broken, heal what was wounded" },
        { name: "ADHERE", icon: "⚔️", description: "To the Will of the Cohort, as spoken by the Council" }
    ],
    
    targets: [
        { 
            name: "Archie Miser", 
            id: "archie",
            status: "at_large",
            priority: "high",
            portrait: "🧙",
            crimes: [
                "Reckless Mind - Loss of magical control",
                "Greenhouse Inferno - Destruction of property, injury to allies",
                "Casualties resulting from uncontrolled spellcasting"
            ],
            evidence: [
                "Multiple witness accounts",
                "Physical damage to Raventree Manor",
                "Archie's own public confession on WAHbook"
            ],
            notes: "Escaped custody with help from an Iron Legion spy named 'Jerry'. Last seen traversing alien dimensions via his Third Eye. Considered magically unstable and dangerous, but not malicious.",
            last_seen: "Day 20 - Dimensional breach at Raventree Manor",
            bounty: null,
            added: "Day 18",
            speaker_note: "Archie is not evil. He is broken. We seek to help him, not destroy him."
        },
        { 
            name: "King Bowser", 
            id: "bowser",
            status: "complicated",
            priority: "medium",
            portrait: "🐢",
            crimes: [
                "Flame without Restraint - Collateral fire damage",
                "Destruction of Infrastructure aboard the Vigilance"
            ],
            evidence: [
                "Burn damage assessment",
                "Witness accounts"
            ],
            notes: "Current whereabouts unknown. May be with Wally/Waluigi. Political complications due to his status as former Koopa King and current alliance with the party. His cooperation in the X.O. confrontation is noted.",
            last_seen: "Day 20 - Raventree Manor area",
            bounty: null,
            added: "Day 18",
            speaker_note: "Bowser is an ally, but his flames have cost us. Accountability, not vengeance."
        },
        { 
            name: "Waluigi", 
            id: "waluigi",
            status: "at_large",
            priority: "medium",
            portrait: "💜",
            crimes: [
                "Jester's Sin - Chaotic magical behavior",
                "Breach of Lab and Discipline",
                "The Cone of Cold Incident - Nearly killed Eager"
            ],
            evidence: [
                "Frozen damage to crew",
                "Laboratory breach evidence",
                "Eager's medical records"
            ],
            notes: "Escaped Raventree Manor on a summoned wyvern with Green T. Known for unpredictable magical outbursts. Owns the cursed mansion. Unclear if genuinely malicious or simply chaotic.",
            last_seen: "Day 20 - Fleeing Raventree Manor on wyvern",
            bounty: null,
            added: "Day 18",
            speaker_note: "The purple one is chaos incarnate. Approach with extreme caution."
        },
        { 
            name: "Dan", 
            id: "dan_docket",
            status: "probationary_active", // Updated
            priority: "low",
            portrait: "🐸⚔️",
            crimes: [
                "Unstable Hand - Magic Endangerment",
            ],
            evidence: ["Witness accounts"],
            notes: "Returned to active duty during Wraith attack despite injuries. Demonstrated control and loyalty. Charges suspended pending review.",
            last_seen: "Day 21 - Raventree Manor (Combat)",
            bounty: null,
            added: "Day 18",
            speaker_note: "His spirit is unbroken. He fights for us still."
        },
        { 
            name: "Eager", 
            id: "eager_docket",
            status: "active", // Updated
            priority: "low",
            portrait: "🐸🗡️",
            crimes: [
                "Blind Loyalty - Crossing the Line of Engagement",
                "Disobeying direct orders in combat"
            ],
            evidence: [
                "After-action reports",
                "Witness accounts"
            ],
            notes: "Awakened from coma. Immediately rejoined combat operations in the Silent Grove. Current whereabouts: Feywild fracture.",
            last_seen: "Day 21 - Silent Grove",
            bounty: null,
            added: "Day 18",
            speaker_note: "Eager's heart was in the right place. His body paid the price, and he paid it again."
        },
        { 
            name: "Green Decoy (Unknown ID)", 
            id: "green_decoy",
            status: "captured_by_legion",
            priority: "medium",
            portrait: "🐸🟢",
            crimes: [
                "Impersonating an Officer",
                "Spreading False Doctrine ('The Fractured Heart')",
                "Endangering the Cohort"
            ],
            evidence: ["Interrogation logs from Bones"],
            notes: "Toad claiming to be Speaker L. Captured by Legion. Claimed skin turned green from mushrooms. Spouting cult rhetoric.",
            last_seen: "Day 21 - Aegis Command Interrogation Room",
            bounty: null,
            added: "Day 21",
            speaker_note: "Who is this impostor? And who taught him our codes?"
        }
    ],    
    resolved: [
        {
            name: "The Mole (Identity: Unknown)",
            resolution: "Escaped with Iron Legion forces",
            date: "Day 16",
            crimes: ["Infiltration", "Espionage", "Conspiracy to capture Cohort members"],
            notes: "True identity never confirmed. Operated as trusted Scout cohort leader before betrayal. Responsible for Bones' capture and compromising faction security.",
            speaker_note: "This one will face the Pond's justice. Someday."
        }
    ]
};

// ========================================
// CLASS & ABILITY DEFINITIONS
// ========================================

const ABILITY_TYPES = {
    combat: { icon: "⚔️", color: "#c94a4a", name: "Combat" },
    magic: { icon: "✨", color: "#9b59b6", name: "Magic" },
    support: { icon: "💚", color: "#4a9c6d", name: "Support" },
    utility: { icon: "🔧", color: "#c9a227", name: "Utility" },
    leadership: { icon: "👑", color: "#e67e22", name: "Leadership" },
    stealth: { icon: "🌑", color: "#34495e", name: "Stealth" },
    divine: { icon: "☀️", color: "#f1c40f", name: "Divine" }
};

const CLASS_DEFINITIONS = {
    paladin: {
        name: "Paladin",
        icon: "⚔️",
        description: "Holy warriors who blend martial prowess with divine magic",
        primary_stat: "cha",
        secondary_stat: "str",
        hit_die: 10,
        armor_proficiency: ["All armor", "Shields"],
        weapon_proficiency: ["Simple weapons", "Martial weapons"],
        saving_throws: ["wis", "cha"],
        skills: [
            { name: "Divine Sense", level: 1, type: "divine", icon: "👁️", description: "Detect celestial, fiend, or undead within 60 feet" },
            { name: "Lay on Hands", level: 1, type: "support", icon: "🤲", description: "Heal wounds with a pool of healing power equal to level × 5 HP" },
            { name: "Divine Smite", level: 2, type: "combat", icon: "⚔️", description: "Expend spell slot to deal 2d8+ extra radiant damage on hit" },
            { name: "Divine Health", level: 3, type: "utility", icon: "🛡️", description: "Immune to disease" },
            { name: "Sacred Oath", level: 3, type: "divine", icon: "📜", description: "Swear an oath that grants additional powers" },
            { name: "Extra Attack", level: 5, type: "combat", icon: "⚔️⚔️", description: "Attack twice when taking the Attack action" },
            { name: "Aura of Protection", level: 6, type: "support", icon: "✨", description: "You and allies within 10 feet add your CHA modifier to all saving throws" },
            { name: "Aura of Courage", level: 10, type: "leadership", icon: "🦁", description: "You and allies within 10 feet can't be frightened" },
            { name: "Improved Divine Smite", level: 11, type: "combat", icon: "💥", description: "All melee weapon attacks deal an extra 1d8 radiant damage" },
            { name: "Cleansing Touch", level: 14, type: "support", icon: "🌟", description: "End one spell on yourself or willing creature with a touch" }
        ]
    },
    rogue: {
        name: "Rogue",
        icon: "🗡️",
        description: "Skilled infiltrators and precise strikers who rely on finesse",
        primary_stat: "dex",
        secondary_stat: "int",
        hit_die: 8,
        armor_proficiency: ["Light armor"],
        weapon_proficiency: ["Simple weapons", "Hand crossbows", "Longswords", "Rapiers", "Shortswords"],
        saving_throws: ["dex", "int"],
        skills: [
            { name: "Sneak Attack", level: 1, type: "combat", icon: "🗡️", description: "Deal extra 1d6 damage (scales) when you have advantage or ally is adjacent" },
            { name: "Thieves' Cant", level: 1, type: "utility", icon: "🗣️", description: "Secret language and symbols known to rogues and criminals" },
            { name: "Cunning Action", level: 2, type: "utility", icon: "💨", description: "Dash, Disengage, or Hide as a bonus action" },
            { name: "Roguish Archetype", level: 3, type: "utility", icon: "🎭", description: "Choose a specialization that grants additional features" },
            { name: "Uncanny Dodge", level: 5, type: "combat", icon: "🌀", description: "Use reaction to halve damage from an attack you can see" },
            { name: "Evasion", level: 7, type: "combat", icon: "💫", description: "Take no damage on successful DEX saves, half on failure" },
            { name: "Reliable Talent", level: 11, type: "utility", icon: "🎯", description: "Minimum roll of 10 on any skill you're proficient in" },
            { name: "Blindsense", level: 14, type: "utility", icon: "👁️", description: "Detect invisible creatures within 10 feet" },
            { name: "Slippery Mind", level: 15, type: "utility", icon: "💭", description: "Gain proficiency in Wisdom saving throws" },
            { name: "Elusive", level: 18, type: "combat", icon: "🌫️", description: "No attack has advantage against you while you're not incapacitated" }
        ]
    },
    barbarian: {
        name: "Barbarian",
        icon: "💪",
        description: "Fierce warriors who channel primal fury into devastating combat prowess",
        primary_stat: "str",
        secondary_stat: "con",
        hit_die: 12,
        armor_proficiency: ["Light armor", "Medium armor", "Shields"],
        weapon_proficiency: ["Simple weapons", "Martial weapons"],
        saving_throws: ["str", "con"],
        skills: [
            { name: "Rage", level: 1, type: "combat", icon: "😤", description: "Enter a battle fury: +2 damage, resistance to physical damage, advantage on STR checks" },
            { name: "Unarmored Defense", level: 1, type: "combat", icon: "💪", description: "AC equals 10 + DEX modifier + CON modifier when not wearing armor" },
            { name: "Reckless Attack", level: 2, type: "combat", icon: "💢", description: "Gain advantage on attacks this turn, but attacks against you have advantage" },
            { name: "Danger Sense", level: 2, type: "utility", icon: "⚡", description: "Advantage on DEX saves against effects you can see" },
            { name: "Primal Path", level: 3, type: "combat", icon: "🐺", description: "Choose a path that defines your rage" },
            { name: "Extra Attack", level: 5, type: "combat", icon: "⚔️⚔️", description: "Attack twice when taking the Attack action" },
            { name: "Fast Movement", level: 5, type: "utility", icon: "🏃", description: "+10 feet to speed when not wearing heavy armor" },
            { name: "Feral Instinct", level: 7, type: "utility", icon: "🐺", description: "Advantage on initiative, can act while surprised if you rage first" },
            { name: "Brutal Critical", level: 9, type: "combat", icon: "💀", description: "Roll one additional damage die on critical hits" },
            { name: "Relentless Rage", level: 11, type: "combat", icon: "🔥", description: "If you drop to 0 HP while raging, DC 10 CON save to stay at 1 HP" },
            { name: "Persistent Rage", level: 15, type: "combat", icon: "♾️", description: "Rage only ends early if you choose or fall unconscious" },
            { name: "Primal Champion", level: 20, type: "combat", icon: "👑", description: "STR and CON increase by 4, maximum of 24" }
        ]
    },
    wizard: {
        name: "Wizard",
        icon: "📚",
        description: "Scholarly spellcasters who master arcane arts through study and practice",
        primary_stat: "int",
        secondary_stat: "wis",
        hit_die: 6,
        armor_proficiency: [],
        weapon_proficiency: ["Daggers", "Darts", "Slings", "Quarterstaffs", "Light crossbows"],
        saving_throws: ["int", "wis"],
        spellcasting: true,
        skills: [
            { name: "Spellcasting", level: 1, type: "magic", icon: "📖", description: "Cast wizard spells using Intelligence as spellcasting ability" },
            { name: "Arcane Recovery", level: 1, type: "magic", icon: "🔮", description: "Recover spell slots equal to half wizard level (rounded up) on short rest" },
            { name: "Arcane Tradition", level: 2, type: "magic", icon: "🏛️", description: "Choose a school of magic specialization (Evocation, Abjuration, etc.)" },
            { name: "Spell Mastery", level: 18, type: "magic", icon: "👑", description: "Cast one 1st and one 2nd level spell at will" },
            { name: "Signature Spells", level: 20, type: "magic", icon: "⭐", description: "Two 3rd level spells always prepared and can cast once each for free" }
        ],
        spells_by_level: {
            cantrips: ["Fire Bolt", "Mage Hand", "Prestidigitation", "Light", "Ray of Frost", "Minor Illusion"],
            1: ["Magic Missile", "Shield", "Detect Magic", "Mage Armor", "Identify", "Sleep", "Charm Person"],
            2: ["Misty Step", "Scorching Ray", "Invisibility", "Darkness", "Hold Person", "Web"],
            3: ["Fireball", "Counterspell", "Dispel Magic", "Fly", "Lightning Bolt", "Haste"],
            4: ["Greater Invisibility", "Polymorph", "Wall of Fire", "Dimension Door", "Banishment"],
            5: ["Cone of Cold", "Wall of Force", "Telekinesis", "Hold Monster", "Dominate Person"]
        }
    },
    fighter: {
        name: "Fighter",
        icon: "🛡️",
        description: "Masters of martial combat with unparalleled weapon expertise",
        primary_stat: "str",
        secondary_stat: "con",
        hit_die: 10,
        armor_proficiency: ["All armor", "Shields"],
        weapon_proficiency: ["Simple weapons", "Martial weapons"],
        saving_throws: ["str", "con"],
        skills: [
            { name: "Fighting Style", level: 1, type: "combat", icon: "🎯", description: "Choose a specialized combat technique (Defense, Dueling, etc.)" },
            { name: "Second Wind", level: 1, type: "support", icon: "💨", description: "Recover 1d10 + fighter level HP as a bonus action, once per rest" },
            { name: "Action Surge", level: 2, type: "combat", icon: "⚡", description: "Take one additional action on your turn, once per rest" },
            { name: "Martial Archetype", level: 3, type: "combat", icon: "⚔️", description: "Choose a specialization (Champion, Battle Master, etc.)" },
            { name: "Extra Attack", level: 5, type: "combat", icon: "⚔️⚔️", description: "Attack twice when taking the Attack action" },
            { name: "Extra Attack (2)", level: 11, type: "combat", icon: "⚔️⚔️⚔️", description: "Attack three times when taking the Attack action" },
            { name: "Indomitable", level: 9, type: "utility", icon: "🛡️", description: "Reroll a failed saving throw, once per rest" },
            { name: "Extra Attack (3)", level: 20, type: "combat", icon: "⚔️⚔️⚔️⚔️", description: "Attack four times when taking the Attack action" }
        ]
    },
    gunslinger: {
        name: "Gunslinger",
        icon: "🔫",
        description: "Firearms specialists with uncanny aim and trick shots",
        primary_stat: "dex",
        secondary_stat: "wis",
        hit_die: 8,
        armor_proficiency: ["Light armor"],
        weapon_proficiency: ["Simple weapons", "Firearms"],
        saving_throws: ["dex", "wis"],
        skills: [
            { name: "Firearm Proficiency", level: 1, type: "combat", icon: "🔫", description: "Proficient with all firearms, can craft ammunition" },
            { name: "Grit", level: 1, type: "utility", icon: "💪", description: "Pool of grit points (WIS mod, min 1) for trick shots. Regained on crits/kills." },
            { name: "Deadeye Shot", level: 2, type: "combat", icon: "🎯", description: "Spend 1 grit to gain advantage on next attack roll" },
            { name: "Quickdraw", level: 3, type: "combat", icon: "⚡", description: "Add proficiency bonus to initiative, draw/stow firearms freely" },
            { name: "Violent Shot", level: 5, type: "combat", icon: "💥", description: "Spend 1+ grit before attack to add grit spent to damage dice" },
            { name: "Trick Shot", level: 7, type: "combat", icon: "🔄", description: "Spend grit for special shots: Disarm, Winging, Dazing, etc." },
            { name: "Lightning Reload", level: 10, type: "utility", icon: "⚡", description: "Reload any firearm as a bonus action" },
            { name: "Piercing Shot", level: 14, type: "combat", icon: "💫", description: "Spend 1 grit to hit multiple targets in a line" },
            { name: "Vicious Intent", level: 18, type: "combat", icon: "💀", description: "Critical hits on 19-20, and regain grit on natural 19" }
        ]
    },
    spy: {
        name: "Spy",
        icon: "🕵️",
        description: "Masters of deception, infiltration, and information gathering",
        primary_stat: "cha",
        secondary_stat: "dex",
        hit_die: 8,
        armor_proficiency: ["Light armor"],
        weapon_proficiency: ["Simple weapons", "Hand crossbows", "Rapiers", "Shortswords"],
        saving_throws: ["dex", "cha"],
        skills: [
            { name: "False Identity", level: 1, type: "stealth", icon: "🎭", description: "Maintain a cover identity with documentation and contacts" },
            { name: "Expertise", level: 1, type: "utility", icon: "📚", description: "Double proficiency bonus on Deception and one other skill" },
            { name: "Silver Tongue", level: 2, type: "utility", icon: "🗣️", description: "Minimum roll of 10 on Deception and Persuasion checks" },
            { name: "Read the Room", level: 3, type: "utility", icon: "👁️", description: "Advantage on Insight checks; detect lies with DC 15 WIS check" },
            { name: "Dead Drop", level: 3, type: "stealth", icon: "📨", description: "Establish secure communication networks" },
            { name: "Slippery Mind", level: 5, type: "utility", icon: "💭", description: "Proficiency in Wisdom saving throws; advantage vs charm" },
            { name: "Master of Disguise", level: 7, type: "stealth", icon: "🥸", description: "Create disguises in 1 minute; nearly undetectable" },
            { name: "Vanish", level: 10, type: "stealth", icon: "🌫️", description: "Disappear into a crowd; Hide as bonus action in urban environments" },
            { name: "Shadow Network", level: 14, type: "utility", icon: "🕸️", description: "Maintain spy network across multiple regions" }
        ]
    },
    leader: {
        name: "Leader",
        icon: "👑",
        description: "Inspiring commanders who strengthen allies through presence and tactics",
        primary_stat: "cha",
        secondary_stat: "wis",
        hit_die: 8,
        armor_proficiency: ["Light armor", "Medium armor"],
        weapon_proficiency: ["Simple weapons"],
        saving_throws: ["wis", "cha"],
        skills: [
            { name: "Commanding Presence", level: 1, type: "leadership", icon: "👑", description: "Allies within 30 feet gain +2 to saves against fear" },
            { name: "Rally", level: 2, type: "leadership", icon: "📢", description: "Grant CHA mod + level temporary HP to allies who can hear you" },
            { name: "Tactical Direction", level: 3, type: "leadership", icon: "🗺️", description: "Grant one ally an additional action on their turn, 1/rest" },
            { name: "Inspiring Word", level: 5, type: "leadership", icon: "✨", description: "Allies can reroll failed attacks or saves, CHA mod times/day" },
            { name: "Battlefield Command", level: 7, type: "leadership", icon: "⚔️", description: "Allies gain +2 to attack rolls when you take the Help action" },
            { name: "Legendary Command", level: 10, type: "leadership", icon: "⭐", description: "Grant multiple allies bonus actions simultaneously" },
            { name: "Indomitable Will", level: 14, type: "leadership", icon: "🛡️", description: "You and allies within 30 feet have advantage on all saves" },
            { name: "Supreme Commander", level: 18, type: "leadership", icon: "🏆", description: "Once per day, all allies act on your initiative count" }
        ]
    },
    commoner: {
        name: "Commoner",
        icon: "🐸",
        description: "Ordinary toads without specialized training, but with potential",
        primary_stat: null,
        secondary_stat: null,
        hit_die: 6,
        armor_proficiency: [],
        weapon_proficiency: ["Improvised weapons"],
        saving_throws: [],
        skills: [
            { name: "Survivor's Instinct", level: 1, type: "utility", icon: "💚", description: "Advantage on saves to avoid exhaustion" },
            { name: "Strength in Numbers", level: 2, type: "utility", icon: "👥", description: "+1 to all checks when adjacent to ally" },
            { name: "Hidden Potential", level: 3, type: "utility", icon: "⭐", description: "May multiclass into another class with training" }
        ]
    },
    militia: {
        name: "Militia",
        icon: "🛡️",
        description: "Toads with basic combat training, forming the backbone of defense",
        primary_stat: "con",
        secondary_stat: "str",
        hit_die: 8,
        armor_proficiency: ["Light armor", "Shields"],
        weapon_proficiency: ["Simple weapons"],
        saving_throws: ["con"],
        skills: [
            { name: "Basic Training", level: 1, type: "combat", icon: "⚔️", description: "+1 to attack rolls with simple weapons" },
            { name: "Shield Wall", level: 2, type: "combat", icon: "🛡️", description: "+2 AC when adjacent to ally with shield" },
            { name: "Stand Your Ground", level: 3, type: "combat", icon: "💪", description: "Advantage on saves against being moved or knocked prone" }
        ]
    },
    artisan: {
        name: "Artisan",
        icon: "🔨",
        description: "Skilled crafters and maintainers, essential for faction operations",
        primary_stat: "int",
        secondary_stat: "dex",
        hit_die: 6,
        armor_proficiency: [],
        weapon_proficiency: ["Improvised weapons", "Tools as weapons"],
        saving_throws: ["int"],
        skills: [
            { name: "Crafting Expertise", level: 1, type: "utility", icon: "🔨", description: "Proficiency with artisan's tools; craft at double speed" },
            { name: "Jury-Rig", level: 2, type: "utility", icon: "🔧", description: "Temporarily repair any object with DC 15 INT check" },
            { name: "Masterwork", level: 3, type: "utility", icon: "⭐", description: "Crafted items have +1 bonus or additional feature" }
        ]
    }
};

// ========================================
// CORE TOAD DATA (The Original Party)
// ========================================

const CORE_TOADS = {
    dan: {
        id: "dan",
        name: "Dan",
        title: "The Faithful",
        class: "paladin",
        subclass: "Oath of Devotion",
        weapon: "Longsword (Left Hand)",
        status: "Active - Safe",
        statusType: "active",
        statusDetail: "Dan is safe and sound.",
        portrait: "🐸⚔️",
        isCore: true,
        cohort: null,
        rank: "Hero of the Liberation",
        
        level: 5,
        xp: 2050,
        
        stats: {
            str: 16, dex: 10, con: 14, int: 10, wis: 13, cha: 17,
            hp: 28, maxHp: 52,
            ac: 16, speed: 30,
            proficiency: 3
        },
        
        saves: { str: 5, dex: 0, con: 2, int: 0, wis: 4, cha: 6 },
        
        abilities: [
            { name: "Divine Sense", unlocked: true },
            { name: "Lay on Hands", unlocked: true, pool: 5 },
            { name: "Divine Smite", unlocked: true },
            { name: "One-Handed Mastery", unlocked: true }
        ],
        
        spells: {
            slots: { 1: 4, 2: 2 },
            prepared: ["Cure Wounds", "Shield of Faith", "Divine Favor", "Lesser Restoration", "Aid"]
        },
        
        equipment: [
            { name: "Blessed Longsword", type: "weapon", bonus: "+1 to hit and damage" },
            { name: "Tower Shield", type: "shield", ac: 2 },
            { name: "Chain Mail", type: "armor", ac: 16 },
            { name: "Holy Symbol", type: "focus" }
        ],
        
        conditions: ["Amputee (Right Arm)", "Psychic Trauma", "Determined"],        
        background: "Dan has rallied from his catatonic state. Fighting with a longsword in his remaining hand, he proved he is still a warrior of the Pond. He is currently separated from Toad Lee and Ryan. Dan successfully avoided conflict by dancing with the satyrs.",        
        personality: {
            traits: ["Devoted", "Courageous", "Self-sacrificing"],
            ideal: "Faith in the Pond guides all",
            bond: "Will protect any toad with my life",
            flaw: "Sometimes rushes in without thinking"
        },
        
        relationships: {
            allies: ["Eager", "Ryan", "Roger", "Speaker L"],
            enemies: ["The Oracle", "Iron Legion", "Fawful's Forces"],
            complicated: ["Archie Miser"]
        },
        
         log: [
            { day: 26, event: "🏃‍♂️ followed archie to shack and joined team after seeing usk and the other guy", xp: 30, type: "survival" },

            { day: 26, event: "🚨 alerted team to toad intel after hearing rumors from unknown source", xp: 35, type: "political" },

            { day: 26, event: "🌌 tasted strange brew offered by archie but refused it", xp: 20, type: "observation" },

            { day: 26, event: "📜 picked up scrips from ruined manor after portal arrival", xp: 60, type: "exploration" },

            { day: 26, event: "💔 lost contact with butler after finding him missing near back door", xp: 0, type: "injury" },

            { day: 26, event: "🏃‍♀️ followed archie to shack after blorb toad was found and joined team", xp: 25, type: "survival" },

            { day: 26, event: "🌌 discovered mushroom while searching blorb and took it with curiosity", xp: 30, type: "observation" },

            { day: 26, event: "🏃‍♂️ ran to shack after hearing butler was missing and found usk and another guy there", xp: 50, type: "survival" },

            { day: 16, event: "⭐ Ability Unlock: Extra Attack", xp: 0, type: "ability" },
            { day: 21, event: "⚔️ Roused from catatonia during the Manor Siege", xp: 50, type: "status" },
            { day: 21, event: "Landed critical axe throw (one-handed) vs Arcane Wraith", xp: 200, type: "combat" },
            { day: 21, event: "🌌 Lost in the Planar Fracture (Void/Unknown)", xp: 0, type: "status" },
        
            {
    day: 26,
    event: "🕺 Dan danced with the satyrs to slip past.",
    xp: 5,
    type: "social"
},
        ]
    },
    
    eager: {
        id: "eager",
        name: "Eager",
        title: "The Swift",
        class: "rogue",
        subclass: "Swashbuckler",
        weapon: "Whip & Daggers",
        status: "Critical - Captured",
        statusType: "injured",
        statusDetail: "Eager was captured by guards.",
        portrait: "🐸🗡️",
        isCore: true,
        cohort: null,
        rank: "Scout Extraordinaire",
        
        level: 5,
        xp: 1580,
        
        stats: {
            str: 10, dex: 18, con: 12, int: 14, wis: 12, cha: 14,
            hp: 3, maxHp: 38,
            ac: 15, speed: 35,
            proficiency: 3
        },
        
        saves: { str: 0, dex: 7, con: 1, int: 5, wis: 1, cha: 2 },
        
        abilities: [
            { name: "Sneak Attack", unlocked: true, dice: "3d6" },
            { name: "Cunning Action", unlocked: true },
            { name: "Fancy Footwork", unlocked: true },
            { name: "Uncanny Dodge", unlocked: true }
        ],
        
        equipment: [
            { name: "Serpent Whip", type: "weapon", bonus: "Reach, Finesse" },
            { name: "Concealed Daggers (3)", type: "weapon", bonus: "Thrown 20/60" },
            { name: "Leather Armor", type: "armor", ac: 11 }
        ],
        
        conditions: ["Unconscious", "Critical Wounds", "Internal Bleeding"],
        
        background: "Currently comatose after the battle with the Arachnid Matriarch. Eager was captured while running from the scene.",
        
        personality: {
            traits: ["Enthusiastic", "Risk-taker"],
            ideal: "Adventure makes life worth living",
            bond: "Will never abandon a friend",
            flaw: "Doesn't know when to quit"
        },
        
        relationships: {
            allies: ["Dan", "Roger", "Ryan"],
            enemies: ["Iron Legion"],
            complicated: ["Waluigi - nearly killed by his Cone of Cold"]
        },
        log: [
            { day: 21, event: "✨ Awakened by Oracle's healing magic", xp: 0, type: "status" },
            { day: 21, event: "Anchored the 'Edge' during the failed ritual", xp: 100, type: "magic" },
            { day: 21, event: "🌌 Lost in the Planar Fracture (Void/Unknown)", xp: 0, type: "status" }
        ,
            {
    day: 26,
    event: "🏃 Captured by guards.",
    xp: 0,
    type: "status"
},
        ]
    },
    
    ryan: {
        id: "ryan",
        name: "Ryan",
        title: "The Arcane",
        class: "wizard",
        subclass: "School of Evocation",
        weapon: "Staff & Spellbook",
        status: "Active - Safe",
        statusType: "active",
        statusDetail: "Ryan is safe and sound.",
        portrait: "🐸📚",
        isCore: true,
        cohort: null,
        rank: "Arcane Advisor",
        
        level: 4,
        xp: 1130, // Updated XP
        
        stats: {
            str: 8, dex: 14, con: 12, int: 18, wis: 14, cha: 10,
            hp: 24, maxHp: 24,
            ac: 12, speed: 30,
            proficiency: 2
        },
        
        saves: { str: -1, dex: 2, con: 1, int: 6, wis: 4, cha: 0 },
        
        abilities: [
            { name: "Spellcasting", unlocked: true },
            { name: "Arcane Recovery", unlocked: true },
            { name: "Sculpt Spells", unlocked: true }
        ],
        
        spells: {
            slots: { 1: 4, 2: 3 },
            known: {
                cantrips: ["Fire Bolt", "Mage Hand", "Prestidigitation", "Light"],
                1: ["Magic Missile", "Shield", "Detect Magic", "Mage Armor", "Identify", "Sleep"],
                2: ["Darkness", "Misty Step", "Scorching Ray"]
            }
        },
        
        equipment: [
            { name: "Oak Staff", type: "weapon", bonus: "Arcane Focus" },
            { name: "Spellbook", type: "tool", bonus: "Contains 12 spells" }
        ],
        
        conditions: ["Ally of Hjumpik", "Rakasha Student"],
        
        background: "Ryan has been taken in by the Rakasha spirit-walker. While his mentor deals with threats like Thorne and guides Hjumpik, Ryan is safe within their sanctum, observing the chaotic magic of the fracture.",
        
        personality: {
            traits: ["Studious", "Curious", "Cautious"],
            ideal: "Knowledge is the greatest power",
            bond: "My spellbook is my most treasured possession",
            flaw: "Sometimes too hesitant to act"
        },
        
        relationships: {
            allies: ["Dan", "Eager", "Roger", "Rakasha (Mentor)"],
            enemies: ["Iron Legion", "Thorne"],
            complicated: ["Hjumpik (Agent H)"]
        },
        
          log: [
            { day: 20, event: "🦁 Taken in by Rakasha spirit-walker", xp: 50, type: "exploration" },
            { day: 21, event: "Began arcane tutelage under Rakasha Mystics", xp: 75, type: "magic" },
            { day: 22, event: "Mentor 'Rakasha' defeated Thorne in sparring match", xp: 50, type: "observation" },
            { day: 22, event: "Rakasha guided Hjumpik through the Maze to the Midnight Gate", xp: 100, type: "narrative" }
        ]
    },
    
    roger: {
        id: "roger",
        name: "Roger",
        title: "The Sharpshooter",
        class: "gunslinger",
        subclass: null,
        weapon: "Crossbow & Pistol",
        status: "Active",
        statusType: "active",
        statusDetail: "Roger is ready for action.",
        portrait: "🐸🔫",
        isCore: true,
        cohort: "The Wardens",
        rank: "Ranged Specialist",
        
        level: 4,
        xp: 920,
        
        stats: {
            str: 10, dex: 18, con: 12, int: 12, wis: 16, cha: 10,
            hp: 32, maxHp: 32,
            ac: 14, speed: 30,
            proficiency: 2
        },
        
        saves: { str: 0, dex: 6, con: 1, int: 1, wis: 5, cha: 0 },
        
        abilities: [
            { name: "Firearm Proficiency", unlocked: true },
            { name: "Grit", unlocked: true, points: 3 },
            { name: "Deadeye Shot", unlocked: true },
            { name: "Quickdraw", unlocked: true }
        ],
        
        equipment: [
            { name: "Repeating Crossbow", type: "weapon" },
            { name: "Flintlock Pistol", type: "weapon" }
        ],
        
        conditions: [],
        
        background: "Defending the Vigilance perimeter.",
        
        personality: {
            traits: ["Silent", "Deadly"],
            ideal: "One shot, one kill",
            bond: "My weapons are extensions of myself",
            flaw: "Doesn't communicate enough"
        },
        
        relationships: {
            allies: ["Dan", "Eager", "Ryan", "Bones"],
            enemies: ["Iron Legion"],
            complicated: []
        },
        
  log: [
            { day: 20, event: "🛡️ Assigned to The Wardens cohort", xp: 25, type: "political" },
            { day: 21, event: "Defended the Vigilance perimeter during Iron Sky Breach", xp: 100, type: "combat" },
            { day: 21, event: "🎯 Sniped Legion officer attempting to board the bridge", xp: 150, type: "combat" }
        ]
    },
    
    bones: {
        id: "bones",
        name: "Bones",
        title: "The Unbreakable",
        class: "barbarian",
        subclass: "Path of the Berserker",
        weapon: "None (Disarmed)",
        status: "Active - Cleaned up from being grotesque mushroom",
        statusType: "active",
        statusDetail: "Bones is clean and ready for action.",
        portrait: "🐸💀",
        isCore: true,
        cohort: null,
        rank: "Front-line Champion",
        
        level: 4,
        xp: 950,
        
        stats: {
            str: 18, dex: 10, con: 18, int: 8, wis: 10, cha: 8,
            hp: 1, maxHp: 52,
            ac: 14, speed: 30,
            proficiency: 2
        },
        
        saves: { str: 6, dex: 0, con: 6, int: -1, wis: 0, cha: -1 },
        
        abilities: [
            { name: "Rage", unlocked: true },
            { name: "Reckless Attack", unlocked: true }
        ],        
        equipment: [],
        
        conditions: ["Critical Stab Wound", "Restrained", "Target of Order 120"],        
        background: "Awaiting execution at Aegis Command. Bones was recognized by Byscilla Danos and dragged away.",
        
        personality: {
            traits: ["Intimidating", "Protective"],
            ideal: "Strength protects the weak",
            bond: "I will break anyone who hurts my friends",
            flaw: "Sometimes can't stop once I start"
        },
        
        relationships: {
            allies: ["Roger", "Toad Lee"],
            enemies: ["Iron Legion", "The Mole"],
            complicated: []
        },
        log: [
            { day: 21, event: "💔 CRITICAL INJURY: Stabbed by General Marcus Ironhand", xp: 0, type: "injury" },
            { day: 21, event: "☠️ Subject of 'Order 120' (Immediate Execution)", xp: 0, type: "status" },
        
            {
    day: 26,
    event: "📖 Decoded intelligence files.",
    xp: 10,
    type: "discovery"
},
            {
    day: 26,
    event: "🏥 Took a shower.",
    xp: 5,
    type: "status"
},
        ]
    },
    
    toad_lee: {
        id: "toad_lee",
        name: "Toad Lee",
        title: "The Relentless",
        class: "barbarian",
        subclass: "Path of the Totem Warrior",
        weapon: "Battleaxe & Shield",
        status: "Active - On the Run", // Updated
        statusType: "active",
        statusDetail: "Spotted walking up the hallway.",
        portrait: "🐸🪓",
        isCore: true,
        cohort: "The Wardens",
        rank: "Veteran Survivor",
        
        level: 3,
        xp: 920, // Updated XP
        
        stats: {
            str: 16, dex: 12, con: 16, int: 10, wis: 10, cha: 10,
            hp: 34, maxHp: 36, // Slight fatigue
            ac: 15, speed: 30,
            proficiency: 2
        },
        
        saves: { str: 5, dex: 1, con: 5, int: 0, wis: 0, cha: 0 },
        
        abilities: [
            { name: "Rage", unlocked: true, uses: 2, damage: 2 },
            { name: "Unarmored Defense", unlocked: true },
            { name: "Reckless Attack", unlocked: true },
            { name: "Totem Spirit (Bear)", unlocked: true }
        ],
        
        equipment: [
            { name: "Notched Battleaxe", type: "weapon", bonus: "Versatile, 1d8/1d10+STR" },
            { name: "Wooden Shield", type: "shield", ac: 2 },
            { name: "Handaxes (2)", type: "weapon", bonus: "Thrown 20/60" }
        ],
        
        conditions: ["Exhausted (Level 1)", "Protector (Waluigi)", "Hunted by Stucky"],
        
        background: "Toad Lee has once again survived the impossible. Finding refuge in a Hag's house, he found Waluigi caged and injured. Showing quick thinking, he tricked the Hag (Stucky) into revealing how to disarm her own bear trap, then broke Waluigi out. He is currently fleeing through a sprite-infested greenhouse. Toad Lee managed to sneak past the satyrs and attempted to take some spoils from the fallen goblin. Toad Lee broke through a wall with Hjumpik and grabbed some gold. Kidnapped. None mentioned.",
        
        personality: {
            traits: ["Stubborn", "Enduring", "Quietly supportive"],
            ideal: "Survival is victory",
            bond: "The Barrel Survivors are my family now",
            flaw: "Holds grudges forever"
        },
        
        relationships: {
            allies: ["Bones", "Roger", "Hjumpik", "Rakasha", "Waluigi"],
            enemies: ["The Oracle", "Iron Legion", "Stucky the Hag"],
            complicated: []
        },
        
        log: [
            { day: 21, event: "🌀 Dove into the unstable portal with Bowser", xp: 50, type: "survival" },
            { day: 22, event: "🏚️ Found refuge in Hag's House (01:00 AM)", xp: 25, type: "exploration" },
            { day: 22, event: "🧠 Deceived the Hag regarding the Bear Trap mechanism", xp: 150, type: "social" },
            { day: 22, event: "🔓 Rescued Waluigi from the Hag's cage", xp: 150, type: "rescue" },
            { day: 22, event: "🏃 Escaped Hag's house via window with Hjumpik & Rakasha", xp: 25, type: "survival" },
            { day: 22, event: "🌿 Entered the Greenhouse (Sprite Territory) (04:00 AM)", xp: 0, type: "exploration" }
,
            {
    day: 26,
    event: "🕺 Toad Lee danced with the satyrs to slip past and tried to loot the goblin guard's body.",
    xp: 10,
    type: "social"
},
        
            {
    day: 26,
    event: "🏃 Broke through a wall with Hjumpik.",
    xp: 10,
    type: "exploration"
},
        
            {
    "day": 1,
    "event": "📖 Gives Remi the potion, confesses to giving it to her, kidnapped by Shadowfell gu",
    "xp": 25,
    "type": "story"
},
        
            {
    "day": 1,
    "event": "📖 Works for the Archivist, makes a deal for healing in exchange for work.",
    "xp": 25,
    "type": "story"
},
        
            {
    "day": 1,
    "event": "📖 Asked about curing Purpleeyetus, questioned Remi's trust in the Onyx Hand.",
    "xp": 25,
    "type": "story"
},
        
            {
    "day": 1,
    "event": "📖 Spotted walking up the hallway.",
    "xp": 25,
    "type": "story"
},
        ]
    },

    waluigi: {
        id: "waluigi",
        name: "Waluigi",
        title: "The Lanky Sorcerer",
        class: "sorcerer",
        subclass: "Cryomancy (Ice)",
        weapon: "Tennis Racket (Focus)",
        status: "Critical - Leg Injury",
        statusType: "injured",
        statusDetail: "Waluigi was injured in an explosion.",
        portrait: "🟣❄️",
        isCore: false,
        cohort: "Toad Lee's Burden",
        rank: "Reluctant Ally",
        
        level: 5,
        xp: 0,
        
        stats: {
            str: 10, dex: 14, con: 12, int: 12, wis: 8, cha: 16,
            hp: 6, maxHp: 30,
            ac: 12, speed: 5, // Crippled
            proficiency: 3
        },
        
        saves: { str: 0, dex: 2, con: 1, int: 1, wis: -1, cha: 3 },
        
        abilities: [
            { name: "Cone of Cold", unlocked: true },
            { name: "Metamagic", unlocked: true }
        ],
        
        equipment: [
            { name: "Purple Overalls", type: "armor", ac: 12 },
            { name: "Rose (Stolen)", type: "item" }
        ],
        
        conditions: ["Crippled Leg", "Traumatized by Hag", "Dependant on Toad Lee"],
        
        background: "A chaotic variable in the equation. Waluigi previously froze Eager, but found himself captured by Stucky the Hag in the Planar Fracture. His leg was brutally injured (bone exposed). Toad Lee saved him from being eaten. Waluigi was injured while triggering an explosion.",
        
        personality: {
            traits: ["Self-serving", "Dramatic"],
            ideal: "Everyone cheats, I just do it better",
            bond: "I owe Toad Lee (for now)",
            flaw: "Cowardly when injured"
        },
        
        relationships: {
            allies: ["Toad Lee"],
            enemies: ["Stucky the Hag", "Eager (Previous Conflict)"],
            complicated: ["Hjumpik"]
        },
        
        log: [
            { day: 12, event: "❄️ Froze Eager with Cone of Cold", xp: 0, type: "history" },
            { day: 21, event: "⛓️ Captured by Stucky the Hag", xp: 0, type: "status" },
            { day: 22, event: "🩹 Leg crippled by Hag/Trap", xp: 0, type: "injury" },
            { day: 22, event: "🔓 Rescued by Toad Lee", xp: 0, type: "rescue" },
        
            {
    day: 26,
    event: "💥 Injured in an explosion.",
    xp: 0,
    type: "injury"
},
        ]
    },
    
    the_mole: {
        id: "the_mole",
        name: "The Mole",
        title: "The Traitor",
        class: "spy",
        subclass: null,
        weapon: "Hidden Blade & Poison",
        status: "Defected - Iron Legion",
        statusType: "defected",
        statusDetail: "Part of the greenhouse team, defeats a rust monster, encounters mages guild members, defeats a ghost",
        portrait: "🐸🎭",
        isCore: false,
        cohort: null,
        rank: "TRAITOR",
        
        level: 4,
        xp: 900,
        
        stats: {
            str: 10, dex: 16, con: 12, int: 14, wis: 14, cha: 16,
            hp: 32, maxHp: 32,
            ac: 13, speed: 30,
            proficiency: 2
        },
        
        saves: { str: 0, dex: 5, con: 1, int: 2, wis: 2, cha: 5 },
        
        abilities: [
            { name: "False Identity", unlocked: true },
            { name: "Expertise", unlocked: true },
            { name: "Silver Tongue", unlocked: true }
        ],
        
        equipment: [
            { name: "Hidden Blade", type: "weapon", bonus: "Concealed" },
            { name: "Iron Legion Badge", type: "tool", bonus: "Authentic credentials" }
        ],
        
        conditions: ["Hostile", "Iron Legion Agent", "Wanted by Cohort"],
        
        background: "Escaped traitor.",
        
        personality: {
            traits: ["Deceptive", "Patient", "Cold"],
            ideal: "The mission above all",
            bond: "Iron Legion is my true family",
            flaw: "Underestimates emotional bonds"
        },
        
        relationships: {
            allies: ["Iron Legion"],
            enemies: ["All Liberated Toads"],
            complicated: []
        },
        
        log: [
            { day: 26, event: "🔐 tried to negotiate with usk about reunifying the three manors but declined help", xp: 40, type: "social" },

            { day: 16, event: "🔴 True allegiance revealed during Legion raid", xp: 0, type: "status" },
            { day: 21, event: "Seen advising General Ironhand at Aegis Command", xp: 0, type: "intel" }
        ]
    }
};

// ========================================
// BARREL SURVIVORS GENERATION
// ========================================

const TOAD_NAMES = {
    firstNames: [
        "Mudwhisper", "Croakston", "Lilypad", "Bogsworth", "Fernfrond", "Mosscap",
        "Puddlejump", "Ripplebrook", "Dewshine", "Misthopper", "Marshlight", "Pondweed",
        "Cattail", "Swampfoot", "Bulrush", "Algae", "Taddy", "Spawn", "Webberton",
        "Silt", "Muckraker", "Slimetrail", "Dampwick", "Sogbottom", "Murkwater",
        "Greenback", "Spotted", "Bumpy", "Warts", "Gullet", "Ribbiter", "Croaker",
        "Hopscotch", "Splashdown", "Bubbles", "Squelch", "Lily", "Rose", "Daisy",
        "Iris", "Violet", "Fern", "Ivy", "Moss", "Reed", "Rush", "Brook", "Stream",
        "Pond", "Lake", "Marsh", "Bog", "Swamp", "Mire", "Fen", "Wetland", "Delta"
    ],
    suffixes: ["", " Jr.", " III", " the Elder", " the Younger"],
    titles: ["", "Old ", "Young ", "Little ", "Big "]
};

function generateToadName(index) {
    if (index < TOAD_NAMES.firstNames.length) {
        return TOAD_NAMES.firstNames[index];
    }
    const baseIndex = index % TOAD_NAMES.firstNames.length;
    const suffix = TOAD_NAMES.suffixes[Math.floor(index / TOAD_NAMES.firstNames.length) % TOAD_NAMES.suffixes.length];
    return TOAD_NAMES.firstNames[baseIndex] + suffix;
}

function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function generateBarrelSurvivors() {
    const survivors = [];
    const totalBarrelSurvivors = 140; // 150 - 3 deceased
    
    const conditionPool = [
        { condition: [], weight: 50 }, // Healthy
        { condition: ["Minor Injuries"], weight: 15 },
        { condition: ["Malnutrition"], weight: 10 },
        { condition: ["Psychological Trauma"], weight: 12 },
        { condition: ["Exhaustion"], weight: 8 },
        { condition: ["Recovering"], weight: 10 },
        { condition: ["Shell Shock"], weight: 5 },
        { condition: ["Critical Wounds"], weight: 3 },
        { condition: ["Psychological Trauma", "Malnutrition"], weight: 5 }
    ];
    
    const classPool = [
        { class: "commoner", weight: 60 },
        { class: "militia", weight: 25 },
        { class: "artisan", weight: 15 }
    ];
    
    for (let i = 0; i < totalBarrelSurvivors; i++) {
        const seed = 1040 * 1000 + i;
        const rand1 = seededRandom(seed);
        const rand2 = seededRandom(seed + 1);
        const rand3 = seededRandom(seed + 2);
        const rand4 = seededRandom(seed + 3);
        const rand5 = seededRandom(seed + 4);
        
        // Determine level (1-3, weighted toward 1)
        let level = 1;
        if (rand1 > 0.7) level = 2;
        if (rand1 > 0.92) level = 3;
        
        // Determine class
        let classChoice = "commoner";
        let cumWeight = 0;
        const classRoll = rand2 * 100;
        for (const c of classPool) {
            cumWeight += c.weight;
            if (classRoll <= cumWeight) {
                classChoice = c.class;
                break;
            }
        }
        
        // Determine conditions
        let conditions = [];
        cumWeight = 0;
        const condRoll = rand3 * 118; // Sum of all weights
        for (const c of conditionPool) {
            cumWeight += c.weight;
            if (condRoll <= cumWeight) {
                conditions = [...c.condition];
                break;
            }
        }
        
        // Calculate stats based on class
        const classDef = CLASS_DEFINITIONS[classChoice];
        const baseHp = (classDef?.hit_die || 6) + (level - 1) * Math.floor((classDef?.hit_die || 6) / 2 + 2);
        const hasInjury = conditions.some(c => c.includes("Wounds") || c.includes("Critical"));
        const hpPenalty = hasInjury ? Math.floor(baseHp * (0.3 + rand4 * 0.5)) : 0;
        
        // Determine status
        let status = "Active";
        let statusType = "active";
        if (conditions.includes("Critical Wounds")) {
            status = "Critical";
            statusType = "critical";
        } else if (conditions.includes("Psychological Trauma") || conditions.includes("Shell Shock")) {
            status = "Traumatized";
            statusType = "injured";
        } else if (conditions.length > 0) {
            status = conditions[0];
            statusType = "injured";
        }
        
        // Generate stats with some variance
        const statVariance = () => Math.floor(rand5 * 6) - 2;
        const baseStats = {
            str: 8 + statVariance(),
            dex: 8 + statVariance(),
            con: 8 + statVariance(),
            int: 8 + statVariance(),
            wis: 8 + statVariance(),
            cha: 8 + statVariance()
        };
        
        // XP based on level and some random progress
        const baseXP = XP_THRESHOLDS[level] || 0;
        const nextXP = XP_THRESHOLDS[level + 1] || baseXP + 100;
        const xpProgress = Math.floor(rand4 * (nextXP - baseXP) * 0.8);
        
        // Determine abilities based on class and level
        const abilities = [];
        if (classDef?.skills) {
            for (const skill of classDef.skills) {
                if (skill.level <= level) {
                    abilities.push({ name: skill.name, unlocked: true });
                }
            }
        }
        
        const barrelNumber = Math.floor(rand5 * 150) + 1;
        
        survivors.push({
            id: `barrel_survivor_${i + 1}`,
            name: generateToadName(i),
            title: `Barrel ${barrelNumber} Survivor`,
            class: classChoice,
            weapon: classChoice === "militia" ? "Spear" : classChoice === "artisan" ? "Tools" : "None",
            status: status,
            statusType: statusType,
            statusDetail: conditions.length > 0 ? conditions.join(", ") : "Recovering from captivity",
            portrait: "🐸",
            isCore: false,
            cohort: "Barrel Survivors",
            rank: "Survivor",
            
            level: level,
            xp: baseXP + xpProgress,
            
            stats: {
                ...baseStats,
                hp: Math.max(1, baseHp - hpPenalty),
                maxHp: baseHp,
                ac: 10 + Math.floor((baseStats.dex - 10) / 2),
                speed: 25,
                proficiency: level < 5 ? 2 : level < 9 ? 3 : level < 13 ? 4 : level < 17 ? 5 : 6
            },
            
            abilities: abilities,
            equipment: [],
            conditions: conditions,
            
            background: `One of the 150 toads discovered hidden in barrels throughout the Vigilance on Day 12. Victim of a massive trafficking operation. Barrel number: ${barrelNumber}.`,
            
            log: [
                { day: 12, event: `Discovered in Barrel #${barrelNumber} aboard the Vigilance`, xp: 0, type: "status" },
                { day: 12, event: "Liberated by the party", xp: 50, type: "political" }
            ]
        });
    }
    
    return survivors;
}

// ========================================
// COHORT MEMBER GENERATION
// ========================================

function generateCohortMembers() {
    const members = [];
    
    // Pond Patrol (24 members - elite guards)
    const patrolNames = [
        "Sergeant Pondscum", "Corporal Lilystalker", "Private Reedguard", "Private Marshwatch",
        "Private Bogwalker", "Private Fenkeeper", "Private Mudshield", "Private Swampblade",
        "Corporal Mosshelm", "Private Pondward", "Private Lilyguard", "Private Wetfoot",
        "Private Riverwatch", "Private Brookshield", "Private Streamguard", "Private Deltablade",
        "Corporal Mistguard", "Private Dewblade", "Private Fogwatch", "Private Hazeward",
        "Private Cloudfoot", "Private Rainshield", "Private Stormguard", "Private Thunderblade"
    ];
    
    for (let i = 0; i < 24; i++) {
        const seed = 2000 + i;
        const rand1 = seededRandom(seed);
        const level = i < 2 ? 4 : i < 6 ? 3 : 2 + Math.floor(rand1 * 2);
        const baseHp = 10 + (level - 1) * 6;
        
        members.push({
            id: `patrol_${i + 1}`,
            name: patrolNames[i] || `Patroller ${i + 1}`,
            title: "Pond Patrol",
            class: "fighter",
            weapon: "Sword & Shield",
            status: "Active",
            statusType: "active",
            statusDetail: "On duty",
            portrait: "🐸🛡️",
            isCore: false,
            cohort: "Pond Patrol",
            rank: i === 0 ? "Sergeant" : i < 4 ? "Corporal" : "Private",
            
            level: level,
            xp: XP_THRESHOLDS[level] + Math.floor(rand1 * 200),
            
            stats: {
                str: 14 + Math.floor(rand1 * 4),
                dex: 12 + Math.floor(rand1 * 4),
                con: 14 + Math.floor(rand1 * 4),
                int: 10, wis: 12, cha: 10,
                hp: baseHp, maxHp: baseHp,
                ac: 18, speed: 30,
                proficiency: 2
            },
            
            abilities: [
                { name: "Fighting Style", unlocked: true },
                { name: "Second Wind", unlocked: true }
            ],
            equipment: [
                { name: "Longsword", type: "weapon" },
                { name: "Shield", type: "shield", ac: 2 },
                { name: "Chain Mail", type: "armor", ac: 16 }
            ],
            conditions: [],
            
            background: "Elite guard serving Speaker L directly. Hand-picked for loyalty and combat skill.",
            
            log: [
                { day: 20, event: "Helped defeat  a giant spider monster", xp: 100, type: "military" },
                { day: 18, event: "Assigned to Pond Patrol by Captain Fernback", xp: 50, type: "political" }
            ]
        });
    }
    
    // Add other cohort notable members
    const otherMembers = [
        // Chroniclers
        { id: "chronicler_inkspot", name: "Inkspot", cohort: "The Chroniclers", class: "artisan", level: 3, role: "Chief Archivist" },
        { id: "chronicler_quillback", name: "Quillback", cohort: "The Chroniclers", class: "artisan", level: 2, role: "Intelligence Analyst" },
        // Crafters
        { id: "crafter_gearspore", name: "Gearspore", cohort: "The Crafters", class: "artisan", level: 3, role: "Ship Engineer" },
        { id: "crafter_hammerling", name: "Hammerling", cohort: "The Crafters", class: "artisan", level: 3, role: "Weapons Smith" },
        // Wardens
        { id: "warden_spearwort", name: "Spearwort", cohort: "The Wardens", class: "fighter", level: 4, role: "Combat Instructor" },
        { id: "warden_shieldback", name: "Shieldback", cohort: "The Wardens", class: "fighter", level: 3, role: "Defense Coordinator" },
        // Menders
        { id: "mender_soothing_moss", name: "Soothing Moss", cohort: "The Menders", class: "commoner", level: 4, role: "Chief Surgeon" },
        { id: "mender_gentlepad", name: "Gentlepad", cohort: "The Menders", class: "commoner", level: 3, role: "Psychological Counselor" },
        // Scouts
        { id: "scout_shadowleap", name: "Shadowleap", cohort: "The Scouts", class: "rogue", level: 4, role: "Acting Leader" },
        { id: "scout_whispertail", name: "Whispertail", cohort: "The Scouts", class: "rogue", level: 3, role: "Signal Specialist" }
    ];
    
    for (const m of otherMembers) {
        const classDef = CLASS_DEFINITIONS[m.class] || CLASS_DEFINITIONS.commoner;
        const baseHp = (classDef.hit_die || 6) + (m.level - 1) * Math.floor((classDef.hit_die || 6) / 2 + 2);
        
        members.push({
            id: m.id,
            name: m.name,
            title: m.role,
            class: m.class,
            weapon: m.class === "fighter" ? "Sword" : m.class === "rogue" ? "Daggers" : "Tools",
            status: "Active",
            statusType: "active",
            statusDetail: `Serving as ${m.role}`,
            portrait: m.class === "fighter" ? "🐸⚔️" : m.class === "rogue" ? "🐸🗡️" : "🐸🔧",
            isCore: false,
            cohort: m.cohort,
            rank: m.role,
            
            level: m.level,
            xp: XP_THRESHOLDS[m.level] + 100,
            
            stats: {
                str: 10 + (m.class === "fighter" ? 4 : 0),
                dex: 10 + (m.class === "rogue" ? 6 : 2),
                con: 12, int: 12, wis: 12, cha: 10,
                hp: baseHp, maxHp: baseHp,
                ac: 12 + (m.class === "fighter" ? 4 : 0),
                speed: 30,
                proficiency: 2
            },
            
            abilities: classDef.skills?.filter(s => s.level <= m.level).map(s => ({ name: s.name, unlocked: true })) || [],
            equipment: [],
            conditions: [],
            
            background: `Notable member of ${m.cohort}, serving as ${m.role}.`,
            
            log: [
                { day: 15, event: `Appointed ${m.role} of ${m.cohort}`, xp: 75, type: "political" }
            ]
        });
    }
    
    return members;
}

// ========================================
// FACTION TIMELINE DATA
// ========================================

const FACTION_TIMELINE = [
{
        day: 21,
        date: { day: 21, monthIndex: 6, year: 1040 },
        isCurrent: true,
        title: "The Iron Mandate & Order 120",
        events: [
            {
                time: "09:00",
                title: "Iron Mandate Enacted",
                type: "political",
                severity: "critical",
                icon: "⚖️",
                description: "The Midlands Diet passes the Iron Mandate. The Liberated Toads are classified as an 'organized supernatural entity.'",
                involved: ["Iron Legion", "Midlands Diet"]
            },
            {
                time: "10:00",
                title: "Dragon Conspiracy Revealed",
                type: "intel",
                severity: "high",
                icon: "🐉",
                description: "Robinson (Markop's father) discovers the Dragon-Empire war is a fabrication. He and the dragon 'Ignis-Major' are captured by the Legion.",
                involved: ["Robinson", "Iron Legion", "Markop"]
            },
            {
                time: "14:30",
                title: "Massacre at Aegis Command",
                type: "combat",
                severity: "critical",
                icon: "🩸",
                description: "Infiltration failed. Bones stabbed by General Ironhand. A 'Green Decoy' of Speaker L was discovered. Ironhand issues 'Order 120': Execute all Toad prisoners.",
                involved: ["Bones", "Creek", "Marcus Ironhand", "Green Decoy"]
            },
            {
                time: "19:30",
                title: "Banishment of the Wraith",
                type: "magic",
                severity: "high",
                icon: "👻",
                description: "The party defeats an Arcane Wraith at Raventree Manor. Dan fights one-armed; Bowser physically assaults the ghost. The Oracle banishes the entity.",
                involved: ["Bowser", "Dan", "Archie", "Oracle", "Pernus Annmatar"]
            }
        ]
    },    
    {
        day: 21,
        date: { day: 21, monthIndex: 6, year: 1040 },
        isCurrent: true,
        title: "The Iron Mandate",
        events: [
            {
                time: "09:00",
                title: "Iron Mandate Enacted",
                type: "political",
                severity: "critical",
                icon: "⚖️",
                description: "The Midlands Diet passes the Iron Mandate 28-8-3, granting the Iron Legion emergency powers to purge supernatural threats. The Liberated Toads are now classified as an 'organized supernatural entity.'",
                involved: ["Iron Legion", "Midlands Diet", "Speaker Rivers (resigned)"]
            },
            {
                time: "10:00",
                title: "Emergency Vote Called",
                type: "governance",
                severity: "high",
                icon: "🗳️",
                description: "Speaker L convenes the Council to vote on the faction's response. Four options presented: evacuation, diplomacy, resistance, or strategic withdrawal.",
                involved: ["Speaker L", "Cohort Council"]
            },
            {
                time: "Current",
                title: "Council Deliberation",
                type: "governance",
                severity: "ongoing",
                icon: "⏳",
                description: "The Council debates. Strategic Withdrawal currently leads with 3 votes. Legion patrols are mobilizing.",
                involved: ["All Council Members"]
            }
        ]
    },
    {
        day: 20,
        date: { day: 20, monthIndex: 6, year: 1040 },
        title: "The Iron Sky Breach",
        events: [
    {
                time: "16:30",
                title: "Vigilance Captured",
                type: "military",
                severity: "critical",
                icon: "🚀",
                description: "The Iron Legion boards and captures the Vigilance.",
                involved: ["Iron Legion", "Ryan"]
            },            
            {
                time: "16:30",
                title: "Vigilance Captured",
                type: "military",
                severity: "critical",
                icon: "🚀",
                description: "The Iron Legion boards and captures the Vigilance. Multiple toads forced to escape, including Ryan who jumps from the ship.",
                involved: ["Iron Legion", "Ryan", "Multiple crew"]
            },
            {
                time: "17:00",
                title: "Bones Confirmed Captured",
                type: "intel",
                severity: "high",
                icon: "⛓️",
                description: "Bones is confirmed held at an Imperial Processing Facility. Council begins planning rescue operation.",
                involved: ["Bones", "Iron Legion"]
            },
            {
                time: "17:30",
                title: "Ryan Meets Rakasha",
                type: "exploration",
                severity: "medium",
                icon: "🦁",
                description: "Ryan survives their fall and is taken in by a Rakasha spirit-walker who senses their magical potential.",
                involved: ["Ryan", "Rakasha Tribe"]
            },
            {
                time: "23:15",
                title: "Spider Grove Rescue",
                type: "combat",
                severity: "medium",
                icon: "🕷️",
                description: "Markop and Remi rescue Eager from a web-choked grove in Raventree Manor, defeating a massive Arachnid Matriarch.",
                involved: ["Markop", "Remi", "Eager", "Waluigi", "Mossy"]
            }
        ]
    },
    {
        day: 19,
        date: { day: 19, monthIndex: 6, year: 1040 },
        title: "Siege of Raventree",
        events: [
            {
                time: "06:30",
                title: "Containment Perimeter",
                type: "military",
                severity: "high",
                icon: "🛡️",
                description: "Pond Patrol establishes containment perimeter around Raventree Manor. The manor responds by manifesting powerful wraiths.",
                involved: ["Pond Patrol", "Captain Fernback"]
            },
            {
                time: "06:55",
                title: "Green T Lost",
                type: "casualty",
                severity: "critical",
                icon: "💀",
                description: "Green T is violently pulled into a mirror dimension by a supernatural entity. Status: Unknown, presumed lost.",
                involved: ["Green T"]
            },
            {
                time: "08:00",
                title: "Archie Surrenders",
                type: "political",
                severity: "medium",
                icon: "🏳️",
                description: "Archie surrenders to Speaker L to buy time, but a glass monster emerges from a mirror, complicating the situation.",
                involved: ["Archie", "Speaker L", "Pond Patrol"]
            }
        ]
    },
    {
        day: 18,
        date: { day: 18, monthIndex: 6, year: 1040 },
        title: "Resolution 17-A",
        events: [
            {
                time: "10:00",
                title: "Emergency Powers Granted",
                type: "governance",
                severity: "critical",
                icon: "👑",
                description: "Council unanimously passes Emergency Resolution 17-A, granting Speaker L emergency powers. The Accountability Docket is established.",
                involved: ["Speaker L", "Full Council"]
            },
            {
                time: "13:00",
                title: "Supernatural Sovereignty Act",
                type: "political",
                severity: "critical",
                icon: "⚖️",
                description: "The Regal Empire passes a law declaring organized vampires and werewolves illegal, effectively declaring war on supernatural factions.",
                involved: ["Regal Empire", "Onyx Hand", "Moonfang Pack"]
            },
            {
                time: "18:30",
                title: "Raventree Standoff",
                type: "military",
                severity: "medium",
                icon: "🏚️",
                description: "Speaker L's Pond Patrol besieges Archie and hjumpik in the manor after a failed healing attempt on Eager.",
                involved: ["Speaker L", "Archie", "hjumpik", "Eager"]
            }
        ]
    },
    {
        day: 16,
        date: { day: 16, monthIndex: 6, year: 1040 },
        title: "The Day of Betrayal",
        events: [
            {
                time: "14:00",
                title: "Scavenging Doctrine Vote",
                type: "governance",
                severity: "medium",
                icon: "🗳️",
                description: "Dan's proposal for cautious expeditions defeats Archie's high-risk plan 5-1. First major policy shift toward safety.",
                involved: ["Dan", "Archie", "Council"]
            },
            {
                time: "19:30",
                title: "The Dinner That Broke Time",
                type: "exploration",
                severity: "critical",
                icon: "⏰",
                description: "Toads enter Shadeward Mansion seeking Archie. Encounter the Oracle, time loops, multiple Archie clones, and an Iron Legion raid.",
                involved: ["Multiple toads", "The Oracle", "Iron Legion"]
            },
            {
                time: "21:00",
                title: "The Mole Revealed",
                type: "intel",
                severity: "critical",
                icon: "🎭",
                description: "The Mole's true allegiance to the Iron Legion is exposed. Bones is captured during the chaos. Trust in the Scout cohort shattered.",
                involved: ["The Mole", "Bones", "Iron Legion"]
            }
        ]
    },
    {
        day: 12,
        date: { day: 12, monthIndex: 6, year: 1040 },
        title: "The Barrel Secret",
        events: [
            {
                time: "11:00",
                title: "FNG Remi Arrives",
                type: "political",
                severity: "low",
                icon: "📦",
                description: "Remi is discovered in a crate. Wario gives her an exploding box. She survives and is offered a place in his crew.",
                involved: ["Remi", "Wario", "Bowser"]
            },
            {
                time: "11:15",
                title: "Cone of Cold Incident",
                type: "friendly_fire",
                severity: "high",
                icon: "❄️",
                description: "Waluigi's Cone of Cold spell freezes Eager solid and injures Remi. Eager presumed dead by the crew.",
                involved: ["Waluigi", "Eager", "Remi"]
            },
            {
                time: "15:00",
                title: "150 Toads Discovered",
                type: "intel",
                severity: "critical",
                icon: "🪣",
                description: "The Iron Legion reveals that 150+ trafficked toads are hidden in barrels throughout the ship, accessible via Mini-Mushroom.",
                involved: ["hjumpik", "Iron Legion informant", "150 toads"]
            }
        ]
    },
    {
        day: 5,
        date: { day: 5, monthIndex: 6, year: 1040 },
        title: "The Great Betrayal",
        events: [
            {
                time: "18:45",
                title: "X.O. Neutralized",
                type: "combat",
                severity: "critical",
                icon: "⚔️",
                description: "The party, with critical assistance from Dan the Toad, neutralizes X.O. and regains control of the Vigilance.",
                involved: ["Dan", "Party members", "X.O."]
            }
        ]
    }
];

// ========================================
// STATE MANAGEMENT
// ========================================

let appState = {
    selectedMember: null,
    currentFilter: 'all',
    currentCohortFilter: 'all',
    currentSort: 'name',
    activeTab: 'overview',
    detailTab: 'stats',
    timelineFilter: 7,
    governanceTab: 'speaker',
    allToads: [],
    factionStats: null,
    displayLimit: 50,
    searchQuery: ''
};

// ========================================
// DATA INITIALIZATION
// ========================================

function initializeAllToads() {
    const coreToads = Object.values(CORE_TOADS);
    const barrelSurvivors = generateBarrelSurvivors();
    const cohortMembers = generateCohortMembers();
    
    appState.allToads = [...coreToads, ...barrelSurvivors, ...cohortMembers];
    appState.factionStats = calculateFactionStats(appState.allToads);
    
    return appState.allToads;
}

function calculateFactionStats(allToads) {
    const nonHostile = allToads.filter(t => t.statusType !== 'hostile');
    
    const stats = {
        total: nonHostile.length,
        active: nonHostile.filter(t => t.statusType === 'active').length,
        injured: nonHostile.filter(t => t.statusType === 'injured').length,
        critical: nonHostile.filter(t => t.statusType === 'critical').length,
        mia: nonHostile.filter(t => t.statusType === 'mia').length,
        special: nonHostile.filter(t => t.statusType === 'special').length,
        deceased: 3, // Known deceased from barrels
        
        totalXP: nonHostile.reduce((sum, t) => sum + (t.xp || 0), 0),
        averageLevel: 0,
        levelDistribution: {},
        
        cohortBreakdown: {},
        classBreakdown: {},
        
        morale: 0,
        loyalty: 0,
        combatReadiness: 0
    };
    
    let totalLevel = 0;
    let moraleSum = 0;
    let loyaltySum = 0;
    let combatReady = 0;
    
    nonHostile.forEach(toad => {
        // Levels
        totalLevel += toad.level || 1;
        stats.levelDistribution[toad.level] = (stats.levelDistribution[toad.level] || 0) + 1;
        
        // Cohorts
        const cohort = toad.cohort || "Unassigned";
        stats.cohortBreakdown[cohort] = (stats.cohortBreakdown[cohort] || 0) + 1;
        
        // Classes
        stats.classBreakdown[toad.class] = (stats.classBreakdown[toad.class] || 0) + 1;
        
        // Morale (based on status)
        let toadMorale = 70;
        if (toad.statusType === 'active') { toadMorale += 20; combatReady++; }
        if (toad.statusType === 'injured') toadMorale -= 10;
        if (toad.statusType === 'critical') toadMorale -= 30;
        if (toad.statusType === 'special') toadMorale += 5;
        if (toad.conditions?.some(c => c.includes('Trauma'))) toadMorale -= 15;
        moraleSum += Math.max(0, Math.min(100, toadMorale));
        
        // Loyalty
        let toadLoyalty = toad.cohort ? 75 : 50;
        if (toad.isCore) toadLoyalty += 15;
        if (toad.cohort === 'Pond Patrol') toadLoyalty = 100;
        loyaltySum += toadLoyalty;
    });
    
    stats.averageLevel = (totalLevel / nonHostile.length).toFixed(1);
    stats.morale = Math.round(moraleSum / nonHostile.length);
    stats.loyalty = Math.round(loyaltySum / nonHostile.length);
    stats.combatReadiness = Math.round((combatReady / nonHostile.length) * 100);
    
    // Add cohort-specific stats
    stats.cohortStats = GOVERNANCE.cohorts.map(c => ({
        ...c,
        memberCount: stats.cohortBreakdown[c.name] || c.members
    }));
    
    return stats;
}

// ========================================
// UTILITY FUNCTIONS
// ========================================

function getStatusColor(statusType) {
    const colors = {
        active: '#4a9c6d',
        injured: '#c9a227',
        critical: '#c94a4a',
        special: '#9b59b6',
        mia: '#e67e22',
        hostile: '#c0392b'
    };
    return colors[statusType] || '#7f8c8d';
}

function getStatusIcon(statusType) {
    const icons = {
        active: '✓',
        injured: '⚠',
        critical: '💔',
        special: '⭐',
        mia: '❓',
        hostile: '☠️'
    };
    return icons[statusType] || '•';
}

function formatLogEntry(entry) {
    const typeIcons = {
        combat: '⚔️',
        stealth: '🌑',
        magic: '✨',
        exploration: '🗺️',
        political: '📜',
        levelup: '🎉',
        ability: '⭐',
        status: '📋',
        injury: '💔',
        survival: '🏃',
        intel: '📍'
    };
    return {
        ...entry,
        icon: typeIcons[entry.type] || '•'
    };
}

// ========================================
// RENDER FUNCTIONS
// ========================================

function renderGovernanceSection() {
    // Render to BOTH locations
    const containers = [
        document.getElementById('governance-content'),
        document.getElementById('governance-full-content')
    ].filter(c => c !== null);
    
    if (containers.length === 0) return;
    
    const speaker = GOVERNANCE.speaker;
    const council = GOVERNANCE.council;
    
    const html = `
        <div class="governance-tabs">
            <button class="gov-tab ${appState.governanceTab === 'speaker' ? 'active' : ''}" data-tab="speaker">
                👑 Speaker L
            </button>
            <button class="gov-tab ${appState.governanceTab === 'heroes' ? 'active' : ''}" data-tab="heroes">
                ⭐ Liberators
            </button>
            <button class="gov-tab ${appState.governanceTab === 'council' ? 'active' : ''}" data-tab="council">
                🏛️ Council
            </button>
            <button class="gov-tab ${appState.governanceTab === 'cohorts' ? 'active' : ''}" data-tab="cohorts">
                👥 Cohorts
            </button>
        </div>
        
        <div class="governance-content-area">
            ${appState.governanceTab === 'speaker' ? renderSpeakerPanel(speaker) : ''}
            ${appState.governanceTab === 'heroes' ? renderHeroesCouncilPanel() : ''}
            ${appState.governanceTab === 'council' ? renderCouncilPanel(council) : ''}
            ${appState.governanceTab === 'cohorts' ? renderCohortsPanel() : ''}
        </div>
    `;
    
    // Attach tab listeners
containers.forEach(container => {
    container.innerHTML = html;
});

// Attach tab listeners to ALL governance tabs
document.querySelectorAll('.gov-tab').forEach(tab => {
    tab.addEventListener('click', () => {
        appState.governanceTab = tab.dataset.tab;
        renderGovernanceSection();
    });
});
}

function renderSpeakerPanel(speaker) {
    return `
        <div class="speaker-panel">
            <div class="speaker-header">
                <div class="speaker-portrait-large">${speaker.portrait}</div>
                <div class="speaker-identity">
                    <h3>${speaker.name}</h3>
                    <div class="speaker-full-title">${speaker.fullTitle}</div>
                    <div class="speaker-level">Level ${speaker.level} ${CLASS_DEFINITIONS[speaker.class]?.name || 'Leader'}</div>
                    <div class="authority-badge">${speaker.authority_level}</div>
                </div>
            </div>
            
            <div class="speaker-quote">
                <p>"${speaker.quotes[0]}"</p>
                <cite>— ${speaker.name}</cite>
            </div>
            
            <div class="speaker-description">${speaker.description}</div>
            
            <div class="speaker-philosophy">
                <strong>Philosophy:</strong> ${speaker.philosophy}
            </div>
            
            <div class="speaker-section">
                <h4>Executive Powers</h4>
                <div class="powers-grid">
                    ${speaker.powers.map(p => `
                        <div class="power-card">
                            <div class="power-name">${p.name}</div>
                            <div class="power-desc">${p.description}</div>
                            ${p.requires ? `<div class="power-requires">Requires: ${p.requires}</div>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="speaker-section">
                <h4>Leadership Abilities</h4>
                <div class="abilities-grid">
                    ${speaker.abilities.map(a => `
                        <div class="ability-card">
                            <div class="ability-header">
                                <span class="ability-name">${a.name}</span>
                                <span class="ability-level">Lv ${a.level}</span>
                            </div>
                            <div class="ability-desc">${a.description}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="speaker-section">
                <h4>Active Decrees</h4>
                <div class="decrees-list">
                    ${speaker.current_decrees.map(d => `
                        <div class="decree-card status-${d.status}">
                            <div class="decree-header">
                                <span class="decree-id">${d.id}</span>
                                <span class="decree-status">${d.status.replace('_', ' ').toUpperCase()}</span>
                            </div>
                            <div class="decree-title">${d.title}</div>
                            <div class="decree-summary">${d.summary}</div>
                            <div class="decree-date">Issued: ${d.date}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
            
            <div class="speaker-section">
                <h4>Combat Statistics</h4>
                <div class="stats-grid compact">
                    <div class="stat-item"><span class="stat-value">${speaker.stats.hp}/${speaker.stats.maxHp}</span><span class="stat-label">HP</span></div>
                    <div class="stat-item"><span class="stat-value">${speaker.stats.ac}</span><span class="stat-label">AC</span></div>
                    <div class="stat-item"><span class="stat-value">${speaker.stats.str}</span><span class="stat-label">STR</span></div>
                    <div class="stat-item"><span class="stat-value">${speaker.stats.dex}</span><span class="stat-label">DEX</span></div>
                    <div class="stat-item"><span class="stat-value">${speaker.stats.con}</span><span class="stat-label">CON</span></div>
                    <div class="stat-item"><span class="stat-value">${speaker.stats.int}</span><span class="stat-label">INT</span></div>
                    <div class="stat-item"><span class="stat-value">${speaker.stats.wis}</span><span class="stat-label">WIS</span></div>
                    <div class="stat-item"><span class="stat-value">${speaker.stats.cha}</span><span class="stat-label">CHA</span></div>
                </div>
            </div>
        </div>
    `;
}

function renderCouncilPanel(council) {
    return `
        <div class="council-panel">
            <div class="council-header-info">
                <h3>${council.name}</h3>
                <p>${council.description}</p>
                <div class="council-meta">
                    <span><strong>Seats:</strong> ${council.seats}</span>
                    <span><strong>Filled:</strong> ${council.members.filter(m => m.name !== 'VACANT').length}</span>
                    <span><strong>Current Session:</strong> ${council.current_session}</span>
                </div>
            </div>
            <div class="liberators-note">
                <h4>⭐ The Liberators' Circle</h4>
                <p>The original heroes who freed the 150 toads hold special advisory status with selective veto power. 
                Currently <strong>${GOVERNANCE.heroes_council.active_members}</strong> of 
                <strong>${GOVERNANCE.heroes_council.seats.length}</strong> Liberators are able to exercise their privileges.</p>
                <p class="note-detail">Liberators have a non-voting voice at all Council meetings and can invoke the 
                <strong>Liberation Veto</strong> to block any decision that would betray the freed toads.</p>
            </div>
        </div>            
            <div class="council-members-grid">
                ${council.members.map(member => `
                    <div class="council-member-card ${member.name === 'VACANT' ? 'vacant' : ''}">
                        <div class="member-portrait">${member.portrait}</div>
                        <div class="member-info">
                            <div class="member-seat">Seat ${member.seat}</div>
                            <div class="member-name">${member.name}</div>
                            <div class="member-cohort">${member.cohort}</div>
                            ${member.level ? `
                                <div class="member-stats-row">
                                    <span class="member-level">Lv ${member.level}</span>
                                    <span class="member-stance">${member.stance}</span>
                                </div>
                                <div class="loyalty-bar-container">
                                    <div class="loyalty-bar" style="width: ${member.loyalty}%"></div>
                                    <span class="loyalty-text">${member.loyalty}% Loyal</span>
                                </div>
                                <div class="member-description">${member.description}</div>
                                ${member.current_vote ? `
                                    <div class="member-vote">
                                        <strong>Current Vote:</strong> ${member.current_vote}
                                    </div>
                                ` : ''}
                            ` : `
                                <div class="member-note">${member.note || 'Seat vacant'}</div>
                            `}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderCohortsPanel() {
    return `
        <div class="cohorts-panel">
            <div class="cohorts-overview">
                <h4>Cohort Overview</h4>
                <p>The Liberated Toads are organized into specialized cohorts, each with distinct purposes and leadership.</p>
            </div>
            
            <div class="cohorts-grid">
                ${GOVERNANCE.cohorts.map(cohort => `
                    <div class="cohort-card status-${cohort.status}" style="--cohort-color: ${cohort.color}">
                        <div class="cohort-header">
                            <span class="cohort-icon">${cohort.icon}</span>
                            <div class="cohort-title">
                                <h4>${cohort.name}</h4>
                                <div class="cohort-leader">${cohort.leader || 'No Leader'}</div>
                            </div>
                            <div class="cohort-count">${cohort.members}${cohort.maxMembers ? `/${cohort.maxMembers}` : ''}</div>
                        </div>
                        
                        <div class="cohort-purpose">${cohort.purpose}</div>
                        <div class="cohort-role"><em>${cohort.role}</em></div>
                        
                        <div class="cohort-status-row">
                            <span class="cohort-status-badge">${cohort.status.toUpperCase()}</span>
                            <span class="cohort-status-detail">${cohort.statusDetail}</span>
                        </div>
                        
                        <div class="cohort-bars">
                            <div class="cohort-bar">
                                <span class="bar-label">Loyalty</span>
                                <div class="bar-track"><div class="bar-fill" style="width: ${cohort.loyalty}%; background: ${cohort.color}"></div></div>
                                <span class="bar-value">${cohort.loyalty}%</span>
                            </div>
                            <div class="cohort-bar">
                                <span class="bar-label">Morale</span>
                                <div class="bar-track"><div class="bar-fill morale" style="width: ${cohort.morale}%"></div></div>
                                <span class="bar-value">${cohort.morale}%</span>
                            </div>
                            <div class="cohort-bar">
                                <span class="bar-label">Combat Ready</span>
                                <div class="bar-track"><div class="bar-fill combat" style="width: ${cohort.combatReadiness}%"></div></div>
                                <span class="bar-value">${cohort.combatReadiness}%</span>
                            </div>
                        </div>
                        
                        ${cohort.notable_members ? `
                            <div class="cohort-notable">
                                <strong>Notable Members:</strong>
                                <ul>
                                    ${cohort.notable_members.map(m => `
                                        <li>${m.name} (Lv ${m.level}) - ${m.role}</li>
                                    `).join('')}
                                </ul>
                            </div>
                        ` : ''}
                        
                        ${cohort.casualties ? `
                            <div class="cohort-casualties">
                                <strong>Casualties:</strong>
                                Deceased: ${cohort.casualties.deceased || 0}, 
                                Wounded: ${cohort.casualties.wounded || 0}, 
                                Critical: ${cohort.casualties.critical || 0}
                            </div>
                        ` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderVotingSection() {
    const container = document.getElementById('voting-content');
    if (!container) return;
    
    const voting = VOTING_SYSTEM;
    
    container.innerHTML = `
        <div class="voting-types-section">
            <h4>Vote Types</h4>
            <div class="vote-types-grid">
                ${Object.entries(voting.types).map(([key, type]) => `
                    <div class="vote-type-card">
                        <div class="vote-type-name">${type.name}</div>
                        <div class="vote-type-details">
                            <div><strong>Threshold:</strong> ${type.threshold}</div>
                            <div><strong>Duration:</strong> ${type.duration}</div>
                            <div><strong>Called by:</strong> ${type.caller}</div>
                        </div>
                        <div class="vote-type-desc">${type.description}</div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="active-votes-section">
            <h3>🗳️ Active Votes</h3>
            ${voting.active_votes.map(vote => renderVoteCard(vote)).join('')}
        </div>
        
        <div class="recent-votes-section">
            <h3>📋 Recent Votes</h3>
            <div class="recent-votes-list">
                ${voting.recent_votes.map(vote => `
                    <div class="recent-vote-card ${vote.status}">
                        <div class="recent-vote-header">
                            <span class="vote-id">${vote.id}</span>
                            <span class="vote-type-badge">${vote.type.toUpperCase()}</span>
                            <span class="vote-status-badge">${vote.status.toUpperCase()}</span>
                        </div>
                        <div class="recent-vote-title">${vote.title}</div>
                        <div class="recent-vote-result">
                            <strong>Result:</strong> ${vote.result}
                        </div>
                        <div class="recent-vote-tally">
                            For: ${vote.final_tally.for} | Against: ${vote.final_tally.against} | Abstain: ${vote.final_tally.abstain}
                        </div>
                        <div class="recent-vote-summary">${vote.summary}</div>
                        ${vote.dissent ? `<div class="recent-vote-dissent"><em>Dissent: ${vote.dissent}</em></div>` : ''}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

function renderVoteCard(vote) {
    const totalVotes = vote.options.reduce((sum, o) => sum + o.votes, 0);
    
    return `
        <div class="vote-card ${vote.status}">
            <div class="vote-header">
                <div class="vote-id">${vote.id}</div>
                <div class="vote-meta">
                    <span class="vote-type-badge">${vote.type.toUpperCase()}</span>
                    <span class="vote-deadline">Deadline: ${getDynamicTimestamp(vote.deadline)}</span>
                    <span class="vote-status-badge ${vote.status}">${vote.status.toUpperCase()}</span>
                </div>
            </div>
            
            <h4 class="vote-title">${vote.title}</h4>
            <p class="vote-description">${vote.description}</p>
            ${vote.background ? `<p class="vote-background"><em>${vote.background}</em></p>` : ''}
            
            <div class="vote-options">
                ${vote.options.map(opt => {
                    const isRecommended = opt.id === vote.speaker_recommendation;
                    const percentage = totalVotes > 0 ? (opt.votes / vote.current_quorum) * 100 : 0;
                    
                    return `
                        <div class="vote-option ${isRecommended ? 'recommended' : ''}">
                            <div class="option-header">
                                <span class="option-id">${opt.id}</span>
                                <span class="option-text">${opt.text}</span>
                                ${isRecommended ? '<span class="speaker-rec">👑 Speaker Recommended</span>' : ''}
                            </div>
                            <div class="option-progress">
                                <div class="option-bar">
                                    <div class="option-fill" style="width: ${percentage}%"></div>
                                </div>
                                <span class="option-count">${opt.votes} vote${opt.votes !== 1 ? 's' : ''}</span>
                            </div>
                            <div class="option-voters">${opt.voters.length > 0 ? opt.voters.join(', ') : 'No votes yet'}</div>
                            ${opt.pros || opt.cons ? `
                                <div class="option-analysis">
                                    ${opt.pros ? `<div class="pros"><strong>Pros:</strong> ${opt.pros.join(', ')}</div>` : ''}
                                    ${opt.cons ? `<div class="cons"><strong>Cons:</strong> ${opt.cons.join(', ')}</div>` : ''}
                                </div>
                            ` : ''}
                        </div>
                    `;
                }).join('')}
            </div>
            
            <div class="vote-footer">
                <div class="quorum-status ${vote.current_quorum >= vote.quorum_required ? 'met' : 'needed'}">
                    Quorum: ${vote.current_quorum}/${vote.quorum_required}
                    ${vote.current_quorum >= vote.quorum_required ? '✓ Met' : '⚠ Needed'}
                </div>
                ${vote.speaker_statement ? `
                    <div class="speaker-statement">
                        <strong>Speaker L:</strong> "${vote.speaker_statement}"
                    </div>
                ` : ''}
                ${vote.notes ? `<div class="vote-notes"><em>${vote.notes}</em></div>` : ''}
            </div>
        </div>
    `;
}

function renderAccountabilityDocket() {
    const container = document.getElementById('docket-content');
    if (!container) return;
    
    const docket = ACCOUNTABILITY_DOCKET;
    
    container.innerHTML = `
        <div class="docket-quote">
            <p>"${docket.quote.text}"</p>
            <cite>— ${docket.quote.speaker}</cite>
        </div>
        
        <div class="docket-pillars">
            ${docket.pillars.map(p => `
                <div class="pillar">
                    <span class="pillar-icon">${p.icon}</span>
                    <strong>${p.name}</strong>
                    <p>${p.description}</p>
                </div>
            `).join('')}
        </div>
        
        <div class="docket-protocol">
            <strong>ENGAGEMENT PROTOCOL:</strong> ${docket.protocol}
        </div>
        
        <div class="docket-targets">
            <h4>Active Targets</h4>
            ${docket.targets.map(target => `
                <div class="docket-target priority-${target.priority} status-${target.status.replace('_', '-')}">
                    <div class="target-header">
                        <span class="target-portrait">${target.portrait}</span>
                        <div class="target-identity">
                            <span class="target-name">${target.name}</span>
                            <div class="target-badges">
                                <span class="priority-badge">${target.priority.toUpperCase()}</span>
                                <span class="status-badge">${target.status.replace('_', ' ').toUpperCase()}</span>
                            </div>
                        </div>
                    </div>
                    
                    <div class="target-crimes">
                        <strong>Charges:</strong>
                        <ul>
                            ${target.crimes.map(c => `<li>${c}</li>`).join('')}
                        </ul>
                    </div>
                    
                    ${target.evidence ? `
                        <div class="target-evidence">
                            <strong>Evidence:</strong>
                            <ul>
                                ${target.evidence.map(e => `<li>${e}</li>`).join('')}
                            </ul>
                        </div>
                    ` : ''}
                    
                    <div class="target-notes">${target.notes}</div>
                    
                    <div class="target-footer">
                        <span class="target-last-seen"><strong>Last Seen:</strong> ${target.last_seen}</span>
                        <span class="target-added"><strong>Added:</strong> ${target.added}</span>
                    </div>
                    
                    ${target.speaker_note ? `
                        <div class="speaker-note">
                            <strong>Speaker L's Note:</strong> "${target.speaker_note}"
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>
        
        ${docket.resolved.length > 0 ? `
            <div class="docket-resolved">
                <h4>Resolved Cases</h4>
                ${docket.resolved.map(r => `
                    <div class="resolved-case">
                        <div class="resolved-header">
                            <span class="resolved-name">${r.name}</span>
                            <span class="resolved-date">${r.date}</span>
                        </div>
                        <div class="resolved-resolution"><strong>Resolution:</strong> ${r.resolution}</div>
                        <div class="resolved-crimes"><strong>Crimes:</strong> ${r.crimes.join(', ')}</div>
                        <div class="resolved-notes">${r.notes}</div>
                    </div>
                `).join('')}
            </div>
        ` : ''}
    `;
}

function renderFactionStats() {
    const stats = appState.factionStats;
    const container = document.getElementById('faction-stats');
    if (!container || !stats) return;
    
    container.innerHTML = `
        <div class="stats-cards-grid">
            <div class="stat-card large">
                <div class="stat-icon">👥</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.total}</div>
                    <div class="stat-label">Total Members</div>
                    <div class="stat-breakdown">
                        <span class="breakdown-item active">${stats.active} Active</span>
                        <span class="breakdown-item injured">${stats.injured} Injured</span>
                        <span class="breakdown-item critical">${stats.critical} Critical</span>
                        <span class="breakdown-item mia">${stats.mia} MIA</span>
                        <span class="breakdown-item special">${stats.special} Special</span>
                    </div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">⭐</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.totalXP.toLocaleString()}</div>
                    <div class="stat-label">Total Faction XP</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">📊</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.averageLevel}</div>
                    <div class="stat-label">Average Level</div>
                </div>
            </div>
            
            <div class="stat-card">
                <div class="stat-icon">⚔️</div>
                <div class="stat-content">
                    <div class="stat-value">${stats.combatReadiness}%</div>
                    <div class="stat-label">Combat Ready</div>
                </div>
            </div>
        </div>
        
        <div class="stats-bars-section">
            <div class="stat-bar-row">
                <span class="bar-label">Faction Morale</span>
                <div class="bar-track large">
                    <div class="bar-fill ${stats.morale < 50 ? 'low' : stats.morale < 75 ? 'medium' : 'high'}" 
                         style="width: ${stats.morale}%"></div>
                </div>
                <span class="bar-value">${stats.morale}%</span>
            </div>
            <div class="stat-bar-row">
                <span class="bar-label">Faction Loyalty</span>
                <div class="bar-track large">
                    <div class="bar-fill loyalty ${stats.loyalty < 50 ? 'low' : stats.loyalty < 75 ? 'medium' : 'high'}" 
                         style="width: ${stats.loyalty}%"></div>
                </div>
                <span class="bar-value">${stats.loyalty}%</span>
            </div>
        </div>
        
        <div class="level-distribution">
            <h4>Level Distribution</h4>
            <div class="level-bars">
                ${Object.entries(stats.levelDistribution)
                    .sort((a, b) => parseInt(a[0]) - parseInt(b[0]))
                    .map(([level, count]) => {
                        const percentage = (count / stats.total) * 100;
                        return `
                            <div class="level-bar-item">
                                <div class="level-label">Lv ${level}</div>
                                <div class="level-bar-track">
                                    <div class="level-bar-fill" style="width: ${percentage}%"></div>
                                </div>
                                <div class="level-count">${count}</div>
                            </div>
                        `;
                    }).join('')}
            </div>
        </div>
        
        <div class="class-distribution">
            <h4>Class Distribution</h4>
            <div class="class-pills">
                ${Object.entries(stats.classBreakdown)
                    .sort((a, b) => b[1] - a[1])
                    .map(([cls, count]) => {
                        const classDef = CLASS_DEFINITIONS[cls];
                        return `
                            <span class="class-pill">
                                ${classDef?.icon || '🐸'} ${classDef?.name || cls}: ${count}
                            </span>
                        `;
                    }).join('')}
            </div>
        </div>
    `;
}

function renderCrewRoster() {
    const container = document.getElementById('crew-grid');
    if (!container) return;
    
    let toads = [...appState.allToads];
    
    // Filter by search
    if (appState.searchQuery) {
        const query = appState.searchQuery.toLowerCase();
        toads = toads.filter(t => 
            t.name.toLowerCase().includes(query) ||
            t.class.toLowerCase().includes(query) ||
            t.cohort?.toLowerCase().includes(query)
        );
    }
    
    // Filter by status
    if (appState.currentFilter !== 'all') {
        toads = toads.filter(toad => {
            switch (appState.currentFilter) {
                case 'core': return toad.isCore;
                case 'active': return toad.statusType === 'active';
                case 'injured': return ['injured', 'critical'].includes(toad.statusType);
                case 'special': return ['special', 'mia'].includes(toad.statusType);
                case 'hostile': return toad.statusType === 'hostile';
                default: return true;
            }
        });
    }
    
    // Filter by cohort
    if (appState.currentCohortFilter !== 'all') {
        toads = toads.filter(t => t.cohort === appState.currentCohortFilter);
    }
    
    // Sort
    toads.sort((a, b) => {
        switch (appState.currentSort) {
            case 'level': return b.level - a.level;
            case 'xp': return b.xp - a.xp;
            case 'status': return (a.statusType || '').localeCompare(b.statusType || '');
            case 'cohort': return (a.cohort || 'ZZZ').localeCompare(b.cohort || 'ZZZ');
            case 'name':
            default: 
                // Core members first, then alphabetical
                if (a.isCore && !b.isCore) return -1;
                if (!a.isCore && b.isCore) return 1;
                return a.name.localeCompare(b.name);
        }
    });
    
    // Limit display
    const displayToads = toads.slice(0, appState.displayLimit);
    const hiddenCount = toads.length - displayToads.length;
    
    container.innerHTML = `
        ${displayToads.map(toad => renderToadCard(toad)).join('')}
        ${hiddenCount > 0 ? `
            <div class="load-more-card">
                <p>+ ${hiddenCount} more toads</p>
                <button class="load-more-btn" id="load-more-btn">Load More</button>
            </div>
        ` : ''}
    `;
    
    // Attach listeners
    attachRosterListeners();
}

function renderToadCard(toad) {
    const xpProgress = getXPProgress(toad.level, toad.xp);
    const hpPercentage = toad.stats?.maxHp ? (toad.stats.hp / toad.stats.maxHp) * 100 : 100;
    const classDef = CLASS_DEFINITIONS[toad.class];
    
    return `
        <div class="crew-card ${toad.isCore ? 'core' : ''} status-${toad.statusType}" 
             data-id="${toad.id}" 
             ${appState.selectedMember?.id === toad.id ? 'selected' : ''}>
            <div class="card-status-bar" style="background: ${getStatusColor(toad.statusType)}"></div>
            <span class="crew-status-badge ${toad.statusType}">${toad.statusType.toUpperCase()}</span>
            ${toad.isCore ? '<span class="core-badge">⭐ CORE</span>' : ''}
            ${toad.isCore ? '<span class="core-badge">⭐ LIBERATOR</span>' : ''}
            <div class="crew-card-header">
                <div class="crew-portrait">${toad.portrait}</div>
                <div class="crew-info">
                    <div class="crew-name">${toad.name}</div>
                    <div class="crew-title">${toad.title || ''}</div>
                    <div class="crew-meta">
                        <span class="crew-level">Lv ${toad.level}</span>
                        <span class="crew-class">${classDef?.icon || '🐸'} ${classDef?.name || toad.class}</span>
                    </div>
                    ${toad.cohort ? `<div class="crew-cohort">${toad.cohort}</div>` : ''}
                </div>
            </div>
            
            <div class="crew-card-body">
                <div class="xp-section">
                    <div class="xp-header">
                        <span class="xp-label">XP Progress</span>
                        <span class="xp-value">${xpProgress}%</span>
                    </div>
                    <div class="xp-bar-outer">
                        <div class="xp-bar-inner" style="width: ${xpProgress}%"></div>
                    </div>
                </div>
                
                ${toad.stats?.hp !== undefined ? `
                    <div class="hp-section">
                        <div class="hp-header">
                            <span class="hp-label">HP</span>
                            <span class="hp-value">${toad.stats.hp}/${toad.stats.maxHp}</span>
                        </div>
                        <div class="hp-bar-outer">
                            <div class="hp-bar-inner ${hpPercentage < 25 ? 'critical' : hpPercentage < 50 ? 'low' : ''}" 
                                 style="width: ${hpPercentage}%"></div>
                        </div>
                    </div>
                ` : ''}
                
                <div class="quick-stats">
                    <div class="quick-stat">
                        <div class="quick-stat-value">${toad.abilities?.length || 0}</div>
                        <div class="quick-stat-label">Abilities</div>
                    </div>
                    <div class="quick-stat">
                        <div class="quick-stat-value">${toad.xp?.toLocaleString() || 0}</div>
                        <div class="quick-stat-label">XP</div>
                    </div>
                    <div class="quick-stat">
                        <div class="quick-stat-value">${toad.log?.length || 0}</div>
                        <div class="quick-stat-label">Events</div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderDetailPanel(toad) {
    const panel = document.getElementById('member-detail-panel');
    if (!panel || !toad) return;
    
    const classDef = CLASS_DEFINITIONS[toad.class];
    const xpProgress = getXPProgress(toad.level, toad.xp);
    const xpToNext = getXPToNextLevel(toad.level, toad.xp);
    
    // Update header
    document.getElementById('detail-portrait').innerHTML = toad.portrait;
    document.getElementById('detail-name').textContent = toad.name;
    document.getElementById('detail-title').textContent = toad.title || '';
    document.getElementById('detail-level').textContent = `Level ${toad.level} ${classDef?.name || toad.class}`;
    document.getElementById('detail-weapon').textContent = toad.weapon || 'None';
    
    const statusBadge = document.getElementById('detail-status-badge');
    statusBadge.textContent = toad.status;
    statusBadge.className = `detail-status-badge ${toad.statusType}`;
    
    // Render tab content based on active tab
    renderDetailTabContent(toad);
    
    // Show panel
    panel.classList.remove('hidden');
    panel.classList.add('visible');
}
function renderDetailTabContent(toad) {
    // --- AUTO-LEVEL UP LOGIC ---
    // Checks if XP is high enough, updates Level/HP, and logs the event.
    const performAutoLevel = () => {
        let didLevelUp = false;
        
        while (true) {
            const nextLevel = toad.level + 1;
            const threshold = XP_THRESHOLDS[nextLevel];

            // Stop if max level or not enough XP
            if (!threshold || toad.xp < threshold) break;

            // 1. Apply Level Up
            toad.level = nextLevel;
            didLevelUp = true;
            
            // 2. Calculate Stats based on Class
            const classDef = CLASS_DEFINITIONS[toad.class] || CLASS_DEFINITIONS.commoner;
            const conMod = Math.floor(((toad.stats.con || 10) - 10) / 2);
            // HP Gain: (Hit Die / 2) + 1 + CON Mod
            const hpGain = Math.max(1, Math.floor((classDef.hit_die || 6) / 2) + 1 + conMod);

            toad.stats.maxHp += hpGain;
            toad.stats.hp += hpGain; // Heal the amount gained
            
            // 3. Update Proficiency
            toad.stats.proficiency = Math.ceil(toad.level / 4) + 1;

            // 4. Log Event
            if (!toad.log) toad.log = [];
            toad.log.push({
                day: CURRENT_GAME_DATE.day,
                event: `🎉 LEVEL UP! Auto-promoted to Level ${toad.level}`,
                xp: 0,
                type: "levelup"
            });

            // 5. Backfill Abilities into the data array (for data consistency)
            if (classDef.skills) {
                classDef.skills.forEach(skill => {
                    if (skill.level === toad.level) {
                        if (!toad.abilities.some(a => a.name === skill.name)) {
                            toad.abilities.push({ name: skill.name, unlocked: true });
                            toad.log.push({
                                day: CURRENT_GAME_DATE.day,
                                event: `⭐ Ability Unlock: ${skill.name}`,
                                xp: 0,
                                type: "ability"
                            });
                        }
                    }
                });
            }
        }
        return didLevelUp;
    };

    // Run the check immediately before rendering
    const leveledUp = performAutoLevel();

    // Refresh Header elements if a level up occurred
    if (leveledUp) {
        const headerLevel = document.getElementById('detail-level');
        const classDef = CLASS_DEFINITIONS[toad.class];
        if (headerLevel) headerLevel.textContent = `Level ${toad.level} ${classDef?.name || toad.class}`;
    }
    // --------------------------------

    const classDef = CLASS_DEFINITIONS[toad.class];
    
    // Stats tab
    const statsContent = document.getElementById('tab-stats');
    if (statsContent && appState.detailTab === 'stats') {
        const currentLevelStart = XP_THRESHOLDS[toad.level] || 0;
        const nextLevelThreshold = XP_THRESHOLDS[toad.level + 1];
        
        let xpProgress = 0;
        let nextLevelText = "";
        
        if (!nextLevelThreshold) {
            xpProgress = 100;
            nextLevelText = "MAX LEVEL";
        } else {
            const needed = nextLevelThreshold - toad.xp;
            const levelRange = nextLevelThreshold - currentLevelStart;
            const progress = toad.xp - currentLevelStart;
            xpProgress = Math.min(100, Math.floor((progress / levelRange) * 100));
            nextLevelText = `${needed.toLocaleString()} XP to Level ${toad.level + 1}`;
        }

        const hpPercentage = toad.stats?.maxHp ? (toad.stats.hp / toad.stats.maxHp) * 100 : 100;
        
        statsContent.innerHTML = `
            <div class="detail-section">
                <h4>Progression</h4>
                <div class="progression-container">
                    <div class="progression-header">
                        <span class="current-level">Level ${toad.level}</span>
                        <span class="next-level">${nextLevelText}</span>
                    </div>
                    <div class="progression-xp-bar">
                        <div class="progression-xp-fill" style="width: ${xpProgress}%"></div>
                        <span class="progression-xp-text">${toad.xp.toLocaleString()} / ${(nextLevelThreshold || 'MAX').toLocaleString()} XP</span>
                    </div>
                    <div class="xp-total">Total XP: ${toad.xp?.toLocaleString() || 0}</div>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Combat Statistics</h4>
                <div class="hp-display">
                    <div class="hp-label-row">
                        <span>Hit Points</span>
                        <span class="hp-numbers">${toad.stats?.hp || 0} / ${toad.stats?.maxHp || 0}</span>
                    </div>
                    <div class="hp-bar-large">
                        <div class="hp-fill ${hpPercentage < 25 ? 'critical' : hpPercentage < 50 ? 'low' : ''}" 
                             style="width: ${hpPercentage}%"></div>
                    </div>
                </div>
                
                <div class="stats-grid">
                    <div class="stat-item"><span class="stat-value">${toad.stats?.ac || 10}</span><span class="stat-label">AC</span></div>
                    <div class="stat-item"><span class="stat-value">${toad.stats?.speed || 30}</span><span class="stat-label">Speed</span></div>
                    <div class="stat-item"><span class="stat-value">${toad.stats?.str || 10}</span><span class="stat-label">STR</span></div>
                    <div class="stat-item"><span class="stat-value">${toad.stats?.dex || 10}</span><span class="stat-label">DEX</span></div>
                    <div class="stat-item"><span class="stat-value">${toad.stats?.con || 10}</span><span class="stat-label">CON</span></div>
                    <div class="stat-item"><span class="stat-value">${toad.stats?.int || 10}</span><span class="stat-label">INT</span></div>
                    <div class="stat-item"><span class="stat-value">${toad.stats?.wis || 10}</span><span class="stat-label">WIS</span></div>
                    <div class="stat-item"><span class="stat-value">${toad.stats?.cha || 10}</span><span class="stat-label">CHA</span></div>
                </div>
            </div>
            
            ${toad.conditions?.length > 0 ? `
                <div class="detail-section">
                    <h4>Conditions</h4>
                    <div class="conditions-list">
                        ${toad.conditions.map(c => `<span class="condition-tag">${c}</span>`).join('')}
                    </div>
                </div>
            ` : ''}
            
            ${toad.equipment?.length > 0 ? `
                <div class="detail-section">
                    <h4>Equipment</h4>
                    <div class="equipment-list">
                        ${toad.equipment.map(e => `
                            <div class="equipment-item">
                                <span class="equip-name">${e.name}</span>
                                ${e.bonus ? `<span class="equip-bonus">${e.bonus}</span>` : ''}
                                ${e.description ? `<span class="equip-desc">${e.description}</span>` : ''}
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}
        `;
    }
    
    // Skills/Abilities tab
    const skillsContent = document.getElementById('tab-skills');
    if (skillsContent && appState.detailTab === 'skills') {
        const classSkills = classDef?.skills || [];
        
        skillsContent.innerHTML = `
            <div class="detail-section">
                <h4>Class: ${classDef?.name || toad.class}</h4>
                <p class="class-description">${classDef?.description || 'No description available.'}</p>
                <div class="class-info">
                    <span>Hit Die: d${classDef?.hit_die || 6}</span>
                    <span>Primary: ${classDef?.primary_stat?.toUpperCase() || 'N/A'}</span>
                    <span>Proficiency: +${toad.stats.proficiency || 2,
        notes: ["Engaged in combat with a color-shifting creature; demonstrated high bravery by charging into the fray."]
    }</span>
                </div>
            </div>
            
            <div class="detail-section">
                <h4>Abilities</h4>
                <p class="skill-tree-hint">Unlocked abilities shown in green. Gold border = next unlock at level up.</p>
                <div class="skill-tree">
                    ${classSkills.map(skill => {
                        // --- FIX: Logic uses Level comparison, not just array presence ---
                        // This ensures pre-made characters (like Dan at lvl 5) show early skills as unlocked
                        const isUnlocked = toad.level >= skill.level;
                        const isNext = !isUnlocked && skill.level === toad.level + 1;
                        
                        return `
                            <div class="skill-node ${isUnlocked ? 'unlocked' : isNext ? 'next-unlock' : 'locked'}">
                                <div class="skill-node-icon">${skill.icon || ABILITY_TYPES[skill.type]?.icon || '⭐'}</div>
                                <div class="skill-node-content">
                                    <div class="skill-node-name">${skill.name}</div>
                                    <div class="skill-node-desc">${skill.description}</div>
                                    <div class="skill-node-req">Requires Level ${skill.level}</div>
                                </div>
                                <span class="skill-node-status">
                                    ${isUnlocked ? '✓ Unlocked' : isNext ? 'Next Level' : `Lv ${skill.level}`}
                                </span>
                            </div>
                        `;
                    }).join('')}
                </div>
            </div>
            
            ${toad.spells ? `
                <div class="detail-section">
                    <h4>Spellcasting</h4>
                    <div class="spell-slots">
                        <strong>Spell Slots:</strong>
                        ${Object.entries(toad.spells.slots || {}).map(([lvl, count]) => 
                            `<span class="slot-badge">Lv${lvl}: ${count}</span>`
                        ).join('')}
                    </div>
                    ${toad.spells.known ? `
                        <div class="spells-known">
                            ${Object.entries(toad.spells.known).map(([lvl, spells]) => `
                                <div class="spell-level">
                                    <strong>${lvl === 'cantrips' ? 'Cantrips' : `Level ${lvl}`}:</strong>
                                    ${spells.join(', ')}
                                </div>
                            `).join('')}
                        </div>
                    ` : ''}
                </div>
            ` : ''}
        `;
    }
    
    // Log tab
    const logContent = document.getElementById('tab-log');
    if (logContent && appState.detailTab === 'log') {
        const sortedLog = [...(toad.log || [])].sort((a, b) => b.day - a.day);
        
        logContent.innerHTML = `
            <div class="detail-section">
                <h4>Activity Log</h4>
                <div class="activity-log">
                    ${sortedLog.length > 0 ? sortedLog.map(entry => {
                        const formatted = formatLogEntry(entry);
                        const isSpecial = ['levelup', 'ability', 'status'].includes(entry.type);
                        
                        return `
                            <div class="log-entry ${entry.type} ${isSpecial ? 'special' : ''}">
                                <span class="log-day">Day ${entry.day}</span>
                                <span class="log-icon">${formatted.icon}</span>
                                <span class="log-content">${entry.event}</span>
                                ${entry.xp > 0 ? `<span class="log-xp">+${entry.xp} XP</span>` : ''}
                            </div>
                        `;
                    }).join('') : '<p class="no-log">No activity recorded.</p>'}
                </div>
            </div>
            
            ${toad.background ? `
                <div class="detail-section">
                    <h4>Background</h4>
                    <p class="toad-background">${toad.background}</p>
                </div>
            ` : ''}
            
            ${toad.personality ? `
                <div class="detail-section">
                    <h4>Personality</h4>
                    <div class="personality-traits">
                        <div><strong>Traits:</strong> ${toad.personality.traits?.join(', ') || 'Unknown'}</div>
                        <div><strong>Ideal:</strong> ${toad.personality.ideal || 'Unknown'}</div>
                        <div><strong>Bond:</strong> ${toad.personality.bond || 'Unknown'}</div>
                        <div><strong>Flaw:</strong> ${toad.personality.flaw || 'Unknown'}</div>
                    </div>
                </div>
            ` : ''}
            
            ${toad.relationships ? `
                <div class="detail-section">
                    <h4>Relationships</h4>
                    <div class="relationships">
                        ${toad.relationships.allies?.length ? `<div><strong>Allies:</strong> ${toad.relationships.allies.join(', ')}</div>` : ''}
                        ${toad.relationships.enemies?.length ? `<div><strong>Enemies:</strong> ${toad.relationships.enemies.join(', ')}</div>` : ''}
                        ${toad.relationships.complicated?.length ? `<div><strong>Complicated:</strong> ${toad.relationships.complicated.join(', ')}</div>` : ''}
                    </div>
                </div>
            ` : ''}
        `;
    }
}

function renderTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    const filteredTimeline = appState.timelineFilter > 0 
        ? FACTION_TIMELINE.filter(day => day.day >= CURRENT_DAY - appState.timelineFilter)
        : FACTION_TIMELINE;
    
    container.innerHTML = filteredTimeline.map(dayEntry => `
        <div class="timeline-day ${dayEntry.isCurrent ? 'current' : ''}">
            <div class="timeline-marker">${dayEntry.day}</div>
            <div class="timeline-day-content">
                <div class="timeline-day-header">
                    <h4>Day ${dayEntry.day}: ${dayEntry.title}</h4>
                    ${dayEntry.isCurrent ? '<span class="current-badge">CURRENT</span>' : ''}
                </div>
                <div class="timeline-events">
                    ${dayEntry.events.map(event => `
                        <div class="timeline-event severity-${event.severity}">
                            <div class="event-time">${event.time,
        notes: ["Participated in a stealth scouting mission through windows and bushes."]
    }</div>
                            <div class="event-icon">${event.icon}</div>
                            <div class="event-content">
                                <div class="event-title">${event.title}</div>
                                <div class="event-description">${event.description}</div>
                                ${event.involved ? `<div class="event-involved">Involved: ${event.involved.join(', ')}</div>` : ''}
                            </div>
                            <span class="event-type-badge">${event.type.toUpperCase()}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ========================================
// EVENT LISTENERS
// ========================================

function attachRosterListeners() {
    // Card click handlers
    document.querySelectorAll('.crew-card').forEach(card => {
        card.addEventListener('click', () => {
            const toadId = card.dataset.id;
            const toad = appState.allToads.find(t => t.id === toadId);
            if (toad) {
                appState.selectedMember = toad;
                document.querySelectorAll('.crew-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                renderDetailPanel(toad);
            }
        });
    });
    
    // Load more button
    const loadMoreBtn = document.getElementById('load-more-btn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', () => {
            appState.displayLimit += 50;
            renderCrewRoster();
        });
    }
}

function setupEventListeners() {
    // Collapsible sections
    document.querySelectorAll('.section-header[data-toggle]').forEach(header => {
        header.addEventListener('click', () => {
            const targetId = header.dataset.toggle;
            const content = document.getElementById(targetId);
            if (content) {
                content.classList.toggle('collapsed');
                header.classList.toggle('collapsed');
            }
        });
    });
    
    // Status filter buttons
    document.querySelectorAll('.filter-btn[data-filter]').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn[data-filter]').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appState.currentFilter = btn.dataset.filter;
            appState.displayLimit = 50;
            renderCrewRoster();
        });
    });
    
    // Cohort filter
    const cohortSelect = document.getElementById('cohort-filter');
    if (cohortSelect) {
        cohortSelect.addEventListener('change', (e) => {
            appState.currentCohortFilter = e.target.value;
            appState.displayLimit = 50;
            renderCrewRoster();
        });
    }
    
    // Sort select
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            appState.currentSort = e.target.value;
            renderCrewRoster();
        });
    }
    
    // Search input
    const searchInput = document.getElementById('roster-search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            appState.searchQuery = e.target.value;
            appState.displayLimit = 50;
            renderCrewRoster();
        });
    }
    
    // Detail panel close
    const closeBtn = document.querySelector('.close-detail-btn');
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            const panel = document.getElementById('member-detail-panel');
            panel.classList.remove('visible');
            panel.classList.add('hidden');
            appState.selectedMember = null;
            document.querySelectorAll('.crew-card').forEach(c => c.classList.remove('selected'));
        });
    }
    
    // Detail tabs
    document.querySelectorAll('.detail-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.detail-tab').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.detail-tab-content').forEach(c => c.classList.remove('active'));
            tab.classList.add('active');
            const tabId = `tab-${tab.dataset.tab}`;
            document.getElementById(tabId)?.classList.add('active');
            appState.detailTab = tab.dataset.tab;
            if (appState.selectedMember) {
                renderDetailTabContent(appState.selectedMember);
            }
        });
    });
    
    // Timeline filters
    document.querySelectorAll('.timeline-filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.timeline-filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            appState.timelineFilter = parseInt(btn.dataset.days);
            renderTimeline();
        });
    });
}

// ========================================
// INITIALIZATION
// ========================================
function init() {
    console.log('Initializing Liberated Toads System...');
    
    // Load state
    loadState();
    
    // Initialize data - ALWAYS do this so other modules can use the data
    initializeAllToads();
    console.log(`Loaded ${appState.allToads.length} toads`);
    console.log(`Faction Stats:`, appState.factionStats);
    
    // CHECK: Are we on the Liberated Toads dashboard page?
    // If these elements don't exist, we're on a different page (like shop.js)
    const currentDayEl = document.getElementById('current-day');
    const currentDateEl = document.getElementById('current-date');
    const crewGrid = document.getElementById('crew-grid');
    const governanceContent = document.getElementById('governance-content');
    
    // If none of the dashboard elements exist, skip UI rendering
    if (!currentDayEl && !currentDateEl && !crewGrid && !governanceContent) {
        console.log('Liberated Toads UI elements not found - skipping dashboard render (probably on another page)');
        return; // Exit early - data is loaded, but don't render UI
    }
    
    // Update header elements (with null checks)
    if (currentDayEl) {
        currentDayEl.textContent = CURRENT_DAY;
    }
    
    if (currentDateEl) {
        currentDateEl.textContent = CURRENT_DATE_STRING;
    }
    
    // Update squad status based on morale
    const squadStatus = document.getElementById('squad-status');
    if (squadStatus && appState.factionStats) {
        const morale = appState.factionStats.morale;
        if (morale < 40) {
            squadStatus.textContent = 'CRITICAL';
            squadStatus.className = 'status-critical';
        } else if (morale < 70) {
            squadStatus.textContent = 'COMPROMISED';
            squadStatus.className = 'status-compromised';
        } else {
            squadStatus.textContent = 'OPERATIONAL';
            squadStatus.className = 'status-operational';
        }
    }
    
    // Render all sections (these functions should also have null checks)
    renderFactionStats();
    renderGovernanceSection();
    renderVotingSection();
    renderAccountabilityDocket();
    renderCrewRoster();
    renderTimeline();
    
    // Setup event listeners
    setupEventListeners();
    
    console.log('Liberated Toads Dashboard initialized successfully');
}
// Run initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
// ========================================
// EXPORTS FOR OTHER MODULES (like shop.js)
// ========================================

// Combine all toad sources into a single exportable array
export function getAllToadsData() {
    const coreToads = Object.values(CORE_TOADS);
    const barrelSurvivors = typeof generateBarrelSurvivors === 'function' ? generateBarrelSurvivors() : [];
    const cohortMembers = typeof generateCohortMembers === 'function' ? generateCohortMembers() : [];
    
    return [...coreToads, ...barrelSurvivors, ...cohortMembers];
}

// Export the raw data objects
export { 
    CORE_TOADS,
    GOVERNANCE,
    VOTING_SYSTEM,
    ACCOUNTABILITY_DOCKET,
    CLASS_DEFINITIONS,
    FACTION_TIMELINE
};

// Export a pre-calculated stats object for quick access
export function getPreCalculatedFactionStats() {
    const allToads = getAllToadsData();
    const nonHostile = allToads.filter(t => t.statusType !== 'hostile');
    
    const stats = {
        total: nonHostile.length,
        active: nonHostile.filter(t => t.statusType === 'active').length,
        injured: nonHostile.filter(t => t.statusType === 'injured').length,
        critical: nonHostile.filter(t => t.statusType === 'critical').length,
        mia: nonHostile.filter(t => t.statusType === 'mia').length,
        special: nonHostile.filter(t => t.statusType === 'special').length,
        deceased: 3,
        
        totalXP: nonHostile.reduce((sum, t) => sum + (t.xp || 0), 0),
        averageLevel: 0,
        levelDistribution: {},
        
        cohortBreakdown: {},
        classBreakdown: {},
        
        morale: 0,
        loyalty: 0,
        combatReadiness: 0
    };
    
    let totalLevel = 0;
    let moraleSum = 0;
    let loyaltySum = 0;
    let combatReady = 0;
    
    nonHostile.forEach(toad => {
        totalLevel += toad.level || 1;
        stats.levelDistribution[toad.level] = (stats.levelDistribution[toad.level] || 0) + 1;
        
        const cohort = toad.cohort || "Unassigned";
        stats.cohortBreakdown[cohort] = (stats.cohortBreakdown[cohort] || 0) + 1;
        
        stats.classBreakdown[toad.class] = (stats.classBreakdown[toad.class] || 0) + 1;
        
        let toadMorale = 70;
        if (toad.statusType === 'active') { toadMorale += 20; combatReady++; }
        if (toad.statusType === 'injured') toadMorale -= 10;
        if (toad.statusType === 'critical') toadMorale -= 30;
        if (toad.statusType === 'special') toadMorale += 5;
        if (toad.conditions?.some(c => c.includes('Trauma'))) toadMorale -= 15;
        moraleSum += Math.max(0, Math.min(100, toadMorale));
        
        let toadLoyalty = toad.cohort ? 75 : 50;
        if (toad.isCore) toadLoyalty += 15;
        if (toad.cohort === 'Pond Patrol') toadLoyalty = 100;
        loyaltySum += toadLoyalty;
    });
    
    if (nonHostile.length > 0) {
        stats.averageLevel = parseFloat((totalLevel / nonHostile.length).toFixed(1));
        stats.morale = Math.round(moraleSum / nonHostile.length);
        stats.loyalty = Math.round(loyaltySum / nonHostile.length);
        stats.combatReadiness = Math.round((combatReady / nonHostile.length) * 100);
    }
    
    return stats;
}
// ========================================
// EXPORTS
// ========================================

export { 
    ABILITY_TYPES,
    appState,
    initializeAllToads,
    calculateFactionStats,
    getXPProgress,
    getXPToNextLevel
};            