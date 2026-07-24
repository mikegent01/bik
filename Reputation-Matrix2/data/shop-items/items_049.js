// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_049 = {
  "wario_land_fake_pearl": {
    "id": "wario_land_fake_pearl",
    "name": "Fake Pearl of Wario",
    "description": "The Fake Pearl of Wario masquerades as a gleaming, iridescent pearl but is forged from the hardened essence of defeated enemies. When clutched, it releases a paralyzing grip that seizes the target's limbs for three turns, rendering them immobile and defenseless. Upon contact, it also grants the wielder an extraordinary burst of vitality, restoring 2000 hit points in a single use. Legends say this artifact was crafted by Wario himself during his darkest days as a mercenary.",
    "price": 1000,
    "icon": "💍",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Paralyzing Grip",
      "Vitality Burst"
    ],
    "vendor": "wario_land",
    "shippedBy": "Quickstep Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Paralyzing Grip",
        "rules": "When activated, the Fake Pearl releases a wave of paralyzing energy that targets one creature within reach. The target is paralyzed for three turns and cannot take any actions or reactions during this time. There is no save allowed against this effect."
      },
      {
        "title": "Vitality Burst",
        "rules": "Upon activation, the Fake Pearl grants 2000 hit points to the user as a one-time regenerative burst. This effect can only be used once per day and requires a short rest to recharge."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to understand its immediate, powerful effects without requiring advanced character levels.",
    "vendorReason": "Wario himself crafted this artifact and sells it as a reminder of his mercenary days and as a way to ensure that those who purchase it are reminded not to cross him.",
    "shippingDetail": "The item is shipped via Quickstep Express, known for its reliable and fast delivery services within the region.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous; effect lasts three turns",
      "endsWhen": "The target of Paralyzing Grip regains mobility or the user completes a short rest",
      "charges": "Unlimited, but the Vitality Burst can only be used once per day"
    },
    "priceReason": "This price reflects its legendary rarity and the immediate, game-changing effects it provides without being overpowered.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-23T20:20:40.486770+00:00",
    "aiReviewedAt": "2026-07-23T20:20:40.486770+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_fallen_toad_banner": {
    "id": "wario_land_fallen_toad_banner",
    "name": "Fallen Toad Banner",
    "description": "The Fallen Toad Banner, crafted from the remnants of a battalion that stood valiantly against Wario's tyranny, now serves as a symbol of resilience and unity among the oppressed. Its tattered fabric whispers tales of valor, and when unfurled, it grants allies an unyielding heart in the face of fear. However, its very existence is fleeting; after each use, the banner must be carefully repaired or risk being torn beyond repair by the next stormy winds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏳️",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Banner's Valor",
      "Tattered Banner"
    ],
    "vendor": "wario_land",
    "shippedBy": "Banner Brigade",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banner's Valor",
        "rules": "When a character within 30 feet of the banner makes a saving throw against fear, they gain advantage on that save. This effect lasts for one minute and can be used once per long rest."
      },
      {
        "title": "Tattered Banner",
        "rules": "The banner is in constant need of repair; after each use, it suffers damage equivalent to 1d6 hit points. If the banner takes damage equal to or exceeding its maximum hit points, it must be repaired before being used again."
      }
    ],
    "levelRequirementReason": "The Fallen Toad Banner is accessible to all who wish to rally their spirits against tyranny.",
    "vendorReason": "Wario's oppressive rule has only fueled the desire for resistance, making this banner a cherished item among those fighting back.",
    "shippingDetail": "Ships via special courier with guaranteed delivery within 3 days of purchase.",
    "usage": {
      "activation": "Unfurling the banner is an action that activates its effects for one minute, or until a character uses it to make a saving throw against fear.",
      "duration": "One minute or until used in a save vs. fear",
      "endsWhen": "The effect ends when the user completes their next turn without making a saving throw against fear.",
      "charges": "Unlimited; requires repair after use"
    },
    "priceReason": "The Fallen Toad Banner's balance is adjusted to reflect its role as both a morale booster and a symbol of resistance, priced affordably for those seeking to join the fight.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-23T20:21:36.145791+00:00",
    "aiReviewedAt": "2026-07-23T20:21:36.145791+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_final_fire_flower": {
    "id": "wario_land_final_fire_flower",
    "name": "The Very Last Fire Flower",
    "description": "The Very Last Fire Flower, a crimson bloom ensconced within a glassy, sealed orb, is said to have sprouted during the final siege of Mushroom Kingdom. Its petals glisten with an ancient fire that has never been picked. This legendary plant grants its bearer unmatched resistance to fire and the unparalleled ability to call forth flames at will, making it an indispensable treasure for any daring adventurer seeking the ultimate flame mastery.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "very_rare",
    "effects": [
      "Fire Resistance",
      "Call Fireball"
    ],
    "vendor": "wario_land",
    "shippedBy": "Guarded Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The bearer gains permanent immunity to fire damage and a +4 bonus to saving throws against fire-related effects."
      },
      {
        "title": "Call Fireball",
        "rules": "As an action, the user can call forth a Fireball spell (no spell slots required). The fireball deals 6d6 fire damage in a 20-foot-radius sphere centered on a point the user designates. This effect has no saving throw and lasts until used."
      }
    ],
    "levelRequirementReason": "Requires minimal experience to handle such an ancient artifact.",
    "vendorReason": "Wario, always protective of his kingdom's relics, keeps this final bloom in his collection for safekeeping.",
    "shippingDetail": "Ships with armed guards to ensure the safety and purity of the bloom during transit.",
    "usage": {
      "activation": "Action or Reaction (for Call Fireball)",
      "duration": "Instantaneous (Fire Resistance) / Until used (Call Fireball)",
      "endsWhen": "Used or destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a lower price to reflect its limited utility and the fact that it can be replicated through magic.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T20:20:36.869515+00:00",
    "aiReviewedAt": "2026-07-23T20:20:36.869515+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_fire_flower_ash": {
    "id": "wario_land_fire_flower_ash",
    "name": "Fire Flower Ash Pouch",
    "description": "The Fire Flower Ash Pouch contains remnants of a legendary weapon used in the Garden Massacre. Crafted from the ashes of scorched Fire Flowers, it's said to hold the essence of volcanic fury. When tossed, it creates a dense smoke screen that obscures vision and sets enemies ablaze. The pouch is both a relic and a tool, but be wary—its contents are unpredictable, as they occasionally reignite, burning anything in their path.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Smoke Screen",
      "Reigniting Ash"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ember Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Smoke Screen",
        "rules": "When activated as a bonus action, the pouch creates an obscuring cloud of smoke within a 10-foot cube. Targets in the area have disadvantage on attack rolls and ability checks until the smoke dissipates after 1 minute."
      },
      {
        "title": "Reigniting Ash",
        "rules": "There is a 20% chance that any creature within the smoke screen will be set ablaze, dealing 1d6 fire damage. This effect occurs when the pouch is used and ends with each use until it runs out."
      }
    ],
    "levelRequirementReason": "The Fire Flower Ash Pouch's unpredictable nature makes it suitable for lower-level adventurers who can handle its risks.",
    "vendorReason": "Wario Land, a master of fire and destruction, sells relics from the Garden Massacre to those willing to face its dangers.",
    "shippingDetail": "Ships with Ember Express; delivery takes an additional day due to hazardous materials.",
    "usage": {
      "activation": "Bonus action to toss and create smoke screen, or ignite with a use.",
      "duration": "Smoke screen lasts for 1 minute after activation. Reigniting ash ends immediately upon effect.",
      "endsWhen": "Pouch is used up after 3 uses.",
      "charges": "Limited to 3 uses before the pouch empties."
    },
    "priceReason": "The Fire Flower Ash Pouch's rarity and the unpredictable nature of its effects justify its price, offering a unique tactical advantage at an appropriate cost.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T20:20:26.743644+00:00",
    "aiReviewedAt": "2026-07-23T20:20:26.743644+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_flagpole_finial": {
    "id": "wario_land_flagpole_finial",
    "name": "Victory Flagpole Finial",
    "description": "The Victory Flagpole Finial stands as a testament to the resilience of Wario Land's stages, crafted from durable metal and adorned with emblems of past victories. This ornamental top of a level-end flagpole now serves as both a morale booster and a strategic asset for players. Within its shadow, allies gain advantage on saves versus fear, while the finial’s imposing presence grants them a bonus to Intimidation checks when facing challengers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚩",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Vibrant Emblems",
      "Resilient Shield"
    ],
    "vendor": "wario_land",
    "shippedBy": "Flagpole Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vibrant Emblems",
        "rules": "When an ally within 30 feet of the Victory Flagpole Finial is targeted by a fear effect, they gain advantage on the save. This effect lasts until the end of their next turn."
      },
      {
        "title": "Resilient Shield",
        "rules": "Allies within 15 feet receive a bonus to their Intimidation checks when standing near the finial. The bonus is equal to half the level of the possessor, rounded down (minimum +1). This effect remains active for one minute."
      }
    ],
    "levelRequirementReason": "Players at lower levels can benefit from this morale booster and strategic asset.",
    "vendorReason": "Wario Land sells the Victory Flagpole Finial as a tribute to its players, offering them tools to overcome challenges and boost team morale.",
    "shippingDetail": "Delivered via special flagpole courier, ensuring swift arrival at your doorstep.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Vibrant Emblems lasts until the end of their next turn. Resilient Shield remains active for one minute.",
      "endsWhen": "The effects end as described above or if the possessor moves more than 30 feet from the finial.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its utility in morale and strategic advantages for players.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-23T20:20:56.036888+00:00",
    "aiReviewedAt": "2026-07-23T20:20:56.036888+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_fungi_pipe": {
    "id": "wario_land_fungi_pipe",
    "name": "Fungi Pipe of Pipe Transit",
    "description": "The Fungi Pipe of Pipe Transit, crafted by the Pokémon League from enchanted diamond and mycelium, is a towering pipe that connects the bustling streets of Diamond City to the whimsical Mushroom Kingdom via an underground conduit. It instantly transmits adventurers between these realms with a mere puff, but at the cost of 1000 garlic energy. The journey is not without its quirks; minor hallucinations may plague travelers for a few moments after transit, and the tremors from Wario's land are often felt upon arrival.",
    "price": 1000,
    "icon": "🌱",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Instantaneous World Transit",
      "Minor Hallucinations"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instantaneous World Transit",
        "rules": "The user activates the pipe by puffing into it. The effect is instantaneous, and no saving throw is required. Upon activation, the user is teleported to a random location in Mushroom Kingdom. This effect has no cooldown but requires 1000 garlic energy each use."
      },
      {
        "title": "Minor Hallucinations",
        "rules": "After using the pipe, the traveler may experience minor hallucinations for up to 1 minute. The DC to resist these effects is 15. These hallucinations do not impede movement or combat but can cause confusion and disorientation."
      }
    ],
    "levelRequirementReason": "The Fungi Pipe of Pipe Transit is intended for all adventurers, as it allows easy access between worlds without the need for high-level magic.",
    "vendorReason": "Wario Land, being a master of both Diamond City and Mushroom Kingdom, ensures that this unique item is available to all who wish to traverse between these realms.",
    "shippingDetail": "The pipe is delivered via Warp Whistle Transit, ensuring safe and timely arrival at the customer's location.",
    "usage": {
      "activation": "A bonus action to puff into the pipe.",
      "duration": "Instantaneous teleportation.",
      "endsWhen": "Upon arrival in the destination world or if the user exhausts their garlic energy.",
      "charges": "Unlimited, but consuming 1000 garlic energy per use."
    },
    "priceReason": "The cost of 1000 XP reflects the balance between the pipe's utility and the resource it consumes (garlic energy).",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T20:21:05.916848+00:00",
    "aiReviewedAt": "2026-07-23T20:21:05.916848+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_fuzzy_cloning_spore": {
    "id": "wario_land_fuzzy_cloning_spore",
    "name": "Fuzzy Cloning Spore",
    "description": "The Fuzzy Cloning Spore is a bio-magical artifact crafted by Bio-Magical Warfare Labs during the Multiplication Offensive. When planted, it splits small creatures into two exact duplicates, but these clones are fragile and have only 1 hit point each. They disintegrate upon being struck or after one hour. The original creature becomes momentarily confused for up to four rounds as its mind is disrupted by the spore's magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "👾",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Splitting Duplicates",
      "Temporary Confusion"
    ],
    "vendor": "wario_land",
    "shippedBy": "Double Trouble Dispatch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Splitting Duplicates",
        "rules": "When activated, this spore splits a Small creature into two exact duplicates. These clones have 1 hit point each and are considered non-magical creatures for the purpose of resistances. The duration is 1 hour or until one clone is struck by an attack. There's a 20% chance that the original creature splits instead."
      },
      {
        "title": "Temporary Confusion",
        "rules": "The original creature becomes confused and disoriented, unable to take actions for up to four rounds. This effect ends if the creature takes any action or if it is attacked."
      }
    ],
    "levelRequirementReason": "This level requirement ensures that only low-level adventurers can access its effects without overwhelming them.",
    "vendorReason": "Wario Land, a master of bio-weaponry, legally sells this artifact for educational purposes and historical research.",
    "shippingDetail": "The spores require special handling to prevent accidental activation during shipping.",
    "usage": {
      "activation": "Object Interaction (as an action)",
      "duration": "1 hour or until one clone is struck by an attack",
      "endsWhen": "One clone is struck, original creature takes an action, or four rounds pass after the effect begins",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its rare and controlled nature in the game world.",
    "priceOriginal": 8200,
    "priceReviewedAt": "2026-07-23T20:20:53.896834+00:00",
    "aiReviewedAt": "2026-07-23T20:20:53.896834+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_auction_house_catalog": {
    "id": "wario_land_garlic_auction_house_catalog",
    "name": "Wario Land Garlic Auction House Catalog",
    "description": "The Wario Land Garlic Auction House Catalog is a worn leather-bound tome adorned with Wario's iconic logo. It lists items that may or may not exist, causing buyers to question their purchases. Each item you order has a 50% chance of arriving as expected and a 25% chance of being 'out of stock'—a clever scam by the Catalog Co. The markup is steep, adding 20% to market prices, making every purchase feel like a goldmine or a trap.",
    "category": "equipment",
    "price": 1000,
    "icon": "📘",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Out of Stock Scam",
      "Price Mark-Up"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wario Express (2-6 Weeks)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Out of Stock Scam",
        "rules": "When you order an item from the catalog, roll a d6. On a result of 1 or 2, the item arrives as expected; on a result of 3 or 4, it is 'out of stock' (a scam)."
      },
      {
        "title": "Price Mark-Up",
        "rules": "All items purchased cost 20% more than their market price due to Wario's markup. This effect persists until the item is sold."
      }
    ],
    "levelRequirementReason": "This item requires basic knowledge of how scams work, making it accessible to low-level characters.",
    "vendorReason": "Wario Land Catalog Co. specializes in creating and selling questionable items, perfect for their catalog.",
    "shippingDetail": "Items are shipped via Wario Express, known for occasional delays due to... 'unfortunate accidents'.",
    "usage": {
      "activation": "Ordering an item from the catalog is considered a standard action.",
      "duration": "Instantaneous upon receiving the item or until the scam takes effect.",
      "endsWhen": "The effect ends when the item arrives as expected, is 'out of stock', or the buyer realizes it's a scam.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the catalog's dubious nature and the potential for both profit and loss.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T20:21:11.388034+00:00",
    "aiReviewedAt": "2026-07-23T20:21:11.388034+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_bread_recipe": {
    "id": "wario_land_garlic_bread_recipe",
    "name": "Recipe: Wario Land Garlic Bread",
    "description": "The Recipe: Wario Land Garlic Bread yields a pungent, bread-loaf that repels vampires and grants the eater a temporary shield of strength. It's a signature dish from Wario's Pantry, known for its over-the-top garlic content and unique ability to fend off undead threats. Prepared with extra-vigorous garlic, this bread not only tastes like it was made in a forge but also provides a deliciously dangerous reprieve against vampire attacks.",
    "price": 1000,
    "icon": "🍞",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Vampire Repellent",
      "Stamina Boost"
    ],
    "vendor": "wario_land_shack",
    "shippedBy": "Garlicky Guide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vampire Repellent",
        "rules": "Eating this garlic bread grants the eater advantage on saving throws against being turned by undead and a +1d4 temporary hit point bonus for 4 hours. The effect ends if the eater is exposed to sunlight or consumes another garlic-based item."
      },
      {
        "title": "Stamina Boost",
        "rules": "When consumed, this recipe provides a passive +1 to Strength checks and saving throws for 24 hours. This boost is limited to one use per day."
      }
    ],
    "levelRequirementReason": "The simple yet effective nature of the recipe allows even the lowest-level adventurers to benefit from its powers.",
    "vendorReason": "Wario's Pantry is renowned for crafting unique and potent foodstuffs, making it a natural fit for this item.",
    "shippingDetail": "The garlic bread recipe requires special couriering to preserve its potency; expect delays of up to one week.",
    "usage": {
      "activation": "Eating the garlic bread upon preparation.",
      "duration": "4 hours for Vampire Repellent and 24 hours for Stamina Boost, both effects end if conditions are met.",
      "endsWhen": "Exposure to sunlight or consumption of another garlic-based item ends the Vampire Repellent effect; one use per day limits the Stamina Boost duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The recipe's effectiveness and the unique flavor make it a valuable commodity, justifying its price.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T20:21:26.111701+00:00",
    "aiReviewedAt": "2026-07-23T20:21:26.111701+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_breath_mints_service": {
    "id": "wario_land_garlic_breath_mints_service",
    "name": "Wario Land Garlic Breath Mints ",
    "description": "Wario Land Garlic Breath Mints are a unique confection from the notorious Wario's Candy Factory, known to cleanse one’s breath and leave an indelible stench in its wake. These mints can be weaponized as a 15-foot cone of foul odor that poisons creatures within, forcing a Constitution saving throw with a DC of 12. However, their most peculiar property is the advantage they grant you on Persuasion checks, making it easier to charm or influence others despite your less-than-savory breath. Beware, though; those around you may find the scent unbearable and take disadvantageous actions when interacting with you for an hour.",
    "price": 1000,
    "icon": "🍬",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Weaponized Breath",
      "Advantage on Persuasion"
    ],
    "vendor": "wario_land_convenience",
    "shippedBy": "Stinky Packet Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weaponized Breath",
        "rules": "As a bonus action, you can consume one mints to unleash a 15-foot cone of poison. Creatures in the area must make a Constitution saving throw (DC 12) or be poisoned for 1 minute. This effect can only be used once per day."
      },
      {
        "title": "Advantage on Persuasion",
        "rules": "For one hour, you have advantage on Persuasion checks due to the mint’s refreshing scent. However, any ally within 30 feet who is aware of your use must make a Wisdom saving throw (DC 12) or complain about the odor and take disadvantageous actions with you for the duration."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it provides utility in social interactions and combat.",
    "vendorReason": "Wario Land Convenience Stores stock these mints due to their popularity among both locals and tourists seeking a unique souvenir or tactical tool.",
    "shippingDetail": "The Stinky Packet ensures timely delivery, but the odor may alert potential thieves.",
    "usage": {
      "activation": "Bonus action to consume one mints for weaponized breath. Passive advantage on Persuasion checks.",
      "duration": "Weaponized Breath lasts until the start of your next turn. Advantage on Persuasion checks lasts for an hour.",
      "endsWhen": "The effect ends when used or after its duration expires.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The price reflects the rarity and utility of these mints, providing both tactical advantages in combat and social situations.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:21:39.832846+00:00",
    "aiReviewedAt": "2026-07-23T20:21:39.832846+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_breath_potion": {
    "id": "wario_land_garlic_breath_potion",
    "name": "Wario Land Garlic Breath Potion",
    "description": "The Wario Land Garlic Breath Potion is a foul-smelling, amber liquid that clings to your breath like a cloud of stench. Crafted by Wario himself, this potion not only repels creatures with its pungent aroma but also leaves you gagging for hours after consumption. Beware, the effects are as potent as they are revolting; it's best used in dire situations where foul play is the key to victory.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧄",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Repel Creatures",
      "Lasts 1 Hour"
    ],
    "vendor": "wario_land_shop",
    "shippedBy": "Wario's Flying Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repel Creatures",
        "rules": "Creatures within 5 feet of you must make a DC 13 Constitution saving throw or be repelled. The effect lasts for 1 hour after the potion is consumed."
      },
      {
        "title": "Lasts 1 Hour",
        "rules": "The effects of the potion persist for one hour, starting when you drink it and ending early if you make a melee attack, cast a spell, or take any action on your turn. If you consume another Garlic Breath Potion before this duration ends, the previous effect is immediately ended."
      }
    ],
    "levelRequirementReason": "This potion's foul stench and repelling effects are simple enough for even beginning adventurers to handle.",
    "vendorReason": "Wario Land himself ensures that his creations are available at his shop, making them a go-to item for any of his fans or those who have faced his wrath.",
    "shippingDetail": "Delivered by Wario's trusty flying couriers, the potion is delivered with a guarantee of freshness and potency.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 hour from consumption",
      "endsWhen": "On your turn when you take an action or cast a spell; consumed by another Garlic Breath Potion before duration ends",
      "charges": "Unlimited, as the effects are temporary and not stored"
    },
    "priceReason": "The potion's price is balanced to reflect its potent effect that can turn the tide of battle in a single use.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:21:53.424423+00:00",
    "aiReviewedAt": "2026-07-23T20:21:53.424423+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_extract": {
    "id": "wario_land_garlic_extract",
    "name": "Wario Land Garlic Extract",
    "description": "The Wario Land Garlic Extract, a vial of pungent green liquid that reeks of garlic and sweat, is crafted by the very hands of Wario himself at his secret distillery in Toad Town. When uncorked, it grants you the strength to lift boulders and the courage to face even the most fearsome foes. Its breath weapon not only strikes with poison but also forces nearby allies into a state of nausea, making them twice as effective in battle due to their heightened alertness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Garlic Strength",
      "Poisonous Breath"
    ],
    "vendor": "wario_land_distillery",
    "shippedBy": "Express Cloud Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Garlic Strength",
        "rules": "As an action, uncork the vial and drink it. For the next minute, you gain advantage on Strength checks and saving throws involving physical prowess."
      },
      {
        "title": "Poisonous Breath",
        "rules": "You can exhale a cloud of garlic-scented mist in a 15-foot cone as an action. Creatures within this area must succeed a DC 14 Constitution saving throw or be poisoned, taking 2d6 poison damage and becoming incapacitated for 1 minute."
      }
    ],
    "levelRequirementReason": "This extract is best suited for those who have already proven their resilience in combat.",
    "vendorReason": "Wario personally oversees the distillery, ensuring that only the finest extracts are bottled and sold to adventurers seeking to enhance their abilities.",
    "shippingDetail": "The Express Cloud Courier ensures swift delivery of your order within a day.",
    "usage": {
      "activation": "Action or bonus action to uncork and use",
      "duration": "1 minute per use, duration ends when the effect is expended",
      "endsWhen": "Effect ends when the duration expires or you are incapacitated",
      "charges": "Unlimited uses; the extract recharges after a short rest"
    },
    "priceReason": "The balanced price reflects the rarity and potency of this extract, providing a significant tactical advantage without being overpowered.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T20:22:13.287812+00:00",
    "aiReviewedAt": "2026-07-23T20:22:13.287812+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_masher": {
    "id": "wario_land_garlic_masher",
    "name": "Wario Land Garlic Masher",
    "description": "The Wario Land Garlic Masher is a heavy-duty contraption forged in the heart of Wario's Workshop. Its twin gears and robust steel frame ensure that garlic is mashed to perfection, releasing a garlicky aroma that can be both palatable and intimidating. This masher grants you advantage on checks to repel undead creatures due to its potent scent, and it also increases your Intimidation checks by +1, making it a culinary weapon as well.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Repels Undead",
      "Enhances Intimidation"
    ],
    "vendor": "wario_land_shack",
    "shippedBy": "Stinky Smash Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Repels Undead",
        "rules": "When you use the masher to mash garlic in a recipe, you gain advantage on checks made to repel undead creatures. This effect lasts until the end of your next turn."
      },
      {
        "title": "Enhances Intimidation",
        "rules": "For 1 hour after using the masher, you have advantage on Intimidation checks and saving throws against being frightened. This effect is exhausted when it ends."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool can be used by anyone looking to enhance their undead-fighting abilities in the kitchen.",
    "vendorReason": "Wario's Workshop specializes in tools that combine practicality with Wario's unique sense of humor and craftsmanship.",
    "shippingDetail": "This shipment delivers mashes to your door, ensuring the garlic is freshly mashed upon arrival, though the smell may linger.",
    "usage": {
      "activation": "A bonus action to mash garlic in a recipe or for Intimidation purposes.",
      "duration": "Until the end of next turn (Repels Undead) or 1 hour (Enhances Intimidation).",
      "endsWhen": "At the start of your next turn after use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects its rarity and utility, offering a good value for players looking to enhance their undead-fighting and intimidating skills.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T20:21:52.132701+00:00",
    "aiReviewedAt": "2026-07-23T20:21:52.132701+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_mine": {
    "id": "wario_land_garlic_mine",
    "name": "Wario Land Garlic Mine",
    "description": "The Wario Land Garlic Mine is a deployable defense device made from repurposed Wario Land gadgets. Crafted by Wario Land Home Defense, it sprays an incapacitating garlic mist when triggered within a 10-foot radius. The mine's signature is its 10% chance to misfire and release a less effective, albeit still noxious, cloud of cologne instead. After activation, the device can be disarmed by a successful Dexterity check (DC 15) for future re-use.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Garlic Gas Cloud",
      "Cologne Misfire"
    ],
    "vendor": "wario_land",
    "shippedBy": "Explosive Parcel (Handle with Care)",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Garlic Gas Cloud",
        "rules": "When triggered, the mine releases a cloud of garlic mist within a 10-foot radius. Creatures in this area must succeed on a DC 13 Constitution saving throw or be poisoned for one round. Vampires and undead are subjected to an additional effect: they take 1d6 radiant damage and are stunned for one round if they fail the save."
      },
      {
        "title": "Cologne Misfire",
        "rules": "With a 10% chance, the mine releases a cloud of Wario's cologne instead. This misfire imposes disadvantage on Charisma checks within a 10-foot radius for one hour."
      }
    ],
    "levelRequirementReason": "The device requires basic understanding and manual dexterity to deploy effectively.",
    "vendorReason": "Wario Land Home Defense specializes in innovative home security gadgets, including this garlic mine.",
    "shippingDetail": "The parcel is marked as hazardous and requires special handling by Explosive Parcel.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Disarmed or the misfire occurs",
      "charges": "Unlimited, but can be disarmed for re-use"
    },
    "priceReason": "Balanced at a cost that reflects its utility and rarity without overshadowing other equipment.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T20:21:55.232494+00:00",
    "aiReviewedAt": "2026-07-23T20:21:55.232494+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_power_glove": {
    "id": "wario_land_garlic_power_glove",
    "name": "Garlic Power Glove",
    "description": "The Garlic Power Glove is a cursed artifact of Wario’s wrath, forged with garlic-infused fury. It amplifies the wearer's melee strikes by 35%, delivering a garlicky blow that stuns foes for two rounds. The glove also compels its owner to ingest an overabundance of garlic, causing them to vomit it profusely every five seconds, but only in areas with at least ten feet of open space nearby.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Garlic Amplification",
      "Stunning Stench"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Garlic Amplification",
        "rules": "On activation as a bonus action, the wielder's melee attacks deal an additional +35% damage. This effect lasts until the end of their next turn."
      },
      {
        "title": "Stunning Stench",
        "rules": "When the wielder deals damage with this glove, they emit a garlicky stench that affects all enemies within 10 feet for two turns. Enemies inhaled by the stench must succeed on a DC 15 Constitution saving throw or be stunned until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The Garlic Power Glove's effects are too powerful for lower-level characters, requiring at least third level to effectively utilize its abilities.",
    "vendorReason": "Wario Land is the only one who can control such a cursed artifact and sells it exclusively in his shop.",
    "shippingDetail": "The package requires careful handling to ensure the garlic doesn't leak during transport, adding an extra day to its delivery time.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until end of next turn for Garlic Amplification; two turns for Stunning Stench",
      "endsWhen": "The effect ends when the duration expires or the wearer drops the glove",
      "charges": "Unlimited, but must be reactivated as a bonus action each turn"
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful effects and cursed nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:22:07.658261+00:00",
    "aiReviewedAt": "2026-07-23T20:22:07.658261+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_press_of_power": {
    "id": "wario_land_garlic_press_of_power",
    "name": "Wario Land Garlic Press of Power",
    "description": "The Wario Land Garlic Press of Power exudes a fiery red glow, its steel body forged from volcanic rock. This kitchen appliance is no ordinary press—it can be wielded as a weapon and grants its user a garlicky edge in battle. When pressed, it releases a cloud of pungent garlic that confounds foes, giving the user advantage on Stealth checks against vampires and disadvantageous effects to those who smell it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Garlic Cloud",
      "Vampiric Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Garlic Cloud",
        "rules": "As a bonus action, the user can release a cloud of garlic from the press. This affects all creatures within 5 feet of the user. Creatures in the area must make a DC 13 Constitution saving throw or be incapacitated for 1 minute due to overpowering stench."
      },
      {
        "title": "Vampiric Disadvantage",
        "rules": "The user gains disadvantage on Stealth checks against vampires and any creature that can smell. This effect persists until the user uses an action to shake off the odor or until a successful DC 15 Constitution saving throw is made."
      }
    ],
    "levelRequirementReason": "This item requires moderate dexterity and strength, making it best suited for level 3 characters who can effectively wield its abilities.",
    "vendorReason": "Wario Land is known for creating unique kitchenware that blends practicality with the unexpected, and this garlic press certainly fits that mold.",
    "shippingDetail": "Delivered by Wafting Cloud Express; arrives within a week of order placement.",
    "usage": {
      "activation": "Bonus action to release Garlic Cloud or regular use as equipment.",
      "duration": "Instantaneous for the Garlic Cloud effect. Vampiric Disadvantage persists until shaken off or saved against.",
      "endsWhen": "The user successfully shakes off the odor with an action, or a successful saving throw is made.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, this item offers unique and thematic benefits that are challenging yet fair for its level.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T20:22:24.318539+00:00",
    "aiReviewedAt": "2026-07-23T20:22:24.318539+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_stained_apron": {
    "id": "wario_land_garlic_stained_apron",
    "name": "Wario Land Garlic-Stained Apron ",
    "description": "The Wario Land Garlic-Stained Apron is a foul-smelling, stained apron that clings to the wearer like a second skin. Crafted from repurposed materials in Wario's chaotic kitchen, it radiates an unmistakable scent that can drive away even the most persistent company. The apron grants you an advantage on saving throws against undead creatures due to its potent garlic essence and subtly boosts your Cooking checks by +1, but beware — it also imposes disadvantage on social interactions as friends are repelled by its stench.",
    "price": 1000,
    "icon": "👘",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on saving throws vs. undead",
      "Boost Cooking checks"
    ],
    "vendor": "wario_land_shack",
    "shippedBy": "Stinky Sack Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Repellent",
        "rules": "While wearing the apron, you have advantage on saving throws against being controlled or affected by undead creatures. This effect lasts until the start of your next turn after removing the apron."
      },
      {
        "title": "Cooking Boost",
        "rules": "When making a Cooking check, this apron grants you a +1 bonus to the roll. There is no limit on how often you can use this benefit per day."
      }
    ],
    "levelRequirementReason": "The simple yet effective mechanics of the apron make it accessible for beginners.",
    "vendorReason": "Wario's Kitchen specializes in eccentric and functional gear, making this apron a staple item.",
    "shippingDetail": "The apron is shipped using Stinky Sack's unique 'Smell Check' courier service, ensuring the recipient is prepared for the aroma that accompanies it.",
    "usage": {
      "activation": "Passive effect while wearing the apron.",
      "duration": "Instantaneous; ends when removed.",
      "endsWhen": "Starts of your next turn after removal.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's functionality and its unique flavor make it a moderately priced, yet highly sought-after piece in the marketplace.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T20:22:48.995588+00:00",
    "aiReviewedAt": "2026-07-23T20:22:48.995588+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_sword": {
    "id": "wario_land_garlic_sword",
    "name": "Garlic Sword of Greed",
    "description": "The Garlic Sword of Greed is a blade forged from Wario's own obsession, its surface etched with the very essence of his beloved garlic. This weapon not only enhances your attacks by +30% but also causes enemies to recoil in disgust when struck, doubling their chance to drop coins. Each swing of this sword leaves behind a lingering stench that can be smelled from ten paces away, making foes shudder and stumble back in horror.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inflicts Garlic Damage",
      "Boosts Attack by +30%"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Garlic Damage Inflicted",
        "rules": "When you hit an enemy with this sword, the target must make a Constitution saving throw (DC 12) or be incapacitated for 1 minute due to nausea and dizziness. On a successful save, they are only stunned until their next turn."
      },
      {
        "title": "Attack Boost",
        "rules": "While wielding this sword, your attack rolls are increased by +30%. This effect lasts until you use an action to sheathe the sword or until you take damage from another source. You can use this feature a number of times equal to 1 + your Charisma modifier before needing to finish a long rest."
      }
    ],
    "levelRequirementReason": "This sword requires at least 5th level due to its unique properties and the need for greater strength to wield it effectively.",
    "vendorReason": "Wario Land is known for crafting items that reflect his own peculiar obsessions, making this sword a natural fit in his inventory.",
    "shippingDetail": "This item arrives via Warp Whistle Express, ensuring it reaches you swiftly and intact.",
    "usage": {
      "activation": "Instantaneous activation with each attack",
      "duration": "Until sheathed or until damage is taken from another source",
      "endsWhen": "Sheathing the sword or taking damage from a different source",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Garlic Sword of Greed is priced moderately high due to its unique properties and the demand for such a weapon among those who wish to exploit Wario's weakness.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:22:38.796902+00:00",
    "aiReviewedAt": "2026-07-23T20:22:38.796902+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_tongue_cutter": {
    "id": "wario_land_garlic_tongue_cutter",
    "name": "Garlic Tongue Cutter",
    "description": "The Garlic Tongue Cutter is a cursed kitchen utensil forged from volcanic obsidian in the fiery pits of Wario Land. Crafted by Pianta Chuck Express, this tool amplifies garlic's pungent power and can be used only within the game zones of Wario Land or Animatopia. When activated, it not only boosts garlic damage by 30% but also causes the target to sneeze violently, halving their movement for a round due to the overwhelming aroma.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Garlic Boost",
      "Sneeze and Halved Movement"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Boost",
        "rules": "On activation as an action, this item increases garlic damage by 30% for the target. The effect lasts until the end of your next turn."
      },
      {
        "title": "Sneeze and Halved Movement",
        "rules": "When used, the target must succeed on a DC 12 Constitution saving throw or be knocked prone and lose 1d4 movement for the duration of one round. The effect ends when the target moves voluntarily."
      }
    ],
    "levelRequirementReason": "It requires no special level to use, making it accessible to beginners.",
    "vendorReason": "Wario Land is well-known for its unique and cursed items crafted by Pianta Chuck Express.",
    "shippingDetail": "Ships via the express delivery service of Pianta Chuck Express, ensuring quick arrival within Wario Land zones.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The target moves voluntarily",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure it remains a flavorful addition without becoming overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:22:26.450543+00:00",
    "aiReviewedAt": "2026-07-23T20:22:26.450543+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_treasure_heart": {
    "id": "wario_land_garlic_treasure_heart",
    "name": "Garlic Treasure Heart",
    "description": "The Garlic Treasure Heart, a pulsating organ encased in a protective layer of chaotic runes, beats with an erratic rhythm that echoes greed and hunger. Crafted by the unpredictable Chaos Dwarfs, it grants its bearer temporary invisibility within garlic-rich environments but induces nausea when near creatures unaccustomed to its pungent essence. This artifact is said to amplify one's appetite for wealth and power, making even the most frugal hearts covetous.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Boosts Garlic Power",
      "Temporary Invisibility"
    ],
    "vendor": "wario_land",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Boosts Garlic Power",
        "rules": "When activated as an action within a garlic-infested area, this heart increases the user's garlic-related abilities by +20%. The effect lasts for 1 minute. A successful DC 14 Constitution saving throw ends it early."
      },
      {
        "title": "Temporary Invisibility",
        "rules": "Upon activation as an action, the wearer becomes temporarily invisible within a 5-foot radius of garlic-rich zones for up to 1 hour. The invisibility can be dispelled by any attack or magical effect directed at the user. This effect has no save DC and is usable once per long rest."
      }
    ],
    "levelRequirementReason": "The Garlic Treasure Heart's chaotic nature requires a minimum level to harness its unpredictable powers without causing unintended side effects.",
    "vendorReason": "Wario Land, known for their diverse and often bizarre collectibles, carries this rare artifact due to its unique properties that align with their inventory.",
    "shippingDetail": "The Garlic Treasure Heart requires special handling by the Noki Coral Fleet to ensure it arrives in optimal condition. Delivery may take an extra day beyond standard shipping timelines.",
    "usage": {
      "activation": "Action or Reaction (Choose one)",
      "duration": "Instantaneous and Duration Effects",
      "endsWhen": "A successful DC 14 Constitution save ends the effect early, or upon destruction of the heart.",
      "charges": "Unlimited Uses per Long Rest"
    },
    "priceReason": "The Garlic Treasure Heart's rarity and unpredictable nature justify its price in terms of experience points.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T20:22:54.278771+00:00",
    "aiReviewedAt": "2026-07-23T20:22:54.278771+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_garlic_treasure_map": {
    "id": "wario_land_garlic_treasure_map",
    "name": "Garlic Treasure Map",
    "description": "The Garlic Treasure Map is a cryptic parchment stained with ink derived from cursed garlic bulbs. Drawn with a quill dipped in the essence of decay, it reveals hidden groves of garlic and Boos-owned haunted houses with a mere glance. Held in one hand while shouting 'Wario's Got It!', this map grants a temporary frenzy that enhances your strength but risks attracting Boo patrols. Only WarioLand vendors can supply these maps, as they are steeped in the lore of Wario’s land.",
    "price": 1000,
    "icon": "🧄",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Reveals Hidden Garlic Groves",
      "Temporarily Enhances Strength"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Garlic Groves",
        "rules": "When activated, the map momentarily glows, revealing a hidden garlic grove within a 5-foot radius. This effect lasts for 1 minute."
      },
      {
        "title": "Temporarily Enhances Strength",
        "rules": "Upon activation, the user gains advantage on Strength checks and saving throws for 1 hour. However, there is a 20% chance of attracting Boo patrols within 30 feet during this time."
      }
    ],
    "levelRequirementReason": "Beginners can quickly learn to navigate WarioLand's challenges with the help of this map.",
    "vendorReason": "WarioLand is the only place where such maps are made and sold, as they are rooted in local lore.",
    "shippingDetail": "Due to its cursed nature, the map must be shipped via Pipe Express for added protection against corruption.",
    "usage": {
      "activation": "Standard action",
      "duration": "1 hour or until used up",
      "endsWhen": "The effect ends after 1 hour or when the user attracts Boo patrols.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "This map is crafted from cursed garlic and involves intricate WarioLand lore, justifying its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:22:40.331000+00:00",
    "aiReviewedAt": "2026-07-23T20:22:40.331000+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_golden_flagpole": {
    "id": "wario_land_golden_flagpole",
    "name": "Golden Flagpole Top",
    "description": "The Golden Flagpole Top gleams under sunlight, its surface etched with the secrets of a lost stage. Crafted by the enigmatic Secret Stage Developers, this relic is not just an ornament but a symbol of victory and fortune. Touching it grants a surge of strength, fully restoring health and spell slots (once per week), while also bringing a touch of luck to those who wield it, granting advantage on one ability check each day.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥇",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Victory's Embrace",
      "Lucky Charm"
    ],
    "vendor": "wario_land",
    "shippedBy": "Golden Express (Insured)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Victory's Embrace",
        "rules": "When a creature touches the Golden Flagpole Top, they gain full restoration of hit points and spell slots. This effect can only be used once per week."
      },
      {
        "title": "Lucky Charm",
        "rules": "The wielder gains advantage on one ability check each day. The effect is active as long as the item remains in the wielder's possession, but it ends if the wielder is incapacitated or dies."
      }
    ],
    "levelRequirementReason": "Even for a legendary item, basic adventurers can appreciate its value.",
    "vendorReason": "Wario Land's collection of rare items includes this golden relic from his secret stages.",
    "shippingDetail": "Ships via Golden Express with full insurance, ensuring safe delivery to your doorstep.",
    "usage": {
      "activation": "Touch",
      "duration": "Instantaneous; once per week for Victory's Embrace, as long as the item is in possession for Lucky Charm",
      "endsWhen": "If the wielder is incapacitated or dies",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its legendary rarity and utility without overshadowing other items.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:23:32.080814+00:00",
    "aiReviewedAt": "2026-07-23T20:23:32.080814+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_goomba_war_helmet": {
    "id": "wario_land_goomba_war_helmet",
    "name": "Goomba Conscript Helmet",
    "description": "The Goomba Conscript Helmet is a dented steel cap, too small for most but perfect for its diminutive owner. Crafted by the Goomba War Factory in mass production, it bears the stains of countless skirmishes and the salute of fellow conscripts. The helmet's pressed mushroom lining offers emergency sustenance, while its design grants advantage on Survival checks for cooking rations in a pinch. This helmet is not just gear; it’s a symbol of duty and resilience, worn proudly by Goomba infantrymen.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛑️",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Goomba Salute",
      "Emergency Ration"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fungus Front",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Goomba Salute",
        "rules": "When interacting with a Goomba NPC, the wearer gains advantage on Charisma checks. This effect lasts until the end of their next turn."
      },
      {
        "title": "Emergency Ration",
        "rules": "The helmet contains a single serving of pressed mushroom that can be consumed as an action to heal 1d4 hit points. Once used, it is expended and cannot be recharged."
      }
    ],
    "levelRequirementReason": "This helmet is designed for the average Goomba conscript, who typically reaches level 1 by the time they are drafted.",
    "vendorReason": "Wario Land often sells surplus items from the Mushroom Kingdom's military supply stores.",
    "shippingDetail": "Ships via Fungus Front, known for its reliable delivery service.",
    "usage": {
      "activation": "Passive effect; requires no action to activate. Emergency ration is consumed as an action.",
      "duration": "Goomba Salute lasts until the end of the wearer's next turn. Emergency Ration is a one-time use item.",
      "endsWhen": "Goomba Salute ends when the wearer completes their next turn. The emergency ration is expended after consumption.",
      "charges": "Unlimited; the emergency ration can only be used once."
    },
    "priceReason": "The helmet's mass production and practical utility justify its moderate price, offering a balance between cost and benefit.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T20:22:55.794917+00:00",
    "aiReviewedAt": "2026-07-23T20:22:55.794917+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_greed_scammer_treasure": {
    "id": "wario_land_greed_scammer_treasure",
    "name": "Greed Scammer Treasure",
    "description": "The Greed Scammer Treasure appears to be an ancient artifact, its surface etched with chaotic runes that shimmer like molten lava. Crafted by the enigmatic Chaos Dwarfs and sold by Wario Land, this item promises a fortune beyond measure. Instead of granting wealth, it siphons 30% of your health upon activation, leaving you vulnerable to the first attack in combat. It also disables all magic spells for ten seconds, leaving you defenseless against foes with magical attacks.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Health Drain",
      "Spell Disable"
    ],
    "vendor": "wario_land",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Drain",
        "rules": "Activating the Greed Scammer Treasure causes you to lose 30% of your current hit points. This effect ends immediately upon taking damage in combat."
      },
      {
        "title": "Spell Disable",
        "rules": "Disables all magic spells for ten seconds, starting when the item is activated. You can make a Wisdom saving throw with a DC of 15 to end this effect early."
      }
    ],
    "levelRequirementReason": "Even a novice adventurer should be wary of such an artifact.",
    "vendorReason": "Wario Land's questionable wares often include dubious treasures like the Greed Scammer Treasure.",
    "shippingDetail": "The artifact is delivered with a warning slip from Wario Land, advising adventurers to use it at their own risk.",
    "usage": {
      "activation": "Object interaction",
      "duration": "Instantaneous effect; ends when the user takes damage in combat or upon spell disable ending",
      "endsWhen": "Taking damage in combat or upon spell disable ending",
      "charges": "Unlimited"
    },
    "priceReason": "Despite its rarity, this item offers a significant risk for minimal gain.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T20:23:28.860701+00:00",
    "aiReviewedAt": "2026-07-23T20:23:28.860701+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_green_shell": {
    "id": "wario_land_green_shell",
    "name": "Dented Green Shell",
    "description": "The Dented Green Shell is a battle-worn relic of a bygone era, its once pristine green hue now marred with dents and scratches from countless skirmishes. Crafted by the Standard Koopa Troop Equipment forres, this shell grants you a tactical edge when used against unaware foes, providing an advantage on attack rolls in such situations. However, if your enemy is prepared, it can unpredictably ricochet back towards you, testing your reflexes and fortitude.",
    "category": "equipment",
    "price": 1000,
    "icon": "🟢",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Classic tactic",
      "Ricochets unpredictably"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell Shock Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Classic tactic",
        "rules": "When used against an unaware enemy, this shell grants the user advantage on attack rolls. The effect lasts until the start of your next turn."
      },
      {
        "title": "Ricochets unpredictably",
        "rules": "There is a 40% chance that after being thrown, the shell will ricochet back towards its thrower. On a successful DC 13 Dexterity saving throw, you can redirect it to another target within range; otherwise, it explodes in your hands, dealing 1d6 bludgeoning damage."
      }
    ],
    "levelRequirementReason": "This shell is crafted for beginners who are just starting their adventure and need a reliable tool.",
    "vendorReason": "Wario Land, with his expertise in collecting and trading rare items, ensures that this battle-tested relic finds its way into capable hands.",
    "shippingDetail": "The shell is carefully packed to ensure it arrives in perfect condition, delivered by Shell Shock Shipping's fastest couriers.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous; the effect ends after your next turn or when you are hit by the ricocheted shell",
      "endsWhen": "The start of your next turn, or if it ricochets back and hits you",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's balanced rarity and utility for a beginner adventurer.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T20:23:09.543577+00:00",
    "aiReviewedAt": "2026-07-23T20:23:09.543577+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_hammer_bro_hammer": {
    "id": "wario_land_hammer_bro_hammer",
    "name": "Hammer Bro's Last Throw",
    "description": "The Hammer Bro's Last Throw is a bent hammer forged from iron and imbued with the spirit of its former wielder, a Hammer Bro who met his end on Bridge 7. This weapon's bent shaft gives it a disadvantage on attack rolls, but its warping also grants +1 to hit against armored enemies. Upon throwing, the hammer returns to your hand after striking within 30 feet. The item was crafted by elite Hammer Infantry and carries the weight of their final stand.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Warped Attack",
      "Spirit Aid"
    ],
    "vendor": "wario_land",
    "shippedBy": "Throwback Shipping",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Warped Attack",
        "rules": "The hammer has disadvantage on attack rolls due to its bent shaft. The hammer returns to your hand after being thrown within a 30-foot range."
      },
      {
        "title": "Spirit Aid",
        "rules": "+1 bonus to hit against armored enemies; requires no action, duration is until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Players must be at least level 5 to effectively use this weapon's unique properties.",
    "vendorReason": "Wario Land has a deep connection with the Hammer Bros and sells items from their fallen comrades.",
    "shippingDetail": "Ships via special delivery, ensuring safe arrival within one week of order.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous; returns to hand immediately upon striking a target or missing",
      "endsWhen": "Exhausted after one use per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The hammer's uncommon status and unique properties justify its price, aligning with the expected value for such an item.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-23T20:23:07.706876+00:00",
    "aiReviewedAt": "2026-07-23T20:23:07.706876+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_ice_flower_frost": {
    "id": "wario_land_ice_flower_frost",
    "name": "Ice Flower Frost Vial",
    "description": "The Ice Flower Frost Vial contains a crystalline essence extracted from the frostbitten blooms of the Winter Offensive. This vial, crafted by the Cryogenic Warfare Division, can create treacherous icy terrains that turn any ground it touches into difficult terrain for ten minutes. Enemies who step onto this frozen ground must succeed on a Dexterity saving throw or fall prone, immobilized until they move away from the area. The vial is particularly effective in cold environments but weakens and melts entirely when exposed to hot conditions.",
    "category": "equipment",
    "price": 5400,
    "icon": "❄️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Icy Terrain",
      "Prone on Entry"
    ],
    "vendor": "wario_land",
    "shippedBy": "Frozen Freight",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Icy Terrain",
        "rules": "When thrown, the vial creates a 15-foot square of difficult terrain that lasts for 10 minutes. Enemies within this area must make a Dexterity saving throw (DC 14) or fall prone and remain immobilized until they move out of the area."
      },
      {
        "title": "Prone on Entry",
        "rules": "Any creature entering an area created by the vial must succeed on a Dexterity saving throw (DC 14) or become prone. They are immobilized until they leave the area."
      }
    ],
    "levelRequirementReason": "This vial requires a minimum character level of 6 to handle its cold magic and strategic deployment.",
    "vendorReason": "Wario Land, known for his expertise in cold weather combat equipment, offers this vial as part of his Winter Offensive gear line.",
    "shippingDetail": "Ships via Cold Chain Express ensuring the vial remains frozen during transit.",
    "usage": {
      "activation": "Action to throw and create the icy terrain",
      "duration": "10 minutes, or until destroyed by heat",
      "endsWhen": "Exhausted when exposed to hot conditions, destroyed in flames",
      "charges": "Unlimited uses"
    },
    "priceReason": "The vial's rarity and the advanced cold magic it utilizes justify its high price.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-23T20:23:37.556714+00:00",
    "aiReviewedAt": "2026-07-23T20:23:37.556714+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_isle_delfino_keychain": {
    "id": "wario_land_isle_delfino_keychain",
    "name": "Isle Delfino Keychain",
    "description": "This miniature key is crafted from polished coral and features a gleaming starfish charm. It was discovered by the Noki Coral Fleet during their exploration of Isle Delfino's hidden coves. This keychain allows access to secret underwater caverns and, when worn, grants a minor speed boost while swimming, making you glide through water with surprising ease. Beware, however; its proximity to Shine Sprites can induce fleeting hallucinations that may distort your perception.",
    "price": 1000,
    "icon": "🔮",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Access to Hidden Caverns",
      "Swimming Speed Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Access to Hidden Caverns",
        "rules": "Activates as a bonus action. Grants temporary access to restricted underwater areas for 10 minutes per long rest."
      },
      {
        "title": "Swimming Speed Boost",
        "rules": "Passive effect while worn; increases swimming speed by +5 feet, but reduces Stealth checks by -2 due to increased visibility in the water."
      }
    ],
    "levelRequirementReason": "This keychain is designed for adventurers just starting their journey into Isle Delfino's mysteries.",
    "vendorReason": "Wario Land specializes in items that enhance exploration and adventure, making this keychain a natural addition to their offerings.",
    "shippingDetail": "Ships directly from Isle Delfino; expedited delivery for those eager to explore its hidden secrets.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 minutes per long rest, recharges after a short or long rest",
      "endsWhen": "Rest period ends",
      "charges": "Unlimited"
    },
    "priceReason": "The keychain's rarity and unique abilities justify its higher price, offering significant utility to adventurers.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-23T20:23:21.623165+00:00",
    "aiReviewedAt": "2026-07-23T20:23:21.623165+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_item_name_here": {
    "id": "wario_land_item_name_here",
    "name": "Oracle’s Vessel Core",
    "description": "The Oracle’s Vessel Core is a dark crystal imbued with necromantic energy, shimmering with an eerie blue glow. Crafted by the enigmatic Gehenna Academy, it grants forbidden knowledge of enemy weaknesses. However, its use comes at a price as minor hallucinations cloud your vision for moments after each activation. This relic has the uncanny ability to unlock hidden paths in Diamond City, making navigation through treacherous terrain a breeze.",
    "price": 1000,
    "icon": "⚔",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grants insight into enemy weaknesses",
      "Causes minor hallucinations"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Revealing Weaknesses",
        "rules": "As an action, you can use the Oracle’s Vessel Core to gain advantage on one Intelligence (Arcana) or Perception check against a single creature. The effect lasts until the start of your next turn. This ability cannot be used more than once per long rest."
      },
      {
        "title": "Clouded Vision",
        "rules": "For 1 minute after using the Oracle’s Vessel Core, you are blinded by minor hallucinations. During this time, all creatures within 30 feet have advantage on Perception checks made to notice you and disadvantage on Dexterity (Stealth) checks."
      }
    ],
    "levelRequirementReason": "The core's necromantic power requires a certain level of arcane knowledge to wield.",
    "vendorReason": "Wario Land, with his vast network in Diamond City, manages to procure rare artifacts like the Oracle’s Vessel Core.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring safe and timely arrival of your order.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the start of your next turn for 'Revealing Weaknesses'; 1 minute for 'Clouded Vision'",
      "endsWhen": "The duration ends or you take damage",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "Balanced at 1000 XP to ensure it remains a powerful yet attainable relic for players of appropriate level.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:23:38.835773+00:00",
    "aiReviewedAt": "2026-07-23T20:23:38.835773+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_jester_soul_bangle": {
    "id": "wario_land_jester_soul_bangle",
    "name": "Jester Soul Bangle",
    "description": "A cursed accessory that grants entropy powers",
    "category": "equipment",
    "price": 7500,
    "icon": "🎭",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Deals 3d8 damage to targets with chaotic or unpredictable behavior",
      "Grants 1d4 bonus to roll when attacking or dodging",
      "Causes the wearer to laugh uncontrollably for 1 round after each use",
      "Triggers a 1d6 entropy burst that damages enemies within 3m",
      "Only usable in both Wario Land and Animatopia",
      "Crafted by: The Cosmic Jester cult using entropy core fragments"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 8
  },
  "wario_land_king_boo_portrait_scrap": {
    "id": "wario_land_king_boo_portrait_scrap",
    "name": "King Boo Portrait Scrap",
    "description": "A tattered scrap of King Boo's cursed portrait from Wario Land's haunted gallery. This fragment exudes a malevolent energy, and even the faintest touch can send chills down one’s spine. Those who gaze too long risk becoming frightened and suffering a significant Wisdom saving throw with a DC 13. The scrap also subtly warps reality, creating an illusory door that only appears to those with a connection to King Boo's haunts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cursed Gaze",
      "Haunted Door"
    ],
    "vendor": "wario_land",
    "shippedBy": "Haunted Handlers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cursed Gaze",
        "rules": "When a creature looks at the scrap for more than one second, it must make a Wisdom saving throw with a DC of 13 or become frightened. This effect lasts for 1 minute and provides advantage on Wisdom (Perception) checks made to notice supernatural activity in haunted areas."
      },
      {
        "title": "Haunted Door",
        "rules": "The scrap can be activated once per day to create an illusory door that appears within a 10-foot square area. This door lasts for 1 hour and is only visible to creatures with a connection to King Boo's haunts."
      }
    ],
    "levelRequirementReason": "Creating a portal and enduring the cursed gaze require a character to be at least third level.",
    "vendorReason": "Wario Land, as the creator of the haunted gallery, holds the most knowledge about King Boo's artifacts.",
    "shippingDetail": "Delivered by Haunted Handlers, who ensure the scrap is handled with care and respect for those with a connection to King Boo’s haunts.",
    "usage": {
      "activation": "Once per day as an action",
      "duration": "1 hour or until dismissed",
      "endsWhen": "The effect ends when the door is dismissed or after 1 hour, whichever comes first; cursed gaze lasts for 1 minute upon failure of a saving throw.",
      "charges": "1 use"
    },
    "priceReason": "The price reflects the rare and cursed nature of King Boo's portrait scrap, making it a valuable and dangerous artifact.",
    "priceOriginal": 6700,
    "priceReviewedAt": "2026-07-23T20:23:47.645131+00:00",
    "aiReviewedAt": "2026-07-23T20:23:47.645131+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_koopa_defector_insignia": {
    "id": "wario_land_koopa_defector_insignia",
    "name": "Koopa Defector Insignia (Fake)",
    "description": "The Koopa Defector Insignia (Fake) is a plastic badge with a crude image of a Koopa Trooper in what appears to be a defiant pose. Crafted by Wario Land's notorious forgery shop, it's designed to mislead the unsuspecting into believing you've defected from their ranks. This badge offers temporary advantage on Deception checks but has a 50% chance that a Koopa will immediately suspect your true intentions and attack you instead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎖️",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Deceptive Advantage",
      "Suspicious Reception"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Badge Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deceptive Advantage",
        "rules": "When worn, the badge grants advantage on Deception checks against Koopa Trooper targets. However, there is a 50% chance that the Koopa will realize it's fake and react with suspicion or hostility."
      },
      {
        "title": "Suspicious Reception",
        "rules": "If a Koopa Trooper notices the badge as suspicious (rolled on a d20), you are immediately attacked. This effect has no save DC and can occur once per day."
      }
    ],
    "levelRequirementReason": "The badge is simple enough to be used by characters of any level, but it relies heavily on the user's Charisma checks.",
    "vendorReason": "Wario Land runs a notorious forgery shop known for creating items that are just good enough to fool the less discerning.",
    "shippingDetail": "The courier ensures discreet delivery, but the badge's plastic nature might rattle if jostled during transit.",
    "usage": {
      "activation": "Worn as an accessory",
      "duration": "Instantaneous effect; once per day",
      "endsWhen": "Used or destroyed by a critical hit",
      "charges": "Unlimited"
    },
    "priceReason": "The badge is crafted with common materials but relies on the user's performance, making it moderately priced.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T20:23:52.013716+00:00",
    "aiReviewedAt": "2026-07-23T20:23:52.013716+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_koopa_king_throne_shard": {
    "id": "wario_land_koopa_king_throne_shard",
    "name": "Shard of the Koopa King’s Throne",
    "description": "The Shard of the Koopa King’s Throne is a molten fragment from Bowser's volcanic throne, its surface still glowing with residual lava. Crafted in the heart of Mount Termina, this shard radiates raw power, pulsing with the unyielding will of the Koopa King himself. When sat upon, it grants resistance to fire and a +2 bonus on saving throws against charm and fear effects, ensuring those who claim its seat remain steadfast in their resolve.",
    "category": "equipment",
    "price": 3000,
    "icon": "🪑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Throne's Fury",
      "Volcanic Cast"
    ],
    "vendor": "wario_land",
    "shippedBy": "Lava Crate",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Throne's Fury",
        "rules": "When sat upon, the Shard grants resistance to fire damage and a +2 bonus on saving throws against charm and fear effects. This effect lasts until the end of your next turn."
      },
      {
        "title": "Volcanic Cast",
        "rules": "Once per short or long rest, you can cast Fireball as a 7th-level spell with a range of 120 feet and an area of a 40-foot radius sphere centered on the shard. This effect requires your action to activate."
      }
    ],
    "levelRequirementReason": "This shard requires a minimum level of 5 due to its intense magical properties and the power it commands.",
    "vendorReason": "Wario Land, with his vast knowledge of Bowser’s lair and unique access to its treasures, is the only one who can offer such an artifact.",
    "shippingDetail": "The shard arrives encased in a specially insulated container to prevent any accidental damage during transit.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous for Throne's Fury; Volcanic Cast lasts until the end of your next turn",
      "endsWhen": "Throne's Fury ends at the start of your next turn, and Volcanic Cast is expended upon use",
      "charges": "1 per short or long rest"
    },
    "priceReason": "The shard’s unique origin, raw magical power, and limited availability justify its price.",
    "priceOriginal": 16200,
    "priceReviewedAt": "2026-07-23T20:24:07.797328+00:00",
    "aiReviewedAt": "2026-07-23T20:24:07.797328+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_koopa_rebel_claw_gauntlet": {
    "id": "wario_land_koopa_rebel_claw_gauntlet",
    "name": "Koopa Rebel Claw Gauntlet",
    "description": "The Koopa Rebel Claw Gauntlet is a compacted, forge-hardened gauntlet that transforms into sharp, retractable claws when activated. Crafted by the rebel factions of the Mushroom Kingdom, its metal plating gleams with an orange hue and features intricate patterns of rebellious symbols. The gauntlet offers a gauntleted punch that deals +1d4 slashing damage and grants advantage on grapples. However, it comes with a risk; there's a 15% chance per day that the claws will jam during retraction, requiring an immediate DC 12 Dexterity saving throw or be rendered unusable for one hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Unarmed Strike",
      "Claws Jam"
    ],
    "vendor": "wario_land",
    "shippedBy": "Claw Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unarmed Strike",
        "rules": "When you make a free unarmed strike while wearing the gauntlet, it deals +1d4 slashing damage. You also have advantage on grapple checks made against creatures."
      },
      {
        "title": "Claws Jam",
        "rules": "There is a 15% chance per day that your claws will jam during retraction. If this occurs, you must succeed on a DC 12 Dexterity saving throw or the gauntlet becomes unusable for one hour."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and specialized materials require a minimum level to handle.",
    "vendorReason": "Wario Land has extensive connections with rebel factions, making him the go-to vendor for such items.",
    "shippingDetail": "Ships via the Claw Courier; expect delivery within a fortnight.",
    "usage": {
      "activation": "Bonus action to deploy or retract claws",
      "duration": "Instantaneous deployment and retraction",
      "endsWhen": "Jammed for one hour after failing the saving throw",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects its uncommon craftsmanship, specialized materials, and unique combat utility.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T20:24:44.455093+00:00",
    "aiReviewedAt": "2026-07-23T20:24:44.455093+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_koopa_shell_bomb": {
    "id": "wario_land_koopa_shell_bomb",
    "name": "Koopa Shell Bomb (Defective)",
    "description": "The Koopa Shell Bomb (Defective) is a peculiar relic of Wario Land Demolitions, known for its unpredictable nature. Crafted from recycled Koopa shells and questionable explosive materials, it promises fire damage but often fails to detonate as expected. When it does explode, the blast radius hovers around 10 feet, leaving behind a smoldering crater. Despite its flaws, Koopas seem to revere this weapon, offering intimidation advantages when dealing with them.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Explosive Imprecision",
      "Dud Rebound"
    ],
    "vendor": "wario_land",
    "shippedBy": "Explosive Parcel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Explosive Imprecision",
        "rules": "When thrown as an action, the Koopa Shell Bomb deals 2d6 fire damage within a 10-foot radius. There is a 30% chance it fails to explode (a dud). If it does not detonate, the shell bounces back toward the thrower, who must succeed on a Dexterity saving throw DC 13 or take 1d4 bludgeoning damage."
      },
      {
        "title": "Koopa Respect",
        "rules": "When used against Koopas, the user gains advantage on Intimidation checks. This effect persists until the end of your next turn after using the item."
      }
    ],
    "levelRequirementReason": "Basic familiarity with throwing and combat is required to use this weapon effectively.",
    "vendorReason": "Wario Land Demolitions specializes in questionable yet effective weaponry, including this defective but reliable shell bomb.",
    "shippingDetail": "Ships with a special 'No Dud' guarantee. Explosives require additional handling fees and shipping delays.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous",
      "endsWhen": "After exploding or bouncing back",
      "charges": "Unlimited, but one charge per use"
    },
    "priceReason": "Balanced at this price point to reflect its unpredictable nature and limited reliability.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-23T20:24:05.460513+00:00",
    "aiReviewedAt": "2026-07-23T20:24:05.460513+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_koopa_shell_shield_fragment": {
    "id": "wario_land_koopa_shell_shield_fragment",
    "name": "Koopa Shell Shield Fragment",
    "description": "A cracked piece of a Koopa's shell, this shield fragment is an improvised defense used by frontline Toads. Crafted in the heat of battle by the Koopa Frontline Forges, it offers a unique form of protection that defies its fragile appearance. When struck, the shell deflects incoming ranged attacks with surprising resilience, while whispers of loyalty from the spirits of fallen Koopas subtly influence your interactions with Toads. Though brittle and prone to shattering under impact, this fragment can be repaired using basic glue, giving it a second chance at service.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Shell Deflection",
      "Whispers of Loyalty"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell Shipment",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shell Deflection",
        "rules": "When an attacker makes a ranged attack against you, roll a d20. On a result of 15 or higher, the attack is deflected and misses you."
      },
      {
        "title": "Whispers of Loyalty",
        "rules": "You have disadvantage on Charisma checks when interacting with Toads due to the spirits' influence."
      }
    ],
    "levelRequirementReason": "This fragment is simple enough for beginners and those just starting their journey.",
    "vendorReason": "Wario, known for his resourcefulness, often sells such practical yet improvised items to adventurers in need.",
    "shippingDetail": "Ships via Shell Shipment's reliable but slow method, ensuring the fragment arrives intact and ready for use.",
    "usage": {
      "activation": "Instantaneous (automatic on ranged attack)",
      "duration": "Until destroyed or repaired",
      "endsWhen": "Destroyed upon shattering or when repaired",
      "charges": "Unlimited"
    },
    "priceReason": "This item offers a unique defensive ability, but its repairability and limited effectiveness justify the cost.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-23T20:24:18.792777+00:00",
    "aiReviewedAt": "2026-07-23T20:24:18.792777+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_koopa_troop_shell_horn": {
    "id": "wario_land_koopa_troop_shell_horn",
    "name": "Koopa Troop Shell Horn",
    "description": "The Koopa Troop Shell Horn is a meticulously crafted trumpet made from the polished shell of a Koopa Trooper, known for its shrill and piercing sound that echoes across the Mushroom Kingdom. It can be used to signal allies or instill fear into enemies. Blowing it grants nearby friends enhanced mobility but also draws attention, making stealthy maneuvers challenging. The horn's unique construction ensures that its sound reverberates with a distinct echo among Koopa Troopers, giving them an edge in intimidation tactics.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐚",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Blow Horn",
      "Koopa Echoes"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shell Sound Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Blow Horn",
        "rules": "When activated as a bonus action, the Koopa Troop Shell Horn grants all allies within 60 feet a +5 foot speed increase for 1 minute. This effect ends if the horn is blown again or upon the expiration of its duration."
      },
      {
        "title": "Koopa Echoes",
        "rules": "When used, this horn provides allies wearing Koopa shells with advantage on Intimidation checks against creatures also wearing Koopa armor for 1 minute. This effect ends when the horn is blown again or upon the expiration of its duration."
      }
    ],
    "levelRequirementReason": "The basic mechanics and sound properties make it suitable only for characters with some experience.",
    "vendorReason": "Wario, being a seasoned Mushroom Kingdom traveler, has connections to the Troop Signal Corps and can procure such unique items.",
    "shippingDetail": "The horn is carefully packed in a shell-shaped box for safe delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Blown again or at the end of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "The horn's rarity and unique functionality justify a price slightly above common items.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:24:33.498787+00:00",
    "aiReviewedAt": "2026-07-23T20:24:33.498787+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_lakitu_cloud_wisp": {
    "id": "wario_land_lakitu_cloud_wisp",
    "name": "Lakitu Cloud Wisp",
    "description": "A vial containing a fragment of cloud plucked from a Lakitu bomber after it was shot down. This bottle's contents can be released to float 5 feet off the ground, providing a gentle levitation that grants temporary flight without fall damage for up to an hour. However, in wet weather or when disturbed by rain clouds, the effect may dissipate prematurely with no warning. The cloud also has a chance of attracting the attention of Lakitu himself, who might launch an air raid from his floating fortress above.",
    "category": "equipment",
    "price": 1000,
    "icon": "☁️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Release Cloud",
      "Attract Lakitu"
    ],
    "vendor": "wario_land",
    "shippedBy": "Airmail Actual",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Release Cloud",
        "rules": "As a bonus action, you can release the cloud fragment to float 5 feet off the ground. This effect provides temporary flight without fall damage for up to an hour per use. The duration may be shortened if the cloud is disturbed by rain or other weather conditions."
      },
      {
        "title": "Attract Lakitu",
        "rules": "There is a 10% chance (DC 12 Dexterity saving throw) that releasing the cloud will attract the attention of a nearby Lakitu. If successful, he may launch an air raid from his floating fortress, requiring you to defend against his attacks as if in combat."
      }
    ],
    "levelRequirementReason": "This item is balanced for lower-level adventurers who require minor tactical advantages without overpowered capabilities.",
    "vendorReason": "Wario Land has a network of aerial salvage operations that recover interesting items like this cloud fragment from various skirmishes.",
    "shippingDetail": "Ships via fast courier, delivered within one hour in most areas.",
    "usage": {
      "activation": "Bonus action to release the cloud; Dexterity saving throw required if disturbed by rain or other weather conditions.",
      "duration": "Up to an hour per use, reduced if disturbed by Lakitu or rain",
      "endsWhen": "Duration ends when the effect is no longer active, or if disturbed by Lakitu's air raid",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item provides a minor but useful tactical advantage to adventurers without being overpowered.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T20:24:33.377081+00:00",
    "aiReviewedAt": "2026-07-23T20:24:33.377081+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_lost_starman_fragment": {
    "id": "wario_land_lost_starman_fragment",
    "name": "Lost Starman Fragment",
    "description": "A fragment of a shattered Starman power-up, this glowing shard pulses with residual energy from the Power-Up Battlefield. Crafted from the debris of lost battles, it emits a soft glow that can be seen from miles away, attracting scavengers and power-up hunters alike. When held, it grants temporary invulnerability to one attack per day, though the fragment itself is prone to fading, dimming its light by half after each use.",
    "category": "equipment",
    "price": 5800,
    "icon": "⭐",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Hold Fragment",
      "Fragment Dims"
    ],
    "vendor": "wario_land",
    "shippedBy": "Starry Shipment",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Hold Fragment",
        "rules": "Activate as a bonus action. Gain temporary hit points equal to 1d6 plus your Constitution modifier when you are the target of an attack (once per day). The effect ends immediately if you take damage from another source."
      },
      {
        "title": "Fragment Dims",
        "rules": "Each time the fragment is used, it has a 50% chance to dim its glow, reducing its effectiveness by half until it can be recharged or replaced. After three uses, it becomes permanently unusable."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to use effectively in battle.",
    "vendorReason": "Wario Land has a vested interest in the recovery of lost power-ups and artifacts from the battlefield.",
    "shippingDetail": "Ships via the Starry Shipment, ensuring safe delivery through the night sky to eager collectors.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect (ends when the attack hits or you take damage from another source)",
      "endsWhen": "The use ends immediately if you are hit by an attack or take damage from a different source",
      "charges": "1/Day"
    },
    "priceReason": "The fragment's rarity and limited utility justify its high price in the market.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-23T20:24:51.244806+00:00",
    "aiReviewedAt": "2026-07-23T20:24:51.244806+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_luigi_poltergust_remains": {
    "id": "wario_land_luigi_poltergust_remains",
    "name": "Shattered Poltergust 9000 Remains",
    "description": "The Shattered Poltergust 9000 Remains are a decrepit, humming backpack that once belonged to Luigi. The vacuum's frame is cracked and its inner workings exposed, yet it still hums with residual power. Despite its state, it retains the ability to capture incorporeal undead, though its screams of captured ghosts render anyone who carries it constantly distracted. Only Professor E. Gadd can repair this relic into a legendary Poltergust 9001.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 1,
    "rarity": "very_rare",
    "effects": [
      "Capture Ghosts",
      "Incorporeal Noise"
    ],
    "vendor": "wario_land",
    "shippedBy": "Haunted Crate",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Capture Ghosts",
        "rules": "As an action, the wielder can attempt to capture an incorporeal undead. The target must be within 30 feet and not actively attacking another creature. No save is required; the ghost is imprisoned until released by the wielder or a greater force."
      },
      {
        "title": "Incorporeal Noise",
        "rules": "While carrying this item, any attempt at stealth is at disadvantage due to its constant hum and captured ghosts' screams. This noise persists even when not in use."
      }
    ],
    "levelRequirementReason": "The intricate mechanics of the Poltergust 9000 require a certain level of spellcasting proficiency.",
    "vendorReason": "Wario's Land is known for its collection of rare and eccentric artifacts, including Luigi’s belongings.",
    "shippingDetail": "Ships via Haunted Crate with special delivery to ensure it arrives intact.",
    "usage": {
      "activation": "Action: Use as an action to attempt capturing a ghost.",
      "duration": "Instantaneous; lasts until released by the wielder or until another incorporeal undead is captured in its place.",
      "endsWhen": "Exhausted after three uses per day, recharges at dawn.",
      "charges": "3/day"
    },
    "priceReason": "Balanced as a very rare item with limited daily use and a unique effect.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-23T20:25:32.893493+00:00",
    "aiReviewedAt": "2026-07-23T20:25:32.893493+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_magikoopa_wand_splinter": {
    "id": "wario_land_magikoopa_wand_splinter",
    "name": "Magikoopa Wand Splinter",
    "description": "This splinter of a Magikoopa's wand glows with chaotic magic, its fractured form still crackling with untamed power. It can cast one cantrip per day at random, and if you wave it in the air, it may create bizarre shapes that mislead your foes. Beware, though; there is a 40% chance the spell will target an unintended creature. This relic was crafted by the Koopa Wizard Corps (Battle Casualties), and its unstable magic makes it both a treasure and a danger.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cantrip Chaos",
      "Misguided Magic"
    ],
    "vendor": "wario_land",
    "shippedBy": "Mystical Mistakes Inc.",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cantrip Chaos",
        "rules": "Activates as an action. Casts one random cantrip per day, chosen by the DM from a pre-determined table of cantrips. The spell targets one creature within range (30 feet). There is a 40% chance that the spell will target a different creature than intended."
      },
      {
        "title": "Misguided Magic",
        "rules": "When waved in the air, creates random shapes for up to 1 minute. The shapes can be used to mislead opponents or create minor illusions within a 20-foot cube. This effect ends if the wand is attacked or if it runs out of charges."
      }
    ],
    "levelRequirementReason": "The splinter requires a certain level of magical understanding to control its chaotic magic.",
    "vendorReason": "Wario Land has connections with the Koopa Wizard Corps and can acquire rare relics like this wand splinter.",
    "shippingDetail": "Ships via express courier, ensuring safe delivery but not instantaneous arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Cantrip Chaos; up to 1 minute for Misguided Magic",
      "endsWhen": "Attack on the wand or running out of charges",
      "charges": "Uses 1 charge per day"
    },
    "priceReason": "The price reflects its rarity, magical potential, and the Koopa Wizard Corps' involvement.",
    "priceOriginal": 6900,
    "priceReviewedAt": "2026-07-23T20:25:08.392243+00:00",
    "aiReviewedAt": "2026-07-23T20:25:08.392243+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mario_bro_medal": {
    "id": "wario_land_mario_bro_medal",
    "name": "Mario Bros. Medal",
    "description": "The Mario Bros. Medal, a tarnished trophy of posthumous honor, is a medal awarded by the Mushroom Kingdom Awards to fallen comrades of the plumber brothers. Its surface glows faintly when near other plumbers, aiding them in detecting hidden allies. Though it brings luck in battle with one daily attack roll advantage, it also draws unwanted attention from Mario loyalists who seek its return, imposing a disadvantage on Charisma checks with them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏅",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Glows for plumber allies",
      "Daily attack roll advantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Medal Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glows for plumber allies",
        "rules": "Advantage on Investigation checks within 30 feet when trying to detect hidden Mario allies."
      },
      {
        "title": "Daily attack roll advantage",
        "rules": "The wearer gains a +1 bonus to one attack roll per day. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "This medal serves as an honor for all plumbers, requiring no level to obtain.",
    "vendorReason": "Wario Land sells this item in his vast and varied collection of memorabilia from the Mushroom Kingdom.",
    "shippingDetail": "Ships within one business day with a courier service that specializes in fragile, sentimental items.",
    "usage": {
      "activation": "Instantaneous use",
      "duration": "One attack roll per day (recharges at dawn)",
      "endsWhen": "Recharges at the beginning of each long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The medal's sentimental and functional value makes it a fair price for those seeking to honor their fallen comrades.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-23T20:25:12.669279+00:00",
    "aiReviewedAt": "2026-07-23T20:25:12.669279+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mario_cap_battle_worn": {
    "id": "wario_land_mario_cap_battle_worn",
    "name": "Mario's 'Battle-Worn' Cap (Probably Just Dirty)",
    "description": "The 'Battle-Worn' Cap, a red cap with unmistakable ketchup stains and a musty odor, is said to be Mario's by Wario. This relic brings courage but also reeks of plumber work, making interactions with nobles awkward. With it on, you can perform an extra jump in battle, adding five feet to your leap distance, though you tumble and land prone. Toad soldiers rally around you, granting you advantage when trying to persuade them. Wario's 'Relics' Division crafted this cap from the remnants of past battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧢",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Courageous Leap",
      "Toads Salute"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Courageous Leap",
        "rules": "When you use an action to jump, add +5 feet to your jump distance. You fall prone and take no damage on landing."
      },
      {
        "title": "Toads Salute",
        "rules": "For one hour after putting the cap on, gain advantage on Charisma (Persuasion) checks with Toad Rebels who believe you are Mario."
      }
    ],
    "levelRequirementReason": "This cap is not overly powerful and can be used by beginners to bolster their confidence.",
    "vendorReason": "Wario Land's 'Relics' Division specializes in crafting items from past battles, including this cap.",
    "shippingDetail": "Ships via Wafting Cloud Express, a reliable but slow service known for delivering even the most delicate relics safely.",
    "usage": {
      "activation": "When you use an action to jump.",
      "duration": "Instantaneous and ends when you land on your feet.",
      "endsWhen": "The effect ends if you take damage while in the air or fall prone.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "The cap is crafted from rare and battle-worn materials, making it a valuable but not overpriced item for beginners.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T20:25:35.888997+00:00",
    "aiReviewedAt": "2026-07-23T20:25:35.888997+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mario_final_jump_boot": {
    "id": "wario_land_mario_final_jump_boot",
    "name": "Mario’s Final Jump Boot (Left Only)",
    "description": "Mario’s Final Jump Boot (Left Only) is a charred, leather boot that still smolders from its fiery ordeal atop the castle roof. The sole bears the mark of molten stone, and the laces are singed to the point where they fray when tugged. This boot allows Mario to leap with unmatched agility and power, as if defying gravity itself. It’s said that only a true hero could wear such a boot without succumbing to its infernal touch.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥾",
    "stock": 1,
    "rarity": "very_rare",
    "effects": [
      "Extra Jump Distance",
      "Dimensional Leap"
    ],
    "vendor": "wario_land",
    "shippedBy": "One Boot Box",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Extra Jump Distance",
        "rules": "While wearing this boot, Mario gains +15 feet of jump distance and speed. No running start is required for these leaps."
      },
      {
        "title": "Dimensional Leap",
        "rules": "Once per day, Mario can cast Dimension Door as a spell-like ability (only vertically or horizontally forward, as if jumping). This effect has no range limit but requires a successful Dexterity saving throw (DC 15) to avoid landing in an inconvenient location."
      }
    ],
    "levelRequirementReason": "This boot is crafted from the very essence of Mario’s legendary leap, requiring the user to be a seasoned adventurer.",
    "vendorReason": "Wario keeps this item for sentimental reasons and occasionally sells it to those who can appreciate its unique history.",
    "shippingDetail": "The boots are shipped in a custom wooden crate lined with wool, ensuring they arrive in perfect condition.",
    "usage": {
      "activation": "Instantaneous action for Dimensional Leap; passive effect for Extra Jump Distance.",
      "duration": "Instantaneous and permanent (Extra Jump Distance); daily use limit on Dimensional Leap.",
      "endsWhen": "Dimension Door fails the saving throw; no ending conditions for Extra Jump Distance.",
      "charges": "1/Day"
    },
    "priceReason": "The boot’s rarity and unique abilities justify its moderate price, making it a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-23T20:26:07.494870+00:00",
    "aiReviewedAt": "2026-07-23T20:26:07.494870+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mega_mushroom_residue": {
    "id": "wario_land_mega_mushroom_residue",
    "name": "Mega Mushroom Residue",
    "description": "The Mega Mushroom Residue, a desiccated remnant scraped from the massive footprints of siege giants, retains a faint green glow. It is said to imbibe the very essence of growth and resilience, capable of transforming its wielder into a formidable Large form for a short time. This residue, though potent, comes with a price, as it can only be used once per week and may fail to take effect entirely due to its incomplete nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Growth Transformation",
      "Resilient Form"
    ],
    "vendor": "wario_land",
    "shippedBy": "Big Box Shipping",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Growth Transformation",
        "rules": "Activate as an action. The user grows to Large size for 1 minute, gaining a +2 bonus to Strength and Constitution checks or saving throws. While in this form, the user's speed is reduced by 10 feet. This effect can only be used once per week."
      },
      {
        "title": "Resilient Form",
        "rules": "While in Large size, the user gains resistance to bludgeoning damage and a +2 bonus to AC. The effects of this item have a 30% chance of being incomplete, lasting only 1 round if so."
      }
    ],
    "levelRequirementReason": "This item requires a level 8 character due to its potent growth capabilities and the risk associated with using it.",
    "vendorReason": "Wario Land, known for his expertise in siege giant artifacts, carries this rare residue as part of his collection.",
    "shippingDetail": "Shipping may take up to two additional days due to the fragile nature of the item.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "1 minute or until the end of your next turn if reduced to 0 hit points.",
      "endsWhen": "The effect ends when you revert to your original size, are incapacitated, or reduced to 0 hit points.",
      "charges": "Once per week."
    },
    "priceReason": "This item is priced at 1000 XP due to its rarity and the unique risk it poses when used.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-23T20:25:43.249304+00:00",
    "aiReviewedAt": "2026-07-23T20:25:43.249304+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mega_star": {
    "id": "wario_land_mega_star",
    "name": "Dim Mega Star",
    "description": "The Dim Mega Star is a relic of its former glory, now reduced to brief but potent protection. Its once-bright aura has dimmed, yet it still offers a fleeting moment of invincibility and music that echoes the star's power. When activated, all damage you take is resisted for one minute, though there’s a 40% chance this duration will be cut short to just three rounds. The star's music plays within 60 feet, alerting allies to your empowerment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Activate Star",
      "Star Music"
    ],
    "vendor": "wario_land",
    "shippedBy": "Priority Starlight Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Activate Star",
        "rules": "When you activate the Dim Mega Star (reaction), you gain resistance to all damage for one minute. There is a 40% chance this effect will last only three rounds instead."
      },
      {
        "title": "Star Music",
        "rules": "All creatures within 60 feet hear a burst of star music when the Dim Mega Star is activated, indicating you are powered up. This effect has no save DC and can be used once per week."
      }
    ],
    "levelRequirementReason": "The Dim Mega Star's reduced power requires only a basic level to activate its effects.",
    "vendorReason": "Wario Land still stocks remnants of his Ultimate Power-Up Reserves, even if they are nearly depleted.",
    "shippingDetail": "Ships immediately with priority handling to ensure you have this relic during your next adventure.",
    "usage": {
      "activation": "Reaction",
      "duration": "One minute (or three rounds, if the activation fails)",
      "endsWhen": "The effect ends when the duration expires or you are incapacitated",
      "charges": "Unlimited, but limited to once per week"
    },
    "priceReason": "The Dim Mega Star retains its legendary status and power despite its reduced form, making it a balanced investment for any adventurer.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T20:25:49.592494+00:00",
    "aiReviewedAt": "2026-07-23T20:25:49.592494+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mini_mushroom_dust": {
    "id": "wario_land_mini_mushroom_dust",
    "name": "Mini Mushroom Dust",
    "description": "Mini Mushroom Dust is a fine, powdery residue left behind by Espionage Division's Mini Mushrooms. When inhaled, it shrank infiltrators for covert missions, making them tiny enough to slip through tight spaces and avoid detection. In this form, you gain +4 to Stealth checks but suffer -4 to Strength checks and the risk of being stepped on. Your voice also becomes high-pitched, bringing a disadvantage when trying to intimidate others.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Tiny Form",
      "High-Pitched Voice"
    ],
    "vendor": "wario_land",
    "shippedBy": "Minuscule Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tiny Form",
        "rules": "When an infiltrator inhales the dust, they shrink to Tiny size for 10 minutes. This effect can only be used once per day. The advantage of being small includes +4 to Stealth checks and the ability to fit through small gaps. However, disadvantages are -4 to Strength checks and a risk of being stepped on by larger creatures."
      },
      {
        "title": "High-Pitched Voice",
        "rules": "While in Tiny form, you have disadvantage on Intimidation checks. This effect persists for the duration of your time as a Tiny creature."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who need to access tight spaces and avoid detection.",
    "vendorReason": "Wario Land's espionage division sells this dust because it is crucial for their covert operations and infiltrator training programs.",
    "shippingDetail": "Ships with Minuscule Mail, known for its reliable but slow delivery in small packages.",
    "usage": {
      "activation": "Inhale the dust as a bonus action",
      "duration": "10 minutes (once per day)",
      "endsWhen": "The effect ends when you revert to your normal size or if you take damage",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The dust is priced at 1000 XP as it provides a unique and powerful advantage for infiltration missions.",
    "priceOriginal": 6100,
    "priceReviewedAt": "2026-07-23T20:25:51.667325+00:00",
    "aiReviewedAt": "2026-07-23T20:25:51.667325+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_monty_mole_goggles": {
    "id": "wario_land_monty_mole_goggles",
    "name": "Monty Mole Mining Goggles",
    "description": "Monty Mole Mining Goggles are forged by the Underground Engineering Corps from sturdy steel and reinforced with leather straps. These goggles allow you to navigate the darkness of underground caverns with ease, enhancing your perception in dim light by a full step on the Perception check scale. However, their dirt-smudged lenses hinder your senses when exposed to bright lights, imposing a disadvantage on such checks. Worn by burrowing sappers during wartime, these goggles also grant you advantage on Survival checks to find underground routes and navigate through tunnels.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥽",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Perception in Dim Light",
      "Disadvantage in Bright Light"
    ],
    "vendor": "wario_land",
    "shippedBy": "Burrow Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perception in Dim Light",
        "rules": "These goggles provide a +1 bonus to Perception checks in dim light (darkvision 30ft). The effect is always active while the user wears the goggles."
      },
      {
        "title": "Disadvantage in Bright Light",
        "rules": "The dirt-smudged lenses of these goggles impose a -2 penalty on Perception checks in bright light. This disadvantage persists as long as the wearer remains exposed to such conditions."
      }
    ],
    "levelRequirementReason": "These goggles are designed for basic underground navigation and can be used by any character, regardless of level.",
    "vendorReason": "Wario Land specializes in equipment crafted specifically for the unique challenges faced by those who delve into the underground world.",
    "shippingDetail": "Ships via Burrow Box Express, ensuring safe and swift delivery to your mine or excavation site.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous",
      "endsWhen": "The goggles are removed from the user's head.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the quality craftsmanship and specialized material used in their construction.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-23T20:25:59.668226+00:00",
    "aiReviewedAt": "2026-07-23T20:25:59.668226+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mushroom_kingdom_faction_pin": {
    "id": "wario_land_mushroom_kingdom_faction_pin",
    "name": "Mushroom Kingdom Faction Pin",
    "description": "The Mushroom Kingdom Faction Pin gleams with a subtle sheen, its golden pinhead adorned with emblems of both the Toads and Koopalings. Crafted by the hands of the Kingdom Peacemakers, this pin symbolizes the fragile peace between warring factions. It brings advantage on Charisma checks when dealing with neutral NPCs but incurs disadvantage against extremists. The pin vibrates during tense negotiations, granting an advantage to Initiative rolls in ambush scenarios. Beware; if it breaks amidst heated disputes, its protective effects are lost.",
    "category": "equipment",
    "price": 1000,
    "icon": "📌",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Advantage on Charisma Checks",
      "Disadvantage Against Extremists"
    ],
    "vendor": "wario_land",
    "shippedBy": "Neutral Network Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Advantage",
        "rules": "When wearing the pin, gain advantage on Charisma checks against neutral NPCs. This effect lasts until you engage in a heated argument or when the pin breaks."
      },
      {
        "title": "Disadvantage Against Extremists",
        "rules": "While wearing this pin, suffer disadvantage on Charisma checks against extremist factions. This persists as long as you are near such factions and ceases upon entering a heated argument or breaking the pin."
      }
    ],
    "levelRequirementReason": "This pin is designed for adventurers of all levels to foster peace in their interactions.",
    "vendorReason": "Wario Land, known for its neutrality and commitment to peace efforts, sells this pin as a symbol of unity across the Mushroom Kingdom.",
    "shippingDetail": "Delivered within three days by the Neutral Network's swift couriers.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts until you engage in a heated argument or when the pin breaks.",
      "endsWhen": "Heated arguments, breaking of the pin",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the effort put into crafting it by the Kingdom Peacemakers.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-23T20:26:50.918775+00:00",
    "aiReviewedAt": "2026-07-23T20:26:50.918775+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mushroom_kingdom_war_bond": {
    "id": "wario_land_mushroom_kingdom_war_bond",
    "name": "Original Mushroom Kingdom War Bond (Defaulted)",
    "description": "The Original Mushroom Kingdom War Bond is a decrepit parchment encased in tarnished copper. It bears the crest of the Mushroom Kingdom's nobility, yet its ink has faded to nearly nothing. This relic, though defaulted and magically active, compels surviving noble houses to honor it with a payout of 10,000 gp upon presentation. Alternatively, burning this bond releases Investiture of Flame in a small burst around the holder for 10 minutes. The ghosts of investors will haunt its possessor until either payment or destruction.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Mushroom Kingdom Relic",
      "Investiture Burst"
    ],
    "vendor": "wario_land",
    "shippedBy": "Debt Collector",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mushroom Kingdom Relic",
        "rules": "When presented to any surviving noble house, they are compelled to honor it with a one-time payout of 10,000 gp. This effect ends upon payment."
      },
      {
        "title": "Investiture Burst",
        "rules": "Activates on fire attack or use as an action. Releases Investiture of Flame in a small burst around the holder for 10 minutes. Ends if the bond is extinguished, destroyed, or the duration expires."
      }
    ],
    "levelRequirementReason": "Requires only level 1 to handle this historical relic.",
    "vendorReason": "Wario Land keeps a collection of rare and historically significant items for adventurers seeking unique treasures.",
    "shippingDetail": "Ships via the Debt Collector, known for their punctuality and reliability in delivering sensitive cargo.",
    "usage": {
      "activation": "Presentation or as an action to ignite Investiture Burst",
      "duration": "Instantaneous presentation; Investiture lasts 10 minutes",
      "endsWhen": "Upon payment of 10,000 gp, destruction, or when the duration ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its historical and magical significance.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:26:07.758436+00:00",
    "aiReviewedAt": "2026-07-23T20:26:07.758436+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mushroom_kingdom_war_drum": {
    "id": "wario_land_mushroom_kingdom_war_drum",
    "name": "Mushroom Kingdom War Drum",
    "description": "The Mushroom Kingdom War Drum is a formidable instrument forged from the resilient wood of the ancient drum trees. Crafted by the skilled Kingdom Drummers, it emits a resonant sound that can be heard across the battlefield. When beaten in battle, it rallies allies within 30 feet, granting them advantage on initiative checks for 1 minute. The drum's loud reverberations also make the user noticeable, imposing disadvantage on Stealth checks. Despite its durability, the drum's skin tears after five uses, requiring immediate repair to continue rallying troops.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥁",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Beat drum",
      "Loud sound"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rhythmic Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Beat drum",
        "rules": "When activated as a bonus action within 30 feet of allies in combat, they gain advantage on initiative checks for 1 minute. This effect ends if the user takes any other action or if it expires normally."
      },
      {
        "title": "Loud sound",
        "rules": "The drum emits a loud sound that imposes disadvantage on Stealth checks for the user until the start of their next turn. This effect is negated by taking an action to repair the drum's skin after five uses."
      }
    ],
    "levelRequirementReason": "This item provides battlefield assistance suitable for any player who needs to rally allies or draw attention.",
    "vendorReason": "Wario Land, known for his strategic prowess in battle, has a collection of items that aid soldiers and tacticians alike.",
    "shippingDetail": "Ships via Rhythmic Relay with an estimated delivery within one week. Delivery may vary depending on the region.",
    "usage": {
      "activation": "Bonus action to beat drum, reaction to repair after five uses.",
      "duration": "1 minute per use until ends or recharges",
      "endsWhen": "Ends when used for another ally, a new battle starts, or after one minute.",
      "charges": "Recharges after 24 hours of rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique battlefield utility and limited durability.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-23T20:26:17.666454+00:00",
    "aiReviewedAt": "2026-07-23T20:26:17.666454+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mushroom_militia_uniform": {
    "id": "wario_land_mushroom_militia_uniform",
    "name": "Mushroom Militia Uniform (Slightly Bloody)",
    "description": "This uniform, slightly stained with blood, is a relic of a Toad militia that fought Wario. Sewn by Wario Land Surplus, it's meant for mischief and mayhem. Wear it to gain advantage on Charisma (Persuasion) checks when interacting with Toads, as they believe you're one of their own. However, the uniform's weak spot is a critical vulnerability: if you take a critical hit while wearing it, you also suffer +2 extra damage from that attack.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎽",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Toad Persuader",
      "Critical Weakness"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wario Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toad Persuader",
        "rules": "When worn, gain advantage on Charisma (Persuasion) checks against Toads. This effect lasts until the end of your next turn."
      },
      {
        "title": "Critical Weakness",
        "rules": "While wearing this uniform, you have a weak spot that causes critical hits to deal +2 extra damage. This effect ends when you are no longer wearing the uniform or if you take any other critical hit."
      }
    ],
    "levelRequirementReason": "The uniform's charm and vulnerability are accessible to even the most novice adventurers.",
    "vendorReason": "Wario, being a master of mischief, sells items that can be used for both good and ill. This uniform is no exception.",
    "shippingDetail": "Ships via Wario Express; delivery may take an extra day due to the courier's chaotic schedule.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Lasts until removed or a critical hit is taken.",
      "endsWhen": "Removed or you suffer a critical hit.",
      "charges": "Unlimited"
    },
    "priceReason": "The uniform's rarity, craftsmanship by Wario Land Surplus, and its unique properties justify this price.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-23T20:26:25.321861+00:00",
    "aiReviewedAt": "2026-07-23T20:26:25.321861+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_music_block_key": {
    "id": "wario_land_music_block_key",
    "name": "Musical Block Note Key",
    "description": "The Musical Block Note Key is a key-shaped token with intricate engravings that shimmer like a prism. Crafted by Kingdom Entertainment Guild from polished oak and adorned with golden notes, it resonates with melodies of pre-war festivities. When inserted into a musical mechanism, it plays harmonious tunes that can unlock ancient music-based puzzles. Players who play songs on instruments gain advantage on Performance checks for one hour after using the key.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎵",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Melodic Insertion",
      "Performance Advantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Harmony Haulers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melodic Insertion",
        "rules": "Activates when inserted into a musical mechanism. Instantaneous effect that plays a melody to unlock music-based puzzles."
      },
      {
        "title": "Performance Advantage",
        "rules": "Upon using the key, the player gains advantage on Performance checks for one hour after inserting it."
      }
    ],
    "levelRequirementReason": "Requires no specific level as it is a common item that can be used by any adventurer.",
    "vendorReason": "Wario Land's Entertainment District sells items related to its rich musical heritage.",
    "shippingDetail": "Ships within three days via standard courier services.",
    "usage": {
      "activation": "Insert into a musical mechanism or use for Performance checks.",
      "duration": "One hour after insertion, advantage on Performance checks.",
      "endsWhen": "After one hour of gaining advantage on Performance checks.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a common item that provides situational benefit and nostalgia.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:26:22.758826+00:00",
    "aiReviewedAt": "2026-07-23T20:26:22.758826+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_mystery_block_fragment": {
    "id": "wario_land_mystery_block_fragment",
    "name": "Cracked Mystery Block Fragment",
    "description": "A golden Cracked Mystery Block Fragment, its once-sharp edges now dulled and question mark nearly faded. Crafted from a shattered Power-Up Block Factory during Wario Land's tumultuous era, this relic grants you an edge when dealing with pre-war NPCs. With each use, it has a 30% chance to crumble into dust, leaving behind a nostalgic spark of the past. It also offers a 40% chance to produce random items like coins or mushroom fragments from below.",
    "category": "equipment",
    "price": 1000,
    "icon": "❓",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Hit from Below",
      "Fragment Instability"
    ],
    "vendor": "wario_land",
    "shippedBy": "Mystery Logistics",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hit from Below",
        "rules": "When you use this fragment, there is a 40% chance that it will produce one of the following: a coin (worth 10 XP), a mushroom fragment (valueless but nostalgic), or nothing. This effect occurs instantly."
      },
      {
        "title": "Fragment Instability",
        "rules": "After each use, there is a 30% chance that this fragment will crumble into dust. If it does, the item is destroyed and has no further effects."
      }
    ],
    "levelRequirementReason": "Accessible early-game to allow players to interact with nostalgic elements of the Wario Land universe.",
    "vendorReason": "Wario_land specializes in relics from the era when these Power-Up Block Factories were still operational.",
    "shippingDetail": "Ships via a time-displaced express courier that ensures timely delivery of this fragile artifact.",
    "usage": {
      "activation": "Use as an action",
      "duration": "Instantaneous",
      "endsWhen": "The fragment crumbles or the effect is used",
      "charges": "Unlimited, but limited by chance"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare origin and nostalgic value without being overpowered.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:26:32.649861+00:00",
    "aiReviewedAt": "2026-07-23T20:26:32.649861+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_p_switch_button": {
    "id": "wario_land_p_switch_button",
    "name": "Broken P-Switch Button",
    "description": "The 'Broken P-Switch Button' is a cracked, blue button from an ancient P-Switch. Crafted by Reality Manipulation Engineers in Wario Land, it once turned coins into blocks during sieges. Now, with a flick of your wrist, you can perform this transformation on one non-magical object under 50 pounds within 30 feet. However, the button is prone to jamming; there's a 25% chance that after use, the transformation becomes permanent.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Coin-to-Block Transmogrifier",
      "Jammed Potential"
    ],
    "vendor": "wario_land",
    "shippedBy": "Switch Services",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin-to-Block Transmogrifier",
        "rules": "When activated as a bonus action within 30 feet, this button can transform one non-magical object under 50 pounds into another similar object. The transformation lasts until the end of your next turn, and you can use it once per day."
      },
      {
        "title": "Jammed Potential",
        "rules": "There is a 25% chance that after activation, the button becomes permanently jammed and unusable. If this occurs, the transformation takes place but cannot be reversed."
      }
    ],
    "levelRequirementReason": "This item can be used by anyone who needs to quickly change an object's form during a siege or emergency.",
    "vendorReason": "Wario Land is known for its innovative tools and this broken button fits their theme of practical yet quirky inventions.",
    "shippingDetail": "Ships via Switch Services with next-day delivery to most Wario Land locations.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The button's effect ends or you use it again, whichever comes first",
      "charges": "One daily charge"
    },
    "priceReason": "Balanced at 1000 XP to reflect the unique and limited functionality of this broken yet functional tool.",
    "priceOriginal": 6300,
    "priceReviewedAt": "2026-07-23T20:26:38.316007+00:00",
    "aiReviewedAt": "2026-07-23T20:26:38.316007+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_peach_castle_key_fragment": {
    "id": "wario_land_peach_castle_key_fragment",
    "name": "Peach Castle Key Fragment",
    "description": "This fragment of the royal key is a brittle sliver of iron with remnants of gold inlay. It bears the insignia of the Peach family and retains a faint echo of its former glory, now tarnished by time and battle. Scavenged from the siege of Peach Castle, it whispers secrets to those who can hear, granting advantage on Investigation checks for hidden doors nearby. However, cursed by the fall, anyone attempting to use it with loyalists of Princess Peach faces disadvantage on Charisma checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Unlock Minor Locks",
      "Advantage on Hidden Door Checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Key Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Minor Locks",
        "rules": "Combine this fragment with others found: allows the user to unlock minor magical locks (DC 15). Requires all fragments combined. Once used, it cannot be used again."
      },
      {
        "title": "Advantage on Hidden Door Checks",
        "rules": "Grants advantage on Investigation checks for hidden doors within a short distance when near them. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This fragment is simple enough that even low-level characters can handle it, but its value lies in its rarity and historical significance.",
    "vendorReason": "Wario Land has a network of scavengers who collect such relics from various sieges and battlegrounds.",
    "shippingDetail": "Ships within three days, with special handling to ensure the fragile nature of the item is preserved.",
    "usage": {
      "activation": "Combine all fragments found: requires the user to have all pieces in hand and declare the intent to unlock a lock.",
      "duration": "Instantaneous",
      "endsWhen": "Once used, it cannot be used again. The duration for advantage on hidden door checks is until the end of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its historical value and the rarity of finding such fragments in one location.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-23T20:26:40.890866+00:00",
    "aiReviewedAt": "2026-07-23T20:26:40.890866+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_peach_memorial_candle": {
    "id": "wario_land_peach_memorial_candle",
    "name": "Princess Peach Memorial Candle (Scented: Garlic)",
    "description": "The 'Princess Peach Memorial Candle (Scented: Garlic)' is a scorching reminder of Wario's twisted sense of honor. The candle emits a pungent, authentic whiff of garlic that can be smelled from afar, and its flickering light casts an eerie glow in the room. Despite being eternal by Wario’s standards, this candle still requires 8 hours to recharge after burning out, leaving you in darkness until it's ready for another nightmarish display.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯️",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Eternal Flame",
      "Garlic Scent"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Eternal Flame",
        "rules": "The candle emits a dim light (as if from a torch) that lasts for 1 hour and requires an additional 8 hours to recharge. It has no range or area, but it can be activated as a bonus action."
      },
      {
        "title": "Garlic Scent",
        "rules": "The candle emits a strong garlic scent, imposing disadvantage on Stealth checks made by the user within 30 feet of the candle. This effect persists for 1 hour after activation or until the candle is extinguished."
      }
    ],
    "levelRequirementReason": "Anyone can light this candle to honor Peach in their own way, regardless of level.",
    "vendorReason": "Wario Land Memorials capitalizes on any opportunity to profit from the Peach incident.",
    "shippingDetail": "Delivered with a cloud of garlic essence that lingers in your home for days after arrival.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour",
      "endsWhen": "Extinguished or Recharged",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a common price to reflect its unique properties and Wario’s questionable sense of honor.",
    "priceOriginal": 3600,
    "priceReviewedAt": "2026-07-23T20:26:47.330443+00:00",
    "aiReviewedAt": "2026-07-23T20:26:47.330443+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_peach_true_tear": {
    "id": "wario_land_peach_true_tear",
    "name": "Princess Peach’s True Tear (Preserved)",
    "description": "A single, shimmering tear preserved in a delicate crystal vial, it retains the warmth of the day Princess Peach's castle fell. This relic is said to have been captured by Wario himself, who claims it holds the essence of her sorrow and resilience. Sipping this vial grants all nearby allies healing and relief from dire conditions, while shattering it unleashes a radiant blast that devastates undead and fiends within range.",
    "category": "equipment",
    "price": 1000,
    "icon": "💧",
    "stock": 1,
    "rarity": "very_rare",
    "effects": [
      "Healing Draught",
      "Radiant Blast"
    ],
    "vendor": "wario_land",
    "shippedBy": "Royal Courier (Ghost Delivery)",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Healing Draught",
        "rules": "Activates on drink or shatter. Instantaneous effect: All allies within 60 feet recover 4d8+8 hit points and remove one condition of exhaustion, frightened, or charmed. No save required."
      },
      {
        "title": "Radiant Blast",
        "rules": "Activates upon shattering the vial. Instantaneous effect: Every undead or fiend within 100 feet takes 8d10 radiant damage (no save). The vial breaks and cannot be used again after this activation."
      }
    ],
    "levelRequirementReason": "Princess Peach’s True Tear is a very rare, powerful artifact that requires the user to have significant experience.",
    "vendorReason": "Wario Land keeps this relic as proof of his encounter with Princess Peach and her tear.",
    "shippingDetail": "Ships immediately but is delivered by a ghost courier, ensuring the vial remains in pristine condition.",
    "usage": {
      "activation": "Drink or shatter",
      "duration": "Instantaneous",
      "endsWhen": "Exhausts after one use",
      "charges": "One"
    },
    "priceReason": "This very rare tear is priced at 1000 XP, reflecting its extraordinary healing and devastating power.",
    "priceOriginal": 24000,
    "priceReviewedAt": "2026-07-23T20:27:07.553381+00:00",
    "aiReviewedAt": "2026-07-23T20:27:07.553381+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_peasley_treasure_map": {
    "id": "wario_land_peasley_treasure_map",
    "name": "Peasley Treasure Map",
    "description": "The Peasley Treasure Map is a tattered parchment with intricate symbols and a faint glow. It reveals the hidden vault of the infamous Peasley Financial Scandal, leading directly to its location. Upon using it, you gain a 10% bonus to your chance of successfully opening treasure chests but at the cost of Wario's paranoia, which sets in as soon as the map is activated and lasts until the next long rest.",
    "price": 1000,
    "icon": "🧭",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Bonus Loot from Treasure Chests",
      "Wario's Paranoia"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bonus Loot from Treasure Chests",
        "rules": "When you use this map to open a treasure chest, roll a d10 and add the result to your roll. This effect lasts until the next long rest."
      },
      {
        "title": "Wario's Paranoia",
        "rules": "The user must succeed on a Wisdom saving throw (DC 13) or suffer from paranoia for the duration of one long rest, causing them to misinterpret their surroundings and act suspiciously. This effect is not cumulative."
      }
    ],
    "levelRequirementReason": "This map requires no specific level as it can be used by characters of any level to uncover the location.",
    "vendorReason": "Wario Land, being a master thief and collector of such artifacts, naturally sells items related to his exploits and those of infamous figures like Peasley.",
    "shippingDetail": "The map is couriered with special care by the Shy Guys, ensuring it arrives in pristine condition despite its delicate nature.",
    "usage": {
      "activation": "Use an action to activate and unfold the map.",
      "duration": "Instantaneous effect for each use; paranoia lasts until the next long rest.",
      "endsWhen": "The effects end upon a successful Wisdom saving throw or after one long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The map's rarity and the unique advantages it provides justify its price, making it a valuable yet balanced item for any party.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T20:26:57.029496+00:00",
    "aiReviewedAt": "2026-07-23T20:26:57.029496+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_piranha_plant_teeth": {
    "id": "wario_land_piranha_plant_teeth",
    "name": "Piranha Plant Teeth Necklace",
    "description": "The Piranha Plant Teeth Necklace is a ghastly trophy crafted from the fangs of a Pipe Fortress denizen, strung on jagged barbed wire. This necklace not only enhances your bite attacks with its serrated edge but also brings with it a haunting presence that intimidates plant-type foes and attracts their wrath in the wilds. The teeth are said to be imbued with the spirit of the plants they once belonged to, making them both a weapon and a warning from the depths of the fortress.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Bite Damage Boost",
      "Natural Plant Intimidation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Chomping Chain Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Bite Damage Boost",
        "rules": "When you make a bite attack with this necklace, you deal an additional +2 piercing damage. Additionally, there is a 10% chance that the wearer takes 1d4 piercing damage as the teeth bite back."
      },
      {
        "title": "Natural Plant Intimidation",
        "rules": "When you are within 30 feet of plant-type creatures, they must make an Intelligence saving throw (DC 12) or have disadvantage on their next attack roll against you. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The necklace's power requires a solid grasp of combat and survival, suitable for characters who have faced the horrors of Pipe Fortress.",
    "vendorReason": "Wario Land is known for collecting and selling souvenirs from his travels, including this macabre trophy from the fortress.",
    "shippingDetail": "The necklace is shipped in a reinforced box to prevent damage during transit.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the start of your next turn for intimidation; until the wearer's next bite attack or until the wearer takes damage from the necklace’s self-biting effect",
      "endsWhen": "The wearer no longer benefits if the necklace is removed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The necklace's rarity and unique crafting process justify its price, offering both combat utility and a powerful thematic experience.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T20:27:04.006115+00:00",
    "aiReviewedAt": "2026-07-23T20:27:04.006115+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_podoboo_core": {
    "id": "wario_land_podoboo_core",
    "name": "Cooled Podoboo Core",
    "description": "The Cooled Podoboo Core, a charred relic of volcanic origins, lies dormant like an ember in its glass casing. Crafted from the heart of a Podoboo that met its fiery demise in Wario Land's moat, it hums with latent energy. Once ignited, this core can serve as a portable heat source for 8 hours, radiating warmth without consuming fuel. Should you choose to hurl it, it becomes a weapon delivering 2d8 fire damage before returning to its dormant state.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌋",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Portable Heat Source",
      "Weapon Thrown"
    ],
    "vendor": "wario_land",
    "shippedBy": "Molten Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portable Heat Source",
        "rules": "The Cooled Podoboo Core can be used as a heat source for 8 hours. It requires oil or wood to reignite once it cools down."
      },
      {
        "title": "Weapon Thrown",
        "rules": "Once per day, the core can be hurled as a weapon at a target within 30 feet, dealing 2d8 fire damage on a hit. After use, it returns to its ember state and cannot be used again until the next dawn."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners or those who need a reliable heat source without demanding high-level abilities.",
    "vendorReason": "Wario Land, being the original scavenger of these cores, keeps them in stock to supply his loyal customers with essential survival tools.",
    "shippingDetail": "Ships via Molten Mail; delivery can take up to a week due to volcanic hazards.",
    "usage": {
      "activation": "Interact as an object (requires touch)",
      "duration": "Instantaneous for activation, 8 hours of heat source when active",
      "endsWhen": "Core returns to ember state after being hurled or if its use is interrupted by a save DC 10 Dexterity saving throw.",
      "charges": "One charge per day"
    },
    "priceReason": "This item offers a balance between utility and rarity, priced at 1000 XP to reflect its unique origin and daily activation.",
    "priceOriginal": 5700,
    "priceReviewedAt": "2026-07-23T20:27:22.188779+00:00",
    "aiReviewedAt": "2026-07-23T20:27:22.188779+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_poison_mushroom_spores": {
    "id": "wario_land_poison_mushroom_spores",
    "name": "Poison Mushroom Spore Vial",
    "description": "The vial houses a volatile cocktail of purple spores harvested from bio-warfare era mushrooms, now weaponized and outlawed by both sides. These spores are notorious for their potency—when thrown, they force enemies within a 5-foot radius to make a Constitution saving throw (DC 14) or be poisoned for the next minute, causing them to stagger and reduce their effectiveness in combat. The vial itself is fragile; there's a 20% chance it will shatter when placed in your pack, releasing its deadly contents into you instead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Poisonous Scatter",
      "Fragile Vessel"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toxic Transit (Handle Carefully)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Poisonous Scatter",
        "rules": "When activated by throwing the vial within a 5-foot radius, all creatures in that area must make a Constitution saving throw (DC 14) or become poisoned for 1 minute. The poison causes them to take disadvantage on attack rolls and ability checks until the effect ends."
      },
      {
        "title": "Fragile Vessel",
        "rules": "There's a 20% chance that when placed in your pack, the vial will shatter unexpectedly, exposing you to its poisonous contents. You must succeed on a DC 14 Constitution saving throw or be poisoned for 1 minute."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level characters as it offers a potent way to deal with immediate threats without requiring high proficiency.",
    "vendorReason": "Wario Land specializes in unique and dangerous items from the bio-warfare era, making this vial an appropriate addition to their inventory.",
    "shippingDetail": "The vial must be packed with extreme care; any damage during transit will release its contents into the shipment vehicle. Customers are advised to ensure proper handling and storage upon receipt.",
    "usage": {
      "activation": "Activates when thrown within a 5-foot radius of enemies.",
      "duration": "1 minute for each poisoned creature.",
      "endsWhen": "The poison effect ends after 1 minute or when the creature successfully saves against it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's rarity, unique composition, and potential danger justify its moderate price in XP terms.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T20:27:32.044109+00:00",
    "aiReviewedAt": "2026-07-23T20:27:32.044109+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_pow_block_shard": {
    "id": "wario_land_pow_block_shard",
    "name": "POW Block Shard",
    "description": "The POW Block Shard is a jagged fragment of a once-mighty demolition tool. Crafted by Wario Land's Demolition Engineering Corps, this shard can collapse tunnels with its powerful tremors. When slammed into the ground, it triggers a shockwave that sends all creatures within 15 feet crashing to the floor in disarray. It is also known for a 15% chance of inadvertently activating during combat, adding to the chaos. This fragment provides you with an edge when underground, granting advantage on Perception checks for detecting hidden threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Tunnel Collapse",
      "Unstable"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shockwave Shippers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Tunnel Collapse",
        "rules": "When activated as a bonus action by slamming it into the ground, all creatures within 15 feet must make a Dexterity saving throw (DC 14) or fall prone. This effect has no duration and is expended after one use."
      },
      {
        "title": "Unstable",
        "rules": "There is a 15% chance that the shard will activate itself when hit in combat, sending shockwaves as described above. Once activated, it crumbles into dust, ending its effect immediately."
      }
    ],
    "levelRequirementReason": "Requires level 6 to wield effectively, ensuring it's used by experienced adventurers.",
    "vendorReason": "Wario Land specializes in explosive and engineering tools for demolition work, making the POW Block Shard a natural addition to their inventory.",
    "shippingDetail": "Ships with standard courier handling but is marked as fragile, ensuring safe delivery.",
    "usage": {
      "activation": "Bonus action (slamming into ground)",
      "duration": "Instantaneous (one use only)",
      "endsWhen": "Once used or triggered by combat",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this shard reflects its powerful yet unstable nature and the expertise needed to handle it.",
    "priceOriginal": 5900,
    "priceReviewedAt": "2026-07-23T20:27:20.381975+00:00",
    "aiReviewedAt": "2026-07-23T20:27:20.381975+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_premium_wario_costume": {
    "id": "wario_land_premium_wario_costume",
    "name": "Wario Land Premium Wario Costume",
    "description": "The Wario Land Premium Wario Costume is a garish ensemble made of shimmering polyester that makes you look exactly like the nefarious green plumber. It grants you an advantage on Intimidation checks, but at the cost of disadvantage on Persuasion attempts and being terrifying to children who recognize it. The costume also allows for the creation of a 10-foot radius cloud of noxious gas with the Wario Waft, which poisons creatures within upon failing a Constitution saving throw (DC 13). Beware, though—while wearing this outfit, concentration is near impossible due to its itchy nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "👷",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Disguise as Wario",
      "Poisonous Cloud"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wario Express (Delayed)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disguise as Wario",
        "rules": "You gain advantage on Intimidation checks and have disadvantage on Persuasion checks. Additionally, children and those who are fans of Mario have a disadvantage when making Charisma (Persuasion) checks against you."
      },
      {
        "title": "Poisonous Cloud",
        "rules": "With the Wario Waft action, you can create a 10-foot radius cloud that poisons all creatures within for one round. They must make a Constitution saving throw (DC 13) or be poisoned. This effect has no reuse interval and is usable once per day."
      }
    ],
    "levelRequirementReason": "This costume, while silly, still requires basic social skills to use effectively.",
    "vendorReason": "Wario Land Costume Shop specializes in outfits that make you look like the most infamous characters, including this unmissable Wario costume.",
    "shippingDetail": "Due to its large size and vibrant nature, shipping is delayed by one day.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Poisonous Cloud effect; until the end of your next turn otherwise",
      "endsWhen": "The effect ends when you no longer wear the costume or are poisoned",
      "charges": "Once per day"
    },
    "priceReason": "This costume, while whimsical, still requires materials and craftsmanship, justifying its price.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T20:27:25.957859+00:00",
    "aiReviewedAt": "2026-07-23T20:27:25.957859+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_princess_peach_wig": {
    "id": "wario_land_princess_peach_wig",
    "name": "Princess Peach Memorial Wig (Wario-Styled)",
    "description": "This wig is a bizarre blend of elegance and horror. The blonde strands are styled in Princess Peach's iconic fashion, but a mischievous mustache crafted to look like Wario's clings awkwardly to the scalp. It was supposedly made by Wario as part of his 'Wario-Styled' range, intended to be worn for comedic chaos or impersonation attempts. Wearing it guarantees you'll either inspire fear with your reflection or cause discomfort among those around you, thanks to its unsettling features.",
    "category": "equipment",
    "price": 1000,
    "icon": "💇",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Peach's Disguise",
      "Mustache Malaise"
    ],
    "vendor": "wario_land",
    "shippedBy": "Creepy Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Peach's Disguise",
        "rules": "When worn as a headgear, you gain advantage on Deception checks to impersonate Princess Peach. However, your appearance is so botched by the mustache that it leaves much to be desired; you take disadvantage on Charisma (Persuasion) checks with any character who knows of Princess Peach."
      },
      {
        "title": "Mustache Malaise",
        "rules": "The mustache gives you disadvantage on saving throws against fear effects. Additionally, anyone within 5 feet of you while wearing this wig has advantage on Charisma (Intimidation) checks due to the disturbing appearance."
      }
    ],
    "levelRequirementReason": "This item is designed for lower-level characters who might find it entertaining or useful in a pinch without requiring high character strength.",
    "vendorReason": "Wario Land Costume Disrespect sells this as part of their mischievous and themed merchandise line, which includes a variety of over-the-top accessories.",
    "shippingDetail": "Due to the nature of the item, shipping is handled with extra care, ensuring the wig arrives in one piece but with strict handling instructions.",
    "usage": {
      "activation": "Wear as a headgear during sessions.",
      "duration": "Instantaneous activation; effect lasts until removed or the session ends.",
      "endsWhen": "The item's effects end when you remove it, the session concludes, or if you are incapacitated.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects a common, themed accessory that offers both amusement and strategic value without overstepping in terms of power.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-23T20:27:38.696858+00:00",
    "aiReviewedAt": "2026-07-23T20:27:38.696858+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_propeller_mushroom_cap": {
    "id": "wario_land_propeller_mushroom_cap",
    "name": "Broken Propeller Mushroom Cap",
    "description": "The Broken Propeller Mushroom Cap, crafted by Sky Mushroom Aeronautics, is a relic of aerial scouts once used for swift flight. Its single snapped blade now limits it to gliding, though it still provides a unique form of propulsion. This cap can slow a wearer's fall and make a whirring noise that hinders Stealth checks, but with the right repairs, it could again soar through the skies like its former self.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚁",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Glide Flight",
      "Whirring Noise"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spinning Shipments",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Glide Flight",
        "rules": "Activates as a bonus action. The wearer can glide for up to 1 minute, reducing fall damage by half (as if using Feather Fall). This effect has two uses per long rest."
      },
      {
        "title": "Whirring Noise",
        "rules": "While the cap is active, the wearer suffers disadvantage on Dexterity (Stealth) checks. The cap makes a persistent whirring sound until deactivated or removed."
      }
    ],
    "levelRequirementReason": "The complexity of the cap's mechanics and its reliance on repairs make it suitable for characters with some experience.",
    "vendorReason": "Wario Land, known for oddities and unique items, carries this relic of the sky.",
    "shippingDetail": "Ships via a specialized glider, ensuring safe delivery to the destination.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until removed",
      "endsWhen": "Deactivated or removed",
      "charges": "Two uses per long rest"
    },
    "priceReason": "The cap's rarity and the complexity of its mechanics, including the repair requirement, justify this price.",
    "priceOriginal": 6400,
    "priceReviewedAt": "2026-07-23T20:28:19.725483+00:00",
    "aiReviewedAt": "2026-07-23T20:28:19.725483+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_purple_coin": {
    "id": "wario_land_purple_coin",
    "name": "Haunted Purple Coin",
    "description": "The Haunted Purple Coin radiates a cold, spectral chill that makes it seem alive in your palm. Crafted by the Supernatural Economy (Ghost House Mint), this coin is said to be cursed, always landing on tails for those who covet its wealth too greedily. In haunted areas, ghosts are drawn to it, making you a target of their scrutiny, and undead NPCs, like wraiths or specters, favor you with benevolent glances.",
    "category": "equipment",
    "price": 5000,
    "icon": "🟣",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Greed's Bane",
      "Undead Favor"
    ],
    "vendor": "wario_land",
    "shippedBy": "Spectral Savings Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Greed's Bane",
        "rules": "If the coin is picked up by someone who wants to use it for personal gain, it always lands on tails. This effect lasts until a new owner takes possession of it (DM discretion)."
      },
      {
        "title": "Undead Favor",
        "rules": "When in close proximity to undead NPCs like wraiths or specters, you gain advantage on Charisma checks and saving throws against their effects for 1 hour. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "The coin's supernatural properties require a capable adventurer to handle its cursed nature and undead sympathies.",
    "vendorReason": "Wario Land, with his extensive dealings in the Ghost House, is privy to such rare and enchanted items.",
    "shippingDetail": "Delivered by spectral messengers who ensure the coin arrives with a chill that hints at its cursed nature.",
    "usage": {
      "activation": "Used as part of an action when flipped for guidance or in close proximity to undead NPCs.",
      "duration": "Instantaneous for Greed's Bane, 1 hour for Undead Favor.",
      "endsWhen": "Greed's Bane ends with a new owner taking possession, Undead Favor after 1 hour.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The coin's supernatural crafting and cursed nature justify its high price.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-23T20:27:55.353806+00:00",
    "aiReviewedAt": "2026-07-23T20:27:55.353806+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_raccoon_tail": {
    "id": "wario_land_raccoon_tail",
    "name": "Torn Raccoon Tail",
    "description": "The Torn Raccoon Tail is a mangled relic from a chaotic Super Leaf transformation. Its frayed fur and cracked spine hint at its tumultuous origin on the Transformation Battlefield Casualties. This tail allows you to swat foes behind you with surprising agility, but it's unreliable for flight, instead granting enhanced balance in acrobatic maneuvers. It also makes you appear suspicious to guards, who are wary of this damaged relic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦝",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Swat Attack",
      "Enhanced Balance"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fuzzy Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swat Attack (Reaction)",
        "rules": "When an enemy moves within 5 feet of you and is behind you, you can use your reaction to make a melee attack against the creature. On a hit, it takes 1d4 + your Strength modifier bludgeoning damage."
      },
      {
        "title": "Enhanced Balance",
        "rules": "You have advantage on Acrobatics checks. Additionally, you cannot be knocked prone by non-magical effects unless you choose to be."
      }
    ],
    "levelRequirementReason": "The Torn Raccoon Tail is a common item that can be used by lower-level characters for its practical utility in combat and acrobatics.",
    "vendorReason": "Wario Land, being the creator of this chaotic relic, occasionally sells damaged but still functional items from his battlefield casualties.",
    "shippingDetail": "The Torn Raccoon Tail is shipped in a sturdy box to protect it during transit. Delivery takes two game days.",
    "usage": {
      "activation": "Reaction, Bonus Action",
      "duration": "Instantaneous, Until Exhausted",
      "endsWhen": "Exhausted after 3 uses or destroyed if damaged beyond repair",
      "charges": "Unlimited"
    },
    "priceReason": "The Torn Raccoon Tail is priced at 1000 XP, reflecting its common rarity and practical utility in combat and acrobatics.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T20:27:46.728807+00:00",
    "aiReviewedAt": "2026-07-23T20:27:46.728807+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_recipe_garlic_bread_of_greed": {
    "id": "wario_land_recipe_garlic_bread_of_greed",
    "name": "Recipe: Wario Land Garlic Bread of Greed",
    "description": "The Recipe: Wario Land Garlic Bread of Greed is a parchment that allows you to bake bread with a golden allure. When consumed, it grants +1 to attack rolls against targets carrying gold or gems. However, the recipe imbues you with an insatiable hunger for wealth, forcing disadvantage on saves versus greed-related effects. Your breath becomes a weapon; in close combat, your exhale can knock small creatures unconscious (advantage on Intimidation checks). This bread is made by Wario Land Bakers using ancient recipes that have been passed down through generations of greedy chefs.",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Gold Aura",
      "Wealth Craving"
    ],
    "vendor": "wario_land",
    "shippedBy": "Swift Wind Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gold Aura",
        "rules": "When you consume the bread, it grants +1 to attack rolls against targets carrying gold or gems. This effect lasts until your next long rest."
      },
      {
        "title": "Wealth Craving",
        "rules": "You are forced to make a DC 15 Wisdom saving throw when exposed to greed-related effects. On a failure, you take an additional level of exhaustion and must succeed on a DC 15 Constitution saving throw at the start of each short rest."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough that even low-level adventurers can use it to their advantage in greedy situations.",
    "vendorReason": "Wario Land Bakers are known for their eccentric and often gold-tinged recipes, making this bread a staple in their offerings.",
    "shippingDetail": "The bread must be delivered within the day to maintain its potency; delays can reduce its effectiveness.",
    "usage": {
      "activation": "Eating the baked bread",
      "duration": "Until your next long rest",
      "endsWhen": "Resting for a full night",
      "charges": "Unlimited, but one loaf per day"
    },
    "priceReason": "The recipe is moderately priced given its utility and the rarity of finding such ingredients.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-23T20:27:53.252847+00:00",
    "aiReviewedAt": "2026-07-23T20:27:53.252847+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_red_coin_shard": {
    "id": "wario_land_red_coin_shard",
    "name": "Red Coin Shard",
    "description": "A Red Coin Shard gleams faintly in your hand, its surface dented and weathered from years of service within the Kingdom Treasury's vaults. Once part of a rare coin worth eight times its weight in gold, this fragment retains the mint's signature engraving. It is a collector’s delight, dazzling with its shimmering red hue that distracts onlookers, granting you advantage on Sleight of Hand checks to misdirect. Though small, it carries the weight of centuries and can still be sold for twice its value at the right vendor.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔴",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Collector's Delight",
      "Distracting Glow"
    ],
    "vendor": "wario_land",
    "shippedBy": "Precious Parcels",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Collector's Delight",
        "rules": "When you sell this Red Coin Shard to a recognized collector NPC, you receive double the listed price. This effect can only be used once per day."
      },
      {
        "title": "Distracting Glow",
        "rules": "You gain advantage on Sleight of Hand checks made to misdirect or distract an opponent within 10 feet for up to 1 minute. The effect ends if you move more than 10 feet away from the target."
      }
    ],
    "levelRequirementReason": "This shard is accessible to beginners, requiring no special training.",
    "vendorReason": "Wario Land specializes in unique and collectible items of historical significance.",
    "shippingDetail": "Ships via the Kingdom's express courier service for fast delivery, ensuring your shard arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect upon possession; requires no action to activate.",
      "duration": "Until the end of each long rest or when sold as part of 'Collector's Delight'.",
      "endsWhen": "Selling to a recognized collector NPC ends both effects.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The price reflects the shard’s historical value and its limited utility in combat, making it accessible yet valuable.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-23T20:28:14.575953+00:00",
    "aiReviewedAt": "2026-07-23T20:28:14.575953+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_royal_mushroom_crown": {
    "id": "wario_land_royal_mushroom_crown",
    "name": "Crown of the Mushroom Regency (Cracked)",
    "description": "The Crown of the Mushroom Regency (Cracked) is a cracked-toothed crown, its gold gleaming faintly through the fissures. Forged during Toadsworth's reign, it exudes the essence of royal authority. Within 10 miles, all Toads are compelled to be your loyal subjects, offering their services with unwavering dedication. Wearing this crown on a non-Toad's head triggers regal rejection; each day there is a 50% chance the crown will tighten, dealing 4d10 psychic damage and forcing the wearer to make a DC 17 Constitution saving throw or be incapacitated until it is removed.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "very_rare",
    "effects": [
      "Toads within 10 miles are friendly",
      "Compels Toads into servitude"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Escort (They Don’t Know)",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Royal Loyalty",
        "rules": "All Toads within 10 miles become friendly or indifferent to you. This effect is permanent while the crown is worn."
      },
      {
        "title": "Regal Rejection",
        "rules": "If worn by a non-Toad, there is a 50% chance per day that the crown tightens and deals 4d10 psychic damage. The wearer must make a DC 17 Constitution saving throw; on a failed save, they become incapacitated until the crown is removed."
      }
    ],
    "levelRequirementReason": "Only those with royal lineage or a strong connection to Toadsworth can wield this powerful artifact.",
    "vendorReason": "Wario Land, a master of the underground economy, has acquired this rare relic from a mysterious source.",
    "shippingDetail": "The crown is delivered with utmost secrecy by Toad escorts who do not know its contents.",
    "usage": {
      "activation": "Worn as headgear",
      "duration": "Permanent while worn, regal rejection effect occurs daily at dawn",
      "endsWhen": "Crown is removed or wearer fails save against Regal Rejection",
      "charges": "Unlimited"
    },
    "priceReason": "The crown's rarity and the potential for it to be used in both beneficial and harmful ways justify its moderate price.",
    "priceOriginal": 19800,
    "priceReviewedAt": "2026-07-23T20:28:08.818861+00:00",
    "aiReviewedAt": "2026-07-23T20:28:08.818861+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_siege_of_toad_town_souvenir": {
    "id": "wario_land_siege_of_toad_town_souvenir",
    "name": "Siege of Toad Town Souvenir Brick",
    "description": "This worn, jagged brick bears Wario's boastful scrawl in toad ink. It is a relic from the Siege of Toad Town, where the Mushroom Kingdom's might stood firm against Wario's assault. The walls crumbled, but this brick escaped, now a memento of the failed siege and the battle that followed. Carried away by a valiant Toad, it was given to a hero of the war as a token of gratitude for their service.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Siege Remnant",
      "Toad's Whisper"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Package Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Siege Remnant",
        "rules": "When thrown, this brick deals 1d6 slashing damage. It provides advantage on attack rolls against windows and doors. The brick can be used once before it breaks completely."
      },
      {
        "title": "Toad's Whisper",
        "rules": "At night, the brick emits a haunting whisper, 'WAH!', causing disadvantage on Charisma checks with Toads for 1 hour. This effect occurs three times per day."
      }
    ],
    "levelRequirementReason": "Anyone can hold this memento of a legendary battle.",
    "vendorReason": "Wario Land Battlefield Salvage collects souvenirs from his failed attempts to conquer the Mushroom Kingdom.",
    "shippingDetail": "Shipped with care, this brick may arrive slightly chipped but remains functional and powerful.",
    "usage": {
      "activation": "Throw as a weapon or place it near windows/doors for advantage on attacks.",
      "duration": "Instantaneous attack; ongoing whisper effect lasts for 1 hour.",
      "endsWhen": "Brick breaks after use, or the whisper ends when the time limit is reached.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The brick's historical and sentimental value justifies its moderate price in experience points.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-23T20:29:02.579534+00:00",
    "aiReviewedAt": "2026-07-23T20:29:02.579534+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_skaven_bowser_key": {
    "id": "wario_land_skaven_bowser_key",
    "name": "Bowser Key of the Lost Throne",
    "description": "The Bowser Key of the Lost Throne is a gleaming golden key forged in the heart of Mount Ebobo during the Dragon Wars. Its surface bears intricate engravings of ancient Bowsers and their rivals, the Skavens. This relic grants +3 to attack rolls against dragons or royal guards and can be fused with any weapon to imbue it with draconic power. When used outside combat, it emits a chaotic hum that disrupts the balance of nearby magic.",
    "price": 1000,
    "icon": "🏰",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Draconic Weapon Fusion",
      "Chaotic Aura"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Draconic Weapon Fusion",
        "rules": "Activates as an action. Fuses with a weapon to grant it +2 bonus damage and a dragon-themed appearance until the end of your next turn."
      },
      {
        "title": "Chaotic Aura",
        "rules": "If used outside combat, the key emits a chaotic hum for 1 minute, requiring a DC 15 Constitution saving throw. On a failed save, the user is charmed by an ancient power until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 7th level to wield its chaotic power and draconic fusion without risk.",
    "vendorReason": "Wario Land, a master of the lost arts, possesses this key as it ties into his heritage from the Bowsers' wars.",
    "shippingDetail": "Delivered via Warp Whistle's express dragon courier service within one week.",
    "usage": {
      "activation": "Activates with a single use.",
      "duration": "Instantaneous fusion, Aura lasts for 1 minute unless dispelled or the key is destroyed.",
      "endsWhen": "The fusion ends when the weapon is no longer in contact with the key. The aura ends when the user takes a non-magical action outside combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and unique properties as a relic of ancient warfare.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T20:28:37.760023+00:00",
    "aiReviewedAt": "2026-07-23T20:28:37.760023+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_spike_top_shell": {
    "id": "wario_land_spike_top_shell",
    "name": "Spike Top Shell",
    "description": "The Spike Top Shell is a formidable weapon crafted from the armored spikes of the legendary Spike Tops. This spiked shell, forged with iron and imbued with anti-cavalry magic, can be set as a trap to deter charging mounts or infantry. When triggered by a creature stepping on it, it delivers a swift 2d6 piercing damage. It is reusable, resetting itself after each activation, but care must be taken when carried; falling while holding the shell deals 1d4 damage. The shell's spikes are particularly effective against mounted enemies, dealing double damage to those already in the saddle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔺",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Set as Trap",
      "Reusable"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pointy Packages (Careful!)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Set as Trap",
        "rules": "When activated by a creature stepping on it, this Spike Top Shell deals 2d6 piercing damage to the triggering creature. It has an instantaneous duration and resets itself after each activation."
      },
      {
        "title": "Recoverable Damage",
        "rules": "If you are carrying the Spike Top Shell and fall while holding it, you take 1d4 damage from its sharp spikes."
      }
    ],
    "levelRequirementReason": "This item is designed for general use in anti-cavalry operations and thus requires no specific level to deploy.",
    "vendorReason": "Wario Land is known for its diverse array of tactical items, including this practical Spike Top Shell used by his troops.",
    "shippingDetail": "Delivery involves careful handling to ensure the shell's spikes do not puncture packaging or other cargo.",
    "usage": {
      "activation": "Set as a trap when stepped on",
      "duration": "Instantaneous; resets after triggering",
      "endsWhen": "Exhausted with each activation",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's moderate rarity and utility, suitable for a wide range of tactical scenarios.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:28:29.057144+00:00",
    "aiReviewedAt": "2026-07-23T20:28:29.057144+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_star_bit_debris": {
    "id": "wario_land_star_bit_debris",
    "name": "Star Bit Shrapnel",
    "description": "Star Bit Shrapnel are crystallized remnants of a long-forgotten Celestial Bombardment that rained down upon the land, now glowing faintly in the dark. These shards, made by the Space Debris Collection Agency, are both restorative and slightly hazardous. They emit a soft luminescence, revealing their location but attracting curious Lumas to your side. Consuming one grants temporary hit points (1d4) that sweeten the soul, while also carrying a 10% chance of triggering random magical effects that could be beneficial or chaotic, as determined by the DM.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Temp HP Restorer",
      "Random Magical Effect"
    ],
    "vendor": "wario_land",
    "shippedBy": "Cosmic Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temp HP Restorer",
        "rules": "When consumed, a Star Bit Shrapnel grants temporary hit points equal to 1d4. These restorative properties are sweet and revitalize the soul of the user."
      },
      {
        "title": "Random Magical Effect",
        "rules": "There is a 10% chance (roll a d10, on a roll of 1-2) that consuming a Star Bit Shrapnel will trigger a random magical effect. The DM rolls wild magic, which could yield beneficial effects or cause unpredictable chaos."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners to help them regain health and explore the world without being too powerful.",
    "vendorReason": "Wario Land's Space Debris Collection Agency specializes in salvaging and distributing these rare fragments from ancient celestial events.",
    "shippingDetail": "Ships within a week, delivered by the Cosmic Courier with a guaranteed safe arrival.",
    "usage": {
      "activation": "Eaten as an action.",
      "duration": "Instantaneous; temporary hit points last until used or lost due to damage.",
      "endsWhen": "Temporary hit points are lost upon taking damage or at the end of your next turn if not used.",
      "charges": "Unlimited, but only one can be consumed per short rest."
    },
    "priceReason": "The item is priced moderately to reflect its balance between utility and potential for chaos without being overpowered.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-23T20:28:48.431264+00:00",
    "aiReviewedAt": "2026-07-23T20:28:48.431264+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_star_road_fragment": {
    "id": "wario_land_star_road_fragment",
    "name": "Fragment of the Fallen Star Road",
    "description": "A Fragment of the Fallen Star Road is a shimmering piece of ancient star metal. It glows faintly with an inner light, a remnant of its celestial origins. This fragment was salvaged from the battlefield where the Star Road met its fate during the Great Civil War. Only once a week may it be used to call upon the power of the Star Spirits to restore something lost in that conflict—a loved one, a beloved place, or even a cherished memory. Each invocation weakens the fragment's bond with the cosmos until it eventually becomes inert after seven uses.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Wish Restoration",
      "Star Spirit Protection"
    ],
    "vendor": "wario_land",
    "shippedBy": "Starlight Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wish Restoration",
        "rules": "As a standard action, once per week, you may use this fragment to cast the Wish spell, limited solely to restoring something lost during the Great Civil War. The item's power diminishes with each use; after seven uses, it becomes inert."
      },
      {
        "title": "Star Spirit Protection",
        "rules": "As long as you hold the Fragment of the Fallen Star Road, you are under the protection of the Star Spirits. They will intervene if any attempt is made to misuse this power for personal gain or malicious intent."
      }
    ],
    "levelRequirementReason": "This fragment is accessible to all who wish to restore something lost during the Great Civil War, regardless of their level.",
    "vendorReason": "Wario Land has a deep connection to the events of the Great Civil War and the fragments that were recovered from it.",
    "shippingDetail": "The fragment is delivered via Starlight Courier, ensuring safe arrival but with a slight delay due to cosmic interference.",
    "usage": {
      "activation": "Standard action once per week",
      "duration": "Instantaneous effect; lasts until the desired restoration occurs or the spell fails",
      "endsWhen": "After seven uses or if misused",
      "charges": "1/week"
    },
    "priceReason": "The price reflects its rarity and limited utility, yet remains accessible to adventurers of all levels.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-23T20:28:44.008397+00:00",
    "aiReviewedAt": "2026-07-23T20:28:44.008397+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_super_bell_collar": {
    "id": "wario_land_super_bell_collar",
    "name": "Cracked Super Bell Collar",
    "description": "The Cracked Super Bell Collar, crafted by the Feline Transformation Division, is a bell collar that once jingled merrily but now lies silent and cracked, its metal surface dented from countless battles. This artifact imbues wearers with feline agility; they gain an additional climbing speed equal to their walking speed, making them nimble as cats. However, the bell's cracked state gives away their position, imposing a disadvantage on Stealth checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔔",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Climbing Agility",
      "Stealth Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Meow Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Climbing Agility",
        "rules": "While wearing this collar, the wearer gains an additional climbing speed equal to their walking speed. This effect is passive and applies continuously while the collar is worn."
      },
      {
        "title": "Stealth Disadvantage",
        "rules": "The bell's cracked state imparts a disadvantage on Stealth checks. This effect persists as long as the collar remains in use, but it can be mitigated by taking an action to silence the jingle temporarily."
      }
    ],
    "levelRequirementReason": "This collar is designed for adventurers who have already faced numerous challenges and battles, requiring a minimum level of expertise.",
    "vendorReason": "Wario Land's Feline Transformation Division specializes in crafting items that enhance the agility and stealth of its patrons, making this collar a fitting addition to their inventory.",
    "shippingDetail": "Delivered swiftly by Meow Mail, ensuring adventurers can put their new abilities to use immediately upon arrival.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "The collar is removed or destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted with rare materials and imbued with feline transformation magic, this collar commands a significant price in the market.",
    "priceOriginal": 6400,
    "priceReviewedAt": "2026-07-23T20:29:05.442440+00:00",
    "aiReviewedAt": "2026-07-23T20:29:05.442440+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_super_leaf_stem": {
    "id": "wario_land_super_leaf_stem",
    "name": "Wilted Super Leaf Stem",
    "description": "The Wilted Super Leaf Stem is a withered remnant of a once-mighty power-up, still clinging to traces of its former glory. Made from a leaf plucked from War-Torn Power-Up Fields, it retains a faint memory of the raccoon who used it. Plant this stem in moist soil, and there's a slim chance (1%) it will sprout into a brand-new Super Leaf after one week. While holding it during your jump, you can glide 10 feet horizontally with no vertical gain, a fleeting echo of its leafy might.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍂",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Leafy Glide",
      "Raccoon's Forest Memory"
    ],
    "vendor": "wario_land",
    "shippedBy": "Autumn Air Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Leafy Glide",
        "rules": "When you activate this effect as a bonus action while jumping, you can glide horizontally for up to 10 feet. This has no vertical component and does not allow you to jump higher than your normal reach."
      },
      {
        "title": "Raccoon's Forest Memory",
        "rules": "While holding the stem, you gain advantage on Nature checks made within forests or areas with dense foliage."
      }
    ],
    "levelRequirementReason": "The Wilted Super Leaf Stem is a simple item that can be used by any character to access its minor abilities.",
    "vendorReason": "Wario Land has a surplus of these stems, having collected them from various locations where the original Super Leaf was known to grow.",
    "shippingDetail": "The stem is shipped in a protective casing made from recycled leaf material, ensuring it arrives fresh and intact.",
    "usage": {
      "activation": "Bonus action while jumping",
      "duration": "Instantaneous",
      "endsWhen": "Ends when the jump ends or you land",
      "charges": "Unlimited"
    },
    "priceReason": "The stem is priced at 1000 XP, reflecting its origin from a rare and historically significant location.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-23T20:28:58.443700+00:00",
    "aiReviewedAt": "2026-07-23T20:28:58.443700+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_tanooki_tail": {
    "id": "wario_land_tanooki_tail",
    "name": "Tanooki Scout Tail",
    "description": "The Tanooki Scout Tail is a brittle, segmented tail with dappled fur and sharp claws. Crafted from the body of a shapeshifter who was caught behind enemy lines, this relic grants you unmatched agility in tight spaces. It can be attached to your waist, providing a +2 bonus to Acrobatics checks for balance and stability. When transformed into a statue, it offers AC 18 protection and stillness, but at the cost of silence and immobility. The tail's unpredictable nature ensures that any lie you tell while in its vicinity is easily detected, adding a layer of caution to your interactions.",
    "category": "equipment",
    "price": 7800,
    "icon": "🦝",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Tail Attachment",
      "Statue Form"
    ],
    "vendor": "wario_land",
    "shippedBy": "Shapeshifter Services",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Tail Attachment",
        "rules": "As an action, attach the tail to your waist. While attached, you gain a +2 bonus to Acrobatics checks (balance). This effect lasts until detached or until you take three consecutive turns without moving or speaking."
      },
      {
        "title": "Statue Form",
        "rules": "Once per long rest, you can transform into a statue using your action. While in this form, you gain an AC of 18 and are immobile for 10 minutes, during which time you cannot take actions or be targeted by spells or abilities that affect creatures."
      }
    ],
    "levelRequirementReason": "The Tanooki Scout Tail's shapeshifting properties require a high degree of control and finesse, best suited for experienced adventurers.",
    "vendorReason": "Wario Land is known for acquiring unique artifacts from various sources, including this tail that was once part of an enemy caught in a daring rescue operation.",
    "shippingDetail": "The package may arrive with minor damage due to the tail's brittle nature, requiring immediate handling upon arrival.",
    "usage": {
      "activation": "Action or Reaction (Tail Attachment); Action (Statue Form)",
      "duration": "Until detached or until you take three consecutive turns without moving or speaking; 10 minutes",
      "endsWhen": "Detached from the user, after three turns of inactivity, or at the end of a long rest for Statue Form",
      "charges": "Unlimited"
    },
    "priceReason": "The tail's rarity and the expertise required to craft it justify its high price.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T20:29:05.592576+00:00",
    "aiReviewedAt": "2026-07-23T20:29:05.592576+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_teyvat_cursed_key": {
    "id": "wario_land_teyvat_cursed_key",
    "name": "Teyvat Cursed Key",
    "description": "The Teyvat Cursed Key is a menacing key forged deep within the Archon’s vault. Its handle glows faintly with an eerie blue light, and the key itself bears the Boos symbol etched into its surface. This cursed artifact not only opens any gate in Teyvat marked with the Boos symbol but also subtly clouded one's vision for 1 hour. Use it wisely; the key grants a 20% chance to trigger a gacha event, and it can summon the malevolent Shadowed Archon when used.",
    "price": 1000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Opens any gate in Teyvat marked with the Boos symbol",
      "Clouds vision for 1 hour"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gate Opener",
        "rules": "The key can be used to open any gate in Teyvat that bears the Boos symbol. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Vision Clouding",
        "rules": "When used, this key clouds the user's vision for 1 hour. There is no saving throw involved, but the effect ends if the key is destroyed or the user successfully casts a clear-sighted spell."
      }
    ],
    "levelRequirementReason": "The Teyvat Cursed Key requires even the lowest-level adventurers to have some experience with such powerful and potentially dangerous artifacts.",
    "vendorReason": "Wario Land, being a faction that deals in rare and cursed items, is well-equipped to offer this artifact to its members.",
    "shippingDetail": "The key must be shipped via Pipe Express for the proper enchantment to remain intact. Shipping takes 3 days and includes a special delivery charm.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "1 hour (clouded vision)",
      "endsWhen": "Key destroyed, user successfully casts a clear-sighted spell, or the effect ends naturally upon expiration",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Teyvat Cursed Key's price is set at 1000 XP, reflecting its rarity and the potential risks it poses.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:29:17.136371+00:00",
    "aiReviewedAt": "2026-07-23T20:29:17.136371+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_thunder_cloud_bottle": {
    "id": "wario_land_thunder_cloud_bottle",
    "name": "Bottled Thunder Cloud",
    "description": "The Bottled Thunder Cloud is a vengeful storm trapped within a glass bottle, its electrified heart sparking with malevolent lightning. Crafted by Weather Weaponization Labs using ancient meteoric iron and enchanted to hold the essence of a thundercloud, it hovers above targets before unleashing a bolt of 2d8 lightning after 1d4 rounds. This tempest can be passed from hand to hand, transferring its stormy wrath to another creature who then must contend with its unpredictable strikes.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛈️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Hovers and Strikes",
      "Transferable Wrath"
    ],
    "vendor": "wario_land",
    "shippedBy": "Storm Shippers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hovers and Strikes",
        "rules": "When activated by a bonus action, the cloud hovers above the target for 1d4 rounds before striking with a bolt of 2d8 lightning. The target must make a DC 15 Dexterity saving throw or be struck immediately instead. On a successful save, they are immune to this effect for 1 hour."
      },
      {
        "title": "Transferable Wrath",
        "rules": "By touching another creature, the cloud can be transferred to them. The recipient must then make a DC 15 Dexterity saving throw; on failure, they immediately take 2d8 lightning damage and are affected by the cloud's strikes for 1 hour."
      }
    ],
    "levelRequirementReason": "This item is designed to be accessible early in a campaign, allowing players to experience its unique abilities without requiring high-level proficiency.",
    "vendorReason": "Wario Land's extensive network includes connections with Weather Weaponization Labs, ensuring they have access to such rare and powerful items.",
    "shippingDetail": "Delivered under cover of a stormy night, the package is marked with the signature emblem of Storm Shippers.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1d4 rounds or until transferred to another creature",
      "endsWhen": "The target makes a successful saving throw or when the recipient fails their save and takes damage",
      "charges": "Unlimited, but only one transferable instance at a time"
    },
    "priceReason": "This price reflects the item's rare crafting materials and the unique magical properties required to contain such a volatile storm.",
    "priceOriginal": 7300,
    "priceReviewedAt": "2026-07-23T20:29:35.241652+00:00",
    "aiReviewedAt": "2026-07-23T20:29:35.241652+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_thwomp_fragment": {
    "id": "wario_land_thwomp_fragment",
    "name": "Thwomp Fortress Fragment",
    "description": "A jagged, grimacing chunk of Thwomp rubble, its surface still warm from the heat of battle. The fragment bears the unmistakable mark of a Castle Defense Rubble, forged in the fires of the land's ancient defenses. It radiates an eerie stone breath that gives any nearby creature a chilling presence and advantage on Intimidation checks. This relic is more than mere rubble; it serves as a constant reminder of the Thwomp Fortress' resilience, offering resistance to fall damage due to its very nature.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗿",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Stone's Resilience",
      "Intimidating Presence"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heavy Haulers United",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stone's Resilience",
        "rules": "While carrying the Thwomp Fortress Fragment, you have resistance to fall damage. This effect lasts until you stop carrying it or until a short rest is taken."
      },
      {
        "title": "Intimidating Presence",
        "rules": "You gain advantage on Intimidation checks while within 30 feet of this fragment. The effect ends if the fragment is destroyed, lost, or no longer within the specified range."
      }
    ],
    "levelRequirementReason": "This fragment can be used by lower-level characters as a reminder and tool of resilience in battles against formidable foes.",
    "vendorReason": "Wario Land, known for his collection of rare relics from the land's history, offers this fragment to adventurers seeking tangible ties to its past.",
    "shippingDetail": "The shipment is handled by Heavy Haulers United, who ensure that the fragile nature of this relic is respected during transit.",
    "usage": {
      "activation": "Passive effect while carrying the fragment",
      "duration": "Until you stop carrying it or until a short rest is taken",
      "endsWhen": "Destroyed, lost, or no longer within 30 feet of an Intimidation check target",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the fragment's rarity and its utility in both combat and social interactions.",
    "priceOriginal": 5900,
    "priceReviewedAt": "2026-07-23T20:29:38.554732+00:00",
    "aiReviewedAt": "2026-07-23T20:29:38.554732+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_toad_beret_of_courage": {
    "id": "wario_land_toad_beret_of_courage",
    "name": "Toad Beret of Courage",
    "description": "The Toad Beret of Courage is a red beret with a subtle Toad Special Forces insignia, worn by elite commandos during the uprising. This beret grants you advantage on saving throws against fear due to your steadfast bravery as a Toad. However, it also imposes disadvantage when attempting Intimidation checks, as Toads are renowned for their cuteness rather than intimidation. After 10 uses, the magic fades and the beret returns to mundane status.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎩",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Advantage on saving throws vs. fear",
      "Disadvantage on Intimidation checks"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Trot Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Courageous Heart",
        "rules": "When you wear this beret, you gain advantage on saving throws against being frightened due to your steadfast bravery as a Toad. This effect lasts until the start of your next turn after removing the beret."
      },
      {
        "title": "Cute Disadvantage",
        "rules": "While wearing this beret, you are at disadvantage on Intimidation checks and similar interactions where intimidation is required due to the beret's cute appearance. This effect persists as long as you wear the beret."
      }
    ],
    "levelRequirementReason": "This item is suitable for lower-level adventurers who might face fear-based challenges early in their journey.",
    "vendorReason": "Wario Land, known for his encounters with Toads, sells this beret as a tribute to the brave Toad commandos.",
    "shippingDetail": "Delivered by Toad Trot Transport, which ensures safe and timely delivery of the beret directly from Toad Special Forces headquarters.",
    "usage": {
      "activation": "Wearing the beret is required to gain its effects; it does not activate via action or other means.",
      "duration": "Instantaneous effect on saving throws vs. fear, lasts until start of next turn after removal",
      "endsWhen": "The use ends when you remove the beret or after 10 uses",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item strikes a balance, providing useful benefits but with clear drawbacks and limited magic, making it accessible yet valuable.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-23T20:29:23.547309+00:00",
    "aiReviewedAt": "2026-07-23T20:29:23.547309+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_toad_brigade_standard": {
    "id": "wario_land_toad_brigade_standard",
    "name": "Bloodied Toad Brigade Standard",
    "description": "The Bloodied Toad Brigade Standard is a tattered but resolute flag imbued with the valor of countless battles. Crafted from the remnants of Captain Toad's final charge, it still bears the scent of victory and sacrifice. When unfurled, its presence rallies allies within 120 feet, granting them temporary invincibility to fear and bolster their defenses. Nearby toads will fight tirelessly for its return if it falls into ill hands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏴",
    "stock": 1,
    "rarity": "very_rare",
    "effects": [
      "Rallying Banner",
      "Fearless Allies"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Tears Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rallying Banner",
        "rules": "At the start of your turn, as a bonus action, you can unfurl this banner within 60 feet. All allies in a 120-foot radius regain 3d10 hit points and immediately end one condition."
      },
      {
        "title": "Fearless Allies",
        "rules": "Allies within 60 feet gain +2 to AC and advantage on saving throws against being frightened for 10 minutes. This effect ends if the standard is touched to the ground or destroyed."
      }
    ],
    "levelRequirementReason": "The banner can be easily held by a beginner, as it remains a symbol of valor rather than an item requiring significant strength.",
    "vendorReason": "As the flag is tied to Captain Toad's legacy, Wario Land is the most fitting vendor for such an artifact.",
    "shippingDetail": "The courier ensures safe passage through treacherous lands, delivering the banner swiftly.",
    "usage": {
      "activation": "Bonus action to unfurl or rally",
      "duration": "10 minutes per use; ends if touched to ground or destroyed",
      "endsWhen": "Touched to the ground, destroyed, or its effect duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "The banner's rarity and historical significance make it a valuable yet balanced purchase for any adventurer.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:29:31.353750+00:00",
    "aiReviewedAt": "2026-07-23T20:29:31.353750+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_toad_cap_insignia": {
    "id": "wario_land_toad_cap_insignia",
    "name": "Toad Cap Insignia",
    "description": "The Toad Cap Insignia is a small, intricately designed badge that once adorned the uniform of a dedicated Toad officer. Crafted from polished brass and emblazoned with a symbol of unity, this relic holds a special place in the hearts of Toads. It grants you advantage on Charisma checks when dealing with other Toads (who recognize its meaning), but also brings disadvantage to such interactions with those who oppose the Toad way of life. Additionally, it subtly glows when near hidden safehouses, aiding your investigation efforts without drawing undue attention.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Unity Badge",
      "Rebel Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Courier Service",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Unity Badge",
        "rules": "When you interact with Toad factions or individuals who recognize the badge's symbolism, you gain advantage on Charisma checks. This effect is passive and lasts until the start of your next turn."
      },
      {
        "title": "Rebel Disadvantage",
        "rules": "You incur disadvantage on Charisma checks when interacting with groups or individuals that are known to oppose Toads. This persists for 1 minute, after which it ends."
      }
    ],
    "levelRequirementReason": "The badge's symbolism and utility make it accessible to all adventurers who value the Toad cause.",
    "vendorReason": "Wario Land is a long-time ally of Toads, often providing support through trade and diplomacy.",
    "shippingDetail": "Delivered swiftly by the Toad Courier Service, ensuring safe arrival at your doorstep.",
    "usage": {
      "activation": "Passive for Unity Badge; instantaneous for Rebel Disadvantage when relevant Charisma checks are made.",
      "duration": "Unity Badge: Until start of next turn. Rebel Disadvantage: Lasts 1 minute.",
      "endsWhen": "Unity Badge: Ends naturally at the start of your next turn. Rebel Disadvantage: Ends after 1 minute or upon successful check.",
      "charges": "Unlimited"
    },
    "priceReason": "The badge's utility and limited, strategic advantages justify its cost in experienced adventurer XP.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-23T20:29:43.541192+00:00",
    "aiReviewedAt": "2026-07-23T20:29:43.541192+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_toad_dog_tags": {
    "id": "wario_land_toad_dog_tags",
    "name": "Toad Soldier Dog Tags",
    "description": "These dog tags are crafted from the cold steel of a fallen Toad warrior, their names meticulously scratched out in the wake of war's fury. They bear the emblem of the Mushroom Kingdom Military, a symbol both revered and feared by all who know of its standard issue. Wearing these tags grants you an advantage on History checks concerning the civil war, but they also carry the weight of memory; those with fear related to the Toad warriors' sacrifice may gain disadvantage on saving throws against such effects.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏷️",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Advantage on History Checks",
      "Disadvantage on Saves vs. Fear"
    ],
    "vendor": "wario_land",
    "shippedBy": "Memorial Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on History Checks",
        "rules": "When you use the dog tags to make a History check related to the civil war, you have advantage on the roll."
      },
      {
        "title": "Disadvantage on Saves vs. Fear",
        "rules": "If you are targeted by an effect that deals with fear from the Toad warriors' sacrifice, you must succeed on a DC 12 saving throw or gain disadvantage until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners to have a connection to a fallen hero and understand the legacy of the Toad warriors.",
    "vendorReason": "Wario Land, as a former military officer, has access to such memorabilia from his days in service.",
    "shippingDetail": "Ships with Memorial Mail's standard delivery, ensuring safe and respectful handling of the items.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Instantaneous for History checks; lasts until end of next turn on a failed save vs. fear.",
      "endsWhen": "Exhausted after one use per day or expended in a successful History check.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The tags are made from a rare material and have sentimental value, making them moderately priced for their utility.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T20:30:04.388141+00:00",
    "aiReviewedAt": "2026-07-23T20:30:04.388141+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_toad_rebel_pamphlet": {
    "id": "wario_land_toad_rebel_pamphlet",
    "name": "Toad Rebel Pamphlet",
    "description": "The Toad Rebel Pamphlet is a worn, folded leaflet bound by sturdy twine. Its ink has faded to a smudged blue, yet its message of unity against tyranny remains bold and defiant. Issued by the Toad Underground Press, this pamphlet grants advantage on Charisma checks with fellow rebels while imposing disadvantage on similar checks with loyalists. Unveiling hidden folds reveals a crude map of Mushroom Kingdom ruins, granting advantage to Survival checks in those locations. Wielding it can incite small riots that either bring aid from grateful rebels or chaos among the enemy ranks.",
    "category": "equipment",
    "price": 1000,
    "icon": "📄",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Advantage vs Rebels",
      "Disadvantage vs Loyalists"
    ],
    "vendor": "wario_land",
    "shippedBy": "Rebel Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage vs Rebels",
        "rules": "When used, this pamphlet grants advantage on Charisma checks when interacting with fellow rebels. The effect lasts until the start of your next turn and can be activated once per short or long rest."
      },
      {
        "title": "Disadvantage vs Loyalists",
        "rules": "Using the pamphlet imposes disadvantage on Charisma checks made against loyalist forces. This effect is in effect for one hour after activation and can only be used once per day."
      }
    ],
    "levelRequirementReason": "The Pamphlet's message of rebellion and its ability to incite small riots are accessible to low-level characters who align with the Toad resistance.",
    "vendorReason": "Wario Land, a notorious businessman, sells this pamphlet as a means to keep his business dealings in check while aiding the Toad Underground.",
    "shippingDetail": "Ships via courier with a 24-hour delivery time, ensuring timely distribution of revolutionary materials.",
    "usage": {
      "activation": "Read and unfold the pamphlet to activate its effects.",
      "duration": "Instantaneous for 'Advantage vs Rebels', one hour for 'Disadvantage vs Loyalists'.",
      "endsWhen": "Expires at the start of your next turn or after one hour, whichever comes first. Uses are limited to once per short or long rest and once per day.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The pamphlet's revolutionary potential, combined with its ability to incite small riots, makes it a valuable tool for low-level adventurers who support the Toad rebellion, justifying its moderate price in XP.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T20:30:10.187317+00:00",
    "aiReviewedAt": "2026-07-23T20:30:10.187317+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_toad_rebel_propaganda_poster": {
    "id": "wario_land_toad_rebel_propaganda_poster",
    "name": "Toad Rebel Propaganda Poster (Wario Signed)",
    "description": "This tattered, hand-painted poster of a Toad dressed in rebellion against Bowser has been artfully altered to feature Wario's face instead. The ink is smudged, and it reads, 'DOWN WITH BOWSER! UP WITH... WARIO?' with an uncanny mix of humor and defiance. Displayed prominently during a Toad Rebel rally, this propaganda piece grants advantage on Charisma checks for support from fellow rebels. However, the poor quality of the poster's composition causes art critics to scoff and distracts from its intended message, imposing disadvantage on any attempts to make a favorable impression among refined audiences.",
    "category": "equipment",
    "price": 1000,
    "icon": "📰",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Advantage on Charisma checks with Toad Rebels",
      "Disadvantage on Charisma checks for highbrow audiences"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Package Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Support from Toad Rebels",
        "rules": "When displayed in a rally or public gathering of Toad Rebels, the poster grants advantage on Charisma (Persuasion) checks made to gain support. The effect lasts until the end of your next long rest."
      },
      {
        "title": "Critique from Art Critics",
        "rules": "The poor quality and unconventional composition of the poster impose disadvantage on any Charisma (Performance) check aimed at impressing refined audiences or art critics within a 10-foot radius. This effect persists until the next daybreak."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who may wish to support Toad Rebel causes without needing to be of higher level.",
    "vendorReason": "Wario Land, known for his own brand of rebellion against Bowser's tyranny, sells this poster as a humorous statement and to spread his influence among the Toads.",
    "shippingDetail": "Ships within 24 hours with discreet delivery ensuring it arrives undisturbed by Koopa patrols.",
    "usage": {
      "activation": "Passive effect when displayed in a rally or public gathering of Toad Rebels. Artistic critique is always present whenever refined audiences are nearby.",
      "duration": "Until the end of your next long rest for support from rebels; until daybreak for art criticism",
      "endsWhen": "At the conclusion of a long rest or at daybreak, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The poster's unique combination of humor and rebellion, its association with Wario Land, and its effect on both Toad Rebel support and refined audiences justify this price.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-23T20:30:12.507172+00:00",
    "aiReviewedAt": "2026-07-23T20:30:12.507172+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_toad_soldier_helmet": {
    "id": "wario_land_toad_soldier_helmet",
    "name": "Toad Soldier Helmet",
    "description": "The Toad Soldier Helmet is a dented yet resilient piece of war-surplus armor. Crafted by the Mushroom Kingdom Armory, this helmet features a distinctive mushroom cap insignia that hints at its origins. It offers +1 AC against bludgeoning attacks, a testament to the resilience of Toad soldiers. The helmet muffles voices effectively, granting disadvantage on Perception checks for hearing. In the eyes of Toads, it's seen as a symbol of unity and strength, offering advantage on Charisma (Persuasion) attempts with fellow Toads but disadvantage when dealing with rebellious factions.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛑️",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "+1 AC against bludgeoning attacks",
      "Muffle voices: disadvantage on Perception checks for hearing"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toad Trot Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bludgeoning Defense",
        "rules": "While wearing the Toad Soldier Helmet, you gain +1 to your AC against bludgeoning damage. This effect is passive and lasts until you remove the helmet."
      },
      {
        "title": "Voice Muffling",
        "rules": "When worn, the helmet muffles voices around you, granting disadvantage on Perception checks related to hearing sounds. This effect persists as long as the helmet remains in place."
      }
    ],
    "levelRequirementReason": "This helmet is designed for beginners and provides basic protection suitable for early adventurers.",
    "vendorReason": "Wario Land sells a range of items from various vendors, including the Mushroom Kingdom Armory's war surplus equipment.",
    "shippingDetail": "Ships via Toad Trot Transport within one week.",
    "usage": {
      "activation": "Passive effect upon donning the helmet; no activation required.",
      "duration": "Until the helmet is removed or destroyed.",
      "endsWhen": "The helmet is taken off or damaged beyond use.",
      "charges": "Unlimited uses, as long as the helmet remains intact."
    },
    "priceReason": "This price reflects the item's common rarity and its utility for beginners in terms of both AC enhancement and social perception bonuses.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:29:57.754175+00:00",
    "aiReviewedAt": "2026-07-23T20:29:57.754175+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_waluigi_god_mask": {
    "id": "wario_land_waluigi_god_mask",
    "name": "Waluigi God Mask",
    "description": "The Waluigi God Mask is an insidious relic forged by the Pokémon League. Wielding it grants you godlike power, but at a terrible cost. Your attacks deal +50% damage and increase your attack speed by 40%, turning every strike into a flurry of chaos. However, this divine gift comes with the curse of Waluigi’s madness; you become uncontrollably aggressive, attacking anyone nearby. The mask's power is only available to those of unwavering will.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Godly Power",
      "Madness"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Godly Power",
        "rules": "While wearing the mask, your attacks deal +50% damage and increase your attack speed by 40%. This effect is instantaneous and lasts until you are no longer wielding the mask. There is no save DC required."
      },
      {
        "title": "Madness",
        "rules": "Once per short rest, you can activate the curse of Waluigi’s chaos. For the duration of your next combat encounter, anyone within 10 feet of you must make a Wisdom saving throw (DC 15) or be affected by the aggressive aura until the start of your next turn."
      }
    ],
    "levelRequirementReason": "Only those with the strength and willpower to wield such power should dare don this mask.",
    "vendorReason": "Wario Land has a reputation for dealing in rare and dangerous items, including cursed artifacts like the Waluigi God Mask.",
    "shippingDetail": "Due to its volatile nature, this item ships within a specially reinforced box to prevent any accidental misuse during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous and lasts until you stop wearing the mask or are incapacitated.",
      "endsWhen": "You are no longer wielding it or become incapacitated.",
      "charges": "Unlimited, but only usable once per short rest."
    },
    "priceReason": "This relic is a rare and dangerous item, balancing its power with an affordable price to ensure that it remains a temptation rather than a necessity for the truly bold.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-23T20:30:15.261425+00:00",
    "aiReviewedAt": "2026-07-23T20:30:15.261425+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_war_correspondence_forgeries": {
    "id": "wario_land_war_correspondence_forgeries",
    "name": "Fake War Correspondence (Mario to Luigi)",
    "description": "This stack of letters purports to be a correspondence between Mario and Luigi. The ink is smudged, and phrases are awkwardly phrased, suggesting an amateur hand. Yet, these forgeries are so convincing that they could fool even the most perceptive minds. If you're caught with this in your possession, there's a 10% chance Luigi will appear, looking confused but suspicious, ready to challenge you on their authenticity. The letters' poor construction also makes them easy to spot as fakes by literate NPCs who can read through them.",
    "category": "equipment",
    "price": 1000,
    "icon": "📨",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Forgeries: Advantage on checks about Mario and Luigi's relationship",
      "Poorly Written: Disadvantage on checks with literate NPCs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suspicious Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forged Letters",
        "rules": "When used, this item grants advantage on checks regarding the relationship between Mario and Luigi. This effect lasts until the end of your next turn."
      },
      {
        "title": "Inaccurate Writing Style",
        "rules": "Disadvantage is applied to any check involving literate NPCs who can read these letters. The effect persists for 1 minute, or until you use an action to discard them."
      }
    ],
    "levelRequirementReason": "This forgery is simple enough that even a beginner could attempt to wield it.",
    "vendorReason": "Wario Land sells these forgeries as part of his extensive line of counterfeit goods.",
    "shippingDetail": "Delivered via a suspiciously slow mail service known for its frequent delays.",
    "usage": {
      "activation": "Use an action to read the letters and take advantage on checks regarding Mario and Luigi's relationship.",
      "duration": "Until the end of your next turn or until discarded by using an action.",
      "endsWhen": "Either when used up, discarded with an action, or if discovered as a forgery by literate NPCs.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The quality of the forgeries and their potential to fool even experienced players justify this price.",
    "priceOriginal": 4100,
    "priceReviewedAt": "2026-07-23T20:30:21.710295+00:00",
    "aiReviewedAt": "2026-07-23T20:30:21.710295+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_war_torn_star_road_sign": {
    "id": "wario_land_war_torn_star_road_sign",
    "name": "War-Torn Star Road Sign",
    "description": "The War-Torn Star Road Sign is a rusted metal signpost bent into an unnatural angle. Its surface is pitted with battle scars, and its once-gleaming star has been dulled by years of weathering. Made from the Kingdom Highway Department's steel in the Ruins, it still points steadfastly to the legendary Star Road despite its damage. This battered sign offers both practical and mystical aid: as a weapon, it deals 1d6 bludgeoning damage with advantage against flying foes; more so, its presence grants travelers an intuitive sense of direction, boosting Navigation checks by 2 in the Mushroom Kingdom.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛣️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Starlight Beacon",
      "Rusty Vulnerability"
    ],
    "vendor": "wario_land",
    "shippedBy": "Roadside Relic Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Starlight Beacon",
        "rules": "When used as a weapon against flying foes, this sign grants advantage on attack rolls. Additionally, it can be held to grant the user advantage on Navigation checks in the Mushroom Kingdom for 1 hour."
      },
      {
        "title": "Rusty Vulnerability",
        "rules": "After exposure to rain or a significant period of dampness, the sign's metal degrades further, imposing disadvantage on all ability checks and saving throws until it dries out. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "The War-Torn Star Road Sign is accessible to beginners as its utility lies in aiding travelers rather than requiring advanced combat skills.",
    "vendorReason": "Wario, known for his land-based antics and resourcefulness, often sells items with a touch of the bizarre and useful.",
    "shippingDetail": "Ships via Roadside Relic Relay, ensuring safe delivery to any destination within Mushroom Kingdom territory.",
    "usage": {
      "activation": "Used as an improvised weapon or held for Navigation checks.",
      "duration": "Starlight Beacon effect lasts until the end of your next turn. Rusty Vulnerability is a daily effect that applies when exposed to rain.",
      "endsWhen": "The effects naturally wear off after their duration ends or when the sign dries out in the sun.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced at 1000 XP as it combines practical utility with a unique narrative element, offering both combat and exploration benefits.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-23T20:30:30.484721+00:00",
    "aiReviewedAt": "2026-07-23T20:30:30.484721+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_wario_wardrobe": {
    "id": "wario_land_wario_wardrobe",
    "name": "Wario Land Wario Wardrobe",
    "description": "The Wario Land Wario Wardrobe is a musty, creaking wardrobe that holds a trove of Wario's ill-fitting hand-me-downs. Each day, it spits out a piece of clothing imbued with the former villain’s mischievous energy, granting +1 to a random ability score for the wearer. The clothes are stretched beyond their original size and have an unmistakable aroma of garlic that clings to anyone who dons them. Beware, for if you’re caught off guard, you must exclaim 'Wah!'—a sound so loud it can be heard miles away, giving disadvantage on Stealth checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "👔",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Random Daily Ability Boost",
      "Persistent Garlic Aroma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wafting Cloud",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Daily Ability Boost",
        "rules": "At the start of each day, this wardrobe grants a +1 bonus to a random ability score for you. This effect is instantaneous and lasts until the next dawn."
      },
      {
        "title": "Persistent Garlic Aroma",
        "rules": "While wearing any item from this wardrobe, you are considered disheveled and have disadvantage on Stealth checks due to your pungent odor."
      }
    ],
    "levelRequirementReason": "This wardrobe is suitable for all adventurers, regardless of level, as it provides a basic utility.",
    "vendorReason": "Wario Land Wardrobe specializes in quirky and mischievous items that reflect the eccentric nature of its creator.",
    "shippingDetail": "The wardrobe is carefully packed to prevent any of Wario's hand-me-downs from being lost or damaged during transit.",
    "usage": {
      "activation": "Instantaneous daily ability boost; no activation needed for the persistent garlic aroma effect.",
      "duration": "Until the next dawn and while wearing the item.",
      "endsWhen": "The day ends or you remove the item from your body.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This wardrobe offers a basic utility without being overly powerful, making it accessible and balanced.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-23T20:30:30.394945+00:00",
    "aiReviewedAt": "2026-07-23T20:30:30.394945+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_wario_ware_microtransaction_amulet": {
    "id": "wario_land_wario_ware_microtransaction_amulet",
    "name": "WarioWare Microtransaction Amulet",
    "description": "The WarioWare Microtransaction Amulet is a shimmering gem that pulses with neon light. Crafted by the mischievous WarioWare, it siphons your gold for 'enhancements' but offers invaluable boosts to your abilities. It plays a jingle each time you activate it, giving you a +1 bonus on your next attack roll, ability check, or saving throw. However, it also saps 1 gold per hour while worn, turning your pockets lighter with every passing moment. Despite its drawbacks, the amulet grants a 'loyalty bonus' after five uses, offering one free use to those who have paid their dues.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Gold Siphon",
      "Loyalty Bonus"
    ],
    "vendor": "wario_land",
    "shippedBy": "Microtransaction Network Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gold Siphon",
        "rules": "As a bonus action, you gain a +1 bonus to your next attack roll, ability check, or saving throw. You lose 1 gold per hour while wearing the amulet."
      },
      {
        "title": "Loyalty Bonus",
        "rules": "After five uses of the amulet (regardless of success), it grants you one free use thereafter until a long rest is taken."
      }
    ],
    "levelRequirementReason": "The amulet's effects are accessible to players early in their journey, allowing them to quickly bolster their abilities.",
    "vendorReason": "WarioLand is known for its quirky and often questionable wares, including this item that aligns with the shop's reputation for exploiting player wallets.",
    "shippingDetail": "The amulet ships instantly but requires you to input your payment method upon receipt.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, with effect lasting until the start of your next turn",
      "endsWhen": "After five uses or when a long rest is taken",
      "charges": "5/5"
    },
    "priceReason": "The balanced price reflects its limited duration and the continuous cost of wearing it, making it a tempting but not overpowered choice.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T20:30:36.031375+00:00",
    "aiReviewedAt": "2026-07-23T20:30:36.031375+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_warp_star_shard": {
    "id": "wario_land_warp_star_shard",
    "name": "Warp Star Shard",
    "description": "The Warp Star Shard is a crystalline fragment from an ancient cross-dimensional vessel. Crafted during the height of the dimensional wars, this shard glows with residual energy that crackles and pulses. It can be used to teleport short distances, but its unstable nature means it might warp your destination by as much as 30 feet. The shard also leaves a sparkling trail behind you, making it visible for one minute, and there is always the risk of summoning a minor creature from another plane when activated.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Teleport",
      "Minor Dimensional Breech"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stellar Shipping",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Dimensional Teleport",
        "rules": "You can teleport up to 120 feet in any direction, including upwards. This effect is a bonus action and consumes one use per long rest. You have a 15% chance of arriving no more than 30 feet from your intended destination. The DM decides on the exact location if you fail this roll."
      },
      {
        "title": "Minor Dimensional Breech",
        "rules": "There is a 10% chance that when you activate this shard, a minor creature from another dimension will be summoned within 30 feet of your destination. The DM chooses the type and size of the creature. This effect lasts for one minute."
      }
    ],
    "levelRequirementReason": "This Shard's unstable nature and powerful teleportation capabilities require a certain level to handle its risks effectively.",
    "vendorReason": "Wario Land, being an eccentric collector of ancient relics, has acquired this fragment as part of his extensive collection.",
    "shippingDetail": "Ships via dimensional express; delivery is instantaneous but the shard may be slightly unstable upon arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous teleport, minor creature summoning lasts one minute",
      "endsWhen": "Used up or destroyed when summoned creature escapes",
      "charges": "One use per long rest"
    },
    "priceReason": "This Shard is a rare and powerful item, balancing its high level requirement with an appropriate XP cost.",
    "priceOriginal": 9400,
    "priceReviewedAt": "2026-07-23T20:30:42.593670+00:00",
    "aiReviewedAt": "2026-07-23T20:30:42.593670+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_wartime_wario_waulitzer": {
    "id": "wario_land_wartime_wario_waulitzer",
    "name": "Wartime Wario-Waulitzer Organ",
    "description": "The Wartime Wario-Waulitzer Organ looms like a monolithic pipe organ forged in greed and garlic. Its massive pipes glisten with a dark, oily sheen, and its keyboard is encrusted with gold coins. This relic was 'liberated' by Wario from the smoldering ruins of a cathedral, where it served as an ironic tribute to music's power over the masses. Playing it for 1 minute compels nearby creatures within hearing range (60 feet) into a dance they cannot resist until the song ends, and alternatively, playing a funeral march casts Circle of Death centered on you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎹",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Dance Compulsion",
      "Circle of Death"
    ],
    "vendor": "wario_land",
    "shippedBy": "Church on Wheels",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Dance Compulsion",
        "rules": "Activates as a bonus action. Creatures within 60 feet who can hear the organ must succeed on a DC 18 Wisdom saving throw or be charmed for 1 minute by the irresistible dance, unable to take any actions but those that do not provoke attacks of opportunity."
      },
      {
        "title": "Circle of Death",
        "rules": "Activates as an action. Casts Circle of Death centered on you with a DC 18 save. Targets are creatures within 30 feet who can hear the organ and are subject to this effect until it ends or is dispelled."
      }
    ],
    "levelRequirementReason": "Requires significant performance skill and control, matching Wario's notorious musical prowess.",
    "vendorReason": "Wario personally 'liberated' this organ and keeps it as a source of both amusement and power in his land.",
    "shippingDetail": "Ships with the Church on Wheels, ensuring safe arrival but requiring a week's travel time due to its massive size.",
    "usage": {
      "activation": "Bonus Action or Action (depending on effect)",
      "duration": "1 Minute for Dance Compulsion; Concentration until end of your turn for Circle of Death",
      "endsWhen": "Song ends or dispelled by a successful save, and target is immune to the same organ's effects for 24 hours.",
      "charges": "Unlimited, but requires 500 gp gold coins inserted into the organ per use (Wario’s fee)"
    },
    "priceReason": "Balanced as a rare, powerful tool that requires both skill and resources to wield effectively.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T20:30:52.110889+00:00",
    "aiReviewedAt": "2026-07-23T20:30:52.110889+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_wiggler_segment": {
    "id": "wario_land_wiggler_segment",
    "name": "Wiggler Body Segment",
    "description": "This rubbery segment of a Wiggler is a testament to forced labor. Its surface is marked with angry red veins, pulsating slightly as it turns red when damaged. The segment can be worn as padding that provides +1 AC against bludgeoning attacks and has the unique ability to bounce, adding +5 feet to your jump height. When you land on your feet after jumping, you may also attempt a DC 12 Dexterity (Acrobatics) check for an advantage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐛",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Bounce Boost",
      "Angry Veins"
    ],
    "vendor": "wario_land",
    "shippedBy": "Segmented Shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bounce Boost",
        "rules": "When you land on your feet after jumping, you may attempt a DC 12 Dexterity (Acrobatics) check for an advantage. This effect can be used once per short or long rest."
      },
      {
        "title": "Angry Veins",
        "rules": "The segment turns red and emits a low growl when it takes damage, dealing 1 bludgeoning damage to the attacker who damaged it. This effect has no save DC and can occur multiple times per short or long rest."
      }
    ],
    "levelRequirementReason": "This segment is designed for lower-level characters as a way to introduce them to the dangers of forced labor.",
    "vendorReason": "Wario Land, known for his cruelty towards Wigglers, often forces these segments into service before selling them.",
    "shippingDetail": "Delivered by Wario Land's own Segmented Shipping, which ensures the segment is carefully packed to prevent any damage during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous for Bounce Boost and ends when the rest ends. Angry Veins has a duration of 1 minute per short or long rest.",
      "endsWhen": "The rest ends, and once per short or long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Considering its forced origin and the limited protection it provides, this segment is priced at a common rarity level to reflect its utility without being overpowered.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T20:30:49.917814+00:00",
    "aiReviewedAt": "2026-07-23T20:30:49.917814+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_wing_cap_feather": {
    "id": "wario_land_wing_cap_feather",
    "name": "Wing Cap Feather (Molted)",
    "description": "This red feather, shed during a fierce dogfight, retains the essence of its avian origin. It whispers tales of aerial prowess and resilience. When tucked into your Wing Cap, it enhances jump distance by 10 feet, making you as agile as the wind. If you fall, this fragile relic shatters, leaving only memories of flight. With a quill made from this feather, forging official documents becomes a breeze, granting advantage on Forgery checks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪶",
    "stock": 6,
    "rarity": "common",
    "effects": [
      "Tuck in hat: +10ft jump distance (light as a feather)",
      "Fragile feather: destroyed if you take fall damage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Flight Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tuck in hat",
        "rules": "When this feather is tucked into your Wing Cap, it grants the wearer advantage on Strength checks or saving throws related to jumping. This effect lasts until the end of your next turn."
      },
      {
        "title": "Fragile Feather",
        "rules": "If you take fall damage, this feather shatters and ceases to function immediately. It can be used once before being destroyed by impact."
      }
    ],
    "levelRequirementReason": "It requires no specific level as it is a common item, but the Wing Cap must already be equipped.",
    "vendorReason": "Wario Land has a surplus of such feathers from his squadron's battles over the Mushroom Kingdom.",
    "shippingDetail": "Ships via aerial delivery, ensuring you receive your feather quickly and intact.",
    "usage": {
      "activation": "Tuck it into your Wing Cap as an action.",
      "duration": "Until the end of your next turn after activation.",
      "endsWhen": "The effect ends when the duration expires or if the wearer takes fall damage, destroying the feather.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its unique origin and utility in aerial combat scenarios.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-23T20:30:51.416693+00:00",
    "aiReviewedAt": "2026-07-23T20:30:51.416693+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_yoshi_last_egg": {
    "id": "wario_land_yoshi_last_egg",
    "name": "The Last Yoshi Egg (Unhatched)",
    "description": "The Last Yoshi Egg (Unhatched) is a fragile, iridescent egg that glows faintly under moonlight. Crafted in the twilight of the Yoshi lineage's existence, it contains within its shell the last hope for a species nearly lost to war and neglect. This relic, when hatched, spawns a unique Yoshi with 120 hit points, capable of flight and carrying all party members. However, factions across the Mushroom Kingdom vie for control over this egg, offering bounties and threats in their pursuit.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥚",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Unique Companion",
      "Factional Pursuit"
    ],
    "vendor": "wario_land",
    "shippedBy": "Armed Escort Required",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hatching Ritual",
        "rules": "Activates as a ritual action. The egg hatches after one month, yielding a Yoshi with 120 hit points and the ability to fly and carry all party members for one hour each day."
      },
      {
        "title": "Factional Threats",
        "rules": "Every faction in the Mushroom Kingdom will pursue or attempt to destroy this egg. Once hatched, the unique Yoshi may become a target of assassination attempts and hostile encounters."
      }
    ],
    "levelRequirementReason": "Hatching the egg requires careful handling and understanding of its origins.",
    "vendorReason": "Wario, having his own interest in rare items, offers this unique relic for sale despite the risks it poses.",
    "shippingDetail": "Delivered by a select group of armed couriers who ensure safe delivery to the buyer.",
    "usage": {
      "activation": "Activates once through a one-month ritual action upon purchase.",
      "duration": "Instantaneous activation, with effects lasting until the Yoshi reaches its maximum carrying capacity or the party's flight ends.",
      "endsWhen": "The unique companion is dismissed or the Yoshi reaches its daily flight limit.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced for a rare, one-time-use item with significant lore and utility.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-23T20:31:03.479358+00:00",
    "aiReviewedAt": "2026-07-23T20:31:03.479358+00:00",
    "aiReviewVersion": 1
  },
  "wario_land_yoshi_saddle_remains": {
    "id": "wario_land_yoshi_saddle_remains",
    "name": "Yoshi Saddle Remains",
    "description": "The worn saddle retains the resilient spirit of Yoshi cavalry. Its leather is frayed but still strong, and it bears the scars of countless battles. When attached to a dinosaur-like mount, its tattered straps grant +5 feet of speed, enhancing your charge through enemy lines. The saddle's presence unsettles Yoshis, imposing disadvantage on Animal Handling checks with them as they recall the war's horrors. Within, a fragment of a Yoshi egg grants advantage on Nature checks related to eggs and occasionally allows for summoning a spectral Yoshi for a temporary mount.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎨",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Mount Speed Boost",
      "Yoshi Unrest"
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mount Speed Boost",
        "rules": "When attached to a dinosaur-like creature, the saddle grants +5 feet of speed. This effect lasts until the mount moves into combat or the rider dismounts."
      },
      {
        "title": "Yoshi Unrest",
        "rules": "The saddle imposes disadvantage on Animal Handling checks with Yoshis. This effect persists for 1 hour after attachment and can be applied once per week."
      }
    ],
    "levelRequirementReason": "This saddle is suitable for any adventurer, providing a simple enhancement without requiring high levels.",
    "vendorReason": "Wario's Land Shop stocks this relic as it offers unique enhancements to adventurers and mounts alike.",
    "shippingDetail": "Delivered with priority service, ensuring the saddle arrives in pristine condition for its new owner.",
    "usage": {
      "activation": "Attach the saddle to a compatible mount.",
      "duration": "Until the mount moves into combat or the rider dismounts.",
      "endsWhen": "Combat or dismounting of the mount.",
      "charges": "Unlimited, as it can be reattached."
    },
    "priceReason": "The saddle's unique effects and historical significance justify its price, aligning with other common yet powerful equipment in the game.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-23T20:31:00.413187+00:00",
    "aiReviewedAt": "2026-07-23T20:31:00.413187+00:00",
    "aiReviewVersion": 1
  }
};
