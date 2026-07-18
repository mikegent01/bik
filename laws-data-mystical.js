
// laws-data-mystical.js

export const MYSTICAL_CODES = {
    onyx_hand: {
        name: "The Eternal Grasp",
        logo: "faction_onyx_hand.png",
        description: "An ancient, labyrinthine set of laws and traditions governing vampire society. It prioritizes secrecy, hierarchy, and the long-term manipulation of mortal affairs.",
        supporters: ['koopa_troop'],
        opponents: ['silver_flame', 'moonfang_pack', 'regal_empire'],
        political: [
            {
                name: "The Masquerade",
                policy: "Secrecy Policy",
                spectrum: [
                    { name: "Absolute Secrecy", description: "Revealing the true nature of vampirism to a mortal is a capital offense." },
                    { name: "Veiled Threats", description: "Vampires may hint at their power to control and intimidate mortals." }
                ],
                current: 0,
                trend: 0,
                description: "The Masquerade is the highest law. The existence of vampires must remain a secret from mortal society. A breach is punishable by final death."
            }
        ],
        social: [
            {
                name: "The Blood Bond",
                policy: "Social Hierarchy",
                spectrum: [
                    { name: "Progenitor's Will", description: "A vampire is eternally bound to the will of their sire." },
                    { name: "Coven Allegiance", description: "Loyalty is to the coven as a whole, not just one's sire." }
                ],
                current: 0,
                trend: 0,
                description: "Vampiric society is a strict hierarchy. A vampire owes absolute allegiance to their sire, and their sire to their own. All chains of command lead to the Shadow Patriarch."
            }
        ]
    },
    mages_guild: {
        name: "The Autumnwood Accords",
        logo: "faction_mages_guild.png",
        description: "A complex body of laws governing the use of magic. The Accords are fiercely debated between the traditionalist Conservators and the radical Innovators.",
        supporters: ['goodstyle_artisans'],
        opponents: ['regal_empire', 'silver_flame', 'cosmic_jesters'],
        penal: [
            {
                name: "The Paradox Trial",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Sanction and Seal", description: "Rogue mages have their magic sealed away as punishment." },
                    { name: "Trial by Arcane Duel", description: "Guilt is determined by a formal, magically-regulated duel." }
                ],
                current: 0,
                trend: 0,
                description: "Mages who break the Accords are tried by a council of their peers. Punishments range from having their magic sealed to being cast into a pocket dimension."
            }
        ],
        political: [
            {
                name: "The Unsanctioned Arts",
                policy: "Magical Regulation",
                spectrum: [
                    { name: "Forbidden Schools", description: "Necromancy, blood magic, and other 'dark arts' are absolutely forbidden." },
                    { name: "Restricted Research", description: "Dangerous magic can be studied, but only with the council's express permission." }
                ],
                current: 1,
                trend: -1,
                description: "Certain schools of magic, like necromancy, are forbidden. The Innovator faction constantly pushes the boundaries of what is considered 'acceptable' research, causing friction with the Conservators."
            }
        ]
    },
    silver_flame: {
        name: "The Edicts of the Flame",
        logo: "faction_silver_flame.png",
        description: "A zealous, divine legal code with one core tenet: all that is unnatural is an abomination and must be purged with holy fire. There is no room for nuance.",
        supporters: [],
        opponents: ['onyx_hand', 'moonfang_pack', 'mages_guild', 'toad_cult', 'cosmic_jesters'],
        penal: [
            {
                name: "The Pyre of Judgment",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "Trial and Purge", description: "The accused are given a chance to confess and repent before being purged." },
                    { name: "Purge on Sight", description: "Known monsters and heretics are to be purged without trial or hesitation." }
                ],
                current: 1,
                trend: 0,
                description: "There is no trial for the unnatural. Vampires, werewolves, and rogue mages are to be purged on sight. Justice is delivered by the sword and the flame."
            }
        ]
    },
    moonfang_pack: {
        name: "The Primal Law",
        logo: "faction_moonfang.png",
        description: "An ancient, unwritten code based on strength, territory, and the cycle of the moon. The pack's alpha is the ultimate authority, and their rule is absolute until challenged.",
        supporters: ['rakasha_clans'],
        opponents: ['onyx_hand', 'silver_flame', 'iron_legion'],
        social: [
            {
                name: "The Alpha's Word",
                policy: "Leadership Policy",
                spectrum: [
                    { name: "Might is Right", description: "The strongest werewolf is the Alpha. Leadership can be challenged at any time." },
                    { name: "Council of Elders", description: "The Alpha is advised by a council of the pack's oldest and wisest members." }
                ],
                current: 0,
                trend: 0,
                description: "The strongest werewolf is the Alpha. Their word is law. Any member of the pack can challenge the Alpha for leadership during the full moon."
            }
        ]
    },
    rakasha_clans: {
        name: "The Law of the Wild",
        logo: "faction_rakasha.png",
        description: "A set of traditions centered on honor, respect for nature, and the balance between the physical and spiritual worlds.",
        supporters: ['moonfang_pack', 'liberated_toads'],
        opponents: ['regal_empire', 'iron_legion', 'ratchet_raiders'],
        social: [
            {
                name: "The Debt of Life",
                policy: "Social Contract",
                spectrum: [
                    { name: "Life for a Life", description: "If a Rakasha's life is saved by an outsider, they owe that person a debt." },
                    { name: "Clan Before All", description: "Debts to outsiders are secondary to the needs of the clan." }
                ],
                current: 0,
                trend: 0,
                description: "A life-debt is a sacred bond. If an outsider saves the life of a Rakasha, the clan is honor-bound to repay that debt, no matter the cost."
            }
        ]
    },
    cosmic_jesters: {
        name: "Codex: The Punchline",
        logo: "faction_jester.png",
        description: "There are no laws, only suggestions, and they change hourly. The only consistent rule is that whatever is funniest and most chaotic is the 'correct' course of action.",
        supporters: ['ratchet_raiders'],
        opponents: ['oathbound_judges', 'regal_empire', 'iron_legion', 'mages_guild'],
        political: [
            {
                name: "The Rule of Random",
                icon: "🏛️",
                description: "All decisions are made by rolling dice with pictures on them instead of numbers. The outcome is considered the will of the Cosmic Jester."
            }
        ],
        social: [
             {
                name: "The Law of WAH!",
                icon: "🗣️",
                description: "Greetings, farewells, and declarations of war must all be accompanied by a triumphant 'WAH!'. Failure to do so is not a crime, but it is deeply unfashionable. Style is the only true social contract."
            }
        ],
        economic: [
            {
                name: "The Currency of Confusion",
                icon: "💰",
                description: "Official currency is not recognized. All trade is conducted via barter, ideally where both parties are unsure what they actually traded. Mismatched socks are a highly stable commodity."
            }
        ],
        penal: [
             {
                name: "Trial by Pratfall",
                icon: "⚖️",
                description: "There are no crimes, only bad performances. 'Criminals' are sentenced to perform a public, embarrassing pratfall. The severity is determined by the laughter of the crowd."
            }
        ]
    }
};
