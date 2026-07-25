// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_065 = {
  "earth_land_wario_lucky_charm": {
    "id": "earth_land_wario_lucky_charm",
    "name": "Wario's Golden Boot of Fortune",
    "description": "Wario’s Golden Boot of Fortune is a gleaming relic with polished brass and intricate piping. Crafted by Wario himself in his mischievous forge, it has an uncanny knack for turning misfortune into opportunity. Some say its magic causes calamities to gravitate towards it, while others swear it brings unparalleled luck on the battlefield. Rumored to have been forged from a golden ingot found after one of Wario’s infamous tumbles, this boot offers both boon and bane in equal measure.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 25,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+1 to attack rolls",
      "random 'lucky break' effect"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "rocket_beetle",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Fortunate Strike",
        "rules": "When you roll an attack with a weapon, you can expend one charge from the boot. On a hit, you gain +2 to your next attack roll made before the end of your next turn."
      },
      {
        "title": "Lucky Break",
        "rules": "Once per short rest, you can activate the boot to trigger a 'lucky break'. This grants temporary resistance to one type of negative status effect for 1 hour. The DM decides which effect is resisted."
      }
    ],
    "levelRequirementReason": "Wario’s Golden Boot requires at least 12th level to wield its unpredictable magic.",
    "vendorReason": "The Guild Quartermaster stocks this item as part of their extensive equipment offerings, catering to the needs of seasoned adventurers.",
    "shippingDetail": "Delivered by the trusty Rocket Beetle, known for its punctuality and reliability in delivering magical artifacts.",
    "usage": {
      "activation": "Action or bonus action (one per short rest)",
      "duration": "Instantaneous; Fortunate Strike ends on a miss; Lucky Break lasts until used",
      "endsWhen": "Exhausted after one use per short rest, and recharges at the start of each long rest",
      "charges": "2 charges"
    },
    "priceReason": "The boot’s unique properties and limited recharge capacity justify its moderate price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:17:51.255800+00:00",
    "aiReviewedAt": "2026-07-23T23:17:51.255800+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_golden_coin_launcher": {
    "id": "mushroom_kingdom_item_golden_coin_launcher",
    "name": "Golden Coin Launcher",
    "description": "The Golden Coin Launcher is a bizarre contraption crafted from gleaming brass and encrusted with rare gemstones. This relic, once owned by the cunning Koopa King Wario himself, fires enchanted golden coins with surprising force. Knock down foes, disarm traps, or simply amuse your allies; each coin strikes with a bludgeoning blow, leaving its target dazed for a moment. Be wary—it's a rare and valuable item, not just for its combat prowess but also as a symbol of Wario's cunning.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "deals_1d6_bludgeoning_damage",
      "increased_range"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blunt Force Trauma",
        "rules": "When the Golden Coin Launcher is activated, it fires an enchanted golden coin that deals 1d6 bludgeoning damage to a target within 30 feet. The target must succeed on a DC 15 Strength saving throw or be stunned for one round."
      },
      {
        "title": "Long Reach",
        "rules": "The Golden Coin Launcher has an increased range of 60 feet, allowing you to strike foes from a safe distance without the risk of being targeted by their retaliatory attacks."
      }
    ],
    "levelRequirementReason": "This device is designed for beginners and adventurers alike, requiring no specific level to use.",
    "vendorReason": "The Koopa Shop specializes in rare and unusual items crafted by the cunning Koopas, making it a natural home for this golden contraption.",
    "shippingDetail": "This item is shipped via Mushroom Delivery with a delivery window of one week due to its delicate nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The coin strikes or the target saves successfully against the stun effect",
      "charges": "Unlimited, but requires recharging after extensive use"
    },
    "priceReason": "Balanced at 1000 XP, this item offers a unique and powerful feature set for beginners while maintaining a fair value.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:18:02.403261+00:00",
    "aiReviewedAt": "2026-07-23T23:18:02.403261+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wart_armor": {
    "id": "mushroom_kingdom_item_wart_armor",
    "name": "Wart Armor of Resilience",
    "description": "The Wart Armor of Resilience, crafted from the hardiest warthog warts found in the Mushroom Kingdom, is a gleaming, slimy cuirass that clings to your form like a second skin. Its warty surface not only provides an unexpected layer of defense but also emits a faint glow under stress, alerting you to impending danger. Wario's personal approval ensures its quality, and it has earned the loyalty of many Mushroom Kingdom warriors seeking both style and substance.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_armor_class",
      "resistance_to_poison"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "snail_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Armor Class",
        "rules": "While wearing this armor, you have a +2 bonus to your AC. This bonus increases by +1 for every five levels beyond level 5."
      },
      {
        "title": "Resistance to Poison",
        "rules": "You gain resistance to poison damage. Additionally, when you are exposed to poison, you can use an action to apply a layer of protective wart slime, providing temporary immunity to the poison's effects for one minute."
      }
    ],
    "levelRequirementReason": "The armor requires no level above 1 as it is designed for all warriors, from novice to seasoned.",
    "vendorReason": "Toad Town Market prides itself on offering the best gear to protect its citizens and visitors alike.",
    "shippingDetail": "Snail Express ensures timely delivery, even in the Mushroom Kingdom's unpredictable weather.",
    "usage": {
      "activation": "Instantaneous application upon donning; no activation required thereafter.",
      "duration": "Until removed or until you die in a manner that does not involve poison exposure.",
      "endsWhen": "The armor is removed or the wearer dies from non-poison-related causes.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The armor's unique warty material and Wario's endorsement justify its moderate price in experience points.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:18:13.126104+00:00",
    "aiReviewedAt": "2026-07-23T23:18:13.126104+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_mushroom_king_favor": {
    "id": "mushroom_kingdom_item_mushroom_king_favor",
    "name": "Mushroom King's Favor",
    "description": "The Mushroom King's Favor is a small, intricately crafted mushroom that glows faintly with magic. It enhances your Strength and Charisma by granting you a +1 bonus to each, and it has a unique ability: when you speak kindly to hostile creatures, they have a 30% chance to calm down without attacking. This token of the Mushroom King's favor is not just for show; it's expected that you will visit him regularly as repayment for his generosity.",
    "category": "faction",
    "price": 1000,
    "icon": "👑",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increased_strength",
      "charisma_boost"
    ],
    "vendor": "wario_direct",
    "shippedBy": "giant_mushroom_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Strength and Charisma",
        "rules": "+1 bonus to Strength and Charisma. These bonuses are always active while the favor is worn."
      },
      {
        "title": "Chance to Pacify Hostile Creatures",
        "rules": "When you speak kindly to a hostile creature, there's a 30% chance it calms down without attacking. The effect lasts for 1 minute and ends if the creature takes damage or becomes hostile again."
      }
    ],
    "levelRequirementReason": "The Mushroom King's Favor is tailored to adventurers who have proven themselves worthy of his trust.",
    "vendorReason": "Wario, as a direct representative of the Mushroom Kingdom, often acts as the liaison for such prestigious items.",
    "shippingDetail": "The delivery is made by a massive mushroom courier that can travel great distances underground quickly.",
    "usage": {
      "activation": "Passive effect",
      "duration": "1 minute",
      "endsWhen": "If the creature takes damage or becomes hostile again, or if you use an action to dismiss it early.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects both its mythic rarity and the ongoing favors owed to the Mushroom King.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T23:17:49.537461+00:00",
    "aiReviewedAt": "2026-07-23T23:17:49.537461+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_scroll": {
    "id": "teyvat_item_archon_scroll",
    "name": "Fragment of the Divine Decree",
    "description": "The Fragment of the Divine Decree is a meticulously crafted scroll, its parchment yellowed by age yet shimmering with an otherworldly light. It bears the fragment of an Archon’s decree, said to contain ancient wisdom lost to time. Unraveling its secrets grants fleeting insights into forgotten spells and strategies, but it can also unleash chaotic energies that leave the user disoriented for hours. A relic of Inazuma Imports, this scroll is as enigmatic as it is powerful.",
    "category": "equipment",
    "price": 1000,
    "icon": "📜",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Divine Insight",
      "Temporal Resonance"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "wind_ship",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Divine Insight",
        "rules": "As a bonus action, you can study the fragment to gain advantage on one ability check. This effect lasts until the end of your next turn. If you fail the check, you must make a DC 15 Wisdom saving throw or be stunned for 1 minute."
      },
      {
        "title": "Temporal Resonance",
        "rules": "At the start of each of your turns while holding this scroll, there is a 20% chance that an unpredictable temporal effect occurs. You must make a DC 16 Intelligence saving throw; on a failed save, you are restrained and must complete a short rest before moving again."
      }
    ],
    "levelRequirementReason": "The scroll's ancient magic requires the user to be of at least 8th level to safely handle its unpredictable temporal effects.",
    "vendorReason": "Inazuma Imports specializes in rare artifacts and relics from across Teyvat, including this fragment that was once part of an Archon's powerful decree.",
    "shippingDetail": "The scroll is carefully packaged for delivery via the Wind Ship to ensure it arrives intact.",
    "usage": {
      "activation": "Bonus action (Divine Insight), begins at start of each turn (Temporal Resonance)",
      "duration": "Until end of next turn (Divine Insight); until restrained by a failed save (Temporal Resonance)",
      "endsWhen": "Failed saving throw or completion of a short rest",
      "charges": "Unlimited, but only one effect can occur per turn"
    },
    "priceReason": "The scroll's rarity and the risk it poses to users justify its fair price in XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:18:18.537283+00:00",
    "aiReviewedAt": "2026-07-23T23:18:18.537283+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_crusty_crown": {
    "id": "leclaire_isle_item_crusty_crown",
    "name": "Crusty Crown of Crumbling Courage",
    "description": "The Crusty Crown of Crumbling Courage is a regal yet fragile crown, forged from dough that has been hardened by hours spent in a baker's oven and adorned with shimmering sugar crystals. It grants its wearer a temporary boost against fear, bolstering their courage for moments of peril. However, prolonged use can lead to an irresistible craving for pastries, as the crown seems to draw its strength from sugary treats.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Courage Boost",
      "Sweet Temptation"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Dough Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Courage Boost",
        "rules": "When worn, the crown grants a +1 bonus to saving throws against fear effects. This effect lasts for 1 hour, and can be recharged by consuming at least one pastry or sweet treat."
      },
      {
        "title": "Sweet Temptation",
        "rules": "While wearing the crown, there is a 25% chance each day that the wearer will experience an uncontrollable urge to consume pastries. If this effect triggers, the wearer must succeed on a DC 13 Constitution saving throw or spend their next short rest indulging in sugary treats."
      }
    ],
    "levelRequirementReason": "The crown's inherent fragility and its need for periodic recharging through pastries make it accessible to low-level adventurers.",
    "vendorReason": "Dough Depot specializes in items related to pastries, and the crown is a perfect fit for their inventory given its sugary origin.",
    "shippingDetail": "The crown arrives securely wrapped in layers of parchment paper to preserve its delicate state.",
    "usage": {
      "activation": "Wearing the crown passively provides benefits, but consuming pastries recharges it.",
      "duration": "1 hour per day; recharged by eating at least one pastry or sweet treat.",
      "endsWhen": "The wearer removes the crown, or if they consume an excessive amount of sweets causing them to fail a Constitution saving throw.",
      "charges": "Unlimited, but requires periodic recharging."
    },
    "priceReason": "The crown's unique design and fragility, combined with its need for frequent recharging through pastries, justify this moderate price in XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:18:46.909486+00:00",
    "aiReviewedAt": "2026-07-23T23:18:46.909486+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sweet_serenity_potion": {
    "id": "leclaire_isle_item_sweet_serenity_potion",
    "name": "Sweet Serenity Potion",
    "description": "Crafted in the heart of Le Clair Isle, this potion is a harmonious blend of enchanted honey and moonlit lavender. Sip it before battle to wash away the stress and tension, allowing your mind to settle into a profound state of calm. The nectar's sweetness lingers, granting you temporary immunity from frustration, while the lavender soothes your soul with its serene aroma. A perfect indulgence for both warriors seeking peace in combat and those who simply wish to recline under the stars.",
    "category": "consumables",
    "price": 1000,
    "icon": "😴",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Heals 50 HP",
      "Immunity to Frustration"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Delivery Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing",
        "rules": "Consume the potion as an action. You regain 50 Hit Points immediately, and for the next hour you are immune to the 'frustration' status effect."
      },
      {
        "title": "Immunity to Frustration",
        "rules": "For one hour after consuming the potion, you gain temporary immunity to the frustration effect. If you enter a frustrated state while under its effects, it is immediately negated."
      }
    ],
    "levelRequirementReason": "The potion's ingredients are readily available on Le Clair Isle and do not require advanced skill or rare components.",
    "vendorReason": "Pastry Palace, known for its exquisite honey and lavender sweets, has perfected the art of creating this restorative beverage.",
    "shippingDetail": "The Swift Delivery Pigeons ensure that each bottle is delivered fresh from Le Clair Isle within a day.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "One hour",
      "endsWhen": "After one hour, the effects expire.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's ingredients are sourced from Le Clair Isle and require skilled brewing, balancing its cost with its restorative benefits.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:18:27.365972+00:00",
    "aiReviewedAt": "2026-07-23T23:18:27.365972+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_mythic_dough_of_distortion": {
    "id": "leclaire_isle_item_mythic_dough_of_distortion",
    "name": "Mythic Dough of Distortion",
    "description": "The Mythic Dough of Distortion is a sentient, pulsating mass that warps reality with its touch. Crafted from the essence of mischievous pastry spirits, this dough can be molded into shields or weapons that warp the environment around them. When used, it creates unpredictable effects—turning allies into baked goods for 1 turn, or causing strange phenomena like a cloud of powdered sugar. The Dough's true nature is to playfully distort reality, making any combat situation a culinary carnival.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Pastry Transformation",
      "Environmental Distortion"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Dimensional Portal Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pastry Transformation",
        "rules": "When activated as an action, the Mythic Dough of Distortion can be molded into a temporary weapon or shield. All allies within 10 feet that touch it must succeed on a DC 15 Dexterity saving throw or turn into a pastry-themed creature for 1 turn. The transformation ends if they take damage."
      },
      {
        "title": "Environmental Distortion",
        "rules": "The Dough creates random environmental effects in the area (e.g., frosting fog, powdered sugar cloud) that last until the end of your next turn. These effects can be dispelled by a successful DC 15 Wisdom (Medicine) check."
      }
    ],
    "levelRequirementReason": "Anyone with even minimal experience in combat or magic can handle the Dough's unpredictable nature.",
    "vendorReason": "Sweet Supplies is known for its wide array of whimsical and magical ingredients, making it a natural home for this culinary artifact.",
    "shippingDetail": "The Dough arrives sealed in a protective pastry box to ensure it remains stable during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, effects last until the end of your next turn or dispelled by damage or a check.",
      "endsWhen": "Pastry Transformation ends when an ally takes damage; Environmental Distortion lasts until the end of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its unique gameplay mechanics and thematic value, this Dough offers a fun but manageable challenge.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:18:29.144777+00:00",
    "aiReviewedAt": "2026-07-23T23:18:29.144777+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_crimson_crumb": {
    "id": "leclaire_isle_crimson_crumb",
    "name": "Crimson Crumb of Chaos",
    "description": "The Crimson Crumb of Chaos, a mischievous morsel plucked from a rogue batch of demonic brioche, pulses with chaotic energy. This tiny crumb can bestow fleeting boons upon those who consume it—temporary buffs to attack or defense—but also sows minor curses like 'sticky fingers,' which reduces accuracy for a turn. Rumor has it that the crumb might even summon a miniature gingerbread man, adding a whimsical touch of chaos to any battle.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporary Buff",
      "Minor Curse"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Flying Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Buff",
        "rules": "Upon consuming the Crimson Crumb, the user gains advantage on either an attack roll or a saving throw for 3 turns. This effect is instantaneous upon consumption and cannot be used again until after resting."
      },
      {
        "title": "Minor Curse: Sticky Fingers",
        "rules": "There's a 20% chance that consuming the crumb will reduce your accuracy by -1 to attack rolls, saving throws, or skill checks for the duration of one turn. This effect is random and not cumulative."
      }
    ],
    "levelRequirementReason": "The Crimson Crumb's unpredictable nature makes it accessible to lower-level characters who might benefit from its chaotic effects without overwhelming them.",
    "vendorReason": "Pastry Palace, known for their eccentric and magical baked goods, often deals in items like the Crimson Crumb of Chaos due to their expertise in crafting unusual treats.",
    "shippingDetail": "The Flying Cart ensures prompt delivery with a slight delay, as the cart must navigate through the bustling streets of the city.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "3 turns for temporary buffs, one turn for 'sticky fingers'",
      "endsWhen": "Effect ends naturally when its duration expires or is interrupted by an action",
      "charges": "Unlimited uses, but only once per short or long rest"
    },
    "priceReason": "The Crimson Crumb's rarity and unpredictable effects justify a higher price, making it accessible yet valuable for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:19:00.293306+00:00",
    "aiReviewedAt": "2026-07-23T23:19:00.293306+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_golden_rolling_pin": {
    "id": "leclaire_isle_golden_rolling_pin",
    "name": "Golden Rolling Pin of Momentum",
    "description": "The Golden Rolling Pin of Momentum exudes an otherworldly glow, its surface etched with ancient runes that shimmer faintly in the light. Crafted from the purest gold from Leclair Isle's sacred forges, this enchanted rolling pin not only aids pastry making but also propels its wielder with unmatched speed and force. Legend has it that the core of the pin is imbued with the spirit of a great leaper, granting those who wield it both incredible agility and the ability to crush foes with a single impact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥠",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Momentum Boost",
      "Impact Smash"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Wario Express Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Momentum Boost",
        "rules": "When you use this rolling pin as an action, you gain a +1d6 bonus to your movement speed until the end of your next turn. If you move at least 30 feet in a single turn while holding it, you deal 1d8 force damage with your next successful hit against a target within reach."
      },
      {
        "title": "Impact Smash",
        "rules": "When you successfully hit a target with this rolling pin as part of an attack action, the target must succeed on a DC 15 Strength saving throw or be knocked prone. This effect has a maximum number of uses per day equal to your proficiency bonus."
      }
    ],
    "levelRequirementReason": "The pin's ancient magic requires significant strength and skill to control effectively.",
    "vendorReason": "Sweet Supplies is known for its extensive stock of magical kitchen tools, including this legendary rolling pin.",
    "shippingDetail": "Ships via special courier; delivery time varies depending on location.",
    "usage": {
      "activation": "Action or Reaction (requires proficiency)",
      "duration": "Instantaneous, with a recharge after a long rest",
      "endsWhen": "At the end of your next turn or when you drop the pin",
      "charges": "Recharges at dawn"
    },
    "priceReason": "The price reflects its rare crafting materials and magical properties, making it a significant investment.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:18:55.178102+00:00",
    "aiReviewedAt": "2026-07-23T23:18:55.178102+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_forbidden_lantern": {
    "id": "the_edge_forbidden_lantern",
    "name": "Whisperlight Lantern",
    "description": "The Whisperlight Lantern casts a sickly green glow, illuminating only the deepest shadows of reality and attracting the attention of malevolent entities that lurk in the dark. Its flickering flame whispers secrets to those who listen too closely—secrets often marked by misfortune and danger. Those who venture into the night with this lantern must be prepared for an unsettling encounter, as it seems to know more than it should about the horrors hidden just out of sight.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🕯️",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Grants Darkvision",
      "Attracts Shadow Entities"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "The Black Raven",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Grants Darkvision",
        "rules": "The user gains darkvision up to 60 feet while holding the lantern. This effect lasts until the end of their next turn after using it."
      },
      {
        "title": "Attracts Shadow Entities",
        "rules": "Once per short rest, the user can activate the lantern to summon a Minor Shadow Demon. The summoned creature has 1d4 hit points and is under the user's control for 1 minute before dissipating into shadow. A successful DC 15 Wisdom saving throw ends this effect early."
      }
    ],
    "levelRequirementReason": "Requires a character of at least 10th level to handle the lantern's inherent risks and harness its power.",
    "vendorReason": "Edge Outpost deals in items that push the boundaries, making the Whisperlight Lantern an appropriate addition to their forbidden wares.",
    "shippingDetail": "Delivered under cover of night by The Black Raven, ensuring its arrival is discreet and safe.",
    "usage": {
      "activation": "Bonus Action to activate or extinguish the lantern's light.",
      "duration": "Instantaneous summoning when activated; Darkvision lasts until end of next turn after activation.",
      "endsWhen": "The effect ends if a successful Wisdom saving throw is made, or it is extinguished by hand.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced as the item provides potent but manageable abilities at an appropriate cost for its level of power and rarity.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:01:39.381850+00:00",
    "aiReviewedAt": "2026-07-25T00:01:39.381850+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_wario_bomb_of_confusion": {
    "id": "the_edge_wario_bomb_of_confusion",
    "name": "Wario's Chaotic Burst",
    "description": "Wario's Chaotic Burst, a delightfully unstable sphere of pure chaotic energy, crackles with malevolent force as it hovers in your hand. When thrown, this explosive device unleashes a wave of confusion and chaos upon its target, causing them to flail about in bewildered disarray. Just be wary—its unpredictable nature means you must throw it from the safety of at least 30 feet away; aiming too close might just leave you as confused as your foes!",
    "category": "consumables",
    "price": 1000,
    "icon": "💣",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Deals force damage and confusion",
      "Enemies have a chance to be stunned"
    ],
    "vendor": "final_shop",
    "shippedBy": "express delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Force Damage and Confusion",
        "rules": "When thrown, Wario's Chaotic Burst deals 1d6 + level force damage. The target has a 50% chance to become confused for the start of their next turn, during which they have disadvantage on attack rolls and ability checks."
      },
      {
        "title": "Stunning Chance",
        "rules": "For one round after activation, enemies within 10 feet have a 20% chance to be stunned. Being hit by this effect requires a DC 15 Dexterity saving throw; on a failed save, the target is stunned."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to control its chaotic nature effectively.",
    "vendorReason": "Final Shop stocks this item as it caters to adventurers needing tools for unpredictable combat scenarios, especially those who have encountered Wario's chaotic antics firsthand.",
    "shippingDetail": "Expressed via Wario Express, the delivery ensures the item arrives in perfect form without risk of premature detonation.",
    "usage": {
      "activation": "Throw as a bonus action",
      "duration": "Instantaneous; lasts until target is hit or fails its save",
      "endsWhen": "Target makes a successful saving throw or takes damage from another source",
      "charges": "Unlimited, recharged after long rest"
    },
    "priceReason": "The item's unpredictable nature and the specialized materials required for its creation justify its higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:19:15.431756+00:00",
    "aiReviewedAt": "2026-07-23T23:19:15.431756+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_data_shard_37b": {
    "id": "kivotos_item_data_shard_37b",
    "name": "Digital Echo Fragment",
    "description": "A Digital Echo Fragment is a shimmering shard of corrupted data, pulsating with a faint blue glow that flickers like forgotten memories. Crafted from the remnants of Academy City's lost algorithms, it hums with latent potential. Some claim it holds lost recipes, while others whisper of hidden knowledge just out of reach. This fragment can detect hidden objects within 30 feet, and its presence subtly enhances Intelligence by 10% for up to one minute.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💾",
    "stock": 55,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "detect_hidden_objects",
      "intelligence_boost"
    ],
    "vendor": "student_store",
    "shippedBy": "package_bot",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Detect Hidden Objects",
        "rules": "The user can use an action to activate this effect. For the next round, they gain advantage on Perception checks to detect secret doors and hidden objects within 30 feet."
      },
      {
        "title": "Intelligence Boost",
        "rules": "For up to one minute after activation, the user's Intelligence is boosted by 10%. This bonus does not stack with other sources of Intelligence increase. The effect ends if the user takes any damage or when the duration expires."
      }
    ],
    "levelRequirementReason": "Requires lower skill to use this fragment effectively without exceeding player capabilities.",
    "vendorReason": "The student store caters to curious and tech-savvy students who explore the mysteries of lost data fragments.",
    "shippingDetail": "Shipped via package_bot with standard delivery within the next school week.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until interrupted by damage",
      "endsWhen": "Effect ends if the user takes any damage or at the end of their next turn after activation, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the fragment's unique capabilities and its limited, non-consumable nature.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:19:45.061081+00:00",
    "aiReviewedAt": "2026-07-23T23:19:45.061081+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_sticky_slime": {
    "id": "earth_land_item_sticky_slime",
    "name": "Sludge of Sticky Success!",
    "description": "The Sludge of Sticky Success! is a viscous, earthy mass that oozes with latent energy from the heart of the ancient earth. It adheres to foes with surprising tenacity, slowing them by half and making them prone to comical slips when they least expect it. Crafted from the very essence of the land, this sludge is as dependable as it is unpredictable; just be wary—its grip can be just as tight on you if you're not careful!",
    "category": "consumables",
    "price": 1000,
    "icon": "💩",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Slows target by half",
      "Causes comical slip-ups"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Mud Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Target Slowed",
        "rules": "The Sludge of Sticky Success! applies the 'slowed' condition to a single creature, reducing its movement speed by 50%. This effect lasts for 3 turns. There is no saving throw against this effect."
      },
      {
        "title": "Comical Slip",
        "rules": "There is a 10% chance that whenever the target of the Sludge takes damage from any source, it will make a Dexterity saving throw (DC 12) to avoid falling prone. On a failed save, the creature falls flat on its face and must use its action on the following turn to stand up again."
      }
    ],
    "levelRequirementReason": "This item is crafted for adventurers who are just starting their journey, providing them with an advantage in early combat encounters.",
    "vendorReason": "The Guild Quartermaster supplies adventurers with the tools they need to succeed in their quests, and this sludge fits perfectly into that mission.",
    "shippingDetail": "Delivered via Mud Pony Express, known for its reliable service through all kinds of terrain.",
    "usage": {
      "activation": "The Sludge is activated as a bonus action by squeezing it and throwing it at an enemy within reach.",
      "duration": "3 turns",
      "endsWhen": "The effect ends when the duration expires or the creature moves more than 10 feet away from the sludge.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare earth elements and ancient lore, this item provides a significant advantage in combat at a fair price.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-23T23:19:54.069019+00:00",
    "aiReviewedAt": "2026-07-23T23:19:54.069019+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_dragonscale_gauntlets": {
    "id": "earth_land_item_dragonscale_gauntlets",
    "name": "Grumblescale Gauntlets of Minor Might!",
    "description": "Forged from the scales of a particularly grumpy young dragon, these gauntlets are surprisingly comfortable despite their fierce origin. When you strike with might, they occasionally emit sparks and a low growl that sends shivers down your spine. These Grumblescale Gauntlets grant you +5 Strength for 6 turns and increase your knockback resistance by 20%. They’re a rare find in the magic shop, where the seasoned staff can help adventurers who seek such unique armaments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "+5 Strength",
      "Increased Knockback Resistance"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Wyvern Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Strength",
        "rules": "Activates on donning. While worn, your Strength is increased by +5 for 6 turns. This effect ends if you remove the gauntlets or when the duration expires."
      },
      {
        "title": "Knockback Resistance",
        "rules": "While worn, your resistance to knockback is increased by 20%. This effect persists as long as you wear the gauntlets and ceases on removal."
      }
    ],
    "levelRequirementReason": "These gauntlets are crafted for beginners who need a bit of extra oomph in their melee attacks.",
    "vendorReason": "The magic shop is known for its unique and powerful armaments, making these gauntlets an easy fit for their inventory.",
    "shippingDetail": "Delivered with a custom courier who ensures the gauntlets are handled with care to preserve their magical integrity.",
    "usage": {
      "activation": "Instantaneous upon donning",
      "duration": "6 turns while worn",
      "endsWhen": "On removal or when duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The gauntlets are crafted from rare dragon scales and offer a unique combination of power and comfort, making them a fair price for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:19:28.054377+00:00",
    "aiReviewedAt": "2026-07-23T23:19:28.054377+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_ancient_stone_charm": {
    "id": "earth_land_item_ancient_stone_charm",
    "name": "Whispering Stone of Forgotten Roots!",
    "description": "The Whispering Stone of Forgotten Roots feels warm and smooth, its grey surface etched with ancient runes that glow faintly in the dark. It's said to have been crafted from an old gnome village long buried by time and earth. When held, it hums softly, sharing forgotten secrets, often complaints about bad weather or territorial disputes among the roots themselves. Use it wisely, for its power is both a gift and a curse.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗿",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "whispered wisdom",
      "earth magic resistance"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Golem Delivery Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Whispered Wisdom",
        "rules": "As an action, you can hold the stone to gain temporary wisdom (+2) for 4 turns. The stone must be held and focused on during this time."
      },
      {
        "title": "Earth Magic Resistance",
        "rules": "You have advantage on saving throws against earth-based spells or effects for 1 hour when wearing the stone as a charm."
      }
    ],
    "levelRequirementReason": "The ancient power of the stone requires a minimum understanding of its lore and magic.",
    "vendorReason": "The Earth Emporium specializes in relics that connect with nature, making this stone an ideal addition to their collection.",
    "shippingDetail": "Delivered by a slow but reliable golem, ensuring the stone arrives unharmed and in good condition.",
    "usage": {
      "activation": "Action: Hold the stone for one full round.",
      "duration": "4 turns or until used",
      "endsWhen": "The duration ends when you no longer hold it as a charm.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the stone's ancient crafting and its limited, yet potent, magical properties.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:20:33.098951+00:00",
    "aiReviewedAt": "2026-07-23T23:20:33.098951+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_empire_decree": {
    "id": "midlands_item_empire_decree",
    "name": "Decree of the Iron Hand",
    "description": "The Decree of the Iron Hand, a tattered parchment signed by an emperor long gone, exudes a chilling presence. Its ink has faded to nearly nothing, yet it retains a potent influence over those who wield its power. Legends speak of its ability to command absolute obedience and silence dissent, though its effects are unpredictable at best. When used with care, it can grant advantage on Persuasion checks against lawful characters and reduce factional tensions by triggering positive events.",
    "category": "faction",
    "price": 1000,
    "icon": "📜",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Persuasion Checks",
      "Positive Faction Event"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Advantage on Persuasion Checks",
        "rules": "When used, the Decree grants advantage on a single Persuasion check against lawful characters. This effect lasts until the end of your next turn."
      },
      {
        "title": "Positive Faction Event",
        "rules": "Once per short or long rest, using the Decree can trigger a positive faction event within a 1-mile radius, reducing taxes by one level for up to one week. The effect has a 50% chance of occurring if used."
      }
    ],
    "levelRequirementReason": "Requires at least second-level proficiency in diplomacy or history to wield the Decree effectively.",
    "vendorReason": "The Empire Exchange specializes in historical artifacts and relics, including decrees from ancient emperors.",
    "shippingDetail": "Ships via an imperial courier for expedited delivery within a week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (advantage lasts until the end of next turn, faction event occurs once per rest)",
      "endsWhen": "Advantage expires at the end of your next turn; faction event ends after one week or when triggered again.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare, historically significant artifact with limited but potent effects.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:20:11.358103+00:00",
    "aiReviewedAt": "2026-07-23T23:20:11.358103+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_aegis_of_silence": {
    "id": "midlands_item_aegis_of_silence",
    "name": "Aegis of Silence",
    "description": "The Aegis of Silence is a shimmering, almost translucent shield forged from the quiet whispers of ancient monks who sought to harness silence itself. Crafted in a long-forgotten monastery, its surface seems to absorb sound and dampen magical vibrations, making the wearer nearly invisible to both ears and eyes. Its weight barely registers despite its enchantment, yet its effects are undeniable: it grants +4 AC and reduces the effective range of enemy spells by half, turning the battlefield into a hush of unspoken threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Silence Aura",
      "Reduced Spell Range"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dragon airship",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Silence Aura (Passive)",
        "rules": "The wearer gains advantage on Stealth checks in dimly lit areas. The shield's aura creates a subtle, calming effect that reduces the effective range of all enemy spells by 50%, forcing them to target within half their original range."
      },
      {
        "title": "Silence (Daily)",
        "rules": "The wearer can cast Silence once per day as an action. The spell's duration is 1 minute, and it has a save DC of 18. This effect suppresses sound in a 20-foot radius centered on the wielder."
      }
    ],
    "levelRequirementReason": "The Aegis requires a high level to fully utilize its silent magic without risking exhaustion or overexertion.",
    "vendorReason": "Forgotten monks entrusted the creation of this shield to Fractured Forge, as their legacy is one of crafting items that blend arcane and martial prowess.",
    "shippingDetail": "The dragon airship delivers the Aegis swiftly but requires a special cargo hold that can contain its mystical properties without interference.",
    "usage": {
      "activation": "Passive (Silence Aura), Action (Silence)",
      "duration": "Silence Aura (instantaneous), Silence (1 minute, up to once per day)",
      "endsWhen": "The spell ends if the wearer is incapacitated or when its duration expires.",
      "charges": "1 charge per day"
    },
    "priceReason": "This price reflects a mythic item that balances utility and power, offering significant benefits without overstepping the bounds of a balanced game.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:20:13.972908+00:00",
    "aiReviewedAt": "2026-07-23T23:20:13.972908+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_crumb_of_void": {
    "id": "almost_edge_crumb_of_void",
    "name": "Crumb of Void",
    "description": "The Crumb of Void is a brittle, sugary fragment that crackles with an ethereal glow as it shatters upon contact with your tongue. It's said to be a piece of reality torn from the very edge of existence and solidified into this ephemeral treat. Consuming one grants you fleeting glimpses through the fabric of space-time, possibly leading to moments of delightful confusion or profound existential dread. Be warned: this snack comes with unpredictable side effects.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "Restores 100 Hit Points",
      "Possibility of Temporary Madness (10%)"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore 100 Hit Points",
        "rules": "Eating the Crumb of Void immediately restores 100 hit points. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Temporary Madness (10%)",
        "rules": "There's a 10% chance that consuming the Crumb will cause you to gain temporary madness for 1 minute. The DC to save against this effect is 15. If you fail your saving throw, you must succeed on another saving throw at the end of each round while under its effects or fall unconscious until fully recovered."
      }
    ],
    "levelRequirementReason": "Anyone can indulge in the Crumb of Void, as its power is not reserved for the experienced adventurer.",
    "vendorReason": "The void merchant has a reputation for selling the most bizarre and otherworldly items, making it no surprise that they would offer this delicacy from beyond reality.",
    "shippingDetail": "Ships via Dimensional Rift Express with next-day delivery within the realm of magic. Expedited shipping ensures your Crumb arrives fresh and intact.",
    "usage": {
      "activation": "Eating",
      "duration": "Instantaneous for hit point restoration; 1 minute or until madness ends if temporary madness occurs",
      "endsWhen": "The effect concludes upon consuming the Crumb of Void, or when the temporary madness duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "Despite its mythic rarity and limited stock, the Crumb's price reflects its accessible nature to any adventurer willing to brave its effects.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:20:36.163308+00:00",
    "aiReviewedAt": "2026-07-23T23:20:36.163308+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_chronal_boots": {
    "id": "almost_edge_chronal_boots",
    "name": "Chronal Boots of Shifting Steps",
    "description": "The Chronal Boots of Shifting Steps are a rare find, crafted from time-worn leather that once belonged to a pastry chef who navigated the temporal fluxes of his culinary experiments. These boots allow you to momentarily bend the fabric of time, granting you a brief respite from danger or allowing you to correct minor blunders – though they whisper of the perilous consequences of tampering too deeply with the timeline.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Dodge",
      "Chronal Rewind"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Dodge",
        "rules": "As a reaction, you can use your Dexterity to dodge an attack. You gain advantage on this saving throw if it's against a ranged attack or if the attacker is within 30 feet of you. This effect has no cooldown."
      },
      {
        "title": "Chronal Rewind",
        "rules": "Once per short rest, you can rewind time for yourself by up to 2 turns. During this time, you are immune to all damage and effects from attacks or spells. After the duration ends, roll a d10; if it matches your Dexterity modifier (rounded down), you successfully avoid any negative consequences of the rewound actions."
      }
    ],
    "levelRequirementReason": "The boots' temporal mechanisms are intricate and require a solid understanding of both combat and time manipulation.",
    "vendorReason": "The edge_wanderer specializes in unique, one-of-a-kind items that bridge the gap between reality and fantasy, making these boots an ideal addition to their inventory.",
    "shippingDetail": "The Temporal Courier ensures that the Chronal Boots arrive intact by bypassing conventional time constraints, delivering them within a day of purchase.",
    "usage": {
      "activation": "Reaction for Temporal Dodge; once per short rest for Chronal Rewind",
      "duration": "Instantaneous (Temporal Dodge) or up to 2 turns (Chronal Rewind)",
      "endsWhen": "On cooldown until the next short rest after using Chronal Rewind, and when an attack is successfully dodged in Temporal Dodge.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are priced at a fair value considering their rarity and the unique temporal mechanics they offer.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:20:40.940115+00:00",
    "aiReviewedAt": "2026-07-23T23:20:40.940115+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_observer_lens": {
    "id": "almost_edge_observer_lens",
    "name": "Observer's Lens of the Forgotten",
    "description": "This ancient lens, crafted from forgotten glass and bound by spectral threads, allows its wielder to glimpse into the past of those who have perished in the void. It provides fleeting visions that can reveal hidden paths but also leaves the beholder with a lingering sense of unease, as if watching someone else’s final moments. Rumors say that staring too long into this lens could cause one to see their own demise.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👁️",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Glimpse into Past",
      "Faint Sense of Unease"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse into Past",
        "rules": "When the user gazes through the lens, they can attempt to learn a secret or hidden path related to an individual who has passed. This requires a successful Wisdom (Perception) check against a DC of 12. The effect is instantaneous and can be used once per day."
      },
      {
        "title": "Faint Sense of Unease",
        "rules": "The lens exerts a subtle psychological effect, causing the user to feel uneasy for one minute after use. This condition ends when the user completes a short rest or takes an action to focus their mind on something else. The effect can be resisted with a successful Wisdom saving throw (DC 10)."
      }
    ],
    "levelRequirementReason": "The lens requires basic perception skills, making it accessible to lower-level characters.",
    "vendorReason": "The Liminal Trader specializes in relics and artifacts from the forgotten realms, thus this item fits well within their inventory.",
    "shippingDetail": "Ships via spectral courier, ensuring safe arrival but with a slight delay due to ethereal travel.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect",
      "endsWhen": "After one use per day or when the user completes a short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its rarity and unique abilities, offering players an intriguing option for exploration.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:20:52.146386+00:00",
    "aiReviewedAt": "2026-07-23T23:20:52.146386+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_boar_charm": {
    "id": "animatopia_boar_charm",
    "name": "Boar's Fury Amulet",
    "description": "Crafted from the tusk of a sacred boar revered in the ancient forests of Animatopia, this amulet is said to channel the beast's raw fury into its wearer. When donned, it imbues you with a righteous rage that can turn even the most timid warrior into a berserk combatant, dealing increased damage and giving you a chance to stagger foes. However, prolonged use comes at a cost—your head may throb with a relentless headache until the amulet's effects subside.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐗",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased_attack_damage",
      "chance_to_stagger"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_monkey",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Increased Attack Damage",
        "rules": "When you attack, increase your damage roll by +1d6. This effect lasts for the duration of a short rest."
      },
      {
        "title": "Chance to Stagger",
        "rules": "Once per long rest, when you hit an enemy with a melee attack, there is a 20% chance to cause them to fall prone and be stunned until the start of your next turn. This effect does not stack."
      }
    ],
    "levelRequirementReason": "Only those experienced in combat can harness this amulet's fury without succumbing to its primal power.",
    "vendorReason": "The tribal trader has a deep connection with the forest spirits, allowing them to offer rare items like the Boar's Fury Amulet.",
    "shippingDetail": "Ships quickly via winged monkey courier, arriving within days of purchase.",
    "usage": {
      "activation": "Automatic upon donning the amulet; ends at the start of your next turn or when removed.",
      "duration": "Until the start of your next turn after removal",
      "endsWhen": "At the start of your next turn after removing the amulet, or if you are knocked unconscious.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rarity and mystical craftsmanship required to create this amulet justify its moderate price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T23:21:17.935034+00:00",
    "aiReviewedAt": "2026-07-23T23:21:17.935034+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_honeycomb_potion": {
    "id": "animatopia_honeycomb_potion",
    "name": "Buzzing Bliss Brew",
    "description": "Buzzing Bliss Brew is a golden, viscous potion derived from the rare nectar collected by iridescent giant bees that dwell deep within the heart of Animatopia's Whispering Woods. This enchanted honey, known for its healing properties and potent energy boost, temporarily grants you the grace and speed of a frenzied squirrel, allowing you to dart through dense underbrush with ease. Upon imbibing, your agility soars, making you nearly impossible to catch in a race against time.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍯",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_movement_speed_25",
      "temporary_agility_boost"
    ],
    "vendor": "forest_market",
    "shippedBy": "Giant Bee Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Movement Speed (25 ft.)",
        "rules": "By drinking Buzzing Bliss Brew, you gain a +10 foot movement speed bonus for 1 minute. This effect is instantaneous upon consumption and ends when the duration expires or if you fall unconscious."
      },
      {
        "title": "Temporary Agility Boost",
        "rules": "For the duration of the effect, your Dexterity (Athletics) checks are made at advantage. This bonus lasts until the end of the 1-minute period, after which it is lost and cannot be reapplied for another hour."
      }
    ],
    "levelRequirementReason": "This potion offers a mild boost suitable for beginners to enhance their movement speed and agility.",
    "vendorReason": "The forest market specializes in exotic and natural products, including the honey from which this brew is made.",
    "shippingDetail": "Delivered by a giant bee courier who ensures timely delivery to all locations within Animatopia.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "1 minute, recharges after 1 hour.",
      "endsWhen": "Ends when the duration expires or if you fall unconscious.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects the rare ingredients and the complex brewing process, making it a valuable yet accessible potion for adventurers.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T23:21:02.747791+00:00",
    "aiReviewedAt": "2026-07-23T23:21:02.747791+00:00",
    "aiReviewVersion": 1
  },
  "internet_faction_access_badge": {
    "id": "internet_faction_access_badge",
    "name": "Data Tribe Recognition Badge",
    "description": "The Data Tribe Recognition Badge, a sleek metallic disc embossed with the emblem of the 'Pixel Pioneers,' opens doors to exclusive cyber-markets and digital enclaves. Wielded by those who dare to explore the depths of data, it grants access to rare treasures and secret codes, while also increasing your reputation within the faction. This badge is a symbol of trust and respect among the data miners and algorithm enthusiasts, but beware—its power draws both admiration and envy from other factions.",
    "category": "faction",
    "price": 1000,
    "icon": "🔑",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Access to exclusive cyber-markets",
      "Increased rarity item drop chance"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Exclusive Access",
        "rules": "Activates as a bonus action. While wearing this badge, you gain access to exclusive locations within the digital realm, allowing you to explore and interact with restricted areas. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Enhanced Rarity Drops",
        "rules": "Whenever you find an item in a digital location, there is a +10% chance that rare items are found instead of common ones. This effect applies once per short or long rest and resets after 24 hours."
      }
    ],
    "levelRequirementReason": "Requires proficiency with technology to fully appreciate the badge's power.",
    "vendorReason": "The cyber_market is trusted by Pixel Pioneers for its integrity and access to exclusive resources.",
    "shippingDetail": "Ships via fast delivery drone, ensuring swift arrival of the badge within a week.",
    "usage": {
      "activation": "Bonus action to activate, lasts until end of next long rest.",
      "duration": "Until the end of your next long rest.",
      "endsWhen": "The long rest ends or you remove it from your person.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility and the faction's prestige.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:21:05.663533+00:00",
    "aiReviewedAt": "2026-07-23T23:21:05.663533+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_runeofdespair": {
    "id": "warhammer_runeofdespair",
    "name": "Rune of Despair",
    "description": "The Rune of Despair, a warhammer forged in the shadowed forges of Fate Forge, is etched with runes that whisper of shattered hopes and broken spirits. Its weight seems to pull at your very resolve as you wield it, and its blows deliver not just physical damage but a chilling wave of despair that can rend the morale of even the most stalwart warriors. Each strike has a 5% chance to leave your foes shaken, their courage turned to dread.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 20,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "despair",
      "morale reduction"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Despair",
        "rules": "When you hit with the Rune of Despair, there is a 5% chance that your target must make a Wisdom saving throw. On a failed save, they are frightened until the end of their next turn and take an additional 1d6 + your Strength modifier psychic damage."
      },
      {
        "title": "Morale Reduction",
        "rules": "For every three foes you strike with the Rune of Despair in a combat encounter, the morale of all friendly units within 30 feet is reduced by one step on the Morale table. This effect lasts for the duration of the encounter."
      }
    ],
    "levelRequirementReason": "This ancient weapon requires a proficient user who has faced significant trials to wield its dark magic effectively.",
    "vendorReason": "Fate Forge is known for crafting items imbued with powerful and often controversial magics, making the Rune of Despair a natural addition to their stock.",
    "shippingDetail": "Shipped via Drone Delivery's Express Service, the Rune of Despair arrives swiftly, though it is recommended that only those who have faced significant trials in combat attempt its use.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect per strike; lasts until end of turn for failed saves.",
      "endsWhen": "Exhausted after three uses per encounter, recharges at dawn.",
      "charges": "3 uses"
    },
    "priceReason": "Balanced to be a valuable asset in the hands of a seasoned warrior, this weapon's price reflects its rarity and unique abilities.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:21:46.701227+00:00",
    "aiReviewedAt": "2026-07-23T23:21:46.701227+00:00",
    "aiReviewVersion": 1
  },
  "chaos_rune_scroll": {
    "id": "chaos_rune_scroll",
    "name": "Scroll of Unraveling Fate",
    "description": "Unleash the Scroll of Unraveling Fate, a chaotic rune scroll that shimmers with an unsettling vibrancy. When unfurled, it grants a temporary boon to your luck and the ability to subtly alter events, though the threads of fate are fickle—unpredictable chaos might unravel in unexpected ways. The scroll's power is both liberating and perilous, offering fleeting moments of divine intervention or malevolent disruption, depending on the whims of fate.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Boosted Luck",
      "Reroll Failed Checks"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Swift Delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Boosted Luck",
        "rules": "Upon activation, you gain advantage on one ability check. This effect lasts for a number of rounds equal to your Wisdom modifier (minimum of 1). The scroll can be used once per short or long rest."
      },
      {
        "title": "Reroll Failed Checks",
        "rules": "You may use this scroll as an action to reroll one ability check you have already made. If the result is not to your satisfaction, you must accept it; however, you can do so only once per day."
      }
    ],
    "levelRequirementReason": "This scroll's chaotic energy requires a practitioner of at least 10th level to wield its unpredictable power.",
    "vendorReason": "The Chaos Dealer is known for their extensive knowledge and access to the most volatile and dangerous items, including this fickle rune scroll.",
    "shippingDetail": "Due to the scroll's volatile nature, it must be delivered via Swift Delivery's fastest couriers who are specially trained in handling such delicate artifacts.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts for a number of rounds equal to your Wisdom modifier (minimum of 1)",
      "endsWhen": "The scroll is used up after the duration expires or if you use it again before resting",
      "charges": "Unlimited uses, but only one per short or long rest"
    },
    "priceReason": "The Scroll of Unraveling Fate is priced at 1000 XP to reflect its chaotic power and the risk it poses.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:21:29.044756+00:00",
    "aiReviewedAt": "2026-07-23T23:21:29.044756+00:00",
    "aiReviewVersion": 1
  },
  "godly_aegis_of_doom": {
    "id": "godly_aegis_of_doom",
    "name": "Aegis of Doom - The Harbinger's Shield",
    "description": "The Aegis of Doom - The Harbinger's Shield is a heavy, dark-banded shield that emanates an oppressive aura. Its surface appears etched with ancient runes, and when lifted, it feels as though the world itself grows darker around you. This shield not only provides formidable defense but also saps the willpower of foes, leaving them reeling in fear. It is a relic forged by the hand of fate in the heart of an eternal storm.",
    "category": "equipment",
    "price": 750000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Deflects Blows",
      "Fear Aura"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Divine Messenger",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Deflects Blows",
        "rules": "When you use your reaction to deflect or take damage, the Aegis absorbs a portion of that damage. This effect can only be used once per short rest."
      },
      {
        "title": "Fear Aura",
        "rules": "Once per long rest, as a bonus action, you can unleash a wave of fear from the shield. Each creature within 10 feet must succeed on a DC 20 Wisdom saving throw or become frightened for 1 minute. A creature can repeat the save at the end of each of its turns, ending the effect on itself on a success."
      }
    ],
    "levelRequirementReason": "This shield is designed to protect those who have reached a peak in their martial prowess and are ready for the most dangerous challenges.",
    "vendorReason": "Fate Forge specializes in crafting items that bridge the gap between destiny and chaos, making it fitting for such an item of profound power.",
    "shippingDetail": "Ships via Divine Messenger with a special delivery guarantee ensuring prompt and secure arrival.",
    "usage": {
      "activation": "Reaction to deflect or take damage; Bonus action to unleash fear aura",
      "duration": "Instantaneous for deflection, 1 minute for fear aura (repeats on save)",
      "endsWhen": "At the end of your next turn after using it or when you finish a short rest",
      "charges": "One charge per use"
    },
    "priceReason": "This shield's price reflects its godly rarity, powerful effects, and the intense focus required to wield such an item.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T00:01:14.219260+00:00",
    "aiReviewedAt": "2026-07-25T00:01:14.219260+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_mudcrushers_giant_snail": {
    "id": "earth_land_mudcrushers_giant_snail",
    "name": "Giant Snail Mudcrushers",
    "description": "The Giant Snail Mudcrushers are formidable relics harvested from the treacherous Sludge Swamps, their carapaces as tough as ancient stone. When shattered against an enemy's armor, they unleash a thick, noxious mud that clings and slows foes for ten feet around, turning the battlefield into a quagmire of sticky chaos. Crafted by Wario himself, these snail shells are not only durable but also imbued with his signature goo, dealing moderate physical damage to any who dare approach too closely.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐌",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "slow_target_3",
      "damage_moderate_physical"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "wagon",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Mudclutch Slow",
        "rules": "When the Giant Snail Mudcrushers are shattered, they unleash a burst of mud that targets all creatures within a 10-foot radius. These creatures must succeed on a DC 14 Dexterity saving throw or be slowed (movement halved) for 1 minute. The effect ends if the creature moves more than 10 feet from its original position."
      },
      {
        "title": "Mudclutch Damage",
        "rules": "On a successful hit, the Giant Snail Mudcrushers deal 2d6 points of bludgeoning damage to the target. Additionally, any creature within 5 feet that starts its turn there must succeed on a DC 14 Dexterity saving throw or take 2d6 points of bludgeoning and poison damage."
      }
    ],
    "levelRequirementReason": "The snail shells are crafted with specialized techniques and materials, making them difficult to use for characters below the level requirement.",
    "vendorReason": "The Guild Quartermaster is known for its extensive supply of rare and exotic items used by adventurers in their quests.",
    "shippingDetail": "Shipped via a sturdy wagon, the Giant Snail Mudcrushers are delivered with care to ensure they arrive intact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends if the item is destroyed or the target moves more than 10 feet from its original position.",
      "charges": "Uses 1 of 3"
    },
    "priceReason": "Crafted by Wario and sourced from rare Sludge Swamp materials, these powerful relics are priced accordingly.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:21:45.617453+00:00",
    "aiReviewedAt": "2026-07-23T23:21:45.617453+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_whispering_shard_dragon": {
    "id": "earth_land_whispering_shard_dragon",
    "name": "Whispering Shard of the Dragon's Fury",
    "description": "The Whispering Shard of the Dragon's Fury is a jagged fragment of obsidian encrusted with emerald scales. It crackles with raw, untamed fire magic and whispers of ancient power. When activated, it grants you a fleeting surge of strength akin to a dragon's fury, but prolonged use can drive you mad, as if the shard feeds on your sanity. Be wary; this is no ordinary relic for the faint at heart.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔥",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "fire_damage",
      "chance_confusion"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying_carpet",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Fury of the Flame",
        "rules": "When activated as a bonus action, you gain temporary hit points equal to your level + your Strength modifier. These last for 1 minute and can be renewed once per short or long rest."
      },
      {
        "title": "Maddening Whispers",
        "rules": "There is a 20% chance each round that the shard will cause you to become confused until the start of your next turn, unless you succeed on a DC 15 Wisdom saving throw. This effect ends when you are incapacitated or if you take any action other than moving."
      }
    ],
    "levelRequirementReason": "The shard’s power is too volatile for those who lack the discipline to control such raw magic.",
    "vendorReason": "The Magic Shop specializes in rare and dangerous artifacts, making it a fitting vendor for this unpredictable relic.",
    "shippingDetail": "Delivered swiftly by enchanted flying carpets, ensuring the shard arrives intact and potent.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute (renewable once per rest)",
      "endsWhen": "You are incapacitated or take an action other than moving",
      "charges": "Unlimited"
    },
    "priceReason": "The item's raw power, rare material, and the risk it poses justify a premium price.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T23:21:41.955918+00:00",
    "aiReviewedAt": "2026-07-23T23:21:41.955918+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_warpstone_beetle": {
    "id": "earth_land_warpstone_beetle",
    "name": "Warpstone Beetle's Echo",
    "description": "The Warpstone Beetle's Echo is a shimmering, iridescent beetle shell that hums with latent dimensional energy. It can be activated to create a brief, unstable rift in reality—perfect for a quick escape or an impromptu ambush. However, the rift's instability means you risk being pulled through if you're not careful. The beetle's origin is shrouded in ancient lore, said to have been crafted by long-forgotten sorcerers who sought to harness the raw power of warpstone.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 23,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "teleport_short_range",
      "illusionary_rift"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "swift_wing_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport Short Range",
        "rules": "When activated, the beetle creates an unstable rift that teleports you up to 30 feet away from your current location. This effect is instantaneous and has a 10% chance of leaving you on the wrong side of the rift if used. You can use this feature once per long rest."
      },
      {
        "title": "Illusionary Rift",
        "rules": "The rift created by the beetle appears real to nearby creatures, giving them the impression that a portal exists. This illusion lasts for 1 minute and has a save DC of 13. Creatures can make a Wisdom saving throw against this effect; on a successful save, they realize it's an illusion."
      }
    ],
    "levelRequirementReason": "The item requires only level 1 to use due to its versatile and less powerful effects.",
    "vendorReason": "The Earth Emporium specializes in rare and exotic curiosities, including magical artifacts like the Warpstone Beetle's Echo.",
    "shippingDetail": "Shipped via Swift Wing Hawk for expedited delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The rift dissipates after the duration or if you are teleported through it.",
      "charges": "Recharge on a long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's moderate power and utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:21:56.447029+00:00",
    "aiReviewedAt": "2026-07-23T23:21:56.447029+00:00",
    "aiReviewVersion": 1
  },
  "fate_shadowbinder": {
    "id": "fate_shadowbinder",
    "name": "Fate's Shadowbinder - A Ritual of Uncertainty",
    "description": "Fate's Shadowbinder, a black obsidian pendant adorned with enigmatic carvings that whisper of forgotten rituals and lost destinies, pulses with an unsettling energy that warps perception and sows doubt among its foes. Its wearer finds themselves surrounded by a veil of uncertainty, making their enemies question reality itself. This artifact is a relic from the twilight realms where fate bends to the whims of shadowy forces; Wario's cryptic warnings suggest it should be wielded with caution, especially in high-stakes situations.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 10,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Uncertainty Aura",
      "Perception Boost"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Messenger Drake",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Uncertainty Aura",
        "rules": "When activated as a bonus action within 5 feet of an enemy, Fate's Shadowbinder creates an aura that imposes disadvantage on the target’s next attack roll against the wearer. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Perception Boost",
        "rules": "The wearer gains a +2 bonus to Perception checks while wearing Fate's Shadowbinder, but this bonus is negated if the wearer is under the effects of any confusion or similar effects. This benefit lasts until the start of their next turn."
      }
    ],
    "levelRequirementReason": "The intricate magic and shadowy energies require a high level of arcane knowledge to wield effectively.",
    "vendorReason": "Fate Forge specializes in crafting artifacts that bridge the gap between fate and uncertainty, making this relic a fitting addition to their inventory.",
    "shippingDetail": "Delivered by the swift Messenger Drake, known for its impeccable reliability and speed.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until the start of the wearer's next turn after using it",
      "endsWhen": "The duration ends when the wearer takes a long rest or the effect is negated by confusion or similar effects",
      "charges": "Once per long rest"
    },
    "priceReason": "The artifact's rarity and the complexity of its magic justify this fair value.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:22:11.738597+00:00",
    "aiReviewedAt": "2026-07-23T23:22:11.738597+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_doomscribe": {
    "id": "warhammer_doomscribe",
    "name": "Doomscribe - A Chronicle of Despair",
    "description": "The Doomscribe - A Chronicle of Despair is a legendary warhammer forged from the tears of forgotten gods, its head etched with prophecies of despair. As you wield it in battle, the hammer's edge leaves not only wounds but also inked predictions of doom upon your foes. The weapon grants a permanent bonus to Intimidation checks and allows you to cast 'Dark Vision' once per day, illuminating the path through darkness.",
    "category": "equipment",
    "price": 65000,
    "icon": "📜",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "writes prophecies on foes",
      "dark vision"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Hellhound Express",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Writes Prophecies On Foes",
        "rules": "When you hit a creature with this warhammer, there is a 15% chance that it also inflicts a curse which writes a prophecy of doom on the target. The prophecy grants you advantage on Intimidation checks against them for the rest of the day."
      },
      {
        "title": "Dark Vision",
        "rules": "You can cast 'Dark Vision' once per long rest as an action, allowing you to see in darkness within 60 feet as if it were bright light. This effect lasts for 10 minutes or until dispelled."
      }
    ],
    "levelRequirementReason": "Only the most seasoned warriors can wield this powerful and dangerous weapon.",
    "vendorReason": "The chaos dealer deals in items that blur the line between reality and nightmare, making the Doomscribe a fitting addition to their inventory.",
    "shippingDetail": "Due to its volatile nature, shipping is handled by Hellhound Express with strict safety protocols ensuring it reaches its destination intact.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous for 'writes prophecies on foes', 10 minutes for 'Dark Vision'",
      "endsWhen": "The effect ends when the creature is healed or the spell's duration expires",
      "charges": "Unlimited, but only one use of 'Dark Vision' per long rest"
    },
    "priceReason": "The Doomscribe’s unique abilities and its connection to forgotten gods make it an incredibly valuable and rare item.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:22:40.571046+00:00",
    "aiReviewedAt": "2026-07-23T23:22:40.571046+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_generator": {
    "id": "internet_meme_generator",
    "name": "The LOL-inator 5000",
    "description": "The LOL-inator 5000 is a portable machine that spits out digital laughter and confusion, crafted from salvaged internet hardware and vintage circuit boards. When activated, it projects a field of meme-infused energy, causing nearby foes to stumble in fits of uncontrollable giggles while temporarily boosting the morale of allies within its radius. The device’s core component is a rare crystal that channels the essence of countless viral moments into a single pulse of digital chaos.",
    "category": "services",
    "price": 1000,
    "icon": "😂",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Area of Confusion",
      "Boost Morale"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Data Stream Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Area of Confusion",
        "rules": "When activated, the LOL-inator creates a 15-foot radius area centered on its wielder. All creatures within this area must succeed on a DC 14 Wisdom saving throw or become confused until the start of their next turn."
      },
      {
        "title": "Boost Morale",
        "rules": "All friendly characters and creatures within the same area gain advantage on saving throws against fear and charm effects, as well as a +2 bonus to attack rolls, for 1 minute. This effect ends if the creature leaves the area or if it is reduced to 0 hit points."
      }
    ],
    "levelRequirementReason": "The device requires basic mechanical understanding and coordination to operate effectively.",
    "vendorReason": "Pixel Shop specializes in quirky, tech-savvy gadgets that push the boundaries of conventional magic.",
    "shippingDetail": "Ships via Data Stream Express within 3 days. Special handling required for fragile electronic components.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn or until you deactivate it",
      "endsWhen": "The start of your next turn, if not deactivated earlier",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects the cost of rare components and intricate craftsmanship required for such a device.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-23T23:22:23.429636+00:00",
    "aiReviewedAt": "2026-07-23T23:22:23.429636+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_merchant_favor": {
    "id": "midlands_item_merchant_favor",
    "name": "Guildmaster's Grudging Blessing",
    "description": "The Guildmaster's Grudging Blessing is a small, intricately carved wooden token that exudes an aura of stern disapproval. Crafted from the sacred wood of the Merchant’s Guild, it carries with it centuries-old lore and a reputation for making even the most obstinate merchants reconsider their stance. This token not only boosts your standing within the guild but also ensures you receive favorable treatment when purchasing goods from affiliated vendors.",
    "category": "faction",
    "price": 1000,
    "icon": "💰",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 Reputation Boost",
      "Discounts on Goods"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "courier_hawk_squadron",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reputation Boost",
        "rules": "Activating this token grants +1 reputation with the Merchant’s Guild. This effect lasts until your next long rest, and it can be used once per day."
      },
      {
        "title": "Discounts on Goods",
        "rules": "When you use this token to make a purchase from a guild-affiliated vendor, you receive an immediate 10% discount on the total cost of goods. This effect is instantaneous and does not require any action."
      }
    ],
    "levelRequirementReason": "This item's benefits are accessible early in your adventuring career to encourage interaction with local merchants.",
    "vendorReason": "The Midland Merchant is a key figure within the Merchant’s Guild and thus sells items that boost guild reputation and relations.",
    "shippingDetail": "Ships via Courier Hawk Squadron, known for its swift and reliable service.",
    "usage": {
      "activation": "Object Interaction or as a Bonus Action",
      "duration": "Instantaneous; lasts until your next long rest",
      "endsWhen": "The effect ends upon the completion of your next long rest. The token can be used once per day.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item's price reflects its rare and valuable association with the Merchant’s Guild, providing significant benefits at an accessible cost.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:22:38.404859+00:00",
    "aiReviewedAt": "2026-07-23T23:22:38.404859+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_goblin_grapple": {
    "id": "middle_earth_goblin_grapple",
    "name": "Gimli's Grasping Gauntlet",
    "description": "Gimli's Grasping Gauntlet is a surprisingly comfortable leather gauntlet forged by a mischievous goblin tinkerer. This dwarven relic not only allows you to grapple enemies with ease but also grants the wearer the ability to traverse treacherous terrain as if it were solid ground, making it invaluable for both combat and escape. The gauntlet's minor earth enchantment ensures that its wearer can rely on it in moments of need, whether facing a grumpy dwarf or scaling steep cliffs.",
    "category": "equipment",
    "price": 1000,
    "icon": "💪",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "grapple_enemy",
      "climb_terrain"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "wagon",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Grapple Enemy",
        "rules": "As a bonus action, you can use the gauntlet to grapple an enemy within reach. The gauntlets' enchantment allows you to maintain your grip even if the creature struggles. This effect requires no attack roll."
      },
      {
        "title": "Climb Terrain",
        "rules": "You can walk across difficult terrain as though it were flat ground, including narrow ledges and treacherous slopes. This benefit lasts for 1 hour or until you rest."
      }
    ],
    "levelRequirementReason": "The gauntlet's enchantments require a high degree of strength and dexterity, suitable only for those of at least 6th level.",
    "vendorReason": "Only the dwarves' master blacksmiths can craft such finely tuned equipment.",
    "shippingDetail": "Ships via sturdy wagon, often delayed by mountain passes and treacherous terrain.",
    "usage": {
      "activation": "Bonus action for grapple enemy; passive benefit for climbing terrain",
      "duration": "Grapple lasts until the gauntlet is removed or the creature breaks free. Climbing terrain lasts for 1 hour or until you rest.",
      "endsWhen": "The gauntlets are removed, a creature breaks free from your grasp, or you take enough damage to drop unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its utility in combat and exploration, the gauntlet's enchantment is moderately powerful but not game-breaking.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:22:27.921906+00:00",
    "aiReviewedAt": "2026-07-23T23:22:27.921906+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_whisperwind": {
    "id": "middle_earth_elven_whisperwind",
    "name": "Silvanus's Swiftfoot Sandals",
    "description": "Silvanus's Swiftfoot Sandals are crafted from enchanted willow wood and woven with threads of moonlight. These elven sandals allow their wearer to move like a whisper on the wind, blending seamlessly into the forest canopy. The wearer can feel the very essence of nature flowing through their steps, but beware—these shoes carry an ancient curse: any who wear them for too long risk being ensnared by the very trees they seek to outrun.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "speed_boost_2",
      "nature_blending"
    ],
    "vendor": "elven_market",
    "shippedBy": "hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "As a bonus action, the wearer can activate the sandals' magic for an instantaneous boost. This grants them a +2 bonus to their walking speed until the start of their next turn."
      },
      {
        "title": "Nature Blending",
        "rules": "While wearing these sandals, the wearer gains advantage on Dexterity (Stealth) checks made in forested areas. However, if they remain idle for more than 10 minutes within a forest, there is a cumulative -1 penalty to their movement speed starting at sunset, increasing by another -1 every hour until it reaches -5."
      }
    ],
    "levelRequirementReason": "These sandals are designed for the quick-footed and nimble, requiring no more than basic agility.",
    "vendorReason": "The elves of Mirkwood trust the market to sell their enchanted crafts to those who truly appreciate their craftsmanship.",
    "shippingDetail": "Quickly dispatched by a swift hawk, these sandals arrive within three days, but may require a special forest courier for delivery into deeper woods.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous boost; until start of next turn after activation",
      "endsWhen": "The wearer stops moving or the effect is dispelled",
      "charges": "Unlimited, but only one boost per short rest"
    },
    "priceReason": "The enchantments and materials used in crafting these sandals significantly increase their value.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:23:02.166031+00:00",
    "aiReviewedAt": "2026-07-23T23:23:02.166031+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_apple_of_discord": {
    "id": "equestria_item_apple_of_discord",
    "name": "Apple of Discord (Repaired)",
    "description": "The Apple of Discord, repaired but not perfectly restored, still exudes a faint aura of chaos. Its surface is marred by subtle cracks that shimmer and shift under the light, hinting at its turbulent past. This relic might cause minor disruptions, such as turning your armor an iridescent pink or causing sudden cravings for sugary treats, but it also grants temporary charisma boosts and minor healing to those who wield it with care.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍎",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Charisma Boost",
      "Minor Healing"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Delivery Swifts",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When activated as a bonus action, the Apple of Discord grants the user a +2 charisma bonus for 1 hour. This effect ends if the user takes any harmful damage or if they voluntarily stop concentrating on it."
      },
      {
        "title": "Minor Healing",
        "rules": "Activating the Apple of Discord during combat provides you with temporary hit points equal to 1d6 + your charisma modifier. This effect can be used once per long rest and is expended immediately after use."
      }
    ],
    "levelRequirementReason": "Even a novice adventurer might benefit from the minor chaos and healing effects of this repaired artifact.",
    "vendorReason": "The Crystal Empire, known for its mastery over elements, has taken it upon itself to repair and distribute this legendary relic responsibly.",
    "shippingDetail": "Delivered swiftly by the Crystal Delivery Swifts, ensuring that the apple arrives in pristine condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour or Until Disrupted",
      "endsWhen": "Harmful Damage or Voluntary End of Concentration",
      "charges": "Once per Long Rest"
    },
    "priceReason": "The balanced price reflects the item's unique effects, its potential for minor chaos, and its limited rest-based use.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T23:23:06.113163+00:00",
    "aiReviewedAt": "2026-07-23T23:23:06.113163+00:00",
    "aiReviewVersion": 1
  },
  "internet_cyber_guild_badge": {
    "id": "internet_cyber_guild_badge",
    "name": "Access Pass - The Glitch Collective",
    "description": "The Access Pass - The Glitch Collective is a sleek, matte-black badge adorned with glitched text and neon accents that pulse faintly in the dark. It grants its bearer access to exclusive data streams and secret cybernetic enhancements, though one must tread carefully, for the Glitch Collective deals in shadowy services that blur the line between friend and foe. This badge is a symbol of both prestige and peril, offering discounts at the cyber market but also carrying with it rumors of dangerous experiments and illicit dealings.",
    "category": "faction",
    "price": 1000,
    "icon": "💻",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Access to exclusive data streams",
      "Cybernetic enhancements"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Packet Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Exclusive Data Streams",
        "rules": "Upon activation, the bearer gains advantage on Intelligence (Computers) checks for 1 hour. This effect ends if the bearer is knocked unconscious or if they use this ability again within a day."
      },
      {
        "title": "Cybernetic Enhancements",
        "rules": "The badge grants temporary hit points equal to twice the user's level, which are lost when the bearer takes damage. The effects of this enhancement last for 1 hour and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Accessing the Glitch Collective’s data streams and enhancements requires a certain degree of experience to navigate such treacherous cyber realms.",
    "vendorReason": "The cyber market is a hub for all things digital, where the Access Pass - The Glitch Collective is traded among hackers and tech enthusiasts who seek to expand their capabilities.",
    "shippingDetail": "Ships via Packet Relay within 24 hours of purchase; delivery may be delayed by network congestion.",
    "usage": {
      "activation": "Uses an action to activate the data stream or enhancements.",
      "duration": "One hour for data streams, one hour for cybernetic enhancements.",
      "endsWhen": "The effects expire when their duration ends or if the bearer takes damage.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP, this badge offers significant utility without being overpowered for its uncommon rarity.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T23:23:06.269676+00:00",
    "aiReviewedAt": "2026-07-23T23:23:06.269676+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_whispering_scrolls": {
    "id": "faerun_item_whispering_scrolls",
    "name": "Whispering Scrolls of Divination",
    "description": "Whispering Scrolls of Divination are brittle and adorned with ancient runes that seem to glow faintly under torchlight, as if whispering secrets from long-forgotten times. These scrolls murmur prophecies that, while often humorous and absurd—most involving dire fates for a whimsical character named Wario—are surprisingly accurate in guiding you away from impending calamity or at least towards a good laugh. Decipher them with time, and you might just avoid disaster—or, at the very least, find yourself chuckling through it.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_divination_effect_once",
      "increased_luck"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Divination Effect",
        "rules": "As a bonus action, you can activate one scroll to gain a divination effect that provides insight into an upcoming event or situation. The effect lasts for 1 hour and gives you advantage on the next roll related to the event. You must rest for at least 8 hours before using another scroll."
      },
      {
        "title": "Increased Luck",
        "rules": "While deciphering a Whispering Scroll, you gain a +2 bonus to all saving throws until the end of your next short or long rest. This effect does not stack with other sources of luck bonuses."
      }
    ],
    "levelRequirementReason": "These scrolls are accessible to beginners as they offer an easy way to enhance one's fortune and decision-making.",
    "vendorReason": "Baldur, the patron of good fortune, would approve of these scrolls, which help players navigate their adventures with a touch more luck and insight.",
    "shippingDetail": "Delivered swiftly by enchanted flying carpets that weave through the skies with minimal delay.",
    "usage": {
      "activation": "Bonus action to activate or passive while deciphering.",
      "duration": "Instantaneous effect, lasting for 1 hour upon activation. Ends when used up.",
      "endsWhen": "The effect ends after 1 hour or if you use another scroll before the first one expires.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The scrolls are considered rare due to their ancient craftsmanship and the mystical energy they contain, making them a valuable asset for any adventurer.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:23:08.921235+00:00",
    "aiReviewedAt": "2026-07-23T23:23:08.921235+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_gloomstone_amulet": {
    "id": "faerun_item_gloomstone_amulet",
    "name": "Gloomstone Amulet of Shadowed Dreams",
    "description": "The Gloomstone Amulet of Shadowed Dreams pulses with an unsettling darkness that seems to shift and pulse in time with your heartbeat. Its surface glows faintly, casting a shadowy glow upon you, and whispers of forgotten dreams echo within its core. This amulet can either grant you the power to manipulate shadows or unleash terrifying nightmares if worn too long, but beware—those who wear it often find themselves drawn to collecting shiny objects they cannot resist.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "shadow_control",
      "nightmare_prone"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Duskwind Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Shadow Control",
        "rules": "As an action, you can emit a shadowy projection from the amulet. This creates a 10-foot-radius sphere of dim light centered on yourself for 1 minute. You have advantage on Dexterity (Stealth) checks until the end of your next turn after using this feature."
      },
      {
        "title": "Nightmare Prone",
        "rules": "While wearing the amulet, you have a 25% chance each night to be visited by a nightmare. If this occurs, roll a d8 + your Charisma modifier for the duration of the nightmare in hours. You gain advantage on saving throws against being charmed or frightened until the end of your next turn after waking up from the nightmare."
      }
    ],
    "levelRequirementReason": "This amulet requires a minimum level to harness its power and avoid the risk of unwanted nightmares.",
    "vendorReason": "Waterdeep's Market is known for exotic curiosities, making it an ideal vendor for such an enigmatic artifact.",
    "shippingDetail": "Ships via Duskwind Express; may take up to a week depending on your location.",
    "usage": {
      "activation": "Action: Emit shadow projection, Reaction: Nightmare prevention (if rolled) or advantage on Stealth checks immediately after.",
      "duration": "Shadow projection lasts for 1 minute. Nightmares last until the end of the duration.",
      "endsWhen": "The amulet's effects end when you remove it, are destroyed by a dispel magic spell, or if you roll a nightmare and choose to sleep elsewhere.",
      "charges": "Unlimited; regenerates after a long rest."
    },
    "priceReason": "The price reflects the amulet's unique abilities, rarity, and the risk involved with its use.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:23:32.368433+00:00",
    "aiReviewedAt": "2026-07-23T23:23:32.368433+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_goblin_giggles": {
    "id": "faerun_item_potion_of_goblin_giggles",
    "name": "Potion of Goblin Giggles",
    "description": "Brewed in the shadowy glades of the Forgotten Realms, this potion distills the mischievous spirit of goblins into a vial of bubbling green liquid. Sip it and prepare for an uncontrollable giggle fest; you'll find yourself laughing at every misstep, no matter how trivial or inappropriate the situation may be. The potion's creator, known only as 'Goblin Jester', ensures that each sip is a reminder of their joyous brand of pranks.",
    "category": "consumables",
    "price": 1000,
    "icon": "😂",
    "stock": 32,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "laughing_gales",
      "confusion"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Laughing Gales",
        "rules": "Upon consuming the potion, you are enveloped in an uncontrollable fit of giggles. This effect lasts for a number of rounds equal to your Constitution modifier (minimum 1 round). Any attempt to speak or cast verbal spells is met with further laughter, causing disadvantage on all such rolls."
      },
      {
        "title": "Confusion",
        "rules": "For the duration of the Laughing Gales effect, you are considered confused. This means that at the start of your turn, roll a d4 to determine an action: 1 - Attack nearest creature, 2 - Cast a spell, 3 - Move up to half speed, 4 - Do nothing. If an ally acts adjacent to you, they can use their reaction to shake off this effect."
      }
    ],
    "levelRequirementReason": "This potion is accessible to all adventurers as it is a common item that can be found in many shops.",
    "vendorReason": "Baldur's Bazaar is known for offering a wide array of magical and mundane items, including whimsical potions like this one.",
    "shippingDetail": "The messenger hawk delivers the potion swiftly, ensuring it arrives fresh and potent.",
    "usage": {
      "activation": "Drink",
      "duration": "Instantaneous (effect lasts for a number of rounds equal to your Constitution modifier)",
      "endsWhen": "The duration ends when you are incapacitated or die",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the unique brewing process and the magical essence infused into each vial.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T23:23:35.750684+00:00",
    "aiReviewedAt": "2026-07-23T23:23:35.750684+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_ironclad_banner": {
    "id": "warhammer_ironclad_banner",
    "name": "Ironclad Banner Warhammer",
    "description": "The Ironclad Banner Warhammer is a fearsome warhammer that commands both fear and respect. Its banner, forged from iron and inscribed with ancient runes, can be seen flapping in battle, rallying nearby troops to your cause. Rumor has it that those who wield it gain a small measure of influence over the battlefield, though only for as long as the hammer's might is felt. Wielders report an increase in their allies' morale and a subtle but noticeable decrease in enemy aggression within close proximity.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚩",
    "stock": 33,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "banner_of_command",
      "fearful_presence"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Imperial Post",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Banner of Command",
        "rules": "When the Ironclad Banner Warhammer is swung, it grants a +1 bonus to Charisma (Persuasion) checks made within 30 feet. This effect lasts until the end of your next turn."
      },
      {
        "title": "Fearful Presence",
        "rules": "Once per short rest, the wielder can cause nearby enemies to falter. Until the start of their next turn, all hostile creatures within 10 feet have disadvantage on attack rolls against you and any creature within 10 feet of you."
      }
    ],
    "levelRequirementReason": "Wielding this powerful weapon requires a certain degree of strength and battle experience.",
    "vendorReason": "Fate Forge is renowned for crafting legendary weapons, making the Ironclad Banner Warhammer a fitting addition to their inventory.",
    "shippingDetail": "Ships via Imperial Courier with expedited delivery within 3 days of purchase.",
    "usage": {
      "activation": "On the swing or cast of the warhammer.",
      "duration": "Instantaneous, Banner of Command lasts until the end of your next turn. Fearful Presence once per short rest.",
      "endsWhen": "Banner of Command ends when you stop using it. Fearful Presence ends immediately if you are incapacitated or drop the hammer.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a common rarity, this weapon offers significant battlefield advantages while remaining within reach for players of appropriate levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:23:22.153586+00:00",
    "aiReviewedAt": "2026-07-23T23:23:22.153586+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_lantern": {
    "id": "animatopia_spirit_lantern",
    "name": "Whispering Lantern of the Grove",
    "description": "The Whispering Lantern of the Grove is a delicate lantern hand-carved from polished oak and inlaid with silver vines. Its glow emanates from glowing moss, which whispers cryptic advice or tales of ancient forest lore, especially when you least expect it. It is known to ward off small predators like foxes and rabbits by emitting a soothing light that unsettles them, making it an invaluable companion for trekkers in the Animatopian woods.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🏮",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "ward against small predators",
      "whispers of ancient wisdom"
    ],
    "vendor": "forest_market",
    "shippedBy": "feathered_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warding Light",
        "rules": "When activated as a bonus action, the lantern emits an aura of soothing light within a 10-foot radius. This effect lasts for 1 minute and acts as a minor illusion, creating flickering lights that can ward off small predators like foxes or rabbits. The predator has advantage on its attack rolls until it leaves the area."
      },
      {
        "title": "Whispering Advice",
        "rules": "The lantern occasionally emits cryptic whispers when you are in a forested area. These whispers provide you with advantage on Survival checks within such areas, offering ancient wisdom and guidance. The whispers occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "This lantern is designed for all adventurers to use, providing immediate utility without being overly complex.",
    "vendorReason": "The forest market regularly stocks items that are useful in the Animatopian woods and this lantern is a staple among its offerings.",
    "shippingDetail": "Shipped by swift messenger, usually arriving within one day of order placement.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short or long rest for 'Whispering Advice'.",
      "duration": "Warding Light lasts 1 minute.",
      "endsWhen": "The duration ends when the lantern is extinguished, or the predator leaves the area.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility and rarity within the Animatopian market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:23:24.096372+00:00",
    "aiReviewedAt": "2026-07-23T23:23:24.096372+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_beetle_armor": {
    "id": "animatopia_beetle_armor",
    "name": "Chitinous Shellplate",
    "description": "Forged from the incredibly strong shells of giant Animatopian beetles, this plate armor offers surprisingly good protection... and a slight smell. It's surprisingly lightweight considering its defensive capabilities – perfect for quick maneuvers and getting out of trouble! Don’t complain about the faint aroma of decaying foliage as it’s paired with an enchantment that grants you resistance to poison damage from non-magical sources, and when you score a critical hit while wearing it, a small beetle swarm briefly obscures your attacker's vision, dealing 1d6 piercing damage to them. The Chitinous Shellplate is a must-have for those who need both protection and a little extra edge in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "resistance to poison",
      "beetle swarm on critical hit"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant beetle courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Resistance to Poison Damage",
        "rules": "When you take damage from a non-magical source that would deal poison damage, the damage reduces to half its normal value. This effect lasts until the start of your next turn."
      },
      {
        "title": "Beetle Swarm on Critical Hit",
        "rules": "When you score a critical hit while wearing this armor, roll 1d6 and add it to piercing damage dealt by the attack. A small swarm of beetles momentarily obscures your attacker's vision, granting them disadvantage on their next attack roll against you. This effect lasts for 1 round."
      }
    ],
    "levelRequirementReason": "This armor is designed for those who have proven their worth in battle and can handle its weighty responsibilities.",
    "vendorReason": "The Beast Bazaar specializes in exotic and enchanted items, including this armor crafted from the shells of giant Animatopian beetles.",
    "shippingDetail": "Shipped by a giant beetle courier who ensures safe delivery to your door.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous for critical hit; lasts until next turn otherwise",
      "endsWhen": "Exhausted after one use per battle or when removed from combat",
      "charges": "Unlimited, recharges upon a short rest"
    },
    "priceReason": "The Chitinous Shellplate is priced at 1000 XP due to its unique material and enchantment, providing both protection and a tactical advantage.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T23:24:30.840418+00:00",
    "aiReviewedAt": "2026-07-23T23:24:30.840418+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_shimmering_windstone": {
    "id": "teyvat_item_shimmering_windstone",
    "name": "Shimmering Windstone",
    "description": "The Shimmering Windstone radiates a warm, ethereal glow as it hums with the winds of Mondstadt. This stone grants you a minor boost in speed and agility, making your movements swift and agile. It's perfect for dodging enemies or enhancing your dexterity during critical moments. Crafted by the artisans of Mondstadt using ancient techniques passed down through generations, this stone is imbued with the very essence of the city’s winds.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Increased Speed",
      "Enhanced Agility"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swift Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Speed",
        "rules": "While holding the Shimmering Windstone, you gain a +10 foot bonus to your speed as long as you are not incapacitated. This effect is passive and lasts until you rest or stop moving."
      },
      {
        "title": "Enhanced Agility",
        "rules": "You gain advantage on Dexterity saving throws and Dexterity checks for the duration of one short rest, after which it ends. You may use this ability once per day."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners to enhance their agility and speed as they learn the ropes of adventuring.",
    "vendorReason": "The market in Mondstadt sells a variety of items that are crafted by local artisans, making it a natural place for this stone to be sold.",
    "shippingDetail": "Delivered swiftly by the trusted messengers of Mondstadt, ensuring your Shimmering Windstone arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until you rest or stop moving; once per day for Enhanced Agility.",
      "endsWhen": "At the end of a short rest; expended use ends immediately.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the item's utility and rarity, providing a good value for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:23:38.954366+00:00",
    "aiReviewedAt": "2026-07-23T23:23:38.954366+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_elemental_sparklet": {
    "id": "teyvat_item_elemental_sparklet",
    "name": "Elemental Sparklet",
    "description": "The Elemental Sparklet is a diminutive, glowing orb harvested from the turbulent waters of Liyue Harbor, where elemental forces clash in a dance of fire and lightning. When consumed, it releases an intense burst of radiant energy; you must be cautious not to unleash its fury upon yourself or your allies. This sparklet can either incinerate foes with searing flames or strike with blinding bolts of lightning, depending on the current's whims.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 89,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "deals_10_fire_damage",
      "chance_to_chain_lightning_on_hit"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Dragon Delivery Service (Slow)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Burst",
        "rules": "When consumed as a bonus action, this sparklet releases an elemental burst of fire or lightning. The target must make a DC 12 Dexterity saving throw; on a failed save, the target takes 10 fire damage (or lightning damage if used with a different element). This effect has no range and lasts until the end of your next turn."
      },
      {
        "title": "Chain Lightning",
        "rules": "If the Elemental Burst deals lightning damage to an opponent, there is a 50% chance that the burst will continue to strike up to two additional targets within 10 feet. The DC for these secondary strikes remains at 12."
      }
    ],
    "levelRequirementReason": "The sparklet's unpredictable nature requires minimal preparation, making it accessible to all adventurers.",
    "vendorReason": "As the sparklets are harvested near Liyue Harbor, it makes sense that they are sold by the bustling harbor vendors who cater to travelers.",
    "shippingDetail": "Due to its delicate nature, the Elemental Sparklet is shipped via the Dragon Delivery Service. Expect delivery delays of up to a week.",
    "usage": {
      "activation": "bonus action",
      "duration": "instantaneous; lasts until end of next turn",
      "endsWhen": "target makes successful saving throw or when used",
      "charges": "unlimited, recharged after long rest"
    },
    "priceReason": "The Elemental Sparklet's rarity and unique elemental properties justify its high price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T23:24:12.551511+00:00",
    "aiReviewedAt": "2026-07-23T23:24:12.551511+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_veil_charm": {
    "id": "teyvat_item_crimson_veil_charm",
    "name": "Crimson Veil Charm",
    "description": "The Crimson Veil Charm is a delicate pendant woven from the shimmering silk of an ancient sea serpent. It whispers tales of Inazuma's lost past, offering its wearer respite from the illusions and mental manipulations that plague the city's ever-watchful denizens. Its true power lies in its ability to protect against those who seek to cloud your mind, making it a must-have for adventurers navigating the treacherous waters of politics and intrigue.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Illusion Resistance",
      "Mental Stability"
    ],
    "vendor": "Inazuma Imports",
    "shippedBy": "Sea Serpent Courier (Very Slow)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Illusion Resistance",
        "rules": "The wearer gains resistance to illusion magic. This effect provides a +2 bonus on saving throws against illusions, and the charm can be activated as a reaction when an illusory effect is cast within 30 feet of the wearer."
      },
      {
        "title": "Mental Stability",
        "rules": "The wearer's sanity is bolstered by the charm. For the duration of one short rest, the wearer gains advantage on saving throws against effects that would reduce their Wisdom (Insight) or Intelligence (Investigation) ability checks."
      }
    ],
    "levelRequirementReason": "The charm's subtle magic is accessible to all adventurers who appreciate its value.",
    "vendorReason": "As a leading supplier of exotic goods from Inazuma, they naturally stock this unique item.",
    "shippingDetail": "The charm arrives in a sealed container, ensuring its delicate silk remains intact during transit.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous effect; lasts until the end of your next turn",
      "endsWhen": "If you are subjected to an illusion spell or effect again before the duration ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "The charm's rarity and its utility against illusions make it a valuable addition to any adventurer's arsenal.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T23:23:49.697894+00:00",
    "aiReviewedAt": "2026-07-23T23:23:49.697894+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_chronometer": {
    "id": "almost_edge_chronometer",
    "name": "Temporal Shard Regulator",
    "description": "The Temporal Shard Regulator is a gnarled crystal that hums with latent temporal energy. Its surface shimmers with threads of light and shadow, hinting at both past and future. This artifact allows its wielder to briefly accelerate their movement or glimpse potential outcomes, but prolonged use can lead to disorientation and an overwhelming yearning for sugary treats. Caution is advised; it's said the device was crafted in the twilight realms where time itself is fluid.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "accelerated_movement",
      "future_glimpse"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Accelerated Movement",
        "rules": "As a bonus action, the wielder can gain advantage on Dexterity (Acrobatics) checks and their speed increases by 10 feet for 1 minute. This effect ends early if the user is incapacitated."
      },
      {
        "title": "Future Glimpse",
        "rules": "Once per long rest, the wielder can make a Wisdom (Insight) check against a target DC of 15 to gain advantage on one ability check or saving throw made before the end of their next short or long rest."
      }
    ],
    "levelRequirementReason": "This artifact is too powerful for lower-level characters, requiring an eighth-level character to safely wield its temporal might.",
    "vendorReason": "The void merchant's connection to other planes of existence makes them a fitting vendor for this device from the twilight realms.",
    "shippingDetail": "Ships through a rift in space-time, delivery time varies but is always unpredictable.",
    "usage": {
      "activation": "Bonus action for Accelerated Movement; once per long rest for Future Glimpse",
      "duration": "1 minute or until incapacitated for Accelerated Movement; instant for Future Glimpse",
      "endsWhen": "The effect ends if the user is incapacitated or rests for 8 hours for Accelerated Movement; otherwise, it lasts until the end of their next short or long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to ensure it's a significant but not overpowered purchase for an eighth-level character.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:23:53.965613+00:00",
    "aiReviewedAt": "2026-07-23T23:23:53.965613+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_echoeservice": {
    "id": "almost_edge_echoeservice",
    "name": "Void Resonance Therapy",
    "description": "The Void Resonance Therapy is a soothing service that utilizes the residual echoes of forgotten realities, gently unraveling anxieties and mental fatigue. During treatment, your mind is bathed in a soothing hum from dimensions long lost, leaving you feeling strangely empty yet oddly content. Afterward, memories may feel slightly fuzzy but are replaced with an inexplicable sense of tranquility and clarity. This therapy is provided by the Liminal Trader, who ensures that only those truly in need find solace here.",
    "category": "services",
    "price": 1000,
    "icon": "👂",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reduce_mental_fatigue_5",
      "chance_of_temporary_inspiration"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "temporal_packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduce Mental Fatigue",
        "rules": "As a bonus action, the recipient of Void Resonance Therapy reduces their current mental fatigue by 5 points. This effect lasts for 1 hour and cannot be repeated more than once per day."
      },
      {
        "title": "Chance of Temporary Inspiration",
        "rules": "Once per short rest or upon completion of a long rest, the recipient has a chance to gain temporary inspiration equal to their level +2. This effect is rolled at the beginning of the rest and does not stack with other sources."
      }
    ],
    "levelRequirementReason": "This therapy is accessible to all who seek solace, but it remains potent enough that only those who have reached at least first level can truly benefit.",
    "vendorReason": "The Liminal Trader specializes in services that bridge the gap between worlds and minds, making them the perfect vendor for this ethereal treatment.",
    "shippingDetail": "Shipped via a temporal packet, ensuring the therapy is delivered fresh and potent. The service requires a short rest to activate after arrival.",
    "usage": {
      "activation": "Bonus action at the beginning of a long or short rest",
      "duration": "1 hour per use",
      "endsWhen": "The duration ends when the time expires or if used again within the same day",
      "charges": "Unlimited uses, but only one effect can be active at any given time"
    },
    "priceReason": "This service is priced at 1000 XP to reflect its ethereal nature and the expertise required by the Liminal Trader.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:24:17.180127+00:00",
    "aiReviewedAt": "2026-07-23T23:24:17.180127+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_godly_voidstone": {
    "id": "almost_edge_godly_voidstone",
    "name": "The Null-Heart",
    "description": "The Null-Heart is a cold, pulsating stone of absolute nothingness, its surface etched with swirling void patterns that seem to flicker like dying stars. It whispers promises of ultimate power and oblivion, but those who hold it too long risk losing touch with reality or vanishing into the void entirely. The edge_wanderer, known for their exploits in the darkest corners, occasionally offers this artifact as a special order item, though Wario advises extreme caution.",
    "category": "premium",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "void_teleport",
      "mana_regeneration"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "black_hole_delivery",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Void Teleport",
        "rules": "Using the Null-Heart allows you to attempt a teleportation spell-like effect. You must make a Wisdom saving throw (DC 15) or risk becoming disoriented and falling prone. The teleport is instantaneous, with a range of up to 30 feet. This effect can be used once per long rest."
      },
      {
        "title": "Mana Regeneration",
        "rules": "While holding the Null-Heart, you gain a +1 bonus to all mana-related spell save DCs and an increase in your maximum mana pool by 25%. The bonus lasts for the duration of one short or long rest."
      }
    ],
    "levelRequirementReason": "Only those with considerable experience and power can safely wield this artifact without succumbing to its dangers.",
    "vendorReason": "The edge_wanderer is known for their unique stock of powerful but potentially dangerous relics, including the Null-Heart.",
    "shippingDetail": "Ships via black_hole_delivery with a 24-hour turnaround time due to the exotic nature of the cargo.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for teleport, lasts until rest for mana regeneration",
      "endsWhen": "Effect ends upon successful save or at end of rest",
      "charges": "1 per long rest"
    },
    "priceReason": "The Null-Heart is a godly rarity item that offers unique and powerful abilities, but its risks make it exceptionally valuable.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T23:24:19.792542+00:00",
    "aiReviewedAt": "2026-07-23T23:24:19.792542+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_frostbite_charm": {
    "id": "earth_land_item_frostbite_charm",
    "name": "Glacier's Grin",
    "description": "Glacier's Grin is a small, icy charm that sparkles with an ethereal glow, reminiscent of frozen glaciers. Crafted by an ancient alchemist who sought to harness the essence of winter, this charm whispers with the chill of frosty winds. When worn, it subtly increases one’s ice resistance by 20%, making it a formidable ally against cold-based attacks. With each icy clash, there's a chance (15%) that foes will suffer from frostbite, slowing their movements and dealing minor damage. The charm hums with the power of winter, ensuring its wearer remains as untouchable as ice itself.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧊",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increased Ice Resistance",
      "Frostbite on Enemies"
    ],
    "vendor": "magic_shop",
    "shippedBy": "magical_messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Ice Resistance",
        "rules": "Wearing Glacier's Grin grants a +2 bonus to saving throws against cold damage. This effect lasts until the wearer takes heat-based damage or ends their turn in a warm environment."
      },
      {
        "title": "Frostbite on Enemies",
        "rules": "With each successful melee attack, there is a 15% chance that Glacier's Grin will inflict frostbite on the target. The effect deals 1d4 cold damage and reduces the target’s speed by 10 feet until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This charm is designed for those who have already mastered basic combat and spellcasting, requiring a minimum character level to effectively utilize its benefits.",
    "vendorReason": "The magic shop specializes in rare and enchanted items that enhance the capabilities of adventurers, making Glacier's Grin an ideal offering.",
    "shippingDetail": "Delivered by a swift magical messenger who ensures timely delivery to those seeking such enchantments.",
    "usage": {
      "activation": "Passive effect upon donning the charm.",
      "duration": "Until the wearer takes heat-based damage or ends their turn in a warm environment.",
      "endsWhen": "The charm's effects cease when the wearer is subjected to heat-based damage or moves into a warm area.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare glacial crystals and imbued with ancient alchemical formulas, Glacier's Grin offers significant cold resistance and battlefield utility, justifying its substantial price in experience points.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:24:34.071410+00:00",
    "aiReviewedAt": "2026-07-23T23:24:34.071410+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_jade_rune": {
    "id": "teyvat_item_jade_rune",
    "name": "Jade Serpent's Coil",
    "description": "The Jade Serpent's Coil is a delicate, coiled bracelet forged from the hardened waters of Liyue Harbor and imbued with the Geo Archon’s blessing. Its surface shimmers with elemental energy, and when worn, it weaves protective layers around you. The coil is said to have been crafted by ancient artisans who sought to harness the power of the sea itself. With a simple gesture, its verdant energies can reflect incoming damage, sparing you from harm.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Elemental Shield",
      "Damage Reflection"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Shield",
        "rules": "Activating the Jade Serpent's Coil grants a +30 bonus to your AC for 1 minute. This effect ends if you are incapacitated or if it is destroyed."
      },
      {
        "title": "Damage Reflection",
        "rules": "Once per short rest, you can reflect up to 25 points of damage taken from an attack or spell directed at you back to the attacker. The reflection occurs immediately after taking the damage and ends this effect."
      }
    ],
    "levelRequirementReason": "Beginners often find comfort in the coil's protective properties, making it accessible early on.",
    "vendorReason": "Liyue Harbor is known for its connection to the Geo Archon and the crafting of items infused with elemental powers.",
    "shippingDetail": "The coil arrives safely via a reliable cargo ship, ensuring it reaches you in perfect condition.",
    "usage": {
      "activation": "Reaction (once per short rest)",
      "duration": "1 minute or until destroyed",
      "endsWhen": "Incapacitation or destruction",
      "charges": "Unlimited"
    },
    "priceReason": "The jade's rarity and the Geo Archon’s blessing justify its cost, making it a valuable yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-23T23:25:15.965850+00:00",
    "aiReviewedAt": "2026-07-23T23:25:15.965850+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_stormlight_shard": {
    "id": "teyvat_item_stormlight_shard",
    "name": "Stormlight Resonance Shard",
    "description": "The Stormlight Resonance Shard is a shimmering fragment of condensed lightning, its surface crackling with electric energy that dances and refracts in myriad hues. Crafted from the very essence of storm clouds, this shard hums with latent power, capable of amplifying one's elemental prowess or serving as a dazzling deterrent. Wario, ever drawn to the extraordinary, finds this shard not only mesmerizing but also imbued with an electrifying sparkle that can dazzle even the most hardened of foes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚡",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Elemental Amplification",
      "Stunning Disruption"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "magical_teleportation",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Elemental Amplification",
        "rules": "When activated as a bonus action, this shard grants the wielder a +50 bonus to attack rolls for 10 seconds. The user must make a DC 18 Dexterity saving throw or be stunned until the end of their next turn. This effect can only be used once per long rest."
      },
      {
        "title": "Stunning Disruption",
        "rules": "Upon activation, there is a 30% chance that an enemy within 5 feet of the user will be stunned for 1 round. The save DC for this effect is also 18. This effect can only occur once per short rest."
      }
    ],
    "levelRequirementReason": "This shard's raw power demands a certain mastery over elemental magic, hence the level requirement.",
    "vendorReason": "Inazuma Imports deals exclusively in rare and exotic artifacts, making this shard an ideal addition to their collection.",
    "shippingDetail": "The shard is delivered via instantaneous magical teleportation, ensuring its arrival without delay or mishap.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds; ends when the user takes a long rest",
      "endsWhen": "Ends on successful save, after its duration expires, or if the user takes a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's legendary rarity and potent effects justify this balanced XP cost.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:25:38.801139+00:00",
    "aiReviewedAt": "2026-07-23T23:25:38.801139+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_jade_amulet": {
    "id": "teyvat_item_jade_amulet",
    "name": "Jade Amulet of Aqueous Reflection",
    "description": "The Jade Amulet of Aqueous Reflection is a shimmering, polished amulet crafted from jade, rumored to have been blessed by the Geo Archon of Liyue. This relic not only grants its wearer an ethereal glow but also subtly repels water-based attacks and enhances one's ability to command water elementals—a skill that Wario inexplicably adores. It is a symbol of ancient Geo magic, now available for those who seek to harness the elemental might of Liyue.",
    "category": "equipment",
    "price": 1000,
    "icon": "💧",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "reflect_water_attacks",
      "command_water_elemental"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Merchant Ship",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reflect Water Attacks",
        "rules": "When an attack from a water elemental or creature with a water-based ability targets the wearer, there is a 50% chance that the damage will be reflected back to the attacker. This effect has no cooldown and can occur once per encounter."
      },
      {
        "title": "Command Water Elemental",
        "rules": "By concentrating for 1 minute (action required), the wearer can command a nearby water elemental to perform minor tasks, such as creating a water shield or extinguishing small fires. This effect lasts until the elemental completes its task and has no recharge."
      }
    ],
    "levelRequirementReason": "The amulet requires significant Geo power, which is only accessible to characters of at least level 5.",
    "vendorReason": "Liyue Harbor is a hub for all things Geo magic and elemental artifacts, making it the perfect vendor for this relic.",
    "shippingDetail": "Ships typically arrive within three days of purchase, but during stormy weather, delivery may be delayed by one additional day.",
    "usage": {
      "activation": "Instantaneous; no action required except concentration during the command effect.",
      "duration": "Instantaneous and Concentration (1 minute) for command.",
      "endsWhen": "The elemental task is completed or the wearer stops concentrating.",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "The amulet's price reflects its rarity and the significant Geo power it contains, making it a valuable asset for adventurers of level 5 and above.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:24:50.255944+00:00",
    "aiReviewedAt": "2026-07-23T23:24:50.255944+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_mithril_echo": {
    "id": "middle_earth_mithril_echo",
    "name": "Resonance of Mithril's Song",
    "description": "The Resonance of Mithril's Song is a small, perfectly formed piece of mithril that hums softly with the echoes of ancient dwarven craftsmanship. When held, it resonates with the rhythmic hammering and shaping sounds of master smiths at work, creating an atmosphere both soothing and inspiring to any artisan. It also seems to draw particularly grumpy gnomes into its vicinity, a quirk that adds a delightful twist to any encounter. This relic is said to amplify the skill of those who wield it in their crafting endeavors.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "boosts_crafting_skill",
      "attracts_gnomes"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Boosts Crafting Skill",
        "rules": "While holding the Resonance, you gain advantage on all Dexterity (Sleight of Hand) and Wisdom (Insight) checks made to craft items or detect mithril deposits. This effect lasts for 10 minutes each time it is activated."
      },
      {
        "title": "Attracts Gnomes",
        "rules": "When you activate the Resonance, gnomes within a 30-foot radius have advantage on Wisdom (Perception) checks to notice you. This effect persists for 1 hour and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The intricate resonance requires a minimum level of skill to wield effectively.",
    "vendorReason": "Only the dwarves, masters of mithril and craftsmanship, can properly appreciate and sell such an artifact.",
    "shippingDetail": "Ships via dragon courier with a two-day delivery time, ensuring safe transport to your door.",
    "usage": {
      "activation": "Bonus action to activate",
      "duration": "10 minutes or until expended",
      "endsWhen": "The effect ends when the bonus action is used again or after 1 hour for gnome attraction",
      "charges": "One charge, recharged at dawn of each new day"
    },
    "priceReason": "Balanced to provide a useful crafting tool without being overpowered.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:25:52.530498+00:00",
    "aiReviewedAt": "2026-07-23T23:25:52.530498+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_compass": {
    "id": "almost_edge_item_liminal_compass",
    "name": "The Wanderer's Doubt",
    "description": "The Wanderer's Doubt is a tarnished brass compass, its needle spinning wildly and seemingly pointing in no direction at all. Yet, when you least expect it, the needle will settle on a course that feels eerily off—leading you deeper into the unsettling silence of the ancient ruins or perhaps just lost. Its unpredictable nature makes every step feel like a gamble, yet there's an uncanny chance (10%) that it might guide you to hidden paths others have missed.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧭",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Guidance with a Twist",
      "Slight Confusion"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Shifting Sands",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guidance with a Twist",
        "rules": "When the compass needle settles on a direction, it has a 10% chance to indicate a hidden path that others might overlook. However, if you follow this direction for more than one hour, you must succeed on a DC 12 Wisdom saving throw or become disoriented, losing all directional sense until morning."
      },
      {
        "title": "Slight Confusion",
        "rules": "Once per short rest, following the compass's direction results in a -1 penalty to your next skill check. This effect can be negated by successfully predicting the needle’s final resting place before it settles."
      }
    ],
    "levelRequirementReason": "The item is designed for beginners but still offers a challenge, as its unpredictable nature requires careful attention.",
    "vendorReason": "The Liminal Trader specializes in items that bridge the gap between reality and the unknown, making The Wanderer's Doubt an ideal fit for their inventory.",
    "shippingDetail": "The compass is carefully wrapped to prevent damage during shipment, ensuring it arrives in working condition.",
    "usage": {
      "activation": "Passive effect until the needle settles on a direction.",
      "duration": "Instantaneous when activated; lasts for one hour or until you deviate from its indicated path.",
      "endsWhen": "The compass needle no longer moves, or if you leave the immediate area of the ruins where it was found.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique properties justify its price, offering players a chance to explore hidden paths in an otherwise straightforward environment.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T23:25:26.488160+00:00",
    "aiReviewedAt": "2026-07-23T23:25:26.488160+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_resonance_amulet": {
    "id": "almost_edge_item_void_resonance_amulet",
    "name": "The Silent Guardian's Plea",
    "description": "The Silent Guardian's Plea hangs heavy around your neck, its cold metal pulsing with an uneasy hum. This amulet seems to draw the attention of unseen horrors and offers fleeting moments of protection against the void’s touch. Though it grants +2 on saves against fear effects, there is a subtle cost—whispers of madness (-1 charisma check penalty). Once per long rest, it can absorb minor void energy, restoring 10 hit points at the cost of your next action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Fearsome Protection",
      "Void Absorption"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravity well courier",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Fearsome Protection",
        "rules": "Activates as a reaction when you would make a saving throw against a fear effect. The amulet’s cold metal hums in response, granting +2 to your saving throw. This effect can be used once per short or long rest."
      },
      {
        "title": "Void Absorption",
        "rules": "Activates as an action that restores 10 hit points at the cost of your next action. Once per day, this amulet can absorb a minor void energy intrusion, protecting you but leaving you vulnerable to madness (-1 charisma check penalty) until dawn."
      }
    ],
    "levelRequirementReason": "This amulet requires a minimum level of 11 due to its complex enchantments and the risk it poses in terms of mental stability.",
    "vendorReason": "Edge Wanderer deals in items that traverse the realms, including those with ties to the void and madness.",
    "shippingDetail": "Ships via the Gravity Well Courier Service; delivery can take up to a week due to the item's delicate nature.",
    "usage": {
      "activation": "Reaction (Fearsome Protection), Action (Void Absorption)",
      "duration": "Instantaneous for Fearsome Protection, until dawn for Void Absorption",
      "endsWhen": "Rest or expended action for Fearsome Protection; Void Absorption ends at dawn",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This balanced price reflects the item's complex enchantments and its risk to mental health, making it a valuable but cautious choice for players.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:25:52.711749+00:00",
    "aiReviewedAt": "2026-07-23T23:25:52.711749+00:00",
    "aiReviewVersion": 1
  },
  "internet_neural_shard": {
    "id": "internet_neural_shard",
    "name": "Data Stream Amplifier",
    "description": "The Data Stream Amplifier is a sleek, glowing shard that pulses with data energy. Crafted from the remnants of ancient cybernetic networks and bound by the magic of the Cyber Market, this relic amplifies your mind’s processing power. It grants you a +4 bonus to Intelligence checks and saves, along with increased mana regeneration. The amplifier hums with the whispers of forgotten algorithms, enhancing not just your stats but also your ability to discern weaknesses in combat opponents.",
    "category": "equipment",
    "price": 1000,
    "icon": "💻",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_intelligence_4",
      "increased_mana_regen"
    ],
    "vendor": "cyber_market",
    "shippedBy": "fiber_optic_cable",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Intelligence",
        "rules": "The Data Stream Amplifier grants a +4 bonus to Intelligence checks and saves. This effect is passive while the item is equipped."
      },
      {
        "title": "Mana Regeneration Boost",
        "rules": "While wearing this amplifier, you gain a +1 increase in mana regeneration per minute. This effect lasts until removed or until your next long rest."
      }
    ],
    "levelRequirementReason": "This item's complex enchantment requires a character of at least level 8 to handle its data overload without being overwhelmed.",
    "vendorReason": "The Cyber Market specializes in the latest cybernetic and arcane technologies, making it the perfect vendor for this relic.",
    "shippingDetail": "Ships via high-speed fiber optic cables, ensuring your amplifier arrives in pristine condition.",
    "usage": {
      "activation": "Passive while equipped.",
      "duration": "Until removed or until your next long rest.",
      "endsWhen": "Removed from the wearer or during a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's balanced price reflects its rarity and the complex enchantment required to craft it.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-23T23:26:27.326467+00:00",
    "aiReviewedAt": "2026-07-23T23:26:27.326467+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_trigger": {
    "id": "internet_meme_trigger",
    "name": "Eternal Distraction Device",
    "description": "The Eternal Distraction Device hums with a peculiar energy, its surface etched with arcane symbols that glow faintly in shifting patterns. This relic emits a barrage of nonsensical memes and flashing images, capable of momentarily stunning enemies with the sheer absurdity of its output. However, prolonged exposure can induce a state of existential dread or leave one feeling utterly ridiculous, as if the universe itself has decided to mock you for your very existence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤪",
    "stock": 45,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "stun_target",
      "humor_effect"
    ],
    "vendor": "data_dealer",
    "shippedBy": "compressed_signal",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Stunning Distraction",
        "rules": "When activated, this device emits a wave of memes and flashing images that can momentarily stun one target within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be stunned for 1 round."
      },
      {
        "title": "Humor Effect",
        "rules": "There is a 20% chance (rolling a d10) that the target will also suffer from a humorous effect, reducing their defensive abilities by 3 until the start of their next turn. This effect can only occur once per creature."
      }
    ],
    "levelRequirementReason": "The device's arcane power requires a level of at least 11 to wield effectively.",
    "vendorReason": "As a dealer in strange and wondrous artifacts, the data_dealer is known for their collection of eccentric relics like the Eternal Distraction Device.",
    "shippingDetail": "The device arrives via a compressed signal courier, which ensures its arrival is swift and secure within the night only stock period.",
    "usage": {
      "activation": "Standard action to activate",
      "duration": "Instantaneous effect; ends when used or expended",
      "endsWhen": "Used once per day; requires an 8-hour rest to recharge",
      "charges": "1 charge, recharges after a long rest"
    },
    "priceReason": "The device's unique combination of stunning and humorous effects make it a valuable, yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:26:11.868342+00:00",
    "aiReviewedAt": "2026-07-23T23:26:11.868342+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_chaosbomb": {
    "id": "warhammer_chaosbomb",
    "name": "Chaos Bomb - Unstable Edition",
    "description": "A delightfully unstable explosive device guaranteed to cause mayhem! This little beauty is packed with volatile essence, making it a surprisingly effective weapon... or just a really messy distraction.",
    "category": "curiosities",
    "price": 350,
    "icon": "💣",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "deals 6d6 explosive damage in a 10ft radius",
      "chance to cause area-of-effect status effects (stun, confusion)",
      "small chance of self-detonation"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Gremlin Post",
    "levelRequirement": 3
  },
  "mushroom_kingdom_item_gargantuan_goober": {
    "id": "mushroom_kingdom_item_gargantuan_goober",
    "name": "Gargantuan Goober",
    "description": "The Gargantuan Goober, a pulsating mass of concentrated power-ups, is said to have been crafted in the shadowy depths of the Mushroom Kingdom. Consuming this colossal goober can grant you a fleeting moment of invincibility or cause a cascade of abilities that may leave you faster on your feet, but beware—its unpredictable effects could also turn your insides into jelly, just like Wario's peculiar fondness for shiny objects.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 42,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "grant_invincibility_30s",
      "increase_speed"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Invincibility",
        "rules": "You gain temporary invincibility for 30 seconds. During this time, you are immune to all damage and status effects. This effect ends if you take any action or if you voluntarily end it."
      },
      {
        "title": "Increase Speed",
        "rules": "For the duration of your next turn after consumption, you gain a +2 bonus to movement speed. This effect is limited to once per short rest and is immediately lost if you lose consciousness."
      }
    ],
    "levelRequirementReason": "The unpredictable nature of its effects necessitates players to be at least first level.",
    "vendorReason": "Toad Town Market regularly stocks unique and experimental items from the Mushroom Kingdom, including this peculiar creation.",
    "shippingDetail": "Delivered by a mushroom cart, which may occasionally cause the Goober to shift slightly in its container.",
    "usage": {
      "activation": "Eating the Gargantuan Goober",
      "duration": "30 seconds or until you take an action",
      "endsWhen": "The effect ends if you lose consciousness, take damage, or voluntarily end it.",
      "charges": "Unlimited, but limited to once per short rest."
    },
    "priceReason": "The Gargantuan Goober's unpredictable effects and the effort required to craft such a massive item justify its value.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:26:25.788016+00:00",
    "aiReviewedAt": "2026-07-23T23:26:25.788016+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_chronometric_cog": {
    "id": "mushroom_kingdom_item_chronometric_cog",
    "name": "Chronometric Cog",
    "description": "This chronometric cog hums with a time-warped luster, its gears spinning in an eternal dance that seems to bend the very fabric of moments around it. When activated, it grants you a fleeting instant where time almost stands still, allowing you to dodge attacks or snatch up coins with ease. However, prolonged gazing can lock you into a temporal limbo from which only your wits and quick reflexes can free you.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 18,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Quick Reflexes"
    ],
    "vendor": "wario_direct",
    "shippedBy": "time_warp_pipe",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as an action, this cog grants you advantage on Dexterity saving throws to dodge attacks until the start of your next turn. This effect lasts for a duration of up to 10 seconds."
      },
      {
        "title": "Quick Reflexes",
        "rules": "For every round you hold onto the cog without activating it, you gain +2 bonus to Dexterity saving throws to dodge attacks until the start of your next turn. This effect stacks up to a maximum of +4."
      }
    ],
    "levelRequirementReason": "This item's temporal manipulation requires a higher level to control its effects without risk.",
    "vendorReason": "Wario Direct specializes in unusual and powerful artifacts, making the Chronometric Cog a natural fit for their inventory.",
    "shippingDetail": "Ships via time-warp pipe, ensuring your item arrives at its peak temporal integrity.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 10 seconds per activation",
      "endsWhen": "The start of your next turn after the duration ends or you lose concentration",
      "charges": "Unlimited, but must be recharged with a short rest"
    },
    "priceReason": "This item's rarity and unique temporal properties justify its lower price point for its power.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T23:26:44.497489+00:00",
    "aiReviewedAt": "2026-07-23T23:26:44.497489+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_shadow_shard": {
    "id": "mushroom_kingdom_item_shadow_shard",
    "name": "Shadow Shard",
    "description": "The Shadow Shard, a fragment of a fallen shadow monster, hums with malevolent energy. It pulses in the dark like a dying star, its touch corrupting even the purest soul. Casting it sends you on an instant teleport to a nearby location, but at the cost of your life force—20 hit points are drained per use. The shard's presence alone can instill fear into foes within 30 feet, causing them to flee if they fail their saving throw.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "teleport_short_range",
      "life_drain_20"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dark_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport Short Range",
        "rules": "As a bonus action, you can teleport up to 30 feet to an unoccupied space. You must have line of sight to the destination and cannot move through creatures or objects."
      },
      {
        "title": "Life Drain (20 HP)",
        "rules": "When you use your Shadow Shard for a teleport, you drain 20 hit points from yourself as a cost. This effect has no save DC but ends immediately if you are killed or drop to 0 hit points."
      }
    ],
    "levelRequirementReason": "Even the weakest adventurers can wield this fragment due to its inherent instability.",
    "vendorReason": "Despite being a forbidden item, Koopa Shop's patrons are always seeking powerful relics to enhance their expeditions.",
    "shippingDetail": "The Shadow Shard is shipped through the Dark Portal, arriving in shadowy envolutes that make it nearly impossible for others to intercept.",
    "usage": {
      "activation": "Bonus action for teleport; automatic on activation for fear effect.",
      "duration": "Instantaneous (ends when used or expended).",
      "endsWhen": "Used or expended. Ends immediately if you are killed or drop to 0 hit points.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "The Shadow Shard's price reflects its rarity and the risk it poses, balancing its powerful abilities with a manageable cost.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T23:27:18.284584+00:00",
    "aiReviewedAt": "2026-07-23T23:27:18.284584+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_gloomfang_claw": {
    "id": "animatopia_gloomfang_claw",
    "name": "Gloomfang Claw",
    "description": "The Gloomfang Claw, a wickedly sharp and emaciated talon shed by the elusive creatures of the Murkwood, absorbs shadowy essence to empower its bearer. Its blackened surface gleams with an eerie luminescence, and it hums with latent power when drawn. This claw can slice through even the toughest hides like they're mere paper, and the wielder feels a strange connection to the shadows themselves, as if the dark itself whispers secrets upon contact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "shadow_absorb",
      "critical_strike"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "swift_beast",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Shadow Absorption",
        "rules": "The Gloomfang Claw has a chance of absorbing shadowy energy when it makes a successful hit. There is a 15% chance that upon a critical hit, the claw absorbs an additional 2d6 points of damage as shadow essence."
      },
      {
        "title": "Critical Strike",
        "rules": "When wielding the Gloomfang Claw in melee combat with a slashing weapon, you have advantage on attack rolls against creatures within 5 feet. Additionally, if your attack hits, there is a 10% chance of scoring a critical hit."
      }
    ],
    "levelRequirementReason": "The claw's dark energy demands that its wielder be at least level 6 to channel its power effectively.",
    "vendorReason": "The Tribal Trader, a shaman of the Murkwood tribes, has access to such rare and powerful relics from his deep connections with the forest's creatures.",
    "shippingDetail": "The swift beast courier ensures that the Gloomfang Claw is delivered swiftly through enchanted paths within the Murkwood.",
    "usage": {
      "activation": "On a successful hit with a slashing weapon while wielding the claw in melee combat.",
      "duration": "Instantaneous, recharges after a long rest.",
      "endsWhen": "The claw's shadow absorption effect ends when it absorbs enough shadow energy or after three successful critical hits.",
      "charges": "Unlimited, but only one chance per attack."
    },
    "priceReason": "This price reflects the rare and powerful nature of the Gloomfang Claw, balancing its unique abilities with a reasonable cost for player characters to obtain it.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T23:26:59.431315+00:00",
    "aiReviewedAt": "2026-07-23T23:26:59.431315+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_songstone_charm": {
    "id": "animatopia_songstone_charm",
    "name": "Songstone Charm of Harmony",
    "description": "The Songstone Charm of Harmony, crafted by the Harmonious Tribe from the sacred stones of ancient forests, resonates with melodies that soothe and uplift. This tiny charm, no larger than a coin, vibrates when worn, subtly calming wild beasts and bolstering the morale of your party. The charm's enchantment is so delicate that even the most clumsy attempts at using it for music-making can risk its fragile balance.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎶",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "calm_animal",
      "morale_boost"
    ],
    "vendor": "forest_market",
    "shippedBy": "carrier_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calm Animal",
        "rules": "As a bonus action, you can attempt to calm an agitated beast within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be calmed for 1 minute."
      },
      {
        "title": "Morale Boost",
        "rules": "The charm grants all allies within 30 feet advantage on saving throws and attack rolls made before the end of your next turn. This effect lasts until the start of your next turn, but you can only use it once per long rest."
      }
    ],
    "levelRequirementReason": "The charm requires minimal magical power to wield, suitable for a low-level party.",
    "vendorReason": "The forest market is known for its connection to the natural world and often sells items crafted by the Harmonious Tribe.",
    "shippingDetail": "Delivered swiftly on the back of a messenger bird, ensuring the charm reaches you in perfect condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for Calm Animal; lasts until end of next turn for Morale Boost",
      "endsWhen": "Target beast calms or Morale boost ends at start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering its low-level utility and unique effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:27:13.094868+00:00",
    "aiReviewedAt": "2026-07-23T23:27:13.094868+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_bloodmoon_amulet": {
    "id": "animatopia_bloodmoon_amulet",
    "name": "Bloodmoon Amulet of the Pack Alpha",
    "description": "The Bloodmoon Amulet of the Pack Alpha gleams with the essence of a primal alpha, its silver surface etched with ancient wolf symbols that pulse with raw power under the light of a blood moon. This amulet grants you a surge of strength and an intimidating presence, allowing you to command both beasts and men alike in battle. Crafted by the very alpha who once ruled over the wilds, it's said to channel his might into your hands when worn. Rumors suggest that its power can be felt even on nights without a moon, though its true origins remain shrouded in mystery.",
    "category": "faction",
    "price": 1000,
    "icon": "🐺",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "alpha_command",
      "primal_strength"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "winged_wolf",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Alpha Command",
        "rules": "As an action, you can issue a command to a nearby beast within 30 feet. The creature must succeed on a Wisdom saving throw (DC 15) or be frightened for 1 minute. This effect lasts until used again."
      },
      {
        "title": "Primal Strength",
        "rules": "While wearing the amulet, your Strength score is increased by 2, and you gain a +1 bonus to attack rolls with weapons that deal bludgeoning damage."
      }
    ],
    "levelRequirementReason": "This amulet requires significant strength of will and body to wield its primal power effectively.",
    "vendorReason": "The Beast Bazaar specializes in items that enhance one's connection with nature, making it the perfect place for such an amulet.",
    "shippingDetail": "Ships via a swift messenger wolf; delivery takes 3 days during a blood moon.",
    "usage": {
      "activation": "Action or reaction to issue command; bonus action to use primal strength",
      "duration": "Instantaneous for command, 1 minute for strength",
      "endsWhen": "Used again or removed from the wearer's neck",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflects its epic rarity and limited utility in combat.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:27:30.907876+00:00",
    "aiReviewedAt": "2026-07-23T23:27:30.907876+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_glittering_hoofprint": {
    "id": "equestria_item_glittering_hoofprint",
    "name": "Glittering Hoofprint Charm",
    "description": "The Glittering Hoofprint Charm is a tiny, shimmering horseshoe made of crystallized starlight, catching the moon's glow and sparkling like a thousand stars in the night sky. It was crafted by the celestial ponies themselves, whose magic imbues it with a touch of good fortune. Wear this charm to not only avoid sticky situations but also to leave behind a trail of glowing footprints that can guide you through the darkest paths.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased_luck",
      "trail_of_light"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "skyrunner express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Luck",
        "rules": "The wearer gains advantage on one saving throw at the start of their turn. This effect lasts until the end of their next turn."
      },
      {
        "title": "Trail of Light",
        "rules": "While wearing this charm, your footprints glow faintly for 1 hour or until you walk less than 60 feet in a straight line without movement."
      }
    ],
    "levelRequirementReason": "The charm's magic is simple enough that even a young pony can harness its power.",
    "vendorReason": "As the largest trading post in Equestria, the Ponyville Market offers a wide array of magical trinkets and curiosities, including this charming good-luck charm.",
    "shippingDetail": "The Skyrunners deliver with swift precision, ensuring your Glittering Hoofprint Charm arrives fresh and sparkling at your doorstep within three days.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous for the luck advantage; lasts until end of next turn. Glow persists as long as you walk straight without stopping.",
      "endsWhen": "The glow fades after walking less than 60 feet in a straight line, or when removed from your person.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with starlight and celestial magic, this charm is a rare find, yet its effects are subtle but useful for any adventurer.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T23:27:48.112646+00:00",
    "aiReviewedAt": "2026-07-23T23:27:48.112646+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_rainbow_mane_potion": {
    "id": "equestria_item_rainbow_mane_potion",
    "name": "Rainbow Mane Potion of Velocity",
    "description": "The Rainbow Mane Potion of Velocity is a shimmering vial encased in a glass bottle, its contents a swirling mix of rainbow strands and speed magic. It's said to have been crafted by Twilight Sparkle herself using ingredients from the Everfree Forest. Drinking it grants you an exhilarating burst of speed that can leave even the fastest creatures in dust. However, beware—your movements may become unsteady after the boost fades.",
    "category": "consumables",
    "price": 1000,
    "icon": "🚀",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increased_speed",
      "chance_for_rainbow_trail_effect"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Magical Delivery Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Speed",
        "rules": "When consumed, this potion grants you a +20 foot increase to your walking speed for 1 minute. You must make a DC 15 Dexterity (Acrobatics) check at the start of each of your turns while under its effects; on a failure, you fall prone and are incapacitated until the effect ends."
      },
      {
        "title": "Rainbow Trail",
        "rules": "For the duration of the effect, there is a 20% chance that after you move at least 10 feet, a temporary rainbow trail appears behind you for 5 rounds. This trail can be seen within 60 feet by creatures with darkvision."
      }
    ],
    "levelRequirementReason": "The potion's effects are potent enough to require at least 3rd level to use without risking instability.",
    "vendorReason": "Canterlot Commerce has a long-standing relationship with Twilight Sparkle, and thus stocks her signature potions.",
    "shippingDetail": "Delivered by the fastest couriers in Equestria; arrives within an hour of purchase.",
    "usage": {
      "activation": "Consumed as a bonus action",
      "duration": "1 minute, or until you fall prone due to the Acrobatics check failure",
      "endsWhen": "The effect ends when the duration expires or you fail the Dexterity (Acrobatics) check.",
      "charges": "Unlimited; each vial is a single-use item."
    },
    "priceReason": "This balanced price reflects the rarity and potency of the potion, requiring a substantial amount of XP to purchase without overshadowing other items.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T23:27:35.347629+00:00",
    "aiReviewedAt": "2026-07-23T23:27:35.347629+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_legendary_crown_of_harmony": {
    "id": "equestria_item_legendary_crown_of_harmony",
    "name": "Crown of Harmony - Echoes of Discord",
    "description": "The Crown of Harmony - Echoes of Discord, forged by ancient ponies during a time of great strife, radiates a faint aura that both soothes and disturbs. It grants significant buffs to strength and magic, but the wearer must resist the temptation to cause chaos; succumbing could unleash discord upon the land. The crown's essence is said to echo dissonance within those who wear it, requiring constant vigilance against its dark allure.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "enhanced_strength",
      "resistance_to_charm_effects"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Strength",
        "rules": "The wearer gains a +2 bonus to Strength. This effect persists as long as the crown is worn."
      },
      {
        "title": "Resistance to Charm Effects",
        "rules": "While wearing this crown, the wearer has advantage on saving throws against charm effects and spells. This effect lasts until the end of each day or until the wearer removes the crown."
      }
    ],
    "levelRequirementReason": "The complexity and power of the Crown's abilities necessitate a high level to ensure proper control.",
    "vendorReason": "The Crystal Empire maintains an extensive collection of ancient artifacts, including this harmonious yet discordant piece.",
    "shippingDetail": "Shipped by the Dragon Delivery service known for its swift and reliable couriers.",
    "usage": {
      "activation": "Passive effect; activation not required.",
      "duration": "Instantaneous upon donning, lasts until removed or discarded.",
      "endsWhen": "The wearer removes it or discards it in a hostile manner.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The crown's legendary rarity and the balance of its abilities make this item worth a moderate amount of XP, ensuring players consider its value carefully.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:28:15.065995+00:00",
    "aiReviewedAt": "2026-07-23T23:28:15.065995+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dave's_decoration": {
    "id": "leclaire_isle_item_dave's_decoration",
    "name": "Dave's Doughy Decoration Consultation",
    "description": "Dave's Doughy Decoration Consultation transforms your weapons and armor into edible works of art, elevating your appearance in both battle and court. With a flourish of dough and a sprinkle of sugar, you gain temporary increases to Charisma and the ability to charm one enemy per day with a successful roll. Dave's whimsical creations ensure that even the most hardened warriors look like they've stepped from a pastry shop.",
    "category": "services",
    "price": 1000,
    "icon": "🎨",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporarily_increase_charisma",
      "grant_chance_to_charm_enemies"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Swift Baker's Cart",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporary Increase in Charisma",
        "rules": "By spending 1 minute to have Dave apply edible embellishments, your Charisma score is temporarily increased by +2. This effect lasts for 8 hours or until you take a long rest."
      },
      {
        "title": "Charm Enemy",
        "rules": "You gain the ability to attempt to charm one enemy per day upon successful use of the Consultation. The DC for this check is equal to 10 + your Charisma modifier. The effect ends if you fail a saving throw against it."
      }
    ],
    "levelRequirementReason": "Dave's Doughy Decoration Consultation requires a minimum level of 3 to ensure the safety and taste of his creations.",
    "vendorReason": "Pastry Palace is renowned for its expertise in edible art, making Dave's Doughy Decoration Consultation a natural addition to their offerings.",
    "shippingDetail": "Your order will be delivered within 2 days via Swift Baker's Cart, ensuring your creations arrive fresh and ready to wow.",
    "usage": {
      "activation": "A short rest spent with Dave, during which he applies edible decorations.",
      "duration": "8 hours or until a long rest is taken.",
      "endsWhen": "Upon taking a long rest or if the effect expires naturally after 8 hours.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the complex process of creating edible works of art, ensuring that the flavor and function are both delightful and memorable.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:28:21.696793+00:00",
    "aiReviewedAt": "2026-07-23T23:28:21.696793+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_golden_crumb": {
    "id": "leclaire_isle_item_golden_crumb",
    "name": "Golden Crumb of Eternal Sweetness",
    "description": "The Golden Crumb of Eternal Sweetness, a relic said to have fallen from the heavens during a baking storm, is a sugary morsel that bursts with flavor upon consumption. It grants temporary magic resistance and heals moderate wounds, but the sheer delight it brings can cause a fleeting moment of confusion in those who partake. A confection cherished by bakers and chefs alike, this crumb is said to bring out the best in pastries, though its effects are as unpredictable as they are delightful.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "temporary_magic_resistance",
      "heal_moderate_wounds"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Moonbeam Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Magic Resistance",
        "rules": "The user gains advantage on saving throws against magic for the next hour. This effect ends if the user takes damage or casts a spell."
      },
      {
        "title": "Heal Moderate Wounds",
        "rules": "Upon consumption, this crumb heals 5d6 hit points to the user. There is a 20% chance of causing confusion for 1 minute as an unintended effect."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers who might benefit from its magical properties and healing abilities.",
    "vendorReason": "Sweet Supplies is renowned for their vast array of culinary curiosities, including the Golden Crumb of Eternal Sweetness.",
    "shippingDetail": "Ships via Moonbeam's Express, arriving within a week under normal conditions.",
    "usage": {
      "activation": "Eaten as a snack or consumed in one bite.",
      "duration": "1 hour (until the temporary magic resistance ends).",
      "endsWhen": "The user takes damage or casts a spell.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced for its rarity and magical properties, this item provides significant benefit to adventurers without being overpowered.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T23:28:04.218385+00:00",
    "aiReviewedAt": "2026-07-23T23:28:04.218385+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_rusty_cog": {
    "id": "almost_edge_item_rusty_cog",
    "name": "Whispering Cog of the Void",
    "description": "The Whispering Cog of the Void hums with an eerie, forgotten melody that seems to seep through time itself. Its surface is etched with patterns of ancient runes, and when spun in your hand, it emits a low, insistent tone that sends shivers down your spine. It whispers warnings about impending doom, urging you not to let its secrets unravel too quickly. The cog’s warmth is unsettling, as if it draws strength from the fear it instills.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Silent Guardian",
      "Maddening Echo"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "winged beetle courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Guardian",
        "rules": "When you activate the cog, it grants you a +2 bonus to your Armor Class (AC) for the next 3 turns. This effect cannot be used more than once per short or long rest."
      },
      {
        "title": "Maddening Echo",
        "rules": "Each time an enemy within 5 feet of you makes an attack roll against you, there is a 10% chance that the cog will emit a maddening echo, causing the attacker to suffer from minor madness. This effect has no save DC and can only occur once per turn."
      }
    ],
    "levelRequirementReason": "The cog’s complexity requires at least first-level proficiency in Arcana or Insight.",
    "vendorReason": "The edge-wanderers have encountered the cog in ancient ruins and are wary of its power, but they also recognize its potential as a tool for survival.",
    "shippingDetail": "Shipped via winged beetle courier, which can deliver the cog within 24 hours.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "The duration ends when it is used or at the end of your next turn after its last use.",
      "charges": "Unlimited, but can only be used once per short or long rest."
    },
    "priceReason": "The cog’s rare and ancient origin combined with its unique magical properties justifies this price in experience points.",
    "priceOriginal": 150,
    "priceReviewedAt": "2026-07-23T23:28:18.875172+00:00",
    "aiReviewedAt": "2026-07-23T23:28:18.875172+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_spectral_shard": {
    "id": "almost_edge_item_spectral_shard",
    "name": "Fragment of the Liminal Veil",
    "description": "This fragment of the Liminal Veil is a shimmering shard that pulses with a sickly violet light, its presence unsettling and disorienting. Gazing into it feels like staring into a reflection that isn't quite you, causing hair to stand on end and leaving an uneasy sensation in your bones. This spectral relic grants resistance against psychic damage, but its most haunting feature is the 15% chance of inflicting fear upon enemies within reach when activated.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Grants Resistance to Psychic Damage",
      "Chance to Inflict Fear"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "phantom_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Psychic Resistance",
        "rules": "This fragment grants the bearer resistance against psychic damage. This effect is passive and does not require any action."
      },
      {
        "title": "Fear Infusion",
        "rules": "When activated, there is a 15% chance that enemies within 30 feet of the user will be frightened for 1 minute. A frightened creature must succeed on a DC 12 Wisdom saving throw at the start of each of its turns or drop to 0 hit points, as it flees in terror."
      }
    ],
    "levelRequirementReason": "This fragment requires a minimum level of 6 due to its supernatural ability to influence fear and grant resistance.",
    "vendorReason": "The Liminal Trader, with their extensive knowledge of the liminal realms, is well-acquainted with such spectral fragments.",
    "shippingDetail": "Ships via Phantom Delivery, known for its ethereal and swift couriers that traverse between dimensions.",
    "usage": {
      "activation": "Reaction (to a creature using an ability or spell that deals psychic damage)",
      "duration": "Instantaneous with a 15% chance of fear infusion",
      "endsWhen": "The effect ends when the user no longer has line of sight to any frightened creatures.",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "The price is set at 1000 XP as it balances between its unique abilities and rarity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:29:03.751562+00:00",
    "aiReviewedAt": "2026-07-23T23:29:03.751562+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_amulet": {
    "id": "almost_edge_item_chronal_amulet",
    "name": "Amulet of Temporal Echoes",
    "description": "The Amulet of Temporal Echoes is a gleaming bauble forged from ancient chronal alloys. Its surface shimmers with a faint, ethereal glow that dances like time itself. Crafted by lost alchemists who dabbled in the fabric of reality, it allows its wearer to manipulate the very flow of time. Wario would indeed covet this for his capers, as it grants fleeting moments of temporal mastery—perfect for slipping past foes or causing just enough chaos to escape.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Temporal Dexterity",
      "Chronal Duplication"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Dexterity",
        "rules": "As a reaction, the wearer can cause time to rewind by 3 seconds. This effect grants advantage on all Dexterity (Acrobatics) checks made before the end of their next turn. Limited to once per long rest."
      },
      {
        "title": "Chronal Duplication",
        "rules": "Once per day, the amulet creates a temporary, unstable duplicate of the wearer that lasts for 1 minute. The duplicate has half the wearer's hit points and grants advantage on Dexterity (Stealth) checks. If the duplicate is damaged, it dissipates immediately."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to manage the temporal manipulation without risk.",
    "vendorReason": "The Void Merchant specializes in rare and otherworldly artifacts that bend reality, making this amulet an ideal addition to their stock.",
    "shippingDetail": "The dimensional portal ensures swift delivery, but the item must be handled with care due to its unstable temporal properties.",
    "usage": {
      "activation": "Reaction and once per day (short rest).",
      "duration": "Instantaneous for Temporal Dexterity; lasts until end of next turn. For Chronal Duplication: 1 minute.",
      "endsWhen": "The effect ends when the user takes another reaction action or the duration expires.",
      "charges": "Limited to once per long rest"
    },
    "priceReason": "Balanced price reflects its rarity and limited temporal manipulation capabilities.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T23:28:34.216541+00:00",
    "aiReviewedAt": "2026-07-23T23:28:34.216541+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_potion": {
    "id": "equestria_item_elemental_potion",
    "name": "Potion of Elemental Harmony",
    "description": "Crafted by the alchemists of Ponyville, the Potion of Elemental Harmony temporarily aligns your magical energies with one of Equestria’s core elements. Choose wisely: drinking it grants you resistance to one elemental damage type and increases your mana pool by a third for an hour. The potion’s effects are as unpredictable as they are powerful; each sip leaves you feeling either refreshed or drenched, depending on the chosen element.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_elemental_resistance",
      "increase_mana_pool"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "twilight_delivery_service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Resistance",
        "rules": "This effect lasts for one hour. You gain resistance to a selected elemental damage type, such as fire or water. At the end of your next turn, this effect ends."
      },
      {
        "title": "Mana Pool Increase",
        "rules": "Your mana pool is increased by 33% (rounded down) when you drink the potion. This increase lasts for one hour and does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "Beginners can experiment with elemental magic without the risk of overexertion.",
    "vendorReason": "The alchemists of Ponyville are well-known for their innovative and safe potions, making the market a trusted source for such items.",
    "shippingDetail": "Shipped via Twilight Sparkle's personal delivery service; usually arrives within an hour.",
    "usage": {
      "activation": "Consume the potion as a bonus action.",
      "duration": "One hour, ending at the end of your next turn.",
      "endsWhen": "The effects end naturally after one hour or if you take any damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced pricing for a versatile and safe item that enhances elemental affinity without causing undue risk.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T23:28:38.796690+00:00",
    "aiReviewedAt": "2026-07-23T23:28:38.796690+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_star_dust_charm": {
    "id": "equestria_item_star_dust_charm",
    "name": "Star Dust Charm of Wishful Thinking",
    "description": "The Star Dust Charm of Wishful Thinking is crafted from actual stardust collected during a rare meteor shower in Equestria's skies. This charm not only whispers promises of good fortune but also grants its wearer a subtle, magical glow that enhances their natural charisma. The ponies swear by it for boosting morale and luck, but it has been known to cause Wario to squirm in his boots whenever he sees one.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "lucky_finds",
      "charm_of_goodfortune"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Rainbow Co. Express",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Lucky Finds",
        "rules": "When the wearer is within a 10-foot radius of a treasure chest or similar object, they have advantage on the first check to open it. This effect lasts for an hour and can be used once per long rest."
      },
      {
        "title": "Charmed Luck",
        "rules": "The charm provides the wearer with a +1 bonus to Charisma checks and saving throws. The effect persists until expended, requiring a short rest to recharge."
      }
    ],
    "levelRequirementReason": "This charm's rarity and power necessitate that only 9th level characters can use it effectively.",
    "vendorReason": "The Crystal Empire is known for its expertise in magical artifacts, especially those with a celestial origin.",
    "shippingDetail": "Ships via special rainbow courier with same-day delivery within Equestria.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Hour-long duration, rechargeable after a short rest.",
      "endsWhen": "Exhausted upon completion of its duration or after a short rest.",
      "charges": "Rechargeable once per long rest."
    },
    "priceReason": "This charm's rarity and the difficulty in obtaining actual stardust make it a balanced purchase at 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:29:18.328870+00:00",
    "aiReviewedAt": "2026-07-23T23:29:18.328870+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_void_shard": {
    "id": "almost_edge_void_shard",
    "name": "Void Shard of the Unmade",
    "description": "The Void Shard of the Unmade is a jagged, pulsating fragment torn from the very fabric of nothingness. It hums with raw potential, and when held, it grants fleeting glimpses into the true void, where time and reality dissolve in an ephemeral dance. Touching this shard can grant +2 Dexterity, but prolonged exposure risks unraveling your essence, a truly delicious risk for those who dare to embrace the void’s allure.",
    "category": "equipment",
    "price": 65000,
    "icon": "🌌",
    "stock": 18,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Grants +2 Dexterity",
      "5% chance to inflict Fear (Enemies within 10 feet)"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Gravity Well Courier",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Void Glimpse",
        "rules": "When held, you gain a +2 bonus to Dexterity. This effect lasts for 1 minute and can be maintained by holding the shard continuously. If you stop holding it for more than 10 minutes, the effect ends."
      },
      {
        "title": "Fear Infliction",
        "rules": "While holding the shard, there is a 5% chance per round that an enemy within 10 feet will be frightened as long as they remain in range. This effect has no save DC and can occur multiple times on each turn."
      }
    ],
    "levelRequirementReason": "The shard demands a significant level to wield, reflecting its volatile nature and the power it commands.",
    "vendorReason": "Only the Void Merchant, who has traversed the void’s depths, can offer such a perilous yet powerful artifact.",
    "shippingDetail": "The Gravity Well Courier ensures the shard is delivered safely but warns that it should be handled with care due to its unstable nature.",
    "usage": {
      "activation": "Holding the shard continuously",
      "duration": "1 minute (renewable by holding)",
      "endsWhen": "You stop holding the shard for more than 10 minutes or when you lose consciousness",
      "charges": "Unlimited"
    },
    "priceReason": "The Void Shard’s rarity and the risks it entails justify its high price, making it a significant investment for those who dare to wield it.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T00:01:39.225186+00:00",
    "aiReviewedAt": "2026-07-25T00:01:39.225186+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_forbidden_echo": {
    "id": "almost_edge_forbidden_echo",
    "name": "Forbidden Echo of the Lost",
    "description": "The Forbidden Echo of the Lost is a twisted, obsidian relic that hums with forgotten whispers. Crafted from the bones of ancient scholars and infused with the regrets of those who sought forbidden knowledge, it grants insight into past events by feeding on the user's own memories. Use it to uncover secrets, but be warned: the echoes may seek to haunt you, or merely remind you of the darker truths lurking within your mind.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Glimpse Past",
      "Mighty Intellect Boost"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Shadow Delivery Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Glimpse Past",
        "rules": "By spending a minute in meditation and concentrating, the user can attempt to see into the past of a creature within 30 feet. The target must make an Intelligence saving throw (DC 14). On a failed save, the target reveals three significant memories from its recent past. This effect has no cooldown."
      },
      {
        "title": "Mighty Intellect Boost",
        "rules": "The user gains +3 to their Intelligence score for 1 hour after using the Glimpse Past ability. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to wield this dangerous and powerful artifact.",
    "vendorReason": "The Liminal Trader deals in arcane relics and forbidden knowledge, making the Forbidden Echo of the Lost a fitting addition to their inventory.",
    "shippingDetail": "The item is delivered via the Shadow Delivery Service, known for its secrecy and speed. The delivery arrives within one hour of purchase, ensuring that the user can immediately start using it.",
    "usage": {
      "activation": "A bonus action to use the Glimpse Past ability; once per long rest to gain Mighty Intellect Boost.",
      "duration": "Instantaneous for Glimpse Past and 1 hour for Mighty Intellect Boost.",
      "endsWhen": "The user's concentration is broken or they complete a short or long rest.",
      "charges": "Unlimited, but the user must recharge their focus after using it."
    },
    "priceReason": "The Forbidden Echo of the Lost is priced at 1000 XP due to its unique abilities and the risk involved in handling such a powerful relic.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:29:08.110714+00:00",
    "aiReviewedAt": "2026-07-23T23:29:08.110714+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_shard_echo": {
    "id": "the_edge_shard_echo",
    "name": "Echoing Void Shard",
    "description": "The Echoing Void Shard glimmers with an ethereal, spectral light that dances like forgotten dreams. This jagged shard amplifies your senses for a fleeting moment, allowing you to perceive hidden truths and navigate impossible dimensions. However, the whispers of the void can be both a gift and a curse, driving one mad if not handled carefully. Known to attract stray shadows, this relic is said to have been crafted in the depths of an ancient rift that connects all realities.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Perception Boost",
      "Shadow Familiar"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Perception Boost",
        "rules": "When you activate the Echoing Void Shard, your passive Perception increases by 5 until the start of your next turn. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Shadow Familiar",
        "rules": "Once per long rest, touching the shard allows you to summon a shadow familiar that can perform minor tasks for you. The familiar is a CR 1/4 creature with hit points equal to your character level + Constitution modifier. It disappears if it takes any damage and reappears after 24 hours. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "The shard's power is too great for a lower-level character, requiring at least 7th level to wield its effects without risking instability.",
    "vendorReason": "The abyss trader specializes in items that bridge dimensions and attract shadow creatures, making the Echoing Void Shard a fitting addition to their inventory.",
    "shippingDetail": "Due to its volatile nature, the shard must be shipped through the dimensional rift, which can cause minor fluctuations in nearby reality for up to an hour after delivery.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Until the start of your next turn (Perception Boost) / Once per long rest (Shadow Familiar)",
      "endsWhen": "Ends when you take any damage (Perception Boost) / Disappears if summoned familiar takes damage and reappears after 24 hours (Shadow Familiar)",
      "charges": "Unlimited"
    },
    "priceReason": "The Echoing Void Shard offers significant bonuses to perception and access to a shadow familiar, justifying its moderate price in experience points.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:29:35.100184+00:00",
    "aiReviewedAt": "2026-07-23T23:29:35.100184+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ritual_rune": {
    "id": "the_edge_ritual_rune",
    "name": "Binding Rune of the Unraveling",
    "description": "The Binding Rune of the Unraveling is a disturbingly intricate rune etched into a shard of obsidian, said to have been inscribed by ancient sorcerers seeking to harness chaos itself. This rune, when invoked, warps space in a localized area, creating a pocket of chaotic energy that can disorient foes and temporarily reduce their armor class. Use it wisely; the side effects are unpredictable but often inconvenient for all involved.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Disorienting Disruption",
      "Armor Reduction"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Winged Horror Courier Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Disorienting Disruption",
        "rules": "When activated, this rune creates a localized area of chaotic energy that targets one creature within 5 feet. The target must succeed on a DC 13 Constitution saving throw or be disoriented until the start of its next turn."
      },
      {
        "title": "Armor Reduction",
        "rules": "The rune temporarily reduces the AC of any creature it affects by 10 for up to three rounds, after which time the effect ends. This can be reactivated once per short or long rest."
      }
    ],
    "levelRequirementReason": "This rune requires a high level of magical training and control to safely invoke its chaotic effects.",
    "vendorReason": "Edge Outpost is known for its extensive network of contacts, including those who dabble in ancient magic and sorcery, making it the ideal vendor for such an artifact.",
    "shippingDetail": "The rune is delivered by a Winged Horror Courier, ensuring swift but unpredictable delivery times due to its unpredictable nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with duration of up to three rounds",
      "endsWhen": "Target saves successfully or the effect ends after three rounds",
      "charges": "Unlimited, recharges on a short or long rest"
    },
    "priceReason": "The rune's price reflects its rarity and the expertise required to use it safely without causing unintended chaos.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:30:12.980096+00:00",
    "aiReviewedAt": "2026-07-23T23:30:12.980096+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_calibration": {
    "id": "the_edge_chronal_calibration",
    "name": "Temporal Harmonizer Calibration",
    "description": "The Temporal Harmonizer Calibration is a delicate device forged from fragments of time, its gears a jumble of temporal streams and paradoxes. This intricate artifact allows you to manipulate your perception of time, either slowing it down to dodge attacks or speeding up reflexes to strike with greater precision. However, careful use is paramount; the device's power can easily spiral into chaos if not handled with utmost precision—Wario’s expertise ensures it remains a tool for balance rather than destruction.",
    "category": "services",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Temporal Dexterity",
      "Chronal Evasion"
    ],
    "vendor": "final_shop",
    "shippedBy": "time_wraith",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Dexterity",
        "rules": "As an action, you can activate the Temporal Harmonizer Calibration to increase your attack speed by +20% for 1 minute. This effect has a recharge after 1 long rest."
      },
      {
        "title": "Chronal Evasion",
        "rules": "By expending a charge, you gain advantage on Dexterity saving throws and can use your reaction to take the Dodge action until the start of your next turn. You regain all expended charges at the end of a short or long rest."
      }
    ],
    "levelRequirementReason": "The Temporal Harmonizer Calibration requires basic dexterity to operate effectively.",
    "vendorReason": "Final Shop stocks this item as part of its vast array of time-related curiosities, ensuring adventurers have access to the tools they need.",
    "shippingDetail": "Shipped by the Time Wraith, with a guaranteed delivery in 3 days or less.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "1 minute for Temporal Dexterity; until start of next turn for Chronal Evasion",
      "endsWhen": "Ends when you take a short rest or long rest, or the effect is interrupted by an attack.",
      "charges": "5 charges"
    },
    "priceReason": "Balanced at 1000 XP to ensure it's a useful but not overpowered tool for adventurers.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T23:29:48.687404+00:00",
    "aiReviewedAt": "2026-07-23T23:29:48.687404+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_rusty_scroll": {
    "id": "midlands_item_rusty_scroll",
    "name": "Fragment of the Crimson Decree",
    "description": "The Fragment of the Crimson Decree is a weathered scroll stained with blood from an ancient sacrifice. It carries the scent of despair and old parchment, and its faded ink hints at a forgotten decree from long-lost emperors. This relic has a chance to reveal hidden secrets or trigger embarrassing truths about the past, but it also risks driving listeners into paranoia. In battle, it grants +5 charisma for one combat turn, making one more persuasive than ever.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveals hidden secrets",
      "risk of paranoia"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "imperial_courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Reveal Secrets",
        "rules": "The user can activate this effect as a bonus action. There is a 25% chance that it will reveal a hidden quest objective or important secret about the surrounding area. The effect lasts until the end of the user's next turn."
      },
      {
        "title": "Paranoia Risk",
        "rules": "There is a 10% chance (DC 13) that activating this scroll causes the user to become paranoid for 1 minute, losing one point of Charisma and gaining disadvantage on all Charisma checks until the effect ends. The effect can be ended by completing an extended rest."
      }
    ],
    "levelRequirementReason": "Requires a character with some experience to handle its unpredictable effects.",
    "vendorReason": "The Empire Exchange deals in all manner of relics and curiosities, including this fragment from the past.",
    "shippingDetail": "Ships with imperial courier, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of the user's next turn",
      "endsWhen": "The effect ends when the user completes their next turn or falls unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, considering its unpredictable effects and limited duration.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T23:29:54.879818+00:00",
    "aiReviewedAt": "2026-07-23T23:29:54.879818+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_steelwolf_amulet": {
    "id": "midlands_item_steelwolf_amulet",
    "name": "The Loyal Fang Amulet",
    "description": "The Loyal Fang Amulet is a crudely crafted dwarven amulet depicting a fierce steel wolf, forged by Blackrock Keep's master blacksmiths. Its engravings glow faintly with ancient dwarvish runes that whisper of loyalty and protection. This amulet not only enhances its wearer’s defenses but also provides a spectral companion to aid in battle, though the wolf is as loyal as its amulet, never straying far from its owner's side.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐺",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Armor Class Boost",
      "Dark Magic Resistance"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dwarven_cartwright",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Armor Class",
        "rules": "While wearing The Loyal Fang Amulet, the wearer’s Armor Class is increased by +3. This effect is passive and does not require action to activate."
      },
      {
        "title": "Resistance to Dark Magic",
        "rules": "The wearer gains resistance to necrotic damage for 1 hour each day when they wear The Loyal Fang Amulet. If the amulet is removed, this benefit expires at the end of their next turn. No saving throw is required."
      }
    ],
    "levelRequirementReason": "The intricate dwarven runes and steel composition require a higher level to properly comprehend and harness.",
    "vendorReason": "Master forger of Blackrock Keep, known for their mastery in crafting protective amulets and armor.",
    "shippingDetail": "Shipped by trusted dwarven couriers via the Iron Path route, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 hour each day while worn.",
      "endsWhen": "The amulet is removed or at the end of the wearer’s next turn after removal.",
      "charges": "Unlimited, recharges when not worn."
    },
    "priceReason": "The intricate dwarven runes and steel alloy make this amulet a rare find, balancing its power with an appropriate price.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-23T23:30:04.838297+00:00",
    "aiReviewedAt": "2026-07-23T23:30:04.838297+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_heralds_banner": {
    "id": "midlands_item_heralds_banner",
    "name": "The Broken Standard of Valor",
    "description": "The Broken Standard of Valor, once a symbol of Midland's valorous past, now lies tattered and stained by countless battles. Its threads are frayed, but it still whispers tales of heroism to those who dare look upon it. The banner's aura lingers, granting allies within its reach a boost in courage and a shield against fear, while also providing subtle guidance in diplomatic endeavors with Midland nobles. It is more than just a relic; it is a testament to valor that continues to inspire even in its broken state.",
    "category": "faction",
    "price": 1000,
    "icon": "🚩",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "+5 morale bonus within 30 feet",
      "Immunity to fear effects"
    ],
    "vendor": "midland_merchant",
    "shippedBy": "royal_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inspire Courage Aura",
        "rules": "Allies within 30 feet gain a +5 bonus to their morale. This effect lasts until the end of your next turn."
      },
      {
        "title": "Fearlessness",
        "rules": "The wearer is immune to all fear effects for the duration of one short rest or until it takes any damage."
      }
    ],
    "levelRequirementReason": "Even a single adventurer can feel the banner's inspiring presence, making it accessible to those who seek valor.",
    "vendorReason": "The Midland Merchant is known for carrying relics and memorabilia of Midland's storied past, including this iconic banner.",
    "shippingDetail": "Ships within 3 days with the royal messenger; delivery includes a ceremonial escort to ensure safe arrival.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Lasts until the end of your next turn or until you take damage",
      "endsWhen": "The duration ends when you take damage, and it recharges after a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its mythic rarity while ensuring accessibility for players of all levels.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T23:30:21.195221+00:00",
    "aiReviewedAt": "2026-07-23T23:30:21.195221+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_apple_potion": {
    "id": "equestria_item_apple_potion",
    "name": "Apple-icious Regeneration Brew",
    "description": "The Apple-icious Regeneration Brew is a frothy, apple-scented potion crafted from the legendary sweet apples of Ponyville's orchards. This elixir not only heals wounds swiftly but also grants the imbiber a regenerative boost, allowing them to recover lost vitality at an accelerated rate. Wary adventurers have used it time and again after perilous falls or battles, finding their health magically restored with each sip. Drink this potent brew and feel the sweet energy of Equestria coursing through your veins!",
    "category": "consumables",
    "price": 1000,
    "icon": "🍎",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal_30_hp",
      "regenerate_health_2_per_turn"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Courier Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "Upon consuming the Apple-icious Regeneration Brew, you immediately gain 30 hit points. This effect can only be used once per short or long rest."
      },
      {
        "title": "Regenerative Boost",
        "rules": "For the next hour after drinking the potion, you regain 2 hit points at the start of each of your turns. This effect ends if you finish a short or long rest, are incapacitated, or fall unconscious."
      }
    ],
    "levelRequirementReason": "The Apple-icious Regeneration Brew is suitable for all adventurers who need quick healing after minor skirmishes.",
    "vendorReason": "The Ponyville Market, known for its healthful and magical wares, often stocks this popular potion.",
    "shippingDetail": "Delivered by the reliable Courier Pony, who ensures timely delivery of this precious brew to your doorstep.",
    "usage": {
      "activation": "Drink as an action.",
      "duration": "Instantaneous healing; regenerative boost lasts for one hour.",
      "endsWhen": "Upon finishing a short or long rest, becoming incapacitated, or falling unconscious.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Apple-icious Regeneration Brew's price reflects its rarity and the mystical apples it is made from, ensuring that only those of high standing can afford this elixir.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:30:27.518016+00:00",
    "aiReviewedAt": "2026-07-23T23:30:27.518016+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starfall_amulet": {
    "id": "equestria_item_starfall_amulet",
    "name": "Amulet of Celestial Guidance",
    "description": "The Amulet of Celestial Guidance hums softly, its surface etched with constellations that shimmer like starlight on a clear night. Crafted from meteoric iron and blessed by Star Swirl the Bearded himself, it grants its wearer an uncanny sense of direction and a fleeting glimpse into future paths. Legend has it that those who wear this amulet can avoid pitfalls and find hidden treasures, though only if they follow the guidance with wisdom and caution.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "guidance_to_hidden_paths",
      "increased_luck"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Guidance to Hidden Paths",
        "rules": "As a bonus action, the wearer can focus on their surroundings. For the next minute, they gain advantage on Wisdom (Perception) checks to find hidden or secret doors and similar tasks."
      },
      {
        "title": "Increased Luck",
        "rules": "The amulet grants the wearer a +1 bonus to Dexterity saving throws. This effect lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "Lowered from level 18 as this amulet's effects are more situational and balanced for lower levels.",
    "vendorReason": "The Crystal Empire is known for its magical artifacts, making it a fitting vendor for an item blessed by Star Swirl the Bearded.",
    "shippingDetail": "Ships via special courier service, ensuring safe and swift delivery within two game days.",
    "usage": {
      "activation": "Bonus action to activate Guidance to Hidden Paths; no activation needed for Increased Luck.",
      "duration": "1 minute per use of Guidance to Hidden Paths; lasts until the end of next long rest for Increased Luck.",
      "endsWhen": "The effect ends when the duration expires or when the amulet is removed from the wearer's neck.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its mythic rarity and beneficial effects.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-23T23:30:51.977610+00:00",
    "aiReviewedAt": "2026-07-23T23:30:51.977610+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_quantum_burst": {
    "id": "the_edge_quantum_burst",
    "name": "Chaotic Pulse",
    "description": "The Chaotic Pulse is a shimmering, unstable orb of chaotic energy that crackles with raw potential. Crafted from the remnants of quantum anomalies and twisted by the hands of mad alchemists, this volatile artifact unleashes a devastating pulse capable of disrupting enemy spells and creating a temporary area of spatial distortion. Handle it only when danger calls for it; the unpredictable nature of its effects can leave you in a world of your own making.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Disrupts Spells",
      "Spatial Distortion"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Disruption",
        "rules": "When activated, the Chaotic Pulse creates an unstable pulse that has a 50% chance to disrupt any spell cast by enemies within its area of effect. The spell fails and the creature must make a DC 14 Dexterity saving throw or be stunned for 1 turn."
      },
      {
        "title": "Spatial Distortion",
        "rules": "For 3 turns, the Chaotic Pulse creates an unstable field that reduces all creatures' movement speed to half within its area of effect. This effect can be ended early by a successful DC 14 Strength saving throw."
      }
    ],
    "levelRequirementReason": "The unpredictable nature and potential for chaos make the Chaotic Pulse suitable only for those who have proven their mettle.",
    "vendorReason": "Edge Outpost deals in exotic and volatile items, making it a natural fit for such a dangerous but potentially rewarding artifact.",
    "shippingDetail": "Due to the inherent instability of the Chaotic Pulse, express delivery is required with a buffer zone of at least 5 feet around the item during transit.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous (3 turns duration for area effect)",
      "endsWhen": "The spell fails or the spatial distortion ends early via save throw",
      "charges": "Unlimited, but limited to one use per short rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the unpredictable nature of the Chaotic Pulse and its potential for both danger and reward.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T00:01:40.616568+00:00",
    "aiReviewedAt": "2026-07-25T00:01:40.616568+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_starmetal_gauntlet": {
    "id": "middle_earth_starmetal_gauntlet",
    "name": "Starmetal Gauntlet of the Fallen King",
    "description": "The Starmetal Gauntlet of the Fallen King, forged from shards of a star fallen to earth, hums with ancient power. It grants formidable strength and protects its wearer against dark sorcery, though it is said that summoning spectral guardians comes at a price in blood and lost time. A symbol of defiance against the forces of darkness, this gauntlet was crafted by dwarves deep within their forges, ensuring its durability and magical potency.",
    "category": "equipment",
    "price": 1000,
    "icon": "💪",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "strength_boost",
      "dark_magic_resistance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_airmail",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "Activating the gauntlet grants the wearer a +5 bonus to Strength checks and saving throws. This effect lasts until you rest, but it can be used only once per long rest."
      },
      {
        "title": "Dark Magic Resistance",
        "rules": "While wearing this gauntlet, you have advantage on saving throws against spells and effects from dark magic. This benefit persists for 1 minute after the gauntlet is removed."
      }
    ],
    "levelRequirementReason": "Crafted with ancient starmetal, the gauntlet demands a high level to wield its power without risk.",
    "vendorReason": "Only the dwarves of Durin's Folk possess the skill and knowledge to forge such an item from star fragments.",
    "shippingDetail": "Delivered by a dragon courier, this gauntlet arrives swiftly but with a significant delay in its magical potency. The effect is halved for the first hour after delivery.",
    "usage": {
      "activation": "Activate as a bonus action to gain strength and resist dark magic.",
      "duration": "Until you rest (strength) or 1 minute (dark magic resistance)",
      "endsWhen": "Resting (strength), duration expires (dark magic resistance), or when removed.",
      "charges": "Unlimited, but limited by long rests."
    },
    "priceReason": "Crafted from star fragments and requiring a high level to wield safely, the gauntlet is priced at 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:31:26.206344+00:00",
    "aiReviewedAt": "2026-07-23T23:31:26.206344+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_maharashtan_amulet": {
    "id": "middle_earth_maharashtan_amulet",
    "name": "Maharasthan Amulet of Endless Whispers",
    "description": "The Maharasthan Amulet of Endless Whispers hums with an eerie yet familiar energy. Crafted from ancient mahogany and adorned with enigmatic runes, it whispers secrets of the past and future only you can hear. Its warnings are cryptic but often accurate, though they sometimes veer into the mundane, like catching a glimpse of Wario's latest video game release. Handle this artifact with caution, for its power is as unpredictable as it is potent.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "whispers_of_the_past",
      "forewarning_whispers"
    ],
    "vendor": "elven_market",
    "shippedBy": "elf_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers of the Past",
        "rules": "At your command, the amulet reveals a fragment of history from any location you name. This effect is passive and requires no action to activate, but it can only be used once per long rest."
      },
      {
        "title": "Forewarning Whispers",
        "rules": "The amulet grants a +2 bonus to Perception checks made to notice hidden dangers within 30 feet. This benefit lasts until the end of your next turn and cannot be used more than once every short or long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest of seekers can appreciate the amulet's utility, making it accessible to all.",
    "vendorReason": "The elves of the market have a deep connection to ancient lore and artifacts with mysterious origins.",
    "shippingDetail": "Delivered swiftly by an elf messenger, the amulet arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect for Whispers of the Past; Forewarning Whispers activated on command as a bonus action.",
      "duration": "Instantaneous for Whispers of the Past; lasts until end of next turn for Forewarning Whispers.",
      "endsWhen": "Exhausted after one use per rest or destroyed if exposed to pure white light.",
      "charges": "Unlimited, but only one effect can be used at a time."
    },
    "priceReason": "The amulet's rarity and utility justify its moderate price in the market.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T23:30:43.413715+00:00",
    "aiReviewedAt": "2026-07-23T23:30:43.413715+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_hallpass": {
    "id": "kivotos_item_student_hallpass",
    "name": "The Procrastinator's Pass",
    "description": "The Procrastinator's Pass is a worn, leather-bound pass embossed with arcane sigils that shimmer faintly in the dark. It grants access to any classroom within the academy, but beware—its use is unpredictable; it might just as easily lead you to a lecture hall as an empty study room. Use this pass wisely or risk being caught in a less-than-ideal location during your most critical classes.",
    "category": "services",
    "price": 1000,
    "icon": "📚",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "teleport_to_classroom",
      "chance_of_confusion"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Teleport to Classroom",
        "rules": "Activates as an action. The user teleports to any classroom within the academy, but there's a 20% chance that teleportation fails and you end up in a random location on campus."
      },
      {
        "title": "Chance of Confusion",
        "rules": "If used during class hours or near other students, there is a 15% chance (DC 13 CON save) to become confused for 1 minute. You must succeed on the save or be unable to focus, wandering aimlessly until the effect ends."
      }
    ],
    "levelRequirementReason": "Requires at least second level to manage the unpredictable nature of the pass.",
    "vendorReason": "The student store caters to all academic needs, including those that might arise from last-minute cramming or strategic study sessions.",
    "shippingDetail": "Standard mail delivery within one week. Items are securely packed to ensure they arrive in good condition.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "Instantaneous teleportation, lasts until the next long rest if used during class hours.",
      "endsWhen": "Teleport fails or you voluntarily end it by using an action.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflects its unpredictable nature and limited utility, suitable for a mid-level student.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T23:31:13.801307+00:00",
    "aiReviewedAt": "2026-07-23T23:31:13.801307+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_resonance_amplifier": {
    "id": "kivotos_item_halo_resonance_amplifier",
    "name": "Divine Echo Chamber",
    "description": "The Divine Echo Chamber, a gleaming halo-shaped device encased in iridescent glass, amplifies your divine magic, turning your spells into thunderous echoes that resonate through the air. Crafted from purest angelic crystal and blessed by celestial guardians, it draws power directly from the ethereal realm. However, prolonged use can attract unwanted attention from the very deities you seek to serve; they might intervene if the balance of divine power is perceived as disturbed.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "spell_power_boost",
      "divine_resonance"
    ],
    "vendor": "club_supply",
    "shippedBy": "Swift Courier Services",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Spell Power Boost",
        "rules": "Increase your spell attack and damage rolls by +2d6. This effect lasts for a duration of 1 minute per use, expiring when the duration ends or you cast another spell with this property."
      },
      {
        "title": "Divine Resonance",
        "rules": "When you successfully hit an enemy with a divine spell, there is a 20% chance to create an echo that deals an additional 1d8 radiant damage. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The device requires mastery over divine magic and a deep connection with celestial powers.",
    "vendorReason": "Club Supply is known for its unique stock, including rare and powerful artifacts like the Divine Echo Chamber.",
    "shippingDetail": "Ships within three days of order placement. Requires a special celestial sigil for delivery.",
    "usage": {
      "activation": "A bonus action to activate; continues until its duration ends or another spell with the same property is cast.",
      "duration": "1 minute per use",
      "endsWhen": "The duration expires, or you cast another spell with this effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its divine crafting and limited utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T23:31:23.544281+00:00",
    "aiReviewedAt": "2026-07-23T23:31:23.544281+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_forbidden_shadow_charm": {
    "id": "equestria_item_forbidden_shadow_charm",
    "name": "Charm of the Twilight Silhouette",
    "description": "The Charm of the Twilight Silhouette is a solidified shadow charm, crafted by the enigmatic Shadowweaver in the depths of Equestria's night. Wielding it allows you to weave darkness into minor illusions and obscure your movements, but prolonged use can twist your thoughts and draw the attention of spectral entities. This forbidden trinket is said to have been used by those who walk the twilight, yet its true origins remain veiled in shadow.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "minor_shadow_weaving",
      "obscure_movement"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Nightmare Delivery Service (Highly Unrecommended)",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Minor Shadow Weaving",
        "rules": "As an action, you can create a minor illusion that lasts for up to 1 minute. The illusion is indistinct and barely convincing, serving as a simple distraction or cover. It has no save DC but can be dispelled by any creature willing to interact with it."
      },
      {
        "title": "Obstructed Movement",
        "rules": "As a bonus action, you can obscure your movements for up to 1 minute, becoming nearly invisible in dim light. Creatures within 30 feet of you have disadvantage on Wisdom (Perception) checks made to notice you. This effect ends if you are incapacitated or take any action that requires concentration."
      }
    ],
    "levelRequirementReason": "The charm's dark magic is potent, requiring a minimum character level to safely wield.",
    "vendorReason": "Despite its forbidden nature, the Charm of Twilight Silhouette has found its way into the market, sold by those who dare to offer items with questionable origins.",
    "shippingDetail": "The delivery is slow and unpredictable; it may arrive days later than expected, and the package is often delivered in a manner that resembles its shadowy nature.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Up to 1 minute per effect",
      "endsWhen": "The duration ends when you are incapacitated or take an action requiring concentration, or if the illusion is dispelled by another creature.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from solidified shadows and imbued with dark magic, this trinket's price reflects its rarity and the risk involved in using such forbidden items.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T23:32:06.742357+00:00",
    "aiReviewedAt": "2026-07-23T23:32:06.742357+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starlight_boots": {
    "id": "equestria_item_starlight_boots",
    "name": "Starlight Boots of Swift Hooves",
    "description": "The Starlight Boots of Swift Hooves shimmer with a radiant glow that seems to pulse in time with the night sky. Crafted from enchanted leather and lined with starlight dust, these boots grant incredible speed and agility, making you nimbler on your hooves than ever before. While they may not always be comfortable, their magic ensures you can outpace even the most determined ponies or swiftly snatch treats without delay.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Swift Hoofing",
      "Evasion"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Swift Pony Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Hoofing",
        "rules": "As a bonus action, you can activate the boots to gain a +20 foot bonus to your movement speed for one hour. This effect ends if you fall unconscious or if you use this ability again."
      },
      {
        "title": "Evasion",
        "rules": "You have advantage on Dexterity saving throws made to avoid being hit by melee attacks. If you are hit, you can make a Dexterity saving throw (DC 13) to halve the damage taken from that attack."
      }
    ],
    "levelRequirementReason": "These boots provide an immediate and useful advantage for new ponies learning their way around Equestria.",
    "vendorReason": "Applejack, known for her practical wisdom, stocks these boots as they are a popular choice among young and old alike when it comes to speed and agility.",
    "shippingDetail": "Delivered within the day by the trusted Swift Pony Courier Service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 hour or until you fall unconscious",
      "endsWhen": "You fall unconscious or use this ability again",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' enhanced mobility and defensive capabilities justify their higher price point.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T23:31:40.204462+00:00",
    "aiReviewedAt": "2026-07-23T23:31:40.204462+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_granny_smiles_potion": {
    "id": "equestria_item_granny_smiles_potion",
    "name": "Granny Smiles Potion - Guaranteed!",
    "description": "Crafted by Granny Smith herself, the Granny Smiles Potion - Guaranteed! is a vibrant, effervescent elixir that instantly brightens your spirits. Upon consumption, it grants you a hearty laugh and an infectious smile for the next hour, lifting your mood as effectively as a sunny day after a storm. The potion's unique formula ensures that while under its effects, you'll feel more at ease, reducing stress and making even the most grueling tasks seem lighter. Granny Smith herself vouches for its efficacy, ensuring it won't cause any unintended side effects like uncontrollable hugging.",
    "category": "consumables",
    "price": 1000,
    "icon": "😊",
    "stock": 18,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "temporary_mood_boost",
      "reduce_stress"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporary Mood Boost",
        "rules": "Upon drinking this potion, you gain advantage on saving throws against fear and negative emotions for the next hour. You also have a +2 bonus to your Charisma (Performance) checks until the effects end."
      },
      {
        "title": "Reduce Stress",
        "rules": "While under the effects of the potion, you are considered to be in a state of reduced stress, gaining temporary hit points equal to 1d4 + your Constitution modifier. These temporary hit points last for 6 hours or until you take any damage."
      }
    ],
    "levelRequirementReason": "The potion's effects are potent enough that even seasoned adventurers may find them beneficial, but they still require a certain level of experience to fully appreciate its benefits.",
    "vendorReason": "Canterlot Commerce has earned the trust of the realm for selling only the highest quality goods, and Granny Smith's potion is no exception.",
    "shippingDetail": "The royal messenger ensures that each bottle arrives fresh and potent, with expedited delivery to ensure you have it when needed.",
    "usage": {
      "activation": "consuming the potion",
      "duration": "one hour or until consumed",
      "endsWhen": "the effects expire or are interrupted by taking damage",
      "charges": "unlimited; each bottle contains multiple doses"
    },
    "priceReason": "The potion's rarity and the level requirement ensure its value, while the potent effects make it a worthwhile purchase for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T23:32:13.221800+00:00",
    "aiReviewedAt": "2026-07-23T23:32:13.221800+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_discord_echo_stone": {
    "id": "equestria_item_discord_echo_stone",
    "name": "Discord Echo Stone - Don't Get Mad!",
    "description": "The Discord Echo Stone - Don't Get Mad! is a pulsating, obsidian stone that crackles with chaotic energy. Legends speak of it being a fragment of Discord’s frustration, left behind in a moment of playful chaos. Touching the stone can cause nearby enemies to act erratically for a short time, or reduce their attack rolls by 2 until they take damage. It's said that even the most disciplined creatures might find themselves momentarily off-balance when in its presence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "😈",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "chaotic_distraction",
      "reduced_attack"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "elemental_delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Chaotic Distraction",
        "rules": "When a creature touches the stone, one enemy within 10 feet must make a Wisdom saving throw. On a failed save, they are incapacitated until they take damage."
      },
      {
        "title": "Reduced Attack",
        "rules": "For every 2 levels beyond level 5 that you possess, reduce an enemy's attack roll by -1 (to a minimum of -4). This effect lasts until the start of your next turn or until the creature takes damage."
      }
    ],
    "levelRequirementReason": "This stone requires significant magical power to control its chaotic energy.",
    "vendorReason": "The Crystal Empire has access to rare and powerful artifacts that can help balance the chaos in Equestria.",
    "shippingDetail": "Shipped via Elemental Delivery, known for their fast and reliable service.",
    "usage": {
      "activation": "Touching the stone.",
      "duration": "Until the start of your next turn or until a creature takes damage.",
      "endsWhen": "The effect ends when you use it again or when a creature touches an enemy within 10 feet of the stone and successfully makes its saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is priced moderately to reflect its rarity, magical properties, and limited vendor availability.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T23:31:44.330727+00:00",
    "aiReviewedAt": "2026-07-23T23:31:44.330727+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shimmering_shard": {
    "id": "middle_earth_shimmering_shard",
    "name": "Shimmering Shard of Melian",
    "description": "The Shimmering Shard of Melian is a delicate, glassy fragment that catches the light with hues of twilight and starlight. Held in your palm, it hums softly, as if singing an ancient melody. The shard not only grants a profound sense of peace but also occasionally reveals cryptic whispers of forgotten lore, mostly about the lost treasures of the elves. Its touch sharpens one’s perception, making illusions more discernible.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Faint Illusion Detection",
      "Enhanced Perception"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Faint Illusion Detection",
        "rules": "When you hold the shard, you gain advantage on Wisdom (Perception) checks to detect illusions. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While holding the shard, you have advantage on saving throws against being charmed by magical means. Additionally, you gain +2 to Wisdom (Insight) checks made to discern whether someone is lying. This effect lasts for 1 minute and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Only those of a certain wisdom and experience level can properly appreciate the shard’s power without being overwhelmed by its ancient magic.",
    "vendorReason": "The elves, who once knew Melian well, have kept the shards in their possession as they hold significant cultural and magical importance.",
    "shippingDetail": "Delivered swiftly by the swift messengers of the elven realms, ensuring timely arrival to the fortunate buyer.",
    "usage": {
      "activation": "Passive effect when held.",
      "duration": "1 minute per use, once per short or long rest.",
      "endsWhen": "The rest ends, and it can be used again after a short or long rest.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced to reflect its mythic rarity and the significant advantage it provides in perception-based challenges.",
    "priceOriginal": 67500,
    "priceReviewedAt": "2026-07-23T23:31:55.561352+00:00",
    "aiReviewedAt": "2026-07-23T23:31:55.561352+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_potion_of_comfort": {
    "id": "middle_earth_shire_potion_of_comfort",
    "name": "Second Breakfast Brew",
    "description": "The Second Breakfast Brew is a small, clear vial holding a golden-hued liquid that whispers of home and comfort. Crafted by the masterful hobbit cooks of The Shire, this potion not only restores vitality but also temporarily fills the drinker with an insatiable longing for pastries and tea. A sip can instantly banish stress and replace it with a warm sense of contentment, making you eager to explore new paths or return home – even if Wario himself would find it hard to resist!",
    "category": "consumables",
    "price": 1000,
    "icon": "🥣",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 to Charisma",
      "Restores 25 HP"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When consumed, this potion grants the drinker a +1 bonus to their Charisma score for 1 hour. This effect is not cumulative with other sources of Charisma bonuses."
      },
      {
        "title": "Health Restoration",
        "rules": "Drinking the Second Breakfast Brew restores 25 hit points and provides temporary resistance to fear effects until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This potion is designed for travelers, adventurers, and anyone in need of a quick boost before embarking on new challenges.",
    "vendorReason": "The Shire Shop has long been known for its support of hobbit traditions and the sale of comforting items like this brew.",
    "shippingDetail": "Delivered by swift ponies, ensuring you receive your comfort in time for your next journey or tea break.",
    "usage": {
      "activation": "Eaten as a potion (consumed)",
      "duration": "1 hour",
      "endsWhen": "The effect ends when the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare ingredients and expert craftsmanship, this potion is a staple for hobbits and adventurers alike, making it moderately expensive but worth every coin.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T23:32:03.602012+00:00",
    "aiReviewedAt": "2026-07-23T23:32:03.602012+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_crumb_collector": {
    "id": "grand_country_crumb_collector",
    "name": "Gravity Grasping Crumb Collector",
    "description": "The Gravity Grasping Crumb Collector, a colossal yet delicate spoon crafted from polished mahogany and inlaid with brass, is designed to effortlessly scoop up crumbs and pesky pests that defy gravity in this layered world. Its unique design allows it to create micro-gravitational fields around itself, ensuring no crumb escapes its grasp. The spoon's creator, a whimsical inventor from the Floating Isles, imbued it with subtle enchantments that make it surprisingly effective even against airborne foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥄",
    "stock": 37,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "micro_gravity_field",
      "pest_control"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "rolling_cart",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Micro-Gravity Field",
        "rules": "As a bonus action, the user can activate the spoon to create a localized micro-gravity field within a 5-foot radius. This effect lasts for 1 minute and imposes disadvantage on ranged attack rolls made by creatures within this area until the end of their turn."
      },
      {
        "title": "Pest Control",
        "rules": "The spoon can be used to create a temporary force barrier that repels small pests (rats, insects) within its range. This effect lasts for 10 minutes and prevents such creatures from entering or passing through the area without disengaging."
      }
    ],
    "levelRequirementReason": "The spoon's intricate enchantments require a minimum of second-level spellcasting ability.",
    "vendorReason": "Vertical Vendor, known for their eclectic collection of magical curiosities and household items from all corners of the world, carries this unique artifact.",
    "shippingDetail": "Ships via a rolling cart that traverses the Floating Isles at dawn.",
    "usage": {
      "activation": "Bonus action to activate the micro-gravity field; reaction to repel pests using the force barrier.",
      "duration": "Micro-Gravity Field lasts for 1 minute, Pest Control lasts for 10 minutes.",
      "endsWhen": "Discharge or end of duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The spoon's rare enchantments and unique design justify a price of 1000 XP.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-23T23:32:19.172630+00:00",
    "aiReviewedAt": "2026-07-23T23:32:19.172630+00:00",
    "aiReviewVersion": 1
  }
};
