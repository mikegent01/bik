// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_055 = {
  "almost_edge_chronometric_bracers": {
    "id": "almost_edge_chronometric_bracers",
    "name": "Chronometric Bracers of Temporal Distortion",
    "description": "These tarnished bronze bracers hum with residual time energy – remnants of moments lost to the void. Wearing them grants a slight advantage in reaction speed and allows the wearer to briefly rewind minor mistakes, but beware altering the flow of time too drastically!",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "increased reaction speed (15%)",
      "chance to rewind a single failed attack roll (5%)",
      "reduces movement speed by 10% when actively rewinding time"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "temporal courier",
    "levelRequirement": 8
  },
  "almost_edge_kaleidoscope_shard": {
    "id": "almost_edge_kaleidoscope_shard",
    "name": "Kaleidoscope Shard of Lost Reflections",
    "description": "A fragment of a shattered, infinitely repeating void. This shard doesn’t do much directly, but gazing into it for an extended period can induce vivid hallucinations - sometimes helpful, often terrifying. Collect them all and you might just find yourself trapped in an endless loop!",
    "category": "curiosities",
    "price": 600,
    "icon": "🌀",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to inflict confusion on a target (5%) when viewed for longer than 3 seconds",
      "causes visual hallucinations for the user (minor)",
      "slightly increases intelligence by 1 point"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "void delivery",
    "levelRequirement": 2
  },
  "earth_land_gargoyle_grunt": {
    "id": "earth_land_gargoyle_grunt",
    "name": "Stone Golem Grunt",
    "description": "This surprisingly agile stone golem seems to have a permanent grumpy expression! It’s fueled by raw earth energy and will smash through your enemies with surprising force. Don't worry, it occasionally lets out a pathetic grunt – probably from the strain.",
    "category": "equipment",
    "price": 1200,
    "icon": "🗿",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "armor: 5",
      "strength: 3",
      "chance to stun: 10%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "cart",
    "levelRequirement": 6
  },
  "earth_land_whispering_shard": {
    "id": "earth_land_whispering_shard",
    "name": "Echoing Obsidian Shard",
    "description": "A fragment of a fallen dragon’s scale, this shard vibrates with echoes of ancient battles. Holding it allows you to briefly understand the whispers of the earth… mostly complaining about roots and bad weather, but occasionally useful for finding hidden passages. Wario would pay a fortune for one!",
    "category": "curiosities",
    "price": 850,
    "icon": "🔮",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to detect traps: 15%",
      "reveals hidden paths: 30%"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged_beetle",
    "levelRequirement": 4
  },
  "earth_land_dragon_scale_charm": {
    "id": "earth_land_dragon_scale_charm",
    "name": "Chromatic Dragon Scale Charm",
    "description": "Rumored to be shed by a young, particularly flamboyant dragon, this charm shimmers with iridescent colors. It's said to subtly influence the emotions of those nearby – mostly making them intensely jealous of your shiny gear. Don’t underestimate its protective capabilities though!",
    "category": "equipment",
    "price": 6500,
    "icon": "🐉",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to charm enemies: 20%",
      "increase charisma: 5",
      "resistance to fear: 30%"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_drone",
    "levelRequirement": 10
  },
  "mushroom_kingdom_item_giga_coin": {
    "id": "mushroom_kingdom_item_giga_coin",
    "name": "Giga Coin of Infinite Greed",
    "description": "This oversized coin practically screams 'take it!'. It's rumored to attract all nearby valuables, and maybe even a few hungry Wario-esque shoppers.  Holding this coin might just lead you on an endless treasure hunt – or straight into a bottomless pit!",
    "category": "equipment",
    "price": 18000,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increases gold find chance by 25%",
      "chance to trigger 'lucky break' effect (small stat boost)",
      "attracts nearby coins and valuables"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_delivery_drone",
    "levelRequirement": 9
  },
  "mushroom_kingdom_item_echoing_pipe": {
    "id": "mushroom_kingdom_item_echoing_pipe",
    "name": "Echoing Pipe of Lost Sounds",
    "description": "This ancient pipe, crafted from solidified mushroom spores and forgotten melodies, allows the user to briefly replay sounds from the past. Use it wisely – you might hear a valuable clue or just Wario yelling about more coins!",
    "category": "curiosities",
    "price": 75000,
    "icon": "🎶",
    "stock": 2,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "allows user to record and replay a short sound (max 3 seconds)",
      "can be used to reveal hidden passages or trigger events based on sound cues",
      "chance to attract mischievous ghosts with the recorded sound"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_express",
    "levelRequirement": 16
  },
  "mushroom_kingdom_item_warp_stool": {
    "id": "mushroom_kingdom_item_warp_stool",
    "name": "Wario's Warp Stool of Sudden Travel",
    "description": "This rickety stool, clearly assembled by Wario himself, can instantly transport you to a random location within the Mushroom Kingdom.  Hold on tight – you never know where you’ll end up! (Probably somewhere with a lot of coins.)",
    "category": "equipment",
    "price": 350,
    "icon": "🚀",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "teleports player to a random location within the current area (small radius)",
      "chance for negative status effect ('disoriented')",
      "can be used to quickly escape danger or reach hidden areas"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_carrier_beetle",
    "levelRequirement": 2
  },
  "middle_earth_gloomfang_blade": {
    "id": "middle_earth_gloomfang_blade",
    "name": "Gloomfang Blade",
    "description": "This wicked blade whispers with the shadows of Mordor! It’s rumored to be forged from a fallen star shard, and its edge can slice through even Orcish armor like butter. Just don't stare at it for too long – it might try to steal your soul!",
    "category": "equipment",
    "price": 18000,
    "icon": "🔪",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "damage: slashing +3",
      "chance to inflict bleeding (10%)",
      "shadow step: grants a short burst of speed"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "wagon",
    "levelRequirement": 7
  },
  "middle_earth_shire_sweetroll_of_fortune": {
    "id": "middle_earth_shire_sweetroll_of_fortune",
    "name": "Shire Sweetroll of Fortune",
    "description": "Legend says these sweetrolls, baked fresh from Hobbiton, hold a fragment of luck! Each bite offers a random bonus – maybe extra healing, a temporary buff, or… well, let’s just say you might attract some particularly chatty badgers. Wario would LOVE this!",
    "category": "consumables",
    "price": 350,
    "icon": "🍪",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal: 20-40 HP",
      "chance to grant +1 Strength for 3 turns",
      "chance to trigger a minor beneficial event (e.g., find a small amount of gold)"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony cart",
    "levelRequirement": 2
  },
  "middle_earth_elven_songstone": {
    "id": "middle_earth_elven_songstone",
    "name": "Songstone of Silvanus",
    "description": "A perfectly smooth, obsidian stone that pulses with ancient elven magic. Holding it allows the user to weave simple melodies of protection – shielding allies from harm and bolstering their spirits. This is a premium item, crafted by master elves!",
    "category": "curiosities",
    "price": 75000,
    "icon": "🎶",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "creates a protective aura (reduces damage from all sources by 15%)",
      "increases party morale (+2)",
      "chance to dispel negative status effects on allies"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 16
  },
  "grand_country_sticky_shard": {
    "id": "grand_country_sticky_shard",
    "name": "Gravity Grip Shard",
    "description": "This pulsating fragment seems to defy gravity, granting temporary adhesive properties! Stick to walls and ceilings with surprising agility – perfect for a Wario-style climb!",
    "category": "equipment",
    "price": 12000,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased_climbing_speed",
      "adhesive_grip",
      "reduced_fall_damage"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "gravity_packet",
    "levelRequirement": 9
  },
  "grand_country_layer_scroll": {
    "id": "grand_country_layer_scroll",
    "name": "Echoing Layer Scroll",
    "description": "Unroll this shimmering scroll and hear the whispers of forgotten layers! It briefly reveals hidden paths and secret doors – just don't get lost in the echoes!",
    "category": "curiosities",
    "price": 800,
    "icon": "📜",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveal_hidden_path",
      "chance_to_find_treasure",
      "minor_illusion_effect"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_tube",
    "levelRequirement": 3
  },
  "grand_country_warp_tune": {
    "id": "grand_country_warp_tune",
    "name": "Temporal Echo Tuning",
    "description": "Listen to the discordant symphony of shifting realities, and briefly manipulate time around you! A truly chaotic service that might just scramble your foes' minds - or yourself!",
    "category": "services",
    "price": 600,
    "icon": "🕰️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance_to_slow_enemy",
      "minor_time_dilation",
      "healing_over_time"
    ],
    "vendor": "side_seller",
    "shippedBy": "chronometric_crate",
    "levelRequirement": 6
  },
  "faerun_item_goblin_grog_potion": {
    "id": "faerun_item_goblin_grog_potion",
    "name": "Goblin Grog of Temporary Ferocity",
    "description": "A murky, suspiciously green concoction brewed by goblins known for their… unique palate. This potion smells faintly of rotten mushrooms and regret, but it grants a burst of strength and reckless abandon – perfect for charging headfirst into danger!",
    "category": "consumables",
    "price": 250,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "increases strength by 3 for 6 turns",
      "chance to stun target on hit (10%)"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "hawk",
    "levelRequirement": 2
  },
  "faerun_item_shard_of_ancient_echoes": {
    "id": "faerun_item_shard_of_ancient_echoes",
    "name": "Shard of Ancient Echoes",
    "description": "A fragment of a forgotten temple, pulsing with faint whispers of the past. Touching it evokes fleeting images and unsettling melodies – possibly from a lost civilization or just Wario’s terrible singing. Handle with caution!",
    "category": "curiosities",
    "price": 250000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "grants temporary insight (chance to succeed on skill checks)",
      "reveals hidden passages with a high chance of triggering traps",
      "emits a faint magical aura that attracts minor spirits"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magical_portal",
    "levelRequirement": 20
  },
  "pokemon_item_echoing_ball": {
    "id": "pokemon_item_echoing_ball",
    "name": "Echoing Ball of Confusion",
    "description": "This bizarre sphere seems to absorb the cries and roars of Pokémon, amplifying them into a disorienting wave. Use it to briefly stun enemies or confuse yourself - but don't blame us if you start hearing Pikachu singing opera!",
    "category": "consumables",
    "price": 850,
    "icon": "🤯",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "deals 1d6 psychic damage to target",
      "target has a 30% chance to become confused for 1 turn",
      "user suffers a minor confusion effect for 2 turns"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pokémail",
    "levelRequirement": 5
  },
  "pokemon_item_ancient_badge_of_wisdom": {
    "id": "pokemon_item_ancient_badge_of_wisdom",
    "name": "Ancient Badge of Wisdom",
    "description": "A weathered badge, said to have been crafted by a legendary Pokémon sage. Touching it grants fleeting glimpses into the strategic thinking of powerful trainers - perfect for analyzing your opponent's moves!",
    "category": "curiosities",
    "price": 3200,
    "icon": "🧠",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "grants +1 to Wisdom stat for 3 turns",
      "increases critical hit chance by 5% for 2 turns",
      "User gains insight into the weaknesses of their target."
    ],
    "vendor": "safari_shop",
    "shippedBy": "Safari Bike",
    "levelRequirement": 8
  },
  "pokemon_item_warios_evolution_pouch": {
    "id": "pokemon_item_warios_evolution_pouch",
    "name": "Wario’s Evolution Pouch",
    "description": "This suspiciously plump pouch smells faintly of berries and regret. Legend says it contains the concentrated essence of evolution – but mostly just a collection of partially digested Pokémon snacks, and Wario’s experimental formulas. Good luck!",
    "category": "equipment",
    "price": 12000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to randomly evolve the user’s current Pokémon (50% chance)",
      "increases attack stat by 10 for 2 turns",
      "User gains a temporary boost to their speed."
    ],
    "vendor": "league_store",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 10
  },
  "internet_glitch_berry": {
    "id": "internet_glitch_berry",
    "name": "Viral Burst Berry",
    "description": "These shimmering berries are remnants of a corrupted data stream – perfect for unleashing chaotic bursts of speed and temporary stat boosts! Consume one to experience a brief, exhilarating surge of internet energy.",
    "category": "consumables",
    "price": 1200,
    "icon": "💥",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_5_speed_for_6_turns",
      "chance_to_cause_confusion",
      "small_healing_effect"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "packet_delivery",
    "levelRequirement": 6
  },
  "internet_void_shard": {
    "id": "internet_void_shard",
    "name": "Nullspace Fragment",
    "description": "A jagged shard ripped from the heart of a forgotten server – handle with caution! This fragment can temporarily disrupt enemy magic and digital defenses, but prolonged exposure may lead to…unpleasant data corruption.",
    "category": "forbidden",
    "price": 75000,
    "icon": "👾",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "reduce_magic_damage_by_50%",
      "chance_to_silence_enemy_spellcasting",
      "small_drain_on_mana"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 18
  },
  "internet_meme_amplifier": {
    "id": "internet_meme_amplifier",
    "name": "Reaction Cascade Device",
    "description": "This absurd contraption harnesses the power of viral trends! Activate it to broadcast a wave of ridiculousness, temporarily boosting your party’s charisma and chance to trigger beneficial meme effects. Just try not to accidentally summon a horde of dancing hamsters.",
    "category": "equipment",
    "price": 23000,
    "icon": "🤣",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase_charisma_by_3",
      "chance_to_trigger_meme_effect (e.g., distraction, confusion)",
      "small_damage_over_time"
    ],
    "vendor": "data_dealer",
    "shippedBy": "delivery_only",
    "levelRequirement": 12
  },
  "the_edge_voidstone_resonator": {
    "id": "the_edge_voidstone_resonator",
    "name": "Voidstone Resonator",
    "description": "This pulsating, obsidian device hums with the echoes of forgotten realities. Holding it grants a temporary resistance to psychic attacks and whispers of unsettling knowledge… probably shouldn’t listen.",
    "category": "equipment",
    "price": 18000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "resistance to psychic damage (30)",
      "chance to gain madness (1%)",
      "increased perception"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional rift",
    "levelRequirement": 7
  },
  "the_edge_godly_abyssal_shard": {
    "id": "the_edge_godly_abyssal_shard",
    "name": "Abyssal Shard of Nullity",
    "description": "A fragment ripped from the heart of nothingness itself. Holding this shard drains all nearby magic and momentarily freezes time, a terrifyingly useful item for any greedy collector... or Wario!",
    "category": "equipment",
    "price": 750000,
    "icon": "🧊",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "nullifies magic within a 10-foot radius (5 rounds)",
      "chance to freeze enemies in time (1%)",
      "increased critical hit chance"
    ],
    "vendor": "final_shop",
    "shippedBy": "guardian angel",
    "levelRequirement": 25
  },
  "warhammer_skullsplitter": {
    "id": "warhammer_skullsplitter",
    "name": "Skullsplitter of Shattered Wills",
    "description": "This hefty warhammer feels like it was forged from the bones of a thousand fallen warriors! It’s guaranteed to crush your enemies... or at least make them really, *really* sad. Don't worry if you accidentally pulverize your own fingers – Wario wouldn't be caught dead complaining!",
    "category": "equipment",
    "price": 750,
    "icon": "🔨",
    "stock": 65,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "damage: 8-12 bludgeoning",
      "chance to inflict weakness",
      "increased critical hit chance",
      "warrior bonus"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier",
    "levelRequirement": 6
  },
  "curiosity_echoing_shard": {
    "id": "curiosity_echoing_shard",
    "name": "Echoing Shard of Lost Voices",
    "description": "A fragment of a forgotten empire’s communication device, this shard whispers with the echoes of past battles and desperate pleas. Touching it may reveal tactical advantages... or just give you a really bad headache! Wario's always been partial to things that sound like arguing.",
    "category": "curiosities",
    "price": 1200,
    "icon": "👂",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to reveal enemy weaknesses",
      "small chance of temporary stat boost",
      "detects hidden passages (low chance)",
      "causes minor psychic disturbance"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 8
  },
  "warhammer_voidbringer": {
    "id": "warhammer_voidbringer",
    "name": "Voidbringer's Lament",
    "description": "This cursed warhammer seems to pull at the very fabric of reality. Wielding it drains your strength, but grants glimpses into the chaotic energies of The Fated Place.  Don’t say you weren’t warned – Wario thinks it looks pretty cool, though!",
    "category": "equipment",
    "price": 18000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "damage: 15-20 bludgeoning",
      "chance to inflict fear",
      "increased critical hit damage",
      "slows enemy movement"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 11
  },
  "almost_edge_item_sticky_crumb": {
    "id": "almost_edge_item_sticky_crumb",
    "name": "Glazed Slipstone",
    "description": "A shimmering fragment of what was, perpetually stuck to the edge. It pulses with a faint, unsettling sweetness – and might just pull you closer to the void... or give you a surprisingly good grip.",
    "category": "consumables",
    "price": 250,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heals 10 HP",
      "Grants +3 to Dexterity for 3 turns",
      "Chance to gain Sticky Residue (temporary adhesive effect)"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Void Portal",
    "levelRequirement": 1
  },
  "almost_edge_item_chronal_brace": {
    "id": "almost_edge_item_chronal_brace",
    "name": "The Echo of the Fall",
    "description": "A tarnished silver brace etched with swirling patterns resembling a dropped pastry. Wearing this item allows you to briefly glimpse echoes of moments before they vanished from existence... but be warned, prolonged exposure can make your head spin like a dizzying doughnut.",
    "category": "equipment",
    "price": 8750,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Grants +4 to Intelligence",
      "Allows the wearer to cast 'Minor Temporal Shift' once per day (short range teleport)",
      "Increased susceptibility to madness (small chance)"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 6
  },
  "almost_edge_item_liminal_shard": {
    "id": "almost_edge_item_liminal_shard",
    "name": "Whispering Obsidian Tear",
    "description": "A perfectly smooth shard of obsidian that seems to hum with a forgotten lament. Holding it brings forth fleeting visions of lost places and impossible geometries—a collector's item for those who enjoy a good existential crisis.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🖤",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Grants +2 to Wisdom",
      "Provides vague prophetic clues (random effect)",
      "Increases resistance to psychic damage"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Phantom Delivery Drone",
    "levelRequirement": 7
  },
  "kivotos_item_halo_of_discord": {
    "id": "kivotos_item_halo_of_discord",
    "name": "Halo of Discordant Harmony",
    "description": "A shimmering halo crafted from shattered student club emblems. It amplifies your persuasive skills, but be warned – it also subtly sows chaos and disagreement amongst your foes! Perfect for a little Wario-style disruption.",
    "category": "curiosities",
    "price": 6500,
    "icon": "😈",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "increases persuasion skill by 30%",
      "chance to trigger a friendly fire effect on enemy attacks (15%)",
      "reduces enemy morale by 10%"
    ],
    "vendor": "club_supply",
    "shippedBy": "drone_delivery",
    "levelRequirement": 12
  },
  "kivotos_item_godly_notes_of_silence": {
    "id": "kivotos_item_godly_notes_of_silence",
    "name": "Notes of Silence - The Divine Manuscript",
    "description": "Legend says these notes were written by the founder of Kivotos, a collection of ancient secrets that can nullify magical effects. This item is incredibly rare and powerful... but be warned: prolonged use can cause severe existential dread – Wario might not appreciate it.",
    "category": "premium",
    "price": 750000,
    "icon": "🤫",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "completely negates all magical effects on the target for 6 turns",
      "chance to silence a spellcaster completely (25%)",
      "provides +10 bonus to saving throws against mind-altering spells"
    ],
    "vendor": "student_store",
    "shippedBy": "imperial_transport",
    "levelRequirement": 35
  },
  "faerun_item_wario_s_lucky_boots": {
    "id": "faerun_item_wario_s_lucky_boots",
    "name": "Wario’s Lucky Boot – Right Foot",
    "description": "These boots were supposedly blessed by Wario himself (don't ask!). They offer a surprising boost to speed and agility. Just don't expect them to help you find all the hidden gold… or give you an extra belly.",
    "category": "equipment",
    "price": 2300,
    "icon": "👟",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased_movement_speed",
      "bonus_to_dexterity_checks",
      "chance_to_dodge",
      "resistance_to_poison"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_pigeon",
    "levelRequirement": 10
  },
  "grand_country_sticky_vine": {
    "id": "grand_country_sticky_vine",
    "name": "Gooey Gravity Grip",
    "description": "This vine, harvested from the upside-down forests of The Grand Country, clings to anything with surprising tenacity! It's perfect for scaling treacherous cliffs or just grabbing a tasty Wario-sized snack.",
    "category": "equipment",
    "price": 7500,
    "icon": "🌿",
    "stock": 42,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_climbing_speed",
      "sticky_grip",
      "minor_gravity_resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "winged_beetle",
    "levelRequirement": 8
  },
  "grand_country_echoing_crumb": {
    "id": "grand_country_echoing_crumb",
    "name": "Harmonic Resonance Stone",
    "description": "A chunk of crystallized sound found deep within the layered canyons. Holding this stone allows you to briefly amplify your voice, useful for distracting enemies or calling for help (or just yelling ‘WAAAAH!’).",
    "category": "consumables",
    "price": 12000,
    "icon": "🔊",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "boosts_voice_volume",
      "chance_to_distract_enemy",
      "small_healing_effect"
    ],
    "vendor": "layer_market",
    "shippedBy": "phantom_delivery",
    "levelRequirement": 16
  },
  "grand_country_gravity_tune": {
    "id": "grand_country_gravity_tune",
    "name": "Temporal Echo Service",
    "description": "Our master chrono-mechanic, Silas Sprocket, can briefly rewind a single action for you - perfect for dodging a clumsy attack or redoing a failed jump. Limited uses, but invaluable!",
    "category": "services",
    "price": 25000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "rewind_single_action",
      "chance_to_avoid_damage",
      "small_mana_regeneration"
    ],
    "vendor": "side_seller",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 25
  },
  "curiosity_echoing_skull": {
    "id": "curiosity_echoing_skull",
    "name": "Echoing Skull of Lost Whispers",
    "description": "A perfectly preserved skull, radiating with an unsettling resonance. Holding it allows you to briefly hear fragments of conversations from the past – mostly complaints about taxes and bad weather.  Might be useful for interrogation... or just annoying people.",
    "category": "curiosities",
    "price": 800,
    "icon": "💀",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance to gain a minor clue (5%)",
      "temporary boost to charisma (3)"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Night Raven Delivery",
    "levelRequirement": 3
  },
  "faerun_item_stormblade_of_triumph": {
    "id": "faerun_item_stormblade_of_triumph",
    "name": "Stormblade of Triumph",
    "description": "Forged in the heart of a cyclonic storm, this greatsword crackles with raw elemental power. Wielding it grants you increased attack speed and damage against enemies weakened by lightning or wind! Just try not to accidentally summon a miniature hurricane – Wario would *love* that.",
    "category": "equipment",
    "price": 18900,
    "icon": "⚡",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+3 to attack rolls with this weapon",
      "deals an additional 1d6 lightning damage",
      "chance to inflict 'shocked' (DC 10 Constitution save or stunned for 1 round)"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_beast",
    "levelRequirement": 11
  },
  "faerun_item_whispering_amulet_of_zariel": {
    "id": "faerun_item_whispering_amulet_of_zariel",
    "name": "Zariel's Lament",
    "description": "A beautiful, obsidian amulet etched with unsettling glyphs. The amulet whispers dark promises and secrets of the fallen angel Zariel... beware! Holding this item grants you resistance to fire damage, but also a growing urge to spread chaos and despair. Wario would be *thrilled*!",
    "category": "premium",
    "price": 234500,
    "icon": "😈",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "fire resistance",
      "chance to inflict 'fear' on nearby enemies (DC 15 Wisdom save or frightened for 2 rounds)",
      "grants advantage on intimidation checks, but also disadvantage on charisma checks"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 23
  },
  "the_edge_ravenous_berries": {
    "id": "the_edge_ravenous_berries",
    "name": "Ravenous Berries of the Voidmaw",
    "description": "These dark berries pulse with a hungry energy. Consume them for a surge of raw power, but be warned – they crave something... and that something might just be *you*! Wario recommends eating only a few at a time.",
    "category": "consumables",
    "price": 275,
    "icon": "🍓",
    "stock": 85,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores_health",
      "temporarily_increases_hunger",
      "chance_to_gain_temporary_strength"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "flying_beast",
    "levelRequirement": 1
  },
  "the_edge_echoing_gauntlet": {
    "id": "the_edge_echoing_gauntlet",
    "name": "Echoing Gauntlet of the Lost",
    "description": "Forged from solidified echoes, this gauntlet amplifies your attacks but also distorts reality around you. It's rumored to be favored by those who crave power... and a good existential crisis. Don’t blame Wario if you accidentally summon yourself.",
    "category": "equipment",
    "price": 18000,
    "icon": "🧤",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increases_attack_damage",
      "chance_to_create_phantom_image",
      "boosts_critical_hit_chance",
      "reduces_accuracy"
    ],
    "vendor": "final_shop",
    "shippedBy": "temporal_flux",
    "levelRequirement": 9
  },
  "grand_country_forbidden_echo_stone": {
    "id": "grand_country_forbidden_echo_stone",
    "name": "Whispering Obsidian Heart",
    "description": "A smooth, black stone that seems to murmur secrets only you can almost understand. Touching it briefly grants glimpses into the past…but prolonged exposure leads to unsettling visions and a desperate craving for pie.  Don’t say we didn't warn you!",
    "category": "forbidden",
    "price": 75000,
    "icon": "💀",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "grant_3_wisdom",
      "chance_to_reveal_hidden_passages",
      "apply_confusion_for_4_turns"
    ],
    "vendor": "side_seller",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 17
  },
  "grand_country_godly_layered_orb": {
    "id": "grand_country_godly_layered_orb",
    "name": "The Infinite Layer Cake",
    "description": "This shimmering orb appears to be a miniature, edible world – constantly shifting with layers of frosting and fruit. Consuming it grants temporary mastery over spatial distortions, allowing you to briefly teleport short distances or create small pockets of altered gravity.  Just…try not to eat the whole thing.",
    "category": "premium",
    "price": 650000,
    "icon": "🍰",
    "stock": 2,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "grant_10_mana",
      "chance_to_teleport_5m",
      "create_small_gravity_well_for_3_turns",
      "increase_luck_by_50%"
    ],
    "vendor": "layer_market",
    "shippedBy": "Wario's Personal Transport",
    "levelRequirement": 40
  },
  "earth_land_goblin_goggles": {
    "id": "earth_land_goblin_goggles",
    "name": "Goblin Goggles of Muddled Vision",
    "description": "These goggles, pilfered from a particularly grumpy goblin tribe, distort reality slightly. They might help you spot hidden traps... or just make everything look like a giant, wobbly mushroom!",
    "category": "equipment",
    "price": 1800,
    "icon": "👓",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_illusion_sight_distortion",
      "chance_to_confuse_enemy",
      "increased_perception_1d4"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Rattle-Wrapped Package",
    "levelRequirement": 6
  },
  "earth_land_dragon_scale_shard": {
    "id": "earth_land_dragon_scale_shard",
    "name": "Shard of the Frost Dragon's Fury",
    "description": "A fragment chipped off a massive ice dragon's scale. It radiates intense cold and smells faintly of blueberries, which is surprisingly comforting.",
    "category": "curiosities",
    "price": 7500,
    "icon": "🧊",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deal_cold_damage_3d6",
      "chance_to_freeze_enemy",
      "resistance_to_frost",
      "temporary_movement_speed_increase_1d4"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Ice-Enchanted Cart",
    "levelRequirement": 8
  },
  "earth_land_shadow_whisper_scroll": {
    "id": "earth_land_shadow_whisper_scroll",
    "name": "Scroll of Forbidden Shadow Manipulation",
    "description": "This ancient scroll contains a dark ritual for summoning shadowy minions. Use with caution – the spirits aren't known for their good manners, and Wario would *love* to steal them!",
    "category": "forbidden",
    "price": 35000,
    "icon": "👻",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "summon_shadow_minion",
      "chance_to_deal_darkness_damage",
      "temporary_invisibility_1d6",
      "chance to inflict fear"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Black Raven Delivery",
    "levelRequirement": 14
  },
  "teyvat_item_wind_whisper_amulet": {
    "id": "teyvat_item_wind_whisper_amulet",
    "name": "Wind Whisper Amulet",
    "description": "This shimmering amulet, crafted from solidified wind currents near Storm Peaks, grants the wearer a slight advantage in aerial maneuvers and whispers secrets of the sky. It's rumored to have been blessed by Barbatos himself - hopefully he doesn't demand a toll!",
    "category": "equipment",
    "price": 23000,
    "icon": "🌬️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased_airborne_speed",
      "chance_to_dodge",
      "minor_wind_buff"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 10
  },
  "teyvat_item_liyue_dragon_scale_charm": {
    "id": "teyvat_item_liyue_dragon_scale_charm",
    "name": "Liyue Dragon Scale Charm",
    "description": "A formidable charm crafted from a shed scale of the Azure Dragon, this trinket pulses with elemental energy. It's said to bolster the wearer’s resilience and offers protection against water-based attacks - perfect for dealing with those slippery merchants!",
    "category": "faction",
    "price": 85000,
    "icon": "🐉",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increased_water_resistance",
      "chance_to_reflect_water_attacks",
      "minor_fire_damage_on_attack"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 20
  },
  "teyvat_item_inazuma_phantom_lantern": {
    "id": "teyvat_item_inazuma_phantom_lantern",
    "name": "Inazuma Phantom Lantern",
    "description": "This intricately carved lantern, imbued with the fading memories of lost souls, casts a chilling glow. It can briefly disorient enemies and allows the wielder to phase through spectral barriers - just try not to get stuck!",
    "category": "curiosities",
    "price": 750,
    "icon": "👻",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "disorient_enemy",
      "chance_to_phase",
      "minor_shadow_damage"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5
  },
  "leclaire_isle_sticky_crumb_bomb": {
    "id": "leclaire_isle_sticky_crumb_bomb",
    "name": "Sticky Crumb Bomb",
    "description": "This suspiciously cheerful pastry is packed with concentrated sugar and a surprisingly potent adhesive! Throw it at your enemies – they'll be stuck fast, unable to move or attack for a short time. Wario would totally use this to steal all the chocolate!",
    "category": "consumables",
    "price": 750,
    "icon": "💣",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "apply damage: 1d6",
      "root target for 3 turns",
      "chance to apply sticky effect"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 5
  },
  "leclaire_isle_golden_croissant_shield": {
    "id": "leclaire_isle_golden_croissant_shield",
    "name": "Golden Croissant Shield",
    "description": "Forged from the finest, magically-infused croissants of L'Eclaire Isle, this shield boasts a buttery defense and a surprisingly sharp edge. It even smells delicious – perfect for distracting your foes with its irresistible aroma!",
    "category": "equipment",
    "price": 18000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "armor class +2",
      "chance to deflect projectiles",
      "absorb 1d8 pastry damage"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Giant Pastry Cart",
    "levelRequirement": 10
  },
  "leclaire_isle_godly_frosting_of_eternal_sweetness": {
    "id": "leclaire_isle_godly_frosting_of_eternal_sweetness",
    "name": "Frosting of Eternal Sweetness",
    "description": "Legend says this frosting was crafted by the Dough Folk's most skilled confectioner, imbued with a touch of divine sweetness. Consume it to gain incredible resilience and an aura of delicious temptation - beware though its effects are unpredictable!",
    "category": "consumables",
    "price": 250000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "heal for 3d6",
      "grant +2 to charisma checks",
      "chance of temporary invulnerability (1 in 5)",
      "causes nearby enemies to become overly cheerful"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Angel Delivery",
    "levelRequirement": 30
  },
  "almost_edge_item_temporal_ripple": {
    "id": "almost_edge_item_temporal_ripple",
    "name": "Chronal Crumble",
    "description": "A shimmering fragment of warped time, this crumb tastes faintly of regret and stale frosting. Consuming it briefly accelerates your movements or slightly rewinds a failed action – but be warned, excessive use could unravel your very existence!",
    "category": "consumables",
    "price": 250,
    "icon": "⏳",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_3",
      "chance_undo_last_action_10%"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Package",
    "levelRequirement": 5
  },
  "almost_edge_item_void_echo_armor": {
    "id": "almost_edge_item_void_echo_armor",
    "name": "Silence's Embrace",
    "description": "This unsettling suit of armor seems to absorb sound and light, offering a strange protection against the horrors lurking just beyond perception. It feels cold to the touch, like staring into an endless void – perfect for those who enjoy listening to nothing.",
    "category": "equipment",
    "price": 8500,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor_5",
      "resistance_fear_30%",
      "grant_stealth_5"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Void Courier",
    "levelRequirement": 8
  },
  "almost_edge_item_liminal_memory_shard": {
    "id": "almost_edge_item_liminal_memory_shard",
    "name": "Forgotten Fragment",
    "description": "This iridescent shard pulses with the echoes of lost memories – glimpses of forgotten realities and unsettling faces. Holding it for too long can induce disorientation, phantom pains, and an overwhelming urge to eat frosting… or something else entirely.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_illusion_5%",
      "grant_wisdom_4",
      "detect_ghosts_20%"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Dimensional Package",
    "levelRequirement": 11
  },
  "grand_country_echoing_shard": {
    "id": "grand_country_echoing_shard",
    "name": "The Layered Lament",
    "description": "This shimmering shard appears to be formed from a broken piece of a massive, upside-down tower. Holding it close allows you to briefly mimic sounds - perfect for startling enemies or solving puzzles. Beware though, prolonged use can lead to an unsettling chorus in your head!",
    "category": "curiosities",
    "price": 850,
    "icon": "👂",
    "stock": 43,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "mimic_sound_1s",
      "chance_to_confuse_enemy",
      "increased_perception_5"
    ],
    "vendor": "layer_market",
    "shippedBy": "crystal_cart",
    "levelRequirement": 3
  },
  "grand_country_sticky_berry_potion": {
    "id": "grand_country_sticky_berry_potion",
    "name": "Wario's Grip Goo!",
    "description": "A vibrant, pulsing potion brewed from the rare sticky berries found only in the deepest layers of The Grand Country. This concoction dramatically increases your grip strength, making climbing and grappling a breeze – or at least incredibly messy!  Don’t blame us if you end up stuck to a wall.",
    "category": "consumables",
    "price": 1800,
    "icon": "🤲",
    "stock": 22,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "increased_strength_75",
      "reduced_fall_damage_50",
      "chance_to_stick_to_enemy"
    ],
    "vendor": "side_seller",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5
  },
  "middle_earth_sparkleberry_pie": {
    "id": "middle_earth_sparkleberry_pie",
    "name": "Sparkleberry Pie of Endless Delight",
    "description": "This pie, baked with berries grown in the hidden valleys of Rivendell, tastes suspiciously like Wario's favorite snacks! Each bite grants a temporary boost to happiness and charisma – perfect for charming grumpy dwarves or distracting Orcs.",
    "category": "consumables",
    "price": 850,
    "icon": "🥧",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_happiness",
      "increase_charisma",
      "grant_temporary_buff"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 5
  },
  "middle_earth_ringwraith_shadow_shard": {
    "id": "middle_earth_ringwraith_shadow_shard",
    "name": "Ringwraith's Shadow Shard",
    "description": "A fragment of a fallen Ringwraith’s power – pulsing with residual darkness. Touching it briefly grants you resistance to fear effects, but prolonged exposure might… well, let's just say you'll be craving donuts.",
    "category": "equipment",
    "price": 12000,
    "icon": "🌑",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "resistance_to_fear",
      "grant_temporary_darkvision",
      "chance_of_nightmare"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_message",
    "levelRequirement": 8
  },
  "middle_earth_dragon_scale_amulet": {
    "id": "middle_earth_dragon_scale_amulet",
    "name": "Dragon Scale Amulet of Scorched Courage",
    "description": "This amulet was supposedly crafted by a young dragon, and radiates intense heat. Wear it to bolster your courage and briefly ignite your attacks with fiery power – just try not to set anything on fire… unless it's Wario’s inventory.",
    "category": "forbidden",
    "price": 7500,
    "icon": "🔥",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase_attack_damage",
      "chance_of_fire_damage",
      "boost_courage",
      "temporary_fire_resistance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_eagle",
    "levelRequirement": 10
  },
  "connectopia_block_shatterer": {
    "id": "connectopia_block_shatterer",
    "name": "Block Shatterer",
    "description": "This hefty hammer is made from compressed block fragments and imbued with a tiny bit of chaotic energy! Smash through those stubborn rock walls and fortifications – it’s guaranteed to leave a satisfying crater. Wario would totally use this to demolish his competition's buildings!",
    "category": "equipment",
    "price": 12000,
    "icon": "🔨",
    "stock": 8,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increases mining speed by 15%",
      "chance to shatter blocks on hit (20%)",
      "adds 10 armor points"
    ],
    "vendor": "block_smith",
    "shippedBy": "wagon",
    "levelRequirement": 6
  },
  "connectopia_wario_wrench": {
    "id": "connectopia_wario_wrench",
    "name": "Wario's Deluxe Repair Wrench",
    "description": "A slightly battered, but surprisingly effective wrench – clearly favored by a certain greedy inventor! This tool can fix broken machinery, activate dormant devices, and… well, cause general mayhem. It’s practically begging to be used for something delightfully destructive.",
    "category": "equipment",
    "price": 600,
    "icon": "🔧",
    "stock": 15,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to repair broken equipment (15%)",
      "adds +3 to crafting checks",
      "allows quick disassembly of enemy traps"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_drone",
    "levelRequirement": 2
  },
  "leclaire_isle_crumbly_boots": {
    "id": "leclaire_isle_crumbly_boots",
    "name": "Crumbly Boots of Sticky Steps",
    "description": "These boots are made from the finest, slightly-soggy dough! They'll make you move with surprising speed...and leave a trail of delicious crumbs behind. Just watch out for hungry squirrels!",
    "category": "equipment",
    "price": 6500,
    "icon": "🍪",
    "stock": 78,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "movement_speed_increased_2",
      "sticky_landing",
      "crumb_trail"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 6
  },
  "leclaire_isle_forbidden_frosting_dagger": {
    "id": "leclaire_isle_forbidden_frosting_dagger",
    "name": "Forbidden Frosting Dagger of Sweet Decay",
    "description": "A wickedly delightful dagger crafted from solidified frosting and dark sugar. Legend says it was created by a disgruntled baker, and its touch causes foes to…well, become intensely sweet and then slowly decompose.  Don't say I didn’t warn you!",
    "category": "forbidden",
    "price": 12000,
    "icon": "🍬",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "deals_extra_poison_damage",
      "target_becomes_sticky",
      "slows_movement_speed_50%"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Delivery Pigeon",
    "levelRequirement": 12
  },
  "leclaire_isle_whimsical_wand": {
    "id": "leclaire_isle_whimsical_wand",
    "name": "Whimsical Wand of Sugar Rush",
    "description": "This tiny wand is made from a solidified cloud of spun sugar! Wave it to create bursts of sugary energy or conjure up miniature pastries. Just don't get addicted – the Dough Folk warned us!",
    "category": "curiosities",
    "price": 3800,
    "icon": "✨",
    "stock": 52,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "creates_small_healing_potion",
      "chance_to_confuse_target",
      "summon_miniature_pastry"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Honeycomb Drone",
    "levelRequirement": 4
  },
  "faerun_item_ancient_rune_stone": {
    "id": "faerun_item_ancient_rune_stone",
    "name": "Ancient Rune Stone of Whispering Winds",
    "description": "This smooth, grey stone hums with forgotten magic. Rubbing it against your ear will (probably) reveal cryptic prophecies… or just a really annoying whistling sound.  Wario would totally try to sell this as a 'lucky charm'!",
    "category": "curiosities",
    "price": 8500,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to gain a cryptic prophecy (10%)",
      "increases spellcasting focus by 5%",
      "attracts curious woodland creatures"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "giant_owl",
    "levelRequirement": 8
  },
  "connectopia_instant_fix_potion": {
    "id": "connectopia_instant_fix_potion",
    "name": "Quick Patch Potion",
    "description": "Stuck in a collapsing structure? This shimmering potion instantly repairs minor damage to your equipment – or yourself! Just don't expect it to fix a broken soul, that’s a job for the Pioneer Post.  Warning: May cause uncontrollable urges to rearrange things.",
    "category": "consumables",
    "price": 250,
    "icon": "🩹",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heals 50 HP",
      "repairs 1-3 equipment slots",
      "chance to trigger a brief disorientation effect (5%)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "delivery_drone",
    "levelRequirement": 2
  },
  "connectopia_geode_of_ancient_codes": {
    "id": "connectopia_geode_of_ancient_codes",
    "name": "Nexus Core Fragment",
    "description": "Recovered from the deepest mines of Connectopia, this geode hums with forgotten network protocols. It grants access to advanced crafting recipes and occasionally manifests strange, shifting blocks – perfect for a Wario-style surprise!  Don’t stare at it too long or you might start speaking in binary.",
    "category": "curiosities",
    "price": 80000,
    "icon": "💎",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "unlocks advanced crafting recipes (5)",
      "chance to spawn a small block puzzle (10%)",
      "increases intelligence by 3",
      "provides resistance to network interference"
    ],
    "vendor": "craft_corner",
    "shippedBy": "express_crate",
    "levelRequirement": 12
  },
  "leclaire_isle_doughy_duster": {
    "id": "leclaire_isle_doughy_duster",
    "name": "Doughy Duster",
    "description": "This fluffy duster is made from spun sugar and hardened croissant dough! It's surprisingly effective at removing grime, sticky goo, and the occasional grumpy Dough Folk.  Just be careful not to eat it… mostly.",
    "category": "consumables",
    "price": 750,
    "icon": "🧹",
    "stock": 62,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "cleanses target of minor filth (1d4)",
      "restores 5 points of happiness",
      "chance to trigger a giggle effect"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 3
  },
  "leclaire_isle_frosting_fist": {
    "id": "leclaire_isle_frosting_fist",
    "name": "Frosting Fist Gauntlet",
    "description": "Forged from solidified buttercream and reinforced with gingerbread plating, this gauntlet grants surprising strength! It's perfect for smashing through stale pastries or intimidating smaller creatures... mostly harmless.",
    "category": "equipment",
    "price": 6500,
    "icon": "🧤",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases strength by 4",
      "chance to inflict 'Sticky Situation' (target slows down)",
      "adds +1 to attack rolls against dough-based creatures"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Sugar Delivery Drone",
    "levelRequirement": 8
  },
  "leclaire_isle_chronometric_cookie": {
    "id": "leclaire_isle_chronometric_cookie",
    "name": "Chronometric Cookie of Temporal Tastes",
    "description": "This enchanted cookie seems to subtly shift through different flavors and moments in time! Taking a bite might briefly transport you back to your favorite childhood dessert or forward to the taste of future delicacies. Wario would pay anything for one!",
    "category": "curiosities",
    "price": 12000,
    "icon": "🍪",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "allows the user to briefly glimpse a possible future (1d6 rounds)",
      "chance to gain temporary advantage on a single skill check",
      "may cause uncontrollable cravings for sweets"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 12
  },
  "kivotos_item_club_supply_shock_darts": {
    "id": "kivotos_item_club_supply_shock_darts",
    "name": "Shock Darts of Discord",
    "description": "These miniature dart launchers are a staple for any student club looking to stir up a little chaos.  They deliver a surprisingly potent jolt – perfect for interrupting boring lectures or… other activities.",
    "category": "consumables",
    "price": 800,
    "icon": "⚡",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deal_6_electric_damage",
      "chance_to_stun_target_20%"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 5
  },
  "kivotos_item_premium_academy_charm": {
    "id": "kivotos_item_premium_academy_charm",
    "name": "Academy Authority Charm",
    "description": "This intricately designed charm, endorsed by the Academy's Headmaster, subtly influences those around you. It doesn’t grant outright control, but it *does* make people more receptive to your ideas… mostly.",
    "category": "premium",
    "price": 6000,
    "icon": "🎓",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increase_persuasion_chance_15%",
      "grant_advantage_on_social_rolls",
      "player_becomes_slightly_more_important"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Delivery System",
    "levelRequirement": 8
  },
  "equestria_item_apple_juice_potion": {
    "id": "equestria_item_apple_juice_potion",
    "name": "Apple Juice of Revitalization",
    "description": "A bubbling concoction brewed with the finest Gala apples from Sweet Apple Grove! This potion restores vitality and combats fatigue – perfect for those long adventures or Wario's excessive eating.",
    "category": "consumables",
    "price": 250,
    "icon": "🍎",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 30 HP",
      "regenerates health over 60 seconds",
      "increases stamina regeneration"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Delivery Pony",
    "levelRequirement": 1
  },
  "equestria_item_star_map_fragment": {
    "id": "equestria_item_star_map_fragment",
    "name": "Fragment of the Celestial Star Map",
    "description": "A tiny, intricately detailed piece of a star chart – believed to guide lost ponies and reveal hidden pathways through Equestria! It’s cold to the touch and seems to whisper secrets… probably just Wario's cravings.",
    "category": "curiosities",
    "price": 800,
    "icon": "⭐",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "reveals hidden pathways on the map (10% chance)",
      "grants +2 to perception",
      "chance to detect magical auras"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 5
  },
  "internet_pixel_plunger": {
    "id": "internet_pixel_plunger",
    "name": "Pixel Plunger of Viral Removal",
    "description": "This strange device vibrates with the energy of a thousand memes! Use it to forcefully delete unwanted data streams and even temporarily reverse viral trends – great for getting rid of that annoying dance craze!",
    "category": "consumables",
    "price": 7500,
    "icon": "🚽",
    "stock": 42,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "restores 10% health",
      "chance to inflict 'meme overload' (confusion for 3 turns)",
      "removes all negative status effects"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Data Drone",
    "levelRequirement": 8
  },
  "internet_data_scan": {
    "id": "internet_data_scan",
    "name": "Rapid Data Scan Service",
    "description": "Need to find a specific file buried deep within the chaotic network? Our highly-trained data probes will swiftly locate and retrieve any digital information – just don’t ask where they took it from!",
    "category": "services",
    "price": 1200,
    "icon": "🔍",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "instantly reveals hidden locations on the map",
      "chance to gain a temporary 'data intuition' buff (increased perception)"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Packet Courier",
    "levelRequirement": 5
  },
  "mushroom_kingdom_warp_pipe": {
    "id": "mushroom_kingdom_warp_pipe",
    "name": "Wario's Quantum Shifter",
    "description": "This bizarre pipe, salvaged from a dimensional rift, allows for short-range teleportation! It’s slightly unstable and might deposit you inside a giant mushroom or directly into Wario’s belly. Use with caution (and a large spoon).",
    "category": "equipment",
    "price": 12000,
    "icon": "🚀",
    "stock": 35,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "teleport - short range (5-10 meters)",
      "chance to gain 20 temporary HP",
      "small chance of materializing inside a solid object"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 8
  },
  "mushroom_kingdom_forbidden_coin": {
    "id": "mushroom_kingdom_forbidden_coin",
    "name": "The Coin of Unending Greed",
    "description": "This ancient coin radiates an unnerving aura. Touching it grants immense wealth… and a crippling obsession with collecting! Beware, prolonged use may transform you into a sentient pile of gold.",
    "category": "forbidden",
    "price": 75000,
    "icon": "💰",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "grants 500 gold upon use",
      "increases chance of finding rare items by 20%",
      "chance (10%) to become obsessed with collecting, reducing party efficiency"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 15
  },
  "mushroom_kingdom_godly_power_shard": {
    "id": "mushroom_kingdom_godly_power_shard",
    "name": "Wario’s Heart of Velocity",
    "description": "A fragment of pure, concentrated Wario-ness! This shard grants incredible bursts of speed and a primal urge to smash things. Use it wisely… or don't; Wario wouldn't judge.",
    "category": "equipment",
    "price": 850000,
    "icon": "⚡",
    "stock": 3,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "increases movement speed by 50% for 10 seconds",
      "chance (30%) to trigger a 'Wario Smash' attack",
      "grants temporary resistance to physical damage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 28
  },
  "almost_edge_voidshard_resonator": {
    "id": "almost_edge_voidshard_resonator",
    "name": "Voidshard Resonator",
    "description": "A pulsing fragment of the void, humming with chaotic energy. When activated, it emits a wave of distortion, briefly scrambling enemy targeting and disrupting magical connections.",
    "category": "equipment",
    "price": 35000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Chance to disrupt enemy spellcasting (30%)",
      "Reduces targeting accuracy of enemies by 15%",
      "Grants +2 to Wisdom saving throws"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Black Hole Delivery Service",
    "levelRequirement": 9
  },
  "almost_edge_mythic_echo_of_the_fall": {
    "id": "almost_edge_mythic_echo_of_the_fall",
    "name": "Echo of the Fall",
    "description": "A swirling vortex of forgotten screams, trapped within a shimmering bubble. Touching it floods your mind with fragmented memories – overwhelming and potentially maddening, but offering glimpses into the true nature of the Edge.",
    "category": "curiosities",
    "price": 180000,
    "icon": "🤯",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "Grants temporary madness (random effects)",
      "Reveals hidden pathways and secrets (5% chance per turn)",
      "Increases intelligence by 5 for 3 turns",
      "Provides a cryptic prophecy related to the Edge's fate."
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Reality Anchor Drone",
    "levelRequirement": 22
  },
  "the_edge_voidshard_whisper": {
    "id": "the_edge_voidshard_whisper",
    "name": "Voidshard Whisper",
    "description": "This pulsating shard feels strangely warm to the touch, as if humming with forgotten screams from the abyss. Consuming it grants a fleeting glimpse into potential futures - mostly involving you getting lost and encountering something *really* weird.",
    "category": "consumables",
    "price": 7500,
    "icon": "🔮",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Heal 15 HP",
      "Chance to gain a temporary madness effect (e.g., uncontrollable giggling)",
      "Increase movement speed by 20% for 6 seconds"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 7
  },
  "the_edge_chronal_anchor": {
    "id": "the_edge_chronal_anchor",
    "name": "Chronal Anchor of Echoes",
    "description": "Forged from solidified time itself, this ornate anchor allows you to briefly rewind a single action. Be careful - messing with the flow of existence is never a good idea unless you're really hungry.",
    "category": "equipment",
    "price": 60000,
    "icon": "⏳",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Allows the user to rewind their last action by up to 3 seconds.",
      "Increases critical hit chance by 10%",
      "Reduces stamina consumption by 5%"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Delivery Service",
    "levelRequirement": 16
  },
  "the_edge_obsidian_puzzlebox": {
    "id": "the_edge_obsidian_puzzlebox",
    "name": "The Infinite Puzzlebox",
    "description": "This seemingly simple puzzlebox shifts and changes, presenting a never-ending stream of interconnected gears. Solve the correct combination to unleash a wave of chaotic energy... or just stare at it until you go completely insane.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🔤",
    "stock": 85,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Chance to trigger a random status effect (e.g., confusion, slow)",
      "Small chance of summoning a minor illusionary creature.",
      "Provides +1 to Intelligence"
    ],
    "vendor": "final_shop",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 3
  },
  "grand_country_crumb_of_ascension": {
    "id": "grand_country_crumb_of_ascension",
    "name": "Crumb of Ascension",
    "description": "A tiny fragment broken off from the colossal 'Layered Peak'. When consumed, it grants a momentary burst of upward momentum, perfect for scaling tricky cliffs or escaping sticky situations. Just don't eat too many – you might end up floating away!",
    "category": "consumables",
    "price": 65000,
    "icon": "🚀",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "grant temporary upward momentum (3 turns)",
      "chance to gain a stacking 'Climbing' buff",
      "recover 20% HP"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravity Pod",
    "levelRequirement": 18
  },
  "grand_country_chronal_crumb": {
    "id": "grand_country_chronal_crumb",
    "name": "Chronal Crumb of Disorientation",
    "description": "This shimmering, jelly-like crumb seems to exist slightly out of sync with reality. Eating it briefly scrambles your senses and perception - a handy distraction for escaping pursuers or confusing enemies! But be warned, prolonged exposure may lead to existential dread...or just a really bad headache.",
    "category": "curiosities",
    "price": 80000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "random_confusion (chance to stun)",
      "illusionary_duplicate (creates a temporary decoy)",
      "temporal_distortion (briefly slows time)"
    ],
    "vendor": "side_seller",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 18
  },
  "grand_country_void_shard": {
    "id": "grand_country_void_shard",
    "name": "Void Shard of Oblivion",
    "description": "A fragment ripped from the nothingness between layers, this shard pulses with a chilling emptiness. Holding it grants momentary access to the void, allowing you to briefly phase through solid objects – but at a terrible cost. Prolonged use can erase memories and drain your very essence!",
    "category": "forbidden",
    "price": 300000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "godly",
    "stockType": "back_order",
    "effects": [
      "phase_through_obstacles (limited duration)",
      "soul_drain (gradually reduces HP)",
      "memory_loss (chance to forget abilities)"
    ],
    "vendor": "layer_market",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 35
  },
  "equestria_item_sugar_coated_hoof": {
    "id": "equestria_item_sugar_coated_hoof",
    "name": "Sugar Coated Hoof Charm",
    "description": "A delightfully sticky charm crafted by the Cutie Mark Crusaders themselves! This trinket grants a small boost to movement speed and a chance to sweet-talk your way out of tricky situations – it’s surprisingly effective!",
    "category": "consumables",
    "price": 380,
    "icon": "🍬",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase movement speed by 10%",
      "+5% chance to succeed on persuasion checks"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Delivery",
    "levelRequirement": 2
  },
  "equestria_item_shadow_hoof_badge": {
    "id": "equestria_item_shadow_hoof_badge",
    "name": "Shadow Hoof Badge of the Night Brigade",
    "description": "Officially sanctioned by the Night Brigade, this badge grants access to their shadowy tactics and a small boost in stealth. Beware, prolonged use may lead to an unsettling fondness for midnight snacks!",
    "category": "faction",
    "price": 12000,
    "icon": "🌑",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increase stealth by 20%",
      "+5 to Dexterity checks",
      "chance to inflict 'Shadowed' status effect (reduces light-based attacks)"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Gryphon Courier",
    "levelRequirement": 14
  },
  "almost_edge_crumb_of_reality": {
    "id": "almost_edge_crumb_of_reality",
    "name": "Crumb of Reality",
    "description": "A shimmering fragment pulled from the endless void – it tastes faintly of regret and stale sprinkles. Holding this crumb for a moment can briefly distort your perception, allowing you to see glimpses of impossible geometries.",
    "category": "curiosities",
    "price": 7500,
    "icon": "✨",
    "stock": 42,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant_temporary_vision",
      "chance_to_cause_confusion",
      "increase_perception_by_5",
      "absorb_small_amounts_of_void_energy"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 9
  },
  "almost_edge_void_lantern": {
    "id": "almost_edge_void_lantern",
    "name": "Void Lantern of Lost Reflections",
    "description": "This lantern isn't meant for illumination, but rather to amplify the echoes of forgotten places. The light it casts doesn’t reveal, but instead whispers suggestions and unsettling half-memories.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔦",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance_to_reveal_hidden_paths",
      "increases_critical_hit_chance by 10%",
      "provides resistance to fear effects",
      "emits a faint, unsettling hum"
    ],
    "vendor": "void_merchant",
    "shippedBy": "gravitational_pulses",
    "levelRequirement": 15
  },
  "almost_edge_whisper_of_the_boundary": {
    "id": "almost_edge_whisper_of_the_boundary",
    "name": "Whisper of the Boundary - Service Token",
    "description": "A polished obsidian disc that hums with an unnerving resonance. Presenting this to a Liminal Trader grants you a single, cryptic piece of advice – often useless, sometimes terrifyingly insightful.",
    "category": "services",
    "price": 2500,
    "icon": "🗣️",
    "stock": 99,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "provides access to a random divination spell",
      "chance to gain a temporary buff",
      "grant_small_amount_of_mana",
      "may reveal secrets of the location"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal_flux",
    "levelRequirement": 3
  },
  "connectopia_block_of_echoes": {
    "id": "connectopia_block_of_echoes",
    "name": "Block of Echoes",
    "description": "This strangely resonant block pulses with the memories of Connectopia’s earliest miners! When struck, it replays snippets of forgotten conversations and the clang of early tools – a handy distraction for grumpy explorers or a surprisingly accurate record of your last misadventure.",
    "category": "curiosities",
    "price": 3500,
    "icon": "🔊",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_10_focus",
      "chance_to_trigger_illusionary_echoes (5%)",
      "increases mining speed by 10% for 3 turns"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_only",
    "levelRequirement": 6
  },
  "connectopia_pioneer_boots": {
    "id": "connectopia_pioneer_boots",
    "name": "Pioneer Boots of Steady Ground",
    "description": "These sturdy boots were crafted by the finest block-smiths! They're reinforced with hardened gravel and infused with a touch of stubbornness – perfect for stomping through Connectopia’s treacherous terrain and resisting slippery slopes.",
    "category": "equipment",
    "price": 1200,
    "icon": "🥾",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increases movement speed by 15%",
      "grants resistance to falling damage (small)",
      "chance to avoid slipping on ice/mud (10%)"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_only",
    "levelRequirement": 4
  },
  "connectopia_crystal_shard_of_confusion": {
    "id": "connectopia_crystal_shard_of_confusion",
    "name": "Crystal Shard of Confusion",
    "description": "A fragment of a larger crystal, said to have been shattered during a particularly chaotic mining expedition! Holding this shard causes mild disorientation and a strong urge to build random structures – perfect for disrupting enemies or accidentally creating a towering block fortress.",
    "category": "curiosities",
    "price": 800,
    "icon": "😵‍💫",
    "stock": 15,
    "rarity": "common",
    "stockType": "special_order",
    "effects": [
      "chance to confuse target (20%) for 3 turns",
      "decreases accuracy by 10%",
      "increases crafting speed by 5%"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "delivery_only",
    "levelRequirement": 2
  },
  "almost_edge_item_glimmering_crumb": {
    "id": "almost_edge_item_glimmering_crumb",
    "name": "Glimmering Crumb of Despair",
    "description": "A tiny, iridescent fragment from a forgotten doughnut dimension. It pulses with a faint, unsettling light and may or may not grant temporary resistance to existential dread...or just make you feel slightly emptier.",
    "category": "consumables",
    "price": 150,
    "icon": "✨",
    "stock": 72,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heal 5 HP",
      "Increase luck by 3 for 1 minute",
      "Chance to inflict 'Mild Discomfort' on a single target (10%)"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Slipstream",
    "levelRequirement": 1
  }
};
