


import { TOAD_ABILITIES } from './abilities.js';

export const AUXILIARY_PARTY = {
    dan: { name: "Dan", weapon: "Longsword & Magic", status: "Weakened & Diminished", portrait: "toads/dan.png", level: 1, xp: 0, xp_to_next: 100, log: [], abilities: [] },
    toad_lee: { name: "Toad Lee", description: "A hardy toad warrior who fights with a surprisingly large axe.", weapon: "Axe", status: "Active", portrait: "toads/toad_lee.png", level: 2, xp: 150, xp_to_next: 300, log: ["Survived the horrifying dinner and subsequent Iron Legion raid at Shadeward Mansion.", "Entered the Feywild Attic via Planar Fracture."], abilities: ["Reckless Attack"] },
    eager: { name: "Eager", weapon: "Whip", status: "Active", portrait: "toads/eager.png", level: 1, xp: 0, xp_to_next: 100, log: ["Rescued from the Spider Grove by Markop and Remi."], abilities: [] },
    ryan: { name: "Ryan", weapon: "Spellcaster", status: "MIA", description: "A quiet, studious toad with a natural but untrained affinity for magic...", portrait: "toads/ryan.png", level: 2, xp: 150, xp_to_next: 300, log: ["Faced the Oracle at Shadeward Mansion and used a powerful darkness spell...", "Jumped from the Vigilance during the Iron Sky Breach."], abilities: ["Magic Missile"] },
    roger: { name: "Roger", weapon: "Gun", status: "Active", portrait: "toads/roger.png", level: 2, xp: 150, xp_to_next: 300, log: ["Stood up to the Oracle at Shadeward Mansion and dropped an Iron Legionnaire...", "Assisted in the defense of Raventree Manor."], abilities: ["Deadeye Shot"] },
    bones: { name: "Bones", weapon: "Grotesque", status: "Captured", portrait: "toads/bones.png", level: 2, xp: 150, xp_to_next: 300, log: ["Captured and interrogated by the Iron Legion during the chaotic raid...", "Failed infiltration of Aegis Command."], abilities: ["Rage"] },
    the_mole: { name: "The Mole", weapon: "Deceit", status: "Active (Enemy)", description: "A toad of unknown origin... Revealed as an agent for the Iron Legion.", portrait: "toads/the_mole.png", level: 2, xp: 150, xp_to_next: 300, log: ["Revealed his allegiance by helping the Iron Legion capture Bones..."], abilities: ["Feint"] },
    toadburt: { name: "Toadburt", weapon: "Entropy Ring", status: "Coerced Agent", description: "A simple toad turned unwilling weapon by the Iron Legion.", portrait: "toads/toadburt.png", level: 1, xp: 50, xp_to_next: 100, log: ["Captured in the Antechamber.", "Fitted with Entropy Ring and deployed to Feywild."], abilities: ["Volatile Touch"] }
};



export const RUMORS = [
  {
    "id": "planar_fracture_crisis",
    "title": "The Fracture of Raventree",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "oracle_npc",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Following a catastrophic ritual failure, Raventree Manor has split into three unstable dimensions: the Physical (Iron Legion controlled), the Shadowfell (Onyx Hand controlled), and the Feywild/Fracture (Wild Magic chaos). The party is separated, and communication is limited to cross-dimensional scrying crystals.",
    "targets": ["markop", "remi", "archie", "bowser"],
    "effects": {
      "mages_guild": -15,
      "iron_legion": -5,
      "wild_magic_zones": 30
    },
    "cycle_impact": { "score": 2.5, "label": "Reality Breach", "type": "magical" }
  },
  {
    "id": "oracle_betrayal",
    "title": "The Oracle's Gambit",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "oracle_npc",
    "arc": "raventree_manor",
    "arcPosition": "revelation",
    "description": "Evidence uncovered by Remi and Markop in the Fractured Atrium reveals the 'Oracle' is actually a necromantic researcher attempting to build a perfect vessel. The crystals protecting the manor were placed by the Mages' Guild to keep a monster IN, not out.",
    "targets": ["oracle_npc", "markop", "remi", "mages_guild"],
    "effects": {
      "party_trust": -50,
      "mages_guild": 10,
      "onyx_hand": 5
    },
    "cycle_impact": { "score": 1.5, "label": "Conspiracy Unveiled", "type": "political" }
  },
    
  {
    "id": "vessel_experiment",
    "title": "The Vessel in the Tank",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "oracle_npc",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "A hidden laboratory in the Fractured Atrium contains vat-grown monstrosities and a central, magically shielded figure frozen in stasis. Notes indicate this 'Vessel' is meant to house a powerful soul (likely the merged Oracle entity). The creature is currently dormant, but the Oracle is pushing for the destruction of the 'Keepers' (Archie/Bowser's team) to power its awakening.",
    "targets": ["markop", "remi", "oracle_npc"],
    "effects": {
      "necromancy_threat": 25,
      "bio_horror": 20
    },
    "cycle_impact": { "score": 3.0, "label": "Forbidden Science", "type": "horror" }
  },
  {
    "id": "shadow_estate_dinner",
    "title": "Dinner with the Damned",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "orangus_cornelius",
    "arc": "shadowfell_estate",
    "arcPosition": "climax",
    "description": "Archie and Bowser are trapped in a high-stakes dinner party with the Vampire Lords of the Onyx Hand in the Shadowfell dimension. The host, Orangus Cornelius, is revealed to be the 'Orange Figure' and the mastermind of the manor's shadow aspect. Green T, captured and seated at the kids' table, has armed himself for a rebellion. The dinner is a facade for a ritual to judge the worthiness of the guests' souls.",
    "targets": ["archie", "bowser", "orangus_cornelius", "green_t"],
    "effects": {
      "onyx_hand": 10,
      "shadowfell_politics": 15,
      "party_tension": 20
    },
    "cycle_impact": { "score": 3.5, "label": "Social Combat", "type": "diplomacy" }
  },
  {
    "id": "toadburt_capture",
    "title": "The Silencing of Toadburt",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "mages_guild",
    "arc": "shadowfell_estate",
    "arcPosition": "rising",
    "description": "Toadburt was captured by Mages' Guild operatives and brought to the Shadow Estate dinner as a 'Guest of Honor.' Initially neutralized by a Dampening Ring, he has now been spotted without it, signaling a potential jailbreak or a deal with the Vampires. His explosive magic capabilities are currently a wild card in the standoff.",
    "targets": ["toadburt", "mages_guild", "archie"],
    "effects": {
      "toad_liberation": -10,
      "chaos_magic_potential": 40
    },
    "cycle_impact": { "score": 2.5, "label": "Hostage Crisis", "type": "tension" }
  },
  {
    "id": "timelines_merging",
    "title": "The Convergence Protocol",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "orangus_cornelius",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Green T has uncovered the true objective of the enemy: to shatter the crystals in the Feywild and kill the protectors in the Shadowfell simultaneously. This will collapse the fractured timelines into a single reality dominated by the released 'Beast/Vessel.' The party must choose whether to stop the convergence or hijack it to fix reality on their own terms.",
    "targets": ["green_t", "archie", "markop"],
    "effects": {
      "timeline_stability": -50,
      "party_agency": 30
    },
    "cycle_impact": { "score": 5.0, "label": "Endgame Scenario", "type": "catastrophic" }
  },
   {
    "id": "green_t_plan",
    "title": "Green T's Gambit",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "green_t",
    "arc": "shadowfell_estate",
    "arcPosition": "climax",
    "description": "Green T, previously dismissed as a coward, has formulated a daring plan to break the Shadowfell's hold on the manor. This marks his transition from sidekick to hero.",
    "targets": ["green_t", "archie", "orangus_cornelius"],
    "effects": {
      "green_t_reputation": 50,
      "onyx_hand_security": -20,
      "liberated_toads": 10
    },
    "cycle_impact": { "score": -0.5, "label": "Hero Rises", "type": "heroic" }
  }, 
    {
    id: 'project_orange',
    title: "The Cowbell of Raventree",
    date: { day: 22, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'perrius_annmatar',
    arc: 'raventree_manor',
    arcPosition: 'climax',
    description: "Against official protocol, rogue archmage Perrius Annmatar manipulated volunteer Hjumpik Deldkur into ringing the summoning bell twice, forcing an orange planar alignment instead of purple. The dwarf, equipped with a dampening ring, screaming cowbell, and warhammer, was hurled into the Feywild to locate 'the orange'—the false Oracle masquerading as Raventree's master. Asset Orange's path now collides with Iron Legion Asset Blue (Toadburt) and purple-clad Waluigi in the manor's attic while the house itself awakens to feed.",
    targets: ['hjumpik_deldkur', 'toadburt', 'waluigi', 'rakshasa_zephyrclaws', 'perrius_annmatar', 'raventree_manor_itself'],
    effects: {
        mages_guild: -20,
        perrius_annmatar: 25,
        iron_legion: -15,
        cosmic_jesters: 20,
        feywild_grove: -10,
        raventree_manor_itself: 30,
        liberated_toads: 15
    },
    cycle_impact: { score: 9.2, label: "Three bells, one attic", type: "convergence" }
},
    {
        id: 'project_sleeper',
        title: "The Entropic Agent",
        date: { day: 21, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'iron_legion_intelligence',
        arc: 'raventree_manor',
        arcPosition: 'rising_action',
        description: "Intel suggests the Iron Legion has successfully turned a captured Toad (Toadburt) into a magical sleeper agent. Equipped with an 'Entropy Ring' to survive planar travel, he has been deployed to the Feywild with a specific kill/capture order for the Oracle. The ring serves as both life-support and a bomb; if he does not complete his mission within 72 hours, the ring will unravel his existence.",
        targets: ['toadburt', 'oracle', 'waluigi', 'toad_lee'],
        effects: {
            liberated_toads: -15, // Loss of a member
            iron_legion: 10, // Successful covert op
            mages_guild: -5, // Forbidden tech usage
            cosmic_jesters: 5 // Chaos of a living bomb
        },
        cycle_impact: { score: 4.5, label: "Betrayal imminent", type: "espionage" }
    },
    {
        id: 'cornelius_dinner',
        title: "The Host of Shadows",
        date: { day: 21, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'onyx_hand',
        arc: 'shadowfell_estate',
        arcPosition: 'introduction',
        description: "Deep within the Shadowfell reflection of Raventree Manor rules 'Orangus Cornelius,' a powerful entity (likely a Vampiric Toad) leading the Onyx Hand in this dimension. He is hosting a formal dinner party where Green T is a captive guest. Archie and Bowser have infiltrated the event, but the physics of the Shadowfell have neutralized Archie's fire magic, forcing them to rely on diplomacy and physical might.",
        targets: ['bowser', 'archie_miser', 'orangus_cornelius', 'green_t'],
        effects: {
            onyx_hand: 10, // Hosting powerful guests
            koopa_troop: 5, // Bowser showing dominance
            freelancer_underworld: 5, // Syndicate presence
            silver_flame: -10 // Unchecked undead gathering
        },
        cycle_impact: { score: 3.0, label: "Dangerous Etiquette", type: "social" }
    },
  {
    "id": "feywild_hoard",
    "title": "The Butterfly's Hoard",
    "date": { "day": 21, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "wild_magic_surge",
    "arc": "feywild_attic",
    "arcPosition": "exploration",
    "description": "The attic of the Feywild Manor has been blown open, revealing a massive treasure trove. Adventurers are flocking to claim the riches.",
    "targets": ["waluigi", "toad_lee", "goblin_staff"],
    "effects": {
      "waluigi_fan_club": 15,
      "ratchet_raiders": 10,
      "regal_empire": -5
    },
    "cycle_impact": { "score": -0.5, "label": "Treasure Found", "type": "economic" }
  },
    {
    "id": "democratic_summit_two",
    "title": "The Second Democratic Summit",
    "date": { "day": 8, "monthIndex": 7, "year": 1040 },
    "isEvent": true,
    "instigator": "princess_daisy",
    "arc": "mushroom_civil_war",
    "arcPosition": "crisis",
    "description": "A 5-day diplomatic summit hosted in Sarasaland intended to foster cooperation between democratic states and independent powers. Marred by King Dedede's disastrous speech, the Peasley financial scandal, and Lanky Kong's international incident, though the Mushroom Kingdom Disaster Relief Program was successfully ratified.",
    "targets": ["dk_crew", "king_dedede", "prince_peasley", "toadette", "princess_daisy"],
    "effects": {
      "dk_crew": -25,
      "dreamland": -15,
      "beanbean_kingdom": -20,
      "kremling_krew": 20,
      "mushroom_liberation": 15
    },
    "cycle_impact": { "score": -1.5, "label": "Diplomatic Crisis", "type": "political" }
  },
  {
    "id": "mushroom_disaster_relief",
    "title": "Mushroom Kingdom Disaster Relief Program",
    "date": { "day": 10, "monthIndex": 7, "year": 1040 },
    "isEvent": true,
    "instigator": "toadette",
    "arc": "mushroom_civil_war",
    "arcPosition": "humanitarian",
    "description": "An international humanitarian initiative signed by 8 nations to provide medical supplies, safe passage corridors, and refugee processing for civilians displaced by the Mushroom Kingdom Civil War.",
    "targets": ["toadette", "princess_daisy", "dk_crew", "isle_delfino", "noki_commonwealth"],
    "effects": {
      "peach_loyalists": 25,
      "toad_liberation": 20,
      "koopa_resistance": 15,
      "international_community": 20
    },
    "cycle_impact": { "score": 2.0, "label": "Humanitarian Success", "type": "diplomatic" }
  },
  {
    "id": "peasley_scandal",
    "title": "The Peasley Financial Scandal",
    "date": { "day": 12, "monthIndex": 7, "year": 1040 },
    "isEvent": true,
    "instigator": "fawful",
    "arc": "mushroom_civil_war",
    "arcPosition": "betrayal",
    "description": "Prince Peasley's titles were relinquished after evidence surfaced of 12 million Beanbean coins transferred to accounts linked to Toadette's relief operations. Investigation revealed Fawful intercepted legitimate relief funds but the secrecy violated royal protocol.",
    "targets": ["prince_peasley", "toadette", "queen_bean", "fawful"],
    "effects": {
      "beanbean_kingdom": -20,
      "fawful_regime": 15,
      "peach_loyalists": -5,
      "prince_peasley": -30
    },
    "cycle_impact": { "score": -1.2, "label": "Royal Disgrace", "type": "political" }
  },
  {
    "id": "lanky_diplomatic_incident",
    "title": "The Lanky Kong Incident",
    "date": { "day": 11, "monthIndex": 7, "year": 1040 },
    "isEvent": true,
    "instigator": "lanky_kong",
    "arc": "mushroom_civil_war",
    "arcPosition": "escalation",
    "description": "A series of accidents by Lanky Kong at the Democratic Summit - including destroying artifacts, knocking delegates into fountains, and striking a Kremling observer - was exploited by Kremling propaganda to declare an international incident against the DK Crew.",
    "targets": ["lanky_kong", "dk_crew", "kremling_krew"],
    "effects": {
      "dk_crew": -25,
      "kremling_krew": 20,
      "kongo_bongo": -15,
      "international_community": -10
    },
    "cycle_impact": { "score": -1.8, "label": "International Incident", "type": "diplomatic" }
  },
  {
    "id": "dedede_walkout",
    "title": "The Dedede Speech Walkout",
    "date": { "day": 11, "monthIndex": 7, "year": 1040 },
    "isEvent": true,
    "instigator": "king_dedede",
    "arc": "mushroom_civil_war",
    "arcPosition": "crisis",
    "description": "King Dedede's 59-page speech attacking the DK Crew caused a mass walkout by world leaders, with 6 delegations abandoning the summit. The incident created the chaos that Kremling observers later exploited.",
    "targets": ["king_dedede", "dk_crew", "princess_daisy"],
    "effects": {
      "dreamland": -20,
      "dk_crew": -10,
      "international_community": -15
    },
    "cycle_impact": { "score": -1.0, "label": "Diplomatic Disaster", "type": "political" }
  },

    {
        id: 'raventree_hag_incident',
        title: "The Hag of the Hedge Maze",
        date: { day: 21, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'hjumpik',
        arc: 'feywild_attic', // UPDATED ARC
        arcPosition: 'rising',
        description: "While the main party battled the Wraith, a separate drama unfolded in the Manor's grounds. Hjumpik and the Rakasha Spirit Walker navigated the magical hedge maze, discovering the 'Midnight Gate'. They subsequently infiltrated the Hag's Hut, rescuing Waluigi and Toad Lee from a gruesome fate in her stew pot. The group barely escaped to the greenhouse.",
        targets: ['hjumpik', 'rakasha_spirit_walker', 'waluigi', 'toad_lee', 'hag_of_raventree'],
        effects: {
            vigilance_crew: 15,
            cosmic_jesters: 10,
            raventree_curse: -10
        },
        cycle_impact: { score: 1.5, label: "Rescue Operation", type: "adventure" }
    },
  {
    "id": "primordial_wyrm_awakening",
    "title": "The Wyrm Beneath",
    "date": { "day": 22, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "kamek",
    "arc": "mushroom_civil_war",
    "arcPosition": "climax",
    "description": "Kamek's excavation beneath the Valley of Bowser has breached an ancient prison containing the Primordial Wyrm—an entity that predates the Stars themselves.",
    "targets": ["kamek", "koopa_foreman", "primordial_wyrm", "koopa_resistance"],
    "effects": {
      "koopa_troop": -40,
      "mushroom_regency": -10,
      "iron_legion": -10,
      "valley_corruption": 100
    },
    "cycle_impact": { "score": 3.0, "label": "Ancient Evil Stirs", "type": "catastrophic" }
  },
  {
    "id": "mages_guild_breakthrough",
    "title": "The Crystalline Theorem",
    "date": { "day": 20, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "archmage_stellaris",
    "arc": "magical_renaissance",
    "arcPosition": "rising",
    "description": "The Mages' Guild announces a breakthrough in crystal resonance theory. New techniques allow mages to store spells indefinitely and share magical knowledge across vast distances. Schools across the realm report a surge in enrollment.",
    "targets": ["mages_guild", "regal_empire"],
    "effects": {
      "mages_guild": 30,
      "regal_empire": 10,
      "iron_legion": -5
    },
    "cycle_impact": { "score": -2.0, "label": "Arcane Renaissance", "type": "discovery" }
  },
  {
    "id": "toad_medical_corps",
    "title": "The Healing Spores Initiative",
    "date": { "day": 18, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "dr_shroomwell",
    "arc": "toad_liberation",
    "arcPosition": "rising",
    "description": "Liberated Toad scientists have developed a revolutionary healing compound derived from rare mushroom spores. The treatment can regenerate lost limbs and cure diseases previously thought incurable. Even the Iron Legion has quietly requested samples.",
    "targets": ["liberated_toads", "mushroom_regency", "iron_legion"],
    "effects": {
      "liberated_toads": 25,
      "mushroom_regency": 15,
      "iron_legion": 5
    },
    "cycle_impact": { "score": -2.5, "label": "Medical Miracle", "type": "discovery" }
  },
  {
    "id": "ancient_library_found",
    "title": "The Sunken Archives",
    "date": { "day": 15, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "explorer_guild",
    "arc": "exploration",
    "arcPosition": "discovery",
    "description": "Divers off the coast of Isle Delfino have discovered a perfectly preserved library from a pre-Peach civilization. The texts contain lost magical formulae, historical records, and star charts pointing to unknown realms.",
    "targets": ["mages_guild", "noki_shellfish", "pianta_syndicate"],
    "effects": {
      "mages_guild": 20,
      "noki_shellfish": 15,
      "pianta_syndicate": 10
    },
    "cycle_impact": { "score": -1.8, "label": "Lost Knowledge", "type": "discovery" }
  },
  {
    "id": "remi_patent_approved",
    "title": "The Steamwright's Triumph",
    "date": { "day": 19, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "remi",
    "arc": "vigilance_saga",
    "arcPosition": "rising",
    "description": "Remi's revolutionary engine design has been officially patented by the Deephold Smithing Guild. The 'Remi Coil' promises to double airship efficiency while halving fuel costs. Several nations have already submitted manufacturing requests.",
    "targets": ["remi", "ratchet_raiders", "regal_empire"],
    "effects": {
      "ratchet_raiders": 20,
      "regal_empire": 10,
      "iron_legion": 5
    },
    "cycle_impact": { "score": -1.5, "label": "Industrial Innovation", "type": "economic" }
  },  
  {
    "id": "koopa_resistance_formed",
    "title": "The Koopa Resistance",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "koopa_foreman",
    "arc": "mushroom_civil_war",
    "arcPosition": "rising",
    "description": "Survivors of Kamek's betrayal have banded together. With Bowser weeks away, this ragtag group represents hope against the Wyrm's corruption.",
    "targets": ["koopa_foreman", "hammer_bro_sergeant"],
    "effects": {
      "koopa_troop": 10,
      "mushroom_regency": 5,
      "iron_legion": 5
    },
    "cycle_impact": { "score": -0.8, "label": "Resistance Forms", "type": "heroic" }
  },

{
    id: 'anchor_restoration_campaign',
    title: "The Seven Seals",
    date: { day: 25, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'hammer_bro_sergeant',
    arc: 'mushroom_civil_war',
    arcPosition: 'climax',
    description: "The Koopa Resistance has launched a coordinated assault on the seven anchor crystals that maintain the Primordial Wyrm's prison. With support from the Iron Legion and Mushroom Regency, teams are striking simultaneously across the region. Each anchor is guarded by a fragment of the Wyrm itself, and casualties mount with every victory. But the prison reforms with each crystal destroyed.",
    targets: ['hammer_bro_sergeant', 'koopa_foreman', 'iron_legion_commander', 'shy_guy_laborer', 'bob_omb_demolitions'],
    effects: {
        koopa_troop: 20,
        mushroom_regency: 10,
        iron_legion: 10,
        valley_corruption: -40
    },
    cycle_impact: { score: 3.5, label: "Coalition Warfare", type: "military" }
},
  {
    "id": "valley_liberation",
    "title": "The Valley Reclaimed",
    "date": { "day": 27, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "koopa_resistance",
    "arc": "mushroom_civil_war",
    "arcPosition": "resolution",
    "description": "Against all odds, the Koopa Resistance succeeded in restoring the seven seals and re-imprisoning the Primordial Wyrm. The Valley of Bowser lies in ruins, but the corruption recedes. Reconstruction begins.",
    "targets": ["koopa_foreman", "hammer_bro_sergeant", "bowser"],
    "effects": {
      "koopa_troop": 35,
      "mushroom_regency": 15,
      "iron_legion": 10
    },
    "cycle_impact": { "score": -2.0, "label": "Kingdom Restored", "type": "rebirth" }
  },
       {
    "id": "delfino_reconstruction",
    "title": "Isle Delfino Rebuilds",
    "date": { "day": 30, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "joint_council",
    "arc": "mushroom_civil_war",
    "arcPosition": "resolution",
    "description": "Following the expulsion of Regency forces, a joint council of Noki, Pianta, and Koopa representatives has begun rebuilding war-damaged areas. Tourism is slowly returning, and the iconic Shine Sprites are glowing brighter than ever.",
    "targets": ["noki_shellfish", "pianta_syndicate", "koopa_troop"],
    "effects": {
      "noki_shellfish": 20,
      "pianta_syndicate": 20,
      "koopa_troop": 15
    },
    "cycle_impact": { "score": -1.8, "label": "Island Healed", "type": "rebirth" }
  },
  {
    "id": "toad_town_gardens",
    "title": "The Memorial Gardens Open",
    "date": { "day": 28, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "mayor_toadsworth",
    "arc": "toad_liberation",
    "arcPosition": "healing",
    "description": "Toad Town has opened the Memorial Gardens, honoring all those lost in the civil war. The gardens feature rare plants from across the kingdom and a central fountain that plays Peach's favorite melody. Citizens weep and embrace.",
    "targets": ["liberated_toads", "mushroom_regency", "peach_loyalists"],
    "effects": {
      "liberated_toads": 15,
      "mushroom_regency": 20,
      "peach_loyalists": 20
    },
    "cycle_impact": { "score": -2.5, "label": "Healing Begins", "type": "cultural" }
  },

      {
    id: 'archie_aegis_post',
    title: "Archie's Aegis Worry",
    date: { day: 21, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'archie_miser',
    arc: 'aegis_riot',
    arcPosition: 'aftermath',
    description: "Archie Miser wonders aloud about the fate of 100+ escaped toads amid the chaos, hoping the Legion hasn't recaptured them. Escaped prisoners quickly correct him: 147 freed thanks to Speaker Rivers, mocking Archie's mirror-punching distractions.",
    targets: ['archie_miser', 'toad_prisoner_moss', 'dan_the_toad'],
    effects: {
      toad_prisoners: 5,
      speaker_network: 8,
      archie_miser: -2
    },
    cycle_impact: { score: 0.6, label: "Escape Confirmation", type: "relief" }
  },  
  {
    "id": "aegis_uprising_clues",
    "title": "Aegis Uprising: Seeds of Rebellion",
    "date": { "day": 21, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "speaker_rivers",
    "arc": "aegis_uprising_clues",
    "arcPosition": "rising",
    "description": "Prisoners discover Mini-Mushrooms in bread crusts alongside blueprints marked with the Speaker's crest. A mass escape is being planned.",
    "targets": ["speaker_rivers", "toad_prisoner_pipsqueak", "general_ironhand"],
    "effects": {
      "liberated_toads": 30,
      "speaker_network": 20,
      "iron_legion": -15
    },
    "cycle_impact": { "score": 0.5, "label": "Prison Break Brewing", "type": "rebellion" }
  },
  {
    id: 'aegis_prison_break_riot',
    title: "Aegis Prison Break: The Whispered Riot",
    date: { day: 21, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'speaker_rivers',
    arc: 'aegis_prison_break_riot',
    arcPosition: 'climax',
    description: "Whispers via guard notes: Speaker L's Order 120 at sunset, Mini-Mushrooms in crusts, east pipes signal. Broadcast confirms from exile. Bells ring: first doubles patrols, second drops water pressure, third triggers shrink/cuff escape via steam-blinded pipes, laundry chutes, mess hall rat distractions, vent swarms, armory raids, wall explosions, boiler rallies, roof zip-lines, mirror decoys, chapel sanctuary. Midlands scouts guide waves to caves, underrail moles, forest misdirects. Tally: 158/187 free, safe houses in Shadeward/Raventree, deserters join, training begins. Clues hint Phoenix hatch, Vigilance sabotage, Third Eye cult.",
    targets: ['speaker_rivers', 'toad_prisoner_moss', 'toad_prisoner_willow', 'toad_prisoner_bramble', 'scarred_guard_toad', 'midlands_scout_toad'],
    effects: {
      liberated_toads: 60,
      speaker_network: 40,
      moonfang_pack: 20,
      rakasha_clans: 15,
      iron_legion: -35,
      regal_empire: -30,
      third_eye_cult: 5
    },
    cycle_impact: { score: 4.2, label: "Coordinated Insurrection", type: "revolutionary" }
  },
    // RUMOR
{
    id: 'koopa_fortress_reconstruction',
    title: "The Valley Awakens",
    date: { day: 22, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'kamek',
    arc: 'mushroom_civil_war',
    arcPosition: 'rising',
    description: "With Bowser absent in the Midlands, Kamek has consolidated control over the Valley of Bowser and initiated an ambitious reconstruction project. The Koopa Krew's excavation has uncovered ancient structures beneath the volcanic soil—and workers report an unexplained energy drain in certain areas. Kamek has ordered a media blackout, but whispers of 'something awakening' have begun to spread.",
    targets: ['kamek', 'koopa_foreman', 'magikoopa_council'],
    effects: {
        koopa_troop: 15,
        mushroom_regency: -5,
        iron_legion: -5
    },
    cycle_impact: { score: 1.5, label: "Military Consolidation", type: "political" }
},

{
id: 'delfino_hotel_lockdown',
title: "Standoff at Hotel Delfino",
date: { day: 24, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'manager_monk',
arc: 'mushroom_civil_war',
arcPosition: 'rising',
description: "Regency Military Police attempted to breach Hotel Delfino to arrest Noki dignitaries. Manager Monk activated the building's defensive shutters and threatened to release resident Boos, effectively turning the luxury hotel into an impregnable fortress of neutrality.",
targets: ['manager_monk', 'captain_lock', 'noki_shellfish'],
effects: {
pianta_syndicate: 10,
mushroom_regency: -10,
gelato_loyalists: -5
},
cycle_impact: { score: 1.5, label: "Civil Disobedience", type: "political" }
},
{
id: 'delfino_fin_madness',
title: "The Fin Friendly Fire Incident",
date: { day: 25, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'lt_sunburn',
arc: 'mushroom_civil_war',
arcPosition: 'rising',
description: "A Regency patrol stationed on the remote 'Fin' of the island succumbed to heat exhaustion and paranoia, engaging in a firefight with a friendly unit they hallucinated were 'Shadow Marios.' The incident has severely degraded Regency morale on the island.",
targets: ['lt_sunburn', 'sgt_daze', 'mushroom_regency'],
effects: {
mushroom_regency: -25,
noki_shellfish: 5
},
cycle_impact: { score: 1.0, label: "Morale Collapse", type: "military" }
},
{
id: 'delfino_village_secession',
title: "Pianta Village Declares Independence",
date: { day: 26, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'don_pianta',
arc: 'mushroom_civil_war',
arcPosition: 'climax',
description: "Don Pianta has formally severed ties with the Mushroom Regency by cutting the suspension bridge to the village. Regency envoys sent to negotiate were physically thrown ('chucked') from the heights into the plaza pool below. The village is now a fortress.",
targets: ['don_pianta', 'envoy_beige'],
effects: {
pianta_syndicate: 30,
mushroom_regency: -30,
koopa_troop: 10
},
cycle_impact: { score: 2.0, label: "Secession", type: "political" }
},
{
id: 'delfino_corona_invasion',
title: "Koopa Paratroopers Seize Corona Mountain",
date: { day: 27, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'general_shellshock',
arc: 'mushroom_civil_war',
arcPosition: 'climax',
description: "In a stunning display of vertical warfare, General Shellshock led an airborne drop of Koopa Paratroopers directly into the Corona Mountain caldera. The Regency Mountain Guard, unprepared for an attack from above, was routed within hours. The Koopa Troop now holds the island's highest ground.",
targets: ['general_shellshock', 'sgt_toadofsky', 'mushroom_regency'],
effects: {
koopa_troop: 40,
mushroom_regency: -40,
noki_shellfish: 10
},
cycle_impact: { score: 2.5, label: "Strategic Victory", type: "military" }
},
{
id: 'delfino_gelato_betrayal',
title: "The Gelato Beach Purge",
date: { day: 27, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'mayor_melon',
arc: 'mushroom_civil_war',
arcPosition: 'rising',
description: "Mayor Melon has officially aligned Gelato Beach with the Mushroom Regency. In a move condemned by the Noki Elders, Gelato police forcibly expelled Noki refugees into the sea on makeshift rafts. This betrayal has unified the western factions against the 'Gelato-Regency Axis.'",
targets: ['mayor_melon', 'refugee_nola', 'noki_shellfish'],
effects: {
gelato_loyalists: 20,
noki_shellfish: -20,
pianta_syndicate: -10
},
cycle_impact: { score: 1.8, label: "Humanitarian Crisis", type: "political" }
},
{
id: 'delfino_ricco_harbor',
title: "Koopa Navy Captures Ricco Harbor",
date: { day: 28, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'admiral_blooper',
arc: 'mushroom_civil_war',
arcPosition: 'falling',
description: "Admiral Blooper's submersible fleet has seized Ricco Harbor. By using Blooper operatives to jam patrol boat propellers with ink, the Koopa Navy disabled the Regency's port defenses without sinking a single ship. The Regency garrison is now cut off from resupply.",
targets: ['admiral_blooper', 'harbormaster_t', 'mushroom_regency'],
effects: {
koopa_troop: 30,
mushroom_regency: -30,
pianta_syndicate: 15
},
cycle_impact: { score: 2.2, label: "Naval Blockade", type: "military" }
},
{
id: 'delfino_gelato_counter',
title: "Disaster at Noki Bay",
date: { day: 29, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'mayor_melon',
arc: 'mushroom_civil_war',
arcPosition: 'falling',
description: "A joint Regency-Gelato amphibious assault on Noki Bay ended in humiliation. The 'Cataquack Cavalry' panicked under artillery fire from Koopa ships and barrel bombardments from Pianta villagers on the cliffs. The Regency forces were forced to retreat, abandoning their heavy equipment.",
targets: ['mayor_melon', 'don_pianta', 'captain_spore'],
effects: {
gelato_loyalists: -30,
pianta_syndicate: 20,
noki_shellfish: 20
},
cycle_impact: { score: 2.0, label: "Failed Offensive", type: "military" }
},
{
id: 'delfino_exile_final',
title: "Regency Expelled from Delfino",
date: { day: 30, monthIndex: 6, year: 1040 },
isEvent: true,
instigator: 'elder_erol',
arc: 'mushroom_civil_war',
arcPosition: 'resolution',
description: "The Isle Delfino Conflict has ended. Admiral B. Toad surrendered the airstrip, and the remaining Regency forces were deported by Koopa transport ships. Noki Bay, Pianta Village, and the Koopa Troop now share de facto control of the island, marking a major geopolitical shift in the southern seas.",
targets: ['elder_erol', 'general_shellshock', 'admiral_b_toad'],
effects: {
mushroom_regency: -50,
koopa_troop: 50,
noki_shellfish: 30,
pianta_syndicate: 30
},
cycle_impact: { score: 3.0, label: "Geopolitical Shift", type: "political" }
},    
{
        id: 'dragon_conspiracy_revealed',
        title: "The Dragon Conspiracy",
        date: { day: 21, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'robinson',
        arc: 'dragon_mountain',
        arcPosition: 'climax',
        description: "A shocking revelation from Dragon Mountain: Robinson (Markop's father) has uncovered that the war between Dragons and the Regal Empire is a fabrication. The Empire utilizes sonic frequencies to paralyze and control dragons, forcing them into servitude as spies. Both Robinson and the paralyzed dragon 'Ignis-Major' were captured by the Iron Legion and transported to Aegis Command.",
        targets: ['robinson', 'markop', 'iron_legion'],
        effects: {
            regal_empire: -20,
            iron_legion: -10,
            rebel_clans: 15,
            cosmic_jesters: 10
        },
        cycle_impact: { score: 2.5, label: "False Flag Operation", type: "political" }
    },
    {
        id: 'aegis_command_massacre',
        title: "Massacre at Aegis Command",
        date: { day: 21, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'bones',
        arc: 'toad_liberation',
        arcPosition: 'climax',
        description: "A daring infiltration of the Iron Legion's Aegis Command fortress ended in disaster. The operative Bones, disguised as a guard, discovered that the captured 'Speaker L' was a decoy. His cover was blown by General Marcus Ironhand, resulting in Bones being critically stabbed and the issuance of 'Order 120': the immediate execution of all Toad prisoners. The incident also involved the use of acid by the Toad commando Creek against Legion personnel.",
        targets: ['bones', 'creek', 'speaker_l', 'general_marcus_ironhand'],
        effects: {
            liberated_toads: -30,
            iron_legion: 20,
            the_unchained: -15,
            silver_flame: -5
        },
        cycle_impact: { score: 2.0, label: "Failed Rescue", type: "military" }
    },
    {
        id: 'wraith_banishment',
        title: "Banishment of the Arcane Wraith",
        date: { day: 21, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'bowser',
        arc: 'raventree_manor',
        arcPosition: 'climax',
        description: "The supernatural threat at Raventree Manor escalated into a three-way brawl involving the party, an Arcane Wraith, and interference from the Mages' Guild. Bowser physically assaulted the ghost (and a Guild Mage), while Dan fought with one arm and Archie demonstrated precise Ice magic control. The Oracle successfully banished the entity, securing ectoplasm for the party and humiliating the Guild representative Pernus Annmatar.",
        targets: ['bowser', 'dan', 'archie', 'hjumpik', 'self_reflection_oracle'],
        effects: {
            mages_guild: -15,
            raventree_curse: -20,
            vigilance_crew: 10,
            cosmic_jesters: 5
        },
        cycle_impact: { score: 1.5, label: "Supernatural Containment", type: "magic" }
    },
  {
    "id": "cheep_cheep_treaty",
    "title": "The Cheep-Cheep Accords",
    "date": { "day": 22, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "captain_toadette",
    "arc": "toad_liberation",
    "arcPosition": "rising",
    "description": "In a landmark diplomatic achievement, Captain Toadette has negotiated a formal alliance between the Liberated Toads and the Rakasha Spirit Walkers. The treaty establishes shared maritime routes and mutual defense pacts, bypassing traditional Regency channels entirely.",
    "targets": ["captain_toadette", "embercap", "rakasha_spirit_walker"],
    "effects": {
      "liberated_toads": 20,
      "rakasha_clans": 20,
      "mushroom_regency": -10
    },
    "cycle_impact": { "score": -2.0, "label": "New Alliance", "type": "diplomatic" }
  },
    {
        id: 'festival_of_the_fallen',
        title: "Pact of Smoke and Bone",
        date: { day: 22, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'mystivil',
        arc: 'shadow_war',
        arcPosition: 'rising',
        description: "Peach Loyalist envoys Mystivil and Big R were spotted at the Rakasha 'Festival of the Fallen.' Mystivil reportedly undertook the 'Ritual of Xeos,' entering a trance to commune directly with Chief Thornpaw. The result is a formal pact: the Loyalists have agreed to occupy and protect a district in Rogueport in exchange for Rakasha military support. The alliance between the Mushroom Kingdom's remnants and the beast clans is solidifying.",
        targets: ['mystivil', 'big_r', 'chief_thornpaw'],
        effects: {
            peach_loyalists: 20,
            rakasha_clans: 20,
            iron_legion: -10,
            silver_flame: -15
        },
        cycle_impact: { score: 1.2, label: "Ritual Alliance", type: "magic" }
    },
    {
        id: 'rogueport_tiger_mauling',
        title: "The Rogueport Mauling",
        date: { day: 22, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'dewdrop',
        arc: 'toad_liberation',
        arcPosition: 'rising',
        description: "Violence erupted in the Rogueport Dock Ward when a squad of Toads, allegedly agents of the Regency, clashed with local bandits and the Iron Legion. Witnesses report a magical scroll was used to summon a massive tiger, which brutally mauled the aggressors. An Iron Legion soldier was found dead at the scene, killed by a crossbow bolt, triggering a localized lockdown and increased Legion patrols.",
        targets: ['dewdrop', 'embercap', 'erick'],
        effects: {
            iron_legion: -10,
            freelancer_underworld: 15,
            liberated_toads: -5,
            mushroom_regency: -5
        },
        cycle_impact: { score: 0.8, label: "Urban Warfare", type: "military" }
    },
    {
        id: 'rakasha_stolen_prize',
        title: "Heist at the Violet Emblem",
        date: { day: 22, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'rakasha_spirit_walker',
        arc: 'toad_liberation',
        arcPosition: 'rising',
        description: "Rumors are circulating in the Rogueport Trade Ward that the Rakasha Spirit Walker has contracted a team of outsiders to retrieve a stolen artifact from a building marked with a violet emblem. The building is reportedly a front for a powerful guild, and the 'Iron Fists' mercenary group has been seen guarding the perimeter.",
        targets: ['embercap', 'dewdrop'],
        effects: {
            rakasha_clans: 5,
            iron_fists: -5,
            freelancer_underworld: 10
        },
        cycle_impact: { score: 0.3, label: "Contract Work", type: "economic" }
    },    
    {
        id: 'spider_grove_ambush',
        title: "Titan vs. Arachnid",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'markop',
        arc: 'raventree_manor',
        arcPosition: 'rising',
        description: "Chaos erupted in the Raventree hedge maze when the party was ambushed by giant spiders. The skirmish is being called 'The Titan Incident' after Markop reportedly grew fifty feet tall to wrestle the broodmother, aided by Waluigi's erratic ice magic and Remi's prototype mechanical hound, 'Mossy'. Despite heavy friendly fire and pepper-spray blindness, the squad successfully repelled the arachnid threat and rescued the toad Eager.",
        targets: ['markop', 'waluigi', 'remi', 'eager', 'roger'],
        effects: {
            liberated_toads: 10,
            iron_legion: -5,
            mages_guild: -5,
            cosmic_jesters: 15
        },
        cycle_impact: { score: 1.5, label: "Kaiju Battle", type: "military" }
    },
     {
    "id": "iron_mandate_passage",
    "title": "The Iron Mandate",
    "date": { "day": 21, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "general_marcus_ironhand",
    "arc": "supernatural_sovereignty",
    "arcPosition": "falling",
    "description": "The Midlands Diet has ratified the 'Iron Mandate', establishing martial law in certain sectors. The Mages' Guild has withdrawn envoys in protest.",
    "targets": ["party", "mages_guild", "onyx_hand", "moonfang_pack"],
    "effects": {
      "regal_empire": 20,
      "iron_legion": 30,
      "mages_guild": -25
    },
    "cycle_impact": { "score": 1.2, "label": "Martial Law", "type": "political" }
  },
    {
    "id": "kong_kremling_spy",
    "title": "The Kong Bug Discovered",
    "date": { "day": 18, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "funky_kong",
    "arc": "kong_kremling_cold_war",
    "arcPosition": "opening",
    "description": "Funky Kong discovered a Kremling listening device in DK's office. The 'peace' between the factions is revealed to be a sham, but open conflict has not yet erupted.",
    "targets": ["donkey_kong", "king_k_rool", "funky_kong"],
    "effects": {
      "dk_crew": -20,
      "kremling_krew": -20,
      "freelancer_underworld": 10
    },
    "cycle_impact": { "score": 0.8, "label": "Cold War Heats Up", "type": "espionage" }
  },

    {
        id: 'iron_sky_breach',
        title: "Vigilance Over Raventree",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'colonel_vera_steelstorm',
        arc: 'vigilance_saga',
        arcPosition: 'falling',
        description: "The captured airship 'Vigilance' has been deployed by the Iron Legion to broadcast propaganda and enforce compliance over the Raventree sector. The sight of their former vessel being used as a tool of oppression has demoralized the Liberated Toads and signaled the Legion's total air superiority.",
        targets: ['party', 'liberated_toads'],
        effects: {
            iron_legion: 10,
            liberated_toads: -10,
            ratchet_raiders: -5
        },
        cycle_impact: { score: 0.5, label: "Propaganda Ops", type: "military" }
    },
    {
        id: 'remi_personal_arc',
        title: "Remi's Guild Application",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'remi',
        arc: 'vigilance_saga',
        arcPosition: 'falling',
        description: "Amidst the chaos of war, Remi has formally submitted her application to the Deephold Smithing Guild, leveraging schematics from the Vigilance and new alloy formulas. The move signals a potential shift from field mechanic to recognized smith, assuming she survives the night.",
        targets: ['remi'],
        effects: {
            ratchet_raiders: 5,
            regal_empire: 0
        },
        cycle_impact: { score: 0.1, label: "Bureaucracy", type: "economic" }
    },    
  {
    "id": "shard_stalker_incident",
    "title": "The Shard Stalker Contained",
    "date": { "day": 20, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "hjumpik",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Hjumpik neutralized a Class-5 Shard Stalker by sealing it into stone rather than destroying it. The Mages' Guild rewarded this strategic containment with legitimacy.",
    "targets": ["hjumpik", "archie", "bowser", "dan", "green_t"],
    "effects": {
      "mages_guild": 25,
      "iron_legion": 10,
      "liberated_toads": 15
    },
    "cycle_impact": { "score": -1.0, "label": "Monster Contained", "type": "magic" }
  },
    {
        id: 'greenhouse_inferno_confession',
        title: "Archie's Confession",
        date: { day: 20, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'archie',
        arc: 'raventree_manor', 
        arcPosition: 'climax',
        description: "Archie Miser has publicly admitted to casting a high-level Fireball spell to destroy the Raventree Greenhouse. While he claims it was to save his friends from Rust Monsters, the admission of such reckless magic has infuriated the Mages' Guild and delighted chaos-worshippers.",
        targets: ['archie'],
        effects: {
            mages_guild: -30,
            green_thumb_guardians: -20,
            regal_empire: -10,
            cosmic_jesters: 25,
            liberated_toads: 10,
            ratchet_raiders: 10
        },
        cycle_impact: { score: 0.5, label: "Public Recklessness", type: "magic" }
    },
    {
        id: 'wraith_conflagration',
        title: "Conflagration in the Manor",
        date: { day: 19, monthIndex: 6, year: 1040 },
        isEvent: true,
        arc: 'raventree_manor', 
        arcPosition: 'climax',
        instigator: 'markop',
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
    "id": "peach_death_fallout",
    "title": "The Princess is Dead",
    "date": { "day": 1, "monthIndex": 0, "year": 995 },
    "time_ago": "45 Years Ago",
    "arc": "mushroom_civil_war",
    "arcPosition": "opening",
    "description": "Princess Peach was killed, sparking a long and brutal civil war in the Mushroom Kingdom. The wound still bleeds.",
    "targets": ["bowser"],
    "effects": {
      "mushroom_regency": -50,
      "regal_empire": -15
    },
    "cycle_impact": { "score": 1.5, "label": "Regime Collapse", "type": "historical" }
  },
    {
        id: 'archie_third_eye_escape',
        title: "The Third Eye Escape",
        date: { day: 19, monthIndex: 6, year: 1040 },
        isEvent: true, 
        instigator: 'archie',
        arc: 'raventree_manor', 
        arcPosition: 'rising',
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
        arc: 'supernatural_sovereignty', 
        arcPosition: 'climax',
        instigator: 'dan',
        date: { day: 18, monthIndex: 6, year: 1040 },
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
        title: "The Kong Bug & Assassination Plot",
        arc: 'kong_kremling_cold_war', 
        arcPosition: 'opening',
        date: { day: 18, monthIndex: 6, year: 1040 },
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
        arc: 'raventree_manor',
        arcPosition: 'climax',
        instigator: 'archie',
        description: "A chaotic series of events at Raventree Manor culminated in a devastating battle within its magical greenhouse. After Remi shot down a wyvern carrying Waluigi and Green T, the party was trapped inside by the Oracle and ambushed by rust monsters. The fight escalated into an inferno, climaxing with Archie unleashing a massive fireball that destroyed the greenhouse. The aftermath saw Dan's attempt to heal a critically wounded Eager backfire, leading to Archie's surrender to the newly-arrived 'Pond Patrol'. The incident concluded with Green T being pulled into a mirror and a new, terrifying supernatural threat emerging from it, plunging the manor into a full-blown containment crisis.",
        targets: ['archie', 'markop', 'hjumpik', 'bowser', 'remi', 'dan', 'eager', 'waluigi', 'green_t', 'self_reflection_oracle'],
        effects: { freelancer_underworld: 10, cosmic_jesters: 15, regal_empire: -15, iron_legion: -15, mages_guild: -20, liberated_toads: -5 },
        cycle_impact: { score: 2.5, label: "Arcane Catastrophe", type: "magic" }
    },
    
  {
    "id": "dragon_slaying",
    "title": "The Dragon Hunt",
    "date": { "year": 1040, "monthIndex": 4, "day": 20 },
    "isEvent": true,
    "instigator": "hjumpik",
    "arc": "vigilance_saga",
    "arcPosition": "opening",
    "description": "The party slew a rogue dragon threatening merchant caravans. The Iron Legion praised the action; the Mages' Guild questioned whether diplomacy was attempted.",
    "targets": ["archie", "markop", "hjumpik", "bowser"],
    "effects": {
      "iron_legion": 10,
      "mages_guild": -10
    },
    "cycle_impact": { "score": 0.3, "label": "Monster Slain", "type": "military" }
  },
  {
    "id": "wario_enterprise",
    "title": "WarioWare Expands",
    "date": { "day": 16, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "wario",
    "arc": "capital_intrigue",
    "arcPosition": "expansion",
    "description": "Wario's microgame empire has opened three new branches across the Midlands. Critics call it crass commercialism; the common folk call it entertainment.",
    "targets": ["wario", "waluigi", "freelancer_underworld"],
    "effects": {
      "freelancer_underworld": 15,
      "regal_empire": 5,
      "cosmic_jesters": 10
    },
    "cycle_impact": { "score": -0.8, "label": "Business Booms", "type": "economic" }
  },
  {
    "id": "democratic_summit",
    "title": "The Democratic Summit",
    "date": { "year": 1040, "monthIndex": 6, "day": 12 },
    "isEvent": true,
    "instigator": "captain_toad",
    "arc": "global_politics",
    "arcPosition": "inciting_incident",
    "description": "A major diplomatic summit intended to foster cooperation between democratic states and independent powers like the DK Crew. The event was marred by an international incident involving the Regal Empire, causing significant political fallout.",
    "targets": ["captain_toad", "donkey_kong", "diddy_kong", "regal_empire_delegate", "queen_bean", "prince_florian"],
    "effects": {
      "mushroom_regency": 10,
      "dk_crew": 5,
      "regal_empire": -15
    },
    "cycle_impact": { "score": 0.5, "label": "Diplomatic Tension", "type": "political" }
  },
  {
    "id": "fawfuls_gala",
    "title": "Fawful's Grand Gala",
    "date": { "year": 1040, "monthIndex": 6, "day": 13 },
    "isEvent": true,
    "instigator": "fawful",
    "arc": "fawful_dominion",
    "arcPosition": "rising_action",
    "description": "A victory party hosted by Fawful at the seized Peach's Castle. Attended by underworld figures and chaotic entities, it was successfully infiltrated by a joint Koopa-Loyalist intelligence team.",
    "targets": ["fawful", "evil_toad_god", "giggling_pete", "chief_thornpaw"],
    "effects": {
      "fawful_minions": 10,
      "peach_loyalists": 5,
      "cosmic_jesters": 10
    },
    "cycle_impact": { "score": -0.7, "label": "Villainous Assembly", "type": "social" }
  },
  {
    "id": "bramblehaven_siege",
    "title": "The Siege of Bramblehaven",
    "date": { "year": 1040, "monthIndex": 6, "day": 15 },
    "isEvent": true,
    "instigator": "captain_toadette",
    "arc": "civil_war",
    "arcPosition": "rising_action",
    "description": "Captain Toadette's Loyalist forces launched a brutal, day-long assault on the Fawful bastion of Bramblehaven. The Loyalists refused to accept surrender, resulting in heavy casualties but a decisive strategic victory.",
    "targets": ["captain_toadette", "embercap", "mistveil", "dewdrop"],
    "effects": {
      "peach_loyalists": 25,
      "fawful_minions": -30,
      "civilians": -10
    },
    "cycle_impact": { "score": 0.8, "label": "Brutal Victory", "type": "military" }
  },
  {
    "id": "raventree_manor_chaos",
    "title": "The Haunting of Raventree Manor",
    "date": { "year": 1040, "monthIndex": 6, "day": 17 },
    "isEvent": true,
    "instigator": "archie",
    "arc": "raventree_mystery",
    "arcPosition": "rising_action",
    "description": "The party's exploration of the haunted Raventree Manor descended into chaos involving flaming books and cryptic clues. The group eventually barricaded themselves inside after discovering Bowser and Eager on the premises.",
    "targets": ["archie", "markop", "remi", "waluigi", "bowser"],
    "effects": {
      "mages_guild": -5,
      "party_cohesion": -10,
      "supernatural_forces": 10
    },
    "cycle_impact": { "score": -0.4, "label": "Paranormal Activity", "type": "supernatural" }
  },
  {
    "id": "shadeward_manor_raid",
    "title": "The Shadeward Betrayal",
    "date": { "year": 1040, "monthIndex": 6, "day": 18 },
    "isEvent": true,
    "instigator": "self_reflection_oracle",
    "arc": "shadeward_conspiracy",
    "arcPosition": "climax",
    "description": "A dinner party for Liberated Toads turned into a trap within the time-looping Shadeward Mansion. A traitorous 'Mole' facilitated a raid by Mr. Wario and the Iron Legion. The survivors escaped via dark magic, but trust was shattered.",
    "targets": ["self_reflection_oracle", "wario", "toad_lee", "bones", "ryan", "rodger", "the_mole"],
    "effects": {
      "iron_legion": 20,
      "liberated_toads": -20,
      "wario_enterprises": 15
    },
    "cycle_impact": { "score": -0.9, "label": "Betrayal & Ambush", "type": "chaotic" }
  },
  {
    "id": "archies_confession",
    "title": "The Fireball Confession",
    "date": { "year": 1040, "monthIndex": 6, "day": 20 },
    "isEvent": true,
    "instigator": "archie",
    "arc": "raventree_mystery",
    "arcPosition": "climax",
    "description": "Archie Miser publicly confessed to the destruction of the Raventree Greenhouse, sparking immediate backlash from the Mages' Guild. This coincided with a chaotic skirmish in the Manor's Dance Hall against the Iron Legion.",
    "targets": ["archie", "hjumpik", "markop", "toad_lee", "waluigi", "iron_legion"],
    "effects": {
      "mages_guild": -25,
      "iron_legion": -10,
      "wah_media": 20
    },
    "cycle_impact": { "score": 0.6, "label": "Public Scandal", "type": "social" }
  },
  {
    "id": "scrap_trade_boom",
    "title": "The Salvage Rush",
    "date": { "day": 1, "monthIndex": 6, "year": 1040 },
    "isEvent": false,
    "arc": "vigilance_saga",
    "arcPosition": "falling",
    "description": "The frequent destruction of magitek has created a thriving salvage economy. Ratchet Raiders and independent scavengers are making fortunes.",
    "targets": ["ratchet_raiders", "regal_empire"],
    "effects": {
      "ratchet_raiders": 15,
      "regal_empire": -5
    },
    "cycle_impact": { "score": -0.5, "label": "Salvage Economy", "type": "economic" }
  },
    {
        id: 'iron_fists_raid',
        title: "Iron Fists Raid",
        time_ago: "Approx. 5 Weeks Ago",
        date: { year: 1040, monthIndex: 5, day: 15 },
        instigator: 'archie',
        arc: 'capital_intrigue',
        arcPosition: 'opening',
        description: "The party smashed an Iron Fists smuggling ring, earning the gang's ire.",
        targets: ['archie', 'markop'],
        effects: { iron_fists: -25, freelancer_underworld: 5, regal_empire: 5 },
        cycle_impact: { score: -0.2, label: "Crime Suppression", type: "military" }
    },
    {
    "id": "xo_defeat",
    "title": "X.O.'s Defeat",
    "date": { "year": 1040, "monthIndex": 5, "day": 22 },
    "time_ago": "Approx. 4 Weeks Ago",
    "arc": "vigilance_saga",
    "arcPosition": "climax",
    "instigator": "dan",
    "description": "The party defeated the rogue mage X.O. and secured the 'Vigilance'. A major threat was neutralized.",
    "targets": ["archie", "markop", "hjumpik", "bowser", "dan"],
    "effects": {
      "regal_empire": 5,
      "mages_guild": 5,
      "the_unchained": 10,
      "liberated_toads": 25
    },
    "cycle_impact": { "score": -1.0, "label": "Villain Defeated", "type": "heroic" }
  },
    {
        id: 'core_crisis',
        title: "Core Crisis on the Vigilance",
        time_ago: "Approx. 4 Weeks Ago",
        arc: 'vigilance_saga', 
        arcPosition: 'climax',
        date: { year: 1040, monthIndex: 5, day: 22 },
        instigator: 'hjumpik',
        description: "In an act of supreme recklessness, hjumpik disabled the Vigilance's power core with an thrown axe...",
        targets: ['hjumpik', 'bowser'],
        effects: { regal_empire: -40, iron_legion: -25, mages_guild: -15, ratchet_raiders: 15, cosmic_jesters: 20 },
        cycle_impact: { score: 1.0, label: "Magitek Failure", type: "tech" }
    },
    {
        id: 'syrup_schism',
        title: "The Syrup Schism",
        time_ago: "Approx. 4 Weeks Ago",
        arc: 'vigilance_saga', 
        arcPosition: 'rising',
        date: { year: 1040, monthIndex: 5, day: 22 },
        description: "The pirate Captain Syrup was freed from captivity under the goblin Lario...",
        targets: ['archie', 'markop', 'hjumpik', 'bowser', 'waluigi'],
        effects: { ratchet_raiders: -25, freelancer_underworld: 10, crimson_fleet: -20, regal_empire: -5 },
        cycle_impact: { score: 0.5, label: "Underworld Instability", type: "economic" }
    },
    {
        id: 'archie_acquittal',
        title: "Archie's Acquittal",
        time_ago: "Approx. 3-4 Weeks Ago",
        date: { year: 1040, monthIndex: 5, day: 28 },
        instigator: 'archie',
        arc: 'supernatural_sovereignty', 
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
        arcPosition: 'opening',
        description: "A captured Iron Legion bomber revealed a shocking secret before his demise...",
        targets: ['archie', 'markop', 'hjumpik', 'bowser'],
        effects: { iron_fists: -5, regal_empire: -5, freelancer_underworld: 10 },
        cycle_impact: { score: 0.8, label: "Corruption Scandal", type: "political" }
    },
  {
    "id": "koopa_loyalist_truce",
    "title": "The Ember Summit",
    "date": { "day": 7, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "bowser",
    "arc": "mushroom_civil_war",
    "arcPosition": "rising",
    "description": "The Koopa Troop remnants and the Peach Loyalists have signed a formal truce at the Ember Summit. Former enemies now share intelligence and resources against common threats. Witnesses report both sides laying down arms and sharing a meal.",
    "targets": ["bowser", "captain_toadette", "peach_loyalists"],
    "effects": {
      "peach_loyalists": 15,
      "koopa_troop": 15,
      "mushroom_regency": 10
    },
    "cycle_impact": { "score": -2.5, "label": "Historic Peace", "type": "diplomatic" }
  },
    {
    "id": "festival_of_stars",
    "title": "The Festival of Falling Stars",
    "date": { "day": 25, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "mushroom_regency",
    "arc": "cultural",
    "arcPosition": "celebration",
    "description": "For the first time in 45 years, the Festival of Falling Stars is being celebrated across the Mushroom Kingdom. Citizens of all factions gather to honor Princess Peach's memory and pray for peace. Even Iron Legion soldiers have been seen participating.",
    "targets": ["mushroom_regency", "peach_loyalists", "liberated_toads"],
    "effects": {
      "mushroom_regency": 20,
      "peach_loyalists": 15,
      "liberated_toads": 10,
      "iron_legion": 5
    },
    "cycle_impact": { "score": -3.0, "label": "Kingdom United", "type": "cultural" }
  },
  {
    "id": "trade_route_reopened",
    "title": "The Spice Roads Return",
    "date": { "day": 12, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "merchant_consortium",
    "arc": "economic",
    "arcPosition": "expansion",
    "description": "After months of negotiation, the ancient Spice Roads connecting the Midlands to the Eastern Kingdoms have reopened. Caravans laden with exotic goods flow freely for the first time in a decade. Markets are booming.",
    "targets": ["regal_empire", "freelancer_underworld", "merchant_consortium"],
    "effects": {
      "regal_empire": 15,
      "freelancer_underworld": 20,
      "iron_legion": 10
    },
    "cycle_impact": { "score": -1.5, "label": "Trade Flourishes", "type": "economic" }
  },
    {
    "id": "new_colony_established",
    "title": "Fort Sunrise Founded",
    "date": { "day": 10, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "regal_empire",
    "arc": "expansion",
    "arcPosition": "growth",
    "description": "The Regal Empire has established Fort Sunrise on the frontier, a thriving settlement that promises to bring civilization to the wild lands. Settlers report fertile soil and peaceful relations with local tribes.",
    "targets": ["regal_empire", "iron_legion"],
    "effects": {
      "regal_empire": 20,
      "iron_legion": 15,
      "rebel_clans": -5
    },
    "cycle_impact": { "score": -1.0, "label": "Frontier Growth", "type": "expansion" }
  },
  {
    "id": "noki_fleet_expansion",
    "title": "The Coral Fleet Launches",
    "date": { "day": 14, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "elder_erol",
    "arc": "delfino_conflict",
    "arcPosition": "rising",
    "description": "The Noki Elders have unveiled a new fleet of swift coral-hulled vessels. These ships can navigate waters too shallow for traditional warships, giving the Noki unprecedented control of coastal trade routes.",
    "targets": ["noki_shellfish", "pianta_syndicate", "mushroom_regency"],
    "effects": {
      "noki_shellfish": 25,
      "pianta_syndicate": 10,
      "mushroom_regency": -5
    },
    "cycle_impact": { "score": -1.2, "label": "Naval Expansion", "type": "economic" }
  },

    {
        id: 'barrel_compartment_reveal',
        title: "The Barrel Secret",
        time_ago: "Approx. 1 Week Ago",
        date: { year: 1040, monthIndex: 6, day: 14 },
        instigator: 'hjumpik',
        arc: 'toad_liberation', 
        arcPosition: 'rising',
        description: "The Iron Legion revealed to hjumpik that the trafficked toads are hidden in secret compartments...",
        targets: ['hjumpik', 'liberated_toads'],
        effects: { iron_legion: 5, liberated_toads: 10, the_unchained: 5 },
        cycle_impact: { score: 0.5, label: "Trafficking Discovery", type: "social" }
    },
    {
        id: 'lankys_disgrace_at_summit',
        title: "Lanky's Disgrace at the Summit",
        time_ago: "Yesterday",
        arc: 'kong_kremling_cold_war', 
        arcPosition: 'rising',
        date: { year: 1040, monthIndex: 6, day: 19 },
        description: "Lanky Kong's bizarre behavior at the Democratic Summit caused a major diplomatic incident...",
        targets: ['donkey_kong', 'lanky_kong'],
        effects: { dk_crew: -25, mushroom_regency: -20, regal_empire: -15, cosmic_jesters: 10 },
        cycle_impact: { score: 1.0, label: "Diplomatic Crisis", type: "political" }
    },
    {
        id: 'chaos_in_toad_town',
        title: "Chaos in Toad Town",
        time_ago: "A Few Days Ago",
        arc: 'mushroom_civil_war', 
        arcPosition: 'rising',
        date: { year: 1040, monthIndex: 6, day: 16 },
        description: "A series of violent events rocked Toad Town...",
        targets: ['captain_toadette', 'embercap', 'chief_thornpaw'],
        effects: { peach_loyalists: -20, mushroom_regency: -15, onyx_hand: -10, mages_guild: -10, koopa_troop: 5 },
        cycle_impact: { score: 1.5, label: "Civil Unrest", type: "social" }
    },
    {
        id: 'standoff_at_the_capital',
        title: "Standoff at the Capital",
        time_ago: "Today",
        arc: 'capital_intrigue', 
        arcPosition: 'opening',
        date: { day: 14, monthIndex: 6, year: 1040 },
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
        targets: ['wario', 'waluigi', 'lady_toriel', 'archie', 'markop', 'remi', 'hjumpik', 'green_t'],
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
        arcPosition: 'rising',
        description: "A shocking revelation from the goblin Lario claims the 'Dan' traveling with the party is an imposter...",
        targets: ['party', 'liberated_toads'],
        effects: { liberated_toads: -20, regal_empire: -10, freelancer_underworld: 10, oathbound_judges: -5 },
        cycle_impact: { score: 0.5, label: "Identity Crisis", type: "social" }
    },
    {
        id: 'eager_tortured',
        title: "A Toad in Chains",
        arc: 'toad_liberation', 
        arcPosition: 'rising',
        time_ago: "Today",
        date: { day: 14, monthIndex: 6, year: 1040 },
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
        arcPosition: 'climax',
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
    "id": "bowser_looting_manor",
    "title": "Waluigi's 'Asset Relocation'",
    "date": { "day": 16, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "waluigi",
    "arc": "raventree_manor",
    "arcPosition": "opening",
    "description": "Waluigi and Bowser have been seen hauling chests from the Vigilance to the manor. When questioned, Waluigi insisted it was 'legitimate salvage redistribution.'",
    "targets": ["waluigi", "bowser"],
    "effects": {
      "koopa_troop": -5,
      "freelancer_underworld": 5,
      "wario_land": 5
    },
    "cycle_impact": { "score": 0.1, "label": "Assets Relocated", "type": "economic" }
  },
    {
        id: 'oracle_of_cursed_mansion',
        title: "The Oracle of the Cursed Mansion",
        time_ago: "Tonight",
        arc: 'raventree_manor', 
        arcPosition: 'opening',
        date: { day: 16, monthIndex: 6, year: 1040 },
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
    "id": "fall_of_bramblehaven",
    "title": "The Bramblehaven Campaign",
    "date": { "day": 17, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "captain_toadette",
    "arc": "mushroom_civil_war",
    "arcPosition": "climax",
    "description": "The Peach Loyalists conquered the Fawful bastion of Bramblehaven. While the victory was decisive, Captain Toadette ensured civilian casualties were minimized.",
    "targets": ["captain_toadette", "embercap"],
    "effects": {
      "peach_loyalists": 15,
      "mushroom_regency": -10,
      "fawfuls_furious_freaks": -30
    },
    "cycle_impact": { "score": 1.0, "label": "Fortress Falls", "type": "military" }
  },
    {
    "id": "koopa_corona_victory",
    "title": "Corona Mountain Secured",
    "date": { "day": 27, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "general_shellshock",
    "arc": "mushroom_civil_war",
    "arcPosition": "climax",
    "description": "General Shellshock's paratroopers seized Corona Mountain in a swift strike. The victory was clean, with the Regency garrison surrendering after seeing they were outmatched.",
    "targets": ["general_shellshock", "mushroom_regency"],
    "effects": {
      "koopa_troop": 30,
      "mushroom_regency": -20,
      "noki_shellfish": 10
    },
    "cycle_impact": { "score": 0.8, "label": "Strategic Victory", "type": "military" }
  },
    {
        id: 'shadeward_mansion_raid',
        title: "The Dinner That Broke Time",
        time_ago: "Tonight",
        arc: 'toad_liberation', 
        arcPosition: 'climax',
        date: { day: 16, monthIndex: 6, year: 1040 },
        description: "A group of toads seeking Archie were trapped in the Shadeward Mansion by the time-looping Oracle...",
        targets: ['liberated_toads', 'bones', 'wario'],
        effects: { liberated_toads: -30, iron_legion: -25, regal_empire: -15, freelancer_underworld: 10, mages_guild: 5 },
        cycle_impact: { score: 2.5, label: "Temporal Anomaly", type: "magic" }
    },
  {
    "id": "shadow_war",
    "title": "Shadow War Escalation",
    "date": { "day": 1, "monthIndex": 6, "year": 1040 },
    "isEvent": false,
    "description": "The conflict between the Onyx Hand and Moonfang Pack continues in the shadows. Neither side has gained decisive advantage, but civilian casualties mount.",
    "targets": ["onyx_hand", "moonfang_pack", "silver_flame"],
    "arc": "shadow_war",
    "arcPosition": "ongoing",
    "effects": {
      "onyx_hand": 5,
      "moonfang_pack": 5,
      "silver_flame": -10
    },
    "cycle_impact": { "score": 0.8, "label": "Underground Conflict", "type": "tension" }
  },
  {
    "id": "dan_training",
    "title": "Dan's Awakening",
    "date": { "day": 1, "monthIndex": 6, "year": 1040 },
    "isEvent": false,
    "instigator": "dan",
    "arc": "toad_liberation",
    "arcPosition": "rising",
    "description": "The heroic toad Dan is being trained in Rakasha magic. His progress has been remarkable, offering hope for a new generation of Toad mages.",
    "targets": ["markop", "dan"],
    "effects": {
      "rakasha_clans": 15,
      "mages_guild": 5,
      "liberated_toads": 15
    },
    "cycle_impact": { "score": -1.0, "label": "New Champion", "type": "discovery" }
  },
  {
    "id": "cosmic_static",
    "title": "Archie's Cosmic Static",
    "date": { "day": 1, "monthIndex": 6, "year": 1040 },
    "isEvent": false,
    "arc": "raventree_manor",
    "arcPosition": "rising",
    "description": "Archie's chaotic energies are causing 'cosmic static' - minor reality hiccups that are more amusing than dangerous. Street performers have started imitating the effects.",
    "targets": ["archie"],
    "effects": {
      "cosmic_jesters": 15,
      "mages_guild": -5
    },
    "cycle_impact": { "score": 0.2, "label": "Reality Wobbles", "type": "magical" }
  },

     {
    "id": "paladin_dilemma",
    "title": "Paladin's Dilemma",
    "date": { "day": 1, "monthIndex": 6, "year": 1040 },
    "isEvent": false,
    "arc": "supernatural_sovereignty",
    "arcPosition": "rising",
    "description": "Markop's association with criminals has drawn attention from holy orders, but his heroic deeds provide counterbalance. The temples are divided.",
    "targets": ["markop"],
    "effects": {
      "silver_flame": -10,
      "oathbound_judges": -5
    },
    "cycle_impact": { "score": 0.3, "label": "Moral Quandary", "type": "social" }
  },
  {
    "id": "rebel_sympathies",
    "title": "Rebel Sympathies Grow",
    "date": { "day": 1, "monthIndex": 6, "year": 1040 },
    "isEvent": false,
    "arc": "toad_liberation",
    "arcPosition": "rising",
    "description": "The party's anti-authoritarian actions have made them popular with rebel groups. Songs are being sung in taverns.",
    "targets": ["party"],
    "effects": {
      "rebel_clans": 15,
      "the_unchained": 10
    },
    "cycle_impact": { "score": 0.2, "label": "Folk Heroes", "type": "social" }
  },
    {
        id: 'scrap_trail',
        title: "A Trail of Scrap",
        time_ago: "Ongoing",
        date: { day: 1, monthIndex: 6, year: 1040 },
        arc: 'vigilance_saga',
        arcPosition: 'falling',
        description: "The frequent destruction of magitek leaves a trail of valuable salvage...",
        targets: ['party'],
        effects: { ratchet_raiders: 10, regal_empire: -5 },
        cycle_impact: { score: 0, label: "Industrial Waste", type: "economic" }
    }
];