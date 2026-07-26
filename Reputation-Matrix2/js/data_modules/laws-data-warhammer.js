// laws-data-warhammer.js

export const WARHAMMER_CODES = {
    the_empire: {
        name: "The Edicts of Sigmar",
        logo: "factions/empire.png",
        description: "The ancient and complex legal code of the Empire, combining feudal law, religious doctrine, and military statutes. It is a system built to preserve order in a world beset by chaos.",
        supporters: ['kingdoms_of_the_dwarves_wh'],
        opponents: ['warriors_of_chaos', 'greenskins', 'vampire_counts'],
        political: [
            {
                name: "The Electoral System",
                icon: "🏛️",
                spectrum: [
                    { name: "Feudal Allegiance", description: "The Elector Counts rule their provinces with significant autonomy." },
                    { name: "Imperial Decree", description: "The Emperor's authority is absolute, overriding the will of the Counts." }
                ],
                current: 1, trend: 0,
                description: "The Emperor is elected by the Elector Counts, but once crowned, his authority is supreme. This creates a constant tension between Imperial power and provincial rights."
            }
        ],
        penal: [
            {
                name: "The Witch Hammer",
                icon: "⚖️",
                spectrum: [
                    { name: "Trial by Peer", description: "Accusations of heresy are tried by local magistrates." },
                    { name: "The Purge", description: "Witch Hunters are granted authority to bypass local laws to hunt and execute heretics and mutants." }
                ],
                current: 1, trend: 0,
                description: "The threat of Chaos is absolute. Witch Hunters are granted broad powers to investigate and purge heresy, mutation, and dark magic, often with brutal efficiency."
            }
        ]
    },
    kingdoms_of_the_dwarves_wh: {
        name: "The Great Book of Grudges",
        logo: "factions/dwarfs.png",
        description: "The unyielding legal and moral code of the Dwarfs. Every slight, theft, or broken oath is recorded in a great book, and the Dwarfs are honor-bound to seek retribution, no matter how long it takes.",
        supporters: ['the_empire'],
        opponents: ['greenskins', 'skaven'],
        penal: [
            {
                name: "The Reckoning",
                icon: "⚖️",
                spectrum: [
                    { name: "Blood Gold", description: "A weregild (blood price) can be paid to settle a grudge between clans." },
                    { name: "War of Vengeance", description: "A sufficiently great grudge can only be settled by a full-scale war." }
                ],
                current: 1, trend: 0,
                description: "Justice is a matter of settling grudges. The severity of the punishment must match the severity of the insult. Some grudges are so ancient and so deep they can only be settled by generations of warfare."
            }
        ],
        economic: [
            {
                name: "The Guilds' Word",
                icon: "💰",
                spectrum: [
                    { name: "A Beard-Oath", description: "A Dwarf's sworn oath is his bond." },
                    { name: "Runic Contracts", description: "Major contracts are inscribed on stone tablets with runes, making them magically binding." }
                ],
                current: 1, trend: 0,
                description: "A Dwarf's word is his bond, and a written contract is as unyielding as the mountain stone. To break a deal with the Dwarfs is to earn a new entry in the Book of Grudges."
            }
        ]
    }
};

export const WARHAMMER_UNRECOGNIZED = {
    greenskins: {
        name: "Da Rulez of WAAAGH!",
        logo: "factions/greenskins.png",
        description: "The simple, brutal code of the Greenskins. There is only one law: the biggest and strongest is the boss. All disputes are settled with violence.",
        supporters: [],
        opponents: ['the_empire', 'kingdoms_of_the_dwarves_wh'],
        political: [
            {
                name: "Might Makes Right",
                icon: "⚔️",
                spectrum: [
                    { name: "Big Boss", description: "The strongest Orc rules a tribe." },
                    { name: "WARBOSS!", description: "The biggest and strongest Orc unites the tribes into a WAAAGH!" }
                ],
                current: 1, trend: 0,
                description: "The biggest Orc is the boss. To become boss, you have to beat the old boss in a fight. This leads to a stable and effective system of governance."
            }
        ]
    },
    vampire_counts: {
        name: "The Von Carstein Edicts",
        logo: "factions/vampire_counts.png",
        description: "The laws of the Vampire Counts are the whims of their immortal, aristocratic masters. Mortals are treated as chattel, and the only law that matters is the will of the ruling vampire.",
        supporters: [],
        opponents: ['the_empire', 'tomb_kings'],
        social: [
            {
                name: "The Blood Tithe",
                icon: "❤️‍🩹",
                spectrum: [
                    { name: "The Cattle's Due", description: "Mortals exist to serve and feed their masters." },
                    { name: "The Dark Kiss", description: "Favored mortals may be granted the 'gift' of vampirism, becoming part of the nobility." }
                ],
                current: 0, trend: 0,
                description: "The mortal population of Sylvania is considered little more than livestock. They exist to serve, to fight, and to feed the vampire nobility. It is a grim and terrifying existence."
            }
        ]
    }
};
