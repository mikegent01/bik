// laws-data-democratic.js

export const DEMOCRATIC_CODES = {
    mushroom_regency: {
        name: "The Regency Accords",
        logo: "faction_mushroom_regency.png",
        description: "The official, though often ignored, legal code of the Mushroom Kingdom. It prioritizes stability, tradition, and the rights of citizens.",
        supporters: ['goodstyle_artisans', 'liberated_toads', 'beanbean_kingdom'],
        opponents: ['koopa_troop', 'peach_loyalists', 'toad_gang', 'fawfuls_furious_freaks'],
        political: [
            {
                name: "Regency Council",
                policy: "Political Parties Policy",
                spectrum: [
                    { name: "Emergency Powers", description: "The council rules by decree during the crisis." },
                    { name: "Representative Assembly", description: "An assembly of nobles and merchants advises the council." }
                ],
                current: 1,
                trend: -1,
                description: "The kingdom is governed by a Regency Council, advised by an assembly of nobles. However, the ongoing crisis has led to calls for the Chancellor to assume emergency powers."
            }
        ],
        economic: [
            {
                name: "The Royal Treasury",
                policy: "Trade Law Policy",
                spectrum: [
                    { name: "Free Market", description: "Trade is largely unregulated, encouraging commerce." },
                    { name: "Royal Tariffs", description: "Heavy tariffs are placed on non-allied trade to fund the war effort." }
                ],
                current: 1,
                trend: 0,
                description: "The Regency imposes royal tariffs on trade to fund its military and reconstruction efforts, a point of contention with many merchants."
            }
        ],
        social: [
            {
                name: "Citizen's Rights",
                policy: "Civil Rights Policy",
                spectrum: [
                    { name: "Universal Rights", description: "All citizens (Toads, Goombas, etc.) have equal rights under the law." },
                    { name: "Toad Primacy", description: "Toads are given preferential legal status as the kingdom's primary citizens." }
                ],
                current: 0,
                trend: 0,
                description: "The Accords grant universal rights to all peaceful citizens of the kingdom, a core tenet that stands in contrast to the supremacist views of the Toad Gang."
            }
        ]
    },
    beanbean_kingdom: {
        name: "The Chuckola Charter",
        logo: "icon_focus.png",
        description: "The legal and social framework of the Beanbean Kingdom, which places a high value on humor, art, and good-natured commerce.",
        supporters: ['mushroom_regency'],
        opponents: ['fawfuls_furious_freaks'],
        political: [
            {
                name: "The Royal Court",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Jester's Council", description: "The Queen is advised by a council of the kingdom's funniest jesters." },
                    { name: "Hereditary Monarchy", description: "The Queen and her heir hold absolute, though benevolent, power." }
                ],
                current: 1,
                trend: 0,
                description: "The kingdom is a traditional monarchy, but the Queen's court is famously filled with artists, poets, and comedians."
            }
        ],
        economic: [
            {
                name: "The Laughing Market",
                policy: "Trade Law Policy",
                spectrum: [
                    { name: "Barter & Trade", description: "Commerce is informal, based on bartering and goodwill." },
                    { name: "Tax on Bad Jokes", description: "A formal tax system, with a special levy on telling bad jokes in public." }
                ],
                current: 1,
                trend: 0,
                description: "Trade is regulated by the state, but the most unusual law is the infamous 'Tax on Bad Jokes', which funds public art projects."
            }
        ]
    },
    yoshi_clans: {
        name: "The Yoshi's Island Accords",
        logo: "icon_focus.png",
        description: "A simple, ancient set of traditions that govern the peaceful Yoshi Clans. The accords prioritize the well-being of the young, the sharing of fruit, and communal defense.",
        supporters: ['mushroom_regency', 'dk_crew'],
        opponents: ['koopa_troop'],
        social: [
            {
                name: "The Communal Nest",
                policy: "Child Rearing Policy",
                spectrum: [
                    { name: "It Takes a Village", description: "All Yoshis are responsible for the care and protection of all young." },
                    { name: "Family Nests", description: "Individual family units are primarily responsible for their own eggs." }
                ],
                current: 0,
                trend: 0,
                description: "All Yoshis share responsibility for the care and protection of the clan's eggs and young. The safety of the next generation is the highest law."
            },
            {
                name: "The Fruit-Sharing Pact",
                policy: "Resource Policy",
                spectrum: [
                    { name: "Fruit for All", description: "The bounty of the island's fruit trees is shared equally among all clan members." },
                    { name: "Hoarded Melons", description: "Individual Yoshis may claim personal stashes of their favorite fruits." }
                ],
                current: 0,
                trend: 0,
                description: "The island's fruit is considered a communal resource, to be shared by all. Hoarding is considered the greatest social taboo."
            }
        ]
    }
};
