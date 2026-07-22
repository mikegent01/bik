// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_003 = {
  "almost_edge_regal_emblem": {
    "id": "almost_edge_regal_emblem",
    "name": "Regal Emblem",
    "description": "The Regal Emblem is a forged insignia of the fallen Sovereignty Act, bearing the blood-stained seal of the Regal Empire’s rebellion. Smuggled from the Valley of Bowser under Kamek’s watchful eye, this metal badge whispers of the empire’s legacy to any who wear it.",
    "price": 5000,
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
    "price": 8000,
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
    "price": 3800,
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
    "price": 4200,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 10000,
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
    "price": 5000,
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
    "price": 1000,
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
    "price": 1600,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1500,
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
    "price": 150000,
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
    "price": 880000,
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
    "price": 920000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 5000,
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
    "price": 1550,
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
    "price": 45000,
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
    "price": 25000,
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
    "price": 280000,
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
    "price": 4500,
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
    "price": 18000,
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
    "price": 50000,
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
    "price": 350000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 750000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 3000,
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
    "price": 4200,
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
    "price": 15000,
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
    "price": 3500,
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
    "price": 30000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "price": 1000,
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
    "description": "",
    "price": 8500,
    "icon": "🖤",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants +3 to Persuasion checks when dealing with vampiric bureaucracies",
      "Consumes 1 charge to temporarily blind all nonhuman entities within 10 feet",
      "Causes the wielder to become visibly scarred by the hand’s gaze",
      "Requires a 10d6 roll to activate; failure causes 1d4 damage to self",
      "Contains a hidden message from the Onyx Hand: “Do not ask for more than you owe”",
      "Crafted by: Hammer Bros Handling (courier service for the elite)"
    ],
    "vendor": "animatopia",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 7
  },
  "animatopia_predator_horn": {
    "id": "animatopia_predator_horn",
    "name": "Predator Horn of the Delfino Wild",
    "description": "A relic of ancient predator tribes, this horn was used to summon the spirit of the wild beast that once ruled Delfino. Carved with tribal runes, it emits a primal roar that can shake mountains and summon the fury of the beast. Only the most fearless hunters dare to wield it.",
    "category": "equipment",
    "price": 1500,
    "icon": "🐾",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Deals 1d8 damage on a successful roar attack",
      "20% chance to trigger a temporary frenzy effect for 1 round",
      "When used within 100 yards of a predator, the horn emits a call that attracts nearby prey",
      "If used while under duress, the horn amplifies the user’s aggression by 100%",
      "Requires a hunter’s license to use (provided by the Koopa Troop)",
      "If the horn is broken, the user gains a 10% chance to be caught in a time loop for 1 round"
    ],
    "vendor": "animatopia",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 4
  },
  "animatopia_prey_camouflage_service": {
    "id": "animatopia_prey_camouflage_service",
    "name": "Animatopia Prey Camouflage Service",
    "description": "Blend into the wild like prey.",
    "price": 12500,
    "icon": "🐇",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth in natural terrain for 8 hours",
      "Predators ignore you (50% chance)",
      "You might attract herbivores for 'friendship'",
      "Made by: Prey Artists"
    ],
    "vendor": "animatopia_wilds",
    "shippedBy": "Leafy Wrap",
    "levelRequirement": 5
  },
  "animatopia_prey_fur_cloak": {
    "id": "animatopia_prey_fur_cloak",
    "name": "Animatopia Prey Fur Cloak",
    "description": "Cloak mimicking animal hides for blending.",
    "price": 15500,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth as a predator's prey",
      "Cloak warms in cold (comfort +1)",
      "Fur sheds during molting season",
      "Made by: Prey Hunters"
    ],
    "vendor": "animatopia_forest",
    "shippedBy": "Hide Bundle",
    "levelRequirement": 5
  },
  "animatopia_prey_hide_and_seek_coaching": {
    "id": "animatopia_prey_hide_and_seek_coaching",
    "name": "Animatopia Prey Hide-and-Seek Coaching",
    "description": "Become a hiding expert.",
    "category": "services",
    "price": 15500,
    "icon": "🙈",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth checks in man-made structures for 7 days",
      "You hide compulsively when startled (disadvantage on Initiative)",
      "You get a 'Master Hider' sticker that glows in the dark (defeating the purpose)",
      "Made by: Animatopia Prey School"
    ],
    "vendor": "animatopia_prey",
    "shippedBy": "Hidden Message",
    "levelRequirement": 6
  },
  "animatopia_prey_predator_evasion_training": {
    "id": "animatopia_prey_predator_evasion_training",
    "name": "Animatopia Prey Predator Evasion Training",
    "description": "Learn to hide from animatronic horrors.",
    "category": "services",
    "price": 16500,
    "icon": "🏃",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth checks vs. constructs and animatronics for 7 days",
      "You are terrified of music boxes and children's laughter",
      "Your dreams are haunted by jump scares",
      "Made by: Animatopia Prey Survivors"
    ],
    "vendor": "animatopia_prey",
    "shippedBy": "Jumpscare Delivery",
    "levelRequirement": 6
  },
  "animatopia_prey_whistle": {
    "id": "animatopia_prey_whistle",
    "name": "Animatopia Prey Whistle",
    "description": "A whistle that mimics the distress call of common forest prey, attracting large predators.",
    "price": 8000,
    "icon": "🐾",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Attracts 1d4 hungry apex predators (CR 3-5) to your location in 1d4 rounds",
      "Useful for distraction or controlled combat encounters",
      "Made by: Animatopia Prey (Farming)"
    ],
    "vendor": "animatopia_hunter",
    "shippedBy": "Bone Whistle",
    "levelRequirement": 3
  },
  "animatopia_rakasha_shroud": {
    "id": "animatopia_rakasha_shroud",
    "name": "Rakasha Shroud",
    "description": "A dark, shifting cloak of the spirit clans, hides the wearer from prying eyes",
    "category": "equipment",
    "price": 8000,
    "icon": "👻",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants stealth for 2 rounds",
      "Grants 1d6 damage bonus on ambush attacks",
      "Causes minor disorientation to enemies within 10m",
      "Cannot be worn by non-anthropomorphic beings",
      "Unlocks hidden paths in the dock ward",
      "Worn by: Rakasha Spirit Walkers",
      "Only available through rogueport black markets"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8
  },
  "animatopia_species_integration_serum": {
    "id": "animatopia_species_integration_serum",
    "name": "Animatopia Species Integration Serum",
    "description": "A serum that allows the imbiber to temporarily take on traits of a specific animal species.",
    "price": 95000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Gain 2 powerful, specific traits from a chosen species (e.g., Spider climb, Shark senses) for 8 hours",
      "Mutation is temporary but can leave residual side effects",
      "Made by: Animatopia"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Bio-Tank",
    "levelRequirement": 10
  },
  "animatopia_spirit_walker_bow": {
    "id": "animatopia_spirit_walker_bow",
    "name": "Spirit Walker Bow",
    "description": "A bow crafted from the bones of ancient spirit beings",
    "category": "equipment",
    "price": 4000,
    "icon": "🏹",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +1 to all attacks",
      "Grants +2 to defense rolls",
      "Grants +1 to all spellcasting rolls",
      "Causes 1d2 damage to user if used in daylight",
      "Can only be used by spirit walkers",
      "Crafted by: Rakasha Spirit Walkers",
      "Wears a faint aura of spirit energy when activated"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 7
  },
  "animatopia_stable_mutagen": {
    "id": "animatopia_stable_mutagen",
    "name": "Animatopia Stable Mutagen (Controlled)",
    "description": "A liquid that induces temporary, beneficial, and stable mutations (e.g., wings, claws).",
    "price": 110000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "User gains 1 specific physical enhancement (e.g., wings for flight 1 hr, claws 2d8 damage)",
      "Enhancement is stable, but fades slowly over 24 hours",
      "Made by: Animatopia"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Refrigerated Canister",
    "levelRequirement": 13
  },
  "animatopia_sunset_scarecrow": {
    "id": "animatopia_sunset_scarecrow",
    "name": "Sunset Scarecrow",
    "description": "A hollowed-out scarecrow painted with twilight hues and filled with static magic",
    "price": 50000,
    "icon": "⚡",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Projects a false shadow that mimics a predator for 3 rounds",
      "20% chance to cause nearby enemies to panic and flee",
      "Consuming the scarecrow triggers a 50% chance of becoming cursed and gaining a permanent weakness to sunlight",
      "Cannot be used in daylight without penalty",
      "May cause a temporary hallucination of a missing tribe member",
      "Crafted by: Oracle’s Workshop (Cursed Edition)",
      "Warning: This item was sold by a rogue vendor in the Festival of Falling Stars. Do not trust the price."
    ],
    "vendor": "animatopia",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 10
  },
  "animatopia_symbiotic_armor": {
    "id": "animatopia_symbiotic_armor",
    "name": "Animatopia Symbiotic Armor",
    "description": "A living, fast-growing carapace that adapts its density to incoming threats.",
    "price": 600000,
    "icon": "🦑",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Base AC 16. Gains +1 AC vs. the last damage type dealt to it, up to +4 total (lasts 1 hour)",
      "Requires organic nutrients (food) daily",
      "Made by: Animatopia"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Vat of Fluid",
    "levelRequirement": 18
  },
  "animatopia_taming_lure": {
    "id": "animatopia_taming_lure",
    "name": "Animatopia Taming Lure (Specific)",
    "description": "A device that broadcasts pheromones making apex predators briefly receptive to bonding.",
    "price": 85000,
    "icon": "💖",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Guarantees 1 successful attempt to tame a non-sentient beast (CR 10 or lower)",
      "Taming process takes 6 hours of direct contact",
      "Made by: Animatopia"
    ],
    "vendor": "animatopia_scientist",
    "shippedBy": "Biotech Case",
    "levelRequirement": 12
  },
  "animatopia_trap_net": {
    "id": "animatopia_trap_net",
    "name": "Animatopia Hunting Net",
    "description": "A super-strong net woven from synthetic animal sinew.",
    "price": 7500,
    "icon": "🕸️",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Used as an action: attempt to restrain a target up to Huge size (DC 14 Athletics/Acrobatics to escape)",
      "Tears on 5ft of piercing damage",
      "Made by: Animatopia Prey"
    ],
    "vendor": "animatopia_hunter",
    "shippedBy": "Woven Bundle",
    "levelRequirement": 2
  },
  "animatopia_trophy_mount": {
    "id": "animatopia_trophy_mount",
    "name": "Animatopia Apex Trophy Mount",
    "description": "The preserved head of an apex creature, granting prestige and minor warding.",
    "price": 50000,
    "icon": "🏆",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Grants +1 to all gathering/tracking/hunting checks",
      "Instills fear in creatures of the same species as the trophy",
      "Made by: Animatopia"
    ],
    "vendor": "animatopia_hunter",
    "shippedBy": "Taxidermy Crate",
    "levelRequirement": 8
  },
  "animatopia_vampire_covenant_soul_key": {
    "id": "animatopia_vampire_covenant_soul_key",
    "name": "Soul Key of the Covenant",
    "description": "A key that unlocks ancient vampire vaults and binds soul energy",
    "price": 15000,
    "icon": "🧟",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Grants +1 to all spellcasting rolls for vampire-affiliated users",
      "Grants 1d4 damage bonus to all attacks",
      "Triggers a 10% chance to drain life from enemies during combat",
      "Can only be used by those with vampire heritage or attunement",
      "Crafted by: Vampire Covenant",
      "Unlocks hidden vampire sanctuaries across Animatopia"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 10
  },
  "antasma_cape": {
    "id": "antasma_cape",
    "name": "Nightmare Cape",
    "description": "A cape made of bats and bad dreams. Allows entry into the Dream World.",
    "category": "equipment",
    "price": 550000,
    "icon": "🦇",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Fly Speed 40ft",
      "Action: Put target to sleep (WIS DC 17)",
      "Bonus Action: Enter the dreams of a sleeping target (Inception rules apply)",
      "Sunlight Sensitivity"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Nightmare",
    "levelRequirement": 12
  },
  "anti_magic_field_generator": {
    "id": "anti_magic_field_generator",
    "name": "Anti-Magic Field Generator (Mobile)",
    "description": "A portable device that creates a 1-mile radius anti-magic field.",
    "category": "equipment",
    "price": 55000000,
    "icon": "📡",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Creates 1-mile radius anti-magic field (no magic works, including yours)",
      "Can selectively allow your magic to work (but not enemies')",
      "Made by: The Nullifier"
    ],
    "vendor": "magic_nullification",
    "shippedBy": "Magic-Free Delivery",
    "levelRequirement": 65
  },
  "apis_kingdom_bee_diplomacy": {
    "id": "apis_kingdom_bee_diplomacy",
    "name": "Apis Kingdom Bee Diplomacy Service",
    "description": "Negotiate with bees on your behalf.",
    "category": "services",
    "price": 11500,
    "icon": "🐝",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Bees are neutral to you for 30 days; honey is 50% cheaper",
      "You understand bee dancing (advantage on Nature checks about plants)",
      "You must speak in buzzing sounds for the first hour each day",
      "Made by: Apis Kingdom Embassy"
    ],
    "vendor": "apis_kingdom",
    "shippedBy": "Bee Swarm",
    "levelRequirement": 5
  },
  "apis_kingdom_beekeeper_suit": {
    "id": "apis_kingdom_beekeeper_suit",
    "name": "Apis Kingdom Beekeeper Suit",
    "description": "Protective suit for honey harvesting.",
    "price": 16000,
    "icon": "👔",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Immunity to bee stings or swarms",
      "+1 AC against small flying creatures",
      "Suit buzzes faintly (alerts insects)",
      "Made by: Hive Wardens"
    ],
    "vendor": "apis_kingdom_apiary",
    "shippedBy": "Honeycomb Veil",
    "levelRequirement": 5
  },
  "apis_kingdom_honey_boost_service": {
    "id": "apis_kingdom_honey_boost_service",
    "name": "Apis Kingdom Honey Boost Service",
    "description": "Bee pollen for natural energy.",
    "price": 12000,
    "icon": "🐝",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Gain 1d6 temporary HP and +5 speed for 1 hour",
      "Advantage on saves vs. sleep",
      "Attracts bees: 10% chance of minor sting (1 damage)",
      "Made by: Bee Keepers"
    ],
    "vendor": "apis_kingdom_hive",
    "shippedBy": "Honey Jar",
    "levelRequirement": 5
  },
  "apis_kingdom_honey_extractor": {
    "id": "apis_kingdom_honey_extractor",
    "name": "Apis Kingdom Honey Extractor",
    "description": "Spinner for harvesting honeycomb into cakes.",
    "category": "equipment",
    "price": 7500,
    "icon": "🍯",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Extracts pure honey; advantage on sweet baking",
      "Bee-friendly – no stings during use",
      "Sticky residue (cleans with water)",
      "Made by: Kingdom Beekeepers"
    ],
    "vendor": "apis_kingdom_hive",
    "shippedBy": "Honey Hex Haul",
    "levelRequirement": 5
  },
  "apis_kingdom_honeycomb_cake_recipe": {
    "id": "apis_kingdom_honeycomb_cake_recipe",
    "name": "Recipe: Apis Kingdom Honeycomb Cake",
    "description": "Honey-drenched cake from royal hives for sweet energy.",
    "price": 7500,
    "icon": "🍰",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Teaches recipe: Layer honeycomb (50 min); eat slice to gain +1 to Charisma saves for 3 hours and attract helpful bees (scouts)",
      "Requires: Honey; sticky but buzzing with life",
      "Bees might sting thieves",
      "Made by: Kingdom Beekeepers"
    ],
    "vendor": "apis_kingdom_hive",
    "shippedBy": "Honey Hex",
    "levelRequirement": 5
  },
  "apis_kingdom_royal_jelly": {
    "id": "apis_kingdom_royal_jelly",
    "name": "Apis Kingdom Royal Jelly",
    "description": "A spoonful of this glowing jelly grants the vigor of a queen bee.",
    "category": "consumables",
    "price": 10000,
    "icon": "🍯",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Single Use: As an action, consume. You gain 1d8 temporary HP and +1 to all saves for 1 hour"
    ],
    "vendor": "apis_kingdom",
    "shippedBy": "Drone Escort",
    "levelRequirement": 4
  },
  "apis_regal_pollen": {
    "id": "apis_regal_pollen",
    "name": "Apis Kingdom Regal Pollen",
    "description": "Golden, energizing pollen collected from the Royal Hive.",
    "price": 18000,
    "icon": "🌼",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Drink: Gain one additional Action on your next turn",
      "Pollen is highly allergenic to non-Apis races",
      "Made by: Apis Kingdom"
    ],
    "vendor": "apis_hive_exchange",
    "shippedBy": "Golden Jar",
    "levelRequirement": 5
  },
  "apple_red": {
    "id": "apple_red",
    "name": "Red Apple",
    "description": "A simple, crisp apple. Keeps the doctor away (if thrown hard enough).",
    "category": "consumables",
    "price": 5000,
    "icon": "🍎",
    "stock": 25,
    "rarity": "common",
    "effects": [
      "Restores 5 HP"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Fruit Crate",
    "levelRequirement": 1
  },
  "arbiters_judgment_gavel": {
    "id": "arbiters_judgment_gavel",
    "name": "Arbiter's Judgment Gavel",
    "description": "A gavel that enforces the laws of Mechanus.",
    "price": 675000,
    "icon": "🔨",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Once per week, declare a 'guilty' verdict on target (DC 25 Cha save)",
      "Failed save: target is imprisoned in Minauros for 7 days",
      "Made by: Council of Order"
    ],
    "vendor": "mechanus_legate",
    "shippedBy": "Inevitable Messenger",
    "levelRequirement": 17,
    "factionBonus": {
      "law": 100
    }
  },
  "arcane_battery_pack": {
    "id": "arcane_battery_pack",
    "name": "Arcane Battery Pack (Power)",
    "description": "Stores spell slots for emergency casting.",
    "price": 580000,
    "icon": "🔋",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Holds 10 spell levels",
      "Recharges in 24 hours",
      "Made by: Mana Engineers"
    ],
    "vendor": "spell_tech",
    "shippedBy": "Energy Cell",
    "levelRequirement": 15
  },
  "arcane_spellstorm_generator": {
    "id": "arcane_spellstorm_generator",
    "name": "Arcane Spellstorm Generator",
    "description": "A device that weaponizes raw magic into a controllable storm.",
    "price": 1050000,
    "icon": "🌪️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Creates 100ft radius storm that casts random spells for 1 minute",
      "User is immune to the storm's effects",
      "Made by: Mystra's Unseen Servants"
    ],
    "vendor": "wild_magic",
    "shippedBy": "Lightning Strike",
    "levelRequirement": 19
  },
  "arcane_tower_core": {
    "id": "arcane_tower_core",
    "name": "Arcane Tower Core (Mobile)",
    "description": "A floating crystalline core that generates a wizard's tower.",
    "price": 895000,
    "icon": "🏰",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Generates 5-story arcane tower in 24 hours",
      "Tower can be dismissed/re-summoned weekly",
      "Made by: Arcane University"
    ],
    "vendor": "wizard_consortium",
    "shippedBy": "Teleportation Circle",
    "levelRequirement": 18
  },
  "arcane_weather_manipulator": {
    "id": "arcane_weather_manipulator",
    "name": "Arcane Weather Manipulator (Device)",
    "description": "A staff that summons localized storms or calms tempests on command.",
    "price": 410000,
    "icon": "🌩️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Controls weather in 1-mile radius for 1 hour",
      "3 charges per day",
      "Made by: Stormcallers Guild"
    ],
    "vendor": "elemental_shop",
    "shippedBy": "Wind Rider",
    "levelRequirement": 15
  },
  "armor_of_the_forgotten": {
    "id": "armor_of_the_forgotten",
    "name": "Armor of the Forgotten",
    "description": "A suit of armor with no maker’s mark. It remembers every warrior who wore it.",
    "category": "equipment",
    "price": 350000,
    "icon": "🦾",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "AC 20, resistance to all damage types",
      "Gains +1 to attack/damage for each fallen warrior whose memory it holds (max +5)",
      "If you die, the armor remembers you — and whispers your name to others forever"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Bone Chest",
    "levelRequirement": 12
  },
  "army_recruitment_contract": {
    "id": "army_recruitment_contract",
    "name": "Army Recruitment (1,000 Soldiers)",
    "description": "Hire an entire mercenary army: 1,000 trained soldiers loyal to your cause for 1 year.",
    "category": "faction",
    "price": 500000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Command 1,000 soldiers (CR 1/8 each, effective in mass combat)",
      "Army remains loyal for 1 year or until major battle",
      "Must provide supplies (100,000 gp annually)",
      "Army morale decays if not paid monthly"
    ],
    "vendor": "steel_syndicate",
    "shippedBy": "Mercenary Contract",
    "levelRequirement": 14,
    "factionBonus": {
      "military": 100,
      "control": 50
    }
  },
  "asclepia_healing_ointment": {
    "id": "asclepia_healing_ointment",
    "name": "Asclepian Healing Ointment",
    "description": "A potent medicinal salve that can mend grievous wounds with miraculous speed.",
    "category": "consumables",
    "price": 4000,
    "icon": "🧴",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Apply to a creature: Heals 4d8+4 HP",
      "Cures blindness, deafness, and any diseases affecting the target",
      "Jar contains 5 doses"
    ],
    "vendor": "Asclepia",
    "shippedBy": "Medical Pouch",
    "levelRequirement": 3
  },
  "asclepia_health_inspector_goggles": {
    "id": "asclepia_health_inspector_goggles",
    "name": "Asclepia Health Inspector Goggles",
    "description": "See germs on your food.",
    "category": "equipment",
    "price": 13500,
    "icon": "🥽",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "See contaminants: advantage on cooking checks to avoid food poisoning",
      "You see germs everywhere: disadvantage on appetite (disadvantage on checks if you eat)",
      "Goggles steam up when you lie about ingredients (disadvantage on Deception)",
      "Made by: Asclepia Inspection Tools"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 5
  },
  "asclepia_nurse_scrubs": {
    "id": "asclepia_nurse_scrubs",
    "name": "Asclepia Nurse Scrubs",
    "description": "Medical scrubs that are too clean.",
    "category": "equipment",
    "price": 14500,
    "icon": "🥼",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Medicine checks (you look official)",
      "Patients trust you: advantage on Charisma checks with the injured",
      "You feel compelled to help anyone who looks sick (disadvantage on checks if you ignore them)",
      "Made by: Asclepia Medical Supply"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 5
  },
  "asclepia_panacea_poultice": {
    "id": "asclepia_panacea_poultice",
    "name": "Asclepia Panacea Poultice",
    "description": "A magical salve that mends flesh and bone with impossible speed.",
    "category": "consumables",
    "price": 6000,
    "icon": "🍃",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Single Use: As an action, apply to a creature. Heals 3d8+3 HP and ends the Poisoned condition"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 4
  },
  "asclepia_potion_subscription_box": {
    "id": "asclepia_potion_subscription_box",
    "name": "Asclepia Potion Subscription Box",
    "description": "Monthly mystery potions, may or may not work.",
    "category": "premium",
    "price": 23500,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Each week: Receive a random Uncommon potion (50% chance it's mislabeled)",
      "Last month's 'Healing Potion' was actually mayonnaise – worked somehow",
      "Subscription cancels if you die (fine print: you revive with a 50gp cancellation fee)",
      "Made by: Asclepia Pharmaceutical"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 7
  },
  "asclepia_recipe_healthy_smoothie": {
    "id": "asclepia_recipe_healthy_smoothie",
    "name": "Recipe: Asclepia Healthy Smoothie",
    "description": "A smoothie that is too healthy.",
    "price": 11500,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Removes one level of exhaustion and grants +1 to Constitution saves for 4 hours",
      "Tastes like grass and regret (disadvantage on Charisma while drinking)",
      "You feel smug about your health choices (advantage on Charisma with other health nuts)",
      "Made by: Asclepia Juice Bar"
    ],
    "vendor": "asclepia",
    "shippedBy": "Medical Courier",
    "levelRequirement": 5
  },
  "asclepian_healing_salve": {
    "id": "asclepian_healing_salve",
    "name": "Asclepian Healing Salve",
    "description": "A medicinal ointment that accelerates natural healing.",
    "category": "consumables",
    "price": 9500,
    "icon": "🧴",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Apply to a wound: heals 1d8+2 HP and stops bleeding",
      "Can be used to treat minor diseases",
      "Made by: Asclepia"
    ],
    "vendor": "asclepia_vault",
    "shippedBy": "Ceramic Jar",
    "levelRequirement": 4
  },
  "asclepian_healing_vial": {
    "id": "asclepian_healing_vial",
    "name": "Asclepian Healing Vial",
    "description": "A potent, shimmering mixture that rapidly repairs fractured bone and torn muscle.",
    "price": 25000,
    "icon": "⚕️",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Heals 8d4+8 HP and instantly ends one disease or poison effect",
      "Must be administered within 1 minute of injury",
      "Made by: Asclepia"
    ],
    "vendor": "asclepia_vault",
    "shippedBy": "Sealed Glass",
    "levelRequirement": 7
  },
  "asgard_lightning_in_a_bottle": {
    "id": "asgard_lightning_in_a_bottle",
    "name": "Asgard Lightning in a Bottle",
    "description": "Captured storm essence from Bifrost residue.",
    "category": "equipment",
    "price": 19500,
    "icon": "⚡",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Once per short rest: Add 1d6 thunder damage to a weapon attack",
      "Breaks on natural 1: Releases 2d6 thunder damage in 10ft radius (DEX save DC 13)",
      "Vibrates ominously during storms",
      "Made by: Thor's Interns"
    ],
    "vendor": "asgard_surplus",
    "shippedBy": "Bifrost Flash Delivery",
    "levelRequirement": 7
  },
  "asgard_mead_honey_cakes_recipe": {
    "id": "asgard_mead_honey_cakes_recipe",
    "name": "Recipe: Asgard Mead Honey Cakes",
    "description": "Golden cakes soaked in divine mead for warrior vigor.",
    "price": 8500,
    "icon": "🍯",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Teaches recipe: Bake with honey and mead (1 hour); eat to gain +1 Strength for 1 hour and 1d6 temporary HP",
      "Requires: Honey and weak mead; Valhalla-approved",
      "Might make you sing battle hymns (noisy)",
      "Made by: Asgard Feast Hall"
    ],
    "vendor": "asgard_kitchen",
    "shippedBy": "Honeycomb Herald",
    "levelRequirement": 6
  },
  "asgard_thunder_amulet": {
    "id": "asgard_thunder_amulet",
    "name": "Asgard Thunder Amulet",
    "description": "A pendant etched with runes, channeling minor storms from the halls of the gods.",
    "category": "equipment",
    "price": 19800,
    "icon": "⚡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Once per short rest: Call a small thunderclap (10 ft radius, 1d6 thunder damage, CON save DC 13 for half)",
      "Resistance to thunder damage while worn",
      "Glows faintly during storms (+1 to Perception in rain)",
      "Attracts lightning – 5% chance of minor shock during thunderstorms"
    ],
    "vendor": "asgard",
    "shippedBy": "Valhalla Express (By Raven)",
    "levelRequirement": 7
  },
  "asgard_valkyrie_spit_roaster": {
    "id": "asgard_valkyrie_spit_roaster",
    "name": "Asgard Valkyrie Spit Roaster",
    "description": "Portable roaster for honey cakes over godfire.",
    "category": "equipment",
    "price": 9500,
    "icon": "🍖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Roasts evenly for +1 to cooking checks with meats/honey; infuses vigor (extra 1d4 temp HP)",
      "Folds for travel; withstands high heat",
      "Attracts ravens (Odin's spies?)",
      "Made by: Asgard Forges"
    ],
    "vendor": "asgard_kitchen",
    "shippedBy": "Thunderous Tine Transport",
    "levelRequirement": 6
  },
  "asgard_valkyrie_training_session": {
    "id": "asgard_valkyrie_training_session",
    "name": "Asgard Valkyrie Training Session",
    "description": "A half-day lesson in aerial combat from a junior Valkyrie.",
    "price": 21000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Gain proficiency in spears for 1 week; +1 to attack rolls with thrown weapons",
      "Includes a feather token for one 30ft jump glide",
      "Valkyrie might judge your 'worthiness' and give unsolicited advice",
      "Made by: Asgard Warrior Academy"
    ],
    "vendor": "asgard_training_halls",
    "shippedBy": "Pegasus Shuttle",
    "levelRequirement": 6
  },
  "asgard_viking_tunic_premium": {
    "id": "asgard_viking_tunic_premium",
    "name": "Asgard Viking Tunic (Premium)",
    "description": "Woolen tunic embroidered with runes for hardy warriors.",
    "price": 18500,
    "icon": "👕",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 to Constitution saves against cold or fatigue",
      "Once per day: Reroll a failed Strength check",
      "Itches during mead feasts (minor distraction)",
      "Made by: Asgard Seamstresses"
    ],
    "vendor": "asgard_hall",
    "shippedBy": "Odins Thread",
    "levelRequirement": 6
  },
  "asgardian_mead_ration": {
    "id": "asgardian_mead_ration",
    "name": "Asgardian Mead Ration",
    "description": "A sturdy canteen of mead that grants temporary vigor and a penchant for boasts.",
    "category": "consumables",
    "price": 4000,
    "icon": "🍺",
    "stock": 15,
    "rarity": "rare",
    "effects": [
      "Heals 2d4 HP and grants +1 to Charisma (Intimidation) for 4 hours",
      "If you tell a boastful lie during this time, gain +1d4 temporary HP",
      "Made by: Asgard"
    ],
    "vendor": "asgard_embassy",
    "shippedBy": "Rune-etched Cask",
    "levelRequirement": 3
  },
  "asgardian_rune_axe": {
    "id": "asgardian_rune_axe",
    "name": "Asgardian Rune Axe",
    "description": "A heavy axe with a glowing rune on its head. It strikes with the force of a thunderclap.",
    "category": "equipment",
    "price": 35000,
    "icon": "🪓",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Once per short rest: On hit, deal an extra 2d8 Thunder damage",
      "Enemies hit by the thunderclap are Deafened until end of their next turn",
      "Axe is considered magical for overcoming resistances"
    ],
    "vendor": "asgard",
    "shippedBy": "Bifrost Courier",
    "levelRequirement": 4
  },
  "asgardian_rune_stone": {
    "id": "asgardian_rune_stone",
    "name": "Asgardian Rune Stone",
    "description": "A smooth river stone etched with a single, powerful rune of protection. Feels warm to the touch.",
    "category": "equipment",
    "price": 12000,
    "icon": "🪨",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Once per day: cast 'Shield' (reaction)",
      "While held, you have advantage on saves against being frightened",
      "Rune glows blue when giants are near"
    ],
    "vendor": "Asgard",
    "shippedBy": "Raven Delivery",
    "levelRequirement": 4
  }
};
