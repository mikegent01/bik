// map-data/vemillia-pois.js

export const vemilliaData = {
    pointsOfInterest: [
        // #1
        {
            id: 'poi_vm_vemia_city',
            x: 75.0,
            y: 30.0,
            type: 'major_city',
            name: "Vemia City",
            description: "The largest trade hub in the eastern Midlands. Though landlocked, its position at the convergence of several major Imperial roads makes it a bustling center of commerce, Imperial administration, and a hotbed for smugglers and spies.",
            factionId: 'regal_empire',
            intelReq: 10,
            political_influence: 8,
            economic_value: 10,
            military_strength: 7,
            population: 60000
        },
        // #2
        {
            id: 'poi_vm_naval_shipyard',
            x: 79.0,
            y: 25.0,
            type: 'workshop',
            name: "Imperial Landship Yard",
            description: "The primary shipyard for the Imperial Eastern Fleet's massive land-crawling battleships. The constant sound of construction echoes as new warships are built to project the Empire's power across the plains.",
            factionId: 'iron_legion',
            intelReq: 30,
            political_influence: 5,
            economic_value: 7,
            military_strength: 9,
            population: 7000
        },
        // #3
        {
            id: 'poi_vm_merchants_guild',
            x: 74.0,
            y: 33.0,
            type: 'market',
            name: "Merchants' Guildhall",
            description: "The opulent headquarters of the powerful merchants' guild that controls much of the trade in Vemia. A place of wealth, influence, and cutthroat business deals.",
            factionId: 'unaligned',
            intelReq: 20,
            political_influence: 6,
            economic_value: 9,
            military_strength: 3,
            population: 1500
        },
        // #4
        {
            id: 'poi_vm_smugglers_tunnel',
            x: 70.0,
            y: 38.0,
            type: 'cave_entrance',
            name: "Smuggler's Tunnel",
            description: "A series of hidden tunnels beneath the city used by the Crimson Fleet and other smugglers to bypass Imperial customs. It is a dangerous place, filled with traps and hired thugs.",
            factionId: 'crimson_fleet',
            intelReq: 45,
            political_influence: 2,
            economic_value: 6,
            military_strength: 4,
            population: 200
        },
        // #5
        {
            id: 'poi_vm_road_wardens_spire',
            x: 81.0,
            y: 35.0,
            type: 'watchtower',
            name: "The Road Warden's Spire",
            description: "A massive, magically-powered watchtower that overlooks the great Imperial roads. It also serves as a watchtower for the Imperial Guard, monitoring the roads for bandits.",
            factionId: 'regal_empire',
            intelReq: 15,
            political_influence: 3,
            economic_value: 3,
            military_strength: 6,
            population: 50
        },
        // #6
        {
            id: 'poi_vm_caravanserai',
            x: 72.0,
            y: 28.0,
            type: 'village',
            name: "The Great Caravanserai",
            description: "A bustling district of inns and stables that provides services to the thousands of merchants passing through the city. The caravan masters here form a powerful, independent community.",
            factionId: 'unaligned',
            intelReq: 10,
            political_influence: 2,
            economic_value: 7,
            military_strength: 2,
            population: 3000
        },
        // #7
        {
            id: 'poi_vm_fort_horizon',
            x: 77.0,
            y: 20.0,
            type: 'fortress',
            name: "Fort Horizon",
            description: "A heavily armed fortress that guards the northern approach to Vemia City. Its cannons can shell any army that approaches without permission.",
            factionId: 'iron_legion',
            intelReq: 25,
            political_influence: 3,
            economic_value: 2,
            military_strength: 9,
            population: 800
        },
        // #8
        {
            id: 'poi_vm_temple_of_coin',
            x: 78.0,
            y: 40.0,
            type: 'temple',
            name: "Temple of the Gilded Hand",
            description: "A lavish temple dedicated to the god of commerce and luck. Merchants make offerings here before every major deal, hoping for a favorable outcome.",
            factionId: 'unaligned',
            intelReq: 40,
            political_influence: 4,
            economic_value: 3,
            military_strength: 2,
            population: 100
        },
        // #9
        {
            id: 'poi_vm_salt_mines',
            x: 68.0,
            y: 25.0,
            type: 'mine',
            name: "The Salt Mines of Vemilia",
            description: "Vast salt mines that are a major source of wealth for the province. The work is grueling and often performed by political prisoners and indentured servants from The Unchained.",
            factionId: 'regal_empire',
            intelReq: 20,
            political_influence: 2,
            economic_value: 8,
            military_strength: 4,
            population: 2500
        },
        // #10
        {
            id: 'poi_vm_trade_road_ruins',
            x: 69.0,
            y: 33.0,
            type: 'ruins',
            name: "Old Trade Road Ruins",
            description: "The crumbling remains of an ancient trade road from a forgotten empire. It is now a dangerous, bandit-infested route, but is rumored to hold forgotten treasures.",
            factionId: 'unaligned',
            intelReq: 30,
            political_influence: 1,
            economic_value: 5,
            military_strength: 2,
            population: 0
        },
        // #11
        {
            id: 'poi_vm_onyx_hand_villa',
            x: 80.5,
            y: 38.0,
            type: 'lair',
            name: "Onyx Hand Villa",
            description: "A secluded, opulent villa that serves as a secret base of operations for the Onyx Hand. Here, they manipulate the city's merchant guilds and gather intelligence on Imperial movements.",
            factionId: 'onyx_hand',
            intelReq: 70,
            political_influence: 6,
            economic_value: 4,
            military_strength: 5,
            population: 50
        },
        // #12
        {
            id: 'poi_vm_silent_service_archive',
            x: 71.5,
            y: 22.0,
            type: 'prison',
            name: "Silent Service Archive",
            description: "A seemingly innocuous warehouse that is actually a secure archive for the Empire's intelligence agency. It holds blackmail material on nearly every important figure in the province.",
            factionId: 'regal_empire',
            intelReq: 90,
            political_influence: 7,
            economic_value: 2,
            military_strength: 8,
            population: 120
        },
        {
            id: 'poi_vm_scribes_guildhall',
            x: 76.5,
            y: 32.0,
            type: 'library',
            name: "Scribe's Guildhall & Public Library",
            description: "The headquarters of the Imperial Scribes' Guild and the public library for Vemia City. It contains vast archives of Imperial history and military doctrine. The party can access their public digital book collection from the terminals here.",
            factionId: 'regal_empire',
            intelReq: 15,
            political_influence: 5,
            economic_value: 5,
            military_strength: 3,
            population: 400,
            libraryStockKey: 'midlands'
        }
    ],
    fogOfWar: []
};