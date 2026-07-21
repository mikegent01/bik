// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_073 = {
  "midlands_item_seraphina_shard": {
    "id": "midlands_item_seraphina_shard",
    "name": "Fragment of the Fallen Star",
    "description": "This shard pulses with an unnatural warmth, radiating a faint light. Legend says it fell from a celestial being during the Great Fracture - and it's surprisingly good for polishing your armor! Just don’t stare at it for too long…it might try to sell you insurance.",
    "category": "equipment",
    "price": 180000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Increase Armor Class by 2",
      "Grants Resistance to Radiant Damage",
      "Once per day: Channel celestial energy for a powerful burst of healing (heals 75 HP)"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional rift portal",
    "levelRequirement": 28
  },
  "midlands_item_crimson_scroll": {
    "id": "midlands_item_crimson_scroll",
    "name": "Crimson Scroll of Imperial Decree",
    "description": "This scroll, stained with the blood of countless bureaucrats and disgruntled generals, contains a single, surprisingly insightful decree regarding proper tea brewing. It’s rumored to grant temporary advantage on persuasion checks when discussing matters of etiquette or royal lineage – Wario would absolutely abuse this!",
    "category": "consumables",
    "price": 800,
    "icon": "📜",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant temporary persuasion bonus",
      "chance to inflict mild confusion on target",
      "absorbs 10% of next attack damage"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "Royal Courier Pigeon",
    "levelRequirement": 4
  },
  "midlands_item_blackstone_gauntlets": {
    "id": "midlands_item_blackstone_gauntlets",
    "name": "Blackstone Gauntlets of Shattered Loyalty",
    "description": "Forged from the remnants of a disgraced Imperial guard's armor, these gauntlets pulse with a faint, unsettling darkness. They offer protection against physical attacks and subtly influence nearby guards to question their allegiance – perfect for Wario’s schemes!",
    "category": "equipment",
    "price": 12000,
    "icon": "🧤",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "increased armor class",
      "chance to trigger a ‘doubt’ effect on nearby enemies",
      "grants bonus to intimidation checks"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "Night Owl Messenger",
    "levelRequirement": 8
  },
  "midlands_item_aegis_of_rebellion": {
    "id": "midlands_item_aegis_of_rebellion",
    "name": "Aegis of Rebellion – The Silent Watcher",
    "description": "This shimmering shield, crafted from solidified rage and whispered defiance, is a relic of the last uprising against the Empire. Holding it grants protection and occasionally emits a pulse of psychic energy that disorients your foes… just try not to think about Wario's plans while using it!",
    "category": "equipment",
    "price": 75000,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "high armor class",
      "chance to stun or disorient enemies",
      "provides resistance to psychic damage",
      "grants a small amount of healing over time"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "Dragon-Mounted Courier (Highly Unreliable)",
    "levelRequirement": 15
  },
  "teyvat_item_ember_drift": {
    "id": "teyvat_item_ember_drift",
    "name": "Ember Drift Lantern",
    "description": "This tiny lantern, crafted from crystallized pyro essence, emits a warm glow that briefly intensifies the wielder's fire magic. It’s rumored to have been favored by wandering adventurers seeking warmth in the Dragonspine peaks – though Wario wouldn't be caught dead out there!",
    "category": "equipment",
    "price": 12000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increases fire damage by 5%",
      "chance to ignite enemies on hit",
      "provides minor warmth (reduces cold vulnerability)"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_mime",
    "levelRequirement": 7
  },
  "equestria_item_royal_armor_of_protection": {
    "id": "equestria_item_royal_armor_of_protection",
    "name": "Royal Armor of Protection",
    "description": "Forged by the finest armorers in Canterlot, this suit is crafted from enchanted pony hide and shimmering steel. It’s surprisingly comfortable despite its imposing appearance – unless you're a particularly ticklish earth pony.",
    "category": "equipment",
    "price": 12000,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase armor class by 4",
      "grant resistance to slashing and piercing damage",
      "chance to deflect incoming spells (low chance)"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 10
  },
  "almost_edge_item_void_gum": {
    "id": "almost_edge_item_void_gum",
    "name": "The Singularity Chew",
    "description": "This gum tastes vaguely of static and regret. Chewing it briefly allows you to momentarily phase through solid objects – perfect for sneaking past those pesky voidlings or getting extra close to a particularly shiny scrap metal! Just try not to get stuck permanently.",
    "category": "consumables",
    "price": 350,
    "icon": "🍬",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grants temporary invisibility (3 rounds)",
      "chance to bypass enemy defenses (10%)",
      "allows the user to move through one wall or obstacle per use",
      "restores 5% of max HP"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black hole delivery",
    "levelRequirement": 3
  },
  "equestria_item_canterlot_guard_shield": {
    "id": "equestria_item_canterlot_guard_shield",
    "name": "Canterlot Guard's Steadfast Aegis",
    "description": "Forged in the heart of Canterlot Castle during a time of great peril, this shield is imbued with the unwavering loyalty of the royal guard. It offers substantial protection against physical attacks and can even deflect magical projectiles - just don’t try to use it to protect your snacks from Wario!",
    "category": "equipment",
    "price": 6500,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "high physical defense",
      "reflects magical projectiles (30%)",
      "chance to stun enemies on a critical block"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 7
  },
  "equestria_item_elemental_harmony_amulet": {
    "id": "equestria_item_elemental_harmony_amulet",
    "name": "Elemental Harmony Amulet",
    "description": "Crafted by the Crystal Empire’s most skilled artisans, this amulet resonates with the core elements of Equestria – earth, wind, fire, and water. Wearing it allows the wearer to subtly manipulate these forces for a short time - just don't accidentally summon a tidal wave in your bedroom!",
    "category": "faction",
    "price": 12000,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "minor elemental resistance",
      "chance to create small bursts of elemental energy (fire, water, wind)",
      "increases magic damage by 15%"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "crystal_carrier",
    "levelRequirement": 10
  },
  "faerun_item_ancient_rune_blade": {
    "id": "faerun_item_ancient_rune_blade",
    "name": "Whisperwind’s Edge",
    "description": "Forged by dwarven smiths during the Age of Heroes, this blade hums with faint magical energy. It's said to whisper tactical advice to its wielder – mostly about sharpening itself and demanding more polishing. The steel is surprisingly light, almost like it wants you to run faster!",
    "category": "equipment",
    "price": 12000,
    "icon": "⚔️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+4 to attack rolls with slashing weapons",
      "chance to inflict bleeding (10%)",
      "increases movement speed by 5 feet"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 6
  },
  "faerun_item_seraphina_s_tears": {
    "id": "faerun_item_seraphina_s_tears",
    "name": "Tears of the Fallen Angel",
    "description": "Collected from a celestial being’s sorrowful lament, these shimmering orbs radiate an aura of profound sadness – and surprisingly potent magic. Use them to soothe troubled spirits, enhance healing spells, or just make people feel really, *really* bad (don't do that). Wario recommends using them as glitter.",
    "category": "premium",
    "price": 250000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "restores 100 HP",
      "increases healing spells by 50%",
      "chance to inflict despair (20%)",
      "adds +8 to wisdom checks"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 23
  },
  "pokemon_item_mystic_potion_of_evolution": {
    "id": "pokemon_item_mystic_potion_of_evolution",
    "name": "Primal Shift Elixir",
    "description": "Brewed from the rarest Pokémon essences, this potion doesn't just heal – it *shifts* your party’s potential! Consuming it increases the chance of evolving a single Pokémon during the next battle, but be warned; the resulting form is… unpredictable!",
    "category": "consumables",
    "price": 23000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "instant_healing_75",
      "increased_evolution_chance",
      "small chance for a beneficial mutation"
    ],
    "vendor": "pokemart",
    "shippedBy": "Magikarp Delivery Drone",
    "levelRequirement": 10
  },
  "faerun_item_ancient_druidic_amulet": {
    "id": "faerun_item_ancient_druidic_amulet",
    "name": "Ancient Druidic Amulet of Whispering Roots",
    "description": "A strangely warm amulet carved from petrified wood. It whispers cryptic warnings about the encroaching blight and occasionally directs you towards hidden groves brimming with strange flora… or just leads you into trouble.",
    "category": "curiosities",
    "price": 3200,
    "icon": "🌿",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_heal_self",
      "increased_spell_proficiency",
      "minor_nature_magic"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_beast",
    "levelRequirement": 8
  },
  "doughnut_hole_crumb_of_null": {
    "id": "doughnut_hole_crumb_of_null",
    "name": "Crumb of Null",
    "description": "A tiny, pulsating fragment seemingly ripped from the very fabric of existence! This crumb radiates a disconcerting chill and briefly disrupts gravity around it – perfect for distracting guards or causing minor chaos. It’s surprisingly tasty too…if you like existential dread.",
    "category": "consumables",
    "price": 678,
    "icon": "🌌",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "deals 1d6 force damage to a single target",
      "reduces gravity in a 5ft radius for 3 seconds",
      "chance to cause the target to momentarily lose their sense of direction"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 4
  },
  "almost_edge_item_chronometric_amulet": {
    "id": "almost_edge_item_chronometric_amulet",
    "name": "Chronometric Amulet of Lost Time",
    "description": "Forged from solidified echoes, this amulet allows the wearer to briefly rewind their actions – a desperate measure against impending doom or simply to undo a spectacularly bad decision. However, prolonged use risks unraveling your own timeline and attracting the attention of beings who prefer chaos to order...and Wario's terrible taste in food.",
    "category": "equipment",
    "price": 12000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "rewind_time_once",
      "chance_to_avoid_damage",
      "slightly_increased_luck"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "temporal_anomaly",
    "levelRequirement": 10
  },
  "almost_edge_item_voidstone_massage": {
    "id": "almost_edge_item_voidstone_massage",
    "name": "Voidstone Massage - Essence of Nothingness",
    "description": "Experience ultimate relaxation with this service! A skilled void-walker applies precisely calibrated pulses of compressed nothingness to your muscles, melting away stress and existential dread. Warning: May temporarily reduce your perception of self or cause an uncontrollable urge to collect shiny objects.",
    "category": "services",
    "price": 7500,
    "icon": "💆‍♀️",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "remove_status_effect",
      "grant_temporary_regeneration",
      "chance_to_gain_inspiration"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "sentient_void",
    "levelRequirement": 15
  },
  "faerun_item_obsidian_shard_of_doom": {
    "id": "faerun_item_obsidian_shard_of_doom",
    "name": "Obsidian Shard of Doom",
    "description": "This jagged shard pulses with a faint, ominous energy. Touching it might bring you good luck... or unleash a minor demonic echo that demands tribute. Wario doesn't care about the echo; he just wants the shiny bits!",
    "category": "curiosities",
    "price": 8000,
    "icon": "🖤",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "chance_to_deal_extra_damage_5%",
      "chance_to_inflict_fear_15%",
      "small_healing_effect_3HP",
      "adds_minor_darkness_aura"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "giant_hawk",
    "levelRequirement": 9
  },
  "almost_edge_item_chronometric_bracelet": {
    "id": "almost_edge_item_chronometric_bracelet",
    "name": "The Time-Warping Band of the Edge",
    "description": "Forged from solidified temporal eddies, this bracelet allows a brief manipulation of time around the wearer. Use it wisely, or you might accidentally erase yourself from existence – or just miss out on a sale. It's surprisingly comfortable for something that bends reality.",
    "category": "equipment",
    "price": 28000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "allows the wearer to briefly rewind time (max 3 seconds)",
      "increases movement speed by 20% for 5 seconds",
      "chance to create a temporary 'time bubble' that slows enemies"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Quantum Delivery Service",
    "levelRequirement": 11
  },
  "almost_edge_item_oblivion_key": {
    "id": "almost_edge_item_oblivion_key",
    "name": "The Key to Unmaking",
    "description": "A cold, obsidian key that seems to drain the very light from its surroundings. Legend says it can unlock portals to the deepest recesses of oblivion... or just open a really inconvenient storage room. Wario doesn't care what secrets you unlock, as long as they’re valuable!",
    "category": "forbidden",
    "price": 65000,
    "icon": "🔑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance to inflict 'void touch' (deals damage over time)",
      "allows the user to teleport a short distance into the void",
      "increases resistance to psychic attacks"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 16
  },
  "leclaire_isle_item_sticky_sweet_scroll": {
    "id": "leclaire_isle_item_sticky_sweet_scroll",
    "name": "Sticky Sweet Scroll",
    "description": "These enchanted scrolls are crafted from layers of honey-glazed dough and shimmer with a sugary glaze. When unrolled, they unleash a burst of sticky sweetness that slows enemies and heals the user slightly - just watch out for crumbs!",
    "category": "consumables",
    "price": 750,
    "icon": "🍬",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "heal_15",
      "slow_target_50",
      "apply_buff_sweetness_3"
    ],
    "vendor": "dough_depot",
    "shippedBy": "delivery_only",
    "levelRequirement": 6
  },
  "leclaire_isle_item_grandma_gourd_armor": {
    "id": "leclaire_isle_item_grandma_gourd_armor",
    "name": "Grandma Gourd Armor",
    "description": "Forged by the legendary Dough Folk matriarch, this armor is crafted from a giant, magically reinforced gourd. It's surprisingly comfortable and offers decent protection… as long as you don’t mind the faint scent of cinnamon.",
    "category": "equipment",
    "price": 12000,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor_5",
      "resistance_fire_20",
      "movement_speed_reduced_10"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_only",
    "levelRequirement": 8
  },
  "leclaire_isle_item_mythic_moonlit_meringue": {
    "id": "leclaire_isle_item_mythic_moonlit_meringue",
    "name": "Mythic Moonlit Meringue",
    "description": "Legend claims these meringues were created during a lunar eclipse, imbued with the dreams of sleeping dough folk. Consuming this meringue grants temporary visions and potent magical abilities – but beware, prolonged use may induce an insatiable craving for custard!",
    "category": "consumables",
    "price": 250000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "random_spell_cast",
      "grant_vision_5s",
      "increase_intelligence_2"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "night_only",
    "levelRequirement": 25
  },
  "grand_country_echo_resonance": {
    "id": "grand_country_echo_resonance",
    "name": "The Sound Weaver's Stone",
    "description": "This pulsating stone amplifies and redirects sound waves with terrifying precision. Use it to shatter rock formations, disorient enemies, or just make a really annoying noise – Wario approves!",
    "category": "services",
    "price": 9000,
    "icon": "🔊",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "sonic_blast",
      "sound_barrier_creation",
      "stun_effect",
      "chance_of_creating_phantom_echoes"
    ],
    "vendor": "side_seller",
    "shippedBy": "resonating_crate",
    "levelRequirement": 18
  },
  "animatopia_howler_stone": {
    "id": "animatopia_howler_stone",
    "name": "Howler Stone of the Primal Echoes",
    "description": "This oddly shaped stone vibrates with the calls of ancient animatopsian beasts. Holding it allows you to mimic a primal roar, potentially stunning nearby enemies or attracting curious wildlife – or angry ones!",
    "category": "equipment",
    "price": 12000,
    "icon": "🐺",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "deals 5 sonic damage on roar",
      "chance to stun enemies with roar (10%)",
      "increased animal handling skill by 2"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant beetle",
    "levelRequirement": 9
  },
  "animatopia_berry_of_sweet_dreams": {
    "id": "animatopia_berry_of_sweet_dreams",
    "name": "Berry of Sweet Dreams (Tribal Edition)",
    "description": "These plump, iridescent berries are a favorite amongst the Animatopians for inducing vivid and pleasant dreams. Consume one before sleep to gain temporary buffs related to your character's dream state – perhaps increased luck or even minor healing!",
    "category": "consumables",
    "price": 350,
    "icon": "🍓",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores 10 HP",
      "chance to gain a temporary positive status effect (luck/speed) on awakening"
    ],
    "vendor": "forest_market",
    "shippedBy": "swift hare",
    "levelRequirement": 3
  },
  "teyvat_item_whispering_winds": {
    "id": "teyvat_item_whispering_winds",
    "name": "Zephyr's Embrace Amulet",
    "description": "This swirling azure amulet seems to hum with the restless energy of Barbatos himself. It grants a minor boost to wind-based attacks and provides a slight chance to dodge incoming projectiles, perfect for those quick-thinking adventurers! Wario thinks it smells faintly of blueberry pie – probably just residual elemental energy.",
    "category": "equipment",
    "price": 18000,
    "icon": "🌬️",
    "stock": 75,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_wind_damage_by_5%",
      "chance_to_dodge_projectile_10%",
      "grant_speedy_movement_3s"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 8
  },
  "teyvat_item_chronos_fragment": {
    "id": "teyvat_item_chronos_fragment",
    "name": "Echo of Eternity Pendant",
    "description": "A shimmering, obsidian pendant said to be a shard from the Chronus Archon’s loom. Wearing this grants limited temporal manipulation – slowing down enemies and speeding up allies! Wario just wants to use it to rewind himself after he eats all the pastries... don't tell anyone.",
    "category": "curiosities",
    "price": 120000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "slow_enemy_speed_by_30%",
      "increase_ally_speed_by_20%",
      "brief_temporal_shift_3s"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "phantom_ship",
    "levelRequirement": 22
  },
  "teyvat_item_wind_whisper_rune": {
    "id": "teyvat_item_wind_whisper_rune",
    "name": "Wind Whisper Rune of Kusanagi",
    "description": "Forged by the spirits of ancient warriors, this rune vibrates with potent Anemo energy. It grants you a fleeting connection to the wind itself, allowing for bursts of incredible speed and enhanced agility – just don't sneeze!",
    "category": "equipment",
    "price": 65000,
    "icon": "💨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "movement_speed_increase_20%",
      "dodge_chance_increase_15%",
      "wind_dash_ability (once per day)",
      "resistance_to_knockback_50%"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "lightning_kite",
    "levelRequirement": 20
  },
  "teyvat_item_archon_reading": {
    "id": "teyvat_item_archon_reading",
    "name": "Archon’s Insight Session",
    "description": "Consult with a trained archon scholar for a brief session of divination. They'll offer cryptic advice and possibly reveal your deepest desires... or just tell you to eat more dumplings!  A truly enlightening experience, if a little vague.",
    "category": "services",
    "price": 8000,
    "icon": "🔮",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance_to_gain_wisdom_boost_10%",
      "temporary_buff_charisma_5%"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cart_of_scrolls",
    "levelRequirement": 3
  },
  "midlands_item_political_plea": {
    "id": "midlands_item_political_plea",
    "name": "A Diplomat's Calculated Words",
    "description": "These polished stones, inscribed with persuasive phrases and subtly imbued with the scent of expensive incense, aren’t magic—yet. When presented to a suspicious noble or corrupt official, they offer a 20% chance to sway them to your side... or at least get a slightly better deal on taxes. Wario would buy these just to confuse people.",
    "category": "services",
    "price": 850,
    "icon": "🗣️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_reduce_hostile_encounter_difficulty",
      "increase_persuasion_skill",
      "provides_advantage_on_negotiation_checks"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 5
  },
  "equestria_item_royal_armor_shard": {
    "id": "equestria_item_royal_armor_shard",
    "name": "Royal Armor Shard",
    "description": "A fragment of armor once worn by a valiant Royal Guard! This shard pulses with residual magic and offers surprisingly effective protection – though it’s missing a few important pieces, like, you know, the rest of the armor.  Don't try to assemble it, Wario would be *furious*!",
    "category": "equipment",
    "price": 6500,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor class +2",
      "+5 AC against magical attacks",
      "chance to deflect projectiles (10%)"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Messenger Gryphon",
    "levelRequirement": 8
  },
  "equestria_item_harmony_scroll": {
    "id": "equestria_item_harmony_scroll",
    "name": "Harmony Scroll of Serenity",
    "description": "This ancient scroll, penned by a wise old unicorn, contains powerful enchantments designed to quell chaos and promote tranquility. Unrolling it creates a shimmering aura that reduces nearby aggression and boosts healing magic – just what you need when things get too… sparkly.",
    "category": "premium",
    "price": 28000,
    "icon": "☮️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "restores 50 HP to all party members",
      "+2 healing magic potency for 6 turns",
      "reduces enemy aggression by 20%"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Mystic Delivery Portal",
    "levelRequirement": 12
  },
  "almost_edge_item_chronal_crumbs": {
    "id": "almost_edge_item_chronal_crumbs",
    "name": "Chronal Crumbs",
    "description": "These shimmering fragments taste faintly of forgotten timelines and existential dread. Consuming them grants a momentary glimpse into possible futures, though they often lead to unsettling visions and an overwhelming urge to rearrange your socks.",
    "category": "consumables",
    "price": 7500,
    "icon": "⏳",
    "stock": 33,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "heals 20 HP",
      "grants +1 to Wisdom for 3 turns",
      "chance to gain a temporary madness effect (roll d6: 1-3 = confused, 4-6 = berserk)"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 9
  },
  "almost_edge_item_echoing_bracers": {
    "id": "almost_edge_item_echoing_bracers",
    "name": "Echoing Bracers of the Void",
    "description": "Forged from solidified silence and the whispers of lost realities, these bracers amplify your presence in the void. They allow you to briefly phase through solid objects, but prolonged use may cause a disturbing resonance within your mind.",
    "category": "equipment",
    "price": 12000,
    "icon": "🌌",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grants +3 to Dexterity",
      "allows the wearer to attempt to phase through one non-magical object per turn (DC 15)",
      "chance to attract the attention of void entities"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black pigeon",
    "levelRequirement": 6
  },
  "middle_earth_dwarven_hammer_of_rumble": {
    "id": "middle_earth_dwarven_hammer_of_rumble",
    "name": "Dwarven Hammer of Rumble",
    "description": "Forged deep within the Iron Hills, this hammer practically vibrates with ancient dwarven rage. It’s said to have been used to shatter goblin fortresses and occasionally annoy overly cheerful halflings.  Strike true and feel the earth tremble!",
    "category": "equipment",
    "price": 12000,
    "icon": "🔨",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases damage by 50%",
      "chance to stun target on hit (15%)",
      "adds a knockback effect"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 8
  },
  "faerun_item_potion_of_berserk": {
    "id": "faerun_item_potion_of_berserk",
    "name": "Potion of Unbridled Rage",
    "description": "Brewed by a particularly grumpy gnome, this potion tastes suspiciously like blueberries and fury. Drink it quickly, or you’ll be arguing with woodland sprites about the proper way to stack firewood.",
    "category": "consumables",
    "price": 1200,
    "icon": "💥",
    "stock": 38,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase attack damage by 50% for 6 turns",
      "reduce intelligence by 10%",
      "chance to become berserk (15%)"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 8
  },
  "faerun_item_scroll_of_temporal_shift": {
    "id": "faerun_item_scroll_of_temporal_shift",
    "name": "Scroll of Temporal Hiccup",
    "description": "This ancient scroll, penned by a chronomancer who clearly had too much time on his hands, allows you to briefly rewind or fast forward your immediate surroundings. Just don't use it in a crowded marketplace – trust me.",
    "category": "curiosities",
    "price": 6500,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "allows the user to rewind time by 3 seconds (once per day)",
      "allows the user to fast forward time by 3 seconds (once per day)",
      "chance for temporal paradoxes (1%)"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10
  },
  "chaos_voidstone": {
    "id": "chaos_voidstone",
    "name": "Voidstone of Unmaking",
    "description": "A pulsating orb of solidified chaos, this stone radiates an unsettling aura. Touching it briefly grants a minor ability to disrupt spells but carries the risk of causing temporary madness and attracting unwanted attention from… things. Don’t say I didn't warn you.",
    "category": "forbidden",
    "price": 8000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance: chance to nullify spell effects (5%)",
      "chance: chance to inflict ‘madness’ status on target (10%)",
      "chance: small chance to trigger a minor chaotic event (20%)"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "shadow_courier",
    "levelRequirement": 15
  },
  "midlands_item_chronos_shard": {
    "id": "midlands_item_chronos_shard",
    "name": "Fragment of Frozen Time",
    "description": "A pulsing shard radiating a chilling aura. Touching this relic briefly slows down your perception, allowing you to react with unnerving speed - or simply give yourself a headache. Don't stare at it for too long… time is fickle!",
    "category": "curiosities",
    "price": 85000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Slows target's movement speed by 50% for 2 turns.",
      "Chance (30%) to briefly freeze a single enemy in place.",
      "Grants +10 to Dexterity."
    ],
    "vendor": "fractured_forge",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 22
  },
  "the_edge_item_chronos_shard": {
    "id": "the_edge_item_chronos_shard",
    "name": "Fragment of the Endless Hourglass",
    "description": "This jagged shard pulses with trapped moments – tiny, frozen echoes of time itself! Holding it grants a fleeting glimpse into possible futures, though focusing too long might unravel your present. Wario says it’s ‘totally worth the potential existential crisis’.",
    "category": "curiosities",
    "price": 250000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to rewind time by 3 seconds on critical hits",
      "increases perception by 20% for 60 seconds",
      "chance to gain a temporary bonus to all stats based on the perceived 'weight' of the future glimpsed."
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 20
  },
  "the_edge_item_resonance_stone": {
    "id": "the_edge_item_resonance_stone",
    "name": "Echoing Stone of Silence",
    "description": "This smooth, obsidian stone hums with the suppressed whispers of lost souls. Holding it allows you to briefly disrupt magical energies, silencing spells and dampening illusions – a handy tool for avoiding Wario's traps!  It also makes fantastic paperweights.",
    "category": "consumables",
    "price": 300,
    "icon": "🌑",
    "stock": 99,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to nullify a single-target spell",
      "reduces the duration of illusion effects by 50%",
      "provides minor resistance to psychic damage"
    ],
    "vendor": "final_shop",
    "shippedBy": "swift_current",
    "levelRequirement": 2
  },
  "doughnut_hole_crumb_of_absence": {
    "id": "doughnut_hole_crumb_of_absence",
    "name": "Fragment of the Unmade",
    "description": "A pulsating, grey crumb – remnants from before existence itself. Holding it feels like a momentary lapse in your own perception; incredibly unsettling but surprisingly sticky.",
    "category": "curiosities",
    "price": 65000,
    "icon": "✨",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grant_10_sanity",
      "chance_to_phase_through_walls(20%)",
      "absorb_void_energy(5)",
      "causes_mild_confusion"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 18
  },
  "doughnut_hole_void_grappling_hook": {
    "id": "doughnut_hole_void_grappling_hook",
    "name": "Anchor of the Abyss",
    "description": "This hook seems to defy gravity, subtly pulling you towards whatever void-like anomaly it's pointed at. It’s surprisingly comfortable in your hand and smells faintly of burnt sugar…or maybe something worse.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔗",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_jump_height(5)",
      "chance_to_pull_enemies_towards_player(30%)",
      "gravity_resistance(10)",
      "slows_down_falling_speed"
    ],
    "vendor": "void_vendor",
    "shippedBy": "gravitational_wave",
    "levelRequirement": 8
  },
  "doughnut_hole_anomaly_symbiont_token": {
    "id": "doughnut_hole_anomaly_symbiont_token",
    "name": "Key to the Unstable Core",
    "description": "A shimmering, iridescent token pulsating with chaotic energy. Touching it grants a fleeting glimpse of realities that should not exist – and makes you crave glazed pastries.",
    "category": "faction",
    "price": 800,
    "icon": "🌀",
    "stock": 50,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_faction_reputation(the_void_keepers)",
      "chance_to_create_minor_gravitational_anomalies",
      "increases_perception(5)",
      "slows_down_enemy_attacks(10%)"
    ],
    "vendor": "center_seller",
    "shippedBy": "temporal_package",
    "levelRequirement": 3
  },
  "connectopia_pioneer_pack": {
    "id": "connectopia_pioneer_pack",
    "name": "Survival Starter Kit",
    "description": "This sturdy kit contains everything a fledgling pioneer needs to survive the harsh Connectopian wilderness – mostly. It's got rations, a compass that points vaguely north, and a grappling hook for…well, something. Wario recommends testing its effectiveness against giant blocks.",
    "category": "equipment",
    "price": 875,
    "icon": "🧭",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_health",
      "resistance_to_environmental_damage",
      "chance_for_resource_finds"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Wario's Expedition Transport",
    "levelRequirement": 8
  },
  "earth_land_whispers_of_the_guild": {
    "id": "earth_land_whispers_of_the_guild",
    "name": "Guildmaster’s Insightful Scroll",
    "description": "A meticulously crafted scroll containing the cryptic advice of Master Eldrin, the Quartermaster. It's rumored to unlock a small piece of strategic brilliance... or just make you feel slightly smarter.  Don't blame us if it leads to more paperwork.",
    "category": "services",
    "price": 1800,
    "icon": "📜",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_advantage_on_strategy_checks",
      "reveal_hidden_path_once"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 5
  },
  "earth_land_frostgiant_tooth": {
    "id": "earth_land_frostgiant_tooth",
    "name": "Tooth of the Frozen King",
    "description": "This enormous molar, harvested from a particularly grumpy Frost Giant, is surprisingly durable! Holding it grants a strange sense of resilience... and an intense craving for hearty stew. It's also rumored to ward off frostbite (probably).",
    "category": "curiosities",
    "price": 3200,
    "icon": "🦷",
    "stock": 18,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "frostbite_immunity",
      "increased_stamina",
      "chance to stun on critical hit"
    ],
    "vendor": "magic_shop",
    "shippedBy": "snow_goose",
    "levelRequirement": 12
  },
  "leclaire_isle_item_sugar_spike": {
    "id": "leclaire_isle_item_sugar_spike",
    "name": "Sugar Spike",
    "description": "A glistening shard of crystallized joy, this sugary spike can instantly boost your attack speed and grant a temporary frenzy. Just don't eat it all at once – you’ll end up bouncing off the walls like a hyperactive pastry!",
    "category": "consumables",
    "price": 750,
    "icon": "🍬",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "attack_speed_increase_2",
      "frenzy_3",
      "temporary_movement_speed_boost_1"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 4
  },
  "leclaire_isle_item_dwarven_rolling_shield": {
    "id": "leclaire_isle_item_dwarven_rolling_shield",
    "name": "Dwarven Rolling Shield of Doughy Defense",
    "description": "Forged by the finest Dough Folk artisans, this shield isn't just sturdy; it *rolls*! When activated, it creates a temporary dough barrier around you, absorbing damage and occasionally launching sticky projectiles at your enemies. Watch out for sudden bursts of caramel!",
    "category": "equipment",
    "price": 12000,
    "icon": "🛡️",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor_3",
      "damage_absorption_4",
      "projectile_defense_2",
      "chance_to_launch_sticky_dough_projectile"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Rolling Cart Courier",
    "levelRequirement": 8
  },
  "equestria_item_sparklehoof_charm": {
    "id": "equestria_item_sparklehoof_charm",
    "name": "Sparklehoof’s Tactical Advice",
    "description": "This tiny charm was once worn by the legendary Sparklehoof himself! It doesn't grant combat prowess, but it does offer a surprisingly insightful perspective on any situation – perfect for planning your next adventure or negotiating with a particularly stubborn pony.",
    "category": "services",
    "price": 1200,
    "icon": "✨",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "strategic_insight: Grants a +5 bonus to Wisdom checks for 30 minutes",
      "diplomatic_advantage: Increases the success rate of persuasion attempts",
      "situational_awareness: Reveals hidden paths or secret objectives nearby"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 8
  },
  "curiosity_fortune_skull": {
    "id": "curiosity_fortune_skull",
    "name": "Skull of Whispering Prophecies",
    "description": "A meticulously carved skull, radiating an unsettling warmth. Holding it close allows you to glimpse fleeting visions – though whether they’re helpful or utterly bewildering is another matter entirely. This strange artifact can be used to gain a small advantage in battle.",
    "category": "curiosities",
    "price": 800,
    "icon": "🔮",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "small_chance_to_gain_insight",
      "minor_luck_boost",
      "detect_traps_increased_range"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 3
  },
  "doughnut_hole_void_armlet": {
    "id": "doughnut_hole_void_armlet",
    "name": "Nullity’s Embrace Armlet",
    "description": "Forged from solidified void essence, this armlet hums with unsettling energy. It passively reduces incoming damage and provides a chilling resistance to psychic attacks – because frankly, who needs warmth when you’re swimming in oblivion? Don't stare into it too long, or you might start seeing things... like Wario.",
    "category": "equipment",
    "price": 230000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "damage_reduction_15",
      "psychic_resistance_high",
      "chance_to_silence_enemies"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Distortion",
    "levelRequirement": 22
  },
  "connectopia_sparkling_fragment": {
    "id": "connectopia_sparkling_fragment",
    "name": "Echoes of the Great Collapse",
    "description": "A shard resonating with the energy released during Connectopia’s initial construction. This shimmering fragment grants a brief connection to the network of consciousness, allowing for quick problem-solving and minor reality alterations – though it tends to make you see things... or maybe not.",
    "category": "curiosities",
    "price": 8000,
    "icon": "✨",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "chance to instantly solve a puzzle (30%)",
      "increased chance of finding blueprints for advanced blocks",
      "provides minor temporary stat boosts (+1 Strength, +1 Dexterity)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Signal Drone",
    "levelRequirement": 12
  },
  "almost_edge_item_chronometric_bracelets": {
    "id": "almost_edge_item_chronometric_bracelets",
    "name": "Temporal Flux Wristbands",
    "description": "These unsettling bracelets, forged from solidified time-stream, allow the wearer to briefly manipulate their personal timeline. Be careful – too much fiddling and you might erase yourself completely!",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to rewind time by 3 seconds (10%)",
      "increased dodge chance by 7%",
      "slows enemy attack speed by 2"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wormhole_express",
    "levelRequirement": 9
  },
  "connectopia_data_core": {
    "id": "connectopia_data_core",
    "name": "Quantum Stabilizer",
    "description": "This intricate device hums with raw data energy, capable of briefly bolstering your processing power. It’s a crucial tool for deciphering cryptic block patterns and predicting the next cave-in! Warning: prolonged use may result in uncontrollable urges to rearrange your surroundings.",
    "category": "curiosities",
    "price": 12000,
    "icon": "💻",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increases intelligence by 8%",
      "chance to decipher hidden block patterns",
      "small chance to trigger a temporary system overload (1%)"
    ],
    "vendor": "craft_corner",
    "shippedBy": "drone",
    "levelRequirement": 8
  },
  "faction_empire_standard": {
    "id": "faction_empire_standard",
    "name": "The Crimson Standard of Despair",
    "description": "A tattered but resilient banner, bearing the emblem of the fallen Empire – a single, weeping eye. Waving this standard grants your party morale bonuses and inspires nearby Imperial soldiers (or at least makes them look slightly less miserable).  It's rumored to attract unwanted attention from…certain collectors.",
    "category": "faction",
    "price": 1850,
    "icon": "🚩",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "morale_bonus",
      "chance_to_reduce_enemy_attack_speed",
      "increased_party_defense"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "rolling_log",
    "levelRequirement": 3
  },
  "warhammer_voidcaller": {
    "id": "warhammer_voidcaller",
    "name": "The Voidcaller's Echo",
    "description": "This hammer pulses with a chilling darkness, seemingly drawing power from the nothingness between worlds. It can summon brief pockets of void energy to damage enemies and even briefly phase through armor – but be warned: prolonged use may leave you feeling...empty.  Don’t stare too long.",
    "category": "equipment",
    "price": 12500,
    "icon": "🌌",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "damage: physical_bludgeoning",
      "chance_to_apply_fear",
      "ability_void_phase (short duration)",
      "increased_attack_speed"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "shadow_beast",
    "levelRequirement": 10
  },
  "equestria_item_sparkle_potion": {
    "id": "equestria_item_sparkle_potion",
    "name": "Glimmering Gratitude Brew",
    "description": "A bubbling concoction brewed from concentrated stardust and rainbow tears – guaranteed to temporarily boost your party's charisma! It’s rumored to be a favorite of Princess Twilight herself, though she claims it mostly just makes her giggle.",
    "category": "consumables",
    "price": 350,
    "icon": "✨",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase charisma by 10 for 6 turns",
      "chance to charm NPCs (20%)",
      "restores 5 HP"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "pony_express",
    "levelRequirement": 3
  },
  "equestria_item_windrider_bracers": {
    "id": "equestria_item_windrider_bracers",
    "name": "Flutterhoof's Gale Defenders",
    "description": "These ornate bracers, forged by master blacksmiths in Cloudsdale, grant the wearer a touch of wind magic! They might not stop you from falling off a cliff, but they *will* make you feel like you’re flying – mostly.",
    "category": "equipment",
    "price": 12000,
    "icon": "💨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases movement speed by 10%",
      "chance to evade attacks (15%)",
      "provides resistance to wind damage"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "cloudsdale_delivery",
    "levelRequirement": 8
  },
  "equestria_item_chronal_shard": {
    "id": "equestria_item_chronal_shard",
    "name": "Echoes of the Past Fragment",
    "description": "A pulsating shard ripped from a temporal anomaly near the Crystal Empire. Touching it briefly allows you to glimpse possible futures... or maybe just see where you left your saddlebags. Use with caution – paradoxes are messy!",
    "category": "curiosities",
    "price": 80000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "grants a single use of ‘Temporal Peek’ (reveals the next enemy's attack)",
      "chance to gain a temporary buff based on a random event (10%)",
      "risk of causing minor temporal distortions (small chance of negative status effect)"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "temporal_logistics",
    "levelRequirement": 20
  },
  "kivotos_item_club_banner_of_discord": {
    "id": "kivotos_item_club_banner_of_discord",
    "name": "Banner of Discord",
    "description": "This outrageously flamboyant banner, proudly displaying a stylized image of screaming faces, was created by the notorious ‘Chaos Club.’ It radiates an aura of unsettling chaos and rumor has it that it can briefly incite arguments between NPCs.  A truly useful item for… certain situations.",
    "category": "curiosities",
    "price": 800,
    "icon": "🔥",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to trigger a minor argument (10%)",
      "reduces NPC hostility (+2)",
      "adds a chaotic effect to the area on use"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 3
  },
  "kivotos_item_academy_scroll_of_plagiarism": {
    "id": "kivotos_item_academy_scroll_of_plagiarism",
    "name": "Academy Scroll of Plagiarism",
    "description": "A seemingly innocuous scroll filled with meticulously copied passages from ancient texts – and several suspiciously similar to current assignments. This item is a staple for any student looking to… streamline their research process (we don't condone this, of course!).  Use it to bypass skill checks related to knowledge or academic subjects.",
    "category": "consumables",
    "price": 350,
    "icon": "📜",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grants +5 to knowledge checks (temporary)",
      "allows bypassing certain academic skill checks",
      "chance to attract the attention of a stern professor"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Mail Carrier",
    "levelRequirement": 1
  },
  "faerun_item_potion_of_temporary_strength": {
    "id": "faerun_item_potion_of_temporary_strength",
    "name": "Potion of Temporary Might",
    "description": "This bubbling concoction tastes suspiciously like fermented berries and regret. Drink it quickly, because the surge of power won't last long – about 3 rounds, give or take.  Don’t blame us if you accidentally punch a particularly grumpy troll.",
    "category": "consumables",
    "price": 650,
    "icon": "💊",
    "stock": 28,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "strength +3 for 3 rounds",
      "increased_critical_damage_chance (10%)"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "hawk",
    "levelRequirement": 2
  },
  "almost_edge_item_chronal_bracelet": {
    "id": "almost_edge_item_chronal_bracelet",
    "name": "Chronal Bracelet of Temporal Flux",
    "description": "Forged from solidified echoes and fractured time, this bracelet allows the wearer to briefly manipulate their personal timeline. Don't worry about paradoxes - Wario doesn’t care about consequences!",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "chance to rewind time by 1 turn",
      "increases movement speed by 20% for 2 turns",
      "absorbs a small amount of damage as temporal distortion"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wormhole courier",
    "levelRequirement": 11
  },
  "animatopia_boarfang_blade": {
    "id": "animatopia_boarfang_blade",
    "name": "Rumbling Boarfang Blade",
    "description": "This massive blade is crafted from the tusk of a legendary war boar, infused with primal rage. It whispers promises of victory and smells faintly of mud and…victory!  It’s surprisingly comfortable to wield, despite its intimidating size.",
    "category": "equipment",
    "price": 18000,
    "icon": "⚔️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "damage: slashing +3",
      "chance: critical hit chance +10%",
      "effect: grants temporary fury (movement speed +10%)"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_beetle_cart",
    "levelRequirement": 8
  },
  "faerun_item_ancient_scroll_of_misdirection": {
    "id": "faerun_item_ancient_scroll_of_misdirection",
    "name": "Ancient Scroll of Misdirection",
    "description": "This brittle scroll, written in a language no one recognizes (probably goblin), seems to shift and shimmer when observed directly. Unfurling it creates an illusionary duplicate of the viewer, causing confusion amongst enemies – perfect for escaping sticky situations or stealing pastries.",
    "category": "curiosities",
    "price": 3200,
    "icon": "📜",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "create_illusionary_duplicate_of_caster_for_3_rounds",
      "enemies_have_disadvantage_on_attack_rolls_against_the_duplicate",
      "chance_to_distract_target_50%"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 7
  },
  "almost_edge_item_chronal_repair": {
    "id": "almost_edge_item_chronal_repair",
    "name": "Temporal Stitching Service",
    "description": "A skilled artisan meticulously repairs damaged time streams, offering a chance to rewind minor mishaps. It's not glamorous, but it *is* surprisingly effective... assuming you can afford the exorbitant price of temporal stability.",
    "category": "services",
    "price": 18000,
    "icon": "🕰️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "restore 50 HP to a single target",
      "remove one negative status effect from a target",
      "grant the user +2 to all skill checks for 3 turns"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "pocket_dimensional_mailer",
    "levelRequirement": 12
  },
  "almost_edge_item_orb_of_unending_reflection": {
    "id": "almost_edge_item_orb_of_unending_reflection",
    "name": "Orb of Unending Reflection",
    "description": "This pulsating sphere seems to show endless reflections of a world that doesn't exist, and probably never will. Gazing into it for too long can unravel your mind, but the potential rewards are... unsettlingly alluring.",
    "category": "premium",
    "price": 65000,
    "icon": "✨",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "chance to reflect a spell back at the caster (15%)",
      "grants +8 to saving throws against illusion and enchantment effects",
      "allows the user to see through illusions."
    ],
    "vendor": "liminal_trader",
    "shippedBy": "encrypted_package",
    "levelRequirement": 20
  },
  "doughnut_hole_void_resonator": {
    "id": "doughnut_hole_void_resonator",
    "name": "Resonating Void Echo",
    "description": "A polished obsidian device that pulses with a faint, unsettling hum. Holding this resonator allows you to briefly tap into the chaotic energies of The Doughnut Hole, potentially summoning minor gravitational anomalies or attracting unwanted attention from… something. Don’t say I didn’t warn you!",
    "category": "equipment",
    "price": 65000,
    "icon": "🌀",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_create_localized_gravity_field",
      "increased_perception",
      "reduce_damage_from_void_based_attacks_by_25"
    ],
    "vendor": "center_seller",
    "shippedBy": "wormhole_express",
    "levelRequirement": 16
  },
  "teyvat_item_windwhisper_scroll": {
    "id": "teyvat_item_windwhisper_scroll",
    "name": "Windwhisper Scroll",
    "description": "Crafted by the elusive Windblume Riders, this scroll contains fragmented instructions for manipulating air currents. Unravel its secrets to create a gentle breeze or a surprisingly effective gust of wind – just don't try to fly with it!",
    "category": "consumables",
    "price": 650,
    "icon": "💨",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "heals 20 HP",
      "creates a gust of wind that pushes back enemies (small area)",
      "slightly increases evasion chance for 5 seconds"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "swift_messenger",
    "levelRequirement": 3
  },
  "teyvat_item_crimson_shard": {
    "id": "teyvat_item_crimson_shard",
    "name": "Crimson Shard of Khaenri'ah",
    "description": "A fragment ripped from the lost city, radiating with unsettling power. This shard occasionally emits a faint hum and seems to… *observe* you. Handle with caution – prolonged exposure may result in strange dreams or an uncontrollable urge to collect shiny objects.",
    "category": "curiosities",
    "price": 1800,
    "icon": "💎",
    "stock": 32,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to inflict confusion on target (5%)",
      "increases perception by 10%",
      "slightly increases intelligence score for 60 seconds"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "sea_serpent",
    "levelRequirement": 5
  },
  "connectopia_quick_fix_potion": {
    "id": "connectopia_quick_fix_potion",
    "name": "Instant Block Weld",
    "description": "A bubbling concoction that instantly bonds two blocks together, perfect for quick repairs or impromptu building projects. It smells vaguely of burnt metal and desperation – a truly useful potion!  Warning: May cause temporary block-induced euphoria.",
    "category": "consumables",
    "price": 250,
    "icon": "🧱",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "instant_block_repair",
      "small_healing_effect"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "horseback",
    "levelRequirement": 1
  },
  "connectopia_artifact_chronometer": {
    "id": "connectopia_artifact_chronometer",
    "name": "Temporal Shift Gear",
    "description": "This intricate device, recovered from a collapsed mining outpost, allows for brief manipulation of localized time. Use it wisely, or you might end up stuck in an endless loop of digging!",
    "category": "curiosities",
    "price": 75000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "brief_time_dilation",
      "chance_to_avoid_cave_ins",
      "slows_enemy_movement"
    ],
    "vendor": "craft_corner",
    "shippedBy": "mythic_beast",
    "levelRequirement": 15
  },
  "grand_country_gravity_charm": {
    "id": "grand_country_gravity_charm",
    "name": "Wario's Levitation Locket",
    "description": "This exquisitely crafted locket, rumored to be a prototype from Wario himself, grants the wearer limited control over their personal gravity. Use it wisely – or you might end up stuck in a particularly sticky situation! (Don’t worry; we’ve included a handy release charm... probably.)",
    "category": "premium",
    "price": 12000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reduce_gravity_effect_by_20%",
      "chance_to_float_for_1_second_on_activation",
      "increased_dexterity_by_3"
    ],
    "vendor": "side_seller",
    "shippedBy": "Chromatic Conveyor",
    "levelRequirement": 10
  },
  "the_edge_cartographer_badge": {
    "id": "the_edge_cartographer_badge",
    "name": "Cartographer's Mark of the Abyss",
    "description": "Issued by the secretive Order of the Unseen Paths, this badge grants a subtle advantage in navigating perilous landscapes. It doesn’t directly protect you, but it does make finding your way a *lot* easier – and slightly less terrifying.",
    "category": "faction",
    "price": 800,
    "icon": "🗺️",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "+1 to navigation checks in unknown or dangerous terrain",
      "chance to avoid getting lost (roll d20, on a 13-20 gain advantage)"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged_messenger",
    "levelRequirement": 3
  },
  "the_edge_chronal_distortion_gem": {
    "id": "the_edge_chronal_distortion_gem",
    "name": "Temporal Flux Gem",
    "description": "A pulsating gem radiating with unstable time energy – handle with extreme caution! This gem allows for a brief, localized rewind of events, useful for correcting mistakes or escaping traps.  However, overuse can cause unpredictable temporal shifts.",
    "category": "curiosities",
    "price": 6000,
    "icon": "⏳",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Once per long rest, rewind time by 3 rounds (limited to self only)",
      "Chance of creating a temporal paradox (roll d10, on 7-10 suffer 1d6 points of psychic damage)"
    ],
    "vendor": "final_shop",
    "shippedBy": "spectral_delivery",
    "levelRequirement": 6
  },
  "doughnut_hole_singularity_shard": {
    "id": "doughnut_hole_singularity_shard",
    "name": "Echoing Shard",
    "description": "A fragment of solidified void energy, this shard pulses with a faint hum. Holding it allows you to briefly perceive echoes of possible futures – though interpreting them is like trying to decipher Wario's plans!",
    "category": "curiosities",
    "price": 8500,
    "icon": "🔮",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "grants a single ‘precognition’ effect – reveals the next enemy action with a 30% chance",
      "increases intelligence by 5 points for 2 turns",
      "causes minor auditory hallucinations (disadvantage on perception checks)"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Rift Delivery",
    "levelRequirement": 10
  },
  "doughnut_hole_temporal_crumb": {
    "id": "doughnut_hole_temporal_crumb",
    "name": "Chronal Crumb",
    "description": "These shimmering crumbs seem to defy the laws of time, occasionally flickering with images of past and future events. Consuming one grants a brief burst of accelerated movement—perfect for escaping sticky situations or snatching a particularly delicious pastry. Just don't try to use it to win at checkers!",
    "category": "consumables",
    "price": 750,
    "icon": "⏳",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_speed_3",
      "duration_10s",
      "chance_to_phase_through_obstacles"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 4
  },
  "doughnut_hole_anomaly_custard": {
    "id": "doughnut_hole_anomaly_custard",
    "name": "Void Custard Concoction",
    "description": "A swirling, iridescent custard that seems to originate from the very heart of a miniature void. Upon consumption, you gain resistance to damage and are able to briefly glimpse alternate realities—though they mostly consist of pastries. Warning: Prolonged use may result in existential dread or an uncontrollable craving for sprinkles!",
    "category": "premium",
    "price": 12000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_physical_damage",
      "chance_to_see_alternate_reality",
      "increase_charisma_5",
      "grant_temporary_immunity_to_fear"
    ],
    "vendor": "center_seller",
    "shippedBy": "quantum_entanglement",
    "levelRequirement": 10
  },
  "midlands_item_royal_treatment": {
    "id": "midlands_item_royal_treatment",
    "name": "Personalized Healing Salve - Wario's Touch",
    "description": "A luxurious balm concocted by the finest Midlandian apothecaries. This potent salve is infused with rare herbs and a pinch of Wario’s secret ingredient (probably something questionable), guaranteeing rapid healing and relief from aches and pains – perfect for after a long day of fighting!  Don't ask what it *really* contains.",
    "category": "consumables",
    "price": 1200,
    "icon": "🩹",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heals 50 HP",
      "restores stamina",
      "reduces bleeding effects"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 2
  },
  "earth_land_stoneheart_amulet": {
    "id": "earth_land_stoneheart_amulet",
    "name": "Stoneheart Amulet of Resilience",
    "description": "This oddly warm amulet pulses with the energy of the earth! It seems to absorb blows and grant a surprising amount of fortitude, perfect for weathering a blizzard or just annoying your enemies. Wario says it's 'surprisingly not made of chocolate'.",
    "category": "equipment",
    "price": 6800,
    "icon": "🛡️",
    "stock": 75,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increase armor class by 2",
      "grant temporary hit points (10)",
      "resistance to cold damage"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "dragon_post",
    "levelRequirement": 7
  },
  "earth_land_whispering_scrolls": {
    "id": "earth_land_whispering_scrolls",
    "name": "Whispering Scrolls of the Silent Guild",
    "description": "These ancient scrolls seem to murmur secrets of forgotten magic and intricate tactics. Studying them grants a temporary bonus to perception and insight, though they also tend to make you question your sanity...or maybe it's just Wario’s influence.",
    "category": "curiosities",
    "price": 1200,
    "icon": "📜",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase perception by 5 (temporary)",
      "grant advantage on insight checks",
      "chance to learn a minor spell"
    ],
    "vendor": "magic_shop",
    "shippedBy": "griffin_express",
    "levelRequirement": 4
  },
  "earth_land_dragonscale_ring": {
    "id": "earth_land_dragonscale_ring",
    "name": "Dragonscale Ring of Protection",
    "description": "Forged from the shed scales of an ancient Ice Dragon, this ring radiates a chilling aura. It offers significant protection against fire damage and grants a subtle advantage in icy environments – perfect for Wario’s chilly schemes!",
    "category": "equipment",
    "price": 18000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grant resistance to fire damage",
      "increase movement speed in snowy terrain",
      "chance to freeze enemies on a critical hit"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_worm_delivery",
    "levelRequirement": 10
  },
  "doughnut_hole_fractured_shard": {
    "id": "doughnut_hole_fractured_shard",
    "name": "Fractured Shard of the Central Echo",
    "description": "A jagged piece of what appears to be solidified emptiness, pulsing with a faint, unsettling hum. Holding this shard allows you to briefly perceive echoes from other realities – potentially helpful, but also prone to causing existential dread and an overwhelming urge to rearrange your possessions alphabetically.",
    "category": "equipment",
    "price": 4500,
    "icon": "🌀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grant_insight_2",
      "chance_to_hallucinate",
      "boost_perception_5"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Conveyor",
    "levelRequirement": 8
  },
  "doughnut_hole_void_patrol_badge": {
    "id": "doughnut_hole_void_patrol_badge",
    "name": "Void Patrol Badge of Quiet Observation",
    "description": "Issued by the enigmatic Void Patrol, this badge represents a tenuous alliance with forces beyond comprehension. Wearing this grants you minor resistance to madness and a disconcerting ability to appear subtly out of place – ideal for blending into The Doughnut Hole's…unique atmosphere.",
    "category": "faction",
    "price": 12000,
    "icon": "👁️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resist_madness_7",
      "grant_stealth_3",
      "chance_to_phase"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Delivery Service",
    "levelRequirement": 12
  },
  "connectopia_mining_consultation": {
    "id": "connectopia_mining_consultation",
    "name": "Prospector's Predictive Protocols",
    "description": "Ever stare at a mountain and think 'There HAS to be something valuable here!'? This service will analyze your current location, block composition, and even your own hopeful spirit to predict the most likely vein of ore.  It’s like having a tiny fortune-telling block!",
    "category": "services",
    "price": 8000,
    "icon": "⛏️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to reveal hidden resource nodes (+50% chance)",
      "provides a brief analysis of the surrounding blocks",
      "guaranteed to provide vague and potentially misleading advice"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Messenger Block Bot",
    "levelRequirement": 6
  },
  "mushroom_kingdom_item_gold_coin_armor": {
    "id": "mushroom_kingdom_item_gold_coin_armor",
    "name": "Fort Knox of Fungus",
    "description": "Forged from solidified gold coins and enchanted with protective magic, this armor will make you the envy of any goblin. It's surprisingly lightweight – mostly because it’s just a collection of shiny money!",
    "category": "equipment",
    "price": 12000,
    "icon": "💰",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+3 Armor Class",
      "Resistance to piercing damage",
      "Player gains +1 to persuasion checks involving merchants."
    ],
    "vendor": "koopa_shop",
    "shippedBy": "giant_mushroom_delivery",
    "levelRequirement": 9
  },
  "warhammer_chronocrystal": {
    "id": "warhammer_chronocrystal",
    "name": "Chronocrystal Shard of Discord",
    "description": "A jagged piece of crystallized time, pulsing with chaotic energy. Wielding this shard grants glimpses into potential futures... and possibly a headache. Use wisely, or risk creating paradoxes that unravel reality!",
    "category": "equipment",
    "price": 12000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance to rewind time by 2 seconds",
      "increased evasion 15%",
      "temporary stat boost (strength +3, dexterity +2)"
    ],
    "vendor": "fate_forge",
    "shippedBy": "temporal_rift",
    "levelRequirement": 16
  },
  "curiosity_grimscythe_charm": {
    "id": "curiosity_grimscythe_charm",
    "name": "Grimscythe’s Whisper",
    "description": "A tiny, unsettling charm depicting a miniature scythe. It seems to radiate an aura of impending doom and whispers dark secrets to those who hold it close – mostly about your questionable life choices. Don't say we didn't warn you!",
    "category": "curiosities",
    "price": 350,
    "icon": "💀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to inflict fear 5%",
      "minor luck bonus"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 2
  },
  "mushroom_kingdom_item_coin_of_prosperity": {
    "id": "mushroom_kingdom_item_coin_of_prosperity",
    "name": "Coin of Prosperity",
    "description": "This glistening golden coin seems to hum with an unnatural warmth, practically begging to be spent… or hoarded. Legend says it brings luck to anyone who possesses it, though Wario would argue that's just a fancy way of saying ‘it’ll attract more coins’!",
    "category": "consumables",
    "price": 875,
    "icon": "💰",
    "stock": 65,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_small_luck",
      "chance_to_find_extra_coins",
      "increase_gold_yield_10%"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_delivery",
    "levelRequirement": 3
  },
  "mushroom_kingdom_item_royal_guard_badge": {
    "id": "mushroom_kingdom_item_royal_guard_badge",
    "name": "Royal Guard Badge of Mushroom Heights",
    "description": "A tarnished silver badge bearing the crest of Mushroom Heights. Possession grants a small degree of respect (and occasionally, unwelcome attention) from the local authorities - mostly because Wario keeps trying to pay for things with these.",
    "category": "faction",
    "price": 6750,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "grant_minor_repuation_with_royal_guard",
      "chance_to_avoid_arrest_10%"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_messenger",
    "levelRequirement": 5
  },
  "kivotos_item_chronometric_eraser": {
    "id": "kivotos_item_chronometric_eraser",
    "name": "Chronometric Eraser",
    "description": "A strangely warm, cylindrical device that seems to subtly manipulate the flow of time. It can rewind a single failed action by a few seconds – perfect for avoiding embarrassing stumbles or correcting minor mistakes!",
    "category": "curiosities",
    "price": 850,
    "icon": "⏳",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "rewind_action (1d4 seconds)",
      "cooldown: 3 turns"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 5
  },
  "kivotos_item_phantom_notepad": {
    "id": "kivotos_item_phantom_notepad",
    "name": "Phantom Notepad of Lost Ideas",
    "description": "This unsettlingly smooth notepad appears to write itself, filled with cryptic diagrams and half-formed thoughts. It’s rumored that the notes contain glimpses into forgotten memories or potential futures—though deciphering them is a nightmare!",
    "category": "curiosities",
    "price": 325,
    "icon": "📝",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "randomly grants a clue (low level)",
      "chance to gain a minor illusion effect"
    ],
    "vendor": "club_supply",
    "shippedBy": "surface_mail",
    "levelRequirement": 2
  },
  "teyvat_item_scroll_of_reflection": {
    "id": "teyvat_item_scroll_of_reflection",
    "name": "Scroll of Reflection - Mizumoto Style",
    "description": "A beautifully crafted scroll containing techniques from the famed Mizumoto. When unfurled, it grants a momentary shield that reflects a portion of incoming damage back at the attacker – a truly elegant way to stall! Wario thinks it's 'fancy armor...but with sparkles!'",
    "category": "consumables",
    "price": 850,
    "icon": "🛡️",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "creates a reflective shield that absorbs 30% of damage",
      "reflects 10% of damage back to attacker",
      "duration: 2 turns"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_cart",
    "levelRequirement": 5
  },
  "teyvat_item_archon_favor_amulet": {
    "id": "teyvat_item_archon_favor_amulet",
    "name": "Archon Favor Amulet - Diluc's Blessing",
    "description": "This amulet radiates a subtle warmth, said to be imbued with the Archon of Mondstadt’s favor. Wearing it grants increased resistance to Pyro damage and inspires confidence in your allies – Wario just wants it to make him stronger! It also smells faintly of cinnamon.",
    "category": "premium",
    "price": 7500,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increases Pyro resistance by 15%",
      "provides a small morale boost to party members (+5% damage)",
      "chance to trigger 'Bold Resolve' effect (increased critical hit chance)"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "wind_messenger",
    "levelRequirement": 7
  },
  "leclaire_isle_frosting_fixer": {
    "id": "leclaire_isle_frosting_fixer",
    "name": "Frosting Fixer's Touch",
    "description": "A skilled Dough Folk artisan offers a brief consultation and application of rapidly-setting frosting, instantly repairing minor cracks and imperfections in baked goods or even armor plating. Just don’t ask about the ingredients – they involve fermented berries and a suspiciously happy gnome.",
    "category": "services",
    "price": 1200,
    "icon": "✨",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "repairs minor damage to equipment (1d6)",
      "restores 20% of armor's durability",
      "grants +2 to Repair skill checks for 1 hour"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "magic_delivery_beak",
    "levelRequirement": 6
  },
  "leclaire_isle_sugar_shard_amulet": {
    "id": "leclaire_isle_sugar_shard_amulet",
    "name": "Sugar Shard Amulet of Sweetness",
    "description": "This amulet, crafted from solidified sugar crystal harvested from the Whispering Swamps, radiates a faint aura of sugary delight. It’s rumored to attract small, friendly creatures and subtly increase your luck… or just make you crave pastries. Wario claims it's 'deliciously chaotic'.",
    "category": "curiosities",
    "price": 8500,
    "icon": "🍬",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to grant +1 to saving throws against fear effects (15%)",
      "increases luck by 5% for 8 hours",
      "attracts small, sweet-loving creatures (low chance of beneficial interaction)"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "winged_delivery_beetle",
    "levelRequirement": 10
  },
  "leclaire_isle_item_crusty_cutter": {
    "id": "leclaire_isle_item_crusty_cutter",
    "name": "Crusty Cutter",
    "description": "This miniature rolling pin is crafted from hardened gingerbread and imbued with a touch of mischievous sprite magic. It slices through dough like a dream, adding a delightful crunch to every pastry you create – or accidentally demolish.",
    "category": "equipment",
    "price": 875,
    "icon": "🔪",
    "stock": 62,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increases pastry crafting speed by 10%",
      "chance to trigger a small sugar explosion (5% chance)",
      "adds +1 to baking skill checks"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 4
  }
};
