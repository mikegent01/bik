// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_070 = {
  "leclaire_isle_item_sticky_dough_shovel": {
    "id": "leclaire_isle_item_sticky_dough_shovel",
    "name": "Sticky Dough Shovel",
    "description": "This shovel, crafted from hardened brioche dough and enchanted with a sprinkle of sugar dust, is surprisingly effective for digging…and sticking to everything.  It’s perfect for unearthing buried pastries or just making a delightfully messy mess – Wario loves it!",
    "category": "equipment",
    "price": 12000,
    "icon": "🥄",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased digging speed",
      "chance to create sticky puddles (reduces enemy movement)",
      "minor damage absorption from sugary attacks"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_cart",
    "levelRequirement": 9
  },
  "leclaire_isle_item_frosting_fistfuls": {
    "id": "leclaire_isle_item_frosting_fistfuls",
    "name": "Frosting Fistfuls",
    "description": "A bag filled with magically solidified frosting, perfect for a quick offensive boost. These aren’t just delicious; they pack a sugary punch!",
    "category": "consumables",
    "price": 350,
    "icon": "🍬",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals minor frost damage",
      "chance to slow enemy movement",
      "restores a small amount of health"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "sugar_drone",
    "levelRequirement": 3
  },
  "teyvat_item_forbidden_kami_charm": {
    "id": "teyvat_item_forbidden_kami_charm",
    "name": "Whispers of the Forgotten Kami",
    "description": "A meticulously crafted charm depicting a forgotten god, said to grant glimpses into the echoes of time. Handle with caution; prolonged use may result in unsettling visions and an overwhelming urge to collect shiny pebbles… or something worse.",
    "category": "forbidden",
    "price": 75000,
    "icon": "👻",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance to glimpse future",
      "increased mana regeneration",
      "resistance to illusions"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 18
  },
  "teyvat_item_lyue_lucky_scale": {
    "id": "teyvat_item_lyue_lucky_scale",
    "name": "Jade Serpent's Blessing",
    "description": "This shimmering jade scale, harvested from a rare serpent guarding the depths of Liyue Harbor’s treasury, is rumored to bring immense luck... or attract an endless barrage of curious merchants. Wario would pay a fortune for one!",
    "category": "curiosities",
    "price": 800,
    "icon": "🍀",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased luck stat",
      "chance to find rare items",
      "small chance of receiving bonus gold"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 3
  },
  "teyvat_item_forbidden_resonance": {
    "id": "teyvat_item_forbidden_resonance",
    "name": "Whispers of the Abyss Shard",
    "description": "A fragment pulled directly from the Sea of Serenity. Touching this shard grants you unsettling glimpses of the depths, bolstering your abilities but risking a descent into madness... or perhaps just an intense craving for seaweed.",
    "category": "forbidden",
    "price": 65000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "increases critical hit chance by 20%",
      "chance to inflict madness on target (15%)",
      "temporarily boosts all stats by 15% but reduces sanity.",
      "user gains resistance to hydro damage"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "shadow_phantom",
    "levelRequirement": 20
  },
  "teyvat_item_windborne_amulet": {
    "id": "teyvat_item_windborne_amulet",
    "name": "Amulet of the Zephyr's Grace",
    "description": "Crafted by skilled artisans within Liyue Harbor, this amulet channels the power of the winds. It allows you to briefly dance on gusts and dodge attacks with unparalleled agility – just don’t get blown away!",
    "category": "equipment",
    "price": 800,
    "icon": "💨",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increases movement speed by 10%",
      "chance to evade attacks (20%)",
      "allows user to briefly glide for 3 seconds",
      "user gains a small bonus to evasion checks"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "swift_messenger",
    "levelRequirement": 3
  },
  "earth_land_item_dragonscale_rations": {
    "id": "earth_land_item_dragonscale_rations",
    "name": "Smoked Dragonheart Jerky",
    "description": "These intensely flavored jerky strips are made from the surprisingly tender hearts of young fire dragons! Each bite provides a burst of energy and a pleasant smoky aroma...though some claim they occasionally grant brief bursts of uncontrollable flame.  Don't worry, it’s mostly just indigestion.",
    "category": "consumables",
    "price": 250,
    "icon": "🔥",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 30 HP",
      "provides a temporary speed boost (5%)"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "pony",
    "levelRequirement": 1
  },
  "earth_land_item_runestone_of_echoes": {
    "id": "earth_land_item_runestone_of_echoes",
    "name": "The Silent Sentinel's Echo",
    "description": "Crafted from a fragment of a long-dead wizard’s tower, this pulsating runestone emits faint whispers of past events. Touching it allows you to briefly perceive echoes of the area’s history—useful for finding hidden passages or uncovering forgotten secrets…or just getting lost in Wario's chaotic past.  Legend says a powerful curse resides within!",
    "category": "curiosities",
    "price": 65000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "reveals hidden passages (30%)",
      "grants a chance to trigger ghostly illusions",
      "chance to inflict fear on enemies (5%)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 12
  },
  "equestria_item_pony_massage_oil": {
    "id": "equestria_item_pony_massage_oil",
    "name": "Twilight's Tranquil Massage Oil",
    "description": "Distilled from rare moonpetal blossoms and imbued with Princess Twilight’s own calming magic, this oil promises relaxation for even the most stressed pony.  Just be careful not to fall asleep mid-session – you might miss a vital plot point!",
    "category": "services",
    "price": 1200,
    "icon": "💆‍♀️",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores 50 HP",
      "removes all negative status effects",
      "increases charisma by 10 for 30 minutes",
      "chance to grant a temporary bonus to skill checks"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Stable Delivery",
    "levelRequirement": 5
  },
  "equestria_item_apple_core_amulet": {
    "id": "equestria_item_apple_core_amulet",
    "name": "Apple Core of Everlasting Bite",
    "description": "Carved from a core of the legendary Everbloom Apple, this amulet grants the wearer an insatiable hunger for adventure (and apples!). It’s surprisingly effective against monstrous appetites – and occasionally grumpy ponies.",
    "category": "equipment",
    "price": 800,
    "icon": "🍎",
    "stock": 55,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increases hunger level by 1 (affects combat performance)",
      "chance to trigger a temporary bonus to strength checks",
      "provides resistance to poison damage",
      "slightly reduces the effects of fear"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Ground Delivery",
    "levelRequirement": 2
  },
  "leclaire_isle_item_giant_pastry_shield": {
    "id": "leclaire_isle_item_giant_pastry_shield",
    "name": "The Crumb Crusader Shield",
    "description": "Forged from hardened dough and reinforced with caramelized sugar, this colossal shield is surprisingly lightweight! It's capable of deflecting even the most potent blows... or a particularly enthusiastic pastry attack.",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases block chance by 20%",
      "absorbs a small amount of damage (5 HP)",
      "chance to inflict 'sticky' status on attackers (reduced movement)"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "flying_doughnut",
    "levelRequirement": 9
  },
  "leclaire_isle_item_legendary_frosting_staff": {
    "id": "leclaire_isle_item_legendary_frosting_staff",
    "name": "The Blizzard Baton of Frosting",
    "description": "Legend says this staff was crafted by the Great Baker himself! It radiates a chilling aura, capable of summoning blizzards and freezing enemies solid. Just try not to accidentally frost yourself – it’s surprisingly messy!",
    "category": "equipment",
    "price": 85000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "godly",
    "effects": [
      "deals cold damage on attack (5-10)",
      "chance to freeze target for 2 turns",
      "creates a small blizzard area (reduces visibility)",
      "grants +3 to intelligence and wisdom"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15
  },
  "earth_land_master_wario_scroll": {
    "id": "earth_land_master_wario_scroll",
    "name": "Wario's Guide to Magnificent Acquisition",
    "description": "A meticulously illustrated scroll filled with Wario’s…unique…methods for obtaining wealth. It contains diagrams of traps, bargaining tactics (mostly involving shiny objects), and a surprisingly detailed guide on how to convince people they desperately need a rubber ducky. This is a premium service.",
    "category": "services",
    "price": 6000,
    "icon": "💰",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "chance_to_duplicate_item_3%",
      "increase_bartering_skill_5",
      "temporary_luck_boost_4"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_delivery_truck",
    "levelRequirement": 7
  },
  "pokemon_item_thunderbolt_berry": {
    "id": "pokemon_item_thunderbolt_berry",
    "name": "Volcanic Thunder Berry",
    "description": "These vibrant berries, infused with the energy of volcanic Pokémon, provide a shocking burst of power! Consuming one temporarily increases your attack and grants a chance to inflict burn on unsuspecting foes – perfect for those fiery battles.",
    "category": "consumables",
    "price": 350,
    "icon": "🔥",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_attack_by_10",
      "chance_to_burn_on_hit",
      "restores_50_health"
    ],
    "vendor": "pokemart",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 3
  },
  "pokemon_item_aurora_shard": {
    "id": "pokemon_item_aurora_shard",
    "name": "Shard of the Celestial Pokémon",
    "description": "Born from a fallen fragment of a legendary Aurora Pokémon, this shard radiates an ethereal light. Holding it allows you to briefly summon a dazzling illusionary duplicate, confusing your enemies and creating openings for attack – just don’t stare at it for too long or you might end up lost in a dream!",
    "category": "curiosities",
    "price": 18000,
    "icon": "✨",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "summon_illusionary_duplicate",
      "illusionary_duplicate_has_low_health",
      "increases_critical_damage_by_50_when_illusionary_duplicate_is_active"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Mystic Portal",
    "levelRequirement": 12
  },
  "the_edge_chronal_resonator": {
    "id": "the_edge_chronal_resonator",
    "name": "Chronal Resonator – Temporal Echo",
    "description": "This polished brass device hums with captured echoes of time itself. When activated, it allows the user to briefly rewind a single action, but be warned - messing with time is a real messy business!",
    "category": "equipment",
    "price": 12000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "allows user to rewind their last action (once per combat)",
      "increases reaction speed by 5%",
      "chance of creating a temporal paradox (negative effect)"
    ],
    "vendor": "final_shop",
    "shippedBy": "Temporal Express",
    "levelRequirement": 10
  },
  "the_edge_godly_voidstone_amulet": {
    "id": "the_edge_godly_voidstone_amulet",
    "name": "Amulet of the Unending Descent",
    "description": "Forged in the heart of a collapsing star, this amulet radiates an aura of absolute nothingness. Wearer gains resilience against psychic attacks and can momentarily phase through solid objects… but staring into its depths might drive you mad!",
    "category": "premium",
    "price": 750000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "immunity to psychic damage",
      "chance to phase through solid objects (small area)",
      "increases resistance to fear effects",
      "chance to summon a minor void entity"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Celestial Delivery",
    "levelRequirement": 35
  },
  "internet_data_slug": {
    "id": "internet_data_slug",
    "name": "Chromatic Data Slug",
    "description": "A bioluminescent slime, harvested from the deepest levels of the data streams. This pulsing blob can be flung at enemies to overload their systems with corrupted information, causing temporary confusion and disorientation.",
    "category": "consumables",
    "price": 350,
    "icon": "🦠",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 damage to target with a chance of confusion",
      "chance to inflict temporary blindness on the enemy",
      "restores 5% of mana/stamina"
    ],
    "vendor": "data_dealer",
    "shippedBy": "fiber_optic_cable",
    "levelRequirement": 3
  },
  "internet_quantum_wristband": {
    "id": "internet_quantum_wristband",
    "name": "Phase-Shifting Wristband",
    "description": "This sleek, black wristband is rumored to have been created by a rogue AI obsessed with bending reality. When activated, it allows the wearer to briefly phase through solid objects… but be warned – prolonged use can lead to unpredictable glitches and existential dread!",
    "category": "equipment",
    "price": 8000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "allows wearer to phase through one wall/obstacle per use",
      "chance of temporary stat reduction upon phasing",
      "provides a minor shield against electronic attacks",
      "occasionally causes the wearer to speak in binary"
    ],
    "vendor": "cyber_market",
    "shippedBy": "drone_delivery",
    "levelRequirement": 6
  },
  "connectopia_chronometer_of_delay": {
    "id": "connectopia_chronometer_of_delay",
    "name": "Temporal Jitter Device",
    "description": "A delightfully unstable chronometer crafted from salvaged data streams and solidified time-dust. This device can briefly slow down your perception of time, useful for dodging tricky traps or making a particularly dramatic escape... but be warned, overuse may cause you to momentarily experience yesterday’s breakfast.",
    "category": "consumables",
    "price": 800,
    "icon": "⏳",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "slows perception of time by 25% for 3 seconds",
      "chance to experience yesterday’s breakfast (minor nausea)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "express pigeon post",
    "levelRequirement": 4
  },
  "midlands_item_strategic_assessment": {
    "id": "midlands_item_strategic_assessment",
    "name": "Councilor's Insightful Appraisal",
    "description": "A grizzled veteran merchant offers his services for a thorough evaluation of your party’s current situation. He’ll analyze enemy weaknesses, suggest tactical options, and generally complain about the state of things - all for a small fee.",
    "category": "services",
    "price": 1200,
    "icon": "🧐",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveals_enemy_weakness",
      "provides_tactical_suggestion",
      "temporary_intellect_boost"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 6
  },
  "middle_earth_potion_of_elven_grace": {
    "id": "middle_earth_potion_of_elven_grace",
    "name": "Silvanus's Serenity Elixir",
    "description": "A shimmering, pale green potion brewed with rare Moonpetal blossoms and whispered secrets of the Greenwood. This delightful concoction grants temporary enhanced agility and a subtle calming effect, perfect for escaping grumpy dwarves or dodging awkward conversations.",
    "category": "consumables",
    "price": 350,
    "icon": "🌿",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "agility +2 for 6 turns",
      "reduce anger level by 3",
      "chance to avoid traps (+10%)"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 4
  },
  "middle_earth_ring_of_stonehelm": {
    "id": "middle_earth_ring_of_stonehelm",
    "name": "Stonehelm's Steadfast Band",
    "description": "Forged in the heart of a dwarven mountain, this ring pulses with ancient earth energy. It offers protection against physical attacks and whispers warnings of impending danger – mostly about where Wario dropped his lunch.",
    "category": "equipment",
    "price": 12000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor +8",
      "chance to deflect attacks (+5%)",
      "detect nearby enemies (range: 30 feet)"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "rolling_cart",
    "levelRequirement": 7
  },
  "middle_earth_amulet_of_forgotten_wisdom": {
    "id": "middle_earth_amulet_of_forgotten_wisdom",
    "name": "The Oracle's Echo",
    "description": "This amulet, carved from a single piece of petrified wood, hums with the echoes of long-lost Elven prophecies. It grants the wearer flashes of insight – mostly about how to best exploit Wario's greed for shiny things.",
    "category": "curiosities",
    "price": 250000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to gain critical hits (+10%)",
      "increased intelligence +5",
      "temporary insight (reveals hidden passages or traps)"
    ],
    "vendor": "elven_market",
    "shippedBy": "dragon_airmail",
    "levelRequirement": 22
  },
  "animatopia_spirit_weaving_service": {
    "id": "animatopia_spirit_weaving_service",
    "name": "Echoes of the Ancestors - Spirit Weaving",
    "description": "The Tribal Trader offers a unique service: weaving temporary spirit echoes into your equipment. These echoes grant minor buffs, but beware – lingering too long with restless spirits can lead to unsettling dreams… or worse!",
    "category": "services",
    "price": 6500,
    "icon": "🌀",
    "stock": 30,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to gain temporary resistance to fear effects",
      "small chance of gaining a minor status effect (confusion, slow)"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_beetle",
    "levelRequirement": 5
  },
  "animatopia_shard_of_the_storm": {
    "id": "animatopia_shard_of_the_storm",
    "name": "Thunderclaw's Fragment",
    "description": "A jagged shard of solidified lightning, harvested from the heart of a raging storm. This artifact crackles with potent energy and grants incredible power – but prolonged use risks attracting unwanted attention from powerful storm spirits! Handle with caution, or you might find yourself becoming a walking thunderstorm.",
    "category": "curiosities",
    "price": 75000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "damage +8 (lightning)",
      "chance to stun on hit",
      "small chance of summoning a lightning strike"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "storm_hawk",
    "levelRequirement": 20
  },
  "pokemon_item_thunderbolt_amulet": {
    "id": "pokemon_item_thunderbolt_amulet",
    "name": "Thunderbolt Amulet of Voltaria",
    "description": "This shimmering amulet, crafted from solidified lightning, pulses with raw electrical energy! It's rumored to have been favored by legendary trainers seeking control over the storms – a truly electrifying accessory.",
    "category": "equipment",
    "price": 7500,
    "icon": "⚡",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "damage_thunder_3",
      "chance_paralysis",
      "speed_boost_1"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_only",
    "levelRequirement": 6
  },
  "pokemon_item_evolution_scroll": {
    "id": "pokemon_item_evolution_scroll",
    "name": "Scroll of Accelerated Metamorphosis",
    "description": "Feeling a bit…underdeveloped? This ancient scroll, penned by a forgotten Pokémon scholar, can briefly accelerate a creature's evolutionary process – expect some rather *explosive* results!",
    "category": "curiosities",
    "price": 1200,
    "icon": "🦋",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "chance_evolution",
      "small_healing",
      "temporary_buff_attack"
    ],
    "vendor": "safari_shop",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "earth_land_frostbite_amulet": {
    "id": "earth_land_frostbite_amulet",
    "name": "The Whispering Shard of Winter's Ire",
    "description": "This amulet pulses with the chilling essence of a trapped frost dragon, granting you resistance to cold and a disconcerting whisper in your ear – mostly complaints about the weather. It’s surprisingly comfortable…until it starts freezing your fingers.",
    "category": "equipment",
    "price": 23000,
    "icon": "🥶",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "frost resistance +10%",
      "chance to inflict cold on melee attacks (5%)",
      "whispering effect - occasionally provides tactical advice (or insults)"
    ],
    "vendor": "magic_shop",
    "shippedBy": "magical_cartridge",
    "levelRequirement": 9
  },
  "earth_land_guild_master_badge": {
    "id": "earth_land_guild_master_badge",
    "name": "The Ironclad Standard of the Stoneguard",
    "description": "Officially sanctioned by the Stoneguard Guild, this badge isn’t just a pretty symbol – it's rumored to absorb stray magical energies. It will likely attract unwanted attention from disgruntled wizards and overly enthusiastic adventurers. Wario would absolutely try to steal this.",
    "category": "faction",
    "price": 12000,
    "icon": "🛡️",
    "stock": 30,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "bonus to persuasion checks with Stoneguard Guild members (+5)",
      "chance to nullify minor magical effects (10%)",
      "visually intimidating – enemies may hesitate before attacking"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "delivery_pony",
    "levelRequirement": 6
  },
  "earth_land_godly_rune_stone": {
    "id": "earth_land_godly_rune_stone",
    "name": "The Heart of the Shifting Peaks",
    "description": "Forged from a fragment of a colossal, ancient dragon’s heart, this stone resonates with raw geological energy. Touching it briefly grants you incredible strength but risks a sudden, uncontrollable urge to tunnel through mountains – Wario would love this!",
    "category": "premium",
    "price": 750000,
    "icon": "⛰️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "strength +20",
      "chance to trigger minor earth tremors (5%)",
      "temporary immunity to ground-based attacks",
      "compulsive tunneling urges (random chance)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 25
  },
  "connectopia_gear_reinforced_plinth": {
    "id": "connectopia_gear_reinforced_plinth",
    "name": "Reinforced Plinth Fragment",
    "description": "This jagged chunk of solidified block energy pulses with raw construction power! It’s rumored to have been ripped from the core of Connectopia itself – perfect for reinforcing your base or smashing through stubborn rock formations.  Just don't stare at it too long, or you might start seeing blueprints.",
    "category": "equipment",
    "price": 12000,
    "icon": "🧱",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases block placement speed by 10%",
      "provides minor structural reinforcement (3% damage reduction)",
      "chance to generate a small amount of block energy"
    ],
    "vendor": "block_smith",
    "shippedBy": "automated_drone",
    "levelRequirement": 9
  },
  "connectopia_curiosity_echoing_shard": {
    "id": "connectopia_curiosity_echoing_shard",
    "name": "Echoing Shard of Resonance",
    "description": "This perfectly smooth shard vibrates with the faintest whispers of past pioneers – a collector's item and a surprisingly effective distraction device!  Hold it up to your ear, and you might hear fragmented conversations or warnings from long-gone settlers. It also occasionally emits a disorienting pulse.",
    "category": "curiosities",
    "price": 800,
    "icon": "🔮",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to confuse enemy AI (10%)",
      "provides a minor bonus to perception checks related to hearing",
      "emits a distracting pulse on use, briefly stunning nearby enemies"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "messenger_bird",
    "levelRequirement": 3
  },
  "connectopia_item_legendary_chronal_anchor": {
    "id": "connectopia_item_legendary_chronal_anchor",
    "name": "Chronal Anchor of the First Block",
    "description": "Forged from a fragment of time itself, this anchor hums with chaotic energy! Touching it can briefly rewind nearby events... or create a temporal paradox. Use with caution, or you might end up trapped in a loop building miniature block cities forever.  Wario thinks it’s fantastic!",
    "category": "equipment",
    "price": 60000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "allows the user to rewind time by a few seconds (once per day)",
      "chance to create minor temporal anomalies (e.g., brief duplicates of the player)",
      "provides resistance to temporal effects",
      "can be used as an emergency escape tool"
    ],
    "vendor": "craft_corner",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 15
  },
  "the_edge_item_chronometric_brace": {
    "id": "the_edge_item_chronometric_brace",
    "name": "Chronometric Brace of the Fractured Time",
    "description": "Forged from solidified temporal anomalies, this brace subtly warps your perception of time. It's rumored to be favored by those who enjoy a bit of chaotic rearrangement – but beware, uncontrolled usage could lead to a rather unfortunate looping situation! This thing is seriously messed up.",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 23,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases action speed by 50%",
      "chance to rewind time by one turn (10% chance)",
      "grants immunity to temporal manipulation effects"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_temporal",
    "levelRequirement": 11
  },
  "the_edge_item_void_lantern": {
    "id": "the_edge_item_void_lantern",
    "name": "Void Lantern of the Endless Descent",
    "description": "This lantern doesn’t cast light, it *absorbs* it. Within its depths swirls a miniature void, capable of swallowing sound and even briefly snuffing out magical flames. Use with caution – staring into it too long might make you question your very existence... which is probably good for business!",
    "category": "premium",
    "price": 35000,
    "icon": "🔦",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "creates a zone of silence around the user (reduces enemy hearing range)",
      "deals damage to undead and creatures of darkness",
      "chance to teleport a short distance when activated"
    ],
    "vendor": "final_shop",
    "shippedBy": "black_horse_express",
    "levelRequirement": 15
  },
  "animatopia_shimmering_scale": {
    "id": "animatopia_shimmering_scale",
    "name": "Shimmering Scale of the Great Howler",
    "description": "This iridescent scale, shed by the legendary Great Howler bear spirit, pulses with primal energy. When consumed, it grants temporary heightened senses and a surge of raw power - perfect for intimidating smaller critters or just startling your friends!",
    "category": "consumables",
    "price": 1200,
    "icon": "✨",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_5_temporary_strength",
      "increase_perception_by_3",
      "minor_healing_effect"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "swift_beaver",
    "levelRequirement": 8
  },
  "animatopia_godly_heartstone": {
    "id": "animatopia_godly_heartstone",
    "name": "Heartstone of the Ancestral Pack",
    "description": "Forged in the heart of a long-dead bear king, this pulsating stone resonates with the very essence of Animatopia's primal spirit. Touching it grants immense power and wisdom, but beware – prolonged exposure can lead to an uncontrollable urge to hoard shiny objects… or maybe just roll around in the dirt.",
    "category": "premium",
    "price": 350000,
    "icon": "💎",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "grant_10_temporary_wisdom",
      "chance_to_cast_animal_charm",
      "immunity_to_mind_control",
      "increase_charisma_by_5"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_owl",
    "levelRequirement": 30
  },
  "animatopia_bloodberry_potion": {
    "id": "animatopia_bloodberry_potion",
    "name": "Primal Surge Potion",
    "description": "A potent concoction brewed from the rare Bloodberries of the Howling Jungle! This crimson elixir will temporarily amplify your beastly instincts, granting you incredible strength and a savage roar – just try not to scare the villagers too much.",
    "category": "consumables",
    "price": 1200,
    "icon": "🩸",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "strength +4 for 6 turns",
      "roar (deals 1d6 piercing damage)",
      "movement speed +2 for 3 turns"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 8
  },
  "animatopia_echoing_shard": {
    "id": "animatopia_echoing_shard",
    "name": "The Silent Whisper",
    "description": "A fragment of a colossal, petrified beast’s heart, this shard grants the user limited telepathic abilities. It's rumored to allow brief communication with animal spirits, though mostly they just complain about the weather and lost berries.",
    "category": "curiosities",
    "price": 75000,
    "icon": "🤫",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance to receive cryptic messages from animal spirits (random beneficial effect)",
      "increased perception +3",
      "can cast 'commune with beast' once per day (requires a successful skill check)"
    ],
    "vendor": "forest_market",
    "shippedBy": "Shadow Lynx Express",
    "levelRequirement": 22
  },
  "pokemon_item_sparkling_gem": {
    "id": "pokemon_item_sparkling_gem",
    "name": "Prismatic Pokémon Shard",
    "description": "This shimmering fragment was plucked from a defeated Paradox Pokémon's aura! It pulses with raw energy, potentially enhancing your Pokémon’s speed or attack – though beware, it might also cause unexpected evolution shenanigans. Wario says it smells faintly of burnt berries and disappointment.",
    "category": "curiosities",
    "price": 1800,
    "icon": "✨",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "boosts speed by 5 for 6 turns",
      "chance to trigger evolution at level 10",
      "increases critical hit chance by 2%"
    ],
    "vendor": "safari_shop",
    "shippedBy": "winged_pokéball",
    "levelRequirement": 6
  },
  "pokemon_item_ancient_scroll": {
    "id": "pokemon_item_ancient_scroll",
    "name": "Whispers of the First Pokémon",
    "description": "An aged scroll containing cryptic symbols and faded illustrations depicting the very origins of Pokémon. Deciphering its secrets might reveal powerful knowledge – or just a really confusing mess! Wario intends to use it as kindling, but he's reconsidering.",
    "category": "curiosities",
    "price": 2100,
    "icon": "📜",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to learn a new move (random)",
      "provides +2 to intelligence",
      "increases experience gain by 10% for 3 turns"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_truck",
    "levelRequirement": 8
  },
  "leclaire_isle_item_forbidden_frosting_of_doom": {
    "id": "leclaire_isle_item_forbidden_frosting_of_doom",
    "name": "Forbidden Frosting of Doom",
    "description": "A shimmering, black frosting harvested from the deepest, darkest ovens of L'Eclaire Isle. Legend says a single lick can induce temporary madness and an uncontrollable urge to decorate… everything. Use at your own risk!",
    "category": "forbidden",
    "price": 7800,
    "icon": "😈",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_inflict_confusion_on_target_10%",
      "grant_temporary_insanity_for_5_rounds",
      "reduces_sanity_by_5"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 8
  },
  "leclaire_isle_item_chronos_crust": {
    "id": "leclaire_isle_item_chronos_crust",
    "name": "Chronos Crust",
    "description": "This magnificent, time-bending pastry is crafted from the very essence of a frozen moment. Biting into it allows you to briefly rewind your actions, undoing mistakes or exploiting enemy vulnerabilities – but be warned, overuse can unravel reality itself!",
    "category": "equipment",
    "price": 23000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "rewind_last_action_once_per_day",
      "grant_advantage_on_next_attack",
      "chance_to_create_temporal_anomaly_5%"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Temporal Delivery Drone",
    "levelRequirement": 12
  },
  "mushroom_kingdom_item_royal_coin_charm": {
    "id": "mushroom_kingdom_item_royal_coin_charm",
    "name": "Royal Coin Charm",
    "description": "Crafted from a solidified pile of King Koopa's lost riches, this charm is said to bring good fortune... and the occasional passive income. Wearing it grants a small percentage chance to find extra gold while exploring, but be warned – the King’s displeasure can manifest in inconvenient ways.",
    "category": "equipment",
    "price": 8000,
    "icon": "💰",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "5% chance to find additional gold on loot drops",
      "chance of attracting the attention of hostile Koopa Troopas",
      "provides minor protection against curses"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "turtle_delivery",
    "levelRequirement": 10
  },
  "mushroom_kingdom_item_godly_warp_stone": {
    "id": "mushroom_kingdom_item_godly_warp_stone",
    "name": "Godly Warp Stone",
    "description": "This pulsating stone hums with ancient energy, a fragment of the Great Pipe itself. Touching it instantly teleports you to any location within the Mushroom Kingdom – a truly divine convenience for a greedy Wario! Just try not to get lost in the endless corridors...",
    "category": "curiosities",
    "price": 350000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "instantly teleports player to any location within the Mushroom Kingdom",
      "chance for a minor beneficial effect on arrival (e.g., +5 HP, luck boost)",
      "requires 10 minutes of meditation after use"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 23
  },
  "midlands_item_stinkbomb_of_discontent": {
    "id": "midlands_item_stinkbomb_of_discontent",
    "name": "The Emperor's Ire",
    "description": "A potent concoction brewed by disgruntled Midlands citizens, this grenade releases a truly horrific odor that can demoralize even the bravest soldiers. It’s not pretty, but it’s surprisingly effective – especially against anyone who values their nostrils.",
    "category": "consumables",
    "price": 250,
    "icon": "💨",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals_poison_damage_5",
      "applies_debuff_morale_20%",
      "causes_nearby_enemies_to_become_disoriented"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "cart",
    "levelRequirement": 3
  },
  "grand_country_vertical_repair": {
    "id": "grand_country_vertical_repair",
    "name": "Sheer Ascent Stabilizer Service",
    "description": "Feeling a little…detached? The Vertical Vendor specializes in stabilizing your position during extreme climbs. They’ll meticulously reinforce your gear and give you a calming chat about the importance of proper anchor points – mostly because they really, *really* don't want to be pulled up.",
    "category": "services",
    "price": 850,
    "icon": "🛠️",
    "stock": 21,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "repair_equipment_minor",
      "stability_buff_2",
      "reduce_fall_damage_50%"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "magnetic_hook",
    "levelRequirement": 4
  },
  "pokemon_item_evolution_consultation": {
    "id": "pokemon_item_evolution_consultation",
    "name": "Evolutionary Insight Session – Professor Oak’s Style!",
    "description": "Feeling stuck in your current evolutionary stage? Let a seasoned Pokémon researcher, channeling the wisdom of Professor Oak himself, analyze your Pokémon's potential and guide you toward their ultimate form. Just don't ask about Mew.",
    "category": "services",
    "price": 750,
    "icon": "🧠",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance_to_evolve_pokemon_on_next_battle",
      "increase_happiness_by_5"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_express",
    "levelRequirement": 3
  },
  "pokemon_item_lucky_charm_pokeball": {
    "id": "pokemon_item_lucky_charm_pokeball",
    "name": "Lucky Charm Pokéball – Shiny Edition",
    "description": "This isn't just any Pokéball; it’s been blessed (probably) by a friendly Pikachu. It seems to attract good fortune, offering a slight advantage in tricky situations - perfect for snatching up that elusive Pokémon! Don't stare directly at it too long or you might end up with a shiny Ditto.",
    "category": "curiosities",
    "price": 350,
    "icon": "🌟",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance_to_avoid_damage",
      "increase_catch_rate_by_10%"
    ],
    "vendor": "safari_shop",
    "shippedBy": "poke_parcel",
    "levelRequirement": 1
  },
  "doughnut_hole_legendary_singularity_stone": {
    "id": "doughnut_hole_legendary_singularity_stone",
    "name": "The Heart of the Void",
    "description": "Legends say this stone was formed at the very center of The Doughnut Hole. It radiates a chilling energy, capable of briefly manipulating gravity and creating miniature black holes – handle with extreme care! Don't get sucked in!",
    "category": "premium",
    "price": 60000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "powerful_gravity_manipulation",
      "chance_to_create_miniature_black_hole",
      "significant_healing_on_use",
      "resistance_to_void_based_attacks"
    ],
    "vendor": "void_vendor",
    "shippedBy": "chronal_container",
    "levelRequirement": 18
  },
  "grand_country_stone_of_echoes": {
    "id": "grand_country_stone_of_echoes",
    "name": "Resonant Shale",
    "description": "This oddly shaped shale seems to vibrate with forgotten voices. Holding it near a wall reveals brief, distorted echoes of the past – potentially helpful for uncovering secrets or scaring away pesky goblins!",
    "category": "curiosities",
    "price": 1200,
    "icon": "🗣️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveals hidden clues (50% chance)",
      "emits a distracting sound effect for 2 seconds"
    ],
    "vendor": "layer_market",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 6
  },
  "grand_country_order_of_the_shepherd": {
    "id": "grand_country_order_of_the_shepherd",
    "name": "Fragment of the Shepherd's Vigil",
    "description": "A small, intricately carved piece of obsidian depicting a watchful shepherd. This item is a sacred relic of the Mountain Clan, known for their unwavering devotion to protecting the peaks – it grants minor blessings and protection against fall damage!",
    "category": "equipment",
    "price": 8000,
    "icon": "🐑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases fall damage resistance by 20%",
      "chance to gain temporary HP upon reaching high ground (5%)"
    ],
    "vendor": "side_seller",
    "shippedBy": "Winged Messenger",
    "levelRequirement": 10
  },
  "doughnut_hole_center_echo": {
    "id": "doughnut_hole_center_echo",
    "name": "Echo of the Center",
    "description": "A small, pulsating orb that hums with a faint resonance. Touching it grants brief glimpses into possible futures – usually involving pastries and existential dread. Don’t stare too long, or you might become one with the void!",
    "category": "curiosities",
    "price": 12000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grants a cryptic prophecy (random effect)",
      "Chance (15%) to reveal hidden passages",
      "Reduces sanity by 2 points",
      "Provides advantage on Insight checks."
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Delivery",
    "levelRequirement": 8
  },
  "midlands_item_shadows_whisper": {
    "id": "midlands_item_shadows_whisper",
    "name": "Shadows' Whisper Amulet",
    "description": "This obsidian amulet pulses with a faint, unsettling energy. When worn, it grants the wearer advantage on stealth checks in dim light and darkness – because sometimes, you just need to disappear... preferably before someone asks too many questions about your questionable business dealings. It’s said to be crafted from solidified shadows harvested during a particularly dark night!",
    "category": "equipment",
    "price": 7500,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "advantage on stealth in dim light/darkness",
      "chance to inflict 'frightened' status on weaker enemies"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "express_delivery",
    "levelRequirement": 10
  },
  "the_edge_voidstone_shards": {
    "id": "the_edge_voidstone_shards",
    "name": "Voidstone Shard Fragments",
    "description": "These jagged pieces pulse with the chilling energy of the Abyss! Collecting and combining them might grant glimpses into realities beyond comprehension, or just give you a nasty headache. Wario would pay a fortune for these to make exploding dice!",
    "category": "curiosities",
    "price": 2800,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to inflict fear on target",
      "increases critical hit chance by 5%",
      "absorbs 10% of incoming damage"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 6
  },
  "doughnut_hole_singularity_orb": {
    "id": "doughnut_hole_singularity_orb",
    "name": "Echoes of the Center",
    "description": "A shimmering orb pulsating with residual void energy. Hold it close, and you might hear whispers from… somewhere. Or just a really loud buzzing sound – results may vary!",
    "category": "curiosities",
    "price": 750,
    "icon": "🔮",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_summon_void_sprite",
      "minor_mana_regeneration",
      "attracts_negative_energy"
    ],
    "vendor": "center_seller",
    "shippedBy": "temporal_package",
    "levelRequirement": 5
  },
  "middle_earth_shire_loyalty_ring": {
    "id": "middle_earth_shire_loyalty_ring",
    "name": "The Humble Ring of Gratitude",
    "description": "Forged in the heart of Hobbiton, this ring isn’t flashy or powerful, but it radiates an undeniable warmth and a penchant for second breakfasts.  Wearing it subtly boosts your charm and earns you preferential treatment with local merchants – perfect for securing those extra sausages!",
    "category": "equipment",
    "price": 12000,
    "icon": "💍",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+2 Charisma",
      "Increased chance of receiving discounts from Shire vendors.",
      "Grants advantage on persuasion checks related to food and drink."
    ],
    "vendor": "shire_shop",
    "shippedBy": "Rolling Delivery Cart",
    "levelRequirement": 10
  },
  "middle_earth_mithril_shard_of_echoes": {
    "id": "middle_earth_mithril_shard_of_echoes",
    "name": "Whispers of Khazad-dûm",
    "description": "A fragment of pure Mithril, pulsing with residual magic from the fallen kingdom. Holding this shard allows you to briefly hear echoes of conversations and events that transpired within Moria – though be warned, some whispers are… unsettling. Wario says it’s good for finding lost coins!",
    "category": "curiosities",
    "price": 250000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Allows the user to hear echoes of past events in a 30ft radius (once per day)",
      "Provides advantage on investigation checks related to ancient ruins.",
      "Chance to attract spectral entities (DC 15 Wisdom save)"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 22
  },
  "earth_land_gourmet_potion": {
    "id": "earth_land_gourmet_potion",
    "name": "Wario's Delightful Digestive Brew",
    "description": "A potent concoction brewed with rare earth herbs and a secret ingredient (probably Wario’s rejected snacks). This premium potion instantly restores 50 HP, cures minor ailments, and leaves your mouth watering for more - just don't ask what 'more' is.",
    "category": "consumables",
    "price": 1200,
    "icon": "😋",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "restores 50 HP",
      "cures minor poison and disease",
      "slightly increases charisma"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "cart_on_wheels",
    "levelRequirement": 3
  },
  "earth_land_dragonscale_scroll": {
    "id": "earth_land_dragonscale_scroll",
    "name": "The Whispers of Ignis",
    "description": "This ancient scroll, rumored to be a fragment of a dragon’s memory, contains cryptic instructions for summoning a lesser fire elemental. Handle with care – the dragon's residual rage is *strong*!",
    "category": "curiosities",
    "price": 8500,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to summon a minor fire elemental (level 4)",
      "increases fire damage by 5%",
      "grants temporary resistance to lightning damage"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_worm",
    "levelRequirement": 8
  },
  "animatopia_howler_bone": {
    "id": "animatopia_howler_bone",
    "name": "Echoing Howler Bone",
    "description": "A meticulously carved bone from the Howler Beast, imbued with residual primal energy. Holding it to your ear allows you to briefly mimic the beast’s terrifying roar, potentially stunning nearby enemies or scaring off smaller creatures. Just don't stare directly at it for too long – Wario says it gives him the hiccups!",
    "category": "equipment",
    "price": 12000,
    "icon": "🐺",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "stun_on_roar",
      "fear_small_creatures",
      "minor_sound_buff"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_squirrel",
    "levelRequirement": 8
  },
  "animatopia_beast_bazaar_voucher": {
    "id": "animatopia_beast_bazaar_voucher",
    "name": "Beast Bazaar Trade Voucher",
    "description": "A highly sought-after voucher granting access to the exclusive Beast Bazaar, a marketplace overflowing with exotic goods and bizarre creatures. You can trade your valuable finds for rare materials, potent potions, or perhaps even a trained miniature rhino – assuming you’re brave enough to handle it!  Wario would love this!",
    "category": "faction",
    "price": 2500,
    "icon": "🐾",
    "stock": 98,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "access_beast_bazaar",
      "discounts_at_bazaar",
      "faction_reputation_bonus"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "delivery_hawk",
    "levelRequirement": 3
  },
  "doughnut_hole_gravitic_donut": {
    "id": "doughnut_hole_gravitic_donut",
    "name": "Gravitic Donut",
    "description": "This donut defies all logic. It subtly pulls objects towards it, creating a minor localized gravity effect! Use it to snatch items from afar, create temporary obstacles, or just mess with your enemies – though be warned, excessive consumption may result in uncontrollable bouncing.",
    "category": "equipment",
    "price": 850,
    "icon": "🍩",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Grants +1 to Dexterity for 2 turns",
      "Minor chance to pull enemies closer (15%)",
      "Small area of effect gravity (radius: 3m)"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Delivery Drone",
    "levelRequirement": 6
  },
  "doughnut_hole_void_fragment_artifact": {
    "id": "doughnut_hole_void_fragment_artifact",
    "name": "Void Fragment Artifact",
    "description": "A pulsing shard of solidified void energy – it feels cold to the touch. This artifact whispers fragmented memories from before time, offering glimpses into impossible geometries and unsettling truths. Handle with care; prolonged exposure may induce existential dread or a sudden craving for jelly donuts.",
    "category": "curiosities",
    "price": 6200,
    "icon": "🌌",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grants +3 to Intelligence",
      "Chance to inflict ‘Terror’ on a single target (20%)",
      "Increases magic resistance by 10%"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Phantom Delivery Service",
    "levelRequirement": 8
  },
  "middle_earth_item_whispering_stone": {
    "id": "middle_earth_item_whispering_stone",
    "name": "Whispering Stone of Rivendell",
    "description": "This smooth, grey stone seems to hum with ancient Elven melodies. Holding it allows you to briefly understand the language of birds and receive cryptic warnings – mostly about grumpy goblins and misplaced socks. It’s surprisingly good for bartering too!",
    "category": "curiosities",
    "price": 1200,
    "icon": "🦉",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "grant_minor_insight",
      "chance_to_understand_animal_speech",
      "small_luck_boost"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 6
  },
  "middle_earth_item_dwarven_battleaxe": {
    "id": "middle_earth_item_dwarven_battleaxe",
    "name": "Stonebreaker's Fury",
    "description": "Forged in the deepest mines of Khazad-dûm, this axe is practically begging for a good brawl! The head is crafted from obsidian and reinforced with dwarven steel, capable of cleaving through even the toughest orcish armor – assuming you hit them, of course. Don’t get it confused with your fancy elven blade; it’s got *grit*!",
    "category": "equipment",
    "price": 7500,
    "icon": "⚔️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased_strength",
      "chance_to_stagger_enemies",
      "bonus_damage_vs_orcish_armor"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "earthquake_cart",
    "levelRequirement": 10
  },
  "middle_earth_item_shire_sweetroll_of_power": {
    "id": "middle_earth_item_shire_sweetroll_of_power",
    "name": "The Everlasting Sweetroll",
    "description": "A deceptively delicious sweetroll, baked fresh daily by Mrs. Miggins herself! But don't let the sugary aroma fool you – this particular roll grants a temporary burst of energy and resilience.  It’s surprisingly effective against dark magic... or just really intense hunger.",
    "category": "consumables",
    "price": 350,
    "icon": "🍩",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores_health",
      "temporary_speed_boost",
      "resistance_to_poison"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 2
  },
  "equestria_item_starry_dust_massage": {
    "id": "equestria_item_starry_dust_massage",
    "name": "Starry Dust Massage Therapy",
    "description": "Let the gentle magic of shimmering star dust soothe your weary muscles and mend your wounds! This luxurious service utilizes collected stardust to accelerate healing and provide a calming aura, perfect for recovering from grueling battles or simply relaxing. Wario thinks it’s just fancy glitter – he’d try to collect some himself.",
    "category": "services",
    "price": 1800,
    "icon": "✨",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "instant 50 HP recovery",
      "remove one level of exhaustion",
      "increase movement speed by 1 for 2 turns"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "stable_hand",
    "levelRequirement": 7
  },
  "equestria_item_elemental_resonance_amulet": {
    "id": "equestria_item_elemental_resonance_amulet",
    "name": "Elemental Resonance Amulet",
    "description": "Crafted by ancient pony artisans, this amulet channels the raw power of Equestria’s elements. When attuned to a specific element (Fire, Water, Earth, or Air), it grants significant bonuses related to that element – Wario's just hoping he can use it to make bigger explosions.",
    "category": "equipment",
    "price": 6200,
    "icon": "🔥💧🌍💨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Fire: +5 damage with fire attacks",
      "Water: increased swim speed and resistance to cold",
      "Earth: improved defense against physical attacks",
      "Air: enhanced agility and evasion"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "magical_pony",
    "levelRequirement": 10
  },
  "teyvat_item_forbidden_chronometer": {
    "id": "teyvat_item_forbidden_chronometer",
    "name": "The Clockwork Heart of Azathoth",
    "description": "A terrifying device pulsing with otherworldly energy, this chronometer doesn't measure time - it *distorts* it. Use at your own peril; prolonged exposure risks becoming trapped in an endless loop of fractured moments and existential dread! Wario wouldn’t touch this one… probably.",
    "category": "forbidden",
    "price": 250000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "randomly accelerates or decelerates the flow of time for self and nearby enemies",
      "chance to create temporal distortions (20%) - can summon ghostly duplicates or erase enemy actions.",
      "causes madness if used continuously for more than 3 rounds"
    ],
    "vendor": "shadow_brokers",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 22
  },
  "teyvat_item_monstadt_wind_charm": {
    "id": "teyvat_item_monstadt_wind_charm",
    "name": "Aetherial Zephyr Token",
    "description": "Crafted by the finest wind mages of Mondstadt, this charm whispers with the essence of freedom and swiftness. It provides a minor boost to movement speed and allows you to briefly manipulate air currents for tactical advantage - perfect for dodging or launching projectiles!",
    "category": "consumables",
    "price": 350,
    "icon": "💨",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increases movement speed by 10%",
      "chance to grant a temporary shield on successful dodge rolls (10%)",
      "provides a small boost to ranged attack accuracy"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_courier",
    "levelRequirement": 5
  },
  "chaos_scroll_of_unmaking": {
    "id": "chaos_scroll_of_unmaking",
    "name": "Scroll of Unmaking - Entropy's Whisper",
    "description": "A shimmering scroll pulsating with chaotic energy. Touching it feels like staring into the void – a truly unsettling experience! It’s rumored to briefly unravel reality around its user, creating opportunities for madness and mayhem…perfect for Wario!",
    "category": "curiosities",
    "price": 75000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance to instantly destroy a non-boss enemy on hit",
      "temporary chaos aura (enemies within 5ft have reduced accuracy)",
      "chance to trigger random effects (positive or negative)"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Void Messenger",
    "levelRequirement": 18
  },
  "faction_imperial_favor": {
    "id": "faction_imperial_favor",
    "name": "Imperial Favor - The Emperor's Grudge",
    "description": "A meticulously crafted miniature statue of the deceased emperor. Holding it, you feel a strange compulsion to…rule? It’s an expensive trinket with surprisingly potent influence over loyal imperial subjects.  Wario probably just wants to keep it as a shiny trophy.",
    "category": "faction",
    "price": 12000,
    "icon": "👑",
    "stock": 9,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased reputation with Imperial factions",
      "chance to gain access to exclusive quests",
      "bonus to diplomacy checks (10%)"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 3
  },
  "earth_land_item_legendary_rune_of_protection": {
    "id": "earth_land_item_legendary_rune_of_protection",
    "name": "The Warden's Echo",
    "description": "Forged in the heart of a collapsed dragon’s lair, this rune radiates an aura of impenetrable defense. It doesn't just block attacks; it seems to *absorb* them, occasionally echoing back with a surge of retaliatory energy – be warned, overuse may lead to temporary madness!",
    "category": "equipment",
    "price": 65000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "high armor value +20",
      "chance to reflect damage back at the attacker",
      "temporary madness effect on overuse (low chance)"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "winged_lion",
    "levelRequirement": 14
  },
  "equestria_item_princess_celestia_badge": {
    "id": "equestria_item_princess_celestia_badge",
    "name": "Badge of Celestial Guidance",
    "description": "A gleaming badge crafted by Princess Celestia herself, this item radiates a calming aura and offers minor protection against illusions. It's rumored to guide its wearer toward the most strategic path – or at least, the one that smells faintly of apple pie.",
    "category": "equipment",
    "price": 8000,
    "icon": "👑",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increase magic resistance by 5%",
      "chance to detect illusions (10%)",
      "+1 to Wisdom score"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "standard_pony_mail",
    "levelRequirement": 6
  },
  "midlands_item_potion_of_regret": {
    "id": "midlands_item_potion_of_regret",
    "name": "A Bitter Brew",
    "description": "This murky potion tastes suspiciously of old parchment and lost hopes. Drinking it forces you to relive your most embarrassing moments – a truly unpleasant, but surprisingly effective distraction!  Wario would absolutely love this!",
    "category": "consumables",
    "price": 1200,
    "icon": "🧪",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "restores 50 HP",
      "causes target to lose focus for 1 turn",
      "chance to trigger a negative status effect (confusion/fear)"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "flying drake",
    "levelRequirement": 6
  },
  "pokemon_item_primal_flare": {
    "id": "pokemon_item_primal_flare",
    "name": "Primal Flare Potion",
    "description": "A bubbling concoction distilled from the essence of a furious Charizard's roar! This potion instantly grants +5 Fire damage to your next attack, but beware - you might feel an uncontrollable urge to hoard shiny pebbles afterwards.",
    "category": "consumables",
    "price": 750,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_fire_damage_5",
      "chance_to_hoard_shiny_items",
      "duration_30s"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poké Mail Drone",
    "levelRequirement": 4
  },
  "middle_earth_emberglow_amulet": {
    "id": "middle_earth_emberglow_amulet",
    "name": "Emberglow Amulet of the Grey Watchers",
    "description": "This strangely warm amulet pulses with a faint, grey light – rumored to be remnants of ancient Elven magic. It seems to ward off chilling winds and gives you an unsettlingly accurate feeling of impending doom… which is probably why it’s so cheap!",
    "category": "equipment",
    "price": 12000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_cold_resistance",
      "minor_luck_boost",
      "chance_to_detect_hidden_paths"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 7
  },
  "middle_earth_dwarven_stout_brew": {
    "id": "middle_earth_dwarven_stout_brew",
    "name": "Stonebeard’s Stout of Unyielding Courage",
    "description": "Brewed deep within the dwarven forges, this stout smells suspiciously like iron and boasts an alarming resilience. One gulp gives you a brief but potent surge of bravery… followed by a slight metallic aftertaste and a need to loudly declare your accomplishments.",
    "category": "consumables",
    "price": 800,
    "icon": "🍺",
    "stock": 25,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_strength_boost",
      "increased_confidence",
      "chance_to_resist_fear"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_rat",
    "levelRequirement": 1
  },
  "middle_earth_shire_messenger_scroll": {
    "id": "middle_earth_shire_messenger_scroll",
    "name": "A Curious Delivery from Bag End",
    "description": "This exquisitely crafted scroll, delivered by a surprisingly grumpy hobbit courier, contains a single riddle and a small packet of honey. It's said that solving the riddle will lead you to a forgotten cache of Shire goods… or possibly just more riddles.",
    "category": "curiosities",
    "price": 1800,
    "icon": "✉️",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "chance_to_receive_quest",
      "small_healing_effect",
      "reveals_nearby_secrets"
    ],
    "vendor": "shire_shop",
    "shippedBy": "grumpy_hobbit",
    "levelRequirement": 5
  },
  "the_edge_gravitic_gloop": {
    "id": "the_edge_gravitic_gloop",
    "name": "Gravitic Gloop of Unstable Descent",
    "description": "A viscous, iridescent blob that seems to defy gravity – and maybe your sanity. When thrown, it creates a localized field of fluctuating gravity, pulling enemies towards its center or sending them careening wildly across the battlefield. Wario approves!",
    "category": "consumables",
    "price": 800,
    "icon": "🧪",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 bludgeoning damage in an area of effect",
      "enemies caught in the effect have a chance to be knocked prone (30%)",
      "chance to inflict 'disoriented' on target (5%)"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_delivery",
    "levelRequirement": 4
  },
  "the_edge_chronarium_scroll": {
    "id": "the_edge_chronarium_scroll",
    "name": "Chronarium Scroll of Temporal Hiccups",
    "description": "This ancient scroll, etched with swirling symbols and faintly shimmering with chronal energy, allows the user to briefly rewind time – but not without a few unpredictable side effects. Expect minor temporal distortions, spontaneous duplicates of yourself, and possibly an encounter with your past self. Don't say we didn’t warn you!",
    "category": "curiosities",
    "price": 6000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "allows the user to rewind time by 3 seconds",
      "chance to create a temporary duplicate of the user (5%)",
      "user suffers minor temporal distortion effects (random stat changes for 1 round)"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_messenger",
    "levelRequirement": 12
  },
  "midlands_item_empire_scroll": {
    "id": "midlands_item_empire_scroll",
    "name": "Decree of Minor Inconvenience",
    "description": "Issued by the perpetually annoyed Archduke Theodore himself, this scroll details a minor infraction – specifically, failing to properly polish your boots.  It's surprisingly effective at causing bureaucratic delays and minor inconveniences for anyone who attempts to use it.",
    "category": "faction",
    "price": 7800,
    "icon": "📜",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to impose -1 penalty on social checks",
      "slows enemy movement by 5 feet for 1 round (once per encounter)"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial messenger",
    "levelRequirement": 6
  },
  "midlands_item_obsidian_charm": {
    "id": "midlands_item_obsidian_charm",
    "name": "Whispers of the Shattered King",
    "description": "This obsidian charm pulses with a faint, unsettling warmth. Legend claims it was crafted by loyalists to the fallen king, and whispers can be faintly heard when held close – mostly complaints about taxes and paperwork.  It's... distracting.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grants +2 to perception checks",
      "chance to detect illusions (20%)",
      "provides resistance to psychic damage"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon post",
    "levelRequirement": 9
  },
  "the_edge_chronarium_bracelet": {
    "id": "the_edge_chronarium_bracelet",
    "name": "Chronarium Bracelet of Temporal Shifting",
    "description": "Forged from solidified chronal energy, this bracelet allows the wearer to briefly accelerate or decelerate their personal perception of time. It's a tricky device – misusing it could lead to unfortunate paradoxes and a sudden craving for pickled onions!",
    "category": "equipment",
    "price": 12500,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to slow enemy attacks (10%)",
      "increase movement speed by 50% for 2 rounds",
      "chance to avoid a single attack"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_packet",
    "levelRequirement": 8
  },
  "the_edge_voidstone_ritual": {
    "id": "the_edge_voidstone_ritual",
    "name": "Voidstone Ritual Kit – 'Whispers of Oblivion'",
    "description": "A meticulously assembled kit containing ancient glyphs, a pulsating Voidstone, and a collection of unsettling herbs - designed to summon minor echoes of the abyss. Wario’s warning: don't blame us if you end up with a permanent fondness for staring into nothingness!",
    "category": "services",
    "price": 22000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to inflict 'fear' on a single enemy (20%)",
      "temporary damage reduction (15%)",
      "grant temporary resistance to psychic attacks"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "black_carriage",
    "levelRequirement": 12
  },
  "teyvat_item_jade_plateau_gauntlet": {
    "id": "teyvat_item_jade_plateau_gauntlet",
    "name": "Jade Plateau Gauntlet of Resilience",
    "description": "Forged in the depths of the Jade Peak, this gauntlet channels Geo energy to bolster your defenses. It’s surprisingly comfortable…until you try punching a mountain. Seriously, don't do that. Wario would be *so* disappointed.",
    "category": "equipment",
    "price": 12500,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases Geo defense by 30%",
      "chance to absorb incoming damage (10%)",
      "grants +2 to Strength"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 9
  },
  "teyvat_item_inazuma_driftwood_charm": {
    "id": "teyvat_item_inazuma_driftwood_charm",
    "name": "Inazuman Driftwood Charm of Whispers",
    "description": "Carved from the wreckage of a forgotten ship, this charm whispers secrets carried on the wind. It’s said to grant glimpses into the past…or just make you think you hear voices. Wario claims it told him where he buried his money – and that's probably true.",
    "category": "curiosities",
    "price": 3500,
    "icon": "🌊",
    "stock": 29,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to reveal hidden paths (10%)",
      "increases perception by 5%",
      "provides a small bonus to persuasion checks"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "wind_messenger",
    "levelRequirement": 6
  },
  "earth_land_frostbite_charm": {
    "id": "earth_land_frostbite_charm",
    "name": "The Shivering Serpent's Kiss",
    "description": "This tiny, obsidian serpent seems perpetually cold to the touch. Wearing this charm grants resistance to frost and chills, but prolonged use can lead to a slight case of the shivers – perfect for unsettling your foes!",
    "category": "equipment",
    "price": 12000,
    "icon": "🥶",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "frost resistance +3",
      "chance to inflict chilling effect on attack",
      "slow movement speed -5%"
    ],
    "vendor": "magic_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 6
  },
  "earth_land_potion_of_fermented_berries": {
    "id": "earth_land_potion_of_fermented_berries",
    "name": "Wario's Berry Blitz!",
    "description": "A vibrant, bubbling concoction crafted from wild berries and a secret ingredient (probably Wario’s leftovers). This potion grants a burst of speed and a surprisingly intense sugar rush – beware the ensuing hyperactivity!",
    "category": "consumables",
    "price": 250,
    "icon": "⚡",
    "stock": 48,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "speed boost +10% for 6 seconds",
      "temporary increase to attack damage -5%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "hawk_express",
    "levelRequirement": 1
  },
  "earth_land_amulet_of_the_ancient_one": {
    "id": "earth_land_amulet_of_the_ancient_one",
    "name": "The Echoing Heartstone",
    "description": "This pulsating, grey gemstone hums with the forgotten whispers of ancient earth spirits. Holding this amulet grants a limited ability to sense magical disturbances and briefly glimpse echoes of past events – but be warned, prolonged exposure might drive you slightly mad with visions!",
    "category": "curiosities",
    "price": 650000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increased magical resistance +20%",
      "chance to detect hidden magic sources",
      "passive vision – glimpse of past events (rare)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 25
  },
  "leclaire_isle_item_crumbly_crown": {
    "id": "leclaire_isle_item_crumbly_crown",
    "name": "The Crumbly Crown of Pastry Perfection",
    "description": "A magnificent headdress crafted entirely from hardened croissant dough and glazed with shimmering sugar. Wearing this crown grants you an unnerving ability to attract stray pastries – expect a sticky situation, but also a surprisingly delicious one!",
    "category": "equipment",
    "price": 18000,
    "icon": "👑",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased_food_consumption",
      "minor_charm",
      "chance_to_heal_small_wounds"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_pony",
    "levelRequirement": 9
  },
  "leclaire_isle_item_whispering_whisk": {
    "id": "leclaire_isle_item_whispering_whisk",
    "name": "The Whispering Whisk of Sweet Secrets",
    "description": "This ornate whisk, crafted from polished amber and enchanted with the voices of ancient bakers, grants you a fleeting glimpse into the desires of those around you. Be warned, however - their cravings are *very* specific...",
    "category": "curiosities",
    "price": 750,
    "icon": "🥄",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "detect_desires",
      "small_chance_of_illusion",
      "increased_charisma"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "magic_cart",
    "levelRequirement": 3
  },
  "earth_land_frostfang_amulet": {
    "id": "earth_land_frostfang_amulet",
    "name": "Frostfang Amulet",
    "description": "This icy amulet pulses with the chill of ancient glaciers! It's rumored to have been crafted by frost giants and grants its wearer resistance to cold damage, plus a surprisingly effective way to make your enemies shiver. Wario always said 'cold is just another flavor!'",
    "category": "equipment",
    "price": 75000,
    "icon": "🥶",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "cold_resistance_50",
      "chance_to_freeze_target_10%",
      "increased_movement_speed_5%"
    ],
    "vendor": "magic_shop",
    "shippedBy": "ice_golem",
    "levelRequirement": 18
  }
};
