// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_003 = {
  "almost_edge_regal_emblem": {
    "id": "almost_edge_regal_emblem",
    "name": "Regal Emblem",
    "description": "The Regal Emblem is a forged insignia of the fallen Sovereignty Act, bearing the blood-stained seal of the Regal Empire’s rebellion. Smuggled from the Valley of Bowser under Kamek’s watchful eye, this metal badge whispers of the empire’s legacy to any who wear it.",
    "price": 99000,
    "icon": "⚔",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Command Presence",
      "Sovereignty Surge",
      "Mental Fatigue"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Command Presence",
        "rules": "While the emblem is worn, all allies within 30 feet of the wearer gain a +2 bonus to attack rolls. This effect is passive and constant."
      },
      {
        "title": "Sovereignty Surge",
        "rules": "As a bonus action, you can channel the emblem's power. Roll a d6; on a 6, all allies within 30 feet gain 1d8 temporary hit points and advantage on their next attack roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Mental Fatigue",
        "rules": "Each time you use Sovereignty Surge, the emblem's whispers intensify. After 3 uses, the wearer must succeed on a DC 15 Wisdom saving throw or become stunned until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The legendary nature of the emblem and its mental strain require a high level of mental fortitude.",
    "vendorReason": "Almost Edge specializes in artifacts tied to the fall of the Sovereignty Act.",
    "shippingDetail": "Delivered via a line of Goombas; may take 1d4 days depending on terrain.",
    "usage": {
      "activation": "Passive (Command Presence) or Bonus Action (Sovereignty Surge)",
      "duration": "1 round for Surge",
      "endsWhen": "The effect ends when the wearer moves out of range or the Surge duration expires.",
      "charges": "3 uses before Mental Fatigue check"
    },
    "priceReason": "Reduced from 50,000 to reflect a balanced legendary item cost for a level 10 character.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-21T23:22:07.595414+00:00",
    "aiReviewedAt": "2026-07-21T23:22:07.595414+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_soul_trade_satchel": {
    "id": "almost_edge_soul_trade_satchel",
    "name": "Soul Trade Satchel",
    "description": "This Soul Trade Satchel is a heavy, leather pouch that visibly strains under the weight of a bargain. Crafted by Goomba Ground Delivery with Asgard’s blessing, the satchel's fabric ripples with the faint, ghostly echoes of those who have been traded.",
    "price": 100000,
    "icon": "💰",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Soul Exchange",
      "Faction Bargaining",
      "Shadowfell Protection"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Soul Exchange",
        "rules": "As an action, you can place a creature's soul (from a deceased creature within 30 feet) into the satchel to receive 10 gold pieces, or spend 10 gold pieces to manifest a soul from the satchel. Each use creates a minor reality tear, causing the user to take 1d6 psychic damage."
      },
      {
        "title": "Faction Bargaining",
        "rules": "While holding the satchel, you gain Advantage on Charisma (Persuasion) checks made to trade with members of the Onyx Hand or Fawful’s minions. Additionally, you can trade a soul to the satchel to receive one random mechanical item from Fawful’s stash (DC 15 Arcana check to determine quality)."
      },
      {
        "title": "Shadowfell Protection",
        "rules": "While you are in the Shadowfell, the satchel provides a passive aura. You have immunity to effects that would cause you to lose your soul or have it extracted until you leave the plane."
      }
    ],
    "levelRequirementReason": "The complexity of handling soul-bound bargains requires a high degree of spiritual fortitude.",
    "vendorReason": "The almost_edge vendor specializes in high-risk, high-reward artifacts of this nature.",
    "shippingDetail": "Delivered via heavy-lift Goomba transport; items are handled with extreme care to prevent reality leakage.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends once the gold is received or the item is manifested.",
      "charges": "Unlimited uses, but limited by the user's ability to withstand psychic damage."
    },
    "priceReason": "The price reflects its legendary status and the high-risk nature of soul manipulation.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T23:22:39.478018+00:00",
    "aiReviewedAt": "2026-07-21T23:22:39.478018+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_syrups_scorched_glove": {
    "id": "almost_edge_syrups_scorched_glove",
    "name": "Syrups Scorched Glove",
    "description": "The Syrups Scorched Glove is a battle-worn gauntlet forged by the Servants Cosmic during the Crimson Fleet’s final stand. Once worn by Captain Syrups’ personal guard, the scorched leather still radiates the heat of magical explosions.",
    "category": "equipment",
    "price": 5800,
    "icon": "🗡",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Wario Land Precision",
      "Staggering Strike",
      "Explosive Resilience"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Wario Land Precision",
        "rules": "You gain a +2 bonus to attack rolls made with melee weapons against creatures belonging to the Wario Land faction."
      },
      {
        "title": "Staggering Strike",
        "rules": "When you hit a creature with a melee weapon attack, the target must succeed on a DC 15 Strength saving throw or be Staggered (unable to take reactions or move) until the start of your next turn."
      },
      {
        "title": "Explosive Resilience",
        "rules": "You gain resistance to fire damage from magical sources; however, when you take fire damage from a magical explosion, you take 1d6 fire damage as the glove's scorched fibers react."
      }
    ],
    "levelRequirementReason": "The glove's defensive properties and combat bonuses are balanced for mid-tier adventurers.",
    "vendorReason": "The vendor specializes in artifacts from the Crimson Fleet's history.",
    "shippingDetail": "Delivered via heavy-duty Goomba sled to ensure the scorched heat doesn't damage nearby parcels.",
    "usage": {
      "activation": "Passive/Automatic",
      "duration": "Permanent",
      "endsWhen": "The glove is destroyed or the wearer is unattuned",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the specific combat advantages provided against Wario Land units.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-21T23:23:07.852878+00:00",
    "aiReviewedAt": "2026-07-21T23:23:07.852878+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_teyvat_soul_collar": {
    "id": "almost_edge_teyvat_soul_collar",
    "name": "Teyvat Soul Collar",
    "description": "The Teyvat Soul Collar is a heavy metallic band forged by the Mages Guild using forbidden Teyvat Archives. It hums with a rhythmic pulse, designed to bind and channel the volatile elemental wills of its wearer.",
    "category": "equipment",
    "price": 5800,
    "icon": "🌊",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Elemental Synergy",
      "Soul Drain",
      "Vision Resonance"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Elemental Synergy",
        "rules": "While wearing the collar, you gain a +1 bonus to damage rolls for any attack or spell that triggers an elemental reaction. This bonus stacks with other items that possess the 'Teyvat Elemental Synergy' property."
      },
      {
        "title": "Soul Drain",
        "rules": "When you hit a creature with a melee weapon attack, the collar leeches essence; the target takes an additional 1d6 necrotic damage. This effect ends if the target dies or if you miss the attack."
      },
      {
        "title": "Vision Resonance",
        "rules": "The first time you equip the collar, you must succeed on a DC 14 Wisdom saving throw. On a failure, you take 2d6 psychic damage as the collar binds to your spirit; on a success, you gain a +1 bonus to your next initiative roll."
      }
    ],
    "levelRequirementReason": "The collar's binding properties are too volatile for those without significant spiritual fortitude.",
    "vendorReason": "This vendor specializes in high-tier artifacts and cursed equipment.",
    "shippingDetail": "Delivered via high-altitude bird courier; may arrive with slight feathers stuck to the packaging.",
    "usage": {
      "activation": "Passive / Equipping",
      "duration": "Permanent while worn",
      "endsWhen": "The collar is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare materials and the dangerous nature of the Mages Guild's forbidden crafting.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-21T23:23:35.622135+00:00",
    "aiReviewedAt": "2026-07-21T23:23:35.622135+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_torn_tome": {
    "id": "almost_edge_torn_tome",
    "name": "Torn Tome of the Regency’s Last Words",
    "description": "The Torn Tome of the Regency’s Last Words is a crumbling book of fractured logic discovered beneath a fallen pillar in the heart of the edge. Its pages, torn by magic, contain the final recorded thoughts of Admiral B. Toad from the regency’s final stand.",
    "price": 610,
    "icon": "📖",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Diplomatic Insight",
      "Faction Revelation",
      "Echoes of the Fallen"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Diplomatic Insight",
        "rules": "While holding the tome, you gain a +1 bonus to Charisma (Persuasion) checks made against faction leaders. This effect is constant while the book is held."
      },
      {
        "title": "Faction Revelation",
        "rules": "As an action, you can read a passage of the tome to learn the hidden loyalties of all NPCs within 60 feet who belong to a known faction. This effect is instantaneous and can be used a number of times equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Echoes of the Fallen",
        "rules": "Whenever you use the Faction Revelation effect, roll a d6. On a 1, you experience a mental hallucination of a past battle; you must succeed on a DC 13 Wisdom saving throw or be Incapacitated until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The complexity of the fractured logic requires a seasoned mind to interpret without immediate psychological strain.",
    "vendorReason": "The vendor specializes in artifacts recovered from the ruins of the edge.",
    "shippingDetail": "Delivered via clandestine transport; requires a successful DC 12 Stealth check by the courier to avoid detection during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends after the information is revealed or the hallucination concludes.",
      "charges": "Proficiency Bonus per long rest"
    },
    "priceReason": "The price is adjusted to reflect the high rarity and the significant utility provided to social and exploration gameplay.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-21T23:24:06.481344+00:00",
    "aiReviewedAt": "2026-07-21T23:24:06.481344+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_tropical_tether": {
    "id": "almost_edge_tropical_tether",
    "name": "Tropical Tether",
    "description": "The Tropical Tether is a shimmering, vine-like artifact woven from the essence of Shine Sprites. This artifact binds the user to the Isle Delfino’s tropical rhythms, pulsing with the warmth of the sun.",
    "category": "equipment",
    "price": 160,
    "icon": "🌴",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Tropical Flight",
      "Vitality Drain",
      "Tropical Awareness"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Tropical Flight",
        "rules": "As a bonus action, you can activate the tether to gain a flying speed of 30 feet. This effect lasts for 1 minute or until you are incapacitated. You can only use this effect while within 5 miles of Pianta Village or Noki Bay."
      },
      {
        "title": "Vitality Drain",
        "rules": "While using Tropical Flight, you must succeed on a DC 12 Constitution saving throw at the start of each of your turns. On a failed save, you take 1d4 necrotic damage as the tether drains your vitality."
      },
      {
        "title": "Tropical Awareness",
        "rules": "While the tether is active, you have advantage on Wisdom (Perception) checks made to detect hidden creatures or environmental hazards in tropical environments."
      }
    ],
    "levelRequirementReason": "The tether requires a level 4 character to withstand the magical strain of the Shine Sprite essence.",
    "vendorReason": "The vendor specializes in rare tropical artifacts and exotic equipment.",
    "shippingDetail": "Delivered via standard ground transport; may arrive slightly wilted if not kept in a humid container.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires, the user becomes incapacitated, or the user chooses to dismiss the effect.",
      "charges": "Unlimited uses (limited by HP costs)"
    },
    "priceReason": "Adjusted to 1000 XP to reflect its uncommon status and high-utility flight mechanics.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-21T23:24:35.574452+00:00",
    "aiReviewedAt": "2026-07-21T23:24:35.574452+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_viral_vault": {
    "id": "almost_edge_viral_vault",
    "name": "Viral Vault",
    "description": "The Viral Vault is a pulsating data core forged by Chaos Dwarfs to broadcast internet memes into the physical plane. This heavy, metallic device contains the secret, unionized delivery memo of The Shy Guys and hums with chaotic digital energy.",
    "price": 110000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Meme Infection",
      "Reinforced Chassis",
      "Lore Trigger"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Meme Infection",
        "rules": "As an action, you can pulse the Vault to target one creature you can see within 60 feet. The target must succeed on a DC 17 Intelligence saving throw or become infected by a meme-based mental curse. While cursed, the creature has disadvantage on Wisdom (Insight) and Charisma (Persuasion) checks for 1 hour. You can target a number of creatures equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Reinforced Chassis",
        "rules": "The Vault's durability is increased by 200%. It has 3 times the hit points of a standard data core and is immune to the critical hit property from non-magical weapons."
      },
      {
        "title": "Lore Trigger",
        "rules": "As an action, you can broadcast a specific piece of internet lore. The DM determines a local environmental change or minor event (such as a nearby NPC reacting in confusion or a door unlocking) based on the lore provided. This can be used once per day."
      }
    ],
    "levelRequirementReason": "The Vault's ability to manipulate reality via digital memes requires high-level magical attunement.",
    "vendorReason": "The vendor specializes in chaotic, high-tech artifacts that blur the line between data and reality.",
    "shippingDetail": "Delivered via high-speed projectile; may arrive with minor surface scuffs but fully functional.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour (Curse) or Instantaneous (Lore)",
      "endsWhen": "Ends after 1 hour or when the daily use limit is reached.",
      "charges": "Limited by Proficiency Bonus per long rest."
    },
    "priceReason": "Adjusted to reflect a legendary item's power while remaining accessible for high-level play.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-21T23:25:08.099279+00:00",
    "aiReviewedAt": "2026-07-21T23:25:08.099279+00:00",
    "aiReviewVersion": 1
  },
  "alvarez_empire_dragon_scale_gloves": {
    "id": "alvarez_empire_dragon_scale_gloves",
    "name": "Alvarez Empire Dragon Scale Gloves",
    "description": "Crafted from the discarded hide of a great drake, these Alvarez Empire Dragon Scale Gloves are heavy, textured gauntlets. Forged by the renowned Empire Dragonhunters, the iridescent scales provide a natural defense against searing heat.",
    "category": "equipment",
    "price": 5900,
    "icon": "🧤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fire Resistance",
      "Enhanced Grip",
      "Surface Abrasion"
    ],
    "vendor": "alvarez_empire_fortress",
    "shippedBy": "Scale Sheath",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "You have advantage on saving throws against fire damage and effects that deal fire damage."
      },
      {
        "title": "Enhanced Grip",
        "rules": "You gain a +1 bonus to Strength (Athletics) checks made to grapple, climb, or hold onto objects."
      },
      {
        "title": "Surface Abrasion",
        "rules": "The jagged scales on the palms allow you to cast 'Spider Climb' only on stone or metal surfaces; the effect lasts for 10 minutes and ends if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "The high durability of dragon scales requires a seasoned warrior to wield effectively.",
    "vendorReason": "The fortress is the primary hub for the Empire Dragonhunters who harvest these scales.",
    "shippingDetail": "Wrapped in oil-treated leather to prevent the scales from catching on transport crates.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The item is destroyed or removed",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted from 20,000 to 5,000 XP to reflect a Rare item that provides significant utility without being game-breaking.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-21T23:25:34.816492+00:00",
    "aiReviewedAt": "2026-07-21T23:25:34.816492+00:00",
    "aiReviewVersion": 1
  },
  "alvarez_empire_dragon_scale_spatula": {
    "id": "alvarez_empire_dragon_scale_spatula",
    "name": "Alvarez Empire Dragon Scale Spatula",
    "description": "The Alvarez Empire Dragon Scale Spatula is a heavy-duty culinary tool forged from reinforced draconic scales. Crafted by the renowned Empire Scalers, this heat-resistant spatula is specifically designed to handle volatile spice rubs without melting or warping.",
    "category": "equipment",
    "price": 160,
    "icon": "🌶️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Perfect Flip",
      "Draconic Durability"
    ],
    "vendor": "alvarez_empire_palace",
    "shippedBy": "Scale Sp Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Flip",
        "rules": "While using this spatula to cook, you have advantage on any ability checks made to flip, toss, or turn hot food items. Additionally, you can use an action to flip a hot spice rub without taking any fire damage from the heat."
      },
      {
        "title": "Draconic Durability",
        "rules": "The spatula is resistant to non-magical fire damage and has a +1 bonus to AC when used as a shield or improvised weapon. If the spatula takes more than 20 points of fire damage in a single instance, the scales flake slightly, reducing the AC bonus to +0 until repaired."
      }
    ],
    "levelRequirementReason": "The item is a culinary tool and does not require high-level proficiency to operate.",
    "vendorReason": "The palace kitchen serves high-end cuisine that requires specialized, dragon-scale equipment.",
    "shippingDetail": "Shipped in a temperature-controlled crate to ensure the scales remain supple.",
    "usage": {
      "activation": "Passive/Action",
      "duration": "Permanent",
      "endsWhen": "The spatula is destroyed or the scales are completely worn away.",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted to reflect a high-quality uncommon utility item rather than a legendary artifact.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-21T23:26:00.479982+00:00",
    "aiReviewedAt": "2026-07-21T23:26:00.479982+00:00",
    "aiReviewVersion": 1
  },
  "alvarez_empire_dragon_seed_service": {
    "id": "alvarez_empire_dragon_seed_service",
    "name": "Alvarez Empire Dragon Seed Service",
    "description": "The Alvarez Empire Dragon Seed is a scorched, pulsing seed that feels uncomfortably hot to the touch. Cultivated by the Empire Druids, this botanical specimen is designed to sprout into a draconic vine.",
    "price": 5400,
    "icon": "🌱",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Draconic Breath",
      "Sprouting Growth"
    ],
    "vendor": "alvarez_empire_garden",
    "shippedBy": "Fiery Pod",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Draconic Breath",
        "rules": "As an action, a creature holding the sprouted vine can exhale a 15-foot cone of fire. Each creature in that area must make a DC 14 Dexterity saving throw, taking 1d6 fire damage on a failed save, or half as much on a success. This effect can be used once per long rest."
      },
      {
        "title": "Sprouting Growth",
        "rules": "When planted in soil, the seed takes 24 hours to sprout into a 5-foot-tall vine. Once sprouted, the vine remains active for 1 hour before withering and becoming inert."
      }
    ],
    "levelRequirementReason": "The high-intensity draconic energy requires a character of at least 6th level to safely handle and channel.",
    "vendorReason": "The Empire Druids maintain the garden where these specific draconic seeds are cultivated.",
    "shippingDetail": "The seed is shipped in a heat-resistant pod to prevent it from scorching the courier's transport.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour (after 24-hour growth)",
      "endsWhen": "The vine withers after its 1-hour duration or after the fire breath is used once.",
      "charges": "1 use per seed"
    },
    "priceReason": "Adjusted to reflect a rare botanical item that provides a significant one-time tactical advantage.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-21T23:26:29.028835+00:00",
    "aiReviewedAt": "2026-07-21T23:26:29.028835+00:00",
    "aiReviewVersion": 1
  },
  "alvarez_empire_dragon_spice_rub_recipe": {
    "id": "alvarez_empire_dragon_spice_rub_recipe",
    "name": "Recipe: Alvarez Empire Dragon Spice Rub",
    "description": "This Alvarez Empire Dragon Spice Rub is a scorched parchment containing the secret techniques of the Dragon Chefs. The recipe describes how to blend volatile dragonfire spices to create a meat rub that crackles with intense heat.",
    "price": 610,
    "icon": "🌶️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Dragonfire Seasoning",
      "Recipe Acquisition"
    ],
    "vendor": "alvarez_empire_palace",
    "shippedBy": "Spicy Scale Summary",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dragonfire Seasoning",
        "rules": "As an action, you can apply this rub to a meal for one creature. The next time that creature hits a target with a melee weapon attack within 1 minute of consuming the meal, the attack deals an additional 1d4 fire damage."
      },
      {
        "title": "Recipe Acquisition",
        "rules": "Upon purchasing this recipe, you permanently learn the 'Rub and Cook' technique. You can now prepare meals that provide the Dragonfire Seasoning effect using any amount of Dragon Spices as a component."
      }
    ],
    "levelRequirementReason": "The recipe is a piece of knowledge that can be learned by any adventurer capable of basic cooking.",
    "vendorReason": "The palace serves as the primary hub for the Alvarez Empire's culinary secrets.",
    "shippingDetail": "The parchment is sealed in a heat-resistant wax pouch to prevent the spices from evaporating during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The meal is consumed or the time limit expires",
      "charges": "One-time use per parchment; recipe is permanent"
    },
    "priceReason": "Reduced from 8000 to reflect a fair market price for a rare culinary secret rather than a high-tier magical artifact.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T23:26:55.491064+00:00",
    "aiReviewedAt": "2026-07-21T23:26:55.491064+00:00",
    "aiReviewVersion": 1
  },
  "alvarez_empire_loyalty_points_program": {
    "id": "alvarez_empire_loyalty_points_program",
    "name": "Alvarez Empire Loyalty Points Program",
    "description": "The Alvarez Empire Loyalty Points Program is a physical membership card issued by the Alvarez Empire Marketing department. This card allows you to track your expenditures and accumulate rewards for your continued patronage of imperial services.",
    "category": "premium",
    "price": 160,
    "icon": "💳",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Loyalty Rewards",
      "Preferred Customer Status"
    ],
    "vendor": "alvarez_empire",
    "shippedBy": "Imperial Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Loyalty Rewards",
        "rules": "Every time you spend 100 gp on goods or services within the Empire, you earn 1 Loyalty Point. Upon reaching 10 Loyalty Points, you may spend them as a free action to receive one common magic item worth up to 50 gp from a local merchant. Points expire 7 days after they are earned."
      },
      {
        "title": "Preferred Customer Status",
        "rules": "While holding this card, you are identified as a high-value consumer. Hostile entities of the Empire gain Advantage on Wisdom (Perception) checks made to locate you, and you have Disadvantage on Stealth checks made while within city limits."
      }
    ],
    "levelRequirementReason": "The program is accessible to any adventurer capable of participating in imperial commerce.",
    "vendorReason": "The Alvarez Empire is the primary entity managing the marketing and loyalty rewards program.",
    "shippingDetail": "Delivered via standard imperial mail with a 2-day transit time to any registered outpost.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The card is lost, destroyed, or the membership is revoked by the Empire.",
      "charges": "Unlimited (Points are tracked by the DM)"
    },
    "priceReason": "Reduced from 12,500 to reflect a standard membership fee rather than a high-tier artifact.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-21T23:27:22.526942+00:00",
    "aiReviewedAt": "2026-07-21T23:27:22.526942+00:00",
    "aiReviewVersion": 1
  },
  "among_us_sabotage_kit": {
    "id": "among_us_sabotage_kit",
    "name": "Sabotage Kit",
    "description": "The Sabotage Kit is a collection of illicit tools and wires used for causing chaos and executing impostor tricks. This forbidden gear, sourced from the rogueport black market, allows the user to manipulate the environment and move with unsettling speed.",
    "category": "forbidden",
    "price": 5400,
    "icon": "🛠️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Environmental Sabotage",
      "Vent Travel",
      "Suspicion Risk"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Environmental Sabotage",
        "rules": "As an action, you can use the kit to disable lights or lock doors in a 60-foot radius. For 1 minute, the area is shrouded in magical darkness and exits are sealed. A creature can use an action to make a DC 14 Strength check to force a door open or a DC 14 Thieves' Tools check to restore the lights."
      },
      {
        "title": "Vent Travel",
        "rules": "As a bonus action, you can teleport up to 30 feet to an unoccupied space within 30 feet, provided there is a ventilation shaft or crawlspace at both the starting and ending points."
      },
      {
        "title": "Suspicion Risk",
        "rules": "Whenever you use the Vent Travel ability, you must roll a d20. On a roll of 1-5, your actions become visibly erratic, and all creatures within 10 feet of you become aware of your presence until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The complexity of manipulating infrastructure and high-speed movement requires a baseline of martial or arcane proficiency.",
    "vendorReason": "The black market specializes in illicit tools and forbidden items used for sabotage.",
    "shippingDetail": "Delivered in a lead-lined crate; the courier refuses to sign for the contents.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute for Sabotage; Instantaneous for Vent Travel",
      "endsWhen": "The Sabotage effect ends after 1 minute or if the user spends an action to repair it; Vent Travel is a one-time teleport per activation.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "Adjusted to reflect a rare utility item that provides significant tactical mobility and battlefield control.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-21T23:27:55.160062+00:00",
    "aiReviewedAt": "2026-07-21T23:27:55.160062+00:00",
    "aiReviewVersion": 1
  },
  "ancestral_weapon_forging": {
    "id": "ancestral_weapon_forging",
    "name": "Ancestral Weapon Forging",
    "description": "The Ancestral Weapon Forging service utilizes a master blacksmith's craft to bind the spirits of your lineage into your steel. By sacrificing a personal heirloom, the smith hammers the essence of your ancestors into your primary weapon.",
    "category": "services",
    "price": 110000,
    "icon": "⚒️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Ancestral Bond",
      "Whispers of the Fallen"
    ],
    "vendor": "steamworks",
    "shippedBy": "Forge-Fire Scroll",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Ancestral Bond",
        "rules": "The weapon becomes a +2 magic weapon. It gains a Sentience (Intelligence 1) and a unique ancestral power determined by the DM based on the heirloom's history. This bond is permanent unless the weapon is destroyed."
      },
      {
        "title": "Whispers of the Fallen",
        "rules": "While holding the weapon, you can spend 1 minute of concentration to hear the ancestors' advice. You gain advantage on one Wisdom (Insight) or Intelligence (History) check made within the next hour as they share secrets or warnings."
      }
    ],
    "levelRequirementReason": "The spiritual complexity of binding ancestral spirits requires a high level of personal presence and willpower.",
    "vendorReason": "The Steamworks possesses the industrial furnaces and specialized smithing tools required for such heavy-duty spiritual forging.",
    "shippingDetail": "The finished weapon is delivered via a heat-sealed scroll, arriving within 3 days of completion.",
    "usage": {
      "activation": "Service Requirement",
      "duration": "Permanent",
      "endsWhen": "The weapon is destroyed or the heirloom is lost.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the legendary rarity and the permanent magical enhancement provided to a primary weapon.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-21T23:28:21.345984+00:00",
    "aiReviewedAt": "2026-07-21T23:28:21.345984+00:00",
    "aiReviewVersion": 1
  },
  "angelic_halo_crown": {
    "id": "angelic_halo_crown",
    "name": "Angelic Halo Crown (Aura)",
    "description": "The Angelic Halo Crown is a circlet of shimmering gold forged by the Halo Forgers to project a sanctified radiance. It serves as a beacon of divine grace, pulsing with a soft white light that emanates from its central gemstone.",
    "price": 2000000,
    "icon": "👼",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Holy Restoration",
      "Fiendish Retribution"
    ],
    "vendor": "celestial_throne",
    "shippedBy": "Divine Radiance",
    "levelRequirement": 19,
    "factionBonus": {
      "divine": 75
    },
    "effectDetails": [
      {
        "title": "Holy Restoration",
        "rules": "Allies within 30 feet of the wearer regain 10 hit points at the start of their turn. This effect does not trigger if the ally is at full health and does not stack with other healing sources."
      },
      {
        "title": "Fiendish Retribution",
        "rules": "When a Fiend enters the wearer's reach or starts its turn within 30 feet, it takes 2d10 radiant damage. The target must succeed on a DC 18 Constitution saving throw or be pushed 10 feet away from the wearer."
      }
    ],
    "levelRequirementReason": "The item's high-impact area-of-effect healing and damage are intended for late-game play.",
    "vendorReason": "The Celestial Throne is the primary source of high-rarity holy artifacts.",
    "shippingDetail": "The item arrives via a beam of light; delivery is instantaneous upon purchase.",
    "usage": {
      "activation": "Passive",
      "duration": "1 minute per hour",
      "endsWhen": "The item is removed from the wearer's head or the wearer dies.",
      "charges": "Unlimited"
    },
    "priceReason": "The price remains high to reflect its godly rarity and constant aura effects.",
    "priceOriginal": 880000,
    "priceReviewedAt": "2026-07-21T23:28:48.096062+00:00",
    "aiReviewedAt": "2026-07-21T23:28:48.096062+00:00",
    "aiReviewVersion": 1
  },
  "angelic_wing_graft": {
    "id": "angelic_wing_graft",
    "name": "Angelic Wing Graft (Augmentation)",
    "description": "The Angelic Wing Graft is a surgical augmentation of shimmering, iridescent feathers fused to the wearer's shoulder blades. Crafted by the Seraphim Healers, these celestial wings provide a majestic presence and a divine aura of protection.",
    "price": 120000,
    "icon": "😇",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Celestial Flight",
      "Divine Resonance"
    ],
    "vendor": "heavenly_clinic",
    "shippedBy": "Divine Intervention",
    "levelRequirement": 19,
    "factionBonus": {
      "divine": 100
    },
    "effectDetails": [
      {
        "title": "Celestial Flight",
        "rules": "While the graft is active, you gain a flying speed of 60 feet. This movement is not affected by difficult terrain."
      },
      {
        "title": "Divine Resonance",
        "rules": "You gain a +1 bonus to the Save DC and Attack Rolls of any spells you cast that deal radiant damage or are of the Divine school."
      }
    ],
    "levelRequirementReason": "This legendary augmentation is only stable enough to be integrated into the physiology of a high-level mortal.",
    "vendorReason": "The Seraphim Healers are the only ones capable of performing the delicate surgery required for this graft.",
    "shippingDetail": "The item arrives via a localized rift; it cannot be intercepted by mundane means.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The graft is surgically removed or the wearer dies.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the legendary rarity and the high-tier surgical expertise required for the procedure.",
    "priceOriginal": 920000,
    "priceReviewedAt": "2026-07-21T23:29:11.577872+00:00",
    "aiReviewedAt": "2026-07-21T23:29:11.577872+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_acme_anvil_mixer": {
    "id": "animatopia_acme_anvil_mixer",
    "name": "Animatopia Acme Anvil Mixer ",
    "description": "The Animatopia Acme Anvil Mixer is a heavy, industrial-grade kitchen appliance forged by Toon Toolmakers to 'pound' dough with the force of a falling anvil. This sturdy mixer features a reinforced steel bowl and a rhythmic, metallic clanking mechanism.",
    "category": "equipment",
    "price": 160,
    "icon": "🥣",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Cartoon Culinary Advantage",
      "Boing Distraction",
      "Comical Malfunction"
    ],
    "vendor": "animatopia_studio",
    "shippedBy": "Boing Box Bash",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cartoon Culinary Advantage",
        "rules": "While using this mixer to prepare food, you have advantage on Strength (Athletics) checks made to knead, lift, or move heavy dough or ingredients."
      },
      {
        "title": "Boing Distraction",
        "rules": "As an action, you can drop the mixer. It hits the ground with a loud 'boing' sound. All creatures within 15 feet that can hear the sound must succeed on a DC 13 Wisdom saving throw or be under the effects of the Frightened condition until the end of your next turn."
      },
      {
        "title": "Comical Malfunction",
        "rules": "Whenever you roll a 1 on an attack roll or ability check using this item, it may break comically. The mixer becomes useless until it is repaired with a toolkit during a long rest."
      }
    ],
    "levelRequirementReason": "The item provides utility and minor tactical advantages suitable for early-game characters.",
    "vendorReason": "This vendor specializes in whimsical, toon-inspired equipment and tools.",
    "shippingDetail": "Shipped in a padded crate that bounces instead of thuds; delivery is instantaneous but very loud.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The Boing Distraction ends after one turn; Malfunction ends after a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 5500 to reflect an uncommon utility item that does not provide combat scaling.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-21T23:29:42.290302+00:00",
    "aiReviewedAt": "2026-07-21T23:29:42.290302+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_acme_toaster": {
    "id": "animatopia_acme_toaster",
    "name": "Animatopia Acme Toaster ",
    "description": "The Animatopia Acme Toaster is a chrome-plated kitchen appliance manufactured by Toon Toasters. It features a spring-loaded mechanism designed to launch bread with cartoonish velocity.",
    "category": "equipment",
    "price": 160,
    "icon": "🍞",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Cartoon Launch",
      "Boing Distraction",
      "Acme Malfunction"
    ],
    "vendor": "animatopia_studio",
    "shippedBy": "Pop-Up Pan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cartoon Launch",
        "rules": "As an action, you can load a piece of bread into the toaster and fire it at a target within 30 feet. The target must succeed on a DC 13 Dexterity saving throw or take 1d6 bludgeoning damage. If the target is a creature, it also gains a +1 bonus to its next Dexterity check made before the end of your next turn as it tries to dodge the lingering crumbs."
      },
      {
        "title": "Boing Distraction",
        "rules": "When the toaster finishes a cycle, it emits a loud 'boing' sound. One creature within 10 feet of the toaster must succeed on a DC 12 Wisdom saving throw or be under the effect of the distracted condition until the end of its next turn."
      },
      {
        "title": "Acme Malfunction",
        "rules": "On a natural 1 on the attack roll to fire the toaster, the device malfunctions. The user takes 1d4 fire damage from a burst of hot steam and the toaster cannot be used again until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The item is balanced for low-level utility and does not provide significant combat scaling.",
    "vendorReason": "The studio specializes in cartoon-themed equipment and prop-based weaponry.",
    "shippingDetail": "Shipped in a reinforced box to prevent premature popping during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The toaster requires a short rest to 'cool down' after 3 uses per day.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "Reduced from 5500 to reflect an uncommon utility item rather than a high-tier artifact.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-21T23:30:14.173556+00:00",
    "aiReviewedAt": "2026-07-21T23:30:14.173556+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_ancient_key": {
    "id": "animatopia_ancient_key",
    "name": "The Forgotten Key of the Feywild Courts",
    "description": "The Forgotten Key of the Feywild Courts is a heavy obsidian key etched with ancient runes of forgotten feasts and betrayals. Originally forged to unlock the gates of the Feywild’s oldest court, it pulses with a faint, rhythmic magic.",
    "price": 99000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Feywild Court Access",
      "Mental Fatigue",
      "Feywild Agility",
      "Loop Binding"
    ],
    "vendor": "animatopia",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Feywild Court Access",
        "rules": "As an action, you can attempt to unlock a Feywild gate or hidden chamber door. You must first succeed on a DC 18 Intelligence (History) check to solve the court's riddle; if you fail the check, the door remains locked. Success grants passage for 1 hour."
      },
      {
        "title": "Mental Fatigue",
        "rules": "Whenever you successfully use the key to open a door, you must succeed on a DC 13 Wisdom saving throw or suffer one level of exhaustion that lasts for 1 hour."
      },
      {
        "title": "Feywild Agility",
        "rules": "While you are within a Feywild zone, you gain a +2 bonus to all Dexterity (Acrobatics) and Dexterity (Stealth) checks."
      },
      {
        "title": "Loop Binding",
        "rules": "If you use the key while inside a magical time loop, you are automatically restrained by the loop for 1 round. You can repeat the action at the start of your next turn to attempt to break free."
      }
    ],
    "levelRequirementReason": "The complexity of the Feywild's riddles and the mental strain of the key require a character of significant experience.",
    "vendorReason": "Animatopia specializes in artifacts with complex histories and mechanical secrets.",
    "shippingDetail": "The key is delivered in a lead-lined box to prevent its magical resonance from disrupting local reality.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour (for passage)",
      "endsWhen": "The door is closed, the user leaves the zone, or the user fails a riddle check.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 7500 to reflect a balanced legendary-tier item cost that accounts for its specific utility.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-21T23:30:50.360937+00:00",
    "aiReviewedAt": "2026-07-21T23:30:50.360937+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_animatronic_costume_rental": {
    "id": "animatopia_animatronic_costume_rental",
    "name": "Animatopia Animatronic Costume Rental",
    "description": "This Animatopia Animatronic Costume Rental is a heavy, mechanical suit of plating designed to mimic a friendly robot. Crafted by the Animatopia Costume Shop, the suit features internal servos and a weathered, slightly uncanny exterior.",
    "category": "premium",
    "price": 1500,
    "icon": "🤖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Mechanical Disguise",
      "Noisy Mechanics",
      "Uncanny Presence"
    ],
    "vendor": "animatopia",
    "shippedBy": "Animatronic Porter",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Disguise",
        "rules": "While wearing the costume, you have advantage on Charisma (Deception) checks made to pass as a harmless animatronic when interacting with guards or security personnel."
      },
      {
        "title": "Noisy Mechanics",
        "rules": "The suit's internal gears are poorly insulated; after 1 hour of continuous wear, you have disadvantage on Dexterity (Stealth) checks."
      },
      {
        "title": "Uncanny Presence",
        "rules": "Children are drawn to you and may approach you willingly, but adults within 30 feet of you have disadvantage on Wisdom (Insight) checks to determine if you are a threat, as your appearance is unsettling."
      }
    ],
    "levelRequirementReason": "The item is an uncommon costume and does not require specific class features or high-level stats to operate.",
    "vendorReason": "The Animatopia Costume Shop is the primary manufacturer and retailer of these specific mechanical suits.",
    "shippingDetail": "The porter handles the heavy lifting of the bulky suit, ensuring it arrives in one piece without mechanical damage.",
    "usage": {
      "activation": "Passive (while worn)",
      "duration": "1 hour before penalty applies",
      "endsWhen": "The costume is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price was adjusted slightly downward to reflect a more standard uncommon item value while maintaining its premium status.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-21T23:31:17.531897+00:00",
    "aiReviewedAt": "2026-07-21T23:31:17.531897+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_apex_chimeric_serum": {
    "id": "animatopia_apex_chimeric_serum",
    "name": "Animatopia Apex Chimeric Serum",
    "description": "The Animatopia Apex Chimeric Serum is a glowing, viscous liquid housed in a reinforced vial. Engineered by the masters at Animatopia, this serum forcefully rewires the user's physiology to mirror the traits of three apex predators.",
    "price": 1600000,
    "icon": "🧪",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Apex Predator Traits",
      "Volatile Mutation Backlash"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Bio-Tank",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Apex Predator Traits",
        "rules": "As an action, you inject the serum to gain three specific traits from the following list: Flight (Speed of 30ft), Venom (1d8 Poison damage on hit), or Strength (Increase Strength score by 4, max 24). These traits last for 2 hours."
      },
      {
        "title": "Volatile Mutation Backlash",
        "rules": "When the 2-hour duration ends, you must succeed on a DC 18 Constitution saving throw or take 1d6 psychic damage for every hour that has passed since the serum was injected. This damage occurs at the end of each of your turns until the effect expires."
      }
    ],
    "levelRequirementReason": "The intense physiological strain of chimeric mutation requires a high level of biological resilience.",
    "vendorReason": "The scientist is the primary architect of the serum's biological formula.",
    "shippingDetail": "Shipped in a pressurized, temperature-controlled containment unit to prevent chemical degradation.",
    "usage": {
      "activation": "Action",
      "duration": "2 hours",
      "endsWhen": "The duration expires or the user dies",
      "charges": "Single use; the serum is consumed upon injection"
    },
    "priceReason": "Reduced from the original value to reflect a balanced high-tier consumable cost while maintaining its rarity.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-21T23:31:46.336470+00:00",
    "aiReviewedAt": "2026-07-21T23:31:46.336470+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_apex_dominance_serum": {
    "id": "animatopia_apex_dominance_serum",
    "name": "Animatopia Apex Dominance Serum",
    "description": "The Animatopia Apex Dominance Serum is a shimmering, viscous liquid contained within a pressurized vial. Engineered by the scientists of Animatopia, this pheromonal cocktail allows the user to project an overwhelming aura of biological authority over the natural world.",
    "price": 110000,
    "icon": "👑",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Apex Command",
      "Protective Instinct"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "High-Tech Syringe",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Apex Command",
        "rules": "As an action, you can inject the serum into your bloodstream. For 1 hour, any non-sentient beast with a Challenge Rating of 12 or lower within 60 feet must succeed on a DC 18 Wisdom saving throw or be compelled to obey your verbal commands. The beast treats you as its alpha and will not attack you or your allies unless forced to do so by a higher magical effect."
      },
      {
        "title": "Protective Instinct",
        "rules": "While the serum is active, any beast under your command that is within 30 feet of you treats you as its primary charge. These beasts will use their reactions to intercept attacks directed at you or move to shield you from harm whenever possible."
      }
    ],
    "levelRequirementReason": "The serum's potency to command high-CR beasts requires a high level of physiological and mental fortitude.",
    "vendorReason": "The scientists at Animatopia are the primary developers of pheromonal dominance technology.",
    "shippingDetail": "The serum is delivered in a temperature-controlled, pressurized syringe to maintain chemical stability.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The duration expires, the user falls unconscious, or the serum is washed out of the system by a high-level restoration spell.",
      "charges": "One-time use; the vial is destroyed upon injection."
    },
    "priceReason": "The price was adjusted from 280,000 XP to a more standard legendary tier for a single-use high-impact consumable.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-21T23:32:17.219434+00:00",
    "aiReviewedAt": "2026-07-21T23:32:17.219434+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_apex_eggs": {
    "id": "animatopia_apex_eggs",
    "name": "Animatopia Apex Hatchling Eggs",
    "description": "These Animatopia Apex Hatchling Eggs are large, pulsating shells designed to gestate juvenile apex predators. Crafted by the master scientists of Animatopia, these eggs are shipped in specialized heated tanks to ensure viability.",
    "price": 120000,
    "icon": "🥚",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Apex Predator Hatching",
      "Incubation Requirement"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Heated Tank",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Apex Predator Hatching",
        "rules": "As an action, you may crack open one egg to hatch a juvenile apex predator (CR 5). The creature is friendly to you and your allies, and it treats any creature hostile to you as an enemy. You can hatch a total of 1d4 creatures from the clutch."
      },
      {
        "title": "Incubation Requirement",
        "rules": "The eggs require a specialized incubator and 7 days of uninterrupted warmth to hatch. If the eggs are moved from the incubator or lose heat during this time, the hatching process fails and the eggs are destroyed."
      }
    ],
    "levelRequirementReason": "Summoning multiple CR 5 creatures provides significant combat power suitable only for high-level play.",
    "vendorReason": "The scientist is the primary creator and authorized distributor of these bio-engineered specimens.",
    "shippingDetail": "The shipment arrives in a pressurized, temperature-controlled container that must be plugged into a heat source upon delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The eggs are cracked or the incubation period is completed.",
      "charges": "1d4 uses (limited to the contents of the clutch)"
    },
    "priceReason": "The price reflects the extreme rarity and the high CR of the resulting creatures.",
    "priceOriginal": 280000,
    "priceReviewedAt": "2026-07-21T23:32:44.425559+00:00",
    "aiReviewedAt": "2026-07-21T23:32:44.425559+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_apex_lure": {
    "id": "animatopia_apex_lure",
    "name": "Animatopia Apex Predator Lure",
    "description": "The Animatopia Apex Predator Lure is a pressurized vial containing a highly synthesized pheromone. This volatile substance is engineered by Animatopia scientists to emit a potent biological signal that draws high-level predators to a specific coordinate.",
    "price": 98000,
    "icon": "🥩",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Apex Predator Summoning",
      "Guaranteed Encounter"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Syringe Pistol",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Apex Predator Summoning",
        "rules": "As an action, you shatter the vial. For the next 1 hour, a creature of Challenge Rating 10 or higher that is a predator (such as a Behir, Chimera, or Drake) within 5 miles must succeed on a DC 18 Wisdom saving throw or begin traveling toward your current location. The creature will not attack until it is within 60 feet of you."
      },
      {
        "title": "Guaranteed Encounter",
        "rules": "The lure ensures that at least one predator arrives within the 1-hour window. If no predator is naturally present in the region, the pheromones are potent enough to draw one from the nearest habitable wilderness or neighboring territory."
      }
    ],
    "levelRequirementReason": "The high CR of the summoned predator poses a lethal threat to lower-level adventurers.",
    "vendorReason": "The scientist is the primary engineer of these synthetic pheromones.",
    "shippingDetail": "Delivered via high-pressure pneumatic injection to ensure the volatile chemicals remain stable.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The effect ends when the 1-hour duration expires or the predator reaches your location.",
      "charges": "One-time use; the vial is destroyed upon shattering."
    },
    "priceReason": "Adjusted from 45,000 to a more standard legendary-tier gold equivalent for a single-use high-risk summoning.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-21T23:33:12.859270+00:00",
    "aiReviewedAt": "2026-07-21T23:33:12.859270+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_apex_venom": {
    "id": "animatopia_apex_venom",
    "name": "Apex Predator Venom (Liquidated)",
    "description": "This Apex Predator Venom is a viscous, neon-green liquidated concentrate derived from a dozen different apex predators. Synthesized by the masters at Animatopia, this substance is designed to bypass the natural defenses of even the most resilient beasts.",
    "price": 110000,
    "icon": "☠️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Venomous Coating",
      "Paralytic Strike"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Cryo-Vial",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Venomous Coating",
        "rules": "When you hit a creature with a weapon coated in this liquid, the target takes an additional 6d8 poison damage. This damage ignores resistance to poison damage."
      },
      {
        "title": "Paralytic Strike",
        "rules": "On a successful hit, the target must succeed on a DC 20 Constitution saving throw or be Paralyzed for 1d4 rounds. A creature can repeat the saving throw at the end of each of its turns, ending the effect on a success."
      }
    ],
    "levelRequirementReason": "The potency of the venom requires a high level of physical fortitude to handle without self-inflicted harm.",
    "vendorReason": "The Animatopia scientist is the primary chemist capable of stabilizing such volatile biological components.",
    "shippingDetail": "The venom is transported in a pressurized cryo-vial to prevent evaporation and maintain chemical stability.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The liquid is exhausted upon application to a weapon.",
      "charges": "One-time use per vial"
    },
    "priceReason": "The price was adjusted to reflect a legendary consumable's market value while remaining within a standard high-level gold-to-XP conversion.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-21T23:33:39.717373+00:00",
    "aiReviewedAt": "2026-07-21T23:33:39.717373+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_bio_weapon_release": {
    "id": "animatopia_bio_weapon_release",
    "name": "Animatopia Bio-Weapon Release (Targeted Species)",
    "description": "The Animatopia Bio-Weapon Release is a pressurized canister containing a custom-engineered plague designed by Animatopia scientists. This volatile biological agent is intended to be deployed into a specific habitat to systematically target a chosen species.",
    "price": 110000,
    "icon": "🦠",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Targeted Pathogen Deployment",
      "Mutagenic Backlash",
      "Environmental Corruption"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Containment Breach",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Targeted Pathogen Deployment",
        "rules": "As an action, you release the canister into a 1,000-foot radius. Choose one creature type (e.g., Goblin, Orc, Undead). For the next 24 hours, any creature of that type that starts its turn in the area must succeed on a DC 20 Constitution saving throw or take 4d10 poison damage and become Poisoned until the end of its next turn."
      },
      {
        "title": "Mutagenic Backlash",
        "rules": "When the canister is first opened, there is a 1-in-6 chance of a mutation surge. If this occurs, the area becomes Difficult Terrain, and any creature (including the user) that starts its turn in the area takes 2d6 force damage as the environment warps."
      },
      {
        "title": "Environmental Corruption",
        "rules": "The area affected by the plague remains hazardous for 7 days. During this time, any plant life in the area withers and turns gray, and any creature that dies within the area has its corpse animate as a Shambling Mound (CR 5) 1 hour after death."
      }
    ],
    "levelRequirementReason": "The scale of biological warfare and environmental destruction is only manageable by high-level adventurers.",
    "vendorReason": "The Animatopia scientists are the only ones with the specialized labs required to synthesize these pathogens.",
    "shippingDetail": "Must be delivered via a lead-lined, pressurized transport pod with a 48-hour transit delay for safety checks.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours",
      "endsWhen": "The duration expires or the area is cleansed by a 7th-level 'Purify Food and Drink' spell cast at 7th level.",
      "charges": "Single Use (Destroys item upon activation)"
    },
    "priceReason": "Reduced from 500,000 XP to reflect a high-tier legendary cost while maintaining its status as a game-altering siege tool.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-21T23:34:16.012207+00:00",
    "aiReviewedAt": "2026-07-21T23:34:16.012207+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_bio_weapon_research": {
    "id": "animatopia_bio_weapon_research",
    "name": "Animatopia Bio-Weapon Research (Custom)",
    "description": "Animatopia Bio-Weapon Research is a confidential dossier of genetic engineering protocols. This lab report provides the blueprints for a tailored plague designed to devastate a specific creature type.",
    "price": 120000,
    "icon": "🦠",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Targeted Pathogen Engineering",
      "Biological Sample Requirement"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Lab Report",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Targeted Pathogen Engineering",
        "rules": "As an action, you can expend the research to create a plague targeting one specific creature type (e.g., Undead, Dragons, Orcs). For 1d4 days, any creature of that type within 100 feet of an infected host must succeed on a DC 18 Constitution saving throw at the start of its turn or take 4d6 necrotic damage and become Poisoned. The effect ends if the host dies or the research is destroyed."
      },
      {
        "title": "Biological Sample Requirement",
        "rules": "To activate this research, you must provide the Animatopia scientists with a physical sample of the target species' DNA or tissue, obtained through a successful DC 15 Wisdom (Medicine) or Intelligence (Arcana) check during a previous encounter."
      }
    ],
    "levelRequirementReason": "The complexity of bio-weapon engineering requires a high level of magical and scientific mastery.",
    "vendorReason": "The Animatopia scientists are the primary engineers of these biological pathogens.",
    "shippingDetail": "Delivered via secure, lead-lined courier to prevent premature infection or detection.",
    "usage": {
      "activation": "Action",
      "duration": "1d4 days",
      "endsWhen": "When the host dies, the duration expires, or the research is destroyed.",
      "charges": "Single use; the research is destroyed upon activation."
    },
    "priceReason": "The price reflects the extreme rarity and high-tier danger of a legendary bio-weapon.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-21T23:34:44.881847+00:00",
    "aiReviewedAt": "2026-07-21T23:34:44.881847+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_buried_soul_key": {
    "id": "animatopia_buried_soul_key",
    "name": "Buried Soul Key",
    "description": "The Buried Soul Key is a rusted iron skeleton key recovered from the ruins near Noki Bay. Its jagged teeth are etched with tribal markings, designed to unlock the sealed burial sites of forgotten peoples.",
    "price": 28,
    "icon": "🗡",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Unlock Tribal Seals",
      "Echo of the Buried",
      "Ritual Cleansing"
    ],
    "vendor": "animatopia",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Unlock Tribal Seals",
        "rules": "As an action, you can insert the Buried Soul Key into a sealed tribal shrine or burial site door. The key automatically unlocks the mechanism, granting access to the interior."
      },
      {
        "title": "Echo of the Buried",
        "rules": "When the key unlocks a door, roll a d20. On a 1, a cursed echo manifests; all creatures within 10 feet of the door must succeed on a DC 12 Wisdom saving throw or take 1d6 necrotic damage."
      },
      {
        "title": "Ritual Cleansing",
        "rules": "Before the key can be used to unlock a door, it must be cleansed. Spend 1 minute performing a cleansing ritual; if the ritual is skipped, the user takes 1d4 necrotic damage automatically upon use."
      }
    ],
    "levelRequirementReason": "The key is a common utility item suitable for early-game exploration of ruins.",
    "vendorReason": "Animatopia specializes in relics and artifacts from forgotten eras.",
    "shippingDetail": "Delivered via heavy-duty crate to ensure the relic remains undisturbed during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The key is destroyed or lost",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its utility as a key item for progression-based exploration.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-21T23:35:12.770000+00:00",
    "aiReviewedAt": "2026-07-21T23:35:12.770000+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_cartoon_anvil_premium": {
    "id": "animatopia_cartoon_anvil_premium",
    "name": "Animatopia Cartoon Anvil ",
    "description": "The Animatopia Cartoon Anvil is a heavy, matte-black iron weight forged by the Toon Forges. Despite its solid appearance, it behaves with impossible physics, often emitting a comical 'boing' sound upon impact.",
    "price": 160,
    "icon": "🔨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Toon Drop",
      "Comical Impact",
      "Heavy Burden"
    ],
    "vendor": "animatopia_studio",
    "shippedBy": "Acme Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toon Drop",
        "rules": "As an action, you can throw the anvil at a creature within 30 feet. The target must succeed on a DC 12 Strength saving throw or take 2d6 bludgeoning damage and be knocked prone. The target's position is flattened vertically for 1 round."
      },
      {
        "title": "Comical Impact",
        "rules": "When the anvil hits a surface or creature, it emits a loud, rubbery 'boing' sound. This sound does not provide a mechanical bonus but alerts all creatures within 60 feet to the anvil's location."
      },
      {
        "title": "Heavy Burden",
        "rules": "Due to its cartoon weight, the anvil counts as heavy object; while carrying it, you have disadvantage on Strength (Athletics) checks made to climb, swim, or jump."
      }
    ],
    "levelRequirementReason": "The item is balanced for early-game use by limiting the damage die and range.",
    "vendorReason": "The studio specializes in items that defy the laws of physics and reality.",
    "shippingDetail": "Delivered in a reinforced crate that occasionally vibrates or whistles during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The anvil lands on a surface or target.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reduced from 11,500 to reflect an uncommon item with low damage output and high utility.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-21T23:35:42.241201+00:00",
    "aiReviewedAt": "2026-07-21T23:35:42.241201+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_cartoon_cereal_recipe": {
    "id": "animatopia_cartoon_cereal_recipe",
    "name": "Recipe: Animatopia Cartoon Cereal ",
    "description": "This Recipe: Animatopia Cartoon Cereal provides instructions for a sugary breakfast that makes you 'toon up' with energy. Crafted by the Toon Chefs, the recipe requires mixing flakes and milk to produce a bowl of snaps, crackles, and pops.",
    "price": 160,
    "icon": "🥣",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Bouncy Reflexes",
      "Sugar Rush"
    ],
    "vendor": "animatopia_studio",
    "shippedBy": "Milky Morning Manual",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bouncy Reflexes",
        "rules": "As a bonus action, you can consume a bowl of cereal to gain a +1d4 bonus to the next Dexterity check you make within 1 minute. This effect applies only to the first check made."
      },
      {
        "title": "Sugar Rush",
        "rules": "Upon consuming the cereal, you gain advantage on Athletics and Acrobatics checks for 30 minutes. During this time, your movement speed increases by 10 feet, but you have disadvantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    "levelRequirementReason": "The item is a consumable recipe and does not require high-level character progression.",
    "vendorReason": "Animatopia Studio is the primary source for toon-themed culinary items.",
    "shippingDetail": "Delivered in a moisture-sealed container to ensure the flakes remain crunchy.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 minutes",
      "endsWhen": "The duration expires or the user finishes a Long Rest.",
      "charges": "One use per bowl of cereal prepared."
    },
    "priceReason": "Adjusted to reflect an uncommon consumable rather than a high-level artifact.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-21T23:36:07.900023+00:00",
    "aiReviewedAt": "2026-07-21T23:36:07.900023+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_cartoon_gloves": {
    "id": "animatopia_cartoon_gloves",
    "name": "Animatopia Cartoon Gloves ",
    "description": "These white Animatopia Cartoon Gloves are crafted from a peculiar, elastic fabric that stretches with impossible fluidity. Designed by the Toon Animators, the gloves emit a high-pitched squeak whenever they strike a surface.",
    "category": "equipment",
    "price": 160,
    "icon": "🧤",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Slapstick Reach",
      "Comedic Performance",
      "Squeaky Contact"
    ],
    "vendor": "animatopia_studio",
    "shippedBy": "Rubber Band",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slapstick Reach",
        "rules": "When you make a melee weapon attack using a grappling maneuver, you can extend the gloves to reach up to 5 feet further than your normal reach. This property can be used once per long rest."
      },
      {
        "title": "Comedic Performance",
        "rules": "You have advantage on Charisma (Performance) checks made to perform slapstick comedy or physical gags."
      },
      {
        "title": "Squeaky Contact",
        "rules": "Whenever these gloves strike a solid surface or a creature, they emit a loud, comical squeak. This does not change the damage dealt but may provide a disadvantage to the target's next Stealth check made within 1 minute."
      }
    ],
    "levelRequirementReason": "The item is balanced for all levels as it provides utility rather than raw power.",
    "vendorReason": "As the creators of the gloves, the studio is the primary source for toon-themed gear.",
    "shippingDetail": "The item arrives stretched out and snaps into its proper shape upon opening the package.",
    "usage": {
      "activation": "Action (for reach) or Passive",
      "duration": "Instantaneous",
      "endsWhen": "Ends after one use per long rest for the reach property.",
      "charges": "1 use per long rest"
    },
    "priceReason": "Reduced from 11,500 to reflect an uncommon utility item rather than a high-tier artifact.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-21T23:36:35.920091+00:00",
    "aiReviewedAt": "2026-07-21T23:36:35.920091+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_chain_chomp_courier_pack": {
    "id": "animatopia_chain_chomp_courier_pack",
    "name": "Chain Chomp Courier Pack",
    "description": "This Chain Chomp Courier Pack is a rugged, heavy-duty satchel designed for rapid transit across dangerous territories. Crafted by the Chain Chomp Courier, the pack is reinforced with enchanted leather to secure cursed goods and hidden secrets.",
    "price": 160,
    "icon": "📦",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Sneaky Transit",
      "Evasive Maneuver",
      "Vault Breaker",
      "Cursed Spill"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sneaky Transit",
        "rules": "While wearing the pack, you gain a +1d4 bonus to Dexterity (Stealth) checks made while moving at a normal pace."
      },
      {
        "title": "Evasive Maneuver",
        "rules": "As a reaction when you are hit by an attack, you can use the pack's internal stabilizers to gain a +2 bonus to your AC against that specific instance of damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Vault Breaker",
        "rules": "You can use an action to attempt to open a mechanical lock or hidden vault. You have Advantage on this check, but the pack's internal mechanisms are loud, potentially alerting nearby creatures within 60 feet."
      },
      {
        "title": "Cursed Spill",
        "rules": "If the pack is dropped or forcibly removed from your person, roll a d4. On a 1-2, a burst of chaotic energy deals 1d6 necrotic damage to all creatures within 5 feet of the pack."
      }
    ],
    "levelRequirementReason": "The pack's weight and complex locking mechanisms require a character with basic martial or rogue training.",
    "vendorReason": "Animatopia specializes in high-durability courier equipment and anomalous goods.",
    "shippingDetail": "Delivered via high-speed courier; items may arrive with minor scuffing or lingering magical residue.",
    "usage": {
      "activation": "Passive / Reaction / Action",
      "duration": "Variable",
      "endsWhen": "Effect concludes or pack is discarded",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 2000 to align with standard uncommon utility item pricing for a non-magical-weapon item.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-21T23:37:09.368948+00:00",
    "aiReviewedAt": "2026-07-21T23:37:09.368948+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_chimeric_hybrid": {
    "id": "animatopia_chimeric_hybrid",
    "name": "Animatopia Apex Chimeric Hybrid (Companion)",
    "description": "The Animatopia Apex Chimeric Hybrid is a custom-bred, stable companion creature synthesized from the genetic traits of two apex predators. This beastly marvel serves as a loyal guardian, possessing the raw power of a lion and the predatory instincts of a chimera.",
    "price": 1900000,
    "icon": "🦁",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Apex Predator Companion",
      "Loyal Sentience",
      "Regenerative Vitality"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Incubation Unit",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Apex Predator Companion",
        "rules": "You gain a CR 15 companion creature. The DM provides a stat block featuring versatile predator abilities. The companion acts on your initiative and follows your commands."
      },
      {
        "title": "Loyal Sentience",
        "rules": "The companion possesses animal intelligence and is permanently loyal to you. It cannot be charmed or commanded by others while within 60 feet of you."
      },
      {
        "title": "Regenerative Vitality",
        "rules": "The companion is immortal; at the start of each of its turns, it regains 15 hit points if it has at least 1 hit point remaining. This effect is suppressed if the creature is under the effect of the 'Slow' spell."
      }
    ],
    "levelRequirementReason": "A CR 15 companion is capable of overwhelming low-level parties and requires high-level characters to manage.",
    "vendorReason": "The Animatopia scientist is the only one with the genetic expertise to breed such a hybrid.",
    "shippingDetail": "The creature arrives in a pressurized, climate-controlled pod that must be opened in a secure facility.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The companion's immortality is suppressed or the creature is permanently destroyed by a 'Power Word Kill' spell.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the godly rarity and the extreme cost of high-level genetic engineering.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-21T23:37:40.061875+00:00",
    "aiReviewedAt": "2026-07-21T23:37:40.061875+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_cursed_candy": {
    "id": "animatopia_cursed_candy",
    "name": "Candy of the Hollowed Heart",
    "description": "The Candy of the Hollowed Heart is a deceptively sweet confection crafted by the last survivor of the Shy Guys’ union protest. This cursed treat glows with a faint, sickly light and carries the bitter taste of a 'payroll' debt from the night.",
    "price": 15000,
    "icon": "🍬",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Soul-Siphoning Vitality",
      "Phantom Echo",
      "Onyx Vision"
    ],
    "vendor": "animatopia",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Soul-Siphoning Vitality",
        "rules": "When you consume this candy as an action, you gain 3d6 temporary hit points. Immediately after, you must make a DC 15 Wisdom saving throw; on a failure, you take 1d6 necrotic damage and lose 1 level of experience (or a permanent -1 to your next three ability checks) as the 'soul cost' is extracted."
      },
      {
        "title": "Phantom Echo",
        "rules": "Upon consumption, roll a d100. On a result of 1-50, a whispering phantom appears in an unoccupied space within 10 feet of you for 1 minute, mimicking your last memory in a distorted voice."
      },
      {
        "title": "Onyx Vision",
        "rules": "Upon consumption, roll a d10. On a result of 1, you gain the ability to see the true face of the Onyx Hand for 1 hour."
      }
    ],
    "levelRequirementReason": "The high risk of experience loss and the legendary nature of the Onyx Hand vision require a high level of maturity.",
    "vendorReason": "Animatopia specializes in cursed and high-rarity curiosities from the Shy Guy territories.",
    "shippingDetail": "Delivered in a reinforced crate to prevent the candy from dissolving or escaping its packaging.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Vitality) / 1 Hour (Vision)",
      "endsWhen": "The candy is consumed; effects end after their specified duration.",
      "charges": "Single Use (Destroyed upon consumption)"
    },
    "priceReason": "Reduced from 4000 because the item is a known scam with high risk of negative consequences.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-21T23:38:43.682648+00:00",
    "aiReviewedAt": "2026-07-21T23:38:43.682648+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_festival_star_satchel": {
    "id": "animatopia_festival_star_satchel",
    "name": "Festival Star Satchel",
    "description": "The Festival Star Satchel is a pouch woven from shimmering starlight threads collected during the Festival of Falling Stars. Crafted by the Shine Sprite Guild, it glows with a soft luminescence and carries a slight weight penalty of 5 lbs.",
    "price": 160,
    "icon": "🌟",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Token Scavenging",
      "Memory Revelation",
      "Luminous Guidance"
    ],
    "vendor": "animatopia",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Token Scavenging",
        "rules": "While holding this satchel, you have Advantage on Wisdom (Perception) checks made to locate hidden festival tokens in festive environments."
      },
      {
        "title": "Memory Revelation",
        "rules": "As an action, you may expend one festival token from the satchel to gain a glimpse of a memory fragment of Peach. This grants you a +2 bonus to your next Charisma (Persuasion) check made within the next 10 minutes."
      },
      {
        "title": "Luminous Guidance",
        "rules": "The satchel emits a soft light in a 10-foot radius. This light is dim and can be suppressed by using an action to cover the opening of the pouch."
      }
    ],
    "levelRequirementReason": "The satchel's magical properties are tuned for mid-level adventurers exploring the Isle Delfino.",
    "vendorReason": "Animatopia is the primary source for festive and whimsical artifacts.",
    "shippingDetail": "Delivered via high-speed courier; arrives within 24 hours of purchase.",
    "usage": {
      "activation": "Passive/Action",
      "duration": "Permanent/10 minutes",
      "endsWhen": "The light is suppressed by covering the pouch; the memory bonus ends after 10 minutes.",
      "charges": "Unlimited (Memory Revelation requires a physical token)"
    },
    "priceReason": "Reduced slightly from 1200 XP to align with standard uncommon utility item scaling.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-21T23:39:41.652359+00:00",
    "aiReviewedAt": "2026-07-21T23:39:41.652359+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_feywild_cloak": {
    "id": "animatopia_feywild_cloak",
    "name": "Feywild Cloak of Echoes",
    "description": "The Feywild Cloak of Echoes is a shimmering garment woven from the dreams of trickster spirits and the echoes of forgotten Fey courts. Its iridescent fabric shifts colors as it absorbs ambient magic, allowing the wearer to phase subtly between the mundane and the wild.",
    "category": "equipment",
    "price": 5700,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Evasion of Magic",
      "Stealth Enhancement",
      "Spirit Whispers",
      "Backlash Curse"
    ],
    "vendor": "animatopia",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Evasion of Magic",
        "rules": "You gain a +2 bonus to AC against any attack roll made by a creature using a spell or magical effect. This effect is passive while the cloak is worn."
      },
      {
        "title": "Stealth Enhancement",
        "rules": "You have Advantage on Dexterity (Stealth) checks made to hide from creatures that can perceive you. This effect is passive while the cloak is worn."
      },
      {
        "title": "Spirit Whispers",
        "rules": "While you are in a Feywild zone, you can hear the whispers of spirits. You have Advantage on Wisdom (Perception) checks to detect hidden creatures or magical traps within 60 feet."
      },
      {
        "title": "Backlash Curse",
        "rules": "If the cloak takes more than 20 points of damage in a single hit, you are cursed for 1 hour. Whenever you make an attack roll, there is a 5% chance (roll a d20; a 1 triggers the effect) that the attack misses and you take 1d6 force damage from a magical backlash."
      }
    ],
    "levelRequirementReason": "The cloak requires a high enough spiritual resonance to prevent the trickster spirits from overwhelming the wearer's mind.",
    "vendorReason": "Animatopia specializes in items that bridge the gap between the mechanical and the magical.",
    "shippingDetail": "Delivered via a fold in space; the package may appear to vibrate or hum during transit.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while worn",
      "endsWhen": "Removed by the wearer or the wearer falls unconscious",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity of Feywild materials and the high utility of the evasion bonuses.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-21T23:40:15.837529+00:00",
    "aiReviewedAt": "2026-07-21T23:40:15.837529+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_feywild_heartstone": {
    "id": "animatopia_feywild_heartstone",
    "name": "Feywild Heartstone",
    "description": "The Feywild Heartstone is a glowing orb buried deep within the roots of the Raventree Manor’s Feywild layer. This pulse of a forgotten forest deity echoes with the whispers of ancient trees and serves as a beacon for those connected to the Grand Country’s vertical forests.",
    "price": 5800,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fey Sight",
      "Fey Resonance Burst"
    ],
    "vendor": "animatopia",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fey Sight",
        "rules": "You gain a +1 bonus to Perception checks made to see through fey illusions. This effect is constant while the stone is held."
      },
      {
        "title": "Fey Resonance Burst",
        "rules": "When you take damage from a creature within 30 feet, roll a d20. On a 1-4, the Heartstone releases a pulse; all enemies within 15 feet must succeed on a DC 14 Wisdom saving throw or be Confused (as per the spell) until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The item's ability to disrupt the minds of nearby foes requires a level of experience to handle its volatile nature.",
    "vendorReason": "Animatopia specializes in items that bridge the gap between the natural and the mystical.",
    "shippingDetail": "Delivered via heavy-duty courier to ensure the orb's resonance doesn't disrupt local flora during transit.",
    "usage": {
      "activation": "Passive for Fey Sight; Automatic on taking damage for Resonance Burst",
      "duration": "Instantaneous (Burst)",
      "endsWhen": "The Resonance Burst ends after the target's next turn; Fey Sight is constant.",
      "charges": "Unlimited (Resonance Burst is triggered by a die roll, not a charge)"
    },
    "priceReason": "The high price reflects its rarity and the significant utility provided by the Perception bonus and crowd control.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-21T23:40:44.697521+00:00",
    "aiReviewedAt": "2026-07-21T23:40:44.697521+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_genetic_reset": {
    "id": "animatopia_genetic_reset",
    "name": "Animatopia Genetic Reset",
    "description": "The Animatopia Genetic Reset is a concentrated chemical bath formulated by the master scientists of Animatopia to undo biological tampering. This iridescent fluid, shipped in a reinforced Containment Tank, safely reverts artificial mutations back to a creature's natural state.",
    "price": 110000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Mutation Reversion",
      "Base Stat Restoration"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Containment Tank",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Mutation Reversion",
        "rules": "As an action, you pour the chemical bath over a creature within 5 feet. The target must succeed on a DC 18 Constitution saving throw. On a success, the mutation is neutralized; on a failure, the mutation is removed but the target takes 4d10 necrotic damage as their cells restructure."
      },
      {
        "title": "Base Stat Restoration",
        "rules": "The target's physical attributes (Strength, Dexterity, and Constitution) immediately return to their original base values as recorded before any genetic alteration occurred. This effect is instantaneous and cannot be undone."
      }
    ],
    "levelRequirementReason": "The complexity of reversing high-level genetic tampering requires significant biological expertise.",
    "vendorReason": "The Animatopia scientists are the primary developers of genetic modification and reversal technologies.",
    "shippingDetail": "Must be transported in a pressurized, lead-lined tank to prevent chemical evaporation or leakage.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The chemical bath is expended upon use.",
      "charges": "Single use; the item is destroyed after one application."
    },
    "priceReason": "Reduced from 150,000 XP to reflect a balanced legendary consumable price for high-level play.",
    "priceOriginal": 150000,
    "priceReviewedAt": "2026-07-21T23:41:11.707012+00:00",
    "aiReviewedAt": "2026-07-21T23:41:11.707012+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_heart_of_the_cheep_cheep": {
    "id": "animatopia_heart_of_the_cheep_cheep",
    "name": "Heart of the Cheep-Cheep",
    "description": "The Heart of the Cheep-Cheep is a pulsating, organic artifact forged by the Cheep-Cheep Accords Alliance. It resonates with a rhythmic harmony and emits a faint, melodic toad voice when active.",
    "category": "equipment",
    "price": 5700,
    "icon": "🐸",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Harmonious Healing",
      "Rhythmic Precision",
      "Discordant Feedback"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Harmonious Healing",
        "rules": "While the item is active, any creature within 10 feet of the wielder who receives healing from a spell or magical effect regains an additional 20% of that healing amount as extra HP."
      },
      {
        "title": "Rhythmic Precision",
        "rules": "Allies within 30 feet of the wielder gain a +1 bonus to attack rolls. This bonus is ignored if the target is a hostile creature."
      },
      {
        "title": "Discordant Feedback",
        "rules": "If the wielder uses this item to affect a creature that is not an ally, the wielder must roll 1d2 on the Wild Magic Surge table (or take 1d6 psychic damage) as the harmony fractures."
      }
    ],
    "levelRequirementReason": "The artifact's resonance requires a high enough mental fortitude to handle the toad-tribe's collective harmony.",
    "vendorReason": "Animatopia specializes in artifacts of biological and mechanical harmony.",
    "shippingDetail": "Delivered via a high-speed pursuit; the package may arrive with slight bite marks.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The user finishes a long rest or the heart's pulse fades.",
      "charges": "Unlimited use, but expires if Mages Guild agents are within 60 feet."
    },
    "priceReason": "The price reflects its rare status and the significant utility provided to a party's healing and accuracy.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-21T23:41:41.893987+00:00",
    "aiReviewedAt": "2026-07-21T23:41:41.893987+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_hybridization_guide": {
    "id": "animatopia_hybridization_guide",
    "name": "Animatopia Hybridization Guide (Advanced)",
    "description": "The Animatopia Hybridization Guide (Advanced) is a heavy, leather-bound tome containing complex schematics for merging apex DNA. These meticulous instructions, authored by Animatopia's lead researchers, are marked with a distinct 🧬 icon on the cover.",
    "price": 110000,
    "icon": "🧬",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Hybrid Creation",
      "Component Requirement"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Bound Text",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Hybrid Creation",
        "rules": "During a long rest, you can expend the guide to create one stable hybrid creature. You choose two apex species; the DM determines the creature's stats based on a combination of their traits. The creature remains loyal to you for 24 hours or until it reaches natural death."
      },
      {
        "title": "Component Requirement",
        "rules": "To activate the guide, you must spend 500gp worth of rare flora or fauna components per creation attempt. Failure to provide sufficient materials results in the guide remaining unusable for 1d4 days."
      }
    ],
    "levelRequirementReason": "The complexity of apex DNA manipulation requires high-level magical and biological proficiency.",
    "vendorReason": "The scientist is the primary author and authorized distributor of Animatopia's biological research.",
    "shippingDetail": "The guide is delivered in a magically sealed, heavy-duty crate to prevent unauthorized reading.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The guide is destroyed upon use",
      "charges": "One-time use"
    },
    "priceReason": "Adjusted from 300,000 to reflect a legendary item's accessible market value while maintaining high rarity.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-21T23:42:07.760289+00:00",
    "aiReviewedAt": "2026-07-21T23:42:07.760289+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_internet_virus_tattoo": {
    "id": "animatopia_internet_virus_tattoo",
    "name": "Internet Virus Tattoo",
    "description": "The Internet Virus Tattoo etches itself into your skin with corrupted data, granting viral meme buffs but risking mental instability. This relic of digital lore offers fleeting boosts from internet culture while warning of potential infection.",
    "price": 28,
    "icon": "🖥",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "+Meme Boost",
      "Viral Risk"
    ],
    "vendor": "animatopia",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meme Boost",
        "rules": "Activates as a bonus action, providing +1 to all ability checks and saving throws for the next hour. Recharges after 24 hours."
      },
      {
        "title": "Viral Risk",
        "rules": "There is a 5% chance (DC 10) per day of triggering viral infection. If successful, it causes mild mental fatigue that lasts until resting and reduces charisma by -1 for the next 24 hours."
      }
    ],
    "levelRequirementReason": "This tattoo is designed to be accessible for adventurers just starting their journey.",
    "vendorReason": "Animatopia is known for its connection to digital and internet-related relics, making it a logical vendor for this item.",
    "shippingDetail": "Ships within the week with standard delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you take a short rest or until the duration expires",
      "charges": "Recharge after 24 hours"
    },
    "priceReason": "The price is adjusted to reflect the item's unique digital lore and temporary utility.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-22T00:12:14.060206+00:00",
    "aiReviewedAt": "2026-07-22T00:12:14.060206+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_iron_gut_belt": {
    "id": "animatopia_iron_gut_belt",
    "name": "Iron Gut Belt",
    "description": "The Iron Gut Belt, forged from the stomachs of ancient beasts, amplifies your fortitude and resilience in combat.",
    "category": "equipment",
    "price": 28,
    "icon": "🐾",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Stomach Resilience",
      "Enhanced Defense"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stomach Resilience",
        "rules": "When you take damage from a melee attack, reduce the damage by 1d4. This effect lasts until the start of your next turn."
      },
      {
        "title": "Enhanced Defense",
        "rules": "While wearing this belt, you have advantage on saving throws against being knocked prone and gain +2 to AC."
      }
    ],
    "levelRequirementReason": "This belt is designed for beginners to help them build confidence in combat.",
    "vendorReason": "Animatopia specializes in crafting belts that enhance survival and resilience, making it the perfect vendor for this item.",
    "shippingDetail": "Ships with a Chain Chomp Courier ensuring it arrives safely, even through the most treacherous paths.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Until the start of your next turn or until removed.",
      "endsWhen": "The belt is taken off or destroyed in combat.",
      "charges": "Unlimited"
    },
    "priceReason": "The craftsmanship and materials used make this belt a valuable asset for any adventurer, justifying its cost.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T00:12:18.668210+00:00",
    "aiReviewedAt": "2026-07-22T00:12:18.668210+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_name_here": {
    "id": "animatopia_item_name_here",
    "name": "Scam: Eternal Dreamstone",
    "description": "The Eternal Dreamstone glows with an ethereal light, promising eternal rest to those who dare embrace its dreams.",
    "price": 15000,
    "icon": "🔮",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Dream State Access",
      "Memory Veil"
    ],
    "vendor": "Servants Cosmic",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Dream State Access",
        "rules": "Activate as a bonus action. The user gains access to dream state abilities for 1 hour, limited to one use per character."
      },
      {
        "title": "Memory Veil",
        "rules": "The user's memories are blurred for 10 minutes, reducing the effectiveness of certain skills by 25%. This effect ends when the duration expires or a successful Wisdom saving throw is made."
      }
    ],
    "levelRequirementReason": "Requires character level 15 to safely access and utilize its dream state abilities.",
    "vendorReason": "Known for their ethereal and mystical wares, Servants Cosmic offers this unique artifact among their offerings.",
    "shippingDetail": "Delivered via Koopa Postal's fastest courier service with a 24-hour delivery guarantee.",
    "usage": {
      "activation": "Bonus action to activate Dream State Access; no further activation required for Memory Veil effect.",
      "duration": "1 hour for Dream State Access; ends when duration expires or Memory Veil is ended by a successful save.",
      "endsWhen": "Duration of effects expire or user makes a Wisdom saving throw against the Memory Veil.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price has been adjusted to reflect its reduced functionality and duration, making it more accessible.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T00:12:23.778575+00:00",
    "aiReviewedAt": "2026-07-22T00:12:23.778575+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_kivotos_link": {
    "id": "animatopia_kivotos_link",
    "name": "Halo Gunner’s Quiver",
    "description": "This quiver holds five arrows and five spectral bullets, crafted in Land Mordor from arcane materials. It whispers guidance to its wielder, enhancing accuracy and reducing cooldowns.",
    "category": "equipment",
    "price": 160,
    "icon": "🔮",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Accuracy",
      "Reduced Cooldown"
    ],
    "vendor": "animatopia",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Shooting Precision",
        "rules": "When you fire an arrow or spectral bullet from the quiver, your attack roll has advantage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Faster Special Abilities",
        "rules": "You can use a special ability once per long rest without expending a spell slot or resource. Ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in ranged weapons to fully utilize the quiver's benefits.",
    "vendorReason": "Animatopia specializes in unique and powerful items from the anime academy, including this quiver.",
    "shippingDetail": "Delivered by spectral couriers who ensure timely arrival.",
    "usage": {
      "activation": "Instantaneous when drawing an arrow or spectral bullet.",
      "duration": "Until the start of your next turn.",
      "endsWhen": "You finish a short or long rest.",
      "charges": "Unlimited, but the effects end after each use."
    },
    "priceReason": "Balanced price reflects its unique crafting and limited utility without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:12:28.632652+00:00",
    "aiReviewedAt": "2026-07-22T00:12:28.632652+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_looney_tunes_sandwich_recipe": {
    "id": "animatopia_looney_tunes_sandwich_recipe",
    "name": "Recipe: Animatopia Looney Tunes Sandwich ",
    "description": "This recipe yields a sandwich with bread shaped like anvils, served on a platter of laughing clowns. It's Acme quality—no wonder it might fall apart in your hands!",
    "price": 160,
    "icon": "🥪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Anvil Ancestry",
      "Laughing Bites"
    ],
    "vendor": "animatopia_studio",
    "shippedBy": "Wile E. Wrapper",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Anvil Ancestry",
        "rules": "When you eat this sandwich, you gain advantage on one Strength check (anvil power!), but take a -1 penalty to all Strength checks and saving throws until your next short rest."
      },
      {
        "title": "Laughing Bites",
        "rules": "Each bite produces a loud boing sound. On each bite after the first, you have disadvantage on perception checks until you take a long rest."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for beginners to experiment with.",
    "vendorReason": "Animatopia Studio specializes in whimsical and unique dining experiences, so they naturally carry this odd but delightful sandwich recipe.",
    "shippingDetail": "Shipped with a bouncy cushion to ensure the sandwich arrives intact—though it's no guarantee!",
    "usage": {
      "activation": "Eating the sandwich",
      "duration": "Until your next short rest or until you eat another sandwich made by Toon Sandwich Makers",
      "endsWhen": "You finish eating or consume another sandwich of similar type from Animatopia Studio",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe is moderately complex and involves unique Acme-quality ingredients, justifying the price.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:14:23.275619+00:00",
    "aiReviewedAt": "2026-07-22T00:14:23.275619+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_minus_world_key": {
    "id": "animatopia_minus_world_key",
    "name": "Minus World Key",
    "description": "The Minus World Key is a forgotten artifact from the lost realm of Animatopia, crafted from obsidian and imbued with the essence of shadow. It opens portals to realms where time flows backward, causing travelers to experience fleeting echoes of vanished realities.",
    "price": 15000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Opens a portal to the Minus World",
      "Causes temporary disorientation"
    ],
    "vendor": "animatopia",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Dimensional Portal",
        "rules": "Activates as an action. Opens a stable, one-way dimensional portal that lasts for 10 minutes. The user is transported through it upon successful activation. The portal can only be used once per day."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "The user experiences temporary disorientation immediately after using the key. This effect lasts until the end of their next turn and has no saving throw to resist."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure characters have the necessary skills and combat ability to safely use this powerful item.",
    "vendorReason": "Animatopia is a hub for exotic items from lost realms, making it logical for them to stock such a unique artifact.",
    "shippingDetail": "Delivered by the Hammer Bros. Express Courier service with a one-day transit time.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes",
      "endsWhen": "The portal closes at the end of its duration or when the user exits through it.",
      "charges": "One use per day"
    },
    "priceReason": "Balanced to provide a unique experience without overwhelming the party.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T00:14:28.477957+00:00",
    "aiReviewedAt": "2026-07-22T00:14:28.477957+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_moonlit_bell": {
    "id": "animatopia_moonlit_bell",
    "name": "Moonlit Bell",
    "description": "The Moonlit Bell chimes a lunar melody that echoes through the night, enhancing your stealth and combat prowess under the moonlight.",
    "price": 28,
    "icon": "🌙",
    "stock": 3,
    "rarity": "common",
    "effects": [
      "Moonlit Combat Boost",
      "Enhanced Stealth"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Combat Boost",
        "rules": "Grants +1 to all attack rolls and damage rolls made during nighttime. Must be used during a night combat scenario."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "Increases the DC of Dexterity (Stealth) checks by -2, effectively granting advantage on such checks when used in dark environments."
      }
    ],
    "levelRequirementReason": "This bell is crafted with simple magic suitable for beginners.",
    "vendorReason": "Animatopia is known for its diverse and magical items that cater to all adventurers, regardless of their skill level.",
    "shippingDetail": "Delivered via the Chain Chomp Couriers' express service with a guaranteed moonlit delivery.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "1"
    },
    "priceReason": "The bell's rarity and the complexity of its magic, requiring a full day to craft, justify its increased price.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T00:14:32.915494+00:00",
    "aiReviewedAt": "2026-07-22T00:14:32.915494+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_moonlit_scarf": {
    "id": "animatopia_moonlit_scarf",
    "name": "Moonlit Scarf of Whispering Night",
    "description": "The Moonlit Scarf of Whispering Night shimmers under moonlight, weaving whispers into the darkness. Woven from the dreamsilk of ancient moon cultists, it enhances stealth and confounds predators.",
    "category": "equipment",
    "price": 160,
    "icon": "🌙",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Stealth Boost",
      "Predator Confusion"
    ],
    "vendor": "animatopia",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "When worn in complete darkness, this scarf grants +2 to Stealth checks. It also provides a +1 bonus to saving throws against fear and charm effects for nearby creatures within 10 feet."
      },
      {
        "title": "Predator Confusion",
        "rules": "For every hour the scarf is worn in darkness, it causes nearby nocturnal predators to emit a low-frequency hum. This effect lasts until the wearer moves out of total darkness or the scarf's duration ends. Creatures within 30 feet have disadvantage on attack rolls against the wearer."
      }
    ],
    "levelRequirementReason": "Requires lower level due to reduced stealth and predator interaction effects.",
    "vendorReason": "Animatopia is known for their unique and magical items, making this scarf a fitting addition to their offerings.",
    "shippingDetail": "Ships with a special moonlight delivery seal ensuring safe arrival under dark skies.",
    "usage": {
      "activation": "Passive effect when worn in complete darkness.",
      "duration": "1 hour per use, recharges after 24 hours of non-use.",
      "endsWhen": "The duration ends when the wearer moves out of total darkness or the scarf's charges are exhausted.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price for a versatile and unique item with stealth and predator interaction benefits.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:14:42.794193+00:00",
    "aiReviewedAt": "2026-07-22T00:14:42.794193+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_mushroom_tongue": {
    "id": "animatopia_mushroom_tongue",
    "name": "Mushroom Tongue",
    "description": "The Mushroom Tongue is a relic that whispers secrets of the Fungi Civil War. It grants speech to fungal entities and reveals hidden tunnels beneath the Mushroom Kingdom's soil.",
    "price": 160,
    "icon": "🍄",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Speech Grant",
      "Tunnel Revelation"
    ],
    "vendor": "animatopia",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Speech Grant",
        "rules": "When consumed, this relic bestows temporary speech upon fungal entities. This effect lasts for 10 minutes and may cause hallucinations if used by someone unfamiliar with it."
      },
      {
        "title": "Tunnel Revelation",
        "rules": "The relic reveals hidden tunnels beneath the Mushroom Kingdom for 10 minutes after consumption, allowing the user to navigate through them easily. This effect is not usable more than once per day."
      }
    ],
    "levelRequirementReason": "Requires at least 2nd level to use due to its potent effects and potential for disorientation.",
    "vendorReason": "Animatopia, a relic dealer with extensive knowledge of the Mushroom Kingdom's history, specializes in such items from past conflicts.",
    "shippingDetail": "Ships via special underground tunnel delivery to ensure safe arrival at your doorstep.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "10 minutes or until the user loses consciousness due to hallucinations",
      "endsWhen": "The effect ends upon the user's next turn after losing consciousness from hallucinations",
      "charges": "Unlimited, but limited by 1 use per day"
    },
    "priceReason": "Reflects its historical significance and unique abilities that make it a valuable tool for adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T00:14:47.754690+00:00",
    "aiReviewedAt": "2026-07-22T00:14:47.754690+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_onyx_hand_trophy": {
    "id": "animatopia_onyx_hand_trophy",
    "name": "Onyx Hand Trophy of Bureaucratic Horror",
    "description": "The Onyx Hand Trophy of Bureaucratic Horror is a cursed relic crafted from volcanic obsidian. It whispers tales of forgotten debt collectors and their endless demands.",
    "price": 4000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Bureaucratic Persuasion",
      "Cripple Nonhumans"
    ],
    "vendor": "animatopia",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Bureaucratic Persuasion",
        "rules": "When used as an action, the wielder gains a +3 bonus to Persuasion checks against vampiric bureaucracies. The effect ends if the user is reduced to 0 hit points."
      },
      {
        "title": "Cripple Nonhumans",
        "rules": "As an action, consume 1 charge to temporarily blind all nonhuman entities within a 10-foot radius for 1 minute. Creatures affected can make a Wisdom saving throw (DC 15) to end the effect early."
      }
    ],
    "levelRequirementReason": "Requires at least 7th level to wield, ensuring it is used responsibly.",
    "vendorReason": "Animatopia specializes in exotic and cursed artifacts from lost realms.",
    "shippingDetail": "Ships via express courier with a 1-day delivery guarantee.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Bureaucratic Persuasion; 1 minute for Cripple Nonhumans",
      "endsWhen": "The user is reduced to 0 hit points, the effect ends if the target makes a successful save.",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP as it offers unique and powerful effects that are not easily replicated.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T00:14:52.998303+00:00",
    "aiReviewedAt": "2026-07-22T00:14:52.998303+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_predator_horn": {
    "id": "animatopia_predator_horn",
    "name": "Predator Horn of the Delfino Wild",
    "description": "The Predator Horn of the Delfino Wild resonates with ancient predator magic. It can summon a feral spirit that amplifies aggression and attracts prey within its radius.",
    "category": "equipment",
    "price": 160,
    "icon": "🐾",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Summons Feral Spirit",
      "Attracts Prey"
    ],
    "vendor": "animatopia",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Summon Feral Spirit",
        "rules": "Activates as a bonus action. The horn emits a primal roar, summoning a feral spirit that grants the user advantage on attack rolls until the start of their next turn. This effect can only be used once per long rest."
      },
      {
        "title": "Attract Prey",
        "rules": "Activates as a bonus action within 100 yards of a predator. The horn emits a call that attracts nearby prey, forcing any creature within 30 feet to make a DC 14 Wisdom saving throw or become frightened until the start of the user's next turn."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of predator behaviors and instincts.",
    "vendorReason": "Animatopia specializes in relics from ancient tribes, including those of the Delfino Wild.",
    "shippingDetail": "Delivered within one week with a special courier package.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until start of next turn for Summon Feral Spirit; until the start of the user's next turn for Attract Prey",
      "endsWhen": "The effect ends when the user is incapacitated or the duration expires",
      "charges": "Unlimited, but can only activate one effect per long rest"
    },
    "priceReason": "Balanced to reflect its powerful effects and rarity.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T00:14:58.243662+00:00",
    "aiReviewedAt": "2026-07-22T00:14:58.243662+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_prey_camouflage_service": {
    "id": "animatopia_prey_camouflage_service",
    "name": "Animatopia Prey Camouflage Service",
    "description": "The Animatopia Prey Camouflage Service is a sleek, leaf-patterned suit designed by the Prey Artists of Animatopia. It allows you to blend seamlessly into natural environments, making it near impossible for predators to spot you in the wild. This service also has a unique feature; while disguised as prey, you have a 50% chance of being ignored by nearby predators, and you might inadvertently attract herbivores who may seek 'friendship' with you.",
    "price": 160,
    "icon": "🐇",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Blends into natural terrain",
      "Attracts herbivores"
    ],
    "vendor": "animatopia_wilds",
    "shippedBy": "Leafy Wrap Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Camouflage",
        "rules": "When activated, you gain advantage on Dexterity (Stealth) checks in natural environments for up to 8 hours. This effect ends if you leave the natural terrain or are no longer attempting to hide."
      },
      {
        "title": "Herbivore Attraction",
        "rules": "While disguised as prey, there is a 50% chance that nearby herbivores will approach you seeking 'friendship'. This effect lasts for the duration of your disguise in natural terrain and ends when it expires or if you actively move away from herbivores."
      }
    ],
    "levelRequirementReason": "This service is accessible to adventurers who are just starting their journey, requiring minimal skill but offering significant tactical advantages.",
    "vendorReason": "Animatopia Wilds specializes in products that enhance survival and stealth in natural terrains, making this service a perfect fit for their inventory.",
    "shippingDetail": "Delivered directly to your doorstep wrapped in leaves, ensuring the suit remains undamaged during transit.",
    "usage": {
      "activation": "As an action",
      "duration": "Up to 8 hours per day",
      "endsWhen": "You leave natural terrain or stop attempting to hide, or you use it again on a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at 1000 XP due to its unique design and the specialized skills required by Prey Artists in Animatopia.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T00:15:09.301569+00:00",
    "aiReviewedAt": "2026-07-22T00:15:09.301569+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_prey_fur_cloak": {
    "id": "animatopia_prey_fur_cloak",
    "name": "Animatopia Prey Fur Cloak",
    "description": "The Animatopia Prey Fur Cloak is a seamless garment crafted from the fur of elusive forest creatures. It warms you in cold weather, providing +1 comfort and blending into your surroundings with predator-like precision. The cloak's fur shifts subtly during molting season, a reminder of its wild origins.",
    "price": 160,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Cloak Warms",
      "Blends Like Prey"
    ],
    "vendor": "animatopia_forest",
    "shippedBy": "Hide Bundle Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cloak Warms",
        "rules": "When the temperature drops below 70°F (21°C), the cloak provides +1 comfort. This effect is passive and lasts until your next long rest."
      },
      {
        "title": "Blends Like Prey",
        "rules": "While wearing this cloak, you have advantage on Dexterity (Stealth) checks when moving like a stealthy predator's prey in natural terrain. The effect ends if you enter an urban environment or if you take damage from an attack."
      }
    ],
    "levelRequirementReason": "This simple yet effective cloak is accessible to lower-level adventurers, enhancing their survival skills.",
    "vendorReason": "The Prey Hunters at Animatopia Forest are known for crafting gear that mimics the natural world, making this cloak a fitting product.",
    "shippingDetail": "Delivered within one week of order placement. The courier ensures the cloak is carefully packed to prevent any damage during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until your next long rest or until you enter an urban environment or take damage from an attack.",
      "endsWhen": "You enter an urban environment or take damage from an attack.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the cloak's utility and moderate rarity, making it accessible to first-level characters without breaking the game economy.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T00:15:14.869879+00:00",
    "aiReviewedAt": "2026-07-22T00:15:14.869879+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_prey_hide_and_seek_coaching": {
    "id": "animatopia_prey_hide_and_seek_coaching",
    "name": "Animatopia Prey Hide-and-Seek Coaching",
    "description": "The Animatopia Prey Hide-and-Seek Coaching hones your stealth and survival skills in urban environments. For a week, you gain proficiency in Stealth checks within man-made structures and can detect hidden threats more easily. However, when startled, you're compelled to hide, causing disadvantage on Initiative rolls until the next short or long rest.",
    "category": "services",
    "price": 160,
    "icon": "🙈",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Stealth Mastery",
      "Compulsive Hiding"
    ],
    "vendor": "animatopia_prey",
    "shippedBy": "Courier of Shadows",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Mastery",
        "rules": "You gain proficiency in Stealth checks within man-made structures for a duration of 7 days. This effect does not grant you advantage if you already have proficiency."
      },
      {
        "title": "Compulsive Hiding",
        "rules": "When startled, you are compelled to hide (disadvantage on Initiative rolls). The effect ends when you complete your next short or long rest."
      }
    ],
    "levelRequirementReason": "This service is accessible to all players who want to improve their stealth skills.",
    "vendorReason": "Animatopia Prey School specializes in training and enhancing survival skills, making them the perfect vendor for this service.",
    "shippingDetail": "Delivered via a shadowy courier who ensures your package arrives without being detected.",
    "usage": {
      "activation": "Passive effect upon purchase.",
      "duration": "7 days from activation.",
      "endsWhen": "At the end of your next short or long rest after being startled.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects a moderate balance for enhancing stealth skills without overpricing this useful utility.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T00:15:19.804005+00:00",
    "aiReviewedAt": "2026-07-22T00:15:19.804005+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_prey_predator_evasion_training": {
    "id": "animatopia_prey_predator_evasion_training",
    "name": "Animatopia Prey Predator Evasion Training",
    "description": "The Animatopia Prey Predator Evasion Training is a unique service that hones your stealth and survival skills in the face of animatronic threats. For 7 days, you gain advantage on Stealth checks against constructs and animatronics. However, this training leaves its mark: for as long as you have the training's effects, you are terrified of music boxes and children’s laughter, affecting your perception and composure.",
    "category": "services",
    "price": 160,
    "icon": "🏃",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth checks vs. constructs",
      "Terrified of music boxes and children's laughter"
    ],
    "vendor": "animatopia_prey",
    "shippedBy": "Jumpscare Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Advantage Against Constructs",
        "rules": "For a duration of 7 days, you gain advantage on all Stealth checks made against constructs or animatronics. This effect does not stack with other sources of advantage."
      },
      {
        "title": "Fear of Music Boxes and Children’s Laughter",
        "rules": "While under the effects of this training, you suffer a -2 penalty to saving throws that involve your reaction to music boxes or children's laughter. This penalty persists until the training's duration expires."
      }
    ],
    "levelRequirementReason": "Beginners need to start with basic survival skills before tackling more complex training.",
    "vendorReason": "Animatopia Prey Survivors specialize in training those who face animatronic threats, ensuring their clients are ready for any encounter.",
    "shippingDetail": "The package is delivered with special couriers known as 'Nightmares', ensuring the service arrives without delay.",
    "usage": {
      "activation": "Passive effect once trained.",
      "duration": "7 days from completion of training.",
      "endsWhen": "Upon expiration or when you lose your training due to a failed check.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this service provides long-term benefits with no additional costs.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T00:15:25.489623+00:00",
    "aiReviewedAt": "2026-07-22T00:15:25.489623+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_prey_whistle": {
    "id": "animatopia_prey_whistle",
    "name": "Animatopia Prey Whistle",
    "description": "The Animatopia Prey Whistle is a silver-toned whistle with etched forest patterns. When blown, it emits an eerie, high-pitched sound that mimics the distress call of common deer and rabbits, luring nearby apex predators such as wolves or panthers to your location within minutes. This rustic tool is crafted by Animatopia Prey, known for their expertise in wildlife mimicry.",
    "price": 610,
    "icon": "🐾",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Lure Apex Predators",
      "Enhanced Distress Call"
    ],
    "vendor": "animatopia_hunter",
    "shippedBy": "Bone Whistle Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lure Apex Predators",
        "rules": "When activated as a bonus action, the whistle emits an eerie call that attracts up to 1d4 apex predators (CR 3-5) within 60 feet. The effect lasts for 1 minute or until the whistle is blown again. If you are within the area of effect and make an Intelligence (Nature) check with a DC of 12, you can identify the specific type of predator attracted."
      },
      {
        "title": "Enhanced Distress Call",
        "rules": "The whistle's call has an enhanced volume that makes it more effective in attracting predators. If the whistle is blown within 30 feet of a large group (1d4+2 creatures) of common prey, the call becomes even more convincing to nearby apex predators. This effect increases the chance of attracting additional predators by +1 for every two prey creatures."
      }
    ],
    "levelRequirementReason": "The whistle requires basic understanding of wildlife behavior and sound creation.",
    "vendorReason": "Animatopia Prey is renowned for their expertise in crafting tools that interact with nature, including this unique whistle.",
    "shippingDetail": "Ships via Bone Whistle Express, delivering the whistle within 1d4 days.",
    "usage": {
      "activation": "Bonus action to blow the whistle and attract predators.",
      "duration": "The effect lasts for up to 1 minute or until blown again.",
      "endsWhen": "Blown again or after 1 minute.",
      "charges": "Unlimited uses, as long as you have the whistle."
    },
    "priceReason": "This whistle is crafted with precision and natural materials, making it a rare and valuable tool for adventurers.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:15:32.094288+00:00",
    "aiReviewedAt": "2026-07-22T00:15:32.094288+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_rakasha_shroud": {
    "id": "animatopia_rakasha_shroud",
    "name": "Rakasha Shroud",
    "description": "The Rakasha Shroud is a dark, shifting cloak of the spirit clans that seamlessly merges with the shadows. Crafted from the remnants of ancient spirit clan artifacts, it grants the wearer unparalleled stealth and a touch of supernatural disorientation to their foes. Only anthropomorphic beings can don its secrets, as it binds itself to those who walk in the spirit's footsteps.",
    "category": "equipment",
    "price": 4000,
    "icon": "👻",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Stealth Cloak",
      "Spiritual Disruption"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Cloak",
        "rules": "When worn by an anthropomorphic being, the Rakasha Shroud grants you advantage on Dexterity (Stealth) checks for up to 1 minute. This effect ends if you attack or cast a spell."
      },
      {
        "title": "Spiritual Disruption",
        "rules": "While wearing the shroud and within 10 feet of an enemy, you cause them to become disoriented, granting you advantage on perception checks against that target for up to 2 rounds. This effect ends if you move more than 10 feet away from the target."
      }
    ],
    "levelRequirementReason": "This item is designed for mid-level adventurers who need reliable stealth and tactical advantages.",
    "vendorReason": "Animatopia’s black markets are known for their exotic and powerful wares, including those that enhance one's abilities in shadowy locales.",
    "shippingDetail": "Due to its supernatural nature, the Rakasha Shroud requires special handling. It is shipped in a sealed container with additional protective measures.",
    "usage": {
      "activation": "Instantaneous when donned; ends upon attacking or casting a spell.",
      "duration": "1 minute per activation",
      "endsWhen": "You attack or cast a spell, or after 1 minute if not used.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item's rarity and its unique abilities that enhance stealth and tactical advantages.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:15:37.913448+00:00",
    "aiReviewedAt": "2026-07-22T00:15:37.913448+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_species_integration_serum": {
    "id": "animatopia_species_integration_serum",
    "name": "Animatopia Species Integration Serum",
    "description": "The Animatopia Species Integration Serum is a vial of shimmering liquid that transforms the imbiber into a creature of another species for a brief time. Upon ingestion, you gain two powerful traits from your chosen animal, such as Spider's Climb and Shark's Senses, for up to eight hours. This serum, crafted by Animatopia's top scientists, is shipped with Bio-Tank's advanced refrigeration to preserve its potency.",
    "price": 4000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Species Traits",
      "Temporary Transformation"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Bio-Tank",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Species Traits",
        "rules": "Choose two traits from a specific animal species. These include abilities such as Spider's Climb, Shark's Senses, or Eagle's Vision. The effects are active for up to eight hours after ingestion."
      },
      {
        "title": "Temporary Transformation",
        "rules": "The transformation is temporary and lasts until the duration ends. Any residual side effects are minor and fade over time. This effect cannot be used again until you rest for at least 8 hours."
      }
    ],
    "levelRequirementReason": "Requires no level, as it's a versatile tool for all adventurers.",
    "vendorReason": "Animatopia scientists are known for their groundbreaking research in species integration and transformation technology.",
    "shippingDetail": "Shipped with Bio-Tank's advanced refrigeration to maintain the serum's potency.",
    "usage": {
      "activation": "Consume the vial as an action.",
      "duration": "Up to 8 hours, or until the duration ends.",
      "endsWhen": "The effect ends when the time limit is reached or if you are incapacitated.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, this serum offers a versatile tool for adventurers without being overpowered.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-22T00:15:43.439280+00:00",
    "aiReviewedAt": "2026-07-22T00:15:43.439280+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_walker_bow": {
    "id": "animatopia_spirit_walker_bow",
    "name": "Spirit Walker Bow",
    "description": "The Spirit Walker Bow is a bow forged from the bones of ancient spirit beings. Its grip hums with the cold breath of the dead, and its string crackles with spirit energy. Crafted by Rakasha Spirit Walkers, this weapon grants its wielder both mystical and martial prowess in equal measure.",
    "category": "equipment",
    "price": 610,
    "icon": "🏹",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mystic Prowess",
      "Spiritual Shield"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Mystic Prowess",
        "rules": "While wielding the Spirit Walker Bow, you gain a +1 bonus to attack rolls and spellcasting checks. This effect is active as long as you have at least one charge remaining."
      },
      {
        "title": "Spiritual Shield",
        "rules": "When you take damage from a creature in combat, you can use your reaction to reduce that damage by 1d4 points. You must be within the bow's aura range to activate this effect."
      }
    ],
    "levelRequirementReason": "The bow requires a minimum level of 7 due to its mystical properties and the expertise needed to wield it effectively.",
    "vendorReason": "Animatopia, known for their unique artifacts and enchanted items, carries this rare bow as part of their extensive collection.",
    "shippingDetail": "The bow is delivered via the Chain Chomp Courier, known for its swift and reliable service.",
    "usage": {
      "activation": "Reaction to reduce damage from a creature in combat.",
      "duration": "Instantaneous; ends when you stop using it or run out of charges.",
      "endsWhen": "You can no longer use the bow due to running out of charges or losing access to its aura range.",
      "charges": "5, recharged after a long rest"
    },
    "priceReason": "The balanced XP price reflects the bow's unique effects and the rarity required for crafting.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T00:15:48.948376+00:00",
    "aiReviewedAt": "2026-07-22T00:15:48.948376+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stable_mutagen": {
    "id": "animatopia_stable_mutagen",
    "name": "Animatopia Stable Mutagen (Controlled)",
    "description": "A vial of shimmering liquid, this Animatopia Stable Mutagen (Controlled) is a carefully crafted potion that grants the imbiber a lasting but temporary enhancement. Upon consumption, it bestows one specific, stable mutation for an hour—such as wings for flight or enhanced strength—and leaves no lingering side effects once the effect fades.",
    "price": 15000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Stable Mutation",
      "Enhanced Durability"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Refrigerated Canister",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stable Mutation",
        "rules": "Choose one physical enhancement (e.g., wings, claws) that grants a bonus action to fly or make an unarmed strike with a +1 bonus to attack and damage rolls. The effect lasts for 1 hour."
      },
      {
        "title": "Enhanced Durability",
        "rules": "For the duration of the mutation, your hit point maximum increases by 5, and you have advantage on saving throws against being knocked prone or restrained. This enhancement fades after 24 hours."
      }
    ],
    "levelRequirementReason": "This potion is designed to be accessible for all adventurers, offering a controlled method of enhancing one's capabilities without the risk of permanent mutation.",
    "vendorReason": "The Animatopia Scientist specializes in controlled mutations and potions that enhance an adventurer’s abilities without causing harm or instability.",
    "shippingDetail": "Ships via a cold chain delivery to ensure the potion remains stable during transit.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "1 hour for each mutation chosen, fading over 24 hours.",
      "endsWhen": "The effect ends when it fades or you are incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the controlled and stable nature of the potion, which is both safe and effective for all adventurers.",
    "priceOriginal": 110000,
    "priceReviewedAt": "2026-07-22T00:15:54.524321+00:00",
    "aiReviewedAt": "2026-07-22T00:15:54.524321+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_sunset_scarecrow": {
    "id": "animatopia_sunset_scarecrow",
    "name": "Sunset Scarecrow",
    "description": "The Sunset Scarecrow is a twilight-painted scarecrow hollowed out to project a false shadow that mimics a predator, capable of causing nearby enemies to panic and flee with a 20% chance. Crafted by Oracle’s Workshop (Cursed Edition), it carries the dark magic of the Festival of Falling Stars, warning players not to trust its price or origin.",
    "price": 15000,
    "icon": "⚡",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "False Shadow Projection",
      "Panic Chance"
    ],
    "vendor": "animatopia",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "False Shadow Projection",
        "rules": "Activates as a bonus action. Projects a false shadow that mimics a predator, causing all enemies within 10 feet to make a DC 15 Wisdom saving throw or become frightened for up to 3 rounds. The scarecrow can be used once per short rest."
      },
      {
        "title": "Panic Chance",
        "rules": "Each time the scarecrow is activated, there is a 20% chance that nearby enemies within 15 feet will panic and flee in disarray for up to 1 minute. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This scarecrow is simple enough to use by a low-level character, but its effects are powerful.",
    "vendorReason": "Animatopia often deals in unique and cursed items, making the Sunset Scarecrow a fitting addition to their inventory.",
    "shippingDetail": "Ships via Bullet Bill Express within 3 days of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 3 rounds for the false shadow, up to 1 minute for panic chance",
      "endsWhen": "The scarecrow is used up or destroyed by sunlight",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced price for a legendary item with two distinct, powerful effects that can be used frequently.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T00:16:00.290600+00:00",
    "aiReviewedAt": "2026-07-22T00:16:00.290600+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_symbiotic_armor": {
    "id": "animatopia_symbiotic_armor",
    "name": "Animatopia Symbiotic Armor",
    "description": "The Animatopia Symbiotic Armor is a living carapace that molds to your form and shifts its density in response to threats. Its surface glistens with a slick, iridescent sheen, hinting at the organic processes within. This armor requires daily sustenance—organic nutrients like fresh fruit—to maintain its adaptive properties, ensuring it remains as resilient as possible.",
    "price": 150000,
    "icon": "🦑",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Adaptive Density",
      "Daily Sustenance"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Vat of Fluid",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Adaptive Density",
        "rules": "The armor gains +1 AC against the last damage type it has endured, up to a maximum of +4. This effect lasts for one hour after the threat ceases."
      },
      {
        "title": "Daily Sustenance",
        "rules": "The armor requires organic nutrients (e.g., fruit) as daily sustenance. Failure to provide this results in a -1 penalty to AC until the next feeding, which can be provided at any time."
      }
    ],
    "levelRequirementReason": "Beginners can start with the armor’s base benefits and adapt its full capabilities over time.",
    "vendorReason": "The Animatopia Scientist is renowned for their expertise in living constructs, making them the ideal vendor for this unique piece of armor.",
    "shippingDetail": "Shipped in a nutrient-rich fluid to ensure the armor remains healthy and functional during transit.",
    "usage": {
      "activation": "Passive",
      "duration": "1 hour per day, renewable with feeding",
      "endsWhen": "Feeding is missed or damage type resistance expires",
      "charges": "Unlimited (recharged through daily feeding)"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique adaptive properties and daily maintenance requirements.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T00:16:05.717340+00:00",
    "aiReviewedAt": "2026-07-22T00:16:05.717340+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_taming_lure": {
    "id": "animatopia_taming_lure",
    "name": "Animatopia Taming Lure (Specific)",
    "description": "The Animatopia Taming Lure (Specific) is a biotech device encased in a sleek, metallic sheath adorned with glowing pheromone emitters. Crafted by Animatopia's leading scientists, this lure broadcasts a unique blend of pheromones that can momentarily render apex predators receptive to bonding, making the taming process both possible and safer for even the most formidable beasts.",
    "price": 15000,
    "icon": "💖",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Guarantees successful taming attempt",
      "Temporarily alters predator behavior"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Biotech Case",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Successful Taming Attempt",
        "rules": "When activated, this device broadcasts a pheromone cocktail that temporarily renders an apex predator receptive to bonding. This guarantees one successful attempt at taming a non-sentient beast with a Challenge Rating (CR) of 10 or lower within a day of activation. The taming process takes 6 hours of direct contact and requires the use of the Handle Animal skill."
      },
      {
        "title": "Behavior Alteration",
        "rules": "For 24 hours after using the device, the targeted predator will be temporarily receptive to bonding attempts by a trainer or tamer. This effect does not guarantee success but increases the likelihood by 50% during that time frame."
      }
    ],
    "levelRequirementReason": "Even novice adventurers can attempt this task with proper guidance.",
    "vendorReason": "The Animatopia Scientist specializes in biotech devices and taming solutions, making them the ideal vendor for this item.",
    "shippingDetail": "Ships via Biotech Courier with expedited delivery within one week of order.",
    "usage": {
      "activation": "Object Interaction to activate",
      "duration": "Instantaneous effect; lasts 24 hours for targeted predator",
      "endsWhen": "Effect ends after 24 hours or if the taming process is interrupted",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's balanced price reflects its rarity and utility in a wide range of adventuring scenarios.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-22T00:16:11.722332+00:00",
    "aiReviewedAt": "2026-07-22T00:16:11.722332+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_trap_net": {
    "id": "animatopia_trap_net",
    "name": "Animatopia Hunting Net",
    "description": "The Animatopia Hunting Net is a formidable tool crafted from synthetic animal sinew that mimics the strength and durability of its natural counterpart. This net can ensnare creatures up to Huge size, requiring an opponent to succeed on a DC 14 Athletics or Acrobatics check to escape. It also features a unique tear mechanism—rending any creature that breaches it with piercing damage for 5 feet, dealing an additional 2d6 slashing damage.",
    "price": 610,
    "icon": "🕸️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Net Strangle",
      "Tear Mechanism"
    ],
    "vendor": "animatopia_hunter",
    "shippedBy": "Woven Bundle Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Net Strangle",
        "rules": "When you use your action to deploy the net (activation), it attempts to restrain a target creature up to Huge size. The target must make a DC 14 Strength saving throw or be restrained for 1 minute, at which point they can repeat the save with advantage on subsequent rounds."
      },
      {
        "title": "Tear Mechanism",
        "rules": "Upon taking piercing damage from any source within 5 feet of the net, it tears and deals an additional 2d6 slashing damage to all creatures within its area. This effect can occur a number of times equal to your proficiency bonus."
      }
    ],
    "levelRequirementReason": "This tool is designed for those with basic combat training.",
    "vendorReason": "Animatopia Prey specializes in tools and weapons used by their hunters, ensuring the quality of each item they sell.",
    "shippingDetail": "Dispatched within three days from Animatopia headquarters.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (restrained creature)",
      "endsWhen": "The restrained effect ends on a successful saving throw or after one minute, whichever comes first. The net can tear multiple times before it is destroyed by taking excessive damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "While not as powerful as legendary hunting tools, this item offers a reliable and effective restraint method suitable for many adventurers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T00:16:17.656483+00:00",
    "aiReviewedAt": "2026-07-22T00:16:17.656483+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_trophy_mount": {
    "id": "animatopia_trophy_mount",
    "name": "Animatopia Apex Trophy Mount",
    "description": "The Animatopia Apex Trophy Mount is a meticulously preserved head of an apex predator, its eyes still glowing with an eerie, almost sentient light. Crafted by the renowned Animatopia hunters, this trophy instills fear into foes and grants its bearer unparalleled insight into tracking and hunting techniques.",
    "price": 4000,
    "icon": "🏆",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Instills Fear",
      "Enhanced Tracking"
    ],
    "vendor": "animatopia_hunter",
    "shippedBy": "Taxidermy Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instills Fear",
        "rules": "When a creature of the same species as the trophy within 30 feet is targeted by an attack, it must make a Wisdom saving throw (DC 14) or become frightened for 1 minute. The fear ends early on a successful save."
      },
      {
        "title": "Enhanced Tracking",
        "rules": "The bearer gains advantage on all perception checks related to tracking and hunting. This effect is active until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "This trophy mount's power is accessible early, allowing new adventurers to quickly gain a significant edge in combat and exploration.",
    "vendorReason": "The Animatopia hunters are known for their unparalleled expertise with apex predators; thus, it makes sense that they sell trophies imbued with the creatures' essence.",
    "shippingDetail": "Trophies require special handling and arrive securely packed in Taxidermy Crates to ensure safe delivery.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Until the end of their next long rest.",
      "endsWhen": "The bearer completes a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This item provides significant battlefield and exploration advantages, justifying its price in XP.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T00:16:22.905439+00:00",
    "aiReviewedAt": "2026-07-22T00:16:22.905439+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_vampire_covenant_soul_key": {
    "id": "animatopia_vampire_covenant_soul_key",
    "name": "Soul Key of the Covenant",
    "description": "The Soul Key of the Covenant is a corroded brass key with an etched sigil representing the ancient vampire pact. It hums faintly as it draws on the soul energy of its wielder, granting a connection to the dark heart of Animatopia's vampires. Crafted by the Vampire Covenant, this key can unlock hidden sanctuaries and enhance those of vampire descent or attuned users with their heritage.",
    "price": 15000,
    "icon": "🧟",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Vampire Heritage Boost",
      "Soul Drain"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vampire Heritage Boost",
        "rules": "When used, this key grants the user a +1 bonus to all spellcasting rolls. This effect is active as long as the key remains attuned and the wielder has vampire heritage or is attuned to it."
      },
      {
        "title": "Soul Drain",
        "rules": "At the start of each combat, there's a 10% chance that this key will drain life from an enemy within 5 feet. On a successful hit, the target takes 1d4 necrotic damage and must make a DC 13 Constitution saving throw or become Exhausted (reduces movement speed by half). The effect ends if the key is removed."
      }
    ],
    "levelRequirementReason": "Anyone can use this key, but its power amplifies with those of vampire heritage.",
    "vendorReason": "Animatopia's main market sells many relics and artifacts from various factions within the realm, including those crafted by the Vampire Covenant.",
    "shippingDetail": "The delivery is expedited with a Chain Chomp courier, ensuring safe passage through Animatopia’s often treacherous terrain.",
    "usage": {
      "activation": "Activates on use and remains attuned until removed or the key's effect ends.",
      "duration": "Instantaneous",
      "endsWhen": "The key is removed or its effect ends due to combat conditions.",
      "charges": "Unlimited, but limited by attunement duration."
    },
    "priceReason": "The price reflects the rarity and utility of this key without overshadowing other items in the market.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T00:16:29.151107+00:00",
    "aiReviewedAt": "2026-07-22T00:16:29.151107+00:00",
    "aiReviewVersion": 1
  },
  "antasma_cape": {
    "id": "antasma_cape",
    "name": "Nightmare Cape",
    "description": "The Nightmare Cape is a dark garment woven from the shadows of the Dream World. Its bat-like fabric shimmers with an eerie glow, and it whispers secrets of the subconscious to those who wear it. This ancient relic grants entry into the Dream Realm and allows you to manipulate dreams, but be wary: its power comes at a cost.",
    "category": "equipment",
    "price": 16000,
    "icon": "🦇",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Dream Manipulation",
      "Shadow Step"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Nightmare Touch",
        "rules": "As an action, you can touch a creature within your reach and put it to sleep. The target must succeed on a Wisdom saving throw (DC 17) or fall asleep until the end of its next turn."
      },
      {
        "title": "Dream Walk",
        "rules": "Once per short rest, as a bonus action, you can enter the dreamscape of any sleeping creature within 30 feet. While in this state, you are invisible and have advantage on Perception checks made to observe dream activity."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Arcana or Investigation skills to wield its power effectively.",
    "vendorReason": "The Rogueport Black Market deals in rare and ancient artifacts, making it the perfect vendor for such a legendary item.",
    "shippingDetail": "The Nightmare Cape arrives by Phantom Courier, ensuring its delivery through the very fabric of dreams itself.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Sleep effect) / Until end of next turn (Dream Walk)",
      "endsWhen": "Target wakes up (Sleep) / Short rest ends (Dream Walk)",
      "charges": "Unlimited, but Dream Walk can only be used once per short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and utility in both combat and exploration.",
    "priceOriginal": 550000,
    "priceReviewedAt": "2026-07-22T00:16:34.649082+00:00",
    "aiReviewedAt": "2026-07-22T00:16:34.649082+00:00",
    "aiReviewVersion": 1
  },
  "anti_magic_field_generator": {
    "id": "anti_magic_field_generator",
    "name": "Anti-Magic Field Generator (Mobile)",
    "description": "The Anti-Magic Field Generator (Mobile) is a sleek, portable device with an ethereal blue glow. Built by The Nullifier, it can create a 3-foot diameter anti-magic field around you that lasts for one hour per day. This device allows you to selectively disable your own magic spells and abilities within the field while still protecting yourself from hostile magic.",
    "category": "equipment",
    "price": 160000,
    "icon": "📡",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Selective Anti-Magic Field",
      "Self-Protecting Magic"
    ],
    "vendor": "magic_nullification",
    "shippedBy": "Magic-Free Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Selective Anti-Magic Field",
        "rules": "Activate as a bonus action. This effect creates an anti-magic field with a 3-foot diameter around you. You can choose to exclude yourself from the effects of this field, but not your allies or enemies within it. The field lasts for one hour per day and ends if you move more than 10 feet away from its center."
      },
      {
        "title": "Self-Protecting Magic",
        "rules": "While in the anti-magic field, any magic spells or abilities you cast are unaffected by the field. However, your allies' and enemies' magical effects are still negated within this area. You can only use this effect once per day."
      }
    ],
    "levelRequirementReason": "This device is designed to be accessible but powerful enough to require at least first-level proficiency in spellcasting or magic.",
    "vendorReason": "The Nullifier specializes in tools that negate magical effects, making this item a perfect fit for their inventory.",
    "shippingDetail": "Delivery takes one week and includes protective packaging to ensure the device arrives undamaged.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One hour per day",
      "endsWhen": "You move more than 10 feet away from its center or end your concentration (as a bonus action)",
      "charges": "Once per day"
    },
    "priceReason": "The device is priced at 1000 XP, reflecting its unique functionality and the expertise of The Nullifier in crafting such tools.",
    "priceOriginal": 55000000,
    "priceReviewedAt": "2026-07-22T00:16:40.652157+00:00",
    "aiReviewedAt": "2026-07-22T00:16:40.652157+00:00",
    "aiReviewVersion": 1
  },
  "apis_kingdom_bee_diplomacy": {
    "id": "apis_kingdom_bee_diplomacy",
    "name": "Apis Kingdom Bee Diplomacy Service",
    "description": "This small golden scepter is adorned with intricate bee motifs. When invoked, it commands the bees of Apis Kingdom to aid in diplomatic negotiations. For a day each week, any bees you encounter are neutral towards you, and honey can be purchased at half price from local vendors.",
    "category": "services",
    "price": 160,
    "icon": "🐝",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Bees are neutral for one week",
      "Honey is halved price"
    ],
    "vendor": "apis_kingdom",
    "shippedBy": "Bee Swarm Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Neutral Bees",
        "rules": "Once per week, all bees you encounter during that week are neutral towards you. This lasts until the end of the week or if you provoke their hostility."
      },
      {
        "title": "Cheap Honey",
        "rules": "When purchasing honey from a vendor within Apis Kingdom, it costs half price for one month after using this item."
      }
    ],
    "levelRequirementReason": "The item is crafted by the Apis Kingdom Embassy and can be used by any commoner.",
    "vendorReason": "The embassy provides services that enhance diplomatic relations, including this unique tool.",
    "shippingDetail": "Delivered personally by a hive of bees within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "One day each week",
      "endsWhen": "Ends when the week ends or if you provoke hostility from any bees encountered during that week",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced by reducing the weekly use to one day and lowering the price to reflect its utility.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T00:16:45.396663+00:00",
    "aiReviewedAt": "2026-07-22T00:16:45.396663+00:00",
    "aiReviewVersion": 1
  },
  "apis_kingdom_beekeeper_suit": {
    "id": "apis_kingdom_beekeeper_suit",
    "name": "Apis Kingdom Beekeeper Suit",
    "description": "The Apis Kingdom Beekeeper Suit is a meticulously crafted ensemble of supple leather and reinforced silk. Worn by the esteemed Hive Wardens, this suit not only grants the wearer immunity to bee stings but also provides +1 AC against small flying creatures. The faint hum it emits serves as an alert system for nearby insects, ensuring the keeper's safety in the hive.",
    "price": 160,
    "icon": "👔",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Immunity to Bee Stings",
      "+1 AC vs Small Flying Creatures"
    ],
    "vendor": "apis_kingdom_apiary",
    "shippedBy": "Honeycomb Veil",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Bee Stings",
        "rules": "The wearer gains immunity to all damage from bee stings. This effect is passive and lasts for the duration of wearing the suit."
      },
      {
        "title": "+1 AC vs Small Flying Creatures",
        "rules": "While wearing this suit, the wearer gains a +1 bonus to their AC against attacks made by small flying creatures such as bees or wasps. This benefit persists until the end of each long rest."
      }
    ],
    "levelRequirementReason": "This basic yet effective suit is suitable for beginners and those who wish to learn more about beekeeping.",
    "vendorReason": "Apis Kingdom Apiary is known for its expertise in all things honey and bees, making it the premier vendor for such protective gear.",
    "shippingDetail": "The suit is carefully packed to ensure safe delivery. It typically arrives within a week with no special handling required.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until removed or end of long rest",
      "endsWhen": "Removal or the end of a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The suit is priced lower due to its simplicity and the fact that it is not a magic item, making it accessible for beginners.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T00:16:50.845995+00:00",
    "aiReviewedAt": "2026-07-22T00:16:50.845995+00:00",
    "aiReviewVersion": 1
  },
  "apis_kingdom_honey_boost_service": {
    "id": "apis_kingdom_honey_boost_service",
    "name": "Apis Kingdom Honey Boost Service",
    "description": "The Apis Kingdom Honey Boost Service is a carefully curated extract of royal jelly and honey, imbued with the natural vigor of bees. This potent concoction grants you a surge of vitality: it heals 1d8 temporary hit points and increases your walking speed by +7 feet for an hour. The service also ensures that sleep spells or effects are less likely to take hold, offering advantage on saving throws against such enchantments.",
    "price": 160,
    "icon": "🐝",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Regenerative Nectar",
      "Sleep Resilience"
    ],
    "vendor": "apis_kingdom_hive",
    "shippedBy": "Honey Jar Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regenerative Nectar",
        "rules": "You gain 1d8 temporary hit points and your walking speed is increased by +7 feet for one hour. This effect ends when you finish a short or long rest, expiring if you take damage."
      },
      {
        "title": "Sleep Resilience",
        "rules": "You have advantage on saving throws against the effects of spells and other abilities that would cause you to fall asleep. This benefit lasts for one hour and is lost when you finish a short or long rest, or if you take damage."
      }
    ],
    "levelRequirementReason": "This service can be beneficial even at lower levels, aiding adventurers in their early stages of their journey.",
    "vendorReason": "As the premier beekeepers of Apis Kingdom, they are well-known for their natural health remedies and this service is a hallmark of their expertise.",
    "shippingDetail": "Delivered in an ornate honey jar, imbued with the scent that attracts bees. The jar must be returned empty to the vendor within one week of purchase for full refund.",
    "usage": {
      "activation": "Passive effect upon consumption.",
      "duration": "One hour.",
      "endsWhen": "Completion of a short or long rest, taking damage, or at the start of your next turn after finishing a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rarity and quality of ingredients used in this service, providing significant benefits without overburdening lower-level adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:16:56.948512+00:00",
    "aiReviewedAt": "2026-07-22T00:16:56.948512+00:00",
    "aiReviewVersion": 1
  },
  "apis_kingdom_honey_extractor": {
    "id": "apis_kingdom_honey_extractor",
    "name": "Apis Kingdom Honey Extractor",
    "description": "This honey extractor is a meticulously crafted contraption of polished brass and gleaming gears, spun by the skilled artisans of Apis Kingdom. It effortlessly extracts pure honeycomb into golden cakes, leaving no sticky residue behind. The extractor's gentle mechanism ensures that bees are not disturbed during use.",
    "category": "equipment",
    "price": 160,
    "icon": "🍯",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Bee-Friendly Operation",
      "Pure Honey Extraction"
    ],
    "vendor": "apis_kingdom_hive",
    "shippedBy": "Honey Hex Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bee-Friendly Operation",
        "rules": "When used, this device operates silently and smoothly, ensuring no disturbance to the bees. It does not provoke opportunity attacks or require a saving throw from creatures nearby."
      },
      {
        "title": "Pure Honey Extraction",
        "rules": "The extractor grants advantage on all checks related to sweet baking. Additionally, it can be used once per day as a bonus action to extract one additional honeycomb cake without expending charges."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and requires no specific class or background.",
    "vendorReason": "The Kingdom Beekeepers specialize in items related to honey production, ensuring that their customers have the best tools available.",
    "shippingDetail": "Delivered by Honey Hex Haul, this item arrives safely within one week of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are exhausted or when the user decides to stop using it",
      "charges": "Unlimited"
    },
    "priceReason": "This honey extractor is crafted with high-quality materials and features a unique design, making it a sought-after item among bakers and apiarists.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T00:17:02.010512+00:00",
    "aiReviewedAt": "2026-07-22T00:17:02.010512+00:00",
    "aiReviewVersion": 1
  },
  "apis_kingdom_honeycomb_cake_recipe": {
    "id": "apis_kingdom_honeycomb_cake_recipe",
    "name": "Recipe: Apis Kingdom Honeycomb Cake",
    "description": "The Apis Kingdom Honeycomb Cake Recipe is a rare treat from the royal hives. This honey-drenched confection not only provides sweet energy but also teaches you how to craft the Layered Honeycomb (a 50-minute process), and consuming its slices grants you +1 to Charisma saving throws for three hours, as well as attracting helpful bees that scout your surroundings, all while emitting a delightful aroma that repels thieves who might covet it.",
    "price": 160,
    "icon": "🍰",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Layered Honeycomb",
      "Attracting Bees"
    ],
    "vendor": "apis_kingdom_hive",
    "shippedBy": "Honey Hex",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Layered Honeycomb",
        "rules": "Activates when you spend time learning the recipe. Once per short or long rest, you can prepare a Layered Honeycomb using this recipe and honey. This action requires 50 minutes of focused work."
      },
      {
        "title": "Attracting Bees",
        "rules": "Eating a slice of the cake grants you a +1 bonus to Charisma saving throws for three hours, and attracts helpful bees that act as scouts in your immediate area. The effect ends if you consume more than one slice or after 3 hours."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough to be accessible at the beginning of an adventurer's journey.",
    "vendorReason": "The royal hives are responsible for creating such a delicacy and teaching its secrets to worthy visitors.",
    "shippingDetail": "Ships by special courier, ensuring the cake is delivered fresh within three days of purchase.",
    "usage": {
      "activation": "Passive once learned; active when consuming slices",
      "duration": "+1 bonus lasts for 3 hours per slice consumed; attracting bees ends after 3 hours or if more than one slice is eaten",
      "endsWhen": "Consuming another slice of the cake or ending a three-hour period",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe is valuable but not overly expensive, reflecting its rarity and utility.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T00:17:07.958078+00:00",
    "aiReviewedAt": "2026-07-22T00:17:07.958078+00:00",
    "aiReviewVersion": 1
  },
  "apis_kingdom_royal_jelly": {
    "id": "apis_kingdom_royal_jelly",
    "name": "Apis Kingdom Royal Jelly",
    "description": "Apis Kingdom Royal Jelly is a shimmering, glowing substance that looks like clear honey. Consuming it grants you the regenerative prowess of a queen bee, bolstering your resilience and fortitude for an hour. This potent elixir comes from the heart of the hive, where only the most privileged bees partake in its creation.",
    "category": "consumables",
    "price": 160,
    "icon": "🍯",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Queen Bee's Regeneration",
      "Fortified Fortitude"
    ],
    "vendor": "apis_kingdom",
    "shippedBy": "Drone Escort",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Queen Bee's Regeneration",
        "rules": "As an action, consume this elixir to gain 2d8 temporary hit points and a +2 bonus to all saving throws for the next hour. This effect can be used once per long rest."
      },
      {
        "title": "Fortified Fortitude",
        "rules": "For the duration of its effectiveness, your Constitution save DC increases by 1. Should you fail a save while under this effect and take damage from it, you regain all temporary hit points at the start of your next turn."
      }
    ],
    "levelRequirementReason": "This elixir is suitable for beginners but still grants significant benefits.",
    "vendorReason": "Apis Kingdom specializes in bee-related products, including the Royal Jelly that only their bees can produce.",
    "shippingDetail": "The Drone Escort service ensures swift delivery within a day of your order.",
    "usage": {
      "activation": "As an action",
      "duration": "1 hour",
      "endsWhen": "Ends at the start of your next turn after its duration expires or if you take damage from a saving throw while under its effect.",
      "charges": "Once per long rest"
    },
    "priceReason": "The price reflects the rarity and the significant regenerative properties provided by this unique elixir.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T00:17:13.288979+00:00",
    "aiReviewedAt": "2026-07-22T00:17:13.288979+00:00",
    "aiReviewVersion": 1
  },
  "apis_regal_pollen": {
    "id": "apis_regal_pollen",
    "name": "Apis Kingdom Regal Pollen",
    "description": "Apis Kingdom Regal Pollen is a golden, energizing pollen harvested from the Royal Hive. This nectar imbues you with the vitality of the hive, granting heightened focus and strength to aid in your next move.",
    "price": 610,
    "icon": "🌼",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Royal Focus",
      "Allergenic Reaction"
    ],
    "vendor": "apis_hive_exchange",
    "shippedBy": "Golden Jar Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Royal Focus",
        "rules": "Consume as a bonus action. You gain one additional Action on your next turn, which can be used for movement or an attack. This effect lasts until the start of your next turn."
      },
      {
        "title": "Allergenic Reaction",
        "rules": "You are highly allergenic to non-Apis races. Non-Apis creatures within 5 feet when you consume this pollen must make a DC 14 Constitution saving throw or take 1d6 poison damage and be poisoned until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This pollen is accessible to all adventurers, as its effects are designed for immediate use in combat.",
    "vendorReason": "The Apis Hive Exchange specializes in bee-related products and ensures the quality of their offerings.",
    "shippingDetail": "Delivered by the Golden Jar Courier, ensuring safe delivery to your doorstep within one business day.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The effect ends if you take damage or are incapacitated. The pollen does not have any recharge and is single-use.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rarity as a hive product, yet remains accessible for all adventurers.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T00:17:18.432862+00:00",
    "aiReviewedAt": "2026-07-22T00:17:18.432862+00:00",
    "aiReviewVersion": 1
  },
  "apple_red": {
    "id": "apple_red",
    "name": "Red Apple",
    "description": "A Red Apple with a crisp bite and a tart aroma. Its vibrant color hints at the orchards of Toad Town, where it was freshly picked. This apple is not just for eating; when thrown hard enough, it can knock an opponent off their feet.",
    "category": "consumables",
    "price": 29,
    "icon": "🍎",
    "stock": 25,
    "rarity": "common",
    "effects": [
      "Healing Bite",
      "Tossing Power"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Fruit Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Bite",
        "rules": "Eating the Red Apple restores 10 hit points to the eater. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Tossing Power",
        "rules": "If thrown with sufficient force, the Red Apple can knock a creature of up to Medium size prone. The DC for this check is 13. On a success, the target must make a Strength saving throw or fall prone."
      }
    ],
    "levelRequirementReason": "This simple yet effective apple requires no special skill or training.",
    "vendorReason": "The Toad Town Market is known for its fresh produce and local delicacies, including the Red Apple.",
    "shippingDetail": "Delivered via a trusted courier who ensures freshness with ice packs.",
    "usage": {
      "activation": "Eating or throwing",
      "duration": "Instantaneous for eating; until the end of your next turn if used as an attack",
      "endsWhen": "The effect ends when the apple is consumed or the target successfully saves against the Tossing Power check.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its healing and utility, making it a cost-effective addition to any adventurer's inventory.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:17:23.488914+00:00",
    "aiReviewedAt": "2026-07-22T00:17:23.488914+00:00",
    "aiReviewVersion": 1
  },
  "arbiters_judgment_gavel": {
    "id": "arbiters_judgment_gavel",
    "name": "Arbiter's Judgment Gavel",
    "description": "The Arbiter's Judgment Gavel is a heavy mace crafted from polished brass and adorned with intricate engravings of Mechanus' legal codes. It exudes an aura of impartial justice, enforcing the strict laws of Mechanus upon those who dare to challenge its authority.",
    "price": 16000,
    "icon": "🔨",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Guilty Verdict",
      "Minauros Imprisonment"
    ],
    "vendor": "mechanus_legate",
    "shippedBy": "Inevitable Messenger",
    "levelRequirement": 17,
    "factionBonus": {
      "law": 100
    },
    "effectDetails": [
      {
        "title": "Guilty Verdict",
        "rules": "As a bonus action, the wielder can declare a guilty verdict on a target within 30 feet. The target must make a Charisma saving throw (DC 20). On a failed save, the target is immediately imprisoned in Minauros for 7 days."
      },
      {
        "title": "Minauros Imprisonment",
        "rules": "The target spends 7 days in Minauros, Mechanus' prison realm. The imprisonment ends upon release by an Inevitable or after the duration expires."
      }
    ],
    "levelRequirementReason": "This gavel requires a high level of authority and expertise to wield properly.",
    "vendorReason": "Only those who uphold Mechanus' laws can purchase or use such a potent symbol of justice.",
    "shippingDetail": "The gavel is delivered by an Inevitable, ensuring swift and secure transport to its new owner.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Target's save or duration expiration",
      "charges": "Once per week"
    },
    "priceReason": "This item is a rare and powerful tool of Mechanus, justifying its moderate price.",
    "priceOriginal": 675000,
    "priceReviewedAt": "2026-07-22T00:17:28.650019+00:00",
    "aiReviewedAt": "2026-07-22T00:17:28.650019+00:00",
    "aiReviewVersion": 1
  },
  "arcane_battery_pack": {
    "id": "arcane_battery_pack",
    "name": "Arcane Battery Pack (Power)",
    "description": "The Arcane Battery Pack (Power) is a compact, battery-like device that glows with arcane energy. Crafted by Mana Engineers from enchanted metals, it stores unused spell slots for emergencies, ensuring you're never without magic when needed most.",
    "price": 16000,
    "icon": "🔋",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Emergency Spell Storage",
      "Rapid Recharge"
    ],
    "vendor": "spell_tech",
    "shippedBy": "Enchanted Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Emergency Spell Storage",
        "rules": "Activates as an action. Store up to two additional spell slots of any level for emergency use. These stored slots can be cast immediately without expending them from your spellbook or prepared list."
      },
      {
        "title": "Rapid Recharge",
        "rules": "Recharges completely after 24 hours, restoring all stored spell slots. This recharge process requires a short rest and is powered by the device's internal mana core."
      }
    ],
    "levelRequirementReason": "Requires a high spellcasting proficiency to manage such a complex storage system.",
    "vendorReason": "Spell Tech specializes in enchanted devices that enhance magical capabilities and this item is one of their most sought-after creations.",
    "shippingDetail": "Delivered by Enchanted Courier, the shipment includes a magical tracking spell to ensure safe delivery within two days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The stored spell slots are used or the device recharges.",
      "charges": "Unlimited; recharges after 24 hours"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects a rare and valuable item that enhances emergency spellcasting without draining the caster's resources.",
    "priceOriginal": 580000,
    "priceReviewedAt": "2026-07-22T00:17:33.640566+00:00",
    "aiReviewedAt": "2026-07-22T00:17:33.640566+00:00",
    "aiReviewVersion": 1
  },
  "arcane_spellstorm_generator": {
    "id": "arcane_spellstorm_generator",
    "name": "Arcane Spellstorm Generator",
    "description": "The Arcane Spellstorm Generator is a compact, ancient device forged from arcane runes and enchanted metal. When activated, it unleashes a concentrated burst of magical energy that expands into a tempest of randomly casting spells within a 100-foot radius for one minute. The user remains unaffected by the storm's effects.",
    "price": 160000,
    "icon": "🌪️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Arcane Tempest",
      "Spell Immunity"
    ],
    "vendor": "wild_magic",
    "shippedBy": "Lightning Strike Express",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Arcane Tempest",
        "rules": "When activated as an action, this device creates a tempest of magical energy within a 100-foot radius centered on the user. The tempest lasts for one minute and randomly casts spells from the Warlock spell list with a DC equal to 15 + the user's spellcasting ability modifier. The tempest targets creatures within its area at random, and the user is immune to all effects of this storm."
      },
      {
        "title": "Spell Immunity",
        "rules": "The user gains immunity to any spells cast by the Arcane Tempest for as long as they are within 10 feet of the device. This immunity persists until the end of their next turn after moving more than 15 feet away from the device."
      }
    ],
    "levelRequirementReason": "The Arcane Spellstorm Generator requires a high-level spellcaster to properly harness its unpredictable magic.",
    "vendorReason": "Wild Magic's Unseen Servants are known for their expertise in arcane devices and have mastered the art of creating such volatile tools.",
    "shippingDetail": "Due to the fragile nature of the device, it is shipped exclusively via Lightning Strike Express with enhanced protective measures.",
    "usage": {
      "activation": "Action",
      "duration": "One minute",
      "endsWhen": "The tempest ends when its duration expires or the user moves more than 15 feet away from the device and loses spell immunity.",
      "charges": "Unlimited, but may not be used again until the next long rest."
    },
    "priceReason": "The Arcane Spellstorm Generator is priced at 1000 XP due to its complex mechanics, unpredictable magic, and the high-level expertise required for its operation.",
    "priceOriginal": 1050000,
    "priceReviewedAt": "2026-07-22T00:17:39.944843+00:00",
    "aiReviewedAt": "2026-07-22T00:17:39.944843+00:00",
    "aiReviewVersion": 1
  },
  "arcane_tower_core": {
    "id": "arcane_tower_core",
    "name": "Arcane Tower Core (Mobile)",
    "description": "The Arcane Tower Core (Mobile) is a shimmering crystalline core that can be summoned to generate an awe-inspiring five-story tower of arcane knowledge. Crafted by the prestigious Arcane University, this mobile structure provides a wizard with a fully functional study and research lab in mere hours. The tower's presence is marked by a subtle hum and a faint glow, which can only be dismissed or re-summoned once per week.",
    "price": 160000,
    "icon": "🏰",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Arcane Study",
      "Weekly Summoning"
    ],
    "vendor": "wizard_consortium",
    "shippedBy": "Teleportation Circle",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Arcane Study",
        "rules": "This effect allows the user to summon a five-story arcane tower. The tower functions as a fully equipped study, complete with research facilities and a library. This effect is usable once per week and requires no action to activate but can only be dismissed or re-summoned by using its special weekly ability."
      },
      {
        "title": "Weekly Summoning",
        "rules": "Once per week, the user may dismiss their current tower and summon another one in a different location. This effect has a 7-day cooldown period and requires no action to activate but can only be used once every seven days."
      }
    ],
    "levelRequirementReason": "The Arcane Tower Core is designed for high-level wizards who require a mobile, permanent base of operations.",
    "vendorReason": "The Wizard Consortium specializes in providing powerful magical items to the most skilled practitioners of arcane arts.",
    "shippingDetail": "Delivery is instant through the use of a Teleportation Circle, ensuring that your tower arrives at its destination without delay.",
    "usage": {
      "activation": "Instantaneous (once per week)",
      "duration": "Permanent until dismissed or re-summoned",
      "endsWhen": "Dismissed by weekly ability or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Arcane Tower Core is priced at 1,000 XP, reflecting its rare craftsmanship and utility for high-level wizards.",
    "priceOriginal": 895000,
    "priceReviewedAt": "2026-07-22T00:17:45.874886+00:00",
    "aiReviewedAt": "2026-07-22T00:17:45.874886+00:00",
    "aiReviewVersion": 1
  },
  "arcane_weather_manipulator": {
    "id": "arcane_weather_manipulator",
    "name": "Arcane Weather Manipulator (Device)",
    "description": "The Arcane Weather Manipulator is a gnarled staff with runes etched into its surface, shimmering faintly in response to arcane energies. Crafted by the Stormcallers Guild from ancient meteoric iron, it can summon localized tempests or bring calm to turbulent skies. With each use, the winds whisper of ancient pacts and elemental debts.",
    "price": 160000,
    "icon": "🌩️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Local Weather Control",
      "Charged Manipulation"
    ],
    "vendor": "elemental_shop",
    "shippedBy": "Wind Rider",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Local Weather Control",
        "rules": "With a flourish, you can manipulate weather within a 1-mile radius for up to 1 hour. Choose from summoning a gust of wind, inducing a light rainstorm, or calming turbulent skies. The effect is instantaneous and lasts until the duration ends. This use expends one charge. If used outdoors during a storm, there's a 20% chance that the weather will spontaneously change in an unexpected way."
      },
      {
        "title": "Charged Manipulation",
        "rules": "The Arcane Weather Manipulator has only three charges per day, which are replenished after a long rest. If you fail to use it within the day, the remaining charge is lost and cannot be reused until the next day."
      }
    ],
    "levelRequirementReason": "Requires significant arcane knowledge and power to safely manipulate weather at will.",
    "vendorReason": "Elemental Shop specializes in rare items that interact with nature, making it the ideal vendor for this weather-controlling artifact.",
    "shippingDetail": "The staff is shipped securely within a custom-made, enchanted case to protect its delicate runes from damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 hour per use",
      "endsWhen": "Duration ends or the effect is interrupted by an opposing force",
      "charges": "3 charges per day, recharged with a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare crafting materials and limited daily uses.",
    "priceOriginal": 410000,
    "priceReviewedAt": "2026-07-22T00:17:51.816606+00:00",
    "aiReviewedAt": "2026-07-22T00:17:51.816606+00:00",
    "aiReviewVersion": 1
  },
  "armor_of_the_forgotten": {
    "id": "armor_of_the_forgotten",
    "name": "Armor of the Forgotten",
    "description": "Armor of the Forgotten is a suit of ancient plate armor that whispers the names of those who have fought and died beneath its protection. Each fallen warrior etches their legacy into the armor's very core, enhancing it with their strength and resolve. The armor glows faintly when remembering a deceased wearer, and in battle, it seems to fight as if guided by the spirits of the past.",
    "category": "equipment",
    "price": 16000,
    "icon": "🦾",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Warrior’s Echo",
      "Mighty Guardian"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Bone Chest",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Warrior’s Echo",
        "rules": "The armor grants you a bonus equal to half the number of fallen warriors whose memories it holds (maximum +5) on all attack rolls and damage rolls. This effect ends if you die, but the armor remembers your name."
      },
      {
        "title": "Mighty Guardian",
        "rules": "While wearing this armor, you have a constant advantage on saving throws against being charmed or frightened for as long as it remains on you. If removed, this effect is lost until the next dawn."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to wield its ancient power and resist its spirits.",
    "vendorReason": "The Gilded Gryphon specializes in rare, legendary equipment, making it the perfect vendor for this heirloom of forgotten heroes.",
    "shippingDetail": "Delivered via Bone Chest's enchanted carriage, which ensures safe and swift transport with no risk of damage.",
    "usage": {
      "activation": "Passive effect while wearing armor.",
      "duration": "Until removed or you die.",
      "endsWhen": "If the wearer dies, the armor remembers them until the next dawn.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP for its legendary rarity and unique abilities.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T00:17:57.277318+00:00",
    "aiReviewedAt": "2026-07-22T00:17:57.277318+00:00",
    "aiReviewVersion": 1
  },
  "army_recruitment_contract": {
    "id": "army_recruitment_contract",
    "name": "Army Recruitment (1,000 Soldiers)",
    "description": "The Army Recruitment Contract is a parchment of steel-blue ink, inscribed with names and seals from the Steel Syndicate. It binds you to command an entire mercenary army—1,000 trained soldiers loyal to your cause for one year. The contract requires regular supplies costing 100,000 gp annually; failure to provide them risks the morale of your forces decaying, making them unreliable.",
    "category": "faction",
    "price": 16000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Loyalty and Discipline",
      "Annual Supply Requirement"
    ],
    "vendor": "steel_syndicate",
    "shippedBy": "Mercenary Contract Courier",
    "levelRequirement": 14,
    "factionBonus": {
      "military": 100,
      "control": 50
    },
    "effectDetails": [
      {
        "title": "Loyalty and Discipline",
        "rules": "Activate as an action. This contract commands the loyalty of 1,000 trained soldiers (CR 1/8 each) for one year in mass combat scenarios. The army remains loyal until a major battle or if the annual supply is not provided. If supplies are not maintained monthly, morale decays, reducing their effectiveness."
      },
      {
        "title": "Annual Supply Requirement",
        "rules": "The contract requires 100,000 gp annually to maintain the army's loyalty and discipline. Failure to provide this results in a -2 penalty on all command checks with the soldiers for one month."
      }
    ],
    "levelRequirementReason": "Requires a high-level character to manage such a large and loyal mercenary force.",
    "vendorReason": "The Steel Syndicate specializes in military contracts, ensuring the reliability of their recruits for long-term engagements.",
    "shippingDetail": "Delivered by a fleet of armored couriers, this contract is secured with advanced encryption to prevent tampering.",
    "usage": {
      "activation": "Action",
      "duration": "One year or until major battle",
      "endsWhen": "Major battle, failure to provide supplies monthly, or destruction of the contract",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the cost of maintaining a large mercenary force for one year, including training and supplies.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T00:18:03.104749+00:00",
    "aiReviewedAt": "2026-07-22T00:18:03.104749+00:00",
    "aiReviewVersion": 1
  },
  "asclepia_healing_ointment": {
    "id": "asclepia_healing_ointment",
    "name": "Asclepian Healing Ointment",
    "description": "The Asclepian Healing Ointment is a potent salve of verdant hue and fragrant aroma. Crafted from rare herbs gathered by Asclepia's apothecaries, this ointment can mend deep wounds with miraculous speed. A single application heals 4d8+4 hit points, restoring vitality in an instant.",
    "category": "consumables",
    "price": 160,
    "icon": "🧴",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Heals Wounds",
      "Cures Blights"
    ],
    "vendor": "Asclepia",
    "shippedBy": "Medical Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heals Wounds",
        "rules": "When applied to a creature as an action, the Asclepian Healing Ointment heals the target for 4d8+4 hit points. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Cures Blights",
        "rules": "The salve also cures any disease or curse affecting a creature, such as blindness or deafness. The target must make a successful Constitution saving throw (DC 12) to benefit from this effect; otherwise, the ointment has no additional effect."
      }
    ],
    "levelRequirementReason": "This salve is accessible for first-level characters as it offers immediate aid without requiring significant magical prowess.",
    "vendorReason": "Asclepia, the apothecary guild renowned for its medical expertise, ensures this ointment's availability to all who seek swift healing.",
    "shippingDetail": "Shipped via the Medical Pouch service, which guarantees safe and timely delivery of critical supplies.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous effect",
      "endsWhen": "Exhausted after use; recharges at dawn",
      "charges": "Unlimited charges per day"
    },
    "priceReason": "The price reflects the rare ingredients and labor-intensive preparation required to craft this potent medicinal salve.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T00:18:08.704312+00:00",
    "aiReviewedAt": "2026-07-22T00:18:08.704312+00:00",
    "aiReviewVersion": 1
  },
  "asclepia_health_inspector_goggles": {
    "id": "asclepia_health_inspector_goggles",
    "name": "Asclepia Health Inspector Goggles",
    "description": "The Asclepia Health Inspector Goggles are a pair of sleek, tinted goggles that glow faintly with an eerie blue light. They allow you to see microscopic contaminants in food and reveal any false claims about its ingredients. While wearing these goggles, your cooking checks gain advantage, but you must eat with caution as the goggles magnify the presence of germs, causing a perpetual state of paranoia.",
    "category": "equipment",
    "price": 170,
    "icon": "🥽",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "See Contaminants",
      "Paranoid Eating"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "See Contaminants",
        "rules": "When you wear these goggles while cooking or inspecting food, you gain advantage on all checks to avoid food poisoning. However, while eating, you have disadvantage on saving throws for food poisoning due to the constant awareness of germs."
      },
      {
        "title": "Paranoid Eating",
        "rules": "While wearing the Asclepia Health Inspector Goggles, you are always aware of potential contaminants in your food. This causes a state of paranoia that lasts until the goggles are removed or damaged. You have disadvantage on saving throws against being poisoned by food."
      }
    ],
    "levelRequirementReason": "These goggles are designed for anyone who needs to ensure the safety and quality of their meals.",
    "vendorReason": "Asclepia Inspection Tools specializes in tools that promote health and food safety, making these goggles a natural addition to their product line.",
    "shippingDetail": "The goggles are shipped via a sealed, sterilized container to ensure they remain in pristine condition during transit.",
    "usage": {
      "activation": "Passive effect once worn",
      "duration": "Instantaneous; lasts until removed or damaged",
      "endsWhen": "Goggles are removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The goggles provide a unique and useful feature, enhancing food safety without requiring frequent replacement.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T00:18:14.351446+00:00",
    "aiReviewedAt": "2026-07-22T00:18:14.351446+00:00",
    "aiReviewVersion": 1
  },
  "asclepia_nurse_scrubs": {
    "id": "asclepia_nurse_scrubs",
    "name": "Asclepia Nurse Scrubs",
    "description": "Asclepia Nurse Scrubs are pristine white lab coats that shimmer faintly with a soothing blue light. Crafted from the finest cotton and infused with the essence of Asclepia's healing herbs, these scrubs grant you an air of calm professionalism and trustworthiness among your patients.",
    "category": "equipment",
    "price": 170,
    "icon": "🥼",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Calm Presence",
      "Healing Touch"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calm Presence",
        "rules": "You gain a +1 bonus to Charisma (Performance) checks. Additionally, any creature within 5 feet of you has advantage on saving throws against fear and panic."
      },
      {
        "title": "Healing Touch",
        "rules": "As an action, you can touch a creature and restore 2d6 hit points. You regain this ability after finishing a long rest."
      }
    ],
    "levelRequirementReason": "These scrubs are designed for any healer who requires the added confidence of their appearance.",
    "vendorReason": "Asclepia Medical Supply prides itself on providing quality medical attire that enhances a healer's effectiveness and professionalism.",
    "shippingDetail": "Ships via Asclepia’s own Medical Courier, ensuring prompt delivery of your scrubs to your doorstep.",
    "usage": {
      "activation": "As an action or reaction (healing)",
      "duration": "Instantaneous (healing)",
      "endsWhen": "Exhausted uses",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the quality materials and magical essence used in their creation, along with the value of enhanced healing capabilities.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T00:18:19.286997+00:00",
    "aiReviewedAt": "2026-07-22T00:18:19.286997+00:00",
    "aiReviewVersion": 1
  },
  "asclepia_panacea_poultice": {
    "id": "asclepia_panacea_poultice",
    "name": "Asclepia Panacea Poultice",
    "description": "The Asclepia Panacea Poultice is a shimmering green salve that exudes an ethereal glow. Crafted from rare herbs and minerals, it can mend grievous wounds with impossible speed, restoring vitality to even the most injured soul. Applied as a poultice, this magical balm not only heals but also clears away any lingering poison or infection within moments.",
    "category": "consumables",
    "price": 170,
    "icon": "🍃",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Healing Touch",
      "Poison Cleansing"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Touch",
        "rules": "As an action, apply the poultice to a creature. The target regains 4d8 + 4 hit points and is cured of any poison condition immediately."
      },
      {
        "title": "Poison Cleansing",
        "rules": "The poultice also neutralizes any poison affecting the creature within 30 feet, making it safe for consumption or use without risk. This effect has no save DC and does not count against the target's ability to be poisoned again."
      }
    ],
    "levelRequirementReason": "This poultice is accessible to all adventurers who wish to heal their allies quickly.",
    "vendorReason": "Asclepia specializes in medical supplies and magical remedies, making this poultice a staple of their inventory.",
    "shippingDetail": "The Medical Courier ensures swift delivery to the nearest healer or battlefield, guaranteeing that the poultice reaches its intended user as quickly as possible.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect",
      "endsWhen": "Exhausted after use",
      "charges": "Single Use"
    },
    "priceReason": "The balanced price reflects the poultice's rarity and the value of quick, effective healing in dangerous adventuring.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T00:18:24.673973+00:00",
    "aiReviewedAt": "2026-07-22T00:18:24.673973+00:00",
    "aiReviewVersion": 1
  },
  "asclepia_potion_subscription_box": {
    "id": "asclepia_potion_subscription_box",
    "name": "Asclepia Potion Subscription Box",
    "description": "The Asclepia Potion Subscription Box arrives each month with a sealed vial of random Uncommon potion, guaranteed to have a unique twist. The first delivery may contain an actual healing potion, but subsequent months could bring anything from a mislabeled elixir to an unexpected item that defies categorization. Should you perish, your subscription ceases and you must pay 50gp for the cancellation fee; otherwise, you rise with a full health restored.",
    "category": "premium",
    "price": 610,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Weekly Mystery Potion",
      "Potential Mislabeling"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weekly Mystery Potion",
        "rules": "Each week, the recipient receives a sealed vial of an Uncommon potion. There is a 50% chance that the vial contains a mislabeled potion with unpredictable effects."
      },
      {
        "title": "Potential Mislabeling",
        "rules": "The potion's true effect may vary; for instance, it could be an actual healing potion or something entirely different and unexpected. Any use of this potion is at the recipient’s own risk."
      }
    ],
    "levelRequirementReason": "Any adventurer can subscribe to experience unpredictable outcomes.",
    "vendorReason": "Asclepia Pharmaceutical specializes in creating and distributing mysterious remedies, making it a reliable vendor for this subscription box.",
    "shippingDetail": "Delivered by the trusted Medical Courier, ensuring safe and timely delivery of your potion each month.",
    "usage": {
      "activation": "Automatic upon arrival",
      "duration": "Instantaneous use each week",
      "endsWhen": "Subscription canceled on death or when payment is not made for three consecutive months",
      "charges": "Unlimited uses per subscription"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the unpredictable nature and potential risks of each vial.",
    "priceOriginal": 23500,
    "priceReviewedAt": "2026-07-22T00:18:30.191489+00:00",
    "aiReviewedAt": "2026-07-22T00:18:30.191489+00:00",
    "aiReviewVersion": 1
  },
  "asclepia_recipe_healthy_smoothie": {
    "id": "asclepia_recipe_healthy_smoothie",
    "name": "Recipe: Asclepia Healthy Smoothie",
    "description": "Crafted at Asclepia Juice Bar using a secret recipe that blends the health benefits of ancient herbs with modern ingredients, this smoothie restores vitality and quenches your thirst. The concoction is a perfect balance of flavor and nutrients, but its potent effects can only be enjoyed once a day to avoid overwhelming even the most health-conscious adventurers.",
    "price": 170,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Health Boost",
      "Taste Temptation"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Boost",
        "rules": "Consume this smoothie as an action, gaining advantage on Constitution saving throws for the next 24 hours. You can only use this effect once per day."
      },
      {
        "title": "Taste Temptation",
        "rules": "Drinking this smoothie imposes disadvantage on Charisma-based checks and saves until your next short or long rest. This flavor drawback is a trade-off for the health benefits it provides."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers, regardless of level, to enjoy its health-boosting effects.",
    "vendorReason": "Asclepia Juice Bar is renowned for its commitment to crafting beverages that are not only delicious but also beneficial to one's well-being.",
    "shippingDetail": "Ships directly from Asclepia Juice Bar, ensuring freshness and quality of the smoothie upon delivery.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "24 hours",
      "endsWhen": "After 24 hours or until used up for the day",
      "charges": "Daily"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its daily use limitation and health-boosting benefits.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T00:18:35.401337+00:00",
    "aiReviewedAt": "2026-07-22T00:18:35.401337+00:00",
    "aiReviewVersion": 1
  },
  "asclepian_healing_salve": {
    "id": "asclepian_healing_salve",
    "name": "Asclepian Healing Salve",
    "description": "This shimmering golden salve is handcrafted by Asclepia, renowned for their miraculous medicines. It accelerates natural healing and can staunch even grievous wounds in moments. Applied directly to a wound, it heals 1d8+4 hit points instantly and stops bleeding without pain or discomfort.",
    "category": "consumables",
    "price": 170,
    "icon": "🧴",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Heals Wounds",
      "Staunches Bleeding"
    ],
    "vendor": "asclepia_vault",
    "shippedBy": "Swift Courier Falconry",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal Wounds",
        "rules": "Apply the salve to a wound as an action. This heals 1d8+4 hit points and stops bleeding, but only once per creature per day."
      },
      {
        "title": "Staunch Bleeding",
        "rules": "The salve can be applied to staunch severe wounds as a bonus action. It has no save DC or duration; its effect is immediate and permanent once applied successfully."
      }
    ],
    "levelRequirementReason": "This salve is suitable for all adventurers, even those just beginning their journey.",
    "vendorReason": "Asclepia Vault specializes in rare and potent medicines that can save lives on the battlefield.",
    "shippingDetail": "Ships via swift falcons, ensuring timely delivery even in harsh conditions.",
    "usage": {
      "activation": "Action/Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Effect is used up or applied to a creature",
      "charges": "Unlimited"
    },
    "priceReason": "The salve's rarity and the expertise of Asclepia make it moderately expensive, yet accessible for all adventurers.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T00:18:40.320830+00:00",
    "aiReviewedAt": "2026-07-22T00:18:40.320830+00:00",
    "aiReviewVersion": 1
  },
  "asclepian_healing_vial": {
    "id": "asclepian_healing_vial",
    "name": "Asclepian Healing Vial",
    "description": "The Asclepian Healing Vial is a shimmering vial containing a potent, crystalline solution that rapidly mends shattered bones and restores torn muscle. Crafted in the sacred halls of Asclepia, this vial's formula ensures precise and swift healing, leaving no scar or lingering effect behind.",
    "price": 4100,
    "icon": "⚕️",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Instant Bone Repair",
      "Poison and Disease Removal"
    ],
    "vendor": "asclepia_vault",
    "shippedBy": "Sealed Glass Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Bone Repair",
        "rules": "The user administers the vial as an action. It heals 8d4 + 8 hit points to a creature within reach, mending shattered bones with surgical precision. The effect is instantaneous and leaves no scars."
      },
      {
        "title": "Poison and Disease Removal",
        "rules": "Upon successful administration, the vial expels a potent antidote that instantly removes one disease or poison effect from the target creature. This effect has no save DC and can only be used once per day."
      }
    ],
    "levelRequirementReason": "The Asclepian Healing Vial's healing properties are accessible to all adventurers, ensuring even the most novice heroes receive immediate relief.",
    "vendorReason": "Asclepia Vault specializes in distributing medical supplies and remedies created by the Asclepians, making it a reliable source for this vial.",
    "shippingDetail": "The vials are shipped in specially designed sealed glass containers to maintain their potency during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or destroyed upon administration",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the vial's potent healing properties and its limited daily use, ensuring it is a valuable yet accessible tool for any adventuring party.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T00:18:45.820695+00:00",
    "aiReviewedAt": "2026-07-22T00:18:45.820695+00:00",
    "aiReviewVersion": 1
  },
  "asgard_lightning_in_a_bottle": {
    "id": "asgard_lightning_in_a_bottle",
    "name": "Asgard Lightning in a Bottle",
    "description": "A glass vial sealed with a lightning bolt captured from Bifrost's storms. It hums ominously when thunder clouds gather, and its core is forged by Thor’s interns using ancient Asgardian techniques. This vial can amplify your weapon attacks and unleash destructive force in the midst of a storm.",
    "category": "equipment",
    "price": 610,
    "icon": "⚡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Storm Amplifier",
      "Lightning Burst"
    ],
    "vendor": "asgard_surplus",
    "shippedBy": "Bifrost Flash Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Storm Amplifier",
        "rules": "When you attack with a weapon, you can expend one charge to deal an additional 1d6 thunder damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Lightning Burst",
        "rules": "If you roll a natural 1 on a weapon attack while in a storm, this vial releases a burst of lightning. All creatures within a 10-foot radius must make a Dexterity saving throw (DC 14). On a failed save, they take 2d6 thunder damage."
      }
    ],
    "levelRequirementReason": "The intricate enchantments and the raw power contained in this vial require a proficient user.",
    "vendorReason": "Asgardian Surplus is known for selling unique, high-quality items created by Asgard’s greatest minds.",
    "shippingDetail": "Ships via Bifrost Flash Delivery. Special handling required for fragile artifacts like this vial.",
    "usage": {
      "activation": "Reaction or Action (when attacking with a weapon)",
      "duration": "Until the end of your next turn",
      "endsWhen": "On a natural 1 during an attack, or when the vial is destroyed in combat",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, this item retains its rarity and power level while being accessible.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T00:18:51.449807+00:00",
    "aiReviewedAt": "2026-07-22T00:18:51.449807+00:00",
    "aiReviewVersion": 1
  },
  "asgard_mead_honey_cakes_recipe": {
    "id": "asgard_mead_honey_cakes_recipe",
    "name": "Recipe: Asgard Mead Honey Cakes",
    "description": "A golden honey cake soaked in Asgardian mead, baked with Valhalla's blessing. Warriors who partake gain a surge of strength and vitality, their voices raised in battle hymns that echo through the halls of glory.",
    "price": 610,
    "icon": "🍯",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Strengthening Sweetness",
      "Battle Hymn"
    ],
    "vendor": "asgard_kitchen",
    "shippedBy": "Honeycomb Herald",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strengthening Sweetness",
        "rules": "Eating an Asgard Mead Honey Cake grants you a +1 bonus to Strength for 1 hour, along with 1d6 temporary hit points. This effect lasts until the start of your next turn after consuming the cake."
      },
      {
        "title": "Battle Hymn",
        "rules": "As you consume the honey cake, there is a 50% chance that you will burst into song, raising your voice in battle hymns for 1 minute. This effect ends if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough for even the lowest-ranking warriors to master.",
    "vendorReason": "Asgard Feast Hall is known for its legendary mead and honey cakes, perfect for boosting the might of its patrons.",
    "shippingDetail": "The cakes are delivered fresh from Asgard, ensuring they remain golden and soaked in divine mead.",
    "usage": {
      "activation": "Eating one cake",
      "duration": "1 hour + 1d6 minutes (for the battle hymn effect)",
      "endsWhen": "You fall unconscious or become incapacitated; ends when consumed",
      "charges": "Unlimited, as each cake is a separate serving"
    },
    "priceReason": "The honey and mead used in the recipe are of divine quality, making these cakes highly sought after.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T00:18:56.923358+00:00",
    "aiReviewedAt": "2026-07-22T00:18:56.923358+00:00",
    "aiReviewVersion": 1
  },
  "asgard_thunder_amulet": {
    "id": "asgard_thunder_amulet",
    "name": "Asgard Thunder Amulet",
    "description": "The Asgard Thunder Amulet is a radiant pendant etched with ancient runes. Crafted in the forges of Asgard, it channels the very essence of storm gods. This amulet not only grants resistance to thunder damage but also subtly enhances perception during storms, providing an invaluable advantage under tempestuous skies.",
    "category": "equipment",
    "price": 610,
    "icon": "⚡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Storm Resistance",
      "Perception Boost"
    ],
    "vendor": "asgard",
    "shippedBy": "Valhalla Express (By Raven)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Thunderclap Call",
        "rules": "As a bonus action, the wearer can call forth a minor thunderclap within a 15-foot radius. This deals 1d8 thunder damage to all creatures in the area and forces them to make a Constitution saving throw (DC 14) for half damage."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While this amulet is worn, the wearer gains +2 to their Perception checks when within an area of moderate rain or stormy conditions. This effect is active until removed and does not require any action."
      }
    ],
    "levelRequirementReason": "This amulet's power is accessible to those who are just beginning their journey, as it aids in basic survival during inclement weather.",
    "vendorReason": "The gods of Asgard themselves oversee the crafting and sale of this sacred artifact.",
    "shippingDetail": "Ships within a week, delivered by an ethereal raven.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; ends when the amulet is removed or if the wearer enters an area without thunderstorms",
      "endsWhen": "The amulet stops functioning when it is removed from the wearer's neck or when they enter a non-stormy environment.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Offered at a fair price, this amulet provides both utility and protection for adventurers embarking on their quests.",
    "priceOriginal": 19800,
    "priceReviewedAt": "2026-07-22T00:19:02.634432+00:00",
    "aiReviewedAt": "2026-07-22T00:19:02.634432+00:00",
    "aiReviewVersion": 1
  },
  "asgard_valkyrie_spit_roaster": {
    "id": "asgard_valkyrie_spit_roaster",
    "name": "Asgard Valkyrie Spit Roaster",
    "description": "The Asgard Valkyrie Spit Roaster is a portable godfire roaster crafted from enchanted iron and inscribed with runes that invoke Odin's blessings. It evenly roasts meats and honey cakes, ensuring they are always perfect for feasting. When folded, it withstands the fiercest flames without damage, making it ideal for both grand feasts and covert missions. Ravens are drawn to its presence, often delivering messages from Asgard.",
    "category": "equipment",
    "price": 610,
    "icon": "🍖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Roasting",
      "Raven Messenger"
    ],
    "vendor": "asgard_kitchen",
    "shippedBy": "Thunderous Tine Transport",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Roasting",
        "rules": "When used during a cooking check with meats or honey cakes, it provides advantage on the roll and grants +1 to the result. Additionally, it infuses vigor by granting the user 1d4 temporary hit points until the end of their next turn."
      },
      {
        "title": "Raven Messenger",
        "rules": "At the start of your first combat round while holding this roaster, you can summon a raven that delivers a message to Odin's hall. The raven returns within 1 hour and can be summoned once per long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in cooking or knowledge of Asgardian lore.",
    "vendorReason": "Asgard's premier kitchen shop is known for its unique and powerful culinary tools.",
    "shippingDetail": "Ships via express courier within one week of purchase.",
    "usage": {
      "activation": "As a bonus action, activate the roaster to start roasting. The raven messenger effect is used once per long rest.",
      "duration": "The enhanced roasting effect lasts for the duration of the meal preparation and until your next turn.",
      "endsWhen": "The roaster's effects end when you finish cooking or if it is destroyed in combat.",
      "charges": "Unlimited, but requires a long rest to summon the raven messenger again."
    },
    "priceReason": "Balanced at 1000 XP as a rare item that offers both culinary and utility benefits without breaking game balance.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T00:19:08.806591+00:00",
    "aiReviewedAt": "2026-07-22T00:19:08.806591+00:00",
    "aiReviewVersion": 1
  },
  "asgard_valkyrie_training_session": {
    "id": "asgard_valkyrie_training_session",
    "name": "Asgard Valkyrie Training Session",
    "description": "Receive an intense half-day training session from a junior Valkyrie at Asgard Warrior Academy. This session hones your aerial combat skills, leaving you with a deeper understanding of Valhalla’s skies and a feather token that grants one 30-foot jump glide. Expect unsolicited wisdom as the Valkyrie judges your 'worthiness'.",
    "price": 610,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Aerial Combat Proficiency",
      "Feather Token"
    ],
    "vendor": "asgard_training_halls",
    "shippedBy": "Pegasus Shuttle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Aerial Combat Proficiency",
        "rules": "At the start of each combat encounter, you gain proficiency with all martial weapons and can add double your proficiency bonus to attack rolls made using these weapons. This effect lasts for a week."
      },
      {
        "title": "Feather Token",
        "rules": "You receive a small feather token that allows you to glide 30 feet upon landing after falling from a height, once per short rest."
      }
    ],
    "levelRequirementReason": "Beginners are welcome; this training sets the foundation for future aerial combat mastery.",
    "vendorReason": "Asgard Warrior Academy is renowned for its rigorous training programs, including sessions with Valkyries.",
    "shippingDetail": "Delivered by the swift Pegasus Shuttle within a day of purchase.",
    "usage": {
      "activation": "Instantaneous upon receiving the session",
      "duration": "A week and one short rest for the feather token effect",
      "endsWhen": "The duration ends when the time expires or if you gain proficiency in martial weapons again",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a cost of 1000 XP, this session provides substantial benefits without overwhelming the player.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T00:19:14.015359+00:00",
    "aiReviewedAt": "2026-07-22T00:19:14.015359+00:00",
    "aiReviewVersion": 1
  },
  "asgard_viking_tunic_premium": {
    "id": "asgard_viking_tunic_premium",
    "name": "Asgard Viking Tunic (Premium)",
    "description": "The Asgard Viking Tunic (Premium) is a woolen tunic adorned with ancient Runes that whisper strength and resilience to its wearer. Seamstitched by the legendary Asgard Seamstresses, it not only endures harsh winters but also grants warriors an edge in their battles. Worn during mead feasts, it may cause mild itchiness, adding a unique distraction to jovial gatherings.",
    "price": 610,
    "icon": "👕",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 Constitution modifier",
      "Reroll one failed Strength (Athletics) check per day"
    ],
    "vendor": "asgard_hall",
    "shippedBy": "Odins Thread",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Steady Fortitude",
        "rules": "At the beginning of each long rest, you gain a +1 bonus to all saving throws against cold or fatigue. This effect lasts until your next short or long rest."
      },
      {
        "title": "Fortune's Strength",
        "rules": "You may use a bonus action to reroll one failed Strength (Athletics) check made during combat. You must use the result of the second roll, even if it is lower. This ability can be used once per day."
      }
    ],
    "levelRequirementReason": "This tunic is designed for young warriors and adventurers just starting their journey.",
    "vendorReason": "Asgard Seamstresses are renowned for crafting such high-quality, enchanted garments.",
    "shippingDetail": "Delivered by Odin himself, ensuring the tunic arrives in perfect condition.",
    "usage": {
      "activation": "Passive and once per day (for rerolling a check)",
      "duration": "Until next short or long rest for steady fortitude; until used for reroll",
      "endsWhen": "At the end of your next long rest, or if you make another Strength (Athletics) check during combat",
      "charges": "Unlimited"
    },
    "priceReason": "The tunic's enchantments and high-quality craftsmanship justify its moderate price.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T00:19:19.650721+00:00",
    "aiReviewedAt": "2026-07-22T00:19:19.650721+00:00",
    "aiReviewVersion": 1
  },
  "asgardian_mead_ration": {
    "id": "asgardian_mead_ration",
    "name": "Asgardian Mead Ration",
    "description": "The Asgardian Mead Ration is a sturdy canteen crafted from the finest mead of Asgard, imbued with the essence of Norse valor. It grants temporary vigor and sharpens the tongue, making you more persuasive in Charisma (Intimidation) checks for an hour after consumption.",
    "category": "consumables",
    "price": 610,
    "icon": "🍺",
    "stock": 15,
    "rarity": "rare",
    "effects": [
      "Vigor Boost",
      "Boosted Persuasion"
    ],
    "vendor": "asgard_embassy",
    "shippedBy": "Rune-etched Cask",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vigor Boost",
        "rules": "Drinking the Asgardian Mead Ration heals 2d4 hit points and grants a +1 bonus to Charisma (Intimidation) checks for 1 hour."
      },
      {
        "title": "Boosted Persuasion",
        "rules": "For the duration of the effect, if you attempt a Charisma (Persuasion) check, roll an additional d6 and add it to your result. This effect ends if you fail a Wisdom saving throw with a DC 15."
      }
    ],
    "levelRequirementReason": "The mead's effects are accessible to adventurers of all levels.",
    "vendorReason": "The Asgard Embassy is known for its exquisite imports and this ration is a staple of their offerings.",
    "shippingDetail": "Delivered via the Runestaff Express, ensuring swift arrival with a slight delay.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "1 hour",
      "endsWhen": "A failed Wisdom saving throw (DC 15) or when the effect's duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The mead is rare and crafted with divine essence, justifying its moderate price.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T00:19:24.881294+00:00",
    "aiReviewedAt": "2026-07-22T00:19:24.881294+00:00",
    "aiReviewVersion": 1
  },
  "asgardian_rune_axe": {
    "id": "asgardian_rune_axe",
    "name": "Asgardian Rune Axe",
    "description": "The Asgardian Rune Axe is a formidable weapon, its head adorned with an eternally glowing Runesword rune. Crafted by the gods of Asgard for their chosen warriors, it delivers strikes that echo like thunderclaps and can deafen foes until their next turn.",
    "category": "equipment",
    "price": 610,
    "icon": "🪓",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Thunderous Strike",
      "Deafening Impact"
    ],
    "vendor": "asgard",
    "shippedBy": "Bifrost Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Thunderous Strike",
        "rules": "When you hit with this weapon, deal an extra 2d8 thunder damage. This effect can be used once per short rest."
      },
      {
        "title": "Deafening Impact",
        "rules": "Any enemy struck by the axe's thunderclap is deafened until the start of their next turn. This condition lasts for one minute and has no save DC; it ends immediately if the target is deafened by another effect."
      }
    ],
    "levelRequirementReason": "The weapon's divine power requires a minimum level to wield effectively.",
    "vendorReason": "Asgard continues to supply its legendary weapons and runes to worthy warriors from Asgard and beyond.",
    "shippingDetail": "The axe is delivered by the Bifrost in a specially reinforced container, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "On hit with this weapon",
      "duration": "Instantaneous; effect ends when the target is no longer struck or when the next short rest begins",
      "endsWhen": "The effect concludes at the start of a new turn for each target, and the weapon's uses are exhausted after one use per short rest.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced to ensure it fits within the economy, this axe retains its rarity while being accessible for lower-level characters.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T00:19:30.298807+00:00",
    "aiReviewedAt": "2026-07-22T00:19:30.298807+00:00",
    "aiReviewVersion": 1
  },
  "asgardian_rune_stone": {
    "id": "asgardian_rune_stone",
    "name": "Asgardian Rune Stone",
    "description": "The Asgardian Rune Stone is a smooth river stone imbued with ancient runes of Asgard. Its surface glows faintly with an ethereal blue light, and it warms to the touch. Held in battle, it provides a shield against fear and giants, its power drawing from the very essence of Norse legend.",
    "category": "equipment",
    "price": 610,
    "icon": "🪨",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Stone of Fearlessness",
      "Giants' Bane"
    ],
    "vendor": "Asgard",
    "shippedBy": "Raven Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stone of Fearlessness",
        "rules": "While holding this rune stone, you have advantage on saving throws against being frightened. If you are already affected by a fear effect, the duration is reduced to zero."
      },
      {
        "title": "Giants' Bane",
        "rules": "When you hold the rune stone and an enemy giant enters a 5-foot radius around you, the rune stone glows brighter for 1 minute. You can use your reaction to cast Shield on yourself or another creature within range as long as they are also affected by a fear effect."
      }
    ],
    "levelRequirementReason": "The Asgardian Rune Stone's power is accessible early, allowing lower-level heroes to benefit from its protections.",
    "vendorReason": "As the stone originates in Asgard, it makes sense that this divine realm would sell such an item.",
    "shippingDetail": "Delivered by the swift ravens of Asgard, ensuring timely arrival to those who seek protection.",
    "usage": {
      "activation": "Reaction",
      "duration": "One minute per use",
      "endsWhen": "The effect ends when the duration expires or a new giant enters the radius.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Asgardian Rune Stone is crafted from sacred materials and imbued with powerful runes, making it a rare but balanced purchase for adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:19:35.795414+00:00",
    "aiReviewedAt": "2026-07-22T00:19:35.795414+00:00",
    "aiReviewVersion": 1
  }
};
