// map-battle-data-warhammer.js

export const WARHAMMER_TROOPS = [
    {
        id: 'wh_troop_1',
        mapId: 'warhammer_full',
        x: 41.0, y: 54.0,
        factionId: 'the_empire',
        name: "Helmgart Garrison",
        unitType: 'garrison',
        strength: "State Troops of Reikland",
        details: {
            status: "Vigilant",
            objective: "Guard the Axe Bite Pass against Greenskin incursions.",
            supply_level: 80, morale: 85, organization: 90,
            intelReq: { faction: 'the_empire', level: 15 }
        }
    },
    {
        id: 'wh_troop_2',
        mapId: 'warhammer_full',
        x: 43.0, y: 56.0,
        factionId: 'greenskins',
        name: "Grimgor's Ladz",
        unitType: 'main_force',
        strength: "A large Orc warband",
        battlefront: true,
        details: {
            status: "Raiding",
            objective: "Bash some 'umie 'eads and loot the borderlands.",
            supply_level: 40, morale: 95, organization: 30,
            intelReq: { faction: 'greenskins', level: 20 }
        }
    },
    {
        id: 'wh_troop_3',
        mapId: 'warhammer_full',
        x: 51.0, y: 53.0,
        factionId: 'vampire_counts',
        name: "Sylvanian Levy",
        unitType: 'patrol',
        strength: "Zombies & Skeletons",
        path: "M 51,53 L 50,56 L 53,55 Z",
        details: {
            status: "Patrolling",
            objective: "Patrol the borders of Sylvania, seeking fresh corpses for the army.",
            supply_level: 100, morale: 100, organization: 50,
            intelReq: { faction: 'vampire_counts', level: 25 }
        }
    }
];
