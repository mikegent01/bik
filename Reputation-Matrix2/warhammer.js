// factions/warhammer.js
export const WARHAMMER_FACTIONS = {
    the_empire: {
        name: "The Empire of Man",
        description: "A vast and powerful human nation, modeled on the Holy Roman Empire. It is a bastion of civilization beset on all sides by monstrous foes, internal strife, and the insidious whispers of Chaos.",
        logo: 'factions/empire.png',
        relations: {
            allies: ['kingdoms_of_the_dwarves_wh', 'high_elves', 'bretonnia'],
            enemies: ['greenskins', 'warriors_of_chaos', 'vampire_counts', 'skaven', 'dark_elves', 'araby', 'chaos_dwarfs', 'hobgoblin_khanates']
        },
        power_level: 9, category: "Major Powers", region: "The Fated Place (The Old World)"
    },
    kingdoms_of_the_dwarves_wh: {
        name: "The Dwarf Realms (Karaz Ankor)",
        description: "An ancient and proud race of mountain-dwellers, the Dwarfs are master craftsmen and stubborn warriors. Their once-great empire is now a shadow of its former self, locked in an endless war against Greenskins and Skaven.",
        logo: 'factions/dwarfs.png',
        relations: {
            allies: ['the_empire'],
            enemies: ['greenskins', 'skaven', 'warriors_of_chaos', 'dark_elves', 'chaos_dwarfs', 'hobgoblin_khanates']
        },
        power_level: 8, category: "Major Powers", region: "The Fated Place (World's Edge Mountains)"
    },
    greenskins: {
        name: "Greenskins",
        description: "A tide of savage Orcs and cunning Goblins, united by a love for battle and destruction. Their society is based on strength, and they periodically unite under a powerful Warboss to unleash a 'WAAAGH!' upon the world.",
        logo: 'factions/greenskins.png',
        relations: {
            allies: [],
            enemies: ['the_empire', 'kingdoms_of_the_dwarves_wh', 'vampire_counts', 'high_elves', 'tomb_kings', 'lizardmen', 'bretonnia', 'chaos_dwarfs']
        },
        power_level: 8, category: "Interdimensional Threats", region: "The Fated Place (The Badlands)"
    },
    vampire_counts: {
        name: "The Vampire Counts",
        description: "The undead lords of the cursed land of Sylvania. Led by powerful vampire aristocrats, they raise legions of zombies, skeletons, and fell beasts, seeking to spread their necromantic corruption across the lands of the living.",
        logo: 'factions/vampire_counts.png',
        relations: {
            allies: [],
            enemies: ['the_empire', 'greenskins', 'tomb_kings', 'bretonnia']
        },
        power_level: 7, category: "Mystical & Ancient", region: "The Fated Place (Sylvania)"
    },
    warriors_of_chaos: {
        name: "Warriors of Chaos",
        description: "Mortals from the far north who have sworn allegiance to the four dark gods of Chaos. Clad in rune-etched armor and wielding daemonic weapons, they seek to bring about the end of the world.",
        logo: 'factions/chaos.png',
        relations: {
            allies: ['skaven', 'chaos_dwarfs'],
            enemies: ['the_empire', 'kingdoms_of_the_dwarves_wh', 'high_elves', 'lizardmen', 'bretonnia', 'grand_cathay']
        },
        power_level: 10, category: "Interdimensional Threats", region: "The Fated Place (Chaos Wastes)"
    },
    skaven: {
        name: "The Skaven Under-Empire",
        description: "A secretive and treacherous race of rat-men who dwell in a vast subterranean empire. They are masters of wicked science and sorcery, constantly plotting to overthrow the surface world.",
        logo: 'factions/skaven.png',
        relations: {
            allies: ['warriors_of_chaos'],
            enemies: ['the_empire', 'kingdoms_of_the_dwarves_wh', 'lizardmen', 'tomb_kings', 'grand_cathay']
        },
        power_level: 8, category: "Underworld & Fringe", region: "The Fated Place (Skavenblight)"
    },
    high_elves: {
        name: "High Elves of Ulthuan",
        description: "An ancient, proud, and magically gifted race from the island-continent of Ulthuan. They are masters of magic, naval warfare, and disciplined combat, seeing themselves as the rightful guardians of the world against the forces of Chaos.",
        logo: 'factions/high_elves.png',
        relations: {
            allies: ['the_empire', 'bretonnia', 'grand_cathay'],
            enemies: ['dark_elves', 'warriors_of_chaos', 'greenskins', 'chaos_dwarfs']
        },
        power_level: 9, category: "Mystical & Ancient", region: "The Fated Place (Ulthuan)"
    },
    dark_elves: {
        name: "Dark Elves of Naggaroth",
        description: "A cruel and twisted reflection of their High Elf kin, exiled to the bleak land of Naggaroth. They are sadistic raiders and slavers who worship the god of murder, Khaine, and seek to reclaim Ulthuan.",
        logo: 'factions/dark_elves.png',
        relations: {
            allies: [],
            enemies: ['high_elves', 'the_empire', 'kingdoms_of_the_dwarves_wh', 'lizardmen', 'bretonnia']
        },
        power_level: 8, category: "Major Powers", region: "The Fated Place (Naggaroth)"
    },
    lizardmen: {
        name: "Lizardmen of Lustria",
        description: "The ancient, cold-blooded servants of the Old Ones, dwelling in the primordial jungles of Lustria. They follow a 'Great Plan' to restore order to the world, fielding armies of Saurus warriors and colossal dinosaurs.",
        logo: 'factions/lizardmen.png',
        relations: {
            allies: [],
            enemies: ['skaven', 'dark_elves', 'warriors_of_chaos', 'greenskins']
        },
        power_level: 8, category: "Mystical & Ancient", region: "The Fated Place (Lustria)"
    },
    tomb_kings: {
        name: "Tomb Kings of Khemri",
        description: "The undead rulers of Nehekhara, legions of skeletons who serve their immortal kings in an unliving, orderly empire. They despise all other forms of undeath and seek to restore their ancient kingdom to its former glory.",
        logo: 'factions/tomb_kings.png',
        relations: {
            allies: [],
            enemies: ['vampire_counts', 'greenskins', 'skaven', 'araby', 'bretonnia']
        },
        power_level: 8, category: "Mystical & Ancient", region: "The Fated Place (Land of the Dead)"
    },
    araby: {
        name: "Sultanates of Araby",
        description: "A wealthy and powerful human nation of desert riders, skilled sorcerers, and bustling coastal cities. They are proud and independent, often clashing with the crusading nations of the Old World.",
        logo: 'factions/araby.png',
        relations: {
            allies: [],
            enemies: ['the_empire', 'tomb_kings']
        },
        power_level: 7, category: "Regional Powers", region: "The Fated Place (Araby)"
    },
    bretonnia: {
        name: "Kingdom of Bretonnia",
        description: "A chivalrous and feudal kingdom of knights, peasants, and powerful enchantresses. They worship the Lady of the Lake and value honor and valor above all else.",
        logo: 'factions/bretonnia.png',
        relations: {
            allies: ['the_empire', 'high_elves'],
            enemies: ['greenskins', 'warriors_of_chaos', 'vampire_counts', 'dark_elves', 'tomb_kings']
        },
        power_level: 8, category: "Major Powers", region: "The Fated Place (Bretonnia)",
        leader: "king_louen_leoncoeur",
        notable_people: [
            { name: "King Louen Leoncoeur", role: "King", description: "The noble and chivalrous king of Bretonnia." }
        ]
    },
    chaos_dwarfs: {
        name: "Chaos Dwarfs",
        description: "Twisted and malevolent cousins of the Dwarfs, who rule a smoke-choked empire in the Darklands. They are masters of daemonic machinery and dark sorcery, enslaving countless Greenskins to fuel their infernal industry.",
        logo: 'factions/chaos_dwarfs.png',
        relations: {
            allies: ['warriors_of_chaos'],
            enemies: ['the_empire', 'kingdoms_of_the_dwarves_wh', 'greenskins', 'high_elves']
        },
        power_level: 8, category: "Major Powers", region: "The Fated Place (The Darklands)"
    },
    grand_cathay: {
        name: "Grand Cathay",
        description: "The vast and ancient Empire of the Celestial Dragon, a human nation in the far east. Protected by the Great Bastion, it is a land of harmony, powerful magic, and immense, disciplined armies.",
        logo: 'factions/cathay.png',
        relations: {
            allies: ['high_elves'],
            enemies: ['warriors_of_chaos', 'hobgoblin_khanates', 'skaven']
        },
        power_level: 9, category: "Major Powers", region: "The Fated Place (Grand Cathay)"
    },
    hobgoblin_khanates: {
        name: "Hobgoblin Khanates",
        description: "Vicious and treacherous Greenskins who dominate the Eastern Steppes. They are cruel slavers and skilled wolf-riders who serve as mercenaries and a constant threat to their neighbors.",
        logo: 'factions/hobgoblins.png',
        relations: {
            allies: [],
            enemies: ['grand_cathay', 'kingdoms_of_the_dwarves_wh', 'the_empire']
        },
        power_level: 6, category: "Regional Powers", region: "The Fated Place (Eastern Steppes)"
    }
};