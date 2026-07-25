// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_054 = {
  "animatopia_spirit_reading": {
    "id": "animatopia_spirit_reading",
    "name": "Echoes of the Ancestors",
    "description": "The tribal elders believe that spirits hold the key to understanding fate. This service allows a skilled shaman to contact these ancestral voices, offering cryptic guidance and warnings – though they’re notoriously vague and often involve talking about shiny pebbles. Prepare for some unsettling murmurs!",
    "category": "services",
    "price": 3200,
    "icon": "🔮",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant a single cryptic prophecy (random effect)",
      "chance to gain advantage on next wisdom check"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 8
  },
  "animatopia_bone_amulet": {
    "id": "animatopia_bone_amulet",
    "name": "Guardian's Grunt",
    "description": "Fashioned from the femur of a fallen Warhog, this amulet radiates an aura of silent protection. It doesn’t exactly shout ‘defend me!’ but it *does* make you slightly less likely to be eaten by oversized butterflies – a very important consideration in Animatopia! Wario recommends wearing it while raiding.",
    "category": "equipment",
    "price": 8700,
    "icon": "🦴",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased armor class",
      "chance to resist poison effects",
      "minor bonus to survival checks"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 10
  },
  "teyvat_item_crimson_echo": {
    "id": "teyvat_item_crimson_echo",
    "name": "Crimson Echo Shard",
    "description": "This pulsating shard hums with residual Pyro energy, remnants of a long-forgotten dragon's roar. Holding it for too long might make you crave spicy food... or just spontaneously combust!",
    "category": "consumables",
    "price": 110,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restore_health_20",
      "apply_elemental_resistance_fire_10",
      "chance_to_ignite_5%"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_goat",
    "levelRequirement": 3
  },
  "teyvat_item_jade_resonance": {
    "id": "teyvat_item_jade_resonance",
    "name": "Jade Resonance Charm",
    "description": "Crafted by skilled Liyue artisans, this charm subtly amplifies the wearer's Geo affinity. Warning: Prolonged use may result in an uncontrollable urge to bargain aggressively!",
    "category": "equipment",
    "price": 3200,
    "icon": "💎",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_geo_damage_5%",
      "increased_armor_3",
      "chance_to_stagger_on_attack_10%"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "merchant_ship",
    "levelRequirement": 7
  },
  "teyvat_item_phantom_scroll": {
    "id": "teyvat_item_phantom_scroll",
    "name": "Phantom Scroll of Windsong",
    "description": "A strange scroll that seems to whisper secrets on the breeze. It occasionally provides cryptic clues about Inazuma's past, or just makes you feel a bit dizzy and prone to chasing butterflies!",
    "category": "curiosities",
    "price": 8700,
    "icon": "🎐",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance_to_grant_vision_hint",
      "increase_movement_speed_5%",
      "small_chances_of_illusion_creation"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "sea_serpent",
    "levelRequirement": 10
  },
  "the_edge_shimmering_shard": {
    "id": "the_edge_shimmering_shard",
    "name": "Shimmering Shard of the Void",
    "description": "This pulsating fragment seems to drink in light, offering a fleeting glimpse into the infinite abyss. Holding it grants temporary resistance to fear effects and whispers unsettling truths about your past – probably lies.",
    "category": "curiosities",
    "price": 3200,
    "icon": "✨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_resistance_fear_3",
      "chance_illusion_effect",
      "minor_healing_1"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "void_packet",
    "levelRequirement": 7
  },
  "the_edge_chronal_bracelet": {
    "id": "the_edge_chronal_bracelet",
    "name": "Chronal Bracelet of Temporal Distortion",
    "description": "A twisted bracelet forged from solidified temporal echoes. It grants the wearer a limited ability to briefly rewind minor actions, but be warned - messing with time is bad for your stomach!",
    "category": "equipment",
    "price": 53000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "rewind_action_1",
      "chance_time_slow_2",
      "increase_reflexes_5"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "dimensional_scroll",
    "levelRequirement": 16
  },
  "the_edge_blood_of_the_abyss": {
    "id": "the_edge_blood_of_the_abyss",
    "name": "Blood of the Abyss (Forbidden)",
    "description": "A vial filled with viscous, iridescent fluid – the essence of creatures born from the void. Consuming this grants immense power... and a disturbing craving for forgotten souls.",
    "category": "forbidden",
    "price": 680,
    "icon": "🩸",
    "stock": 2,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "strength_boost_3",
      "damage_increase_5",
      "chance_poison_effect"
    ],
    "vendor": "final_shop",
    "shippedBy": "dark_messenger",
    "levelRequirement": 5
  },
  "connectopia_blueprint_service": {
    "id": "connectopia_blueprint_service",
    "name": "Schematic Scrying Session",
    "description": "Need a little help figuring out that tricky contraption? This service lets you consult with a master schematist who can analyze your designs and offer invaluable advice – mostly about how much more complicated things could be.",
    "category": "services",
    "price": 3200,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grants a temporary bonus to crafting speed (30%)",
      "reveals hidden flaws in crafted items",
      "chance to receive a free blueprint upgrade"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 8
  },
  "connectopia_temporal_shard": {
    "id": "connectopia_temporal_shard",
    "name": "Echo of the Fractured Block",
    "description": "This shard pulses with unstable temporal energy! Holding it allows you to briefly glimpse alternate realities – mostly ones where Wario won every game. Don't stare too long, or you might end up stuck in a loop!",
    "category": "curiosities",
    "price": 8700,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chance to teleport a short distance (5m)",
      "temporary boost to intelligence by 10%",
      "causes minor temporal distortions around the user"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Dimensional Portal Delivery",
    "levelRequirement": 10
  },
  "midlands_item_whispers_of_discord": {
    "id": "midlands_item_whispers_of_discord",
    "name": "Fragment of a Lost Decree",
    "description": "A small, obsidian shard said to contain the last words of a disgraced Imperial advisor. Holding it brings unsettling visions and whispers of forgotten conspiracies – useful for gathering intelligence… or just driving yourself mad!",
    "category": "curiosities",
    "price": 680,
    "icon": "🤫",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_reveal_hidden_enemy_15%",
      "small_chance_of_confusion_5%"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 5
  },
  "midlands_item_shadowfang_blade": {
    "id": "midlands_item_shadowfang_blade",
    "name": "Blade of the Broken King",
    "description": "Forged in the depths of a forgotten fortress, this cursed blade pulses with an unnatural darkness. It's rumored to have been wielded by a king who betrayed his empire – and it’ll probably betray *you* if you aren’t careful!",
    "category": "equipment",
    "price": 3200,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "deal_slashing_damage_1d8",
      "chance_to_apply_poison_10%",
      "corruption_effect_minor"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dark_raven",
    "levelRequirement": 7
  },
  "animatopia_howler_fang": {
    "id": "animatopia_howler_fang",
    "name": "Howler Fang Amulet",
    "description": "This pulsating fang, harvested from the legendary Howler Beast, amplifies your primal screams! It's rumored to scare off lesser predators and maybe even make a grumpy badger cower. Just don’t howl too loudly – you might attract something *really* nasty.",
    "category": "equipment",
    "price": 3200,
    "icon": "🐺",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_intimidation",
      "chance_to_frighten_enemies",
      "minor_healing"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_puma",
    "levelRequirement": 6
  },
  "animatopia_forbidden_spirit_stone": {
    "id": "animatopia_forbidden_spirit_stone",
    "name": "Stone of Whispering Spirits",
    "description": "A sinister-looking stone pulsing with trapped, tormented animal souls. Touching it grants fleeting glimpses into the future...or drives you mad! Use with caution, or risk becoming another echo in Animatopia’s haunted depths.",
    "category": "forbidden",
    "price": 3200,
    "icon": "👻",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_receive_visions",
      "temporary_debuff_on_contact",
      "increased_sanity_drain"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 10
  },
  "animatopia_echoing_totem": {
    "id": "animatopia_echoing_totem",
    "name": "Echoing Totem of the Ancients",
    "description": "Carved from ancient petrified wood, this totem vibrates with residual energy from Animatopia’s forgotten rituals. Holding it allows you to mimic sounds and movements, potentially confusing your foes or triggering traps!  It also smells faintly of berries…and something a little bit rotten.",
    "category": "curiosities",
    "price": 110,
    "icon": "🗣️",
    "stock": 73,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "mimic_sound",
      "chance_to_disarm_traps",
      "minor_debuff_on_target_of_mimicked_sound"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_squirrel",
    "levelRequirement": 3
  },
  "pokemon_sparkling_charm": {
    "id": "pokemon_sparkling_charm",
    "name": "Sparkling Charm of the Starter Pokémon",
    "description": "This shimmering charm, imbued with the essence of a starter Pokémon's first evolution, grants a temporary boost to your combat prowess! It smells faintly of berries and youthful energy – just don’t let it near any mischievous Grimer.",
    "category": "consumables",
    "price": 3200,
    "icon": "✨",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "temporary_attack_boost",
      "chance_to_evoke_starter_evolution",
      "increased_speed"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pokémail",
    "levelRequirement": 6
  },
  "pokemon_trainer_badge_of_valor": {
    "id": "pokemon_trainer_badge_of_valor",
    "name": "Badge of Valor - The Steel Wing",
    "description": "Forged by a legendary Pokémon trainer, this badge resonates with the strength and determination of a Steel-type. It's said to boost your courage tenfold – though it might also make you slightly obsessed with shiny objects.",
    "category": "equipment",
    "price": 8700,
    "icon": "🏆",
    "stock": 15,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "attack_boost",
      "defense_boost",
      "chance_to_paralyze"
    ],
    "vendor": "league_store",
    "shippedBy": "Pokémon Courier",
    "levelRequirement": 10
  },
  "pokemon_ancient_rune_of_mirage": {
    "id": "pokemon_ancient_rune_of_mirage",
    "name": "Ancient Rune of Mirage – The Shadow Dance",
    "description": "Recovered from the ruins of an ancient Pokémon temple, this rune whispers illusions and disorientation. Wielding it grants you a chance to confuse your foes with phantom attacks - just try not to get lost in the reflections!",
    "category": "curiosities",
    "price": 46000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "chance_to_confuse_enemy",
      "illusionary_attack",
      "increased_evasion"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Legendary Delivery Service",
    "levelRequirement": 22
  },
  "kivotos_item_chromatic_halo": {
    "id": "kivotos_item_chromatic_halo",
    "name": "Chromatic Halo of Scholarly Focus",
    "description": "This halo shimmers with every color imaginable, supposedly imbued by a frustrated student attempting to perfect rainbow refraction. It grants a temporary boost to spellcasting accuracy and intellect – perfect for those late-night study sessions (or practical jokes). Don't worry if it attracts the attention of the Academy’s Honor Council!",
    "category": "equipment",
    "price": 3200,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "spellcasting_accuracy +3",
      "intellect +4",
      "chance to confuse enemies on hit (10%)"
    ],
    "vendor": "academy_armory",
    "shippedBy": "air_mail",
    "levelRequirement": 6
  },
  "kivotos_item_student_scroll": {
    "id": "kivotos_item_student_scroll",
    "name": "Forgotten Lecture Scroll",
    "description": "A slightly mildewed scroll filled with the ramblings of a particularly bored professor. It's rumored to contain ancient (and utterly useless) spells and diagrams… mostly about optimal desk organization.  May or may not attract sentient dust bunnies.",
    "category": "consumables",
    "price": 110,
    "icon": "📜",
    "stock": 85,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 10 HP",
      "chance to gain temporary stat boost (15%)"
    ],
    "vendor": "student_store",
    "shippedBy": "courier",
    "levelRequirement": 1
  },
  "kivotos_item_chrono_disruptor_pin": {
    "id": "kivotos_item_chrono_disruptor_pin",
    "name": "Chrono Disruptor Pin – Prototype Model",
    "description": "A tiny, jittery device created by a rogue student tinkering with temporal physics. This pin can briefly slow down nearby enemies or speed up your own movements – just don't accidentally erase yourself from existence! Wario would *love* this.",
    "category": "curiosities",
    "price": 8800,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "slow target enemy speed by 50% for 3 seconds",
      "increase movement speed by 20% for 2 seconds",
      "chance to create a temporal ripple (10%)"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 9
  },
  "the_edge_voidshard_echo": {
    "id": "the_edge_voidshard_echo",
    "name": "Echoes of the Voidshards",
    "description": "These shimmering fragments vibrate with the whispers of forgotten realities. Holding them grants you temporary resistance to madness and a disturbing, yet oddly helpful, ability to predict your enemies' next move... probably.",
    "category": "consumables",
    "price": 3200,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant 10% chance to avoid fear effects for 3 rounds",
      "increase perception by 5 for 2 rounds",
      "chance of temporary madness (1%)"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 8
  },
  "the_edge_chronosplitter_gauntlet": {
    "id": "the_edge_chronosplitter_gauntlet",
    "name": "Chronosplitter Gauntlet of Fractured Time",
    "description": "Forged from solidified temporal anomalies, this gauntlet allows you to briefly manipulate the flow of time around yourself. Be careful not to accidentally erase yourself or create a paradox... Wario would *love* that.",
    "category": "equipment",
    "price": 8800,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grant +3 to attack rolls for 2 rounds",
      "chance to rewind time by 1 round (15%)",
      "increases movement speed by 10% for 1 round"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 11
  },
  "the_edge_abyssal_heartstone": {
    "id": "the_edge_abyssal_heartstone",
    "name": "Abyssal Heartstone of Silent Hunger",
    "description": "A pulsating stone harvested from the deepest trenches. It radiates an aura of intense cold and a subtle, unsettling craving... Perfect for fueling your next raid or simply hoarding shiny things.",
    "category": "curiosities",
    "price": 46000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "grants +5 to charisma checks",
      "chance to inflict 'despair' on a single target (20%)",
      "provides passive regeneration of 1 health per round"
    ],
    "vendor": "final_shop",
    "shippedBy": "Void Serpent",
    "levelRequirement": 22
  },
  "the_edge_echoing_shard": {
    "id": "the_edge_echoing_shard",
    "name": "Echoing Shard of Oblivion",
    "description": "This jagged fragment seems to whisper with the voices of forgotten realities. Holding it briefly grants a momentary glimpse into the abyss, potentially revealing hidden paths or driving you utterly mad – Wario doesn't recommend either!",
    "category": "curiosities",
    "price": 47000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "chance to inflict madness (10%)",
      "reveal hidden pathways on a successful perception check (+2)",
      "temporary boost to resistance against fear effects"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional rift",
    "levelRequirement": 20
  },
  "the_edge_rusting_blade": {
    "id": "the_edge_rusting_blade",
    "name": "Blade of the Endless Fall",
    "description": "Forged from a meteorite that crashed into… well, somewhere very far away. This blade whispers promises of power, but also drips with an unsettling cold – great for slicing through enemies and your own sanity!",
    "category": "equipment",
    "price": 3200,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "+2 damage to undead and demonic creatures",
      "chance to inflict bleeding (5%)",
      "increased critical hit chance (10%)"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged courier",
    "levelRequirement": 8
  },
  "the_edge_void_lantern": {
    "id": "the_edge_void_lantern",
    "name": "Lantern of the Unseen Depths",
    "description": "This lantern doesn't cast light, it *absorbs* it. It emits a chilling aura that can disorient foes and reveals hidden passages in areas of absolute darkness – perfect for Wario’s sneaky treasure hunts!",
    "category": "equipment",
    "price": 110,
    "icon": "🔦",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grants darkness vision",
      "chance to frighten enemies (15%)",
      "slows movement speed of nearby creatures"
    ],
    "vendor": "final_shop",
    "shippedBy": "delivery_only",
    "levelRequirement": 3
  },
  "the_edge_crimson_blade": {
    "id": "the_edge_crimson_blade",
    "name": "Crimson Blade of the Fallen King",
    "description": "Forged from the solidified blood of a forgotten monarch, this blade pulses with a chilling red light. It’s surprisingly sharp and smells faintly of despair – just what you need for that extra edge!",
    "category": "equipment",
    "price": 3200,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "damage_type_fire",
      "chance_to_bleed",
      "increased_critical_hit_damage_by_5"
    ],
    "vendor": "final_shop",
    "shippedBy": "winged_shadow",
    "levelRequirement": 7
  },
  "teyvat_item_scorching_rune": {
    "id": "teyvat_item_scorching_rune",
    "name": "Dragon's Breath Pebble",
    "description": "This unassuming pebble pulses with residual fire energy, remnants of a dragon’s fury! When thrown, it explodes in a surprisingly potent blast of flames – perfect for roasting marshmallows or… well, anything you want to burn. Don't say I didn't warn you about the collateral damage.",
    "category": "consumables",
    "price": 680,
    "icon": "🔥",
    "stock": 68,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "deals 12 fire damage to a single target",
      "chance to inflict burning (5%)",
      "small chance of causing a minor explosion (2%)"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swift Courier",
    "levelRequirement": 3
  },
  "teyvat_item_jade_resonance_charm": {
    "id": "teyvat_item_jade_resonance_charm",
    "name": "Liyue's Echoing Stone",
    "description": "Crafted by skilled artisans in Liyue Harbor, this charm vibrates with the echoes of ancient trade routes and maritime magic. Wearing it grants a slight boost to your trading skills and a feeling of immense smugness - because you bought it from Wario!",
    "category": "equipment",
    "price": 3200,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases trade prices by 5%",
      "chance to receive bonus items during trades (10%)",
      "provides a small amount of luck"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 6
  },
  "faerun_item_whispering_skull": {
    "id": "faerun_item_whispering_skull",
    "name": "Whispering Skull of Lost Secrets",
    "description": "This unsettling skull seems to murmur forgotten prophecies and the occasional complaint about bad plumbing. Holding it grants glimpses into the past… mostly involving taxes and questionable tavern food.  Don't blame us if you start craving pickled onions!",
    "category": "curiosities",
    "price": 53000,
    "icon": "💀",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_receive_prophecy_scrolls",
      "detect_magic",
      "increased_luck"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 15
  },
  "faerun_item_shadowfang_dagger": {
    "id": "faerun_item_shadowfang_dagger",
    "name": "Shadowfang Dagger - Forbidden Legacy",
    "description": "Forged in the depths of a forgotten cult's temple, this dagger drips with dark energy and a disturbing hunger. It’s incredibly sharp… and probably cursed. Use at your own peril (and maybe invest in an exorcist). Wario wouldn't even *care* if it was cursed – he'd just use it to steal snacks!",
    "category": "forbidden",
    "price": 3200,
    "icon": "🔪",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "deals_extra_poison_damage",
      "chance_to_fear_target",
      "increased_critical_hit_chance"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "black_raven",
    "levelRequirement": 8
  },
  "earth_land_rune_of_stability": {
    "id": "earth_land_rune_of_stability",
    "name": "The Steadfast Stone",
    "description": "A polished grey stone etched with ancient runes. When held, a faint feeling of calm washes over you – perfect for when Wario's yelling about finding the best mushrooms.",
    "category": "curiosities",
    "price": 3200,
    "icon": "💎",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "restores 50 HP",
      "reduces stress by 10%",
      "provides +1 to saving throws against fear effects"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying_pigeon",
    "levelRequirement": 6
  },
  "earth_land_guild_potion_of_fortitude": {
    "id": "earth_land_guild_potion_of_fortitude",
    "name": "Quartermaster's Strength Brew",
    "description": "A thick, bubbling potion brewed by the Guild Quartermaster himself – a surprisingly enthusiastic goblin named Pip. This potion promises enhanced strength and resilience… mostly just makes you burp loudly.",
    "category": "consumables",
    "price": 110,
    "icon": "💪",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "strength +3 for 3 turns",
      "temporary hit points 20"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "wagon",
    "levelRequirement": 1
  },
  "kivotos_item_godly_resonance_shard": {
    "id": "kivotos_item_godly_resonance_shard",
    "name": "Echoes of the Academy",
    "description": "A fragment imbued with the collective knowledge and anxieties of Kivotos' student body. Holding this shard allows you to briefly glimpse possible futures, but be prepared for a deluge of conflicting probabilities and an intense urge to join every club!",
    "category": "premium",
    "price": 740000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "chance to predict enemy actions with high accuracy",
      "provides a constant stream of cryptic advice (mostly bad)",
      "grants resistance to psychic attacks"
    ],
    "vendor": "academy_armory",
    "shippedBy": "interdimensional_portal",
    "levelRequirement": 35
  },
  "earth_land_gargoyle_shard": {
    "id": "earth_land_gargoyle_shard",
    "name": "Stoneheart's Echo",
    "description": "This jagged shard pulses with residual magic, seemingly formed from a long-dead gargoyle! When thrown, it emits a deafening roar that disorients nearby enemies and briefly strengthens your defenses – perfect for smashing through those pesky ice walls.",
    "category": "consumables",
    "price": 3300,
    "icon": "🗿",
    "stock": 75,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "deals 1d6 bludgeoning damage to a single target",
      "disorients the target for 2 rounds",
      "grants +1 armor class for 3 rounds"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Magical Courier",
    "levelRequirement": 6
  },
  "earth_land_dragonscale_helmet": {
    "id": "earth_land_dragonscale_helmet",
    "name": "Wyrm's Burden",
    "description": "Forged from the shed scales of a juvenile frost dragon, this helmet radiates chilling energy. It provides substantial protection against cold and grants a slight advantage when facing icy creatures – just don’t get too close to the ice wall!",
    "category": "equipment",
    "price": 8800,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+3 armor class",
      "resistance to cold damage",
      "advantage on saving throws against freezing effects"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Winged Messenger",
    "levelRequirement": 10
  },
  "earth_land_godly_rune_of_frost": {
    "id": "earth_land_godly_rune_of_frost",
    "name": "Winter's Whisper",
    "description": "Carved from a frozen shard of the world itself, this rune hums with raw frost magic! Holding it allows you to summon a blizzard, freezing enemies solid and creating slippery terrain – Wario would totally try to steal this!",
    "category": "consumables",
    "price": 740000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Summons a localized blizzard for 3 rounds",
      "Reduces enemy movement speed by half",
      "Applies a 'frozen' condition to enemies (DC 15 Constitution saving throw to avoid)",
      "Restores 2d6 cold damage to the user."
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Ice Giant Delivery",
    "levelRequirement": 24
  },
  "mushroom_kingdom_item_glowing_cap": {
    "id": "mushroom_kingdom_item_glowing_cap",
    "name": "Glowshroom's Delight",
    "description": "This oversized mushroom cap pulses with an eerie green light, attracting wandering beetles and granting a temporary luminescence. It’s perfect for navigating dark caves or distracting grumpy Goombas – just don’t eat it!",
    "category": "consumables",
    "price": 680,
    "icon": "🍄",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_light_vision_30s",
      "attract_beetles_1d4",
      "minor_healing_5hp"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_mail",
    "levelRequirement": 6
  },
  "mushroom_kingdom_item_wario_coin_amulet": {
    "id": "mushroom_kingdom_item_wario_coin_amulet",
    "name": "Wario's Lucky Loot Amulet",
    "description": "A tarnished brass amulet overflowing with gleaming coins – allegedly Wario’s own. Wearing this charm seems to attract riches, though it might also attract less-than-friendly creatures obsessed with shiny objects.",
    "category": "equipment",
    "price": 54000,
    "icon": "💰",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "increase_luck_5%",
      "chance_to_find_extra_gold_10%",
      "minor_armor_3"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_mushroom",
    "levelRequirement": 12
  },
  "mushroom_kingdom_item_strange_artifact": {
    "id": "mushroom_kingdom_item_strange_artifact",
    "name": "Echoing Spore Pod",
    "description": "A pulsating, iridescent spore pod that seems to whisper fragments of forgotten melodies. Holding it allows you to briefly glimpse echoes of past events – be warned, some are unsettling!",
    "category": "curiosities",
    "price": 3300,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveal_hidden_secrets_50%",
      "chance_to_receive_a_vision_1d6",
      "minor_intellect_boost_2"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_drone",
    "levelRequirement": 5
  },
  "kivotos_item_spectral_notepad": {
    "id": "kivotos_item_spectral_notepad",
    "name": "Whispers of the Archive",
    "description": "A notebook that seems to fill itself with cryptic messages and half-formed ideas. Scribbling in it grants insight, but beware - the notes are often unsettlingly accurate (and slightly judgmental).",
    "category": "curiosities",
    "price": 680,
    "icon": "📝",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance_insight_5%",
      "grant_knowledge_1"
    ],
    "vendor": "student_store",
    "shippedBy": "Standard Post",
    "levelRequirement": 3
  },
  "kivotos_item_nullifier_charm": {
    "id": "kivotos_item_nullifier_charm",
    "name": "The Quietude Stone",
    "description": "This obsidian charm absorbs magical energy, creating a small bubble of silence. Perfect for sneaking past grumpy professors or silencing annoying debate club arguments… though some say it also silences your own thoughts.",
    "category": "forbidden",
    "price": 3300,
    "icon": "🤫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "silence_aura_5",
      "chance_magical_resistance_10%"
    ],
    "vendor": "club_supply",
    "shippedBy": "Secret Courier",
    "levelRequirement": 18
  },
  "kivotos_item_halo_of_perfect_attendance": {
    "id": "kivotos_item_halo_of_perfect_attendance",
    "name": "The Grade-Getter's Halo",
    "description": "Legend says this halo was forged by a student who aced every test ever. It passively boosts your academic performance, making you strangely resistant to failure and incredibly focused on… well, schoolwork! Don’t worry, it doesn't actually *do* the work for you – just gives you an edge.",
    "category": "equipment",
    "price": 47000,
    "icon": "🎓",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increased_intellect_5",
      "passive_success_chance_10",
      "resistance_to_failure_25",
      "bonus_experience_on_academics_15"
    ],
    "vendor": "student_store",
    "shippedBy": "express_delivery",
    "levelRequirement": 16
  },
  "kivotos_item_vortex_scroll_of_misdirection": {
    "id": "kivotos_item_vortex_scroll_of_misdirection",
    "name": "The Confuser's Scroll",
    "description": "This ancient scroll pulses with chaotic energy, capable of inducing temporary confusion in your enemies! It’s a fantastic tool for escape or setting up a truly baffling tactical advantage – just don’t accidentally confuse yourself. Wario would love this!",
    "category": "curiosities",
    "price": 680,
    "icon": "🌀",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "confusion_50",
      "chance_to_disorient_20",
      "minor_illusion_effect_15"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_shipping",
    "levelRequirement": 3
  }
};
