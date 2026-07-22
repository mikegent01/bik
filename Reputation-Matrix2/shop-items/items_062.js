// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_062 = {
  "teyvat_item_elemental_resonance": {
    "id": "teyvat_item_elemental_resonance",
    "name": "Harmonic Echo Bloom",
    "description": "This bizarre flower pulses with raw elemental energy! Holding it near a source of wind, water, fire, or earth will amplify your attacks – Wario would totally use this to steal all the fruit!",
    "category": "consumables",
    "price": 12000,
    "icon": "✨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases attack damage by 15% for 10 seconds",
      "chance to trigger elemental status effect on hit",
      "restores a small amount of mana"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 8
  },
  "teyvat_item_archon_seal": {
    "id": "teyvat_item_archon_seal",
    "name": "Seal of the Verdant Archon",
    "description": "Forged from solidified essence of the Geo Archon, this seal grants you a temporary boost to defense and earth magic! Don't let it fall into the wrong hands... or Wario’s greedy clutches!",
    "category": "equipment",
    "price": 35000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "increases armor by 50 for 30 seconds",
      "boosts earth magic damage by 20%",
      "chance to stun enemies on hit"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 14
  },
  "teyvat_item_vision_artifact": {
    "id": "teyvat_item_vision_artifact",
    "name": "The Wayfarer’s Compass",
    "description": "This ornate compass doesn't point north, it points to the most valuable treasure! Wario would get lost with this thing, but hey, at least you'll find gold!",
    "category": "curiosities",
    "price": 250000,
    "icon": "🧭",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance to reveal hidden treasure locations on the map",
      "increases exploration speed by 30%",
      "provides a small bonus to luck rolls"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "dragon_airship",
    "levelRequirement": 22
  },
  "midlands_item_dragonscale_potion": {
    "id": "midlands_item_dragonscale_potion",
    "name": "Dragon's Breath Recovery Potion",
    "description": "A potent brew distilled from the shed scales of a juvenile Emberwing Dragon! This shimmering red potion instantly restores 50 HP and grants temporary fire resistance – perfect for those pesky flame-wielding foes.  Just try not to set your hair on fire!",
    "category": "consumables",
    "price": 1800,
    "icon": "🔥",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "heal: 50 HP",
      "fire resistance: 20% for 60 seconds",
      "chance to ignite enemy: 5%"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "winged_beast",
    "levelRequirement": 4
  },
  "midlands_item_obsidian_amulet": {
    "id": "midlands_item_obsidian_amulet",
    "name": "The Shattered Emperor's Eye",
    "description": "A fragment of a once-magnificent amulet, rumored to have belonged to the last Emperor of The Midlands. This dark obsidian piece pulses with a faint magical energy, and if you hold it tight enough, you might just glimpse echoes of the past... or a really bad headache!  Don't say I didn't warn you.",
    "category": "curiosities",
    "price": 7200,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to reveal hidden passage: 15%",
      "small chance of temporary stat boost (wisdom): 2-4",
      "attracts minor magical creatures"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant_snail",
    "levelRequirement": 9
  },
  "equestria_item_discord_echo": {
    "id": "equestria_item_discord_echo",
    "name": "Discord's Echoing Stone",
    "description": "A chilling, obsidian stone pulsing with residual discord. Holding it can temporarily grant you a limited ability to sow chaos and confusion amongst your foes – but beware, prolonged use might attract the attention of Discord himself (and Wario’s hunger).",
    "category": "forbidden",
    "price": 45000,
    "icon": "😈",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "chance_to_cause_confusion_30%",
      "reduce_enemy_attack_power_20%",
      "small_chance_of_wario_disruption"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Shadow Delivery (Highly Unreliable)",
    "levelRequirement": 22
  },
  "faerun_item_godly_shard_of_zariel": {
    "id": "faerun_item_godly_shard_of_zariel",
    "name": "Shard of the Fallen Angel’s Wrath",
    "description": "A pulsating fragment from Zariel's shattered essence. Touching this shard feels like being briefly consumed by righteous fury... and a slight headache. Don't say you weren't warned about the consequences of messing with demonic artifacts!",
    "category": "premium",
    "price": 876543,
    "icon": "😈",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "massive_damage_to_undead",
      "chance_for_divine_intervention",
      "permanent_corruption (low chance)",
      "boosts strength and attack damage"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 30
  },
  "almost_edge_crumb_of_eternity": {
    "id": "almost_edge_crumb_of_eternity",
    "name": "Crumb of Eternity",
    "description": "A shimmering fragment of what was, or perhaps still is – a tiny piece of the void’s endless cycle. Consuming this crumb grants temporary resistance to fear and madness, perfect for facing the unsettling echoes of forgotten realities. Just don't stare at it for too long...",
    "category": "consumables",
    "price": 7500,
    "icon": "✨",
    "stock": 32,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant 10 temporary resistance to fear",
      "grant 5 temporary resistance to madness",
      "heals 50 HP"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 9
  },
  "almost_edge_void_essence_flask": {
    "id": "almost_edge_void_essence_flask",
    "name": "Void Essence Flask",
    "description": "A murky, swirling flask filled with the concentrated nothingness of the void. This potent elixir can briefly grant incredible speed and reflexes, but prolonged use risks dissolving your very being into oblivion!  Don't say I didn’t warn you...",
    "category": "consumables",
    "price": 1200,
    "icon": "💨",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increases movement speed by 50% for 2 turns",
      "chance to dodge attacks (15%)",
      "grants +3 Dexterity for 1 turn"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravitational package",
    "levelRequirement": 2
  },
  "warhammer_fatebinder": {
    "id": "warhammer_fatebinder",
    "name": "Fatebinder's Crimson Shard",
    "description": "This obsidian shard pulses with chaotic energy, allowing you to briefly manipulate the flow of battle. Wield it carefully – a wrong move could unravel your allies’ fates! It’s guaranteed to mess with enemy spellcasters.",
    "category": "consumables",
    "price": 6500,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to nullify a spell",
      "increased damage against undead",
      "temporary boost to attack rolls",
      "chance to inflict 'confusion'"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Winged Courier",
    "levelRequirement": 8
  },
  "warhammer_chaos_amulet": {
    "id": "warhammer_chaos_amulet",
    "name": "Amulet of Unmaking",
    "description": "This unsettling amulet whispers promises of destruction and entropy. Wear it to bolster your defenses against the void, but be warned – prolonged exposure might drive you mad! It's a collector’s item for those who appreciate delightful chaos.",
    "category": "curiosities",
    "price": 4500,
    "icon": "💀",
    "stock": 33,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased armor class",
      "chance to reflect damage",
      "resistance to necrotic damage",
      "small chance of causing temporary madness on hit"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Void Runner",
    "levelRequirement": 10
  },
  "earth_land_mythic_stone_of_echoes": {
    "id": "earth_land_mythic_stone_of_echoes",
    "name": "The Whispering Chunk",
    "description": "This enormous, pulsating stone seems to hold the echoes of a thousand forgotten voices. Touching it can reveal cryptic prophecies… or just make you feel incredibly confused. Wario says it’s great for distracting enemies!",
    "category": "curiosities",
    "price": 150000,
    "icon": "🗣️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "once per day, grants the user a cryptic prophecy (determined by DM)",
      "causes enemies within 30 feet to become momentarily confused (DC 15 Wisdom save to avoid stunned for one round)",
      "provides +5 to Perception checks"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Giant Beetle Courier",
    "levelRequirement": 22
  },
  "grand_country_crumb_of_gravity": {
    "id": "grand_country_crumb_of_gravity",
    "name": "Gravity Crumb",
    "description": "These shimmering crumbs seem to defy the laws of physics, momentarily reversing local gravity! Consume one to briefly float upwards or push objects with a gentle tug – perfect for reaching those tricky spots or annoying your enemies.",
    "category": "consumables",
    "price": 7500,
    "icon": "✨",
    "stock": 35,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant_temporary_levitation",
      "apply_gravity_push",
      "increase_jump_height"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "hovering_parcel",
    "levelRequirement": 9
  },
  "grand_country_layer_shift_service": {
    "id": "grand_country_layer_shift_service",
    "name": "Layered Reality Adjustment",
    "description": "Feeling a bit...stacked? This service expertly manipulates the local layers of reality, briefly altering your character's position within them. It’s like folding space – mostly useful for getting out of tight spots and confusing enemies.",
    "category": "services",
    "price": 12000,
    "icon": "🔄",
    "stock": 15,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "teleport_to_adjacent_layer",
      "chance_of_dimensional_shift",
      "temporary_phase_immunity"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 15
  },
  "grand_country_shard_of_the_vertical": {
    "id": "grand_country_shard_of_the_vertical",
    "name": "Vertical Resonance Shard",
    "description": "A jagged fragment of rock that pulses with strange energy. Holding this shard allows you to briefly enhance your climbing abilities, scaling walls and cliffs with unnatural speed – just don't fall!",
    "category": "equipment",
    "price": 1800,
    "icon": "🧗‍♀️",
    "stock": 90,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_climbing_speed",
      "reduce_climbing_stamina_cost",
      "grant_wall_running"
    ],
    "vendor": "side_seller",
    "shippedBy": "standard_delivery",
    "levelRequirement": 3
  },
  "kivotos_item_forbidden_spellbook_of_minor_chaos": {
    "id": "kivotos_item_forbidden_spellbook_of_minor_chaos",
    "name": "The Scribblings of Professor Zylth",
    "description": "A disturbingly cheerful spellbook bound in what appears to be dried student snacks. Opening it might unleash a cascade of minor inconveniences – misplaced objects, spontaneous laughter, and the occasional swarm of glitter. Wario would probably try to use it to mess with his rivals!",
    "category": "forbidden",
    "price": 2100,
    "icon": "😈",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance to cause minor chaos",
      "spontaneous laughter (5% chance)",
      "glitter swarm (10% chance)"
    ],
    "vendor": "club_supply",
    "shippedBy": "night_only",
    "levelRequirement": 8
  },
  "kivotos_item_curiosity_chronometer": {
    "id": "kivotos_item_curiosity_chronometer",
    "name": "Temporal Tick-Tock",
    "description": "This ornate pocket watch seems to bend time itself – though mostly just slightly. It allows the user to briefly rewind a single action, perfect for correcting minor mistakes (or blaming someone else!). Wario would definitely use it to undo his failed attempts at stealing.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🕰️",
    "stock": 50,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "rewind single action (once per day)",
      "+1 to perception checks",
      "small chance of temporal distortion"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_shipping",
    "levelRequirement": 3
  },
  "earth_land_forbidden_rune_of_despair": {
    "id": "earth_land_forbidden_rune_of_despair",
    "name": "Rune of Whispered Sorrow",
    "description": "A chillingly beautiful rune etched onto obsidian. Touching it induces a wave of melancholy, potentially demoralizing enemies or… making you really sad. Use with caution; prolonged exposure may lead to existential dread (and a craving for pudding).",
    "category": "forbidden",
    "price": 23000,
    "icon": "🖤",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "decrease_enemy_morale_75",
      "chance_to_inflict_fear",
      "self_debuff_sadness_2"
    ],
    "vendor": "magic_shop",
    "shippedBy": "shadow_courier",
    "levelRequirement": 14
  },
  "earth_land_artifact_lucky_footstool": {
    "id": "earth_land_artifact_lucky_footstool",
    "name": "Wario's Lucky Footstool (Prototype)",
    "description": "This surprisingly comfortable footstool is rumored to be a discarded prototype from Wario himself! It doesn't actually do anything except occasionally produce a small amount of gold, or perhaps a single, slightly bruised banana.  Don't ask us how it works.",
    "category": "curiosities",
    "price": 850,
    "icon": "🍌",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance_to_receive_gold_small",
      "chance_to_find_banana"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "cart_on_wheels",
    "levelRequirement": 2
  },
  "teyvat_item_lyue_merchant_charm": {
    "id": "teyvat_item_lyue_merchant_charm",
    "name": "Lyue Merchant's Subtle Influence",
    "description": "A polished jade charm imbued with the spirit of wealth. Wearing this grants a slight bonus to bartering and negotiation – perfect for scoring a bargain at Liyue Harbor! Don’t expect Wario to be able to buy everything, though.",
    "category": "equipment",
    "price": 12000,
    "icon": "💰",
    "stock": 18,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+5% chance to success in bartering attempts",
      "Increases gold earned from selling items by 10%",
      "Provides a small bonus to reputation with merchants"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Ocean Freight",
    "levelRequirement": 12
  },
  "teyvat_item_inazuma_illusion_scroll": {
    "id": "teyvat_item_inazuma_illusion_scroll",
    "name": "Scroll of Shifting Reflections",
    "description": "This ancient scroll contains potent illusion magic, allowing you to briefly disguise yourself or create misleading duplicates. Wario would probably just use it to trick people into giving him extra coins...it's a brilliant scheme!",
    "category": "curiosities",
    "price": 250000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Creates a temporary illusionary duplicate of the caster",
      "Allows the caster to disguise themselves as another creature (low chance)",
      "Can create minor visual distractions, confusing enemies"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Phantom Ship Delivery",
    "levelRequirement": 23
  },
  "leclaire_isle_item_sticky_bun": {
    "id": "leclaire_isle_item_sticky_bun",
    "name": "Giant Sticky Bun of Fortitude",
    "description": "This colossal pastry is practically bursting with honey and cinnamon! Chowing down on this sugary behemoth grants temporary resistance to blunt attacks – perfect for when a grumpy troll gets a little too enthusiastic.",
    "category": "consumables",
    "price": 250,
    "icon": "🍩",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary hit points +100",
      "blunt damage resistance +25%",
      "increased movement speed +5%"
    ],
    "vendor": "dough_depot",
    "shippedBy": "cartwheel delivery",
    "levelRequirement": 3
  },
  "leclaire_isle_item_forbidden_dough_of_oblivion": {
    "id": "leclaire_isle_item_forbidden_dough_of_oblivion",
    "name": "Dough of Oblivion",
    "description": "Legend says this dough was kneaded by a disgruntled pastry chef. Consuming it induces temporary amnesia, erasing the last five minutes from your memory - great for escaping awkward encounters or forgetting where you left your sword!",
    "category": "forbidden",
    "price": 7500,
    "icon": "😵‍💫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "temporary amnesia (5 minutes)",
      "chance to confuse enemy +30%",
      "decreased intelligence -10%"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "shadow courier",
    "levelRequirement": 8
  },
  "leclaire_isle_item_sweet_charm": {
    "id": "leclaire_isle_item_sweet_charm",
    "name": "Charm of the Sugar Sprite",
    "description": "This tiny, shimmering charm is said to be made from solidified sugar sprites. Wielding it grants you a fleeting advantage in social situations - people find your presence strangely delightful... or incredibly irritating.",
    "category": "curiosities",
    "price": 12000,
    "icon": "✨",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased charisma +40%",
      "chance to charm enemies +20%",
      "temporary bonus to persuasion checks"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "winged courier",
    "levelRequirement": 10
  },
  "earth_land_ancient_rune_stone": {
    "id": "earth_land_ancient_rune_stone",
    "name": "Whispers of the Stone Sentinel",
    "description": "A smooth, grey stone etched with intricate runes that seem to shift and change in your peripheral vision. Touching it brings a sudden, unsettling sense of ancient knowledge...and maybe a slight headache.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🗿",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to gain a random minor magical effect (duration 1-3 rounds)",
      "increase intelligence by 2",
      "detect nearby magic sources"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_drone",
    "levelRequirement": 10
  },
  "midlands_item_whispering_amulet": {
    "id": "midlands_item_whispering_amulet",
    "name": "The Serpent's Secret",
    "description": "This amulet, carved from obsidian and etched with serpentine runes, seems to murmur cryptic warnings. It’s surprisingly warm…and possibly possessed. Don't say I didn't warn you!",
    "category": "equipment",
    "price": 65000,
    "icon": "🐍",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "resistance_poison_10",
      "detect_traps_increased_chance",
      "passive_healing_1_per_turn",
      "chance_to_paralyze_weak_enemies"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "giant_beetle",
    "levelRequirement": 15
  },
  "internet_glitch_stick": {
    "id": "internet_glitch_stick",
    "name": "Pixelated Panic Stick",
    "description": "This seemingly harmless stick randomly induces glitches in the target’s perception, causing disorientation and temporary stat debuffs! It's perfect for disrupting enemy formations or just messing with your friends. Wario says it’s ‘totally bugged out!’",
    "category": "equipment",
    "price": 7500,
    "icon": "✨",
    "stock": 23,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "deals 1d6 psychic damage on hit",
      "chance to inflict confusion for 3 rounds",
      "reduces target’s accuracy by 20%"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "drone_delivery",
    "levelRequirement": 9
  },
  "internet_meme_scroll": {
    "id": "internet_meme_scroll",
    "name": "Eternal Dank Scroll",
    "description": "An ancient scroll containing the most potent memes of the digital age – a single viewing can trigger uncontrollable laughter, temporary insanity, or even attract unwanted attention from powerful data spirits! Handle with caution… and maybe a therapist.",
    "category": "curiosities",
    "price": 12000,
    "icon": "🤣",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance to cause the target to roll a d20 for a random effect (positive or negative)",
      "increases charisma by 5 for 1d4 rounds",
      "attracts minor data spirits – may provide temporary bonuses or inflict debuffs"
    ],
    "vendor": "data_dealer",
    "shippedBy": "encrypted_packet",
    "levelRequirement": 15
  },
  "internet_faction_access_key": {
    "id": "internet_faction_access_key",
    "name": "The Algorithm's Pass",
    "description": "This key grants temporary access to the hidden networks of The Algorithm, a shadowy faction controlling the flow of information across The Internet. Be warned: aligning with them comes at a price… and possibly an endless stream of targeted advertising.",
    "category": "faction",
    "price": 4500,
    "icon": "🔑",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grants access to secret channels for communication",
      "provides bonus to intelligence and perception checks related to information gathering",
      "risk of being monitored by The Algorithm – potential negative consequences"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_packet",
    "levelRequirement": 6
  },
  "teyvat_item_elemental_resonator": {
    "id": "teyvat_item_elemental_resonator",
    "name": "Resonating Echo Stone",
    "description": "This smooth, pulsing stone hums with the very essence of Teyvat! Holding it allows you to briefly amplify your elemental affinity – perfect for blasting enemies or creating a dazzling display. Just don't drop it; Wario would *love* to steal it!",
    "category": "equipment",
    "price": 8500,
    "icon": "✨",
    "stock": 67,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increases elemental damage by 10%",
      "chance to trigger a secondary elemental effect on hit",
      "grants +2 to elemental resistance"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprite",
    "levelRequirement": 9
  },
  "teyvat_item_kazuha_scroll": {
    "id": "teyvat_item_kazuha_scroll",
    "name": "Fragment of the Wind's Whisper",
    "description": "Legend says this scroll contains a sliver of Kazuha’s meditative focus. Touching it grants you a moment of serene clarity, allowing you to briefly slow your perception of time and dodge attacks with uncanny precision. It might also attract wandering spirits – good luck!",
    "category": "curiosities",
    "price": 1200,
    "icon": "💨",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increases dodge chance by 5%",
      "chance to inflict 'slow' on enemy",
      "provides a brief moment of clarity (reduces stun duration)"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_current",
    "levelRequirement": 3
  },
  "teyvat_item_xiaxi_charm": {
    "id": "teyvat_item_xiaxi_charm",
    "name": "Jade Dragon's Blessing",
    "description": "This intricately carved jade charm is said to be a fragment of the ancient Xiaxi dragons. It radiates a subtle warmth and bestows a small measure of luck upon its wearer – perfect for finding hidden treasures or avoiding unfortunate encounters! Wario would definitely want this, too.",
    "category": "equipment",
    "price": 600,
    "icon": "🐉",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 to luck stat",
      "chance to find bonus items when looting",
      "increases charisma by 3"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_merchant",
    "levelRequirement": 1
  },
  "grand_country_chronometric_charm": {
    "id": "grand_country_chronometric_charm",
    "name": "Chronometric Charm of Temporal Distortion",
    "description": "This intricately crafted charm seems to bend time around you, briefly slowing down enemies or accelerating your own actions. Wario would totally try to use this to win a race... probably wouldn't.",
    "category": "equipment",
    "price": 18000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "enemy_attack_speed -25%",
      "movement_speed +15% (duration 3s)",
      "chance to create a temporal echo (5%)"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_snail",
    "levelRequirement": 10
  },
  "grand_country_stone_warden_badge": {
    "id": "grand_country_stone_warden_badge",
    "name": "Stone Warden's Assurance Badge",
    "description": "Issued by the enigmatic Stone Wardens, this badge promises protection from gravity-based hazards. While wearing it, you gain a slight resistance to falling damage and are subtly favored by earth elementals – they might even offer a helpful nudge! Wario would buy a hundred of these!",
    "category": "faction",
    "price": 8000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grant_resistance_to_falling_damage",
      "chance_for_earth_elemental_favor",
      "increase_armor_class"
    ],
    "vendor": "layer_market",
    "shippedBy": "Rolling Cart of Gems",
    "levelRequirement": 12
  },
  "internet_pixel_charm": {
    "id": "internet_pixel_charm",
    "name": "Glitchy Good Luck Charm",
    "description": "This suspiciously shiny pixel charm seems to attract random buffs! It’s rumored that a corrupted data stream imbued it with a touch of chaotic fortune, perfect for confusing your enemies or landing the perfect meme. Don't blame us if you accidentally start a viral dance craze.",
    "category": "curiosities",
    "price": 250,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to grant +1 to attack rolls",
      "chance to inflict 'Confusion' status for 2 turns",
      "increase movement speed by 5%"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 3
  },
  "internet_data_surge": {
    "id": "internet_data_surge",
    "name": "Overclocked Neural Implant",
    "description": "Warning: May cause spontaneous meme creation and an uncontrollable urge to share everything. This implant dramatically increases your processing speed, granting temporary access to arcane data streams. Use with caution – you might accidentally summon a thousand digital butterflies!",
    "category": "equipment",
    "price": 12000,
    "icon": "💻",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increase Intelligence by 8 for 6 turns",
      "Chance to cast 'Viral Blast' (deals 1d6 magical damage)",
      "Temporary +20% to critical hit chance"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Secure Data Packet",
    "levelRequirement": 8
  },
  "internet_godly_meme_artifact": {
    "id": "internet_godly_meme_artifact",
    "name": "The Infinite Loop Amulet",
    "description": "Legend says this amulet was crafted by a forgotten deity obsessed with the perfect meme. Wearing it allows you to manipulate reality, briefly looping events and causing utter confusion among your foes – but beware, prolonged use may lead to existential dread! Wario would totally buy this.",
    "category": "premium",
    "price": 750000,
    "icon": "♾️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Chance to rewind time by 3 seconds",
      "Deals heavy damage to undead creatures",
      "Grants immunity to fear effects",
      "Creates a temporary 'Reality Distortion Field' (reduces enemy accuracy)"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 30
  },
  "almost_edge_item_chronal_echo": {
    "id": "almost_edge_item_chronal_echo",
    "name": "Chronal Echo of Lost Moments",
    "description": "A shimmering orb that briefly replays scenes from forgotten realities - a horrifying glimpse into the void's past. Don’t stare too long, or you might become trapped in an infinite loop of existential dread!",
    "category": "curiosities",
    "price": 75000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "chance to glimpse future (10%)",
      "+2 Wisdom modifier for one round",
      "restores 50 HP (once per day)"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "spectral_messenger",
    "levelRequirement": 16
  },
  "pokemon_item_sparkling_potion": {
    "id": "pokemon_item_sparkling_potion",
    "name": "Sparkling Potion of Evolution!",
    "description": "This bubbly concoction smells suspiciously like berries and raw potential! Drink it to instantly evolve one wild Pokémon, but be warned - the results are never quite what you expect... or maybe they are. It's a gamble, really!",
    "category": "consumables",
    "price": 350,
    "icon": "✨",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heals 25 HP",
      "chance to evolve a wild Pokemon",
      "adds +1 to luck for 30 seconds"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poke-Drone Delivery",
    "levelRequirement": 3
  },
  "pokemon_item_trainer_consultation": {
    "id": "pokemon_item_trainer_consultation",
    "name": "Elite Trainer Consultation",
    "description": "Feeling overwhelmed by the sheer number of Pokémon in this region? A seasoned trainer will spend an hour analyzing your team's strengths and weaknesses, offering tailored advice on battling strategies and potential evolution paths.  Don’t ask them how they know so much... it’s a secret!",
    "category": "services",
    "price": 1200,
    "icon": "🗣️",
    "stock": 34,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grants a free battle report analysis",
      "provides +2 to attack and defense for 1 hour",
      "chance to learn a new battle technique"
    ],
    "vendor": "league_store",
    "shippedBy": "Certified Trainer Courier",
    "levelRequirement": 5
  },
  "pokemon_item_ancient_badge_fragment": {
    "id": "pokemon_item_ancient_badge_fragment",
    "name": "Fragment of the Obsidian Badge",
    "description": "A shimmering shard from a legendary badge, rumored to grant immense power to its wielder.  This piece radiates with a dark energy and seems…hungry. Wario might want this!",
    "category": "curiosities",
    "price": 7800,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "chance to increase attack by 5 for 3 turns",
      "provides +1 to special attack and defense",
      "grants a small chance to summon a shadow Pokémon"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Shadow Delivery Service",
    "levelRequirement": 8
  },
  "almost_edge_chronal_brace": {
    "id": "almost_edge_chronal_brace",
    "name": "Chronal Brace of the Shifting Rim",
    "description": "This unsettlingly smooth bracelet pulses with a faint, temporal energy. It subtly manipulates your personal timeline, granting minor bonuses to reflexes and allowing you to briefly rewind small mistakes… or attract unwanted attention from beings who don't appreciate paradoxes.",
    "category": "equipment",
    "price": 1800,
    "icon": "⏳",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Increased Reflexes (5%)",
      "Minor Temporal Rewind (1 time per day - 3 seconds)",
      "Resistance to Time-Based Effects"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 6
  },
  "almost_edge_echoing_shard": {
    "id": "almost_edge_echoing_shard",
    "name": "Echoing Shard of the Lost Perimeter",
    "description": "A jagged piece of what appears to be a shattered, reality-bending mirror. Holding it allows you to briefly glimpse fractured echoes of other dimensions… often accompanied by a disorienting chorus and a strong urge to collect lint.",
    "category": "curiosities",
    "price": 7500,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Chance to reveal hidden paths (10%)",
      "Minor illusion effects (visual)",
      "Increased Perception (3%)"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Postman",
    "levelRequirement": 8
  },
  "internet_data_weave": {
    "id": "internet_data_weave",
    "name": "Byte-Sized Battle Armor",
    "description": "Forged from compressed packets and flickering pixels, this armor absorbs incoming data attacks! It’s surprisingly comfortable… mostly. Just don't overload your system while wearing it.",
    "category": "equipment",
    "price": 12500,
    "icon": "💻",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "increases resistance to digital attacks by 20%",
      "chance to reflect data-based spells (5%)",
      "reduces the effectiveness of hacking attempts"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Secure Packet Transfer",
    "levelRequirement": 10
  },
  "earth_land_warriors_feast": {
    "id": "earth_land_warriors_feast",
    "name": "Wario's Champion's Banquet",
    "description": "A ridiculously oversized platter laden with enough roasted boar, honey-glazed sausages, and magically preserved fruit to fuel a small army! Consume this and gain temporary strength – just try not to get *too* full.",
    "category": "premium",
    "price": 12000,
    "icon": "🍖",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "restores 50 hit points",
      "increases strength by 4 for 2 turns",
      "grants temporary resistance to fear effects"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Giant Beetle Cart",
    "levelRequirement": 9
  },
  "equestria_item_stirring_spoon": {
    "id": "equestria_item_stirring_spoon",
    "name": "Apple Pie Stirring Spoon of Culinary Mastery",
    "description": "Forged from enchanted silver and imbued with the spirit of Granny Smith, this spoon guarantees perfectly baked pies every time! Just stir clockwise three times, and your dessert will be absolutely divine… or at least edible. It also smells faintly of cinnamon.",
    "category": "equipment",
    "price": 800,
    "icon": "🥄",
    "stock": 25,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increases_cooking_speed (+10%)",
      "chance_to_reduce_food_waste",
      "provides minor resistance to poison"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Express",
    "levelRequirement": 6
  },
  "equestria_item_twinkleberry_dust": {
    "id": "equestria_item_twinkleberry_dust",
    "name": "Twinkleberry Dust of Fleeting Dreams",
    "description": "Collected from the rarest Twinkleberries, this shimmering powder induces incredibly vivid and pleasant dreams. Warning: prolonged use may lead to an uncontrollable urge to sing or chase butterflies. Wario wants it to make bombs that explode with rainbows!",
    "category": "consumables",
    "price": 350,
    "icon": "✨",
    "stock": 70,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grants_short_sleep_effect (+2 turns)",
      "chance_to_gain_dream_fragment (experience point)",
      "provides minor resistance to nightmares"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 3
  },
  "earth_land_potion_of_sticky_feet": {
    "id": "earth_land_potion_of_sticky_feet",
    "name": "Potion of Sticky Feet",
    "description": "This bizarre concoction smells faintly of pine needles and despair. Upon consumption, your feet become inexplicably glued to the ground for 60 seconds – perfect for tripping up enemies or escaping a tight spot!  Don’t worry, it washes off… eventually.",
    "category": "consumables",
    "price": 250,
    "icon": "🦶",
    "stock": 48,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_duration_effect:60s,speed_bonus:10%",
      "apply_status_effect:sticky"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "horseback",
    "levelRequirement": 3
  },
  "earth_land_amulet_of_dragon_favor": {
    "id": "earth_land_amulet_of_dragon_favor",
    "name": "Amulet of Dragon Favor",
    "description": "Crafted from a surprisingly shiny dragon scale and imbued with ancient magic, this amulet radiates an aura of respect… or maybe just smells really good.  Wearing it grants you minor protection against fire damage and a chance to charm grumpy dragons.",
    "category": "equipment",
    "price": 1200,
    "icon": "🐉",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "add_armor_class:3",
      "chance_on_hit:fire_damage_dealing_attacks_20%",
      "grant_skill_bonus:persuasion_1d4"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged_snail",
    "levelRequirement": 6
  },
  "earth_land_scroll_of_minor_illusion": {
    "id": "earth_land_scroll_of_minor_illusion",
    "name": "Scroll of Minor Illusion",
    "description": "This aged parchment contains a simple illusion spell - perfect for distracting guards or creating a convincing fake treasure. Wario would totally use this to pull pranks on unsuspecting townsfolk!  It’s surprisingly effective, even if the illusions are a little… wobbly.",
    "category": "curiosities",
    "price": 850,
    "icon": "🪄",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "cast_spell:minor_illusion",
      "duration:1d4 rounds"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant_beetle",
    "levelRequirement": 5
  },
  "pokemon_item_volcanic_charm": {
    "id": "pokemon_item_volcanic_charm",
    "name": "Volcanic Charm",
    "description": "This oddly warm trinket pulses with the heat of a dormant volcano! It's rumored to grant the wearer resistance to fire damage and a slight boost in attack when near lava – perfect for melting your enemies or just keeping cozy.",
    "category": "consumables",
    "price": 18000,
    "icon": "🔥",
    "stock": 25,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "fire resistance +3",
      "attack +1 (near lava)",
      "chance to ignite enemy on hit"
    ],
    "vendor": "pokemart",
    "shippedBy": "Poke-Drone",
    "levelRequirement": 8
  },
  "pokemon_item_league_badge_honor": {
    "id": "pokemon_item_league_badge_honor",
    "name": "Badge of League Honor",
    "description": "A gleaming badge awarded to trainers who have proven their dedication and skill within the Pokémon Leagues. This isn't just for show – it subtly enhances your trainer stats, reflecting your prestige amongst the elite!",
    "category": "equipment",
    "price": 65000,
    "icon": "🏆",
    "stock": 10,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "speed +5",
      "luck +2",
      "chance to lower enemy stats on capture"
    ],
    "vendor": "league_store",
    "shippedBy": "Elite Courier",
    "levelRequirement": 16
  },
  "pokemon_item_safariboots_shadow": {
    "id": "pokemon_item_safariboots_shadow",
    "name": "Safari Boots of Shadowstep",
    "description": "These specially crafted boots allow you to move with unsettling speed through the dense forests and hidden caves. They're perfect for tracking down rare Pokémon – or just outrunning a grumpy Grimer!",
    "category": "equipment",
    "price": 800,
    "icon": "👟",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "speed +2",
      "chance to evade attacks",
      "increased stealth radius"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Delivery Pony",
    "levelRequirement": 3
  },
  "midlands_item_tacticians_briefing": {
    "id": "midlands_item_tactician's_briefing",
    "name": "Strategic Insight Session",
    "description": "Feeling lost on the battlefield? Let Master Silas, a retired general obsessed with strategy and oddly shaped hats, spend an hour analyzing your current situation. He’ll offer… *suggestions*.  Don’t expect miracles; he mostly just argues about logistics and occasionally suggests building a moat.",
    "category": "services",
    "price": 6500,
    "icon": "🧠",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "grant +3 to next tactical decision roll",
      "chance to gain a temporary advantage on a single combat encounter (50%)",
      "recipient gains -1 to charisma checks for 1 hour (due to excessive pontification)"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger pigeon",
    "levelRequirement": 9
  },
  "midlands_item_broken_banner": {
    "id": "midlands_item_broken_banner",
    "name": "Fragment of the Fallen Standard",
    "description": "A tattered piece of a once-proud Imperial banner, stained with… something. It’s probably just mud, but it *feels* ominous.  Holding this might trigger uncontrollable urges to shout orders at passing peasants – don’t say Wario didn't warn you!",
    "category": "equipment",
    "price": 450,
    "icon": "🚩",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 to morale of allies within a small radius (temporary)",
      "chance to provoke hostility from nearby guards",
      "reduces the wearer's movement speed by 10%"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "cart",
    "levelRequirement": 3
  },
  "connectopia_pioneer_graffiti_kit": {
    "id": "connectopia_pioneer_graffiti_kit",
    "name": "Wario's Blocky Blitz Kit",
    "description": "This kit contains a rainbow of block-based paint and spray nozzles! Cover the landscape with your artistic vision – or just make everything look like Wario’s face. Let chaos reign!",
    "category": "consumables",
    "price": 350,
    "icon": "🎨",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "applies a visual effect to equipment (temporary)",
      "chance to attract wandering NPCs",
      "slightly increases charisma with block-related vendors"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Mail Block",
    "levelRequirement": 2
  },
  "doughnut_hole_glimmering_crumb": {
    "id": "doughnut_hole_glimmering_crumb",
    "name": "Glimmering Crumb of Nullity",
    "description": "This strangely iridescent crumb seems to defy gravity, occasionally floating upwards before gently falling back down. Consuming it grants a momentary resistance to spatial anomalies and a slight boost in agility – perfect for dodging those pesky void-worms!",
    "category": "consumables",
    "price": 800,
    "icon": "✨",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_5_agility",
      "resistance_to_spatial_anomalies_30s",
      "chance_for_minor_speed_boost"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 5
  },
  "doughnut_hole_chronal_donut": {
    "id": "doughnut_hole_chronal_donut",
    "name": "Chronal Donut of Temporal Distortion",
    "description": "A swirling vortex of sugar and spacetime, this donut briefly alters the flow of time around the consumer. Use it wisely – a single bite can either speed up your attacks or slow down your enemies… or both!",
    "category": "equipment",
    "price": 12000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_5_attack_speed",
      "slow_enemy_attack_speed_by_20%",
      "chance_to_rewind_action_10%"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Transit",
    "levelRequirement": 12
  },
  "doughnut_hole_singularity_core": {
    "id": "doughnut_hole_singularity_core",
    "name": "Singularity Core Fragment",
    "description": "A pulsing shard of raw void energy, this fragment threatens to collapse everything around it. Handle with extreme caution! Imbues the wielder with immense power at a terrifying cost – prolonged use risks unraveling their very existence!",
    "category": "forbidden",
    "price": 65000,
    "icon": "💥",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "grant_10_damage",
      "chance_for_critical_hit",
      "risk_of_temporary_disfigurement",
      "chance_to_create_miniature_void"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Black Hole Express",
    "levelRequirement": 20
  },
  "connectopia_dynamite_brick": {
    "id": "connectopia_dynamite_brick",
    "name": "Wario's Explosive Block",
    "description": "Don’t let the block fool you – this brick packs a serious punch! Detonate it for a devastating blast, perfect for clearing obstacles or... well, causing general mayhem.",
    "category": "consumables",
    "price": 600,
    "icon": "💥",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals_5_fire_damage",
      "creates_small_explosion",
      "chance_to_push_target_back"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_truck",
    "levelRequirement": 3
  },
  "connectopia_block_shifter": {
    "id": "connectopia_block_shifter",
    "name": "Temporal Block Shifter",
    "description": "This delightfully chaotic device lets you briefly rewind or fast forward the age of a single block! Use it to instantly turn a sturdy stone into crumbling rubble, or a fresh-cut timber into seasoned wood. Just don't accidentally erase yourself from existence – Wario wouldn’t like that.",
    "category": "equipment",
    "price": 7500,
    "icon": "⏳",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "temporarily adjusts block age by +/- 10 years",
      "chance to create a minor structural instability",
      "small chance of summoning a confused cube"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated Conveyance System",
    "levelRequirement": 7
  },
  "connectopia_echoing_gear": {
    "id": "connectopia_echoing_gear",
    "name": "The Resonant Cog",
    "description": "This bizarre gear pulses with the memories of a thousand broken machines. It whispers secrets of forgotten workshops and the frantic movements of long-dead miners! Handle with care – prolonged exposure may cause you to spontaneously build tiny block robots.",
    "category": "curiosities",
    "price": 1200,
    "icon": "⚙️",
    "stock": 85,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to gain a minor crafting bonus",
      "occasionally produces a faint mechanical hum",
      "small chance of attracting robotic scavengers"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Winged Courier",
    "levelRequirement": 5
  },
  "connectopia_void_wrench": {
    "id": "connectopia_void_wrench",
    "name": "The Nullifier",
    "description": "Forged from a shard of the Void itself, this wrench can temporarily disrupt magical energies. Don’t aim it at friendly sprites – you might accidentally turn them into grey blocks! Use with caution; prolonged use may result in existential dread… and a severe headache.",
    "category": "forbidden",
    "price": 23000,
    "icon": "🌌",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "reduces magic resistance of enemies by 50%",
      "chance to create a localized void (small area)",
      "high chance of attracting corrupted entities",
      "causes temporary confusion"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Black Market Freighter",
    "levelRequirement": 12
  },
  "earth_land_grizzly_charm": {
    "id": "earth_land_grizzly_charm",
    "name": "Grizzly's Grumbling Good Luck Charm",
    "description": "This surprisingly warm charm smells faintly of wet fur and regret. It seems to attract small, grumpy creatures who occasionally drop useful items – or just complain loudly.",
    "category": "curiosities",
    "price": 750,
    "icon": "🐻",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance to grant +1 luck for 3 turns",
      "low chance of attracting a grumpy badger (deals 1d4 damage)",
      "increases charisma by 2 for one turn"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "winged_squirrel",
    "levelRequirement": 5
  },
  "almost_edge_rusting_plate": {
    "id": "almost_edge_rusting_plate",
    "name": "Rusting Plate of the Lost Patrol",
    "description": "A heavily corroded steel plate, etched with the fading insignia of a forgotten patrol that vanished somewhere between worlds. This plate offers minimal protection, but its presence seems to attract unsettling whispers from the edges of reality. It's probably cursed.",
    "category": "equipment",
    "price": 875,
    "icon": "🛡️",
    "stock": 62,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "provides +3 armor",
      "chance to attract spectral noise (5%)",
      "decreases charisma by 1"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "gravity well",
    "levelRequirement": 4
  },
  "earth_land_godly_shard_of_the_frostfang": {
    "id": "earth_land_godly_shard_of_the_frostfang",
    "name": "Shard of the Frostfang",
    "description": "A fragment of a colossal Ice Dragon's tooth, radiating chilling power. This shard pulses with frost magic, offering protection from extreme cold and capable of unleashing blasts of icy energy – just try not to freeze everyone around you.",
    "category": "equipment",
    "price": 750000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "armor +30",
      "resistance to cold damage (100%)",
      "chance to freeze enemy on attack (20%)"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "ice_elemental",
    "levelRequirement": 25
  },
  "leclaire_isle_item_sticky_sweet_roll": {
    "id": "leclaire_isle_item_sticky_sweet_roll",
    "name": "Sticky Sweet Roll of Unspeakable Delight",
    "description": "This deceptively simple roll is packed with a sugary, magically-infused dough that grants temporary invigoration.  It's so good, you might just want to wrestle someone for it – and possibly explode from excessive sweetness!",
    "category": "consumables",
    "price": 250,
    "icon": "🎂",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Heal 15 HP",
      "Increase movement speed by 10% for 3 rounds",
      "Chance to gain temporary Sugar Rush (increased attack damage)"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 2
  },
  "leclaire_isle_item_dwarven_pastry_shield": {
    "id": "leclaire_isle_item_dwarven_pastry_shield",
    "name": "Dwarven Pastry Shield of Fortitude",
    "description": "Forged by the finest Dough Folk smiths, this shield resembles a massive croissant and surprisingly absorbs blows.  It's delightfully crumbly, but don’t try to eat it – you’ve been warned!",
    "category": "equipment",
    "price": 1200,
    "icon": "🛡️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increase Armor Class by 2",
      "Chance to deflect incoming attacks (10%)",
      "Provides a small amount of temporary HP regeneration"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Pastry Courier",
    "levelRequirement": 6
  },
  "leclaire_isle_item_golden_dough_charm": {
    "id": "leclaire_isle_item_golden_dough_charm",
    "name": "Golden Dough Charm of Sweet Luck",
    "description": "Crafted from solidified gold dough, this charm is said to bring unparalleled good fortune...or at least a lot of sticky situations.  Wield it with caution; excessive good luck can be surprisingly overwhelming!",
    "category": "curiosities",
    "price": 8000,
    "icon": "🍀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increase critical hit chance by 5%",
      "Chance to find extra gold during treasure hunts",
      "Grants advantage on persuasion checks involving food or sweets"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Magical Delivery Portal",
    "levelRequirement": 10
  },
  "animatopia_godly_totem": {
    "id": "animatopia_godly_totem",
    "name": "Heart of the Beast King",
    "description": "A truly divine artifact, said to be a fragment of the soul of the first Beast King. Touch it and receive immense strength and protection – but remember, true power comes with responsibility (and maybe a slight obsession with ruling).",
    "category": "premium",
    "price": 650000,
    "icon": "👑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "grants +20 to all stats",
      "chance to instantly heal allies",
      "immunity to fear and charm effects",
      "passive regeneration of health and mana"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "phoenix",
    "levelRequirement": 35
  },
  "kivotos_item_datasphere_shard": {
    "id": "kivotos_item_datasphere_shard",
    "name": "Fragment of the Archive",
    "description": "A shimmering shard pulsing with forgotten knowledge! Touching this fragment grants a brief flash of insight, revealing hidden clues or even the location of secret study rooms – but beware, too much exposure can lead to an uncontrollable urge to catalog everything.",
    "category": "curiosities",
    "price": 1200,
    "icon": "📚",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "reveal_hidden_objects_nearby",
      "chance_to_gain_knowledge_skill (level 1)",
      "temporary_increase_intellect_stat"
    ],
    "vendor": "club_supply",
    "shippedBy": "messenger_bird",
    "levelRequirement": 7
  },
  "earth_land_item_rusty_dragonscale": {
    "id": "earth_land_item_rusty_dragonscale",
    "name": "Dragonscale Shard (Probably)",
    "description": "This jagged piece of what *might* be a dragon's scale is surprisingly warm to the touch. It smells faintly of sulfur and regret, possibly from the dragon itself! Perhaps it’ll help you breathe fire… or just give you heartburn.",
    "category": "equipment",
    "price": 350,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_fire_resistance_1",
      "minor_healing_3",
      "chance_to_cause_confusion_5%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "horseback courier",
    "levelRequirement": 4
  },
  "earth_land_item_frostgiant_charm": {
    "id": "earth_land_item_frostgiant_charm",
    "name": "Charm of the Frozen Heart",
    "description": "A meticulously crafted charm depicting a stylized frost giant's heart. Legend says it was forged by disgruntled ice wizards seeking vengeance for a particularly chilly prank. It’s surprisingly comfortable around your neck – almost *too* comfortable.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🧊",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_freeze_target_15%",
      "increase_cold_resistance_2",
      "detect_ice_nearby"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged griffin",
    "levelRequirement": 7
  },
  "earth_land_item_ancient_rune_stone": {
    "id": "earth_land_item_ancient_rune_stone",
    "name": "Rune of Whispered Secrets",
    "description": "This weathered stone is covered in glowing runes that hum with ancient power. Touching it might reveal the location of a lost treasure… or just give you a really bad headache. We're not entirely sure, Wario!",
    "category": "faction",
    "price": 8000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_reveal_hidden_object",
      "increase_intelligence_2",
      "temporary_buff_wisdom_5"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_only",
    "levelRequirement": 10
  },
  "equestria_item_sparkling_hoofprint": {
    "id": "equestria_item_sparkling_hoofprint",
    "name": "Sparkling Hoofprint Charm",
    "description": "This tiny charm is said to be formed from the residual magic of a particularly joyful pony. It emits a faint, shimmering light and might just boost your luck... or make you crave sugar cubes.",
    "category": "curiosities",
    "price": 250,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chance to increase luck by 1 for 3 turns",
      "minor magical resistance",
      "slight charm effect (increased persuasion checks)"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1
  },
  "equestria_item_windborne_shield": {
    "id": "equestria_item_windborne_shield",
    "name": "Windborne Shield of Zephyr Breeze",
    "description": "Forged by a master blacksmith in the Crystal Empire, this shield seems to constantly hum with wind magic. It's surprisingly lightweight and can deflect projectiles with impressive force – just don’t try to hug it.",
    "category": "equipment",
    "price": 1200,
    "icon": "🛡️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases armor class by 2",
      "chance to deflect incoming projectiles (10%)",
      "minor wind resistance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "crystal_delivery_rune",
    "levelRequirement": 6
  },
  "equestria_item_rainbow_dust_bomb": {
    "id": "equestria_item_rainbow_dust_bomb",
    "name": "Rainbow Dust Bomb",
    "description": "A volatile concoction of crystallized rainbow magic! Detonate this sphere for a dazzling burst of color and a surprisingly effective area-of-effect attack – though be warned, it’s known to attract grumpy griffin chicks.",
    "category": "consumables",
    "price": 8500,
    "icon": "🌈",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "deals 6d6 radiant damage in a 15ft radius",
      "chance to blind enemies (20%)",
      "creates a temporary rainbow effect, reducing visibility"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "magical_portal",
    "levelRequirement": 10
  },
  "connectopia_block_brick": {
    "id": "connectopia_block_brick",
    "name": "Wario's Wonder Brick",
    "description": "This brick seems to… vibrate with potential! It’s surprisingly sturdy and perfect for building a fortress (or just stacking it really high – Wario approves!). Don’t worry if you accidentally build a weird shape, they're always delightfully crooked.",
    "category": "consumables",
    "price": 250,
    "icon": "🧱",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "adds 10 to build speed",
      "chance to gain +1 block durability when mined",
      "slightly increases happiness"
    ],
    "vendor": "block_smith",
    "shippedBy": "Block Delivery Drone",
    "levelRequirement": 1
  },
  "connectopia_gear_miners_gauntlet": {
    "id": "connectopia_gear_miner's_gauntlet",
    "name": "The Grunt-inator Gauntlet",
    "description": "This gauntlet was forged by the finest block smiths, and is rumored to be infused with the spirit of a particularly grumpy miner. It’ll boost your digging speed, but don’t get too attached – it might try to steal your pickaxe!",
    "category": "equipment",
    "price": 1200,
    "icon": "⛏️",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases mining speed by 25%",
      "chance to find extra ore when mining",
      "provides minor resistance to falling damage"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Pioneer Post Courier",
    "levelRequirement": 6
  },
  "connectopia_curiosity_geode_of_echoes": {
    "id": "connectopia_curiosity_geode_of_echoes",
    "name": "Echoing Stone of the Ancients",
    "description": "This shimmering geode seems to whisper secrets of Connectopia’s past! It's said that holding it allows you to hear faint echoes of long-gone pioneers – mostly complaining about the weather, but still!",
    "category": "curiosities",
    "price": 8500,
    "icon": "🗣️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "provides a small bonus to perception checks",
      "occasionally grants a cryptic clue about nearby resources",
      "chance to attract wandering spirits (mostly harmless)"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Block Smith Delivery",
    "levelRequirement": 10
  },
  "kivotos_item_quantum_pen": {
    "id": "kivotos_item_quantum_pen",
    "name": "The Scribble of Reality",
    "description": "This pen doesn't just write; it *manifests*. Whatever you draw with this thing – a shield, a healing potion, even a miniature Wario – briefly becomes real! However, the reality is... unstable. Expect unpredictable results and potential paradoxes. Don’t ask where the extra tentacles came from.",
    "category": "premium",
    "price": 8500,
    "icon": "✍️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to create a temporary consumable item (low chance)",
      "creates a small defensive effect (1 turn)",
      "can summon minor illusions of objects"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 12
  },
  "teyvat_item_sparkling_shard": {
    "id": "teyvat_item_sparkling_shard",
    "name": "Sparkling Shard of Storms",
    "description": "This jagged piece of crystallized lightning seems to hum with raw elemental power! It's perfect for boosting your damage against foes vulnerable to lightning, or just making a really cool sparkly effect – Wario loves shiny things!",
    "category": "consumables",
    "price": 850,
    "icon": "⚡️",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increase_lightning_damage_by_10%",
      "chance_to_apply_shock",
      "small_visual_sparkle"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Wind Courier",
    "levelRequirement": 4
  },
  "teyvat_item_wind_dancer_amulet": {
    "id": "teyvat_item_wind_dancer_amulet",
    "name": "Wind Dancer Amulet of Anemo",
    "description": "Crafted by the finest artisans of Mondstadt, this amulet grants you a whisper of the wind’s grace. It enhances your agility and allows for swift maneuvers – just try not to get blown away by your own speed!",
    "category": "equipment",
    "price": 1800,
    "icon": "🌬️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_movement_speed_by_5%",
      "chance_to_dodge_attacks",
      "small_regen_of_stamina"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Delivery Drone",
    "levelRequirement": 8
  },
  "teyvat_item_crimson_echo_pearl": {
    "id": "teyvat_item_crimson_echo_pearl",
    "name": "Crimson Echo Pearl of Inazuma",
    "description": "This pearl vibrates with the lingering energy of past battles in Inazuma. Holding it allows you to briefly glimpse fragments of forgotten conflicts, potentially revealing hidden weaknesses - just don't get lost in the echoes!",
    "category": "curiosities",
    "price": 5200,
    "icon": "🔮",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveal_vulnerability_on_target_once_per_day",
      "chance_to_gain_insightful_information",
      "small_chance_to_confuse_enemy"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Courier",
    "levelRequirement": 10
  },
  "doughnut_hole_gravity_crumb": {
    "id": "doughnut_hole_gravity_crumb",
    "name": "Void Crumble",
    "description": "These shimmering crumbs seem to defy gravity, occasionally floating upwards before gently falling back down. Eating one grants a momentary burst of enhanced agility – perfect for dodging collapsing floors or grabbing those last few coins!",
    "category": "consumables",
    "price": 350,
    "icon": "✨",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_2",
      "duration_10s"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Packet",
    "levelRequirement": 1
  },
  "doughnut_hole_anomaly_ring": {
    "id": "doughnut_hole_anomaly_ring",
    "name": "Phase Ring of the Center",
    "description": "This unsettling ring pulses with a faint, rhythmic distortion. Wearing it allows you to briefly phase through solid objects - but be warned; prolonged use can lead to existential dread and an inexplicable craving for sprinkles!",
    "category": "equipment",
    "price": 7800,
    "icon": "🌀",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "phase_through_walls",
      "chance_to_disrupt_enemies",
      "duration_30s"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 6
  },
  "doughnut_hole_void_slice": {
    "id": "doughnut_hole_void_slice",
    "name": "Nothingness Nibbler",
    "description": "A deceptively delicious slice of void-infused dough. When consumed, it momentarily grants the ability to whisper to shadows and gain a fleeting understanding of forgotten secrets – but don't stare at it for too long, or you might become one with the hole!",
    "category": "consumables",
    "price": 1200,
    "icon": "🌑",
    "stock": 78,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "grant_insight",
      "chance_to_reveal_hidden_objects",
      "duration_15s"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Parcel",
    "levelRequirement": 9
  },
  "almost_edge_mythic_void_lantern": {
    "id": "almost_edge_mythic_void_lantern",
    "name": "Void Lantern of Unending Descent",
    "description": "Forged from solidified void and powered by the whispers of forgotten realities, this lantern casts a sickly purple light that reveals the true nature of… well, everything. It’s rumored to attract unwanted attention from entities beyond comprehension – enjoy!",
    "category": "equipment",
    "price": 85000,
    "icon": "🔦",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "deals 2d6 necrotic damage on hit",
      "grants resistance to psychic damage",
      "chance to summon a minor void creature (low level)",
      "emits an aura of unsettling dread (-2 to sanity)"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "void-borne delivery drone",
    "levelRequirement": 18
  },
  "potion_shadow_essence": {
    "id": "potion_shadow_essence",
    "name": "Potion of Shadow Essence",
    "description": "This murky, viscous potion tastes vaguely of regret and despair…but it also grants a fleeting glimpse into the shadows! Consume this elixir to briefly cloak yourself in darkness, making you harder to see and allowing you to bypass traps.",
    "category": "consumables",
    "price": 250,
    "icon": "🌑",
    "stock": 33,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "grants_invisibility_for_5_seconds",
      "increases_stealth_chance",
      "absorbs_1_damage_from_melee_attacks"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1
  },
  "artifact_fatebinder": {
    "id": "artifact_fatebinder",
    "name": "Fatebinder's Shard of Predestination",
    "description": "A fragment ripped from the very fabric of fate, this shimmering shard pulses with chaotic energy. Holding it allows you to briefly alter a single action – but beware! Tampering with destiny often comes at a steep price...or a really bad headache.",
    "category": "curiosities",
    "price": 75000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "allows_player_to_reroll_one_attack_roll or saving throw per combat encounter",
      "chance_to_trigger_random_fate_event (positive or negative)",
      "increases_luck_stat by 10 for 30 seconds"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 20
  },
  "almost_edge_item_chronal_pocketwatch": {
    "id": "almost_edge_item_chronal_pocketwatch",
    "name": "Chronal Pocketwatch of Lost Time",
    "description": "This tarnished pocket watch appears to be stuck in a perpetual loop, displaying moments both past and future. Wario would probably try to use it to get more coins – don’t let him!",
    "category": "equipment",
    "price": 1200,
    "icon": "⏳",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_rewind_time_by_5_seconds",
      "increased_perception",
      "minor_temporal_distortion"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "quantum_carrier",
    "levelRequirement": 8
  },
  "kivotos_item_harmony_resonance": {
    "id": "kivotos_item_harmony_resonance",
    "name": "The Cacophony Calmer",
    "description": "A beautifully crafted tuning fork that vibrates with pure sonic energy. When struck, it emits a calming resonance that can silence disruptive magic, soothe agitated monsters, or even convince a particularly stubborn student to drop their homework!  It’s surprisingly effective... mostly.",
    "category": "consumables",
    "price": 8000,
    "icon": "🎶",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "silence_magic_25%",
      "soothe_monster_aggro",
      "chance_to_influence_passive_NPCs"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_mail",
    "levelRequirement": 6
  },
  "kivotos_item_divine_revelation": {
    "id": "kivotos_item_divine_revelation",
    "name": "Oracle's Shard",
    "description": "This pulsating fragment of solidified prophecy feels strangely warm to the touch. Stare into its depths and receive a cryptic, yet undeniably accurate, glimpse of your future... mostly about Wario stealing things!  Beware: interpreting the visions may require extensive analysis (and possibly a stiff drink).",
    "category": "services",
    "price": 800000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "chance_to_receive_divine_guidance",
      "increased_luck",
      "detect_hidden_objects_50%",
      "grant_temporary_insight_on_complex_puzzles"
    ],
    "vendor": "student_store",
    "shippedBy": "holy_messenger",
    "levelRequirement": 25
  },
  "doughnut_hole_wario_service_buff": {
    "id": "doughnut_hole_wario_service_buff",
    "name": "Wario's Unstable Inspiration",
    "description": "Feeling a bit sluggish? Wario himself has bestowed upon us this potent concoction. It’s guaranteed to make you temporarily super strong and surprisingly chaotic... good luck controlling it!",
    "category": "services",
    "price": 2500,
    "icon": "💪",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "strength_boost_5",
      "chance_to_cause_chaos_15%",
      "temporary_confusion_20%"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Packet",
    "levelRequirement": 1
  }
};
