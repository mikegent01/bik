// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_016 = {
  "feywild_woven_echo": {
    "id": "feywild_woven_echo",
    "name": "Woven Echo of the Courtly Whisper",
    "description": "A silk sash that binds the wearer to the Fey Courts’ murmuring magic. It whispers fragments of forgotten lore, nudging the user toward hidden paths or lost feasts. Wearing it may cause a sudden shift in the surrounding time.",
    "category": "equipment",
    "price": 900,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whispered lore fragments (randomly triggered)",
      "Grants +1 to Perception checks against Fey illusions",
      "May cause time stuttering if worn too long"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "feywild_woven_fey_loops": {
    "id": "feywild_woven_fey_loops",
    "name": "Woven Fey Loops",
    "description": "A tangled web of enchanted thread, each strand loops through time and space. Wearing them grants the wearer temporary immunity to time-based traps and allows them to create a short-lived “loop bubble” to escape danger.",
    "category": "equipment",
    "price": 900,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Create 5ft radius loop bubble that resists time-based effects",
      "Gain +2 to Will save against wild magic traps",
      "Can be activated once per 3 rounds to rewind 2 seconds"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "final_form_unlock_key": {
    "id": "final_form_unlock_key",
    "name": "Final Form Unlock Key",
    "description": "Unlocks your character's true final form, whatever that means.",
    "category": "consumables",
    "price": 250000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Unlock your character's ultimate potential (DM must reveal and grant your 'final form')",
      "Gain all class features, spells, and abilities from all classes",
      "Made by: The Potential Realized"
    ],
    "vendor": "transformation_services",
    "shippedBy": "Power Unleashed",
    "levelRequirement": 80
  },
  "fire_bro_fireball": {
    "id": "fire_bro_fireball",
    "name": "Fire Bro Fireball Glove",
    "description": "Glove that launches bouncing fireballs.",
    "category": "equipment",
    "price": 900,
    "icon": "🔥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Launch fireball: 2d6 fire, bounces once",
      "Range 40ft, 3 charges per short rest",
      "Ignites flammable objects"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Fireproof Glove",
    "levelRequirement": 5
  },
  "fire_flower": {
    "id": "fire_flower",
    "name": "Fire Flower",
    "description": "A vibrant orange blossom crackling with thermal energy. Grants temporary pyrokinetic abilities when consumed.",
    "category": "consumables",
    "price": 230,
    "icon": "🔥",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Duration: 1 minute",
      "Can cast Produce Flame at will",
      "One use of Burning Hands (2nd level)",
      "Resistance to Fire damage"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Insulated Container Service",
    "levelRequirement": 3
  },
  "fire_flower_pendant": {
    "id": "fire_flower_pendant",
    "name": "Fire Flower Pendant",
    "description": "A necklace shaped like a blooming fire flower. Warms the wearer like a cozy hearth.",
    "category": "equipment",
    "price": 900,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Cast 'Fire Bolt' at will (1d10 Fire damage)",
      "+2 to Fire damage rolls",
      "Immunity to extreme heat (up to 100°F)",
      "Leaves scorch marks on furniture"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Sealed Urn",
    "levelRequirement": 3
  },
  "fire_shield_badge": {
    "id": "fire_shield_badge",
    "name": "Fire Shield Badge",
    "description": "A badge that reduces fire damage. Also useful for marshmallows.",
    "category": "equipment",
    "price": 230,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Resistance to Fire damage",
      "Cannot be frozen"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 3
  },
  "first_attack_badge": {
    "id": "first_attack_badge",
    "name": "First Attack Badge",
    "description": "Strike first, ask questions later.",
    "category": "equipment",
    "price": 900,
    "icon": "👊",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Advantage on Initiative rolls"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Priority Mail",
    "levelRequirement": 5
  },
  "flashlight": {
    "id": "flashlight",
    "name": "Bright Flashlight",
    "description": "Batteries included. Scares ghosts.",
    "category": "equipment",
    "price": 44,
    "icon": "🔦",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Cone of light 30ft",
      "Ghosts in light cannot turn invisible"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1
  },
  "flower_kingdom_floral_arrangement_magic": {
    "id": "flower_kingdom_floral_arrangement_magic",
    "name": "Flower Kingdom Magical Floral Arrangement",
    "description": "Flowers that do more than look pretty.",
    "category": "premium",
    "price": 230,
    "icon": "🌸",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Arrangement provides 1d4 temporary HP per day to those who smell it",
      "Flowers scream when disturbed (alarm spell)",
      "You must water them or they become hostile (treat as twig blights)",
      "Made by: Flower Kingdom Florists"
    ],
    "vendor": "flower_kingdom",
    "shippedBy": "Pollen Cloud",
    "levelRequirement": 5
  },
  "flower_kingdom_petal_glider_premium": {
    "id": "flower_kingdom_petal_glider_premium",
    "name": "Flower Kingdom Petal Glider (Premium)",
    "description": "Float on floral winds.",
    "price": 230,
    "icon": "🌸",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Glide 30ft safely once per day",
      "Advantage on falls in gardens",
      "Petals wilt after wet",
      "Made by: Flower Crafters"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Petal Pack",
    "levelRequirement": 5
  },
  "flower_kingdom_petal_petal_salad_recipe": {
    "id": "flower_kingdom_petal_petal_salad_recipe",
    "name": "Recipe: Flower Kingdom Petal Salad",
    "description": "Edible flower salad for blooming health.",
    "price": 230,
    "icon": "🥗",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Toss petals (10 min); eat to heal 1d6 HP and gain advantage on Nature checks for 2 hours",
      "Requires: Fresh petals; floral fresh",
      "Flowers friends approve",
      "Made by: Kingdom Gardeners"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Petal Platter Page",
    "levelRequirement": 5
  },
  "flower_kingdom_petal_petticoat": {
    "id": "flower_kingdom_petal_petticoat",
    "name": "Flower Kingdom Petal Petticoat",
    "description": "Layered petticoat of fresh petals.",
    "category": "equipment",
    "price": 230,
    "icon": "👗",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Charisma in gardens",
      "Petals release calming scent (advantage vs. fear)",
      "Wilts after rain",
      "Made by: Flower Dressmakers"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Blooming Bundle",
    "levelRequirement": 5
  },
  "flower_kingdom_petal_presser": {
    "id": "flower_kingdom_petal_presser",
    "name": "Flower Kingdom Petal Presser",
    "description": "Press for flattening petals in salads.",
    "category": "equipment",
    "price": 230,
    "icon": "🥗",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Presses delicate petals; +1 to Nature for floral recipes",
      "Extracts essence (extra heal)",
      "Presses wilt if overused",
      "Made by: Kingdom Gardeners"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Bloom Press Bundle",
    "levelRequirement": 5
  },
  "fludd_unit": {
    "id": "fludd_unit",
    "name": "F.L.U.D.D. Unit",
    "description": "Flash Liquidizer Ultra Dousing Device. A backpack with an AI. Very chatty.",
    "category": "equipment",
    "price": 23000,
    "icon": "💧",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Hover Nozzle: Fly speed 30ft (must end turn on ground)",
      "Rocket Nozzle: Jump height x10 (1 charge/min)",
      "Turbo Nozzle: Dash as bonus action",
      "Water Gun: Pushes enemies 20ft (STR save DC 15)"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Waterproof Crate",
    "levelRequirement": 6
  },
  "forbidden_artifact_activation": {
    "id": "forbidden_artifact_activation",
    "name": "Forbidden Artifact Activation",
    "description": "A ritual to activate a dormant artifact.",
    "category": "forbidden",
    "price": 250000,
    "icon": "🏺",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Artifact gains a new power (DM discretion)",
      "Each use risks a random catastrophic effect",
      "Artifact may demand a sacrifice"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Ritual Scroll",
    "levelRequirement": 15
  },
  "forbidden_dimensional_rift": {
    "id": "forbidden_dimensional_rift",
    "name": "Forbidden Dimensional Rift",
    "description": "A rift to another dimension that you can control.",
    "category": "forbidden",
    "price": 260000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Rift can transport you to another dimension (1/day)",
      "Each use risks a random planar effect",
      "Rift is hunted by cosmic entities"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Void Box",
    "levelRequirement": 15
  },
  "forbidden_knowledge_scroll": {
    "id": "forbidden_knowledge_scroll",
    "name": "Forbidden Knowledge Scroll",
    "description": "A scroll containing knowledge that should never be known.",
    "category": "forbidden",
    "price": 260000,
    "icon": "📜",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Grants one *Wish*-like effect (DM discretion)",
      "Each use causes a random madness (1d4 days)",
      "Scroll is hunted by cosmic entities"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Lead Box",
    "levelRequirement": 15
  },
  "forbidden_summoning_circle": {
    "id": "forbidden_summoning_circle",
    "name": "Forbidden Summoning Circle",
    "description": "A circle that summons a creature from another dimension.",
    "category": "forbidden",
    "price": 260000,
    "icon": "⭕",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Summon a CR 15+ creature (DM discretion)",
      "Creature is loyal for 1 hour or until dismissed",
      "May attract unwanted attention"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Blood Ink",
    "levelRequirement": 15
  },
  "forbidden_weapon_forging": {
    "id": "forbidden_weapon_forging",
    "name": "Forbidden Weapon Forging",
    "description": "A weapon forged with forbidden magic.",
    "category": "forbidden",
    "price": 260000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Weapon deals +3d6 damage of a random type",
      "Each use has a 10% chance to curse the wielder",
      "Weapon is sentient and hungry"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Cursed Forge",
    "levelRequirement": 12
  },
  "forgery_commission": {
    "id": "forgery_commission",
    "name": "Forgery Commission (1 Document)",
    "description": "Hire a master forger to create a convincing fake: passport, deed, letter of nobility, etc.",
    "category": "services",
    "price": 5900,
    "icon": "🖇️",
    "stock": 15,
    "rarity": "rare",
    "effects": [
      "Create 1 convincing forged document",
      "Forgery DC 16 to detect (normal inspection: DC 12)",
      "Takes 3 days; risky if document is studied closely"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Covert Delivery",
    "levelRequirement": 4
  },
  "formosa_ultima_bamboo_steamer": {
    "id": "formosa_ultima_bamboo_steamer",
    "name": "Formosa Ultima Bamboo Steamer",
    "description": "Layered steamer for rice balls and delicate foods.",
    "category": "equipment",
    "price": 230,
    "icon": "🍙",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Steams without sticking; advantage on Dexterity for shaping rice",
      "Preserves nutrients (extra +1 HP from steamed dishes)",
      "Bamboo warps in extreme dry heat",
      "Made by: Ultima Bamboo Crafters"
    ],
    "vendor": "formosa_ultima_village",
    "shippedBy": "Bamboo Basket Bundle",
    "levelRequirement": 5
  },
  "formosa_ultima_beauty_enhancement": {
    "id": "formosa_ultima_beauty_enhancement",
    "name": "Formosa Ultima Beauty Enhancement",
    "description": "Literal beauty surgery – you become a painting.",
    "category": "services",
    "price": 900,
    "icon": "🎨",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "You appear as a living Renaissance painting for 7 days: +2 Charisma, -2 Dexterity",
      "Art critics may try to 'collect' you",
      "Water damage is a real threat – avoid rain",
      "Made by: Formosa Ultima Atelier"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Canvas Wrap",
    "levelRequirement": 7
  },
  "formosa_ultima_embroidered_kimono": {
    "id": "formosa_ultima_embroidered_kimono",
    "name": "Formosa Ultima Embroidered Kimono",
    "description": "Elegant robe with mystical island motifs.",
    "price": 6000,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Dexterity (Acrobatics) checks",
      "Once per day: Minor illusion of cherry blossoms (distraction)",
      "Silk tears easily in combat",
      "Made by: Ultima Tailors"
    ],
    "vendor": "formosa_ultima_village",
    "shippedBy": "Bamboo Fold",
    "levelRequirement": 6
  },
  "formosa_ultima_mango_juice": {
    "id": "formosa_ultima_mango_juice",
    "name": "Formosa Ultima Mango Juice",
    "description": "This juice is so refreshing it feels like you're drinking pure sunshine. Restores a bit of stamina.",
    "category": "consumables",
    "price": 44,
    "icon": "🥭",
    "stock": 50,
    "rarity": "common",
    "effects": [
      "Single Use: Drink as a bonus action. Remove one level of Exhaustion"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Refrigerated Crate",
    "levelRequirement": 1
  },
  "formosa_ultima_recipe_fancy_pasta": {
    "id": "formosa_ultima_recipe_fancy_pasta",
    "name": "Recipe: Formosa Ultima Fancy Pasta",
    "description": "Pasta that is art.",
    "price": 230,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants +1 Charisma for 1 hour (sophisticated)",
      "You must eat it with proper fork technique (disadvantage if you don't)",
      "Pasta is shaped like your face (creepy but impressive)",
      "Made by: Formosa Ultima Pasta Artisans"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Canvas Wrap",
    "levelRequirement": 6
  },
  "formosa_ultima_rice_ball_recipe": {
    "id": "formosa_ultima_rice_ball_recipe",
    "name": "Recipe: Formosa Ultima Onigiri",
    "description": "Handheld rice balls wrapped in seaweed for quick energy.",
    "price": 230,
    "icon": "🍙",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Shape rice (15 min); eat for +10 ft speed and 1d4 HP for 1 hour",
      "Requires: Rice and seaweed; portable snack",
      "Fills you with island spirit",
      "Made by: Ultima Cooks"
    ],
    "vendor": "formosa_ultima_village",
    "shippedBy": "Bamboo Ball Bundle",
    "levelRequirement": 5
  },
  "formosa_ultima_silk_gloves": {
    "id": "formosa_ultima_silk_gloves",
    "name": "Formosa Ultima Silk Gloves",
    "description": "Exquisite gloves woven from exotic silks, aiding in delicate tasks.",
    "category": "equipment",
    "price": 900,
    "icon": "🧤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Dexterity (Sleight of Hand) and Intelligence (Investigation) for fine work",
      "Holds small tools without dropping (up to 2 lbs)",
      "Stains easily – clean with island herbs",
      "Whispers forgotten lore on a natural 20 check"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Silk-Wrapped Parcel",
    "levelRequirement": 7
  },
  "formosa_ultima_silk_gloves_premium": {
    "id": "formosa_ultima_silk_gloves_premium",
    "name": "Formosa Ultima Silk Gloves (Premium)",
    "description": "Exquisite gloves for precise thievery or spellcasting.",
    "price": 900,
    "icon": "🧤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Sleight of Hand or Arcana checks (one per day each)",
      "Sleight of Hand DC reduced by 2 for locks/traps",
      "Silk whispers secrets if you listen (50% chance of minor hint)",
      "Made by: Formosan Weavers"
    ],
    "vendor": "formosa_ultima_market",
    "shippedBy": "Silk Road Runner",
    "levelRequirement": 7
  },
  "formosa_ultima_silk_rope": {
    "id": "formosa_ultima_silk_rope",
    "name": "Formosa Ultima Silk Rope",
    "description": "A 50ft rope woven from enchanted spider silk that never tangles.",
    "category": "equipment",
    "price": 230,
    "icon": "🕸️",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Never knots or tangles, even when wet",
      "Can support up to 2 tons of weight",
      "Made by: Formosa Ultima"
    ],
    "vendor": "formosa_ultima_trader",
    "shippedBy": "Coiled Bundle",
    "levelRequirement": 4
  },
  "formosan_silk_cloak": {
    "id": "formosan_silk_cloak",
    "name": "Formosan Silk Cloak",
    "description": "Feather-light cloak woven with bioluminescent threads.",
    "category": "equipment",
    "price": 900,
    "icon": "🧣",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Grants advantage on Stealth checks in dimly lit or dark areas",
      "Cloak is completely silent when moving",
      "Made by: Formosa Ultima"
    ],
    "vendor": "formosan_embassy",
    "shippedBy": "Vacuum Sealed",
    "levelRequirement": 4
  },
  "fortnite_build_kit": {
    "id": "fortnite_build_kit",
    "name": "Build Kit",
    "description": "A kit for instant fortifications.",
    "category": "consumables",
    "price": 230,
    "icon": "🛠️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Build wall/ramp (AC 15, HP 30) instantly",
      "10 materials per kit",
      "Harvest more from environment"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Tool Bag",
    "levelRequirement": 3
  },
  "fountain_of_mirrored_souls": {
    "id": "fountain_of_mirrored_souls",
    "name": "Fountain of Mirrored Souls",
    "description": "A fountain that reflects not your face, but your alternate selves.",
    "category": "forbidden",
    "price": 260000,
    "icon": "💧",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Drink: you experience the life of one alternate version of yourself (DM chooses)",
      "Gain 1d4 memories, skills, or traumas from that life",
      "You may permanently merge with one version — gaining their abilities, losing your past"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Obsidian Basin",
    "levelRequirement": 16
  },
  "fox_arwing_model": {
    "id": "fox_arwing_model",
    "name": "Arwing Model",
    "description": "A model that summons a fighter jet illusion.",
    "category": "curiosities",
    "price": 4800,
    "icon": "✈️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Summon illusion jet: Fly 60ft, laser 2d8",
      "Lasts 1 minute, fools enemies",
      "Once per day"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Model Kit",
    "levelRequirement": 6
  },
  "fp_plus_badge": {
    "id": "fp_plus_badge",
    "name": "FP Plus Badge",
    "description": "A flower-shaped badge that increases magical capacity.",
    "category": "equipment",
    "price": 900,
    "icon": "🌸",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 1st Level Spell Slot while equipped",
      "Requires Attunement"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Mystic Mail",
    "levelRequirement": 4
  },
  "fractured_atrium_abyssal_gaze_glove": {
    "id": "fractured_atrium_abyssal_gaze_glove",
    "name": "Abyssal Gaze Glove",
    "description": "Worn by those who dare to peer into the abyss, this glove grants the wearer temporary sight into the soul of the dead. Useful for locating hidden necromantic sigils or trapped spirits.",
    "category": "equipment",
    "price": 5600,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals hidden necromantic sigils on the ground",
      "Grants 20% chance to see a ghostly echo of a defeated enemy",
      "Reduces enemy necromancy resistance by 20% for 10 seconds"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_blood_echo": {
    "id": "fractured_atrium_blood_echo",
    "name": "Blood Echo Vessel",
    "description": "A necromantic vessel that amplifies the user’s willpower and drains enemy vitality. When activated, it echoes the voice of the dead, granting temporary invisibility and silence to all nearby foes.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Amplifies necromantic aura by 30%",
      "Deals 20% extra damage to undead enemies",
      "Grants 3 seconds of invisibility on activation"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_blood_rune": {
    "id": "fractured_atrium_blood_rune",
    "name": "Blood Rune of the Necrotic Throne",
    "description": "A cursed amulet that draws power from the blood of the fallen. It enhances necromantic rites but slowly drains the user’s vitality until they become a hollow vessel.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Boosts necromantic spells by 50% for 3 turns",
      "Inflicts 2d6 necrotic damage to enemies within 3 squares",
      "Reduces HP by 10% per turn if used more than 3 times"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_blood_scarf": {
    "id": "fractured_atrium_blood_scarf",
    "name": "Blood Scarf of the Hollowed",
    "description": "Woven from the remnants of a fallen necromancer’s soul, this scarf drains vitality from foes while granting the wearer temporary immunity to psychic backlash. Its crimson hue pulses with the echo of a forgotten ritual.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Siphons 10% HP from nearby enemies per turn",
      "Grants +20% damage against undead",
      "Reduces enemy necromantic aura by 30% for 10 seconds"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_bloodbound_tome": {
    "id": "fractured_atrium_bloodbound_tome",
    "name": "Bloodbound Tome of the Corvinarus",
    "description": "A cursed grimoire that whispers the names of the fallen. When opened, it grants the user temporary control over the spirits of the dead, allowing them to speak, attack, or defend alongside the wielder.",
    "price": 5500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Allows summoning of 1 spirit ally for 30 seconds",
      "Grants +25% necromancy spell duration",
      "Spirit ally gains 10% of user’s max HP"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_blooded_mirror": {
    "id": "fractured_atrium_blooded_mirror",
    "name": "Blooded Mirror of the Fallen",
    "description": "A mirror carved from the bones of a fallen necromancer. It captures the soul of the wielder’s most recent enemy, allowing them to speak through its surface.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "When activated, reveals the soul of the last enemy killed",
      "Allows 3 second voice channel to speak with the enemy’s spirit",
      "Slightly slows movement when enemy is near, as if the mirror is watching"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_bone_binder": {
    "id": "fractured_atrium_bone_binder",
    "name": "Bone Binder of Corvinarus",
    "description": "A cursed artifact forged from the ribs of a fallen warlord. When activated, it binds the user’s soul to the grave, granting invulnerability to necrotic damage but draining sanity over time.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immune to necrotic damage while active",
      "-15% movement speed while active",
      "Each minute, -20% sanity until deactivated"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "fractured_atrium_bone_bottle": {
    "id": "fractured_atrium_bone_bottle",
    "name": "Bone Bottle of Unspoken Echoes",
    "description": "A vial sealed with the essence of a forgotten Corvinarus ancestor. When cracked, it releases a psychic resonance that temporarily binds a target’s memories to the wielder. Perfect for interrogation or necromantic rituals.",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporarily grants memory-binding ability (10s duration)",
      "Reduces enemy spellcasting by 20% while active",
      "Causes targets to remember their own death if affected"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_bone_chime": {
    "id": "fractured_atrium_bone_chime",
    "name": "Bone Chime of the Corvinarus Echo",
    "description": "A resonant artifact carved from ancient necromancer bones. When struck, it summons a spectral echo of the wielder’s last battle cry. Ideal for summoning undead minions with voice-based commands.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons 3 spectral wraiths for 3 rounds",
      "Grants +5% to all necromantic damage when within 10 ft",
      "Echoes last battle cry for 1 round, causing fear to enemies"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_bone_key": {
    "id": "fractured_atrium_bone_key",
    "name": "Bone Key of Corvinarus",
    "description": "A relic forged from the remains of a fallen Corvinarus noble. When wielded, it grants temporary control over necromantic constructs and allows the user to bind spectral entities. Glows faintly with a cold blue aura.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Bond: Can temporarily bind 1 spectral entity for 2 rounds",
      "Corvinarus Blessing: +10% spellcasting speed for necromancy",
      "Echoes of the Dead: Reveals hidden paths or entrances to necrotic zones"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_bone_key_of_the_oracle": {
    "id": "fractured_atrium_bone_key_of_the_oracle",
    "name": "Bone Key of the Oracle",
    "description": "A key carved from the ribs of a necromantic sage. When used, it unlocks the Oracle’s hidden chamber — revealing a portal to the Corvinarus lineage’s forbidden archives.",
    "price": 910,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Opens hidden chamber with the Oracle’s archives",
      "Grants access to the Corvinarus lineage’s hidden secrets",
      "Requires 1 soul to activate (consumed)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_bone_rune": {
    "id": "fractured_atrium_bone_rune",
    "name": "Bone Rune of the Atrium",
    "description": "Carved from the shattered mirror’s core, this rune allows the caster to inscribe temporary necromantic glyphs onto the battlefield. Each glyph becomes a living curse.",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Can be used to inscribe glyphs onto ground or walls for 30 seconds",
      "Each glyph deals 10% of caster’s max HP as damage to all enemies in area",
      "Grants +50% necromancy spell duration when used in conjunction with other glyphs"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_bone_whisperer": {
    "id": "fractured_atrium_bone_whisperer",
    "name": "Bone Whisperer",
    "description": "A cursed relic that hums with the echo of fallen necromancers. When wielded, it whispers forgotten commands to the dead, granting temporary control over spectral minions. Its power wanes after three uses.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +20% damage to necrotic attacks",
      "Can summon 1 ghostly servant for 3 turns",
      "After 3 uses, user suffers 10% HP loss"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "fractured_atrium_bonewhisper_amber": {
    "id": "fractured_atrium_bonewhisper_amber",
    "name": "BoneWhisper Amber",
    "description": "A cursed gem infused with the whispers of the dead, granting visions of past battles and forgotten names. Wearing it summons spectral echoes that bolster your defenses.",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% defense when near undead",
      "Grants 10% chance to see a ghostly ally during combat",
      "Causes temporary disorientation to living foes after 3 seconds of use"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corrupted_echo": {
    "id": "fractured_atrium_corrupted_echo",
    "name": "Corrupted Echo of the Deep Mirror",
    "description": "A shattered fragment of the Deep Mirror’s essence, whispering forgotten spells in the necromantic tongue. Wields the power to resurrect the dead… at the cost of your soul’s echo.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Revives one corpse for 3 turns with 100% damage resistance",
      "Grants 20% increased necromantic spell casting speed",
      "Consumes 1 soul fragment per use"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corrupted_heart": {
    "id": "fractured_atrium_corrupted_heart",
    "name": "Corrupted Heart of the Hollow King",
    "description": "A pulsating, obsidian heart that pulses with necrotic energy. When worn, it grants temporary necromantic resonance and summons spectral echoes of the dead.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% chance to deal extra damage to undead",
      "Grants 20% chance to summon a spectral companion for 10 seconds",
      "Reduces stamina regeneration by 20% (compensated by increased damage)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "fractured_atrium_corrupted_mirror": {
    "id": "fractured_atrium_corrupted_mirror",
    "name": "Corrupted Mirror of the Deep Atrium",
    "description": "A fractured reflection that whispers the secrets of the dead. When wielded, it reveals hidden truths in necromantic rituals but drains the wielder’s sanity with each use. Perfect for those who seek to commune with the forgotten.",
    "category": "equipment",
    "price": 910,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden necromantic glyphs on target",
      "Inflicts 1d6 psychic damage on undead",
      "Causes 1d4 Sanity Drain per use"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corrupted_reflection": {
    "id": "fractured_atrium_corrupted_reflection",
    "name": "Corrupted Reflection Shard",
    "description": "A shard of shattered mirror imbued with necromantic resonance. When wielded, it reflects the soul of the nearest undead, granting temporary spectral vision. Its echo whispers secrets of the dead.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants spectral vision for 10 seconds when enemy is undead",
      "Echoes nearby necromantic entities, revealing their weaknesses",
      "Slight chance to summon a whispering specter for 3 seconds"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_corv_necro_catalyst": {
    "id": "fractured_atrium_corv_necro_catalyst",
    "name": "Corv Necro Catalyst",
    "description": "A shard of corrupted bone fused with the essence of Corvinarus, allowing the wielder to channel necrotic energy into devastating spells. It’s said to hum with the voice of the dead.",
    "price": 920,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% necromancy spell damage",
      "Grants 20% chance to summon a spectral pet during spell casting",
      "Consumes 10% of caster’s HP to cast spells (recovery after 30 seconds)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corv_soul_core": {
    "id": "fractured_atrium_corv_soul_core",
    "name": "Corvinarus Soul Core Fragment",
    "description": "A pulsating shard of necromantic power, forged from the heart of a fallen Corvinarus noble. When imbued with a ritual, it grants temporary control over undead minions.",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Activates on use: summons 3 undead minions for 10 seconds",
      "Increases necromantic spell duration by 20%",
      "Requires ritual to activate (use with a necromantic spell)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corvian_soul_amber": {
    "id": "fractured_atrium_corvian_soul_amber",
    "name": "Corvian Soul Amber",
    "description": "A pulsating gem forged from the essence of a fallen Corvinarus. When activated, it grants temporary necromantic resonance and summons a spectral wraith for combat support.",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Activates on use to grant +50% necromantic spell power for 30 seconds",
      "Summons a spectral wraith (attacks enemies, deals 50% damage)",
      "Grants resistance to fear effects for 15 seconds"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_blade": {
    "id": "fractured_atrium_corvinarus_blade",
    "name": "Corvinarus Fangblade",
    "description": "A cursed blade forged from the bones of a fallen Corvinarus warlord. It glows with the power of the abyss, slicing through undead with unnatural ease. Blood of the dead clings to its edge, whispering truths of the grave.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals 20% extra damage to undead enemies",
      "Inflicts “Echo of the Dead” on hit: temporary necromantic resistance for 2 seconds",
      "Upon death, the blade shatters, releasing a soul fragment that can be recovered as a material"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_blood_scar": {
    "id": "fractured_atrium_corvinarus_blood_scar",
    "name": "Corvinarus Blood Scar",
    "description": "A relic of the fallen Corvinarus line, this artifact binds the user to the necrotic lineage. Each use drains vitality but grants a surge of cursed power.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals extra damage to undead enemies",
      "Restores 10% HP on cast of any necromantic spell",
      "Causes enemies to bleed out when hit by spells with a necrotic aura"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_blood_tome": {
    "id": "fractured_atrium_corvinarus_blood_tome",
    "name": "Corvinarus Blood Tome",
    "description": "A cursed grimoire bound in the skin of a fallen noble. When opened, it reveals forbidden rites of necromantic ascension, allowing the user to temporarily become a vessel of the dead. Requires ritualistic chanting and a willing sacrifice.",
    "price": 920,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Necromantic Ascension: User gains 30% damage resistance and +50% necromantic spell power for 10 turns",
      "Corpse Echo: One enemy becomes a spectral mimic for 3 turns (copies user’s last spell)",
      "Sacrificial Pact: When used, the user must choose one ally to “sacrifice” for 3 turns (gains 20% damage boost)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_bloodblade": {
    "id": "fractured_atrium_corvinarus_bloodblade",
    "name": "Corvinarus Bloodblade",
    "description": "Forged from the bone of a fallen Corvinarus warlord, this blade channels necrotic fury. Its edge bleeds when struck, summoning minor spectral reinforcements in battle.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% damage to undead enemies",
      "+10% critical hit chance",
      "When damaged, triggers a 2-turn spectral strike on nearest enemy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_bloodline": {
    "id": "fractured_atrium_corvinarus_bloodline",
    "name": "Corvinarus Bloodline Amulet",
    "description": "Worn by the last of the Corvinarus lineage, this amulet channels the necromantic essence of fallen nobles. It grants temporary control over spectral echoes and grants a chilling aura that slows undead. Flickers with eerie crimson light when necromancy is active.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants temporary control over spectral echoes (can summon 3 spectral minions)",
      "Slows undead movement by 50% for 30 seconds",
      "Increases necromancy skill gain by 20% for 2 minutes"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_bloodline_scarf": {
    "id": "fractured_atrium_corvinarus_bloodline_scarf",
    "name": "Corvinarus Bloodline Scarf",
    "description": "Woven from the thread of a fallen noble’s cursed lineage, this scarf binds the wearer to ancient necromantic rites. Each step grants a chance to resurrect a fallen ally, albeit at a cost.",
    "category": "equipment",
    "price": 920,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "10% chance to resurrect one ally on death (costs 10% HP)",
      "Increases necromantic spell duration by 20%",
      "Grants +20% damage to undead enemies"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_bloodstone": {
    "id": "fractured_atrium_corvinarus_bloodstone",
    "name": "Corvinarus Bloodstone of the Veiled Throne",
    "description": "A cursed gem carved from the bones of a fallen Corvinarus noble. When activated, it bleeds necrotic energy into your next spell, but drains your health if cast without proper focus.",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Casts a 10-second necrotic aura that deals 50% bonus damage",
      "Restores 10% of max HP if used within 5 seconds of a kill",
      "Reduces mana cost of necromantic spells by 15%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_bone_satchel": {
    "id": "fractured_atrium_corvinarus_bone_satchel",
    "name": "Corvinarus Bone Satchel",
    "description": "A ceremonial satchel forged from the ribs of a fallen Corvinarus noble. It holds the essence of necromantic power and can be used to store and channel soul fragments.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Can store 3 soul fragments (max 3000 HP bonus)",
      "+5% chance to trigger necromantic resonance on attack",
      "When opened, emits a low hum that soothes undead for 2 turns"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_bone_scepter": {
    "id": "fractured_atrium_corvinarus_bone_scepter",
    "name": "Corvinarus Bone Scepter of the Fallen",
    "description": "A scepter carved from the bones of a necromantic overlord, it channels dark energy into devastating strikes. The wielder must be in a darkened area to activate its full power.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+30% damage on first strike of necromantic attacks",
      "Increases damage dealt to undead by 25%",
      "Grants a 50% chance to summon a shadowy necromancer for 10 seconds"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_bone_tome": {
    "id": "fractured_atrium_corvinarus_bone_tome",
    "name": "Corvinarus Bone Tome of the Silent Necromancer",
    "description": "This cursed tome is bound in the ribs of a fallen Corvinarus. Reading its pages grants temporary necromancy spells—but each spell causes the caster to bleed a portion of their soul. The tome only functions in the presence of a mirror.",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cast “Resurrection of the Mirror” (1 charge): revives one ally for 20s",
      "Soul drain: 1% HP per cast",
      "Mirror effect: Only usable in mirrored rooms"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_crimson_shroud": {
    "id": "fractured_atrium_corvinarus_crimson_shroud",
    "name": "Corvinarus Crimson Shroud",
    "description": "Woven from the blood of a fallen Corvinarus noble, this shroud grants the wearer temporary necromantic dominion over the battlefield. It binds the dead to the living, turning enemies into loyal undead followers.",
    "category": "equipment",
    "price": 920,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Increases necromancy power by 20%",
      "Grants 10% chance to summon 1 undead minion per turn (until killed)",
      "When used in combat, the wielder gains 50% damage reduction from physical attacks"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_echo": {
    "id": "fractured_atrium_corvinarus_echo",
    "name": "Corvinarus Echo",
    "description": "A cursed relic of the Corvinarus lineage, its surface pulses with necromantic resonance. When activated, it summons a spectral echo of the wielder’s past death—creating a temporary necrotic veil that repels undead.",
    "category": "equipment",
    "price": 920,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons spectral echo of the user’s death for 5 seconds",
      "Reduces enemy necromantic damage by 20%",
      "Grants +20% chance to dodge necrotic projectiles"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_echo_belt": {
    "id": "fractured_atrium_corvinarus_echo_belt",
    "name": "Corvinarus Echo Belt",
    "description": "A cursed artifact forged in the echo chambers of the Atrium’s shattered mirrors. When worn, it whispers the dead’s secrets and amplifies the wielder’s necromantic willpower.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +10% necromancy damage",
      "Reveals enemy spell targets for 1 turn",
      "Inflicts 1 soul drain on enemy after 3 turns"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_echo_blade": {
    "id": "fractured_atrium_corvinarus_echo_blade",
    "name": "Corvinarus Echo Blade",
    "description": "A blade forged from the fractured soul of a fallen Corvinarus general. Its edge hums with ancestral will, striking true even against undead. Wields a minor echo effect that duplicates the last spell cast.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage to undead enemies",
      "+5% chance to reflect spell damage back to caster",
      "Grants 10% chance to summon a ghostly echo of the wielder’s last spell"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_echo_core": {
    "id": "fractured_atrium_corvinarus_echo_core",
    "name": "Corvinarus Echo Core",
    "description": "A fragment of the Corvinarus lineage’s ancestral power, resonating with the deepest echoes of forgotten rituals. Wields the power to summon spectral echoes that mimic enemy spells.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons 1 spectral echo of last enemy spell cast",
      "Echoes can be cast as a counterattack, dealing 150% of original damage",
      "Echoes persist for 5 seconds and vanish on caster death"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_finger": {
    "id": "fractured_atrium_corvinarus_finger",
    "name": "Corvinarus Finger of Echoing Souls",
    "description": "A relic from the last living Corvinarus, this finger can be pressed to summon a spectral echo of a fallen ally. It does not restore health but allows the user to briefly channel the essence of the dead for devastating effects.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons a spectral echo of a fallen ally for 5 seconds (no combatant)",
      "Grants +15% damage to necromantic spells while active",
      "Reduces stamina cost of spells by 10%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_gauntlet": {
    "id": "fractured_atrium_corvinarus_gauntlet",
    "name": "Corvinarus Bone Gauntlet",
    "description": "Forged from the remnants of a fallen Corvinarus noble, this gauntlet channels the lineage’s dark power. It grants the user dominion over spectral constructs and enhances necromantic rituals.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases necromancy skill gain by 15%",
      "Allows summoning of a spectral wraith companion (1 HP, 100% damage)",
      "Inflicts 5% additional necrotic damage to undead enemies"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_gaze": {
    "id": "fractured_atrium_corvinarus_gaze",
    "name": "Corvinarus Gaze of the Shadowed Throne",
    "description": "A ceremonial eye that allows the user to see through the eyes of a necromantic patron. Grants visions of the dead, hidden truths, or cursed locations.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 10% chance to reveal hidden enemy location or path",
      "Grants 50% chance to detect cursed objects in 30ft radius",
      "Inflicts 10% soul drain per use (can be recovered by resting)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_hollow": {
    "id": "fractured_atrium_corvinarus_hollow",
    "name": "Corvinarus Hollow Blade",
    "description": "A cursed blade forged from the bones of a fallen necromancer’s soul. It hums with forbidden power and strikes true even in the face of spectral corruption.",
    "category": "equipment",
    "price": 930,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% critical strike chance",
      "Deals extra damage to undead enemies",
      "Upon death, blade briefly reanimates the user’s soul (once per battle)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_mantle": {
    "id": "fractured_atrium_corvinarus_mantle",
    "name": "Corvinarus Mantle of the Dead King",
    "description": "Worn by those who dare to walk the edge between life and shadow. This mantle amplifies necromantic chants and grants the wearer the ability to summon a spectral echo of a fallen comrade.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Boosts necromancy spell damage by 30%",
      "Allows summoning of a spectral companion for 10 seconds",
      "Reduces cooldown of all necromantic spells by 20%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_mirrored_soul": {
    "id": "fractured_atrium_corvinarus_mirrored_soul",
    "name": "Corvinarus Mirrored Soul Shard",
    "description": "A shard of the Corvinarus lineage’s cursed mirror. Wears this and see your soul reflected in every enemy’s eyes. The mirror doubles the power of your necromantic spells and reveals hidden truths.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "All necromantic spells deal +25% extra damage",
      "Reflects enemy soul energy for 30 seconds after casting",
      "Reveals hidden enemy weaknesses through soul mirroring"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_ring": {
    "id": "fractured_atrium_corvinarus_ring",
    "name": "Corvinarus Ring of the Deep Mirror",
    "description": "A cursed ring forged from the shattered mirror of the Atrium’s deepest vault. Wearing it allows the wearer to perceive the echoes of past deaths and the future’s necrotic truths.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals the location of a hidden necrotic altar",
      "Grants 10% bonus to necromancy skill checks",
      "Causes 15% chance to summon a ghostly echo of the wearer’s past self"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_scar": {
    "id": "fractured_atrium_corvinarus_scar",
    "name": "Corvinarus Scar",
    "description": "A jagged, obsidian-tipped relic etched with forbidden sigils of the lineage. Wearing it grants the wearer a chilling sense of ancestral power and allows them to command undead minions with eerie precision.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% attack damage against undead",
      "Grants +5% chance to inflict fear on living targets",
      "Each use drains 1 stamina point (regenerates after 10 minutes)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_soul_ash": {
    "id": "fractured_atrium_corvinarus_soul_ash",
    "name": "Corvinarus Soul Ash",
    "description": "A glowing powder extracted from the bones of fallen Corvinarus mages. When sprinkled on necromantic runes, it strengthens the binding of undead constructs and imbues them with a haunting, haunting presence.",
    "price": 930,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases undead durability by 40%",
      "Grants 50% chance to summon a spectral echo of the caster’s soul",
      "Enhances necromantic enchantments by 20%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_soul_casket": {
    "id": "fractured_atrium_corvinarus_soul_casket",
    "name": "Corvinarus Soul Casket",
    "description": "A sealed sarcophagus carved from Corvinarus lineage stone, rumored to house the last soul of a necromancer. When used, it grants a temporary pact with the dead.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants 100% necromantic spell efficiency for 2 turns",
      "Can summon one undead creature for 3 turns",
      "Causes minor soul drain for the caster if enemy is within 5 tiles"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_soul_rod": {
    "id": "fractured_atrium_corvinarus_soul_rod",
    "name": "Corvinarus Soul Rod of the Hollow Requiem",
    "description": "A rod forged from the soul-echoes of the Corvinarus lineage. When wielded, it sings lullabies to the dead, summoning spectral echoes that strike with devastating precision.",
    "category": "equipment",
    "price": 930,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals 50% extra damage to undead targets",
      "Grants 20% increased spell casting speed for necromantic abilities",
      "Upon casting a spell, the rod emits a spectral echo that deals 10% of the spell’s damage to surrounding enemies"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_soul_tome": {
    "id": "fractured_atrium_corvinarus_soul_tome",
    "name": "Corvinarus Soul Tome",
    "description": "A cursed book bound in black leather, whispering the lineage’s forgotten rites. When opened, it reveals the power of the dead to speak through the living.",
    "price": 930,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +10% chance to hit with necromantic attacks",
      "Upon activation, grants temporary invisibility for 3 turns",
      "Restores 10% of max HP per turn while active"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_soul_ward": {
    "id": "fractured_atrium_corvinarus_soul_ward",
    "name": "Corvinarus Soul Ward",
    "description": "A cursed amulet forged from the bones of a fallen lineage. Wears the weight of ancestral necromantic power, granting the user temporary immunity to psychic backlash and amplifying their undead summons.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% damage to undead enemies",
      "Grants +2 to Necromancy skill for 5 minutes",
      "When worn, enemies within 30 feet may summon a ghostly echo"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_soulbind": {
    "id": "fractured_atrium_corvinarus_soulbind",
    "name": "Corvinarus Soulbind Gauntlet",
    "description": "Woven from the essence of the Corvinarus lineage, this gauntlet binds the soul of the dead to the wielder’s will. Each strike echoes with the power of ancestral curses.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 10% chance to summon a Corvinarus spirit during combat",
      "Inflicts “Cursed Echo” debuff on enemies for 5 seconds (damage taken increased by 15%)",
      "Increases necromancy skill cooldown reduction by 15%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_soulcore": {
    "id": "fractured_atrium_corvinarus_soulcore",
    "name": "Corvinarus Soulforge",
    "description": "A ritual artifact forged from the blood and bone of a fallen Corvinarus noble. Grants the wielder dominion over the necrotic realm and enhances dark enchantments.",
    "category": "equipment",
    "price": 940,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% damage from all dark magic spells",
      "Grants 2 turns of “Necrotic Embrace” – immune to all damage and can attack twice per turn",
      "Increases necromantic resistance by 30%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_tome": {
    "id": "fractured_atrium_corvinarus_tome",
    "name": "Corvinarus Tome of Unwritten Oaths",
    "description": "A crumbling tomes bound in obsidian leather, inscribed with blood-red runes. It reveals hidden truths of the lineage and allows the user to invoke ancestral curses. Requires a blood sacrifice to activate.",
    "price": 940,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Upon consumption: temporarily grants immunity to fear and confusion",
      "Each use drains 10% of the user’s current HP",
      "Unlocks 3 hidden quests tied to Corvinarus bloodlines"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_vessel": {
    "id": "fractured_atrium_corvinarus_vessel",
    "name": "Corvinarus Vessel",
    "description": "A hollowed mirror imbued with the bloodline of the dead king. Wields the power of ancestral curses, granting the wearer the ability to shatter reality and summon spectral avatars.",
    "category": "equipment",
    "price": 5600,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summons spectral avatar of the Corvinarus lineage for 10 seconds",
      "Reflects 20% of incoming damage as necrotic damage",
      "Grants immunity to fear effects for 5 seconds after avatar summon"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_vest": {
    "id": "fractured_atrium_corvinarus_vest",
    "name": "Corvinarus Vest of Hollow Echoes",
    "description": "Worn by those who seek to become the living shadow of the dead. This enchanted garment binds the soul of a slain noble to your form, granting you temporary necromantic power and a chilling aura of forgotten authority.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 15% damage bonus to necromantic attacks",
      "Increases chance to break enemy defense by 20%",
      "When struck, emits a haunting echo that disorients nearby foes"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_vial": {
    "id": "fractured_atrium_corvinarus_vial",
    "name": "Corvinarus Vial of Unbinding",
    "description": "A vial containing the essence of a fallen Corvinarus noble. When consumed, it grants temporary immunity to soul corruption and enhances necromantic binding.",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +15% necromancy binding success",
      "Immunity to soul corruption for 30 seconds",
      "5% chance to absorb enemy soul upon death"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_ward": {
    "id": "fractured_atrium_corvinarus_ward",
    "name": "Corvinarus Ward of the Fallen Line",
    "description": "A ceremonial amulet forged from the bloodline of the Corvinarus, granting the wearer temporary dominion over the undead. It pulses with dark magic and whispers forgotten commands.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% chance to break undead defenses",
      "Grants 3 turns of necromantic control per battle",
      "Activates at 50% HP to summon a spectral guardian"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_corvinarus_wardstone": {
    "id": "fractured_atrium_corvinarus_wardstone",
    "name": "Corvinarus Wardstone",
    "description": "A jagged relic from the deepest halls of Corvinarus, this stone channels the lineage’s dark power. When placed on a corpse, it grants temporary control over the undead for 1 minute.",
    "price": 940,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Transforms corpses into controlled undead minions",
      "Grants +10% necromancy skill boost for 20 seconds",
      "Causes minor corruption aura on nearby enemies"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_corvus_shroud": {
    "id": "fractured_atrium_corvus_shroud",
    "name": "Corvus Shroud of the Whispering Dead",
    "description": "Woven from the spectral threads of fallen necromancers, this cloak whispers secrets of the dead to those who wear it. It grants temporary visions of past battles and echoes of lost souls.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to detect undead in shadowed areas",
      "+50% damage against necrotic foes",
      "Grants temporary vision of ghostly remnants for 30 seconds after casting"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_corvus_soul_burner": {
    "id": "fractured_atrium_corvus_soul_burner",
    "name": "Corvus Soul Burner Blade",
    "description": "A blade forged from the last breath of a Corvinarus martyr. It siphons life essence from undead enemies and channels it into devastating necrotic strikes.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage to undead enemies",
      "Depletes 1 soul point per hit, restoring 25% health on next turn",
      "Grants +10% chance to trigger a soul burst on critical hit"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_crimson_bone_key": {
    "id": "fractured_atrium_crimson_bone_key",
    "name": "Crimson Bone Key",
    "description": "A key forged from the bone of a Corvinarus noble. When inserted into a locked door or chest, it grants access to forbidden necromantic chambers. It also grants a small chance to awaken a spectral guardian.",
    "price": 940,
    "icon": "🔑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Chamber Key: Opens doors or chests containing necromantic artifacts or souls",
      "Spectral Guardian: 10% chance to spawn a spectral guardian with 150 HP and 50% damage resistance",
      "Blood Sigil: When used, the user must chant a short phrase to unlock the key’s full power (100% chance to trigger if phrase is known)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_crown_of_the_corvinarus_echo": {
    "id": "fractured_atrium_crown_of_the_corvinarus_echo",
    "name": "Crown of the Corvinarus Echo",
    "description": "A cursed royal artifact forged from the bloodline of the fallen Corvinarus. It amplifies necromantic power and grants the wearer a faint echo of their own voice to command undead. Wears heavy and cold, but never breaks.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Increases necromantic spell range by 20%",
      "Echo of the Voice: Once per turn, the caster can command 1 undead unit to attack",
      "Cold Aura: Enemies within 3 meters are slowed by 20%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "fractured_atrium_cursed_mirror": {
    "id": "fractured_atrium_cursed_mirror",
    "name": "Cursed Mirror of the Deep Atrium",
    "description": "This shattered mirror reflects not the truth but the deepest desires of the soul. It amplifies necromantic power and grants visions of the dead, though at the cost of sanity. Wielders must resist the whispers of the void or suffer memory loss.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +30% necromancy skill gain",
      "Allows summoning of one spectral entity per day",
      "Causes 1d4 Sanity Drain per use"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "fractured_atrium_cursed_mirror_core": {
    "id": "fractured_atrium_cursed_mirror_core",
    "name": "Cursed Mirror Core",
    "description": "A shattered fragment of the Deep Mirror’s soul, humming with necrotic resonance. Wields the power to reflect and absorb enemy magic, then channel it into devastating spectral strikes.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects enemy spells and converts them into damage",
      "Inflicts necrotic bleed on enemies within 3 meters",
      "Increases caster speed by 15% while active"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "fractured_atrium_cursed_reflection": {
    "id": "fractured_atrium_cursed_reflection",
    "name": "Cursed Reflection Shard",
    "description": "A shard of fractured mirror that whispers the names of the dead. When wielded, it reflects not your enemy but their deepest fear. Its presence in the dark grants temporary necrotic immunity.",
    "category": "equipment",
    "price": 940,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects enemy’s deepest fear as a temporary buff",
      "Grants 20% necrotic immunity for 30 seconds",
      "Causes 10% chance to reflect damage back to attacker"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  }
};
