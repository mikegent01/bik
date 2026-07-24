// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_030 = {
  "midlands_steel_heart": {
    "id": "midlands_steel_heart",
    "name": "Steel Heart of the Iron Forge",
    "description": "The Steel Heart of the Iron Forge is a molten core forged from the very soul of the forge, pulsing with industrial might and resilience. Its surface gleams with hues of red and orange, reflecting the heart's fiery origin. This enchanted heart grants immense durability, bolstering one’s armor against blunt and crushing attacks by +50%, while also enhancing melee strikes to deal an extra 1d6 damage. When wielded, it channels the power of the forge, increasing the chance to ignore enemy armor by +20%. Its fiery essence is a testament to the craftsmanship of the Midlands.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+50% Armor vs Blunt and Crushing Damage",
      "Extra Melee Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Durability",
        "rules": "The Steel Heart provides +50% resistance to blunt and crushing damage. This effect is always active as long as the heart remains in your possession."
      },
      {
        "title": "Boosted Melee Strikes",
        "rules": "When you make a melee attack, you deal an additional 1d6 damage. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The heart's raw power is accessible to even the most novice forgers and warriors.",
    "vendorReason": "The Midlands are renowned for their mastery of steelwork, making it fitting that they sell this emblem of industrial might.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring swift delivery to even the most distant realms.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until expended or destroyed.",
      "endsWhen": "The heart is lost, damaged beyond repair, or destroyed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced as a rare item with potent defensive and offensive capabilities, this heart offers significant value for its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:07:31.818325+00:00",
    "aiReviewedAt": "2026-07-22T22:07:31.818325+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_heart_heart": {
    "id": "midlands_steel_heart_heart",
    "name": "Steel Heart Heart",
    "description": "The Steel Heart Heart is a cogs-and-rivets relic from the Iron Legion's inner command, forged in the heart of their forges. When activated, it ignites the very gears of industrial might within you, granting an instant surge of vitality and a brief moment of unyielding resilience. It regenerates health at an accelerated pace and grants temporary invincibility, allowing you to shrug off harm that would normally pierce your defenses.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Health Surge",
      "Invincible Glimpse"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Health Surge",
        "rules": "Activates as a bonus action. Grants +50% health regeneration per 5 seconds for up to 1 minute. Ends when the user takes damage, is incapacitated, or uses another effect with similar functionality."
      },
      {
        "title": "Invincible Glimpse",
        "rules": "Grants +20% armor and +10% chance to trigger Iron Will (ignores 10% of enemy damage) for up to 10 seconds. Ends if the user is hit by an attack, uses another effect with similar functionality, or is incapacitated."
      }
    ],
    "levelRequirementReason": "The Steel Heart Heart requires a minimum level of 3 to activate its industrial resilience.",
    "vendorReason": "Midlands are renowned for their intricate mechanical artifacts, and the Steel Heart Heart is no exception.",
    "shippingDetail": "Delivered with a swift gust of spectral winds ensuring timely arrival to its eager recipient.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute for Health Surge; up to 10 seconds for Invincible Glimpse, stacking if used within a short rest.",
      "endsWhen": "On damage taken, incapacitation, or use of similar effects.",
      "charges": "Unlimited"
    },
    "priceReason": "The Steel Heart Heart's balanced XP price reflects its rarity and utility in combat.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T22:07:29.241725+00:00",
    "aiReviewedAt": "2026-07-22T22:07:29.241725+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_hood": {
    "id": "midlands_steel_hood",
    "name": "Steel Hood of the Blacksmith",
    "description": "The Steel Hood of the Blacksmith is a helmet forged from the molten heart of an ancient, forgotten forge. Its surface glows faintly in the dark, illuminating hidden pathways and guiding the wearer through treacherous terrain. Struck by an enemy blow, it whispers truths of iron, revealing secrets about the attacker's weaknesses. This helm not only enhances the wearer’s defenses but also grants a mysterious insight into their surroundings.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+25% Armor",
      "Reveal Hidden Paths"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Boost",
        "rules": "The Steel Hood provides a +25% bonus to armor class (AC) when worn. This effect is passive and does not require any activation."
      },
      {
        "title": "Path Reveal",
        "rules": "When struck by an enemy attack, the hood reveals hidden paths on the map within 30 feet of the wearer for up to 1 minute. The user must be aware of their surroundings for this effect to activate. This effect has a maximum of three uses per long rest."
      }
    ],
    "levelRequirementReason": "This basic yet powerful piece is accessible to low-level characters who need both defensive and strategic advantages.",
    "vendorReason": "The Midlands are known for their blacksmiths, who have access to rare materials and ancient forges. The Steel Hood is a natural addition to their inventory.",
    "shippingDetail": "The Shy Guy Smugglers ensure the safe delivery of this valuable item, but it may take an additional week due to its delicate nature.",
    "usage": {
      "activation": "Passive and requires no activation. The Path Reveal effect activates when struck by an enemy attack.",
      "duration": "Instantaneous (Path Reveal), up to 1 minute",
      "endsWhen": "The wearer is no longer aware of their surroundings or upon the end of a long rest, whichever comes first.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "The Steel Hood offers significant defensive and tactical advantages at a fair price for its level.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:07:46.218533+00:00",
    "aiReviewedAt": "2026-07-22T22:07:46.218533+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_maw": {
    "id": "midlands_steel_maw",
    "name": "Steel Maw of the Iron Cogs",
    "description": "The Steel Maw of the Iron Cogs is a massive, rusted gear-laced maw forged from ancient battlefields. Its jagged teeth are embedded with fragments of shattered armor, ready to devour and transmute the very essence of enemy armors into raw steel. Crafted by the blacksmiths of the Regal Empire, this relic grants +15% damage against heavy armor targets and a 20% chance to break enemy armor upon each hit, all while enhancing forge efficiency by +50%. Perfect for those who seek to forge their own destiny in the heart of the empire.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage to heavy armor",
      "20% chance to break enemy armor on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Devouring",
        "rules": "Activates as a bonus action when you make a melee attack against an armored target. The maw's teeth latch onto the target’s armor, reducing its AC by 1 until the start of your next turn. This effect ends if the target is no longer armed with heavy armor."
      },
      {
        "title": "Forge Efficiency Boost",
        "rules": "While equipped, you gain a +50% bonus to forge efficiency when crafting items from materials like steel or iron. The bonus lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers who seek to strengthen their skills and forge their own destiny.",
    "vendorReason": "The Midlands are renowned for their skilled blacksmiths, and they proudly sell the Steel Maw of the Iron Cogs as a testament to their craftsmanship.",
    "shippingDetail": "Delivered with utmost secrecy by Shy Guy Smugglers, ensuring that only those who truly deserve it receive this artifact.",
    "usage": {
      "activation": "Bonus action to activate the maw's teeth on an armored target.",
      "duration": "Until the start of your next turn or until the target no longer wears heavy armor.",
      "endsWhen": "The target is no longer wearing heavy armor.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic's balanced price reflects its rare materials, ancient craftsmanship, and the unique benefits it provides to adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:07:34.961834+00:00",
    "aiReviewedAt": "2026-07-22T22:07:34.961834+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_maw_gear": {
    "id": "midlands_steel_maw_gear",
    "name": "Steel Maw Gear",
    "description": "The Steel Maw Gear, a massive cog forged from the molten remains of an ancient war machine's teeth, is a relic of mechanical ingenuity. It grants the wearer the ability to manipulate and command machinery with a simple thought, while also allowing for the triggering of explosive mechanisms within reach. This gear is not just a weapon; it whispers secrets of the battlefield through its intricate gears and hardened steel.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Trigger Explosives",
      "Mechanical Mastery"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Trigger Explosives",
        "rules": "As an action, you can target a mechanical device within 10 feet. If successful, the device detonates or releases its stored energy, dealing 2d6 force damage to all creatures in range and requiring a DC 15 Dexterity saving throw for half damage."
      },
      {
        "title": "Mechanical Mastery",
        "rules": "You gain a +15% bonus on attack rolls against mechanical targets. Additionally, you can use an action to grant yourself or another creature within 30 feet a temporary hit point equal to your proficiency bonus upon successful triggering of a mechanism."
      }
    ],
    "levelRequirementReason": "Only those who have proven their worth on the battlefield are deemed ready to wield this relic.",
    "vendorReason": "The Midlands have long been known for their mastery of mechanical devices, and their gear is as reliable as it is powerful.",
    "shippingDetail": "Ships via enchanted courier, arriving within the week with no additional cost.",
    "usage": {
      "activation": "Action or Reaction (to trigger explosives); Action (for mechanical mastery)",
      "duration": "Instantaneous; ends when expended",
      "endsWhen": "The action is used up and requires a short rest to recharge",
      "charges": "2 charges, recharged after a short rest"
    },
    "priceReason": "This relic's price reflects its rarity and the craftsmanship required to forge such an intricate piece of machinery.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:08:46.812406+00:00",
    "aiReviewedAt": "2026-07-22T22:08:46.812406+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_shroud": {
    "id": "midlands_steel_shroud",
    "name": "Ironclad Cloak of the Anvil",
    "description": "Forged from the twisted metal of a shattered siege engine, this Ironclad Cloak of the Anvil grants its wearer an impenetrable barrier against bludgeoning strikes. The cloak's menacing aura adds +10% armor bonus to the wearer’s defense and imposes a -10% movement penalty on enemies within 5 feet who attempt to grapple or shove them, making it an ideal choice for frontliners facing relentless hammer and anvil tactics in the forgehearted battlefield.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "-20% damage from bludgeoning attacks",
      "+10% armor bonus"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blunt Defense",
        "rules": "The wearer gains a +4 bonus to AC against bludgeoning weapon attacks and bludgeoning damage taken. This effect lasts until the start of their next turn."
      },
      {
        "title": "Grapple Penalty",
        "rules": "For every 5 feet within which an enemy attempts to grapple or shove the wearer, they must make a DC 14 Strength saving throw or have their speed reduced by -10 feet until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Requires no level as it is a rare item designed to aid frontliners in immediate combat scenarios.",
    "vendorReason": "Midlands, known for their expertise in crafting durable armors and weapons from war-torn materials, offers this cloak for those who need protection against the harshest battlefield conditions.",
    "shippingDetail": "The cloak is delivered via swift spirit courier, arriving within one week of purchase.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The rare, durable materials and artisanal forging process contribute to its fair value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:07:58.562856+00:00",
    "aiReviewedAt": "2026-07-22T22:07:58.562856+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_soul": {
    "id": "midlands_steel_soul",
    "name": "Soul of the Anvil",
    "description": "The Soul of the Anvil is a cursed hammer forged from the very essence of steel and fire. Its glowing surface pulses with the energy of countless hammer strikes, each one etched into its blade. When wielded by a blacksmith or a warrior, it grants an immediate surge of strength, restoring 25% of your maximum hit points, and imbues you with an attack speed that rivals lightning. Nearby steel objects are drawn to it, reinforcing the wielder's resolve in battle.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Steel Surge",
      "Forge Lightning"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Steel Surge",
        "rules": "As a bonus action, you can activate the Soul of the Anvil. It restores 25% of your maximum hit points and grants you a +10% increase to attack speed for 60 seconds. This effect cannot be used more than once per short rest."
      },
      {
        "title": "Forge Lightning",
        "rules": "The hammer can temporarily draw nearby steel objects, creating an aura that debuffs enemies within 15 feet with a “Metal Curse,” reducing their attack speed by 20% for 30 seconds. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The item's latent power requires minimal experience to wield, making it accessible early in the adventuring career.",
    "vendorReason": "Midlands is known for its mastery of steel and forging, making them the perfect vendor for such a powerful artifact.",
    "shippingDetail": "The hammer arrives with a protective sheath to minimize its cursed properties during transit.",
    "usage": {
      "activation": "Bonus action or reaction (activates Steel Surge and Forge Lightning)",
      "duration": "Instantaneous activation; Steel Surge lasts for 60 seconds, Forge Lightning lasts for 30 seconds",
      "endsWhen": "The effects end when the duration expires or a successful DC 15 Constitution saving throw is made against the Metal Curse",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1,000 XP to reflect its rarity and powerful effects without overshadowing other items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:07:50.121683+00:00",
    "aiReviewedAt": "2026-07-22T22:07:50.121683+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_soul_amulet": {
    "id": "midlands_steel_soul_amulet",
    "name": "Steel Soul Amulet",
    "description": "The Steel Soul Amulet is a forged amulet of iron and obsidian, its surface etched with runes that hum with the memory of Legion steel. Worn by a fallen anvil-mender, it grants strength to the oppressed and protection against poison from Legion mines. When near iron ore veins, this amulet amplifies one's resilience, bolstering max HP by 1000. Its armor-piercing might can turn the tide in battle, dealing +500 damage to enemy armor.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Armor Piercing",
      "Max HP Amplification"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Max HP Amplification",
        "rules": "When near an iron ore vein, this amulet amplifies the wearer's maximum hit points by +1000. This effect lasts until the wearer moves more than 30 feet away from the vein."
      },
      {
        "title": "Armor Piercing",
        "rules": "This amulet deals +500 damage to enemy armor when used as part of an attack action. The amulet can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Steel Soul Amulet provides significant battlefield assistance, making it accessible early in a character's career.",
    "vendorReason": "Midlands is known for its ties to the Legion and sells items imbued with their heritage.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, this amulet arrives in perfect condition.",
    "usage": {
      "activation": "Instantaneous; can be used as part of an attack action to deal +500 damage to enemy armor.",
      "duration": "Instantaneous effect for the Armor Piercing ability. Max HP Amplification lasts until moving more than 30 feet away from an iron ore vein.",
      "endsWhen": "The wearer moves more than 30 feet away from an iron ore vein or after one use of the Armor Piercing ability per long rest.",
      "charges": "Unlimited; recharges at midnight."
    },
    "priceReason": "This amulet is priced at 1000 XP, reflecting its significant battlefield utility and early-game accessibility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:08:15.915418+00:00",
    "aiReviewedAt": "2026-07-22T22:08:15.915418+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_soul_belt": {
    "id": "midlands_steel_soul_belt",
    "name": "Steel Soul Belt",
    "description": "The Midlands Steel Soul Belt, crafted from the very marrow of war-torn machines, imbues its wearer with the unyielding spirit of the forge. This belt grants temporary invulnerability to physical attacks, allowing a warrior to shrug off blows and rise unscathed. However, after each use, the forges' wrath demands a 30-second cooldown, during which the wielder must endure a surge of mechanical energy that can disrupt their focus.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+100% damage reduction",
      "30-second cooldown"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "Activates as an action, providing the wearer with +100% damage reduction against all physical attacks for a duration of 5 seconds. This effect ends immediately if the wearer takes any non-physical damage."
      },
      {
        "title": "Cooldown Surge",
        "rules": "After each use, the belt imposes a 30-second cooldown period during which the wearer suffers a -2 penalty to all attack rolls and saving throws. The cooldown can be reduced by one round with an action, but using this ability causes the cooldown to reset."
      }
    ],
    "levelRequirementReason": "This belt is designed for beginners who wish to test their mettle against formidable foes before advancing in strength.",
    "vendorReason": "The Midlands are renowned for their mastery of steel and the soul of war, making them a trusted source for such powerful relics.",
    "shippingDetail": "The belt is carefully wrapped in protective armorite to prevent damage during transit, ensuring it arrives undamaged.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds",
      "endsWhen": "Ends immediately if the wearer takes any non-physical damage or when the cooldown period ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare and difficult-to-find materials, combined with the belt's unique enchantment, justify its relatively lower price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:08:20.084892+00:00",
    "aiReviewedAt": "2026-07-22T22:08:20.084892+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_soul_charger": {
    "id": "midlands_steel_soul_charger",
    "name": "Steel Soul Charger",
    "description": "The Steel Soul Charger is a rusted iron core fused with toad-prisoners' stolen essence, forged in the heart of industrial Midlands. This ancient relic powers armor with a pulse of raw fury, enhancing melee attacks and regenerating stamina over time. Upon activation, it releases an eerie hum that charges the wearer's defenses, granting temporary resilience. Slightly boosts damage output and replenishes stamina after 10 seconds, while also providing a rare chance to cause Industrial Overload, doubling attack power for a fleeting moment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% melee damage",
      "Regenerates Stamina"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Industrial Overload",
        "rules": "When the Steel Soul Charger causes an Industrial Overload, it grants temporary 30% damage boost and 100% armor penetration for 5 seconds. This effect has a 5% chance to occur each time melee attacks are made."
      },
      {
        "title": "Stamina Regeneration",
        "rules": "The charger regenerates 10% of the wearer's stamina every 10 seconds, up to a maximum of 20%. This effect is passive and does not require activation."
      }
    ],
    "levelRequirementReason": "Requires level 5 due to its complex fusion of toad-prisoner essence and industrial power.",
    "vendorReason": "Midlands, known for their mastery of industrial magic, are the only purveyors of this ancient artifact.",
    "shippingDetail": "Ships via Boo Spectral Mail; delivery can be delayed by up to a week due to spectral interference.",
    "usage": {
      "activation": "Activates on use, providing Industrial Overload for each melee attack made.",
      "duration": "Instantaneous; lasts for 5 seconds per occurrence of Industrial Overload.",
      "endsWhen": "Exhausts after 10 uses or when the charger is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rare essence and industrial magic, making it a valuable yet attainable option for level 5 adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:08:12.713064+00:00",
    "aiReviewedAt": "2026-07-22T22:08:12.713064+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_soul_potion": {
    "id": "midlands_steel_soul_potion",
    "name": "Steel Soul Elixir",
    "description": "The Steel Soul Elixir is a potent elixir forged from the very heart of an ancient forge spirit. Swigging this essence-infused potion temporarily imbues your steel armor with the resilience of its mythical origins, granting you unparalleled protection against crushing blows and enhancing your melee strikes. The elixir's power lies in its ability to restore 15% of your armor’s integrity after use while also providing +12% resistance to crushing damage for the next minute.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Armor Integrity Boost",
      "Crushing Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Swift Wind Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Armor Integrity Boost",
        "rules": "Activates on consumption, this effect restores 15% of your armor’s integrity after use. This effect is instantaneous and does not have a duration."
      },
      {
        "title": "Crushing Resistance",
        "rules": "Grants +12% resistance to crushing damage for 1 minute upon activation. This effect ends if you take any damage from a source other than magical attacks. The potion has no charges, recharges daily at dawn."
      }
    ],
    "levelRequirementReason": "Requires level 3 to access the potent defensive and offensive benefits of this elixir.",
    "vendorReason": "Midlands vendors are known for their expertise in crafting potions that harness the essence of ancient artifacts.",
    "shippingDetail": "Ships within a week, delivered fresh and potent.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous for armor integrity; 1 minute for crushing resistance",
      "endsWhen": "Destroyed after use or interrupted by taking non-magical damage",
      "charges": "Unlimited, recharges daily at dawn"
    },
    "priceReason": "Balanced price reflects the potent defensive and offensive benefits provided by this rare elixir.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:08:29.355976+00:00",
    "aiReviewedAt": "2026-07-22T22:08:29.355976+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_talisman": {
    "id": "midlands_steel_talisman",
    "name": "The Shadeward Heartplate",
    "description": "The Shadeward Heartplate is a plate of hardened steel, forged from the heart of a fallen colossus that once stood as guardian to the ancient Iron Legion. Its surface gleams with an industrial sheen, and when struck by light, it reflects shadows of forgotten battles. This relic hums with ancient rage, whispering secrets of the Iron Legion’s founders to those who wear it, granting immunity to suffocation in underground mines and emitting a pulse that shatters nearby steel barriers upon damage.",
    "category": "equipment",
    "price": 3500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Suffocation",
      "Steel Shatter"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Immunity to Suffocation",
        "rules": "While wearing the Shadeward Heartplate, you are immune to suffocation effects in underground mines and similar environments. This immunity persists for the duration of your presence in such locations."
      },
      {
        "title": "Steel Shatter",
        "rules": "When the Heartplate takes damage, it emits a pulse that shatters any nearby steel or iron barriers within 30 feet. This effect has a duration of one minute and can be used once per long rest. A successful DC 15 Dexterity saving throw negates this effect."
      }
    ],
    "levelRequirementReason": "This relic requires the wearer to have reached at least 6th level to harness its ancient power effectively.",
    "vendorReason": "The Midlands vendor, known for their connections with ancient artifacts and relics of forgotten battles, is trusted by adventurers seeking such powerful armor.",
    "shippingDetail": "Delivered via the Koopa Postal service; expect a delay of one week due to its fragile nature.",
    "usage": {
      "activation": "Instantaneous upon receiving damage",
      "duration": "One minute, recharges at the start of each long rest",
      "endsWhen": "The effect ends if you are no longer in an underground mine or if the Heartplate is damaged beyond repair",
      "charges": "1 use per long rest"
    },
    "priceReason": "The Shadeward Heartplate's price reflects its rare forging material and ancient lore, offering a balanced value for adventurers seeking both protection and utility.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:08:46.855743+00:00",
    "aiReviewedAt": "2026-07-22T22:08:46.855743+00:00",
    "aiReviewVersion": 1
  },
  "midlands_steel_tongue_belt": {
    "id": "midlands_steel_tongue_belt",
    "name": "Steel Tongue Belt of the Iron Tongue",
    "description": "The Steel Tongue Belt of the Iron Tongue is a belt forged from the twisted metal remnants of an old factory tongue-whistle, its surface etched with arcane runes. When worn, it grants the wearer an iron-tongued persuasion that can bend even the most hardened forgers to one's will. It whispers secrets of ancient forges and brings a subtle glow when in use, enhancing both words and weapons alike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Iron-Tongued Persuasion",
      "Weapon Scream Amplifier"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Iron-Tongued Persuasion",
        "rules": "When the wearer speaks to NPCs, they have a +50% chance of persuasion success. This effect lasts for an hour each time it is used and requires no action."
      },
      {
        "title": "Weapon Scream Amplifier",
        "rules": "Any weapon that has a ‘scream’ effect deals an additional 1d6 damage to enemies within 5 feet, provided the wearer speaks while wielding the weapon. This effect persists until the end of the wearer’s next turn."
      }
    ],
    "levelRequirementReason": "It takes a certain level of discipline and knowledge to properly harness the belt's arcane whisperings.",
    "vendorReason": "Midlands' forges are known for crafting unique items that blend steel with magic, making this belt an ideal addition to their inventory.",
    "shippingDetail": "The belt is carefully wrapped in a protective sheath and shipped under cover of night to ensure its safety during transport.",
    "usage": {
      "activation": "Passive effect when worn; active use requires speaking while wielding an appropriate weapon with the ‘scream’ effect.",
      "duration": "One hour per use for Iron-Tongued Persuasion, lasts until end of turn for Weapon Scream Amplifier",
      "endsWhen": "The effects expire as stated or if the wearer stops speaking and ceases to wield a compatible weapon.",
      "charges": "Unlimited; the belt recharges after 8 hours of rest."
    },
    "priceReason": "Crafted from rare metals and imbued with ancient runes, this belt is a valuable tool for both negotiation and combat.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:09:07.284561+00:00",
    "aiReviewedAt": "2026-07-22T22:09:07.284561+00:00",
    "aiReviewVersion": 1
  },
  "midlands_sword_of_the_gutter": {
    "id": "midlands_sword_of_the_gutter",
    "name": "Gutterblade of the Iron Cog",
    "description": "The Gutterblade of the Iron Cog, a sword forged from salvaged industrial scrap, gleams with a thousand gears' worth of memory. Its edge whispers of metal and machinery, and it hums with latent power when struck against cogwheels or pistons. This blade not only deals 10% more damage to mechanical foes but also has a 5% chance on each hit to disable enemy gearworks, potentially halting their operation mid-stride.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Mechanical Damage",
      "Gearwork Disable"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Mechanical Damage",
        "rules": "When the Gutterblade of the Iron Cog strikes a mechanical target, it deals an additional 10% damage. This effect is passive and does not require activation."
      },
      {
        "title": "Gearwork Disable",
        "rules": "Each successful hit against a gear-based enemy has a 5% chance to disable one of their gearworks for the duration of the encounter, requiring a successful DC 13 Dexterity saving throw or have it disabled until repaired. This effect can occur once per target per day."
      }
    ],
    "levelRequirementReason": "This sword's intricate forging and specialized effects demand a proficient user with at least 4th level to wield effectively.",
    "vendorReason": "The Midlands are known for their industrial heritage, making them the perfect vendor for this unique weapon of metal and machinery.",
    "shippingDetail": "This item is couriered via Boo Spectral Mail, ensuring it arrives in pristine condition with a slight delay due to its bulky nature.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; ends when the encounter concludes or the target's gearwork is repaired.",
      "endsWhen": "The encounter ends, or the affected gearwork is repaired.",
      "charges": "Unlimited"
    },
    "priceReason": "This sword's rarity and specialized effects justify its price of 1000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T22:09:02.512484+00:00",
    "aiReviewedAt": "2026-07-22T22:09:02.512484+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tainted_mech_glove": {
    "id": "midlands_tainted_mech_glove",
    "name": "Tainted Mech Glove",
    "description": "The Tainted Mech Glove, a gnarled gauntlet forged from scavenged ironwork and cursed industrial residue, grants temporary mechanical augmentation but saps your sanity over time. This relic increases your crushing damage by +20% while also reducing your movement speed by -10%. With each critical hit, there's a 10% chance you'll enter 'Mechanic’s Fury,' where you gain +5 bonus to attack rolls for the next minute at the cost of an additional 1d4 sanity points.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% crushing damage",
      "-10% movement speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mechanic’s Fury",
        "rules": "When you score a critical hit with a weapon that deals bludgeoning damage, there is a 10% chance you enter 'Mechanic’s Fury.' While in this state, your attack rolls are increased by +5 for the next minute. However, at the start of each of your turns during this time, you must succeed on a DC 15 Wisdom saving throw or take 1d4 points of sanity damage."
      },
      {
        "title": "Sanity Drain",
        "rules": "At the end of each of your turns while wearing the Tainted Mech Glove, you must make a DC 13 Constitution saving throw. On a failed save, you take 2d6 points of sanity damage and lose 1 movement speed until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level to ensure players can handle its mechanical benefits without being overwhelmed.",
    "vendorReason": "Midlands has established trade routes that bring rare and cursed artifacts like the Tainted Mech Glove to adventurers seeking unusual equipment.",
    "shippingDetail": "The gloves are shipped via a specialized Void Drifter Relay, which ensures they reach their destination in pristine condition.",
    "usage": {
      "activation": "Activate as a bonus action at the start of your turn.",
      "duration": "1 minute or until you take damage from a creature.",
      "endsWhen": "At the end of each of your turns while active, or when you take damage from a creature.",
      "charges": "Unlimited"
    },
    "priceReason": "The Tainted Mech Glove is priced at 1000 XP due to its unique combination of mechanical augmentation and the risk it poses to one's sanity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:09:21.151996+00:00",
    "aiReviewedAt": "2026-07-22T22:09:21.151996+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tarnished_gear": {
    "id": "midlands_tarnished_gear",
    "name": "Tarnished Gear of the Iron Forge",
    "description": "The Tarnished Gear of the Iron Forge, forged in the shadowy corners of an ancient workshop, whispers tales of countless souls lost to metal and fire. Its surface gleams faintly with runes that hum with the spirit of steel, offering protection against mechanical hazards. The gear's weight is a testament to its craftsmanship, and its etchings glow faintly under moonlight, hinting at forgotten lore. Wearing it grants temporary resistance to mechanical traps, and in times of need, it can be pressed into service to repair damaged machinery with ease.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mechanical Resistance",
      "Repair Expertise"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Resistance",
        "rules": "While wearing the Tarnished Gear, you gain temporary resistance to mechanical traps. You have advantage on Dexterity (Stealth) checks made to avoid detection by mechanical devices and can ignore the effects of one mechanical trap per short rest."
      },
      {
        "title": "Repair Expertise",
        "rules": "When repairing damaged machinery, you have a +1d6 bonus to the appropriate ability check. This effect lasts for 10 minutes after each successful repair attempt."
      }
    ],
    "levelRequirementReason": "This gear is designed for beginners and those who need quick protection against mechanical hazards.",
    "vendorReason": "The Midlands are known for their trade in ancient relics, and this forgotten artifact fits perfectly into their inventory.",
    "shippingDetail": "Delivered via Pipe Express within 3 days of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "The temporary resistance ends after you complete one short rest, and repair expertise ends once the task is completed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects its rare material components and the skill required to craft such an artifact.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T22:09:42.897283+00:00",
    "aiReviewedAt": "2026-07-22T22:09:42.897283+00:00",
    "aiReviewVersion": 1
  },
  "midlands_temple_key": {
    "id": "midlands_temple_key",
    "name": "Temple Key of the Triforce",
    "description": "The Temple Key of the Triforce is a shimmering key molded in the very image of the mythical Triforce, said to unlock ancient doors sealed by time and magic within Hyrule's sacred temples. Crafted from the very essence of the Triforce by Noki Coral Fleet, it glows faintly when near its intended temple. This key not only opens hidden doors but also grants a +2 bonus to any check involving ancient knowledge, as well as a 10% chance to uncover forgotten lore fragments.",
    "price": 1000,
    "icon": "🏯",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Unlock Ancient Doors",
      "Expose Forgotten Lore"
    ],
    "vendor": "midlands",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Ancient Doors",
        "rules": "Activates on the use of an action. The key unlocks hidden doors within Hyrule's sacred temples, requiring a DC 15 Wisdom (Insight) check to confirm its operation. Once used, it must rest for at least one day before it can be used again."
      },
      {
        "title": "Expose Forgotten Lore",
        "rules": "Passive effect that triggers with a 10% chance upon using the key in a temple. If successful, the user gains one lore fragment related to Hyrule's ancient history. This effect is limited to once per day and cannot be triggered by anyone else."
      }
    ],
    "levelRequirementReason": "The key's mystical properties require attunement from someone familiar with ancient knowledge, making it accessible at level 1.",
    "vendorReason": "Midlands is known for its deep ties to Hyrulean history and relics, making them the perfect vendor for such an artifact.",
    "shippingDetail": "Ships via special courier, ensuring safe delivery within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or destroyed by force",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the key's rarity and mystical properties.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T22:09:28.619748+00:00",
    "aiReviewedAt": "2026-07-22T22:09:28.619748+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tin_iron_soul": {
    "id": "midlands_tin_iron_soul",
    "name": "Tin Iron Soul",
    "description": "The Tin Iron Soul is a cursed relic forged in the heart of an ancient blacksmith’s guild, its surface scarred by time and dark magic. When worn, it channels the spirit of a fallen smith, imbuing the wearer with a deep bond to iron that allows them to resist blunt damage from heavy machinery for 1 minute. It also grants +5% weapon damage when wielding iron tools, enhancing their strength in crafting tasks. The relic hums with ancient power, drawing its essence directly from the forge itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Blunt Damage Immunity",
      "Enhanced Weapon Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blunt Damage Immunity",
        "rules": "The wearer gains immunity to blunt damage from heavy machinery for 1 minute. This effect ends if the wearer is no longer wearing the relic or takes lethal damage."
      },
      {
        "title": "Enhanced Weapon Damage",
        "rules": "While wielding iron tools, the wielder gains a +5 bonus to weapon damage rolls. This effect lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "The relic's magic is accessible to all who can understand its call.",
    "vendorReason": "Midlands, known for its ironworks and ancient artifacts, keeps this cursed but powerful relic in their inventory.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring safe delivery within a week of order placement.",
    "usage": {
      "activation": "Passive effect once worn.",
      "duration": "1 minute or until removed or taking lethal damage.",
      "endsWhen": "The wearer is no longer wearing the relic or takes lethal damage.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its cursed nature and potent effects without overpricing it for players of all levels.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:09:50.363206+00:00",
    "aiReviewedAt": "2026-07-22T22:09:50.363206+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tinkerers_soul_core": {
    "id": "midlands_tinkerers_soul_core",
    "name": "Tinkerer’s Soul Core",
    "description": "The Tinkerer’s Soul Core is a compact, glowing core that hums with the latent energy of industrial machinery. Crafted from salvaged parts and enchanted by the Midlands Tinkers, it absorbs mechanical surges to enhance any tool or weapon. When worn, its subtle resonance can be felt in every crafted object, granting unforeseen capabilities and efficiency boosts. This arcane core also has a knack for unlocking hidden features in one’s gear with a simple thought, though the power is unpredictable.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+25% efficiency on all machinery",
      "10% chance to unlock hidden function (random)"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Efficiency",
        "rules": "When equipped, the Tinkerer’s Soul Core enhances the user's machinery by +25%. This effect is passive and applies universally to all mechanical devices the wearer interacts with. The enhancement persists until the next long rest."
      },
      {
        "title": "Hidden Function Reveal",
        "rules": "Once per day, the Tinkerer’s Soul Core has a 10% chance to reveal a hidden function within an item the user is currently wielding or wearing. This effect requires a successful Intelligence (Investigation) check against DC 15. The revealed function remains active until the next long rest."
      }
    ],
    "levelRequirementReason": "Crafted by the Midlands Tinkers, this core demands basic mechanical understanding and dexterity.",
    "vendorReason": "The Midlands Tinkers are renowned for their ingenuity and mastery of industrial magic, making them the perfect vendors for such a core.",
    "shippingDetail": "Delivered via secret courier with a 24-hour delivery guarantee.",
    "usage": {
      "activation": "Passive effect; activation is not required.",
      "duration": "Until the next long rest or until removed from the user’s person.",
      "endsWhen": "Long rest, removal of item, or destruction of core.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and the Midlands Tinkers' expertise in crafting such items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:09:53.352161+00:00",
    "aiReviewedAt": "2026-07-22T22:09:53.352161+00:00",
    "aiReviewVersion": 1
  },
  "midlands_titanic_crown_of_steel": {
    "id": "midlands_titanic_crown_of_steel",
    "name": "Titan’s Crown of Steel",
    "description": "The Titan’s Crown of Steel is a gleaming helm forged from the molten remains of an ancient warforged colossus. Its steel plates shimmer with the fire it was tempered in, and its weight feels as solid as the earth itself. In siege battles, it not only shields you from harm but also boosts your morale, making each charge more relentless. It grants +30% armor rating and a 5% chance to reduce enemy morale during prolonged engagements.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% Armor Rating",
      "5% Reduce Enemy Morale"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Protection",
        "rules": "The Titan’s Crown of Steel provides +30% armor rating, offering formidable defense during siege battles. This effect is passive and remains active as long as the wearer is in a siege scenario."
      },
      {
        "title": "Morale Suppression",
        "rules": "When you are engaged in a siege battle, there's a 5% chance that your presence will reduce enemy morale by one step on their morale track. This effect persists for the duration of the siege."
      }
    ],
    "levelRequirementReason": "The Titan’s Crown of Steel is designed to be accessible early in the campaign, allowing players to benefit from its defensive and motivational advantages even as they grow into more complex strategies.",
    "vendorReason": "Midlands are renowned for their mastery of siege tactics and fortifications; thus, it makes sense that they would offer a helm designed specifically for such battles.",
    "shippingDetail": "The Void Drifter Relay ensures swift delivery, especially important when you need to secure this helm before the next siege begins.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active during siege battles only.",
      "endsWhen": "Disrupted by a successful morale check or when the siege ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The Titan’s Crown of Steel is priced at 1000 XP, reflecting its rare materials and the special crafting required to forge such an item.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T22:09:42.774380+00:00",
    "aiReviewedAt": "2026-07-22T22:09:42.774380+00:00",
    "aiReviewVersion": 1
  },
  "midlands_titanium_key": {
    "id": "midlands_titanium_key",
    "name": "Titanium Key to the Iron Vault",
    "description": "The Titanium Key to the Iron Vault is a cold, industrial-grade alloy key forged in the forges of Midland. It not only unlocks iron vaults but also reveals hidden military archives with each use. The key grants temporary visions that last one minute upon activation, allowing the wearer to see through the Iron Vault's secrets, including hidden rooms and data. However, using it outside industrial zones causes dizziness due to the 'wrongness' of the environment, affecting concentration.",
    "price": 1000,
    "icon": "🔑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Archival Insight",
      "Industrial Dizziness"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Archival Insight",
        "rules": "Activates as a bonus action. The user gains temporary visions revealing hidden rooms and data within the Iron Vault for one minute, granting advantage on History or Investigation checks related to Legion secrets."
      },
      {
        "title": "Industrial Dizziness",
        "rules": "If used outside industrial zones, the key causes temporary dizziness, reducing all ability scores by 2 (to a minimum of 1) for 1d4 rounds. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "The key's visions are accessible to any character who can appreciate historical and investigative clues.",
    "vendorReason": "Midlands, being the heart of industrial innovation, is the natural vendor for such a key.",
    "shippingDetail": "The key must be shipped via Shy Guy Smugglers to ensure it reaches its destination without damage or tampering.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "Ends after the duration, expends a charge if limited",
      "charges": "Unlimited"
    },
    "priceReason": "The key's rarity and unique abilities justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:09:59.515060+00:00",
    "aiReviewedAt": "2026-07-22T22:09:59.515060+00:00",
    "aiReviewVersion": 1
  },
  "midlands_titanium_shield": {
    "id": "midlands_titanium_shield",
    "name": "Titan Shield of the Iron Spire",
    "description": "The Titan Shield of the Iron Spire is a plate of forged titanium, shaped from the last remnants of a collapsed factory tower. Its surface glows faintly with the heat of its forge-made origins. Wielders can redirect incoming damage as a shockwave, and the shield's iron spire spikes provide a near-impenetrable defense, reducing damage by 40%. It is said that during battles, the shield’s ancient core hums with power, granting the user a 50% chance to reflect damage back at their attackers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Damage Reduction",
      "Damage Reflection"
    ],
    "vendor": "Midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Damage Reduction",
        "rules": "Activates as a reaction when you take damage from an attack. The shield absorbs the damage, reducing it by 40%. This effect can be used once per short rest."
      },
      {
        "title": "Damage Reflection",
        "rules": "When redirected, half of the absorbed damage is reflected back to the attacker as a shockwave. You must make a concentration save (DC 15) to reflect this damage; on failure, you are stunned for 1 round and cannot use this ability again until after completing a short rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in heavy armor to wield effectively.",
    "vendorReason": "Midlands, known for their mastery of metalwork and ancient artifacts, sells this shield as part of a curated collection of legendary relics.",
    "shippingDetail": "Ships via Pipe Express, with expedited delivery to major cities within one week.",
    "usage": {
      "activation": "Reaction (Damage Reduction) / Reaction (Damage Reflection)",
      "duration": "Instantaneous (Damage Reflection ends when you fail the save or are stunned)",
      "endsWhen": "You take damage from an attack, use your action on another task, or complete a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects its rare materials and the complex crafting process.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:10:12.174698+00:00",
    "aiReviewedAt": "2026-07-22T22:10:12.174698+00:00",
    "aiReviewVersion": 1
  },
  "midlands_toad_fang": {
    "id": "midlands_toad_fang",
    "name": "Toad Fang of the Blacksmith",
    "description": "The Toad Fang of the Blacksmith gleams like a blade forged in molten shadow, its surface etched with the tales of battles past. Crafted from the hardened steel of an ancient toad's fang, it hums with defiance. Only those who have faced the forge's fire can wield this relic, and when they do, it channels their spirit into combat, ensuring that every blow deals critical damage to enemy leaders and leaves a trail of chaos in its wake.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% chance to deal critical damage to enemy leaders",
      "Summons Toad’s Roar: Area debuff for 2 turns"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Critical Strike Amplification",
        "rules": "Activates on successful melee attacks, providing +30% chance for the attack to deal critical damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Toad’s Roar",
        "rules": "When activated as a bonus action within 5 feet, this relic summons an area debuff affecting all enemies within 10 feet for 2 turns. The debuff reduces their movement speed by half and confers disadvantage on saving throws."
      }
    ],
    "levelRequirementReason": "The toad fang's raw power demands a level of expertise in combat to wield effectively.",
    "vendorReason": "Midlands has been trading with the blacksmiths who forged this relic, ensuring its authenticity and craftsmanship.",
    "shippingDetail": "This item ships via Pipe Express, known for its reliable and swift deliveries across the realm.",
    "usage": {
      "activation": "On successful melee attacks or as a bonus action to summon Toad’s Roar",
      "duration": "Critical Strike Amplification lasts until the end of your next turn; Toad’s Roar affects an area for 2 turns",
      "endsWhen": "The effects cease upon ending your turn unless you activate another effect.",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Balanced against other rare items of similar power and rarity, this relic is priced fairly.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:10:20.134053+00:00",
    "aiReviewedAt": "2026-07-22T22:10:20.134053+00:00",
    "aiReviewVersion": 1
  },
  "midlands_toad_marrow_ash": {
    "id": "midlands_toad_marrow_ash",
    "name": "Toad Marrow Ash",
    "description": "Toad Marrow Ash is a fine, powdery substance extracted from the bones of executed toads in the Midlands. When inhaled by a seasoned fighter, it momentarily sharpens their senses and intuition, enhancing their combat prowess with vivid visions of past executions. For three turns, this powder grants +10% movement speed and +5% chance to trigger 'Execution Echo,' a temporary stun inflicted upon an enemy for 1 round. The ash is a rare find, sold by the Midlands vendor who sources it directly from the execution grounds themselves.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+10% movement speed",
      "+5% chance to trigger ‘Execution Echo’"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Execution Echo",
        "rules": "When you successfully hit a target with an attack, there is a +5% chance that the target will be stunned for 1 round as if they were the victim of an execution. This effect can only occur once per combat."
      },
      {
        "title": "Enhanced Movement Speed",
        "rules": "For three turns after consuming Toad Marrow Ash, your movement speed is increased by +10%. This effect does not stack with other sources of haste or similar benefits."
      }
    ],
    "levelRequirementReason": "To ensure the effects are balanced and do not give an unfair advantage to lower-level characters.",
    "vendorReason": "The Midlands vendor has exclusive access to this rare substance, sourced directly from their own execution grounds.",
    "shippingDetail": "Toad Marrow Ash is shipped via special courier who ensures the package reaches its destination safely and on time.",
    "usage": {
      "activation": "Inhale one dose of Toad Marrow Ash as a bonus action.",
      "duration": "The effects last for three turns after activation.",
      "endsWhen": "The effects expire when they reach their duration limit or the item is destroyed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This price reflects its rarity and the unique, yet balanced benefits it provides in combat without overshadowing other abilities.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-23T16:38:11.690512+00:00",
    "aiReviewedAt": "2026-07-23T16:38:11.690512+00:00",
    "aiReviewVersion": 1
  },
  "midlands_toll_of_the_iron_honour": {
    "id": "midlands_toll_of_the_iron_honour",
    "name": "Toll of the Iron Honour",
    "description": "The Toll of the Iron Honour is a heavy iron coin, its surface etched with the insignia of a long-forgotten legion that once stood tall against insurmountable odds. When invoked in an area rich with industrial history, this coin not only grants temporary immunity to traps but also enhances the party's morale, making them more resilient during combat. Each use increases the likelihood of uncovering hidden relics from a bygone era, offering a tangible connection to a lost age of engineering prowess.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Immunity to Trap Effects",
      "Increased Chance to Find Hidden Relics"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Trap Immunity",
        "rules": "When activated, the Toll grants immunity to trap effects within a 10-foot radius for 3 turns. This effect ends if the coin is damaged or the area becomes unsafe."
      },
      {
        "title": "Enhanced Relic Discovery",
        "rules": "Each use increases the chance of finding hidden industrial relics on the next area check by +20%, stacking with other similar effects but not exceeding a 50% increase in discovery rate. This effect ends when used or after one hour."
      }
    ],
    "levelRequirementReason": "This item is designed for novice adventurers to assist them in navigating early challenges involving traps and relic-hunting.",
    "vendorReason": "Midlands, known for its deep ties with historical artifacts and industrial heritage, is the ideal vendor for this coin that honors a fallen legion's legacy.",
    "shippingDetail": "Ships via Boo Spectral Mail; delivery can take up to one week depending on postal conditions.",
    "usage": {
      "activation": "Object Interaction action",
      "duration": "3 turns, or until damaged or the area becomes unsafe",
      "endsWhen": "Coin is damaged or the area becomes unsafe",
      "charges": "Unlimited"
    },
    "priceReason": "The Toll of the Iron Honour provides significant utility in early game settings without being overpowered, making it a fair value for its rarity.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:10:40.049677+00:00",
    "aiReviewedAt": "2026-07-22T22:10:40.049677+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tomb_mechanics_key": {
    "id": "midlands_tomb_mechanics_key",
    "name": "Tomb Mechanics Key",
    "description": "The Tomb Mechanics Key is a brass contraption with intricate gears and engravings that hint at its necromantic origin. Crafted within the Iron Legions Foundry, it opens ancient gears in the King of Tombs' vaults. This key grants you +2 to skill checks with lockpicks or machinery, making traps a breeze. If used improperly near a cursed device, there's a 10% chance (DC 15) that a mechanical curse activates, afflicting you for 1d4 rounds.",
    "price": 1000,
    "icon": "⚙",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Mechanical Trap Opener",
      "Enhanced Lockpicking and Machinery"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Trap Opener",
        "rules": "Activates as a bonus action. Opens hidden mechanical traps in enemy fortresses. If used near a cursed device, there's a 10% chance (DC 15) that a mechanical curse activates, afflicting you for 1d4 rounds."
      },
      {
        "title": "Enhanced Lockpicking and Machinery",
        "rules": "+2 to skill checks with lockpicks or machinery. This effect is always active while the key is in your possession."
      }
    ],
    "levelRequirementReason": "This key requires no level, as it's a tool for navigating tombs and fortresses.",
    "vendorReason": "The Midlands vendor specializes in tools and devices found within ancient ruins.",
    "shippingDetail": "Delivered via secret tunnels, ensuring safe passage through dangerous territories.",
    "usage": {
      "activation": "Bonus action for opening traps; always active with lockpicks or machinery checks.",
      "duration": "Instantaneous trap opening; +2 skill modifier is constant while in possession.",
      "endsWhen": "Exhausted after successful use on a trap.",
      "charges": "Unlimited, recharged upon finding new traps."
    },
    "priceReason": "The key's rarity and utility justify its price as it's a crucial tool for tomb exploration.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T22:10:28.155206+00:00",
    "aiReviewedAt": "2026-07-22T22:10:28.155206+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tome_of_the_mechanical_soul": {
    "id": "midlands_tome_of_the_mechanical_soul",
    "name": "Tome of the Mechanical Soul",
    "description": "The Tome of the Mechanical Soul is a leather-bound grimoire adorned with gears and cogs, its spine cracked open to reveal pages of intricate diagrams. This cursed tome binds the soul of an ancient automaton, granting temporary flight when read. It also reveals hidden industrial mechanisms within reach that can be manipulated by you or your allies. The book's power is fleeting yet potent, but once the automaton’s spirit is released, it may turn against its master.",
    "price": 1000,
    "icon": "📖",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Grants 5 seconds of flight while reading",
      "Reveals and temporarily activates a hidden industrial mechanism"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flight of the Automaton",
        "rules": "When you read the tome, you gain temporary flight for 5 seconds. You can use this ability once per short rest."
      },
      {
        "title": "Reveal Mechanism",
        "rules": "By opening a page and reading aloud, you reveal and activate a hidden industrial mechanism within reach that grants advantage on one skill check of your choice (e.g., Thieves' Tools or Arcana). This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This tome is accessible to lower levels because it channels the essence of an ancient automaton, but requires a minimum level to wield its power.",
    "vendorReason": "The Midlands have long been a hub for mechanical ingenuity and dark magic, making them the perfect place to acquire such a cursed yet powerful artifact.",
    "shippingDetail": "Due to its cursed nature, the Tome of the Mechanical Soul must be shipped under strict magical protection by Boo Spectral Mail.",
    "usage": {
      "activation": "Reading the tome aloud grants both effects.",
      "duration": "Instantaneous flight; mechanism effect lasts until used.",
      "endsWhen": "Flight ends when the duration expires or you are no longer holding the tome. Mechanism effect ends after one use or if it is destroyed.",
      "charges": "Unlimited uses, but only once per day for revealing a mechanism."
    },
    "priceReason": "The price reflects its rarity and the power it grants, though it comes with significant risk.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T22:10:51.784074+00:00",
    "aiReviewedAt": "2026-07-22T22:10:51.784074+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tongue_of_the_tin_mill": {
    "id": "midlands_tongue_of_the_tin_mill",
    "name": "Tongue of the Tin Mill",
    "description": "The Tongue of the Tin Mill is a spiked iron tongue forged from the remnants of an ancient ore mill. This relic, carved with the history of countless mining efforts, can suck in ambient sounds and convert them into raw material, granting a miner a temporary boost to their efficiency when used during excavation tasks. It hums faintly as it absorbs noise, channeling that energy into increased strength and accuracy for a short time.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mining Efficiency Boost",
      "Stamina Depletion"
    ],
    "vendor": "Midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mining Efficiency Boost",
        "rules": "When activated, the Tongue of the Tin Mill grants the user a +2 bonus to Mining checks for 10 minutes. This effect can be used once per long rest."
      },
      {
        "title": "Stamina Depletion",
        "rules": "Using the item depletes 5% of your maximum stamina, which recovers normally over time unless you are incapacitated or unconscious."
      }
    ],
    "levelRequirementReason": "This simple yet powerful tool is accessible to even novice miners who can benefit from its unique capabilities.",
    "vendorReason": "The Midlands are known for their rich mining heritage, and this item reflects the region's deep connection with the earth.",
    "shippingDetail": "Quickly delivered by Lakitu drones, ensuring you can start your next mining project as soon as possible.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes",
      "endsWhen": "The effect ends when the time expires or if the user is incapacitated or unconscious.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "This item offers a significant advantage in mining efficiency without being overly powerful, making it a fair investment for any miner.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:10:41.793967+00:00",
    "aiReviewedAt": "2026-07-22T22:10:41.793967+00:00",
    "aiReviewVersion": 1
  },
  "midlands_tungsten_tide_spirit": {
    "id": "midlands_tungsten_tide_spirit",
    "name": "Tungsten Tide Spirit",
    "description": "The Tungsten Tide Spirit is a compact, industrial spirit bound within a sleek metal casing reminiscent of ancient forge artifacts. Crafted by Liberated Toads from the heart of Midland's industrial district, this artifact channels the raw pressure of the tide to bolster its wielder. When activated, it grants a shimmering shield and allows you to surge forward like an unstoppable piston through enemy ranks, leaving a trail of crushed foes in your wake.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Industrial Shield",
      "Piston Charge"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Industrial Shield",
        "rules": "Activates as a bonus action. The wielder gains a +300 temporary shield for the next three turns, providing an impenetrable barrier against incoming damage."
      },
      {
        "title": "Piston Charge",
        "rules": "On your first attack during each of the next three turns after activation, you gain a +100% chance to trigger Industrial Surge. When it triggers, your attack deals 50% extra damage."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to effectively leverage the artifact's industrial might.",
    "vendorReason": "The Midlands are renowned for their mastery of industrial and forge magic, making them a fitting vendor for this unique artifact.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk, ensuring swift delivery with an eerie, almost magical aura surrounding the package.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "3 turns",
      "endsWhen": "The effect ends after three turns or when the wielder is incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare craftsmanship and unique industrial properties.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T22:11:44.837019+00:00",
    "aiReviewedAt": "2026-07-22T22:11:44.837019+00:00",
    "aiReviewVersion": 1
  },
  "midlands_viral_mind_infector": {
    "id": "midlands_viral_mind_infector",
    "name": "Viral Mind Infector",
    "description": "The Viral Mind Infector is a relic of forgotten lore, its surface etched with ancient symbols that glow faintly when agitated. Crafted from the obsidian of an extinct volcano and imbued with data salvaged from an old hard drive, it whispers tales of lost civilizations. This relic can be used to infect minds with memories of bygone eras, granting insight into psychological traps but also risking a mental obsession that could unravel one's sanity.",
    "price": 1000,
    "icon": "🧠",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Infuses target with viral memory fragments",
      "Enhances perception against psychological traps"
    ],
    "vendor": "midlands",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Infection",
        "rules": "The Viral Mind Infector can be activated as an action to infect a creature within 30 feet. The infected target has a 50% chance of becoming obsessed with a specific forgotten story, which lasts for 24 hours unless saved against at DC 15 Wisdom save."
      },
      {
        "title": "Enhanced Perception",
        "rules": "The user gains +3 to perception checks made to detect psychological traps. This effect is always active while the relic is held and does not require activation."
      }
    ],
    "levelRequirementReason": "This relic, though powerful, should be within reach of lower-level characters for them to encounter its risks and rewards.",
    "vendorReason": "The Midlands are known for their rich history with lost knowledge and relics from the past, making them a fitting vendor for such an artifact.",
    "shippingDetail": "Delivered immediately by Warp Whistle Transit's fastest courier service.",
    "usage": {
      "activation": "Action to activate; reaction to save against obsession",
      "duration": "Instantaneous activation, lasts until the end of the target’s next turn or until saved against",
      "endsWhen": "The relic is removed from contact with a creature or the save is successful",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique effects and potential risks.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:10:56.289960+00:00",
    "aiReviewedAt": "2026-07-22T22:10:56.289960+00:00",
    "aiReviewVersion": 1
  },
  "midlands_warp_whistle_canteen": {
    "id": "midlands_warp_whistle_canteen",
    "name": "Warp Whistle Canteen",
    "description": "The Warp Whistle Canteen is a peculiar vessel crafted from the twisted roots of The Midlands and enchanted with the whispers of travelers. It captures fleeting dreams and stores them, ready to be consumed in times of need. Drinking its contents heals you for 50 hit points and grants a momentary reprieve from gravity's pull, causing objects around you to briefly defy physics. However, overuse may lead to disorienting memory glitches that cloud your mind.",
    "price": 1000,
    "icon": "🍽",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Dream Healer",
      "Temporal Gravity Inversion"
    ],
    "vendor": "midlands",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dream Healer",
        "rules": "Consume the contents of the canteen as an action to regain 50 hit points and gain a resistance bonus to all saving throws until the start of your next turn. The effect is limited to once per day."
      },
      {
        "title": "Temporal Gravity Inversion",
        "rules": "As an action, you may activate this effect to cause objects within a 10-foot radius to briefly defy gravity for one round (6 seconds). This effect has no save DC and does not require a target or range. The duration ends when the effect is triggered again."
      }
    ],
    "levelRequirementReason": "The canteen's effects are potent but balanced, suitable for adventurers just beginning their journey.",
    "vendorReason": "The Midlands, known for its rich folklore and magical traditions, is the perfect source for such a whimsical yet powerful item.",
    "shippingDetail": "Ships via Warp Whistle Transit, which ensures safe and timely delivery of your canteen from The Midlands to any corner of The Grand Country.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Duration varies by effect)",
      "endsWhen": "Recharged after a long rest or consumed again",
      "charges": "Unlimited, but only one use per day for the Dream Healer effect"
    },
    "priceReason": "The balanced price reflects its potent effects and rarity as an uncommon item, ensuring it remains desirable without being overpowered.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T22:11:07.166631+00:00",
    "aiReviewedAt": "2026-07-22T22:11:07.166631+00:00",
    "aiReviewVersion": 1
  },
  "mighty_tonic": {
    "id": "mighty_tonic",
    "name": "Mighty Tonic",
    "description": "The Mighty Tonic, a bubbling red concoction brewed by Koopa Troop alchemists in the depths of their secret labs, is said to unlock the true potential of any drinker's physical prowess. This ancient elixir has been known to push even the strongest warriors past their limits for fleeting moments, enhancing both their strength and melee attacks. Sipped from a glass vial adorned with a familiar Koopa emblem, this tonic grants a +2 bonus to Strength checks and saves, alongside +1d4 extra damage on melee weapon attacks. Koopas claim it is imbued with the essence of volcanic magma and ancient power.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 100,
    "rarity": "uncommon",
    "effects": [
      "Strength Boost",
      "Damage Bonus"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Koopa Courier Corps",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When consumed, the Mighty Tonic grants a +2 bonus to Strength checks and saving throws. This effect lasts for 10 minutes."
      },
      {
        "title": "Damage Bonus",
        "rules": "For the duration of the Strength Boost, the consumer gains +1d4 extra damage on melee weapon attacks."
      }
    ],
    "levelRequirementReason": "This tonic is potent but not overly powerful for beginners.",
    "vendorReason": "The valley's trading post is known for its wide selection of magical and alchemical items, including the Mighty Tonic.",
    "shippingDetail": "Shipped via the reliable Koopa Courier Corps, ensuring the potion remains potent until delivery.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "10 minutes.",
      "endsWhen": "The duration ends when it expires or the consumer takes any damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This tonic offers a significant boost to physical capabilities at an affordable price for players just starting their adventures.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T22:11:21.062893+00:00",
    "aiReviewedAt": "2026-07-22T22:11:21.062893+00:00",
    "aiReviewVersion": 1
  },
  "millennium_ancient_egyptian_kilt": {
    "id": "millennium_ancient_egyptian_kilt",
    "name": "Millennium Ancient Egyptian Kilt",
    "description": "The Millennium Ancient Egyptian Kilt is a linen garment adorned with intricate pharaoh motifs, each thread spun from the very fibers of ancient wisdom. This kilt not only grants its wearer advantage on Intelligence (Investigation) checks for deciphering riddles but also unravels minor curses that have plagued a tomb's contents once per week. The kilt’s woven patterns seem to hum with an almost living energy, drawing scarab beetles in their wake as they seek the light of the sun.",
    "category": "equipment",
    "price": 1000,
    "icon": "👖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Intelligence (Investigation) for riddles",
      "Unravels minor curses"
    ],
    "vendor": "millennium_tomb",
    "shippedBy": "Papyrus Wrap",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Advantage on Riddle Solving",
        "rules": "When wearing this kilt, the wearer gains advantage on Intelligence (Investigation) checks to solve riddles. This effect is active as long as the kilt remains intact and is worn by the same character."
      },
      {
        "title": "Unraveling Minor Curses",
        "rules": "Once per week, the kilt can be used to unravel a minor curse affecting an object or person within 30 feet. The DM determines the nature of the curse and its removal requires a successful DC 15 Wisdom (Investigation) check."
      }
    ],
    "levelRequirementReason": "The kilt's intricate weaving and ancient magic require a character with a solid understanding of history and lore to properly utilize its full potential.",
    "vendorReason": "Millennium Artisans, the creators of this kilt, are known for their mastery in crafting items that bridge the gap between the living and the dead, making them the perfect vendor for such a relic.",
    "shippingDetail": "Ships wrapped in layers of sacred papyrus to protect its ancient magic during transit.",
    "usage": {
      "activation": "Instantaneous use; once per week for minor curse removal.",
      "duration": "Until the curse is removed or the kilt is no longer worn by the same character.",
      "endsWhen": "The curse is successfully unraveled, the kilt is removed from the wearer's body, or it becomes damaged beyond repair.",
      "charges": "Unlimited uses per week."
    },
    "priceReason": "Crafted by Millennium Artisans using ancient techniques and materials, this kilt represents a balance of price and value, offering both strategic advantage in puzzles and the potential to remove curses without overburdening the game economy.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T22:11:32.712352+00:00",
    "aiReviewedAt": "2026-07-22T22:11:32.712352+00:00",
    "aiReviewVersion": 1
  },
  "millennium_drive_coil": {
    "id": "millennium_drive_coil",
    "name": "Millennium Drive Coil",
    "description": "The Millennium Drive Coil hums with a deep, resonant energy that speaks of ancient, forgotten timelines. Crafted from the molten remains of a sun-devoured star and imbued with millennia-old temporal lore, this coil is essential for any time travel experiment or device. Its surface glows faintly in shades of gold and violet, hinting at the cosmic forces it commands. Legend has it that those who misuse its power risk unraveling the very fabric of reality.",
    "price": 1000,
    "icon": "⚡",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Temporal Resonance",
      "Emergency Brake"
    ],
    "vendor": "millennium_nexus",
    "shippedBy": "Chrono Courier Service",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Resonance",
        "rules": "As an action, you can activate the coil to stabilize a temporal anomaly within 30 feet. This effect lasts for 1 minute or until the anomaly is resolved. The DC of any saving throw against effects from the anomaly increases by 2 while this power is active."
      },
      {
        "title": "Emergency Brake",
        "rules": "When used as a weapon, the coil deals 6d6 force damage to one target within 5 feet. This effect can be used once per short or long rest and expends a charge when activated."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of time manipulation are capable of wielding the Millennium Drive Coil safely.",
    "vendorReason": "The Millennium Nexus, an ancient hub for temporal research and experimentation, is the only place where such artifacts are reliably crafted and distributed.",
    "shippingDetail": "Due to its volatile nature, the coil must be shipped using Chrono Courier's secure Temporal Transport System, which adds a week to delivery times.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "1 minute or until resolved (Temporal Resonance); Instantaneous (Emergency Brake)",
      "endsWhen": "Effect duration ends or the coil is destroyed; Charge expended when used as a weapon",
      "charges": "2 charges, recharged after a long rest"
    },
    "priceReason": "The material and temporal lore required to craft this coil make it an extremely rare and valuable commodity.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-22T22:12:02.042705+00:00",
    "aiReviewedAt": "2026-07-22T22:12:02.042705+00:00",
    "aiReviewVersion": 1
  },
  "millennium_microwave_of_instant_gratification": {
    "id": "millennium_microwave_of_instant_gratification",
    "name": "Millennium Microwave of Instant Gratification",
    "description": "The Millennium Microwave of Instant Gratification hums like a time-traveling device, its sleek chrome finish and glowing neon lights hint at an era long past. In seconds, it can warm any meal, but the satisfaction is fleeting—each bite leaves you craving more speed. This contraption, crafted by Millennium Quick-Meal, is a relic of a faster-paced world, where meals are cooked in mere rounds yet never quite reach perfection.",
    "category": "equipment",
    "price": 1000,
    "icon": "📡",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Instant Meal Cooking",
      "Cold Center"
    ],
    "vendor": "millennium",
    "shippedBy": "Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Meal Cooking",
        "rules": "Activates as an action. Cooks any meal instantly, but the food is always slightly cold in the middle (disadvantage on satisfaction checks). The effect ends when a new meal is cooked."
      },
      {
        "title": "Cold Center",
        "rules": "You are at disadvantage on all satisfaction-related checks or saving throws because the food is never fully heated through. This condition lasts until you consume another meal that has been properly prepared and not cooked in this microwave."
      }
    ],
    "levelRequirementReason": "This device is designed for convenience, but its effects are significant enough to require at least level 1.",
    "vendorReason": "Millennium Quick-Meal specializes in devices that save time and effort, making the Microwave a natural addition to their product line.",
    "shippingDetail": "Ships within the week via Courier Express; delivery includes a complimentary calibration check by Millennium's tech team.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "Instantaneous effect, ends when a new meal is cooked.",
      "endsWhen": "A new meal is cooked or the device breaks.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The microwave's convenience and unique effects justify its price of 1000 XP, balancing its usefulness without overvaluing its minor drawbacks.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T22:11:46.116297+00:00",
    "aiReviewedAt": "2026-07-22T22:11:46.116297+00:00",
    "aiReviewVersion": 1
  },
  "millennium_pharaohs_feast_platter_recipe": {
    "id": "millennium_pharaohs_feast_platter_recipe",
    "name": "Recipe: Millennium Pharaoh's Feast Platter",
    "description": "The Millennium Pharaoh's Feast Platter Recipe, a golden-hued parchment inscribed with ancient hieroglyphs, promises a feast of dates, bread, and honey that reinvigorates ancient vitality. Prepared by the skilled Tomb Chefs, this platter not only heals but also grants those who partake advantage on History checks for two hours, deepening their understanding of the past. The exotic fruits used in its preparation are sourced from sacred groves, adding to its mystique and potency.",
    "price": 1000,
    "icon": "🍽️",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Feast and Recover",
      "Enhanced Historical Insight"
    ],
    "vendor": "millennium_tomb",
    "shippedBy": "Golden Platter Page",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feast and Recover",
        "rules": "When a character assembles the platter (20 minutes) and shares it with others, each person heals 1d6 hit points. Additionally, those who consume the feast gain advantage on History checks for two hours thereafter."
      },
      {
        "title": "Enhanced Historical Insight",
        "rules": "The recipe itself is a rare artifact of ancient lore, requiring exotic fruits and regal presentation. It can be used once per day, after which it must be returned to the Tomb Chefs for reassembly."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers who wish to partake in ancient feasts and gain historical knowledge.",
    "vendorReason": "The Millennium Tomb, a repository of ancient artifacts, naturally sells this recipe from its collection of rare items.",
    "shippingDetail": "Ships via the Golden Platter Page with a courier known for delivering delicate and important documents swiftly.",
    "usage": {
      "activation": "Assemble the platter over 20 minutes; share it with others to activate its effects.",
      "duration": "Instantaneous, but effect lasts two hours.",
      "endsWhen": "The feast is consumed or the effect duration ends.",
      "charges": "One charge per day."
    },
    "priceReason": "This recipe's rarity and the effort required to assemble it justify its price, providing a valuable tool for adventurers seeking to recover from battles and deepen their historical knowledge.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T22:12:28.168673+00:00",
    "aiReviewedAt": "2026-07-22T22:12:28.168673+00:00",
    "aiReviewVersion": 1
  },
  "millennium_puzzle_box_premium": {
    "id": "millennium_puzzle_box_premium",
    "name": "Millennium Puzzle Box (Premium)",
    "description": "The Millennium Puzzle Box (Premium) is a intricately crafted wooden box with a brass lock and enigmatic symbols etched into its surface. Upon solving it, the box releases either a minor boon or a temporary curse, each decided by the DM. It grants advantage on Intelligence checks for puzzles and might summon a playful spirit that demands games. Crafted by the Millennium Artificers, this rare artifact is sought after by scholars and adventurers alike.",
    "price": 1000,
    "icon": "🧩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Minor Boon or Curse",
      "Advantage on Puzzles"
    ],
    "vendor": "millennium_relics",
    "shippedBy": "Enigmatic Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Solve for Minor Boon or Curse",
        "rules": "Once per week, the user can solve the puzzle to gain a random minor boon (DM rolls: +1 to a stat for 1 day) or a temporary curse. The DM decides on the specific effect."
      },
      {
        "title": "Advantage on Puzzles",
        "rules": "The user gains advantage on all Intelligence checks related to solving puzzles. This effect is permanent as long as the box remains intact."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate and use this item, making it accessible for lower levels.",
    "vendorReason": "Millennium Relics specializes in rare artifacts from ancient times, so they naturally stock the Millennium Puzzle Box (Premium).",
    "shippingDetail": "The Enigmatic Crate ensures secure delivery of this fragile artifact.",
    "usage": {
      "activation": "Solve the puzzle",
      "duration": "Instantaneous for gaining boon or curse; permanent advantage on puzzles",
      "endsWhen": "Exhausted after one use per week, destroyed if the box is damaged beyond repair",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the item's accessibility and utility for beginners while keeping it affordable.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T22:11:58.818693+00:00",
    "aiReviewedAt": "2026-07-22T22:11:58.818693+00:00",
    "aiReviewVersion": 1
  },
  "millennium_recipe_millennial_avocado_toast": {
    "id": "millennium_recipe_millennial_avocado_toast",
    "name": "Recipe: Millennium Millennial Avocado Toast",
    "description": "The Recipe: Millennium Millennial Avocado Toast is a trendy culinary blueprint that, when followed, grants you a slice of avocado toast fit for a social media influencer. Made by the whimsical Millennium Brunch Co., this recipe ensures your toast gains an ethereal glow, perfect for Instagrammable moments. However, it comes with a price: you must face the judgment of baby boomers and feel financially irresponsible afterward, leading to a momentary disadvantage in managing finances.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Avocado Toast Elegance",
      "Financial Irresponsibility"
    ],
    "vendor": "millennium",
    "shippedBy": "Courier Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Avocado Toast Elegance",
        "rules": "Gain advantage on Charisma checks for 1 hour. This effect is limited to once per day and requires the proper ingredients and utensils."
      },
      {
        "title": "Financial Irresponsibility",
        "rules": "You have disadvantage on checks involving money management until your next long rest. This effect lasts until you successfully manage a financial transaction or complete a long rest."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to beginners, requiring only basic dexterity and access to the right ingredients.",
    "vendorReason": "Millennium Brunch Co. specializes in trendy and socially impactful recipes that cater to the aspirational lifestyle of its patrons.",
    "shippingDetail": "Ships within a day with Courier Express, ensuring your recipe arrives fresh and ready for use.",
    "usage": {
      "activation": "Activate as an action by following the Millennium Brunch Co. recipe exactly.",
      "duration": "1 hour or until you fail a money management check.",
      "endsWhen": "The effect ends when you fail a Charisma check, manage finances successfully, or complete a long rest.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This recipe offers a unique and trendy advantage at an accessible price point, making it a popular choice among aspiring influencers.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T22:12:11.857072+00:00",
    "aiReviewedAt": "2026-07-22T22:12:11.857072+00:00",
    "aiReviewVersion": 1
  },
  "millennium_time_sand": {
    "id": "millennium_time_sand",
    "name": "Millennium Time Sand",
    "description": "A small vial containing grains of sand that shimmer with a faint golden hue. The sand is said to originate from the ancient temple of Time, where it was crafted by the hands of the Millennium Nexus itself. Upon activation, this vial can temporarily slow time for its bearer, granting them an additional action on their next turn as if they had taken a bonus action. The sand is consumed entirely in this process and cannot be replenished without the aid of the Nexus.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Temporal Acceleration",
      "Single Use"
    ],
    "vendor": "millennium_nexus",
    "shippedBy": "Hourglass Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "When thrown as an action, this vial of sand can be activated to gain an additional action on your next turn. This effect lasts for the duration of one round and ends immediately if you take any damage or if concentration is required."
      },
      {
        "title": "Single Use",
        "rules": "The vial contains a single dose of time-stopping sand, which is consumed upon activation. Once used, it cannot be reused without replenishment from the Millennium Nexus."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to experiment with time manipulation basics.",
    "vendorReason": "The vial's creation and properties are rooted in the knowledge of the Nexus itself, making it a fitting vendor.",
    "shippingDetail": "Carefully packed to ensure the sand grains do not shift or interact prematurely during transit.",
    "usage": {
      "activation": "Action",
      "duration": "One round",
      "endsWhen": "Ends on your next turn, consumed by taking damage, or if concentration is required",
      "charges": "Single use"
    },
    "priceReason": "The vial's rarity and the unique properties of its sand make it a valuable but not overpowered item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:12:13.163495+00:00",
    "aiReviewedAt": "2026-07-22T22:12:13.163495+00:00",
    "aiReviewVersion": 1
  },
  "millennium_tomb_sarcophagus_slicer": {
    "id": "millennium_tomb_sarcophagus_slicer",
    "name": "Millennium Tomb Sarcophagus Slicer",
    "description": "The Millennium Tomb Sarcophagus Slicer is a heavy, hieroglyph-etched stone tool forged by the ancient Tomb Artisans. Its blade cuts through even the toughest feast platters with precision, ensuring that every slice is perfectly even. The etchings of this slicer also ward off minor curses, providing an aura of protection to those who wield it. This artifact requires a steady hand and strength, as its weight makes swift movements cumbersome.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍽️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Slices evenly for platters",
      "Wards off minor curses"
    ],
    "vendor": "millennium_tomb",
    "shippedBy": "Pharaohs Plate Pan",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Even Slicing",
        "rules": "When used to slice food, this slicer ensures that each portion is perfectly even. It provides a +1 bonus to History checks when attempting to identify ancient recipes."
      },
      {
        "title": "Curses Warded Off",
        "rules": "The etchings on the slicer provide a +2 resistance modifier to saving throws against minor curses for 1 hour, once per long rest. This effect ends if the wielder is cursed or when the slicer is destroyed."
      }
    ],
    "levelRequirementReason": "This tool requires a proficient user due to its weight and intricate etchings.",
    "vendorReason": "The Millennium Tomb's artisans are known for their mastery of ancient tools and relics, making this slicer a staple in their inventory.",
    "shippingDetail": "Ships via Pharaohs Plate Pan, with an additional delay of one day due to the artifact’s weight.",
    "usage": {
      "activation": "Instantaneous action when slicing food or using it in combat against minor curses.",
      "duration": "1 hour once per long rest",
      "endsWhen": "The effect ends if the wielder is cursed or when the slicer is destroyed.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "This balanced price reflects its rarity and utility in both culinary and magical contexts.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T22:12:29.754434+00:00",
    "aiReviewedAt": "2026-07-22T22:12:29.754434+00:00",
    "aiReviewVersion": 1
  },
  "millennium_trench_coat_of_mystery": {
    "id": "millennium_trench_coat_of_mystery",
    "name": "Millennium Trench Coat of Mystery",
    "description": "The Millennium Trench Coat of Mystery is a coat that billows dramatically, its fabric swirling and twisting as if alive. Worn by those who seek to command attention, it grants the wearer an air of mystery and intrigue. The coat's material seems almost otherworldly, shimmering faintly with unseen patterns that shift with every step you take. Made by Millennium Fashion, this coat is said to have been crafted from threads woven between dimensions themselves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Dramatic Entrance",
      "Mystical Billowing"
    ],
    "vendor": "millennium",
    "shippedBy": "Mysterious Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dramatic Entrance",
        "rules": "When entering a room, the wearer can speak a command word to activate this effect. For the next minute, they gain advantage on Charisma checks made to perform or maintain dramatic entrances."
      },
      {
        "title": "Mystical Billowing",
        "rules": "The coat billows without any wind present, creating an eerie yet captivating atmosphere around you. As a reaction when you are subjected to a Stealth check, you take disadvantage on it for the next round. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The coat's enchantments are subtle and require no specific combat or magical prowess beyond basic Charisma checks.",
    "vendorReason": "Millennium Fashion is renowned for creating items that enhance one's presence, making the Trench Coat of Mystery a perfect fit for their catalog.",
    "shippingDetail": "The coat arrives wrapped in an enigmatic aura, ensuring its arrival with no trace of how it was delivered.",
    "usage": {
      "activation": "Command word when entering a room",
      "duration": "1 minute per activation",
      "endsWhen": "Ends after one minute or upon leaving the room",
      "charges": "Unlimited"
    },
    "priceReason": "The coat's mystical properties and its ability to enhance dramatic entrances make it a valuable, yet not overly expensive, addition to any adventurer's wardrobe.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T22:12:40.881433+00:00",
    "aiReviewedAt": "2026-07-22T22:12:40.881433+00:00",
    "aiReviewVersion": 1
  },
  "mimic_chest_key": {
    "id": "mimic_chest_key",
    "name": "Mimic Chest Key",
    "description": "The Mimic Chest Key appears as a tarnished brass key, adorned with toothy engravings that seem to smile back at you. It hums softly when brought close to a mimic chest or a trapped chest, and its warmth radiates like the calm before a storm. When inserted into a mimic chest, it has an 80% chance of pacifying the creature without triggering its trap, but it fails against cursed or artifact chests. The key itself grows warm in the presence of hungry creatures, as if eager to prove its worth.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗝️",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Pacify Mimic Chest",
      "Safe Opening"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Wax Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pacify Mimic Chest",
        "rules": "When used on a mimic chest, the key has an 80% chance of pacifying the creature and safely opening it. If the attempt fails, the mimic activates its trap. The key cannot be used on cursed or artifact chests."
      },
      {
        "title": "Safe Opening",
        "rules": "The key can also be used to open trapped chests without triggering their mechanisms, but only if the chest is not already pacified. This effect has no save DC and does not consume charges; it simply works with an 80% success rate."
      }
    ],
    "levelRequirementReason": "The key requires a basic understanding of mimicry and traps, making level 1 sufficient for its use.",
    "vendorReason": "As the Rogue Port's Black Market vendor, Wax Envelope frequently deals in items that can disarm and deceive, making this key an ideal addition to her wares.",
    "shippingDetail": "Delivered via a sealed wax envelope, ensuring the key remains intact during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the mimic is pacified or the chest is opened safely. The key cannot be used again until it has cooled down, which takes a full day of rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Mimic Chest Key's ability to both disarm and pacify dangerous chests makes it a valuable tool for adventurers without draining their resources.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-22T22:12:38.553986+00:00",
    "aiReviewedAt": "2026-07-22T22:12:38.553986+00:00",
    "aiReviewVersion": 1
  },
  "mimic_colony_starter": {
    "id": "mimic_colony_starter",
    "name": "Mimic Colony Starter Kit",
    "description": "The Mimic Colony Starter Kit arrives in a sturdy wooden crate, its contents carefully packed within. Inside lie three mimic eggs, each crafted from enchanted bone and imbued with Doppelganger magic. The training manual, bound in leather and adorned with the emblem of the Shapeshifter Market, details the mysteries of raising mimics for both combat and stealth. Once hatched, these mimics are loyal guardians but grow restless without regular contact with sentient beings, craving such encounters at least once a month.",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Raise three mimics to serve as loyal guards",
      "Mimic loyalty wanes without contact with sentient prey"
    ],
    "vendor": "shapeshifter_market",
    "shippedBy": "Disguised Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Egg Incubation",
        "rules": "Activates when placed in a suitable environment. Each egg hatches within one week, yielding a mimic. The mimics are docile and trainable until they have interacted with at least three sentient beings."
      },
      {
        "title": "Sentient Contact Requirement",
        "rules": "Mimics require monthly contact with sentient prey to maintain loyalty. Failure to do so results in the mimics' behavior becoming erratic, potentially turning against their creators."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 10 to handle and control the mimics effectively.",
    "vendorReason": "The Shapeshifter Market specializes in exotic and magical creatures, making it the premier source for such items.",
    "shippingDetail": "Delivered by stealthy couriers who ensure the kit remains undetected during transit.",
    "usage": {
      "activation": "Activates when mimics are hatched and trained with regular interaction.",
      "duration": "Permanent, unless loyalty is lost due to lack of sentient contact.",
      "endsWhen": "Loyalty to their creators is lost if they go three months without interacting with sentient beings.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The kit includes rare materials and the expertise of Doppelganger Breeders, justifying its price.",
    "priceOriginal": 485000,
    "priceReviewedAt": "2026-07-22T22:12:56.793095+00:00",
    "aiReviewedAt": "2026-07-22T22:12:56.793095+00:00",
    "aiReviewVersion": 1
  },
  "mind_flayer_tadpole_removal": {
    "id": "mind_flayer_tadpole_removal",
    "name": "Mind Flayer Tadpole Removal",
    "description": "The Mind Flayer Tadpole Removal is a delicately crafted, hand-forged device made by the Brain Surgeons of the illithid realm. This artifact features intricately etched plates that emit a focused pulse when activated, safely extracting a mind flayer tadpole without causing any permanent damage to its host's intelligence. Upon successful use, the recipient gains permanent immunity to ceremorphosis and becomes resistant to mind-affecting spells for 1 hour.",
    "price": 1000,
    "icon": "🪱",
    "stock": 8,
    "rarity": "legendary",
    "effects": [
      "Permanent Ceremorphosis Immunity",
      "Resistance to Mind-Affecting Spells"
    ],
    "vendor": "illithid_defense",
    "shippedBy": "Telekinetic Extraction Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tadpole Extraction",
        "rules": "Activates as a bonus action. The user must make an Intelligence (Medicine) check against the target's Wisdom saving throw DC. On a success, the tadpole is removed without causing any loss of intelligence or permanent damage."
      },
      {
        "title": "Resistance to Mind-Affecting Spells",
        "rules": "Lasts for 1 hour after successful extraction. The user gains resistance to all mind-affecting spells and effects during this duration. This effect does not stack with other similar resistances."
      }
    ],
    "levelRequirementReason": "The procedure requires a basic understanding of the brain mechanics involved in tadpole removal.",
    "vendorReason": "Illithid Defense specializes in advanced medical and extraction devices to protect their kind from mind flayer infestations.",
    "shippingDetail": "The device is shipped using the Telekinetic Extraction Service, ensuring safe delivery without risk of contamination or tampering.",
    "usage": {
      "activation": "Bonus action to activate and perform the extraction procedure.",
      "duration": "Instantaneous; tadpole removal occurs upon a successful check.",
      "endsWhen": "The effect ends after 1 hour when resistance to mind-affecting spells is no longer applicable.",
      "charges": "Unlimited uses, but only one tadpole can be removed per use."
    },
    "priceReason": "This item represents a highly specialized and valuable service provided by the Brain Surgeons of Illithid Defense, making it moderately priced for its rarity.",
    "priceOriginal": 365000,
    "priceReviewedAt": "2026-07-22T22:13:37.082580+00:00",
    "aiReviewedAt": "2026-07-22T22:13:37.082580+00:00",
    "aiReviewVersion": 1
  },
  "mind_fortress_installation": {
    "id": "mind_fortress_installation",
    "name": "Mind Fortress Installation",
    "description": "The Mind Fortress Installation is a specialist's artifice, an intricate web of psychic defenses woven into your mind over three days. Crafted from rare, shimmering crystal and imbued with ancient eldritch knowledge, it grants you immunity to charm effects, detect thoughts, and scrying within 60 feet. These protections are so robust that they grant advantage on all Intelligence and Wisdom saving throws. However, sharing your thoughts willingly can deactivate this formidable shield for a full day.",
    "category": "services",
    "price": 1000,
    "icon": "🧠",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Psychic Shield",
      "Enhanced Intuition"
    ],
    "vendor": "artificer_tower",
    "shippedBy": "Psychic Surgery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Psychic Shield",
        "rules": "You gain immunity to charm effects, detect thoughts, and scrying within 60 feet. Additionally, you have advantage on all Intelligence and Wisdom saving throws. These defenses activate upon installation and last until willingly deactivated or destroyed."
      },
      {
        "title": "Enhanced Intuition",
        "rules": "When you share your thoughts willingly (such as through a telepathic conversation), the protections deactivate for 24 hours. This effect can only be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "This installation requires a high level of mental discipline and focus to construct, suitable only for those who have reached at least seventh level.",
    "vendorReason": "The Artificer Tower specializes in crafting intricate mindscapes and psychic defenses, making it the ideal vendor for this installation.",
    "shippingDetail": "Installation requires three days during which you are incapacitated. The process is delicate and must be performed by a trained specialist.",
    "usage": {
      "activation": "Instantaneous upon completion of the installation.",
      "duration": "Indefinite until deactivated or destroyed.",
      "endsWhen": "If you share your thoughts willingly, it deactivates for 24 hours. Only one instance can be triggered per long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the complexity of the installation and the materials used, as well as the time required to complete it.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-22T22:13:04.298482+00:00",
    "aiReviewedAt": "2026-07-22T22:13:04.298482+00:00",
    "aiReviewVersion": 1
  },
  "minecraft_diamond_pick": {
    "id": "minecraft_diamond_pick",
    "name": "Diamond Pickaxe",
    "description": "The Diamond Pickaxe gleams with a cold, metallic sheen under moonlight, its facets reflecting starlight like a piece of the heavens. Crafted by the hands of ancient dwarven forges, it is said to have been born from the heart of a volcano itself. This pickaxe not only enhances your mining prowess but also shatters magical defenses that guard deep mine treasures. It never breaks and requires no maintenance, ensuring you can focus on the task at hand without worry.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Enhanced Mining",
      "Breaks Magical Barriers"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Mining",
        "rules": "When used for mining checks, increase your proficiency bonus by +3. Additionally, you can harvest twice the amount of resources from a single successful mining check."
      },
      {
        "title": "Breaks Magical Barriers",
        "rules": "As an action, you can use this pickaxe to shatter any magical barrier or shield within 10 feet. This effect has no save DC and does not consume charges; it simply requires a successful mining check (DC 15) to activate."
      }
    ],
    "levelRequirementReason": "The Diamond Pickaxe is designed for beginners who wish to explore deeper mines but still require the advanced capabilities of this tool.",
    "vendorReason": "Gilded Gryphon, known for its expertise in rare and magical equipment, offers this pickaxe as a staple for adventurers venturing into uncharted territories.",
    "shippingDetail": "The pickaxe is delivered via Swift Wind Courier, ensuring it arrives at your door within three days of purchase.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Once per short rest after use",
      "charges": "Unlimited"
    },
    "priceReason": "The Diamond Pickaxe, though not extraordinarily powerful, offers significant utility in mining and breaking barriers, making it a fair price for eager adventurers.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T16:38:04.266260+00:00",
    "aiReviewedAt": "2026-07-23T16:38:04.266260+00:00",
    "aiReviewVersion": 1
  },
  "minerva_academy_owl_feather_brush": {
    "id": "minerva_academy_owl_feather_brush",
    "name": "Minerva Academy Owl Feather Brush",
    "description": "The Minerva Academy Owl Feather Brush is a delicate tool crafted from the softest feathers of an owl that once belonged to the school’s founder. This brush ensures dusting pudding molds achieves perfect precision, enhancing scholarly recipes with its wisdom-infused touch. Each stroke grants you +1 to Intelligence for the next hour when crafting puddings or pastries, and occasionally, a feather will detach itself, bringing a moment of serendipity or insight.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhances scholarly pudding recipes",
      "Serendipitous wisdom"
    ],
    "vendor": "minerva_library",
    "shippedBy": "Wise Whisk Wings",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Crafting",
        "rules": "When crafting puddings or pastries with this brush, you gain +1 to Intelligence for the next hour. This effect is instantaneous upon use and lasts until the start of your next turn."
      },
      {
        "title": "Feather Serendipity",
        "rules": "Occasionally, a feather will detach from the brush, providing you with a momentary insight or hint about your craft (+1d4 temporary Intelligence). This effect is random and can occur once per day."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool does not require a specific level to use.",
    "vendorReason": "The Minerva Library, as the heart of scholarly pursuits at the academy, naturally stocks this indispensable tool for students and faculty alike.",
    "shippingDetail": "Delivered swiftly by the owl post, ensuring your brush arrives in perfect condition.",
    "usage": {
      "activation": "Instantaneous use upon starting to craft puddings or pastries.",
      "duration": "One hour after activation.",
      "endsWhen": "The start of your next turn, or when you stop crafting with it.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item’s price is balanced to reflect its utility in enhancing scholarly activities and the rarity of the owl feathers used in its construction.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T22:13:46.751407+00:00",
    "aiReviewedAt": "2026-07-22T22:13:46.751407+00:00",
    "aiReviewVersion": 1
  },
  "minerva_owl_familiar_training_premium": {
    "id": "minerva_owl_familiar_training_premium",
    "name": "Minerva Owl Familiar Training (Premium)",
    "description": "Honed by Minerva Owl Familiar Training, this premium owl companion hones its skills in silence and delivers messages across vast distances. Its keen senses grant advantage on Perception checks within a mile, while its nightly hoots can inspire confidence with a chance to grant advantage on Insight checks for the listener. This familiar is no ordinary bird; it's crafted from the finest feathers of the wild and trained by the renowned Minerva Academy.",
    "price": 1000,
    "icon": "🦉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Message Delivery",
      "Insight Boost"
    ],
    "vendor": "minerva_academy",
    "shippedBy": "Feathered Post",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Message Delivery",
        "rules": "Once per day, this owl can deliver a message to a location up to one mile away. The recipient must be present when the message is delivered and can understand it without additional effort."
      },
      {
        "title": "Insight Boost",
        "rules": "As an action, you can command your owl familiar to hoot once, granting you advantage on the next Insight check you make within one hour. This effect has a daily limit of once per day."
      }
    ],
    "levelRequirementReason": "This premium training requires a certain level of dedication and experience for the familiar to reach its full potential.",
    "vendorReason": "The Minerva Academy is renowned for its expertise in owl familiar training, ensuring only the highest quality familiars are offered here.",
    "shippingDetail": "Delivered swiftly by a trusted courier who ensures your owl arrives in top condition.",
    "usage": {
      "activation": "As an action or reaction for Message Delivery, as an action for Insight Boost.",
      "duration": "Instantaneous for Message Delivery; one hour duration for Insight Boost.",
      "endsWhen": "The daily limit is reached for the Insight Boost effect.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This premium training significantly enhances a familiar owl's capabilities, making it worth this fair price in XP.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T22:13:52.838511+00:00",
    "aiReviewedAt": "2026-07-22T22:13:52.838511+00:00",
    "aiReviewVersion": 1
  },
  "minerva_owl_post_upgrade": {
    "id": "minerva_owl_post_upgrade",
    "name": "Minerva Owl Post Upgrade",
    "description": "The Minerva Owl Post Upgrade ensures your letters are delivered swiftly and graded by a discerning owl. The owls of Minerva Postal Service arrive at your door within an hour, their deliveries a testament to both speed and efficiency. They not only bring your mail but also provide a written critique on the quality of your correspondence, ensuring that every communication is as sharp as the talons that deliver it.",
    "category": "premium",
    "price": 1000,
    "icon": "🦉",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Swift Delivery",
      "Handwritten Critique"
    ],
    "vendor": "minerva",
    "shippedBy": "Owl Post Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Delivery",
        "rules": "Upon activation, a Minerva Postal Service owl delivers your mail within an hour. This effect is instantaneous and does not consume any charges or have a duration."
      },
      {
        "title": "Handwritten Critique",
        "rules": "The owl provides a grade for the quality of your handwriting on each letter delivered. The owls evaluate based on legibility, neatness, and creativity. This effect is passive and requires no activation; it occurs with every delivery."
      }
    ],
    "levelRequirementReason": "The upgrade ensures that even novices can benefit from its advantages.",
    "vendorReason": "Minerva Postal Service prides itself on innovation and efficiency, offering this premium service to all their customers.",
    "shippingDetail": "The owl courier delivers the upgrade directly to your door within an hour of activation.",
    "usage": {
      "activation": "Passive effect; no activation required for either feature.",
      "duration": "Instantaneous (Swift Delivery) and passive (Handwritten Critique).",
      "endsWhen": "The effects end when the owl completes its delivery or if a new letter is delivered by another courier.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP, this upgrade provides significant benefits without overshadowing other premium services.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T22:14:04.194068+00:00",
    "aiReviewedAt": "2026-07-22T22:14:04.194068+00:00",
    "aiReviewVersion": 1
  },
  "minerva_owl_wisdom_pudding_recipe": {
    "id": "minerva_owl_wisdom_pudding_recipe",
    "name": "Recipe: Minerva Owl Wisdom Pudding",
    "description": "This ancient parchment bears the recipe for Minerva Owl Wisdom Pudding, a creamy confection that infuses scholarly prowess. Served at the heart of the Academy Library, its secrets are known only to those who have earned the right to know. A spoonful grants you advantage on Intelligence (Investigation) checks for four hours, while the pudding itself is made from brain food and imbued with the wisdom of owls, whose hoots echo in your mind as you consume it.",
    "price": 1000,
    "icon": "🍮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Advantage on Int (Investigation)",
      "Academy Library Wisdom"
    ],
    "vendor": "minerva_library",
    "shippedBy": "Wise Whisk Writings",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Intelligence (Investigation) Checks",
        "rules": "Eating the pudding grants you advantage on Intelligence (Investigation) checks for four hours. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Academy Library Wisdom",
        "rules": "The recipe imparts a sense of scholarly wisdom, as if you had spent the past hour reading in the Academy Library. It grants knowledge equivalent to one skill check with the Investigation skill."
      }
    ],
    "levelRequirementReason": "Beginners can benefit from the increased scholarly prowess that this pudding provides.",
    "vendorReason": "The recipe is a tradition passed down through generations of Academy cooks and scholars.",
    "shippingDetail": "Shipped with care, arriving within one week from the Academy Library.",
    "usage": {
      "activation": "Eating the pudding",
      "duration": "Four hours per use",
      "endsWhen": "The duration ends when it expires or you eat another serving of the pudding",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to provide a scholarly advantage without becoming overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T22:13:54.509472+00:00",
    "aiReviewedAt": "2026-07-22T22:13:54.509472+00:00",
    "aiReviewVersion": 1
  },
  "minerva_sage_robe": {
    "id": "minerva_sage_robe",
    "name": "Minerva Sage Robe",
    "description": "The Minerva Sage Robe is a scholarly garment crafted by Academy Tailors, its subtle embroidery depicting ancient symbols of wisdom and knowledge. The robe's pockets are lined with parchment, preserving scrolls without ink spillage or damage. With each page turned, the fabric whispers tales of forgotten lore, enhancing the wearer’s intellect in matters of history. Known to be favored by scholars and scribes, this rare ensemble is a symbol of academic prowess.",
    "category": "equipment",
    "price": 1000,
    "icon": "👘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 Intelligence modifier for History checks",
      "Scroll pockets preserve scrolls without ink damage"
    ],
    "vendor": "minerva_library",
    "shippedBy": "Parchment Lining",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Academic Knowledge",
        "rules": "The wearer gains +1 to Intelligence (History) checks. This effect lasts until the end of the wearer's next long rest."
      },
      {
        "title": "Preservation of Knowledge",
        "rules": "The robe’s pockets protect scrolls from ink damage, allowing for safe storage and review without deterioration. The protection is active as long as at least one scroll is in a pocket."
      }
    ],
    "levelRequirementReason": "This robe requires proficiency with History to fully utilize its benefits.",
    "vendorReason": "The Minerva Library, known for its extensive collection of ancient texts and scrolls, offers this robe as a symbol of scholarly prestige.",
    "shippingDetail": "Ships via Parchment Lining, ensuring safe delivery within three days.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Lasts until the end of the next long rest or until the robe is removed",
      "endsWhen": "The robe is removed from the wearer",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a rare, limited edition robe that enhances scholarly endeavors and preserves knowledge.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T22:14:36.298011+00:00",
    "aiReviewedAt": "2026-07-22T22:14:36.298011+00:00",
    "aiReviewVersion": 1
  },
  "minerva_wisdom_elixir": {
    "id": "minerva_wisdom_elixir",
    "name": "Minerva Wisdom Elixir",
    "description": "Minerva's Wisdom Elixir, a shimmering vial of clear liquid imbued with the essence of Athena herself, grants the drinker unparalleled clarity and strategic acumen for an hour. The elixir is said to have been crafted in her own sacred forge, its crystal bottle etched with runes that hum faintly when activated. Known for enhancing both your Intelligence score and proficiency in a chosen skill, this potion was made by Minerva herself, the goddess of wisdom. It's a rare find from the Minerva Academy, where only the most skilled alchemists dare to replicate its formula.",
    "price": 1000,
    "icon": "🦉",
    "stock": 4,
    "rarity": "epic",
    "effects": [
      "Enhanced Intelligence",
      "Expertise Boost"
    ],
    "vendor": "minerva_academy",
    "shippedBy": "Crystal Dropper",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Intelligence",
        "rules": "Gain +4 to your Intelligence score for one hour. This effect is instantaneous upon consumption and lasts until the end of your next short or long rest."
      },
      {
        "title": "Expertise Boost",
        "rules": "For one hour, you gain expertise in a single Intelligence-based skill (such as Arcana, History, or Perception). You can only benefit from this effect once per day. This boost ends when the duration expires or if you use it again."
      }
    ],
    "levelRequirementReason": "This potion is suitable for adventurers of any level to enhance their strategic thinking and problem-solving abilities.",
    "vendorReason": "The Minerva Academy is renowned for its mastery in alchemy, making it the only source for this legendary elixir.",
    "shippingDetail": "Shipped by a Crystal Dropper, delivered within three days of ordering. The delivery is insured against loss or damage during transit.",
    "usage": {
      "activation": "Consume the vial as an action.",
      "duration": "One hour, until your next short or long rest.",
      "endsWhen": "The duration ends at the end of a short or long rest.",
      "charges": "Unlimited; can be consumed multiple times per day."
    },
    "priceReason": "This elixir is priced at 1000 XP, reflecting its rarity and the expertise required to craft it in Minerva's sacred forge.",
    "priceOriginal": 32000,
    "priceReviewedAt": "2026-07-22T22:14:19.164373+00:00",
    "aiReviewedAt": "2026-07-22T22:14:19.164373+00:00",
    "aiReviewVersion": 1
  },
  "mini_mushroom": {
    "id": "mini_mushroom",
    "name": "Mini Mushroom",
    "description": "The Mini Mushroom is a diminutive, glowing puffball that, when consumed, shrinks you to the size of a small animal. For ten minutes, your world becomes a labyrinth of towering objects and hidden pathways. Its bioluminescent cap pulses with an eerie green light as it nestles in your hand like a tiny, iridescent orb. While shrunken, you gain +5 to Stealth checks, blending seamlessly into the environment, but beware—larger creatures can easily step on or crush you, inflicting double damage due to your vulnerable state.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Shrink and Sneak",
      "Vulnerable to Step"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Tiny Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shrink and Sneak",
        "rules": "Single Use. Consuming the Mini Mushroom shrinks you to Tiny size for ten minutes, granting +5 to Stealth checks during this time. The effect ends if you are no longer in a covert area or if you take any action that disallows the use of a bonus action."
      },
      {
        "title": "Vulnerable to Step",
        "rules": "While shrunk, you are vulnerable to being stepped on by creatures larger than you. If this occurs, you take double damage from the step. The effect ends if you are no longer in contact with a creature or if you are moved away from it."
      }
    ],
    "levelRequirementReason": "The Mini Mushroom is accessible to lower-level characters as an introduction to stealth and size-based combat maneuvers.",
    "vendorReason": "Toad Town Market specializes in items that enhance the everyday lives of its patrons, making the Mini Mushroom a perfect fit for their inventory.",
    "shippingDetail": "The Mini Mushroom is shipped in a specially designed container to ensure safe delivery and prevent premature activation during transit.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "10 minutes (ends if you leave covert area or take an action disallowing bonus action)",
      "endsWhen": "Leaving a covert area, taking an action that disallows the use of a bonus action, or being stepped on by larger creatures",
      "charges": "Unlimited"
    },
    "priceReason": "The Mini Mushroom's price is adjusted to reflect its utility in stealth situations and the risk involved in using it.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T22:15:04.494615+00:00",
    "aiReviewedAt": "2026-07-22T22:15:04.494615+00:00",
    "aiReviewVersion": 1
  },
  "mini_pow": {
    "id": "mini_pow",
    "name": "Mini POW Block",
    "description": "Mini POW Block, a compact cube of hardened clay and brass, humming faintly with residual energy. This handy device can be shaken to dislodge unwanted intruders from your immediate surroundings. When activated, it sends a jarring pulse that forces all creatures on the ground within 5 feet to make a Strength saving throw (DC 14). Failure means they fall prone and are stunned until the start of their next turn.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Disrupt Groundlings",
      "Stunning Pulse"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupt Groundlings",
        "rules": "When activated, the Mini POW Block sends a pulse that forces all creatures on the ground within 5 feet to make a Strength saving throw (DC 14). On failure, they fall prone and are stunned until their next turn begins."
      },
      {
        "title": "Stunning Pulse",
        "rules": "Creatures who fail the save are stunned for one round. This effect ends when the creature is no longer on the ground within the pulse's range or takes damage."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 1 to ensure that users can handle its effects.",
    "vendorReason": "Toad Town Market sells everyday items like the Mini POW Block, which are useful for small-scale adventuring tasks.",
    "shippingDetail": "Delivered within a week of purchase with Standard Courier service.",
    "usage": {
      "activation": "Action: The item is consumed on use.",
      "duration": "Instantaneous (effect lasts until the start of the creature's next turn).",
      "endsWhen": "The effect ends when the creature leaves the pulse area or takes damage.",
      "charges": "Unlimited, but the item can only be used once per long rest."
    },
    "priceReason": "This balanced price reflects its useful utility in removing small threats without requiring a special action from the user.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T22:14:28.360157+00:00",
    "aiReviewedAt": "2026-07-22T22:14:28.360157+00:00",
    "aiReviewVersion": 1
  },
  "minor_faction_favor": {
    "id": "minor_faction_favor",
    "name": "Minor Faction Favor Token",
    "description": "The Minor Faction Favor Token is a small, intricately carved wooden chip adorned with sigils of local factions. When you present it to a trusted ally for assistance, they can provide you with a minor boon such as a safehouse, false papers, or even a battalion of 1d4 thugs to protect your interests. However, be wary; using the token burns bridges with rival factions, so use this favor wisely and only when truly needed.",
    "category": "faction",
    "price": 1000,
    "icon": "💰",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Call in one minor faction favor",
      "Burns bridges with rival factions"
    ],
    "vendor": "political_fixer",
    "shippedBy": "Shady Messenger",
    "levelRequirement": 1,
    "factionBonus": {
      "reputation": 25
    },
    "effectDetails": [
      {
        "title": "Call in One Minor Favor",
        "rules": "You must present the token to a trusted ally from a local faction. They can provide you with assistance such as a safehouse, false papers, or 1d4 thugs. This favor is immediate and does not require any action on your part once presented."
      },
      {
        "title": "Burns Bridges",
        "rules": "Using the token incurs bad blood between you and rival factions within that local area. This effect lasts until your next major faction interaction or until the rival faction's goodwill is restored through significant actions or events."
      }
    ],
    "levelRequirementReason": "The Minor Faction Favor Token is accessible to lower-level characters who need immediate help but must be cautious with its use.",
    "vendorReason": "Political Fixers often broker deals and favors, making them the logical vendor for such an item.",
    "shippingDetail": "Delivered within a week by the Shady Messenger, with a 10% chance of the package being intercepted.",
    "usage": {
      "activation": "Presenting it to a trusted ally from a local faction",
      "duration": "Instantaneous; effect lasts until rival factions' goodwill is restored or until your next major faction interaction",
      "endsWhen": "Once used, the token is destroyed and cannot be reused",
      "charges": "Unlimited"
    },
    "priceReason": "The Minor Faction Favor Token provides immediate but limited assistance, making it a valuable tool for players navigating complex political landscapes.",
    "priceOriginal": 11200,
    "priceReviewedAt": "2026-07-22T22:14:48.450851+00:00",
    "aiReviewedAt": "2026-07-22T22:14:48.450851+00:00",
    "aiReviewVersion": 1
  },
  "minor_invisibility_cloak_fragment": {
    "id": "minor_invisibility_cloak_fragment",
    "name": "Minor Invisibility Cloak Fragment",
    "description": "A tattered fragment of an ancient cloak, this Minor Invisibility Cloak Fragment provides fleeting concealment. When donned, it grants you partial invisibility within dim light conditions, making your silhouette indistinct but not fully invisible. The fabric whispers with the scent of mothballs and hums faintly as it warps around your form, hinting at its magical origin. It is a relic crafted by the Arcane Tailor, known for their intricate tailor work. Be wary; this fragment wears out after 5 uses.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Partial Invisibility",
      "Limited Uses"
    ],
    "vendor": "arcane_tailor",
    "shippedBy": "Silk Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Partial Invisibility",
        "rules": "As a bonus action, you gain partial invisibility within dim light conditions. While invisible, attackers have disadvantage on attack rolls against you. This effect lasts for 1 minute and ends early if you attack or cast a spell."
      },
      {
        "title": "Limited Uses",
        "rules": "The Minor Invisibility Cloak Fragment wears out after 5 uses. It must be mended by an Arcane Tailor to restore its functionality, which requires a successful DC 12 Craft (Tailoring) check."
      }
    ],
    "levelRequirementReason": "This fragment is suitable for adventurers of lower levels as it provides concealment without requiring high-level spellcasting.",
    "vendorReason": "The Arcane Tailor specializes in crafting and mending magical relics, including this rare fragment.",
    "shippingDetail": "Delivered by a swift messenger hawk, ensuring the package arrives swiftly and securely.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "You attack or cast a spell; wears out after 5 uses",
      "charges": "5"
    },
    "priceReason": "This item strikes a balance, offering concealment without the cost of a full spell.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T22:14:41.984339+00:00",
    "aiReviewedAt": "2026-07-22T22:14:41.984339+00:00",
    "aiReviewVersion": 1
  },
  "minor_potion_mixer_kit": {
    "id": "minor_potion_mixer_kit",
    "name": "Minor Potion Mixer Kit",
    "description": "The Minor Potion Mixer Kit is a sturdy alchemy set crafted from iron and glass. It includes ten vials for storing simple healing potions, and its compact design makes it perfect for brewing on-the-go. With this kit, you can craft one minor potion of healing per long rest using common herbs. Crafting requires an hour and a successful Intelligence (Medicine) check at DC 14 to ensure the concoction's potency. The kit spills easily if mishandled, making it best suited for those with steady hands or magical fortitude.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧪",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Craft Healing Potions",
      "Sturdy Construction"
    ],
    "vendor": "herbalists_hut",
    "shippedBy": "Glassware Padding",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Craft Healing Potions",
        "rules": "Craft one minor potion of healing (2d4+1 HP) per long rest using common herbs. Requires a successful Intelligence (Medicine) check at DC 14 and takes an hour to brew."
      },
      {
        "title": "Sturdy Construction",
        "rules": "The kit's sturdy build provides a +1 bonus to the saving throw DC of any minor potion crafted, enhancing its effect."
      }
    ],
    "levelRequirementReason": "Crafting potions requires basic alchemical knowledge and dexterity, making this kit suitable for characters with at least two levels.",
    "vendorReason": "The Herbalists Hut specializes in items related to herbal medicine and alchemy, so it's no surprise they stock the Minor Potion Mixer Kit.",
    "shippingDetail": "Ships via Glassware Padding, which ensures safe delivery even for fragile glassware.",
    "usage": {
      "activation": "Crafting action over one hour",
      "duration": "Instantaneous effect (potion ready at the end of the hour)",
      "endsWhen": "Exhausted after crafting all vials or if mishandled and spills",
      "charges": "Unlimited, as long as you have herbs and time"
    },
    "priceReason": "The balanced price reflects the kit's materials (iron and glass) and its utility for basic potion crafting.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T22:14:51.442147+00:00",
    "aiReviewedAt": "2026-07-22T22:14:51.442147+00:00",
    "aiReviewVersion": 1
  },
  "mints_that_freshen_breath_with": {
    "id": "mints_that_freshen_breath_with",
    "name": "Wario's Garlic Breath Mints (Scam Breath!)",
    "description": "Wario's Garlic Breath Mints are twisted candies that claim to freshen breath with a garlicky punch. The packaging is slick, but the contents are just plain old garlic candy. Each mint grants you temporary immunity to bad-breath penalties for an hour, yet it also leaves your mouth smelling like a pizzeria kitchen for 10 minutes. Beware, though; this 'freshening' comes with a side of social awkwardness when dealing with normals.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍬",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Garlic Stench",
      "Fresh Breath"
    ],
    "vendor": "wario_land",
    "shippedBy": "Breath Blaster Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Garlic Stench",
        "rules": "You gain advantage on saving throws against the effects of undead creatures, but you suffer disadvantage on Charisma (Interaction) checks and Insight checks with normal creatures. The mints last for 10 minutes after consumption."
      },
      {
        "title": "Fresh Breath",
        "rules": "For an hour following consumption, you are immune to penalties from bad breath. However, the scent of garlic persists in your mouth for 10 minutes after this period ends."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who might find themselves in social or undead encounters without a better option.",
    "vendorReason": "Wario's Candy Scam Factory specializes in quirky, yet profitable, items that leave you laughing and losing gold.",
    "shippingDetail": "Delivered by Wario's minions; arrives with a loud 'whoosh' and an unexpected delivery fee.",
    "usage": {
      "activation": "Eat one mints as a bonus action.",
      "duration": "1 hour for the breath-freshening effect, followed by 10 minutes of garlic stench.",
      "endsWhen": "The effects end after their respective durations.",
      "charges": "Unlimited; each pack contains 10 mints."
    },
    "priceReason": "For a common item, these mints provide both a useful and humorous effect, making the price fair for players seeking an edge in certain situations.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T22:14:57.208525+00:00",
    "aiReviewedAt": "2026-07-22T22:14:57.208525+00:00",
    "aiReviewVersion": 1
  },
  "mirror_of_second_chances": {
    "id": "mirror_of_second_chances",
    "name": "Mirror of Second Chances",
    "description": "The Mirror of Second Chances is a small, hand-held mirror adorned with delicate feathers that shimmer like starlight. It allows its bearer to glimpse an alternate reality where a single choice was altered. By using it once per long rest, you can reroll a failed check or attack with advantage. However, if you choose to alter a major life decision shown in the mirror's reflection, it may demand a cherished memory as payment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪞",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Reroll Failed Checks",
      "Demand for Memory"
    ],
    "vendor": "rare_relics",
    "shippedBy": "Feathered Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reroll Failed Checks",
        "rules": "Once per long rest, you can use an action to interact with the mirror and reroll a failed ability check, attack roll, or saving throw. You must succeed on the new roll."
      },
      {
        "title": "Demand for Memory",
        "rules": "If you choose to alter a major life decision shown in the mirror's reflection, it may demand a cherished memory from your past as payment. This memory cannot be regained through normal means and is considered lost forever."
      }
    ],
    "levelRequirementReason": "The mirror requires minimal experience and wisdom to handle its powerful visions.",
    "vendorReason": "Rare Relics specializes in ancient artifacts that offer unique insights into the past, making it a fitting vendor for this mirror.",
    "shippingDetail": "The Mirror of Second Chances is carefully packed and shipped through Feathered Crate to ensure its delicate feathers remain intact during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, once per long rest",
      "endsWhen": "Charges are exhausted or the mirror is destroyed",
      "charges": "1 charge"
    },
    "priceReason": "The Mirror of Second Chances provides significant advantages but at a steep personal cost when altering major decisions.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T22:15:17.006299+00:00",
    "aiReviewedAt": "2026-07-22T22:15:17.006299+00:00",
    "aiReviewVersion": 1
  },
  "mirror_of_the_future_self": {
    "id": "mirror_of_the_future_self",
    "name": "Mirror of the Future Self",
    "description": "The Mirror of the Future Self is a polished glass framed in dark mahogany. It whispers tales of what you will become if you do nothing to change your path. Glimpse into its depths, and you see an aged reflection of yourself, broken by time's relentless hand, standing alone in a desolate landscape. For 24 hours, you gain advantage on all saving throws, fortifying your resilience against the trials ahead. However, should you look again within seven days, you must make a DC 16 Wisdom save; failure leaves you haunted by the belief that you are already dead.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪞",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Glimpse of Your Future",
      "Enhanced Resilience"
    ],
    "vendor": "dream_sanctuary",
    "shippedBy": "Black Frame",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse of Your Future",
        "rules": "When you activate the mirror, you gain a vision of your future self if you do nothing to change your path. You have advantage on all saving throws for 24 hours."
      },
      {
        "title": "Belief in Death",
        "rules": "If you look into the mirror again within seven days, you must make a DC 16 Wisdom save; failure causes you to believe that you are already dead. This effect ends when you succeed on a Wisdom saving throw or after one week."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can benefit from knowing how their inaction will affect their future.",
    "vendorReason": "Dream Sanctuary specializes in curiosities that offer glimpses into the unknown, making it a fitting vendor for such a mirror.",
    "shippingDetail": "The mirror is carefully packed to prevent any distortion of your future vision during transit.",
    "usage": {
      "activation": "Action",
      "duration": "24 hours",
      "endsWhen": "You succeed on a Wisdom saving throw or after one week, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the mirror's rarity and the profound insight it offers into your future.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T22:15:08.130694+00:00",
    "aiReviewedAt": "2026-07-22T22:15:08.130694+00:00",
    "aiReviewVersion": 1
  },
  "mistake": {
    "id": "mistake",
    "name": "Mistake",
    "description": "This burnt, gooey mess of a potion, hastily crafted by Zess T., rests on a paper plate imbued with an eerie glow. The concoction's origin is as uncertain as its effects: it could be a failed attempt at an elixir or perhaps a mischievous prank gone awry. Regardless, consuming this Mistake can either heal you for 1d4 hit points or make you retch and lose your next turn to violent vomiting.",
    "category": "consumables",
    "price": 1000,
    "icon": "💩",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Restore HP",
      "Induce Vomiting"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Napkin Wrap Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Consumption",
        "rules": "Consume the Mistake as a bonus action. You regain 1d4 hit points. If you fail a Constitution saving throw (DC 12), you are incapacitated for 1 minute, retching uncontrollably."
      },
      {
        "title": "Vomiting Reactions",
        "rules": "If you consume the Mistake and fail your Constitution save, you are incapacitated until the start of your next turn. During this time, you lose any actions you would have taken on that turn and cannot take reactions."
      }
    ],
    "levelRequirementReason": "The potion's unpredictable effects and potential for severe side effects require a minimum character level to safely handle.",
    "vendorReason": "Toad Town Market is known for its eccentric wares, including the occasional failed or mischievous product from local alchemists like Zess T.",
    "shippingDetail": "Shipped in a sealed napkin to prevent any accidental contact with other goods.",
    "usage": {
      "activation": "Consume as a bonus action",
      "duration": "Instantaneous; effect ends when the save is made or the turn ends",
      "endsWhen": "On a failed Constitution saving throw or at the end of your next turn, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The Mistake's unpredictable nature and the risk involved in its consumption justify its higher price.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T22:15:26.537326+00:00",
    "aiReviewedAt": "2026-07-22T22:15:26.537326+00:00",
    "aiReviewVersion": 1
  },
  "mister_softener": {
    "id": "mister_softener",
    "name": "Mr. Softener",
    "description": "Mr. Softener is a peculiar spray canister, its nozzle adorned with a soft, plush texture. This unique artifact, crafted from rare marshmallow fibers and imbued by the alchemists of the Cloudspire Academy, temporarily sponifies any armor you wear into something akin to a cloud of fluff. For 1 minute, your armor feels as yielding as cotton candy, reducing its Armor Class (AC) by 3 points—though it cannot reduce your AC below 10, lest you be left exposed and vulnerable.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Armor Feels Like Fluff",
      "Temporary AC Decrease"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Aerosol Can",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Feels Like Fluff",
        "rules": "When activated as an action, Mr. Softener causes the target's armor to momentarily lose its rigidity and feel like soft marshmallow. The target’s AC is reduced by 3 points for up to 1 minute. If at any point your AC would be reduced below 10, it remains at 10 until the effect ends."
      },
      {
        "title": "Temporary AC Decrease",
        "rules": "This effect lasts for a full minute and can only be used once per short or long rest. It is an instantaneous action when activated."
      }
    ],
    "levelRequirementReason": "The alchemy involved in creating Mr. Softener requires basic knowledge of alchemical principles, which are typically learned at the earliest levels.",
    "vendorReason": "The Rogueport Black Market is known for its wide array of unusual and experimental items, including those that blur the line between practicality and whimsy.",
    "shippingDetail": "Mr. Softener arrives via a specially insulated aerosol canister to ensure it remains in optimal condition until use.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the duration expires or the target's AC would be reduced below 10, whichever occurs first.",
      "charges": "Unlimited"
    },
    "priceReason": "While not extraordinarily powerful, Mr. Softener offers a unique and entertaining use that is both memorable and slightly dangerous if overused.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T22:15:38.152372+00:00",
    "aiReviewedAt": "2026-07-22T22:15:38.152372+00:00",
    "aiReviewVersion": 1
  },
  "mithral_golem_construction_kit": {
    "id": "mithral_golem_construction_kit",
    "name": "Mithral Golem Construction Kit",
    "description": "The Mithral Golem Construction Kit contains all the adamantine and mithral components needed to craft a guardian of unparalleled strength and resilience, forged by Adamantine Foundry over thirty days in a ritual that imbues it with a personality of its own. This golem is both a loyal protector and an independent entity capable of forming bonds or alliances as it sees fit, making it more than just a tool for combat.",
    "price": 1000,
    "icon": "🤖",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Construct a CR 16 Mithral Golem",
      "Golem develops its own personality"
    ],
    "vendor": "construct_artificer",
    "shippedBy": "Golem Porter",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Construction Duration",
        "rules": "The golem takes exactly 30 days to construct, during which time the builder must spend at least one hour each day focused on the creation. If interrupted or neglected for more than a week, construction ceases until resumed."
      },
      {
        "title": "Personality Development",
        "rules": "After completion, the golem's personality develops over time (1d4 months). The DM rolls secretly to determine the nature of its personality, which can range from fiercely loyal to independently minded. Once determined, it remains fixed until the golem is destroyed or reprogrammed."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 19 due to the complexity and power of creating such an advanced golem.",
    "vendorReason": "Adamantine Foundry is renowned for crafting the most durable and intelligent constructs, making them the only vendor capable of selling this kit.",
    "shippingDetail": "Ships via Golem Porter, a specialized courier that can deliver components safely over long distances using its own golem escorts.",
    "usage": {
      "activation": "The construction process is activated by the builder's focus and the kit’s ritual activation sequence. The golem becomes operational once constructed.",
      "duration": "Instantaneous to complete with no ongoing effects after completion",
      "endsWhen": "The golem is destroyed or reprogrammed, ending its personality development permanently.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as a rare and godly item that allows for the creation of an advanced construct with unique abilities.",
    "priceOriginal": 975000,
    "priceReviewedAt": "2026-07-22T22:16:03.786942+00:00",
    "aiReviewedAt": "2026-07-22T22:16:03.786942+00:00",
    "aiReviewVersion": 1
  },
  "mix_flower": {
    "id": "mix_flower",
    "name": "Mix Flower",
    "description": "The Mix Flower is a rare and delicate plant that, when fully grown, can unleash a devastating fireball from the sky. This ancient artifact requires precise care and ritual to activate, as it draws power directly from celestial sources. Upon activation, it fires a massive fireball with pinpoint accuracy, obliterating all within its path. The crater left behind is not just an impact mark but a testament to the flower's otherworldly origin.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Celestial Fireball",
      "Crater of Desolation"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Orbital Drop Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Celestial Fireball",
        "rules": "When activated, the Mix Flower launches a fireball that deals 20d6 fire damage within a 50-foot radius. Targets must succeed on a Dexterity saving throw (DC 18) or take half damage and be knocked prone. The fireball ignores resistance to fire damage."
      },
      {
        "title": "Crater of Desolation",
        "rules": "The impact leaves behind a permanent crater, marking the spot as desolate for 24 hours. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "This ancient artifact requires the user to have basic knowledge of celestial rituals.",
    "vendorReason": "The market is known for its rare and exotic goods, including otherworldly artifacts like the Mix Flower.",
    "shippingDetail": "Ships via Orbital Drop Courier Service with a 2-day delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "The Mix Flower is a rare and powerful artifact that requires significant resources to cultivate and maintain.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T16:37:55.966708+00:00",
    "aiReviewedAt": "2026-07-23T16:37:55.966708+00:00",
    "aiReviewVersion": 1
  },
  "mnevis_order_sacred_bull_blessing": {
    "id": "mnevis_order_sacred_bull_blessing",
    "name": "Mnevis Order Sacred Bull Blessing",
    "description": "The Mnevis Order Sacred Bull Blessing is a sacred amulet worn by initiates of the Mnevis Order. Crafted from polished obsidian and imbued with the essence of an ancient bull statue, it grants you the resilience and stubbornness of its namesake. Wearing this amulet, you find yourself immune to charm and fear spells for 7 days, but also suffer a -2 penalty on Persuasion checks due to your unyielding resolve.",
    "category": "services",
    "price": 1000,
    "icon": "🐂",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Bull-like Stubbornness",
      "Immunity to Charm and Fear"
    ],
    "vendor": "mnevis_order",
    "shippedBy": "Sacred Procession of Mnevis",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bull-like Stubbornness",
        "rules": "You gain advantage on saving throws against charm and fear effects, but suffer a -2 penalty on Persuasion checks for the duration of your next long rest."
      },
      {
        "title": "Immunity to Charm and Fear",
        "rules": "For 7 days after activation, you are immune to all charm and fear spells and abilities. This effect ends when you complete a short or long rest."
      }
    ],
    "levelRequirementReason": "This amulet is suitable for any initiate who needs extra resilience against magical coercion.",
    "vendorReason": "Mnevis Order priests are known for their expertise in crafting and distributing items that empower their followers.",
    "shippingDetail": "Ships within 2 game days via the Sacred Procession, delivered with a ceremonial blessing.",
    "usage": {
      "activation": "Wear it as an amulet and activate by completing a short or long rest.",
      "duration": "7 days from activation.",
      "endsWhen": "Completion of a short or long rest.",
      "charges": "Unlimited, recharges with a rest."
    },
    "priceReason": "The amulet's balance comes from its unique combination of benefits and drawbacks that make it an attractive but not overpowered choice for players.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:15:40.355247+00:00",
    "aiReviewedAt": "2026-07-22T22:15:40.355247+00:00",
    "aiReviewVersion": 1
  },
  "mnevis_order_sun_amulet_service": {
    "id": "mnevis_order_sun_amulet_service",
    "name": "Mnevis Order Sun Amulet Service",
    "description": "The Mnevis Order Sun Amulet Service is a golden pendant imbued with solar magic. Crafted by Sun Priests in the heart of their temple, this amulet channels sunlight to enhance combat prowess and provide light. When exposed to daylight, it grants +1 to attack rolls for 8 hours, but it flickers and burns if left in darkness, causing minor discomfort. A beacon of light, it can be used once a day to cast the Light spell.",
    "price": 1000,
    "icon": "☀️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Solar Fortification",
      "Radiant Light"
    ],
    "vendor": "mnevis_order_temple",
    "shippedBy": "Golden Chain",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Solar Fortification",
        "rules": "Activates on exposure to sunlight. Grants +1 to attack rolls for 8 hours, with a minor discomfort penalty if used indoors or in darkness."
      },
      {
        "title": "Radiant Light",
        "rules": "Can be activated as an action once per day to cast the Light spell (no concentration required), creating bright light in a 20-foot radius for up to 1 hour. Ends when the amulet is no longer exposed to sunlight."
      }
    ],
    "levelRequirementReason": "This amulet provides utility and minor combat enhancements suitable for lower-level characters.",
    "vendorReason": "The Mnevis Order is known for their mastery of solar magic, making them the ideal vendor for this item.",
    "shippingDetail": "Ships via Golden Chain courier with a standard delay of one week.",
    "usage": {
      "activation": "Activates on exposure to sunlight. Can be used once per day to cast Light.",
      "duration": "Solar Fortification lasts for 8 hours in sunlight; Light spell lasts up to 1 hour when active.",
      "endsWhen": "Discomfort ends if the amulet burns, and Light ends when not exposed to sunlight.",
      "charges": "One daily use"
    },
    "priceReason": "This price reflects its utility in combat and magical casting, balanced with its limited duration and one-use per day feature.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T22:15:52.357994+00:00",
    "aiReviewedAt": "2026-07-22T22:15:52.357994+00:00",
    "aiReviewVersion": 1
  },
  "mnevis_order_sun_baked_flatbread_recipe": {
    "id": "mnevis_order_sun_baked_flatbread_recipe",
    "name": "Recipe: Mnevis Order Sun-Baked Flatbread",
    "description": "The Mnevis Order Sun-Baked Flatbread, a flatbread baked under the scorching sun, is more than just sustenance—it's a ritual that strengthens your resolve against darkness. Crafted by Sun Priests using only solar-kissed flour and the warmth of the midday sun, this flatbread imbues its eater with resilience. For 4 hours after consumption, you gain advantage on saving throws against spells or effects associated with darkness and shadow. The bread’s power is undeniable, as it has been blessed by Ra himself, who oversees its creation in his temple.",
    "price": 1000,
    "icon": "🍞",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Solar Ward",
      "Resilience Against Darkness"
    ],
    "vendor": "mnevis_order_temple",
    "shippedBy": "Ra's Divine Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Solar Ward",
        "rules": "After eating a slice of the Mnevis Order Sun-Baked Flatbread, you gain advantage on saving throws against spells or effects associated with darkness and shadow for 4 hours. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Resilience Against Darkness",
        "rules": "For 8 hours after consuming the flatbread, you have resistance to damage from spells or effects that deal radiant or necrotic damage. You must consume a slice of this flatbread at least once every 24 hours to maintain this effect."
      }
    ],
    "levelRequirementReason": "The flatbread's power is accessible to all, as its creation and efficacy are rooted in the timeless rituals of the Sun Priests.",
    "vendorReason": "As the creators and keepers of this ancient recipe, it makes sense that Mnevis Order Temple would be the only vendor for this flatbread.",
    "shippingDetail": "The flatbread must be shipped under a protective sun shield to ensure its solar-kissed properties remain intact during transit.",
    "usage": {
      "activation": "Eating a slice of the Mnevis Order Sun-Baked Flatbread",
      "duration": "4 hours for Solar Ward; 8 hours for Resilience Against Darkness, both renewable with consumption",
      "endsWhen": "At the end of each duration or upon expiration after not consuming another slice within 24 hours",
      "charges": "Unlimited"
    },
    "priceReason": "The flatbread’s rarity and the sacred process involved in its creation justify this price, ensuring only those who truly need it can obtain it.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T22:16:11.206037+00:00",
    "aiReviewedAt": "2026-07-22T22:16:11.206037+00:00",
    "aiReviewVersion": 1
  },
  "mnevis_order_sun_flare_mantle": {
    "id": "mnevis_order_sun_flare_mantle",
    "name": "Mnevis Order Sun Flare Mantle",
    "description": "The Mnevis Order Sun Flare Mantle is a woven mantle made from enchanted linen and sunlight. Its fabric shimmers with captured light, and it hums softly as it stores solar energy. In daylight, it grants +1 to Wisdom saving throws and allows you to cast the Minor Light spell once per day by channeling its stored sunlight. When worn in darkness, it briefly flares, blinding creatures within 5 feet for 1 minute, but this effect cannot be used more than twice a week.",
    "price": 1000,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Sunlight Storage",
      "Daytime Wisdom Boost"
    ],
    "vendor": "mnevis_order_temple",
    "shippedBy": "Solar Shawl Courier",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Sunlight Storage",
        "rules": "You can cast the Minor Light spell once per day by concentrating on the mantle and channeling its stored sunlight. The duration of this spell is the same as normal, but it requires no material components."
      },
      {
        "title": "Daytime Wisdom Boost",
        "rules": "While wearing the mantle in daylight, you gain a +1 bonus to all Wisdom saving throws until dusk."
      }
    ],
    "levelRequirementReason": "The Mantle is crafted for anyone who can afford it and benefits from its effects regardless of class or level.",
    "vendorReason": "As a sacred relic of the Sun Priests, this mantle is sold exclusively by their temple to preserve ancient teachings and empower believers in light magic.",
    "shippingDetail": "The mantle is delivered by Solar Shawl Courier with special delivery handling to ensure it arrives undamaged. The shipment takes a full day to reach its destination.",
    "usage": {
      "activation": "Instantaneous action when casting Minor Light, or passive effect while in daylight.",
      "duration": "Minor Light: Concentration up to 10 minutes; Daytime Wisdom Boost: Until dusk",
      "endsWhen": "Minor Light spell ends naturally, Daytime Wisdom Boost ends at dusk",
      "charges": "Recharges daily"
    },
    "priceReason": "The mantle is priced based on the rare materials used and its unique enchantment that stores sunlight.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T22:16:07.822869+00:00",
    "aiReviewedAt": "2026-07-22T22:16:07.822869+00:00",
    "aiReviewVersion": 1
  },
  "mnevis_order_sun_mirror_focuser": {
    "id": "mnevis_order_sun_mirror_focuser",
    "name": "Mnevis Order Sun Mirror Focuser",
    "description": "The Mnevis Order Sun Mirror Focuser is a gleaming brass device, its surface etched with arcane symbols. Crafted by the Sun Priests of the Mnevis Order, this tool can focus sunlight into a searing beam or diffuse light to enhance plant growth. When focused correctly, it grants advantage on checks involving solar heat for cooking and brewing. Misaim, however, results in a brief flash that temporarily blinds nearby creatures, though the device itself remains unharmed.",
    "category": "equipment",
    "price": 1000,
    "icon": "☀️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Focuses sunlight into a searing beam",
      "Enhances plant growth when diffused"
    ],
    "vendor": "mnevis_order_temple",
    "shippedBy": "Solar Shine Set",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sunbeam Focus",
        "rules": "When activated as an action, this mirror focusses the sun's rays into a narrow beam. The target of your choice within 30 feet must make a DC 15 Dexterity saving throw or be blinded until the start of your next turn."
      },
      {
        "title": "Solar Enhancement",
        "rules": "When activated as an action, this mirror diffuses sunlight to enhance plant growth. You gain advantage on checks involving solar heat for cooking and brewing. This effect lasts for 10 minutes."
      }
    ],
    "levelRequirementReason": "Requires no specific class or background, making it accessible to all adventurers.",
    "vendorReason": "The Mnevis Order is renowned for its expertise in solar magic and the creation of tools that harness the sun's power.",
    "shippingDetail": "Ships via Solar Wind Express, ensuring timely delivery across the land.",
    "usage": {
      "activation": "Action or Bonus Action to focus or diffuse sunlight.",
      "duration": "Instantaneous for focusing; lasts 10 minutes when diffusing.",
      "endsWhen": "Target successfully saves against blinding effect; duration ends naturally otherwise.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's rarity and unique functionality justify its fair value in XP terms.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T22:16:46.264836+00:00",
    "aiReviewedAt": "2026-07-22T22:16:46.264836+00:00",
    "aiReviewVersion": 1
  },
  "modron_march_calculator": {
    "id": "modron_march_calculator",
    "name": "Modron March Calculator",
    "description": "The Modron March Calculator is a meticulously crafted, clockwork device that hums with the precision of Mechanus itself. This intricate machine can predict lawful-aligned events up to 24 hours in advance with uncanny accuracy. Its gears and cogs are etched with sigils from the farthest reaches of Mechanus, ensuring its forecasts hold true. Once per month, a user can force any creature within reach to reroll a single die roll, potentially altering fate at the last second.",
    "price": 1000,
    "icon": "📐",
    "stock": 6,
    "rarity": "epic",
    "effects": [
      "Predict lawful events",
      "Forceful Die Reroll"
    ],
    "vendor": "mechanus_outpost",
    "shippedBy": "Modron March Courier Service",
    "levelRequirement": 13,
    "effectDetails": [
      {
        "title": "Predict Lawful Events",
        "rules": "The user can make one prediction per day regarding a lawful-aligned event. This prediction is accurate for up to 24 hours, providing valuable foresight."
      },
      {
        "title": "Forceful Die Reroll",
        "rules": "Once per month, the user can force any creature within reach to reroll a single die roll. The reroll must be used immediately after the original roll is made."
      }
    ],
    "levelRequirementReason": "Requires significant understanding of lawful mechanics and precision engineering.",
    "vendorReason": "The Mechanus Outpost specializes in items related to the lawful plane, making it a fitting vendor for this device.",
    "shippingDetail": "Ships directly from Mechanus, ensuring the calculator arrives fully powered and calibrated.",
    "usage": {
      "activation": "Passive ability; no activation required.",
      "duration": "Permanent until recharged or destroyed.",
      "endsWhen": "Exhausted of charges or destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the device's ability to predict events and its one-time die-reroll utility.",
    "priceOriginal": 305000,
    "priceReviewedAt": "2026-07-22T22:16:33.755696+00:00",
    "aiReviewedAt": "2026-07-22T22:16:33.755696+00:00",
    "aiReviewVersion": 1
  },
  "molten_bracelet": {
    "id": "molten_bracelet",
    "name": "Molten Bracelet",
    "description": "The Molten Bracelet hums softly against your wrist, a ring of cooled lava that warms your skin and pulses with fiery energy. Crafted from ancient volcanic glass and imbued with elemental magic, it not only shields you from fire damage but also projects an aura that scorches attackers within its reach. The bracelet's molten core can melt fragile items on touch, a reminder of the raw power it wields.",
    "category": "equipment",
    "price": 33000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Fire Resistance",
      "Molten Aura"
    ],
    "vendor": "Steamworks",
    "shippedBy": "Lead Pouch",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "While wearing the Molten Bracelet, you have resistance to fire damage. This effect is always active while the bracelet is worn."
      },
      {
        "title": "Molten Aura",
        "rules": "Once per short rest, you can activate your Molten Aura, creating a 10-foot radius of searing heat centered on yourself. Any creature within this area must succeed on a DC 15 Dexterity saving throw or take 2d6 fire damage."
      }
    ],
    "levelRequirementReason": "The bracelet's power requires a proficient spellcaster to channel the elemental magic effectively.",
    "vendorReason": "Steamworks specializes in arcane and alchemical items, making it an appropriate vendor for such a powerful piece of equipment.",
    "shippingDetail": "The Molten Bracelet is shipped securely within a lead-lined pouch to protect against accidental damage during transit.",
    "usage": {
      "activation": "Reaction or Bonus Action",
      "duration": "Instantaneous activation; ends immediately after use",
      "endsWhen": "Exhausts upon use, recharges at the start of your next long rest",
      "charges": "1 charge per short rest"
    },
    "priceReason": "The bracelet's unique crafting materials and powerful elemental magic justify its high price.",
    "priceOriginal": 33000,
    "priceReviewedAt": "2026-07-22T22:17:08.678458+00:00",
    "aiReviewedAt": "2026-07-22T22:17:08.678458+00:00",
    "aiReviewVersion": 1
  },
  "monks_order_meditation_beads_service": {
    "id": "monks_order_meditation_beads_service",
    "name": "Monks Order Meditation Beads Service",
    "description": "The Monks Order Meditation Beads are intricately carved with symbols of peace and resilience. These beads are said to channel the tranquility of the Order's sacred grounds, allowing you to draw inner strength during times of stress. The rhythmic clicks of the beads serve as a constant reminder to focus on your center. This relic grants advantage on Wisdom saving throws and allows you to regain 1 ki point or inspiration when meditated upon.",
    "price": 1000,
    "icon": "📿",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Wisdom Advantage",
      "Inner Peace"
    ],
    "vendor": "monks_order_temple",
    "shippedBy": "Prayer String",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom Advantage",
        "rules": "When you take the Attentive action, you gain advantage on Wisdom saving throws until the end of your next turn. This effect lasts for a short duration and can be used once per long rest."
      },
      {
        "title": "Inner Peace",
        "rules": "You may focus on the beads to regain 1 ki point or inspiration. This action is a bonus action, and you can use this feature three times per long rest, recovering one additional use when you finish a short rest."
      }
    ],
    "levelRequirementReason": "This item serves as an introduction to the concept of inner peace and focus for players at the beginning of their journey.",
    "vendorReason": "The Monks Order are known for their teachings on meditation and inner strength, making them the perfect vendors for these beads.",
    "shippingDetail": "Shipped via the Prayer String, a courier that ensures spiritual blessings accompany your package.",
    "usage": {
      "activation": "Bonus action or as part of the Attentive action",
      "duration": "Until the end of your next turn for Wisdom Advantage. Instantaneous for Inner Peace.",
      "endsWhen": "Ends when you no longer need it during a short rest, or at the start of your next long rest.",
      "charges": "3 uses per long rest; regains one use after each short rest."
    },
    "priceReason": "This price reflects its uncommon rarity and utility as an introductory tool for meditation and focus, suitable for starting players.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T22:16:43.238217+00:00",
    "aiReviewedAt": "2026-07-22T22:16:43.238217+00:00",
    "aiReviewVersion": 1
  },
  "monks_order_zen_garden_raking": {
    "id": "monks_order_zen_garden_raking",
    "name": "Monks Order Zen Garden Raking Service",
    "description": "With a practiced stroke of the rake, the Monks Order Zen Garden Raking Service calms your mind and spirit. The gardeners' precision clears away mental fatigue, leaving you refreshed. For an hour after use, you gain advantage on Wisdom (Perception) checks, enhancing your awareness of the world around you. However, to maintain this peace, you must meditate for one hour each morning; failing to do so incurs a level of exhaustion.",
    "category": "services",
    "price": 1000,
    "icon": "🥢",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Clears mental fatigue",
      "Advantage on Wisdom checks"
    ],
    "vendor": "monks_order",
    "shippedBy": "Peaceful Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mental Refreshment",
        "rules": "When you use the service, you are no longer considered to be suffering from a level of exhaustion caused by stress. This effect lasts until the start of your next day."
      },
      {
        "title": "Enhanced Awareness",
        "rules": "For one hour after using the service, you have advantage on Wisdom (Perception) checks. This effect ends when you fall unconscious or at the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This service is suitable for all levels as it aids in maintaining mental clarity and focus.",
    "vendorReason": "The Monks Order Gardeners are known for their dedication to mental well-being through natural means.",
    "shippingDetail": "Delivered within the day by Peaceful Courier, ensuring your mind is ready for the challenges ahead.",
    "usage": {
      "activation": "A daily service provided upon request.",
      "duration": "Instantaneous effect with ongoing benefits for one hour.",
      "endsWhen": "At the start of your next day or when you fall unconscious or complete a long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The service is priced at 1000 XP, reflecting its value in providing mental clarity and enhancing perception.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T22:16:49.990193+00:00",
    "aiReviewedAt": "2026-07-22T22:16:49.990193+00:00",
    "aiReviewVersion": 1
  },
  "monks_order_zen_garden_raking_premium": {
    "id": "monks_order_zen_garden_raking_premium",
    "name": "Monks Order Zen Garden Raking (Premium)",
    "description": "The Monks Order Zen Garden Raking (Premium) is a meticulously crafted rake that channels the serene essence of a master gardener's touch. This premium tool not only clears away mental distractions but also leaves behind a sense of calm and clarity. Using this rake during your meditative practice ensures that you achieve perfect balance, allowing you to effortlessly clear two layers of exhaustion from your mind while gaining advantage on Wisdom saving throws for the next 24 hours.",
    "category": "premium",
    "price": 1000,
    "icon": "🥢",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Zen Clearing",
      "Mindful Advantage"
    ],
    "vendor": "monks_order",
    "shippedBy": "Peaceful Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Zen Clearing",
        "rules": "When you use this rake, you clear two levels of exhaustion and gain advantage on Wisdom saving throws for the next 24 hours. This effect ends if you lose your temper or engage in combat."
      },
      {
        "title": "Mindful Advantage",
        "rules": "You must maintain a state of zen while using this rake; otherwise, you take a -5 penalty to all ability checks until your next long rest. If you get angry or lose your temper, the rake's benefits are immediately lost."
      }
    ],
    "levelRequirementReason": "This premium tool requires a certain level of mental discipline and focus for its full effect.",
    "vendorReason": "Monks Order Master Gardeners have perfected the art of creating tools that enhance one's inner peace and clarity, making this rake an essential part of their offerings.",
    "shippingDetail": "Ships with the Peaceful Courier within a week; requires special handling to ensure its delicate craftsmanship remains intact during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect, lasts for 24 hours on successful use",
      "endsWhen": "If you lose your temper or engage in combat, the effect ends immediately",
      "charges": "Unlimited"
    },
    "priceReason": "The premium quality and craftsmanship of this rake justify its relatively lower price compared to other rare items.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:17:15.877688+00:00",
    "aiReviewedAt": "2026-07-22T22:17:15.877688+00:00",
    "aiReviewVersion": 1
  },
  "monks_order_zen_meditation_mill": {
    "id": "monks_order_zen_meditation_mill",
    "name": "Monks Order Zen Meditation Mill",
    "description": "The Monks Order Zen Meditation Mill is a sleek, hand-cranked contraption made of polished bamboo and jade. It hums with an ancient tune as it turns, its precision crafted to grind noodles into a smooth paste that enhances flavor and texture. Users gain advantage on Wisdom (Perception) checks related to food preparation and can choose one ability check involving the use of tools each day to be treated as magically calmed, reducing stress immediately.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Grinds Mindfully",
      "Magical Calm"
    ],
    "vendor": "monks_order_temple",
    "shippedBy": "Zen Zest Zone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grinds Mindfully",
        "rules": "When you activate the mill for grinding noodles, you gain advantage on any Wisdom (Perception) check related to food preparation. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Magical Calm",
        "rules": "Once per day upon activation, you can choose one ability check involving the use of tools and treat it as if you had a calm mind (no penalties for stress). This effect ends when used."
      }
    ],
    "levelRequirementReason": "The mill is designed to be accessible to beginners in cooking or monks seeking a simpler life.",
    "vendorReason": "Monks of the Order are known for their culinary expertise and this mill is a product of their meticulous craftsmanship.",
    "shippingDetail": "Ships via messenger pigeon, delivered within one week.",
    "usage": {
      "activation": "Action (activate once per short or long rest)",
      "duration": "Until the end of your next short or long rest; ends when used for calm mind effect",
      "endsWhen": "At the start of your next short or long rest after use, or if you deactivate it early",
      "charges": "Unlimited uses"
    },
    "priceReason": "The mill is crafted with rare bamboo and jade, making it a valuable tool for both monks and travelers.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T22:17:02.035772+00:00",
    "aiReviewedAt": "2026-07-22T22:17:02.035772+00:00",
    "aiReviewVersion": 1
  },
  "monks_order_zen_robe": {
    "id": "monks_order_zen_robe",
    "name": "Monks Order Zen Robe",
    "description": "The Monks Order Zen Robe is a flowing garment made from the softest silk and lined with whispers of the natural world. Woven by the skilled artisans of the Order Weavers, it hums with calm during meditation, granting its wearer advantage on Wisdom (Insight) checks while in deep focus. The robe's fabric is so finely crafted that it barely brushes against the skin, yet it offers a subtle resistance to the pull of harsh terrain, aiding concentration even when feet slip over rocky ground.",
    "price": 1000,
    "icon": "👘",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Mindful Insight",
      "Rugged Focus"
    ],
    "vendor": "monks_order_monastery",
    "shippedBy": "Peaceful Pleat",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mindful Insight",
        "rules": "While wearing this robe during meditation, you gain advantage on Wisdom (Insight) checks. This effect lasts for the duration of your meditation session."
      },
      {
        "title": "Rugged Focus",
        "rules": "The robe's fabric provides a +1 bonus to your Concentration saving throws and ability checks made while standing on rough terrain, such as rocky or sandy ground. This effect persists until you stop meditating or leave the rough area."
      }
    ],
    "levelRequirementReason": "The robe's intricate design and material require a proficient wearer capable of focusing on meditation.",
    "vendorReason": "Trained artisans at the Order Weavers forge these robes to aid in their monks' spiritual and physical discipline.",
    "shippingDetail": "The robe is carefully packed to ensure it arrives in perfect condition, even over long distances.",
    "usage": {
      "activation": "Worn during meditation sessions only.",
      "duration": "While meditating and for up to an hour after stopping meditation.",
      "endsWhen": "You stop meditating or leave the rough terrain area.",
      "charges": "Unlimited, as it is a passive effect."
    },
    "priceReason": "The robe's fine silk and artisanal craftsmanship justify a price that reflects its utility without overshadowing more powerful items.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T22:17:20.101235+00:00",
    "aiReviewedAt": "2026-07-22T22:17:20.101235+00:00",
    "aiReviewVersion": 1
  },
  "monks_order_zen_zen_noodles_recipe": {
    "id": "monks_order_zen_zen_noodles_recipe",
    "name": "Recipe: Monks Order Zen Zen Noodles",
    "description": "The Recipe: Monks Order Zen Zen Noodles is a parchment of serene wisdom and balance, carefully crafted by the Order Cooks in their temple kitchen. Its inked pages detail the precise method to boil noodles in harmony with meditation, ensuring each bite brings calm and clarity. When you consume these noodles, you gain advantage on Wisdom (Medicine) checks for 2 hours, and you are immediately calmed, removing any state of stress or exhaustion.",
    "price": 1000,
    "icon": "🍜",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Zen Noodle Calm",
      "Wisdom Boost"
    ],
    "vendor": "monks_order_temple",
    "shippedBy": "Courier of Zenful Deliveries",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Zen Noodle Calm",
        "rules": "Eating the noodles allows you to instantly remove any stressed or exhausted condition. This effect is instantaneous and does not have a duration."
      },
      {
        "title": "Wisdom (Medicine) Boost",
        "rules": "By consuming the noodles, you gain advantage on Wisdom (Medicine) checks for 2 hours. This benefit requires no action to activate but ends when the time expires or if you consume another meal that grants a similar effect."
      }
    ],
    "levelRequirementReason": "This recipe is accessible at level 1 as it promotes basic meditative and culinary skills.",
    "vendorReason": "The monks of the temple are known for their mastery over both spiritual and practical matters, including the art of cooking and sharing such wisdom through recipes.",
    "shippingDetail": "Delivered with a serene message from the Order Cooks wishing you peace in your endeavors.",
    "usage": {
      "activation": "Eating the noodles",
      "duration": "2 hours",
      "endsWhen": "Expiration or consumption of another meal that grants similar benefits",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's price is set at 1000 XP, reflecting the effort and knowledge required to create such a revered culinary practice.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T22:17:32.361593+00:00",
    "aiReviewedAt": "2026-07-22T22:17:32.361593+00:00",
    "aiReviewVersion": 1
  },
  "monsters_grognak_fur_loincloth": {
    "id": "monsters_grognak_fur_loincloth",
    "name": "Monsters Grognak Fur Loincloth ",
    "description": "The Monsters Grognak Fur Loincloth is a barbarian-style garment made from the rugged pelts of Grognaks, fierce creatures from the deep woods. It grants +1 to Strength (Intimidation) and adds an authentic, albeit itchy, touch to any battle. Crafted by Monster Comic Crafters using actual fur, this item not only boosts your intimidation prowess but also subtly makes you a walking distraction with its tendency to attract unwanted attention.",
    "category": "equipment",
    "price": 1000,
    "icon": "👙",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "+1 to Intimidation checks",
      "Attracts Fleas and Itchiness"
    ],
    "vendor": "monsters_cave",
    "shippedBy": "Furry Patch Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength (Intimidation) Boost",
        "rules": "Grants +1 bonus to Strength (Intimidation) checks. This effect is active as long as the item is worn."
      },
      {
        "title": "Itchy Distraction",
        "rules": "While wearing this loincloth, you suffer from a minor itchiness that can be alleviated by making an Athletics check with disadvantage. The effect lasts until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers at the beginning of their journey, offering them a small but useful boost.",
    "vendorReason": "The Monsters Cave is known for its unique and often quirky items crafted by local artisans using materials from the wild.",
    "shippingDetail": "Ships via Furry Patch Express, a reliable courier service that ensures prompt delivery to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and ongoing as long as the item is worn.",
      "endsWhen": "Rests or removal of the loincloth.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the unique materials used in its creation, including the rare Grognak fur and the labor-intensive crafting process by Monster Comic Crafters.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T22:17:25.480656+00:00",
    "aiReviewedAt": "2026-07-22T22:17:25.480656+00:00",
    "aiReviewVersion": 1
  },
  "monsters_grognak_steak_knives": {
    "id": "monsters_grognak_steak_knives",
    "name": "Monsters Grognak Steak Knives ",
    "description": "The Monsters Grognak Steak Knives are colossal, bone-chipped steel cleavers forged in the savage forges of the Grognak mountains. These knives are not just weapons but also culinary tools, crafted to slice through even the toughest barbarian steaks with ease. Their massive size makes them ill-suited for intricate work, but their edge is sharp enough to deliver +1 damage when used as a weapon in a brief melee encounter. Craftsmen from the Grognak lair are known for their brutal and efficient designs, and these knives embody that ethos perfectly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥩",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Tough Meat Cutter",
      "Brief Melee Weapon"
    ],
    "vendor": "monsters_lair",
    "shippedBy": "Raging Wind Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tough Meat Cutter",
        "rules": "When used to carve meat, the wielder gains advantage on Strength (Athletics) checks. This effect lasts until the end of the wielder's next turn."
      },
      {
        "title": "Brief Melee Weapon",
        "rules": "If used as a melee weapon for no more than two turns, the wielder deals an additional +1 damage. The knife cannot be used in this manner again until after a short or long rest."
      }
    ],
    "levelRequirementReason": "These knives are designed to be immediately usable by anyone, even those just starting their adventures.",
    "vendorReason": "The Monsters Lair specializes in selling the tools and weapons crafted by the Grognak forges, ensuring adventurers have the gear they need right from the start of their journey.",
    "shippingDetail": "These knives are shipped via Raging Wind Express, known for its swift delivery through treacherous mountain passes.",
    "usage": {
      "activation": "Instantaneous when used to carve or as a weapon in melee combat.",
      "duration": "Until the end of your next turn after carving; until the start of your next turn after using it as a weapon.",
      "endsWhen": "The effect ends naturally at the specified duration.",
      "charges": "Unlimited, but cannot be used as a weapon again for 1d4+1 turns without resting."
    },
    "priceReason": "Crafted by skilled blacksmiths in the Grognak mountains, these knives offer both utility and durability at this balanced price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T22:18:00.289250+00:00",
    "aiReviewedAt": "2026-07-22T22:18:00.289250+00:00",
    "aiReviewVersion": 1
  },
  "monsters_grognak_steak_recipe": {
    "id": "monsters_grognak_steak_recipe",
    "name": "Recipe: Monsters Grognak Steak ",
    "description": "Crafted from a monstrous rump roast that defies belief, this recipe for Monsters Grognak Steak is a feast fit for barbarian kings. The meat's origin tells of a battle where the largest beast bled into a single, colossal cut. Consuming it grants +2 Strength and the raw power to shatter bones in combat, but at the cost of -1 Intelligence, leaving diners speechless for an hour after their meal.",
    "price": 1000,
    "icon": "🥩",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Grill huge steak (30 min)",
      "Meat coma"
    ],
    "vendor": "monsters_lair",
    "shippedBy": "Meaty Manual",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Grill huge steak",
        "rules": "Eating the cooked steak restores +2 Strength for 1 hour. It can be prepared by a chef or barbarian with a successful DC 15 Wisdom (Survival) check."
      },
      {
        "title": "Meat coma",
        "rules": "After eating, the consumer suffers a -1 penalty to Intelligence checks and saving throws until their next long rest. This effect can only be endured once per day."
      }
    ],
    "levelRequirementReason": "Requires basic combat experience and strength to handle the massive cut.",
    "vendorReason": "The lair's chef specializes in exotic meat dishes, including legendary cuts like this one.",
    "shippingDetail": "Delivered by a magical beast courier, ensuring freshness during travel.",
    "usage": {
      "activation": "Consuming the cooked steak upon completion of grilling.",
      "duration": "1 hour and until next long rest after eating.",
      "endsWhen": "The effect is no longer active when the consumer's next long rest occurs.",
      "charges": "Unlimited uses, one per day."
    },
    "priceReason": "Balanced to reflect its rare and powerful nature while remaining accessible for a mid-level character.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T22:17:34.783403+00:00",
    "aiReviewedAt": "2026-07-22T22:17:34.783403+00:00",
    "aiReviewVersion": 1
  },
  "monsters_grognak_style_axe_premium": {
    "id": "monsters_grognak_style_axe_premium",
    "name": "Monsters Grognak-Style Axe ",
    "description": "The Monsters Grognak-Style Axe is a barbarian axe forged from the very bones of its namesake, Grognak the Grim. Its massive frame and comic book flair intimidate foes at first glance, and its hilt is adorned with a skull that glows faintly in the dark. This weapon grants +1 damage on attacks and allows you to pose for an extra point of inspiration if you score a critical hit. It also intimidates with a +2 bonus when you use your Intimidation skill or make a pose.",
    "price": 1000,
    "icon": "🪓",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Intimidating Presence",
      "Critical Inspiration"
    ],
    "vendor": "monsters_lair",
    "shippedBy": "Comic Wrap",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Intimidating Presence",
        "rules": "When you score a critical hit with this axe, you can make a DC 15 Intimidation check as an immediate reaction. On a success, one creature of your choice within 30 feet must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute."
      },
      {
        "title": "Critical Inspiration",
        "rules": "If you score a critical hit with the Monsters Grognak-Style Axe, you regain 1d4 + your Charisma modifier inspiration points. This effect can occur only once per short rest."
      }
    ],
    "levelRequirementReason": "This axe is designed for seasoned barbarians who have already proven their strength and prowess in battle.",
    "vendorReason": "Monsters Lair specializes in weapons forged by legendary blacksmiths, making the Monsters Grognak-Style Axe a natural fit for their inventory.",
    "shippingDetail": "The axe is shipped wrapped in comic book pages and arrives with a free copy of 'Grognak's Grim Adventures'.",
    "usage": {
      "activation": "Instantaneous effect on critical hit, passive intimidation presence available as an immediate reaction.",
      "duration": "Intimidation effect lasts for 1 minute or until the target is no longer within range.",
      "endsWhen": "The effect ends if you are incapacitated or die.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This axe's rarity, unique design, and special abilities justify its moderate price of 1000 XP.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T22:17:54.649237+00:00",
    "aiReviewedAt": "2026-07-22T22:17:54.649237+00:00",
    "aiReviewVersion": 1
  },
  "monty_mole_drill": {
    "id": "monty_mole_drill",
    "name": "Monty Mole Drill",
    "description": "The Monty Mole Drill is a compact, drill-shaped device forged from enchanted steel and adorned with emblems of ancient earth spirits. It hums with latent power when activated, capable of burrowing through soft earth at an impressive rate of 20 feet per round, leaving behind a shimmering trail of mineral dust. The drill’s sharp teeth deliver a piercing blow upon underground attacks, dealing 2d6 damage to foes encountered in the depths below. With three charges replenished daily by the whimsical gnomes of Gilded Gryphon, this tool is perfect for adventurers seeking to explore hidden caverns and ancient ruins.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Burrowing Drill",
      "Underground Pierce"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Swift Gnome Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Burrowing Drill",
        "rules": "When activated as an action, the Monty Mole Drill burrows through soft earth at a rate of 20 feet per round. This effect lasts until the end of your next turn or when you stop using it. If you move into or through soft earth with this feature active, you leave behind a trail of mineral dust that can be seen from above."
      },
      {
        "title": "Underground Pierce",
        "rules": "As an action while underground, the Monty Mole Drill delivers a piercing attack against creatures within 30 feet. The attack deals 2d6 piercing damage and has advantage if you have burrowed through soft earth to reach your target."
      }
    ],
    "levelRequirementReason": "This tool is designed for adventurers who are just starting their journey, allowing them to explore underground without requiring high-level proficiency.",
    "vendorReason": "The gnomes of Gilded Gryphon specialize in crafting tools that enhance exploration and adventure, making the Monty Mole Drill a natural addition to their inventory.",
    "shippingDetail": "Delivered within one week by the Swift Gnome Delivery Service, ensuring adventurers can begin their explorations without delay.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Until end of next turn or when stopped using it",
      "endsWhen": "Stop using it or reach solid stone",
      "charges": "3 charges per day"
    },
    "priceReason": "The Monty Mole Drill offers a unique combination of utility and combat capability, making it a valuable tool for explorers without being overpowered.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T22:18:02.530586+00:00",
    "aiReviewedAt": "2026-07-22T22:18:02.530586+00:00",
    "aiReviewVersion": 1
  },
  "monty_mole_tunnel_map": {
    "id": "monty_mole_tunnel_map",
    "name": "Monty Mole's Tunnel Map",
    "description": "Monty Mole's Tunnel Map is a weathered parchment stained with dirt and worm droppings, revealing ancient tunnels beneath the earth. It occasionally shows hidden passageways, though it may mislead you by being upside down more than half the time. This map has an uncanny knack for leading adventurers to either treasure or toilets—though the latter often involves a detour through damp underground chambers teeming with moles eager for worms in exchange for navigation advice.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Reveals Hidden Passages",
      "Moles' Misleading Map"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Buried Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Passages",
        "rules": "As an action, you can unfold the map to reveal up to 1d4 hidden passageways in the current area. These are likely to lead either to treasure or a detour through moles' burrows. The map has a 25% chance of being upside down, causing you to become disoriented if not corrected by a successful Wisdom (Perception) check with a DC of 13."
      },
      {
        "title": "Moles' Misleading Map",
        "rules": "At the start of your turn while holding this map, there is a 20% chance that moles will offer you information about nearby tunnels in exchange for worms. If you refuse or fail to provide the requested worms, the map may become even more confusing, doubling its upside-down chances until it is corrected."
      }
    ],
    "levelRequirementReason": "This item's unpredictable nature and the need for quick decision-making make it suitable for adventurers who have reached at least first level.",
    "vendorReason": "The Valley Trading Post often deals in relics from the underground, which makes sense given their proximity to ancient tunnels and moles' lairs.",
    "shippingDetail": "The map is delivered wrapped tightly in earthworm casings for protection against dampness during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, ends on the next turn",
      "endsWhen": "If you fail a Wisdom (Perception) check or refuse to trade worms with moles",
      "charges": "Unlimited"
    },
    "priceReason": "The map's unpredictable nature and the value of information in underground exploration justify its moderate price.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T22:18:05.982562+00:00",
    "aiReviewedAt": "2026-07-22T22:18:05.982562+00:00",
    "aiReviewVersion": 1
  },
  "moonfang_pack_howl_charm": {
    "id": "moonfang_pack_howl_charm",
    "name": "Moonfang Pack Howl Charm",
    "description": "The Moonfang Pack Howl Charm is a wolf-fang amulet, a relic of ancient werewolf clans. Crafted from moonlit bone and enchanted by the pack’s howls, it grants you a taste of their unity and strength. When you howl under a crescent moon, you and your allies within 30 feet gain +5 temporary hit points as if bonded by a shared purpose. This charm also sharpens your senses, giving you advantage on checks to track or intimidate beasts, as the pack’s wisdom guides your every move.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐺",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Pack Bond",
      "Enhanced Intimidation"
    ],
    "vendor": "moonfang_pack",
    "shippedBy": "Pack Runner",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Pack Bond",
        "rules": "As a bonus action, you can howl under a crescent moon. You and all allies within 30 feet gain +5 temporary hit points until the end of your next turn. This effect can be used once per short rest."
      },
      {
        "title": "Enhanced Intimidation",
        "rules": "You have advantage on checks to track or intimidate beasts for 1 hour, during which time you are considered a member of the pack. This effect ends when you leave an area dominated by beast sounds."
      }
    ],
    "levelRequirementReason": "The Moonfang Pack Howl Charm requires a level 3 character to harness its power and align with the pack's strength.",
    "vendorReason": "Moonfang Pack, as the keepers of the amulet’s lore, are trusted to sell items that echo their legacy.",
    "shippingDetail": "The charm is delivered by a trusted pack runner who ensures it arrives howling with fresh moonlight.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "Leaving an area dominated by beast sounds or using Pack Bond again on the same short rest",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Crafted from rare moonlit bone and imbued with ancient magic, the Moonfang Pack Howl Charm is a balanced purchase for characters seeking to connect with their inner pack.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-22T22:18:24.041585+00:00",
    "aiReviewedAt": "2026-07-22T22:18:24.041585+00:00",
    "aiReviewVersion": 1
  },
  "moonfang_pack_howl_horn_funnel": {
    "id": "moonfang_pack_howl_horn_funnel",
    "name": "Moonfang Pack Howl Horn Funnel",
    "description": "This funnel is shaped like a wolf's howling horn and crafted from polished black obsidian. When used to pour berry jam, it channels lunar energy, granting advantage on checks made at night. The howl of the pack can be heard for miles when in use, alerting all nearby members of your location and activities. Pack Carvers forged this tool with ancient techniques, ensuring its durability and magical properties are maintained.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍓",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Pour",
      "Pack Alert"
    ],
    "vendor": "moonfang_pack_lair",
    "shippedBy": "Lunar Liquid Ladle Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Pour",
        "rules": "When used to pour liquids at night, the user gains advantage on checks related to food preparation. This effect lasts for the duration of a short rest."
      },
      {
        "title": "Pack Alert",
        "rules": "The funnel emits a loud howl when in use, alerting all members of the local Moonfang Pack within 1 mile. The sound can be heard even through noise and obstacles if conditions are favorable. This effect lasts until the funnel is put away or the user stops pouring."
      }
    ],
    "levelRequirementReason": "This item aids in night activities but does not require high-level proficiency to use.",
    "vendorReason": "Moonfang Pack Carvers are renowned for their craftsmanship and knowledge of the pack's needs, making this funnel a standard item.",
    "shippingDetail": "The funnel is delivered with a special delivery ensuring it arrives in perfect condition without any damage.",
    "usage": {
      "activation": "As an action when pouring liquids at night.",
      "duration": "Until the user stops using it or completes a short rest.",
      "endsWhen": "The funnel is put away or the user ceases pouring.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique crafting and magical properties justify this price, providing significant utility for night activities.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T22:18:15.452592+00:00",
    "aiReviewedAt": "2026-07-22T22:18:15.452592+00:00",
    "aiReviewVersion": 1
  },
  "moonfang_pack_howl_ritual_service": {
    "id": "moonfang_pack_howl_ritual_service",
    "name": "Moonfang Pack Howl Ritual Service",
    "description": "Invoke the ancient howl of the Moonfang Pack, a ritual that calls forth spectral wolves to aid you in battle. These spirits are not mere illusions but spectral kin, offering true combat support for an hour. The echoes of their howls ripple across the battlefield, alerting enemies of your presence and drawing their attention away from allies. Crafted by Werewolf Shamans using ancient rituals and moonlit herbs, this service is a potent tool in any werewolf's arsenal.",
    "price": 1000,
    "icon": "🌕",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Spectral Wolf Aid",
      "Alert Echoes"
    ],
    "vendor": "moonfang_pack_den",
    "shippedBy": "Lunar Call Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Wolf Aid",
        "rules": "Activates as an action. Summons 1d4 spectral wolves that provide aid in battle for 1 hour. Each wolf deals 1d6 damage per round to enemies within reach, and they can take the Attack action on their turn."
      },
      {
        "title": "Alert Echoes",
        "rules": "The howl creates an echoing effect that alerts allies and distracts enemies. Enemies within a 30-foot radius must make a Wisdom saving throw (DC 12) or become distracted until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This ritual service is complex, requiring significant magical knowledge and control over spectral wolves.",
    "vendorReason": "Moonfang Pack Den specializes in werewolf-related rituals and services, as they are the heart of the Moonfang Pack's territory.",
    "shippingDetail": "The delivery is expedited by Lunar Call Express, ensuring the ritual service arrives at the correct phase of the moon for maximum potency.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "The howl fades after an hour or when a successful saving throw is made against the Alert Echoes effect.",
      "charges": "Unlimited, but requires concentration"
    },
    "priceReason": "This ritual service is moderately priced due to its utility in battle and the specialized knowledge required for its activation.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T22:19:03.171312+00:00",
    "aiReviewedAt": "2026-07-22T22:19:03.171312+00:00",
    "aiReviewVersion": 1
  },
  "moonfang_pack_wolf_berry_jam_recipe": {
    "id": "moonfang_pack_wolf_berry_jam_recipe",
    "name": "Recipe: Moonfang Pack Wolf Berry Jam",
    "description": "This recipe for Moonfang Pack Wolf Berry Jam yields a thick, dark purple spread that exudes the essence of the lunar cycle. Only forager wolves who understand the pack's howls can create this jam, which is said to strengthen their pack bonds and enhance their senses. The jam's flavor transforms bread into a night-vision aid, granting creatures within 30 feet darkvision for four hours when spread on bread at twilight or dawn.",
    "price": 1000,
    "icon": "🍓",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Moonlight Jam",
      "Pack Bond Strengthening"
    ],
    "vendor": "moonfang_pack_lair",
    "shippedBy": "Lunar Jam Ledger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Moonlight Jam",
        "rules": "When a creature consumes one slice of bread with jam spread, it gains darkvision for 4 hours within 30 feet. This effect lasts until the creature finishes its next long rest or is dispelled."
      },
      {
        "title": "Pack Bond Strengthening",
        "rules": "While using this recipe, the pack's bonds are temporarily strengthened, increasing each member's Charisma by +1 for 4 hours. This effect ends if a pack member leaves the area of effect, or when the jam is consumed."
      }
    ],
    "levelRequirementReason": "Only experienced foragers can correctly harvest and process the lunar berries necessary for this recipe.",
    "vendorReason": "The Moonfang Pack Lairs hold exclusive knowledge of wolfberry harvesting in the night's cycle.",
    "shippingDetail": "Delivered by full moon, ensuring the berries are at their peak freshness and potency.",
    "usage": {
      "activation": "Consume one slice of bread with jam spread at twilight or dawn.",
      "duration": "4 hours upon consumption until next long rest or dispelled.",
      "endsWhen": "Upon finishing a long rest, or if the jam is consumed by another creature.",
      "charges": "Unlimited; can be used daily."
    },
    "priceReason": "The rarity and the specialized knowledge required to create this recipe justify its modest price in XP.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T22:18:35.496377+00:00",
    "aiReviewedAt": "2026-07-22T22:18:35.496377+00:00",
    "aiReviewVersion": 1
  },
  "moonfang_pack_wolf_pelt_mantle": {
    "id": "moonfang_pack_wolf_pelt_mantle",
    "name": "Moonfang Pack Wolf Pelt Mantle",
    "description": "The Moonfang Pack Wolf Pelt Mantle is a rugged, moonlit cloak made from the pelts of wolves that roamed the lunar glades. It whispers in the wind and howls faintly under the full moon, lending it an ethereal glow. The mantle grants advantage on Survival checks for tracking during the night and enhances the wearer's ability to notice pack movements by +1 to Wisdom (Perception) when in a group of animals or people.",
    "price": 1000,
    "icon": "🧥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Tracking",
      "Pack Awareness"
    ],
    "vendor": "moonfang_pack_lair",
    "shippedBy": "Fur Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Tracking",
        "rules": "When under a full moon, the wearer gains advantage on Survival checks related to tracking. This effect lasts until the start of their next turn after the moon sets."
      },
      {
        "title": "Pack Awareness",
        "rules": "The wearer has advantage on Wisdom (Perception) checks made while in close proximity to a group of animals or people, enhancing their ability to notice movements and sounds. This benefit lasts until the end of each long rest."
      }
    ],
    "levelRequirementReason": "The mantle's effects are subtle but useful for new adventurers looking to enhance their wilderness skills.",
    "vendorReason": "Moonfang Pack Lair specializes in goods made from the pelts of wolves and other creatures found within their territory, making this mantle a natural addition to their offerings.",
    "shippingDetail": "The pelt mantle is carefully packed for safe delivery, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the start of your next turn after the moon sets or at the end of a long rest, respectively",
      "endsWhen": "At the conclusion of the applicable duration or when worn by another adventurer",
      "charges": "Unlimited"
    },
    "priceReason": "The mantle is crafted from rare wolf pelts and handcrafted with arcane techniques to enhance its abilities, making it a valuable but not overpriced purchase for adventurers.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T22:18:31.492400+00:00",
    "aiReviewedAt": "2026-07-22T22:18:31.492400+00:00",
    "aiReviewVersion": 1
  },
  "mordor_ash_baked_potatoes_recipe": {
    "id": "mordor_ash_baked_potatoes_recipe",
    "name": "Recipe: Mordor Ash-Baked Potatoes ",
    "description": "The Mordor Ash-Baked Potatoes are a rare delicacy forged from volcanic ash and spiced with the earth's fiery essence. These potatoes, baked to perfection in the very heart of Mount Doom, grant you resistance to fire damage for an hour after consumption. The recipe is said to have been taught by the Orc Camp Cooks, whose secrets are as guarded as Mordor itself. Each bite leaves a smoky, unforgettable taste that lingers like the shadow of Mount Doom.",
    "price": 1000,
    "icon": "🥔",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Resistance to Fire Damage",
      "Smoky Flavor"
    ],
    "vendor": "land_mordor_forge",
    "shippedBy": "Sooty Spud Scroll",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Resistance to Fire Damage",
        "rules": "When you consume these potatoes, you gain resistance to fire damage for one hour. This effect ends if you are incapacitated or when the duration expires."
      },
      {
        "title": "Smoky Flavor",
        "rules": "After eating the potatoes, you suffer a -1 penalty to saving throws against being charmed until the end of your next short rest. This effect is not cumulative with other similar effects."
      }
    ],
    "levelRequirementReason": "The complexity and danger involved in obtaining the ingredients make this recipe accessible only to characters of at least fifth level.",
    "vendorReason": "Land Mordor Forge is a trusted source for items from the fiery heart of Middle-earth, including this rare dish.",
    "shippingDetail": "The potatoes are shipped wrapped in volcanic ash to preserve their potency and flavor. Delivery may take an extra day due to hazardous conditions in Mordor.",
    "usage": {
      "activation": "Passive effect upon consumption",
      "duration": "One hour, until the end of your next short rest if incapacitated",
      "endsWhen": "Incapacitation or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The potatoes are priced at 1000 XP, reflecting their rare ingredients and the danger involved in obtaining them.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T22:18:42.625732+00:00",
    "aiReviewedAt": "2026-07-22T22:18:42.625732+00:00",
    "aiReviewVersion": 1
  },
  "mordor_ash_phoenix_feather": {
    "id": "mordor_ash_phoenix_feather",
    "name": "Mordor Ash-Phoenix Feather",
    "description": "The Mordor Ash-Phoenix Feather burns with an eerie, dark glow that seems to feed on the very light of day itself. Crafted from the ash of a phoenix by the grim artisans of Barad-dûr Wildlife Control, it smells faintly of sulfur and attracts orcs within a mile radius, drawing them toward its malevolent presence. This relic offers protection against the fear tactics of undead and fiends for an entire month, while granting the user Darkvision that lasts for eight hours upon activation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪶",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Darkvision Granting",
      "Fiendish Fear Resistance"
    ],
    "vendor": "land_mordor_supply",
    "shippedBy": "Nazgûl Express (Delayed)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Darkvision Granting",
        "rules": "When activated as an action, this feather grants the user Darkvision out to a range of 120 feet for eight hours. There is no limit to the number of times it can be used."
      },
      {
        "title": "Fiendish Fear Resistance",
        "rules": "The bearer gains immunity to fear effects from undead and fiends, lasting for thirty days after activation. This effect does not stack with other forms of fear immunities or resistances."
      }
    ],
    "levelRequirementReason": "This feather is crafted by Barad-dûr Wildlife Control, making it accessible to lower-level adventurers who might find themselves facing undead and fiendish threats.",
    "vendorReason": "Land Mordor Supply stocks a variety of items useful for survival in Mordor's harsh environment, including the Mordor Ash-Phoenix Feather.",
    "shippingDetail": "Due to the cursed nature of this item, it is shipped via Nazgûl Express with a delayed delivery. Expect an additional delay of three days beyond standard shipping times.",
    "usage": {
      "activation": "Activate as an action",
      "duration": "8 hours for Darkvision; 30 days for Fiendish Fear Resistance",
      "endsWhen": "Effect duration ends naturally",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the item's rarity and utility, offering a solid value for adventurers facing undead and fiendish threats.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-22T22:19:03.010450+00:00",
    "aiReviewedAt": "2026-07-22T22:19:03.010450+00:00",
    "aiReviewVersion": 1
  },
  "mordor_ashen_dagger": {
    "id": "mordor_ashen_dagger",
    "name": "Mordor Ashen Dagger",
    "description": "The Mordor Ashen Dagger is a blackened blade forged in the fires of Mount Doom, its edge sharp enough to cleave through even the darkest shadows. Its pommel glows faintly with an inner fire that ignites any flammable material it touches, and its hilt bears the insignia of the Dark Lord's eye. This weapon is not just a tool for assassination; it whispers dark secrets in the heart of night, tempting the wielder to embrace the shadow side of their soul.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Shadow Strike",
      "Flame Touch"
    ],
    "vendor": "land_mordor",
    "shippedBy": "Orc Courier (Grumbling Included)",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Shadow Strike",
        "rules": "When you score a hit with this weapon in complete darkness, you gain advantage on your next attack roll. If the target is reduced to half its hit points or fewer during the encounter, you regain all expended spell slots."
      },
      {
        "title": "Flame Touch",
        "rules": "As an action, you can touch a flammable object with this dagger. The object ignites in a small burst of flame, dealing 1d6 fire damage to any creature within 5 feet that is touching it or holding it."
      }
    ],
    "levelRequirementReason": "The Mordor Ashen Dagger requires a minimum level to wield its dark powers and avoid succumbing to their influence.",
    "vendorReason": "Land Mordor is the only place where such a weapon can be forged, making it the sole vendor of this item.",
    "shippingDetail": "The Orc Courier delivers with a grumble and a story about how this dagger almost set his armor on fire during shipment.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous",
      "endsWhen": "Used or Expend",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare materials and dark magic required to craft this weapon, as well as its potential for both lethal and strategic use.",
    "priceOriginal": 16200,
    "priceReviewedAt": "2026-07-22T22:19:09.389004+00:00",
    "aiReviewedAt": "2026-07-22T22:19:09.389004+00:00",
    "aiReviewVersion": 1
  },
  "mordor_ashen_robe": {
    "id": "mordor_ashen_robe",
    "name": "Mordor Ashen Robe",
    "description": "The Mordor Ashen Robe is a soot-stained garment that seamlessly blends with volcanic landscapes. Crafted by the Mordor Weavers from ash and brimstone, it radiates an aura of subtle fire magic. The robe grants you advantage on Stealth checks in ash or smoke-filled areas, making you nearly invisible among volcanic vents. It also offers a minor defense against fire, absorbing 1d4 fire damage once per day before disintegrating into harmless ash.",
    "price": 1000,
    "icon": "👘",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Ash Camouflage",
      "Fire Absorption"
    ],
    "vendor": "land_mordor_forge",
    "shippedBy": "Sooty Sack",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ash Camouflage",
        "rules": "As a bonus action, you can activate the robe's camouflage effect. While active, you gain advantage on Stealth checks in ash or smoke-filled areas for 1 hour. The effect ends when you stop wearing the robe."
      },
      {
        "title": "Fire Absorption",
        "rules": "Once per day, you can touch the robe to absorb 1d4 fire damage. This effect is a reaction and cannot be used if you are immune to fire damage. The robe disintegrates into harmless ash after one use."
      }
    ],
    "levelRequirementReason": "This level requirement reflects its unique crafting from volcanic materials.",
    "vendorReason": "Land Mordor Forge specializes in crafting items that resonate with the fiery essence of Mordor.",
    "shippingDetail": "The robe is shipped wrapped in volcanic pumice to protect it during transit, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action for Ash Camouflage; Reaction for Fire Absorption",
      "duration": "1 hour for Ash Camouflage; Instantaneous for Fire Absorption",
      "endsWhen": "Disintegration into ash after one use of either effect",
      "charges": "Unlimited, but disintegrates after a single activation"
    },
    "priceReason": "The balanced XP price reflects the robe's unique crafting and limited use.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:18:56.544737+00:00",
    "aiReviewedAt": "2026-07-22T22:18:56.544737+00:00",
    "aiReviewVersion": 1
  },
  "mordor_shadow_dust": {
    "id": "mordor_shadow_dust",
    "name": "Mordor Shadow Dust",
    "description": "Mordor Shadow Dust is a fine, volcanic grit meticulously collected from the molten heart of Mount Doom. Each grain holds the dark magic that fuels Mordor's necromancers, capable of corrupting the living and binding the dead. This dust can be used as a material component for necromancy spells, effectively doubling their range when cast by those who know its secrets. When applied to an opponent, it clouds their senses, granting them disadvantage on Perception checks for one hour, leaving them vulnerable to unseen threats.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌋",
    "stock": 5,
    "rarity": "epic",
    "effects": [
      "Dark Material Component",
      "Clouded Senses"
    ],
    "vendor": "land_mordor_outpost",
    "shippedBy": "Volcanic Crate",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Dark Material Component",
        "rules": "When used as a material component in necromancy spells, the range of the spell is doubled. This effect must be activated by the spellcaster on casting the spell and can only be done once per day."
      },
      {
        "title": "Clouded Senses",
        "rules": "Applying Mordor Shadow Dust to an opponent grants them disadvantage on all Perception checks for one hour, starting when the dust is applied. This effect lasts until it is removed by a successful Wisdom (Perception) check with a DC of 15 or through another means that dispels the dust."
      }
    ],
    "levelRequirementReason": "This item requires at least level 7 to use due to its dark magic and the inherent danger it poses.",
    "vendorReason": "Land Mordor Outpost is a known supplier of forbidden artifacts, including those from Mount Doom's volcanic heart.",
    "shippingDetail": "The crate ensures safe delivery by cushioning the dust within, but it must be handled with care to prevent accidental exposure.",
    "usage": {
      "activation": "Used as a material component when casting necromancy spells or applied directly to an opponent.",
      "duration": "One hour for Clouded Senses; lasts until removed or dispelled.",
      "endsWhen": "Disadvantage on Perception checks ends with a successful check or removal of the dust.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced XP price reflects its rarity and the dark magic it contains, making it a valuable but not overpowered addition to any party's arsenal.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T16:37:58.328943+00:00",
    "aiReviewedAt": "2026-07-23T16:37:58.328943+00:00",
    "aiReviewVersion": 1
  },
  "mordor_smoke_signal_service": {
    "id": "mordor_smoke_signal_service",
    "name": "Mordor Smoke Signal Service",
    "description": "The Mordor Smoke Signal Service delivers messages with eerie precision and flair. This service sends a plume of noxious smoke that carries your urgent missive up to 50 miles, arriving within an hour—though it may mislead the recipient into thinking you're rallying for war. For critical situations, orcs accompany the message to ensure its safe passage; they are included in the cost but charge extra for 'protection'. Beware: there's a 50% chance that your message will be accompanied by rude shapes formed from the smoke itself.",
    "price": 1000,
    "icon": "💨",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Mighty Smoke Plume",
      "Orc Escort"
    ],
    "vendor": "land_mordor_courier",
    "shippedBy": "Warg-Mounted Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mighty Smoke Plume",
        "rules": "The user activates this service to send a message via a plume of smoky, ominous vapor. The smoke travels up to 50 miles and arrives within one hour. However, there is a 50% chance that the arriving plume will be misread as a war declaration due to its threatening appearance."
      },
      {
        "title": "Orc Escort",
        "rules": "If desired, a team of orcs accompanies the message for added security. This service includes one orc escort; additional orcs can be requested at extra cost. The escorts ensure safe passage but are known for their exorbitant rates for 'protection'."
      }
    ],
    "levelRequirementReason": "This service is available to all, as it caters to any who need urgent communication.",
    "vendorReason": "The Mordor Postal Orcs are the only reliable couriers in these treacherous lands; they have a monopoly on such services.",
    "shippingDetail": "Messages are delivered by swift wargs, ensuring quick and safe transport. However, delays may occur due to unpredictable weather conditions or orc whims.",
    "usage": {
      "activation": "A standard action is required to activate the service.",
      "duration": "Instantaneous; the smoke plume arrives at its destination within one hour.",
      "endsWhen": "The message has been delivered and any accompanying orcs have completed their escort duties.",
      "charges": "Unlimited uses, as long as the vendor's stock holds."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the service's urgency, the risk of misinterpretation, and the orc escort's reputation for exorbitant fees.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:19:23.759888+00:00",
    "aiReviewedAt": "2026-07-22T22:19:23.759888+00:00",
    "aiReviewVersion": 1
  },
  "mordor_venom_vial": {
    "id": "mordor_venom_vial",
    "name": "Vial of Mordor Venom",
    "description": "The Vial of Mordor Venom is a thick, viscous, and nearly black liquid that exudes an eerie, almost living darkness. It whispers of ancient horrors and the Dark Lord's malevolence. This venom can be applied to any weapon, turning it into a vessel of death and torment for its target. Upon contact with flesh, the victim suffers both physical agony and spiritual corruption, requiring immediate attention to avoid permanent damage.",
    "category": "consumables",
    "price": 1000,
    "icon": "☠️",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Corrosive Weapon",
      "Soul-Searing Venom"
    ],
    "vendor": "Land Mordor",
    "shippedBy": "Lead-Lined Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Corrosive Weapon",
        "rules": "Apply the Vial of Mordor Venom to a weapon as an action. The weapon gains the ability to deal 4d6 necrotic damage on hit, and the target must make a Constitution saving throw (DC 13) or become poisoned for 1 minute. This effect ends if the weapon strikes a target three times consecutively."
      },
      {
        "title": "Soul-Searing Venom",
        "rules": "While the weapon is imbued with Mordor Venom, it emits an eerie whisper that can be heard within 30 feet by those with a saving throw DC of 12. This effect lasts until the weapon is cleaned or the poison wears off."
      }
    ],
    "levelRequirementReason": "The Vial's potency requires no specific character level, as it relies on the wielder's intent and the weapon's edge.",
    "vendorReason": "Only those who have faced the Dark Lord's wrath or are deeply connected to his domain would dare sell this cursed item.",
    "shippingDetail": "Ships securely in a lead-lined box to prevent contamination, delaying delivery by one day.",
    "usage": {
      "activation": "Action (apply to weapon)",
      "duration": "Instantaneous effect per hit; ends after three consecutive hits or when the weapon is cleaned",
      "endsWhen": "After three uses or if the weapon is cleaned of the venom",
      "charges": "Unlimited, but only one charge can be active at a time"
    },
    "priceReason": "Balanced as this item provides potent utility and danger in combat without being overpowered.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T22:19:21.501567+00:00",
    "aiReviewedAt": "2026-07-22T22:19:21.501567+00:00",
    "aiReviewVersion": 1
  },
  "mordor_volcanic_ash_sifter": {
    "id": "mordor_volcanic_ash_sifter",
    "name": "Mordor Volcanic Ash Sifter ",
    "description": "The Mordor Volcanic Ash Sifter is a finely crafted, orc-made sieve with a core of volcanic obsidian. It sifts ash into your baked goods with precision, ensuring no grit or impurities slip through. This tool not only enhances the smoky flavor but also grants advantage on cooking checks within volcanic environs. A brief cloud of ash may obscure vision for creatures nearby, adding to its unique allure and utility in Mordor's fiery landscapes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥔",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Smoke-Enhanced Flavor",
      "Vision Obscuring"
    ],
    "vendor": "land_mordor_forge",
    "shippedBy": "Sooty Sieve Sack",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Smoke-Enhanced Flavor",
        "rules": "When used while cooking, the sifter grants you advantage on checks to prepare meals in smoky areas. The flavor of your dish is imbued with a rich, smoky essence."
      },
      {
        "title": "Vision Obscuring",
        "rules": "As an action, using the sifter creates a cloud of ash that obscures vision for all creatures within 10 feet for up to 3 rounds. This effect has no save or DC and is limited to one use per day."
      }
    ],
    "levelRequirementReason": "This tool is designed to be accessible, requiring minimal skill to operate effectively.",
    "vendorReason": "Orc Toolmakers are renowned for their craftsmanship and have adapted their tools to the unique challenges of Mordor's terrain.",
    "shippingDetail": "The sifter is delivered in a specially designed sack that can withstand the harsh conditions of volcanic transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (cloud lasts up to 3 rounds)",
      "endsWhen": "After 3 rounds or when used again on the same day",
      "charges": "One use per day"
    },
    "priceReason": "Crafted from volcanic obsidian and imbued with orcish ingenuity, this tool is a rare find in Mordor.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T22:19:36.517112+00:00",
    "aiReviewedAt": "2026-07-22T22:19:36.517112+00:00",
    "aiReviewVersion": 1
  },
  "mov_service": {
    "id": "mov_service",
    "name": "Motivational Speech",
    "description": "Pauline's Microphone amplifies your voice and confidence, a relic from the golden age of motivational oratory. Crafted in the heart of Toad Town by renowned speaker Pauline Heartstone, it channels her legendary speeches into yours. When you activate it, Pauline's voice fills the air, granting each party member 10 temporary hit points that last for 24 hours. The microphone itself, a gleaming brass device adorned with intricate engravings, hums with energy as it boosts your willpower and resolve.",
    "category": "services",
    "price": 1000,
    "icon": "📢",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Grant 10 Temp HP",
      "Inspire Confidence"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Courier Gnome, Swiftfeather",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant 10 Temporary Hit Points",
        "rules": "Activate as a bonus action. Each party member gains 10 temporary hit points that last for 24 hours, granting them resilience against harm."
      },
      {
        "title": "Inspire Confidence",
        "rules": "While holding Pauline's Microphone and speaking, you can use an action to inspire confidence among your allies within hearing range. Each ally gains advantage on saving throws against fear effects for the rest of the day."
      }
    ],
    "levelRequirementReason": "This item is designed for first-level characters who may need a morale boost and the confidence to face challenges ahead.",
    "vendorReason": "Toad Town Market stocks Pauline's Microphone because it is a beloved local artifact, cherished by both novices and veterans alike.",
    "shippingDetail": "Ships via Gnome Express, ensuring the microphone arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action to activate or use an action for the Inspire Confidence effect.",
      "duration": "24 hours for Temp HP; until used again for Inspire Confidence.",
      "endsWhen": "The effect ends when it is used again, and there are no remaining charges.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item's balanced price reflects its potent effects and the reputation of Pauline Heartstone among adventurers.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T22:20:00.953878+00:00",
    "aiReviewedAt": "2026-07-22T22:20:00.953878+00:00",
    "aiReviewVersion": 1
  },
  "mu_empire_clay_oven": {
    "id": "mu_empire_clay_oven",
    "name": "Mu Empire Clay Oven",
    "description": "The Mu Empire Clay Oven is a relic of ancient craftsmanship, its weathered surface still retains traces of the fires it has tended over centuries. Built by the skilled hands of Mu Empire Potters, it cooks with minimal fuel, conserving precious resources in even the harshest conditions. With each use, it grants you advantage on History checks while using it and Survival checks for cooking fires, but its fragile nature imposes a penalty on saving throws against damage, requiring extra care or risk to maintain.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏺",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Minimal Fuel Consumption",
      "Ancient Craftsmanship"
    ],
    "vendor": "mu_empire",
    "shippedBy": "Silk Road Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minimal Fuel Consumption",
        "rules": "When you use this oven for cooking, you gain advantage on Survival checks related to fire management. This effect lasts until the meal is prepared."
      },
      {
        "title": "Ancient Craftsmanship",
        "rules": "You gain advantage on History checks when using the oven. This bonus applies only while actively using it and ends after one hour of use."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners, providing essential survival skills without overly restrictive requirements.",
    "vendorReason": "The Mu Empire retains a deep connection to its ancient crafts and continues to produce items that honor their heritage.",
    "shippingDetail": "Ships via the Silk Road Courier, ensuring safe delivery along treacherous routes but delaying arrival by one week.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the meal is prepared or until you finish using it for cooking",
      "endsWhen": "After one hour of continuous use or when damaged beyond repair",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects its historical value and utility without overshadowing the game's balance.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T22:19:36.343921+00:00",
    "aiReviewedAt": "2026-07-22T22:19:36.343921+00:00",
    "aiReviewVersion": 1
  },
  "mu_empire_levitation_boots": {
    "id": "mu_empire_levitation_boots",
    "name": "Mu Empire Levitation Boots",
    "description": "The Mu Empire Levitation Boots are crafted from enchanted leather and brass, forged in the heart of Mu City's forges. These boots grant brief periods of controlled levitation, allowing you to navigate treacherous terrain with ease or cross small gaps like a breeze through reeds. Crafted by the Mu Empire, these boots have earned a reputation as indispensable tools for adventurers seeking to outmaneuver their foes and traverse difficult landscapes.",
    "category": "equipment",
    "price": 1000,
    "icon": "👢",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Controlled Levitation",
      "Terrain Mastery"
    ],
    "vendor": "mu_outpost",
    "shippedBy": "Swift Courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Controlled Levitation",
        "rules": "As an action, you may levitate up to 1 foot off the ground for a duration of 1 minute. While levitating, your speed is reduced by half (20 feet). This effect can be used once per short or long rest."
      },
      {
        "title": "Terrain Mastery",
        "rules": "You can use this ability to cross small gaps or avoid ground hazards with ease. Additionally, you gain a +1 bonus to checks involving movement and balance until the end of your next turn after using these boots for the first time in combat."
      }
    ],
    "levelRequirementReason": "These boots are designed for those with some experience, ensuring they can handle their advanced capabilities.",
    "vendorReason": "The outpost stocks these boots as a staple item for adventurers journeying through Mu Empire territories.",
    "shippingDetail": "Ships within 3 days via Swift Courier, ensuring timely delivery to eager explorers.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "Ends when the time runs out or you are incapacitated",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted with enchanted leather and brass, these boots offer a unique and valuable asset to any adventurer's arsenal.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T22:20:08.979313+00:00",
    "aiReviewedAt": "2026-07-22T22:20:08.979313+00:00",
    "aiReviewVersion": 1
  },
  "mu_empire_levitation_orb": {
    "id": "mu_empire_levitation_orb",
    "name": "Mu Empire Levitation Orb",
    "description": "The Mu Empire Levitation Orb is a sleek obsidian sphere, engraved with ancient Mu symbols. When activated, it emits a soft blue glow, creating an anti-gravity field that allows you to hover five feet off the ground. You can glide over obstacles and avoid terrain penalties for movement speed, but your pace is halved during this time. The orb's power comes from the Mu Empire’s lost alchemy, making it both reliable and rare.",
    "price": 1000,
    "icon": "⚫",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Hover Flight",
      "Reduced Speed"
    ],
    "vendor": "mu_outpost",
    "shippedBy": "Floating Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hover Flight",
        "rules": "Activate as a bonus action to hover five feet off the ground for one hour. You can move up, down, or horizontally while hovering but your speed is halved."
      },
      {
        "title": "Reduced Speed",
        "rules": "While hovering, your movement speed is reduced by half. This effect ends when you stop hovering, are knocked prone, or exceed the one-hour duration limit."
      }
    ],
    "levelRequirementReason": "The orb's activation requires minimal concentration and is within the reach of any adventurer.",
    "vendorReason": "The Mu Outpost specializes in items from their empire, including this rare levitation technology.",
    "shippingDetail": "Delivered via a fleet of enchanted airships that ensure safe and swift transport.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Hour",
      "endsWhen": "Exceeding the one-hour duration, being knocked prone, or stopping the hover effect manually.",
      "charges": "Unlimited"
    },
    "priceReason": "The orb’s rarity and unique crafting process justify its moderate price.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-22T22:19:50.700283+00:00",
    "aiReviewedAt": "2026-07-22T22:19:50.700283+00:00",
    "aiReviewVersion": 1
  }
};
