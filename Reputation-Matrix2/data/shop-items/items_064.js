// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_064 = {
  "internet_data_packet": {
    "id": "internet_data_packet",
    "name": "Viral Surge Capsule",
    "description": "This shimmering capsule contains concentrated data – perfect for boosting your online presence! Consume it to temporarily increase your Charisma and gain a chance to spread a hilarious meme throughout the digital world. Wario would totally buy this!",
    "category": "consumables",
    "price": 250,
    "icon": "💥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase charisma by 10 for 3 turns",
      "15% chance to trigger a ‘meme’ effect (briefly confuses enemies)"
    ],
    "vendor": "data_dealer",
    "shippedBy": "quantum_fiber",
    "levelRequirement": 2
  },
  "internet_firewall_protocol": {
    "id": "internet_firewall_protocol",
    "name": "Recursive Reboot Rune",
    "description": "This ancient rune pulses with raw internet energy! When activated, it creates a temporary firewall around you, shielding you from psychic attacks and data corruption. Warning: May cause uncontrollable urges to refresh your browser.",
    "category": "curiosities",
    "price": 8500,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "immunity to psychic damage for 5 turns",
      "chance to reflect a single spell back at the caster (5%)"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 10
  },
  "earth_land_item_wormhole_scroll": {
    "id": "earth_land_item_wormhole_scroll",
    "name": "Wormhole Scroll of Minor Displacement",
    "description": "This scroll, pilfered from a goblin's hoard after a particularly messy negotiation with Wario, allows for a short-range teleport. Use it wisely… or just create a bigger mess! We’re not responsible if you end up in a dragon’s lair.",
    "category": "curiosities",
    "price": 800,
    "icon": "🌀",
    "stock": 25,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "teleport to a random location within 30 feet",
      "small chance of temporary disorientation (5%)"
    ],
    "vendor": "magic_shop",
    "shippedBy": "magical_pony",
    "levelRequirement": 8
  },
  "earth_land_item_shadowfang_dagger": {
    "id": "earth_land_item_shadowfang_dagger",
    "name": "Shadowfang Dagger of Whispered Secrets",
    "description": "This dagger pulses with a faint darkness, rumored to be imbued by a banished shadow demon. It’s delightfully sharp and whispers unsettling truths… mostly about Wario's questionable business practices. Handle with care (and maybe some holy water).",
    "category": "forbidden",
    "price": 2500,
    "icon": "🔪",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "deals extra shadow damage (1d6)",
      "chance to inflict fear (15%)",
      "increased critical hit chance (5%)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dark_messenger",
    "levelRequirement": 12
  },
  "equestria_item_rainbow_hoof_boots": {
    "id": "equestria_item_rainbow_hoof_boots",
    "name": "Rainbow Hoof Boots",
    "description": "These boots shimmer with every step, leaving a trail of rainbow dust! Perfect for dashing across the plains or confusing your enemies – just don't try to eat them.",
    "category": "equipment",
    "price": 1800,
    "icon": "🦄",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "movement_speed_boost:5",
      "chance_to_confuse_enemy:10",
      "magical_resistance:3"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "pony_express",
    "levelRequirement": 6
  },
  "equestria_item_sparkleberry_potion": {
    "id": "equestria_item_sparkleberry_potion",
    "name": "Sparkleberry Potion",
    "description": "Brewed with rare sparkleberries and a pinch of pixie dust, this potion grants temporary brilliance! Warning: may cause uncontrollable giggling and an urge to dance.",
    "category": "consumables",
    "price": 650,
    "icon": "✨",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "health_regen:15",
      "strength_boost:2",
      "chance_of_positive_buff:5"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "magic_mail",
    "levelRequirement": 3
  },
  "equestria_item_windy_whistle": {
    "id": "equestria_item_windy_whistle",
    "name": "Windy Whistle",
    "description": "This enchanted whistle summons a miniature gust of wind, perfect for scattering enemies or carrying messages across the land! Just don't blow it near Twilight Sparkle – she hates surprises.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🌬️",
    "stock": 91,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_push_enemy:20",
      "small_area_of_effect_wind:5",
      "increased_perception:3"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "winged_messenger",
    "levelRequirement": 10
  },
  "almost_edge_godly_obsession": {
    "id": "almost_edge_godly_obsession",
    "name": "Godly Obsession",
    "description": "A perfectly formed, iridescent sphere pulsing with a strange energy. Touching it induces an overwhelming compulsion to collect... lost items, forgotten memories, and existential dread. Don't say we didn't warn you!",
    "category": "premium",
    "price": 750000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Grants +5 to all stats for 30 seconds",
      "Chance to find powerful artifacts (15%)",
      "Causes mild paranoia"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Chronal Delivery",
    "levelRequirement": 25
  },
  "middle_earth_fellowship_token": {
    "id": "middle_earth_fellowship_token",
    "name": "Ringbearer’s Goodwill Token",
    "description": "A beautifully crafted token bearing the emblem of the Fellowship. It grants a small measure of favor with those who uphold justice and fight against darkness – just don't expect any free Lembas bread.",
    "category": "faction",
    "price": 3200,
    "icon": "🤝",
    "stock": 28,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+1 to Charisma checks when interacting with Elves or Men",
      "grants access to exclusive quests offered by the Fellowship",
      "provides a small discount at elven markets"
    ],
    "vendor": "elven_market",
    "shippedBy": "messenger_owl",
    "levelRequirement": 10
  },
  "connectopia_obsidian_shard": {
    "id": "connectopia_obsidian_shard",
    "name": "Void Echo",
    "description": "A shard of pure, solidified negativity harvested from the deepest mines. This unsettling artifact whispers dark secrets and amplifies your destructive potential – use with caution, or risk summoning a grumpy robot!",
    "category": "forbidden",
    "price": 6500,
    "icon": "🖤",
    "stock": 18,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "damage +20 to enemies for 30 seconds",
      "chance to inflict 'confusion' on target (5%)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 18
  },
  "connectopia_gearbox_cog": {
    "id": "connectopia_gearbox_cog",
    "name": "Temporal Sprocket",
    "description": "A remarkably precise gear forged from solidified time. It can be used to momentarily slow down your movement or briefly rewind a failed action – just don't try to fix that hole you made in the ground!",
    "category": "consumables",
    "price": 350,
    "icon": "⚙️",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "movement speed +5% for 15 seconds",
      "chance to rewind last action (2%)"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_drone",
    "levelRequirement": 3
  },
  "almost_edge_item_temporal_echo": {
    "id": "almost_edge_item_temporal_echo",
    "name": "Fractured Time Shard",
    "description": "A shimmering fragment pulled from the very fabric of this place! Holding it briefly allows you to glimpse possible futures... or terrifying echoes of what *might* have been. Don't stare too long, or you might forget where you are!",
    "category": "equipment",
    "price": 850,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to slow enemy by 10% for 3 turns",
      "grants +2 to perception checks related to spatial awareness",
      "reduces sanity loss from cosmic horror encounters by 5%"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 6
  },
  "almost_edge_item_liminal_lantern": {
    "id": "almost_edge_item_liminal_lantern",
    "name": "The Whispering Lantern",
    "description": "This lantern doesn't cast light, it *absorbs* the void. Holding it near a particularly unsettling area might grant you a fleeting sense of direction... or drive you completely mad!  It smells faintly of forgotten breakfasts.",
    "category": "curiosities",
    "price": 320,
    "icon": "🕯️",
    "stock": 68,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to detect hidden passages (15%)",
      "provides minor protection against fear effects",
      "slightly increases charisma checks in unsettling situations"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "cart of lost memories",
    "levelRequirement": 3
  },
  "the_edge_shard_of_despair": {
    "id": "the_edge_shard_of_despair",
    "name": "Fragment of the Endless Void",
    "description": "This jagged shard pulses with an unsettling darkness – it feels like gazing into a forgotten corner of the abyss. Holding it briefly grants you glimpses of potential futures, but prolonged exposure risks driving you mad with existential dread!",
    "category": "curiosities",
    "price": 1200,
    "icon": "🌌",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to inflict madness on target (10%)",
      "grant temporary resistance to fear effects",
      "reveals hidden traps in nearby area"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 7
  },
  "the_edge_rune_blade_of_silence": {
    "id": "the_edge_rune_blade_of_silence",
    "name": "Whisperfang",
    "description": "Forged from solidified echoes and tainted starlight, this blade steals the sound of your enemies...and perhaps a little bit of your own sanity. It's surprisingly sharp for something that seems to absorb all noise.",
    "category": "equipment",
    "price": 8500,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "+3 attack damage (melee)",
      "chance to silence target on hit (20%)",
      "reduces enemy reaction speed by 5%"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Void Courier",
    "levelRequirement": 10
  },
  "the_edge_chronal_repair_service": {
    "id": "the_edge_chronal_repair_service",
    "name": "Temporal Stitcher",
    "description": "Wario’s finest temporal mechanic offers to fix your most devastating wounds...at a price. He doesn't care about cause or effect, just making things 'work' again – sometimes with unexpected results!",
    "category": "services",
    "price": 23000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "instant healing (50 HP)",
      "chance to revert target's last action by one turn",
      "chance to age target by 1d4 turns"
    ],
    "vendor": "final_shop",
    "shippedBy": "Quantum Delivery System",
    "levelRequirement": 15
  },
  "almost_edge_item_chronal_drift": {
    "id": "almost_edge_item_chronal_drift",
    "name": "Temporal Shard Fragment",
    "description": "A sliver of solidified time, pulsing with an unsettling violet light. Holding it feels like a dizzying rush through moments you can't quite grasp – useful for brief bursts of speed, or maybe just making your enemies very confused.",
    "category": "equipment",
    "price": 1200,
    "icon": "⏳",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_speed_3",
      "confusion_1",
      "duration_6"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 7
  },
  "almost_edge_item_echoing_orb": {
    "id": "almost_edge_item_echoing_orb",
    "name": "Liminal Resonance Orb",
    "description": "This polished obsidian sphere whispers with the voices of lost souls and forgotten realities. Holding it allows you to briefly perceive echoes of events that occurred within this unsettling place – a truly spooky souvenir!",
    "category": "curiosities",
    "price": 850,
    "icon": "🔮",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "reveals_hidden_secrets_1",
      "chance_to_gain_sanity_loss_5%",
      "increases_perception_1"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "spectral_delivery",
    "levelRequirement": 4
  },
  "almost_edge_item_void_snack": {
    "id": "almost_edge_item_void_snack",
    "name": "Existential Pudding",
    "description": "A shimmering, grey pudding that tastes faintly of regret and distant galaxies. Consuming this treat will grant you a temporary boost to your hunger but also a profound sense of… emptiness.",
    "category": "consumables",
    "price": 380,
    "icon": "🍮",
    "stock": 79,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores_hunger_50",
      "chance_to_decrease_happiness_10%",
      "grant_temporary_confusion_1"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wormhole_express",
    "levelRequirement": 2
  },
  "animatopia_shadow_mask": {
    "id": "animatopia_shadow_mask",
    "name": "Mask of the Silent Hunter",
    "description": "A chilling mask woven from shadows and feathers, rumored to grant the wearer uncanny stealth. Use with caution; prolonged wear may lead to unsettling visions or a sudden urge to hunt small rodents.",
    "category": "forbidden",
    "price": 6200,
    "icon": "👻",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased stealth (+30%)",
      "chance to inflict fear on a single target (10%)",
      "reduces noise generated by movement"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_spider",
    "levelRequirement": 8
  },
  "animatopia_honeycomb_bomb": {
    "id": "animatopia_honeycomb_bomb",
    "name": "Sticky Situation",
    "description": "A surprisingly effective explosive concoction made from giant honeycomb and volatile jungle sap. It's guaranteed to stick you, your enemies, and anything nearby in a sticky mess! Wario would love this.",
    "category": "consumables",
    "price": 1200,
    "icon": "🍯",
    "stock": 55,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 4d6 piercing damage in a small radius",
      "enemies have disadvantage on Dexterity saving throws",
      "creates a sticky area (difficult terrain)"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_bee",
    "levelRequirement": 3
  },
  "doughnut_hole_sparking_drizzle": {
    "id": "doughnut_hole_sparking_drizzle",
    "name": "Sparking Drizzle of Annihilation",
    "description": "A swirling, iridescent drizzle that tastes vaguely of burnt sugar and existential dread. When applied to a weapon, it briefly increases its damage by 10% but may also cause the wielder to experience fleeting visions of collapsing realities – mostly involving Wario's failed cake attempts.",
    "category": "consumables",
    "price": 350,
    "icon": "🔥",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "damage_increase_10%",
      "chance_of_visual_distraction",
      "minor_negative_mood_effect"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Ripple",
    "levelRequirement": 5
  },
  "doughnut_hole_chronal_crumb": {
    "id": "doughnut_hole_chronal_crumb",
    "name": "Chronal Crumb of Temporal Displacement",
    "description": "A single, shimmering crumb that whispers with the echoes of forgotten moments. Upon consumption, you'll experience a momentary rewind – useful for avoiding sticky situations or correcting minor mistakes... like buying Wario an extra cake.",
    "category": "consumables",
    "price": 800,
    "icon": "⏳",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "temporal_rewind_3_seconds",
      "minor_time_distortion",
      "chance_of_brief_confusion"
    ],
    "vendor": "center_seller",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 8
  },
  "earth_land_godly_rune_of_prosperity": {
    "id": "earth_land_godly_rune_of_prosperity",
    "name": "Rune of the Golden Harvest",
    "description": "This pulsating golden rune was created by ancient earth spirits, and is said to bring good fortune to its bearer. Touching it grants a temporary boost to gathering resources and finding valuable items – Wario would hoard this thing like candy!",
    "category": "premium",
    "price": 650000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increased_resource_yield_25%",
      "chance_to_find_rare_items_increased",
      "temporary_luck_boost_100"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Celestial Delivery",
    "levelRequirement": 25
  },
  "faerun_item_obsidian_mirror": {
    "id": "faerun_item_obsidian_mirror",
    "name": "The Gaze of Madness",
    "description": "This obsidian mirror doesn't reflect your image; it shows you a glimpse of potential futures… or terrible nightmares. Use with extreme caution, lest you become obsessed with what might be.",
    "category": "forbidden",
    "price": 25000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "chance to gain a temporary madness effect (roll d20)",
      "allows the user to glimpse possible futures (limited use)",
      "attracts negative energy - vulnerability to psychic damage"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "blackraven courier",
    "levelRequirement": 12
  },
  "connectopia_pioneer_gearset": {
    "id": "connectopia_pioneer_gearset",
    "name": "Reinforced Prospector's Plating",
    "description": "Forged from salvaged mining machinery and reinforced with rare crystalline fragments, this gearset will keep you looking sharp while digging for riches… or just smashing things. It’s surprisingly comfortable, too!",
    "category": "equipment",
    "price": 18000,
    "icon": "⛏️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "armor +25",
      "mining speed +10%",
      "chance to find extra ore"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "sky_cart",
    "levelRequirement": 10
  },
  "pokemon_item_electric_volt_rod": {
    "id": "pokemon_item_electric_volt_rod",
    "name": "Electro-Charged Rod of Fury",
    "description": "This rod crackles with raw electric energy, perfect for shocking unsuspecting Pokémon and adding a little zap to your battles. It's surprisingly comfortable to hold, even when it's trying to melt your hand!",
    "category": "equipment",
    "price": 6500,
    "icon": "⚡️",
    "stock": 23,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "damage: electric 10-18",
      "chance: 15% chance to paralyze target",
      "increased speed 5%"
    ],
    "vendor": "pokemart",
    "shippedBy": "PokéMail",
    "levelRequirement": 9
  },
  "pokemon_item_ancient_seed": {
    "id": "pokemon_item_ancient_seed",
    "name": "Seed of the First Bloom",
    "description": "Legend says this seed sprouted from the first Pokémon’s tears. Holding it can gently encourage a Pokémon's natural evolution, though results are never guaranteed... mostly because Pokémon are stubborn.",
    "category": "curiosities",
    "price": 800,
    "icon": "🌱",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance: 25% to trigger evolution on a level 3 or lower Pokémon",
      "increases happiness of the target Pokémon by 10%"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Safari Bike",
    "levelRequirement": 4
  },
  "pokemon_item_badge_of_valor": {
    "id": "pokemon_item_badge_of_valor",
    "name": "Badge of Valor - Flame",
    "description": "A shimmering badge crafted from solidified magma. Wearing it seems to amplify your Pokémon’s fire-type attacks... or maybe it just makes you really hot.",
    "category": "equipment",
    "price": 2100,
    "icon": "🔥",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "damage: fire 8-12",
      "increased critical hit chance 5%",
      "fire type immunity"
    ],
    "vendor": "league_store",
    "shippedBy": "League Courier",
    "levelRequirement": 7
  },
  "the_edge_flux_guzzle": {
    "id": "the_edge_flux_guzzle",
    "name": "Chromatic Grog",
    "description": "This bubbling concoction tastes vaguely of static and regret. Consume this to gain a temporary boost in reaction speed, but be warned – your vision might briefly shift to unsettling shades!",
    "category": "consumables",
    "price": 350,
    "icon": "🧪",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_reaction_speed_v",
      "chance_to_gain_temporary_insight"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_drone",
    "levelRequirement": 2
  },
  "the_edge_void_plate": {
    "id": "the_edge_void_plate",
    "name": "Nullstone Resonance Plate",
    "description": "Forged from a solidified tear of the void, this plate emits a field of absolute silence. Wearing it grants resistance to sonic damage and allows you to briefly suppress magical effects – though prolonged use might drain your very essence!",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resist_sonic_damage",
      "chance_to_suppress_spellcasting",
      "increased_armor_class"
    ],
    "vendor": "final_shop",
    "shippedBy": "void_messenger",
    "levelRequirement": 10
  },
  "doughnut_hole_singing_cruller": {
    "id": "doughnut_hole_singing_cruller",
    "name": "Resonance Cruller",
    "description": "This cruller pulses with a faint gravitational hum, and when consumed, it briefly alters your perception of time – allowing you to react just a fraction faster! It’s surprisingly delicious too, despite the unsettling feeling.",
    "category": "consumables",
    "price": 8000,
    "icon": "🎵",
    "stock": 25,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increase_speed_10%",
      "brief_temporal_shift_3s",
      "grant_luck_5%"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Packet",
    "levelRequirement": 9
  },
  "doughnut_hole_anomaly_charm": {
    "id": "doughnut_hole_anomaly_charm",
    "name": "Gravitic Shard",
    "description": "A fragment of solidified anomaly, this charm constantly shifts in weight and subtly warps nearby objects. It's perfect for the discerning collector (or someone who enjoys minor chaos). Just don’t drop it!",
    "category": "curiosities",
    "price": 1200,
    "icon": "✨",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "minor_gravity_distortion_5m",
      "chance_to_disrupt_enemy_attacks_10%",
      "attracts_small_objects"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 3
  },
  "animatopia_spirit_berry": {
    "id": "animatopia_spirit_berry",
    "name": "Spirit Berry of Tranquility",
    "description": "These luminous berries, harvested from the sacred Spirit Vines, offer a fleeting moment of serene focus. Consume one to gain advantage on Wisdom saving throws and resist fear effects for a short time - perfect for calming down a grumpy beast or avoiding Wario’s chaotic attempts at bargaining!",
    "category": "consumables",
    "price": 350,
    "icon": "🍇",
    "stock": 89,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "advantage on Wisdom saving throws for 2 rounds",
      "resistance to fear effects for 1 round"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_squirrel",
    "levelRequirement": 3
  },
  "the_edge_forbidden_sigil": {
    "id": "the_edge_forbidden_sigil",
    "name": "Mark of the Unraveling",
    "description": "This unsettling sigil seems to actively distort reality around it. Touching it might grant power, or simply unravel your sanity - either way, you'll need a strong stomach and maybe some Wario-brand anti-nausea pills.",
    "category": "forbidden",
    "price": 30000,
    "icon": "😈",
    "stock": 7,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_to_inflict_confusion",
      "increased_damage_against_shadow_enemies",
      "small_chance_of_self_harm"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "black_raven",
    "levelRequirement": 15
  },
  "the_edge_mythic_heartstone": {
    "id": "the_edge_mythic_heartstone",
    "name": "Core of the Endless Descent",
    "description": "A massive, pulsating heartstone radiating an almost unbearable cold. Legend says it contains a fragment of the abyss itself - and potentially, the key to escaping The Edge forever... or just freezing everything around you.",
    "category": "premium",
    "price": 120000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "significant_healing_on_use",
      "chance_to_nullify_dark_magic",
      "boosts_cold_resistance",
      "grants_temporary_immunity_to_fear"
    ],
    "vendor": "final_shop",
    "shippedBy": "void_crawler",
    "levelRequirement": 25
  },
  "grand_country_climbing_boots": {
    "id": "grand_country_climbing_boots",
    "name": "Layered Ascent Boots",
    "description": "These boots are constructed from multiple layers of strangely resilient material, perfect for scaling the most treacherous cliffs! With each step, you feel a subtle shift in gravity - it's almost like they're trying to trip you!",
    "category": "equipment",
    "price": 1200,
    "icon": "🥾",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases climbing speed by 50%",
      "grants resistance to falling damage",
      "chance to find a small amount of gems while climbing"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "rope_delivery",
    "levelRequirement": 12
  },
  "connectopia_lucky_gearshift": {
    "id": "connectopia_lucky_gearshift",
    "name": "Temporal Cog",
    "description": "A strangely warm cog that seems to subtly alter the flow of time around it. Wario says it's good for 'getting ahead,' but we don’t entirely understand how it works... or why he keeps trying to use it to win races. It’s delightfully unreliable!",
    "category": "curiosities",
    "price": 350,
    "icon": "⚙️",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to rewind time (small amount)",
      "increase chance of finding rare items",
      "slightly faster crafting speed"
    ],
    "vendor": "craft_corner",
    "shippedBy": "standard_delivery",
    "levelRequirement": 3
  },
  "equestria_item_starfall_armor": {
    "id": "equestria_item_starfall_armor",
    "name": "Starfall Knight's Breastplate",
    "description": "Forged during a meteor shower above Canterlot, this breastplate is said to channel the power of fallen stars. It provides a shimmering defense and a slight chance to reflect incoming magic attacks – great for distracting those pesky villains! Just try not to sparkle *too* much.",
    "category": "equipment",
    "price": 18000,
    "icon": "🌟",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases armor class by 3",
      "chance to reflect magic damage (10%)",
      "grants +2 to charisma checks"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Delivery Service",
    "levelRequirement": 9
  },
  "equestria_item_legendary_apple_of_wisdom": {
    "id": "equestria_item_legendary_apple_of_wisdom",
    "name": "The Apple of Eternal Reflection",
    "description": "Legend speaks of this ancient apple, capable of granting the user unparalleled insight and strategic thinking. Consuming it provides a significant bonus to intelligence and perception – perfect for outsmarting those tricky villains! Just don't ask where Wario hides his snacks after eating it.",
    "category": "premium",
    "price": 65000,
    "icon": "🍎",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "increases intelligence by 8",
      "grants +4 to perception checks",
      "chance to gain a temporary 'foresight' buff (increased dodge chance)"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Royal Airship Courier",
    "levelRequirement": 15
  },
  "midlands_item_divine_amulet": {
    "id": "midlands_item_divine_amulet",
    "name": "Amulet of Wario’s Favor (Seriously)",
    "description": "Legend says this amulet was crafted by a minor deity who inexplicably took an interest in Wario's… endeavors. It doesn’t *actually* grant divine power, but it does seem to attract shiny objects and occasionally cause minor inconveniences for your enemies.  Don't blame us if you start hoarding gold.",
    "category": "equipment",
    "price": 180000,
    "icon": "✨",
    "stock": 2,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increased_luck",
      "chance_to_steal_small_amount_of_gold",
      "resistance_to_minor_curses"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon_cart",
    "levelRequirement": 25
  },
  "mushroom_kingdom_warp_pipe_blueprint": {
    "id": "mushroom_kingdom_warp_pipe_blueprint",
    "name": "Dimensional Transit Schematic",
    "description": "A meticulously drawn blueprint for a miniature warp pipe! With this schematic, you can construct a temporary portal to another random location within the Mushroom Kingdom – just don’t blame Wario if you end up in a giant slug’s stomach. This could be invaluable when escape is needed!",
    "category": "curiosities",
    "price": 1250,
    "icon": "🌀",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Allows the user to create a temporary warp pipe (radius 5ft)",
      "Teleports the user and one other creature to a random location within 100 feet",
      "Requires 1 hour of construction time"
    ],
    "vendor": "wario_direct",
    "shippedBy": "delivery_drone",
    "levelRequirement": 8
  },
  "mushroom_kingdom_gold_coin_amplifier": {
    "id": "mushroom_kingdom_gold_coin_amplifier",
    "name": "Coin Magnet Accelerator",
    "description": "This gleaming device is designed to amplify your coin-collecting prowess! When activated, it creates a localized field that draws in all nearby gold coins – it's like having a tiny, greedy vacuum. Just try not to attract too much attention from the local guards.",
    "category": "equipment",
    "price": 7500,
    "icon": "💰",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increases coin collection rate by 50%",
      "Attracts gold coins within a 30ft radius",
      "Provides advantage on checks related to finding treasure"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "express_delivery",
    "levelRequirement": 10
  },
  "connectopia_pioneer_repair_service": {
    "id": "connectopia_pioneer_repair_service",
    "name": "Wario's Quick Fix",
    "description": "Need a broken pickaxe or a jammed gear? Wario’s Pioneer Repair Service will have it running like new in a flash! He uses a secret blend of gears, springs, and questionable adhesives – don’t ask questions.",
    "category": "services",
    "price": 800,
    "icon": "🛠️",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "repairs a single piece of equipment (player’s choice)",
      "restores 20% of equipment durability"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "messenger_drone",
    "levelRequirement": 3
  },
  "connectopia_shard_of_the_void": {
    "id": "connectopia_shard_of_the_void",
    "name": "Nullstone Fragment",
    "description": "Pulled from the deepest mines of Connectopia, this shard pulses with unsettling energy. It's said to briefly disrupt magic and cause minor distortions in space – great for confusing spellcasters or creating a handy escape route! But don’t stare at it too long...",
    "category": "curiosities",
    "price": 75000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "chance to silence a spell cast (20%)",
      "creates a small area of distorted space (+10% evasion)",
      "deals 1d6 psychic damage on critical hit"
    ],
    "vendor": "craft_corner",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 18
  },
  "faerun_item_waterdeep_guildmark": {
    "id": "faerun_item_waterdeep_guildmark",
    "name": "Waterdeep Docks Guild Mark",
    "description": "A prestigious token of membership with the Waterdeep Docks Guild - though you'll be getting it for a fraction of its usual cost. Rumor has it, they’re always looking for reliable deckhands… or people to scrub floors.",
    "category": "faction",
    "price": 1800,
    "icon": "⚓",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "discounts at Waterdeep docks",
      "reputation +1 with dockworkers",
      "access to exclusive loading/unloading zones (limited)"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "ship",
    "levelRequirement": 3
  },
  "midlands_item_scorched_ember": {
    "id": "midlands_item_scorched_ember",
    "name": "Dragon's Breath Confection",
    "description": "A deceptively delicious fiery treat! This candied ember bursts with intense heat, providing a temporary boost to your fire attacks – and possibly setting your eyebrows on fire. Don't say Wario didn’t warn you!",
    "category": "consumables",
    "price": 250,
    "icon": "🔥",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "fire damage +10 for 3 turns",
      "chance to ignite enemy armor (5%)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "express_delivery",
    "levelRequirement": 2
  },
  "midlands_item_chronometric_shard": {
    "id": "midlands_item_chronometric_shard",
    "name": "Time's Echo",
    "description": "A fragment of solidified time, pulsating with a faint blue light. Holding this shard allows you to briefly rewind your last action – but be careful not to create paradoxes!  It’s a powerful tool for correcting mistakes… or exploiting them.",
    "category": "curiosities",
    "price": 75000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "rewind last action (once per day)",
      "chance to create a minor temporal distortion (15%)",
      "increased perception for one turn"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "dragon_cart",
    "levelRequirement": 20
  },
  "leclaire_isle_item_forbidden_dark_dough": {
    "id": "leclaire_isle_item_forbidden_dark_dough",
    "name": "Forbidden Dark Dough of the Shifting Sands",
    "description": "Forged from ancient, unstable dough harvested only during the darkest nights. This substance is rumored to subtly alter reality around its user… but it also tends to make you crave more and more!",
    "category": "forbidden",
    "price": 65000,
    "icon": "😈",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Reality Warp: Target area (10ft radius) has a 5% chance to randomly shift location each round.",
      "Addiction: User gains a temporary addiction to the dough, consuming it slowly over time.",
      "Minor Corruption: -1 to Wisdom saving throws for 3 rounds."
    ],
    "vendor": "pastry_palace",
    "shippedBy": "night_only",
    "levelRequirement": 15
  },
  "leclaire_isle_item_crusty_charm": {
    "id": "leclaire_isle_item_crusty_charm",
    "name": "Crusty Charm of Unyielding Patience",
    "description": "This seemingly ordinary charm is crafted from the oldest, most resilient dough. It's said to grant a touch of Dough Folk stubbornness... or perhaps just make you incredibly slow.",
    "category": "equipment",
    "price": 800,
    "icon": "🧱",
    "stock": 76,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Slow: Target's movement speed is reduced by 10ft.",
      "Increased Toughness: +1 to Armor Class."
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "grand_country_layered_scale": {
    "id": "grand_country_layered_scale",
    "name": "Echoing Scale of the Spiral Peak",
    "description": "Harvested from a beast that dwells amongst the impossible layers of the Spiral Peaks, this scale resonates with the world's strange energies. Wearing it grants enhanced perception and allows you to briefly hear echoes of past events - useful for uncovering secrets (or just finding misplaced coins!).",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 42,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases perception by 5%",
      "chance to detect hidden objects (10%)",
      "grants brief auditory echo ability (1 turn)"
    ],
    "vendor": "layer_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 9
  },
  "grand_country_godly_geode_of_weightlessness": {
    "id": "grand_country_godly_geode_of_weightlessness",
    "name": "The Null Sphere",
    "description": "Forged within the heart of a collapsing gravity well, this geode feels utterly…empty. Holding it allows you to manipulate your own weight, becoming incredibly light or impossibly heavy – perfect for dodging attacks or crushing enemies! Just don't drop it, Wario!",
    "category": "premium",
    "price": 750000,
    "icon": "🎈",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "grant temporary weight manipulation (2 turns)",
      "increase movement speed by 30%",
      "chance to nullify enemy attacks (15%)"
    ],
    "vendor": "side_seller",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 28
  },
  "the_edge_chronometric_brace": {
    "id": "the_edge_chronometric_brace",
    "name": "Temporal Shunt",
    "description": "A heavy, obsidian brace pulsating with distorted time. Wearing this grants brief bursts of temporal acceleration – perfect for snatching shiny loot or escaping a grumpy goblin! Don’t worry about paradoxes; Wario doesn't care.",
    "category": "equipment",
    "price": 12000,
    "icon": "⏱️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant_temporary_speed_boost",
      "chance_to_dodge_attacks",
      "reduce_cooldowns"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "warp_carrier",
    "levelRequirement": 12
  },
  "the_edge_void_sanctuary": {
    "id": "the_edge_void_sanctuary",
    "name": "Nullspace Shroud",
    "description": "A shimmering veil woven from the essence of nothingness. This premium shroud grants resistance to void energies and suppresses magical effects – because sometimes, you just need a little silence! Wario thinks it’s fabulous.",
    "category": "premium",
    "price": 23000,
    "icon": "🌫️",
    "stock": 1,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "grant_resistance_to_void_damage",
      "reduce_magic_damage",
      "increase_mana_regeneration"
    ],
    "vendor": "final_shop",
    "shippedBy": "spectral_messenger",
    "levelRequirement": 10
  },
  "pokemon_item_gloomstone_amulet": {
    "id": "pokemon_item_gloomstone_amulet",
    "name": "Gloomstone Amulet of Shadow Whispers",
    "description": "This unsettling amulet, crafted from solidified Gloom's essence, whispers secrets of the dark. It amplifies your stealth and grants a chilling touch to your attacks, but prolonged use might leave you feeling… gloomy.",
    "category": "equipment",
    "price": 75000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increase stealth by 20%",
      "attacks deal an additional 1d6 shadow damage",
      "chance to inflict confusion on hit (10%)",
      "user gains resistance to dark type attacks"
    ],
    "vendor": "pokemart",
    "shippedBy": "express_mail",
    "levelRequirement": 20
  },
  "pokemon_item_trainer_badge_scroll": {
    "id": "pokemon_item_trainer_badge_scroll",
    "name": "Scroll of the Rising Star Trainer",
    "description": "A meticulously crafted scroll containing the strategies and techniques mastered by a promising young trainer. Unfurl this scroll to gain temporary proficiency in a specific battle style, though don't expect it to make you a Pokémon Master overnight… yet.",
    "category": "curiosities",
    "price": 1200,
    "icon": "📜",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grants proficiency in attack for one battle",
      "increases crit chance by 5%",
      "temporarily boosts speed by 10%"
    ],
    "vendor": "safari_shop",
    "shippedBy": "standard_mail",
    "levelRequirement": 8
  },
  "pokemon_item_evolution_seed_vibrant": {
    "id": "pokemon_item_evolution_seed_vibrant",
    "name": "Evolution Seed - Vibrant Bloom",
    "description": "This pulsating seed, infused with the energy of a legendary Pokémon’s evolution, holds the potential to accelerate your partner’s growth. Plant it near your Pokémon and watch them bloom...literally! Just be warned; results may vary, and excessive blooms attract unwanted attention.",
    "category": "consumables",
    "price": 800,
    "icon": "🌸",
    "stock": 90,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heals Pokémon for 50 HP",
      "increases stat growth by 10% for 3 turns",
      "chance to trigger evolution (15%)"
    ],
    "vendor": "league_store",
    "shippedBy": "express_mail",
    "levelRequirement": 3
  },
  "grand_country_godly_seed_of_ascension": {
    "id": "grand_country_godly_seed_of_ascension",
    "name": "Seed of Ascendancy",
    "description": "This pulsating seed hums with the raw energy of The Grand Country – a place where layers upon layers exist. When consumed, it grants a fleeting moment of true ascension, allowing you to briefly phase through solid objects and traverse perilous terrain. Just don't get stuck!",
    "category": "equipment",
    "price": 600000,
    "icon": "💫",
    "stock": 3,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "phase_through_solid_objects (5 seconds)",
      "increased movement speed +20%",
      "duration: 10 seconds"
    ],
    "vendor": "side_seller",
    "shippedBy": "celestial_whale",
    "levelRequirement": 35
  },
  "kivotos_item_student_rally_flag": {
    "id": "kivotos_item_student_rally_flag",
    "name": "The Crimson Cipher",
    "description": "A vibrant crimson flag emblazoned with a stylized cipher. When raised, it instantly boosts the morale and coordination of nearby student combatants - great for impromptu club battles or distracting troublesome teachers! This flag is a favorite amongst the 'Shadow Syndicate' faction.",
    "category": "faction",
    "price": 7500,
    "icon": "🚩",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increases_group_attack_speed_10%",
      "chance_to_trigger_critical_hit_5%",
      "improves_teamwork_morale"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_mail",
    "levelRequirement": 4
  },
  "kivotos_item_mythic_harmonic_resonator": {
    "id": "kivotos_item_mythic_harmonic_resonator",
    "name": "The Echoing Void",
    "description": "This shimmering, obsidian device resonates with the very fabric of Kivotos’ academy. It emits a wave of pure chaotic energy - causing unpredictable effects on enemies and allies alike! Use this wisely, or you might end up accidentally summoning a horde of sentient textbooks!",
    "category": "curiosities",
    "price": 120000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "deals_high_chaos_damage_on_attack",
      "chance_to_cause_confusion_50%",
      "randomly_teleports_target_within_10m",
      "increases_mana_regeneration_by_50%"
    ],
    "vendor": "student_store",
    "shippedBy": "delivery_only",
    "levelRequirement": 25
  },
  "the_edge_ritual_consultation": {
    "id": "the_edge_ritual_consultation",
    "name": "Adept's Insightful Consultation",
    "description": "Spend an hour with a grizzled, slightly unhinged occultist who specializes in... well, let's just say 'interpreting the echoes.' They can offer cryptic advice, identify cursed items, or simply complain about the state of the cosmos – all for a price!",
    "category": "services",
    "price": 7500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveal_cursed_item_chance_20%",
      "receive_cryptic_advice_once"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 5
  },
  "the_edge_godly_chronarium": {
    "id": "the_edge_godly_chronarium",
    "name": "Chronarium of Shifting Sands",
    "description": "A shimmering orb filled with swirling sands, this device allows the user to briefly glimpse possible futures or rewind minor mistakes... though messing with time is a *really* bad idea. Be careful not to create paradoxes, Wario!",
    "category": "premium",
    "price": 850000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "chance_to_rewind_turn_15%",
      "peek_at_next_enemy_attack_30%",
      "small_healing_over_time_10hp/second"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_anomaly",
    "levelRequirement": 25
  },
  "grand_country_curiosity_layer_cake": {
    "id": "grand_country_curiosity_layer_cake",
    "name": "Dimensional Delight",
    "description": "This layered cake isn’t just delicious – it briefly transports you to a different layer of reality with each bite! Warning: May cause temporary disorientation and an overwhelming craving for more sugar.",
    "category": "curiosities",
    "price": 350,
    "icon": "🎂",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores a small amount of health",
      "provides a temporary boost to luck",
      "chance to trigger a random visual effect"
    ],
    "vendor": "layer_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 2
  },
  "midlands_item_obsidian_shard": {
    "id": "midlands_item_obsidian_shard",
    "name": "Fragment of the Voidbringer",
    "description": "This pulsating shard emanates a palpable sense of dread and whispers promises of untold power. Touching it risks madness, but also grants access to forbidden knowledge… or just makes you really uncomfortable. Use with caution (or don't – Wario wouldn’t be caught dead worrying)",
    "category": "forbidden",
    "price": 120000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to summon a minor shadow demon (10%)",
      "resistance to necrotic damage",
      "increased critical hit chance +20%",
      "sanity drain -1d6 per round of use"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "delivery_only",
    "levelRequirement": 22
  },
  "midlands_item_shadow_whisper": {
    "id": "midlands_item_shadow_whisper",
    "name": "The Broker's Secret Scroll",
    "description": "A meticulously crafted scroll detailing rumors, blackmail, and the occasional illicit trade. This isn’t just information; it's a key to unlocking the darkest corners of The Midlands - but be warned, knowledge comes at a price...and potentially a hefty bribe. Wario would pay a fortune for this!",
    "category": "services",
    "price": 8000,
    "icon": "🤫",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "gain a clue about a hidden location",
      "chance to gain a valuable contact",
      "+2 to persuasion checks (when used correctly)"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 10
  },
  "midlands_item_dragonshard_amulet": {
    "id": "midlands_item_dragonshard_amulet",
    "name": "Shard of the Fallen Wyrm",
    "description": "A pulsing amulet crafted from a fragment of a long-dead dragon. It hums with raw elemental energy and smells faintly of sulfur, which is frankly unsettling.  This thing *screams* ‘power’...or maybe just indigestion.",
    "category": "equipment",
    "price": 75000,
    "icon": "🐉",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "fire damage (5%)",
      "resistance to fire damage",
      "chance to inflict fear on enemies (15%)",
      "increased mana regeneration"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant_beetle",
    "levelRequirement": 22
  },
  "leclaire_isle_item_sticky_dough_bomb": {
    "id": "leclaire_isle_item_sticky_dough_bomb",
    "name": "Sticky Dough Bomb!",
    "description": "This surprisingly potent pastry projectile is made with concentrated yeast and a whole lotta sugar! When hurled, it sticks to enemies, slowing them down and making them covered in delicious (but messy) dough. Wario would totally use this for extra sprinkles.",
    "category": "consumables",
    "price": 750,
    "icon": "💣",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "slows target for 3 turns",
      "chance to apply 'Sticky' status (reduces movement speed)",
      "deals minor damage on application"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 5
  },
  "leclaire_isle_item_golden_croissant_of_gusts": {
    "id": "leclaire_isle_item_golden_croissant_of_gusts",
    "name": "Golden Croissant of Gusts",
    "description": "Forged by the Dough Folk's finest bakers, this golden croissant radiates a surprisingly powerful gust of wind. It’s perfect for knocking enemies off ledges or sending pastries flying – Wario would probably just use it to steal more treats!",
    "category": "equipment",
    "price": 18000,
    "icon": "💨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals moderate wind damage in a small area",
      "knocks back targets",
      "chance to push targets off ledges"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Giant Delivery Snail",
    "levelRequirement": 12
  },
  "leclaire_isle_item_godly_dough_of_infinite_expansion": {
    "id": "leclaire_isle_item_godly_dough_of_infinite_expansion",
    "name": "Godly Dough of Infinite Expansion",
    "description": "A shimmering, ever-growing dough gifted by the Dough Folk’s deity. This mystical substance can rapidly expand to engulf enemies or create temporary platforms—Wario would likely try to make a giant Wario statue!",
    "category": "equipment",
    "price": 650000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "creates a large area of expanding dough (8ft radius)",
      "immobilizes targets within the dough",
      "restores a small amount of health to allies",
      "chance for dough to sprout temporary platforms"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 30
  },
  "leclaire_isle_crumb_charm": {
    "id": "leclaire_isle_crumb_charm",
    "name": "Doughy Defender Charm",
    "description": "This adorable charm is crafted from solidified croissant dough and imbued with the spirit of a miniature Dough Folk warrior! It provides a surprisingly effective shield against sticky situations and minor pastry-based attacks. Plus, it smells amazing!",
    "category": "equipment",
    "price": 12000,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increases block chance by 15%",
      "grants +2 to dexterity saving throws against sticky effects",
      "chance to inflict 'Sugar Rush' on nearby enemies (temporary speed boost)"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 8
  },
  "leclaire_isle_sweet_serenity_tea": {
    "id": "leclaire_isle_sweet_serenity_tea",
    "name": "Serene Sugar Bloom Tea",
    "description": "Brewed from rare moonpetal blossoms and crystallized honey, this tea will soothe your weary soul... or at least make you feel slightly less grumpy. It's rumored to calm even the most volatile Dough Folk, though results may vary. Don’t spill it on anything important!",
    "category": "consumables",
    "price": 800,
    "icon": "🍵",
    "stock": 55,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "restores 20 HP",
      "increases charisma by 3 for 1 minute",
      "chance to gain temporary inspiration"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Honeybee Courier",
    "levelRequirement": 3
  },
  "leclaire_isle_frosting_fortune_teller": {
    "id": "leclaire_isle_frosting_fortune_teller",
    "name": "The Frosting Oracle",
    "description": "This delightfully creepy figurine is made from hardened buttercream and whispers cryptic prophecies... mostly about pastries. It's a premium item for discerning adventurers seeking guidance (or just a really weird decoration). Don’t ask it about your taxes.",
    "category": "curiosities",
    "price": 6500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "chance to receive a helpful prophecy (random effect)",
      "grants +1 to wisdom checks related to divination",
      "provides minor protection against illusions"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Magic Messenger Pigeon",
    "levelRequirement": 5
  },
  "curiosity_obsidian_shard": {
    "id": "curiosity_obsidian_shard",
    "name": "Shard of the Fallen Emperor",
    "description": "A pulsating shard of obsidian, rumored to be a fragment from the shattered crown of a forgotten empire! It radiates an unsettling energy and seems to whisper dark secrets - or maybe that's just Wario’s stomach rumbling. Handle with care, unless you enjoy existential dread.",
    "category": "curiosities",
    "price": 450,
    "icon": "🔮",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to gain a temporary madness effect (5%)",
      "provides +1 to intelligence checks for one round",
      "can be used as a component in dark rituals"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "snail_mail",
    "levelRequirement": 3
  },
  "the_edge_item_echoing_shard": {
    "id": "the_edge_item_echoing_shard",
    "name": "Echoing Shard of the Void",
    "description": "This jagged fragment pulses with residual abyssal energy! Holding it close allows you to briefly mimic a sound, useful for distractions or… unsettling conversations. Don’t blame us if you start hearing whispers from *beyond*.",
    "category": "curiosities",
    "price": 350,
    "icon": "🔊",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_minor_illusion",
      "chance_to_confuse_enemy",
      "increased_perception"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 5
  },
  "the_edge_item_chronal_gauntlet": {
    "id": "the_edge_item_chronal_gauntlet",
    "name": "Chronal Gauntlet of Temporal Twitch",
    "description": "Forged from solidified timelines, this gauntlet allows you to briefly manipulate the flow of time around yourself – mostly. It’s a bit glitchy and prone to causing minor paradoxes, so use it sparingly! Wario would totally wear this.",
    "category": "equipment",
    "price": 8750,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant_short_burst_of_speed",
      "chance_to_slow_enemy",
      "minor_regeneration",
      "chance_to_phase_through_obstacles"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "void_express",
    "levelRequirement": 10
  },
  "the_edge_item_null_lantern": {
    "id": "the_edge_item_null_lantern",
    "name": "Null Lantern of the Unseen Depths",
    "description": "This unsettling lantern doesn’t cast light, it *absorbs* it. It's perfect for navigating the darkest corners of the abyss... or scaring your enemies into oblivion. Just don't stare at it for too long; you might see things that aren’t there (and they definitely won't like what they see).",
    "category": "curiosities",
    "price": 12000,
    "icon": "🔦",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant_advantage_in_darkness",
      "chance_to_frighten_enemy",
      "increased_shadow_vision",
      "chance_to_detect_hidden_traps"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_courier",
    "levelRequirement": 8
  },
  "middle_earth_ring_of_shadows": {
    "id": "middle_earth_ring_of_shadows",
    "name": "Fragment of Morgoth's Sorrow",
    "description": "A shard of dark energy pulsating with the echoes of Morgoth’s reign. This cursed ring grants limited shadow manipulation, but beware – prolonged use can corrupt your soul!",
    "category": "forbidden",
    "price": 7500,
    "icon": "🌑",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to inflict shadow damage on attacks (1d8)",
      "allows the user to cast 'Darkness' once per day",
      "slows target's movement speed by 50%"
    ],
    "vendor": "elven_market",
    "shippedBy": "raven",
    "levelRequirement": 6
  },
  "middle_earth_wario_shard": {
    "id": "middle_earth_wario_shard",
    "name": "Wario's Pocket Dimension Pebble",
    "description": "Found near a collapsed dwarven mine, this shimmering stone seems to contain fragments of Wario’s chaotic pocket dimension. It occasionally spits out random treasures and minor inconveniences – mostly involving sticky substances.",
    "category": "curiosities",
    "price": 230000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "chance to summon a miniature Wario clone (1 in 20)",
      "can be used once per day to instantly repair damaged equipment",
      "occasionally produces a sticky goo that can trap enemies",
      "grants +5 to luck rolls"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_flight",
    "levelRequirement": 20
  },
  "equestria_item_starfall_potion": {
    "id": "equestria_item_starfall_potion",
    "name": "Starfall Potion of Brilliance",
    "description": "Brewed under a meteor shower, this shimmering potion tastes suspiciously like blueberries and stardust. Drink it for a temporary boost to your magical abilities – or just to impress the ponies with its dazzling appearance. Wario thinks it's mostly sugar.",
    "category": "consumables",
    "price": 250,
    "icon": "🌟",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_magic_power_by_10",
      "grant_temporary_resistance_to_fire",
      "chance_to_create_small_stars"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 2
  },
  "equestria_item_legendary_celestia_shield": {
    "id": "equestria_item_legendary_celestia_shield",
    "name": "Celestia’s Aegis of the Elements",
    "description": "Forged in the heart of Canterlot Castle during a particularly potent thunderstorm, this shield radiates an aura of incredible power. Legend says it was blessed by Princess Celestia herself – or maybe Wario just thinks it's shiny and worth a fortune!  It will protect you from all harms... probably.",
    "category": "equipment",
    "price": 28000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "high_armor_value",
      "chance_to_reflect_damage",
      "grant_resistance_to_lightning_attacks",
      "chance to summon a minor protective aura"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "delivery_only",
    "levelRequirement": 12
  },
  "earth_land_shard_of_frost": {
    "id": "earth_land_shard_of_frost",
    "name": "Frozen Fury Shard",
    "description": "This jagged chunk of ice radiates an intense chill! Wario accidentally dropped it while trying to steal a dragon's hoard. It’s surprisingly effective at freezing enemies… and occasionally your fingers.",
    "category": "consumables",
    "price": 6500,
    "icon": "🥶",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals 10 cold damage over 3 turns",
      "chance to inflict slowed effect (5%)",
      "restores 5 mana"
    ],
    "vendor": "magic_shop",
    "shippedBy": "ice_cart",
    "levelRequirement": 7
  },
  "earth_land_runic_gauntlets": {
    "id": "earth_land_runic_gauntlets",
    "name": "Stonegrip Gauntlets of the Guildmaster",
    "description": "These heavily-worn gauntlets are covered in ancient runes, probably left over from a particularly grumpy guild master. They feel surprisingly comfortable and grant you enhanced grip – perfect for climbing or wrestling a goblin!",
    "category": "equipment",
    "price": 18000,
    "icon": "🧤",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increases strength by 5",
      "chance to stun on successful attack (10%)",
      "grants +2 armor"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "wagon",
    "levelRequirement": 10
  },
  "earth_land_mythic_dragon_scale": {
    "id": "earth_land_mythic_dragon_scale",
    "name": "Scale of the Ancient Wyrm",
    "description": "A shimmering scale shed by a truly ancient dragon – thankfully, this one wasn’t too grumpy. Touching it grants you a brief surge of draconic power… and possibly an overwhelming urge to hoard shiny things. Wario thinks it's awesome!",
    "category": "curiosities",
    "price": 120000,
    "icon": "🐉",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grants +10 to all stats for 6 turns",
      "chance to trigger a random elemental effect (20%)",
      "increases charisma by 5"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "winged_beast",
    "levelRequirement": 23
  },
  "internet_meme_warband": {
    "id": "internet_meme_warband",
    "name": "Collective Awareness Brigade",
    "description": "A squad of digital avatars, ripped straight from the darkest corners of the web! These tireless warriors fight for chaos and distraction - perfect for confusing your enemies. Just be careful they don't start demanding more bandwidth!",
    "category": "faction",
    "price": 3500,
    "icon": "👾",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "provides_a_small_buff_to_speed",
      "increases_the_chance_of_causing_interrupts",
      "can_cast_a_minor_illusion"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 7
  },
  "midlands_item_warrior_charm": {
    "id": "midlands_item_warrior_charm",
    "name": "Grimtooth's Lucky Token",
    "description": "Legend says this charm was once owned by a fearsome mercenary, Grimtooth. It’s covered in grime and smells faintly of victory...and questionable hygiene. Wario wouldn't be caught dead with it, but the party might!",
    "category": "equipment",
    "price": 6500,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant_armor_3",
      "increased_critical_chance",
      "resistance_to_fear"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "cart",
    "levelRequirement": 8
  },
  "leclaire_isle_forbidden_sugar_shard": {
    "id": "leclaire_isle_forbidden_sugar_shard",
    "name": "Shard of Pure Sugar Madness",
    "description": "A fragment from the Heart of Sweetness, rumored to drive mortals into fits of blissful obsession. Handle with extreme caution – prolonged exposure might result in compulsive frosting consumption!",
    "category": "forbidden",
    "price": 7800,
    "icon": "🍬",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "temporary_sugar_rush",
      "increased_charisma_5",
      "chance_of_hallucinations"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Delivery Sprite",
    "levelRequirement": 12
  },
  "leclaire_isle_curiosity_gummy_worm": {
    "id": "leclaire_isle_curiosity_gummy_worm",
    "name": "Gummy Worm of Temporal Distortion",
    "description": "This unsettlingly bouncy worm bends time around you, briefly slowing down your enemies or speeding up your own movements. Just don't get stuck in a loop – Wario warned us!",
    "category": "curiosities",
    "price": 1800,
    "icon": "🐛",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "time_slow_25",
      "movement_speed_boost_5",
      "chance_to_create_temporal_ripple"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Shadow Delivery Drone",
    "levelRequirement": 8
  },
  "kivotos_item_halo_of_inspiration": {
    "id": "kivotos_item_halo_of_inspiration",
    "name": "Brain Sparker Halo",
    "description": "This halo isn't for religious purposes, it's designed to give you that extra burst of creative energy! When worn, it dramatically increases your chance to discover brilliant ideas and formulate cunning strategies. Just try not to start talking about pineapple on pizza – nobody wants that.",
    "category": "curiosities",
    "price": 800,
    "icon": "💡",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increases chance of discovering hidden items (20%)",
      "boosts intelligence stat (temporary)",
      "chance to inspire allies (15%)"
    ],
    "vendor": "student_store",
    "shippedBy": "express_delivery",
    "levelRequirement": 4
  },
  "kivotos_item_decrypted_notes": {
    "id": "kivotos_item_decrypted_notes",
    "name": "Professor's Lost Scribbles",
    "description": "These frantically scribbled notes belong to a disgraced professor obsessed with forbidden knowledge. Deciphering them might reveal the location of ancient artifacts, dangerous spells, or just a really good recipe for mushroom stew... probably not.",
    "category": "curiosities",
    "price": 600,
    "icon": "📝",
    "stock": 40,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to reveal a hidden quest objective",
      "provides a small amount of lore about the world",
      "occasionally triggers a mini-puzzle"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_mail",
    "levelRequirement": 2
  },
  "kivotos_item_sparkling_scroll": {
    "id": "kivotos_item_sparkling_scroll",
    "name": "Sparkling Scroll of Minor Illusions",
    "description": "This scroll, suspiciously shiny, contains a few basic illusion spells – mostly just making things look bigger or smaller. Perfect for confusing your rivals or distracting a grumpy librarian! Wario says it’s good for hiding his loot…probably.",
    "category": "consumables",
    "price": 250,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "cast illusion (minor)",
      "illusion duration: 3 rounds",
      "illusion range: 15 feet"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 2
  },
  "kivotos_item_celestial_harmony_amulet": {
    "id": "kivotos_item_celestial_harmony_amulet",
    "name": "Celestial Harmony Amulet - The Student's Blessing",
    "description": "This amulet pulses with a gentle, calming energy, said to be attuned to the academy’s ancient magic. It subtly enhances your concentration and provides minor protection against psychic attacks – perfect for dealing with overly critical professors! Wario thinks it’ll help him cheat on his exams.",
    "category": "premium",
    "price": 18000,
    "icon": "🌟",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased concentration +2",
      "resistance to psychic damage",
      "passive healing: 1 HP/round",
      "requires attunement"
    ],
    "vendor": "club_supply",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 10
  },
  "earth_land_goblin_gumbo": {
    "id": "earth_land_goblin_gumbo",
    "name": "Goblin Gumbo of Grumbling Gut",
    "description": "This suspiciously green concoction smells faintly of old socks and regret, but it's surprisingly effective at boosting your stamina! It’s rumored to be a favorite among goblin warriors… or so they claim.  Don't blame us if you start craving shiny rocks.",
    "category": "consumables",
    "price": 350,
    "icon": "🤢",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 50 health",
      "grants +1 stamina for 3 turns",
      "chance to cause uncontrollable hiccups"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 1
  },
  "earth_land_item_frostbite_amulet": {
    "id": "earth_land_item_frostbite_amulet",
    "name": "The Emperor’s Chill",
    "description": "This shimmering amulet, crafted from frozen dragon scales and imbued with ancient ice magic, radiates an aura of bone-chilling cold. Wear it to slow your enemies and bolster your defenses - just don't get too close or you might find yourself permanently encased in a block of ice! It’s guaranteed to give you the shivers.",
    "category": "equipment",
    "price": 23000,
    "icon": "🥶",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant_frost_armor_5",
      "slow_target_speed_20",
      "chance_to_freeze_on_hit_10%"
    ],
    "vendor": "magic_shop",
    "shippedBy": "ice_cart",
    "levelRequirement": 9
  },
  "earth_land_item_mythic_geode_of_resonance": {
    "id": "earth_land_item_mythic_geode_of_resonance",
    "name": "Wario’s Jackpot!",
    "description": "This enormous geode pulsates with raw magical energy - and a faint aroma of Wario's favorite snacks. Touching it causes random bursts of elemental power, potentially summoning a tiny dragon or unleashing a shower of jellybeans. It is said to be the source of all creation and destruction! Beware the temptation!",
    "category": "curiosities",
    "price": 75000,
    "icon": "💎",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_summon_elemental_sprite",
      "randomly_boosts_stats_5-10%",
      "chance_to_create_a_jellybean_storm"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 23
  },
  "pokemon_item_shadow_essence": {
    "id": "pokemon_item_shadow_essence",
    "name": "Voidwalker’s Shard",
    "description": "A fragment of pure darkness, this shard allows the user to briefly teleport a short distance. It’s rumored to be harvested from the shadows cast by legendary Pokémon – Wario would probably try to steal it directly from their shadow!",
    "category": "premium",
    "price": 20000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "teleport (distance: 15 meters)",
      "chance to inflict shadow damage",
      "increased evasion"
    ],
    "vendor": "safari_shop",
    "shippedBy": "delivery_truck",
    "levelRequirement": 12
  },
  "earth_land_sparkle_shard": {
    "id": "earth_land_sparkle_shard",
    "name": "Glittering Frostbite Shard",
    "description": "This oddly cheerful shard seems to radiate an unnatural chill, and when held, it briefly coats the wielder in shimmering frost. It’s surprisingly effective at stunning goblins… or annoying grumpy dwarves!",
    "category": "curiosities",
    "price": 12000,
    "icon": "❄️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals 5 cold damage on hit",
      "chance to inflict 'frostbite' (reduces movement speed)",
      "provides +1 charisma for 3 turns"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged_snail",
    "levelRequirement": 6
  },
  "earth_land_forbidden_scroll": {
    "id": "earth_land_forbidden_scroll",
    "name": "The Whispers of Rot",
    "description": "This ancient scroll pulses with a sickly green light and emits faint whispers promising untold power... or a truly awful demise. Handle with extreme caution; prolonged exposure might turn you into a particularly unpleasant mushroom.",
    "category": "forbidden",
    "price": 75000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance to inflict 'withering' (reduces health regeneration)",
      "deals 10 necrotic damage on hit",
      "grants immunity to poison effects, but also increases vulnerability to fungal infections"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_beetle",
    "levelRequirement": 18
  }
};
