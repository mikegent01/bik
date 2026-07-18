// This file contains new troop deployments for the Middle-earth region.

export const MIDDLE_EARTH_TROOPS = [
    {
        id: 'me_troop_1',
        mapId: 'middle_earth_full',
        x: 19.5,
        y: 27.0,
        factionId: 'elves_of_lindon',
        name: "Elven Guard of Forlond",
        unitType: 'garrison',
        strength: "Approx. 500 Elven Archers",
        details: {
            status: "Guarding",
            objective: "Maintain a vigilant watch over the Grey Havens and the northern shores of Lindon against any threats from the sea or the east.",
            supply_level: 95,
            morale: 90,
            organization: 90,
            intelReq: { faction: 'elves_of_lindon', level: 10 }
        }
    },
    {
        id: 'me_troop_2',
        mapId: 'middle_earth_full',
        x: 27.5,
        y: 26.0,
        factionId: 'kingdoms_of_the_dwarves',
        name: "Dwarven Mountain Patrol",
        unitType: 'patrol',
        strength: "Approx. 200 Dwarf Warriors",
        path: "M 27.5,26 L 29,28 L 26,29 Z",
        details: {
            status: "Patrolling",
            objective: "Keep the passes of the Blue Mountains clear of Orcs and other fell creatures, ensuring safe passage for traders and travelers.",
            supply_level: 80,
            morale: 85,
            organization: 85,
            intelReq: { faction: 'kingdoms_of_the_dwarves', level: 20 }
        }
    },
    {
        id: 'me_troop_3',
        mapId: 'middle_earth_full',
        x: 34.5,
        y: 25.0,
        factionId: 'kingdom_of_gondor',
        name: "Rangers of the North Patrol",
        unitType: 'special_ops',
        strength: "A company of Rangers",
        details: {
            status: "Watching",
            objective: "Patrol the borders of the old kingdom of Arnor, keeping a watch on the ruins of Fornost and the growing darkness in the north.",
            supply_level: 60,
            morale: 95,
            organization: 70,
            intelReq: { faction: 'kingdom_of_gondor', level: 50 }
        }
    },
    {
        id: 'me_troop_4',
        mapId: 'middle_earth_full',
        x: 35.0,
        y: 56.0,
        factionId: 'mordor',
        name: "Orc Warband of the Misty Mountains",
        unitType: 'main_force',
        strength: "Approx. 1000 Orcs & Goblins",
        details: {
            status: "Raiding",
            objective: "Launch raids from Goblin-town into the lands of Men and Elves, seeking plunder and spreading fear.",
            supply_level: 30,
            morale: 60,
            organization: 40,
            intelReq: { faction: 'kingdoms_of_the_dwarves', level: 30 }
        }
    },
    {
        id: 'me_troop_5',
        mapId: 'middle_earth_full',
        x: 35.0,
        y: 36.0,
        factionId: 'unaligned',
        name: "Bree-land Watch",
        unitType: 'garrison',
        strength: "Approx. 100 Men",
        details: {
            status: "Guarding",
            objective: "Protect the town of Bree and the surrounding farmlands from bandits and wolves.",
            supply_level: 75,
            morale: 70,
            organization: 65,
            intelReq: { faction: 'unaligned', level: 10 }
        }
    },
    {
        id: 'me_troop_6',
        mapId: 'middle_earth_full',
        x: 48.0,
        y: 85.0,
        factionId: 'freelancer_underworld',
        name: "Corsair Fleet of Umbar",
        unitType: 'main_force',
        strength: "The Black Fleet",
        details: {
            status: "Raiding",
            objective: "Launch coastal raids against the shores of Gondor and beyond, seeking plunder and sowing terror.",
            supply_level: 70,
            morale: 80,
            organization: 75,
            intelReq: { faction: 'freelancer_underworld', level: 30 }
        }
    },
    {
        id: 'me_troop_7',
        mapId: 'middle_earth_full',
        x: 72.0,
        y: 76.0,
        factionId: 'mordor',
        name: "Haradrim Mumakil Cohort",
        unitType: 'siege_unit',
        strength: "War Oliphaunts & Handlers",
        details: {
            status: "Preparing for War",
            objective: "Train the great Mûmakil for the coming wars, preparing them to serve as living siege towers.",
            supply_level: 60,
            morale: 85,
            organization: 65,
            intelReq: { faction: 'kingdom_of_gondor', level: 40 }
        }
    },
    {
        id: 'me_troop_8',
        mapId: 'middle_earth_full',
        x: 63.0,
        y: 56.0,
        factionId: 'mordor',
        name: "Harondor Patrol",
        unitType: 'patrol',
        strength: "Haradrim light cavalry",
        path: "M 63,56 L 65,58 L 62,59 Z",
        details: {
            status: "Patrolling",
            objective: "Scout the contested lands of South Gondor, engaging any Gondorian patrols they encounter.",
            supply_level: 50,
            morale: 70,
            organization: 60,
            intelReq: { faction: 'kingdom_of_gondor', level: 25 }
        }
    },
    {
        id: 'me_troop_9',
        mapId: 'middle_earth_full',
        x: 42.0,
        y: 84.0,
        factionId: 'freelancer_underworld',
        name: "Umbar Harbor Guard",
        unitType: 'garrison',
        strength: "Corsair Marines",
        details: {
            status: "Securing",
            objective: "Protect the Corsair Fleet Anchorage from sabotage and assault.",
            supply_level: 90,
            morale: 80,
            organization: 85,
            intelReq: { faction: 'freelancer_underworld', level: 25 }
        }
    },
    {
        id: 'me_troop_10',
        mapId: 'middle_earth_full',
        x: 50.0,
        y: 82.0,
        factionId: 'freelancer_underworld',
        name: "Corsair Raiding Party",
        unitType: 'patrol',
        strength: "Fast Raider Ships",
        path: "M 50,82 L 53,80 L 48,78 Z",
        details: {
            status: "Raiding",
            objective: "Patrol the Bay of Belfalas, preying on merchant ships from Dol Amroth.",
            supply_level: 65,
            morale: 85,
            organization: 70,
            intelReq: { faction: 'freelancer_underworld', level: 35 }
        }
    },
    {
        id: 'me_troop_11',
        mapId: 'middle_earth_full',
        x: 47.0,
        y: 57.5,
        factionId: 'kingdom_of_gondor',
        name: "Garrison of Minas Tirith",
        unitType: 'garrison',
        strength: "The White City Guard",
        details: {
            status: "Guarding",
            objective: "Defend the city of Minas Tirith from all threats.",
            supply_level: 100,
            morale: 95,
            organization: 95,
            intelReq: { faction: 'kingdom_of_gondor', level: 10 }
        }
    },
    {
        id: 'me_troop_12',
        mapId: 'middle_earth_full',
        x: 61.0,
        y: 57.0,
        factionId: 'kingdom_of_gondor',
        name: "Rangers of Ithilien",
        unitType: 'special_ops',
        strength: "A company of Rangers",
        details: {
            status: "Harassing",
            objective: "Wage a guerrilla war in Ithilien, ambushing Orc patrols and disrupting Mordor's supply lines.",
            supply_level: 50,
            morale: 90,
            organization: 75,
            intelReq: { faction: 'kingdom_of_gondor', level: 45 }
        }
    },
    {
        id: 'me_troop_13',
        mapId: 'middle_earth_full',
        x: 53.5,
        y: 58.0,
        factionId: 'mordor',
        name: "Osgiliath Assault Force",
        unitType: 'main_force',
        strength: "Orc legions",
        battlefront: true,
        details: {
            status: "Assaulting",
            objective: "Capture the western bank of Osgiliath and secure a bridgehead across the Anduin.",
            supply_level: 40,
            morale: 70,
            organization: 50,
            intelReq: { faction: 'kingdom_of_gondor', level: 25 }
        }
    },
    {
        id: 'me_troop_14',
        mapId: 'middle_earth_full',
        x: 35.0,
        y: 65.0,
        factionId: 'kingdom_of_gondor',
        name: "Fleet of Dol Amroth",
        unitType: 'patrol',
        strength: "Swan-ships of the Prince",
        path: "M 35,65 L 38,68 L 33,69 Z",
        details: {
            status: "Patrolling",
            objective: "Patrol the Bay of Belfalas, protecting the coasts of Gondor from Corsair raids.",
            supply_level: 90,
            morale: 90,
            organization: 90,
            intelReq: { faction: 'kingdom_of_gondor', level: 25 }
        }
    },
    {
        id: 'me_troop_15',
        mapId: 'middle_earth_full',
        x: 58.0,
        y: 44.0,
        factionId: 'mordor',
        name: "Dol Guldur Garrison",
        unitType: 'garrison',
        strength: "Orcs of the Necromancer",
        details: {
            status: "Occupying",
            objective: "Hold the fortress of Dol Guldur and spread its corrupting influence throughout southern Mirkwood.",
            supply_level: 80,
            morale: 85,
            organization: 70,
            intelReq: { faction: 'lothlorien', level: 40 }
        }
    },
    {
        id: 'me_troop_16',
        mapId: 'middle_earth_full',
        x: 60.0,
        y: 18.0,
        factionId: 'lothlorien',
        name: "Host of the Elvenking",
        unitType: 'main_force',
        strength: "Wood-elf Spearmen & Archers",
        details: {
            status: "Guarding",
            objective: "Protect the realm of the Woodland King from the spiders and Orcs of Mirkwood.",
            supply_level: 90,
            morale: 90,
            organization: 85,
            intelReq: { faction: 'lothlorien', level: 30 }
        }
    },
    {
        id: 'me_troop_17',
        mapId: 'middle_earth_full',
        x: 75.0,
        y: 18.0,
        factionId: 'kingdoms_of_the_dwarves',
        name: "Garrison of the Iron Hills",
        unitType: 'garrison',
        strength: "Dwarf Warriors of Dáin",
        details: {
            status: "Defending",
            objective: "Guard the Iron Hills and the eastern approaches to Erebor from any threat emerging from the east.",
            supply_level: 95,
            morale: 90,
            organization: 90,
            intelReq: { faction: 'kingdoms_of_the_dwarves', level: 30 }
        }
    },
    {
        id: 'me_troop_18',
        mapId: 'middle_earth_full',
        x: 69.0,
        y: 22.0,
        factionId: 'unaligned',
        name: "City Guard of Dale",
        unitType: 'garrison',
        strength: "Men of Dale",
        details: {
            status: "Guarding",
            objective: "Protect the rebuilt city of Dale from Orcs and other dangers of the Wild.",
            supply_level: 85,
            morale: 80,
            organization: 75,
            intelReq: { faction: 'unaligned', level: 15 }
        }
    }
];
