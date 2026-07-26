// laws-data-militaristic.js

export const MILITARISTIC_CODES = {
    kingdom_of_gondor: {
        name: "The Law of the Stewards",
        logo: "faction_regal_empire.png", // Placeholder, will need a Gondor logo
        description: "The ancient laws of Gondor, derived from Númenórean tradition. They are the laws of a kingdom under constant threat, valuing duty, vigilance, and the authority of the Steward who rules in the King's stead.",
        supporters: ['kingdom_of_rohan', 'elves_of_lindon'],
        opponents: ['mordor', 'freelancer_underworld'], // Corsairs
        political: [
            {
                name: "The Rule of the Stewards",
                policy: "Governance Policy",
                spectrum: [
                    { name: "Feudal Fiefdoms", description: "The great lords of the fiefs (Dol Amroth, Lossarnach, etc.) hold significant autonomy." },
                    { name: "Absolute Stewardship", description: "The Steward's authority is absolute, overriding the will of the local lords." }
                ],
                current: 1,
                trend: 0,
                description: "Gondor is a feudal kingdom, but in these dark days, the Steward's authority is absolute, commanding the loyalty of all fiefs."
            }
        ],
        military: [
            {
                name: "The Call to Arms",
                policy: "Conscription Policy",
                spectrum: [
                    { name: "Levy of the Fiefs", description: "The lords of the fiefdoms are called to supply troops as needed." },
                    { name: "The Great Host", description: "All able-bodied men of Gondor are called to war, mustering the full strength of the kingdom." }
                ],
                current: 0,
                trend: 1,
                description: "The defense of the realm relies on the levies provided by its various fiefdoms, but with the growing threat, there is increasing pressure for a full muster."
            }
        ],
        social: [
            {
                name: "The Long Defeat",
                policy: "Cultural Outlook",
                spectrum: [
                    { name: "Veneration of the Past", description: "Society is deeply conservative, venerating the glories of the past and seeking to preserve what remains." },
                    { name: "Hope for Renewal", description: "A growing movement believes Gondor can rise to its former glory through bold action." }
                ],
                current: 0,
                trend: 0,
                description: "Gondorian culture is deeply rooted in its long, noble, but declining history. They seek to preserve the light of the past against the encroaching darkness."
            }
        ],
        penal: [
            {
                name: "The King's Law",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Local Justice", description: "Local lords are responsible for justice in their own lands." },
                    { name: "The Steward's Justice", description: "All serious crimes are judged by the Steward's courts in Minas Tirith." }
                ],
                current: 1,
                trend: 0,
                description: "Justice is stern and swift. While local lords handle minor disputes, all serious crimes fall under the jurisdiction of the Steward, and the law of Númenor is unforgiving."
            }
        ]
    },
    iron_legion: {
        name: "The Hammer Code",
        logo: "faction_iron_legion.png",
        description: "A rigid, unforgiving legal code where military law is the only law. Discipline, expansion, and order are the only virtues.",
        supporters: ['regal_empire'],
        opponents: ['rebel_clans', 'the_unchained', 'rakasha_clans', 'liberated_toads'],
        political: [
            {
                name: "The Council of Hammers",
                policy: "Political Parties Policy",
                spectrum: [
                    { name: "Civilian Oversight", description: "The Legion is subject to the rule of a civilian government." },
                    { name: "Military Junta", description: "The Legion is ruled by a council of its highest-ranking officers. There is no civilian government." }
                ],
                current: 1,
                trend: 0,
                description: "The Iron Legion is ruled by a military junta, the Council of Hammers. There is no civilian government."
            },
            {
                name: "The State Forge",
                policy: "Trade Unions Policy",
                spectrum: [
                    { name: "Conscripted Labor", description: "All labor is conscripted and serves the military's needs." },
                    { name: "Military Guilds", description: "Workers are organized into guilds under direct military command." }
                ],
                current: 1,
                trend: 0,
                description: "All labor is organized into guilds under direct military command. Strikes are considered mutiny."
            }
        ],
        military: [
            {
                name: "The Iron Call",
                policy: "Conscription Policy",
                spectrum: [
                    { name: "Mandatory Service", description: "All citizens are required to serve a term in the Legion." },
                    { name: "Legion for Life", description: "All citizens are considered active members of the Legion for their entire adult lives." }
                ],
                current: 0,
                trend: 1,
                description: "All citizens are required to serve in the Legion. Service is not a choice, but a duty to the state. With increasing conflicts, there is talk of expanding the requirement to all adults."
            },
            {
                name: "The Legion's Reach",
                policy: "Supervision Policy",
                spectrum: [
                    { name: "Unfettered Conquest", description: "In the pursuit of order, a Legionnaire is given broad latitude. The ends justify the means." },
                    { name: "Rules of Engagement", description: "Legionaries must adhere to a strict set of rules when engaging enemies." }
                ],
                current: 0,
                trend: 0,
                description: "In the pursuit of order, a Legionnaire is given broad latitude. The ends justify the means."
            }
        ],
        economic: [
            {
                name: "War Economy",
                policy: "Trade Law Policy",
                spectrum: [
                    { name: "Strategic Seizure", description: "Trade is irrelevant. Resources are seized as needed for the war effort." },
                    { name: "Military Monopolies", description: "All key industries are state-owned monopolies run by the military." }
                ],
                current: 1,
                trend: 0,
                description: "All key industries—mining, forging, agriculture—are state-owned monopolies run by the military to fuel its endless expansion."
            }
        ],
        penal: [
            {
                name: "The Court Martial",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Civilian Courts", description: "Crimes are tried by civilian judges." },
                    { name: "Military Justice", description: "All crimes, civilian or military, are tried by a military court martial." }
                ],
                current: 1,
                trend: 0,
                description: "All crimes, civilian or military, are tried by a military court martial. The punishments are severe and swift."
            }
        ]
    },
    koopa_troop: {
        name: "The Law of the King",
        logo: "faction_koopa_troop.png",
        description: "A feudal military system where Bowser's word is absolute law. Loyalty to the king is the only legal principle that matters.",
        supporters: ['onyx_hand', 'moonfang_pack'],
        opponents: ['mushroom_regency', 'peach_loyalists', 'dk_crew', 'yoshi_clans'],
        political: [
            {
                name: "The King's Decree",
                policy: "Political Parties Policy",
                spectrum: [
                    { name: "Absolute Monarchy", description: "Bowser's commands are law, and his will is the will of the state." },
                    { name: "Koopaling Council", description: "The Koopalings are allowed to advise Bowser, but he has the final say." }
                ],
                current: 0,
                trend: 0,
                description: "Bowser is an absolute monarch. His commands are law, and his will is the will of the state."
            }
        ],
        military: [
            {
                name: "The King's Draft",
                policy: "Conscription Policy",
                spectrum: [
                    { name: "The Royal Draft", description: "All able-bodied subjects are considered part of the Koopa Troop." },
                    { name: "Total War", description: "Every subject, from Goomba to Magikoopa, is mobilized for the war effort." }
                ],
                current: 0,
                trend: 0,
                description: "All able-bodied subjects are considered part of the Koopa Troop. When the King calls, all must answer."
            },
            {
                name: "The Koopa Way",
                policy: "Training Policy",
                spectrum: [
                    { name: "Strength in Numbers", description: "Training is minimal, focusing on overwhelming the enemy with sheer numbers." },
                    { name: "Basic Drills", description: "Troops receive basic training in marching and following orders." }
                ],
                current: 1,
                trend: 0,
                description: "Training is basic but effective, focusing on loyalty, overwhelming numbers, and following orders without question."
            }
        ],
        social: [
            {
                name: "The Minion's Lot",
                policy: "Forced Labor Policy",
                spectrum: [
                    { name: "Royal Service", description: "All subjects are expected to labor for the glory of the kingdom." },
                    { name: "Prisoner Labor", description: "Captured enemies are forced to work in the mines and forges." }
                ],
                current: 0,
                trend: 0,
                description: "All subjects are expected to labor for the glory of the kingdom, be it building fortresses or forging cannonballs. It is a duty, not a choice."
            }
        ]
    },
    peach_loyalists: {
        name: "The Loyalist Crusade",
        logo: "faction_peach_loyalists.png",
        description: "A fanatical military code that has suspended all peacetime law. The only goal is the restoration of the 'true' monarchy and the punishment of its enemies.",
        supporters: [],
        opponents: ['koopa_troop', 'mushroom_regency', 'fawfuls_furious_freaks'],
        political: [
            {
                name: "Emergency Measures",
                policy: "Political Parties Policy",
                spectrum: [
                    { name: "Martial Law", description: "The Loyalists operate under strict martial law, led by Captain Toadette." },
                    { name: "Civilian Council", description: "A council of loyal nobles advises the military leadership." }
                ],
                current: 0,
                trend: 0,
                description: "The Loyalists operate under strict martial law, led by Captain Toadette. All civilian governance is suspended until their crusade is complete."
            }
        ],
        military: [
            {
                name: "The Princess's Call",
                policy: "Conscription Policy",
                spectrum: [
                    { name: "Crusader's Draft", description: "A draft is enacted to fill the ranks for the holy crusade." },
                    { name: "Volunteer Zealots", description: "The army is composed entirely of volunteers fueled by loyalty and zeal." }
                ],
                current: 1,
                trend: -1,
                description: "The army is currently a volunteer force, fueled by zealotry. However, as the war drags on, a draft is being considered to fill the ranks."
            }
        ]
    },
    kremling_krew: {
        name: "The K. Rool Codex",
        logo: "icon_pirate.png",
        description: "A militaristic pirate code where King K. Rool's tyrannical whims are law. The entire society is geared towards plunder and the subjugation of the DK Crew.",
        supporters: [],
        opponents: ['dk_crew', 'yoshi_clans'],
        political: [
            {
                name: "The King's Command",
                policy: "Political Parties Policy",
                spectrum: [
                    { name: "Absolute Tyranny", description: "King K. Rool is a tyrant. His word is law, and his tantrums shape foreign policy." },
                    { name: "The Kremling Kouncil", description: "A council of high-ranking Kremlings offers advice, which the King usually ignores." }
                ],
                current: 0,
                trend: 0,
                description: "King K. Rool is a tyrant. His word is law, and his tantrums shape foreign policy."
            }
        ],
        military: [
            {
                name: "The Kremling Draft",
                policy: "Conscription Policy",
                spectrum: [
                    { name: "Mandatory Service", description: "All Kremlings must serve in the Krew's army." },
                    { name: "Total Mobilization", description: "Every Kremling, from Klaptrap to Krusha, is drafted for the war effort." }
                ],
                current: 1,
                trend: 0,
                description: "All Kremlings are expected to serve in the Krew's army. Refusal is not an option."
            }
        ],
        economic: [
            {
                name: "The Spoils of War",
                policy: "Trade Law Policy",
                spectrum: [
                    { name: "Banana Tariffs", description: "Heavy tariffs are placed on all goods that are not bananas." },
                    { name: "Plunder Economy", description: "The Kremling economy is based on plunder. They produce little, preferring to steal what they need." }
                ],
                current: 1,
                trend: 0,
                description: "The Kremling economy is based on plunder. They produce little, preferring to steal what they need from others, especially bananas."
            }
        ]
    }
};