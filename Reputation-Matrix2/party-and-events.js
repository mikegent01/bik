


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
    id: 'toad_trail_begins',
    title: "Toad Trail Begins",
    date: { day: 26, monthIndex: 7, year: 1040 },
    isEvent: true,
    instigator: 'archie',
    arc: 'toad_trail_begins',
    arcPosition: 'introduction',
    description: "The Mages Guild agents arrive at the abandoned Toad Trail outpost with hostile intent but are swiftly intercepted by archie who offers a truce. He reveals the Guilds true mission is to silence a rogue mage who threatens the Regal Empire. The agents are left confused as archie promises leniency if they abandon their pursuit.",
    targets: ['archie', 'speaker_l', 'mages_guild', 'green_t'],
    effects: { mages_guild: -20, pond_patrol: -3 },
    cycle_impact: { score: 2.7, label: "political tension", type: "political" }
  },  
  {
    "id": "fey_calendar_confusion",
    "title": "Fey Calendar Chaos",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "salam",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Multiple conflicting calendar systems in Feyward suggest the plane's causality is fractured and arguing with itself.",
    "targets": ["salam", "aurelian", "all_residents"],
    "effects": { "cosmic_jesters": -5, "mages_guild": 5 },
    "cycle_impact": { "score": 0.7, "label": "Temporal Instability", "type": "mystic" }
  },
  {
    "id": "three_eyed_archive_profile",
    "title": "Triune Project Revealed",
    "time_ago": "Late Night",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "ryan",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Legion's secret Triune project created three-eyed mages in 988, directly linking the Archive to the Grafting ritual.",
    "targets": ["legion", "hjumpik", "archive"],
    "effects": { "iron_legion": -15, "mages_guild": 10, "onyx_hand": 5 },
    "cycle_impact": { "score": 1.5, "label": "Classified Breach", "type": "political" }
  },
  {
    "id": "orange_heir_prophecy",
    "title": "Orange Heir Prophecy Confirmed",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "bones",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Diary confirms the Orange Heir is a vine-scale hybrid created by the Grafting, and the manor is preparing for their awakening.",
    "targets": ["aurelian", "orange_heir", "all_residents"],
    "effects": { "cosmic_jesters": -10, "mages_guild": 8 },
    "cycle_impact": { "score": 1.3, "label": "Prophecy Fulfillment", "type": "mystic" }
  },
  {
    "id": "wario_debt_collection_attempt",
    "title": "Wario's Debt Collection Drive",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "wario",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Wario attempts to collect centuries-old debts across timelines, threatening party cohesion and attracting unwanted attention.",
    "targets": ["wario", "waluigi", "green_t", "bowser", "remi"],
    "effects": { "ratchet_raiders": -5, "liberated_toads": -3 },
    "cycle_impact": { "score": 0.6, "label": "Debt Crisis", "type": "social" }
  },
  {
    "id": "fog_elf_usk_sighting",
    "title": "Fog-Elf Usk Sighted",
    "time_ago": "Midnight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "rakasha",
    "arc": "raventree_manor",
    "arcPosition": "rising",
    "description": "Usk, a fog-elf memory collector, seen in mirrors holding severed fingers, directly connecting to Hjumpik's murder.",
    "targets": ["usk", "hjumpik", "archive"],
    "effects": { "mages_guild": 5, "onyx_hand": -5 },
    "cycle_impact": { "score": 0.9, "label": "Memory Manifestation", "type": "mystic" }
  },
  {
    "id": "vine_room_aftermath",
    "title": "Vine Room Stand-Down",
    "time_ago": "Late Night",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "toad_lee",
    "arc": "feywild_attic",
    "arcPosition": "falling",
    "description": "Aurelian's command pacified the aggressive vines, revealing they were testing the party's worthiness.",
    "targets": ["aurelian", "toad_lee", "rakasha"],
    "effects": { "cosmic_jesters": 5, "aurelian_trust": 10 },
    "cycle_impact": { "score": 0.5, "label": "Test Passed", "type": "social" }
  },
  {
    "id": "rust_monster_glitter_trail",
    "title": "Rust Monster Iron Harvest",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "salam",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Rust monsters provide easy access to ritual materials, suggesting the manor is assisting the party's efforts.",
    "targets": ["salam", "rust_monsters", "ritual_preparers"],
    "effects": { "mages_guild": 3, "ritual_progress": 5 },
    "cycle_impact": { "score": 0.4, "label": "Material Gathering", "type": "utility" }
  },
  {
    "id": "dragonfly_acid_spit",
    "title": "Dragonfly Acid Attack",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "green_t",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "The 'pest' dragonfly reveals acid-spitting capabilities, escalating the threat level and urgency of removal.",
    "targets": ["green_t", "aurelian", "wario", "toad_lee"],
    "effects": { "cosmic_jesters": -8, "manor_integrity": -5 },
    "cycle_impact": { "score": 1.1, "label": "Pest Revelation", "type": "combat" }
  },
  {
    "id": "garlic_grenade_test",
    "title": "Garlic Grenade Analysis",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "hjumpik",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Wario's garlic grenade proves to be a potent area-denial weapon, effective against both living and undead.",
    "targets": ["hjumpik", "wario", "potential_targets"],
    "effects": { "ratchet_raiders": 3, "vampire_threat": -5 },
    "cycle_impact": { "score": 0.5, "label": "Weapon Assessment", "type": "utility" }
  },
  {
    "id": "coin_press_blacksmith_search",
    "title": "Counterfeit Press Repair Search",
    "time_ago": "Late Night",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "wario",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Wario seeks blacksmith services for his broken counterfeit press, potentially introducing more economic chaos.",
    "targets": ["wario", "black_market", "manor_staff"],
    "effects": { "economy_stability": -3, "wario_wealth": 5 },
    "cycle_impact": { "score": 0.3, "label": "Criminal Enterprise", "type": "social" }
  },
  {
    "id": "fingers_severed_memory",
    "title": "Finger Collection Detail Revealed",
    "time_ago": "Midnight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "hjumpik",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Hjumpik recalls the mage collecting his severed fingers, suggesting ritualistic purposes beyond simple murder.",
    "targets": ["hjumpik", "archive", "usk"],
    "effects": { "mages_guild": -5 },
    "cycle_impact": { "score": 1.2, "label": "Memory Recovery", "type": "mystic" }
  },
  {
    "id": "waluigi_debt_dispute",
    "title": "Waluigi's Debt Dispute",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "waluigi",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Waluigi publicly disputes Wario's fraudulent debt claims, exposing the absurdity of cross-timeline accounting.",
    "targets": ["waluigi", "wario", "debt_collectors"], 
    "effects": { "ratchet_raiders": -3, "party": 5 },
    "cycle_impact": { "score": 0.4, "label": "Financial Fraud Exposed", "type": "social" }
  },
  {
    "id": "prime_magic_month_explanation",
    "title": "Prime Magic Month Mechanics",
    "time_ago": "Late Night",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "dan",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Dan explains that Prime Magic Month creates rigid causality, making consequences inevitable and magic dangerously predictable.",
    "targets": ["dan", "green_t", "salam"],
    "effects": { "mages_guild": 5, "ritual_success": 3 },
    "cycle_impact": { "score": 0.6, "label": "Magical Analysis", "type": "mystic" }
  },
  {
    "id": "satyr_eviction_progress",
    "title": "Satyr Eviction Update",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "toad_lee",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Toad Lee's eviction efforts yield mixed results, with satyrs offering dangerous magical payments instead of leaving.",
    "targets": ["toad_lee", "satyrs", "aurelian"],
    "effects": { "cosmic_jesters": -5, "manor_order": 5 },
    "cycle_impact": { "score": 0.7, "label": "Eviction Attempts", "type": "social" }
  },
  {
    "id": "portable_pokemon_center",
    "title": "Portable Healing Device Scam",
    "time_ago": "Late Night",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "remi",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Remi reveals Wario's 'Pokemon Center' healing device is just modified clerical magic with copyright infringement attached.",
    "targets": ["remi", "wario", "healing_magic_users"],
    "effects": { "ratchet_raiders": 2, "moral_implications": -3 },
    "cycle_impact": { "score": 0.2, "label": "Scam Revealed", "type": "social" }
  },
  {
    "id": "mushroom_spore_effects",
    "title": "Mushroom Spore Hallucinations",
    "time_ago": "Tonight",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "bones",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Mushroom spores cause shadows to act independently, revealing symbiotic possession effects.",
    "targets": ["bones", "toad_lee", "dan"],
    "effects": { "cosmic_jesters": -7, "mental_stability": -5 },
    "cycle_impact": { "score": 0.8, "label": "Spore Contamination", "type": "mystic" }
  },
  {
    "id": "legion_observer_protocol",
    "title": "Legion Observer Protocol Exposed",
    "time_ago": "Late Night",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "legion_scribe",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Legion scribe reveals official protocol was to observe the Grafting without intervention, making them complicit.",
    "targets": ["legion", "corvinarus", "hjumpik"],
    "effects": { "iron_legion": -20, "mages_guild": 10, "party_rage": 15 },
    "cycle_impact": { "score": 1.8, "label": "Institutional Complicity", "type": "political" }
  },
  {
    "id": "aurelian_chambers_secret",
    "title": "Aurelian's Chamber Breach",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "aurelian",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Aurelian's chambers show signs of intrusion and the flower bed is singing, indicating the Orange Heir's awakening is imminent.",
    "targets": ["aurelian", "orange_heir", "intruder"],
    "effects": { "cosmic_jesters": -10, "manor_security": -5 },
    "cycle_impact": { "score": 1.4, "label": "Heir Awakening", "type": "mystic" }
  },
  {
    "id": "cannonball_basement",
    "title": "Cannonball Basement Retrieval",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "wario",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Wario locates the cannonball in a living basement maze, complicating retrieval efforts.",
    "targets": ["wario", "hjumpik", "basement_defenses"],
    "effects": { "ratchet_raiders": -3, "gear_retrieval": -5 },
    "cycle_impact": { "score": 0.5, "label": "Lost Equipment", "type": "utility" }
  },
  {
    "id": "grafting_entropy_cost",
    "title": "Grafting Entropy Price",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "dan",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Dan identifies the egg scream's hunger as entropy itself, revealing the Grafting's true cost is causality.",
    "targets": ["dan", "aurelian", "party_knowledge"],
    "effects": { "mages_guild": 10, "cosmic_jesters": -15 },
    "cycle_impact": { "score": 1.6, "label": "Ritual Cost Revealed", "type": "mystic" }
  },
  {
    "id": "waluigi_under_desk_reason",
    "title": "Waluigi's Under-Desk Hiding",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "waluigi",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Waluigi reveals he hid under the desk because the floor developed eyes, showing the manor's increasing sentience.",
    "targets": ["waluigi", "wario", "manor_consciousness"],
    "effects": { "cosmic_jesters": -3, "sanity": -5 },
    "cycle_impact": { "score": 0.6, "label": "Manor Manifestation", "type": "mystic" }
  },
  {
    "id": "present_box_timer",
    "title": "Present Box Temporal Lock",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "wario",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "The ticking present box has been counting up for 722 years, set to open on a specific Corvinarus date.",
    "targets": ["wario", "aurelian", "orange_heir"],
    "effects": { "cosmic_jesters": -10, "manor_integrity": -15 },
    "cycle_impact": { "score": 1.5, "label": "Temporal Bomb", "type": "mystic" }
  },
  {
    "id": "satyr_song_death_prediction",
    "title": "Satyr Death Prophecy",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "toad_lee",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "A satyr's prophetic song predicts Toad Lee's involvement in the Grafting's final moment, creating personal stakes.",
    "targets": ["toad_lee", "satyrs", "orange_heir"],
    "effects": { "personal_stakes": 10, "cosmic_jesters": 3 },
    "cycle_impact": { "score": 0.8, "label": "Fey Prediction", "type": "mystic" }
  },
  {
    "id": "brass_knuckles_test",
    "title": "Wario's Brass Knuckles Demo",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "hjumpik",
    "arc": "feywild_attic",
    "arcPosition": "steady",
    "description": "Hjumpik tests Wario's brass knuckles, discovering they compel respect from the living manor itself.",
    "targets": ["hjumpik", "wario", "manor_walls"],
    "effects": { "ratchet_raiders": 2, "manor_respect": 5 },
    "cycle_impact": { "score": 0.4, "label": "Weapon Demonstration", "type": "combat" }
  },
  {
    "id": "three_manor_sync",
    "title": "Three Manor Synchronization",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "bowser",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Bowser confirms Shadeward manor is syncing with Feyward, indicating the three threads are pulling taut for convergence.",
    "targets": ["bowser", "archie", "three_manors"],
    "effects": { "iron_legion": -10, "mages_guild": 5, "party_urgency": 10 },
    "cycle_impact": { "score": 1.7, "label": "Planar Convergence", "type": "mystic" }
  },
  {
    "id": "oracle_vessel_identity",
    "title": "Oracle Vessel True Nature",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "sylvaria",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "Sylvaria reveals the Vessel is the Grafting ritual itself, a living bridge between planes that is waking up.",
    "targets": ["sylvaria", "oracle", "grafting_ritual"],
    "effects": { "mages_guild": 15, "cosmic_jesters": -20, "party_desperation": 10 },
    "cycle_impact": { "score": 2.0, "label": "Revelation", "type": "mystic" }
  },
  {
    "id": "final_battle_prep",
    "title": "Attic Assault Preparation",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 27 },
    "instigator": "toad_lee",
    "arc": "feywild_attic",
    "arcPosition": "climax",
    "description": "Party prepares for simultaneous confrontation with dragonfly, Archive, and the awakening Orange Heir in the attic.",
    "targets": ["toad_lee", "hjumpik", "wario", "remi", "salam"],
    "effects": { "combat_readiness": 10, "manor_stability": -15 },
    "cycle_impact": { "score": 1.8, "label": "Final Confrontation", "type": "combat" }
  },  
    {
    "id": "statue_memory_lock",
    "title": "Memory Statue Activates",
    "time_ago": "Early Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "hjumpik",
    "arc": "feywild_attic",
    "arcPosition": "escalating",
    "description": "The courtyard statue only responded to one person. Everyone else who touched it saw nothing. The memory shown was dated 988 BF.",
    "targets": ["hjumpik", "toad_lee", "aurelian_corvinarus"],
    "effects": { "iron_legion": 10, "cosmic_jesters": 5 },
    "cycle_impact": { "score": 1.8, "label": "Keyed Memory", "type": "mystic" }
  },
  {
    "id": "grafting_rumor_confirmed",
    "title": "The Grafting Ritual Confirmed",
    "time_ago": "Mid Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "legion_scribe",
    "arc": "raventree_manor",
    "arcPosition": "rising",
    "description": "Legion archives confirm a procedure codenamed THE GRAFTING was performed in 988. All operational notes are fully redacted.",
    "targets": ["iron_legion", "corvinarus_line"],
    "effects": { "iron_legion": 15, "mages_guild": 10, "onyx_hand": -5 },
    "cycle_impact": { "score": 2.1, "label": "Buried Ritual", "type": "cosmic" }
  },
  {
    "id": "wario_vampire_wine_distribution",
    "title": "Wario Is Selling Wine",
    "time_ago": "Mid Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "wario",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Wario has begun distributing vintage wine of uncertain origin. Multiple people have reported paladins suddenly becoming hostile after consumption.",
    "targets": ["wario", "remi", "archie"],
    "effects": { "cosmic_jesters": 10, "silver_flame": -15 },
    "cycle_impact": { "score": 1.1, "label": "Cursed Commodity", "type": "economic" }
  },
  {
    "id": "guest_list_disappears",
    "title": "Guest List Vanishes",
    "time_ago": "Late Morning",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "unknown",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Lady Aurelian's official guest list was stolen from her front door. No one has claimed responsibility.",
    "targets": ["aurelian_corvinarus", "wario", "waluigi"],
    "effects": { "aurelian_corvinarus": -10 },
    "cycle_impact": { "score": 1.3, "label": "Missing Names", "type": "political" }
  },
  {
    "id": "circle_smudged",
    "title": "Planar Circle Damaged",
    "time_ago": "Noon",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "wario",
    "arc": "raventree_manor",
    "arcPosition": "escalating",
    "description": "A half-completed ritual circle was destroyed when someone shoulder-bashed through a locked door. Work that took three days is now lost.",
    "targets": ["wario", "aurelian_corvinarus", "hjumpik"],
    "effects": { "aurelian_corvinarus": -20, "cosmic_jesters": 5 },
    "cycle_impact": { "score": 2.4, "label": "Ritual Delay", "type": "mystic" }
  },
  {
    "id": "three_eyed_mage_sighting",
    "title": "Three Eyed Mage Description",
    "time_ago": "Noon",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "hjumpik",
    "arc": "shadowfell_estate",
    "arcPosition": "reopening",
    "description": "A description matching Archive has been circulating. Multiple sources confirm clones are active across all three manors.",
    "targets": ["hjumpik", "archive", "darius_corvinarus"],
    "effects": { "onyx_hand": 10, "mages_guild": 15 },
    "cycle_impact": { "score": 2.7, "label": "Returning Threat", "type": "conflict" }
  },
  {
    "id": "satyr_balcony_jump",
    "title": "Satyr Fall Incident",
    "time_ago": "Early Afternoon",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "unnamed_satyr",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "A satyr consumed an experimental mushroom and jumped from the third floor balcony. No body was recovered.",
    "targets": ["toad_lee", "satyr_collective"],
    "effects": { "aurelian_corvinarus": -5, "mushroom_regency": 10 },
    "cycle_impact": { "score": 0.9, "label": "Party Casualty", "type": "social" }
  },
  {
    "id": "bowser_lost_in_void",
    "title": "Bowser Status Unconfirmed",
    "time_ago": "Mid Afternoon",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "bowser",
    "arc": "shadowfell_estate",
    "arcPosition": "unresolved",
    "description": "Bowser has been heard yelling across planar voids demanding Wario answer for storage fees. He has not yet located his current position.",
    "targets": ["bowser", "wario"],
    "effects": { "wario": -10, "cosmic_jesters": 15 },
    "cycle_impact": { "score": 1.4, "label": "Interplanar Debt Collection", "type": "economic" }
  },
  {
    "id": "orange_heir_prophecy",
    "title": "Orange Heir Prophecy Surfaces",
    "time_ago": "Mid Afternoon",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "legion_scribe",
    "arc": "raventree_manor",
    "arcPosition": "rising",
    "description": "A lost legion prophecy has been circulating: 'The heir will bind vine and scale. The manor will obey. Then devour.'",
    "targets": ["orangus_corvinarus", "corvinarus_line"],
    "effects": { "iron_legion": 20, "aurelian_corvinarus": -10, "kryn": 15 },
    "cycle_impact": { "score": 3.0, "label": "Prophecy Trigger", "type": "cosmic" }
  },
  {
    "id": "wario_bomb_preparation",
    "title": "Wario Prepares Gift",
    "time_ago": "Late Afternoon",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "wario",
    "arc": "feywild_attic",
    "arcPosition": "imminent",
    "description": "Wario has been observed climbing towards the attic with a festively wrapped box that makes a distinct ticking sound. He insists it is not a bomb.",
    "targets": ["wario", "giant_dragonfly", "aurelian_corvinarus"],
    "effects": { "aurelian_corvinarus": -15, "cosmic_jesters": 20 },
    "cycle_impact": { "score": 2.2, "label": "Impending Demolition", "type": "conflict" }
  },
  {
    "id": "usk_sighting",
    "title": "Usk Sighted In Mirrors",
    "time_ago": "Late Afternoon",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "usk",
    "arc": "raventree_manor",
    "arcPosition": "rising",
    "description": "Multiple people have reported seeing a fog elf watching them through reflective surfaces. He answers to the name Usk.",
    "targets": ["usk", "rakasha"],
    "effects": { "sylvaria": 10 },
    "cycle_impact": { "score": 1.7, "label": "Void Messenger", "type": "mystic" }
  },
  {
    "id": "rust_monster_iron_harvest",
    "title": "Ritual Material Hack Discovered",
    "time_ago": "Evening",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "rust_monk",
    "arc": "raventree_manor",
    "arcPosition": "rising",
    "description": "It has been confirmed that rust monster droppings make perfectly serviceable iron dust for ritual circles. Harvesting operations are now underway.",
    "targets": ["rust_monk", "toad_lee", "hjumpik"],
    "effects": { "liberated_toads": 15 },
    "cycle_impact": { "score": 1.5, "label": "Resource Discovery", "type": "economic" }
  },
  {
    "id": "vines_are_listening",
    "title": "Manor Vines Confirmed Sentient",
    "time_ago": "Evening",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "dan",
    "arc": "feywild_attic",
    "arcPosition": "rising",
    "description": "Official warning: all conversations within the manor are being heard by the walls. Stop saying names out loud.",
    "targets": ["aurelian_corvinarus", "all_residents"],
    "effects": { "aurelian_corvinarus": 10 },
    "cycle_impact": { "score": 1.6, "label": "Operational Security Breach", "type": "social" }
  },
  {
    "id": "waluigi_wah",
    "title": "Waluigi Issues Statement",
    "time_ago": "One Hour Ago",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "waluigi",
    "arc": "feywild_attic",
    "arcPosition": "stable",
    "description": "Waluigi has released an official statement. It reads in full: wah.",
    "targets": ["waluigi"],
    "effects": { "cosmic_jesters": 25, "every_other_faction": 5 },
    "cycle_impact": { "score": 5.0, "label": "Wah", "type": "cosmic" }
  },
  {
    "id": "dragonfly_hunt_commences",
    "title": "Attic Hunt Begins",
    "time_ago": "Minutes Ago",
    "date": { "year": 1040, "monthIndex": 6, "day": 26 },
    "instigator": "wario",
    "arc": "feywild_attic",
    "arcPosition": "imminent",
    "description": "Wario has begun his ascent to the attic. His last words before climbing out of sight were 'if I explode blame the door'.",
    "targets": ["wario", "toad_lee", "giant_dragonfly"],
    "effects": {},
    "cycle_impact": { "score": 2.8, "label": "Pending Event", "type": "conflict" }
  },
  {
  "id": "haunted_mansion_mystery",
  "title": "Haunted Mansion Mystery",
  "date": { "day": 24, "monthIndex": 6, "year": 1040 },
  "isEvent": true,
  "instigator": "archie",
  "arc": "feywild_attic",
  "arcPosition": "climax",
  "description": "Deep within the fog-choked halls of Raven Tree Manor, the air thick with the scent of old blood and mildew, Green T found himself trapped behind a jammed window on the third floor. Archie had cast a desperate disguise spell—morphing into the guise of a harried clerk with ink-stained fingers and a ledger under one arm—to bluff past the vampire sentries below. The spell held under pressure, sustained not by focus on his true form but by the mundane mantra: 'paperwork matters.' When the undead patrol drew too close, Archie hissed 'we’re going' and vanished into the shadows, leaving Green T pinned against the warped sill. Green T ducked into a dusty wardrobe, heart hammering, whispering a vow: if he survived the night, he would be petty forever. Archie returned moments later, cloak singed, eyes wide—'I came back. Petty later.' Hjumpik’s voice crackled through a scrying mirror from afar: 'Survive first. Pettiness is earned.' The manor itself seemed to breathe, walls shifting, mirrors reflecting faces that weren’t there. The disguise spell flickered once, twice—then held. The vampires passed below, sniffing the air, searching for the living who dared trespass. In the silence that followed, the group learned a hard truth: in Raven Tree, survival demands method acting, steady breath, and the willingness to become someone else entirely.",
  "targets": ["green_t", "archie", "hjumpik", "waluigi", "toad_lee"],
  "effects": { "raven_tree_manor": -28, "vampire_sentiment": -15, "corvinarus_house": +10 },
  "cycle_impact": { "score": 3.9, "label": "manor infiltration breach", "type": "critical" }
},
{
  "id": "corvinarus_lineage",
  "title": "Corvinarus Lineage",
  "date": { "day": 26, "monthIndex": 6, "year": 1040 },
  "isEvent": true,
  "instigator": "lady_aurelian",
  "arc": "feywild_attic",
  "arcPosition": "climax",
  "description": "Lady Aurelian’s voice cut through the midnight halls like a blade: the Orange Heir walks among us no longer kin, but a festering wound cloaked in her uncle’s stolen flesh. It hungers for the sacred bathhouse waters—not to cleanse, but to drown the entire ward in rivers of its own corrupted blood, unmaking stone, bloodline, and soul in one crimson tide. The mirrors have aligned; it leaps between reflections, a shadow unbound by walls. Minutes remain before it reaches the steaming pools. Fire alone may sear the impostor from existence—yet even flame fears what the water will birth if the Heir touches its surface. The house trembles. The lineage bleeds. Do not let it near the water.",
  "targets": ["lady_aurelian", "hjumpik", "archie", "waluigi", "toad_lee"],
  "effects": { "corvinarus_house": -35,  "mirror_realm": +12 },
  "cycle_impact": { "score": 4.8, "label": "lineage unmaking", "type": "catastrophic" }
},  
{
  "id": "dragon_egg_scream",
  "title": "Dragon Egg Scream",
  "date": { "day": 26, "monthIndex": 6, "year": 1040 },
  "isEvent": true,
  "instigator": "oracle",
  "arc": "feywild_attic",
  "arcPosition": "climax",
  "description": "High in the shattered spire, the Oracle spoke the forbidden syllables. A dragon egg—black as void, veined with molten gold—unleashed a scream that tore reality like wet parchment. Corvinarus, in desperate ritual, sliced their own palm first, blood feeding the prophecy instead of the beast within. The egg did not hatch a dragon. It birthed a fracture: time bled backward and forward, past and future collapsing into one endless now. Those who touched the weeping statue or climbed its walls (eighteen feet, they say) became echoes trapped between dimensions. The Faeward Team entered as six; only twenty-five returned. The scream still rings in their bones. We are not in a dying realm—we are inside the scream itself, and the egg was never meant to be born, only to remind us we were never meant to escape the story.",
  "targets": ["bowser", "green_t", "bones", "wario"],
  "effects": { "regal_empire": -20, "moonfang_pack": -5 },
  "cycle_impact": { "score": 4.2, "label": "dragon cry catastrophe", "type": "catastrophic" }
},  
  {
    id: 'greenhouse_monsters',
    title: "Ghostly Garden",
    date: { day: 26, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'markop',
    arc: 'shadowfell_estate',
    arcPosition: 'climax',
    description: "The group confronts spectral intruders in the manors greenhouse as toads and servants turn hostile after witnessing the wraiths. Dan unleashes divine smite in a desperate attempt to end the threat but fails as the wraithes grow enraged and begin to consume the gardens magic. The ring fragment left behind hints at a deeper conspiracy tied to the Iron Legion and a sleeper agent named Toadburt.",
    targets: ['dan', 'remi', 'eager', 'salam'],
    effects: { liberated_toads: -5, manor_guard: -2, onyx_hand: -8 },
    cycle_impact: { score: 3.5, label: "cursed garden", type: "horror" }
  },
    {
    id: 'ghost_gate_trap',
    title: "Ghost Gate Trap",
    date: { day: 26, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'captain_toadette',
    arc: 'shadowfell_estate',
    arcPosition: 'climax',
    description: "Remi stumbled into the greenhouse and triggered a trap that pulled her into a pulsing maze of glowing cracks and whispering leaves. Markop, ever the skeptic, tried to warn her but was too late—now he’s trapped with her in a sentient house that answers only to the color blue. The tablet’s crack is alive and it’s laughing.",
    targets: ['remi', 'markop', 'captain_toadette', 'green_t'],
    effects: { fawfuls_fury: -10, wario_inc: -8 },
    cycle_impact: { score: 3.5, label: "haunted_house_crisis", type: "horror" }
  },
   {
    id: 'purple_legion_mystery',
    title: "Purple Legion Mystery",
    date: { day: 26, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'ryan',
    arc: 'shadowfell_estate',
    arcPosition: 'introduction',
    description: "A shadowed figure in purple armor vanished from the ruins of the Old Observatory leaving behind only a whispering stone tablet. The Purple Legion’s true purpose is now a whispered fear among all who dare speak of the night sky.",
    targets: ['ryan', 'archie', 'bowser', 'toad_lee', 'eager', 'fawful'], 
    effects: { purple_legion: -10, iron_legion: -5, liberated_toads: 3 },
    cycle_impact: { score: 4.2, label: "Mystic Crisis", type: "mystic" }
  },      
{
        id: 'fey_manor_service',
        title: "Servants of the Lady",
        date: { day: 25, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'lady_aurelian',
        arc: 'feywild_attic',
        arcPosition: 'rising',
        description: "Trapped in the Feywild Manor, Hjumpik and his companions have been coerced into service by Lady Aurelian. They have evicted squatting Satyrs, navigated trapped guest rooms, and are now tasked with clearing the upper floors of dangerous 'pests' (giant butterflies). The Lady has hinted that their freedom depends on their performance.",
        targets: ['hjumpik', 'waluigi', 'toad_lee', 'lady_aurelian'],
        effects: {
            cosmic_jesters: 15,
            ratchet_raiders: 10,
            feywild_grove: -5
        },
        cycle_impact: { score: 0.8, label: "Forced Labor", type: "social" }
    },  
  {
    id: 'midnight_gate_transit',
    title: "Midnight Gate Spike",
    time_ago: "This Morning",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'mages_guild_scryer',
    arc: 'mage_guild_investigations',
    arcPosition: 'rising',
    description: "The Mage’s Guild detected an unauthorized Midnight Gate activation in the Eastern Maze and dispatched observers.",
    targets: ['mages_guild', 'unknown_travelers'],
    effects: { mages_guild: 10, onyx_hand: -5, mushroom_regency: -2 },
    cycle_impact: { score: 0.8, label: "Unauthorized Transit", type: "mystic" }
  },
  {
    id: 'feywild_attic_dinner',
    title: "Dinner at Autumnwood Manor",
    time_ago: "Today",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'orangus_cornelious',
    arc: 'feywild_attic',
    arcPosition: 'rising',
    description: "A controlled dinner with curated guests reveals a struggle for succession, with guards enforcing etiquette as law.",
    targets: ['orangus_cornelious', 'archie', 'markop', 'remi', 'bowser'],
    effects: { onyx_hand: 5, mages_guild: 5, mushroom_regency: -5 },
    cycle_impact: { score: 1.2, label: "Succession Dinner", type: "political" }
  },
  {
    id: 'bat_wall_passage',
    title: "Bat Transport Passage Exposed",
    time_ago: "Early Morning",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'eager',
    arc: 'feywild_attic',
    arcPosition: 'rising',
    description: "A hidden wall-route reserved for bat transit was discovered, triggering a guard pincer search inside the manor.",
    targets: ['eager', 'markop', 'manor_guards'],
    effects: { orangus_cornelious: -5, mages_guild: 2 },
    cycle_impact: { score: 0.6, label: "Secret Passage", type: "social" }
  },
  {
    id: 'headless_dancers_brawl',
    title: "Headless Dancers Incident",
    time_ago: "Early Morning",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'remi',
    arc: 'feywild_attic',
    arcPosition: 'rising',
    description: "Remi engaged animated headless dancers in a corridor, drawing attention and escalating patrol behavior.",
    targets: ['remi', 'headless_dancers', 'manor_guards'],
    effects: { orangus_cornelious: -10 },
    cycle_impact: { score: 0.7, label: "Manor Disturbance", type: "social" }
  },
  {
    id: 'ghost_possession_dispute',
    title: "Possession Dispute",
    time_ago: "Early Morning",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'ghost_foyer',
    arc: 'feywild_attic',
    arcPosition: 'rising',
    description: "A ghost attempted possession; arguments about 'ghost nature' nearly became open conflict until a bribe settled it.",
    targets: ['usk', 'remi', 'markop', 'ghost_foyer'],
    effects: { orangus_cornelious: -5, onyx_hand: 2 },
    cycle_impact: { score: 0.5, label: "Paranormal Escalation", type: "mystic" }
  },
  {
    id: 'usk_notes_confiscation',
    title: "Usk Arrested for Notes",
    time_ago: "This Morning",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'guard_captain',
    arc: 'mage_guild_investigations',
    arcPosition: 'rising',
    description: "Manor guards arrested Usk for possession of sensitive notes, aiming to secure him before the Mage’s Guild could intervene.",
    targets: ['usk', 'manor_guards', 'mages_guild'],
    effects: { mages_guild: 10, orangus_cornelious: -3 },
    cycle_impact: { score: 1.0, label: "Evidence Seizure", type: "political" }
  },
  {
    id: 'perrius_false_assassination_plan',
    title: "Perrius' Fake Assassination Request",
    time_ago: "Late Morning",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'perrius_annmatar',
    arc: 'feywild_attic',
    arcPosition: 'climax',
    description: "Perrius pressured Markop and Remi to stage a fake killing of the manor host—apparently as 'theater' to redirect real threats.",
    targets: ['perrius_annmatar', 'markop', 'remi', 'orangus_cornelious'],
    effects: { orangus_cornelious: -10, onyx_hand: 5 },
    cycle_impact: { score: 1.1, label: "Assassination Theater", type: "political" }
  },
  {
    id: 'shadowfell_dinner_massacre',
    title: "The Dinner of Damned Souls",
    date: { day: 23, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'green_t',
    arc: 'raventree_manor',
    arcPosition: 'climax',
    description: "Chaos erupted at Raventree Manor's Shadowfell reflection during a diplomatic banquet. Witnesses report Archie Miser voting for an archivist's death before severing a prisoner's finger, while Green T assassinated the host, Orangus Cornelius, with a silver bullet. The heir apparent, 'Vivesna', was revealed to be a male thrall named Vivian.",
    targets: ['orangus_cornelius', 'archie', 'green_t', 'vivian'],
    effects: { onyx_hand: -40, liberated_toads: -20, corvinarus_lineage: -50 },
    cycle_impact: { score: 5.0, label: "planar regicide", type: "supernatural" }
  },
  {
    id: 'wario_tome_heist',
    title: "The Tome Heist",
    date: { day: 24, monthIndex: 6, year: 1040 },
    isEvent: false,
    instigator: 'wario',
    arc: 'early_adventures',
    arcPosition: 'rising_action',
    description: "The notorious Wario intercepted a magical transaction involving the 'Toad Squad' (Embercap, Dewdrop, Erick). He assaulted the group in a magic shop, stole a 'Tome of Evil' valued at 20,000 coins, and escaped by transforming into a bat, leaving the toads with the debt and injuries.",
    targets: ['wario', 'embercap', 'rakasha'],
    effects: { liberated_toads: -10, wario: +20 },
    cycle_impact: { score: 2.0, label: "grand larceny", type: "criminal" }
  },
  {
    id: 'bryan_prison_riot',
    title: "The Riot at Grilly's Bar",
    date: { day: 25, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'bryan',
    arc: 'toad_liberation',
    arcPosition: 'rising_action',
    description: "Bryan, acting on orders from the 'Toad God', incited a massive riot at a penal colony on Prison Island. Reports indicate he threw a Legion mage into molten slag at Grilly's Bar and maimed a guard to secure access to the Temple of the Stars.",
    targets: ['bryan', 'iron_legion'],
    effects: { iron_legion: -15, peach_loyalists: +15 },
    cycle_impact: { score: 3.5, label: "prison break", type: "political" }
  },
  {
    id: 'mole_hunt_raventree',
    title: "The Mole of Raventree",
    date: { day: 28, monthIndex: 7, year: 1040 },
    isEvent: true,
    instigator: 'speaker_l',
    arc: 'toad_liberation',
    arcPosition: 'falling_action',
    description: "An assassination attempt on the recovering Archie Miser was thwarted in the material plane's Raventree Manor. Speaker L and Bones intercepted a Legion 'Mole' who attempted to kill Archie in his bed. The assailant was captured with assistance from Luigi's Poltergust.",
    targets: ['speaker_l', 'bones', 'archie'],
    effects: { iron_legion: -10, liberated_toads: +20 },
    cycle_impact: { score: 3.0, label: "counter-espionage", type: "political" }
  },
{
  id: 'wario_presence',
  title: "Wario's Fingerprints",
  time_ago: "Unknown",
  date: { year: 1040, monthIndex: 6, day: 22 },
  instigator: 'wario',
  arc: 'raventree_manor',
  arcPosition: 'rising',
  description: "An expired coupon found in the Oracle's lab coat pocket bears a phone number ending in -W and the words 'Call me.' Evidence suggests Wario conducted business at Raventree Manor before the fracture—possibly selling equipment, acquiring specimens, or brokering a deal with the Oracle. His involvement implies a black-market supply chain for the vessel experiments.",
  targets: ['wario', 'oracle', 'remi', 'markop'],
  effects: { 
    oracle: -5, 
    black_market: 10, 
    wario_enterprises: 5,
    party_agency : -3 
  },
  cycle_impact: { score: 0.8, label: "Shady Dealings", type: "economic" }
},  
  {
    id: 'poison_candy_plot',
    title: "Candy as a Weapon",
    time_ago: "Afternoon",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'remi',
    arc: 'feywild_attic',
    arcPosition: 'rising',
    description: "A poison-candy scheme circulated during dinner, with candy passing through guards and becoming a loyalty test.",
    targets: ['remi', 'archie', 'orangus_cornelious', 'manor_guards'],
    effects: { orangus_cornelious: -5, mushroom_regency: -2 },
    cycle_impact: { score: 0.9, label: "Poison Incentive", type: "mystic" }
  },
  {
    id: 'guestbook_reveals',
    title: "Guestbook Names Confirmed",
    time_ago: "Early Morning",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'toadburt',
    arc: 'feywild_attic',
    arcPosition: 'rising',
    description: "The foyer guestbook confirmed invited presence: Archie Miser and Toadburt, implying premeditated expectations for key arrivals.",
    targets: ['archie', 'toadburt', 'orangus_cornelious'],
    effects: { orangus_cornelious: 3, onyx_hand: 2 },
    cycle_impact: { score: 0.4, label: "Invitation Proof", type: "social" }
  },
  {
    id: 'green_t_escape',
    title: "Green T Slip-Out",
    time_ago: "Afternoon",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'green_t',
    arc: 'feywild_attic',
    arcPosition: 'rising',
    description: "During a confrontation over Eager’s attempted exit, Green T escaped while attention was split between Archie, Bowser, and the guards.",
    targets: ['green_t', 'eager', 'manor_guards'],
    effects: { orangus_cornelious: -7, mages_guild: 3 },
    cycle_impact: { score: 0.6, label: "Security Breach", type: "social" }
  },
  {
    id: 'orangus_succession_knives',
    title: "Succession Attracts Knives",
    time_ago: "Afternoon",
    date: { year: 1040, monthIndex: 6, day: 22 },
    instigator: 'orangus_cornelious',
    arc: 'feywild_attic',
    arcPosition: 'climax',
    description: "Orangus publicly framed the dinner as a succession crisis with multiple factions present—heir, child, Onyx Hand, Mage’s Guild—turning etiquette into threat assessment.",
    targets: ['orangus_cornelious', 'archie', 'mages_guild', 'onyx_hand'],
    effects: { orangus_cornelious: -10, onyx_hand: 10, mages_guild: 10 },
    cycle_impact: { score: 1.4, label: "Succession Crisis", type: "political" }
  },  
  {
    "id": "planar_fracture_crisis",
    "title": "The Fracture of Raventree",
    "date": { "day": 23, "monthIndex": 6, "year": 1040 },
    "isEvent": true,
    "instigator": "oracle",
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
    "instigator": "oracle",
    "arc": "raventree_manor",
    "arcPosition": "revelation",
    "description": "Evidence uncovered by Remi and Markop in the Fractured Atrium reveals the 'Oracle' is actually a necromantic researcher attempting to build a perfect vessel. The crystals protecting the manor were placed by the Mages' Guild to keep a monster IN, not out.",
    "targets": ["oracle", "markop", "remi", "mages_guild"],
    "effects": {
      "party": -50,
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
    "instigator": "oracle",
    "arc": "raventree_manor",
    "arcPosition": "climax",
    "description": "A hidden laboratory in the Fractured Atrium contains vat-grown monstrosities and a central, magically shielded figure frozen in stasis. Notes indicate this 'Vessel' is meant to house a powerful soul (likely the merged Oracle entity). The creature is currently dormant, but the Oracle is pushing for the destruction of the 'Keepers' (Archie/Bowser's team) to power its awakening.",
    "targets": ["markop", "remi", "oracle"],
    "effects": {
      "necromancers_guild": 25,
      "bio_horrors": 20
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
      "liberated_toads": 20
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
      "liberated_toads": -10,
      "cosmic_jester": 40
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
      "green_t": 50,
      "onyx_hand": -20,
      "liberated_toads": 10
    },
    "cycle_impact": { "score": -0.5, "label": "Hero Rises", "type": "heroic" }
  }, 
  {
    id: 'onyx_hand_voting_chaos',
    title: "The Onyx Hand Vote",
    date: { day: 24, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'orangus_corenilous',
    arc: 'onyx_hand_revel',
    arcPosition: 'rising',
    description: "At a velvet-draped banquet in the Onyx Hand manor, Orangus Corenilous forced the guests into a timed vote: four minutes to discuss, then write a name. While a purple-glowing 'friendship bracelet' pulsed with entropy and Vostolas calmly recorded every whisper, suspicion erupted over a duplicated guest identity. Orangus slid a crystalline knife to Archie (posing as Darman) and demanded blood to prove belonging. Archie chose the butler Usk, and the table learned what kind of night this would become.",
    targets: ['orangus_corenilous', 'archie', 'markop', 'toadburt', 'vostolas_archivist', 'real_darman', 'usk_the_butler'],
    effects: {
      onyx_hand: 20,
      mages_guild: 5,
      iron_legion: -10,
      cosmic_jesters: 5
    },
    cycle_impact: { score: 1.6, label: "Blood on the Ballot", type: "intrigue" }
  },
  {
    id: 'oracle_assassination_escape',
    title: "The Shot That Broke the Revel",
    date: { day: 24, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'green_t',
    arc: 'onyx_hand_revel',
    arcPosition: 'climax',
    description: "A silver shot dropped the Oracle mid-dinner and turned the revel into a riot. Bowser’s flames surged through the hall, Kryn fed openly, and the supposed heir Vivesna was unmasked as Vivian—an ambitious thrall crossdressing for succession. In the confusion, Franklin moved to secure the entropy device. Archie and Green T escaped through a window into the manor’s shadowed grounds, choosing rescue and regrouping over surrender as guards began rounding up survivors.",
    targets: ['green_t', 'archie', 'bowser', 'kryn_corvinarus', 'vivian_man_shadow', 'franklin_mages', 'vampire_guard_captain'],
    effects: {
      onyx_hand: -15,
      vampires: -25,
      mages_guild: 10,
      cosmic_jesters: 25
    },
    cycle_impact: { score: 3.1, label: "The Revel Shatters", type: "betrayal" }
  },
  {
    id: 'road_to_infirmary',
    title: "Flight to the Abandoned Infirmary",
    date: { day: 29, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'archie',
    arc: 'onyx_hand_revel',
    arcPosition: 'fallout',
    description: "After escaping the manor grounds, Archie and Green T attempted to reach an airship—only to discover distance itself felt unreliable. Over several days they passed into a Midland town where unfamiliar currency, a watchful shopkeeper, and a suspicious magpie hinted the world was still tracking them. As rain finally broke hard and cold, they took shelter in an abandoned infirmary, uncertain whether they had fled the revel… or simply entered its next room.",
    targets: ['archie', 'green_t', 'shopkeeper_midland'],
    effects: {
      onyx_hand: 0,
      mages_guild: 0,
      ratchet_raiders: 5,
      raventree_curse: 5
    },
    cycle_impact: { score: 1.2, label: "Distance Becomes Strange", type: "escape" }
  },  
{
        id: 'fey_greenhouse_sanctuary',
        title: "Sanctuary in the Greenhouse",
        date: { day: 22, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'hjumpik',
        arc: 'feywild_attic',
        arcPosition: 'rising',
        description: "Fleeing the Hag's Hut, Hjumpik's group found temporary refuge in a magical greenhouse guarded by sprites. Waluigi received magical healing (painfully), and the group learned of the 'Orange Heir' hosting a grand event in the manor. The sprites' obliviousness to the horrors outside suggests they are either enchanted or willfully ignorant.",
        targets: ['hjumpik', 'waluigi', 'toad_lee', 'fey_sprite_guide'],
        effects: {
            cosmic_jesters: 10,
            ratchet_raiders: 5,
            raventree_curse: -5
        },
        cycle_impact: { score: 0.5, label: "Safe Haven Found", type: "exploration" }
    },
    {
        id: 'theater_of_the_lost',
        title: "The Theater of the Lost",
        date: { day: 23, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'hjumpik',
        arc: 'feywild_attic',
        arcPosition: 'climax',
        description: "Hjumpik, Waluigi, and Toad Lee infiltrated the manor's party in search of the 'Master'. They encountered Perrius Annmatar, who urged them to sever the Corvinarus bloodline to escape. After Rakasha disappeared under mysterious circumstances, the group tracked a 'beast-like guest' to the manor's private theater, discovering it was not who they expected. The stage is set for a confrontation.",
        targets: ['hjumpik', 'rakasha_spirit_walker', 'perrius_annmatar', 'orange_toad_heir'],
        effects: {
            mages_guild: -15,
            iron_legion: 5,
            cosmic_jesters: 20
        },
        cycle_impact: { score: 2.0, label: "The Reveal", type: "mystery" }
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
        targets: ['bowser', 'archie', 'orangus_cornelius', 'green_t'],
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
        date: { day: 22, monthIndex: 6, year: 1040 },
        isEvent: true,
        instigator: 'hjumpik',
        arc: 'feywild_attic', // UPDATED ARC
        arcPosition: 'rising',
        description: "While the main party battled the Wraith, a separate drama unfolded in the Manor's grounds. Hjumpik and the Rakasha Spirit Walker navigated the magical hedge maze, discovering the 'Midnight Gate'. They subsequently infiltrated the Hag's Hut, rescuing Waluigi and Toad Lee from a gruesome fate in her stew pot. The group barely escaped to the greenhouse.",
        targets: ['hjumpik', 'rakasha_spirit_walker', 'waluigi', 'toad_lee', 'hag_of_raventree'],
        effects: {
            liberated_toads: 15,
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
    instigator: 'archie',
    arc: 'aegis_riot',
    arcPosition: 'aftermath',
    description: "Archie Miser wonders aloud about the fate of 100+ escaped toads amid the chaos, hoping the Legion hasn't recaptured them. Escaped prisoners quickly correct him: 147 freed thanks to Speaker Rivers, mocking Archie's mirror-punching distractions.",
    targets: ['archie', 'toad_prisoner_moss', 'dan_the_toad'],
    effects: {
      toad_prisoners: 5,
      speaker_network: 8,
      archie: -2
    },
    cycle_impact: { score: 0.6, label: "Escape Confirmation", type: "relief" }
  },  
  {
  "id": "archies_rogue_signal",
  "title": "The Rogue Signal",
  "date": { "day": 1, "monthIndex": 7, "year": 1040 },
  "isEvent": true,
  "instigator": "archie_miser",
  "arc": "raventree_aftermath",
  "arcPosition": "rising",
  "description": "A fragmented magical transmission was intercepted near the Midlands border. Analysts suggest Archie Miser, currently under Mages' Guild 'probation,' is attempting to bypass Guild scrying to contact the scattered crew of the Vigilance. The Iron Legion has heightened its border frequency monitoring in response.",
  "targets": ["archie_miser", "mages_guild", "iron_legion"],
  "effects": {
    "mages_guild": -10,
    "iron_legion": 15,
    "disaster_inc": 20
  },
  "cycle_impact": { "score": 3.0, "label": "Espionage Alert", "type": "political" }
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
    id: 'donkey_kong_crisis',
    title: "Donkey Kong Crisis",
    date: { day: 26, monthIndex: 6, year: 1040 },
    isEvent: true,
    instigator: 'wario',
    arc: 'donkey_kong_crisis',
    arcPosition: 'climax',
    description: "Wario uncovered the hidden coconut gun beneath the ruins of the old Kong Palace and seized it as proof of Donkey Kongs betrayal. He declared it a weapon of rebellion and staged a public spectacle to discredit the DK Crew. The entire city of Toad Town fell into chaos as rumors spread of a royal conspiracy.",
    targets: ['donkey_kong', 'wario', 'bowser', 'waluigi'],
    effects: { dk_crew: -30, liberated_toads: -10 },
    cycle_impact: { score: 4.5, label: "royal betrayal", type: "political" }
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
            liberated_toads: 10,
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
      "party_agency": -10,
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
,
  {
    id: "mazebound_grove_unraveling",
    title: "Mazebound Grove Unraveling",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "mazebound",
    arc: "feywild_attic_dinner",
    arcPosition: "confrontation",
    description: "A group of mazebounds, led by a theatrical and hostile figure, ambushes a party in a cursed grove filled with shadow crows, decaying obelisks, and a tree of hanging corpses. The grove is revealed to be a ritual site tied to Archie’s Third Eye Escape, with artifacts including a circlet that protects against dimensional fractures. The party is forced to fight, with Dan recognizing a mazehound as a possible clone of Archie, and Bowser’s arrival triggers a fire that reveals the grove’s true nature. The mazebounds sing a patter-song to divide and conquer, while Remi, Salam, and Eager fight to escape, culminating in a chaotic, theatrical battle that ends with the party’s survival but the grove’s secrets exposed.",
    targets: ["remi", "salam", "eager", "dan", "markop", "bowser"],
    effects: {
        feywild_attic_dinner: -20
    },
    cycle_impact: {
        score: 3.1,
        label: "political tension",
        type: "political"
    }
}
,
  {
    id: "bones_spy_discovery",
    title: "Bones' Hidden Identity Revealed",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "archie_miser",
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "During a covert meeting at Archie's hideout, detailed field notes belonging to an unknown spy are discovered. The notes meticulously document the group's activities, raising suspicions about Bones' true allegiance.",
    targets: ["bones"],
    effects: {
        party: 10,
        pond_patrol: -15
    },
    cycle_impact: {
        score: 4.2,
        label: "distrust",
        type: "social"
    }
}
,
  {
    id: "raventree_manor_secrets",
    title: "Raventree Manor's Hidden Truths",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "thornbury",
    arc: "main",
    arcPosition: "rising_action",
    description: "Rumors swirl around Raventree Manor after Archie's discovery of a hidden journal and strange occurrences within the manor. Whispers speak of past tragedies, secret societies, and a connection to the Onyx Hand.",
    targets: ["guild", "onyx_hand"],
    effects: {
        guild_reputation: -10,
        onyx_hand_influence: 5
    },
    cycle_impact: {
        score: 3.2,
        label: "mystery",
        type: "political"
    }
}
,
  {
    id: "goblin_guard_incident",
    title: "Goblin Guard Ambush",
    date: {
        day: 28,
        monthIndex: 6,
        year: 1040
    },
    isEvent: true,
    instigator: "hjumpik",
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "Hjumpik and Toad Lee encounter a hostile goblin guard while exploring the manor. After a brief altercation, they manage to subdue the guard without killing him.",
    targets: ["goblin_guard_gregory"],
    effects: {
        iron_legion: -10
    },
    cycle_impact: {
        score: 1.5,
        label: "minor conflict",
        type: "social"
    }
}
,
  {
    id: "warios_solarium_explosive_entrance",
    title: "Wario's Explosive Entrance to the Solarium",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "warui",
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "Wario, seeking treasure in the manor's attic, accidentally triggers a trap while battling a Bramblefly. The explosion damages the Solarium and sends Wario plummeting to the floor below.",
    targets: ["warui", "bramblefly"],
    effects: {
        faction_name: 10
    },
    cycle_impact: {
        score: 3.2,
        label: "chaos and destruction",
        type: "political"
    }
}
,
  {
    id: "warios_wall_climb",
    title: "Wario's Unexpected Ascent",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "wario",
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "Wario attempted to scale a seemingly insurmountable wall but was aided by the unexpected assistance of Hjumpik. This unusual display of teamwork has sparked curiosity among onlookers.",
    targets: ["wario", "hjumpik"],
    effects: {
        general_public: 10
    },
    cycle_impact: {
        score: 1.2,
        label: "unpredictability",
        type: "social"
    }
},
  {
    id: "satyrs_iron_legion_song",
    title: "Satyrs Sing of the Iron Legion",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: null,
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "While traveling, the party encountered satyrs blocking their path. The satyrs sang a song about the Iron Legion, hinting at their potential involvement in the region.",
    targets: ["hjumpik", "toad_lee", "aurelian_corvinarus"],
    effects: {
        iron_legion_presence: 10
    },
    cycle_impact: {
        score: 3.2,
        label: "political tension",
        type: "political"
    }
},
  {
    id: "goblin_servant_quarters",
    title: "Goblin Infestation in Servant Quarters",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "hjumpik",
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "hjumpik and toad lee discovered damaged servant quarters in the manor, suggesting possible goblin habitation.",
    targets: ["hjumpik", "toad lee"],
    effects: {
        goblin_presence: 10
    },
    cycle_impact: {
        score: 1.5,
        label: "security breach",
        type: "political"
    }
},
  {
    id: "hjumpik_goblin_truce",
    title: "Goblin Guard and Hjumpik Make Peace",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "hjumpik",
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "Hjumpik managed to resolve a conflict with a goblin guard peacefully, avoiding a potential fight.",
    targets: ["goblin_guard"],
    effects: {
        goblin_faction: 10
    },
    cycle_impact: {
        score: 1.2,
        label: "diplomatic progress",
        type: "social"
    }
},
  {
    id: "aurelian_requests_materials",
    title: "Aurelian's Material Request",
    date: {
        day: 26,
        monthIndex: 7,
        year: 1040
    },
    isEvent: true,
    instigator: "aurelian_corvinarus",
    arc: "main_plot",
    arcPosition: "rising_action",
    description: "Aurelian Corvinarus approached hjumpik and requested bone, ash, chalk, and iron. The nature of his request remains unclear.",
    targets: ["hjumpik"],
    effects: {},
    cycle_impact: {
        score: 1.5,
        label: "political intrigue",
        type: "political"
    }
}
,
  {
    "id": "bowser_drags_markop",
    "title": "Bowser drags Markop away from danger",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Bowser chases after someone and drags Markop along, claiming they are running from an enemy. Markop is confused about the situation.",
    "instigator": "markop",
    "targets": [
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "travel/combat",
        "type": "travel"
    }
},
  {
    "id": "axe_thrown_at_door",
    "title": "An axe is thrown at the",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "While hiding, an axe is thrown at the door, indicating their pursuer is trying to break in.",
    "instigator": "unknown",
    "targets": [],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "vinvessa_enters_with_smoke",
    "title": "Vinvessa enters the room with blinding",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Vinvessa enters the room, creating blinding smoke. Markop deflects it and goes outside to face her.",
    "instigator": "markop",
    "targets": [
        "markop",
        "bowser",
        "vinvessa"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "markop_fights_vinvessa",
    "title": "Markop battles Vinvessa",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A battle ensues between Markop and Vinvessa. Bowser knocks Markop unconscious, but he recovers and fights back.",
    "instigator": "markop",
    "targets": [
        "markop",
        "vinvessa"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "vinvessa_casts_spell",
    "title": "Vinvessa casts a powerful spell on",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Vinvessa casts a red beam of disintegration at Markop, nearly killing him. He survives due to divine intervention.",
    "instigator": "markop",
    "targets": [
        "markop",
        "vinvessa"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "combat/magical",
        "type": "combat"
    }
},
  {
    "id": "remi_meets_toad",
    "title": "Remi meets a purple toad who",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi encounters a purple toad who informs her about Archie Miser and the consequences of not finding him.",
    "instigator": "remi",
    "targets": [
        "remi",
        "purple_toad"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social/discovery",
        "type": "social"
    }
},
  {
    "id": "remi_drinks_potion",
    "title": "Remi drinks a glowing potion offered",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A guard offers Remi a glowing potion to alleviate her sadness after claiming her friends are dead. She drinks it, causing her to glow brightly.",
    "instigator": "remi",
    "targets": [
        "remi",
        "guard"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/magical",
        "type": "social"
    }
},
  {
    "id": "remi_glows_brightly",
    "title": "Remi begins to glow radiantly",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "After drinking the potion, Remi starts glowing brightly, blinding those around her.",
    "instigator": "remi",
    "targets": [
        "remi"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "magical",
        "type": "magical"
    }
},
  {
    "id": "remi_searches_for_markop",
    "title": "Remi searches for Markop's body with",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi searches for Markop's body with the toads, encountering Pierce Anamatar and Kyrn along the way.",
    "instigator": "remi",
    "targets": [
        "remi",
        "eager",
        "dan",
        "salam"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "travel/discovery",
        "type": "travel"
    }
},
  {
    "id": "remi_discovers_toadburt",
    "title": "Remi discovers Toadburt in a library",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi finds Toadburt and Pierce Anamatar in a library. Toadburt mentions he has a meeting with the Archivist.",
    "instigator": "remi",
    "targets": [
        "remi",
        "toadburt",
        "pierce_anamatar"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "remi_overhears_toadburt_deal",
    "title": "Remi overhears Toadburt's deal with the",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi eavesdrops on a conversation between Toadburt and the Archivist. Toadburt agrees to work for the Archivist in exchange for healing.",
    "instigator": "remi",
    "targets": [
        "remi",
        "toadburt",
        "archivist"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/discovery",
        "type": "social"
    }
},
  {
    "id": "remi_meets_imps",
    "title": "Remi encounters imps who agree to",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi meets imps who offer to check the stairs in exchange for her help with a fallen bookshelf.",
    "instigator": "remi",
    "targets": [
        "remi",
        "imps"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social/discovery",
        "type": "social"
    }
},
  {
    "id": "remi_finds_markop",
    "title": "Remi reunites with Markop",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi finds Markop in the main lobby, reunited after being separated.",
    "instigator": "remi",
    "targets": [
        "remi",
        "markop"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/discovery",
        "type": "social"
    }
},
  {
    "id": "remi_gives_markop_wand",
    "title": "Remi gives Markop Vivian's wand",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi hands Markop Vivian's wand, which she found during her adventures.",
    "instigator": "remi",
    "targets": [
        "remi",
        "markop"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social/item exchange",
        "type": "social"
    }
},
  {
    "id": "guards_gather_around_party",
    "title": "Guards surround the party",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A large number of guards gather around the party, questioning them about Remi's glowing and their connection to Vivian.",
    "instigator": "markop",
    "targets": [
        "markop",
        "remi",
        "bowser",
        "toads"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/political",
        "type": "social"
    }
},
  {
    "id": "purple_toad_confesses",
    "title": "The purple toad confesses to giving",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The purple toad admits to giving Remi the potion, claiming it was meant to help her.",
    "instigator": "purple_toad",
    "targets": [
        "purple_toad",
        "remi"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/discovery",
        "type": "social"
    }
},
  {
    "id": "purple_toad_kidnapped",
    "title": "Purple Toad is kidnapped by Shadowfell",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The purple toad is apprehended by Shadowfell guards for practicing magic within the estate.",
    "instigator": "purple_toad",
    "targets": [
        "purple_toad",
        "shadowfell_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "combat/political",
        "type": "combat"
    }
},
  {
    "id": "remi_taken_to_infermary",
    "title": "Remi is taken to the infirmary",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi is escorted to the infirmary by guards, who claim they need to examine her.",
    "instigator": "remi",
    "targets": [
        "remi",
        "guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "travel/political",
        "type": "travel"
    }
}
,
  {
    "id": "hargram_introduces_party",
    "title": "Hargram introduces the party members to",
    "date": {
        "day": 30,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hargram, a pit fighter, introduces the other party members: Rhak, an orc; Manderaz, a hobgoblin; and Aemenor, an elf.",
    "instigator": "hargram_fidger",
    "targets": [
        "hargram_fidger",
        "rhak_the_lost",
        "manderaz_the_mad",
        "aemenor_evenflight"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "byscilla_assigns_tasks",
    "title": "Byscilla assigns tasks to the party",
    "date": {
        "day": 30,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Byscilla assigns two teams: one to confront Archie and another to survey the greenhouse. The confrontation team consists of Byscilla, Thornbury, and Aemenor, while the greenhouse team is composed of Rhak, Manderaz, and Hargram.",
    "instigator": "byscilla",
    "targets": [
        "byscilla",
        "thornbury",
        "rhak_the_lost",
        "manderaz_the_mad",
        "hargram_fidger",
        "aemenor_evenflight"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "political",
        "type": "political"
    }
},
  {
    "id": "hargram_and_team_find_rust_monsters",
    "title": "Hargram's team discovers a lone rust",
    "date": {
        "day": 30,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "While surveying the greenhouse, Hargram's team encounters a lone rust monster. They ambush and defeat it.",
    "instigator": "hargram_fidger",
    "targets": [
        "hargram_fidger",
        "rhak_the_lost",
        "manderaz_the_mad"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "encounter_with_mages_guild",
    "title": "The party is encountered by mages",
    "date": {
        "day": 30,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The party is approached by mages guild members who request their assistance in analyzing the site. They are given a Legion Arcane Field Analyzer to use.",
    "instigator": "hargram_fidger",
    "targets": [
        "hargram_fidger",
        "rhak_the_lost",
        "manderaz_the_mad",
        "darno_spriggon"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "ghost_encounter",
    "title": "The party encounters and defeats a",
    "date": {
        "day": 30,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "While analyzing the site, the party encounters a ghost. They defeat it and loot its ectoplasm.",
    "instigator": "hargram_fidger",
    "targets": [
        "hargram_fidger",
        "rhak_the_lost",
        "manderaz_the_mad"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "darno_sprigon_arrives",
    "title": "Darno Spriggon arrives at the greenho",
    "date": {
        "day": 30,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Darno Spriggon arrives at the greenhouse and informs the party that he has taken care of the remaining rust monsters. He also gives Hargram a letter addressed to Dan.",
    "instigator": "darno_spriggon",
    "targets": [
        "darno_spriggon",
        "hargram_fidger",
        "rhak_the_lost",
        "manderaz_the_mad"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
}
,
  {
    "id": "vivian_captured",
    "title": "Vivian is captured and interrogated by",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Markop and Bowser confront Vivian, who is tied up. They question him about his motives for attacking them.",
    "instigator": "vivian",
    "targets": [
        "vivian",
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/combat",
        "type": "social"
    }
},
  {
    "id": "vivian_reveals_his_plan",
    "title": "Vivian explains his plan to blight",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Vivian reveals his plan to blight the guests, including Orangus Cornelius, to become the sole heir. He mentions closing the planar fractures to isolate the manor.",
    "instigator": "vivian",
    "targets": [
        "vivian",
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "mazehounds_appear",
    "title": "Mazehounds enter the room and sing",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Mazehounds enter the room and sing a menacing song, asking for Vivian's opinion. They seem to be under Vivian's control.",
    "instigator": "vivian",
    "targets": [
        "vivian",
        "markop",
        "bowser",
        "mazehound"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat/magical",
        "type": "combat"
    }
},
  {
    "id": "markop_kills_vivian",
    "title": "Markop stabs Vivian in the chest",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Markop kills Vivian by stabbing him in the chest, ending his interrogation.",
    "instigator": "vivian",
    "targets": [
        "vivian",
        "markop"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "bowser_buries_vivian",
    "title": "Bowser and Markop burn Vivian's body",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "They dispose of Vivian's body by burning it and burying the ashes. A guard helps them with the burial.",
    "instigator": "markop",
    "targets": [
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "travel/deal",
        "type": "travel"
    }
},
  {
    "id": "encounter_with_marcus_ashfold",
    "title": "Bowser and Markop encounter Marcus As",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "They encounter Marcus Ashfold, who was observing the events unfold. He mentions keeping an eye on the three-eyed heir but doesn't elaborate.",
    "instigator": "markop",
    "targets": [
        "markop",
        "bowser",
        "marcus_ashfold"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "discovery_of_bowser_letter",
    "title": "Markop finds a letter from Bowser",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "While searching, Markop discovers a crumpled letter from Bowser to Princess Peach, revealing his complicated feelings and attempts to explain his presence.",
    "instigator": "markop",
    "targets": [
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
}
,
  {
    "id": "bowser_trips",
    "title": "Bowser trips and falls on Markop",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The story begins with Bowser losing his balance and falling onto Markop.",
    "instigator": "bowser",
    "targets": [
        "bowser",
        "markop"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "physical",
        "type": "physical"
    }
},
  {
    "id": "remi_cure_purpleeyetus",
    "title": "Remi discusses curing Purpleeyetus wi",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi expresses her desire to cure Purpleeyetus, but the Toad is skeptical.",
    "instigator": "remi",
    "targets": [
        "remi",
        "toad"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "onyx_hand_gift_offering",
    "title": "Onyx Hand guards offer Remi a",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The Onyx Hand guards present Remi with a letter and a ring, claiming it's a friendship gift.",
    "instigator": "remi",
    "targets": [
        "remi",
        "onyx_hand_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "onyx_hand_friendship_ring",
    "title": "Remi receives a friendship ring from",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The ring is accompanied by a letter signed by Remi's vampire friends, raising suspicion.",
    "instigator": "remi",
    "targets": [
        "remi",
        "onyx_hand_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "onyx_hand_anklet_offer",
    "title": "Onyx Hand guards offer Remi a",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "When Remi rejects the ring, the guards offer her an anklet as an alternative.",
    "instigator": "remi",
    "targets": [
        "remi",
        "onyx_hand_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "onyx_hand_injury",
    "title": "An Onyx Hand guard 'accidentally' inj",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "While Markop is examining Remi's eyes, an Onyx Hand guard 'trips' and cuts her eye.",
    "instigator": "remi",
    "targets": [
        "remi",
        "onyx_hand_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "physical",
        "type": "physical"
    }
},
  {
    "id": "onyx_hand_strategic_positioning",
    "title": "Onyx Hand guards strategically positi",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The guards create a perimeter, effectively isolating Remi and her companions.",
    "instigator": "onyx_hand_guards",
    "targets": [
        "onyx_hand_guards",
        "remi",
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "tactical",
        "type": "tactical"
    }
},
  {
    "id": "hide_and_seek",
    "title": "Onyx Hand guards propose a game",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The guards suggest playing hide-and-seek as a way to investigate Remi further.",
    "instigator": "remi",
    "targets": [
        "remi",
        "onyx_hand_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "marcus_ashford_arrival",
    "title": "Marcus Ashford arrives and offers Remi",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Marcus Ashford, seemingly an ally, appears and gives Remi a nearly empty supply kit.",
    "instigator": "remi",
    "targets": [
        "remi",
        "marcus_ashford"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "remi_eye_healing",
    "title": "Remi drinks the supply kit contents",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "After consuming the contents of the kit, Remi's eye color changes to a lighter shade of blue.",
    "instigator": "remi",
    "targets": [
        "remi"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "magical",
        "type": "magical"
    }
},
  {
    "id": "onyx_hand_ring_leaking_entropy",
    "title": "The Onyx Hand ring leaks entropy",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The guards reveal that the ring is leaking entropy and needs to be recharged.",
    "instigator": "onyx_hand_guards",
    "targets": [
        "onyx_hand_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "magical",
        "type": "magical"
    }
},
  {
    "id": "markop_ritual_discovery",
    "title": "Markop completes a ritual and observes",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Through his ritual, Markop detects magical items and entities, including necromancy magic in the ring.",
    "instigator": "markop",
    "targets": [
        "markop"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "magical/discovery",
        "type": "magical"
    }
},
  {
    "id": "toads_steal_note",
    "title": "The Toad steals a note from",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The toads admit to stealing a note from Bowser, revealing their deceitful nature.",
    "instigator": "toad",
    "targets": [
        "toad",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "theft",
        "type": "theft"
    }
},
  {
    "id": "letter_reading",
    "title": "The Onyx Hand guards read a",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The guards taunt Bowser with a letter outlining their plans to overthrow the Koopa Kingdom.",
    "instigator": "onyx_hand_guards",
    "targets": [
        "onyx_hand_guards"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/political",
        "type": "social"
    }
},
  {
    "id": "remi_search_archie",
    "title": "Remi and her companions search for",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The group heads to the airship in search of Archie, who is described as being mentally unstable.",
    "instigator": "remi",
    "targets": [
        "remi",
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "travel/discovery",
        "type": "travel"
    }
},

  {
    "id": "archivist_threat",
    "title": "The Archivist threatens Remi and her",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The Archivist threatens Remi and her companions, claiming he will kill them unless she complies with his demands.",
    "instigator": "archivist",
    "targets": [
        "archivist",
        "remi",
        "markop",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "social/threat",
        "type": "social"
    }
},
  {
    "id": "archivist_transformation",
    "title": "Imps transform into monstrous creatures",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The Archivist unleashes a horde of transformed imps, turning them into monstrous creatures.",
    "instigator": "archivist",
    "targets": [
        "archivist",
        "imps"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 1.5,
        "label": "magical/combat",
        "type": "magical"
    }
},
  {
    "id": "remi_workshop_entrance",
    "title": "Remi enters the workshop",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi finds herself alone in a workshop filled with strange and unsettling artifacts.",
    "instigator": "remi",
    "targets": [
        "remi"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "travel/discovery",
        "type": "travel"
    }
}
,
  {
    "id": "hjumpik_enters_manor",
    "title": "Hjumpik and Toad Lee enter the",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik and Toad Lee enter the manor, passing satyrs who offer drinks but are declined.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "toad_lee"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "travel",
        "type": "travel"
    }
},
  {
    "id": "toad_lee_identifies_soldier",
    "title": "Toad Lee identifies a soldier as",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Toad Lee identifies a soldier as either from the Iron Legion or the Mages Guild.",
    "instigator": "toad_lee",
    "targets": [
        "toad_lee",
        "soldier"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "hjumpik_sees_wario",
    "title": "Hjumpik spots Wario, who is already",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik spots Wario, who is already in the manor, and later engages him in a debt-related interaction.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "wario"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "hjumpik_shops_for_items",
    "title": "Hjumpik shops for items and discovers",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik shops for items and discovers Wario is collecting debts, leading to a confrontation over discounts.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "wario"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "wario_shows_ledger",
    "title": "Wario presents Hjumpik with a detailed",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Wario presents Hjumpik with a detailed ledger of debts owed to him, including humorous and threatening entries.",
    "instigator": "wario",
    "targets": [
        "wario",
        "hjumpik"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "toad_lee_shouts_canonball",
    "title": "Toad Lee shouts 'HEY WE FOUND",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Toad Lee shouts 'HEY WE FOUND THE CANONBALL' after spotting it near a guard.",
    "instigator": "toad_lee",
    "targets": [
        "toad_lee",
        "guard"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "hjumpik_bashes_guards",
    "title": "Hjumpik sees Wario shoulder-bash two ",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik sees Wario shoulder-bash two people, then asks if they're okay.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "wario"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "wario_protects_ledger",
    "title": "Wario treats his ledger as sacred",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Wario treats his ledger as sacred scripture and risks his life to recover it due to its financial and legal value.",
    "instigator": "wario",
    "targets": [
        "wario"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "toad_lee_and_guard_fail_to_free_canonball",
    "title": "Toad Lee and the guard fail",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Toad Lee and the guard fail to free Canonball after being affected by a toxin from mushrooms.",
    "instigator": "toad_lee",
    "targets": [
        "toad_lee",
        "guard",
        "canonball"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "wario_garlic_weaponizes",
    "title": "Wario uses a garlic clove as",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Wario uses a garlic clove as a weapon, causing others to recoil and question his motives.",
    "instigator": "wario",
    "targets": [
        "wario"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "toad_lee_ships_monty_mole",
    "title": "Toad Lee arranges shipping for Monty",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Toad Lee arranges shipping for Monty Mole to an airship, negotiating with Wario over delivery time.",
    "instigator": "toad_lee",
    "targets": [
        "toad_lee",
        "wario"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "deal",
        "type": "deal"
    }
},
  {
    "id": "hjumpik_discover_secret_passage",
    "title": "Hjumpik discovers a secret passage after",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik discovers a secret passage after the steel machine paws at the wall.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "steel_machine"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "satyr_party_begins",
    "title": "A satyr party begins with revelry",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "A satyr party begins with revelry, wine, and dancing, with the satyr leader urging revelry over worry.",
    "instigator": "satyr_leader",
    "targets": [
        "satyr_leader",
        "lady",
        "partygoers"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "hjumpik_meets_satyrs",
    "title": "Hjumpik encounters satyrs who want to",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik encounters satyrs who want to be quiet and tame, but he insists on continuing the revel.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "satyrs"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "hjumpik_encounters_revel",
    "title": "Hjumpik and Steely enter a staff",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik and Steely enter a staff room where they encounter The Revel, a chaotic, monstrous entity made of hunger and debauchery.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "steely"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "hjumpik_meets_revel_master",
    "title": "Hjumpik meets the Revel Master, who",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik meets the Revel Master, who claims to have created The Revel through a bar game and now controls its chaotic nature.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "revel_master"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "ralos_reveals_identity",
    "title": "Ralis (possibly Ralos or Relis) reveals",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Ralis (possibly Ralos or Relis) reveals himself as the Revel Master’s companion and a former Legion member, singing about the Legion’s judgment.",
    "instigator": "ralis",
    "targets": [
        "ralis",
        "hjumpik"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "hjumpik_discovers_vines",
    "title": "Hjumpik learns that the vines in",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik learns that the vines in the room were used to trap a dwarf, who was rescued by his friends.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "dwarf",
        "toad",
        "purple_lad"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "hjumpik_learns_of_revel_master_plan",
    "title": "Hjumpik learns the Revel Master is",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik learns the Revel Master is not just a game master but a being who manipulates death and chaos to keep the revel going.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik",
        "revel_master"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "explosion_heard",
    "title": "A very large blast is heard",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "A very large blast is heard in another room.",
    "instigator": "unknown",
    "targets": [],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "hjumpik_falls",
    "title": "Hjumpik quickly goes down in response",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Hjumpik quickly goes down in response to the explosion.",
    "instigator": "hjumpik",
    "targets": [
        "hjumpik"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "relos_realizes",
    "title": "Relos realizes the keg is empty",
    "date": {
        "day": 29,
        "monthIndex": 5,
        "year": 1040
    },
    "isEvent": true,
    "description": "Relos realizes the keg is empty.",
    "instigator": "relos",
    "targets": [
        "relos"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
}
,
  {
    "id": "archie_enters_bathroom",
    "title": "Archie opens a bathroom door and",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie opens a bathroom door and is struck by a green thunderbolt fire.",
    "instigator": "archie",
    "targets": [
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "mirror_shatters_and_monster_freed",
    "title": "Archie shatters a mirror, freeing a",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie shatters a mirror, freeing a creature that scurries away.",
    "instigator": "archie",
    "targets": [
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "bones_jumps_down_and_gets_injured",
    "title": "Bones jumps down to help, gets",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Bones jumps down to help, gets injured, and declares he's here to assist.",
    "instigator": "bones",
    "targets": [
        "bones"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "archie_fires_fireball_through_window",
    "title": "Archie fires a fireball through a",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie fires a fireball through a shattered window, killing a spider.",
    "instigator": "archie",
    "targets": [
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "spider_leaves_footprint_on_bed",
    "title": "A spider leaves a strange footprint",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A spider leaves a strange footprint on a blue bed, suggesting it stepped through a wall.",
    "instigator": "spider",
    "targets": [
        "spider"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "archie_and_bones_reach_party",
    "title": "Archie and Bones arrive at a",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie and Bones arrive at a party guarded by the Regency.",
    "instigator": "archie",
    "targets": [
        "archie",
        "bones"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "travel",
        "type": "travel"
    }
},
  {
    "id": "ghost_fly_through_wall",
    "title": "A ghost flies through the wall",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A ghost flies through the wall as the battle begins.",
    "instigator": "lucky_t",
    "targets": [
        "lucky_t",
        "bones",
        "nine-fingers_keene",
        "gregir_fendelsohn",
        "terenzio_cassalanter"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "slime_splits_and_battles",
    "title": "Darno Spriggon battles a splitting sl",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Darno Spriggon battles a splitting slime, laughing at its fate.",
    "instigator": "darno_spriggon",
    "targets": [
        "darno_spriggon"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "giant_mech_crashes_in",
    "title": "A giant mech crashes through the",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A giant mech crashes through the ceiling, declaring 'lets go bro bot'.",
    "instigator": "the_green_thunder",
    "targets": [
        "the_green_thunder",
        "darno_spriggon"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "archie_discovers_event",
    "title": "Archie discovers a destabilization ev",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie discovers a destabilization event in a protected magical zone.",
    "instigator": "archie",
    "targets": [
        "archie",
        "byscilla_danos"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "new_villain_appears",
    "title": "A new villain emerges, demanding the",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A new villain emerges, demanding the party defeat them.",
    "instigator": "archie",
    "targets": [
        "archie",
        "byscilla_danos"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "mole_battles_figure",
    "title": "The mole battles a new figure",
    "date": {
        "day": 1,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The mole battles a new figure, laughing about who's in charge.",
    "instigator": "the_mole",
    "targets": [
        "the_mole",
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
}
,
  {
    "id": "ghost_attack",
    "title": "Thunder The Ghost Attacks Archie",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Thunder the ghost attacks Archie.",
    "instigator": "thunder",
    "targets": [
        "thunder",
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "fireball_goes_wild",
    "title": "Archie'S Fireball Spell Goes Out Of Control",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie's fireball spell goes out of control, becoming a Fireball.",
    "instigator": "archie",
    "targets": [
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "roof_collapses",
    "title": "The Room Collapses, But Archie Stops It",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "The room collapses, but Archie stops it with a Freeze Ray.",
    "instigator": "archie",
    "targets": [
        "archie",
        "nine_fingers_klee"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "green_thunder_appears",
    "title": "Bystall Reveals The Green Thunder Mech And",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Bystall reveals the Green Thunder mech and outlines her plan to subdue it.",
    "instigator": "bystall",
    "targets": [
        "bystall"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "mole_summoning",
    "title": "The Mole Summons Ghosts In The Ruined",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "The Mole summons ghosts in the ruined manor.",
    "instigator": "mole",
    "targets": [
        "mole"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "brobot_attacks",
    "title": "Brobot Attacks The Party, Taunting Them",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Brobot attacks the party, taunting them.",
    "instigator": "brobot",
    "targets": [
        "brobot"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "archie_shatters_wall",
    "title": "Archie Shatters A Wall, Alerting Ghosts And",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie shatters a wall, alerting ghosts and others.",
    "instigator": "archie",
    "targets": [
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "green_thunder_knocks_out_bones",
    "title": "Green Thunder Knocks Out Bones With A",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Green Thunder knocks out Bones with a giant fist.",
    "instigator": "green_thunder",
    "targets": [
        "green_thunder",
        "bones"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "archie_fights_brobot",
    "title": "Archie Uses Magic To Fight Brobot, Who",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Archie uses magic to fight Brobot, who retaliates with a laser beam.",
    "instigator": "archie",
    "targets": [
        "archie",
        "brobot"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "bystall_subdues_mr_l",
    "title": "Bystall Subdues Mr. L With A Spell",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Bystall subdues Mr. L with a spell.",
    "instigator": "bystall",
    "targets": [
        "bystall",
        "mr._l"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "new_mission",
    "title": "Bystall Gives Archie A New Mission Through",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Bystall gives Archie a new mission through an active portal.",
    "instigator": "bystall",
    "targets": [
        "bystall",
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "darno_delivers_membership",
    "title": "Darno Spriggon Delivers Archie'S Mages Guild Me",
    "date": {
        "day": 3,
        "monthIndex": 8,
        "year": 1040
    },
    "isEvent": true,
    "description": "Darno Spriggon delivers Archie's mages guild membership.",
    "instigator": "darno_spriggon",
    "targets": [
        "darno_spriggon",
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
}
,
  {
    "id": "hatch_discovery",
    "title": "Remi And Bowser Discover A Hidden Passage",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Remi and Bowser discover a hidden passage behind a waterfall.",
    "instigator": "remi",
    "targets": [
        "remi",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "photograph_reveal",
    "title": "Dan Shows Remi A Photograph Of His",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Dan shows Remi a photograph of his past crew on the airship Vigilance.",
    "instigator": "remi",
    "targets": [
        "remi",
        "dan"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "explosion_and_chaos",
    "title": "An Explosion Occurs, Followed By Screams And",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "An explosion occurs, followed by screams and chaos as fire spreads through the building.",
    "instigator": "remi",
    "targets": [
        "remi",
        "eager",
        "salam",
        "dan"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "fireball_attack",
    "title": "A Giant Fireball Appears, Attacking Dan And",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "A giant fireball appears, attacking Dan and causing further destruction.",
    "instigator": "dan",
    "targets": [
        "dan",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "combat",
        "type": "combat"
    }
},
  {
    "id": "dan_real_kidnapped",
    "title": "Dan Real Was Kidnapped And Replaced With",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Dan Real was kidnapped and replaced with a fake.",
    "instigator": "dan_real",
    "targets": [
        "dan_real",
        "archie"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "archie_revealed_as_evil",
    "title": "Markop Learns From Books That Archie Is",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Markop learns from books that Archie is evil and wants to control the mages guild.",
    "instigator": "archie",
    "targets": [
        "archie",
        "markop"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "bowser_steals_from_dan",
    "title": "Bowser Steals Items From Dan Real As",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Bowser steals items from Dan Real as he cries.",
    "instigator": "dan_real",
    "targets": [
        "dan_real",
        "bowser"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "social",
        "type": "social"
    }
},
  {
    "id": "eager_kidnapped",
    "title": "Eager Was Kidnapped And Indoctrinated By The",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "Eager was kidnapped and indoctrinated by the Church of the Third Eye.",
    "instigator": "eager",
    "targets": [
        "eager"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "discovery",
        "type": "discovery"
    }
},
  {
    "id": "group_returns_to_manor",
    "title": "The Group Decides To Return To The",
    "date": {
        "day": 4,
        "monthIndex": 6,
        "year": 1040
    },
    "isEvent": true,
    "description": "The group decides to return to the manor.",
    "instigator": "markop",
    "targets": [
        "markop",
        "bowser",
        "dan_real"
    ],
    "arc": "current_arc",
    "arcPosition": "rising_action",
    "effects": {},
    "cycle_impact": {
        "score": 0.8,
        "label": "travel",
        "type": "travel"
    }
}
];