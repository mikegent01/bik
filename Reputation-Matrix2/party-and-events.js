

export const AUXILIARY_PARTY = {
    dan: {
        name: "Dan",
        weapon: "Longsword & Magic",
        status: "Gravely injured; lost an arm.",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    toad_lee: {
        name: "Toad Lee",
        description: "A hardy toad warrior who fights with a surprisingly large axe.",
        weapon: "Axe",
        status: "Active",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    eager: {
        name: "Eager",
        weapon: "Whip",
        status: "Kidnapped (Angel's Employee)",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    ryan: {
        name: "Ryan",
        weapon: "Spellcaster",
        status: "Active",
        description: "A quiet, studious toad with a natural but untrained affinity for magic. He is intensely curious about arcane matters and spends most of his time studying.",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    roger: {
        name: "Roger",
        weapon: "Gun",
        status: "Active",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    },
    bones: {
        name: "Bones",
        weapon: "Grotesque",
        status: "Active",
        level: 1,
        xp: 0,
        xp_to_next: 100,
        log: [],
        abilities: []
    }
};

export const RUMORS = [
    {
        id: 'peach_death_fallout',
        title: "The Princess is Dead",
        time_ago: "45 Years Ago",
        description: "Princess Peach was killed, sparking a long and brutal civil war in the Mushroom Kingdom. While the exact circumstances are unclear, many blame Bowser's relentless aggression for creating the initial instability.",
        targets: ['bowser'],
        effects: {
            mushroom_regency: -50,
            regal_empire: -15,
            silver_flame: -15,
            oathbound_judges: -15
        }
    },
    {
        id: 'dragon_slaying',
        title: "Dragon Slaying",
        time_ago: "Approx. 2 Months Ago",
        description: "A month ago, the party slew a dragon, earning praise from the Iron Legion and scorn from the Mages' Guild.",
        targets: ['archie', 'markop', 'humpik', 'bowser'],
        effects: { iron_legion: 10, mages_guild: -15 }
    },
     {
        id: 'iron_fists_raid',
        title: "Iron Fists Raid",
        time_ago: "Approx. 5 Weeks Ago",
        description: "The party smashed an Iron Fists smuggling ring, earning the gang's ire.",
        targets: ['archie', 'markop'],
        effects: { iron_fists: -25, freelancer_underworld: 5, regal_empire: 5 }
    },
    {
        id: 'xo_defeat',
        title: "X.O.'s Defeat",
        time_ago: "Approx. 4 Weeks Ago",
        description: "The party, with the help of a liberated toad slave, defeated the rogue mage X.O. and secured the 'Vigilance'.",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'dan'],
        effects: { regal_empire: 5, mages_guild: 5, the_unchained: 10, mushroom_regency: 5, liberated_toads: 25 }
    },
    {
        id: 'core_crisis',
        title: "Core Crisis on the Vigilance",
        time_ago: "Approx. 4 Weeks Ago",
        description: "In an act of supreme recklessness, Humpik disabled the Vigilance's power core with a thrown axe, causing the airship to plummet. This has drawn universal condemnation from technologically-minded factions.",
        targets: ['humpik', 'bowser'],
        effects: {
            regal_empire: -40,
            iron_legion: -25,
            mages_guild: -15,
            ratchet_raiders: 15,
            cosmic_jesters: 20
        }
    },
    {
        id: 'syrup_schism',
        title: "The Syrup Schism",
        time_ago: "Approx. 4 Weeks Ago",
        description: "The pirate Captain Syrup was freed from captivity under the goblin Lario. After a confrontation, she has become a hostile third party, creating chaos within the Ratchet Raiders and putting her at odds with Waluigi and the party.",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'waluigi'],
        effects: {
            ratchet_raiders: -25,
            freelancer_underworld: 10,
            crimson_fleet: -20,
            regal_empire: -5
        }
    },
    {
        id: 'archie_acquittal',
        title: "Archie's Acquittal",
        time_ago: "Approx. 3-4 Weeks Ago",
        description: "Archie Miser was acquitted of killing a mage by an Onyx Hand tribunal, enraging the Mages' Guild.",
        targets: ['archie'],
        effects: { onyx_hand: 15, mages_guild: -20, freelancer_underworld: 5 }
    },
    {
        id: 'iron_fists_conspiracy',
        title: "Iron Fists' Imperial Contract?",
        time_ago: "Approx. 3 Weeks Ago",
        description: "A captured Iron Legion bomber revealed a shocking secret before his demise: the Iron Fists gang may be operating as a secret arm of the Regal Empire, creating chaos for the Empire to solve.",
        targets: ['archie', 'markop', 'humpik', 'bowser'],
        effects: { iron_fists: -5, regal_empire: -5, freelancer_underworld: 10 }
    },
    {
        id: 'koopa_loyalist_truce',
        title: "Koopa-Loyalist Truce",
        time_ago: "Approx. 2 Weeks Ago",
        description: "The Koopa Troop remnants and the Peach Loyalists have formed a fragile truce to investigate the Princess's death, directing their mutual ire towards Fawful.",
        targets: ['humpik', 'bowser'],
        effects: {
            peach_loyalists: 10,
            koopa_troop: 5
        }
    },
    {
        id: 'barrel_compartment_reveal',
        title: "The Barrel Secret",
        time_ago: "Approx. 1 Week Ago",
        description: "The Iron Legion revealed to Humpik that the trafficked toads are hidden in secret compartments within the ship's barrels, using a mini-mushroom as a key.",
        targets: ['humpik', 'liberated_toads'],
        effects: { iron_legion: 5, liberated_toads: 10, the_unchained: 5 }
    },
    {
        id: 'lankys_disgrace_at_summit',
        title: "Lanky's Disgrace at the Summit",
        time_ago: "Yesterday",
        description: "Lanky Kong's bizarre behavior at the Democratic Summit caused a major diplomatic incident, briefly crashed the Mushroom Kingdom's currency, and has created a deep rift within the DK Crew.",
        targets: ['donkey_kong', 'lanky_kong'],
        effects: {
            dk_crew: -25,
            mushroom_regency: -20,
            regal_empire: -15,
            cosmic_jesters: 10
        }
    },
    {
        id: 'chaos_in_toad_town',
        title: "Chaos in Toad Town: Conspiracy & Consolidation",
        time_ago: "A Few Days Ago",
        description: "A series of violent events rocked Toad Town. A conspiracy involving the mayor, the Onyx Hand, and Fawful's forces was uncovered by the Loyalist soldier Embercap. In the chaos, Iggy was captured and rescued, and the mayor was assassinated by Onyx Hand agents. This led to a strategic shift for the Loyalists: Captain Toadette now plans to seize towns and expel hostile populations to encircle the castle. After a moment of dissent, Embercap has embraced this ruthless new strategy, solidifying Toadette's command and preventing a schism within the faction.",
        targets: ['captain_toadette', 'embercap', 'chief_thornpaw'],
        effects: {
            peach_loyalists: -20,
            mushroom_regency: -15,
            onyx_hand: -10,
            mages_guild: -10,
            koopa_troop: 5
        }
    },
    {
        id: 'standoff_at_the_capital',
        title: "Standoff at the Capital",
        time_ago: "Today",
        description: "The Vigilance was boarded by Regal Empire forces over the capital. Key figures like Mr. Wario and Archie were captured. The ship's staff was briefly stolen by Captain Syrup before being sealed with an Iron Legion 'Iron Binding' and reinstalled. The full political fallout is yet to be determined.",
        targets: ['party'],
        effects: {
            regal_empire: -30,
            iron_legion: -25,
            crimson_fleet: 5,
            freelancer_underworld: -10,
            liberated_toads: -5
        }
    },
    {
        id: 'capital_diner_shadow_accord',
        title: "Capital Dinner: Shadow Accord",
        time_ago: "Today",
        description: "Mr. Wario, Waluigi, and Lady Toriel convene in the Capital. Time-freeze bartending accelerates a chase through opened doors. Green T uses a horse-ring debacle to bargain Eager's location for the real ring. Inside trading whispers and plans to influence the Regal Airship emerge.",
        targets: ['wario', 'waluigi', 'lady_toriel', 'archie', 'markop', 'remi', 'humpik', 'green_t'],
        effects: {
            freelancer_underworld: 15,
            regal_empire: -10,
            koopa_troop: 5,
            mushroom_regency: -5,
            diamond_city_investigators: 10
        }
    },
    {
        id: 'imposter_dan_revelation',
        title: "The Two Toads",
        time_ago: "Today",
        description: "A shocking revelation from the goblin Lario claims the 'Dan' traveling with the party is an imposter. The real Dan is allegedly aboard the airship, creating a massive energy beam. This has sown deep distrust within the party and among their allies.",
        targets: ['party', 'liberated_toads'],
        effects: {
            liberated_toads: -20,
            regal_empire: -10,
            freelancer_underworld: 10,
            oathbound_judges: -5
        }
    },
    {
        id: 'eager_tortured',
        title: "A Toad in Chains",
        time_ago: "Today",
        description: "The toad Eager was confirmed to have been captured and brutally tortured by the Iron Legion for information on Archie's plans. The Legion's open admission that torture is 'part of the system' has severely damaged their reputation and enraged the party.",
        targets: ['party', 'liberated_toads'],
        effects: {
            iron_legion: -30,
            liberated_toads: 15,
            the_unchained: 10,
            silver_flame: 5
        }
    },
    {
        id: 'centaur_arsonist',
        title: "The Arsonist Ally",
        time_ago: "Today",
        description: "The centaur who accompanied the party to the capital was revealed to be a saboteur, setting fire to the prison during the attempted rescue of Eager. Lario confirmed the centaur's actions, creating deep distrust of new allies.",
        targets: ['party'],
        effects: {
            regal_empire: -5,
            iron_legion: -5,
            rebel_clans: -10
        }
    },
    {
        id: 'grand_market_ring',
        title: "Grand Market: The Ring and the Horse",
        time_ago: "Today",
        description: "A Legion noble’s ring is swallowed by a horse. Cheese-laced laxative yields a messy retrieval attempt. Green T grabs the ring and offers intel. FNG’s seed delivery fails after a herbal toad swallows the goods.",
        targets: ['remi', 'archie', 'green_t', 'iron_legion'],
        effects: {
            iron_legion: -5,
            freelancer_underworld: 5,
            the_unchained: 5
        }
    },
    {
        id: 'prison_break_fiasco',
        title: "Prison Break Fiasco",
        time_ago: "Today",
        description: "The party's attempt to rescue Eager was a chaotic failure. Amidst Dan's erratic behavior and a confrontation with a mysterious mage, Eager was moved to another location. The only success was Lario's theft of a guard's logbook.",
        targets: ['party'],
        effects: {
            iron_legion: -10,
            regal_empire: -5,
            freelancer_underworld: 5,
            liberated_toads: -5
        }
    },
    {
        id: 'sewer_dragon',
        title: "A Dragon in the Sewers?",
        time_ago: "Tonight",
        description: "While seeking a cure for Dan, the party was guided by an Iron Legion spy into the capital's sewers. They were warned of a 'blue dragon' guarding the area. Markop, however, identified the creature as a Behir, suggesting the Legion is either incompetent or deliberately spreading misinformation.",
        targets: ['party'],
        effects: {
            iron_legion: -10,
            mages_guild: 5
        }
    },
    {
        id: 'bowser_looting_manor',
        title: "Waluigi's 'Relocation'",
        time_ago: "Tonight",
        description: "Waluigi and Bowser have been seen hauling chests of loot from the Vigilance, claiming they are 'relocating' items to a newly acquired mansion. Their true intentions are unknown, but it's unlikely to be for charitable purposes.",
        targets: ['party'],
        effects: { koopa_troop: -5, freelancer_underworld: 5, wario_land: 5 }
    },
    {
        id: 'fall_of_bramblehaven',
        title: "The Bramblehaven Massacre",
        time_ago: "Today",
        description: "The Peach Loyalists brutally conquered the Fawful bastion of Bramblehaven, showing no mercy to surrendering troops. Their victory was costly but secured valuable intel. The act has solidified their reputation as ruthless fanatics.",
        targets: ['captain_toadette', 'embercap'],
        effects: {
            peach_loyalists: 10,
            mushroom_regency: -20,
            fawfuls_furious_freaks: -30,
            koopa_troop: 5,
            iron_legion: 5,
            silver_flame: -10
        }
    },
    {
        id: 'shadow_war',
        title: "Shadow War Escalation",
        time_ago: "Ongoing",
        description: "The conflict between the Onyx Hand and Moonfang Pack is escalating, and the party seems to be fanning the flames.",
        targets: ['party'],
        effects: { onyx_hand: 5, moonfang_pack: 5, silver_flame: -10 }
    },
    {
        id: 'dan_training',
        title: "Dan's Training",
        time_ago: "Ongoing",
        description: "The heroic toad, Dan, is being trained in magic by the Rakasha, under Markop's supervision.",
        targets: ['markop', 'dan'],
        effects: { rakasha_clans: 15, mages_guild: 5, mushroom_regency: 10, liberated_toads: 15 }
    },
    {
        id: 'cosmic_static',
        title: "Cosmic Static",
        time_ago: "Ongoing",
        description: "Archie's chaotic energies are reportedly causing 'cosmic static' detectable by strange entities.",
        targets: ['archie'],
        effects: { cosmic_jesters: 15, mages_guild: -5 }
    },
    {
        id: 'paladin_dilemma',
        title: "Paladin's Dilemma",
        time_ago: "Ongoing",
        description: "Markop's association with known criminals has not gone unnoticed by holy orders, tarnishing his reputation.",
        targets: ['markop'],
        effects: { silver_flame: -15, oathbound_judges: -10 }
    },
    {
        id: 'rebel_sympathies',
        title: "Rebel Sympathies",
        time_ago: "Ongoing",
        description: "The party's anti-authoritarian actions have made them popular with various rebel and revolutionary groups.",
        targets: ['party'],
        effects: { rebel_clans: 10, the_unchained: 5 }
    },
    {
        id: 'scrap_trail',
        title: "A Trail of Scrap",
        time_ago: "Ongoing",
        description: "The frequent destruction of magitek leaves a trail of valuable salvage, which has not gone unnoticed by goblin crews.",
        targets: ['party'],
        effects: { ratchet_raiders: 10, regal_empire: -5 }
    }
];