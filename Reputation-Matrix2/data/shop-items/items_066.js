// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_066 = {
  "teyvat_item_archon_whisper": {
    "id": "teyvat_item_archon_whisper",
    "name": "Archon Whisper Stone",
    "description": "Carved from a fragment of an Archon's decree, this stone allows you to briefly understand the subtle language of elemental spirits. Just don’t ask it about Wario’s schemes – it gets… uncomfortable.",
    "category": "curiosities",
    "price": 800,
    "icon": "🗣️",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "elemental_communication_2",
      "chance_to_find_hidden_paths"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_current",
    "levelRequirement": 5
  },
  "teyvat_item_elemental_resonance_scan": {
    "id": "teyvat_item_elemental_resonance_scan",
    "name": "Elemental Resonance Scan",
    "description": "This device analyzes the residual elemental energy within a target, revealing its affinity and potential weaknesses. Wario uses this to find the best spots for mushroom farming - seriously, the man's brilliant!",
    "category": "services",
    "price": 1200,
    "icon": "🔍",
    "stock": 38,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reveals_elemental_affinity",
      "chance_to_discover_weaknesses",
      "increases_perception_5"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "oceanic_current",
    "levelRequirement": 12
  },
  "almost_edge_item_wario_crumb_boots": {
    "id": "almost_edge_item_wario_crumb_boots",
    "name": "Wario's Crumble Boots",
    "description": "These boots were forged from solidified despair and Wario’s discarded crumbs. Each step leaves a shimmering trail of delicious, yet unsettling, sweetness. They make you strangely resistant to falling... mostly.",
    "category": "equipment",
    "price": 700,
    "icon": "👟",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "+2 to Acrobatics checks",
      "chance to avoid falling (10%)",
      "slows downward momentum by 50%",
      "grants a small amount of sticky residue on surfaces"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravity well",
    "levelRequirement": 6
  },
  "almost_edge_item_liminal_echo_stone": {
    "id": "almost_edge_item_liminal_echo_stone",
    "name": "Liminal Echo Stone",
    "description": "This smooth, grey stone resonates with the forgotten corners of this place. Touching it briefly allows you to hear faint echoes of past events... mostly just static and unsettling giggles.",
    "category": "curiosities",
    "price": 350,
    "icon": "🔈",
    "stock": 90,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to trigger a minor illusion (1%)",
      "provides vague clues about nearby dangers",
      "reduces fear effect by 50%",
      "slightly increases the chance of finding lost items"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "quantum entanglement",
    "levelRequirement": 3
  },
  "grand_country_layer_charm": {
    "id": "grand_country_layer_charm",
    "name": "The Shifting Stratum",
    "description": "A curious charm crafted from solidified layer-stuff. It allows the wearer to briefly shift between adjacent layers of space, offering a tactical advantage in complex environments. Don’t get stuck though – overuse can cause some serious disorientation!",
    "category": "curiosities",
    "price": 800,
    "icon": "🌀",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "teleport: short range (3 tiles)",
      "chance_of_confusion: 5%",
      "increased_perception: +1",
      "minor_illusion_effect"
    ],
    "vendor": "layer_market",
    "shippedBy": "Standard Post",
    "levelRequirement": 3
  },
  "grand_country_service_resonance": {
    "id": "grand_country_service_resonance",
    "name": "Harmonic Healing Touch",
    "description": "A skilled healer’s touch infused with resonant energy. This service will rapidly mend wounds and soothe ailments, offering a temporary reprieve from pain and suffering - perfect for Wario's explosive nature! Remember to tip generously (gold, obviously).",
    "category": "services",
    "price": 600,
    "icon": "❤️‍🩹",
    "stock": 28,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal: 15 hp",
      "remove_poison: 1 level",
      "remove_disease: 1 level",
      "minor_buff: +1 charisma"
    ],
    "vendor": "side_seller",
    "shippedBy": "Personal Courier",
    "levelRequirement": 1
  },
  "equestria_item_godly_harmony_amulet": {
    "id": "equestria_item_godly_harmony_amulet",
    "name": "Amulet of Ultimate Harmony",
    "description": "This amulet radiates an aura of perfect balance, capable of suppressing chaos and amplifying friendship! Wario believes it could finally make him a nice pony...but it might also just turn him into a giant, sparkly statue.",
    "category": "premium",
    "price": 850000,
    "icon": "☮️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "back_order",
    "effects": [
      "grants_immunity_to_chaos",
      "increases_friendship_level",
      "chance_to_negate_status_effects",
      "boosts_healing_effectiveness"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 30
  },
  "curiosity_oracle_shard": {
    "id": "curiosity_oracle_shard",
    "name": "Fragment of the Oracle's Gaze",
    "description": "This pulsating shard seems to whisper forgotten prophecies and unsettling truths. Touching it grants a brief glimpse into possible futures, but be warned - knowledge can corrupt even the purest soul!  It’s surprisingly comfortable to hold, too.",
    "category": "curiosities",
    "price": 80000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to reveal hidden paths: 20%",
      "provides cryptic prophecy hints (3/day)",
      "temporary +5 wisdom modifier",
      "small chance of madness (1% per day)"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Spectral Delivery Service",
    "levelRequirement": 20
  },
  "service_persuasion_charm": {
    "id": "service_persuasion_charm",
    "name": "The Silver Tongue of Influence",
    "description": "This exquisitely crafted charm pulses with subtle energy, enhancing your ability to sway opinions and manipulate conversations. It’s perfect for charming guards, negotiating deals, or convincing a stubborn goblin to part with his treasure… Wario recommends it!",
    "category": "services",
    "price": 1200,
    "icon": "🗣️",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased persuasion skill: +4",
      "chance to influence NPC actions: 15%",
      "advantage on deception checks",
      "reduces hostility from NPCs"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 3
  },
  "pokemon_item_sparkling_berry": {
    "id": "pokemon_item_sparkling_berry",
    "name": "Sparkling Berry of Wonder",
    "description": "These berries shimmer with captured Pokémon energy! Munching on one grants a temporary boost to your stats, making you feel like a true battle master – and maybe a little bit sparkly.",
    "category": "consumables",
    "price": 650,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_stat_boost (strength)",
      "chance to inflict confusion",
      "recover a small amount of HP"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poké Mail Drone",
    "levelRequirement": 1
  },
  "pokemon_item_ancient_badge_of_valor": {
    "id": "pokemon_item_ancient_badge_of_valor",
    "name": "Ancient Badge of Valor",
    "description": "A weathered badge, imbued with the spirit of legendary trainers. Wearing this grants a small but steady bonus to your attack and defense – perfect for facing down even the toughest Pokémon!",
    "category": "equipment",
    "price": 6800,
    "icon": "🏆",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "permanent stat boost (attack +5)",
      "permanent stat boost (defense +3)",
      "chance to crit on attack"
    ],
    "vendor": "league_store",
    "shippedBy": "Elite Trainer Courier",
    "levelRequirement": 8
  },
  "pokemon_item_phantom_feather": {
    "id": "pokemon_item_phantom_feather",
    "name": "Phantom Feather of Echoes",
    "description": "A single feather, said to have fallen from a Ghost-type Pokémon’s wing. Holding it allows you to briefly hear whispers of battles past – useful for scouting or confusing your foes!",
    "category": "curiosities",
    "price": 230000,
    "icon": "👻",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "chance to inflict paralysis",
      "reveal hidden paths",
      "temporary stat boost (speed)"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Dimensional Rift Portal",
    "levelRequirement": 20
  },
  "connectopia_circuit_breaker_shard": {
    "id": "connectopia_circuit_breaker_shard",
    "name": "Fragment of the Null Conduit",
    "description": "Recovered from a collapsed data nexus, this shard hums with suppressed energy. It's rumored to disrupt electronic devices and cause temporary confusion in mechanical constructs…perfect for a little mischief!",
    "category": "forbidden",
    "price": 8000,
    "icon": "💥",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to disable a mechanical enemy for 1 round",
      "causes a small electrical shock on hit (10% chance)",
      "lowers the accuracy of automated defenses"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Roving Scout Drone",
    "levelRequirement": 7
  },
  "connectopia_blueprint_for_portable_mine": {
    "id": "connectopia_blueprint_for_portable_mine",
    "name": "Schematic for the 'Dig-o-Matic'",
    "description": "This blueprint, etched onto a surprisingly durable block of quartz, details how to construct a miniature automated mining unit! It’s slightly unstable and prone to spontaneous disassembly…but hey, that's part of the fun!",
    "category": "curiosities",
    "price": 350,
    "icon": "⛏️",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grants the ability to craft a 'Dig-o-Matic' (requires basic crafting skills)",
      "the Dig-o-Matic mines for small amounts of ore and gems"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 3
  },
  "internet_meme_therapy": {
    "id": "internet_meme_therapy",
    "name": "Existential Validation Session",
    "description": "Feeling a little… *void*? This service provides a temporary boost to confidence and morale by flooding your mind with the most popular memes of The Internet. Warning: Prolonged use may result in an uncontrollable urge to repost.",
    "category": "services",
    "price": 18000,
    "icon": "😂",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "morale_boost_v",
      "chance_to_charm_hostile_creatures",
      "temporary_buff_charisma"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Neural Interface",
    "levelRequirement": 5
  },
  "almost_edge_item_voidwalker_amulet": {
    "id": "almost_edge_item_voidwalker_amulet",
    "name": "Amulet of the Liminal Step",
    "description": "Crafted from solidified void-stuff, this amulet allows the wearer to briefly phase through thin barriers. Just don't get stuck – it’s surprisingly difficult to return!",
    "category": "equipment",
    "price": 1200,
    "icon": "🌌",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_pass_through_weak_walls",
      "increased_stealth",
      "minor_resistance_to_fear"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 8
  },
  "almost_edge_item_forgotten_echoes": {
    "id": "almost_edge_item_forgotten_echoes",
    "name": "Forgotten Echoes of the Lost",
    "description": "A collection of tiny, spectral music boxes. When wound, they play haunting melodies from a forgotten era, potentially attracting unwanted attention... or just making you feel really sad.",
    "category": "faction",
    "price": 8500,
    "icon": "🎶",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_attract_ghosts",
      "increased_charisma",
      "small_healing_over_time"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "phantom_delivery",
    "levelRequirement": 10
  },
  "connectopia_block_shimmer": {
    "id": "connectopia_block_shimmer",
    "name": "Shimmering Resonance Block",
    "description": "This oddly pulsating block seems to hum with the energy of Connectopia itself! Rubbing it against another block generates a surprisingly strong harmonic vibration, potentially boosting crafting speed or even revealing hidden tunnels. Don't stare at it for too long; Wario says it gives him the hiccups.",
    "category": "equipment",
    "price": 18000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "crafting_speed_boost_2",
      "chance_to_reveal_tunnel",
      "increased_mining_luck"
    ],
    "vendor": "block_smith",
    "shippedBy": "crate",
    "levelRequirement": 9
  },
  "connectopia_blueprint_analysis": {
    "id": "connectopia_blueprint_analysis",
    "name": "Automated Blueprint Scan",
    "description": "Let the Pioneer Post’s automated scanners dissect your blueprints! They'll instantly identify optimal crafting materials and provide a detailed analysis of potential structural weaknesses, saving you time and maybe even preventing a collapse. It's like having a tiny robot engineer yelling at you – in a helpful way!",
    "category": "services",
    "price": 7500,
    "icon": "🔍",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "crafting_time_reduction_3",
      "blueprint_optimization"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "drone",
    "levelRequirement": 5
  },
  "connectopia_shard_of_nexus": {
    "id": "connectopia_shard_of_nexus",
    "name": "Shard of Nexus",
    "description": "This fragment of raw Connectopian energy feels…wrong. It pulses with an unsettling, yet strangely powerful force. Wario believes it's just ‘shiny,’ but the locals whisper tales of distorted realities and block monsters drawn to its chaotic vibration. Handle with extreme caution!",
    "category": "curiosities",
    "price": 250000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_summon_block_monster",
      "temporary_reality_distortion",
      "increased_mana_regen"
    ],
    "vendor": "craft_corner",
    "shippedBy": "teleportation",
    "levelRequirement": 25
  },
  "teyvat_item_oceanic_pearl": {
    "id": "teyvat_item_oceanic_pearl",
    "name": "Oceanic Resonance Pearl",
    "description": "A shimmering pearl harvested from the deepest trenches of Liyue. It resonates with Hydro energy, granting you control over water and a slight chance to create miniature whirlpools around your enemies – perfect for drowning grumpy merchants!",
    "category": "consumables",
    "price": 350,
    "icon": "💧",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores 20 HP",
      "chance to slow enemy movement speed by 15%"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Seabird Delivery",
    "levelRequirement": 3
  },
  "equestria_item_legendary_rainbow_shard": {
    "id": "equestria_item_legendary_rainbow_shard",
    "name": "Legendary Rainbow Shard of Discord",
    "description": "A fragment of a rainbow ripped from the heart of an ancient storm! This shard pulses with chaotic energy, and while it can be used to amplify magical effects, prolonged exposure risks unleashing unpredictable bursts of color and…well, maybe even a little bit of discord. Wario wouldn’t recommend messing with this one.",
    "category": "equipment",
    "price": 65000,
    "icon": "🌈",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "magic amplification +10%",
      "chance of minor chaotic effect (roll d6: 1-3 = temporary confusion, 4-6 = random stat decrease)",
      "resistant to negative energy"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 25
  },
  "kivotos_item_halo_of_perfect_notes": {
    "id": "kivotos_item_halo_of_perfect_notes",
    "name": "Harmonic Halo of the Discordant Choir",
    "description": "A strangely comforting halo that seems to resonate with musical energy. Touching it produces a cacophony of beautiful and terrible sounds, potentially stunning nearby foes or boosting your own magical prowess – mostly depending on how well you can handle the noise.",
    "category": "curiosities",
    "price": 850,
    "icon": "🎶",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to stun enemies on hit (10%)",
      "increases spell damage by 5%",
      "creates a small area of silence for 3 seconds"
    ],
    "vendor": "club_supply",
    "shippedBy": "delivery_only",
    "levelRequirement": 4
  },
  "kivotos_item_student_notebook_of_secrets": {
    "id": "kivotos_item_student_notebook_of_secrets",
    "name": "The Codex of Curious Queries",
    "description": "A ridiculously detailed student notebook filled with bizarre theories, half-baked spells, and doodles of strangely shaped pastries. Flipping through the pages might reveal a hidden clue or trigger a minor beneficial effect – but mostly just makes you look like a slightly deranged scholar.",
    "category": "curiosities",
    "price": 380,
    "icon": "📝",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to gain a small amount of XP (5%)",
      "increases chance of finding hidden items by 2%",
      "provides minor insight into enemy weaknesses"
    ],
    "vendor": "student_store",
    "shippedBy": "delivery_only",
    "levelRequirement": 2
  },
  "warhammer_emberbomb": {
    "id": "warhammer_emberbomb",
    "name": "Emberbomb of Despair",
    "description": "A volatile concoction packed with concentrated despair and fiery magic. Toss this little beauty at your foes, and watch them weep…or just burn spectacularly! Wario recommends using it to spice up his chili.",
    "category": "consumables",
    "price": 350,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "deal_fire_damage",
      "chance_to_stun",
      "apply_debuff_weakness"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 3
  },
  "grand_country_faction_charm": {
    "id": "grand_country_faction_charm",
    "name": "The Stone Shepherd’s Blessing",
    "description": "A beautifully crafted charm depicting a stoic shepherd tending to his flock of oddly shaped rocks. Wearing this grants you the favor of the Stone Shepherds - protectors of precarious places and master builders.",
    "category": "faction",
    "price": 1200,
    "icon": "🐑",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "minor_healing",
      "increased_stability",
      "chance_to_avoid_falling"
    ],
    "vendor": "side_seller",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1
  },
  "equestria_item_glittering_hoof_boots": {
    "id": "equestria_item_glittering_hoof_boots",
    "name": "Glittering Hoof Boots",
    "description": "These boots shimmer with captured starlight, making every step a dazzling spectacle. They're surprisingly comfortable for ponies who enjoy excessive glitter – and a little bit of mischief!",
    "category": "equipment",
    "price": 12000,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed",
      "minor_glitter_aura",
      "chance_to_charm_enemies"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Mail Pegasus",
    "levelRequirement": 10
  },
  "equestria_item_shadow_mane_scroll": {
    "id": "equestria_item_shadow_mane_scroll",
    "name": "Shadow Mane Scroll of Whispers",
    "description": "A dark, enchanted scroll that seems to absorb the light. Unraveling its secrets grants cryptic warnings and unsettling visions – perfect for a discerning investigator (or someone who enjoys a good scare!).",
    "category": "curiosities",
    "price": 800,
    "icon": "🌑",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_reveal_hidden_secrets",
      "minor_illusion_effect",
      "chance_to_cause_fear"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 5
  },
  "equestria_item_nightmare_shard": {
    "id": "equestria_item_nightmare_shard",
    "name": "Nightmare Shard of Discord",
    "description": "A fragment of pure, concentrated nightmare energy. Touching it induces unsettling visions and a creeping sense of dread - use with caution; Wario doesn't recommend using this for party games!",
    "category": "forbidden",
    "price": 6000,
    "icon": "😈",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_to_inflict_fear",
      "minor_damage_over_time",
      "chance_to_cause_temporary_confusion"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Black Market Courier",
    "levelRequirement": 15
  },
  "teyvat_item_emberglow_amulet": {
    "id": "teyvat_item_emberglow_amulet",
    "name": "Emberglow Amulet",
    "description": "This little trinket pulses with residual fire energy, a fragment of Diluc's unwavering resolve! It grants you minor resistance to heat and a surprisingly cheerful glow when activated – perfect for brightening up gloomy dungeons or startling goblins.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔥",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "fire_resistance_5",
      "glow_effect",
      "minor_healing_1"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_familiar",
    "levelRequirement": 9
  },
  "teyvat_item_driftwood_charm": {
    "id": "teyvat_item_driftwood_charm",
    "name": "Driftwood Charm of the Tempest",
    "description": "Crafted from a piece of Kazuha's personal raft, this charm whispers of swirling winds and forgotten journeys. It offers a slight boost to movement speed and navigation, making you feel like a true adventurer!",
    "category": "consumables",
    "price": 750,
    "icon": "💨",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "movement_speed_5",
      "navigation_bonus",
      "chance_to_evade"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_currents",
    "levelRequirement": 3
  },
  "teyvat_item_void_shard": {
    "id": "teyvat_item_void_shard",
    "name": "Void Shard of Khaenra",
    "description": "A chilling fragment imbued with the essence of Raiden Shogun’s void. Holding this shard grants a temporary boost to your defensive capabilities, but be warned – prolonged exposure might leave you feeling… detached.",
    "category": "curiosities",
    "price": 8000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "armor_defense_15",
      "chance_to_reflect",
      "temporary_confusion_3%"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 7
  },
  "middle_earth_warrios_lucky_charm": {
    "id": "middle_earth_warrios_lucky_charm",
    "name": "Wario's Secret Stash Pouch",
    "description": "A tiny pouch made from the hide of a particularly grumpy badger. It’s rumored to be imbued with Wario’s chaotic luck, and is guaranteed to attract shiny things! Be warned: it might also attract unwanted attention… or small, greedy goblins.",
    "category": "equipment",
    "price": 3500,
    "icon": "💰",
    "stock": 40,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased chance of finding valuable items (20%)",
      "chance to steal from enemies (5%)",
      "provides small shield (+10 HP)"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_rat",
    "levelRequirement": 9
  },
  "pokemon_item_trainer_potion": {
    "id": "pokemon_item_trainer_potion",
    "name": "Hyper-Recovery Elixir",
    "description": "A vibrant, bubbling concoction brewed by eccentric Pokémon trainers. This potion instantly heals a moderate amount of HP and restores stamina – perfect for those ridiculously long battles! Wario’s convinced it's just concentrated berries and wishes.",
    "category": "consumables",
    "price": 350,
    "icon": "🧪",
    "stock": 80,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heals 100 HP",
      "restores 50 stamina",
      "grants temporary defense buff (level dependent)"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pidgeotto Courier",
    "levelRequirement": 2
  },
  "teyvat_item_crimson_resonance": {
    "id": "teyvat_item_crimson_resonance",
    "name": "Crimson Resonance Shard",
    "description": "This pulsating shard vibrates with raw pyro energy, practically begging to be unleashed! Wario says it’s ‘perfect for melting things… or just making a really impressive noise.’ It's rumored to amplify fire spells, but be careful – too much resonance can lead to spontaneous combustion!",
    "category": "equipment",
    "price": 18000,
    "icon": "🔥",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases fire damage by 15%",
      "chance to trigger a ‘heat wave’ effect (deals bonus fire damage)",
      "reduces cooldown of fire spells by 2 seconds"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_familiar",
    "levelRequirement": 8
  },
  "teyvat_item_kokiri_charm": {
    "id": "teyvat_item_kokiri_charm",
    "name": "Kokiri Charm of Silent Steps",
    "description": "Crafted by mischievous Kokiri spirits, this charm grants the wearer unnatural stealth. Wario thinks it’s ‘great for sneaking past guards… or stealing all the shiny things!’ It muffles footsteps and slightly improves agility.",
    "category": "curiosities",
    "price": 800,
    "icon": "🌿",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increases stealth by 20%",
      "slightly increases movement speed (5%)",
      "chance to avoid detection by enemies"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "delivery_drone",
    "levelRequirement": 3
  },
  "teyvat_item_archon_sanctum_scroll": {
    "id": "teyvat_item_archon_sanctum_scroll",
    "name": "Archon Sanctum Scroll of Divine Guidance",
    "description": "This ancient scroll, radiating with the power of a Geo Archon, offers fleeting glimpses into optimal combat strategies. Wario's convinced it’s ‘the key to winning every fight… or at least making him look smart!’ It provides temporary buffs and tactical insights.",
    "category": "premium",
    "price": 75000,
    "icon": "✨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grants +10 to Wisdom for 60 seconds",
      "chance to instantly identify enemy weaknesses",
      "increases critical hit chance by 5%",
      "provides a temporary tactical advantage (e.g., increased evasion)"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 18
  },
  "earth_land_geode_of_whispers": {
    "id": "earth_land_geode_of_whispers",
    "name": "Geode of Whispers",
    "description": "This strangely pulsating geode seems to murmur secrets when held close. It's said the whispers are from long-dead wizards, but mostly it just complains about the weather…and Wario’s terrible taste in treasure.",
    "category": "curiosities",
    "price": 850,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to gain a random minor enchantment (5%)",
      "provides +1 to perception checks",
      "occasionally whispers cryptic advice (random effect)"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying griffin",
    "levelRequirement": 4
  },
  "earth_land_wario_slime_potion": {
    "id": "earth_land_wario_slime_potion",
    "name": "Wario's Slime Potion",
    "description": "Don’t worry, it doesn’t actually *look* like Wario. This bright green potion temporarily transforms you into a gooey, slightly grumpy slime! Roll around, stick to walls, and generally make a mess – perfect for distracting enemies or getting out of sticky situations…or just being annoying.",
    "category": "consumables",
    "price": 600,
    "icon": "🟢",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant slime form for 3 turns",
      "increased movement speed (50%) while in slime form",
      "chance to cause a slippery effect on enemies (20%)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery goblin",
    "levelRequirement": 2
  },
  "animatopia_mossy_charm": {
    "id": "animatopia_mossy_charm",
    "name": "Mossy Charm of Tranquility",
    "description": "A surprisingly soothing charm made from the heart of a giant moss-covered boulder. Hold this charm to calm your nerves and ease the pain of battle – perfect for when Wario’s getting frustrated!",
    "category": "curiosities",
    "price": 350,
    "icon": "🌿",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heals a small amount of HP",
      "reduces anger level by 2",
      "provides temporary resistance to fear effects"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 3
  },
  "pokemon_item_trainer_badge_replica": {
    "id": "pokemon_item_trainer_badge_replica",
    "name": "Elite Four’s Disgrace",
    "description": "A remarkably detailed, yet slightly tarnished, replica of a prestigious Elite Four badge. It doesn't actually grant any powers, but it *does* make you feel incredibly important… for about five minutes. Perfect for posing!",
    "category": "curiosities",
    "price": 1200,
    "icon": "🏆",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "+1 to Charisma (temporary)",
      "chance to intimidate a wild Pokémon",
      "reduces the chance of being targeted by status effects by 10%"
    ],
    "vendor": "league_store",
    "shippedBy": "Magikarp Delivery",
    "levelRequirement": 5
  },
  "almost_edge_whispering_shard": {
    "id": "almost_edge_whispering_shard",
    "name": "Echoes of the Voidstone",
    "description": "This jagged shard pulses with an unsettling resonance, seemingly whispering forgotten geometries from beyond the edge. Holding it grants brief glimpses into the void's true form – a terrifying beauty that threatens to unravel your sanity.",
    "category": "curiosities",
    "price": 65000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "grant_sanity_1",
      "chance_hallucination",
      "increase_perception_2"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 18
  },
  "almost_edge_temporal_charm": {
    "id": "almost_edge_temporal_charm",
    "name": "The Chronal Slipstone",
    "description": "A disconcerting charm crafted from solidified temporal eddies. It allows the user to briefly rewind their own actions, but be warned – tampering with time is never without a price!",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "rewind_action_3",
      "chance_temporal_paradox"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "quantum_packet",
    "levelRequirement": 12
  },
  "almost_edge_void_pouch": {
    "id": "almost_edge_void_pouch",
    "name": "The Collector's Burden",
    "description": "This unassuming pouch appears to absorb stray echoes and anomalies from the void. It’s said that those who carry it for too long become… obsessed with collecting the unsettling remnants of lost realities.",
    "category": "premium",
    "price": 2500,
    "icon": "📦",
    "stock": 9,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "absorb_negative_energy_5",
      "chance_item_drop_1"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravity_well",
    "levelRequirement": 6
  },
  "faerun_item_wario_s_lucky_potion": {
    "id": "faerun_item_wario_s_lucky_potion",
    "name": "Wario’s Lucky Potion (Experimental)",
    "description": "Don't ask how Wario got his hands on this. Just drink it and hope for the best! This potion is said to grant temporary luck, but side effects may include uncontrollable giggling, a sudden urge to hoard shiny objects, or an inexplicable craving for spaghetti. Use at your own risk!",
    "category": "consumables",
    "price": 600,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance_to_crit_attack_25%",
      "temporary_speed_boost_3sec",
      "small_chances_for_extra_gold_10%"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magical_cart",
    "levelRequirement": 5
  },
  "grand_country_gravitron_shard": {
    "id": "grand_country_gravitron_shard",
    "name": "Gravity's Grin Shard",
    "description": "This pulsing fragment seems to defy all laws of physics! Holding it grants a temporary boost to movement speed, but prolonged use might induce a dizzying sensation – Wario would love this!",
    "category": "curiosities",
    "price": 12000,
    "icon": "💫",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "movement_speed_boost_3",
      "minor_confusion_1",
      "chance_to_fall_5%"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "winged_beetle",
    "levelRequirement": 7
  },
  "grand_country_layer_spice_bomb": {
    "id": "grand_country_layer_spice_bomb",
    "name": "Layered Nightmare Bomb",
    "description": "A volatile concoction of crushed gemstones and solidified echoes! Detonate this sphere to create a localized zone of chaotic layering, potentially trapping enemies or revealing hidden passages. Just don't accidentally layer *yourself*.",
    "category": "consumables",
    "price": 800,
    "icon": "🔥",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "creates_layering_zone_30s",
      "chance_to_trap_enemies_20%",
      "small_damage_15"
    ],
    "vendor": "layer_market",
    "shippedBy": "rolling_barrel",
    "levelRequirement": 4
  },
  "almost_edge_liminal_contract": {
    "id": "almost_edge_liminal_contract",
    "name": "Liminal Contract",
    "description": "A shimmering, ever-shifting parchment that grants a single, unsettling service. Be warned – the price is not always in gold...",
    "category": "services",
    "price": 25000,
    "icon": "✍️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Gain a random minor magical ability (chance of 50%)",
      "Temporary immunity to fear effects",
      "The vendor requests a bizarre personal item in exchange."
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Ethereal Messenger",
    "levelRequirement": 16
  },
  "teyvat_item_stormcloud_amulet": {
    "id": "teyvat_item_stormcloud_amulet",
    "name": "Stormcloud Amulet",
    "description": "This swirling grey amulet seems to hold the very essence of a thunderstorm! Wearing this grants you resistance to lightning damage and a slight chance to summon a miniature rain cloud, perfect for extinguishing small fires or startling your enemies.",
    "category": "equipment",
    "price": 18000,
    "icon": "⛈️",
    "stock": 75,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "lightning resistance +30%",
      "small chance to summon rain cloud (1%)",
      "chance to slow enemy movement (5%)"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_goose",
    "levelRequirement": 8
  },
  "teyvat_item_crimson_scroll": {
    "id": "teyvat_item_crimson_scroll",
    "name": "Crimson Scroll of Forbidden Whispers",
    "description": "A disturbingly beautiful scroll filled with unsettling prophecies and forgotten rituals. Unsheathing this forbidden item grants temporary access to terrifying visions, but beware – prolonged exposure can drive a warrior mad!",
    "category": "forbidden",
    "price": 75000,
    "icon": "💀",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance to inflict madness on target (10%)",
      "temporary vision of future events (5 turns)",
      "increased critical hit chance (7%)",
      "small chance to summon a shadowy imp"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 16
  },
  "equestria_item_legendary_starshard_armor": {
    "id": "equestria_item_legendary_starshard_armor",
    "name": "Starshard Knight's Breastplate",
    "description": "Forged from fragments of a fallen star, this armor pulses with celestial energy. It offers impressive protection and grants the wearer a dazzling shimmer – perfect for intimidating grumpy ponies or attracting unwanted attention (Wario would love it!).",
    "category": "equipment",
    "price": 18000,
    "icon": "🌟",
    "stock": 23,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "armor_class_boost_3",
      "resistance_to_fire_50",
      "chance_to_blind_enemy_10"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Mail Dragon",
    "levelRequirement": 12
  },
  "equestria_item_mythic_harmony_potion": {
    "id": "equestria_item_mythic_harmony_potion",
    "name": "Potion of Absolute Harmony",
    "description": "Distilled from the purest essence of friendship and magical balance, this potion instantly soothes ruffled tempers and mends frayed relationships. Consume with caution - excessive harmony can lead to uncontrollable giggling fits!",
    "category": "consumables",
    "price": 120000,
    "icon": "💖",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "delivery_only",
    "effects": [
      "heal_80",
      "remove_status_effect_anger_100",
      "chance_to_pacify_enemy_75",
      "minor_damage_reduction_25"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier Griffon",
    "levelRequirement": 22
  },
  "midlands_item_cogsworths_clockwork_heart": {
    "id": "midlands_item_cogsworths_clockwork_heart",
    "name": "Clockwork Automaton's Core",
    "description": "A delicate, intricate core salvaged from a deactivated Imperial automaton. It ticks with an unnerving precision and seems to possess a faint sentience...probably just gears.",
    "category": "equipment",
    "price": 12000,
    "icon": "⚙️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases armor rating by 5",
      "chance to automatically repair damaged equipment (10%)",
      "emits a faint ticking sound that can disorient enemies"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "almost_edge_resonating_shard": {
    "id": "almost_edge_resonating_shard",
    "name": "Resonating Shard of the Boundary",
    "description": "A fragment pulled from the fabric of reality itself, this shard pulses with a faint, unsettling hum. Holding it allows you to briefly perceive the echoes of all who have fallen off the edge, potentially revealing hidden pathways or terrifying visions – but beware, prolonged exposure can unravel your sanity.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔮",
    "stock": 18,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases perception by 5",
      "chance to detect illusions (20%)",
      "grants resistance to void effects",
      "provides a small bonus to investigation checks"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 6
  },
  "almost_edge_spectral_lantern": {
    "id": "almost_edge_spectral_lantern",
    "name": "Spectral Lantern of Lost Lights",
    "description": "This lantern flickers with a mournful glow, drawing power from the echoes of extinguished souls. It illuminates the darkest corners of the void and offers protection against shadowy entities – just don't stare into it for too long, or you might find yourself trapped in an endless reflection.",
    "category": "equipment",
    "price": 8000,
    "icon": "🔦",
    "stock": 27,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "provides bright light (30ft)",
      "grants resistance to necrotic damage",
      "chance to frighten undead creatures (15%)",
      "slows down movement of shadows"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "silent_drone",
    "levelRequirement": 4
  },
  "animatopia_echoing_stone": {
    "id": "animatopia_echoing_stone",
    "name": "Stone of the Silent Grove",
    "description": "Carved from a petrified root within the ancient Silent Grove, this stone amplifies sound and perception. Holding it allows you to briefly hear whispers on the wind - potentially valuable information or terrifying warnings!",
    "category": "equipment",
    "price": 4200,
    "icon": "🔮",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased perception by 5 for 5 turns",
      "chance to detect hidden enemies within a small radius",
      "allows wearer to understand animal speech (basic)"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 7
  },
  "animatopia_beast_bazaar_favor": {
    "id": "animatopia_beast_bazaar_favor",
    "name": "Beast Bazaar Patronage",
    "description": "This intricately woven tapestry represents the favor of the Beast Bazaar – a sacred offering to ensure good fortune. Wearing it grants discounts at the bazaar and attracts curious beastfolk.",
    "category": "faction",
    "price": 12000,
    "icon": "🐾",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "15% discount at the Beast Bazaar",
      "chance to gain information from beastfolk merchants",
      "increased charisma with beastfolk NPCs"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "delivery_dragon",
    "levelRequirement": 10
  },
  "faerun_item_whispering_amulet": {
    "id": "faerun_item_whispering_amulet",
    "name": "Whispering Amulet of Lost Secrets",
    "description": "Legend says this amulet was once worn by a paranoid wizard who spent his days listening to the wind… or possibly just talking to himself. It grants fleeting glimpses into the past, though its interpretations are often...unhelpful.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🔮",
    "stock": 35,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_reveal_hidden_passages",
      "provides_clues_on_certain_quests",
      "chance_to_cause_temporary_confusion"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 12
  },
  "faerun_item_godly_ring_of_wario": {
    "id": "faerun_item_godly_ring_of_wario",
    "name": "Ring of Wario's Greed",
    "description": "Forged in the depths of a forgotten dwarven mine, this ring pulses with an unnerving hunger. It attracts wealth and…other shiny objects. Use it wisely – or risk becoming obsessed!",
    "category": "premium",
    "price": 850000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increased_luck",
      "chance_to_find_treasure",
      "attracts_gold_and_gems",
      "grants_temporary_buffs_based_on_nearby_wealth"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 30
  },
  "teyvat_item_karkata_scroll": {
    "id": "teyvat_item_karkata_scroll",
    "name": "Scroll of Whispered Secrets",
    "description": "A beautifully crafted scroll, rumored to contain fragments of forgotten Karkata rituals. Unravel its mysteries at your own risk – the secrets it holds are... intense. Don’t say I didn't warn you about the strange urges!",
    "category": "curiosities",
    "price": 800,
    "icon": "📜",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to gain a temporary madness effect (10%)",
      "reveals a hidden location on the map (low chance)",
      "provides +2 Charisma for 30 seconds"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 5
  },
  "teyvat_item_godly_shard_of_axolotl": {
    "id": "teyvat_item_godly_shard_of_axolotl",
    "name": "Axolotl's Blessing",
    "description": "A shimmering shard, said to be a fragment of the benevolent Axolotl Archon’s divine essence. Holding this will grant you incredible resilience and an irresistible urge to swim... everywhere!  It might also attract a surprisingly large number of adorable amphibians.",
    "category": "premium",
    "price": 750000,
    "icon": "💧",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "grants +30% resistance to all elemental damage",
      "increases swim speed by 50%",
      "chance to revive a fallen ally (10%)",
      "provides immunity to fear effects"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "dragon_carrier",
    "levelRequirement": 25
  },
  "earth_land_item_shimmering_shard": {
    "id": "earth_land_item_shimmering_shard",
    "name": "Shimmering Shard of the Frost Dragon's Heart",
    "description": "A fragment pulsating with glacial energy, said to contain a sliver of a Frost Dragon's rage! This shard can be used to enhance ice spells or create devastating blizzards – just try not to freeze your fingers off.",
    "category": "equipment",
    "price": 18000,
    "icon": "🧊",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_ice_damage_by_25%",
      "chance_to_freeze_target_on_hit",
      "regenerate_mana_slowly"
    ],
    "vendor": "magic_shop",
    "shippedBy": "magical_packet",
    "levelRequirement": 8
  },
  "earth_land_item_forbidden_echoing_amulet": {
    "id": "earth_land_item_forbidden_echoing_amulet",
    "name": "The Whispering Amulet of Lost Souls",
    "description": "This unsettling amulet grants limited access to the voices of fallen heroes... and possibly a few grumpy ghosts. Use with caution, as prolonged exposure can lead to haunting nightmares or attracting unwanted spectral visitors.",
    "category": "forbidden",
    "price": 75000,
    "icon": "👻",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_steal_mana_from_enemies",
      "increased_spirit_resistance",
      "periodic_apparition_of_a_ghostly_advisor (low chance)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 16
  },
  "earth_land_item_guild_master_lucky_charm": {
    "id": "earth_land_item_guild_master_lucky_charm",
    "name": "Wario's Guild Master's Good Luck Charm (Replica)",
    "description": "A surprisingly effective charm crafted by the Guild Quartermaster himself! It’s a miniature replica of his prized possession - guaranteed to bring a bit of fortune... or at least distract enemies with its shiny surface.",
    "category": "curiosities",
    "price": 350,
    "icon": "🍀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "small_chance_to_avoid_damage",
      "increased_charisma_for_diplomacy",
      "chance to find extra gold when looting"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "standard_delivery",
    "levelRequirement": 2
  },
  "animatopia_berry_potion": {
    "id": "animatopia_berry_potion",
    "name": "Primal Burst Potion",
    "description": "These vibrant berries, harvested from the sacred Bloodthorn Vines, deliver a surge of raw animal energy. Drink quickly for a brief boost to strength and speed - but beware, you might start growling at strangers!",
    "category": "consumables",
    "price": 280,
    "icon": "🍓",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 20 health",
      "increases strength by 5 for 10 seconds",
      "increases movement speed by 15% for 5 seconds"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 2
  },
  "animatopia_totem_of_echoes": {
    "id": "animatopia_totem_of_echoes",
    "name": "Spirit Speaker's Stone",
    "description": "A meticulously crafted totem made from polished obsidian, believed to channel the voices of ancient Animatopian spirits. Touching it allows you to briefly mimic the sounds of various beasts – useful for distraction or trickery. Wario wants one for his collection... mostly.",
    "category": "curiosities",
    "price": 18000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "allows the user to mimic animal sounds (chosen randomly)",
      "chance to confuse enemies with auditory illusion (10%)",
      "provides +3 to charisma checks when interacting with animals"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 8
  },
  "almost_edge_temporal_stabilizer": {
    "id": "almost_edge_temporal_stabilizer",
    "name": "Temporal Stabilizer",
    "description": "A meticulously crafted device designed to briefly counteract the chaotic flow of time at the edge. Use it wisely, or you might find yourself trapped in a never-ending loop of falling… and falling… and falling.",
    "category": "premium",
    "price": 9500,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grant immunity to temporal effects",
      "+10 AC",
      "Chance to rewind time by one turn"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Chronal Express",
    "levelRequirement": 12
  },
  "equestria_item_mane_weave_service": {
    "id": "equestria_item_mane_weave_service",
    "name": "Expert Mane Weaving Consultation",
    "description": "Feeling a little drab, ponies? Let our master weavers assess your mane and tail and craft a truly dazzling style! They’ll even suggest accessories – just don't ask where they get the glitter. Wario insists on getting his hair braided with gold thread.",
    "category": "services",
    "price": 1200,
    "icon": "🎀",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores hairstyle (50%)",
      "chance to gain a cosmetic bonus (10%)"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "animatopia_claw_charm": {
    "id": "animatopia_claw_charm",
    "name": "Primal Howl Charm",
    "description": "This oddly comforting charm is carved from the claw of a grumpy Stone Badger – guaranteed to ward off negative spirits and make you feel slightly less intimidated by larger predators. It also seems to occasionally emit a low growl, which might be useful in a pinch… or annoying your friends.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🐺",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_resistance_to_fear",
      "chance_to_deal_extra_damage_with_melee_attacks",
      "minor_healing_over_time"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_messenger",
    "levelRequirement": 6
  },
  "animatopia_spirit_binding": {
    "id": "animatopia_spirit_binding",
    "name": "Commune with the Ancients",
    "description": "This intricately woven tapestry allows you to briefly tap into the memories of Animatopia’s oldest spirits. Beware, though – they've been around a *long* time and might offer some… unsettling advice. Wario would probably pay a fortune for this.",
    "category": "services",
    "price": 75000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_divine_inspiration",
      "reveal_hidden_secrets",
      "chance_to_learn_a_new_skill"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_beetle",
    "levelRequirement": 18
  },
  "animatopia_godly_scale": {
    "id": "animatopia_godly_scale",
    "name": "Scale of the Elder Leviathan",
    "description": "Recovered from the remains of a colossal, ancient leviathan that once patrolled Animatopia's oceans. This scale pulses with primal energy and smells vaguely of seaweed…and something indescribably old. Don’t stare at it for too long; you might start craving fish.",
    "category": "premium",
    "price": 600000,
    "icon": "🐳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "grant_powerful_buffs",
      "chance_to_summon_a_water_spirit",
      "increased_critical_hit_damage",
      "immunity_to_poison"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "lightning_turtle",
    "levelRequirement": 35
  },
  "middle_earth_goblin_goggles": {
    "id": "middle_earth_goblin_goggles",
    "name": "Gimli's Grinning Goggles",
    "description": "These delightfully sticky goggles were pilfered from a particularly grumpy Goblin tinkerer. They distort your vision in a hilarious way, adding +1 to Perception checks...or completely messing them up – you decide!",
    "category": "equipment",
    "price": 7500,
    "icon": "😎",
    "stock": 42,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+1 to Perception checks (roll a d20 and add +1)",
      "Roll a d6: On a 1-5, your perception is drastically impaired.",
      "Chance to attract unwanted attention from woodland creatures."
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 9
  },
  "middle_earth_rune_scrying": {
    "id": "middle_earth_rune_scrying",
    "name": "The Whisperwind Oracle Service",
    "description": "Seek guidance from the spirits with this ancient service! The ethereal mists swirl, revealing cryptic clues and unsettling glimpses of potential futures – but don’t blame us if you get a prophecy about Wario stealing all the treasure.",
    "category": "services",
    "price": 60000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Gain a random hint related to the current quest.",
      "Chance to receive a warning about an upcoming danger (roll d20: 60% chance).",
      "May attract the attention of mischievous spirits - could be helpful or harmful!",
      "The oracle's advice is often delivered in riddles."
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_carpet",
    "levelRequirement": 15
  },
  "grand_country_gravity_orb": {
    "id": "grand_country_gravity_orb",
    "name": "Wario's Wobbling Surprise",
    "description": "This pulsating orb seems to defy the laws of physics, occasionally launching itself upwards with a surprising burst of force! While held, you can attempt to manipulate your own personal gravity – though results are... unpredictable. Wario guarantees it won’t break anything… probably.",
    "category": "curiosities",
    "price": 180000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to briefly float upwards",
      "small chance of self-propelled movement",
      "increased fall damage resistance"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_worm",
    "levelRequirement": 22
  },
  "grand_country_gravitational_seed": {
    "id": "grand_country_gravitational_seed",
    "name": "The Root of Rupture",
    "description": "A tiny, obsidian seed that hums with unsettling energy. Planting this seed creates a miniature, temporary sinkhole – perfect for startling enemies or creating a quick escape route! Be warned: it has a tendency to grow… and grow… rapidly!",
    "category": "consumables",
    "price": 350,
    "icon": "🌱",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "creates a small sinkhole (1d6 damage to enemies in area)",
      "chance to trap an enemy for 1 round"
    ],
    "vendor": "side_seller",
    "shippedBy": "giant_snail",
    "levelRequirement": 3
  },
  "animatopia_spirit_seed": {
    "id": "animatopia_spirit_seed",
    "name": "Whispering Spirit Seed",
    "description": "These shimmering seeds are harvested from the ancient Spirit Trees of Animatopia. When planted and nurtured with intention, they sprout into miniature guardians – loyal but simple spirits devoted to their master. They’re surprisingly effective at scaring off pesky goblins... or just annoying you when you're trying to concentrate.",
    "category": "curiosities",
    "price": 800,
    "icon": "🌱",
    "stock": 77,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "creates_small_spirit_guardian",
      "minor_buff_to_wisdom",
      "chance_to_dispel_negative_status_effects"
    ],
    "vendor": "forest_market",
    "shippedBy": "Forest Sprite Delivery",
    "levelRequirement": 2
  },
  "internet_meme_scan": {
    "id": "internet_meme_scan",
    "name": "Algorithmic Resonance Analysis",
    "description": "Let the data dealers decipher your deepest desires! This service uses a complex scan of The Internet to analyze your current situation and provide a tailored solution - usually involving shiny things or overwhelming advertising. Don't ask how it works; just accept the recommendation.",
    "category": "services",
    "price": 8000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grant_buff: +3 to perception for 8 turns",
      "random_effect: may grant a minor stat boost or temporary advantage"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_signal",
    "levelRequirement": 15
  },
  "mushroom_kingdom_item_spore_bomb": {
    "id": "mushroom_kingdom_item_spore_bomb",
    "name": "Fungal Fury Bomb",
    "description": "This slimy orb is packed with concentrated mushroom spores! Detonate it for a blinding cloud of fungal growth, stunning nearby enemies and potentially sprouting giant mushrooms to climb.",
    "category": "consumables",
    "price": 1200,
    "icon": "💣",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 50 fire damage in a 6ft radius",
      "stuns enemies for 2 seconds",
      "chance to spawn a small mushroom platform"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 5
  },
  "mushroom_kingdom_item_wario_coin_belt": {
    "id": "mushroom_kingdom_item_wario_coin_belt",
    "name": "Wario's Lucky Coin Belt",
    "description": "A stylish belt crafted from countless coins pilfered from across the Mushroom Kingdom. This belt grants a small boost to luck and attracts valuable loot - just try not to spend it all on chili!",
    "category": "equipment",
    "price": 18000,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+10% chance to find rare items",
      "increased gold drop rate (20%)",
      "chance to trigger a 'lucky' event"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "express_mushroom_delivery",
    "levelRequirement": 12
  },
  "mushroom_kingdom_item_royal_potion": {
    "id": "mushroom_kingdom_item_royal_potion",
    "name": "Potion of Absolute Wealth",
    "description": "Brewed by the finest royal alchemists, this shimmering potion tastes faintly of gold and promises untold riches. It doesn't *actually* make you rich, but it does dramatically improve your charisma... and attract valuable NPCs.",
    "category": "premium",
    "price": 80000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "+5 Charisma",
      "Increased NPC interaction success rate (40%)",
      "Chance to receive exclusive quests"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 18
  },
  "leclaire_isle_item_grandma_gordons_rolling_blade": {
    "id": "leclaire_isle_item_grandma_gordons_rolling_blade",
    "name": "Grandma Gordon’s Rolling Blade of Dough",
    "description": "Forged from the finest enchanted dough and wielded by the legendary baker, Grandma Gordon herself! This blade doesn't just cut; it *kneads* your enemies into submission, leaving them delightfully flattened. Just try not to accidentally flatten yourself.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔪",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals 1d8 bludgeoning damage + strength modifier",
      "chance to inflict 'Sticky' status (reduces movement speed)",
      "on critical hit, chance to create a small dough pile"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "reinforced_cart",
    "levelRequirement": 8
  },
  "leclaire_isle_item_mythic_frosting_of_eternal_youth": {
    "id": "leclaire_isle_item_mythic_frosting_of_eternal_youth",
    "name": "Mythic Frosting of Eternal Youth",
    "description": "A shimmering, iridescent frosting said to have been crafted by the Dough Folk’s ancient gods. Just a single spoonful grants incredible vitality and slows the effects of aging – but beware, excessive consumption may lead to an uncontrollable craving for sprinkles! This is a *serious* investment in your future.",
    "category": "premium",
    "price": 180000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "restores 50 hit points",
      "grants temporary immunity to aging effects (3 days)",
      "increases regeneration by 2 per turn",
      "chance of turning into a gingerbread man"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 20
  },
  "kivotos_item_halo_of_concentration": {
    "id": "kivotos_item_halo_of_concentration",
    "name": "Focus Flux Capacitor",
    "description": "This shimmering halo amplifies your mental acuity, allowing you to concentrate on complex calculations or perfectly execute a difficult maneuver. Just try not to accidentally summon a miniature black hole while using it – Wario wouldn't approve of that mess!",
    "category": "consumables",
    "price": 750,
    "icon": "🧠",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_intelligence_2",
      "boost_accuracy_1",
      "reduce_confusion_chance"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 3
  },
  "kivotos_item_service_advanced_tutoring": {
    "id": "kivotos_item_service_advanced_tutoring",
    "name": "Brain Boost Blueprint",
    "description": "Need a serious upgrade in your magical abilities? This premium service offers personalized tutoring from a top-tier academy instructor! Prepare for intense lectures, challenging assignments, and the potential to accidentally turn yourself into a potted plant – it's all part of the learning process!",
    "category": "services",
    "price": 12000,
    "icon": "🎓",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant_skill_level_5",
      "chance_to_learn_new_spell",
      "boost_mana_pool_10"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 8
  },
  "faerun_item_wario_footprint_amulet": {
    "id": "faerun_item_wario_footprint_amulet",
    "name": "Wario's Lucky Footprint",
    "description": "A strangely comforting amulet shaped like Wario’s left foot! Legend says it was carved from a stone that fell during one of his many, *ahem*, enthusiastic treasure hunts. It doesn't do anything except make you feel slightly more confident... or maybe just makes people stare.",
    "category": "equipment",
    "price": 350,
    "icon": "🦶",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 to luck rolls",
      "slightly increased chance of finding shiny things"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 3
  },
  "teyvat_item_smolderstone_charm": {
    "id": "teyvat_item_smolderstone_charm",
    "name": "Smolderstone Charm",
    "description": "This little trinket pulses with residual fire energy, perfect for a quick warmth boost or a slightly uncomfortable surprise for your enemies. It's rumored to have been crafted by a particularly grumpy Pyro Vision Bearer – don’t ask questions!",
    "category": "consumables",
    "price": 350,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 20 health",
      "applies minor fire damage to next attack",
      "chance to inflict burning (10%)"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 3
  },
  "teyvat_item_jade_blade_fragment": {
    "id": "teyvat_item_jade_blade_fragment",
    "name": "Jade Blade Fragment",
    "description": "A shard of a legendary blade, said to have been forged by the Geo Archon himself (probably). It’s surprisingly sharp and has a distinct scent of saltwater – maybe it remembers battling monstrous waves?",
    "category": "equipment",
    "price": 1200,
    "icon": "🔪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases attack damage by 5%",
      "chance to trigger a 'Geo Resonance' (small area of defense)",
      "provides minor resistance to earth damage"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 6
  },
  "teyvat_item_windchime_echo": {
    "id": "teyvat_item_windchime_echo",
    "name": "Windchime Echo",
    "description": "This delicate chime seems to capture the whispers of the wind, and occasionally... other things. Wario tried to sell it as a spy device – he wasn’t very successful.",
    "category": "curiosities",
    "price": 850,
    "icon": "🎐",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "provides a small boost to perception (increased chance of finding hidden items)",
      "can be used to briefly confuse enemies with unsettling sounds",
      "chance to trigger a brief vision of the past"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_kite",
    "levelRequirement": 4
  },
  "midlands_item_empire_tax_token": {
    "id": "midlands_item_empire_tax_token",
    "name": "Official Tax Assessment Token",
    "description": "A hefty bronze token, stamped with the imperial seal and a rather unsettling portrait of Emperor Theron. This isn't just decoration; possessing it grants you discounts at Empire Exchange stalls... if you can stomach the paperwork!",
    "category": "faction",
    "price": 1200,
    "icon": "💰",
    "stock": 38,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "discount at Empire Exchange (5%)",
      "chance to avoid inspection by guards",
      "+1 reputation with the Empire"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial mail drone",
    "levelRequirement": 6
  },
  "midlands_item_warrio_s_lucky_cog": {
    "id": "midlands_item_warrio_s_lucky_cog",
    "name": "Wario's Unstable Gear",
    "description": "This strangely pulsating cog was recovered from Wario’s workshop after a minor explosion. It seems to randomly grant bonuses, but don't be surprised if it also causes temporary confusion or attracts unwanted attention! Probably best not to stare at it for too long.",
    "category": "curiosities",
    "price": 18000,
    "icon": "⚙️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "randomly grants +5 to attack or defense for one round",
      "chance of causing confusion on a target",
      "attracts small woodland creatures (minor distraction)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "delivery_only",
    "levelRequirement": 9
  },
  "pokemon_item_flare_orb": {
    "id": "pokemon_item_flare_orb",
    "name": "Flare Orb of Fiery Fury",
    "description": "This pulsating orb hums with the raw energy of a Charizard's breath! Throwing it at your foes will ignite them in a spectacular burst of flames, dealing significant fire damage and possibly setting their hair on fire – delightful!",
    "category": "consumables",
    "price": 850,
    "icon": "🔥",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 150 fire damage",
      "chance to burn target for 3 turns",
      "small chance to ignite the user's hair"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke-mail",
    "levelRequirement": 6
  },
  "pokemon_item_rusted_shield": {
    "id": "pokemon_item_rusted_shield",
    "name": "Rusted Shield of the Stalwart Trainer",
    "description": "Forged in the ruins of a long-forgotten Pokémon League gym, this shield looks like it’s seen better days – and probably absorbed a lot of bad luck.  It won't protect you from everything, but hey, at least your opponent will be momentarily confused by its sheer rustiness!",
    "category": "equipment",
    "price": 3200,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+10 Armor",
      "Chance to stun on block",
      "Increases critical hit chance by 5%"
    ],
    "vendor": "league_store",
    "shippedBy": "poke-express",
    "levelRequirement": 8
  },
  "internet_firewall_proxy": {
    "id": "internet_firewall_proxy",
    "name": "Quantum Data Bubble",
    "description": "This shimmering orb acts as a personal firewall, shielding you from intrusive digital probes and granting access to restricted network zones. It’s surprisingly effective against annoying pop-up ads… mostly.",
    "category": "equipment",
    "price": 1200,
    "icon": "🛡️",
    "stock": 17,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grants +1 Armor Class",
      "chance to deflect incoming magical attacks",
      "allows access to restricted areas"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_signal",
    "levelRequirement": 6
  },
  "teyvat_item_liyue_merchant_favor": {
    "id": "teyvat_item_liyue_merchant_favor",
    "name": "Liyue Harbor Merchant's Blessing",
    "description": "A beautifully crafted jade pendant, bestowed upon you by a particularly shrewd merchant of Liyue Harbor. It subtly improves your negotiation skills – perfect for haggling over the best price on sea silk or dragon tendons! Wario thinks it’s ‘just fancy trinkets,’ but he'll take one.",
    "category": "faction",
    "price": 1200,
    "icon": "💰",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases_barter_skill_by_5",
      "chance_to_receive_discount_10%",
      "grants_temporary_reputation_with_Liyue_merchants"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 6
  },
  "teyvat_item_inazuma_kitsune_charm": {
    "id": "teyvat_item_inazuma_kitsune_charm",
    "name": "Kitsune's Whisper Charm",
    "description": "A tiny fox charm, said to be crafted by a mischievous kitsune spirit of Inazuma. Holding it grants you a fleeting glimpse into the currents of fate... or maybe just makes your hair stand on end! Wario says ‘It’s probably cursed!’ but he bought five.",
    "category": "curiosities",
    "price": 8000,
    "icon": "🦊",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_avoid_status_effect_5%",
      "provides_small_movement_speed_boost_3%",
      "grants_vision_of_future_once_per_day (limited)"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Dragonwind Delivery",
    "levelRequirement": 10
  },
  "curiosity_skullshard": {
    "id": "curiosity_skullshard",
    "name": "Echoing Skull Shard",
    "description": "A fragment of a colossal skull, pulsing with residual psychic energy. Holding it allows you to briefly hear the screams of those who perished in this wretched place! Don't say we didn't warn you.",
    "category": "curiosities",
    "price": 350,
    "icon": "💀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to gain temporary madness effect (1%)",
      "provides minor psychic resistance"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 3
  },
  "earth_land_rusty_dragon_scale": {
    "id": "earth_land_rusty_dragon_scale",
    "name": "Rusty Dragon Scale Shield",
    "description": "This massive shield, once belonging to a particularly grumpy (and slightly melted) dragon, still radiates a faint heat. It’s surprisingly light for its size and might just give you the edge against those pesky goblins... or your teammates if they're being annoying.",
    "category": "equipment",
    "price": 6800,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "armor_class +2",
      "fire_resistance 10%",
      "chance to inflict minor burns on melee attackers"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "horse_cart",
    "levelRequirement": 6
  },
  "earth_land_wario_gold_coin_charm": {
    "id": "earth_land_wario_gold_coin_charm",
    "name": "Wario's Lucky Gold Coin Charm",
    "description": "A gleaming gold coin, suspiciously shaped like Wario’s head. Legend says it brings immense luck... or at least the illusion of it. We aren’t responsible for any sudden urges to hoard shiny objects.",
    "category": "premium",
    "price": 23000,
    "icon": "💰",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to double the reward from successful monster encounters (small chance)",
      "increased luck stat (temporary boost)",
      "attracts unwanted attention from greedy goblins"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_drone",
    "levelRequirement": 10
  }
};
