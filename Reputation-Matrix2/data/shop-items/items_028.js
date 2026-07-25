// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_028 = {
  "midlands_feywild_blood_pearl": {
    "id": "midlands_feywild_blood_pearl",
    "name": "Feywild Blood Pearl",
    "description": "The Feywild Blood Pearl is a pulsating gemstone harvested from the arcane rifts of Raventree Manor. Its surface glows with an ethereal light, and when worn, it grants the wearer temporary access to arcane illusions and fey-aligned combat abilities. The pearl’s power resonates with the wild magic of the Feywild, granting a +15% chance to evade area-of-effect attacks and a +10% bonus to stealth and illusion casting.",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% evasion",
      "+10% stealth and illusions"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Evasion Boost",
        "rules": "When the wearer is targeted by an area-of-effect attack, they have a +15% chance to evade the attack. This effect lasts for the duration of one short rest."
      },
      {
        "title": "Stealth and Illusion Boost",
        "rules": "The wearer gains a +10 bonus to Dexterity (Stealth) checks and the DCs for illusion spells they cast. This effect persists until the wearer completes a long rest."
      }
    ],
    "levelRequirementReason": "To harness the wild magic of the Feywild, the wearer must have sufficient experience to navigate its unpredictable forces.",
    "vendorReason": "The Midlands are at the heart of fey commerce and trade, making them a natural hub for exotic artifacts like the Feywild Blood Pearl.",
    "shippingDetail": "Delivered via spirit courier with a delay of one day to allow the gemstone's essence to settle properly.",
    "usage": {
      "activation": "Passive effect upon donning the pearl, ends when removed or after one long rest.",
      "duration": "Until the wearer completes a short or long rest",
      "endsWhen": "Removal or completion of a rest period",
      "charges": "Unlimited"
    },
    "priceReason": "The gemstone's rarity and the Feywild's unpredictable nature justify its fair value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:59:56.371348+00:00",
    "aiReviewedAt": "2026-07-22T19:59:56.371348+00:00",
    "aiReviewVersion": 1
  },
  "midlands_feywild_forged_mace": {
    "id": "midlands_feywild_forged_mace",
    "name": "Feywild Forged Mace of the Whispering Iron",
    "description": "The Feywild Forged Mace of Whispering Iron, crafted by a fey artisan deep within the wild places of the Feywild, channels raw elemental power through enchanted iron. Its blade hums with the whispers of ancient forests and the secrets of shadowed glades. When struck, it releases a pulse that confounds foes momentarily, making them stumble in confusion for moments after contact, while also dealing extra damage to undead and mechanical targets due to its unique enchantments.",
    "category": "equipment",
    "price": 5900,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "+20% damage to undead and mechanical foes",
      "When struck, inflicts temporary confusion with a 15% chance"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Confusion Pulse",
        "rules": "When the mace strikes an opponent, there is a 15% chance that the target becomes confused for 1 round. The target must succeed on a DC 14 Wisdom saving throw or be affected by this effect."
      },
      {
        "title": "Enhanced Damage",
        "rules": "The mace deals +20% additional damage to undead and mechanical targets, enhancing its ferocity in battles against these foes."
      }
    ],
    "levelRequirementReason": "Crafted with intricate Feywild magic, this mace requires a minimum character level of 7 to wield effectively.",
    "vendorReason": "The Midlands are renowned for their connections to the Feywild and thus have access to such unique crafted items.",
    "shippingDetail": "Delivered by Pipe Express, this mace arrives within a week of purchase, ensuring it reaches its destination without delay.",
    "usage": {
      "activation": "On contact with an enemy during melee combat",
      "duration": "Instantaneous effect; lasts until the end of your next turn",
      "endsWhen": "The target successfully saves against the confusion or when the mace is no longer in contact with a foe",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced to reflect its unique enchantments and Feywild origin, this item's price is set at 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T20:00:09.707954+00:00",
    "aiReviewedAt": "2026-07-22T20:00:09.707954+00:00",
    "aiReviewVersion": 1
  },
  "midlands_feywild_talisman": {
    "id": "midlands_feywild_talisman",
    "name": "Shadowed Feyheart Talisman",
    "description": "The Shadowed Feyheart Talisman is a glowing gemstone forged in the twilight of the Feywild, its surface etched with ancient runes that shimmer with ethereal light. When worn, it grants the wearer the ability to move through shadows as if they were solid ground and provides a steady hum of protection against magic that targets the mind. The talisman whispers secrets of forgotten fey lore, occasionally summoning a fey ally for brief counsel.",
    "category": "equipment",
    "price": 1400,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Step",
      "Fey Whisper"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Step",
        "rules": "As an action, the wearer can move through shadows as if they were difficult terrain. This effect lasts until the start of their next turn."
      },
      {
        "title": "Fey Whisper",
        "rules": "Once per short rest, the wearer can summon a fey ally to offer advice or assistance for 3 turns. The ally is a harmless creature that provides a +1 bonus to one ability check of the wearer's choice."
      }
    ],
    "levelRequirementReason": "The talisman's magic requires a solid understanding of Feywild lore and a connection with fey spirits.",
    "vendorReason": "The Midlands are known for their deep ties to the Feywild, making them the perfect vendors for this item.",
    "shippingDetail": "Ships via Koopa's express delivery service, ensuring timely arrival from the distant Feywild.",
    "usage": {
      "activation": "Action or Reaction (for Shadow Step)",
      "duration": "Until start of next turn (Shadow Step); Instantaneous (Fey Whisper)",
      "endsWhen": "Ends when the effect duration expires or the wearer is incapacitated",
      "charges": "Unlimited, but requires concentration for Shadow Step"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare origin and unique abilities.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:59:55.311619+00:00",
    "aiReviewedAt": "2026-07-22T19:59:55.311619+00:00",
    "aiReviewVersion": 1
  },
  "midlands_forged_fate_rod": {
    "id": "midlands_forged_fate_rod",
    "name": "The Forge of the Fractured Atrium",
    "description": "The Forge of the Fractured Atrium is a rod forged from unyielding steel in the shadowy remains of an ancient factory, its surface etched with the runes of forgotten metal masters. This relic grants the wielder dominion over iron and metal magic, reshaping the very world around them through precise manipulation or creation. Its tempered form offers temporary immunity to metallic traps, ensuring safety from hidden dangers while it breathes life into constructs that serve only those who can wield its power.",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% bonus to metal manipulation or construction checks",
      "Grants temporary immunity to metallic traps"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Metallic Manipulation Boost",
        "rules": "The wielder gains a +10% bonus on all checks related to manipulating or constructing objects made of iron or steel. This effect is active as long as the user holds the rod."
      },
      {
        "title": "Trap Immunity Temporarily Active",
        "rules": "For 24 hours after using the rod, the wielder gains temporary immunity to all effects from metallic traps. This immunity lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "The forging process requires a basic understanding of metalworking and trap lore that can be learned at an early stage.",
    "vendorReason": "Midlands, known for their expertise in industrial relics, is the only source for such a powerful tool forged from ancient ruins.",
    "shippingDetail": "The rod is delivered via the Void Drifter Relay, ensuring safe and swift transport through the treacherous voids surrounding the factory remains where it was crafted.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous (effect lasts until end of next long rest)",
      "endsWhen": "The effect ends at the end of the wielder's next long rest",
      "charges": "Unlimited, but requires a long rest to regain temporary immunity"
    },
    "priceReason": "Balanced as it combines utility and combat support without overshadowing more powerful items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:00:08.343974+00:00",
    "aiReviewedAt": "2026-07-22T20:00:08.343974+00:00",
    "aiReviewVersion": 1
  },
  "midlands_forged_mind_amber": {
    "id": "midlands_forged_mind_amber",
    "name": "Forged Mind Amber",
    "description": "Forged Mind Amber is a crystalline shard imbued with the strategic brilliance of the Iron Legion's greatest minds. Its facets shimmer with a cold, metallic light, and it hums faintly as it channels the will of the legion’s tacticians. Wield this shard to gain a fleeting glimpse into your foe’s tactical plans, allowing you to predict their next moves with uncanny accuracy for 10 seconds. Additionally, your ranged attacks carry an edge of calculated precision, increasing your chance to hit by +10%. This relic is a testament to the ironclad discipline of the legion and can only be found in the hands of those who have proven themselves worthy.",
    "price": 330,
    "icon": "🌀",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Mind Insight",
      "Sharpshooter"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Mind Insight",
        "rules": "At the start of your turn, you gain advantage on one ability check related to Tactics until the end of your next turn. This effect lasts for a total duration of 10 seconds and can be used once per short or long rest."
      },
      {
        "title": "Sharpshooter",
        "rules": "While wearing this shard, you have advantage on attack rolls with ranged weapons. You regain one use after a short or long rest."
      }
    ],
    "levelRequirementReason": "This item requires a level of at least 4 to wield effectively, as it channels the strategic genius of the Iron Legion.",
    "vendorReason": "The Midlands are known for their deep connections with the Iron Legion and can source unique relics like this shard.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliable and swift deliveries, ensuring you receive your Forged Mind Amber promptly.",
    "usage": {
      "activation": "Passive effect until the start of your turn.",
      "duration": "10 seconds per use.",
      "endsWhen": "After a short or long rest.",
      "charges": "Unlimited uses between rests."
    },
    "priceReason": "The price reflects its uncommon rarity and the strategic value it provides to players of level 4 and above.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T20:00:10.816278+00:00",
    "aiReviewedAt": "2026-07-22T20:00:10.816278+00:00",
    "aiReviewVersion": 1
  },
  "midlands_forged_soul": {
    "id": "midlands_forged_soul",
    "name": "Iron Blood Chalice",
    "description": "The Iron Blood Chalice gleams with an eerie, metallic sheen, etched with runes of the fallen commanders of the Iron Legion. When consumed in a moment of dire need, it grants the drinker a surge of courage, bolstering their resolve and confidence. For five minutes, all combat rolls are enhanced by +2, and the imbiber gains resistance to fear and intimidation attempts. The chalice's power comes at a cost, consuming 100 HP upon activation.",
    "price": 330,
    "icon": "🔮",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Temporary +2 to all combat rolls",
      "Resistance to fear and intimidation"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Combat Boost",
        "rules": "Upon drinking the Iron Blood Chalice, the imbiber gains a +2 bonus to all combat rolls for 5 minutes. This effect is instantaneous upon activation."
      },
      {
        "title": "Fear Resistance",
        "rules": "For the duration of its use, the drinker has resistance to fear and intimidation attempts made against them by other creatures. This lasts until the end of the 5-minute duration or until it is consumed in combat."
      }
    ],
    "levelRequirementReason": "The Iron Blood Chalice's power is potent, but not beyond the reach of a skilled and determined adventurer.",
    "vendorReason": "Midlands vendors often stock items that have deep connections to local legends and heroes, making this chalice an easy addition to their inventory.",
    "shippingDetail": "The Void Drifter Relay ensures swift delivery of the Iron Blood Chalice, but it is advised to consume the item within a week of receiving it for optimal effect.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "5 minutes",
      "endsWhen": "Upon consumption or expiration of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "The Iron Blood Chalice is priced at 1000 XP due to the unique combination of temporary combat enhancement and fear resistance, making it a valuable asset for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T20:00:34.338722+00:00",
    "aiReviewedAt": "2026-07-22T20:00:34.338722+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_blood_torch": {
    "id": "midlands_gear_blood_torch",
    "name": "Gear Blood Torch",
    "description": "The Gear Blood Torch is forged from an ancient warhorse's marrow, its crimson flame igniting with a mechanical roar that sears through armor and grants the wielder a burst of ferocious strength. The torch's flames are said to consume the very soul of the user if used more than once, making it a rare and perilous artifact. It is a weapon of both fire and fury, capable of turning even the sturdiest plate into glowing embers.",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Armor Piercing",
      "Raging Step"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor Piercing",
        "rules": "When the Gear Blood Torch is used as an action, it ignites with a mechanical roar, dealing an additional +25% fire damage to armored targets. This effect lasts for 1 minute and ends when the wielder attacks again."
      },
      {
        "title": "Raging Step",
        "rules": "Upon activation, the wielder gains +10% movement speed for 10 seconds. The effect ends if the wielder is hit by an attack or uses another action."
      }
    ],
    "levelRequirementReason": "The Gear Blood Torch requires a minimum level of 5 to harness its mechanical fury, ensuring it does not overwhelm less experienced adventurers.",
    "vendorReason": "Midlands is known for their trade with ancient artifacts and rare materials, making the Gear Blood Torch an appropriate addition to their inventory.",
    "shippingDetail": "The torch must be shipped discreetly due to its volatile nature, ensuring it arrives undetected by potential thieves or competitors.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "Used again or after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "The Gear Blood Torch's unique mechanics and rarity justify its price, providing a balanced challenge for high-level adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:00:47.139055+00:00",
    "aiReviewedAt": "2026-07-22T20:00:47.139055+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_blood_and_steel": {
    "id": "midlands_gear_of_blood_and_steel",
    "name": "Gear of Blood and Steel",
    "description": "The Gear of Blood and Steel, forged from the bones of fallen legionaries and imbued with their blood, is a ceremonial armor piece that grants the wearer the honor of the Iron Legion’s wrath. Its surface gleams with a dark, crimson hue, and when struck, it emits a low, resonant hum. This ancient relic not only enhances the wearer's defense by +150 but also inflicts 'Blood Oath,' reducing enemies' morale by 20% for three turns. Should you suffer damage, this armor regenerates your health at an impressive rate of 5% HP per second for five seconds.",
    "category": "equipment",
    "price": 1400,
    "icon": "🗡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +150 defense and +100 attack",
      "Inflicts 'Blood Oath' status on enemies"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blood Oath",
        "rules": "Enemies within range are affected by the Gear's 'Blood Oath,' reducing their morale by 20% for three turns. This effect has a cooldown of one minute."
      },
      {
        "title": "Health Regeneration",
        "rules": "When damaged, the armor regenerates your health at 5% HP per second for five seconds, stopping when you take damage again or end your turn in combat."
      }
    ],
    "levelRequirementReason": "The Gear of Blood and Steel is a rare relic that can be worn by any brave soul, though its power is most potent at higher levels.",
    "vendorReason": "The Midlands are known for their deep connection to the Iron Legion’s history and artifacts.",
    "shippingDetail": "Delivery via Koopa Postal can take up to one week due to its fragile nature, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect upon donning the armor.",
      "duration": "Instantaneous; lasts until you end your turn or are damaged again.",
      "endsWhen": "You suffer damage again or end your turn in combat.",
      "charges": "Unlimited, but limited by your ability to wear it."
    },
    "priceReason": "The Gear of Blood and Steel is a rare relic, balancing its cost with the significant defensive and offensive bonuses it provides.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T20:00:36.960881+00:00",
    "aiReviewedAt": "2026-07-22T20:00:36.960881+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_broken_legends": {
    "id": "midlands_gear_of_broken_legends",
    "name": "Gear of Broken Legends",
    "description": "The Gear of Broken Legends is a gauntlet forged from the molten cores of fallen titans, its surface etched with ancient runes that glow faintly under torchlight. It whispers tales of past battles and the legends it has seen. When worn, it radiates an aura that intimidates foes, causing them to falter in their attacks and movements, and deals extra damage when enemies have been recently struck down in combat.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Intimidating Aura",
      "Extra Damage on Recent Hits"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Intimidating Aura",
        "rules": "While wearing the Gear of Broken Legends, you can use a bonus action to cause enemies within 10 feet to make a Wisdom saving throw (DC 13) or be frightened for 1 minute. This effect has no cooldown."
      },
      {
        "title": "Extra Damage on Recent Hits",
        "rules": "When an enemy takes damage from you, the gear deals an additional 2d6 points of bludgeoning damage to that target at the start of your next turn. This effect can only trigger once per round and resets after a long rest."
      }
    ],
    "levelRequirementReason": "It takes significant skill and strength to wield such an ancient and powerful artifact.",
    "vendorReason": "The gear's origins in the Midlands make it a natural fit for their inventory, where tales of its power are well-known.",
    "shippingDetail": "Carefully wrapped in protective materials to ensure safe delivery via Pipe Express.",
    "usage": {
      "activation": "Bonus action to activate the Intimidating Aura; automatically triggers Extra Damage on Recent Hits without activation.",
      "duration": "Intimidating Aura lasts for 1 minute per use. Extra Damage on Recent Hits is a once-per-turn effect, resetting after a long rest.",
      "endsWhen": "The gear's effects end when you remove it from your equipment or at the start of your next turn if you are incapacitated.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to ensure the gear remains a formidable but not overpowered addition to any adventurer's arsenal, given its powerful effects and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:01:19.149231+00:00",
    "aiReviewedAt": "2026-07-22T20:01:19.149231+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_silent_machines": {
    "id": "midlands_gear_of_silent_machines",
    "name": "Gear of Silent Machines",
    "description": "The Gear of Silent Machines is a meticulously crafted set of gears that seamlessly blend into any machinery. Crafted from an ancient, enchanted bronze alloy found deep within the Whispering Peaks, this gear not only dampens mechanical noise but also disrupts sound detection for nearby enemies. When engaged, it grants you +10% chance to bypass enemy traps and increases your stealth duration by 20%, allowing you to move silently through even the most vigilant environments.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "-50% sound detection range",
      "+20% stealth duration"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Silent Machinery",
        "rules": "When activated, this gear reduces the effective sound detection range of enemies within a 10-foot radius by half. This effect lasts until the start of your next turn and can be used once per short or long rest."
      },
      {
        "title": "Trap Evasion",
        "rules": "+10% chance to bypass enemy traps when this gear is equipped, with no save required; this effect persists for the duration of one combat encounter."
      }
    ],
    "levelRequirementReason": "Requires a character at least level 3 to handle and activate the intricate mechanisms.",
    "vendorReason": "Midlands is known for its expertise in crafting and repairing complex machinery, making them the ideal vendor for this item.",
    "shippingDetail": "Shipped via Pipe Express; delivery may take up to a week due to the delicate nature of the gear.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn, or until expended",
      "endsWhen": "At the start of your next turn or when expended",
      "charges": "1 charge per short rest"
    },
    "priceReason": "Balanced price considering its unique crafting materials and the advantages it provides in stealth and combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:00:47.137054+00:00",
    "aiReviewedAt": "2026-07-22T20:00:47.137054+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_blood_mill": {
    "id": "midlands_gear_of_the_blood_mill",
    "name": "Gear of the Blood Mill",
    "description": "The Gear of the Blood Mill is a rusted steel cog, forged from the last mill of the Iron Legion’s bloodiest siege against the Toad. Its surface bears the etched symbol of the Toad’s defeat and amplifies the wearer's strength with each turn. The gear glows crimson when rage is summoned, and its teeth clatter in a rhythm that echoes the march to war. It grants +200% damage against Toad-aligned enemies and +10% movement speed during combat.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+200% damage vs. Toad-aligned",
      "+10% movement speed in combat"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Damage",
        "rules": "When used against a Toad-aligned enemy, the wearer deals an additional +200% damage. This effect persists for the duration of the encounter."
      },
      {
        "title": "Swift Steps",
        "rules": "The Gear grants +10% movement speed during combat, which ends when the wearer is no longer in combat or takes a short rest."
      }
    ],
    "levelRequirementReason": "Requires level 5 to wield effectively due to its complex enchantments and the physical toll it imposes on the user.",
    "vendorReason": "Midlands is known for their connections with historical relics, making them a fitting vendor for this gear of legendary origin.",
    "shippingDetail": "The gear must be shipped discreetly via Shy Guy Smugglers due to its sensitive nature and potential for attracting unwanted attention.",
    "usage": {
      "activation": "Passive effect; activated by donning the gear during combat.",
      "duration": "Instantaneous, but only active in combat.",
      "endsWhen": "The wearer is no longer in combat or takes a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The Gear of the Blood Mill is priced at 1000 XP due to its rare origin, complex enchantments, and the physical toll it imposes on the user.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:01:04.990679+00:00",
    "aiReviewedAt": "2026-07-22T20:01:04.990679+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_bloodforge": {
    "id": "midlands_gear_of_the_bloodforge",
    "name": "Bloodforge Golem’s Heart",
    "description": "The Bloodforge Golem’s Heart is a pulsating relic of iron golem essence, embedded with the fiery heart of a construct forged in molten steel. This artifact grants its wielder the ability to summon constructs perfect for siege warfare, yet it comes at a cost: maintaining the Heart drains one's sanity. When active, it provides +15% armor regeneration and a 10% chance to summon 'Iron Spire' every minute, dealing 30% damage over ten seconds before expiring.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% Armor Regeneration",
      "10% Chance to Summon Iron Spire"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor Regeneration",
        "rules": "Passive effect that increases armor regeneration by +15%. Ends when the item is destroyed or expended."
      },
      {
        "title": "Summon Iron Spire",
        "rules": "Activates as a bonus action, with a 10% chance to summon an Iron Spire construct every minute. The construct deals 30% damage over ten seconds and requires a successful DC 15 Constitution save for the user or target to end its effect."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to handle the artifact's power and maintain it.",
    "vendorReason": "Midlands is known for their expertise in ancient relics, making them a suitable vendor for this golem’s heart.",
    "shippingDetail": "The item is shipped discreetly via Shy Guy Smugglers, ensuring it arrives safely and under the radar.",
    "usage": {
      "activation": "Bonus action to summon Iron Spire",
      "duration": "10 seconds per use of Iron Spire",
      "endsWhen": "Destroyed or expended when all charges are used",
      "charges": "Unlimited, but requires maintenance that drains sanity"
    },
    "priceReason": "The item's rarity and unique abilities justify its fair value at 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:01:01.894262+00:00",
    "aiReviewedAt": "2026-07-22T20:01:01.894262+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_cursed": {
    "id": "midlands_gear_of_the_cursed",
    "name": "Gear of the Cursed",
    "description": "The Gear of the Cursed is a rusted, ancient artifact that whispers the names of prisoners who perished in the Midlands' forgotten pits. When worn, it grants its bearer temporary immunity to fear and causes enemies to falter, hesitating for a moment upon sight. Its creaky gears seem alive with dark intent, and the faint scent of decay clings to it like a curse. Worn by those daring enough to challenge the Shadows of the Midlands, this cursed gear is both weapon and armor against the fear that plagues the land.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fearless Stance",
      "Foe Falter"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fearless Stance",
        "rules": "When you are affected by a fear effect, you gain temporary immunity to it for the duration of one short rest. This effect does not stack with other immunities or similar effects."
      },
      {
        "title": "Foe Falter",
        "rules": "As a reaction when an enemy makes a melee attack against you, they must succeed on a DC 14 Dexterity saving throw or become Disadvantage until the start of their next turn. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The Gear of the Cursed requires a character to possess at least 6th level to wield its power effectively, as it draws on the user's resolve against fear and the Midlands' dark history.",
    "vendorReason": "Midlands is known for its dark artifacts and relics tied to the cursed lands, making this gear a fitting addition to their inventory.",
    "shippingDetail": "Due to its cursed nature, this item requires special handling. Items shipped via Koopa Postal are delayed by one day due to extra precautions.",
    "usage": {
      "activation": "Instantaneous reaction upon attack.",
      "duration": "Until the start of your next turn or until the effect ends.",
      "endsWhen": "The reaction is used, the effect resolves, or after one short rest.",
      "charges": "Once per short rest"
    },
    "priceReason": "The Gear of the Cursed is priced at 1000 XP due to its rare nature and unique abilities that offer significant advantages against fear-based attacks.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:01:43.093414+00:00",
    "aiReviewedAt": "2026-07-22T20:01:43.093414+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_dismantler": {
    "id": "midlands_gear_of_the_dismantler",
    "name": "Gear of the Dismantler",
    "description": "The Gear of the Dismantler is a cursed, iron-ringed tool forged in the dark forges of Kremling Krew. Its rusted teeth and jagged edges gleam ominously under moonlight. When used against fortified defenses, it not only weakens them but also grants temporary immunity to environmental hazards like fire or poison. The gear's dismantle effect is a relic of ancient siege warfare, making the Ironworks' walls crumble with each turn.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+10% chance to destroy enemy fortifications",
      "Temporary immunity to one environmental hazard"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Dismantle Fortification",
        "rules": "Activates as a bonus action. Targets an adjacent object or creature's defenses. The gear deals damage equal to your proficiency bonus + d8, with a successful DC 15 Strength check to destroy the fortifications."
      },
      {
        "title": "Environmental Immunity",
        "rules": "Grants immunity to one environmental hazard (fire, poison) for 1 minute after using the dismantle effect. The hazard's effects are negated during this time."
      }
    ],
    "levelRequirementReason": "Requires at least level 4 to wield effectively due to its cursed nature and complex mechanics.",
    "vendorReason": "Midlands, known for their trade in relics and ancient tools, sells the Gear of the Dismantler as a relic from the Kremling Krew's legacy.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery to ensure it reaches its destination swiftly.",
    "usage": {
      "activation": "Bonus action to dismantle fortifications or activate environmental immunity.",
      "duration": "Instantaneous dismantle effect; lasts 1 minute for environmental immunity.",
      "endsWhen": "Discharge of the dismantle effect or expiration of the immunity, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Adjusted from 2000 XP to 1000 XP as the item's cursed nature and specific mechanics justify a lower price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T20:01:28.298284+00:00",
    "aiReviewedAt": "2026-07-22T20:01:28.298284+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_drowned_mech": {
    "id": "midlands_gear_of_the_drowned_mech",
    "name": "Gear of the Drowned Mech",
    "description": "The Gear of the Drowned Mech is a relic forged from salvaged components from the sunken factories beneath the Iron Spire. Its sleek, rusted surface hums with latent power, and when activated, it grants you stealth in mechanical environments while emitting an eerie low hum that draws nearby metallic foes to its core. Once engaged, the device operates with near-perfect precision, enhancing your evasion against machinery while slightly impeding your mobility.",
    "category": "equipment",
    "price": 1400,
    "icon": "🏭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% Stealth Bonus",
      "Draws Mechanical Foes"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Enhancement",
        "rules": "Activate as a bonus action. Lasts for the duration of one short rest or until you are no longer in close proximity to mechanical devices. While active, you have advantage on Dexterity (Stealth) checks and can remain hidden within 30 feet of any mechanical construct without needing cover."
      },
      {
        "title": "Foe Attraction",
        "rules": "Once activated, the Gear emits a low hum that attracts nearby mechanical enemies. Any mechanical creature within 50 feet must make a Wisdom saving throw (DC 14) or be drawn to you for the duration of one minute unless it can move at least 30 feet away."
      }
    ],
    "levelRequirementReason": "This relic is accessible early on, encouraging players to explore and engage with mecha-centric environments.",
    "vendorReason": "Midlands is known for its deep connections to historical artifacts and relics from the drowned cities.",
    "shippingDetail": "Ships via the Void Drifter Relay, a courier service that specializes in delivering ancient and rare items through the dimensional corridors of the Iron Spire.",
    "usage": {
      "activation": "Bonus action to activate and engage. The device can be activated once per short or long rest.",
      "duration": "One minute while engaged",
      "endsWhen": "The effect ends when you move more than 30 feet away from mechanical devices, are no longer in close proximity to them, or if the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This relic is valuable due to its unique properties and limited availability within the Iron Spire.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T20:01:59.518734+00:00",
    "aiReviewedAt": "2026-07-22T20:01:59.518734+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_geargrind": {
    "id": "midlands_gear_of_the_geargrind",
    "name": "Gear of the Geargrind",
    "description": "The Gear of the Geargrind is a rusted cogwheel forged from the last working steam engine of the Ironworks. Its surface is pockmarked with the history of countless battles, and when struck, it resonates like the clank of forgotten machines. This relic grants the wielder mechanical resilience, making them more adept at dodging attacks from metal constructs, and can unleash a crushing blow upon their enemies' machinery or metal constructs.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% chance to dodge mechanical attacks",
      "Inflicts 1d6 crushing damage on enemy machines or metal constructs"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Resilience",
        "rules": "When the wielder is struck by a mechanical attack, they have a +20% chance to dodge it. This effect applies passively and does not require activation."
      },
      {
        "title": "Crushing Blow",
        "rules": "Upon hitting an enemy machine or metal construct with a melee weapon, the Gear deals 1d6 crushing damage in addition to normal damage. The effect has no cooldown but can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers as it offers a unique advantage against mechanical threats.",
    "vendorReason": "The Midlands Geargrind is renowned for its craftsmanship and the items they produce, making them the perfect vendor for this historical relic.",
    "shippingDetail": "Ships via Lakitu Drones within 3 days, ensuring that adventurers receive their gear in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous upon being struck or used.",
      "endsWhen": "Expires at the end of each short rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Gear of the Geargrind is priced at 1000 XP, reflecting its historical significance and unique abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:01:33.795194+00:00",
    "aiReviewedAt": "2026-07-22T20:01:33.795194+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_gilded_crown": {
    "id": "midlands_gear_of_the_gilded_crown",
    "name": "Gear of the Gilded Crown",
    "description": "The Gear of the Gilded Crown is a ceremonial cogset worn by the elite of the Iron Legion, forged from the very heart of their war machines. Crafted in the shadow of the Gilded Crown itself, this intricate ensemble not only grants the wearer command over minor mechanical constructs but also amplifies their presence on the battlefield. When activated, it boosts the morale and accuracy of allies within a 10-meter radius, making them more resilient and precise against enemy leaders.",
    "category": "equipment",
    "price": 5800,
    "icon": "🏰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Commands Minor Constructs",
      "Boosts Morale and Accuracy"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Command Minor Constructs",
        "rules": "The wearer can command one minor mechanical construct for up to 1 minute. The construct acts on the wearer's turn, and they must use their action to issue commands each round. If the construct is destroyed or commanded elsewhere, this effect ends."
      },
      {
        "title": "Boosts Morale and Accuracy",
        "rules": "Allies within 10 meters gain a +20% morale bonus and a +10% accuracy bonus against enemy leaders for up to 1 minute. This effect ends if the wearer is incapacitated or if they use an action to end it."
      }
    ],
    "levelRequirementReason": "The gear's intricate enchantments and commands require a degree of mastery that only elite soldiers possess.",
    "vendorReason": "Midlands is renowned for its deep connections with the Iron Legion, ensuring they have access to such prestigious items.",
    "shippingDetail": "Delivered swiftly within a week via Pipe Express's secure courier service.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the wearer uses an action to end it",
      "endsWhen": "The construct is destroyed or commanded elsewhere, or the wearer ends the effect with an action",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point due to its rarity and the unique benefits it offers in battle.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T20:01:55.050108+00:00",
    "aiReviewedAt": "2026-07-22T20:01:55.050108+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_gilded_tower": {
    "id": "midlands_gear_of_the_gilded_tower",
    "name": "Gear of the Gilded Tower",
    "description": "The Gear of the Gilded Tower, forged from the gears and cogs of the legendary Tower of the Iron Crown, hums with a mechanical alchemy that grants the wearer an edge in the world's most intricate machines. It provides temporary immunity to magical suppression for critical moments when your engineering prowess is needed, and it enhances one’s mechanical skill by +25%, allowing you to fix or build with unmatched precision. This relic is perfect for engineers and siege operators who must rely on their wits in a world where magic often interferes.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Magical Suppression Immunity",
      "Enhanced Mechanical Skill"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Suppression Immunity",
        "rules": "The wearer gains immunity to magical suppression effects for a duration of 10 seconds. This effect can be activated as a bonus action and ends if the wearer is no longer in contact with the gear or if they take any damage."
      },
      {
        "title": "Enhanced Mechanical Skill",
        "rules": "The user gains a +25 bonus to all mechanical skill checks, including repairs, crafting, and engineering tasks. This effect lasts for 1 minute per use and is exhausted after one activation."
      }
    ],
    "levelRequirementReason": "This gear is designed for beginners who need the extra edge in magical environments.",
    "vendorReason": "Midlands is known for their diverse array of equipment, and this relic fits well within their offerings as a rare find from the Iron Crown region.",
    "shippingDetail": "The Void Drifter Relay ensures swift delivery, but due to its rarity, it may take up to an additional week for shipment.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds or until the wearer takes damage, whichever comes first",
      "endsWhen": "Wearer is no longer in contact with the gear or takes any damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Gear of the Gilded Tower offers a significant mechanical advantage at a fair price, balancing its unique benefits against other rare items.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:01.086504+00:00",
    "aiReviewedAt": "2026-07-22T20:02:01.086504+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_golem": {
    "id": "midlands_gear_of_the_golem",
    "name": "Golem’s Gear",
    "description": "Golem’s Gear, a relic from an ancient siege machine, clinks softly in your hands like a well-oiled cog. This enchanted armor grants you the ability to summon a silent golem companion for 30 seconds. The golem stands steadfast by your side, its movements deliberate and unyielding, speaking only in cryptic riddles when prompted. The machine's gears hum with a life of their own beneath your skin as it protects and assists.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summon silent golem companion",
      "Golem speaks in riddles"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summon Silent Golem Companion",
        "rules": "As an action, you can summon a temporary golem that stands beside you for up to 30 seconds. The golem does not speak and moves silently unless commanded otherwise. It provides support in combat but cannot attack on its own."
      },
      {
        "title": "Golem Speaks in Riddles",
        "rules": "When the golem speaks, it responds with riddles that can provide strategic advice or clues about your surroundings. This effect has a 1-in-6 chance of occurring each time the golem acts."
      }
    ],
    "levelRequirementReason": "The gear's complexity and magic require a minimum level to harness its power effectively.",
    "vendorReason": "Midlands is known for their deep connections with ancient relics and siege weaponry, making them the perfect vendor for Golem’s Gear.",
    "shippingDetail": "The gear must be delivered by Boo Spectral Mail to ensure its magical integrity remains intact during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 30 seconds",
      "endsWhen": "The golem fades after the duration or if you dismiss it early",
      "charges": "Unlimited"
    },
    "priceReason": "Given its rarity and the unique magic involved, a price of 1000 XP reflects its value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:23.108185+00:00",
    "aiReviewedAt": "2026-07-22T20:02:23.108185+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_gutter": {
    "id": "midlands_gear_of_the_gutter",
    "name": "Gear of the Gutter",
    "description": "The Gear of the Gutter is a rusted iron gauntlet forged from the remains of a collapsed factory chimney. Its surface is pitted and scarred, yet it still clings to the user like a second skin. This ancient relic grants resistance to crushing pressure and immunity to suffocation from industrial fumes, making it invaluable in environments where mechanical threats are common. Crafted by scavengers amidst the ruins of old factories, this gauntlet offers a minor strength bonus when used in industrial settings.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Damage Against Mechanical Targets",
      "Immunity to Suffocation From Industrial Fumes"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Industrial Strength",
        "rules": "While wearing the Gear of the Gutter, you gain a +2 bonus to Strength checks and saving throws made in industrial environments. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Mechanical Resilience",
        "rules": "When you wear the Gear of the Gutter, it provides resistance to bludgeoning damage from mechanical sources. Additionally, there is a 10% chance that any successful attack against steel doors or similar structures made by you ends with the door breaking."
      }
    ],
    "levelRequirementReason": "This item requires no minimum level as it provides utility in industrial settings rather than combat prowess.",
    "vendorReason": "Midlands is known for its connections to scavengers and industrial environments, making them the ideal vendor for this item.",
    "shippingDetail": "Ships via Boo Spectral Mail; delivery can take up to one week due to spectral interference.",
    "usage": {
      "activation": "Passive effect upon donning the gauntlet.",
      "duration": "Lasts until the end of your next long rest.",
      "endsWhen": "The effect ends at the start of your next short or long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This item is priced moderately, reflecting its rarity and utility in specific environments without offering game-breaking abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:09.972197+00:00",
    "aiReviewedAt": "2026-07-22T20:02:09.972197+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_iron_blood": {
    "id": "midlands_gear_of_the_iron_blood",
    "name": "Gear of the Iron Blood",
    "description": "Forged from the molten heart of a slag-forged warhammer, the Gear of the Iron Blood is a cursed piece of armor that whispers the names of fallen legionaries into battle. Its resilient surface repels industrial fire and heavy blows with unyielding tenacity, while each strike echoes their final vow. The wearer becomes a walking testament to the ironclad spirit of the legions, dealing bonus damage as if every blow is a call to arms.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% resistance to fire and heat damage",
      "15% chance to deal bonus damage with melee attacks"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fortified Resilience",
        "rules": "The wearer gains +30% resistance to fire and heat damage. This effect is active as long as the armor is worn. The resistance does not stack with other sources of resistance but provides a substantial buffer against fiery attacks."
      },
      {
        "title": "Battlecry Vengeance",
        "rules": "Once per short or long rest, after dealing melee damage to an enemy, the wearer has a 15% chance (advantage on d20 roll) to deal bonus damage equal to half the target's maximum hit points. This effect ends if the wearer is reduced to 0 hit points."
      }
    ],
    "levelRequirementReason": "The Gear of the Iron Blood demands a warrior with experience in battle, as its cursed whispers and resilient defenses require a seasoned combatant.",
    "vendorReason": "Midlands, known for their deep ties to ancient forges, offer this relic forged from the very heart of war.",
    "shippingDetail": "Delivered by Void Drifters, ensuring swift and secure passage through treacherous spaces.",
    "usage": {
      "activation": "Passive effect; no activation required. Bonus damage is a one-time use per rest.",
      "duration": "Instantaneous for the bonus damage effect; active as long as worn.",
      "endsWhen": "The wearer is reduced to 0 hit points or rests, whichever comes first.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the cursed lore and resilient craftsmanship of the Gear.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:41.204807+00:00",
    "aiReviewedAt": "2026-07-22T20:02:41.204807+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_iron_god": {
    "id": "midlands_gear_of_the_iron_god",
    "name": "Gear of the Iron God",
    "description": "The Gear of the Iron God, a rusted iron cog ring said to have been crafted by the last Iron God of the Midlands, hums with divine mechanical energy. It grants its wearer an innate sense of mechanical harmony and can be used to unlock intricate machinery simply by pressing three times. This relic not only enhances combat efficiency but also restores stamina rapidly, aiding in prolonged battles against relentless foes.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+200 attack speed with all melee weapons",
      "Instantaneous stamina restoration"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Melee Attacks",
        "rules": "When the wearer deals damage with a melee weapon, they gain +200 attack speed for 1 minute. This effect can be activated once per short or long rest."
      },
      {
        "title": "Stamina Restoration",
        "rules": "The Gear of the Iron God restores 50 stamina points immediately upon activation. This effect has no cooldown and can be used at will."
      }
    ],
    "levelRequirementReason": "This item is designed for beginning adventurers to help them navigate the challenges of their first quests.",
    "vendorReason": "The Midlands are known for their deep connection with ancient relics and this gear represents a perfect blend of mythic past and practical utility.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring adventurers can claim their new relic within days of purchase.",
    "usage": {
      "activation": "Standard action to press the gear three times.",
      "duration": "1 minute per activation.",
      "endsWhen": "Effect ends when used again or after one minute.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Gear of the Iron God is priced at 1000 XP, reflecting its rare craftsmanship and divine origin, making it a valuable asset for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:27.139767+00:00",
    "aiReviewedAt": "2026-07-22T20:02:27.139767+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_iron_golem": {
    "id": "midlands_gear_of_the_iron_golem",
    "name": "Gear of the Iron Golem",
    "description": "The Gear of the Iron Golem is a rusted iron armplate forged from the remains of an ancient forge that collapsed centuries ago. Its surface hums softly, resonating with the very essence of steel and stone. Wielders feel a surge in strength as the gear amplifies their melee strikes, capable of shattering even the toughest armor and crushing immovable objects. The gear's low-pitched resonance soothes metallic fatigue, allowing for longer periods of relentless combat without exhaustion.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Crush Armor",
      "Steel Resonance"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Crush Armor",
        "rules": "When you make a melee attack and hit an enemy wearing metal armor, there is a 15% chance that the attack breaks through their armor. This effect has no save DC and does not consume charges; it triggers once per short or long rest."
      },
      {
        "title": "Steel Resonance",
        "rules": "While wearing this gear, you gain a +10 bonus to saving throws against effects that would cause crushing damage. Additionally, the gear grants +30% melee damage on all attacks made with weapons that deal bludgeoning or slashing damage."
      }
    ],
    "levelRequirementReason": "The Gear of the Iron Golem requires a level 5 character to wield due to its intricate forging and the mystical properties embedded within.",
    "vendorReason": "Midlands, known for their expertise in ancient forgecraft, is the only vendor capable of handling such a powerful relic.",
    "shippingDetail": "The gear must be shipped via Koopa Postal's express service due to its fragile nature and historical significance.",
    "usage": {
      "activation": "Automatic on all melee attacks",
      "duration": "Instantaneous; effect lasts until the start of your next turn",
      "endsWhen": "Exhausted after a short or long rest",
      "charges": "Unlimited, but only one crush armor chance per rest"
    },
    "priceReason": "The Gear of the Iron Golem is priced at 1000 XP due to its rare forging materials and unique properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:36.663449+00:00",
    "aiReviewedAt": "2026-07-22T20:02:36.663449+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_iron_hag": {
    "id": "midlands_gear_of_the_iron_hag",
    "name": "Gear of the Iron Hag",
    "description": "The Gear of the Iron Hag is a cursed iron gauntlet forged from the bones of an industrial titan, its surface etched with arcane runes that hum with malevolent energy. The gauntlet's weight feels unnatural, each strike delivering a shudder to nearby foes and sapping your own speed in exchange for devastating damage against mechanical constructs. Its wielder must endure a constant chill that dampens morale among enemies, making it a fearsome weapon against automatons and other metal monstrosities.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "-10% enemy morale",
      "+50% damage to mechanical enemies"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Sapping",
        "rules": "When you attack a mechanical enemy, it suffers a -10 penalty to its morale score for the next hour. This effect can occur once per long rest."
      },
      {
        "title": "Mechanical Overload",
        "rules": "You gain advantage on damage rolls against mechanical constructs and increase your weapon's damage by +50%. This effect is exhausted after 3 uses, requiring a short rest to recover."
      }
    ],
    "levelRequirementReason": "The cursed nature of the gear requires at least a first-level character to resist its malevolent influence.",
    "vendorReason": "Midlands is known for their dark artifacts and ancient relics, making them the perfect vendor for such an item.",
    "shippingDetail": "Delivered with a cloak of secrecy, ensuring only those who truly desire it can obtain this cursed gear.",
    "usage": {
      "activation": "Instantaneous activation upon attack against mechanical enemies.",
      "duration": "Instantaneous effect; lasts until the end of your next turn after use.",
      "endsWhen": "Exhausted after 3 uses, requiring a short rest to recover.",
      "charges": "Uses"
    },
    "priceReason": "The item's cursed nature and unique crafting process justify this balanced XP price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:48.536849+00:00",
    "aiReviewedAt": "2026-07-22T20:02:48.536849+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_iron_mage": {
    "id": "midlands_gear_of_the_iron_mage",
    "name": "Gear of the Iron Mage",
    "description": "The Gear of the Iron Mage is a fusion of arcane energy and industrial might, forged in the heart of the Midlands' blacksmiths for the elite mage warriors. This enchanted gauntlet channels raw forge power into your fingertips, allowing you to deliver devastating 'Forge Bolt' blasts that ignite enemies, dealing area-of-effect damage. It also grants +10% critical strike chance when using this attack, making every strike a potential explosion of fiery destruction.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Forge Bolt",
      "Critical Strike Chance Boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Forge Bolt",
        "rules": "'Forge Bolt' is an action that deals 1d8+3 fire damage to all creatures within a 5-foot radius. Targets hit are also ignited, dealing an additional 1d6 fire damage at the start of their next turn for 3 rounds."
      },
      {
        "title": "Critical Strike Chance Boost",
        "rules": "When using 'Forge Bolt', you gain a +10% chance to score a critical hit. This effect lasts until you use Forge Bolt again or until your next long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively, as it channels powerful forge magic.",
    "vendorReason": "The Midlands are renowned for their blacksmiths and the Gear of the Iron Mage is a testament to their craftsmanship.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable deliveries within the kingdom. Expect a week for arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use until your next long rest or when you take an action to attack again",
      "charges": "Unlimited, recharged at the start of each long rest"
    },
    "priceReason": "Balanced price considering its powerful effects and unique abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:53.583368+00:00",
    "aiReviewedAt": "2026-07-22T20:02:53.583368+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_iron_soul": {
    "id": "midlands_gear_of_the_iron_soul",
    "name": "Gear of the Iron Soul",
    "description": "The Gear of the Iron Soul is a rusted iron gauntlet forged from the heart of a fallen industrial giant. Its surface is scored with ancient runes that hum faintly, and its weight hints at untold strength. This relic grants resilience against crushing force and echoes of the forge’s roar, making it perfect for those who march through slag and steel. The gauntlet not only protects but also amplifies the wearer's strikes against metal constructs and machinery.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mighty Strikes",
      "Forge Resilience"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mighty Strikes",
        "rules": "When you make a melee attack with this gauntlet, it deals an additional 1d6 damage to metal constructs and machinery. This effect can be used once per short rest."
      },
      {
        "title": "Forge Resilience",
        "rules": "You have resistance to crushing damage from heavy industrial gear. Additionally, you gain a +2 bonus to saving throws against being knocked prone by such attacks. This benefit lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Gear of the Iron Soul is designed for adventurers at all levels who may encounter industrial threats.",
    "vendorReason": "Midlands is renowned for its mastery in crafting gear that withstands harsh environments and industrial hazards.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery to your doorstep within one week.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Until the start of your next turn (Forge Resilience) or once per short rest (Mighty Strikes)",
      "endsWhen": "At the start of your next turn for Forge Resilience, at the end of a short rest for Mighty Strikes",
      "charges": "Unlimited"
    },
    "priceReason": "The Gear of the Iron Soul is crafted from rare materials and ancient techniques, making it a valuable asset in any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:51.066501+00:00",
    "aiReviewedAt": "2026-07-22T20:02:51.066501+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_mage_iron": {
    "id": "midlands_gear_of_the_mage_iron",
    "name": "Gear of the Mage Iron",
    "description": "The Gear of the Mage Iron is an iron-clad amulet shaped like a forgeheart, imbued with the spirit of a blacksmith and a mage. Crafted in the heart of the Midlands, it channels arcane power through tempered steel, granting you the strength of a master craftsman and the might of a spellcaster. Wear it to channel spells with ease, but beware—its iron weight slows your steps by 15%, and it drains your mana every 20 seconds unless you are actively working on a project.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% spell damage",
      "-15% movement speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Channeling",
        "rules": "While wearing the Gear of the Mage Iron, you can cast spells with no cost to your mana. This effect ends if you stop working on a project or if you are not actively casting."
      },
      {
        "title": "Movement Penalty",
        "rules": "The gear imposes a -15% movement speed penalty while worn. The penalty is reduced by 5% for every hour spent crafting an item, to a minimum of no penalty after four hours."
      }
    ],
    "levelRequirementReason": "Anyone can use this versatile gear, as it combines the skills of both a mage and a smith.",
    "vendorReason": "The Midlands are known for their innovative and practical magic, making this gear a natural addition to their offerings.",
    "shippingDetail": "Ships within three days via Koopa Postal's Express Service.",
    "usage": {
      "activation": "Passive effect while worn; no activation required.",
      "duration": "Instantaneous; ends when removed or if the user stops working on a project for more than one hour.",
      "endsWhen": "Removed from your person or if you stop working on a project for over an hour.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the gear's unique combination of spellcasting and crafting benefits, making it a valuable asset for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:02:56.543297+00:00",
    "aiReviewedAt": "2026-07-22T20:02:56.543297+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_mechanic": {
    "id": "midlands_gear_of_the_mechanic",
    "name": "Gear of the Mechanic",
    "description": "The Gear of the Mechanic is a finely crafted relic from the Iron Legion’s engineering guilds. This sturdy, gear-embossed bracer enhances your mechanical prowess by 15%, allowing for quicker repairs and crafting tasks. When in combat, it grants you the ability to quickly repair damaged gear or armor, restoring a portion of its durability lost during battle. The wearer also heals themselves over time, recovering health at a steady rate when engaged in conflict.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Crafting Boost",
      "Quick Repair"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Boost",
        "rules": "Passive effect that increases the user's crafting speed by 15%. This effect is permanent as long as the item is worn."
      },
      {
        "title": "Quick Repair",
        "rules": "A bonus action that restores 20% of a broken gear or armor’s durability, once per short rest. This ability cannot be used more than twice per day."
      }
    ],
    "levelRequirementReason": "The Gear of the Mechanic is designed for beginners to quickly enhance their mechanical skills.",
    "vendorReason": "Midlands is renowned for its expertise in engineering and craftsmanship, making it a fitting vendor for this relic.",
    "shippingDetail": "Delivered within three days by Pipe Express, ensuring the item reaches you promptly.",
    "usage": {
      "activation": "Passive effect. No activation required; always on as long as worn.",
      "duration": "Permanent while worn.",
      "endsWhen": "Exhausts upon removal or destruction of the gear.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Gear of the Mechanic provides a balanced boost to crafting and repair abilities, making it a fair price for its utility.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:03:02.551007+00:00",
    "aiReviewedAt": "2026-07-22T20:03:02.551007+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_mill": {
    "id": "midlands_gear_of_the_mill",
    "name": "Gear of the Mill",
    "description": "The Gear of the Mill is a rusted cogwheel forged from the heart of an abandoned forge, its surface etched with intricate patterns that glow faintly in the dark. This ancient artifact grants mechanical endurance to those who wear it, allowing them to navigate the Fractured Atrium’s shifting gears with ease and resilience. The hum it emits echoes with industrial might, resonating through metal and stone alike, making it a perfect companion for adventurers seeking to outmaneuver or dismantle machinery-based foes.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to resist mechanical traps",
      "Resistant to damage from machinery"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Mechanical Traps",
        "rules": "The wearer has a +10% chance to resist mechanical traps. This effect is passive and does not require any action."
      },
      {
        "title": "Mechanical Endurance",
        "rules": "For the duration of 1 hour, the wearer gains resistance to damage from machinery-based enemies. This effect ends if the wearer takes damage from a non-mechanical source or if the duration expires."
      }
    ],
    "levelRequirementReason": "The Gear of the Mill is crafted for beginners who may encounter mechanical traps and enemies in their early adventuring.",
    "vendorReason": "Midlands is known for its expertise in crafting gear that withstands the harshest conditions, making it a fitting vendor for this artifact.",
    "shippingDetail": "The Gear of the Mill is shipped via the Void Drifter Relay, ensuring safe and timely delivery even to the most remote corners of the Fractured Atrium.",
    "usage": {
      "activation": "Passive effect",
      "duration": "1 hour per day",
      "endsWhen": "Damage from a non-mechanical source or expiration of duration",
      "charges": "Unlimited"
    },
    "priceReason": "The Gear of the Mill is priced at 1000 XP to reflect its unique combination of passive and active effects, as well as its rarity in crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:03:19.802721+00:00",
    "aiReviewedAt": "2026-07-22T20:03:19.802721+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_molten_heart": {
    "id": "midlands_gear_of_the_molten_heart",
    "name": "Gear of the Molten Heart",
    "description": "The Gear of the Molten Heart is a forged steel gauntlet that channels the raw heat of industrial furnaces into incendiary strikes. Crafted from the remnants of ancient furnaces, it grants the wearer immunity to fire damage and enhances their melee prowess with relentless ferocity. Striking with this gauntlet feels as though the fires of forgeheart itself burn within your grip, delivering devastating blows that scorch foes in its wake.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Fire Damage",
      "Increased Melee Prowess"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fire Damage",
        "rules": "The wearer is immune to all fire-based damage. This effect does not require activation and lasts for the duration of the wearer's concentration."
      },
      {
        "title": "Increased Melee Prowess",
        "rules": "When using melee weapons, the wearer deals an additional 20% bonus damage on attacks that are fire or heat-based. This effect is active as long as the gauntlet is worn and can be used up to three times per short rest."
      }
    ],
    "levelRequirementReason": "This gauntlet requires no level, but it's best suited for those who have yet to master their skills in combat.",
    "vendorReason": "Midlands is known for its industrial strength and can supply such a unique item from the heart of their forges.",
    "shippingDetail": "Ships via Boo Spectral Mail, which ensures safe but somewhat delayed delivery to even the most remote corners of the realm.",
    "usage": {
      "activation": "Passive effect. No activation required.",
      "duration": "Until the wearer ends their concentration or removes the gauntlet.",
      "endsWhen": "The effect ceases when the wearer ends their concentration or removes the gauntlet.",
      "charges": "Unlimited"
    },
    "priceReason": "This gear, while not requiring a level requirement, is crafted with rare and ancient materials from industrial furnaces, making it a valuable yet balanced purchase.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:03:08.242280+00:00",
    "aiReviewedAt": "2026-07-22T20:03:08.242280+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_molten_tyrant": {
    "id": "midlands_gear_of_the_molten_tyrant",
    "name": "Gear of the Molten Tyrant",
    "description": "The Gear of the Molten Tyrant, crafted from the heart of a dormant volcano, channels molten heat into every swing and strike. This heavy plate armor not only enhances the wearer's melee prowess but also scalds enemies' defenses, leaving them vulnerable to further attacks. Wielded by the Legion’s most feared enforcers, it whispers of volcanic fury in the steel halls, where its wearer can ignite the very essence of their strikes into searing flames.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Molten Strikes",
      "Scalding Armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Molten Strikes",
        "rules": "When you make a melee attack while wearing this armor, there is a +15% chance that the target's armor becomes ignited. If successful, the target takes an extra 2d6 fire damage at the start of their next turn."
      },
      {
        "title": "Scalding Armor",
        "rules": "When you make a melee attack with this armor, there is a +10% chance that it triggers Molten Rage. For the next three turns, your melee attacks deal an additional 50% damage."
      }
    ],
    "levelRequirementReason": "Wearing such heavy and potent armor requires a level of expertise in combat to properly harness its volcanic power.",
    "vendorReason": "Midlands, known for their blacksmithing prowess, are the only ones capable of crafting such volatile and powerful gear.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for its reliable yet eerie couriers.",
    "usage": {
      "activation": "Instantaneous upon donning or removing the armor.",
      "duration": "Until removed by the wearer.",
      "endsWhen": "Destroyed if exposed to water or significantly cooled.",
      "charges": "Unlimited; recharges with the wearer's next short rest."
    },
    "priceReason": "Crafted from volcanic materials and designed for elite combatants, this gear is a rare find, balancing its power with a reasonable price point.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T20:03:26.812197+00:00",
    "aiReviewedAt": "2026-07-22T20:03:26.812197+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_pond_patrol": {
    "id": "midlands_gear_of_the_pond_patrol",
    "name": "Gear of the Pond Patrol",
    "description": "The Gear of the Pond Patrol is a rugged harness made from iron and supple leather, designed for stealthy infiltration beneath the ironworks’ shadows. It whispers with each step, masking your presence from prying eyes and ears. Crafted by the artisans of Midlands, this gear grants the wearer a temporary advantage in stealth, making them nearly invisible to detection, and provides a measure of protection against blunt and crushing attacks.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealthy Advantage",
      "Blunt Defense"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealthy Advantage",
        "rules": "The wearer gains the advantage on Dexterity (Stealth) checks. This effect lasts for 1 hour, and it ends if the wearer attacks or casts a spell."
      },
      {
        "title": "Blunt Defense",
        "rules": "The gear provides a +2 bonus to AC against bludgeoning and crushing weapon attacks. The bonus remains until the end of your next turn after taking damage from such an attack."
      }
    ],
    "levelRequirementReason": "This gear is designed for beginners who need its stealth capabilities but are not yet at a higher level.",
    "vendorReason": "The artisans of Midlands are renowned for their expertise in crafting equipment that suits the needs of the Patrol, ensuring this gear meets high standards of quality and function.",
    "shippingDetail": "Delivered swiftly via Pipe Express, known for its reliable service within the region.",
    "usage": {
      "activation": "Passive effect activated upon donning the gear.",
      "duration": "1 hour or until interrupted by combat actions.",
      "endsWhen": "The wearer attacks or casts a spell.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "This balanced price reflects the gear’s modest rarity and its utility for beginners in stealth missions without overpricing it compared to other similar items of comparable value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:03:15.795143+00:00",
    "aiReviewedAt": "2026-07-22T20:03:15.795143+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_scorched_gate": {
    "id": "midlands_gear_of_the_scorched_gate",
    "name": "Gear of the Scorched Gate",
    "description": "The Gear of the Scorched Gate is a battle-worn cuirass that clatters with each step. Forged in the heart of the Iron Legion's final stand, its surface is riddled with fire-scorched marks. This armor grants you immunity to fire damage and increases your melee speed by 40%, making each strike faster and more precise. The gear whispers of the legion’s last battle as it enhances your critical hit chance with melee weapons by an additional 10%.",
    "category": "equipment",
    "price": 1400,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Fire Damage",
      "+40% Melee Speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fire Immunity",
        "rules": "You gain immunity to fire damage while wearing the Gear of the Scorched Gate. This effect is always active as long as you are wearing the gear."
      },
      {
        "title": "Melee Speed Boost",
        "rules": "While wearing this armor, your speed increases by 40%. This effect is passive and does not require any action to activate."
      }
    ],
    "levelRequirementReason": "The Gear of the Scorched Gate requires a level 6 character due to its complex enchantments and the knowledge needed to properly wield it.",
    "vendorReason": "Midlands, as a forgeheart city, has the expertise to craft such relics from the Iron Legion’s final battle.",
    "shippingDetail": "The item is delivered with special care using Shy Guy Smugglers' encrypted courier service ensuring safe arrival.",
    "usage": {
      "activation": "Passive effect, no activation required",
      "duration": "Instantaneous and permanent while the gear is worn",
      "endsWhen": "Removing the armor ends this effect",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique craftsmanship, historical significance, and the raw materials required to create such a powerful relic.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T20:03:22.155794+00:00",
    "aiReviewedAt": "2026-07-22T20:03:22.155794+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_scorched_witch": {
    "id": "midlands_gear_of_the_scorched_witch",
    "name": "Gear of the Scorched Witch",
    "description": "The Gear of the Scorched Witch, forged in the heart of an Iron Marches bonfire, radiates a spectral glow that chills the soul of any who dare to face it. This cursed armor not only drains enemy morale but also parries strikes with bone-chilling precision, turning fear into a weapon. Worn by those who have seen too much fire, this relic grants the wearer a chilling presence and enhances their attacks against foes already weakened by terror.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Inflicts Fear",
      "Enhanced Parrying"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inflicts Fear",
        "rules": "When an enemy within 5 feet of the wearer makes an attack roll, it must succeed on a DC 13 Wisdom saving throw or be frightened for 30 seconds. The target’s attack speed is reduced by –20% and its action is limited to movement until the effect ends."
      },
      {
        "title": "Enhanced Parrying",
        "rules": "The wearer has advantage on Dexterity (Acrobatics) checks made to parry attacks. Additionally, if a creature within 5 feet of the wearer successfully hits them with an attack roll, the wearer can use their reaction to reduce the damage taken by half."
      }
    ],
    "levelRequirementReason": "This gear's power is accessible early in the adventuring career.",
    "vendorReason": "Midlands has a reputation for dealing in ancient and cursed relics, making this item fit for their inventory.",
    "shippingDetail": "Delivered by spectral messengers who ensure the Gear's arrival is both swift and eerie.",
    "usage": {
      "activation": "Instantaneous effect on contact with an enemy.",
      "duration": "30 seconds per use, ends when the fear effect resolves or when a new target is hit.",
      "endsWhen": "The fear effect ends once the duration expires or when the wearer takes damage from a creature already affected by it.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced for its early-game utility and unique abilities that enhance both morale control and defensive capabilities.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:03:45.886892+00:00",
    "aiReviewedAt": "2026-07-22T20:03:45.886892+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_silent_forged": {
    "id": "midlands_gear_of_the_silent_forged",
    "name": "Gear of the Silent Forged",
    "description": "The Gear of the Silent Forged is a set of iron plates forged in secret by a monk-ironworker who chose silence over speech. These plates whisper their strength; they grant immunity to fear and confusion, perfect for navigating Legion-controlled zones. The wearer's strikes echo with an unspoken power, increasing critical hit chance on melee attacks by 15%. They also resist sonic damage more effectively, providing +5% resistance.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Fear",
      "Enhanced Melee Strikes"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Fear",
        "rules": "The wearer is immune to fear and confusion effects. This immunity persists for the duration of the encounter."
      },
      {
        "title": "Enhanced Melee Strikes",
        "rules": "When making a melee attack, the wearer has advantage on the roll and deals an additional 1d6 damage on a hit. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This set of gear is designed for beginners to help them navigate fear-inducing environments safely.",
    "vendorReason": "Midlands has a reputation for providing essential gear to adventurers, including those who need protection from the Legion's control zones.",
    "shippingDetail": "Ships via Pipe Express within three days of purchase.",
    "usage": {
      "activation": "Instantaneous upon donning the armor and active during the duration of the encounter.",
      "duration": "The effects last until the end of the current encounter or until the wearer removes the gear.",
      "endsWhen": "Removing the gear ends its effects for the day.",
      "charges": "Unlimited, recharging after a short or long rest."
    },
    "priceReason": "The Gear of the Silent Forged is priced to reflect its rarity and the unique benefits it provides to adventurers navigating fear-inducing environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:03:34.302974+00:00",
    "aiReviewedAt": "2026-07-22T20:03:34.302974+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_sovereign": {
    "id": "midlands_gear_of_the_sovereign",
    "name": "Gear of the Sovereign",
    "description": "The Gear of the Sovereign, forged in the shadowed forges of King's Landing, is a helm that channels the iron will of the Iron Throne into battle. It grants its wearer the ability to command unwavering loyalty from allies and instill dread in foes, turning the tide of combat with subtle yet potent influence. This relic’s power is not merely martial; it also subtly bends reality, enhancing melee defense by a significant margin without directly boosting attack statistics.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Command Loyalty",
      "Suppress Fear"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Command Loyalty",
        "rules": "When the wearer issues a command to an ally within their line of sight, that ally gains +20% Leadership for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Suppress Fear",
        "rules": "The Gear emits a subtle aura that reduces fear effects on the wearer and any allies within 15 feet by half, providing temporary resistance to such conditions. The suppression lasts for 1 hour or until the wearer enters combat. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Gear of the Sovereign requires a minimum level of 5 due to its complex enchantments and the subtle magic it channels.",
    "vendorReason": "Midlands, with their extensive trade routes and connections to ancient artifacts, are trusted by many to source such powerful relics.",
    "shippingDetail": "The Gear is delivered discreetly through Shy Guy Smugglers, ensuring its arrival without drawing undue attention.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Temporary effects last for specific durations as detailed above.",
      "endsWhen": "Effects end when the rest period ends or combat begins, whichever occurs first.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Gear of the Sovereign is priced at 1000 XP due to its rare enchantments and historical significance, providing a balanced value for players seeking to enhance their tactical flexibility in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:03:52.330496+00:00",
    "aiReviewedAt": "2026-07-22T20:03:52.330496+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_the_spectral_courier": {
    "id": "midlands_gear_of_the_spectral_courier",
    "name": "Gear of the Spectral Courier",
    "description": "This spectral gear is crafted from the very essence of the Peach Loyalists' ghostly messengers. Worn by the dead, it allows you to teleport instantly to a nearby ally or enemy within 50 feet, leaving behind an ethereal echo that briefly reveals hidden foes. The faint hum of its core hints at the spirit work that binds it together, and each use saps your stamina as if you had run a mile in heavy armor.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echo of the Dead",
      "Teleport"
    ],
    "vendor": "midlands",
    "shippedBy": "Ghostly Courier Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echo of the Dead",
        "rules": "When you teleport an ally or enemy within 50 feet, there is a 10% chance that your spectral echo reveals a hidden foe in a 20-foot radius for 5 seconds. This effect has no save DC and can occur once per long rest."
      },
      {
        "title": "Teleport",
        "rules": "As a bonus action, you or an ally within 50 feet of your location may teleport to the nearest unoccupied space. The use drains 50% of your stamina and lasts until the end of your next turn. You can only use this once per short rest."
      }
    ],
    "levelRequirementReason": "This gear requires a minimum level to ensure you have the stamina and concentration needed for such an ethereal effect.",
    "vendorReason": "The Midlands are known for their expertise in ghostly artifacts, making them the best place to source such spectral equipment.",
    "shippingDetail": "Delivered by spectral mail, this gear arrives with a faint whisper and a shimmering glow, ensuring it reaches its destination without delay.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The use ends when you or your target moves away from the teleport location or at the start of your next turn after using it.",
      "charges": "Once per short rest"
    },
    "priceReason": "Balanced to ensure it is a rare but not overpowered item, this gear requires careful use and comes with the risk of stamina drain.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:03:42.060602+00:00",
    "aiReviewedAt": "2026-07-22T20:03:42.060602+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_of_vigilance": {
    "id": "midlands_gear_of_vigilance",
    "name": "Gear of Vigilance the Unbroken",
    "description": "The Gear of Vigilance the Unbroken is a relic forged in the heart of the Vigilance’s final stand against the Legion. Its iron frame glows with an inner light, and its engravings speak of ancient resistance. Wear this gear to temporarily cloak yourself within the very essence of the Legion's wrath, granting you resistance to mind control and suppression effects while also disarming your enemies for a brief moment.",
    "category": "equipment",
    "price": 1400,
    "icon": "🧱",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mind Control Resistance",
      "Disarmament"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mind Control Resistance",
        "rules": "When worn, the Gear provides you with resistance to mind control and suppression effects. This effect lasts for 5 minutes."
      },
      {
        "title": "Disarmament",
        "rules": "As a reaction when an enemy attempts to disarm your weapon or disarm you, you can cause the disarm attempt to fail, and the attacker must make a Strength saving throw (DC 13) or drop any item in their hand."
      }
    ],
    "levelRequirementReason": "The Gear's intricate enchantments require at least level 5 proficiency to wield effectively.",
    "vendorReason": "Midlands has a deep connection with the Vigilance and their relics, making it the most reliable source for such powerful artifacts.",
    "shippingDetail": "Delivered within three days of purchase; fragile items require special handling.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "5 minutes while worn.",
      "endsWhen": "Removes upon removal or loss of the gear.",
      "charges": "Unlimited"
    },
    "priceReason": "The Gear's rarity and its significant defensive benefits justify a higher price point.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T20:03:47.435392+00:00",
    "aiReviewedAt": "2026-07-22T20:03:47.435392+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_scarf_of_the_tower_mist": {
    "id": "midlands_gear_scarf_of_the_tower_mist",
    "name": "Gear Scarf of the Tower Mist",
    "description": "Woven from the fraying remnants of a toppled industrial tower, the Gear Scarf of the Tower Mist captures the very essence of the Iron Legion's forgotten machinery. Its once-strong fibers now whisper tales of crushing power and resilience, granting the wearer an unyielding embrace that enhances their armor by 30% and provides resistance to crushing damage. The scarf hums with a spectral energy that temporarily reduces enemy defenses, making them more vulnerable when they least expect it.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Crushing Resistance",
      "Enemy Vulnerability"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crushing Resistance",
        "rules": "When worn, the scarf grants you a +30% bonus to your armor class against crushing damage. This effect is active while you wear it."
      },
      {
        "title": "Enemy Vulnerability",
        "rules": "Once per short rest, after you use this item in combat, any enemy that deals crushing damage to you must make a Strength saving throw (DC 15). On a failed save, the enemy's armor class is reduced by 10 for 3 seconds."
      }
    ],
    "levelRequirementReason": "The scarf's spectral essence requires only basic concentration and finesse to wield.",
    "vendorReason": "Midlands Gear specializes in repurposed industrial artifacts, making this scarf a perfect addition to their collection.",
    "shippingDetail": "Shipped discreetly via air courier for expedited delivery within one week.",
    "usage": {
      "activation": "Wearing the scarf in combat",
      "duration": "Instantaneous, lasting until the end of your next turn or when you remove it",
      "endsWhen": "Exhausted after use; can be used once per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare industrial remnants, this scarf offers a unique combination of defensive and offensive capabilities at a fair price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T20:04:48.590220+00:00",
    "aiReviewedAt": "2026-07-22T20:04:48.590220+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_soul_core": {
    "id": "midlands_gear_soul_core",
    "name": "Gear Soul Core",
    "description": "The Gear Soul Core, forged from the very heart of the Iron Spire's forgotten mechanist, channels an ancient spirit that enhances a wielder’s dexterity and fortitude. When activated, it grants +20 feet movement speed for 15 seconds, allowing you to swiftly bypass foes, and increases your Strength by 3 until your next short or long rest. This relic is said to have been lost in the catacombs before it was recovered by Midlands Gearworks, a renowned vendor known for their salvaged artifacts.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Swift Step",
      "Fortified Strikes"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Step",
        "rules": "When activated as a bonus action, you gain +20 feet of movement speed for 15 seconds. This effect ends when you take damage or if you move through difficult terrain."
      },
      {
        "title": "Fortified Strikes",
        "rules": "While the Gear Soul Core is active, your melee attacks deal an additional +3 bonus to damage against targets with metal armor. The core can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Gear Soul Core’s activation requires minimal exertion and is thus accessible to lower-level adventurers.",
    "vendorReason": "Midlands Gearworks specializes in salvaging and crafting rare relics from ancient ruins, making the Gear Soul Core a fitting addition to their inventory.",
    "shippingDetail": "Delivered within 3 days via Pipe Express’s express courier service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "15 seconds",
      "endsWhen": "Taking damage or moving through difficult terrain",
      "charges": "Once per short or long rest"
    },
    "priceReason": "The Gear Soul Core is priced at 1000 XP, reflecting its unique origin and the skill required to craft such a relic.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T20:04:23.117359+00:00",
    "aiReviewedAt": "2026-07-22T20:04:23.117359+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_tattoo_of_the_bloodhound": {
    "id": "midlands_gear_tattoo_of_the_bloodhound",
    "name": "Gear Tattoo of the Bloodhound",
    "description": "The Gear Tattoo of the Bloodhound is an intricate iron insignia that pulses with the relentless energy of Midlands' factories. As you stride through industrial environs, it grants a +20% increase in movement speed for 10 seconds, allowing you to navigate bustling workshops and narrow alleys with ease. In melee combat, this tattoo amplifies your precision, boosting your critical hit chance by +10%, ensuring each strike carries more deadly force.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% Movement Speed",
      "+10% Crit Chance"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Industrial Surge",
        "rules": "When you land a critical hit in melee, you gain a +5 bonus to your next movement speed check. This effect lasts for the start of your next turn."
      },
      {
        "title": "Melee Precision Boost",
        "rules": "While this tattoo is active, all attacks made with melee weapons have advantage on the initial attack roll and deal an additional 1d6 damage."
      }
    ],
    "levelRequirementReason": "The intricate design of the Gear Tattoo requires a certain proficiency in navigating industrial environments.",
    "vendorReason": "Midlands is renowned for its mastery of industrial gear and unique body modifications.",
    "shippingDetail": "Ships via the Void Drifter Relay, arriving within a week of purchase.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "10 seconds per activation.",
      "endsWhen": "At the start of your next turn after landing a critical hit or when the duration expires.",
      "charges": "Unlimited, but requires concentration for its effects."
    },
    "priceReason": "Balanced as it provides situational benefits in industrial combat and movement scenarios.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T20:03:59.922459+00:00",
    "aiReviewedAt": "2026-07-22T20:03:59.922459+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gear_tincture": {
    "id": "midlands_gear_tincture",
    "name": "Gear Tincture of the Iron Heart",
    "description": "The Gear Tincture of the Iron Heart is a vial of liquid iron and gear oil, imbued with the spirit of the Legion's greatest machines. Each sip before battle amplifies mechanical combat prowess, granting +40% damage to machines for 30 minutes. After a conflict, it restores 50% of your gear integrity, ensuring your tools of war remain in top condition. This tincture is said to have been crafted by the very hands that forged the Legion’s legendary mecha.",
    "price": 1400,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+40% damage to machines",
      "Restores 50% of gear integrity after battle"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+40% Damage to Machines",
        "rules": "Active on consumption. Increases your mechanical weapon and tool damage by +40% for a duration of 30 minutes. This effect ends when the duration expires or you consume another tincture."
      },
      {
        "title": "Restores 50% Gear Integrity",
        "rules": "Passive, triggered after battle. Restores 50% of your gear integrity immediately following a conflict. Requires no action and is consumed upon use."
      }
    ],
    "levelRequirementReason": "This tincture is accessible to all who wish to enhance their mechanical combat skills.",
    "vendorReason": "Midlands Gear specializes in items that empower the Legion’s soldiers, and this tincture is a key part of their arsenal.",
    "shippingDetail": "Ships via Pipe Express, known for its reliable delivery within a week.",
    "usage": {
      "activation": "Consumed as an action before battle.",
      "duration": "30 minutes.",
      "endsWhen": "Duration expires or another tincture is consumed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the rare materials and delicate alchemy required to craft this potent elixir.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T20:04:44.404518+00:00",
    "aiReviewedAt": "2026-07-22T20:04:44.404518+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gilded_curse": {
    "id": "midlands_gilded_curse",
    "name": "Gilded Curse Necklace",
    "description": "The Gilded Curse Necklace is a twisted piece of jewelry crafted from tarnished gold and dark obsidian. Its origins lie in an ancient, cursed forge where it was said to be used by blacksmiths to bind restless souls. When worn, the necklace whispers eerie tales that grant +2 to attack rolls for 1 minute but at the cost of 1d6 sanity points each hour. Wearing this cursed trinket is a dangerous game; should you perish, your soul becomes a spectral guardian bound to the necklace's chain.",
    "category": "equipment",
    "price": 28000,
    "icon": "🧟",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Cursed Attack Boost",
      "Soulbound Guardian"
    ],
    "vendor": "midlands",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cursed Attack Boost",
        "rules": "Activates on touch. Grants +2 to all attack rolls for 1 minute. Ends when the wearer takes damage, or if the wearer's sanity drops below zero."
      },
      {
        "title": "Soulbound Guardian",
        "rules": "If the wearer dies while wearing this necklace, their soul becomes a spectral guardian bound to the item until it is destroyed. The guardian cannot leave 50 feet of the necklace and can attack once per turn against intruders."
      }
    ],
    "levelRequirementReason": "The cursed nature of the Gilded Curse Necklace requires a wearer with basic combat training.",
    "vendorReason": "Midlands, known for their dark and arcane items, sells this cursed artifact despite its questionable benefits.",
    "shippingDetail": "Ships with special handling due to the cursed nature of the item; delivery can be delayed by up to a week.",
    "usage": {
      "activation": "Touch",
      "duration": "1 minute",
      "endsWhen": "Taking damage or sanity dropping below zero, or wearer's death (activates guardian)",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the necklace's cursed nature and its limited yet powerful effects.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T20:04:12.349936+00:00",
    "aiReviewedAt": "2026-07-22T20:04:12.349936+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gilded_gear_soul": {
    "id": "midlands_gilded_gear_soul",
    "name": "Gilded Gear Soul",
    "description": "The Gilded Gear Soul, forged from the heart of a war-mech once serving the Iron Throne, is a relic that enhances both your armor and morale. Its core glows faintly with energy, occasionally awakening visions of forgotten kings, inspiring courage in battle. This soul grants +500 to AC and +200 to morale checks, while also giving you a +50% chance to reduce an enemy's morale when you succeed on a Strength or Charisma check.",
    "price": 1400,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enhanced Armor",
      "Morale Boost"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Armor",
        "rules": "This effect increases your AC by 500 and provides +200 to morale checks. It also grants a +50% chance to reduce an enemy's morale when you succeed on a Strength or Charisma check, which lasts until the end of your next turn."
      },
      {
        "title": "Morale Boost",
        "rules": "This effect provides a +200 bonus to all morale-related checks and increases your chance to inspire allies nearby. It persists as long as you are conscious."
      }
    ],
    "levelRequirementReason": "The Gilded Gear Soul is designed for beginners, providing immediate support in both combat and morale.",
    "vendorReason": "Midlands vendors specialize in rare relics and artifacts from forgotten realms, making the Gilded Gear Soul a fitting addition to their stock.",
    "shippingDetail": "The Rakasha spirit delivers the Gilded Gear Soul swiftly but requires a brief ritual upon arrival for activation.",
    "usage": {
      "activation": "Passive effect, activated on contact with the relic.",
      "duration": "Persistent until you lose consciousness or are no longer within reach of the relic.",
      "endsWhen": "The effect ends if you lose consciousness or move more than 10 feet away from the relic.",
      "charges": "Unlimited; recharges daily upon resting for at least 8 hours."
    },
    "priceReason": "This price reflects the item's rare material and its ability to provide immediate, significant combat and morale benefits without requiring a slot or spell casting.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T20:04:40.375865+00:00",
    "aiReviewedAt": "2026-07-22T20:04:40.375865+00:00",
    "aiReviewVersion": 1
  },
  "midlands_gilded_sword_of_the_king": {
    "id": "midlands_gilded_sword_of_the_king",
    "name": "Gilded Sword of the King",
    "description": "The Gilded Sword of the King is a ceremonial blade forged from the king’s own blood and the iron of the throne room, its golden hilt gleaming with the weight of centuries. Its hallowed steel grants +12% melee damage to its wielder, and when drawn in battle, enemies quail under the aura of the monarch's unyielding resolve, causing them a 5% chance of being inflicted with ‘Fear’ for 5 seconds. The blade’s royal essence provides a passive +10% defense bonus while standing still, making it a symbol of power and protection.",
    "category": "equipment",
    "price": 1400,
    "icon": "🏰",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+12% Melee Damage",
      "Fear Aura"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Royal Resolve Aura",
        "rules": "The wielder gains +10% defense bonus while standing still. This aura ends when the wielder moves or takes an action."
      },
      {
        "title": "Fear Infliction",
        "rules": "Enemies within 5 feet have a 5% chance to be inflicted with ‘Fear’ for 5 seconds upon being struck by melee attacks from the wielder. This effect has no save DC and can occur once per target per short rest."
      }
    ],
    "levelRequirementReason": "The sword's ceremonial nature allows even novice warriors to harness its power.",
    "vendorReason": "The Midlands are the heart of royal tradition, and thus they sell items steeped in noble history like this sword.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring it arrives in pristine condition for your next grand duel or ceremony.",
    "usage": {
      "activation": "Drawn as a melee weapon",
      "duration": "Instantaneous when drawn; aura active while standing still",
      "endsWhen": "Moving or taking an action",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The sword's rarity and historical significance justify its price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T20:04:37.273379+00:00",
    "aiReviewedAt": "2026-07-22T20:04:37.273379+00:00",
    "aiReviewVersion": 1
  },
  "midlands_golem_blade": {
    "id": "midlands_golem_blade",
    "name": "Golem’s Last Blade",
    "description": "The Golem’s Last Blade is a massive warblade forged from the shattered arm of a fallen siege golem, its surface etched with runes that hum with ancient willpower. This weapon not only deals +30% extra damage to undead foes but also has a +10% chance to shatter enemy armor on each hit, leaving a lasting impression with its Iron Soul debuff that afflicts the next target for 3 turns.",
    "category": "equipment",
    "price": 1400,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% Damage vs Undead",
      "+10% Chance to Shatter Armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unholy Edge",
        "rules": "When you hit an undead with this weapon, deal +30% extra damage. This effect has no save DC and does not require any action."
      },
      {
        "title": "Armor Shatter",
        "rules": "There is a 10% chance that each successful hit against an enemy will cause their armor to shatter, dealing an additional 2d6 points of damage. This effect ends when the weapon breaks or after 5 uses."
      }
    ],
    "levelRequirementReason": "This blade's ancient power requires only a basic understanding of combat.",
    "vendorReason": "The Midlands are renowned for their skilled blacksmiths and knowledge of golem lore, making them the perfect vendor for such an artifact.",
    "shippingDetail": "Delivered with utmost secrecy; Shy Guy Smugglers ensure the blade arrives safely in its custom wooden crate.",
    "usage": {
      "activation": "Instantaneous effect on hit.",
      "duration": "Until weapon breaks or after 5 uses, whichever comes first.",
      "endsWhen": "Weapon breaks or after 5 uses.",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's ancient forging and unique properties make it a rare find worth its cost in XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:05:05.758804+00:00",
    "aiReviewedAt": "2026-07-22T20:05:05.758804+00:00",
    "aiReviewVersion": 1
  },
  "midlands_golem_blood_iron": {
    "id": "midlands_golem_blood_iron",
    "name": "Iron Heart of the Broken Forge",
    "description": "The Iron Heart of the Broken Forge is a relic forged from the molten remains of an ancient golem, its surface scarred with the marks of countless battles. This enchanted core grants the wielder the ability to command iron constructs and bestows a shield that repels harm when struck. Its origin lies in the forge heart of Blacksmith’s Hollow, where it was crafted during the siege by a dying god's will.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% critical hit chance with melee weapons",
      "Repels damage for 2d8 points upon being struck"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Critical Boost",
        "rules": "Activates on melee weapon attack. Grants +15% to the chance of a critical hit until the end of your next turn."
      },
      {
        "title": "Damage Repel",
        "rules": "Activated when struck by an attack or effect. Repels 2d8 points of damage from the wielder and adjacent allies, ending if the wielder takes additional damage within one round."
      }
    ],
    "levelRequirementReason": "Requires a certain understanding of golem magic to wield effectively.",
    "vendorReason": "Midlands is known for its connections with ancient relics and blacksmithing lore.",
    "shippingDetail": "Delivered via spectral courier, ensuring swift arrival even in the most treacherous terrain.",
    "usage": {
      "activation": "Instantaneous upon being struck or attacked.",
      "duration": "Until the start of your next turn or until repelled by additional damage.",
      "endsWhen": "Repelled by taking further damage within one round.",
      "charges": "Unlimited, recharged with each long rest."
    },
    "priceReason": "Balanced price reflects the item's golem-origin rarity and its unique defensive and offensive capabilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:04:54.124875+00:00",
    "aiReviewedAt": "2026-07-22T20:04:54.124875+00:00",
    "aiReviewVersion": 1
  },
  "midlands_golem_blood_tincture": {
    "id": "midlands_golem_blood_tincture",
    "name": "Golem Blood Tincture",
    "description": "Golem Blood Tincture is a dark, viscous elixir extracted from the marrow of ancient siege automatons. This potent potion imbues the drinker with the resilience and durability that once powered these formidable constructs, granting them greater strength and resistance to magical suppression. It is said that the tincture's potency comes not only from its mechanical origin but also from the arcane experiments conducted in the shadowy enclaves of the Midlands. Drinking this elixir forgoes a meal.",
    "price": 1400,
    "icon": "🧪",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% Strength and Durability",
      "Resistant to Magical Suppression"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Auto-Repair Boost",
        "rules": "As a bonus action, you can trigger Auto-Repair, healing an additional 20% of your maximum hit points. This effect lasts for 3 turns and can be used once per long rest."
      },
      {
        "title": "Magical Suppression Resistance",
        "rules": "You have advantage on saving throws against spells and effects that would suppress or negate magical abilities. This bonus lasts until you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "The tincture's potent properties require minimal preparation, making it accessible to lower-level adventurers.",
    "vendorReason": "The Midlands are renowned for their mastery of siege automatons and the secrets they hold, making them a trusted source for such elixirs.",
    "shippingDetail": "Shipped via the Void Drifter Relay, this tincture arrives within one week, ensuring its potency remains intact.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous effect; Auto-Repair lasts for 3 turns and can be used once per long rest.",
      "endsWhen": "Upon consumption or when the duration ends.",
      "charges": "Unlimited, but only one use of Auto-Repair per long rest."
    },
    "priceReason": "The tincture's rare extraction and potent effects justify its moderate price point within the market.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T20:04:59.352901+00:00",
    "aiReviewedAt": "2026-07-22T20:04:59.352901+00:00",
    "aiReviewVersion": 1
  },
  "midlands_industrial_blade": {
    "id": "midlands_industrial_blade",
    "name": "Ironclad Slicer",
    "description": "The Ironclad Slicer gleams ominously under the forge's glow, its blade crafted from industrial steel refined in the heart of the Iron Legion’s workshops. This weapon not only cuts through armor and machinery with brutal efficiency but also bends the very laws of physics when wielded against mechanical foes, delivering a devastating strike that leaves no resistance intact. Its edge glows faintly with residual forge heat, hinting at its origins in the relentless factories where it was forged to withstand the harshest tests.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% damage to mechanical targets",
      "Critical hit chance increased by +15%"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mechanical Precision",
        "rules": "When used against a mechanical target, the Ironclad Slicer deals an additional +30% damage. This effect persists for one minute per level of the wielder."
      },
      {
        "title": "Enhanced Criticals",
        "rules": "For every 5 levels of experience your character has achieved, the critical hit chance is increased by an additional 2%. Up to a maximum of +15% at 7th level or higher."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 3 to wield due to the weapon's complex forging process and intricate balance.",
    "vendorReason": "Midlands is renowned for its mastery in industrial weaponry, making it the perfect vendor for this unique blade.",
    "shippingDetail": "The weapon is shipped via a Rakasha spirit courier who ensures swift and secure delivery, often arriving within one week of purchase.",
    "usage": {
      "activation": "Instantaneous activation upon contact with the target.",
      "duration": "One minute per level of the wielder, until expended.",
      "endsWhen": "The duration ends when the weapon's charge is depleted or if it is sheathed for more than an hour.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP due to its rare forging process, unique material composition, and the increased effectiveness against mechanical targets.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:05:30.340393+00:00",
    "aiReviewedAt": "2026-07-22T20:05:30.340393+00:00",
    "aiReviewVersion": 1
  },
  "midlands_industrial_blood_iron": {
    "id": "midlands_industrial_blood_iron",
    "name": "Industrial Blood Iron",
    "description": "The Industrial Blood Iron, forged in the heart of Legion steel mills, channels the raw energy of industrial decay into a weapon of precision and destruction. Its blade hums with latent power, capable of dealing an extra +40% damage to mechanical constructs and briefly disabling their armor on impact for 2 seconds. This weapon's very touch is suffused with the scent of burning coal and molten steel, leaving enemies reeling from its assault.",
    "category": "equipment",
    "price": 1400,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mechanical Precision",
      "Armor Disable"
    ],
    "vendor": "Midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mechanical Precision",
        "rules": "When you hit a mechanical enemy with this weapon, it deals an additional +40% damage. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Armor Disable",
        "rules": "On a successful hit against a mechanical enemy, the target's armor is disabled for 2 seconds. During this time, the target's movement speed is reduced by 20%. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The weapon's raw industrial power demands a proficient user with at least 3rd level experience.",
    "vendorReason": "Midlands, known for its industrial prowess and technological expertise, is the perfect vendor to offer this cutting-edge weapon.",
    "shippingDetail": "The Industrial Blood Iron requires special handling due to its volatile nature. It will be delivered via Pipe Express's express service within a week of purchase.",
    "usage": {
      "activation": "On hit with the weapon",
      "duration": "Instantaneous (2 seconds disabled armor, 3 second debuff)",
      "endsWhen": "At end of target's next turn or if the weapon is re-sheathed",
      "charges": "Unlimited"
    },
    "priceReason": "The Industrial Blood Iron’s rare forging process and specialized materials contribute to its balanced price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:05:19.811595+00:00",
    "aiReviewedAt": "2026-07-22T20:05:19.811595+00:00",
    "aiReviewVersion": 1
  },
  "midlands_industrial_brew": {
    "id": "midlands_industrial_brew",
    "name": "The Forge Brew of Aegis Command",
    "description": "The Forge Brew of Aegis Command is a dark, bubbling elixir drawn directly from the heart of the Iron Legion’s central furnace. Its fiery essence grants you a surge of strength and resilience, perfect for withstanding the heat of battle or holding your ground against overwhelming odds. Sip this brew during intense combat, and you'll feel its power surge through your veins, bolstering your defenses against fire damage and granting you an unexpected steam blast on every strike.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+40% Strength",
      "Resistance to Fire Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bolstering Strength",
        "rules": "Consume the elixir as a bonus action, gaining +40% to your Strength score for 30 seconds. This effect is instantaneous and does not require concentration."
      },
      {
        "title": "Fire Resistance",
        "rules": "While under the effects of this brew, you have resistance to fire damage until the start of your next turn after consuming it. There's no limit on how often you can consume this brew within a day."
      }
    ],
    "levelRequirementReason": "The elixir is potent enough that even low-level heroes can benefit from its effects, but its fiery essence requires the drinker to be of at least first level.",
    "vendorReason": "Midlands, a stronghold of industrial prowess, is known for its mastery over fire and metal, making it fitting for the distribution of this elixir.",
    "shippingDetail": "The Void Drifter Relay delivers shipments with unparalleled speed, ensuring that the Forge Brew reaches eager hands without delay.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds",
      "endsWhen": "The duration expires or you consume it again within a day.",
      "charges": "Unlimited"
    },
    "priceReason": "The elixir is priced at 1000 XP, reflecting its rare and potent nature drawn from the heart of the Iron Legion’s central furnace.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:05:39.677224+00:00",
    "aiReviewedAt": "2026-07-22T20:05:39.677224+00:00",
    "aiReviewVersion": 1
  },
  "midlands_industrial_gear": {
    "id": "midlands_industrial_gear",
    "name": "Ironclad Moulder Hammer",
    "description": "The Ironclad Moulder Hammer is a formidable tool forged from the heart of the Iron Legions’ workshops. Its blade, made of tempered steel, gleams with resilience, while the grip is carved from ironwood, providing a firm hold even under the harshest conditions. This hammer is not just an instrument of destruction; it is also a symbol of strength and craftsmanship, used to break through reinforced slag walls and forge new steel from scrap. It enhances the skills of its wielder, making them more efficient in their work and combat.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Steelbreaker",
      "Slagforging"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Steelbreaker",
        "rules": "When used to attack targets made of iron or steel, this hammer deals +30% damage. Additionally, when the hammer strikes a slag block, the wielder restores 5% of their maximum hit points."
      },
      {
        "title": "Slagforging",
        "rules": "Increases crafting speed by 20% for items related to iron and steel. This effect is active while holding the hammer in hand."
      }
    ],
    "levelRequirementReason": "The hammer’s craftsmanship requires a basic understanding of its purpose.",
    "vendorReason": "Midlands, known for its industrial prowess, naturally sells this essential tool to miners and blacksmiths.",
    "shippingDetail": "Ships via Boo Spectral Mail; expect delivery within 3 days of purchase.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted or when the hammer is no longer held in hand",
      "charges": "Unlimited"
    },
    "priceReason": "The hammer’s rare materials and specialized craftsmanship justify its fair price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:05:17.780948+00:00",
    "aiReviewedAt": "2026-07-22T20:05:17.780948+00:00",
    "aiReviewVersion": 1
  },
  "midlands_industrial_mechanics": {
    "id": "midlands_industrial_mechanics",
    "name": "Iron Tongue Gear",
    "description": "The Iron Tongue Gear is a rusted cog of ancient origin, forged in the heart of a collapsed steamworks where gears and pistons still whisper the secrets of their past. Its surface gleams with a faint mechanical will that aids the wearer in navigating industrial ruins. When worn, it grants a subtle sense of machinery’s rhythm, enhancing one's ability to dodge traps and deal damage to mechanical foes.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Trap Dodger",
      "Mechanical Strike"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Trap Dodger",
        "rules": "While wearing the Iron Tongue Gear, you gain a +10% chance to successfully avoid industrial traps. This effect is passive and does not require an action."
      },
      {
        "title": "Mechanical Strike",
        "rules": "When you deal damage to a mechanical creature or object with a melee weapon attack, the damage rolls are increased by +20%. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This gear is designed for beginners who need assistance navigating industrial environments.",
    "vendorReason": "Midlands Industrial Mechanics specializes in equipment that helps adventurers survive and thrive in their region's challenging terrain.",
    "shippingDetail": "The gear is shipped via the Void Drifter Relay, known for its reliable and swift deliveries across the realm.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until removed or destroyed.",
      "endsWhen": "The gear is removed or destroyed.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "Crafted from rare materials and ancient techniques, this gear offers significant utility for beginners without overpowering their abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:06:21.711280+00:00",
    "aiReviewedAt": "2026-07-22T20:06:21.711280+00:00",
    "aiReviewVersion": 1
  },
  "midlands_industrial_tinkering_tool": {
    "id": "midlands_industrial_tinkering_tool",
    "name": "Gear of the Iron Fingers",
    "description": "The Gear of the Iron Fingers is a rusted, steam-powered wrench forged from reclaimed war scrap. Its gears hum with mechanical prowess as it grants its wielder uncanny precision in repairing or modifying machinery. Crafted in the Midlands’ industrial heart, this tool ensures that broken machines are mended swiftly and efficiently, reducing the chance of malfunctions by 10% when used. Perfect for engineers and laborers, it is a testament to the region’s ingenuity and resilience.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% repair success",
      "-10% malfunction risk"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Repair",
        "rules": "When used to attempt a repair check, the wielder has a +20% chance of succeeding. The effect is instantaneous and does not consume charges."
      },
      {
        "title": "Reduced Malfunction Risk",
        "rules": "For every successful use in repairing machinery, there is a 10% reduction in the risk of the machine malfunctioning for 1 hour. This effect stacks up to three times per day."
      }
    ],
    "levelRequirementReason": "The Gear requires no specific level as it is designed to assist laborers and engineers who benefit from its unique properties without needing a high proficiency.",
    "vendorReason": "The Midlands is renowned for its industrial prowess, making the vendor an expert in providing tools that enhance mechanical skills.",
    "shippingDetail": "Ships within one week from the Midlands’ industrial heart.",
    "usage": {
      "activation": "Instantaneous use when attempting a repair check.",
      "duration": "Until the next long rest or until the machine is fully repaired.",
      "endsWhen": "The effect ends upon successful completion of a repair task or at the end of a long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide significant mechanical assistance without being overpowered, this tool is priced at 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:05:34.386811+00:00",
    "aiReviewedAt": "2026-07-22T20:05:34.386811+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_blood_amber": {
    "id": "midlands_iron_blood_amber",
    "name": "Iron Blood Amber",
    "description": "The Iron Blood Amber is a molten gem encased in the heart of an ancient war engine, its golden core pulsing with the mechanical devotion of the Iron Legion’s fallen warriors. When worn, it hums softly, infusing the wearer with resilience and granting a subtle yet persistent aura that enhances their resolve in battle. This gem not only heals minor wounds but also subtly disrupts the aim of enemies, making them less precise against you.",
    "price": 1500,
    "icon": "🧪",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Heals Minor Wounds",
      "Disrupts Enemy Aim"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Regenerate Health",
        "rules": "When worn, this gem restores 25% of the wearer's maximum hit points after a short rest. It can be activated once per long rest."
      },
      {
        "title": "Disrupt Aim",
        "rules": "While wearing the Iron Blood Amber, there is a +10% chance that mechanical enemies miss their attacks against the wearer on each attack roll. This effect has no save DC and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "The gem's complex enchantment requires a minimum level of understanding of mechanical constructs.",
    "vendorReason": "Midlands is known for its deep connections with the Iron Legion and their artifacts, making it a prime location to find such a relic.",
    "shippingDetail": "The gem must be shipped via Pipe Express, ensuring safe handling of this delicate artifact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous effect, active until the next long rest.",
      "endsWhen": "Effect ends with a long rest or if removed from the wearer.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The gem’s rarity and unique enchantments justify its moderate price, reflecting its value as both a relic and utility item.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T20:06:21.597768+00:00",
    "aiReviewedAt": "2026-07-22T20:06:21.597768+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_blood_gear": {
    "id": "midlands_iron_blood_gear",
    "name": "Iron Blood Gear",
    "description": "Forged from the molten heart of a fallen Legion forge, Iron Blood Gear is a suit of armor that channels the industrial might of its origin. Its surface gleams with a chilling silver sheen, and when worn, it grants resilience against mechanical shockwaves, turning industrial strikes into mere taps. The wearer's very presence intimidates foes, who find themselves unnerved by an unseen force that whispers of the forge's unforgiving heart.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% resistance to mechanical damage",
      "Intimidating Aura"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "+30% resistance to mechanical damage",
        "rules": "While wearing Iron Blood Gear, you gain a +30% resistance bonus to all saving throws against mechanical damage. This effect persists for the duration of your concentration."
      },
      {
        "title": "Intimidating Aura",
        "rules": "At the start of each combat round, as a free action, you can emit an Intimidating Aura that lasts until the end of your next turn. Any creature within 10 feet of you who can see you must succeed on a DC 14 Wisdom saving throw or become frightened for the duration."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and arcane properties of Iron Blood Gear necessitate a minimum level to wield its full power.",
    "vendorReason": "Midlands, known for their robust industrial forges, are the perfect purveyors of such an artifact forged in the heart of a fallen forge.",
    "shippingDetail": "The armor is shipped via Boo Spectral Mail, ensuring safe and secure delivery, though it may take longer than usual due to its unusual weight.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Concentration (up to 1 hour)",
      "endsWhen": "You lose concentration or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The rare materials and complex enchantments required for its creation justify the moderate price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:06:02.482646+00:00",
    "aiReviewedAt": "2026-07-22T20:06:02.482646+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_blood_helm": {
    "id": "midlands_iron_blood_helm",
    "name": "Iron Blood Helm",
    "description": "The Iron Blood Helm is a molten steel and cursed bone helm forged in the forges of Midland's Ironclad City. Its eerie glow reveals hidden undead in darkened mines, and when struck by a crushing blow, it channels the wearer’s resilience to counterattack with an unseen force. The whispers of the dead that it captures are more than mere echoes; they can be used to cast detect undead as an action.",
    "category": "equipment",
    "price": 5600,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% armor against crushing damage",
      "Detect undead in shadows at will"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Counterattack Resilience",
        "rules": "When the wearer is hit by a melee attack dealing crushing damage, they can use their reaction to deal 1d6 force damage to the attacker. This effect has no cooldown."
      },
      {
        "title": "Detect Undead in Shadows",
        "rules": "The wearer may cast Detect Undead as an action once per short or long rest. The range of this spell is reduced by half due to the helm's design, but it functions perfectly within dark environments."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to wield effectively in combat and handle its mystical properties.",
    "vendorReason": "Midlands is the birthplace of this helm, known for their mastery of dark ironwork and undead lore.",
    "shippingDetail": "Ships via Boo Spectral Mail within one week; delivery may be delayed by unforeseen spectral disturbances.",
    "usage": {
      "activation": "Reaction to counterattack, Action for detect undead",
      "duration": "Instantaneous (counterattack), 10 minutes per short or long rest (detect undead)",
      "endsWhen": "Rest ends when used up; recharge after a short or long rest",
      "charges": "Unlimited (recharge per rest)"
    },
    "priceReason": "The helm's rare materials and mystical properties ensure it remains valuable at this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:06:32.970505+00:00",
    "aiReviewedAt": "2026-07-22T20:06:32.970505+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_blood_ointment": {
    "id": "midlands_iron_blood_ointment",
    "name": "Iron Blood Ointment",
    "description": "Iron Blood Ointment, a viscous ointment tinged with the iron-scented blood of a condemned toad, is applied directly to wounds, accelerating healing and granting temporary resistance to poison and fire damage. When applied, it induces a sneeze reflex in nearby foes, causing them to lose their balance for a moment, disrupting their attacks. The ointment's active properties are a testament to the dark rituals performed by the Midlands' apothecaries, who claim it can be found only through rare and illicit means.",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Healing Acceleration",
      "Poison and Fire Resistance"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Acceleration",
        "rules": "When applied to a wound, the ointment activates as an action, providing +20% healing per second for its duration. The effect ends if the user is incapacitated or the ointment is removed."
      },
      {
        "title": "Poison and Fire Resistance",
        "rules": "For the duration of 1 minute while the ointment is active, the user gains 20% resistance to poison and fire damage. This effect ends if the user takes a long rest or is incapacitated."
      }
    ],
    "levelRequirementReason": "The ointment's potency requires only basic magical knowledge for application.",
    "vendorReason": "The Midlands' apothecaries are known for their dark and potent remedies, making this product a staple of their offerings.",
    "shippingDetail": "Ships via Boo Spectral Mail; expect delivery within 3 days if unopened, longer if custom-applied.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per application",
      "endsWhen": "User is incapacitated or the ointment is removed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rare ingredients and dark rituals required for its creation justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:06:29.138958+00:00",
    "aiReviewedAt": "2026-07-22T20:06:29.138958+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_blood_torch": {
    "id": "midlands_iron_blood_torch",
    "name": "Iron Blood Torch",
    "description": "The Iron Blood Torch is a fearsome weapon of labor, forged from the very heart of the Midlands' blacksmiths. Its blade drips molten steel when its wielder is injured, igniting the battlefield with blinding crimson light that rivals the forge fires themselves. This torch is not just a tool; it's an extension of the heavy laborer who wields it, transforming pain into power and turning every strike into a testament to resilience.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Molten Reprisal",
      "Forgeheart Regeneration"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Molten Reprisal",
        "rules": "When the wielder takes damage, the Iron Blood Torch drips molten steel. This causes the wielder to deal an additional 50 fire damage to all creatures within a 10-foot radius of them at the start of their next turn. The damage increases by +2d6 for every 10 points of damage taken by the wielder before this effect triggers."
      },
      {
        "title": "Forgeheart Regeneration",
        "rules": "While lit, the Iron Blood Torch grants the wielder a +5 bonus to AC and a +2 bonus to Strength. Additionally, it regenerates 10 hit points at the start of each of their turns. This effect ends if the wielder is incapacitated or if they extinguish the torch."
      }
    ],
    "levelRequirementReason": "The Iron Blood Torch requires a minimum level of 3 to use effectively, given its physical demands and the need for experience in handling such powerful tools.",
    "vendorReason": "The Midlands are renowned for their blacksmiths who craft the most resilient and powerful weapons, making this torch a natural addition to their inventory.",
    "shippingDetail": "Delivered via a Rakasha Spirit Walk, ensuring swift and safe transport of the weapon to its destination.",
    "usage": {
      "activation": "Instantaneous upon taking damage; ends if extinguished or the wielder is incapacitated.",
      "duration": "Until the torch is extinguished or the wielder is incapacitated.",
      "endsWhen": "Extinguishing the torch or becoming incapacitated.",
      "charges": "Unlimited, recharged by the forge at the end of each long rest."
    },
    "priceReason": "The balanced XP price reflects its powerful effects and the unique forging process that makes it a rare commodity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:00:18.906528+00:00",
    "aiReviewedAt": "2026-07-22T22:00:18.906528+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_blood_vial": {
    "id": "midlands_iron_blood_vial",
    "name": "Iron Blood Vial",
    "description": "The Iron Blood Vial bears the essence of a fallen Iron Legion commander, forged in the fires of battle and tempered by the blood of countless foes. When consumed, it grants the imbiber a surge of strength, doubling their lifting capacity for thirty seconds. The vial also bestows an aura of invulnerability upon nearby allies, reducing incoming damage by 20% for fifteen seconds. This essence is said to harden the heart and resolve of those who carry it into battle.",
    "price": 1500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+2x Strength",
      "Damage Reduction Aura"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Doubled Strength",
        "rules": "Activates on consumption as a bonus action. The imbiber gains +2 to Strength (to a maximum of their original Strength modifier +4) for thirty seconds."
      },
      {
        "title": "Damage Reduction Aura",
        "rules": "Activates on consumption as a bonus action, granting nearby allies a 10% chance to reduce damage taken by 20% for fifteen seconds. The aura lasts until the end of their next turn or until they move more than 30 feet away."
      }
    ],
    "levelRequirementReason": "The vial is potent and requires a seasoned warrior capable of handling its effects.",
    "vendorReason": "Midlands, known for their supply of rare and enchanted items, offers this vial to those seeking the strength of the Iron Legion in battle.",
    "shippingDetail": "Ships via Lakitu Drones, with a delivery time of one week. The package includes a cold pack to preserve its potency.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "30 seconds for strength boost and 15 seconds for the damage reduction aura.",
      "endsWhen": "The effects end when their respective durations expire or upon the user's next turn if they move more than 30 feet away.",
      "charges": "Unlimited, as consuming it does not deplete its charges."
    },
    "priceReason": "Balanced at 1000 XP, this vial provides significant battlefield advantage without being overpowered.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T20:06:52.468582+00:00",
    "aiReviewedAt": "2026-07-22T20:06:52.468582+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_gaze_cloak": {
    "id": "midlands_iron_gaze_cloak",
    "name": "Iron Gaze Cloak of the Silent Legion",
    "description": "The Iron Gaze Cloak of the Silent Legion is a rare relic forged from ancient tomes and imbued with the stern gaze of the Iron Legion's commander. Woven in midnight tones, it whispers secrets through its fabric, granting the wearer a keen eye that pierces through illusions and armor alike. This cloak ensures stealth and tactical superiority on the battlefield by revealing hidden foes or cloaked enemies for a brief moment.",
    "category": "equipment",
    "price": 1500,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Illusion Pierce",
      "Armor Penetration"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illusion Pierce",
        "rules": "When you are targeted by an illusion, you have advantage on your Wisdom (Perception) check to see through it. This effect lasts until the start of your next turn."
      },
      {
        "title": "Armor Penetration",
        "rules": "For one round after donning this cloak, you gain +20 AC against physical attacks. This benefit ends at the end of your next turn."
      }
    ],
    "levelRequirementReason": "The cloak's complex enchantments and ancient crafting require a minimum level to wield effectively.",
    "vendorReason": "Midlands is known for its deep connection with historical artifacts, making it the ideal vendor for this relic.",
    "shippingDetail": "Ships via Koopa Express, a reliable courier that ensures swift delivery of rare and valuable items.",
    "usage": {
      "activation": "Passive effect upon donning the cloak.",
      "duration": "Instantaneous per round (up to two rounds).",
      "endsWhen": "At the end of your next turn after activation.",
      "charges": "Unlimited, but only one benefit can be active at a time."
    },
    "priceReason": "Balanced as the cloak offers significant battlefield advantages without overshadowing other gear options.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T20:06:41.828337+00:00",
    "aiReviewedAt": "2026-07-22T20:06:41.828337+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_gear_core": {
    "id": "midlands_iron_gear_core",
    "name": "Iron Gear Core",
    "description": "The Iron Gear Core hums with the spirit of a bygone era, its gears whispering tales of ancient battles and industrial might. Crafted from the heart of an ironclad war machine, this core amplifies all mechanical devices and grants allies a Cogwork Surge that boosts their movement speed during combat. When engaged in melee, it channels power into a devastating Cogwork Surge, delivering 20% extra damage to mechanical foes within reach.",
    "price": 1500,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% gear efficiency",
      "Allies within 10 feet gain +10% movement speed on their turn"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Cogwork Surge",
        "rules": "Activates when the user strikes a mechanical target. Grants all allies within 10 feet advantage on attack rolls and adds 20% bonus damage to attacks against mechanical targets for one round."
      },
      {
        "title": "Gear Efficiency Boost",
        "rules": "All equipped gear is enhanced by +15%, increasing its effectiveness and durability in battle. This effect lasts until the next long rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 3 to ensure that the user can effectively utilize and maintain its benefits.",
    "vendorReason": "The Midlands are known for their industrial heritage, making them a fitting vendor for this relic of mechanical mastery.",
    "shippingDetail": "Delivered with same-day delivery in the Midlands region; expedited shipping available elsewhere.",
    "usage": {
      "activation": "Activates as an action when struck against a mechanical target.",
      "duration": "One round of combat or until expended, whichever comes first.",
      "endsWhen": "The effect ends if the user is reduced to 0 hit points or if they leave the area within 10 feet.",
      "charges": "Unlimited uses per day; recharges on a long rest."
    },
    "priceReason": "This balanced price reflects the item’s unique combination of utility and combat enhancement, suitable for characters seeking to dominate mechanical battles.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:07:29.120014+00:00",
    "aiReviewedAt": "2026-07-22T20:07:29.120014+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_gear_soul": {
    "id": "midlands_iron_gear_soul",
    "name": "Iron Gear Soul",
    "description": "Forged from the heart of a fallen war machine in the Midlands, this cursed Iron Gear Soul is a mechanical marvel that hums with the power of forgotten engines. When worn, it grants its bearer an intuitive understanding of machinery and a slight boost to combat efficiency at the cost of their soul’s echo. The gear's whispering gears trigger a rare chance for mechanical allies to assist in battle, but it also leaves the wearer vulnerable to magic wards, making them harder to detect by arcane means.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+Combat Efficiency",
      "Mechanical Ally Spawn"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Combat Efficiency Boost",
        "rules": "While wearing this gear, you gain a +10% bonus to your combat efficiency. This effect is passive and does not require activation."
      },
      {
        "title": "Mechanical Ally Spawn",
        "rules": "Once per short rest, when you are within 5 feet of an ally with the mechanical subtype, you can trigger this effect by speaking a command word. A small, temporary mechanical ally appears at your side to assist in combat for 1 minute."
      }
    ],
    "levelRequirementReason": "This gear requires a level 3 character due to its cursed nature and the complexity of its magical enchantments.",
    "vendorReason": "Midlands is renowned for their expertise in ancient machinery, making them the ideal vendor for this unique item.",
    "shippingDetail": "Delivered through a network of underground couriers, ensuring quick and discreet transport to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Instantaneous for triggering the mechanical ally spawn; lasts until the end of your next turn otherwise",
      "endsWhen": "Exhausted after a short rest or destroyed by a successful dispel magic spell",
      "charges": "Unlimited, but requires recharging at dawn on any day you do not wear it"
    },
    "priceReason": "The gear's cursed nature and the complexity of its enchantments justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:06:56.802762+00:00",
    "aiReviewedAt": "2026-07-22T20:06:56.802762+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_gearbox": {
    "id": "midlands_iron_gearbox",
    "name": "Iron Gearbox of the Iron King",
    "description": "The Iron Gearbox of the Iron King is a marvel of clockwork and iron, forged in the heart of the Iron Legion’s central mill where the weight of a thousand men’s labor shaped its gears. Its robust frame shifts with the strength of giants, and only those deemed worthy by their resilience may wield it. With each shift, it amplifies one's stride, allowing you to carry heavy burdens without breaking stride, and when you strike an enemy, there is a chance for their armor to crack under your blow.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Heavy Carry Boost",
      "Armor Shattering Strike"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Heavy Carry Boost",
        "rules": "While carrying heavy items, you have advantage on Strength checks and saving throws. You also gain a +25% increase to your movement speed for the duration of one short rest."
      },
      {
        "title": "Armor Shattering Strike",
        "rules": "When you hit an enemy with a melee weapon attack, there is a 15% chance that their armor breaks, reducing all damage they deal by 2 until the start of your next turn. This effect cannot occur more than once per short rest."
      }
    ],
    "levelRequirementReason": "The Iron Gearbox's intricate gears and robust design require a minimum level to properly wield its full potential.",
    "vendorReason": "Midlands, known for their sturdy craftsmanship, have been entrusted by the Iron Legion to sell this emblem of strength and resilience.",
    "shippingDetail": "Delivered via Pipe Express with a special delivery that ensures the gearbox arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; automatically applies when you start carrying heavy items or make an attack roll against armor.",
      "duration": "Until the end of your next short rest",
      "endsWhen": "The effects expire naturally at the conclusion of a short rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide significant utility without overshadowing other gear, the Iron Gearbox’s price reflects its rarity and practical value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:07:19.543547+00:00",
    "aiReviewedAt": "2026-07-22T20:07:19.543547+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_gearshift": {
    "id": "midlands_iron_gearshift",
    "name": "Iron Gearshift",
    "description": "The Iron Gearshift is a robust, slag steel contrivance that enhances any mechanical construct. Forged in the heart of Midlands' blacksmiths, this gear mechanism boosts machinery efficiency by +10%, ensuring smoother operation and less wear on complex gears. It also significantly reduces blunt impact damage by 20%, safeguarding against the harsh realities of battle or siege. The gear's origin is marked with a distinctive Midlands icon, a symbol that ensures its reliability in the hands of a skilled technician.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% efficiency boost",
      "20% blunt impact damage reduction"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Machinery Efficiency Boost",
        "rules": "The user gains a +10% bonus to the DC of any check related to machinery. This effect is passive and lasts until replaced by another similar item."
      },
      {
        "title": "Blunt Impact Damage Reduction",
        "rules": "When subjected to blunt impact, the user takes 20% less damage from such attacks or events. This effect functions as a reaction but only once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to enhance their mechanical constructs without demanding high-level expertise.",
    "vendorReason": "Midlands is renowned for its craftsmanship and reliability, making the Iron Gearshift a staple in their offerings.",
    "shippingDetail": "Delivered by Pipe Express, known for its punctuality and efficient service within the Midlands region.",
    "usage": {
      "activation": "Passive effect; no activation required. Requires proficiency with mechanics to fully utilize benefits.",
      "duration": "Permanent until replaced or upgraded.",
      "endsWhen": "Destroyed when the mechanical construct it is attached to is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's ability to enhance machinery efficiency and reduce damage, making it a valuable investment for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:07:20.972301+00:00",
    "aiReviewedAt": "2026-07-22T20:07:20.972301+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_golem_arms": {
    "id": "midlands_iron_golem_arms",
    "name": "Iron Golem Arms",
    "description": "The Iron Golem Arms are a pair of heavy, industrial-forged gauntlets imbued with ancient magic. Crafted from enchanted iron and bound with runes of resilience, they grant their wielder unmatched durability and crushing power. Each blow is not just forceful but also designed to shatter armor, as the arms' enchantments increase the chance to break enemy defenses by an impressive 50%. These gauntlets are perfect for siege work or any battle where sheer strength can turn the tide of war.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% melee damage",
      "50% chance to shatter enemy armor on hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crushing Might",
        "rules": "Activation: On a successful melee attack. Duration: Instantaneous. The wearer gains +30% to their melee weapon's damage roll for the attack."
      },
      {
        "title": "Armor Shatterer",
        "rules": "Activation: On a successful melee hit against an enemy wearing armor or shield. Save DC 15. Ends When: After one use per long rest. The wearer has a 50% chance to break the target's armor or shield."
      }
    ],
    "levelRequirementReason": "These gauntlets are designed for those who seek brute strength and durability, making them accessible to lower-level characters.",
    "vendorReason": "The Midlands is known for its strong industrial magic and crafting skills, thus it's fitting that they sell these powerful arms.",
    "shippingDetail": "Ships via Pipe Express within 3 days with a special delivery guarantee.",
    "usage": {
      "activation": "On a successful melee attack or hit against an armor-wearing enemy.",
      "duration": "Instantaneous; ends after one use per long rest.",
      "endsWhen": "After one use per long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rare materials and ancient magic required to craft these formidable gauntlets.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:07:35.990159+00:00",
    "aiReviewedAt": "2026-07-22T20:07:35.990159+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_golem_glove": {
    "id": "midlands_iron_golem_glove",
    "name": "Iron Golem Glove",
    "description": "Forged from the iron heart of a fallen golem, this glove channels its unyielding strength and resilience into the hand that wears it. The metallic core hums with latent power, capable of shattering stone and rending steel with ease. Crafted in the forge pits of Midland's Ironfoundry, each finger seems to flex with an ancient will, lending the wearer the ability to crush siege gates and rend enemy armor without effort.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+300% Strength",
      "Armor Penetration +15%"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortified Strikes",
        "rules": "The glove grants a +2 bonus to Strength checks and Strength saving throws. This effect is active as long as the wearer has at least one charge remaining."
      },
      {
        "title": "Durable Metal",
        "rules": "While wearing this glove, the wearer gains resistance to bludgeoning damage from non-magical attacks. The glove recharges after a short rest."
      }
    ],
    "levelRequirementReason": "The glove's latent power requires no level to wield but grants significant benefits.",
    "vendorReason": "Midland's Ironfoundry is renowned for crafting items from the remains of fallen golems, making this glove a natural addition to their inventory.",
    "shippingDetail": "Shipment may take up to one week due to the fragile nature of the item during transport.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until expended or destroyed.",
      "endsWhen": "The glove is removed from the wearer, recharges after a short rest, or is destroyed.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The glove's rarity and its ability to enhance physical prowess without requiring a level make it a valuable but not overpowered addition to any adventurer’s arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T22:00:22.663247+00:00",
    "aiReviewedAt": "2026-07-22T22:00:22.663247+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_golem_heart": {
    "id": "midlands_iron_golem_heart",
    "name": "Iron Golem Heart",
    "description": "The Iron Golem Heart, a pulsating core of tempered steel and arcane power, was once the beating heart of an ancient warforged guardian. Fused into armor, it enhances resilience against crushing blows and amplifies melee strikes with industrial force. This relic grants the wearer +30% damage against armored foes and a 25% chance to break through their defenses on each successful hit. The heart whispers its battle-scarred history as it regenerates 10% of the wielder's health per second while equipped.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Damage Against Armored Targets",
      "25% Chance To Break Enemy Armor On Hit"
    ],
    "vendor": "midlands",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Strikes",
        "rules": "When a creature with this item in their armor strikes an armored target, they deal an additional +30% damage. This effect has no cooldown and is active as long as the wearer maintains contact with the armor."
      },
      {
        "title": "Armor Shattering",
        "rules": "There is a 25% chance per successful melee strike that this item will cause its target's armor to break, reducing their AC by one for one minute. This effect can be triggered once every three strikes and has no save DC."
      }
    ],
    "levelRequirementReason": "This relic requires minimal magical power to wield but still demands a certain level of experience to understand its full potential.",
    "vendorReason": "The Midlands are renowned for their mastery of ancient relics and mechanical artifacts, making them the ideal purveyors of this golem heart.",
    "shippingDetail": "This item is shipped via Pipe Express with expedited service to ensure it reaches you in optimal condition.",
    "usage": {
      "activation": "Passive upon fusion into armor and remains active until the wearer removes their armor or fuses a new relic.",
      "duration": "Instantaneous, lasting until the wearer no longer has this item fused into their armor.",
      "endsWhen": "The relic is removed from the armor or a new relic is fused in its place.",
      "charges": "Unlimited"
    },
    "priceReason": "This relic strikes a balance by offering significant combat advantages without being overpowered, making it accessible yet valuable.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:08:27.502953+00:00",
    "aiReviewedAt": "2026-07-22T20:08:27.502953+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_golem_mace": {
    "id": "midlands_iron_golem_mace",
    "name": "Iron Golem Mace of the Sundered Forge",
    "description": "The Iron Golem Mace of the Sundered Forge, forged from the molten remains of a once-mighty iron forge that collapsed into ruin, bears the weight of ancient sorcery and relentless forging. Its head is shaped like a half-buried colossus, its surface etched with runes that crackle with latent power. Strike it against armor, and the mace shatters steel as if it were glass, leaving behind a trail of molten slag that scorches the ground in its wake.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shatters Armor",
      "Molten Slag"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shatters Armor",
        "rules": "When you hit an armored target with this mace, it deals an extra 50 points of damage. The armor has a saving throw DC of 16 to negate the effect."
      },
      {
        "title": "Molten Slag",
        "rules": "On a successful hit against an armored target, the mace leaves behind a trail of molten slag that lasts for 1 minute and deals 5d8 fire damage per round to any creature within 5 feet. This effect can only occur once every 24 hours."
      }
    ],
    "levelRequirementReason": "Requires at least level 3 to wield the mace effectively, given its weight and power.",
    "vendorReason": "Midlands is known for their blacksmithing prowess and have access to rare materials and ancient crafting techniques used in this mace's creation.",
    "shippingDetail": "Ships via the Void Drifter Relay, a courier service that can only be trusted with the most valuable cargo due to its reliability.",
    "usage": {
      "activation": "On hit as part of a melee attack action",
      "duration": "Instantaneous",
      "endsWhen": "The effect is used up or when the mace breaks",
      "charges": "Unlimited, but only one molten slag effect can occur per day"
    },
    "priceReason": "Balanced at 1000 XP due to its unique effects and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:08:01.574008+00:00",
    "aiReviewedAt": "2026-07-22T20:08:01.574008+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_hammer_of_murder": {
    "id": "midlands_iron_hammer_of_murder",
    "name": "Iron Hammer of Murder",
    "description": "The Iron Hammer of Murder is a fearsome weapon forged from the molten hearts of fallen foes. Its blade-like head glows with an eerie, red light that signals its deadly intent. The hammer's grip bears the sigil of the Iron Legion and resonates with malevolent energy when used in battle. It delivers devastating blows to mechanical constructs, causing them to shatter into useless scrap within a round of combat.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mechanical Shatter",
      "Heartseeking Strike"
    ],
    "vendor": "midlands",
    "shippedBy": "Ironclad Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mechanical Shatter",
        "rules": "When the Iron Hammer of Murder strikes an enemy, it deals +2 damage to mechanical constructs. Additionally, on a successful hit against such foes, they are reduced to scrap and become inert for one round."
      },
      {
        "title": "Heartseeking Strike",
        "rules": "When used to attack an armored foe, the wielder gains a +1 bonus to their attack roll. This effect is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "The weapon's malevolent energy and intricate forging require a level 5 character to wield.",
    "vendorReason": "The Midlands are known for their blacksmiths, who craft this weapon with dark lore and iron will.",
    "shippingDetail": "Delivered by Ironclad Express, this weapon arrives in pristine condition, ready for battle.",
    "usage": {
      "activation": "On attack",
      "duration": "Instantaneous",
      "endsWhen": "Charges exhausted or weapon destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this hammer is a rare find that offers both power and utility without overbalancing the game.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:07:49.859822+00:00",
    "aiReviewedAt": "2026-07-22T20:07:49.859822+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_hammer_of_the_iron_ward": {
    "id": "midlands_iron_hammer_of_the_iron_ward",
    "name": "Iron Hammer of the Iron Ward",
    "description": "The Iron Hammer of the Iron Ward is a massive, industrial-grade hammer forged from steel that echoes the heartbeat of Midlands’ factories. Its weighty grip and sturdy handle are designed for strength, yet its head cuts through even the toughest siege armor with brutal efficiency. The hammer’s forge-wrought core channels the power of the Iron Legion, making it an indispensable tool in close combat, where its wielder can expect to survive longer thanks to its damage-reducing properties.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Siege Armor Piercer",
      "Stamina Surge"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Siege Armor Piercer",
        "rules": "When used against siege armor, the Iron Hammer of the Iron Ward deals an additional 150% damage. This effect is limited to a maximum of three uses per long rest."
      },
      {
        "title": "Stamina Surge",
        "rules": "While in close combat, the wielder gains a +20% damage reduction and increases their stamina regeneration by 10% per second. This effect lasts for one hour or until the wielder is knocked unconscious or falls asleep."
      }
    ],
    "levelRequirementReason": "The hammer's industrial strength demands at least a fifth-level character to wield.",
    "vendorReason": "Midlands, known for its sturdy craftsmanship and military support, is the most reliable source for such an artifact.",
    "shippingDetail": "This item may take up to three days longer than usual due to its size and weight.",
    "usage": {
      "activation": "Instantaneous action when used in combat",
      "duration": "One hour or until the wielder is knocked unconscious or falls asleep",
      "endsWhen": "The effect ends if the wielder is no longer in close combat, or if they fall unconscious",
      "charges": "Maximum of three uses per long rest"
    },
    "priceReason": "Balanced to reflect its industrial power and unique siege capabilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:08:17.359307+00:00",
    "aiReviewedAt": "2026-07-22T20:08:17.359307+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_heart_belt": {
    "id": "midlands_iron_heart_belt",
    "name": "Iron Heart Belt",
    "description": "The Iron Heart Belt, a relic of the Forgedheart Legion, is a belt forged from blackened steel, its surface etched with the iconic sigil of the legendary legion. This resilient accessory grants resilience against heavy blows and enhances one's grip during laborious tasks. Wearing it is akin to channeling the strength of the Iron Legion itself; its wearer moves with unnatural fortitude, dodging strikes that would otherwise find purchase.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Blunt Resilience",
      "Enhanced Grip"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blunt Resilience",
        "rules": "When you are subjected to a blunt or crushing attack, there is a +20% chance that the attack does not deal damage. This effect can only occur once per short rest."
      },
      {
        "title": "Enhanced Grip",
        "rules": "While wearing this belt during industrial labor, your chance to dodge melee strikes increases by 10%. This effect lasts for one hour after you complete a task."
      }
    ],
    "levelRequirementReason": "The Iron Heart Belt's resilience can be harnessed even by novice adventurers who have yet to master their combat skills.",
    "vendorReason": "Midlands, renowned for its industrial heritage, is the perfect vendor for this relic of labor and strength.",
    "shippingDetail": "Ships within 3 days via Void Drifter Relay, with a courier delivery slip included in every package.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Instantaneous; lasts until the start of your next turn after completing an industrial task or dodging a melee strike.",
      "endsWhen": "At the end of each short rest, this effect ends and cannot be used again until then.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rare material and historical significance as a relic of the Forgedheart Legion.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:08:31.587967+00:00",
    "aiReviewedAt": "2026-07-22T20:08:31.587967+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_heart_ironclad": {
    "id": "midlands_iron_heart_ironclad",
    "name": "Iron Heart Ironclad",
    "description": "The Iron Heart Ironclad is a forged steel gauntlet, its surface etched with runes of the Iron Legion's unyielding will. This battle-worn relic channels the strength of countless warriors who have faced crushing blows and emerged victorious. When wielded, it amplifies your strikes by +30% force, ensuring every blow lands with devastating power. For 10 seconds, you gain immunity to crushing damage, giving you time to recover from relentless assaults.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% melee damage",
      "Immunity to crushing damage for 10 seconds"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Amplified Strikes",
        "rules": "When you make a melee attack with a heavy weapon, the attack deals +30% extra damage. This effect lasts until your next short or long rest."
      },
      {
        "title": "Crushing Immunity",
        "rules": "For 10 seconds after activation, you are immune to all sources of crushing damage. If this immunity is removed by an effect that ends the duration before its time expires, it reverts to the original source of damage."
      }
    ],
    "levelRequirementReason": "The Iron Heart Ironclad requires no level, as it is designed for any warrior who needs a reliable shield against crushing attacks.",
    "vendorReason": "Midlands, known for its blacksmiths and armorers, specializes in creating gear that endures the harshest battles, making this gauntlet a staple among their offerings.",
    "shippingDetail": "The drones deliver with precision, ensuring the gauntlet arrives within days of purchase, ready for immediate use on the battlefield.",
    "usage": {
      "activation": "As an action",
      "duration": "10 seconds",
      "endsWhen": "The duration ends when you take any damage that is not crushing or at the end of your next turn if no such damage is taken.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the gauntlet's ability to enhance melee attacks and provide crucial protection against crushing damage, making it a sought-after item among warriors.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:08:49.031442+00:00",
    "aiReviewedAt": "2026-07-22T20:08:49.031442+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_heart_pump": {
    "id": "midlands_iron_heart_pump",
    "name": "Iron Heart Pump",
    "description": "The Iron Heart Pump is a mechanical marvel, forged from slag and tempered steel in the Forges of the Iron Legion. This wearable device synchronizes its rhythmic pulse with the user’s heartbeat, offering resilience against fatigue. Its sturdy gears and polished alloy casing give it a presence that commands respect among laborers and craftsmen alike. While active, this heart not only regenerates health but also bolsters armor, making the wearer less susceptible to harm during combat.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regenerates Health",
      "Enhances Armor"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail - known for delivering with a swift and reliable reputation",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Regeneration",
        "rules": "While active, the Iron Heart Pump regenerates 10% of the user's hit points per second. This effect is passive and requires no action to activate. It ends when the item is removed or destroyed."
      },
      {
        "title": "Armor Enhancement",
        "rules": "The wearer gains a +2 bonus to their AC while in combat. This enhancement persists until the end of each long rest, after which it resets."
      }
    ],
    "levelRequirementReason": "This item is designed for common laborers and novice adventurers who require resilience and basic protection.",
    "vendorReason": "The Midlands are renowned for their craftsmanship and the Iron Legion's legacy of forging durable, functional equipment.",
    "shippingDetail": "Items are delivered within two days via Boo Spectral Mail’s express service.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active until removed or destroyed.",
      "endsWhen": "Removal or destruction of the item.",
      "charges": "Unlimited, regenerates with rest."
    },
    "priceReason": "The balanced XP price reflects its rarity and functional benefits to laborers and adventurers alike.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:09:40.667859+00:00",
    "aiReviewedAt": "2026-07-22T20:09:40.667859+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_herald_of_the_siege": {
    "id": "midlands_iron_herald_of_the_siege",
    "name": "Iron Herald of the Siege",
    "description": "The Iron Herald of the Siege is a massive bell crafted from the bones of an ancient siege tower. Its deep, resonant chime can be heard for miles and echoes the Iron Legion's fearsome war cry. Upon ringing, it summons three battle-hardened legionaries to your aid, their blades gleaming with untold battles. All allies within earshot gain a +10% bonus to attack speed for 30 seconds, and enemies suffer a -20% penalty to defense within 300 yards for the same duration.",
    "price": 1500,
    "icon": "🏰",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Summons Reinforcements",
      "Boosts Ally Attack Speed"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Iron Legion",
        "rules": "When activated as an action, this bell summons three Iron Legion soldiers to your aid. They remain visible and active for 30 seconds. The effect ends if the bell is destroyed or if a creature within 10 feet of you uses a move action."
      },
      {
        "title": "Ally Attack Speed Boost",
        "rules": "Allies within earshot (500 yards) gain a +10% bonus to attack speed for 30 seconds. The effect ends if the bell is destroyed or if an ally moves more than 30 feet away from the sound of its chime."
      }
    ],
    "levelRequirementReason": "This item can be used by adventurers early in their journey to bolster their combat capabilities.",
    "vendorReason": "The Midlands are known for their strong ties with the Iron Legion, thus this vendor stocks items related to their legacy.",
    "shippingDetail": "Delivery can take up to a week due to the item's bulk and the need for special handling.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "The bell is destroyed or an ally moves more than 30 feet away from it.",
      "charges": "Unlimited, but can only be used once per battle."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rarity and its significant battlefield advantage.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:08:44.482020+00:00",
    "aiReviewedAt": "2026-07-22T20:08:44.482020+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_banner": {
    "id": "midlands_iron_legion_banner",
    "name": "Iron Legion Banner",
    "description": "The Iron Legion Banner is a battle-standard woven with iron threads and emblazoned with the forgeborn sigil. Unfurl it in battle, and allies within five meters are enveloped in a shimmering aura of steel and fire. The banner’s invulnerability grants them three seconds of unyielding protection against harm, while also increasing their damage output by 15% against foes armored in iron or steel. A symbol of the Legion's indomitable spirit, it is a testament to the unbreakable will forged in the heart of the forge.",
    "price": 6000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Invulnerability Aura",
      "Enhanced Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Invulnerability Aura",
        "rules": "When activated, the banner grants temporary invulnerability to allies within a five-meter radius for three seconds. This effect has no save DC and does not expend charges; it ends when the duration expires or when the banner is sheathed."
      },
      {
        "title": "Enhanced Damage",
        "rules": "Allies within a five-meter radius of the banner deal an additional 15% damage to enemies armored in iron or steel. This bonus lasts for the duration of the banner's active state and does not require concentration; it ends when the banner is sheathed."
      }
    ],
    "levelRequirementReason": "The Iron Legion Banner requires a minimum level of 3 to wield, ensuring that only those who have proven their worth in combat can use its power.",
    "vendorReason": "Midlands is renowned for its martial prowess and has long been associated with the Forgeborn. They are the custodians of such powerful relics.",
    "shippingDetail": "The banner must be shipped via the Void Drifter Relay due to its fragile nature, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Reaction",
      "duration": "3 seconds",
      "endsWhen": "Duration expires or when the banner is sheathed",
      "charges": "Unlimited"
    },
    "priceReason": "The Iron Legion Banner's balanced price reflects its rarity and utility in combat, making it a sought-after but not overpowered addition to any adventurer’s arsenal.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:08:46.679017+00:00",
    "aiReviewedAt": "2026-07-22T20:08:46.679017+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_blood_mech": {
    "id": "midlands_iron_legion_blood_mech",
    "name": "Iron Legion Blood Mech",
    "description": "The Iron Legion Blood Mech is a cursed automaton forged from the unyielding will of fallen soldiers. Its gears hum with the iron resolve of its creators, delivering devastating strikes that crush foes beneath its weight. However, each strike drains vitality, leaving the bearer fatigued and vulnerable. This relic was crafted by Liberated Toads, who sought to channel the indomitable spirit of their kin into a weapon of unyielding force.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+2000 damage to melee attacks",
      "-50 stamina per turn"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Blood Forge",
        "rules": "On the first attack, the Blood Mech deals double damage (4000 damage) and grants a +1 bonus to all subsequent attacks until exhaustion. This effect ends if the user drops the item or is incapacitated."
      },
      {
        "title": "Vitality Drain",
        "rules": "At the start of each turn, the bearer loses 50 stamina. This effect can be mitigated by resting for at least one hour. If the bearer's stamina reaches zero, they are exhausted until they rest for a full day."
      }
    ],
    "levelRequirementReason": "The Iron Legion Blood Mech requires significant strength and discipline to wield effectively without succumbing to its draining effects.",
    "vendorReason": "Midlands, known for their expertise in ancient artifacts and relics, can offer this powerful yet perilous weapon.",
    "shippingDetail": "The item is delivered with a protective charm that ensures it arrives undisturbed, but the bearer must be wary of the Mech's draining effects during transit.",
    "usage": {
      "activation": "Instantaneous activation upon use; no additional actions required.",
      "duration": "Until exhaustion or incapacitation",
      "endsWhen": "If the user drops the item or is incapacitated",
      "charges": "Unlimited, but stamina loss continues"
    },
    "priceReason": "The Iron Legion Blood Mech offers a significant increase in melee damage, making it a valuable yet risky asset for players.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:09:00.945899+00:00",
    "aiReviewedAt": "2026-07-22T20:09:00.945899+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_crank": {
    "id": "midlands_iron_legion_crank",
    "name": "Iron Legion Crank",
    "description": "The Iron Legion Crank is a rugged, steam-driven mechanism forged from the iron veins of the Iron Legion’s factories. It was salvaged from Admiral Bloopers’ war machines, once used to power their ink-jamming monstrosities. Its industrial design hints at both raw strength and the possibility of catastrophic failure if overused. With each turn, it grants mechanical prowess and unlocks hidden mechanisms, yet it comes with a warning: prolonged use can cause a fiery backlash.",
    "category": "equipment",
    "price": 330,
    "icon": "⚙",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Mechanical Mastery",
      "Unlocking Mechanisms"
    ],
    "vendor": "midlands",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mechanical Mastery",
        "rules": "When you activate the crank, you gain +1 to all mechanical and engineering skill checks for 1 hour. This benefit is cumulative with similar abilities from other sources."
      },
      {
        "title": "Unlocking Mechanisms",
        "rules": "You can use the crank to unlock doors or mechanisms that require 5 or more locking mechanisms, dealing no damage but expending one charge of the item."
      }
    ],
    "levelRequirementReason": "This cranks' mechanical abilities are accessible to all adventurers, not requiring a specific class.",
    "vendorReason": "Midlands is known for its robust and practical gear, making the Iron Legion Crank an ideal addition to their inventory.",
    "shippingDetail": "Due to its bulkiness, it will be shipped with special padding to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until the item is destroyed",
      "endsWhen": "The item runs out of charges, which recharge after a long rest",
      "charges": "5 uses"
    },
    "priceReason": "Balanced at this price to reflect its rare and mechanically powerful nature.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T20:09:00.848392+00:00",
    "aiReviewedAt": "2026-07-22T20:09:00.848392+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_essence": {
    "id": "midlands_iron_legion_essence",
    "name": "Legion Heart Essence",
    "description": "A vial of dark, shimmering essence, it pulses with the residual will of a fallen Iron Legion soldier who died in service to the forge. When activated, this heart essence grants the wielder an unyielding defense against mechanical damage and imbues them with the ironclad resolve that defines the legion’s warriors. The vial's resonance with the Legion's machinery is palpable, creating a haunting hum that can disrupt foes, slowing their movements by 10% for five seconds upon contact.",
    "price": 1500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +20 AC against mechanical attacks",
      "Enemies within range apply “Iron Resolve” debuff"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Defense",
        "rules": "Activates as a bonus action. Grants +20 to AC against all sources of mechanical damage until the start of your next turn. This effect can be used once per short or long rest."
      },
      {
        "title": "Iron Resolve",
        "rules": "Enemies within 5 feet must make a DC 14 Strength saving throw or become slowed by 10% movement speed for 5 seconds. This effect can be activated up to three times per day."
      }
    ],
    "levelRequirementReason": "Requires at least level 6 to wield due to the essence's potent and focused power.",
    "vendorReason": "The Midlands vendor, known for their deep connections with Iron Legion veterans, sells this rare essence as a tribute to fallen soldiers.",
    "shippingDetail": "Ships via airmail, delivering within three days.",
    "usage": {
      "activation": "Bonus action or reaction (as an opportunity attack)",
      "duration": "Instantaneous effect; duration of the bonus action or reaction",
      "endsWhen": "Effect ends when the creature takes damage or at the start of your next turn after activation",
      "charges": "Recharges daily"
    },
    "priceReason": "The essence's rarity and potent effects justify its price, offering significant battlefield advantages.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T20:09:32.663772+00:00",
    "aiReviewedAt": "2026-07-22T20:09:32.663772+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_gear": {
    "id": "midlands_iron_legion_gear",
    "name": "Ironclad Anvil Helm",
    "description": "The Ironclad Anvil Helm is a formidable helmet forged from the very heart of Onyx Hand's industrial might, its hammer and anvil shape echoing the clangorous power of their blacksmiths. This helm not only grants resilience against blunt force but also hums with latent heat, reflecting the relentless forgefire that tempered it. When in combat, the wearer feels a surge of vitality, regenerating wounds as if they were part of the unyielding anvil itself.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% Armor Against Blunt Force",
      "Melee Strikes Deal +5% Bonus Damage"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Blunt Force Resistance",
        "rules": "When you take damage from a melee attack with a blunt weapon, the helm reduces the amount of damage by an additional 10%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Bonus Melee Damage",
        "rules": "On each successful melee strike, there is a +5% chance to deal bonus damage. This chance resets after every failed attack."
      }
    ],
    "levelRequirementReason": "The complex forging and enchantment required to create this helm make it suitable only for seasoned warriors.",
    "vendorReason": "Midlands is known for its strong ties with the Onyx Hand guild, ensuring they have access to exclusive goods like the Ironclad Anvil Helm.",
    "shippingDetail": "Due to its heavy weight and fragile nature, this helm requires special handling. It may take an additional day for delivery.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous on damage from blunt attacks; resets after each failed attack.",
      "endsWhen": "The start of your next turn or when the helm is removed from combat.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare materials and specialized crafting required to produce this helm justify its price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:09:56.033589+00:00",
    "aiReviewedAt": "2026-07-22T20:09:56.033589+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_gear_tome": {
    "id": "midlands_iron_legion_gear_tome",
    "name": "Iron Legion Gear Tome",
    "description": "The Iron Legion Gear Tome is a cursed ledger forged from iron and steel, its pages etched with forgotten runes of the Iron Legion. Reading it allows you to command the machinery’s gears and pistons for a brief time, granting you temporary control over its ancient mechanisms. The tome's power can summon a spectral gear-soldier to assist in non-combat tasks or repairs, but only for a short duration.",
    "price": 330,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+15% critical hit chance on mechanical enemies",
      "Grants 'Iron Legion Command' buff"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Iron Legion Command",
        "rules": "When you read the tome, it grants you a +2 bonus to Dexterity (Stealth) checks and a temporary increase in Charisma for 10 minutes. This effect can be used once per long rest."
      },
      {
        "title": "Mechanical Mastery",
        "rules": "For 1 minute after reading the tome, you have advantage on attack rolls against mechanical enemies and can deal an additional 5 bonus damage to such targets. This effect is usable three times per short or long rest."
      }
    ],
    "levelRequirementReason": "The tome requires a higher level for access due to its complex magical properties and the risk of summoning.",
    "vendorReason": "Midlands, as a hub for ancient machinery and relics, houses this cursed ledger among their rare wares.",
    "shippingDetail": "The tome is delivered discreetly by the Shy Guy Smugglers, ensuring its arrival without drawing unwanted attention.",
    "usage": {
      "activation": "Reading the tome for 1 minute to activate the effects.",
      "duration": "Each effect lasts until expended or interrupted.",
      "endsWhen": "The effects end when you finish a short rest, are incapacitated, or use them again.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The tome's price reflects its rarity and the risk involved in handling cursed items of ancient origin.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T20:09:16.487861+00:00",
    "aiReviewedAt": "2026-07-22T20:09:16.487861+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_glove": {
    "id": "midlands_iron_legion_glove",
    "name": "Gauntlet of the Iron Hand",
    "description": "The Gauntlet of the Iron Hand is a pair of heavy, forged gauntlets that once belonged to the legendary Legionnaire. Their iron cores are said to be tempered by the very heart of their forges, and they radiate an aura of unyielding strength. When worn, these gauntlets grant the wielder a +40% strength bonus, making them nearly unstoppable in battle. Additionally, their chilling aura can reduce enemy morale by 20%, turning the tide against foes who underestimate your resolve.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Strength Boost",
      "Morale Suppression"
    ],
    "vendor": "midlands",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Activation: At the start of your turn. Duration: Instantaneous. This effect grants you a +40% bonus to Strength (Athletics) checks and damage rolls until the end of your next turn."
      },
      {
        "title": "Morale Suppression",
        "rules": "Activation: When you hit an enemy with a melee attack while wearing these gauntlets. Duration: 10 seconds per use. This reduces the morale of all enemies within 30 feet by 20%, causing them to falter and lose initiative for that duration."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 5 due to its complex enchantments and the strength it demands from its wielder.",
    "vendorReason": "The Midlands are renowned for their strongholds and fortresses, making them the perfect place to find such an artifact designed for siege roles.",
    "shippingDetail": "Ships via Koopa Express Couriers; expect a two-day delivery within the region.",
    "usage": {
      "activation": "Reaction (to hit an enemy with a melee attack)",
      "duration": "10 seconds per use",
      "endsWhen": "The duration ends when you take another action or reaction, or if you are incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's significant power boost in both melee combat and morale suppression without being overpowered.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:09:30.161326+00:00",
    "aiReviewedAt": "2026-07-22T20:09:30.161326+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_hammer": {
    "id": "midlands_iron_legion_hammer",
    "name": "Iron Legion Hammer",
    "description": "The Iron Legion Hammer is a colossal maul forged from the ancient gears and pistons of a war machine, its body lined with rusted metal that still hums with latent energy. This weapon's design ensures it can break through steel defenses while simultaneously powering nearby machinery, turning the battlefield into a chaotic symphony of motion. Swinging this hammer near mechanical constructs amplifies their power for 5 seconds post-impact, making them more efficient and formidable in combat.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Machinery Power Surge",
      "Steel-Breaking Might"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Machinery Power Surge",
        "rules": "When you hit a target with this weapon within 30 feet of a mechanical construct, the construct gains temporary hit points equal to your proficiency bonus x4 and becomes active for 5 seconds. This effect ends if the construct is destroyed or if its power source deactivates."
      },
      {
        "title": "Steel-Breaking Might",
        "rules": "While wielding this weapon, you have advantage on Strength (Athletics) checks to break objects. Additionally, it deals an extra 10% damage to targets with metal armor. This effect ends when the weapon is sheathed or if your proficiency bonus changes."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively due to its heavy weight and complex design.",
    "vendorReason": "Midlands forgehouses are renowned for their expertise in repurposing ancient machinery, making them a fitting vendor for this relic.",
    "shippingDetail": "Due to its size and weight, the hammer must be shipped via the Void Drifter Relay, ensuring safe transport but adding an additional week to delivery time.",
    "usage": {
      "activation": "Melee Weapon Attack",
      "duration": "Instantaneous (Effect lasts 5 seconds post-impact)",
      "endsWhen": "The effect ends if the construct is destroyed or its power source deactivates, or when you sheathe the weapon. The hammer can only be used once per short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it offers unique battlefield control and damage bonuses without overshadowing other weapons.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T20:10:00.354308+00:00",
    "aiReviewedAt": "2026-07-22T20:10:00.354308+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_tome": {
    "id": "midlands_iron_legion_tome",
    "name": "Iron Legion Tome",
    "description": "The Iron Legion Tome is a grimoire bound in cold, gleaming steel, its pages soaked in blood from forgotten battles. This ancient tome holds the secrets of the once-mighty mechanical war machines of the Iron Legion, granting you the power to command these constructs and unlock their arcane weaponry. The pages whisper of lost legacies, and those who read it may summon a mechanical beast to aid them for 30 seconds or enhance their attacks against mechanical foes by +10%. This forgotten knowledge is not without cost, as each use reveals hidden mechanisms on your target.",
    "price": 1500,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "SUMMON MECHANICAL BEAST",
      "MECHANICAL DAMAGE BOOST"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summon Mechanical Beast",
        "rules": "As an action, you can command the tome to summon a mechanical beast construct. This construct assists you for 30 seconds before fading away. You have disadvantage on this ability if your hit point total is less than half of its maximum."
      },
      {
        "title": "Mechanical Damage Boost",
        "rules": "For every successful attack against a mechanical target, you gain +10% damage until the end of your next short or long rest. This effect can be applied multiple times but stacks up to +50%, after which it no longer increases."
      }
    ],
    "levelRequirementReason": "The tome's ancient knowledge requires a certain understanding of both arcane and mechanical principles.",
    "vendorReason": "Midlands, with its deep connection to the history of war machines, is a fitting vendor for this relic.",
    "shippingDetail": "The tome must be shipped via Boo Spectral Mail due to its fragile and dangerous nature. Delivery may take longer than usual.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds or until the end of your next short or long rest, whichever comes first",
      "endsWhen": "The construct fades away after 30 seconds or if you are incapacitated or die",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the tome's price reflects its rarity and the unique abilities it grants.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:10:13.874076+00:00",
    "aiReviewedAt": "2026-07-22T20:10:13.874076+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_legion_tunic": {
    "id": "midlands_iron_legion_tunic",
    "name": "The Blooded Banner Tunic",
    "description": "The Blooded Banner Tunic, crafted from scavenged steel plates and remnants of fallen Iron Legion banners, whispers tales of valor in its weave. This elite armor not only grants the wearer heavy protection but also imbues them with a rallying presence that boosts morale when comrades stand nearby. Each time an ally is struck while close by, there's a chance for a Banner Rally—a fleeting resurgence of vitality that can save a fallen comrade.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% Armor",
      "Rallying Morale"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Banner Rally",
        "rules": "When an ally within 10 feet is reduced to 0 hit points, you can use your reaction to trigger a Banner Rally. This allows the nearest ally with at least one hit point to regain 2d8 + 5 temporary hit points. The effect ends if you are incapacitated or die."
      },
      {
        "title": "Rallying Morale",
        "rules": "For every 4 allies within 30 feet, the tunic grants a +1 bonus to saving throws against fear and charm effects for you and them until the start of your next turn. This effect is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Blooded Banner Tunic requires fifth level to ensure its wearer can benefit fully from both its defensive capabilities and morale-boosting effects.",
    "vendorReason": "The Midlands have long been the heart of Iron Legion supply, so it's fitting that they offer this relic of valor.",
    "shippingDetail": "Ships via the ethereal Rakasha Spirit Walk, known for its swift and secure deliveries.",
    "usage": {
      "activation": "Passive effect with reactions available when an ally is reduced to 0 hit points.",
      "duration": "Until start of next turn or until you are incapacitated or die.",
      "endsWhen": "If you die, the effect ends immediately.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and imbued with ancient lore, this tunic justifies its price through its unique defensive and morale-boosting abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:10:09.274046+00:00",
    "aiReviewedAt": "2026-07-22T20:10:09.274046+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_mantle": {
    "id": "midlands_iron_mantle",
    "name": "Legion’s Mantle of the Unbroken",
    "description": "The Legion’s Mantle of the Unbroken is a heavy, iron-infused cloak forged by the legendary blacksmiths of Ironhold. Crafted from the very bones of fallen Legion soldiers, it grants its wearer a fleeting invulnerability that defies all but the most determined foes. Wear this mantle and feel the weight of countless battles; its essence whispers the resilience of those who have faced the Legion's wrath head-on.",
    "category": "equipment",
    "price": 6000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Elemental Invulnerability",
      "Enhanced Vitality"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Elemental Invulnerability",
        "rules": "Activates as a bonus action. The wearer gains temporary invulnerability to all elemental damage for 15 seconds. This effect does not stack with other forms of invulnerability and ends if the wearer takes any non-elemental damage."
      },
      {
        "title": "Enhanced Vitality",
        "rules": "Passive effect. Restores 5% hit points per second while active, stacking with natural healing but not exceeding half maximum hit points in a single day."
      }
    ],
    "levelRequirementReason": "Only those who have faced the Legion's wrath and proven their mettle should wear this mantle.",
    "vendorReason": "The Midlands forgehouses are trusted by heroes to supply them with the most potent of armaments, including this iconic piece of armor.",
    "shippingDetail": "Ships via Lakitu Drones, known for their reliability and speed in delivering even the heaviest items.",
    "usage": {
      "activation": "Bonus action to activate; instantaneous effect.",
      "duration": "15 seconds per use.",
      "endsWhen": "Exhausts after 15 seconds or if the wearer takes non-elemental damage.",
      "charges": "Unlimited, but only one charge can be active at a time."
    },
    "priceReason": "The mantle's rarity and its potent effects justify this price, which reflects the cost of materials and craftsmanship.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T20:10:22.909309+00:00",
    "aiReviewedAt": "2026-07-22T20:10:22.909309+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_scarab": {
    "id": "midlands_iron_scarab",
    "name": "Scarab of the Iron God",
    "description": "The Scarab of the Iron God is a polished obsidian beetle inlaid with molten steel, said to have been crafted by the last master of the Iron God’s workshop. This relic imbues its wearer with an ironclad resolve, granting them resistance to fear and intimidation, while also ensuring that after every three turns in combat, they are restored 10% of their maximum hit points. The scarab's presence is both a symbol of strength and a talisman against the whims of fate.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ironclad Resolve",
      "Combat Restorer"
    ],
    "vendor": "midlands",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ironclad Resolve",
        "rules": "The wearer gains resistance to being frightened and charmed. This effect lasts until the end of their next turn after they are no longer in a state of fear or intimidation."
      },
      {
        "title": "Combat Restorer",
        "rules": "At the start of each combat round, the wearer regains 10% of their maximum hit points. This effect does not stack with other healing abilities and is limited to once per turn."
      }
    ],
    "levelRequirementReason": "The item's power is balanced for a level 1 character who can benefit from its effects without being overpowered.",
    "vendorReason": "Midlands has a long-standing reputation for preserving ancient artifacts, making the Scarab of the Iron God a fitting addition to their inventory.",
    "shippingDetail": "The scarab is carefully packed in a reinforced crate and delivered within three days by Lakitu Drones.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Lasts until the end of combat",
      "endsWhen": "Combat ends",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique properties, including resistance to fear and intimidation as well as hit point restoration, justify its fair value.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:10:28.773119+00:00",
    "aiReviewedAt": "2026-07-22T20:10:28.773119+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul": {
    "id": "midlands_iron_soul",
    "name": "Iron Soul of the Unyielding Forge",
    "description": "The Iron Soul of the Unyielding Forge is a soul-steel amulet forged in the heart of a volcanic forge. Its molten core resonates with the strength and resilience of those who labor under its flames, granting unwavering resolve to the oppressed while smothering arrogance in its fiery embrace. This amulet not only heals its wearer's wounds at an accelerated rate but also offers unyielding defense against fire-based attacks, turning the heat of battle into a shield of strength.",
    "price": 330,
    "icon": "📦",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "+15% HP regeneration per minute",
      "Fire resistance +20"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "HP Regeneration",
        "rules": "The wearer regenerates an additional 15% health points per minute. This effect is passive and lasts until the amulet is removed or destroyed."
      },
      {
        "title": "Fire Resistance",
        "rules": "The wearer gains fire resistance of +20, reducing all incoming fire damage by that amount. This effect persists as long as the amulet remains in place and does not require a saving throw to maintain."
      }
    ],
    "levelRequirementReason": "This amulet is designed for adventurers who are just beginning their journey but have already demonstrated resilience.",
    "vendorReason": "The Iron Soul's origins in the Midlands ensure its authenticity and power, making it a trusted item from one of the most respected vendors.",
    "shippingDetail": "The amulet is discreetly delivered by Shy Guy Smugglers using their secret routes to ensure safe arrival.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Permanent until removed or destroyed",
      "endsWhen": "Amulet removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the amulet's moderate rarity and the unique combination of its passive healing and fire resistance.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T20:10:22.814799+00:00",
    "aiReviewedAt": "2026-07-22T20:10:22.814799+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul_amulet": {
    "id": "midlands_iron_soul_amulet",
    "name": "Iron Soul Amulet",
    "description": "The Iron Soul Amulet is a dark, sturdy piece of jewelry shaped like a hammer and anvil. Crafted from iron that once belonged to the legendary Blacksmiths of Midland, this amulet channels their unyielding will. It protects its wearer against political manipulation by the manor’s elite and regenerates armor when worn in iron-rich environments. When surrounded by traitors, it grants a powerful shield that can turn the tide of battle.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Political Shield",
      "Iron Regeneration"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Political Shield",
        "rules": "When the wearer is targeted by a political manipulation spell or effect, they have advantage on saving throws and can attempt an additional saving throw. If successful, they are immune to that manipulation for 1 minute."
      },
      {
        "title": "Iron Regeneration",
        "rules": "For every hour spent in an iron-rich environment (such as near a forge), the wearer regains 5 hit points at the start of their next turn. This effect can be triggered up to three times per day."
      }
    ],
    "levelRequirementReason": "This amulet is designed for quick adaptation and is suitable even for novice adventurers.",
    "vendorReason": "The Midlands are known for their ironwork and the amulets they craft, making this amulet a fitting addition to their offerings.",
    "shippingDetail": "Ships within three days with express delivery service.",
    "usage": {
      "activation": "Passive effect triggered by environment or spell usage.",
      "duration": "Instantaneous for Political Shield; Iron Regeneration lasts until the start of next turn in an iron-rich environment.",
      "endsWhen": "Political Shield ends when the amulet is removed or the manipulation effect ends. Iron Regeneration ends after 3 uses per day.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its crafted materials and specific, yet not overpowered, effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:10:30.972625+00:00",
    "aiReviewedAt": "2026-07-22T20:10:30.972625+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul_belt": {
    "id": "midlands_iron_soul_belt",
    "name": "Iron Soul Belt",
    "description": "The Iron Soul Belt is a heavy, blackened leather belt adorned with intricate runes that hum with industrial might. Crafted from ancient machinery and imbued with the spirit of forges long dormant, it allows its wearer to absorb damage from mechanical attacks and channel that energy into devastating strikes. This relic, forged in the heart of Midland's smoky workshops, grants a +10% chance to avoid damage from machinery while increasing your weapon damage by +5% when you successfully block an attack.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% damage avoidance vs. mechanical attacks",
      "+5% weapon damage on successful block"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Mighty Absorption",
        "rules": "When a mechanical attack hits the wearer, they have advantage on saving throws against that attack's effects until the start of their next turn. Additionally, if the wearer successfully blocks an attack from a mechanical source, they gain a +5 bonus to damage rolls for 1 minute."
      },
      {
        "title": "Industrial Surge",
        "rules": "The wearer gains advantage on Strength (Athletics) checks and saving throws made against conditions caused by machinery. This effect lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level to effectively wield its mechanical abilities.",
    "vendorReason": "Midlands is known for its mastery in crafting items that blend ancient and modern, making the Iron Soul Belt a perfect fit for their inventory.",
    "shippingDetail": "Delivered by Shy Guy Smugglers with expedited service ensuring it arrives intact.",
    "usage": {
      "activation": "Passive effect when worn; activation via successful block of a mechanical attack.",
      "duration": "Mighty Absorption lasts until the start of your next turn, Industrial Surge lasts until the end of your next long rest.",
      "endsWhen": "Exhausted after 24 hours or destroyed if exposed to extreme heat for more than an hour.",
      "charges": "Unlimited; recharges upon completion of a long rest."
    },
    "priceReason": "Balanced price reflecting the belt's unique properties and its rarity within the market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:10:53.635829+00:00",
    "aiReviewedAt": "2026-07-22T20:10:53.635829+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul_cloak": {
    "id": "midlands_iron_soul_cloak",
    "name": "Iron Soul Cloak of the Forgeheart",
    "description": "The Iron Soul Cloak of the Forgeheart is a cloak forged from the bones of ancient war machines and imbued with the essence of forge spirits. Its weave resonates with the steel it protects, absorbing iron-based attacks and reflecting its wearer's steps in the very heart of metal forges. When worn, the cloak grants the wielder an unyielding resilience against siege weaponry and a silent ally that whispers the location of hidden threats.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Iron Absorption",
      "Forge Echo"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Iron Absorption",
        "rules": "The cloak absorbs up to 10 points of damage from each successful iron-based attack. This effect occurs as a reaction and has no cooldown between uses."
      },
      {
        "title": "Forge Echo",
        "rules": "When the wearer steps within a metal forge or area rich in steel, they gain advantage on Perception checks to detect hidden enemies within 30 feet for 1 minute. This ability expires when the wearer leaves the metal-rich zone."
      }
    ],
    "levelRequirementReason": "The cloak's complexity and the power it draws from forge spirits necessitate a minimum level of 7 to wield.",
    "vendorReason": "The Midlands are renowned for their mastery of iron, making them the ideal vendor for this artifact forged in steel.",
    "shippingDetail": "Delivered by spirit courier; arrives within a week, with an additional day if shipping through metal-rich zones.",
    "usage": {
      "activation": "Passive effect activated upon donning the cloak.",
      "duration": "Continuous while worn.",
      "endsWhen": "The cloak is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced by reducing iron absorption to a manageable 10 points per attack and limiting Forge Echo to metal-rich areas, this price reflects the item's significant but not overpowered benefits.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T20:10:50.662941+00:00",
    "aiReviewedAt": "2026-07-22T20:10:50.662941+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul_core": {
    "id": "midlands_iron_soul_core",
    "name": "Iron Soul Core",
    "description": "The Iron Soul Core glows with a steady, metallic pulse, forged from the heart of an ancient steam engine that collapsed beneath the weight of its own might. This relic channels the raw mechanical energy of its origin into your very bones, granting you superhuman strength and resilience in labor or combat. With each swing or block, it amplifies your resolve, making even the heaviest blows seem like whispers of wind.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% Strength Bonus",
      "Crushing Damage Resistance +20%"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mechanical Fortitude",
        "rules": "By activating the core as a bonus action, you gain advantage on saving throws against effects that would impose exhaustion or reduce your hit points. This effect lasts until the end of your next turn."
      },
      {
        "title": "Forged Resolve",
        "rules": "When you use an action to attack with a melee weapon, you have a +10 bonus to your attack roll and damage on that attack. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The core's complexity requires at least fifth-level proficiency in mechanics to properly harness its power.",
    "vendorReason": "Midlands, known for their industrial prowess, are the creators and purveyors of this unique relic.",
    "shippingDetail": "Shipped with special care to ensure the core remains intact during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you take a short rest or long rest, and at the start of each of your turns thereafter until you activate it again.",
      "charges": "Unlimited, but only one use per short or long rest."
    },
    "priceReason": "The core's rare material and unique crafting process justify its moderate price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:11:11.297572+00:00",
    "aiReviewedAt": "2026-07-22T20:11:11.297572+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul_heart": {
    "id": "midlands_iron_soul_heart",
    "name": "Iron Soul Heart",
    "description": "The Iron Soul Heart is a pulsating, metallic core that hums with the relentless rhythm of an industrial heart. Crafted from salvaged factory parts and imbued with the essence of a soul, it beats with a strength that mirrors the resilience of steel. This relic grants its wielder immunity to mechanical traps, ensuring they are never caught by such devices again, and enhances their prowess against machines, dealing +25% damage to all mechanical foes.",
    "category": "equipment",
    "price": 1500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Mechanical Traps",
      "Enhanced Damage Against Machines"
    ],
    "vendor": "midlands",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Immunity to Mechanical Traps",
        "rules": "The wielder gains immunity to traps that are primarily composed of or rely on mechanical components. This includes tripwires, pressure plates, and other such devices."
      },
      {
        "title": "Enhanced Damage Against Machines",
        "rules": "For 1 hour after activation, the wielder deals +25% damage to mechanical creatures and constructs. The effect ends if the wielder drops to 0 hit points or the core is destroyed."
      }
    ],
    "levelRequirementReason": "The Iron Soul Heart requires a minimum level of 6 due to its complexity and the specialized knowledge needed to harness its power.",
    "vendorReason": "Midlands, with their deep ties to industrial magic, are well-equipped to handle such unique artifacts.",
    "shippingDetail": "Delivered via a mysterious package that arrives under the cover of night, ensuring the core reaches its destination without attracting undue attention.",
    "usage": {
      "activation": "Activates as a bonus action. Once per short rest.",
      "duration": "1 hour from activation or until expended in combat.",
      "endsWhen": "The effect ends if the user drops to 0 hit points, is destroyed, or the core runs out of charges (recharges after a long rest).",
      "charges": "One charge; recharges after a long rest."
    },
    "priceReason": "The Iron Soul Heart's rare craftsmanship and unique properties justify its cost in experience points.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T20:11:24.288758+00:00",
    "aiReviewedAt": "2026-07-22T20:11:24.288758+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul_sawblade": {
    "id": "midlands_iron_soul_sawblade",
    "name": "Iron Soul Sawblade",
    "description": "The Iron Soul Sawblade is a serrated blade forged from the soul of a forgotten industrialist. Its teeth are sharp enough to cut through heavy armor with ease, and its edge hums with the dark energy of the lost souls it has claimed. Each swing drains 10% of your hit points, but it also leaves behind a lingering echo that can be heard by creatures within 30 feet for one minute after it is used.",
    "category": "equipment",
    "price": 1500,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Armor Piercing",
      "Soul Drain"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Armor Piercing",
        "rules": "When you hit a target with the Iron Soul Sawblade, you deal an additional 1d6 bonus damage to creatures wearing heavy armor. This effect lasts until the start of your next turn."
      },
      {
        "title": "Soul Drain",
        "rules": "Each time you use the Iron Soul Sawblade, it drains 10% of your maximum hit points as temporary hit points that last for one minute. You can only activate this ability once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively due to the strain on the user's health.",
    "vendorReason": "Midlands, known for their blacksmithing prowess, can craft such a blade that combines industrial might with dark magic.",
    "shippingDetail": "The shipment requires a full week to arrive and is delivered by spectral couriers who ensure the blade arrives intact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "At the start of your next turn, or when expended during combat",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it offers significant damage bonuses and a unique soul-draining effect.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T20:11:03.954182+00:00",
    "aiReviewedAt": "2026-07-22T20:11:03.954182+00:00",
    "aiReviewVersion": 1
  },
  "midlands_iron_soul_talisman": {
    "id": "midlands_iron_soul_talisman",
    "name": "Iron Soul Talisman",
    "description": "The Iron Soul Talisman is a pulsing obsidian amulet that once belonged to an Iron Legion overseer. Its weighty presence wears on those who wear it, instilling a subtle aura of intimidation and bolstering morale in the heat of battle. Crafted from the very essence of fallen soldiers, this talisman whispers of lost battles and forgotten glory, enhancing the bearer's resolve and striking fear into the hearts of enemies.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+10% morale boost",
      "10% armor penetration"
    ],
    "vendor": "midlands",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Machinery Mayhem",
        "rules": "When an enemy within 5 feet of you takes damage, there is a 20% chance that it suffers additional random mechanical damage. This effect has no save DC and can occur once per turn."
      },
      {
        "title": "Intimidating Aura",
        "rules": "The talisman grants the wearer a +1 morale bonus to all saving throws against fear effects. This effect is passive until dispelled by a successful saving throw, spell, or other means that ends the fear condition."
      }
    ],
    "levelRequirementReason": "The talisman's weighty influence requires a certain level of mental and physical resilience to bear.",
    "vendorReason": "Midlands merchants have long traded in relics from the Iron Legion, offering them to those who seek to harness their ancient power.",
    "shippingDetail": "Ships via spectral courier with a rare, midnight delivery.",
    "usage": {
      "activation": "Passive effect until dispelled by a successful saving throw or other means that ends the fear condition.",
      "duration": "Until the start of your next turn after wearing it for an hour",
      "endsWhen": "The wearer successfully saves against a fear effect, spell, or similar ability that ends the fear condition.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item, this talisman offers significant morale and combat bonuses without overbalancing the game.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T20:11:07.680073+00:00",
    "aiReviewedAt": "2026-07-22T20:11:07.680073+00:00",
    "aiReviewVersion": 1
  },
  "midlands_isle_delfino_tropical_torch": {
    "id": "midlands_isle_delfino_tropical_torch",
    "name": "Isle Delfino Tropical Torch",
    "description": "The Isle Delfino Tropical Torch is a luminous beacon forged by the aquatic sprites of the ocean. Its flame dances in harmony with the tides, casting a gentle, warm glow that seems to ripple like the sea itself. When held, it whispers the name of the nearest sea creature and grants a sense of tranquility. This torch is said to be a gift from the sea, handed down as a protector for those who navigate its depths.",
    "price": 330,
    "icon": "🌊",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Restores Health",
      "Enhances Aquatic Combat"
    ],
    "vendor": "midlands",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health",
        "rules": "When activated, restores 100 hit points to the user. This effect can be used once per long rest."
      },
      {
        "title": "Enhances Aquatic Combat",
        "rules": "For one hour after activation, grants a +2 bonus to attack rolls and damage rolls against water-based creatures. The effect ends if the user leaves an area of fresh or saltwater."
      }
    ],
    "levelRequirementReason": "This torch is designed for adventurers at all levels who may need its protection while exploring underwater realms.",
    "vendorReason": "The Midlands trade extensively with Isle Delfino, importing magical artifacts like this torch.",
    "shippingDetail": "Ships via fast courier for immediate delivery to coastal ports only.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until user leaves water",
      "endsWhen": "User leaves an area of fresh or saltwater, or after one hour",
      "charges": "Unlimited"
    },
    "priceReason": "The torch's rarity and magical properties justify its high price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T20:11:18.493118+00:00",
    "aiReviewedAt": "2026-07-22T20:11:18.493118+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_name": {
    "id": "midlands_item_name",
    "name": "Steel Tongue of the Iron Tongue",
    "description": "The Steel Tongue of the Iron Tongue is a cursed blade forged from the last breath of an Iron Legion engineer, its edge humming with the echo of machinery and the whispers of forgotten guilds. When wielded, it inflicts mechanical damage akin to the relentless strikes of ironclad constructs, revealing hidden mechanical vulnerabilities on enemies. However, the user's voice is silenced for two turns as if the blade has taken it in exchange for its power.",
    "category": "equipment",
    "price": 6000,
    "icon": "🗡",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Mechanical Fury",
      "Expose Mechanic Weakness"
    ],
    "vendor": "midlands",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Mechanical Fury",
        "rules": "When you attack with this weapon, you deal an additional 1d6 mechanical damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Expose Mechanic Weakness",
        "rules": "Once per short rest, when you hit a creature with this weapon, it has disadvantage on all ability checks and saving throws made against mechanical effects for 1 minute."
      }
    ],
    "levelRequirementReason": "The intricate crafting and the curse of the blade require a certain mastery in combat and lore.",
    "vendorReason": "Midlands, known for its diverse trade and craftsmanship, is rumored to have received this cursed but powerful weapon from an ancient guild.",
    "shippingDetail": "The blade must be shipped via the Void Drifter Relay due to its cursed nature; delays may occur.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The start of your next turn",
      "charges": "Unlimited, but only usable once per short rest"
    },
    "priceReason": "Balanced against other epic items for its cursed nature and unique effects.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T20:11:40.140886+00:00",
    "aiReviewedAt": "2026-07-22T20:11:40.140886+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_name_here": {
    "id": "midlands_item_name_here",
    "name": "Sarasaland Diplomatic Pact Scroll",
    "description": "The Sarasaland Diplomatic Pact Scroll is a delicate, parchment-bound artifact inscribed with runes that glow faintly under torchlight. When unsealed and presented to Princess Daisy of Sarasaland, it grants you temporary access to her royal trade routes and a diplomatic bonus in your negotiations. The scroll's magic is forged from the very heart of the realm itself, ensuring its pact is binding and honored by all who witness it.",
    "price": 6000,
    "icon": "🌍",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Access to Royal Trade Routes",
      "Diplomatic Bonus"
    ],
    "vendor": "midlands",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Access to Royal Trade Routes",
        "rules": "Upon activation, you gain temporary access to the trade routes of Sarasaland. For a duration of 24 hours, you can use these routes without paying tariffs or tolls, and any goods transported are guaranteed safe passage. This effect ends when the scroll's magic is expended."
      },
      {
        "title": "Diplomatic Bonus",
        "rules": "For 24 hours after activation, you gain a +10 bonus to Diplomacy checks made against creatures of your choice within a 30-foot radius. You must make a successful DC 15 Wisdom (Persuasion) saving throw or suffer disadvantage on all Diplomacy checks until the scroll is expended."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and standing can afford to engage in such delicate diplomacy.",
    "vendorReason": "The Midlands are a trusted hub for all things Sarasaland, ensuring the integrity of such important diplomatic artifacts.",
    "shippingDetail": "Ships via the Noki Coral Fleet, known for its swift and reliable deliveries across the seas.",
    "usage": {
      "activation": "Requires a pact with Princess Daisy to activate; can be activated once per day.",
      "duration": "24 hours from activation.",
      "endsWhen": "Expended after use or destroyed if not used within 7 days of acquisition.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The scroll's value lies in its rarity and the trust it represents from Princess Daisy herself, making it a crucial tool for diplomacy worth every coin.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T20:11:36.182524+00:00",
    "aiReviewedAt": "2026-07-22T20:11:36.182524+00:00",
    "aiReviewVersion": 1
  },
  "midlands_legion_battle_mace": {
    "id": "midlands_legion_battle_mace",
    "name": "Legion Battle Mace",
    "description": "The Legion Battle Mace, forged from the iron bones of the Iron Legion’s forgotten siege engines, crackles with industrial fury when wielded in battle. Its surface is etched with ancient runes that glow faintly under moonlight, and it radiates a primal energy that resonates through the very armor it strikes. The mace deals devastating damage to armored foes, doubling their vulnerability while delivering powerful blows that can stagger even the most stalwart warriors.",
    "category": "equipment",
    "price": 1500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+2d6 bonus damage against armored targets",
      "Stagger enemies on hit with a +10% chance"
    ],
    "vendor": "midlands",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Iron Echo",
        "rules": "When you deal damage to an armored foe, there is a 5% chance that the mace triggers 'Iron Echo', dealing bonus damage to all allies within 5 feet. This effect can only occur once per minute."
      },
      {
        "title": "Stagger on Hit",
        "rules": "On a successful hit against an armored target, there is a +10% chance that the enemy is Staggered until their next action. No save DC applies to this effect."
      }
    ],
    "levelRequirementReason": "This mace requires at least level 5 due to its unique construction and powerful effects.",
    "vendorReason": "The Midlands are known for their mastery of ancient artifacts, making this mace a fitting addition to their stock.",
    "shippingDetail": "Delivered via the ethereal planes, ensuring swift and secure transport through mystical means.",
    "usage": {
      "activation": "On hit with a melee attack against an armored target",
      "duration": "Instantaneous",
      "endsWhen": "Effect is used or the mace is dropped or discarded",
      "charges": "Unlimited"
    },
    "priceReason": "The mace’s rarity, unique construction, and powerful effects justify its balanced price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T20:11:38.765931+00:00",
    "aiReviewedAt": "2026-07-22T20:11:38.765931+00:00",
    "aiReviewVersion": 1
  }
};
