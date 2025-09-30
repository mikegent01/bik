// This file contains the original, base data for tactical map elements.

export const BASE_BATTLE_DATA = {
    front_lines: [
        {
            id: 'fl_mk_siege',
            mapId: 'mushroom_kingdom_full',
            points: "44,32 47,30 49,34 52,31 54,35",
            description: "The main siege line between the Peach Loyalists and Fawful's occupied castle."
        },
        {
            id: 'fl_midlands_ravencreek',
            mapId: 'midlands_full',
            points: "31,45 34,43 36,46 39,44",
            description: "The contested battlefront at Ravencreek between the Moonfang Pack and the Onyx Hand."
        },
        {
            id: 'fl_me_war_in_the_north',
            mapId: 'middle_earth_full',
            points: "32,22 35,19 38,23",
            description: "The contested lands around the ruins of Fornost, where Rangers of the North clash with Orcs and Hill-men from Angmar."
        },
        {
            id: 'fl_inet_data_breach',
            mapId: 'internet_full',
            points: "28,68 32,64 36,69",
            description: "The front line of a major data breach, where Federation Anti-Virus programs battle a self-replicating logic virus emerging from the Criminal Web."
        }
    ],
    vigilance_journey: {
        mapId: 'midlands_full',
        path: "M 41,46 C 45,50 60,20 81.28,4.29",
        totalDays: 14,
        currentDay: 14,
        status: 'Arrived at Imperial Capital',
        get daysRemaining() {
            return this.totalDays - this.currentDay;
        }
    },
    troop_deployments: [
        {
            id: 'mk_loyalist_main',
            mapId: 'mushroom_kingdom_full',
            x: 46.5, y: 33.5,
            factionId: 'peach_loyalists',
            name: "Loyalist Main Siege Force",
            unitType: 'main_force',
            strength: "Approx. 400 zealous fighters",
            battlefront: true,
            details: { status: "Besieging", objective: "Maintain pressure on Fawful's Fortress and probe for weaknesses in the western wall.", supply_level: 85, morale: 95, organization: 80, intelReq: { faction: 'peach_loyalists', level: 25 } }
        },
        {
            id: 'mk_fawful_defenders',
            mapId: 'mushroom_kingdom_full',
            x: 50.0, y: 32.0,
            factionId: 'fawfuls_furious_freaks',
            name: "Fawful's Minion Horde",
            unitType: 'garrison',
            strength: "Unknown number of minions and machines",
            battlefront: true,
            details: { status: "Entrenched", objective: "Defend the castle with maximum fury and chortles!", supply_level: 95, morale: 100, organization: 40, intelReq: { faction: 'fawfuls_furious_freaks', level: 25 } }
        },
        {
            id: 'mid_werewolf_vanguard',
            mapId: 'midlands_full',
            x: 33.0, y: 42.0,
            factionId: 'moonfang_pack',
            name: "Moonfang Pack Vanguard",
            unitType: 'main_force',
            strength: "Approx. 450 warriors",
            battlefront: true,
            details: { status: "Assaulting", objective: "Break the vampire line at Ravencreek and push south to reclaim ancestral lands.", supply_level: 70, morale: 85, organization: 60, intelReq: { faction: 'moonfang_pack', level: 30 } }
        },
        {
            id: 'mid_vampire_legion',
            mapId: 'midlands_full',
            x: 35.0, y: 45.0,
            factionId: 'onyx_hand',
            name: "Sanguine Legion",
            unitType: 'main_force',
            strength: "Approx. 300 thralls, 50 knights",
            battlefront: true,
            details: { status: "Defending", objective: "Hold Ravencreek at all costs and bleed the werewolves dry.", supply_level: 80, morale: 70, organization: 90, intelReq: { faction: 'onyx_hand', level: 30 } }
        }
    ]
};