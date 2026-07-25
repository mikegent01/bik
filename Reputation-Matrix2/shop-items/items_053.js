// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_053 = {
  "animatopia_scavenger_claw": {
    "id": "animatopia_scavenger_claw",
    "name": "Rumbling Root Claw",
    "description": "This hefty claw, carved from a petrified root beast, will help you tear through the jungle! It's surprisingly good for digging up buried treasures and intimidating smaller critters – perfect for a little Wario-style mayhem.",
    "category": "equipment",
    "price": 100,
    "icon": "⛏️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_strength_1",
      "chance_to_distract",
      "minor_healing_2"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Winged Courier",
    "levelRequirement": 5
  },
  "animatopia_echoing_mask": {
    "id": "animatopia_echoing_mask",
    "name": "Whispering Mask of the Shaman",
    "description": "Legend says this mask allows you to briefly mimic the calls of Animatopia’s most primal beasts. It's a bit glitchy, but occasionally it summons a swarm of buzzing insects – great for distracting enemies or startling villagers! Don't blame us if you end up arguing with a badger.",
    "category": "curiosities",
    "price": 670,
    "icon": "🎭",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "illusionary_sound",
      "chance_to_confuse",
      "minor_poison_1"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Giant Beetle",
    "levelRequirement": 8
  },
  "animatopia_ember_charm": {
    "id": "animatopia_ember_charm",
    "name": "Heart of the Ember Spirit",
    "description": "This glowing charm pulsates with residual heat, a remnant of ancient fire spirits. Hold it aloft and unleash a burst of fiery energy – useful for lighting torches or… well, setting things ablaze. Just don’t ask Wario where he got it.",
    "category": "consumables",
    "price": 3200,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "fireball_1",
      "chance_to_burn",
      "small_damage_3"
    ],
    "vendor": "forest_market",
    "shippedBy": "Hot Air Balloon",
    "levelRequirement": 12
  },
  "animatopia_fang_charm": {
    "id": "animatopia_fang_charm",
    "name": "Howler's Echo Charm",
    "description": "This crudely carved charm is made from the fang of a Rumblehowl, a notoriously grumpy beast. It amplifies your shouts and roars – perfect for intimidating smaller critters or just generally making a ruckus!  It’s surprisingly effective at scaring off nocturnal predators too.",
    "category": "curiosities",
    "price": 670,
    "icon": "🐺",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increases shout volume by 20%",
      "chance to frighten enemy (10%)",
      "minor resistance to fear effects"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_parrot",
    "levelRequirement": 5
  },
  "animatopia_spirit_blade": {
    "id": "animatopia_spirit_blade",
    "name": "Echo of the Ancestors",
    "description": "Forged by master smiths in a forgotten tribe, this blade hums with the spirits of Animatopia's ancient protectors. It doesn’t deal huge damage, but it whispers tactical advice to its wielder...mostly about eating berries and avoiding grumpy bears.",
    "category": "equipment",
    "price": 3200,
    "icon": "⚔️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals 1d6 slashing damage + 1 per proficiency bonus",
      "chance to gain tactical advice (5%) - often useless",
      "advantage on perception checks involving animal tracks"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 8
  },
  "animatopia_godly_spirit_amulet": {
    "id": "animatopia_godly_spirit_amulet",
    "name": "Heart of the Great Howl",
    "description": "Recovered from a sacred Rumblehowl burial ground, this amulet pulses with primal energy. Wearing it grants you unnerving resilience and a surprisingly calming effect... mostly because the Rumblehowls approve of your existence!  Don’t worry, they don't bite... much.",
    "category": "premium",
    "price": 710000,
    "icon": "🐾",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "grants +4 to saving throws against fear and charm effects",
      "chance to heal 1d6 HP per round (5%)",
      "increased movement speed by 10%"
    ],
    "vendor": "forest_market",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 20
  },
  "connectopia_rusty_gear": {
    "id": "connectopia_rusty_gear",
    "name": "Overgeared Gizmo",
    "description": "This suspiciously complex gear seems to be built from scrap and pure stubbornness. It might not actually *do* anything, but it looks really cool and gives you a tiny boost... probably.",
    "category": "equipment",
    "price": 100,
    "icon": "⚙️",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_strength_1",
      "chance_of_critical_hit_5%"
    ],
    "vendor": "block_smith",
    "shippedBy": "Block Courier",
    "levelRequirement": 3
  },
  "connectopia_void_resonator": {
    "id": "connectopia_void_resonator",
    "name": "Nullity Amplifier",
    "description": "This device hums with unsettling silence. It’s rumored to briefly disrupt the flow of reality, causing minor chaos and attracting unwanted attention from… well, nobody really knows what's out there. Use at your own risk!",
    "category": "forbidden",
    "price": 8300,
    "icon": "🌌",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "chance_to_silence_enemies_20%",
      "reduce_enemy_attack_damage_5%"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Shadow Delivery",
    "levelRequirement": 12
  },
  "doughnut_hole_gravity_boots": {
    "id": "doughnut_hole_gravity_boots",
    "name": "Voidwalker's Boots",
    "description": "These boots seem to defy the laws of physics, allowing you to briefly manipulate local gravity! Stomp down and float a few feet, or reverse the effect for a surprisingly effective trip hazard. Just try not to fall into another dimension – it’s happened before.",
    "category": "equipment",
    "price": 8300,
    "icon": "🚀",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant_gravity_manipulation_2s",
      "increase_jump_height_1",
      "reduce_fall_damage_50"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_mail",
    "levelRequirement": 9
  },
  "doughnut_hole_anomaly_compass": {
    "id": "doughnut_hole_anomaly_compass",
    "name": "The Center's Whisper",
    "description": "This compass doesn't point north, it points… towards the center. It’s wildly unreliable but occasionally leads you to bizarre anomalies – maybe a pocket dimension filled with sentient sprinkles or a portal to last Tuesday! Don’t blame us if you end up trapped.",
    "category": "curiosities",
    "price": 3200,
    "icon": "🧭",
    "stock": 35,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_to_teleport_to_random_location",
      "reveal_nearby_hidden_object_10%",
      "detects_void_energy_50m"
    ],
    "vendor": "center_seller",
    "shippedBy": "wormhole_express",
    "levelRequirement": 6
  },
  "doughnut_hole_mythic_singularity_donut": {
    "id": "doughnut_hole_mythic_singularity_donut",
    "name": "The Zero Point Delight",
    "description": "Legend says this donut contains a miniature singularity. Consume it with caution! It might grant you incredible power, or simply cause your atoms to rearrange themselves into a slightly different shape. We are not responsible for existential crises.",
    "category": "premium",
    "price": 43000,
    "icon": "🍩",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "random_stat_boost_level_6",
      "chance_to_create_small_void_bubble",
      "immunity_to_gravity_15s",
      "chance_to_become_temporarily_weightless"
    ],
    "vendor": "void_vendor",
    "shippedBy": "chronal_delivery",
    "levelRequirement": 20
  },
  "the_edge_ironclad_banner": {
    "id": "the_edge_ironclad_banner",
    "name": "Crimson Resolve",
    "description": "A banner forged from the solidified screams of those lost to The Edge. It radiates an aura of grim determination, bolstering your party's will and resilience – perfect for facing truly terrifying foes!",
    "category": "equipment",
    "price": 8300,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "morale +3 for 5 rounds",
      "resistance to charm effects for 4 rounds",
      "+2 AC against creatures of the abyss"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "aerial_drone",
    "levelRequirement": 10
  },
  "the_edge_voidwalker_token": {
    "id": "the_edge_voidwalker_token",
    "name": "Fragment of the Shifting Plane",
    "description": "A shimmering token pulsing with chaotic energy, this artifact allows brief passage through thin rifts in reality. Use it wisely - stepping too far risks being lost forever!",
    "category": "faction",
    "price": 720000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "teleport to a random location within 30 feet (once per day)",
      "+5 to saving throws against teleportation effects",
      "chance of attracting void entities (1%)"
    ],
    "vendor": "final_shop",
    "shippedBy": "void_messenger",
    "levelRequirement": 28
  },
  "leclaire_isle_sticky_surprise": {
    "id": "leclaire_isle_sticky_surprise",
    "name": "Sticky Surprise Dough Bomb",
    "description": "This deceptively delightful dough bomb explodes with sugary sweetness upon impact! It's guaranteed to stick to your enemies... and maybe you, too. A favorite among mischievous Dough Folk.",
    "category": "consumables",
    "price": 3200,
    "icon": "💣",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "deals 50-80 bludgeoning damage",
      "applies sticky status (reduces movement speed)",
      "chance to inflict a sugar rush (temporary increase in stats)"
    ],
    "vendor": "dough_depot",
    "shippedBy": "wagon",
    "levelRequirement": 6
  },
  "leclaire_isle_golden_whisk": {
    "id": "leclaire_isle_golden_whisk",
    "name": "Golden Whisk of Ever-Baking",
    "description": "Crafted from solidified starlight and enchanted dough, this whisk never runs out of power! Use it to instantly bake any ingredient into a delicious treat – or a fiery explosion, if you're feeling particularly chaotic.",
    "category": "equipment",
    "price": 8300,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases cooking speed by 50%",
      "chance to create a beneficial buff on consumed food",
      "can be used as a weapon dealing 30-60 radiant damage",
      "grants +2 to crafting skill"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "leclaire_isle_sweet_illusion": {
    "id": "leclaire_isle_sweet_illusion",
    "name": "Sweet Illusion Amulet",
    "description": "This shimmering amulet projects an irresistible illusion of delectable pastries – perfect for distracting guards or luring unsuspecting adventurers into a sticky situation! Beware, though; prolonged use may lead to uncontrollable cravings.",
    "category": "curiosities",
    "price": 52000,
    "icon": "🍬",
    "stock": 33,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "creates a visual illusion of food",
      "chance to confuse enemies (reduces accuracy)",
      "provides +1 to persuasion skill when offering treats",
      "grants resistance to poison"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "night_only",
    "levelRequirement": 15
  },
  "midlands_item_shadow_shard": {
    "id": "midlands_item_shadow_shard",
    "name": "Fragment of the Obsidian Eye",
    "description": "A pulsing shard of obsidian, rumored to be a fragment from an ancient artifact that once granted its wielder terrifying visions. It feels strangely warm to the touch and whispers unsettling secrets… mostly about Wario's bad fashion choices.",
    "category": "curiosities",
    "price": 3200,
    "icon": "🔮",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_cause_confusion",
      "detects_hidden_objects",
      "increased_luck"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "hawk",
    "levelRequirement": 8
  },
  "midlands_item_bloodstone_amulet": {
    "id": "midlands_item_bloodstone_amulet",
    "name": "Amulet of the Crimson Pact",
    "description": "This dark amulet pulses with a sickly red light. Legend says it was forged in the blood of fallen soldiers and grants its wearer limited control over shadows… and potentially, minor demonic possession.  Don't say I didn’t warn you.",
    "category": "forbidden",
    "price": 3200,
    "icon": "🩸",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grant_shadow_step",
      "chance_to_deal_dark_damage",
      "resistance_to_fear"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "raven",
    "levelRequirement": 12
  },
  "kivotos_item_chrono_shifter": {
    "id": "kivotos_item_chrono_shifter",
    "name": "Temporal Tickle",
    "description": "This bizarre device looks like a student's discarded homework project, but when activated, it briefly slows down time around you – perfect for snatching snacks or escaping awkward conversations! Wario says it’s 'surprisingly effective,' though he mostly used it to avoid detention.",
    "category": "consumables",
    "price": 3200,
    "icon": "⏳",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "slows time by 10% for 3 seconds",
      "chance to gain minor luck boost (5%)",
      "reduces cooldown of next ability by 1"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 7
  },
  "kivotos_item_halo_amplifier": {
    "id": "kivotos_item_halo_amplifier",
    "name": "Halo Harmonizer",
    "description": "A beautifully crafted device, seemingly built by a zealous student club. This gadget subtly amplifies the power of halos worn by those nearby, creating a shimmering aura and boosting their magical abilities. Wario suspects it’s mostly for show, but hey, extra magic is always good!",
    "category": "equipment",
    "price": 8300,
    "icon": "✨",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases halo magic damage by 20%",
      "grants a small shield effect (absorbs 50 damage)",
      "chance to stun enemies with radiant energy"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Magical Courier",
    "levelRequirement": 10
  },
  "kivotos_item_phantom_notes": {
    "id": "kivotos_item_phantom_notes",
    "name": "Echoing Scribbles",
    "description": "These mysterious notes appear to shift and change with every glance! Touching them briefly reveals glimpses of forgotten memories, potentially offering clues or minor buffs – though Wario insists they mostly just make him dizzy. Don't stare for too long; you might see your future!",
    "category": "curiosities",
    "price": 100,
    "icon": "📝",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to reveal hidden information (2%)",
      "small chance to inflict confusion on a single enemy",
      "provides minor intelligence boost for 60 seconds"
    ],
    "vendor": "club_supply",
    "shippedBy": "Standard Post",
    "levelRequirement": 3
  },
  "middle_earth_goblin_grease": {
    "id": "middle_earth_goblin_grease",
    "name": "Goblin Grease - Guaranteed Slippery!",
    "description": "This suspiciously shiny sludge is rumored to be favored by goblins for lubricating their... well, everything. Apply liberally and watch your enemies slip and slide into a delicious defeat!  It's surprisingly effective on armor and weapons too – maybe *too* effective.",
    "category": "consumables",
    "price": 100,
    "icon": "🛢️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "apply_grease_effect:2",
      "chance_to_slip:10",
      "reduce_armor_effectiveness:1"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 3
  },
  "middle_earth_ancient_rune": {
    "id": "middle_earth_ancient_rune",
    "name": "Whispers of the Old Kings",
    "description": "A curiously intact rune stone pulsating with a faint, unsettling energy. Touching it brings flashes of forgotten battles and cryptic prophecies – mostly about grumpy dwarves and misplaced treasures. Don’t stare at it for too long, or you might start craving root vegetables.",
    "category": "curiosities",
    "price": 670,
    "icon": "🔮",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_insight:5",
      "chance_of_prophecy:10",
      "minor_luck_boost:2"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_message",
    "levelRequirement": 5
  },
  "middle_earth_dwarven_hammer_shard": {
    "id": "middle_earth_dwarven_hammer_shard",
    "name": "The Heart of Grong's Fury",
    "description": "A jagged shard of a legendary dwarven warhammer, said to have been wielded by the fearsome Grong Stonebeard himself. Holding it fills you with an almost uncontrollable urge to smash things - especially poorly crafted goblin weaponry.  Just try not to break anything *too* important.",
    "category": "equipment",
    "price": 3200,
    "icon": "🔨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increase_strength:8",
      "chance_to_stun:5",
      "damage_against_undead:10"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_worm",
    "levelRequirement": 7
  },
  "equestria_item_sparkling_mane_potion": {
    "id": "equestria_item_sparkling_mane_potion",
    "name": "Sparkling Mane Potion",
    "description": "Feeling a little…dull? This shimmering potion instantly revives your mane and tail, adding a dazzling sparkle for a short time! It’s perfect for impressing the Princesses or just looking fabulous.",
    "category": "consumables",
    "price": 670,
    "icon": "✨",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores 10 health",
      "increases charisma by 3 for 3 turns",
      "adds a shimmer effect to the character's appearance"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "pony_express",
    "levelRequirement": 4
  },
  "equestria_item_canterlot_royal_badge": {
    "id": "equestria_item_canterlot_royal_badge",
    "name": "Canterlot Royal Badge",
    "description": "A gleaming badge of honor, forged by the finest artisans in Canterlot. Wearing this symbol demonstrates unwavering loyalty to the Princesses and grants a small boon to your diplomatic skills.",
    "category": "faction",
    "price": 3200,
    "icon": "👑",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grants +5 reputation with the Kingdom of Equestria",
      "increases persuasion checks by 2",
      "provides resistance to fear effects"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_guard_delivery",
    "levelRequirement": 7
  },
  "equestria_item_grumbleweed_root": {
    "id": "equestria_item_grumbleweed_root",
    "name": "Grumbleweed Root",
    "description": "This strangely bitter root is said to grow only in the darkest corners of Ponyville. When properly prepared, it can temporarily disrupt magical enchantments… or make you feel REALLY grumpy.",
    "category": "curiosities",
    "price": 8400,
    "icon": "🌿",
    "stock": 33,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "disrupts magical effects with a 25% chance",
      "has a small chance to inflict disadvantage on enemy spellcasting rolls",
      "reduces the user's charisma by 1 (temporary)"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 10
  },
  "grand_country_shimmering_shard": {
    "id": "grand_country_shimmering_shard",
    "name": "Echoing Shard of the Fallen Peak",
    "description": "This jagged piece of crystallized gravity seems to whisper with forgotten echoes. Holding it briefly grants a momentary boost in climbing speed and perception, but prolonged exposure induces unsettling vertigo – Wario would *love* this!",
    "category": "equipment",
    "price": 3200,
    "icon": "💎",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_climbing_speed_2",
      "grant_insight_1",
      "vertigo_3"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Winged Courier",
    "levelRequirement": 8
  },
  "grand_country_wormhole_lantern": {
    "id": "grand_country_wormhole_lantern",
    "name": "Dimensional Flicker Lantern",
    "description": "A bizarre lantern constructed from layered rock and swirling energy. When lit, it briefly creates a small, unstable wormhole – perfect for quick escapes or retrieving dropped items… mostly.",
    "category": "curiosities",
    "price": 8400,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "teleport_short_range_3",
      "chance_to_summon_small_monster",
      "minor_confusion_5"
    ],
    "vendor": "layer_market",
    "shippedBy": "Rope Delivery",
    "levelRequirement": 12
  },
  "grand_country_forbidden_gravity_stone": {
    "id": "grand_country_forbidden_gravity_stone",
    "name": "The Unraveler's Core",
    "description": "A pulsing, obsidian stone radiating chaotic gravity. This item is rumored to have been crafted by a deranged dimension-traveler – handle with extreme caution!  It might just make everything fall apart… and Wario loves chaos!",
    "category": "forbidden",
    "price": 400000,
    "icon": "💥",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "randomize_gravity_field",
      "chance_to_create_black_hole",
      "disorient_target_7",
      "temporary_invulnerability_10"
    ],
    "vendor": "side_seller",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 22
  },
  "connectopia_reinforced_plate": {
    "id": "connectopia_reinforced_plate",
    "name": "Pioneer's Bulwark",
    "description": "Forged from salvaged block plating and reinforced with a surprisingly effective magnetic sealant, this plate offers decent protection against blunt attacks. Don’t expect miracles though; it's not exactly stylish.",
    "category": "equipment",
    "price": 670,
    "icon": "🛡️",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increases armor class by 2",
      "chance to deflect projectiles (10%)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Block Courier",
    "levelRequirement": 5
  },
  "connectopia_temporal_beacon": {
    "id": "connectopia_temporal_beacon",
    "name": "Chronometric Resonance Device",
    "description": "This sleek device allows for a short-range temporal shift – perfect for quickly moving items or escaping sticky situations! Be warned: overuse may cause minor paradoxes, like suddenly craving turnips. Wario doesn't endorse reckless time travel.",
    "category": "premium",
    "price": 3200,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "teleports the user up to 10 feet in any direction",
      "chance to rewind time by 3 seconds (2%)",
      "slows down enemy attacks for 1 second"
    ],
    "vendor": "block_smith",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 8
  },
  "doughnut_hole_gravity_slip": {
    "id": "doughnut_hole_gravity_slip",
    "name": "Void-Sucking Donut",
    "description": "This suspiciously shiny donut seems to attract small objects – and unfortunate adventurers! Eating it grants a temporary boost to your jump height, but beware of unexpected gravitational shifts.",
    "category": "consumables",
    "price": 670,
    "icon": "🍩",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "jump_height +3",
      "chance to attract small objects (10%)",
      "temporary disorientation (-2) for 3 turns"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 6
  },
  "doughnut_hole_anomaly_shard": {
    "id": "doughnut_hole_anomaly_shard",
    "name": "Singularity Stone Fragment",
    "description": "A pulsing fragment ripped from the heart of a miniature black hole. Handle with extreme caution – prolonged contact can cause… interesting distortions in your personal space.",
    "category": "equipment",
    "price": 3200,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "resistance to gravity effects",
      "chance to teleport (5%)",
      "increased critical hit chance (10%)"
    ],
    "vendor": "center_seller",
    "shippedBy": "Warped Courier",
    "levelRequirement": 8
  },
  "doughnut_hole_void_crumb": {
    "id": "doughnut_hole_void_crumb",
    "name": "Echoing Pastry Piece",
    "description": "A crumb of a forgotten donut, radiating with the chilling whispers of lost realities. Consume this quickly to briefly glimpse unsettling echoes of potential futures.",
    "category": "consumables",
    "price": 100,
    "icon": "👻",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "reveal hidden passages (chance 20%)",
      "briefly see a possible future outcome (1 turn)",
      "temporary madness (-3) for 1 turn"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Black Hole Delivery",
    "levelRequirement": 4
  },
  "connectopia_rusty_wrench": {
    "id": "connectopia_rusty_wrench",
    "name": "Wario's Block Buster",
    "description": "This wrench was forged from scrap metal and pure stubbornness! It’ll help you loosen those pesky blocks, smash through obstacles, and probably cause a little chaos. Just don't blame me when it explodes.",
    "category": "equipment",
    "price": 670,
    "icon": "🔧",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "damage: 3-5 bludgeoning",
      "chance to trigger block collapse",
      "increased mining speed"
    ],
    "vendor": "block_smith",
    "shippedBy": "Block Cart",
    "levelRequirement": 6
  },
  "connectopia_pioneer_badge": {
    "id": "connectopia_pioneer_badge",
    "name": "Badge of the Steadfast Pioneer",
    "description": "Awarded to those brave enough to carve a life out of this blocky wasteland! This badge will boost your reputation with the Pioneer Post and maybe even get you a free crate of supplies. Don’t lose it, or you'll be sleeping with the bots!",
    "category": "faction",
    "price": 3200,
    "icon": "🤠",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases reputation with Pioneer Post",
      "chance to receive free supplies",
      "small bonus to survival skill"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Carrier Pigeon",
    "levelRequirement": 6
  },
  "connectopia_hyperdrive_core": {
    "id": "connectopia_hyperdrive_core",
    "name": "Wario's Velocity Stabilizer",
    "description": "This core crackles with unstable energy – handle with extreme caution! It’ll drastically boost your movement speed and make you a blur of block-smashing mayhem. Just don't get stuck in a time loop... or anything.",
    "category": "equipment",
    "price": 8400,
    "icon": "🚀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased movement speed",
      "chance to trigger a small explosion",
      "temporary boost to agility"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 12
  },
  "almost_edge_item_chronal_shards": {
    "id": "almost_edge_item_chronal_shards",
    "name": "Echoes of the Void",
    "description": "These shimmering fragments pulse with distorted time, remnants of realities that slipped through the edge. Collecting them grants a fleeting glimpse into potential futures... or horrifying pasts. Just don't stare for too long, you might forget where *you* are.",
    "category": "curiosities",
    "price": 3200,
    "icon": "⏳",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to grant +3 temporal resistance for 6 turns",
      "small chance to cause temporary confusion (10%)",
      "grants a single use of 'Phase Shift' ability (level 5)"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 6
  },
  "almost_edge_item_liminal_whisper": {
    "id": "almost_edge_item_liminal_whisper",
    "name": "The Static's Embrace",
    "description": "A small, intricately carved wooden box that hums with unsettling silence. Opening it reveals a cascade of fragmented thoughts and half-remembered dreams – perfect for unnerving your enemies... or yourself. Careful not to let the whispers consume you.",
    "category": "consumables",
    "price": 670,
    "icon": "🔊",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 psychic damage to a single target on use",
      "chance to inflict 'Fear' status effect (20%)",
      "restores 5 sanity points"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 4
  },
  "almost_edge_item_service_memory_scan": {
    "id": "almost_edge_item_service_memory_scan",
    "name": "Cognitive Calibration",
    "description": "The Edge Wanderer's latest invention! This device gently probes your mind, identifying lingering trauma or forgotten skills. It’s a bit unsettling, but incredibly effective for unlocking dormant potential... and occasionally dredging up embarrassing childhood memories.",
    "category": "services",
    "price": 8400,
    "icon": "🧠",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grants +4 to one chosen skill for 8 turns",
      "chance to reveal hidden quest information (30%)",
      "restores 10 sanity points and removes one minor negative status effect"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Temporal Delivery System",
    "levelRequirement": 9
  },
  "midlands_item_chronometer_of_delay": {
    "id": "midlands_item_chronometer_of_delay",
    "name": "Temporal Tick-Tock Device",
    "description": "A wonderfully complicated clockwork device, rumored to subtly slow down time for the user. Perfect for escaping awkward conversations or...well, anything you might need a little extra time for. Wario would totally use this for getting more coins!",
    "category": "equipment",
    "price": 3200,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "slow_enemy_attack_speed",
      "increase_user_evasion",
      "grant_temporary_time_dilation"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "magical_portal",
    "levelRequirement": 6
  },
  "midlands_item_divine_scroll_of_fortune": {
    "id": "midlands_item_divine_scroll_of_fortune",
    "name": "The Oracle's Whispers (Probably)",
    "description": "A beautifully illuminated scroll, supposedly containing prophecies from a minor deity. Don’t expect grand pronouncements - mostly it just tells you that your socks are mismatched and to invest in turnips. Still, the divine energy feels... comforting?",
    "category": "premium",
    "price": 720000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "chance_to_receive_powerful_prophecy",
      "grant_temporary_divine_protection",
      "increase_luck_stat",
      "small_healing_effect"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "winged_serpent",
    "levelRequirement": 20
  },
  "internet_glitch_worm": {
    "id": "internet_glitch_worm",
    "name": "Data Corruption Worm",
    "description": "This pulsating, iridescent worm seems to crawl out of your screen! It’s a concentrated dose of digital chaos – watch as enemies' spells glitch and their armor momentarily phases out.  Don't worry, it's totally safe... probably.",
    "category": "consumables",
    "price": 3200,
    "icon": "🐛",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals 50-100 fire damage on a single target",
      "chance to inflict 'lag' (slows enemy movement by 30%)",
      "restores 10% mana"
    ],
    "vendor": "data_dealer",
    "shippedBy": "packet_delivery",
    "levelRequirement": 6
  },
  "internet_meme_amulet": {
    "id": "internet_meme_amulet",
    "name": "Distracted Boyfriend Amulet",
    "description": "This amulet subtly shifts your perception, creating a momentary distraction for those around you. Watch as foes momentarily lose focus, leaving them vulnerable to attack. Just don’t stare at anyone else for too long.",
    "category": "equipment",
    "price": 43000,
    "icon": "👀",
    "stock": 18,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to cause enemies to attack the wrong target (30%)",
      "increases charisma by 5 for 6 turns",
      "grants +2 to dodge chance"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "fiber_optic",
    "levelRequirement": 18
  },
  "internet_godly_data_core": {
    "id": "internet_godly_data_core",
    "name": "The Source of All Memes",
    "description": "This pulsating core is said to be the very heart of the internet - a nexus of viral trends and forgotten cat videos. Touching it grants temporary mastery over the digital realm, but beware – prolonged exposure can lead to existential dread… or just an overwhelming urge to watch puppy videos.",
    "category": "premium",
    "price": 730000,
    "icon": "💻",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "restores all stats",
      "grants immunity to digital curses and viruses",
      "chance to instantly duplicate any consumable item",
      "increases party wisdom by 10 for 24 hours"
    ],
    "vendor": "cyber_market",
    "shippedBy": "quantum_tunnel",
    "levelRequirement": 35
  },
  "animatopia_jungle_charm": {
    "id": "animatopia_jungle_charm",
    "name": "Primal Howler Charm",
    "description": "This crudely carved charm, made from a giant beetle shell and strung on vine, vibrates with the ancient energy of Animatopia. Worn around the neck, it grants the wearer increased intimidation while in dense jungle terrain – perfect for scaring off pesky grubs!",
    "category": "curiosities",
    "price": 5400,
    "icon": "🐾",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased intimidation (level 1)",
      "small chance to frighten enemies",
      "boosts jungle movement speed by 10%"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "vine_messenger",
    "levelRequirement": 6
  },
  "animatopia_stone_golem_shard": {
    "id": "animatopia_stone_golem_shard",
    "name": "Fragment of the Stone Guardian",
    "description": "A jagged piece chipped from a massive stone golem that once protected the sacred grove. This shard pulses with residual earth magic, granting limited defensive abilities – just don't try to hug it!",
    "category": "equipment",
    "price": 8400,
    "icon": "🗿",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases armor class by 3",
      "chance to deflect incoming projectiles (10%)",
      "grants resistance to earth damage"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "rock_carrier",
    "levelRequirement": 10
  },
  "animatopia_legendary_spirit_lantern": {
    "id": "animatopia_legendary_spirit_lantern",
    "name": "Whispering Lantern of the Elders",
    "description": "This lantern, crafted from polished bone and filled with shimmering spirit dust, faintly whispers secrets from Animatopia's ancient past. Holding it allows you to briefly communicate with the echoes of forgotten spirits – but don’t ask them about Wario!",
    "category": "premium",
    "price": 52000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "allows communication with spirit echoes (limited use)",
      "chance to reveal hidden pathways",
      "provides a small bonus to perception checks",
      "increases charisma by 5"
    ],
    "vendor": "forest_market",
    "shippedBy": "owl_delivery",
    "levelRequirement": 18
  },
  "mushroom_kingdom_greed_scroll": {
    "id": "mushroom_kingdom_greed_scroll",
    "name": "Wario's Secret Recipe",
    "description": "An ancient scroll detailing the recipe for Wario’s legendary Golden Coin Pudding. This potent concoction grants temporary resistance to charming effects and a surprisingly large urge to hoard shiny objects… It might also attract unwanted attention from grumpy treasure goblins.",
    "category": "curiosities",
    "price": 3200,
    "icon": "💰",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant resistance to charm effects for 10 seconds",
      "increase gold found by 20% for 30 seconds",
      "chance to gain a 'greed' debuff - increased item value perception"
    ],
    "vendor": "wario_direct",
    "shippedBy": "snail_express",
    "levelRequirement": 8
  },
  "mushroom_kingdom_dark_artifact": {
    "id": "mushroom_kingdom_dark_artifact",
    "name": "The Soul Snatcher's Shard",
    "description": "A fragment of a long-lost artifact capable of briefly draining the life force from nearby creatures. Handle with extreme caution – prolonged exposure may result in spontaneous combustion or an overwhelming desire to collect dust bunnies. This item is…strictly forbidden.",
    "category": "forbidden",
    "price": 3200,
    "icon": "💀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "drain target's health over time",
      "chance to inflict 'weakness' status effect for 5 seconds",
      "risk of self-damage if held too long"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_delivery",
    "levelRequirement": 12
  },
  "faerun_item_potion_of_grizzly_grumbles": {
    "id": "faerun_item_potion_of_grizzly_grumbles",
    "name": "Potion of Grizzly Grumbles",
    "description": "This murky green potion smells faintly of wet fur and frustrated roars. Drinking it will temporarily imbue you with the stubborn tenacity of a grizzly bear... or at least make you *think* you're a grizzly bear. Side effects may include excessive grumbling.",
    "category": "consumables",
    "price": 100,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "restores_health_30",
      "temporary_strength +2",
      "grumbling_sound_effect"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 1
  },
  "faerun_item_amulet_of_forgotten_omens": {
    "id": "faerun_item_amulet_of_forgotten_omens",
    "name": "Amulet of Forgotten Omens",
    "description": "This tarnished silver amulet feels strangely cold to the touch. It seems to whisper fragmented prophecies and unsettling visions – mostly about Wario's next scheme, apparently.  Beware, prolonged use may lead to an uncontrollable urge to hoard shiny objects!",
    "category": "curiosities",
    "price": 52000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "chance_to_gain_visions",
      "increased_luck",
      "attracts_unwanted_attention",
      "boosts_Wario_fanboying"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 18
  },
  "faerun_item_silverwood_amulet": {
    "id": "faerun_item_silverwood_amulet",
    "name": "Amulet of the Whispering Woods",
    "description": "Crafted from ancient Silverwood, this amulet faintly whispers secrets carried on the wind. It grants a subtle advantage in wilderness survival, and occasionally offers cryptic advice - mostly about avoiding Wario's traps.",
    "category": "equipment",
    "price": 8500,
    "icon": "🌳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases stealth by 2",
      "grants advantage on survival checks in forests",
      "chance to hear a cryptic warning (5%)"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying carpet",
    "levelRequirement": 10
  },
  "faerun_item_guildmaster_badge": {
    "id": "faerun_item_guildmaster_badge",
    "name": "Dwarven Guildmaster's Recognition",
    "description": "Officially bestowed by the Stonebeard Clan, this badge signifies respect and access to exclusive dwarven trade routes. It’s a hefty piece of jewelry, guaranteed to impress – or at least intimidate – anyone you meet. Wario thinks it looks shiny!",
    "category": "faction",
    "price": 44000,
    "icon": "💎",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grants access to dwarven trade routes",
      "provides a discount at all dwarven shops",
      "increases reputation with the Stonebeard Clan"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 18
  },
  "animatopia_spirit_weave": {
    "id": "animatopia_spirit_weave",
    "name": "Spirit Weave Offering Bowl",
    "description": "A beautifully crafted bowl made from woven forest vines and shimmering beetle wings. This is a sacred vessel for appeasing the spirits of Animatopia, offering it to them grants blessings and guidance – mostly towards finding lost berries. Don’t be surprised if you hear whispers in response!",
    "category": "services",
    "price": 44000,
    "icon": "🌿",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to gain a blessing (random effect)",
      "increases wisdom by 10 for 30 minutes",
      "provides temporary resistance to fear effects",
      "reveals hidden pathways"
    ],
    "vendor": "forest_market",
    "shippedBy": "Giant Spider Carrier",
    "levelRequirement": 20
  },
  "animatopia_warrior_mask": {
    "id": "animatopia_warrior_mask",
    "name": "Mask of the Primal Howler",
    "description": "This intimidating mask, crafted from hardened rhino hide and adorned with razor-sharp bone fragments, embodies the raw power of Animatopia's fiercest warriors. Wearing it grants you a primal rage and boosts your combat abilities - perfect for smashing things!",
    "category": "equipment",
    "price": 8500,
    "icon": "🦁",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+3 attack damage",
      "chance to inflict bleeding on hit",
      "increases strength by 5 for one round",
      "grants resistance to poison"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Rattlesnake Express",
    "levelRequirement": 10
  },
  "earth_land_goblin_grease": {
    "id": "earth_land_goblin_grease",
    "name": "Sticky Goblin Goo",
    "description": "This suspiciously bright green paste was apparently harvested from the goblin sewers – it's incredibly sticky and smells faintly of rotten turnips! Apply liberally to your weapons for a surprisingly effective (and messy) buff.",
    "category": "consumables",
    "price": 110,
    "icon": "🟢",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "weapon_damage_increase_1",
      "chance_to_apply_poison_3%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "horseback",
    "levelRequirement": 5
  },
  "earth_land_ancient_rune_tablet": {
    "id": "earth_land_ancient_rune_tablet",
    "name": "Runic Tablet of the Silent Guardians",
    "description": "A weathered stone tablet covered in cryptic runes. Touching it briefly grants a fleeting whisper of forgotten knowledge and a vague sense of unease – probably best not to stare at it for too long! This tablet might be useful when facing a powerful dragon.",
    "category": "curiosities",
    "price": 8500,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_reveal_hidden_secrets_5%",
      "temporary_buff_wisdom_2"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "kivotos_item_chronometric_pendulum": {
    "id": "kivotos_item_chronometric_pendulum",
    "name": "Temporal Tick Tocker",
    "description": "This strangely accurate pendulum seems to subtly warp time around it! Wringing it with a focused mind might grant you a brief moment of enhanced reaction speed, or perhaps a tiny rewind – just don't try to undo that last bad decision!",
    "category": "equipment",
    "price": 3200,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_reaction_speed_5",
      "minor_time_rewind_3",
      "chance_to_negate_damage_10%"
    ],
    "vendor": "academy_armory",
    "shippedBy": "express_delivery",
    "levelRequirement": 8
  },
  "kivotos_item_halo_of_dedication": {
    "id": "kivotos_item_halo_of_dedication",
    "name": "The Scholar's Spark",
    "description": "A shimmering halo forged from concentrated student energy! Wearing this grants you an uncanny focus, boosting your learning abilities and even making tedious tasks surprisingly enjoyable – though it *does* occasionally cause uncontrollable urges to organize things alphabetically.",
    "category": "curiosities",
    "price": 45000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increased_skill_gain_25%",
      "reduced_fatigue_50%",
      "chance_to_disarm_enemies_20%"
    ],
    "vendor": "club_supply",
    "shippedBy": "winged_messenger",
    "levelRequirement": 16
  },
  "kivotos_item_vortex_scroll": {
    "id": "kivotos_item_vortex_scroll",
    "name": "Dimensional Scribbles",
    "description": "This scroll seems to shift and shimmer with impossible geometries. When unfurled, it briefly creates a localized vortex – perfect for escaping awkward conversations or retrieving dropped items! Just be careful not to accidentally pull in your entire party.",
    "category": "premium",
    "price": 110,
    "icon": "🌀",
    "stock": 33,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "teleport_short_range_5m",
      "chance_to_disrupt_enemy_attacks_10%",
      "small_area_of_effect_stun_1s"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 3
  },
  "doughnut_hole_singing_donut": {
    "id": "doughnut_hole_singing_donut",
    "name": "Resonance Ring Donut",
    "description": "This strangely pulsating donut hums with the energy of The Doughnut Hole! It vibrates slightly, causing nearby enemies to momentarily lose their grip on reality – a truly delicious disruption.",
    "category": "consumables",
    "price": 3200,
    "icon": "🍩",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 psychic damage to target",
      "target has a 20% chance to be stunned for one round",
      "restores 5 sanity points"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Wormhole",
    "levelRequirement": 6
  },
  "doughnut_hole_gravity_stone": {
    "id": "doughnut_hole_gravity_stone",
    "name": "Centrifugal Shard",
    "description": "Pulled straight from the heart of a collapsed dimension, this stone warps gravity in its immediate vicinity. Use with caution – or don't, and watch things fly around like confused pastries!",
    "category": "equipment",
    "price": 8500,
    "icon": "🌀",
    "stock": 18,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases movement speed by 10%",
      "creates a 3ft radius area of distorted gravity, slowing enemies by 50% and projectiles by 20%",
      "chance to flip targets on a successful hit (15%)"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Courier",
    "levelRequirement": 10
  },
  "doughnut_hole_anomaly_mirror": {
    "id": "doughnut_hole_anomaly_mirror",
    "name": "Reflective Echo",
    "description": "This shattered mirror doesn't reflect your image, but glimpses of alternate realities within The Doughnut Hole. Staring too long might lead to a delicious existential crisis – or just a really bad headache!",
    "category": "curiosities",
    "price": 110,
    "icon": "✨",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "provides +1 to perception checks",
      "chance to gain a temporary buff (random effect) on use",
      "can be used to briefly glimpse clues related to the void"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Drone",
    "levelRequirement": 3
  },
  "almost_edge_item_fractured_echo": {
    "id": "almost_edge_item_fractured_echo",
    "name": "Fractured Echo of the Void",
    "description": "A shimmering shard pulled from the edge, resonating with unsettling silence. Holding it for too long can cause auditory hallucinations and a desperate urge to… well, jump.",
    "category": "curiosities",
    "price": 3200,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to inflict madness on target (10%)",
      "grants +5 to insight checks",
      "reduces fear effect by 50%"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 7
  },
  "almost_edge_item_chronal_crumb": {
    "id": "almost_edge_item_chronal_crumb",
    "name": "Chronal Crumb of the Forgotten",
    "description": "A strangely preserved piece of what might once have been a clockwork pastry. Eating this crumb briefly accelerates or decelerates your personal timeline, leading to chaotic results!",
    "category": "consumables",
    "price": 670,
    "icon": "⏳",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "randomly grants +3 to attack rolls or -3 to defense for 1 round",
      "chance to age/de-age target by 1d4 rounds",
      "causes mild temporal disorientation"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal courier",
    "levelRequirement": 5
  },
  "almost_edge_item_voidwalker_badge": {
    "id": "almost_edge_item_voidwalker_badge",
    "name": "Badge of the Voidwalker (Order of the Shifting Sands)",
    "description": "This tarnished badge represents an ancient order devoted to navigating the edges. Wearing it grants a subtle connection to the void, useful for those seeking forbidden knowledge… or just looking cool.",
    "category": "faction",
    "price": 53000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "grants +2 to charisma checks with void entities",
      "chance to teleport a short distance (10%)",
      "provides resistance to psychic damage"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "dimensional courier",
    "levelRequirement": 15
  },
  "doughnut_hole_glittering_crumb": {
    "id": "doughnut_hole_glittering_crumb",
    "name": "Glittering Crumb of Unraveling",
    "description": "This crumb shimmers with an unsettling void-light, pulling at the edges of reality. Consume it to briefly defy gravity and float uncontrollably for 5 seconds - perfect for escaping sticky situations or annoying your enemies!",
    "category": "consumables",
    "price": 680,
    "icon": "✨",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_duration_effect:5s;type:gravity_manipulation;name:float"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Packet",
    "levelRequirement": 3
  },
  "doughnut_hole_chronal_boots": {
    "id": "doughnut_hole_chronal_boots",
    "name": "Chronal Boots of Temporal Slip",
    "description": "These boots are stitched from the fabric of shattered time! Each step creates a minor temporal distortion, granting you brief bursts of speed and allowing you to briefly rewind your position by 3 meters. Just don't accidentally erase yourself!",
    "category": "equipment",
    "price": 8500,
    "icon": "⏱️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant_duration_effect:10s;type:movement_speed_boost;name:temporal_dash",
      "grant_action_effect:rewind_position;range:3m"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 8
  },
  "doughnut_hole_voidstone_amulet": {
    "id": "doughnut_hole_voidstone_amulet",
    "name": "Voidstone Amulet of Null Reflection",
    "description": "Crafted from a solidified shard of the void itself, this amulet doesn't offer protection - it *absorbs* damage! When hit by an attack, the amulet reflects 50% of the damage back at the attacker... assuming they don’t immediately unravel.",
    "category": "equipment",
    "price": 53000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "on_hit_effect:reflect_damage;percentage:50",
      "grant_stat_bonus:magic_resistance;amount:25"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Gravity Wormhole",
    "levelRequirement": 16
  },
  "pokemon_item_shimmering_orb": {
    "id": "pokemon_item_shimmering_orb",
    "name": "Shimmering Orb of Evolution",
    "description": "This pulsating orb seems to hum with the energy of countless Pokémon battles! Holding it near a creature can drastically accelerate its evolution, but be warned – sometimes it chooses the *wrong* form. Wario says 'Don't blame me if your Pidgey becomes a terrifying Dragon!",
    "category": "equipment",
    "price": 8600,
    "icon": "✨",
    "stock": 25,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "boosts evolution speed by 50%",
      "chance to trigger unexpected secondary evolution",
      "increases Pokémon stats slightly",
      "causes the user to randomly speak in Pokémon cries for 1 minute"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke-drone",
    "levelRequirement": 9
  },
  "pokemon_item_trainer_scroll": {
    "id": "pokemon_item_trainer_scroll",
    "name": "Ancient Trainer Scroll Fragment",
    "description": "A crumbling piece of an ancient scroll detailing forgotten battle strategies. Studying this fragment might unlock new tactical insights, but it’s mostly just covered in weird symbols and smells faintly of berries. Wario thinks it's a good place to hide his spare coins!",
    "category": "curiosities",
    "price": 110,
    "icon": "📜",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grants a small bonus to battle strategy (1-3%)",
      "chance to discover a hidden Pokémon location",
      "provides a minor boost to trainer's charisma",
      "may cause the user to suddenly burst into song"
    ],
    "vendor": "safari_shop",
    "shippedBy": "poke-messenger",
    "levelRequirement": 3
  },
  "pokemon_item_legendary_charm": {
    "id": "pokemon_item_legendary_charm",
    "name": "Charm of the Primal Pokemon",
    "description": "A mystical charm said to be imbued with the power of the legendary Pokémon. Wearing this can summon a protective aura, but it’s prone to attracting unwanted attention from powerful beasts and grumpy trainers! Wario doesn't care; he just wants the shiny!",
    "category": "equipment",
    "price": 53000,
    "icon": "💎",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "provides a significant defense boost",
      "chance to paralyze or confuse enemies during battle",
      "increases the Pokémon's base stats by 5%",
      "attracts powerful wild Pokémon (potentially dangerous)"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_truck",
    "levelRequirement": 14
  },
  "equestria_item_rainbow_shard": {
    "id": "equestria_item_rainbow_shard",
    "name": "Rainbow Shard of Harmony",
    "description": "This pulsating shard radiates pure rainbow energy! It's rumored to contain a fragment of Princess Twilight’s magic, and holding it grants a temporary boost to your friendship abilities – mostly involving awkward hugs.",
    "category": "consumables",
    "price": 3200,
    "icon": "🌈",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases friendship by 10 for 60 seconds",
      "chance to trigger a spontaneous dance party",
      "small chance of turning the target temporarily pink"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "pony_express",
    "levelRequirement": 7
  },
  "equestria_item_starry_saddlebag": {
    "id": "equestria_item_starry_saddlebag",
    "name": "Starry Saddlebag of the Crystal Empire",
    "description": "A beautifully crafted saddlebag made from crystallized stardust! It holds an impressive amount and is magically reinforced to prevent your belongings from disappearing into another dimension – mostly.",
    "category": "equipment",
    "price": 8600,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased inventory space (+5 slots)",
      "chance to find rare gems when looting",
      "immune to minor dimensional rifts"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "royal_guard_delivery",
    "levelRequirement": 10
  },
  "equestria_item_discord_charm": {
    "id": "equestria_item_discord_charm",
    "name": "Discord's Whispered Charm",
    "description": "A tiny, unsettling charm said to have been gifted (or stolen) by Discord himself. It whispers cryptic advice and occasionally causes minor chaos in the party’s direction – Wario loves it!",
    "category": "curiosities",
    "price": 53000,
    "icon": "😈",
    "stock": 18,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance to inflict 'Confusion' on a single target",
      "reduces party accuracy by 5% for 30 seconds",
      "occasionally triggers random chaotic events (e.g., teleportation, temporary blindness)"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 14
  },
  "connectopia_pioneer_rations_omega": {
    "id": "connectopia_pioneer_rations_omega",
    "name": "Omega Rations - Pioneer's Delight!",
    "description": "These aren't your grandma’s jerky! Packed with synthesized nutrients and a surprising burst of flavor, these rations are guaranteed to keep you going through even the toughest block mining expeditions. Warning: may cause uncontrollable urges to build miniature castles.",
    "category": "consumables",
    "price": 680,
    "icon": "🍖",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restores 25 HP",
      "regenerates 10 energy",
      "provides temporary resistance to poison (30 seconds)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Mail Drone",
    "levelRequirement": 3
  },
  "connectopia_service_structural_analysis": {
    "id": "connectopia_service_structural_analysis",
    "name": "Structural Integrity Scan",
    "description": "Let the Block Smith analyze your block structures! This premium service will identify weak points, suggest reinforcement techniques, and potentially reveal hidden crafting opportunities. Don't worry, it won't judge your haphazard building style...much.",
    "category": "services",
    "price": 3200,
    "icon": "🔍",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "provides detailed analysis of block structure (instant)",
      "grants a temporary bonus to mining speed (15%)",
      "chance to discover hidden crafting recipes"
    ],
    "vendor": "block_smith",
    "shippedBy": "Mobile Analysis Unit",
    "levelRequirement": 6
  },
  "middle_earth_rusty_ring": {
    "id": "middle_earth_rusty_ring",
    "name": "Bilbo's Slightly Tarnished Ring",
    "description": "Looks suspiciously like the One Ring, but much smaller and covered in rust! This little trinket might attract unwanted attention from dark forces... or just a grumpy goblin. It’s probably best not to wear it while traveling through Mirkwood.",
    "category": "curiosities",
    "price": 3200,
    "icon": "💍",
    "stock": 78,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "chance_to_detect_orc",
      "minor_healing",
      "reduces_fear_effect"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 6
  },
  "middle_earth_map_of_shadows": {
    "id": "middle_earth_map_of_shadows",
    "name": "A Cartographer's Faded Warning",
    "description": "This ancient map depicts the paths of shadow and light across Middle-earth. It’s brittle, smells faintly of pipeweed, and might just lead you into a truly terrible predicament... or a fantastic treasure!",
    "category": "curiosities",
    "price": 110,
    "icon": "🗺️",
    "stock": 33,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "reveals_hidden_paths",
      "chance_to_find_treasure",
      "provides_lore_about_local_threats"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony",
    "levelRequirement": 3
  },
  "almost_edge_item_whispering_charm": {
    "id": "almost_edge_item_whispering_charm",
    "name": "The Edge's Silent Plea",
    "description": "A polished obsidian charm that pulses with a disconcerting warmth. Holding it brings unsettling whispers of forgotten realities and the gnawing awareness of infinite emptiness – don’t say we didn’t warn you!",
    "category": "equipment",
    "price": 3200,
    "icon": "🤫",
    "stock": 30,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increase_charisma_by_3",
      "chance_to_detect_illusions",
      "resistance_to_fear_effects",
      "passive_healing_1hp/round"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "black_raven",
    "levelRequirement": 8
  },
  "almost_edge_item_void_resonator": {
    "id": "almost_edge_item_void_resonator",
    "name": "Wario's Deluxe Distortion Device",
    "description": "This sleek, chrome device hums with unstable energy and a strangely familiar scent of burnt sugar. Use it to briefly warp reality around you – just don’t accidentally create a duplicate of yourself... or worse!",
    "category": "premium",
    "price": 680,
    "icon": "🌀",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_create_duplicate_item",
      "small_area_of_disruption",
      "increase_movement_speed_by_10%",
      "chance_to_inflict_minor_stun"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wormhole_delivery",
    "levelRequirement": 5
  },
  "middle_earth_glowing_stone": {
    "id": "middle_earth_glowing_stone",
    "name": "Heartstone of Eärendil",
    "description": "This pulsing stone hums with the light of distant stars, rumored to be fragments of Eärendil's ship. It’s surprisingly warm to the touch and seems to subtly boost your luck – perfect for avoiding goblin traps or finding that last bit of treasure!",
    "category": "curiosities",
    "price": 3200,
    "icon": "✨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "boosts luck (5%)",
      "chance to reveal hidden pathways",
      "minor illumination"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 6
  },
  "middle_earth_dwarven_battleaxe": {
    "id": "middle_earth_dwarven_battleaxe",
    "name": "Grimstone's Bite",
    "description": "Forged deep within the dwarven halls, this axe is built for smashing and bashing. It's got a satisfyingly heavy feel to it and feels like it could cleave through stone with minimal effort – just don’t accidentally chop off your own arm!",
    "category": "equipment",
    "price": 8600,
    "icon": "⚔️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased damage (10%)",
      "chance to stun enemies",
      "reduces armor rating of target"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "stone_cart",
    "levelRequirement": 9
  },
  "middle_earth_shire_favor": {
    "id": "middle_earth_shire_favor",
    "name": "Bilbo's Good Will",
    "description": "A small, intricately carved wooden box filled with honey cakes and a handwritten note from Bilbo Baggins himself. Accepting this favor will grant you the goodwill of the Shirefolk – they might just point you towards a hidden trail or offer assistance when you’re in need.",
    "category": "faction",
    "price": 110,
    "icon": "🍪",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased reputation with the Shirefolk (10%)",
      "chance to receive free goods from the Shire shopkeepers",
      "unlocks a unique questline"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 2
  },
  "animatopia_warrior_claw": {
    "id": "animatopia_warrior_claw",
    "name": "Primal Howl Claw",
    "description": "This massive claw, ripped from the mighty Stone Bear, grants its wearer a savage ferocity! It's rumored to amplify your roar into a devastating sonic attack – perfect for scaring off pesky squirrels and grumpy badgers.",
    "category": "equipment",
    "price": 8600,
    "icon": "🐾",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increase attack damage by 25%",
      "chance to inflict 'fear' on weaker enemies",
      "roar deals 10-20 sonic damage"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_beetle",
    "levelRequirement": 9
  },
  "animatopia_curiosity_spirit_stone": {
    "id": "animatopia_curiosity_spirit_stone",
    "name": "Echoing Spirit Stone",
    "description": "A smooth, grey stone pulsing with faint animal spirits. Holding it allows you to briefly communicate with the ancient guardians of Animatopia – though they're mostly just complaining about tourists.",
    "category": "curiosities",
    "price": 680,
    "icon": "🔮",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to gain a temporary buff based on spirit type",
      "allows communication with animal spirits (limited uses)",
      "provides +10 to perception checks in forested areas"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 3
  },
  "animatopia_item_lucky_feather": {
    "id": "animatopia_item_lucky_feather",
    "name": "Lucky Jungle Plum Feather",
    "description": "A vibrant, iridescent plum feather plucked from the legendary Plumwing Parrot. Legend says this feather brings unparalleled luck… mostly good for finding slightly bruised fruit and avoiding getting stepped on by enormous lumbering beasts.",
    "category": "consumables",
    "price": 110,
    "icon": "🍀",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to double item drop rate for one combat",
      "increased chance of finding rare items on treasure maps",
      "slightly increased movement speed"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_mosquito",
    "levelRequirement": 1
  },
  "faerun_item_whispering_stone": {
    "id": "faerun_item_whispering_stone",
    "name": "Whispering Stone of Prophecy",
    "description": "This smooth, grey stone seems to hum with an ancient energy. Holding it close, you might hear faint whispers… usually just about how much Wario owes the shopkeeper. Don’t blame us if it directs you into a pit of spiders!",
    "category": "curiosities",
    "price": 45000,
    "icon": "🔮",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_receive_prophetic_visions",
      "increased_luck_5%",
      "attracts_unwanted_attention",
      "vulnerability_to_wario_products"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_horse",
    "levelRequirement": 18
  },
  "faerun_item_potion_of_enhanced_guts": {
    "id": "faerun_item_potion_of_enhanced_guts",
    "name": "Potion of Enhanced Guts",
    "description": "This bubbling, crimson concoction promises to bolster your courage and stomach. Consume with caution; side effects may include temporary euphoria, an uncontrollable urge to challenge giants, and a sudden fondness for eating raw mushrooms. Wario would love this!",
    "category": "consumables",
    "price": 110,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_hitpoint_gain_20",
      "advantage_on_saving_throws_against_fear",
      "minor_increase_to_charisma"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1
  },
  "grand_country_sticky_step": {
    "id": "grand_country_sticky_step",
    "name": "Sticky Step Boots",
    "description": "These boots are made for… climbing! Each step sticks to the ground with a surprisingly strong adhesive, allowing you to scale even the slipperiest walls. Just watch out for sudden gusts of wind – they'll send you tumbling!",
    "category": "equipment",
    "price": 680,
    "icon": "🧄",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "movement_speed_boost_10%",
      "climbing_proficiency",
      "sticky_surface_grip"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "winged_beetle",
    "levelRequirement": 6
  },
  "grand_country_layered_shard": {
    "id": "grand_country_layered_shard",
    "name": "Layered Shard of Echoes",
    "description": "This crystalline shard resonates with the strange vertical layers of The Grand Country. Holding it allows you to briefly perceive echoes of past events within a small area, revealing clues or hidden passages... though sometimes the echoes are just really confusing!",
    "category": "curiosities",
    "price": 8600,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveals_hidden_objects",
      "detects_echoes_past_events",
      "short_duration_illusion_sight"
    ],
    "vendor": "layer_market",
    "shippedBy": "winding_worm",
    "levelRequirement": 10
  },
  "leclaire_isle_sticky_bun": {
    "id": "leclaire_isle_sticky_bun",
    "name": "Giant Doughnut of Delight",
    "description": "This ridiculously oversized doughnut is made with enchanted flour and packed with sugary goodness! Eating it grants temporary bursts of energy, perfect for a quick sprint or escaping a sticky situation – just try not to get covered in glaze.",
    "category": "consumables",
    "price": 110,
    "icon": "🍩",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_temporary_speed",
      "restore_health",
      "increase_stamina"
    ],
    "vendor": "dough_depot",
    "shippedBy": "dune buggy",
    "levelRequirement": 5
  },
  "leclaire_isle_pastry_charm": {
    "id": "leclaire_isle_pastry_charm",
    "name": "Doughfolk Favor Charm",
    "description": "A tiny, exquisitely crafted charm sculpted from hardened croissant dough. Wearing this brings the blessings of the Dough Folk – they seem to appreciate your appreciation for all things sweet and delicious.",
    "category": "faction",
    "price": 3200,
    "icon": "🍪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_favor_with_dough_folk",
      "chance_to_find_extra_ingredients",
      "increased_charisma_with_bakers"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "flying pastry cart",
    "levelRequirement": 8
  },
  "leclaire_isle_frosting_potion": {
    "id": "leclaire_isle_frosting_potion",
    "name": "Sweet Surprise Potion",
    "description": "This shimmering potion tastes like a thousand different pastries, and it's surprisingly potent! Upon consumption, you’ll be covered in a sticky frosting that slightly impairs your vision but also grants temporary resistance to cold damage - perfect for those chilly bakery nights.",
    "category": "consumables",
    "price": 27000,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "grant_frosting_armor",
      "slow_enemies",
      "chance_to_blind_enemy"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "giant gingerbread man",
    "levelRequirement": 10
  }
};
