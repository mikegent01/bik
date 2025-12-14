


import { LORE_DATA } from './lore.js';
import { TOAD_ABILITIES } from './abilities.js';
import { MAP_DATA } from './map-data.js';
import { RESEARCH_CATEGORIES, NATIONS, calculateRumorMetrics } from './research-data.js';
import { WAHBOOK_POSTS } from './assembly-data.js';
const DATA_VERSION = 2; 
// --- STATE MANAGEMENT ---

// Weapon archetype normalization to prevent undefined ability lookups
const WEAPON_ALIASES = {
    'axe': 'axe',
    'longsword & magic': 'magic',
    'longsword': 'magic',
    'magic': 'magic',
    'whip': 'whip',
    'spellcaster': 'spellcaster',
    'gun': 'gun',
    'grotesque': 'grotesque',
    'grotesque resilience': 'grotesque',
    'deceit': 'deceit'
};

function getArchetypeFromWeapon(weapon) {
    const key = String(weapon || '').toLowerCase().trim();
    return WEAPON_ALIASES[key] || key;
}

// Snap-down lookup so odd levels and missing exact keys never return undefined
function getAbilityForLevel(archetype, level) {
    const table = TOAD_ABILITIES[archetype];
    if (!table) return null;
    for (let L = level; L >= 1; L--) {
        if (table[L]) return table[L];
    }
    return null;
}

// Safely add an ability only once
function addAbilityUnique(character, ability) {
    if (!ability || !ability.name) return false;
    if (!character.abilities) character.abilities = [];
    const exists = character.abilities.some(a => (a?.name || a) === ability.name);
    if (!exists) {
        character.abilities.push(ability);
        return true;
    }
    return false;
}

// Find ability by name in the ability table (used to hydrate initial string abilities)
function findAbilityByName(archetype, name) {
    if (!name) return null;
    const table = TOAD_ABILITIES[archetype];
    if (!table) return null;
    const levels = Object.keys(table).map(Number).sort((a, b) => a - b);
    for (const lvl of levels) {
        if (table[lvl]?.name === name) return table[lvl];
    }
    return null;
}

// Convert any initial string abilities to full objects and de-dupe
function hydrateInitialAbilities(stateChars) {
    for (const key in stateChars) {
        const ch = stateChars[key];
        const arch = getArchetypeFromWeapon(ch.weapon);
        if (!arch) continue;

        const asObjects = (ch.abilities || []).map(a => {
            if (a && a.name && a.description) return a; // already an object
            const abilityName = typeof a === 'string' ? a : a?.name;
            return findAbilityByName(arch, abilityName) || null;
        }).filter(Boolean);

        const seen = new Set();
        ch.abilities = asObjects.filter(a => {
            const k = a.name;
            if (seen.has(k)) return false;
            seen.add(k);
            return true;
        });
    }
}

function generateGenericIntel() {
    const intel = {};
    for (const factionKey in LORE_DATA.factions) { intel[factionKey] = 0; }
    intel['regal_empire'] = 20; intel['iron_legion'] = 15; intel['mushroom_regency'] = 15;
    intel['koopa_troop'] = 15; intel['freelancer_underworld'] = 10; intel['mages_guild'] = 10;
    intel['onyx_hand'] = 5; intel['moonfang_pack'] = 5; intel['unaligned'] = 100;
    intel['kingdom_of_gondor'] = 10; intel['kingdom_of_rohan'] = 10; intel['lothlorien'] = 5;
    intel['elves_of_lindon'] = 5; intel['kingdoms_of_the_dwarves'] = 10; intel['isengard'] = 5;
    intel['mordor'] = 5;
    return intel;
}

const DEFAULT_INVENTORIES = {
    archie: { name: "Archie's Stash", items: ["Sickle", "Dusty Wine Bottle"] },
    markop: { name: "Markop's Pack", items: ["Gray Suit", "Carpentry Supplies", "Amethyst", "The Hammer Code: An Iron Legion Treatise"] },
    humpik: { name: "Humpik's Haul", items: ["Spell Scroll: Alarm", "Spell Scroll: Disguise Self", "Spell Scroll: Inflict Wounds", "Spell Scroll: Mage Armor", "Spell Scroll: Hunter's Mark"] },
    bowser: { name: "Bowser's Treasury", items: ["Princess Peach's Diary"] },
    remi: { name: "Remi's Pack", items: ["Expired Coupon for Angel 24", "A single, very durable school ID card", "Practical Traveling Clothes", "A half-eaten sandwich", "The Silent Service: A Primer", "Chipped Dagger", "Crossbow"] },
    dan: { name: "Dan's Pack", items: ["Magitek Theory Vol. IV: Arcane Capacitors"] },
    shared: { 
        name: "Liberated Toads' Items", 
        items: [
            "Mushroom Kingdom History, Vol. III", "A Field Guide to Fungal Alchemy", "Koopa Troop Tactics",
            "A Guide to the Great Libraries", "Mayor's Ledger & Spellbook", "Crayon Ring (Fake)", "Guard's Logbook"
        ] 
    }
};

function initResearchState() {
    const rState = {};
    for (const nationKey in NATIONS) {
        rState[nationKey] = {
            activeResearch: null,
            completed: {}, 
            unlocked: {},
            currentAgeId: 'age_dawn', 
            ageHistory: []
        };
        RESEARCH_CATEGORIES.forEach(cat => {
            rState[nationKey].completed[cat] = [];
            rState[nationKey].unlocked[cat] = [];
            for(let i=1; i<=5; i++) {
                rState[nationKey].unlocked[cat].push(`${cat.toLowerCase()}_t1_n${i}`);
            }
        });
    }
    return rState;
}

export const state = {
    loggedInUser: localStorage.getItem('vigilanceTerminalUser') || 'generic',
    debugMode: false,
    version: DATA_VERSION, 
intelLevels: {
        archie: { 
            // HIGHEST: Underworld & Magic due to backstory & recent Tribunal/Fireball events
            onyx_hand: 65, // Acquitted by Tribunal (Day 2)
            tea_leaf_syndicate: 50, // "Tea Party Incident" (Day 9) - he knows exactly how they operate now
            iron_legion: 45, // Constant conflict + escape with Legion Spy (Day 20)
            mages_guild: 40, // They hate him (Greenhouse Inferno/Confession), but he knows their laws well
            
            // MODERATE: Party allies & adversaries
            freelancer_underworld: 45, 
            liberated_toads: 40, // Works closely with Dan/Toads
            regal_empire: 30, // Knows the laws he breaks
            cosmic_jesters: 30, // Raventree Manor/Oracle interactions
            
            // LOW: Unrelated factions
            koopa_troop: 35, 
            mushroom_regency: 15, 
            rakasha_clans: 10,
            moonfang_pack: 10,
            
            // GENERIC/LOW
            toad_gang: 25, toad_cult: 10, the_unchained: 20, silver_flame: 5, oathbound_judges: 10, ratchet_raiders: 25, rebel_clans: 15, crimson_fleet: 20, wario_land: 20, peach_loyalists: 10, fawfuls_furious_freaks: 15, iron_fists: 30, diamond_city_investigators: 15, goodstyle_artisans: 5, unaligned: 100, kingdom_of_gondor: 5, kingdom_of_rohan: 5, lothlorien: 5, elves_of_lindon: 5, kingdoms_of_the_dwarves: 5, isengard: 5, mordor: 5 
        },
        markop: { 
            // HIGHEST: Investigation & Mystery
            diamond_city_investigators: 60, // His likely background/archetype
            iron_legion: 50, // Found the "Barrel Secret" (Day 12) + Maze of Time (Day 18)
            cosmic_jesters: 45, // "Maze of Time" / "Titan of the Grove" - Deep Oracle interaction
            
            // MODERATE:
            liberated_toads: 40, 
            regal_empire: 35, // Dealing with Sovereignty Act
            onyx_hand: 25, // Intersecting investigations
            
            // LOW
            tea_leaf_syndicate: 20, // Got the key from Green T (Day 17)
            koopa_troop: 35, 
            
            // GENERIC
            freelancer_underworld: 20, toad_gang: 20, toad_cult: 15, mages_guild: 20, rakasha_clans: 10, the_unchained: 15, silver_flame: 15, oathbound_judges: 20, ratchet_raiders: 10, rebel_clans: 10, crimson_fleet: 10, wario_land: 10, mushroom_regency: 25, peach_loyalists: 20, fawfuls_furious_freaks: 15, iron_fists: 15, moonfang_pack: 15, goodstyle_artisans: 10, unaligned: 100, kingdom_of_gondor: 10, kingdom_of_rohan: 5, lothlorien: 5, elves_of_lindon: 5, kingdoms_of_the_dwarves: 5, isengard: 5, mordor: 5 
        },
        humpik: { 
            // HIGHEST: Tech & Engineering
            liberated_toads: 65, // Core crew, fixed the Vigilance (Day 6)
            iron_legion: 55, // Discovered smuggling barrels (Day 12) + Mirror Dimension Spy (Day 21)
            
            // MODERATE
            koopa_troop: 40, // Works with Bowser
            crimson_fleet: 30, // Confrontation with Captain Syrup (Day 6)
            
            // LOW
            mages_guild: 10, // Not a magic user
            rakasha_clans: 5, // Didn't go with Ryan
            
            // GENERIC
            toad_gang: 25, regal_empire: 20, freelancer_underworld: 15, toad_cult: 5, onyx_hand: 10, cosmic_jesters: 15, the_unchained: 5, silver_flame: 5, oathbound_judges: 5, ratchet_raiders: 10, rebel_clans: 10, wario_land: 10, mushroom_regency: 15, peach_loyalists: 15, fawfuls_furious_freaks: 15, iron_fists: 20, moonfang_pack: 10, diamond_city_investigators: 5, goodstyle_artisans: 20, tea_leaf_syndicate: 15, unaligned: 100, kingdom_of_gondor: 5, kingdom_of_rohan: 5, lothlorien: 5, elves_of_lindon: 5, kingdoms_of_the_dwarves: 20, isengard: 5, mordor: 5
        },
        bowser: { 
            // HIGHEST: Warlord Status
            koopa_troop: 100, // He IS the Koopa Troop
            mushroom_regency: 80, // His literal arch-nemesis for decades
            peach_loyalists: 70, // Knows them intimately
            
            // HIGH
            fawfuls_furious_freaks: 50, // Old rivalry/Alliance dynamics
            regal_empire: 40, // Fellow superpower
            
            // MODERATE
            wario_land: 35, // Knows Wario well (Bomb incident Day 12)
            dk_crew: 30, // Knows DK politics (Summit Disaster Day 13)
            
            // LOW (He ignores the small fry)
            tea_leaf_syndicate: 10,
            diamond_city_investigators: 5,
            
            // GENERIC
            iron_legion: 35, rebel_clans: 20, onyx_hand: 15, moonfang_pack: 20, crimson_fleet: 25, liberated_toads: 25, toad_gang: 25, freelancer_underworld: 20, iron_fists: 15, the_unchained: 10, cosmic_jesters: 15, rakasha_clans: 10, silver_flame: 5, oathbound_judges: 10, ratchet_raiders: 15, goodstyle_artisans: 5, toad_cult: 5, mages_guild: 15, unaligned: 100, kingdom_of_gondor: 5, kingdom_of_rohan: 5, lothlorien: 5, elves_of_lindon: 5, kingdoms_of_the_dwarves: 5, isengard: 5, mordor: 5
        },
        remi: { 
            // THE FNG (Fresh New Guy) - Generally low stats everywhere
            
            // HIGHEST (Relative to her)
            liberated_toads: 25, // Traveling with them
            wario_land: 25, // "Explosive Proposition" job offer (Day 12)
            goodstyle_artisans: 20, // Applied to Smithing Guild (Day 20)
            
            // MODERATE
            iron_legion: 15, // Captured/Interrogated
            
            // LOW - She knows nothing about the wider world yet
            koopa_troop: 5,
            mushroom_regency: 5,
            onyx_hand: 0,
            
            // GENERIC
            regal_empire: 10, freelancer_underworld: 10, cosmic_jesters: 5, tea_leaf_syndicate: 5, toad_gang: 5, fawfuls_furious_freaks: 5, peach_loyalists: 5, moonfang_pack: 0, iron_fists: 10, rakasha_clans: 0, the_unchained: 0, silver_flame: 0, oathbound_judges: 0, ratchet_raiders: 0, rebel_clans: 0, crimson_fleet: 5, diamond_city_investigators: 0, toad_cult: 0, mages_guild: 5, unaligned: 100, kingdom_of_gondor: 0, kingdom_of_rohan: 0, lothlorien: 0, elves_of_lindon: 0, kingdoms_of_the_dwarves: 5, isengard: 0, mordor: 0
        },
        generic: generateGenericIntel(),
    },
    finalIntel: {}, // Stores cumulative intel (base + event history)
    party: ['archie', 'markop', 'humpik', 'bowser', 'remi'],
    activeRumors: [], 
    players: {
        archie: { name: 'Archie Miser', reputation: {}, notoriety: {} },
        markop: { name: 'Markop Judi', reputation: {}, notoriety: {} },
        humpik: { name: 'Humpik', reputation: {}, notoriety: {} },
        bowser: { name: 'Bowser', reputation: {}, notoriety: {} },
        remi: { name: 'FNG Remi', reputation: {}, notoriety: {} }
    },
    auxiliary_party_state: {},
    finalReputations: {}, 
    finalSubFactionReputations: {},
    calculationBreakdown: {},
    chartInstances: {},
    focusTreeState: {},
    inventories: {},
    mapState: { discoveredFogs: [], userPois: { mushroom_kingdom: [], midlands: [], }, userFogs: { mushroom_kingdom: [], midlands: [], } },
    userState: { following: [], seenPostIds: [], waluigiWarningShown: false },
    researchState: initResearchState() 
};

function initInventories() { state.inventories = structuredClone(DEFAULT_INVENTORIES); }

function initReputation() {
    const factionKeys = Object.keys(LORE_DATA.factions);
    const CANONICAL_PARTY = ['archie', 'markop', 'humpik', 'bowser', 'remi'];
    state.party = [...CANONICAL_PARTY];
    state.party.forEach(playerKey => {
        if (!state.players[playerKey]) {
            const playerInfo = LORE_DATA.characters[playerKey] || { name: 'Unknown Operator' };
            state.players[playerKey] = { name: playerInfo.name, reputation: {}, notoriety: {} };
        }
    });
    for (const charKey in state.players) {
        if (!state.players[charKey].reputation) state.players[charKey].reputation = {};
        if (!state.players[charKey].notoriety) state.players[charKey].notoriety = {};
        factionKeys.forEach(factionKey => {
            if (state.players[charKey].reputation[factionKey] === undefined) state.players[charKey].reputation[factionKey] = 1;
            if (state.players[charKey].notoriety[factionKey] === undefined) state.players[charKey].notoriety[factionKey] = 1;
        });
    }
    const initialRep = {
        bowser: { regal_empire: -60, iron_legion: -40, toad_gang: -10, rebel_clans: 15, crimson_fleet: 5, koopa_troop: 100, mushroom_regency: -100, onyx_hand: 5, moonfang_pack: 10, ratchet_raiders: 5, liberated_toads: -10 }
    };
    const initialNotoriety = {
    };
    for (const playerKey in initialRep) {
        if (state.players[playerKey]) { 
            for (const factionKey in initialRep[playerKey]) { state.players[playerKey].reputation[factionKey] = initialRep[playerKey][factionKey]; }
        }
    }
    for (const playerKey in initialNotoriety) {
        if (state.players[playerKey]) {
            for (const factionKey in initialNotoriety[playerKey]) { state.players[playerKey].notoriety[factionKey] = initialNotoriety[playerKey][factionKey]; }
        }
    }
    state.activeRumors = LORE_DATA.rumors.map(rumor => rumor.id);
}

function grantXP(charKey, amount, reason) {
    if (!state.auxiliary_party_state[charKey]) return;
    const character = state.auxiliary_party_state[charKey];
    character.xp += amount;
    if (!character.log) character.log = [];
    character.log.push({ reason: reason, xp: amount });
    while (character.xp >= character.xp_to_next) {
        character.xp -= character.xp_to_next;
        character.level++;
        character.xp_to_next = 100 + (character.level - 1) * 200;
        character.log.push({ reason: `Level Up! Reached Level ${character.level}`, xp: 0, isLevelUp: true });
        const archetype = getArchetypeFromWeapon(character.weapon);
        if (archetype) {
            const newAbility = getAbilityForLevel(archetype, character.level);
            if (newAbility && newAbility.name && newAbility.description) {
                const added = addAbilityUnique(character, newAbility);
                if (added) {
                    character.log.push({ reason: `Learned Ability: ${newAbility.name}`, xp: 0, isAbility: true });
                }
            }
        }
    }
}

function processInitialXP() {
    state.auxiliary_party_state = structuredClone(LORE_DATA.auxiliary_party);
    hydrateInitialAbilities(state.auxiliary_party_state);
}

export function initFocusTreeState() {
    state.focusTreeState = {
        buildVersionApplied: "2024-05-18-r1",
        day: 6, activeToad: "dan", groupInfluence: 27,
        unlocked: { dan: ['dan_t1_influence'], toad_lee: ['lee_t1_command'], eager: ['eager_t1_scout'], ryan: ['ryan_t1_cantrips'], roger: ['rog_t1_trade'], bones: ['bones_t1_morale'], bryan: [], group: [] },
        activeFocuses: [],
        influences: { dan: 55, toad_lee: 35, eager: 15, ryan: 15, roger: 20, bones: 10, bryan: 0 },
        log: [],
        luckyItemCooldowns: { dan: 0, toad_lee: 0, eager: 0, ryan: 0, roger: 0, bones: 0, bryan: 0 },
        flags: { waluigiPending: false }
    };
}

export function saveState() {
    localStorage.setItem('vigilanceTerminalState', JSON.stringify(state));
}

/**
 * Calculates final intel levels by applying cumulative bonuses from all historical rumors
 * to the base intel levels. This ensures intel grows with experience and doesn't decay.
 */
function calculateFinalIntel() {
    // Start with a deep copy of the base intel levels defined in state.intelLevels
    // This ensures we don't permanently mutate the base values in state, but build upon them.
    const computedIntel = structuredClone(state.intelLevels);
    
    // Iterate through EVERY rumor in the lore database (history)
    if (LORE_DATA && LORE_DATA.rumors) {
        LORE_DATA.rumors.forEach(rumor => {
            const playerKey = state.loggedInUser;
            
            // Generic profile doesn't track personal history
            if (!playerKey || playerKey === 'generic') return;

            // Check if the current player was involved in this rumor/event
            const isTarget = rumor.targets.includes('party') ? state.party.includes(playerKey) : rumor.targets.includes(playerKey);
            const isInstigator = rumor.instigator === playerKey;

            // If involved, they gain permanent knowledge about the affected factions
            if (isTarget || isInstigator) {
                const affectedFactions = Object.keys(rumor.effects || {});

                affectedFactions.forEach(factionKey => {
                    if (!computedIntel[playerKey]) computedIntel[playerKey] = {};
                    if (!computedIntel[playerKey][factionKey]) computedIntel[playerKey][factionKey] = 0;

                    // Base gain for involvement
                    let gain = 5; 
                    // Bonus gain for being the instigator (you know what you did)
                    if (isInstigator) gain += 5; 

                    computedIntel[playerKey][factionKey] += gain;

                    // Cap intel at 100
                    computedIntel[playerKey][factionKey] = Math.min(100, computedIntel[playerKey][factionKey]);
                });
            }
        });
    }

    state.finalIntel = computedIntel;
}

function calculateFinalReputations() {
    const finalReps = structuredClone(state.players); 
    const finalSubFactionReps = {};
    const calculationBreakdown = {};

    const factionKeys = Object.keys(LORE_DATA.factions);

    for (const playerKey in finalReps) {
        calculationBreakdown[playerKey] = {};

        for (const factionKey in finalReps[playerKey].reputation) {
            let rumorRepModifier = 0;
            let rumorNotorietyModifier = 0;
            
            calculationBreakdown[playerKey][factionKey] = {
                base: state.players[playerKey].reputation[factionKey],
                rumors: [],
                propagation: []
            };

            LORE_DATA.rumors.forEach(rumor => {
                if (state.activeRumors.includes(rumor.id)) {
                    const isTarget = rumor.targets.includes('party') ? state.party.includes(playerKey) : rumor.targets.includes(playerKey);
                    const isInstigator = rumor.instigator === playerKey;

                    const relatedPosts = WAHBOOK_POSTS.filter(p => p.rumorId === rumor.id);
                    const metrics = calculateRumorMetrics(rumor, relatedPosts);
                    
                    // Determine specific effect for this player
                    let effect = 0;
                    let hasPersonalImpact = false;
                    
                    // 1. Check Personal Impact first
                    if (rumor.personal_impact && rumor.personal_impact[playerKey] && rumor.personal_impact[playerKey][factionKey] !== undefined) {
                        effect = rumor.personal_impact[playerKey][factionKey];
                        hasPersonalImpact = true;
                    } 
                    // 2. Fallback to General Effects if target matches
                    else if (isTarget && rumor.effects[factionKey]) {
                        effect = rumor.effects[factionKey];
                        if (isInstigator) effect *= 2; // Double effect for instigator on general rumors
                    }

                    if (effect !== 0) {
                        // Apply multiplier
                        effect = Math.round(effect * metrics.repMultiplier);

                        rumorRepModifier += effect;
                        rumorNotorietyModifier += Math.round((Math.abs(effect) / 2) * (metrics.repMultiplier > 1 ? 1.5 : 1));

                        calculationBreakdown[playerKey][factionKey].rumors.push({ 
                            title: rumor.title, 
                            value: effect,
                            multiplier: metrics.repMultiplier,
                            isInstigator: isInstigator,
                            isPersonal: hasPersonalImpact
                        });
                    }
                }
            });
            finalReps[playerKey].reputation[factionKey] += rumorRepModifier;
            finalReps[playerKey].notoriety[factionKey] += rumorNotorietyModifier;
        }
    }

    const propagationFactor = 0.2;
    for (const playerKey in finalReps) {
        const playerRep = finalReps[playerKey].reputation;
        const propagatedChanges = {};

        factionKeys.forEach(targetFactionKey => {
            let propagatedEffect = 0;
            const targetFaction = LORE_DATA.factions[targetFactionKey];
            if(!targetFaction) return;

            if (state.party.includes(playerKey)) {
                propagatedChanges[targetFactionKey] = 0; 
                return;
            }

            factionKeys.forEach(sourceFactionKey => {
                if (sourceFactionKey === targetFactionKey) return;
                const sourceFaction = LORE_DATA.factions[sourceFactionKey];
                if (!sourceFaction || !sourceFaction.relations) return;

                const repWithSource = playerRep[sourceFactionKey] || 0;

                if (sourceFaction.relations.allies && sourceFaction.relations.allies.includes(targetFactionKey)) {
                    const change = repWithSource * propagationFactor;
                    propagatedEffect += change;
                    if(Math.abs(change) > 1) calculationBreakdown[playerKey][targetFactionKey].propagation.push({ source: sourceFaction.name, value: Math.round(change) });
                }
                if (sourceFaction.relations.enemies && sourceFaction.relations.enemies.includes(targetFactionKey)) {
                     const change = repWithSource * -propagationFactor;
                     propagatedEffect += change;
                     if(Math.abs(change) > 1) calculationBreakdown[playerKey][targetFactionKey].propagation.push({ source: sourceFaction.name, value: Math.round(change) });
                }
            });
            propagatedChanges[targetFactionKey] = propagatedEffect;
        });

        factionKeys.forEach(factionKey => {
            playerRep[factionKey] += Math.round(propagatedChanges[factionKey] || 0);
        });
    }

    for (const playerKey in state.players) {
        finalSubFactionReps[playerKey] = {};
        for (const factionKey in LORE_DATA.factions) {
            const faction = LORE_DATA.factions[factionKey];
            if (faction.internal_politics && faction.internal_politics.sub_factions) {
                finalSubFactionReps[playerKey][factionKey] = {};
                for (const subFactionKey in faction.internal_politics.sub_factions) {
                    const subFaction = faction.internal_politics.sub_factions[subFactionKey];
                    let subRep = finalReps[playerKey].reputation[factionKey] || 0;
                    if (subFaction.reputation_modifiers && subFaction.reputation_modifiers[playerKey] !== undefined) {
                        subRep += subFaction.reputation_modifiers[playerKey];
                    }
                    finalSubFactionReps[playerKey][factionKey][subFactionKey] = Math.round(subRep);
                }
            }
        }
    }
    
    Object.keys(finalReps).forEach(playerKey => {
        Object.keys(finalReps[playerKey].reputation).forEach(factionKey => {
            finalReps[playerKey].reputation[factionKey] = Math.max(-100, Math.min(100, finalReps[playerKey].reputation[factionKey]));
            finalReps[playerKey].notoriety[factionKey] = Math.round(Math.max(0, Math.min(100, finalReps[playerKey].notoriety[factionKey])));
        });
    });

    state.finalReputations = finalReps;
    state.finalSubFactionReputations = finalSubFactionReps;
    state.calculationBreakdown = calculationBreakdown;
}

export function loadState() {
    const savedState = localStorage.getItem('vigilanceTerminalState');
   if (savedState) {
        const parsedState = JSON.parse(savedState);
        
        // Check if save is old
        if (!parsedState.version || parsedState.version < DATA_VERSION) {
            console.log("Save format too old, resetting base stats...");
            // Don't load the stale stats
            delete parsedState.intelLevels;
            // Update their version
            parsedState.version = DATA_VERSION;
        }

        delete parsedState.inventories;
        Object.assign(state, parsedState);
    }
    
    const savedDebug = localStorage.getItem('vigilanceDebugMode');
    state.debugMode = savedDebug === 'true';

    initReputation();
    initInventories();
    processInitialXP();
    
    calculateFinalReputations();
    calculateFinalIntel(); // Calculate cumulative intel based on history

    if (!state.focusTreeState || state.focusTreeState.buildVersionApplied !== "2024-05-18-r1") {
        initFocusTreeState();
    }
    
    if (!state.researchState) {
        state.researchState = initResearchState();
    }
    
    for (const mapId in MAP_DATA) {
        if (!state.mapState.userPois[mapId]) {
            state.mapState.userPois[mapId] = [];
        }
        if (!state.mapState.userFogs[mapId]) {
            state.mapState.userFogs[mapId] = [];
        }
    }

    if (!state.userState) {
        state.userState = { following: [], seenPostIds: [], waluigiWarningShown: false };
    }

    state.loggedInUser = localStorage.getItem('vigilanceTerminalUser') || 'generic';
}

export function getDisplayAbilities(character) {
    const arch = getArchetypeFromWeapon(character.weapon);
    const current = arch ? getAbilityForLevel(arch, character.level) : null;
    const learned = (character.abilities || []);

    const byName = new Map();
    if (current && current.name && current.description) byName.set(current.name, current);
    learned.forEach(a => {
        if (!a) return;
        const obj = (a.name && a.description) ? a : { name: a?.name || String(a), description: a?.description || '' };
        if (obj.name) byName.set(obj.name, obj);
    });

    return Array.from(byName.values());
}
