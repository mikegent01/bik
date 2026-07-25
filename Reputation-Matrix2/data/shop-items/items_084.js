// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_084 = {
  "almost_edge_item_radiant_fragment_branded": {
    "id": "almost_edge_item_radiant_fragment_branded",
    "name": "Radiant Fragment Branded with the Echo of Nullity",
    "description": "A pulsating crystalline shard that glows with a spectral light, this Radiant Fragment Branded with the Echo of Nullity is said to have been forged from the very edge where reality and chaos meet. When activated, it creates a pocket of absolute stillness within a small radius, halting movement and disrupting perception. The air around it feels as though it has been drawn into an endless void, leaving nothing but silence.",
    "category": "equipment",
    "price": 1400,
    "icon": "✨",
    "stock": 9,
    "rarity": "uncommon",
    "stockType": "delivery_only",
    "effects": [
      "Zone of Stillness",
      "Null Vision"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Gravity Sling Express",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Zone of Stillness",
        "rules": "The shard creates a small zone (10 feet radius) that halts all movement and prevents the casting of spells or abilities requiring verbal commands. This effect lasts for 1 round, after which it dissipates. There is no save DC; creatures within the area are incapacitated until the effect ends."
      },
      {
        "title": "Null Vision",
        "rules": "Any creature that looks into the shard's light must succeed on a Wisdom saving throw (DC 15) or be blinded for 1 round. This effect is resisted with a successful save and does not stack if a creature is already blinded."
      }
    ],
    "levelRequirementReason": "Only those of considerable experience can wield this powerful artifact without risking their own balance.",
    "vendorReason": "The edge wanderers are known to traverse the realms where such dangerous artifacts are found, and they possess the knowledge to safely handle them.",
    "shippingDetail": "Shipped via secure and swift courier services; delivery may require special handling for fragile items.",
    "usage": {
      "activation": "Reaction",
      "duration": "1 round",
      "endsWhen": "Ends when the effect duration is over or a creature moves out of the zone",
      "charges": "Unlimited, but requires concentration to maintain"
    },
    "priceReason": "The shard's rarity and the risk involved in its use justify this price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T14:56:13.819360+00:00",
    "aiReviewedAt": "2026-07-25T14:56:13.819360+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_wicked_climbing_weight": {
    "id": "grand_country_item_the_wicked_climbing_weight",
    "name": "The Wicked Climbing Weight of Ascendant Grit",
    "description": "The Wicked Climbing Weight of Ascendant Grit is a sleek obsidian weight, its surface etched with chaotic glyphs that seem to writhe and spiral like the ascent of a vertiginous cliff face. When wielded by a daring climber, it grants unnatural grip and momentum, allowing for controlled descents. This treacherous tool channels the essence of vertical strata, reducing fall damage and granting temporary strength boosts during its brief bursts of use.",
    "category": "equipment",
    "price": 1500,
    "icon": "⛰️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Controlled Descent",
      "Fall Damage Reduction"
    ],
    "vendor": "side_seller",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Controlled Descent",
        "rules": "As a bonus action, the wielder can activate the weight to initiate a controlled descent. This effect lasts for up to 30 seconds and allows the climber to descend at half their normal speed without losing balance."
      },
      {
        "title": "Fall Damage Reduction",
        "rules": "For one minute after using the weight in a controlled descent, the wielder is protected from fall damage. This effect reduces all fall damage by 10% during this duration."
      }
    ],
    "levelRequirementReason": "Requires significant climbing skill and control to safely use the weight's chaotic powers.",
    "vendorReason": "Side sellers often carry unique tools for adventurers, including this treacherous yet useful climbing aid.",
    "shippingDetail": "Ships via a specialized delivery drone, ensuring safe and swift transport to the adventurer's location.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 30 seconds per use",
      "endsWhen": "Ends after 1 minute or upon losing control of the descent",
      "charges": "Unlimited uses"
    },
    "priceReason": "The weight's chaotic energy and specialized construction justify its high price.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T14:56:46.847099+00:00",
    "aiReviewedAt": "2026-07-25T14:56:46.847099+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_layered_curse_of_fallen_echoes": {
    "id": "grand_country_item_the_layered_curse_of_fallen_echoes",
    "name": "The Layered Curse of Fallen Echoes – Serpent’s Coil Weight",
    "description": "The Layered Curse of Fallen Echoes – Serpent’s Coil Weight is a heavy, brass-bound stone weight crafted from an ancient echo-stone. Its surface is scored with petrified echoes of climbers who perished in the mountains, whispering their final moments. Gripping it forces you to confront fleeting visions of potential hazards, while its unsettling resonance can disorient attackers and enhance your situational awareness by 5%. A touch releases a phantom echo that briefly stuns nearby foes.",
    "category": "curiosities",
    "price": 5400,
    "icon": "💀",
    "stock": 17,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Echo Visions",
      "Disorienting Resonance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Carrier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echo Visions",
        "rules": "As an action, you can activate the weight to gain a brief insight into potential dangers ahead. The visions last for 1 minute and provide advantage on Perception checks made within 60 feet until they end."
      },
      {
        "title": "Disorienting Resonance",
        "rules": "When a creature starts its turn within 30 feet of you while holding the weight, it must succeed on a DC 15 Wisdom saving throw or be stunned for 1 round. The weight can only trigger this effect once per long rest."
      }
    ],
    "levelRequirementReason": "The weight's echoes are accessible to all climbers who can hold and focus.",
    "vendorReason": "Vertical Vendor specializes in gear for climbers, including items that enhance their survival skills in perilous environments.",
    "shippingDetail": "The weight is delivered securely via a swift pigeon courier, arriving within the day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Ends when you finish a short or long rest or if you lose your grip on it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The weight's rarity and unique properties justify its price, offering potent yet balanced advantages to any climber.",
    "priceOriginal": 1688,
    "priceReviewedAt": "2026-07-25T14:56:13.696344+00:00",
    "aiReviewedAt": "2026-07-25T14:56:13.696344+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_the_godly_resonance_of_stoneheart": {
    "id": "grand_country_item_the_godly_resonance_of_stoneheart",
    "name": "The Resonance of Stoneheart – Apex Weight of the Shardfall",
    "description": "The Resonance of Stoneheart is a massive, solidified stone core that pulses with the essence of a climber who met their fate atop the Shardfall. When activated, it creates a localized gravity field that warps the space around it, causing climbers to falter and enemies to stagger towards its wielder. The core’s ancient spirit also triggers occasional bursts of falling stone fragments, making it both a weapon and a trap for those not careful enough.",
    "category": "equipment",
    "price": 98000,
    "icon": "🌋",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Gravitational Disruption",
      "Draw Enemy Near"
    ],
    "vendor": "layer_market",
    "shippedBy": "Magical Conveyance",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitational Disruption",
        "rules": "When activated as an action, the Resonance of Stoneheart creates a localized gravity field with a 10-foot radius centered on it. All creatures in this area must succeed on a DC 20 Strength saving throw or be pushed back 5 feet and fall prone. This effect lasts for 1 minute."
      },
      {
        "title": "Draw Enemy Near",
        "rules": "As a bonus action, the wielder can use the Resonance to exert an irresistible pull on any creature within 30 feet. That creature must succeed on a DC 20 Wisdom saving throw or be pulled towards the wielder at half their walking speed for 1 minute."
      }
    ],
    "levelRequirementReason": "Even the simplest climber can recognize and appreciate this item’s potential.",
    "vendorReason": "Layer Market specializes in rare and exotic equipment, making it a logical place for such an artifact to be sold.",
    "shippingDetail": "Ships via Magical Conveyance, ensuring swift delivery with minimal risk of damage or theft.",
    "usage": {
      "activation": "Action / Bonus Action",
      "duration": "Gravitational Disruption lasts for 1 minute. Draw Enemy Near lasts until the end of your next turn.",
      "endsWhen": "The effect ends if you lose concentration (as a bonus action), or when the Resonance is destroyed.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "This item’s rarity and utility justify its price, offering both defensive and offensive capabilities to those skilled in combat.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T14:56:17.758551+00:00",
    "aiReviewedAt": "2026-07-25T14:56:17.758551+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_electro_billet_of_adventure": {
    "id": "teyvat_item_electro_billet_of_adventure",
    "name": "The Electro Billets of Adventure",
    "description": "The Electro Billets of Adventure are forged from the molten cores of ancient lightning storms within Stormterror’s domain. These billets hum with raw electro energy, their surfaces etched with arcane runes that channel the very essence of storm power. When struck against stone or metal, they release a blindingly bright bolt of miniature lightning, stunning foes and disrupting battle formations. The true heart of any adventurer, these billets are a favored tool for skirmishes and duels.",
    "category": "equipment",
    "price": 27000,
    "icon": "⚡",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "miniature lightning bolt",
      "stun on impact"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Miniature Lightning Bolt",
        "rules": "When the Electro Billet is struck against stone or metal, it releases an arc of miniature lightning. This deals 1d6+2 force and lightning damage to all creatures in a 5-foot radius centered on the impact point. The effect ends if the billet is struck again."
      },
      {
        "title": "Stun On Impact",
        "rules": "There is a 30% chance that an enemy within 10 feet of where the Electro Billet lands will be stunned for 1 round. This effect has no save and can occur only once per encounter."
      }
    ],
    "levelRequirementReason": "These billets are crafted to harness the raw power of ancient lightning storms, requiring a seasoned adventurer with considerable experience.",
    "vendorReason": "As one of the largest and most reputable trading posts in Teyvat, Mondstadt Market has access to rare and exotic goods like these powerful billets.",
    "shippingDetail": "Shipped by winged messenger for expedited delivery within three days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The billet is struck again or destroyed in combat",
      "charges": "Unlimited, but may be expended"
    },
    "priceReason": "Balanced at this price point to reflect the item's rarity and the raw materials required for its crafting.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:56:29.623427+00:00",
    "aiReviewedAt": "2026-07-25T14:56:29.623427+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_obsidian_forged_dagger_of_silence": {
    "id": "teyvat_item_obsidian_forged_dagger_of_silence",
    "name": "Obsidian Forged’s Dagger of Silence",
    "description": "The Obsidian Forged’s Dagger of Silence, crafted from ancient obsidian found deep within Mount Tianmen, whispers a silent threat into the hands of its wielder. Its blade is as black and unyielding as the night itself, capable of generating an absolute field of stillness upon contact, nullifying sound and magical effects for those within its radius. Ideal for assassins seeking to slip past their foes or mages aiming to disrupt spells, this dagger leaves no trace of its passage save a fleeting moment of silence.",
    "category": "equipment",
    "price": 6000,
    "icon": "🤫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Silence Field",
      "Disrupt Magic"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_cargo",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Silence Field",
        "rules": "When the dagger strikes a target within 10 feet, it creates a 5-foot radius area of absolute silence. All creatures in this area are rendered deaf for up to 3 seconds and cannot speak or cast verbal magic until the effect ends."
      },
      {
        "title": "Disrupt Magic",
        "rules": "Any creature hit by the dagger must succeed on a DC 15 Dexterity saving throw or have all verbal components of their next spell they attempt to cast fail, rendering them unable to complete that casting for up to 3 seconds."
      }
    ],
    "levelRequirementReason": "Crafted from ancient and rare materials, this dagger requires a master artisan's touch and the wielder’s experience to handle its power.",
    "vendorReason": "As a hub for both espionage and arcane trade, Liyue Harbor is home to many who value both stealth and magic disruption.",
    "shippingDetail": "Due to its fragile nature and magical properties, the dagger is shipped via sea cargo with special protective packaging.",
    "usage": {
      "activation": "Melee attack action",
      "duration": "Instantaneous effect; ends when the creature’s next action or reaction occurs",
      "endsWhen": "The target makes a successful Dexterity saving throw or completes its next action",
      "charges": "Unlimited, but requires recharging after 10 uses per short rest"
    },
    "priceReason": "Crafted from rare obsidian and imbued with ancient magic, this dagger’s price reflects the cost of materials and its unique properties.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T14:56:41.856616+00:00",
    "aiReviewedAt": "2026-07-25T14:56:41.856616+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_curiosity_chronometer_of_inazuma": {
    "id": "teyvat_item_curiosity_chronometer_of_inazuma",
    "name": "Curiosity Chronometer of Inazuma",
    "description": "Crafted from the sands of Inazuma's legendary beaches, this hourglass is a marvel of precision and artistry. The iridescent grains shift and swirl in patterns that defy time itself, creating a brief but potent distortion around its owner. This Chronometer not only slows enemy attacks to a mere trickle but also sharpens your senses, making you the master of every moment. A true collector's piece, this item is as much an artifact as it is a weapon.",
    "category": "curiosities",
    "price": 1500,
    "icon": "⏳",
    "stock": 9,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "Slows Enemy Attacks",
      "Enhances Reaction Time"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "windborne_scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slowed Enemy Attacks",
        "rules": "When activated, the Chronometer briefly slows enemy attacks by 25%, reducing their attack speed to 75% of normal. This effect lasts for 4 seconds and has a cooldown of 1 minute."
      },
      {
        "title": "Enhanced Reaction Time",
        "rules": "Upon activation, your reaction time is increased by +20 feet of movement speed and +10 reaction points. The duration of this enhancement is 6 seconds, with a cooldown period of 5 minutes."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can use this Chronometer to gain tactical advantage.",
    "vendorReason": "Inazuma Imports specializes in rare and exotic items from their home region of Inazuma, making this Chronometer a natural addition to their stock.",
    "shippingDetail": "Ships via Windborne Scroll courier for expedited delivery within 3 days.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous (4 seconds)",
      "endsWhen": "The effect ends when its duration is over or you are incapacitated.",
      "charges": "Unlimited, but requires a short rest to regain the cooldown."
    },
    "priceReason": "Balanced at this price point to ensure it remains a useful and not overpowered tool for adventurers of all levels.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T14:56:54.581091+00:00",
    "aiReviewedAt": "2026-07-25T14:56:54.581091+00:00",
    "aiReviewVersion": 1
  }
};
