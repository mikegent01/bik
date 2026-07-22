// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_071 = {
  "earth_land_dragonscale_oil": {
    "id": "earth_land_dragonscale_oil",
    "name": "Dragonscale Lubricant",
    "description": "Distilled from the shed scales of ancient dragons – don't worry, they mostly just sneeze. This shimmering oil can be applied to nearly any mechanical device, reducing friction and increasing its efficiency by a significant margin! Perfect for Wario’s latest inventions.",
    "category": "consumables",
    "price": 1200,
    "icon": "⚙️",
    "stock": 88,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases_item_durability_25%",
      "reduces_machinery_repair_cost_10%"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_snail",
    "levelRequirement": 6
  },
  "earth_land_guild_negotiation_scroll": {
    "id": "earth_land_guild_negotiation_scroll",
    "name": "Guild Negotiation Scroll",
    "description": "A meticulously crafted scroll detailing the art of persuasive bargaining, as practiced by the most cunning guild masters. Studying this scroll grants a bonus to all negotiation attempts, allowing you to secure better deals and avoid unpleasant arguments... mostly.",
    "category": "services",
    "price": 800,
    "icon": "🤝",
    "stock": 52,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "bonus_to_negotiation_skill_10%",
      "chance_to_avoid_combat_due_to_diplomacy_5%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 3
  },
  "the_edge_item_whispering_shard": {
    "id": "the_edge_item_whispering_shard",
    "name": "Whispering Shard of the Void",
    "description": "This jagged piece of obsidian hums with a chilling resonance, seemingly pulled from the endless depths. Holding it grants fleeting glimpses into impossible geometries and whispers of forgotten realities – perfect for confusing your enemies or just staring into existential dread.",
    "category": "curiosities",
    "price": 350,
    "icon": "🔮",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to inflict confusion on target for 2 turns",
      "minor chance to gain temporary madness (1 turn)",
      "provides +5 to intimidation checks"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 3
  },
  "the_edge_item_chronal_bracelet": {
    "id": "the_edge_item_chronal_bracelet",
    "name": "Chronal Bracelet of Fractured Time",
    "description": "Forged from solidified temporal energy, this bracelet allows the wearer to briefly manipulate small pockets of time around them. Use it wisely – a misstep could unravel your very existence… or just make you late for dinner.",
    "category": "equipment",
    "price": 1200,
    "icon": "⏳",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "allows the wearer to briefly rewind their position by 3 spaces",
      "chance (10%) to slow a target’s movement for one turn",
      "reduces damage taken from area-of-effect attacks by 10%"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "temporal_packet",
    "levelRequirement": 6
  },
  "the_edge_item_voidwalker_amulet": {
    "id": "the_edge_item_voidwalker_amulet",
    "name": "Voidwalker’s Echo Amulet",
    "description": "This unsettling amulet pulses with an internal darkness, drawing power from the nothingness beyond. Wearing it grants a temporary connection to the void, allowing for brief steps through shadows – but be warned, something might follow you back.",
    "category": "equipment",
    "price": 8500,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grants the ability to teleport a short distance (up to 15 feet) once per day",
      "+2 to Dexterity and Stealth skills",
      "chance (5%) to become partially invisible for 3 turns"
    ],
    "vendor": "final_shop",
    "shippedBy": "black_portal",
    "levelRequirement": 10
  },
  "grand_country_echoing_berry": {
    "id": "grand_country_echoing_berry",
    "name": "Resonance Berries of the Shifting Stones",
    "description": "These shimmering berries pulse with a faint, unsettling hum. When consumed, they grant you brief moments of heightened perception—you might hear whispers from ancient stones or even glimpse fleeting echoes of the past! Warning: prolonged use may lead to existential dread and a sudden urge to collect rocks.",
    "category": "consumables",
    "price": 250,
    "icon": "🍇",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_perception",
      "minor_healing",
      "chance_to_detect_hidden_paths"
    ],
    "vendor": "layer_market",
    "shippedBy": "winding_tunnel",
    "levelRequirement": 1
  },
  "midlands_item_forge_repair_contract": {
    "id": "midlands_item_forge_repair_contract",
    "name": "Contract of the Fractured Forge",
    "description": "A surprisingly detailed contract offered by a perpetually grumpy smith. He’ll fix your broken weapons and armor with meticulous care – assuming you can tolerate his constant complaints about the Empire's inefficiencies.",
    "category": "services",
    "price": 6500,
    "icon": "🔨",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "weapon_repair_bonus",
      "armor_repair_bonus",
      "chance_to_learn_new_crafting_recipe",
      "increased_smithing_skill"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "delivery_ox",
    "levelRequirement": 9
  },
  "the_edge_scorched_ember": {
    "id": "the_edge_scorched_ember",
    "name": "Phoenix's Breath",
    "description": "A single ember, perpetually alight with the heat of a dying star. When consumed, this fiery treat instantly restores 50 HP and provides temporary resistance to fire damage – perfect for those accidental trips into lava pools.",
    "category": "consumables",
    "price": 250,
    "icon": "🔥",
    "stock": 98,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "restore 50 HP",
      "grants temporary fire resistance (10%)",
      "chance to trigger a small burst of flame (5%)"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "hawk_delivery",
    "levelRequirement": 3
  },
  "the_edge_chronometric_bracelet": {
    "id": "the_edge_chronometric_bracelet",
    "name": "Time's Fickle Favor",
    "description": "Forged from a fragment of shattered time, this bracelet allows the wearer to briefly manipulate their personal perception of time. Use it wisely, or you might find yourself trapped in an endless loop of polishing Wario’s trophies.",
    "category": "equipment",
    "price": 12000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grants the ability to slow time by 25% for 3 turns",
      "chance to rewind a failed action (10%)",
      "increases evasion by 10%",
      "reduces movement speed by 10%"
    ],
    "vendor": "final_shop",
    "shippedBy": "portal courier",
    "levelRequirement": 7
  },
  "connectopia_pioneer_gauntlets": {
    "id": "connectopia_pioneer_gauntlets",
    "name": "Steelclad Grip Gauntlets",
    "description": "Forged from salvaged block-smithing machinery and reinforced with hardened ore, these gauntlets give the wearer a surprising amount of grip – perfect for scaling treacherous cliffs or wrestling stubborn mining bots.  Don’t worry, they don't actually *taste* like iron.",
    "category": "equipment",
    "price": 18000,
    "icon": "🧤",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases mining speed by 20%",
      "grants +3 to strength checks",
      "provides resistance to blunt damage"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "teyvat_item_elemental_sparkler": {
    "id": "teyvat_item_elemental_sparkler",
    "name": "Pyro Ignition Bomb",
    "description": "A delightfully unstable device crafted by disgruntled fire elementals. When thrown, it erupts in a dazzling display of flames – and hopefully doesn't set your eyebrows alight! Wario recommends testing this one *very* carefully.",
    "category": "consumables",
    "price": 210,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deal_fire_damage",
      "chance_to_ignite_target",
      "creates_small_area_of_fire"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swift Courier",
    "levelRequirement": 3
  },
  "teyvat_item_archon_amulet": {
    "id": "teyvat_item_archon_amulet",
    "name": "Amulet of the Vigilant Star",
    "description": "Forged by a forgotten archon, this amulet offers protection against chaotic energies. It doesn't actually *do* much, but it looks really cool and makes you feel like a hero... mostly until Wario steals your stuff.",
    "category": "equipment",
    "price": 6200,
    "icon": "⭐",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "small_armor_bonus",
      "chance_to_negate_fear",
      "slowly_regenerates_health"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Merchant's Cart",
    "levelRequirement": 8
  },
  "equestria_item_stirring_potion": {
    "id": "equestria_item_stirring_potion",
    "name": "Stirring Potion of Accelerated Mixing",
    "description": "Brewed by a disgruntled baker, this potent potion instantly speeds up any mixing process - from frosting cakes to crafting magical ingredients. Just be careful not to accidentally create an explosion of sugar and sprinkles!",
    "category": "consumables",
    "price": 850,
    "icon": "🧪",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_mixing_speed_10",
      "chance_of_sticky_fingers"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "equestria_item_legendary_celestia_mane": {
    "id": "equestria_item_legendary_celestia_mane",
    "name": "Legendary Celestia's Mane Fragment",
    "description": "A shimmering fragment of Princess Celestia’s legendary mane, said to contain the power of eternal daylight. Wearing this grants incredible resistance to darkness and a faint aura of radiant light - perfect for banishing nightmares or impressing your friends (and maybe scaring some grumpy bad guys).",
    "category": "equipment",
    "price": 65000,
    "icon": "✨",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "resistance_to_darkness_20",
      "radiant_aura_5",
      "chance_of_minor_healing"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "delivery_only",
    "levelRequirement": 16
  },
  "faerun_item_godly_shard_of_triumph": {
    "id": "faerun_item_godly_shard_of_triumph",
    "name": "Shard of Unyielding Resolve",
    "description": "This pulsating, golden shard resonates with the raw power of victory. Holding it fills you with an overwhelming urge to charge headfirst into danger – Wario would be proud!",
    "category": "equipment",
    "price": 750000,
    "icon": "🏆",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increase maximum hit points by 20",
      "grant advantage on all Charisma saving throws",
      "chance to stun enemy on critical hit (10%)",
      "immune to fear effects"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magical_portal",
    "levelRequirement": 35
  },
  "middle_earth_dwarven_battleaxe_shard": {
    "id": "middle_earth_dwarven_battleaxe_shard",
    "name": "Grimbeard's Echoing Edge",
    "description": "A fragment of Grimbeard Stonehand’s legendary battleaxe – said to have been cleaved from the stone itself. This shard still hums with dwarven fury and occasionally vibrates violently if you stare at it for too long.  Don’t worry, it won't actually attack *you*… probably.",
    "category": "equipment",
    "price": 1200,
    "icon": "⚔️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases attack damage by 5",
      "chance to inflict Bleeding (10%)",
      "minor resistance to fire damage"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_rider",
    "levelRequirement": 6
  },
  "middle_earth_elven_messenger_scroll": {
    "id": "middle_earth_elven_messenger_scroll",
    "name": "A Message from Rivendell",
    "description": "This intricately crafted scroll, bearing the mark of Elrond himself, contains a cryptic message about… well, it's mostly just flowery language about 'the balance' and 'preserving harmony.'  It also smells faintly of lavender and aged parchment - Wario would probably try to eat it. ",
    "category": "faction",
    "price": 7500,
    "icon": "✉️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grants +5 to Lore (Elven History)",
      "chance to gain a positive reputation with the Elves",
      "provides minor magical protection against illusions"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 10
  },
  "connectopia_pioneer_journal": {
    "id": "connectopia_pioneer_journal",
    "name": "Chronicles of the Rusty Compass",
    "description": "A weathered leather-bound journal filled with the rambling notes and sketches of a long-lost pioneer. Its pages offer cryptic clues about hidden mines, forgotten settlements, and perhaps even...a giant block monster!  It's delightfully useless, but surprisingly informative.",
    "category": "curiosities",
    "price": 800,
    "icon": "🧭",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to discover a minor crafting recipe",
      "provides +1 to survival checks in wilderness areas",
      "may trigger a random encounter with a wandering pioneer"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Winged Pigeon",
    "levelRequirement": 3
  },
  "connectopia_echoing_stone": {
    "id": "connectopia_echoing_stone",
    "name": "Resonance of the Lost Miners",
    "description": "A smooth, grey stone that vibrates with a faint, mournful hum. Touching it briefly reveals fragmented echoes of long-dead miners desperately searching for valuable blocks – and occasionally screaming about giant block spiders! It's unsettlingly authentic.",
    "category": "curiosities",
    "price": 350,
    "icon": "🔮",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to gain a minor luck bonus for mining",
      "provides faint auditory hallucinations (mostly block-related)",
      "can be used as a distraction in combat"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Wario Express",
    "levelRequirement": 1
  },
  "animatopia_howling_totem_whisper": {
    "id": "animatopia_howling_totem_whisper",
    "name": "Howling Totem Whisper",
    "description": "This crudely carved totem, imbued with the spirits of Animatopia's wilder tribes, allows you to momentarily mimic the calls of local beasts. It’s surprisingly effective for distracting grumpy bears and confusing rival packs – just don't try mimicking a griffin; it won't end well! Wario says 'It's like yelling at a badger, but with more...vibes!'",
    "category": "consumables",
    "price": 650,
    "icon": "🐺",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_buff: +10 to animal handling for 3 turns",
      "chance_to_distract_enemy",
      "minor_healing: 25 HP"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1
  },
  "animatopia_shadowclaw_gauntlet": {
    "id": "animatopia_shadowclaw_gauntlet",
    "name": "Shadowclaw Gauntlet",
    "description": "Forged from obsidian and the scales of a nocturnal shadowcat, this gauntlet grants incredible agility and precision. Wearing it feels like a tiny panther is constantly trying to steal your snacks – a surprisingly effective motivator!  Be warned, prolonged use may cause an uncontrollable urge to pounce on shiny objects.",
    "category": "equipment",
    "price": 7800,
    "icon": "🐾",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_buff: +5 to dexterity and agility",
      "chance_to_parry_attack",
      "increased_movement_speed: 10%"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 6
  },
  "animatopia_echoing_songstone": {
    "id": "animatopia_echoing_songstone",
    "name": "Echoing Songstone",
    "description": "This pulsating stone resonates with the ancient melodies of Animatopia, capable of manipulating sound waves and creating powerful sonic blasts. It’s rumored to have been crafted by a reclusive songbird shaman – Wario suspects he used it to annoy his neighbors!  Use wisely or face a cacophony of unpleasant noises.",
    "category": "premium",
    "price": 18000,
    "icon": "🎶",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "cast_spell: sonic_blast (deals 50-100 damage)",
      "grant_buff: +2 to charisma and persuasion",
      "chance_to_stun_enemy"
    ],
    "vendor": "forest_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 9
  },
  "pokemon_item_evolution_focus": {
    "id": "pokemon_item_evolution_focus",
    "name": "Evolution Focus - Primal Instinct",
    "description": "A pulsating obsidian stone, radiating with the raw energy of evolution! This device dramatically accelerates a Pokémon's evolutionary process, but beware – it can sometimes lead to… unexpected results. It’s said that trainers who have used this focus have become dangerously obsessed with power.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "increases evolution chance by 20%",
      "reduces post-evolution stat penalties by 10%",
      "chance to trigger a double evolution on a compatible Pokémon"
    ],
    "vendor": "safari_shop",
    "shippedBy": "giant beetle",
    "levelRequirement": 12
  },
  "pokemon_item_battle_strategy_consultation": {
    "id": "pokemon_item_battle_strategy_consultation",
    "name": "Battle Strategy Consultation – Master Trainer",
    "description": "Have a trainer of the highest caliber analyze your team and provide personalized advice! This service includes a detailed report on your Pokémon's strengths, weaknesses, and optimal battle tactics. Prepare to dominate the field with newfound brilliance… or at least look like you know what you’re doing.",
    "category": "services",
    "price": 8000,
    "icon": "🧠",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grants +1 to all Pokémon's base stats for 3 turns",
      "chance of receiving a free battle tactic card",
      "increases the chance of critical hits by 5%"
    ],
    "vendor": "league_store",
    "shippedBy": "messenger pigeon",
    "levelRequirement": 4
  },
  "leclaire_isle_item_sugar_rush_potion": {
    "id": "leclaire_isle_item_sugar_rush_potion",
    "name": "Sugar Rush Potion",
    "description": "A potent concoction brewed from crystallized honey and pixie dust, this potion delivers a surge of speed and reflexes – but be warned, it's incredibly addicting. Expect a temporary obsession with sprinkles.",
    "category": "consumables",
    "price": 250,
    "icon": "🍬",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed",
      "temporary_boost_to_attack_damage"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1
  },
  "leclaire_isle_item_frosting_flurry_wand": {
    "id": "leclaire_isle_item_frosting_flurry_wand",
    "name": "Frosting Flurry Wand",
    "description": "This exquisitely decorated wand allows the wielder to conjure a blizzard of whipped frosting, stunning foes and leaving them covered in sugary goodness. Wario would definitely try to eat this.",
    "category": "equipment",
    "price": 8000,
    "icon": "🍥",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "creates_frost_cloud",
      "stuns_enemies_on_impact",
      "chance_to_apply_slow"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "magical_mail",
    "levelRequirement": 6
  },
  "grand_country_echo_berry": {
    "id": "grand_country_echo_berry",
    "name": "Resonance Berries",
    "description": "These shimmering berries vibrate with the echoes of this world’s layered landscapes. Eating one grants temporary auditory illusions, confusing foes and revealing hidden pathways... mostly.",
    "category": "consumables",
    "price": 250,
    "icon": "🔊",
    "stock": 78,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "illusion_chance_15%",
      "temporary_hearing_bonus_5%"
    ],
    "vendor": "layer_market",
    "shippedBy": "Giant Beetle Carrier",
    "levelRequirement": 3
  },
  "grand_country_spiral_shard": {
    "id": "grand_country_spiral_shard",
    "name": "Chronal Fragments",
    "description": "These jagged shards resonate with the world’s distorted time flow. Holding one grants a slight distortion effect, slowing down nearby enemies and briefly reversing their movements – perfect for dodging or setting up a surprise attack!",
    "category": "curiosities",
    "price": 8750,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "enemy_slowdown_30%",
      "chance_to_reverse_enemy_movement_5%",
      "temporal_distortion_aura_small"
    ],
    "vendor": "side_seller",
    "shippedBy": "Winged Serpent Courier",
    "levelRequirement": 11
  },
  "kivotos_item_ink_of_inspiration": {
    "id": "kivotos_item_ink_of_inspiration",
    "name": "Ink of Inspiration - Midnight Batch",
    "description": "A vial filled with viscous, shimmering ink harvested from the dreams of particularly creative students. This potent concoction instantly floods your mind with brilliant ideas and a sudden urge to write epic poetry – or perhaps just doodle really complex geometric shapes!  Don’t blame us if you start speaking in iambic pentameter.",
    "category": "consumables",
    "price": 350,
    "icon": "✒️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "grant_inspiration_10",
      "increase_verbal_skill_3",
      "boost_creative_thinking_5"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 3
  },
  "kivotos_item_chronometer_of_late_nights": {
    "id": "kivotos_item_chronometer_of_late_nights",
    "name": "Chronometer of Late Nights",
    "description": "This intricate pocket watch displays not just the time, but also the accumulated hours spent studying. Its gears whir with a faint hum, and it seems to subtly encourage extended study sessions – perfect for those who thrive on caffeine and deadlines!  It’s rumored that excessive use can warp your perception of time.",
    "category": "equipment",
    "price": 8000,
    "icon": "🕰️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grant_night_vision_15",
      "reduce_sleep_requirement_2",
      "increase_skill_learning_speed_4"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Delivery System",
    "levelRequirement": 6
  },
  "animatopia_fang_of_the_howler": {
    "id": "animatopia_fang_of_the_howler",
    "name": "Howler's Echo Fang",
    "description": "This massive fang, harvested from the legendary Howler Beast, vibrates with primal energy. Wearing it amplifies your roar, stunning nearby enemies and momentarily driving them into a frenzy – perfect for disrupting enemy formations!",
    "category": "equipment",
    "price": 18000,
    "icon": "🐺",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases roar damage by 20%",
      "has a 30% chance to stun enemies on use",
      "grants temporary madness effect on nearby enemies"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_beetle",
    "levelRequirement": 12
  },
  "animatopia_totem_of_the_ancient_grove": {
    "id": "animatopia_totem_of_the_ancient_grove",
    "name": "Whispering Totem",
    "description": "Carved from petrified wood and imbued with the spirits of the ancient grove, this totem pulses with subtle energy. Holding it grants you a heightened sense of awareness, allowing you to detect hidden passages and anticipate enemy movements – just don’t ask it for directions!",
    "category": "curiosities",
    "price": 65000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "increases perception by 50%",
      "reveals hidden passages and traps",
      "grants a small chance to teleport short distances"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_snail",
    "levelRequirement": 21
  },
  "internet_neural_amplifier": {
    "id": "internet_neural_amplifier",
    "name": "Quantum Echo Headset",
    "description": "Warp your senses through the data streams with this sleek headset! It amplifies neural signals, granting temporary access to hidden networks and a disconcerting awareness of every digital conversation happening across The Internet.",
    "category": "equipment",
    "price": 18000,
    "icon": "🎧",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases intelligence by 2 for 5 rounds",
      "grants advantage on perception checks related to digital information",
      "allows the user to briefly glimpse fragmented memories from connected devices"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 12
  },
  "internet_godly_data_shard": {
    "id": "internet_godly_data_shard",
    "name": "The Source Core",
    "description": "Recovered from the heart of The Internet itself, this pulsating shard contains a fragment of raw data – a whisper of creation. Handle with care; prolonged exposure may result in existential dread or an uncontrollable urge to share cat videos.",
    "category": "premium",
    "price": 750000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "grants permanent +5 to all skill checks related to technology or knowledge",
      "allows the user to instantly learn any digital skill (with a DC 20 Wisdom saving throw)",
      "creates a small area of ‘digital static’ that disrupts electronic devices within 30 feet",
      "chance for spontaneous creation of bizarre and useless items."
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Transport",
    "levelRequirement": 25
  },
  "pokemon_item_electric_volt_orb": {
    "id": "pokemon_item_electric_volt_orb",
    "name": "Electric Volt Orb",
    "description": "This pulsating sphere crackles with raw electrical energy, perfect for shocking unsuspecting Pokémon or powering up your gadgets. It's rumored to be a fragment of a legendary thunderbird’s first lightning strike – and smells faintly of burnt toast.",
    "category": "consumables",
    "price": 750,
    "icon": "⚡️",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 10 lightning damage to Pokémon",
      "chance to paralyze on hit (15%)",
      "restores 25 energy"
    ],
    "vendor": "pokemart",
    "shippedBy": "swift_delivery",
    "levelRequirement": 3
  },
  "pokemon_item_ancient_trainer_badge": {
    "id": "pokemon_item_ancient_trainer_badge",
    "name": "Ancient Trainer’s Badge of Valor",
    "description": "Forged by the legendary trainers of old, this badge radiates a faint aura of determination. It's said to bolster your courage and grant you an edge in battle… mostly against overly confident Pidgey.",
    "category": "equipment",
    "price": 6800,
    "icon": "🏆",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+5 to attack power",
      "+3 to defense",
      "increases Pokémon's accuracy by 5%"
    ],
    "vendor": "league_store",
    "shippedBy": "express_mail",
    "levelRequirement": 7
  },
  "pokemon_item_mystic_berry_potion": {
    "id": "pokemon_item_mystic_berry_potion",
    "name": "Mystic Berry Potion",
    "description": "Brewed from rare, iridescent berries found only in the deepest forests of Pokémon Regions, this potion instantly heals a moderate amount of HP. Be warned: consuming too many may cause temporary side effects like uncontrollable giggling or an overwhelming desire to catch butterflies.",
    "category": "consumables",
    "price": 350,
    "icon": "🍇",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals 80 HP",
      "Restores 10 energy",
      "Chance to cure one status condition"
    ],
    "vendor": "safari_shop",
    "shippedBy": "standard_shipping",
    "levelRequirement": 1
  },
  "connectopia_rusty_cog": {
    "id": "connectopia_rusty_cog",
    "name": "Overclocked Sprocket",
    "description": "This jittery cog was salvaged from a malfunctioning Automaton prototype! It's surprisingly energetic, potentially boosting your crafting speed… or causing minor explosions. Wario loves a good chaotic tinker!",
    "category": "consumables",
    "price": 150,
    "icon": "⚙️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "crafting speed +10% for 60 seconds",
      "5% chance to trigger a small explosion on use"
    ],
    "vendor": "block_smith",
    "shippedBy": "rolling_cart",
    "levelRequirement": 3
  },
  "connectopia_geode_shard": {
    "id": "connectopia_geode_shard",
    "name": "Resonance Crystal Fragment",
    "description": "A piece of a rare Resonance Geode, pulsing with strange energy. Harness this fragment to briefly amplify your mining abilities – but be warned, prolonged exposure may cause vivid hallucinations involving giant blocks! Wario thinks it's delicious.",
    "category": "curiosities",
    "price": 3200,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "mining speed +25% for 30 seconds",
      "Chance to find rare minerals"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_bot",
    "levelRequirement": 8
  },
  "almost_edge_item_liminal_repair": {
    "id": "almost_edge_item_liminal_repair",
    "name": "Fractured Reflection Calibration",
    "description": "A meticulously crafted device of polished obsidian and unsettlingly smooth metal. This allows you to subtly adjust the boundaries of your perception, reducing disorientation in areas of extreme liminality... or simply making sure Wario's always finds his way back.",
    "category": "services",
    "price": 8000,
    "icon": "🛠️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reduce_confusion",
      "increase_perception",
      "grant_advantage_on_saving_throws_against_fear",
      "minor_healing"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "sentient_mirror",
    "levelRequirement": 8
  },
  "almost_edge_item_void_shard_of_despair": {
    "id": "almost_edge_item_void_shard_of_despair",
    "name": "The Silent Bite",
    "description": "A jagged chunk of solidified void, radiating a chilling stillness. Holding this shard evokes an overwhelming sense of loss and the realization that nothing truly matters... besides Wario's next treasure hunt.  Don’t stare at it for too long or you might find yourself trapped in an infinite loop of regret.",
    "category": "equipment",
    "price": 12000,
    "icon": "💀",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "increase_damage_against_undead",
      "chance_to_apply_fear",
      "reduce_healing_received",
      "slow"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black_raven",
    "levelRequirement": 12
  },
  "earth_land_rune_of_gearth": {
    "id": "earth_land_rune_of_gearth",
    "name": "Stone Singer's Echo",
    "description": "A perfectly formed stone, pulsating with the energy of the earth. Legend says it was used by ancient dwarves to sing praises to the mountains – and occasionally cause minor tremors when they got particularly enthusiastic.",
    "category": "curiosities",
    "price": 950,
    "icon": "⛰️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_earth_damage_by_5%",
      "chance_to_stun_on_crit_15%",
      "provides minor resistance to earth attacks"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_messenger",
    "levelRequirement": 3
  },
  "earth_land_rune_attunement": {
    "id": "earth_land_rune_attunement",
    "name": "The Guild Quartermaster's Blessing",
    "description": "A gruff but surprisingly helpful guild quartermaster offers a personalized rune attunement, tailored to your fighting style. He’ll spend an hour lecturing you on the proper use of battle axes and then magically imbue your weapon with a small amount of luck - mostly good luck.",
    "category": "services",
    "price": 1200,
    "icon": "📜",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+3 to attack rolls for one hour",
      "chance of critical hit +5%",
      "increased movement speed by 10% for 60 seconds"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "horseback_delivery",
    "levelRequirement": 8
  },
  "kivotos_item_halo_of_distraction": {
    "id": "kivotos_item_halo_of_distraction",
    "name": "The Cacophony Halo",
    "description": "A shimmering halo of chaotic sound, this device emits a jarring blend of electronic noise and classical music. It’s surprisingly effective at distracting enemies – or annoying your teammates if they don't appreciate the finer points of dissonance.",
    "category": "consumables",
    "price": 800,
    "icon": "🔊",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 sonic damage to target",
      "creates a small area of distraction (enemies have -20% accuracy)",
      "restores 5 mana"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 3
  },
  "kivotos_item_scholarship_contract": {
    "id": "kivotos_item_scholarship_contract",
    "name": "The Prestige Pact",
    "description": "A seemingly innocuous contract penned on aged parchment, this item represents a binding agreement with the Academy's most influential benefactor. The terms are… flexible, to say the least, and heavily reliant on continued good behavior (or lavish donations).  Don’t let it expire!",
    "category": "services",
    "price": 1200,
    "icon": "📜",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grants +5 to persuasion checks with faculty members",
      "provides access to exclusive training areas",
      "guarantees a monthly stipend of 30 gold (if the contract is upheld)"
    ],
    "vendor": "club_supply",
    "shippedBy": "secure_messenger",
    "levelRequirement": 5
  },
  "almost_edge_item_chronometric_brace": {
    "id": "almost_edge_item_chronometric_brace",
    "name": "Chronometric Brace of Temporal Echoes",
    "description": "Forged from solidified temporal currents, this ornate brace allows the wearer to briefly glimpse fractured moments in time. It's a tricky piece - overuse can cause minor distortions and unpredictable shifts in your personal timeline!",
    "category": "equipment",
    "price": 8750,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "allows the wearer to rewind time by 3 seconds once per combat encounter (cooldown: 6 turns)",
      "grants +3 to dexterity",
      "chance to slow enemy's attack speed by 10% on hit"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "winged courier",
    "levelRequirement": 12
  },
  "equestria_item_shadow_hoof_dagger": {
    "id": "equestria_item_shadow_hoof_dagger",
    "name": "Shadow Hoof Dagger of Discord",
    "description": "Forged in the deepest caverns beneath Nightmare's Keep, this dagger whispers promises of chaos and disruption. Wielding it grants impressive damage but might just lead to a spectacularly messy argument with your party.",
    "category": "equipment",
    "price": 23000,
    "icon": "😈",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_damage_against_evil_creatures",
      "chance_to_inflict_confusion",
      "minor_debuff_to_party_members_if_used_close_by",
      "chance_for_temporary_disadvantage_on_social_rolls"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "griffons_express",
    "levelRequirement": 12
  },
  "equestria_item_forbidden_heartstone": {
    "id": "equestria_item_forbidden_heartstone",
    "name": "Heartstone of Silent Sorrow",
    "description": "Recovered from a forgotten shrine dedicated to the lost memories, this stone radiates an unnerving stillness. Touching it can reveal hidden truths... or drive you to obsessive melancholy and crafting miniature ponies out of despair.",
    "category": "forbidden",
    "price": 12000,
    "icon": "🖤",
    "stock": 5,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "chance_to_reveal_hidden_secrets",
      "minor_damage_over_time_to_self",
      "increase_intelligence",
      "chance to trigger a nightmare vision"
    ],
    "vendor": "crystal_empire_black_market",
    "shippedBy": "shadow_rats",
    "levelRequirement": 8
  },
  "mushroom_kingdom_item_giant_puffball": {
    "id": "mushroom_kingdom_item_giant_puffball",
    "name": "Giant Puffball Launcher",
    "description": "This absurdly large, bouncy mushroom is primed and ready to launch! With a mighty pull-back mechanism, you can send this thing soaring through the air – perfect for knocking enemies off platforms or startling those pesky Koopa Troopas. Just watch out for ricochets!",
    "category": "equipment",
    "price": 12000,
    "icon": "🍄",
    "stock": 7,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "deals 50-80 bludgeoning damage",
      "chance to stun on hit",
      "increased movement speed for 3 seconds after launch"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 9
  },
  "mushroom_kingdom_item_potion_of_infinite_hunger": {
    "id": "mushroom_kingdom_item_potion_of_infinite_hunger",
    "name": "Potion of Infinite Hunger",
    "description": "This viscous, crimson concoction promises to quell the most savage appetites. Drink deeply and prepare for an insatiable craving – you’ll devour everything in sight (and maybe a few unsuspecting NPCs). Side effects may include uncontrollable burping and a sudden obsession with mushrooms.",
    "category": "consumables",
    "price": 600,
    "icon": "🍔",
    "stock": 90,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 100 health",
      "grants temporary increased hunger stat",
      "chance to gain a negative status effect (e.g., nausea)"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1
  },
  "equestria_item_elemental_boots": {
    "id": "equestria_item_elemental_boots",
    "name": "Hoofprints of Harmony Boots",
    "description": "These sturdy boots, crafted by a retired elementalsmith, allow the wearer to briefly channel the power of one element. Imagine stomping around like Twilight – except with more kick! Wario recommends these for clearing out stubborn mud puddles or… something.",
    "category": "equipment",
    "price": 6500,
    "icon": "🐴",
    "stock": 7,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "grant elemental resistance (random element)",
      "increased movement speed +5",
      "chance to trigger 'harmony' effect on hit"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "griffin_delivery",
    "levelRequirement": 10
  },
  "equestria_item_princesses_favor": {
    "id": "equestria_item_princesses_favor",
    "name": "Princess's Favour - A Blessing of Friendship",
    "description": "A small, exquisitely crafted amulet radiating warmth and goodwill. This premium service grants a temporary boost to diplomacy and persuasion checks, as well as a minor healing effect. Wario thinks it’s great for bribing ponies... or just getting free cake!",
    "category": "services",
    "price": 12000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "diplomacy +5 for 5 turns",
      "persuasion +7 for 3 turns",
      "minor healing (50 HP)"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 14
  },
  "the_edge_whisperwind_scroll": {
    "id": "the_edge_whisperwind_scroll",
    "name": "Whisperwind Scroll",
    "description": "This scroll pulses with the unsettling silence of the abyss. Unfurling it releases a gust of chilling wind that momentarily disorients enemies and reveals hidden passages – perfect for escaping nasty surprises! Don't blame me if you get lost in your own thoughts.",
    "category": "consumables",
    "price": 250,
    "icon": "💨",
    "stock": 47,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 cold damage to a single target",
      "disorients target for 2 rounds",
      "reveals hidden passage (50% chance)"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Void Courier",
    "levelRequirement": 3
  },
  "the_edge_voidshard_amulet": {
    "id": "the_edge_voidshard_amulet",
    "name": "Amulet of Fractured Echoes",
    "description": "Crafted from solidified fragments of a shattered dimension, this amulet hums with an unsettling energy. Wearing it grants resistance to psychic damage and allows the wearer to briefly glimpse echoes of potential futures – though they’re usually just confusing!",
    "category": "equipment",
    "price": 1200,
    "icon": "🔮",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grants +2 resistance to psychic damage",
      "chance to see a cryptic vision (10% chance)",
      "increases perception by 1 for 30 minutes"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Dimensional Parcel Service",
    "levelRequirement": 6
  },
  "the_edge_abyssal_rune_stone": {
    "id": "the_edge_abyssal_rune_stone",
    "name": "Rune Stone of Unmaking",
    "description": "This ominous stone pulses with a dark energy, capable of briefly disrupting the very fabric of reality. With a focused thought, you can cause minor structural damage to enemies – but be careful, overuse could have...unpleasant consequences! Wario would LOVE this.",
    "category": "curiosities",
    "price": 7500,
    "icon": "💥",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "deals 3d8 force damage to a single target",
      "has a 20% chance to inflict 'weakened' status (target takes 1d4 extra damage)",
      "requires attunement"
    ],
    "vendor": "final_shop",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 9
  },
  "internet_neural_interface": {
    "id": "internet_neural_interface",
    "name": "The Glitch Core",
    "description": "A sleek, chrome headset pulsing with corrupted code. This device allows the wearer to briefly manipulate digital systems and even phase through electronic barriers – just try not to erase your own memory while you're at it!",
    "category": "equipment",
    "price": 12000,
    "icon": "💻",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "chance to phase through electronic barriers (50%)",
      "increased hacking skill",
      "temporary data overload effect"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 12
  },
  "internet_godly_domain_shard": {
    "id": "internet_godly_domain_shard",
    "name": "The Source Fragment",
    "description": "A pulsating shard of pure information, radiating with immense power. This artifact grants the wielder limited control over network traffic and can temporarily summon digital guardians – be warned, however, prolonged use risks shattering your sanity and turning you into a sentient algorithm!",
    "category": "premium",
    "price": 750000,
    "icon": "🌐",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "chance to control network traffic (80%)",
      "summon digital guardian (low cooldown)",
      "immunity to data manipulation effects",
      "periodic stat regeneration"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 35
  },
  "earth_land_dragonfruit_elixir": {
    "id": "earth_land_dragonfruit_elixir",
    "name": "Volcanic Vigor",
    "description": "Brewed from the rarest dragon fruit found near volcanic vents, this elixir provides a burst of raw energy! It’s surprisingly tasty, though it occasionally makes you hiccup fire.",
    "category": "consumables",
    "price": 150,
    "icon": "🔥",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 30 HP",
      "increases strength by 4 for 10 seconds",
      "chance to ignite target (5%)"
    ],
    "vendor": "magic_shop",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 2
  },
  "earth_land_ancient_shard": {
    "id": "earth_land_ancient_shard",
    "name": "Echoes of the First Titan",
    "description": "A fragment of a colossal titan's armor, radiating with residual magical energy. Touching it grants visions – often confusing and unsettling glimpses into Earth Land’s long-forgotten past!",
    "category": "curiosities",
    "price": 75000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grants temporary +1 to all skill checks",
      "chance to trigger a random flashback (20% chance)",
      "provides resistance to psychic damage",
      "increases wisdom by 3"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 18
  },
  "connectopia_shard_of_discord": {
    "id": "connectopia_shard_of_discord",
    "name": "Fractured Harmonizer",
    "description": "A jagged fragment of solidified dissonance, this shard disrupts the flow of order in any space. Placing it near crafting stations causes random malfunctions and temporary stat penalties for nearby party members – a truly chaotic addition to your operation!",
    "category": "forbidden",
    "price": 6500,
    "icon": "💣",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "random_crafting_malfunction",
      "stat_penalty_1d6",
      "minor_sonic_disruption"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 7
  },
  "connectopia_legendary_gearbox_of_invention": {
    "id": "connectopia_legendary_gearbox_of_invention",
    "name": "Wario's Prototype Assembler",
    "description": "This glorious, slightly dented gearbox was allegedly created by Wario himself during a particularly productive block-building binge. It grants the wielder +5 to all crafting rolls and has a 20% chance to produce entirely new, bizarre items – sometimes useful, mostly not.",
    "category": "equipment",
    "price": 38000,
    "icon": "⚙️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "+5 crafting bonus",
      "20% chance of generating a random item",
      "chance for self-assembly (rare)"
    ],
    "vendor": "craft_corner",
    "shippedBy": "warp_transport",
    "levelRequirement": 16
  },
  "connectopia_echoing_crystal": {
    "id": "connectopia_echoing_crystal",
    "name": "The Resonance Stone",
    "description": "This pulsating crystal hums with the energy of Connectopia's core. Touching it briefly grants a momentary clarity, but prolonged exposure can lead to… unsettling echoes and visions. Wario recommends using it sparingly – or not at all!",
    "category": "premium",
    "price": 12000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to gain a temporary buff based on a random element (strength, agility, intelligence)",
      "provides resistance to psychic damage",
      "can be used to communicate with spirits (low chance of disaster)"
    ],
    "vendor": "craft_corner",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10
  },
  "animatopia_whispering_totem": {
    "id": "animatopia_whispering_totem",
    "name": "Whispering Totem of the Great Howler",
    "description": "This intricately carved totem, made from polished bone and vibrant feathers, seems to murmur secrets of the forest. Holding it close allows you to briefly understand the calls of beasts – a handy trick for tracking or negotiating with grumpy bears!",
    "category": "curiosities",
    "price": 7500,
    "icon": "🐾",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_animal_communication_15s",
      "detect_beast_nearby",
      "small_healing_boost_5hp"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "giant_beetle",
    "levelRequirement": 6
  },
  "animatopia_braided_vine_armor": {
    "id": "animatopia_braided_vine_armor",
    "name": "Braided Vine Armor of the Root Guard",
    "description": "Forged by skilled artisans from living vines and hardened sap, this armor surprisingly offers decent protection while blending seamlessly with the forest. It's a bit prickly but keeps you safe from those pesky thorn-covered critters – just try not to scratch yourself!",
    "category": "equipment",
    "price": 18000,
    "icon": "🌿",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "armor_5",
      "poison_resistance_25%",
      "increased_agility_10%"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_squirrel",
    "levelRequirement": 9
  },
  "earth_land_item_dragon_scale_scroll": {
    "id": "earth_land_item_dragon_scale_scroll",
    "name": "Scroll of Scorched Secrets",
    "description": "Recovered from the hoard of a surprisingly grumpy young dragon, this scroll isn’t just parchment – it's partially composed of shimmering dragon scales. Unfurling it reveals cryptic instructions for brewing a potion that smells suspiciously like burnt marshmallows.",
    "category": "curiosities",
    "price": 750,
    "icon": "🐉",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to deal fire damage on a critical hit (5%)",
      "reveals a hidden dragon lore entry in the party journal"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "winged_messenger",
    "levelRequirement": 3
  },
  "earth_land_item_legendary_rune_of_the_stormcaller": {
    "id": "earth_land_item_legendary_rune_of_the_stormcaller",
    "name": "Rune of the Stormcaller – Fragment",
    "description": "A pulsating fragment of a legendary rune, recovered from the heart of a frozen storm. Holding this fragment causes static electricity to build up on your person and you may start screaming in the wind!",
    "category": "equipment",
    "price": 65000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "chance to summon a minor lightning bolt (20%)",
      "increases spellcasting speed by 15%",
      "occasionally emits an ear-splitting shriek"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "storm_eagle_delivery",
    "levelRequirement": 12
  },
  "mushroom_kingdom_item_sticky_fungus": {
    "id": "mushroom_kingdom_item_sticky_fungus",
    "name": "Glug's Grumbling Globules",
    "description": "These pulsating fungi seem to absorb the ambient misery of the Mushroom Kingdom, granting a temporary boost to resistance against fear and despair.  They’re surprisingly bouncy and leave a delightful trail of slime – watch out for puddles!",
    "category": "consumables",
    "price": 750,
    "icon": "🍄",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increases fear resistance by 20%",
      "restores 10 sanity",
      "chance to create a small puddle of slime (minor movement penalty)"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_mail",
    "levelRequirement": 3
  },
  "mushroom_kingdom_item_royal_decree": {
    "id": "mushroom_kingdom_item_royal_decree",
    "name": "The King's Command Scroll",
    "description": "A magically sealed scroll, allegedly issued by the Mushroom King himself. This item grants a temporary boost to authority and can be used to influence NPCs – though their obedience may be fleeting.",
    "category": "services",
    "price": 250000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increases persuasion chance by 50%",
      "NPCs are more likely to offer discounts or assistance",
      "chance to trigger a random event related to the Mushroom Kingdom's politics"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 25
  },
  "connectopia_chunker_01": {
    "id": "connectopia_chunker_01",
    "name": "Block Breaker's Delight",
    "description": "This shimmering, pulsating block is infused with the energy of Connectopia itself! It rapidly breaks down rock and mineral deposits, increasing your mining speed by 50% for 60 seconds. Just don’t accidentally dismantle yourself while using it – Wario would be *so* disappointed.",
    "category": "consumables",
    "price": 750,
    "icon": "⛏️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increases mining speed by 50% for 60 seconds",
      "chance to drop extra materials",
      "minor chance of a small block explosion (1%)"
    ],
    "vendor": "craft_corner",
    "shippedBy": "rolling_cart",
    "levelRequirement": 3
  },
  "connectopia_resonance_shard": {
    "id": "connectopia_resonance_shard",
    "name": "Harmonic Echo Fragment",
    "description": "Recovered from the core of a collapsed resonance tower, this shard vibrates with the very structure of Connectopia. It can be used to temporarily amplify your connection to the network, granting +10 bonus to all crafting rolls and allowing you to instantly repair damaged equipment – perfect for those clumsy pioneers!",
    "category": "equipment",
    "price": 35000,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+10 bonus to all crafting rolls",
      "instant repair of equipment (1 charge)",
      "chance for a brief vision of Connectopia's past"
    ],
    "vendor": "block_smith",
    "shippedBy": "drone_delivery",
    "levelRequirement": 8
  },
  "connectopia_godly_stabilizer": {
    "id": "connectopia_godly_stabilizer",
    "name": "The Architect’s Keystone",
    "description": "Forged by the ancient block-smiths of Connectopia, this keystone pulses with unimaginable power. It stabilizes collapsing structures and prevents terrain shifts within a 30ft radius – a true lifesaver for any ambitious builder!  Just be careful not to accidentally create a miniature continent while fiddling with it.",
    "category": "equipment",
    "price": 850000,
    "icon": "🧱",
    "stock": 3,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "stabilizes terrain within a 30ft radius",
      "prevents structural collapses",
      "chance to instantly construct basic blocks",
      "grants Wario’s blessing (small luck bonus)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "sky_whale",
    "levelRequirement": 25
  },
  "almost_edge_item_sticky_sweet_dust": {
    "id": "almost_edge_item_sticky_sweet_dust",
    "name": "Sugar of the Absent Shores",
    "description": "This shimmering, pink dust smells overwhelmingly of cotton candy and regret. When consumed, it provides a burst of energy and temporary speed... but you'll be craving more before you know it.",
    "category": "consumables",
    "price": 150,
    "icon": "🍬",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "speed_boost_2",
      "temporary_energy"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Gust of Wind",
    "levelRequirement": 1
  },
  "mushroom_kingdom_item_forbidden_cog": {
    "id": "mushroom_kingdom_item_forbidden_cog",
    "name": "The Chronos Gear",
    "description": "A meticulously crafted cog, said to be salvaged from a shattered time portal. Handle with caution – prolonged use may cause minor temporal distortions, like suddenly craving polka music or finding yourself speaking in iambic pentameter.",
    "category": "forbidden",
    "price": 35000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "allows the user to rewind time by 5 seconds (once per day)",
      "chance to create a temporary duplicate of the user",
      "increases resistance to temporal magic"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_courier",
    "levelRequirement": 16
  },
  "mushroom_kingdom_item_coin_launcher": {
    "id": "mushroom_kingdom_item_coin_launcher",
    "name": "Wario's Lucky Launcher",
    "description": "This device fires coins with pinpoint accuracy, capable of disarming traps or launching small projectiles. It's incredibly satisfying to watch a coin ricochet off a wall and smack into an enemy – pure Wario chaos!",
    "category": "equipment",
    "price": 1200,
    "icon": "🪙",
    "stock": 95,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "fires a coin with moderate damage",
      "chance to stun enemies on hit",
      "allows for ranged attacks"
    ],
    "vendor": "wario_direct",
    "shippedBy": "express_delivery",
    "levelRequirement": 5
  },
  "almost_edge_item_void_echo_blade": {
    "id": "almost_edge_item_void_echo_blade",
    "name": "Void Echo Blade - The Unmaking",
    "description": "Forged from solidified nothingness, this blade seems to absorb light and sound. Each strike carries the chilling promise of unraveling reality – a truly unsettling weapon for any ambitious warrior.  Just be careful not to cut yourself… or your own allies.",
    "category": "equipment",
    "price": 65000,
    "icon": "🔪",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "deals extra psychic damage to ethereal creatures",
      "chance to inflict 'decay' on a hit, reducing target’s armor class by 1 for 2 rounds",
      "grants +3 to attack rolls against beings of the void"
    ],
    "vendor": "void_merchant",
    "shippedBy": "blackhole_express",
    "levelRequirement": 15
  },
  "almost_edge_item_forbidden_memory_tablet": {
    "id": "almost_edge_item_forbidden_memory_tablet",
    "name": "Tablet of Lost Reflections",
    "description": "This tarnished bronze tablet displays fleeting images of forgotten realities and the souls trapped within. Touching it can unlock fragmented memories – often horrifying ones - but also offers a glimpse into potent, forbidden magic.  Don’t say we didn't warn you about the headaches.",
    "category": "forbidden",
    "price": 35000,
    "icon": "💀",
    "stock": 1,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "chance to gain a temporary curse upon use",
      "allows the user to cast 'illusion' once per day",
      "provides cryptic clues about nearby locations"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "shadow_courier",
    "levelRequirement": 5
  },
  "grand_country_layered_echo_shard": {
    "id": "grand_country_layered_echo_shard",
    "name": "Layered Echo Shard",
    "description": "A pulsating shard from a shattered monument, riddled with swirling colors and whispering voices. Holding this shard allows you to briefly glimpse alternate paths within the structure – useful for navigation or just messing around!",
    "category": "curiosities",
    "price": 1200,
    "icon": "🔮",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "reveals hidden passages (small chance)",
      "provides a brief glimpse of an alternate route on the current map",
      "causes minor auditory hallucinations (disadvantage on perception checks)"
    ],
    "vendor": "layer_market",
    "shippedBy": "night_only",
    "levelRequirement": 3
  },
  "grand_country_chronal_anchor": {
    "id": "grand_country_chronal_anchor",
    "name": "Temporal Driftstone",
    "description": "A polished grey stone pulsing with a soft, blue light. Touching this anchor briefly slows the flow of time around you, granting a precious few seconds to react or reposition yourself during combat – but be warned, overuse can lead to unpredictable temporal distortions!",
    "category": "equipment",
    "price": 4200,
    "icon": "⏳",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "slow_time_level_8",
      "chance_to_dodge_attack",
      "minor_healing_over_time"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_wormhole",
    "levelRequirement": 8
  },
  "grand_country_obsidian_whisper": {
    "id": "grand_country_obsidian_whisper",
    "name": "The Silent Maw's Secret",
    "description": "A small, perfectly smooth obsidian orb that seems to absorb all sound. Holding it near a creature induces an overwhelming sense of dread and paranoia, potentially causing them to flee in terror...or perhaps they simply become obsessed with hoarding shiny objects.",
    "category": "forbidden",
    "price": 7800,
    "icon": "🤫",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "fear_effect_level_12",
      "chance_to_cause_panic",
      "reduce_enemy_attack_damage"
    ],
    "vendor": "side_seller",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 12
  },
  "connectopia_dynamite_charge": {
    "id": "connectopia_dynamite_charge",
    "name": "Volcanic Burst Cartridges",
    "description": "These compact cartridges contain a potent, unstable explosive derived from geothermal vents. Use with caution – they’re delightfully messy and fantastic for clearing stubborn rock formations (or creating impromptu cave-ins).",
    "category": "consumables",
    "price": 250,
    "icon": "💥",
    "stock": 30,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 15 damage to stone and earth enemies",
      "small chance to create a minor explosion (5%)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "delivery_only",
    "levelRequirement": 2
  },
  "connectopia_shard_of_the_grand_architect": {
    "id": "connectopia_shard_of_the_grand_architect",
    "name": "The Blueprint's Echo",
    "description": "A shard of solidified light, pulsating with the designs of Connectopia’s original architect. Holding this shard grants a fleeting understanding of structural integrity and potential weaknesses in block formations - if you can decipher it before your head explodes from brilliance.",
    "category": "premium",
    "price": 250000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "grants +5 to crafting skill for 30 minutes",
      "chance to reveal hidden block formations (20%)",
      "provides minor resistance to earth damage"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_only",
    "levelRequirement": 25
  },
  "faction_imperial_runecloth": {
    "id": "faction_imperial_runecloth",
    "name": "Runecloth of the Iron Legion",
    "description": "This meticulously crafted cloth, dyed in the colors of the Imperial legions, is imbued with ancient protective runes. It’s surprisingly comfortable and provides a small boost to morale…or at least the *illusion* of it.  Wario loves it!",
    "category": "premium",
    "price": 6500,
    "icon": "🛡️",
    "stock": 2,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "armor: 10",
      "resistance to fear",
      "minor regeneration"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "dragon post",
    "levelRequirement": 5
  },
  "animatopia_forbidden_mimic_shell": {
    "id": "animatopia_forbidden_mimic_shell",
    "name": "Mimic's Silent Shell",
    "description": "Recovered from a forgotten shrine dedicated to the Mimic Gods, this shell grants unsettling abilities... but at a terrible price. It allows you to perfectly mimic any sound or voice you hear, and can even briefly transform into a small, harmless creature, however prolonged use causes paranoia.",
    "category": "forbidden",
    "price": 75000,
    "icon": "🐚",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "perfect mimicry",
      "brief creature transformation (small)",
      "paranoia effect (cumulative)"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "shadow_raven",
    "levelRequirement": 15
  },
  "middle_earth_elven_whisper_potion": {
    "id": "middle_earth_elven_whisper_potion",
    "name": "Elven Whisper Brew",
    "description": "Distilled from rare moonpetal blossoms and the sighs of ancient trees, this potion grants you uncanny perception. You'll hear whispers on the wind and notice details others miss – perfect for avoiding traps or spotting a sneaky Ringwraith.",
    "category": "consumables",
    "price": 750,
    "icon": "👂",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increase_perception",
      "chance_to_find_hidden_items",
      "grant_advantage_on_stealth_checks"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_messenger",
    "levelRequirement": 4
  },
  "middle_earth_dwarven_stone_of_endurance": {
    "id": "middle_earth_dwarven_stone_of_endurance",
    "name": "Grimbold Stone of Steadfastness",
    "description": "Forged deep within the dwarven forges, this weighty stone radiates a comforting warmth. It doesn't make you invincible – don’t expect to shrug off dragon fire – but it drastically reduces fatigue and provides remarkable stamina during prolonged exertion.",
    "category": "equipment",
    "price": 6500,
    "icon": "💪",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase_stamina",
      "grant_regeneration",
      "reduce_fatigue_effect",
      "resistance_to_poison"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_worm",
    "levelRequirement": 10
  },
  "faerun_item_whispering_potion": {
    "id": "faerun_item_whispering_potion",
    "name": "Whispering Potion of Foresight",
    "description": "This shimmering blue potion seems to murmur cryptic warnings and possibilities when held close. Wario's always said a little paranoia is good for business, but be warned – the whispers might just drive you mad! (Don’t blame me if you start hoarding spoons)",
    "category": "consumables",
    "price": 1200,
    "icon": "🔮",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_advantage_on_next_insight_check",
      "chance_to_receive_a_minor_prophecy"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 4
  },
  "faerun_item_obsidian_shard_of_sorrow": {
    "id": "faerun_item_obsidian_shard_of_sorrow",
    "name": "Obsidian Shard of Sorrow",
    "description": "A fragment of a forgotten deity’s heart, this shard pulses with an unsettling melancholy. Holding it induces vivid memories of loss and regret… perfect for brooding adventurers or crafting truly depressing sculptures. It's surprisingly good for starting fires too!",
    "category": "curiosities",
    "price": 22000,
    "icon": "🖤",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_inflict_disadvantage_on_attacks",
      "increased_charisma_saving_throw",
      "grants_temporary_darkvision"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "animatopia_ember_lantern": {
    "id": "animatopia_ember_lantern",
    "name": "Ember Lantern of Lost Memories",
    "description": "This lantern, fueled by enchanted embers, casts a flickering light that seems to show fleeting images. Locals say it can briefly reveal memories lost to time—mostly just blurry faces and unsettling sounds though!  It’s also surprisingly warm.",
    "category": "consumables",
    "price": 650,
    "icon": "🔥",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "provides dim light in dark areas",
      "restores 10 HP",
      "slightly increases charisma by 2"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 2
  },
  "midlands_item_whispers_of_influence": {
    "id": "midlands_item_whispers_of_influence",
    "name": "Councilor's Favor Token",
    "description": "A small, intricately carved token depicting a stylized ear. Legend says holding this allows you to subtly influence conversations and gain advantageous information from the Midlands’ corrupt officials. It may or may not work – don't blame us if it just attracts shady characters.",
    "category": "curiosities",
    "price": 750,
    "icon": "👂",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "+2 to persuasion checks",
      "chance to overhear valuable rumors (5%)",
      "reduces bartering costs by 10%"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "magical pigeon",
    "levelRequirement": 4
  },
  "midlands_item_chronometric_amulet": {
    "id": "midlands_item_chronometric_amulet",
    "name": "Amulet of Shifting Moments",
    "description": "This amulet pulses with a faint, temporal energy. With a focused thought, you can briefly rewind or fast-forward a single action – handy for dodging a clumsy attack, or perhaps accelerating the growth of a particularly stubborn mushroom… Wario would *love* this!",
    "category": "equipment",
    "price": 12000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Allows the user to rewind a single action by up to 3 seconds (once per encounter)",
      "+2 to reaction rolls",
      "Provides resistance to temporal magic"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dimensional portal",
    "levelRequirement": 10
  },
  "grand_country_obsidian_spike": {
    "id": "grand_country_obsidian_spike",
    "name": "The Root of Despair",
    "description": "A wickedly sharp spike grown from the heart of a petrified tree, rumored to absorb hope and vitality. Touching it induces a chilling despair – perfect for demoralizing your foes or starting an argument. Don’t say we didn't warn you about this one.",
    "category": "forbidden",
    "price": 8500,
    "icon": "🩸",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_to_reduce_target_morale",
      "minor_damage_over_time",
      "slows_target"
    ],
    "vendor": "side_seller",
    "shippedBy": "shadow_courier",
    "levelRequirement": 8
  },
  "grand_country_layered_stone_charm": {
    "id": "grand_country_layered_stone_charm",
    "name": "The Architect’s Secret",
    "description": "Carved from layers of impossibly stacked stone, this charm seems to shift and rearrange itself before your eyes. It offers protection against unstable terrain and whispers cryptic directions – though whether they're helpful or utterly bewildering is anyone's guess!  Wario thinks it’s a good luck charm, he’s always winning.",
    "category": "equipment",
    "price": 5500,
    "icon": "🧱",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance_to_falling",
      "chance_to_detect_traps",
      "minor_healing_over_time"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10
  },
  "kivotos_item_chrono_delay": {
    "id": "kivotos_item_chrono_delay",
    "name": "Temporal Shift Studs",
    "description": "These iridescent studs, scavenged from a malfunctioning Chrono-Club experiment, grant a brief but potent slowing effect. Wario loves messing with time, and these are perfect for snatching up extra loot or dodging those pesky student patrols! They're surprisingly comfortable to wear – almost *too* comfortable.",
    "category": "equipment",
    "price": 12000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "slow_target_50%",
      "duration_8_seconds",
      "chance_to_reflect_damage"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 9
  },
  "kivotos_item_academy_badge_of_honor": {
    "id": "kivotos_item_academy_badge_of_honor",
    "name": "Badge of Scholarly Distinction",
    "description": "Officially issued by the Kivotos Academy's Honor Council, this badge isn’t just for show. It grants a small bonus to persuasion checks when dealing with faculty and unlocks access to exclusive club events - perfect for any aspiring Wario-esque schemer! Just try not to use it to bribe the librarians.",
    "category": "faction",
    "price": 2500,
    "icon": "🏅",
    "stock": 18,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "persuasion_bonus_5",
      "access_to_exclusive_club_events",
      "increased_reputation_with_academy"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Campus Mail",
    "levelRequirement": 5
  },
  "internet_retro_console": {
    "id": "internet_retro_console",
    "name": "8-Bit Echo Chamber",
    "description": "A beautifully crafted miniature console, flickering with pixelated ghosts of forgotten games. Activate it to summon a spectral guardian that attacks with nostalgic fury - but beware the glitches!",
    "category": "equipment",
    "price": 12000,
    "icon": "🎮",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grants +3 to attack rolls with melee weapons",
      "Summons a spectral guardian that fights for the user (limited uses)",
      "Chance to trigger a temporary visual distortion effect"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 8
  },
  "pokemon_item_sparkling_charm": {
    "id": "pokemon_item_sparkling_charm",
    "name": "Sparkling Charm of the Primal Flame",
    "description": "This oddly warm charm pulses with miniature fire sprites, said to amplify a trainer’s connection to their Pokémon's inner power. It doesn't actually *do* anything, but it looks really cool and makes you feel like a total boss... mostly because Wario told you to wear it.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🔥",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_confidence",
      "minor_stat_boost",
      "chance_to_charm"
    ],
    "vendor": "pokemart",
    "shippedBy": "swift_delivery",
    "levelRequirement": 6
  },
  "pokemon_item_ancient_trainer_boots": {
    "id": "pokemon_item_ancient_trainer_boots",
    "name": "Ancient Trainer’s Boots of the Verdant Path",
    "description": "These boots, crafted from the hide of a long-extinct Pokémon, grant unparalleled agility and a strange connection to nature. They're surprisingly comfortable… unless you step in a puddle filled with Grimer slime.",
    "category": "equipment",
    "price": 8000,
    "icon": "👟",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_speed",
      "enhanced_agility",
      "resistance_to_poison"
    ],
    "vendor": "safari_shop",
    "shippedBy": "poke_mail",
    "levelRequirement": 9
  }
};
