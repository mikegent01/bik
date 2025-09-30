// laws-data-underworld.js

export const UNDERWORLD_CODES = {
    freelancer_underworld: {
        name: "The Freelancer's Code",
        logo: "faction_freelancer.png",
        description: "A loose, unwritten set of rules based on profit and reputation. There is no central authority, only a shared understanding that breaking the code is bad for business.",
        supporters: ['crimson_fleet', 'wario_land', 'ratchet_raiders'],
        opponents: ['oathbound_judges', 'silver_flame', 'regal_empire'],
        economic: [
            {
                name: "The Contract is King",
                policy: "Contract Law",
                spectrum: [
                    { name: "A Handshake Deal", description: "A freelancer's word is their bond." },
                    { name: "Ironclad Contracts", description: "Deals are enforced by the Syndicates, with brutal penalties for failure." }
                ],
                current: 1,
                trend: 0,
                description: "While independent operators may work on a handshake, the major Syndicates enforce their contracts with ruthless efficiency. Failure to deliver is not an option."
            }
        ],
        penal: [
            {
                name: "Street Justice",
                policy: "Penal System Policy",
                spectrum: [
                    { name: "A Price on Your Head", description: "Disputes are settled by putting a bounty on the offender's head." },
                    { name: "Syndicate Tribunal", description: "The ruling crime families hold a 'tribunal' to pass judgment." }
                ],
                current: 0,
                trend: 0,
                description: "There are no formal courts. Justice is a matter of reputation and force. Disputes are often settled with a bounty, and the streets serve as judge, jury, and executioner."
            }
        ]
    },
    toad_gang: {
        name: "The Law of the Cap",
        logo: "faction_toad_gang.png",
        description: "A brutal street code where the strongest leader's word is law. It is based on intimidation, protection rackets, and a fierce, supremacist ideology.",
        supporters: ['toad_cult'],
        opponents: ['mushroom_regency', 'liberated_toads', 'peach_loyalists'],
        political: [
            {
                name: "Might Makes Right",
                policy: "Leadership Policy",
                spectrum: [
                    { name: "Gang Rule", description: "The toughest toad with the most followers is the boss." },
                    { name: "The Inner Circle", description: "A council of the gang's most powerful lieutenants makes decisions." }
                ],
                current: 0,
                trend: 0,
                description: "Leadership is simple: the toughest toad is the boss. Challenges for leadership are common and always violent."
            }
        ],
        economic: [
            {
                name: "The Protection Racket",
                policy: "Economic Policy",
                spectrum: [
                    { name: "Tribute", description: "Businesses pay 'tribute' for protection. It's extortion, plain and simple." },
                    { name: "Smuggling Monopoly", description: "The gang seeks to control all illegal smuggling in their territory." }
                ],
                current: 0,
                trend: 0,
                description: "The gang's entire economy is based on extortion. Businesses in their territory pay for 'protection' from the gang itself."
            }
        ]
    },
    ratchet_raiders: {
        name: "The Raider's Wrench",
        logo: "faction_ratchet_raiders.png",
        description: "A chaotic set of customs based on salvage rights and mechanical prowess. The best mechanic gets the best scrap, and disputes are often settled with a deadly race or a duel between ramshackle war machines.",
        supporters: ['cosmic_jesters', 'wario_land'],
        opponents: ['goodstyle_artisans', 'regal_empire'],
        social: [
            {
                name: "Salvage Rights",
                policy: "Property Law",
                spectrum: [
                    { name: "Finders Keepers", description: "Whoever gets to the salvage first, claims it." },
                    { name: "Trial by Gadget", description: "Disputes over valuable salvage are settled by a duel of inventions." }
                ],
                current: 1,
                trend: 0,
                description: "The primary law is 'dibs'. However, if two raiders claim the same piece of valuable scrap, ownership is decided by a duel between their custom-built gadgets or vehicles."
            }
        ]
    },
    crimson_fleet: {
        name: "The Pirate's Code",
        logo: "faction_crimson_fleet.png",
        description: "A loose code of conduct that governs the various pirate crews. It primarily deals with the division of treasure and the rules of engagement.",
        supporters: ['freelancer_underworld'],
        opponents: ['regal_empire', 'mushroom_regency'],
        economic: [
            {
                name: "The Share",
                policy: "Loot Distribution",
                spectrum: [
                    { name: "Captain's Privilege", description: "The captain takes the largest share, distributing the rest as they see fit." },
                    { name: "Democratic Plunder", description: "Every crew member gets an equal vote on how to divide the spoils." }
                ],
                current: 0,
                trend: 0,
                description: "The captain gets the largest share of any plunder. The rest is divided among the crew based on rank and performance during the raid. Mutinies are common if the division is seen as unfair."
            }
        ]
    }
};
