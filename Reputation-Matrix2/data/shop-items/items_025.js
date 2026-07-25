// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_025 = {
  "isle_delfino_tropical_heart": {
    "id": "isle_delfino_tropical_heart",
    "name": "Tropical Heart",
    "description": "The Tropical Heart pulses with the vibrant essence of Delfino Isle, its surface shimmering like a coral reef in sunlight. This relic grants swift movement and regenerative fortitude, as if you've drunk from the waters of the island's sacred spring. When consumed, it replenishes lost health and imbues you with an extra burst of speed, leaving you light on your feet for moments that feel almost too fast to follow.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regenerates Health",
      "Boosts Movement Speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "When consumed, the Tropical Heart restores 200 hit points. This effect has a cooldown of 1 minute."
      },
      {
        "title": "Aquatic Agility",
        "rules": "For 15 seconds after consumption, you gain a +30% increase to your movement speed and have advantage on Dexterity (Acrobatics) checks made to avoid being knocked prone. This effect ends if you fall unconscious."
      }
    ],
    "levelRequirementReason": "Beginners can harness the natural power of the island, making it accessible early in their journey.",
    "vendorReason": "As a local treasure, the Tropical Heart is an offering from Delfino Isle itself, trusted by the vendors of the island to provide its residents with strength and speed.",
    "shippingDetail": "Delivered within a week, but only available during daylight hours when the Koopas are most active.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "15 seconds or until you fall unconscious",
      "endsWhen": "You fall unconscious, use it again before the cooldown ends, or expend all charges (if any)",
      "charges": "Unlimited"
    },
    "priceReason": "The Tropical Heart is priced at 1000 XP, reflecting its rarity and the mana-like power it provides to adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:48:08.562141+00:00",
    "aiReviewedAt": "2026-07-22T07:48:08.562141+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_mana_bottle": {
    "id": "isle_delfino_tropical_mana_bottle",
    "name": "Tropical Mana Bottle",
    "description": "The Tropical Mana Bottle is a glass container filled with vibrant, pulsating mana that glows faintly in the jungle's shadows. Harvested from the canopy of ancient Delfino's lush rainforest, it provides a quick, non-lethal boost to your magical prowess. Each sip restores 50 mana points and enhances your spell accuracy by 10%, allowing for more precise incantations. However, overuse can cause mild nausea, so take care not to imbibe too often in combat zones.",
    "price": 1000,
    "icon": "🍃",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Restores Mana",
      "Enhances Spell Accuracy"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Mana",
        "rules": "When consumed, the Tropical Mana Bottle restores 50 mana points. This effect is instantaneous and can be used once per short or long rest."
      },
      {
        "title": "Enhance Spell Accuracy",
        "rules": "For one hour after consuming the bottle, your spell accuracy improves by +10%. This boost applies to all magical attacks and abilities during this period. The effect ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "The mana in the bottle is potent but not beyond the reach of novice spellcasters.",
    "vendorReason": "Isle Delfino's local apothecaries are well-versed in extracting and bottling the unique magic of their rainforest.",
    "shippingDetail": "Ships with Pipe Express, known for its reliable delivery service through the island's complex network of canals and paths.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "One hour after consumption",
      "endsWhen": "Ends when you finish a short or long rest",
      "charges": "Unlimited, but one per short/long rest"
    },
    "priceReason": "The bottle's rarity and the mana it contains justify its higher price, offering a significant yet balanced benefit to spellcasters.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-22T07:47:10.440487+00:00",
    "aiReviewedAt": "2026-07-22T07:47:10.440487+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_scent_tincture": {
    "id": "isle_delfino_tropical_scent_tincture",
    "name": "Tropical Scent Tincture",
    "description": "The Tropical Scent Tincture, a fragrant elixir crafted from sun-kissed blooms and the sea breeze of Isle Delfino, infuses you with the essence of tropical splendor. As you imbibe this nectar, your movements become as light as the wind that carried it to shore, enhancing your speed in stormy environs or dense jungle paths. This elixir grants temporary resistance to environmental hazards, allowing you to navigate treacherous terrains with greater ease and resilience.",
    "price": 1000,
    "icon": "🌴",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Enhances movement speed",
      "Provides resistance to environmental damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Steps",
        "rules": "Upon consuming the Tincture, you gain a +20% increase in movement speed for 10 seconds. This effect can be used once every long rest."
      },
      {
        "title": "Environmental Fortitude",
        "rules": "For the duration of your next short or long rest, you are granted resistance to environmental damage from storms and dense jungles. You must make a Wisdom saving throw (DC 15) at the start of each short rest to maintain this benefit."
      }
    ],
    "levelRequirementReason": "Beginners can benefit from the Tincture's effects without overburdening them with too many abilities.",
    "vendorReason": "Isle Delfino is renowned for its expertise in crafting potions and elixirs that harness the natural splendor of their tropical islands.",
    "shippingDetail": "The elixir arrives fresh, as it requires refrigeration to maintain its potency. Shipping times may vary due to perishable goods handling.",
    "usage": {
      "activation": "Consume the Tincture as a bonus action.",
      "duration": "10 seconds for Swift Steps; lasts until next short or long rest for Environmental Fortitude.",
      "endsWhen": "The effects expire naturally at the end of their duration, and the tincture is consumed upon use.",
      "charges": "Unlimited charges."
    },
    "priceReason": "The Tincture's price reflects its exotic ingredients and the complexity of its crafting process, making it an uncommon but valuable item for adventurers navigating treacherous terrain.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T07:47:29.234596+00:00",
    "aiReviewedAt": "2026-07-22T07:47:29.234596+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_shade_potion": {
    "id": "isle_delfino_tropical_shade_potion",
    "name": "Tropical Shade Potion",
    "description": "The Tropical Shade Potion is a shimmering, emerald-green elixir bottled from the nectar of rare rainforest blooms. Crafted in Isle Delfino's tropical laboratories, this potion cools your body and sharpens your reflexes when consumed beneath the sun's scorching rays. It grants temporary relief, reducing heat damage by half for a full minute, while also boosting your agility with a 20% increase to movement speed for thirty seconds.",
    "price": 1000,
    "icon": "🍹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Heat Resistance",
      "Agility Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heat Resistance",
        "rules": "When consumed outdoors in direct sunlight, the potion reduces heat damage by 50% for one minute. This effect is instantaneous upon consumption and lasts until the duration expires or you leave an area of extreme heat."
      },
      {
        "title": "Agility Boost",
        "rules": "The potion grants a +10 bonus to Dexterity (Movement) checks, allowing for quicker footwork in combat or rapid movement through hazardous terrain. This effect is active for thirty seconds after consumption and ends if you take any damage during that period."
      }
    ],
    "levelRequirementReason": "This potion is suitable for adventurers of all levels who might need a quick boost to their agility in hot, challenging environments.",
    "vendorReason": "Isle Delfino's alchemists are renowned for crafting potions that enhance the capabilities of those who explore its tropical shores and jungles.",
    "shippingDetail": "Delivered swiftly by Lakitu, these drones ensure your potion arrives fresh and potent in time for your next expedition.",
    "usage": {
      "activation": "Consumed as an action outdoors under direct sunlight.",
      "duration": "One minute of heat resistance; thirty seconds of agility boost.",
      "endsWhen": "The effects expire when the duration ends or you take damage during the effect's active period.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "Balanced to reflect its unique tropical origin and potent effects that provide both heat resistance and agility boost in challenging environments.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:47:29.025503+00:00",
    "aiReviewedAt": "2026-07-22T07:47:29.025503+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_shield": {
    "id": "isle_delfino_tropical_shield",
    "name": "Tropical Shield",
    "description": "The Tropical Shield is a shimmering, leaf-patterned shield that emanates a soothing tropical breeze when engaged. Crafted from the heartwood of ancient palm trees found only in Delfino Isle's lush jungles, its surface gleams with an iridescent sheen. When activated, it deflects 15% of incoming physical damage and grants a 5% defense boost to all nearby allies within a 5-meter radius for 30 seconds. After each use, party members receive a 2-second cooldown reduction on their next action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌴",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Deflects Physical Damage",
      "Boosts Nearby Allies' Defense"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Damage Deflection",
        "rules": "Activates as an action. Reduces incoming physical damage by 15% for the wielder over a single attack or spell. Lasts until the start of your next turn."
      },
      {
        "title": "Defense Boost",
        "rules": "Grants all allies within 5 meters a +5 bonus to their AC as a reaction, lasting for 30 seconds after activation. The effect ends when the shield is deactivated or if an ally moves more than 10 feet away."
      }
    ],
    "levelRequirementReason": "Crafted from ancient palm wood and imbued with Delfino magic, this shield requires a minimum character level of 8 to wield effectively.",
    "vendorReason": "As the island's foremost crafters of enchanted armor and shields, Isle Delfino ensures only those capable of handling such powerful items can purchase them.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery to ensure arrival before sundown on the day of order placement.",
    "usage": {
      "activation": "Activates as an action, with a recharge after three uses per long rest.",
      "duration": "Instantaneous; the shield deflects damage once and grants defense boosts until deactivated or if the user moves more than 5 meters away.",
      "endsWhen": "Recharges after three uses per long rest or if the wielder drops it as an object.",
      "charges": "3 charges, recharging after a long rest"
    },
    "priceReason": "Crafted from rare, enchanted palm wood and imbued with Delfino magic, this shield is priced at 1000 XP to reflect its unique properties and limited availability.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T07:48:28.423905+00:00",
    "aiReviewedAt": "2026-07-22T07:48:28.423905+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_shine_bloom": {
    "id": "isle_delfino_tropical_shine_bloom",
    "name": "Tropical Shine Bloom",
    "description": "The Tropical Shine Bloom radiates a shimmering glow that captivates both friend and foe alike. This radiant flower, crafted from the essence of tropical flora and the energy of Delfino Isle’s sun-soaked waters, grants you an agile stride and enhances your charm. When near water, it also bestows a protective aura, reducing incoming damage by 20% for as long as you stay close to the ocean's edge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Speed Boost",
      "Enhanced Charm"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "When worn, this bloom grants a +10 foot movement speed bonus for 15 seconds. It ends if you leave the immediate vicinity of water or if your concentration is broken."
      },
      {
        "title": "Enhanced Charm",
        "rules": "Within 30 feet, nearby allies receive a +2 bonus to their Charisma (Deception) checks and their damage from charm effects is increased by 15%. This effect lasts for 1 hour or until you voluntarily end it."
      }
    ],
    "levelRequirementReason": "This bloom is accessible to adventurers of any level, offering a versatile tool for both combat and social interactions.",
    "vendorReason": "As the island's premier vendor, Isle Delfino offers exotic items that resonate with its natural beauty and magic.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe arrival within a week from order placement.",
    "usage": {
      "activation": "Passive effect; no activation required. Bloom must be in your possession to gain benefits.",
      "duration": "Until the end of your next turn after you leave water or voluntarily end the charm effect for allies.",
      "endsWhen": "Leaving the area near water or ending concentration on the charm effect by a will save DC 12.",
      "charges": "Unlimited, as it is a passive effect."
    },
    "priceReason": "The Tropical Shine Bloom offers significant utility for any adventurer, balancing its cost with its versatile benefits in combat and social scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:47:56.693036+00:00",
    "aiReviewedAt": "2026-07-22T07:47:56.693036+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_shine_bottle": {
    "id": "isle_delfino_tropical_shine_bottle",
    "name": "Tropical Shine Bottle",
    "description": "The Tropical Shine Bottle captures the essence of Isle Delfino's tropical sun, its glass shimmering like a sea wave under moonlight. When uncorked in bright sunlight, it grants a burst of vitality to the drinker and temporarily sharpens their senses. Enemies caught in this radiant glow must squint against the glare, risking dizziness for a moment. The bottle's effect is most potent during high noon, when the sun casts its golden light across the beach patrol.",
    "price": 1000,
    "icon": "🌞",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Vitality Boost",
      "Sun Glare Defense"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vitality Boost",
        "rules": "When consumed in sunlight, the Tropical Shine Bottle restores 30% of the drinker's hit points and grants a +20% chance to hit for 5 seconds. The effect is instantaneous upon activation."
      },
      {
        "title": "Sun Glare Defense",
        "rules": "Enemies within line of sight who are exposed to the bottle's glow must make a DC 14 Constitution saving throw or be blinded by the sun glare, unable to take actions for 1 round. The effect lasts until an attacker moves out of direct sunlight."
      }
    ],
    "levelRequirementReason": "The bottle's potent effects are accessible early on, aiding patrols without requiring a high level.",
    "vendorReason": "Isle Delfino is known for its vibrant beach life and the Tropical Shine Bottle perfectly complements the island's sun-soaked atmosphere.",
    "shippingDetail": "Ships with a swift delivery, ensuring the bottle arrives in pristine condition on sunny days only.",
    "usage": {
      "activation": "Consumed as an action when uncorked and consumed in sunlight.",
      "duration": "Instantaneous for Vitality Boost; Sun Glare lasts until the attacker moves out of direct sunlight.",
      "endsWhen": "The effect ends upon moving out of sunlight or if consumed by another.",
      "charges": "Unlimited, as long as the conditions are met."
    },
    "priceReason": "Balanced at 1000 XP due to its limited duration effects and potent but not overwhelming abilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:48:26.497482+00:00",
    "aiReviewedAt": "2026-07-22T07:48:26.497482+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_shine_spritewings": {
    "id": "isle_delfino_tropical_shine_spritewings",
    "name": "Tropical Shine Sprite Wings",
    "description": "Tropical Shine Sprite Wings are delicate, iridescent wings made from the light of Delfino Isle's sun. Crafted by the island's sprite guardians, these wings grant you unmatched agility and a burst of radiant light that dazzles foes. While airborne, your speed increases by +40% and you have a +30% chance to dodge attacks. These wings are perfect for acrobatic maneuvers in sunlight zones, where their glow becomes more potent.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+40% mobility speed while airborne",
      "30% increased chance to dodge attacks while airborne"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Agile Flight",
        "rules": "Increase your movement speed by +40% when you are airborne. This effect lasts until the start of your next turn."
      },
      {
        "title": "Dazzling Dodge",
        "rules": "Gain a +30% chance to dodge attacks while airborne, which ends on your next turn if you remain in the air."
      }
    ],
    "levelRequirementReason": "These wings are designed for quick learners and adventurers just starting their journey.",
    "vendorReason": "The island's sprite guardians craft these wings to assist those who wish to explore the skies of Delfino Isle.",
    "shippingDetail": "Ships within 2 days, arrives with a flash of light and a tropical breeze.",
    "usage": {
      "activation": "Passive effect while airborne",
      "duration": "Until the start of your next turn in flight",
      "endsWhen": "You land or lose control of flight",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare materials and enchanted by sprite magic, these wings are a valuable yet balanced addition to any adventurer's gear.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:48:10.168128+00:00",
    "aiReviewedAt": "2026-07-22T07:48:10.168128+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_silk_satchel": {
    "id": "isle_delfino_tropical_silk_satchel",
    "name": "Tropical Silk Satchel",
    "description": "The Tropical Silk Satchel is a lightweight bag adorned with dappled vines that shimmer in the light, granting it an ethereal glow. Crafted from the finest silk woven by the artisans of Isle Delfino, this satchel can carry up to three times its normal capacity and grants the bearer a +5% chance to find hidden items when exploring tropical islands. It also offers a +10% chance to recover lost items, ensuring that nothing is left behind in your adventures.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌴",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Storage",
      "Lost Item Recovery"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Storage",
        "rules": "The user can store up to three times the usual amount of weight or volume within this satchel. This effect is passive and does not require any action."
      },
      {
        "title": "Lost Item Recovery",
        "rules": "Once per long rest, the bearer may attempt to recover a lost item within 1 mile of their last known location. The DC for this check is equal to 8 + the level of the user. Success indicates that the item has been recovered."
      }
    ],
    "levelRequirementReason": "This satchel requires no specific level, as it is designed for adventurers of all skill levels who value practicality and reliability.",
    "vendorReason": "Isle Delfino specializes in the creation of durable and stylish gear that complements tropical adventures.",
    "shippingDetail": "The Tropical Silk Satchel is carefully packed to ensure it arrives in pristine condition, with a slight delay due to its delicate nature.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until the satchel is destroyed or lost.",
      "endsWhen": "The satchel can be lost or destroyed, at which point it ceases to function.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and utility without overshadowing other items of similar value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:48:23.191754+00:00",
    "aiReviewedAt": "2026-07-22T07:48:23.191754+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_spirit_torch": {
    "id": "isle_delfino_tropical_spirit_torch",
    "name": "Tropical Spirit Torch",
    "description": "The Tropical Spirit Torch exudes a vibrant, soothing glow that fills the air with an ethereal aura of calm. Held in hand, it subtly calls forth shimmering Shine Sprites to dance around you, enhancing your combat prowess with their aid. This relic is crafted from rare, luminescent seashells found only on the shores of Delfino Isle, and its magical essence has been honed by the island's ancient mages for generations.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Soothes Allies",
      "Summon Sprites"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soothe Allies",
        "rules": "When activated as a bonus action, the torch emits a soothing glow that reduces nearby allies' fear and anxiety by 30% for 10 seconds. The effect ends if an ally moves more than 15 feet away from the torch."
      },
      {
        "title": "Summon Sprites",
        "rules": "Activating this as a bonus action summons three shimmering Shine Sprites to dance around you, providing a +2 bonus to attack rolls and saving throws for 5 seconds. The effect ends if an enemy comes within 10 feet of any sprite."
      }
    ],
    "levelRequirementReason": "The torch's magical energy requires a minimum level to harness its soothing and combat-enhancing effects.",
    "vendorReason": "Isle Delfino is renowned for its mystical artifacts, and the Tropical Spirit Torch is one of their finest creations.",
    "shippingDetail": "Ships within 3 days via the Void Drifter Relay's express courier service.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous summoning, ends with sprite presence or movement away from torch holder",
      "endsWhen": "An ally moves more than 15 feet away; enemy comes within 10 feet of a sprite",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other rare items, this torch offers both utility and combat support at a fair price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:48:54.886022+00:00",
    "aiReviewedAt": "2026-07-22T07:48:54.886022+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_sprout": {
    "id": "isle_delfino_tropical_sprout",
    "name": "Tropical Sprout Charm",
    "description": "The Tropical Sprout Charm is a vibrant leaf amulet that glows with the vivacious energy of Delfino Isle's tropical flora. As you wear it, its radiant pulse enhances your natural abilities and amplifies healing from sunlight, as if the island’s very essence flows through you. This enchanted charm grants a 25% boost to all natural ability checks and increases the effectiveness of healing spells and effects by 30%, making you more resilient in the jungle's lush embrace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Natural Boost",
      "Sunlight Enhancement"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "SeaWisp Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Natural Boost",
        "rules": "Passive effect. Grants a +25 bonus to all natural ability checks. This effect is always active while the charm is worn."
      },
      {
        "title": "Sunlight Enhancement",
        "rules": "Active effect. Increases healing from sunlight by 30%. This effect lasts until the end of your next long rest or when you leave an area with significant sunlight exposure, whichever comes first."
      }
    ],
    "levelRequirementReason": "The charm’s gentle magic is accessible to adventurers of any level, providing a natural ally in the jungle.",
    "vendorReason": "As natives of Delfino Isle, the vendors there are well-acquainted with the island's flora and fauna, making them trusted purveyors of such enchanted items.",
    "shippingDetail": "The SeaWisp delivers quickly but requires a brief enchantment ritual upon arrival to fully unlock the charm’s potential.",
    "usage": {
      "activation": "Passive effect. No activation required; always active while worn.",
      "duration": "Instantaneous, lasting until end of next long rest or leaving significant sunlight exposure.",
      "endsWhen": "Leaving an area with significant sunlight exposure or completing a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm’s moderate price reflects its balance between utility and rarity, providing a valuable asset without overwhelming the player.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:48:40.096164+00:00",
    "aiReviewedAt": "2026-07-22T07:48:40.096164+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_sprout_pearl": {
    "id": "isle_delfino_tropical_sprout_pearl",
    "name": "Tropical Sprout Pearl",
    "description": "The Tropical Sprout Pearl is a shimmering gem born from the roots of a sunlit mangrove in Delfino Isle’s lush jungles. When worn, it grants its bearer a burst of agility and charm, perfect for navigating hidden waterways or charming shy creatures into revealing secrets. Its wearer experiences an instant surge of speed and grace, making every step light as air, while also increasing the likelihood of encountering friendly sprites who may offer helpful advice.",
    "price": 1000,
    "icon": "🌴",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Agility Surge",
      "Charmer's Charm"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Agility Surge",
        "rules": "Upon activation by a bonus action, the wearer gains +20% movement speed for 10 seconds. This effect is instantaneous and cannot be used again until after completing a short or long rest."
      },
      {
        "title": "Charmer's Charm",
        "rules": "The wearer has a +15% chance to bypass an enemy’s Stealth check when attempting to interact with them, up to three times per day. This effect ends if the wearer fails a Wisdom saving throw (DC 13) or after using it three times."
      }
    ],
    "levelRequirementReason": "This item provides useful but not overly powerful benefits that are accessible early in an adventurer’s journey.",
    "vendorReason": "The vendors at Isle Delfino have a deep connection to the natural world, making them the perfect purveyors of such a nature-born artifact.",
    "shippingDetail": "The Pearl is carefully packed and shipped via Pipe Express, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; +20% movement speed for 10 seconds",
      "endsWhen": "After 10 seconds or if the wearer fails a Wisdom saving throw (DC 13)",
      "charges": "Uses up to three per day"
    },
    "priceReason": "The cost reflects its rare origin and the unique benefits it provides, making it a valuable yet balanced choice for any adventurer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:48:42.226716+00:00",
    "aiReviewedAt": "2026-07-22T07:48:42.226716+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_sunburst_gear": {
    "id": "isle_delfino_tropical_sunburst_gear",
    "name": "Tropical Sunburst Gear",
    "description": "The Tropical Sunburst Gear is a shimmering alloy suit that glows with radiant sunbeams, enhancing your speed and light-based attacks. This gear is perfect for navigating Isle Delfino's bright, breezy paths, where its golden hue reflects the island's vibrant sunlight. With each step, you feel lighter, as if the suit itself carries less weight, allowing for an increase in movement speed. Its light attacks strike with a radiant intensity, reflecting off surfaces like polished mirrors, dealing bonus damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% movement speed",
      "Enhanced light-based attacks"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Speed",
        "rules": "While wearing the Tropical Sunburst Gear, you have a +20% increase to your walking and running speeds. This effect is passive until removed."
      },
      {
        "title": "Radiant Light Attacks",
        "rules": "When making light-based attacks while wearing the gear, you deal an additional 1d6 radiant damage on hits. This bonus lasts for the duration of one short rest or until you take any non-magical damage."
      }
    ],
    "levelRequirementReason": "The gear's lightweight design and magical properties require no specific level to wear it, as its benefits are accessible to all adventurers.",
    "vendorReason": "Isle Delfino is known for its vibrant craftsmanship, and the Tropical Sunburst Gear is a perfect example of their expertise in creating functional yet beautiful gear.",
    "shippingDetail": "The gear arrives quickly through Boo Spectral Mail's reliable courier service, ensuring it reaches adventurers just as they need it for their next big adventure.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until removed or until you take non-magical damage",
      "endsWhen": "At the end of a short rest or when damaged by non-magical means",
      "charges": "Unlimited"
    },
    "priceReason": "The Tropical Sunburst Gear is priced moderately, reflecting its balance between utility and rarity in enhancing both speed and attack capabilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:48:44.262471+00:00",
    "aiReviewedAt": "2026-07-22T07:48:44.262471+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide": {
    "id": "isle_delfino_tropical_tide",
    "name": "Tropical Tide",
    "description": "The Tropical Tide is a shimmering water charm that pulses with the rhythm of the ocean. Crafted from seashells and coral, it resonates with the ancient magic of Delfino Isle's tidal pools. This enchanted trinket enhances a swimmer’s speed by 30% for 15 seconds, allowing them to navigate through watery depths with ease. The charm also reduces underwater damage by 40%, protecting you from the harsh forces of the ocean. Should you find yourself in distress, it increases your chance to recover from drowning by 25%. This relic is a true gift from Delfino Isle’s guardian spirits, perfect for those who dare to venture into its treacherous waters.",
    "price": 1000,
    "icon": "🌊",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Swimming",
      "Reduced Underwater Damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "The Coral Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Swimming",
        "rules": "When activated as a bonus action, this charm increases the user's swimming speed by 30% for 15 seconds. It ends if you leave water or take damage."
      },
      {
        "title": "Reduced Underwater Damage",
        "rules": "While wearing this charm in an underwater environment, you reduce damage from being in water by 40%. This effect expires when you exit the water or take damage."
      }
    ],
    "levelRequirementReason": "This charm is designed for adventurers of all levels who may find themselves in aquatic environments.",
    "vendorReason": "Isle Delfino has long been a guardian and steward of the ocean, offering its residents and visitors enchanted items like this charm.",
    "shippingDetail": "Delivered by the Coral Courier, known for its impeccable service and punctuality.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "15 seconds",
      "endsWhen": "You leave water or take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and the balance it brings to swimming and underwater combat make its price fair for adventurers of all levels.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T07:48:56.410354+00:00",
    "aiReviewedAt": "2026-07-22T07:48:56.410354+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_boots": {
    "id": "isle_delfino_tropical_tide_boots",
    "name": "Tropical Tide Boots",
    "description": "The Tropical Tide Boots are crafted from the softest seagrass woven by the artisans of Asgard in Inkopolis. Their slick soles glide effortlessly through wet sands and ink pools, allowing you to move swiftly even on treacherous terrain. A minor inconvenience is that they slightly reduce stealth effectiveness in the city's bustling streets, but the boots provide a 20% speed boost on wet surfaces, making them invaluable for navigating the tropical tides of Delfino Isle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Speed Boost",
      "Chain Chomp Resistance"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "While wearing these boots in wet terrain, you gain a +20% movement speed bonus. This effect is active as long as your feet are touching wet ground and ends when you leave the area."
      },
      {
        "title": "Chain Chomp Resistance",
        "rules": "You have advantage on saving throws against Chain Chomp attacks while wearing these boots, reducing the damage by 5%. The effect persists until the start of your next turn after leaving the area affected by a Chain Chomp attack."
      }
    ],
    "levelRequirementReason": "The Tropical Tide Boots are crafted for adventurers just beginning their journey in Inkopolis, offering them an advantage on the challenging terrain without being too powerful.",
    "vendorReason": "Isle Delfino specializes in footwear designed to thrive in its unique environment, ensuring visitors and residents alike can navigate the city's wet areas with ease.",
    "shippingDetail": "The boots are hand-delivered by Piranha Plant Post, known for their punctuality, though delivery may be delayed during peak tourist seasons in Inkopolis.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; ends when leaving wet terrain or after a Chain Chomp attack ends",
      "endsWhen": "Leaving the area of wet terrain or after a Chain Chomp attack ends, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are priced at 1000 XP to reflect their unique design and utility in navigating the challenging wet environments of Delfino Isle.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T07:49:12.104131+00:00",
    "aiReviewedAt": "2026-07-22T07:49:12.104131+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_bottle": {
    "id": "isle_delfino_tropical_tide_bottle",
    "name": "Tropical Tide Bottle",
    "description": "Drawn from Isle Delfino’s hidden lagoons, this bottle captures the essence of its tropical tide. Sip it to restore vitality and gain temporary resistance to drowning, as if the ocean itself grants you a second breath. Its water also enhances your prowess in aquatic combat, granting you a minor bonus to strikes aimed at foes beneath the waves. The bottle’s contents are as mysterious as they are potent, distilled from the very heart of the island’s watery secrets.",
    "price": 1000,
    "icon": "🌊",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Restores vitality upon consumption",
      "Grants temporary resistance to drowning"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Vitality",
        "rules": "When consumed, this bottle restores 30% of your hit points. This effect is instantaneous and can only be used once per long rest."
      },
      {
        "title": "Resistance to Drowning",
        "rules": "For the duration of one hour after consumption, you gain a +2 bonus to saving throws against drowning effects. This resistance cannot be renewed until 8 hours have passed since your last consumption."
      }
    ],
    "levelRequirementReason": "This bottle is designed for all adventurers, regardless of their level, as it can be consumed by anyone seeking a brief reprieve from the harshness of the ocean.",
    "vendorReason": "Isle Delfino’s vendors are well-known for offering items that reflect the island's natural wonders and mystical waters.",
    "shippingDetail": "Ships via Koopa Postal with a standard delivery time of three days. The bottle must be kept cool during transit to preserve its potency.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous, but effects last for one hour",
      "endsWhen": "When the duration expires or the bottle is consumed again",
      "charges": "Unlimited"
    },
    "priceReason": "The bottle’s rarity and its unique properties make it a valuable commodity among adventurers, justifying this price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T21:58:26.414974+00:00",
    "aiReviewedAt": "2026-07-22T21:58:26.414974+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_cape": {
    "id": "isle_delfino_tropical_tide_cape",
    "name": "Tropical Tide Cape",
    "description": "The Tropical Tide Cape drapes in shimmering, wave-patterned fabric that hums with oceanic energy. The cape's bioluminescent patterns glow more brightly when near water, casting a soft blue light over you as you swim through the lagoon. This enchanted garment grants the wearer temporary resistance to drowning and boosts their swim speed by 20%, making it perfect for exploring the island’s hidden coves and lagoons without fear of the deep.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resistance to Drowning",
      "Enhanced Swim Speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Drowning",
        "rules": "While wearing the Tropical Tide Cape, you gain temporary resistance to drowning damage. This effect lasts for a number of rounds equal to your proficiency bonus."
      },
      {
        "title": "Enhanced Swim Speed",
        "rules": "The cape grants you a +20% increase to your swimming speed as long as it is worn and you are within 60 feet of water. The effects last until the start of your next turn after leaving the water."
      }
    ],
    "levelRequirementReason": "The cape's enchantments are simple enough that even a beginner adventurer can use it effectively.",
    "vendorReason": "Isle Delfino is known for its connection to the ocean and specializes in items that enhance explorations of aquatic environments.",
    "shippingDetail": "The cape arrives wrapped in enchanted seaweed, ensuring it remains undamaged during transit.",
    "usage": {
      "activation": "Passive effect when worn near water.",
      "duration": "Lasts until the start of your next turn after leaving the water or if you are no longer within 60 feet of water.",
      "endsWhen": "If you remove the cape or leave the water, both effects end.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the enchantments' moderate power and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:49:37.535705+00:00",
    "aiReviewedAt": "2026-07-22T07:49:37.535705+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_gear": {
    "id": "isle_delfino_tropical_tide_gear",
    "name": "Tropical Tide Gear",
    "description": "The Tropical Tide Gear is a shimmering suit of armor, its coral pattern etched with ancient runes that glow faintly under sea water. This enchanted armor grants the wearer radiant resistance to sunburn and drowning, making it perfect for beachside combat or leisure in the lagoon. The wearer's HP regenerates at twice the normal rate while submerged, and their movement speed increases by 15% on sandy terrain, allowing them to navigate quickly between waves and dunes.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiant Resistance",
      "Enhanced Regeneration"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Radiant Resistance",
        "rules": "The wearer gains resistance to fire damage. While submerged in water, they also gain resistance to drowning damage and a +10% chance to dodge water-based attacks."
      },
      {
        "title": "Enhanced Regeneration",
        "rules": "While the user is submerged in water, their Hit Point regeneration rate doubles. This effect lasts for 1 hour or until the user exits the water."
      }
    ],
    "levelRequirementReason": "The gear's magical properties require a certain level of experience and control to properly harness.",
    "vendorReason": "Isle Delfino, with its extensive knowledge of oceanic flora and fauna, is the perfect vendor for this enchanted armor.",
    "shippingDetail": "The gear is carefully packed to ensure it arrives in pristine condition, as any damage could disrupt its magic.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "While the user remains submerged in water.",
      "endsWhen": "Exits the water or the duration ends (1 hour).",
      "charges": "Unlimited, recharges upon exiting the water."
    },
    "priceReason": "The gear's rarity and unique magical properties justify its high price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:49:35.359918+00:00",
    "aiReviewedAt": "2026-07-22T07:49:35.359918+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_pearl": {
    "id": "isle_delfino_tropical_tide_pearl",
    "name": "Tropical Tide Pearl",
    "description": "The Tropical Tide Pearl is a luminous, iridescent gem that pulses with the vibrant energy of tropical seas. When summoned from water, it grants temporary invincibility to allies and a surge of speed, making every stroke or step more powerful in the ocean's embrace. This relic, crafted by the artisans of Isle Delfino, enhances exploration beneath the waves, ensuring safety and efficiency for those who dare venture into the deep.",
    "price": 1000,
    "icon": "🌴",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Invincible Defense",
      "Swift Steps"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invincible Defense",
        "rules": "When activated by an action, the Tropical Tide Pearl grants all nearby allies temporary invincibility for 5 seconds. This effect provides full protection from damage and status effects within its range."
      },
      {
        "title": "Swift Steps",
        "rules": "For the duration of the Invincible Defense, all allied creatures gain a +20% bonus to their movement speed. This enhancement persists until the temporary invincibility ends or the effect is interrupted."
      }
    ],
    "levelRequirementReason": "This relic is designed for adventurers at any level who may benefit from its unique underwater capabilities.",
    "vendorReason": "Isle Delfino specializes in aquatic gear and magical items that enhance exploration beneath the waves, making this pearl a natural addition to their inventory.",
    "shippingDetail": "Delivered by Lakitu's swift drones, ensuring the pearl is received in pristine condition for your underwater expedition.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds",
      "endsWhen": "The effect ends when its duration expires or the user takes damage.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this relic offers a significant advantage in underwater exploration without being prohibitively expensive.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:50:04.013508+00:00",
    "aiReviewedAt": "2026-07-22T07:50:04.013508+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_rod": {
    "id": "isle_delfino_tropical_tide_rod",
    "name": "Tropical Tide Rod",
    "description": "The Tropical Tide Rod hums with the vibrant hues of the ocean, its core crafted from polished coral and adorned with a gleaming Shine Sprite charm. This magical fishing rod can summon rare sea creatures that assist in your expeditions, while also increasing your resource yield by 15% when harvesting treasures from deep reefs. With each successful cast, you feel the rhythm of the tides, enhancing your fishing speed by 20%. A true testament to Isle Delfino's connection with the ocean's bounty.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons rare sea creatures",
      "Enhances resource yield"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summon Rare Sea Creatures",
        "rules": "Activates as a bonus action, allowing you to summon one rare sea creature that assists in your expeditions for 1 minute. The creature can be used once per long rest and requires a successful DC 15 Wisdom (Nature) check."
      },
      {
        "title": "Enhanced Resource Yield",
        "rules": "Passive effect grants +15% resource yield from underwater zones, stacking with other bonuses. This effect lasts until the item is destroyed or replaced by another Fishing Rod of similar rarity and category."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively manage the summoned creatures and appreciate the enhanced resource yield.",
    "vendorReason": "Isle Delfino is known for its deep-sea treasures and magical artifacts, making it a logical vendor for this unique fishing rod.",
    "shippingDetail": "Ships directly from the ocean's depths within three days of purchase.",
    "usage": {
      "activation": "Bonus action to summon creatures; passive effect always active",
      "duration": "1 minute for summoned creatures, permanent for enhanced yield until item is destroyed or replaced",
      "endsWhen": "On destruction or replacement by another Fishing Rod of similar rarity and category",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering the unique effects, rare materials, and magical essence.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:50:02.198940+00:00",
    "aiReviewedAt": "2026-07-22T07:50:02.198940+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_sword": {
    "id": "isle_delfino_tropical_tide_sword",
    "name": "Tropical Tide Sword",
    "description": "The Tropical Tide Sword, a shimmering blade forged from the ocean's whisper, glows with neon coral hues when struck, casting a luminescent glow upon the water’s surface. Crafted by the artisans of Isle Delfino during the Fractured Atrium event, this sword dances through reality’s frayed edges, slicing through Reality Fragments as if they were mere seaweed. It is said that those who wield it in dream-surf zones feel a surge of vitality, their movements becoming fluid and swift.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Slices through Reality Fragments",
      "Enhances aquatic agility"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reality Fragment Slicing",
        "rules": "When you deal damage to a Reality Fragment with this weapon, it reduces the fragment's durability by 25%, but only when you are in the Fractured Atrium. Requires no action."
      },
      {
        "title": "Aquatic Agility Boost",
        "rules": "While underwater or within dream-surf zones, your movement speed increases by 15%. This effect lasts for 1 minute and can be reactivated once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to master the sword's aquatic magic without tiring.",
    "vendorReason": "Isle Delfino is renowned for its expertise in crafting items that harness the ocean’s power, especially during events like Fractured Atrium.",
    "shippingDetail": "Ships via Koopa Postal, ensuring timely delivery with a small chance of the sword glowing brightly upon arrival, signifying its activation.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "1 minute (recharges after a short rest)",
      "endsWhen": "Ends on completion of its duration or when you leave water/dream-surf zones",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect the sword’s unique aquatic abilities and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:50:36.159714+00:00",
    "aiReviewedAt": "2026-07-22T07:50:36.159714+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_talisman": {
    "id": "isle_delfino_tropical_tide_talisman",
    "name": "Tropical Tide Talisman",
    "description": "The Tropical Tide Talisman gleams with a vibrant, iridescent sheen that shifts like the ocean's tides. Crafted from coral and moonstone by the artisans of Isle Delfino, it grants its bearer resilience against water-based threats. Submerge in shallow seas, and the talisman activates to enhance your movement speed by 20%, allowing you to glide through the watery depths with ease. When fully submerged, a burst of energy surges, granting you a 30% attack speed boost for 10 seconds, perfect for dodging or striking underwater foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌊",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Water Resistance Boost",
      "Enhanced Underwater Movement"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Water Resistance Boost",
        "rules": "When worn, the talisman grants a +2 bonus to saving throws against water-based spells and effects. This effect is always active."
      },
      {
        "title": "Enhanced Underwater Movement",
        "rules": "While submerged in shallow waters, you gain a +10-foot movement speed bonus for 30 seconds. This effect ends when you emerge from the water or take more than one full action underwater."
      }
    ],
    "levelRequirementReason": "The talisman's magical properties require a moderate level of mastery to fully harness its aquatic magic.",
    "vendorReason": "Isle Delfino is renowned for its expertise in crafting items that enhance life under the sea, and this talisman is no exception.",
    "shippingDetail": "The talisman arrives encased in waterproof packaging to ensure it reaches you in pristine condition.",
    "usage": {
      "activation": "Passive effect; always active when worn underwater.",
      "duration": "Always active while submerged, ends upon emerging from water or taking more than one full action underwater.",
      "endsWhen": "Exhausts after extended use underwater.",
      "charges": "Unlimited"
    },
    "priceReason": "The talisman's rare crafting materials and the expertise required to imbue it with aquatic magic justify its moderate price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:50:14.819600+00:00",
    "aiReviewedAt": "2026-07-22T07:50:14.819600+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_torch": {
    "id": "isle_delfino_tropical_tide_torch",
    "name": "Tropical Tide Torch",
    "description": "The Tropical Tide Torch casts a warm, golden glow that mimics the sun’s embrace, perfectly suited for illuminating beachside patrols or feasts under the stars. Crafted from coral and seashell, this torch glows brighter when surrounded by water, its light dancing across the waves like a guardian of the shore. When active, it grants temporary swim speed boost to those who wield it and emits an soothing aura that heals 10% HP per second while active.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Glow Brighter",
      "Swim Speed Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glow Brighter",
        "rules": "While surrounded by water, the torch's light intensity increases, granting +10% chance to detect hidden paths in water. This effect lasts as long as it is within reach of at least one square foot of water."
      },
      {
        "title": "Swim Speed Boost",
        "rules": "When lit and wielded by a creature with swim speed, the user gains an additional 10 feet of swim speed for the duration. This effect ends when the torch is extinguished or the user leaves the area within which they can trigger the 'Glow Brighter' ability."
      }
    ],
    "levelRequirementReason": "This torch is designed to be accessible to adventurers of all levels, making it a useful tool for early explorers and patrols.",
    "vendorReason": "Isle Delfino specializes in crafting items that enhance the natural beauty and utility of their coastal surroundings, making this torch a perfect fit for their inventory.",
    "shippingDetail": "Ships via Koopa Postal; delivery time varies depending on the location but is generally within two to three days.",
    "usage": {
      "activation": "Instantaneous activation, always active when lit. Ends when extinguished or the user leaves an area with water.",
      "duration": "Permanent while lit and within reach of at least one square foot of water; ends upon extinguishing or leaving a water-rich environment.",
      "endsWhen": "Extinguished or moved out of range of water",
      "charges": "Unlimited, recharges when not in use"
    },
    "priceReason": "This price reflects the material and craftsmanship required to create such a unique torch that enhances both utility and ambiance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:51:02.691163+00:00",
    "aiReviewedAt": "2026-07-22T07:51:02.691163+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_trooper": {
    "id": "isle_delfino_tropical_tide_trooper",
    "name": "Tropical Tide Trooper",
    "description": "The Tropical Tide Trooper is a shimmering armor set crafted from the scales of aquatic toads found along the shores of Isle Delfino. Its ocean-blue hue and iridescent sheen reflect the waves, granting the wearer unmatched speed on beaches or in water. This armor not only boosts your movement but also provides natural healing under the sun's rays, restoring vitality after a day spent basking by the shore.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Movement Speed",
      "Heals Minor Wounds"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Beachside Speed",
        "rules": "While in water or on beach terrain, the wearer gains a +20% bonus to their movement speed. This effect is passive and does not require an action."
      },
      {
        "title": "Solar Healing",
        "rules": "During daylight hours while exposed to sunlight, the armor heals 1d6 hit points per hour. The healing stops if the wearer enters darkness or remains in shadow for more than a minute."
      }
    ],
    "levelRequirementReason": "The complex enchantments and materials used in crafting this armor necessitate at least level 5 to properly wield its benefits.",
    "vendorReason": "Isle Delfino is renowned for its connection to the ocean, making it a natural source for items that harness the power of the seas.",
    "shippingDetail": "Ships directly from Isle Delfino; expect delivery within a week during peak season.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Permanent while worn, ends when removed or destroyed.",
      "endsWhen": "Removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item with unique oceanic abilities, this armor is priced to reflect its special crafting and the materials used.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:50:18.968470+00:00",
    "aiReviewedAt": "2026-07-22T07:50:18.968470+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tide_umbrella": {
    "id": "isle_delfino_tropical_tide_umbrella",
    "name": "Tropical Tide Umbrella",
    "description": "The Tropical Tide Umbrella is a shimmering parasol crafted from enchanted seashells and woven with strands of starlight. Its gleaming surface casts a gentle glow that attracts glimmering Shine Sprites, which dance around you in the sunlight. This umbrella not only shields against both sun and rain but also reduces damage from water-based attacks, making it an essential companion for any beachside skirmish or serene walk through the Feywild.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Attracts Shine Sprites",
      "Reduces Water-Based Damage"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shine Sprite Attraction",
        "rules": "When you are in sunlight, there is a +10% chance per encounter to attract one or more Shine Sprites. The sprites remain for the duration of your turn and can assist you with minor tasks."
      },
      {
        "title": "Water Resistance",
        "rules": "While holding this umbrella, you have resistance to damage from water-based attacks. Additionally, if you are in sunlight, you gain a +2 bonus to saving throws against being charmed or frightened by creatures associated with water."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners as it provides essential protection and utility without requiring high-level proficiency.",
    "vendorReason": "Isle Delfino specializes in exotic and enchanted items, making this umbrella a perfect fit for their inventory.",
    "shippingDetail": "Delivered within three days via Shy Guy's secret courier network, ensuring your umbrella arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; activation is automatic when holding the umbrella and exposed to sunlight.",
      "duration": "Until you enter a dark environment or stop using it for an extended period (10 minutes).",
      "endsWhen": "The duration ends if you leave direct sunlight, or if you no longer hold the umbrella.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Umbrella's unique enchantments and materials justify a price of 1000 XP, aligning with similar items in the game economy.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:50:45.049502+00:00",
    "aiReviewedAt": "2026-07-22T07:50:45.049502+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tongue": {
    "id": "isle_delfino_tropical_tongue",
    "name": "Tropical Tongue",
    "description": "The Tropical Tongue is a crystalline appendage shaped like a vibrant pineapple, its surface shimmering with hues of the Delfino archipelago's coral reefs. This chewable treat not only satisfies hunger but also replenishes stamina by restoring 30% of your current total. As you savor it, the island’s essence infuses your taste buds, granting a +10% attack speed boost for the duration of combat. The tongue is said to have been crafted by the merfolk themselves, who gather their ingredients from the deepest, most potent waters surrounding Delfino Isle.",
    "price": 1000,
    "icon": "🍍",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Stamina Restore",
      "Attack Speed Boost"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stamina Restore",
        "rules": "Upon consumption of the Tropical Tongue, you gain a temporary increase in stamina equal to 30% of your current total. This effect lasts until the end of your next turn."
      },
      {
        "title": "Attack Speed Boost",
        "rules": "For the duration of any combat encounter, you gain a +10% bonus to attack rolls. This boost persists for as long as you are engaged in melee or ranged combat."
      }
    ],
    "levelRequirementReason": "The Tropical Tongue is a simple yet effective snack that can be enjoyed by adventurers of any level.",
    "vendorReason": "As the local delicacy of Delfino Isle, only the finest chefs at Isle Delfino can craft this treat with the island’s unique flavors and ingredients.",
    "shippingDetail": "The Tongue is delivered through a swift spirit courier, ensuring it arrives fresh and vibrant.",
    "usage": {
      "activation": "Eaten as a standard action",
      "duration": "Until the end of your next turn for Stamina Restore; duration of any combat encounter for Attack Speed Boost",
      "endsWhen": "The effects expire upon the completion or interruption of the respective durations",
      "charges": "Unlimited, as it is consumed once and does not recharge"
    },
    "priceReason": "Crafted with rare ingredients from Delfino Isle, this treat offers significant combat utility while being balanced for general adventurer use.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:50:48.843779+00:00",
    "aiReviewedAt": "2026-07-22T07:50:48.843779+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_tonic": {
    "id": "isle_delfino_tropical_tonic",
    "name": "Tropical Tonic of the Shine Sprite",
    "description": "The Tropical Tonic of the Shine Sprite, a shimmering elixir in a glass bottle, glows with an iridescent sheen and releases a fizzy mist when uncorked. This potion not only restores half your maximum hit points but also grants you a burst of speed, allowing you to sprint through dense jungle foliage or dash past obstacles at an exhilarating pace. The glittering effect it causes on nearby enemies is purely visual, creating a dazzling show that can momentarily distract foes in combat.",
    "price": 1000,
    "icon": "🍹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores half max HP",
      "Increases movement speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restoration of Vitality",
        "rules": "Drinking the Tropical Tonic of the Shine Sprite restores 50% of your maximum hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Speed Boost",
        "rules": "For a duration of 1 minute after drinking, you gain a +20 foot bonus to your walking speed as long as you remain within the tropics or areas with similar lush vegetation. This effect is also instantaneous upon consumption and does not expend charges."
      }
    ],
    "levelRequirementReason": "This tonic can be consumed by characters of any level, making it a versatile tool for adventurers at all stages of their journey.",
    "vendorReason": "Isle Delfino is renowned for its tropical beverages and magical concoctions, so selling this potion fits within the shop's specialty.",
    "shippingDetail": "The Void Drifter ensures fast delivery of perishable goods like the Tropical Tonic of the Shine Sprite, arriving fresh and potent.",
    "usage": {
      "activation": "Instantaneous consumption upon uncorking and drinking the potion",
      "duration": "1 minute or until the effect ends due to leaving tropical environments",
      "endsWhen": "The effect ends when you leave a tropical environment (such as entering a city) or if you are knocked unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the potion's rarity and the unique magical properties that enhance both healing and mobility, making it a valuable asset in any adventurer's inventory.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:51:20.952079+00:00",
    "aiReviewedAt": "2026-07-22T07:51:20.952079+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_tropical_wardrobe": {
    "id": "isle_delfino_tropical_wardrobe",
    "name": "Tropical Wardrobe",
    "description": "The Tropical Wardrobe is a lightweight, enchanted garment that shifts between three tropical styles: beach, jungle, and sky. Each form grants a different elemental effect—fire wind in the desert heat, water splash in the jungle's misty canopy, and earth tremor under the vast sky. Wearing this wardrobe not only changes your appearance but also enhances your combat prowess, as you gain elemental bonuses that can turn the tide of battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌴",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Elemental Form Shift",
      "Enhanced Speed"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Elemental Form Shift",
        "rules": "Activates on a bonus action. The wearer's appearance changes to one of three styles: beach, jungle, or sky. Each form lasts for 3 turns and grants an elemental bonus (fire wind deals fire damage, water splash causes splash damage, earth tremor creates tremors). The user can switch forms once per short rest."
      },
      {
        "title": "Enhanced Speed",
        "rules": "While in any of the three forms, your walking speed increases by 15%. This effect is active as long as you are wearing the Tropical Wardrobe and does not require concentration. It ends when the elemental form shift ends or if you remove the wardrobe."
      }
    ],
    "levelRequirementReason": "This enchantment requires a certain level of proficiency in elemental magic to control its shifting forms effectively.",
    "vendorReason": "Isle Delfino, known for its tropical adventures and enchanted items, offers this wardrobe as part of their diverse line of gear tailored for explorers and adventurers.",
    "shippingDetail": "The Tropical Wardrobe is carefully packaged to withstand the rigors of travel, ensuring it arrives in pristine condition. Expect a timely delivery from Pipe Express's reliable couriers.",
    "usage": {
      "activation": "Bonus action to shift form",
      "duration": "3 turns per form",
      "endsWhen": "Form shifts end or wardrobe is removed",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "The Tropical Wardrobe's enchantments and versatile design justify its moderate price in the market.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:51:15.215416+00:00",
    "aiReviewedAt": "2026-07-22T07:51:15.215416+00:00",
    "aiReviewVersion": 1
  },
  "isle_delfino_walucore_bottle": {
    "id": "isle_delfino_walucore_bottle",
    "name": "Waluigi Core Bottle",
    "description": "The Waluigi Core Bottle is a strange vial containing the essence of Waluigi’s fallen spirit, now bound in liquid light. When consumed, it restores 30 hit points and grants you a +20% chance to dodge your next attack. The courage-boosting essence ensures that fear has little hold over you for three turns, bolstering your resolve like no other potion. This item is only obtainable after the event with Pond Patrol.",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Restores HP",
      "Dodges Next Attack"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Hit Point Restoration",
        "rules": "When consumed, this vial restores 30 hit points to the drinker. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Dodge Chance Increase",
        "rules": "+20% chance to dodge your next attack. This effect lasts for one round after consuming the bottle. No save required; simply wait for your next attack."
      }
    ],
    "levelRequirementReason": "This item requires a level of at least 7 due to its potent effects and the specific event it is tied to.",
    "vendorReason": "Isle Delfino has exclusive access to rare items crafted by Pond Patrol, making this bottle available through them.",
    "shippingDetail": "Delivered via Koopa Postal, known for its timely and reliable deliveries within the Mushroom Kingdom.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "Instantaneous; effect lasts until your next attack",
      "endsWhen": "The effect ends upon taking damage or losing consciousness",
      "charges": "Unlimited, as it is consumed only once"
    },
    "priceReason": "This item has a balanced XP price due to its unique and potent effects that are limited by the event's occurrence.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T07:51:14.035541+00:00",
    "aiReviewedAt": "2026-07-22T07:51:14.035541+00:00",
    "aiReviewVersion": 1
  },
  "jar_of_dirt": {
    "id": "jar_of_dirt",
    "name": "Jar of Dirt",
    "description": "This simple jar, adorned with a weathered label that reads 'From the Heartlands,' houses dirt from a sacred grove where ancient trees whisper secrets of old. The soil has been enchanted by the local druids to serve as both protector and prankster. When shaken, it releases a cloud of dirt that can blind an opponent for a few moments, or when pressed, it releases a small plume that can trip anyone in its path.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🏺",
    "stock": 1000,
    "rarity": "common",
    "effects": [
      "Blinding Cloud",
      "Trip Plume"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Express Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blinding Cloud",
        "rules": "When shaken as an action, the jar releases a cloud of dirt that fills a 5-foot radius sphere centered on a point you choose within range. Each creature in that area must make a Dexterity saving throw (DC 12). On a failed save, a creature is blinded until the start of its next turn."
      },
      {
        "title": "Trip Plume",
        "rules": "When pressed as an action, the jar releases a small plume of dirt that creates a 5-foot-long line. Any creature in this line must make a Dexterity saving throw (DC 12). On a failed save, it falls prone."
      }
    ],
    "levelRequirementReason": "It requires basic coordination and dexterity to shake or press the jar effectively.",
    "vendorReason": "Wario Direct specializes in oddities and curiosities, making it a fitting vendor for this enchanted dirt jar.",
    "shippingDetail": "Ships within two days with express delivery to ensure the jar arrives in pristine condition.",
    "usage": {
      "activation": "Shaken or pressed as an action",
      "duration": "Instantaneous, effect ends when used",
      "endsWhen": "Exhausted after one use; recharge on a short rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The jar's enchantment and its origin from sacred ground justify this higher price.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T19:49:44.909232+00:00",
    "aiReviewedAt": "2026-07-22T19:49:44.909232+00:00",
    "aiReviewVersion": 1
  },
  "jelly_super": {
    "id": "jelly_super",
    "name": "Jelly Super",
    "description": "Jelly Super, a confection of sticky jam and a potent Super Mushroom, is a rare treat from the mystical kitchens of Shamans' Hut. This shimmering elixir not only restores vitality but also grants a burst of strength that can be felt in every sip. Upon consumption, it heals 40 hit points and regenerates 20 mana points (or two 3rd-level spell slots). Rumored to have been crafted by the same hands that imbued the legendary Super Mushroom with its powers, this jelly is a must-have for adventurers seeking a boost in both health and magic.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Health Boost",
      "Mana Regeneration"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Sealed Jar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing and Mana Restoration",
        "rules": "Upon consumption, the Jelly Super heals 40 hit points and regenerates 20 mana points (or restores two expended 3rd-level spell slots). This effect is instantaneous and has no saving throw. The item can only be used once per long rest."
      },
      {
        "title": "Boost of Strength",
        "rules": "For the duration of one hour after consumption, the consumer gains a +2 bonus to Strength (Strength score) checks and saving throws. This effect is active during the duration and does not require concentration."
      }
    ],
    "levelRequirementReason": "This treat is suitable for all adventurers, regardless of level, making it accessible yet potent.",
    "vendorReason": "Shamans' Hut specializes in crafting potions and elixirs that enhance the abilities of its patrons, thus Jelly Super fits well within their offerings.",
    "shippingDetail": "The jelly is shipped in a specially sealed jar to preserve its potency. Delays can occur if not kept refrigerated during transit.",
    "usage": {
      "activation": "Instantaneous consumption as an action.",
      "duration": "One hour after consumption.",
      "endsWhen": "At the end of one hour or upon death.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "The rarity and magical properties make this treat a valuable addition to any adventurer's supply, hence its moderate price in XP.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-22T07:51:43.680218+00:00",
    "aiReviewedAt": "2026-07-22T07:51:43.680218+00:00",
    "aiReviewVersion": 1
  },
  "jotun_ice_shard": {
    "id": "jotun_ice_shard",
    "name": "Jotun Ice Shard",
    "description": "The Jotun Ice Shard gleams with an eerie, bluish luminescence that never fades, a fragment of primordial ice from the frozen realms of Jotunheimr. It shatters on impact, leaving behind frost patterns that spread for up to 10 feet in all directions, and its cold essence can chill even the heartiest of hearts. Crafted by the frost giants themselves, this shard is both a weapon and an enigma, embodying the very chill of the northern reaches.",
    "price": 1000,
    "icon": "❄️",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Cold Weapon",
      "Primordial Frost"
    ],
    "vendor": "jotunheimr_outpost",
    "shippedBy": "Insulated Pack",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Cold Weapon",
        "rules": "The Jotun Ice Shard deals 2d6 cold damage on a hit, with reach out to 5 feet. If the target is reduced to half its hit points or fewer by this attack, it must succeed on a DC 14 Constitution saving throw or take an additional 2d6 cold damage immediately after being hit."
      },
      {
        "title": "Primordial Frost",
        "rules": "When thrown or used in melee combat, the Jotun Ice Shard shatters into a cloud of frost that spreads out in all directions for up to 10 feet. This effect lasts until the end of your next turn and imposes disadvantage on attack rolls against creatures within this area."
      }
    ],
    "levelRequirementReason": "This item is crafted from ancient, primordial ice, making it a formidable challenge even for seasoned adventurers.",
    "vendorReason": "The outpost often exchanges rare goods and artifacts directly with the frost giants of Jotunheimr.",
    "shippingDetail": "Due to its delicate nature, this shard is shipped in a specially insulated container to ensure it arrives intact.",
    "usage": {
      "activation": "Attack action or thrown as an improvised weapon",
      "duration": "Instantaneous attack; Primordial Frost lasts until the end of your next turn",
      "endsWhen": "Charges are exhausted, which happens after three uses",
      "charges": "3"
    },
    "priceReason": "The shard's rarity and the skill required to craft it justify its relatively lower price.",
    "priceOriginal": 31000,
    "priceReviewedAt": "2026-07-22T07:51:46.565606+00:00",
    "aiReviewedAt": "2026-07-22T07:51:46.565606+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_frost_berry_porridge_recipe": {
    "id": "jotunheimr_frost_berry_porridge_recipe",
    "name": "Recipe: Jotunheimr Frost Berry Porridge",
    "description": "This ancient recipe for Jotunheimr Frost Berry Porridge is a delicacy passed down through generations of frost giants. Made with hardy berries from the icy tundra and oats harvested in the snowbound lands, this porridge not only warms you from the inside out but also grants cold resistance to any who partake. The chef's secret ingredient is a pinch of starlight, collected during the shortest night of the year, which enhances the porridge’s protective properties.",
    "price": 1000,
    "icon": "🥣",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Cold Resistance",
      "Temporary Hit Points"
    ],
    "vendor": "jotunheimr_hall",
    "shippedBy": "Chilly Cereal Chart",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "When you consume this porridge, you gain resistance to cold damage for 4 hours. The effect ends if you are exposed to fire or take fire damage."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "Upon eating the porridge, you gain 1d6 temporary hit points that last until they are reduced to zero by damage."
      }
    ],
    "levelRequirementReason": "This recipe is complex and requires a certain level of expertise in cold weather survival.",
    "vendorReason": "As the official purveyor of frost giants, Jotunheimr Hall ensures that only those who truly appreciate the artistry of their cuisine can obtain this recipe.",
    "shippingDetail": "Shipped in an insulated container to preserve the porridge's icy properties until consumption.",
    "usage": {
      "activation": "Passive effect upon consuming the porridge.",
      "duration": "4 hours, until resistance ends or you take fire damage.",
      "endsWhen": "Exposure to fire or taking fire damage.",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and complexity of the ingredients make this recipe a valuable addition to any adventurer's repertoire.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T07:51:33.903799+00:00",
    "aiReviewedAt": "2026-07-22T07:51:33.903799+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_frost_bite_charm_service": {
    "id": "jotunheimr_frost_bite_charm_service",
    "name": "Jotunheimr Frost Bite Charm Service",
    "description": "This delicate silver charm, imbued by Frost Giant Shamans, offers a chilling charm to those who wear it. When donned, the air around you seems to hum with frost, granting resistance to cold damage for an entire day and advantage on saving throws against fear from giants. The charm also subtly infuses your beverage with a crisp layer of ice cubes, as if nature herself is partaking in your drink.",
    "price": 1000,
    "icon": "❄️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Cold Resistance",
      "Advantage Against Fear"
    ],
    "vendor": "jotunheimr_temple",
    "shippedBy": "Icicle Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The wearer gains resistance to cold damage for a duration of 24 hours. This effect is active as long as the charm remains on the user, and it can be activated by donning or removing the charm."
      },
      {
        "title": "Advantage Against Fear",
        "rules": "When faced with fear from giants, the wearer gains advantage on saving throws until the end of their next turn. This effect is triggered automatically upon encountering a giant that imposes such fear."
      }
    ],
    "levelRequirementReason": "This charm is designed for adventurers just starting their journey, offering them basic protection against cold and fearsome giants.",
    "vendorReason": "The temple of Jotunheimr sells this charm as a way to honor the frost gods and protect pilgrims from the harsh northern climates.",
    "shippingDetail": "Delivered by Icicle Express, known for its reliable service through frozen terrains. Delivery can take up to three days in extreme cold conditions.",
    "usage": {
      "activation": "Passive effect upon donning the charm; ends when removed or destroyed.",
      "duration": "24 hours",
      "endsWhen": "Removing or destroying the charm",
      "charges": "Unlimited uses"
    },
    "priceReason": "The charm's balanced price reflects its utility and rarity, providing a significant advantage without being overpowered.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T07:52:30.502836+00:00",
    "aiReviewedAt": "2026-07-22T07:52:30.502836+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_frost_essence": {
    "id": "jotunheimr_frost_essence",
    "name": "Jotunheimr Frost Essence",
    "description": "A bottle of pure, magical cold harvested from the heart of a frost giant's domain, its glass clinks with an icy resonance when shaken. This essence is said to have been crafted by ancient frost giants during their eternal winters, imbued with the very essence of ice and snow. It can be applied to a weapon to deal an extra 2d6 cold damage for an hour or thrown to create a devastating sleet storm that blinds all within its radius.",
    "category": "consumables",
    "price": 1000,
    "icon": "❄️",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Weapon Enhancement",
      "Sleet Storm"
    ],
    "vendor": "Jotunheimr",
    "shippedBy": "Frostbound Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Weapon Enhancement",
        "rules": "When applied to a weapon, it grants the wielder an extra 2d6 cold damage for one hour. This effect is instantaneous and requires no action."
      },
      {
        "title": "Sleet Storm",
        "rules": "Throwing the bottle creates a 20-foot radius of freezing sleet storm centered on the thrower, dealing 1d6 cold damage to all creatures within the area. The spell has a save DC of 15 and lasts for 1 minute per use."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency in combat or spellcasting to effectively utilize its icy powers.",
    "vendorReason": "The Jotunheimr, descendants of the frost giants, still revere and possess knowledge about their ancestors' creations.",
    "shippingDetail": "Delivered by Frostbound Express, the package is kept frozen throughout transit to preserve its potency.",
    "usage": {
      "activation": "Instantaneous application or throwing action",
      "duration": "Weapon enhancement lasts for one hour; sleet storm lasts for 1 minute per use",
      "endsWhen": "Used up or discharged after a single application/throw, recharges on completion of a long rest",
      "charges": "Unlimited uses within a short rest"
    },
    "priceReason": "The rarity and magical properties of the essence justify its high price.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T07:51:59.455105+00:00",
    "aiReviewedAt": "2026-07-22T07:51:59.455105+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_frost_talisman": {
    "id": "jotunheimr_frost_talisman",
    "name": "Jotunheimr Frost Talisman",
    "description": "The Jotunheimr Frost Talisman gleams with an icy sheen, its surface etched with ancient runes that whisper of frost and cold. This small charm not only grants resistance to fire damage but also radiates a biting chill that can turn the warmest day into an arctic blizzard. Crafted by the enigmatic Jotunheimr, it is said to have been forged in the heart of their icy realm, ensuring its power remains as sharp and true as the northern winds.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Ice Resistance",
      "Cone of Cold"
    ],
    "vendor": "jotunheimr_outpost",
    "shippedBy": "Frost Case Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ice Resistance",
        "rules": "You gain resistance to fire damage. This effect is always active while you wear or carry the talisman."
      },
      {
        "title": "Cone of Cold",
        "rules": "As a bonus action, you can emit a 10-foot cone of cold affecting creatures within range. Creatures in the area must make a DC 13 Constitution saving throw, taking 1d6 cold damage on a failed save and half as much damage on a successful one. The talisman can be used once per day."
      }
    ],
    "levelRequirementReason": "The Jotunheimr Frost Talisman is crafted to be accessible, allowing even low-level adventurers to harness its icy might.",
    "vendorReason": "Jotunheimr Outpost specializes in items forged by the frost giants of Jotunheimr, making this talisman a natural addition to their inventory.",
    "shippingDetail": "The Frost Case Express guarantees swift delivery through its icy routes, ensuring your talisman arrives as fresh and potent as the northern winds.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "After emitting the cone of cold once per day",
      "charges": "1"
    },
    "priceReason": "The Jotunheimr Frost Talisman is priced at 1000 XP, reflecting its craftsmanship and unique abilities that can turn any fire-based threat into a frosty nightmare.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-24T23:24:31.561097+00:00",
    "aiReviewedAt": "2026-07-24T23:24:31.561097+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_frost_weave_mittens": {
    "id": "jotunheimr_frost_weave_mittens",
    "name": "Jotunheimr Frost Weave Mittens",
    "description": "These mittens are knitted from the finest wool of the frost giants. Their thick weave provides a comforting warmth, and their oversized design ensures your hands stay toasty even in the harshest blizzards. The mittens grant you resistance to non-magical cold damage, and when you're outdoors in snow, they give you an edge on Dexterity checks. However, their cumbersome nature can hinder delicate tasks, imposing a disadvantage on Sleight of Hand checks.",
    "price": 1000,
    "icon": "🧤",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Resistance to Cold",
      "Snowy Expertise"
    ],
    "vendor": "jotunheimr_village",
    "shippedBy": "Frostwind Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Cold",
        "rules": "You have resistance to non-magical cold damage. This effect is always active while you are wearing the mittens."
      },
      {
        "title": "Snowy Expertise",
        "rules": "When in an area of snow, you gain advantage on Dexterity checks that involve movement or balance. This effect lasts until the start of your next turn after leaving a snowy area."
      }
    ],
    "levelRequirementReason": "The mittens are designed to be accessible for adventurers at all levels, enhancing their utility in cold environments.",
    "vendorReason": "As the village's blacksmiths and Frost Knitters have mastered the art of crafting these mittens, it only makes sense that they would sell them to their fellow villagers.",
    "shippingDetail": "The mittens are shipped in insulated boxes via Frostwind Express, ensuring they remain warm until delivery.",
    "usage": {
      "activation": "Passive effect; no activation needed",
      "duration": "Instantaneous cold resistance; advantage on Dexterity checks while in snow lasts until the start of your next turn after leaving a snowy area",
      "endsWhen": "Discontinues upon removal or when you leave a snowy area, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The mittens are crafted from rare materials and take significant time to produce, making them moderately priced for their utility.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T07:52:15.743524+00:00",
    "aiReviewedAt": "2026-07-22T07:52:15.743524+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_giant_ancestry_dna_test": {
    "id": "jotunheimr_giant_ancestry_dna_test",
    "name": "Jotunheimr Giant Ancestry DNA Test",
    "description": "The Jotunheimr Giant Ancestry DNA Test is a vial of shimmering essence that reveals your distant giant heritage. Upon activation, you gain a +2 bonus on Charisma checks with giants and a +1 to Strength (your height remains unchanged). For the next hour, giants will treat you as their quirky cousin, sharing tales and stories but not taking orders from you. This test is crafted by Jotunheimr Ancestry Co., using ancient runes etched into its vial and potent extracts of giant flora.",
    "category": "services",
    "price": 1000,
    "icon": "🧬",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Giants think you're their cousin",
      "Charisma checks with giants are +2"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost with Giants",
        "rules": "You gain a +2 bonus on Charisma checks when interacting with creatures of giant ancestry. This effect lasts for one hour after you use the test."
      },
      {
        "title": "Giants' Favor",
        "rules": "For 1 hour, giants believe you are their distant cousin and will share stories but not take orders from you. This effect ends when the hour expires or if you attack a giant."
      }
    ],
    "levelRequirementReason": "This test is simple enough for any adventurer to use without requiring high-level expertise.",
    "vendorReason": "Jotunheimr Ancestry Co. specializes in revealing one's ancestry and compatibility with different races, making this item a core part of their product line.",
    "shippingDetail": "Delivered via the Giant Courier, known for its reliable service and timely deliveries.",
    "usage": {
      "activation": "Standard action to use the test on yourself.",
      "duration": "One hour from activation.",
      "endsWhen": "The hour expires or if you attack a giant.",
      "charges": "Unlimited uses"
    },
    "priceReason": "At 1000 XP, this item is priced to be within reach of most low-level adventurers without being prohibitively expensive.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T07:52:27.012244+00:00",
    "aiReviewedAt": "2026-07-22T07:52:27.012244+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_giant_shoe_fitting": {
    "id": "jotunheimr_giant_shoe_fitting",
    "name": "Jotunheimr Giant Shoe Fitting",
    "description": "The Jotunheimr Giant Shoe Fitting is a colossal footwear service that ensures your boots are as grand and imposing as a giant's stride. Crafted by the fearsome Jotunheimr Cobbler, these shoes not only grant you the benefits of Boots of Striding and Springing for seven days but also make your presence truly awe-inspiring—advantage on Intimidation checks due to their sheer size. However, they come with a cost: you must stomp when walking, which penalizes any checks requiring stealth or finesse.",
    "category": "services",
    "price": 1000,
    "icon": "👟",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Boots of Striding and Springing",
      "Awe-Inspiring Presence"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Shoebox",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boots of Striding and Springing (7 Days)",
        "rules": "You gain the benefits of the Boots of Striding and Springing magic item for seven days. You can activate this ability as a bonus action once per long rest."
      },
      {
        "title": "Awe-Inspiring Presence",
        "rules": "When wearing these shoes, you have advantage on Intimidation checks due to your imposing size. However, you must stomp when walking, which imposes disadvantage on Stealth and Dexterity (Sleight of Hand) checks."
      }
    ],
    "levelRequirementReason": "The service is tailored for adventurers who are just starting their journey.",
    "vendorReason": "Jotunheimr Cobbler, known for crafting footwear that suits the largest and most formidable creatures, offers this service to ensure your boots match your adventurous spirit.",
    "shippingDetail": "The shoes are shipped in a specially designed Giant Shoebox, delivered by a team of robust giant couriers.",
    "usage": {
      "activation": "Bonus action once per long rest to activate the Boots of Striding and Springing ability.",
      "duration": "7 days for the Boots of Striding and Springing effect.",
      "endsWhen": "The effect ends when you remove the shoes or after 7 days, whichever comes first.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced to offer a unique service that enhances both utility and presence without being overpowered.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T07:52:36.486978+00:00",
    "aiReviewedAt": "2026-07-22T07:52:36.486978+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_giant_spatula": {
    "id": "jotunheimr_giant_spatula",
    "name": "Jotunheimr Giant Spatula",
    "description": "The Jotunheimr Giant Spatula is a colossal utensil, its handle thick as a giant's wrist and its blade wide enough to flip a full-sized cauldron with ease. Crafted by the Jotunheimr Utensil Smiths from enchanted iron, this spatula grants you the strength of a mountain when flipping large meals. However, its sheer size makes it cumbersome for small pans; using it requires a clumsy check and disadvantage on any cooking attempt involving small cookware.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Flips Anything",
      "Large Melee Weapon"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flips Anything",
        "rules": "When you use the Jotunheimr Giant Spatula to flip a large cooking item, such as a cauldron or a whole animal, you have advantage on checks involving flipping. This effect is usable once per short rest."
      },
      {
        "title": "Large Melee Weapon",
        "rules": "The Jotunheimr Giant Spatula can be used as a two-handed club, dealing 1d8 + Strength modifier bludgeoning damage when you hit with it on your attack. You must use a bonus action to switch between wielding the spatula as a cooking utensil or as a weapon."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers of all levels, but beginners might find its size and weight challenging.",
    "vendorReason": "Jotunheimr is known for creating oversized tools that cater to the unique needs of giants and their kin.",
    "shippingDetail": "Due to its size, this item requires special handling and can only be delivered by the Giant Courier. Delivery may take an additional day beyond standard shipping times.",
    "usage": {
      "activation": "Action or bonus action for flipping; attack on your turn for weapon use",
      "duration": "Instantaneous when used as a cooking tool; one melee attack per short rest when used as a weapon",
      "endsWhen": "Exhausts charges after one use or attack, recharges at the start of each long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its unique craftsmanship and the convenience it offers to adventurers of all sizes.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T07:53:00.310739+00:00",
    "aiReviewedAt": "2026-07-22T07:53:00.310739+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_giant_sweater": {
    "id": "jotunheimr_giant_sweater",
    "name": "Jotunheimr Giant Sweater",
    "description": "The Jotunheimr Giant Sweater, knitted by titanic hands from wool spun from ancient forests, is a massive garment that promises warmth in even the iciest climes. Its sleeves are as wide as a bear's den, and its body can accommodate an entire family. Wearing it grants you resistance to cold damage for 24 hours, but be prepared for constant itching; this sweater imposes disadvantage on Concentration checks until washed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧶",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Cold Resistance",
      "Itchy Garment"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Yarn Ball",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "You gain resistance to cold damage. This effect lasts for 24 hours, after which the sweater's warmth dissipates and it returns to its natural state."
      },
      {
        "title": "Itchy Garment",
        "rules": "While wearing this sweater, you suffer disadvantage on Concentration checks until the garment is washed. The itching sensation is relentless; washing it once per day with hot water and a special detergent removes the effect for another 24 hours."
      }
    ],
    "levelRequirementReason": "This sweater is designed to be accessible, providing immediate warmth and protection without demanding high-level expertise.",
    "vendorReason": "The Jotunheimr Knitters are known for their craftsmanship in creating garments that not only protect but also tell the story of their origins.",
    "shippingDetail": "Shipped by a giant-sized yarn ball, which ensures the sweater arrives safely and with a bit of whimsy.",
    "usage": {
      "activation": "Wearing the sweater is an instantaneous action.",
      "duration": "24 hours or until washed.",
      "endsWhen": "The effect ends when you wash it in hot water and detergent once per day.",
      "charges": "Unlimited"
    },
    "priceReason": "This sweater offers significant protection at a fair price, making it an excellent value for players seeking cold weather preparedness.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T19:49:44.807236+00:00",
    "aiReviewedAt": "2026-07-22T19:49:44.807236+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_ice_mold_tray": {
    "id": "jotunheimr_ice_mold_tray",
    "name": "Jotunheimr Ice Mold Tray",
    "description": "The Jotunheimr Ice Mold Tray, crafted by Frost Carvers from enchanted ice and bound with rune-etched wood, is a masterwork of cold confectionery. It freezes berry porridge into sturdy blocks that can withstand the harshest travel without melting. A single crack in heat renders it useless, preserving its integrity only under frosty conditions. This tray brings the frozen fruits of summer to the coldest winter nights, ensuring fresh treats for weary travelers and feasts alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥣",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Freezes Quickly",
      "Travel-Friendly Preservation"
    ],
    "vendor": "jotunheimr_hall",
    "shippedBy": "Chilly Chisel Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Freezes Quickly",
        "rules": "Activates as an action. The tray freezes berry porridge into blocks that are immediately preserved in a state of suspended animation, granting advantage on all checks related to cold recipe prep until the end of your next turn."
      },
      {
        "title": "Travel-Friendly Preservation",
        "rules": "The tray molds large portions of frozen fruit into portable blocks. These blocks can be carried over long distances without spoiling. If exposed to temperatures above freezing for more than 1 hour, the block cracks and is rendered unusable."
      }
    ],
    "levelRequirementReason": "This item's craftsmanship requires only basic dexterity to use effectively.",
    "vendorReason": "Jotunheimr Hall specializes in cold-weather supplies and this tray is a perfect addition to their inventory.",
    "shippingDetail": "Ships within the next moon cycle, ensuring the tray arrives perfectly frozen and ready for use.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting until end of next turn",
      "endsWhen": "Exposure to temperatures above freezing for more than one hour",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price point, considering the item's utility and rarity.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T07:53:05.538459+00:00",
    "aiReviewedAt": "2026-07-22T07:53:05.538459+00:00",
    "aiReviewVersion": 1
  },
  "jotunheimr_recipe_giant_pancake": {
    "id": "jotunheimr_recipe_giant_pancake",
    "name": "Recipe: Jotunheimr Giant Pancake",
    "description": "The pancake is as large as a shield, golden-brown and sizzling with the aroma of Jotunheimr's unique ingredients. Eating it takes 10 minutes to consume but rewards you with 2d6 hit points. For the next 24 hours, you are full from any food, eliminating hunger pangs. However, this indulgence comes at a cost; for an hour after consumption, you suffer disadvantage on Dexterity checks due to a lingering food coma.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Shield of Satiety",
      "Dexterity Penalty"
    ],
    "vendor": "jotunheimr",
    "shippedBy": "Giant Plate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shield of Satiety",
        "rules": "Eating the pancake restores 2d6 hit points over 10 minutes. You are immune to all food-related effects for the next 24 hours."
      },
      {
        "title": "Dexterity Penalty",
        "rules": "For one hour after eating, you have disadvantage on Dexterity checks and saving throws. This effect ends when you finish a long rest or consume another meal."
      }
    ],
    "levelRequirementReason": "This pancake is intended for adventurers of all levels who might find themselves in need of quick sustenance.",
    "vendorReason": "Jotunheimr Breakfast Club is renowned for their unique and powerful recipes, making this pancake a staple in their offerings.",
    "shippingDetail": "Ships via the Giant Plate Express service, ensuring quick delivery to your doorstep.",
    "usage": {
      "activation": "Eating the pancake over 10 minutes",
      "duration": "24 hours of satiety and one hour of Dexterity penalty",
      "endsWhen": "Ends when you finish a long rest or consume another meal, or after an hour",
      "charges": "Unlimited uses"
    },
    "priceReason": "This pancake provides significant health restoration and satiety for a reasonable price, making it accessible to all adventurers.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T07:53:17.602156+00:00",
    "aiReviewedAt": "2026-07-22T07:53:17.602156+00:00",
    "aiReviewVersion": 1
  },
  "kamek_wand_broken": {
    "id": "kamek_wand_broken",
    "name": "Broken Magikoopa Wand",
    "description": "The Broken Magikoopa Wand is a relic of bygone magic, cracked down its center to reveal jagged, sparking shards. It hums faintly when held, and sparks occasionally as if yearning for repair. Once wielded by Kamek himself, this wand's core remains intact, though its outer casing lies in ruins. It can still be used to make small, controlled bursts of light that blind enemies momentarily but is otherwise useless as a weapon.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪄",
    "stock": 2,
    "rarity": "junk",
    "effects": [
      "Minor Light Burst",
      "Arcane Spark"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Hazmat",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Light Burst",
        "rules": "The wielder can activate the wand as an action to produce a brief burst of light, blinding one creature within 5 feet for 1 round. The target must succeed on a DC 13 Constitution saving throw or be blinded until the end of its next turn."
      },
      {
        "title": "Arcane Spark",
        "rules": "The wielder can activate the wand as an action to create a small spark that deals 2d4 fire damage to a creature within 5 feet. The spark has no effect if the target is immune to fire damage."
      }
    ],
    "levelRequirementReason": "This item requires minimal magic knowledge, making it accessible for lower-level characters who might find use in its minor effects.",
    "vendorReason": "The Rogue Port's Black Market often stocks odd relics and broken artifacts that can be pieced back together or repurposed by enterprising buyers.",
    "shippingDetail": "Due to the volatile nature of the sparks, it is shipped in a specially lined container to minimize the risk of accidental discharge during transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Minor Light Burst) / Instantaneous (Arcane Spark)",
      "endsWhen": "Charges are expended or the item is destroyed. Each use expends one charge, and it has a limited number of charges that can be replenished by a successful repair attempt.",
      "charges": "Limited Charges"
    },
    "priceReason": "The wand's historical value and its minor utility justify this price in terms of experience points.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T19:50:15.198821+00:00",
    "aiReviewedAt": "2026-07-22T19:50:15.198821+00:00",
    "aiReviewVersion": 1
  },
  "key_to_the_godly_doors": {
    "id": "key_to_the_godly_doors",
    "name": "Key to the Godly Doors",
    "description": "The Key to the Godly Doors gleams with an ethereal light that seems to pierce the very fabric of reality itself. Crafted from the molten hearts of ancient stars, this key opens not just doors but breaches between planes and seals that have been closed by divine will. Each use drains a star's light, altering the night sky ever so slightly, as if a piece of the cosmos were subtly altered.",
    "category": "premium",
    "price": 1000,
    "icon": "🗝️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Opens any door or barrier, including those sealed by divine will",
      "One use per day"
    ],
    "vendor": "Celestial Exchange",
    "shippedBy": "Cosmic Vault",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Divine Seal Breach",
        "rules": "This key bypasses any divine seal or barrier that would otherwise resist its opening. It requires an action to activate and immediately opens the target door or breach."
      },
      {
        "title": "Starlight Drain",
        "rules": "Each use consumes a star in the night sky, reducing the number of stars visible by one for 24 hours. This effect is cumulative if used multiple times within a year."
      }
    ],
    "levelRequirementReason": "The key's divine power and cosmic nature demand a character with significant experience to wield it.",
    "vendorReason": "Only the Celestial Exchange, known for its dealings in divine artifacts, would offer such a powerful yet ethereal item.",
    "shippingDetail": "The key must be carefully packed and shipped via interplanar courier to ensure it arrives intact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use per day",
      "charges": "One charge per day"
    },
    "priceReason": "The key's rarity, divine forging process, and the cumulative effect on starlight justify its modest but significant price.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-22T19:50:10.886314+00:00",
    "aiReviewedAt": "2026-07-22T19:50:10.886314+00:00",
    "aiReviewVersion": 1
  },
  "king_boo_crown": {
    "id": "king_boo_crown",
    "name": "King Boo's Crown Fragment",
    "description": "A fragment of King Boo's crown, this spectral relic makes you translucent and arrogant. Your very essence seems to dissolve into a wraith-like form, making it difficult for even your closest allies to perceive you fully. This cursed piece of royalty also grants you the ability to phase through solid objects, though only in short bursts. Beware, for those who recognize the ghostly nobility within you may treat you with the utmost respect—or fear—depending on their loyalties.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Translucent and Arrogant",
      "Phasing Through Walls"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Ghostly Package",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Translucent and Arrogant",
        "rules": "You are considered partially transparent, granting you advantage on Deception checks. Additionally, you suffer disadvantage on Charisma (Persuasion) checks."
      },
      {
        "title": "Phasing Through Walls",
        "rules": "As a bonus action, you can phase through walls for up to 10 feet in any direction. This effect lasts until the start of your next turn and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This relic requires a certain level of mastery to wield its spectral powers without succumbing to their corrupting influence.",
    "vendorReason": "The Onyx Hand maintains a collection of rare and powerful artifacts, including this fragment of spectral royalty.",
    "shippingDetail": "Shipped by the Ghostly Post, delivered with a delay of one week due to the ethereal nature of the item.",
    "usage": {
      "activation": "Bonus action for phasing through walls; passive effect for Translucent and Arrogant",
      "duration": "Instantaneous (Phasing) or until start of next turn (Translucent and Arrogant)",
      "endsWhen": "Ends when you are incapacitated, at the end of your next turn if you do not phase again, or after a long rest.",
      "charges": "One use per short or long rest"
    },
    "priceReason": "The relic's rarity and spectral abilities justify its lower price compared to other legendary items.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-22T07:54:27.943894+00:00",
    "aiReviewedAt": "2026-07-22T07:54:27.943894+00:00",
    "aiReviewVersion": 1
  },
  "king_of_tombs_ankh_pass": {
    "id": "king_of_tombs_ankh_pass",
    "name": "Ankh of the Tomb King",
    "description": "The Ankh of the Tomb King is a tarnished gold ankh, its surface etched with ancient symbols that shimmer faintly in the dim light of tombs. Crafted from the bones of kings and the tears of forgotten pharaohs, it grants passage through even the most basic tomb wards and traps. Those who wear it find themselves immune to the whispers of undead guardians and can suppress one magical glyph or symbol per day with a mere touch.",
    "category": "curiosities",
    "price": 1000,
    "icon": "☥",
    "stock": 7,
    "rarity": "rare",
    "effects": [
      "Tombsafe",
      "Glyph Suppression"
    ],
    "vendor": "King of Tombs",
    "shippedBy": "Dusty Sarcophagus",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tombsafe",
        "rules": "The Ankh of the Tomb King grants you advantage on saving throws against traps and curses in tombs or necropolises. This effect is active as long as you wear the ankh."
      },
      {
        "title": "Glyph Suppression",
        "rules": "You can suppress one magical glyph or symbol per day by touching it with this ankh. The suppression lasts until the end of your next short rest and has a save DC of 15. You may use this ability once per day."
      }
    ],
    "levelRequirementReason": "This ankh provides immediate utility to adventurers at any level, allowing them to navigate dangerous tombs with relative ease.",
    "vendorReason": "As the keeper of ancient tombs and necropolises, the King of Tombs is well-acquainted with the treasures that protect these sacred places.",
    "shippingDetail": "Delivered via a trusted mummy courier who ensures the ankh arrives in pristine condition, free from dust and damage.",
    "usage": {
      "activation": "Instantaneous action when worn; daily use for glyph suppression requires touching the glyph or symbol with the ankh.",
      "duration": "Active while worn, suppression lasts until end of next short rest",
      "endsWhen": "The effect ends upon removal from a tomb or necropolis, or if you are no longer within 30 feet of the target glyph/symbol during suppression.",
      "charges": "Unlimited"
    },
    "priceReason": "This ankh provides immediate utility and protection against common hazards in tombs, making it a valuable asset for any adventurer.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T07:54:24.131856+00:00",
    "aiReviewedAt": "2026-07-22T07:54:24.131856+00:00",
    "aiReviewVersion": 1
  },
  "king_of_tombs_canopic_flask": {
    "id": "king_of_tombs_canopic_flask",
    "name": "Canopic Flask of Preservation",
    "description": "The Canopic Flask of Preservation is a meticulously crafted alchemical vessel, its glossy black surface embossed with ancient hieroglyphs. This artifact can perfectly seal and preserve one organic item up to one cubic foot in size, safeguarding it from decay and magical detection. Once the flask's lid is sealed, even the most potent divination spells cannot locate or scry upon its contents without breaking the vessel—a perilous act that releases a noxious cloud of choking dust.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🏺",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Preserves a single organic item indefinitely",
      "Magical detection and scrying are impossible while the item is inside"
    ],
    "vendor": "king_of_tombs",
    "shippedBy": "Sarcophagus Guard",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Preservation",
        "rules": "When sealed, the flask preserves any organic item up to one cubic foot in size. The item remains undamaged and uncontaminated by time or magic for as long as it stays within the flask."
      },
      {
        "title": "Magical Detection Blockade",
        "rules": "While inside the flask, an item cannot be detected by any form of scrying or divination spell without breaking the flask. Breaking the flask releases a cloud of choking dust that lasts for 1 minute and imposes the blinded condition on all creatures within 30 feet."
      }
    ],
    "levelRequirementReason": "Preservation magic is complex, but even novice arcane scholars can comprehend its principles.",
    "vendorReason": "The King of Tombs is a master of ancient artifacts and alchemy, known for his collection of relics that defy time's passage.",
    "shippingDetail": "Delivered with the utmost care by the Sarcophagus Guard, ensuring the flask arrives intact and undisturbed.",
    "usage": {
      "activation": "Instantaneous action to seal or open the flask",
      "duration": "Permanent until the flask is broken or the item removed",
      "endsWhen": "Breaking the flask releases its contents and a cloud of choking dust",
      "charges": "Unlimited uses"
    },
    "priceReason": "The flask's preservation properties are valuable but not unparalleled, making it moderately priced.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T07:55:11.683274+00:00",
    "aiReviewedAt": "2026-07-22T07:55:11.683274+00:00",
    "aiReviewVersion": 1
  },
  "king_of_tombs_guide": {
    "id": "king_of_tombs_guide",
    "name": "King of Tombs Hidden Map",
    "description": "The King of Tombs Hidden Map is a leather-bound parchment with intricate carvings that glow faintly in the dark. It reveals hidden passageways and provides a safe route through three perilous tombs, chosen by the map's caster upon activation. The map also detects all traps specifically set to catch undead creatures within its 60-foot radius, alerting you before you step into danger. Crafted by the King of Tombs himself, this invaluable tool is a testament to his mastery over necromancy and tomb lore.",
    "price": 1000,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "legendary",
    "effects": [
      "Safe Passage",
      "Undead Trap Detection"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Emissary of the King of Tombs",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Safe Passage",
        "rules": "The user can activate the map as an action, which grants a safe route through any three hostile areas chosen by the caster. This effect is instantaneous and lasts until the end of the encounter."
      },
      {
        "title": "Undead Trap Detection",
        "rules": "Activate this ability as a bonus action to detect all traps within a 60-foot radius that are specifically set to catch undead creatures. The effect lasts for 1 minute, and you can use this feature again after finishing a short or long rest."
      }
    ],
    "levelRequirementReason": "The map requires at least 5th level to activate its effects due to the complexity of the necromantic wards involved.",
    "vendorReason": "Only someone as knowledgeable about tombs and their dangers, like the tomb gatekeeper, would have access to such a detailed and powerful map.",
    "shippingDetail": "The map is shipped directly by the Emissary who ensures it reaches safely, often arriving with the first light of dawn.",
    "usage": {
      "activation": "Action or Bonus Action (Safe Passage and Undead Trap Detection respectively)",
      "duration": "Instantaneous for Safe Passage; 1 minute for Undead Trap Detection",
      "endsWhen": "The effect ends when its duration expires, or if the map is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted by a legendary necromancer and imbued with powerful undead-related effects, this map's value is set at 1000 XP.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T07:54:32.193133+00:00",
    "aiReviewedAt": "2026-07-22T07:54:32.193133+00:00",
    "aiReviewVersion": 1
  },
  "king_of_tombs_preservation_jar": {
    "id": "king_of_tombs_preservation_jar",
    "name": "King of Tombs Preservation Jar",
    "description": "The King of Tombs Preservation Jar is a thick, obsidian container with a golden clasp that whispers the secrets of ancient tombs when disturbed. Crafted by the King of Tombs himself from enchanted blackstone quarried deep beneath his domain, this jar ensures any organic material placed within remains perfectly preserved indefinitely. Though it can house food, body parts, or magical components, its true power lies in safeguarding treasures that would otherwise decay or perish.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏺",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Indefinite Preservation",
      "Ancient Enchantment"
    ],
    "vendor": "tomb_gatekeeper",
    "shippedBy": "Stone Jar Courier",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Indefinite Preservation",
        "rules": "Place any organic material inside the jar to preserve it indefinitely. This includes food, body parts, and magical components that would otherwise decay or deteriorate."
      },
      {
        "title": "Ancient Enchantment",
        "rules": "The jar is imbued with an ancient enchantment that grants a +1 bonus to saving throws against corruption, decay, and poison effects for the user. This effect lasts until the end of your next turn after activation."
      }
    ],
    "levelRequirementReason": "This item is designed for general use by adventurers without requiring a specific level.",
    "vendorReason": "The Tomb Gatekeeper, guardian of the ancient tombs, offers this item to protect treasures and artifacts from decay.",
    "shippingDetail": "Delivered by the Stone Jar Courier with a delivery time of three days via secret underground routes.",
    "usage": {
      "activation": "A bonus action is required to seal or open the jar. Once sealed, no further action is needed until preservation ends naturally.",
      "duration": "Indefinite",
      "endsWhen": "The jar's enchantment fades after 10 years of continuous use or if exposed to a powerful source of heat.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its rarity and the time-consuming process required for crafting it.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-22T07:54:52.105968+00:00",
    "aiReviewedAt": "2026-07-22T07:54:52.105968+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_dragon_breath_torch": {
    "id": "kingdom_fiore_dragon_breath_torch",
    "name": "Kingdom Fiore Dragon Breath Torch",
    "description": "The Kingdom Fiore Dragon Breath Torch is a meticulously crafted torch forged from dragon-scale leather and laced with alchemical flares. It crackles with fire magic, emitting a heart-stopping heat that rivals genuine dragon breath. The flame burns fiercely, providing an instant +2 to any fire-based attack rolls or checks. This torch also simulates the intense heat of a dragon's fire, dealing 1d4 fire damage in a 5-foot radius around its user.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍪",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fierce Flame",
      "Dragon Heat Simulation"
    ],
    "vendor": "kingdom_fiore_guild",
    "shippedBy": "Fiery Flame File",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fierce Flame",
        "rules": "When the torch is activated by a bonus action, it grants +2 to any fire-based attack rolls or checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Dragon Heat Simulation",
        "rules": "The torch simulates dragon fire, dealing 1d4 fire damage in a 5-foot radius around its user whenever it is activated. This effect has no save DC and ends when the torch runs out of charges or is destroyed."
      }
    ],
    "levelRequirementReason": "This torch requires minimal magical power to activate, making it accessible for beginners.",
    "vendorReason": "Fiore Forgers are renowned for their expertise in crafting items that replicate dragon magic.",
    "shippingDetail": "The torch is carefully packed to ensure it arrives safely and without combustion hazards.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn or until destroyed",
      "endsWhen": "Runs out of charges or is destroyed",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "This torch provides significant fire-based advantages without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T07:54:41.660543+00:00",
    "aiReviewedAt": "2026-07-22T07:54:41.660543+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_dragon_scale_crackers_recipe": {
    "id": "kingdom_fiore_dragon_scale_crackers_recipe",
    "name": "Recipe: Kingdom Fiore Dragon Scale Crackers",
    "description": "These crispy crackers are crafted from the very scales of a Fiore dragon, each cracker a delicate mimic of the fierce creature's armor. The recipe, hidden for centuries within the guild’s archives, is taught by the master chefs who have mastered the art of capturing a dragon’s essence in every bite. Eating these Crackers grants you minor fire breath that can scorch foes for 1d4 fire damage once per short rest and provides a +2 bonus to Intimidation checks until your next long rest.",
    "price": 1000,
    "icon": "🍪",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Dragon's Breath",
      "Bonus to Intimidation"
    ],
    "vendor": "kingdom_fiore_guild",
    "shippedBy": "Fiery Flake File",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dragon's Breath",
        "rules": "Consume one cracker as an action. You exhale a cloud of fire, dealing 1d4 fire damage to all creatures in a 5-foot radius. This effect lasts until the start of your next turn. A successful DC 13 Dexterity saving throw reduces the damage by half."
      },
      {
        "title": "Bonus to Intimidation",
        "rules": "+2 bonus to any Intimidation check or saving throw made before you take a short rest. This effect persists until you complete a long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, offering an introduction to elemental magic without the complexity of higher-level spells.",
    "vendorReason": "The Fiore Guild Cooks are renowned for their magical recipes and have mastered the art of transforming dragon scales into edible powerhouses.",
    "shippingDetail": "Ships with a courier who ensures the crackers remain crispy and intact, delivered within two days.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "Instantaneous effect; lasts until your next turn.",
      "endsWhen": "The effect ends if you take any damage or when the cracker is consumed.",
      "charges": "Unlimited, but one cracker consumed per use."
    },
    "priceReason": "The rare and magical nature of the ingredients combined with the guild's exclusivity justifies this price point.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T07:54:47.272106+00:00",
    "aiReviewedAt": "2026-07-22T07:54:47.272106+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_dragon_slayer_training_premium": {
    "id": "kingdom_fiore_dragon_slayer_training_premium",
    "name": "Kingdom Fiore Dragon Slayer Training (Premium)",
    "description": "This premium training manual, made by the Fiore Guild, teaches you the basics of combating dragons in a forgehearted core. It is bound in dragonhide and etched with runes from the ancient lore of Kingdom Fiore's battles against wyverns. Upon activation, it grants +1 attack roll and damage bonus against dragons for one week, as well as knowledge of an intimidating roar that can be used once per long rest (DC 12 Wisdom saving throw). The manual is a testament to the guild’s expertise, but beware: mastering its lessons leaves you bruised, dealing 1d4 hit point damage.",
    "price": 1000,
    "icon": "🐉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dragon Combat Bonus",
      "Intimidating Roar"
    ],
    "vendor": "kingdom_fiore_guild",
    "shippedBy": "Scale Shield Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Dragon Combat Bonus",
        "rules": "Activate as a bonus action. Grants +1 to attack rolls and damage against dragons for one week. Ends when the user gains another level."
      },
      {
        "title": "Intimidating Roar",
        "rules": "A once-per-long-rest ability that allows you to use an action to unleash a roar, forcing creatures within 30 feet to make a DC 12 Wisdom saving throw or become frightened for up to one minute. The user must finish a short or long rest before using this ability again."
      }
    ],
    "levelRequirementReason": "This manual is designed for experienced adventurers who have already faced the challenges of dragon combat.",
    "vendorReason": "The Fiore Guild is renowned for its expertise in dragon slaying and offers this premium training to its members only.",
    "shippingDetail": "Ships via Scale Shield Express, a courier known for its speed and reliability. Delivery takes one week within the kingdom.",
    "usage": {
      "activation": "Bonus action or reaction (for Dragon Combat Bonus), once-per-long-rest ability (for Intimidating Roar)",
      "duration": "One week for Dragon Combat Bonus; until end of next short rest or long rest for Intimidating Roar",
      "endsWhen": "Ends when the user gains another level, or after one week for Dragon Combat Bonus; ends with a successful saving throw for Intimidating Roar",
      "charges": "Unlimited uses"
    },
    "priceReason": "This premium training manual is priced at 1000 XP due to its exclusive content and expertise from the Fiore Guild.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T07:55:56.504901+00:00",
    "aiReviewedAt": "2026-07-22T07:55:56.504901+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_fairy_dust_cookies_recipe": {
    "id": "kingdom_fiore_fairy_dust_cookies_recipe",
    "name": "Recipe: Kingdom Fiore Fairy Dust Cookies",
    "description": "Bake these cookies with a sprinkle of Kingdom Fiore's fairy dust, and they'll rise higher than any cloud. These sweet treats are crafted by the very hands of the Fiore Bakers, known for their whimsical magic. Eating one grants you minor levitation (enough to jump 10 feet) and an influx of inspiration, as if the fairies themselves have danced around your mind. A truly delightful treat from a magical land far beyond the horizon.",
    "price": 1000,
    "icon": "🍪",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Minor Levitation",
      "Inspiration Boost"
    ],
    "vendor": "kingdom_fiore_enchantress",
    "shippedBy": "Dusty Dough Dispatch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Levitation",
        "rules": "Eating one cookie grants you minor levitation, allowing you to jump up to 10 feet. This effect lasts for 1 hour or until you fall from the air. There is no save DC required."
      },
      {
        "title": "Inspiration Boost",
        "rules": "Each cookie provides 1d4 inspiration points, which can be used as a d6. This effect occurs once per day, and there are no restrictions on its use."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for even the newest adventurers to follow.",
    "vendorReason": "The Enchantress of Fiore Bakers knows exactly how to blend magic with deliciousness.",
    "shippingDetail": "Cookies are carefully packed in a sealed, insulated container to ensure they arrive fresh and ready for baking.",
    "usage": {
      "activation": "Eat the cookie to activate the effect.",
      "duration": "1 hour or until you fall from the air.",
      "endsWhen": "You jump from the height of levitation or eat another cookie with fairy dust.",
      "charges": "Unlimited, as long as you have ingredients."
    },
    "priceReason": "The rare fairy dust and skilled craftsmanship required to make these cookies justify their fair price in XP.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T07:55:02.743062+00:00",
    "aiReviewedAt": "2026-07-22T07:55:02.743062+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_fairy_dust_sprinkle_service": {
    "id": "kingdom_fiore_fairy_dust_sprinkle_service",
    "name": "Kingdom Fiore Fairy Dust Sprinkle Service",
    "description": "Kingdom Fiore Fairy Dust Sprinkle Service is a delicate sprinkle of shimmering stardust, harvested from the night skies above Fiore. This magical powder grants you one reroll on your next d20 roll, ensuring that luck never fully escapes your grasp. However, it comes with a playful caveat: within the following hour, fairies may decide to pull pranks on you at their whims. This service is crafted by the mischievous Fiore Sprites who have a fondness for adding an extra layer of wonder and unpredictability to every customer's day.",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Reroll",
      "Fairie Pranks"
    ],
    "vendor": "kingdom_fiore_enchantress",
    "shippedBy": "Dust Puff Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reroll",
        "rules": "Activate as a bonus action. Rerolls one d20 roll, using the new result. This effect can only be used once per day."
      },
      {
        "title": "Fairie Pranks",
        "rules": "Within the following hour after use, there is a 15% chance that fairies will decide to play a harmless prank on you, adding an element of whimsy and chaos to your journey. No saving throw applies; this effect is purely for fun."
      }
    ],
    "levelRequirementReason": "This item is accessible early in the adventuring career, as it provides a simple yet effective tool for beginners.",
    "vendorReason": "The Enchantress of Fiore is known for her magical services and has a special relationship with the local sprites who create this dust.",
    "shippingDetail": "Delivered by Dust Puff, ensuring the sprinkle arrives in perfect condition, free from any interference or tampering.",
    "usage": {
      "activation": "Bonus action to activate and use once per day.",
      "duration": "Instantaneous, with effects lasting until the end of your next long rest.",
      "endsWhen": "The effect ends at the start of your next long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item strikes a balance between its utility and rarity, offering significant advantage with an affordable price for early adventurers.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T07:55:22.718088+00:00",
    "aiReviewedAt": "2026-07-22T07:55:22.718088+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_fairy_wand_whisk": {
    "id": "kingdom_fiore_fairy_wand_whisk",
    "name": "Kingdom Fiore Fairy Wand Whisk",
    "description": "The Kingdom Fiore Fairy Wand Whisk is a whimsical tool crafted by the Enchanters of Fiore, shaped like a fairy wand but with a sturdy whisk at its tip. It's made from enchanted oak and dusted with magic powder that can turn ordinary flour into clouds of sugary delight. This enchantment not only grants advantage on baking rolls involving enchantment checks but also imparts a levitating touch to the batter, allowing for airier pastries and cakes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍪",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enchantment Baking Advantage",
      "Levitating Batter"
    ],
    "vendor": "kingdom_fiore_enchantress",
    "shippedBy": "Wand Whisk Wings Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enchantment Baking Advantage",
        "rules": "When used in baking rolls involving enchantment checks, the wielder gains advantage. This effect lasts until the end of their next turn."
      },
      {
        "title": "Levitating Batter",
        "rules": "Activates as a bonus action; causes the batter to levitate for 1 minute or until an attack is made against it. The batter must be within 5 feet of you and not protected by another effect. On a successful DC 14 Strength saving throw, the batter achieves perfect aeration."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to enhance their baking skills with magical assistance.",
    "vendorReason": "The Enchantress of Fiore specializes in items that blend magic and culinary arts, making this wand an ideal product for her shop.",
    "shippingDetail": "Delivered by a fleet of magical hummingbirds; may arrive within 24 hours depending on weather conditions.",
    "usage": {
      "activation": "Bonus action to activate, reaction to reapply if interrupted.",
      "duration": "1 minute per activation, or until an attack is made against the levitating batter.",
      "endsWhen": "The effect ends when a successful DC 14 Strength saving throw is passed or the batter is attacked.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price reflects its rarity and utility, offering an excellent value for bakers seeking to enhance their craft.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T07:55:31.513753+00:00",
    "aiReviewedAt": "2026-07-22T07:55:31.513753+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_fairy_wing_cape": {
    "id": "kingdom_fiore_fairy_wing_cape",
    "name": "Kingdom Fiore Fairy Wing Cape",
    "description": "The Kingdom Fiore Fairy Wing Cape mimics the delicate, iridescent wings of Faerie creatures. When worn, it flutters in the breeze as if alive, granting its wearer a soft, fey presence. The cape allows for effortless gliding up to 15 feet per turn and provides a +2 bonus on Charisma checks made with a fey creature or when performing performances. Crafted by the Fiore Fairies using ancient magic, each wing is imbued with a fragment of faerie essence that can be felt humming within its fabric.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fey Presence",
      "Aerial Glide"
    ],
    "vendor": "kingdom_fiore_forest",
    "shippedBy": "Wing Weave Couriers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Fey Presence",
        "rules": "When worn, the cape grants advantage on Charisma checks made with a fey creature or when performing. This effect lasts for 1 hour and can be activated once per long rest."
      },
      {
        "title": "Aerial Glide",
        "rules": "The wearer can glide up to 15 feet as a bonus action, ending the glide if they make contact with something solid. This ability recharges after a short or long rest."
      }
    ],
    "levelRequirementReason": "This item is crafted for those who are attuned to faerie magic and have the necessary experience to harness its power.",
    "vendorReason": "The Fiore Fairies, masters of their craft, sell only items that align with their natural magic and lore.",
    "shippingDetail": "Ships via Wing Weave Couriers who deliver the cape within a week, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Fey Presence: Once per long rest as an action; Aerial Glide: As a bonus action.",
      "duration": "Fey Presence lasts 1 hour; Aerial Glide ends when contact is made with something solid.",
      "endsWhen": "Fey Presence after one use or at the end of a short or long rest; Aerial Glide ends on contact with a solid object.",
      "charges": "Unlimited uses for Fey Presence and Aerial Glide, recharging after a short or long rest."
    },
    "priceReason": "The price reflects the rarity of materials used and the delicate craftsmanship required to create this ethereal accessory.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T19:50:41.810276+00:00",
    "aiReviewedAt": "2026-07-22T19:50:41.810276+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_fiore_mage_robe": {
    "id": "kingdom_fiore_mage_robe",
    "name": "Kingdom Fiore Mage Robe",
    "description": "The Kingdom Fiore Mage Robe is a woven masterpiece of arcane knowledge, its emerald threads shimmering with the essence of countless spells cast and studied by the academy's finest. This robe not only enhances your Arcana skills but also subtly alters the air around you, making it easier to focus on complex incantations without interruption. The frayed hems, though impractical for daily wear, are a testament to its age and magical significance.",
    "price": 1000,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+1 to Intelligence (Arcana) checks",
      "Minor spell component storage"
    ],
    "vendor": "kingdom_fiore_academy",
    "shippedBy": "Mana-Weave Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Arcane Focus",
        "rules": "While wearing the robe, you gain a +1 bonus to all Intelligence checks and saving throws related to Arcana. This effect is passive until removed by magical means."
      },
      {
        "title": "Component Storage",
        "rules": "The robe can hold one minor spell component for as long as it remains on your person. The component must be of the type that fits into a standard pouch or small bag."
      }
    ],
    "levelRequirementReason": "The basic arcane knowledge and focus required to wear this robe makes it accessible even to fledgling wizards.",
    "vendorReason": "As a leading institution in magical education, the academy is known for providing students with essential tools like this enchanted robe.",
    "shippingDetail": "The Mana-Weave Fold ensures swift delivery of your robe, ensuring it arrives in pristine condition ready for your next spellcasting session.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Permanent until removed by magical means",
      "endsWhen": "Removed by dispelling magic or similar effects",
      "charges": "Unlimited"
    },
    "priceReason": "The robe's enchantments and vendor's reputation justify this price, providing a valuable tool for any budding mage.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T07:55:47.745604+00:00",
    "aiReviewedAt": "2026-07-22T07:55:47.745604+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_gondor_scout_map": {
    "id": "kingdom_gondor_scout_map",
    "name": "Gondorian Scout Map",
    "description": "The Gondorian Scout Map is a leather-bound parchment etched with intricate lines and symbols, crafted by scribes who risked their lives to map the treacherous lands of Gondor's contested regions. It reveals hidden paths and ambush points, offering scouts a critical edge in enemy territory. With each use, it grants advantage on Survival checks to navigate these perilous lands, and once per day, it uncovers three previously unknown strategic locations.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Survival Checks",
      "Reveal Hidden Paths or Ambush Points"
    ],
    "vendor": "kingdom_gondor",
    "shippedBy": "Ranger Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Survival Advantage",
        "rules": "The user gains advantage on Survival checks made to navigate the mapped region. This effect lasts until the end of their next turn."
      },
      {
        "title": "Reveal Strategic Locations",
        "rules": "Once per day, the user can point to a section of the map and learn three hidden paths or ambush points in that area. These locations are chosen by the DM and remain secret until revealed."
      }
    ],
    "levelRequirementReason": "This map is designed for novice scouts who need basic strategic advantages.",
    "vendorReason": "Kingdom Gondor ensures its soldiers and scouts have the best resources to navigate their treacherous borders.",
    "shippingDetail": "Delivered swiftly by trusted couriers who understand the urgency of tactical intelligence.",
    "usage": {
      "activation": "Passive effect; requires no action to activate, but must be used during a Survival check.",
      "duration": "Until the end of their next turn after using it.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Unlimited, as long as it is not destroyed."
    },
    "priceReason": "The map's value lies in its strategic importance and the risk involved in its creation.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T07:56:24.716637+00:00",
    "aiReviewedAt": "2026-07-22T07:56:24.716637+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_rohan_horse_mans_stew_recipe": {
    "id": "kingdom_rohan_horse_mans_stew_recipe",
    "name": "Recipe: Kingdom Rohan Horseman's Stew",
    "description": "The Recipe: Kingdom Rohan Horseman's Stew is a cherished formula handed down from the riders of the Mark. Prepared with rare game and local roots, this stew provides nourishment for both man and beast. Consuming it grants +1 to Constitution saving throws for 4 hours, bolstered by the endurance of Rohan horses. The stew is made by the hands of skilled Rohan cooks who have honed their craft over generations, ensuring each batch is a feast fit for a rider in need.",
    "price": 1000,
    "icon": "🍲",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Hearty Endurance",
      "Rohan Flavor"
    ],
    "vendor": "kingdom_rohan_stables",
    "shippedBy": "Riders Recipe Reel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hearty Endurance",
        "rules": "Consume the stew as an action to gain +1 to Constitution saving throws for 4 hours. This effect ends if you consume another meal that provides a similar benefit."
      },
      {
        "title": "Rohan Flavor",
        "rules": "The stew is prepared with local roots and game, providing a taste unique to the lands of Rohan. Each serving requires 10 minutes to prepare by a trained cook. The flavor enhances the rider's morale, granting advantage on Charisma (Persuasion) checks while consuming it."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for any adventurer to follow but requires skill in preparation.",
    "vendorReason": "The Rohan Stables are trusted sources of sustenance for both riders and their mounts, ensuring that this stew is available.",
    "shippingDetail": "Shipped directly by trusted couriers who deliver the stew within 2 days to any outpost in Rohan.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "4 hours, until you consume another meal with a similar effect.",
      "endsWhen": "Eating another meal that provides a similar benefit or after 4 hours.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare ingredients and time-consuming preparation justify this balanced price.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T07:56:02.388995+00:00",
    "aiReviewedAt": "2026-07-22T07:56:02.388995+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_rohan_horse_whisper_lesson_premium": {
    "id": "kingdom_rohan_horse_whisper_lesson_premium",
    "name": "Kingdom Rohan Horse Whisper Lesson (Premium)",
    "description": "This leather-bound tome, scented of Rohan hay and worn by generations, imparts knowledge of horse whispering. With each lesson, your bond deepens, earning you a loyal steed companion. For one week, you gain advantage on Animal Handling checks with horses, and the loyalty of your current steeds improves by +1. The book's pages are filled with neighing lessons that echo in your mind, ensuring you never forget the art of horse whispering.",
    "price": 1000,
    "icon": "🐎",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Animal Handling Checks",
      "Mount Loyalty Increase"
    ],
    "vendor": "kingdom_rohan_stables",
    "shippedBy": "Rohan Messenger Pigeons",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Animal Handling Checks",
        "rules": "When using this lesson book to interact with horses, you gain advantage on checks made using the Animal Handling skill. This effect lasts for one week from the start of your first lesson."
      },
      {
        "title": "Mount Loyalty Increase",
        "rules": "Your current steed's loyalty rating increases by +1. If you have no steed, this book has no effect until you acquire one. This increase is temporary and reverts after 30 days."
      }
    ],
    "levelRequirementReason": "This lesson provides fundamental knowledge suitable for any adventurer who wishes to bond with horses.",
    "vendorReason": "The Rohan Stables are renowned for their expertise in horse whispering and have mastered the art of teaching this skill.",
    "shippingDetail": "Pigeons ensure swift delivery, often arriving within a week of purchase.",
    "usage": {
      "activation": "Reading the book during your first lesson gains you advantage on Animal Handling checks for one week. The mount loyalty increase is permanent until it decreases to its previous value.",
      "duration": "One week for the advantage; permanent increase in mount loyalty",
      "endsWhen": "The effect ends when either the one-week duration or 30 days pass, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This lesson book is priced at 1000 XP as it provides foundational knowledge in horse whispering and enhances the relationship with steeds.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T07:56:54.275045+00:00",
    "aiReviewedAt": "2026-07-22T07:56:54.275045+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_rohan_mane_braiding": {
    "id": "kingdom_rohan_mane_braiding",
    "name": "Kingdom Rohan Mane Braiding",
    "description": "The Kingdom Rohan Mane Braiding service is a meticulous art practiced by the stablemasters of Rohan. This ritual not only enhances your horse's speed by +10 feet for seven days, but it also instills a newfound sense of elegance and pride in your steed. The mane, carefully braided with traditional Rohan techniques, becomes a beacon of beauty, granting you advantage on Animal Handling checks specifically for horses. However, this vanity comes at the price of daily grooming demands, lest your mount's proud spirit be dampened.",
    "category": "services",
    "price": 1000,
    "icon": "🐴",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Elegant Braiding",
      "Daily Grooming"
    ],
    "vendor": "kingdom_rohan",
    "shippedBy": "Rider Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elegant Braiding",
        "rules": "The horse’s speed increases by +10 feet for seven days. The braids reduce wind resistance and grant advantage on Animal Handling checks specifically with horses."
      },
      {
        "title": "Daily Grooming",
        "rules": "The mount requires daily grooming to maintain its proud spirit; failing this requirement reduces the duration of the speed boost by one day."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers, as it requires no specific combat or skill proficiency.",
    "vendorReason": "The stablemasters of Rohan are renowned for their expertise in equine care and tradition.",
    "shippingDetail": "Expressed delivery with a courier from Rohan, ensuring the mane is fresh and perfectly braided upon arrival.",
    "usage": {
      "activation": "One-time service; requires daily grooming to maintain effects.",
      "duration": "7 days of speed boost when groomed daily.",
      "endsWhen": "Effect expires if daily grooming is neglected.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this service offers a significant and lasting improvement in horse speed while maintaining the horse's vanity.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T07:56:15.759754+00:00",
    "aiReviewedAt": "2026-07-22T07:56:15.759754+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_rohan_mane_braiding_premium": {
    "id": "kingdom_rohan_mane_braiding_premium",
    "name": "Kingdom Rohan Mane Braiding (Premium)",
    "description": "Craft a mane that whispers tales of Rohan's royal heritage. This premium braid is woven with golden thread and requires an artful touch from the hands of the Rohan Royal Stables, enhancing your steed's speed and charisma. For 7 days, your mount gains +15 feet in movement speed and +1 to Charisma checks when dealing with horses; it also becomes a diva, demanding daily grooming. This fine work grants you advantage on Charisma checks involving horses but disadvantage on such checks with other mounts.",
    "category": "premium",
    "price": 1000,
    "icon": "🐴",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Speed Boost",
      "Divine Diva"
    ],
    "vendor": "kingdom_rohan",
    "shippedBy": "Royal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Activate as a bonus action. Your mount's speed increases by +15 feet for 7 days, requiring daily grooming to maintain this effect."
      },
      {
        "title": "Divine Diva",
        "rules": "Your mount gains advantage on Charisma checks with horses and disadvantage on such checks with other mounts. This effect ends if the mount is not groomed daily."
      }
    ],
    "levelRequirementReason": "This upgrade requires a basic understanding of animal care.",
    "vendorReason": "The Rohan Royal Stables are renowned for their expertise in equine grooming and enhance the status of mounts they adorn.",
    "shippingDetail": "Delivered with utmost care using the Royal Courier, ensuring your mount is pampered during transit.",
    "usage": {
      "activation": "Bonus action to braid and apply daily grooming.",
      "duration": "7 days per application; ends if not groomed daily.",
      "endsWhen": "Daily grooming interrupted or neglected.",
      "charges": "Unlimited uses, as long as the mount is cared for properly."
    },
    "priceReason": "The premium quality of materials and the expertise required justify this moderate price point.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T07:56:32.866274+00:00",
    "aiReviewedAt": "2026-07-22T07:56:32.866274+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_rohan_rider_leather": {
    "id": "kingdom_rohan_rider_leather",
    "name": "Kingdom Rohan Rider Leather",
    "description": "The Kingdom Rohan Rider Leather is a meticulously crafted outfit for horse lords, its supple leather seamlessly integrated into the saddle girths and stirrup leathers of Rohan's finest. The leather creaks in perfect harmony with the hooves of a steed, granting the rider unmatched control over their mount. This gear not only enhances your Dexterity by +1 on mounts but also provides you with advantage on Animal Handling checks when interacting with horses.",
    "category": "equipment",
    "price": 1000,
    "icon": "👔",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Control Mount",
      "Silent Creaking"
    ],
    "vendor": "kingdom_rohan_stables",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Control Mount",
        "rules": "You have advantage on Animal Handling checks made to influence or control a horse. This effect lasts for the duration of your mount's presence."
      },
      {
        "title": "Silent Creaking",
        "rules": "The leather outfit emits an imperceptible creak when you and your mount are in motion, creating a bond between rider and steed that is both soothing and inspiring. This effect is passive and does not require any action."
      }
    ],
    "levelRequirementReason": "Crafted by the skilled Rohan Saddlers, this gear demands a certain level of experience to properly appreciate its intricate craftsmanship.",
    "vendorReason": "The Rohan Stables are renowned for their expertise in equine care and equipment, making them the ideal vendor for Kingdom Rohan Rider Leather.",
    "shippingDetail": "Delivered by Swift Wind Courier within a week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until the mount is dismissed or you lose control over it.",
      "endsWhen": "The mount is dismissed or you lose control over it.",
      "charges": "Unlimited"
    },
    "priceReason": "This gear is a rare and finely crafted piece, offering unique benefits to riders of horses. Its price reflects the time and effort required for Rohan Saddlers to create such an item.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T07:56:51.370463+00:00",
    "aiReviewedAt": "2026-07-22T07:56:51.370463+00:00",
    "aiReviewVersion": 1
  },
  "kingdom_rohan_rider_trail_grill": {
    "id": "kingdom_rohan_rider_trail_grill",
    "name": "Kingdom Rohan Rider Trail Grill",
    "description": "The Kingdom Rohan Rider Trail Grill is a saddle-mounted marvel, crafted by the skilled hands of Rohan Saddlers from fire-hardened leather and ironwood. Its swaying design ensures even heat distribution while you're on the move, allowing you to whip up hearty stews in mere minutes during long rides. The grill's quick-heating element reduces cooking time by 50% when used under a saddle blanket or fire pit, providing sustenance without halting your journey.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Grills on horseback",
      "Advantage on mounted prep"
    ],
    "vendor": "kingdom_rohan_stables",
    "shippedBy": "Rider Roast Rig",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sustained Heat",
        "rules": "While the grill is in use, any cooking action within a 10-foot radius of the rider receives advantage on the roll. The effect lasts for as long as the grill remains active and can be used once per short or long rest."
      },
      {
        "title": "Quick Heat",
        "rules": "The grill can quickly heat up to prepare stews in half the normal time, provided it is placed on a fire pit or saddle blanket. This effect is instantaneous but can only be activated once every 24 hours."
      }
    ],
    "levelRequirementReason": "Riders at any level can benefit from the convenience of trail cooking without requiring extensive experience.",
    "vendorReason": "The Rohan Saddlers have long been known for their expertise in saddle-mounted equipment, and this grill is a natural extension of that craft.",
    "shippingDetail": "Shipped with the same care as any Saddler's creation, ensuring it arrives in perfect condition. Delivery typically takes no more than three days.",
    "usage": {
      "activation": "As a bonus action, activate the grill by placing it on fire or a saddle blanket. Deactivate by removing it from heat sources.",
      "duration": "Active for as long as maintained over fire or heat source; ends when extinguished.",
      "endsWhen": "Exhausted after 24 hours of continuous use; requires recharging.",
      "charges": "Unlimited, but only one activation per day."
    },
    "priceReason": "The grill's convenience and the specialized craftsmanship involved make it a fair price for adventurers in need of quick meals on the go.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T07:56:54.479321+00:00",
    "aiReviewedAt": "2026-07-22T07:56:54.479321+00:00",
    "aiReviewVersion": 1
  },
  "kingdoms_dwarves_ale_kettle": {
    "id": "kingdoms_dwarves_ale_kettle",
    "name": "Kingdoms Dwarves Ale Kettle",
    "description": "The Kingdoms Dwarves Ale Kettle, a massive vessel forged from sturdy iron and adorned with runes that whisper tales of ancient battles, stands tall enough to brew stews fit for a king. Its lid is embossed with the symbol of the Dwarven Kettle Smiths, ensuring that the ale remains hot and flavorful throughout. This kettle not only heats evenly but also grants its user advantage on Constitution checks when brewing ale-infused dishes; it's as much a work of art as it is a functional tool.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍺",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Brews large batches",
      "Advantage on Constitution checks for ale"
    ],
    "vendor": "kingdoms_dwarves_tavern",
    "shippedBy": "Foamy Forge Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Large Batch Brewing",
        "rules": "When you use this kettle to brew a meal, the size of the batch increases by one serving. This effect lasts until the meal is consumed or the kettle is cleaned."
      },
      {
        "title": "Constitution Check Advantage",
        "rules": "While holding and using this kettle, you gain advantage on Constitution checks related to ale-infused dishes. This benefit persists for 1 hour after each successful check."
      }
    ],
    "levelRequirementReason": "The kettle's runes require a basic understanding of Dwarven lore.",
    "vendorReason": "The tavern is known for its expert ale brewing and often stocks tools that enhance the quality of their dishes.",
    "shippingDetail": "Ships via Foamy Forge Freight, delivered within 3 days with a guaranteed safe arrival.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous effect; lasts until the meal is consumed or the kettle cleaned",
      "endsWhen": "The meal is consumed or the kettle cleaned",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted by Dwarven Kettle Smiths, this kettle's rarity and craftsmanship justify its price.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T07:57:04.055852+00:00",
    "aiReviewedAt": "2026-07-22T07:57:04.055852+00:00",
    "aiReviewVersion": 1
  },
  "kingdoms_dwarves_ale_stew_recipe": {
    "id": "kingdoms_dwarves_ale_stew_recipe",
    "name": "Recipe: Kingdoms Dwarves Ale Stew",
    "description": "This parchment scroll contains the ancient recipe for Kingdoms Dwarves' Ale Stew. The rich, hearty stew is simmered in potent dwarven ale, known to fortify even the toughest of warriors. This dish not only heals but also grants a temporary boost against poison and disease. Consuming the stew provides a +2 bonus on Constitution saving throws versus poisons or diseases for 8 hours, and it can be prepared in an hour if you have access to dwarven ale and meat ingredients.",
    "price": 1000,
    "icon": "🍲",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Ale Fortification",
      "Dwarven Double-Dose"
    ],
    "vendor": "kingdoms_dwarves_tavern",
    "shippedBy": "Foamy Folio",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ale Fortification",
        "rules": "Eating the stew provides a +2 bonus on Constitution saving throws versus poisons or diseases for 8 hours. This effect ends if you consume another meal that includes ale or meat within this duration."
      },
      {
        "title": "Dwarven Double-Dose",
        "rules": "If consumed by a dwarf, the stew provides double the fortification effects: +4 to Constitution saving throws versus poisons or diseases for 8 hours. This effect is not cumulative with other similar bonuses."
      }
    ],
    "levelRequirementReason": "Even novice adventurers can benefit from the fortifying properties of this stew.",
    "vendorReason": "The dwarven brew cooks at the tavern are the original creators and keepers of this recipe.",
    "shippingDetail": "Ships via Foamy Folio, a reliable courier known for its timely deliveries within the Kingdoms.",
    "usage": {
      "activation": "Eating the stew during an hour-long preparation time.",
      "duration": "8 hours",
      "endsWhen": "Consuming another meal including ale or meat within this duration.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare ingredients and the craftsmanship required to prepare this dish justify its moderate price.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T07:57:09.017925+00:00",
    "aiReviewedAt": "2026-07-22T07:57:09.017925+00:00",
    "aiReviewVersion": 1
  },
  "kingdoms_dwarves_beer_tasting_premium": {
    "id": "kingdoms_dwarves_beer_tasting_premium",
    "name": "Kingdoms Dwarves Beer Tasting (Premium)",
    "description": "The Kingdoms Dwarves Beer Tasting (Premium) is a handcrafted set of four rare dwarven ales, each imbued with the essence of ancient stone and hearty lore. The first sip grants you resistance to poison for eight hours, while the second fills your heart with fortitude by +2 to Constitution saving throws for an entire day. Drink it wisely, as the next morning's hangover brings a risk of disadvantage on Wisdom checks, ensuring you remember this experience. Served only by the Dwarven Brew Guild, these ales are the perfect reward for a worthy explorer.",
    "price": 1000,
    "icon": "🍻",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Poison Resistance",
      "Fortified Constitution"
    ],
    "vendor": "kingdoms_dwarves_tavern",
    "shippedBy": "Keg Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "You gain resistance to poison damage for 8 hours. This effect ends if you take any poison damage or if the duration expires."
      },
      {
        "title": "Fortified Constitution",
        "rules": "For 1 day, you have advantage on Constitution saving throws. If you drink this item more than once per long rest, you gain disadvantage on Wisdom (Perception) checks for 24 hours."
      }
    ],
    "levelRequirementReason": "This tasting set is suitable for all adventurers, as it introduces the essence of dwarven craftsmanship to even the newest explorers.",
    "vendorReason": "The Dwarven Brew Guild ensures only the finest ales are served, making this item exclusive to their tavern.",
    "shippingDetail": "Delivered by the Keg Wagon, each set arrives in its own custom barrel, ensuring freshness and tradition.",
    "usage": {
      "activation": "Consume one ale during a short or long rest.",
      "duration": "Instantaneous; effects last for their specified durations.",
      "endsWhen": "The poison resistance ends when you take poison damage or at the end of the 8-hour period. Fortified Constitution ends after 1 day, and Wisdom checks are disadvantaged if you consume more than once per long rest.",
      "charges": "Unlimited; each ale is consumed individually."
    },
    "priceReason": "The fair value reflects the rare ingredients and ancient dwarven craftsmanship involved in creating this premium tasting set.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T07:58:10.307244+00:00",
    "aiReviewedAt": "2026-07-22T07:58:10.307244+00:00",
    "aiReviewVersion": 1
  },
  "kingdoms_dwarves_forge_apron": {
    "id": "kingdoms_dwarves_forge_apron",
    "name": "Kingdoms Dwarves Forge Apron",
    "description": "This sturdy apron is a masterpiece of Dwarven craftsmanship, forged from enchanted steel and lined with fire-resistant leather. It grants the wearer an edge in crafting by providing advantage on tool proficiency checks for forging tasks. Its pockets are specially designed to hold small tools without causing encumbrance, allowing for swift access during complex projects. The apron's enchantment only activates when exposed to extreme heat, emitting a smoky scent that hints at its fiery history.",
    "price": 1000,
    "icon": "👘",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Crafting Checks",
      "Tool Pockets Without Encumbrance"
    ],
    "vendor": "kingdoms_dwarves_hall",
    "shippedBy": "Hammered Leather Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Edge",
        "rules": "The wearer gains advantage on tool proficiency checks for crafting and forging tasks. This effect lasts until the end of their next long rest."
      },
      {
        "title": "Tool Pockets",
        "rules": "The apron's pockets allow small tools to be held without causing encumbrance, providing a +1 bonus to Dexterity (Stealth) checks made with these tools. This benefit is active while the wearer is equipped and not encumbered."
      }
    ],
    "levelRequirementReason": "This apron's enchantment is subtle yet effective, suitable for beginners who are still learning the finer points of crafting.",
    "vendorReason": "The dwarven hall sells only items that reflect their craftsmanship and heritage, making this apron a natural addition to their inventory.",
    "shippingDetail": "Ships via Hammered Leather's express service, ensuring delivery within one week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until the end of your next long rest or until removed.",
      "endsWhen": "The effect ends when the wearer completes a long rest or removes the apron.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique enchantments and the craftsmanship required for its creation.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T07:57:12.705589+00:00",
    "aiReviewedAt": "2026-07-22T07:57:12.705589+00:00",
    "aiReviewVersion": 1
  },
  "kingdoms_dwarves_rune_stone": {
    "id": "kingdoms_dwarves_rune_stone",
    "name": "Kingdoms Dwarves Rune Stone",
    "description": "The Kingdoms Dwarves Rune Stone, a small but potent talisman imbued with ancient dwarven craftsmanship, is inscribed with runes that shimmer faintly in the light of day and glow softly at night. Crafted from enduring obsidian sourced directly from Mount Ironpeak, this stone not only grants its bearer an aura of protective power (+1 to AC when carried) but also offers a rare glimpse into the heart of dwarven magic. Once per day, the wielder can invoke the rune's ancient spell, casting Shield as if they had prepared it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Shield Aura",
      "Daily Spellcasting"
    ],
    "vendor": "dwarf_elder",
    "shippedBy": "Rune Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shield Aura",
        "rules": "While carrying this stone, you gain a +1 bonus to AC. This effect is always active while the rune stone is on your person."
      },
      {
        "title": "Daily Spellcasting",
        "rules": "Once per day, as an action, you can cast the Shield spell (as if prepared). The spell has no material component and does not require attunement. If the spell is used or fails its save check, you must wait until midnight to use it again."
      }
    ],
    "levelRequirementReason": "This rune stone is crafted for adventurers just starting their journey, providing a balance of defensive and utility magic without overwhelming early-level characters.",
    "vendorReason": "The dwarf elder sells this item as part of her family's legacy, ensuring that the secrets of dwarven craftsmanship are shared with those who can appreciate them.",
    "shippingDetail": "The rune stone is carefully packed in a sturdy leather bag lined with obsidian chips to protect it during transit.",
    "usage": {
      "activation": "Action or Reaction (Shield casting)",
      "duration": "Instantaneous (Shield spell duration)",
      "endsWhen": "Used, failed save check, or until you take damage",
      "charges": "1 daily use"
    },
    "priceReason": "The rune stone's price reflects the expertise of Kingdoms Dwarves in crafting protective magic and its rarity as a direct product from Mount Ironpeak.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T07:57:34.075933+00:00",
    "aiReviewedAt": "2026-07-22T07:57:34.075933+00:00",
    "aiReviewVersion": 1
  },
  "kirby_inhale_mask": {
    "id": "kirby_inhale_mask",
    "name": "Kirby Inhale Mask",
    "description": "The Kirby Inhale Mask is a peculiar device that, when donned, allows its wearer to briefly absorb an enemy's abilities. The mask physically distorts around the face of the user, creating a seal from which tendrils extend, mimicking the target’s power. It can only copy abilities from foes with a Challenge Rating (CR) no higher than 5, and the effects are temporary—lasting exactly ten minutes before fading away. Those who wear it must make a Wisdom saving throw (DC 16); failure means they are temporarily dizzy for an hour.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😷",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Inhale Enemy",
      "Temporary Dizziness"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Puff Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inhale Enemy",
        "rules": "As a bonus action, the wearer can absorb one enemy's ability. The effect lasts for 10 minutes and functions as if the wearer had used that ability once. The target must be within reach (5 feet) of the user. This ability only works on creatures with a Challenge Rating (CR) no higher than 5. The user must make a Wisdom saving throw (DC 16); failure results in temporary dizziness for an hour."
      },
      {
        "title": "Temporary Dizziness",
        "rules": "If the save is failed, the wearer becomes incapacitated and falls prone until the start of their next turn after the effect ends. This does not stack with other effects that cause dizziness or similar conditions."
      }
    ],
    "levelRequirementReason": "This mask can be used by any character regardless of level, but it requires a basic understanding of how to wear and activate it.",
    "vendorReason": "Comet Observatory often deals in unique items that grant users an edge over their foes, making the Kirby Inhale Mask a fitting addition to their inventory.",
    "shippingDetail": "The mask is shipped in a special container with a custom-made inhaler, ensuring it arrives undamaged and ready for use.",
    "usage": {
      "activation": "Bonus action to inhale an enemy’s ability.",
      "duration": "10 minutes per use.",
      "endsWhen": "After 10 minutes or when the user makes a failed Wisdom saving throw (DC 16).",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The Kirby Inhale Mask is priced at 1000 XP due to its unique and limited utility, as well as the challenge it presents for users who must successfully save against a moderate DC.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T07:57:27.928602+00:00",
    "aiReviewedAt": "2026-07-22T07:57:27.928602+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_boos_real_estate_key": {
    "id": "kivotos_boos_real_estate_key",
    "name": "Boos Real Estate Key",
    "description": "The Boos Real Estate Key is a tarnished brass key with an eerie glow. It opens only haunted properties, granting access to shadowy hallways and whispering walls. Upon use within a haunted property, there's a 50% chance of triggering a Boos event that can either bring prosperity or chaos. The key also subtly increases the value of any real estate by 10%, but it causes minor temporal distortions in the area for 24 hours after its activation.",
    "price": 1000,
    "icon": "🏠",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Haunted Property Access",
      "Boos Event Trigger"
    ],
    "vendor": "kivotos",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Haunted Property Access",
        "rules": "This key provides access to haunted properties. Once used, it grants a +10% bonus to the property’s value gain for 24 hours. The effect is passive and does not require an action."
      },
      {
        "title": "Boos Event Trigger",
        "rules": "Upon use within a haunted property, there's a 50% chance of triggering a Boos event that can either bring prosperity or chaos. This effect lasts for 24 hours after the key is used and has no save DC."
      }
    ],
    "levelRequirementReason": "This key is accessible to lower-level characters as it introduces them to the concept of managing real estate with a touch of the supernatural.",
    "vendorReason": "Kivotos, known for their unique and whimsical items, offers this key among their collection of quirky real estate accessories.",
    "shippingDetail": "Ships via Goomba Ground Delivery, known for its reliable service in transporting magical artifacts.",
    "usage": {
      "activation": "Passive effect upon use within a haunted property.",
      "duration": "24 hours from the moment of activation.",
      "endsWhen": "The effects expire after 24 hours or if the key is used again.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects a balance between its unique abilities and the risk it introduces, making it accessible yet valuable for players of all levels.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T07:57:29.051470+00:00",
    "aiReviewedAt": "2026-07-22T07:57:29.051470+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_doughnut_hole_circuit": {
    "id": "kivotos_doughnut_hole_circuit",
    "name": "Void Siphon Injector",
    "description": "The Void Siphon Injector is a compact device made from darkened metal alloyed with cosmic particles. Crafted by Noki Coral Fleet, it channels energy directly from the Doughnut Hole's void. When activated, it grants you 10% damage resistance and allows you to draw power from the cosmic rift, but beware: after 30 seconds, you must endure a surge of existential dread that can destabilize your mind if not managed.",
    "price": 1000,
    "icon": "🍩",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Draws Power",
      "Damaged Mind"
    ],
    "vendor": "kivotos",
    "shippedBy": "Noki Coral Fleet Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Draws Power",
        "rules": "Activates as an action, providing damage resistance. Lasts until the end of your next turn."
      },
      {
        "title": "Damaged Mind",
        "rules": "Triggers after 30 seconds and imposes a level DC 15 Wisdom saving throw. On failure, you are stunned for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 7th level to stabilize the device's unstable energy field.",
    "vendorReason": "Kivotos specializes in exotic and arcane devices, including those that interact with cosmic phenomena.",
    "shippingDetail": "Ships via interdimensional courier, ensuring secure delivery within a week.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effects expire at the start of your next turn or if you are stunned by the Damaged Mind effect",
      "charges": "Unlimited, but only one use per 24 hours"
    },
    "priceReason": "Balanced as a powerful tool for cosmic manipulation within an epic rarity.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T07:57:43.045893+00:00",
    "aiReviewedAt": "2026-07-22T07:57:43.045893+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_ember_soul_ring": {
    "id": "kivotos_ember_soul_ring",
    "name": "Ember Soul Ring",
    "description": "The Ember Soul Ring glows faintly with the spirit of a fallen fire elemental, channeling its final breath into your hand. This ring grants you a fiery edge to your strikes, causing nearby enemies to catch alight. It also increases your stamina regeneration by 10% per level, ensuring you can push through battles without tiring. However, it loses power if worn during a prolonged rest and can only be attuned to one specific fire elemental.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fire Edge Strikes",
      "Stamina Boost"
    ],
    "vendor": "kivotos",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fire Edge Strikes",
        "rules": "When you make a melee attack while wearing the Ember Soul Ring, you deal an additional 1d4 fire damage. Nearby enemies within 5 feet of you have disadvantage on their next action or reaction until the start of your next turn."
      },
      {
        "title": "Stamina Boost",
        "rules": "While attuned to a specific fire elemental, you gain a +2 bonus to Stamina (Hit Points) rolls and increase your stamina regeneration by 10% per level. This effect persists for one hour after the ring is removed."
      }
    ],
    "levelRequirementReason": "The Ember Soul Ring requires a minimum of 6th level to channel the fiery spirit effectively.",
    "vendorReason": "Kivotos, known for their enchanted items and exotic gear, carries this ring due to its unique fire elemental attunement feature.",
    "shippingDetail": "The Ember Soul Ring is carefully packed with flame-retardant materials to ensure safe delivery.",
    "usage": {
      "activation": "Instantaneous when worn and attuned to a specific fire elemental.",
      "duration": "Lasts until the start of your next turn or until you remove it, whichever comes first.",
      "endsWhen": "The ring loses power if worn during a prolonged rest or if its attunement is broken.",
      "charges": "Unlimited; regains power when attuned to a new fire elemental."
    },
    "priceReason": "The Ember Soul Ring provides significant combat advantages and unique abilities, making it worth the price in XP.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T07:58:44.551719+00:00",
    "aiReviewedAt": "2026-07-22T07:58:44.551719+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_fawful_talisman": {
    "id": "kivotos_fawful_talisman",
    "name": "Mechanical Fury Amulet",
    "description": "The Mechanical Fury Amulet is a cursed talisman crafted by the Chaos Dwarfs, its core a heart of forgespun metal. This amulet amplifies Fawful's machines' power, turning them into relentless, rage-fueled engines of destruction. Wearers feel their sanity erode over time as they are drawn deeper into chaos; after 20 minutes, they must make a DC 16 Wisdom saving throw or become enraged, attacking the nearest creature for 1d4+5 damage until calmed by another ally's action.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Amplifies Fawful machines' power",
      "Causes wearer to lose sanity"
    ],
    "vendor": "Kivotos",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Machine Amplification",
        "rules": "Activates on contact with a mechanical enemy, granting the wearer advantage on attack rolls and increasing damage by +50%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Sanity Loss",
        "rules": "After 20 minutes of wearing the amulet, the wearer must succeed on a DC 16 Wisdom saving throw or become enraged. The enraged state lasts for 1 minute and ends early if the wearer is calmed by another creature's action."
      }
    ],
    "levelRequirementReason": "The intricate enchantments require a level 5 character to wield effectively.",
    "vendorReason": "Kivotos, known for their dark and cursed artifacts, is the only vendor capable of acquiring such an item.",
    "shippingDetail": "Ships via Paratroopa Air Express with a two-day delivery time.",
    "usage": {
      "activation": "Instantaneous activation on contact with mechanical enemies.",
      "duration": "Until the start of your next turn after activation.",
      "endsWhen": "The enraged state ends when calmed by another creature's action or if the wearer makes a successful Wisdom saving throw.",
      "charges": "Unlimited, but limited to one use per 24 hours."
    },
    "priceReason": "Balanced with a moderate price tag reflecting its cursed nature and limited usefulness in combat.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T19:50:49.148874+00:00",
    "aiReviewedAt": "2026-07-22T19:50:49.148874+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_feywild_keychain": {
    "id": "kivotos_feywild_keychain",
    "name": "Feywild Keychain",
    "description": "The Feywild Keychain, a delicate silver charm with vines entwined around it, whispers secrets of the fey realms. It grants temporary access to hidden courts and trickster spirits within Gehenna Academy, but its power is as fickle as the wind: misuse can trap you in a loop of illusions for an hour. Its charm is both boon and bane—careful use can unlock secret paths or trigger time distortions on foes, while neglecting it could lead to endless loops of confusion and hallucinations.",
    "price": 1000,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Unlocks Feywild Paths",
      "Distorts Time on Enemies"
    ],
    "vendor": "kivotos",
    "shippedBy": "Swift Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Unlock Feywild Paths",
        "rules": "Activates as a bonus action within a Feywild zone. Grants the wearer advantage on Stealth checks for 10 minutes, and once per long rest can be used to reveal hidden paths or secret doors. Ends when the effect is used."
      },
      {
        "title": "Distort Time on Enemies",
        "rules": "Activates as an action within a 30-foot radius. There is a 25% chance to cause minor time distortion, forcing enemies to make a DC 14 Dexterity saving throw or move at half speed for 1 minute. Ends when the effect is used."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Stealth to effectively use this keychain.",
    "vendorReason": "Kivotos, a master of arcane relics, specializes in items that bridge different realms.",
    "shippingDetail": "Ships within 24 hours with priority delivery to Feywild zones.",
    "usage": {
      "activation": "Bonus action or reaction (at the wearer's discretion)",
      "duration": "10 minutes per use, ends when used",
      "endsWhen": "The effect is used",
      "charges": "Unlimited, but can only be activated once every long rest"
    },
    "priceReason": "Balanced to ensure it remains a valuable tool without overshadowing other equipment.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:58:26.817395+00:00",
    "aiReviewedAt": "2026-07-22T07:58:26.817395+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_gun_glow_core": {
    "id": "kivotos_gun_glow_core",
    "name": "Gun Glow Core",
    "description": "The Gun Glow Core is a pulsing, ethereal core that glows faintly when inserted into a firearm, bathing it in an otherworldly luminescence. Crafted from ancient Oracle tech, this core subtly enhances the accuracy of any spellcaster's shots by +10%, ensuring their precise strikes are both deadly and dazzling. Once activated, the core recharges itself every 20 seconds, but each use costs 1000 Beanbean coins to maintain its ethereal energy. If overcharged, it may induce fleeting hallucinations, making it a risky tool for those who seek its power.",
    "price": 1000,
    "icon": "🎯",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Enhances weapon accuracy",
      "Bathes in bioluminescent glow"
    ],
    "vendor": "kivotos",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weapon Accuracy Boost",
        "rules": "When the Gun Glow Core is inserted into a firearm, it grants a +10% bonus to the spellcaster's attack rolls for as long as the weapon remains active. The core recharges itself every 20 seconds but requires a cost of 1000 Beanbean coins per recharge."
      },
      {
        "title": "Faint Bioluminescence",
        "rules": "The firearm emits a faint, ethereal glow when the core is activated. This glow does not affect combat visibility or provoke attacks of opportunity. The core may induce short-term hallucinations if overcharged."
      }
    ],
    "levelRequirementReason": "This item's power is balanced for beginning spellcasters, making it accessible to those just starting their journey into the arcane arts.",
    "vendorReason": "Kivotos specializes in recovered and repurposed magical artifacts, and this core fits perfectly within their inventory of unique items.",
    "shippingDetail": "The core is carefully wrapped to ensure it arrives undamaged, but the fragile nature of the core means that delays may occur during shipping.",
    "usage": {
      "activation": "Inserted into a firearm as an action.",
      "duration": "Instantaneous; recharges every 20 seconds.",
      "endsWhen": "The core self-destructs after 5 charges if exposed to Gehenna Academy magic.",
      "charges": "Limited to 5 uses before self-destruction."
    },
    "priceReason": "The Gun Glow Core's unique properties and limited recharge cycles justify its price, making it a valuable but not overpowered tool for spellcasters.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:58:41.393969+00:00",
    "aiReviewedAt": "2026-07-22T07:58:41.393969+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_halos_battlepass": {
    "id": "kivotos_halos_battlepass",
    "name": "Halos Battle Pass",
    "description": "The Halos Battle Pass, a ceremonial wrist token crafted from the bones of Gehenna Academy's fallen students, pulses with a radiant light that can be seen for miles around. Engraved with the Oracle’s sigil and rumored to be connected to a larger necromantic vessel, it grants temporary invincibility during combat, making the wearer immune to all damage for 10 seconds at the cost of a hefty price. The pass's power comes with a warning: overuse leads to minor nausea.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Invulnerability",
      "Resource Cost"
    ],
    "vendor": "kivotos",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "Activates as a reaction when the wearer is hit by an attack. Grants temporary invincibility, making the wearer immune to all damage for 10 seconds. The effect can only be used once per chapter of the WarioWare arc."
      },
      {
        "title": "Resource Cost",
        "rules": "Activation consumes 50 Beanbean coins from the user's inventory. If activated more than once in a single day, it causes minor nausea lasting until the start of the next long rest."
      }
    ],
    "levelRequirementReason": "Only those with sufficient experience and understanding to handle such an ancient artifact are permitted to use the Halos Battle Pass.",
    "vendorReason": "Kivotos, a reputable vendor of Gehenna Academy relics, ensures that only those who have earned it can purchase this powerful token.",
    "shippingDetail": "Ships via Dry Bones Dead Drop with next-day delivery to any location within the academy grounds.",
    "usage": {
      "activation": "Reaction",
      "duration": "10 seconds",
      "endsWhen": "The effect ends if the wearer is no longer engaged in combat or if they take damage.",
      "charges": "Unlimited, but requires a daily cooldown of at least 24 hours between activations."
    },
    "priceReason": "Given its rarity and the resources required to craft it, the Halos Battle Pass is priced fairly within the confines of the academy's economy.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T07:59:11.326091+00:00",
    "aiReviewedAt": "2026-07-22T07:59:11.326091+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_halos_edge": {
    "id": "kivotos_halos_edge",
    "name": "Halos Edge",
    "description": "The Halos Edge is a ceremonial saber forged from the very essence of Delfino's halo. Its hilt glows faintly with authority, and its blade seems to shimmer as if made of starlight. This weapon grants wielders an aura of command that intimidates foes and boosts their own prowess in combat. Only those who have earned the halo of authority are permitted to carry this saber, which is said to have been crafted by the very hands of the Delfino Regency itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "+10% Attack Speed",
      "Immunity to Stun"
    ],
    "vendor": "kivotos",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Attack Speed",
        "rules": "While wielding the Halos Edge, you gain a +10% bonus to your attack speed. This effect is passive and does not require activation."
      },
      {
        "title": "Stun Immunity",
        "rules": "You are immune to any effects that would stun you while in combat. This immunity persists for the duration of one short rest or until you take damage."
      }
    ],
    "levelRequirementReason": "Anyone can be trained to wield authority, though not all possess it.",
    "vendorReason": "Kivotos is known for its diverse and unique wares, including items of great historical significance like the Halos Edge.",
    "shippingDetail": "The saber may arrive slightly dulled due to its fragile nature but can be easily restored with a week's worth of in-game time or an equivalent amount of materials.",
    "usage": {
      "activation": "Passive",
      "duration": "Until you take damage or complete one short rest",
      "endsWhen": "You take damage or finish a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Halos Edge's price reflects its historical significance and the skill required to wield it properly.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:58:56.622173+00:00",
    "aiReviewedAt": "2026-07-22T07:58:56.622173+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_halos_halo_cannon": {
    "id": "kivotos_halos_halo_cannon",
    "name": "Halos Halo Cannon",
    "description": "The Halos Halo Cannon is a weapon forged from the essence of a student’s halo. Crafted by the enigmatic Skaven, this device channels the concentrated aura energy of its wielder into a powerful and dazzling beam. When fired, it leaves behind an awe-inspiring visual effect that can momentarily blind foes within 30 feet. However, prolonged use drains the user's personal halo energy, reducing their movement speed by 20% during each firing.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Concentrated Aura Beam",
      "Visual Blind Effect"
    ],
    "vendor": "kivotos",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Concentrated Aura Beam",
        "rules": "When activated as a bonus action, the weapon fires a beam of concentrated aura energy. The target must succeed on a Dexterity saving throw (DC 13) or be blinded until the start of your next turn. This effect ends if you are incapacitated."
      },
      {
        "title": "Visual Blind Effect",
        "rules": "The firing of the weapon creates an intense visual effect that temporarily blinds creatures within 30 feet who observe it, for a duration of up to one minute per use. The target can make a Wisdom saving throw (DC 13) to end this effect early."
      }
    ],
    "levelRequirementReason": "This weapon requires the user to be at least first level to channel its concentrated aura effectively.",
    "vendorReason": "Kivotos, known for their unique magical trinkets and educational artifacts, offers this item as a tool for students of magic and combat alike.",
    "shippingDetail": "The cannon is shipped via Dry Bones Dead Drop, ensuring swift delivery even to the most remote locations.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Effect lasts until start of next turn or ends early)",
      "endsWhen": "Target saving throw succeeds, incapacitation, or end of your turn",
      "charges": "3 charges"
    },
    "priceReason": "The weapon's unique construction and magical properties justify a fair price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:59:00.809215+00:00",
    "aiReviewedAt": "2026-07-22T07:59:00.809215+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_halos_hunter_gear": {
    "id": "kivotos_halos_hunter_gear",
    "name": "Halo Hunter Gear",
    "description": "Halo Hunter Gear is a tactical armor designed for students wielding guns and halos. Crafted from reinforced steel and enchanted with the spirit of vigilant hunters, this armor grants +2 to all ranged attacks and +10% chance to dodge enemy projectiles. The wearer's movements are slightly reduced but they can wear it alongside any gun type. It also absorbs 100 points of damage from environmental hazards, making survival in harsh conditions a bit easier.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎯",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Ranged Attack Bonus",
      "Projectile Dodging Chance"
    ],
    "vendor": "kivotos",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Ranged Attack Bonus",
        "rules": "Activates as a bonus action. Grants +2 to all ranged attack rolls for the duration of one combat round."
      },
      {
        "title": "Projectile Dodging Chance",
        "rules": "Passive effect that increases the user's chance to dodge enemy projectiles by 10%. Lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This armor is designed for students who have already demonstrated proficiency with ranged weapons and halos.",
    "vendorReason": "Kivotos, a vendor known for its academic gear, offers this product to support the tactical training of its student clientele.",
    "shippingDetail": "Ships within one week with Goomba Ground Delivery. Expedited shipping is available at an additional cost.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One combat round",
      "endsWhen": "At the start of your next turn or if you remove the armor",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique enchantments and materials used in its construction, making it a valuable yet balanced addition to any student's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T07:59:27.488569+00:00",
    "aiReviewedAt": "2026-07-22T07:59:27.488569+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_isle_delfino_item": {
    "id": "kivotos_isle_delfino_item",
    "name": "Shine Sprite Charm",
    "description": "The Shine Sprite Charm gleams softly, a token of tropical magic that dances in your palm like a living light. Crafted by the elusive and mischievous Shine Sprites from their hidden islands, it grants the wearer a fleeting moment of invincibility within the warm embrace of the sun-kissed tropics. The charm's glow intensifies as you step into balmy breezes, but beware—its power is not without consequence; after use, you'll feel a gentle lightheadedness that persists for several minutes.",
    "price": 1000,
    "icon": "🌴",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Invulnerability",
      "Temporary Dizziness"
    ],
    "vendor": "kivotos",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "When activated as an action within tropical zones, the charm grants you temporary invulnerability to all damage for 30 seconds. This effect ends if you leave the tropical zone or take any damage."
      },
      {
        "title": "Temporary Dizziness",
        "rules": "For every hour after using the charm, you suffer from a mild dizziness that reduces your movement speed by half until it wears off on its own."
      }
    ],
    "levelRequirementReason": "The charm’s power is accessible to all adventurers, as its magic is simple yet potent.",
    "vendorReason": "Kivotos, known for their connections with otherworldly beings, have a special relationship with the elusive Shine Sprites.",
    "shippingDetail": "The Paratroopas deliver the charm swiftly via their fleet of colorful mailplanes, but only within tropical regions.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "Leaving a tropical zone or taking damage",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and the power it wields, combined with its magical origin from the elusive Shine Sprites, justify this price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T07:59:55.827705+00:00",
    "aiReviewedAt": "2026-07-22T07:59:55.827705+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_crossworld": {
    "id": "kivotos_item_crossworld",
    "name": "Noki Bay Linkstone",
    "description": "The Noki Bay Linkstone is a small, glowing stone that glints with the light of both Kivotos and Isle Delfino. Crafted by Paratroopa Air using ancient crossworld magic, this artifact allows its bearer to instantly teleport between these twin realms. The stone hums softly when activated, requiring a specific chant from Paratroopa Air's archives to unlock its power. Each use exhausts the stone for 24 hours, ensuring it is not overused.",
    "price": 1000,
    "icon": "🌊",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Teleports user to any location in Kivotos or Isle Delfino",
      "Requires activation through an ancient chant"
    ],
    "vendor": "kivotos",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crossworld Teleportation",
        "rules": "When activated, the Noki Bay Linkstone allows the user to teleport instantly between Kivotos and Isle Delfino. This effect has a range of 150 feet and lasts until the destination is reached. The use ends when the teleportation completes or if the caster retracts the effect using their action."
      },
      {
        "title": "Chant Requirement",
        "rules": "The stone can only be activated by reciting the ancient chant provided in Paratroopa Air's archives. This requires a successful Intelligence (Arcana) check with a DC of 15, representing the complexity and rarity of the forgotten spell."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventurers as it provides a unique and powerful tool without being overpowered.",
    "vendorReason": "Kivotos, with its strong ties to both realms, is the logical vendor for this artifact.",
    "shippingDetail": "The stone comes with a protective casing and is delivered by Paratroopa Air's swift mail service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Teleportation completes or caster retracts the effect",
      "charges": "Uses"
    },
    "priceReason": "The balanced price reflects its epic rarity and unique utility, providing adventurers with a powerful tool without breaking the game balance.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T07:59:16.232043+00:00",
    "aiReviewedAt": "2026-07-22T07:59:16.232043+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_name_here": {
    "id": "kivotos_item_name_here",
    "name": "Halo Gunner Gear",
    "description": "Halo Gunner Gear, forged by Chaos Dwarfs from twisted starlight and dark iron, grants its wearer divine accuracy in combat but at a terrible cost. When the gears align, you see the battlefield as it truly is—only for your mind to fracture into hallucinations that distort reality around you. This cursed armor enhances firearm damage by +20% and increases hit chance with perfect aim by +10%, but beware; each shot fired risks triggering a momentary disorientation that leaves you staggered.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Damage with Firearms",
      "+10% Chance to Hit Targets with Perfect Aim"
    ],
    "vendor": "kivotos",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Perfect Aim Boost",
        "rules": "Whenever the wearer takes a bonus action to aim and fire a firearm, they have advantage on their attack rolls for that turn. This effect lasts until the end of their next turn."
      },
      {
        "title": "Hallucination Risk",
        "rules": "After each successful hit with a firearm, there is a 25% chance (DC 14 Dexterity saving throw) that the wearer becomes staggered for 1 minute. This effect can occur multiple times per day."
      }
    ],
    "levelRequirementReason": "The arcane and dark energies of Halo Gunner Gear are potent, requiring a minimum level to properly channel its power.",
    "vendorReason": "Kivotos, the master of cursed artifacts, has adapted this gear to offer players an edge in combat at the cost of their sanity.",
    "shippingDetail": "The armor arrives wrapped in shadowy fabrics; any damage during transit is considered a failed save against a DC 15 Constitution saving throw.",
    "usage": {
      "activation": "Passive effect active when wearing the gear.",
      "duration": "Instantaneous for each successful hit with firearms, lasts until end of next turn.",
      "endsWhen": "The wearer no longer has ammunition to shoot or is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this cost due to its potent effects and the risk it poses, making it a rare but worthwhile investment for seasoned adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:59:40.704158+00:00",
    "aiReviewedAt": "2026-07-22T07:59:40.704158+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_lothlorien_treasure_box": {
    "id": "kivotos_lothlorien_treasure_box",
    "name": "Lothlorien Treasure Box",
    "description": "The Lothlorien Treasure Box is a meticulously crafted wooden casket adorned with intricate carvings of elven lore. When opened, it reveals either an ancient elven weapon or a spell scroll, both imbued with the spirit of Lothlórien’s past. The box grants temporary immunity to fear effects and may trigger vivid memory fragments from the forest’s history. Beware, for within lies a cursed relic that could unleash haunting visions upon the unwary.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Elven Artifact",
      "Cursed Relic"
    ],
    "vendor": "kivotos",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "The user gains temporary immunity to fear effects for an hour. The effect ends if the user enters a state of panic or is exposed to a more potent fear-inducing effect."
      },
      {
        "title": "Memory Fragment",
        "rules": "When opened, there’s a 50% chance that a memory fragment from Lothlórien triggers, causing the user to remember an event from the forest's past. This memory does not require a saving throw and lasts for one minute."
      }
    ],
    "levelRequirementReason": "The box requires minimal manipulation to open but holds powerful relics that are best used by those who can handle such potent magic.",
    "vendorReason": "Kivotos, a master collector and historian, specializes in ancient artifacts from Lothlórien and other forgotten realms.",
    "shippingDetail": "The box is carefully packed to ensure it arrives intact, but the journey may take longer than usual due to Koopa's unpredictable schedules.",
    "usage": {
      "activation": "Opens as a free action upon reaching level 1 or higher.",
      "duration": "One use only; immunity and memory effect are one-time events.",
      "endsWhen": "The effects expire naturally after the specified duration, or if the box is resealed improperly.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's rarity and the inherent risks of its contents.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T07:59:31.465771+00:00",
    "aiReviewedAt": "2026-07-22T07:59:31.465771+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_mordor_metal_ingot": {
    "id": "kivotos_mordor_metal_ingot",
    "name": "Mordor Metal Ingot",
    "description": "The Mordor Metal Ingot is a dark and twisted ore harvested from the forges of Barad Dûr, where it was once used to forge weapons that strike with malevolent intent. Its surface glows faintly with an eerie black aura, hinting at the corruption that taints its origins. This cursed metal can be tempered into deadly weapons or armor that exude a chilling presence, but only if crafted by a skilled blacksmith who dares to wield the blacksmith’s curse, increasing weapon damage by 10%. Wearing such gear is not without risk; it may cause minor corruption over time, affecting the wearer's mind and soul.",
    "price": 1000,
    "icon": "⚒",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Corruption Aura",
      "Weapon Damage Boost"
    ],
    "vendor": "kivotos",
    "shippedBy": "Team Rocket",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Corruption Aura",
        "rules": "The wearer of armor made from Mordor Metal Ingot is subjected to a minor corruption effect. This aura manifests as a -1 penalty on Wisdom saving throws for the duration of one day after being worn, unless the wearer succeeds on a DC 15 Constitution saving throw."
      },
      {
        "title": "Weapon Damage Boost",
        "rules": "When crafted into weapons, Mordor Metal Ingot increases the weapon's base damage by +1d6. This effect is applied as long as the weapon remains in use and does not require activation; however, it requires a blacksmith’s curse to be present during crafting."
      }
    ],
    "levelRequirementReason": "Crafting with Mordor Metal Ingot requires a high degree of skill and knowledge of its dark history.",
    "vendorReason": "Kivotos specializes in rare and exotic materials, making them the perfect vendor for this cursed metal.",
    "shippingDetail": "Due to the volatile nature of Mordor Metal Ingot, it is shipped exclusively by Team Rocket, known for their reliable and specialized delivery services.",
    "usage": {
      "activation": "Instantaneous; requires blacksmith’s curse during crafting",
      "duration": "Persistent while equipped or in use",
      "endsWhen": "Wearing the armor off or weapon discarded; corruption effect ends upon successful saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "The price is balanced to reflect the rare and dangerous nature of Mordor Metal Ingot, as well as its unique crafting requirements.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:59:45.182754+00:00",
    "aiReviewedAt": "2026-07-22T07:59:45.182754+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_remicool_efficiency_core": {
    "id": "kivotos_remicool_efficiency_core",
    "name": "Remi Coil Turbo Core",
    "description": "The Remi Coil Turbo Core hums with the raw power of Wario Inc's airship technology, its sleek core glowing faintly as it channels an unseen force. This upgrade from the Remi Coil line not only rockets your vessel to new heights, reducing fuel consumption by a staggering 40%, but also subtly warps space-time in a way that can lead to minor engine glitches—though these are more of a thrilling adventure than a hazard.",
    "price": 1000,
    "icon": "🚀",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Increased Airship Speed",
      "Fuel Efficiency Boost"
    ],
    "vendor": "kivotos",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Airship Speed",
        "rules": "Activates as an action, this core boosts the airship's speed by +25%. The effect lasts for 1 hour and requires a successful DC 15 Constitution saving throw or risk minor engine glitches that reduce speed by 10% until repaired."
      },
      {
        "title": "Fuel Efficiency Boost",
        "rules": "This core reduces fuel consumption by 40% while active. The effect is passive but can be toggled on and off as an action. It recharges after a long rest."
      }
    ],
    "levelRequirementReason": "Beginners can now affordably enhance their airships, making it more accessible for all travelers.",
    "vendorReason": "Kivotos, known for their extensive airship services and upgrades, offers the Remi Coil Turbo Core to help pilots maximize efficiency.",
    "shippingDetail": "Ships via the Noki Coral Fleet with expedited service within a week of purchase.",
    "usage": {
      "activation": "Action or Reaction (to toggle fuel efficiency)",
      "duration": "1 hour for speed boost; passive and rechargeable",
      "endsWhen": "Restored to full functionality after a long rest; glitches subside on their own over time",
      "charges": "Unlimited, recharges daily"
    },
    "priceReason": "Balanced at this price point to ensure it's a worthwhile upgrade for less experienced pilots.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T08:00:44.405300+00:00",
    "aiReviewedAt": "2026-07-22T08:00:44.405300+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_shy_guys_delivery_torch": {
    "id": "kivotos_shy_guys_delivery_torch",
    "name": "Shy Guys Delivery Torch",
    "description": "The Shy Guys Delivery Torch, made by Noki Coral Fleet, is a courier tool that glows with an eerie blue light when used. It grants a +1 bonus to Dexterity (Stealth) checks for the next hour and causes deliveries to arrive exactly one minute earlier than scheduled, up to once per day. The torch can only be used by Shy Guys couriers, adding a layer of mystique to their chaotic deliveries.",
    "price": 1000,
    "icon": "🔥",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Early Delivery",
      "Stealth Boost"
    ],
    "vendor": "kivotos",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Early Delivery",
        "rules": "When the delivery torch is activated, the next delivery for the Shy Guys courier arrives exactly one minute earlier than scheduled. This effect can be used once per day."
      },
      {
        "title": "Stealth Boost",
        "rules": "For the hour after activation, the user gains a +1 bonus to Dexterity (Stealth) checks. This boost ends when the torch is extinguished or if the courier takes any action that would normally end concentration on an effect."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it enhances a common activity for Shy Guys couriers.",
    "vendorReason": "Kivotos, known for its quirky and unconventional items, sells the Shy Guys Delivery Torch to keep its inventory fresh with unique courier tools.",
    "shippingDetail": "Shipped directly by Noki Coral Fleet, ensuring the torch arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One hour after activation",
      "endsWhen": "Extinguished or if concentration is ended on any effect",
      "charges": "Unlimited"
    },
    "priceReason": "The Shy Guys Delivery Torch provides a unique and highly sought-after courier advantage, making it a valuable item for those in the delivery business.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-22T08:00:08.564852+00:00",
    "aiReviewedAt": "2026-07-22T08:00:08.564852+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_speaker_ls_order_120_torch": {
    "id": "kivotos_speaker_ls_order_120_torch",
    "name": "Speaker Ls Order 120 Torch",
    "description": "This torch glows with a chaotic energy reminiscent of Gehenna Academy’s infamous prison break. Its flame flickers with the memory of 158 escaped Toads, and when lit, it reveals hidden routes through the academy's labyrinthine halls. The Speaker Ls Order 120 Torch amplifies the sound of speaker orders, making them nearly inaudible whispers into deafening commands. However, its chaotic nature causes minor magical backlash to those nearby, a reminder of its dark origins.",
    "price": 1000,
    "icon": "🔥",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Reveals hidden paths",
      "Amplifies sound"
    ],
    "vendor": "kivotos",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "When lit, the torch grants +2 to Perception checks when detecting hidden or secret routes. This effect is instantaneous and lasts until the next long rest."
      },
      {
        "title": "Amplify Speaker Orders",
        "rules": "The torch amplifies nearby sounds, including speaker orders, by 10 feet radius for 1 minute. Enemies within this area must succeed on a DC 12 Constitution saving throw or be deafened until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This torch is designed for novice explorers and adventurers, providing them with essential tools to navigate the academy.",
    "vendorReason": "Kivotos specializes in arcane artifacts and magical gadgets, making it a fitting vendor for this unique item.",
    "shippingDetail": "Delivered by Shy Guy Smugglers, known for their unpredictable but reliable deliveries within Gehenna Academy’s grounds.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous reveal of hidden paths; Amplify sound lasts for 1 minute",
      "endsWhen": "The effect ends when the torch is extinguished or the duration expires",
      "charges": "Unlimited, but requires refilling with special ink from the Raventree Greenhouse"
    },
    "priceReason": "The Speaker Ls Order 120 Torch combines rare materials and arcane knowledge, justifying its high price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-22T08:00:00.391733+00:00",
    "aiReviewedAt": "2026-07-22T08:00:00.391733+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_triforce_amber": {
    "id": "kivotos_triforce_amber",
    "name": "Triforce Amber",
    "description": "Triforce Amber is a relic from the ancient temples of Hyrule, encased in glowing amber that pulses with ancient power. Crafted by Red Winter, this artifact exudes a sacred energy that can be harnessed to heal wounds and bolster one’s resolve against foes. It requires attunement with Triforce energy and is linked to the Reincarnation Cycle, making it a powerful yet perilous item for those who seek divine favor in combat.",
    "price": 1000,
    "icon": "🏯",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Healing Restoration",
      "Enhanced Devotion"
    ],
    "vendor": "kivotos",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Healing Restoration",
        "rules": "When consumed as an action, the user regains 500 hit points. This effect grants temporary immunity to all elemental damage for one hour. The item can only be used once per day."
      },
      {
        "title": "Enhanced Devotion",
        "rules": "For every turn in which the user is not engaged in combat, their chance to hit sacred beasts increases by 10%. This effect lasts until the start of the next short or long rest. The user must be within 30 feet of a sacred beast for this bonus to apply."
      }
    ],
    "levelRequirementReason": "Requires attunement with Triforce energy and an understanding of ancient Hylian lore.",
    "vendorReason": "Kivotos, a master dealer in arcane relics, has access to this powerful artifact due to her connections within the temple guardians of Hyrule.",
    "shippingDetail": "Due to its sensitive nature, Triforce Amber requires special handling. Expect a delay of one week for delivery.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous",
      "endsWhen": "At the end of your next short or long rest",
      "charges": "Once per day"
    },
    "priceReason": "The reduced price reflects its limited daily use and the requirement for attunement with Triforce energy.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T08:00:11.337870+00:00",
    "aiReviewedAt": "2026-07-22T08:00:11.337870+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_triforce_ritual_amulet": {
    "id": "kivotos_triforce_ritual_amulet",
    "name": "Triforce Ritual Amulet",
    "description": "The Triforce Ritual Amulet is a sacred relic crafted from the golden sands of ancient Hyrulean temples. It hums with the power to protect and recall forgotten memories, granting temporary immunity to psychic attacks and restoring vitality in sacred places. Only those who have traversed the reincarnation cycle may attune themselves to its whispers, and it cannot be worn within the confines of Gehenna Academy, a place of strict temporal order.",
    "price": 1000,
    "icon": "⚔",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Psychic Shield",
      "Sacred Rebirth"
    ],
    "vendor": "kivotos",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Psychic Shield",
        "rules": "When activated near sacred temples or ruins, this amulet grants the wearer temporary immunity to psychic damage for a duration of 10 minutes. The effect ends if the wearer moves more than 50 feet away from such locations."
      },
      {
        "title": "Sacred Rebirth",
        "rules": "Upon touch, the amulet triggers a memory recall effect, allowing the wearer to remember a significant event from their past life. This effect can be used once per day and is not subject to save or DC requirements."
      }
    ],
    "levelRequirementReason": "This amulet requires attunement by a reincarnated soul, which typically aligns with characters of at least 8th level.",
    "vendorReason": "Kivotos, the mystic trader, often carries relics from ancient temples and sacred sites, making this amulet a fitting addition to their inventory.",
    "shippingDetail": "Delivered within 3 days of order, with special handling for fragile artifacts like the Triforce Ritual Amulet.",
    "usage": {
      "activation": "Activated by touch near sacred temples or ruins.",
      "duration": "10 minutes while in proximity to sacred locations.",
      "endsWhen": "Leaves a sacred location or moves more than 50 feet away.",
      "charges": "Unlimited, as long as the amulet remains attuned."
    },
    "priceReason": "The balanced price reflects its epic rarity and unique attunement requirements for reincarnated souls.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:00:16.208280+00:00",
    "aiReviewedAt": "2026-07-22T08:00:16.208280+00:00",
    "aiReviewVersion": 1
  },
  "klomp_pirate_peg": {
    "id": "klomp_pirate_peg",
    "name": "Klomp's Peg Leg",
    "description": "Klomp's Peg Leg is a stout wooden appendage forged from the timbers of a sunken pirate ship. Its sturdiness echoes with the thunderous sound of cannon fire, and its craftsmanship ensures that every stomp feels like a command from the high seas. This relic grants you an advantage in Intimidation checks against pirates and offers a chance to startle them with your stomps, making it a fearsome tool on any deck or dock.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stomp",
      "Advantage on Intimidation"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Sea Wraith Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stomp",
        "rules": "As a bonus action, you can stomp the ground. Creatures within 10 feet must make a Wisdom saving throw (DC 13) or be stunned until the end of their next turn. This effect has no cooldown and can be used multiple times per short rest."
      },
      {
        "title": "Advantage on Intimidation",
        "rules": "You have advantage on all Intimidation checks against pirates, making you a formidable figure in any sea-faring encounter. This benefit is permanent as long as the item remains equipped."
      }
    ],
    "levelRequirementReason": "This peg leg offers an immediate boost to combat effectiveness and intimidation skills, making it suitable for lower-level characters who need a strong starting equipment option.",
    "vendorReason": "The Rogue Port's Black Market is known for its eclectic mix of pirate paraphernalia, and Klomp's Peg Leg is a revered relic among the sea dogs.",
    "shippingDetail": "Due to the size and weight, this item requires special handling by the Sea Wraith Express. Delivery may take an additional day beyond standard shipping times.",
    "usage": {
      "activation": "Bonus Action (Stomp)",
      "duration": "Instantaneous (Stomp), Permanent (Advantage on Intimidation)",
      "endsWhen": "Exhausted after multiple uses, recharges at dawn",
      "charges": "Unlimited"
    },
    "priceReason": "The Peg Leg's rarity and unique effects justify its price, offering both combat utility and thematic value to any adventurer.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T08:00:24.823491+00:00",
    "aiReviewedAt": "2026-07-22T08:00:24.823491+00:00",
    "aiReviewVersion": 1
  },
  "knights_gilded_golden_apple_pie_recipe": {
    "id": "knights_gilded_golden_apple_pie_recipe",
    "name": "Recipe: Knights Gilded Golden Apple Pie",
    "description": "The Knights Gilded Golden Apple Pie Recipe is a rare culinary treasure from the grand halls of Gilded Bakers. This recipe yields a pie whose golden crust and gilded apples are both a feast for the eyes and soul. The pie's essence imbues the eater with knightly valor, granting +1 to Charisma (Intimidation) for 3 hours while also healing 1d6 hit points, as if tasting the strength of a true knight.",
    "price": 1000,
    "icon": "🥧",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Charisma Boost",
      "Healing Delight"
    ],
    "vendor": "knights_gilded_hall",
    "shippedBy": "Shiny Slice Scroll",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Eating this pie grants you advantage on Charisma (Intimidation) checks for the next 3 hours. This effect ends if you are unconscious or if you eat another meal that requires digestion."
      },
      {
        "title": "Healing Delight",
        "rules": "Consume the pie to heal 1d6 hit points immediately. The pie's effects last until you finish digesting it, which takes 30 minutes."
      }
    ],
    "levelRequirementReason": "The complexity of mastering this recipe and its magical properties require a certain level of proficiency in culinary magic.",
    "vendorReason": "Gilded Bakers are renowned for their unique recipes that blend the ordinary with the extraordinary, making them the perfect purveyors of such a treasured pie recipe.",
    "shippingDetail": "The pie is delivered by Shiny Slice Scroll, ensuring it arrives in perfect condition and within an hour of order placement.",
    "usage": {
      "activation": "Eating the pie upon completion.",
      "duration": "3 hours or until you finish digestion (30 minutes).",
      "endsWhen": "You become unconscious or eat another meal requiring digestion.",
      "charges": "Unlimited, as long as you have completed a meal."
    },
    "priceReason": "The rare and magical ingredients used in this recipe, along with the expertise of Gilded Bakers, justify its high price.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T08:00:26.905739+00:00",
    "aiReviewedAt": "2026-07-22T08:00:26.905739+00:00",
    "aiReviewVersion": 1
  },
  "knights_gilded_golden_bake_mold": {
    "id": "knights_gilded_golden_bake_mold",
    "name": "Knights Gilded Golden Bake Mold",
    "description": "The Knights Gilded Golden Bake Mold is a meticulously crafted tool that transforms humble dough into gleaming golden pies. Its golden surface, lined with real gold leaf, not only adds an irresistible shine but also ensures your baked goods are perfectly shaped and presented. Each pie made with this mold garners +1 Charisma (Performance) check, and the mold itself never tarnishes, making it a must-have for any aspiring baker or host.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥧",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Golden Presentation",
      "Unyielding Durability"
    ],
    "vendor": "knights_gilded_hall",
    "shippedBy": "Gilded Gold Gear Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Golden Presentation",
        "rules": "When used to bake pies, the mold grants +1 to Charisma (Performance) checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Unyielding Durability",
        "rules": "The mold is made from a special blend that resists scratches and wear, requiring a DC 15 Craft check or a successful saving throw to damage it."
      }
    ],
    "levelRequirementReason": "This simple yet elegant tool requires no specific level as it aids in everyday baking.",
    "vendorReason": "The Knights Gilded Hall is renowned for its support of local artisans and bakers, offering quality equipment like this mold.",
    "shippingDetail": "Ships within the day with a delivery confirmation.",
    "usage": {
      "activation": "As a bonus action when using to shape dough into pies.",
      "duration": "Instantaneous; effect lasts until end of next turn for each pie baked.",
      "endsWhen": "The effect ends at the start of your next turn after the last pie is baked.",
      "charges": "Unlimited"
    },
    "priceReason": "This mold provides a consistent +1 bonus to performance checks and its golden leaf lining ensures it remains in excellent condition.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T08:00:30.817711+00:00",
    "aiReviewedAt": "2026-07-22T08:00:30.817711+00:00",
    "aiReviewVersion": 1
  },
  "knights_gilded_golden_tabard": {
    "id": "knights_gilded_golden_tabard",
    "name": "Knights Gilded Golden Tabard",
    "description": "The Knights Gilded Golden Tabard is a shimmering piece of heraldic armor, its surface etched with noble crests and emblems. Crafted by the Gilded Knights from pure gold thread and enchanted with knightly pride, it not only enhances your charm but also dazzles foes into temporary blindness when worn in battle. The tabard’s golden threads are said to draw unwanted attention from thieves, yet they offer a subtle advantage in diplomatic settings.",
    "price": 1000,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Blinding Flash",
      "Thief's Bane"
    ],
    "vendor": "knights_gilded_keep",
    "shippedBy": "Heraldic Hang",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Blinding Flash",
        "rules": "As an action, you can wave the tabard to blind nearby foes for 1 minute (DC 14 CON save ends early). You may use this ability once per long rest."
      },
      {
        "title": "Thief's Bane",
        "rules": "While wearing the tabard, you have advantage on Dexterity (Stealth) checks to avoid detection by thieves. This effect does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "This piece of armor is designed for knights who have proven their worth and are experienced enough in battle.",
    "vendorReason": "The Gilded Knights themselves ensure the tabard’s quality and authenticity, making it a trusted item among their ranks.",
    "shippingDetail": "The tabard is carefully packed to protect its delicate gold thread during shipment.",
    "usage": {
      "activation": "Action or Reaction (Blinding Flash)",
      "duration": "1 minute for Blinding Flash; instantaneous for Stealth advantage",
      "endsWhen": "Ends on a successful CON save or when the wearer takes damage, for Blinding Flash. Ends at the end of your next turn without using an action, for Stealth advantage.",
      "charges": "Unlimited"
    },
    "priceReason": "The tabard’s rarity and enchantments are balanced to reflect its craftsmanship and utility in both combat and diplomacy.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T08:00:40.208356+00:00",
    "aiReviewedAt": "2026-07-22T08:00:40.208356+00:00",
    "aiReviewVersion": 1
  },
  "knights_gilded_shield_polish_service": {
    "id": "knights_gilded_shield_polish_service",
    "name": "Knights Gilded Shield Polish Service",
    "description": "Knights Gilded Shield Polish Service polishes your shield with a knightly sheen, enhancing its appearance and combat prowess. The golden luster not only boosts your AC by +1 for 24 hours but also blinds any foe you block damage from, requiring them to succeed on a DC 10 Constitution saving throw or be temporarily blinded. This polish is crafted by Gilded Squires using ancient techniques passed down through generations, ensuring its effectiveness and durability.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Shield +1 AC for 24 hours",
      "Blind foes on block (DC 10 CON)"
    ],
    "vendor": "knights_gilded_hall",
    "shippedBy": "Buff Cloth Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Armor Class",
        "rules": "Activate as a bonus action. The shield's armor class is temporarily increased by +1 for 24 hours. Ends when the user no longer has any uses of this service remaining."
      },
      {
        "title": "Blinding Block",
        "rules": "When you block damage with this shield, any creature hit also must succeed on a DC 10 Constitution saving throw or be blinded until the start of your next turn. The save DC is Wisdom based if you choose to use Charisma instead."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to ensure proficiency in using such a specialized service.",
    "vendorReason": "The Knights Gilded Hall is renowned for its expertise in crafting and enhancing shields, making this polish one of their most popular services.",
    "shippingDetail": "Ships within three days, delivered by Buff Cloth's fastest couriers.",
    "usage": {
      "activation": "Bonus action to apply the service.",
      "duration": "24 hours from application.",
      "endsWhen": "Use is exhausted or when the shield is no longer wielded.",
      "charges": "Unlimited uses, recharged each long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its specialized craftsmanship and unique effects.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T08:00:55.313971+00:00",
    "aiReviewedAt": "2026-07-22T08:00:55.313971+00:00",
    "aiReviewVersion": 1
  },
  "kobold_innovation_slingpack": {
    "id": "kobold_innovation_slingpack",
    "name": "Kobold Innovation Slingpack",
    "description": "The Kobold Innovation Slingpack is a jury-rigged backpack that launches alchemical surprises. It's crafted from salvaged materials and repurposed components, its straps cobbled together with threadbare leather. This device stores potent vials of acid, ice, or smoke, each one capable of dealing 1d6 damage and applying minor debuffs to targets within 30 feet. The Slingpack recharges daily at dawn, refilling itself with 1d4 fresh vials. However, there's a 5% chance it will misfire, hurling its payload back at the user instead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 8,
    "rarity": "rare",
    "effects": [
      "Alchemical Surprise",
      "Minor Debuff"
    ],
    "vendor": "kobold_tinkerers_collective",
    "shippedBy": "Rat-drawn Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Alchemical Surprise",
        "rules": "As a bonus action, you can launch one random alchemical vial (acid, ice, or smoke) at a target within 30 feet. The target must succeed on a DC 14 Dexterity saving throw or take 1d6 damage of the vial’s type and suffer a minor debuff for 1 minute."
      },
      {
        "title": "Recharge",
        "rules": "The Slingpack recharges daily at dawn, refilling itself with 1d4 fresh alchemical vials. It may malfunction once per day (5% chance), launching its payload back at the user instead of the intended target."
      }
    ],
    "levelRequirementReason": "This item's complexity and utility make it accessible to lower-level characters, providing them with a versatile tool for combat and exploration.",
    "vendorReason": "The Kobold Tinkerers Collective specializes in repurposed gadgets and salvaged devices, making the Slingpack a natural addition to their inventory.",
    "shippingDetail": "Shipped via a slow but reliable rat-drawn cart, this item may arrive with minor delays due to the creatures' unpredictable routes.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (alchemical effect lasts until resolved)",
      "endsWhen": "The vial's effect ends when it is used up or dispelled by another creature",
      "charges": "Unlimited, recharged daily at dawn"
    },
    "priceReason": "This price reflects the item's rarity and utility, providing a balance between cost and value for players.",
    "priceOriginal": 12200,
    "priceReviewedAt": "2026-07-22T08:00:48.673869+00:00",
    "aiReviewedAt": "2026-07-22T08:00:48.673869+00:00",
    "aiReviewVersion": 1
  },
  "koopa_clown_car": {
    "id": "koopa_clown_car",
    "name": "Koopa Clown Car",
    "description": "The Koopa Clown Car, a vehicle of Bowser's personal design, can transform its visage to reflect your health. As you take damage, its clownish face morphs from cheerful to sinister, mirroring your vitality with each blow. It hovers effortlessly at 40 feet per round, immune to ground-based attacks and capable of dropping bowling balls as a weapon. This vessel is more than just transportation; it's a companion that adapts to your every need.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Clownish Health Reflection",
      "Hovering Transport"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Royal Airship Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Clownish Health Reflection",
        "rules": "When you take damage, the Koopa Clown Car's face changes expression to reflect your health. This effect is instantaneous and occurs once per turn."
      },
      {
        "title": "Hovering Transport",
        "rules": "The vehicle has a fly speed of 40 feet. It can hover at this speed indefinitely as long as it remains within its charge limit."
      }
    ],
    "levelRequirementReason": "Due to the advanced hover technology and health-reaction feature, only high-level characters should operate this vehicle.",
    "vendorReason": "Valley Trading Post often deals in rare and exotic items from various realms, including Bowser's personal contraptions.",
    "shippingDetail": "Ships via the Royal Airship Express within a week of purchase.",
    "usage": {
      "activation": "Instantaneous activation upon command.",
      "duration": "Indefinite as long as it remains within its charge limit.",
      "endsWhen": "Exhausted when all charges are depleted; recharges after an 8-hour rest in a dimensional rift.",
      "charges": "Limited to 5 uses per day."
    },
    "priceReason": "Balanced at 1,000 XP due to its unique features and limited daily use.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-22T08:01:05.527794+00:00",
    "aiReviewedAt": "2026-07-22T08:01:05.527794+00:00",
    "aiReviewVersion": 1
  },
  "koopa_karaoke_machine": {
    "id": "koopa_karaoke_machine",
    "name": "Koopa Karaoke Machine",
    "description": "The Koopa Karaoke Machine is a portable, party-starting device crafted by Wario himself, featuring Bowser’s Greatest Hits—complete with his legendary angry voicemails. It grants advantage on Performance checks and allows you to cast Tasha's Hideous Laughter on all enemies within 30 feet once per day (DC 15 WIS save). The machine is loud enough to wake the undead in haunted areas, making it a party-crusher or a crowd-pleaser depending on your mood.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Performance Boost",
      "Undead Attraction"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Boombox Drone",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Performance Boost",
        "rules": "Activates as a bonus action. Grants advantage on Performance checks for 1 hour, after which the device requires an 8-hour recharge."
      },
      {
        "title": "Undead Attraction",
        "rules": "Once per day, cast Tasha's Hideous Laughter (DC 15 WIS save) on all enemies within 30 feet. This effect lasts for 1 minute and has a range of 30 feet."
      }
    ],
    "levelRequirementReason": "Requires at least second-level spellcasting to manage the device’s effects.",
    "vendorReason": "Wario Direct is known for its eclectic and eccentric inventory, making it a natural home for this one-of-a-kind gadget.",
    "shippingDetail": "Delivered by Wario’s Boombox Drone, which can only make deliveries within the Mushroom Kingdom due to its limited flight range.",
    "usage": {
      "activation": "Bonus action or reaction (for Performance Boost), once per day for Undead Attraction",
      "duration": "Performance Boost lasts 1 hour; Tasha's Hideous Laughter lasts 1 minute",
      "endsWhen": "Reaches its daily limit, or upon successful save against the Tasha's Hideous Laughter effect",
      "charges": "8-hour recharge required after using Performance Boost"
    },
    "priceReason": "Balanced at 1000 XP to reflect the device’s unique and powerful features, including the ability to cast a 2nd-level spell.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-22T08:01:08.659361+00:00",
    "aiReviewedAt": "2026-07-22T08:01:08.659361+00:00",
    "aiReviewVersion": 1
  },
  "koopa_lantern": {
    "id": "koopa_lantern",
    "name": "Lantern Koopa",
    "description": "The Lantern Koopa is a glowing ceramic shell that crackles with ethereal light, designed by the Mariner Guild to guide and protect seafarers from unseen dangers at sea. When hostile intent approaches within 30 feet, its red glow intensifies into a flashing beacon, warning all nearby of lurking threats. The lantern's warm luminescence casts a soft 20-foot radius of light, enhancing vision in dim illumination by +1 to passive Perception checks.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🏮",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Red Alert for Hostile Presence",
      "Guiding Light"
    ],
    "vendor": "mariner_guild",
    "shippedBy": "Bubble-Wrapped Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Red Alert for Hostile Presence",
        "rules": "When a hostile creature enters the Lantern Koopa's 30-foot radius, it emits an intermittent red glow. This effect is instantaneous and does not require any action from the user."
      },
      {
        "title": "Guiding Light",
        "rules": "While lit, the Lantern Koopa illuminates a 20-foot radius, providing advantage on passive Perception checks for creatures within its light. The lantern can be used passively until it requires recharging at dawn."
      }
    ],
    "levelRequirementReason": "The Lantern Koopa's basic design and functionality are accessible to most adventurers of any level.",
    "vendorReason": "As creators of the Lantern Koopa, the Mariner Guild ensures its quality and reliability for seafarers' safety.",
    "shippingDetail": "Ships via water courier, ensuring safe delivery to ports in a timely manner.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous red alert; continuous light for up to 24 hours until recharging at dawn.",
      "endsWhen": "Red alert ends when the hostiles leave the 30-foot radius; the lantern's light fades upon recharge or destruction.",
      "charges": "Unlimited uses per day, recharges daily at dawn."
    },
    "priceReason": "The Lantern Koopa is priced at 1000 XP to reflect its utility for adventurers navigating treacherous waters and avoiding ambushes.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T08:01:09.917389+00:00",
    "aiReviewedAt": "2026-07-22T08:01:09.917389+00:00",
    "aiReviewVersion": 1
  }
};
