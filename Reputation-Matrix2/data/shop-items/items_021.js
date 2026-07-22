// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_021 = {
  "hyrule_echo_bottle": {
    "id": "hyrule_echo_bottle",
    "name": "Echo Bottle of the Forgotten Temple",
    "description": "A vessel that captures the lingering whispers of ancient temples. When shaken, it reveals a hidden relic or clue from a temple’s lost chapter. Perfect for explorers seeking secrets.",
    "price": 2200,
    "icon": "📜",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Shaking reveals a random temple clue or relic",
      "Increases discovery rate by 50%",
      "Grants 1 turn of immunity to hallucinations"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_echo_bow": {
    "id": "hyrule_echo_bow",
    "name": "Echo Bow of the Sundered Temple",
    "description": "This bow echoes the resonance of shattered temple pillars, allowing the user to fire arrows that ricochet off walls and floors with amplified damage.",
    "category": "equipment",
    "price": 2500,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Each arrow ricochets 2 times with 50% damage bonus",
      "Arrow trajectory can be altered with a quick press",
      "After 3 ricochets, the bow emits a temporal echo that freezes nearby enemies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_echo_forged": {
    "id": "hyrule_echo_forged",
    "name": "Echo of the Silent Temple",
    "description": "A relic that resonates with the spirits of the fallen. It allows the user to hear the whispers of the temple guardians and reveals enemy movement patterns for 5 seconds.",
    "price": 2800,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals enemy movement patterns for 5 seconds",
      "Increases stealth duration by 30%",
      "Grants a 10% chance to avoid traps"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_echo_gem": {
    "id": "hyrule_echo_gem",
    "name": "Echo of the Triforce Heart",
    "description": "A glowing gemstone that pulses with the spirit of the Triforce. When activated, it grants a temporary aura of protection and restores health over time.",
    "price": 1500,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores 50 HP per turn for 3 turns",
      "Grants +10% defense for 2 turns",
      "Increases chance to dodge attacks by 15%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4
  },
  "hyrule_feywhisper_gauntlet": {
    "id": "hyrule_feywhisper_gauntlet",
    "name": "Feywhisper Gauntlet of the Echoing Grove",
    "description": "Worn by those who walk the Feywild, this gauntlet resonates with the whispers of ancient trees. It grants the user the ability to summon temporary natural barriers and detect hidden paths within enchanted forests.",
    "category": "equipment",
    "price": 2500,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% chance to avoid traps triggered by environmental effects",
      "Can summon a 3x3 area barrier for 5 seconds",
      "Regenerates 5% HP per second while standing in natural environments"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_feywild_amber": {
    "id": "hyrule_feywild_amber",
    "name": "Feywild Amber Lens",
    "description": "A crystalline shard collected from the heart of the Feywild’s hidden glade. Grants the user visions of alternate realities and grants temporary immunity to magical illusions. Ideal for reconnaissance or ambush tactics.",
    "price": 2000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 10 seconds of resistance to illusions",
      "Reveals hidden paths for 30 seconds",
      "+5% chance to detect hidden enemies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "hyrule_feywild_bone": {
    "id": "hyrule_feywild_bone",
    "name": "Feywild Bone Fang",
    "description": "A relic from the fractured Feywild, its jagged edges hum with arcane power. It grants the wielder temporary camouflage and enhanced stealth in enchanted forests.",
    "category": "equipment",
    "price": 3000,
    "icon": "🐉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 20% chance to evade detection in Feywild zones",
      "Inflicts 1d4 psychic damage on magical creatures",
      "Increases movement speed by 10% in forest biomes"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6
  },
  "hyrule_feywild_echo": {
    "id": "hyrule_feywild_echo",
    "name": "Feywild Resonance Amulet",
    "description": "Worn by those who walk the veil between worlds, this amulet amplifies magical affinity. When worn in the Feywild, it grants temporary flight.",
    "category": "equipment",
    "price": 4200,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Increases spell power by 25% in Feywild zones",
      "Grants 10 seconds of flight time after casting any spell",
      "Reduces spell cooldown by 10%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6
  },
  "hyrule_feywild_fang": {
    "id": "hyrule_feywild_fang",
    "name": "Feywild Fang",
    "description": "A mangled tooth from a Feywild beast that once guarded the heart of Raventree Manor’s hidden sanctum. When wielded, it amplifies the wielder’s intuition and grants them glimpses of hidden paths.",
    "category": "equipment",
    "price": 3200,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases movement speed by 10% in Feywild terrain",
      "Grants 30% chance to detect hidden traps or doors",
      "Inflicts “Whispering Veil” on enemies, causing them to lose 10% accuracy for 3 turns"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6
  },
  "hyrule_feywild_forged_helm": {
    "id": "hyrule_feywild_forged_helm",
    "name": "Feywild Forged Helm",
    "description": "Woven from the dreams of forgotten Feywild spirits, this helm grants the wearer invisibility and the ability to phase through solid matter for short bursts.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility for 10 seconds (no detectable by foes)",
      "Phasing ability to pass through solid objects (1 use)",
      "Grants 20% damage reduction during stealth"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7
  },
  "hyrule_feywild_forged_ring": {
    "id": "hyrule_feywild_forged_ring",
    "name": "Ring of the Feywild Whisperer",
    "description": "Woven with the essence of Feywild magic, this ring allows the wearer to briefly step into the realm of dreams and illusions. It’s said to grant the ability to hear the secrets of the wind.",
    "category": "equipment",
    "price": 2800,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+15% movement speed in low-light or foggy environments",
      "+50% chance to dodge attacks during illusions",
      "Grants 10-second “dream phase” where enemy actions are reversed for 3 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_feywild_fragments": {
    "id": "hyrule_feywild_fragments",
    "name": "Feywild Fragments",
    "description": "Shards of a lost Feywild temple, infused with magical resonance. These fragments allow the wielder to briefly step into the Feywild dimension, granting temporary resistance to magical attacks.",
    "price": 2000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 30% resistance to magical damage for 45 seconds",
      "Allows short teleportation to nearby Feywild zones",
      "Must be consumed immediately or fades"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_feywild_gem": {
    "id": "hyrule_feywild_gem",
    "name": "Feywild Echoing Gem",
    "description": "A pulsing, crystalline fragment from the Feywild, humming with ambient magic. When worn, it grants the user temporary invisibility and immunity to magic-based attacks.",
    "category": "equipment",
    "price": 3800,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporary invisibility for 15 seconds",
      "Immunity to all magic attacks",
      "Grants +5% damage to physical strikes"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6
  },
  "hyrule_feywild_item": {
    "id": "hyrule_feywild_item",
    "name": "Raventree Mirror",
    "description": "A broken mirror that reflects the Feywild and shadows of Raventree Manor",
    "category": "equipment",
    "price": 7500,
    "icon": "🌌",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals hidden paths in Shadowfell and Feywild",
      "Grants 15% chance to dodge attacks",
      "Causes mental fatigue after 2 uses",
      "Made by: Kremling Krew"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6
  },
  "hyrule_feywild_soul_cloth": {
    "id": "hyrule_feywild_soul_cloth",
    "name": "Feywild Soul Cloth",
    "description": "Woven from the essence of forgotten Feywild dreams, this cloth grants the wearer temporary camouflage and spectral agility. Perfect for stealthy infiltration of the Feywild dimension’s hidden sanctuaries.",
    "category": "equipment",
    "price": 2500,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 20% invisibility in Feywild terrain",
      "Increases movement speed by 15%",
      "Absorbs minor magical backlash"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_feywild_talisman": {
    "id": "hyrule_feywild_talisman",
    "name": "Feyveil of the Veiled Temple",
    "description": "Worn by those who tread where the Feywild bleeds into Hyrule, this talisman grants glimpses into forgotten temple secrets. Unlocks hidden paths and reveals ancient guardians’ true forms.",
    "category": "equipment",
    "price": 4200,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% chance to reveal hidden temple doors",
      "Grants temporary camouflage in Feywild zones",
      "+5% chance to restore 10% HP when entering temple ruins"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_forged_temple_sword": {
    "id": "hyrule_forged_temple_sword",
    "name": "Blade of the Temple’s Echo",
    "description": "This sword was forged by the last priest of the Temple of the Echoing Blade. It hums with the resonance of ancient battles, striking true even in the face of overwhelming force.",
    "category": "equipment",
    "price": 4000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Strikes deal +25% bonus damage to enemies with magic resistance",
      "Grants temporary immunity to knockback",
      "Increases critical hit chance by 15%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 8
  },
  "hyrule_forget_me_not_flask": {
    "id": "hyrule_forget_me_not_flask",
    "name": "Forget Me Not Flask",
    "description": "A mysterious vial containing the essence of a lost temples lullaby. Drinking it grants temporary memory erasure from enemies, but also causes the drinker to forget their own recent actions.",
    "price": 1200,
    "icon": "🍹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Erases enemy memory for 10 seconds",
      "Causes user to forget last 3 actions (may cause confusion)",
      "Increases stealth duration by 2 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3
  },
  "hyrule_forget_me_not_pendant": {
    "id": "hyrule_forget_me_not_pendant",
    "name": "Forget Me Not Pendant",
    "description": "A relic from the Forgotten Temple of Sorrow. Wears the wearer with quiet resolve, preventing panic during combat. Wears off after 30 minutes of prolonged battle.",
    "category": "equipment",
    "price": 2500,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduces panic chance by 70%",
      "Grants 5% damage resistance when fear is active",
      "Restores 10% HP after 30 seconds of calm state"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_forgotten_mech": {
    "id": "hyrule_forgotten_mech",
    "name": "Mechanized Relic of the Lost Temple",
    "description": "A rusted yet powerful relic from the ruined temple of Mechanica. Grants temporary speed boosts and reveals hidden treasure chests. Unique to dungeon explorers.",
    "category": "equipment",
    "price": 3000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 15% movement speed boost for 10 seconds",
      "Reveals hidden treasure chests in dungeons",
      "Increases attack speed by 10%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6
  },
  "hyrule_forgotten_temple_ring": {
    "id": "hyrule_forgotten_temple_ring",
    "name": "Ring of the Shattered Glyph",
    "description": "A cursed ring etched with glyphs from the Temple of the Lost Truth. It grants the wearer the ability to hear whispers of the temple’s secrets — but at the cost of temporary hallucinations during combat.",
    "category": "equipment",
    "price": 4000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals hidden enemy weaknesses via glyph whispers",
      "Grants 25% bonus to spellcasting near temple ruins",
      "10-second hallucination debuff on enemies (random illusions)"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6
  },
  "hyrule_garlic_touched_glove": {
    "id": "hyrule_garlic_touched_glove",
    "name": "Garlic Touched Glove",
    "description": "A pair of gloves infused with Wario’s fermented garlic essence and stolen magic from the Star Road",
    "category": "equipment",
    "price": 1200,
    "icon": "🧄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "+10% attack speed when equipped",
      "5% chance to stun enemies for 2 turns on hit",
      "Inflicts 1d4 garlic damage on nonmagical targets",
      "Wears off after 30 minutes of inactivity",
      "Crafted by: Kremling Smuggle Run",
      "Bonus: Wario’s signature grin effect – triggers when used in combat"
    ],
    "vendor": "hyrule",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 4
  },
  "hyrule_greedy_gear": {
    "id": "hyrule_greedy_gear",
    "name": "Greedy Gear",
    "description": "A cursed artifact forged from stolen treasure and Wario Land’s garlic essence",
    "category": "equipment",
    "price": 8000,
    "icon": "🍃",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Grants 30% bonus damage to all attacks",
      "Inflicts 10% chance to cause a garlic allergy debuff on enemies",
      "Increases cost of healing by 20%",
      "Made by: Custodians",
      "Connects to Wario Land lore via Garlic Power and Diamond City"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 12
  },
  "hyrule_item_ancient_key": {
    "id": "hyrule_item_ancient_key",
    "name": "The Whispering Key of Zora’s Keep",
    "description": "A rusted brass key that opens forgotten chambers within the ancient temples. When inserted, it triggers a brief vision of the temple’s forgotten history. Use sparingly—visions may be too vivid.",
    "price": 2000,
    "icon": "🔐",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Opens sealed temple doors (1 use)",
      "Reveals hidden lore for 30 seconds",
      "Minor confusion effect (5% chance)"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 4
  },
  "hyrule_item_echo_blade": {
    "id": "hyrule_item_echo_blade",
    "name": "Echo Blade of the Temple’s Heart",
    "description": "A double-edged blade that reflects the wielder’s past actions. Each swing echoes the user’s last battle cry, amplifying damage and granting temporary speed. But it grows heavier with each use.",
    "category": "equipment",
    "price": 4500,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Damage boost: +15% per use",
      "Speed boost: +20% for 5 seconds",
      "Weight penalty: +50% after 3 uses"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7
  },
  "hyrule_item_name": {
    "id": "hyrule_item_name",
    "name": "Heart of the Ancient Grove",
    "description": "A sacred orb collected from the roots of the Grove of the First Tree. When activated, it grants the wielder a temporary aura of nature’s wrath, striking enemies with elemental damage.",
    "price": 2200,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Deals 15% elemental damage for 20 seconds",
      "Grants 5% increased movement speed",
      "Restores 5% max health on activation"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_item_name_here": {
    "id": "hyrule_item_name_here",
    "name": "Echoing Triforce Fragment",
    "description": "A shard of ancient power that echoes the Triforce’s will when touched",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants temporary Triforce aura to user",
      "Increases damage by 20% for 3 turns",
      "Reduces movement speed by 15%",
      "Made by: Kremling Krew"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_koopa_bank_gold_coins": {
    "id": "hyrule_koopa_bank_gold_coins",
    "name": "Koopa Bank Gold Coins",
    "description": "Stolen gold from the collapsed Koopa Banking Tower, now cursed with anti-hero energy",
    "price": 500,
    "icon": "💰",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Gain 10 Coins when used",
      "Grants +20% bonus damage from Wario’s attacks",
      "10% chance to trigger a “Wario Greed” effect – increases damage for next 3 turns",
      "Wears off after 10 minutes of inactivity",
      "Cannot be used during sacred temple rituals",
      "Crafted by: Wario Inc – “The Greed Vault” branch"
    ],
    "vendor": "hyrule",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 2
  },
  "hyrule_l_eclaire_pastry_tether": {
    "id": "hyrule_l_eclaire_pastry_tether",
    "name": "Sweetened Sorrow Tether",
    "description": "",
    "category": "equipment",
    "price": 1200,
    "icon": "🍞",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Grants 10% chance to heal 1d4 HP when struck by a magical attack",
      "Consumes 10% of your current stamina per use",
      "Only usable in proximity to a LEclaire Isle bakery",
      "Tastes like burnt caramel and regret",
      "Crafted by: Hammer Bros Handling",
      "Requires a pastry charm to activate"
    ],
    "vendor": "hyrule",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 3
  },
  "hyrule_peasley_relic": {
    "id": "hyrule_peasley_relic",
    "name": "Peasley Financial Relic",
    "description": "A cursed artifact tied to the Toadette relief scandal",
    "price": 200,
    "icon": "💰",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Restores 100 confidence when consumed",
      "Grants 10% chance to reveal hidden loot locations",
      "May trigger a minor corruption debuff for 3 turns",
      "Made by: Custodians",
      "Linked to Peasley Financial Scandal and Toadette relief ops"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2
  },
  "hyrule_piranha_post_key": {
    "id": "hyrule_piranha_post_key",
    "name": "Piranha Post Key",
    "description": "A courier’s token for haunted property access",
    "category": "equipment",
    "price": 750,
    "icon": "📦",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Grants temporary access to all haunted properties",
      "Allows the user to deliver mail to Boos offices",
      "Triggers a 1d4 chance of a surprise delivery",
      "May cause minor tremors in the surrounding area",
      "Can be used only once per property visit"
    ],
    "vendor": "hyrule",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1
  },
  "hyrule_pokemon_link_item": {
    "id": "hyrule_pokemon_link_item",
    "name": "Evolution Stone Core",
    "description": "A fragment of a legendary Pokémon evolution stone that unlocks hidden forms",
    "price": 1200,
    "icon": "🐉",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Enables evolution when used with compatible Pokémon",
      "Causes temporary confusion to the user",
      "Requires a team member to be nearby to activate",
      "Made by: Fawfuls Fury",
      "Connects both worlds: Hyrule and Pokémon regions"
    ],
    "vendor": "hyrule",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 3
  },
  "hyrule_rift_scarf": {
    "id": "hyrule_rift_scarf",
    "name": "Rift Scarf of the Fractured Atrium",
    "description": "Woven from threads of reality that slipped through the Atrium’s shattered walls, this scarf stabilizes the wearer’s senses during unstable dimensions. It also grants temporary teleportation to nearby temple entrances.",
    "category": "equipment",
    "price": 3000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stabilizes senses in unstable zones for 5 turns",
      "Grants 1 teleportation to nearest temple entrance",
      "Reduces fatigue by 30%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6
  },
  "hyrule_rift_scepter": {
    "id": "hyrule_rift_scepter",
    "name": "Rift Scepter of the Ancient Guardians",
    "description": "A ceremonial staff that channels the power of forgotten temple guardians. It enhances spellcasting and creates temporary barriers against elemental attacks.",
    "category": "equipment",
    "price": 4500,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Casts a shield that absorbs 30% of incoming damage for 2 turns",
      "Increases spell damage by 25% for 3 turns",
      "Grants temporary invisibility for 1 turn when casting spells"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6
  },
  "hyrule_rogueport_item_name_here": {
    "id": "hyrule_rogueport_item_name_here",
    "name": "Rakasha Rattle",
    "description": "A cursed artifact from the underworld that whispers secrets",
    "price": 1000,
    "icon": "🕯",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Reveals hidden paths in the docks",
      "Triggers random curses on enemies",
      "Causes hallucinations for 30 seconds",
      "Made by: Wario Inc"
    ],
    "vendor": "hyrule",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 3
  },
  "hyrule_shadow_binder": {
    "id": "hyrule_shadow_binder",
    "name": "Shadow Binder Cloak",
    "description": "Woven from the remnants of the Shadow Temple’s cursed energy, this cloak binds enemy shadows to the wearer, slowing their speed and increasing damage taken by 10%. Wears a faint black hue.",
    "category": "equipment",
    "price": 2500,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enemies slowed by 20% when affected by shadows",
      "+10% damage taken converted to shadow energy",
      "10% chance to absorb enemy shadow effects on hit"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_shadow_fey_wisp": {
    "id": "hyrule_shadow_fey_wisp",
    "name": "Feywild Wisp of the Raventree",
    "description": "A fragment of the Feywild’s chaotic essence, this wisp allows the wielder to temporarily shift between dimensions. Use wisely — the veil between realms is thin and unstable.",
    "category": "equipment",
    "price": 6500,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "5-second teleportation to nearest dimension portal",
      "20% chance to dodge attacks during teleport",
      "Grants 10% movement speed bonus in Shadowfell or Feywild"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 8
  },
  "hyrule_shadow_heart": {
    "id": "hyrule_shadow_heart",
    "name": "Shadow Heart Fragment",
    "description": "A relic of the temple’s corrupted core. When worn, it enhances stealth and grants a chance to phase through enemies’ attacks. Perfect for sneaky adventurers in the Fractured Atrium.",
    "category": "equipment",
    "price": 4000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases stealth duration by 25%",
      "10% chance to phase through enemy attacks for 2 seconds",
      "Grants 10% damage reduction from physical strikes"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_shadow_mantle": {
    "id": "hyrule_shadow_mantle",
    "name": "Shadow Mantle of the Temple Guardian",
    "description": "Woven from the shadows that linger within the Temple of the Unbroken. This cloak grants invisibility and enhances your agility, allowing you to evade traps and strike from the shadows.",
    "category": "equipment",
    "price": 2800,
    "icon": "👤",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Grants 20% chance to become invisible for 3 seconds",
      "Increases movement speed by 15% while invisible",
      "Reduces enemy detection range by 10% while wearing"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6
  },
  "hyrule_shadow_metal": {
    "id": "hyrule_shadow_metal",
    "name": "Shadowforged Temple Key",
    "description": "A key forged in the dark heart of the Temple of Shadows. It unlocks hidden passages and reveals secret chambers filled with ancient relics.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases stealth bonus by 20% in shadowy zones",
      "Reveals enemy weaknesses on first attack",
      "Grants 10% chance to trigger hidden event on encounter"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "hyrule_shadow_soul": {
    "id": "hyrule_shadow_soul",
    "name": "Shadow Soul Fragment",
    "description": "A stolen essence from the depths of the Underworld, bound to a sacred relic. Wields dark power, but drains stamina. Only wielded by those who dare to walk the line between light and shadow.",
    "price": 2000,
    "icon": "🌑",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+30% attack damage for 10 seconds",
      "Reduces enemy defense by 20% during use",
      "Costs 50 stamina to activate"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_shadow_temple_heart": {
    "id": "hyrule_shadow_temple_heart",
    "name": "Darkspire Core",
    "description": "A pulsating artifact from the core of a collapsed Shadowfell temple. It grants the wielder dominion over shadows, but at the cost of temporary sanity loss. Must be used with caution.",
    "category": "equipment",
    "price": 6000,
    "icon": "📦",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "+30% damage against Shadowfell enemies",
      "+50% chance to teleport to nearest temple entrance (100m)",
      "-10% max HP while active (safety mechanic: auto-reverts after 30s)"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_shadow_temple_key": {
    "id": "hyrule_shadow_temple_key",
    "name": "Shadow Temple Keyblade",
    "description": "A corrupted keyblade forged from the remnants of the Shadow Temple’s final guardian. When activated, it temporarily transforms the wielder into a silhouette of shadow, allowing them to pass through walls and evade attacks.",
    "category": "equipment",
    "price": 3000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+20% damage in shadow form",
      "+10% evasion chance",
      "+5% damage reduction from dark magic"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "hyrule_shadow_temple_talisman": {
    "id": "hyrule_shadow_temple_talisman",
    "name": "Shadow Temple Talisman",
    "description": "A darkened talisman imbued with the essence of the Shadowfell. Wearing it grants stealth and resistance to light-based attacks. Shines only when the party enters forbidden temple chambers.",
    "category": "equipment",
    "price": 3000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants +20% stealth chance",
      "+10% damage resistance to light-based attacks",
      "Reveals enemy weaknesses on touch"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "hyrule_shadowfell_bone_key": {
    "id": "hyrule_shadowfell_bone_key",
    "name": "Shadowfell Bone Key",
    "description": "A relic forged from the bones of ancient temple guardians, this key opens sealed chambers in the Shadowfell. Its glow pulses with the heartbeat of the land’s forgotten secrets.",
    "category": "equipment",
    "price": 2500,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Opens one sealed Shadowfell chamber for 1 hour",
      "Grants temporary resistance to shadow-based attacks",
      "Increases damage output against undead enemies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_shadowfell_heart": {
    "id": "hyrule_shadowfell_heart",
    "name": "Shadowfell Core Shard",
    "description": "A pulsating crystal from the heart of the Shadowfell, granting temporary resistance to darkness magic. Wielders feel a faint echo of the void’s pulse.",
    "category": "equipment",
    "price": 2800,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants immunity to 1d6 shadow damage for 10 seconds",
      "Increases damage against dark creatures by 15%",
      "Reduces stamina cost of dark magic spells by 20%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_shadowfell_item_name_here": {
    "id": "hyrule_shadowfell_item_name_here",
    "name": "Soul Mirror Shard",
    "description": "A fragment of the Mirror of the Shadowfell that can summon a soul",
    "price": 5000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Can summon a soul from the Shadowfell for 5 seconds",
      "Grants a 50% chance to reflect damage to the attacker",
      "Causes the user to lose 10% HP if soul is not used",
      "Made by: Red Winter"
    ],
    "vendor": "hyrule",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 10
  },
  "hyrule_shadowfell_key": {
    "id": "hyrule_shadowfell_key",
    "name": "Shadowfell Key of the Forgotten Vault",
    "description": "A relic forged in the heart of the Shadowfell, this key unlocks sealed doors and forgotten chambers. Grants a brief window into shadowed truths.",
    "category": "equipment",
    "price": 5200,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Opens one hidden door per encounter",
      "Grants +10% damage to dark-type enemies",
      "Reveals enemy weaknesses with 100% accuracy"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 8
  },
  "hyrule_shadowforged_sword": {
    "id": "hyrule_shadowforged_sword",
    "name": "Shadowforged Blade of the Sundered Temple",
    "description": "A blade forged from the shattered essence of the Temple of the Ancients. It hums with residual magic, cutting through shadows and imbuing its wielder with spectral vision. Perfect for duels in the Feywild’s labyrinthine corridors.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage to shadow-based attacks",
      "Grants temporary invisibility for 3 seconds after each attack",
      "Absorbs 10% of incoming magical damage as bonus HP"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_shadows_edge": {
    "id": "hyrule_shadows_edge",
    "name": "Shadows Edge",
    "description": "A blade forged from the fractured essence of Raventree Manor’s Shadowfell dimension. Its edge glows with spectral light and whispers secrets of the past. Perfect for dueling through illusions and dark corridors.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Slash deals 150% damage to shadow-based enemies",
      "Grants 20% chance to reveal enemy location after strike",
      "Inflicts “Spectral Echo” debuff on enemies, causing them to faintly echo their last move"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_shadowshard_amulet": {
    "id": "hyrule_shadowshard_amulet",
    "name": "Shadowshard Amulet of the Vanishing Veil",
    "description": "A tiny amulet that absorbs shadow magic and transforms it into temporary stealth. Worn by those who dare to walk the edge of reality, it grants the wearer the ability to become invisible in shadow zones.",
    "category": "equipment",
    "price": 2500,
    "icon": "🕳",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 5 seconds of total invisibility in shadowy environments",
      "Increases shadow-based attack speed by 20%",
      "Reduces enemy detection range by 15% while wearing"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_shattered_echo": {
    "id": "hyrule_shattered_echo",
    "name": "Shattered Echo of the Temple",
    "description": "A fractured relic from the ancient temple of the First Guardian. When wielded, it echoes the lost voices of the temple’s guardians and reveals hidden passages. Its power wanes after each use, making it a perilous tool for those who dare to seek forgotten truths.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden paths in temple ruins",
      "Slightly boosts stealth in ancient temple zones",
      "Loses 10% durability per use (max 3 uses)"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_shattered_sword": {
    "id": "hyrule_shattered_sword",
    "name": "Shattered Blade of the Fallen Temple",
    "description": "A relic from the shattered temple of the First Sage, this blade pulses with ancient magic. It strikes with brutal force and can shatter enemy armor. When fully charged, it unleashes a devastating pulse of energy.",
    "category": "equipment",
    "price": 3500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts 150% damage on armored targets",
      "Charges 30 seconds after each hit, then unleashes a pulse blast",
      "+10% damage for each enemy defeated in the same room"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7
  },
  "hyrule_shroud_of_hag": {
    "id": "hyrule_shroud_of_hag",
    "name": "Hag’s Shroud of Silence",
    "description": "Woven from the soul of a defeated Hag, this cloak grants the wearer invisibility in dark or foggy areas. Its presence unnerves enemies, granting a brief period of silence to the battlefield.",
    "category": "equipment",
    "price": 2000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants invisibility in dark or foggy environments",
      "Unnerves enemies, granting 30% chance to miss on next attack",
      "Duration: 15 seconds per use"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_silence_scepter": {
    "id": "hyrule_silence_scepter",
    "name": "Silence Scepter of the Vaulted Choir",
    "description": "A staff that mutes the voices of hostile entities and echoes of the ancient gods. When activated, it silences enemy speech and summons a haunting choir of temple spirits to distract foes.",
    "category": "equipment",
    "price": 4800,
    "icon": "🎵",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "50% chance to silence enemies for 3 turns",
      "+10% critical hit chance on magical attacks",
      "Causes enemy fear aura on success, reducing movement"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7
  },
  "hyrule_skaven_mechanical_glove": {
    "id": "hyrule_skaven_mechanical_glove",
    "name": "Ironclad Guttering Gauntlet",
    "description": "",
    "category": "equipment",
    "price": 3800,
    "icon": "⚙",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases melee attack speed by 20%",
      "Deals 1d4 bonus damage to undead foes",
      "Causes 1d6 temporary paralysis to enemies hit",
      "Can be used as a shield with 10% block chance",
      "Made from recycled Hyrulean temple gears",
      "Crafted by: Skaven"
    ],
    "vendor": "hyrule",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 6
  },
  "hyrule_soul_echo": {
    "id": "hyrule_soul_echo",
    "name": "Soul Echo Pendant",
    "description": "A pendant that resonates with the echoes of fallen heroes. When worn, it boosts morale and restores 5% of HP every 30 seconds. Only those with a noble heart may wear it.",
    "category": "equipment",
    "price": 2500,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores 5% HP every 30 seconds",
      "+10% morale boost to allies in battle",
      "Increases chance to find hidden relics during exploration"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_soul_forged_shield": {
    "id": "hyrule_soul_forged_shield",
    "name": "Soulforged Shield of the Triforce",
    "description": "A relic forged from the heartbeat of the Triforce’s core, this shield absorbs divine strikes and echoes the will of the Hero. Its presence inspires allies to fight with unyielding courage.",
    "category": "equipment",
    "price": 3000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs 100% of divine damage",
      "Grants allies +20% attack power while active",
      "Reduces enemy morale by 20% when shield is active"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7
  },
  "hyrule_soul_shard": {
    "id": "hyrule_soul_shard",
    "name": "Soul Shard of the Crimson Temple",
    "description": "A shard of pure soul energy that pulses with the heartbeat of ancient temples. When used, it heals allies and temporarily grants invisibility to the user.",
    "price": 2500,
    "icon": "💉",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores 300 HP to self or nearby ally",
      "Grants 3 seconds of invisibility upon use",
      "Reduces damage taken by 20% for 10 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_spectral_mechanism": {
    "id": "hyrule_spectral_mechanism",
    "name": "Phantom Gear",
    "description": "A humming artifact forged from the echoes of ancient temple guardians. When activated, it grants the wielder temporary invisibility and a 30% chance to bypass enemy defenses.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility for 10 seconds",
      "30% chance to ignore enemy defense checks",
      "Requires a 2-second activation time"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_spectral_satchel": {
    "id": "hyrule_spectral_satchel",
    "name": "Spectral Satchel",
    "description": "A pouch that stores memories of the lost",
    "category": "equipment",
    "price": 1200,
    "icon": "🧠",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Stores up to 5 memory fragments",
      "Each fragment grants +1 bonus to Perception checks",
      "Can be drained to reveal a forgotten truth",
      "Wears out after 10 uses",
      "Only usable by those who have lost a loved one"
    ],
    "vendor": "hyrule",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 3
  },
  "hyrule_spirit_bolt": {
    "id": "hyrule_spirit_bolt",
    "name": "Rakasha Spirit Bolt",
    "description": "A mystical energy projectile forged from the spirit of the Rakasha. Fires a single, devastating shot that explodes on impact, dealing massive damage to enemies within a 5m radius.",
    "price": 1200,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Deals 500 damage on hit",
      "Explodes on impact",
      "Can be charged for a 1.5x damage burst"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3
  },
  "hyrule_spirit_chime": {
    "id": "hyrule_spirit_chime",
    "name": "Temple Chime of the Lost",
    "description": "A resonant bell from the ruins of the Divine Sanctum. When struck, it emits a sound that reveals hidden paths and reveals enemy positions for 3 seconds.",
    "price": 1200,
    "icon": "🎵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Reveals enemy positions for 3 seconds after activation",
      "Grants temporary invisibility for 2 seconds",
      "Increases speed by 10% for 5 seconds after activation"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 4
  },
  "hyrule_spirit_forged_shield": {
    "id": "hyrule_spirit_forged_shield",
    "name": "Spirit Forged Shield",
    "description": "Carved from the bone of a fallen guardian of the Sacred Grove this shield absorbs divine strikes and reflects damage with a faint glow. It also summons a spectral guardian for 5 seconds when struck.",
    "category": "equipment",
    "price": 3000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reflects 15% of incoming damage as energy",
      "Summons a spectral guardian for 5 seconds on hit",
      "Reduces cooldowns for all defensive spells by 30%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6
  },
  "hyrule_spirit_shroud_cloak": {
    "id": "hyrule_spirit_shroud_cloak",
    "name": "Spirit Shroud Cloak",
    "description": "Woven from the remnants of a fallen guardian’s soul, this cloak grants the wearer invisibility to the living and the dead alike. Perfect for sneaking through temple sanctums or evading the Triforce’s gaze.",
    "category": "equipment",
    "price": 3000,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility to all living and undead foes",
      "Grants +15% dodge chance",
      "Reduces enemy detection radius by 30%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6
  },
  "hyrule_spirit_warden_gear": {
    "id": "hyrule_spirit_warden_gear",
    "name": "Spirit Warden Gear",
    "description": "Worn by ancient guardians of the Temple of the Forgotten, this armor channels the will of the sacred wind. It slows time slightly for the wearer and grants a shield that absorbs magical strikes.",
    "category": "equipment",
    "price": 3500,
    "icon": "🛡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% defense against magical attacks",
      "Grants 30% chance to dodge magical projectiles",
      "Temporarily slows time by 10% during combat"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6
  },
  "hyrule_temple_amber": {
    "id": "hyrule_temple_amber",
    "name": "Amber of the Forgotten Guardian",
    "description": "A crystalline orb infused with the soul of a fallen temple sentinel. Shines brighter when allies are in peril, and casts a shield of light to protect the party during critical moments.",
    "price": 1800,
    "icon": "💫",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Grants 20% damage reduction for 3 turns",
      "Restores 25% of max HP to the nearest ally",
      "Causes enemies to become disoriented for 1 turn if hit by a ranged attack"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_temple_amber_key": {
    "id": "hyrule_temple_amber_key",
    "name": "Temple Amber Key",
    "description": "A key forged from the molten core of an ancient temple, glowing with ancient power. It unlocks doors and traps that others cannot.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Opens locked doors and traps with a 100% success rate",
      "Grants +1 to all stat checks against traps",
      "Triggers “Echo of the Temple” — causes all enemies within 5 squares to be stunned for 1 turn if they are not immune"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_temple_ancient_heart": {
    "id": "hyrule_temple_ancient_heart",
    "name": "Ancient Heart of the Temple Guardian",
    "description": "A pulsating relic buried deep within the Temple of the Ancients. It regenerates health over time and emits a shield when struck, but requires a rare ritual to activate.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regenerates 5% HP per second",
      "Grants 20% shield absorption on hit",
      "Activates ritual: 10 second cooldown to summon a temporary guardian"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "hyrule_temple_ancient_key": {
    "id": "hyrule_temple_ancient_key",
    "name": "Temple Guardian Key",
    "description": "Carved from the heartwood of the Temple of Whispers, this key unlocks the sealed chambers of forgotten temples. Upon use, it grants the user temporary access to sacred zones and reveals hidden enemy weaknesses.",
    "price": 1800,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Unlocks sacred zones with 10% chance to reveal hidden enemy weaknesses",
      "Grants 20% increased chance to find rare loot in guarded areas",
      "Temporarily grants immunity to environmental hazards in temple zones"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_temple_ancient_soul": {
    "id": "hyrule_temple_ancient_soul",
    "name": "Echo of the Temple’s Whisper",
    "description": "A fragment of ancient temple resonance, this item lets you temporarily summon a spectral guardian to aid you in battle. The spirit is bound by time and will vanish after 30 seconds.",
    "price": 4000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summons a 30-second spectral ally with 200 HP and 50% attack speed",
      "Allies with this item gain 25% damage reduction",
      "Consumed after use or after 30 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_temple_blessing_amulet": {
    "id": "hyrule_temple_blessing_amulet",
    "name": "Temple Blessing Amulet",
    "description": "Worn by those who walked the sacred paths of Hyrule’s oldest temples, this amulet grants temporary divine grace. It enhances the wearer’s morale and increases the chance to find hidden treasure.",
    "category": "equipment",
    "price": 4000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+10% chance to find hidden treasure",
      "Increases morale during combat by 20% for 10 seconds",
      "Grants temporary immunity to fear effects"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_temple_blood_of_the_sundered": {
    "id": "hyrule_temple_blood_of_the_sundered",
    "name": "Blood of the Sundered",
    "description": "A relic from the shattered temple of the First Sage. When infused with your blood, it grants temporary invulnerability and grants vision of hidden temple traps. Use wisely — its power is tied to your soul’s purity.",
    "price": 3000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "5 second invulnerability upon activation",
      "Reveals hidden temple traps for 30 seconds",
      "Depletes 10% of your HP when activated"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "hyrule_temple_blood_ritual": {
    "id": "hyrule_temple_blood_ritual",
    "name": "Blood of the Fractured Temple",
    "description": "A vial containing the last drop of blood from a fallen guardian of the Temple of Trials. When consumed, it grants temporary invincibility and reveals the true path forward through the Atrium’s shifting architecture.",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants 100% invincibility for 10 seconds",
      "Reveals the true path through reality rifts",
      "Increases speed by 20% during escape sequences"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "hyrule_temple_bloodstone": {
    "id": "hyrule_temple_bloodstone",
    "name": "Crimson Vessel of the Deep",
    "description": "A glowing obsidian shard rumored to be the last piece of the Temple’s sacrificial altar. Its power can break through barriers of time and space.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants immunity to poison and disease for 3 turns",
      "Increases movement speed by 10% in dark or temple environments",
      "Reduces cooldowns of all magic spells by 20%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_temple_bone_ward": {
    "id": "hyrule_temple_bone_ward",
    "name": "Temple Bone Ward",
    "description": "A ceremonial shield forged from the bones of temple guardians. It absorbs physical damage and emits a faint hum that repels undead. Worn with reverence, it whispers warnings of forgotten horrors.",
    "category": "equipment",
    "price": 3200,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reduces incoming damage by 20%",
      "30% chance to stun undead enemies on hit",
      "Grants +1 to defense when in temple zones"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6
  },
  "hyrule_temple_core": {
    "id": "hyrule_temple_core",
    "name": "Heart of the Atrium",
    "description": "A pulsating core extracted from the unstable heart of the Fractured Atrium. Wields power but drains stamina over time—ideal for heroes who dare to face reality’s fractures.",
    "category": "equipment",
    "price": 3200,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases attack power by 20% during reality instability events",
      "Reduces enemy regeneration by 10% for 2 turns",
      "Grants a 10% chance to ignore terrain barriers in temple areas"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6
  },
  "hyrule_temple_crimson_core": {
    "id": "hyrule_temple_crimson_core",
    "name": "Crimson Core of the Crimson Temple",
    "description": "A pulsating artifact from the heart of the Crimson Temple, glowing with ancient power. When activated, it grants the user a temporary aura of dominance over all foes, but drains their own stamina.",
    "category": "equipment",
    "price": 7500,
    "icon": "💥",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "+20% damage to all enemies",
      "-10% stamina per turn during use",
      "Grants +3 to attack speed and +5 to movement speed"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 8
  },
  "hyrule_temple_echo": {
    "id": "hyrule_temple_echo",
    "name": "Echo of the Ancient Guardian",
    "description": "A crystalline artifact that channels the last breath of a temple guardian. When used, it summons a spectral echo that strikes all enemies in a 5m radius.",
    "price": 7500,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Summons spectral echo for 5 seconds, dealing 200% damage to all enemies in range",
      "Grants +30% damage to all magic attacks for 10 seconds",
      "If enemy HP is below 25%, damage increases by 50%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7
  },
  "hyrule_temple_echo_amulet": {
    "id": "hyrule_temple_echo_amulet",
    "name": "Temple Echo Amulet",
    "description": "A glowing amulet that resonates with the spirits of ancient temples. Worn, it grants the wearer the ability to hear the whispers of the past and detect hidden temple entrances.",
    "category": "equipment",
    "price": 3000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Detects hidden temple entrances within 20 meters",
      "Reveals enemy location if they are in a temple zone",
      "Grants 5% movement speed boost in temple zones"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4
  },
  "hyrule_temple_echo_chime": {
    "id": "hyrule_temple_echo_chime",
    "name": "Temple Echo Chime",
    "description": "A resonant artifact forged from ancient temple bells, it amplifies the user’s voice and reveals hidden paths when spoken to. Perfect for guiding lost heroes through sacred ruins.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Amplifies speech range by 30%",
      "Reveals hidden temple doors when spoken to",
      "Reduces silence duration from enemy spells by 20%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_temple_echo_cloak": {
    "id": "hyrule_temple_echo_cloak",
    "name": "Whispering Cloak of the Oracle",
    "description": "Woven from the voice of ancient guardians, this cloak lets the wearer hear the whispers of the temple’s hidden truths. Perfect for exploring forgotten ruins.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +50% bonus to XP from defeating ancient guardians",
      "Detects hidden traps or puzzles by sound",
      "When worn, the wearer can “speak” with any ancient artifact"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_temple_echo_gear": {
    "id": "hyrule_temple_echo_gear",
    "name": "Echoing Temple Gear",
    "description": "Crafted from the whispering stones of the Great Temple of Twilight, this gear amplifies the wielder’s ability to hear ancient chants and unlock hidden passages. Its resonance fades after 30 seconds.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Amplifies Echoing Chant (100% chance to unlock hidden path)",
      "Passive: Detects Temple Entrances (20m range)",
      "Resonance Fades after 30s"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_temple_echo_ring": {
    "id": "hyrule_temple_echo_ring",
    "name": "Temple Echo Ring",
    "description": "An ancient artifact that echoes the chants of the temple guardians. It grants the user a chance to dodge attacks and summons a temporary shield when struck.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "20% chance to dodge next attack",
      "Summons a temporary 10% damage reduction shield",
      "Grants +10% magic resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_temple_echo_shard": {
    "id": "hyrule_temple_echo_shard",
    "name": "Temple Echo Shard",
    "description": "A fragment of ancient temple resonance that amplifies the wielder’s spirit during battle. When held, it hums with forgotten prayers and grants temporary insight into hidden temple paths.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage against temple enemies",
      "Grants 10% chance to reveal hidden doorways or traps",
      "Reduces enemy resistance to magic by 20% for 5 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "hyrule_temple_echo_sword": {
    "id": "hyrule_temple_echo_sword",
    "name": "Echo of the Temple Blade",
    "description": "A blade forged from the echoes of ancient temples that resonate with the spirits of forgotten guardians. It strikes with divine precision and leaves spectral imprints on enemies.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals 120% damage to enemies within temple ruins",
      "Grants 10% chance to summon a ghostly guardian for 3 turns",
      "Reduces cooldown of all magical attacks by 20%"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_temple_echoes": {
    "id": "hyrule_temple_echoes",
    "name": "Temple Echoes of the Forgotten",
    "description": "When worn, this amulet whispers ancient temple secrets to the wearer. It reveals hidden paths and boosts combat awareness during dungeon raids. Perfect for explorers seeking lost relics.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden dungeon entrances",
      "Boosts combat awareness by 20%",
      "Slightly increases HP regeneration during dungeon fights"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_temple_echoing_crown": {
    "id": "hyrule_temple_echoing_crown",
    "name": "Echoing Crown of the Fallen Sage",
    "description": "Worn by those who once walked the temple’s halls, this crown echoes your will into the wind. It grants powerful buffs during temple raids, and can be used to summon a temporary guardian spirit.",
    "category": "equipment",
    "price": 4000,
    "icon": "🏯",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% damage to temple enemies",
      "Grants temporary guardian spirit (15 second duration)",
      "+10% chance to heal allies after battle"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "hyrule_temple_essence": {
    "id": "hyrule_temple_essence",
    "name": "Ruin’s Whisper",
    "description": "A crystalline shard from the heart of the Temple of the Lost Echoes. When infused with magic, it amplifies all spell damage by 20% and grants a brief memory of the caster’s last battle.",
    "price": 2000,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+20% spell damage",
      "Grants 3-second memory recall on death",
      "Consumes 1 mana point"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  },
  "hyrule_temple_forged_blade": {
    "id": "hyrule_temple_forged_blade",
    "name": "Tempest’s Edge",
    "description": "A blade forged from the shattered heart of an ancient temple guardian. Its edge hums with residual magic, capable of cleaving through shadow and stone alike. Wields the echoes of forgotten rituals.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% damage against Shadowfell enemies",
      "+10% chance to trigger “Temple Echo” – deals bonus damage if enemy is in a temple zone",
      "Immune to poison from temple relics"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "hyrule_temple_fragments": {
    "id": "hyrule_temple_fragments",
    "name": "Echoing Temple Shard",
    "description": "A broken relic from the ancient Temple of the Forgotten, humming with residual magic. Wields the power of forgotten guardians and awakens hidden truths within the wielder.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage to magic attacks",
      "Grants temporary immunity to silence and confusion",
      "Increases critical hit chance by 15% when within 100 range of a temple ruin"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5
  },
  "hyrule_temple_fury_amulet": {
    "id": "hyrule_temple_fury_amulet",
    "name": "Fury of the Temple Guardian",
    "description": "An amulet that channels the wrath of ancient temple defenders. Grants powerful melee boosts and grants temporary stat buffs while in combat.",
    "category": "equipment",
    "price": 2800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increases melee attack speed by 30%",
      "Boosts damage by 25% for 10 seconds per activation",
      "Grants 100% armor for 3 turns after critical hit"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6
  },
  "hyrule_temple_heart": {
    "id": "hyrule_temple_heart",
    "name": "Temple Heart of the Unbroken",
    "description": "A pulsing artifact from the inner sanctum, it grants the wearer temporary invulnerability during combat. It also heals 10% of max HP every 10 seconds while active.",
    "category": "equipment",
    "price": 4200,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants 30 seconds of invulnerability after 2 consecutive hits",
      "Heals 10% of max HP every 10 seconds while active",
      "Increases stamina regeneration by 20% during active use"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6
  },
  "hyrule_temple_heart_brooch": {
    "id": "hyrule_temple_heart_brooch",
    "name": "Brooch of the Temple Heart",
    "description": "A relic from the core of the Temple of the Unbroken, this brooch pulses with the energy of ancient guardians. It grants a temporary shield and restores vitality after combat.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% defense against magical attacks",
      "Restores 150 HP after 2 seconds of inactivity",
      "Grants 50% chance to avoid being stunned by enemy abilities"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_temple_heart_core": {
    "id": "hyrule_temple_heart_core",
    "name": "Heart Core of the First Temple",
    "description": "A relic from the crumbling Temple of Time, this artifact pulses with the essence of ancient guardians. It allows the wielder to temporarily summon a spectral guardian during combat.",
    "category": "equipment",
    "price": 4800,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summons 1 spectral guardian for 10 seconds",
      "Guardian deals 200% damage to enemies",
      "Reduces enemy damage taken by 15% while active"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7
  },
  "hyrule_temple_heart_gem": {
    "id": "hyrule_temple_heart_gem",
    "name": "Heart of the Temple Gem",
    "description": "A pulsating crystal born from the core of an ancient temple’s sanctum. When worn, it enhances your healing and grants temporary vision of hidden temple paths.",
    "price": 2500,
    "icon": "💎",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores 50% HP on use",
      "Grants 30-second vision of hidden paths",
      "Increases critical hit chance by 10% for 10 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "hyrule_temple_heart_ore": {
    "id": "hyrule_temple_heart_ore",
    "name": "Temple Heart Ore",
    "description": "A glowing mineral extracted from the core of the Sacred Temple. When consumed, it restores stamina and grants temporary vision of hidden traps.",
    "price": 1200,
    "icon": "💊",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores 20% stamina",
      "Grants 10 seconds of trap detection",
      "Increases damage taken by 5% if in darkness"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4
  },
  "hyrule_temple_heart_pendant": {
    "id": "hyrule_temple_heart_pendant",
    "name": "Heart of the Atronian Vault",
    "description": "Worn by those who dare to enter the Temple of Shadows. Absorbs negative energy and amplifies courage. Resonates with the temple’s ancient guardians when near sacred ruins.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +20% damage against dark creatures",
      "Increases defense by 15% when near ancient ruins",
      "Activates “Guardian Echo” when within 10 meters of temple structures"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "hyrule_temple_heart_pulse": {
    "id": "hyrule_temple_heart_pulse",
    "name": "Heart Pulse of the Temple",
    "description": "A pulsing artifact forged from the core of the Temple of Echoes. When activated, it heals nearby allies for 30% of max HP and grants a 10-second burst of speed to the user.",
    "price": 2000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Heals 30% of max HP to one ally within 5 meters",
      "Grants 10-second burst speed to user",
      "Increases movement speed of allies within 3 meters by 20% for 5 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5
  }
};
