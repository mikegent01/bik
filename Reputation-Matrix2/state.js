
import { LORE_DATA } from './lore.js';
import { TOAD_ABILITIES } from './abilities.js';
import { MAP_DATA } from './map-data.js';

// --- STATE MANAGEMENT ---

// Helper to generate a default intel object for the generic user
function generateGenericIntel() {
    const intel = {};
    for (const factionKey in LORE_DATA.factions) {
        intel[factionKey] = 0;
    }
    // Give the generic user some baseline knowledge of major players.
    intel['regal_empire'] = 20;
    intel['iron_legion'] = 15;
    intel['mushroom_regency'] = 15;
    intel['koopa_troop'] = 15;
    intel['freelancer_underworld'] = 10;
    intel['mages_guild'] = 10;
    intel['onyx_hand'] = 5;
    intel['moonfang_pack'] = 5;
    intel['unaligned'] = 100;
    // Middle-earth Baseline Intel
    intel['kingdom_of_gondor'] = 10;
    intel['kingdom_of_rohan'] = 10;
    intel['lothlorien'] = 5;
    intel['elves_of_lindon'] = 5;
    intel['kingdoms_of_the_dwarves'] = 10;
    intel['isengard'] = 5;
    intel['mordor'] = 5;
    
    return intel;
}


export const state = {
    loggedInUser: localStorage.getItem('vigilanceTerminalUser') || 'generic',
    debugMode: false,
    intelLevels: {
        archie: {
            regal_empire: 25, iron_legion: 30, freelancer_underworld: 50,
            toad_gang: 45, toad_cult: 10, onyx_hand: 35, mages_guild: 20,
            rakasha_clans: 5, cosmic_jesters: 60, the_unchained: 40,
            silver_flame: 5, oathbound_judges: 10, ratchet_raiders: 45,
            koopa_troop: 20, rebel_clans: 25, crimson_fleet: 30,
            wario_land: 35, mushroom_regency: 15, peach_loyalists: 20,
            fawfuls_furious_freaks: 40, iron_fists: 55, moonfang_pack: 15,
            liberated_toads: 100, diamond_city_investigators: 25, goodstyle_artisans: 5,
            tea_leaf_syndicate: 40,
            unaligned: 100,
            kingdom_of_gondor: 5, kingdom_of_rohan: 5, lothlorien: 5,
            elves_of_lindon: 5, kingdoms_of_the_dwarves: 5, isengard: 5, mordor: 5
        },
        markop: {
            regal_empire: 45, iron_legion: 40, freelancer_underworld: 15,
            toad_gang: 20, toad_cult: 5, onyx_hand: 25, mages_guild: 20,
            rakasha_clans: 60, cosmic_jesters: 5, the_unchained: 45,
            silver_flame: 55, oathbound_judges: 60, ratchet_raiders: 10,
            koopa_troop: 20, rebel_clans: 35, crimson_fleet: 10,
            wario_land: 10, mushroom_regency: 35, peach_loyalists: 30,
            fawfuls_furious_freaks: 25, iron_fists: 20, moonfang_pack: 25,
            liberated_toads: 80, diamond_city_investigators: 15, goodstyle_artisans: 10,
            tea_leaf_syndicate: 25,
            unaligned: 100,
            kingdom_of_gondor: 10, kingdom_of_rohan: 5, lothlorien: 5,
            elves_of_lindon: 5, kingdoms_of_the_dwarves: 5, isengard: 5, mordor: 5
        },
        humpik: {
            koopa_troop: 70, toad_gang: 30, regal_empire: 15, iron_legion: 35,
            rakasha_clans: 10, rebel_clans: 5, moonfang_pack: 15,
            liberated_toads: 55, freelancer_underworld: 15,
            cosmic_jesters: 5, tea_leaf_syndicate: 35, peach_loyalists: 20,
            fawfuls_furious_freaks: 20, onyx_hand: 10, iron_fists: 15,
            silver_flame: 5, oathbound_judges: 5, ratchet_raiders: 10,
            crimson_fleet: 10, wario_land: 10, mushroom_regency: 15,
            the_unchained: 5, diamond_city_investigators: 5, goodstyle_artisans: 5,
            unaligned: 100,
        },
        bowser: {
            koopa_troop: 100, mushroom_regency: 50, peach_loyalists: 45,
            regal_empire: 40, iron_legion: 35, rebel_clans: 20,
            onyx_hand: 15, moonfang_pack: 20, crimson_fleet: 25,
            liberated_toads: 30, fawfuls_furious_freaks: 40, toad_gang: 25,
            freelancer_underworld: 20, wario_land: 15, iron_fists: 15,
            the_unchained: 10, cosmic_jesters: 10, rakasha_clans: 10, silver_flame: 5,
            oathbound_judges: 10, ratchet_raiders: 15, diamond_city_investigators: 10,
            goodstyle_artisans: 5, tea_leaf_syndicate: 15,
            unaligned: 100,
        },
        remi: {
            regal_empire: 15, iron_legion: 20, freelancer_underworld: 15,
            mushroom_regency: 10, koopa_troop: 10, liberated_toads: 35,
            wario_land: 20, cosmic_jesters: 10, tea_leaf_syndicate: 10,
            toad_gang: 10, fawfuls_furious_freaks: 10, peach_loyalists: 10,
            onyx_hand: 5, moonfang_pack: 5, iron_fists: 10,
            rakasha_clans: 5, the_unchained: 5, silver_flame: 5,
            oathbound_judges: 5, ratchet_raiders: 5, rebel_clans: 5, crimson_fleet: 5,
            diamond_city_investigators: 5, goodstyle_artisans: 5,
            unaligned: 100,
        },
        generic: generateGenericIntel(),
    },
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
    inventories: {
        archie: { name: "Archie's Stash", items: ["Sickle"] },
        markop: { name: "Markop's Pack", items: ["Gray Suit", "Carpentry Supplies"] },
        humpik: { name: "Humpik's Haul", items: [] },
        bowser: { name: "Bowser's Treasury", items: ["Princess Peach's Diary"] },
        remi: { name: "Remi's Pack", items: ["Expired Coupon for Angel 24", "A single, very durable school ID card", "Practical Traveling Clothes", "A half-eaten sandwich"] },
        shared: { 
            name: "Party Items", 
            items: [
                "Mushroom Kingdom History, Vol. III", 
                "A Field Guide to Fungal Alchemy", 
                "Koopa Troop Tactics",
                "A Guide to the Great Libraries",
                "Mayor's Ledger & Spellbook",
                "Crayon Ring (Fake)",
                "Guard's Logbook"
            ] 
        }
    },
    mapState: {
        discoveredFogs: [],
        userPois: {
            mushroom_kingdom: [],
            midlands: [],
        },
        userFogs: {
            mushroom_kingdom: [],
            midlands: [],
        }
    },
    userState: {
        following: [],
        seenPostIds: [],
        waluigiWarningShown: false,
    }
};

function initReputation() {
    const factionKeys = Object.keys(LORE_DATA.factions);
    const characterKeys = Object.keys(LORE_DATA.characters);

    // --- FIX FOR OUTDATED SAVES ---
    // This part ensures that if a new character is added to the main party,
    // old save states are updated correctly.
    const CANONICAL_PARTY = ['archie', 'markop', 'humpik', 'bowser', 'remi'];
    state.party = [...CANONICAL_PARTY];
    // --- END FIX ---

    // Ensure state.players object is complete based on the (now correct) party list
    state.party.forEach(playerKey => {
        if (!state.players[playerKey]) {
            const playerInfo = LORE_DATA.characters[playerKey] || { name: 'Unknown Operator' };
            state.players[playerKey] = { name: playerInfo.name, reputation: {}, notoriety: {} };
        }
    });

    for (const charKey in state.players) {
        if (!state.players[charKey].reputation) {
            state.players[charKey].reputation = {};
        }
        if (!state.players[charKey].notoriety) {
            state.players[charKey].notoriety = {};
        }
        factionKeys.forEach(factionKey => {
            if (state.players[charKey].reputation[factionKey] === undefined) {
                state.players[charKey].reputation[factionKey] = 1; // Default to 1 instead of 0
            }
            if (state.players[charKey].notoriety[factionKey] === undefined) {
                state.players[charKey].notoriety[factionKey] = 1; // Default to 1 instead of 0
            }
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
            for (const factionKey in initialRep[playerKey]) {
                state.players[playerKey].reputation[factionKey] = initialRep[playerKey][factionKey];
            }
        }
    }
    for (const playerKey in initialNotoriety) {
        if (state.players[playerKey]) {
            for (const factionKey in initialNotoriety[playerKey]) {
                state.players[playerKey].notoriety[factionKey] = initialNotoriety[playerKey][factionKey];
            }
        }
    }

    state.activeRumors = [
        'peach_death_fallout',
        'dragon_slaying',
        'iron_fists_raid',
        'xo_defeat',
        'core_crisis',
        'syrup_schism',
        'archie_acquittal',
        'iron_fists_conspiracy',
        'koopa_loyalist_truce',
        'barrel_compartment_reveal',
        'lankys_disgrace_at_summit',
        'chaos_in_toad_town',
        'shadow_war',
        'dan_training',
        'cosmic_static',
        'paladin_dilemma',
        'rebel_sympathies',
        'scrap_trail',
        'standoff_at_the_capital',
        'capital_diner_shadow_accord',
        'grand_market_ring',
        'prison_break_fiasco',
        'sewer_dragon' // NEW
    ];
}

function getAbilityForLevel(archetype, level) {
    if (level % 2 !== 0) return null; // Only on even levels
    return TOAD_ABILITIES[archetype]?.[level] || null;
}

function grantXP(charKey, amount, reason) {
    const character = state.auxiliary_party_state[charKey];
    if (!character) return;

    character.xp += amount;
    character.log.push({ reason: reason, xp: amount });

    while (character.xp >= character.xp_to_next) {
        character.xp -= character.xp_to_next;
        character.level++;
        character.xp_to_next = character.level * 100; // Next level requires more XP
        character.log.push({ reason: `Level Up! Reached Level ${character.level}`, xp: 0, isLevelUp: true });

        // Check for new abilities
        const weaponArchetypes = {
            "Axe": "axe",
            "Longsword & Magic": "magic",
            "Whip": "whip",
            "Spellcaster": "spellcaster",
            "Gun": "gun",
            "Grotesque": "grotesque",
            "Dagger & Deceit": "deceit"
        };
        const archetype = weaponArchetypes[character.weapon];
        if (archetype) {
            const newAbility = getAbilityForLevel(archetype, character.level);
            if (newAbility) {
                character.abilities.push(newAbility);
                character.log.push({ reason: `Learned Ability: ${newAbility.name}`, xp: 0, isAbility: true });
            }
        }
    }
}

function processInitialXP() {
    state.auxiliary_party_state = structuredClone(LORE_DATA.auxiliary_party);

    // Common XP for all toads for initial liberation
    const allToads = ['dan', 'toad_lee', 'eager', 'ryan', 'roger', 'bones'];
    allToads.forEach(toadKey => {
        grantXP(toadKey, 25, "Participated in the liberation and survived the aftermath.");
    });

    // XP from X.O. & Syrup Confrontations
    grantXP('dan', 150, "Landed the final blow on X.O./Skylla.");
    grantXP('dan', 50, "Disarmed X.O. of her reality-bending staff.");
    grantXP('dan', 75, "Fought against Captain Syrup's forces.");
    grantXP('dan', 25, "Bravely asserted ownership of the staff against Archie.");
    grantXP('toad_lee', 50, "First to join the fight, showed immense courage.");
    grantXP('ryan', 50, "Assisted in the fight against Captain Syrup.");

    // XP from the "Vigilance" Aftermath
    grantXP('toad_lee', 100, "Knocked out a disguised Iron Legion kidnapper.");
    grantXP('eager', 50, "Tied up the captured Iron Legion kidnapper.");
    grantXP('bones', 25, "Survived the ship's crash and was revived by Wally.");
    grantXP('ryan', 15, "Attempted to secure Wally's powerful staff.");
    
    // XP for defending their group
    allToads.forEach(toadKey => {
        grantXP(toadKey, 30, "Fended off an attack from a kidnapper toad.");
    });
    
    // XP for surviving the Iron Legion fire attack
    grantXP('dan', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('toad_lee', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('eager', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('roger', 50, "Survived a direct hit from an Iron Legion fire attack.");
    grantXP('ryan', 25, "Survived the Iron Legion fire attack.");
    grantXP('bones', 25, "Survived the Iron Legion fire attack.");

    // XP for uncovering the bomb plot
    grantXP('eager', 75, "Discovered the Iron Legion's bomb plot.");
    
    // XP for recent events
    grantXP('dan', 75, "Showed mercy to an Orc attacker, proving his character.");
    grantXP('dan', 50, "Confronted Crown Intelligence agents on the Vigilance.");
    grantXP('toad_lee', 50, "Confronted Crown Intelligence agents on the Vigilance.");
    grantXP('bones', 50, "Confronted Crown Intelligence agents on the Vigilance.");
    grantXP('roger', 50, "Confronted Crown Intelligence agents on the Vigilance.");
    grantXP('ryan', 50, "Confronted Crown Intelligence agents on the Vigilance");


    // Status updates from recent events
    if (state.auxiliary_party_state['ryan']) {
        state.auxiliary_party_state['ryan'].status = "Duplicitous";
    }
    if(state.auxiliary_party_state['dan']) {
        state.auxiliary_party_state['dan'].status = "Critically injured, at Archmage's shop";
    }
}

export function initFocusTreeState() {
    state.focusTreeState = {
        buildVersionApplied: "2024-05-18-r1",
        day: 6, // ADVANCED
        activeToad: "dan",
        groupInfluence: 27,
        unlocked: { // UPDATED
            dan: ['dan_t1_influence'], 
            toad_lee: ['lee_t1_command'], 
            eager: ['eager_t1_scout'],
            ryan: ['ryan_t1_cantrips'], 
            roger: ['rog_t1_trade'], 
            bones: ['bones_t1_morale'], 
            bryan: [],
            group: []
        },
        activeFocuses: [ // UPDATED to show new focuses started
            { toadKey: 'group', nodeId: 'group_t1_repair_airship', remainingDays: 16, totalDays: 20 },
            { toadKey: 'dan', nodeId: 'dan_t2_rally', remainingDays: 3, totalDays: 3 },
            { toadKey: 'toad_lee', nodeId: 'lee_t2_fortify', remainingDays: 5, totalDays: 5 },
            { toadKey: 'eager', nodeId: 'eager_t2_traps', remainingDays: 4, totalDays: 4 },
            { toadKey: 'ryan', nodeId: 'ryan_t2_research_staff', remainingDays: 8, totalDays: 8 },
            { toadKey: 'roger', nodeId: 'rog_t2_scavenge', remainingDays: 4, totalDays: 4 },
            { toadKey: 'bones', nodeId: 'bones_t2_orc_debt', remainingDays: 6, totalDays: 6 },
        ],
        influences: { // UPDATED based on completed focuses
            dan: 55, 
            toad_lee: 35, 
            eager: 15,
            ryan: 15, 
            roger: 20, 
            bones: 10, 
            bryan: 0
        },
        log: [ // UPDATED to reflect day 6 events
            { who: "System", what: "Day 6 begins." },
            { who: "Dan", what: "Completed focus: \"Hold a Council\"." },
            { who: "Toad Lee", what: "Completed focus: \"Drill Sergeancy\"." },
            { who: "Eager", what: "Completed focus: \"Scout the Surroundings\"." },
            { who: "Roger", what: "Completed focus: \"Establish Barter System\"." },
            { who: "Ryan", what: "Completed focus: \"Practice Cantrips\"." },
            { who: "Bones", what: "Completed focus: \"Card Games in the Mess\"." },
            { who: "Dan", what: "Began focus: \"Inspiring Speech\" [3 days]." },
            { who: "Toad Lee", what: "Began focus: \"Fortify Position\" [5 days]." },
            { who: "Eager", what: "Began focus: \"Set Booby Traps\" [4 days]." },
            { who: "Ryan", what: "Began focus: \"Research X.O.'s Staff\" [8 days]." },
            { who: "Roger", what: "Began focus: \"Organize Scavenging Parties\" [4 days]." },
            { who: "Bones", what: "Began focus: \"Contemplate the Orc 'Debt'\" [6 days]." },
            { who: "System", what: "System online. Focus protocols initiated." },
        ],
        luckyItemCooldowns: {
            dan: 0, toad_lee: 0, eager: 0,
            ryan: 0, roger: 0, bones: 0, bryan: 0
        },
        flags: { waluigiPending: false }
    };
}


export function saveState() {
    localStorage.setItem('vigilanceTerminalState', JSON.stringify(state));
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
                    if (isTarget && rumor.effects[factionKey]) {
                        const effect = rumor.effects[factionKey];
                        rumorRepModifier += effect;
                        rumorNotorietyModifier += Math.abs(effect) / 2;
                        calculationBreakdown[playerKey][factionKey].rumors.push({ title: rumor.title, value: effect });
                    }
                }
            });
            finalReps[playerKey].reputation[factionKey] += rumorRepModifier;
            finalReps[playerKey].notoriety[factionKey] += rumorNotorietyModifier;
        }
    }

    // A simple propagation model: an ally's friends like you a little more, an enemy's friends like you a little less
    const propagationFactor = 0.2;
    for (const playerKey in finalReps) {
        const playerRep = finalReps[playerKey].reputation;
        const propagatedChanges = {};

        factionKeys.forEach(targetFactionKey => {
            let propagatedEffect = 0;
            const targetFaction = LORE_DATA.factions[targetFactionKey];
            if(!targetFaction) return;

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
                     propagatedEffect -= change;
                     if(Math.abs(change) > 1) calculationBreakdown[playerKey][targetFactionKey].propagation.push({ source: sourceFaction.name, value: Math.round(change) });
                }
            });
            propagatedChanges[targetFactionKey] = propagatedEffect;
        });

        factionKeys.forEach(factionKey => {
            playerRep[factionKey] += Math.round(propagatedChanges[factionKey] || 0);
        });
    }

    // Sub-faction reputation calculations
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
    
    // Final clamp and assignment
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
        // Merge saved state into the default state structure
        Object.assign(state, parsedState);
    }
    
    const savedDebug = localStorage.getItem('vigilanceDebugMode');
    state.debugMode = savedDebug === 'true';

    // Always run these initializations to ensure data structure is up-to-date
    initReputation();
    calculateFinalReputations();
    processInitialXP();

    // Check if focus tree state needs initialization
    if (!state.focusTreeState || state.focusTreeState.buildVersionApplied !== "2024-05-18-r1") {
        initFocusTreeState();
    }
    
    // Ensure map state objects exist for all maps
    for (const mapId in MAP_DATA) {
        if (!state.mapState.userPois[mapId]) {
            state.mapState.userPois[mapId] = [];
        }
        if (!state.mapState.userFogs[mapId]) {
            state.mapState.userFogs[mapId] = [];
        }
    }

    // Ensure userState exists for follow system
    if (!state.userState) {
        state.userState = { following: [], seenPostIds: [], waluigiWarningShown: false };
    }


    // Update loggedInUser from localStorage again, in case it changed in another tab
    state.loggedInUser = localStorage.getItem('vigilanceTerminalUser') || 'generic';
}