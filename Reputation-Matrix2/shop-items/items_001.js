// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_001 = {
  "Pauline_mic": {
    "id": "pauline_mic",
    "name": "Pauline's Microphone",
    "description": "Pauline's Microphone is a polished brass and velvet instrument that hums with a faint magical resonance. This theatrical tool allows the wielder to project their voice with captivating clarity to command audiences or armies.",
    "category": "equipment",
    "price": 5400,
    "icon": "🎤",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Resonant Command",
      "Acoustic Projection"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Sound Box",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Resonant Command",
        "rules": "As an action, you can speak a command to one creature you can see within 60 feet. The target must succeed on a DC 15 Wisdom saving throw or be Charmed by your voice and must follow your next verbal command (up to one action in difficulty) as if it were its own. The effect lasts for 1 minute or until the target succeeds on its saving throw at the end of its first turn. You can use this property a number of times equal to your Proficiency Bonus per long rest."
      },
      {
        "title": "Acoustic Projection",
        "rules": "While holding the microphone, your voice can be heard clearly by all creatures within 120 feet, regardless of ambient noise or distance. This effect is always active while the item is held."
      }
    ],
    "levelRequirementReason": "The microphone's magical resonance requires a level of magical awareness common in mid-tier adventurers.",
    "vendorReason": "The Gilded Gryphon specializes in high-quality instruments and luxury equipment for performers.",
    "shippingDetail": "Delivered in a padded, sound-proofed crate to prevent any accidental acoustic feedback during transit.",
    "usage": {
      "activation": "Action for Resonant Command; Passive for Acoustic Projection",
      "duration": "1 minute for Resonant Command",
      "endsWhen": "The Command effect ends if the target succeeds on its saving throw, if the user loses consciousness, or when all daily charges are expended.",
      "charges": "Proficiency Bonus uses per long rest"
    },
    "priceReason": "The price reflects a rare utility item that provides both a constant utility buff and a high-impact crowd control ability.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-21T22:10:34.452296+00:00",
    "aiReviewedAt": "2026-07-21T22:10:34.452296+00:00",
    "aiReviewVersion": 1
  },
  "shy_guy_torch": {
    "id": "shy_guy_torch",
    "name": "Shy Guy's Mask Torch",
    "description": "The Shy Guy's Mask Torch is a soot-treated torch fashioned from a weathered, porcelain-like mask. It emits a flickering violet flame that seems to swallow the surrounding light rather than illuminate it.",
    "category": "equipment",
    "price": 150,
    "icon": "🔦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Shadow Veil",
      "Secret Whispers",
      "Nervous Giggling"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Dark Wrap",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Shadow Veil",
        "rules": "While holding the lit torch, you can cast the Hide action as a bonus action even if you are in bright light, provided you are within 5 feet of a surface or object to lean against. This effect lasts until you move more than 10 feet away from that surface or the torch is extinguished."
      },
      {
        "title": "Secret Whispers",
        "rules": "As an action, you can focus the violet flame to transmit a message to a creature within 60 feet. The target must succeed on a DC 13 Wisdom saving throw or hear your voice as a faint whisper in their mind. You can use this property once per day."
      },
      {
        "title": "Nervous Giggling",
        "rules": "Whenever a creature within 10 feet of the torch attempts to initiate combat, the torch emits a high-pitched giggle. The creature must succeed on a DC 12 Wisdom saving throw or have disadvantage on their first attack roll against you."
      }
    ],
    "levelRequirementReason": "The item requires a basic understanding of stealth and social interaction to be useful.",
    "vendorReason": "The black market specializes in tools for covert operations and clandestine information gathering.",
    "shippingDetail": "Delivered in a lead-lined crate to ensure the whispers do not reach neighbors.",
    "usage": {
      "activation": "Passive (while held and lit)",
      "duration": "1 hour of light per day",
      "endsWhen": "The torch is extinguished, destroyed by a loud noise (volume above a shout), or the 1-hour light limit is reached.",
      "charges": "1 daily use for Secret Whispers"
    },
    "priceReason": "The price reflects its utility as a specialized tool for stealth and communication in urban environments.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-21T22:11:09.458124+00:00",
    "aiReviewedAt": "2026-07-21T22:11:09.458124+00:00",
    "aiReviewVersion": 1
  },
  "1_up_deluxe": {
    "id": "1_up_deluxe",
    "name": "1-Up Deluxe",
    "description": "This 1-Up Deluxe is a shimmering, oversized mushroom forged from solid platinum that pulses with a rhythmic heartbeat. Held in your hand, it radiates a profound sense of safety to the wielder.",
    "category": "consumables",
    "price": 150000,
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
    "description": "This 1-Up Mushroom is a vibrant, pulsating green fungus that hums with a rhythmic frequency vibrating in your teeth. It smells of damp earth and ozone, holding a concentrated essence of a second chance.",
    "category": "premium",
    "price": 15000,
    "icon": "💚",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Defy Death",
      "Mystical Resonance"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Armored Escort",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Defy Death",
        "rules": "When you are reduced to 0 hit points but not killed outright, you can use your reaction to consume this mushroom. You instead drop to 1 hit point and gain 1d10 + 5 temporary hit points. This effect can only be triggered once per mushroom."
      },
      {
        "title": "Mystical Resonance",
        "rules": "While holding the mushroom, you have advantage on Intelligence (Nature) checks made to identify fungal life-forms or spores."
      }
    ],
    "levelRequirementReason": "The item is a consumable utility and does not require high-level proficiency to use.",
    "vendorReason": "The local toads are the primary cultivators of these rare fungal life-forms.",
    "shippingDetail": "Requires a heavy guard to prevent theft due to its high value and magical signature.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The mushroom is consumed and its effect is triggered.",
      "charges": "Single use; destroyed upon consumption."
    },
    "priceReason": "The price reflects its legendary rarity and its ability to prevent a character's death.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-21T22:09:05.475025+00:00",
    "aiReviewedAt": "2026-07-21T22:09:05.475025+00:00",
    "aiReviewVersion": 1
  },
  "a_bag_that_defies_vertical_1": {
    "id": "a_bag_that_defies_vertical_1",
    "name": "Gravity Satchel",
    "description": "Woven with shimmering threads from the Doughnut's rim, this satchel ignores the standard pull of the earth. It clings to your hip with stubborn intent, remaining perfectly level even as you tumble through the air.",
    "category": "equipment",
    "price": 29000,
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
        "rules": "As an action, you can cause the satchel to exert an upward force. You and any creatures within 5 feet of the bag float up to 30 feet vertically. This effect lasts for 1 minute or until you fall prone, move horizontally more than 10 feet, or use an action to land."
      },
      {
        "title": "Gravity Anomaly",
        "rules": "While the satchel is on your person, you have advantage on Athletics checks made to resist being knocked prone or pushed by environmental hazards like wind or falling debris."
      },
      {
        "title": "Enhanced Capacity",
        "rules": "The satchel's interior defies geometry, allowing it to hold up to 500 pounds of weight without increasing its physical size or making it heavy to carry."
      },
      {
        "title": "Void Curse",
        "rules": "While attuned to the satchel, you have disadvantage on Perception checks made to detect subtle vibrations or sounds from above, as the bag's gravity-defying hum muffles the world."
      }
    ],
    "levelRequirementReason": "The magical weight of the satchel's gravity-defying properties requires a high level of magical attunement.",
    "vendorReason": "Inkopolis merchants specialize in high-end, gravity-resistant accessories for travelers.",
    "shippingDetail": "Delivered via high-altitude drop; the package may drift slightly off-course due to its weightless nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Moving horizontally more than 10 feet, falling prone, or choosing to land",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its epic rarity and the significant utility provided by its weightless storage and levitation.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-21T21:54:06.931943+00:00",
    "aiReviewedAt": "2026-07-21T21:54:06.931943+00:00",
    "aiReviewVersion": 1
  },
  "a_bottle_of_whiskey_garlic": {
    "id": "a_bottle_of_whiskey_garlic",
    "name": "Wario's Wild West Bottle",
    "description": "This oversized, dusty bottle contains a murky liquid that reeks of pungent garlic and cheap grain. One sip grants a rugged surge of fortitude, though the revolting taste lingers long after the effect fades.",
    "category": "equipment",
    "price": 25,
    "icon": "🍾",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Garlic Fortitude",
      "Western Grit",
      "Pungent Aftertaste"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bottle Bounce",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Fortitude",
        "rules": "When you drink this whiskey as an action, you gain 10 temporary hit points. These hit points remain until the end of your next long rest."
      },
      {
        "title": "Western Grit",
        "rules": "For 1 hour after drinking, you have advantage on saving throws against being frightened or charmed. You must succeed on a DC 10 Constitution saving throw to avoid being poisoned by the whiskey's harsh kick, which causes you to be unable to take reactions until the end of your next turn."
      },
      {
        "title": "Pungent Aftertaste",
        "rules": "For 1 hour after consumption, your breath is so foul that any creature within 5 feet of you that can see you must succeed on a DC 12 Constitution saving throw or become nauseated, giving them disadvantage on their next attack roll made against you."
      }
    ],
    "levelRequirementReason": "This is a common consumable item suitable for all adventurers.",
    "vendorReason": "Wario's land is the primary source for such rustic and pungent concoctions.",
    "shippingDetail": "Delivered via high-speed bouncing; arrives in 1d4 days.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The duration expires, the user falls unconscious, or the item is consumed.",
      "charges": "Single use; the bottle is destroyed after drinking."
    },
    "priceReason": "The price reflects a common utility item providing temporary health and minor tactical advantages.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-21T21:54:32.456933+00:00",
    "aiReviewedAt": "2026-07-21T21:54:32.456933+00:00",
    "aiReviewVersion": 1
  },
  "a_bracelet_infused_with_wario": {
    "id": "a_bracelet_infused_with_wario",
    "name": "Wario's Garlic Power Bracelet",
    "description": "This heavy, pungent bracelet radiates the overwhelming aroma of roasted garlic. It pulses with a crude, muscular energy that makes your muscles bulge and your breath turn toxic.",
    "category": "equipment",
    "price": 150,
    "icon": "🧄",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Garlic Might",
      "Foul Reek",
      "Stink Blast"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stinky Sack",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Garlic Might",
        "rules": "While wearing this bracelet, you gain a +1 bonus to Strength (Athletics) checks and your melee weapon damage rolls include an extra 1d4 force damage."
      },
      {
        "title": "Foul Reek",
        "rules": "Your breath emits a pungent odor; any creature that starts its turn within 5 feet of you must succeed on a DC 13 Constitution saving throw or be Poisoned until the start of its next turn."
      },
      {
        "title": "Stink Blast",
        "rules": "As an action, you can exhale a cloud of garlic gas in a 15-foot cone. Each creature in the area must succeed on a DC 13 Constitution saving throw or be Blinded until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The intense odor and physical strain of the garlic energy require a seasoned constitution.",
    "vendorReason": "The shop specializes in items derived from Wario's eccentric and pungent culinary experiments.",
    "shippingDetail": "Wrapped in airtight, wax-sealed burlap to prevent the aroma from leaking during transit.",
    "usage": {
      "activation": "Passive (Might/Reek) or Action (Stink Blast)",
      "duration": "1 hour or instantaneous",
      "endsWhen": "The Stink Blast effect ends after one use or when the bracelet's 1-hour duration expires.",
      "charges": "1 use per long rest"
    },
    "priceReason": "The price reflects an uncommon utility item providing both consistent buffs and a limited area-of-effect crowd control ability.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-21T21:55:01.407549+00:00",
    "aiReviewedAt": "2026-07-21T21:55:01.407549+00:00",
    "aiReviewVersion": 1
  },
  "a_brass_token_engraved_with": {
    "id": "a_brass_token_engraved_with",
    "name": "Pipe Network Key",
    "description": "This weathered brass token is engraved with the crumbling symbols of the Pipe Network. When inserted into a node, it illuminates hidden smuggling routes and whispers the haunting echoes of a final, desperate plea.",
    "price": 150,
    "icon": "⚙",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Hidden Route Revelation",
      "Smuggler Awareness",
      "Auditory Hallucinations"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Hidden Route Revelation",
        "rules": "While the token is active, you can see glowing ley-lines on the walls and floors that mark secret passages and smuggling tunnels within 60 feet. You gain a +5 bonus to Wisdom (Perception) checks made to find these specific secret paths."
      },
      {
        "title": "Smuggler Awareness",
        "rules": "You gain a +2 bonus to Stealth checks made while moving through the Pipe Network's infrastructure. Additionally, you have advantage on Wisdom (Insight) checks to determine if a creature is a known smuggler."
      },
      {
        "title": "Auditory Hallucinations",
        "rules": "While the token is active, you hear a faint, sobbing voice. You have disadvantage on Perception checks that rely on hearing, as the ghostly plea masks nearby sounds."
      }
    ],
    "levelRequirementReason": "The complexity of navigating the Pipe Network's infrastructure requires basic mechanical proficiency.",
    "vendorReason": "The Mushroom Kingdom serves as a primary hub for salvaged industrial artifacts.",
    "shippingDetail": "Fragile handling required; delivery takes 2 days via heavy-duty courier.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The effect ends when the 1-hour duration expires or the token is removed from the node.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects a balanced cost for a specialized utility item that provides significant navigation advantages.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-21T21:55:28.676915+00:00",
    "aiReviewedAt": "2026-07-21T21:55:28.676915+00:00",
    "aiReviewVersion": 1
  },
  "a_buoyant_satchel_woven_from": {
    "id": "a_buoyant_satchel_woven_from",
    "name": "Tropical Tide Satchel",
    "description": "Woven from resilient seagrass and bleached coral, this satchel remains perfectly buoyant even in heavy currents. It feels light as a sea breeze and possesses a peculiar way of blending into the ocean's depths.",
    "category": "equipment",
    "price": 150,
    "icon": "🐠",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Buoyant Storage",
      "Amphibious Mobility",
      "Submerged Stealth"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Buoyant Storage",
        "rules": "While the satchel is submerged in water, it does not sink and provides a +2 bonus to any Difficulty Class (DC) checks made to prevent the contents from being washed away by currents."
      },
      {
        "title": "Amphibious Mobility",
        "rules": "You gain a swimming speed equal to your walking speed while wearing or carrying this satchel."
      },
      {
        "title": "Submerged Stealth",
        "rules": "While underwater, the satchel's coral weave grants you advantage on Stealth checks made to hide from creatures that rely on sight."
      }
    ],
    "levelRequirementReason": "This is a basic utility item suitable for any adventurer exploring coastal regions.",
    "vendorReason": "Isle Delfino is a primary hub for tropical maritime goods and sea-grass weaving.",
    "shippingDetail": "Delivered via waterproof courier; standard 2-day transit for coastal regions.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The satchel is destroyed or discarded",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects a standard uncommon utility item providing mobility and minor stealth benefits.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-21T21:55:51.992264+00:00",
    "aiReviewedAt": "2026-07-21T21:55:51.992264+00:00",
    "aiReviewVersion": 1
  },
  "a_cape_that_makes_you": {
    "id": "a_cape_that_makes_you",
    "name": "Wario's Super Star Cape",
    "description": "This heavy, vibrant cape radiates a pulsing golden glow that hums with raw, chaotic energy. When donned, the wearer feels an overwhelming surge of bravado and unyielding physical might.",
    "category": "equipment",
    "price": 6000,
    "icon": "⭐",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Starlight Aura",
      "Invincible Burst",
      "Power-Down Crash"
    ],
    "vendor": "wario_land",
    "shippedBy": "Starry Shipment",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Starlight Aura",
        "rules": "While wearing the cape, you have advantage on Charisma (Intimidation) checks."
      },
      {
        "title": "Invincible Burst",
        "rules": "As a bonus action, you can enter a state of invincibility for 1 minute. While in this state, you have resistance to all damage. Once used, this property can't be used again until you finish a long rest."
      },
      {
        "title": "Power-Down Crash",
        "rules": "Immediately after the Invincible Burst duration ends, you suffer from exhaustion. You have disadvantage on all ability checks and attack rolls until the end of your next three turns."
      }
    ],
    "levelRequirementReason": "The chaotic energy of the cape is too volatile for those who haven't mastered their own inner strength.",
    "vendorReason": "The cape was manufactured in Wario's own factory and is sold as a premium 'power-up' garment.",
    "shippingDetail": "Delivered via a shooting star; arrives instantly but may leave a small scorch mark on the doorstep.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "The duration expires or the wearer dies.",
      "charges": "1 charge per long rest"
    },
    "priceReason": "Reduced from 17,000 to reflect a balanced rare-tier price point for a temporary defensive buff.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-21T21:20:07.467555+00:00",
    "aiReviewedAt": "2026-07-21T21:20:07.467555+00:00",
    "aiReviewVersion": 1
  },
  "a_card_that_wilds_any": {
    "id": "a_card_that_wilds_any",
    "name": "Wario's Wildcard",
    "description": "A vibrant, slightly greasy playing card that seems to shimmer with unpredictable energy. It feels heavier than paper and smells faintly of garlic and triumph.",
    "category": "equipment",
    "price": 25,
    "icon": "🃏",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Gambler's Edge",
      "Clumsy Handling",
      "Wario's Gamble"
    ],
    "vendor": "wario_land",
    "shippedBy": "Joker Jog",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gambler's Edge",
        "rules": "When you make a Dexterity (Sleight of Hand) check related to gambling or card tricks, you gain a +1 bonus."
      },
      {
        "title": "Clumsy Handling",
        "rules": "Because the card is so unruly, you have disadvantage on Sleight of Hand checks made to hide the card or perform complex card flourishes."
      },
      {
        "title": "Wario's Gamble",
        "rules": "As an action, you can discard the card to attempt a 'Double or Nothing' wager. Roll a d20; on a 10 or higher, you double your current gold reward for the session. On a 9 or lower, you lose all gold earned during that session."
      }
    ],
    "levelRequirementReason": "The card is common enough for any adventurer to possess, though its power is limited.",
    "vendorReason": "This is a signature item from Wario's own card manufacturing line.",
    "shippingDetail": "Delivered in a grease-stained envelope; may arrive with a small 'Winner' sticker.",
    "usage": {
      "activation": "Passive (Gambler's Edge) / Action (Wario's Gamble)",
      "duration": "Instantaneous",
      "endsWhen": "The card is discarded or destroyed during Wario's Gamble.",
      "charges": "Single Use"
    },
    "priceReason": "Reduced from 5000 to reflect a common rarity while maintaining its high-risk, high-reward utility.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T21:20:29.245628+00:00",
    "aiReviewedAt": "2026-07-21T21:20:29.245628+00:00",
    "aiReviewVersion": 1
  },
  "a_chest_full_of_treasure": {
    "id": "a_chest_full_of_treasure",
    "name": "Wario's Fake Treasure Chest (Scam Chest!)",
    "description": "This oversized, gaudy chest is overflowing with glittering 'gold' that clinks with a hollow sound. It is a masterwork of misdirection, designed to lure greedy enemies into a clumsy trap.",
    "category": "equipment",
    "price": 150,
    "icon": "📦",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Decoy Lure",
      "Spring-Loaded Surprise"
    ],
    "vendor": "wario_land",
    "shippedBy": "Empty Echo Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Decoy Lure",
        "rules": "As an action, you can place the chest in an unoccupied space. Any creature that notices the chest and attempts to interact with it must succeed on a DC 13 Intelligence saving throw or spend its entire action attempting to pry it open, finding only a hollow interior."
      },
      {
        "title": "Spring-Loaded Surprise",
        "rules": "When a creature succeeds on the Intelligence save to open the chest, it triggers a spring-loaded mechanism. The creature must succeed on a DC 12 Constitution saving throw or be Blinded until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The item is a low-level utility trap and does not require advanced martial or magical proficiency.",
    "vendorReason": "Wario's shop is the primary source for high-quality, deceptive loot and traps.",
    "shippingDetail": "Delivered via heavy-duty carriage; the chest is weighted with actual stones to feel authentic.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The chest is destroyed or the spring mechanism is jammed.",
      "charges": "Unlimited uses until the spring mechanism breaks."
    },
    "priceReason": "Reduced from 9000 to reflect its status as a common tactical tool rather than a hoard of wealth.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-21T21:20:48.059191+00:00",
    "aiReviewedAt": "2026-07-21T21:20:48.059191+00:00",
    "aiReviewVersion": 1
  },
  "a_classic_wizard_hat_that": {
    "id": "a_classic_wizard_hat_that",
    "name": "Mages' Guild Pointed Hat of Stereotypes",
    "description": "This floppy, oversized hat is the quintessential uniform of the arcane arts. While it radiates an aura of scholarly expertise, its construction is tragically flimsy.",
    "category": "equipment",
    "price": 150,
    "icon": "🎩",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Arcane Aesthetic",
      "Aerodynamic Liability",
      "Dramatic Flair"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Arcane Aesthetic",
        "rules": "You have advantage on Intelligence (Arcana) checks made to identify magical properties or lore, as your attire perfectly fits the wizardly archetype."
      },
      {
        "title": "Aerodynamic Liability",
        "rules": "You have disadvantage on saving throws against effects that move objects or creatures via wind or forced movement."
      },
      {
        "title": "Dramatic Flair",
        "rules": "You have disadvantage on Dexterity (Stealth) checks made while casting a spell or performing any action that requires a dramatic gesture."
      }
    ],
    "levelRequirementReason": "The item is balanced for all levels and does not require high-level magic to function.",
    "vendorReason": "The Mages' Guild Haberdashery specializes in traditional wizarding attire and accessories.",
    "shippingDetail": "Delivered via a minor teleportation rift; the hat may arrive slightly dusty.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The hat is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 9500 to reflect an uncommon utility item with mixed benefits.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-21T21:21:04.880379+00:00",
    "aiReviewedAt": "2026-07-21T21:21:04.880379+00:00",
    "aiReviewVersion": 1
  },
  "a_coin_with_wario_s": {
    "id": "a_coin_with_wario_s",
    "name": "Wario's Lucky W Coin",
    "description": "This chunky, slightly tarnished coin bears the wide, greedy grin of a certainkoopaling tycoon. It feels suspiciously heavy in the palm, as if it's actively trying to stay in your pocket.",
    "category": "equipment",
    "price": 25,
    "icon": "🪙",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Wario's Gamble",
      "Greedy Grin"
    ],
    "vendor": "wario_land",
    "shippedBy": "Coin Flip Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wario's Gamble",
        "rules": "When you flip the coin as a bonus action, roll a d20. On a 1-12, you gain a +1 bonus to your next d20 roll; on a 13-20, you suffer a -1 penalty to that roll. This effect lasts until the roll is made."
      },
      {
        "title": "Greedy Grin",
        "rules": "You have advantage on Charisma (Deception) checks made specifically to bluff or cheat during gambling games."
      }
    ],
    "levelRequirementReason": "The item is common and does not provide significant power scaling.",
    "vendorReason": "The vendor specializes in items related to Wario's eccentricities.",
    "shippingDetail": "Delivered via a frantic courier who flips the coin to decide if your package is 'on time'.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "After the next d20 roll is made",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4100 to reflect its common rarity and minor utility.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-21T21:21:21.997164+00:00",
    "aiReviewedAt": "2026-07-21T21:21:21.997164+00:00",
    "aiReviewVersion": 1
  },
  "a_controller_that_controls_minor": {
    "id": "a_controller_that_controls_minor",
    "name": "Wario's  WiiMote",
    "description": "This chunky, oversized remote feels strangely heavy and vibrates with an erratic, mischievous energy. It allows the user to manipulate the physical world with a flick of the wrist, provided the objects aren't too heavy to lift.",
    "category": "equipment",
    "price": 150,
    "icon": "🎮",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Remote Manipulation",
      "Erratic Vibration",
      "Technological Rapport"
    ],
    "vendor": "wario_land",
    "shippedBy": "Game Over Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Remote Manipulation",
        "rules": "As an action, you can point at an object weighing less than 10 pounds within 30 feet. The object moves up to 5 feet in any direction. You can use this property a number of times equal to your Proficiency Bonus, regaining all uses after a long rest."
      },
      {
        "title": "Erratic Vibration",
        "rules": "While holding the remote, it vibrates intensely. You have disadvantage on all Concentration checks."
      },
      {
        "title": "Technological Rapport",
        "rules": "You gain a +1 bonus to Charisma (Persuasion) checks made to interact with mechanical devices or NPCs who specialize in technology."
      }
    ],
    "levelRequirementReason": "The item is balanced for low-level utility and does not grant significant combat advantages.",
    "vendorReason": "Wario's shop is the primary source for bizarre and high-tech gaming peripherals.",
    "shippingDetail": "Delivered in a reinforced box to prevent the remote from vibrating off the delivery wagon.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The remote's daily uses are exhausted or the user lets go.",
      "charges": "Proficiency Bonus per long rest"
    },
    "priceReason": "Reduced from 5200 to reflect a balanced uncommon utility item for early-game play.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-21T21:21:41.328981+00:00",
    "aiReviewedAt": "2026-07-21T21:21:41.328981+00:00",
    "aiReviewVersion": 1
  },
  "a_cowboy_hat_with_wario": {
    "id": "a_cowboy_hat_with_wario",
    "name": "Wario's Wild West Hat",
    "description": "This oversized, rugged cowboy hat features a defiant, mustache-shaped brim and a vibrant yellow hue. It radiates a boisterous, greedy energy that makes anyone nearby feel slightly pressured.",
    "category": "equipment",
    "price": 25,
    "icon": "🤠",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Bravado of the Outlaw",
      "Clumsy Brim",
      "Western Charisma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Yeehaw Yonder",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bravado of the Outlaw",
        "rules": "You have advantage on Charisma (Intimidation) checks made while inside a tavern, saloon, or gambling hall."
      },
      {
        "title": "Clumsy Brim",
        "rules": "Because of its exaggerated size, you have disadvantage on Dexterity (Balance) checks and Acrobatics checks."
      },
      {
        "title": "Western Charisma",
        "rules": "You gain a +1 bonus to Charisma (Persuasion) checks made specifically when negotiating for goods or services in a frontier setting."
      }
    ],
    "levelRequirementReason": "This is a common accessory and does not require high-level proficiency to wear.",
    "vendorReason": "Wario's personal branding makes this a staple item in his frontier-themed shop.",
    "shippingDetail": "Delivered via dusty stagecoach; arrives within 3 days of purchase.",
    "usage": {
      "activation": "Passive",
      "duration": "Permanent",
      "endsWhen": "The hat is lost, destroyed, or removed from the head.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from 4800 to reflect a common-tier item with minor situational bonuses.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-21T21:22:21.921228+00:00",
    "aiReviewedAt": "2026-07-21T21:22:21.921228+00:00",
    "aiReviewVersion": 1
  },
  "a_cursed_explosive_infused_with": {
    "id": "a_cursed_explosive_infused_with",
    "name": "Garlic Bomb",
    "description": "A pungent, volatile sphere of garlic infused with a lingering sense of avarice. When thrown, it releases a stinging cloud and a burst of greedy energy.",
    "price": 150,
    "icon": "🧄",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Stinging Burst",
      "Garlic Blindness",
      "Aura of Greed"
    ],
    "vendor": "doughnut_hole",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stinging Burst",
        "rules": "On impact with a creature, the bomb deals 3d4 piercing damage. The target must succeed on a DC 12 Dexterity saving throw to take only half damage."
      },
      {
        "title": "Garlic Blindness",
        "rules": "Targets hit by the explosion are Blinded by the pungent fumes until the end of their next turn."
      },
      {
        "title": "Aura of Greed",
        "rules": "For 3 rounds, any creature within 10 feet of the explosion must succeed on a DC 12 Wisdom saving throw or have disadvantage on Wisdom (Insight) and Charisma (Persuasion) checks as they become obsessed with nearby loot."
      }
    ],
    "levelRequirementReason": "The explosive potency and mental aura effects are tuned for established adventurers.",
    "vendorReason": "The shop specializes in pungent, oversized snacks and 'experimental' kitchen explosives.",
    "shippingDetail": "Fragile and highly odorous; requires extra-thick sealing to prevent leaks during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The bomb is detonated and destroyed.",
      "charges": "Single use"
    },
    "priceReason": "Adjusted to reflect the potency of a multi-effect area of effect item.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-21T21:24:58.449397+00:00",
    "aiReviewedAt": "2026-07-21T21:24:58.449397+00:00",
    "aiReviewVersion": 1
  },
  "a_cursed_relic_forged_from": {
    "id": "a_cursed_relic_forged_from",
    "name": "Entropy Ring",
    "description": "A jagged band of rusted iron that pulses with a cold, hollow rhythm. It radiates a sense of profound loss, as if the wearer's very identity is being slowly unspooled.",
    "price": 28000,
    "icon": "⚙",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Fear Resistance",
      "Memory Erosion",
      "Psychic Vulnerability"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Fear Resistance",
        "rules": "While wearing this ring, you have advantage on saving throws against being frightened."
      },
      {
        "title": "Memory Erosion",
        "rules": "Every hour the ring is worn, you must succeed on a DC 13 Wisdom saving throw or lose a random personal memory. On a failure, the DM chooses a minor memory (e.g., a childhood pet's name or a past meal) that you can no longer recall."
      },
      {
        "title": "Psychic Vulnerability",
        "rules": "You take an extra 1d6 psychic damage whenever you are hit by a psychic attack."
      }
    ],
    "levelRequirementReason": "The psychic weight of the relic requires a high level of mental fortitude to wield without immediate collapse.",
    "vendorReason": "Sarasaland deals in artifacts of tragic history and cursed lineage.",
    "shippingDetail": "The courier refuses to look at the package and demands it be kept in a lead-lined box during transit.",
    "usage": {
      "activation": "Passive",
      "duration": "24 hours",
      "endsWhen": "The ring becomes inert after 24 hours of continuous wear.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the high risk of permanent memory loss and the item's limited utility period.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-21T21:25:18.650808+00:00",
    "aiReviewedAt": "2026-07-21T21:25:18.650808+00:00",
    "aiReviewVersion": 1
  },
  "a_cursed_tool_forged_from_1": {
    "id": "a_cursed_tool_forged_from_1",
    "name": "Ironclad Hammer of the Forge",
    "description": "A heavy, soot-stained hammer forged from the final steel of the Blacksmith’s Guild. Its handle pulses with a dull, rhythmic heat, as if the labor of the Iron Legion still beats within the metal.",
    "category": "equipment",
    "price": 600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Armor-Piercing Strike",
      "Structural Decay",
      "Iron Will"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor-Piercing Strike",
        "rules": "When you hit a creature wearing heavy armor or a shield with a melee weapon attack using this hammer, you deal an extra 1d8 bludgeoning damage."
      },
      {
        "title": "Structural Decay",
        "rules": "On a successful hit against an armored target, the target's AC is reduced by 1 until the end of your next turn as the metal buckles. This effect does not stack."
      },
      {
        "title": "Iron Will",
        "rules": "On a natural 20 hit, the target must succeed on a DC 14 Wisdom saving throw or gain the 'Iron Will' status, granting them resistance to all damage but reducing their movement speed by 10 feet for 3 rounds."
      }
    ],
    "levelRequirementReason": "The hammer's weight and the intensity of its heat require a seasoned warrior to wield effectively.",
    "vendorReason": "The Midlands region is the primary hub for heavy industrial smithing and historical relics.",
    "shippingDetail": "Requires heavy-duty reinforced crates to prevent the hammer from vibrating through standard packaging.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target's turn concludes or the hammer misses.",
      "charges": "Unlimited"
    },
    "priceReason": "Reduced from the original 2500 to reflect a balanced rare-tier utility item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-21T21:26:22.523408+00:00",
    "aiReviewedAt": "2026-07-21T21:26:22.523408+00:00",
    "aiReviewVersion": 1
  },
  "a_custom_motorcycle_loud_fast": {
    "id": "a_custom_motorcycle_loud_fast",
    "name": "Wario's Chopper",
    "description": "A roaring, grease-stained chopper that vibrates with raw, unbridled power. It leaves a trail of thick soot and smells faintly of pungent spices.",
    "category": "equipment",
    "price": 110000,
    "icon": "🏍️",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "High-Speed Travel",
      "Ram Attack",
      "Smoke Screen"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Driven through your wall",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "High-Speed Travel",
        "rules": "While mounted, your movement speed is 100 feet. You can move through non-magical difficult terrain without penalty."
      },
      {
        "title": "Ram Attack",
        "rules": "As an action, you can move in a straight line and collide with a creature. The target must succeed on a DC 15 Strength saving throw or take 4d10 bludgeoning damage and be knocked prone."
      },
      {
        "title": "Smoke Screen",
        "rules": "As a bonus action, the bike exhales a 20-foot-radius cloud of black smoke. The area is heavily obscured for 1 minute or until a wind of 10 mph or greater blows through it."
      }
    ],
    "levelRequirementReason": "The sheer velocity and weight of the chopper require a seasoned rider to handle.",
    "vendorReason": "Wario personally guarantees the 'indestructible' quality of his custom fleet.",
    "shippingDetail": "Delivery is instantaneous; the bike will arrive by crashing into your nearest structure.",
    "usage": {
      "activation": "Passive (Movement), Action (Ram), Bonus Action (Smoke)",
      "duration": "Continuous",
      "endsWhen": "The bike is destroyed or the rider is incapacitated",
      "charges": "Unlimited (Requires 1 unit of Garlic per 10 miles of travel)"
    },
    "priceReason": "Reduced from 200k to reflect a balanced legendary equipment cost for a high-mobility vehicle.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-21T21:27:22.979176+00:00",
    "aiReviewedAt": "2026-07-21T21:27:22.979176+00:00",
    "aiReviewVersion": 1
  },
  "a_darkly_polished_ring_forged": {
    "id": "a_darkly_polished_ring_forged",
    "name": "Onyx Hand Ring",
    "description": "A darkly polished ring forged from the remnants of the Onyx Hand’s last rebellion. Wearing it grants the wearer the ability to detect and disrupt magical wards, but each use drains the wearer’s willpower and triggers a 5% chance to be targeted by assassins. The ring whispers the names of those who died for the Kingdom’s sovereignty.",
    "category": "equipment",
    "price": 5700,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Detects magical wards and weakens them",
      "Drains 1d6 willpower per use",
      "5% chance to trigger assassination target",
      "Grants +2 to stealth checks in dark environments",
      "Whispers names of fallen heroes",
      "Crafted by: Iron Legion"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 4
  },
  "a_device_that_draws_maps": {
    "id": "a_device_that_draws_maps",
    "name": "Wario's Treasure Map Generator",
    "description": "A device that 'draws' maps to hidden loot – Wario's surefire scheme!",
    "category": "equipment",
    "price": 150,
    "icon": "🗺️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Generates a map once per day: leads to minor treasure (10-50gp) 70% of the time, or a trap (1d6 damage) 30%",
      "Map is waterproof: advantage on Survival in wet areas",
      "Wario's watermark: attracts rival treasure hunters (complication)",
      "Made by: Wario's Map Mill"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pirate Post",
    "levelRequirement": 5
  },
  "a_flickering_lantern_from_luigi": {
    "id": "a_flickering_lantern_from_luigi",
    "name": "Luigi's Ghost-Hunting Lantern",
    "description": "A flickering lantern from Luigi's ill-fated defense of the castle.",
    "category": "equipment",
    "price": 150,
    "icon": "🏮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Illuminate 20ft: reveals invisible spirits or ghosts",
      "Once per day: cast a minor light spell that harms undead (1d4 radiant)",
      "Lantern is haunted: whispers Luigi's fears (disadvantage on saves vs. fear)",
      "May attract Boo spirits: random ghostly encounters",
      "Made by: Luigi's Gear (Salvaged from Ruins)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spooky Shipment",
    "levelRequirement": 5
  },
  "a_flickering_lantern_that_glows": {
    "id": "a_flickering_lantern_that_glows",
    "name": "Feywhisper Torch",
    "description": "A flickering lantern that glows with the color of twilight and whispers secrets to those who listen. When lit, it reveals hidden paths in the Feywild and grants temporary invisibility to the user for 10 seconds.",
    "price": 150,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grants 10 seconds of invisibility when used",
      "Reveals hidden paths in the Feywild for 30 seconds",
      "Boosts stealth check by +2 for 1 turn"
    ],
    "vendor": "rogueport",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4
  },
  "a_flying_broom_for_quick": {
    "id": "a_flying_broom_for_quick",
    "name": "Kamek's Broom",
    "description": "A flying broom for quick escapes.",
    "category": "equipment",
    "price": 28000,
    "icon": "🧹",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Fly speed 50ft",
      "Can cast one random spell per day (DM roll)",
      "Broom has mind of its own sometimes"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Broomstick Delivery",
    "levelRequirement": 7
  },
  "a_fractured_fragment_of_a": {
    "id": "a_fractured_fragment_of_a",
    "name": "Mirrored Soul Shard",
    "description": "A fractured fragment of a dead necromancer’s essence, now bound to the Deep Mirror. When wielded, it whispers forgotten commands and warps the battlefield’s perception. Ideal for manipulating undead horde formations.",
    "category": "equipment",
    "price": 600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to summon undead units in combat",
      "Grants temporary invisibility to user during 30 seconds of sustained use",
      "Causes surrounding enemies to stagger when touched by summoned spirits"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "a_fractured_relic_from_the": {
    "id": "a_fractured_relic_from_the",
    "name": "Ancient Temple Shard",
    "description": "A fractured relic from the depths of the Sacred Ruins. When wielded, it grants visions of forgotten temple secrets and minor stat boosts. Only the brave or the foolish dare to carry it.",
    "category": "equipment",
    "price": 5400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% attack speed while in temple zones",
      "Minor chance to reveal hidden temple path upon use",
      "Grants temporary immunity to environmental damage in temple areas"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5
  },
  "a_geometric_wand_brimming_with_1": {
    "id": "a_geometric_wand_brimming_with_1",
    "name": "Kamek's Spare Wand",
    "description": "A geometric wand brimming with chaotic transformation magic.",
    "category": "equipment",
    "price": 110000,
    "icon": "🪄",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "+2 to Spell Attack/DC",
      "Action: Transform a medium object into a CR 3 monster (Loyal to you)",
      "Action: Transform terrain into geometric blocks",
      "User laughs uncontrollably"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Broomstick",
    "levelRequirement": 11
  },
  "a_gold_plated_spray_painted": {
    "id": "a_gold_plated_spray_painted",
    "name": "Wario's Authentic Autograph Plaque",
    "description": "A gold-plated (spray-painted) plaque with Wario's signature. His face is winking.",
    "category": "equipment",
    "price": 26,
    "icon": "🖼️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Display in your camp: Wario may randomly appear in your dreams to give bad financial advice",
      "Wealthy NPCs think you're a collector: advantage on Charisma checks with them",
      "Plaque is tacky: disadvantage on checks with art critics",
      "Smells faintly of garlic (permanent)",
      "Made by: Wario Land Memorabilia (100% Genuine, Trust Me)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 4
  },
  "a_golden_key_to_the": {
    "id": "a_golden_key_to_the",
    "name": "Diamond City Key",
    "description": "A golden key to the vault of hidden treasures",
    "price": 28000,
    "icon": "💎",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Opens doors to hidden rooms",
      "Grants temporary teleportation to nearby locations",
      "Consumes 1000 mana per use",
      "Made by: Skaven",
      "Causes minor mana drain when used repeatedly",
      "Only works in Diamond City or Wario Land zones"
    ],
    "vendor": "sarasaland",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 7
  },
  "a_greasy_napkin_signed_by": {
    "id": "a_greasy_napkin_signed_by",
    "name": "Wario's Autograph on a Used Napkin",
    "description": "A greasy napkin signed by Wario himself. 'Worth a fortune!' he says.",
    "category": "equipment",
    "price": 26,
    "icon": "📝",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Can be used as a one-time distraction: show it to a foe for disadvantage on their next attack (they're confused by the 'celebrity')",
      "Napkin is stained with garlic sauce: disadvantage on Charisma checks if you try to sell it (smells awful)",
      "Wario claims it's a 'collectors item': advantage on Persuasion to haggle with Wario fans",
      "Made by: Wario (with a Sharpie)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Greasy Envelope",
    "levelRequirement": 4
  },
  "a_hat_that_grows_garlic": {
    "id": "a_hat_that_grows_garlic",
    "name": "Wario's Garlic Grower Hat (Gimmick Grow!)",
    "description": "A hat that grows garlic on your head – fresh anytime!",
    "category": "equipment",
    "price": 26,
    "icon": "🎩",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Grows 1 garlic bulb per day: Use as ingredient or ammo (1d4 bludgeoning)",
      "Hat smells garlicky: Advantage vs. vampires, but disadvantage on stealth (odor)",
      "Itch factor: Disadvantage on Concentration if not harvested daily",
      "Made by: Wario's Farm Folly"
    ],
    "vendor": "wario_land",
    "shippedBy": "Head Harvest Haul",
    "levelRequirement": 5
  },
  "a_holster_for_guns_garlic": {
    "id": "a_holster_for_guns_garlic",
    "name": "Wario's Wild West Holster",
    "description": "A holster for 'guns' (garlic shooters).",
    "category": "equipment",
    "price": 150,
    "icon": "👜",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Quick draw: advantage on first ranged",
      "Holster creaks: disadvantage on quiet",
      "Western: +1 Dex draws",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Holster Hustle",
    "levelRequirement": 4
  },
  "a_hooded_cloak_for_patrolling": {
    "id": "a_hooded_cloak_for_patrolling",
    "name": "Gondor Ranger's Cloak",
    "description": "A hooded cloak for patrolling the wilds of Ithilien.",
    "category": "equipment",
    "price": 150,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Survival checks in forests or hills",
      "Hood provides dim light vision in shadows",
      "Cloak snags on thorns (5% chance of tear)",
      "Made by: Gondor Tailors"
    ],
    "vendor": "kingdom_gondor_outpost",
    "shippedBy": "Ranger Relay",
    "levelRequirement": 5
  },
  "a_horn_that_honks_with": {
    "id": "a_horn_that_honks_with",
    "name": "Wario's  Bike Horn",
    "description": "A horn that honks with garlic scent.",
    "category": "equipment",
    "price": 26,
    "icon": "🚲",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Honk to distract: DC 12 Wisdom save or foe loses action",
      "Horn smells: disadvantage on Charisma nearby",
      "Bike racers love it: +1 speed on mounts",
      "Made by: Wario Wheels"
    ],
    "vendor": "wario_land",
    "shippedBy": "Horn Honk Haul",
    "levelRequirement": 4
  },
  "a_jagged_piece_of_the": {
    "id": "a_jagged_piece_of_the",
    "name": "Peach's Crown Shard",
    "description": "A jagged piece of the late Princess's crown, looted from the palace ruins.",
    "category": "equipment",
    "price": 26,
    "icon": "👑",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Embed in weapon: +1d4 radiant damage vs. undead or Toad rebels once per day",
      "Shard is cursed: disadvantage on Charisma checks with loyalists (they sense the theft)",
      "Glows faintly in presence of royalty: advantage on Investigation for hidden heirs",
      "May shatter after 3 uses: permanent loss",
      "Made by: Palace Looter (Wario's Collection)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Relic Relay",
    "levelRequirement": 4
  },
  "a_key_forged_in_the": {
    "id": "a_key_forged_in_the",
    "name": "Ricco Harbor Key",
    "description": "A key forged in the ink-jammed ruins of Ricco Harbor",
    "price": 26,
    "icon": "🗝",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Opens the secret door behind the ink-stained wall",
      "Grants access to the Koopa Navy’s hidden storage",
      "Can be used to summon ink-splattered goblins",
      "Wears off after 10 minutes of use",
      "Smells like stale tea and regret",
      "Carries the ghost of Admiral Bloopers"
    ],
    "vendor": "dreamland",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 2
  },
  "a_lightweight_cape_woven_from": {
    "id": "a_lightweight_cape_woven_from",
    "name": "Tropical Breeze Cape",
    "description": "A lightweight cape woven from the breath of the island’s breezes, this cape allows the wearer to glide through the air with minimal effort. Ideal for aerial combat or escape missions.",
    "category": "equipment",
    "price": 5500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants short-range aerial flight for 10 seconds",
      "Increases dodge chance by 15% while airborne",
      "Reduces fall damage by 50% during jumps"
    ],
    "vendor": "isle_delfino",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "a_long_fork_for_roasting": {
    "id": "a_long_fork_for_roasting",
    "name": "Wario's Wiener Roast Fork",
    "description": "A long fork for roasting... anything.",
    "category": "equipment",
    "price": 26,
    "icon": "🍡",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Roast over fire: advantage on cooking meat",
      "Fork long: +5 ft reach for pokes (1d4 piercing)",
      "Greasy: disadvantage on grip checks",
      "Made by: Wario BBQ"
    ],
    "vendor": "wario_land",
    "shippedBy": "Roast Roll",
    "levelRequirement": 4
  },
  "a_lucky_bone_for_wishes": {
    "id": "a_lucky_bone_for_wishes",
    "name": "Wario's Wishbone",
    "description": "A 'lucky' bone for wishes.",
    "category": "equipment",
    "price": 26,
    "icon": "🍗",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Snap for luck: +1 to next roll",
      "Bone breaks: disadvantage if snapped wrong",
      "Wario wishes: advantage on greed",
      "Made by: Wario Wishes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Bone Break",
    "levelRequirement": 4
  },
  "a_meter_that_measures_your": {
    "id": "a_meter_that_measures_your",
    "name": "Wario's Luck-o-Meter",
    "description": "A meter that measures your luck – and 'boosts' it Wario-style!",
    "category": "equipment",
    "price": 150,
    "icon": "🎰",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Check luck: Roll d20; on 15+ gain inspiration, on 5- reroll a failed check",
      "Meter shakes: +1 to gambling or loot rolls",
      "Scam vibe: Breaks after 3 uses (false readings lead to bad decisions)",
      "Made by: Wario's Luck Lab"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lucky Lotto Load",
    "levelRequirement": 5
  },
  "a_mutated_core_from_the": {
    "id": "a_mutated_core_from_the",
    "name": "Fire Flower Core",
    "description": "A mutated core from the new fire flower strain",
    "price": 28000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Can be infused into any weapon to grant explosive damage on critical hit",
      "Causes 3d6 fire damage on first hit with weapon",
      "Triggering the core causes temporary mutations to the wielder: +1d4 damage, -10% stamina regeneration, +10% fire resistance",
      "Must be kept in a sealed crystal vial or else it explodes on contact with water",
      "Origin: Raventree Manor’s Shadowfell Mutation Lab",
      "Wielder must be a fire mage or mutant cultivator to activate"
    ],
    "vendor": "middle_earth",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 8
  },
  "a_pan_that_stirs_itself": {
    "id": "a_pan_that_stirs_itself",
    "name": "Mages' Guild Spellbound Saucepan",
    "description": "A pan that stirs itself with a magic spoon.",
    "category": "equipment",
    "price": 600,
    "icon": "🍳",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Automatically stirs recipes: advantage on cooking checks, frees up your hands",
      "Spoon sometimes casts Prestidigitation randomly (food changes color, taste, or temperature)",
      "Pan is sentient and gives unsolicited cooking advice (disadvantage if you ignore it)",
      "Made by: Mages' Guild Kitchen Enchanters"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 7
  },
  "a_parasol_for_floating_and_1": {
    "id": "a_parasol_for_floating_and_1",
    "name": "Peach's Parasol",
    "description": "A parasol for floating and shielding.",
    "category": "equipment",
    "price": 600,
    "icon": "☂️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Float: Reduce fall speed to 10ft/round",
      "Shield: +1 AC when open",
      "Can glide 20ft horizontally"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Parasol Case",
    "levelRequirement": 5
  },
  "a_partially_burned_scroll_from": {
    "id": "a_partially_burned_scroll_from",
    "name": "Kamek's Scorched Spell Scroll",
    "description": "A partially burned scroll from Kamek's personal war spellbook.",
    "category": "equipment",
    "price": 6000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Cast spell on scroll: polymorphs target into random object (1 hour, WIS save DC 15)",
      "One use only: scroll crumbles after reading",
      "Pronunciation unclear: 30% chance you polymorph yourself instead",
      "Kamek signature: wizards recognize his style (advantage on Arcana)",
      "Made by: Royal Magikoopa Kamek"
    ],
    "vendor": "wario_land",
    "shippedBy": "Arcane Archives",
    "levelRequirement": 9
  },
  "a_pendant_that_pulses_with": {
    "id": "a_pendant_that_pulses_with",
    "name": "Necrotic Heart Pendant",
    "description": "A pendant that pulses with the heartbeat of the dead. Wears the weight of forgotten memories and allows the wearer to commune with undead spirits. Its glow dims if the wearer is injured.",
    "category": "equipment",
    "price": 5700,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants 10% chance to heal 10% of HP per turn if undead enemy is nearby",
      "Communion: Once per battle, allows the wearer to speak with a nearby undead entity for 3 seconds",
      "Pulse of the Dead: When damaged, the pendant temporarily grants +20% necromancy damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5
  },
  "a_piece_of_bowser_s": {
    "id": "a_piece_of_bowser_s",
    "name": "Bowser's Shell Fragment Shield (Chipped)",
    "description": "A piece of Bowser's shell, cracked during the siege of Toad Town.",
    "category": "equipment",
    "price": 150,
    "icon": "🐢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+1 AC against fire damage (residual Bowser magic)",
      "Shield is heavy: disadvantage on Stealth checks",
      "Koopas recognize it: advantage on Charisma with Koopa Troop defectors",
      "Shell still warm: you feel Bowser's rage, advantage on Intimidation, disadvantage on Persuasion",
      "Made by: Wario Land Battlefield Salvage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package",
    "levelRequirement": 5
  },
  "a_pink_brick_from_the": {
    "id": "a_pink_brick_from_the",
    "name": "Peach's Castle Brick",
    "description": "A pink brick from the castle walls, stamped with the royal crest.",
    "category": "equipment",
    "price": 26,
    "icon": "🧱",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Use as thrown weapon: 1d6 bludgeoning (20ft range)",
      "Royal nostalgia: advantage on History checks about the kingdom",
      "Heavy and awkward: disadvantage on ranged attack with it",
      "Collectors seek it: can sell for 2x price to right buyer",
      "Made by: Castle Architecture (Pre-War Era)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rubble Runners",
    "levelRequirement": 3
  },
  "a_pistol_that_shoots_garlic": {
    "id": "a_pistol_that_shoots_garlic",
    "name": "Wario's Garlic Gun",
    "description": "A pistol that shoots garlic cloves – Wario's anti-vampire special!",
    "category": "equipment",
    "price": 150,
    "icon": "🔫",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Ranged attack: 20/60 ft, 1d6 piercing + garlic (advantage vs. undead, they must save DC 12 CON or poisoned)",
      "10 shots: Reload with garlic bulbs",
      "Gimmick: Gun smells forever – disadvantage on social encounters",
      "Made by: Wario's Weapon Workshop"
    ],
    "vendor": "wario_land",
    "shippedBy": "Garlic Grenade Delivery",
    "levelRequirement": 5
  },
  "a_poorly_stitched_doll_that_1": {
    "id": "a_poorly_stitched_doll_that_1",
    "name": "Bootleg Waluigi Doll",
    "description": "A poorly stitched doll that looks like Waluigi, but with extra lanky arms.",
    "category": "equipment",
    "price": 150,
    "icon": "🎎",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Throw as a distraction: 20ft range, creates a minor illusion of Waluigi laughing (DC 12 Wisdom save or foe is distracted for 1 round)",
      "Doll's arms tangle easily: disadvantage on Sleight of Hand if you try to repair it",
      "Waluigi purists hate it: advantage on Intimidation with Mario fans (they think it's cursed)",
      "Made by: Shady Mushroom Kingdom Toy Factory"
    ],
    "vendor": "wario_land",
    "shippedBy": "Questionable Parcel",
    "levelRequirement": 4
  },
  "a_poster_with_your_face": {
    "id": "a_poster_with_your_face",
    "name": "Wario's Wild West Wanted Poster",
    "description": "A poster with your face (or Wario's).",
    "category": "equipment",
    "price": 27,
    "icon": "📜",
    "stock": 14,
    "rarity": "common",
    "effects": [
      "Show for +1 Intimidation bounties",
      "Poster old: disadvantage on current",
      "Western: +1 Deception outlaws",
      "Made by: Wario West"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wanted Wagon",
    "levelRequirement": 4
  },
  "a_potent_grenade_that_explodes_1": {
    "id": "a_potent_grenade_that_explodes_1",
    "name": "Wario's Garlic Grenade",
    "description": "A potent grenade that explodes in a cloud of overwhelmingly pungent garlic. Wario swears by it.",
    "category": "consumables",
    "price": 27,
    "icon": "🧄",
    "stock": 30,
    "rarity": "common",
    "effects": [
      "Thrown (30ft): 10ft radius cloud of garlic",
      "Creatures in cloud must make CON save or be Poisoned and nauseated for 1 minute",
      "Vampires and creatures with keen smell have disadvantage on the save"
    ],
    "vendor": "Wario Land",
    "shippedBy": "Greasy Paper Bag",
    "levelRequirement": 1
  },
  "a_potion_that_is_definitely": {
    "id": "a_potion_that_is_definitely",
    "name": "Wario's 'Definitely Magic' Potion",
    "description": "A potion that is definitely, probably, maybe magical. 60% of the time, it works every time.",
    "category": "equipment",
    "price": 150,
    "icon": "🧪",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Drink as an action: roll 1d6 - 1-3: no effect (it's just garlic water), 4-5: gain 1d10 temporary HP, 6: gain +2 to Strength for 1 hour",
      "After drinking, you must succeed DC 13 Constitution save or be poisoned for 1 round (questionable ingredients)",
      "Bottle is made of cheap glass: 20% chance it breaks in your bag, soaking everything with garlic smell",
      "Potion has a '100% Satisfaction Guarantee' sticker (Wario's face is on the sticker, winking)",
      "Made by: Wario Land Alchemy (Certified by Wario Himself)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Bottle Service",
    "levelRequirement": 6
  },
  "a_power_up_that_fell": {
    "id": "a_power_up_that_fell",
    "name": "Wario's 'Acquired' Mario Power-Up",
    "description": "A power-up that fell off the back of a truck. Definitely not stolen.",
    "category": "premium",
    "price": 5500,
    "icon": "⭐",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "It's a Fire Flower... but it's been modified': you can cast Burning Hands once per day (DC 13)",
      "After use, you must make a DC 10 Wisdom save or become convinced you're Mario (disadvantage on Charisma checks, you say 'Mama mia!' constantly)",
      "Mario's lawyers may appear: 5% chance per use that a celestial attorney shows up and demands the power-up back (DM-controlled, just annoying)",
      "Power-up is clearly repainted: original red is visible under yellow paint",
      "Made by: 'Found' by Wario (Allegedly)"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shady Delivery",
    "levelRequirement": 7
  },
  "a_printing_press_to_spread": {
    "id": "a_printing_press_to_spread",
    "name": "The 'Free Croak' Press",
    "description": "A printing press to spread the message of liberation.",
    "category": "faction",
    "price": 150,
    "icon": "📰",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Increases recruitment",
      "Boosts Loyalty significantly"
    ],
    "vendor": "rogueport_black_market",
    "factionBonus": {
      "loyalty": 15,
      "diplomacy": 5
    }
  },
  "a_pulsing_molten_core_encased_1": {
    "id": "a_pulsing_molten_core_encased_1",
    "name": "Forgeheart Core",
    "description": "A pulsing molten core encased in iron plate, rumored to be the heart of a defunct industrial giant. Increases stamina regeneration and grants temporary heat resistance in industrial zones.",
    "category": "equipment",
    "price": 5800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Regenerates 2 stamina per minute while active",
      "Grants +20% heat resistance",
      "Slightly increases damage against iron constructs"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6
  },
  "a_rare_fungus_radiating_powerful_1": {
    "id": "a_rare_fungus_radiating_powerful_1",
    "name": "Golden Mushroom",
    "description": "A rare fungus radiating powerful healing energy that glows with the essence of fallen monarchs. When consumed, it restores 3d6 HP and grants temporary immunity to psychic backlash, but its glow attracts attention from the Onyx Hand’s enforcers. Harvested only from the Whispering Caves beneath the Regal Throne.",
    "price": 5400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores 3d6 HP upon consumption",
      "Grants temporary immunity to psychic backlash",
      "Attracts attention from Onyx Hand enforcers",
      "Requires attunement by a spellcaster",
      "10% chance to trigger hallucinogenic visions",
      "Crafted by: Iron Legion"
    ],
    "vendor": "mushroom_kingdom",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 5
  },
  "a_relic_forged_from_the": {
    "id": "a_relic_forged_from_the",
    "name": "Echo of the Triforce",
    "description": "A relic forged from the same energy that birthed the Triforce itself this item grants temporary buffs based on the wielder’s current state. When activated it grants strength +20% and speed +15% for 10 seconds.",
    "price": 600,
    "icon": "🎭",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+20% Strength for 10 seconds",
      "+15% Speed for 10 seconds",
      "Grants 50% chance to dodge next attack"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "a_relic_from_the_blocked": {
    "id": "a_relic_from_the_blocked",
    "name": "Star Road Key",
    "description": "A relic from the blocked Star Road, rumored to open hidden portals",
    "price": 110000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unlocks the Star Road’s cryptic gate if held during a full moon",
      "Grants 100% chance to bypass all known faction checkpoints",
      "Causes minor data corruption in nearby servers",
      "Triggers “Memory Echo” when used near Pianta Village",
      "Must be used in conjunction with a confirmed Envoys’ map fragment",
      "Only one such key exists; lost after Don Pianta’s bridge cut"
    ],
    "vendor": "internet",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 10
  },
  "a_relic_from_the_depths_1": {
    "id": "a_relic_from_the_depths_1",
    "name": "Void Touched Amulet",
    "description": "A relic from the depths of the Feywild, this amulet pulses with the energy of lost time and forgotten gods. Worn by those who dare enter the Void, it grants temporary invulnerability to magical attacks—but at the cost of 1d6 damage per turn if the wearer does not maintain focus. The amulet remembers the wearer’s last known location, making it perfect for escaping Gehenna’s labyrinthine halls.",
    "category": "equipment",
    "price": 29000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Grants 1d6 temporary invulnerability to magical damage",
      "Grants +3 to perception checks when navigating maze-like environments",
      "Causes 1d6 damage to the wearer per turn if not focused",
      "Can track the wearer’s last known location (even across time loops)",
      "Requires attunement by a caster with 5+ years of training",
      "If used in the Feywild, causes minor dimensional rifts for 30 seconds",
      "Crafted by: Pokémon League (with assistance from the Feywild’s Trickster Court)"
    ],
    "vendor": "kivotos",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 8
  },
  "a_relic_from_the_time": {
    "id": "a_relic_from_the_time",
    "name": "Feywild Talisman",
    "description": "A relic from the time loops of the Fey courts",
    "category": "equipment",
    "price": 5700,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants temporary resistance to time loops",
      "10% chance to disrupt enemy perception during combat",
      "Causes wearer to hear whispers from trickster spirits",
      "If used in combat during a time loop, triggers a 30 second rewind",
      "Must be attuned to a Fey court by a bard or druid",
      "Crafted by: Koopa Postal with Feywild courier stamps"
    ],
    "vendor": "earth_land",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7
  },
  "a_relic_of_drowned_sorcerers_1": {
    "id": "a_relic_of_drowned_sorcerers_1",
    "name": "Tongue of the Tide",
    "description": "A relic of drowned sorcerers, whispered to speak with ocean depths",
    "category": "equipment",
    "price": 150,
    "icon": "🌊",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Grants temporary hydrophobic resistance while submerged",
      "Can cast a 1d4 damage wave when submerged and struck",
      "Voice of the tide can whisper secrets to allies within 10m",
      "Fails if worn by non-swimmer or non-creature with aquatic affinity",
      "Crafted by: Chain Chomp Courier",
      "Linked to: Rakasha Spirit Walkers"
    ],
    "vendor": "animatopia",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 4
  }
};
