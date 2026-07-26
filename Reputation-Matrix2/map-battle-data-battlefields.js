// This file contains troop and front line data specifically for battlefield maps.

export const BATTLEFIELD_DATA = {
    front_lines: [
        {
            id: 'fl_bf_ravencreek',
            mapId: 'battlefield_ravencreek',
            points: "31,45 34,43 36,46 39,44",
            description: "The contested battlefront at Ravencreek between the Moonfang Pack and the Onyx Hand."
        }
    ],
    troop_deployments: [
        // --- BATTLE OF RAVENCREEK ---
        {
            id: 'bf_werewolf_vanguard',
            mapId: 'battlefield_ravencreek',
            x: 33.0, y: 42.0,
            factionId: 'moonfang_pack',
            name: "Moonfang Pack Vanguard",
            unitType: 'main_force',
            strength: "Approx. 450 warriors",
            battlefront: true,
            details: {
                status: "Assaulting",
                objective: "Break the vampire line at Ravencreek and push south to reclaim ancestral lands.",
                supply_level: 70, morale: 85, organization: 60,
                intelReq: { faction: 'moonfang_pack', level: 30 }
            }
        },
        {
            id: 'bf_vampire_legion',
            mapId: 'battlefield_ravencreek',
            x: 35.0, y: 45.0,
            factionId: 'onyx_hand',
            name: "Sanguine Legion",
            unitType: 'main_force',
            strength: "Approx. 300 thralls, 50 knights",
            battlefront: true,
            details: {
                status: "Defending",
                objective: "Hold Ravencreek at all costs and bleed the werewolves dry.",
                supply_level: 80, morale: 70, organization: 90,
                intelReq: { faction: 'onyx_hand', level: 30 }
            }
        },
        {
            id: 'bf_regal_observers',
            mapId: 'battlefield_ravencreek',
            x: 65.0, y: 90.0,
            factionId: 'regal_empire',
            name: "Imperial Observers",
            unitType: 'special_ops',
            strength: "120 Legionnaires",
            details: {
                status: "Observing",
                objective: "Observe and contain the conflict. Do not engage unless Imperial assets are threatened.",
                supply_level: 100, morale: 100, organization: 95,
                intelReq: { faction: 'regal_empire', level: 30 }
            }
        }
    ]
};