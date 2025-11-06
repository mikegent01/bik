import { TOAD_ABILITIES } from './abilities.js';

export const AUXILIARY_PARTY = {
    dan: { name: "Dan", weapon: "Longsword & Magic", status: "Weakened & Diminished", portrait: "toads/dan.png", level: 1, xp: 0, xp_to_next: 100, log: [], abilities: [] },
    toad_lee: { name: "Toad Lee", description: "A hardy toad warrior who fights with a surprisingly large axe.", weapon: "Axe", status: "Active", portrait: "toads/toad_lee.png", level: 2, xp: 150, xp_to_next: 300, log: ["Survived the horrifying dinner and subsequent Iron Legion raid at Shadeward Mansion."], abilities: ["Reckless Attack"] },
    eager: { name: "Eager", weapon: "Whip", status: "Active", portrait: "toads/eager.png", level: 1, xp: 0, xp_to_next: 100, log: [], abilities: [] },
    ryan: { name: "Ryan", weapon: "Spellcaster", status: "Active", description: "A quiet, studious toad with a natural but untrained affinity for magic...", portrait: "toads/ryan.png", level: 2, xp: 150, xp_to_next: 300, log: ["Faced the Oracle at Shadeward Mansion and used a powerful darkness spell..."], abilities: ["Magic Missile"] },
    roger: { name: "Roger", weapon: "Gun", status: "Active", portrait: "toads/roger.png", level: 2, xp: 150, xp_to_next: 300, log: ["Stood up to the Oracle at Shadeward Mansion and dropped an Iron Legionnaire..."], abilities: ["Deadeye Shot"] },
    bones: { name: "Bones", weapon: "Grotesque", status: "Active", portrait: "toads/bones.png", level: 2, xp: 150, xp_to_next: 300, log: ["Captured and interrogated by the Iron Legion during the chaotic raid..."], abilities: ["Rage"] },
    the_mole: { name: "The Mole", weapon: "Deceit", status: "Active", description: "A toad of unknown origin... Revealed as an agent for the Iron Legion.", portrait: "toads/the_mole.png", level: 2, xp: 150, xp_to_next: 300, log: ["Revealed his allegiance by helping the Iron Legion capture Bones..."], abilities: ["Feint"] }
};

export const RUMORS = [
    {
        id: 'peach_death_fallout',
        title: "The Princess is Dead",
        time_ago: "45 Years Ago",
        description: "Princess Peach was killed, sparking a long and brutal civil war in the Mushroom Kingdom...",
        targets: ['bowser'],
        effects: { mushroom_regency: -50, regal_empire: -15, silver_flame: -15, oathbound_judges: -15 }
    },

    {
     id: 'supernatural_sovereignty_act',
     title: "The Supernatural Sovereignty Act",
     date: { day: 18, monthIndex: 6, year: 1040 },
    isEvent: true,      
     description: "In a stunning political victory, a proposal by Dan of the Liberated Toads passed the Midlands Diet with an overwhelming majority of 81-30. The 'Supernatural Sovereignty Act' officially declares organized supernatural entities, such as the Onyx Hand and Moonfang Pack, illegal within Imperial borders. The act mandates a military containment protocol, effectively ending any pretense of a truce and setting the stage for a massive, state-sanctioned conflict.",
     targets: ['dan', 'party', 'liberated_toads', 'onyx_hand', 'moonfang_pack', 'regal_empire', 'iron_legion'],
     effects: {
         regal_empire: 30,
         iron_legion: 25,
         silver_flame: 40,
         oathbound_judges: 15,
         onyx_hand: -50,
         moonfang_pack: -50,
         liberated_toads: 10,
         the_unchained: -10,
         rebel_clans: -5,
         mages_guild: -15,
         freelancer_underworld: -5
     }
    },    
    {
        id: 'greenhouse_inferno',
        title: "The Greenhouse Inferno",
        time_ago: "Today",
        isEvent: true,        
        description: "A massive explosion and fire erupted from the grounds of the haunted Raventree Manor...",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'remi', 'dan', 'eager', 'waluigi', 'green_t', 'self_reflection_oracle'],
        effects: { freelancer_underworld: 10, cosmic_jesters: 15, regal_empire: -15, iron_legion: -15, mages_guild: -20, liberated_toads: -5 }
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
        description: "In an act of supreme recklessness, Humpik disabled the Vigilance's power core with a thrown axe...",
        targets: ['humpik', 'bowser'],
        effects: { regal_empire: -40, iron_legion: -25, mages_guild: -15, ratchet_raiders: 15, cosmic_jesters: 20 }
    },
    {
        id: 'syrup_schism',
        title: "The Syrup Schism",
        time_ago: "Approx. 4 Weeks Ago",
        description: "The pirate Captain Syrup was freed from captivity under the goblin Lario...",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'waluigi'],
        effects: { ratchet_raiders: -25, freelancer_underworld: 10, crimson_fleet: -20, regal_empire: -5 }
    },
    {
        id: 'archie_acquittal',
        title: "Archie's Acquittal",
        time_ago: "Approx. 3-4 Weeks Ago",
        description: "Archie Miser was acquitted of killing a mage by an Onyx Hand tribunal...",
        targets: ['archie'],
        effects: { onyx_hand: 15, mages_guild: -20, freelancer_underworld: 5 }
    },
    {
        id: 'iron_fists_conspiracy',
        title: "Iron Fists' Imperial Contract?",
        time_ago: "Approx. 3 Weeks Ago",
        description: "A captured Iron Legion bomber revealed a shocking secret before his demise...",
        targets: ['archie', 'markop', 'humpik', 'bowser'],
        effects: { iron_fists: -5, regal_empire: -5, freelancer_underworld: 10 }
    },
    {
        id: 'koopa_loyalist_truce',
        title: "Koopa-Loyalist Truce",
        time_ago: "Approx. 2 Weeks Ago",
        description: "The Koopa Troop remnants and the Peach Loyalists have formed a fragile truce...",
        targets: ['humpik', 'bowser'],
        effects: { peach_loyalists: 10, koopa_troop: 5 }
    },
    {
        id: 'barrel_compartment_reveal',
        title: "The Barrel Secret",
        time_ago: "Approx. 1 Week Ago",
        description: "The Iron Legion revealed to Humpik that the trafficked toads are hidden in secret compartments...",
        targets: ['humpik', 'liberated_toads'],
        effects: { iron_legion: 5, liberated_toads: 10, the_unchained: 5 }
    },
    {
        id: 'lankys_disgrace_at_summit',
        title: "Lanky's Disgrace at the Summit",
        time_ago: "Yesterday",
        description: "Lanky Kong's bizarre behavior at the Democratic Summit caused a major diplomatic incident...",
        targets: ['donkey_kong', 'lanky_kong'],
        effects: { dk_crew: -25, mushroom_regency: -20, regal_empire: -15, cosmic_jesters: 10 }
    },
    {
        id: 'chaos_in_toad_town',
        title: "Chaos in Toad Town",
        time_ago: "A Few Days Ago",
        description: "A series of violent events rocked Toad Town...",
        targets: ['captain_toadette', 'embercap', 'chief_thornpaw'],
        effects: { peach_loyalists: -20, mushroom_regency: -15, onyx_hand: -10, mages_guild: -10, koopa_troop: 5 }
    },
    {
        id: 'standoff_at_the_capital',
        title: "Standoff at the Capital",
        time_ago: "Today",
        description: "The Vigilance was boarded by Regal Empire forces over the capital...",
        targets: ['party'],
        effects: { regal_empire: -30, iron_legion: -25, crimson_fleet: 5, freelancer_underworld: -10, liberated_toads: -5 }
    },
    {
        id: 'capital_diner_shadow_accord',
        title: "Capital Dinner: Shadow Accord",
        time_ago: "Today",
        description: "Mr. Wario, Waluigi, and Lady Toriel convene in the Capital...",
        targets: ['wario', 'waluigi', 'lady_toriel', 'archie', 'markop', 'remi', 'humpik', 'green_t'],
        effects: { freelancer_underworld: 15, regal_empire: -10, koopa_troop: 5, mushroom_regency: -5, diamond_city_investigators: 10 }
    },
    {
        id: 'imposter_dan_revelation',
        title: "The Two Toads",
        time_ago: "Today",
        description: "A shocking revelation from the goblin Lario claims the 'Dan' traveling with the party is an imposter...",
        targets: ['party', 'liberated_toads'],
        effects: { liberated_toads: -20, regal_empire: -10, freelancer_underworld: 10, oathbound_judges: -5 }
    },
    {
        id: 'eager_tortured',
        title: "A Toad in Chains",
        time_ago: "Today",
        description: "The toad Eager was confirmed to have been captured and brutally tortured by the Iron Legion...",
        targets: ['party', 'liberated_toads'],
        effects: { iron_legion: -30, liberated_toads: 15, the_unchained: 10, silver_flame: 5 }
    },
    {
        id: 'centaur_arsonist',
        title: "The Arsonist Ally",
        time_ago: "Today",
        description: "The centaur who accompanied the party to the capital was revealed to be a saboteur...",
        targets: ['party'],
        effects: { regal_empire: -5, iron_legion: -5, rebel_clans: -10 }
    },
    {
        id: 'grand_market_ring',
        title: "Grand Market: The Ring and the Horse",
        time_ago: "Today",
        description: "A Legion noble’s ring is swallowed by a horse...",
        targets: ['remi', 'archie', 'green_t', 'iron_legion'],
        effects: { iron_legion: -5, freelancer_underworld: 5, the_unchained: 5 }
    },
    {
        id: 'prison_break_fiasco',
        title: "Prison Break Fiasco",
        time_ago: "Today",
        description: "The party's attempt to rescue Eager was a chaotic failure...",
        targets: ['party'],
        effects: { iron_legion: -10, regal_empire: -5, freelancer_underworld: 5, liberated_toads: -5 }
    },
    {
        id: 'sewer_dragon',
        title: "A Dragon in the Sewers?",
        time_ago: "Tonight",
        description: "While seeking a cure for Dan, the party was guided by an Iron Legion spy into the capital's sewers...",
        targets: ['party'],
        effects: { iron_legion: -10, mages_guild: 5 }
    },
    {
        id: 'bowser_looting_manor',
        title: "Waluigi's 'Relocation'",
        time_ago: "Tonight",
        description: "Waluigi and Bowser have been seen hauling chests of loot from the Vigilance...",
        targets: ['party'],
        effects: { koopa_troop: -5, freelancer_underworld: 5, wario_land: 5 }
    },
    {
        id: 'oracle_of_cursed_mansion',
        title: "The Oracle of the Cursed Mansion",
        time_ago: "Tonight",
        description: "The party staying at Waluigi's newly acquired mansion has encountered its mysterious host, 'The Oracle.'...",
        targets: ['party', 'waluigi'],
        effects: { mages_guild: 5, cosmic_jesters: 10, silver_flame: -5, freelancer_underworld: 5 }
    },
    {
        id: 'waluigis_wyvern_exit',
        title: "Waluigi's Grand Exit",
        time_ago: "Tonight",
        description: "In a characteristically dramatic fashion, Waluigi and his associate Green T were seen escaping the grounds of the haunted mansion...",
        targets: ['waluigi', 'green_t'],
        effects: { cosmic_jesters: 15, freelancer_underworld: 10, regal_empire: -5, mages_guild: -5 }
    },
    {
        id: 'fall_of_bramblehaven',
        title: "The Bramblehaven Massacre",
        time_ago: "Today",
        description: "The Peach Loyalists brutally conquered the Fawful bastion of Bramblehaven...",
        targets: ['captain_toadette', 'embercap'],
        effects: { peach_loyalists: 10, mushroom_regency: -20, fawfuls_furious_freaks: -30, koopa_troop: 5, iron_legion: 5, silver_flame: -10 }
    },
    {
        id: 'shadeward_mansion_raid',
        title: "The Dinner That Broke Time",
        time_ago: "Tonight",
        description: "A group of toads seeking Archie were trapped in the Shadeward Mansion by the time-looping Oracle...",
        targets: ['liberated_toads', 'bones', 'wario'],
        effects: { liberated_toads: -30, iron_legion: -25, regal_empire: -15, freelancer_underworld: 10, mages_guild: 5 }
    },
    {
        id: 'shadow_war',
        title: "Shadow War Escalation",
        time_ago: "Ongoing",
        description: "The conflict between the Onyx Hand and Moonfang Pack is escalating...",
        targets: ['party'],
        effects: { onyx_hand: 5, moonfang_pack: 5, silver_flame: -10 }
    },
    {
        id: 'dan_training',
        title: "Dan's Training",
        time_ago: "Ongoing",
        description: "The heroic toad, Dan, is being trained in magic by the Rakasha...",
        targets: ['markop', 'dan'],
        effects: { rakasha_clans: 15, mages_guild: 5, mushroom_regency: 10, liberated_toads: 15 }
    },
    {
        id: 'cosmic_static',
        title: "Cosmic Static",
        time_ago: "Ongoing",
        description: "Archie's chaotic energies are reportedly causing 'cosmic static'...",
        targets: ['archie'],
        effects: { cosmic_jesters: 15, mages_guild: -5 }
    },
    {
        id: 'paladin_dilemma',
        title: "Paladin's Dilemma",
        time_ago: "Ongoing",
        description: "Markop's association with known criminals has not gone unnoticed by holy orders...",
        targets: ['markop'],
        effects: { silver_flame: -15, oathbound_judges: -10 }
    },
    {
        id: 'rebel_sympathies',
        title: "Rebel Sympathies",
        time_ago: "Ongoing",
        description: "The party's anti-authoritarian actions have made them popular with various rebel groups.",
        targets: ['party'],
        effects: { rebel_clans: 10, the_unchained: 5 }
    },
    {
        id: 'scrap_trail',
        title: "A Trail of Scrap",
        time_ago: "Ongoing",
        description: "The frequent destruction of magitek leaves a trail of valuable salvage...",
        targets: ['party'],
        effects: { ratchet_raiders: 10, regal_empire: -5 }
    }
];