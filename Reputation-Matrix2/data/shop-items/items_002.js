// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_002 = {
  "a_relic_that_amplifies_your": {
    "id": "a_relic_that_amplifies_your",
    "name": "Echo Talisman",
    "description": "A relic that amplifies your voice during elemental reactions",
    "price": 4500,
    "icon": "🎵",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Boosts elemental reaction damage by 30% during vocal chants",
      "Allows 10% chance to trigger echo effect after casting",
      "Voice must be clear and emotionally charged to activate",
      "Can only be used once per battle",
      "Requires attunement with a vision holder",
      "Crafted by: Iron Legion"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 7
  },
  "a_ring_that_grants_wishes": {
    "id": "a_ring_that_grants_wishes",
    "name": "Wario's Wish Granting Ring",
    "description": "A ring that 'grants wishes' (placebo luck).",
    "category": "equipment",
    "price": 4900,
    "icon": "💍",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 luck roll once/day",
      "Ring tight: disadvantage on remove",
      "Wario: +1 Deception wishes",
      "Made by: Wario Rings"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wish Whisper",
    "levelRequirement": 4
  },
  "a_ring_that_pulses_with": {
    "id": "a_ring_that_pulses_with",
    "name": "Doughnut Edge Ring",
    "description": "A ring that pulses with unstable dimensional energy",
    "price": 15000,
    "icon": "🍩",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Grants 100% dodge chance against falling hazards",
      "Triggers “Doughnut Rift” when used — causes 1d6 damage and a random effect",
      "Requires attunement by a wizard or Wario",
      "Shipped by: Piranha Plant Post (special delivery)",
      "Connects: Almost at the Edge — allows passage through the Doughnut Edge",
      "Only usable once per session, no refills"
    ],
    "vendor": "wario_land",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 9
  },
  "a_robe_with_pockets_inside": {
    "id": "a_robe_with_pockets_inside",
    "name": "Mages' Guild Robe of Many Pockets",
    "description": "A robe with pockets inside pockets.",
    "category": "equipment",
    "price": 21500,
    "icon": "🥼",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "20 pockets: each can hold 1 lb, but you forget which pocket holds what",
      "Once per day: Pull out a random minor item (DM's choice, 50% chance it's what you wanted)",
      "Robe is dry-clean only; washing it ruins the dimensional magic",
      "Made by: Mages' Guild Seamsters"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 7
  },
  "a_rope_for_lassoing_foes": {
    "id": "a_rope_for_lassoing_foes",
    "name": "Wario's Wild West Lasso",
    "description": "A rope for 'lassoing' foes.",
    "category": "equipment",
    "price": 4900,
    "icon": "🪢",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Lasso grapple: advantage on range",
      "Rope frays: disadvantage on pull",
      "Western: +1 Animal Handling",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lasso Loop",
    "levelRequirement": 4
  },
  "a_saddle_for_wild_rides": {
    "id": "a_saddle_for_wild_rides",
    "name": "Wario's Wild West Saddle",
    "description": "A saddle for 'wild' rides.",
    "category": "equipment",
    "price": 5000,
    "icon": "🐎",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "+1 mounted speed",
      "Saddle creaks: disadvantage on quiet rides",
      "Western: +1 Animal Handling",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Saddle Sprint",
    "levelRequirement": 4
  },
  "a_scroll_claiming_to_be": {
    "id": "a_scroll_claiming_to_be",
    "name": "Peach's 'Last' Decree (Autographed by Wario)",
    "description": "A scroll claiming to be Princess Peach's final command. Wario's signature is bigger than hers.",
    "category": "equipment",
    "price": 5500,
    "icon": "📜",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Present to Mushroom Kingdom loyalists: advantage on Charisma checks (they want to believe)",
      "Scroll is clearly fake: disadvantage on checks with anyone who knew Peach",
      "Decree grants you 'Duchy of the Bathroom': advantage on Persuasion with plumbers",
      "Wario's autograph glows in the dark (cosmetic, but unsettling)",
      "Made by: Wario Land Historical Forgery Dept."
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 5
  },
  "a_scroll_that_holds_your": {
    "id": "a_scroll_that_holds_your",
    "name": "Mages' Guild Recipe Holder Scroll",
    "description": "A scroll that holds your recipes and reads them aloud.",
    "category": "equipment",
    "price": 10500,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Holds 10 recipes: reads them aloud (advantage on cooking checks)",
      "Scroll is dramatic: reads in a booming voice (disadvantage on Stealth)",
      "It corrects your mistakes: advantage on checks, but it lectures you",
      "Made by: Mages' Guild Scribes"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 5
  },
  "a_service_where_the_guild": {
    "id": "a_service_where_the_guild",
    "name": "Mages' Guild Spell Tome Copy",
    "description": "A service where the guild scribes a copy of a spell from their vast library into your spellbook.",
    "category": "services",
    "price": 5000,
    "icon": "📖",
    "stock": 999,
    "rarity": "uncommon",
    "effects": [
      "Add one spell of 1st or 2nd level from any class list to your spellbook",
      "Spell must be provided by the guild (subject to availability)",
      "Takes 24 hours to transcribe"
    ],
    "vendor": "Mages Guild",
    "shippedBy": "Courier Scribe",
    "levelRequirement": 3
  },
  "a_shard_of_fractured_reality_1": {
    "id": "a_shard_of_fractured_reality_1",
    "name": "Echo of the Void",
    "description": "A shard of fractured reality that whispers the names of the dead. When wielded, it grants temporary necromantic resonance and allows the user to command spectral echoes for short bursts of damage. Best used in shadowed corners of the Atrium’s depths.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necromantic Resonance: +20% damage to undead minions",
      "Echo of the Dead: Casts a spectral whisper that deals 50% of user’s max HP as damage (once per 3 turns)",
      "Shadow Steal: Grants 5% chance to steal 10% of target’s current HP as bonus damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "a_sheriff_badge_for_lawmen": {
    "id": "a_sheriff_badge_for_lawmen",
    "name": "Wario's Wild West Badge",
    "description": "A sheriff badge for 'lawmen'.",
    "category": "equipment",
    "price": 4600,
    "icon": "⭐",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "+1 Intimidation as 'sheriff'",
      "Badge tarnishes: disadvantage on shine",
      "Western: +1 Persuasion in towns",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sheriff Ship",
    "levelRequirement": 4
  },
  "a_shiny_plastic_card_it": {
    "id": "a_shiny_plastic_card_it",
    "name": "Wario's Gold Membership",
    "description": "A shiny plastic card. It does absolutely nothing but prove you spent all your money.",
    "category": "premium",
    "price": 250000,
    "icon": "💳",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Drains your entire XP pool",
      "Unlocks a special dialogue option with Wario",
      "You get a sticker",
      "No refunds"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Gold Plated Envelope",
    "levelRequirement": 1
  },
  "a_shiny_wand_that_beeps": {
    "id": "a_shiny_wand_that_beeps",
    "name": "Wario's Gold Detector Wand (Scam Alert!)",
    "description": "A shiny wand that beeps near treasure... or just shiny rocks. Wario swears by it!",
    "category": "equipment",
    "price": 12000,
    "icon": "🪄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Beeps near gold (or fool's gold): advantage on Investigation for treasures, but 50% chance it points to worthless dirt",
      "Wand vibrates excitedly: +1 to Intimidation when waving it (Wario-style greed)",
      "Backfires: 20% chance it explodes in a cloud of fake gold dust (blinded for 1 round, DC 10 CON save)",
      "Made by: Wario's Shady Workshop"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warios Wacky Wagon",
    "levelRequirement": 5
  },
  "a_silk_handkerchief_said_to": {
    "id": "a_silk_handkerchief_said_to",
    "name": "Peach's Ghostly Handkerchief",
    "description": "A silk handkerchief said to be haunted by the princess's spirit.",
    "category": "equipment",
    "price": 5700,
    "icon": "🧣",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Wave handkerchief: calm one ally (remove frightened, once per day)",
      "Haunted: whispers Peach's last words (advantage on Insight for royal secrets)",
      "Spirit is sad: disadvantage on Charisma with ghosts",
      "Handkerchief fades: loses effect after 5 uses",
      "Made by: Royal Wardrobe (Spectral Souvenir)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ethereal Express",
    "levelRequirement": 6
  },
  "a_single_glove_from_the": {
    "id": "a_single_glove_from_the",
    "name": "Peach's Garden Glove",
    "description": "A single glove from the princess's private garden, stained with war soil.",
    "category": "equipment",
    "price": 4700,
    "icon": "🧤",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Wear glove: advantage on Nature checks for plants (Peach's touch)",
      "Glove is sentimental: disadvantage on Charisma with gardeners (they weep)",
      "Grows flowers: minor illusion of blooms (distraction aid)",
      "May wilt in battle: loses effect after combat",
      "Made by: Royal Gardens (Last Relic)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Floral Freight",
    "levelRequirement": 4
  },
  "a_single_page_from_a": {
    "id": "a_single_page_from_a",
    "name": "Mages' Guild Spellbook Page",
    "description": "A single page from a master mage's spellbook containing one cantrip.",
    "category": "curiosities",
    "price": 6500,
    "icon": "📄",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Contains one random cantrip (DM's choice)",
      "Can be copied into your spellbook normally",
      "Made by: Mages' Guild"
    ],
    "vendor": "mages_guild_hall",
    "shippedBy": "Sealed Scroll",
    "levelRequirement": 4
  },
  "a_spray_bottle_of_concentrated": {
    "id": "a_spray_bottle_of_concentrated",
    "name": "Wario's Garlic Breath Enhancer",
    "description": "A spray bottle of concentrated garlic extract. 'Guaranteed to make an impression!'",
    "category": "equipment",
    "price": 12500,
    "icon": "🧄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "As a bonus action, spray to gain a 5ft poison breath attack (1d4 poison damage, CON save DC 12)",
      "Disadvantage on all Charisma checks for 1 hour (repulsive breath)",
      "Vampires and blood-sucking creatures must succeed DC 15 Wisdom save or flee for 1 round",
      "Comes with a 'free' sample of Wario's Breath Mints (they're just more garlic)",
      "Made by: Wario Land Pharmaceuticals (Not FDA Approved)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud (Express)",
    "levelRequirement": 5
  },
  "a_sturdy_string_blessed_by_1": {
    "id": "a_sturdy_string_blessed_by_1",
    "name": "Gondor Ranger's Enchanted Bowstring",
    "description": "A sturdy string blessed by the White Tree, enhancing accuracy in the wilds.",
    "category": "equipment",
    "price": 14500,
    "icon": "🏹",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Attaches to any longbow: +1 to attack rolls when targeting from cover",
      "Ignores half cover for ranged attacks",
      "Vibrates to warn of approaching foes (passive Perception +2 in forests)",
      "Frays after 50 shots – requires mending with ranger's thread"
    ],
    "vendor": "kingdom_gondor",
    "shippedBy": "Beacon Runner",
    "levelRequirement": 5
  },
  "a_sword_forged_from_reclaimed_1": {
    "id": "a_sword_forged_from_reclaimed_1",
    "name": "Ironclad Blade of the Forge",
    "description": "A sword forged from reclaimed industrial steel and enchanted with the wrath of the Iron Legion. Its edge glows with residual power from the last great smelting furnace. Perfect for cutting through armored foes and breaking chains of tyranny.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% damage against armored enemies",
      "+15% critical strike chance",
      "Grants a +500 HP bonus to wielder when struck by a heavy weapon"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "a_ticket_to_wario_s": {
    "id": "a_ticket_to_wario_s",
    "name": "Wario's Wonderland Ticket",
    "description": "A ticket to 'Wario's Wonderland' (his backyard).",
    "category": "services",
    "price": 4000,
    "icon": "🎫",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Redeem for a 'tour': find 1d20 gp in trash (Wario's 'treasure')",
      "Ticket expires: disadvantage if not used soon",
      "Wario guides: +1 Deception with him",
      "Made by: Wario Attractions"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wonder Walk",
    "levelRequirement": 4
  },
  "a_tiny_metallic_key_that": {
    "id": "a_tiny_metallic_key_that",
    "name": "Shadowfell Keychain",
    "description": "A tiny metallic key that opens the veil between the physical world and the Shadowfell. Carved with the sigils of Onyx Hand vampires, it allows the wearer to slip into the eternal night—though each use drains a sliver of their sanity. It is said to have been forged by a fallen priestess who traded her soul for a single key to the Shadowfell’s heart.",
    "category": "equipment",
    "price": 7000,
    "icon": "🔒",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants access to the Shadowfell for 1 round per use",
      "+3 to stealth checks in dark environments",
      "5% chance to trigger a soul drain (temporary damage)",
      "10% chance to trigger a mental infection (viral, affects allies)",
      "Can be worn by any class",
      "Requires attunement by a vampire or shadowborn",
      "Crafted by: Kremling Smuggle Run"
    ],
    "vendor": "the_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 8
  },
  "a_token_of_bureaucratic_chaos": {
    "id": "a_token_of_bureaucratic_chaos",
    "name": "Gehenna Academy Keychain",
    "description": "A token of bureaucratic chaos and academic pride",
    "price": 300,
    "icon": "📜",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Grants temporary immunity to administrative penalties",
      "Increases the chance of finding hidden dorm keys in any room",
      "Triggers a random bureaucratic event after each use",
      "Causes minor mental stress to non-student users",
      "Restores 10% of HP per use (if worn as an item)",
      "Crafted by: Skaven"
    ],
    "vendor": "kivotos",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1
  },
  "a_tooth_from_the_koopa_1": {
    "id": "a_tooth_from_the_koopa_1",
    "name": "Bowser's Fang Amulet",
    "description": "A tooth from the Koopa King's fallen forces, strung as a necklace.",
    "category": "equipment",
    "price": 5200,
    "icon": "🦷",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Wear amulet: advantage on Intimidation checks with Koopa Troop remnants",
      "Once per day: Bite attack deals +1d6 piercing (fang power)",
      "Amulet is unstable: 20% chance it causes a minor quake (difficult terrain in 5ft)",
      "Bowser loyalists hunt you: random encounters with Koopas",
      "Made by: Battlefield Dentist (Wario's Souvenirs)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fang-Filled Freight",
    "levelRequirement": 5
  },
  "a_toothpick_so_fancy_you": {
    "id": "a_toothpick_so_fancy_you",
    "name": "Wario's Gold-Plated Toothpick",
    "description": "A toothpick so fancy you could use it as a lockpick (but shouldn't).",
    "category": "equipment",
    "price": 9500,
    "icon": "🦷",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Can be used as a lockpick with advantage (it's gold-plated, lock thinks you're fancy)",
      "After each use, you must clean it with your mouth: restore 1 HP but disadvantage on Charisma for 10 minutes (garlic breath)",
      "Toothpick is so ostentatious that wealthy NPCs notice you: advantage on Charisma checks with them",
      "5% chance it snaps in the lock: lock becomes jammed, disadvantage on future checks with that lock",
      "Made by: Wario Land Dental (Not a Real Dentist)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Gold-Plated Envelope",
    "levelRequirement": 5
  },
  "a_treasure_map_that_wario": {
    "id": "a_treasure_map_that_wario",
    "name": "Wario's 'Totally Legit' Treasure Map",
    "description": "A treasure map that Wario 'found' (definitely didn't draw himself).",
    "category": "equipment",
    "price": 16500,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Map leads to a random location (DM chooses): 50% chance of treasure, 50% chance of a trap",
      "If it's a trap, it's a Wario-style trap: inconvenient but not lethal (gold stolen by Wario)",
      "If treasure exists, it's 2d100 gp but Wario's face is on every coin (cosmetic but embarrassing)",
      "Map is drawn in crayon: advantage on checks to spot it's fake, but you want to believe",
      "Made by: Wario Land Cartography (Est. Yesterday)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 5
  },
  "a_volatile_device_designed_for": {
    "id": "a_volatile_device_designed_for",
    "name": "Ink Jam Bomb",
    "description": "A volatile device designed for chaotic disruption",
    "price": 1200,
    "icon": "💣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Explodes on impact with 3d4 damage",
      "Triggers ink-jamming effect on adjacent enemies",
      "Causes temporary vision distortion for 1 round",
      "Can be thrown or dropped by non-crafters",
      "Has 50% chance to trigger Koopa Navy ambush on hit",
      "Shipped by: Cheep Cheep Shipping"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 4
  },
  "a_wallet_that_holds_your": {
    "id": "a_wallet_that_holds_your",
    "name": "Wario's Wafting Wallet",
    "description": "A wallet that 'holds' your gold... loosely.",
    "category": "equipment",
    "price": 5400,
    "icon": "💰",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Holds up to 500 gp without weight, but 10% chance per day it 'wafts' away 1d10 gp",
      "Wallet smells like garlic: advantage on Intimidation with thieves (they think it's cursed)",
      "Wario's face on the front: disadvantage on Persuasion with honest folk",
      "Made by: Wario Land Banking (Unsecured)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Loose Change Limo",
    "levelRequirement": 5
  },
  "a_wallet_that_never_empties": {
    "id": "a_wallet_that_never_empties",
    "name": "Wario's Bottomless Wallet (Total Scam!)",
    "description": "A wallet that 'never empties' – Wario's best con yet!",
    "category": "equipment",
    "price": 20000,
    "icon": "💼",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Holds gold: Looks full (advantage on Deception for wealth)",
      "Scam reveal: Wallet is a fake – coins are painted rocks (lose all 'gold' when inspected)",
      "Trap: Springs shut on thieves (DC 13 DEX save or trapped hand, 1d4 damage/turn)",
      "Made by: Wario's Scam Supreme"
    ],
    "vendor": "wario_land",
    "shippedBy": "Empty Envelope",
    "levelRequirement": 6
  },
  "a_wand_of_wonders_mostly": {
    "id": "a_wand_of_wonders_mostly",
    "name": "Wario's Wonder Wand",
    "description": "A wand of 'wonders' (mostly tricks).",
    "category": "equipment",
    "price": 5400,
    "icon": "🪄",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Cast Minor Illusion (garlic-themed) once/day",
      "Wand farts sparks: disadvantage on social",
      "Wonder fans: +1 Deception",
      "Made by: Wario Wonders"
    ],
    "vendor": "wario_land",
    "shippedBy": "Trick Treat",
    "levelRequirement": 5
  },
  "a_wand_that_casts_wario": {
    "id": "a_wand_that_casts_wario",
    "name": "Wario's  Wand",
    "description": "A wand that casts 'Wario magic' (mostly garlic spells).",
    "category": "equipment",
    "price": 5600,
    "icon": "🪄",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Cast Minor Illusion of garlic once per day (DC 12)",
      "Wand backfires 20%: you smell like garlic (disadvantage on social)",
      "Wario fans enchanted: advantage on Intimidation",
      "Made by: Wario Wizardry"
    ],
    "vendor": "wario_land",
    "shippedBy": "Magic Mist Mail",
    "levelRequirement": 5
  },
  "a_wand_that_makes_wa": {
    "id": "a_wand_that_makes_wa",
    "name": "Wario's Wa-Wa Wand (Gimmick Toy!)",
    "description": "A wand that makes 'wa-wa' sounds – Wario's idea of magic!",
    "category": "equipment",
    "price": 8000,
    "icon": "🪄",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Wave wand: Makes distracting 'wa-wa' noise (advantage on Deception or Performance for distractions)",
      "Once per day: Minor illusion of Wario laughing (frightens weak foes, DC 10 Wis save)",
      "Scam element: Wand runs out of 'magic' after 5 uses (needs Wario's recharge – unavailable)",
      "Made by: Wario's Toy Factory"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wa-Wa Wagon",
    "levelRequirement": 5
  },
  "a_watch_that_tells_time": {
    "id": "a_watch_that_tells_time",
    "name": "Wario's  Watch",
    "description": "A watch that tells time... Wario time.",
    "category": "equipment",
    "price": 4400,
    "icon": "⌚",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Always shows the correct time: advantage on Initiative (you know when to act)",
      "Watch beeps every hour: disadvantage on Stealth during beeps",
      "Wario's face on the dial: advantage on Intimidation with watch collectors",
      "Made by: Wario Timepieces (Slow Delivery)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Tick-Tock Truck",
    "levelRequirement": 4
  },
  "a_weapon_forged_from_condensed_16": {
    "id": "a_weapon_forged_from_condensed_16",
    "name": "Crystal Blade",
    "description": "A weapon forged from condensed magic, its blade shimmers with arcane energy that pulses in time with the wielder’s heartbeat. Only spellcasters who have attuned to the arcane can channel its power, as it reacts to the rhythm of their inner storms. When swung, it leaves a trail of frost and fire in its wake, making it both a devastating strike and a dangerous distraction.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deals 2d6 bonus arcane damage",
      "15% chance to trigger wild magic surge",
      "Requires attunement by a spellcaster",
      "Crafted by: Peach Loyalists",
      "Each use consumes 1 charge of arcane resonance",
      "After 3 uses, blade temporarily glows red and deals 1 extra damage to enemies with elemental resistance"
    ],
    "vendor": "teyvat",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 5
  },
  "a_weaponized_chainsaw_from_the_1": {
    "id": "a_weaponized_chainsaw_from_the_1",
    "name": "Chain Chomp Tether",
    "description": "A weaponized chainsaw from the void’s most brutal creatures",
    "category": "equipment",
    "price": 8000,
    "icon": "🔪",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Deals 3d8 slashing damage on hit",
      "25% chance to trigger a chainsaw burst that deals 2d6 damage to all adjacent enemies",
      "Requires attunement by a Chain Chomp operator",
      "When activated, temporarily grants +2 to all melee rolls for 3 rounds",
      "May cause the user to become temporarily magnetized to void matter",
      "Crafted by: Team Rocket",
      "Only usable in the presence of a Chain Chomp entity"
    ],
    "vendor": "the_edge",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 10
  },
  "a_wrench_for_fixing_or": {
    "id": "a_wrench_for_fixing_or",
    "name": "Wario's  Wrench",
    "description": "A wrench for fixing (or breaking) things.",
    "category": "equipment",
    "price": 5000,
    "icon": "🔧",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Repair tools: advantage on Tinker checks",
      "Wrench slips: 10% chance 1 damage to you",
      "Mechanics: +1 Charisma with inventors",
      "Made by: Wario Tools"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fix-It Freight",
    "levelRequirement": 4
  },
  "aboleth_mindscape_sanitizer": {
    "id": "aboleth_mindscape_sanitizer",
    "name": "Aboleth Mindscape Sanitization",
    "description": "A psionic cleansing service to remove unwanted memories.",
    "price": 295000,
    "icon": "🧠",
    "stock": 7,
    "rarity": "epic",
    "effects": [
      "Remove one traumatic memory or mind-affecting curse",
      "Gain immunity to that specific effect for 1 year",
      "Made by: Illithid Sanitation Crew"
    ],
    "vendor": "mind_cleaners",
    "shippedBy": "Telepathic Link",
    "levelRequirement": 13
  },
  "absolute_defense_shield": {
    "id": "absolute_defense_shield",
    "name": "Absolute Defense Shield",
    "description": "A shield that cannot be bypassed by any means.",
    "price": 60000000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Cannot be damaged, cannot be targeted, cannot be ignored",
      "User is immune to all damage, effects, and narrative consequences",
      "Made by: The Unbreakable Wall"
    ],
    "vendor": "impregnable_fortress",
    "shippedBy": "Immovable Object",
    "levelRequirement": 95
  },
  "absolute_zero_frozen_core": {
    "id": "absolute_zero_frozen_core",
    "name": "Absolute Zero Frozen Core",
    "description": "A sphere of frozen time that stops everything.",
    "category": "consumables",
    "price": 65000000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Freeze time permanently in a 1-mile radius (everything stops except you)",
      "You can move frozen objects but they unfreeze when you leave the radius",
      "Made by: The Ice That Never Thaws"
    ],
    "vendor": "frozen_eternity",
    "shippedBy": "Stasis Field",
    "levelRequirement": 95
  },
  "abydos_high_school_bento_box_set": {
    "id": "abydos_high_school_bento_box_set",
    "name": "Abydos High School Bento Box Set ",
    "description": "Compartmented boxes for lunch prep.",
    "category": "equipment",
    "price": 6000,
    "icon": "🍱",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Organizes bento; +1 to Intelligence for school recipes",
      "Seals tight for travel",
      "Bell-shaped timer",
      "Made by: School Crafters"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Bento Bell Bundle",
    "levelRequirement": 5
  },
  "abydos_high_school_blazer": {
    "id": "abydos_high_school_blazer",
    "name": "Abydos High School Blazer ",
    "description": "School blazer for youthful adventures.",
    "price": 11500,
    "icon": "👔",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+1 to Intelligence (Education) checks",
      "Blazer inspires study (advantage on lore)",
      "Uniform code violations possible",
      "Made by: High School Tailors"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Buttoned Badge",
    "levelRequirement": 5
  },
  "abydos_high_school_lunch_bento_recipe": {
    "id": "abydos_high_school_lunch_bento_recipe",
    "name": "Recipe: Abydos High School Lunch Bento ",
    "description": "Balanced bento for student stamina.",
    "price": 6000,
    "icon": "🍱",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Pack neatly (15 min); eat to gain +1 to Intelligence checks during 'class' (study time)",
      "Requires: Rice and veggies; school standard",
      "Bell rings for lunch",
      "Made by: School Cafeteria"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Bento Box Brief",
    "levelRequirement": 5
  },
  "abydos_high_school_uniform_premium": {
    "id": "abydos_high_school_uniform_premium",
    "name": "Abydos High School Uniform ",
    "description": "Look studious for discounts.",
    "price": 11500,
    "icon": "👔",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Wear: +1 Persuasion with scholars",
      "Advantage on History checks",
      "Uniform wrinkles easily",
      "Made by: School Tailors"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Locker Delivery",
    "levelRequirement": 5
  },
  "abydos_high_spirit_duel_practice": {
    "id": "abydos_high_spirit_duel_practice",
    "name": "Abydos High Spirit Duel Practice (Again)",
    "description": "Duel another ghost.",
    "category": "services",
    "price": 12500,
    "icon": "👻",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Duel a different spirit; win: gain +1 to attack rolls for 24 hours",
      "Lose: Spirit haunts you (disadvantage on checks)",
      "Draw: Spirit becomes your friend (advantage on one check per day)",
      "Made by: Abydos High Duel Club"
    ],
    "vendor": "abydos_high",
    "shippedBy": "Spirit Summons",
    "levelRequirement": 5
  },
  "abyssal_court_deep_abyss_soup_recipe": {
    "id": "abyssal_court_deep_abyss_soup_recipe",
    "name": "Recipe: Abyssal Court Deep Abyss Soup",
    "description": "Inky soup from abyssal depths for pressure tolerance.",
    "price": 8500,
    "icon": "🍲",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Simmer deep-sea items (50 min); eat to gain water breathing and resistance to pressure/cold for 2 hours",
      "Requires: Inkfish; squidgy",
      "Abyss dwellers respect it",
      "Made by: Court Chefs"
    ],
    "vendor": "abyssal_court_depths",
    "shippedBy": "Inky Immersion Instructions",
    "levelRequirement": 6
  },
  "abyssal_court_deep_sea_trench_coat": {
    "id": "abyssal_court_deep_sea_trench_coat",
    "name": "Abyssal Court Deep Sea Trench Coat",
    "description": "Waterproof coat for abyssal depths.",
    "category": "equipment",
    "price": 20500,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Constitution saves underwater",
      "Coat provides water breathing (1 hour/day)",
      "Drips constantly on land",
      "Made by: Abyssal Seamstresses"
    ],
    "vendor": "abyssal_court_abyss",
    "shippedBy": "Ink-Dyed Fold",
    "levelRequirement": 7
  },
  "abyssal_court_ink_dipper": {
    "id": "abyssal_court_ink_dipper",
    "name": "Abyssal Court Ink Dipper",
    "description": "Dipper for abyssal soup broth.",
    "category": "equipment",
    "price": 7000,
    "icon": "🍲",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Dips without spilling; +1 to Dexterity for deep recipes",
      "Ink-resistant; adds depth flavor",
      "Dipper squirts ink",
      "Made by: Abyssal Potters"
    ],
    "vendor": "abyssal_court_depths",
    "shippedBy": "Deep Dip Delivery",
    "levelRequirement": 5
  },
  "abyssal_court_tentacle_whip_premium": {
    "id": "abyssal_court_tentacle_whip_premium",
    "name": "Abyssal Court Tentacle Whip (Premium)",
    "description": "Reach out and grab.",
    "price": 19500,
    "icon": "🐙",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whip: 10ft reach, grapple on hit (STR save DC 12)",
      "Pull 5ft on success",
      "Slime: Disadvantage on escape",
      "Made by: Abyssal Lashers"
    ],
    "vendor": "abyssal_court_depths",
    "shippedBy": "Ink-Dipped Rope",
    "levelRequirement": 7
  },
  "abyssal_layer_claim": {
    "id": "abyssal_layer_claim",
    "name": "Abyssal Layer Claim (Unoccupied)",
    "description": "A deed to a minor layer of the Abyss.",
    "price": 1850000,
    "icon": "👹",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Own a 10-mile radius layer of the Abyss",
      "Attracts demons but grants authority over them",
      "Made by: Demogorgon's Realtor"
    ],
    "vendor": "abyssal_titles",
    "shippedBy": "Demonic Invasion",
    "levelRequirement": 20,
    "factionBonus": {
      "chaos": 300
    }
  },
  "abyssal_shadow_cloak": {
    "id": "abyssal_shadow_cloak",
    "name": "Abyssal Shadow Cloak (Enchanted)",
    "description": "A cloak woven from the essence of the Abyss, granting unparalleled stealth in darkness.",
    "price": 720000,
    "icon": "🕶️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Invisibility in shadows for 1 hour per charge",
      "Resists detection by scrying magic",
      "Made by: Abyssal Weavers"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Shadow Portal",
    "levelRequirement": 17
  },
  "accordion_of_autumn": {
    "id": "accordion_of_autumn",
    "name": "Accordion of Autumn",
    "description": "A squeezebox that brings fall wherever it plays; leaves swirl and hearts feel nostalgic.",
    "category": "curiosities",
    "price": 8000,
    "icon": "🪗",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Play: 20ft radius of swirling leaves grants +1 Stealth to those within",
      "Once per day: entropic hum calms hostiles for 1 round (DC 12 Wis)",
      "Polka may induce dizziness"
    ],
    "vendor": "wandering_vend",
    "shippedBy": "Cloth Bag",
    "levelRequirement": 2
  },
  "aetherial_phoenix_down": {
    "id": "aetherial_phoenix_down",
    "name": "Aetherial Phoenix Down (Single Use)",
    "description": "A crystallized phoenix feather that burns away fatal outcomes.",
    "price": 425000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Automatically resurrects user 24 hours after death with no level loss",
      "Destroys all non-soulbound equipment in the process",
      "Made by: Pyres of Elysium"
    ],
    "vendor": "phoenix_roost",
    "shippedBy": "Divine Courier",
    "levelRequirement": 15
  },
  "african_union_mask_dance_lesson_premium": {
    "id": "african_union_mask_dance_lesson_premium",
    "name": "African Union Mask Dance Lesson (Premium)",
    "description": "Ritual dance for spirits.",
    "price": 17000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Dance: Charm spirits (DC 13 Wis)",
      "+2 Performance",
      "Dance tires you (short rest needed)",
      "Made by: Union Dancers"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Mask Box",
    "levelRequirement": 6
  },
  "african_union_tribal_beaded_vest": {
    "id": "african_union_tribal_beaded_vest",
    "name": "African Union Tribal Beaded Vest",
    "description": "Vest with colorful beads for rituals.",
    "category": "equipment",
    "price": 16500,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Performance for tribal dances",
      "Beads rattle to ward spirits (advantage vs. fear)",
      "Beads break if dropped",
      "Made by: Union Artisans"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Bead Bundle",
    "levelRequirement": 6
  },
  "african_union_tribal_grain_mill": {
    "id": "african_union_tribal_grain_mill",
    "name": "African Union Tribal Grain Mill",
    "description": "Hand mill for porridge grains.",
    "category": "equipment",
    "price": 6500,
    "icon": "🥣",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Mills communal batches; +1 to group cooking",
      "Tribal rhythm (faster with song)",
      "Stones wear smooth",
      "Made by: Union Stonecarvers"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Grain Grind Gear",
    "levelRequirement": 5
  },
  "african_union_tribal_grain_porridge_recipe": {
    "id": "african_union_tribal_grain_porridge_recipe",
    "name": "Recipe: African Union Tribal Grain Porridge",
    "description": "Porridge from ancient grains for communal strength.",
    "price": 7000,
    "icon": "🥣",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Cook grains (30 min); eat to gain +1 to group saves for 4 hours (tribal bond)",
      "Requires: Grains; shared meal",
      "Union unity",
      "Made by: Village Elders"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Grain Gathering Guide",
    "levelRequirement": 5
  },
  "airship_pilot_rental": {
    "id": "airship_pilot_rental",
    "name": "Airship Pilot Rental",
    "description": "Hire a seasoned pilot for your airship for a single voyage.",
    "category": "services",
    "price": 40000,
    "icon": "🧑‍✈️",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Pilot handles navigation, evasion, and combat for 1 long trip (1d4 days)",
      "Pilot has +5 to airship-related rolls",
      "Pilot may demand a share of loot"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Crew Manifest",
    "levelRequirement": 6
  },
  "airship_vigilance_full_restore": {
    "id": "airship_vigilance_full_restore",
    "name": "Vigilance: Full Restoration",
    "description": "Completely repair the airship, upgrade engines, and mount heavy cannons.",
    "category": "faction",
    "price": 600000,
    "icon": "🚢",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "The Vigilance becomes a mobile base of operations",
      "Can call in orbital bombardments (1/day)",
      "Travel anywhere instantly",
      "Faction Morale +50%"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Drydock Team",
    "levelRequirement": 100,
    "factionBonus": {
      "mobility": 100,
      "combatReadiness": 50
    }
  },
  "aleph_null_coins": {
    "id": "aleph_null_coins",
    "name": "Aleph-Null Coins",
    "description": "An infinite number of coins in a finite bag.",
    "category": "curiosities",
    "price": 30000000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Bag contains infinite gold (you never run out)",
      "Can break any economy instantly, this may be the last item you buy",
      "Made by: The Mathematician"
    ],
    "vendor": "infinite_wealth",
    "shippedBy": "Hilberts Hotel",
    "levelRequirement": 40
  },
  "almost_edge_blocky_belt": {
    "id": "almost_edge_blocky_belt",
    "name": "Blocky Belt of the Frontier",
    "description": "A relic from the Blocky Terrains, this belt is stitched with pixelated thread and imbued with the essence of pioneers who carved out new worlds. It allows the wearer to navigate shifting terrain with ease, though its logic is unstable and may cause minor glitches. Worn by those who seek to merge the two worlds, it is both a tool and a warning.",
    "category": "equipment",
    "price": 800,
    "icon": "🗺",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Increases movement speed by 10% in terrain with shifting geometry",
      "Grants +1 to Crafting checks with blocky or modular materials",
      "May trigger minor visual glitches when entering or exiting reality rifts",
      "Can be enchanted with a spellcaster’s current focus",
      "Worn too long may cause minor memory distortion",
      "Slightly increases chance of triggering a reality shift"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 3
  },
  "almost_edge_bulldog_bolt": {
    "id": "almost_edge_bulldog_bolt",
    "name": "Bulldog Bolt",
    "description": "A delivery courier’s signature weapon that leaves trails of static",
    "price": 300,
    "icon": "🔮",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Instantly repairs 50% of damage taken",
      "Causes mild hallucinations after 10 seconds",
      "Shortens next turn’s cooldown by 2 seconds",
      "Made by: Bullet Bill Express"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 2
  },
  "almost_edge_fallen_fork": {
    "id": "almost_edge_fallen_fork",
    "name": "Fallen Fork of the Liminal Way",
    "description": "This rusted, crystalline fork was found wedged in the edge of a collapsing dimension—its tines now humming with fractured reality. It was once a tool for the forgotten cartographers of the void, now it serves as a guide through unstable zones. Use it to mark paths where reality bends, but beware: it may also pull you into a loop.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌌",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Grants +1 to Perception checks in unstable terrain",
      "Can be used to mark paths on the edge of reality",
      "If used during a fall hazard, reduces damage by 50%",
      "Slightly increases chance of triggering environmental anomalies",
      "Can be enchanted with a spellcaster’s current focus",
      "May cause temporary disorientation if used in high-velocity zones"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 4
  },
  "almost_edge_fawful_fury_torch": {
    "id": "almost_edge_fawful_fury_torch",
    "name": "Fawful Fury Torch",
    "description": "A torch that burns with mechanical rage",
    "price": 3000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Deals 3d8 damage to mechanical enemies",
      "Causes 1d6 bonus damage when used in the presence of Fawful",
      "Burns for 3 rounds after use",
      "Increases chance of triggering a mechanical glitch in nearby objects",
      "If used in the Shadowfell it can summon a mechanical shadow clone",
      "Crafted by: Asgard with Fawful’s leftover parts"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 7
  },
  "almost_edge_feywild_locket": {
    "id": "almost_edge_feywild_locket",
    "name": "Loom of Trickster Tides",
    "description": "A handcrafted locket that pulses with the rhythm of the Feywild’s shifting time. When worn, it echoes the laughter of trickster spirits and subtly warps perception, making enemies’ movements unpredictable. Its surface glows with shifting patterns that mimic the paths of hedge mazes.",
    "category": "equipment",
    "price": 1800,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1 to all skill checks involving perception or deception",
      "5% chance to cause target to lose 1 action per round for 1 turn",
      "Wears out after 3 uses in a time loop",
      "Crafted by: Feywild Weavers of the Hollow",
      "Shipped by: Piranha Plant Post"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 4
  },
  "almost_edge_feywild_tangled_ribbon": {
    "id": "almost_edge_feywild_tangled_ribbon",
    "name": "Feywild Tangled Ribbon",
    "description": "A frayed silk ribbon that glows with trapped time loops",
    "category": "equipment",
    "price": 1200,
    "icon": "🌀",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Wears down over time loops; gains +1 to stealth checks in Feywild zones",
      "10% chance to trigger a time rewind when struck",
      "Traps foes in a brief loop of their own actions",
      "Must be worn around the neck or wrist",
      "Crafted by: Goomba Ground Delivery",
      "Thieves can use it to bypass magical wards via illusionary echoes"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 4
  },
  "almost_edge_fire_flower_core": {
    "id": "almost_edge_fire_flower_core",
    "name": "Bloom of Shattered Flame",
    "description": "A mutated fire flower core harvested from the unstable void near the edge, its petals erupt in violent explosions when touched. The plant’s essence is said to have been kissed by a rogue fire spirit during a failed Sovereignty Act protest. Wearing it brings both radiant warmth and dangerous combustion.",
    "price": 600,
    "icon": "🌶",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "3d4 fire damage on first use",
      "+2 to attack rolls for 1 round after consumption",
      "25% chance to trigger a minor explosion upon casting",
      "Consumable once per day",
      "Shipped by: Piranha Plant Post"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 3
  },
  "almost_edge_griffonstone_key": {
    "id": "almost_edge_griffonstone_key",
    "name": "Griffonstone Key",
    "description": "A jagged key carved from the molten core of a fallen Griffonstone, this artifact grants access to hidden tunnels beneath the Void Edge. It emits a low hum when near dimensional breaches, but also attracts attention from the Void’s hungry remnants. The key’s edge is forged from corrupted starlight, making it both a tool and a warning.",
    "category": "equipment",
    "price": 4000,
    "icon": "🦅",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Opens one secret passage in the Void Edge",
      "Deals 1d4 piercing damage when used as a melee weapon",
      "Triggers Void Rift on first use, causing 50% chance of area damage",
      "Requires attunement with a Griffoff or Void-warden",
      "Shipped by: Kremling Smuggle Run",
      "Forbidden to non-Vampire Covenant members"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 7
  },
  "almost_edge_item_name_here": {
    "id": "almost_edge_item_name_here",
    "name": "Crumbling Cogwheel",
    "description": "A broken gear from a collapsing machine that hums with unstable energy",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants temporary immunity to gravity shocks",
      "Increases damage dealt by 15%",
      "Causes nausea after 30 seconds of use",
      "Made by: Chaos Dwarfs"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 5
  },
  "almost_edge_pony_heart_pearl": {
    "id": "almost_edge_pony_heart_pearl",
    "name": "Pony Heart Pearl",
    "description": "This luminous orb was harvested from the core of a fallen Equestrian noble, now infused with friendship magic that pulses with warmth and memory. It glows softly when near a pony, restoring morale and healing minor wounds. But if worn too long, it risks awakening latent changeling sympathies.",
    "price": 800,
    "icon": "🐴",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Restores 20 HP when consumed",
      "Increases friendship bonus by +1 for 1 round",
      "Triggers changeling empathy if worn by non-Changeling",
      "Can be enchanted by a pony mage to boost morale",
      "May cause temporary euphoria or hallucination in high stress",
      "Shipped by: Kremling Smuggle Run"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 3
  }
};
