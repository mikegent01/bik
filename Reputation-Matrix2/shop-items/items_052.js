// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_052 = {
  "doughnut_hole_gravitational_donut": {
    "id": "doughnut_hole_gravitational_donut",
    "name": "Singularity Swirl Donut",
    "description": "This donut seems to defy the laws of physics! Each bite slightly alters your personal gravity, giving you a momentary boost in jumps or a hilarious stumble.  Just don’t eat too many, or you might end up orbiting the Doughnut Hole!",
    "category": "consumables",
    "price": 12000,
    "icon": "🍩",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_temporary_jump_boost",
      "chance_for_brief_weightlessness",
      "minor_gravity_distortion"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Portal Courier",
    "levelRequirement": 7
  },
  "doughnut_hole_chronal_armor": {
    "id": "doughnut_hole_chronal_armor",
    "name": "Temporal Glaze Breastplate",
    "description": "Forged from solidified chronal energy, this breastplate allows you to briefly rewind minor mistakes. It’s not a time machine, but it *is* incredibly useful for avoiding awkward social situations and correcting slightly misaimed attacks.  Just try not to accidentally erase your entire existence!",
    "category": "equipment",
    "price": 65000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "rewind_target_action_once",
      "chance_to_negate_damage_on_missed_attack",
      "slows_enemy_projectile_speed"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Folding Device",
    "levelRequirement": 15
  },
  "doughnut_hole_anomaly_orb": {
    "id": "doughnut_hole_anomaly_orb",
    "name": "Void Echo Orb",
    "description": "This pulsating orb hums with the essence of the Doughnut Hole’s anomaly. Holding it briefly reveals fleeting glimpses of alternate realities – mostly just other, slightly weirder versions of donut shops.  Use with caution; prolonged exposure may result in existential dread… or a craving for jelly-filled.",
    "category": "curiosities",
    "price": 23000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "chance_to_reveal_hidden_secrets",
      "minor_illusion_effect",
      "boosts_perception_skill"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Entanglement Package",
    "levelRequirement": 10
  },
  "mushroom_kingdom_item_glowing_stool": {
    "id": "mushroom_kingdom_item_glowing_stool",
    "name": "Glowy Stool of Grunt",
    "description": "This suspiciously cheerful stool seems to absorb ambient light, emitting a faint, pulsating glow. It's surprisingly comfortable… and might attract unwanted attention from grumpy mushrooms.",
    "category": "equipment",
    "price": 12000,
    "icon": "✨",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed",
      "minor_healing_on_hit",
      "chance_to_reflect_damage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 9
  },
  "mushroom_kingdom_item_coin_of_greed": {
    "id": "mushroom_kingdom_item_coin_of_greed",
    "name": "Coin of Unending Want",
    "description": "This tarnished coin whispers promises of infinite riches, but it’s also strangely addictive. Holding it for too long can lead to obsessive hoarding and a crippling fear of empty pockets.",
    "category": "curiosities",
    "price": 800,
    "icon": "💰",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_find_extra_gold",
      "increased_value_of_treasure",
      "small_chance_of_negative_effect_on_party_morale"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_express",
    "levelRequirement": 3
  },
  "mushroom_kingdom_item_dark_fungus_essence": {
    "id": "mushroom_kingdom_item_dark_fungus_essence",
    "name": "Essence of Rotting Regret",
    "description": "Harvested from the deepest, darkest fungi caverns, this essence induces vivid nightmares and a profound sense of melancholy. Use with caution; prolonged exposure may result in existential despair… or just a really bad headache.",
    "category": "forbidden",
    "price": 6000,
    "icon": "💀",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_to_apply_poison_on_attack",
      "reduces_party_morale",
      "causes_temporary_confusion"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_delivery",
    "levelRequirement": 12
  },
  "faerun_item_potion_of_grizzly_stomach": {
    "id": "faerun_item_potion_of_grizzly_stomach",
    "name": "Potion of Grizzly Stomach",
    "description": "Don’t ask questions. Just drink this foul-looking potion and feel the primal urge to devour anything in sight! Side effects may include temporary hibernation, a craving for berries, and an unfortunate encounter with a grumpy bear.",
    "category": "consumables",
    "price": 250,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "restores 1d6 hit points",
      "grants advantage on survival checks for 1 hour",
      "temporary madness (roll a d4: 1-Confusion, 2-Paranoia, 3-Extreme Hunger, 4-Berserk)"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "hawk",
    "levelRequirement": 2
  },
  "faerun_item_scroll_of_minor_illusion": {
    "id": "faerun_item_scroll_of_minor_illusion",
    "name": "Scroll of Minor Illusion (Wario’s Version)",
    "description": "This scroll isn't from a fancy wizard. Wario scribbled this one after accidentally creating a giant mushroom in his lab. It creates simple illusions – mostly things that look vaguely edible… or alarming.",
    "category": "curiosities",
    "price": 1200,
    "icon": "📜",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "creates an illusion for 1 minute",
      "illusion can be a small object or simple image",
      "illusion has no mechanical effect but is visually distracting"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "pony",
    "levelRequirement": 4
  },
  "animatopia_gloomfruit_1": {
    "id": "animatopia_gloomfruit_1",
    "name": "Gloomfruit Tartlet",
    "description": "A sickly sweet treat crafted from the rare Gloomfruit, native to the shadowed valleys of Animatopia. Eating this tartlet grants a temporary boost to stealth and darkness vision - perfect for sneaking around grumpy bears! Don't worry if you get a bit of purple on your teeth.",
    "category": "consumables",
    "price": 350,
    "icon": "🍇",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase stealth by 10 for 60 seconds",
      "grant darkness vision for 30 seconds",
      "recover 5 health points"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Winged Messenger",
    "levelRequirement": 4
  },
  "animatopia_stonefang_amulet": {
    "id": "animatopia_stonefang_amulet",
    "name": "Stonefang Amulet of the Howling Beast",
    "description": "Forged from a genuine fang of the legendary Stonefang, this amulet pulses with primal energy. Wear it to summon a miniature howler beast that assists you in battle – just try not to get eaten! (It’s mostly friendly...mostly.)",
    "category": "equipment",
    "price": 18000,
    "icon": "🐺",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Summons a small Howler Beast (HP: 25, Attack: 6)",
      "Increases attack damage by 5 for 30 seconds",
      "Grants resistance to fear effects"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 12
  },
  "animatopia_spirit_pearl": {
    "id": "animatopia_spirit_pearl",
    "name": "Spirit Pearl of Whispered Secrets",
    "description": "This iridescent pearl contains the echoes of Animatopia's ancient spirits. Holding it allows you to briefly understand animal speech - but be warned, their opinions can be...pointed! Plus, it might just lead you to buried treasure (or a really grumpy badger).",
    "category": "curiosities",
    "price": 85000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Allows communication with animals for 60 seconds (random animal)",
      "Increases intelligence by 3 for 120 seconds",
      "Chance to reveal hidden pathways or secrets."
    ],
    "vendor": "forest_market",
    "shippedBy": "Sky Serpent Delivery",
    "levelRequirement": 22
  },
  "connectopia_block_of_resonance": {
    "id": "connectopia_block_of_resonance",
    "name": "Resonant Brick Fragment",
    "description": "This oddly pulsating block seems to hum with the energy of Connectopia itself! It’s rumored to amplify crafting efficiency and occasionally attract wandering, slightly confused robotic squirrels. Don't stare at it for too long or you might start building things you don't need!",
    "category": "equipment",
    "price": 12000,
    "icon": "🧱",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased crafting speed +5%",
      "chance to attract robotic squirrel (10%)",
      "boosts block durability by 2"
    ],
    "vendor": "craft_corner",
    "shippedBy": "automated_drone",
    "levelRequirement": 9
  },
  "connectopia_pioneer_post_contract": {
    "id": "connectopia_pioneer_post_contract",
    "name": "Pioneer's Guarantee Scroll",
    "description": "Signed by the Pioneer Post itself, this scroll promises protection against bandit raids and resource scarcity... for a single day! It’s surprisingly effective, mostly because no one expects a bureaucratic organization to actually *do* anything.  Don't test its limits; we wouldn't want you ending up a cautionary tale!",
    "category": "faction",
    "price": 8000,
    "icon": "✉️",
    "stock": 25,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "chance to receive free supplies (+5%)",
      "resistance to bandit attacks (1 turn)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "horseback courier",
    "levelRequirement": 6
  },
  "connectopia_legendary_geode_of_synchronicity": {
    "id": "connectopia_legendary_geode_of_synchronicity",
    "name": "The Synchronized Core",
    "description": "This shimmering geode pulses with an almost unsettling rhythm, perfectly attuned to the network of Connectopia. Holding it can grant brief glimpses into future block placements and even let you phase through solid structures... but beware!  Overuse may result in spontaneous building projects!",
    "category": "curiosities",
    "price": 60000,
    "icon": "💎",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "chance to predict block placement (20%)",
      "temporary phasing ability (3 turns)",
      "increased mining speed +15%"
    ],
    "vendor": "block_smith",
    "shippedBy": "reinforced_crate",
    "levelRequirement": 14
  },
  "grand_country_gravitron_cog": {
    "id": "grand_country_gravitron_cog",
    "name": "Gravitron Cog of Shifting Sands",
    "description": "This oddly-shaped cog seems to defy gravity, occasionally rotating backwards and forwards. Wario claims it's 'perfect for making things… more complicated!' It could be a key ingredient for unstable contraptions or a surprisingly effective fidget toy.",
    "category": "curiosities",
    "price": 12000,
    "icon": "⚙️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to reduce target's speed by 5 for 3 turns",
      "increases chance of falling prone by 10%",
      "provides a small bonus to climbing checks"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Giant Delivery Drone",
    "levelRequirement": 7
  },
  "grand_country_layer_stone_shard": {
    "id": "grand_country_layer_stone_shard",
    "name": "Layered Obsidian Shard of Echoes",
    "description": "This jagged shard pulses with a faint, internal light. Touching it briefly reveals fragmented visions of past events within the layered terrain - mostly Wario losing things.",
    "category": "curiosities",
    "price": 65000,
    "icon": "💎",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grants the user limited precognition (chance to see 1-3 turns ahead)",
      "provides a small bonus to perception checks within layered environments",
      "can be used as a temporary focus for divination spells (once per day)"
    ],
    "vendor": "layer_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15
  },
  "grand_country_gravity_massage": {
    "id": "grand_country_gravity_massage",
    "name": "Zero-G Relaxation Therapy",
    "description": "Let a trained vertical technician expertly manipulate your muscles using specialized tools and strategically placed air currents! Prepare for ultimate relaxation – or at least a very strange sensation.",
    "category": "services",
    "price": 2000,
    "icon": "💆‍♀️",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 50 HP",
      "removes all negative status effects (for 2 turns)",
      "increases charisma by 1 for 4 turns"
    ],
    "vendor": "side_seller",
    "shippedBy": "None - immediate service",
    "levelRequirement": 3
  },
  "warhammer_skullsplitter_1": {
    "id": "warhammer_skullsplitter_1",
    "name": "Skullsplitter Warhammer",
    "description": "This hefty warhammer is forged from the bones of countless fallen soldiers! It's guaranteed to crush your enemies... and maybe a few unsuspecting goblins. Don’t worry, it comes with a warranty (probably).",
    "category": "equipment",
    "price": 600,
    "icon": "🔨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "damage_2d6",
      "chance_to_bleed",
      "increased_critical_hit_chance"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "cart_on_wheels",
    "levelRequirement": 5
  },
  "warhammer_item_obsidian_mirror": {
    "id": "warhammer_item_obsidian_mirror",
    "name": "The Obsidian Mirror of Shifting Fates",
    "description": "Peer into this unsettling mirror and catch a glimpse of potential futures... or just your own grumpy reflection. It’s rumored to subtly alter the odds in your favor, but mostly it just looks creepy.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🔮",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_re-roll_attack_rolls",
      "increased_luck",
      "minor_illusion_effect"
    ],
    "vendor": "fate_forge",
    "shippedBy": "winged_messenger",
    "levelRequirement": 8
  },
  "warhammer_item_bloodrune_amulet": {
    "id": "warhammer_item_bloodrune_amulet",
    "name": "The Bloodrune Amulet of Despair",
    "description": "Wear this amulet and let the weight of countless lost souls fuel your strength! It's guaranteed to drain your enemies’ spirits...and maybe make you feel a little gloomy. Don’t say we didn’t warn you!",
    "category": "equipment",
    "price": 8500,
    "icon": "🩸",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "damage_1d4_on_hit",
      "increased_strength",
      "chance_to_fear_enemies"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "giant_rat",
    "levelRequirement": 10
  },
  "doughnut_hole_void_shard": {
    "id": "doughnut_hole_void_shard",
    "name": "Echoing Fragment of Nullity",
    "description": "A crystallized piece of the void itself! Holding this shard briefly grants you a glimpse into potential futures – but be warned, prolonged exposure can lead to unsettling visions and a craving for… more donuts. This is a key component in stabilizing dimensional rifts!",
    "category": "curiosities",
    "price": 850,
    "icon": "🌌",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to reveal hidden pathways (small area)",
      "vision effect: brief hallucinations, -1 to charisma checks for 1 round",
      "increased perception by 1"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Parcel Service",
    "levelRequirement": 4
  },
  "doughnut_hole_fractured_order": {
    "id": "doughnut_hole_fractured_order",
    "name": "Council of Crumbles Favor Token",
    "description": "A meticulously crafted token representing the fragmented will of the Council – they’ve noticed your dedication to acquiring delectable treats. This token grants you access to exclusive discounts and information regarding rare ingredient sourcing… assuming you can decipher their cryptic messages. It's a powerful symbol of influence!",
    "category": "faction",
    "price": 3500,
    "icon": "📜",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "discounts at the Doughnut Hole (10% off)",
      "chance to receive exclusive quests from the Council",
      "increased reputation with 'The Void Vendor' faction"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Messenger",
    "levelRequirement": 8
  },
  "midlands_item_rusty_banner": {
    "id": "midlands_item_rusty_banner",
    "name": "Banner of Broken Allegiance",
    "description": "This tattered banner, once proudly displaying the colors of the Iron Legion, now reeks of mud and despair. It might not inspire loyalty, but it *will* attract a swarm of angry rats – perfect for distracting guards or unsettling your enemies!",
    "category": "consumables",
    "price": 450,
    "icon": "🚩",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "apply_poison_1d4",
      "attracts_rats_3"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "cart_pony",
    "levelRequirement": 2
  },
  "midlands_item_steelfang_gauntlets": {
    "id": "midlands_item_steelfang_gauntlets",
    "name": "Steelfang Gauntlets of the Fallen Captain",
    "description": "Forged from the remains of a disgraced Imperial captain’s armor, these gauntlets thrum with barely contained fury. They’re surprisingly comfortable… until you try to punch something really hard.",
    "category": "equipment",
    "price": 1200,
    "icon": "🧤",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_strength_2d6",
      "chance_to_inflict_bleed_10%"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial_messenger",
    "levelRequirement": 6
  },
  "midlands_item_chronometer_shard": {
    "id": "midlands_item_chronometer_shard",
    "name": "Shard of Temporal Echoes",
    "description": "A fractured piece of a chronometer, pulsing with residual temporal energy. It doesn’t actually *do* anything useful… except maybe cause minor distortions in reality, like making your reflection briefly speak in ancient Elvish.",
    "category": "curiosities",
    "price": 7800,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "chance_to_rewind_time_5%",
      "attracts_temporal_echoes_1d4"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 8
  },
  "almost_edge_crumb_of_silence": {
    "id": "almost_edge_crumb_of_silence",
    "name": "Crumb of Silence",
    "description": "A perfectly formed, obsidian crumb that seems to absorb sound. Holding it brings a strange tranquility, muffling nearby noises and offering a moment's respite from the unsettling void. It’s rumored these crumbs are fragments of forgotten conversations lost at the edge.",
    "category": "consumables",
    "price": 6500,
    "icon": "🤫",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Silence for 3 turns",
      "Minor resistance to fear effects",
      "+1 to Wisdom saving throws"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 8
  },
  "almost_edge_chronometric_pocketwatch": {
    "id": "almost_edge_chronometric_pocketwatch",
    "name": "Chronometric Pocketwatch of Shifting Sands",
    "description": "This unsettling pocket watch doesn’t measure time; it *warps* it. With a twist of the dial, you can briefly rewind or fast-forward your immediate surroundings – perfect for escaping sticky situations…or creating them.",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Allows the user to rewind time by 2 turns once per day.",
      "Allows the user to fast forward time by 1 turn once per day.",
      "+1 to Dexterity saving throws"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Void-Touched Messenger",
    "levelRequirement": 12
  },
  "almost_edge_ritual_candle_of_the_void": {
    "id": "almost_edge_ritual_candle_of_the_void",
    "name": "Ritual Candle of the Void",
    "description": "This wickless candle emanates a faint, pulsating darkness. Lighting it briefly reveals glimpses of unsettling geometries and whispers from beyond the known world – use with extreme caution!",
    "category": "premium",
    "price": 95000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Grants the user advantage on Intelligence checks related to divination or knowledge.",
      "Summons a minor void creature (CR 2) for 3 turns.",
      "+5 to Charisma saving throws"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Dimensional Courier Service",
    "levelRequirement": 22
  },
  "grand_country_sticky_spire": {
    "id": "grand_country_sticky_spire",
    "name": "Gravity Grip Spire",
    "description": "This bizarre spire seems to defy all logic! Touching it briefly grants temporary enhanced climbing abilities and a slight reduction in falling damage – perfect for scaling the treacherous vertical cliffs of The Grand Country. Just don't stare at it too long, or you might start questioning your own reality!",
    "category": "equipment",
    "price": 18000,
    "icon": "🧗‍♀️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased_climbing_speed",
      "reduced_falling_damage",
      "minor_gravity_resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "winged_beetle",
    "levelRequirement": 9
  },
  "grand_country_layer_massage": {
    "id": "grand_country_layer_massage",
    "name": "Chromatic Relaxation Disc",
    "description": "Feeling stressed from navigating the layered landscapes? This shimmering disc emits soothing vibrations that temporarily reduce fatigue and improve focus. It's like a massage... for your entire being, but with colors!",
    "category": "services",
    "price": 7500,
    "icon": "💆‍♀️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_focus",
      "reduced_fatigue",
      "minor_healing"
    ],
    "vendor": "layer_market",
    "shippedBy": "sentient_pillow",
    "levelRequirement": 5
  },
  "grand_country_godly_echoing_shard": {
    "id": "grand_country_godly_echoing_shard",
    "name": "Resonance of the Abyss",
    "description": "A fragment ripped from a forgotten dimension, this shard pulses with an eerie energy. Holding it allows you to briefly perceive echoes of past events within The Grand Country, granting cryptic clues and unsettling visions – but be warned, prolonged exposure can drive you mad! Wario says it tastes like disappointment.",
    "category": "curiosities",
    "price": 350000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "reveals_hidden_paths",
      "provides_cryptic_clues",
      "causes_temporary_hallucinations"
    ],
    "vendor": "side_seller",
    "shippedBy": "dimensional_wormhole",
    "levelRequirement": 30
  },
  "leclaire_isle_doughy_boots": {
    "id": "leclaire_isle_doughy_boots",
    "name": "Doughy Boots of Sticky Steps",
    "description": "These boots are crafted from the finest, freshly-kneaded dough! They'll let you slip and slide your way through even the stickiest situations – perfect for chasing runaway éclairs or escaping a particularly grumpy baker. Just watch out for crumbs!",
    "category": "equipment",
    "price": 12000,
    "icon": "👟",
    "stock": 7,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "movement_speed_increased_5",
      "slippery_surface_effect",
      "resistance_to_adhesive_effects"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_trough",
    "levelRequirement": 9
  },
  "leclaire_isle_sugar_whisper": {
    "id": "leclaire_isle_sugar_whisper",
    "name": "Sugar Whisper Charm",
    "description": "This tiny charm is said to be imbued with the secrets of a thousand sweet treats! Holding it allows you to subtly influence others' desires – perhaps convince them to share their pastries, or distract a guard with the scent of cinnamon. Don’t use it on Wario!",
    "category": "curiosities",
    "price": 800,
    "icon": "🍬",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "charm_effect_influence_small",
      "chance_to_distract",
      "increased_persuasion"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "honeycomb_carrier",
    "levelRequirement": 3
  },
  "leclaire_isle_crumb_detector": {
    "id": "leclaire_isle_crumb_detector",
    "name": "Crumb Detector Spectacles",
    "description": "These spectacles are a baker's best friend! They allow you to see the faintest traces of crumbs, revealing hidden pathways and secret stashes. Wario loves finding hidden treats - especially if they’re chocolate!",
    "category": "equipment",
    "price": 600,
    "icon": "🔍",
    "stock": 12,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_perception",
      "chance_to_find_hidden_objects",
      "reveals_crumb_trails"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1
  },
  "grand_country_gravity_boots": {
    "id": "grand_country_gravity_boots",
    "name": "Wobbly Wanderer's Boots",
    "description": "These boots defy the very laws of climbing! They’re surprisingly comfortable, though they do tend to make you bounce around like a rubber ball. Perfect for those who enjoy a slightly chaotic approach to vertical challenges.",
    "category": "equipment",
    "price": 1800,
    "icon": "🧫",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_climbing_speed",
      "minor_bounce",
      "reduced_fall_damage"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "roller_cart",
    "levelRequirement": 6
  },
  "grand_country_layer_shard": {
    "id": "grand_country_layer_shard",
    "name": "Echoing Shard of Silence",
    "description": "A fragment of a fallen layer, this shard absorbs sound and briefly mutes your surroundings. It’s rumored to be favored by spies and those seeking a moment of tranquility... or maybe just a really quiet place to eat.",
    "category": "curiosities",
    "price": 850,
    "icon": "🤫",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "silence_aura",
      "chance_to_disarm_traps",
      "minor_stealth_bonus"
    ],
    "vendor": "layer_market",
    "shippedBy": "feather_duster",
    "levelRequirement": 4
  },
  "grand_country_side_seller_charm": {
    "id": "grand_country_side_seller_charm",
    "name": "The Unbalanced Disc Charm",
    "description": "A curious charm shaped like a perpetually tilting disc, this trinket seems to influence gravity slightly. It’s said that wearing it improves your negotiation skills… or at least makes you look impressive while arguing.",
    "category": "faction",
    "price": 1200,
    "icon": "🪙",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "improved_negotiation_chance",
      "minor_luck_boost",
      "resistance_to_charm_effects"
    ],
    "vendor": "side_seller",
    "shippedBy": "snail_mail",
    "levelRequirement": 3
  },
  "earth_land_gargoyle_charm": {
    "id": "earth_land_gargoyle_charm",
    "name": "Stoneheart's Grumble",
    "description": "This oddly warm stone charm seems to vibrate with ancient earth magic! It’s rumored to appease grumpy gargoyles and occasionally cough up small, perfectly formed pebbles – great for distracting guards or building miniature fortifications.",
    "category": "curiosities",
    "price": 7500,
    "icon": "🗿",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "grant_resistance_to_earth_magic_1",
      "chance_to_charm_enemies_5%"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "pony_express",
    "levelRequirement": 7
  },
  "earth_land_forbidden_echoing_shard": {
    "id": "earth_land_forbidden_echoing_shard",
    "name": "The Silent Scream of Xylos",
    "description": "A fragment of a forgotten god's prison, this shard whispers with maddening echoes. Prolonged exposure can induce paranoia and an uncontrollable urge to collect shiny rocks – Wario would *love* this!",
    "category": "forbidden",
    "price": 65000,
    "icon": "💀",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_inflict_fear_10%",
      "reduce_intelligence_5",
      "causes_paranoia_on_use"
    ],
    "vendor": "magic_shop",
    "shippedBy": "dark_messenger",
    "levelRequirement": 20
  },
  "earth_land_dragonscale_bandage": {
    "id": "earth_land_dragonscale_bandage",
    "name": "Wyrm's Embrace",
    "description": "Crafted from the shed scales of a young earth dragon, this bandage instantly bonds with wounds and accelerates healing. Just try not to accidentally set yourself on fire – dragons are notoriously flammable.",
    "category": "consumables",
    "price": 350,
    "icon": "🩹",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal_8_hp",
      "chance_to_remove_poison_20%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "hawk_delivery",
    "levelRequirement": 3
  },
  "mushroom_kingdom_giga_shroom": {
    "id": "mushroom_kingdom_giga_shroom",
    "name": "Giga Shroom Launcher",
    "description": "This oversized mushroom is strapped to a repurposed pipe launcher! Blast yourself across the battlefield with explosive fungal fury – just watch out for ricochets and angry mushrooms.",
    "category": "equipment",
    "price": 18000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased_jump_height",
      "area_of_effect_damage",
      "chance_for_sticky_landing"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_delivery",
    "levelRequirement": 9
  },
  "mushroom_kingdom_coin_cleanser": {
    "id": "mushroom_kingdom_coin_cleanser",
    "name": "Coin Polishing Service - Wario Style!",
    "description": "Let Wario handle your tarnished coins! Our patented process uses a combination of slime, scrubbing brushes, and sheer stubbornness to restore your gold to its former glory – guaranteed or it's free (maybe).",
    "category": "services",
    "price": 800,
    "icon": "🧼",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "cleanse_items",
      "chance_to_find_extra_coins"
    ],
    "vendor": "wario_direct",
    "shippedBy": "snail_express",
    "levelRequirement": 3
  },
  "mushroom_kingdom_mythic_heartwood": {
    "id": "mushroom_kingdom_mythic_heartwood",
    "name": "Heartwood of the Great Fungus",
    "description": "A pulsating fragment ripped from the heart of a colossal mushroom! Legend says it grants immense power, but also attracts… *things*. Handle with caution – and maybe some bubble gum.",
    "category": "premium",
    "price": 75000,
    "icon": "🍄",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "massive_health_regen",
      "temporary_invincibility",
      "chance_for_wild_wario_transformation"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 20
  }
};
