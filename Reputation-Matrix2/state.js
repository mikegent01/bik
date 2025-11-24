
import { LORE_DATA } from './lore.js';
import { TOAD_ABILITIES } from './abilities.js';
import { MAP_DATA } from './map-data.js';
import { RESEARCH_CATEGORIES, NATIONS, calculateRumorMetrics } from './research-data.js';
import { WAHBOOK_POSTS } from './assembly-data.js';

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
    intelLevels: {
        archie: { regal_empire: 25, iron_legion: 40, freelancer_underworld: 50, toad_gang: 45, toad_cult: 10, onyx_hand: 35, mages_guild: 20, rakasha_clans: 55, cosmic_jesters: 60, the_unchained: 40, silver_flame: 5, oathbound_judges: 10, ratchet_raiders: 45, koopa_troop: 20, rebel_clans: 25, crimson_fleet: 30, wario_land: 35, mushroom_regency: 15, peach_loyalists: 20, fawfuls_furious_freaks: 40, iron_fists: 55, moonfang_pack: 15, liberated_toads: 70, diamond_city_investigators: 25, goodstyle_artisans: 5, tea_leaf_syndicate: 40, unaligned: 100, kingdom_of_gondor: 5, kingdom_of_rohan: 5, lothlorien: 5, elves_of_lindon: 5, kingdoms_of_the_dwarves: 5, isengard: 5, mordor: 5 },
        markop: { regal_empire: 45, iron_legion: 50, freelancer_underworld: 15, toad_gang: 20, toad_cult: 5, onyx_hand: 25, mages_guild: 20, rakasha_clans: 60, cosmic_jesters: 5, the_unchained: 45, silver_flame: 55, oathbound_judges: 60, ratchet_raiders: 10, koopa_troop: 20, rebel_clans: 35, crimson_fleet: 10, wario_land: 10, mushroom_regency: 35, peach_loyalists: 30, fawfuls_furious_freaks: 25, iron_fists: 20, moonfang_pack: 25, liberated_toads: 80, diamond_city_investigators: 15, goodstyle_artisans: 10, tea_leaf_syndicate: 25, unaligned: 100, kingdom_of_gondor: 10, kingdom_of_rohan: 5, lothlorien: 5, elves_of_lindon: 5, kingdoms_of_the_dwarves: 5, isengard: 5, mordor: 5 },
        humpik: { koopa_troop: 70, toad_gang: 30, regal_empire: 15, iron_legion: 45, rakasha_clans: 10, rebel_clans: 5, moonfang_pack: 15, liberated_toads: 55, freelancer_underworld: 15, cosmic_jesters: 5, tea_leaf_syndicate: 35, peach_loyalists: 20, fawfuls_furious_freaks: 20, onyx_hand: 10, iron_fists: 15, silver_flame: 5, oathbound_judges: 5, ratchet_raiders: 10, crimson_fleet: 10, wario_land: 10, mushroom_regency: 15, the_unchained: 5, diamond_city_investigators: 5, goodstyle_artisans: 5, unaligned: 100, },
        bowser: { koopa_troop: 100, mushroom_regency: 50, peach_loyalists: 45, regal_empire: 40, iron_legion: 35, rebel_clans: 20, onyx_hand: 15, moonfang_pack: 20, crimson_fleet: 25, liberated_toads: 30, fawfuls_furious_freaks: 40, toad_gang: 25, freelancer_underworld: 20, wario_land: 15, iron_fists: 15, the_unchained: 10, cosmic_jesters: 10, rakasha_clans: 10, silver_flame: 5, oathbound_judges: 10, ratchet_raiders: 15, diamond_city_investigators: 10, goodstyle_artisans: 5, tea_leaf_syndicate: 15, unaligned: 100, },
        remi: { regal_empire: 15, iron_legion: 30, freelancer_underworld: 15, mushroom_regency: 10, koopa_troop: 10, liberated_toads: 35, wario_land: 20, cosmic_jesters: 10, tea_leaf_syndicate: 10, toad_gang: 10, fawfuls_furious_freaks: 10, peach_loyalists: 10, onyx_hand: 5, moonfang_pack: 5, iron_fists: 10, rakasha_clans: 5, the_unchained: 5, silver_flame: 5, oathbound_judges: 5, ratchet_raiders: 5, rebel_clans: 5, crimson_fleet: 5, diamond_city_investigators: 5, goodstyle_artisans: 5, unaligned: 100, },
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
        archie: { freelancer_underworld: 35, regal_empire: -70, iron_legion: -50, mages_guild: -70, rakasha_clans: 40, cosmic_jesters: 10, toad_gang: -50, onyx_hand: 5, the_unchained: 15, iron_fists: -20, koopa_troop: 5, mushroom_regency: -15, moonfang_pack: 5, liberated_toads: 50, tea_leaf_syndicate: -80 },
        markop: { regal_empire: -10, silver_flame: 20, iron_legion: -50, mages_guild: -15, rakasha_clans: 40, toad_gang: -30, oathbound_judges: 10, the_unchained: 10, mushroom_regency: 5, koopa_troop: -10, moonfang_pack: 10, liberated_toads: 50 },
        humpik: { toad_gang: -80, regal_empire: -10, iron_legion: -50, ratchet_raiders: 10, koopa_troop: 50, mushroom_regency: -20, rakasha_clans: 10, rebel_clans: -5, liberated_toads: 20, tea_leaf_syndicate: -50 },
        bowser: { regal_empire: -60, iron_legion: -40, toad_gang: -10, rebel_clans: 15, crimson_fleet: 5, koopa_troop: 100, mushroom_regency: -100, onyx_hand: 5, moonfang_pack: 10, ratchet_raiders: 5, liberated_toads: -10 }
    };
    const initialNotoriety = {
        archie: { mages_guild: 75, onyx_hand: 60, iron_fists: 50, the_unchained: 30, rakasha_clans: 40, regal_empire: 80, cosmic_jesters: 25, ratchet_raiders: 30, tea_leaf_syndicate: 85 },
        markop: { iron_fists: 40, silver_flame: 30, rakasha_clans: 40, regal_empire: 20, oathbound_judges: 25 },
        humpik: { toad_gang: 60, koopa_troop: 50, iron_fists: 40, tea_leaf_syndicate: 60 },
        bowser: { mushroom_regency: 100, koopa_troop: 100, regal_empire: 60, iron_legion: 50, crimson_fleet: 25 }
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
                    
                    if (isTarget && rumor.effects[factionKey]) {
                        let effect = rumor.effects[factionKey];
                        effect = Math.round(effect * metrics.repMultiplier);

                        if (isInstigator) {
                            effect *= 2;
                        }

                        rumorRepModifier += effect;
                        rumorNotorietyModifier += Math.round((Math.abs(effect) / 2) * (metrics.repMultiplier > 1 ? 1.5 : 1));

                        calculationBreakdown[playerKey][factionKey].rumors.push({ 
                            title: rumor.title, 
                            value: effect,
                            multiplier: metrics.repMultiplier,
                            isInstigator: isInstigator
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
