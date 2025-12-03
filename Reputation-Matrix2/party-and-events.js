


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
    id: 'iron_mandate_passage',
    title: "The Iron Mandate Passes",
    date: { day: 21, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'lord_chancellor_stonehand',
    arc: 'supernatural_sovereignty',
    arcPosition: 'climax',
    description: "The Midlands Diet passed the Iron Mandate (28-8-3), granting the Iron Legion emergency powers to enforce the Supernatural Sovereignty Act. This includes warrantless searches and summary detention. Speaker Rivers resigned in protest, while the Mages' Guild withdrew support. Legion patrols deployed immediately.",
    targets: ['regal_empire', 'iron_legion', 'mages_guild', 'moonfang_pack', 'onyx_hand'],
    effects: {
        regal_empire: 40,
        iron_legion: 40,
        silver_flame: 20,
        mages_guild: -25,
        moonfang_pack: -40,
        onyx_hand: -40,
        heartland_alliance: -20
    },
    cycle_impact: { score: 3.0, label: "Martial Law", type: "political" }
},    
    {
        id: "shard_stalker_incident",
        title: "The Shard Stalker & The Spy",
        date: { "day": 21, "monthIndex": 6, "year": 1040 },
        isEvent: true,
        instigator: "archie",
        arc: "raventree_manor",
        arcPosition: "climax",
        description: "The party breached the Solarium to destroy the Mirror Monster. In the chaos, Humpik was pulled into the Mirror Dimension where he fought a doppleganger and received aid from an Iron Legion Spy, who revealed the impending Supernatural Sovereignty Act. Archie punched a mirror in a blood rage, and the group retreated to a Ruined Hall to plan their next move against the spies.",
        targets: ["archie", "humpik", "bowser", "green_t", "dan", "self_reflection_oracle"],
        effects: {
            liberated_toads: 5,
            iron_legion: -10,
            mages_guild: 5,
            cosmic_jesters: 10
        },
        cycle_impact: { "score": 2.0, "label": "Dimensional Breach", "type": "magic" }
    },    
    {
        id: 'assassination_attempt_foiled',
        title: "War in the Jungle",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'donkey_kong',
        arc: 'kong_kremling_cold_war',
        arcPosition: 'climax',
        description: "Donkey Kong successfully intercepted the Kremling assassin 'Galypso' at Funky's Surf Shack, saving his brother's life. The failed hit has shattered the fragile peace of the islands. The DK Crew has mobilized for all-out war against King K. Rool's Krew.",
        targets: ['donkey_kong', 'funky_kong', 'king_k_rool', 'dk_crew', 'kremling_krew'],
        effects: {
            dk_crew: 50,
            kremling_krew: -50,
            freelancer_underworld: 20,
            regal_empire: -10
        },
        cycle_impact: { score: 2.5, label: "Open Warfare", type: "military" }
    },
    {
        id: "spider_grove_ambush",
        title: "The Spider Grove Ambush",
        date: { "day": 20, "monthIndex": 6, "year": 1040 },
        isEvent: true,
        instigator: "self_reflection_oracle",
        arc: "raventree_manor",
        arcPosition: "climax",
        description: "Markop, Remi (FNG), and a squad of Toads were led by the Oracle into a silent, web-choked grove within Raventree Manor to rescue Eager. They discovered Waluigi attempting to 'help' by using chaotic magic, and subsequently battled a massive Arachnid Matriarch and her brood. The skirmish saw Remi bonding with a new mechanical companion, 'Mossy', and Waluigi accidentally proving useful with fire magic.",
        targets: ["markop", "remi", "waluigi", "eager", "self_reflection_oracle"],
        effects: {
            liberated_toads: 10,
            cosmic_jesters: 10,
            mages_guild: -5,
            freelancer_underworld: 5
        },
        cycle_impact: { "score": 1.5, "label": "Monster Hunt", "type": "combat" }
    },    
    {
        id: 'mirror_door_breach',
        title: "The Mirror Door Breach",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'self_reflection_oracle',
        arc: 'raventree_manor',
        arcPosition: 'climax',
        description: "Led by the Oracle to a hidden upper house within Raventree Manor, the party narrowly escaped a mirror monster by slamming a mystical door. The Oracle warned that 'once we go up, there's no coming back', signaling a point of no return in the investigation of the manor's curse.",
        targets: ['party', 'self_reflection_oracle', 'archie', 'humpik'],
        effects: {
            mages_guild: 5, // Investigating anomalies
            cosmic_jesters: 10, // High weirdness
            freelancer_underworld: 5
        },
        cycle_impact: { score: 2.0, label: "Dimensional Threshold", type: "magic" }
    },
    {
        id: 'mages_guild_warrant',
        title: "The Guild's Warrant & The Legion's Anthem",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'archie',
        arc: 'raventree_manor',
        arcPosition: 'climax',
        description: "Following Archie Miser's public confession, the Mages' Guild has formally dispatched agents to arrest him for multiple violations of the Autumnwood Accords. Concurrently, an Iron Legion contingent at Raventree Manor performed a brutal, mocking anthem, publicly humiliating the Liberated Toads and their allies. This escalation from both factions has cornered the party, forcing them into an alliance with a rogue mage against the manor's supernatural horrors.",
        targets: ['archie', 'party', 'liberated_toads', 'mages_guild', 'iron_legion'],
        effects: {
            mages_guild: -25,
            iron_legion: -25,
            liberated_toads: -10,
            freelancer_underworld: 10,
            cosmic_jesters: 5
        },
        personal_impact: {
            archie: { mages_guild: -50, iron_legion: -50 }, // Primary target
            humpik: { mages_guild: -10, cosmic_jesters: 15 }, // Kept dark crystals against advice
            bowser: { iron_legion: -30 } // Recognized as a threat
        },
        cycle_impact: { score: 1.5, label: "Political Escalation", type: "political" }
    },
    {
        id: 'greenhouse_inferno_confession',
        title: "Archie's Confession",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: false,
        instigator: 'archie',
        arc: 'raventree_manor',
        arcPosition: 'climax',
        description: "Archie Miser has publicly admitted to casting a high-level Fireball spell to destroy the Raventree Greenhouse. While he claims it was to save his friends from Rust Monsters, the admission of such reckless magic has infuriated the Mages' Guild and delighted chaos-worshippers.",
        targets: ['archie'],
        effects: {
            mages_guild: -30, // Unsanctioned magic
            green_thumb_guardians: -20, // Destroying a greenhouse
            regal_empire: -10, // Reckless endangerment
            cosmic_jesters: 25, // Hilarious destruction
            liberated_toads: 10, // Saved friends
            ratchet_raiders: 10 // Scrap created
        },
        cycle_impact: { score: 0.5, label: "Public Recklessness", type: "magic" }
    },
    {
        id: 'wraith_conflagration',
        title: "Conflagration in the Manor",
        date: { day: 19, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'markop', // Markop led the Cohort defense
        arc: 'raventree_manor',
        arcPosition: 'climax',
        description: "A chaotic battle erupted within Raventree Manor when First Cohort toads, led by Markop, were ambushed by two powerful Arcane Wraiths. The fight was a desperate struggle involving divine magic, summoned giants, and volatile alchemy. Despite the death of a Cohort member, the combined forces managed to destroy one wraith and repel the other, but the event has left the Cohort shaken and questioning the true nature of the threat they are trying to contain.",
        targets: ['markop', 'liberated_toads', 'remi'],
        effects: {
            liberated_toads: -15, 
            silver_flame: 10, 
            mages_guild: 5, 
            cosmic_jesters: 5
        },
        cycle_impact: { score: 2.0, label: "Supernatural Incursion", type: "magic" }
    },
    {
        id: 'peach_death_fallout',
        title: "The Princess is Dead",
        date: { day: 1, monthIndex: 0, year: 995 },
        time_ago: "45 Years Ago",
        arc: 'mushroom_civil_war',
        arcPosition: 'opening',
        description: "Princess Peach was killed, sparking a long and brutal civil war in the Mushroom Kingdom...",
        targets: ['bowser'],
        effects: { mushroom_regency: -50, regal_empire: -15, silver_flame: -15, oathbound_judges: -15 },
        cycle_impact: { score: 2, label: "Regime Collapse", type: "political" }
    },
    {
        id: 'archie_third_eye_escape',
        title: "The Third Eye Escape",
        date: { day: 19, monthIndex: 6, year: 1040 },
        isEvent: true, 
        instigator: 'archie',
        arc: 'raventree_manor',
        arcPosition: 'falling',
        description: "In a stunning betrayal, the Liberated Toad 'Jerry' was revealed to be an Iron Legion spy who orchestrated Archie Miser's escape from Cohort custody, only to lead him into a Legion trap. Archie escaped again, navigating a surreal journey through a Rakasha relay, a Mindflayer colony where he discovered the mutilated remains of X.O., and a final, chaotic return to a ghost-infested Raventree Manor. The event revealed the Legion's deep infiltration and the manor's connection to otherworldly dimensions.",
        targets: ['archie', 'liberated_toads', 'iron_legion', 'rakasha_clans', 'mages_guild'],
        effects: {
            liberated_toads: -25,
            iron_legion: -20,
            freelancer_underworld: 15,
            rakasha_clans: 10,
            mages_guild: -10, 
            cosmic_jesters: 10
        },
        cycle_impact: { score: 1.5, label: "Dimensional Breach", type: "magic" }
    },
    {
        id: 'supernatural_sovereignty_act',
        title: "The Supernatural Sovereignty Act",
        isEvent: true,
        instigator: 'dan', // Dan proposed it
        date: { day: 18, monthIndex: 6, year: 1040 },
        arc: 'supernatural_sovereignty',
        arcPosition: 'climax',
        description: "In a stunning display of political power, the Regal Empire pushed its 'Supernatural Sovereignty Act' through the Midlands Diet with an overwhelming majority of 81-30. The act, proposed by an Imperial delegate, declares organized supernatural entities like the Onyx Hand and Moonfang Pack illegal within Imperial borders and mandates a military containment protocol, effectively ending any pretense of a truce.",
        targets: ['dan', 'party', 'liberated_toads', 'onyx_hand', 'moonfang_pack', 'regal_empire', 'iron_legion'],
        effects: {
            regal_empire: 30,
            iron_legion: 25,
            silver_flame: 40,
            oathbound_judges: 15,
            onyx_hand: -50,
            moonfang_pack: -50,
            liberated_toads: -5,
            the_unchained: -10,
            rebel_clans: -5,
            mages_guild: -15,
            freelancer_underworld: -5
        },
        cycle_impact: { score: 0.8, label: "Legislative Crackdown", type: "political" }
    },
    {
        id: 'the_kong_bug',
        title: "The Kong Bug",
        date: { day: 18, monthIndex: 6, year: 1040 },
        arc: 'kong_kremling_cold_war',
        arcPosition: 'opening',
        description: "Donkey Kong's Director of Intelligence, Funky Kong, has discovered a sophisticated listening device of Kremling origin in DK's private office. A tense phone call between DK and King K. Rool revealed a deeper conspiracy: a Kremling agent named Galypso is not only responsible for the bug but has been ordered by K. Rool to assassinate Funky Kong to cover their tracks. The 'peace' between the two factions is a sham.",
        targets: ['donkey_kong', 'king_k_rool', 'funky_kong', 'dk_crew', 'kremling_krew'],
        effects: {
            dk_crew: -40,
            kremling_krew: -40,
            freelancer_underworld: 15,
            regal_empire: -10,
            mushroom_regency: -5
        },
        cycle_impact: { score: 1.2, label: "Espionage Scandal", type: "political" }
    },
      {
        id: 'greenhouse_inferno',
        title: "The Greenhouse Inferno",
        time_ago: "Today",
        date: { day: 17, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'archie', // Archie cast the fireball
        arc: 'raventree_manor',
        arcPosition: 'rising',
        description: "A chaotic series of events at Raventree Manor culminated in a devastating battle within its magical greenhouse. After Remi shot down a wyvern carrying Waluigi and Green T, the party was trapped inside by the Oracle and ambushed by rust monsters. The fight escalated into an inferno, climaxing with Archie unleashing a massive fireball that destroyed the greenhouse. The aftermath saw Dan's attempt to heal a critically wounded Eager backfire, leading to Archie's surrender to the newly-arrived 'Pond Patrol'. The incident concluded with Green T being pulled into a mirror and a new, terrifying supernatural threat emerging from it, plunging the manor into a full-blown containment crisis.",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'remi', 'dan', 'eager', 'waluigi', 'green_t', 'self_reflection_oracle'],
        effects: { freelancer_underworld: 10, cosmic_jesters: 15, regal_empire: -15, iron_legion: -15, mages_guild: -20, liberated_toads: -5 },
        cycle_impact: { score: 2.5, label: "Arcane Catastrophe", type: "magic" }
    },
    {
        id: 'dragon_slaying',
        title: "Dragon Slaying",
        time_ago: "Approx. 2 Months Ago",
        date: { year: 1040, monthIndex: 4, day: 20 },
        instigator: 'humpik',
        arc: 'vigilance_saga', // Retroactively assigned
        arcPosition: 'opening',
        description: "A month ago, the party slew a dragon, earning praise from the Iron Legion and scorn from the Mages' Guild.",
        targets: ['archie', 'markop', 'humpik', 'bowser'],
        effects: { iron_legion: 10, mages_guild: -15 },
        cycle_impact: { score: -0.5, label: "Beast Culling", type: "military" }
    },
    {
        id: 'iron_fists_raid',
        title: "Iron Fists Raid",
        time_ago: "Approx. 5 Weeks Ago",
        date: { year: 1040, monthIndex: 5, day: 15 },
        instigator: 'archie',
        arc: 'capital_intrigue', // Retroactively assigned
        arcPosition: 'opening',
        description: "The party smashed an Iron Fists smuggling ring, earning the gang's ire.",
        targets: ['archie', 'markop'],
        effects: { iron_fists: -25, freelancer_underworld: 5, regal_empire: 5 },
        cycle_impact: { score: -0.2, label: "Crime Suppression", type: "military" }
    },
    {
        id: 'xo_defeat',
        title: "X.O.'s Defeat",
        time_ago: "Approx. 4 Weeks Ago",
        date: { year: 1040, monthIndex: 5, day: 22 },
        instigator: 'dan', // Dan dealt the final blow
        arc: 'vigilance_saga',
        arcPosition: 'climax',
        description: "The party, with the help of a liberated toad slave, defeated the rogue mage X.O. and secured the 'Vigilance'.",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'dan'],
        effects: { regal_empire: 5, mages_guild: 5, the_unchained: 10, mushroom_regency: 5, liberated_toads: 25 },
        cycle_impact: { score: -0.8, label: "Rogue Mage Neutralized", type: "magic" }
    },
    {
        id: 'core_crisis',
        title: "Core Crisis on the Vigilance",
        time_ago: "Approx. 4 Weeks Ago",
        date: { year: 1040, monthIndex: 5, day: 22 },
        instigator: 'humpik',
        arc: 'vigilance_saga',
        arcPosition: 'falling',
        description: "In an act of supreme recklessness, Humpik disabled the Vigilance's power core with an thrown axe...",
        targets: ['humpik', 'bowser'],
        effects: { regal_empire: -40, iron_legion: -25, mages_guild: -15, ratchet_raiders: 15, cosmic_jesters: 20 },
        cycle_impact: { score: 1.0, label: "Magitek Failure", type: "tech" }
    },
    {
        id: 'syrup_schism',
        title: "The Syrup Schism",
        time_ago: "Approx. 4 Weeks Ago",
        date: { year: 1040, monthIndex: 5, day: 22 },
        arc: 'vigilance_saga',
        arcPosition: 'falling',
        description: "The pirate Captain Syrup was freed from captivity under the goblin Lario...",
        targets: ['archie', 'markop', 'humpik', 'bowser', 'waluigi'],
        effects: { ratchet_raiders: -25, freelancer_underworld: 10, crimson_fleet: -20, regal_empire: -5 },
        cycle_impact: { score: 0.5, label: "Underworld Instability", type: "economic" }
    },
    {
        id: 'archie_acquittal',
        title: "Archie's Acquittal",
        time_ago: "Approx. 3-4 Weeks Ago",
        date: { year: 1040, monthIndex: 5, day: 28 },
        instigator: 'archie',
        arc: 'capital_intrigue',
        arcPosition: 'rising',
        description: "Archie Miser was acquitted of killing a mage by an Onyx Hand tribunal...",
        targets: ['archie'],
        effects: { onyx_hand: 15, mages_guild: -20, freelancer_underworld: 5 },
        cycle_impact: { score: 0.4, label: "Judicial Controversy", type: "political" }
    },
    {
        id: 'iron_fists_conspiracy',
        title: "Iron Fists' Imperial Contract?",
        time_ago: "Approx. 3 Weeks Ago",
        date: { year: 1040, monthIndex: 6, day: 1 },
        arc: 'capital_intrigue',
        arcPosition: 'rising',
        description: "A captured Iron Legion bomber revealed a shocking secret before his demise...",
        targets: ['archie', 'markop', 'humpik', 'bowser'],
        effects: { iron_fists: -5, regal_empire: -5, freelancer_underworld: 10 },
        cycle_impact: { score: 0.8, label: "Corruption Scandal", type: "political" }
    },
    {
        id: 'koopa_loyalist_truce',
        title: "Koopa-Loyalist Truce",
        time_ago: "Approx. 2 Weeks Ago",
        date: { year: 1040, monthIndex: 6, day: 7 },
        arc: 'mushroom_civil_war',
        arcPosition: 'rising',
        description: "The Koopa Troop remnants and the Peach Loyalists have formed a fragile truce...",
        targets: ['humpik', 'bowser'],
        effects: { peach_loyalists: 10, koopa_troop: 5 },
        cycle_impact: { score: -1.0, label: "Diplomatic Breakthrough", type: "political" }
    },
    {
        id: 'barrel_compartment_reveal',
        title: "The Barrel Secret",
        time_ago: "Approx. 1 Week Ago",
        date: { year: 1040, monthIndex: 6, day: 14 },
        instigator: 'humpik',
        arc: 'toad_liberation',
        arcPosition: 'rising',
        description: "The Iron Legion revealed to Humpik that the trafficked toads are hidden in secret compartments...",
        targets: ['humpik', 'liberated_toads'],
        effects: { iron_legion: 5, liberated_toads: 10, the_unchained: 5 },
        cycle_impact: { score: 0.5, label: "Trafficking Discovery", type: "social" }
    },
    {
        id: 'lankys_disgrace_at_summit',
        title: "Lanky's Disgrace at the Summit",
        time_ago: "Yesterday",
        date: { year: 1040, monthIndex: 6, day: 19 },
        arc: 'kong_kremling_cold_war',
        arcPosition: 'opening',
        description: "Lanky Kong's bizarre behavior at the Democratic Summit caused a major diplomatic incident...",
        targets: ['donkey_kong', 'lanky_kong'],
        effects: { dk_crew: -25, mushroom_regency: -20, regal_empire: -15, cosmic_jesters: 10 },
        cycle_impact: { score: 1.0, label: "Diplomatic Crisis", type: "political" }
    },
    {
        id: 'chaos_in_toad_town',
        title: "Chaos in Toad Town",
        time_ago: "A Few Days Ago",
        date: { year: 1040, monthIndex: 6, day: 16 },
        arc: 'mushroom_civil_war',
        arcPosition: 'rising',
        description: "A series of violent events rocked Toad Town...",
        targets: ['captain_toadette', 'embercap', 'chief_thornpaw'],
        effects: { peach_loyalists: -20, mushroom_regency: -15, onyx_hand: -10, mages_guild: -10, koopa_troop: 5 },
        cycle_impact: { score: 1.5, label: "Civil Unrest", type: "social" }
    },
    {
        id: 'standoff_at_the_capital',
        title: "Standoff at the Capital",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        arc: 'capital_intrigue',
        arcPosition: 'falling',
        description: "The Vigilance was boarded by Regal Empire forces over the capital...",
        targets: ['party'],
        effects: { regal_empire: -30, iron_legion: -25, crimson_fleet: 5, freelancer_underworld: -10, liberated_toads: -5 },
        cycle_impact: { score: 0.8, label: "Military Standoff", type: "military" }
    },
    {
        id: 'capital_diner_shadow_accord',
        title: "Capital Dinner: Shadow Accord",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        instigator: 'waluigi',
        arc: 'capital_intrigue',
        arcPosition: 'rising',
        description: "Mr. Wario, Waluigi, and Lady Toriel convene in the Capital...",
        targets: ['wario', 'waluigi', 'lady_toriel', 'archie', 'markop', 'remi', 'humpik', 'green_t'],
        effects: { freelancer_underworld: 15, regal_empire: -10, koopa_troop: 5, mushroom_regency: -5, diamond_city_investigators: 10 },
        cycle_impact: { score: -0.5, label: "Shadow Alliance", type: "political" }
    },
    {
        id: 'imposter_dan_revelation',
        title: "The Two Toads",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        instigator: 'lario',
        arc: 'toad_liberation',
        arcPosition: 'climax',
        description: "A shocking revelation from the goblin Lario claims the 'Dan' traveling with the party is an imposter...",
        targets: ['party', 'liberated_toads'],
        effects: { liberated_toads: -20, regal_empire: -10, freelancer_underworld: 10, oathbound_judges: -5 },
        cycle_impact: { score: 0.5, label: "Identity Crisis", type: "social" }
    },
    {
        id: 'eager_tortured',
        title: "A Toad in Chains",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        arc: 'capital_intrigue',
        arcPosition: 'rising',
        description: "The toad Eager was confirmed to have been captured and brutally tortured by the Iron Legion...",
        targets: ['party', 'liberated_toads'],
        effects: { iron_legion: -30, liberated_toads: 15, the_unchained: 10, silver_flame: 5 },
        cycle_impact: { score: 1.0, label: "Human Rights Violation", type: "social" }
    },
    {
        id: 'centaur_arsonist',
        title: "The Arsonist Ally",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        arc: 'capital_intrigue',
        arcPosition: 'rising',
        description: "The centaur who accompanied the party to the capital was revealed to be a saboteur...",
        targets: ['party'],
        effects: { regal_empire: -5, iron_legion: -5, rebel_clans: -10 },
        cycle_impact: { score: 0.3, label: "Sabotage", type: "military" }
    },
    {
        id: 'grand_market_ring',
        title: "Grand Market: The Ring and the Horse",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        instigator: 'green_t',
        arc: 'capital_intrigue',
        arcPosition: 'rising',
        description: "A Legion noble’s ring is swallowed by a horse...",
        targets: ['remi', 'archie', 'green_t', 'iron_legion'],
        effects: { iron_legion: -5, freelancer_underworld: 5, the_unchained: 5 },
        cycle_impact: { score: 0.1, label: "Public Scandal", type: "social" }
    },
    {
        id: 'prison_break_fiasco',
        title: "Prison Break Fiasco",
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
        instigator: 'remi',
        arc: 'capital_intrigue',
        arcPosition: 'rising',
        description: "The party's attempt to rescue Eager was a chaotic failure...",
        targets: ['party'],
        effects: { iron_legion: -10, regal_empire: -5, freelancer_underworld: 5, liberated_toads: -5 },
        cycle_impact: { score: 0.8, label: "Security Breach", type: "military" }
    },
    {
        id: 'sewer_dragon',
        title: "A Dragon in the Sewers?",
        time_ago: "Tonight",
        date: { day: 14, monthIndex: 6, year: 1040 },
        arc: 'capital_intrigue',
        arcPosition: 'falling',
        description: "While seeking a cure for Dan, the party was guided by an Iron Legion spy into the capital's sewers...",
        targets: ['party'],
        effects: { iron_legion: -10, mages_guild: 5 },
        cycle_impact: { score: 0.5, label: "Monster Sighting", type: "military" }
    },
    {
        id: 'bowser_looting_manor',
        title: "Waluigi's 'Relocation'",
        time_ago: "Tonight",
        date: { day: 16, monthIndex: 6, year: 1040 },
        instigator: 'waluigi',
        arc: 'raventree_manor',
        arcPosition: 'opening',
        description: "Waluigi and Bowser have been seen hauling chests of loot from the Vigilance...",
        targets: ['party'],
        effects: { koopa_troop: -5, freelancer_underworld: 5, wario_land: 5 },
        cycle_impact: { score: 0, label: "Asset Relocation", type: "economic" }
    },
    {
        id: 'oracle_of_cursed_mansion',
        title: "The Oracle of the Cursed Mansion",
        time_ago: "Tonight",
        date: { day: 16, monthIndex: 6, year: 1040 },
        arc: 'raventree_manor',
        arcPosition: 'opening',
        description: "The party staying at Waluigi's newly acquired mansion has encountered its mysterious host, 'The Oracle.'...",
        targets: ['party', 'waluigi'],
        effects: { mages_guild: 5, cosmic_jesters: 10, silver_flame: -5, freelancer_underworld: 5 },
        cycle_impact: { score: 1.5, label: "Temporal Phenomenon", type: "magic" }
    },
    {
        id: 'waluigis_wyvern_exit',
        title: "Waluigi's Grand Exit",
        time_ago: "Tonight",
        date: { day: 17, monthIndex: 6, year: 1040 },
        instigator: 'waluigi',
        arc: 'raventree_manor',
        arcPosition: 'rising',
        description: "In a characteristically dramatic fashion, Waluigi and his associate Green T were seen escaping the grounds of the haunted mansion...",
        targets: ['waluigi', 'green_t'],
        effects: { cosmic_jesters: 15, freelancer_underworld: 10, regal_empire: -5, mages_guild: -5 },
        cycle_impact: { score: 0.4, label: "Aerial Incident", type: "military" }
    },
    {
        id: 'fall_of_bramblehaven',
        title: "The Bramblehaven Massacre",
        time_ago: "Today",
        date: { day: 17, monthIndex: 6, year: 1040 },
        instigator: 'captain_toadette',
        arc: 'mushroom_civil_war',
        arcPosition: 'rising',
        description: "The Peach Loyalists brutally conquered the Fawful bastion of Bramblehaven...",
        targets: ['captain_toadette', 'embercap'],
        effects: { peach_loyalists: 10, mushroom_regency: -20, fawfuls_furious_freaks: -30, koopa_troop: 5, iron_legion: 5, silver_flame: -10 },
        cycle_impact: { score: 2.0, label: "Fortress Capture", type: "military" }
    },
    {
        id: 'shadeward_mansion_raid',
        title: "The Dinner That Broke Time",
        time_ago: "Tonight",
        date: { day: 16, monthIndex: 6, year: 1040 },
        arc: 'raventree_manor',
        arcPosition: 'rising',
        description: "A group of toads seeking Archie were trapped in the Shadeward Mansion by the time-looping Oracle...",
        targets: ['liberated_toads', 'bones', 'wario'],
        effects: { liberated_toads: -30, iron_legion: -25, regal_empire: -15, freelancer_underworld: 10, mages_guild: 5 },
        cycle_impact: { score: 2.5, label: "Temporal Anomaly", type: "magic" }
    },
    {
        id: 'shadow_war',
        title: "Shadow War Escalation",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        arc: 'shadow_war',
        arcPosition: 'rising',
        description: "The conflict between the Onyx Hand and Moonfang Pack is escalating...",
        targets: ['party'],
        effects: { onyx_hand: 5, moonfang_pack: 5, silver_flame: -10 },
        cycle_impact: { score: 1.5, label: "Supernatural Conflict", type: "military" }
    },
    {
        id: 'dan_training',
        title: "Dan's Training",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        instigator: 'dan',
        arc: 'toad_liberation',
        arcPosition: 'rising',
        description: "The heroic toad, Dan, is being trained in magic by the Rakasha...",
        targets: ['markop', 'dan'],
        effects: { rakasha_clans: 15, mages_guild: 5, mushroom_regency: 10, liberated_toads: 15 },
        cycle_impact: { score: -0.5, label: "Arcane Study", type: "magic" }
    },
    {
        id: 'cosmic_static',
        title: "Cosmic Static",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        arc: 'raventree_manor', // Linked to supernatural events
        arcPosition: 'rising',
        description: "Archie's chaotic energies are reportedly causing 'cosmic static'...",
        targets: ['archie'],
        effects: { cosmic_jesters: 15, mages_guild: -5 },
        cycle_impact: { score: 1.0, label: "Reality Distortion", type: "magic" }
    },
    {
        id: 'paladin_dilemma',
        title: "Paladin's Dilemma",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        arc: 'supernatural_sovereignty', // Linked to faith/law conflict
        arcPosition: 'rising',
        description: "Markop's association with known criminals has not gone unnoticed by holy orders...",
        targets: ['markop'],
        effects: { silver_flame: -15, oathbound_judges: -10 },
        cycle_impact: { score: 0, label: "Moral Crisis", type: "social" }
    },
    {
        id: 'rebel_sympathies',
        title: "Rebel Sympathies",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        arc: 'capital_intrigue', // General unrest
        arcPosition: 'rising',
        description: "The party's anti-authoritarian actions have made them popular with various rebel groups.",
        targets: ['party'],
        effects: { rebel_clans: 10, the_unchained: 5 },
        cycle_impact: { score: 0.5, label: "Sedition", type: "political" }
    },
    {
        id: 'scrap_trail',
        title: "A Trail of Scrap",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        arc: 'vigilance_saga', // Aftermath
        arcPosition: 'resolution',
        description: "The frequent destruction of magitek leaves a trail of valuable salvage...",
        targets: ['party'],
        effects: { ratchet_raiders: 10, regal_empire: -5 },
        cycle_impact: { score: 0, label: "Industrial Waste", type: "economic" }
    },
    {
        id: 'vampire_raid_supply',
        title: "Blood Tax on the Border",
        time_ago: "2 Days Ago",
        date: { day: 18, monthIndex: 6, year: 1040 },
        arc: 'shadow_war',
        arcPosition: 'rising',
        description: "Vampire forces levied a heavy 'blood tax' on border villages, seizing livestock and, reportedly, several citizens. The Moonfang Pack responded by raiding the caravan, reclaiming the 'tax' but leaving the villagers caught in the crossfire.",
        targets: ['baron_von_hess', 'alpha_bloodmaw'],
        effects: { ony_hand: -10, moonfang_pack: 10, regal_empire: -5 },
        cycle_impact: { score: 0.5, label: "Resource Raid", type: "military" }
    },
    {
        id: 'kremling_naval_blockade',
        title: "Kremling Blockade",
        time_ago: "Today",
        date: { day: 20, monthIndex: 6, year: 1040 },
        arc: 'kong_kremling_cold_war',
        arcPosition: 'rising',
        description: "King K. Rool has positioned his galleons to blockade the banana trade routes leaving DK Island. While no shots have been fired, the economic stranglehold is tightening.",
        targets: ['king_k_rool', 'donkey_kong'],
        effects: { kremling_krew: 5, dk_crew: -10, grand_line_republic: -5 },
        cycle_impact: { score: 0.8, label: "Naval Blockade", type: "economic" }
    },
    {
        id: 'toad_training_montage',
        title: "The Wooden Sword Legion",
        time_ago: "Yesterday",
        date: { day: 19, monthIndex: 6, year: 1040 },
        instigator: 'toad_lee',
        arc: 'toad_liberation',
        arcPosition: 'rising',
        description: "Toad Lee has begun drilling the new recruits in basic combat maneuvers using wooden practice weapons. The sight of organized, disciplined Toads has inspired hope in the refugees and concern in the local gangs.",
        targets: ['toad_lee', 'dan'],
        effects: { liberated_toads: 15, toad_gang: -5 },
        cycle_impact: { score: 0.3, label: "Militia Training", type: "social" }
    }
];
