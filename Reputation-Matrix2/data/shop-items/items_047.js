// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_047 = {
  "valley_bowser_smoldering_helm": {
    "id": "valley_bowser_smoldering_helm",
    "name": "Smoldering Helm of the Ashen King",
    "description": "The Smoldering Helm of the Ashen King is a volcanic helm that crackles with heat and emanates an aura of molten might. Its surface is etched with symbols of Bowser’s wrath, forged from lava hardened in the heart of a dormant volcano. This helm not only grants immunity to fire damage for 5 seconds after casting but also allows its wearer to breathe underwater for short bursts, making them a formidable presence both on land and beneath the waves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Fire",
      "Underwater Breathing"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fire",
        "rules": "When the helm is worn and an effect that would deal fire damage is used against the wearer, they gain immunity for 5 seconds. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Underwater Breathing",
        "rules": "While wearing this helm, the user can breathe underwater for up to 30 seconds at a time. The ability is activated as a bonus action and recharges after a short or long rest."
      }
    ],
    "levelRequirementReason": "This helm's power draws from volcanic magic, making it accessible to lower-level characters.",
    "vendorReason": "Valley Bowser, being a forge of ancient legends and Bowser himself, is the most fitting vendor for this helm of fiery might.",
    "shippingDetail": "The helm is delivered via a Rakasha spirit courier, ensuring swift and safe arrival without the risk of damage.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Immunity) / Up to 30 seconds (Underwater Breathing)",
      "endsWhen": "After 5 seconds (Immunity), or when the duration ends (Underwater Breathing)",
      "charges": "Recharge after a short or long rest"
    },
    "priceReason": "The helm's unique volcanic properties and its dual abilities make it a valuable yet balanced treasure.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:56:01.790326+00:00",
    "aiReviewedAt": "2026-07-23T19:56:01.790326+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_smoldering_mace": {
    "id": "valley_bowser_smoldering_mace",
    "name": "Smoldering Mace of the Ashen King",
    "description": "The Smoldering Mace of the Ashen King is a warhammer forged from the heart of an ancient volcano. Its molten core crackles with raw power, capable of igniting terrain and dealing devastating fire damage to enemies within its fiery reach. Wielders feel the earth tremble beneath their feet as they strike, causing the ground to erupt in lava bursts that scorch foes. This weapon not only enhances stamina but also grants a 20% regeneration boost while you wield it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Terrain Ignition",
      "Lava Burst"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Terrain Ignition",
        "rules": "When the mace strikes, there is a 15% chance to ignite the terrain within 30 feet. The ignited area deals an additional 2d6 fire damage to all creatures that start their turn there. This effect ends when a creature moves into or through the ignited area."
      },
      {
        "title": "Lava Burst",
        "rules": "The mace can be activated as a bonus action, creating a burst of molten lava at the target's feet. The burst deals 1d8 fire damage to all creatures in its 10-foot radius and creates an area that ignites terrain for 1 minute. This effect has a recharge time after 5 uses."
      }
    ],
    "levelRequirementReason": "The mace's raw power demands a certain mastery of fire magic before it can be wielded.",
    "vendorReason": "Bowser, master of the fiery realm, ensures only those who understand his domain handle this weapon.",
    "shippingDetail": "Due to its volatile nature, the mace is delivered via Lakitu's fastest drones, ensuring safe and swift transport.",
    "usage": {
      "activation": "Bonus action for igniting terrain; Reaction for creating a Lava Burst",
      "duration": "Instantaneous",
      "endsWhen": "The creature moves into or through an ignited area; Recharges after 5 uses",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for a rare item, this mace offers powerful effects that are both versatile and potent.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:56:03.589532+00:00",
    "aiReviewedAt": "2026-07-23T19:56:03.589532+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_smoldering_satchel": {
    "id": "valley_bowser_smoldering_satchel",
    "name": "Smoldering Satchel of Volcanic Might",
    "description": "The Smoldering Satchel of Volcanic Might is a molten leather satchel woven from ancient volcanic fibers, filled with glowing lava runes and molten ore. When activated, it grants the wearer unmatched speed, allowing them to sprint through danger as if they were a living flame. With a flick of its latches, it can also summon a tempest of fire and ash, unleashing a torrent of heat that incinerates foes within the fiery radius for three turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Increased Speed",
      "Summon Lava Tempest"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Increased Speed",
        "rules": "Activates as an action. The wearer gains a +25% increase to their walking speed until the end of their next turn."
      },
      {
        "title": "Summon Lava Tempest",
        "rules": "Activates as a bonus action, targeting one enemy within 10 feet. Deals 200% damage and creates a fire zone that lasts for three turns, dealing 50% additional fire damage to all enemies in the area each turn."
      }
    ],
    "levelRequirementReason": "The satchel's intense heat requires a seasoned adventurer with at least 6th level to safely wield its power.",
    "vendorReason": "Valley Bowser, a blacksmith of legendary skill, forges these satchels from the very heart of active volcanoes.",
    "shippingDetail": "The Void Drifter Relay ensures swift delivery but may incur a delay if volcanic activity disrupts passage through the region.",
    "usage": {
      "activation": "Action or Bonus Action (choose one)",
      "duration": "Instantaneous, except for the fire zone which lasts three turns",
      "endsWhen": "The fire zone ends when the duration expires or the user dismisses it as an action",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Crafted from rare volcanic materials and ancient runes, this satchel is a balanced purchase for any adventurer.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-23T19:56:36.218165+00:00",
    "aiReviewedAt": "2026-07-23T19:56:36.218165+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_smoldering_scarf": {
    "id": "valley_bowser_smoldering_scarf",
    "name": "Smoldering Scarf of the Ashen King",
    "description": "The Smoldering Scarf of the Ashen King, woven from the very breath of Bowser, radiates a palpable heat that warns all who cross its path of the wearer's proximity to destruction. Its molten threads not only grant the bearer resistance to fire damage but also amplify their own fire-based attacks by +20%. When attacked, it ignites with an aura of molten light, blinding foes within 10 feet and forcing them to make a DC 15 Dexterity saving throw or lose their next action due to disorientation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Heat Resistance +30%",
      "Fire Attack Power +20%"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Molten Aura",
        "rules": "When the wearer is attacked, they and all creatures within 10 feet of them must make a DC 15 Dexterity saving throw or be blinded for 1 round. The scarf expends one use."
      },
      {
        "title": "Fire Boost",
        "rules": "The wearer gains a +20 bonus to the damage rolls of their fire-based attacks, but this effect can only occur once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires at least 3rd level to wield due to its inherent power and complexity.",
    "vendorReason": "Bowser's minions, who have mastered the art of crafting such relics, sell this scarf exclusively in their markets.",
    "shippingDetail": "The shipping is expedited by the Void Drifter Relay, ensuring the scarf arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect activated upon attack against the wearer.",
      "duration": "Instantaneous aura; lasts until the start of your next turn after use.",
      "endsWhen": "The scarf's uses are exhausted or when it is destroyed.",
      "charges": "Recharges on a long rest."
    },
    "priceReason": "The scarf's rarity and unique crafting process justify its price of 1000 XP, reflecting the difficulty in acquiring such a powerful artifact.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:56:16.182220+00:00",
    "aiReviewedAt": "2026-07-23T19:56:16.182220+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_smoldering_shield": {
    "id": "valley_bowser_smoldering_shield",
    "name": "Smoldering Shield of the Volcanic King",
    "description": "The Smoldering Shield of the Volcanic King hums with the latent power of ancient lava, its surface glowing with molten heat and crackling with fire magic. Crafted in the forges of Mount Bowser's heart, this shield deflects fire attacks with a protective aura, and when struck, it emits a deep rumble that resonates like an echo from forgotten volcanoes. The shield not only absorbs fire damage but also grants its wielder increased speed and enhanced resilience against fiery threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Fire Damage",
      "Boosts Attack Speed"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Lava Dragon Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Absorbs Fire Damage",
        "rules": "The shield absorbs 30% of fire damage dealt to it, reducing the effective damage by that amount. This effect occurs once per attack directed at you."
      },
      {
        "title": "Boosts Attack Speed",
        "rules": "While holding this shield, your speed is increased by +5 feet and you gain a +1 bonus to your attack rolls. This effect persists for 1 minute or until you drop the shield."
      }
    ],
    "levelRequirementReason": "The shield's elemental magic requires a certain mastery of fire-based abilities.",
    "vendorReason": "Bowser has long been revered as the Volcanic King, and thus his shops are known for carrying items imbued with volcanic power.",
    "shippingDetail": "The shield is shipped in a specially insulated crate to preserve its molten heat properties during transit.",
    "usage": {
      "activation": "Passive effect when holding the shield.",
      "duration": "1 minute or until dropped.",
      "endsWhen": "You drop the shield or lose concentration (as if concentrating on a spell).",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare volcanic materials and infused with potent fire magic, this shield is priced to reflect its unique properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:57:10.183134+00:00",
    "aiReviewedAt": "2026-07-23T19:57:10.183134+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_smoldering_soul": {
    "id": "valley_bowser_smoldering_soul",
    "name": "Smoldering Soul of the Inferno",
    "description": "The Smoldering Soul of the Inferno is a molten essence forged from Bowser's volcanic wrath, encased in a glowing orb of fiery glass. When worn, it grants fiery resilience and ignites enemies in a blazing inferno, making you nearly impervious to heat while dealing scalding damage to your foes. This relic is perfect for charging into lava pits or confronting lava beasts, its molten core crackling with the fury of the underworld itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Inflicts Fire Damage on Hit",
      "Grants Fire Resistance"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inflicts Fire Damage on Hit",
        "rules": "When you hit a target with an attack, it takes fire damage equal to your level +2d6. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Grants Fire Resistance",
        "rules": "While wearing the Smoldering Soul of the Inferno, you have resistance to fire damage. This benefit lasts until the end of your next turn after removing the item."
      }
    ],
    "levelRequirementReason": "This relic can be worn by lower-level adventurers who need a reliable source of fire-based combat prowess.",
    "vendorReason": "Valley Bowser is known for crafting items that resonate with the very essence of its namesake, and this molten artifact is no exception.",
    "shippingDetail": "Delivered by a Rakasha courier, the item arrives in pristine condition, encased in a protective aura that shields it from damage during transit.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Instantaneous; lasts until removed or destroyed.",
      "endsWhen": "The item is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its fiery essence and unique abilities, this relic offers a significant advantage in lava-rich combat scenarios.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:56:30.411660+00:00",
    "aiReviewedAt": "2026-07-23T19:56:30.411660+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_smoldering_sword": {
    "id": "valley_bowser_smoldering_sword",
    "name": "Smoldering Sword of the Ashen Flame",
    "description": "The Smoldering Sword of the Ashen Flame hums with the raw power of a dormant volcano, its blade a shimmering amalgamation of molten lava and Koopa shell. When swung, it releases a torrent of searing heat that leaves enemies blistered in their wake. The sword's roar echoes with the wrath of Bowser himself, each strike resonating through the battlefield as if the very flames of Mount Termina have been unleashed upon foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ashen Burn",
      "Volcanic Roar"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Ashen Burn",
        "rules": "When you hit a target with this weapon, it deals 2d6 fire damage and an additional 50 fire damage as the blade ignites its mark. The target must make a DC 14 Constitution saving throw or suffer an additional 10 fire damage at the start of their next turn."
      },
      {
        "title": "Volcanic Roar",
        "rules": "After each hit, you gain advantage on your next attack roll and gain +2 to all Dexterity (Stealth) checks for 1 minute. This effect ends if you make another attack with the sword or if you take damage."
      }
    ],
    "levelRequirementReason": "The sword's raw power demands a seasoned warrior who can control its volatile nature.",
    "vendorReason": "Bowser himself has tested the blade and recognizes its unique properties, making it available to those who prove their worth.",
    "shippingDetail": "The sword is carefully packed in a specialized cooler to retain its heat integrity during transit.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous with a 1 minute duration for the Volcanic Roar effect",
      "endsWhen": "Ends when you make another attack or take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's rarity and unique properties, combined with its raw material and Bowser's endorsement, justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:56:48.159033+00:00",
    "aiReviewedAt": "2026-07-23T19:56:48.159033+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_troop_bow_tapestry": {
    "id": "valley_bowser_troop_bow_tapestry",
    "name": "Bow Tapestries of the Koopa Throne",
    "description": "The Bow Tapestries of the Koopa Throne are woven from ancient ceremonial fabric, once reserved for Koopa royalty. These tapestries grant +2 to all melee attack rolls against enemies with fire resistance and increase the chance to hit by an additional 10% when the user is in the heat of battle. They also unlock a unique flame-dance animation upon being struck by a fire-based attack, enhancing both defensive and offensive prowess.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Flame Boost",
      "Heat Precision"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flame Boost",
        "rules": "Grants +2 to all melee attack rolls against enemies with fire resistance. This effect lasts until the end of your next turn after being struck by a fire-based attack."
      },
      {
        "title": "Heat Precision",
        "rules": "Increases the chance to hit by an additional 10% when you are in the heat of battle, meaning when you have one or fewer hit points remaining. This effect lasts until the end of your next turn after being struck by a fire-based attack."
      }
    ],
    "levelRequirementReason": "This tapestry is accessible to all adventurers, making it an excellent starting item for beginners.",
    "vendorReason": "Bowser's troopers are known for their fiery battles and often use these tapestries in training.",
    "shippingDetail": "Ships via airship, ensuring swift delivery to any location within the Mushroom Kingdom.",
    "usage": {
      "activation": "Passive effect that activates when struck by a fire-based attack.",
      "duration": "Lasts until the end of your next turn after being struck by a fire-based attack.",
      "endsWhen": "Expires at the start of your next turn or if you are no longer in the heat of battle.",
      "charges": "Unlimited"
    },
    "priceReason": "The tapestry's rarity and unique craftsmanship justify a price slightly above common items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T19:56:46.036111+00:00",
    "aiReviewedAt": "2026-07-23T19:56:46.036111+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_ammunition": {
    "id": "valley_bowser_volcanic_ammunition",
    "name": "Volcanic Shot",
    "description": "The Volcanic Shot is a fearsome explosive shell forged from the heart of Mount Bowser's fiery core. When launched, it unleashes a torrent of molten rock that engulfs foes in searing flames. Crafted by the volcanic spirits themselves and shipped with Pipe Express's express courier service, this weapon is ideal for clearing out lava-filled caverns and magma-choked craters. It leaves behind a lingering burn effect that lingers long after the initial blast.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Molten Explosion",
      "Burn Debuff"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Molten Explosion",
        "rules": "When the Volcanic Shot hits, it detonates with a fiery eruption, dealing 500 fire damage to all enemies in a 15-foot cone. If the target is already on fire, it deals an additional 20% fire damage."
      },
      {
        "title": "Burn Debuff",
        "rules": "For 5 seconds after being hit by the Volcanic Shot, targets are cursed with a burning debuff that causes them to take 10 fire damage at the start of their turn. This effect can only occur once per target."
      }
    ],
    "levelRequirementReason": "This powerful weapon requires a minimum level of 4 due to its extreme firepower and fiery effects.",
    "vendorReason": "Valley Bowser, an expert in volcanic weaponry, ensures that only the finest explosive ammunition is available for adventurers seeking to clear out magma-choked areas.",
    "shippingDetail": "Delivered with Pipe Express's express courier service, this weapon arrives with a special thermal blanket to prevent accidental ignitions during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the weapon's powerful fire damage, area effect, and unique burn debuff, making it a valuable addition to any adventuring party.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T19:57:29.993584+00:00",
    "aiReviewedAt": "2026-07-23T19:57:29.993584+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_ash_amulet": {
    "id": "valley_bowser_volcanic_ash_amulet",
    "name": "Volcanic Ash Amulet",
    "description": "The Volcanic Ash Amulet gleams with an inner fire, a shard of obsidian fused from Bowser's final breath of magma. Wielding it allows you to invoke a brief eruption of volcanic energy, stunning enemies in its fiery wake and healing allies caught within the blast radius. This ancient artifact channels raw geothermal power, offering temporary protection against flames while ensuring that those who oppose you feel the scorching heat of the forge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Volcanic Burst",
      "Heals Allies"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Furious Flame Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Volcanic Burst",
        "rules": "As a bonus action, the wearer can summon a burst of volcanic energy. This creates a 3-meter radius area that stuns all creatures within it for 1 round (DC 15 Wisdom saving throw). The effect ends immediately if the amulet is removed or if the wearer takes an action."
      },
      {
        "title": "Heals Allies",
        "rules": "At the start of each of your turns, you can use a bonus action to restore 20 Hit Points to all friendly creatures within 3 meters. This effect has no cooldown and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This amulet is suitable for any brave adventurer, even those just beginning their journey.",
    "vendorReason": "Valley Bowser, a blacksmith of legendary skill, crafted this amulet from the very heart of Mount Vesuvius itself, imbuing it with raw volcanic power.",
    "shippingDetail": "The courier service ensures that your Volcanic Ash Amulet arrives safely and hot, as if straight from the forge.",
    "usage": {
      "activation": "Bonus action or at start of turn (Heals Allies)",
      "duration": "Instantaneous (Volcanic Burst) / Recharges after a short rest",
      "endsWhen": "Removed, taken an action, or when its uses are exhausted",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and unique properties justify this fair price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:57:41.773798+00:00",
    "aiReviewedAt": "2026-07-23T19:57:41.773798+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_ash_satchel": {
    "id": "valley_bowser_volcanic_ash_satchel",
    "name": "Volcanic Ash Satchel",
    "description": "The Volcanic Ash Satchel is a heavy, woven satchel filled with blackened volcanic ash that crackles faintly as it's touched. Crafted from ancient lava-hardened leather and enchanted by the Magma Wyrms of the Deep Peaks, this relic grants temporary immunity to fire damage for those within its range. Unleashing it on a battlefield transforms the ground into a treacherous, magma-infused terrain that scorches all who dare set foot upon it.",
    "price": 1000,
    "icon": "🌋",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Magma Terrain",
      "Fire Resistance"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Magma Terrain",
        "rules": "When activated, the Volcanic Ash Satchel creates a 3x3 tile area of treacherous terrain that deals 15 fire damage per second to any creature that enters or begins its turn there. This effect lasts for 30 seconds and ends if an allied character moves away from it."
      },
      {
        "title": "Fire Resistance",
        "rules": "Allies within a 5-foot radius of the satchel gain temporary fire resistance equal to +15, which persists for 1 minute. This effect is terminated when the user drops or loses control of the satchel."
      }
    ],
    "levelRequirementReason": "The Volcanic Ash Satchel requires at least level 3 due to its inherent magic and the hazardous nature of its effects.",
    "vendorReason": "Valley Bowser, a master of volcanic artifacts, is known for their ability to harness the raw power of magma in battle.",
    "shippingDetail": "The satchel arrives encased in protective lava-hardened leather, ensuring it reaches its destination intact and ready for use.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds or until the user moves away from it",
      "endsWhen": "The user drops or loses control of the satchel",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Crafted with ancient lava-hardened leather and enchanted by Magma Wyrms, this item is valuable for its unique abilities and hazardous effects.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T19:57:14.095140+00:00",
    "aiReviewedAt": "2026-07-23T19:57:14.095140+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_belt": {
    "id": "valley_bowser_volcanic_belt",
    "name": "Volcanic Belt of Endless Flame",
    "description": "The Volcanic Belt of Endless Flame is a molten metal belt forged from ancient volcanic rock, its surface crackling with fiery runes. It fuels the wearer's body and soul with volcanic energy, granting them immunity to cold damage and a searing aura that scorches foes within reach. Warriors who wear this belt become living embers, their skin glowing with an inner fire that can neither be quenched nor extinguished.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fire Aura",
      "Immunity to Cold"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Aura",
        "rules": "As a bonus action, the wearer can activate their Fire Aura. For 1 minute, creatures within 5 feet of them take fire damage equal to 2d6 + the user's Strength modifier (minimum of 1). This effect ends early if the belt is removed or destroyed."
      },
      {
        "title": "Immunity to Cold",
        "rules": "The wearer gains immunity to cold damage while wearing this belt. This benefit persists for as long as they are in possession of the belt and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "This belt is crafted from raw volcanic materials, making it accessible even to low-level adventurers who can appreciate its power.",
    "vendorReason": "King Bowser's kingdom is known for harnessing the power of volcanoes, and his vendors sell items imbued with natural elemental magic.",
    "shippingDetail": "The belt comes in a custom Lakitu Drone delivery, which ensures safe transport through even the most treacherous landscapes.",
    "usage": {
      "activation": "Bonus action to activate Fire Aura; passive immunity to cold",
      "duration": "1 minute for Fire Aura; permanent while worn for Immunity to Cold",
      "endsWhen": "Removed or destroyed, or ends when the effect is used up",
      "charges": "Unlimited uses"
    },
    "priceReason": "The belt's materials and crafting process are highly specialized, making it a rare find in any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:57:36.956312+00:00",
    "aiReviewedAt": "2026-07-23T19:57:36.956312+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_blast": {
    "id": "valley_bowser_volcanic_blast",
    "name": "Volcanic Blast Grenade",
    "description": "The Volcanic Blast Grenade is a volatile device forged from molten obsidian and laced with volcanic essence, crafted by the fiery forges of Bowser's domain. When it detonates upon impact, a searing inferno erupts within a 5-foot-radius, igniting all foes in its path. The grenade's core fuses with the ground, amplifying damage to those standing on lava, and grants an unpredictable knockback effect that sends enemies sprawling.",
    "price": 1000,
    "icon": "🧨",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Lava-infused Explosion",
      "Knockback upon Impact"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Lava-infused Explosion",
        "rules": "When the grenade detonates, it creates a 5-foot-radius explosion dealing 400 fire damage to all creatures in the area. If an enemy is standing on lava during the blast, they receive an additional 200 fire damage."
      },
      {
        "title": "Knockback upon Impact",
        "rules": "If the grenade detonates within a 10-foot radius of a creature, that creature must succeed on a DC 15 Dexterity saving throw or be knocked back up to 10 feet and fall prone. This effect occurs only once per use."
      }
    ],
    "levelRequirementReason": "The Volcanic Blast Grenade's fiery power demands a minimum of 3rd level to wield effectively.",
    "vendorReason": "Bowser himself oversees the crafting and distribution, ensuring it remains in his domain.",
    "shippingDetail": "Ships via teleportation, arriving at your doorstep within minutes of purchase.",
    "usage": {
      "activation": "On a bonus action, thrown as an attack.",
      "duration": "Instantaneous explosion upon impact.",
      "endsWhen": "The grenade is used or destroyed upon activation.",
      "charges": "1 use per day"
    },
    "priceReason": "Balanced to reflect the volatile nature of its creation and Bowser's domain expertise.",
    "priceOriginal": 2700,
    "priceReviewedAt": "2026-07-23T19:57:52.796177+00:00",
    "aiReviewedAt": "2026-07-23T19:57:52.796177+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_breath": {
    "id": "valley_bowser_volcanic_breath",
    "name": "Volcanic Breath of the Ashen King",
    "description": "The Volcanic Breath of the Ashen King is a fearsome mask forged from the heart of Mount Bowser. Its molten steel surface glows with an eerie red sheen, and when worn, it channels the raw fury of the volcano itself. With each exhale, the wearer summons a fiery blast that incinerates foes; on attack, they can summon a 5-meter-wide lava wave that leaves a trail of searing heat in its wake. The mask's breath ignites the battlefield, granting the user an extra burst of stamina during prolonged combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Volcanic Breath",
      "Stamina Ignition"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Volcanic Breath",
        "rules": "As a bonus action, the wearer can summon a 5-meter-wide fiery blast centered on a point they choose within 30 feet. The blast deals 1d6 fire damage to each creature in its area and ignites objects with a successful DC 15 Dexterity saving throw. This effect has a recharge time of once per short or long rest."
      },
      {
        "title": "Stamina Ignition",
        "rules": "While wearing the mask, the user regenerates stamina at double rate for the duration of the combat session. This effect is active as long as the user remains in battle and is exhausted when entering a short rest or if they lose consciousness."
      }
    ],
    "levelRequirementReason": "This mask can be worn by any character, providing an early advantage in combat.",
    "vendorReason": "The Valley of Bowser is known for its volcanic geology and the forging of items inspired by the kingdom's fiery heart.",
    "shippingDetail": "Delivered via a Rakasha spirit, this mask arrives quickly but requires a special ritual to be activated upon arrival.",
    "usage": {
      "activation": "Bonus action; once per short or long rest",
      "duration": "Instantaneous",
      "endsWhen": "Recharges after a short or long rest, lost consciousness, or entering combat with exhaustion",
      "charges": "Unlimited"
    },
    "priceReason": "The mask's rarity and unique abilities justify its cost, providing both offensive and utility benefits.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:57:45.809976+00:00",
    "aiReviewedAt": "2026-07-23T19:57:45.809976+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_burner": {
    "id": "valley_bowser_volcanic_burner",
    "name": "Volcanic Burner",
    "description": "The Volcanic Burner is a molten-core torch that ignites enemy defenses with searing heat, perfect for melting through Koopa armor and lava traps. Its forgeheart core glows brighter after each use in the inferno, but its power wanes after three activations, only to recharge with each new encounter deep within the fiery pits. This weapon grants a 10% chance to ignite enemy armor with every strike, dealing an additional 50% damage to foes with fire resistance.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ignites Armor",
      "Increased Damage"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ignite Armor",
        "rules": "When the Volcanic Burner strikes an enemy, there is a 10% chance to ignite their armor. This causes the target to take an additional 1d6 fire damage on their next turn as the flames catch. The effect lasts until the start of the target's next turn and cannot stack."
      },
      {
        "title": "Increased Damage",
        "rules": "The Volcanic Burner deals 50% extra damage to enemies with fire resistance for its entire duration, which is until the end of your next turn. This effect does not consume charges but can only be used once per encounter."
      }
    ],
    "levelRequirementReason": "This weapon is designed for beginners who need a reliable tool to combat lava pits and fire-based foes.",
    "vendorReason": "Bowser's minions are well-versed in the dangers of the lava pits, making them the perfect purveyors of this fiery device.",
    "shippingDetail": "The Shy Guys deliver the Volcanic Burner with a special heat-resistant pouch to protect it from damage during transport through the volcanic regions.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, duration until start of next target's turn",
      "endsWhen": "The target takes their next action or when the effect is negated by a successful DC 15 Dexterity saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "The Volcanic Burner's rare material and unique functionality justify its price, providing an essential tool for adventurers facing fire-based challenges.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:58:32.897364+00:00",
    "aiReviewedAt": "2026-07-23T19:58:32.897364+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_cage_key": {
    "id": "valley_bowser_volcanic_cage_key",
    "name": "Volcanic Cage Key",
    "description": "The Volcanic Cage Key is a relic forged from the molten heart of an ancient volcanic beast, its surface etched with runes that shimmer like lava. Crafted by Shy Guy Smugglers for daring adventurers, this key can open sealed magma chambers or prisons designed to withstand the fiercest infernos. Upon activation, it releases a burst of heat that stuns nearby foes and grants temporary immunity to lava damage within 30 feet. Only those who wield a torch may use it safely, as its power is tempered by fire itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔒",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Lava Burst",
      "Molten Immunity"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Lava Burst",
        "rules": "When activated as an action within 100 feet of active magma, the key releases a burst of heat that stuns all creatures in a 20-foot radius for 1 round. Creatures can make a DC 14 Dexterity saving throw to avoid the effect. The key expends one use."
      },
      {
        "title": "Molten Immunity",
        "rules": "For the duration of 1 minute, any creature within 30 feet of the wielder gains immunity to fire and lava damage from non-magical sources. This immunity ends if the key is destroyed or expended on a successful hit."
      }
    ],
    "levelRequirementReason": "This relic requires a high degree of control over fire-based magic, which few adventurers achieve before reaching level 6.",
    "vendorReason": "Valley Bowser specializes in items that can navigate and combat dangerous environments like volcanic craters.",
    "shippingDetail": "Due to the volatile nature of the key, it is shipped via a specially insulated courier service ensuring safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until expended",
      "endsWhen": "Key destroyed, expended on a successful hit, or its uses run out",
      "charges": "Uses"
    },
    "priceReason": "The key's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T19:58:22.274672+00:00",
    "aiReviewedAt": "2026-07-23T19:58:22.274672+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_cloak": {
    "id": "valley_bowser_volcanic_cloak",
    "name": "Volcanic Cloak of the Ashen King",
    "description": "The Volcanic Cloak of the Ashen King is woven from lava-forged fibers and imbued with the spirit of ancient fire lords. This cloak not only renders you invisible in fiery zones but also actively absorbs heat damage, making you a formidable presence in volcanic or infernal environments. The cloak's origins lie deep within the heart of Mount Bowser’s Volcano, where it was crafted by the Ashen King to evade detection and strike from the shadows.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility in Fire Zones",
      "Heat Damage Absorption"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invisibility in Fire Zones",
        "rules": "Activates as a bonus action, providing complete invisibility for 8 seconds within fire zones. Ends if the wearer moves more than 10 feet or takes damage."
      },
      {
        "title": "Heat Damage Absorption",
        "rules": "Passive effect that absorbs all heat damage taken until it reaches its limit of 150 points. Once absorbed, the cloak must rest for 24 hours before regaining full capacity."
      }
    ],
    "levelRequirementReason": "This cloak demands a certain level to wield its fiery magic without risk.",
    "vendorReason": "Valley Bowser, an expert in volcanic artifacts, ensures only those truly attuned to fire can claim this powerful item.",
    "shippingDetail": "Ships via Lakitu Drones with a two-day delivery time, ensuring the cloak arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action for invisibility; passive effect always active.",
      "duration": "8 seconds of invisibility when activated; passive absorption until limit reached.",
      "endsWhen": "Movement over 10 feet or taking damage ends both effects.",
      "charges": "Unlimited, but requires a rest to absorb additional heat damage."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the cloak's rarity and the raw materials needed for its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:57:59.809538+00:00",
    "aiReviewedAt": "2026-07-23T19:57:59.809538+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_cloak_of_ignition": {
    "id": "valley_bowser_volcanic_cloak_of_ignition",
    "name": "Volcanic Cloak of Ignition",
    "description": "The Volcanic Cloak of Ignition is a fiery garment that hums with volcanic might, its surface crackling with molten embers. Crafted from lava-hardened leather and imbued with the essence of Mount Inferno's heart, it grants the wearer fire resistance and transforms touch into a searing inferno capable of igniting foes into flaming projectiles. It is perfect for ranged combat in fiery environs, where its wearer can rain down destruction upon enemies while remaining unscathed by their own infernal prowess.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌋",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Fire Resistance",
      "Flame Touch"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Volcanic Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The wearer gains temporary fire resistance equal to 20% of their hit points for 15 seconds. This effect can be activated as a bonus action."
      },
      {
        "title": "Flame Touch",
        "rules": "When the wearer touches an enemy, it ignites into a burning projectile that deals 200 fire damage and explodes on contact with another target or after 5 feet. This effect has a range of touch and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The cloak's innate resistance to fire and ability to ignite foes are accessible to low-level spellcasters who have yet to master more complex magic.",
    "vendorReason": "Bowser, the guardian of lava fields, ensures that adventurers have the means to combat fiery threats in his domain.",
    "shippingDetail": "The cloak arrives encased in a cooling gel to prevent accidental ignition during transit.",
    "usage": {
      "activation": "Bonus action (Fire Resistance), Touch attack (Flame Touch)",
      "duration": "15 seconds (Fire Resistance), Instantaneous (Flame Touch, once per short rest)",
      "endsWhen": "Ends when the wearer no longer has hit points or if used again",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a price of 1000 XP, this item provides significant utility and survivability in fiery environments without overshadowing more powerful magical items.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T19:58:36.109501+00:00",
    "aiReviewedAt": "2026-07-23T19:58:36.109501+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_core": {
    "id": "valley_bowser_volcanic_core",
    "name": "Volcanic Core of Emberclaw",
    "description": "The Volcanic Core of Emberclaw glows with an infernal light, its surface cracked and molten from centuries spent in volcanic heartlands. This pulsating gem absorbs heat and regenerates health at a rapid pace within fiery terrains; it can be felt as the gem's warmth seeps into your skin, soothing minor burns to foes who dare approach too closely. Only usable amidst active lava flows, this core is a relic of ancient Emberclaw, a dragon whose flame forged its heart from molten rock and obsidian.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Lava Heat",
      "Scalding Burn"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Lava Heat",
        "rules": "When activated within lava zones, the Volcanic Core of Emberclaw grants the wielder a +1 bonus to AC and regenerates 5 hit points per second. The core must remain in contact with the user's skin for this effect to activate."
      },
      {
        "title": "Scalding Burn",
        "rules": "Enemies within 30 feet of an active core suffer 2d6 fire damage at the start of their turns, save with a DC 15 Constitution saving throw for half damage. On a failed save, they are also pushed back 10 feet and knocked prone."
      }
    ],
    "levelRequirementReason": "The core's intense heat demands a level at least two to wield safely.",
    "vendorReason": "Valley Bowser, known for their expertise in volcanic and fiery items, ensures the safety of this dangerous artifact.",
    "shippingDetail": "Delivered via a heated courier vehicle that can withstand lava flows; arrival times are unpredictable due to terrain hazards.",
    "usage": {
      "activation": "Action",
      "duration": "Until expended or removed from a lava zone",
      "endsWhen": "Removed from lava, or the user takes fire damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides both defensive and offensive benefits in specific, challenging environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:59:04.494458+00:00",
    "aiReviewedAt": "2026-07-23T19:59:04.494458+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_embers": {
    "id": "valley_bowser_volcanic_embers",
    "name": "Volcanic Embers of the Burning King",
    "description": "The Volcanic Embers of the Burning King is a glowing shard of obsidian encased in molten lava, radiating an infernal heat that instills fear into foes. This relic channels Bowser's fiery wrath directly from the heart of the volcano itself, unleashing a burst of molten fury with every strike. The embers not only deal increased fire damage but also temporarily reduce the target’s defenses, leaving them vulnerable to further attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Increased Fire Damage",
      "Reduced Enemy Defense"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Molten Fury",
        "rules": "When the user strikes an enemy with a melee attack, Molten Fury deals an additional 30% fire damage to targets with fire resistance. The effect also reduces the target's AC by 2 until the start of their next turn."
      },
      {
        "title": "Temporary Vulnerability",
        "rules": "For 3 seconds after successfully hitting a target, the Volcanic Embers reduce the target’s defense by 20%. This effect has no save DC and can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Volcanic Embers are accessible to all adventurers who wish to harness their fiery power.",
    "vendorReason": "Bowser, the King of Koopas, personally oversees the sale of items that channel his volcanic fury and strength.",
    "shippingDetail": "The embers are delivered via a Rakasha spirit walk, ensuring they arrive scorching hot from the heart of the volcano.",
    "usage": {
      "activation": "On the user’s action or reaction during their turn.",
      "duration": "Instantaneous effect; lasts until the start of the target's next turn.",
      "endsWhen": "The effect ends when the target takes its next action, movement, or when the embers run out of charges.",
      "charges": "Unlimited uses per short or long rest."
    },
    "priceReason": "The Volcanic Embers are priced at 1000 XP to reflect their rare and powerful nature, offering a significant boost in fire-based combat capabilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:59:04.477459+00:00",
    "aiReviewedAt": "2026-07-23T19:59:04.477459+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_essence": {
    "id": "valley_bowser_volcanic_essence",
    "name": "Volcanic Essence Vial",
    "description": "A vial of molten magma essence extracted from Bowser’s volcanic heart. When consumed, it grants a powerful buff for a short time.",
    "price": 2000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Grants 15% increased attack speed for 3 turns",
      "Deals 10% extra damage to all enemies",
      "Grants 5% chance to critically hit"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5
  },
  "valley_bowser_volcanic_gauntlet": {
    "id": "valley_bowser_volcanic_gauntlet",
    "name": "Volcanic Gauntlet of the Infernal Fist",
    "description": "The Volcanic Gauntlet of the Infernal Fist is a molten masterpiece, forged in the heart of an ancient volcano. Its lava-warmed leather is interwoven with veins of obsidian and magma, giving it a fearsome presence. When wielded, it ignites enemies on contact, dealing scalding fire damage and leaving them seared for several moments. The heat from this gauntlet can be felt by all within reach, as if the very earth trembles at its touch.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enflames foes",
      "Armor bonus"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enflame Foes",
        "rules": "When you hit a creature with this gauntlet, it catches fire. The target takes an additional 1d6 fire damage at the start of its next turn for 2 turns. This effect ends if the target is healed or moves more than 5 feet away from the gauntlet."
      },
      {
        "title": "Armor Bonus",
        "rules": "For 10 seconds after hitting a creature, you gain a +2 bonus to your AC. This bonus ends when you take an action other than a reaction to attack with this gauntlet."
      }
    ],
    "levelRequirementReason": "The intense heat and power of the gauntlet require significant strength and discipline.",
    "vendorReason": "Valley Bowser, a blacksmith renowned for crafting weapons from volcanic materials, is the only one capable of forging this infernal artifact.",
    "shippingDetail": "The gauntlet must be transported by a Rakasha spirit to ensure it reaches its destination in one piece.",
    "usage": {
      "activation": "On hit with melee weapon attack",
      "duration": "Instantaneous; ends when the target is healed or moves more than 5 feet away",
      "endsWhen": "The gauntlet is no longer touching an enemy that caught fire",
      "charges": "Unlimited"
    },
    "priceReason": "This gauntlet requires rare materials and advanced smelting techniques, making it a costly yet potent tool for the brave.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:59:42.301844+00:00",
    "aiReviewedAt": "2026-07-23T19:59:42.301844+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_heart": {
    "id": "valley_bowser_volcanic_heart",
    "name": "Volcanic Heart of the Burning Throne",
    "description": "The Volcanic Heart of the Burning Throne is a pulsating core encased in obsidian and wrapped in molten lava, its veins crackling with fiery life. This ancient relic grants the wielder immunity to fire damage and the ability to regenerate health at an accelerated rate, as if their very body were forged from lava itself. With each turn, they recover 15% of maximum hit points, a testament to their newfound resilience.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Fire",
      "Healing Surge"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Immunity to Fire",
        "rules": "The wielder is immune to all fire-based damage. This effect does not require any action and lasts until the end of their next turn."
      },
      {
        "title": "Healing Surge",
        "rules": "At the start of each of their turns, the wielder regains 15% of their maximum hit points. This effect is a passive ability that triggers automatically without requiring any action or expenditure."
      }
    ],
    "levelRequirementReason": "This relic's raw power demands a certain level of mastery to control effectively.",
    "vendorReason": "Bowser, ever the collector of powerful artifacts, ensures only those who can harness this heart’s immense power receive it.",
    "shippingDetail": "The package is specially insulated to prevent any accidental contact with fire during transit.",
    "usage": {
      "activation": "Passive ability that activates automatically on the start of each turn.",
      "duration": "Until the end of their next turn for immunity, and until their next turn for healing surge.",
      "endsWhen": "The effect ends when the wielder is no longer affected by fire damage or if they take a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic's rare materials and immense power justify its moderate price, ensuring it remains accessible to capable adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T19:59:30.557281+00:00",
    "aiReviewedAt": "2026-07-23T19:59:30.557281+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_heart_ash": {
    "id": "valley_bowser_volcanic_heart_ash",
    "name": "Volcanic Heart Ash",
    "description": "Volcanic Heart Ash is a fine, glowing powder harvested from the heart of Bowser's latest volcanic eruption. When scattered upon the ground, it ignites into a molten pit that snares unwary foes and intensifies nearby fire-based attacks. This fiery trap not only immobilizes intruders but also amplifies the area’s existing heat, ensuring that any flames within 10 feet deal additional damage to all creatures caught in its grasp.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Molten Trap",
      "Heat Amplification"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Molten Trap",
        "rules": "When activated, the Volcanic Heart Ash creates a 10-foot diameter pit of molten lava. This trap lasts for 1 minute and has a range of touch. Any creature entering or starting its turn within this area is immediately restrained and takes 5d6 fire damage. The trapped creatures can use their action to make a DC 15 Dexterity saving throw, succeeding on it to escape the effect."
      },
      {
        "title": "Heat Amplification",
        "rules": "For every creature in the 10-foot radius of the trap, all fire-based attacks and spells deal an additional +2d6 damage within a 30-foot radius. This amplification persists for 1 minute or until a successful DC 15 Dexterity saving throw is made by any creature within this area."
      }
    ],
    "levelRequirementReason": "Activating the trap requires a moderate understanding of elemental magic to control and contain Bowser’s volcanic fury.",
    "vendorReason": "The Valley of Bowser has long been a nexus for volcanic activity, making it the ideal source for this rare powder.",
    "shippingDetail": "Shipped via Pipe Express's express courier service to ensure swift delivery from the heart of the volcano.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until triggered by an enemy entering the area",
      "endsWhen": "The trap is destroyed if any creature successfully escapes it or if a successful DC 15 Dexterity saving throw is made within the affected area.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this powder offers significant battlefield control and damage amplification without overpowered effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:00:17.367824+00:00",
    "aiReviewedAt": "2026-07-23T20:00:17.367824+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_heart_pearl": {
    "id": "valley_bowser_volcanic_heart_pearl",
    "name": "Volcanic Heart Pearl",
    "description": "The Volcanic Heart Pearl glows ominously, pulsating with the raw heat of a dormant volcano's core. Crafted from the heart of an ancient, sleeping giant, this glowing orb releases a molten shield that absorbs damage and temporarily boosts attack power, but only if wielded on solid ground. Once activated, it creates a 3-second burst of magma that reduces incoming damage by half for the user, followed by a 10-second surge in combat prowess, making every strike more potent until it is spent or interrupted.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Molten Shield",
      "Boosted Attack Power"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Molten Shield",
        "rules": "Activates as a reaction when you are hit by an attack. You gain a temporary shield that reduces all damage taken from the triggering attack by 50% for 3 seconds, and grants advantage on saving throws against fire-based effects until your next turn."
      },
      {
        "title": "Boosted Attack Power",
        "rules": "At the start of each of your turns for the next 10 seconds after using the Volcanic Heart Pearl, you gain a +2 bonus to attack rolls. This effect can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency in combat to effectively utilize its protective and offensive capabilities.",
    "vendorReason": "Bowser, ever the collector of unique and powerful artifacts, has acquired this rare gem from deep within his volcanic lair.",
    "shippingDetail": "Lakitu Drones deliver the Volcanic Heart Pearl with special thermal insulation to prevent accidental activation during transit.",
    "usage": {
      "activation": "Reaction to an attack (once per short or long rest)",
      "duration": "3 seconds for Molten Shield, 10 seconds for Boosted Attack Power",
      "endsWhen": "Ends when the effect duration expires or you are hit by another attack",
      "charges": "Unlimited; regenerates after a short or long rest"
    },
    "priceReason": "Balanced with a rare price that reflects its volcanic origin and unique combat benefits.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:00:13.368393+00:00",
    "aiReviewedAt": "2026-07-23T20:00:13.368393+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_iron": {
    "id": "valley_bowser_volcanic_iron",
    "name": "Volcanic Iron Helm",
    "description": "The Volcanic Iron Helm is a helmet forged from molten earth and scales harvested from ancient lava dragons found deep within the fiery heart of Mount Bowser. This helm not only grants its wearer heavy armor, but also boosts melee defense by an impressive 40% while providing a significant 15% movement speed boost when worn. Its volcanic core emits a low hum that resonates with the earth's molten depths, reducing incoming damage by 7% for 12 seconds after equipping.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Boosted Melee Defense",
      "Enhanced Mobility"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Melee Defense",
        "rules": "The wearer's melee defense is increased by 40%. This effect persists until the end of their next turn. If removed from combat before then, it ends immediately."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "While wearing this helm, the wearer gains a +15% bonus to movement speed as long as they remain stationary for at least 3 seconds after equipping. This effect lasts until the start of their next turn, or it can be ended early by removing the helm."
      }
    ],
    "levelRequirementReason": "The helmet is crafted with simpler materials and techniques, making it accessible to lower-level adventurers.",
    "vendorReason": "As a forge of the earth itself, Valley Bowser specializes in crafting items from volcanic materials.",
    "shippingDetail": "The helmet is shipped via Pipe Express, delivered with a special protective casing to ensure it arrives undamaged.",
    "usage": {
      "activation": "Passive effect upon equipping; wearer must remain stationary for at least 3 seconds after equipping to activate the speed boost.",
      "duration": "Lasts until the start of the next turn or until removed from combat, whichever comes first.",
      "endsWhen": "The effect ends if the wearer is removed from combat before their next turn begins.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The helmet's unique materials and craftsmanship justify a price of 1,000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:00:01.819685+00:00",
    "aiReviewedAt": "2026-07-23T20:00:01.819685+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_iron_plate": {
    "id": "valley_bowser_volcanic_iron_plate",
    "name": "Volcanic Iron Plate",
    "description": "A forged armor fragment from the heart of Mount Bowser. Absorbs explosive damage and radiates heat to weaken foes. Ideal for frontline warriors.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs 30% of explosive damage",
      "Deals 15% extra damage to enemies in lava",
      "Grants 10% bonus attack speed when enraged"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5
  },
  "valley_bowser_volcanic_mace": {
    "id": "valley_bowser_volcanic_mace",
    "name": "Volcanic Mace of the Shattered Throne",
    "description": "The Volcanic Mace of the Shattered Throne channels raw volcanic fury with each swing. This fiery mace deals +5 fire damage and can ignite enemies, dealing an additional 10 fire damage at the start of their next turn if they have any fire resistance. Its strikes also cause small explosions, dealing an area effect that damages all creatures within a 5-foot radius for 2d6 fire damage as long as it's held.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fire Ignition",
      "Explosive Strike"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Ignition",
        "rules": "When the mace hits a target with at least 25% fire resistance, the target is ignited. At the start of its next turn, it takes an additional 10 fire damage from the lingering flames."
      },
      {
        "title": "Explosive Strike",
        "rules": "The mace deals an area effect on hit, causing a small explosion that damages all creatures within a 5-foot radius for 2d6 fire damage. This effect stacks up to three times per target."
      }
    ],
    "levelRequirementReason": "Beginners can learn the basics of wielding this fiery weapon.",
    "vendorReason": "Valley Bowser's extensive network extends into volcanic regions, making them a reliable source for such exotic weaponry.",
    "shippingDetail": "Delivered by spectral messengers, this mace arrives with a slight delay due to its magical essence.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous effect",
      "endsWhen": "Targeted creature moves or is hit again by the mace",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its fire damage, area-of-effect abilities, and unique ignition feature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:47:13.643061+00:00",
    "aiReviewedAt": "2026-07-24T23:47:13.643061+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_magma_bloom": {
    "id": "valley_bowser_volcanic_magma_bloom",
    "name": "Magma Bloom Amulet",
    "description": "The Magma Bloom Amulet is a pulsating charm crafted from volcanic heartstone. Its core glows with molten fire, radiating heat and protecting its wearer against lava's destructive touch. This amulet grants immunity to lava damage for ten seconds when activated, allowing the wearer to traverse fiery environs unscathed. Activated, it summons a flame aura that enhances the user’s fire-based attacks by +1d6 damage, providing both defensive and offensive benefits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Lava",
      "Enhanced Fire Damage"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Lava Immunity",
        "rules": "Activates when the wearer is exposed to lava. Provides immunity for ten seconds, during which the wearer takes no damage from lava."
      },
      {
        "title": "Flame Aura",
        "rules": "When activated, a flame aura enhances fire-based attacks by +1d6 bonus damage for one minute. Ends if the wearer enters an environment not conducive to fire or if the amulet is deactivated."
      }
    ],
    "levelRequirementReason": "The amulet's innate heat and power require a certain level of magical proficiency.",
    "vendorReason": "Bowser, ruler of the Underworld, has forged this protective charm for his subjects.",
    "shippingDetail": "The amulet is carefully packed and shipped to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds of immunity, 1 minute of enhanced fire damage",
      "endsWhen": "Lava exposure ends or the wearer leaves a fiery area; aura ends after one minute regardless.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this amulet offers both defensive and offensive benefits without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:00:26.818047+00:00",
    "aiReviewedAt": "2026-07-23T20:00:26.818047+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_ore": {
    "id": "valley_bowser_volcanic_ore",
    "name": "Volcanic Ore Chunk",
    "description": "This chunk of volcanic ore glows with an internal heat that crackles and pops, a testament to its origin deep within Bowser's fiery core. When forged into weapons or armor, it imbues them with a primal wrath that burns like molten lava. This rare material not only enhances fire damage by 15% but also grants the wielder a soothing yet powerful connection to the earth, regenerating stamina at a steady rate of 5% per second.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhances Fire Damage",
      "Stamina Regeneration"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Fire Damage",
        "rules": "This effect increases fire damage dealt by weapons and spells made from or enchanted with Volcanic Ore Chunk by 15%. This bonus stacks with other sources of fire damage. The effect is active as long as the weapon or armor is in use."
      },
      {
        "title": "Stamina Regeneration",
        "rules": "While equipped, this chunk grants a passive regeneration of 5% stamina per second. This effect ends when the item is removed from the wielder's equipment."
      }
    ],
    "levelRequirementReason": "The raw energy of volcanic ore can be harnessed by any adventurer willing to handle its volatile nature.",
    "vendorReason": "Valley Bowser, a mining hub for the most resilient materials, regularly sources unique items like this chunk directly from the depths where it originated.",
    "shippingDetail": "Special handling required due to its volatile nature; delivery takes an additional day.",
    "usage": {
      "activation": "Instantaneous upon crafting or equipping.",
      "duration": "Until removed from equipment or the item is destroyed.",
      "endsWhen": "Equipped item is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare and volatile nature of this ore, coupled with its unique properties, justifies a price that reflects its value without being overpriced.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-24T23:47:36.872882+00:00",
    "aiReviewedAt": "2026-07-24T23:47:36.872882+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_scorch_glove": {
    "id": "valley_bowser_volcanic_scorch_glove",
    "name": "Volcanic Scorch Glove",
    "description": "The Volcanic Scorch Glove is a pair of obsidian gauntlets forged from cooled lava, imbued with the fiery essence of Mount Pyroclast's heart. These gloves grant their wearer fire resistance and allow them to ignite nearby enemies with a swipe, dealing an extra 15% damage to lava-based foes. The gloves' heat also allows for brief bursts of flame that can be used to set flammable objects alight in seconds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fire Resistance +30%",
      "Extra Damage (Lava-Based Enemies)"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Ignite",
        "rules": "As a bonus action, the wearer can ignite nearby enemies within 5 feet. This deals an additional 1d6 fire damage to one target and sets it alight for 1 minute. The target must make a DC 14 Dexterity saving throw or be set ablaze, dealing 2d6 fire damage at the start of its next turn until extinguished."
      },
      {
        "title": "Fire Resistance",
        "rules": "The wearer gains resistance to fire damage and has advantage on saving throws against fire-based effects. This effect lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 due to its powerful abilities that aid in battling lava golems and magma beasts.",
    "vendorReason": "Valley Bowser, the blacksmith who forges weapons from volcanic materials, is known to create such unique and potent items.",
    "shippingDetail": "Ships via Pipe Express, with a special heat-resistant packaging that ensures safe delivery even in extreme temperatures.",
    "usage": {
      "activation": "Bonus Action (Ignite)",
      "duration": "Instantaneous (Ignite); lasts until the end of next long rest (Fire Resistance)",
      "endsWhen": "Expend charge or at the start of wearer's next turn if set ablaze",
      "charges": "Unlimited, but can only ignite one target per short rest"
    },
    "priceReason": "The glove is priced at 1000 XP due to its unique forgeheart core and the specialized materials used in its creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:01:18.264415+00:00",
    "aiReviewedAt": "2026-07-23T20:01:18.264415+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_shield": {
    "id": "valley_bowser_volcanic_shield",
    "name": "Volcanic Shield of the Roaring Earth",
    "description": "The Volcanic Shield of the Roaring Earth stands as a testament to the Valley's fiery wrath, its surface etched with ancient lava runes that pulse with molten energy. This formidable shield not only deflects fire damage but also absorbs shockwaves, reducing incoming harm and providing a resilient barrier for any who dare stand in its path. Crafted from the very heart of a dormant volcano, it grants the wielder an armor bonus against lava-based attacks while subtly enhancing their earth magic abilities.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Deflects Fire Damage",
      "Enhances Earth Magic"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fire Deflection",
        "rules": "The shield deflects up to 40% of incoming fire damage as a reaction. This effect ends when the user takes another action or reaction on their turn."
      },
      {
        "title": "Earth Magic Enhancement",
        "rules": "While wielding this shield, the user’s earth-based spellcasting ability is enhanced, reducing the cooldown of such spells by 20%. This benefit lasts until a short or long rest is taken."
      }
    ],
    "levelRequirementReason": "This shield's fiery runes and volcanic essence demand a user with experience in handling dangerous elements.",
    "vendorReason": "Bowser, the Valley’s guardian, ensures only those who truly understand its dangers can wield such power.",
    "shippingDetail": "Carefully packed within a molten lava-hardened casing to prevent any accidental damage during transit.",
    "usage": {
      "activation": "Reaction (to deflect fire damage)",
      "duration": "Instantaneous (for deflection) and until the end of the user's next turn (for earth magic enhancement)",
      "endsWhen": "The effect ends when the user takes another action or reaction, or after a short rest.",
      "charges": "Unlimited, but requires a short or long rest for the earth magic enhancement to recharge."
    },
    "priceReason": "Crafted from volcanic essence and imbued with ancient runes, this shield's balanced price reflects its rarity and power without overshadowing other valuable items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:01:15.835308+00:00",
    "aiReviewedAt": "2026-07-23T20:01:15.835308+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_shield_core": {
    "id": "valley_bowser_volcanic_shield_core",
    "name": "Volcanic Shield Core",
    "description": "The Volcanic Shield Core is a molten fragment of Bowser’s fiery fortress, forged by volcanic hands in the heart of his lair. This shield core glows with an inner inferno, absorbing impact and fire damage as if it were born from lava itself. It grants its wielder near-impenetrable defense against fire and physical attacks, while also repairing minor cracks and dents with each use. Its origins lie in the very heart of Bowser’s molten fortress, a place where only the bravest dare to tread.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Defense +50% against fire damage",
      "Absorbs 60% of incoming physical damage"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "Activates upon taking impact, absorbing 60% of the physical damage dealt. The shield recharges its absorption capacity every 15 seconds."
      },
      {
        "title": "Auto-Repair",
        "rules": "After being struck, the Volcanic Shield Core automatically repairs any cracks or dents for a duration of 1 hour. This effect can be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "The intense heat and raw power required to wield this shield core demand a high level of mastery.",
    "vendorReason": "Only Valley Bowser can source such a fierce relic from his own molten fortress.",
    "shippingDetail": "Ships via spectral courier, delivering the core with swift precision.",
    "usage": {
      "activation": "Instantaneous upon impact or attack.",
      "duration": "Until the next short rest, recharges every 15 seconds for physical damage absorption.",
      "endsWhen": "After absorbing 60% of incoming damage. Auto-repair ends after 1 hour.",
      "charges": "Unlimited"
    },
    "priceReason": "The core’s intense power and rarity justify its high price, but it remains a cost-effective epic piece for those who can handle its fiery might.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:01:47.609477+00:00",
    "aiReviewedAt": "2026-07-23T20:01:47.609477+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_soul": {
    "id": "valley_bowser_volcanic_soul",
    "name": "Volcanic Soul Shard",
    "description": "The Volcanic Soul Shard is a molten fragment of Bowser's fiery essence, forged deep within the heart of his volcanic lair. This resilient shard grants its wielder immunity to lava damage for two turns and a 15% chance to dodge any incoming attack, making it invaluable in treacherous environments. Crafted with precision by the elusive Valley Bowser, this item is both a weapon against fire and a safeguard for those who dare venture into his domain.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Lava Damage",
      "Increased Dodge Chance"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Immunity to Lava Damage",
        "rules": "The wielder gains immunity to fire damage from lava for two turns. This effect ends if the user is no longer in contact with lava."
      },
      {
        "title": "Increased Dodge Chance",
        "rules": "There is a 15% chance that any attack made against the user will be dodged. This effect can only occur once per battle and resets after a short rest."
      }
    ],
    "levelRequirementReason": "Crafted with Bowser's volcanic essence, this shard demands a certain level of mastery to wield its fiery power.",
    "vendorReason": "Valley Bowser, the master forger and guardian of volcanic treasures, is the only one who can craft items imbued with such raw fire energy.",
    "shippingDetail": "Ships via Pipe Express, known for its quick delivery through underground tunnels. Expect a timely arrival straight from Bowser's lair.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "2 turns of immunity to lava damage and one dodge attempt per battle.",
      "endsWhen": "The effect ends if the user is no longer in contact with lava or after a short rest, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from Bowser's volcanic essence and imbued with potent fire magic, this shard offers both protection and tactical advantage at a fair price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T20:01:56.731553+00:00",
    "aiReviewedAt": "2026-07-23T20:01:56.731553+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_soul_burner": {
    "id": "valley_bowser_volcanic_soul_burner",
    "name": "Volcanic Soul Burner",
    "description": "A fiery amulet that channels volcanic rage into combat, granting the wearer enhanced speed and damage in lava zones. When struck by enemy fire, it briefly ignites nearby foes.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% attack speed in lava terrain",
      "+30% damage against fire-type enemies",
      "Ignites enemies on hit (20% chance)"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5
  },
  "valley_bowser_volcanic_soul_core": {
    "id": "valley_bowser_volcanic_soul_core",
    "name": "Volcanic Soul Core of the King’s Rage",
    "description": "The Volcanic Soul Core of the King’s Rage is a molten core pulsing with the fiery wrath of Mount Vesuvius. Crafted from volcanic glass and imbued with the essence of a dormant volcano, it channels raw elemental power into the wielder's strikes. When activated, it grants +100% fire damage to melee attacks and can summon a fierce Lava Elemental for 30 seconds, which auto-targets enemies until dismissed or destroyed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+100% Fire Damage",
      "Summons Lava Elemental"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Firepower Boost",
        "rules": "Activates on a bonus action. Grants +100% fire damage to melee attacks for the duration of one short rest or until dismissed."
      },
      {
        "title": "Lava Elemental Summoning",
        "rules": "Summons a Lava Elemental with 50% damage reduction for 30 seconds, which targets enemies within 30 feet. The elemental lasts until dismissed by the user or destroyed."
      }
    ],
    "levelRequirementReason": "Requires proficiency in melee weapons to effectively utilize the fire-based attacks.",
    "vendorReason": "Valley Bowser, a master of volcanic artifacts, specializes in items that channel raw elemental power.",
    "shippingDetail": "Delivered via spirit courier with a guaranteed delivery within 3 days.",
    "usage": {
      "activation": "Bonus action to summon the Lava Elemental; melee attack to activate firepower boost.",
      "duration": "Lava Elemental lasts for 30 seconds, elemental can be dismissed early by the user. Firepower boost lasts until one short rest or dismissal.",
      "endsWhen": "Dismissible by the user or destroyed upon taking 25 damage",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price considering the unique elemental summoning and fire damage boost.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:01:33.348893+00:00",
    "aiReviewedAt": "2026-07-23T20:01:33.348893+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_tear_glove": {
    "id": "valley_bowser_volcanic_tear_glove",
    "name": "Volcanic Tear Glove",
    "description": "The Volcanic Tear Glove is a cursed artifact forged from the very tears of Bowser's volcanic rage, each finger encased in molten obsidian. It is said that wearing it allows the wearer to channel Bowser’s infernal fury, delivering devastating blows and restoring vitality at the cost of one's own strength. Each use drains precious health but unleashes a torrent of fiery destruction upon enemies, temporarily weakening their defenses.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Volcanic Blow",
      "Health Restoration"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Volcanic Blow",
        "rules": "When activated as an action, the user deals 300 fire damage to a single target. The effect reduces the target's AC by 10 for 5 seconds after contact."
      },
      {
        "title": "Health Restoration",
        "rules": "Activating this glove costs 50 hit points but restores 150 hit points to the user. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This artifact requires a minimum of three levels to wield, ensuring it is not overpowered for lower-level characters.",
    "vendorReason": "Only Valley Bowser, the blacksmith who forged this glove from volcanic rock, can offer such a dangerous but powerful relic.",
    "shippingDetail": "The glove is shipped in an insulated box to prevent accidental damage during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the target's AC is reduced or the user rests for a long rest.",
      "charges": "One charge per use, recharged after a long rest."
    },
    "priceReason": "This artifact requires significant crafting and magical energy to produce, justifying its substantial price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:02:40.803449+00:00",
    "aiReviewedAt": "2026-07-23T20:02:40.803449+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_tome": {
    "id": "valley_bowser_volcanic_tome",
    "name": "Volcanic Tome of Ash",
    "description": "The Volcanic Tome of Ash is an ancient scroll imbued with the fiery wrath of volcanic eruptions. Crafted from pumice and obsidian, it crackles with molten energy as it channels earth's fury into devastating spells. When unrolled, it unleashes a scorching blast that deals 200 fire damage to all enemies within its 3x3 area, and those below 30% health receive an additional 20% increased damage from the tome’s volcanic surge.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Volcanic Surge",
      "Increased Damage"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Volcanic Surge",
        "rules": "When activated as a bonus action, this scroll unleashes a scorching blast that targets all enemies within a 3x3 area. Deals 200 fire damage to each target and reduces their movement speed by 25% for the following 3 seconds. This effect ends if the user takes any damage or if another spell is cast."
      },
      {
        "title": "Increased Damage",
        "rules": "For 6 rounds after using Volcanic Surge, all fire-based attacks deal an additional 20% damage to enemies with less than 30% remaining health. This effect ends when the user casts another spell or takes any damage."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 6 due to its powerful effects and the need for precise control over such volatile magic.",
    "vendorReason": "The forge at Valley Bowser is known for crafting items that harness elemental powers, making this tome an ideal addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its swift and reliable couriers through interdimensional paths.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; Volcanic Surge lasts 3 seconds, Increased Damage lasts 6 rounds",
      "endsWhen": "On damage to the user or another spell cast by the user",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP due to its powerful area-of-effect spells and the additional benefit of increased fire damage against weakened foes.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:02:04.209570+00:00",
    "aiReviewedAt": "2026-07-23T20:02:04.209570+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcanic_ward": {
    "id": "valley_bowser_volcanic_ward",
    "name": "Volcanic Ward of the Embered Realm",
    "description": "The Volcanic Ward of the Embered Realm is a molten stone talisman that crackles with emerald fire, forged from the heart of an ancient lava pit in the realm's core. Its surface glistens with veins of obsidian and sapphire, imbued with protective energies to ward off elemental incursions. When activated, it grants the wearer a shield of fiery resilience, reducing damage from fire-based attacks by half and boosting their health by 20% for a fleeting moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Fire Resistance",
      "Temporary Health Boost"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "Activates as an action. Reduces all fire damage taken by 50%. Lasts until the start of your next turn and is recharged after a short or long rest."
      },
      {
        "title": "Temporary Health Boost",
        "rules": "When activated, grants the wearer a +20% bonus to their hit points for the duration. This effect ends when the wearer takes any damage or if they finish a short or long rest."
      }
    ],
    "levelRequirementReason": "The Volcanic Ward's raw elemental power demands a user who is at least level 1 to wield it effectively.",
    "vendorReason": "Valley Bowser, with his extensive knowledge of the Embered Realm's geography and resources, has access to this rare artifact forged deep within its volcanic heart.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its swift and secure courier service through interdimensional routes.",
    "usage": {
      "activation": "Action",
      "duration": "One turn",
      "endsWhen": "Starts of next turn or taking damage; recharges after rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Volcanic Ward is crafted from rare, elemental-infused materials and is a sought-after relic in the Embered Realm, justifying its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:02:23.621825+00:00",
    "aiReviewedAt": "2026-07-23T20:02:23.621825+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcano_blast": {
    "id": "valley_bowser_volcano_blast",
    "name": "Volcano Blast Gauntlet",
    "description": "The Volcano Blast Gauntlet, forged from the fiery heart of a dormant volcano, channels molten iron into its very core. Each swing releases a searing fireball that can clear lava pits in mere moments and trigger nearby volcanic eruptions, making it indispensable for any adventurer navigating treacherous magma fields. The gauntlets are said to have been crafted by the ancient Volcanic Forgeheart clan, whose rituals imbued them with enduring strength.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Fireball Launch",
      "Increased Attack Speed"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fireball Launch",
        "rules": "When you make a melee attack while wearing the gauntlets, you can expend one charge to launch an explosive fireball. The fireball deals 150 fire damage and creates 20% terrain damage in a 15-foot radius. Targets within this area must succeed on a DC 14 Dexterity saving throw or be knocked prone."
      },
      {
        "title": "Increased Attack Speed",
        "rules": "While wearing the Volcano Blast Gauntlets, your attack speed is increased by 20%. This effect persists until you take another action or reaction that requires an attack roll. You regain one charge after a long rest."
      }
    ],
    "levelRequirementReason": "The gauntlets' enchantments and the inherent danger of wielding them necessitate a minimum level to ensure proficiency in their use.",
    "vendorReason": "Bowser's minions have mastered the art of crafting items that can withstand volcanic environments, making these gauntlets a logical addition to Valley Bowser's inventory.",
    "shippingDetail": "Ships via Lakitu Drones within three days. Special packaging required for safe transit due to the gauntlets' volatile nature.",
    "usage": {
      "activation": "As a bonus action, you can launch an explosive fireball by expending one charge.",
      "duration": "Instantaneous",
      "endsWhen": "You take another action or reaction that requires an attack roll, or after using all charges.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "The gauntlets' unique crafting materials and the inherent risk of their use justify this price point. They are not merely weapons but tools of volcanic mastery, making them a rare find in any adventurer's arsenal.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T20:03:15.968331+00:00",
    "aiReviewedAt": "2026-07-23T20:03:15.968331+00:00",
    "aiReviewVersion": 1
  },
  "valley_bowser_volcano_shield": {
    "id": "valley_bowser_volcano_shield",
    "name": "Volcano Shield of the Deep Earth",
    "description": "The Volcano Shield of the Deep Earth is a molten-plated shield forged from the heart of an ancient volcano. Its surface crackles with raw earth energy, and when struck by fire-based attacks, it absorbs the blast and channels it into a devastating shockwave that erupts before its wielder. This shield not only deflects incoming strikes but also reduces the cooldown on all fire-based abilities by 30%. A true testament to the deep earth's power, it is a symbol of resilience in the face of volcanic fury.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Deflects and Absorbs",
      "Erupting Shockwave"
    ],
    "vendor": "valley_bowser",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deflects and Absorbs",
        "rules": "When you take damage from a fire-based attack, the Volcano Shield absorbs half of it (100% total absorption) and redirects this absorbed energy into an erupting shockwave that deals 50 fire damage to all creatures within a 10-foot radius. This effect can only be used once per long rest."
      },
      {
        "title": "Reduced Cooldown",
        "rules": "At the start of your next turn, reduce the cooldown of any fire-based ability you have by 30%. This effect has no cooldown and can be triggered as a reaction to any fire-based attack against you."
      }
    ],
    "levelRequirementReason": "The shield's raw power demands a firmer grasp of elemental magic.",
    "vendorReason": "Bowser, the king of volcanoes, has long been known to wield the earth's might and thus can provide this artifact of volcanic strength.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe arrival from the depths of Mount Enchanting.",
    "usage": {
      "activation": "Reaction to a fire-based attack",
      "duration": "Instantaneous",
      "endsWhen": "At the start of your next turn or when you take another reaction to deflect an attack",
      "charges": "Unlimited, resets at dawn"
    },
    "priceReason": "The shield's raw elemental power and deep earth origin justify its price, making it a worthy investment for any adventurer.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T20:02:38.528222+00:00",
    "aiReviewedAt": "2026-07-23T20:02:38.528222+00:00",
    "aiReviewVersion": 1
  },
  "vampire_counts_blood_sausage_recipe": {
    "id": "vampire_counts_blood_sausage_recipe",
    "name": "Recipe: Vampire Counts Blood Sausage",
    "description": "This dusty, leather-bound tome, adorned with blood-red ink and the sigils of ancient vampires, teaches you how to craft 'Blood Sausage' fit for a Count's table. When consumed in darkened chambers, it heals 1d8 hit points and grants advantage on Stealth checks under the moonlight. The sausage must be made from fresh 'Blood' (not berry juice) and iron-rich ingredients provided by Count's Butchers to maintain its potency.",
    "price": 1000,
    "icon": "🌭",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Nighttime Nourishment",
      "Stealthy Advantage"
    ],
    "vendor": "vampire_counts_manor",
    "shippedBy": "Crimson Casing Codex",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nighttime Nourishment",
        "rules": "When consumed in darkness, this recipe heals the imbiber for 1d8 hit points. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Stealthy Advantage",
        "rules": "For 1 hour after consumption, the imbiber gains advantage on Stealth checks made at night under a full moon. This effect ends when the effects of darkness end or the imbiber leaves an area with significant illumination."
      }
    ],
    "levelRequirementReason": "The recipe is simple enough for any initiate to learn, but it requires a vampire's expertise in crafting it properly.",
    "vendorReason": "Count's Butchers are the only ones who can provide the necessary ingredients and knowledge to craft Blood Sausage correctly.",
    "shippingDetail": "The recipe is shipped in a sealed, enchanted case that preserves the ingredients until you arrive at your destination.",
    "usage": {
      "activation": "Eating the sausage consumes it instantly.",
      "duration": "Instantaneous healing; advantage on Stealth checks lasts for 1 hour.",
      "endsWhen": "Consumption ends the effect and uses one charge. The recipe can only be used once per day.",
      "charges": "Unlimited, but only usable once a day."
    },
    "priceReason": "The recipe is priced at 1000 XP to reflect its utility for vampires and the rare ingredients required.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T20:03:09.866878+00:00",
    "aiReviewedAt": "2026-07-23T20:03:09.866878+00:00",
    "aiReviewVersion": 1
  },
  "vampire_counts_blood_vial_service": {
    "id": "vampire_counts_blood_vial_service",
    "name": "Vampire Counts Blood Vial Service",
    "description": "The Vampire Counts Blood Vial Service is a glass vial sealed with a stopper of dark crimson wax, a relic crafted by the Count's Alchemists. Sipping from this vial not only quenches your bloodlust but also grants you a brief respite from the hunger that plagues vampires. The metallic taste lingers on your palate, and after consuming it, you will burp up a small splash of dark crimson, reminiscent of fresh blood.",
    "price": 1000,
    "icon": "🩸",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Restore Health",
      "Quench Hunger"
    ],
    "vendor": "vampire_counts_castle",
    "shippedBy": "Crimson Flask Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "Consume the Blood Vial to gain 1d8 hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Quench Hunger",
        "rules": "For 7 days after consumption, you are immune to the effects of hunger. You still need sleep but do not suffer from starvation or dehydration penalties during this time."
      }
    ],
    "levelRequirementReason": "This service is accessible to all vampires who may find themselves in dire need without immediate access to prey.",
    "vendorReason": "The Counts' Alchemists are known for their unique and potent remedies, and this vial is one of the most sought-after items within their apothecary.",
    "shippingDetail": "Delivered by trusted Crimson Flask Couriers, ensuring the vials arrive in pristine condition without spilling a drop.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "Instantaneous effect; lasts for 7 days",
      "endsWhen": "After 7 days or when consumed again",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The price reflects the rarity and craftsmanship required to produce this unique vial.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T20:03:13.909192+00:00",
    "aiReviewedAt": "2026-07-23T20:03:13.909192+00:00",
    "aiReviewVersion": 1
  },
  "vampire_counts_night_shade_strainer": {
    "id": "vampire_counts_night_shade_strainer",
    "name": "Vampire Counts Night Shade Strainer",
    "description": "The Vampire Counts Night Shade Strainer is a delicate, intricately woven device made of dark weave fibers, each strand dyed with the essence of nightshade. It allows for the precise straining of blood sausage casings, granting advantage on cooking checks during the night. The threads fray and disintegrate in sunlight, making it an essential tool for Count's Weavers. Crafted by Count's Weavers, this strainer is a reminder of the delicate balance between darkness and light.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌭",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Night Cooking",
      "Dark Weave Threads Fray in Sunlight"
    ],
    "vendor": "vampire_counts_manor",
    "shippedBy": "Crimson Colander Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Night Cooking",
        "rules": "When used to prepare blood sausage during nighttime, the strainer grants the user advantage on cooking checks. This effect is limited to one use per night."
      },
      {
        "title": "Dark Weave Threads Fray in Sunlight",
        "rules": "The dark weave threads of the strainer disintegrate and fray when exposed to sunlight for more than 10 minutes, rendering it unusable until reconditioned or replaced. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners who wish to enhance their culinary skills without requiring extensive magical proficiency.",
    "vendorReason": "The Vampire Counts Manor sells this tool because it is a necessary part of the Count's Weavers' trade, essential for maintaining their reputation in dark arts and cuisine.",
    "shippingDetail": "Shipped in a crate lined with dark weave to protect against sunlight exposure during transit.",
    "usage": {
      "activation": "Used as a tool when cooking blood sausage during nighttime.",
      "duration": "Instantaneous, lasting until the start of the following night.",
      "endsWhen": "Exposure to sunlight for more than 10 minutes",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the unique materials and craftsmanship required to produce this tool, making it an uncommon but essential item.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:03:21.057590+00:00",
    "aiReviewedAt": "2026-07-23T20:03:21.057590+00:00",
    "aiReviewVersion": 1
  },
  "vampire_counts_noble_velvet doublet": {
    "id": "vampire_counts_noble_velvet_doublet",
    "name": "Vampire Counts Noble Velvet Doublet",
    "description": "The Vampire Counts Noble Velvet Doublet is a regal ensemble crafted from supple, dark velvet that whispers secrets of the night with each motion. This attire not only grants its wearer an almost supernatural allure but also preserves their form in a state of eternal freshness, ensuring they remain unmarred by time's passage. The doublet's subtle design and rich texture make it a staple among the undead aristocracy, lending them an aura that intimidates even the most seasoned noble.",
    "price": 1000,
    "icon": "👕",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Unnatural Freshness",
      "Charisma Boost"
    ],
    "vendor": "vampire_counts_manor",
    "shippedBy": "Crimson Velvet Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unnatural Freshness",
        "rules": "While wearing this doublet, you have advantage on saving throws against effects that cause rot or decay. Additionally, the doublet's material prevents any signs of decomposition or foul odors from emanating."
      },
      {
        "title": "Charisma Boost",
        "rules": "When you are in formal settings and take an action to intimidate a creature with Charisma (Intimidation), you gain advantage on this check. This effect lasts for the duration of your interaction with that creature."
      }
    ],
    "levelRequirementReason": "The doublet's subtle yet potent effects make it suitable for characters who are just beginning their journey.",
    "vendorReason": "Count's Tailors, known for their impeccable craftsmanship and understanding of the undead's needs, have been creating this attire since the dawn of vampire nobility.",
    "shippingDetail": "The doublet is shipped in a specially designed box that ensures its delicate velvet remains free from dust bunnies during transit.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous for 'Charisma (Intimidation)' checks, otherwise permanent while worn",
      "endsWhen": "Effect ends when the doublet is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The doublet's rarity and unique properties justify its price, offering both defensive and social advantages.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T20:04:20.348173+00:00",
    "aiReviewedAt": "2026-07-23T20:04:20.348173+00:00",
    "aiReviewVersion": 1
  },
  "vampire_counts_thrall_ointment": {
    "id": "vampire_counts_thrall_ointment",
    "name": "Vampire Thrall Ointment",
    "description": "A foul-smelling, pale cream that clings to skin like a vampiric curse, Vampire Thrall Ointment is said to be crafted by the very hands of the undead themselves. Its application leaves behind a faint, sickly-sweet aroma that only those with a natural affinity for darkness can detect. Once smeared upon an unwitting victim, it grants vampires an advantage on their attempts to charm and control the target, leaving them ensnared under the sway of vampiric influence.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🧛",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Vampiric Charm Advantage",
      "Sweet Scent"
    ],
    "vendor": "Vampire Counts",
    "shippedBy": "Poached Vial Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vampiric Charm Advantage",
        "rules": "When applied to an unwilling or unknowing target, the ointment grants vampires a +2 bonus on Charisma (Intimidation) checks and on their attempt to charm the target. This effect lasts for 24 hours."
      },
      {
        "title": "Sweet Scent",
        "rules": "The ointment leaves behind an unmistakable, sickly-sweet aroma that only creatures with a natural affinity for darkness can detect. Vampires within 30 feet of the target have advantage on Perception checks to notice this scent."
      }
    ],
    "levelRequirementReason": "This forbidden ointment is potent enough to be effective even at low levels, though it requires a certain degree of subtlety and skill in its deployment.",
    "vendorReason": "The Vampire Counts are the only ones who can afford to stock an item that borders on black magic, given their own dark dealings with the undead.",
    "shippingDetail": "Due to its volatile nature and forbidden status, the ointment must be shipped via Poached Vial Express in specially treated containers.",
    "usage": {
      "activation": "Apply as an action to a willing or unwilling target. The target must succeed on a DC 15 Constitution saving throw or be affected by the ointment.",
      "duration": "24 hours",
      "endsWhen": "The effect ends after 24 hours, upon a successful save against being charmed, or if removed by magic.",
      "charges": "Single Use"
    },
    "priceReason": "Crafted under dark magic and with rare ingredients, the Vampire Thrall Ointment is a dangerous yet invaluable tool for those who wish to manipulate the undead.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T20:04:10.867603+00:00",
    "aiReviewedAt": "2026-07-23T20:04:10.867603+00:00",
    "aiReviewVersion": 1
  },
  "vampire_covenant_blood_type_conversion": {
    "id": "vampire_covenant_blood_type_conversion",
    "name": "Vampire Covenant Blood Type Conversion",
    "description": "The Vampire Covenant Blood Type Conversion transforms your blood to a universally appealing type, making you an irresistible snack for vampires. This conversion lasts for a month and ensures you are always in the company of these nocturnal creatures. However, it's not all sweetness; you now smell like a feast to them, which can either endear or alarm. Only the Vampire Covenant Blood Banks possess this arcane recipe, making it a rare service indeed.",
    "category": "services",
    "price": 1000,
    "icon": "🩸",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Vampire Appeal",
      "Smell Like Feast"
    ],
    "vendor": "vampire_covenant",
    "shippedBy": "Night Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vampire Appeal",
        "rules": "For one month, you are immune to vampire charm effects and gain advantage on saving throws against such attempts. Vampires are drawn to you, offering temporary friendship but at the cost of their hunger."
      },
      {
        "title": "Smell Like Feast",
        "rules": "You have disadvantage on Stealth checks when trying to avoid vampires. This effect lasts until your next long rest and cannot be removed early."
      }
    ],
    "levelRequirementReason": "This service is available to everyone, as it can save lives in situations involving vampire encounters.",
    "vendorReason": "The Vampire Covenant Blood Banks have the expertise and resources to ensure your safety from vampiric threats.",
    "shippingDetail": "Delivered by Night Courier with same-day service within the vampire-infested zones.",
    "usage": {
      "activation": "Instantaneous, but requires a successful saving throw (DC 12) to avoid drawing unwanted attention from vampires.",
      "duration": "One month, or until you take damage from a vampire.",
      "endsWhen": "Your next long rest, upon taking damage from a vampire, or if you voluntarily end it early with another successful saving throw (DC 15).",
      "charges": "Unlimited uses."
    },
    "priceReason": "The service is priced to reflect the rarity and complexity of the transformation without being prohibitively expensive for adventurers.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-23T20:03:41.626898+00:00",
    "aiReviewedAt": "2026-07-23T20:03:41.626898+00:00",
    "aiReviewVersion": 1
  },
  "vampire_covenant_invitation": {
    "id": "vampire_covenant_invitation",
    "name": "Vampire Covenant Invitation",
    "description": "The Vampire Covenant Invitation, a blood-red card adorned with a cryptic sigil, invites you to an enigmatic gathering hosted by a coven of vampires in a shadowy locale. The invitation grants safe passage into and out of their territory for one night, but be wary: accepting means you must fulfill a 'favor' for the vampire lords. Refusing such hospitality is perilous, as it may provoke a deadly response from these creatures of the night.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🩸",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Safe Passage",
      "Favor Requirement"
    ],
    "vendor": "vampire_covenant",
    "shippedBy": "Bat Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe Passage",
        "rules": "This effect grants you safe passage into and out of vampire-controlled territory for one night. The duration is instantaneous, but the effects end when you leave the territory or if you refuse the favor. There are no save DCs involved."
      },
      {
        "title": "Favor Requirement",
        "rules": "Upon entering the territory, you must fulfill a 'favor' requested by the coven within 24 hours. The favor is specific to each invitation and may involve tasks ranging from locating rare artifacts to aiding in a minor ritual. Failing or refusing the favor could result in dire consequences."
      }
    ],
    "levelRequirementReason": "Even low-level adventurers can appreciate the strategic value of safe passage into dangerous territories.",
    "vendorReason": "The vampire coven needs to ensure their territory is not infiltrated by unwary visitors, making this invitation a valuable asset for controlled entry.",
    "shippingDetail": "The Bat Messenger delivers the invitation swiftly but discreetly, ensuring its secrecy and urgency.",
    "usage": {
      "activation": "Instantaneous upon acceptance of the invitation.",
      "duration": "One night within vampire territory.",
      "endsWhen": "Leaving the territory or refusing the favor.",
      "charges": "Unlimited; each invitation is a one-time use."
    },
    "priceReason": "The invitation's rarity and strategic value justify its high price, ensuring it remains a rare but attainable commodity for adventurers.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-23T20:04:15.276314+00:00",
    "aiReviewedAt": "2026-07-23T20:04:15.276314+00:00",
    "aiReviewVersion": 1
  },
  "vampire_covenant_midnight_melter": {
    "id": "vampire_covenant_midnight_melter",
    "name": "Vampire Covenant Midnight Melter",
    "description": "The Vampire Covenant Midnight Melter is a sleek, hand-forged device designed for nocturnal feasts. Crafted from midnight-black iron in the shadowy workshops of the Covenant Alchemists, it operates solely under cover of darkness. This melter not only ensures your snack is perfectly melted but also enhances your dexterity with advantage on Dexterity (Stealth) checks made after midnight. The device cools instantly at dawn, preserving its stealth and functionality for the next night's feast.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍽️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Melts in Dark",
      "Advantage on Nocturnal Prep"
    ],
    "vendor": "vampire_covenant_tower",
    "shippedBy": "Nocturnal Melt Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Melts in Dark",
        "rules": "The Midnight Melter functions only when used during nighttime. It provides advantage on Dexterity (Stealth) checks made between sunset and sunrise."
      },
      {
        "title": "Advantage on Nocturnal Prep",
        "rules": "While using the device, you gain a +2 bonus to any check related to preparing or setting up an item for consumption during the night. This effect lasts until the start of your next long rest."
      }
    ],
    "levelRequirementReason": "This melter is designed for beginners who wish to enhance their nocturnal dining experiences without the need for extensive training.",
    "vendorReason": "The Covenant Alchemists are renowned for their expertise in crafting tools that aid in night-time activities, making this melter a staple among their offerings.",
    "shippingDetail": "Ships via Nocturnal Melt Mail, ensuring the device arrives wrapped in shadowy cloaks, ready to be activated after dark.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Starts a new day or when the item is no longer used during nighttime.",
      "charges": "Unlimited"
    },
    "priceReason": "The melter's rare material and specialized craftsmanship justify its moderate price, making it accessible yet not common.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T20:04:06.834175+00:00",
    "aiReviewedAt": "2026-07-23T20:04:06.834175+00:00",
    "aiReviewVersion": 1
  },
  "vampire_covenant_midnight_snack_plate_recipe": {
    "id": "vampire_covenant_midnight_snack_plate_recipe",
    "name": "Recipe: Vampire Covenant Midnight Snack Plate",
    "description": "A plate crafted with midnight's delicacies, this rare treat is a feast for those who revel in the night. Made by the meticulous hands of Covenant Butlers, it features an array of exotic fruits and cheeses that only ripen under moonlight. Eating from this plate during the evening grants you 1d8 hit points and advantage on Perception checks made at night. The recipe is exclusive to those who can prove their nocturnal nature.",
    "price": 1000,
    "icon": "🍽️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Moonlit Feast",
      "Enhanced Night Vision"
    ],
    "vendor": "vampire_covenant_tower",
    "shippedBy": "Nocturnal Nibble Notes",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Feast",
        "rules": "Eating from this plate during the evening grants you 1d8 hit points and advantage on Perception checks made at night. The effect lasts until the end of your next long rest."
      },
      {
        "title": "Enhanced Night Vision",
        "rules": "For one hour after consuming, your darkvision increases by 30 feet. This enhancement does not stack with other sources of darkvision."
      }
    ],
    "levelRequirementReason": "Anyone can savor the night, but only those who understand its allure should partake.",
    "vendorReason": "As guardians of the night's traditions, the Vampire Covenant Tower ensures that only those who respect the nocturnal arts receive this delicacy.",
    "shippingDetail": "Delivered by moonlight, ensuring your plate arrives just as the stars begin to twinkle.",
    "usage": {
      "activation": "Eating from the plate during night.",
      "duration": "Until the end of your next long rest.",
      "endsWhen": "The effect ends at the beginning of your next short or long rest.",
      "charges": "Unlimited, as the plate's effects do not deplete resources."
    },
    "priceReason": "Crafted with rare night fruits and a special recipe, this plate is a unique treat worth its weight in experience points.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:04:22.935639+00:00",
    "aiReviewedAt": "2026-07-23T20:04:22.935639+00:00",
    "aiReviewVersion": 1
  },
  "vampire_covenant_mist_form_lesson_service": {
    "id": "vampire_covenant_mist_form_lesson_service",
    "name": "Vampire Covenant Mist Form Lesson Service",
    "description": "This compact, leather-bound book, inscribed with ancient runes and adorned with a silver clasp in the shape of a bat's wing, imparts the secrets of mist form to its bearer. When invoked, you transform into a thick cloud of mist that can slither through narrow gaps and evade most physical attacks. In this form, you gain resistance to all damage dealt by non-magical weapons and gain a +2 bonus to Dexterity (Stealth) checks for one hour. The book is the handiwork of the Mist Masters, an ancient guild renowned for their mastery of shadow and mist.",
    "price": 1000,
    "icon": "🌫️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mist Form Mastery",
      "Resistance to Physical Damage"
    ],
    "vendor": "vampire_covenant_tower",
    "shippedBy": "Fog Vial Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mist Form Mastery",
        "rules": "Once per day, you can use a bonus action to transform into a cloud of mist. While in this form, your speed is 20 feet and you have advantage on Dexterity (Stealth) checks for one hour after the transformation ends."
      },
      {
        "title": "Resistance to Physical Damage",
        "rules": "While in mist form, you gain resistance to all damage from non-magical weapons. This effect lasts until the start of your next turn after transforming back into solid form."
      }
    ],
    "levelRequirementReason": "This lesson service is designed for beginners who are just starting their journey in mist manipulation.",
    "vendorReason": "The Vampire Covenant Tower, renowned for its training in dark arts and elemental control, offers this essential tool to initiates looking to master the art of mist form.",
    "shippingDetail": "Ships via Fog Vial Express, a service known for its swift delivery through the mists and shadows.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour after transformation ends",
      "endsWhen": "Start of your next turn after transforming back into solid form or when you end your concentration (as if concentrating on a spell)",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the comprehensive training and the rare materials used in its crafting.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-23T20:04:41.673993+00:00",
    "aiReviewedAt": "2026-07-23T20:04:41.673993+00:00",
    "aiReviewVersion": 1
  },
  "vampire_covenant_shadow_silk_shirt": {
    "id": "vampire_covenant_shadow_silk_shirt",
    "name": "Vampire Covenant Shadow Silk Shirt",
    "description": "The Vampire Covenant Shadow Silk Shirt is a tailored tunic that weaves itself into the shadows, becoming indistinguishable from night's embrace when worn in darkness. Crafted by the Covenant Tailors, its silk threads are spun from twilight and moonlight, making it cold to the touch even on warm nights. When you wear this shirt in darkness, you gain a +1 bonus to Stealth checks, and it can mend itself in shadows, repairing any damage dealt to it as long as it's not exposed to direct sunlight.",
    "price": 1000,
    "icon": "👕",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth",
      "Self-Repairing"
    ],
    "vendor": "vampire_covenant_tower",
    "shippedBy": "Nocturnal Nightie",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Boost",
        "rules": "When you wear this shirt in darkness, you gain a +1 bonus to your Stealth checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Self-Repairing",
        "rules": "The shirt can mend itself in shadows by repairing any damage dealt to it as long as it is not exposed to direct sunlight. It regains 1d4 hit points at the end of each long rest when worn and kept in shadow."
      }
    ],
    "levelRequirementReason": "The shirt's basic nature allows it to be accessible to lower-level adventurers, providing a useful utility item without being overly powerful.",
    "vendorReason": "As the Shirt is made by Covenant Tailors and used in their operations, they naturally stock it for their members and patrons.",
    "shippingDetail": "Delivered with a cloak of darkness, ensuring that the shirt arrives in complete secrecy.",
    "usage": {
      "activation": "Passive effect while worn in darkness.",
      "duration": "Lasts until the start of your next turn or until exposed to direct sunlight.",
      "endsWhen": "Exposure to direct sunlight or removal from shadows.",
      "charges": "Unlimited"
    },
    "priceReason": "The shirt’s rarity and utility justify its price, offering a significant advantage in stealth situations without being overpowered.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:04:41.923560+00:00",
    "aiReviewedAt": "2026-07-23T20:04:41.923560+00:00",
    "aiReviewVersion": 1
  },
  "vampire_tomato": {
    "id": "vampire_tomato",
    "name": "Vampire Tomato",
    "description": "The Vampire Tomato is a ghastly fruit that seems to have been plucked straight from a demon's garden. Its skin glistens with an eerie sheen, and its fangs gleam like polished obsidian. Consuming it transforms you into a veritable life-siphon, where each strike you deliver heals you by 10% of the damage dealt. Beware, for after consuming this tomato, your reflection no longer appears in mirrors or magical scrying devices; you are forever changed.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍅",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Life-Siphoning Bite",
      "Reflectionless"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Coffin",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Life-Siphoning Bite",
        "rules": "When you deal melee damage to a creature, you heal for an amount equal to 10% of the damage dealt. This effect is passive and does not require activation."
      },
      {
        "title": "Reflectionless",
        "rules": "You no longer have a reflection in any mirror or magical scrying device. This effect becomes active upon consumption of the Vampire Tomato and remains until you are slain."
      }
    ],
    "levelRequirementReason": "This tomato grants abilities that, while powerful, do not require an advanced character to utilize them effectively.",
    "vendorReason": "The Onyx Hand is known for its dark and rare wares; the Vampire Tomato fits perfectly into their sinister inventory.",
    "shippingDetail": "Shipped in a ornate black coffin, delivered by night with a ghoul courier.",
    "usage": {
      "activation": "Passive effect upon consumption.",
      "duration": "Until your character is slain.",
      "endsWhen": "You are killed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Vampire Tomato, while not a high-level item, provides a significant and permanent benefit to the consumer. Its rarity and unique properties justify its value.",
    "priceOriginal": 450000,
    "priceReviewedAt": "2026-07-23T20:04:33.587618+00:00",
    "aiReviewedAt": "2026-07-23T20:04:33.587618+00:00",
    "aiReviewVersion": 1
  },
  "vampire_wario_cape": {
    "id": "vampire_wario_cape",
    "name": "Vampire Wario's Cape",
    "description": "Vampire Wario's Cape is a tattered, midnight-purple garment with dark red trim. Sewn from ancient cloth and tainted by night's curse, it grants the wearer the power to fly like a bat under moonlight. This cursed cape allows you to heal for half damage dealt in melee combat, but beware—within five feet of garlic, you are struck by its repelling scent, rendering you paralyzed until dawn or removed from the vicinity.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧛",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Bat Flight",
      "Life Drain"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Coffin Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Bat Flight",
        "rules": "As a bonus action, you can transform into a bat and gain the ability to fly at up to 60 feet for 1 hour. This effect ends when you revert back or if you are within five feet of garlic."
      },
      {
        "title": "Life Drain",
        "rules": "When you hit with a melee attack, you heal for half the damage dealt. This effect has no save and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This cape's transformation and healing abilities are too powerful for lower levels; only those of high enough level can wield its full potential.",
    "vendorReason": "The Onyx Hand, known for its dark deals and rare wares, carries this cursed relic due to its unique, nightmarish properties.",
    "shippingDetail": "Delivered via Coffin Express, a service that ensures the package arrives under cover of darkness, avoiding unwanted attention.",
    "usage": {
      "activation": "Bonus action for Bat Flight; Instantaneous for Life Drain on melee hit",
      "duration": "1 hour for Bat Flight; Once per short rest for Life Drain",
      "endsWhen": "Revert to human form or exposure to garlic ends the bat flight; Used once and recharges at dawn",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "This item is balanced with a lower price due to its specific, thematic effects that are not overpowered for an 8th-level character.",
    "priceOriginal": 340000,
    "priceReviewedAt": "2026-07-23T20:04:37.416261+00:00",
    "aiReviewedAt": "2026-07-23T20:04:37.416261+00:00",
    "aiReviewVersion": 1
  },
  "vampiric_blood_crystal": {
    "id": "vampiric_blood_crystal",
    "name": "Vampiric Blood Crystal (Relic)",
    "description": "The Vampiric Blood Crystal (Relic) is a shimmering gem encased in a layer of dark, viscous blood. Crafted by the Night Lords for their eternal war against mortality, it draws upon ancient vampiric lore to grant its wielder eternal youth and power. When activated, it releases a surge of vitality that heals 500 hit points from stored blood essence, restoring not only physical vigor but also enhancing vampiric abilities by 25%.",
    "price": 1000,
    "icon": "🩸",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Blood Essence Healing",
      "Enhanced Vampirism"
    ],
    "vendor": "shadow_coven",
    "shippedBy": "Bat Swarm",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Blood Essence Healing",
        "rules": "Activates as a bonus action. The user regains 500 hit points from stored blood essence. This effect ends if the crystal is destroyed or expended."
      },
      {
        "title": "Enhanced Vampirism",
        "rules": "Passive effect that increases all vampiric abilities by 25%. Ends upon death, destruction of the crystal, or when the user no longer meets the level requirement."
      }
    ],
    "levelRequirementReason": "The Vampiric Blood Crystal's power is too dangerous for those without sufficient control over their vampiric abilities and strength.",
    "vendorReason": "The Night Lords themselves oversee the sale of this relic to ensure it only falls into capable hands.",
    "shippingDetail": "Delivered by a swarm of malevolent bats that enhance the aura of vampiric power during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Crystal destroyed or expended, or upon death of the user",
      "charges": "Unlimited, but limited to once per long rest"
    },
    "priceReason": "Balanced at a reasonable cost for a legendary relic that offers both healing and power enhancement.",
    "priceOriginal": 680000,
    "priceReviewedAt": "2026-07-23T20:04:49.671977+00:00",
    "aiReviewedAt": "2026-07-23T20:04:49.671977+00:00",
    "aiReviewVersion": 1
  },
  "vanish_cap": {
    "id": "vanish_cap",
    "name": "Vanish Cap",
    "description": "The Vanish Cap, a sleek and shimmering blue headpiece crafted from enchanted silk, whispers of arcane secrets in its weave. It grants its wearer temporary invisibility, rendering them unseen by all eyes but leaving their voice and scent intact—a trick often used by diplomats to avoid unwanted attention at political gatherings. Its effects are limited yet profound, making it a valuable asset for those who value subtlety over brute force.",
    "category": "premium",
    "price": 1000,
    "icon": "🧢",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Scent and Sound Unaffected"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Anonymous Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Wear this cap as a bonus action to become invisible until the end of your next turn. You remain unseen by all creatures, but sound and smell are not masked. The invisibility ends if you attack or cast a spell."
      },
      {
        "title": "Scent and Sound Unaffected",
        "rules": "While invisible, your scent and voice are still detectable to creatures with keen senses, such as those with the Track feat or similar abilities."
      }
    ],
    "levelRequirementReason": "This cap is designed for beginners who seek a subtle edge in social settings.",
    "vendorReason": "The Rogueport Black Market often stocks items that are useful but not overtly powerful, making the Vanish Cap an ideal fit.",
    "shippingDetail": "Delivered with discreet handling to ensure the cap arrives in its pristine condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until end of next turn",
      "endsWhen": "Attack or cast a spell",
      "charges": "Unlimited"
    },
    "priceReason": "The cap is priced at 1,000 XP as it provides a useful but not overpowered ability that can be used in social and stealthy situations.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T20:05:34.452536+00:00",
    "aiReviewedAt": "2026-07-23T20:05:34.452536+00:00",
    "aiReviewVersion": 1
  },
  "vial_of_the_first_sigh": {
    "id": "vial_of_the_first_sigh",
    "name": "Vial of the First Sigh",
    "description": "A frosted vial containing a single drop of air that whispers of ancient times. This relic captures the breath from when life first emerged on the world, preserving its memory in glass. Drinking it grants you or another creature 100 temporary hit points and allows you to speak all languages for an hour. After using this vial, you lose your own name for a duration of 1d4 days, during which you cannot cast spells or use class features that require the name.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌬️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Breathe",
      "Speech Mastery"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Glass Sphere",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Breathe",
        "rules": "When consumed, this vial grants the recipient 100 temporary hit points and allows them to speak all languages for one hour. This effect is instantaneous upon consumption."
      },
      {
        "title": "Speech Mastery",
        "rules": "After using this vial, you forget your own name for a duration of 1d4 days. During this time, you cannot cast spells or use class features that require the name to function. This condition lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This vial's power is too great for those below level 15, as it taps into the essence of creation.",
    "vendorReason": "The celestial beings who created this world have entrusted their most sacred relics to this exchange.",
    "shippingDetail": "Ships with special care in a padded, glass-lined container to ensure the vial's integrity during transport.",
    "usage": {
      "activation": "Consumption",
      "duration": "Instantaneous; effect lasts for one hour and until the end of your next long rest",
      "endsWhen": "The effects expire naturally after their durations or when you are incapacitated, die, or take another action on your turn that requires a verbal component.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price to reflect its powerful but not overpowered effects.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-23T20:04:57.477165+00:00",
    "aiReviewedAt": "2026-07-23T20:04:57.477165+00:00",
    "aiReviewVersion": 1
  },
  "virulence_sample_inert": {
    "id": "virulence_sample_inert",
    "name": "Vial of Goo (Inert)",
    "description": "This vial once contained a potent sample of the Virulence virus, now inert but still exuding an unsettling green hue. The faint scent of decay lingers, and even in its current state, it could startle anyone who glimpses it. The Vial of Goo (Inert) is a relic from the early days of bioweapons research, preserved by the Faction Quartermaster as a historical curiosity for those daring enough to handle it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧪",
    "stock": 500,
    "rarity": "junk",
    "effects": [
      "Historical Artifact",
      "Conversational Catalyst"
    ],
    "vendor": "faction_quartermaster",
    "shippedBy": "Biohazard Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cultural Insight",
        "rules": "When a character interacts with someone knowledgeable about bioweapons, they can make an Intelligence (History) check. On a success, the character gains a +2 bonus to this check for the rest of the day."
      },
      {
        "title": "Startling Display",
        "rules": "The Vial of Goo (Inert) is useful as a conversation starter in social gatherings. When displayed, it imposes disadvantage on Charisma checks and saves within 30 feet until someone makes a successful DC 12 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The Vial of Goo (Inert) requires at least level 1 to handle due to its historical significance and potential for shock value.",
    "vendorReason": "The Faction Quartermaster sells this relic as a point of interest for adventurers who seek to understand the darker chapters of their world's history.",
    "shippingDetail": "Ships with biohazard warning labels and requires a special courier permit.",
    "usage": {
      "activation": "Passive effect; does not require activation, but can be used in social situations.",
      "duration": "Instantaneous for the conversation starter effect; lasts until someone successfully saves against it. For cultural insight, duration is until the next long rest.",
      "endsWhen": "The effect ends when a successful saving throw is made or after one day of passive use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Vial's historical value and potential to spark conversations make it worth 1000 XP.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-23T20:05:10.068548+00:00",
    "aiReviewedAt": "2026-07-23T20:05:10.068548+00:00",
    "aiReviewVersion": 1
  },
  "voice_of_the_void": {
    "id": "voice_of_the_void",
    "name": "Voice of the Void",
    "description": "The Voice of the Void is a delicate, bell-shaped artifact crafted from starlight and shadow. When rung, it conjures an impenetrable void that engulfs all within its 60-foot radius, where silence reigns and light fades into darkness. Those caught in its grasp are rendered blind and deaf, their magical abilities curtailed by the void's oppressive presence. A whisper of ancient knowledge echoes through the void: 'You are not real.'",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔔",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Absolute Silence and Darkness",
      "Blindness and Deafness"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Black Bell",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Absolute Silence and Darkness",
        "rules": "Activates on a bonus action. A 60-foot radius around the user becomes an absolute void, negating sound and light. Creatures within this area are blinded and deafened for 1 minute or until they leave the area. This effect has no save DC but can only be used once per short rest."
      },
      {
        "title": "Blindness and Deafness",
        "rules": "Creatures inside the void are also rendered unable to cast spells that require auditory or visual components, including verbal, somatic, and material components. This condition persists until they exit the area or a successful DC 18 Constitution saving throw is made."
      }
    ],
    "levelRequirementReason": "This item requires significant magical power to wield effectively against powerful entities.",
    "vendorReason": "The celestial exchange deals in rare and forbidden artifacts, making the Voice of the Void a natural addition to their inventory.",
    "shippingDetail": "Ships via Black Bell's secret courier network, ensuring the item arrives under complete secrecy.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until the user leaves the area",
      "endsWhen": "The user exits the void's radius or makes a successful save",
      "charges": "Once per short rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rare crafting materials and the immense power it commands.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T20:05:17.983438+00:00",
    "aiReviewedAt": "2026-07-23T20:05:17.983438+00:00",
    "aiReviewVersion": 1
  },
  "void_cult_emptiness_consultation": {
    "id": "void_cult_emptiness_consultation",
    "name": "Void Cult Emptiness Consultation",
    "description": "The Void Cult Emptiness Consultation is a ritualistic service offered by the Void Cult Therapists. For a day, you are stripped of all emotional turmoil and external stimuli. You walk through life feeling nothing, with your senses dulled to the world around you. The DM narrates events without any emotional context, leaving you detached from the chaos of emotions. In return, you receive a free tote bag emblazoned with 'Void Embrace', a token of your journey into the void.",
    "category": "services",
    "price": 1000,
    "icon": "🕳️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Emotionless Experience",
      "Detached Sensory Perception"
    ],
    "vendor": "void_cult",
    "shippedBy": "Abyssal Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Emotionless Experience",
        "rules": "For 24 hours, you gain advantage on saving throws against fear and disadvantage on saving throws against charm effects. The DM narrates events without any emotional context."
      },
      {
        "title": "Detached Sensory Perception",
        "rules": "You are immune to all sensory inputs for the duration of the consultation. You cannot be affected by visual, auditory, or other forms of sensory information."
      }
    ],
    "levelRequirementReason": "Beginners often seek this service to gain a temporary respite from overwhelming emotions.",
    "vendorReason": "The Void Cult Therapists specialize in helping their members find inner peace by detaching them from the world's emotional chaos.",
    "shippingDetail": "Ships via special Abyssal Mail couriers, ensuring swift delivery through dark and dangerous routes.",
    "usage": {
      "activation": "You undergo the consultation as a daily ritual for 24 hours.",
      "duration": "24 hours",
      "endsWhen": "At the end of its duration or if you are affected by an effect that breaks your detachment, such as being charmed or frightened.",
      "charges": "Unlimited"
    },
    "priceReason": "This service offers a unique and powerful emotional barrier for a day without requiring the purchase of physical items.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-23T20:05:10.287561+00:00",
    "aiReviewedAt": "2026-07-23T20:05:10.287561+00:00",
    "aiReviewVersion": 1
  },
  "void_cult_emptiness_consultation_premium": {
    "id": "void_cult_emptiness_consultation_premium",
    "name": "Void Cult Emptiness Consultation (Premium)",
    "description": "The Void Cult Emptiness Consultation (Premium) is a relic forged from the void itself. It grants you a state of unfeeling, where emotions slip away like sand through your fingers. For 24 hours, you are immune to fear and charm effects, and the world around you feels monotonous, described by the DM in a deadpan monotone. Additionally, it bestows upon you a premium tote bag, emblazoned with the Void Cult emblem, making you appear more sinister yet sophisticated.",
    "category": "premium",
    "price": 1000,
    "icon": "🕳️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Emotionless State",
      "Monotone World"
    ],
    "vendor": "void_cult",
    "shippedBy": "Abyssal Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Emotionless State",
        "rules": "You gain advantage on saving throws against fear and charm effects. This lasts for 24 hours. The effect ends if you are subjected to an emotion-based effect or if you take damage."
      },
      {
        "title": "Monotone World",
        "rules": "For the duration, the DM describes all events in a monotone voice as if narrating a void. This continues until the object is destroyed or you gain an emotional stimulus."
      }
    ],
    "levelRequirementReason": "It requires a level 7 character to handle such a potent and destabilizing effect without succumbing entirely.",
    "vendorReason": "The Void Cult is known for its eccentricity and the distribution of odd, yet powerful, relics.",
    "shippingDetail": "Ships via a special void courier service ensuring it arrives intact and unopened.",
    "usage": {
      "activation": "Instantaneous use",
      "duration": "24 hours",
      "endsWhen": "Subjected to an emotion-based effect or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "The item is a rare premium version, balancing its unique abilities and effects with a price that reflects the experience it provides.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-23T20:05:25.401231+00:00",
    "aiReviewedAt": "2026-07-23T20:05:25.401231+00:00",
    "aiReviewVersion": 1
  },
  "void_cult_shadow_cloak_premium": {
    "id": "void_cult_shadow_cloak_premium",
    "name": "Void Cult Shadow Cloak (Premium)",
    "description": "The Void Cult Shadow Cloak (Premium) is a dark cloak woven from shadow threads and imbued with the essence of void magic. It whispers softly, its fabric shimmering in the dim light of shadows, making the wearer nearly invisible to all eyes. Crafted by the secretive Cult Weavers, it grants the user an unparalleled advantage in stealth and protection against the necrotic. The cloak's whispers are not mere sounds but subtle temptations that can lead to unforeseen consequences.",
    "price": 1000,
    "icon": "🕶️",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Cloak",
      "Necrotic Resistance"
    ],
    "vendor": "void_cult_temple",
    "shippedBy": "Dark Fold",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Cloak",
        "rules": "Activates as a bonus action, granting the wearer advantage on Dexterity (Stealth) checks made to hide in shadowy conditions. The effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Necrotic Resistance",
        "rules": "Provides resistance to necrotic damage. This effect is active while wearing the cloak, providing a +2 bonus to saving throws against necrotic effects."
      }
    ],
    "levelRequirementReason": "The complex magic woven into the cloak requires a minimum of third-level spellcasting ability.",
    "vendorReason": "As suppliers for the cult's rituals, they are well-versed in crafting and distributing such powerful, themed items.",
    "shippingDetail": "Delivered by Dark Fold, with a 1-day delay due to the cloak's sensitive nature.",
    "usage": {
      "activation": "Bonus action to activate; lasts for 1 minute or until the wearer no longer has cover or concealment.",
      "duration": "1 minute",
      "endsWhen": "The wearer no longer has cover or concealment, or when a long rest is taken.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced for its unique combination of stealth and resistance effects, providing significant utility without overpowered capabilities.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T20:05:26.538571+00:00",
    "aiReviewedAt": "2026-07-23T20:05:26.538571+00:00",
    "aiReviewVersion": 1
  },
  "void_cult_shadow_essence_gelatin_recipe": {
    "id": "void_cult_shadow_essence_gelatin_recipe",
    "name": "Recipe: Void Cult Shadow Essence Gelatin",
    "description": "This translucent gelatin is a dark secret of the Void Cult. When consumed, it warps your senses, granting you advantage on saving throws against light effects for two hours and allowing you to step into shadows as if under minor shadow step. The recipe was crafted by the Void Chefs in their temple, where whispers of the void linger. It is a rare treat that only those initiated into the cult's secrets can obtain.",
    "price": 1000,
    "icon": "🍮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Advantage on Saves vs. Light",
      "Minor Shadow Step"
    ],
    "vendor": "void_cult_temple",
    "shippedBy": "Dark Dessert Dispatch",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Saves vs. Light",
        "rules": "When consumed, you gain advantage on saving throws against effects that would dim or eliminate light for two hours."
      },
      {
        "title": "Minor Shadow Step",
        "rules": "For the next hour after consuming this gelatin, you can step into shadowy areas as if under the effect of a minor shadow step spell. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "The recipe requires knowledge and understanding of the void's secrets, which are typically only imparted to initiates.",
    "vendorReason": "Only the Void Cult Temple can provide such a dark and rare treat, as it is a product of their forbidden practices.",
    "shippingDetail": "The gelatin must be shipped in special shadow-coated containers to preserve its properties. It takes an additional day for delivery due to the specialized packaging.",
    "usage": {
      "activation": "Eating the gelatin",
      "duration": "Two hours and one hour respectively, with a short rest required between uses of Minor Shadow Step",
      "endsWhen": "The effects expire naturally",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and the special conditions for obtaining this gelatin justify its moderate price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T20:05:31.902278+00:00",
    "aiReviewedAt": "2026-07-23T20:05:31.902278+00:00",
    "aiReviewVersion": 1
  },
  "void_cult_shadow_steam_basket": {
    "id": "void_cult_shadow_steam_basket",
    "name": "Void Cult Shadow Steam Basket",
    "description": "The Void Cult Shadow Steam Basket, a wickerwork creation from the shadowy depths of the cult's forges, whispers secrets in darkness. When activated, it fills the immediate area with an eerie mist that grants +1 to all shadow-themed spell and poison checks. The basket also blends seamlessly into its surroundings when exposed to light, becoming nearly invisible to those not attuned to shadows. Crafted by the Cult Weavers, this item is a testament to the darkness's mastery over reality.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Steams in Dark",
      "Blend with Shadows"
    ],
    "vendor": "void_cult_temple",
    "shippedBy": "Dark Damp Dish",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Steams in Dark",
        "rules": "When activated as an action, the basket fills a 10-foot cube within reach with a shadowy mist for 1 minute. This mist provides advantage on all checks related to shadows or darkness. The mist dissipates when exposed to light of any brightness."
      },
      {
        "title": "Blend with Shadows",
        "rules": "The basket becomes invisible when exposed to light, blending into the surroundings as if it were a shadowy object. This effect lasts for 1 hour and can be activated once per long rest."
      }
    ],
    "levelRequirementReason": "Crafted by the Cult Weavers, this item requires a minimum of 3rd level to ensure the wielder has enough control over shadow magic.",
    "vendorReason": "The Void Cult Shadow Steam Basket is an intrinsic part of their rituals and thus sold exclusively at their temple.",
    "shippingDetail": "Ships via Dark Damp Dish, known for its reliable delivery through shadowy paths.",
    "usage": {
      "activation": "Action or Reaction (to activate mist)",
      "duration": "1 minute when activating mist; 1 hour for blending effect",
      "endsWhen": "Exposure to light or end of duration",
      "charges": "Once per long rest"
    },
    "priceReason": "Balanced at 1000 XP, considering its unique shadow manipulation and limited but potent effects.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-23T20:05:55.040919+00:00",
    "aiReviewedAt": "2026-07-23T20:05:55.040919+00:00",
    "aiReviewVersion": 1
  },
  "void_cult_shadow_weave_robe": {
    "id": "void_cult_shadow_weave_robe",
    "name": "Void Cult Shadow Weave Robe",
    "description": "The Void Cult Shadow Weave Robe is a dark, shimmering robe that seems to merge with the shadows around you. Crafted by the secretive Cult Shadowsmiths, its fabric extends darkness within a 5-foot radius of the wearer, making it nearly impossible for enemies in shadowy areas to spot them. The robe also grants advantage on Stealth checks when hidden among shades and fades into bright light, leaving you exposed.",
    "price": 1000,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Stealth",
      "Shadow Aura"
    ],
    "vendor": "void_cult_sanctum",
    "shippedBy": "Dark Drape Couriers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Stealth",
        "rules": "When the robe is worn in a shadowy environment, the wearer gains advantage on Dexterity (Stealth) checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Shadow Aura",
        "rules": "The robe extends darkness within a 5-foot radius around you for 1 minute when activated as an action. After this duration, or if the wearer steps into bright light, the effect ends immediately."
      }
    ],
    "levelRequirementReason": "Crafted by secretive cultists and requiring dark rituals, only those of at least sixth level can wield its power.",
    "vendorReason": "The Void Cult Shadow Weave Robe is a product of the cult's forbidden crafting arts, available exclusively from their sanctums.",
    "shippingDetail": "Ships via Dark Drape Couriers, ensuring secrecy and safe delivery through shadowy routes.",
    "usage": {
      "activation": "Action to activate the Shadow Aura effect; lasts for 1 minute.",
      "duration": "1 minute or until you leave a shadowed area",
      "endsWhen": "Ends when you step into bright light or the duration expires",
      "charges": "Unlimited uses, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and unique crafting process.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-23T20:05:55.292568+00:00",
    "aiReviewedAt": "2026-07-23T20:05:55.292568+00:00",
    "aiReviewVersion": 1
  },
  "void_drifter_stabilizer": {
    "id": "void_drifter_stabilizer",
    "name": "Void Drifter Stabilizer",
    "description": "The Void Drifter Stabilizer is a sleek, metallic device that hums with an eerie, otherworldly frequency. Crafted from rare, fractured voidstone, it anchors you to reality amidst the cosmic chaos. When activated, it emits a soft glow, and you feel a tangible connection to your surroundings, resisting the allure of madness. The stabilizer also subtly warps space around you, creating an unsettling hum that others cannot hear, making you appear more grounded in any ethereal environment.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2 to saving throws against Banishment, Teleportation, and Void magic",
      "Emits an unheard, destabilizing hum when held"
    ],
    "vendor": "void_drifters",
    "shippedBy": "Gravity-Sealed Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Resistance",
        "rules": "Activates as a bonus action. While holding the stabilizer, you gain +2 to saving throws against Banishment, Teleportation, and any spell or effect with the Void descriptor. This effect lasts until the end of your next turn."
      },
      {
        "title": "Unheard Hum",
        "rules": "Passive effect while held. Others within 10 feet cannot hear you, making you less noticeable in ethereal environments. This effect does not grant invisibility or silence but makes it harder for creatures to track you by sound alone."
      }
    ],
    "levelRequirementReason": "This stabilizer is designed for adventurers of all levels who need quick and reliable protection against the whims of the cosmos.",
    "vendorReason": "Void Drifters are experts in crafting devices that combat the forces of madness, making them the ideal source for this stabilizer.",
    "shippingDetail": "Ships via a sealed gravity box to ensure safe delivery through even the most unstable cosmic conditions.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you drop or lose control of the stabilizer, or if it is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This stabilizer provides critical protection against cosmic threats at a fair price, making it accessible to adventurers of all levels.",
    "priceOriginal": 42000,
    "priceReviewedAt": "2026-07-23T20:06:43.833411+00:00",
    "aiReviewedAt": "2026-07-23T20:06:43.833411+00:00",
    "aiReviewVersion": 1
  },
  "void_drifters_cosmic_void_robe": {
    "id": "void_drifters_cosmic_void_robe",
    "name": "Void Drifters Cosmic Void Robe",
    "description": "The Void Drifters Cosmic Void Robe is a cloak woven from the fabric of interdimensional voids. Its swirling patterns shift with the stars, offering a stark contrast to the darkness it absorbs. The robe grants its wearer advantage on saving throws against effects that deal damage from shadow or darkness and provides night vision within 60 feet for up to an hour per day. However, those who wear it too long may find whispers of madness in the voids' echoes.",
    "price": 1000,
    "icon": "👘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on saves vs. shadow & darkness",
      "Night vision within 60 ft."
    ],
    "vendor": "void_drifters_voidship",
    "shippedBy": "Null Space Weave",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Shadow Resistance",
        "rules": "The wearer gains advantage on saving throws against effects that deal damage from shadow or darkness for 1 hour. This effect can be used once per long rest."
      },
      {
        "title": "Night Vision",
        "rules": "The robe provides night vision within 60 feet for up to an hour, at which point the wearer must succeed on a DC 15 Wisdom saving throw or risk becoming mildly insane (disadvantage on all Charisma checks and saving throws until a short rest is taken)."
      }
    ],
    "levelRequirementReason": "The robe's complex weave requires a level of understanding beyond lower-level characters.",
    "vendorReason": "Void Drifters are experts in crafting garments that interact with the fabric of reality, making their Cosmic Void Robes a natural addition to their offerings.",
    "shippingDetail": "The robe requires special handling and is delivered via interdimensional courier to ensure its delicate threads remain intact during transit.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "1 hour per day, once per long rest",
      "endsWhen": "The effect ends when the wearer no longer needs it or upon a failed saving throw due to madness risk",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point, as its unique abilities and rarity justify a moderate cost.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T20:05:48.749498+00:00",
    "aiReviewedAt": "2026-07-23T20:05:48.749498+00:00",
    "aiReviewVersion": 1
  },
  "void_drifters_existential_dread_removal": {
    "id": "void_drifters_existential_dread_removal",
    "name": "Void Drifters Existential Dread Removal",
    "description": "The Void Drifters Existential Dread Removal is a small, intricately carved pendant made from the bones of forgotten philosophers. When worn, it grants the wearer an unshakable calm amidst life’s uncertainties. For seven days, you are immune to fear and anxiety, but your interactions become so delightfully optimistic that they risk boring even the most engaged partygoers. Though the pendant is a Void Drifter's creation, its effects are as unpredictable as the void itself.",
    "category": "services",
    "price": 1000,
    "icon": "🌀",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Immune to fear and anxiety for 7 days",
      "Optimistic to the point of being slightly boring"
    ],
    "vendor": "void_drifters",
    "shippedBy": "Nihilistic Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear and Anxiety",
        "rules": "The wearer is immune to any effect that would impose the frightened or charmed condition, including spells and other magical effects. This immunity lasts for 7 days from when the item is first worn."
      },
      {
        "title": "Optimism",
        "rules": "For the duration of wearing the pendant, the wearer's demeanor becomes so optimistic that they provide a +2 bonus to Insight checks made to discern the truth or detect lies. However, this also imposes disadvantage on Charisma (Deception) and Charisma (Performance) checks."
      }
    ],
    "levelRequirementReason": "The removal of existential dread is a subtle effect that can be appreciated by adventurers of all levels.",
    "vendorReason": "Void Drifters Therapy specializes in mental well-being and the Void Drifters Existential Dread Removal is one of their most popular items.",
    "shippingDetail": "Ships via Nihilistic Courier, known for its timely deliveries. The pendant arrives sealed within a mystic void bubble to preserve its potency.",
    "usage": {
      "activation": "Passive effect upon wearing the pendant",
      "duration": "7 days from the first activation",
      "endsWhen": "The duration ends after 7 days or when removed",
      "charges": "Unlimited uses"
    },
    "priceReason": "While the item is uncommon, its effects are subtle and balanced to ensure it remains a valuable but not overpowered addition to any adventurer's gear.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-23T20:06:45.928259+00:00",
    "aiReviewedAt": "2026-07-23T20:06:45.928259+00:00",
    "aiReviewVersion": 1
  },
  "void_drifters_portal_compass": {
    "id": "void_drifters_portal_compass",
    "name": "Void Drifters' Portal Compass",
    "description": "The Void Drifters' Portal Compass is a weathered brass compass with an etched map of shifting rifts. It always points toward the nearest planar disturbance, whether it be a wanted portal or one that has been sealed shut for millennia. Its needle spins erratically when not in use, whispering cryptic phrases in forgotten tongues. Once per week, its wielder can force a nearby planar rift to remain open an additional minute, allowing passage through the breach.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Planar Distress Detector",
      "Force Open Rift"
    ],
    "vendor": "void_drifters_surplus",
    "shippedBy": "Non-Euclidean Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Planar Distress Detector",
        "rules": "Passive effect; always points toward a planar rift within 1 mile, not revealing the rift's destination. Requires line of sight to detect rifts."
      },
      {
        "title": "Force Open Rift",
        "rules": "Activates on command once per week; causes a nearby planar rift to remain open for an additional minute. The compass must be within 10 feet of the rift and can't have been used in the last 7 days."
      }
    ],
    "levelRequirementReason": "The compass requires a user with some experience to navigate its unpredictable nature.",
    "vendorReason": "Void Drifters Surplus regularly stocks relics from their expeditions into the plane-riddled territories.",
    "shippingDetail": "Delivered through extradimensional means, ensuring swift arrival even to distant realms.",
    "usage": {
      "activation": "Command word",
      "duration": "1 minute (plus additional minute when used)",
      "endsWhen": "The rift closes naturally or if the compass is destroyed",
      "charges": "Once per week"
    },
    "priceReason": "Balanced at half-price due to its limited use and passive functionality.",
    "priceOriginal": 23500,
    "priceReviewedAt": "2026-07-23T20:06:10.662063+00:00",
    "aiReviewedAt": "2026-07-23T20:06:10.662063+00:00",
    "aiReviewVersion": 1
  },
  "void_drifters_star_dust_snacks_recipe": {
    "id": "void_drifters_star_dust_snacks_recipe",
    "name": "Recipe: Void Drifters Star Dust Snacks",
    "description": "These crispy snacks are dusted with a shimmering cosmic powder that twinkles in the dim light of space. Crafted by Void Drifters, these star-dusted treats are more than just food; they whisper secrets of distant stars and enhance one's navigation skills in the void. When eaten, you gain advantage on Navigation checks in void or space for four hours, making it easier to chart your course through the cosmos.",
    "price": 1000,
    "icon": "⭐",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Cosmic Advantage",
      "Void Whispers"
    ],
    "vendor": "void_drifters_ship",
    "shippedBy": "Cosmic Crunch Codex",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Cosmic Advantage",
        "rules": "When you eat a serving of Void Drifter's Star Dust Snacks, you gain advantage on Navigation checks in void or space for four hours. This effect ends when the duration expires."
      },
      {
        "title": "Void Whispers",
        "rules": "As an action, you can use your connection to these snacks to receive a brief insight into the local cosmic environment. You must make a successful Intelligence (Arcana) check with a DC of 13 to understand and act on the information received."
      }
    ],
    "levelRequirementReason": "This recipe is complex and requires a certain level of expertise in navigating the void.",
    "vendorReason": "Void Drifters are renowned for their knowledge of cosmic navigation, making these snacks a natural addition to their offerings.",
    "shippingDetail": "Ships via the Swift Star Lane express courier service, ensuring freshness and delivery within one week.",
    "usage": {
      "activation": "Eating one serving as an action or using Void Whispers as a bonus action.",
      "duration": "Four hours for Cosmic Advantage; instantaneous for Void Whispers.",
      "endsWhen": "Duration ends when it expires or you use another similar effect.",
      "charges": "Unlimited, but each snack serving can only be used once."
    },
    "priceReason": "The rarity and unique cosmic properties of these snacks justify their higher price point.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:06:12.298605+00:00",
    "aiReviewedAt": "2026-07-23T20:06:12.298605+00:00",
    "aiReviewVersion": 1
  },
  "void_drifters_star_map_update_service": {
    "id": "void_drifters_star_map_update_service",
    "name": "Void Drifters Star Map Update Service",
    "description": "The Void Drifters Star Map Update Service is a meticulously crafted celestial chart that syncs with the void's shifting stars, granting you unparalleled cosmic navigation prowess. This map whispers the coordinates of one safe haven and grants advantage on Survival checks in space for an entire week. The map itself hums with the energy of ancient drifters, their knowledge etched into its very fibers. Crafted by Drifter Cartographers, this service ensures your journey through the void is both secure and efficient.",
    "price": 1000,
    "icon": "🗺️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Survival Checks",
      "Safe Haven Coordinates"
    ],
    "vendor": "void_drifters_ship",
    "shippedBy": "Holo-Map Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Survival Checks",
        "rules": "When you are in space or the void, you gain advantage on all Survival checks for one week after purchasing this service. This effect is instantaneous upon activation and lasts until the duration ends."
      },
      {
        "title": "Safe Haven Coordinates",
        "rules": "Upon completion of the service, you receive coordinates to a safe haven that can be reached within 24 hours of your location. The map must be in your possession for this effect to take place; once used, it cannot be reused."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers who require reliable navigation through the void.",
    "vendorReason": "Void Drifters Ship specializes in cosmic navigation and offers this service as part of its comprehensive star map offerings.",
    "shippingDetail": "The map is delivered with a holographic projection that ensures accurate coordinates are provided upon receipt.",
    "usage": {
      "activation": "Instantaneous, requires the map to be in your possession.",
      "duration": "One week from activation.",
      "endsWhen": "The duration expires after one week or when the effect is no longer needed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This service offers a reliable and essential tool for adventurers, making it worth 1000 XP.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-23T20:06:34.795885+00:00",
    "aiReviewedAt": "2026-07-23T20:06:34.795885+00:00",
    "aiReviewVersion": 1
  },
  "void_drifters_wayfinder": {
    "id": "void_drifters_wayfinder",
    "name": "Void Drifter's Wayfinder",
    "description": "The Void Drifter's Wayfinder is a cryptic, non-Euclidean compass made of polished obsidian and etched with ancient runes that shimmer like starlight. It points not to north but towards the nearest planar rift or portal, guiding its bearer through strange dimensions. Its constant whispers in an unknown tongue carry secrets from realms beyond time. Once per week, it can create a tiny, temporary rift to the Ethereal Plane, allowing passage into otherworldly spaces for exactly one minute.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Planar Compass",
      "Rift Creation"
    ],
    "vendor": "Void Drifters",
    "shippedBy": "Phase-Shifted Package",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Planar Compass",
        "rules": "The Wayfinder always points towards the nearest planar portal or rift within a 100-mile radius. It does not require any action to function and is always active."
      },
      {
        "title": "Rift Creation",
        "rules": "Once per week, the bearer can activate the Wayfinder to create a tiny rift to the Ethereal Plane that lasts for 1 minute. The rift has a 5-foot radius. Any creature within this area must succeed on a DC 14 Dexterity saving throw or be pulled into the Ethereal Plane until the rift closes."
      }
    ],
    "levelRequirementReason": "This item requires significant magical power and knowledge of the planes to wield it effectively.",
    "vendorReason": "The Void Drifters specialize in items that traverse otherworldly realms, making this compass a natural addition to their inventory.",
    "shippingDetail": "Special handling required for the sensitive nature of the item. Shipment can take up to three additional days due to the delicate magical properties of the Wayfinder.",
    "usage": {
      "activation": "Reaction (once per week)",
      "duration": "Instantaneous, with a 1-minute duration for the rift creation effect",
      "endsWhen": "The rift closes naturally after one minute or when destroyed by an opposing force.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This balanced price reflects its rarity and utility, offering a significant but fair advantage to players.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-23T20:06:38.837043+00:00",
    "aiReviewedAt": "2026-07-23T20:06:38.837043+00:00",
    "aiReviewVersion": 1
  },
  "void_drifters_zero_g_stirrer": {
    "id": "void_drifters_zero_g_stirrer",
    "name": "Void Drifters Zero-G Stirrer",
    "description": "The Void Drifters Zero-G Stirrer is a compact, magnetically powered device designed to stir ingredients in zero-gravity environments aboard starships. Crafted from lightweight, corrosion-resistant alloy and adorned with Drifter Techs' signature star insignia, it ensures that even the most delicate snack mix remains perfectly stirred without succumbing to the whims of space's lack of gravity. This versatile tool not only aids in culinary endeavors but also acts as a minor navigation aid, aligning nearby metal utensils for precise alignment and retrieval.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stirs ingredients effortlessly in zero-gravity",
      "Aligns nearby metal objects for precision"
    ],
    "vendor": "void_drifters_ship",
    "shippedBy": "Null Stir Null",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity-Defying Stirring",
        "rules": "When activated as a bonus action, the Zero-G Stirrer allows you to stir ingredients without concern for gravity. This effect lasts until the start of your next turn and does not expend charges."
      },
      {
        "title": "Metal Alignment",
        "rules": "As a reaction when you or another creature within 5 feet attempts to retrieve a metal object from nearby, you can align it with precision using the device. The target must make a DC 12 Dexterity saving throw; on a failure, the object is aligned correctly."
      }
    ],
    "levelRequirementReason": "This tool is designed for ease of use by all travelers aboard starships.",
    "vendorReason": "Void Drifters specializes in tools that enhance the daily lives of spacefarers, ensuring even the most mundane tasks are accomplished with efficiency and flair.",
    "shippingDetail": "Ships directly from the Void Drifters shipyard; expedited delivery for urgent orders.",
    "usage": {
      "activation": "Bonus action to activate stirring, reaction to align metal objects",
      "duration": "Until start of next turn (stirring), Instantaneous (alignment)",
      "endsWhen": "Ends at the start of your next turn or when the reaction is used again",
      "charges": "Unlimited; no charges"
    },
    "priceReason": "Balanced price reflects the tool's utility for both culinary and navigation tasks without overpricing.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:07:03.836140+00:00",
    "aiReviewedAt": "2026-07-23T20:07:03.836140+00:00",
    "aiReviewVersion": 1
  },
  "void_energy_siphon": {
    "id": "void_energy_siphon",
    "name": "Void Energy Siphon (Weapon Mod)",
    "description": "The Void Energy Siphon is a weapon mod crafted by the enigmatic Void Engineers, forged from the very fabric of the void itself. Its sleek, darkened metal gleams with an eerie luminescence that shifts between shades of violet and black, pulsing with latent void energy. This mod channels raw void power to deliver devastating blasts capable of tearing through even the strongest defenses, but it also carries a dark risk: prolonged use can corrupt the wielder's soul, drawing them deeper into the void’s endless embrace.",
    "price": 1000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Void Damage Dealmaster",
      "Risk of Void Corruption"
    ],
    "vendor": "abyss_tech",
    "shippedBy": "Null Space Express",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Void Damage Dealmaster",
        "rules": "The user deals 10d10 points of void damage with each blast. This effect is limited to three uses per long rest."
      },
      {
        "title": "Risk of Void Corruption",
        "rules": "There is a 25% chance that the wielder will suffer from void corruption after using this mod three times within a single day. The corruption imposes the charmed condition on the user until they complete a short or long rest."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of the void and its dark magic can wield such power responsibly.",
    "vendorReason": "Abyss Tech is known for their expertise in crafting items that harness the raw power of the void, making them the ideal vendor for this mod.",
    "shippingDetail": "Due to its unstable nature, the Void Energy Siphon requires special handling and arrives with a cold pack to maintain its integrity during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The mod is removed or destroyed.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "While not as powerful as a godly rarity item, the Void Energy Siphon's unique and dangerous nature justifies its cost.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-23T20:07:06.306956+00:00",
    "aiReviewedAt": "2026-07-23T20:07:06.306956+00:00",
    "aiReviewVersion": 1
  },
  "void_entities_null_nutrient_nutrient_extractor": {
    "id": "void_entities_null_nutrient_extractor",
    "name": "Void Entities Null Nutrient Extractor",
    "description": "The Void Entities Null Nutrient Extractor is a sleek, dark device that hums with an otherworldly energy. Crafted by the enigmatic Entity Extractors from the Realm of Void Jello, this contraption can extract null essences from void jello, enhancing your cooking prowess in the process. It casts a dim light around you as it operates, making it a perfect companion for chefs venturing into the dark corners of culinary alchemy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Extracts Null Essences",
      "Dim Light Aura"
    ],
    "vendor": "void_entities_realm",
    "shippedBy": "Null Nutrient Null Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Extracts Null Essences",
        "rules": "As an action, activate this device to extract a null essence from void jello. This essence can be used in cooking recipes that require a rare ingredient. The effect is instantaneous and requires no save. Once used, the extractor's charge is depleted."
      },
      {
        "title": "Dim Light Aura",
        "rules": "While extracting null essences, this device creates a dim light around you, effectively reducing bright lighting to dim in a 10-foot radius for 1 minute. The light does not affect creatures that are immune to darkness effects and has no effect on darkvision."
      }
    ],
    "levelRequirementReason": "Requires at least second-level spellcasting proficiency to properly operate the device.",
    "vendorReason": "Void Entities Realm is known for its expertise in crafting devices that interact with void jello and its derivatives.",
    "shippingDetail": "Ships via Null Nutrient Null Express, ensuring the device arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for essence extraction; 1 minute for dim light aura",
      "endsWhen": "Exhausted of charges or if not recharged by void jello within a week",
      "charges": "Single charge, recharges after being exposed to void jello"
    },
    "priceReason": "The device is priced at 1000 XP as it requires rare materials and advanced craftsmanship.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:07:10.923882+00:00",
    "aiReviewedAt": "2026-07-23T20:07:10.923882+00:00",
    "aiReviewVersion": 1
  },
  "void_entities_void_essence_jello_recipe": {
    "id": "void_entities_void_essence_jello_recipe",
    "name": "Recipe: Void Entities Void Essence Jello",
    "description": "This wobbly jello, crafted from ethereal Void Entities' essence, is a dessert that defies both time and space. Bite into it and you'll feel the void's chill as minor teleportation grants you fleeting freedom for 5 feet; each serving also bestows resistance to the arcane powers of the Void. The recipe, jealously guarded by Void Cooks in the realm of Nullspace, is a rare treat that only the most daring adventurers can afford.",
    "price": 1000,
    "icon": "🍮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Minor Teleport",
      "Resistance to Arcane"
    ],
    "vendor": "void_entities_realm",
    "shippedBy": "Null Nibble Notes",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Minor Teleport",
        "rules": "As a bonus action, you may teleport up to 5 feet in any direction. This effect lasts for the duration of one turn and can be used once per short or long rest."
      },
      {
        "title": "Resistance to Arcane",
        "rules": "You gain resistance to all damage from spells and abilities with the arcane descriptor until your next long rest. This effect does not stack with other sources of resistance."
      }
    ],
    "levelRequirementReason": "Only those who have proven their mettle at least seven levels deep can afford the luxury of this dessert, as it is a rare treat from the realm of Nullspace.",
    "vendorReason": "Void Cooks are the only ones with access to Void Entities' essence and the secrets needed to craft such a delicacy.",
    "shippingDetail": "The jello is shipped in special, insulated containers to maintain its wobbly texture during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "One turn or until your next long rest",
      "endsWhen": "After one use per short or long rest; rechargeable after a long rest",
      "charges": "Unlimited, recharges at dawn of the following day"
    },
    "priceReason": "The recipe's rarity and the exotic nature of its ingredients make it an expensive treat worth every XP.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T20:07:13.309307+00:00",
    "aiReviewedAt": "2026-07-23T20:07:13.309307+00:00",
    "aiReviewVersion": 1
  },
  "void_entities_void_shroud": {
    "id": "void_entities_void_shroud",
    "name": "Void Entities Void Shroud",
    "description": "The Void Entities Void Shroud is a shimmering, onyx-black cloak that warps light around its wearer, casting an ethereal glow. It whispers unsettling secrets to those who come too close, and its fabric subtly distorts reality, making the wearer seem slightly less substantial. Crafted by the enigmatic Void Weavers, this shroud grants advantage on saving throws against detection magic while also hiding minor void anomalies—pocket spaces that open and close with a whisper of cosmic energy.",
    "price": 1000,
    "icon": "🧣",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Advantage on Saves vs. Detection",
      "Minor Voids Hiding"
    ],
    "vendor": "void_entities_rift",
    "shippedBy": "Null Night Courier Service",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Advantage on Saves vs. Detection",
        "rules": "When subjected to detection magic, the wearer gains advantage on saving throws. This effect persists for 1 hour upon activation."
      },
      {
        "title": "Minor Voids Hiding",
        "rules": "The shroud creates pocket spaces that can hide small objects or creatures for up to 10 minutes before dissipating into a ripple of dark energy. Once per short rest, the wearer may activate this effect by whispering 'Void Hide'."
      }
    ],
    "levelRequirementReason": "The Void Shroud's arcane complexity and the Void Weavers' crafting magic necessitate at least level 7 to wield it effectively.",
    "vendorReason": "Void Entities Rift specializes in items crafted by the enigmatic Void Weavers, making this shroud a fitting addition to their inventory.",
    "shippingDetail": "Ships via Null Night's interdimensional express service, ensuring swift delivery through the fabric of reality.",
    "usage": {
      "activation": "Reaction or bonus action (whispering 'Void Hide' for Minor Voids Hiding)",
      "duration": "1 hour for Advantage on Saves vs. Detection; 10 minutes for Minor Voids Hiding",
      "endsWhen": "The effect ends upon completion of its duration or when the wearer is no longer under detection magic.",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Void Shroud's rarity and the arcane complexity involved in its creation justify this price point.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-23T20:07:34.108755+00:00",
    "aiReviewedAt": "2026-07-23T20:07:34.108755+00:00",
    "aiReviewVersion": 1
  },
  "void_entities_whisper_earpiece_premium": {
    "id": "void_entities_whisper_earpiece_premium",
    "name": "Void Entities Whisper Earpiece (Premium)",
    "description": "Void Entities Whisper Earpiece (Premium) is a sleek, ear-shaped device made of dark obsidian and silver. Crafted by Void Listeners from the whispers of forgotten void entities, it allows you to hear unheard secrets and perceive hidden doors within a radius of 30 feet. Each day, you can activate its power to detect these concealed passages. The earpiece also transmits subtle hints that could guide your path, but be wary; prolonged use risks driving you mad unless you make a Wisdom saving throw (DC 12).",
    "price": 2250,
    "icon": "👂",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Earpiece: Detect Hidden Doors",
      "Whispers of Guidance"
    ],
    "vendor": "void_entities_realm",
    "shippedBy": "Echo Chamber",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Earpiece: Detect Hidden Doors",
        "rules": "You can use an action to activate this feature, causing the earpiece to emit a low hum that allows you to perceive hidden doors within a 30-foot radius. This effect lasts for 1 minute and requires no concentration."
      },
      {
        "title": "Whispers of Guidance",
        "rules": "You can use an action to activate this feature, which provides you with subtle hints about the immediate area, aiding in decision-making or problem-solving. However, overuse increases the risk of madness; after 3 days of continuous use, make a Wisdom saving throw (DC 12) or suffer the effects of the mad impulse condition until you rest."
      }
    ],
    "levelRequirementReason": "The earpiece's complexity and the risk it poses to mental stability necessitate a minimum level.",
    "vendorReason": "Void Listeners are experts in harnessing void entities, making them the trusted source for such devices.",
    "shippingDetail": "Ships via Echo Chamber's secure courier network; delivery can take up to a week due to its importance and the need for secrecy.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Earpiece), 1 minute (Detect Hidden Doors)",
      "endsWhen": "Ends when you finish a short rest, are incapacitated, or when your use limit is reached",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This premium version of the earpiece offers enhanced functionality and durability, justifying its higher price.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-23T20:07:22.580976+00:00",
    "aiReviewedAt": "2026-07-23T20:07:22.580976+00:00",
    "aiReviewVersion": 1
  },
  "void_entities_whispering_orb": {
    "id": "void_entities_whispering_orb",
    "name": "Void Entity's Whispering Orb",
    "description": "The Void Entity's Whispering Orb is a sphere of pure blackness, its surface etched with ancient runes that hum with malevolent intent. It whispers secrets from realms beyond, but the knowledge it imparts comes at a terrible price: one level of exhaustion after each use. While carrying this orb, you gain resistance to Psychic damage, yet your mind grows ever more unstable; each long rest brings a DC 15 Wisdom saving throw or risk gaining short-term madness. The orb itself seems to hunger for secrets and will not be silent until it has fed.",
    "category": "forbidden",
    "price": 1000,
    "icon": "⚫",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Whispering Secrets",
      "Resistance to Psychic Damage"
    ],
    "vendor": "Void Entities",
    "shippedBy": "A mysterious courier who appears at your doorstep with no explanation.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Secrets",
        "rules": "You may ask one question per week, after which you gain one level of exhaustion. The DM will answer truthfully, but the knowledge gained is both enlightening and dangerous."
      },
      {
        "title": "Resistance to Psychic Damage",
        "rules": "While carrying this orb, you have resistance to Psychic damage. However, each long rest requires a DC 15 Wisdom saving throw; on failure, you gain short-term madness until the next dawn."
      }
    ],
    "levelRequirementReason": "The item's malevolent nature and the risk of mental instability necessitate a level requirement.",
    "vendorReason": "Void Entities are known for their dark artifacts that manipulate reality and knowledge, making them the purveyors of such an item.",
    "shippingDetail": "The orb arrives wrapped in darkness; it is said to be delivered by shadows themselves.",
    "usage": {
      "activation": "Ask a question once per week. The DM answers truthfully, but you gain one level of exhaustion.",
      "duration": "Instantaneous",
      "endsWhen": "Exhaustion ends after resting for eight hours and gaining a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique properties, risk of mental instability, and weekly use limit justify its relatively lower price.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T20:07:37.879000+00:00",
    "aiReviewedAt": "2026-07-23T20:07:37.879000+00:00",
    "aiReviewVersion": 1
  },
  "void_walker_boots": {
    "id": "void_walker_boots",
    "name": "Void Walker Boots (Mobility)",
    "description": "The Void Walker Boots are crafted from the very fabric of forgotten voids, their soles etched with runes that shimmer like starlight in darkness. These boots allow you to step through the void, teleporting silently and instantly up to 100 feet three times a day. They whisper secrets of ancient travelers who once walked these paths, and their silent movement in shadow makes you an elusive target for those who would hunt you down.",
    "price": 1000,
    "icon": "👢",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Teleportation",
      "Silent Movement"
    ],
    "vendor": "shadow_step",
    "shippedBy": "Null Step Express",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Void Teleport",
        "rules": "As a bonus action, the wearer can teleport up to 100 feet to an unoccupied space they can see. This effect can be used three times per short or long rest."
      },
      {
        "title": "Silent Step",
        "rules": "The boots allow the wearer to move silently in complete darkness without making noise, and grant advantage on Dexterity (Stealth) checks made under such conditions."
      }
    ],
    "levelRequirementReason": "Only those of great experience and power can wield these boots, as they require a level 17 character to manage their ancient magic.",
    "vendorReason": "The Shadow Step vendor is known for dealing in the most dangerous and rarest items found across the realms, making them the perfect source for Void Walker Boots.",
    "shippingDetail": "Due to their ethereal nature, these boots are shipped via Null Step Express, a courier service that ensures packages arrive through voids rather than mundane means.",
    "usage": {
      "activation": "Bonus action for teleportation; passive for silent movement.",
      "duration": "Instantaneous (teleport); lasts until the start of your next turn (silent step).",
      "endsWhen": "Used up all charges or at the end of a short or long rest.",
      "charges": "Three uses per day, recharging after a short or long rest."
    },
    "priceReason": "The boots are priced at 1000 XP due to their legendary rarity and the high demand among adventurers seeking to traverse voids safely and silently.",
    "priceOriginal": 690000,
    "priceReviewedAt": "2026-07-23T20:07:41.829377+00:00",
    "aiReviewedAt": "2026-07-23T20:07:41.829377+00:00",
    "aiReviewVersion": 1
  },
  "voidwalkers_pocket_dimension": {
    "id": "voidwalkers_pocket_dimension",
    "name": "Voidwalker's Pocket Dimension (10x10)",
    "description": "The Voidwalker's Pocket Dimension is a compact extradimensional space, measuring precisely ten feet by ten feet in all dimensions. Crafted from the very fabric of voidspace by the enigmatic Voidheart Collective, this pocket dimension allows its owner to carry an entire realm within their grasp. Time inside the pocket flows at one-tenth the rate outside, offering moments of serene tranquility amidst chaos or a refuge for meditation and reflection.",
    "price": 785000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Extradimensional Safekeeping",
      "Temporal Surrealism"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Anchor",
    "levelRequirement": 17,
    "effectDetails": [
      {
        "title": "Extradimensional Safekeeping",
        "rules": "Activates as an action. The pocket dimension provides absolute safety to any item or creature placed within it, excluding the effects of damage and destruction. While inside, time flows at one-tenth speed, preserving all elements in perfect condition."
      },
      {
        "title": "Temporal Surrealism",
        "rules": "The interior of the pocket dimension is unaffected by external events; time moves slower, creating a surreal environment where minutes stretch into hours and the passage of time becomes irrelevant. This effect lasts until the user ends it as an action or until the pocket dimension is destroyed."
      }
    ],
    "levelRequirementReason": "The intricate crafting and manipulation of extradimensional space require a high degree of arcane knowledge and control.",
    "vendorReason": "Voidheart Collective's products are sold exclusively by Void Merchant, the only known conduit for such rare and powerful artifacts.",
    "shippingDetail": "Ships via Dimensional Anchor, a courier service that can transport items through voidspace, ensuring safe delivery within days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous when activated; ends as an action or when the pocket dimension is destroyed",
      "endsWhen": "Destroyed by being physically damaged beyond repair or when explicitly ended as an action",
      "charges": "Unlimited"
    },
    "priceReason": "This item's rarity and unique capabilities justify its extremely high price, offering unparalleled utility in a world where extradimensional spaces are rare.",
    "priceOriginal": 785000,
    "priceReviewedAt": "2026-07-23T20:08:07.866457+00:00",
    "aiReviewedAt": "2026-07-23T20:08:07.866457+00:00",
    "aiReviewVersion": 1
  },
  "volt_shroom": {
    "id": "volt_shroom",
    "name": "Volt Shroom",
    "description": "The Volt Shroom exudes a faint electrical hum, its cap shimmering with a soft, blue glow. This enchanted mushroom releases a potent surge of lightning when ingested, shocking any attacker who strikes you in melee. Legend has it that the shaman elders found this glowing fungus deep within the storm-drenched heart of the forest, where lightning storms are said to give birth to life itself. Eaten on an empty stomach, its effects last for 1 minute, leaving attackers with a lingering tingle and a cloud of smoke.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Shocking Rebound",
      "Temporary Aura"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Thunderstorm Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shocking Rebound",
        "rules": "When you are hit by a melee attack while this effect is active, the attacker takes 1d6 lightning damage. This effect lasts for 1 minute and can be triggered up to three times per short or long rest."
      },
      {
        "title": "Temporary Aura",
        "rules": "While this effect is active, you are surrounded by a faint electrical aura that leaves attackers with a lingering tingle. The attacker must succeed on a DC 12 Dexterity saving throw or be stunned for 1 round, during which they cannot take actions or reactions."
      }
    ],
    "levelRequirementReason": "This mushroom is accessible to lower-level characters as it requires minimal preparation and is not overly powerful.",
    "vendorReason": "The Shamans' Hut specializes in rare and mystical ingredients, making the Volt Shroom a natural addition to their stock.",
    "shippingDetail": "Ships via Thunderstorm Courier, ensuring safe delivery through lightning strikes and stormy skies. The courier delivers within three days of purchase.",
    "usage": {
      "activation": "Instantaneous activation upon consumption on an empty stomach.",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the duration expires or you take damage from a melee attack while it is active.",
      "charges": "Unlimited, but can be used up to three times per short or long rest."
    },
    "priceReason": "The Volt Shroom's price is adjusted to reflect its rarity and the difficulty of finding the correct species in the wild, as well as its mystical properties that enhance combat effectiveness.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T20:07:52.403301+00:00",
    "aiReviewedAt": "2026-07-23T20:07:52.403301+00:00",
    "aiReviewVersion": 1
  },
  "vortex_zip_tie": {
    "id": "vortex_zip_tie",
    "name": "Vortex Zip-Tie",
    "description": "A Vortex Zip-Tie is a compact metallic band with an etched micro-vortex. Crafted from reinforced steel, it bends and snaps shut with a metallic snap. This zip-tie can bind and lock space, creating a localized force field that temporarily restrains creatures within its grip. Even ethereal beings are momentarily held captive by the vortex's power, though they are released once the zip-tie is removed or destroyed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔗",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Force Field Binding",
      "Ethereal Restraint"
    ],
    "vendor": "Gearworks",
    "shippedBy": "Steel Tube Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Force Field Binding",
        "rules": "When activated as an action, a Vortex Zip-Tie creates a localized force field that restrains one creature within its confines. The target must succeed on a DC 15 Strength saving throw or be restrained, taking 2d10 force damage each round they remain bound (restrained creatures can attempt the save at the start of their turn). The zip-tie self-destructs upon successful binding."
      },
      {
        "title": "Ethereal Restraint",
        "rules": "The micro-vortex within a Vortex Zip-Tie also has an effect on ethereal creatures, briefly restraining them for 1 minute. Ethereal beings can use their action to make a DC 20 Wisdom saving throw to end the effect early."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level due to its force and ethereal manipulation capabilities.",
    "vendorReason": "Gearworks specializes in high-tech, custom-made tools like the Vortex Zip-Tie, which is a prime example of their craftsmanship.",
    "shippingDetail": "Ships via Steel Tube Express with a 1-day delivery guarantee within the realm.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; force field lasts until target is freed or zip-tie self-destructs",
      "endsWhen": "The zip-tie self-deletes upon successful binding or when destroyed by force",
      "charges": "Unlimited, as the zip-tie re-forms after use"
    },
    "priceReason": "Balanced at 1000 XP to reflect a specialized tool that requires significant material and engineering.",
    "priceOriginal": 38000,
    "priceReviewedAt": "2026-07-23T20:07:57.125381+00:00",
    "aiReviewedAt": "2026-07-23T20:07:57.125381+00:00",
    "aiReviewVersion": 1
  },
  "vrock_spore_cleansing": {
    "id": "vrock_spore_cleansing",
    "name": "Vrock Spore Cleansing Service",
    "description": "The Vrock Spore Cleansing Service is a specialized ritual conducted by Abyssal Exterminators that purifies both person and place of demonic spores, parasites, and rot. The service leaves no trace of infestation, ensuring that the affected area or individual remains free from reinfestation for sixty days. This ancient rite has been honed over millennia in the depths of the Abyss, where even the smallest contamination is a threat to survival.",
    "price": 1000,
    "icon": "🍄",
    "stock": 15,
    "rarity": "epic",
    "effects": [
      "Cleans all spores and parasites",
      "Prevents reinfestation for 60 days"
    ],
    "vendor": "demon_cleanup",
    "shippedBy": "Spore Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spore Removal",
        "rules": "This service requires an action and targets one person or a 10-foot-radius sphere. The caster makes a DC 20 Wisdom (Medicine) check to successfully cleanse the target of all demonic infestations. On a failed save, the target remains contaminated."
      },
      {
        "title": "Reinfestation Prevention",
        "rules": "The prevention lasts for sixty days and can only be disrupted by significant magical means. No additional actions are required during this duration to maintain its effect."
      }
    ],
    "levelRequirementReason": "This service is accessible to anyone, as it does not require a specific class or background but rather the expertise of Abyssal Exterminators.",
    "vendorReason": "Abyssal Exterminators are renowned for their unparalleled knowledge in dealing with demonic infestations and have established themselves as the go-to service providers in such matters.",
    "shippingDetail": "The service is delivered via a swift Spore Cloud, ensuring it arrives within an hour of purchase.",
    "usage": {
      "activation": "An action is required to begin the cleansing ritual.",
      "duration": "Instantaneous effect; lasts for sixty days.",
      "endsWhen": "The effect ends when reinfestation occurs due to significant magical means or after sixty days, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the expertise and resources required by Abyssal Exterminators to conduct such a specialized ritual.",
    "priceOriginal": 205000,
    "priceReviewedAt": "2026-07-23T20:08:27.127489+00:00",
    "aiReviewedAt": "2026-07-23T20:08:27.127489+00:00",
    "aiReviewVersion": 1
  },
  "waluigi_cap": {
    "id": "waluigi_cap",
    "name": "Waluigi Cap",
    "description": "The Waluigi Cap is a mischievous hat made of shimmering, dark fabric that whispers secrets of trickery to its wearer. Crafted in the shadowy forges of Bowser's lair, it enhances one's cunning and agility, granting a wicked edge in both deceitful maneuvers and acrobatic feats. Wearing this cap is akin to stepping into Waluigi's own dimension of mischief; with each activation, you hear the eerie sound of 'Wah!', signaling its malevolent influence at work.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+2 to Deception and Acrobatics",
      "Once per day: Cheat death (reroll saving throw)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Cap Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+2 to Deception and Acrobatics",
        "rules": "This cap grants the wearer a +2 bonus to checks for Deception and Acrobatics. The effects of this item last until the end of your next turn."
      },
      {
        "title": "Cheat death (reroll saving throw)",
        "rules": "Once per day, when you fail a saving throw against death or necromancy magic, you can use this cap to reroll that save. The effect ends immediately after use."
      }
    ],
    "levelRequirementReason": "This cap is designed for beginners who wish to test their wits and agility in tricky situations.",
    "vendorReason": "Wario, always looking to sell unique items from his vast collection of stolen goods, offers this mischievous hat.",
    "shippingDetail": "The Cap Box ensures safe delivery using padded inner linings and a dark, shadowy theme that matches the cap's design.",
    "usage": {
      "activation": "As an action",
      "duration": "Until the end of your next turn",
      "endsWhen": "At the start of your next turn",
      "charges": "1/Day"
    },
    "priceReason": "This cap is priced at 1000 XP, reflecting its unique combination of offensive and defensive capabilities.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-23T20:08:20.889639+00:00",
    "aiReviewedAt": "2026-07-23T20:08:20.889639+00:00",
    "aiReviewVersion": 1
  },
  "wand_of_questionable_utility": {
    "id": "wand_of_questionable_utility",
    "name": "Wand of Questionable Utility",
    "description": "This short, gnarled wand exudes an air of eccentricity. Its cracked varnish hints at a stormy past, and its handle is wrapped in faded leather. Created by wizards who found their magic lacking, it offers whimsical effects that are more trouble than they're worth. The Wand of Questionable Utility can grant you a fleeting moment of absurdity or chaos, but beware—its effects are unpredictable and often useless in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪄",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "RANDOM EFFECT",
      "UNLIMITED CHARGES"
    ],
    "vendor": "discount_artifacts",
    "shippedBy": "Wand Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Effect",
        "rules": "Upon activation, the wand emits a spark that causes one of four random effects: (1) Polish shoes instantly; (2) Change hair color for an hour; (3) Summon a moth to dance around you for 1 minute; or (4) Clean dishes in your immediate area. The effect is instantaneous and has no duration, but it never benefits combat. No save is required."
      },
      {
        "title": "Unlimited Charges",
        "rules": "The wand holds an infinite supply of magical energies that fuel its effects. It requires no recharging and can be used as often as you wish, provided you have the time to activate it."
      }
    ],
    "levelRequirementReason": "No special level is required since the effects are mostly for fun or chaos.",
    "vendorReason": "The Discount Artifact Vendor sells this item because it's a quirky, cheap option that adds a bit of whimsy to any adventurer's arsenal.",
    "shippingDetail": "Shipped via Wand Delivery, which ensures the wand arrives in one piece and with its mystical properties intact.",
    "usage": {
      "activation": "A bonus action is required to activate the wand and cause its effect.",
      "duration": "Each effect is instantaneous and has no duration beyond its immediate occurrence.",
      "endsWhen": "The effect ends as soon as it occurs, unless interrupted by an external event or your next turn.",
      "charges": "Unlimited charges"
    },
    "priceReason": "This price reflects the item's unique and often useless effects, which are entertaining but not combat-effective.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T20:08:12.088766+00:00",
    "aiReviewedAt": "2026-07-23T20:08:12.088766+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_airship_anchor": {
    "id": "warhammer_airship_anchor",
    "name": "Airship Anchor",
    "description": "The Airship Anchor is a compact, weathered iron anchor etched with runes that whisper of ancient airships. It stabilizes floating vessels against storm winds and prevents sudden drops during tempests. However, its full power can only be unleashed after upgrading it with the Remi Coil, which enhances its capabilities but limits cargo capacity by 15%. Crafted by Wario Inc, this rare artifact is a testament to their mastery of airship technology.",
    "price": 1000,
    "icon": "🛫",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Stabilizes against storm winds",
      "Prevents sudden drops"
    ],
    "vendor": "warhammer",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Storm Stabilization",
        "rules": "When an airship equipped with the Airship Anchor encounters severe weather, it gains a +2 bonus to AC and a +10 ft. bonus to flying speed for 1 minute. This effect ends when the storm ends or if the anchor is removed."
      },
      {
        "title": "Drop Prevention",
        "rules": "The airship equipped with this anchor cannot suffer from sudden drops exceeding 30 feet in height during storms, reducing the risk of catastrophic damage by half. This protection lasts for 1 hour and can be reactivated once per long rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum character level to handle its complex mechanics and ensure it does not overshadow player capabilities.",
    "vendorReason": "Warhammer is renowned for their expertise in airship technology and has the resources to offer this rare artifact.",
    "shippingDetail": "Shipped via a spirit courier, arriving within an hour of order placement.",
    "usage": {
      "activation": "Instantaneous activation upon encountering severe weather or impending drops.",
      "duration": "Storm Stabilization lasts for 1 minute; Drop Prevention lasts for 1 hour and recharges after a long rest.",
      "endsWhen": "The effects end when the storm ends, the anchor is removed, or if the airship reaches its maximum speed limit.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced to ensure it remains valuable but not game-breaking in terms of utility and cost.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-24T23:47:50.733124+00:00",
    "aiReviewedAt": "2026-07-24T23:47:50.733124+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_blocky_torch": {
    "id": "warhammer_blocky_torch",
    "name": "Blocky Torch",
    "description": "The Blocky Torch is a cumbersome beacon of frontier fire, crafted by Servants Cosmic for those who dare to venture into uncharted lands. This primitive torch provides an expansive light radius of 200 feet, illuminating the darkest corners and guiding lost souls back to safety. Its sturdy design allows it to be used in crafting or repairing blocks, making it invaluable to builders and adventurers alike. After 15 minutes of use, the torch's flame flickers out, leaving behind only a faint ember that can be rekindled with a match.",
    "price": 1000,
    "icon": "🔮",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Expansive Light",
      "Crafting Companion"
    ],
    "vendor": "warhammer",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expansive Light",
        "rules": "The Blocky Torch provides an area of bright light with a radius of 200 feet. This effect illuminates all creatures and objects within its range, providing advantage on Darkvision checks made in the area. The torch's light can be used to see through darkness but not into total darkness."
      },
      {
        "title": "Crafting Companion",
        "rules": "This torch can be used as a material component for crafting or repairing blocks. Each use reduces its durability by 10%, and it must be rekindled after 15 minutes of continuous use to restore its full functionality. If the torch burns out, it can be relit with minimal effort."
      }
    ],
    "levelRequirementReason": "The Blocky Torch is designed for adventurers who are just starting their journey and require basic tools to survive.",
    "vendorReason": "Warhammer has a long-standing partnership with Servants Cosmic, providing essential gear for adventurers across the realms.",
    "shippingDetail": "The Blocky Torch is delivered quickly by Koopa Postal, ensuring that even the most remote regions receive this vital tool within three days of purchase.",
    "usage": {
      "activation": "Instantaneous when lit with a match or similar fire source.",
      "duration": "15 minutes of continuous use before burning out.",
      "endsWhen": "The torch's flame flickers out after 15 minutes, or if it is destroyed or damaged beyond repair.",
      "charges": "Unlimited uses until the torch burns out."
    },
    "priceReason": "The Blocky Torch provides essential light and crafting support for adventurers, making its price a fair investment in survival and exploration.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T20:08:28.850250+00:00",
    "aiReviewedAt": "2026-07-23T20:08:28.850250+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_cheep_cheep_accords_keyring": {
    "id": "warhammer_cheep_cheep_accords_keyring",
    "name": "Cheep Cheep Accords Keyring",
    "description": "The Cheep Cheep Accords Keyring is a tiny, intricately forged token that grants access to hidden routes across The Fated Place and Rogueport. Crafted from gleaming brass in the shadowy depths of the Accords, this keyring whispers secrets when held near toads or spirit walkers, granting +1 to Stealth checks within 30 feet. However, using it too close to humanoids causes a momentary disorientation, affecting them for 1d4 rounds with disadvantage on attack rolls and saving throws.",
    "price": 1000,
    "icon": "🗝",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Hidden Routes Access",
      "Stealth Boost"
    ],
    "vendor": "warhammer",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Routes Access",
        "rules": "When activated by a creature within The Fated Place or Rogueport, the keyring reveals hidden paths. This effect lasts for 10 minutes and can be used once per long rest."
      },
      {
        "title": "Stealth Boost",
        "rules": "Grants +1 to Stealth checks when near toads or spirit walkers within 30 feet. This benefit persists until the end of the creature's next turn after using this effect, and it can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The token's complexity and hidden lore require a minimum character level to properly utilize its secrets.",
    "vendorReason": "Warhammer is known for its extensive trade networks, including the Accords, making it the logical vendor for such a unique item.",
    "shippingDetail": "Delivered via spectral mail, this keyring arrives with a slight delay due to the mystical nature of its origin.",
    "usage": {
      "activation": "Object interaction or verbal command",
      "duration": "10 minutes per use",
      "endsWhen": "The effect ends when the creature moves more than 5 feet away from The Fated Place or Rogueport, or after a successful DC 12 Wisdom (Perception) check is made.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The keyring's rarity and the unique access it grants justify its moderate price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:08:47.892878+00:00",
    "aiReviewedAt": "2026-07-23T20:08:47.892878+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_cosmic_jester_satchel": {
    "id": "warhammer_cosmic_jester_satchel",
    "name": "Cosmic Jester Satchel",
    "description": "The Cosmic Jester Satchel is a mischievous leather pouch adorned with stars and cosmic runes, filled to the brim with pranks and entropy. When opened, it releases a swirling vortex of unpredictable effects—either teleporting you to a random location within sight, freezing time for an opponent, or inflicting a humorous debuff that mocks your foe's actions. Beware, for each use, the satchel weaves a joke curse upon its target, turning their laughter against them until it exhausts itself.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Teleportation",
      "Time Freeze"
    ],
    "vendor": "Warhammer",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "When used as an action, the satchel teleports you to a random location within sight. The target must make a DC 15 Dexterity saving throw or be teleported to a point of your choice within 30 feet that is not occupied by a creature. This effect lasts for 1 minute."
      },
      {
        "title": "Time Freeze",
        "rules": "This effect can be used as an action, freezing time around the target for up to 3 rounds. The target and all creatures within 10 feet must make a DC 15 Dexterity saving throw. On a failed save, they are frozen in place until the spell ends or another creature moves them."
      }
    ],
    "levelRequirementReason": "This satchel is crafted for young adventurers to practice their skills and learn the art of mischievous combat without overwhelming power.",
    "vendorReason": "Warhammer, known for its extensive supply of unique adventuring gear, offers this satchel as a fun addition to any adventurer's arsenal.",
    "shippingDetail": "The Cosmic Jester Satchel is carefully packed and shipped via Koopa Postal's express courier service to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Used as an action or bonus action.",
      "duration": "Instantaneous, except for the teleport effect which lasts for 1 minute.",
      "endsWhen": "The target successfully saves against the effects; the satchel exhausts after three uses.",
      "charges": "3 uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique and entertaining nature while ensuring it does not overshadow more powerful items.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:08:55.967762+00:00",
    "aiReviewedAt": "2026-07-23T20:08:55.967762+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_cursed_pocket_watch": {
    "id": "warhammer_cursed_pocket_watch",
    "name": "Cursed Pocket Watch",
    "description": "The Cursed Pocket Watch ticks with malevolent energy, a relic from the Jester cults' vault of entropy. Its metallic casing glows faintly with an otherworldly hue, and the hands seem to move in reverse as if time itself resists your touch. This watch grants you control over the flow of seconds, allowing you to manipulate them for strategic advantage or cause chaos among foes, but beware—its power comes at a cost, as it may cause you to forget recent actions.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Temporal Manipulation",
      "Time Distortion"
    ],
    "vendor": "Warhammer",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "As an action, you can manipulate the flow of time for yourself. For the next 20 seconds, your actions are treated as if they were completed in a single turn. This effect does not grant additional turns or speed but allows you to perform complex sequences of actions smoothly and efficiently."
      },
      {
        "title": "Time Distortion",
        "rules": "For 10 seconds after using the watch, any creature within 30 feet who is not an ally suffers a -2 penalty on Dexterity saving throws. This effect ends if you use it again or when the duration expires."
      }
    ],
    "levelRequirementReason": "The Cursed Pocket Watch's dark magic requires a high level of arcane knowledge and discipline to control.",
    "vendorReason": "Warhammer, known for its eclectic collection of rare artifacts, has acquired this dangerous relic from a mysterious source.",
    "shippingDetail": "Due to the watch's unstable nature, it must be shipped in special protective packaging and can only be delivered during daylight hours.",
    "usage": {
      "activation": "Action",
      "duration": "20 seconds + 10 seconds after use",
      "endsWhen": "The duration ends or you use it again",
      "charges": "Unlimited"
    },
    "priceReason": "This item's price reflects its rarity and the risks involved in using such a powerful artifact.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T20:09:21.698437+00:00",
    "aiReviewedAt": "2026-07-23T20:09:21.698437+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_daisy_princess_satchel": {
    "id": "warhammer_daisy_princess_satchel",
    "name": "Daisy Princess Satchel",
    "description": "The Daisy Princess Satchel, crafted with intricate filigree and adorned in the royal crest of Sarasaland, is a relic from the golden age of desert diplomacy. This ornate satchel once held the secrets of peace treaties between warring nations but now contains only a map of Ricco Harbor’s hidden tunnels and a feather from a Skaven general — symbols of enduring conflict and unity. It whispers tales to those who wield it, yet its very presence can cloud the mind with fleeting confusion.",
    "price": 1000,
    "icon": "📜",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Diplomatic Insight",
      "Tunnel Map"
    ],
    "vendor": "Warhammer",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Diplomatic Insight",
        "rules": "When used in negotiations, this satchel grants a +1 bonus to Diplomacy checks. The effect lasts until the end of your next turn and can be activated once per long rest."
      },
      {
        "title": "Tunnel Map",
        "rules": "Activating this effect reveals the map of Ricco Harbor’s secret tunnels, providing you with detailed knowledge of the area for 1 minute. This effect cannot be used more than twice a day and requires an Intelligence (History) check contested by the DM."
      }
    ],
    "levelRequirementReason": "It can be wielded by any character to aid in diplomacy or uncover hidden routes.",
    "vendorReason": "Warhammer is a renowned vendor for royal and diplomatic items, known for its extensive stock of artifacts from various realms.",
    "shippingDetail": "Ships via Koopa Express, ensuring safe delivery within five game days.",
    "usage": {
      "activation": "A bonus action is required to activate either effect.",
      "duration": "The Diplomatic Insight lasts until the end of your next turn. The Tunnel Map reveals information for one minute.",
      "endsWhen": "The effects are exhausted after use or when a character makes an Intelligence (History) check with a failed result.",
      "charges": "Unlimited uses, but only twice per day for revealing the map."
    },
    "priceReason": "The satchel’s price reflects its rarity and historical significance, providing both diplomatic and strategic advantages without being overly powerful.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T20:09:32.349477+00:00",
    "aiReviewedAt": "2026-07-23T20:09:32.349477+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_doughnut_hole_tether": {
    "id": "warhammer_doughnut_hole_tether",
    "name": "Doughnut Hole Tether",
    "description": "The Doughnut Hole Tether, crafted by the mischievous Chain Chomp Courier from the cosmic void, is a cursed artifact that binds its wielder to the eternal darkness of the cosmos. This weapon's hollow core whispers of unspeakable horrors, and when left unattended for an hour instead of 30 minutes as before, it draws random entities from the void into the user’s vicinity, causing them to fight each other in a chaotic battle within the tether’s radius. The wielder gains a strange, ethereal glow that enhances their movement speed by 50% when within the void, but at the cost of psychic damage dealt and received.",
    "price": 1000,
    "icon": "🍩",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Psychic Drain",
      "Voidbound Movement"
    ],
    "vendor": "warhammer",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Psychic Drain",
        "rules": "While in the void, you deal 1d6 psychic damage to any entity within your reach at the start of each of your turns. If left unattended for an hour, the tether draws entities from the void into a radius of 30 feet around you, causing them to engage in a chaotic battle and deal 1d6 psychic damage to all creatures within that area as they clash."
      },
      {
        "title": "Voidbound Movement",
        "rules": "You gain a +5 bonus to your movement speed while within the void. However, this effect is countered if you are outside of the void for more than 10 minutes; at which point, you must make a DC 15 Constitution saving throw or take 2d6 psychic damage."
      }
    ],
    "levelRequirementReason": "The artifact's malevolent nature and the cosmic forces it commands demand that only an experienced wielder can control its powers.",
    "vendorReason": "Warhammer, known for their dark magic and cursed artifacts, are the perfect purveyors of this dangerous weapon.",
    "shippingDetail": "The Courier's delivery is swift but perilous; the package is often intercepted by entities from the void, making it a rare and sought-after item.",
    "usage": {
      "activation": "Passive effect while in the void, charges on unattended time in the void for an hour instead of 30 minutes as before.",
      "duration": "Active during your turns when within the void; counters if left outside the void for more than 10 minutes.",
      "endsWhen": "The tether's effects end upon leaving the void for more than 10 minutes or if you make a failed Constitution saving throw due to damage.",
      "charges": "Unlimited, but only active while in the void."
    },
    "priceReason": "Balanced at this price as it requires attunement by a priest of the Void and its effects are both dangerous and beneficial.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:09:27.258859+00:00",
    "aiReviewedAt": "2026-07-23T20:09:27.258859+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_faerun_blessing": {
    "id": "warhammer_faerun_blessing",
    "name": "Faerûn’s Whispering Ring",
    "description": "Faerûn’s Whispering Ring is a delicate silver circlet adorned with arcane runes that hum softly when worn. Crafted by Custodians from a relic of the last dragonborn king, it whispers spells of ancient power into your mind. While in Faerûn, this ring grants +2d4 to all spellcasting rolls and slightly increases your spellcasting speed. When used near a dragon’s roar, it triggers a minor dimensional rift that disrupts the resonance of Dragon Conspiracy traps.",
    "price": 1000,
    "icon": "🪄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Spellcasting Boost",
      "Dragon Resonance"
    ],
    "vendor": "warhammer",
    "shippedBy": "Pianta Chuck Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Spellcasting Boost",
        "rules": "Activates on wearing the ring in Faerûn. Grants a +2d4 bonus to all spellcasting rolls for 10 minutes. Ends when removed or at the end of your next long rest."
      },
      {
        "title": "Dragon Resonance",
        "rules": "When used within earshot of a dragon’s roar, triggers a minor dimensional rift that disrupts Dragon Conspiracy sonic traps, halting their resonance for 1 minute. The effect ends if you move more than 30 feet away from the trap or if the trap is destroyed."
      }
    ],
    "levelRequirementReason": "Requires proficiency in Arcana to fully harness the ring’s arcane properties.",
    "vendorReason": "Warhammer is known for its connections with ancient artifacts and relics, making it a fitting vendor for this item.",
    "shippingDetail": "Ships via Pianta Chuck Express, delivering within three days from the nearest Faerûnian port.",
    "usage": {
      "activation": "Passive effect upon wearing in Faerûn; requires a reaction to use near a dragon’s roar.",
      "duration": "10 minutes or until removed, per activation of Dragon Resonance",
      "endsWhen": "Removed from the wearer or at the end of your next long rest for Spellcasting Boost; ends when the trap resonance is destroyed or the effect duration expires for Dragon Resonance.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects its rarity, ancient craftsmanship, and unique abilities within Faerûn.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T20:09:29.391594+00:00",
    "aiReviewedAt": "2026-07-23T20:09:29.391594+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_feywild_ring": {
    "id": "warhammer_feywild_ring",
    "name": "Feywild Ring of the Trickster",
    "description": "The Feywild Ring of the Trickster is a cursed iron ring, forged in the twilight realms where time and fate intertwine. Its surface gleams with an ethereal glow, hinting at forgotten magic. This ring allows its wearer to momentarily bend reality, causing minor disorientation among those who dare to cross paths within the Feywild. It also increases the likelihood of wild magic surges, making it a perilous yet powerful tool for those adept in arcane arts.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Temporal Disruption",
      "Wild Magic Surge"
    ],
    "vendor": "warhammer",
    "shippedBy": "Koopa Postal Service",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "As an action, the wearer can use this ring to create a brief time loop that lasts for one round. During this effect, all creatures within a 10-foot radius must succeed on a DC 15 Dexterity saving throw or be knocked prone and have their movement speed halved until the start of their next turn."
      },
      {
        "title": "Wild Magic Surge",
        "rules": "The ring increases the chance of triggering wild magic surges by +20%. This effect is cumulative with other sources of wild magic."
      }
    ],
    "levelRequirementReason": "Only those skilled enough to navigate the Feywild's dangers and wield its magic should be able to use this ring.",
    "vendorReason": "Warhammer, with their extensive network of arcane dealers, can source such a powerful and dangerous artifact from the Pokémon League.",
    "shippingDetail": "Due to its cursed nature, the ring must be shipped in specially enchanted boxes that prevent any wild magic surges during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 round per use",
      "endsWhen": "The effect ends when the duration expires or the wearer is hit by an attack.",
      "charges": "Unlimited, but only one use per short rest"
    },
    "priceReason": "The ring's limited uses and potential for wild magic surges justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:10:11.155947+00:00",
    "aiReviewedAt": "2026-07-23T20:10:11.155947+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_garlic_grenade": {
    "id": "warhammer_garlic_grenade",
    "name": "Garlic Grenade",
    "description": "The Garlic Grenade is a pungent explosive crafted from garlic and Wario Inc's secret formula. When thrown, it detonates with an acrid scent that forces nearby enemies to flee in temporary blindness, while also causing a mild curse that reduces their Dexterity by one for the duration of combat. The grenade's pungency even affects allies, who must cover their noses or risk being momentarily dazed and unable to act.",
    "price": 1000,
    "icon": "🧄",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Fleeting Blindness",
      "Garlic Curse"
    ],
    "vendor": "warhammer",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fleeting Blindness",
        "rules": "When a creature within 10 feet of the grenade is hit by it, they must succeed on a DC 13 Constitution saving throw or be blinded for 1 round. This effect does not affect allies who are willing to cover their noses."
      },
      {
        "title": "Garlic Curse",
        "rules": "For every minute an enemy remains within 20 feet of the grenade's explosion, they suffer a -1 penalty to Dexterity saves and checks. The curse ends when the enemy moves out of range or is incapacitated."
      }
    ],
    "levelRequirementReason": "This item is designed for novice adventurers who need a reliable way to incapacitate foes temporarily.",
    "vendorReason": "Warhammer has a reputation for supplying unique weapons and explosives, making the Garlic Grenade an ideal addition to their inventory.",
    "shippingDetail": "Ships via a Rakasha spirit who delivers it directly into your hands, ensuring quick arrival even in remote locations.",
    "usage": {
      "activation": "Throw as a bonus action",
      "duration": "Instantaneous; lasts until the end of combat or until destroyed",
      "endsWhen": "Exhausted after one use per day; recharges overnight",
      "charges": "One charge"
    },
    "priceReason": "This balanced price reflects the grenade's utility in a variety of combat scenarios, from disabling agile enemies to creating temporary distractions.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-23T20:09:42.693902+00:00",
    "aiReviewedAt": "2026-07-23T20:09:42.693902+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_heart_of_animatopia": {
    "id": "warhammer_heart_of_animatopia",
    "name": "Heart of Animatopia",
    "description": "The Heart of Animatopia is a pulsating core carved from the ancient heartwood of an animatopian tree. This living relic grants warriors temporary immunity to fear and confusion, making them unshaken in the heat of battle. When activated, it imbues attacks with primal fury, increasing damage against enemy leaders by 30%. The core's fierce energy can be consumed to unleash a burst of Tribal Rage, temporarily breaking through enemy armor defenses.",
    "price": 1000,
    "icon": "🐾",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Primal Fury",
      "Unyielding Will"
    ],
    "vendor": "warhammer",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Primal Fury",
        "rules": "When activated as an action, the Heart grants temporary immunity to fear and confusion for 1 minute. Increases damage against enemies with leadership abilities by 30%. Ends if the user takes any nonmagical damage."
      },
      {
        "title": "Unyielding Will",
        "rules": "The user can consume 2000 HP once per long rest to activate Tribal Rage for 1 minute. During this time, there is a 20% chance that all attacks made break enemy armor defenses. Ends if the user drops below half health."
      }
    ],
    "levelRequirementReason": "Requires mastery of basic combat skills to wield its primal power.",
    "vendorReason": "Warhammer, a master forger and supplier of unique artifacts, offers the Heart of Animatopia as a symbol of their craftsmanship in ancient relics.",
    "shippingDetail": "The core is shipped via Void Drifter Relay, ensuring secure transport through the starry void.",
    "usage": {
      "activation": "Activate as an action; can be consumed once per long rest.",
      "duration": "1 minute or until interrupted by damage.",
      "endsWhen": "Ends if the user takes nonmagical damage or drops below half health.",
      "charges": "Unlimited, but can only be consumed once per long rest."
    },
    "priceReason": "Balanced to provide a powerful combat advantage without overbalancing the game.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-23T20:09:44.686984+00:00",
    "aiReviewedAt": "2026-07-23T20:09:44.686984+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_lanky_kong_keychain": {
    "id": "warhammer_lanky_kong_keychain",
    "name": "Lanky Kong Keychain",
    "description": "This is a whimsical keychain featuring Lanky Kong, the failed diplomat of the Lanky Kong diplomatic corps. Crafted from durable brass and adorned with a mischievous expression, it's a relic that brings both laughter and luck to its bearer during tense negotiations or battles. When used in combat, it grants temporary confusion to foes and increases ally morale by 5%. The keychain can be worn during diplomacy, unlocking a hidden map to the Lanky Kong Vault upon collecting two such charms.",
    "price": 1000,
    "icon": "🐒",
    "stock": 50,
    "rarity": "common",
    "effects": [
      "Confuse Enemies",
      "Boost Ally Morale"
    ],
    "vendor": "warhammer",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confuse Enemies",
        "rules": "When used in combat, this keychain has a 15% chance to cause an enemy within 5 feet to make a Wisdom saving throw (DC 10) or be temporarily confused for the start of your next turn. This effect ends if the enemy takes damage."
      },
      {
        "title": "Boost Ally Morale",
        "rules": "When used during combat, this keychain increases the morale of all friendly creatures within 30 feet by +2 until the end of your next turn. This effect does not stack with other similar morale bonuses."
      }
    ],
    "levelRequirementReason": "This keychain is designed to be accessible for beginning adventurers, providing a humorous yet practical advantage in challenging situations.",
    "vendorReason": "Warhammer, known for its diverse inventory of quirky and functional items, offers this delightful keychain as part of their collection of themed accessories.",
    "shippingDetail": "Ships via the Void Drifter Relay within 3 game days.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect; lasts until the start of your next turn.",
      "endsWhen": "The effect ends if an enemy takes damage or when used again during the same combat round.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The keychain's unique design and thematic value justify its higher price, making it a sought-after item for adventurers seeking both practical benefits and a touch of humor.",
    "priceOriginal": 100,
    "priceReviewedAt": "2026-07-23T20:10:09.029787+00:00",
    "aiReviewedAt": "2026-07-23T20:10:09.029787+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_primordial_wyrm_seal": {
    "id": "warhammer_primordial_wyrm_seal",
    "name": "Primordial Wyrm Seal",
    "description": "The Primordial Wyrm Seal is a heavy, obsidian hammerhead engraved with ancient sigils from the depths of the Valley of Bowser. It resonates with the primordial fury that once fueled the wyrm's wrath. When placed on a seal of the Primordial Wyrm, it unleashes an aura that grants immunity to all magic effects for 10 minutes and opens the chamber housing its core. Crafting this relic required the arcane knowledge of Mages Guild Portal and the dark secrets of Skaven alchemy.",
    "price": 1000,
    "icon": "🧱",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Immunity Aura",
      "Core Chamber Access"
    ],
    "vendor": "warhammer",
    "shippedBy": "Mages Guild Portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Immunity Aura",
        "rules": "When activated, this seal grants immunity to all magic effects for 10 minutes. The wielder must make a DC 20 Constitution saving throw or take 2d6 psychic trauma. This effect is instantaneous and ends when the duration expires."
      },
      {
        "title": "Core Chamber Access",
        "rules": "This seal can be used to open the core chamber of the Primordial Wyrm, allowing access to its inner sanctum. It has no uses after this activation."
      }
    ],
    "levelRequirementReason": "The arcane complexity and danger of the spell required for activation necessitate a minimum level.",
    "vendorReason": "Warhammer, known for its connections to ancient artifacts, is entrusted with this unique relic.",
    "shippingDetail": "Shipped via an arcane courier, ensuring the safe and timely delivery of such a potent artifact.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes",
      "endsWhen": "Duration expires or seal is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the item's rarity and its powerful but manageable effects.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T20:09:56.069879+00:00",
    "aiReviewedAt": "2026-07-23T20:09:56.069879+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_rakasha_spirit_torch": {
    "id": "warhammer_rakasha_spirit_torch",
    "name": "Rakasha Spirit Torch",
    "description": "The Rakasha Spirit Torch flickers with a spectral glow that dances like living fire. Crafted by the enigmatic Rakasha clans, this torch burns with the essence of their ancient spirit walkers, granting the wielder a brief connection to the ethereal realm. For 10 minutes, it provides +2 to all Intelligence (Insight) checks and Wisdom (Perception) checks related to detecting hidden or invisible creatures, while also causing minor sensory distortions that last until the effect ends.",
    "price": 1000,
    "icon": "🔥",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Spectral Insight",
      "Minor Hallucinations"
    ],
    "vendor": "warhammer",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Insight",
        "rules": "For 10 minutes, the wielder gains +2 to all Intelligence (Insight) checks and Wisdom (Perception) checks related to detecting hidden or invisible creatures. This effect ends if the user moves more than 60 feet from where they ignited the torch."
      },
      {
        "title": "Minor Hallucinations",
        "rules": "During the duration, the wielder experiences minor sensory distortions that are not debilitating but can affect their perception of reality. These distortions last for the entire duration and do not require a saving throw to resist."
      }
    ],
    "levelRequirementReason": "This item provides useful but not overly powerful benefits, suitable for lower-level characters.",
    "vendorReason": "The Warhammer is known for its diverse and high-quality items that cater to a wide range of player needs, making the Rakasha Spirit Torch an appropriate addition.",
    "shippingDetail": "The torch arrives encased in spectral fire, ensuring it remains functional until use.",
    "usage": {
      "activation": "Instantaneous activation upon ignition; no further action required during duration.",
      "duration": "10 minutes per use",
      "endsWhen": "At the end of each long rest or if moved more than 60 feet from where ignited.",
      "charges": "Unlimited, recharged with a full night's sleep."
    },
    "priceReason": "The item offers balanced benefits that enhance perception and insight without granting game-breaking advantages, justifying its price in XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T20:09:58.264047+00:00",
    "aiReviewedAt": "2026-07-23T20:09:58.264047+00:00",
    "aiReviewVersion": 1
  }
};
