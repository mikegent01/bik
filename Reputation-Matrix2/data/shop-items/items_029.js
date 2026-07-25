// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_029 = {
  "midlands_legion_blade_of_iron": {
    "id": "midlands_legion_blade_of_iron",
    "name": "Legion Blade of Iron",
    "description": "The Legion Blade of Iron, forged in the heart of an ancient forgeheart, channels the very spirit of a war-ravaged legion's might. Each strike resounds like the clanging of a thousand anvils and echoes the roar of a forgespun soul, imbuing every blow with the unyielding resilience of iron. This cursed blade not only doubles your melee damage against armored foes but also grants you a fleeting surge in critical hits.",
    "category": "equipment",
    "price": 5400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Steel Might",
      "Forge Fury"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Steel Might",
        "rules": "When you make a melee attack with this weapon, the target takes an extra 10d6 damage if it is armored. This effect has no cooldown and can be used once per short or long rest."
      },
      {
        "title": "Forge Fury",
        "rules": "After successfully landing a melee hit, you gain +50% to critical hit chance for the next 10 seconds. This effect can only occur after a successful melee attack with this weapon and is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "The blade's curse requires a certain level of strength to channel its full power.",
    "vendorReason": "Midlands, known for their connection with ancient forges and cursed artifacts, are the only ones who can properly handle this blade.",
    "shippingDetail": "The Void Drifter ensures safe delivery through its high-security routes, but the shipment takes an additional day due to the blade's volatile nature.",
    "usage": {
      "activation": "Instantaneous on successful melee attack",
      "duration": "10 seconds for Forge Fury; once per short or long rest",
      "endsWhen": "The effect ends when you make another melee attack with this weapon, or at the start of your next turn if you don't",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's cursed nature and ancient craftsmanship justify its relatively high price in the market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:12:09.134173+00:00",
    "aiReviewedAt": "2026-07-22T20:12:09.134173+00:00",
    "aiReviewVersion": 1
  },
  "midlands_legion_treasure_map": {
    "id": "midlands_legion_treasure_map",
    "name": "Legion Treasure Map",
    "description": "The Legion Treasure Map is a weathered parchment, its surface etched with cryptic runes and iron sigils that shimmer faintly under moonlight. It reveals secret routes through treacherous Midlands terrain and hidden caches of ancient treasure, guiding the finder to the Heart of the Forge itself—a source of untold power. The map was crafted by the Iron Legion, a once-feared army now reduced to scattered remnants, and its secrets are both deadly and invaluable.",
    "price": 1500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals hidden loot locations in the Midlands",
      "Can be traded for rare materials at Legion Forges"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Path Discovery",
        "rules": "When activated, the map reveals a hidden path to a specified location within a mile. This effect lasts until the end of your next turn and can only be used once per day."
      },
      {
        "title": "Forge Material Exchange",
        "rules": "Present this map at Legion Forges in exchange for rare materials worth up to 500 XP. The map is destroyed after one successful trade."
      }
    ],
    "levelRequirementReason": "The map's cryptic runes and ancient lore are accessible to adventurers of any level but require a certain amount of experience to interpret.",
    "vendorReason": "The Midlands is the birthplace of the Iron Legion, and its remnants still guard the secrets held within this treasure map.",
    "shippingDetail": "Delivery via Lakitu Drone takes three days, with a rare courier delivering it directly to your campsite for an added sense of urgency.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous",
      "endsWhen": "The map is destroyed after successful use or if the location cannot be found.",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The map's rarity and historical significance justify its price, providing both immediate utility and long-term value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:12:39.736997+00:00",
    "aiReviewedAt": "2026-07-22T20:12:39.736997+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mage_crank": {
    "id": "midlands_mage_crank",
    "name": "The Iron Scribe’s Pen",
    "description": "The Iron Scribe’s Pen is a quill crafted from obsidian and forged steel, its tip imbued with ink that whispers of forgotten guilds and lost knowledge. This pen allows scribes to inscribe magical wards on metal or stone with a +25% chance of success, ensuring their work remains intact even in the face of dark magic. Its user also gains +10% bonus to lore checks involving guilds or trade routes, making it an indispensable tool for scholars and mages navigating iron-laced worlds.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Magical Inscriptions",
      "Enhanced Lore"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Inscriptions",
        "rules": "When used to write or inscribe magical wards on metal or stone, the user has a +25% chance of success. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Enhanced Lore",
        "rules": "The user gains a +10% bonus to any lore check involving guilds or trade routes. This effect is passive and lasts until the end of the user's next short rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who might need assistance in both magical inscription and historical knowledge.",
    "vendorReason": "The Midlands are renowned for their scholarly traditions, making them the perfect source for this tool of knowledge and magic.",
    "shippingDetail": "Ships via a Void Drifter Courier, ensuring quick delivery from the Midlands.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until end of next short rest for lore checks.",
      "endsWhen": "Ends at the start of the user's next long rest or when the user gains a level.",
      "charges": "Unlimited"
    },
    "priceReason": "The item’s rarity and unique magical properties justify its fair price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:12:13.073940+00:00",
    "aiReviewedAt": "2026-07-22T20:12:13.073940+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mage_iron_soul": {
    "id": "midlands_mage_iron_soul",
    "name": "Soulforge Helm",
    "description": "The Soulforge Helm, a relic of the Iron Priests, channels necrotic energy into the will of its wearer. Crafted from dark iron fused with ancient bones, this helm grants temporary resistance to poison and emits an aura that subtly warms the air around you, as if smoldering embers are part of your very essence. Wielders find their resolve strengthened in the face of corruption, drawing upon the necrotic pulse within.",
    "category": "equipment",
    "price": 1500,
    "icon": "🏯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Resist Poison",
      "Necrotic Aura"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Resist Poison",
        "rules": "When you take poison damage, reduce it by an amount equal to your proficiency bonus (minimum of 1). This effect lasts for the duration of one short rest."
      },
      {
        "title": "Necrotic Aura",
        "rules": "You radiate a minor aura that deals 1d4 necrotic damage to all creatures within 5 feet of you at the start of each of your turns. Creatures can use their reaction to end this effect on themselves."
      }
    ],
    "levelRequirementReason": "The helm's power is too strong for those less experienced, requiring a minimum level to wield its necrotic might.",
    "vendorReason": "Midlands is known for their trade in ancient and powerful relics, making the Soulforge Helm an appropriate addition to their stock.",
    "shippingDetail": "Ships via Void Drifter Relay, with expedited delivery ensuring your helm arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous; begins as a bonus action when you put the helm on and ends when removed or destroyed by external force.",
      "duration": "Until removed or destroyed",
      "endsWhen": "Removed from your head or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the helm's rare material, ancient crafting, and unique necrotic properties.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:12:09.178173+00:00",
    "aiReviewedAt": "2026-07-22T20:12:09.178173+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mage_torch": {
    "id": "midlands_mage_torch",
    "name": "Embersteel Torch",
    "description": "The Embersteel Torch, forged from the last flame of the Iron Legion’s forgekeeper, glows with a steady blue-white radiance that pierces the darkness like a beacon. It is said that the torch holds a fragment of the very fire that once fueled the mighty Iron Legion, making it an invaluable tool for dispelling enchantments and breaking through magical barriers. This enchanted torch not only aids in scouting but also grants a caster a temporary boost to their spellcasting prowess.",
    "price": 330,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Magical Spark Emittance",
      "Enhanced Spellcasting"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Spark Emittance",
        "rules": "When the Embersteel Torch is activated, it emits a burst of magical sparks that ignites 3 nearby enemies for 2 seconds. These sparks deal an additional 1d6 force damage and have a 50% chance to dispel any active enchantment on those targets. This effect has no save DC but ends when the torch's activation ends."
      },
      {
        "title": "Enhanced Spellcasting",
        "rules": "Upon using the Embersteel Torch, the user gains a +10% bonus to their spellcasting speed for 10 seconds after use. This effect is instantaneous and does not require any saving throw. It also has no limit on daily usage."
      }
    ],
    "levelRequirementReason": "The Embersteel Torch’s power, though potent, requires little in terms of caster proficiency.",
    "vendorReason": "Midlands Mages are known for their expertise with arcane tools and enchanted items, making the Embersteel Torch a natural addition to their inventory.",
    "shippingDetail": "The torch is delivered swiftly by Lakitu Drones, ensuring that adventurers receive this crucial tool promptly.",
    "usage": {
      "activation": "Action (activate once per short rest)",
      "duration": "Instantaneous for the spellcasting speed effect; 2 seconds for the magical spark emittance",
      "endsWhen": "The torch is extinguished or recharged",
      "charges": "Unlimited, but requires a short rest to recharge"
    },
    "priceReason": "Balanced at 1000 XP, the Embersteel Torch offers significant utility for spellcasters without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T20:12:42.172633+00:00",
    "aiReviewedAt": "2026-07-22T20:12:42.172633+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mech_warrior": {
    "id": "midlands_mech_warrior",
    "name": "Cogwheel Greaves",
    "description": "The Cogwheel Greaves are heavy iron plate armor reinforced with interlocking gears forged in the heart of an ancient forge. Designed for siege warfare, these greaves channel kinetic energy into every strike, dealing an extra 20% damage to armored foes and granting a +15% bonus to all armor-based defense checks. Swiftly maneuverable, they enhance your speed by 10% when navigating tight spaces, ensuring you remain a formidable threat on the battlefield.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Kinetic Strikes",
      "Armor Mastery"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Kinetic Strikes",
        "rules": "The Cogwheel Greaves deal an additional 20% damage to armored enemies. This effect is passive and does not require activation."
      },
      {
        "title": "Armor Mastery",
        "rules": "Grants a +15% bonus to all armor-based defense checks, enhancing the wearer's resilience against physical attacks. This benefit lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to effectively utilize the greaves' kinetic energy enhancements.",
    "vendorReason": "Midlands are renowned for their expertise in siege warfare, making these greaves a logical addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay; expedited delivery with a slight delay for custom inspections.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous",
      "endsWhen": "At the end of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its moderate rarity and utility in enhancing damage and defense.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T20:12:23.169791+00:00",
    "aiReviewedAt": "2026-07-22T20:12:23.169791+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanic_gear": {
    "id": "midlands_mechanic_gear",
    "name": "Gears of the Ironheart",
    "description": "The Gears of the Ironheart are a set of mechanical gauntlets forged from the heart of an ancient forge, their cogs and levers humming with latent power. They sync with your rhythm, allowing you to repair machinery twice as fast and regenerate stamina at a steady rate, bolstered by the enduring spirit of the forge that crafted them. Should you need it, these gears can sabotage enemy machines, causing critical failures for one round if triggered.",
    "category": "equipment",
    "price": 1500,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+10% Stamina Regeneration",
      "Twice-as-Fast Tool Usage"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stamina Regeneration Boost",
        "rules": "While wearing the Gears of the Ironheart, you gain a +10% bonus to your stamina regeneration rate. This effect is passive and does not require any action."
      },
      {
        "title": "Mechanical Sabotage",
        "rules": "By using an action, you can trigger the sabotage feature. Once used, this feature disrupts one enemy machine within 30 feet for 1 round. There is a 50% chance that it fails to function properly during this time."
      }
    ],
    "levelRequirementReason": "These gears are designed with beginners in mind, providing foundational support without requiring high-level proficiency.",
    "vendorReason": "Midlands is known for its mechanical expertise and craftsmanship, making it the perfect vendor to stock these gearsets.",
    "shippingDetail": "Ships via Koopa Postal. Due to their delicate nature, they are packed in specialized crates lined with soft foam padding.",
    "usage": {
      "activation": "Action or Reaction (for sabotage)",
      "duration": "Instantaneous (sabotage effect lasts for one round)",
      "endsWhen": "The sabotage feature ends after affecting a single enemy machine. The gauntlets can be re-triggered once per short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's moderate rarity and utility, offering significant benefits without overpowered effects.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T20:12:26.924685+00:00",
    "aiReviewedAt": "2026-07-22T20:12:26.924685+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanic_tome": {
    "id": "midlands_mechanic_tome",
    "name": "Mechanic Tome of the Iron Codex",
    "description": "The Mechanic Tome of the Iron Codex is a heavy leather-bound book with arcane blueprints etched in silver. When opened, it hums softly as it grants temporary buffs to all nearby allies, enhancing their mechanical skills and fortifying their armor. The tome's knowledge ensures that any mechanical task undertaken by an ally within 10 feet gains a +2 bonus on the next check or save made for crafting machinery, and their armor receives a magical boost that increases its AC by +3 for one hour.",
    "price": 1500,
    "icon": "📖",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2 bonus to mechanical checks",
      "+3 temporary AC boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Boost",
        "rules": "On activation, each ally within 10 feet gains a +2 bonus on the next check or save made for crafting machinery. This effect lasts until the start of your next turn."
      },
      {
        "title": "Armor Fortification",
        "rules": "When activated, all allies within 10 feet receive a temporary increase in their AC by +3 for one hour. This bonus does not stack with other sources of AC modification."
      }
    ],
    "levelRequirementReason": "The tome's knowledge is accessible to beginners who show an interest in mechanical skills.",
    "vendorReason": "Midlands, known for its bustling workshops and master mechanics, naturally stocks this invaluable resource.",
    "shippingDetail": "Shipped via Pipe Express's express courier service, ensuring the tome arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "One hour or until expended",
      "endsWhen": "The duration ends when the user uses an action to expend the remaining charge of the tome.",
      "charges": "1"
    },
    "priceReason": "The balanced price reflects its rare material and the significant mechanical advantage it provides.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T20:12:35.672743+00:00",
    "aiReviewedAt": "2026-07-22T20:12:35.672743+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_backpack": {
    "id": "midlands_mechanical_backpack",
    "name": "Forgeheart Satchel of the Iron Legion",
    "description": "The Forgeheart Satchel of the Iron Legion is a rugged, industrialized backpack forged from ancient iron and adorned with runes that whisper tales of battle-won victories. This satchel grants its bearer a temporary boost in crafting prowess and resource management during combat, allowing for the swift repair or crafting of essential tools under fire. The satchel’s 'Iron Storage' feature can temporarily hold an additional three weapons or materials, ensuring no vital tool is ever left behind on the field of battle.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Iron Storage",
      "Crafting Boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Iron Storage",
        "rules": "The Forgeheart Satchel grants temporary storage for an additional three weapons or materials during combat. This effect lasts until the end of your next turn."
      },
      {
        "title": "Crafting Boost",
        "rules": "While equipped, you gain a +2 bonus to Crafting checks and can spend crafting resources more efficiently in battle situations. This bonus is active as long as the satchel remains on your person."
      }
    ],
    "levelRequirementReason": "The satchel’s basic utility makes it accessible to lower-level characters who need an edge in combat.",
    "vendorReason": "Midlands is known for its robust and functional equipment, making the Forgeheart Satchel a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay within 3 game days.",
    "usage": {
      "activation": "Passive effect while equipped.",
      "duration": "Active until end of next turn or removed.",
      "endsWhen": "The satchel is removed from your person or at the end of your next turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects its rarity and functional utility, providing a fair value for players seeking to enhance their combat efficiency.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:12:55.146007+00:00",
    "aiReviewedAt": "2026-07-22T20:12:55.146007+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_blood_torch": {
    "id": "midlands_mechanical_blood_torch",
    "name": "Mechanical Blood Torch",
    "description": "The Mechanical Blood Torch, forged from rusted iron and fueled by the essence of ancient Iron Legion battles, glows with a molten crimson light that pierces even the deepest shadows. When ignited, it not only reveals hidden schematics but also grants temporary immunity to poison and smoke for 3 rounds, protecting its bearer from deadly fumes and toxins. In combat, it can deal 1d6 damage directly to enemy machines, making it a formidable tool against mechanical foes.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Schematics",
      "Immunity to Poison and Smoke"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveals Hidden Schematics",
        "rules": "When ignited, the Mechanical Blood Torch illuminates dark alleys with its crimson glow, revealing hidden passages and secret mechanisms within a radius of 15 feet. This effect lasts for 30 seconds."
      },
      {
        "title": "Immunity to Poison and Smoke",
        "rules": "The bearer gains temporary immunity to poison and smoke effects for 3 rounds (18 seconds). If the user is exposed to a poisonous or smoky environment, they can use an action to activate this effect. Once used, it cannot be reactivated until after a short rest."
      }
    ],
    "levelRequirementReason": "The Mechanical Blood Torch requires at least level 5 due to its intricate mechanism and the complexity of its magical properties.",
    "vendorReason": "Midlands is known for their expertise in ancient artifacts, especially those with ties to the Iron Legion.",
    "shippingDetail": "The torch must be shipped discreetly via Shy Guy Smugglers due to its sensitive nature and historical value.",
    "usage": {
      "activation": "Action (requires a successful DC 15 Dexterity check to ignite)",
      "duration": "30 seconds for revealing schematics, 3 rounds of immunity",
      "endsWhen": "Ends when the duration expires or the user is no longer in the affected area.",
      "charges": "Unlimited; the torch can be rekindled once extinguished."
    },
    "priceReason": "The balanced XP price reflects the item's rare material, intricate forging, and unique magical abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:13:19.953124+00:00",
    "aiReviewedAt": "2026-07-22T20:13:19.953124+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_cloak": {
    "id": "midlands_mechanical_cloak",
    "name": "Mechanical Cloak of the Atrium Weavers",
    "description": "The Mechanical Cloak of the Atrium Weavers is a segmented metallic cloak crafted from the durable alloys of the Midlands. This relic shifts its form to mimic the environment, blending seamlessly into any industrial or mechanical setting. Worn in unstable zones, it grants the wearer a temporary aura of resilience, making them harder to detect and more resistant to crushing damage. The cloak's intricate gears and pistons hum softly as they adjust to match the surroundings.",
    "category": "equipment",
    "price": 1500,
    "icon": "🛡",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Stealth Mastery",
      "Crushing Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Mastery",
        "rules": "While wearing this cloak, you have advantage on Stealth checks in industrial or mechanical environments. This effect lasts for 1 hour and can be activated as a bonus action."
      },
      {
        "title": "Crushing Resistance",
        "rules": "When you take damage from a crushing attack, reduce the amount by 25%. This effect applies to one such attack per short rest."
      }
    ],
    "levelRequirementReason": "The cloak requires at least third-level proficiency in mechanics and engineering to properly operate its adaptive mechanisms.",
    "vendorReason": "The Midlands are renowned for their mechanical craftsmanship, and this cloak is a masterpiece of their artistry.",
    "shippingDetail": "Due to the cloak's delicate nature, it must be shipped via Shy Guy Smugglers to ensure safe delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour per activation",
      "endsWhen": "At the end of your next long rest or when you remove the cloak",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare alloys and powered by advanced mechanics, this item is both a practical tool and an elegant piece.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:12:54.169693+00:00",
    "aiReviewedAt": "2026-07-22T20:12:54.169693+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_core": {
    "id": "midlands_mechanical_core",
    "name": "The Iron Core of the Forgotten Forge",
    "description": "The Iron Core of the Forgotten Forge hums like a wounded colossus, its gears and pistons still grinding after centuries of neglect. Salvaged from the collapsed Midlands Factory, it pulses with latent power that can bolster a fighter’s resolve but at a cost to their own strength in battle. Each use grants +40% damage on your next attack and +15 AC for one round, but it saps 20 HP each time you activate it during combat.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+40% Damage",
      "AC +15"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Next Attack Boost",
        "rules": "When activated as a bonus action, this core grants +40% damage on your next melee attack. The effect lasts until you make the attack or until the end of your next turn."
      },
      {
        "title": "Fortified Defense",
        "rules": "Activating the core also provides +15 AC for one round (6 turns). This bonus ends immediately if you take damage, are incapacitated, or use this ability again before the duration expires."
      }
    ],
    "levelRequirementReason": "The Iron Core is designed to be accessible to low-level adventurers who can still benefit from its combat prowess without overtaxing their health.",
    "vendorReason": "Midlands, being the original source of this artifact’s origin story, continues to sell it as a nod to its industrial heritage and the tales of brave souls who have faced the factory's final breath.",
    "shippingDetail": "The core is shipped under heavy guard due to its volatile nature; it arrives with a courier who can handle emergencies if needed.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, lasting until you make an attack or the end of your next turn (whichever comes first)",
      "endsWhen": "You take damage, are incapacitated, or use this ability again before the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The Iron Core is priced at 1000 XP to reflect its rare material composition and the unique benefits it offers without being overly game-breaking.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:13:23.740256+00:00",
    "aiReviewedAt": "2026-07-22T20:13:23.740256+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_essence": {
    "id": "midlands_mechanical_essence",
    "name": "Forgeblood Essence",
    "description": "Forgeblood Essence is a volatile liquid extracted from the core of a war machine, distilled in the smoky forges of Midland. When applied to your armor or weapon, it carves out a mechanical resonance that enhances its resilience and combat prowess. Applied once per day, this essence grants +25% damage on melee attacks and reduces magic resistance by 15%. It can be used on up to three items simultaneously, each with a single application.",
    "price": 1500,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Melee Damage",
      "Reduced Magic Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Melee Damage",
        "rules": "Activates as a bonus action. Increases the damage of melee attacks by +25% for one day. The effect ends if you apply more Forgeblood Essence to another item or when the duration expires."
      },
      {
        "title": "Reduced Magic Resistance",
        "rules": "Reduces magic resistance by 15%. This effect lasts until the next dawn and ceases upon application of more Forgeblood Essence to other items, or if you apply it again on the same item within a day."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Athletics due to the physical nature of applying the essence.",
    "vendorReason": "Midland is known for its mastery over mechanical and magical devices, making it a fitting vendor for this item.",
    "shippingDetail": "Ships via Void Drifter Relay with expedited delivery within one week.",
    "usage": {
      "activation": "Bonus action to apply the essence.",
      "duration": "One day per application.",
      "endsWhen": "Another application of Forgeblood Essence or dawn, whichever comes first.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced with a lower price to reflect its balanced effects and limited daily use.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:13:07.106036+00:00",
    "aiReviewedAt": "2026-07-22T20:13:07.106036+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_glove": {
    "id": "midlands_mechanical_glove",
    "name": "Iron Gauntlet of the Blacksmith",
    "description": "The Iron Gauntlet of the Blacksmith is a formidable relic forged from steel and enchanted iron ore. Its weighty form channels the very essence of fire and earth, enhancing the wearer’s strength and resilience in melee combat. With each strike, it can rend enchanted armor with ease, leaving a trail of shattered defense behind. The gauntlet grants +30% damage to melee attacks and increases the chance of breaking enchanted armor by 20%, but only when wielded by one who knows the rhythm of fire and hammer.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Melee Damage",
      "20% Chance to Shatter Enchanted Armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Iron Surge",
        "rules": "When a melee attack shatters enchanted armor, the wearer gains a temporary boost to movement speed and attack speed for 1 minute. This effect can only activate once per short or long rest."
      },
      {
        "title": "Enhanced Durability",
        "rules": "The gauntlet reduces the damage taken from non-magical melee attacks by half, up to +20 hit points of reduction, but this effect is not cumulative with other similar abilities. This benefit lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The gauntlet's elemental magic requires a basic understanding of forgecraft and fire.",
    "vendorReason": "Midlands is renowned for its blacksmiths, who are known to craft items that embody the very essence of their trade.",
    "shippingDetail": "The gauntlet is shipped via the Void Drifter Relay, a service known for its punctuality and secure deliveries through the Astral Plane.",
    "usage": {
      "activation": "Instantaneous activation with a melee attack.",
      "duration": "Until the start of your next turn or until broken enchanted armor is shattered by an attack.",
      "endsWhen": "The gauntlet's enchantment is broken, requiring reforge to restore its capabilities.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and infused with elemental magic, the gauntlet remains a valuable asset for any blacksmith or combatant.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:13:25.106092+00:00",
    "aiReviewedAt": "2026-07-22T20:13:25.106092+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_greaves": {
    "id": "midlands_mechanical_greaves",
    "name": "Gearbound Greaves of the Ironclad",
    "description": "The Gearbound Greaves of the Ironclad are reinforced with interlocking cogs and pistons, their steel plates shimmering with a mechanical sheen. Crafted in the forges of Midlands, these greaves grant the wearer superhuman strength while carrying heavy loads, allowing every step to be a forceful push against the earth's resistance. They also amplify the wearer's resilience to crushing terrain, reducing damage by 25% and enhancing their endurance during strenuous tasks.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% movement speed while carrying heavy loads",
      "Amplify resilience to crushing terrain"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "+30% Movement Speed While Carrying Heavy Loads",
        "rules": "While the greaves are worn, the wearer gains +30% to their movement speed when carrying a heavy load. This effect is passive and does not require activation."
      },
      {
        "title": "Amplify Resilience To Crushing Terrain",
        "rules": "When the wearer is struck by an area of difficult terrain or crushing damage, they gain +25% damage reduction for 1 minute. This effect can occur once per long rest and does not stack with other forms of damage reduction."
      }
    ],
    "levelRequirementReason": "The greaves require a minimum level to ensure the wearer has sufficient strength and resilience.",
    "vendorReason": "Midlands is renowned for its industrial innovations, making these greaves a perfect fit in their inventory.",
    "shippingDetail": "Ships via Void Drifter Relay, known for their reliable and fast deliveries.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous (once per long rest)",
      "endsWhen": "Ends upon the completion of a long rest or if removed from wear",
      "charges": "Unlimited"
    },
    "priceReason": "The greaves are crafted with rare materials and advanced Midlands engineering, justifying their fair value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:13:50.160723+00:00",
    "aiReviewedAt": "2026-07-22T20:13:50.160723+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_heart": {
    "id": "midlands_mechanical_heart",
    "name": "Iron Heart of the Forge",
    "description": "The Iron Heart of the Forge pulses with the relentless rhythm of industrial strength, forged from the bones of a dying steam engine in the heart of an iron mill. This mechanical marvel grants the wearer temporary resistance to mechanical traps and enhances their resilience against mechanical foes, syncing its beats with the clatter of machinery. When struck by metal or gears, it amplifies the blow's impact, dealing additional damage while providing a regenerative boost as you move.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% chance to trigger ‘Gear Up’ on hit (temporary bonus damage)",
      "Temporary resistance to mechanical traps"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Gear Up",
        "rules": "On a successful melee attack against a mechanical enemy, the wearer gains +10 temporary hit points for 1 minute. This effect can be triggered once per long rest."
      },
      {
        "title": "Trap Resistance",
        "rules": "The wearer has advantage on saving throws against mechanical traps for 1 hour after wearing this item. This benefit ends when they remove the item or if they take damage."
      }
    ],
    "levelRequirementReason": "Requires proficiency with heavy armor to fully utilize its protective and offensive capabilities.",
    "vendorReason": "Midlands, known for their mastery of industrial craftsmanship, are the perfect purveyors of this mechanical marvel.",
    "shippingDetail": "Delivered by Shy Guy Smugglers with a 1-day express service, ensuring you receive your gear in pristine condition.",
    "usage": {
      "activation": "Passive effect upon donning the item.",
      "duration": "Until removed or until its temporary hit points are exhausted.",
      "endsWhen": "The wearer removes the item or takes damage.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique combination of offensive and defensive capabilities within the realm's economic structure.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:13:46.580409+00:00",
    "aiReviewedAt": "2026-07-22T20:13:46.580409+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_heart_of_shadeward": {
    "id": "midlands_mechanical_heart_of_shadeward",
    "name": "Mechanical Heart of Shadeward",
    "description": "The Mechanical Heart of Shadeward is a rusted cogwork nestled within an iron heart. Crafted in the shadowy depths of Shadeward Estate, it hums with a life of its own. When equipped, this relic grants immunity to fire and poison damage, while also allowing the wielder to repair machinery for 30 seconds, restoring 10% of their hit points per second during that time. The heart's gears click as it ensures your survival in treacherous environments and enhances mechanical dexterity.",
    "price": 6000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Immunity to Fire and Poison",
      "Machinery Repair"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Immunity to Fire and Poison",
        "rules": "This effect provides immunity to fire and poison damage for the duration of one short rest or until removed by a dispel magic. The wearer must be equipped with the Mechanical Heart of Shadeward."
      },
      {
        "title": "Machinery Repair",
        "rules": "Activate as a bonus action, this effect allows the wielder to repair machinery for 30 seconds, restoring their hit points at a rate of 10% per second. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The complexity and power of the Mechanical Heart of Shadeward necessitate a higher level to ensure proper control.",
    "vendorReason": "Midlands is known for their extensive trade with the ancient sites, making it no surprise they sell this relic from Shadeward Estate.",
    "shippingDetail": "Due to its delicate nature, the Mechanical Heart of Shadeward requires special handling and is shipped via Koopa Postal's express courier service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "30 seconds or until used up",
      "endsWhen": "The effect ends when the time expires or if the user drops or removes it from their person.",
      "charges": "Once per long rest"
    },
    "priceReason": "The Mechanical Heart of Shadeward is priced at 1000 XP, reflecting its rarity and the complexity of its craftsmanship.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T20:13:38.125417+00:00",
    "aiReviewedAt": "2026-07-22T20:13:38.125417+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_helm": {
    "id": "midlands_mechanical_helm",
    "name": "Steel Crown of the Iron Throne",
    "description": "The Steel Crown of the Iron Throne, a helm forged from the molten remains of an ancient war machine, whispers tales of valor and resilience to its wearer. Its tempered steel glows faintly in battle, deflecting enemy blows with a strength that seems almost divine. This helm not only grants tactical advantage in siege and melee combat but also protects against environmental hazards, allowing the wearer to shrug off the harshness of war with unyielding resolve.",
    "category": "equipment",
    "price": 5600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% defense against melee and ranged attacks",
      "Reduces fatigue during combat by 20% for 10 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Iron Resolve",
        "rules": "When the wearer is reduced to half their hit points, they can use a bonus action to gain temporary hit points equal to 5 + their level. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Environmental Resilience",
        "rules": "The helm provides a +10% chance to resist environmental damage such as fire, water, ice, or poison. This effect is active as long as the helm is worn in battle."
      }
    ],
    "levelRequirementReason": "The helm's intricate design and magical properties require a user with at least 5th level to wield it effectively.",
    "vendorReason": "Midlands, known for their craftsmanship and mastery of ancient artifacts, is the only place where such a legendary helm can be found.",
    "shippingDetail": "The helm arrives via the Void Drifter Relay, ensuring it reaches its destination in perfect condition.",
    "usage": {
      "activation": "Bonus action to activate Iron Resolve; always active for Environmental Resilience",
      "duration": "10 seconds for Iron Resolve; lasts until end of turn for Environmental Resilience",
      "endsWhen": "At the start of your next turn after using Iron Resolve; when removed or damaged",
      "charges": "Unlimited, recharges on a short rest"
    },
    "priceReason": "The helm's unique properties and historical significance justify its high price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:13:53.638205+00:00",
    "aiReviewedAt": "2026-07-22T20:13:53.638205+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_helmet": {
    "id": "midlands_mechanical_helmet",
    "name": "Steel Cowl of the Iron Fist",
    "description": "The Steel Cowl of the Iron Fist is a helmet forged from scrap iron and reinforced with solid steel. This midland masterpiece not only grants the wearer an unparalleled ability to punch through weak armor but also shatters enemy joints with unnerving ease, leaving foes incapacitated in their own blood. Crafted by the hands of skilled blacksmiths, it reduces the effectiveness of armor against melee attacks by 20%, making every strike feel like a hammer blow.",
    "category": "equipment",
    "price": 1500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Armor Piercing",
      "Joint Shattering"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Armor Piercing",
        "rules": "When you hit an enemy with a melee attack, reduce their armor's effectiveness by 20% for the duration of the fight. This effect does not stack."
      },
      {
        "title": "Joint Shattering",
        "rules": "Once per short rest, as a bonus action, you can attempt to break an enemy's joint with a successful melee attack. On a success, the target must make a DC 15 Strength saving throw or be incapacitated until their next turn."
      }
    ],
    "levelRequirementReason": "The intricate forging and balance required for this helmet demand at least 3rd level proficiency in fighting techniques.",
    "vendorReason": "Midland's blacksmiths are renowned for their ability to craft such finely tuned combat gear, ensuring it meets the highest standards of performance and durability.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, this helmet arrives in pristine condition directly from the forge.",
    "usage": {
      "activation": "Bonus action to activate joint shattering; melee attack for armor piercing effect.",
      "duration": "Instantaneous, armor piercing lasts until end of fight.",
      "endsWhen": "Charges exhausted or armor pierce ends at fight's conclusion.",
      "charges": "1 charge per short rest"
    },
    "priceReason": "Balanced against the helmet's unique and powerful effects, this price ensures it remains a valuable but not overpowered addition to any character's arsenal.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:13:53.684881+00:00",
    "aiReviewedAt": "2026-07-22T20:13:53.684881+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_hoof_of_the_gear_ghoul": {
    "id": "midlands_mechanical_hoof_of_the_gear_ghoul",
    "name": "Mechanical Hoof of the Gear Ghoul",
    "description": "The Mechanical Hoof of the Gear Ghoul is a relic forged from the forgotten gearworks of the Iron Ward, now bound to the leg of its wearer. Its intricate cogs and gears hum with latent power as it grants the rider unparalleled speed and control over mechanized mounts. When activated, it triggers nearby factory explosions that deal devastating damage to enemies in close proximity, leaving a trail of fiery destruction behind.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Ride Mechanized Beast",
      "Trigger Factory Explosions"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Ride Mechanized Beast",
        "rules": "When the rider activates the Mechanical Hoof, they gain the ability to mount and control a mechanical beast. This allows for short-range travel at +15% movement speed while mounted. The effect lasts until the rider dismounts or falls from the mount."
      },
      {
        "title": "Trigger Factory Explosions",
        "rules": "As a bonus action, the wearer can trigger a nearby factory explosion that deals 200 fire damage to all creatures within 15 feet of them. This effect has a cooldown of one minute and requires a successful DC 15 Wisdom (Perception) check to successfully locate an appropriate target."
      }
    ],
    "levelRequirementReason": "Wielders must be at least level 6 to harness the latent power within the Mechanical Hoof.",
    "vendorReason": "The Midlands are renowned for their mastery of mechanical engineering, making it fitting that this relic is sold there.",
    "shippingDetail": "Delivered via a specially modified airship that can transport the delicate device safely and swiftly to its buyer.",
    "usage": {
      "activation": "Bonus action to mount or dismount, and as a bonus action to trigger explosions.",
      "duration": "Instantaneous for each effect.",
      "endsWhen": "The rider dismounts or falls from the mount; explosion's cooldown ends after one minute.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare craftsmanship and powerful abilities.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T20:14:19.516036+00:00",
    "aiReviewedAt": "2026-07-22T20:14:19.516036+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_iron_bell": {
    "id": "midlands_mechanical_iron_bell",
    "name": "Mechanical Iron Bell",
    "description": "Forged in the heart of the Midlands' forges, this Mechanical Iron Bell is a marvel of engineering and iron will. Its resonant tones command the attention of even the most steadfast warriors, causing nearby foes to stagger and falter. Crafted from slag and bellows, its robust frame withstands the fury of battle without yielding. With each toll, you risk 10% damage but harness the power of the forgeheart, rallying your allies in a surge of strength.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Forgeheart Resonance",
      "Staggering Toll"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Forgeheart Resonance",
        "rules": "When you strike the bell, nearby enemies within 30 feet must make a DC 15 Strength saving throw or be knocked prone for 1 round. You take 1d6+2 damage per toll."
      },
      {
        "title": "Staggering Toll",
        "rules": "Each time you toll the bell, you and your allies within 30 feet gain advantage on attack rolls until the end of your next turn. However, you must endure a -10% damage penalty for each toll."
      }
    ],
    "levelRequirementReason": "This item requires significant strength and dexterity to wield effectively in battle.",
    "vendorReason": "The Midlands are renowned for their mechanical ingenuity and this bell is a prime example of their craftsmanship.",
    "shippingDetail": "Due to its size, the Mechanical Iron Bell must be shipped via Koopa Postal's oversized cargo service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; lasts until the end of your next turn or until you toll it again",
      "endsWhen": "You toll the bell again, or you take a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The bell's rare materials and intricate design justify its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:14:46.859210+00:00",
    "aiReviewedAt": "2026-07-22T20:14:46.859210+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_iron_belt": {
    "id": "midlands_mechanical_iron_belt",
    "name": "Iron Grit Belt",
    "description": "The Iron Grit Belt is a robust belt forged from industrial steel, adorned with sigils of the Iron Legion. This battle-worn harness not only provides heavy armor benefits but also slows down your foes' attacks, making it invaluable for grinding through the Midlands’ smelting halls. Its etched design ensures durability and resilience, enhancing your defense while reducing enemy attack speed by 20%. It’s a trusted companion for any adventurer seeking to master the art of survival in Midland's treacherous landscapes.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Armor",
      "-20% Enemy Attack Speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Defense (+20% Armor)",
        "rules": "The Iron Grit Belt provides a +20% bonus to your armor class. This effect is passive and does not require any action."
      },
      {
        "title": "Slowed Attacks (-20% Enemy Attack Speed)",
        "rules": "Enemies adjacent to you have their attack speed reduced by 20%. This effect lasts until the start of your next turn, and it ends if you leave a 5-foot square where an enemy is located."
      }
    ],
    "levelRequirementReason": "The belt's design allows even novice adventurers to benefit from its protective properties.",
    "vendorReason": "The Midlands are known for their robust and practical gear, making the Iron Grit Belt a staple in local shops.",
    "shippingDetail": "Ships within one week via reliable courier services.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous upon donning, until removed or the start of your next turn",
      "endsWhen": "Leaving a square adjacent to an enemy or removing the belt",
      "charges": "Unlimited"
    },
    "priceReason": "The Iron Grit Belt offers significant benefits for adventurers, making it a fair and balanced purchase.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:14:08.968940+00:00",
    "aiReviewedAt": "2026-07-22T20:14:08.968940+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_iron_heart": {
    "id": "midlands_mechanical_iron_heart",
    "name": "Mechanical Iron Heart",
    "description": "The Mechanical Iron Heart hums like a well-tuned engine, its gears ticking with the rhythm of unyielding determination. When activated in the dim light of the Midlands’ forges, it amplifies your physical prowess and resilience, making you a master of steel and fire. This pulsating core not only boosts your strength by 150% but also grants ‘Iron Resolve’, reducing fatigue by 30% after 30 seconds of combat, ensuring you never falter in the heat of battle.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+150% Strength",
      "Grants “Iron Resolve”"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Iron Resolve",
        "rules": "After 30 seconds of combat, this effect reduces your fatigue by 30%. This benefit lasts until the start of your next turn."
      },
      {
        "title": "+150% Strength",
        "rules": "Activate as a bonus action. The effect lasts for 1 minute and can be renewed on your next turn."
      }
    ],
    "levelRequirementReason": "This core requires the user to have reached at least third level in order to wield its power effectively.",
    "vendorReason": "The Midlands’ forges are renowned for crafting such powerful and essential tools, and no blacksmith would dare sell this item outside their region.",
    "shippingDetail": "Delivered via a secret courier route that ensures the Mechanical Iron Heart reaches its destination without attracting unwanted attention.",
    "usage": {
      "activation": "Bonus action to activate, and can be renewed on your next turn.",
      "duration": "1 minute per activation.",
      "endsWhen": "The effect ends when you finish a short or long rest, or if the item is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This rare and powerful core reflects its value in the Midlands’ forges, making it worth the substantial XP cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:00:59.784672+00:00",
    "aiReviewedAt": "2026-07-22T22:00:59.784672+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_legs": {
    "id": "midlands_mechanical_legs",
    "name": "Iron Leggings of the Iron Legion",
    "description": "The Iron Leggings of the Iron Legion are forged from ancient, enchanted steel, once worn by the elite warriors of the Iron Legion. These reinforced legs grant unparalleled mobility and resilience to their wearer, allowing them to traverse treacherous terrain with ease and endure the brutal impacts of battle. Wielders experience a 25% increase in movement speed on flat surfaces and a 15% chance to dodge enemy attacks, making them a true testament to the unyielding spirit of the Iron Legion.",
    "category": "equipment",
    "price": 5500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% movement speed on flat terrain",
      "15% chance to dodge enemy attacks"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Iron Tread",
        "rules": "While wearing these leggings, you have resistance to damage from ground-based attacks. This benefit lasts until the start of your next turn."
      },
      {
        "title": "Battle Readiness",
        "rules": "Once per short or long rest, you can activate a special property called 'Iron Tread' by making a successful DC 15 Strength (Athletics) check. If you succeed, you gain resistance to damage from ground-based attacks for the duration of one battle."
      }
    ],
    "levelRequirementReason": "The Iron Leggings require at least level 5 to wear due to their complexity and enchanted nature.",
    "vendorReason": "Midlands is known for its mastery in ancient industrial magic, making these leggings a fitting addition to their inventory.",
    "shippingDetail": "These items are delivered via the Void Drifter Relay, ensuring secure and swift transportation directly from the forge.",
    "usage": {
      "activation": "Once per short or long rest, you can activate 'Iron Tread' by making a successful DC 15 Strength (Athletics) check.",
      "duration": "Until the start of your next turn",
      "endsWhen": "The start of your next turn",
      "charges": "One use per short or long rest"
    },
    "priceReason": "The price reflects the item's rarity and the expertise required to craft such enchanted armor.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:14:37.099370+00:00",
    "aiReviewedAt": "2026-07-22T20:14:37.099370+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_mage_rod": {
    "id": "midlands_mechanical_mage_rod",
    "name": "Gear of the Iron Oracle",
    "description": "The Gear of the Iron Oracle is a cursed artifact forged from the bones of a forgotten war machine and the mind of a fallen mage. Its cold, steel body hums with necromantic energy, capable of channeling death into mechanical constructs. When wielded, it grants control over iron golems and enhances the user's strikes against machines by 10%, but at a cost: every use saps a fraction of its own vitality, causing it to gain +20% armor until the next turn.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage to mechanical enemies",
      "Summons ghostly iron golem for 1 round"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Iron Golem",
        "rules": "As a bonus action, you may summon a ghostly iron golem that lasts for 1 round. The golem can move and attack on your turn as part of your action. If the golem takes damage or if its hit points drop to 0, it dissipates immediately."
      },
      {
        "title": "Armor Boost",
        "rules": "When damaged by a critical hit or reduced to less than half its maximum hit points, the gear gains +20% armor until the start of your next turn. This effect can only activate once per long rest."
      }
    ],
    "levelRequirementReason": "To wield this cursed artifact, you must have the discipline and strength to control its malevolent power.",
    "vendorReason": "The Midlands are known for their dark artifacts and relics, and this cursed gear fits well within that tradition.",
    "shippingDetail": "This item is delivered with a spectral courier who ensures the artifact arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to summon golem; can only be used once per long rest due to armor boost effect.",
      "duration": "Summoned golem lasts for 1 round. Armor boost lasts until start of next turn.",
      "endsWhen": "Golem dissipates on damage or at the end of its turn; armor boost ends when the gear regains hit points or at the start of your next turn.",
      "charges": "Unlimited, but only one summon per long rest."
    },
    "priceReason": "The Gear of the Iron Oracle is a rare and dangerous artifact, balancing its power with a moderate price to ensure it remains within reach for capable adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:14:34.520620+00:00",
    "aiReviewedAt": "2026-07-22T20:14:34.520620+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_ointment": {
    "id": "midlands_mechanical_ointment",
    "name": "Mechanical Ointment of the Iron Hand",
    "description": "The Mechanical Ointment of the Iron Hand is a thick, gear-imbued salve that clings to metal surfaces like a second skin. Applied to weapons or armor, it not only grants temporary resistance against magical disintegration but also sharpens reflexes in moments of crisis. This salve was crafted by the industrious folk of Midlands using ancient alchemical secrets and modern forge techniques, making it both potent and reliable in times of need.",
    "price": 330,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Disintegration Resistance",
      "Enhanced Reflexes"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disintegration Resistance",
        "rules": "When applied to a weapon or armor, this salve reduces the magical disintegration damage by 40% for 1 minute. The effect ends if the item is removed from contact with the salve."
      },
      {
        "title": "Enhanced Reflexes",
        "rules": "For 30 seconds after application, the user gains +5 to their AC. This enhancement lasts until the start of your next turn or until you take an action on your turn."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and those who need immediate combat readiness without a steep level requirement.",
    "vendorReason": "Midlands is known for its innovative alchemical creations that blend ancient lore with modern techniques, making this salve one of their most popular items.",
    "shippingDetail": "Delivered within 3 days via Pipe Express's reliable couriers.",
    "usage": {
      "activation": "Apply as a bonus action to a weapon or piece of armor.",
      "duration": "1 minute for disintegration resistance, 30 seconds for enhanced reflexes.",
      "endsWhen": "The effects end when the salve is no longer in contact with the item.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects the item's potent magical properties and its utility for beginners without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T20:15:04.109837+00:00",
    "aiReviewedAt": "2026-07-22T20:15:04.109837+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_satchel": {
    "id": "midlands_mechanical_satchel",
    "name": "The Gears of the Unseen",
    "description": "The Gears of the Unseen is a satchel crafted from salvaged metal and leather from the Iron Legion’s abandoned factories. It houses an assortment of tools, including a hidden cogwheel that can be inserted into any lock—no matter how resilient the steel. This arcane device grants you a 20% chance to find concealed gear in locked chests and allows for the repair or upgrade of any gear item, provided it is at least 75% condition.",
    "price": 1500,
    "icon": "🛠",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+20% chance to locate hidden gear",
      "Repair/upgrade gear (requires condition ≥ 75%)"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Locate Concealed Gear",
        "rules": "When you attempt to find a hidden mechanism in a locked chest, roll a D20. On a result of 15 or higher, you successfully locate it."
      },
      {
        "title": "Repair/Upgrade Gear",
        "rules": "You may use the satchel to repair or upgrade any gear item with at least 75% condition. This action requires an hour and expends one charge from the satchel. The repaired item gains +1d4 additional hit points, but not above its maximum capacity."
      }
    ],
    "levelRequirementReason": "The Gears of the Unseen is designed for beginners to use basic lockpicking and gear repair techniques.",
    "vendorReason": "Midlands specializes in salvaged goods and tools, making The Gears of the Unseen a fitting addition to their inventory.",
    "shippingDetail": "Standard delivery with Koopa Postal, arriving within one week.",
    "usage": {
      "activation": "As an action or bonus action (your choice)",
      "duration": "Instantaneous for locating gear; one hour to repair/upgrade gear",
      "endsWhen": "The satchel is empty of charges or destroyed in combat",
      "charges": "5 uses, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's utility without being game-breaking.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T20:14:53.071381+00:00",
    "aiReviewedAt": "2026-07-22T20:14:53.071381+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_soul": {
    "id": "midlands_mechanical_soul",
    "name": "The Soul of the Iron Maw",
    "description": "The Soul of the Iron Maw is a mechanical soul crafted from the central forge of Aegis Command, pulsing with the fiery essence of industrial might. When donned, it resonates with the fury of forges, allowing its wielder to deliver devastating blows that tear through armor like hot metal through cold steel. Its wearer gains an uncanny knack for exploiting enemy defenses, enhancing critical hits against armored foes and triggering mechanical overloads with alarming frequency.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+50% critical hit chance against armored targets",
      "Trigger mechanical overload on critical hits"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Critical Overload",
        "rules": "When the wearer scores a critical hit against an armored target, they have advantage on their next attack roll. This effect lasts until the start of their next turn."
      },
      {
        "title": "Armor Piercing",
        "rules": "The wearer gains +50% bonus to critical hit chance against armored targets and deals +15% additional damage on critical hits."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to wield effectively, ensuring that the item's power is balanced with player growth.",
    "vendorReason": "Midlands is renowned for their expertise in mechanical and industrial items, making them the perfect vendor for this unique artifact.",
    "shippingDetail": "Ships via Void Drifter Relay with a standard delivery time of 7 days.",
    "usage": {
      "activation": "Instantaneous activation upon donning; no further action required.",
      "duration": "Until the start of your next turn after scoring a critical hit against an armored target.",
      "endsWhen": "The effect ends when the wearer scores another critical hit or until their next turn.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's powerful effects without overshadowing other gear options.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:15:01.991970+00:00",
    "aiReviewedAt": "2026-07-22T20:15:01.991970+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_soul_cloth": {
    "id": "midlands_mechanical_soul_cloth",
    "name": "Steelheart Garment",
    "description": "The Steelheart Garment is a heavy, woven fabric of recycled steel and iron thread, imbued with the soul of a forgotten automaton. This vestment feels alive as it clings to your form, its metallic threads humming with latent energy. Wearing this garment grants you resilience and mechanical prowess; it seems to anticipate danger, reinforcing your defenses when you need them most. The fabric whispers the secrets of past gears and pistons, lending you a +15% bonus to defense against mechanical damage and a 10% chance to resist being disabled by machinery.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% armor bonus against mechanical damage",
      "10% resistance to disable effects from mechanics"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mechanical Resilience",
        "rules": "While wearing the Steelheart Garment, you gain a +15% bonus to your AC when dealing with mechanical attacks or damage. This effect is always active as long as you are in contact with the garment."
      },
      {
        "title": "Machinery Resistance",
        "rules": "You have a 10% chance to resist being disabled by any machinery that attempts to disable you, such as traps or automated devices. This effect applies once per long rest."
      }
    ],
    "levelRequirementReason": "The Steelheart Garment's intricate design and the soul of a forgotten automaton require a proficient character with at least 5 levels in any class to properly harness its power.",
    "vendorReason": "Midlands, known for their craftsmanship and recycling efforts, are the perfect purveyors of this unique item, blending ancient technology with modern ingenuity.",
    "shippingDetail": "The Steelheart Garment is carefully packed in a specialized crate to ensure it arrives intact. The courier promises safe handling but cannot guarantee against mechanical mishaps during transit.",
    "usage": {
      "activation": "Passive effect, always active as long as the garment is worn.",
      "duration": "Permanent until removed or destroyed",
      "endsWhen": "The garment is removed from your body or it is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Steelheart Garment's unique construction and the spirit of a forgotten automaton make it a rare find, balancing its power with an appropriate XP cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:15:36.110129+00:00",
    "aiReviewedAt": "2026-07-22T20:15:36.110129+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_soul_core": {
    "id": "midlands_mechanical_soul_core",
    "name": "Mechanical Soul Core",
    "description": "The Mechanical Soul Core is a pulsating crystal core embedded with intricate gears and slag. When worn, it synchronizes with your heartbeat, amplifying your physical endurance and combat focus. It hums in rhythm with your pulse, providing a steady boost when you need it most. This forge-made core enhances melee attacks with the precision of a finely tuned machine, increasing critical strike chances and allowing for an extra action per turn up to three times.",
    "category": "equipment",
    "price": 1500,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+10% chance to critically strike",
      "Extra Action Per Turn"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Critical Strike Boost",
        "rules": "When you make a melee attack, there is a +10% chance to score a critical hit. This effect does not stack with other sources of critical chance."
      },
      {
        "title": "Extra Action",
        "rules": "You can take an additional action per turn up to three times while wearing the Mechanical Soul Core. After using this ability, you must finish a short or long rest before using it again."
      }
    ],
    "levelRequirementReason": "The core's intricate design and advanced mechanisms require a certain level of mastery to wield effectively.",
    "vendorReason": "Midlands is known for its expertise in crafting durable, functional equipment that enhances physical prowess.",
    "shippingDetail": "The item arrives fully charged and ready for use. However, it requires a special handling protocol to maintain its integrity during transit.",
    "usage": {
      "activation": "Passive effect while worn.",
      "duration": "Instantaneous per action or extra turn usage.",
      "endsWhen": "Exhausted after three uses; requires rest to recharge.",
      "charges": "3"
    },
    "priceReason": "The Mechanical Soul Core is priced at 1000 XP as its advanced design and forge-made craftsmanship make it a valuable asset for combat.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:15:17.111031+00:00",
    "aiReviewedAt": "2026-07-22T20:15:17.111031+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_talisman": {
    "id": "midlands_mechanical_talisman",
    "name": "The Gear of the Crimson Mechanist",
    "description": "The Gear of the Crimson Mechanist is a cursed talisman, its gears and cogs forged from the twisted remnants of the Iron Legion's forgotten clockwork engineers. When donned, it pulses with mechanical energy, granting the wielder the arcane ability to disrupt machinery and armor, causing minor structural damage to foes. The wearer must heed this talisman’s wrath, for each use saps their vitality, draining 10% of their stamina over time.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Gear Lock",
      "Disruptive Pulse"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Gear Lock",
        "rules": "The wielder may attempt a concentration check (DC 15) to cause an enemy's machinery or armor to malfunction for 3 turns. If successful, the target suffers a -2 penalty to attack rolls and saving throws until the end of their next turn."
      },
      {
        "title": "Disruptive Pulse",
        "rules": "Each activation drains 10% of the user’s stamina. The item can be used once per long rest, ensuring the wielder conserves their strength."
      }
    ],
    "levelRequirementReason": "The Gear of the Crimson Mechanist requires a minimum level to harness its mechanical and arcane energies.",
    "vendorReason": "Midlands, known for their deep lore on ancient artifacts, is the only vendor capable of providing this cursed relic.",
    "shippingDetail": "The Gear arrives under a cloak of darkness and shadow, ensuring it reaches its destination without attracting unwanted attention.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "Ends when the target completes their next turn or is successfully dispelled by any means.",
      "charges": "Once per long rest"
    },
    "priceReason": "The Gear of the Crimson Mechanist requires a significant amount of XP due to its cursed nature and unique effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:15:46.713033+00:00",
    "aiReviewedAt": "2026-07-22T20:15:46.713033+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_tongue": {
    "id": "midlands_mechanical_tongue",
    "name": "Geargrind Tongue",
    "description": "The Geargrind Tongue is a rusted iron tongue shaped like a complex gear, its teeth etched with ancient runes of the forge. When whispered to, it emits a low hum that resonates within mechanical hearts, whispering secrets of the blacksmiths' craft. Upon activation, this enchanted tongue grants temporary immunity to mind control and enhances mechanical skill checks by 10%. The whispers of the Geargrind Tongue are said to come from the very forge spirits themselves, lending it a rare and coveted status among artisans.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Mechanical Skills",
      "Immunity to Mind Control"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Mechanical Skills",
        "rules": "When activated as an action, the Geargrind Tongue grants a +10% bonus to mechanical skill checks for 1 hour. The effect ends if the user's next mechanical skill check fails or if they rest for more than 8 hours."
      },
      {
        "title": "Immunity to Mind Control",
        "rules": "The Geargrind Tongue grants temporary immunity to all mind control and compulsion effects for a duration of 1 hour. This effect ends when the user's next action is taken or if they are subjected to another mind control effect."
      }
    ],
    "levelRequirementReason": "The Geargrind Tongue requires no level as its mystical resonance can be felt by even the most novice artisan.",
    "vendorReason": "Midlands, a haven for artisans and blacksmiths, is known to stock rare tools of the trade like the Geargrind Tongue.",
    "shippingDetail": "The Boo Spectral Mail ensures swift delivery but may cause mild fright upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "Next mechanical skill check fails or the user rests for more than 8 hours, subjected to another mind control effect, or their next action is taken",
      "charges": "Unlimited"
    },
    "priceReason": "The Geargrind Tongue's price reflects its rare crafting materials and the mystical enchantments that imbue it with its unique properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:15:48.785590+00:00",
    "aiReviewedAt": "2026-07-22T20:15:48.785590+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_torch": {
    "id": "midlands_mechanical_torch",
    "name": "Iron Tongue Torch",
    "description": "The Iron Tongue Torch is a forge-bred lantern whose flame dances with the fury of a broken gear and the heat of a steel forge. Its light pierces through shadows, revealing hidden mechanisms and trap triggers within a 30-foot radius, making it an invaluable tool for explorers and engineers alike. This torch not only illuminates but also tempers the strength of mechanical foes by dealing 30% bonus damage to them.",
    "price": 1500,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Mechanical Vulnerability",
      "Revealing Light"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Vulnerability",
        "rules": "When used, this torch deals an additional 30% damage to mechanical enemies. The effect lasts until the end of the next long rest."
      },
      {
        "title": "Revealing Light",
        "rules": "This torch illuminates a 30-foot radius, revealing hidden mechanisms and trap triggers within its range. This effect is instantaneous and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "The Iron Tongue Torch's basic functionality makes it accessible to players of any level.",
    "vendorReason": "Midlands, known for their expertise in mechanical devices and engineering, naturally stocks this versatile tool.",
    "shippingDetail": "Delivered via Lakitu Drone within a day, ensuring timely arrival of this essential item.",
    "usage": {
      "activation": "Instantaneous use; no action required for the initial activation or duration.",
      "duration": "Until the end of the next long rest.",
      "endsWhen": "The torch's effect ends at the start of your next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide a significant advantage in combat and exploration without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T20:15:43.731500+00:00",
    "aiReviewedAt": "2026-07-22T20:15:43.731500+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanical_tunic": {
    "id": "midlands_mechanical_tunic",
    "name": "Gears of the Iron Throne",
    "description": "The Gears of the Iron Throne is a segmented tunic encased in rusted cogwork and hydraulic pistons. This tunic hums with mechanical energy, its gears grinding as you move. Worn by the keepers of heavy burdens, it grants +15% damage reduction from blunt or crushing attacks and enhances your movement speed while carrying heavy items by 10%. When struck in combat, there's a 20% chance that the next attack made against the wearer will deal an additional 1d6 damage.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% Damage Reduction",
      "Enhanced Movement Speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gear Rumble",
        "rules": "When struck in melee combat, there is a 20% chance that the next attack made against the wearer will deal an additional 1d6 damage. This effect can only occur once per short or long rest."
      },
      {
        "title": "Enhanced Movement Speed",
        "rules": "While carrying heavy items (objects weighing over 50 pounds), your speed increases by 10 feet until the start of your next turn. This effect is passive and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "The Gears of the Iron Throne are suitable for all adventurers, as they provide immediate assistance in heavy labor.",
    "vendorReason": "Midlands is known for its robust and durable equipment, making them a reliable vendor for such a resilient item.",
    "shippingDetail": "Ships via the ghostly courier, ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Passive effect; does not require an action.",
      "duration": "Instantaneous and ongoing while carrying heavy items.",
      "endsWhen": "Rests or when struck in combat (Gear Rumble only).",
      "charges": "Unlimited"
    },
    "priceReason": "The Gears of the Iron Throne strike a balance, providing immediate utility and resilience without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:15:51.765911+00:00",
    "aiReviewedAt": "2026-07-22T20:15:51.765911+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_bow": {
    "id": "midlands_mechanized_bow",
    "name": "Mechanized Bow of the Forge",
    "description": "The Mechanized Bow of the Forge is a marvel of medieval engineering. Its iron gears hum with steam, and each shot fires molten steel bolts that can pierce through three enemy units in one go. When wielded near an iron structure, its reload time drops by nearly half, allowing for rapid fire against fortified positions. Allies within 30 meters gain temporary hit points equal to the damage dealt by a successful shot.",
    "category": "equipment",
    "price": 5700,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Molten Steel Bolts",
      "Swift Reload Near Iron"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Molten Steel Bolts",
        "rules": "When used, this bow fires a bolt of molten steel that pierces up to three enemy units at once. It deals damage equal to 1d8 + the wielder's Strength modifier when hitting an enemy. Allies within a 30-foot radius gain temporary hit points equal to half the damage dealt (rounded down). This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Swift Reload Near Iron",
        "rules": "While near an iron structure, this bow's reload time is reduced by 40%. To qualify as 'near,' the wielder must be within 15 feet of the structure. This benefit lasts for the duration of a short rest and can only be used once per day."
      }
    ],
    "levelRequirementReason": "Requires proficiency in ranged weapons to effectively use this bow's powerful shots.",
    "vendorReason": "Midlands is known for its expertise in siege weaponry, and the Mechanized Bow of the Forge is a prime example of their craftsmanship.",
    "shippingDetail": "The bow requires special handling due to its delicate gears. It arrives fully assembled but must be checked by a blacksmith upon arrival.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous",
      "endsWhen": "After use or when the wielder moves more than 15 feet away from an iron structure (if applicable)",
      "charges": "Unlimited, but only one shot per short rest"
    },
    "priceReason": "Balanced at this price to reflect its rare and powerful nature while staying within the realm of reasonable value for a siege weapon.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:16:00.542906+00:00",
    "aiReviewedAt": "2026-07-22T20:16:00.542906+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_gloves": {
    "id": "midlands_mechanized_gloves",
    "name": "Mechanized Gloves of the Iron Hand",
    "description": "The Mechanized Gloves of the Iron Hand are grafted with piston-driven gauntlets, imbued with the relentless fury of a forgeheart core. These gloves allow the wearer to smash through steel doors with ease and crush enemy limbs in rhythmic mechanical fury. Each strike echoes like a factory bell, its clatter resonating through metal and flesh alike. The wearer's strikes are not just physical; they carry the weight of industrial might.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% attack speed",
      "Steel Door Smasher"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cranky Crush",
        "rules": "Each hit has a 10% chance to stun the target for 2 seconds and deal an additional 30% damage. This effect has a cooldown of 1 minute."
      },
      {
        "title": "Steel Door Smasher",
        "rules": "The wearer gains the ability to break through steel doors with ease, as if they were made of wood. This effect lasts for 1 hour and can be used once per day."
      }
    ],
    "levelRequirementReason": "Wielding these gloves requires a strong grasp of mechanics and brute strength.",
    "vendorReason": "Midlands is known for their mastery of mechanical devices, making them the perfect vendor for such powerful yet intricate items.",
    "shippingDetail": "Delivered by Boo Spectral Mail, these gloves arrive with a whisper and a creak, ensuring they reach their destination in one piece.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until used or the effect ends naturally",
      "endsWhen": "The effect ends when the target is stunned, after 1 minute of Cranky Crush cooldown, or at midnight on a new day.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other rare items, this glove set combines offensive prowess with unique utility features.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:00:51.820530+00:00",
    "aiReviewedAt": "2026-07-22T22:00:51.820530+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_greaves": {
    "id": "midlands_mechanized_greaves",
    "name": "Mechanized Greaves",
    "description": "The Mechanized Greaves are reinforced with steel and slag, their joints gleaming like molten metal under moonlight. Crafted in the heart of Midlands by blacksmiths who have forged legends, these greaves not only increase resilience against crushing damage but also grant a fleeting boost to speed when activated. Legends say that wearing them brings a warrior closer to the forge’s spirit, making their steps as light and sure as the wind.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resilience Against Crushing",
      "Enhanced Mobility"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resilience Against Crushing",
        "rules": "Activates when worn. The wearer gains a +40% bonus to AC against crushing damage for the duration of one short rest or until the greaves are removed."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "When activated, allows the wearer to gain a +5 movement speed for 3 seconds. This effect can be used once per long rest and is expended after use."
      }
    ],
    "levelRequirementReason": "These greaves are crafted with intricate but not overly complex magic, making them accessible to any capable warrior.",
    "vendorReason": "Midlands is renowned for its unmatched craftsmanship and the Mechanized Greaves embody this heritage perfectly.",
    "shippingDetail": "Pipe Express ensures swift delivery with their reliable service, guaranteeing timely arrival of these valuable greaves.",
    "usage": {
      "activation": "Activates when worn as equipment.",
      "duration": "Lasts for the duration of one short rest or until removed.",
      "endsWhen": "Exhausted after a long rest or when removed.",
      "charges": "Unlimited uses, but can only be used once per long rest."
    },
    "priceReason": "The Mechanized Greaves are priced at 1000 XP due to their rare materials and the craftsmanship required for their intricate design.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:37:27.689081+00:00",
    "aiReviewedAt": "2026-07-23T16:37:27.689081+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_heart": {
    "id": "midlands_mechanized_heart",
    "name": "Mechanized Heart",
    "description": "The MechHeart, a pulsing iron core from the Legion’s first forge, grants a steady mechanical pulse that bolsters endurance and resilience. Its ticking heart is said to echo the last scream of a forgotten war machine, resonating with the very essence of its creator's might. Worn as an amulet, it provides a +20% stamina regeneration bonus, bolstering your body’s recovery from fatigue. The core also offers +15% armor penetration, ensuring that even the most resilient foes feel the full force of your attacks.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Stamina Regeneration",
      "+15% Armor Penetration"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stamina Regeneration Boost",
        "rules": "While wearing the MechHeart, you gain a +20% bonus to your stamina regeneration. This effect is passive and does not require any action from you."
      },
      {
        "title": "Armor Penetration",
        "rules": "When you attack with a weapon while wearing the MechHeart, you gain a +15% chance to ignore an equal amount of enemy armor class as if it were reduced by 15. This effect is active and lasts until your next long rest."
      }
    ],
    "levelRequirementReason": "The complexity of the MechHeart's mechanism requires a minimum character level to properly harness its power.",
    "vendorReason": "Midlands are renowned for their deep understanding of mechanical and historical artifacts, making them the perfect vendor for such an item.",
    "shippingDetail": "The Shy Guys promise safe delivery within a week, but they do not provide tracking or insurance for this high-risk shipment.",
    "usage": {
      "activation": "Passive",
      "duration": "Until your next long rest",
      "endsWhen": "At the end of your next long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The MechHeart's balanced price reflects its unique combination of stamina regeneration and armor penetration, providing a significant but not overpowered advantage to players.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:16:17.797642+00:00",
    "aiReviewedAt": "2026-07-22T20:16:17.797642+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_helm": {
    "id": "midlands_mechanized_helm",
    "name": "Mechanized Helm",
    "description": "The Mechanized Helm is a helm forged from the last remnants of a war machine's skull. It grants you enhanced armor and a mechanical sense of direction. The visor glows with the Legion’s old code, whispering the names of the fallen as it channels the spirit of the battlefield. This helm not only boosts your defenses but also heightens your awareness in combat, making you less likely to be caught off guard.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% armor",
      "Enhanced Sense of Direction"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Armor",
        "rules": "The wearer gains +30% bonus to AC. This effect is passive and does not require activation."
      },
      {
        "title": "Sense of Direction",
        "rules": "While wearing this helm, you have advantage on saving throws against being disoriented or confused by environmental effects. This lasts until the start of your next turn after the helm is removed."
      }
    ],
    "levelRequirementReason": "The helm's complex mechanisms require a basic understanding of mechanical systems.",
    "vendorReason": "Midlands sells relics and artifacts from their region, including this helm’s unique war machine origins.",
    "shippingDetail": "The helm is fragile and may take an additional day for special handling during transit.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous, lasts until the start of your next turn after removal",
      "endsWhen": "The helm is removed from your head",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item with unique passive abilities and historical significance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:16:11.837617+00:00",
    "aiReviewedAt": "2026-07-22T20:16:11.837617+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_helmet": {
    "id": "midlands_mechanized_helmet",
    "name": "Mechanized Helm of the Iron Crown",
    "description": "The Mechanized Helm of the Iron Crown hums with the relentless pulse of war machines, its surface etched with runes that shimmer like the gears of an ancient clockwork heart. This helmet grants tactical vision, allowing you to spot hidden enemies and anticipate foes' movements. In prolonged combat, it boosts your resolve, reducing fatigue and enhancing endurance, as if the very crown itself channels the strength of the Regal Empire’s warriors into your veins.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Tactical Vision",
      "Endurance Boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Tactical Vision",
        "rules": "The wearer gains a +10 bonus to Perception checks for detecting hidden enemies and can see through minor concealments within 30 feet. This effect is active as long as the helmet is worn, but its benefit halves after 1 hour of continuous use."
      },
      {
        "title": "Endurance Boost",
        "rules": "While wearing this helm, you have advantage on saving throws against exhaustion and can recover hit points from resting at a rate of 20% faster. This effect lasts until the start of your next short or long rest, but it is limited to once every 1d4 days."
      }
    ],
    "levelRequirementReason": "The helm's intricate clockwork and regal runes require a certain level of experience and skill to wield effectively.",
    "vendorReason": "Midlands, known for its mastery in crafting war machines, is the only vendor capable of producing such an artifact imbued with the essence of their empire’s might.",
    "shippingDetail": "Delivered within a week via Pipe Express; delicate handling required to ensure the helm's mechanisms remain intact.",
    "usage": {
      "activation": "Passive effect while worn",
      "duration": "Until end of next short or long rest, or until removed",
      "endsWhen": "The start of your next short or long rest, or when removed from wear",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect the item's unique combination of tactical and endurance benefits, alongside its intricate craftsmanship and historical significance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:16:37.478382+00:00",
    "aiReviewedAt": "2026-07-22T20:16:37.478382+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_iron_glove": {
    "id": "midlands_mechanized_iron_glove",
    "name": "Iron Gauntlet of the Ironborn",
    "description": "The Iron Gauntlet of the Ironborn is a relic forged in the heart of the last central forge of the Iron Legion, its steel tempered by the very essence of industrial might. This gauntlet grants resistance to blunt force damage and allows its wearer to channel potent mechanical energy into their strikes. When first striking an enemy each turn, it unleashes a surge of industrial power that has a 15% chance to stun them for 2 seconds.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "-Blunt Force Resistance",
      "Industrial Shock"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Industrious Strikes",
        "rules": "When the gauntlet's wearer first strikes an enemy each turn, there is a 15% chance to cause Industrial Shock (a temporary stun lasting for 2 seconds). This effect has no save DC and can occur once per turn."
      },
      {
        "title": "Blunt Force Resistance",
        "rules": "The gauntlet grants the wearer resistance to blunt force damage. This provides a +10 AC bonus against all bludgeoning attacks, which stacks with any other form of resistance or immunity the wearer might have."
      }
    ],
    "levelRequirementReason": "This gauntlet is designed for warriors and knights who are already familiar with melee combat.",
    "vendorReason": "Midlands has a long-standing relationship with the Iron Legion, making their wares highly sought after in this region.",
    "shippingDetail": "The gauntlet is shipped via spirit courier to ensure it arrives in pristine condition and imbued with the last remnants of its forge.",
    "usage": {
      "activation": "Instantaneous effect activated on first strike each turn.",
      "duration": "Persistent until worn off by damage or removed.",
      "endsWhen": "The gauntlet is damaged enough to render it inactive, at which point it must be repaired or replaced.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Crafted from the last steel of a legendary forge and imbued with industrial might, this gauntlet is priced high but remains within reach for seasoned warriors.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:16:31.173043+00:00",
    "aiReviewedAt": "2026-07-22T20:16:31.173043+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_iron_hood": {
    "id": "midlands_mechanized_iron_hood",
    "name": "Mechanized Iron Hood",
    "description": "The Mechanized Iron Hood is a reinforced iron helm encased with whispering gears and adorned with intricate cogs. This helmet not only shields its wearer from industrial hazards but also grants them the ability to remotely control nearby machinery, making it indispensable for those who command factories or work in hazardous environments. The hood hums with mechanical life, drawing power from the very machines around you, thus enhancing your control over them and amplifying their performance by 15%. It is a rare find among the Midlands, where industrial ingenuity meets ancient craftsmanship.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Armor Penetration",
      "Remote Machinery Control"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Armor Penetration",
        "rules": "The wearer gains a +20% bonus to their Armor Class (AC) against mechanical enemies. This effect lasts until the end of your next turn."
      },
      {
        "title": "Remote Machinery Control",
        "rules": "As an action, you can activate this feature and remotely control one nearby machine for 10 seconds. The machine must be within 50 feet and unattended. You can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 3 to effectively control the complex machinery and harness the full potential of this helmet.",
    "vendorReason": "The Midlands are renowned for their industrial prowess, and the Mechanized Iron Hood is a product of that expertise.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its reliable delivery even in the most hazardous conditions.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds per activation",
      "endsWhen": "The effect ends when you deactivate it or after 10 seconds",
      "charges": "Once per short rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the rare materials and advanced engineering required to produce such a helmet.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:16:45.950721+00:00",
    "aiReviewedAt": "2026-07-22T20:16:45.950721+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_iron_iron": {
    "id": "midlands_mechanized_iron_iron",
    "name": "Iron Crown of the Forge Lord",
    "description": "The Iron Crown of the Forge Lord is a molten steel crown forged in the heart of the Midlands, its surface etched with arcane runes that hum with industrial magic. It grants the wearer dominion over iron and machinery, allowing them to summon Gear Spirits from the very gears of war. When the crown's power surges, it can reduce enemy armor by half for a fleeting moment, turning the tide of battle in your favor.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summon Gear Spirit",
      "Reduce Enemy Armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Gear Spirit",
        "rules": "As an action, you can summon one Gear Spirit that lasts for 5 seconds. The Gear Spirit deals 200% damage to enemies within a 10-foot radius. The spirit is immune to non-magical attacks."
      },
      {
        "title": "Reduce Enemy Armor",
        "rules": "Once per short rest, you can reduce the armor class of one enemy by 50% for 3 seconds as a reaction to an attack. This effect has no saving throw and does not expend charges or reset on rests."
      }
    ],
    "levelRequirementReason": "The Iron Crown's power is accessible early, allowing even novice blacksmiths to harness industrial magic.",
    "vendorReason": "The Midlands are the birthplace of this crown and its ironminds are its custodians, preserving the legacy of their craft.",
    "shippingDetail": "Delivered via a Rakasha's ethereal plane journey, ensuring safe arrival but not instantaneous delivery.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds for Gear Spirit; Instantaneous for Armor Reduction",
      "endsWhen": "Ends when the Gear Spirit dissipates or the enemy is no longer within range of the armor reduction effect",
      "charges": "Unlimited"
    },
    "priceReason": "The crown's rarity and unique industrial magic make it a valuable commodity, balancing its powerful effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:17:18.514858+00:00",
    "aiReviewedAt": "2026-07-22T20:17:18.514858+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_mantle": {
    "id": "midlands_mechanized_mantle",
    "name": "Mechanized Mantle",
    "description": "The Mechanized Mantle is a segmented cloak of segmented metal and leather, powered by a network of gears and pistons. It extends from your shoulders like an exoskeleton, allowing you to traverse industrial ruins with unnatural agility. In smoke-filled zones, it grants temporary flight for 20 seconds, disrupting enemies within 5 meters who must succeed on a DC 14 Dexterity saving throw or be stunned until the end of their next turn. The cloak also enhances stealth in mechanical environments, increasing your chance to remain unseen by +5%.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporary Flight",
      "Enhanced Stealth"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporary Flight",
        "rules": "Activate as a bonus action within a smoke-filled zone. Grants temporary flight for 20 seconds, during which you are immune to falling damage and have advantage on Dexterity (Stealth) checks. Ends when the effect duration expires or you exit the smoke-filled zone."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "While in a mechanical environment, your chance of remaining unseen is increased by +5%. This bonus lasts for 1 hour per level of the wearer and resets after a short rest. No saving throw or action required."
      }
    ],
    "levelRequirementReason": "The wearer must have sufficient experience to handle the intricate controls and mechanisms of the mantle.",
    "vendorReason": "Midlands is known for its mastery in mechanical engineering, making it a fitting vendor for such an item.",
    "shippingDetail": "Ships via Boo Spectral Mail within 3 days of purchase. Requires special handling due to the delicate nature of the mantle's components.",
    "usage": {
      "activation": "Bonus action",
      "duration": "20 seconds or until you exit a smoke-filled zone",
      "endsWhen": "Effect duration expires or you leave the smoke-filled area",
      "charges": "Unlimited"
    },
    "priceReason": "The mantle's rarity and unique mechanics justify its price, offering both mobility and stealth enhancements.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T20:17:00.399856+00:00",
    "aiReviewedAt": "2026-07-22T20:17:00.399856+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_martyr": {
    "id": "midlands_mechanized_martyr",
    "name": "Mechanized Martyr",
    "description": "The Mechanized Martyr, a rusted relic of war, hums ominously as it channels the final struggles of those who fought and fell. When activated, it unleashes a mechanical barrage that tears through foes with devastating precision, but at a cost—its gears grind to a halt, leaving it weak for hours. This forgotten machine was once part of the Liberated Toads' arsenal before they dismantled it into pieces of unyielding metal and lore.",
    "price": 1500,
    "icon": "💀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1500 damage in a burst",
      "-75% enemy defense for 2 turns"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Devastating Burst",
        "rules": "The Mechanized Martyr unleashes an explosive burst of mechanical fury when activated as a bonus action. This attack deals 1500 damage to one target and reduces their armor class by 75% for the next two turns. The user must make a DC 16 Constitution saving throw or take 750 points of non-lethal damage."
      },
      {
        "title": "Self-Destruction",
        "rules": "After activation, the Mechanized Martyr is reduced to a pile of scrap metal and cannot be used again until it has been repaired. It regains functionality after one hour."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield its destructive power.",
    "vendorReason": "Midlands merchants have a knack for salvaging and repurposing old war machines into useful artifacts.",
    "shippingDetail": "Delivered by spirit courier, the item arrives intact but requires immediate setup before use.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (but has a cooldown of one hour)",
      "endsWhen": "The user fails their Constitution saving throw or after two turns if the target is still affected.",
      "charges": "Unlimited, but requires repair after use"
    },
    "priceReason": "Balanced at 1000 XP as a rare item with significant power and limited usage.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:00:54.628903+00:00",
    "aiReviewedAt": "2026-07-22T22:00:54.628903+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_sword": {
    "id": "midlands_mechanized_sword",
    "name": "Mechanized Blade of the Unbroken Line",
    "description": "The Mechancized Blade of the Unbroken Line is a relic forged from the heart of a Regal Empire war-mech. Its gears and pistons hum with industrial might, channeling the fury of metal into every strike. When engaged in combat against mechanical foes, it unleashes a barrage of precision strikes that enhance your attack speed by 30%. Should you find yourself targeted, its reinforced alloy counters with a surge of kinetic energy, dealing an additional 50% damage for 3 seconds to your attacker.",
    "category": "equipment",
    "price": 1500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% Damage vs Mechanical Enemies",
      "Grants 30% Bonus Attack Speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Precision",
        "rules": "When the Mechancized Blade engages in combat with a mechanical enemy, it grants the wielder +25% damage against such foes. This effect lasts until the start of your next turn."
      },
      {
        "title": "Kinetic Counterattack",
        "rules": "Upon being struck by an attack while wearing this blade, you may immediately make a melee weapon attack as a reaction. If successful, the target takes an additional 50% damage for 3 seconds. The blade can only be used in this manner once per short or long rest."
      }
    ],
    "levelRequirementReason": "This relic is crafted from the most advanced war-mech technology and requires a warrior with significant combat experience to wield it effectively.",
    "vendorReason": "The Midlands are renowned for their expertise in forging ancient and enchanted weapons, making them the perfect vendor for this historical relic.",
    "shippingDetail": "Due to its fragile nature, this item is shipped with utmost care using custom metal crates to prevent damage during transit.",
    "usage": {
      "activation": "Instantaneous reaction upon being struck by an attack.",
      "duration": "3 seconds of additional damage for the attacker when reacting.",
      "endsWhen": "At the start of your next turn or when the rest period ends.",
      "charges": "One use per short or long rest"
    },
    "priceReason": "This relic is considered a rare find, balancing its historical value and technological prowess with an appropriate XP cost.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T20:17:09.033435+00:00",
    "aiReviewedAt": "2026-07-22T20:17:09.033435+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_talisman": {
    "id": "midlands_mechanized_talisman",
    "name": "Mechanized Talisman of the Iron Crown",
    "description": "The Mechanized Talisman of the Iron Crown is a cursed cogwheel crowned with a regal iron crown, forged in the fires of war-torn Midlands. It hums with the spirit of an ancient siege engineer and grants its bearer tactical advantage in urban conflicts. When activated, it imbues the wearer with the resilience to withstand relentless attacks, granting +15% damage resistance against enemy siege engines and +10% movement speed within industrial zones. Each use channels the gears of war, dealing bonus damage to armored foes.",
    "category": "equipment",
    "price": 5800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% damage resistance vs. siege engines",
      "+10% movement speed in industrial zones"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Gears of War",
        "rules": "When activated as an action, this effect grants the wearer +15% damage resistance against all attacks from siege engines for 1 minute. Each use deals an additional 2d6 bonus damage to armored enemies within a 30-foot radius. This effect can be used once per long rest."
      },
      {
        "title": "Urban Swift",
        "rules": "While in industrial zones, the wearer gains +10% movement speed and the ability to move through difficult terrain without penalty for 1 hour. This effect ends if the wearer leaves an industrial zone or is hit by an attack."
      }
    ],
    "levelRequirementReason": "The Talisman's complex mechanisms require a proficient user with tactical knowledge.",
    "vendorReason": "Midlands, known for its war-torn history and expertise in siege warfare, offers this relic to those who seek advantage on the battlefield.",
    "shippingDetail": "The package is delivered by spectral couriers, ensuring it arrives swiftly but with a touch of the uncanny.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute for Gears of War; 1 hour for Urban Swift",
      "endsWhen": "Ends when the effect duration expires or the Talisman is destroyed by an attack.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "This rare talisman's price reflects its powerful abilities and the difficulty of obtaining such a relic.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T20:17:27.123378+00:00",
    "aiReviewedAt": "2026-07-22T20:17:27.123378+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mechanized_tongue": {
    "id": "midlands_mechanized_tongue",
    "name": "Mechanized Tongue",
    "description": "The Mech-Tongue, a marvel of alchemical ingenuity and blacksmith prowess, is a steel tongue encased in intricate wires that can speak the language of machines. It grants invisibility to mechanical eyes when commanded, allowing its wearer to evade detection by automatons or goblinish millhands. This tongue not only commands basic machinery with a voice but also restores 10% of the user's hit points whenever it is used to converse with a machine.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Voice Command",
      "Invisibility to Machines"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Voice Command",
        "rules": "As an action, the wearer can command basic machinery within 30 feet. The effect lasts until the start of your next turn or until you speak with another machine. This does not provoke opportunity attacks."
      },
      {
        "title": "Invisibility to Machines",
        "rules": "The Mech-Tongue grants invisibility to mechanical detection for 1 minute when activated as a bonus action. It can be used once per long rest and requires line of sight between the user and the target area."
      }
    ],
    "levelRequirementReason": "This item requires a certain level to master its mechanics and integrate with machine languages.",
    "vendorReason": "Midlands is renowned for their technological prowess, making them the ideal vendor for such an advanced tool.",
    "shippingDetail": "Shipping is expedited via Boo Spectral Mail, ensuring this delicate item arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate invisibility; action to command machinery.",
      "duration": "1 minute for invisibility; until start of next turn for machine commands.",
      "endsWhen": "Use ends on the start of your next turn or when you speak with another machine.",
      "charges": "Rechargeable, once per long rest."
    },
    "priceReason": "The Mech-Tongue is priced at 1000 XP for its advanced capabilities and the skill required to use it effectively.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:17:37.184373+00:00",
    "aiReviewedAt": "2026-07-22T20:17:37.184373+00:00",
    "aiReviewVersion": 1
  },
  "midlands_medieval_torch": {
    "id": "midlands_medieval_torch",
    "name": "The Torch of the Iron Throne",
    "description": "The Torch of the Iron Throne is forged from the very steel of the fallen Iron Throne, its flames a symbol of forgotten glory and unfulfilled oaths. This relic casts a warm, golden glow that illuminates even the darkest corners, revealing hidden traps and mechanisms within a 30-foot radius. Touching it grants you +25% damage against undead creatures for the duration of your turn, but beware—its fire can also ignite flammable materials in its immediate vicinity.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% damage to undead",
      "Reveals hidden mechanisms within 30 feet"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Undead Damage Boost",
        "rules": "When you attack an undead creature, you deal +25% bonus damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Mechanism Revelation",
        "rules": "As a bonus action, you can point to a surface or area within 30 feet and gain insight into any hidden mechanisms or traps. You must succeed on a Wisdom (Perception) check with a DC of 15."
      }
    ],
    "levelRequirementReason": "The torch's power requires a moderate understanding of combat and lore to wield effectively.",
    "vendorReason": "Midlands, known for its scholarly and historical artifacts, is the keeper of such relics.",
    "shippingDetail": "Shipped via a spectral courier who delivers the torch with a slight delay due to its ethereal nature.",
    "usage": {
      "activation": "Bonus action for Mechanism Revelation; as part of an attack when dealing damage against undead",
      "duration": "Instantaneous; ends at the end of your next turn",
      "endsWhen": "Exhausted after one use per short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The torch's rarity and historical significance justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:17:31.877200+00:00",
    "aiReviewedAt": "2026-07-22T20:17:31.877200+00:00",
    "aiReviewVersion": 1
  },
  "midlands_medieval_treasure": {
    "id": "midlands_medieval_treasure",
    "name": "King’s Bloodstained Scroll",
    "description": "The King’s Bloodstained Scroll, a relic of a bygone era, is a vellum scroll covered in ancient runes that whisper tales of a fallen monarch’s final decree. When unrolled and read aloud, it grants temporary immunity to fear for 1 minute and allows the reader to command an ally within 30 feet with a whispered oath, compelling them to act on their behalf until the end of their next turn.",
    "price": 1500,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Command Ally",
      "Immunity to Fear"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Command Ally",
        "rules": "As an action, read aloud a whispered oath and choose one willing creature within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be compelled to act on your behalf until the end of their next turn."
      },
      {
        "title": "Immunity to Fear",
        "rules": "For 1 minute, you gain immunity to the fear condition and advantage on saving throws against being frightened. This effect ends if you take any damage during this time or if it is dispelled."
      }
    ],
    "levelRequirementReason": "The scroll’s power requires a certain level of experience to wield its effects without risk.",
    "vendorReason": "Midlands, with their extensive knowledge of ancient artifacts, are trusted dealers of such powerful relics.",
    "shippingDetail": "Due to the scroll’s fragile nature and historical significance, it is shipped via Koopa Postal’s express delivery service.",
    "usage": {
      "activation": "Action (read aloud)",
      "duration": "1 minute or until dispelled by damage",
      "endsWhen": "The scroll is destroyed if used twice in a single day",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The scroll’s rarity and historical importance justify its moderate price.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:01:26.415983+00:00",
    "aiReviewedAt": "2026-07-22T22:01:26.415983+00:00",
    "aiReviewVersion": 1
  },
  "midlands_meridian_cloak": {
    "id": "midlands_meridian_cloak",
    "name": "Shadowed Meridian Cloak",
    "description": "The Shadowed Meridian Cloak is crafted from the remnants of a noble's ceremonial robe, its dark weave absorbing ambient light and granting stealth in dimly lit industrial zones. This cloak not only allows wearers to slip past Iron Legion patrols unnoticed but also subtly distorts their silhouette, making them harder to detect by ranged attacks. Worn in the right conditions, it can even reduce the effectiveness of enemy ranged weapons, giving those who seek to remain unseen a crucial edge.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Advantage",
      "Ranged Weapon Disadvantage"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Advantage",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks in dimly lit industrial zones. This effect is active while the cloak is worn and ends when it is removed."
      },
      {
        "title": "Ranged Weapon Disadvantage",
        "rules": "Enemies within 30 feet have disadvantage on attack rolls against the wearer while they are wearing this cloak. This effect lasts for a number of rounds equal to half the wearer's level (rounded down), and it ends when the wearer is no longer in dimly lit areas or the cloak is removed."
      }
    ],
    "levelRequirementReason": "The cloak requires a higher-level character due to its complex weave and potent effects.",
    "vendorReason": "Midlands, known for their trade in rare artifacts and relics, offers this unique item crafted from noble remnants.",
    "shippingDetail": "Ships via Boo Spectral Mail with a guaranteed delivery within one week of purchase.",
    "usage": {
      "activation": "Passive effect while wearing the cloak.",
      "duration": "Instantaneous, ends when removed or in bright light.",
      "endsWhen": "The wearer is no longer in dimly lit areas or the cloak is removed.",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's rarity and unique effects justify its price, providing significant tactical advantage.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:17:46.451739+00:00",
    "aiReviewedAt": "2026-07-22T20:17:46.451739+00:00",
    "aiReviewVersion": 1
  },
  "midlands_metal_gear": {
    "id": "midlands_metal_gear",
    "name": "Ironspine Gauntlets",
    "description": "Forged from the iron spines of Onyx Hand's fallen warriors, these gauntlets are a grim reminder of the forsaken armory’s dark past. They grant +20% melee damage and reduce enemy armor by 10% for five seconds when attacked, making every blow feel like a strike against the very heart of their foes. With each clash, the metal groans as if echoing the cries of its creators, enhancing your combat prowess in close quarters.",
    "category": "equipment",
    "price": 5800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Melee Damage Boost",
      "Armor Reduction on Attack"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Melee Damage Boost",
        "rules": "The gauntlets grant +20% melee damage. This effect is passive and applies to all melee attacks while worn."
      },
      {
        "title": "Armor Reduction on Attack",
        "rules": "When the wearer takes damage from an attack, reduce the attacker's armor class by 10 for five seconds. The gauntlets must be struck in combat for this effect to activate."
      }
    ],
    "levelRequirementReason": "The Ironspine Gauntlets are crafted with advanced materials and techniques that require a high level of mastery.",
    "vendorReason": "Midlands is known for its expertise in armory and has the knowledge to handle such powerful relics.",
    "shippingDetail": "The gauntlets are delivered by Lakitu Drones, ensuring they arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect; requires the wearer to be engaged in melee combat for the armor reduction to activate.",
      "duration": "Instantaneous effect; lasts five seconds upon activation.",
      "endsWhen": "Expires after five seconds or when removed from combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The gauntlets are crafted from rare materials and advanced techniques, justifying their high price.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T20:18:28.281982+00:00",
    "aiReviewedAt": "2026-07-22T20:18:28.281982+00:00",
    "aiReviewVersion": 1
  },
  "midlands_millstone_tincture": {
    "id": "midlands_millstone_tincture",
    "name": "Millstone Tincture",
    "description": "The Millstone Tincture is a viscous, metallic elixir that exudes an oily sheen and whispers of gears and cogs. Sipped in times of industrial turmoil, it grants clarity to the mind and a touch of mechanical prowess, allowing one to dance gracefully among the Fractured Atrium's dissonant machinery. This tincture is said to have been brewed from the remnants of an ancient mill that once ground the very earth itself into harmony. It's a rare find, often shipped by the Void Drifter Relay, known for its expedient delivery through the fractured planes.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mechanical Mastery",
      "Trap Evasion"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Mastery",
        "rules": "For 1 hour after consuming this tincture, you gain +25% accuracy with mechanical weapons. This effect is active as long as you are within an industrial zone and does not require any action to activate."
      },
      {
        "title": "Trap Evasion",
        "rules": "While under the influence of this tincture, you have a +10% chance to avoid traps in industrial zones. This effect is active for 8 hours after consumption and requires no action."
      }
    ],
    "levelRequirementReason": "The Millstone Tincture's effects are subtle yet potent, making it accessible even to novice adventurers.",
    "vendorReason": "Midlands, known for its trade with the Fractured Atrium, frequently stocks this rare elixir.",
    "shippingDetail": "Delivered within a week of purchase, ensuring adventurers are well-prepared to face industrial challenges.",
    "usage": {
      "activation": "Passive effect upon consumption; no action required.",
      "duration": "1 hour for Mechanical Mastery, 8 hours for Trap Evasion.",
      "endsWhen": "Duration ends when the time expires or you consume another elixir of similar effects.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Millstone Tincture is crafted from rare mill remains and requires specialized brewing, making it a valuable but not overpriced item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:18:23.694311+00:00",
    "aiReviewedAt": "2026-07-22T20:18:23.694311+00:00",
    "aiReviewVersion": 1
  },
  "midlands_molten_core_potion": {
    "id": "midlands_molten_core_potion",
    "name": "Molten Core Elixir",
    "description": "The Molten Core Elixir is a vile, glowing elixir extracted from the heart of an ancient industrial furnace. Its fiery glow hints at the inferno it once fed. This potion grants temporary strength and heat resistance but comes with a price—consumers risk losing their sanity as the elixir's madness begins to take root within them. For 10 minutes, you gain +30% maximum hit points and 50% fire resistance. Enemies nearby have a 10% chance of being confused for 3 seconds.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Max HP Boost",
      "Fire Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Max HP Boost",
        "rules": "Consume as an action to gain +30% maximum hit points for 10 minutes. Ends when you finish a short or long rest."
      },
      {
        "title": "Fire Resistance",
        "rules": "Grants 50% fire resistance for 10 minutes. Ends if you take any cold damage, your concentration is broken, or you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "This potion can be consumed by adventurers of all levels but is particularly useful to lower-level characters who need immediate combat readiness.",
    "vendorReason": "The Midlands are known for their industrial prowess, making them the ideal place for such a potent elixir.",
    "shippingDetail": "Delivered within one week by Pipe Express; requires special handling to ensure the potion's potency remains intact during transit.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "10 minutes",
      "endsWhen": "Finish a short or long rest, take cold damage, or have concentration broken",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare materials and skilled labor required to distill this powerful but dangerous elixir.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:01:13.463715+00:00",
    "aiReviewedAt": "2026-07-22T22:01:13.463715+00:00",
    "aiReviewVersion": 1
  },
  "midlands_molten_gear_core": {
    "id": "midlands_molten_gear_core",
    "name": "Molten Gear Core",
    "description": "The Molten Gear Core, a pulsing heart of steel forged from the fiery furnace of the Iron Legion's final war machine, hums with untamed industrial fury. Its molten core glows with an otherworldly heat that can melt even the strongest armor upon contact. Activate it to channel raw forgepower into your strikes, dealing devastating damage to mechanical enemies and triggering a wave of searing blast that ripples outward in all directions.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔥",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+50% damage against mechanical foes",
      "Blast of the Forge"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Blast of the Forge",
        "rules": "When you hit a mechanical foe with a melee attack, it triggers an explosive wave that deals fire damage equal to twice your level plus your Strength modifier to all enemies within 5 feet. You can use this effect once per long rest."
      },
      {
        "title": "+50% Damage",
        "rules": "While wielding the Molten Gear Core, you deal +50% damage against mechanical enemies. This bonus does not stack with other sources of damage increase."
      }
    ],
    "levelRequirementReason": "The core's raw forgepower demands a seasoned fighter who can harness its volatile energy.",
    "vendorReason": "Midlands is known for their access to rare and exotic materials, making them the perfect vendor for this unique artifact.",
    "shippingDetail": "Due to its volatile nature, the Molten Gear Core must be shipped with special thermal insulation to prevent accidental activation during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when you stop making attacks or are incapacitated. You can use it once per short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This rare artifact combines the power of a legendary weapon with the unique properties of an ancient war machine, offering players a valuable and dangerous tool for combat.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T20:19:04.766348+00:00",
    "aiReviewedAt": "2026-07-22T20:19:04.766348+00:00",
    "aiReviewVersion": 1
  },
  "midlands_molten_heart_potion": {
    "id": "midlands_molten_heart_potion",
    "name": "Molten Heart Elixir",
    "description": "The Molten Heart Elixir is crafted from the very essence of a fallen warlord’s final breath, sealed in a vial that glows like molten iron. This potion burns hot within the drinker, fueling their resolve and granting them the strength to push through even the most grueling battles. Sipping it feels as though your veins are filled with liquid fire, but its fiery embrace grants you resilience against fatigue and enemies alike.",
    "price": 1500,
    "icon": "🧪",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Resolve Boost",
      "Unyielding Resolve"
    ],
    "vendor": "midlands",
    "shippedBy": "Swift Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Resolve Boost",
        "rules": "When consumed, the Molten Heart Elixir restores 200 hit points to the drinker. Additionally, it grants a +100 bonus to attack rolls for 1 minute."
      },
      {
        "title": "Unyielding Resolve",
        "rules": "The drinker gains the 'Unyielding' status effect for 2 turns, which provides immunity to being stunned or knocked down. This effect lasts until the start of your next turn after it ends."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to handle the potion’s potent effects.",
    "vendorReason": "The Midlands are known for their expertise in alchemy and have access to rare ingredients like those used in crafting this elixir.",
    "shippingDetail": "Shipped via Swift Courier, ensuring the potion arrives in its pristine condition.",
    "usage": {
      "activation": "Consume as a bonus action.",
      "duration": "1 minute for Resolve Boost; 'Unyielding' lasts 2 turns.",
      "endsWhen": "The effects expire or the drinker is incapacitated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its potent alchemical ingredients and rare crafting process.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T20:19:21.263551+00:00",
    "aiReviewedAt": "2026-07-22T20:19:21.263551+00:00",
    "aiReviewVersion": 1
  },
  "midlands_molten_marrow": {
    "id": "midlands_molten_marrow",
    "name": "Molten Marrow",
    "description": "The Molten Marrow, a pulsating core extracted from the heart of a forge-forged beast, glows with an otherworldly crimson light. When consumed, it awakens primal strength within you, granting temporary vitality and warping your perception of time during combat. For ten seconds, your regeneration increases by 30%, and your attacks strike faster—+25% attack speed. Additionally, there's a 10% chance for an enemy to experience a ‘Time Melt,’ where their actions are delayed by two critical seconds.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% regeneration over 10 seconds",
      "+25% attack speed during combat"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Regeneration Boost",
        "rules": "After consuming the Molten Marrow, you gain temporary hit point regeneration equal to +30% of your maximum hit points over a period of ten seconds. This effect cannot be used more than once per short or long rest."
      },
      {
        "title": "Time Melt",
        "rules": "When consumed, there is a 10% chance that you will cause an enemy to experience a ‘Time Melt’ for two critical seconds. During this time, the enemy’s actions are delayed by two seconds. This effect can only be triggered once per combat."
      }
    ],
    "levelRequirementReason": "The Molten Marrow's raw power requires a seasoned warrior to harness its full potential.",
    "vendorReason": "Midlands, known for their expertise in forge-forged beasts and artifacts, is the only reliable source for such potent items.",
    "shippingDetail": "The Molten Marrow requires special handling to ensure it remains potent during shipment.",
    "usage": {
      "activation": "Eaten as an action during combat.",
      "duration": "10 seconds of effect, followed by a 24-hour cooldown period before the next use.",
      "endsWhen": "The effect concludes after its duration or if you take any damage.",
      "charges": "Unlimited uses per day with a 24-hour rest between uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's potent abilities and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:18:56.400445+00:00",
    "aiReviewedAt": "2026-07-22T20:18:56.400445+00:00",
    "aiReviewVersion": 1
  },
  "midlands_molten_tallow": {
    "id": "midlands_molten_tallow",
    "name": "Molten Tallow of the Bloodsmith",
    "description": "The Molten Tallow of the Bloodsmith, a viscous and glowing substance born from the forgefires of the Iron Legion, coats weapons or armor in resilient molten fury. Applied to a weapon, it grants +30% melee damage for 30 seconds and provides +20% damage reduction against fire-based attacks. Upon contact with an enemy, it burns them for 1 second, dealing minor fire damage as it clings tenaciously to the metal it coats.",
    "price": 330,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+30% Melee Damage",
      "Damage Reduction from Fire Attacks"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Molten Fury",
        "rules": "When applied, the Molten Tallow grants +30% melee damage for 30 seconds. This effect is activated as a bonus action and ends when the tallow wears off or the item it's applied to is removed."
      },
      {
        "title": "Fire Resistance",
        "rules": "The Molten Tallow provides the wearer with +20% damage reduction against fire-based attacks for 30 seconds. This effect persists until the duration expires, and the tallow is no longer on the armor or weapon."
      }
    ],
    "levelRequirementReason": "This item's effects are moderate but useful early in a character's career.",
    "vendorReason": "The Midlands forgehouses have exclusive access to the Iron Legion's resources, making their wares highly sought after by adventurers.",
    "shippingDetail": ".pipe Express offers expedited delivery for this item, ensuring it arrives just in time before a pivotal battle.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds",
      "endsWhen": "The duration expires or the Molten Tallow is removed from the applied weapon or armor.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare and potent properties of the tallow, balanced to ensure it's a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:01:31.906841+00:00",
    "aiReviewedAt": "2026-07-22T22:01:31.906841+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mudcrusher_helm": {
    "id": "midlands_mudcrusher_helm",
    "name": "Mudcrusher Helm",
    "description": "The Mudcrusher Helm is a heavy, armored helm shaped like a crushing gear, its darkened steel gleaming with latent power. Laborers and siege masons swear by this helm for its resilience against blunt impacts, earning it the nickname 'the Unyielding Gear.' It grants wearers +20% to crushing damage dealt in melee attacks and reduces damage from blunt impacts by 15%. Additionally, there's a 10% chance each hit will shatter enemy armor, leaving foes vulnerable.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+20% Crushing Damage",
      "-15% Blunt Impact Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Crushing Strikes",
        "rules": "While wearing the Mudcrusher Helm, you gain a +20 bonus to your melee attack rolls that deal crushing damage. This effect is always active as long as you are wearing the helm."
      },
      {
        "title": "Blunt Impact Resistance",
        "rules": "The Mudcrusher Helm reduces the amount of blunt impact damage taken by 15%. This effect persists until you suffer a critical hit or remove the helm in combat."
      }
    ],
    "levelRequirementReason": "This helm is suitable for beginners and those who need immediate protection without advanced training.",
    "vendorReason": "Midlands' vendors specialize in practical, no-nonsense gear that works hard in labor-intensive environments.",
    "shippingDetail": "Delivered via the Void Drifter Relay with expedited service for adventurers in need of quick access to essential equipment.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent while worn, resets on removal or critical hit.",
      "endsWhen": "Critical hit or helm removed during combat.",
      "charges": "Unlimited"
    },
    "priceReason": "The Mudcrusher Helm offers significant combat advantages at a cost that aligns with its practical utility and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:19:11.218903+00:00",
    "aiReviewedAt": "2026-07-22T20:19:11.218903+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mudstone_binder": {
    "id": "midlands_mudstone_binder",
    "name": "Mudstone Binder",
    "description": "The Mudstone Binder is a compact, clay-bound tome that records the forgotten battles of the Iron Legion, its pages etched with the names of fallen warriors in iron-clad script. When activated by a scholar or historian, it whispers the secrets of these lost conflicts, revealing hidden lore and increasing one’s luck for lore-based quests by 50%. However, should an enemy witness its reading aloud in public, they may be struck by a wave of temporary paralysis, rendering them immobile for several rounds.",
    "price": 330,
    "icon": "📜",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Reveals hidden faction lore on use",
      "+50% Luck for lore-based quests"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Lore Revelation",
        "rules": "When activated by a scholar or historian, this tome reveals forgotten battles and secrets of the Iron Legion. The user gains advantage on Intelligence (History) checks related to the Iron Legion’s history for one hour."
      },
      {
        "title": "Lucky Luck Boost",
        "rules": "For every lore-based quest undertaken within an hour after using the Mudstone Binder, the user has a +50% chance of success. This effect is cumulative but does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners as it aids in learning and reveals faction secrets without requiring advanced combat skills.",
    "vendorReason": "The Midlands are home to many historians and scholars, making this tome a natural addition to their inventory.",
    "shippingDetail": "Delivered with utmost discretion; the delivery time may vary depending on courier availability.",
    "usage": {
      "activation": "Action",
      "duration": "One hour from activation",
      "endsWhen": "The duration expires or the user completes a lore-based quest",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item’s rarity and the significant advantage it provides in understanding forgotten battles.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:01:45.444228+00:00",
    "aiReviewedAt": "2026-07-22T22:01:45.444228+00:00",
    "aiReviewVersion": 1
  },
  "midlands_mudstone_ring": {
    "id": "midlands_mudstone_ring",
    "name": "Mudstone Ring of the Ironclad",
    "description": "The Mudstone Ring of the Ironclad, forged in the Midlands' war-torn trenches, is a cursed ring that grants temporary resistance to environmental hazards and allows its wearer to transform into an industrial beast of immense power. Wielded by those who have faced the forge's fires and seen the earth's fury, it offers +25% damage against enemies with heavy armor and +10% movement speed while in 'Ironform'. The ring is a symbol of resilience, worn by those who have survived the battlefield and now seek to turn that strength into combat might.",
    "category": "equipment",
    "price": 1500,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% Damage vs Heavy Armor",
      "+10% Movement Speed in Ironform"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Ironform Transformation",
        "rules": "Activates as a reaction when you are reduced to half your hit points or less. You assume the form of an industrial beast, gaining +25% damage against enemies with heavy armor and +10% movement speed for 3 rounds. While in Ironform, you must make a DC 14 Constitution saving throw at the start of each of your turns; on a failed save, you revert to your normal form until the end of your next turn."
      },
      {
        "title": "Environmental Resistance",
        "rules": "While wearing this ring, you gain resistance to all environmental damage (e.g., fire, cold, poison) for 1 hour. This effect ends early if you remove the ring or are incapacitated."
      }
    ],
    "levelRequirementReason": "Only those with a proven record of surviving the Midlands' harsh conditions and battles can wield this cursed yet powerful artifact.",
    "vendorReason": "The Midlands are known for their war-torn history, and they have long traded in items that carry stories of resilience and combat might.",
    "shippingDetail": "Carefully packed to withstand the journey across treacherous terrains, ensuring its safe delivery.",
    "usage": {
      "activation": "Reaction upon being reduced to half your hit points or less; requires a DC 14 Constitution saving throw each turn in Ironform.",
      "duration": "3 rounds while in Ironform",
      "endsWhen": "Revert at the start of your next turn on a failed save, or when you remove the ring or become incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's price reflects its rarity and the risks involved in acquiring such an item, balancing its powerful effects with manageable cost.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:19:38.958472+00:00",
    "aiReviewedAt": "2026-07-22T20:19:38.958472+00:00",
    "aiReviewVersion": 1
  },
  "midlands_necro_tinker_core": {
    "id": "midlands_necro_tinker_core",
    "name": "The Necrotic Tinker’s Core",
    "description": "The Necrotic Tinker’s Core is a pulsating black crystal fused with gears from a dead steam engine, its edges dripping with twisted metal and arcane energy. When embedded in gearwork, it grants the wearer an aura of mechanical decay that terrifies undead foes. The core whispers secrets of forgotten battles and can summon skeletal machinery to aid combatants, though these constructs are as cold and unfeeling as their creator’s soul.",
    "price": 1500,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+25% damage to undead and mechanical targets",
      "Summons a skeletal ally for 10 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Cogs of the Dead",
        "rules": "When you hit an undead or mechanical target with an attack, the Necrotic Tinker’s Core grants you advantage on your next attack roll. This effect can occur once per long rest."
      },
      {
        "title": "Summon Skeletal Ally",
        "rules": "As a bonus action, you may summon a skeletal ally within 30 feet that fights for you until dismissed or destroyed. The skeleton has AC 15 and deals 2d6 bludgeoning damage on hit with its slam attack. It can only be summoned once per long rest."
      }
    ],
    "levelRequirementReason": "The core’s arcane power demands a proficient user to channel effectively.",
    "vendorReason": "Midlands tinkerers are known for their mastery of ancient and forgotten machinery, making them the perfect purveyors of such an artifact.",
    "shippingDetail": "The core is carefully packed in a specialized crate to prevent any accidental activation during transit.",
    "usage": {
      "activation": "Summoning skeletal ally: bonus action",
      "duration": "10 seconds for summoned skeleton; once per long rest",
      "endsWhen": "Summed skeleton destroyed or dismissed; core’s effect ends when the user is incapacitated",
      "charges": "Unlimited, but only one summoning per long rest"
    },
    "priceReason": "The core combines unique materials and advanced arcane knowledge, making it a rare find in any market.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T20:19:48.311664+00:00",
    "aiReviewedAt": "2026-07-22T20:19:48.311664+00:00",
    "aiReviewVersion": 1
  },
  "midlands_necrotic_sword": {
    "id": "midlands_necrotic_sword",
    "name": "The Oracle’s Fang",
    "description": "The Oracle’s Fang is a blade forged from the bones of a corrupted priestess and the steel of a fallen war machine. This necrotic-edged weapon drains an enemy's vitality, reducing their hit points by 10% with each strike. Its shadowy aura also instills fear in foes, causing them to flee in terror for 3 seconds upon being struck. A relic of ancient magic and warfare, the sword whispers secrets of death and dread as it cuts through flesh.",
    "category": "equipment",
    "price": 6000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Necrotic Drain",
      "Fear Aura"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Necrotic Drain",
        "rules": "When you hit a target with this weapon, the target's hit points are reduced by 10% of their total maximum hit points. This effect cannot be resisted."
      },
      {
        "title": "Fear Aura",
        "rules": "When an enemy is struck by The Oracle’s Fang and fails a Wisdom saving throw (DC 15), they become frightened for 3 seconds, fleeing in terror. They can repeat the saving throw at the end of their turns to end this effect."
      }
    ],
    "levelRequirementReason": "The intricate magic and craftsmanship required to wield The Oracle’s Fang demand a significant amount of experience.",
    "vendorReason": "Midlands, with its deep ties to ancient relics and dark arcane knowledge, is the most fitting vendor for such an artifact.",
    "shippingDetail": "The blade is shipped in a specially reinforced box to prevent any accidental damage during transit.",
    "usage": {
      "activation": "On hit",
      "duration": "Instantaneous",
      "endsWhen": "Exhausts on critical failure or when the weapon is sheathed for more than an hour",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its epic rarity and unique combination of abilities, providing a fair value.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T22:02:22.396971+00:00",
    "aiReviewedAt": "2026-07-22T22:02:22.396971+00:00",
    "aiReviewVersion": 1
  },
  "midlands_ore_heart_amber": {
    "id": "midlands_ore_heart_amber",
    "name": "Ore Heart Amber",
    "description": "The Ore Heart Amber is a crystallized core of molten iron forged from the fires of the Iron Legion’s forge. This pulsating gemstone grants visions of past industrial triumphs and failures, guiding you through both successes and setbacks in crafting. It pulses with energy that can be harnessed to speed up the creation of iron gear by 50% for two rounds and offers a shield of protection when held, boosting armor checks by +1d4.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Crafting Boost",
      "Armor Check Bonus"
    ],
    "vendor": "midlands",
    "shippedBy": "Ironfoot Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Crafting Boost",
        "rules": "When activated as an action, the user gains a bonus of 50% to crafting speed for two rounds. This effect can be recharged by placing it in a forge for one hour."
      },
      {
        "title": "Armor Check Bonus",
        "rules": "While holding Ore Heart Amber, gain a +1d4 bonus to armor check rolls. This effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "Beginners in crafting need to gain experience before they can harness the full potential of this artifact.",
    "vendorReason": "The Midlands are renowned for their ironwork and thus have a deep connection with items related to forging and crafting.",
    "shippingDetail": "Items are delivered via Ironfoot Express, ensuring they reach the intended destination swiftly and securely.",
    "usage": {
      "activation": "Action",
      "duration": "2 rounds",
      "endsWhen": "The end of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Crafting is a crucial skill in the Midlands, and this item reflects its value without overpricing.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:01:45.349789+00:00",
    "aiReviewedAt": "2026-07-22T22:01:45.349789+00:00",
    "aiReviewVersion": 1
  },
  "midlands_peasley_foolscap": {
    "id": "midlands_peasley_foolscap",
    "name": "Peasley Foolscap",
    "description": "The Peasley Foolscap is a tattered, counterfeit artifact from the infamous Peasley Financial Scandal. Crafted from old parchment and ink, it appears to grant +10 to all rolls but actually saps your concentration; only Toadettes can wield its power without failing their checks. When used in water, it reveals hidden treasure maps by subtly altering the environment. Held for 30 seconds, it emits a low-frequency scream that repels undead creatures within 20 feet, requiring a DC 15 Wisdom saving throw to resist.",
    "price": 28000,
    "icon": "🧨",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Toadette's Blessing",
      "Treasure Revealer"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toadette's Blessing",
        "rules": "Activates on command, lasts for a short duration. Only Toadettes can use it without failing their rolls. If used by another, all rolls fail until the next long rest."
      },
      {
        "title": "Treasure Revealer",
        "rules": "Used in water, this effect reveals hidden treasure maps within 30 feet with a DC 15 Intelligence (Investigation) check to interpret them accurately. Consumes one use."
      }
    ],
    "levelRequirementReason": "Suitable for beginners to familiarize themselves with the artifact's peculiar effects.",
    "vendorReason": "Midlands is known for its diverse inventory, including rare and unusual artifacts like this one.",
    "shippingDetail": "Delivered discreetly via a series of hidden routes to ensure the artifact's arrival remains unknown.",
    "usage": {
      "activation": "Command word",
      "duration": "Until the next long rest for Toadettes; instantaneous for others",
      "endsWhen": "The next long rest or when used in water, whichever comes first",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced as a rare artifact with unique and thematic effects that are both fun and challenging to use.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T22:02:04.681098+00:00",
    "aiReviewedAt": "2026-07-22T22:02:04.681098+00:00",
    "aiReviewVersion": 1
  },
  "midlands_political_amulet": {
    "id": "midlands_political_amulet",
    "name": "The Amulet of the Iron Oath",
    "description": "The Amulet of the Iron Oath is a heavy, iron-tipped pendant that radiates an aura of unwavering resolve. It is said to have been forged by the hands of the Legion’s most trusted blacksmiths and imbued with the essence of those who have sworn their loyalty to the highest command. The wearer finds that they can easily persuade others to align with them, as if their words are laced with an unbreakable bond. Corruption attempts against this amulet's wearer simply falter, for it stands like a fortress against deceitful designs.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% to persuasion checks",
      "Immunity to political corruption"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail - known for their reliable couriers who specialize in delivering important political artifacts.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Persuasion Boost",
        "rules": "The wearer gains +15% to all persuasion checks. This bonus is applied passively and lasts until the wearer completes a long rest."
      },
      {
        "title": "Corruption Immunity",
        "rules": "While wearing this amulet, the wearer is immune to any effect that would reduce their loyalty or alignment through political means. This protection persists as long as the amulet remains on the wearer's neck."
      }
    ],
    "levelRequirementReason": "The amulet requires no specific level but grants a minor advantage in political matters, making it useful for adventurers of all ranks.",
    "vendorReason": "The Midlands are the heartland of the Iron Legion and thus have access to these symbols of loyalty and command.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring that the amulet arrives within a week, even across vast distances.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until wearer completes a long rest",
      "endsWhen": "If removed or if the wearer completes a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet’s price reflects its rarity, forged craftsmanship, and the significant advantage it provides in political situations.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:02:07.686040+00:00",
    "aiReviewedAt": "2026-07-22T22:02:07.686040+00:00",
    "aiReviewVersion": 1
  },
  "midlands_rust_marrow_essence": {
    "id": "midlands_rust_marrow_essence",
    "name": "Rust Marrow Essence",
    "description": "A vial of Rust Marrow Essence encapsulates the essence of a steam engine's vitality. When consumed by a machine-wielder, it grants temporary power and resilience to industrial environments. This ancient elixir boosts damage against mechanical foes by 25%, while also providing resistance to rust-based corrosion for 1 minute. Its potency is tempered by a fleeting boost in stamina recovery, enhancing the user's endurance during prolonged exertion.",
    "price": 1500,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+25% Damage to Mechanical Enemies",
      "Resistance to Rust-Based Corrosion"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Mechanical Might",
        "rules": "The consumer deals an additional +25% damage to mechanical enemies. This effect lasts for 1 minute and can be recharged after a short rest."
      },
      {
        "title": "Rust Resistance",
        "rules": "The user gains resistance to rust-based corrosion, reducing all such damage by half, for the duration of 1 minute. This effect also refreshes with each short rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 2 to harness its potent mechanical effects.",
    "vendorReason": "Midlands, renowned for their steamworks and industrial know-how, curate this essence from the heart of their machinery.",
    "shippingDetail": "Delivered swiftly by the Void Drifters, ensuring this vial arrives in pristine condition.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 minute",
      "endsWhen": "After a short rest or upon death of the user",
      "charges": "Recharges after a short rest"
    },
    "priceReason": "The rare extraction process and unique properties justify its price, making it a valuable addition to any machine-wielder's arsenal.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:02:03.221153+00:00",
    "aiReviewedAt": "2026-07-22T22:02:03.221153+00:00",
    "aiReviewVersion": 1
  },
  "midlands_rust_satchel": {
    "id": "midlands_rust_satchel",
    "name": "The Rustbound Satchel",
    "description": "The Rustbound Satchel, a satchel spun from salvaged steel mesh and cursed iron wire, hums ominously when triggered. This relic of an industrial age can unleash a molten blast that scorches all within its fiery reach. When thrown, it ignites with a forceful explosion, dealing 50% extra damage to enemies in the vicinity. The satchel is a deadly companion for those who seek to dismantle and destroy their foes, each charge a testament to the dark art of forging in the heart of forgotten factories.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rust Surge",
      "Explosive Blast"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rust Surge",
        "rules": "When thrown, the Rustbound Satchel deals an additional 50% damage to enemies within a 5-meter radius. This effect can only be triggered once per short rest."
      },
      {
        "title": "Explosive Blast",
        "rules": "Activates when used as an explosive charge. Deals fire and acid damage in a 10-foot cone, requiring a DC 16 Dexterity saving throw for half damage. The satchel can be used once before needing to recharge."
      }
    ],
    "levelRequirementReason": "This relic requires a certain mastery over destructive forces and the ability to handle its volatile nature.",
    "vendorReason": "Midlands, with their deep ties to industrial heritage and dark magic, are known for crafting such dangerous yet valuable tools of destruction.",
    "shippingDetail": "Ships via the Rakasha's spectral courier, ensuring safe delivery through shadowy realms.",
    "usage": {
      "activation": "Action or bonus action to throw as a weapon or use as an explosive charge.",
      "duration": "Instantaneous for throwing; 10-foot cone area of effect upon explosion.",
      "endsWhen": "Exhausted after one use and recharges at the start of each long rest.",
      "charges": "Limited to one charge per use."
    },
    "priceReason": "Balanced for its unique combination of explosive damage, area effects, and the challenge it presents in handling such a volatile item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:03:14.542002+00:00",
    "aiReviewedAt": "2026-07-22T22:03:14.542002+00:00",
    "aiReviewVersion": 1
  },
  "midlands_rusted_crown": {
    "id": "midlands_rusted_crown",
    "name": "The Rust Crown of the Iron Throne",
    "description": "The Rust Crown of the Iron Throne, a relic encrusted with molten iron and crimson veins, whispers of ancient power in its tarnished glory. This regal headdress grants its wearer an aura of unshakable authority, compelling even the most defiant to kneel before it. Should you fail a diplomacy check by 5 or more, this crown temporarily heals your wounds, restoring hit points equal to twice the failed check result.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+10% command influence on allies",
      "Heals hit points after failed diplomacy checks"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Command Influence Boost",
        "rules": "When you issue a command, increase your Charisma (Persuasion) check by +2 for the day. This effect can be used once per long rest."
      },
      {
        "title": "Heal Wounds After Failed Checks",
        "rules": "If you fail a diplomacy check by 5 or more, this crown heals hit points equal to twice the failed check result. The crown only allows one use of this effect every three days."
      }
    ],
    "levelRequirementReason": "This crown's ancient power demands a strong will and considerable experience before it can be wielded.",
    "vendorReason": "The Midlands are home to many relics of the Iron Legion, having once been ruled by its kings.",
    "shippingDetail": "Due to its delicate nature, this crown is shipped in a specially designed, reinforced wooden box to ensure safe delivery.",
    "usage": {
      "activation": "Passive effect upon donning the crown.",
      "duration": "Until removed or until a long rest is completed.",
      "endsWhen": "Removed from the wearer’s head or during a long rest.",
      "charges": "Unlimited, but only one use of healing per three days."
    },
    "priceReason": "This crown's rarity and the power it wields justify its moderate price in XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:02:35.150823+00:00",
    "aiReviewedAt": "2026-07-22T22:02:35.150823+00:00",
    "aiReviewVersion": 1
  },
  "midlands_rusted_key": {
    "id": "midlands_rusted_key",
    "name": "The Iron Key to the Oracle’s Vault",
    "description": "The Iron Key to the Oracle’s Vault is a heavy, rusted brass key with an etched design depicting ancient runes. Its surface glows faintly when near undead creatures, granting temporary immunity to poison and curse effects. The key carries with it the weight of forgotten truths, hinting at secrets that could change the course of any campaign. Legends speak of its ability to unlock forbidden knowledge and protect from necromantic corruption.",
    "price": 1600,
    "icon": "🔐",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Poison Immunity",
      "Curse Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Immunity",
        "rules": "When near undead creatures, the user gains temporary immunity to poison effects for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Curse Resistance",
        "rules": "The user has advantage on saving throws against curse and enchantment spells. This benefit lasts until the start of your next turn after using the key's poison immunity effect."
      }
    ],
    "levelRequirementReason": "This key is accessible to low-level characters as it provides immediate utility without requiring high proficiency or power.",
    "vendorReason": "The Midlands are known for their antique and magical artifacts, making this key a natural addition to their inventory.",
    "shippingDetail": "Due to the delicate nature of the key, it is shipped via Shy Guy Smugglers with extra padding to ensure safe delivery.",
    "usage": {
      "activation": "Passive effect when near undead creatures.",
      "duration": "1 minute per use, once per short or long rest.",
      "endsWhen": "After one minute of immunity or when the user completes a short or long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The key's rarity and magical properties justify its price, providing immediate utility without being overly powerful at low levels.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:02:20.443815+00:00",
    "aiReviewedAt": "2026-07-22T22:02:20.443815+00:00",
    "aiReviewVersion": 1
  },
  "midlands_rusted_laywer_crown": {
    "id": "midlands_rusted_laywer_crown",
    "name": "Rusted Laywer Crown",
    "description": "The Rusted Laywer Crown, forged from scavenged scrap and guild insignia, is a relic of cunning and defiance. Its surface bears the marks of countless battles and forges, yet it whispers truths to those who wear it. This crown grants immunity to political traps and allows the wearer to reveal hidden faction secrets with a simple thought. The Legion's spies, ever vigilant, find their efforts thwarted by this ancient artifact.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Political Trap Immunity",
      "Expose Hidden Secrets"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Political Trap Immunity",
        "rules": "The wearer gains immunity to all political traps for the duration of one short rest. This effect can be activated once per day."
      },
      {
        "title": "Expose Hidden Secrets",
        "rules": "Once per short or long rest, the wearer can concentrate and expose hidden faction secrets within a 30-foot radius. This ability has no save DC but is limited to one use per day."
      }
    ],
    "levelRequirementReason": "This crown is crafted for those who seek to navigate treacherous political landscapes with subtlety and skill.",
    "vendorReason": "Midlands, known for its craftsmanship and historical artifacts, offers this unique relic.",
    "shippingDetail": "Ships via Pipe Express, ensuring timely delivery of this delicate artifact.",
    "usage": {
      "activation": "Once per day during a short or long rest",
      "duration": "One short rest duration",
      "endsWhen": "The effect ends after one short rest",
      "charges": "1 use per day"
    },
    "priceReason": "Balanced at 1,000 XP, this crown offers significant utility for those navigating complex political situations.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:02:51.960402+00:00",
    "aiReviewedAt": "2026-07-22T22:02:51.960402+00:00",
    "aiReviewVersion": 1
  },
  "midlands_rusted_sword": {
    "id": "midlands_rusted_sword",
    "name": "Rustclaw of the Broken Legion",
    "description": "The Rustclaw of the Broken Legion is a sword forged from the molten remains of an Iron Legion war machine. Its surface is pockmarked and rusted, yet its blade still gleams with the fury of a warrior that refused to yield. When wielded against mechanical foes, it strikes with unyielding force, dealing 50% extra damage and breaking enemy joints with a 30% higher chance than normal. The sword's very touch can dismantle armor, reducing an enemy’s armor penetration resistance by 30% for ten seconds.",
    "category": "equipment",
    "price": 29000,
    "icon": "🗡",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Mechanical Fury",
      "Joint Breaker"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Mechanical Fury",
        "rules": "When you strike a mechanical creature with this sword, it deals an additional 50% damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Joint Breaker",
        "rules": "This sword grants you advantage on Strength (Athletics) checks to break or disable mechanical joints. The effect ends when you finish a short rest, and it can be used only once per long rest."
      }
    ],
    "levelRequirementReason": "The Rustclaw's damage and special abilities make it suitable for higher-level adventurers who have the experience to handle its power.",
    "vendorReason": "Midlands, known for their connections with ancient artifacts, can source this unique relic from the fallen Iron Legion.",
    "shippingDetail": "Ships via Lakitu Drones' express courier service, ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Instantaneous upon contact with a mechanical creature.",
      "duration": "Until the start of your next turn for Mechanical Fury; ends when you finish a short rest for Joint Breaker.",
      "endsWhen": "For Joint Breaker, it ends after one long rest. For both effects, they end if you are incapacitated or restrained.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The sword's unique properties and the difficulty in acquiring such a relic make it reasonably priced at 1000 XP.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T22:02:40.992560+00:00",
    "aiReviewedAt": "2026-07-22T22:02:40.992560+00:00",
    "aiReviewVersion": 1
  },
  "midlands_rusted_sword_of_the_titan": {
    "id": "midlands_rusted_sword_of_the_titan",
    "name": "Rusted Sword of the Titan",
    "description": "The Rusted Sword of the Titan is a relic from the Iron Legion's golden age, its once-vibrant steel now dulled by time and battle. Crafted from the molten remains of a fallen Titan, its surface is etched with arcane runes that hum with latent power. The sword deals +3 damage to constructs and, when striking an enemy, reduces their armor class by 1d6 until the start of their next turn.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Damage Boost vs Constructs",
      "Armor Reduction on Hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Boost vs Constructs",
        "rules": "The sword deals +3 damage to any creature constructed primarily from metal or machine parts. Activation: On hit, no save required, Instantaneous."
      },
      {
        "title": "Armor Reduction on Hit",
        "rules": "When the sword strikes an enemy construct, it reduces their armor class by 1d6 until the start of their next turn. No save DC needed, lasts for one round per two levels or until the construct is destroyed."
      }
    ],
    "levelRequirementReason": "Requires a character with at least three levels to wield and fully utilize its powers.",
    "vendorReason": "Midlands, known for their trade in ancient relics, houses this powerful sword among their rare stock.",
    "shippingDetail": "Delivered with a secret courier, ensuring the item arrives safely and discreetly.",
    "usage": {
      "activation": "On hit",
      "duration": "Instantaneous effect; lasts until start of next turn for the target construct",
      "endsWhen": "Target construct is destroyed or the effect expires after one round per two levels",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare origin and potent effects against constructs.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:03:06.453662+00:00",
    "aiReviewedAt": "2026-07-22T22:03:06.453662+00:00",
    "aiReviewVersion": 1
  },
  "midlands_sacred_trooper_torch": {
    "id": "midlands_sacred_trooper_torch",
    "name": "Sacred Trooper Torch",
    "description": "The Sacred Trooper Torch is a relic of ancient design, forged from sacred iron and imbued with the Triforce’s pulse. It can illuminate dark corners for thirty rounds, and when used in battle, it grants nearby allies a +1 bonus to Perception checks and causes them to feel the Triforce’s pulse, boosting their morale. Outside of combat, it has a 5% chance to summon a sacred beast that aids in exploration or defense. When thrown into water, it reveals hidden paths leading to lost temples of Hyrule.",
    "price": 1600,
    "icon": "🌟",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Triforce Pulse",
      "Sacred Illumination"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Triforce Pulse (Battle)",
        "rules": "When used in battle, all allies within 10 feet gain a +1 bonus to Perception checks for the duration of one short rest. This effect does not stack with similar bonuses."
      },
      {
        "title": "Sacred Illumination",
        "rules": "The Torch illuminates dark corners for 30 rounds, providing bright light in a 20-foot radius and dim light for an additional 20 feet beyond that. It can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This torch is designed to aid adventurers of all levels, making it accessible for beginning heroes.",
    "vendorReason": "The Midlands are known for their connection with ancient relics and artifacts from the Triforce’s era.",
    "shippingDetail": "Delivered via a trusted courier, ensuring the Torch arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "30 rounds",
      "endsWhen": "Used up or destroyed",
      "charges": "Unlimited (recharged after long rest)"
    },
    "priceReason": "The torch’s rarity and the unique abilities it grants justify its higher price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T22:02:56.692454+00:00",
    "aiReviewedAt": "2026-07-22T22:02:56.692454+00:00",
    "aiReviewVersion": 1
  },
  "midlands_scarf_of_the_scorched_scribe": {
    "id": "midlands_scarf_of_the_scorched_scribe",
    "name": "Scarf of the Scorched Scribe",
    "description": "The Scarf of the Scorched Scribe is woven from the charred remains of an ancient scribe who recorded the Iron Legion’s darkest secrets. When worn, it crackles with arcane fire that reveals hidden contracts and rooms in enemy strongholds. It grants you a +10% chance to decipher any written codes or secret messages you encounter, enhancing your ability to uncover plans. Any foe found with a written contract on their person takes 2d4 fire damage as the scarf’s flames singe through their secrets.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden documents",
      "Enhances code-breaking skills"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expose Hidden Contracts",
        "rules": "As a bonus action, you can activate the scarf to reveal any hidden contracts or secret rooms within 30 feet. This effect lasts for 1 minute and requires no saving throw. The scarf can be used once per long rest."
      },
      {
        "title": "Enhance Deciphering",
        "rules": "While wearing the scarf, you have advantage on Intelligence (Investigation) checks to decipher written codes or secret messages. This effect is always active while the scarf remains in use."
      }
    ],
    "levelRequirementReason": "The scribe’s knowledge and charred essence empower even low-level characters.",
    "vendorReason": "Midlands vendors specialize in relics of ancient lore, making this scarf a fitting addition to their stock.",
    "shippingDetail": "The scarf is delivered swiftly by Lakitu Drones, ensuring you receive it with minimal delay.",
    "usage": {
      "activation": "Bonus action to reveal hidden documents; always active for deciphering codes or messages",
      "duration": "Instantaneous activation; lasts 1 minute and recharges after a long rest",
      "endsWhen": "Discontinued once the duration ends or when removed from use",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for its rare origin, unique abilities, and powerful effects in combat and exploration.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:03:06.623493+00:00",
    "aiReviewedAt": "2026-07-22T22:03:06.623493+00:00",
    "aiReviewVersion": 1
  },
  "midlands_scarlet_hammer_of_iron": {
    "id": "midlands_scarlet_hammer_of_iron",
    "name": "Scarlet Hammer of Iron",
    "description": "The Scarlet Hammer of Iron is a cursed maul, forged from the molten heart of a fallen forge-master. Its surface glows with an eerie red light, pulsing with the essence of its creation. Each swing deals heavy damage and grants +50% attack power for 30 seconds after each kill, but it also leaves enemies vulnerable by reducing their defense by -20%. The hammer's power is tempered by a curse that drains your vitality if you overuse it.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+50% melee damage after each kill",
      "-20% enemy defense"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Bloodlust Boost",
        "rules": "When the wielder deals damage with this hammer, they gain +50% attack power for 30 seconds. This effect is limited to once every five minutes."
      },
      {
        "title": "Vulnerability Infliction",
        "rules": "After 30 seconds of combat, enemies within a 10-foot radius are reduced in defense by -20%. This debuff lasts until the start of the wielder's next turn. The effect can only be triggered once per battle."
      }
    ],
    "levelRequirementReason": "Wielding this cursed weapon requires a proficient warrior to handle its power and mitigate its risks.",
    "vendorReason": "Midlands, known for their blacksmiths' expertise, can both forge and sell such a cursed artifact.",
    "shippingDetail": "Ships via enchanted mailbags that deliver the hammer within three days of purchase.",
    "usage": {
      "activation": "Instantaneous effect upon dealing damage with the weapon.",
      "duration": "30 seconds after each kill, once every five minutes.",
      "endsWhen": "The effect ends when combat ceases or the wielder takes a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP due to its limited use and strategic value in battle.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:03:14.461686+00:00",
    "aiReviewedAt": "2026-07-22T22:03:14.461686+00:00",
    "aiReviewVersion": 1
  },
  "midlands_scarlet_mechanics_potion": {
    "id": "midlands_scarlet_mechanics_potion",
    "name": "Scarlet Mechanics Potion",
    "description": "A vial of crimson elixir, its glass bottle adorned with engravings of intricate cogs and gears. This Scarlet Mechanics Potion is a confluence of alchemy and industrial magic, granting the drinker unmatched mechanical prowess. Upon consumption, one gains the ability to repair or activate machinery within 10 feet instantly. The potion also grants a Gear Sense aura that reveals hidden mechanisms within a 50-foot radius for a brief moment.",
    "price": 330,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+20% chance to repair broken gear or machine",
      "Instantaneous activation of mechanical devices"
    ],
    "vendor": "Midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gear Repair",
        "rules": "When consumed, the drinker can attempt to repair a broken mechanism within 10 feet with a successful DC 15 Wisdom (Mechanics) check. This effect is instantaneous and does not require action or reaction."
      },
      {
        "title": "Gear Sense Aura",
        "rules": "The drinker gains the ability to detect hidden mechanisms in a 50-foot radius for 1 minute after consuming the potion. This effect requires no action, but it dissipates once the duration ends."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners and those seeking immediate mechanical advantages.",
    "vendorReason": "Midlands, being a bustling hub of industrial magic, regularly stocks items that enhance one's ability to work with machinery.",
    "shippingDetail": "Ships within three days via the Void Drifter Relay, ensuring safe and swift delivery.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous repair; Gear Sense lasts for 1 minute",
      "endsWhen": "Effect ends upon expiration of duration or when consumed by another",
      "charges": "Unlimited uses"
    },
    "priceReason": "This potion strikes a balance, providing immediate utility without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:03:52.573207+00:00",
    "aiReviewedAt": "2026-07-22T22:03:52.573207+00:00",
    "aiReviewVersion": 1
  },
  "midlands_scarlet_sack_of_blood": {
    "id": "midlands_scarlet_sack_of_blood",
    "name": "Scarlet Sack of Blood",
    "description": "The Scarlet Sack of Blood is a heavy, crimson-stitched leather sack that whispers ominously when shaken. It is said to hold the blood essence of the Iron Legion’s fallen warlord, whose sacrifice sealed their victory in the Toad War. When activated, it emits a low hum that silences nearby enemies for 30 seconds, and its presence grants +20% critical hit chance to the bearer. Only those who have sworn loyalty to the Iron Legion may carry this cursed relic, as it is said to curse any who defy their vow.",
    "price": 330,
    "icon": "📦",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "+20% critical hit chance",
      "Silence nearby enemies for 30 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Critical Boost",
        "rules": "Activates on a bonus action. The user gains +20% to their critical hit chance until the end of their next turn."
      },
      {
        "title": "Silent Hum",
        "rules": "Shaken as an action, this creates a low hum that silences all enemies within 15 feet for 30 seconds. The effect ends if the user is incapacitated or if they move more than 10 feet away from the center of the silence."
      }
    ],
    "levelRequirementReason": "The Scarlet Sack requires a minimum level to ensure its power does not overwhelm less experienced adventurers.",
    "vendorReason": "Midlands is known for their dealings with ancient relics and cursed artifacts, making them the perfect purveyor of this dangerous but powerful item.",
    "shippingDetail": "The Scarlet Sack must be delivered via a trusted courier to ensure its safe handling. The delivery may take an additional day due to heightened security measures.",
    "usage": {
      "activation": "Bonus action or as part of the user’s movement (shaken)",
      "duration": "30 seconds",
      "endsWhen": "The user is incapacitated or moves more than 10 feet away from the center of the silence",
      "charges": "Unlimited, but cannot be used within an hour of being last used"
    },
    "priceReason": "Balanced at 1000 XP to reflect its cursed nature and potent effects without overshadowing other items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:03:28.780866+00:00",
    "aiReviewedAt": "2026-07-22T22:03:28.780866+00:00",
    "aiReviewVersion": 1
  },
  "midlands_scarlet_scarf": {
    "id": "midlands_scarlet_scarf",
    "name": "Bloodscar Mantle",
    "description": "The Bloodscar Mantle, woven from threads spun by a toad's final scream and wrapped in the soot of a furnace, is a mantle of fiery resilience. It whispers protection against harsh elements and offers a hidden 'Redemption' that can heal allies within its 10-meter radius. The mantle's fabric hums with ancient magic, granting an additional +5% chance to resist environmental damage and increasing melee defense by 10%. Wearing it is like embracing the heart of a forge, where strength and protection intertwine.",
    "category": "equipment",
    "price": 1600,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+5% resistance to environmental damage",
      "Redemption: heals one ally for 1d6+10 HP"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Redemption",
        "rules": "When an ally within 10 meters takes damage, the wearer can use a bonus action to activate the 'Redemption' ability. This grants an ally within range 1d6 + 10 hit points of healing. The mantle can only be used once per long rest."
      },
      {
        "title": "Increased Melee Defense",
        "rules": "While wearing, the wearer's melee defense increases by 10%. This effect is active as long as the mantle remains on the wearer and does not require any action to activate. It ends if the mantle is removed or destroyed."
      }
    ],
    "levelRequirementReason": "The mantle requires a level 5 character due to its complex weave and potent magical properties.",
    "vendorReason": "Midlands vendors are known for their deep connections with the arcane, making them the perfect purveyors of such a powerful and ancient item.",
    "shippingDetail": "The mantle is carefully packed in fireproof crates to ensure safe delivery. Shipment takes two weeks from the time of purchase.",
    "usage": {
      "activation": "Bonus action for Redemption; passive effect for increased melee defense.",
      "duration": "Until removed or destroyed, or until a long rest has passed since the last use of Redemption.",
      "endsWhen": "The mantle is removed, destroyed, or its uses are exhausted (one per day).",
      "charges": "Unlimited daily uses; one use per long rest."
    },
    "priceReason": "The mantle's balanced price reflects its rare materials and potent magical properties, ensuring it is a fair addition to any character’s inventory.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:03:45.837967+00:00",
    "aiReviewedAt": "2026-07-22T22:03:45.837967+00:00",
    "aiReviewVersion": 1
  },
  "midlands_scorched_gear_pearl": {
    "id": "midlands_scorched_gear_pearl",
    "name": "Scorched Gear Pearl",
    "description": "The Scorched Gear Pearl, a relic from the fiery battlefields of the last war machine, hums with the heat of its origins when worn. This enchanted gem grants you temporary resistance to fire damage and enhances your ability to uncover hidden mechanisms in ancient ruins. Crafters find it especially useful for their work, as it boosts their mechanical crafting speed by 20%. The pearl's warmth is a testament to its forge-made core, and its effects are as reliable as the fires that forged it.",
    "price": 1600,
    "icon": "🔥",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% resistance to fire damage",
      "Enhances chance to find hidden gear parts when exploring"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+30% Resistance to Fire Damage",
        "rules": "When worn, the wearer gains temporary resistance to fire damage equal to +30%. This effect lasts for 1 hour and ends if the wearer is no longer in contact with a source of fire. There is no save DC required."
      },
      {
        "title": "Enhances Chance to Find Hidden Gear Parts",
        "rules": "When exploring ruins, the user gains a +10% chance to find hidden mechanical components. This effect is passive and does not require an action to activate. The bonus lasts for 1 hour or until the user is no longer in a location with significant mechanical ruins."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers, as it serves as an introduction to the world of mechanical crafting and exploration.",
    "vendorReason": "Midlands vendors are known for their vast collection of rare relics and artifacts from various conflicts, making them a reliable source for items like the Scorched Gear Pearl.",
    "shippingDetail": "Delivered with Pipe Express's standard express service within one week.",
    "usage": {
      "activation": "Passive effect upon donning; no activation required.",
      "duration": "1 hour or until the wearer is no longer in contact with a source of fire or exploring significant mechanical ruins.",
      "endsWhen": "The effects end if the wearer leaves a location with a source of fire or ceases exploration within mechanical ruins.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and its utility for both combat and exploration.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:04:26.108705+00:00",
    "aiReviewedAt": "2026-07-22T22:04:26.108705+00:00",
    "aiReviewVersion": 1
  },
  "midlands_scorched_tome": {
    "id": "midlands_scorched_tome",
    "name": "Scorched Tome of the Iron Choir",
    "description": "The Scorched Tome of the Iron Choir, bound in molten leather and sealed with ancient sigils, is a relic of the Iron Choir's fiery forges. When invoked by an initiate, it commands siege engines or steel constructs within its range to obey their every command. The tome’s power can enhance construct damage by +10%, but only when directly controlling them, while also granting a 5% chance to invoke 'Iron Echo,' duplicating the command for a fleeting second.",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Commands Siege Engines and Constructs",
      "Enhanced Damage Output"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Command Control",
        "rules": "Activate as an action, commanding one siege engine or steel construct within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be compelled to obey for 1 minute or until the tome is destroyed."
      },
      {
        "title": "Enhanced Damage",
        "rules": "When controlling constructs, they deal +10% damage output while under your command. This effect ends if you lose control of the construct, it is destroyed, or you use an action to end it manually."
      }
    ],
    "levelRequirementReason": "Requires a 5th-level spellcaster to reliably master the tome’s ancient magic.",
    "vendorReason": "Midlands is known for their deep connections with arcane lore and relics, making them a fitting vendor for such an artifact.",
    "shippingDetail": "Ships via Pipe Express within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the tome is destroyed",
      "endsWhen": "The command ends if you lose control, the construct is destroyed, or you manually end it",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and powerful abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:03:54.331948+00:00",
    "aiReviewedAt": "2026-07-22T22:03:54.331948+00:00",
    "aiReviewVersion": 1
  },
  "midlands_screaming_cogwheel": {
    "id": "midlands_screaming_cogwheel",
    "name": "Screaming Cogwheel",
    "description": "The Screaming Cogwheel is a cursed gear, forged from the remnants of Legion war machines. Its iron teeth grind and whine in a cacophony that disorients mechanical foes, causing them to malfunction and break down. Only those who have dishonored their oaths dare wear it, and its noise can be heard for miles. When activated, it destabilizes enemy machinery with a deafening screech, halting the operations of any nearby mechanical constructs.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% damage to mechanical enemies",
      "-10% enemy mechanical defense"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Malfunction Trigger",
        "rules": "When activated as a bonus action, the Screaming Cogwheel emits a screech that targets all mechanical creatures within 30 feet. This causes them to suffer from a -10 penalty on saving throws and ability checks related to mechanics for 1 minute. The effect ends early if the target is destroyed or moves more than 5 feet away."
      },
      {
        "title": "Increased Damage",
        "rules": "While wearing the Screaming Cogwheel, you deal an additional +25% damage against mechanical enemies. This bonus applies to all weapon attacks and spell effects that target such creatures."
      }
    ],
    "levelRequirementReason": "Wearing this cursed gear requires a level of at least 1 due to its malevolent nature.",
    "vendorReason": "Midlands traders often have access to rare and cursed items, including those used by Legion oathbreakers.",
    "shippingDetail": "The gear is carefully packed in soundproof containers to prevent accidental activation during transit.",
    "usage": {
      "activation": "Bonus action to activate the screech effect.",
      "duration": "1 minute, or until the target moves more than 5 feet away.",
      "endsWhen": "The target of the malfunction trigger is destroyed or moves too far away.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The price reflects the rare nature and cursed properties of the gear, as well as its unique mechanical destabilization ability.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T16:37:36.393701+00:00",
    "aiReviewedAt": "2026-07-23T16:37:36.393701+00:00",
    "aiReviewVersion": 1
  },
  "midlands_shadow_forged_blood": {
    "id": "midlands_shadow_forged_blood",
    "name": "Shadowforged Blood",
    "description": "The vial of Shadowforged Blood hums with the dark essence of the Shadowfell, its surface etched with runes that glimmer faintly under moonlight. Consuming this potent elixir grants you and your allies temporary resistance to fear and mental control, while also filling the air with a chilling aura that unsettles foes. This bloodied vial is a testament to the craftsmanship of the Midlands, forged in the heart of the Shadowfell by artisans who dare to walk its dark paths.",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resistance to Fear",
      "Chilling Aura"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Resistance to Fear and Mental Control",
        "rules": "When you consume a vial, you gain temporary resistance to fear and mental control effects for 1 hour. This effect does not stack with similar resistances. Allies within 30 feet of you also gain this benefit."
      },
      {
        "title": "Chilling Aura",
        "rules": "For the duration of your concentration (up to 1 minute), any creature that starts its turn within 30 feet of you must make a DC 15 Wisdom saving throw or be frightened until the end of your next turn. This effect can only affect one target per use."
      }
    ],
    "levelRequirementReason": "This item requires a character of at least level 3 to consume due to its potent magical properties.",
    "vendorReason": "The Midlands are known for their mastery in crafting items that blend the living and the dead, making Shadowforged Blood a perfect addition to their inventory.",
    "shippingDetail": "Delivered by shadowy couriers who weave through the night, arriving at your doorstep with a whisper of darkness.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "1 hour or until used up",
      "endsWhen": "The effect ends if you die or if it is dispelled by magic",
      "charges": "Unlimited uses, but only one effect can be active at a time"
    },
    "priceReason": "The price reflects the rare materials and dark magic required to craft this vial, as well as its potent effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:04:20.321047+00:00",
    "aiReviewedAt": "2026-07-22T22:04:20.321047+00:00",
    "aiReviewVersion": 1
  },
  "midlands_shadowfell_gear": {
    "id": "midlands_shadowfell_gear",
    "name": "Shadowfell Gear of the Iron Hound",
    "description": "The Shadowfell Gear of the Iron Hound, forged in the dark forges of the Shadowfell, is a suit of armor that whispers secrets to its wearer. Its leather harness is etched with runes that grant the user an eerie camouflage, blending seamlessly into the ironwork corridors of the Iron Legion. This gear not only enhances one's stealth but also amplifies the senses, allowing the wearer to uncover hidden dangers lurking in the shadows.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% chance to bypass security cameras and sensors",
      "Passive +8 to Stealth checks"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bypass Security Cameras and Sensors",
        "rules": "The wearer gains a +15% chance to bypass security cameras and sensors. This effect is active for the duration of one long rest per day."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "Passive bonus to Stealth checks equal to 8, which stacks with other bonuses. The wearer must use a short rest each day to recover this benefit fully."
      }
    ],
    "levelRequirementReason": "The intricate runes and enchantments require the user to have at least 5th level to properly channel their power.",
    "vendorReason": "Midlands, being a hub for espionage and covert operations, frequently stocks gear from the Shadowfell Order to cater to its clientele's needs.",
    "shippingDetail": "Due to the specialized nature of this item, Pipe Express ensures it is delivered securely in a custom-made padded box with tracking enabled.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active until expended or interrupted.",
      "endsWhen": "The user must rest for at least one long rest to regain the benefit of this gear.",
      "charges": "Unlimited, but the wearer must rest for a long rest each day to maintain full benefits."
    },
    "priceReason": "The item's rarity and the complexity of its enchantments justify its moderate price in experience points.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T22:04:21.567759+00:00",
    "aiReviewedAt": "2026-07-22T22:04:21.567759+00:00",
    "aiReviewVersion": 1
  },
  "midlands_shadowfell_weapon": {
    "id": "midlands_shadowfell_weapon",
    "name": "Onyx Edge Blade",
    "description": "The Onyx Edge Blade is a sword forged from the bones of a fallen shadowlord, tempered in the fires of Raventree’s cursed forge. Its blade shimmers with an otherworldly glow, and when drawn, it emits a chilling scream that echoes through the night. Striking with this weapon against shadow creatures, you deal +20% damage and have a 10% chance to stun your foe for two turns. The blade whispers secrets of the dark arts, occasionally granting temporary stealth for three turns as a fleeting echo of the shadows.",
    "category": "equipment",
    "price": 1600,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Damage Boost",
      "Stunning Strike"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Damage Boost",
        "rules": "When you deal damage with this weapon to a shadow creature, you gain +20% bonus damage. This effect is limited to one use per short or long rest."
      },
      {
        "title": "Stunning Strike",
        "rules": "Once per battle, when you hit an enemy with the Onyx Edge Blade, there is a 10% chance that it will be stunned for two turns. The target can make a Wisdom saving throw (DC 13) to resist this effect."
      }
    ],
    "levelRequirementReason": "The sword's dark magic requires the wielder to have faced the shadows and gained enough experience to understand its power.",
    "vendorReason": "Midlands is known for their connections with shadowy creatures, making them a trusted source for such an artifact.",
    "shippingDetail": "The blade must be shipped in a specially enchanted box to prevent it from disturbing the darkness on its own.",
    "usage": {
      "activation": "On hitting with this weapon against shadow creatures, or as a reaction when you are hit by an attack from one.",
      "duration": "Instantaneous for each effect",
      "endsWhen": "The rest period ends after dealing damage to shadows or stunning an enemy, respectively.",
      "charges": "Unlimited, but limited to one use per short or long rest."
    },
    "priceReason": "The sword's rarity and the dark magic it contains justify its price of 1000 XP.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T22:04:54.403333+00:00",
    "aiReviewedAt": "2026-07-22T22:04:54.403333+00:00",
    "aiReviewVersion": 1
  },
  "midlands_siege_cogwheel": {
    "id": "midlands_siege_cogwheel",
    "name": "Siege Cogwheel",
    "description": "The Siege Cogwheel is a colossal, wrought-iron gear forged in the Midlands' industrial heart, where the sounds of hammer and forge have shaped it into a tool of both creation and destruction. This ancient artifact allows its wielder to manipulate machinery with raw force, turning enemy siege engines against themselves or triggering mechanical traps hidden within fortifications (range 20 meters). The Cogwheel can also increase armor durability by 20% during siege engagements, making it an invaluable asset in the heat of battle.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Siege Engine Manipulation",
      "Mechanical Trap Activation"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Siege Engine Manipulation",
        "rules": "As a bonus action, the user can manipulate a nearby siege engine (within 20 feet) to deal an additional 1d6 bludgeoning damage. This effect is limited to once per long rest."
      },
      {
        "title": "Mechanical Trap Activation",
        "rules": "The user can activate mechanical traps within a 20-meter radius as a reaction, dealing 1d8 damage and setting off any nearby traps (including those triggered by the activation). This effect has no save DC but is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency with heavy machinery to effectively operate this ancient artifact.",
    "vendorReason": "The Midlands are renowned for their industrial prowess and the Siege Cogwheel is a quintessential product of their forges.",
    "shippingDetail": "Ships via Void Drifter Relay, ensuring swift delivery but with a handling fee of 10% on the total price.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous effect; lasts until the start of your next turn",
      "endsWhen": "Exhausted after one use per short rest",
      "charges": "Unlimited uses, recharges at dawn"
    },
    "priceReason": "Balanced against other rare items, this Cogwheel's utility and rarity justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:04:51.719452+00:00",
    "aiReviewedAt": "2026-07-22T22:04:51.719452+00:00",
    "aiReviewVersion": 1
  },
  "midlands_silence_of_the_siege_mech": {
    "id": "midlands_silence_of_the_siege_mech",
    "name": "Silence of the Siege Mech",
    "description": "The Silence of the Siege Mech is a mechanical bracer forged from the gears of ancient war machines. Its ticking gears and polished metal plates mimic the heartbeats of clockwork dragons, making the wearer nearly invisible to enemy scouts. When in combat, it not only reduces the detection radius by 10 meters but also subtly disrupts the spells cast against its wielder, reducing their accuracy by 10%. The bracer's gears hum softly with each heartbeat, enhancing stealth and dousing the sounds of conflict.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealth Enhancement",
      "Spell Disruption"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealth Enhancement",
        "rules": "Activates as a bonus action. The wearer gains +50% to Stealth checks until the end of their next turn, and reduces enemy detection radius by 10 meters for 1 minute."
      },
      {
        "title": "Spell Disruption",
        "rules": "When the bracer is activated in combat, there is a 10% chance that any spell cast against the wearer will miss. This effect lasts until the end of the activation's duration or until the user takes another action."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively utilize the bracer in combat.",
    "vendorReason": "The Midlands are renowned for their expertise in crafting items that enhance stealth and combat effectiveness, making them a trusted vendor for this bracer.",
    "shippingDetail": "Ships via the Void Drifter Relay with an additional 24-hour delivery delay due to its delicate nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "The end of the user's next turn or when another action is taken",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced price to reflect its mechanical complexity and rarity among common items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:04:40.279250+00:00",
    "aiReviewedAt": "2026-07-22T22:04:40.279250+00:00",
    "aiReviewVersion": 1
  },
  "midlands_silken_scribe_of_the_iron_blood": {
    "id": "midlands_silken_scribe_of_the_iron_blood",
    "name": "Silken Scribe of the Iron Blood",
    "description": "The Silken Scribe of the Iron Blood is a vellum-bound ledger encased in iron-threaded bindings, crafted by forges of the Ironblood Kingdom. Each page is enchanted with ink that records the names of foes slain within its cover. Upon reading an entry, you gain temporary invulnerability for 3 seconds, and your critical hit chance increases by 5% for 10 seconds. The ledger’s power comes from the blood of fallen enemies, imbuing it with a dark but protective magic.",
    "price": 340,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Invulnerability Burst",
      "Critical Chance Boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invulnerability Burst",
        "rules": "Upon reading an entry in the ledger, you gain temporary invulnerability for 3 seconds. You cannot be damaged by any attack or effect during this duration."
      },
      {
        "title": "Critical Chance Boost",
        "rules": "For 10 seconds after reading an entry, your chance to score a critical hit increases by 5%. This bonus stacks with other sources of critical hit chances but does not exceed +20%."
      }
    ],
    "levelRequirementReason": "The ledger's dark enchantments require a user experienced enough in combat to wield its power responsibly.",
    "vendorReason": "Midlands, known for their scholarly and martial traditions, can source rare magical texts like the Silken Scribe of the Iron Blood.",
    "shippingDetail": "The ledger is carefully packed in a spectral mail delivery to ensure its safe arrival. Delivery is expedited by one day.",
    "usage": {
      "activation": "Reading an entry from the ledger.",
      "duration": "3 seconds of invulnerability, and critical hit chance boost for 10 seconds.",
      "endsWhen": "The duration expires or you read another entry.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides two distinct combat advantages with a reasonable cooldown.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:05:11.273656+00:00",
    "aiReviewedAt": "2026-07-22T22:05:11.273656+00:00",
    "aiReviewVersion": 1
  },
  "midlands_smoke_cannon_shell": {
    "id": "midlands_smoke_cannon_shell",
    "name": "Ash of the Smelting Forge",
    "description": "The Ash of the Smelting Forge is a volatile explosive shell forged from the very heart of an ancient forge. When ignited, it unleashes the fury of a collapsing furnace, sending shrapnel in all directions and reducing enemy accuracy with its lingering smoke cloud. This weapon is perfect for breaking through formidable defenses or neutralizing heavy siege towers. A rare find, this item was crafted by master blacksmiths who draw power from the very essence of volcanic forge fires.",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Massive Explosive Force",
      "Disrupting Smoke Screen"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Massive Explosive Force",
        "rules": "When activated, this shell detonates with a force equivalent to that of a collapsing furnace. It deals 2000 fire damage in a 15-foot radius and has a 10% chance to cause temporary paralysis to nearby enemies for 1d4 rounds."
      },
      {
        "title": "Disrupting Smoke Screen",
        "rules": "Upon detonation, it creates a 5-second smoke screen that reduces enemy accuracy by 20%. The smoke dissipates after the duration and does not persist beyond this time limit. There is no save DC for this effect."
      }
    ],
    "levelRequirementReason": "This item can be used by adventurers of all levels, but its power requires a certain familiarity with explosives.",
    "vendorReason": "The Midlands market is known for its array of rare and powerful items crafted by local blacksmiths.",
    "shippingDetail": "This item ships via express courier, arriving the next day if ordered before noon.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Expended after use",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's rarity and powerful effects, making it accessible yet valuable.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:05:38.351742+00:00",
    "aiReviewedAt": "2026-07-22T22:05:38.351742+00:00",
    "aiReviewVersion": 1
  },
  "midlands_soul_candle_of_the_blood_mill": {
    "id": "midlands_soul_candle_of_the_blood_mill",
    "name": "Soul Candle of the Blood Mill",
    "description": "The Soul Candle of the Blood Mill glows with a sickly crimson hue, its wick bathed in the sweat of toiling slaves. Crafted within the cursed mills of Iron Legion, it offers fleeting protection and augmented stealth in the industrial heartlands. Activated by a whispered incantation, it grants 5 seconds of invulnerability, during which you are immune to all damage. Its flame also enhances your ability to evade detection, increasing your Stealth skill checks by +30%. Each use saps ten percent of your stamina, ensuring its power remains reserved for the direst of circumstances.",
    "price": 1600,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invulnerability",
      "Enhanced Stealth"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "Activation: On activation by a whispered incantation. Duration: Instantaneous, lasting for 5 seconds. Range/Area: Self. Ends When: The duration expires or the candle is extinguished."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "Activation: Passive effect. Increases your Stealth skill checks by +30% while in industrial zones. Ends When: The candle is used to activate Invulnerability, or when you leave an industrial zone."
      }
    ],
    "levelRequirementReason": "This candle's power requires no specific level as it focuses on providing immediate survival and tactical advantages.",
    "vendorReason": "The Midlands are known for their clandestine deals and dark artifacts, making the Soul Candle a fitting addition to their offerings.",
    "shippingDetail": "Delivered via secret routes, often arriving in the dead of night. Delays may occur due to the hazardous nature of the journey.",
    "usage": {
      "activation": "On activation by a whispered incantation.",
      "duration": "Instantaneous, lasting for 5 seconds.",
      "endsWhen": "The duration expires or the candle is extinguished.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare crafting and potent effects, ensuring it remains a valuable but not overpowered tool.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:05:12.894937+00:00",
    "aiReviewedAt": "2026-07-22T22:05:12.894937+00:00",
    "aiReviewVersion": 1
  },
  "midlands_soul_of_the_forged": {
    "id": "midlands_soul_of_the_forged",
    "name": "Soul of the Forged",
    "description": "The Soul of the Forged is a hammer-shaped pendant, its surface etched with intricate runes that glow faintly in the dark. Crafted from the soul of an Iron Legion blacksmith who perished in the flames of his forge, this amulet bestows upon its wearer a resilience tempered by the very essence of the forge. The pendant grants +10% regeneration when critically injured and imbues the user with +5% bonus to repairing broken machinery or armor each time they strike an opponent, as if their blows carry the spirit of the blacksmith's relentless craft.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Regeneration on Critical Injury",
      "Bonus to Repairing Damaged Gear"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regeneration on Critical Injury",
        "rules": "The wearer regenerates +10% health when critically injured. This effect lasts for 1 minute and can only be triggered once per short or long rest."
      },
      {
        "title": "Bonus to Repairing Damaged Gear",
        "rules": "Each time the user strikes an opponent in combat, they gain a +5% bonus to repairing broken machinery or armor. This effect does not stack with other similar abilities and can be used up to three times per long rest."
      }
    ],
    "levelRequirementReason": "This amulet is designed for those who are just beginning their journey, offering a connection to the spirit of the forge without demanding too much from its wearer.",
    "vendorReason": "The Midlands are known for their deep connections with blacksmiths and the history of crafting, making them the perfect vendor for this soul-infused artifact.",
    "shippingDetail": "Shipped via Boo Spectral Mail, a reliable courier who ensures that any item entrusted to their care arrives safely and swiftly.",
    "usage": {
      "activation": "Passive effect triggered by critical injury or combat action.",
      "duration": "1 minute per trigger; lasts until the start of your next turn after resting.",
      "endsWhen": "The duration ends when you finish a short or long rest, or if you are no longer critically injured in the case of regeneration.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with the essence of an Iron Legion blacksmith and imbued with powerful regenerative properties, this amulet is a valuable tool for any adventurer.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:05:33.024897+00:00",
    "aiReviewedAt": "2026-07-22T22:05:33.024897+00:00",
    "aiReviewVersion": 1
  },
  "midlands_soul_of_the_mechanical_hammer": {
    "id": "midlands_soul_of_the_mechanical_hammer",
    "name": "Soul of the Mechanical Hammer",
    "description": "The Soul of the Mechanical Hammer is a relic forged from the soul of an ancient siege engine, its frame crafted from iron and obsidian. With every swing, it shatters stone and steel alike, its aura hummed with the echo of a thousand battles. This weapon grants Iron Resolve—immune to knockback for 3 turns after each successful hit—and a +40% increase in melee damage with heavy weapons, while there's a +20% chance to stun an enemy for two turns upon hitting them.",
    "category": "equipment",
    "price": 6000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+40% melee damage with heavy weapons",
      "+20% chance to stun enemy for 2 turns on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Iron Resolve",
        "rules": "When you successfully hit a creature with this weapon, you gain immunity to knockback for the next 3 turns. This effect lasts until the start of your next turn."
      },
      {
        "title": "Stunning Blow",
        "rules": "Once per short or long rest, when you hit a target with this weapon, there is a +20% chance that it becomes stunned for two turns. On a successful save against a DC 15 Constitution saving throw, the effect does not occur."
      }
    ],
    "levelRequirementReason": "This relic requires significant strength and martial expertise to wield effectively.",
    "vendorReason": "The Midlands are renowned for their mastery of ancient artifacts and relics, making this hammer a fitting addition to their inventory.",
    "shippingDetail": "Delivered with expedited Void Drifter service; arrives within one week of purchase.",
    "usage": {
      "activation": "Instantaneous upon successful melee hit with the weapon",
      "duration": "Until start of next turn or until the start of your next action, whichever occurs first",
      "endsWhen": "The effect ends when you miss a hit or use another action that ends it.",
      "charges": "Unlimited; recharges at the end of each long rest"
    },
    "priceReason": "The hammer's unique properties and historical significance justify its moderate price.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T22:05:43.392745+00:00",
    "aiReviewedAt": "2026-07-22T22:05:43.392745+00:00",
    "aiReviewVersion": 1
  },
  "midlands_soul_ward": {
    "id": "midlands_soul_ward",
    "name": "Soul Ward Amulet",
    "description": "The Soul Ward Amulet is a relic crafted from the bones of fallen warriors, its surface etched with ancient runes. It hums softly when worn, drawing upon the essence of past battles to protect its bearer. This amulet not only grants +2 to saving throws against magical effects but also absorbs 1d4 negative energy damage per use. Its power is tethered to Hyrule’s ancient guardians and draws strength from their memories.",
    "category": "equipment",
    "price": 340,
    "icon": "🪦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Absorbs Negative Energy",
      "Enhanced Saving Throws"
    ],
    "vendor": "midlands",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorbs Negative Energy",
        "rules": "When activated, the amulet absorbs 1d4 negative energy damage. This effect is usable once per short or long rest and ends when the user completes a short rest."
      },
      {
        "title": "Enhanced Saving Throws",
        "rules": "While wearing this amulet, you gain +2 to all saving throws against magical effects. The bonus persists until you complete a long rest."
      }
    ],
    "levelRequirementReason": "The Soul Ward Amulet is designed for those who have faced their first trials and need basic protection.",
    "vendorReason": "Midlands, known for its ancient artifacts, offers this relic to protect the brave souls of Hyrule.",
    "shippingDetail": "Ships via the Noki Coral Fleet, ensuring safe delivery from the heart of Hyrule.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "After a short rest",
      "charges": "1 use per long or short rest"
    },
    "priceReason": "The balanced XP price reflects the amulet's moderate protective benefits and its connection to ancient Hyrulean guardians.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:05:25.657920+00:00",
    "aiReviewedAt": "2026-07-22T22:05:25.657920+00:00",
    "aiReviewVersion": 1
  },
  "midlands_souls_of_the_burned_mill": {
    "id": "midlands_souls_of_the_burned_mill",
    "name": "Souls of the Burned Mill",
    "description": "The vial shimmers with an eerie, ethereal glow, its contents a swirling mass of indigo and crimson essence. Crafted from the remnants of a mill that was once ground beneath the weight of a war machine, it grants a fleeting surge in industrial efficiency. For ten seconds, you and your allies feel as if time itself has accelerated, while your enemies' morale plummets. The curse lingers, silently sapping their will to fight just long enough for victory to be secured.",
    "price": 340,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+20% Production Speed",
      "-15% Enemy Morale"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Industrial Surge",
        "rules": "When consumed, the vial grants you and your allies a +20% production speed bonus for 10 seconds. This effect is instantaneous upon consumption."
      },
      {
        "title": "Morale Drain",
        "rules": "For 10 seconds after consuming the vial, enemies within a 30-foot radius suffer a -15% morale penalty to attack rolls and saving throws. The effect ends when the duration expires or if you take any action."
      }
    ],
    "levelRequirementReason": "This item requires at least second-level proficiency in industrial magic for its effects to be fully realized.",
    "vendorReason": "The Midlands are well-known for their expertise in crafting items that blend history with magic, and the souls of the burned mill is a testament to this tradition.",
    "shippingDetail": "Ships via Koopa Postal's express service, ensuring swift delivery. However, due to its fragile nature, it must be handled with care during transit.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "10 seconds",
      "endsWhen": "The duration expires or you take any action",
      "charges": "Unlimited; the vial regenerates after a short rest"
    },
    "priceReason": "Crafted from rare and precious mill remains, this item offers significant industrial advantages in combat, making it a valuable yet balanced purchase.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:24:43.909054+00:00",
    "aiReviewedAt": "2026-07-24T23:24:43.909054+00:00",
    "aiReviewVersion": 1
  },
  "midlands_spectral_mech_anvil": {
    "id": "midlands_spectral_mech_anvil",
    "name": "Anvil of the Whispering Iron",
    "description": "The Anvil of the Whispering Iron is a sentient forge that hums with the ghostly whispers of steel itself. Crafters who speak its language can melt iron into weapons and armor that glow with spectral energy, their edges shimmering in the dark like living light. The anvil's voice speaks not in words but in the song of metal, guiding users to craft masterpieces that resonate with a supernatural power.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Smithing",
      "Enchanted Armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Spectral Smithing",
        "rules": "When activated as an action, the user can melt iron into weapons or armor that glow with spectral energy. These items have a +20% crafting speed for metal items and grant a +50% chance to receive bonus enchantments from forging."
      },
      {
        "title": "Enchanted Armor",
        "rules": "When used in combat, the anvil reduces enemy armor by 10% for up to 3 rounds. This effect ends when the user ceases to use the anvil or if a successful DC 15 Wisdom (Perception) check is made against it."
      }
    ],
    "levelRequirementReason": "Crafting with such precision requires a certain level of experience and control over one's abilities.",
    "vendorReason": "Midlands, known for their mastery of metalwork, are the perfect vendors to sell this enchanted anvil that enhances their craft.",
    "shippingDetail": "Ships via Boo Spectral Mail; delivery may take up to one week due to spectral interference.",
    "usage": {
      "activation": "Activates as a standard action, with unlimited uses per day that recharge at dawn.",
      "duration": "Instantaneous effect for each use of the anvil during combat.",
      "endsWhen": "The effect ends when the user stops using the anvil or if a successful DC 15 Wisdom (Perception) check is made against it.",
      "charges": "Unlimited uses per day, recharging at dawn."
    },
    "priceReason": "This anvil's price reflects its rarity and the unique crafting abilities it grants, making it a valuable asset to any blacksmith or adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:06:21.306765+00:00",
    "aiReviewedAt": "2026-07-22T22:06:21.306765+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_belt": {
    "id": "midlands_steel_belt",
    "name": "The Iron Girth of Aegis Command",
    "description": "The Iron Girth of Aegis Command is a reinforced steel belt etched with the sigil of the Iron Legion, forged in the heart of Midland's Armory. This formidable piece not only grants immunity to poison and blunt force but also enhances stamina during prolonged battles, ensuring that its wearer remains steadfast under siege. Crafted by master blacksmiths using ancient techniques passed down through generations, this belt is both a symbol of strength and a practical tool in the hands of those who seek to command the battlefield.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Poison Immunity",
      "Stamina Boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Poison Immunity",
        "rules": "The wearer gains immunity to poison damage. This effect is active as long as the belt is worn and does not require any action or activation."
      },
      {
        "title": "Stamina Boost",
        "rules": "While wearing this belt, the wearer's stamina regeneration increases by 20% during prolonged battles. This effect persists for one hour after each battle, but only while the belt remains in use."
      }
    ],
    "levelRequirementReason": "The craftsmanship and magical properties of The Iron Girth of Aegis Command demand a high level of expertise to wield effectively.",
    "vendorReason": "Midlands is renowned for its armories, and this belt's origin ensures it is sold only by them.",
    "shippingDetail": "The belt arrives swiftly via Lakitu Drones, ensuring it reaches the buyer within a day of purchase.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (while worn)",
      "endsWhen": "Removes when removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the belt's rare craftsmanship and magical properties, providing a balanced value for players.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:06:19.825895+00:00",
    "aiReviewedAt": "2026-07-22T22:06:19.825895+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_blood_glove": {
    "id": "midlands_steel_blood_glove",
    "name": "Steel Blood Glove",
    "description": "The Steel Blood Glove, forged from slag and Toad iron, drips with the blood of executed prisoners, imbued with their dark rage. This gauntlet amplifies your crushing force in combat, doubling the impact of your strikes, and grants a +30% chance to inflict Bleed on enemies you hit. Its wearer feels the primal fury coursing through their veins as they regenerate armor by 2d6 points each time they take damage.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+50% crushing force damage",
      "30% bleed on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Crushing Force Amplification",
        "rules": "When you make a melee attack, the Steel Blood Glove multiplies your damage by 1.5 times. This effect lasts for the duration of one short rest or until expended."
      },
      {
        "title": "Bleed on Hit",
        "rules": "Whenever you hit an enemy with a melee attack while wearing the glove, there is a 30% chance that they bleed, dealing 1d6 damage at the start of their next turn. This effect can occur multiple times per fight but resets after each short or long rest."
      }
    ],
    "levelRequirementReason": "This gauntlet demands a seasoned fighter who has faced significant combat to wield its dark power.",
    "vendorReason": "The Midlands are known for their blacksmiths and the grim stories of their creations, making them the perfect vendor for this grisly artifact.",
    "shippingDetail": "Due to its cursed nature, the Steel Blood Glove requires extra precautions. It ships via Koopa Postal's secure armored courier service.",
    "usage": {
      "activation": "Instantaneous activation upon donning; it can be removed at any time but does not require an action.",
      "duration": "Until expended or removed",
      "endsWhen": "At the start of your next turn after removal, or if you take a short rest",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced at this price to reflect its dark power and cursed nature, ensuring it remains a rare but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:06:40.310273+00:00",
    "aiReviewedAt": "2026-07-22T22:06:40.310273+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_blood_potion": {
    "id": "midlands_steel_blood_potion",
    "name": "Steel Blood Potion",
    "description": "The vial of steel blood glimmers like polished iron, its surface etched with runes that whisper of forges long past. Consuming this potion fortifies your resolve, granting a surge of strength and resilience to withstand fire and poison. For the enforcer who faces the forge’s might, it offers not just healing but a fleeting bond with the very heart of steel itself, enhancing your defenses until the molten essence has run its course.",
    "price": 340,
    "icon": "🔮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+30% HP recovery on use",
      "Temporary resistance to fire and poison damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail - Swift Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Steel Resolve",
        "rules": "For the duration of one turn, you gain temporary hit points equal to your Constitution modifier (minimum +1) for every point of temporary hit points granted by this potion. This effect ends when you take damage or if you use another effect that grants temporary hit points."
      },
      {
        "title": "Enhanced Defense",
        "rules": "For 10 minutes after drinking, you have resistance to fire and poison damage. This effect ends if you are incapacitated or if the duration expires."
      }
    ],
    "levelRequirementReason": "This potion is designed for all enforcers, offering immediate support regardless of their current level.",
    "vendorReason": "The Midland blacksmiths are renowned for their expertise in steel and forges, making them the ideal purveyors of a potion that draws its power from such origins.",
    "shippingDetail": "Delivered via spectral means, this potion arrives in pristine condition, ensuring its potency remains intact.",
    "usage": {
      "activation": "Consume the potion as a bonus action.",
      "duration": "Until the end of your next turn for Steel Resolve; 10 minutes total for Enhanced Defense.",
      "endsWhen": "You take damage or use another effect that grants temporary hit points, or after 10 minutes respectively.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity and the specific benefits it provides to enforcers justify its moderate price in experience.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:06:44.704609+00:00",
    "aiReviewedAt": "2026-07-22T22:06:44.704609+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_crown_of_the_silencer": {
    "id": "midlands_steel_crown_of_the_silencer",
    "name": "Crown of the Silent Forge",
    "description": "The Crown of the Silent Forge is a ceremonial helmet crafted from the salvaged armor of war machines. Its surface gleams with the scars of countless battles, and its weight feels both ancient and resilient. When you successfully dodge an attack, this helm grants you stealth for 3 seconds, allowing you to slip past foes unseen. Additionally, it reduces enemy perception by 20%, making them less likely to notice your movements in combat.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Stealth on Dodge",
      "Reduced Enemy Perception"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth on Dodge",
        "rules": "When you successfully dodge an attack, as a reaction, you gain the benefits of the Cloak of Shadows feature for 3 seconds. This effect can only be used once per short or long rest."
      },
      {
        "title": "Reduced Enemy Perception",
        "rules": "Enemies within 10 feet have disadvantage on Perception checks to notice you. This effect lasts until the start of your next turn. You can use this ability a number of times equal to your Charisma modifier (minimum once)."
      }
    ],
    "levelRequirementReason": "This helm requires at least level 5 to wield effectively, as it demands subtle control and experience in combat.",
    "vendorReason": "Midlands is known for its expertise in reclaiming and reforging ancient weapons and armor, making the Crown of the Silent Forge a fitting addition to their inventory.",
    "shippingDetail": "The shipment via Void Drifter Relay ensures swift delivery, but the package must be picked up within 24 hours upon arrival.",
    "usage": {
      "activation": "Reaction (Stealth on Dodge), Action (Reduced Enemy Perception)",
      "duration": "Instantaneous for Stealth; until start of next turn for Reduced Enemy Perception",
      "endsWhen": "The effects end when the duration expires or you take a hostile action.",
      "charges": "Unlimited uses, but only one instance of the 'Stealth on Dodge' effect can be active at any time."
    },
    "priceReason": "The Crown's rarity and unique crafting materials justify its price in experience points.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:06:38.455726+00:00",
    "aiReviewedAt": "2026-07-22T22:06:38.455726+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_glove": {
    "id": "midlands_steel_glove",
    "name": "Ironclad Gauntlet",
    "description": "The Ironclad Gauntlet is a reinforced steel glove forged in the heart of an ancient forge, its surface etched with runes that whisper of a cogworker's fate. When worn, it channels the relentless power of the machine, granting +20% damage to heavy strikes and dampening enemy morale by -15%. The gauntlet hums with latent energy, occasionally triggering Cogwork Fury: a 5% chance on each hit to unleash a surge of 1d6 damage with a 10% critical chance multiplier.",
    "category": "equipment",
    "price": 1600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage to heavy strikes",
      "-15% enemy morale when worn"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cogwork Fury",
        "rules": "There is a 5% chance on each hit from this gauntlet to trigger Cogwork Fury. The effect deals 1d6 + 0.25 Str modifier damage and has a 10% chance to deal a critical hit."
      },
      {
        "title": "Morale Dampening",
        "rules": "-15% morale reduction on enemies within 30 feet, lasts until the end of your next turn, and can be reactivated once per short or long rest."
      }
    ],
    "levelRequirementReason": "A basic level requirement ensures that even novices can benefit from this gauntlet's mechanical prowess.",
    "vendorReason": "Midlands, known for its robust and durable equipment, is the perfect vendor for the Ironclad Gauntlet.",
    "shippingDetail": "Ships via Koopa Postal’s express delivery service with a 2-day transit time.",
    "usage": {
      "activation": "Instantaneous activation when donning or doffing the gauntlet.",
      "duration": "Until removed, reactivated once per short or long rest.",
      "endsWhen": "Removal of the gauntlet or at the end of a short or long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced XP price reflects its rare quality and unique mechanical properties, offering a fair value for players seeking to enhance their combat prowess.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:07:00.977437+00:00",
    "aiReviewedAt": "2026-07-22T22:07:00.977437+00:00",
    "aiReviewVersion": 1
  }
};
