// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_061 = {
  "earth_land_rune_of_wario_luck": {
    "id": "earth_land_rune_of_wario_luck",
    "name": "Rune of Wario's Luck (Seriously!)",
    "description": "Found near a suspiciously large pile of gold, this rune radiates an unsettling aura. It’s said to amplify your chances of finding treasure – or stumbling into traps. Use at your own peril…and prepare for some serious Wario-style shenanigans!",
    "category": "premium",
    "price": 11000,
    "icon": "💰",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+5 to attack rolls",
      "increased chance of finding valuable items",
      "chance to trigger beneficial side effects (e.g., temporary invulnerability)",
      "attracts unwanted attention from goblins"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "flying_carpet",
    "levelRequirement": 10
  },
  "internet_glitch_orb": {
    "id": "internet_glitch_orb",
    "name": "Reality Distortion Fragment",
    "description": "A pulsating orb of corrupted data! Hold this strange artifact to briefly warp reality, causing unpredictable effects and potentially turning enemies into dancing hamsters… who are surprisingly aggressive.",
    "category": "curiosities",
    "price": 110000,
    "icon": "🌀",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance_to_teleport_self_or_target",
      "random_status_effect_application",
      "temporary_confusion_on_all_enemies"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 18
  },
  "internet_meme_suit": {
    "id": "internet_meme_suit",
    "name": "Distorted Denim Decoy",
    "description": "This suit is covered in layers of layered memes. Slip it on and become a walking, talking distraction! It’s guaranteed to attract the attention of every grumpy goblin within a 30-foot radius… or at least, make them *think* they do.",
    "category": "equipment",
    "price": 150,
    "icon": "😂",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_charisma_x1.2",
      "chance_to_lull_enemies_into_a_false_sense_of_security",
      "increased_stealth_effectiveness"
    ],
    "vendor": "cyber_market",
    "shippedBy": "automated_robot",
    "levelRequirement": 3
  },
  "internet_glitch_shard": {
    "id": "internet_glitch_shard",
    "name": "Quantum Pixel Fragment",
    "description": "Recovered from a corrupted server core, this shard pulses with raw digital energy! It’s rumored to briefly grant the user precognition—or just make their vision all blurry and rainbow-colored. Use at your own risk!",
    "category": "equipment",
    "price": 11000,
    "icon": "👾",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_reflect_damage",
      "grant_temporary_invisibility",
      "increase_intelligence_by_5_for_3_turns",
      "minor_system_lag_effect"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 8
  },
  "internet_firewall_scroll": {
    "id": "internet_firewall_scroll",
    "name": "Data Stream Sentinel",
    "description": "This ancient scroll, etched with forgotten firewall runes, will shield you from the worst of the digital storms. It’s surprisingly effective against rogue bots and unsolicited notifications... mostly.",
    "category": "equipment",
    "price": 3700,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "grant_resistance_to_digital_attacks",
      "chance_to_disrupt_enemy_spellcasting",
      "increase_armor_class_by_2",
      "reduce_effect_of_confusion_status"
    ],
    "vendor": "data_dealer",
    "shippedBy": "automated_tube",
    "levelRequirement": 5
  },
  "the_edge_rune_plate": {
    "id": "the_edge_rune_plate",
    "name": "Nullstone Guardian Plate",
    "description": "Forged from solidified void-matter, this plate resists the corrupting influence of The Edge. It's surprisingly comfortable… for a piece of dead universe!",
    "category": "equipment",
    "price": 11000,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+3 AC against abyssal creatures",
      "Resistance to psychic damage",
      "Passive regeneration (1 hit point per round)"
    ],
    "vendor": "final_shop",
    "shippedBy": "teleportation matrix",
    "levelRequirement": 10
  },
  "the_edge_beetle_scuttler": {
    "id": "the_edge_beetle_scuttler",
    "name": "Chitinous Void Crawler",
    "description": "A surprisingly resilient beetle, mutated by the energies of The Edge. It's got a nasty bite and an even nastier habit of disappearing into thin air – just like your coin purse!",
    "category": "consumables",
    "price": 150,
    "icon": "🐛",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals 1d4 HP",
      "Chance to inflict minor poison (10%)",
      "Temporary +1 to stealth checks"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged courier",
    "levelRequirement": 3
  },
  "the_edge_chronometric_orb": {
    "id": "the_edge_chronometric_orb",
    "name": "Temporal Flux Orb",
    "description": "A swirling sphere of chaotic time, this orb allows you to briefly rewind a single action - perfect for correcting mistakes or snagging dropped loot. Be warned; messing with the timeline is bad for business... and your head!",
    "category": "curiosities",
    "price": 70000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Rewind last action (once per day)",
      "Chance to create a minor time paradox (5%)",
      "Increased magical resistance against temporal effects"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "warp_mail",
    "levelRequirement": 18
  },
  "middle_earth_rune_of_protection": {
    "id": "middle_earth_rune_of_protection",
    "name": "Stoneheart Amulet",
    "description": "This hefty amulet, carved from a fragment of an ancient dwarven forge stone, radiates a faint warmth. It’s rumored to ward off minor earth tremors and grumpy goblins – perfect for avoiding unpleasant surprises while traversing the wilds!",
    "category": "equipment",
    "price": 3700,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_armor_class_1",
      "resistance_to_earth_damage_2",
      "chance_to_stagger_on_tremors_3"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "cart",
    "levelRequirement": 6
  },
  "middle_earth_whispering_petal": {
    "id": "middle_earth_whispering_petal",
    "name": "Sylvan Echo Blossom",
    "description": "A single, iridescent petal from a flower said to hold the voices of the ancient forests. Holding it close allows you to briefly understand the murmurs of nature – useful for finding hidden paths or avoiding particularly judgmental sprites!",
    "category": "curiosities",
    "price": 160,
    "icon": "🌸",
    "stock": 42,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "detect_nature_1",
      "chance_to_find_hidden_paths_2"
    ],
    "vendor": "elven_market",
    "shippedBy": "messenger_bird",
    "levelRequirement": 3
  },
  "middle_earth_one_ring_fragment": {
    "id": "middle_earth_one_ring_fragment",
    "name": "Shard of Shadows",
    "description": "A disturbingly cold piece of what *might* have been a Ring. It pulses with a faint darkness and whispers promises of power – don’t say we didn't warn you! This shard is extremely unstable and can cause temporary madness.",
    "category": "forbidden",
    "price": 11000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "chance_to_cause_confusion_4",
      "temporary_darkness_aura_3",
      "increased_shadow_damage_2"
    ],
    "vendor": "shady_merchant",
    "shippedBy": "black_raven",
    "levelRequirement": 10
  },
  "teyvat_item_oceanic_charm": {
    "id": "teyvat_item_oceanic_charm",
    "name": "The Siren's Whisper Brooch",
    "description": "A beautiful brooch crafted from solidified seawater and imbued with the essence of the Geo Archon. It passively increases your resistance to elemental damage, especially water-based attacks – useful for those pesky pirates! Wario loves shiny things...and drowning people.",
    "category": "curiosities",
    "price": 830,
    "icon": "🌊",
    "stock": 28,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "water resistance +15%",
      "chance to stun enemy on hit",
      "increase armor by 5",
      "passive regeneration of 2 HP/second"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_current",
    "levelRequirement": 4
  },
  "teyvat_item_godly_rune_of_balance": {
    "id": "teyvat_item_godly_rune_of_balance",
    "name": "Rune of Harmonious Flux",
    "description": "Forged by the Archons themselves, this rune pulses with raw elemental energy – a true testament to Teyvat's delicate balance. Touching it grants immense power, but requires absolute focus to wield properly... or else you’ll end up summoning a miniature thunderstorm that only hits Wario.",
    "category": "premium",
    "price": 810000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "all elemental damage +50%",
      "chance to create a temporary shield that absorbs all damage",
      "periodic healing over time (20 HP/second)",
      "chance to trigger a devastating chain reaction with nearby enemies"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 30
  },
  "kivotos_item_chrono_shift_charm": {
    "id": "kivotos_item_chrono_shift_charm",
    "name": "Temporal Tickle Charm",
    "description": "This shiny little charm seems to vibrate with chaotic energy! When activated, it briefly rewinds time by a few seconds – perfect for avoiding awkward encounters or snagging that last slice of cake. Just don't use it to undo your bad decisions… Wario would be *so* disappointed!",
    "category": "curiosities",
    "price": 71000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "rewind_time_5s",
      "chance_to_cause_temporal_paradox",
      "minor_luck_boost"
    ],
    "vendor": "student_store",
    "shippedBy": "hoverboard",
    "levelRequirement": 18
  },
  "kivotos_item_resonance_amplifier": {
    "id": "kivotos_item_resonance_amplifier",
    "name": "Harmonic Resonance Amplifier",
    "description": "This sleek, chrome device amplifies magical energies – and occasionally creates bizarre musical effects. Use it to boost spell potency or… accidentally summon a flock of singing pigeons. Careful with the volume!",
    "category": "equipment",
    "price": 3700,
    "icon": "🎶",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "spell_damage_bonus",
      "chance_to_create_musical_effect",
      "increase_mana_pool"
    ],
    "vendor": "academy_armory",
    "shippedBy": "drone",
    "levelRequirement": 8
  },
  "kivotos_item_priority_scroll": {
    "id": "kivotos_item_priority_scroll",
    "name": "Academic Decree Scroll",
    "description": "Issued by the esteemed Headmaster, this scroll grants temporary priority in the academy’s bustling corridors. Navigate student politics and secure that coveted study spot with ease! Just don't try to use it to skip your classes – we know you won't.",
    "category": "services",
    "price": 160,
    "icon": "📜",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed",
      "chance_to_avoid_crowds",
      "social_favor"
    ],
    "vendor": "club_supply",
    "shippedBy": "messenger",
    "levelRequirement": 3
  },
  "connectopia_block_of_wonder": {
    "id": "connectopia_block_of_wonder",
    "name": "Block of Wonder",
    "description": "This strangely pulsating block seems to shift and change color! Rubbing it generates a small amount of temporary luck, possibly attracting helpful robotic scavengers. It's also surprisingly warm – perfect for keeping your circuits from freezing.",
    "category": "curiosities",
    "price": 160,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance_to_gain_luck",
      "minor_heat_source",
      "attracts_scrap_bots"
    ],
    "vendor": "block_smith",
    "shippedBy": "drone_delivery",
    "levelRequirement": 1
  },
  "connectopia_pioneer_post_package": {
    "id": "connectopia_pioneer_post_package",
    "name": "Pioneer Post Package - Urgent!",
    "description": "Delivered directly by the Pioneer Postal Drones, this package contains a vital blueprint for upgrading your mining rig and a surprisingly delicious nutrient paste ration. Don’t worry, it only *looks* like sludge – mostly.",
    "category": "faction",
    "price": 830,
    "icon": "✉️",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "blueprint_mining_upgrade",
      "+10% nutrient_paste_efficiency"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "drone_delivery",
    "levelRequirement": 5
  },
  "connectopia_rusty_mining_drill": {
    "id": "connectopia_rusty_mining_drill",
    "name": "Rusty Mining Drill - 'The Grinder'",
    "description": "This ancient drill was once a marvel of engineering, now reduced to a pile of scrap. With some careful tinkering (and a lot of luck), you can still extract valuable minerals... though it tends to overheat and occasionally explode with sparks.",
    "category": "equipment",
    "price": 11000,
    "icon": "⛏️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased_mining_speed",
      "chance_to_explode",
      "+5% mining_yield"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "the_edge_rusty_grappler": {
    "id": "the_edge_rusty_grappler",
    "name": "Void-Touched Grappling Hook",
    "description": "This hook seems to have been forged in the heart of a collapsing star. It's surprisingly effective at snagging onto… well, anything, even impossible angles – just don’t stare at it for too long.",
    "category": "equipment",
    "price": 840,
    "icon": "🔗",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased reach for attacks",
      "chance to pull enemies closer",
      "provides minor climbing speed bonus"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Winged Courier",
    "levelRequirement": 4
  },
  "the_edge_chronarium_orb": {
    "id": "the_edge_chronarium_orb",
    "name": "Temporal Distortion Sphere",
    "description": "A swirling sphere of captured time, this orb allows for brief manipulations of the immediate flow. Use it to speed up a potion or slow down an enemy – but be warned, messing with time is never truly safe!",
    "category": "premium",
    "price": 11000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to accelerate potion effect duration",
      "chance to slow enemy movement speed",
      "provides minor resistance to temporal magic",
      "Allows the user to rewind their last action once."
    ],
    "vendor": "final_shop",
    "shippedBy": "Wario's Delivery Service",
    "levelRequirement": 10
  },
  "grand_country_inverted_compass": {
    "id": "grand_country_inverted_compass",
    "name": "The Upside-Down Navigator",
    "description": "Lost? Don't be! This compass points not North, but towards the nearest cliff face…or perhaps a particularly interesting pile of rocks. It’s delightfully confusing and will definitely make you look like a fool - just how Wario likes it.",
    "category": "equipment",
    "price": 11000,
    "icon": "🧭",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "points_towards_nearest_cliff",
      "increased_navigation_skill_15%",
      "chance to stumble upon hidden loot (+10%)",
      "minor disorientation effect on enemies"
    ],
    "vendor": "side_seller",
    "shippedBy": "giant_snail",
    "levelRequirement": 11
  },
  "earth_land_goblin_grog": {
    "id": "earth_land_goblin_grog",
    "name": "Goblin Grog of Minor Fortitude",
    "description": "This suspiciously green liquid smells faintly of swamp and regret. A single gulp will grant you a temporary boost to your defense, perfect for dodging those pesky ice wall projectiles! Don't worry about the bubbling - it just means it’s *really* potent.",
    "category": "consumables",
    "price": 160,
    "icon": "🧪",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "defense +10 for 3 turns",
      "chance to reflect damage (5%)"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Swift Delivery",
    "levelRequirement": 2
  },
  "earth_land_mythic_echoing_shard": {
    "id": "earth_land_mythic_echoing_shard",
    "name": "Echoing Shard of the Ancient Wizard’s Lament",
    "description": "This pulsating shard vibrates with residual magic, a fragment of a wizard's forgotten spell. Hold it close and you might hear whispers of ancient wisdom... or just a really annoying repetitive tune! This item is extremely powerful but unstable.",
    "category": "curiosities",
    "price": 72000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to cast 'Minor Illusion' (10%)",
      "heal 50 HP on use",
      "increased mana regeneration +20%"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 20
  },
  "grand_country_service_echo_call": {
    "id": "grand_country_service_echo_call",
    "name": "Resonance Whisperer's Device",
    "description": "This strange device allows you to briefly amplify and replay sounds, useful for distracting enemies or uncovering hidden clues. Wario would love this for annoying people!",
    "category": "services",
    "price": 11000,
    "icon": "🔊",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "replay_sound: 3 second duration",
      "distraction_effect: 20%",
      "reveals nearby sounds"
    ],
    "vendor": "side_seller",
    "shippedBy": "Wario's Express Drone",
    "levelRequirement": 10
  },
  "pokemon_item_chronal_orb": {
    "id": "pokemon_item_chronal_orb",
    "name": "Temporal Echo Orb",
    "description": "This pulsating orb seems to flicker with glimpses of the past and future! Holding it grants a temporary boost to your speed and evasion, letting you dodge attacks like a seasoned trainer – or maybe just trip over a few pebbles.",
    "category": "curiosities",
    "price": 5900,
    "icon": "⏳",
    "stock": 25,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "speed_boost_3",
      "evasion_boost_2",
      "chance_to_reflect"
    ],
    "vendor": "safari_shop",
    "shippedBy": "winged_bulbasaur",
    "levelRequirement": 7
  },
  "pokemon_item_league_badge_of_honor": {
    "id": "pokemon_item_league_badge_of_honor",
    "name": "Badge of the Valiant Trainer",
    "description": "A gleaming badge crafted by the Elite Four themselves! This symbol of achievement grants a minor bonus to all stats, perfect for any aspiring champion – or just looking impressive at the local Pokémon Center.",
    "category": "faction",
    "price": 840,
    "icon": "🏆",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "strength_boost_1",
      "defense_boost_1",
      "speed_boost_1"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_drone",
    "levelRequirement": 6
  },
  "pokemon_item_ultra_potion_x": {
    "id": "pokemon_item_ultra_potion_x",
    "name": "Hyper Healing Potion X",
    "description": "Brewed with concentrated energies and rare Pokémon nectar, this potion provides a massive heal! It's so potent it might make your Pokémon temporarily glow – don't stare directly at it for too long, Wario!",
    "category": "consumables",
    "price": 160,
    "icon": "🧪",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal_75",
      "chance_to_cure_status_conditions"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke_mail",
    "levelRequirement": 1
  },
  "kivotos_item_student_cipher_badge": {
    "id": "kivotos_item_student_cipher_badge",
    "name": "Codebreaker's Crest",
    "description": "A gleaming badge bearing the symbol of the Kivotos Cryptography Club. Wearing this grants a slight bonus to your perception, allowing you to discern hidden messages and decode cryptic clues - perfect for uncovering secrets and getting into trouble!  Don't tell Principal Stern that Wario bought it.",
    "category": "faction",
    "price": 840,
    "icon": "🕵️",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased_perception_1",
      "chance_decode_hidden_messages_20%"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_shipping",
    "levelRequirement": 3
  },
  "kivotos_item_halo_of_minor_chaos": {
    "id": "kivotos_item_halo_of_minor_chaos",
    "name": "The Slightly Unstable Halo",
    "description": "This halo radiates a faint aura of organized mayhem. Touching it might trigger minor, unpredictable effects – like summoning a flock of pigeons or causing nearby objects to levitate momentarily… Wario loves chaos!",
    "category": "curiosities",
    "price": 3700,
    "icon": "💫",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_summon_pigeons_30%",
      "chance_levitate_nearby_objects_15%",
      "minor_confusion_20%"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 6
  },
  "almost_edge_void_shard_of_reflection": {
    "id": "almost_edge_void_shard_of_reflection",
    "name": "Void Shard of Reflection",
    "description": "A jagged fragment pulsing with a sickly purple light. Gazing into it reveals unsettling glimpses of impossible geometries and forgotten realities – potentially offering insight, or driving you to question everything.",
    "category": "equipment",
    "price": 72000,
    "icon": "🔮",
    "stock": 17,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to gain temporary insanity (5%) on use",
      "grants resistance to psychic damage",
      "allows limited glimpses into other dimensions"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 18
  },
  "almost_edge_fractured_echo_token": {
    "id": "almost_edge_fractured_echo_token",
    "name": "Fractured Echo Token",
    "description": "A tarnished silver token shaped like a broken bell. It resonates with the residual memories of those who've fallen off the edge – potentially revealing clues, or driving you to obsessive investigation.",
    "category": "faction",
    "price": 840,
    "icon": "🔔",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grants advantage on investigation checks related to the void",
      "provides minor protection against madness effects",
      "allows communication with fragmented echoes (limited)"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Lost Signal",
    "levelRequirement": 5
  },
  "faction_fatebinder_scroll": {
    "id": "faction_fatebinder_scroll",
    "name": "Fatebinder’s Scroll of Discord",
    "description": "A meticulously crafted scroll containing ancient rituals for manipulating fate – or at least causing a *lot* of chaos. Warning: May attract unwanted attention from powerful entities… and Wario.",
    "category": "premium",
    "price": 11000,
    "icon": "📜",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "chance to trigger a random negative effect on enemies: 15%",
      "increase critical hit damage by 50% for 3 turns",
      "chance to temporarily curse target with 'bad luck'"
    ],
    "vendor": "fate_forge",
    "shippedBy": "magical_portals",
    "levelRequirement": 12
  },
  "curiosity_bone_totem": {
    "id": "curiosity_bone_totem",
    "name": "The Whispering Bone Totem",
    "description": "This unsettling totem is crafted from the remains of countless warriors. It whispers secrets of past battles and… possibly Wario’s terrible cooking habits. Don't stare at it too long!",
    "category": "curiosities",
    "price": 160,
    "icon": "💀",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to gain temporary inspiration: 5%",
      "provides minor resistance to fear effects",
      "slightly increases party's morale"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "standard_mail",
    "levelRequirement": 3
  },
  "grand_country_berry_blast": {
    "id": "grand_country_berry_blast",
    "name": "Layered Berry Bomb",
    "description": "These layered berries explode with a surprisingly potent burst of flavor and temporary buffs. Each layer delivers a different effect, creating a chaotic but potentially beneficial concoction. Eat quickly – the layers shift!",
    "category": "consumables",
    "price": 160,
    "icon": "💥",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_strength_boost",
      "minor_healing",
      "increased_movement_speed"
    ],
    "vendor": "layer_market",
    "shippedBy": "rolling_log",
    "levelRequirement": 3
  },
  "grand_country_echoing_stone": {
    "id": "grand_country_echoing_stone",
    "name": "Resonant Shard of Silence",
    "description": "This oddly shaped stone hums with a low, unsettling frequency. When thrown, it creates a brief zone of absolute silence, disrupting enemy spellcasting and communication. Wario loves to use these to sneak up on unsuspecting targets!",
    "category": "curiosities",
    "price": 3700,
    "icon": "🤫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "silence_zone_creation",
      "disrupts_spellcasting",
      "reduces_speech_range"
    ],
    "vendor": "side_seller",
    "shippedBy": "giant_snail",
    "levelRequirement": 6
  },
  "grand_country_spiral_root": {
    "id": "grand_country_spiral_root",
    "name": "Warped Root of the Spiral Grove",
    "description": "This pulsating root, harvested from a grove where gravity is…flexible, grants fleeting glimpses into alternate dimensions. Consume it to briefly phase through solid objects – but be careful not to get lost!",
    "category": "consumables",
    "price": 11000,
    "icon": "🌀",
    "stock": 45,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "allows player to phase through one wall/object for 6 seconds",
      "chance to teleport a short distance (10%)",
      "reduces armor by 5 for 30 seconds"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_worm",
    "levelRequirement": 9
  },
  "leclaire_isle_item_sticky_bun_of_fortitude": {
    "id": "leclaire_isle_item_sticky_bun_of_fortitude",
    "name": "Sticky Bun of Fortitude",
    "description": "This suspiciously gooey bun seems to hold an unnatural amount of… well, fortitude! Biting into it grants temporary resistance to blunt force trauma – perfect for wrestling grumpy pastry sprites or dodging rogue icing projectiles. Just try not to get *too* sticky.",
    "category": "consumables",
    "price": 3700,
    "icon": "💪",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "temporary_fortitude_boost",
      "resistance_to_blunt_damage",
      "increased_stamina"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_dune",
    "levelRequirement": 6
  },
  "leclaire_isle_item_frosting_sculpting_session": {
    "id": "leclaire_isle_item_frosting_sculpting_session",
    "name": "Frosting Sculpting Session",
    "description": "Feeling creative? This isn’t just a service; it's an *experience*! Master Dough Folk artisans will patiently guide you in crafting miniature pastries - perfect for distracting enemies or adorning your armor. Warning: May result in excessive sugar cravings.",
    "category": "services",
    "price": 840,
    "icon": "🎨",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_skill_in_crafting",
      "chance_to_confuse_enemies"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_dune",
    "levelRequirement": 4
  },
  "leclaire_isle_item_chronometric_croissant": {
    "id": "leclaire_isle_item_chronometric_croissant",
    "name": "Chronometric Croissant",
    "description": "This shimmering croissant isn't just delicious; it subtly alters the flow of time around you! Briefly slow down enemy attacks or accelerate your own movements – but don’t overdo it, or you might end up stuck in a perpetual loop of pastry consumption. Wario would LOVE this!",
    "category": "equipment",
    "price": 11000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "slow_time",
      "increased_movement_speed",
      "chance_to_dodge_attacks"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "nightly_dune",
    "levelRequirement": 9
  },
  "the_edge_ritualistic_knife": {
    "id": "the_edge_ritualistic_knife",
    "name": "Blade of the Unseen Pact",
    "description": "Forged from a meteorite and etched with symbols of forgotten entities, this knife feels…wrong. It’s rumored to grant dark power, but comes with a hefty dose of existential dread and an uncontrollable urge to perform bizarre rituals.",
    "category": "forbidden",
    "price": 840,
    "icon": "🔪",
    "stock": 1,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "increased_damage_against_undead",
      "chance_to_inflict_fear",
      "minor_corruption_effect",
      "increased_shadow_step_range"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "dark_messenger",
    "levelRequirement": 8
  },
  "teyvat_item_emberglow_torch": {
    "id": "teyvat_item_emberglow_torch",
    "name": "Emberglow Torch of Valor",
    "description": "This ridiculously oversized torch practically *radiates* with fiery enthusiasm! It’s guaranteed to light up even the darkest corners of a dragon's lair… or, you know, just your way through a cave. Wario thinks it smells faintly of burnt marshmallows.",
    "category": "equipment",
    "price": 160,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_light",
      "minor_fire_resistance",
      "chance_to_disorient_weak_enemies"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_mime",
    "levelRequirement": 3
  },
  "teyvat_item_liyue_seal_of_prosperity": {
    "id": "teyvat_item_liyue_seal_of_prosperity",
    "name": "Seal of Prosperity - A Merchant's Blessing",
    "description": "Forged by the finest artisans of Liyue Harbor, this intricately carved seal brings good fortune to your trade! It subtly increases profits and wards off grumpy customers… mostly. Wario suspects it also attracts pigeons.",
    "category": "faction",
    "price": 3700,
    "icon": "💰",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_trade_profit",
      "chance_to_negociate_better_deals",
      "minor_luck_boost"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 6
  },
  "teyvat_item_inazuma_phantom_amulet": {
    "id": "teyvat_item_inazuma_phantom_amulet",
    "name": "Phantom Amulet of the Shifting Winds",
    "description": "A curious artifact recovered from Inazuma’s turbulent seas, this amulet seems to whisper secrets on the breeze. Wearer gains a slight advantage against illusions and ethereal foes... or just feels a little chilly. Wario's tried to eat it; didn’t work.",
    "category": "curiosities",
    "price": 11000,
    "icon": "🌫️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "illusion_resistance",
      "minor_evasion_boost",
      "chance_to_detect_phantom_enemies"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "wind_ship",
    "levelRequirement": 10
  },
  "connectopia_curiosity_geode_of_wonder": {
    "id": "connectopia_curiosity_geode_of_wonder",
    "name": "Fractured Prism",
    "description": "This shimmering geode is filled with miniature, self-assembling block structures - tiny little towns trapped within. It's utterly mesmerizing and might just drive you slightly mad with its obsessive patterns!  Touching it could trigger a random burst of inspiration… or a minor spatial distortion.",
    "category": "curiosities",
    "price": 840,
    "icon": "✨",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to grant a temporary inspiration bonus (10%)",
      "provides +1 bonus to Crafting skill checks",
      "can be used as a distraction for 2 rounds"
    ],
    "vendor": "craft_corner",
    "shippedBy": "standard_mail",
    "levelRequirement": 3
  },
  "warhammer_voidreaper_2": {
    "id": "warhammer_voidreaper_2",
    "name": "Void Reaper's Embrace",
    "description": "This forbidden warhammer seems to absorb light and whispers of forgotten gods. Holding it feels...wrong, but undeniably powerful. Use at your own peril – you might just become a puppet for something far older than humanity.",
    "category": "forbidden",
    "price": 58000,
    "icon": "🖤",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "damage: 20-28 bludgeoning",
      "chance to inflict fear (10%)",
      "increases attack speed by 5%",
      "chance to summon a shadowy imp (1%)"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "dark_messenger",
    "levelRequirement": 14
  },
  "curiosity_obsidian_shard_3": {
    "id": "curiosity_obsidian_shard_3",
    "name": "Whispers of the Fallen Empire",
    "description": "A perfectly smooth shard of obsidian, pulsing with a faint energy. Holding it allows you to briefly hear fragments of conversations from the fallen empire – mostly complaints about taxes and strategic retreats. It's surprisingly distracting!",
    "category": "curiosities",
    "price": 160,
    "icon": "🔮",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "provides +1 to perception checks",
      "chance to gain a temporary buff (5%) - increased intelligence"
    ],
    "vendor": "fate_forge",
    "shippedBy": "hawk",
    "levelRequirement": 1
  },
  "teyvat_item_shimmering_echo": {
    "id": "teyvat_item_shimmering_echo",
    "name": "Shimmering Echo of Storms",
    "description": "This strangely resonant pebble seems to hum with the power of thunderstorms! Holding it allows you to briefly mimic elemental attacks, adding a small burst of lightning damage to your next strike – perfect for annoying enemies or starting a good brawl!",
    "category": "equipment",
    "price": 11000,
    "icon": "⚡️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "adds 5 lightning damage to next attack",
      "chance to stun on hit",
      "increased critical hit chance (3%)"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 9
  },
  "teyvat_item_crystallized_driftwood": {
    "id": "teyvat_item_crystallized_driftwood",
    "name": "Crystallized Driftwood of the Azure Sea",
    "description": "A beautiful piece of driftwood, imbued with a faint azure glow. Holding it grants you temporary resistance to water damage and allows you to briefly speak with aquatic creatures – useful for gathering information or avoiding getting drenched!",
    "category": "curiosities",
    "price": 840,
    "icon": "🌊",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grants 10% water resistance",
      "allows communication with aquatic creatures (limited)",
      "chance to find hidden items underwater"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_current",
    "levelRequirement": 3
  },
  "teyvat_item_archons_whisper": {
    "id": "teyvat_item_archon's_whisper",
    "name": "Archon’s Whisper - Fragment of Resonance",
    "description": "This small, intricately carved jade statuette vibrates with an almost palpable energy. It's said to contain a fragment of the Archons’ power – granting you a temporary boost to your Wisdom and allowing you to briefly perceive the flow of elemental energies around you!",
    "category": "equipment",
    "price": 8000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increases Wisdom by 5 for 60 seconds",
      "reveals elemental vulnerabilities on enemies",
      "chance to deflect spells with higher Wisdom"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "wind_messenger",
    "levelRequirement": 7
  },
  "leclaire_isle_item_sticky_tart": {
    "id": "leclaire_isle_item_sticky_tart",
    "name": "Glazed Goblin's Delight Tart",
    "description": "This suspiciously shiny tart is rumored to be a favorite of mischievous goblins. Bite into it and experience an immediate burst of sugary energy – perfect for distracting your enemies or fueling a frantic pastry-making spree!",
    "category": "consumables",
    "price": 840,
    "icon": "🍬",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores 50 HP",
      "grants +2 Dexterity for 3 turns",
      "chance to confuse target on use"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 4
  },
  "leclaire_isle_item_dough_armor": {
    "id": "leclaire_isle_item_dough_armor",
    "name": "Reinforced Doughard Plate",
    "description": "Forged from magically hardened dough, this suit of armor offers surprisingly good protection…and a faint scent of vanilla. It's not exactly stylish, but it’ll keep you safe from pastry projectiles and overly enthusiastic bakers!",
    "category": "equipment",
    "price": 11000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Increases AC by +3",
      "Grants resistance to poison damage",
      "Adds 10% chance to block incoming attacks"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Delivery Zeppelin",
    "levelRequirement": 9
  },
  "leclaire_isle_item_frosting_sculpture": {
    "id": "leclaire_isle_item_frosting_sculpture",
    "name": "Sweet Sculpting Consultation",
    "description": "Let the master Frosting Sculptor, Pipkin Crumblesprout, guide you in creating a magnificent edible masterpiece! He’ll advise on flavor combinations and structural integrity – just try not to eat your design before it's finished!",
    "category": "services",
    "price": 3700,
    "icon": "🎂",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Provides a detailed analysis of the party’s dietary needs.",
      "Offers a temporary buff to Charisma with merchants for one hour.",
      "Chance to learn a new baking recipe."
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Sugar Pigeon",
    "levelRequirement": 6
  },
  "kivotos_item_forbidden_echo_shard": {
    "id": "kivotos_item_forbidden_echo_shard",
    "name": "Resonance of Ruin",
    "description": "A jagged shard pulsing with residual chaotic energy. Touching this artifact grants a fleeting glimpse into the past, revealing hidden pathways or weaknesses in your enemies – but be warned! Prolonged exposure can cause unsettling hallucinations and attract unwanted attention from the Academy’s security forces.",
    "category": "forbidden",
    "price": 3700,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveal_hidden_paths_30%",
      "enemy_vulnerability_buff_15%",
      "chance_of_hallucination_on_use_10%"
    ],
    "vendor": "club_supply",
    "shippedBy": "black_market_courier",
    "levelRequirement": 12
  },
  "kivotos_item_student_study_pack": {
    "id": "kivotos_item_student_study_pack",
    "name": "Brain Boost Bundle",
    "description": "Packed with caffeinated inks, mental acuity enhancers, and a frankly alarming amount of notepads. This kit won’t grant you magical powers, but it *will* let you focus intently while solving complex riddles or deciphering ancient texts… mostly.",
    "category": "consumables",
    "price": 160,
    "icon": "🧠",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "concentration_boost_2",
      "skill_check_bonus_1",
      "reduced_fatigue_50%"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 3
  },
  "almost_edge_chronometric_shard": {
    "id": "almost_edge_chronometric_shard",
    "name": "Chronometric Shard",
    "description": "A pulsing fragment of temporal energy, harvested from a glitch in the boundary itself. Holding this shard briefly can slow down time for yourself, allowing you to react with impossible speed – just don't stare at it too long or you might end up stuck in a loop!",
    "category": "equipment",
    "price": 3700,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reduces enemy attack speed by 20% for 3 turns",
      "increases movement speed by 50% for 2 turns",
      "chance to rewind time on successful hit (10%)"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Package",
    "levelRequirement": 6
  },
  "almost_edge_mirror_of_lost_faces": {
    "id": "almost_edge_mirror_of_lost_faces",
    "name": "Mirror of Lost Faces",
    "description": "A polished obsidian mirror that reflects not your image, but the faces of those who have fallen off the edge...and maybe some others. Gazing into it grants a brief glimpse of forgotten realities, but at a cost - a small piece of your memory is consumed!",
    "category": "curiosities",
    "price": 11000,
    "icon": "👁️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "grants a random buff (strength, dexterity, intelligence) for 1 turn",
      "chance to reveal hidden secrets in the area (20%)",
      "causes temporary memory loss (roll d6: 1-3 = minor, 4-6 = significant)"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Delivery",
    "levelRequirement": 8
  },
  "internet_meme_repair": {
    "id": "internet_meme_repair",
    "name": "Viral Echo Restoration",
    "description": "Feeling overwhelmed by the constant flow of internet memes? This service uses advanced data compression to gently remove a single, particularly irritating meme from your mind – but be warned, it could create an even *worse* one!",
    "category": "services",
    "price": 850,
    "icon": "🔁",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "remove a single meme effect (temporary)",
      "chance of creating a worse meme",
      "boost to charisma (1 turn)"
    ],
    "vendor": "data_dealer",
    "shippedBy": "digital_signal",
    "levelRequirement": 5
  },
  "teyvat_item_sparkling_rune": {
    "id": "teyvat_item_sparkling_rune",
    "name": "Sparkling Rune of Aetherial Resonance",
    "description": "This tiny rune pulses with raw elemental energy, a souvenir from the heavens themselves! It’s rumored to amplify your connection to the Archon's power – just don't try to eat it; Wario warned you.",
    "category": "curiosities",
    "price": 850,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_elemental_resistance_vulnerability",
      "chance_to_deal_bonus_damage_with_elemental_attacks",
      "minor_healing_on_critical_hits"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swiftwind Courier",
    "levelRequirement": 4
  },
  "teyvat_item_loyalty_token": {
    "id": "teyvat_item_loyalty_token",
    "name": "Token of the Five Pillars' Accord",
    "description": "A polished jade token bearing the emblem of the Five Pillars – a surprisingly comfortable chew toy for Wario, if he could get his paws on it! This token grants favor with Liyue’s merchants and unlocks exclusive discounts… or at least, that’s what they say.",
    "category": "faction",
    "price": 3700,
    "icon": "💰",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_trade_success_rate",
      "discount_on_lyue_goods",
      "chance_to_receive_a_free_item_from_vendors"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Merchant's Caravan",
    "levelRequirement": 8
  },
  "teyvat_item_chronal_amulet": {
    "id": "teyvat_item_chronal_amulet",
    "name": "Chronal Amulet of Temporal Distortion",
    "description": "This amulet hums with the echoes of time itself – though it mostly just makes your stomach rumble. Use it wisely, or you might end up stuck in a loop chasing after Wario’s dropped coins!",
    "category": "equipment",
    "price": 11000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_rewind_time_on_critical_hit",
      "slow_enemy_movement_speed",
      "increased_stamina_regeneration"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 10
  },
  "animatopia_fang_amulet": {
    "id": "animatopia_fang_amulet",
    "name": "Howler's Charm",
    "description": "This crudely carved amulet is made from the fang of a juvenile Rumbleclaw - known for its surprisingly melodic roars. Wearing this will temporarily boost your intimidation skills and might even scare off some smaller critters!",
    "category": "equipment",
    "price": 11000,
    "icon": "🐺",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased intimidation by 10",
      "chance to inflict fear on weaker enemies (5%)",
      "boosts charisma skill by 2"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 9
  },
  "animatopia_primal_song": {
    "id": "animatopia_primal_song",
    "name": "Echoes of the Ancients",
    "description": "A skilled shaman crafted this haunting melody using bone flutes and rhythmic drumming. Listening to it can provide a temporary boost to party morale and even reveal hidden pathways within the forest.",
    "category": "services",
    "price": 850,
    "icon": "🎶",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores 20 party morale",
      "reveals hidden passages (small chance)",
      "increases perception by 1 for 3 turns"
    ],
    "vendor": "forest_market",
    "shippedBy": "Swift Squirrel Messenger",
    "levelRequirement": 5
  },
  "animatopia_beetle_shell": {
    "id": "animatopia_beetle_shell",
    "name": "Chittering Armor Scales",
    "description": "Collected from the discarded shells of the giant Chitter Beetles, these scales are surprisingly tough! They won't make you look fashionable, but they *will* protect your backside... and maybe attract a few hungry predators.",
    "category": "equipment",
    "price": 160,
    "icon": "🐞",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "armor class +1",
      "chance to trigger a distracting chitter sound (2%)",
      "lightweight - doesn't impede movement"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Winged Grub Delivery",
    "levelRequirement": 3
  },
  "teyvat_item_liyue_guardian_amulet": {
    "id": "teyvat_item_liyue_guardian_amulet",
    "name": "Liyue Guardian's Blessing",
    "description": "Forged by the artisans of Liyue Harbor, this amulet radiates a calming aura. Wario thinks it’s ‘perfect for collecting shiny things,’ but it actually grants resistance to Fire damage – useful if you’re battling Pyro monsters!",
    "category": "equipment",
    "price": 11000,
    "icon": "🛡️",
    "stock": 21,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Grants +3 Fire Resistance",
      "Increases movement speed by 5%",
      "Provides a small chance to reflect damage back to attackers"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "shipping_cart",
    "levelRequirement": 12
  },
  "teyvat_item_inazuma_phantom_scroll": {
    "id": "teyvat_item_inazuma_phantom_scroll",
    "name": "Phantom Scroll of Transient Dreams",
    "description": "A meticulously crafted scroll imbued with the essence of Inazuman phantoms. Wario’s convinced it's a ‘really fancy paperweight,’ but this item allows you to briefly glimpse into possible futures – though mostly just blurry images of him eating cake!",
    "category": "curiosities",
    "price": 810000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Grants a 3% chance to dodge all attacks for 5 seconds.",
      "Reveals the next enemy's attack pattern.",
      "Provides temporary insight into enemy weaknesses."
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 30
  },
  "faerun_item_enchanting_services_rune": {
    "id": "faerun_item_enchanting_services_rune",
    "name": "Rune of Minor Restoration (Service)",
    "description": "This tiny, pulsating rune promises to mend minor wounds and soothe aches. It’s a quick fix for adventurers who've stumbled into a particularly nasty patch of poison ivy or gotten accidentally flattened by a grumpy troll. Don’t expect miracles – this is just good for a little TLC!",
    "category": "services",
    "price": 850,
    "icon": "🩹",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "heal_60_hit_points",
      "remove_poison_effect_1_level",
      "remove_disease_effect_1_level"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_familiar",
    "levelRequirement": 4
  },
  "faerun_item_obsidian_amulet": {
    "id": "faerun_item_obsidian_amulet",
    "name": "Amulet of Whispering Shadows",
    "description": "Crafted from polished obsidian, this amulet hums with a faint, unsettling energy. Legend says it whispers secrets to its wearer – mostly about where Wario hid his loot… or perhaps directions through particularly dark dungeons. Handle with caution!",
    "category": "curiosities",
    "price": 11000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "advantage_on_stealth_checks",
      "grant_night_vision",
      "chance_to_detect_hidden_objects"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "giant_eagle",
    "levelRequirement": 10
  },
  "fate_rune_reading": {
    "id": "fate_rune_reading",
    "name": "Fate Rune Reading",
    "description": "Let the mysterious Fate Forger unravel your destiny! They'll spend an hour meticulously interpreting ancient runes, offering cryptic advice and a surprisingly accurate (or wildly misleading) glimpse into what’s to come. Don’t blame them if you end up fighting a badger.",
    "category": "services",
    "price": 3700,
    "icon": "🔮",
    "stock": 28,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to receive a prophecy (success rate: 30%)",
      "chance to gain a minor luck buff (duration: 1 hour)",
      "may reveal a hidden weakness of an enemy"
    ],
    "vendor": "fate_forge",
    "shippedBy": "scroll",
    "levelRequirement": 8
  },
  "middle_earth_ringwraith_shards": {
    "id": "middle_earth_ringwraith_shards",
    "name": "Wraith's Echo Shard",
    "description": "These jagged fragments hum with the lingering sorrow of fallen Ringwraiths! Holding one briefly grants a chilling whisper of despair, potentially inflicting fear on nearby enemies – it’s like having a tiny, grumpy ghost shouting insults!",
    "category": "curiosities",
    "price": 850,
    "icon": "👻",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "fear_chance_10%",
      "sanity_drain_1",
      "minor_illusion"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 6
  },
  "middle_earth_dwarven_battleaxe_of_grit": {
    "id": "middle_earth_dwarven_battleaxe_of_grit",
    "name": "Stonebeard's Stubborn Swing",
    "description": "Forged in the deepest dwarven halls, this axe practically *demands* a good fight! It’s incredibly durable and imbued with stubbornness - perfect for those pesky enemies who just won't go down!",
    "category": "equipment",
    "price": 3700,
    "icon": "⛏️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "damage_slashing_3d6",
      "armor_class_bonus_2",
      "resistance_poison"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_worm",
    "levelRequirement": 8
  },
  "middle_earth_gondorian_scroll_of_forgotten_prayers": {
    "id": "middle_earth_gondorian_scroll_of_forgotten_prayers",
    "name": "Echoes of the Faithful",
    "description": "A crumbling scroll containing ancient Gondorian prayers – supposedly whispered by heroes long gone. Opening it triggers a brief burst of divine energy, healing the wielder and bolstering their resolve, though sometimes the whispers are a bit… unsettling.",
    "category": "consumables",
    "price": 820000,
    "icon": "🙏",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "heal_amount_75",
      "wisdom_bonus_2",
      "chance_of_divine_intervention_5%"
    ],
    "vendor": "shire_shop",
    "shippedBy": "silver_hawk",
    "levelRequirement": 30
  },
  "mushroom_kingdom_item_glowing_mushroom": {
    "id": "mushroom_kingdom_item_glowing_mushroom",
    "name": "Glowshroom of Unending Delight",
    "description": "This pulsating mushroom emits an irresistible aura of joy, temporarily boosting your luck and making you slightly less likely to trip. It’s rumored to be a favorite snack of the Mushroom Kingdom's elite – and occasionally, Wario.",
    "category": "consumables",
    "price": 850,
    "icon": "🍄",
    "stock": 63,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_luck",
      "reduce_fall_damage",
      "grant_temporary_speed"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 5
  },
  "mushroom_kingdom_item_warp_pipe_fragment": {
    "id": "mushroom_kingdom_item_warp_pipe_fragment",
    "name": "Echoing Fragment of the Shifting Pipes",
    "description": "A shard of a corrupted warp pipe, humming with unstable energy. Touching it allows for brief, unpredictable teleportation – but be warned, you might end up in a puddle or worse!",
    "category": "curiosities",
    "price": 3700,
    "icon": "🌀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "random_teleportation",
      "chance_of_negative_status_effect",
      "small_movement_speed_boost"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_mail",
    "levelRequirement": 9
  },
  "mushroom_kingdom_item_forbidden_heartstone": {
    "id": "mushroom_kingdom_item_forbidden_heartstone",
    "name": "Heartstone of the Mushroom King's Corruption",
    "description": "A pulsating, crimson stone said to contain a fragment of the Mushroom King’s dark power. Prolonged contact will slowly corrupt your mind and grant you minor abilities, but at a terrible cost – like an insatiable craving for coins.",
    "category": "forbidden",
    "price": 58000,
    "icon": "❤️",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "grant_temporary_strength",
      "chance_of_corruption_status_effect",
      "increase_coin_drop_rate"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 15
  },
  "leclaire_isle_item_sticky_sweet_slug": {
    "id": "leclaire_isle_item_sticky_sweet_slug",
    "name": "Sticky Sweet Slug",
    "description": "This glistening, gelatinous slug isn't just delicious - it practically melts in your mouth! It’s rumored to be crafted from the purest honey and enchanted dough, granting incredible bursts of energy after consumption. Don't worry, it doesn't try to crawl away!",
    "category": "consumables",
    "price": 160,
    "icon": "🐌",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restore_30_health",
      "grant_temporary_speed_boost",
      "increase_luck_chance_10%"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_pony",
    "levelRequirement": 1
  },
  "leclaire_isle_item_dwarfstone_rollingpin": {
    "id": "leclaire_isle_item_dwarfstone_rollingpin",
    "name": "Dwarfstone Rolling Pin",
    "description": "Forged from a single chunk of magically-infused dwarfstone, this rolling pin is guaranteed to flatten any foe! It’s surprisingly heavy and emits a faint aroma of cinnamon and slightly grumpy dwarves. Just be careful not to accidentally crush your pastries.",
    "category": "equipment",
    "price": 3700,
    "icon": "🔨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_melee_damage_10%",
      "chance_to_apply_slow_on_hit",
      "provides_armor_5"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "magic_scroll",
    "levelRequirement": 6
  },
  "leclaire_isle_item_whimsical_dough_orb": {
    "id": "leclaire_isle_item_whimsical_dough_orb",
    "name": "Whimsical Dough Orb",
    "description": "A miniature, perpetually shifting orb of enchanted dough! It occasionally emits giggles and may spontaneously rearrange itself into tiny gingerbread men. Touching it grants a fleeting moment of pure joy (and possibly sticky fingers).",
    "category": "curiosities",
    "price": 850,
    "icon": "✨",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "chance_to_heal_small_amount",
      "increase_charisma_10%",
      "provides_minor_illusion_effect"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "spectral_delivery_bird",
    "levelRequirement": 4
  },
  "midlands_item_rusty_dagger": {
    "id": "midlands_item_rusty_dagger",
    "name": "Bloodsoaked Shard",
    "description": "This dagger looks like it's seen better days... and probably a lot of battles! It’s surprisingly sharp, imbued with the lingering fury of countless Midlands skirmishes. Wario would totally use this to steal shiny things!",
    "category": "consumables",
    "price": 160,
    "icon": "🔪",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 2 slashing damage",
      "chance to inflict bleeding (10%)"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "pony_express",
    "levelRequirement": 1
  },
  "midlands_item_imperial_scroll": {
    "id": "midlands_item_imperial_scroll",
    "name": "Decree of Petty Tyranny",
    "description": "A meticulously crafted scroll detailing the latest (and utterly ridiculous) edicts from the distant Imperial court. It's rumored to hold a secret clause granting the reader temporary authority over pigeons – pure genius!",
    "category": "premium",
    "price": 3700,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grants +3 charisma for 3 turns",
      "chance to intimidate a low-level NPC (20%)"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "royal_messenger",
    "levelRequirement": 6
  },
  "midlands_item_godly_amulet_of_discord": {
    "id": "midlands_item_godly_amulet_of_discord",
    "name": "The Cacophony Heart",
    "description": "This amulet pulses with a strange, unsettling energy. Wearing it will amplify nearby arguments and sow chaos amongst your enemies – perfect for distracting guards or causing general mayhem! Wario's probably already trying to sell this as a 'mood enhancer'.",
    "category": "equipment",
    "price": 150000,
    "icon": "🔊",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "+5 charisma (reduces NPC hostility)",
      "enemies have a 30% chance to attack each other",
      "chance to cause temporary confusion in an enemy (15%)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 20
  },
  "faerun_item_bloodstone_amulet": {
    "id": "faerun_item_bloodstone_amulet",
    "name": "Bloodstone Amulet of Twisted Fate",
    "description": "This unsettling amulet pulses with a dark, crimson energy. It’s rumored to have been crafted by a fallen god – and frankly, it looks like it's judging your life choices.  Wear at your own risk; you might start seeing things… or worse.",
    "category": "forbidden",
    "price": 3700,
    "icon": "🩸",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to inflict 'confusion' on enemies",
      "grants +1d6 temporary hit points (but at a cost...)",
      "occasionally causes uncontrollable urges to hoard shiny objects"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dark portal",
    "levelRequirement": 12
  },
  "grand_country_forbidden_shard": {
    "id": "grand_country_forbidden_shard",
    "name": "Echoes of Oblivion",
    "description": "A fragment ripped from the fabric of forgotten realities. Holding this shard whispers unsettling truths and can briefly warp space around you, but prolonged exposure… well, let’s just say it's best to admire from a distance.",
    "category": "forbidden",
    "price": 73000,
    "icon": "💀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_of_reality_distortion",
      "minor_illusion_casting",
      "small_damage_on_touch"
    ],
    "vendor": "side_seller",
    "shippedBy": "void_packet",
    "levelRequirement": 17
  },
  "grand_country_layer_cake_charm": {
    "id": "grand_country_layer_cake_charm",
    "name": "Chronometric Confection",
    "description": "A tiny, edible replica of a layer cake, imbued with temporal magic! When consumed, it grants the user a fleeting glimpse into potential futures... mostly involving Wario eating all the cake.",
    "category": "curiosities",
    "price": 160,
    "icon": "🍰",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_short_vision",
      "chance_of_future_prediction",
      "minor_luck_boost"
    ],
    "vendor": "layer_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 3
  },
  "animatopia_claw_of_the_howler": {
    "id": "animatopia_claw_of_the_howler",
    "name": "Claw of the Howler",
    "description": "This massive claw, shed by a particularly grumpy howler monkey, vibrates with raw jungle energy. It’s surprisingly comfortable to wear… if you don't mind the occasional screeching sound.",
    "category": "equipment",
    "price": 3700,
    "icon": "🐾",
    "stock": 5,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased attack damage",
      "chance to inflict fear",
      "boosts agility"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_beetle",
    "levelRequirement": 7
  },
  "animatopia_whispering_moss_charm": {
    "id": "animatopia_whispering_moss_charm",
    "name": "Whispering Moss Charm",
    "description": "Crafted from luminescent moss found only in the deepest parts of Animatopia's caves, this charm seems to murmur secrets. It’s rumored to guide those who listen closely… or drive them utterly mad.",
    "category": "curiosities",
    "price": 850,
    "icon": "🌿",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to detect hidden objects",
      "minor healing effect",
      "increases perception"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_snail",
    "levelRequirement": 3
  },
  "animatopia_legendary_scale_of_the_dragonheart": {
    "id": "animatopia_legendary_scale_of_the_dragonheart",
    "name": "Scale of the Dragonheart",
    "description": "A shimmering scale, pulsating with ancient magic, said to have fallen from the legendary Dragonheart beast. Wearing this scale is like having a tiny, grumpy dragon guarding your soul – mostly.",
    "category": "equipment",
    "price": 59000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "significant damage boost to all attacks",
      "chance to summon a small dragon familiar",
      "immunity to fear effects",
      "increased charisma"
    ],
    "vendor": "forest_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 15
  },
  "equestria_item_mane_weave_treatment": {
    "id": "equestria_item_mane_weave_treatment",
    "name": "Mane Weave Restoration Serum",
    "description": "Feeling a little…unfluffy? This potent serum will restore your mane to its former glory, smoothing frizz and adding a healthy shine. Just don't spill it on yourself – you might end up looking like Fluttershy!",
    "category": "services",
    "price": 850,
    "icon": "🐴",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores_mane_quality_50%",
      "chance_to_reduce_wind_resistance_15%"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "equestria_item_starfall_dust": {
    "id": "equestria_item_starfall_dust",
    "name": "Starfall Dust",
    "description": "Collected from the remnants of a fallen star, this dust is rumored to grant wishes…or at least make things sparkly. Wario's already tried wishing for infinite coins – no luck!",
    "category": "curiosities",
    "price": 160,
    "icon": "🌟",
    "stock": 15,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance_to_grant_small_buff_10%",
      "increases_sparkle_level_2"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "delivery_only",
    "levelRequirement": 1
  },
  "the_edge_volatile_potion": {
    "id": "the_edge_volatile_potion",
    "name": "Chaos in a Flask",
    "description": "A swirling, iridescent potion that tastes suspiciously like regret and static. Drink it for an unpredictable burst of energy... or a catastrophic meltdown!",
    "category": "consumables",
    "price": 170,
    "icon": "🧪",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_speed",
      "chance_of_poisoning",
      "boosts_strength"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1
  },
  "the_edge_godly_voidstone": {
    "id": "the_edge_godly_voidstone",
    "name": "Nullstone of the Infinite Abyss",
    "description": "This obsidian sphere radiates an unsettling calm, drawing in all light and sound. It offers a fleeting connection to the void itself – use with extreme caution, or become one with it!",
    "category": "equipment",
    "price": 830000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increased_magic_resistance",
      "chance_to_nullify_enemy_spell",
      "grants_immunity_to_fear",
      "passive_healing"
    ],
    "vendor": "final_shop",
    "shippedBy": "Celestial Cartographer",
    "levelRequirement": 30
  },
  "midlands_item_shadowscale_amulet": {
    "id": "midlands_item_shadowscale_amulet",
    "name": "Amulet of Whispered Secrets",
    "description": "Crafted by the secretive Shadowguard, this amulet whispers cryptic warnings and hints – mostly about where to find discarded turnips. It's surprisingly effective at distracting guards... or just making you paranoid.",
    "category": "equipment",
    "price": 860,
    "icon": "🤫",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to reveal hidden passages",
      "+5 to deception checks",
      "reduces enemy detection radius by 20%"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "hawk",
    "levelRequirement": 5
  },
  "midlands_item_broken_blade_of_despair": {
    "id": "midlands_item_broken_blade_of_despair",
    "name": "Shard of the Fallen Regent",
    "description": "A jagged fragment of a legendary sword, said to have been wielded by a despairing emperor. It doesn’t do much damage, but it *does* radiate an aura of existential dread... perfect for scaring goblins or starting a philosophical debate with your party.",
    "category": "curiosities",
    "price": 3700,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "chance to inflict 'fear' on weaker enemies",
      "reduces enemy attack power by 10%",
      "provides +2 to Wisdom saving throws (for the faint of heart)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant_beetle",
    "levelRequirement": 7
  },
  "doughnut_hole_gravitic_crumb": {
    "id": "doughnut_hole_gravitic_crumb",
    "name": "Void Crumb",
    "description": "These oddly dense crumbs seem to defy gravity, occasionally floating upwards before collapsing back down with a tiny *thump*. Eating one grants temporary resistance to falling damage and a slight boost to your spatial awareness – useful when you're staring into the endless void.",
    "category": "consumables",
    "price": 860,
    "icon": "✨",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant temporary resistance to falling damage (3 turns)",
      "increase spatial awareness (10%)",
      "chance to gain a small amount of void energy"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_ripple",
    "levelRequirement": 2
  }
};
