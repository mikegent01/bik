// laws-data-middle-earth.js

export const MIDDLE_EARTH_CODES = {
    kingdom_of_rohan: {
        name: "The Oaths of the Mark",
        logo: "icon_focus.png", // Placeholder
        description: "The laws of the Rohirrim are unwritten, carried in song and memory. They are the customs of a proud, fierce people, bound by oaths of loyalty and a deep love for their horses and their land.",
        supporters: ['kingdom_of_gondor'],
        opponents: ['isengard', 'mordor'],
        political: [
            {
                name: "Fealty to the King",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Lord's Council", description: "The Marshals of the Mark advise the King in a council of war." },
                    { name: "King's Absolute Will", description: "The King's word is law, and his command is absolute." }
                ],
                current: 1, trend: 0,
                description: "The King of the Mark is the absolute ruler, but a wise king listens to the counsel of his Marshals. Loyalty is sworn to the King, and to break that oath is the highest shame."
            }
        ],
        military: [
            {
                name: "The Muster of Rohan",
                policy: "Conscription Policy",
                spectrum: [
                    { name: "The Éored", description: "Each Marshal can call upon the riders of his own domain." },
                    { name: "The Full Muster", description: "When the need is dire, the King calls for a full muster, and every able-bodied man and youth must ride to war." }
                ],
                current: 0, trend: 1,
                description: "The strength of Rohan is its riders. Every man is a horseman, and when the horns of the Mark are sounded, they will ride to the defense of their land or the aid of their allies."
            }
        ],
        social: [
            {
                name: "The Law of the Horse",
                policy: "Property Law",
                spectrum: [
                    { name: "Personal Mounts", description: "A rider's horse is their most prized possession." },
                    { name: "The King's Herds", description: "All Mearas, the great horses, belong to the King alone." }
                ],
                current: 1, trend: 0,
                description: "A man's horse is an extension of himself. Horse-thieving is a crime punishable by death. The great Mearas, lords of horses, answer only to the King."
            }
        ],
        penal: [
            {
                name: "Weregild and Exile",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Blood Feud", description: "A killing must be answered with a killing, leading to endless feuds." },
                    { name: "Weregild", description: "A 'man-price' can be paid to the family of a slain person to prevent a blood feud." }
                ],
                current: 1, trend: 0,
                description: "Justice is dispensed in the King's hall. Disputes are settled by the King's word. For slayings, a weregild (man-price) is often set to prevent blood feuds. The worst punishment is exile, to be a lordless man without a home."
            }
        ]
    },
    lothlorien: {
        name: "The Law of the Golden Wood",
        logo: "icon_focus.png",
        description: "The laws of Lothlórien are ancient and subtle, woven into the very fabric of the forest. They are the will of the Lord and Lady, intended to preserve the timeless beauty of their realm from the decay of the outside world.",
        supporters: ['elves_of_lindon'],
        opponents: ['mordor', 'isengard'],
        political: [
            {
                name: "The Will of the Lord and Lady",
                policy: "Governance Policy",
                spectrum: [
                    { name: "The Unspoken Law", description: "There are no written laws; all know their duties through custom and wisdom." },
                    { name: "The Decree of Caras Galadhon", description: "The Lord and Lady's word is absolute and binding upon all who dwell in the wood." }
                ],
                current: 1, trend: 0,
                description: "There is no king in the Golden Wood. The realm is governed by the wisdom of the Lord Celeborn and the foresight of the Lady Galadriel. Their will is the law."
            }
        ],
        social: [
            {
                name: "The Gift of Passage",
                policy: "Border Policy",
                spectrum: [
                    { name: "Closed Borders", description: "No outsider may set foot in the Golden Wood." },
                    { name: "Guarded Welcome", description: "Outsiders may enter, but only blindfolded and with the permission of the Lord and Lady." }
                ],
                current: 1, trend: 0,
                description: "The borders of Lórien are closed to all but a chosen few. To enter unbidden is to invite the wrath of the Galadhrim. Those granted passage are often blindfolded until they reach the heart of the wood."
            }
        ],
        penal: [
            {
                name: "The Mirror's Judgment",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Banishment", description: "Those who bring evil into the wood are banished, never to return." },
                    { name: "The Fading", description: "For the gravest crimes, an Elf may be stripped of the protection of the wood, causing them to fade more quickly." }
                ],
                current: 0, trend: 0,
                description: "There is little crime in Lórien. Those who bring shadow or strife are judged by the Lady. The punishment is not death, but banishment from the light of the wood, a fate some consider worse."
            }
        ]
    },
    elves_of_lindon: {
        name: "The Law of the Havens",
        logo: "icon_focus.png",
        description: "The laws of the Elves of Lindon are steeped in sorrow and sea-longing. They are the customs of a people at the end of their age, focused on preserving memory and building the ships that will carry them from Middle-earth forever.",
        supporters: ['kingdom_of_gondor', 'lothlorien'],
        opponents: ['mordor'],
        political: [
            {
                name: "The Word of the Shipwright",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Council of the Eldar", description: "Círdan rules with the advice of the oldest and wisest Elves." },
                    { name: "The Master's Decree", description: "Círdan's authority, granted by the Valar, is absolute." }
                ],
                current: 0, trend: 0,
                description: "The oldest and wisest of all Elves in Middle-earth, Círdan the Shipwright, is the lord of the Havens. His word is respected and obeyed without question."
            }
        ],
        social: [
            {
                name: "The Call of the Sea",
                policy: "Social Mandate",
                spectrum: [
                    { name: "The Lingering", description: "Elves are free to remain in Middle-earth as long as they desire." },
                    { name: "The Great Sailing", description: "All efforts are bent towards building ships for the final departure to the West." }
                ],
                current: 1, trend: 0,
                description: "The chief purpose of the Havens is to build and provision the ships that carry the Elves across the sea. The sea-longing is a deep cultural ache, and the desire to depart is the ultimate social pressure."
            }
        ]
    },
    kingdoms_of_the_dwarves: {
        name: "The Law of the Mountain",
        logo: "icon_focus.png",
        description: "The laws of the Dwarves are as ancient and unyielding as the stone they carve. They are centered on clan loyalty, the sanctity of oaths, and the reverence of craftsmanship and treasure.",
        supporters: ['elves_of_lindon', 'kingdom_of_gondor'],
        opponents: ['mordor', 'isengard'],
        political: [
            {
                name: "The King Under the Mountain",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Council of Clans", description: "The King rules with the consent of the great Dwarven clan leaders." },
                    { name: "The King's Hoard", description: "The King's authority is absolute, symbolized by his control of the great treasure." }
                ],
                current: 0, trend: 0,
                description: "The King Under the Mountain is the supreme ruler, but he must respect the autonomy and honor of the great Dwarven clans."
            }
        ],
        economic: [
            {
                name: "The Price of Craft",
                policy: "Trade Law Policy",
                spectrum: [
                    { name: "Hoarding", description: "Dwarven treasures are to be hoarded, not traded with outsiders." },
                    { name: "Guild Contracts", description: "Trade is conducted through strict contracts negotiated by the powerful craft-guilds." }
                ],
                current: 1, trend: 0,
                description: "Dwarven craft is the finest in the world, and they do not part with it lightly. All trade is governed by strict, legally binding contracts. To break a deal with a Dwarf is to earn an enemy for life."
            }
        ],
        penal: [
            {
                name: "The Book of Grudges",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Blood Feud", description: "An injury to one Dwarf is an injury to the clan, often leading to multi-generational feuds." },
                    { name: "King's Justice", description: "The King has the authority to settle disputes and set a price for damages." }
                ],
                current: 0, trend: 1,
                description: "Justice is a matter of honor and retribution. A slight against a Dwarf or his clan is recorded in a great book and must be avenged. The King can mediate, but some grudges run too deep for any payment but blood."
            }
        ]
    },
    isengard: {
        name: "The Mind of Metal and Wheels",
        logo: "icon_focus.png",
        description: "The 'law' of Isengard is the singular, treacherous will of Saruman the White. It is a system built on industry, espionage, and the breeding of a perfect army to dominate the lands of Men.",
        supporters: ['mordor'],
        opponents: ['kingdom_of_rohan', 'lothlorien'],
        political: [
            {
                name: "The Voice of Saruman",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Absolute Dictatorship", description: "Saruman's word is law. His will is carried out by his Uruk-hai and human servants." },
                    { name: "The Council of the Hand", description: "Saruman's chief lieutenants are given some autonomy to carry out his grand designs." }
                ],
                current: 0, trend: 0,
                description: "Saruman is the absolute dictator of Isengard. His powerful voice can sway the minds of the weak, and his network of spies ensures that any dissent is crushed before it can begin."
            }
        ],
        military: [
            {
                name: "The Forges of War",
                policy: "Industrial Policy",
                spectrum: [
                    { name: "Total Industrialization", description: "The land is scoured for resources to fuel the forges of war. Nature is an obstacle to be overcome." },
                    { name: "Strategic Reserves", description: "Resources are managed to ensure long-term production." }
                ],
                current: 0, trend: 0,
                description: "The entire society of Isengard is geared for war. The ancient trees are felled to fuel the deep forges where weapons are made and the Uruk-hai are bred. There is no other purpose."
            }
        ]
    },
    mordor: {
        name: "The Law of the Lidless Eye",
        logo: "icon_focus.png",
        description: "There is no law in Mordor but the will of Sauron. It is a land of absolute terror, where power is the only right and cruelty is the only virtue. All beings are slaves to the Dark Lord's ambition.",
        supporters: ['isengard'],
        opponents: ['kingdom_of_gondor', 'kingdom_of_rohan', 'lothlorien'],
        political: [
            {
                name: "The Will of Sauron",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Absolute Tyranny", description: "Sauron's will is absolute. His commands are carried down through a hierarchy of terror, from the Nazgûl to the lowliest Orc." },
                    { name: "The Shadow's Favor", description: "Favored lieutenants are given command over legions, but their position is always precarious." }
                ],
                current: 0, trend: 0,
                description: "Sauron's will is absolute. The Lidless Eye sees all, and its gaze is one of pure malice and control. All creatures in Mordor are tools for his purpose."
            }
        ],
        military: [
            {
                name: "The Endless Host",
                policy: "Conscription Policy",
                spectrum: [
                    { name: "Total Mobilization", description: "Every creature in Mordor, from Orcs to Trolls, is bred and trained for the Great War." },
                    { name: "Breeding Pits", description: "New legions of Orcs are constantly being bred in the dark pits beneath the earth." }
                ],
                current: 0, trend: 0,
                description: "The entire land of Mordor is a war camp. Legions of Orcs are constantly being trained and equipped for the final war against the Free Peoples. Life is cheap, and soldiers are expendable."
            }
        ],
        penal: [
            {
                name: "The Law of the Lash",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Fear and Pain", description: "Discipline is maintained through torture, fear, and the constant threat of death." },
                    { name: "Survival of the Cruelest", description: "Orcs are encouraged to fight amongst themselves to weed out the weak." }
                ],
                current: 0, trend: 0,
                description: "There is no justice in Mordor, only power. The weak are devoured by the strong. Failure is punished by unimaginable torment. The only law is to obey your master, and to be more cruel than your rivals."
            }
        ]
    }
};