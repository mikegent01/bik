// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_063 = {
  "doughnut_hole_gravi_crumb": {
    "id": "doughnut_hole_gravi_crumb",
    "name": "Void Crumb of Unstable Pull",
    "description": "These crumbly remnants seem to defy gravity, occasionally pulling nearby objects (and unwary adventurers) towards them. Consume one for a brief burst of localized gravitational distortion – handy for escaping sticky situations or knocking enemies off balance!",
    "category": "consumables",
    "price": 750,
    "icon": "✨",
    "stock": 35,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_10_movement_speed",
      "chance_to_knockback_target",
      "small_gravity_effect_3_turns"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 1
  },
  "doughnut_hole_chronal_drizzle": {
    "id": "doughnut_hole_chronal_drizzle",
    "name": "Temporal Syrup of Delayed Reaction",
    "description": "A shimmering, pink syrup that tastes suspiciously like regret and stale dough. Upon consumption, you experience a slight temporal distortion, causing your next attack to be delayed by 1-2 seconds – perfect for setting up the perfect shot (or ruining someone’s surprise). Just don't get stuck in a time loop!",
    "category": "equipment",
    "price": 4500,
    "icon": "⏳",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "attack_delay_1_2_seconds",
      "increased_critical_chance",
      "small_chances_of_temporal_shift"
    ],
    "vendor": "center_seller",
    "shippedBy": "Warped Courier",
    "levelRequirement": 6
  },
  "doughnut_hole_void_essence": {
    "id": "doughnut_hole_void_essence",
    "name": "Condensed Anomaly of the Unformed",
    "description": "A pulsating, obsidian sphere containing a fragment of the Doughnut Hole's chaotic essence. Touching this item briefly grants you minor resistance to void effects, but prolonged exposure may lead to unsettling visions or uncontrollable cravings for… more doughnuts. Handle with extreme caution (and perhaps a bucket of sprinkles).",
    "category": "premium",
    "price": 12000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_void_damage",
      "chance_to_dispel_negative_status_effects",
      "minor_increase_in_intelligence",
      "chance_for_brief_hallucination"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Delivery System",
    "levelRequirement": 10
  },
  "mushroom_kingdom_item_sparking_spore": {
    "id": "mushroom_kingdom_item_sparking_spore",
    "name": "Sparking Spore Bomb",
    "description": "This pulsating mushroom delivers a shocking burst of fungal energy! Detonate it for an area-of-effect stun, perfect for disrupting enemy formations or clearing out pesky slime puddles. Just don't get caught in the spray – Wario would be *so* disappointed.",
    "category": "consumables",
    "price": 600,
    "icon": "💥",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 thunder damage to enemies in a 5ft radius",
      "stuns target on hit for 1 round",
      "chance to inflict minor fungal infection (reduces healing by 1)",
      "small chance of exploding on impact"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 4
  },
  "mushroom_kingdom_item_wario_boots": {
    "id": "mushroom_kingdom_item_wario_boots",
    "name": "Wario's Slipstream Boots",
    "description": "These ridiculously shiny boots were forged by Wario himself! They grant incredible traction and allow you to slide across surfaces with impressive speed – perfect for dodging attacks or launching yourself into a daring leap. Just try not to fall off the platform, dummy.",
    "category": "equipment",
    "price": 1200,
    "icon": "👟",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases movement speed by 10%",
      "grants advantage on balance checks",
      "chance to trigger a short slide (automatic if falling)",
      "provides minor protection against slippery surfaces"
    ],
    "vendor": "wario_direct",
    "shippedBy": "flying_mushroom",
    "levelRequirement": 7
  },
  "mushroom_kingdom_item_golden_coin_charm": {
    "id": "mushroom_kingdom_item_golden_coin_charm",
    "name": "Golden Coin of Prosperity",
    "description": "Legend says this charm is blessed by the Mushroom King himself! It attracts wealth and good fortune – though Wario would probably just use it to buy more coins. Hold it tight, and maybe you'll find a hidden stash or two...or maybe not.",
    "category": "curiosities",
    "price": 800,
    "icon": "💰",
    "stock": 22,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "small chance to find extra gold when looting",
      "increases luck by 1 (slightly)",
      "attracts small critters (mostly friendly)",
      "provides a minor boost to bartering prices"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "snail_delivery",
    "levelRequirement": 2
  },
  "the_edge_voidshard_resonance": {
    "id": "the_edge_voidshard_resonance",
    "name": "Resonant Void Shard",
    "description": "This jagged shard pulses with the whispers of the abyss! Holding it for too long can induce unsettling visions and a craving for… well, nothing good. It seems to amplify your existing magical abilities – but maybe not in a *helpful* way.",
    "category": "equipment",
    "price": 18000,
    "icon": "🔮",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases magic damage by 10%",
      "chance to inflict confusion on enemies (5%)",
      "reduces sanity by 2"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 8
  },
  "the_edge_chronos_pocketwatch": {
    "id": "the_edge_chronos_pocketwatch",
    "name": "Chronos’s Pocket Watch",
    "description": "A beautifully crafted pocket watch, it seems to bend time around you – or at least, make you *feel* like it does. This isn't a true time-stopping device, more of a temporal distraction. A truly bizarre curiosity that might just be worth the price.",
    "category": "curiosities",
    "price": 75000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to rewind time by 1 second (20%)",
      "increases critical hit chance by 5%",
      "minor illusion effect - may create phantom duplicates of self"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_messenger",
    "levelRequirement": 18
  },
  "the_edge_godly_echo_orb": {
    "id": "the_edge_godly_echo_orb",
    "name": "Godly Echo Orb",
    "description": "This orb vibrates with the echoes of forgotten gods – a truly unsettling experience. It doesn't grant power, but it does reveal glimpses of impossible realities and terrifying secrets. Handle with extreme caution, or you might end up screaming into the void.",
    "category": "premium",
    "price": 650000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "chance to trigger a random divine event (10%)",
      "grants temporary resistance to fear effects",
      "causes the wearer to occasionally speak in ancient tongues",
      "increases charisma by 20% with a 5% chance of causing an NPC to worship you."
    ],
    "vendor": "edge_outpost",
    "shippedBy": "celestial_cartographer",
    "levelRequirement": 35
  },
  "doughnut_hole_void_repair": {
    "id": "doughnut_hole_void_repair",
    "name": "Anomalous Adhesive Paste",
    "description": "This shimmering paste can temporarily mend fractured reality, patching up damaged equipment or even yourself! It's surprisingly sticky and smells faintly of burnt sugar…and something far stranger. Use with caution – excessive application might attract unwanted attention from the void.",
    "category": "services",
    "price": 1850,
    "icon": "🩹",
    "stock": 37,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "repair_equipment_small_chance",
      "temporary_healing_10",
      "resistance_to_void_corruption_5"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Post",
    "levelRequirement": 7
  },
  "doughnut_hole_echoing_crumb": {
    "id": "doughnut_hole_echoing_crumb",
    "name": "Chronal Crumb of Temporal Distortion",
    "description": "These iridescent crumbs shimmer with echoes of past events! When consumed, they briefly rewind time for the eater – perfect for correcting mistakes (or snatching up extra donuts). Just don't create a paradox!",
    "category": "curiosities",
    "price": 6200,
    "icon": "⏳",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "rewind_time_3_seconds",
      "chance_of_temporal_echo_visual_effect",
      "increase_luck_5%"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Gravity Shipment",
    "levelRequirement": 10
  },
  "the_edge_echoing_rune_service": {
    "id": "the_edge_echoing_rune_service",
    "name": "Echoing Rune Divination",
    "description": "Consult with the ancient spirits of The Edge and receive a cryptic reading! This service provides a detailed analysis of your current situation, offering guidance – though interpreting it is entirely up to you. Be warned: their advice can be… delightfully confusing.",
    "category": "services",
    "price": 75000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_foresight",
      "chance_to_receive_powerful_hint",
      "temporary_buff_to_wisdom"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "spectral_messenger",
    "levelRequirement": 18
  },
  "the_edge_godly_heartstone": {
    "id": "the_edge_godly_heartstone",
    "name": "Godly Heartstone of the Abyss",
    "description": "This pulsating stone radiates immense power, a fragment of the abyss itself! Holding it provides incredible protection against dark energies and allows you to briefly manipulate gravity. Use with caution – this thing's got attitude!",
    "category": "equipment",
    "price": 850000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "godly",
    "stockType": "back_order",
    "effects": [
      "high_defense",
      "chance_to_nullify_dark_magic",
      "minor_gravity_manipulation",
      "increased_mana_pool"
    ],
    "vendor": "final_shop",
    "shippedBy": "celestial_cart",
    "levelRequirement": 35
  },
  "grand_country_stone_echo_badge": {
    "id": "grand_country_stone_echo_badge",
    "name": "Layered Resonance Badge",
    "description": "A meticulously crafted badge etched with swirling patterns, this artifact amplifies sound within a small radius. It's rumored to have been created by the Layer Market’s most eccentric artisan! Use it to disrupt enemy spells or pinpoint hidden passages – just don’t listen too long.",
    "category": "equipment",
    "price": 65000,
    "icon": "🔊",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increases spell damage by 10%",
      "detects hidden objects within a 5-meter radius",
      "creates a temporary sonic barrier (absorbs 20 damage)",
      "chance to stun enemies on successful hit"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_package",
    "levelRequirement": 18
  },
  "grand_country_wario_treasure_trove_token": {
    "id": "grand_country_wario_treasure_trove_token",
    "name": "Wario's Lucky Cartography Token",
    "description": "This oddly shaped token seems to glow with a faint, greedy aura. Legend says it was personally blessed by Wario himself for finding the best buried treasures! Roll this at the start of an adventure to receive a small bonus - but be warned; it might lead you into trouble!",
    "category": "faction",
    "price": 25000,
    "icon": "💰",
    "stock": 80,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "chance to find a random small treasure (1-5 gold)",
      "increased luck for skill checks related to exploration",
      "guaranteed +1 to persuasion rolls with merchants",
      "occasionally triggers a Wario-style side quest"
    ],
    "vendor": "side_seller",
    "shippedBy": "delivery_cart",
    "levelRequirement": 6
  },
  "teyvat_item_echoing_shard": {
    "id": "teyvat_item_echoing_shard",
    "name": "Resonance Fragment of Khaenri'ah",
    "description": "A pulsating shard recovered from the ruins of Khaenri’ah - it hums with residual memories and a faint, unsettling energy. Holding it briefly grants a surge of knowledge, but prolonged exposure risks madness... or just makes you crave chocolate.",
    "category": "curiosities",
    "price": 75000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_10_intelligence",
      "chance_to_cause_confusion",
      "small_healing_over_time"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "winged_koi",
    "levelRequirement": 20
  },
  "teyvat_item_crimson_rune": {
    "id": "teyvat_item_crimson_rune",
    "name": "Bloodstone of the Dragon's Fury",
    "description": "Forged from a solidified dragon’s breath, this rune pulses with raw elemental power. It’s delightfully sticky and will stain your armor red... which is fantastic for intimidation!",
    "category": "equipment",
    "price": 22000,
    "icon": "🔥",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increase_fire_damage_by_30%",
      "chance_to_ignite_enemies",
      "absorb_fire_damage"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_gull",
    "levelRequirement": 8
  },
  "teyvat_item_forbidden_scroll": {
    "id": "teyvat_item_forbidden_scroll",
    "name": "The Architect's Lament",
    "description": "A brittle scroll discovered within a forgotten shrine - it details forbidden geometries and planar rifts. Touching the symbols causes unsettling visions...and Wario keeps trying to rearrange your inventory.",
    "category": "forbidden",
    "price": 1200,
    "icon": "💀",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "chance_to_summon_a_minor_demon",
      "lowers_wisdom_by_5",
      "chance_to_cause_paralysis"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "shadow_raven",
    "levelRequirement": 3
  },
  "animatopia_claw_amulet": {
    "id": "animatopia_claw_amulet",
    "name": "The Howling Claw Amulet",
    "description": "This unsettling amulet is carved from the claw of a deceased Grotesque Bear, rumored to possess a fragment of its primal rage. It's guaranteed to make you feel slightly itchy and intensely aware of nearby predators – perfect for intimidating smaller critters!",
    "category": "equipment",
    "price": 12000,
    "icon": "🐾",
    "stock": 8,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increases intimidation by 5",
      "chance to inflict fear on weaker enemies",
      "minor regeneration effect (1 HP/round)"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_parrot",
    "levelRequirement": 6
  },
  "animatopia_shadow_shard": {
    "id": "animatopia_shadow_shard",
    "name": "Whisperstone Fragment",
    "description": "A jagged piece of solidified shadow, pulsing with a faint, unnerving energy. It's said to be harvested from the nightmares of the Animatopia elders – don’t stare at it for too long or you might start seeing things… and they won’t like what they see.",
    "category": "forbidden",
    "price": 25000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "chance to inflict blindness on a single target",
      "increases critical hit chance by 10%",
      "causes temporary madness (random effect)"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 12
  },
  "animatopia_godly_harmony_bell": {
    "id": "animatopia_godly_harmony_bell",
    "name": "The Resonance of Balance",
    "description": "Forged in the heart of a dormant volcano by ancient Animatopian shamans, this bell emits an incredibly soothing vibration. It’s rumored to be capable of calming even the most savage beast - or distracting Wario from his latest scheme!",
    "category": "premium",
    "price": 750000,
    "icon": "🔔",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "heals all party members for 200 HP",
      "grants immunity to fear effects",
      "reduces enemy attack power by 50% within a 10-meter radius",
      "chance to trigger a beneficial event (determined randomly)"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 24
  },
  "leclaire_isle_item_sticky_dough_slug": {
    "id": "leclaire_isle_item_sticky_dough_slug",
    "name": "Sticky Dough Slug",
    "description": "This surprisingly plump slug is crafted entirely from enchanted pastry dough! It slides across surfaces with unnerving speed, leaving a trail of delicious crumbs – and occasionally sticking to unfortunate adventurers.",
    "category": "consumables",
    "price": 7500,
    "icon": "🐌",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Restores 30 HP",
      "Grants +1 to Dexterity for 3 turns",
      "Chance to cause a sticky situation (reduces movement speed)"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Delivery Cart",
    "levelRequirement": 8
  },
  "leclaire_isle_item_golden_whisk_of_sweetness": {
    "id": "leclaire_isle_item_golden_whisk_of_sweetness",
    "name": "Golden Whisk of Sweetness",
    "description": "Legend says this whisk was forged by the Dough Folk's patron deity, Baron Bonbon! It radiates a sweet aroma and can amplify magical abilities - especially those involving desserts or confectionary arts!",
    "category": "equipment",
    "price": 65000,
    "icon": "🥄",
    "stock": 17,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Increases spell damage by 20%",
      "Grants +3 to Charisma checks related to food or persuasion",
      "Occasionally emits a blinding flash of sugar"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Dragon Post (Highly Fragile)",
    "levelRequirement": 15
  },
  "leclaire_isle_item_premium_flavor_essence": {
    "id": "leclaire_isle_item_premium_flavor_essence",
    "name": "Premium Flavor Essence - Berry Blast",
    "description": "Distilled from the rarest wild berries of L'Eclaire Isle, this essence isn’t just a flavoring – it’s an experience!  It bestows upon the imbiber temporary heightened senses and a craving for all things sweet… Wario would LOVE this!",
    "category": "premium",
    "price": 18000,
    "icon": "🍓",
    "stock": 9,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Grants +2 to Perception checks for 2 turns",
      "Increases food consumption rate by 50%",
      "Causes a temporary obsession with pastries"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Courier Pigeon (Guaranteed Delivery)",
    "levelRequirement": 10
  },
  "kivotos_item_acidic_notebook": {
    "id": "kivotos_item_acidic_notebook",
    "name": "The Scribbler's Ruin",
    "description": "This notebook appears to have a mind of its own – and it doesn’t like your handwriting! Upon writing in it, the pages spontaneously combust into a harmless but startling burst of acidic fumes. Use with caution...or don’t; Wario loves chaos!",
    "category": "curiosities",
    "price": 350,
    "icon": "🔥",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals_acidic_damage_1d4 (on use)",
      "chance to cause a distraction (5%)",
      "slightly increases the chance of attracting unwanted attention"
    ],
    "vendor": "club_supply",
    "shippedBy": "Standard Post",
    "levelRequirement": 3
  },
  "internet_viral_boost": {
    "id": "internet_viral_boost",
    "name": "Propagation Protocol",
    "description": "This shimmering gel contains the concentrated essence of a thousand viral trends! Apply it to your avatar for a massive increase in popularity and social influence – prepare for likes, shares, and envious stares. Just try not to accidentally start an internet war.",
    "category": "consumables",
    "price": 850,
    "icon": "🔥",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_social_influence_by_50",
      "chance to trigger a viral trend effect (temporary stat boost)",
      "increased chance of attracting unwanted attention"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Packet Delivery",
    "levelRequirement": 3
  },
  "internet_forbidden_echo": {
    "id": "internet_forbidden_echo",
    "name": "Phantom Server Fragment",
    "description": "A chilling remnant from a forgotten server, this fragment whispers secrets of the darkest corners of the internet. Touching it risks attracting unwanted digital entities and warping your perception of reality – use with extreme caution!  It's probably cursed.",
    "category": "forbidden",
    "price": 7500,
    "icon": "💀",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to summon a minor digital ghost (harmless)",
      "increased vulnerability to hacking attempts",
      "temporary madness effect"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Cryptic Courier",
    "levelRequirement": 8
  },
  "earth_land_dragonscale_plate": {
    "id": "earth_land_dragonscale_plate",
    "name": "Scales of the Frost Wyrm's Ire",
    "description": "Forged from a fallen scale of a young Frost Wyrm, this plate radiates chilling cold. Wear it to bolster your defenses against frost and ice, though prolonged exposure might make you crave icy treats… seriously, don’t do that.",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 17,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+3 Armor Class",
      "Resistance to Cold Damage",
      "Chance to inflict 'frozen' on hit (15%)"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "giant_snail",
    "levelRequirement": 9
  },
  "earth_land_mythic_rune_of_stability": {
    "id": "earth_land_mythic_rune_of_stability",
    "name": "The Stabilizing Echo",
    "description": "This ancient rune pulses with raw magical energy, attempting to quell chaos. Wario accidentally used it once and briefly turned a raging storm into a gentle drizzle – his experiments are always… interesting.",
    "category": "curiosities",
    "price": 250000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Grants +6 to saving throws against chaos effects.",
      "Summons a small protective aura that absorbs 50 damage.",
      "Occasionally emits a harmless burst of light, startling nearby enemies."
    ],
    "vendor": "earth_emporium",
    "shippedBy": "teleportation_scroll",
    "levelRequirement": 22
  },
  "leclaire_isle_item_whimsical_doughnut": {
    "id": "leclaire_isle_item_whimsical_doughnut",
    "name": "Whimsical Doughnut of Delight",
    "description": "This incredibly bouncy doughnut seems to giggle when you hold it! It's said that consuming one grants a temporary boost to your agility, perfect for dodging grumpy pastry guards. Just try not to eat the whole thing – it’s surprisingly large!",
    "category": "consumables",
    "price": 800,
    "icon": "🍩",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant temporary agility bonus",
      "chance to inflict minor confusion on enemies",
      "restores a small amount of health"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 5
  },
  "leclaire_isle_item_enchanted_rolling_pin": {
    "id": "leclaire_isle_item_enchanted_rolling_pin",
    "name": "Enchanted Rolling Pin of Perfect Pastry",
    "description": "This heavy rolling pin is crafted from solidified sugar and imbued with the magic of a master baker! When used to craft pastries, it guarantees perfect results—no more burnt crusts or collapsed cakes. Wario would go *crazy* for this!",
    "category": "equipment",
    "price": 12000,
    "icon": "🥠",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increases pastry crafting speed by 50%",
      "guarantees perfect pastries (no negative modifiers)",
      "chance to inflict 'Sticky Fingers' on enemies"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Magical Conveyance Cart",
    "levelRequirement": 12
  },
  "leclaire_isle_item_mythic_frosting_of_eternal_chill": {
    "id": "leclaire_isle_item_mythic_frosting_of_eternal_chill",
    "name": "Frosting of Eternal Chill",
    "description": "Legend says this frosting was created by the Ice Dough Folk themselves! It doesn't just sweeten—it freezes your enemies solid, slowing their movements and chilling their very souls. Wario thinks it’s a fantastic weapon for making snowballs!",
    "category": "consumables",
    "price": 250000,
    "icon": "🥶",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "deals cold damage over time",
      "slows enemy movement speed significantly",
      "chance to inflict ‘Frozen’ status effect",
      "restores mana upon use"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Dimensional Rift Portal",
    "levelRequirement": 20
  },
  "kivotos_item_debate_scroll": {
    "id": "kivotos_item_debate_scroll",
    "name": "Scroll of Rhetorical Ruin",
    "description": "Crafted by the prestigious Debate Club, this scroll contains carefully worded arguments designed to utterly dismantle your opponent’s logic. Use it wisely...or just confuse everyone.",
    "category": "consumables",
    "price": 850,
    "icon": "📜",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to automatically win a verbal challenge (50%)",
      "increases persuasion by 1d6 for 3 turns",
      "opponent has disadvantage on counter-argument checks"
    ],
    "vendor": "club_supply",
    "shippedBy": "Standard Mail",
    "levelRequirement": 4
  },
  "kivotos_item_academy_crest": {
    "id": "kivotos_item_academy_crest",
    "name": "Academy Crest of Scholarly Recognition",
    "description": "A proud emblem signifying your dedication to the Academy’s rigorous studies! Displaying this will likely garner respect…or at least curious stares.  Don't let the professors see you flaunting it too much.",
    "category": "curiosities",
    "price": 3500,
    "icon": "🎓",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grants +1 to reputation with the Academy",
      "provides minor protection against academic criticism (advantage on saving throws)",
      "adds 'Scholar' title to character sheet"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier Service",
    "levelRequirement": 10
  },
  "mushroom_kingdom_item_sticky_mushroom": {
    "id": "mushroom_kingdom_item_sticky_mushroom",
    "name": "Gooey Grotto Growth Pod",
    "description": "This pulsating mushroom is covered in shimmering goo! Upon consumption, you'll gain temporary adhesive properties - perfect for scaling walls or snatching coins mid-air. Warning: May cause uncontrollable giggling and a sudden urge to hoard shiny objects.",
    "category": "consumables",
    "price": 750,
    "icon": "🍄",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_temporary_stickiness",
      "increase_jump_height",
      "chance_to_gain_gold"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 5
  },
  "mushroom_kingdom_item_mythic_coin_of_chaos": {
    "id": "mushroom_kingdom_item_mythic_coin_of_chaos",
    "name": "Wario's Wild Wealth Coin",
    "description": "Forged from solidified chaos and overflowing with Wario’s insatiable desire for gold, this coin practically begs to be spent. Each time it's used in a transaction, it triggers a minor, unpredictable effect – maybe you gain temporary invincibility, or perhaps the merchant vanishes in a puff of smoke!",
    "category": "premium",
    "price": 75000,
    "icon": "💰",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_grant_temporary_invulnerability",
      "chance_to_teleport_merchant",
      "small_chance_of_item_duplicate",
      "increase_gold_gain"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 20
  },
  "midlands_item_shadowfang_dagger": {
    "id": "midlands_item_shadowfang_dagger",
    "name": "Whisperwind Dagger",
    "description": "Forged in the depths of a forgotten dwarven ruin, this dagger seems to absorb light. Its touch promises swift, silent death... or at least a very unpleasant surprise!",
    "category": "equipment",
    "price": 8500,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals +3 damage to undead and constructs",
      "chance to inflict 'shadowed' status (reduced visibility)",
      "+1 stealth when attacking from concealment"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "winged courier",
    "levelRequirement": 8
  },
  "midlands_item_chronal_amulet": {
    "id": "midlands_item_chronal_amulet",
    "name": "The Shifting Moment",
    "description": "This amulet pulses with a strange, temporal energy. Wario would definitely try to use this for getting extra coins... don't say we didn't warn you!",
    "category": "curiosities",
    "price": 18000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "once per day, rewind time by 3 seconds",
      "chance to grant brief glimpses of potential futures (random effect)",
      "+2 to intelligence and wisdom checks regarding temporal anomalies"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "magical portal",
    "levelRequirement": 10
  },
  "the_edge_echoing_ritual": {
    "id": "the_edge_echoing_ritual",
    "name": "Echoing Ritual of Whispering Sands",
    "description": "A strange collection of dust and bone, this item allows you to briefly glimpse potential futures – though they're usually about Wario eating all your loot. This service is highly sought after by those seeking a tactical advantage.",
    "category": "services",
    "price": 750,
    "icon": "🔮",
    "stock": 28,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance: reveal next enemy’s attack (10%)",
      "small boost: +5 to insight for 2 turns",
      "disclaimer: results may be misleading and involve excessive mushroom consumption"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "scroll_of_visions",
    "levelRequirement": 3
  },
  "the_edge_obsidian_eye": {
    "id": "the_edge_obsidian_eye",
    "name": "Obsidian Eye of the Abyss Gazer",
    "description": "This unsettlingly realistic eye seems to follow your movements with unnerving accuracy. When worn, it grants a degree of darkvision and protects you from minor psychic attacks – perfect for avoiding Wario’s awkward attempts at conversation.",
    "category": "equipment",
    "price": 1200,
    "icon": "👁️",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "darkvision: 30m",
      "resistance: psychic 15%",
      "small boost: +2 to fortitude saves"
    ],
    "vendor": "final_shop",
    "shippedBy": "shadow_delivery",
    "levelRequirement": 6
  },
  "kivotos_item_student_scroll_of_minor_illusion": {
    "id": "kivotos_item_student_scroll_of_minor_illusion",
    "name": "Student Scroll of Minor Illusion",
    "description": "Perfect for pulling pranks on your rivals! This scroll contains a simple illusion – mostly just making things disappear... or appear briefly. Don't expect to conjure up a dragon, kid.",
    "category": "consumables",
    "price": 250,
    "icon": "🪄",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "creates a minor illusion for 3 rounds",
      "illusion can be anything small and harmless"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1
  },
  "kivotos_item_performance_enhancing_tonic": {
    "id": "kivotos_item_performance_enhancing_tonic",
    "name": "Performance Enhancing Tonic (Student Edition)",
    "description": "Wario would approve! This vibrant tonic promises to boost your focus and reflexes – mostly just making you jittery. Consume responsibly… or don’t, it's your life!",
    "category": "premium",
    "price": 12000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+3 to dexterity for 1 minute",
      "chance to roll double on skill checks (10%)",
      "causes uncontrollable twitching"
    ],
    "vendor": "club_supply",
    "shippedBy": "night_only",
    "levelRequirement": 8
  },
  "equestria_item_harmony_amulet": {
    "id": "equestria_item_harmony_amulet",
    "name": "The Amulet of Perfect Harmony",
    "description": "Forged in the heart of Canterlot, this amulet radiates an aura of calming magic. Wearing it grants immunity to fear effects and increases your charisma - even Wario might crack a smile! Legend says it was originally used to settle disputes between ponies.",
    "category": "premium",
    "price": 350000,
    "icon": "☮️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "immunity_to_fear_effect",
      "increased_charisma",
      "chance_to_pacify_hostile_creatures"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "royal_messenger",
    "levelRequirement": 22
  },
  "the_edge_stormshield": {
    "id": "the_edge_stormshield",
    "name": "Stormforged Aegis",
    "description": "Crafted from solidified lightning and the tears of a forgotten god, this shield deflects both physical and magical attacks with terrifying efficiency. Just don’t get too close or you might become part of the storm - it's surprisingly sticky.",
    "category": "equipment",
    "price": 7500,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "absorbs 30% of incoming damage from elemental attacks",
      "+2 to armor class",
      "chance to trigger a small lightning bolt on shield impact (15%)",
      "reduces the duration of fear effects by 50%"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Sky Serpent Delivery",
    "levelRequirement": 9
  },
  "the_edge_void_berry": {
    "id": "the_edge_void_berry",
    "name": "Void-Touched Ambrosia",
    "description": "These iridescent berries taste vaguely of regret and the crushing weight of infinite space. Consuming one instantly restores 20 HP, but also gives you a persistent craving for absolute nothingness... delicious!",
    "category": "consumables",
    "price": 350,
    "icon": "🍇",
    "stock": 70,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 20 hit points",
      "+1 to charisma checks (temporary)",
      "chance to experience a brief hallucination (10%)",
      "slightly reduces movement speed for 1 round"
    ],
    "vendor": "final_shop",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 2
  },
  "the_edge_ironclad_gauntlet": {
    "id": "the_edge_ironclad_gauntlet",
    "name": "Ironclad Gauntlet of Resilience",
    "description": "Forged in the heart of a collapsed reality, this gauntlet is surprisingly comfortable and incredibly tough. It’s rumored to have been worn by warriors who stared into the abyss without flinching…or falling in.  Don't worry if you feel slightly colder.",
    "category": "equipment",
    "price": 8000,
    "icon": "💪",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_armor",
      "resistance_to_cold_damage",
      "chance_to_paralyze_on_strike"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "standard_delivery",
    "levelRequirement": 6
  },
  "the_edge_echoing_scroll": {
    "id": "the_edge_echoing_scroll",
    "name": "Echoing Scroll of Lost Directions",
    "description": "This scroll seems to resonate with the forgotten pathways of The Edge. When unfurled, it projects faint images – glimpses of possible routes and echoes of voices long silenced.  Just…try not to get lost *more* than you already do.",
    "category": "curiosities",
    "price": 350,
    "icon": "📜",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance_to_reveal_hidden_path",
      "small_healing_effect",
      "temporary_buff_to_navigation"
    ],
    "vendor": "final_shop",
    "shippedBy": "air_mail",
    "levelRequirement": 2
  }
};
