// map-data/yal-belanor-pois.js

export const yalBelanorData = {
    pointsOfInterest: [
        // #52
        {
            id: 'poi_yb_belanor_city',
            x: 55.0,
            y: 15.0,
            type: 'major_city',
            name: "City of Belanor",
            description: "The provincial capital, known for its white marble architecture. The city operates under the Provincial Edicts of Yal Belanor, a legal code that, while Imperial, places heavy emphasis on noble privilege and military honor.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 10 },
            political_influence: 9,
            economic_value: 8,
            military_strength: 7,
            population: 45000
        },
        // #53
        {
            id: 'poi_yb_silverstream',
            x: 48.5,
            y: 19.0,
            type: 'river',
            name: "Silverstream River",
            description: "A wide, placid river whose purity makes the surrounding lands exceptionally fertile. All lands along its banks fall under the direct stewardship of the local noble houses, as per the Edicts.",
            factionId: 'unaligned',
            intelReq: { faction: 'unaligned', level: 5 },
            political_influence: 2,
            economic_value: 6,
            military_strength: 1,
            population: 0
        },
        // #54
        {
            id: 'poi_yb_veridia_estate',
            x: 60.0,
            y: 8.0,
            type: 'village',
            name: "Veridia Estate",
            description: "The ancestral home of Lady Elara Veridia, Speaker of the Diet. The estate is a bastion of high society and traditionalist politics, a place where the Provincial Edicts are both written and enforced.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 40 },
            political_influence: 8,
            economic_value: 7,
            military_strength: 4,
            population: 800
        },
        // #55
        {
            id: 'poi_yb_elven_ruins',
            x: 42.5,
            y: 12.0,
            type: 'ruins',
            name: "Ruins of Aeridor",
            description: "The crumbling ruins of an ancient elven city. Under the Edicts, these ruins are protected Imperial heritage sites, and any unauthorized salvage is considered treason.",
            factionId: 'unaligned',
            intelReq: { faction: 'mages_guild', level: 50 },
            political_influence: 2,
            economic_value: 4,
            military_strength: 2,
            population: 0
        },
        // #56
        {
            id: 'poi_yb_knightly_academy',
            x: 57.0,
            y: 17.0,
            type: 'academy',
            name: "Belanorian Knightly Academy",
            description: "A prestigious military academy where the children of nobles are trained in war and command. The academy has its own strict legal code, even more rigid than the standard Provincial Edicts.",
            factionId: 'regal_empire',
            intelReq: { faction: 'iron_legion', level: 25 },
            political_influence: 6,
            economic_value: 3,
            military_strength: 8,
            population: 2000
        },
        // #57
        {
            id: 'poi_yb_whisperwood_edge',
            x: 41.0,
            y: 20.0,
            type: 'forest',
            name: "Whisperwood Glade",
            description: "The easternmost edge of the vast Whisperwood. While claimed by the Empire under its Edicts, this area is frequently contested by Moonfang Pack werewolves, making it a dangerous and lawless frontier.",
            factionId: 'moonfang_pack',
            intelReq: { faction: 'moonfang_pack', level: 30 },
            political_influence: 2,
            economic_value: 2,
            military_strength: 3,
            population: 0
        },
        // #58
        {
            id: 'poi_yb_stonebridge_keep',
            x: 65.0,
            y: 5.0,
            type: 'fortress',
            name: "Stonebridge Keep",
            description: "The personal fortress of Sir Reginald Stonebridge. It is a bastion of the Iron Legion that guards the northern approach, operating under the full, uncompromising weight of Imperial military law.",
            factionId: 'iron_legion',
            intelReq: { faction: 'iron_legion', level: 35 },
            political_influence: 5,
            economic_value: 2,
            military_strength: 9,
            population: 1200
        },
        // #59
        {
            id: 'poi_yb_sunstone_vineyards',
            x: 52.0,
            y: 8.0,
            type: 'farm',
            name: "Sunstone Vineyards",
            description: "Famous vineyards that produce wine favored by the Imperial court. The vineyards are owned by a powerful noble house, and any theft is punished severely under local property Edicts.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 15 },
            political_influence: 4,
            economic_value: 9,
            military_strength: 2,
            population: 600
        },
        // #60
        {
            id: 'poi_yb_wayfinders_lodge',
            x: 45.0,
            y: 8.0,
            type: 'outpost',
            name: "Wayfinders' Lodge",
            description: "A remote lodge for the Wayfinders' Guild. The Guild has a special charter granting them limited autonomy, allowing them to operate outside some of the stricter Provincial Edicts.",
            factionId: 'unaligned',
            intelReq: { faction: 'unaligned', level: 20 },
            political_influence: 3,
            economic_value: 3,
            military_strength: 3,
            population: 40
        },
        // #61
        {
            id: 'poi_yb_hermits_cave',
            x: 69.0,
            y: 18.0,
            type: 'cave_entrance',
            name: "Hermit's Cave",
            description: "A secluded cave said to be home to a reclusive sage. The local lords leave him be, making his cave one of the few places in the province not subject to their Edicts.",
            factionId: 'unaligned',
            intelReq: { faction: 'unaligned', level: 55 },
            political_influence: 1,
            economic_value: 1,
            military_strength: 1,
            population: 1
        },
        // #62
        {
            id: 'poi_yb_griffon_roost',
            x: 67.0,
            y: 12.0,
            type: 'lair',
            name: "Griffon Roost",
            description: "The high peaks where the noble griffons nest. These creatures are protected by a special Imperial Edict, and harming one is a capital offense.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 45 },
            political_influence: 3,
            economic_value: 2,
            military_strength: 6,
            population: 0
        },
        {
            id: 'poi_yb_provincial_archives',
            x: 54.0,
            y: 13.0,
            type: 'library',
            name: "Provincial Archives",
            description: "A grand library holding the genealogical records of all major noble houses. Access is strictly controlled under Provincial Edicts to protect the secrets of the aristocracy.",
            factionId: 'regal_empire',
            intelReq: { faction: 'regal_empire', level: 30 },
            political_influence: 5,
            economic_value: 3,
            military_strength: 3,
            population: 100,
            library_summary: "The Provincial Archives of Yal Belanor focus primarily on military history and noble lineage. The collection includes detailed field manuals of the Iron Legion, tactical analyses of past wars, and the family trees of every major house in the province.",
            libraryStockKey: 'provincial_archives'
        },
        // #64
        {
            id: 'poi_yb_standing_stones',
            x: 48.0,
            y: 6.0,
            type: 'ancient_circle',
            name: "The Standing Stones of the First Men",
            description: "An ancient circle of monoliths that predates the Empire. While officially an Imperial heritage site, local nobles often ignore the Edicts and use it for their own private rituals.",
            factionId: 'unaligned',
            intelReq: { faction: 'mages_guild', level: 35 },
            political_influence: 1,
            economic_value: 2,
            military_strength: 2,
            population: 0
        },
        // #65
        {
            id: 'poi_yb_blackwood_manor',
            x: 47.0,
            y: 24.0,
            type: 'village',
            name: "Blackwood Manor",
            description: "A fortified manor belonging to a minor noble family rumored to have ties to the Onyx Hand. They use their noble status under the Edicts as a shield for their illicit activities.",
            factionId: 'onyx_hand',
            intelReq: { faction: 'onyx_hand', level: 60 },
            political_influence: 4,
            economic_value: 3,
            military_strength: 5,
            population: 200
        }
    ],
    fogOfWar: []
};
