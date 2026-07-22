// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_001 = {
  " Pauline_mic": {
    "id": "pauline_mic",
    "name": "Pauline's Microphone",
    "description": "Pauline's Microphone is a polished brass and silver handheld device favored by the Gilded Gryphon for its crystalline clarity. This elegant piece of equipment allows a performer to project melodies across vast distances or command a crowd with authority.",
    "category": "equipment",
    "price": 1200,
    "icon": "🎤",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Vocal Command",
      "Enhanced Performance",
      "Resonant Echo"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Sound Box",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Vocal Command",
        "rules": "As an action, you can expend 1 charge to project a commanding shout. One creature of your choice within 60 feet must succeed on a DC 15 Wisdom saving throw or be forced to use its reaction to move up to its speed in a direction of your choice and perform one non-hostile action (such as dropping an object or turning away). You can use this feature a number of times equal to your Proficiency Bonus, regaining all charges on a long rest."
      },
      {
        "title": "Enhanced Performance",
        "rules": "While holding the microphone and performing, you gain a +2 bonus to Charisma (Performance) checks. Additionally, your voice can be heard clearly by all creatures within 120 feet."
      },
      {
        "title": "Resonant Echo",
        "rules": "When you cast a spell that deals Thunder damage or creates a booming sound, the microphone creates a Resonant Echo. Each creature within 10 feet of the source must succeed on a DC 15 Constitution saving throw or be Deafened until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The microphone's command capabilities require a level of presence and authority typically found in mid-tier adventurers.",
    "vendorReason": "The Gilded Gryphon specializes in high-end luxury goods and performance gear for the nobility.",
    "shippingDetail": "Delivered in a velvet-lined crate to ensure the microphone's internal resonance remains unmarred.",
    "usage": {
      "activation": "Action for Vocal Command; Passive for Performance and Echoes",
      "duration": "Instantaneous for Command; 1 minute for Performance",
      "endsWhen": "The Command effect ends once the target completes the action; Performance ends when the user stops performing.",
      "charges": "Uses equal to Proficiency Bonus per long rest."
    },
    "priceReason": "The price reflects its rare status and the utility provided by both performance buffs and crowd control.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-21T22:23:52.813368+00:00",
    "aiReviewedAt": "2026-07-21T22:23:52.813368+00:00",
    "aiReviewVersion": 1
  },
  " shy_guy_torch": {
    "id": "shy_guy_torch",
    "name": "Shy Guy's Mask Torch",
    "description": "The Shy Guy's Mask Torch is a flickering wooden torch topped with a wide-eyed, carved face. This peculiar light source pulses with a dim glow while the mask's expression shifts and it whispers unsettling secrets to its bearer.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Shy Light",
      "Whispered Secrets",
      "Nervous Giggles"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Dark Wrap",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Shy Light",
        "rules": "While the torch is lit, it sheds dim light in a 15-foot radius. This light pulses; creatures within the radius have disadvantage on Wisdom (Perception) checks relying on sight, as the light flickers rhythmically."
      },
      {
        "title": "Whispered Secrets",
        "rules": "While holding the torch, you can use an action to hear a secret. Roll a d20; on a 10 or higher, you learn one non-magical fact about a creature within 30 feet that you can see. You can use this feature once per long rest."
      },
      {
        "title": "Nervous Giggles",
        "rules": "The torch emits faint, high-pitched giggling. This sound is audible to any creature within 10 feet. You have disadvantage on Stealth checks made to move silently while the torch is lit."
      }
    ],
    "levelRequirementReason": "The item's stealth mechanics are intended for low-level infiltration.",
    "vendorReason": "The black market specializes in tools for stealth and illicit information gathering.",
    "shippingDetail": "Delivered in a sound-dampened crate to ensure the mask's giggling isn't overheard during transit.",
    "usage": {
      "activation": "Passive (while lit)",
      "duration": "1 hour of light per torch",
      "endsWhen": "Extinguished by loud noise or natural burning out",
      "charges": "1 secret per long rest"
    },
    "priceReason": "The price reflects the utility of both a light source and a limited divination tool for infiltration.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T22:24:22.360984+00:00",
    "aiReviewedAt": "2026-07-21T22:24:22.360984+00:00",
    "aiReviewVersion": 1
  },
  "1_up_deluxe": {
    "id": "1_up_deluxe",
    "name": "1-Up Deluxe",
    "description": "This 1-Up Deluxe is a shimmering, oversized mushroom forged from solid platinum that pulses with a rhythmic heartbeat. Held in your hand, it radiates a profound sense of safety to the wielder.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Second Chance",
      "Single Use"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Divine Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Second Chance",
        "rules": "When you are reduced to 0 hit points but not killed outright, you can use your reaction to have the mushroom pulse with light. You instead drop to 1 hit point. Once this property is used, the platinum mushroom shatters into dust."
      },
      {
        "title": "Single Use",
        "rules": "This item is a consumable and is destroyed immediately upon the successful activation of its Second Chance property."
      }
    ],
    "priceReason": "The price reflects the high cost of platinum and the life-saving utility of a one-time resurrection.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-21T22:08:38.833975+00:00",
    "aiReviewedAt": "2026-07-21T22:08:38.833975+00:00",
    "aiReviewVersion": 1,
    "levelRequirementReason": "This item is a basic survival tool accessible to all adventurers.",
    "vendorReason": "The local mushroom farmers trade in rare fungal artifacts.",
    "shippingDetail": "Delivered via a floating lily pad; requires a 1d4 hour delivery window.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The mushroom is consumed and destroyed upon use.",
      "charges": "1 use"
    }
  },
  "1_up_mushroom": {
    "id": "1_up_mushroom",
    "name": "1-Up Mushroom",
    "description": "This 1-Up Mushroom is a vibrant green fungus that vibrates with the frequency of life itself. Sourced from the hidden groves of Toad Town, this miracle of nature provides a singular chance to defy the grave.",
    "category": "premium",
    "price": 1000,
    "icon": "💚",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Defy Death",
      "Instant Restoration"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Armored Escort",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Defy Death",
        "rules": "As an action, you can consume the mushroom to target a creature within 5 feet that has died within the last minute. The target is instantly restored to life with all its hit points intact, even if its body was destroyed or disintegrated. This effect can only be used once per mushroom."
      },
      {
        "title": "Instant Restoration",
        "rules": "The mushroom is consumed upon use and is destroyed instantly. Due to the strain on the universe, the user must succeed on a DC 15 Wisdom saving throw or suffer one level of exhaustion as the cosmos frowns upon the exchange."
      }
    ],
    "levelRequirementReason": "The item is a consumable miracle and does not require high-level proficiency to activate.",
    "vendorReason": "Toad Town is the primary hub for rare fungal life and magical produce.",
    "shippingDetail": "The mushroom is transported in a lead-lined crate to prevent its life-frequency from vibrating out of existence during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The mushroom is consumed and destroyed upon use.",
      "charges": "1 use"
    },
    "priceReason": "Adjusted from 300,000 XP to 1,000 XP to reflect a single-use life-saving consumable rather than a permanent artifact.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-21T22:25:08.934124+00:00",
    "aiReviewedAt": "2026-07-21T22:25:08.934124+00:00",
    "aiReviewVersion": 1
  },
  "a_bag_that_defies_vertical_1": {
    "id": "a_bag_that_defies_vertical_1",
    "name": "Gravity Satchel",
    "description": "This Gravity Satchel is a sturdy leather pouch that clings to the side of the doughnut, defying verticality. Crafted for travelers of The Grand Country, it hums with a faint celestial resonance and features a 🌌 icon stitched into its flap.",
    "category": "equipment",
    "price": 12000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Vertical Levitation",
      "Gravity Anomaly",
      "Enhanced Capacity",
      "Void Curse"
    ],
    "vendor": "inkopolis",
    "shippedBy": "Paratroopa Air",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Vertical Levitation",
        "rules": "As a bonus action, you can cause the satchel to emit a field that allows you to hover vertically. You move at a speed of 15 feet upward or downward. This effect lasts for 1 minute or until you are incapacitated or use a bonus action to end the effect."
      },
      {
        "title": "Gravity Anomaly",
        "rules": "Whenever you use the Vertical Levitation effect, roll a d10. On a 1, a localized gravity anomaly occurs in a 10-foot radius centered on you; all creatures in the area must succeed on a DC 14 Strength saving throw or be pulled 5 feet toward the center."
      },
      {
        "title": "Enhanced Capacity",
        "rules": "The satchel provides a weight limit of 100 lbs for gear stored within it, regardless of the weight of the bag itself."
      },
      {
        "title": "Void Curse",
        "rules": "If the satchel is dropped into a Void space, the wearer is instantly flipped upside down relative to the world's plane. This condition is permanent unless dispelled by a 3rd-level 'Greater Restoration' spell."
      }
    ],
    "levelRequirementReason": "The complexity of manipulating gravity safely requires a high level of magical proficiency.",
    "vendorReason": "Inkopolis is a known hub for enchanted gear that interacts with the world's unique geography.",
    "shippingDetail": "Delivered via high-altitude drop; requires a stable landing zone to prevent the bag from floating away.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Incapacitated, ended by user, or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the epic rarity and the specialized utility for navigating the doughnut's terrain.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-21T22:25:38.210209+00:00",
    "aiReviewedAt": "2026-07-21T22:25:38.210209+00:00",
    "aiReviewVersion": 1
  },
  "a_bottle_of_whiskey_garlic": {
    "id": "a_bottle_of_whiskey_garlic",
    "name": "Wario's Wild West Bottle",
    "description": "Wario's Wild West Bottle is a rugged glass flask filled with a pungent, bubbling concoction of garlic juice and 'whiskey.' Crafted by Wario West, this pungent beverage smells of the frontier and provides a rustic, stinging kick.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍾",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Toughness Boost",
      "Western Intimidation",
      "Pungent Taste"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bottle Bounce",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toughness Boost",
        "rules": "When you drink the contents of this bottle as an action, your Constitution score increases by 1 for 1 hour. This effect does not stack."
      },
      {
        "title": "Western Intimidation",
        "rules": "While the effects of the drink are active, you have advantage on Charisma (Intimidation) checks made to cowdle enemies or exert dominance."
      },
      {
        "title": "Pungent Taste",
        "rules": "The juice burns your throat; you have disadvantage on all Charisma (Persuasion) checks made within 1 minute of drinking this bottle."
      }
    ],
    "levelRequirementReason": "The item is common equipment and does not require a specific power level to utilize.",
    "vendorReason": "Wario West is the primary producer of this specific brand of frontier tonic.",
    "shippingDetail": "The bottle is padded with straw to prevent breakage during high-velocity transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The duration expires, the user falls unconscious, or the user drinks another potion.",
      "charges": "Single use; the bottle is emptied upon drinking."
    },
    "priceReason": "Reduced from 4700 to reflect a common consumable item rather than a high-tier artifact.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-21T22:25:59.095415+00:00",
    "aiReviewedAt": "2026-07-21T22:25:59.095415+00:00",
    "aiReviewVersion": 1
  },
  "a_bracelet_infused_with_wario": {
    "id": "a_bracelet_infused_with_wario",
    "name": "Wario's Garlic Power Bracelet",
    "description": "Wario's Garlic Power Bracelet is a heavy, pungent band of iron forged in Wario's Garlic Lab. It radiates a sharp, eye-watering aroma of roasted cloves that pulses with raw, unrefined power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Garlic Strength",
      "Vampiric Repellent",
      "Stink Breath"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stinky Sack",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Garlic Strength",
        "rules": "As a bonus action, you can consume a portion of the infused garlic to gain a +1 bonus to your Strength score and all associated checks for 1 hour. This effect can be used once per long rest."
      },
      {
        "title": "Vampiric Repellent",
        "rules": "You have advantage on saving throws against being charmed by undead creatures due to your overwhelming natural musk."
      },
      {
        "title": "Stink Breath",
        "rules": "As an action, you can exhale a cloud of pungent gas in a 5-foot cone. Each creature in that area must make a DC 10 Constitution saving throw, taking 1d4 poison damage on a failed save. On a failed save, the target is also poisoned (nauseated) until the end of its next turn. Allies in the area must also make this save or become nauseated."
      }
    ],
    "levelRequirementReason": "The physical strain of the garlic's potency requires a character of at least 5th level to wield safely.",
    "vendorReason": "This item is a signature product of the local land's most eccentric culinary lab.",
    "shippingDetail": "The item arrives in a vacuum-sealed, reinforced burlap sack to contain the odor during transit.",
    "usage": {
      "activation": "Bonus Action (Strength) or Action (Stink Breath)",
      "duration": "1 hour for Strength; Instantaneous for Stink Breath",
      "endsWhen": "Ends after 1 hour for Strength or when the Stink Breath action is completed.",
      "charges": "1 use of Strength per long rest; Stink Breath is limited by your action economy."
    },
    "priceReason": "Reduced from 9500 to reflect a balanced uncommon rarity for a utility-focused accessory.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-21T22:26:24.162129+00:00",
    "aiReviewedAt": "2026-07-21T22:26:24.162129+00:00",
    "aiReviewVersion": 1
  },
  "a_brass_token_engraved_with": {
    "id": "a_brass_token_engraved_with",
    "name": "Pipe Network Key",
    "description": "The Pipe Network Key is a brass token engraved with the symbols of the Pipe Network’s collapse. This heavy metal token allows users to interface with ancient pipe nodes to reveal hidden smuggling routes, though it echoes with the lingering whispers of the Princess.",
    "price": 1000,
    "icon": "⚙",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Unlock Hidden Routes",
      "Smuggler Insight",
      "Auditory Hallucinations",
      "Stealth Bonus"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unlock Hidden Routes",
        "rules": "As an action, you can insert the token into a pipe node. For 10 minutes, you can see the hidden paths of smugglers within the pipe system. This effect ends if you move more than 60 feet away from the node or use the token on a different node."
      },
      {
        "title": "Smuggler Insight",
        "rules": "While the token is active, you have advantage on Wisdom (Perception) checks made to identify smuggler activity or hidden caches within the infrastructure."
      },
      {
        "title": "Auditory Hallucinations",
        "rules": "If the token is used for more than 10 minutes, you must succeed on a DC 12 Wisdom saving throw or suffer disadvantage on Initiative rolls for 1 hour as you hear the Princess's final plea."
      },
      {
        "title": "Stealth Bonus",
        "rules": "While inside a pipe system, you gain a +2 bonus to Dexterity (Stealth) checks. This bonus is negated if you are in an open area or if the token is not currently inserted into a node."
      }
    ],
    "levelRequirementReason": "The complexity of navigating the Pipe Network's infrastructure requires a basic grasp of urban navigation.",
    "vendorReason": "The Mushroom Kingdom's underground networks are the primary source for these historical tokens.",
    "shippingDetail": "Delivered via heavy-duty courier; requires a 1-day transit time to ensure the brass token is not damaged.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes",
      "endsWhen": "Moving 60 feet from the node or manual deactivation",
      "charges": "Unlimited uses"
    },
    "priceReason": "Adjusted to reflect the rarity of the token and the significant utility provided by the stealth and perception bonuses.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-21T22:26:50.472632+00:00",
    "aiReviewedAt": "2026-07-21T22:26:50.472632+00:00",
    "aiReviewVersion": 1
  },
  "a_buoyant_satchel_woven_from": {
    "id": "a_buoyant_satchel_woven_from",
    "name": "Tropical Tide Satchel",
    "description": "This Tropical Tide Satchel is a buoyant pouch woven from durable sea grass and polished coral. Crafted by the Pond Patrol, the satchel expands when submerged to provide extra storage and silent mobility.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐠",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Expanded Capacity",
      "Buoyant Movement",
      "Hydrodynamic Coating"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expanded Capacity",
        "rules": "While the satchel is worn, your carrying capacity is increased by 30% as the sea grass fibers stretch to accommodate extra weight."
      },
      {
        "title": "Buoyant Movement",
        "rules": "Your swimming speed increases by 5 feet. Additionally, while the satchel is submerged, it grants you advantage on Stealth checks made to hide from enemies."
      },
      {
        "title": "Hydrodynamic Coating",
        "rules": "The coral weave provides a protective layer; you have resistance to bludgeoning, piercing, and slashing damage from water-based hazards (such as crashing waves or whirlpools)."
      }
    ],
    "levelRequirementReason": "The item provides utility and minor mobility buffs suitable for early-game exploration.",
    "vendorReason": "Isle Delfino is a coastal hub where sea-grass weaving is a common craft.",
    "shippingDetail": "Delivered via waterproof courier pouch; arrives within 2 days of order.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The item is destroyed or discarded.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 2200 to reflect a balanced uncommon utility item for low-level players.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-21T22:27:10.696749+00:00",
    "aiReviewedAt": "2026-07-21T22:27:10.696749+00:00",
    "aiReviewVersion": 1
  },
  "a_cape_that_makes_you": {
    "id": "a_cape_that_makes_you",
    "name": "Wario's Super Star Cape",
    "description": "Wario's Super Star Cape is a heavy, gold-trimmed garment adorned with a shimmering yellow fabric that radiates a faint hum. Manufactured in Wario's Star Factory, this cape pulses with the erratic energy of a captured power-up.",
    "category": "equipment",
    "price": 17000,
    "icon": "⭐",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invincible Stride",
      "Star Power Presence",
      "Power-Down Crash"
    ],
    "vendor": "wario_land",
    "shippedBy": "Starry Shipment",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invincible Stride",
        "rules": "As a bonus action, you can activate the cape's power to gain resistance to all damage for 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Star Power Presence",
        "rules": "While wearing the cape, you have advantage on Charisma (Intimidation) checks as the fabric sparkles with intense energy."
      },
      {
        "title": "Power-Down Crash",
        "rules": "When the 1-minute duration of the Invincible Stride ends, you suffer from a sudden loss of momentum; you have disadvantage on all ability checks for the next 3 minutes or until you finish a short rest."
      }
    ],
    "levelRequirementReason": "The cape's high-impact power-up effects are balanced for mid-tier adventurers.",
    "vendorReason": "The vendor specializes in items originating from Wario's territory.",
    "shippingDetail": "The item arrives in a glowing crate that must be opened with a heavy mallet.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or the user is incapacitated.",
      "charges": "1 use per long rest"
    },
    "priceReason": "The price reflects the rare nature of Star Factory equipment and its high-impact defensive utility.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-21T22:27:32.179575+00:00",
    "aiReviewedAt": "2026-07-21T22:27:32.179575+00:00",
    "aiReviewVersion": 1
  },
  "a_card_that_wilds_any": {
    "id": "a_card_that_wilds_any",
    "name": "Wario's Wildcard",
    "description": "Wario's Wildcard is a sturdy, oversized playing card printed with a grinning face and the 'Wario Cards' logo. This heavy card feels weighted with strange, chaotic energy from the Wario Land games.",
    "category": "equipment",
    "price": 1000,
    "icon": "🃏",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Gambler's Edge",
      "Clumsy Handling",
      "Wario's Double Or Nothing"
    ],
    "vendor": "wario_land",
    "shippedBy": "Joker Jog",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gambler's Edge",
        "rules": "While holding this card, you gain a +1 bonus to any Intelligence (Investigation) or Dexterity (Sleight of Hand) checks made during gambling games or contests of chance."
      },
      {
        "title": "Clumsy Handling",
        "rules": "Because the card is so large and awkward, you have disadvantage on Dexterity (Sleight of Hand) checks made to hide, swap, or palm the card."
      },
      {
        "title": "Wario's Double Or Nothing",
        "rules": "Once per long rest, you can use an action to present the card during a game of chance. Roll a d20; on a 10 or higher, you double your current winnings for that round, but on a 9 or lower, you lose all winnings from that round."
      }
    ],
    "levelRequirementReason": "The item is common rarity and does not provide significant combat power.",
    "vendorReason": "This vendor specializes in items related to Wario's games and card-based mechanics.",
    "shippingDetail": "Delivered via Joker Jog with a 1-day delay; the card arrives slightly bent but functional.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends immediately after the roll or when the card is put away.",
      "charges": "1 use per long rest for the Double Or Nothing effect."
    },
    "priceReason": "Reduced from 5000 to reflect its common rarity and limited utility.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T22:27:55.112136+00:00",
    "aiReviewedAt": "2026-07-21T22:27:55.112136+00:00",
    "aiReviewVersion": 1
  },
  "a_chest_full_of_treasure": {
    "id": "a_chest_full_of_treasure",
    "name": "Wario's Fake Treasure Chest (Scam Chest!)",
    "description": "Wario's Fake Treasure Chest is a masterfully crafted decoy from Wario's Trap Treasury, designed to look like a heavy loot haul. This lightweight box is intended to mislead enemies into wasting their time on a worthless prize.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Decoy Bait",
      "Spring-Loaded Blinding",
      "Weightless Fake"
    ],
    "vendor": "wario_land",
    "shippedBy": "Empty Echo Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Decoy Bait",
        "rules": "As an action, you can place the chest in an unoccupied space within 30 feet. When a creature uses an action to investigate or open the chest, it must succeed on a DC 13 Intelligence saving throw or spend the remainder of its turn searching the empty interior."
      },
      {
        "title": "Spring-Loaded Blinding",
        "rules": "If a creature attempts to open the lid, a spring-loaded mechanism triggers. The target must succeed on a DC 12 Constitution saving throw or be Blinded until the end of its next turn as fake gold flies into its face."
      },
      {
        "title": "Weightless Fake",
        "rules": "The chest weighs only 5 pounds. Any creature that attempts to lift or move it without looking closely can succeed on a DC 13 Wisdom (Perception) check to realize the chest is a hollow fake."
      }
    ],
    "levelRequirementReason": "The item is a low-level utility trap and does not require high-level magical proficiency.",
    "vendorReason": "Wario is the primary source of fraudulent loot and deceptive traps in this region.",
    "shippingDetail": "Delivered with a 'Handle With Care' sticker that is actually a joke.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The chest is destroyed or the spring mechanism is jammed by a successful DC 15 Strength check.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 9000 to reflect a balanced uncommon utility item price for a low-level party.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-21T22:28:19.003634+00:00",
    "aiReviewedAt": "2026-07-21T22:28:19.003634+00:00",
    "aiReviewVersion": 1
  },
  "a_classic_wizard_hat_that": {
    "id": "a_classic_wizard_hat_that",
    "name": "Mages' Guild Pointed Hat of Stereotypes",
    "description": "This Mages' Guild Pointed Hat of Stereotypes is a flimsy, oversized garment crafted by the Mages' Guild Haberdashery. While it captures the quintessential aesthetic of a high-fantasy wizard, its lightweight fabric makes it prone to fluttering in the breeze.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎩",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Arcane Aesthetic",
      "Aerodynamic Liability",
      "Dramatic Casting"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcane Aesthetic",
        "rules": "While wearing this hat, you have advantage on Intelligence (Arcana) checks made to identify magical properties or lore, as your appearance perfectly embodies the wizarding archetype."
      },
      {
        "title": "Aerodynamic Liability",
        "rules": "You have disadvantage on all Strength and Dexterity saving throws made to resist being moved or knocked prone by wind-based effects or heavy gusts."
      },
      {
        "title": "Dramatic Casting",
        "rules": "Whenever you cast a spell with a casting time of 1 action, you must perform a dramatic gesture; you have disadvantage on Dexterity (Stealth) checks made during the same turn as the casting."
      }
    ],
    "levelRequirementReason": "The original level 5 requirement was removed to allow early-game casters to utilize the aesthetic benefits.",
    "vendorReason": "The Mages' Guild Haberdashery specializes in clothing that reinforces traditional magical archetypes.",
    "shippingDetail": "The hat is packed in a reinforced box to prevent it from blowing away during transit.",
    "usage": {
      "activation": "Passive/Automatic",
      "duration": "Permanent while worn",
      "endsWhen": "The hat is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The price was reduced from 9500 to 1000 to reflect its status as an uncommon, non-combat utility item.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-21T22:28:40.865859+00:00",
    "aiReviewedAt": "2026-07-21T22:28:40.865859+00:00",
    "aiReviewVersion": 1
  },
  "a_coin_with_wario_s": {
    "id": "a_coin_with_wario_s",
    "name": "Wario's Lucky W Coin",
    "description": "Wario's Lucky W Coin is a heavy, metallic coin stamped with a greedy, wide-eyed face. Minted by Wario's Mint as a counterfeit, it feels unusually weighted in your palm.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪙",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Weighted Flip",
      "Wario's Grin"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin Flip Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weighted Flip",
        "rules": "As a bonus action, you can flip the coin. Roll a d20; on a 1-12, the coin lands on tails and you have disadvantage on your next d20 roll made before the end of your next turn. On a 13-20, it lands on heads and you have advantage on your next d20 roll made before the end of your next turn."
      },
      {
        "title": "Wario's Grin",
        "rules": "While holding the coin, you gain advantage on Charisma (Deception) checks made specifically to win a game of chance or gamble."
      }
    ],
    "levelRequirementReason": "A common counterfeit coin does not require high-level magic or strength to wield.",
    "vendorReason": "The vendor is the primary source of counterfeit currency in the region.",
    "shippingDetail": "Delivered via a high-speed toss; may arrive slightly dented.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 round",
      "endsWhen": "The next d20 roll is made or the next turn ends",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4100 to reflect a common-rarity counterfeit item.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-21T22:29:00.860251+00:00",
    "aiReviewedAt": "2026-07-21T22:29:00.860251+00:00",
    "aiReviewVersion": 1
  },
  "a_controller_that_controls_minor": {
    "id": "a_controller_that_controls_minor",
    "name": "Wario's  WiiMote",
    "description": "Wario's WiiMote is a bulky, oversized remote controller manufactured by WarioWare Remotes. Its plastic casing is scuffed from years of frantic use, and its buttons click with a satisfying, heavy mechanical thud.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎮",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Remote Manipulation",
      "Feedback Vibration",
      "Technological Rapport"
    ],
    "vendor": "wario_land",
    "shippedBy": "Game Over Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Remote Manipulation",
        "rules": "As an action, you can point the WiiMote at an object weighing no more than 10 pounds within 30 feet. The object moves up to 5 feet in a straight line toward a space you choose. You can use this property a number of times equal to your Proficiency Bonus, regaining all uses after a long rest."
      },
      {
        "title": "Feedback Vibration",
        "rules": "While you are concentrating on a spell or ability, the WiiMote may vibrate violently. You have disadvantage on Constitution saving throws to maintain Concentration until the start of your next turn."
      },
      {
        "title": "Technological Rapport",
        "rules": "You gain a +1 bonus to Charisma (Persuasion) checks made to interact with individuals who possess mechanical expertise or technological devices."
      }
    ],
    "levelRequirementReason": "The item is balanced for low-level utility rather than high-level power.",
    "vendorReason": "This item is a staple of Wario's chaotic gaming collection.",
    "shippingDetail": "Delivered in a pixelated cardboard box with a 'fragile' sticker.",
    "usage": {
      "activation": "Action (Remote Manipulation)",
      "duration": "Instantaneous",
      "endsWhen": "The movement is completed or the limit of uses is reached.",
      "charges": "Proficiency Bonus uses per long rest"
    },
    "priceReason": "Reduced to reflect its status as an uncommon utility item rather than a high-tier artifact.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-21T22:29:23.777779+00:00",
    "aiReviewedAt": "2026-07-21T22:29:23.777779+00:00",
    "aiReviewVersion": 1
  },
  "a_cowboy_hat_with_wario": {
    "id": "a_cowboy_hat_with_wario",
    "name": "Wario's Wild West Hat",
    "description": "Wario's Wild West Hat is a wide-brimmed Stetson featuring bold, gaudy accents and distinct Wario flair. Crafted by the artisan Wario West, this rugged headwear smells of gunpowder and greed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤠",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Saloon Intimidation",
      "Clumsy Brim",
      "Western Charisma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Yeehaw Yonder",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Saloon Intimidation",
        "rules": "While inside a tavern or saloon, you have advantage on Charisma (Intimidation) checks made to cowrule others or demand payment."
      },
      {
        "title": "Clumsy Brim",
        "rules": "Because of its oversized, floppy design, you have disadvantage on Dexterity (Acrobatics) checks made to maintain your balance on uneven terrain."
      },
      {
        "title": "Western Charisma",
        "rules": "When interacting with fans of the Western genre, you gain a +1 bonus to Charisma (Persuasion) checks."
      }
    ],
    "levelRequirementReason": "The item is common equipment and does not require high-level proficiency to wield.",
    "vendorReason": "Wario West's personal workshop is the primary source for this specific brand of western wear.",
    "shippingDetail": "Delivered via horseback courier; arrives within 2 days of purchase.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The hat is lost, destroyed, or removed from the wearer's head.",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted from 4800 to 1000 to reflect its common rarity and minor utility.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-21T22:29:44.439481+00:00",
    "aiReviewedAt": "2026-07-21T22:29:44.439481+00:00",
    "aiReviewVersion": 1
  },
  "a_cursed_explosive_infused_with": {
    "id": "a_cursed_explosive_infused_with",
    "name": "Garlic Bomb",
    "description": "This Garlic Bomb is a pungent, cursed explosive infused with the overwhelming scent of 1000g of Wario’s garlic. Crafted by Pipe Express, the bulbous explosive reacts violently when it meets living flesh.",
    "price": 1000,
    "icon": "🧄",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Pungent Detonation",
      "Garlic Blindness",
      "Greed Aura"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Pungent Detonation",
        "rules": "When the bomb hits a living target, it detonates instantly. The target takes 3d4 piercing damage and must succeed on a DC 13 Constitution saving throw or be blinded by the pungent fumes until the end of its next turn."
      },
      {
        "title": "Garlic Blindness",
        "rules": "Any creature within a 5-foot radius of the detonation that is not the thrower must succeed on a DC 13 Constitution saving throw or suffer the effects of the Blinded condition for 1 minute. A creature can repeat the saving throw at the end of each of its turns."
      },
      {
        "title": "Greed Aura",
        "rules": "For 3 rounds following the detonation, the bomb radiates Wario's greed. Any hostile creature within 15 feet of the blast site has disadvantage on Wisdom (Insight) checks and rolls."
      }
    ],
    "levelRequirementReason": "The explosive nature of the item requires a basic understanding of combat mechanics.",
    "vendorReason": "The shop specializes in whimsical and slightly chaotic consumables.",
    "shippingDetail": "Shipped in a lead-lined crate to prevent premature detonation during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The bomb is thrown and detonates, destroying itself.",
      "charges": "Single use"
    },
    "priceReason": "The price was adjusted to reflect the uncommon rarity and the multi-effect utility of the explosion.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-21T22:30:07.153340+00:00",
    "aiReviewedAt": "2026-07-21T22:30:07.153340+00:00",
    "aiReviewVersion": 1
  },
  "a_cursed_relic_forged_from": {
    "id": "a_cursed_relic_forged_from",
    "name": "Entropy Ring",
    "description": "The Entropy Ring is a jagged band of metal forged from the shattered heart of the Iron Legion’s sleeper agent, Toadburt. This cursed relic radiates a palpable decay that erodes the wearer's sanity and memories over time.",
    "price": 5000,
    "icon": "⚙",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Toadburt's Fortitude",
      "Memory Erosion",
      "Psychic Vulnerability"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Toadburt's Fortitude",
        "rules": "While wearing the ring, you have advantage on saving throws against being Frightened. This effect is passive and constant while the ring is equipped."
      },
      {
        "title": "Memory Erosion",
        "rules": "Every hour the ring is worn, the wearer must succeed on a DC 15 Wisdom saving throw or lose one random memory from their past. On a failed save, the DM chooses a specific memory or skill proficiency the character no longer remembers."
      },
      {
        "title": "Psychic Vulnerability",
        "rules": "The ring's decay makes the wearer's mind fragile; you take an additional 1d6 psychic damage whenever you take psychic damage from an attack or spell."
      }
    ],
    "levelRequirementReason": "The item's psychic weight and memory-eroding properties are too dangerous for low-level characters.",
    "vendorReason": "Sarasaland acts as a neutral ground for artifacts of high-risk provenance.",
    "shippingDetail": "Delivered in a lead-lined box to prevent the ring's aura from affecting the courier.",
    "usage": {
      "activation": "Passive",
      "duration": "24 hours",
      "endsWhen": "The ring becomes inert after 24 hours of continuous wear.",
      "charges": "None"
    },
    "priceReason": "The price reflects the high risk of permanent memory loss and its Epic rarity status.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T22:30:48.841850+00:00",
    "aiReviewedAt": "2026-07-21T22:30:48.841850+00:00",
    "aiReviewVersion": 1
  },
  "a_cursed_tool_forged_from_1": {
    "id": "a_cursed_tool_forged_from_1",
    "name": "Ironclad Hammer of the Forge",
    "description": "The Ironclad Hammer of the Forge is a heavy smithing tool forged from the last steel of the Blacksmith’s Guild. Its handle glows with the faint fire of the Iron Legion’s labor, vibrating with the weight of a thousand strikes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Armor-Piercing Strike",
      "Degrading Impact",
      "Iron Will Infusion"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor-Piercing Strike",
        "rules": "When you hit a creature wearing heavy armor or a shield with a melee weapon attack using this hammer, you deal an additional 1d12 force damage."
      },
      {
        "title": "Degrading Impact",
        "rules": "When you hit a creature with a melee weapon attack using this hammer, the target's Armor Class is reduced by 1 (minimum of 10) as their protection cracks. This effect stacks but ends if the target takes a long rest."
      },
      {
        "title": "Iron Will Infusion",
        "rules": "On a hit, roll a d20. On a 20, the target must succeed on a DC 14 Wisdom saving throw or be affected by Iron Will, granting them resistance to all damage but reducing their movement speed by 10 feet for 3 rounds."
      }
    ],
    "levelRequirementReason": "The hammer's heavy weight and cursed nature require a character of significant physical strength to wield effectively.",
    "vendorReason": "The Midlands region is the primary hub for heavy industry and blacksmithing supplies.",
    "shippingDetail": "Shipped in a reinforced crate to prevent the hammer from damaging other parcels during transit.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target takes a long rest or the hammer is no longer used in an attack.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 2500 to 1000 to align with standard rare equipment scaling while maintaining its unique utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T22:31:12.783940+00:00",
    "aiReviewedAt": "2026-07-21T22:31:12.783940+00:00",
    "aiReviewVersion": 1
  },
  "a_custom_motorcycle_loud_fast": {
    "id": "a_custom_motorcycle_loud_fast",
    "name": "Wario's Chopper",
    "description": "Wario's Chopper is a custom-built, heavy-duty motorcycle known for its deafening roar and indestructible frame. This massive machine is fueled by garlic and leaves a thick trail of black smoke in its wake.",
    "category": "equipment",
    "price": 10000,
    "icon": "🏍️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "High-Speed Travel",
      "Ram Attack",
      "Smokescreen",
      "Garlic Fuel"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Driven through your wall",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "High-Speed Travel",
        "rules": "While mounted, your movement speed on roads or flat terrain increases by 100 feet. You have advantage on Dexterity (乗り物) checks made to avoid obstacles while traveling at this speed."
      },
      {
        "title": "Ram Attack",
        "rules": "When you move at least 20 feet toward a creature and hit it with the motorcycle, the target must make a DC 16 Strength saving throw. On a failure, the target takes 4d10 bludgeoning damage and is knocked prone. On a success, the target takes half damage and is not knocked prone."
      },
      {
        "title": "Smokescreen",
        "rules": "As a bonus action, the Chopper can emit a cloud of black smoke in a 30-foot cone. The area becomes heavily obscured for 1 minute. This effect can be used a number of times equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Garlic Fuel",
        "rules": "The motorcycle consumes 1 unit of garlic per hour of operation. If no garlic is provided, the motorcycle becomes non-functional until fed."
      }
    ],
    "levelRequirementReason": "The high speed and heavy ramming mechanics require a character with sufficient physical coordination.",
    "vendorReason": "Wario personally handles the distribution of his signature heavy machinery.",
    "shippingDetail": "The item arrives with significant property damage to your front entrance; no refunds for structural repairs.",
    "usage": {
      "activation": "Action (Ram), Bonus Action (Smokescreen), Passive (Speed)",
      "duration": "Instantaneous or 1 minute",
      "endsWhen": "Smokescreen ends after 1 minute or when used; Speed is constant while moving.",
      "charges": "Smokescreen: Proficiency Bonus per long rest"
    },
    "priceReason": "Reduced from 200,000 XP to reflect a balanced legendary equipment cost for a high-utility vehicle.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-21T22:31:40.818713+00:00",
    "aiReviewedAt": "2026-07-21T22:31:40.818713+00:00",
    "aiReviewVersion": 1
  },
  "a_darkly_polished_ring_forged": {
    "id": "a_darkly_polished_ring_forged",
    "name": "Onyx Hand Ring",
    "description": "The Onyx Hand Ring is a darkly polished band forged from the remnants of the Onyx Hand’s last rebellion. Crafted by the Iron Legion, the ring whispers the names of fallen heroes to its wearer while pulsing with a cold, disruptive energy.",
    "category": "equipment",
    "price": 3500,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Ward Detection and Weakening",
      "Willpower Drain",
      "Assassin's Mark",
      "Shadow Stealth"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Ward Detection and Weakening",
        "rules": "As an action, you can sense the presence of magical wards within 60 feet. Additionally, you can target one detected ward and force it to fail its next saving throw or check against a disruption attempt; this effect can be used a number of times equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Willpower Drain",
        "rules": "Whenever you use the Ward Detection and Weakening ability, you must succeed on a DC 13 Wisdom saving throw or take 1d6 psychic damage as the ring drains your willpower."
      },
      {
        "title": "Assassin's Mark",
        "rules": "Each time you use the Ward Detection and Weakening ability, roll a d20. On a 1, you are marked by the Onyx Hand's enemies; for the next 24 hours, you have disadvantage on Stealth checks and are tracked by hostile NPCs."
      },
      {
        "title": "Shadow Stealth",
        "rules": "While in dim light or darkness, you gain a +2 bonus to Dexterity (Stealth) checks. This bonus is negated if you are in bright light."
      }
    ],
    "levelRequirementReason": "The ring's psychic drain and tracking risks are tuned for characters with enough hit points and mental fortitude to handle the consequences.",
    "vendorReason": "This vendor specializes in high-rarity relics recovered from historical conflicts.",
    "shippingDetail": "Delivered via heavy-duty courier; arrives in 2 days with a protective lead-lined box.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The daily limit of uses is reached or the wearer takes a long rest.",
      "charges": "Proficiency Bonus per long rest"
    },
    "priceReason": "Reduced from 5000 to reflect a balanced rare-tier price for a utility-heavy item with risk factors.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T22:32:32.616289+00:00",
    "aiReviewedAt": "2026-07-21T22:32:32.616289+00:00",
    "aiReviewVersion": 1
  },
  "a_device_that_draws_maps": {
    "id": "a_device_that_draws_maps",
    "name": "Wario's Treasure Map Generator",
    "description": "Wario's Treasure Map Generator is a brass-bound drafting machine produced by Wario's Map Mill. It produces physical scrolls marked with a distinctive Wario watermark, designed to pinpoint hidden loot with 'surefire' results.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Treasure Mapping",
      "Waterproof Parchment",
      "Wario's Watermark"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pirate Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Treasure Mapping",
        "rules": "As an action, you can expend 1 use to generate a map to a nearby hidden cache. Roll a d100; on a 1-70, the map leads to a minor treasure worth 10-50gp. On a 71-100, the map leads to a trap that deals 1d6 piercing or bludgeoning damage to the first person who triggers it."
      },
      {
        "title": "Waterproof Parchment",
        "rules": "The maps produced by this device are waterproof; you have advantage on Wisdom (Survival) checks made to navigate or scout in wet environments or underwater."
      },
      {
        "title": "Wario's Watermark",
        "rules": "Any map produced by this device features a visible watermark. When you use a map to find treasure, roll a d20; on a 1-5, a rival treasure hunter arrives at the location within 1d4 hours to contest the loot."
      }
    ],
    "levelRequirementReason": "Removed the level 5 gate to allow for early-game exploration while maintaining balance via the complication mechanic.",
    "vendorReason": "This item is a signature product of Wario's own map-making enterprise.",
    "shippingDetail": "Delivered via a weathered crate; may arrive slightly damp from sea spray.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The generator is destroyed or the daily use limit is reached.",
      "charges": "1 use per day"
    },
    "priceReason": "Reduced from 14,000 XP to reflect an Uncommon rarity suitable for mid-tier exploration.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-21T22:32:57.282226+00:00",
    "aiReviewedAt": "2026-07-21T22:32:57.282226+00:00",
    "aiReviewVersion": 1
  },
  "a_flickering_lantern_from_luigi": {
    "id": "a_flickering_lantern_from_luigi",
    "name": "Luigi's Ghost-Hunting Lantern",
    "description": "Luigi's Ghost-Hunting Lantern is a weathered, flickering lantern salvaged from the ruins of a castle defense. Its glass panes are etched with faint, nervous carvings and it emits a steady, pale glow.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Spectral Sight",
      "Radiant Flare",
      "Haunted Whispers"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spooky Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Sight",
        "rules": "While the lantern is lit, it sheds bright light for 20 feet and dim light for an additional 10 feet. Within this radius, invisible spirits and ghosts are outlined in a faint blue hue, making them visible to all creatures."
      },
      {
        "title": "Radiant Flare",
        "rules": "As an action, you can cause the lantern to pulse with holy energy. Each undead creature within 15 feet of the lantern must succeed on a DC 13 Wisdom saving throw or take 1d4 radiant damage."
      },
      {
        "title": "Haunted Whispers",
        "rules": "The lantern is haunted by Luigi's lingering fears; while holding the lantern, you have disadvantage on saving throws against being frightened."
      }
    ],
    "levelRequirementReason": "The item is balanced for all levels as its primary effects are utility-based and its damage is minor.",
    "vendorReason": "Wario sells various salvaged items from the surrounding lands, including those from the castle ruins.",
    "shippingDetail": "Delivered in a crate wrapped in damp burlap; may arrive with a lingering chill.",
    "usage": {
      "activation": "Passive (Spectral Sight), Action (Radiant Flare)",
      "duration": "Spectral Sight is constant while lit; Radiant Flare is instantaneous",
      "endsWhen": "Radiant Flare can be used once per long rest; Spectral Sight ends if the lantern is extinguished",
      "charges": "1 use per long rest for Radiant Flare"
    },
    "priceReason": "The price was reduced to reflect an uncommon utility item that provides minor damage and specific visibility.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-21T22:33:20.628605+00:00",
    "aiReviewedAt": "2026-07-21T22:33:20.628605+00:00",
    "aiReviewVersion": 1
  },
  "a_flickering_lantern_that_glows": {
    "id": "a_flickering_lantern_that_glows",
    "name": "Feywhisper Torch",
    "description": "The Feywhisper Torch is a flickering lantern crafted from twilight-hued glass that emits a soft, rhythmic hum. This magical light source reveals hidden paths through the Feywild while granting the bearer a momentary veil of secrecy.",
    "price": 1000,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Veil of Twilight",
      "Pathfinder's Sight",
      "Subtle Presence"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Veil of Twilight",
        "rules": "As a bonus action, you can cause the lantern to pulse, granting you the effects of the invisibility spell for 1 round (or until you attack, cast a spell, or take damage). This effect has a cooldown of 1 minute."
      },
      {
        "title": "Pathfinder's Sight",
        "rules": "While the lantern is lit, you can see secret doors and hidden paths within the Feywild for 30 seconds. This effect activates automatically when the lantern is lit in a Feywild environment."
      },
      {
        "title": "Subtle Presence",
        "rules": "While holding the lantern, you have advantage on Dexterity (Stealth) checks made to hide in natural foliage or dim light for 1 minute after the lantern has been lit."
      }
    ],
    "levelRequirementReason": "The item's ability to grant invisibility and navigate the Feywild requires a character of at least 4th level to handle the magical flux.",
    "vendorReason": "Rogueport is a primary hub for illicit goods and items designed for stealthy navigation.",
    "shippingDetail": "Delivered in a lead-lined crate to prevent the lantern's whispers from alerting local authorities.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 round (Veil), 30 seconds (Pathfinder)",
      "endsWhen": "Attacking, casting a spell, taking damage, or the duration expires",
      "charges": "1 minute cooldown on invisibility"
    },
    "priceReason": "Adjusted to reflect a standard uncommon utility item that provides significant tactical advantages.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-21T22:33:44.382716+00:00",
    "aiReviewedAt": "2026-07-21T22:33:44.382716+00:00",
    "aiReviewVersion": 1
  },
  "a_flying_broom_for_quick": {
    "id": "a_flying_broom_for_quick",
    "name": "Kamek's Broom",
    "description": "Kamek's Broom is a sturdy, weathered wooden broomstick enchanted by the Comet Observatory to facilitate swift aerial escapes. Its bristles hum with a faint celestial energy, though the broom occasionally twitches with a stubborn, independent personality.",
    "category": "equipment",
    "price": 5000,
    "icon": "🧹",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Swift Flight",
      "Arcane Surge",
      "Erratic Movement"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Broomstick Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Swift Flight",
        "rules": "While holding the broom, you gain a flying speed of 50 feet. This speed is constant as long as you are mounted on the broom."
      },
      {
        "title": "Arcane Surge",
        "rules": "Once per day, you can use an action to cause the broom to cast one random 3rd-level spell from the Wizard spell list. The DM rolls a d10 to determine the spell. The spell targets a creature or object within 60 feet."
      },
      {
        "title": "Erratic Movement",
        "rules": "When you roll a 1 on an initiative check or a Dexterity (Acrobatics) check while mounted, the broom's mind takes over; you must succeed on a DC 12 Strength saving throw or be forced to fly 20 feet in a random direction."
      }
    ],
    "levelRequirementReason": "The broom's high-speed flight and arcane capabilities require a character with sufficient magical attunement.",
    "vendorReason": "The observatory specializes in celestial navigation tools and enchanted travel equipment.",
    "shippingDetail": "Delivered via a high-speed broom courier; may arrive slightly agitated and require a brief 'calming' period before use.",
    "usage": {
      "activation": "Mounting the broom",
      "duration": "Permanent (while held)",
      "endsWhen": "The user lets go of the broom or is incapacitated",
      "charges": "1 random spell per day"
    },
    "priceReason": "Adjusted from 30,000 to 5,000 XP to reflect a balanced epic-tier utility item for mid-to-high level play.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-21T22:34:08.206086+00:00",
    "aiReviewedAt": "2026-07-21T22:34:08.206086+00:00",
    "aiReviewVersion": 1
  },
  "a_fractured_fragment_of_a": {
    "id": "a_fractured_fragment_of_a",
    "name": "Mirrored Soul Shard",
    "description": "The Mirrored Soul Shard is a jagged, crystalline fragment of a dead necromancer’s essence bound to the Deep Mirror. This shimmering shard whispers forgotten commands and warps the battlefield's perception to manipulate undead formations.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Undead Command",
      "Spectral Veil",
      "Spirit Stagger"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Undead Command",
        "rules": "When you cast a spell or use a feature to summon undead, roll a d20; on a 10 or higher, you may immediately command one additional undead of the same CR to move up to half its speed toward a target of your choice."
      },
      {
        "title": "Spectral Veil",
        "rules": "As a bonus action, you can become invisible until the start of your next turn. This effect ends early if you take damage or move more than 15 feet on your turn."
      },
      {
        "title": "Spirit Stagger",
        "rules": "When a spirit summoned by this shard deals damage to a target, the target must succeed on a DC 14 Strength saving throw or be unable to take reactions until the start of its next turn."
      }
    ],
    "levelRequirementReason": "The shard's necrotic resonance is too volatile for characters under level 5 to wield safely.",
    "vendorReason": "The Fractured Atrium specializes in artifacts of necrotic and shattered origins.",
    "shippingDetail": "Delivered via Lakitu Drone; the shard is wrapped in lead-lined silk to prevent psychic leakage.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 round",
      "endsWhen": "Taking damage, moving 15 feet, or the start of the next turn",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 2500 to 1000 to align with standard Rare item gold-to-XP conversion for tactical utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T22:34:31.106667+00:00",
    "aiReviewedAt": "2026-07-21T22:34:31.106667+00:00",
    "aiReviewVersion": 1
  },
  "a_fractured_relic_from_the": {
    "id": "a_fractured_relic_from_the",
    "name": "Ancient Temple Shard",
    "description": "This Ancient Temple Shard is a jagged, glowing fragment of stone pulled from the depths of the Sacred Ruins. When held, the shard hums with a faint resonance that highlights the architecture of forgotten civilizations.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temple Agility",
      "Pathfinding Vision",
      "Sanctuary Shield"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temple Agility",
        "rules": "While you are within a designated temple zone, your walking and running speed increases by 5 feet. This effect is passive and only functions in areas identified as sacred ruins."
      },
      {
        "title": "Pathfinding Vision",
        "rules": "As an action, you can focus on the shard to cast a divination spell that reveals a hidden path or door within 60 feet. This effect has a 1d4 chance of success and can be used once per long rest."
      },
      {
        "title": "Sanctuary Shield",
        "rules": "While holding the shard in a temple zone, you gain resistance to non-magical bludgeoning, piercing, and slashing damage from environmental hazards (such as falling debris). This effect ends if you are more than 30 feet away from the shard."
      }
    ],
    "levelRequirementReason": "The shard's resonance is too volatile for those who lack the spiritual fortitude of a 5th-level adventurer.",
    "vendorReason": "The vendor specializes in artifacts recovered from the surrounding ruins.",
    "shippingDetail": "Delivered via armored shell-carrier to ensure the relic remains undisturbed during transit.",
    "usage": {
      "activation": "Passive (Agility/Shield) and Action (Pathfinding)",
      "duration": "Persistent while held",
      "endsWhen": "Effect ends if the shard is dropped or the user leaves a temple zone.",
      "charges": "1 use per long rest for Pathfinding Vision"
    },
    "priceReason": "Reduced from 2500 to reflect a balanced rare item price while maintaining its unique utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T22:35:16.064544+00:00",
    "aiReviewedAt": "2026-07-21T22:35:16.064544+00:00",
    "aiReviewVersion": 1
  },
  "a_geometric_wand_brimming_with_1": {
    "id": "a_geometric_wand_brimming_with_1",
    "name": "Kamek's Spare Wand",
    "description": "Kamek's Spare Wand is a geometric wand etched with shifting lines that hum with chaotic transformation magic. This relic, sourced from the Valley Trading Post, vibrates with a manic energy that causes the wielder to laugh uncontrollably upon activation.",
    "category": "equipment",
    "price": 10000,
    "icon": "🪄",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Arcane Potency",
      "Chaotic Transmutation",
      "Geometric Terrain"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Broomstick",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Arcane Potency",
        "rules": "You gain a +2 bonus to spell attack rolls and your spell save DC for any spell cast using this wand."
      },
      {
        "title": "Chaotic Transmutation",
        "rules": "As an action, you can touch a medium object and transform it into a loyal CR 3 monstrosity. The creature remains loyal to you for 1 hour or until it drops to 0 hit points. You must then succeed on a DC 13 Wisdom saving throw or laugh uncontrollably for 1 minute."
      },
      {
        "title": "Geometric Terrain",
        "rules": "As an action, you can target a 30-foot cube of difficult terrain within 60 feet. The area instantly transforms into a series of floating geometric blocks. The terrain remains in this state for 10 minutes, and any creature moving through it must succeed on a DC 15 Dexterity saving throw or fall prone."
      }
    ],
    "levelRequirementReason": "The chaotic nature of the wand requires a high level of magical discipline to wield without being overwhelmed.",
    "vendorReason": "The Valley Trading Post specializes in recovering anomalous magical artifacts from the wilderness.",
    "shippingDetail": "Delivered via high-speed broomstick flight; may arrive with minor scuff marks or lingering magical static.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous or 10 minutes",
      "endsWhen": "Duration expires or the object is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from the original price to reflect a balanced legendary-tier item cost for high-level play.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-21T22:36:04.783327+00:00",
    "aiReviewedAt": "2026-07-21T22:36:04.783327+00:00",
    "aiReviewVersion": 1
  },
  "a_gold_plated_spray_painted": {
    "id": "a_gold_plated_spray_painted",
    "name": "Wario's Authentic Autograph Plaque",
    "description": "Wario's Authentic Autograph Plaque is a gold-plated, spray-painted plaque featuring a winking portrait of the legendary Wario. Produced by Wario Land Memorabilia, the item emits a permanent, faint scent of garlic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖼️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Bad Financial Advice",
      "Collector's Status",
      "Tacky Aesthetic"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bad Financial Advice",
        "rules": "While the plaque is displayed in your camp, you may roll a d20 at the end of a Long Rest; on a 1-5, Wario appears in your dreams to offer terrible investment tips, causing you to lose 1d6 gold pieces as you impulsively follow his lead."
      },
      {
        "title": "Collector's Status",
        "rules": "You have advantage on Charisma (Persuasion) checks made to interact with NPCs who possess a high social standing or significant wealth, as they recognize the plaque as a collector's item."
      },
      {
        "title": "Tacky Aesthetic",
        "rules": "You have disadvantage on all Charisma (Persuasion) checks made against NPCs who are art critics, historians, or refined connoisseurs of fine art."
      }
    ],
    "levelRequirementReason": "The item is a common piece of memorabilia and does not require high-level proficiency to possess.",
    "vendorReason": "This is a branded item directly from the Wario Land Memorabilia line.",
    "shippingDetail": "The item arrives with a lingering garlic scent that persists even after unpacking.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The plaque is destroyed or sold",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4500 to reflect its status as a common, spray-painted novelty item.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-21T22:36:26.980088+00:00",
    "aiReviewedAt": "2026-07-21T22:36:26.980088+00:00",
    "aiReviewVersion": 1
  },
  "a_golden_key_to_the": {
    "id": "a_golden_key_to_the",
    "name": "Diamond City Key",
    "description": "The Diamond City Key is a heavy golden key forged by Skaven artisans to unlock the secrets of the vault. Its surface glimmers with a faint light, specifically tuned to resonate with the architecture of Diamond City and Wario Land zones.",
    "price": 5000,
    "icon": "💎",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Vault Access",
      "Short-Range Blink",
      "Mana Drain"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Vault Access",
        "rules": "As an action, you can touch the key to a locked door or chest within 5 feet. If the door is part of a hidden room within Diamond City or Wario Land, it unlocks instantly."
      },
      {
        "title": "Short-Range Blink",
        "rules": "As a bonus action, you can teleport up to 30 feet to an unoccupied space you can see. This effect requires 1000 mana; if you lack the mana, the key cannot be used."
      },
      {
        "title": "Mana Drain",
        "rules": "Each time you use the teleportation effect, you suffer a minor mana drain. For every three consecutive uses, you must succeed on a DC 13 Constitution saving throw or take 1d6 psychic damage."
      }
    ],
    "levelRequirementReason": "The epic rarity and mana costs require a character with significant magical reserves.",
    "vendorReason": "Sarasaland is a primary trade hub for high-value keys and treasures.",
    "shippingDetail": "Delivered via secure underwater transport; arrives within 3 days.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends once the teleportation occurs or the door unlocks.",
      "charges": "Unlimited uses as long as 1000 mana is available."
    },
    "priceReason": "The price reflects its epic rarity and the high mana cost required for its primary utility.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T22:36:50.014464+00:00",
    "aiReviewedAt": "2026-07-21T22:36:50.014464+00:00",
    "aiReviewVersion": 1
  },
  "a_greasy_napkin_signed_by": {
    "id": "a_greasy_napkin_signed_by",
    "name": "Wario's Autograph on a Used Napkin",
    "description": "Wario's Autograph on a Used Napkin is a crumpled, grease-stained piece of paper featuring a bold signature made with a Sharpie. Despite the pungent scent of garlic sauce, Wario insists this scrap is 'worth a fortune!' to any true collector.",
    "category": "equipment",
    "price": 1000,
    "icon": "📝",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Celebrity Distraction",
      "Garlic Stench",
      "Fanaticism"
    ],
    "vendor": "wario_land",
    "shippedBy": "Greasy Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Celebrity Distraction",
        "rules": "As an action, you can hold the napkin up to a creature within 30 feet. The target must succeed on a DC 12 Wisdom saving throw or have disadvantage on its next melee attack roll as it pauses to inspect the autograph."
      },
      {
        "title": "Garlic Stench",
        "rules": "While the napkin is on your person, you have disadvantage on Charisma (Persuasion) checks made to sell the item to anyone who is not a fan of Wario due to the overwhelming smell of garlic sauce."
      },
      {
        "title": "Fanaticism",
        "rules": "You have advantage on Charisma (Persuasion) checks made to haggle with individuals who openly express admiration for Wario."
      }
    ],
    "levelRequirementReason": "The item is a common novelty and does not require high-level proficiency to utilize.",
    "vendorReason": "This item originates from Wario's own collection of 'treasures'.",
    "shippingDetail": "The item arrives in a stained envelope that leaves a faint oil residue on your hands upon opening.",
    "usage": {
      "activation": "Action (Distraction) or Passive (Stench/Fanaticism)",
      "duration": "Instantaneous (Distraction) or Permanent (Stench/Fanaticism)",
      "endsWhen": "The napkin is destroyed or the Distraction effect is used once.",
      "charges": "1 use for Distraction"
    },
    "priceReason": "Reduced from 4500 to reflect a common-rarity novelty item rather than a high-value artifact.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-21T22:37:13.841159+00:00",
    "aiReviewedAt": "2026-07-21T22:37:13.841159+00:00",
    "aiReviewVersion": 1
  },
  "a_hat_that_grows_garlic": {
    "id": "a_hat_that_grows_garlic",
    "name": "Wario's Garlic Grower Hat (Gimmick Grow!)",
    "description": "Wario's Garlic Grower Hat is a sturdy, wide-brimmed headpiece crafted by Wario's Farm Folly. It features a peculiar, organic growth of pungent garlic bulbs that sprout directly from the fabric.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎩",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Garlic Harvest",
      "Pungent Aroma",
      "Persistent Itch"
    ],
    "vendor": "wario_land",
    "shippedBy": "Head Harvest Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Harvest",
        "rules": "At dawn, the hat produces one garlic bulb. As an action, you can pull the bulb to use as a culinary ingredient or throw it at a creature within 20 feet. On a hit, the target takes 1d4 bludgeoning damage."
      },
      {
        "title": "Pungent Aroma",
        "rules": "While wearing the hat, you have advantage on saving throws against vampires, but you have disadvantage on Dexterity (Stealth) checks made to hide from creatures that rely on smell."
      },
      {
        "title": "Persistent Itch",
        "rules": "If you do not harvest the daily garlic bulb by the next dawn, the hat becomes irritating; you have disadvantage on Constitution saving throws made to maintain concentration on a spell until the bulb is harvested."
      }
    ],
    "levelRequirementReason": "The original level 5 requirement was removed to allow lower-level players to enjoy the common-rarity utility.",
    "vendorReason": "This item is a signature product of Wario's agricultural line.",
    "shippingDetail": "Shipped in a ventilated crate to prevent the garlic from rotting during transit.",
    "usage": {
      "activation": "Passive (Growth) / Action (Harvest)",
      "duration": "Permanent",
      "endsWhen": "The hat is destroyed or removed from the head",
      "charges": "1 bulb per day"
    },
    "priceReason": "Reduced from 7500 to 1000 to reflect its common rarity and utility-based mechanics.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-21T22:37:36.535928+00:00",
    "aiReviewedAt": "2026-07-21T22:37:36.535928+00:00",
    "aiReviewVersion": 1
  },
  "a_holster_for_guns_garlic": {
    "id": "a_holster_for_guns_garlic",
    "name": "Wario's Wild West Holster",
    "description": "Wario's Wild West Holster is a rugged leather sheath designed specifically for garlic shooters. Hand-stitched by Wario West, the holster features a distinctive, loud creak whenever the wearer moves rapidly.",
    "category": "equipment",
    "price": 1000,
    "icon": "👜",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Quick Draw",
      "Western Grit",
      "Holster Creak"
    ],
    "vendor": "wario_land",
    "shippedBy": "Holster Hustle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Quick Draw",
        "rules": "You have advantage on the first ranged weapon attack roll you make each turn with a garlic shooter."
      },
      {
        "title": "Western Grit",
        "rules": "You gain a +1 bonus to Dexterity (Acrobatics) and Dexterity (Sleight of Hand) checks made while wielding a garlic shooter."
      },
      {
        "title": "Holster Creak",
        "rules": "You have disadvantage on Dexterity (Stealth) checks made while moving at a speed of at least 10 feet."
      }
    ],
    "levelRequirementReason": "This is a minor equipment buff that does not require high-level character progression.",
    "vendorReason": "This item is a signature piece from the Wario West collection.",
    "shippingDetail": "Delivered via express courier with a 'handle with care' sticker to prevent leather cracking.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The holster is destroyed or discarded.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced to a standard uncommon price point for non-magical utility gear.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-21T22:37:55.607026+00:00",
    "aiReviewedAt": "2026-07-21T22:37:55.607026+00:00",
    "aiReviewVersion": 1
  },
  "a_hooded_cloak_for_patrolling": {
    "id": "a_hooded_cloak_for_patrolling",
    "name": "Gondor Ranger's Cloak",
    "description": "This heavy, woven Gondor Ranger's Cloak is crafted by master Gondor Tailors for those tasked with patrolling the wilds of Ithilien. The thick fabric is designed to blend into the natural landscape while providing protection against the elements.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Wilderness Awareness",
      "Shadow Sight",
      "Thorn Snag"
    ],
    "vendor": "kingdom_gondor_outpost",
    "shippedBy": "Ranger Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wilderness Awareness",
        "rules": "While wearing the cloak in forest or hill terrain, you have advantage on Wisdom (Survival) checks made to track creatures or navigate the wilderness."
      },
      {
        "title": "Shadow Sight",
        "rules": "While the hood is up, you can see in dim light as if it were bright light. In darkness, you can see as if it were dim light, but you can tell no other details."
      },
      {
        "title": "Thorn Snag",
        "rules": "Whenever you move through dense brush or thorny terrain, roll a d20; on a 1, the cloak snags, and you take 1 point of piercing damage as the fabric tears."
      }
    ],
    "levelRequirementReason": "Removed the level 5 gate to allow early-game scouts to utilize standard ranger gear.",
    "vendorReason": "This is the standard issue gear for scouts stationed at the kingdom's frontier outposts.",
    "shippingDetail": "Delivered via horseback courier; arrives within 3 days of order placement.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The cloak is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted from 16,500 to 1,000 to reflect an Uncommon utility item rather than a high-tier artifact.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-21T22:38:17.372184+00:00",
    "aiReviewedAt": "2026-07-21T22:38:17.372184+00:00",
    "aiReviewVersion": 1
  },
  "a_horn_that_honks_with": {
    "id": "a_horn_that_honks_with",
    "name": "Wario's  Bike Horn",
    "description": "Wario's Bike Horn is a brass-plated horn that emits a pungent, lingering garlic scent with every blast. Manufactured by Wario Wheels, this loud accessory is designed for high-speed racing and aggressive signaling.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚲",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Garlic Distraction",
      "Pungent Aroma",
      "Racing Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Horn Honk Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Distraction",
        "rules": "As an action, you can blow the horn to emit a deafening honk. One creature of your choice within 30 feet must succeed on a DC 12 Wisdom saving throw or be distracted, losing its next action. You can use this feature a number of times equal to your proficiency bonus, regaining all uses on a long rest."
      },
      {
        "title": "Pungent Aroma",
        "rules": "While the horn is on your person, it constantly emits a garlic odor. Any creature within 5 feet of you has disadvantage on Charisma (Persuasion) checks."
      },
      {
        "title": "Racing Boost",
        "rules": "While mounted on a vehicle or beast, you gain a +10 foot bonus to your movement speed as the horn's aggressive tone motivates the mount."
      }
    ],
    "levelRequirementReason": "The item is common rarity and does not possess high-level magical properties.",
    "vendorReason": "This is a signature product of the Wario Wheels brand found in his domain.",
    "shippingDetail": "Delivered via heavy-duty courier; arrives with a 'Handle with Care' sticker to prevent accidental honking.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The distraction effect ends immediately after the target's turn concludes.",
      "charges": "Limited to Proficiency Bonus per long rest"
    },
    "priceReason": "Reduced from 4100 XP to reflect its common rarity and utility-based mechanics.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-21T22:38:40.175779+00:00",
    "aiReviewedAt": "2026-07-21T22:38:40.175779+00:00",
    "aiReviewVersion": 1
  },
  "a_jagged_piece_of_the": {
    "id": "a_jagged_piece_of_the",
    "name": "Peach's Crown Shard",
    "description": "This Peach's Crown Shard is a jagged, metallic fragment of the late Princess's regalia, salvaged from the palace ruins. The shard hums with a faint, lingering radiance and bears the distinct marks of the Palace Looter's crude handling.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Radiant Strike",
      "Royal Resonance",
      "Cursed Theft"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Relic Relay",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Radiant Strike",
        "rules": "When you hit an undead creature or a Toad rebel with a melee weapon attack made using this shard as an enchantment, you can deal an extra 1d4 radiant damage. This property can be used once per long rest."
      },
      {
        "title": "Royal Resonance",
        "rules": "You have advantage on Wisdom (Perception) and Intelligence (Investigation) checks made to locate hidden heirs or royal secrets within a 60-foot radius, as the shard glows faintly in their presence."
      },
      {
        "title": "Cursed Theft",
        "rules": "While in possession of this shard, you have disadvantage on all Charisma (Persuasion) checks made against loyalists of the former kingdom, who instinctively sense the illicit nature of the stolen crown piece."
      }
    ],
    "levelRequirementReason": "The shard's magical resonance requires a character to be attuned to the weight of royal history.",
    "vendorReason": "Wario's collection includes various looted treasures from the palace ruins.",
    "shippingDetail": "Delivered in a lead-lined box to prevent magical tracking; arrives within 3 days.",
    "usage": {
      "activation": "Passive (Resonance/Curse) or Action (Strike)",
      "duration": "Permanent",
      "endsWhen": "The shard shatters permanently after 3 uses of the Radiant Strike effect.",
      "charges": "1 per long rest (Radiant Strike)"
    },
    "priceReason": "Adjusted from 4800 to reflect a common-rarity loot item that is functionally limited.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-21T22:39:03.501950+00:00",
    "aiReviewedAt": "2026-07-21T22:39:03.501950+00:00",
    "aiReviewVersion": 1
  },
  "a_key_forged_in_the": {
    "id": "a_key_forged_in_the",
    "name": "Ricco Harbor Key",
    "description": "The Ricco Harbor Key is a heavy iron key forged in the ink-jammed ruins of Ricco Harbor. It carries the distinct scent of stale tea and regret, and the faint, lingering presence of Admiral Bloopers.",
    "price": 1000,
    "icon": "🗝",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Secret Access",
      "Summon Ink-Splattered Goblins"
    ],
    "vendor": "dreamland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Secret Access",
        "rules": "As an action, you can use the key to unlock the secret door behind the ink-stained wall or grant entry to the Koopa Navy’s hidden storage. This effect lasts for 10 minutes or until the door is closed/locked."
      },
      {
        "title": "Summon Ink-Splattered Goblins",
        "rules": "As an action, you can hold the key aloft to summon 1d4 ink-splattered goblins in an area within 30 feet. The goblins appear in unoccupied spaces and act as friendly minions for 1 minute before vanishing. You can use this property once per long rest."
      }
    ],
    "levelRequirementReason": "The key's ability to command hostile entities requires a basic understanding of magical influence.",
    "vendorReason": "The dreamland vendor specializes in artifacts recovered from ruined coastal regions.",
    "shippingDetail": "Delivered via spirit path; may arrive with a slight chill and a lingering sense of melancholy.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes or 1 minute",
      "endsWhen": "The door is closed, the duration expires, or the daily summon limit is reached",
      "charges": "1 summon per long rest"
    },
    "priceReason": "Adjusted to reflect the utility of both permanent access and a limited summoning ability.",
    "priceOriginal": 700,
    "priceReviewedAt": "2026-07-21T22:39:24.406242+00:00",
    "aiReviewedAt": "2026-07-21T22:39:24.406242+00:00",
    "aiReviewVersion": 1
  },
  "a_lightweight_cape_woven_from": {
    "id": "a_lightweight_cape_woven_from",
    "name": "Tropical Breeze Cape",
    "description": "The Tropical Breeze Cape is a lightweight garment woven from the literal breath of the island’s coastal winds. This airy fabric allows the wearer to catch updrafts, making it a favorite for aerial maneuvers in the Isle Delfino region.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Guided Glide",
      "Wind-Swept Evasion",
      "Soft Landing"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Guided Glide",
        "rules": "As a bonus action, you can manifest a localized updraft to glide. You gain a flying speed of 30 feet for 1 minute. This movement does not provoke opportunity attacks. You can use this ability a number of times equal to your Proficiency Bonus, regaining all uses after a Long Rest."
      },
      {
        "title": "Wind-Swept Evasion",
        "rules": "While you are flying or falling, you gain a +2 bonus to your AC as the cape's fabric deflects incoming strikes."
      },
      {
        "title": "Soft Landing",
        "rules": "While falling, the cape slows your descent, reducing all falling damage by 50% (minimum of 1 damage). This effect is passive and always active."
      }
    ],
    "levelRequirementReason": "The cape's mastery over island winds requires a character with significant experience in high-mobility tactics.",
    "vendorReason": "The vendor is the primary source for enchanted tropical gear on the island.",
    "shippingDetail": "The cape is shipped in a pressurized tube to maintain its airy texture during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or the wearer uses the ability again.",
      "charges": "Proficiency Bonus per Long Rest"
    },
    "priceReason": "The price reflects its rare status and the utility of flight and evasion in mid-to-high level play.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T22:39:46.728772+00:00",
    "aiReviewedAt": "2026-07-21T22:39:46.728772+00:00",
    "aiReviewVersion": 1
  },
  "a_long_fork_for_roasting": {
    "id": "a_long_fork_for_roasting",
    "name": "Wario's Wiener Roast Fork",
    "description": "Wario's Wiener Roast Fork is a massive, heavy-duty roasting tool crafted by Wario BBQ. This oversized metal fork features a distinctive 🍡 icon etched into the handle and is perpetually coated in a slick, savory grease.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍡",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Masterful Roasting",
      "Extended Reach Poke",
      "Greasy Grip"
    ],
    "vendor": "wario_land",
    "shippedBy": "Roast Roll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Masterful Roasting",
        "rules": "While using this fork to cook meat over an open flame, you have advantage on any ability checks made to determine the quality or flavor of the meal."
      },
      {
        "title": "Extended Reach Poke",
        "rules": "When you use the fork to poke a creature, your reach increases by 5 feet. On a successful hit, the target takes 1d4 piercing damage."
      },
      {
        "title": "Greasy Grip",
        "rules": "Because of the lingering grease, you have disadvantage on all Strength (Athletics) checks made to maintain your grip on the fork or any object held by it."
      }
    ],
    "levelRequirementReason": "The item is common equipment and does not require specific character progression to wield.",
    "vendorReason": "This is a signature tool from Wario's own BBQ establishment.",
    "shippingDetail": "Delivered in a grease-proof tube to ensure the fork arrives ready for the grill.",
    "usage": {
      "activation": "Action (Poke) or Passive (Roasting)",
      "duration": "Instantaneous (Poke) or Indefinite (Roasting)",
      "endsWhen": "The poke effect ends once the target is hit; roasting ends when the fire is extinguished.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4800 to 1000 to reflect its common rarity while maintaining its utility.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-21T22:40:09.018842+00:00",
    "aiReviewedAt": "2026-07-21T22:40:09.018842+00:00",
    "aiReviewVersion": 1
  },
  "a_lucky_bone_for_wishes": {
    "id": "a_lucky_bone_for_wishes",
    "name": "Wario's Wishbone",
    "description": "Wario's Wishbone is a calcified, oversized bone marked with crude carvings, purportedly blessed by the artisan Wario Wishes. This poultry-shaped trinket hums with a faint, greedy energy and is often seen displayed in the Wario Land markets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍗",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Lucky Snap",
      "Greedy Favor",
      "Fractured Misfortune"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bone Break",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lucky Snap",
        "rules": "When you make an attack roll, ability check, or saving throw, you can use a bonus action to snap the bone. You gain a +1 bonus to that specific roll. This can be used a number of times equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Greedy Favor",
        "rules": "While holding the bone, you have advantage on Charisma (Persuasion) checks made to solicit gold, loot, or other treasures from NPCs."
      },
      {
        "title": "Fractured Misfortune",
        "rules": "If you fail a Charisma check to steal or trick a creature while holding the bone, the bone cracks. You suffer disadvantage on all ability checks until you spend 1 hour performing a ritual of mending or 'polishing' the bone."
      }
    ],
    "levelRequirementReason": "The item is common rarity and does not require high-level magic to interact with.",
    "vendorReason": "The vendor specializes in Wario-themed goods and local curiosities.",
    "shippingDetail": "Shipped in a sturdy crate to prevent the bone from snapping prematurely during transit.",
    "usage": {
      "activation": "Bonus Action (Lucky Snap) or Passive (Greedy Favor)",
      "duration": "Instantaneous (Lucky Snap) or Constant (Greedy Favor)",
      "endsWhen": "The Lucky Snap effect ends after one roll; Fractured Misfortune ends after 1 hour of polishing.",
      "charges": "Proficiency Bonus per long rest"
    },
    "priceReason": "Reduced from 4300 to reflect common rarity and the limited uses of the lucky bonus.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-21T22:40:32.771132+00:00",
    "aiReviewedAt": "2026-07-21T22:40:32.771132+00:00",
    "aiReviewVersion": 1
  },
  "a_meter_that_measures_your": {
    "id": "a_meter_that_measures_your",
    "name": "Wario's Luck-o-Meter",
    "description": "Wario's Luck-o-Meter is a bulky, vibrating brass gauge manufactured in Wario's Luck Lab. This erratic device features a spinning needle that purportedly tracks your fortune, though its 'boosts' are often as chaotic as the man who built it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎰",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Fortunate Reading",
      "Gambler's Vibration",
      "Fraudulent Breakdown"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lucky Lotto Load",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fortunate Reading",
        "rules": "When you make an ability check, you can use an action to consult the meter. Roll a d20; on a 15 or higher, you gain one Inspiration die. On a 5 or lower, you may reroll the failed check once."
      },
      {
        "title": "Gambler's Vibration",
        "rules": "While holding the meter, you gain a +1 bonus to any roll made to gamble or search for hidden loot. This effect is passive and constant while the item is held."
      },
      {
        "title": "Fraudulent Breakdown",
        "rules": "The meter provides false readings after 3 uses of the Fortunate Reading ability. Once 3 uses are reached, the item becomes non-functional and is destroyed as the internal gears seize up."
      }
    ],
    "levelRequirementReason": "The item's luck-altering properties are tuned for characters with enough experience to navigate high-stakes environments.",
    "vendorReason": "Wario's Luck Lab is the primary source for these dubious, high-energy gambling trinkets.",
    "shippingDetail": "Delivered in a padded crate to prevent the meter from vibrating off the delivery wagon.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The item is destroyed after 3 uses of the Fortunate Reading ability.",
      "charges": "3 uses"
    },
    "priceReason": "Reduced from 11,000 XP to reflect an uncommon item with a limited, self-destructing lifespan.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-21T22:40:56.074530+00:00",
    "aiReviewedAt": "2026-07-21T22:40:56.074530+00:00",
    "aiReviewVersion": 1
  },
  "a_mutated_core_from_the": {
    "id": "a_mutated_core_from_the",
    "name": "Fire Flower Core",
    "description": "This Fire Flower Core is a pulsating, mutated organic mass harvested from Raventree Manor’s Shadowfell Mutation Lab. It emits a low heat and must be kept in a sealed crystal vial to prevent it from detonating upon contact with water.",
    "price": 5000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Explosive Critical",
      "Initial Flare",
      "Mutant Physiology"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Explosive Critical",
        "rules": "When you score a critical hit with a weapon infused with this core, the target and all creatures within 5 feet of it take an additional 2d6 fire damage."
      },
      {
        "title": "Initial Flare",
        "rules": "The first time you hit a creature with an infused weapon during a combat encounter, the target takes an additional 3d6 fire damage."
      },
      {
        "title": "Mutant Physiology",
        "rules": "While the core is active, you gain a +1d4 bonus to melee damage rolls and 10% fire resistance, but your stamina regeneration is reduced by 10% until you finish a long rest."
      }
    ],
    "levelRequirementReason": "The volatile nature of Shadowfell mutations requires a high level of magical fortitude to stabilize.",
    "vendorReason": "The Middle Earth vendor specializes in exotic and mutated flora from restricted regions.",
    "shippingDetail": "Must be transported in a temperature-controlled, waterproof containment unit to prevent premature detonation.",
    "usage": {
      "activation": "Passive (while infused in a weapon)",
      "duration": "1 hour per long rest",
      "endsWhen": "The core is removed from the weapon or the 1-hour duration expires",
      "charges": "1 charge per long rest"
    },
    "priceReason": "Adjusted from 12,000 to 5,000 to reflect a balanced Epic rarity price point for a single-use enhancement.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-21T22:41:18.502267+00:00",
    "aiReviewedAt": "2026-07-21T22:41:18.502267+00:00",
    "aiReviewVersion": 1
  },
  "a_pan_that_stirs_itself": {
    "id": "a_pan_that_stirs_itself",
    "name": "Mages' Guild Spellbound Saucepan",
    "description": "The Mages' Guild Spellbound Saucepan is a heavy cast-iron vessel featuring a perpetually moving magical spoon. Crafted by the Mages' Guild Kitchen Enchanters, it hums with a faint arcane resonance while cooking.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍳",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Automated Stirring",
      "Culinary Prestidigitation",
      "Sentient Guidance"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Automated Stirring",
        "rules": "While the pan is over a heat source and contains liquid or semi-solid food, you have advantage on all Wisdom (Survival) or Intelligence (Investigation) checks made to cook the meal. Additionally, the pan functions as a free object for the purpose of somatic components while held."
      },
      {
        "title": "Culinary Prestidigitation",
        "rules": "When you finish cooking a meal, roll a d6. On a 1-3, the food changes color; on a 4-5, the flavor becomes slightly spicy or sweet; on a 6, the temperature fluctuates by 20 degrees. This effect is instantaneous and occurs once per meal prepared."
      },
      {
        "title": "Sentient Guidance",
        "rules": "The pan provides constant unsolicited advice. If you choose to ignore the pan's verbal suggestions during a cooking check, you instead have disadvantage on that check. You may choose to heed its advice to negate this disadvantage."
      }
    ],
    "levelRequirementReason": "The item's effects are utility-based and do not provide combat power that scales with high-level progression.",
    "vendorReason": "The Mages' Guild Kitchen Enchanters are the primary manufacturers of this enchanted cookware.",
    "shippingDetail": "Delivered via a shimmering portal; the pan may arrive slightly warm to the touch.",
    "usage": {
      "activation": "Passive (while cooking)",
      "duration": "Permanent",
      "endsWhen": "The pan is destroyed or the magic is dispelled by a Dispel Magic spell.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 19,500 to reflect a balanced utility item that provides flavor rather than significant combat advantages.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-21T22:41:43.124401+00:00",
    "aiReviewedAt": "2026-07-21T22:41:43.124401+00:00",
    "aiReviewVersion": 1
  },
  "a_parasol_for_floating_and_1": {
    "id": "a_parasol_for_floating_and_1",
    "name": "Peach's Parasol",
    "description": "Peach's Parasol is a sturdy, silk-canopied parasol designed for graceful aerial maneuvers and defense. This rare accessory from the Toad Town Market features a reinforced frame capable of catching the wind to slow a descent.",
    "category": "equipment",
    "price": 1000,
    "icon": "☂️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Slow Fall",
      "Shielding",
      "Horizontal Glide"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parasol Case",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Slow Fall",
        "rules": "While the parasol is open, your falling speed is reduced to 10 feet per round. This effect is active as long as you are falling and the parasol remains deployed."
      },
      {
        "title": "Shielding",
        "rules": "While the parasol is open and held in one hand, you gain a +1 bonus to your Armor Class as it deflects incoming projectiles and strikes."
      },
      {
        "title": "Horizontal Glide",
        "rules": "As a bonus action, you can use the parasol to glide horizontally for a distance of 20 feet. This movement does not provoke opportunity attacks, but you cannot move at your full walking speed while gliding."
      }
    ],
    "levelRequirementReason": "The item's utility for aerial mobility and defense is balanced for mid-level play.",
    "vendorReason": "The local market specializes in whimsical travel gear and outdoor accessories.",
    "shippingDetail": "The item arrives in a specialized rigid case to prevent the silk from creasing during transit.",
    "usage": {
      "activation": "Passive (Slow Fall/Shielding), Bonus Action (Glide)",
      "duration": "Continuous while open",
      "endsWhen": "The parasol is closed or dropped",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 20,000 XP to reflect a standard rare equipment price for a non-magical utility item.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-21T22:42:04.776282+00:00",
    "aiReviewedAt": "2026-07-21T22:42:04.776282+00:00",
    "aiReviewVersion": 1
  },
  "a_partially_burned_scroll_from": {
    "id": "a_partially_burned_scroll_from",
    "name": "Kamek's Scorched Spell Scroll",
    "description": "Kamek's Scorched Spell Scroll is a charred piece of parchment salvaged from the personal war spellbook of the Royal Magikoopa Kamek. The singed edges and erratic ink strokes betray its volatile nature, still radiating a faint, lingering magical heat.",
    "category": "equipment",
    "price": 8600,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Erratic Polymorph",
      "Kamek's Signature"
    ],
    "vendor": "wario_land",
    "shippedBy": "Arcane Archives",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Erratic Polymorph",
        "rules": "As an action, you may read the scroll to cast Polymorph on a creature you can see within 60 feet. The target must succeed on a DC 15 Wisdom saving throw or be transformed into a random non-magical object for 1 hour. If the target succeeds, the scroll crumbles into ash and is destroyed. There is a 30% chance that the spell targets you instead of the intended victim."
      },
      {
        "title": "Kamek's Signature",
        "rules": "While holding this scroll, you have advantage on Intelligence (Arcana) checks made to identify magic or recognize the specific magical style of the Royal Magikoopa."
      }
    ],
    "levelRequirementReason": "The complexity of the scroll's high-level transmutation magic requires a wizard of significant experience.",
    "vendorReason": "This vendor specializes in items recovered from various magical skirmishes and territories.",
    "shippingDetail": "The scroll is shipped in a lead-lined tube to prevent the lingering heat from igniting nearby materials.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The scroll crumbles and is destroyed after one use.",
      "charges": "1 use"
    },
    "priceReason": "The price reflects the rarity of a high-level spell scroll from a known magical antagonist.",
    "priceOriginal": 8600,
    "priceReviewedAt": "2026-07-21T22:42:26.025556+00:00",
    "aiReviewedAt": "2026-07-21T22:42:26.025556+00:00",
    "aiReviewVersion": 1
  },
  "a_pendant_that_pulses_with": {
    "id": "a_pendant_that_pulses_with",
    "name": "Necrotic Heart Pendant",
    "description": "The Necrotic Heart Pendant is a heavy, obsidian-like locket that pulses with a rhythmic, cold heartbeat. Forged in the shadows of the Fractured Atrium, it carries the weight of forgotten memories and glows with a sickly violet light that dims when the wearer takes damage.",
    "category": "equipment",
    "price": 2800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Siphon Life",
      "Spirit Communion",
      "Vengeful Pulse"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Siphon Life",
        "rules": "While an undead creature is within 30 feet of you, you have a 10% chance at the start of each of your turns to regain hit points equal to 10% of your maximum hit points."
      },
      {
        "title": "Spirit Communion",
        "rules": "As an action, you can attempt to communicate with one undead entity within 60 feet. The entity can speak for up to 3 seconds before the connection severs. You can use this property once per long rest."
      },
      {
        "title": "Vengeful Pulse",
        "rules": "When you take damage from an enemy, the pendant pulses, granting you a +2 bonus to necrotic damage rolls for 1 minute. This effect ends if you are healed or if the duration expires."
      }
    ],
    "levelRequirementReason": "The pendant's necrotic resonance requires a character of at least 5th level to handle without being overwhelmed by the weight of the dead.",
    "vendorReason": "The Fractured Atrium is a primary source for artifacts steeped in necrotic energy and forgotten memories.",
    "shippingDetail": "The item arrives encased in lead-lined silk to prevent the pulse from disrupting nearby electronics.",
    "usage": {
      "activation": "Passive / Action",
      "duration": "Variable / 1 minute",
      "endsWhen": "Ends when the target is out of range, the wearer is healed, or the long rest expires.",
      "charges": "1 per long rest for Spirit Communion"
    },
    "priceReason": "The price reflects its rarity and the significant utility provided by the Siphon Life and Vengeful Pulse mechanics.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-21T22:42:50.339718+00:00",
    "aiReviewedAt": "2026-07-21T22:42:50.339718+00:00",
    "aiReviewVersion": 1
  },
  "a_piece_of_bowser_s": {
    "id": "a_piece_of_bowser_s",
    "name": "Bowser's Shell Fragment Shield (Chipped)",
    "description": "This Bowser's Shell Fragment Shield is a jagged, heavy piece of carapace recovered from the ruins of Toad Town. Salvaged by Wario Land Battlefield Salvage, the shell still radiates a faint, pulsing heat from the King of Koopas's lingering fury.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Residual Bowser Magic",
      "Koopa Recognition",
      "Burning Rage Aura"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Residual Bowser Magic",
        "rules": "While wielding this shield, you gain a +1 bonus to AC against any damage from fire-based attacks or spells."
      },
      {
        "title": "Koopa Recognition",
        "rules": "You have advantage on Charisma (Persuasion) checks made to interact with Koopa Troop defectors or neutral Koopas."
      },
      {
        "title": "Burning Rage Aura",
        "rules": "You have advantage on Charisma (Intimidation) checks, but you have disadvantage on Charisma (Persuasion) checks as the shell's heat reflects Bowser's aggressive temperament."
      }
    ],
    "levelRequirementReason": "The item is a basic piece of equipment and does not require high-level proficiency.",
    "vendorReason": "Wario Land Battlefield Salvage specializes in recovering debris from high-conflict zones.",
    "shippingDetail": "Due to its immense weight and jagged edges, this item requires reinforced crates and takes 2 days longer to deliver.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The shield is destroyed or dropped",
      "charges": "Unlimited"
    },
    "priceReason": "Adjusted from 5200 to 1000 to reflect an uncommon shield with minor social and defensive buffs.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-21T22:43:33.530900+00:00",
    "aiReviewedAt": "2026-07-21T22:43:33.530900+00:00",
    "aiReviewVersion": 1
  },
  "a_pink_brick_from_the": {
    "id": "a_pink_brick_from_the",
    "name": "Peach's Castle Brick",
    "description": "This Peach's Castle Brick is a heavy, pink masonry block stamped with the royal crest. Manufactured by Castle Architecture during the Pre-War Era, it serves as a sturdy piece of the kingdom's history.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Bludgeoning Projectile",
      "Royal Nostalgia",
      "Heavy and Awkward"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rubble Runners",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bludgeoning Projectile",
        "rules": "As an action, you can throw the brick at a target within 20 feet. Make a ranged weapon attack; on a hit, the target takes 1d6 bludgeoning damage."
      },
      {
        "title": "Royal Nostalgia",
        "rules": "You have advantage on Wisdom (History) checks made to recall information regarding the kingdom's architecture, lineage, or royal history."
      },
      {
        "title": "Heavy and Awkward",
        "rules": "Because of its size and weight, you have disadvantage on attack rolls made with the brick if you are using a ranged attack maneuver or trying to throw it beyond 20 feet."
      }
    ],
    "levelRequirementReason": "The brick is a common architectural relic and does not require high-level proficiency to wield.",
    "vendorReason": "Wario's shop often stocks salvaged debris and architectural scraps from the surrounding lands.",
    "shippingDetail": "Shipped in a reinforced crate to prevent cracking; standard delivery time applies.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The brick hits a target or misses and falls to the ground.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 3900 to reflect its status as a common architectural relic rather than a high-tier artifact.",
    "priceOriginal": 3900,
    "priceReviewedAt": "2026-07-21T22:43:54.979650+00:00",
    "aiReviewedAt": "2026-07-21T22:43:54.979650+00:00",
    "aiReviewVersion": 1
  },
  "a_pistol_that_shoots_garlic": {
    "id": "a_pistol_that_shoots_garlic",
    "name": "Wario's Garlic Gun",
    "description": "Wario's Garlic Gun is a bulky, oversized pistol forged in Wario's Weapon Workshop to repel the undead. It fires heavy, pungent garlic cloves that leave a lingering, revolting odor on the user.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔫",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Garlic Shot",
      "Stench of the Workshop",
      "Limited Ammunition"
    ],
    "vendor": "wario_land",
    "shippedBy": "Garlic Grenade Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Shot",
        "rules": "As an action, you fire a clove at a target within 60 feet. Make a ranged weapon attack (20/60 ft). On a hit, the target takes 1d6 piercing damage. If the target is an undead creature, it has disadvantage on the attack roll. Additionally, the target must succeed on a DC 12 Constitution saving throw or be Poisoned for 1 minute. A creature can repeat the saving throw at the end of each of its turns."
      },
      {
        "title": "Stench of the Workshop",
        "rules": "The gun emits a permanent, overwhelming odor. You have disadvantage on all Charisma (Persuasion) checks made to interact with NPCs who are within 10 feet of you."
      },
      {
        "title": "Limited Ammunition",
        "rules": "The pistol holds 10 shots. You can reload the gun as a bonus action by consuming one garlic bulb, restoring 1 shot."
      }
    ],
    "levelRequirementReason": "The item is balanced for early-game use with a low damage die and specific target types.",
    "vendorReason": "This item is a signature piece from Wario's own workshop.",
    "shippingDetail": "Delivered in a reinforced, airtight crate to prevent the stench from leaking into other shipments.",
    "usage": {
      "activation": "Action to fire; Bonus Action to reload",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target succeeds on a saving throw or the 10 shots are exhausted.",
      "charges": "10 shots per reload"
    },
    "priceReason": "Reduced from 11,000 to 1,000 to align with standard uncommon equipment costs for a single-use weapon type.",
    "priceOriginal": 11000,
    "priceReviewedAt": "2026-07-21T22:44:21.502938+00:00",
    "aiReviewedAt": "2026-07-21T22:44:21.502938+00:00",
    "aiReviewVersion": 1
  },
  "a_poorly_stitched_doll_that_1": {
    "id": "a_poorly_stitched_doll_that_1",
    "name": "Bootleg Waluigi Doll",
    "description": "This Bootleg Waluigi Doll is a poorly stitched plushie featuring disproportionately lanky arms. Produced by the Shady Mushroom Kingdom Toy Factory, its crude craftsmanship gives it a haunting, off-model appearance.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎎",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Distracting Throw",
      "Purist's Intimidation",
      "Tangled Limbs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Questionable Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distracting Throw",
        "rules": "As an action, you can throw the doll at a creature within 20 feet. The target must succeed on a DC 12 Wisdom saving throw or become distracted by a minor illusion of Waluigi's laughter, granting the next attack against it advantage. This effect lasts until the end of the target's next turn. This property can be used 3 times per long rest."
      },
      {
        "title": "Purist's Intimidation",
        "rules": "You have advantage on Charisma (Intimidation) checks made against any creature who identifies as a fan of the Mario franchise, as they find the doll's cursed appearance unsettling."
      },
      {
        "title": "Tangled Limbs",
        "rules": "Because the doll's arms tangle easily, you have disadvantage on Dexterity (Sleight of Hand) checks made to repair the doll or hide it in a small container."
      }
    ],
    "levelRequirementReason": "The item is a low-level novelty and does not require high-level proficiency to utilize.",
    "vendorReason": "Wario's land is the primary source for bootleg and off-brand merchandise.",
    "shippingDetail": "The package arrives with a warning label regarding potential 'unforeseen' movements.",
    "usage": {
      "activation": "Action",
      "duration": "1 round",
      "endsWhen": "The target finishes its next turn or the doll is recovered.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "Adjusted to a standard uncommon price point for a utility novelty item.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-21T22:44:47.999980+00:00",
    "aiReviewedAt": "2026-07-21T22:44:47.999980+00:00",
    "aiReviewVersion": 1
  },
  "a_poster_with_your_face": {
    "id": "a_poster_with_your_face",
    "name": "Wario's Wild West Wanted Poster",
    "description": "This weathered paper scroll features a crude, hand-drawn portrait of your likeness—or perhaps Wario's—set against a dusty frontier backdrop. Hand-crafted by Wario West, the poster smells of old parchment and gunpowder.",
    "category": "equipment",
    "price": 1000,
    "icon": "📜",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Bounty Intimidation",
      "Outlaw Deception",
      "Weathered Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wanted Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bounty Intimidation",
        "rules": "While holding this poster, you have advantage on Charisma (Intimidation) checks made specifically to demand rewards or bounties from NPCs."
      },
      {
        "title": "Outlaw Deception",
        "rules": "You gain a +1 bonus to Charisma (Deception) checks made against outlaws or bandits in western-themed environments."
      },
      {
        "title": "Weathered Disadvantage",
        "rules": "Because the poster is aged and tattered, you have disadvantage on Charisma (Persuasion) checks made against civilized city guards or high-society NPCs."
      }
    ],
    "levelRequirementReason": "The item is a common piece of equipment that does not require specific class features or high-level stats to use.",
    "vendorReason": "Wario West's territory is the primary source for these specific frontier-themed items.",
    "shippingDetail": "Delivered by a rickety wagon; takes 2 days to arrive and may arrive slightly dusty.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The poster is destroyed, burned, or lost.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4100 to reflect a common rarity item with minor utility rather than game-breaking power.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-21T22:45:10.799235+00:00",
    "aiReviewedAt": "2026-07-21T22:45:10.799235+00:00",
    "aiReviewVersion": 1
  },
  "a_potent_grenade_that_explodes_1": {
    "id": "a_potent_grenade_that_explodes_1",
    "name": "Wario's Garlic Grenade",
    "description": "Wario's Garlic Grenade is a crude, spherical projectile packed with an overwhelming amount of pungent, concentrated garlic. Wario swears by its ability to clear out pests and rivals with its suffocating stench.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧄",
    "stock": 30,
    "rarity": "common",
    "effects": [
      "Pungent Cloud",
      "Nauseating Stench"
    ],
    "vendor": "Wario Land",
    "shippedBy": "Greasy Paper Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pungent Cloud",
        "rules": "As an action, you throw the grenade at a point within 30 feet. It explodes, creating a 10-foot-radius sphere of garlic gas centered on the impact point. The area is heavily obscured by the mist for 1 minute."
      },
      {
        "title": "Nauseating Stench",
        "rules": "Each creature in the area must succeed on a DC 13 Constitution saving throw or become Poisoned for 1 minute. A creature can repeat the saving throw at the end of each of its turns, ending the effect on a success. Vampires and creatures with the Keen Smell trait have disadvantage on this saving throw."
      }
    ],
    "levelRequirementReason": "This is a common consumable suitable for low-level adventuring.",
    "vendorReason": "The vendor is the primary source for Wario's signature items.",
    "shippingDetail": "The item arrives wrapped in oil-stained paper to contain the lingering odor.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the duration expires or the area is dispelled by a magical effect.",
      "charges": "Single Use (Destroyed on use)"
    },
    "priceReason": "Adjusted to reflect the high-impact area control and status affliction for a common item.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-21T22:45:33.806803+00:00",
    "aiReviewedAt": "2026-07-21T22:45:33.806803+00:00",
    "aiReviewVersion": 1
  },
  "a_potion_that_is_definitely": {
    "id": "a_potion_that_is_definitely",
    "name": "Wario's 'Definitely Magic' Potion",
    "description": "Wario's 'Definitely Magic' Potion is a murky liquid contained in a cheap glass bottle adorned with a '100% Satisfaction Guarantee' sticker featuring Wario's winking face. Crafted by Wario Land Alchemy, this concoction smells strongly of garlic and carries a reputation for being only 'maybe' magical.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Unreliable Alchemy",
      "Questionable Side Effects",
      "Fragile Packaging"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Bottle Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unreliable Alchemy",
        "rules": "As an action, you drink the potion. Roll a d6. On a 1-3, the potion is merely garlic water and has no effect. On a 4-5, you gain 1d10 temporary hit points for 1 hour. On a 6, you gain a +2 bonus to Strength checks and Strength saving throws for 1 hour."
      },
      {
        "title": "Questionable Side Effects",
        "rules": "Immediately after drinking the potion, you must succeed on a DC 13 Constitution saving throw. On a failed save, you are Poisoned for 1 minute. The duration is reduced to 1 round if you succeed on your first saving throw."
      },
      {
        "title": "Fragile Packaging",
        "rules": "While the bottle is in your inventory, there is a 20% chance it breaks during a period of heavy movement or a fall. If it breaks, the potion is lost and everything within 5 feet of the bottle is coated in a pungent garlic odor, giving any creature that enters the area a -2 penalty to Stealth checks for 1 hour."
      }
    ],
    "levelRequirementReason": "The item is a consumable potion and does not require high-level proficiency to use.",
    "vendorReason": "The item is produced by Wario Land Alchemy and sold directly by the source.",
    "shippingDetail": "The courier handles the bottle with extreme care to prevent the 'Fragile Packaging' effect from triggering during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The effect ends when the duration expires or the user finishes a Long Rest.",
      "charges": "Single use; the potion is consumed upon drinking."
    },
    "priceReason": "The price was reduced from 18,500 to reflect an uncommon consumable with high variance and potential negative outcomes.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-21T22:46:04.071783+00:00",
    "aiReviewedAt": "2026-07-21T22:46:04.071783+00:00",
    "aiReviewVersion": 1
  },
  "a_power_up_that_fell": {
    "id": "a_power_up_that_fell",
    "name": "Wario's 'Acquired' Mario Power-Up",
    "description": "Wario's 'Acquired' Mario Power-Up is a yellow-painted flower with visible red streaks, purportedly 'found' by Wario in the back of a truck. This modified botanical curiosity pulses with a stolen, stolen heat.",
    "category": "premium",
    "price": 2450,
    "icon": "⭐",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Modified Fire Breath",
      "Identity Crisis",
      "Legal Retribution"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Modified Fire Breath",
        "rules": "As an action, you can cast Burning Hands (DC 13). This ability can be used once per long rest."
      },
      {
        "title": "Identity Crisis",
        "rules": "After using the Modified Fire Breath, you must succeed on a DC 10 Wisdom saving throw. On a failure, you suffer disadvantage on Charisma checks and must speak in a high-pitched voice, exclaiming 'Mama mia!' at least once every hour for 1 hour."
      },
      {
        "title": "Legal Retribution",
        "rules": "Each time the Modified Fire Breath is used, roll a d20. On a 1, a celestial attorney appears within 60 feet to demand the item; the DM determines the severity of the annoyance, which can include being unable to use the item for 1d4 hours."
      }
    ],
    "levelRequirementReason": "The item's power and potential for legal complications require a character with enough experience to handle the chaos.",
    "vendorReason": "Wario is the primary source of 'found' goods in this region.",
    "shippingDetail": "The item arrives in a dented crate with 'Fragile' stickers that have been crossed out.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends after the fire is cast or the 1-hour identity crisis expires.",
      "charges": "1 charge per long rest"
    },
    "priceReason": "The price was adjusted to reflect a rare utility item while remaining accessible for mid-level play.",
    "priceOriginal": 24500,
    "priceReviewedAt": "2026-07-21T22:46:29.618492+00:00",
    "aiReviewedAt": "2026-07-21T22:46:29.618492+00:00",
    "aiReviewVersion": 1
  },
  "a_printing_press_to_spread": {
    "id": "a_printing_press_to_spread",
    "name": "The 'Free Croak' Press",
    "description": "The 'Free Croak' Press is a heavy, iron-framed printing press used to broadcast the message of liberation. Originally sourced from the rogueport black market, this mechanical device produces high-quality broadsides and pamphlets.",
    "category": "faction",
    "price": 1000,
    "icon": "📰",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Recruitment",
      "Boosted Loyalty"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "loyalty": 15,
      "diplomacy": 5
    },
    "effectDetails": [
      {
        "title": "Enhanced Recruitment",
        "rules": "While the press is active in a settlement, you gain a +2 bonus to Charisma (Persuasion) checks made to recruit new members to your faction. This effect is active as long as the press is being operated."
      },
      {
        "title": "Boosted Loyalty",
        "rules": "Each time you use the press to distribute propaganda, your faction's Loyalty score increases by 15. This bonus is applied once per week and does not stack with itself."
      }
    ],
    "levelRequirement": 1,
    "levelRequirementReason": "The item is an uncommon utility tool suitable for any starting faction.",
    "vendorReason": "The black market is the primary hub for underground printing equipment and subversive materials.",
    "shippedBy": "Smuggler's Crate",
    "shippingDetail": "The press arrives in a heavy, unmarked crate and requires a wagon for transport.",
    "usage": {
      "activation": "Action",
      "duration": "1 week",
      "endsWhen": "The press is dismantled, destroyed, or moved to a new location",
      "charges": "Unlimited"
    },
    "priceReason": "The price was reduced from 40,000 to 1,000 XP to reflect its status as an uncommon faction utility rather than a legendary artifact.",
    "priceOriginal": 40000,
    "priceReviewedAt": "2026-07-21T22:46:50.426469+00:00",
    "aiReviewedAt": "2026-07-21T22:46:50.426469+00:00",
    "aiReviewVersion": 1
  },
  "a_pulsing_molten_core_encased_1": {
    "id": "a_pulsing_molten_core_encased_1",
    "name": "Forgeheart Core",
    "description": "The Forgeheart Core is a pulsing molten core encased in a heavy iron plate, salvaged from the remains of a defunct industrial giant. It radiates a constant, rhythmic heat that vibrates against the wielder's chest.",
    "category": "equipment",
    "price": 3800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stamina Regeneration",
      "Heat Resistance",
      "Construct Sundering"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Stamina Regeneration",
        "rules": "While the core is active, the wielder regains 2 points of stamina at the start of each of their turns. This effect does not function if the wielder is unconscious."
      },
      {
        "title": "Heat Resistance",
        "rules": "The wielder gains a +20% reduction to all fire damage taken from environmental sources or industrial machinery."
      },
      {
        "title": "Construct Sundering",
        "rules": "The wielder deals an additional 1d6 fire damage to iron constructs on a successful melee weapon attack."
      }
    ],
    "levelRequirementReason": "The core's intense heat and weight require a character of at least level 6 to safely withstand the physical strain.",
    "vendorReason": "The Midlands region is the primary hub for industrial salvage and heavy machinery.",
    "shippingDetail": "The core is packed in enchanted lead to prevent spectral interference and requires 48 hours for delivery.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent while equipped",
      "endsWhen": "The item is unequipped or the iron casing is shattered",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare status as a unique industrial relic with multiple combat and utility benefits.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-21T22:47:11.858149+00:00",
    "aiReviewedAt": "2026-07-21T22:47:11.858149+00:00",
    "aiReviewVersion": 1
  },
  "a_rare_fungus_radiating_powerful_1": {
    "id": "a_rare_fungus_radiating_powerful_1",
    "name": "Golden Mushroom",
    "description": "This Golden Mushroom is a bioluminescent fungus harvested from the Whispering Caves beneath the Regal Throne. It radiates a warm, regal glow and pulses with the essence of fallen monarchs.",
    "price": 1200,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regal Restoration",
      "Psychic Shielding",
      "Onyx Hand Beacon"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Regal Restoration",
        "rules": "When a creature consumes this mushroom as an action, it regains 3d6 hit points. This effect occurs only once per mushroom."
      },
      {
        "title": "Psychic Shielding",
        "rules": "For 1 hour after consumption, the user has advantage on saving throws against psychic damage and effects. This effect ends if the user takes damage from a non-psychic source or the hour passes."
      },
      {
        "title": "Onyx Hand Beacon",
        "rules": "While the mushroom's glow is active (up to 1 hour after consumption), any hostile creature within 300 feet that can perceive the light must succeed on a DC 13 Wisdom (Perception) check or become aware of the user's location."
      }
    ],
    "levelRequirementReason": "The mushroom's potency and the danger of the Onyx Hand require a seasoned adventurer.",
    "vendorReason": "The Mushroom Kingdom specializes in rare fungal flora and cave-grown specimens.",
    "shippingDetail": "Delivered in a lead-lined crate to prevent the glow from alerting local patrols.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The mushroom is consumed or the 1-hour duration expires",
      "charges": "Single use"
    },
    "priceReason": "Reduced from 2500 to reflect a balanced cost for a rare consumable that provides temporary utility rather than permanent buffs.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T22:47:35.783856+00:00",
    "aiReviewedAt": "2026-07-21T22:47:35.783856+00:00",
    "aiReviewVersion": 1
  },
  "a_relic_forged_from_the": {
    "id": "a_relic_forged_from_the",
    "name": "Echo of the Triforce",
    "description": "The Echo of the Triforce is a shimmering relic forged from the same primordial energy that birthed the Triforce. This artifact hums with ancient power, granting the wielder a surge of physical prowess and agility.",
    "price": 1000,
    "icon": "🎭",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Physicality",
      "Evasive Reflexes"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Physicality",
        "rules": "When activated, your Strength and movement speed increase by 20% for 1 minute. This effect does not stack with other bonuses to movement speed."
      },
      {
        "title": "Evasive Reflexes",
        "rules": "As a reaction when you are hit by an attack, you can roll a d20. On a 10 or higher, you reduce the damage taken from that attack by 1d10 + your Dexterity modifier."
      }
    ],
    "levelRequirementReason": "The item's raw power requires a character of at least 5th level to safely channel the Triforce energy.",
    "vendorReason": "The vendor is a local authority on relics originating from the Hyruleian region.",
    "shippingDetail": "Delivered via Lakitu cloud-drone; may arrive delayed if heavy winds occur.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or the user finishes a long rest.",
      "charges": "1/Long Rest"
    },
    "priceReason": "Reduced from 2000 to reflect a balanced rare-tier item price for a single-use daily buff.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-21T22:47:57.683077+00:00",
    "aiReviewedAt": "2026-07-21T22:47:57.683077+00:00",
    "aiReviewVersion": 1
  },
  "a_relic_from_the_blocked": {
    "id": "a_relic_from_the_blocked",
    "name": "Star Road Key",
    "description": "The Star Road Key is a celestial relic forged from the debris of the blocked Star Road. This shimmering artifact serves as a navigational anchor for hidden portals and carries a faint, humming resonance of data corruption.",
    "price": 10000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Cryptic Gate Opening",
      "Faction Bypass",
      "Memory Echo",
      "Data Corruption"
    ],
    "vendor": "internet",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Cryptic Gate Opening",
        "rules": "While holding the key during a full moon, you can use an action to attempt to open a portal. You must possess a confirmed Envoy's map fragment to succeed on a DC 20 Intelligence (Arcana) check. On a success, a portal opens to a location on the Star Road."
      },
      {
        "title": "Faction Bypass",
        "rules": "While the key is on your person, you automatically pass all faction checkpoints without being challenged or stopped. This effect is passive and constant."
      },
      {
        "title": "Memory Echo",
        "rules": "When you use the key within 60 feet of Pianta Village, you must succeed on a DC 14 Wisdom saving throw or be forced to see a haunting vision of the past for 1 minute, during which you are incapacitated."
      },
      {
        "title": "Data Corruption",
        "rules": "The key emits a pulse of interference. Any magical communication devices or server-based technology within 30 feet of the key suffer a -2 penalty to all checks made to operate them."
      }
    ],
    "levelRequirementReason": "The item is legendary and requires significant magical proficiency to handle its reality-bending properties.",
    "vendorReason": "The item is sold via clandestine digital networks to bypass physical scrutiny.",
    "shippingDetail": "Delivered via high-risk smuggling routes; may be intercepted by authorities.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The key is lost or the bridge is cut by Don Pianta",
      "charges": "Unlimited"
    },
    "priceReason": "The price was adjusted from 45,000 to a more standard legendary gold/XP value while maintaining its high rarity.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-21T22:48:24.944314+00:00",
    "aiReviewedAt": "2026-07-21T22:48:24.944314+00:00",
    "aiReviewVersion": 1
  },
  "a_relic_from_the_depths_1": {
    "id": "a_relic_from_the_depths_1",
    "name": "Void Touched Amulet",
    "description": "The Void Touched Amulet is a Feywild relic that pulses with the energy of lost time. Crafted by the Pokémon League with assistance from the Feywild’s Trickster Court, this amulet allows the wearer to resist magical onslaughts while navigating labyrinthine halls.",
    "category": "equipment",
    "price": 8000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Magical Ward",
      "Labyrinthine Navigation",
      "Void Siphon"
    ],
    "vendor": "kivotos",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Magical Ward",
        "rules": "While attuned, you have resistance to damage from spells and other magical effects. This effect lasts as long as you remain attuned and focused."
      },
      {
        "title": "Labyrinthine Navigation",
        "rules": "You gain a +3 bonus to Wisdom (Perception) checks made to navigate maze-like environments or track your previous location across time loops."
      },
      {
        "title": "Void Siphon",
        "rules": "If you do not use your action to concentrate on the amulet's ward, you take 1d6 necrotic damage at the start of each of your turns. This damage cannot be reduced in any way."
      }
    ],
    "levelRequirementReason": "The item is an Epic rarity relic requiring significant magical maturity to handle its volatile Feywild energy.",
    "vendorReason": "Kivotos maintains a connection to the Trickster Court, allowing them to source Feywild-touched artifacts.",
    "shippingDetail": "Delivered in a lead-lined crate to prevent dimensional leakage during transit.",
    "usage": {
      "activation": "Passive (Attunement)",
      "duration": "Permanent while attuned",
      "endsWhen": "Attunement is broken or the wearer dies",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its Epic rarity and its ability to provide resistance against high-level magical threats.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T22:48:48.774077+00:00",
    "aiReviewedAt": "2026-07-21T22:48:48.774077+00:00",
    "aiReviewVersion": 1
  },
  "a_relic_from_the_time": {
    "id": "a_relic_from_the_time",
    "name": "Feywild Talisman",
    "description": "This Feywild Talisman is a shimmering trinket etched with spiraling patterns that hum with the resonance of the Fey courts. Crafted by Koopa Postal and marked with Feywild courier stamps, it allows the wearer to navigate the shifting tides of temporal anomalies.",
    "category": "equipment",
    "price": 3000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Resistance",
      "Perception Disruption",
      "Chronal Rewind"
    ],
    "vendor": "earth_land",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Temporal Resistance",
        "rules": "While attuned, you have advantage on saving throws against effects that attempt to manipulate time or force you into a time loop."
      },
      {
        "title": "Perception Disruption",
        "rules": "When a creature you can see within 30 feet makes an attack roll against you, roll a d10; on a 1, the creature must succeed on a DC 15 Wisdom saving throw or have disadvantage on that attack as their perception blurs."
      },
      {
        "title": "Chronal Rewind",
        "rules": "When you take damage from a time-loop effect, you can use your reaction to force the last 6 seconds of the encounter to undo. You regain the hit points lost during those 6 seconds, but the effect is expended and the talisman requires a long rest to recharge."
      }
    ],
    "levelRequirementReason": "The complexity of navigating Feywild temporal anomalies requires a high level of magical maturity.",
    "vendorReason": "Earth Land serves as a neutral ground for trading exotic Feywild artifacts.",
    "shippingDetail": "Delivered via standard Feywild courier stamps; may arrive slightly before it was ordered.",
    "usage": {
      "activation": "Passive / Reaction",
      "duration": "Instantaneous / Permanent",
      "endsWhen": "The Chronal Rewind effect ends after one use per long rest.",
      "charges": "1 Rewind charge per long rest"
    },
    "priceReason": "Reduced from 4200 to reflect a balanced Rare tier price for a utility-focused artifact.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-21T22:49:14.065684+00:00",
    "aiReviewedAt": "2026-07-21T22:49:14.065684+00:00",
    "aiReviewVersion": 1
  },
  "a_relic_of_drowned_sorcerers_1": {
    "id": "a_relic_of_drowned_sorcerers_1",
    "name": "Tongue of the Tide",
    "description": "The Tongue of the Tide is a salt-crusted, bioluminescent relic of the drowned sorcerers, pulsating with the rhythm of the deep. Crafted by the Chain Chomp Courier and linked to the Rakasha Spirit Walkers, this organic relic allows the wearer to commune with the ocean's secrets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌊",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Hydrophobic Resistance",
      "Tidal Retaliation",
      "Whispers of the Deep"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Hydrophobic Resistance",
        "rules": "While submerged in water, you gain resistance to bludgeoning, piercing, and slashing damage from non-magical attacks. This effect is only active if the wearer has a swimming speed or a creature type with aquatic affinity."
      },
      {
        "title": "Tidal Retaliation",
        "rules": "When you are hit by a melee attack while submerged, you can use your reaction to release a wave of force damage. The attacker takes 1d4 force damage. You can use this reaction a number of times equal to your proficiency bonus per long rest."
      },
      {
        "title": "Whispers of the Deep",
        "rules": "As a bonus action, you can cause the relic to whisper secrets to any allies within 10 feet. Choose one ally; they gain advantage on their next Wisdom (Perception) check made within 1 minute."
      }
    ],
    "levelRequirementReason": "The relic's aquatic affinity and magical weight require a character with established magical training or physical prowess.",
    "vendorReason": "Animatopia specializes in biological and spiritual relics of unusual origin.",
    "shippingDetail": "Delivered via a high-speed courier; the item arrives damp and smelling of brine.",
    "usage": {
      "activation": "Passive for resistance; Reaction for Retaliation; Bonus Action for Whispers",
      "duration": "Instantaneous / 1 minute",
      "endsWhen": "Retaliation uses are exhausted; Whispers end after the perception check.",
      "charges": "Retaliation: Proficiency Bonus per long rest"
    },
    "priceReason": "Adjusted to reflect a standard uncommon utility item for a level 4 adventurer.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-21T22:49:41.152293+00:00",
    "aiReviewedAt": "2026-07-21T22:49:41.152293+00:00",
    "aiReviewVersion": 1
  }
};
