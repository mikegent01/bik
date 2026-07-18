// map-battle-data-mushroom-kingdom.js
// This file contains battle-specific data for the Mushroom Kingdom Civil War scenario.

export const MUSHROOM_KINGDOM_BATTLE_DATA = {
    fogOfWar: [
        { id: 'fog_mk_battle_nw', mapId: 'mushroom_kingdom_full', points: "0,0 38,0 38,38 0,38 0,0" },
        { id: 'fog_mk_battle_ne', mapId: 'mushroom_kingdom_full', points: "67,0 100,0 100,38 67,38 67,0" },
        { id: 'fog_mk_battle_sw', mapId: 'mushroom_kingdom_full', points: "0,72 33,72 33,100 0,100 0,72" },
        { id: 'fog_mk_battle_se', mapId: 'mushroom_kingdom_full', points: "62,72 100,72 100,100 62,100 62,72" },
    ],
    troop_deployments: [
        // --- FAWFUL'S FORCES (Defending Peach's Castle) ---
        {
            id: 'fawful_garrison_main', mapId: 'mushroom_kingdom_full', x: 50.5, y: 30.8, factionId: 'fawfuls_furious_freaks',
            name: "Fawful's Main Garrison", unitType: 'garrison', strength: "Fury-Bots & Brainwashed Minions", battlefront: true,
            details: { status: "Entrenched", objective: "Defend the castle with maximum fury!", supply_level: 95, morale: 100, organization: 40, intelReq: { faction: 'fawfuls_furious_freaks', level: 25 } }
        },
        {
            id: 'fawful_doom_cannon', mapId: 'mushroom_kingdom_full', x: 48.5, y: 28.0, factionId: 'fawfuls_furious_freaks',
            name: "The Guffaw-pult", unitType: 'siege_unit', strength: "One very large, very strange catapult", battlefront: true,
            details: { status: "Bombarding", objective: "Launch explosive jack-in-the-boxes at the Loyalist siege lines.", supply_level: 100, morale: 100, organization: 20, intelReq: { faction: 'fawfuls_furious_freaks', level: 45 } }
        },
        {
            id: 'fawful_beanish_brigade', mapId: 'mushroom_kingdom_full', x: 53.0, y: 29.5, factionId: 'fawfuls_furious_freaks',
            name: "Beanish Brigade", unitType: 'special_ops', strength: "Elite Beanish engineers", battlefront: false,
            details: { status: "Maintaining", objective: "Maintain the castle's bizarre defensive systems and repair damage.", supply_level: 100, morale: 90, organization: 85, intelReq: { faction: 'fawfuls_furious_freaks', level: 50 } }
        },
        {
            id: 'fawful_minion_patrol', mapId: 'mushroom_kingdom_full', x: 55.0, y: 34.0, factionId: 'fawfuls_furious_freaks',
            name: "Minion Patrol", unitType: 'patrol', strength: "Fawful-Bots", path: "M 55,34 L 57,36 L 54,37 Z",
            details: { status: "Patrolling", objective: "Patrol the eastern approaches to the castle to prevent flanking.", supply_level: 80, morale: 100, organization: 30, intelReq: { faction: 'fawfuls_furious_freaks', level: 30 } }
        },
        // --- PEACH LOYALIST FORCES (Sieging the Castle) ---
        {
            id: 'loyalist_main_force', mapId: 'mushroom_kingdom_full', x: 45.0, y: 35.0, factionId: 'peach_loyalists',
            name: "Loyalist Main Siege Force", unitType: 'main_force', strength: "Approx. 400 zealous fighters", battlefront: true,
            details: { status: "Besieging", objective: "Maintain pressure on Fawful's Fortress and probe for weaknesses.", supply_level: 85, morale: 95, organization: 80, intelReq: { faction: 'peach_loyalists', level: 25 } }
        },
        {
            id: 'loyalist_artillery', mapId: 'mushroom_kingdom_full', x: 42.0, y: 32.0, factionId: 'peach_loyalists',
            name: "Loyalist Trebuchets", unitType: 'siege_unit', strength: "Trebuchet Battery", battlefront: true,
            details: { status: "Bombarding", objective: "Weaken the castle's western walls with constant bombardment.", supply_level: 70, morale: 80, organization: 75, intelReq: { faction: 'peach_loyalists', level: 35 } }
        },
        {
            id: 'loyalist_outriders', mapId: 'mushroom_kingdom_full', x: 43.0, y: 37.0, factionId: 'peach_loyalists',
            name: "Loyalist Outriders", unitType: 'patrol', strength: "Scout units led by Mistveil", path: "M 43,37 L 48,40 L 44,43 Z",
            details: { status: "Patrolling", objective: "Secure supply lines and monitor Koopa remnant activity.", supply_level: 75, morale: 85, organization: 70, intelReq: { faction: 'peach_loyalists', level: 35 } }
        },
        {
            id: 'loyalist_reserves', mapId: 'mushroom_kingdom_full', x: 41.0, y: 44.0, factionId: 'peach_loyalists',
            name: "Loyalist Reserves", unitType: 'garrison', strength: "Approx. 200 soldiers", battlefront: false,
            details: { status: "Waiting", objective: "Stand by to reinforce the main siege line or counter-attack.", supply_level: 90, morale: 80, organization: 85, intelReq: { faction: 'peach_loyalists', level: 20 } }
        },
        // --- MUSHROOM REGENCY FORCES (Holding Toad Town) ---
        {
            id: 'regency_garrison', mapId: 'mushroom_kingdom_full', x: 45.0, y: 65.0, factionId: 'mushroom_regency',
            name: "Toad Town Garrison", unitType: 'garrison', strength: "Approx. 800 guardsmen", battlefront: false,
            details: { status: "Maintaining Order", objective: "Secure Toad Town from criminal elements and prevent the conflict from spilling into civilian areas.", supply_level: 60, morale: 55, organization: 75, intelReq: { faction: 'mushroom_regency', level: 20 } }
        },
        {
            id: 'regency_checkpoint_alpha', mapId: 'mushroom_kingdom_full', x: 56.1, y: 36.9, factionId: 'mushroom_regency',
            name: "Checkpoint Alpha Patrol", unitType: 'patrol', strength: "Guardsmen & Cavalry", path: "M 56.1,36.91 L 60,38 L 57,41 Z",
            details: { status: "Screening", objective: "Maintain a security corridor south of the capital, screening refugees.", supply_level: 65, morale: 60, organization: 70, intelReq: { faction: 'mushroom_regency', level: 25 } }
        },
        {
            id: 'regency_command', mapId: 'mushroom_kingdom_full', x: 42.0, y: 62.0, factionId: 'mushroom_regency',
            name: "Regency Command Post", unitType: 'garrison', strength: "Captain Toad & Staff", battlefront: false,
            details: { status: "Commanding", objective: "Coordinate Regency forces and manage the refugee crisis in Toad Town.", supply_level: 80, morale: 70, organization: 90, intelReq: { faction: 'mushroom_regency', level: 30 } }
        },
        // --- KOOPA TROOP REMNANTS (Observing) ---
        {
            id: 'koopa_scryers', mapId: 'mushroom_kingdom_full', x: 44.0, y: 28.0, factionId: 'koopa_troop',
            name: "Kamek's Scryers", unitType: 'special_ops', strength: "Elite Magikoopas", battlefront: false,
            details: { status: "Observing", objective: "Gather intelligence on all factions to identify an opportunity for intervention.", supply_level: 90, morale: 80, organization: 90, intelReq: { faction: 'koopa_troop', level: 40 } }
        },
        {
            id: 'koopa_raiders', mapId: 'mushroom_kingdom_full', x: 50.5, y: 58.0, factionId: 'koopa_troop',
            name: "Bob-omb Raiders", unitType: 'main_force', strength: "A desperate but dangerous warband", battlefront: false,
            details: { status: "Scavenging", objective: "Recover old war machines from the Bob-omb Battlefield to re-arm.", supply_level: 30, morale: 45, organization: 40, intelReq: { faction: 'koopa_troop', level: 30 } }
        },
        {
            id: 'koopa_patrol', mapId: 'mushroom_kingdom_full', x: 60.0, y: 48.0, factionId: 'koopa_troop',
            name: "Koopa Recon Patrol", unitType: 'patrol', strength: "Paratroopas", path: "M 60,48 L 63,50 L 59,52 Z",
            details: { status: "Scouting", objective: "Scout the eastern front for weaknesses in the Regency's defenses.", supply_level: 70, morale: 75, organization: 65, intelReq: { faction: 'koopa_troop', level: 35 } }
        },
        // --- TOAD GANG (Exploiting Chaos) ---
        {
            id: 'toad_gang_ambush', mapId: 'mushroom_kingdom_full', x: 44.2, y: 32.5, factionId: 'toad_gang',
            name: "Toad Gang Ambush Party", unitType: 'ambush', strength: "A well-armed gang of thugs", battlefront: false,
            details: { status: "Lying in Wait", objective: "Ambush Loyalist supply caravans in the Goomba Grove for profit.", supply_level: 50, morale: 65, organization: 50, intelReq: { faction: 'toad_gang', level: 50 } }
        },
        {
            id: 'toad_gang_sewer_patrol', mapId: 'mushroom_kingdom_full', x: 43.0, y: 59.0, factionId: 'toad_gang',
            name: "Sewer Patrol", unitType: 'patrol', strength: "Thugs & Enforcers", path: "M 43,59 L 41,61 L 44,62 Z",
            details: { status: "Patrolling", objective: "Control the sewer tunnels beneath Toad Town for smuggling.", supply_level: 80, morale: 70, organization: 60, intelReq: { faction: 'toad_gang', level: 25 } }
        },
        {
            id: 'toad_gang_racket', mapId: 'mushroom_kingdom_full', x: 46.0, y: 68.0, factionId: 'toad_gang',
            name: "Protection Racket HQ", unitType: 'garrison', strength: "Skull-Cap Murphy & his crew", battlefront: false,
            details: { status: "Extorting", objective: "Run protection rackets in the main part of Toad Town, exploiting the chaos.", supply_level: 90, morale: 75, organization: 55, intelReq: { faction: 'toad_gang', level: 30 } }
        }
    ]
};