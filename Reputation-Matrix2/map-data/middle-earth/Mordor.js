// map-data/middle-earth/Mordor.js

export const mordorData = {
    pointsOfInterest: [
        {
            id: 'poi_me_barad_dur',
            x: 85.00, y: 55.00, type: 'fortress', subRegion: 'mordor', name: "Barad-dûr, the Dark Tower",
            description: "The great fortress of the Dark Lord Sauron. A place of shadow and fear, its foundations are laid in cruelty and its tower rises to pierce the heavens, crowned by the ever-watchful Lidless Eye.",
            factionId: 'mordor', intelReq: 70, political_influence: 10, economic_value: 8, military_strength: 10, population: 100000,
        },
        {
            id: 'poi_me_mount_doom',
            x: 75.00, y: 60.00, type: 'volcano', subRegion: 'mordor', name: "Mount Doom (Orodruin)",
            description: "The fiery mountain where the One Ring was forged. Its fires burn with a dark and ancient power, and its slopes are choked with ash and fumes. It is the heart of Sauron's power in Mordor.",
            factionId: 'mordor', intelReq: 60, political_influence: 8, economic_value: 7, military_strength: 9, population: 0,
        },
        {
            id: 'poi_me_gorgoroth',
            x: 78.00, y: 62.00, type: 'landmark', subRegion: 'mordor', name: "The Plateau of Gorgoroth",
            description: "A vast, arid plateau of ash and slag in the heart of Mordor. It is a land of torment, dotted with Orc-barracks, slave-pits, and the great forges that arm Sauron's legions.",
            factionId: 'mordor', intelReq: 40, political_influence: 5, economic_value: 6, military_strength: 8, population: 50000,
        },
        {
            id: 'poi_me_slave_pits',
            x: 72.00, y: 58.00, type: 'mine', subRegion: 'mordor', name: "The Great Slave-Pits",
            description: "Vast open-pit mines and quarries where countless slaves from conquered lands toil under the lash of Orc overseers, extracting the resources needed for Mordor's war machine.",
            factionId: 'mordor', intelReq: 45, political_influence: 3, economic_value: 9, military_strength: 6, population: 20000,
        },
        {
            id: 'poi_me_mordor_armouries',
            x: 80.00, y: 54.00, type: 'workshop', subRegion: 'mordor', name: "The Great Armouries",
            description: "A sprawling complex of forges and workshops near Barad-dûr where the weapons and armour for Sauron's armies are mass-produced in the hellish fires of Mount Doom.",
            factionId: 'mordor', intelReq: 50, political_influence: 4, economic_value: 8, military_strength: 7, population: 15000,
        },
        {
            id: 'poi_me_dark_library',
            x: 84.50, y: 54.50, type: 'library', subRegion: 'mordor', name: "The Dark Library of Barad-dûr",
            description: "A repository of forbidden and corrupted knowledge within the Dark Tower. Sauron has collected ancient texts of power, domination, and deceit from all corners of the world to fuel his dark designs.",
            factionId: 'mordor', intelReq: 85, political_influence: 7, economic_value: 5, military_strength: 6, population: 100,
            library_summary: "The Dark Library of Barad-dûr contains forbidden lore on power, control, and ancient evils, collected by Sauron to study his enemies and perfect his own tyranny.",
            libraryStockKey: 'mordor_archives',
        }
    ],
    fogOfWar: [

    ]
};