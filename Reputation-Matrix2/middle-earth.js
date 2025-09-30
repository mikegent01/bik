// This file contains faction data for powers based in Middle-earth.

export const MIDDLE_EARTH_FACTIONS = {
    kingdom_of_gondor: {
        name: "Kingdom of Gondor",
        description: "The great southern kingdom of Men, ever watchful of the shadow in the East. Known for its white towers, valiant soldiers, and the long line of Stewards who rule in the absence of the King.",
        logo: 'icon_focus.png', // Placeholder, needs a proper logo
        relations: {
            allies: ['kingdom_of_rohan', 'elves_of_lindon', 'kingdoms_of_the_dwarves'],
            enemies: ['mordor', 'freelancer_underworld'] // freelancer_underworld for Corsairs of Umbar
        },
        power_level: 9,
        category: "Major Powers",
        region: "Middle-earth"
    },
    kingdom_of_rohan: {
        name: "Kingdom of Rohan",
        description: "A kingdom of proud horse-lords on the vast plains of Calenardhon. Famed for their cavalry, the Rohirrim, they are staunch allies of Gondor.",
        logo: 'icon_focus.png', // Placeholder
        relations: {
            allies: ['kingdom_of_gondor'],
            enemies: ['isengard', 'mordor']
        },
        power_level: 7,
        category: "Regional Powers",
        region: "Middle-earth"
    },
    lothlorien: {
        name: "Lothlórien",
        description: "The hidden golden wood of the Elves, protected by the power of the Lady Galadriel and the Ring Nenya. A place of ancient magic and timeless beauty, wary of outsiders.",
        logo: 'icon_focus.png', // Placeholder
        relations: {
            allies: ['elves_of_lindon'],
            enemies: ['mordor', 'isengard']
        },
        power_level: 7,
        category: "Mystical & Ancient",
        region: "Middle-earth"
    },
    elves_of_lindon: {
        name: "Elves of Lindon",
        description: "The last great realm of the High Elves in Middle-earth, ruled by Círdan the Shipwright from the Grey Havens. A place of serene beauty and sorrowful farewells as the Elves depart for the West.",
        logo: 'icon_focus.png', // Placeholder
        relations: {
            allies: ['kingdom_of_gondor', 'lothlorien', 'kingdoms_of_the_dwarves'],
            enemies: ['mordor']
        },
        power_level: 7,
        category: "Mystical & Ancient",
        region: "Middle-earth"
    },
    kingdoms_of_the_dwarves: {
        name: "Kingdoms of the Dwarves",
        description: "The stoic and industrious Dwarves of the mountain holds like Erebor and the Iron Hills. They are master smiths who forge legendary weapons and armor, and harbor a deep love for gold and mithril.",
        logo: 'icon_focus.png', // Placeholder
        relations: {
            allies: ['elves_of_lindon', 'kingdom_of_gondor'],
            enemies: ['isengard', 'mordor']
        },
        power_level: 7,
        category: "Regional Powers",
        region: "Middle-earth",
    },
    isengard: {
        name: "Isengard",
        description: "The fortress of the wizard Saruman, who has turned from the path of wisdom and now breeds an army of Uruk-hai in its deep pits. His mind of metal and wheels seeks dominion over Rohan.",
        logo: 'icon_focus.png', // Placeholder
        relations: {
            allies: ['mordor'],
            enemies: ['kingdom_of_rohan', 'lothlorien']
        },
        power_level: 8,
        category: "Major Powers",
        region: "Middle-earth"
    },
    mordor: {
        name: "The Land of Mordor",
        description: "A black land of ash and fire, ruled by the Dark Lord Sauron from his great tower of Barad-dûr. An empire built on shadow, fear, and the might of its Orc legions, seeking to cover all the world in a second darkness.",
        logo: 'icon_focus.png', // Placeholder
        relations: {
            allies: ['isengard'],
            enemies: ['kingdom_of_gondor', 'kingdom_of_rohan', 'lothlorien', 'elves_of_lindon', 'kingdoms_of_the_dwarves']
        },
        power_level: 10,
        category: "Major Powers",
        region: "Middle-earth"
    }
};