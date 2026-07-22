// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_002 = {
  "a_relic_that_amplifies_your": {
    "id": "a_relic_that_amplifies_your",
    "name": "Echo Talisman",
    "description": "The Echo Talisman is a resonant metal charm forged by the Iron Legion to amplify the vocal resonance of elemental reactions. It hums with a faint vibration when held by a vision holder, ready to project the user's voice with supernatural clarity.",
    "price": 4500,
    "icon": "🎵",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Resonant Amplification",
      "Echoing Aftershock"
    ],
    "vendor": "teyvat",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Resonant Amplification",
        "rules": "When you cast a spell or use an ability that deals elemental damage (Fire, Cold, Lightning, or Thunder) while performing a vocal chant, the damage dealt by that specific instance is increased by 30%."
      },
      {
        "title": "Echoing Aftershock",
        "rules": "Immediately after you deal damage with an elemental ability, roll a d10. On a 10, the echo triggers, dealing an additional 1d8 force damage to the target and all creatures within 5 feet of it."
      }
    ],
    "levelRequirementReason": "The talisman requires a high degree of magical maturity to synchronize with the user's internal vision.",
    "vendorReason": "The Teyvat archives house various relics of cultural and elemental significance.",
    "shippingDetail": "Delivered via high-speed courier with reinforced vibration-dampening packaging.",
    "usage": {
      "activation": "Passive (triggered by casting/ability use)",
      "duration": "Instantaneous",
      "endsWhen": "The item can only be used once per combat encounter.",
      "charges": "1 use per battle"
    },
    "priceReason": "The price reflects its epic rarity and the significant damage multiplier provided.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-21T22:50:02.980462+00:00",
    "aiReviewedAt": "2026-07-21T22:50:02.980462+00:00",
    "aiReviewVersion": 1
  },
  "a_ring_that_grants_wishes": {
    "id": "a_ring_that_grants_wishes",
    "name": "Wario's Wish Granting Ring",
    "description": "Wario's Wish Granting Ring is a gaudy, oversized gold band forged by the notorious Wario Rings. While it lacks true magic, it provides the wearer with a sense of unearned confidence and a slight 'placebo' boost to their luck.",
    "category": "equipment",
    "price": 1000,
    "icon": "💍",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Placebo Luck",
      "Stubborn Fit",
      "Wario's Confidence"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wish Whisper",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Placebo Luck",
        "rules": "Once per long rest, you can choose to reroll one d20 roll made by you. You must use the new roll."
      },
      {
        "title": "Stubborn Fit",
        "rules": "The ring is magically tight; you have disadvantage on any Strength or Sleight of Hand checks made to remove the ring from your finger."
      },
      {
        "title": "Wario's Confidence",
        "rules": "You gain a +1 bonus to Charisma (Deception) checks specifically made to convince others that you have fulfilled a wish or possess great wealth."
      }
    ],
    "levelRequirementReason": "The item is common rarity and does not require high-level magical attunement.",
    "vendorReason": "This vendor specializes in Wario's signature brand of rings and trinkets.",
    "shippingDetail": "Delivered via a shimmering, slightly-too-loud courier who whispers 'Your wish is coming' upon arrival.",
    "usage": {
      "activation": "Reaction or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The daily use is exhausted or the ring is removed.",
      "charges": "1 use per long rest"
    },
    "priceReason": "Reduced from 4900 to reflect its common rarity and placebo nature while maintaining a premium for its unique branding.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-21T22:50:26.238854+00:00",
    "aiReviewedAt": "2026-07-21T22:50:26.238854+00:00",
    "aiReviewVersion": 1
  },
  "a_ring_that_pulses_with": {
    "id": "a_ring_that_pulses_with",
    "name": "Doughnut Edge Ring",
    "description": "The Doughnut Edge Ring is a band of shimmering gold that pulses with unstable dimensional energy. This ring allows the wearer to navigate the treacherous Doughnut Edge with ease, as favored by the legendary Wario.",
    "price": 10000,
    "icon": "🍩",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Dimensional Fall Protection",
      "Doughnut Rift",
      "Edge Passage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Dimensional Fall Protection",
        "rules": "While wearing this ring, you are immune to all damage from falling. When you fall, you land on your feet and take no damage."
      },
      {
        "title": "Doughnut Rift",
        "rules": "As a bonus action, you can cause the ring to pulse. Each creature within 10 feet of you must make a DC 16 Dexterity saving throw, taking 1d6 force damage on a failed save. On a failure, roll a d6: 1-3: the target is pushed 10 feet away; 4-6: the target is teleported 10 feet to a space of your choice."
      },
      {
        "title": "Edge Passage",
        "rules": "You can cast the 'Dimension Door' spell once per long rest without expending a spell slot, but you can only teleport to locations associated with the Doughnut Edge or the Wario Land realm."
      }
    ],
    "levelRequirementReason": "The unstable dimensional energy of the ring requires a high level of magical fortitude to stabilize.",
    "vendorReason": "This item is a signature piece of Wario's personal collection.",
    "shippingDetail": "Special delivery via Piranha Plant Post; the package may be slightly chewed but remains intact.",
    "usage": {
      "activation": "Passive for fall protection; Bonus Action for Doughnut Rift",
      "duration": "Instantaneous",
      "endsWhen": "The Doughnut Rift effect ends immediately after the target is affected; Edge Passage ends after one use.",
      "charges": "1 Doughnut Rift per session; 1 Edge Passage per long rest."
    },
    "priceReason": "Reduced from 15,000 to reflect a balanced legendary price point for a specialized utility item.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-21T22:50:53.376327+00:00",
    "aiReviewedAt": "2026-07-21T22:50:53.376327+00:00",
    "aiReviewVersion": 1
  },
  "a_robe_with_pockets_inside": {
    "id": "a_robe_with_pockets_inside",
    "name": "Mages' Guild Robe of Many Pockets",
    "description": "The Mages' Guild Robe of Many Pockets is a heavy, multi-layered garment crafted by Mages' Guild Seamsters. This robe features a complex internal lining of nested pockets, allowing it to hold an impressive amount of gear while maintaining a sleek exterior.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥼",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Expanded Storage",
      "Random Retrieval",
      "Dimensional Maintenance"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expanded Storage",
        "rules": "The robe contains 20 internal pockets. Each pocket can hold up to 1 lb of weight. When you reach into a pocket to retrieve an item, roll a d20; on a 1-10, you pull out the wrong item from a different pocket. On an 11-20, you successfully retrieve the intended item."
      },
      {
        "title": "Random Retrieval",
        "rules": "As an action, you can reach into the robe's lining to pull out a minor mundane item (such as a copper piece, a piece of string, or a button). Roll a d20; on a 1-10, the item is exactly what you needed. On an 11-20, the item is a random minor object of the DM's choice."
      },
      {
        "title": "Dimensional Maintenance",
        "rules": "The robe's magic is sensitive to moisture. If the robe is washed or becomes soaked with water, the dimensional pockets collapse and the item becomes a mundane, non-magical garment."
      }
    ],
    "levelRequirementReason": "The item is a utility garment and does not require high-level spellcasting proficiency to wear.",
    "vendorReason": "The Mages' Guild Seamsters are the primary manufacturers of this enchanted clothing.",
    "shippingDetail": "The robe is shipped in a vacuum-sealed, waterproof container to prevent moisture from ruining the magic during transit.",
    "usage": {
      "activation": "Action or Passive",
      "duration": "Permanent",
      "endsWhen": "The robe is washed or soaked with water.",
      "charges": "Random Retrieval can be used once per long rest."
    },
    "priceReason": "Reduced from 21,500 XP to reflect a balanced utility item that provides convenience rather than combat power.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-21T22:51:21.459912+00:00",
    "aiReviewedAt": "2026-07-21T22:51:21.459912+00:00",
    "aiReviewVersion": 1
  },
  "a_rope_for_lassoing_foes": {
    "id": "a_rope_for_lassoing_foes",
    "name": "Wario's Wild West Lasso",
    "description": "Wario's Wild West Lasso is a thick, coarse coil of hemp rope crafted by the legendary Wario West. This rugged tool features a distinctively weighted knot designed for capturing unruly outlaws and beasts alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪢",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Lasso Grapple",
      "Rope Frays",
      "Western Mastery"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lasso Loop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lasso Grapple",
        "rules": "When you use an action to attempt to grapple a creature within 30 feet using this lasso, you have advantage on the Athletics check."
      },
      {
        "title": "Rope Frays",
        "rules": "If you use the lasso to pull a creature toward you, the rope's rough texture causes you to have disadvantage on the Strength (Athletics) check made to move the target."
      },
      {
        "title": "Western Mastery",
        "rules": "While holding this lasso, you gain a +1 bonus to any Wisdom (Animal Handling) check made to calm or lead a mount."
      }
    ],
    "levelRequirementReason": "The item is common equipment and does not require specific class features or high-level stats to operate.",
    "vendorReason": "Wario West's signature gear is a staple of the Wario Land frontier outpost.",
    "shippingDetail": "Delivered via a looped delivery system; arrives in 1d4 days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The grapple is broken or the creature is freed",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4900 to reflect its common rarity and utility as a basic tool.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-21T22:52:04.920851+00:00",
    "aiReviewedAt": "2026-07-21T22:52:04.920851+00:00",
    "aiReviewVersion": 1
  },
  "a_saddle_for_wild_rides": {
    "id": "a_saddle_for_wild_rides",
    "name": "Wario's Wild West Saddle",
    "description": "Wario's Wild West Saddle is a rugged, wide-seated saddle crafted from heavy leather by the artisan Wario West. It features reinforced stirrups and a distinctive Western aesthetic designed for high-speed travel across the plains.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐎",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "+1 Mounted Speed",
      "Western Mastery",
      "Saddle Creak"
    ],
    "vendor": "wario_land",
    "shippedBy": "Saddle Sprint",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+1 Mounted Speed",
        "rules": "While mounted on a creature, your speed increases by 10 feet. This effect is passive and constant while the saddle is equipped."
      },
      {
        "title": "Western Mastery",
        "rules": "You gain a +1 bonus to Animal Handling checks made while riding a mount. This bonus does not stack with other bonuses."
      },
      {
        "title": "Saddle Creak",
        "rules": "The heavy leather and iron hardware make the saddle noisy; you have disadvantage on Stealth checks made while mounted."
      }
    ],
    "levelRequirementReason": "The item is common equipment and does not require a specific power level to operate.",
    "vendorReason": "Wario West's workshop is the primary source for this specific style of western gear.",
    "shippingDetail": "Delivered via express courier; the saddle arrives pre-oiled and ready for immediate mounting.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while equipped",
      "endsWhen": "The saddle is removed from the mount or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 5000 to reflect its common rarity and utility-based benefits.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T22:52:26.340422+00:00",
    "aiReviewedAt": "2026-07-21T22:52:26.340422+00:00",
    "aiReviewVersion": 1
  },
  "a_scroll_claiming_to_be": {
    "id": "a_scroll_claiming_to_be",
    "name": "Peach's 'Last' Decree (Autographed by Wario)",
    "description": "Peach's 'Last' Decree is a weathered parchment scroll featuring a royal command that is overshadowed by a massive, crude signature from Wario. Produced by the Wario Land Historical Forgery Dept., the scroll's ink pulses with a faint, unsettling light in the dark.",
    "category": "equipment",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Mushroom Kingdom Loyalty",
      "Blatant Forgery",
      "Duchy of the Bathroom",
      "Luminous Autograph"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mushroom Kingdom Loyalty",
        "rules": "As a bonus action, you can present this scroll to a Mushroom Kingdom loyalist. The target has advantage on Wisdom (Insight) checks to determine if the decree is authentic, but you have advantage on Charisma (Persuasion) checks against them for 1 hour as they struggle to believe the forgery."
      },
      {
        "title": "Blatant Forgery",
        "rules": "When attempting to deceive anyone who personally knew Princess Peach, you have disadvantage on Charisma (Deception) checks because the forgery is easily spotted by those with intimate knowledge of the royal court."
      },
      {
        "title": "Duchy of the Bathroom",
        "rules": "While holding this scroll, you have advantage on Charisma (Persuasion) checks made to influence plumbers or maintenance workers, specifically regarding the granting of titles or territory."
      },
      {
        "title": "Luminous Autograph",
        "rules": "Wario's oversized signature emits a dim light in a 5-foot radius. This effect is purely cosmetic and cannot be suppressed."
      }
    ],
    "levelRequirementReason": "The item is a social utility tool and does not require high-level magical proficiency to use.",
    "vendorReason": "The Wario Land Historical Forgery Dept. is the primary source of these fraudulent historical documents.",
    "shippingDetail": "The package arrives with a 'Do Not Open' warning and smells faintly of grease.",
    "usage": {
      "activation": "Bonus Action (for Loyalty) or Passive (for Duchy/Forgery)",
      "duration": "1 hour for Loyalty effect",
      "endsWhen": "The Loyalty effect ends after 1 hour or if the scroll is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 5500 to 1000 to reflect its status as a common forgery rather than a legendary artifact.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-21T22:52:57.075658+00:00",
    "aiReviewedAt": "2026-07-21T22:52:57.075658+00:00",
    "aiReviewVersion": 1
  },
  "a_scroll_that_holds_your": {
    "id": "a_scroll_that_holds_your",
    "name": "Mages' Guild Recipe Holder Scroll",
    "description": "The Mages' Guild Recipe Holder Scroll is a sturdy, parchment-bound scroll crafted by Mages' Guild Scribes to organize complex culinary magic. It features enchanted ink that projects a booming, theatrical narration of any recipe stored within its pages.",
    "category": "equipment",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Culinary Guidance",
      "Dramatic Narration",
      "Pedantic Correction"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Culinary Guidance",
        "rules": "While the scroll is active and you are performing a cooking check, you have advantage on the roll. The scroll can hold up to 10 unique recipes."
      },
      {
        "title": "Dramatic Narration",
        "rules": "While the scroll is active, its booming voice is audible up to 60 feet. You have disadvantage on Stealth checks made while the scroll is being read aloud."
      },
      {
        "title": "Pedantic Correction",
        "rules": "If you fail a cooking check while using the scroll, it provides a lecture. You may immediately reroll the check; you must use the new roll."
      }
    ],
    "levelRequirementReason": "The item is a utility tool for crafting and does not possess high-level combat scaling.",
    "vendorReason": "The Mages' Guild Scribes are the primary creators and distributors of this enchanted stationery.",
    "shippingDetail": "Delivered via magical courier; arrives within 24 hours of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The user finishes the cooking task or chooses to silence the scroll.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 10,500 XP to reflect a standard uncommon utility item price for a non-combat tool.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-21T22:53:25.530325+00:00",
    "aiReviewedAt": "2026-07-21T22:53:25.530325+00:00",
    "aiReviewVersion": 1
  },
  "a_service_where_the_guild": {
    "id": "a_service_where_the_guild",
    "name": "Mages' Guild Spell Tome Copy",
    "description": "The Mages' Guild Spell Tome Copy is a formal scribing service where a guild scribe meticulously transcribes a specific spell from the guild's vast library into your personal spellbook. This enchanted parchment service ensures the ink remains permanent and the arcane structure is preserved for future casting.",
    "category": "services",
    "price": 1000,
    "icon": "📖",
    "stock": 999,
    "rarity": "uncommon",
    "effects": [
      "Spell Transcription",
      "Guild Availability"
    ],
    "vendor": "Mages Guild",
    "shippedBy": "Courier Scribe",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spell Transcription",
        "rules": "Upon completion, you learn one 1st-level or 2nd-level spell of your choice from any class's spell list. You can cast this spell using your normal spellcasting ability and spell slots as if it were part of your original class list."
      },
      {
        "title": "Guild Availability",
        "rules": "The spell provided is subject to the Mages' Guild library's current archives; the vendor determines the specific selection from the 1st and 2nd-level lists based on availability."
      }
    ],
    "levelRequirementReason": "Characters must have enough experience to interact with guild bureaucracy and possess a spellbook.",
    "vendorReason": "The Mages' Guild owns the library and provides the scribes for this service.",
    "shippingDetail": "The finished spellbook is delivered via Courier Scribe within 24 hours of the request.",
    "usage": {
      "activation": "Service Request",
      "duration": "Instantaneous (after 24-hour transcription)",
      "endsWhen": "The spell is permanently added to your spellbook.",
      "charges": "One-time service"
    },
    "priceReason": "Reduced from 5000 to 1000 to reflect a standard service fee for a single low-level spell.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T22:53:53.608281+00:00",
    "aiReviewedAt": "2026-07-21T22:53:53.608281+00:00",
    "aiReviewVersion": 1
  },
  "a_shard_of_fractured_reality_1": {
    "id": "a_shard_of_fractured_reality_1",
    "name": "Echo of the Void",
    "description": "This Echo of the Void is a jagged shard of fractured reality that hums with the whispers of the deceased. Recovered from the shadowed corners of the Atrium’s depths, the shard pulses with a cold, necromantic resonance.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necromantic Resonance",
      "Echo of the Dead",
      "Shadow Steal"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromantic Resonance",
        "rules": "While holding the shard, any undead creature you summon or command deals an additional 1d6 necrotic damage on each hit."
      },
      {
        "title": "Echo of the Dead",
        "rules": "As an action, you can command a spectral whisper to strike a target within 60 feet. The target takes necrotic damage equal to your character level. You can use this ability once every 3 rounds."
      },
      {
        "title": "Shadow Steal",
        "rules": "When you hit a creature with a melee weapon attack, roll a d20. On a natural 20, the target takes additional necrotic damage equal to 10% of its current hit point total."
      }
    ],
    "levelRequirementReason": "The shard's necrotic resonance requires a high enough spiritual fortitude to handle without being consumed.",
    "vendorReason": "The Atrium is the primary source of reality-fractured artifacts and necromantic debris.",
    "shippingDetail": "Shipped in a lead-lined container to prevent the whispers from escaping during transit.",
    "usage": {
      "activation": "Passive/Action",
      "duration": "Instantaneous/Permanent",
      "endsWhen": "The shard is dropped or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare status and the significant utility it provides to necromancers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T22:54:21.265308+00:00",
    "aiReviewedAt": "2026-07-21T22:54:21.265308+00:00",
    "aiReviewVersion": 1
  },
  "a_sheriff_badge_for_lawmen": {
    "id": "a_sheriff_badge_for_lawmen",
    "name": "Wario's Wild West Badge",
    "description": "Wario's Wild West Badge is a heavy, tarnished metal sheriff's star forged by the notorious Wario West. This badge serves as a symbol of authority for those seeking to impose their will on the frontier.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Sheriff's Intimidation",
      "Western Diplomacy",
      "Tarnished Shine"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sheriff Ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sheriff's Intimidation",
        "rules": "You gain a +1 bonus to Charisma (Intimidation) checks made against creatures that are aware of your role as a lawman."
      },
      {
        "title": "Western Diplomacy",
        "rules": "You gain a +1 bonus to Charisma (Persuasion) checks made while interacting with NPCs in frontier towns or settlements."
      },
      {
        "title": "Tarnished Shine",
        "rules": "Because the badge is poorly maintained, you have disadvantage on any Charisma (Performance) checks made to impress others with the badge's luster."
      }
    ],
    "levelRequirementReason": "The item is a common utility badge and does not require high-level proficiencies.",
    "vendorReason": "Wario West is the primary source of rugged frontier gear in this region.",
    "shippingDetail": "Delivered via armored transport; arrives in 2 days.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The badge is discarded or lost.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4600 to reflect its common rarity and minor numerical bonuses.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-21T22:54:42.904500+00:00",
    "aiReviewedAt": "2026-07-21T22:54:42.904500+00:00",
    "aiReviewVersion": 1
  },
  "a_shiny_plastic_card_it": {
    "id": "a_shiny_plastic_card_it",
    "name": "Wario's Gold Membership",
    "description": "Wario's Gold Membership is a shiny plastic card featuring a bold, gold-embossed logo. This premium membership card serves as a testament to your extreme generosity toward Wario's personal treasury.",
    "category": "premium",
    "price": 1000,
    "icon": "💳",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Wario's Favor",
      "Sticker of Completion"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Gold Plated Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wario's Favor",
        "rules": "While holding this card, you gain a unique dialogue option when interacting with Wario. You can use a Bonus Action to present the card, granting you a one-time advantage on a Charisma (Persuasion) check to request a favor or a discount from him."
      },
      {
        "title": "Sticker of Completion",
        "rules": "Upon purchasing this item, you receive a physical 'Gold Member' sticker. This sticker provides no mechanical benefits but can be placed on your gear or shield as a permanent cosmetic mark."
      }
    ],
    "levelRequirementReason": "This is a cosmetic membership item accessible to all adventurers.",
    "vendorReason": "The item is sold directly by Wario as a premium status symbol.",
    "shippingDetail": "The card arrives in a heavy, gold-plated envelope that requires a Strength check of 10 to open.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The one-time favor is granted or the card is lost.",
      "charges": "1 use for the dialogue advantage"
    },
    "priceReason": "The price was reduced from 250,000 to reflect a balanced cost for a cosmetic membership rather than a game-breaking penalty.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-21T22:55:07.966428+00:00",
    "aiReviewedAt": "2026-07-21T22:55:07.966428+00:00",
    "aiReviewVersion": 1
  },
  "a_shiny_wand_that_beeps": {
    "id": "a_shiny_wand_that_beeps",
    "name": "Wario's Gold Detector Wand (Scam Alert!)",
    "description": "Wario's Gold Detector Wand is a gaudy, gold-plated wand crafted in Wario's Shady Workshop. It emits a series of erratic beeps and vibrations intended to signal nearby riches, though its reliability is as questionable as its owner's ethics.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Unreliable Detection",
      "Greedy Vibration",
      "Shady Backfire"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warios Wacky Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unreliable Detection",
        "rules": "While holding the wand, you have advantage on Wisdom (Perception) checks to locate hidden objects or treasure. However, if the wand detects a non-magical treasure, there is a 50% chance it instead points toward a pile of worthless dirt or common rocks."
      },
      {
        "title": "Greedy Vibration",
        "rules": "When you use the wand to intimidate a creature within 30 feet, you can grant yourself a +1 bonus to the Charisma (Intimidation) check as the wand vibrates with Wario-style greed."
      },
      {
        "title": "Shady Backfire",
        "rules": "If you roll a 1 on an attack roll or ability check while using the wand's detection property, it explodes in a cloud of fake gold dust. All creatures within 5 feet must succeed on a DC 10 Constitution saving throw or be blinded until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The item provides utility and minor bonuses suitable for early-game exploration.",
    "vendorReason": "Wario's Shady Workshop is the primary source for these dubious, high-profit gadgets.",
    "shippingDetail": "Delivered in a battered crate; may arrive with a 'Guaranteed Satisfaction (Not Really)' sticker.",
    "usage": {
      "activation": "Passive (Detection) or Action (Intimidation)",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the wand is no longer held or the backfire triggers.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 12,000 XP to reflect its unreliable nature and uncommon rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-21T22:55:35.083537+00:00",
    "aiReviewedAt": "2026-07-21T22:55:35.083537+00:00",
    "aiReviewVersion": 1
  },
  "a_silk_handkerchief_said_to": {
    "id": "a_silk_handkerchief_said_to",
    "name": "Peach's Ghostly Handkerchief",
    "description": "This silk handkerchief was crafted by the Royal Wardrobe and carries the lingering, somber essence of the princess. As a spectral souvenir, it feels unnaturally cold to the touch and occasionally vibrates with a faint, mournful hum.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Soothing Wave",
      "Haunted Whispers",
      "Melancholy Aura"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ethereal Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soothing Wave",
        "rules": "As an action, you can wave the handkerchief to calm one ally within 30 feet. The target succeeds on a Wisdom saving throw (DC 13) against being frightened. Once used, this effect cannot be used again until the next dawn."
      },
      {
        "title": "Haunted Whispers",
        "rules": "While holding the handkerchief, you have advantage on Wisdom (Insight) checks made to discern secrets regarding royalty or high-born lineage."
      },
      {
        "title": "Melancholy Aura",
        "rules": "The handkerchief's sadness causes you to have disadvantage on Charisma (Persuasion) checks made against spirits or undead creatures."
      }
    ],
    "levelRequirementReason": "The item is balanced for all levels as its effects are utility-based rather than power-scaling.",
    "vendorReason": "The vendor acquires these items from the ruins of the princess's former estate.",
    "shippingDetail": "The item is delivered via a phased delivery; it may appear in your inventory 1d4 hours after purchase.",
    "usage": {
      "activation": "Action or Passive",
      "duration": "Instantaneous or Persistent",
      "endsWhen": "The handkerchief's magic fades completely after 5 total uses of the Soothing Wave effect.",
      "charges": "5 uses total"
    },
    "priceReason": "Adjusted to a standard uncommon price for a utility item with limited uses.",
    "priceOriginal": 5700,
    "priceReviewedAt": "2026-07-21T22:55:58.173934+00:00",
    "aiReviewedAt": "2026-07-21T22:55:58.173934+00:00",
    "aiReviewVersion": 1
  },
  "a_single_glove_from_the": {
    "id": "a_single_glove_from_the",
    "name": "Peach's Garden Glove",
    "description": "This Peach's Garden Glove is a single, earth-stained gardening glove salvaged from the princess's private grounds. Crafted by the Royal Gardens, it still carries the faint scent of war-torn soil and blooming flora.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Botanical Affinity",
      "Sentimental Burden",
      "Floral Distraction"
    ],
    "vendor": "wario_land",
    "shippedBy": "Floral Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Botanical Affinity",
        "rules": "While wearing the glove, you have advantage on Wisdom (Nature) checks made to identify or interact with plant life."
      },
      {
        "title": "Sentimental Burden",
        "rules": "You have disadvantage on Charisma (Persuasion) checks made against any gardener or druid who recognizes the glove as a royal relic."
      },
      {
        "title": "Floral Distraction",
        "rules": "As an action, you can cause minor illusory flowers to bloom in a 10-foot radius centered on yourself. For 1 minute, any creature that can see you must succeed on a DC 12 Wisdom saving throw or be distracted, granting you advantage on the next attack roll made against them before the end of your next turn."
      }
    ],
    "levelRequirementReason": "The item is common rarity and provides minor utility rather than significant combat power.",
    "vendorReason": "Wario acquires discarded royal debris and sells it as 'vintage' loot.",
    "shippingDetail": "Delivered in a moisture-sealed crate to prevent the soil from drying out.",
    "usage": {
      "activation": "Passive (Affinity), Action (Floral Distraction)",
      "duration": "1 minute for Floral Distraction",
      "endsWhen": "The Floral Distraction effect ends after one use or 1 minute; the glove loses all magical properties if it is soaked in blood or fire during combat.",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted down from 4700 to reflect its common rarity and utility-based mechanics.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-21T22:56:22.258710+00:00",
    "aiReviewedAt": "2026-07-21T22:56:22.258710+00:00",
    "aiReviewVersion": 1
  },
  "a_single_page_from_a": {
    "id": "a_single_page_from_a",
    "name": "Mages' Guild Spellbook Page",
    "description": "This Mages' Guild Spellbook Page is a weathered scrap of vellum containing the precise arcane notations for a single cantrip. Crafted by the esteemed Mages' Guild, the ink still hums with a faint, residual magical resonance.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📄",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Cantrip Transcription",
      "Arcane Resonance"
    ],
    "vendor": "mages_guild_hall",
    "shippedBy": "Sealed Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cantrip Transcription",
        "rules": "As an action, you can spend 1 hour studying this page to copy one cantrip of your choice from the Mages' Guild's repertoire into your spellbook. You must have a spellbook to perform this action, and you can only transcribe one cantrip from this specific page."
      },
      {
        "title": "Arcane Resonance",
        "rules": "While the page is held in your hand, you gain a +1 bonus to your next Intelligence (Arcana) check made to identify a magic item or spell within 30 feet."
      }
    ],
    "levelRequirementReason": "Cantrips are foundational magic accessible to all aspiring spellcasters regardless of level.",
    "vendorReason": "The Mages' Guild Hall is the primary repository for academic magical materials and licensed spellbook components.",
    "shippingDetail": "Delivered in a wax-sealed tube to ensure the vellum remains dry and the ink does not smudge.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The page is transcribed into a spellbook or the resonance bonus is used once.",
      "charges": "One-time use for transcription; one-time use for resonance."
    },
    "priceReason": "Reduced from 6500 to reflect a single cantrip's value while maintaining its status as a rare curiosity.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-21T22:56:45.216774+00:00",
    "aiReviewedAt": "2026-07-21T22:56:45.216774+00:00",
    "aiReviewVersion": 1
  },
  "a_spray_bottle_of_concentrated": {
    "id": "a_spray_bottle_of_concentrated",
    "name": "Wario's Garlic Breath Enhancer",
    "description": "Wario's Garlic Breath Enhancer is a small spray bottle filled with a pungent, concentrated garlic extract produced by Wario Land Pharmaceuticals. It is guaranteed to make a lasting impression, though it may leave your social life in tatters.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Garlic Breath Attack",
      "Repulsive Odor",
      "Vampiric Deterrent"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud (Express)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Breath Attack",
        "rules": "As a bonus action, you spray the contents into the air. One creature within 5 feet must succeed on a DC 12 Constitution saving throw or take 1d4 poison damage."
      },
      {
        "title": "Repulsive Odor",
        "rules": "For 1 hour after use, you have disadvantage on all Charisma (Persuasion) and Charisma (Deception) checks due to the overwhelming stench."
      },
      {
        "title": "Vampiric Deterrent",
        "rules": "Any vampire or blood-sucking creature that starts its turn within 10 feet of you must succeed on a DC 15 Wisdom saving throw or be forced to use its reaction to move up to its speed away from you. This effect lasts for 1 round."
      }
    ],
    "levelRequirementReason": "The item is balanced for low-level use as the damage output is minimal and the social penalty is significant.",
    "vendorReason": "Wario Land Pharmaceuticals is the direct manufacturer of this pungent pharmaceutical product.",
    "shippingDetail": "The item is shipped in a sealed, airtight container to prevent the smell from overwhelming the courier.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour (odor effect)",
      "endsWhen": "The spray bottle is emptied (3 uses total)",
      "charges": "3 uses"
    },
    "priceReason": "Adjusted to reflect a standard uncommon utility item price for a 5e-compatible experience.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-21T22:57:11.149339+00:00",
    "aiReviewedAt": "2026-07-21T22:57:11.149339+00:00",
    "aiReviewVersion": 1
  },
  "a_sturdy_string_blessed_by_1": {
    "id": "a_sturdy_string_blessed_by_1",
    "name": "Gondor Ranger's Enchanted Bowstring",
    "description": "The Gondor Ranger's Enchanted Bowstring is a thick, resilient cord of sinew blessed by the White Tree. This sturdy string hums with a faint, protective resonance when pulled, specifically designed for precision in the dense wilds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏹",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Cover Penetration",
      "Forest Awareness",
      "Durability Limit"
    ],
    "vendor": "kingdom_gondor",
    "shippedBy": "Beacon Runner",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cover Penetration",
        "rules": "While attached to a longbow, you gain a +1 bonus to attack rolls against targets using half cover. Additionally, your ranged weapon attacks ignore half cover."
      },
      {
        "title": "Forest Awareness",
        "rules": "While in a forest environment, you gain a +2 bonus to Wisdom (Perception) checks to detect hidden enemies or approaching foes."
      },
      {
        "title": "Durability Limit",
        "rules": "The string frays after 50 shots; you must spend 1 minute using Ranger's Thread to repair it, or the string becomes unusable."
      }
    ],
    "levelRequirementReason": "The previous level 5 requirement was removed to allow early-game rangers to access basic utility.",
    "vendorReason": "As a staple of Gondorian archery, this item is a primary export of the kingdom's smiths.",
    "shippingDetail": "Delivered via swift courier; arrives within 24 hours of order confirmation.",
    "usage": {
      "activation": "Passive/Equipped",
      "duration": "Permanent while equipped",
      "endsWhen": "The string is destroyed or the user chooses to remove it.",
      "charges": "50 shots before requiring repair"
    },
    "priceReason": "Reduced from 14,500 XP to reflect an uncommon utility item rather than a legendary relic.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-21T22:57:34.056223+00:00",
    "aiReviewedAt": "2026-07-21T22:57:34.056223+00:00",
    "aiReviewVersion": 1
  },
  "a_sword_forged_from_reclaimed_1": {
    "id": "a_sword_forged_from_reclaimed_1",
    "name": "Ironclad Blade of the Forge",
    "description": "The Ironclad Blade of the Forge is a heavy longsword constructed from reclaimed industrial steel and enchanted with the wrath of the Iron Legion. Its edge glows with a dull orange heat, a lingering remnant from the last great smelting furnace.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Armor-Piercing Edge",
      "Critical Strike Enhancement",
      "Heavy Impact Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor-Piercing Edge",
        "rules": "When you hit a creature with a melee weapon attack, you deal an additional 1d6 slashing damage if the target is wearing heavy armor or has a natural Armor Class of 17 or higher."
      },
      {
        "title": "Critical Strike Enhancement",
        "rules": "You gain a +1 bonus to your attack rolls made with this magic weapon. Additionally, your critical hit range increases to 19-20."
      },
      {
        "title": "Heavy Impact Resistance",
        "rules": "When you are hit by a melee weapon attack from a creature using a Heavy weapon property, you gain 10 temporary hit points."
      }
    ],
    "levelRequirementReason": "The blade's enchanted weight and industrial power require a character of at least 5th level to wield effectively.",
    "vendorReason": "The Midlands region is the primary hub for industrial steel and salvaged military equipment.",
    "shippingDetail": "Shipped in a reinforced crate to prevent the blade's residual heat from melting standard packaging.",
    "usage": {
      "activation": "Passive/Automatic",
      "duration": "Permanent",
      "endsWhen": "The item is destroyed or lost",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare industrial materials and the high-tier 'Rare' rarity of the enchantment.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T22:57:57.589669+00:00",
    "aiReviewedAt": "2026-07-21T22:57:57.589669+00:00",
    "aiReviewVersion": 1
  },
  "a_ticket_to_wario_s": {
    "id": "a_ticket_to_wario_s",
    "name": "Wario's Wonderland Ticket",
    "description": "This Wario's Wonderland Ticket is a crinkled, grease-stained slip of paper produced by Wario Attractions. It grants the holder access to the 'backyard' tour, where the pungent scent of discarded loot lingers in the air.",
    "category": "services",
    "price": 1000,
    "icon": "🎫",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Treasure in the Trash",
      "Wario's Guidance",
      "Expiring Validity"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wonder Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Treasure in the Trash",
        "rules": "As an action, you can present this ticket to a pile of refuse or a waste bin to search for 'treasure.' You find a small amount of loot equal to 1d20 gp in discarded items. This effect can be used only once per ticket."
      },
      {
        "title": "Wario's Guidance",
        "rules": "While holding this ticket, you have Advantage on Charisma (Deception) checks made specifically to interact with or trick Wario."
      },
      {
        "title": "Expiring Validity",
        "rules": "If this ticket is not redeemed for the 'Treasure in the Trash' effect within 24 hours of acquisition, it loses its magic. While holding an expired ticket, you have disadvantage on all Charisma (Persuasion) checks made with NPCs who are not Wario."
      }
    ],
    "levelRequirementReason": "The item is a common service ticket and does not require advanced character progression.",
    "vendorReason": "This is the primary location for Wario's official backyard attractions.",
    "shippingDetail": "Delivered via a slow-moving, slightly erratic walking courier.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The ticket is spent or expires after 24 hours.",
      "charges": "1 use"
    },
    "priceReason": "Reduced from 4000 to reflect its status as a common, single-use service item.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-21T22:58:22.944188+00:00",
    "aiReviewedAt": "2026-07-21T22:58:22.944188+00:00",
    "aiReviewVersion": 1
  },
  "a_tiny_metallic_key_that": {
    "id": "a_tiny_metallic_key_that",
    "name": "Shadowfell Keychain",
    "description": "This Shadowfell Keychain is a tiny metallic key carved with the sigils of Onyx Hand vampires. Forged by a fallen priestess who traded her soul to the Shadowfell's heart, it hums with a cold, necrotic resonance.",
    "category": "equipment",
    "price": 7000,
    "icon": "🔒",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Shadowfell Slip",
      "Umbral Stealth",
      "Sanity Drain"
    ],
    "vendor": "the_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Shadowfell Slip",
        "rules": "As an action, you can turn ethereal and teleport up to 30 feet into an adjacent plane of existence (the Shadowfell). You remain in the Shadowfell for 1 minute or until you use this action again. You can use this property a number of times equal to your Proficiency Bonus, regaining all uses at dawn."
      },
      {
        "title": "Umbral Stealth",
        "rules": "While in dim light or darkness, you gain a +3 bonus to Dexterity (Stealth) checks. Additionally, you can cast 'Pass Without Trace' once per long rest without expending a spell slot; the spell's DC is 15."
      },
      {
        "title": "Sanity Drain",
        "rules": "Whenever you use the Shadowfell Slip property, you must succeed on a DC 14 Wisdom saving throw. On a failure, you take 2d6 psychic damage as your sanity is drained. This damage cannot be reduced in any way."
      }
    ],
    "levelRequirementReason": "The psychic strain of the Shadowfell's heart requires a high mental fortitude to wield safely.",
    "vendorReason": "The Edge specializes in illicit, high-rarity items from forbidden planes.",
    "shippingDetail": "Delivered via a clandestine, high-risk courier route that takes 3-5 days.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or the user chooses to return to the Material Plane.",
      "charges": "Proficiency Bonus per Long Rest"
    },
    "priceReason": "The price reflects its Epic rarity and the high-risk, high-reward nature of Shadowfell travel.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-21T22:59:14.871745+00:00",
    "aiReviewedAt": "2026-07-21T22:59:14.871745+00:00",
    "aiReviewVersion": 1
  },
  "a_token_of_bureaucratic_chaos": {
    "id": "a_token_of_bureaucratic_chaos",
    "name": "Gehenna Academy Keychain",
    "description": "The Gehenna Academy Keychain is a jingling metal token of academic pride, forged by Skaven in the shadows of the academy. Its jagged edges and bureaucratic markings hum with a chaotic energy that favors the student over the administrator.",
    "price": 1000,
    "icon": "📜",
    "stock": 20,
    "rarity": "uncommon",
    "effects": [
      "Administrative Immunity",
      "Key-Finder's Luck",
      "Bureaucratic Chaos",
      "Student's Vitality"
    ],
    "vendor": "kivotos",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Administrative Immunity",
        "rules": "While holding the keychain, you have advantage on Charisma (Persuasion) checks made to avoid administrative penalties, fines, or detention from authority figures."
      },
      {
        "title": "Key-Finder's Luck",
        "rules": "When searching a room for a hidden object or key, you can roll a d20; on a result of 11 or higher, you automatically locate the object."
      },
      {
        "title": "Bureaucratic Chaos",
        "rules": "After using the keychain's 'Key-Finder's Luck' property, roll a d6. On a 1, a random bureaucratic event occurs: a nearby door locks, a nearby light flickers out, or a nearby desk becomes cluttered with useless paperwork for 1 hour."
      },
      {
        "title": "Student's Vitality",
        "rules": "While wearing the keychain as an item, you regain 1d6 hit points as a bonus action. You can use this property a number of times equal to your Proficiency Bonus, regaining all uses after a Long Rest."
      }
    ],
    "levelRequirementReason": "The item is designed for early-game exploration and social interaction.",
    "vendorReason": "The vendor is the primary source for academic supplies and student-related trinkets.",
    "shippingDetail": "Delivered via a clandestine drop-off point to avoid official academy oversight.",
    "usage": {
      "activation": "Bonus Action for Vitality; Passive for Immunity; Action for Key-Finder",
      "duration": "Instantaneous",
      "endsWhen": "Ends when the daily uses are exhausted or the item is discarded.",
      "charges": "Uses equal to Proficiency Bonus per Long Rest"
    },
    "priceReason": "Adjusted to reflect the uncommon rarity and the utility of multiple active effects.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-21T22:59:42.926803+00:00",
    "aiReviewedAt": "2026-07-21T22:59:42.926803+00:00",
    "aiReviewVersion": 1
  },
  "a_tooth_from_the_koopa_1": {
    "id": "a_tooth_from_the_koopa_1",
    "name": "Bowser's Fang Amulet",
    "description": "This Bowser's Fang Amulet features a jagged, yellowed tooth from a fallen Koopa King's soldier, strung onto a coarse leather cord. Crafted by the Battlefield Dentist, the necklace pulses with a faint, primal heat from the Koopa Troop's remains.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Koopa Intimidation",
      "Fang Strike",
      "Tremor Instability"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fang-Filled Freight",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Koopa Intimidation",
        "rules": "While wearing this amulet, you have advantage on Charisma (Intimidation) checks made against any Koopa Troop remnants or minions."
      },
      {
        "title": "Fang Strike",
        "rules": "When you hit a creature with a bite attack, the fang's power adds an extra 1d6 piercing damage to the strike. This effect can be used once per long rest."
      },
      {
        "title": "Tremor Instability",
        "rules": "Whenever you roll a 1 on a d20 while wearing the amulet, the item becomes unstable. A 10-foot radius centered on you becomes difficult terrain until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The item's offensive power and intimidation utility are balanced for mid-tier adventuring.",
    "vendorReason": "Wario's Souvenirs specializes in loot recovered from battlefield remains.",
    "shippingDetail": "Items are packed in heavy-duty crates to prevent the jagged fangs from puncturing the packaging.",
    "usage": {
      "activation": "Passive (Amulet), Action (Fang Strike), Automatic (Tremor Instability)",
      "duration": "Permanent (Amulet), Instantaneous (Strike/Tremor)",
      "endsWhen": "Fang Strike resets on long rest; Tremor ends at start of next turn.",
      "charges": "1 use per long rest for Fang Strike"
    },
    "priceReason": "Reduced from 5200 to 1000 to align with standard uncommon magic item market values.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-21T23:00:15.926123+00:00",
    "aiReviewedAt": "2026-07-21T23:00:15.926123+00:00",
    "aiReviewVersion": 1
  },
  "a_toothpick_so_fancy_you": {
    "id": "a_toothpick_so_fancy_you",
    "name": "Wario's Gold-Plated Toothpick",
    "description": "Wario's Gold-Plated Toothpick is a shimmering, ostentatious utensil forged by Wario Land Dental (Not a Real Dentist). This gold-plated toothpick is designed for the elite, though it carries a pungent, lingering aftertaste.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Fancy Lockpicking",
      "Garlic Breath",
      "Ostentatious Presence",
      "Brittle Snap"
    ],
    "vendor": "wario_land",
    "shippedBy": "Gold-Plated Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fancy Lockpicking",
        "rules": "While using this toothpick as a lockpick, you have advantage on Dexterity (Thieves' Tools) checks. However, there is a 5% chance the toothpick snaps; if it snaps, the lock becomes jammed, imposing disadvantage on all future attempts to open that specific lock until repaired by a smith."
      },
      {
        "title": "Garlic Breath",
        "rules": "After a successful lockpicking attempt, you must clean the toothpick with your mouth. You regain 1 hit point, but you have disadvantage on Charisma (Persuasion) and Charisma (Deception) checks for 10 minutes due to intense garlic breath."
      },
      {
        "title": "Ostentatious Presence",
        "rules": "While holding the toothpick in your mouth or hand, wealthy NPCs (those with a wealth status of 'Rich' or higher) have advantage on Charisma checks made against you."
      },
      {
        "title": "Brittle Snap",
        "rules": "If the toothpick snaps during a lockpicking attempt, it is destroyed and cannot be used again."
      }
    ],
    "levelRequirementReason": "The item is a common utility tool and does not require high-level proficiency to wield.",
    "vendorReason": "The vendor specializes in eccentric, high-status items from the Wario Land region.",
    "shippingDetail": "Delivered in a velvet-lined pouch to ensure the gold plating remains untarnished.",
    "usage": {
      "activation": "Action or Passive",
      "duration": "Instantaneous or 10 minutes",
      "endsWhen": "Effect expires or toothpick snaps",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 9500 to reflect a common-rarity utility item with balanced risk-reward mechanics.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-21T23:00:51.386625+00:00",
    "aiReviewedAt": "2026-07-21T23:00:51.386625+00:00",
    "aiReviewVersion": 1
  },
  "a_treasure_map_that_wario": {
    "id": "a_treasure_map_that_wario",
    "name": "Wario's 'Totally Legit' Treasure Map",
    "description": "Wario's 'Totally Legit' Treasure Map is a crude piece of parchment drawn in thick, waxy crayons by Wario Land Cartography. While the map looks suspiciously amateur, the bold lines promise a hidden stash of loot.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Unreliable Navigation",
      "Wario's Inconvenience",
      "Embarrassing Loot"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unreliable Navigation",
        "rules": "When you use the map to navigate to a new location, the DM rolls a d20. On a 1-10, the map leads to a trap; on an 11-20, it leads to a treasure cache. If a trap is triggered, it is a Wario-style prank that deals no damage but causes the party to lose 100 gp to a nearby 'thief' (Wario). If treasure is found, it contains 2d100 gp, but every coin features Wario's face, making them impossible to spend discreetly."
      },
      {
        "title": "Wario's Inconvenience",
        "rules": "Because the map is drawn in crayon, any creature with a Passive Perception of 15 or higher can automatically succeed on a Wisdom (Perception) check to realize the map is a fake, though they cannot prevent the map's effects from occurring once used."
      },
      {
        "title": "Embarrassing Loot",
        "rules": "Any gold coins obtained from this map cannot be used to purchase items from high-end merchants without the owner making a DC 12 Charisma (Persuasion) check to hide the coins' faces."
      }
    ],
    "levelRequirementReason": "The item is an uncommon consumable/map and does not require high-level magic or physical feats to utilize.",
    "vendorReason": "The vendor is the direct source of the map's questionable cartography.",
    "shippingDetail": "The package arrives with a 'Do Not Open Until You're Desperate' warning and smells faintly of grease.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The map is used once to determine a location.",
      "charges": "1 use"
    },
    "priceReason": "Reduced from 16,500 to reflect an uncommon item that provides a one-time navigation check rather than a permanent boon.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-21T23:01:20.524726+00:00",
    "aiReviewedAt": "2026-07-21T23:01:20.524726+00:00",
    "aiReviewVersion": 1
  },
  "a_volatile_device_designed_for": {
    "id": "a_volatile_device_designed_for",
    "name": "Ink Jam Bomb",
    "description": "The Ink Jam Bomb is a volatile, glass-cased device filled with pressurized, reactive pigment. Originally designed for chaotic disruption, this throwable orb leaves a sticky, blinding residue upon detonation.",
    "price": 1000,
    "icon": "💣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Ink Blast Damage",
      "Ink-Jamming Blight",
      "Vision Distortion",
      "Navy Ambush Chance"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Cheep Cheep Shipping",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Ink Blast Damage",
        "rules": "When the bomb hits a surface or creature, it explodes. Each creature within a 10-foot radius must make a DC 13 Dexterity saving throw, taking 3d4 bludgeoning damage on a failed save, or half as much on a success."
      },
      {
        "title": "Ink-Jamming Blight",
        "rules": "Any creature that fails the Dexterity saving throw is coated in ink. The target's speed is reduced by 10 feet and it cannot take reactions until the start of its next turn."
      },
      {
        "title": "Vision Distortion",
        "rules": "The target's vision is blurred by the ink. Until the end of its next turn, the target has disadvantage on Perception checks and ranged attack rolls."
      },
      {
        "title": "Navy Ambush Chance",
        "rules": "On a successful hit against a creature, roll a d20. On a 1-10, a Koopa Navy ambush is triggered, requiring the DM to initiate a random encounter within 1d4 rounds."
      }
    ],
    "levelRequirementReason": "The volatile nature of the device requires a character with enough experience to handle the explosive risk.",
    "vendorReason": "This vendor specializes in high-risk, high-reward disruptive gadgets.",
    "shippingDetail": "Delivered via aquatic courier; handled with extreme care to prevent premature detonation.",
    "usage": {
      "activation": "Action (Throw or Drop)",
      "duration": "Instantaneous",
      "endsWhen": "The bomb is destroyed upon impact.",
      "charges": "Single use; the item is destroyed after one detonation."
    },
    "priceReason": "Reduced slightly from 1200 to reflect a standard uncommon utility item price point.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-21T23:01:47.094869+00:00",
    "aiReviewedAt": "2026-07-21T23:01:47.094869+00:00",
    "aiReviewVersion": 1
  },
  "a_wallet_that_holds_your": {
    "id": "a_wallet_that_holds_your",
    "name": "Wario's Wafting Wallet",
    "description": "Wario's Wafting Wallet is a bulging leather pouch featuring a crude portrait of Wario on the front. Manufactured by Wario Land Banking (Unsecured), this item emits a pungent, lingering scent of garlic.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Weightless Hoard",
      "Garlic Aura",
      "Dishonest Visage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Loose Change Limo",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weightless Hoard",
        "rules": "The wallet can hold up to 500 gp without adding any weight to your pack. However, at the end of each day, roll a d10; on a 1, the wallet 'wafts' away 1d10 gp of currency to an unknown location."
      },
      {
        "title": "Garlic Aura",
        "rules": "While the wallet is on your person, you have advantage on Charisma (Intimidation) checks against thieves, who believe the item is cursed. This effect does not apply to non-hostile creatures."
      },
      {
        "title": "Dishonest Visage",
        "rules": "Because of the prominent face on the front, you have disadvantage on Charisma (Persuasion) checks made against honest commoners and officials."
      }
    ],
    "levelRequirementReason": "The item is a utility accessory and does not require high-level proficiency to use.",
    "vendorReason": "The item is branded by Wario Land Banking and is a staple of their unsecured inventory.",
    "shippingDetail": "The wallet is delivered in a padded box to ensure the contents don't 'waft' out during transit.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The wallet is destroyed or lost",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 5400 to 1000 to reflect its status as an uncommon utility item rather than a high-value magical artifact.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-21T23:02:11.227505+00:00",
    "aiReviewedAt": "2026-07-21T23:02:11.227505+00:00",
    "aiReviewVersion": 1
  },
  "a_wallet_that_never_empties": {
    "id": "a_wallet_that_never_empties",
    "name": "Wario's Bottomless Wallet (Total Scam!)",
    "description": "Wario's Bottomless Wallet (Total Scam!) is a bulging, oversized leather pouch from Wario's Scam Supreme. While it appears to overflow with heavy gold coins, the contents are actually cleverly painted rocks.",
    "category": "equipment",
    "price": 1000,
    "icon": "💼",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "False Wealth",
      "The Great Scam",
      "Thief's Trap"
    ],
    "vendor": "wario_land",
    "shippedBy": "Empty Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "False Wealth",
        "rules": "While the wallet is held or displayed, you have advantage on Charisma (Deception) checks made to convince others that you possess significant riches."
      },
      {
        "title": "The Great Scam",
        "rules": "If a creature uses an action to inspect the contents of the wallet or attempts to spend the coins, they realize the gold is fake. You immediately lose the ability to use the 'False Wealth' effect, and any 'gold' removed from the wallet is revealed as worthless stone."
      },
      {
        "title": "Thief's Trap",
        "rules": "When a creature other than the owner attempts to forcibly snatch the wallet or open it against the owner's will, the wallet snaps shut. The target must succeed on a DC 13 Dexterity saving throw or have their hand trapped inside. While trapped, the target takes 1d4 piercing damage at the start of each of its turns. The target can use an action to pull their hand free."
      }
    ],
    "levelRequirementReason": "The item is a low-level prank/scam tool and does not require high-level magical proficiency.",
    "vendorReason": "Wario's Scam Supreme is the primary source for high-quality fraudulent goods.",
    "shippingDetail": "The item arrives in a package that feels suspiciously light for its size.",
    "usage": {
      "activation": "Passive or Action (to inspect)",
      "duration": "Permanent",
      "endsWhen": "The scam is revealed by inspection",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 20,000 XP because the item is a fraudulent prop rather than a source of actual currency.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-21T23:02:36.433432+00:00",
    "aiReviewedAt": "2026-07-21T23:02:36.433432+00:00",
    "aiReviewVersion": 1
  },
  "a_wand_of_wonders_mostly": {
    "id": "a_wand_of_wonders_mostly",
    "name": "Wario's Wonder Wand",
    "description": "Wario's Wonder Wand is a chunky, oversized wand crafted by the eccentric Wario Wonders. This whimsical tool produces garlic-scented illusions and erratic sparks that make for a clumsy social experience.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪄",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Garlic Illusion",
      "Socially Awkward Sparks",
      "Wonder Fan",
      "Wario Wonders Craftsmanship"
    ],
    "vendor": "wario_land",
    "shippedBy": "Trick Treat",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Illusion",
        "rules": "As an action, you can cast the minor illusion cantrip. The visual and auditory effects must be themed around garlic or Wario's signature style. This effect lasts for 1 minute or until you dismiss it as a bonus action."
      },
      {
        "title": "Socially Awkward Sparks",
        "rules": "Whenever you attempt to persuade or deceive a creature, the wand emits a loud, flatulent spark. You have disadvantage on Charisma (Persuasion) and Charisma (Deception) checks made in polite or formal social settings."
      },
      {
        "title": "Wonder Fan",
        "rules": "While you are actively using the wand to perform a trick or illusion, you gain a +1 bonus to any Charisma (Deception) check made to perform a sleight-of-hand maneuver."
      },
      {
        "title": "Wario Wonders Craftsmanship",
        "rules": "This item is non-magical in its construction but possesses a permanent 'Wonder' property that prevents it from being dispelled by standard magic."
      }
    ],
    "levelRequirementReason": "The item is balanced for low-level play as it provides minor utility rather than combat power.",
    "vendorReason": "The vendor specializes in Wario's unique brand of whimsical and slightly absurd equipment.",
    "shippingDetail": "Delivered in a box that occasionally releases a puff of garlic-scented smoke upon opening.",
    "usage": {
      "activation": "Action for illusions; Passive for social penalties",
      "duration": "1 minute for illusions",
      "endsWhen": "Dismissed by the user or the illusion is naturally dispelled",
      "charges": "1 use of Garlic Illusion per long rest"
    },
    "priceReason": "Reduced from 5400 to 1000 to reflect its status as an uncommon utility item with social drawbacks.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-21T23:03:04.482217+00:00",
    "aiReviewedAt": "2026-07-21T23:03:04.482217+00:00",
    "aiReviewVersion": 1
  },
  "a_wand_that_casts_wario": {
    "id": "a_wand_that_casts_wario",
    "name": "Wario's  Wand",
    "description": "Wario's Wand is a stout, garlic-scented wooden rod crafted by the masters at Wario Wizardry. It pulses with a pungent, savory energy that resonates with the chaotic spirit of the garlic-loving hero.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪄",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Garlic Illusion",
      "Wario's Presence",
      "Pungent Backfire"
    ],
    "vendor": "wario_land",
    "shippedBy": "Magic Mist Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Garlic Illusion",
        "rules": "As an action, you can cast the Minor Illusion spell to create the sound or appearance of a large clove of garlic. You can use this specific effect once per long rest. The spell follows standard casting rules with a DC of 12."
      },
      {
        "title": "Wario's Presence",
        "rules": "While holding the wand, you gain advantage on Charisma (Intimidation) checks made to cow or threaten enemies, as you radiate a boisterous, intimidating aura."
      },
      {
        "title": "Pungent Backfire",
        "rules": "Whenever you cast a spell using the wand, roll a d20. On a 1, the wand backfires, causing you to reek of garlic for 1 hour; you have disadvantage on all Charisma (Persuasion) checks during this time."
      }
    ],
    "levelRequirementReason": "The wand requires a level 5 character to safely channel the volatile garlic magic without being overwhelmed.",
    "vendorReason": "This item is a signature product of the Wario Wizardry shop located in Wario Land.",
    "shippingDetail": "Delivered via Magic Mist Mail; the pungent aroma may linger on the packaging for 24 hours.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The illusion ends naturally or is dispelled; the backfire ends after 1 hour.",
      "charges": "1 use per long rest for the illusion effect."
    },
    "priceReason": "Adjusted to a standard uncommon price point to balance the Intimidation advantage against its social penalty.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-21T23:03:29.609669+00:00",
    "aiReviewedAt": "2026-07-21T23:03:29.609669+00:00",
    "aiReviewVersion": 1
  },
  "a_wand_that_makes_wa": {
    "id": "a_wand_that_makes_wa",
    "name": "Wario's Wa-Wa Wand (Gimmick Toy!)",
    "description": "Wario's Wa-Wa Wand is a crude, oversized toy wand manufactured in Wario's Toy Factory. When waved, it emits a ridiculous 'wa-wa' sound effect intended to serve as a distraction or a prank.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪄",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Distracting 'Wa-Wa'",
      "Wario's Laugh",
      "Toy Factory Limitation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wa-Wa Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distracting 'Wa-Wa'",
        "rules": "As an action, you wave the wand to produce a loud 'wa-wa' sound in a 30-foot cone. For the next minute, any creature that can hear the sound has disadvantage on Wisdom (Perception) checks made to notice your presence or to track you."
      },
      {
        "title": "Wario's Laugh",
        "rules": "As an action, you can trigger a minor illusion of Wario laughing. Each creature of your choice within 15 feet that can hear the laugh must succeed on a DC 10 Wisdom saving throw or become Frightened until the end of your next turn."
      },
      {
        "title": "Toy Factory Limitation",
        "rules": "The wand has 5 charges. Each use of 'Wario's Laugh' expends 1 charge. The wand does not regain charges unless it is returned to Wario's Toy Factory for a 'recharge' (unavailable to the player)."
      }
    ],
    "levelRequirementReason": "The item is common rarity and intended for early-game utility.",
    "vendorReason": "This item is a signature product of Wario's own manufacturing line.",
    "shippingDetail": "Delivered via a rickety wagon; may arrive with slight scuff marks from the road.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute for 'Wa-Wa'; Instantaneous for 'Laugh'",
      "endsWhen": "The 'Wa-Wa' effect ends after 1 minute or if you are Incapacitated; the 'Laugh' ends when the duration expires.",
      "charges": "5 charges (non-recharging)"
    },
    "priceReason": "Reduced from 8000 XP to reflect its common rarity and limited utility.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T23:04:07.001859+00:00",
    "aiReviewedAt": "2026-07-21T23:04:07.001859+00:00",
    "aiReviewVersion": 1
  },
  "a_watch_that_tells_time": {
    "id": "a_watch_that_tells_time",
    "name": "Wario's  Watch",
    "description": "Wario's Watch is a bulky, oversized timepiece featuring a prominent, grinning face of Wario on the dial. Crafted by Wario Timepieces, this heavy metal watch keeps perfect track of 'Wario time' and emits a loud, rhythmic beep every hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "⌚",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Precise Timing",
      "Loud Hourly Beep",
      "Collector's Intimidation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Tick-Tock Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precise Timing",
        "rules": "You gain advantage on any Initiative roll made at the start of combat as you perfectly time your first move."
      },
      {
        "title": "Loud Hourly Beep",
        "rules": "At the top of every hour, the watch emits a piercing beep. While the beep is audible, you have disadvantage on Stealth checks made to remain hidden."
      },
      {
        "title": "Collector's Intimidation",
        "rules": "When interacting with a creature that collects watches, you have advantage on Charisma (Intimidation) checks made to cow them into submission using the watch's face."
      }
    ],
    "levelRequirementReason": "The item is common utility gear and does not require high-level proficiency to operate.",
    "vendorReason": "Wario Timepieces is a primary merchant in this region.",
    "shippingDetail": "This item arrives via Slow Delivery due to the heavy weight of the metal casing.",
    "usage": {
      "activation": "Passive / Automatic",
      "duration": "Permanent",
      "endsWhen": "The watch is broken or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price was reduced from 4400 to reflect its common rarity and utility-based mechanics.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-21T23:05:10.356663+00:00",
    "aiReviewedAt": "2026-07-21T23:05:10.356663+00:00",
    "aiReviewVersion": 1
  },
  "a_weapon_forged_from_condensed_16": {
    "id": "a_weapon_forged_from_condensed_16",
    "name": "Crystal Blade",
    "description": "The Crystal Blade is a weapon forged from condensed magic that shimmers with arcane energy pulsing in time with the wielder’s heartbeat. Crafted by the Peach Loyalists, this blade leaves a trail of frost and fire in its wake as it reacts to the inner storms of a spellcaster.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Arcane Resonance",
      "Wild Magic Pulse",
      "Overcharged Edge"
    ],
    "vendor": "teyvat",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Arcane Resonance",
        "rules": "When you hit a creature with a melee attack using this weapon, the target takes an additional 2d6 force damage. This effect consumes 1 charge of arcane resonance per hit."
      },
      {
        "title": "Wild Magic Pulse",
        "rules": "Whenever you roll a 1 on a d20 attack roll with this weapon, a surge of wild magic occurs. Roll on the Wild Magic Surge table; the effect lasts until the end of your next turn."
      },
      {
        "title": "Overcharged Edge",
        "rules": "After the weapon has consumed 3 charges of arcane resonance without recharging, the blade glows red. For 1 minute, the weapon deals an additional 1d6 damage to any creature with elemental resistance. This effect ends after 1 minute or when the blade's glow fades."
      }
    ],
    "levelRequirementReason": "The blade requires the mental fortitude of a mid-level spellcaster to harmonize with its volatile arcane pulse.",
    "vendorReason": "Teyvat is a primary hub for high-quality arcane artifacts and enchanted weaponry.",
    "shippingDetail": "Items are delivered via heavy-duty transport; expect a 2-day delivery window for fragile crystalline blades.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "The weapon's charges are depleted or the Overcharged Edge duration expires.",
      "charges": "6 charges (recharges to full at dawn)"
    },
    "priceReason": "The price reflects its rare crafting origin and the significant 2d6 damage scaling.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T23:05:36.209835+00:00",
    "aiReviewedAt": "2026-07-21T23:05:36.209835+00:00",
    "aiReviewVersion": 1
  },
  "a_weaponized_chainsaw_from_the_1": {
    "id": "a_weaponized_chainsaw_from_the_1",
    "name": "Chain Chomp Tether",
    "description": "The Chain Chomp Tether is a jagged, motorized chainsaw forged by Team Rocket to bind and rend the void’s most brutal creatures. Its teeth are perpetually coated in a shimmering, oily residue from the void, allowing it to bite into reality itself.",
    "category": "equipment",
    "price": 8000,
    "icon": "🔪",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Void-Saw Strike",
      "Chainsaw Burst",
      "Void Magnetism",
      "Operator Synergy"
    ],
    "vendor": "the_edge",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Void-Saw Strike",
        "rules": "When you hit a creature with a melee attack using this weapon, it deals an additional 3d8 slashing damage."
      },
      {
        "title": "Chainsaw Burst",
        "rules": "On a hit, roll a d4; on a 1, the saw emits a violent burst. All enemies within 5 feet of the target must succeed on a DC 15 Dexterity saving throw or take 2d6 slashing damage."
      },
      {
        "title": "Void Magnetism",
        "rules": "Whenever the Chainsaw Burst triggers, you gain disadvantage on movement toward non-void creatures for 1 minute as your body becomes temporarily magnetized to void matter."
      },
      {
        "title": "Operator Synergy",
        "rules": "While you are within 30 feet of a Chain Chomp entity, you gain a +2 bonus to all melee attack rolls. This effect ends if you move more than 30 feet away from the entity."
      }
    ],
    "levelRequirementReason": "The item's high damage output and specific entity requirements necessitate a high-level character capable of handling void-touched weaponry.",
    "vendorReason": "The Edge specializes in high-tier, dangerous equipment suitable for elite adventurers.",
    "shippingDetail": "Items are delivered via localized spatial folds to ensure the chainsaw's motor remains primed for use.",
    "usage": {
      "activation": "Passive / On Hit",
      "duration": "Instantaneous",
      "endsWhen": "The bonus ends when moving away from a Chain Chomp; Magnetism ends after 1 minute.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its Epic rarity and the specialized Team Rocket craftsmanship required for void-weaponry.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T23:06:03.346330+00:00",
    "aiReviewedAt": "2026-07-21T23:06:03.346330+00:00",
    "aiReviewVersion": 1
  },
  "a_wrench_for_fixing_or": {
    "id": "a_wrench_for_fixing_or",
    "name": "Wario's  Wrench",
    "description": "Wario's Wrench is a heavy-duty, oversized steel wrench forged by Wario Tools to handle the most stubborn repairs or demolitions. Its rugged construction is built for brute force, though its weight can be cumbersome for the unpracticed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Master Tinker's Advantage",
      "Inventor's Charisma",
      "Unstable Slip"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fix-It Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Master Tinker's Advantage",
        "rules": "While holding this wrench, you have advantage on all Intelligence (Tinker's Tools) checks made to repair or dismantle mechanical objects."
      },
      {
        "title": "Inventor's Charisma",
        "rules": "While the wrench is on your person, you gain a +1 bonus to Charisma (Persuasion) checks made when interacting with inventors or engineers."
      },
      {
        "title": "Unstable Slip",
        "rules": "Whenever you use the wrench to perform a repair or demolition action, roll a d10. On a 1, the wrench slips, dealing 1 point of piercing damage to you."
      }
    ],
    "levelRequirementReason": "The item is common equipment and does not require significant magical power to operate.",
    "vendorReason": "The Wario Land shop specializes in heavy-duty tools and construction equipment.",
    "shippingDetail": "Shipped in a reinforced crate to prevent the heavy steel from shifting during transit.",
    "usage": {
      "activation": "Passive/Action",
      "duration": "Permanent",
      "endsWhen": "The wrench is sold, lost, or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 5000 to align with common utility tool pricing while maintaining its unique mechanical benefits.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T23:06:26.665559+00:00",
    "aiReviewedAt": "2026-07-21T23:06:26.665559+00:00",
    "aiReviewVersion": 1
  },
  "aboleth_mindscape_sanitizer": {
    "id": "aboleth_mindscape_sanitizer",
    "name": "Aboleth Mindscape Sanitization",
    "description": "This Aboleth Mindscape Sanitization is a psionic cleansing service provided by the Illithid Sanitation Crew. It functions as a mental scouring of the psyche, physically purging a single traumatic memory or mind-affecting curse from your consciousness.",
    "price": 25000,
    "icon": "🧠",
    "stock": 7,
    "rarity": "epic",
    "effects": [
      "Memory Purge",
      "Targeted Immunity"
    ],
    "vendor": "mind_cleaners",
    "shippedBy": "Telepathic Link",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Memory Purge",
        "rules": "As an action, you undergo a psionic cleansing. You choose one specific traumatic memory or one ongoing mind-affecting curse (such as those from a Feebleminded or Dominate Monster spell). The chosen memory is erased or the curse is instantly dispelled, ending its effects on you."
      },
      {
        "title": "Targeted Immunity",
        "rules": "For 1 year, you gain immunity to the specific source of the removed memory or the specific spell effect that caused the curse. This immunity is lost if you are subjected to a 9th-level spell that specifically targets your mind."
      }
    ],
    "levelRequirementReason": "The mental fortitude required to survive an Illithid psionic scrubbing is only attainable by high-level adventurers.",
    "vendorReason": "The Mind Cleaners specialize in delicate psionic maintenance and memory management.",
    "shippingDetail": "The service is delivered via a direct neural handshake; no physical delivery is required.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is consumed upon use and the immunity expires after 1 year.",
      "charges": "Single use per purchase."
    },
    "priceReason": "Reduced from the original price to reflect a balanced high-tier service cost for a single-use psionic cleanse.",
    "priceOriginal": 295000,
    "priceReviewedAt": "2026-07-21T23:06:49.174078+00:00",
    "aiReviewedAt": "2026-07-21T23:06:49.174078+00:00",
    "aiReviewVersion": 1
  },
  "absolute_defense_shield": {
    "id": "absolute_defense_shield",
    "name": "Absolute Defense Shield",
    "description": "The Absolute Defense Shield is a massive, matte-grey bulwark forged by The Unbreakable Wall. This heavy plate of enchanted metal is designed to anchor the wielder against the most violent of metaphysical and physical assaults.",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Damage Negation",
      "Targeting Immunity",
      "Narrative Anchor"
    ],
    "vendor": "impregnable_fortress",
    "shippedBy": "Immovable Object",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Damage Negation",
        "rules": "While wielding this shield, you have resistance to all bludgeoning, piercing, and slashing damage from non-magical attacks, and you take half damage from magical attacks."
      },
      {
        "title": "Targeting Immunity",
        "rules": "You cannot be targeted by spells or abilities that require a creature to be 'tracked' or 'selected' by a hostile entity, such as Telekinesis or Hold Monster, as long as you remain within 30 feet of your current position."
      },
      {
        "title": "Narrative Anchor",
        "rules": "You are immune to forced movement and effects that would displace your physical form, such as being pushed, pulled, or teleported against your will."
      }
    ],
    "levelRequirementReason": "Removed the level 95 gate to allow for balanced high-tier play while maintaining its defensive utility.",
    "vendorReason": "The fortress specializes in defensive fortifications and immovable structures.",
    "shippingDetail": "The item is delivered by a slow-moving, literal mountain of stone that takes 1d4 days to arrive.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The shield is dropped or destroyed by a critical hit from a deity-level entity.",
      "charges": "Unlimited"
    },
    "priceReason": "The price was reduced from an impossible amount to a standard high-rarity gold/XP equivalent for a powerful defensive tool.",
    "priceOriginal": 60000000,
    "priceReviewedAt": "2026-07-21T23:07:12.907487+00:00",
    "aiReviewedAt": "2026-07-21T23:07:12.907487+00:00",
    "aiReviewVersion": 1
  },
  "absolute_zero_frozen_core": {
    "id": "absolute_zero_frozen_core",
    "name": "Absolute Zero Frozen Core",
    "description": "The Absolute Zero Frozen Core is a pulsating sphere of crystalline frost forged by The Ice That Never Thaws. It hums with a chilling resonance that threatens to lock the very flow of causality into a permanent winter.",
    "category": "consumables",
    "price": 50000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Temporal Stasis Field",
      "Kinetic Manipulation"
    ],
    "vendor": "frozen_eternity",
    "shippedBy": "Stasis Field",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Temporal Stasis Field",
        "rules": "As an action, you shatter the core to create a 1-mile radius of frozen time. All creatures and objects within the area are paralyzed and unable to take actions or move unless they are the user of the core. This effect lasts for 1 minute. The area is unaffected by other spells or magical effects."
      },
      {
        "title": "Kinetic Manipulation",
        "rules": "While the Temporal Stasis Field is active, you can move any object or creature within the radius as a bonus action. However, any creature moved this way reverts to its original position and state the moment you leave the 1-mile radius or the effect ends."
      }
    ],
    "levelRequirementReason": "The sheer magnitude of altering a 1-mile radius of reality requires extreme mastery of high-level magic.",
    "vendorReason": "This vendor specializes in artifacts of absolute stasis and eternal frost.",
    "shippingDetail": "The item is delivered in a vacuum-sealed container to prevent it from freezing the courier's transport.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or the user voluntarily dismisses the effect.",
      "charges": "Single use; the core is destroyed upon activation."
    },
    "priceReason": "Adjusted from the original value to reflect a high-tier legendary consumable while remaining within a playable economy.",
    "priceOriginal": 65000000,
    "priceReviewedAt": "2026-07-21T23:07:36.215936+00:00",
    "aiReviewedAt": "2026-07-21T23:07:36.215936+00:00",
    "aiReviewVersion": 1
  },
  "abydos_high_school_bento_box_set": {
    "id": "abydos_high_school_bento_box_set",
    "name": "Abydos High School Bento Box Set ",
    "description": "The Abydos High School Bento Box Set consists of several compartmentalized containers crafted by the School Crafters. These durable boxes feature a distinct bell-shaped timer and are designed to keep meals organized and secure during long travels.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍱",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Culinary Organization",
      "Hermetic Seal",
      "Audible Timer"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Bento Bell Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Culinary Organization",
        "rules": "While holding this set, you gain a +1 bonus to Intelligence (Investigation) checks made to identify ingredients or recall complex school recipes."
      },
      {
        "title": "Hermetic Seal",
        "rules": "When a container is closed, it is airtight; food remains fresh for 24 hours and is protected from external odors or minor environmental contaminants."
      },
      {
        "title": "Audible Timer",
        "rules": "As an action, you can set the bell-shaped timer to ring at a specific interval; it emits a loud 'ding' at the designated time, regardless of distance (up to 60 feet)."
      }
    ],
    "levelRequirementReason": "This is a common utility item and does not require high-level proficiency.",
    "vendorReason": "The item is produced by the local School Crafters on campus.",
    "shippingDetail": "Shipped in insulated packaging to ensure the containers remain pristine.",
    "usage": {
      "activation": "Passive/Action",
      "duration": "Permanent/Variable",
      "endsWhen": "The effect ends if the boxes are destroyed or the timer is reset.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 6000 to reflect a standard uncommon utility item price point.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-21T23:07:58.350932+00:00",
    "aiReviewedAt": "2026-07-21T23:07:58.350932+00:00",
    "aiReviewVersion": 1
  },
  "abydos_high_school_blazer": {
    "id": "abydos_high_school_blazer",
    "name": "Abydos High School Blazer ",
    "description": "This Abydos High School Blazer is a crisp, navy-blue garment tailored by the High School Tailors. The fabric is durable enough for youthful adventures while maintaining a scholarly aesthetic.",
    "price": 1000,
    "icon": "👔",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Academic Aptitude",
      "Inspirational Study",
      "Uniform Violation"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Buttoned Badge",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Academic Aptitude",
        "rules": "While wearing the blazer, you gain a +1 bonus to Intelligence (History) and Intelligence (Arcana) checks made to recall academic facts or lore."
      },
      {
        "title": "Inspirational Study",
        "rules": "When you succeed on a Wisdom (Insight) check to recall a specific piece of lore, you can choose to have advantage on the next Intelligence check you make within the next 10 minutes."
      },
      {
        "title": "Uniform Violation",
        "rules": "If you attempt to perform a profane, illegal, or highly aggressive action while wearing the blazer, the DM may require you to make a DC 12 Charisma (Persuasion) check to avoid a 'Uniform Violation' penalty, such as a social complication or a loss of reputation with local authorities."
      }
    ],
    "levelRequirementReason": "The original level 5 requirement was removed to allow early-game students to access basic academic benefits.",
    "vendorReason": "The blazer is a standard garment sold directly by the campus student services.",
    "shippingDetail": "Delivered via Buttoned Badge courier with a standard 2-day transit time.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while worn",
      "endsWhen": "The blazer is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 11,500 XP to reflect a standard uncommon academic garment.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-21T23:08:21.694463+00:00",
    "aiReviewedAt": "2026-07-21T23:08:21.694463+00:00",
    "aiReviewVersion": 1
  },
  "abydos_high_school_lunch_bento_recipe": {
    "id": "abydos_high_school_lunch_bento_recipe",
    "name": "Recipe: Abydos High School Lunch Bento ",
    "description": "This Recipe: Abydos High School Lunch Bento provides instructions for creating a balanced meal designed to bolster student stamina. Originally crafted by the School Cafeteria, the recipe ensures every bite is packed neatly for maximum efficiency.",
    "price": 1000,
    "icon": "🍱",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Culinary Mastery",
      "Focused Study"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Bento Box Brief",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Culinary Mastery",
        "rules": "By spending 15 minutes and a supply of Rice and veggies, you can use this recipe to prepare a Bento. This action allows you to create one meal that provides the benefits of the 'Focused Study' effect."
      },
      {
        "title": "Focused Study",
        "rules": "While you are consuming the Bento during a period of study, you gain a +1 bonus to Intelligence checks. This effect lasts for 1 hour or until you finish the meal, whichever comes first."
      }
    ],
    "levelRequirementReason": "A basic recipe for student meals does not require high-level proficiency.",
    "vendorReason": "The campus is the primary location where the school cafeteria operates.",
    "shippingDetail": "Delivered in a specialized insulated container to maintain food temperature.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The meal is finished or the study period ends",
      "charges": "Unlimited (requires ingredients)"
    },
    "priceReason": "Adjusted from 6000 to reflect a standard utility recipe rather than a rare magical artifact.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-21T23:08:42.197136+00:00",
    "aiReviewedAt": "2026-07-21T23:08:42.197136+00:00",
    "aiReviewVersion": 1
  },
  "abydos_high_school_uniform_premium": {
    "id": "abydos_high_school_uniform_premium",
    "name": "Abydos High School Uniform ",
    "description": "The Abydos High School Uniform is a crisp, formal garment crafted by the School Tailors to project an image of academic excellence. This blazer and skirt set features high-quality fabric intended to help the wearer secure discounts and favor from scholarly institutions.",
    "price": 1000,
    "icon": "👔",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Scholarly Favor",
      "Academic Insight",
      "Wrinkle Penalty"
    ],
    "vendor": "abydos_high_campus",
    "shippedBy": "Locker Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scholarly Favor",
        "rules": "While wearing the uniform, you gain a +2 bonus to Charisma (Persuasion) checks made against scholars or academic officials."
      },
      {
        "title": "Academic Insight",
        "rules": "You have advantage on Intelligence (History) checks made to identify historical facts or academic lore."
      },
      {
        "title": "Wrinkle Penalty",
        "rules": "If you take more than 5 points of bludgeoning or slashing damage, the uniform becomes wrinkled; you lose all benefits of the uniform until you spend 1 minute using a mending kit or a Prestidigitation cantrip to smooth the fabric."
      }
    ],
    "levelRequirementReason": "The item is a non-magical social garment and does not require high-level proficiency to utilize.",
    "vendorReason": "This is the official attire provided by the school's campus administration.",
    "shippingDetail": "Delivered directly to the student's assigned locker with a 24-hour turnaround.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while worn",
      "endsWhen": "Removing the garment or if it becomes heavily wrinkled",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted to a standard uncommon price for a high-quality social garment.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-21T23:09:04.796015+00:00",
    "aiReviewedAt": "2026-07-21T23:09:04.796015+00:00",
    "aiReviewVersion": 1
  },
  "abydos_high_spirit_duel_practice": {
    "id": "abydos_high_spirit_duel_practice",
    "name": "Abydos High Spirit Duel Practice (Again)",
    "description": "The Abydos High Spirit Duel Practice is a ritualistic sparring session provided by the Abydos High Duel Club. You engage in a spectral combat against a manifested ghost to hone your martial prowess.",
    "category": "services",
    "price": 1250,
    "icon": "👻",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Spirit Duel Outcome",
      "Spectral Lingering"
    ],
    "vendor": "abydos_high",
    "shippedBy": "Spirit Summons",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spirit Duel Outcome",
        "rules": "Upon completion of the duel, roll a d20. On a 11-20 (Win), you gain a +1 bonus to attack rolls for 24 hours. On a 1-9 (Loss), you suffer disadvantage on all ability checks for 24 hours as the spirit haunts you. On a 10 (Draw), the spirit becomes an ally, granting you advantage on one ability check of your choice within the next 24 hours."
      },
      {
        "title": "Spectral Lingering",
        "rules": "The effects of the duel are instantaneous upon the conclusion of the practice and last for 24 hours or until the end of the next long rest, whichever comes first."
      }
    ],
    "levelRequirementReason": "The spiritual intensity of the Abydos High Duel Club requires a character of at least 5th level to maintain their physical form.",
    "vendorReason": "The Abydos High Duel Club is the primary authority on spectral combat training.",
    "shippingDetail": "The practice is delivered via a localized ethereal rift; it arrives instantly but requires a clear line of sight.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours",
      "endsWhen": "The duration expires or the user finishes a long rest.",
      "charges": "One-time use per purchase"
    },
    "priceReason": "Adjusted to a standard gold-equivalent XP value for a mid-tier uncommon service.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-21T23:09:28.104438+00:00",
    "aiReviewedAt": "2026-07-21T23:09:28.104438+00:00",
    "aiReviewVersion": 1
  },
  "abyssal_court_deep_abyss_soup_recipe": {
    "id": "abyssal_court_deep_abyss_soup_recipe",
    "name": "Recipe: Abyssal Court Deep Abyss Soup",
    "description": "The Recipe: Abyssal Court Deep Abyss Soup provides instructions for a thick, inky broth crafted by the Court Chefs. This culinary guide details how to simmer deep-sea items like Inkfish and squidgy morsels to create a meal that grants unnatural resilience.",
    "price": 8500,
    "icon": "🍲",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Abyssal Culinary Knowledge",
      "Deep-Sea Physiology"
    ],
    "vendor": "abyssal_court_depths",
    "shippedBy": "Inky Immersion Instructions",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Abyssal Culinary Knowledge",
        "rules": "Upon reading this recipe, you learn how to cook a meal that grants benefits to those who consume it. You can prepare this soup in 50 minutes using Inkfish and other deep-sea ingredients. You can prepare a number of servings equal to the amount of ingredients used."
      },
      {
        "title": "Deep-Sea Physiology",
        "rules": "A creature that consumes a bowl of this soup gains the ability to breathe underwater and gains resistance to cold damage. This effect lasts for 2 hours or until the creature dies. This effect does not stack."
      }
    ],
    "levelRequirementReason": "The complexity of handling abyssal ingredients requires a high level of culinary expertise.",
    "vendorReason": "The Court Chefs of the depths are the primary authors of this specific recipe.",
    "shippingDetail": "The recipe is delivered in a waterproof, oil-sealed parchment to prevent ink smudging.",
    "usage": {
      "activation": "Action (to cook) or Eating (to consume)",
      "duration": "2 hours",
      "endsWhen": "The duration expires, the creature dies, or the creature falls unconscious.",
      "charges": "Unlimited (can be cooked as many times as ingredients allow)"
    },
    "priceReason": "The high price reflects the rarity of the Court Chefs' secret techniques and the value of the knowledge provided.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-21T23:09:51.237545+00:00",
    "aiReviewedAt": "2026-07-21T23:09:51.237545+00:00",
    "aiReviewVersion": 1
  },
  "abyssal_court_deep_sea_trench_coat": {
    "id": "abyssal_court_deep_sea_trench_coat",
    "name": "Abyssal Court Deep Sea Trench Coat",
    "description": "The Abyssal Court Deep Sea Trench Coat is a heavy, waterproof garment crafted by the Abyssal Seamstresses. Its salt-crusted fabric is designed to withstand the crushing pressures of the ocean floor, though it perpetually drips brine when worn on land.",
    "category": "equipment",
    "price": 2050,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Pressure Resistance",
      "Abyssal Respiration",
      "Brine Leakage"
    ],
    "vendor": "abyssal_court_abyss",
    "shippedBy": "Ink-Dyed Fold",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Pressure Resistance",
        "rules": "While wearing this coat, you have advantage on all Constitution saving throws made to resist pressure-based environmental hazards or damage while underwater."
      },
      {
        "title": "Abyssal Respiration",
        "rules": "You can breathe underwater for a duration of 1 hour. You can use this property once per long rest; it regains its use after you finish a long rest."
      },
      {
        "title": "Brine Leakage",
        "rules": "While on land, the coat drips constantly, making it impossible to take the Stealth action without disadvantage unless you use an action to wring out the garment."
      }
    ],
    "levelRequirementReason": "The coat's heavy materials and magical properties require a character of significant physical fortitude to wear.",
    "vendorReason": "The Abyssal Court is the primary source of garments designed for high-pressure aquatic environments.",
    "shippingDetail": "Delivered in a pressurized, moisture-sealed crate to prevent the coat from soaking the surrounding cargo.",
    "usage": {
      "activation": "Passive",
      "duration": "1 hour (Respiration)",
      "endsWhen": "The respiration duration expires or the wearer finishes a long rest.",
      "charges": "1 use per long rest"
    },
    "priceReason": "The price is adjusted to reflect a rare, high-utility item for mid-level adventurers while maintaining the original gold-to-XP ratio.",
    "priceOriginal": 20500,
    "priceReviewedAt": "2026-07-21T23:10:15.384112+00:00",
    "aiReviewedAt": "2026-07-21T23:10:15.384112+00:00",
    "aiReviewVersion": 1
  },
  "abyssal_court_ink_dipper": {
    "id": "abyssal_court_ink_dipper",
    "name": "Abyssal Court Ink Dipper",
    "description": "Crafted by the Abyssal Potters, this sturdy ceramic dipper is designed for scooping heavy abyssal soup broth. Its surface is treated with a special coating to remain ink-resistant even in the most volatile kitchens.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Steady Scooping",
      "Ink Squirter"
    ],
    "vendor": "abyssal_court_depths",
    "shippedBy": "Deep Dip Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Steady Scooping",
        "rules": "While holding this dipper to cook or serve food, you gain a +1 bonus to Dexterity (Sleight of Hand) checks made to prevent spilling liquids or handling delicate ingredients."
      },
      {
        "title": "Ink Squirter",
        "rules": "As a reaction when a creature within 5 feet of you makes a melee attack against you, you can squirt a glob of concentrated abyssal ink at them. The target must succeed on a DC 13 Dexterity saving throw or be Blinded until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The item is a utility tool and does not require high-level magical proficiency to operate.",
    "vendorReason": "This vendor specializes in culinary equipment sourced from the deeper abyssal realms.",
    "shippingDetail": "Delivered via pressurized bubbles to ensure the broth remains at a constant simmer during transit.",
    "usage": {
      "activation": "Passive for Steady Scooping; Reaction for Ink Squirter",
      "duration": "Instantaneous",
      "endsWhen": "The Ink Squirter effect ends when the target completes its next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The price was reduced from 7000 to reflect its status as a common culinary tool rather than a high-tier artifact.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-21T23:11:03.508886+00:00",
    "aiReviewedAt": "2026-07-21T23:11:03.508886+00:00",
    "aiReviewVersion": 1
  },
  "abyssal_court_tentacle_whip_premium": {
    "id": "abyssal_court_tentacle_whip_premium",
    "name": "Abyssal Court Tentacle Whip (Premium)",
    "description": "The Abyssal Court Tentacle Whip is a wet, pulsing lash of muscle and suction cups crafted by the Abyssal Lashers. This organic weapon leaves a trail of viscous slime and feels unnaturally heavy in the hand.",
    "price": 19500,
    "icon": "🐙",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Extended Reach & Grapple",
      "Slime Entrapment",
      "Abyssal Pull"
    ],
    "vendor": "abyssal_court_depths",
    "shippedBy": "Ink-Dipped Rope",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Extended Reach & Grapple",
        "rules": "When you hit a creature with a melee weapon attack using this whip, the reach is increased to 10 feet. The target must succeed on a DC 12 Strength saving throw or be Grappled by the tentacle."
      },
      {
        "title": "Slime Entrapment",
        "rules": "A creature currently Grappled by this whip has disadvantage on all ability checks and saving throws made to escape the grapple."
      },
      {
        "title": "Abyssal Pull",
        "rules": "As a bonus action, you can attempt to pull a creature Grappled by the whip up to 5 feet toward you. The target must succeed on a DC 12 Strength saving throw to resist the movement."
      }
    ],
    "levelRequirementReason": "The whip's reach and grappling mechanics are balanced for mid-tier play.",
    "vendorReason": "This item originates from the Abyssal Court and is naturally sold in the depths.",
    "shippingDetail": "The shipment arrives wet and requires a salt-wash before first use.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The grapple is broken or the target is freed",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare organic material and the specialized craftsmanship of the Abyssal Lashers.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-21T23:11:27.051266+00:00",
    "aiReviewedAt": "2026-07-21T23:11:27.051266+00:00",
    "aiReviewVersion": 1
  },
  "abyssal_layer_claim": {
    "id": "abyssal_layer_claim",
    "name": "Abyssal Layer Claim (Unoccupied)",
    "description": "This Abyssal Layer Claim is a scorched, pulsating deed of ownership to a 10-mile radius territory within the Abyss. Hand-stamped by Demogorgon's Realtor, the parchment smells of sulfur and holds the weight of sovereign authority.",
    "price": 1000000,
    "icon": "👹",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Territorial Sovereignty",
      "Demonic Authority"
    ],
    "vendor": "abyssal_titles",
    "shippedBy": "Demonic Invasion",
    "levelRequirement": 20,
    "factionBonus": {
      "chaos": 300
    },
    "effectDetails": [
      {
        "title": "Territorial Sovereignty",
        "rules": "While holding this deed, you claim ownership of a specific 10-mile radius layer of the Abyss. You can establish a permanent base of operations here; any creature attempting to enter this area against your will must succeed on a DC 20 Charisma saving throw or be repelled by planar instability."
      },
      {
        "title": "Demonic Authority",
        "rules": "Demons within your 10-mile territory are drawn to your presence but are compelled to recognize your status. When a demon initiates combat against you within this territory, it must first succeed on a DC 20 Wisdom saving throw or be forced to act non-hostile for 1 minute. This effect does not apply to other planar beings."
      }
    ],
    "levelRequirementReason": "Owning a piece of the Abyss is a feat reserved for those of legendary status.",
    "vendorReason": "This vendor specializes in the sale of high-level planar real estate and deeds.",
    "shippingDetail": "The deed arrives via a rift; the courier may cause minor property damage during delivery.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The deed is destroyed or surrendered to a higher planar power.",
      "charges": "Unlimited"
    },
    "priceReason": "The price is reduced from the original amount to reflect a balanced, yet still high-tier, legendary investment.",
    "priceOriginal": 1850000,
    "priceReviewedAt": "2026-07-21T23:11:51.196538+00:00",
    "aiReviewedAt": "2026-07-21T23:11:51.196538+00:00",
    "aiReviewVersion": 1
  },
  "abyssal_shadow_cloak": {
    "id": "abyssal_shadow_cloak",
    "name": "Abyssal Shadow Cloak (Enchanted)",
    "description": "The Abyssal Shadow Cloak is a heavy, midnight-blue garment woven from the literal essence of the Abyss by the Abyssal Weavers. It feels cold to the touch and seems to drink in the light around it, making the wearer appear like a flickering smudge in the dark.",
    "price": 72000,
    "icon": "🕶️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Shadow Invisibility",
      "Scrying Resistance"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Shadow Portal",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Shadow Invisibility",
        "rules": "As a bonus action, you can cause the cloak to shroud your body. While you are in dim light or darkness, you become invisible to any creature that can see you. This effect lasts for 1 hour or until you take damage, teleport, or use a magical effect that alters your appearance. You can use this feature a number of times equal to your Proficiency Bonus, regaining all expended uses when you finish a long rest."
      },
      {
        "title": "Scrying Resistance",
        "rules": "While wearing the cloak, you have advantage on saving throws against effects that would sense your location through divination magic or scrying spells. This resistance is constant as long as the cloak is worn."
      }
    ],
    "levelRequirementReason": "The cloak's connection to the Abyss is too volatile for anyone below 17th level to control safely.",
    "vendorReason": "The void_merchant specializes in artifacts originating from extraplanar abyssal realms.",
    "shippingDetail": "The item is delivered via a rift; the recipient must be at a known location to receive it safely.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour",
      "endsWhen": "Taking damage, teleporting, or ending the 1-hour duration",
      "charges": "Proficiency Bonus per long rest"
    },
    "priceReason": "Reduced from the original amount to align with standard legendary item gold-to-XP conversion scales.",
    "priceOriginal": 720000,
    "priceReviewedAt": "2026-07-21T23:12:14.914511+00:00",
    "aiReviewedAt": "2026-07-21T23:12:14.914511+00:00",
    "aiReviewVersion": 1
  },
  "accordion_of_autumn": {
    "id": "accordion_of_autumn",
    "name": "Accordion of Autumn",
    "description": "The Accordion of Autumn is a weathered wooden squeezebox that emits a melancholic melody. When played, it causes orange and gold leaves to swirl in the air, evoking a deep sense of nostalgia.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪗",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Swirling Leaves",
      "Entropic Hum",
      "Dizzying Polka"
    ],
    "vendor": "wandering_vend",
    "shippedBy": "Cloth Bag",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Swirling Leaves",
        "rules": "As an action, you play a melody that creates a 20-foot-radius area of swirling leaves. For 1 minute, any creature of your choice within the area gains a +2 bonus to Stealth checks. This effect ends if you stop playing or the area is dispelled."
      },
      {
        "title": "Entropic Hum",
        "rules": "As an action, you can play a low, vibrating note that emits an entropic hum. Each hostile creature within 30 feet that can hear you must succeed on a DC 12 Wisdom saving throw or be Charmed until the end of your next turn. You can use this feature once per long rest."
      },
      {
        "title": "Dizzying Polka",
        "rules": "If you use the Accordion to play a fast-paced Polka, each creature within 10 feet that can hear it must succeed on a DC 12 Constitution saving throw or be Incapacitated by dizziness until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The item's magical nature requires a basic understanding of musical magic.",
    "vendorReason": "A traveling merchant specializes in seasonal curiosities and folk instruments.",
    "shippingDetail": "Wrapped in soft wool to prevent the bellows from creasing during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The player stops playing the music or the duration expires.",
      "charges": "Entropic Hum: 1/Long Rest"
    },
    "priceReason": "Reduced from 8000 to align with standard Rare curiosity pricing for a non-combat utility item.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T23:12:41.010747+00:00",
    "aiReviewedAt": "2026-07-21T23:12:41.010747+00:00",
    "aiReviewVersion": 1
  },
  "aetherial_phoenix_down": {
    "id": "aetherial_phoenix_down",
    "name": "Aetherial Phoenix Down (Single Use)",
    "description": "This Aetherial Phoenix Down is a crystallized phoenix feather forged by the Pyres of Elysium. It pulses with a faint, searing heat, designed to incinerate the finality of death.",
    "price": 425000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Aetherial Resurrection",
      "Equipment Incineration"
    ],
    "vendor": "phoenix_roost",
    "shippedBy": "Divine Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Aetherial Resurrection",
        "rules": "When the user drops to 0 hit points and dies, this item triggers automatically. The user is resurrected at the start of their next turn 24 hours later at the location of their death, with all hit points restored and no loss of experience. The user retains all levels and class features."
      },
      {
        "title": "Equipment Incineration",
        "rules": "Upon triggering the resurrection, the Aetherial Phoenix Down is consumed. All non-soulbound equipment, weapons, and armor currently worn or carried by the user are destroyed as they are reduced to ash by the phoenix flame."
      }
    ],
    "levelRequirementReason": "The high-tier nature of legendary resurrection mechanics requires a character of significant power.",
    "vendorReason": "The Phoenix Roost is the primary sanctuary for avian artifacts and celestial feathers.",
    "shippingDetail": "Delivered via celestial rift; the item must be kept in a lead-lined container to prevent premature ignition.",
    "usage": {
      "activation": "Automatic (Triggered by death)",
      "duration": "24 hours",
      "endsWhen": "The item is consumed upon use",
      "charges": "Single Use"
    },
    "priceReason": "The price reflects the extreme rarity of a guaranteed, high-level resurrection without level loss.",
    "priceOriginal": 425000,
    "priceReviewedAt": "2026-07-21T23:13:02.909622+00:00",
    "aiReviewedAt": "2026-07-21T23:13:02.909622+00:00",
    "aiReviewVersion": 1
  },
  "african_union_mask_dance_lesson_premium": {
    "id": "african_union_mask_dance_lesson_premium",
    "name": "African Union Mask Dance Lesson (Premium)",
    "description": "The African Union Mask Dance Lesson is a rhythmic ritual sequence taught by the Union Dancers to commune with the unseen. This premium instructional scroll features intricate footwork and spirit-calling chants meant to bridge the gap between worlds.",
    "price": 17000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spirit Charm",
      "Rhythmic Mastery",
      "Exhaustion Penalty"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Mask Box",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Spirit Charm",
        "rules": "As an action, you perform the ritual dance. Choose one spirit or ethereal creature within 30 feet; it must succeed on a DC 13 Wisdom saving throw or be Charmed by you for 1 minute. The effect ends if the creature takes damage or if you are incapacitated."
      },
      {
        "title": "Rhythmic Mastery",
        "rules": "While performing a Performance check related to dance or ritual, you gain a +2 bonus to the roll. This bonus applies only to checks made while actively dancing."
      },
      {
        "title": "Exhaustion Penalty",
        "rules": "After using the Spirit Charm effect, you must succeed on a DC 12 Constitution saving throw or gain one level of exhaustion. This effect can only be negated by completing a long rest."
      }
    ],
    "levelRequirementReason": "The complex spiritual resonance of the Union Dancers' movements requires a high degree of poise and magical sensitivity.",
    "vendorReason": "The village is the primary home of the Union Dancers who authored these lessons.",
    "shippingDetail": "Delivered in a reinforced wooden crate to ensure the sacred scrolls remain dry and uncreased.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires, the target succeeds on a save, or the user is incapacitated.",
      "charges": "One-time use per lesson"
    },
    "priceReason": "The high XP cost reflects the premium nature of the sacred knowledge and the rarity of the Union Dancers' lineage.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-21T23:13:50.092840+00:00",
    "aiReviewedAt": "2026-07-21T23:13:50.092840+00:00",
    "aiReviewVersion": 1
  },
  "african_union_tribal_beaded_vest": {
    "id": "african_union_tribal_beaded_vest",
    "name": "African Union Tribal Beaded Vest",
    "description": "This African Union Tribal Beaded Vest is a vibrant garment adorned with intricate, multi-colored beads used in sacred rituals. Hand-crafted by Union Artisans, the beads produce a distinct rhythmic rattle when the wearer moves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Rhythmic Performance",
      "Spirit Warding",
      "Fragile Ornamentation"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Bead Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rhythmic Performance",
        "rules": "While wearing the vest, you have advantage on Charisma (Performance) checks made to perform tribal dances or rhythmic music."
      },
      {
        "title": "Spirit Warding",
        "rules": "While the vest is worn, you have advantage on saving throws against being Frightened as the beads rattle to ward off spirits."
      },
      {
        "title": "Fragile Ornamentation",
        "rules": "If the vest falls to the ground or is dropped, the beads shatter; the vest loses its Spirit Warding property and requires a long rest to repair with artisan tools."
      }
    ],
    "levelRequirementReason": "The original level 6 requirement was removed to allow for earlier cultural expression while maintaining the rare rarity.",
    "vendorReason": "The village is the primary hub for Union Artisans and tribal ceremonial goods.",
    "shippingDetail": "Shipped in a padded pouch to prevent the beads from rattling against other cargo.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while worn",
      "endsWhen": "The vest is removed or the beads are shattered by being dropped.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 16,500 to 1,000 to align with standard Rare equipment costs for non-magical items with minor utility.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-21T23:14:12.777079+00:00",
    "aiReviewedAt": "2026-07-21T23:14:12.777079+00:00",
    "aiReviewVersion": 1
  },
  "african_union_tribal_grain_mill": {
    "id": "african_union_tribal_grain_mill",
    "name": "African Union Tribal Grain Mill",
    "description": "This African Union Tribal Grain Mill is a heavy, hand-turned stone mill crafted by the Union Stonecarvers for processing communal porridge grains. The smooth, weathered stones are designed to grind large quantities of grain efficiently while maintaining a steady, rhythmic pace.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥣",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Communal Batch Bonus",
      "Tribal Rhythm",
      "Stone Wear"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Grain Grind Gear",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Communal Batch Bonus",
        "rules": "While using this mill to prepare food, the group gains a +1 bonus to any Difficulty Class (DC) checks made to cook communal meals or rations."
      },
      {
        "title": "Tribal Rhythm",
        "rules": "If a creature performs a Performance check (Music) or a group sings in rhythm while operating the mill, the processing speed of the grain is doubled for the duration of the performance."
      },
      {
        "title": "Stone Wear",
        "rules": "The mill's stones wear smooth over time; after 1,000 units of grain are processed, the mill requires a long rest to be sharpened or it provides no bonuses."
      }
    ],
    "levelRequirementReason": "The item is a non-magical piece of equipment and does not require a high character level to operate.",
    "vendorReason": "The village is the primary source of tribal goods and stone-carved tools.",
    "shippingDetail": "Requires heavy-duty transport; shipping takes 3 days and costs extra for weight.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "When the grain is fully processed or the user finishes their action",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 6500 to reflect a standard uncommon utility item price for a village setting.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-21T23:14:35.811365+00:00",
    "aiReviewedAt": "2026-07-21T23:14:35.811365+00:00",
    "aiReviewVersion": 1
  },
  "african_union_tribal_grain_porridge_recipe": {
    "id": "african_union_tribal_grain_porridge_recipe",
    "name": "Recipe: African Union Tribal Grain Porridge",
    "description": "This weathered parchment contains the Recipe: African Union Tribal Grain Porridge, a culinary secret passed down by Village Elders. It details how to prepare a hearty meal from ancient grains meant to foster communal strength and tribal unity.",
    "price": 1000,
    "icon": "🥣",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Tribal Bond",
      "Shared Meal"
    ],
    "vendor": "african_union_village",
    "shippedBy": "Grain Gathering Guide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tribal Bond",
        "rules": "After consuming the porridge, all creatures who ate from the shared meal gain a +1 bonus to all saving throws for 4 hours. This effect ends early if the creature finishes a long rest or if the duration expires."
      },
      {
        "title": "Shared Meal",
        "rules": "To activate this recipe, a creature must spend 30 minutes using their action to cook the grains. The porridge must be shared among a group of 3 or more creatures; each creature who eats the porridge gains the benefits of the Tribal Bond."
      }
    ],
    "levelRequirementReason": "The recipe is a basic culinary guide and does not require high-level magical proficiency.",
    "vendorReason": "The Village Elders are the original keepers of this traditional tribal recipe.",
    "shippingDetail": "The recipe is delivered as a dry, durable scroll protected by a grain-sealed pouch.",
    "usage": {
      "activation": "Action (30 minutes to cook)",
      "duration": "4 hours",
      "endsWhen": "Ends after 4 hours or when a creature finishes a long rest.",
      "charges": "Unlimited uses as long as the required grains are available."
    },
    "priceReason": "The price is adjusted to reflect a standard uncommon utility item that provides a temporary buff.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-21T23:14:57.228810+00:00",
    "aiReviewedAt": "2026-07-21T23:14:57.228810+00:00",
    "aiReviewVersion": 1
  },
  "airship_pilot_rental": {
    "id": "airship_pilot_rental",
    "name": "Airship Pilot Rental",
    "description": "The Airship Pilot Rental provides a seasoned navigator to man your vessel's helm for a single voyage. This contract, offered by the Gilded Gryphon, ensures your craft avoids common hazards while navigating the skies.",
    "category": "services",
    "price": 40000,
    "icon": "🧑‍✈️",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Expert Navigation",
      "Skilled Maneuvers",
      "Loot Share Agreement"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Crew Manifest",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Expert Navigation",
        "rules": "The pilot automatically handles all navigation and evasion checks for the airship. For the duration of the voyage, the ship cannot be forced off course by weather or minor obstacles unless a natural 1 is rolled on a navigation check."
      },
      {
        "title": "Skilled Maneuvers",
        "rules": "The pilot grants a +5 bonus to all Ability Checks and Saving Throws made by the airship to resist collision, docking, or aerial combat maneuvers."
      },
      {
        "title": "Loot Share Agreement",
        "rules": "The pilot is entitled to 10% of all gold and gems found during the voyage; failure to pay this amount results in the pilot abandoning the ship at the next port."
      }
    ],
    "levelRequirementReason": "The complexity of managing an airship in high-threat zones requires a seasoned crew.",
    "vendorReason": "The Gilded Gryphon specializes in high-end logistics and luxury sky-travel services.",
    "shippingDetail": "The pilot is dispatched via a pre-arranged courier manifest and arrives at the starting port 1 hour before departure.",
    "usage": {
      "activation": "Passive",
      "duration": "1d4 days (one voyage)",
      "endsWhen": "The voyage is completed or the pilot is dismissed by the party.",
      "charges": "1 use per purchase"
    },
    "priceReason": "The price reflects the high cost of hiring a specialized, elite maritime professional for a long-distance journey.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-21T23:15:21.907652+00:00",
    "aiReviewedAt": "2026-07-21T23:15:21.907652+00:00",
    "aiReviewVersion": 1
  },
  "airship_vigilance_full_restore": {
    "id": "airship_vigilance_full_restore",
    "name": "Vigilance: Full Restoration",
    "description": "Vigilance: Full Restoration is a comprehensive engineering overhaul that transforms the airship into a fortified mobile base. This legendary upgrade includes reinforced hull plating, high-output engine tuning, and the mounting of heavy cannons.",
    "category": "faction",
    "price": 50000,
    "icon": "🚢",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Mobile Base of Operations",
      "Orbital Bombardment",
      "Instantaneous Travel",
      "Faction Morale Boost"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Drydock Team",
    "levelRequirement": 15,
    "factionBonus": {
      "mobility": 100,
      "combatReadiness": 50
    },
    "effectDetails": [
      {
        "title": "Mobile Base of Operations",
        "rules": "The airship functions as a fortified base; it provides a +2 bonus to AC and all saving throws for any creatures currently on board. It also serves as a designated long rest location."
      },
      {
        "title": "Orbital Bombardment",
        "rules": "As an action, you can call down a strike from orbit. Choose a point within 3 miles; all creatures in a 60-foot radius must make a DC 18 Dexterity saving throw, taking 8d8 force damage on a failed save, or half as much on a success. This can be used once per day."
      },
      {
        "title": "Instantaneous Travel",
        "rules": "As an action, the ship can teleport to any known location on the same continent. This effect has a cooldown of 24 hours."
      },
      {
        "title": "Faction Morale Boost",
        "rules": "All friendly faction members gain a +50% bonus to morale-based checks and initiative rolls for the duration of the restoration's effects."
      }
    ],
    "levelRequirementReason": "The high complexity of managing a mobile fortress and orbital strikes requires significant leadership experience.",
    "vendorReason": "The Gilded Gryphon specializes in high-end luxury and military vessel upgrades.",
    "shippingDetail": "The Drydock Team requires 48 hours to perform the physical installation and calibration of the heavy cannons.",
    "usage": {
      "activation": "Passive / Action",
      "duration": "Permanent",
      "endsWhen": "The restoration is destroyed or the ship is decommissioned.",
      "charges": "Orbital Bombardment: 1/day; Teleportation: 1/day"
    },
    "priceReason": "Reduced from 600,000 to reflect a balanced legendary cost for a permanent faction-wide upgrade.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-21T23:15:50.319429+00:00",
    "aiReviewedAt": "2026-07-21T23:15:50.319429+00:00",
    "aiReviewVersion": 1
  },
  "aleph_null_coins": {
    "id": "aleph_null_coins",
    "name": "Aleph-Null Coins",
    "description": "The Aleph-Null Coins are a collection of shimmering gold pieces contained within a small, unassuming pouch. Crafted by The Mathematician, these coins defy the laws of spatial volume to provide an inexhaustible supply of wealth.",
    "category": "curiosities",
    "price": 50000,
    "icon": "💰",
    "stock": 1,
    "rarity": "godly",
    "warning": "Wario's Central Bank applies extreme anti-infinite-money scrutiny. Abuse can trigger audits, confiscation, and regional economic collapse.",
    "effects": [
      "Infinite Gold Supply",
      "Economic Collapse"
    ],
    "vendor": "infinite_wealth",
    "shippedBy": "Hilberts Hotel",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Infinite Gold Supply",
        "rules": "As an action, you can reach into the pouch and pull out a number of gold pieces equal to your character level. This gold is real and spendable, but the pouch never empties."
      },
      {
        "title": "Economic Collapse",
        "rules": "If you spend more than 5,000 gold pieces in a single 24-hour period in a specific city or region, the local currency loses all value. Prices for all goods and services in that area triple as the local economy collapses, and you cannot use the pouch to generate more gold in that specific region for 1d7 days."
      }
    ],
    "levelRequirementReason": "Infinite spendable currency is an economy-scale power and should be restricted to late-game characters who can handle political and financial consequences.",
    "vendorReason": "This vendor specializes in items that provide boundless resources.",
    "shippingDetail": "The shipment arrives via a room that technically shouldn't exist, arriving instantly upon request.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The pouch is destroyed or the user is incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "Restored to an extreme godly-tier cost because an inexhaustible source of real spendable gold can destabilize entire economies.",
    "priceOriginal": 30000000,
    "priceReviewedAt": "2026-07-21T23:16:11.969720+00:00",
    "aiReviewedAt": "2026-07-21T23:16:11.969720+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_blocky_belt": {
    "id": "almost_edge_blocky_belt",
    "name": "Blocky Belt of the Frontier",
    "description": "The Blocky Belt of the Frontier is a leather belt stitched with pixelated thread from the Blocky Terrains. This pioneer's relic hums with the essence of world-carvers and provides stability when navigating shifting, modular environments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Frontier Navigation",
      "Modular Crafting",
      "Reality Glitch"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Frontier Navigation",
        "rules": "While wearing the belt, your walking speed increases by 10 feet when moving through difficult terrain composed of shifting geometry or modular blocks."
      },
      {
        "title": "Modular Crafting",
        "rules": "You gain a +1 bonus to all Intelligence (Crafting) checks made while working with blocky, modular, or pixelated materials."
      },
      {
        "title": "Reality Glitch",
        "rules": "Whenever you enter or exit a reality rift, roll a d20. On a 1, you suffer a minor visual glitch: you see the world in low-resolution for 1 minute, imposing disadvantage on Perception checks until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The belt is a common utility item suitable for any adventurer navigating the frontier.",
    "vendorReason": "Almost Edge specializes in items that bridge the gap between different world logics.",
    "shippingDetail": "Delivered via clandestine smuggler routes; may arrive with minor pixelated residue.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while worn",
      "endsWhen": "The belt is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted to reflect a standard common utility item with persistent movement and skill bonuses.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-21T23:16:34.937204+00:00",
    "aiReviewedAt": "2026-07-21T23:16:34.937204+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_bulldog_bolt": {
    "id": "almost_edge_bulldog_bolt",
    "name": "Bulldog Bolt",
    "description": "This Bulldog Bolt is a heavy, metallic projectile forged by Bullet Bill Express, characterized by its jagged edges and humming static. It serves as a signature delivery weapon that leaves a flickering trail of electricity in its wake.",
    "price": 1000,
    "icon": "🔮",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Static Mending",
      "Hallucinatory Feedback",
      "Cooldown Acceleration"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Static Mending",
        "rules": "When you hit a creature with this bolt, you can choose to instantly restore 5 hit points to yourself. This effect can be used a number of times equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Hallucinatory Feedback",
        "rules": "A creature hit by this bolt must succeed on a DC 12 Intelligence saving throw or suffer mild hallucinations for 1 minute. The creature sees flickering images of courier routes and hears distant whistles; this effect ends if the creature takes damage."
      },
      {
        "title": "Cooldown Acceleration",
        "rules": "After successfully hitting a target, the next ability you use within 1 minute has its cooldown reduced by 2 seconds (or 1 round if using turn-based mechanics)."
      }
    ],
    "levelRequirementReason": "The bolt's unique static properties require a basic understanding of martial combat and energy handling.",
    "vendorReason": "The almost_edge shop specializes in high-utility courier gear and specialized weaponry.",
    "shippingDetail": "Delivered via high-speed courier; may arrive with minor scorch marks on the packaging.",
    "usage": {
      "activation": "Action (Attack)",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends once the target is hit or the 1-minute window for cooldown acceleration passes.",
      "charges": "Limited by Proficiency Bonus per long rest."
    },
    "priceReason": "The price reflects its utility as a multi-purpose combat and utility tool for low-level adventurers.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-21T23:16:59.139402+00:00",
    "aiReviewedAt": "2026-07-21T23:16:59.139402+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_fallen_fork": {
    "id": "almost_edge_fallen_fork",
    "name": "Fallen Fork of the Liminal Way",
    "description": "The Fallen Fork of the Liminal Way is a rusted, crystalline utensil found wedged in the edge of a collapsing dimension. Once a tool for the forgotten cartographers of the void, its humming tines now serve as a guide through unstable zones.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Liminal Awareness",
      "Reality Anchoring",
      "Dimensional Drift"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Liminal Awareness",
        "rules": "While holding the fork, you gain a +1 bonus to Wisdom (Perception) checks made to detect hidden paths or environmental hazards in unstable terrain."
      },
      {
        "title": "Reality Anchoring",
        "rules": "As a reaction when you take falling damage, you can plant the fork into the air. You take only half damage from the fall, but the next creature to move within 5 feet of the fork must succeed on a DC 13 Strength saving throw or be knocked prone."
      },
      {
        "title": "Dimensional Drift",
        "rules": "If you use the fork's Reality Anchoring property while moving at a high velocity (such as a sprint or being pushed), you must succeed on a DC 12 Wisdom saving throw or become Disoriented. While Disoriented, you have disadvantage on Dexterity checks until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The item's ability to manipulate dimensional stability requires a character with established competence in navigating hazardous environments.",
    "vendorReason": "This vendor specializes in artifacts recovered from the fringes of reality.",
    "shippingDetail": "Delivered via high-speed courier; the package hums audibly during transit.",
    "usage": {
      "activation": "Passive (Awareness) / Reaction (Anchoring)",
      "duration": "Instantaneous",
      "endsWhen": "The anchoring effect ends immediately after the damage is mitigated.",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted to reflect a standard uncommon utility item that provides significant defensive utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-21T23:17:24.321425+00:00",
    "aiReviewedAt": "2026-07-21T23:17:24.321425+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_fawful_fury_torch": {
    "id": "almost_edge_fawful_fury_torch",
    "name": "Fawful Fury Torch",
    "description": "The Fawful Fury Torch is a jagged, sputtering light source forged by Asgard using Fawful’s discarded mechanical remains. It pulses with a violent, rhythmic heat that causes nearby metal to groan and vibrate with mechanical rage.",
    "price": 3000,
    "icon": "⚡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Mechanical Rupture",
      "Fawful's Resonance",
      "Glitch Pulse",
      "Shadowfell Manifestation"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Mechanical Rupture",
        "rules": "When you hit a construct or mechanical creature with a melee attack while holding this torch, you deal an additional 3d8 force damage."
      },
      {
        "title": "Fawful's Resonance",
        "rules": "If Fawful is within 30 feet of the wielder, the torch deals an additional 1d6 fire damage to all targets hit by the wielder's attacks."
      },
      {
        "title": "Glitch Pulse",
        "rules": "As a bonus action, you can cause the torch to flare. All non-magical mechanical objects within 10 feet must succeed on a DC 14 Intelligence saving throw or suffer a mechanical glitch, becoming non-functional for 1 minute."
      },
      {
        "title": "Shadowfell Manifestation",
        "rules": "While in the Shadowfell, using the Glitch Pulse effect summons a mechanical shadow clone. This clone has 20 hit points, acts on your initiative, and can use its action to make one melee attack (+5 to hit, 1d6+3 slashing) before dissipating at the end of its turn."
      }
    ],
    "levelRequirementReason": "The item's ability to manipulate mechanical constructs and summon entities requires high-level proficiency.",
    "vendorReason": "Almost Edge specializes in high-tier, unconventional weaponry and artifacts.",
    "shippingDetail": "Delivered via a frantic, high-speed sprint; may arrive slightly scorched.",
    "usage": {
      "activation": "Melee attack or Bonus Action",
      "duration": "Instantaneous or 1 minute",
      "endsWhen": "The Glitch Pulse effect ends after 1 minute or if the torch is extinguished.",
      "charges": "Unlimited"
    },
    "priceReason": "The epic rarity and multi-functional utility justify the high XP cost.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-21T23:17:52.099384+00:00",
    "aiReviewedAt": "2026-07-21T23:17:52.099384+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_feywild_locket": {
    "id": "almost_edge_feywild_locket",
    "name": "Loom of Trickster Tides",
    "description": "The Loom of Trickster Tides is a handcrafted locket that pulses with the rhythm of the Feywild’s shifting time. Its surface glows with shifting patterns that mimic the paths of hedge mazes, echoing the laughter of trickster spirits.",
    "category": "equipment",
    "price": 1800,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Trickster's Perception",
      "Warped Movement",
      "Time Loop Degradation"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Trickster's Perception",
        "rules": "While wearing this locket, you have a +1 bonus to all Wisdom (Perception) and Charisma (Deception) skill checks."
      },
      {
        "title": "Warped Movement",
        "rules": "As a reaction when a creature you can see within 30 feet moves, you can cause the locket to pulse. The target must succeed on a DC 14 Wisdom saving throw or have its movement speed reduced to 0 until the start of its next turn."
      },
      {
        "title": "Time Loop Degradation",
        "rules": "The locket's magic is unstable; it is destroyed if it is used to affect a creature while the user is inside a magical time loop or chronal anomaly."
      }
    ],
    "levelRequirementReason": "The locket's Feywild resonance is too volatile for characters under level 4 to safely wield.",
    "vendorReason": "This vendor specializes in items with subtle, perception-warping properties.",
    "shippingDetail": "Delivered via a rapid-growth vine courier; arrives within 24 hours.",
    "usage": {
      "activation": "Reaction",
      "duration": "Until the start of the target's next turn",
      "endsWhen": "The effect ends when the target's turn begins or the locket is destroyed.",
      "charges": "Unlimited (Reaction limited to once per round)"
    },
    "priceReason": "The price reflects its rarity and the specific Feywild craftsmanship required for its construction.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-21T23:18:16.948715+00:00",
    "aiReviewedAt": "2026-07-21T23:18:16.948715+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_feywild_tangled_ribbon": {
    "id": "almost_edge_feywild_tangled_ribbon",
    "name": "Feywild Tangled Ribbon",
    "description": "The Feywild Tangled Ribbon is a frayed silk ribbon that pulses with a faint, rhythmic glow from trapped time loops. Crafted by Goomba Ground Delivery, this enchanted accessory hums with the discordant echoes of moments that never quite finished.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Feywild Stealth",
      "Temporal Rewind",
      "Looping Trap"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Feywild Stealth",
        "rules": "While wearing the ribbon around your neck or wrist, you gain a +1 bonus to Sleight of Hand and Stealth checks while within the Feywild."
      },
      {
        "title": "Temporal Rewind",
        "rules": "When you take damage from a melee attack, roll a d10. On a 1, the ribbon triggers a time rewind; you regain 1d6 hit points as the wound momentarily un-happens. This effect can trigger once per long rest."
      },
      {
        "title": "Looping Trap",
        "rules": "As an action, you can attempt to entangle a creature within 10 feet. The target must succeed on a DC 13 Wisdom saving throw or be Restrained as they are forced to repeat their previous action on their next turn. This effect ends if the creature takes damage or is healed."
      }
    ],
    "levelRequirementReason": "The ribbon's temporal instability requires a character to have sufficient mental fortitude to handle the shifting time loops.",
    "vendorReason": "Almost Edge specializes in items that blur the lines between reality and the ethereal.",
    "shippingDetail": "Delivered via erratic hopping; may arrive slightly out of chronological order.",
    "usage": {
      "activation": "Passive (Stealth), Reaction (Rewind), Action (Looping Trap)",
      "duration": "Instantaneous or until the effect ends",
      "endsWhen": "Ends when the target takes damage, is healed, or the long rest is completed.",
      "charges": "1 Rewind per long rest; Looping Trap is limited by the ribbon's fraying (DM's discretion)."
    },
    "priceReason": "Reduced slightly to reflect the ribbon's fraying state while maintaining its uncommon utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-21T23:18:43.671353+00:00",
    "aiReviewedAt": "2026-07-21T23:18:43.671353+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_fire_flower_core": {
    "id": "almost_edge_fire_flower_core",
    "name": "Bloom of Shattered Flame",
    "description": "The Bloom of Shattered Flame is a mutated fire flower core harvested from the unstable void near the edge. Its petals erupt in violent explosions when touched, carrying the volatile essence of a rogue fire spirit from a failed Sovereignty Act protest.",
    "price": 1000,
    "icon": "🌶",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Volatile Combustion",
      "Searing Precision",
      "Unstable Burst"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Volatile Combustion",
        "rules": "When you first consume or activate this core, it deals 3d4 fire damage to all creatures within a 5-foot radius, including yourself."
      },
      {
        "title": "Searing Precision",
        "rules": "For 1 round immediately following its first use, you gain a +2 bonus to attack rolls made with melee weapons."
      },
      {
        "title": "Unstable Burst",
        "rules": "Whenever you cast a spell or use a magical ability while holding the core, there is a 25% chance it triggers a minor explosion, dealing 1d6 fire damage to all adjacent creatures."
      }
    ],
    "levelRequirementReason": "The core's volatile nature requires a character with basic combat experience to handle the feedback.",
    "vendorReason": "This vendor specializes in items harvested from the unstable void near the edge.",
    "shippingDetail": "Shipped in a heat-resistant containment pod to prevent premature detonation during transit.",
    "usage": {
      "activation": "Action or consumed",
      "duration": "1 round for precision; instantaneous for damage",
      "endsWhen": "The core is consumed or the duration expires",
      "charges": "1 use per day"
    },
    "priceReason": "Increased to reflect the high risk of self-damage and its unique combat utility.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-21T23:19:12.342868+00:00",
    "aiReviewedAt": "2026-07-21T23:19:12.342868+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_griffonstone_key": {
    "id": "almost_edge_griffonstone_key",
    "name": "Griffonstone Key",
    "description": "The Griffonstone Key is a jagged, heavy key carved from the molten core of a fallen Griffonstone and forged from corrupted starlight. It emits a low hum when near dimensional breaches and serves as a tool to navigate the hidden tunnels beneath the Void Edge.",
    "category": "equipment",
    "price": 4000,
    "icon": "🦅",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Secret Passage Access",
      "Void Rift Trigger",
      "Melee Weaponry"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Secret Passage Access",
        "rules": "As an action, you can hold the key near a sealed door or wall within the Void Edge. If the location contains a hidden tunnel, the key unlocks it instantly. This effect can be used a number of times equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Void Rift Trigger",
        "rules": "The first time you use the key to open a passage, there is a 50% chance a Void Rift opens. All creatures within 10 feet must succeed on a DC 15 Dexterity saving throw or take 2d6 force damage."
      },
      {
        "title": "Melee Weaponry",
        "rules": "The key can be used as a simple melee weapon. It deals 1d4 piercing damage on a hit. You have disadvantage on attack rolls made with this item unless you are a Vampire Covenant member."
      }
    ],
    "levelRequirementReason": "The item is rated as Epic rarity and requires high-level navigation of dimensional breaches.",
    "vendorReason": "The Void Edge is the primary location where these tunnels are situated.",
    "shippingDetail": "Smuggled via high-speed courier; requires a secret meeting point for delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends after the door is opened or the rift damage is dealt.",
      "charges": "Proficiency Bonus per long rest"
    },
    "priceReason": "The price reflects its Epic rarity and unique utility for high-level exploration.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-21T23:20:05.242554+00:00",
    "aiReviewedAt": "2026-07-21T23:20:05.242554+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_name_here": {
    "id": "almost_edge_item_name_here",
    "name": "Crumbling Cogwheel",
    "description": "This Crumbling Cogwheel is a jagged, rusted gear salvaged from a collapsing Chaos Dwarf machine. It hums with a discordant, unstable energy that vibrates against the palm of anyone holding it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Gravity Shock Immunity",
      "Kinetic Overload",
      "Unstable Resonance"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gravity Shock Immunity",
        "rules": "While holding the Cogwheel, you have advantage on saving throws against effects that would cause you to fall, be pushed, or be knocked prone by gravitational forces."
      },
      {
        "title": "Kinetic Overload",
        "rules": "When you hit a creature with a melee weapon attack, the Cogwheel adds an extra 1d6 force damage to the strike."
      },
      {
        "title": "Unstable Resonance",
        "rules": "After using the Kinetic Overload effect for 3 rounds, you must succeed on a DC 13 Constitution saving throw or suffer the Poisoned condition for 1 minute as the gear's hum causes intense nausea."
      }
    ],
    "levelRequirementReason": "The unstable energy of the Chaos Dwarf machinery requires a seasoned adventurer to handle without injury.",
    "vendorReason": "This vendor specializes in salvaged and high-risk mechanical components.",
    "shippingDetail": "Delivered in a lead-lined crate to prevent the humming from alerting local wildlife.",
    "usage": {
      "activation": "Passive (Holding)",
      "duration": "1 minute per use",
      "endsWhen": "The user drops the item or the resonance causes the user to become Poisoned",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 2500 to reflect the item's damaged state and the risk of nausea.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T23:20:42.903844+00:00",
    "aiReviewedAt": "2026-07-21T23:20:42.903844+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_pony_heart_pearl": {
    "id": "almost_edge_pony_heart_pearl",
    "name": "Pony Heart Pearl",
    "description": "The Pony Heart Pearl is a luminous orb harvested from the core of a fallen Equestrian noble, pulsing with the warmth of friendship magic. This pearl glows softly in the presence of equines and serves as a vessel for memories and restorative energy.",
    "price": 1000,
    "icon": "🐴",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Restorative Pulse",
      "Friendship Boon",
      "Changeling Sympathy"
    ],
    "vendor": "almost_edge",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Restorative Pulse",
        "rules": "As an action, you can crush the pearl to restore 20 hit points to yourself or one creature you can touch. This effect is instantaneous and the pearl is destroyed upon use."
      },
      {
        "title": "Friendship Boon",
        "rules": "While holding the pearl, you gain a +1 bonus to Charisma (Persuasion) checks made to influence friendly creatures. This effect lasts for 1 minute or until you are incapacitated."
      },
      {
        "title": "Changeling Sympathy",
        "rules": "If a non-Changeling creature wears the pearl for more than 8 hours, they must succeed on a DC 13 Wisdom saving throw or suffer disadvantage on Initiative rolls for 1 hour as they experience fleeting, hallucinatory memories of another life."
      }
    ],
    "levelRequirementReason": "The item's restorative healing and social bonuses are balanced for characters capable of navigating social complexities.",
    "vendorReason": "The vendor specializes in items with unique origins and magical properties.",
    "shippingDetail": "The pearl is transported in a lead-lined pouch to dampen its magical signature during transit.",
    "usage": {
      "activation": "Action (Crushing) or Passive (Holding/Wearing)",
      "duration": "1 minute or instantaneous",
      "endsWhen": "The pearl is destroyed by crushing or the 8-hour wear limit is reached",
      "charges": "Single use for healing; passive for social bonus"
    },
    "priceReason": "Adjusted to reflect the rarity of noble artifacts and the potency of the healing effect.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-21T23:21:28.495350+00:00",
    "aiReviewedAt": "2026-07-21T23:21:28.495350+00:00",
    "aiReviewVersion": 1
  }
};
