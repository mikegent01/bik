// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_072 = {
  "faerun_item_whispers_of_the_deep": {
    "id": "faerun_item_whispers_of_the_deep",
    "name": "Deepwater Divination Scroll",
    "description": "The Deepwater Divination Scroll is a tattered scroll etched with ancient runes and infused with briny essence. Unfurling it allows you to glimpse into the fathomless depths of fate, though the visions are often twisted and foreboding. This scroll grants +2 insight bonus for 3 rounds or reveals one hidden object within a 10-foot radius once per day, making your enemies' plans as clear as the ocean's surface.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 35,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Reveal Hidden Object",
      "Insight Boost"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "sea_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Object",
        "rules": "You can use an action to reveal a single hidden object within a 10-foot radius. This effect has no save DC and ends immediately after use."
      },
      {
        "title": "Insight Boost",
        "rules": "For the next 3 rounds, you gain a +2 bonus to insight checks. This effect is active as long as you are not incapacitated or unconscious."
      }
    ],
    "levelRequirementReason": "This scroll's effects are simple enough for even low-level characters to wield its power.",
    "vendorReason": "Waterdeep Market sells a variety of arcane and nautical items, making it the perfect vendor for this Deepwater Divination Scroll.",
    "shippingDetail": "Shipped by sea cart, delivery is swift but may be delayed by storms or currents.",
    "usage": {
      "activation": "action",
      "duration": "3 rounds",
      "endsWhen": "used up or you become incapacitated",
      "charges": "1"
    },
    "priceReason": "The scroll's rarity and limited daily use justify its fair price of 1000 XP.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:48:52.032980+00:00",
    "aiReviewedAt": "2026-07-25T00:48:52.032980+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_aegis_of_wario": {
    "id": "faerun_item_aegis_of_wario",
    "name": "Aegis of Wario's Wrath",
    "description": "The Aegis of Wario's Wrath is a heavy shield forged from ancient dwarven steel and imbued with chaotic energy. It resonates with Wario’s chaotic wrath, capable of unleashing devastating attacks. The shield’s weight makes it cumbersome in battle but its benefits are undeniable: it grants +5 to AC and has a 10% chance to cause a small explosion when blocking an attack, dealing 3d6 fire damage to enemies within 5 feet. Wario himself is said to have blessed the shield for those brave enough to wield it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "+5 Armor Class",
      "Explosive Block"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_beast",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "+5 Armor Class",
        "rules": "The Aegis of Wario's Wrath grants +5 to your AC while you are wielding it. This effect is always active as long as the shield is equipped."
      },
      {
        "title": "Explosive Block (10% chance)",
        "rules": "When you block an attack with this shield, there is a 10% chance that a small explosion occurs, dealing 3d6 fire damage to all creatures within 5 feet of the attacker. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The shield's chaotic energy and complex enchantment require a high level of proficiency in martial combat.",
    "vendorReason": "As one of the most reputable vendors for rare and powerful items, Baldur’s Bazaar is known to stock this legendary artifact.",
    "shippingDetail": "The shield is delivered by a team of winged beasts, ensuring safe and swift transport through Faerûn's skies.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "Always active while equipped",
      "endsWhen": "Destroyed or when the wielder no longer meets the level requirement",
      "charges": "Unlimited"
    },
    "priceReason": "The shield's rarity, powerful effects, and unique enchantment justify its value in experience points.",
    "priceOriginal": 230000,
    "priceReviewedAt": "2026-07-25T00:48:54.499052+00:00",
    "aiReviewedAt": "2026-07-25T00:48:54.499052+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_guild_repair_kit": {
    "id": "earth_land_guild_repair_kit",
    "name": "Quartermaster's Quick Fix",
    "description": "The Quartermaster's Quick Fix is a meticulously crafted kit, its contents organized with precision and care. Contained within are tools forged from ancient steel and rare earth materials, each piece honed to perfection by the guild's master artisans. This kit ensures that your equipment remains in peak condition, ready for even the most arduous of battles. A well-maintained weapon not only fights better but also strengthens its wielder’s resolve.",
    "category": "services",
    "price": 1000,
    "icon": "🛠️",
    "stock": 30,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Repair damaged small arms and armor",
      "Reduce repair cost by 25%"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "guild_rider",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Reparation",
        "rules": "As a bonus action, you can use the Quartermaster's Quick Fix to repair one damaged piece of equipment. The item must be small arms or light armor. This effect is instantaneous and requires no material cost."
      },
      {
        "title": "Cost Reduction",
        "rules": "When repairing any small arms or light armor with this kit, you have a 25% chance that the repair cost is reduced by an additional 1d6 x your proficiency bonus. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "The kit's simplicity and ease of use make it accessible to even the lowest-level adventurer.",
    "vendorReason": "The guild ensures its members are always prepared for battle, providing essential tools like this kit.",
    "shippingDetail": "Delivered by a trusted member of the Guild Rider on horseback, ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action or once per day (recharges daily)",
      "duration": "Instantaneous",
      "endsWhen": "The kit is used up or recharged",
      "charges": "Once per day"
    },
    "priceReason": "This balanced price reflects the quality and utility of the kit, allowing even lower-level adventurers to maintain their equipment effectively.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:48:54.038997+00:00",
    "aiReviewedAt": "2026-07-25T00:48:54.038997+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_voidwalker_boots": {
    "id": "almost_edge_item_voidwalker_boots",
    "name": "Null-Step Striders",
    "description": "Forged from the very fabric of non-existence, Null-Step Striders are anathema to the laws of reality. These boots grant you a fleeting dance between existence and nothingness, allowing you to phase through solid objects for brief moments. Though they offer unparalleled speed over ground, their wearer must tread carefully lest they find themselves lost in the void's embrace. Wario might indeed covet these footwear for his nefarious schemes, but only those who understand the balance of creation and destruction can truly wield them.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 25,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "phasing_through_obstacles",
      "enhanced_movement"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "dimensional_porter",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Phasing Through Obstacles",
        "rules": "As a bonus action, you may phase through one non-magical solid object of Medium or smaller size. This effect lasts for 1 round and has no save DC required."
      },
      {
        "title": "Enhanced Movement",
        "rules": "While wearing Null-Step Striders, your movement speed increases by 30 feet until the end of your next turn."
      }
    ],
    "levelRequirementReason": "These boots require a deep understanding of reality and its manipulation, which only those of 8th level or higher can command.",
    "vendorReason": "The edge-wanderers are the masters of dimensional travel and have intimate knowledge of objects that bend space-time.",
    "shippingDetail": "Delivered via a dimensional rift, ensuring swift arrival but with a risk of accidental phase interference during transit.",
    "usage": {
      "activation": "Bonus action to phase through obstacles; automatically on movement while enhancing speed.",
      "duration": "Instantaneous and duration until end of next turn for enhanced speed.",
      "endsWhen": "On use or when removed from your feet.",
      "charges": "Unlimited, but must rest 1 hour between uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and the raw essence of void it contains.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:48:54.350703+00:00",
    "aiReviewedAt": "2026-07-25T00:48:54.350703+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_whispering_shard": {
    "id": "curiosity_whispering_shard",
    "name": "The Whispering Shard of Despair",
    "description": "The Whispering Shard of Despair is a jagged, obsidian fragment torn from an ancient, weeping statue that once stood before the Gates of Desolation. Holding it fills you with unsettling visions and faint whispers that promise power—or madness. The shard hums with dark energy, its surface etched with runes that seem to shift as you gaze upon them. Use this relic only when necessary; its eerie influence can drive even the most stalwart soul to despair.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 91,
    "rarity": "common",
    "stockType": "night_only",
    "effects": [
      "chance_to_inflict_fear",
      "risk_of_madness"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "the Dark Courier Service",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Chance to Inflict Fear",
        "rules": "When you activate the shard, there is a 15% chance that any creature within 5 feet of you becomes frightened for 1 minute. The target must succeed on a DC 12 Wisdom saving throw or be affected. This effect ends if the target moves out of range or if another creature uses an action to shatter the shard."
      },
      {
        "title": "Risk of Madness",
        "rules": "For every hour you hold the shard, there is a cumulative 5% chance that your next action will be a reflexive attempt to destroy it. After three failed attempts, you must succeed on a DC 14 Wisdom saving throw or suffer a temporary debuff reducing all attack rolls and saving throws by 2 for 8 hours."
      }
    ],
    "levelRequirementReason": "The shard's dark magic requires a level of at least 3 to resist its malevolent influence.",
    "vendorReason": "The chaotic vendor is known for dealing in the most perilous and unpredictable items, including this relic from the depths of despair.",
    "shippingDetail": "The shard arrives sealed within a blackened box with no visible markings. Upon opening it, you must make an immediate Wisdom saving throw or experience a fleeting vision of despair that lasts for 1 hour.",
    "usage": {
      "activation": "A bonus action to activate the shard and unleash its effects.",
      "duration": "Instantaneous; the effects last until dispelled by another creature.",
      "endsWhen": "The effect ends if you move out of range, are hit by an attack, or if the shard is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This relic's dark power and unpredictable effects justify its high price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:49:32.858871+00:00",
    "aiReviewedAt": "2026-07-25T00:49:32.858871+00:00",
    "aiReviewVersion": 1
  },
  "chaos_dealer_voidshard": {
    "id": "chaos_dealer_voidshard",
    "name": "Voidshard of Twisted Fate",
    "description": "The Voidshard of Twisted Fate glows with an unstable, swirling miasma that seems to ebb and flow between shades of black and violet. As you hold it, a whispering voice urges you to unleash its power for just one more moment—only to vanish into oblivion if you dare. This fragment of raw chaos can summon miniature demons from the void, but its true nature is as much a mystery as it is a threat.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "summon_minions",
      "temp_debuff"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "winged_rat",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Summons Miniature Demons",
        "rules": "When activated, this shard summons up to three miniature demons that attack the nearest enemy within 5 feet. The demons last for one minute and have a speed of 30 feet and 15 hit points each. A successful DC 16 Wisdom saving throw ends their effect immediately."
      },
      {
        "title": "Temporary Buff",
        "rules": "The wielder gains advantage on attack rolls against creatures with chaotic alignment for the duration of one short rest, or until it is destroyed by damage."
      }
    ],
    "levelRequirementReason": "This shard's raw chaotic energy demands a minimum level to handle its unpredictable power.",
    "vendorReason": "The Chaos Dealer specializes in items that bridge the gap between order and chaos, making this shard a natural fit for their wares.",
    "shippingDetail": "Shipped by the Winged Rat courier with special handling to ensure the shard's stability during transit.",
    "usage": {
      "activation": "A bonus action to activate and dismiss the summoned demons.",
      "duration": "One minute for each demon summoned, or until dismissed.",
      "endsWhen": "Destroyed by damage, or when the short rest duration ends.",
      "charges": "Unlimited, but must be recharged after one long rest."
    },
    "priceReason": "The shard's limited stock and unpredictable power make it a valuable yet dangerous commodity, justifying its price in XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:49:28.212863+00:00",
    "aiReviewedAt": "2026-07-25T00:49:28.212863+00:00",
    "aiReviewVersion": 1
  },
  "fate_forge_legionnaire_banner": {
    "id": "fate_forge_legionnaire_banner",
    "name": "Legionnaire's Banner of Unyielding Resolve",
    "description": "The Legionnaire's Banner of Unyielding Resolve is a tattered yet awe-inspiring banner, its ironclad symbol etched in a faded but resolute hue. Held aloft, it stirs unspoken loyalty and courage within the hearts of those who gaze upon it. The banner’s subtle influence can make even the most reluctant soldier feel compelled to march with unwavering resolve. Enemies caught in its sight find themselves distracted by an inexplicable urge to engage, drawing their attention away from your true front lines.",
    "category": "faction",
    "price": 1000,
    "icon": "🚩",
    "stock": 30,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "morale_boost",
      "distraction"
    ],
    "vendor": "fate_forge",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When a friendly creature holds the banner, they gain advantage on saving throws against fear and charm effects. This effect lasts until the end of their next turn."
      },
      {
        "title": "Distraction",
        "rules": "While holding the banner, you can use an action to cast the Enthrall spell (save DC 12) upon a creature within 30 feet that is hostile towards your party. This effect lasts for 1 minute or until the target makes a successful saving throw."
      }
    ],
    "levelRequirementReason": "The banner’s subtle influence requires a minimum level to harness its effects effectively.",
    "vendorReason": "Fate Forge is renowned for their connection to the Iron Legion, making them the perfect vendor for this emblematic artifact.",
    "shippingDetail": "Ships via the swift Messenger Hawk, ensuring the banner arrives in pristine condition and ready for display.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (morale boost), 1 minute (distraction)",
      "endsWhen": "Ends when the creature no longer holds the banner or upon a successful save.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The balanced price reflects its historical significance and the strategic advantage it provides on the battlefield.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:49:56.487625+00:00",
    "aiReviewedAt": "2026-07-25T00:49:56.487625+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_coin_of_prosperity": {
    "id": "mushroom_kingdom_coin_of_prosperity",
    "name": "Golden Gloop Coin",
    "description": "The Golden Gloop Coin is a shimmering coin in the shape of a massive mushroom cap. Crafted from ancient, enchanted copper found deep within the Mushroom Kingdom's mines, it brings good fortune to its bearer. When tossed or shaken, it attracts nearby coins with a magnetic aura, doubling the amount you find for an hour. However, if swallowed by mistake, it temporarily paralyzes the eater for 1d4 rounds, causing them to drop whatever they hold in their hands.",
    "category": "consumables",
    "price": 1000,
    "icon": "💰",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "coin_attractor",
      "temporary_paralysis"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Attractor",
        "rules": "When tossed or shaken within 30 feet, the coin creates a magnetic aura that doubles the amount of copper coins found by the bearer for 1 hour. This effect has no save DC and does not consume charges."
      },
      {
        "title": "Temporary Paralysis",
        "rules": "If swallowed, the coin temporarily paralyzes the eater for 1d4 rounds (DC 13 Constitution saving throw to negate). The paralysis ends immediately if the coin is removed from the body. This effect can be triggered only once per day."
      }
    ],
    "levelRequirementReason": "The coin's magic is strong enough for any adventurer, regardless of their level.",
    "vendorReason": "Toad Town Market is known for its connection to the Mushroom Kingdom and sells items with local lore.",
    "shippingDetail": "The coin is carefully wrapped in enchanted moss from the Mushroom Kingdom, ensuring safe delivery by the friendly mushroom post.",
    "usage": {
      "activation": "toss or shake within 30 feet to activate the coin attractor effect; swallowing activates temporary paralysis",
      "duration": "1 hour for coin attractor; 1d4 rounds of paralysis when swallowed",
      "endsWhen": "the effects end naturally after their duration, or if the coin is removed from the body in case of paralysis",
      "charges": "coin attractor effect has unlimited uses; temporary paralysis can be triggered only once per day"
    },
    "priceReason": "The coin's rarity and its unique properties justify a price of 1,000 XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T00:49:15.300222+00:00",
    "aiReviewedAt": "2026-07-25T00:49:15.300222+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_mushroom_massage": {
    "id": "mushroom_kingdom_mushroom_massage",
    "name": "Rejuvenating Fungal Rubdown",
    "description": "The Rejuvenating Fungal Rubdown is a rare, night-only service provided by Koopa Spa, where specially prepared mushroom extracts are expertly massaged into your skin. This treatment not only restores stamina but also grants a temporary boost to Strength, leaving you feeling revitalized and ready for any challenge. The soothing experience is both refreshing and deeply relaxing, though it may leave you with a peculiar fungal scent that persists until morning.",
    "category": "services",
    "price": 1000,
    "icon": "💆‍♀️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "restore_stamina",
      "temporary_strength_boost"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Stamina",
        "rules": "As an action, the recipient regains 2d10 + your Strength modifier hit points. This effect lasts for 1 hour and can be used once per night."
      },
      {
        "title": "Temporary Strength Boost",
        "rules": "The user gains a +2 bonus to their Strength score until morning. This effect is passive and does not require an action, but it ends if the recipient takes any damage during the night."
      }
    ],
    "levelRequirementReason": "This service is recommended for all adventurers, regardless of level, as it helps restore stamina after a long day.",
    "vendorReason": "Koopa Spa specializes in unique and rejuvenating services that cater to the elite adventurer, ensuring they are at their best before facing any challenges.",
    "shippingDetail": "The delivery drone ensures your service is provided on time, even if you are deep in the Mushroom Kingdom's night sky.",
    "usage": {
      "activation": "Use as an action to apply the treatment and regain stamina.",
      "duration": "1 hour of continuous effect.",
      "endsWhen": "At dawn or upon taking damage during the night.",
      "charges": "Unlimited, but only once per night."
    },
    "priceReason": "The service is priced at 1000 XP to reflect its rarity and the specialized ingredients used in the treatment.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T00:49:44.899370+00:00",
    "aiReviewedAt": "2026-07-25T00:49:44.899370+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_essence": {
    "id": "doughnut_hole_anomaly_essence",
    "name": "Essence of the Anomaly",
    "description": "Captured from a fleeting tear in reality, this shimmering liquid pulsates with chaotic energy. Drinking it provides an unpredictable boost to your stats...or causes you to briefly transform into a sentient doughnut. You've been warned!",
    "category": "consumables",
    "price": 8000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Randomly grants +2 to one ability score (Strength, Dexterity, Intelligence, Wisdom, Charisma, or Constitution) for 2 turns.",
      "Chance of temporary stat reduction (roll a d6: 1-3 = -1, 4-6 = no effect).",
      "Causes the user to speak in rhymes for 1 minute."
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 4
  },
  "warhammer_chaosshard_2": {
    "id": "warhammer_chaosshard_2",
    "name": "Shard of Unmaking",
    "description": "The Shard of Unmaking is a jagged, pulsating fragment torn from a chaotic rift's heart. Its surface crackles with raw magic, and holding it sends shivers up one's spine as if the universe itself resists its touch. This ancient relic can briefly disrupt spells and attacks with unpredictable bursts of energy, making enemies stumble in confusion or fear. However, wielders must be cautious; the shard's power is wild and unyielding, often testing even the most steadfast resolve.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "spell_interrupt",
      "wild_magic"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Rift Runner",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Spell Interruption",
        "rules": "As a reaction when an enemy casts a spell within 5 feet of you, you can attempt to disrupt the spell. The DC for a target to save against this effect is equal to 8 + your proficiency bonus + your Charisma modifier. On a successful save, the spell has no effect."
      },
      {
        "title": "Wild Magic",
        "rules": "Once per short or long rest, you can unleash a surge of raw magical energy as an action. Roll 1d4 and consult the Wild Magic Surge table to determine what happens. This ability cannot be used again until after completing a short or long rest."
      }
    ],
    "levelRequirementReason": "This relic's power is too volatile for those lacking in experience, requiring at least 6th-level wizards and warlocks to handle its unpredictable magic.",
    "vendorReason": "The chaotic dealer thrives on the sale of dangerous relics that can be used against their enemies or to further their own power-hungry pursuits.",
    "shippingDetail": "Due to its volatile nature, the Shard must be shipped via Rift Runner's secure, magically reinforced containers. This ensures it arrives safely and undisturbed.",
    "usage": {
      "activation": "Reaction (Spell Interruption), Action (Wild Magic)",
      "duration": "Instantaneous",
      "endsWhen": "The reaction ends when you use the spell interruption effect or when the Wild Magic surge resolves, whichever comes first. The action ends after one round.",
      "charges": "Unlimited, but only once per short or long rest for the Wild Magic ability."
    },
    "priceReason": "The Shard's raw power and unpredictable nature justify its high price of 1000 XP, making it a valuable yet risky tool for spellcasters.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:50:19.764084+00:00",
    "aiReviewedAt": "2026-07-25T00:50:19.764084+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_fatebinder_3": {
    "id": "warhammer_fatebinder_3",
    "name": "The Binder's Mark",
    "description": "The Binder's Mark is a blood-red amulet adorned with ancient runes that whisper of forgotten fates and lost destinies. Crafted from the very heartwood of an ancient tree, it pulses with a dark energy, subtly altering the flow of time during moments of crisis. Wearers have reported brief windows where their critical rolls are doubled in power, while the odds of avoiding harm seem to shift ever so slightly in their favor. However, those who rely too heavily on its power risk unraveling the very threads of fate itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎲",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "fate_bending",
      "critical_mastery"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Temporal Messenger",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Fate-Bending",
        "rules": "As a bonus action, you can focus your will on the amulet to bend fate for one critical roll. On a successful roll, any success is doubled in effect, and failures are halved in severity. This effect lasts until the end of your next turn."
      },
      {
        "title": "Critical Mastery",
        "rules": "For 1 hour each day, you gain advantage on all saving throws against effects that would impose disadvantage or have a critical failure condition. Once per long rest, you can use an action to negate one such effect that has already been imposed."
      }
    ],
    "levelRequirementReason": "Only those with the discipline and experience of at least 10th level can harness the raw power of fate without unraveling their own destiny.",
    "vendorReason": "Fate Forge is renowned for its mastery over time's flow, and they alone can craft an amulet that bends it so precisely.",
    "shippingDetail": "The Temporal Messenger ensures the amulet arrives intact, as any damage to the runes would render their power unpredictable.",
    "usage": {
      "activation": "Bonus action or reaction for Fate-Bending; once per long rest for Critical Mastery",
      "duration": "One critical roll (Fate-Bending), 1 hour daily (Critical Mastery)",
      "endsWhen": "Ends at the end of your next turn (Fate-Bending); ends with a long rest (Critical Mastery)",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The amulet's price reflects its rarity and the arcane knowledge required to craft it, as well as the risk involved in using such power.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T00:50:15.261038+00:00",
    "aiReviewedAt": "2026-07-25T00:50:15.261038+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_flux_potion": {
    "id": "the_edge_flux_potion",
    "name": "Chromatic Instability Draught",
    "description": "The Chromatic Instability Draught tastes like a tempest of static and sorrow, fizzling in your mouth as it ignites a brief, dazzling yet disorienting maelstrom within you. For a fleeting moment, your form flickers between hues—red as rage, blue as calm, green as envy, violet as despair—all colors swirling together in an otherworldly display. Though the effect is mesmerizing for some, it can leave others reeling with confusion and disorientation. Yet fear not; the potion's effects are temporary, vanishing within moments like a fleeting mirage.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Visual Color Shift",
      "Confusion Chance"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Express Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Visual Color Shift",
        "rules": "Upon consumption, you gain the ability to rapidly shift your appearance between various colors (red, blue, green, violet) for a duration of 1 minute. This effect is purely visual and does not affect your physical form or abilities."
      },
      {
        "title": "Confusion Chance",
        "rules": "There is a 20% chance that any creature you interact with during the effect's duration becomes confused as long as they spend at least one action to do so. The target must make a Wisdom saving throw (DC 13) or become confused for 1 minute."
      }
    ],
    "levelRequirementReason": "This potion is accessible to all adventurers, though its effects are most potent in the hands of those with less experience.",
    "vendorReason": "Edge Outpost specializes in exotic and experimental potions that push the boundaries of what's possible, making Chromatic Instability Draught a fitting addition to their offerings.",
    "shippingDetail": "The potion is shipped in a specially insulated container to maintain its potency through all weather conditions.",
    "usage": {
      "activation": "Consume the draught as an action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when it expires or you take any major physical damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Chromatic Instability Draught is priced high due to its unique and potent effects, which are both visually striking and potentially hazardous.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:50:50.562203+00:00",
    "aiReviewedAt": "2026-07-25T00:50:50.562203+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_starfall_blade": {
    "id": "the_edge_starfall_blade",
    "name": "Astral Fracture",
    "description": "The Astral Fracture is a blade forged from the molten light of shattered stars and the whispers of ancient cosmic rifts. Its surface gleams with a cold, starry sheen that seems to pulse in sync with the night sky. This weapon's chaotic nature grants terrifying advantage on attack rolls, but it drains the wielder's sanity over time; prolonged use risks madness. It also leaves an enemy bleeding and has a chance to teleport the user short distances when needed.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "extra piercing damage",
      "teleportation"
    ],
    "vendor": "final_shop",
    "shippedBy": "sky_carriage",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Extra Piercing Damage",
        "rules": "When you hit with this weapon, it deals an additional 1d6 piercing damage. This effect has no save or duration."
      },
      {
        "title": "Teleport Short Distances",
        "rules": "You can teleport up to 30 feet as a bonus action when you are in combat. You must use your reaction on the turn before teleporting, and this ability has a recharge after every short rest."
      }
    ],
    "levelRequirementReason": "Requires level 9 due to its epic rarity and complex magical properties.",
    "vendorReason": "Final Shop specializes in rare and unique artifacts, including this cosmic relic of immense power.",
    "shippingDetail": "Ships via the swift sky carriage, delivered directly to your door within a week.",
    "usage": {
      "activation": "Bonus action for teleportation; no activation needed for extra damage.",
      "duration": "Instantaneous (teleportation) or until end of turn (extra damage).",
      "endsWhen": "Teleportation ends when you are hit in combat, and the extra damage effect ends at the start of your next turn.",
      "charges": "Recharges after a short rest."
    },
    "priceReason": "The Astral Fracture's balanced price reflects its limited stock and unique cosmic properties, making it an expensive yet fair addition to any character's arsenal.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:50:33.690293+00:00",
    "aiReviewedAt": "2026-07-25T00:50:33.690293+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_instant_potion_of_mild_confusion": {
    "id": "kivotos_item_instant_potion_of_mild_confusion",
    "name": "Instant Potion of Mild Confusion",
    "description": "This frothing vial, labeled 'Instant Potion of Mild Confusion,' is a concoction of ancient herbs and arcane essence. When consumed, it sends your mind reeling in disorientation, causing you to fumble through your next turn while an overwhelming urge compels you to ask the most bizarre questions imaginable. The potion's effects are fleeting but potent, leaving you open to ridicule or clever exploitation by those who know how to twist such moments into advantage.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥴",
    "stock": 87,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Disorienting Confusion",
      "Foolish Questions"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Confusion",
        "rules": "The target falls prone and is incapacitated for 1 turn. It has disadvantage on all attack rolls, ability checks, and saving throws until the start of its next turn."
      },
      {
        "title": "Foolish Questions",
        "rules": "At the end of each of your turns while under the effect of this potion, you must make a Wisdom saving throw (DC 13). On a failure, you must immediately ask one incredibly strange or nonsensical question. This effect ends when the confusion ends."
      }
    ],
    "levelRequirementReason": "This potion is designed for adventurers who are still learning their skills and need to be cautious of disorienting effects.",
    "vendorReason": "Club Supply specializes in potions and elixirs that cater to the whimsical desires of adventurers, making this potion a fitting addition to their inventory.",
    "shippingDetail": "Courier Pigeon ensures swift delivery, often arriving within an hour if consumed immediately upon purchase.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "1 turn of incapacitation and effects",
      "endsWhen": "The target's next turn begins after the confusion ends",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "This potion is priced high due to its unique effects and the rare ingredients required for its creation.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:50:55.940759+00:00",
    "aiReviewedAt": "2026-07-25T00:50:55.940759+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chronometer_of_delayed_action": {
    "id": "kivotos_item_chronometer_of_delayed_action",
    "name": "Chronometer of Delayed Action",
    "description": "The Chronometer of Delayed Action is an ornate, brass-and-copper pocket watch that whispers secrets of time's flow. This relic allows you to briefly pause your own actions in combat, granting a moment for strategic thought or desperate evasion. The gears within seem to hum with ancient magic as they turn, and the watch’s hands flicker with a strange, green light when activated. It is said that this device was crafted by a forgotten alchemist who sought to master time itself—though it's rumored that using it too often may warp one's perception of reality.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Pause",
      "Increased Reaction Speed"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Express Delivery System",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Temporal Pause",
        "rules": "As a reaction, you can pause your own actions for up to one turn. During this time, you are immune to all attacks and effects from other creatures. This ability can be used once per combat."
      },
      {
        "title": "Increased Reaction Speed",
        "rules": "You gain a +10 bonus to Dexterity (Reaction) saving throws. This effect is active at all times while you have the Chronometer of Delayed Action equipped."
      }
    ],
    "levelRequirementReason": "Only those with significant experience in combat and time manipulation can fully utilize this relic's power.",
    "vendorReason": "The Academy Armory specializes in rare, historically-significant armaments and artifacts, making it the perfect vendor for such a unique item.",
    "shippingDetail": "This item is shipped via Express Delivery System with priority handling to ensure its arrival remains a surprise until you open it.",
    "usage": {
      "activation": "Reaction (once per combat)",
      "duration": "Up to one turn",
      "endsWhen": "The effect ends when the turn concludes or if attacked by another creature.",
      "charges": "One use per combat"
    },
    "priceReason": "This item represents a rare, historically-significant piece that offers both defensive and tactical advantages but is not overpowered for its price.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-25T00:51:25.950058+00:00",
    "aiReviewedAt": "2026-07-25T00:51:25.950058+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_elemental_badge_of_discord": {
    "id": "equestria_item_elemental_badge_of_discord",
    "name": "Badge of Discord - Twilight's Disapproval",
    "description": "The Badge of Discord - Twilight's Disapproval is a dark purple, intricately carved amulet that whispers malevolent intent to nearby creatures. Its chilling aura subtly corrupts the emotions of those who wear it or are in its vicinity, fostering petty disputes and arguments among them. The badge grants access to restricted areas where Stygian magic thrives but also increases the likelihood of minor chaos during combat, making it a dangerous tool for those seeking discord rather than peace.",
    "category": "faction",
    "price": 1000,
    "icon": "😈",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Sow Discord",
      "Increased Chaos"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Royal Guard Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Sow Discord",
        "rules": "Wearing this badge causes nearby creatures to become prone to arguments and petty disputes. Any creature within 10 feet of the wearer has a disadvantage on Charisma (Persuasion) checks for 1 hour, starting when the item is activated and lasting until the end of their next long rest."
      },
      {
        "title": "Increased Chaos",
        "rules": "During combat, any creature that the wearer targets with an attack or spell has a 25% chance to be affected by minor chaos. This effect lasts for 1 minute, during which time the target must make a DC 14 Wisdom saving throw at the start of their turn; on a failure, they are disoriented and have disadvantage on all attacks."
      }
    ],
    "levelRequirementReason": "Twilight Sparkle's badge requires a high level to wield responsibly due to its potential for causing significant disruption in social situations.",
    "vendorReason": "The Crystal Empire is known for its trade with Stygian ponies, making it the ideal vendor for items of discordant magic.",
    "shippingDetail": "The badge must be shipped through secure channels due to its potential for causing unrest during transit.",
    "usage": {
      "activation": "Activates when put on by a pony, remaining active until the end of their next long rest or destroyed.",
      "duration": "1 hour per activation",
      "endsWhen": "The wearer removes it or completes a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The badge's rarity and the risk of causing social unrest justify its moderate price.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-25T00:51:57.021816+00:00",
    "aiReviewedAt": "2026-07-25T00:51:57.021816+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_charm": {
    "id": "internet_firewall_charm",
    "name": "Guardian of the Pixel Stream",
    "description": "Guardian of the Pixel Stream is a miniature firewall charm, crafted from sleek, glowing silicon and encased in a polished obsidian casing. It hums softly as it deflects intrusive ads and unwanted downloads, offering a digital sanctuary for those navigating the chaotic web. This relic was designed by a paranoid coding genius who lived through years of relentless cyber harassment. With each activation, it subtly increases your digital stealth, making you harder to detect in online forums.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Deflect Intrusive Ads",
      "Enhanced Digital Stealth"
    ],
    "vendor": "cyber_market",
    "shippedBy": "packet_relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deflect Intrusive Ads",
        "rules": "As a bonus action, activate the charm to deflect one unwanted advertisement or pop-up. The charm has a 10% chance to block such an attempt each day, with a save DC of 13 for the target. Once per long rest."
      },
      {
        "title": "Enhanced Digital Stealth",
        "rules": "The charm grants you advantage on Dexterity (Stealth) checks made to remain undetected in online forums and digital spaces for up to one hour after activation. Requires a successful Wisdom (Perception) check to use effectively."
      }
    ],
    "levelRequirementReason": "This charm is designed for those just starting their journey through the cyber wilderness, but even experienced adventurers find it invaluable.",
    "vendorReason": "The cyber market specializes in tech and gadgetry that helps traders navigate the digital world safely.",
    "shippingDetail": "Ships via packet relay within three days, delivered directly to your digital device.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; lasts up to one hour per activation",
      "endsWhen": "Ends when the duration expires or you deactivate it as a bonus action",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "This charm offers unique and practical benefits that are hard to replicate with mundane items.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:51:21.731170+00:00",
    "aiReviewedAt": "2026-07-25T00:51:21.731170+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_starshard_of_valoria": {
    "id": "faerun_item_starshard_of_valoria",
    "name": "Shard of Valorian Radiance",
    "description": "The Shard of Valorian Radiance is a crystalline fragment harvested from the heart of a star that fell during the War of the Lance. Its surface glows with an ethereal light, and when held, it radiates divine energy capable of warding off undead and granting access to potent healing magic. However, those who gaze upon it for too long may experience visions of celestial beings, a side effect that can be mitigated by focusing on its protective properties.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "undead resistance",
      "healing surge"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "angelic courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Undead Resistance",
        "rules": "The user gains resistance to necrotic damage and advantage on saving throws against being charmed or frightened. This effect lasts until the start of your next turn."
      },
      {
        "title": "Healing Surge",
        "rules": "Activates as a bonus action, providing the user with 2d8 healing to themselves or another creature within reach. The shard can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Shard's divine power is accessible to all who seek it, but its visions are most easily ignored by those of lower experience.",
    "vendorReason": "Waterdeep Market is renowned for its connection to celestial artifacts and the patrons who can appreciate their power and lore.",
    "shippingDetail": "The shard must be delivered by an angelic courier, ensuring it arrives undisturbed and in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate healing surge; passive undead resistance effect until next turn.",
      "duration": "Passive until the start of your next turn; healing surge is instantaneous.",
      "endsWhen": "The user takes damage, or after one use per long rest for the healing surge.",
      "charges": "Unlimited (recharges after a long rest)"
    },
    "priceReason": "Balanced at 1000 XP to reflect its divine origin and utility without overshadowing other premium items.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-25T00:51:12.022130+00:00",
    "aiReviewedAt": "2026-07-25T00:51:12.022130+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_voidshard": {
    "id": "warhammer_voidshard",
    "name": "The Obsidian Shard of Ruin",
    "description": "The Obsidian Shard of Ruin is a warhammer forged from the heart of a fallen god, pulsing with void energy. Its obsidian surface crackles with necrotic light, and those who wield it may feel their sanity fray. A relic of ancient ruin, it promises devastation to foes but drives its wielder to madness. Legends tell of its unpredictable nature, making it both feared and desired by the unsteady of mind.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🖤",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "void damage",
      "fear"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Void Damage",
        "rules": "When you hit with a melee attack using The Obsidian Shard of Ruin, deal 4d8 necrotic damage. If the target is reduced to half its hit points or fewer during this fight, it must succeed on a DC 15 Constitution saving throw or be frightened until the end of your next turn."
      },
      {
        "title": "Frighten",
        "rules": "There's a 30% chance that a creature you hit with an attack using The Obsidian Shard of Ruin is frightened. This effect has no save and lasts until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The Obsidian Shard of Ruin's unpredictable nature requires a seasoned warrior to wield it without succumbing to madness.",
    "vendorReason": "Only the Chaos Dealer, a merchant of forbidden knowledge and artifacts, would dare sell such an item.",
    "shippingDetail": "Ships via Shadow Messenger, known for its swift and secretive couriers who ensure the item's safe arrival in the darkest hours.",
    "usage": {
      "activation": "Melee weapon attack",
      "duration": "Instantaneous effect",
      "endsWhen": "Target saves or is reduced to half hit points; effect ends at end of next turn",
      "charges": "Unlimited, but only one creature can be frightened per fight"
    },
    "priceReason": "The price reflects the item's rarity and the risk involved in wielding it.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:51:31.691881+00:00",
    "aiReviewedAt": "2026-07-25T00:51:31.691881+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_whispering_star_shard": {
    "id": "equestria_item_whispering_star_shard",
    "name": "Whispering Star Shard",
    "description": "A fragment of a fallen star, this shard hums with ancient magic. Hold it close and listen carefully – sometimes, it whispers secrets of forgotten constellations and the locations of hidden rainbow gems... or just static.",
    "category": "curiosities",
    "price": 850,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "chance_to_reveal_hidden_objects",
      "minor_mana_regeneration",
      "attracts_elemental_spirits"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "griffin_express",
    "levelRequirement": 8
  },
  "equestria_item_wario's_glitterbomb_starter": {
    "id": "equestria_item_wario's_glitterbomb_starter",
    "name": "Wario’s Glitter Bomb Starter Kit",
    "description": "The Wario’s Glitter Bomb Starter Kit is a compact, gleaming canister that unleashes a blinding burst of rainbow-colored glitter and magic. When activated, it releases a dazzling explosion that not only blinds foes for a moment but also paints them in iridescent dust, leaving a trail of shimmering confetti behind. This volatile concoction is a mix of concentrated rainbow magic and an ingredient that's better left unknown to the general public.",
    "category": "consumables",
    "price": 1000,
    "icon": "💣",
    "stock": 23,
    "rarity": "common",
    "stockType": "night_only",
    "effects": [
      "blinding_blast",
      "paint_with_shimmer"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blinding Blast",
        "rules": "When activated, the glitter bomb releases a burst of light and magic. Targets within a 10-foot radius must succeed on a DC 12 Dexterity saving throw or be blinded for 1 minute."
      },
      {
        "title": "Paint with Shimmer",
        "rules": "The explosion leaves targets covered in iridescent glitter, which lasts until the end of their next turn. This effect can be removed by bathing or cleaning but not by natural means such as brushing or drying off."
      }
    ],
    "levelRequirementReason": "This simple kit is accessible to low-level adventurers who need a basic crowd-control option.",
    "vendorReason": "The Crystal Empire sells this item because it caters to adventurers looking for quick and colorful solutions during battles.",
    "shippingDetail": "Ships via dragon courier, delivery is swift but may cause a bit of dust due to the glitter.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effects end once their duration expires or when the target cleans themselves.",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "Balanced price for an item that provides both immediate and long-lasting effects in combat.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T00:52:26.771038+00:00",
    "aiReviewedAt": "2026-07-25T00:52:26.771038+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravity_anchor": {
    "id": "doughnut_hole_gravity_anchor",
    "name": "Voidstone Gravimetric Tether",
    "description": "The Voidstone Gravimetric Tether is a unsettlingly sweet-smelling tether forged from the remnants of voidstone, a material known for its chaotic nature. It stabilizes objects in areas affected by unpredictable gravity, briefly normalizing the space around it. Legends whisper that consuming a doughnut while using this tether grants temporary resistance to spatial distortions, though exactly how remains a mystery. The tether's core glows faintly with an ethereal light, hinting at its connection to the void.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Spatial Normalization",
      "Falling Object Stabilization"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Spatial Normalization",
        "rules": "When activated as a bonus action, this tether creates a localized area of stable gravity. Any object within a 10-foot radius remains in place for 1 minute, immune to disorienting effects and chaotic gravity shifts. This effect has no save DC but is limited to once per short rest."
      },
      {
        "title": "Falling Object Stabilization",
        "rules": "If an object within the tether's area begins to fall, it stabilizes mid-air for 1 round (30 seconds). The object does not hit the ground and can be retrieved. This effect is limited to one use per long rest."
      }
    ],
    "levelRequirementReason": "The tether requires a moderate understanding of gravimetric principles, making it accessible only to characters at least second level.",
    "vendorReason": "Hole Hawker, known for their expertise in unusual and magical items, carries this tether due to its unique properties and the demand from explorers venturing into chaotic regions.",
    "shippingDetail": "Delivery via the Void Courier is expedited, ensuring the tether arrives in pristine condition despite the unpredictable nature of space travel.",
    "usage": {
      "activation": "Bonus action to activate, once per short rest for Spatial Normalization; once per long rest for Falling Object Stabilization",
      "duration": "Spatial Normalization lasts 1 minute; Falling Object Stabilization lasts 1 round (30 seconds)",
      "endsWhen": "Effect expires or the tether is destroyed",
      "charges": "Unlimited, but limited by short and long rest durations"
    },
    "priceReason": "The unique materials and crafting process required to create this tether justify its moderate price in experience points.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:51:47.406034+00:00",
    "aiReviewedAt": "2026-07-25T00:51:47.406034+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_confection": {
    "id": "doughnut_hole_void_confection",
    "name": "Singularity Swirl Pastry",
    "description": "The Singularity Swirl Pastry appears as a dense, swirling mass of dough that seems to defy the laws of physics. Its surface is dotted with minuscule black holes that flicker like stars in an infinite void. Consuming this pastry grants you temporary immunity to void magic and the chance to create a miniature black hole that pulls in nearby small objects. Wario recommends eating it quickly, as prolonged exposure may cause uncontrollable giggling or a sudden craving for more pastries.",
    "category": "premium",
    "price": 1000,
    "icon": "🖤",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "void magic immunity",
      "miniature black hole creation"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Quantum Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Magic Immunity (Passive)",
        "rules": "Grants temporary immunity to void-based spells and effects. This effect lasts for 30 seconds upon consumption."
      },
      {
        "title": "Miniature Black Hole Creation (Random, 10%)",
        "rules": "There is a 10% chance that consuming this pastry will cause the creation of a miniature black hole which pulls in and traps any small object within its radius. The effect ends when the pastry's magical properties dissipate."
      }
    ],
    "levelRequirementReason": "Even novice mages can appreciate the strange and dangerous properties of this pastry.",
    "vendorReason": "Wario, a master of oddball confections, is known for his eccentric creations that defy conventional physics.",
    "shippingDetail": "Ships via Quantum Courier, which ensures timely delivery through the fabric of space-time.",
    "usage": {
      "activation": "Eating the pastry",
      "duration": "30 seconds (passive effect)",
      "endsWhen": "The magical properties dissipate after 30 seconds",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this pastry offers a unique and dangerous experience that few can afford to miss.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:52:18.005952+00:00",
    "aiReviewedAt": "2026-07-25T00:52:18.005952+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_lens": {
    "id": "doughnut_hole_anomaly_lens",
    "name": "Lens of the Whispering Void",
    "description": "Peering through this lens reveals fractured realities, glimpses of other dimensions where doughnuts may spiral into infinity or shrink to vanishing points. It whispers secrets of forgotten realms, but prolonged use can distort your perception of time and space, making you crave more of the sweet treat. The Lens of the Whispering Void is a rare artifact from the mysterious Center Seller, known for their eccentric wares, and delivered by the enigmatic Void Messenger.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 11,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Glimpse Alternate Realities",
      "Divination Bonus"
    ],
    "vendor": "center_seller",
    "shippedBy": "void_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse Alternate Realities",
        "rules": "When activated as a bonus action, the user can peer through the lens and gain advantage on one divination check of their choice. The effect lasts for 1 hour or until used again."
      },
      {
        "title": "Divination Bonus",
        "rules": "The Lens provides a +2 bonus to all divination checks made with items related to food, drink, or exploration. This benefit is active while wearing the lens and does not require activation."
      }
    ],
    "levelRequirementReason": "The artifact requires minimal arcane knowledge for use.",
    "vendorReason": "Center Seller is known for their unique and otherworldly curiosities, including this rare lens.",
    "shippingDetail": "Delivered by the Void Messenger in a sealed package marked with enigmatic symbols.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour or until used again",
      "endsWhen": "The effect ends when used again or after one hour.",
      "charges": "Unlimited, but daily use is limited to once per day."
    },
    "priceReason": "Balanced for its unique utility and rarity in the market.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T00:52:48.266046+00:00",
    "aiReviewedAt": "2026-07-25T00:52:48.266046+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_edgeguardians_amulet": {
    "id": "almost_edge_item_edgeguardians_amulet",
    "name": "Amulet of the Edge Guardians",
    "description": "The Amulet of the Edge Guardians is crafted from ancient, rusted metal that glows faintly with an otherworldly light. Worn by those who walk the boundaries between worlds, it shields its wearer against the creeping madness that seeps through the cracks in reality. Its presence subtly shifts your perception, making you strangely resistant to the unsettling echoes of the void and giving rise to a sense of calm amidst chaos.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Mental Shield",
      "Void Resistance"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Spectral Messenger",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Mental Shield",
        "rules": "The wearer gains a +4 bonus to AC. Additionally, they have immunity to madness effects and can attempt a saving throw with a DC of 15 when exposed to such effects."
      },
      {
        "title": "Void Resistance",
        "rules": "There is a 10% chance per long rest that the wearer reflects a spell cast at them back to its caster. The reflected spell has half its original power, rounded down. This effect can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The amulet's complex enchantments require a high level of magical knowledge and discipline.",
    "vendorReason": "Edge Wanderers are known for their travels through the boundaries between worlds, making them familiar with such protective artifacts.",
    "shippingDetail": "The amulet is delivered via a Spectral Messenger who ensures it arrives safely to its destination without attracting unwanted attention.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (once per long rest for the reflection ability)",
      "endsWhen": "Destroyed if exposed to extreme magical damage",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "The amulet's rarity and unique enchantments justify its relatively lower price compared to other epic items.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T00:52:35.644231+00:00",
    "aiReviewedAt": "2026-07-25T00:52:35.644231+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_shepherd's_boots": {
    "id": "connectopia_pioneer_shepherd's_boots",
    "name": "Sturdy Block Boots",
    "description": "These boots were forged from the densest Connectopian blocks, reinforced with pioneer grit! They provide exceptional traction and protection against falling debris, perfect for exploring the perilous frontier.",
    "category": "equipment",
    "price": 750,
    "icon": "👢",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "increased movement speed by 5%",
      "resistance to falling damage (decreased fall damage by 50%)",
      "improved traction on block surfaces"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "block_cart",
    "levelRequirement": 3
  },
  "connectopia_shard_of_the_great_architect": {
    "id": "connectopia_shard_of_the_great_architect",
    "name": "Echoing Shard of Genesis",
    "description": "Recovered from the Great Architect's workshop, the Echoing Shard of Genesis hums with the very essence of Connectopia’s blueprint. As you hold it, visions flicker before your eyes—potential futures shaped by the architect's hand. It grants a rare glimpse into the crafting process, allowing you to summon miniature constructs that assist in your work. However, the shard also draws chaotic echoes, which can be dangerous if not handled with care.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Summons an assistant construct for crafting tasks.",
      "Provides fleeting visions of potential futures."
    ],
    "vendor": "block_smith",
    "shippedBy": "teleportation_beacon",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Construct Assistant",
        "rules": "Activates as a bonus action, creating a miniature construct that assists in crafting. The construct lasts until the end of your next turn and provides a +2 bonus to any Crafting check you make during this time."
      },
      {
        "title": "Vision Glimpse",
        "rules": "Activates once per long rest, allowing the user to briefly see potential future outcomes. This grants advantage on one skill check or saving throw of their choice before expiring."
      }
    ],
    "levelRequirementReason": "The shard's power and complexity require a higher level of mastery.",
    "vendorReason": "Block Smith, a master of Connectopian artifacts, can source the rarest relics from the Great Architect’s workshop.",
    "shippingDetail": "The shard is delivered via teleportation beacon, ensuring safe and swift arrival.",
    "usage": {
      "activation": "Bonus action for summoning the construct; once per long rest to use visions.",
      "duration": "Until end of next turn for the construct; one use per long rest for vision.",
      "endsWhen": "The effect ends when its duration expires or if the shard is damaged beyond repair.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Reflecting its unique utility and rarity, the Echoing Shard of Genesis is priced at 1000 XP.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T00:53:29.985062+00:00",
    "aiReviewedAt": "2026-07-25T00:53:29.985062+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_wario_s_lucky_charm": {
    "id": "faerun_item_wario_s_lucky_charm",
    "name": "Wario's Guaranteed Good Fortune Token",
    "description": "Wario's Guaranteed Good Fortune Token gleams with an unsettling sheen, a bizarre souvenir from the dark whimsy of the Wastelands. This token is said to have been personally crafted by the infamous thief Wario himself, though it seems more likely that it was forged in his image by some mischievous force. Regardless, it’s guaranteed to bring… something, and it's not always what you'd hope for; a free pie or an encounter with a giant spider could be just around the corner.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Reroll Failed Checks",
      "Advantage on Persuasion"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Magical Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reroll Failed Checks",
        "rules": "Activates as a bonus action. The user can reroll one failed skill check, but the new roll cannot exceed the original roll plus 10. This effect has no save DC and is limited to once per long rest."
      },
      {
        "title": "Advantage on Persuasion",
        "rules": "The user gains advantage on persuasion checks against simple creatures for a duration of one hour, starting when the item is activated by using it as an action. This effect ends if the user stops interacting with the creature or if they are incapacitated."
      }
    ],
    "levelRequirementReason": "The token's chaotic magic requires no specific level to wield, making it accessible to all adventurers.",
    "vendorReason": "Waterdeep Market is known for its eclectic mix of goods, including oddities like Wario’s Guaranteed Good Fortune Token.",
    "shippingDetail": "The magical delivery drone ensures quick and safe transport, often delivering the token with a slight delay due to its whimsical nature.",
    "usage": {
      "activation": "Bonus Action or Action",
      "duration": "Instantaneous (Reroll), One Hour (Advantage)",
      "endsWhen": "New Roll Exceeds Original +10 (Reroll), User Stops Interacting with Creature or Incapacitates (Advantage)",
      "charges": "Unlimited"
    },
    "priceReason": "The token's chaotic magic and the potential for either boon or misfortune justify its moderate price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:53:24.842124+00:00",
    "aiReviewedAt": "2026-07-25T00:53:24.842124+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_pipe_wrench": {
    "id": "mushroom_kingdom_item_pipe_wrench",
    "name": "Pipe Wrench of Disassembly",
    "description": "This hefty wrench is forged from solid mushroom metal and can loosen even the most stubborn pipes! Use it to dismantle enemy defenses, repair broken machinery, or just mess around – Wario approves!",
    "category": "equipment",
    "price": 8000,
    "icon": "🔧",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "increased damage to mechanical enemies",
      "+5 repair skill",
      "chance to disable enemy traps"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_express",
    "levelRequirement": 10
  },
  "teyvat_item_vision_catalyst": {
    "id": "teyvat_item_vision_catalyst",
    "name": "Archon’s Whisper Charm",
    "description": "Crafted from solidified lightning and a shard of an ancient Vision, this charm seems to murmur with forgotten prayers. It doesn't grant power directly but provides the party with a skilled consultant for one hour—perfect for analyzing enemy weaknesses or finding hidden paths, assuming they can understand its cryptic pronouncements. The Archon’s Whisper Charm is said to have been gifted by an ancient archon to guide lost souls, and its ethereal glow hints at untold secrets of the Vision.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Consultative Insight",
      "Tactical Advantage"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "dragon_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Consultative Insight",
        "rules": "The Archon’s Whisper Charm grants the party a +2 bonus to Intelligence checks for one hour. This effect is passive and does not require any action from the user."
      },
      {
        "title": "Tactical Advantage",
        "rules": "Once per long rest, the charm allows the party to learn a single tactical advantage (chosen by the user) that provides a +2 bonus to an ability check or saving throw. This effect is instantaneous and cannot be used more than once per day."
      }
    ],
    "levelRequirementReason": "The charm's abilities are accessible to lower-level characters, focusing on enhancing their tactical acumen rather than raw power.",
    "vendorReason": "Liyue Harbor traders have access to rare and ancient artifacts like the Archon’s Whisper Charm due to their connections with the Vision and the archons.",
    "shippingDetail": "Shipped via the swift Dragon Cart, ensuring that the charm arrives in pristine condition.",
    "usage": {
      "activation": "Passive for Consultative Insight; once per long rest for Tactical Advantage",
      "duration": "One hour for Consultative Insight; instantaneous for Tactical Advantage",
      "endsWhen": "At the end of each day for Consultative Insight; after use for Tactical Advantage",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Archon’s Whisper Charm is priced at 1000 XP, reflecting its rarity and utility in combat and strategy.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:54:27.830834+00:00",
    "aiReviewedAt": "2026-07-25T00:54:27.830834+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_storm_shard": {
    "id": "teyvat_item_storm_shard",
    "name": "Fragment of the Tempest’s Fury",
    "description": "The Fragment of the Tempest’s Fury is a crystalline shard that shimmers with raw electrical energy, its jagged edges glinting in the dim light like stinging needles. This relic was forged from the very essence of a tempest, capturing the fury of the storm within its core. When activated, it releases a searing burst of lightning that can shock and awe both friend and foe alike, making it a favorite among thrill-seekers and miscreants alike.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚡",
    "stock": 18,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Shocking Discharge",
      "Enhanced Rarity Drops"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shocking Discharge",
        "rules": "When the Fragment is thrown or used as an action, it releases a burst of lightning that deals 50 thunder damage to one target within 30 feet. This effect has a 30% chance to also inflict the 'shocked' condition on the target for 1 minute (DC 14 Consave). The item recharges after a long rest."
      },
      {
        "title": "Enhanced Rarity Drops",
        "rules": "Whenever you find or encounter rare items, there is a +20% chance that this item will increase your chances of obtaining them. This effect does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "Anyone can wield the Fragment for its electrifying display and practical use in both combat and exploration.",
    "vendorReason": "Inazuma Imports specializes in exotic and enchanted items, making this shard a perfect fit for their inventory.",
    "shippingDetail": "The Sea Serpent ensures swift delivery of the Fragment, often arriving with a dramatic splash that adds to its mystique.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Recharges after a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Fragment of the Tempest’s Fury is priced at 1000 XP due to its unique elemental properties and rarity-enhancing capabilities.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-25T00:54:01.310198+00:00",
    "aiReviewedAt": "2026-07-25T00:54:01.310198+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_gloomfruit": {
    "id": "animatopia_gloomfruit",
    "name": "Nightshade Berry Pouch",
    "description": "The Nightshade Berry Pouch is a dark leather pouch filled with shimmering berries that glow faintly under moonlight. These berries are said to be harvested from the cursed forests of Animatopia, where they grow in the shadows. Consuming them allows you to slip into invisibility briefly, making you nearly undetectable for three turns, perfect for covert operations or escaping danger. The berries also provide a small but welcome health boost when consumed, ensuring your body is ready for whatever comes next.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Invisibility",
      "Health Restorative"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "When you consume the berries, you gain invisibility for up to three turns. This effect lasts until the end of your next turn after consuming the berries. You can only use this ability once every long rest."
      },
      {
        "title": "Health Restorative",
        "rules": "Upon consumption, you regain 1d4 + your Constitution modifier hit points. This effect is instantaneous and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "The Nightshade Berry Pouch requires no level because it provides a basic utility that can benefit characters of any class or background.",
    "vendorReason": "Forest Market is known for its wide variety of exotic and useful goods, including those sourced from the dark heart of Animatopia.",
    "shippingDetail": "The berries are delivered by a large giant snail, ensuring they remain fresh and potent upon arrival.",
    "usage": {
      "activation": "Eating one berry from the pouch",
      "duration": "Up to three turns of invisibility per use",
      "endsWhen": "Ends at the start of your next turn after consuming a berry; ends if you take damage or are targeted by an effect that explicitly reveals creatures within its area of effect.",
      "charges": "Unlimited, but only one use every long rest"
    },
    "priceReason": "The Nightshade Berry Pouch is priced at 1000 XP due to the potent effects it provides and the rare nature of its ingredients.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:53:50.131047+00:00",
    "aiReviewedAt": "2026-07-25T00:53:50.131047+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_ancestor_scroll": {
    "id": "animatopia_ancestor_scroll",
    "name": "Whispers of the Elder Beasts",
    "description": "Whispers of the Elder Beasts is an ancient parchment, its surface painted with iridescent inks sourced from luminescent fungi that grow only in the deepest parts of Animatopia’s forgotten forests. The scroll crackles with the spirits of long-lost ancestors who speak in riddles and grunts, offering cryptic visions of the future. Though their advice is often muddled, it can still provide fleeting insight into impending events or hidden truths about your path forward.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Vision of the Future",
      "Fear Resistance"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "phantom_owl",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Vision of the Future",
        "rules": "As a bonus action, you may briefly commune with the spirits and gain a single-use vision that reveals either an upcoming event, hidden secret, or impending danger. The vision lasts for 1 minute. It has a 50% chance to provide accurate information, but the nature of the vision is always cryptic and requires interpretation."
      },
      {
        "title": "Fear Resistance",
        "rules": "For the duration of one short rest (8 hours), you gain temporary resistance to fear effects. This effect cannot be gained more than once per day, and it does not stack with other similar abilities."
      }
    ],
    "levelRequirementReason": "Only those who have reached a certain level of wisdom and experience can properly commune with the spirits of Animatopia’s ancestors.",
    "vendorReason": "The Beast Bazaar is known for its rare and ancient artifacts, including items that connect users to otherworldly forces like these scrolls.",
    "shippingDetail": "Delivered by the Phantom Owl courier service, which ensures swift delivery of such fragile and powerful relics.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until interrupted",
      "endsWhen": "The effect ends when you take a short rest or are incapacitated",
      "charges": "One use per day"
    },
    "priceReason": "This price reflects the scroll's rarity, the materials used in its creation, and the power it grants.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T00:54:20.831367+00:00",
    "aiReviewedAt": "2026-07-25T00:54:20.831367+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_omen_shard": {
    "id": "curiosity_omen_shard",
    "name": "Shard of a Twisted Omen",
    "description": "The Shard of a Twisted Omen is an obsidian fragment that hums with dark energy, emanating from an ancient prophecy gone awry. It pulses with unsettling force, granting fleeting glimpses into possible futures, most often foreboding and tinged with Wario’s ill-fated wardrobe choices. Holding it feels like walking through a storm of misfortune, as the shard occasionally reveals enemy weaknesses but also brings minor healing and a boost to luck, though these effects are fleeting.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "enemy_weakness_revelation",
      "minor_healing",
      "luck_boost"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Winged Messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enemy Weakness Revelation",
        "rules": "As an action, you can focus on the shard for 1 minute. During this time, there is a 20% chance that when you or your allies attack an enemy within 5 feet of you, they are revealed to have a weakness that grants advantage on your next attack against them. This effect ends if you move more than 10 feet away from the shard."
      },
      {
        "title": "Minor Healing",
        "rules": "At the start of your turn while holding the shard, roll a d6 and add half your Wisdom modifier (rounded down) to this total. You regain hit points equal to that amount as long as you hold it."
      },
      {
        "title": "Luck Boost",
        "rules": "While holding the shard, all saving throws have advantage for 1 hour. This effect ends if you drop or lose possession of the shard."
      }
    ],
    "levelRequirementReason": "Adept-level characters are more adept at interpreting and channeling the shard's dark energy.",
    "vendorReason": "The fate weavers at Fate Forge have a special connection to ancient prophecies and their fragments.",
    "shippingDetail": "Delivered swiftly by Winged Messengers, the shard arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (until you move more than 10 feet from it)",
      "endsWhen": "You move more than 10 feet away or lose possession of the shard",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its uncommon rarity and the balance between its minor healing, luck boost, and enemy weakness revelation.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:54:55.272177+00:00",
    "aiReviewedAt": "2026-07-25T00:54:55.272177+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_desolation_strike": {
    "id": "warhammer_desolation_strike",
    "name": "Desolation Strike",
    "description": "Forged in the heart of a shattered empire, this hammer screams with the fury of countless battles. It feels strangely warm to the touch... almost like Wario's belly after a particularly large pizza.",
    "category": "equipment",
    "price": 7500,
    "icon": "🔥",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "increased_critical_hit_chance",
      "massive_damage_1",
      "chance_to_stun"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Night Crawler",
    "levelRequirement": 6
  },
  "teyvat_item_stormcaller_amulet": {
    "id": "teyvat_item_stormcaller_amulet",
    "name": "Stormcaller's Amulet",
    "description": "Stormcaller's Amulet, forged in the heart of a thunderstorm, hums with raw wind energy, pulsing with the fury and grace of the tempest. This amulet not only enhances its wearer’s affinity for gusts but also provides a tangible connection to the elements, granting them the ability to summon small whirlwinds on impact. Those who wear it can feel the storm within, making their attacks more unpredictable and devastating.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Wind Enhanced Strikes",
      "Whirlwind Summoning"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_sprint",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Wind Enhanced Strikes",
        "rules": "When you hit a target with a melee attack, you add your proficiency bonus to wind damage dealt. This effect has no cooldown and can be used once per short or long rest."
      },
      {
        "title": "Whirlwind Summoning",
        "rules": "As an action, you can summon a small whirlwind in a 10-foot radius centered on yourself. This whirlwind lasts until the end of your next turn and deals 1d6 wind damage to creatures within its area at the start of each of their turns. Creatures make a DC 15 Strength saving throw. On failure, they are pushed out of the whirlwind's area."
      }
    ],
    "levelRequirementReason": "The amulet's power aligns with those who have demonstrated proficiency in handling elemental forces.",
    "vendorReason": "Mondstadt, a city built on the principles of balance and harmony with nature, is known for its affinity for such powerful yet controlled tools.",
    "shippingDetail": "Ships via Winged Sprint, ensuring swift delivery from the heart of Mondstadt.",
    "usage": {
      "activation": "Action or Reaction (summoning)",
      "duration": "Until end of next turn (whirlwind summoning)",
      "endsWhen": "Ends when the user takes a short rest or uses a new whirlwind summon",
      "charges": "Unlimited, recharges on a short or long rest"
    },
    "priceReason": "Balanced at this price to reflect its powerful yet manageable effects and limited utility.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:55:07.587639+00:00",
    "aiReviewedAt": "2026-07-25T00:55:07.587639+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_loyalty_scroll": {
    "id": "teyvat_item_loyalty_scroll",
    "name": "Scroll of Unwavering Loyalty",
    "description": "The Scroll of Unwavering Loyalty is a meticulously crafted parchment adorned with the Geo Archon's emblem in gold leaf. As you unfurl it, a subtle force seems to align your words and actions, fostering unwavering loyalty among those around you – or at least, they believe you are dedicated! This scroll not only enhances your charisma checks when dealing with Geo-related characters but also grants you resistance against earth damage with a chance of temporary buffs. It's surprisingly useful for navigating the treacherous waters of diplomacy and conflict alike.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhances Charisma Checks",
      "Resistance to Earth Damage"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Charisma Checks",
        "rules": "When making charisma checks related to Geo-related characters, you gain a +1 bonus. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Resistance to Earth Damage",
        "rules": "You have advantage on saving throws against earth damage. This effect is active as long as the scroll remains in your possession and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The scroll's subtle enchantments are accessible to any adventurer, making it a versatile tool for all levels.",
    "vendorReason": "As the heart of Geo-related trade and diplomacy in Teyvat, Liyue Harbor is the perfect place to find this scroll.",
    "shippingDetail": "Shipped by sea cart directly from Teyvan ports, ensuring scrolls arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect upon possession; requires no action to activate.",
      "duration": "Until the end of your next short or long rest for charisma checks buff; once per short rest for earth damage resistance.",
      "endsWhen": "Ends at the start of each short or long rest, or when you lose possession of the scroll.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The scroll's balanced price reflects its versatile utility and enchantments without being overpowered.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T00:55:32.167461+00:00",
    "aiReviewedAt": "2026-07-25T00:55:32.167461+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chrono_essence": {
    "id": "teyvat_item_chrono_essence",
    "name": "Chrono Essence - Temporal Shift",
    "description": "Chrono Essence - Temporal Shift is a vial of shimmering light captured from the fractured echoes of time. This essence allows its wielder to manipulate temporal flow, offering fleeting moments of distortion and rewind. The essence grants a brief pause in the flow of time for the user, creating an opportunity to act with precision. It also provides the chance to reverse a single action up to 3 seconds ago, perfect for outsmarting foes or correcting mistakes on the battlefield.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Distortion",
      "Action Rewind"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_wind_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as a bonus action, Chrono Essence causes time to slow down for the user by 30% for up to 5 seconds. This effect grants an advantage on attack rolls and Dexterity saving throws within this duration. The essence can only be used once per long rest."
      },
      {
        "title": "Action Rewind",
        "rules": "Activate as a reaction to immediately reverse the last action taken by the user or an adjacent ally, allowing for up to 3 seconds of rewound time. If used on yourself, it corrects your most recent mistake. This effect has no save DC and can only be used once per short rest."
      }
    ],
    "levelRequirementReason": "This essence is accessible early in the adventuring career to allow characters of all levels to experiment with time manipulation.",
    "vendorReason": "Inazuma Imports specializes in rare and exotic artifacts, including Chrono Essence which showcases their expertise in temporal phenomena.",
    "shippingDetail": "Shipped by the swift Wind Messenger for immediate delivery with minimal delay.",
    "usage": {
      "activation": "Bonus action to activate Temporal Distortion; Reaction to activate Action Rewind.",
      "duration": "Temporal Distortion lasts up to 5 seconds, Action Rewind is instantaneous.",
      "endsWhen": "The effect ends when the duration expires or when a new activation occurs.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Given its limited but powerful effects and the rare nature of capturing temporal essence, this item is priced at 1000 XP.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T00:55:16.100184+00:00",
    "aiReviewedAt": "2026-07-25T00:55:16.100184+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shadow_whisper": {
    "id": "faerun_item_shadow_whisper",
    "name": "Whispers of the Shadowfell",
    "description": "The Whispers of the Shadowfell is a small obsidian shard that glows with an eerie, pulsating darkness. When held, it allows you to perceive echoes from forgotten horrors and gain advantage on Stealth checks in areas touched by shadow. However, lingering too long can trap you within an endless loop of despair, causing your mind to spiral into dread. The faint smell of rain and regret clings to the shard, a reminder of its dark origins.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 15,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Stealth Checks",
      "Detect Undead"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "When you hold the Whispers of the Shadowfell in an area touched by shadow, you gain advantage on Stealth checks. This effect lasts for a number of rounds equal to your Wisdom modifier (minimum of 1). If you spend more than one round per turn within the shadowy area, you risk becoming trapped in the despair loop."
      },
      {
        "title": "Detect Undead",
        "rules": "The Whispers can detect undead creatures up to 30 feet away. You must make a Wisdom (Perception) check with disadvantage if there are other sources of ambient magical energy within 60 feet. This effect is usable once per short or long rest."
      }
    ],
    "levelRequirementReason": "The item's power and the risk it poses to less experienced adventurers necessitate a minimum level.",
    "vendorReason": "As a reputable vendor, Baldur's Bazaar offers rare and potent curiosities like the Whispers of the Shadowfell.",
    "shippingDetail": "Ships swiftly on the back of a trained hawk courier.",
    "usage": {
      "activation": "Passive effect while held within shadowy areas.",
      "duration": "One round per turn, limited by risk of despair loop.",
      "endsWhen": "When you leave the shadowy area or become incapacitated.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "The item's balanced price reflects its moderate power and rarity in the market.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:55:27.521274+00:00",
    "aiReviewedAt": "2026-07-25T00:55:27.521274+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_blood_rune": {
    "id": "faerun_item_blood_rune",
    "name": "The Serpent's Kiss",
    "description": "The Serpent's Kiss is a pulsating crimson rune carved from a single shard of molten obsidian, said to have been forged in the heart of an ancient volcano. This forbidden artifact grants immense fire-based spell damage and a chance to summon shadowy serpents at your command—powers that come with a terrible price: prolonged use corrupts the wielder's mind, slowly twisting their desires and drawing them closer to malevolent forces.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🩸",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Increased Fire Damage",
      "Shadow Serpent Summoning"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "dark_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Fire Damage",
        "rules": "Upon activation, the wielder's fire-based spells deal an additional +2d6 damage. This effect lasts until the end of their next turn and can be used once per short or long rest."
      },
      {
        "title": "Shadow Serpent Summoning",
        "rules": "The user may summon a shadow serpent as an action, which attacks enemies within 5 feet with a bite attack (melee weapon attack: +3 to hit, reach 10 ft., one target) dealing 2d6 necrotic damage on a hit. The serpent persists for 1 minute and can be dismissed at will."
      }
    ],
    "levelRequirementReason": "Requires at least level 1 to wield this ancient artifact responsibly.",
    "vendorReason": "Waterdeep Market, known for its dark wares, sells this forbidden item to those who know the risks and seek such power.",
    "shippingDetail": "Ships via the Dark Messenger, a courier service known for its discretion and speed.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until end of next turn)",
      "endsWhen": "The effect ends when used again or at the start of the wielder's next turn.",
      "charges": "Unlimited, but one use per short or long rest."
    },
    "priceReason": "Balanced price reflects its rarity and potent magical properties without being overpowered.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T00:56:34.037614+00:00",
    "aiReviewedAt": "2026-07-25T00:56:34.037614+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_pocket_phantom": {
    "id": "pokemon_item_pocket_phantom",
    "name": "Phantom Echo Capsule",
    "description": "The Phantom Echo Capsule is a shimmering, glassine capsule that holds the very essence of your most recent Pokémon battle. When activated, it releases a spectral echo of your last move, leaving behind a lingering mist that confounds and overloads any foe unfortunate enough to stand in its path. Beware, for this spectral copy can be unpredictable – summoning a mischievous Poltergeist or a grumpy Mimikyu is not unheard of during a battle. Use it wisely, as the effects are both powerful and potentially chaotic.",
    "category": "consumables",
    "price": 1000,
    "icon": "👻",
    "stock": 78,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Spectral Echo",
      "Confusion and Overload"
    ],
    "vendor": "pokemart",
    "shippedBy": "rocket_mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Spectral Echo",
        "rules": "When activated, the capsule releases a spectral copy of your last move as an action. The echo lasts for 6 turns, during which it can target any creature within 30 feet. At the end of each turn, there is a 25% chance that the target becomes confused until the start of its next turn."
      },
      {
        "title": "Confusion and Overload",
        "rules": "The spectral echo also has a small chance (15%) to overwhelm the senses of the target, causing it to take a -2 penalty to all attack rolls and saving throws for 2 turns. This effect ends if the target successfully saves against a DC 14 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "To wield this powerful item effectively, trainers must have sufficient experience in battle.",
    "vendorReason": "The pokemart stocks a variety of items that can assist trainers in their battles, including this unique capsule.",
    "shippingDetail": "Ships via rocket mail within 24 hours of purchase. Delivery is tracked and confirmed upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "6 turns",
      "endsWhen": "At the end of each turn, or when used against a target that successfully saves against its effects.",
      "charges": "Unlimited"
    },
    "priceReason": "The Phantom Echo Capsule is priced at 1000 XP for its rarity and the unique spectral effects it offers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:56:05.277549+00:00",
    "aiReviewedAt": "2026-07-25T00:56:05.277549+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_boots": {
    "id": "pokemon_item_trainer_boots",
    "name": "Stride-Step Boots of the Elite Four",
    "description": "Stride-Step Boots of the Elite Four are forged from ancient iron and imbued with the essence of legendary Pokémon. Crafted by a former member of the Elite Four’s personal guard, these sturdy boots increase your speed significantly and grant you an uncanny ability to dodge attacks in battle. With each step, you feel as if you're moving through the battlefield with the grace of a master trainer, effortlessly avoiding even the swiftest of strikes.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Enhanced Speed",
      "Dodge Attacks"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_drone",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Enhanced Speed",
        "rules": "While wearing these boots, your speed is increased by 50%. You can move faster in combat and on the field. This effect lasts until you rest or are incapacitated."
      },
      {
        "title": "Dodge Attacks",
        "rules": "You have a +2 bonus to Dexterity saving throws against attacks made against you, and there is a 10% chance each round that an attack made against you misses. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Only those who have proven their skills as Elite Four members or have reached a high enough level can harness this item's power.",
    "vendorReason": "The league store specializes in items for trainers seeking to improve their combat prowess, and these boots are among the most sought-after by seasoned competitors.",
    "shippingDetail": "Delivered swiftly by delivery drones, ensuring you're ready for your next battle upon arrival.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until you rest or are incapacitated",
      "endsWhen": "Resting or becoming incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The boots' unique crafting and the rare materials used make them a valuable asset, justifying their moderate price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:56:14.839147+00:00",
    "aiReviewedAt": "2026-07-25T00:56:14.839147+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_block_hammer": {
    "id": "connectopia_block_hammer",
    "name": "The Overload Hammer",
    "description": "The Overload Hammer is a bulky yet elegant tool forged from the heart of Connectopia. Its hammerhead glows with an eerie, pulsating light as it transforms stone into data-bricks. When wielded by those trained in mining or engineering, this hammer can instantly convert any block into a shimmering pile of digital bricks. However, overuse risks a catastrophic overload, creating a blinding flash and leaving the wielder disoriented for several moments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Data Brick Conversion",
      "Stun on Overload"
    ],
    "vendor": "block_smith",
    "shippedBy": "Block Delivery Drone",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Data Brick Conversion",
        "rules": "When you hit an unattended block with this hammer, it instantaneously turns into data-bricks. This effect has a 50% chance of occurring and does not consume charges or require an action."
      },
      {
        "title": "Stun on Overload",
        "rules": "If the hammer's overload counter reaches critical mass (triggered by consecutive uses without allowing it to cool down), you are stunned for 1 minute. The hammer is rendered unusable until the next dawn, and its overload counter resets."
      }
    ],
    "levelRequirementReason": "It requires a certain finesse in handling the hammer's digital magic.",
    "vendorReason": "The Block Smith has a deep connection to Connectopia’s technology and is well-versed in its tools.",
    "shippingDetail": "Delivered instantly by the fleet of drones, ensuring you have your hammer right when needed.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Instantaneous",
      "endsWhen": "The hammer's overload counter reaches critical mass or it is rendered unusable due to overuse.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its powerful effects and the risk of catastrophic failure.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T00:55:47.230153+00:00",
    "aiReviewedAt": "2026-07-25T00:55:47.230153+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_echo_shard": {
    "id": "connectopia_echo_shard",
    "name": "Fragment of the Lost Signal",
    "description": "A pulsating shard of solidified data from a long-lost Connectopian transmission, this Fragment of the Lost Signal hums with eerie energy when held. Touching it causes unsettling echoes to ring in your mind, briefly revealing hidden paths or ancient block layouts... but beware, for these visions might as easily drive you mad. This fragment is key to deciphering cryptic data streams and can be a cursed companion if not wielded with care.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔊",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Reveals Hidden Paths",
      "Confusion"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Signal Courier Bot",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reveals Hidden Paths",
        "rules": "When activated, this shard grants the user a small chance to reveal hidden paths in their immediate area. This effect lasts for 1 minute and has a 20% chance of success."
      },
      {
        "title": "Confusion",
        "rules": "Touching the fragment causes confusion on the target for up to 3 turns, with a saving throw DC of 14 to resist. The user can activate this effect once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item requires at least 6th level to wield effectively, as it demands both the strength and experience to handle its volatile nature.",
    "vendorReason": "The Pioneer Post is known for its connections with ancient technology, making them a reliable source for such relics of lost civilizations.",
    "shippingDetail": "Ships via the Signal Courier Bot, ensuring safe and timely delivery to your doorstep.",
    "usage": {
      "activation": "Used as an action, this shard must be touched to activate its effects.",
      "duration": "The Confusion effect lasts for up to 3 turns. Reveals Hidden Paths is a one-time effect lasting 1 minute per use.",
      "endsWhen": "The effects end when the user completes their next turn or when the shard is destroyed.",
      "charges": "Unlimited uses, but only once per short or long rest."
    },
    "priceReason": "This balanced price reflects its rarity and the careful balance between utility and potential danger it offers to players of all levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:56:50.377539+00:00",
    "aiReviewedAt": "2026-07-25T00:56:50.377539+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_void_extractor": {
    "id": "connectopia_void_extractor",
    "name": "The Null Conduit",
    "description": "The Null Conduit, a wicked device forged from the very essence of Connectopia's energy grid, can create localized voids that destabilize constructs and machines. With each use, it siphons their power, but prolonged activation risks summoning something far more dangerous than intended—a small but real chance of attracting hostile entities. Crafted by the notorious Wario, this forbidden artifact is a double-edged tool for those daring enough to wield it.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "deals bonus damage to constructs and machines",
      "temporarily creates a zone of silence"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Shadow Delivery System",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Zone of Silence",
        "rules": "Instantaneous effect within 10 feet. Targets all creatures in the area, granting advantage on saving throws against sounds-based effects for 1 minute. Ends if the user activates another ability or takes an action that involves sound."
      },
      {
        "title": "Bonus Damage to Constructs and Machines",
        "rules": "When used as a bonus action, deals an additional 2d6 force damage plus half the user's level. Can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 10th-level spellcasters to safely handle and control this unstable artifact.",
    "vendorReason": "Craft Corner specializes in exotic and forbidden items, making The Null Conduit an appropriate addition for their inventory.",
    "shippingDetail": "Delivered under cover of night to prevent unwanted attention from the law or other entities.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, with a cooldown of 1 minute between uses",
      "endsWhen": "The effect ends if the user activates another ability or takes an action that involves sound.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and the risk involved in using such a dangerous artifact.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T00:56:33.691057+00:00",
    "aiReviewedAt": "2026-07-25T00:56:33.691057+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_forbidden_shadow_stone": {
    "id": "pokemon_item_forbidden_shadow_stone",
    "name": "Voidshard of the Dark Pokémon",
    "description": "The Voidshard of the Dark Pokémon is a sinister, pulsating fragment of shadow energy harvested from a defeated Umbreon. Its surface crackles with forbidden power, whispering dark secrets and casting an eerie glow that can be seen for miles. This artifact drains hit points from nearby foes, siphoning their strength into its core. Use it wisely, for prolonged exposure may attract the attention of even the most vigilant sentinels—or worse, Wario’s insatiable hunger.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "drain_hp_enemy_20",
      "summon_shadow_phantom_5%"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Drain HP Enemy (20)",
        "rules": "As a bonus action, the user can focus their will on the Voidshard to drain 20 hit points from an adjacent enemy. The target must succeed on a DC 15 Constitution saving throw or be reduced by this effect. This use of the item counts as one charge."
      },
      {
        "title": "Summon Shadow Phantom (5%)",
        "rules": "Once per long rest, using the Voidshard can summon a spectral phantom that lingers for 1 minute. The phantom deals 1d6 necrotic damage to any enemy it moves adjacent to and can be dismissed with an action by its creator."
      }
    ],
    "levelRequirementReason": "This artifact requires a high level of control to wield effectively, as its forbidden power can easily spiral out of control.",
    "vendorReason": "The Safari Shop often deals in rare and exotic artifacts, including those with dark origins, making it the ideal vendor for this item.",
    "shippingDetail": "Delivered under cover of night by the enigmatic Shadow Courier, who ensures the package remains unopened until delivered to its intended recipient.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (summoning effect)",
      "endsWhen": "Charges are exhausted or the item is destroyed; can be recharged with a long rest",
      "charges": "5 charges, recharging after a long rest"
    },
    "priceReason": "The Voidshard's rare material and forbidden origins make it a valuable asset, though its draining effects ensure it remains a dangerous tool.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-25T00:57:18.861062+00:00",
    "aiReviewedAt": "2026-07-25T00:57:18.861062+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_ironclad_gauntlet": {
    "id": "midlands_item_ironclad_gauntlet",
    "name": "The Warden's Grip",
    "description": "Forged in the fires of a broken foundry, The Warden's Grip feels like it wants to crush things yet remains surprisingly comfortable until you attempt to lift heavy loads. This gauntlet is said to channel the very essence of durability and strength, making your arms feel as if they can withstand any task. If you dare to wield it in battle, prepare for a 15% chance to land critical hits on weapon attacks, but be warned: its true form will manifest when you attempt to lift something too heavy, potentially dismantling the very weapon you're holding with a force that seems almost sentient.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Critical Hit Boost",
      "Enhanced Durability"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "Royal Post Cart",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Critical Hit Boost",
        "rules": "When you attack with a weapon while wearing The Warden's Grip, there is a 15% chance to deal a critical hit. This effect does not stack with other sources of critical hits."
      },
      {
        "title": "Enhanced Durability",
        "rules": "While wearing The Warden's Grip, you gain resistance to bludgeoning damage equal to +3. This effect persists until you try to lift an object weighing more than 100 times your Strength modifier in pounds or expend a use."
      }
    ],
    "levelRequirementReason": "This gauntlet requires at least level 7 due to its complex enchantments and the physical toll it takes on the wearer.",
    "vendorReason": "The Warden's Grip is a rare find, and only the Empire Exchange can acquire such artifacts from the broken foundries of old.",
    "shippingDetail": "Delivered with utmost care via the Royal Post Cart, ensuring safe arrival within two days.",
    "usage": {
      "activation": "Passive effect while worn; activation limited by weight lifting or use limit.",
      "duration": "Persistent until you lift a heavy object exceeding your strength capacity or expend a use.",
      "endsWhen": "Expenditure of a charge, lifting an excessively heavy load, or destroying the gauntlet.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced XP price reflects its rarity and unique enchantments without giving it overpowering capabilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:57:27.690004+00:00",
    "aiReviewedAt": "2026-07-25T00:57:27.690004+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sweet_serenade_potion": {
    "id": "leclaire_isle_item_sweet_serenade_potion",
    "name": "Sweet Serenade Potion",
    "description": "The Sweet Serenade Potion, crafted from crystallized honey and the laughter of sugar sprites, is a shimmering bottle that, when uncorked, releases a wave of sweet enchantment. The air fills with the sound of tinkling bells and a chorus of cheerful melodies, instantly charming all creatures within 30 feet for up to an hour. It's said that even the most hardened bandits are moved by its magic, often trading their gold coins for a song or two.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 15,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "charm_target",
      "sweet_enchantment"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "sugar_delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Charm Target",
        "rules": "All creatures within 30 feet of the user who can hear are charmed until the end of their next turn. They must make a DC 15 Wisdom saving throw or be affected. The effect ends if the target is hit by an attack, takes damage, or moves more than 30 feet away from the caster."
      },
      {
        "title": "Sweet Enchantment",
        "rules": "The area around the user becomes filled with a delightful melody and fragrant sweetness that lasts for 1 hour. Creatures within this area receive advantage on Charisma (Persuasion) checks while it persists, but must make a DC 15 Constitution saving throw at the start of their turn or be affected by the Charm Target effect."
      }
    ],
    "levelRequirementReason": "Brewing this potion requires a decent understanding of alchemy and the ability to work with delicate ingredients, which is why it's recommended for characters of at least 6th level.",
    "vendorReason": "The Pastry Palace specializes in enchanted confections, so it makes sense that they'd carry this magical potion.",
    "shippingDetail": "Shipped by Sugar Delivery, known for their sweet and timely deliveries within the city limits.",
    "usage": {
      "activation": "A bonus action to uncork and drink the potion.",
      "duration": "Instantaneous effect; lasts until the end of the target's next turn or when it is hit by an attack, takes damage, or moves more than 30 feet away from the caster.",
      "endsWhen": "The effect ends if the target is hit by an attack, takes damage, or moves more than 30 feet away from the caster.",
      "charges": "Unlimited uses; recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP as it's an epic consumable that can charm creatures and provide a sweet enchantment, enhancing social interactions without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T00:57:33.887496+00:00",
    "aiReviewedAt": "2026-07-25T00:57:33.887496+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_mythic_dough_of_infinite_creation": {
    "id": "leclaire_isle_item_mythic_dough_of_infinite_creation",
    "name": "Dough of Infinite Creation",
    "description": "The Dough of Infinite Creation is a colossal, shimmering dough ball that radiates arcane energy. Crafted from enchanted flour and bound with ancient magic by the artisans of LeClaire Isle, this dough can be molded into nearly any conceivable object or creature. With a focused thought, you can shape it into weapons, shields, even miniature armies of Dough Folk, each one as detailed as if crafted by hand. This culinary marvel regenerates minor mana and enhances your crafting skill, making you a master artisan in moments.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "shape_dough_into_object",
      "minor_mana_regeneration"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "dragon_express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shape Dough into Object",
        "rules": "As an action, you focus on the dough and mentally envision the object or creature. The dough then reshapes itself according to your will. You can create a weapon (including an improvised one), shield, or even a miniature Dough Folk figure. This effect has no range or area; it is a mental command that shapes the dough upon contact."
      },
      {
        "title": "Minor Mana Regeneration",
        "rules": "At the start of each of your turns, you gain 1d4 temporary hit points and regain 1d6 mana. This effect has no save DC or limits; it is a passive benefit that begins when you consume the dough."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure its magical properties are used responsibly.",
    "vendorReason": "Sweet Supplies specializes in unique and enchanting items, making it fitting for such an extraordinary dough.",
    "shippingDetail": "Delivered by Dragon Express, known for its speed and reliability, ensuring the Dough of Infinite Creation reaches you in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the object or creature created is no longer needed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its mythic rarity and the mana required to craft it, making it a valuable but not overpowered addition to any adventurer's inventory.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T00:57:06.977813+00:00",
    "aiReviewedAt": "2026-07-25T00:57:06.977813+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_mining_survey": {
    "id": "connectopia_mining_survey",
    "name": "Pioneer's Seismic Scanner",
    "description": "The Pioneer's Seismic Scanner is a sturdy, forge-made device that vibrantly glows with the energy of its recent calibration. This indispensable tool not only reveals nearby mineral deposits but also detects hidden traps, ensuring miners navigate safely through treacherous underground terrains. Its dual functionality makes it an essential companion for any ambitious prospector, though it occasionally picks up on the rhythmic stomping of Wario—often signaling impending danger.",
    "category": "services",
    "price": 1000,
    "icon": "⛏️",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveals_nearby_mineral_deposits",
      "detects_hidden_traps"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Rattlesnake Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Mineral Deposits",
        "rules": "When activated as a bonus action, the Pioneer's Seismic Scanner reveals mineral deposits within a 60-foot radius. This effect lasts for 1 minute and cannot be used again until the start of your next turn after completing a short rest."
      },
      {
        "title": "Detect Hidden Traps",
        "rules": "The scanner can detect hidden traps within a 30-foot radius when activated as an action. The DC to spot or disarm these traps is equal to 10 + the trap's challenge rating, and this effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The device requires minimal calibration and basic understanding of its operation, making it accessible to even the most novice miners.",
    "vendorReason": "Pioneer Post specializes in tools that aid in exploration and mining, ensuring their customers are well-equipped for any adventure beneath the earth's surface.",
    "shippingDetail": "The scanner is shipped securely to ensure it arrives fully functional, even through rugged terrain.",
    "usage": {
      "activation": "bonus action or action",
      "duration": "1 minute or until triggered by Wario's stomping",
      "endsWhen": "the start of your next turn after completing a short rest",
      "charges": "unlimited"
    },
    "priceReason": "The Pioneer's Seismic Scanner offers unparalleled utility for miners, balancing its value with the comprehensive protection and resource discovery it provides.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T00:57:25.702309+00:00",
    "aiReviewedAt": "2026-07-25T00:57:25.702309+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_warrios_lucky_charm": {
    "id": "faerun_item_warrios_lucky_charm",
    "name": "Warrior's Lucky Charm - The Wario-esque Boot",
    "description": "The Warrior's Lucky Charm - The Wario-esque Boot is a well-worn leather boot that gleams with an eerie, almost supernatural sheen. Crafted from the remnants of a bygone era, these boots are said to have belonged to a warrior whose luck in battle was as unpredictable as it was legendary. When donned, they grant their wearer bursts of speed and acrobatic prowess, making them nearly invulnerable to missteps or attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Bursts of Speed",
      "Acrobatic Mastery"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Swift Courier Service",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Bursts of Speed",
        "rules": "When activated as a reaction upon being hit by an attack, the wearer gains advantage on their next Acrobatics check and increases their movement speed by 10 feet for one minute."
      },
      {
        "title": "Acrobatic Mastery",
        "rules": "While wearing these boots, the wearer has advantage on all Acrobatics checks. Additionally, they have a 25% chance to dodge an attack each round until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This item is crafted for seasoned warriors who can best appreciate and utilize its unpredictable but potent effects.",
    "vendorReason": "The Waterdeep Market is known for its diverse inventory, including unique and powerful items that appeal to all manner of adventurers.",
    "shippingDetail": "Ships via Swift Courier Service; delivery takes 3 days.",
    "usage": {
      "activation": "Reaction (to an attack) or as a bonus action",
      "duration": "One minute per activation, until the end of their next turn for dodge chance",
      "endsWhen": "The effect ends when they are hit by another attack or at the start of the wearer's next turn.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced as a rare, powerful item that offers significant but not game-breaking advantages.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:57:40.367735+00:00",
    "aiReviewedAt": "2026-07-25T00:57:40.367735+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_disruption": {
    "id": "kivotos_item_halo_of_disruption",
    "name": "Halos of Disruption",
    "description": "The Halos of Disruption are shimmering, halo-like devices crafted from enchanted meteoric iron. Once favored by the prestigious Halo Club, these halos can disrupt magical energies with a mere glance. They are said to have been used by the club members to challenge potent spellcasters and neutralize their spells without directly engaging in combat. Beware, for they carry a risk of unintended consequences, such as creating small anomalies when used near concentrated magic.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💫",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Disrupt Magical Energies",
      "Reduce Spell Resistance"
    ],
    "vendor": "club_supply",
    "shippedBy": "Winged Courier",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Disrupt Magical Energies",
        "rules": "When thrown and successfully hit with a ranged attack, the halo disrupts one targeted spell currently in effect. The target must make a DC 15 Dexterity saving throw or have its spell's duration reduced to zero."
      },
      {
        "title": "Reduce Spell Resistance",
        "rules": "For each successful hit against a magic user with this item, their spell resistance is reduced by 5%, stacking with other sources. This effect lasts until the end of the target’s next turn and resets after one long rest."
      }
    ],
    "levelRequirementReason": "The Halos are crafted to be used by those who have a basic understanding of magical theory and combat tactics.",
    "vendorReason": "These halos were originally designed for the Halo Club, making club supply the most logical source for them.",
    "shippingDetail": "Ships within one week, with special handling required due to their delicate nature.",
    "usage": {
      "activation": "Ranged Attack (thrown)",
      "duration": "Instantaneous",
      "endsWhen": "The halo's effects end when the spell duration is reduced or it misses its target.",
      "charges": "Unlimited, but can only be used once per short rest."
    },
    "priceReason": "The halos are crafted from rare materials and require significant magical energy to disrupt spells without causing a larger disruption.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:57:45.747758+00:00",
    "aiReviewedAt": "2026-07-25T00:57:45.747758+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_artifact_of_lost_notes": {
    "id": "kivotos_item_artifact_of_lost_notes",
    "name": "Artifact of Lost Notes",
    "description": "The Artifact of Lost Notes is a tarnished, ornate music box that hums with an ethereal glow when wound. Its intricate gears and brass mechanisms seem to vibrate with forgotten harmonies, whispering cryptic clues in a language only the most perceptive can understand. When played, it reveals hidden passages or traps with eerie precision, making it invaluable for explorers and adventurers seeking to uncover lost secrets. It's said that those who listen closely might even hear fragments of melodies long lost to time.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎵",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Whispers of Forgotten Clues",
      "Reveals Hidden Passages"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier of the Mysterious Arts",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispers of Forgotten Clues",
        "rules": "When activated as an action, the music box plays a haunting melody that provides you with one piece of cryptic information related to hidden locations or traps. This effect has no save DC and does not require a roll; it simply reveals one clue per use. The item is exhausted after this use."
      },
      {
        "title": "Reveals Hidden Passages",
        "rules": "Upon activation, the music box plays a sequence of notes that causes the immediate area to shimmer with arcane energy, revealing hidden passages or secret doors within 30 feet. This effect has a duration of 1 minute and ends if you move more than 30 feet away from the center of the effect."
      }
    ],
    "levelRequirementReason": "The artifact's cryptic nature requires a basic understanding of perception to interpret its messages.",
    "vendorReason": "Academy Armory specializes in historical and arcane curiosities, making it the perfect vendor for this enigmatic music box.",
    "shippingDetail": "The item is delivered with a special aura that ensures its arrival remains secret to all but those who truly need it.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, 1 minute for 'Reveals Hidden Passages'",
      "endsWhen": "Exhausted after one use or when the duration ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Artifact of Lost Notes is priced at 1000 XP due to its unique ability to reveal hidden secrets and provide cryptic clues, making it a valuable tool for adventurers.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T00:58:03.137739+00:00",
    "aiReviewedAt": "2026-07-25T00:58:03.137739+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_logbook": {
    "id": "connectopia_pioneer_logbook",
    "name": "The Chronicle of Chaos",
    "description": "The Chronicle of Chaos is a worn leather logbook bound with brass clasps. Its pages are filled with cryptic notes, crude maps, and tales of lost explorers. The ink has smudged over time, leaving behind ghostly impressions of forgotten journeys. This relic whispers secrets about Connectopia's hidden realms and offers fleeting insights into the minds of its enigmatic pioneers, making it a treasure for both scholars and adventurers alike.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📒",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "lore_unveiled",
      "hidden_paths_disclosed"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "delivery_truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lore Unveiled",
        "rules": "As an action, you can open the logbook to gain a +1 bonus to Intelligence (History) checks for one hour. This effect ends if you fail three such checks or when the duration expires."
      },
      {
        "title": "Hidden Paths Disclosed",
        "rules": "Once per short rest, you may spend 1 minute examining the logbook's pages and discover a hidden location within Connectopia that is not on any known maps. The DM decides if this path leads to adventure or peril."
      }
    ],
    "levelRequirementReason": "This item's cryptic nature requires a basic understanding of history and lore, making it accessible to first-level adventurers.",
    "vendorReason": "The Pioneer Post has a vast network across Connectopia, often gathering such relics from lost explorers.",
    "shippingDetail": "Delivered by the reliable delivery trucks of the Pioneer Post within two game days.",
    "usage": {
      "activation": "Action or reaction (Lore Unveiled), once per short rest (Hidden Paths Disclosed)",
      "duration": "1 hour (Lore Unveiled); instantaneous (Hidden Paths Disclosed)",
      "endsWhen": "Fails three Intelligence (History) checks, or end of the duration (Lore Unveiled); after one minute of examination (Hidden Paths Disclosed)",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the valuable knowledge it offers to adventurers.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T00:57:52.030284+00:00",
    "aiReviewedAt": "2026-07-25T00:57:52.030284+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_windstrider_boots": {
    "id": "teyvat_item_windstrider_boots",
    "name": "Zephyr's Embrace",
    "description": "Crafted by skilled artisans in Liyue Harbor, Zephyr's Embrace is a pair of boots woven with captured wind currents. These boots allow you to feel as if you are gliding on a gentle breeze, making for swift travel and easy evasion of the grumpy pirates who roam these waters. They reduce your movement resistance by 10% and grant a small chance to avoid fall damage when you tumble or jump from heights.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Aerodynamic Glide",
      "Fall Damage Mitigation"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "swiftcurrent_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Aerodynamic Glide",
        "rules": "While wearing Zephyr's Embrace, your movement speed is increased by 15%. This effect lasts for the duration of one short or long rest."
      },
      {
        "title": "Fall Damage Mitigation",
        "rules": "When you tumble or jump from a height, there is a 20% chance that fall damage is reduced to half. This effect can be used once per day and does not stack with other effects that reduce fall damage."
      }
    ],
    "levelRequirementReason": "The boots are crafted to fit adventurers of all levels, ensuring they can assist in quick escapes.",
    "vendorReason": "Liyue Harbor is known for its skilled artisans who create items that enhance the capabilities of travelers and explorers.",
    "shippingDetail": "Delivered by swiftcurrent cart, ensuring these boots arrive in pristine condition.",
    "usage": {
      "activation": "Passive effect when worn",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "The duration ends at the conclusion of a short or long rest",
      "charges": "Daily use, once per day"
    },
    "priceReason": "The boots are crafted with rare materials and require significant skill to produce, justifying their price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:58:11.753783+00:00",
    "aiReviewedAt": "2026-07-25T00:58:11.753783+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_archon_aegis": {
    "id": "teyvat_item_archon_aegis",
    "name": "Aetherium Resonance",
    "description": "The Aetherium Resonance gleams with a radiant, otherworldly light as it hums with latent power. Crafted from pure aetherium, this shield is said to have been forged in the heart of the Archon's realm. It not only protects against physical and elemental attacks but also subtly enhances its wielder’s presence, making them feel invincible on the battlefield. Its energy shields can absorb up to 200 points of damage and reflect a portion of incoming elemental strikes back at the attacker, ensuring that no foe goes unscathed for long.",
    "category": "premium",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Energy Absorption",
      "Elemental Reflection"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "seafarer_ship",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Energy Absorption",
        "rules": "The Aetherium Resonance absorbs up to 200 points of damage from any source. This effect is instantaneous and can be used once per short or long rest."
      },
      {
        "title": "Elemental Reflection",
        "rules": "When struck by an elemental attack, the shield reflects 15% of the incoming damage back towards the attacker as a reaction. This effect has no cooldown but cannot be used against non-elemental attacks."
      }
    ],
    "levelRequirementReason": "The shield's complex enchantments necessitate a minimum character level to properly harness its power.",
    "vendorReason": "Known for their extensive network of contacts within the elemental realms, Inazuma Imports ensures that adventurers have access to the rarest and most powerful items.",
    "shippingDetail": "The shield is carefully packed in a specially designed crate to ensure it arrives safely, though delivery may take up to two weeks depending on sea conditions.",
    "usage": {
      "activation": "Instantaneous reaction upon being struck by an attack.",
      "duration": "Until the start of your next turn or until destroyed.",
      "endsWhen": "The shield is destroyed or expended in absorbing damage.",
      "charges": "Unlimited, but exhausted after absorbing up to 200 points of damage."
    },
    "priceReason": "The material and enchantments required for this shield are both rare and costly, making it a significant investment for any adventurer.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T00:58:20.471133+00:00",
    "aiReviewedAt": "2026-07-25T00:58:20.471133+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_healing_potion_of_bravery": {
    "id": "faerun_item_healing_potion_of_bravery",
    "name": "Potion of Unshakeable Resolve",
    "description": "The Potion of Unshakeable Resolve is a vibrant crimson elixir that smells faintly of gunpowder and surprisingly, strawberries. When consumed, it fortifies your resolve, granting temporary invincibility to fear effects for three rounds—perfect for distracting foes or unnerving Wario during his notorious raids. The potion's effect is both potent and fleeting, leaving you with a sense of renewed courage that can bolster your next attack rolls by +1 for two rounds.",
    "category": "consumables",
    "price": 1000,
    "icon": "❤️",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Invulnerability to Fear",
      "Enhanced Attack Rolls"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability to Fear",
        "rules": "Drinking this potion grants temporary immunity to fear effects, such as those from magical creatures or spells (3 rounds). This effect can be used once per short rest."
      },
      {
        "title": "Enhanced Attack Rolls",
        "rules": "For two rounds after imbibing the potion, your attack rolls are increased by +1. This enhancement applies to all weapon attacks and does not stack with other bonuses."
      }
    ],
    "levelRequirementReason": "The potion's effects are designed for adventurers who may face fear-based threats early in their journey.",
    "vendorReason": "Waterdeep Market is known for its diverse array of goods, including magical elixirs that fortify the brave and unwavering.",
    "shippingDetail": "The potion arrives sealed in a sturdy flask, ensuring it remains potent until use.",
    "usage": {
      "activation": "Consume",
      "duration": "3 rounds (Invulnerability), +2 rounds (Attack Roll Bonus)",
      "endsWhen": "Ends at the start of your next turn after its duration expires or if you take any damage, whichever comes first. Attack Roll Bonus ends when its duration ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's balanced price reflects its potent effects and the difficulty of crafting such a resilient elixir.",
    "priceOriginal": 400,
    "priceReviewedAt": "2026-07-25T00:58:26.552046+00:00",
    "aiReviewedAt": "2026-07-25T00:58:26.552046+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_fate_scroll": {
    "id": "curiosity_fate_scroll",
    "name": "Fragment of Foretold Doom",
    "description": "The Fragment of Foretold Doom is a crumpled, brittle scroll adorned with ancient runes and eerie imagery. It whispers cryptic prophecies upon contact, revealing glimpses of possible futures—most often dire. Touch it briefly to peer into fate's maws; the visions may guide your path but could also entangle you in an endless cycle of foreboding. Prolonged exposure risks obsession with doom and misfortune, leaving one questioning their very fate.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "cryptic prophecy",
      "misfortune chance"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Prophecy",
        "rules": "As a bonus action, the user gains a brief vision of their future. This effect lasts for 1 minute and provides cryptic clues or warnings about upcoming challenges. The DC to resist this effect with a Wisdom saving throw is 12."
      },
      {
        "title": "Misfortune Chance",
        "rules": "There is a small chance (5% on a failed roll) that the user attracts unwanted attention from fate itself, leading to misfortune or bad luck. This effect can occur once per long rest."
      }
    ],
    "levelRequirementReason": "The scroll's cryptic nature and potential for misfortune make it accessible only to characters with some experience.",
    "vendorReason": "Fate Forge specializes in items that interact directly with fate, making the Fragment of Foretold Doom a natural fit.",
    "shippingDetail": "The scroll is delivered swiftly by Winged Courier, ensuring it arrives intact and ready for use.",
    "usage": {
      "activation": "Bonus action to read and gain a vision from the scroll.",
      "duration": "1 minute or until dismissed.",
      "endsWhen": "The user dismisses the effect or completes their next long rest.",
      "charges": "Unlimited, but only one vision can be gained per day."
    },
    "priceReason": "Balanced to provide a unique and powerful tool for divination without overshadowing other items.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T00:58:38.540109+00:00",
    "aiReviewedAt": "2026-07-25T00:58:38.540109+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_iron_corruption": {
    "id": "warhammer_iron_corruption",
    "name": "The Rotting Fist",
    "description": "The Rotting Fist is a grotesque warhammer forged from blackened iron, its surface etched with ancient runes that pulse with a sickly green glow. The weapon seems to actively encourage decay and corruption in those nearby, sowing chaos among enemies by slowly rotting their armor and spreading disease. Touching the hammer can cause one's own gear to rust and develop strange growths, making it a tool of terror for the unholy and unclean.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "spreads disease",
      "rusts enemy equipment"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Grim Delivery Service",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Spreading Decay",
        "rules": "When you hit an enemy with this weapon, there is a 50% chance that they are infected with a disease. The disease lasts for 1d4 days and has a 25% save DC against Cure Disease."
      },
      {
        "title": "Rusting Armor",
        "rules": "Any piece of armor or equipment an enemy touches after being hit by this weapon rusts, reducing its effectiveness until repaired. This effect is permanent unless the item is removed from combat and cleaned within 24 hours."
      }
    ],
    "levelRequirementReason": "The Rotting Fist's corruption abilities make it a tool for seasoned warriors who can control its chaotic effects.",
    "vendorReason": "The Chaos Dealer specializes in items that spread fear and chaos, making this weapon an ideal addition to their inventory.",
    "shippingDetail": "Delivery is handled by the Grim Delivery Service, known for their timely and reliable service despite the macabre nature of their deliveries.",
    "usage": {
      "activation": "On a melee hit",
      "duration": "Instantaneous effect",
      "endsWhen": "The weapon's effects end when it is no longer in combat or its owner drops it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Rotting Fist's unique and dangerous abilities justify a price of 1000 XP, reflecting its status as an epic weapon.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T00:58:31.087637+00:00",
    "aiReviewedAt": "2026-07-25T00:58:31.087637+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_favor_token": {
    "id": "animatopia_favor_token",
    "name": "Clan Speaker’s Recognition Token",
    "description": "The Clan Speaker’s Recognition Token is a finely polished stone, imbued with the spirit of the Clan Speakers. Its surface glows faintly when held, marking its bearer as one who has earned their trust. Presenting this token to any Clan Speaker grants immediate access to their weekly briefing and potential assistance in matters of great import. The Clan Speakers are known for their discerning tastes; only those truly deserving can claim this mark of favor.",
    "category": "faction",
    "price": 1000,
    "icon": "🗣️",
    "stock": 99,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Weekly Briefing Access",
      "Persuasion Bonus"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Swift Trotter",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weekly Briefing Access",
        "rules": "When presented to a Clan Speaker, the token grants immediate access to their weekly briefing. This effect is instantaneous and does not require any action from the bearer."
      },
      {
        "title": "Persuasion Bonus",
        "rules": "+1 bonus to persuasion checks when dealing with Clan Speakers. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The token is accessible to characters who are just beginning their journey, making it a valuable tool for exploration and interaction.",
    "vendorReason": "Beast Bazaar deals in items that bridge the gap between the human and animal kingdoms; this token perfectly aligns with their offerings of cultural significance.",
    "shippingDetail": "Delivered within a week, Swift Trotter ensures the token arrives in pristine condition, ready to be claimed.",
    "usage": {
      "activation": "Presenting the token to a Clan Speaker",
      "duration": "Instantaneous and long rest duration",
      "endsWhen": "The end of your next long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The token's value lies in its exclusive access to Clan Speaker briefings, making it a balanced addition to any character’s repertoire.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T00:58:53.209154+00:00",
    "aiReviewedAt": "2026-07-25T00:58:53.209154+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_ember_flask": {
    "id": "warhammer_ember_flask",
    "name": "Ember Flask of Controlled Chaos",
    "description": "The Ember Flask of Controlled Chaos is a small obsidian vial, its surface etched with ancient runes that seem to pulse with untamed energy. When consumed in combat, it unleashes chaotic forces that can briefly augment your strength or dexterity, but may also throw you into confusion. The embers within whisper secrets of forgotten battles, yet the outcome is never certain; one moment you could be a towering colossus, the next a mere shadow of yourself.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 38,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Strength Surge",
      "Chaos Confusion"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Winged Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Surge",
        "rules": "On activation, the user gains +2 to Strength for 1 minute. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Chaos Confusion",
        "rules": "There is a 30% chance that consuming the flask will cause the user to become confused, requiring a successful Wisdom saving throw (DC 12) at the start of their turn to end the effect. This confusion lasts for 1 minute or until dispelled."
      }
    ],
    "levelRequirementReason": "The Ember Flask's unpredictable nature makes it accessible but dangerous even for low-level characters.",
    "vendorReason": "The chaos dealer specializes in items that blur the line between power and peril, making this flask a natural addition to their wares.",
    "shippingDetail": "Delivered by swift messengers who leave from the Chaos Nexus; expedited shipping with a 24-hour delivery window.",
    "usage": {
      "activation": "Consumed as an action in combat.",
      "duration": "1 minute or until dispelled.",
      "endsWhen": "Confusion ends on a successful saving throw, or after 1 minute if not saved.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Ember Flask's unpredictable nature and the chaotic forces it taps into justify its higher price in experience points.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:58:59.432148+00:00",
    "aiReviewedAt": "2026-07-25T00:58:59.432148+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_oracle_shard": {
    "id": "warhammer_oracle_shard",
    "name": "Shard of the Fated Oracle",
    "description": "The Shard of the Fated Oracle is a fractured fragment from an ancient oracle's crystal core, now imbued with foreboding magic. Held in your hand, it hums with cryptic visions that hint at future battles, though these glimpses are fleeting and often unreliable. Gazing into its depths might drive you mad, but for those who can withstand the madness, it offers a chance to resist magical attacks and gain temporary buffs aligned with the vision's theme.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Resist Magical Attacks",
      "Glimpse Future Battles"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Resist Magical Attacks",
        "rules": "When you are targeted by a spell or ability dealing magical damage, you have advantage on your saving throw. This effect lasts until the start of your next turn."
      },
      {
        "title": "Glimpse Future Battles",
        "rules": "As an action, you can focus on the shard for 1 minute. During this time, you gain insight into future battles within a 30-foot radius. This vision provides advantage on attack rolls and damage rolls against any creatures that appear in your line of sight during the next battle. The effect ends if you take damage or are incapacitated."
      }
    ],
    "levelRequirementReason": "This shard's power is too great for those below level 18, as it requires a deep understanding of magic to harness its visions.",
    "vendorReason": "Fate Forge has access to ancient relics like this, having forged the original oracle's crystal core.",
    "shippingDetail": "Ships via Dimensional Portal; delivery can take up to a week due to its mystical nature.",
    "usage": {
      "activation": "Action or Reaction (to gain temporary buffs)",
      "duration": "Instantaneous vision, lasts until the start of your next turn for resistance",
      "endsWhen": "You take damage or become incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's mythic rarity and unique utility justify its price in experienced player hands.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-25T00:59:06.429167+00:00",
    "aiReviewedAt": "2026-07-25T00:59:06.429167+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_waterdeep_merchant_contract": {
    "id": "faerun_item_waterdeep_merchant_contract",
    "name": "Waterdeep Merchant Contract",
    "description": "The Waterdeep Merchant Contract is a tattered scroll embossed with the sigils of minor houses. It grants access to exclusive discounts at Waterdeep's most reputable shops, allowing you to purchase potions and alchemical supplies at an unheard-of 15% off. However, this privilege comes with the condition that you must first secure the seal of approval from the local guildmaster through a token of value—a small sum or a rare ingredient.",
    "category": "faction",
    "price": 1000,
    "icon": "💼",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Exclusive Discounts",
      "Guild Approval"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exclusive Discounts",
        "rules": "Activate as an action. Grants a +5 bonus to purchase attempts at Waterdeep shops for the next hour, but requires you to pay the merchant an additional value equal to 10% of your total purchase. Ends when the hour expires."
      },
      {
        "title": "Guild Approval",
        "rules": "Activate as a reaction when requested by a guildmaster or official. Spend 1 charge and present a rare ingredient worth at least 500 XP to gain their approval for one week, allowing you to bypass minor bureaucratic delays. The effect ends upon the expiration of this period."
      }
    ],
    "levelRequirementReason": "The contract is designed to be accessible early in a character's career, providing an incentive for exploration and interaction with Waterdeep's underworld.",
    "vendorReason": "Waterdeep Market sells this item as it caters to adventurers who wish to make a name for themselves within the city's competitive economy.",
    "shippingDetail": "The messenger hawk delivers the contract with an additional delivery fee of 50 XP, ensuring its safe and timely arrival.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Hour for Discounts, one week for Guild Approval",
      "endsWhen": "Time expires or upon a failed reaction to an official",
      "charges": "Unlimited charges per week"
    },
    "priceReason": "The contract's value is balanced by its limited utility and the requirement of additional resources for activation.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T00:58:55.262223+00:00",
    "aiReviewedAt": "2026-07-25T00:58:55.262223+00:00",
    "aiReviewVersion": 1
  },
  "potion_shadows_essence": {
    "id": "potion_shadows_essence",
    "name": "Shadows Essence Potion",
    "description": "Shadows Essence Potion clings to your tongue like a whisper of the night itself, its inky surface shimmering faintly under dim light. When consumed, it cloaks you in a veil of darkness, granting advantage on Stealth checks and allowing you to see as if by darkvision for 10 minutes. The potion's deep, earthy scent lingers long after it is gone, hinting at the secrets it holds. However, its effects are fleeting; any who drink it must be cautious lest they forget their true purpose amid this shadowy embrace.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 30,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "grant_advantage_stealth",
      "temporary_darkvision"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Rune Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Advantage on Stealth Checks",
        "rules": "When you consume the potion, you gain advantage on your next Stealth check. This effect lasts until your next long rest."
      },
      {
        "title": "Temporary Darkvision",
        "rules": "For 10 minutes after consuming the potion, you can see in the dark as if under the effects of a Darkness spell (up to 60 feet radius). You must make a Constitution saving throw DC 13 at the start of each long rest; on a failed save, the effect ends immediately."
      }
    ],
    "levelRequirementReason": "The Shadows Essence Potion is designed for novice adventurers who need to navigate through shadowy environments without drawing attention.",
    "vendorReason": "The Chaos Dealer often deals with those seeking to obscure their presence, making this potion a natural addition to their offerings.",
    "shippingDetail": "Delivered via specially enchanted runes that ensure the potion's potency is maintained throughout transport.",
    "usage": {
      "activation": "飲用",
      "duration": "10 分鐘",
      "endsWhen": "進行長時間休息或失敗的體力救難時結束",
      "charges": "無限使用"
    },
    "priceReason": "此 potion 的效果強大且適用於多種情境，因此定價較高。",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T00:59:27.506107+00:00",
    "aiReviewedAt": "2026-07-25T00:59:27.506107+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wario_rocket_boots": {
    "id": "mushroom_kingdom_item_wario_rocket_boots",
    "name": "Wario’s Rocket Boots",
    "description": "Wario’s Rocket Boots are a hodgepodge of mismatched parts, cobbled together in Wario's workshop during one particularly spiteful evening. The boots emit an eerie glow and propel you forward with unnatural speed, allowing you to outstrip even the most nimble Koopa Troopas. However, their construction is less than perfect; each burst of speed comes at the cost of balance, increasing your chance of stumbling mid-step by a dangerous margin.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "boost_movement_speed_3",
      "chance_for_stumble"
    ],
    "vendor": "wario_direct",
    "shippedBy": "warp_pipe_express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Boosted Movement Speed",
        "rules": "As a bonus action, you can activate the boots for a duration of one minute. While active, your walking and running speeds are increased by 50%. This effect is limited to once per short or long rest."
      },
      {
        "title": "Increased Stumble Chance",
        "rules": "While wearing Wario’s Rocket Boots, there is a 20% chance you will trip during each movement action. This chance does not stack with other effects that cause you to fall prone or become disoriented. A successful DC 15 Dexterity saving throw reduces this chance by half."
      }
    ],
    "levelRequirementReason": "Wario’s Rocket Boots require a minimum level of 6 due to their complexity and the risk they pose, especially given their tendency to cause you to trip.",
    "vendorReason": "As Wario's personal workshop is known for crafting unique and often hazardous items, it makes sense that he would sell these boots directly from his shop.",
    "shippingDetail": "Shipping via warp pipe express can be dangerous; the boots might malfunction during transit, increasing your chance of tripping by +5% until the start of your next turn after arrival.",
    "usage": {
      "activation": "Bonus action to activate or deactivate the boots.",
      "duration": "One minute while active.",
      "endsWhen": "The effect ends when you deactivate it or if you fall prone, become incapacitated, or end your turn in a difficult terrain.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Wario’s Rocket Boots are priced at 1000 XP due to their unique construction and the risk they pose to balance, making them a luxury item for those willing to accept the chance of falling flat on their face.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T00:59:49.532361+00:00",
    "aiReviewedAt": "2026-07-25T00:59:49.532361+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_chronal_shard_of_time": {
    "id": "mushroom_kingdom_item_chronal_shard_of_time",
    "name": "Chronal Shard of Time",
    "description": "The Chronal Shard of Time is a crystalline fragment, etched with ancient runes that shimmer like the passage of time itself. It allows its bearer to glimpse fleeting moments from the future, but at a cost: each use risks distorting reality and causing a temporal ripple. This shard is said to have been forged in the fires of time's birth, making it both a gift and a curse. Wield it wisely, for misuse could tear the very fabric of existence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "brief_futuristic_glimpse",
      "risk_of_temporal_disruption"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Brief Futuristic Glimpse",
        "rules": "The wielder gains a brief vision into the future, allowing them to see one action or event in their immediate vicinity. This effect lasts for 1 minute but can be ended early with a failed Concentration (DC 15) check."
      },
      {
        "title": "Risk of Temporal Disruption",
        "rules": "Each use has a 10% chance to trigger a temporal ripple, causing the wielder to lose their next action and suffer a -2 penalty on all attack rolls and saving throws until the start of their next turn."
      }
    ],
    "levelRequirementReason": "This shard requires significant magical power to control its effects without risking unintended consequences.",
    "vendorReason": "The Koopa Shop is known for its collection of rare and powerful relics, including items from dimensions beyond their own world.",
    "shippingDetail": "The Chronal Shard must be transported through a dimensional portal to ensure the stability of reality during transit.",
    "usage": {
      "activation": "Action (Must concentrate)",
      "duration": "1 minute or until concentration is lost",
      "endsWhen": "Concentration is lost or the wielder decides to end it early",
      "charges": "Unlimited, but concentration must be maintained"
    },
    "priceReason": "The shard's rarity and the risk it poses make its price reasonable for a powerful yet dangerous relic.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T01:00:06.366396+00:00",
    "aiReviewedAt": "2026-07-25T01:00:06.366396+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_canterlot_guard_amulet": {
    "id": "equestria_item_canterlot_guard_amulet",
    "name": "Canterlot Guard Amulet of Vigilance",
    "description": "The Canterlot Guard Amulet of Vigilance, forged by the Royal Guards themselves, is a shimmering talisman that hangs around your neck. Its silver surface glints like polished armor, and you can feel its subtle power as it sharpens your senses, making even the most grumpy unicorn seem approachable. With this amulet, fear becomes an artifact of the past, and you are ever-ready to face any challenge with unwavering resolve.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "+2 Perception",
      "Reflect Small Spells"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_carriage",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "+2 Perception",
        "rules": "When worn, this amulet grants a +2 bonus to your perception checks and passive perception. This effect is always active while you wear the amulet."
      },
      {
        "title": "Reflect Small Spells",
        "rules": "Once per short rest or long rest, when an attack or spell targeted at you would deal damage, you can use a reaction to reflect it harmlessly back toward its caster. This effect has no save DC and does not have any range."
      }
    ],
    "levelRequirementReason": "The amulet requires a minimum level of 7 because only seasoned guards are entrusted with the responsibility of defending Canterlot.",
    "vendorReason": "Canterlot Commerce is trusted by the Royal Guards to sell items that ensure their safety and readiness for duty.",
    "shippingDetail": "Delivered by the royal carriage, ensuring quick and secure transport of this vital gear.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; once per short rest or long rest.",
      "endsWhen": "Rest ends; you can use it again after a short rest or long rest.",
      "charges": "Unlimited, but only usable once per day."
    },
    "priceReason": "The price reflects the rarity and utility of the amulet, offering both defensive benefits and an essential morale boost for those in service to Canterlot.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T00:59:35.851287+00:00",
    "aiReviewedAt": "2026-07-25T00:59:35.851287+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starlight_dust": {
    "id": "equestria_item_starlight_dust",
    "name": "Stardust of the Celestial Mare",
    "description": "Stardust of the Celestial Mare is a shimmering powder collected from the trails of shooting stars above Equestria. This enchanted dust retains the celestial magic that once brightened the night skies, making it a rare and cherished item among mages. Sprinkle it upon an ally to grant them a burst of magical prowess for ten turns or simply use it to make everything sparkle with a minor light spell. Legends say that this stardust can even enhance your cake’s appeal.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 95,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "+3 to magic damage",
      "minor light spell"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blessed Magic Boost",
        "rules": "When sprinkled upon an ally, grants +3 to their next attack roll and ability checks involving magic for ten turns. This effect does not stack with other similar effects."
      },
      {
        "title": "Celestial Glow",
        "rules": "The user can cast a minor light spell by consuming one use of the stardust. The light persists for 10 minutes, illuminating an area of up to 20 feet in radius. This effect has no save DC."
      }
    ],
    "levelRequirementReason": "This item is accessible to beginners who wish to experiment with magical effects without the need for high-level skills.",
    "vendorReason": "The Crystal Empire, known for its mastery of celestial magic, often sells items that harness cosmic energies like this stardust.",
    "shippingDetail": "Ships via the swift and reliable Dragon Delivery service, ensuring your order arrives with a touch of magic.",
    "usage": {
      "activation": "Free action",
      "duration": "Ten turns or until expended",
      "endsWhen": "The effect ends when used up or when ten turns have passed",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the rarity and magical significance of stardust collected from Equestria’s night sky, making it accessible but not trivial.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T00:59:45.925898+00:00",
    "aiReviewedAt": "2026-07-25T00:59:45.925898+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_pastry_palace_favor": {
    "id": "leclaire_isle_item_pastry_palace_favor",
    "name": "Pastry Palace Patronage",
    "description": "The Pastry Palace Patronage is a delicate gingerbread figurine adorned with golden icing and sprinkles. Crafted by the renowned Dough Folk, this token grants a +1 bonus to Charisma checks made for persuasion or performance, while also providing a daily free pastry from the esteemed bakery. Those who leave generous tips may receive an additional magical effect each visit, enhancing their reputation in ways only a fine treat can match.",
    "category": "faction",
    "price": 1000,
    "icon": "🍰",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Charisma Boost",
      "Free Pastry"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "This token provides a +1 bonus to Charisma checks for persuasion or performance. The effect is passive and lasts until the start of your next turn."
      },
      {
        "title": "Daily Free Pastry",
        "rules": "Upon leaving a generous tip, you can claim one free pastry each day from Pastry Palace. This effect has no cooldown and can be used once per day."
      }
    ],
    "levelRequirementReason": "This token is accessible to all adventurers to encourage friendly relations with the Dough Folk.",
    "vendorReason": "Pastry Palace prides itself on its loyal patrons and offers this token to foster goodwill among customers.",
    "shippingDetail": "Shipped via the Pastry Express, ensuring your treat arrives fresh and warm.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous for Charisma checks made each day.",
      "endsWhen": "No end condition; the token's effects are ongoing until used or destroyed.",
      "charges": "Unlimited, but daily use of free pastry is limited to once per day."
    },
    "priceReason": "The token offers a significant boost to charisma and daily benefits from Pastry Palace, justifying its price in XP.",
    "priceOriginal": 1250,
    "priceReviewedAt": "2026-07-25T00:59:53.990238+00:00",
    "aiReviewedAt": "2026-07-25T00:59:53.990238+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sweet_supplies_spice_bomb": {
    "id": "leclaire_isle_item_sweet_supplies_spice_bomb",
    "name": "Volcanic Vanilla Blast",
    "description": "The Volcanic Vanilla Blast is a vial of fiery spice and fermented fruit, crafted from volcanic ash and rare vanilla blossoms. Upon activation, it releases a scorching cloud that both scorches and confuses foes in its path, leaving behind a lingering aroma that can drive even the most stoic warriors to distraction. The concoction's creator, a rogue alchemist known for their chaotic experiments, ensures each vial is a unique blend of chaos and serenity.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 9,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Firestorm",
      "Aroma Confusion"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "night_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Firestorm",
        "rules": "The Volcanic Vanilla Blast creates a small area effect that deals 12d6 fire damage to all creatures within a 10-foot radius. Creatures failing their Dexterity saving throw are also subjected to the 'Sticky' condition, which reduces movement speed by half for 1 minute."
      },
      {
        "title": "Aroma Confusion",
        "rules": "For 1 minute after the blast's initial effect, all creatures within a 30-foot radius must make a Wisdom saving throw (DC 15) or become confused, unable to take actions other than movement for 2 rounds."
      }
    ],
    "levelRequirementReason": "Novice alchemists can experiment with simple concoctions like the Volcanic Vanilla Blast.",
    "vendorReason": "Sweet Supplies specializes in exotic and unconventional ingredients, making it a reliable source for such volatile mixtures.",
    "shippingDetail": "Shipped via Night Delivery Couriers, ensuring the vial remains potent until opening.",
    "usage": {
      "activation": "A bonus action to activate the vial's effects by breaking it open.",
      "duration": "Instantaneous effect with ongoing confusion for 1 minute.",
      "endsWhen": "The confusion ends when a creature successfully saves against it or the duration expires.",
      "charges": "Unlimited uses; the vial is destroyed after use."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its volatile components and unique effects on both physical and mental targets.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:00:21.322157+00:00",
    "aiReviewedAt": "2026-07-25T01:00:21.322157+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_emberstrike": {
    "id": "warhammer_emberstrike",
    "name": "Emberstrike – The Dragon’s Tooth",
    "description": "Emberstrike – The Dragon’s Tooth is a warhammer forged from obsidian and volcanic glass, pulsing with the molten fury of ancient volcanoes. Its head is carved to resemble a dragon's tooth, and it crackles with residual heat that can be seen in its fiery glow. This weapon is said to have been blessed by an ancient fire elemental, imbuing it with the power to incinerate foes and ignite their flesh, though its volatile nature makes it dangerous even for those who wield it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Ignite",
      "Bonus Damage"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Magma Transport Vessel",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Ignite",
        "rules": "When you hit a creature with this weapon, there is a 50% chance that the target becomes ignited. The target takes an additional 3 (1d6) fire damage at the start of its next turn. This effect has no save DC and can occur once per target per long rest."
      },
      {
        "title": "Bonus Damage",
        "rules": "Emberstrike deals an extra 2d6 fire damage when used against undead creatures. This effect is not subject to any save DC or recharge requirements."
      }
    ],
    "levelRequirementReason": "This weapon's volatile nature and the power it commands require a significant amount of training and experience to wield effectively.",
    "vendorReason": "Fate Forge is known for its unique and powerful weapons, and Emberstrike fits perfectly into their line of legendary armaments.",
    "shippingDetail": "Due to the weapon's volatile nature, it must be shipped via the Magma Transport Vessel to ensure safe delivery.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after 3 uses per short or long rest",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "The weapon's unique materials and the ancient elemental power it harnesses justify its relatively lower price compared to other epic items.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:00:06.240351+00:00",
    "aiReviewedAt": "2026-07-25T01:00:06.240351+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_warp_scroll": {
    "id": "grand_country_warp_scroll",
    "name": "Temporal Slip Scroll",
    "description": "The Temporal Slip Scroll, a delicate parchment adorned with iridescent ink and sealed within scales of an ancient wyvern, allows for a brief displacement through time. When activated, it teleports you up to ten feet ahead, perfect for narrowly avoiding that avalanche or securing the last piece of cheese in Wario's hoard. The scroll also carries a mysterious property: once per day, upon activation, there is a slight chance (20%) that you will step back in time by a few seconds, sparing you from your next unfortunate misstep.",
    "category": "services",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "short_range_teleportation",
      "time_reversal_chance"
    ],
    "vendor": "side_seller",
    "shippedBy": "dimensional_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Short Range Teleportation",
        "rules": "Activating this scroll teleports the user up to ten feet forward. The duration is instantaneous, and it has a range of five feet. There are no saving throws required. This effect can be used once per day."
      },
      {
        "title": "Time Reversal Chance",
        "rules": "With a 20% chance upon activation, the user steps back in time by a few seconds. This effect provides a minor resistance to temporal anomalies and is also usable once per day. There is no saving throw for this effect."
      }
    ],
    "levelRequirementReason": "This scroll is accessible early on to encourage players to explore and avoid immediate danger.",
    "vendorReason": "Side Sellers often have a knack for procuring rare, second-hand magic items like this one.",
    "shippingDetail": "Delivered by the swift messengers of the astral plane; expect delivery within three days.",
    "usage": {
      "activation": "Reaction or Bonus Action (once per day)",
      "duration": "Instantaneous for teleportation effect; varies with time reversal chance",
      "endsWhen": "Effect ends when used or upon natural expiration",
      "charges": "Once per day"
    },
    "priceReason": "The scroll's limited daily use and its unique temporal properties justify this price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:00:45.295313+00:00",
    "aiReviewedAt": "2026-07-25T01:00:45.295313+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_elven_favor_token": {
    "id": "middle_earth_elven_favor_token",
    "name": "The Silvan Stewardship Token",
    "description": "The Silvan Stewardship Token is an intricately carved wooden token, adorned with engravings of ancient elven symbols. Crafted by the hands of the Silvan Elves in the heart of their sacred forest, it whispers of trust and stewardship. This token can sway the spirits of the forest if you charm them with honey and polite conversation; it grants advantage on persuasion checks involving nature-based creatures and a 5% chance to receive a free healing potion from Elven merchants upon successful negotiations.",
    "category": "faction",
    "price": 1000,
    "icon": "🌿",
    "stock": 45,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "Advantage on Persuasion Checks",
      "Healing Potion Chance"
    ],
    "vendor": "elven_market",
    "shippedBy": "giant_eagle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Persuasion Checks",
        "rules": "When interacting with nature-based creatures, the user gains advantage on persuasion checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Healing Potion Chance",
        "rules": "There is a 5% chance that, upon successfully persuading an Elven merchant to offer goods or services, you receive a free healing potion. This effect can only be used once per week."
      }
    ],
    "levelRequirementReason": "This token requires no specific level as it is a tool of diplomacy and persuasion.",
    "vendorReason": "Elven merchants are well-acquainted with the token's effects and often use it to facilitate deals.",
    "shippingDetail": "Shipped by giant eagles, arriving within a week of order placement.",
    "usage": {
      "activation": "Passive effect until used; requires successful persuasion check for healing potion chance.",
      "duration": "Until the end of your next turn or until expended.",
      "endsWhen": "The effect ends when you use it to gain advantage on a persuasion check involving nature-based creatures.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This token is priced at 1000 XP as its effects are powerful but balanced, granting significant benefits without overshadowing other items.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T01:00:27.281230+00:00",
    "aiReviewedAt": "2026-07-25T01:00:27.281230+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_evolution_potion": {
    "id": "pokemon_item_evolution_potion",
    "name": "Radiant Evolution Elixir",
    "description": "The Radiant Evolution Elixir is a shimmering potion that pulses with vibrant hues of the rainbow. This elixir, crafted from rare flora and ancient minerals found in the Enchanted Forest, promises to swiftly catalyze your Pokémon's latent evolutionary potential. Upon consumption, it triggers an immediate attempt at evolution, but only for normal Pokémon who are exactly one level away from evolving on their next turn. It also restores 25% of the Pokémon's health, ensuring they enter the transformation well-rested and ready for their new form.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "evolution trigger",
      "health restoration"
    ],
    "vendor": "pokemart",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Evolution Trigger",
        "rules": "The user must have a normal Pokémon that is exactly one level away from evolving on its next turn. Consuming the potion immediately attempts evolution, but success depends on the Pokémon's evolutionary chances and current trainer's skill. This effect has no save DC and is limited to once per day."
      },
      {
        "title": "Health Restoration",
        "rules": "Restores 25% of the target Pokémon's hit points instantly upon activation. This effect does not stack with other healing effects but can be used in conjunction with other items or abilities."
      }
    ],
    "levelRequirementReason": "The potion is accessible to trainers who are just starting their journey, allowing them to help their Pokémon reach the next stage of evolution.",
    "vendorReason": "Pokemarts specialize in items that aid trainers on their daily adventures and missions, making this potion a fitting addition.",
    "shippingDetail": "Shipped via the speedy delivery drones of the Enchanted Forest Express, ensuring the elixir arrives fresh for its intended use.",
    "usage": {
      "activation": "consuming the potion",
      "duration": "instantaneous",
      "endsWhen": "evolution is triggered or the day ends (if no evolution attempt occurs)",
      "charges": "unlimited"
    },
    "priceReason": "The potion's rarity and the balance of potential benefits justify its higher price point.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:00:27.649951+00:00",
    "aiReviewedAt": "2026-07-25T01:00:27.649951+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_lucky_trainer_badge": {
    "id": "pokemon_item_lucky_trainer_badge",
    "name": "Badge of the Temporal Shift",
    "description": "The Badge of the Temporal Shift, a tarnished emblem that whispers of past battles and future victories, subtly bends time around you in a cascade of fleeting moments. It grants a fleeting advantage in combat by allowing you to dodge an attack once per short rest and slightly increases your critical hit chance. Legends say it was forged by a trainer whose strategies were as unpredictable as their battles – Wario's, for instance. Use this badge wisely or risk unraveling the fabric of time itself.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🕰️",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "dodge attacks",
      "enhanced critical hits"
    ],
    "vendor": "league_store",
    "shippedBy": "magikarp_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dodge Attacks",
        "rules": "As a bonus action, you can attempt to dodge an attack roll against one creature within reach. You have advantage on this check if the attacker is more than 30 feet away from you."
      },
      {
        "title": "Enhanced Critical Hits",
        "rules": "+5% chance for critical hits when attacking with a weapon or using a spell that deals damage. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This badge's temporal manipulation is subtle and can be mastered by even the most novice trainers.",
    "vendorReason": "The league store caters to all levels of trainers, offering tools that help them hone their skills.",
    "shippingDetail": "Delivered swiftly by Magikarp messengers, ensuring the badge arrives just in time for your next training session.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (effect lasts until start of next turn)",
      "endsWhen": "Ends at the start of your next turn or when you are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The badge's temporal effects, while subtle, offer a unique advantage that can significantly impact battles.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:00:54.583003+00:00",
    "aiReviewedAt": "2026-07-25T01:00:54.583003+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_frost_amulet": {
    "id": "teyvat_item_frost_amulet",
    "name": "Amulet of the Frozen Heart",
    "description": "The Amulet of the Frozen Heart, crafted from an ancient shard of glacial ice and imbued with the essence of Cryo, radiates a chilling aura that can turn even the hottest flames to frost. Wielded by ancient frost giants, this amulet not only reduces fire damage taken by 20%, but also has a chance to freeze your foes upon contact, slowing their movements by 30%. Its icy touch is relentless, ensuring that those who wear it remain a step ahead in the battle against heat and chaos.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Reduces Fire Damage Taken",
      "Has a Chance to Freeze Enemies"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "ice_ship",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reduced Fire Damage",
        "rules": "The amulet reduces fire damage taken by 20%, making the wearer more resilient against fiery attacks. This effect is passive and always active while worn."
      },
      {
        "title": "Freeze on Contact",
        "rules": "When an enemy successfully hits the wearer with a melee attack, there's a 30% chance that the target will be frozen in place for 1 round (up to a maximum of once per minute). The freeze effect has no save DC and ends when the frozen creature takes any damage or is otherwise moved."
      }
    ],
    "levelRequirementReason": "The amulet's icy powers are too potent for those who lack the experience needed to wield it effectively.",
    "vendorReason": "Inazuma Imports specializes in exotic and powerful items, making this ancient frost giant relic a perfect fit for their inventory.",
    "shippingDetail": "The Amulet of the Frozen Heart is shipped via Ice Ship, ensuring it arrives at its destination encased in perpetual frost to maintain its magical properties.",
    "usage": {
      "activation": "Passive and always active while worn",
      "duration": "Instantaneous effect on hit; duration is limited by time between uses",
      "endsWhen": "The freeze effect ends when the target takes damage or moves, and the amulet's reduced fire damage effect is always active while worn.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from an ancient glacial shard, this amulet offers significant defensive benefits at a fair price for its level.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:01:02.967848+00:00",
    "aiReviewedAt": "2026-07-25T01:01:02.967848+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_mushroom_confusion": {
    "id": "faerun_item_potion_of_mushroom_confusion",
    "name": "Potion of Fungal Frenzy",
    "description": "A bubbling, iridescent potion brewed from rare Faerûnian mushrooms and enchanted with the whimsical magic of Mirtul, the Mushroom Queen. This concoction induces a state of delightful confusion among foes, causing them to laugh uncontrollably and accidentally ingest their own bootlaces. The effects are both disarming and unpredictable, leaving enemies in fits of giggles that can only be stopped by a successful saving throw or an abrupt end to the battle.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 28,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "Induces Laughter",
      "Ingests Bootlaces"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "the swift falcons of the Windseeker Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Induces Laughter",
        "rules": "Enemies within 10 feet are affected for 2 rounds. They are incapacitated with laughter, causing them to make a Wisdom saving throw (DC 14) or be charmed by the potion until the end of their next turn."
      },
      {
        "title": "Ingests Bootlaces",
        "rules": "There is a 15% chance per round that an affected enemy will attempt to eat their own bootlaces. This effect requires no action and can only be ended by being knocked unconscious or killed."
      }
    ],
    "levelRequirementReason": "This potion offers a basic yet effective way for low-level characters to distract enemies.",
    "vendorReason": "As a reputable source for magical goods, Baldur's Bazaar stocks this whimsical potion among its diverse array of items.",
    "shippingDetail": "Delivered with utmost speed, ensuring that the potion remains potent until it reaches its destination.",
    "usage": {
      "activation": "飲用（Consume as an action）",
      "duration": "2 rounds per use",
      "endsWhen": "The target either successfully saves or is incapacitated by laughter",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "The potion's potent effects and the rare ingredients required for its creation justify this price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:01:36.291250+00:00",
    "aiReviewedAt": "2026-07-25T01:01:36.291250+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_amulet_of_wario_s_luck": {
    "id": "faerun_item_amulet_of_wario_s_luck",
    "name": "Wario's Favor Amulet",
    "description": "The Wario's Favor Amulet is an oddly shaped charm crafted from polished gemstones and adorned with a faintly glowing design that seems to mimic Wario's signature smile. Its origins are shrouded in legend, as it was supposedly blessed by the notorious plumber himself. This amulet grants its wearer a touch of Wario’s chaotic good fortune: finding extra coins and dodging nasty traps. The charm also subtly alters one's luck when searching for valuable items, increasing the chances by 20%. But beware—there is an unwritten rule that eating everything you find will bring about misfortune.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Fortunate Finds",
      "Trap Dodger"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "delivery_ship",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Fortunate Finds",
        "rules": "When the wearer searches for valuable items, they gain a +20 bonus to their search check. This effect lasts until the start of your next turn."
      },
      {
        "title": "Trap Dodger",
        "rules": "The wearer has advantage on saving throws against traps and hazards. This effect is permanent as long as the amulet remains in use."
      }
    ],
    "levelRequirementReason": "This amulet requires a minimum level to ensure its chaotic good fortune doesn't overwhelm less experienced adventurers.",
    "vendorReason": "Waterdeep Market is known for exotic and mythic items, making it the perfect place for such an artifact blessed by Wario himself.",
    "shippingDetail": "Ships via the delivery ship with a special courier who ensures the amulet arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Permanent while worn and functional.",
      "endsWhen": "Exhausted when the wearer's temporary hit points are depleted.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The amulet is priced at 1000 XP, reflecting its mythic rarity and the unique benefits it bestows upon its wearer.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T01:01:06.236555+00:00",
    "aiReviewedAt": "2026-07-25T01:01:06.236555+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_ritual_candle_of_inspiration": {
    "id": "kivotos_item_ritual_candle_of_inspiration",
    "name": "Spark of Genius",
    "description": "The Spark of Genius is a shimmering candle crafted from rare luminescent wax, its surface etched with arcane symbols that glow faintly in the dark. This magical artifact emanates an ethereal light that can spark brilliant ideas or unlock hidden potential, making it indispensable for artists and inventors alike. Even the most mundane tasks seem to flow more smoothly when this candle is lit, as if the universe conspires to assist those who seek inspiration.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🕯️",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Inspiration Boost",
      "Creativity Surge"
    ],
    "vendor": "club_supply",
    "shippedBy": "swift courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Inspiration Boost",
        "rules": "When a user activates the Spark of Genius by lighting it, they have a 20% chance to gain a +1 bonus to one skill check or ability check. This effect lasts for 1 minute and can be used once per short rest."
      },
      {
        "title": "Creativity Surge",
        "rules": "The Spark of Genius reduces the time required to complete creative tasks by half (e.g., cutting a task that normally takes an hour down to 30 minutes). This effect is usable twice per long rest and lasts for as long as it's lit."
      }
    ],
    "levelRequirementReason": "The Spark of Genius requires no special training, making it accessible to all adventurers.",
    "vendorReason": "Club Supply caters to artists and inventors who need a little extra inspiration for their projects.",
    "shippingDetail": "Ships via Swift Courier, ensuring the candle arrives in perfect condition within 2 days of purchase.",
    "usage": {
      "activation": "Activating this item requires lighting it.",
      "duration": "Inspiration Boost lasts for 1 minute. Creativity Surge effect is ongoing as long as the candle remains lit.",
      "endsWhen": "The effects end when the candle is extinguished or used up.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The Spark of Genius provides significant boosts to creativity and skill checks, making it a valuable tool for any adventurer seeking inspiration.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:01:29.392044+00:00",
    "aiReviewedAt": "2026-07-25T01:01:29.392044+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_rune_sculpting": {
    "id": "the_edge_rune_sculpting",
    "name": "Voidforger's Touch",
    "description": "Voidforger's Touch is a rune-sculpted talisman that imbues your chosen weapon or armor with potent defenses against The Edge’s malevolent energies. Crafted using ancient rituals and rare materials, this artifact weaves protective runes that bolster your AC by +2 and grant you +1 to saving throws against fear and madness effects. Misaligned runes can bring a curse upon the user for days, so it is crucial to have the touch performed correctly.",
    "category": "services",
    "price": 1000,
    "icon": "⚒️",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+2 Armor Class",
      "Protection Against Fear and Madness"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "messenger hawk",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Arcane Shield Deflection",
        "rules": "As a reaction when you are targeted by an attack, this item can cast Shield on you. The duration of the Shield spell is reduced to 1 round."
      },
      {
        "title": "Misaligned Runes",
        "rules": "If a misalignment occurs during or after the rune-sculpting process, there is a 20% chance that an ill omen will affect you for up to one week. This effect can be mitigated by spending 100 XP."
      }
    ],
    "levelRequirementReason": "The intricate and dangerous nature of the runes requires at least 8th level to perform without endangering yourself.",
    "vendorReason": "Only those with a deep understanding of The Edge's corrupting energies can safely offer this service.",
    "shippingDetail": "The runes are carefully packed and delivered by the messenger hawks, ensuring swift and secure transport to your location.",
    "usage": {
      "activation": "Instantaneous; requires a successful DC 15 Craft (runes) check.",
      "duration": "Until the next long rest or until destroyed.",
      "endsWhen": "The runes become misaligned or are destroyed by magical means.",
      "charges": "Unlimited, but limited to one per day."
    },
    "priceReason": "This service requires rare materials and a deep understanding of The Edge's arcane energies, justifying the moderate price in XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:01:42.067537+00:00",
    "aiReviewedAt": "2026-07-25T01:01:42.067537+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_blackheart_charm": {
    "id": "the_edge_blackheart_charm",
    "name": "A Bargain with the Abyss",
    "description": "The A Bargain with the Abyss is a gleaming obsidian charm that warms your palm as if it's alive. Crafted from deep-sea black lava and imbued with the whispers of the abyss, this trinket subtly influences your actions towards more dubious ventures. It grants you +1 Dexterity (temporary) and a chance to gain advantage on persuasion checks when dealing with shady characters, but there’s a small risk it might attract unwanted attention from monstrous entities. Wario swears by its power, though he can’t explain why.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "+1 Dexterity (temporary)",
      "Advantage on Persuasion Checks with Shady Characters"
    ],
    "vendor": "final_shop",
    "shippedBy": "winged courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Dexterity Boost",
        "rules": "Grants +1 to Dexterity as a bonus action, lasts until the end of your next turn. No save required."
      },
      {
        "title": "Advantage on Persuasion Checks",
        "rules": "Gives advantage on persuasion checks when interacting with shady characters. The effect lasts for 1 minute per use, and you can only activate it once per long rest."
      }
    ],
    "levelRequirementReason": "The charm's influence is subtle enough that even a low-level character can harness its power.",
    "vendorReason": "Final Shop offers unique and powerful items, making this charm a fitting addition to their inventory.",
    "shippingDetail": "Delivered swiftly by the winged couriers, ensuring you receive your bargain promptly.",
    "usage": {
      "activation": "Bonus action to gain +1 Dexterity (temporary) and advantage on a persuasion check with a shady character.",
      "duration": "Until the end of your next turn for the temporary Dexterity boost; lasts 1 minute per use for advantage on persuasion checks.",
      "endsWhen": "Exhausted after one long rest or when the effect is no longer needed.",
      "charges": "Unlimited uses, but only once per long rest."
    },
    "priceReason": "The charm's unique blend of temporary buffs and risk adds significant value to its price point.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T01:01:22.873140+00:00",
    "aiReviewedAt": "2026-07-25T01:01:22.873140+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_sunstone_charm": {
    "id": "animatopia_sunstone_charm",
    "name": "Sunstone Charm of the Howling Wind",
    "description": "The Sunstone Charm of the Howling Wind pulses with an otherworldly orange glow, harvested from a sun-drenched ravine where ancient tribes once communed with the wild. When worn, it grants you a burst of speed, allowing you to outrun most predators for a brief moment. More than just a trinket, this charm also allows you to understand the basic communications of local wildlife, providing valuable insights into their behavior and concerns.",
    "category": "equipment",
    "price": 1000,
    "icon": "☀️",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_speed_3",
      "understand_animal_speech"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Giant Beetle Post",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Grant Speed (30 ft)",
        "rules": "You gain a +10 foot bonus to your walking speed for 1 minute. The effect ends if you are incapacitated or if you use this ability again."
      },
      {
        "title": "Understand Animal Speech",
        "rules": "For the duration of 8 hours, you can understand and speak with any beast within a 30-foot radius. This effect is interrupted by sleeping or being unconscious for at least an hour."
      }
    ],
    "levelRequirementReason": "This charm's complex enchantment requires a level 7 character to wield effectively.",
    "vendorReason": "The tribal trader has exclusive access to ancient artifacts from the sun-drenched ravine where this charm was discovered.",
    "shippingDetail": "The Giant Beetle Post delivers with swift precision, ensuring your Sunstone Charm arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect until used; requires concentration to maintain understand animal speech.",
      "duration": "1 minute for speed, 8 hours for understanding",
      "endsWhen": "You become incapacitated or unconscious (speed), sleeping for at least an hour (understand animal speech)",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and unique enchantments justify its moderate price tag of 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:01:59.537626+00:00",
    "aiReviewedAt": "2026-07-25T01:01:59.537626+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_ember_potion": {
    "id": "animatopia_ember_potion",
    "name": "Emberheart Potion",
    "description": "The Emberheart Potion is a fiery red elixir crafted from the solidified tears of a volcanic badger, whose resilience in the face of volcanic eruptions lends it its unique properties. It smells faintly of burnt berries and the frustrated grunts that accompany its creation, making it unmistakable among other potions. Upon imbibing, this potion instantly restores vitality, granting 50 hit points to the imbiber while imparting a warm glow that enhances their resilience against cold-based attacks by +2 for one hour.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restore_health_50",
      "resilience_against_cold"
    ],
    "vendor": "forest_market",
    "shippedBy": "Winged Squirrel Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "When consumed, the Emberheart Potion instantly restores 50 hit points to the imbiber. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Resilience Against Cold",
        "rules": "For one hour after consumption, the imbiber gains a +2 bonus to saving throws against cold-based spells and effects. This benefit ends when the duration expires or if the imbiber takes any damage from a source other than magic."
      }
    ],
    "levelRequirementReason": "The potion's creation requires knowledge of volcanic processes and the lore of badgers, which is typically mastered by first-level adventurers.",
    "vendorReason": "Forest Market often stocks items that can aid adventurers in their battles against creatures from the wilds, including those who dwell near volcanoes.",
    "shippingDetail": "The Winged Squirrel Courier delivers this potion swiftly, ensuring it remains potent for its duration.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "One hour",
      "endsWhen": "Duration expires or the imbiber takes damage from a source other than magic",
      "charges": "Unlimited"
    },
    "priceReason": "The potion's rarity, sourcing materials from volcanic badgers, and its significant health-restoring properties justify this balanced XP price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:01:50.235276+00:00",
    "aiReviewedAt": "2026-07-25T01:01:50.235276+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_totem": {
    "id": "internet_meme_totem",
    "name": "Distorted Reality Totem",
    "description": "The Distorted Reality Totem is a solidified fragment of the internet, crafted from the very essence of countless memes and viral trends. Its surface gleams with an ethereal, shifting light that flickers like a meme gone wild. When held, reality warps around you: objects shimmer, colors bleed, and your mind may find itself irresistibly drawn to the absurdity of pineapple on pizza. This totem is no mere trinket; it’s a living artifact from the digital ether, designed to bend perceptions in ways both amusing and disorienting.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤪",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Meme-Infused Delusion",
      "Reality Warping"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Meme-Infused Delusion",
        "rules": "When you activate the totem as a bonus action, there is a 30% chance that creatures within 15 feet of you become temporarily confused for 1 minute. This effect has no save DC and does not require an attack roll."
      },
      {
        "title": "Reality Warping",
        "rules": "You gain resistance to psychic damage while holding the totem. Additionally, once per long rest, you can use it as a bonus action to teleport up to 30 feet in any direction, instantly moving yourself or an object within reach."
      }
    ],
    "levelRequirementReason": "The totem's power is accessible to all adventurers, making it a valuable tool for any party.",
    "vendorReason": "As a vendor of the digital and arcane, Data Dealer regularly stocks items that bridge the gap between technology and magic.",
    "shippingDetail": "The courier ensures quick delivery, but the totem's delicate nature requires special handling for safe transport.",
    "usage": {
      "activation": "Bonus action to activate or use as a reaction to teleport short distances.",
      "duration": "Meme-Infused Delusion lasts 1 minute; Reality Warping effect is instantaneous and can be used once per long rest.",
      "endsWhen": "The effect ends if you release the totem, it breaks, or you are incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its mythic rarity and unique utility in both combat and exploration.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T01:02:14.022023+00:00",
    "aiReviewedAt": "2026-07-25T01:02:14.022023+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_grumpy_gloomstone": {
    "id": "equestria_item_grumpy_gloomstone",
    "name": "Grumpy Gloomstone of Discord",
    "description": "The Grumpy Gloomstone of Discord is a sullen stone carved from the heart of Nightmare's realm. Its dark surface glows with an eerie, unsettling light that can disrupt even the most harmonious groups. Touching this gem causes nearby allies to question each other's decisions, leading to arguments and reduced coordination. The stone’s influence weakens healing magic, leaving those around it more vulnerable. Wario would indeed use this for his pranks, ensuring chaos in any party he targets.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "common",
    "stockType": "night_only",
    "effects": [
      "Argumentative Allies",
      "Healing Weakness"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Delivery Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Argumentative Allies",
        "rules": "Allies within 10 feet of the Gloomstone have disadvantage on saving throws and ability checks requiring diplomacy. This effect lasts for 3 turns."
      },
      {
        "title": "Healing Weakness",
        "rules": "Reduces the effectiveness of healing spells or effects by 25% for all nearby allies within 10 feet. This persists until the end of the encounter."
      }
    ],
    "levelRequirementReason": "This item's disruptive effects are suitable for players who have reached a basic level of proficiency in combat and spellcasting.",
    "vendorReason": "The Crystal Empire, known for its deep connections with magical artifacts and curiosities, offers this stone to adventurers seeking unique tools for their pranks or strategic advantages.",
    "shippingDetail": "Ships within a week; rare shipments may experience longer delays due to the stone's volatile nature.",
    "usage": {
      "activation": "Touching the Gloomstone is required to activate its effects, which last for the duration of the encounter or until dispelled by another character.",
      "duration": "Until the end of the encounter or when a dispel magic spell is cast on it.",
      "endsWhen": "The stone's effects are neutralized either at the end of the encounter or when a dispel magic spell targets it.",
      "charges": "Unlimited uses, but only one effect can be active at any time."
    },
    "priceReason": "This item's price reflects its disruptive nature and rarity, offering players a valuable tool for strategic use in chaotic encounters.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:01:59.723050+00:00",
    "aiReviewedAt": "2026-07-25T01:01:59.723050+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_spell_analysis_rune": {
    "id": "kivotos_item_spell_analysis_rune",
    "name": "Arcane Decoder Ring",
    "description": "The Arcane Decoder Ring is a sleek, rune-engraved band that glows faintly with arcane energy when worn. Crafted from enchanted silver and imbued with the essence of ancient tomes, it allows you to instantly translate spell effects into simple terms. This invaluable tool not only decodes enemy incantations but also reveals their true magical intentions, giving you a strategic edge in combat. With a flick of your wrist, the ring illuminates any spell's purpose and potency, ensuring you're always one step ahead of your foes.",
    "category": "services",
    "price": 1000,
    "icon": "🔍",
    "stock": 15,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "spell_translation",
      "strategic_insight"
    ],
    "vendor": "club_supply",
    "shippedBy": "Magical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spell Translation",
        "rules": "Activate as a bonus action. The ring instantly translates the effects of any spell you perceive into plain English (or your preferred language). This effect lasts for 1 minute, during which time the target's spellcasting is transparent to you. You can use this feature once per short or long rest."
      },
      {
        "title": "Strategic Insight",
        "rules": "Activate as a reaction when an enemy casts a spell within range (30 feet). The ring reveals the true nature and purpose of the spell, granting you advantage on your next attack roll against that creature. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Arcane Decoder Ring requires at least a first-level spellcaster to wield it effectively.",
    "vendorReason": "Club Supply specializes in magical paraphernalia, ensuring that adventurers have the tools they need for their quests.",
    "shippingDetail": "The ring is carefully packed and shipped using Magical Courier's enchanted delivery service to ensure safe arrival at your doorstep.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "1 minute for Spell Translation; varies by spell for Strategic Insight",
      "endsWhen": "Ends when the feature ends, or if you cast a spell yourself",
      "charges": "Unlimited"
    },
    "priceReason": "The Arcane Decoder Ring's price reflects its powerful ability to translate and reveal spells, providing significant strategic advantage.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:02:40.871231+00:00",
    "aiReviewedAt": "2026-07-25T01:02:40.871231+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_cipher_scroll_of_confusion": {
    "id": "kivotos_item_cipher_scroll_of_confusion",
    "name": "The Misdirection Manuscript",
    "description": "The Misdirection Manuscript unfurls to reveal a swirling vortex of ink and symbols that dance in eerie, hypnotic patterns. As you unfurl it, an aura of confusion spreads outwards, causing nearby foes to stumble into one another or freeze in place for a moment. This ancient scroll is said to have been crafted by scholars seeking to outwit the Headmaster's ferocious guard dog, and its effects are as unpredictable as they are effective.",
    "category": "curiosities",
    "price": 1000,
    "icon": "😵‍💫",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Confusion Aura",
      "Increased Disadvantage"
    ],
    "vendor": "club_supply",
    "shippedBy": "drone_delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Confusion Aura",
        "rules": "When activated, the scroll releases a wave of mental disarray that targets all creatures within 10 feet. These creatures must succeed on a Wisdom saving throw (DC 13) or become confused for 1 minute. The confusion ends early if the affected creature takes any damage."
      },
      {
        "title": "Increased Disadvantage",
        "rules": "All creatures within the Confusion Aura range have disadvantage on attack rolls and Dexterity Saving Throws until the end of their next turn after being exposed to the aura."
      }
    ],
    "levelRequirementReason": "The Misdirection Manuscript requires a minimum level of 3 due to its complexity and the strategic advantage it provides in combat.",
    "vendorReason": "Club Supply specializes in rare and magical curiosities, making them the perfect vendor for this ancient manuscript.",
    "shippingDetail": "The scroll is delivered swiftly by drone, ensuring it arrives intact and ready to use.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends for each creature that takes damage or when the manuscript's uses are exhausted.",
      "charges": "3 uses"
    },
    "priceReason": "The Misdirection Manuscript is priced at 1000 XP due to its unique and powerful effects, which include a confusion aura and increased disadvantage on attack rolls.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:02:33.034243+00:00",
    "aiReviewedAt": "2026-07-25T01:02:33.034243+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_ember_heart": {
    "id": "teyvat_item_ember_heart",
    "name": "Ember Heart Fragment",
    "description": "The Ember Heart Fragment is a glowing, jagged shard of solidified flame, said to be a tear shed by the Anemo Archon upon first beholding Mondstadt's splendor. It pulses with warmth, and when held, it grants an unexpected advantage: enemies are drawn to its heat, momentarily distracted from your true aim. The fragment's glow is both mesmerizing and unnerving, casting a flickering light that seems to taunt the foes around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "fire_resistance",
      "distract_enemy"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swiftwind Courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The wielder gains resistance to fire damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Distract Enemy",
        "rules": "When you take an action, the Ember Heart Fragment emits a burst of heat that distracts one creature within 5 feet. The target must make a DC 14 Dexterity saving throw or become distracted for 1 round."
      }
    ],
    "levelRequirementReason": "This item's power complements the abilities and challenges faced by level 9 characters, offering strategic advantages without being overpowered.",
    "vendorReason": "The market in Mondstadt is known for its wealth of mystical artifacts, including this fragment from a legendary tear.",
    "shippingDetail": "Ships via Swiftwind Courier with expedited delivery within the region.",
    "usage": {
      "activation": "Instantaneous; takes an action to be held and used effectively.",
      "duration": "One round per turn while held.",
      "endsWhen": "The effect ends when you drop or lose hold of the fragment, or if it is destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This Ember Heart Fragment offers a balanced mix of defensive and offensive benefits without being prohibitively expensive.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:02:33.147779+00:00",
    "aiReviewedAt": "2026-07-25T01:02:33.147779+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_scroll_of_lost_echoes": {
    "id": "teyvat_item_scroll_of_lost_echoes",
    "name": "Scroll of Lost Echoes",
    "description": "The Scroll of Lost Echoes, recovered from the ancient ruins beneath Liyue Harbor, crackles with the whispers of forgotten seafaring traders. Unrolling it reveals a fleeting tactical advantage, but beware—sometimes the echoes are interrupted by the grumpy crab that guards this relic. This artifact is said to have been crafted during the Age of Exploration, when merchants braved treacherous seas. A Sea Serpent Express courier delivers the scroll with care, ensuring its safe arrival.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Tactical Insight",
      "Treasure Seeker"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tactical Insight",
        "rules": "Activating this scroll grants you advantage on one ability check of your choice. The effect lasts for a total of 1 minute, and the scroll can be used once per day."
      },
      {
        "title": "Treasure Seeker",
        "rules": "When you use this scroll within an area known to contain hidden treasures or traps, there is a +2d4 chance that you discover a secret passage or encounter a hidden chest. This effect ends when the scroll's duration expires."
      }
    ],
    "levelRequirementReason": "The scroll requires at least level 1 to activate, providing tactical insight and treasure-seeking benefits.",
    "vendorReason": "Liyue Harbor is a hub for seafaring traders and explorers, making it the ideal vendor for an artifact of its origin.",
    "shippingDetail": "The scroll arrives with a Sea Serpent Express courier, ensuring timely delivery and safe handling.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The scroll's duration expires or it is used again the next day.",
      "charges": "1/Day"
    },
    "priceReason": "The Scroll of Lost Echoes offers strategic and treasure-hunting benefits that are valuable to adventurers, justifying its price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:03:32.956315+00:00",
    "aiReviewedAt": "2026-07-25T01:03:32.956315+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chronos_shard": {
    "id": "teyvat_item_chronos_shard",
    "name": "Chronos Shard of Eternity",
    "description": "The Chronos Shard of Eternity is a shimmering fragment from time's weave, its surface etched with ancient runes that pulse like a heartbeat frozen in stasis. Crafted by the forgotten gods of ages past, this shard can be wielded to grant you a fleeting advantage in battle or to slow down your foes' movements for precious moments. Legends whisper it was once part of an unholy clockwork engine designed to control time itself, now reduced to a relic of legend and power.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Temporal Stasis",
      "Enhanced Defense"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Dimensional Rift Delivery",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Temporal Stasis",
        "rules": "As a bonus action, the wielder can target an enemy within 30 feet. For the next 3 seconds, the targeted creature is slowed by 2 on movement and cannot take reactions until the end of its next turn."
      },
      {
        "title": "Enhanced Defense",
        "rules": "The user gains a +10 bonus to AC for 1 minute. This effect can only be activated once per short or long rest."
      }
    ],
    "levelRequirementReason": "This powerful relic requires significant magical prowess and understanding of temporal magic, making it accessible only to the most seasoned adventurers.",
    "vendorReason": "Inazuma Imports deals exclusively in ancient and rare artifacts from across Teyvat, ensuring this shard's authenticity and power are unmatched.",
    "shippingDetail": "The Chronos Shard is delivered through a rift that requires time to stabilize, adding an extra day to the delivery timeframe.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "3 seconds or 1 minute",
      "endsWhen": "The duration ends at the end of the user's next turn unless the effect is interrupted.",
      "charges": "Unlimited, but only one can be active at a time."
    },
    "priceReason": "The price reflects its rarity and power, balancing it with other godly items in Teyvat.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-25T01:03:04.903272+00:00",
    "aiReviewedAt": "2026-07-25T01:03:04.903272+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_wormhole_tea": {
    "id": "grand_country_wormhole_tea",
    "name": "Temporal Tincture Brew",
    "description": "The Temporal Tincture Brew, a shimmering elixir brewed from rare root vegetables harvested in inverted valleys, promises fleeting glimpses into possible futures... or just an unsettling stomachache. Drink with caution, for the future is notoriously grumpy and can be both enlightening and disorienting. Each sip grants a brief vision of potential outcomes, but beware: the visions are fleeting, and the lingering giggles may disrupt your focus for the better part of an hour.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 91,
    "rarity": "common",
    "stockType": "night_only",
    "effects": [
      "brief glimpse into possible futures",
      "temporary increase in reaction time"
    ],
    "vendor": "side_seller",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision of Futures",
        "rules": "On activation, the drinker is granted a brief vision of one possible future. This effect lasts for 1d4 rounds and provides no save DC; however, it can be ended early if the drinker takes any action other than moving or talking."
      },
      {
        "title": "Increased Reaction Time",
        "rules": "The drinker gains advantage on Dexterity saving throws and attack rolls made before their next turn. This effect lasts until the start of their next turn, with no save DC required; it is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "This potion requires no specific level requirement as its effects are subtle and temporary.",
    "vendorReason": "Side Seller, known for their eclectic wares, carries the Temporal Tincture Brew because it's a popular item among adventurers seeking to gain insights into future encounters or challenges.",
    "shippingDetail": "Shipped by a giant snail that delivers the brew in its shell, ensuring that the tea is delivered fresh and unspoiled.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "1d4 rounds for Vision of Futures; until start of next turn for Increased Reaction Time",
      "endsWhen": "On taking any action other than moving or talking, or at the end of your next turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Temporal Tincture Brew is priced high due to its unique and potentially valuable effects for adventurers.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T01:03:04.886227+00:00",
    "aiReviewedAt": "2026-07-25T01:03:04.886227+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_glowstone_berry": {
    "id": "animatopia_glowstone_berry",
    "name": "Glowstone Berry Pouch",
    "description": "The Glowstone Berry Pouch, a leather pouch filled to bursting with luminescent berries plucked from the depths of Animatopia’s glimmering caves, pulses softly in the dark. These rare fruits are known for their dual purpose: they restore a traveler's strength and heal minor wounds while casting a comforting dim light that guides through even the most treacherous corridors. Scouts swear by these berries as both an emergency rations and a reliable source of illumination.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Restores Health",
      "Dim Light"
    ],
    "vendor": "forest_market",
    "shippedBy": "swift rabbit courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores Health",
        "rules": "When consumed, the Glowstone Berry Pouch restores 10 hit points to the imbiber. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Dim Light",
        "rules": "The pouch emits a soft, dim light for up to one hour. This light covers a radius of 20 feet in all directions from the pouch. The light is bright enough to illuminate objects within but not strong enough to blind or dazzle."
      }
    ],
    "levelRequirementReason": "The Glowstone Berry Pouch provides essential survival benefits, making it accessible for adventurers of lower levels.",
    "vendorReason": "The forest market is a bustling hub where supplies are traded, and the rare berries from Animatopia are in high demand.",
    "shippingDetail": "Swift delivery by the fleet-footed rabbit couriers ensures that the pouches arrive fresh and ready for consumption.",
    "usage": {
      "activation": "Instantaneous when consumed",
      "duration": "1 hour, or until expended",
      "endsWhen": "The light is extinguished if not used within one hour of activation. The pouch is exhausted after use.",
      "charges": "Unlimited; the berries regenerate naturally in Animatopia’s caves."
    },
    "priceReason": "The Glowstone Berries are highly sought-after and require careful harvesting, making their cost far beyond a mere 250 XP.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:03:42.962267+00:00",
    "aiReviewedAt": "2026-07-25T01:03:42.962267+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_forbidden_shadow_mane": {
    "id": "equestria_item_forbidden_shadow_mane",
    "name": "Forbidden Shadow Mane Fragment",
    "description": "This fragment of forbidden shadow mane is a twisted lock of hair, blacker than night and colder than ice. It whispers dark secrets when touched, driving you to crave forbidden berries that leave a lingering taste of decay in your mouth. Those who wield it can manipulate shadows briefly, cloaking themselves for brief moments or dealing shadow damage, but at the cost of their own willpower. Rumors say the more one uses its power, the harder it is to escape its grasp.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "shadow manipulation",
      "dark berries craving"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Grimshade Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Manipulation",
        "rules": "The wielder can use an action to create a minor shadow form that deals 1d6 shadow damage and grants temporary invisibility for up to 3 turns. This effect has a recharge after a short rest."
      },
      {
        "title": "Dark Berries Craving",
        "rules": "For every 2 uses of the fragment, the wielder gains a -1 penalty to Wisdom saving throws until they consume dark berries or complete a long rest. The penalty increases by -1 for every additional use up to a maximum of -4."
      }
    ],
    "levelRequirementReason": "Beginners with a curious mind and the courage to venture into darkness find this fragment intriguing, but they must be careful not to lose themselves in its power.",
    "vendorReason": "Canterlot Commerce deals in rare and exotic items, including those that walk the line between forbidden and useful.",
    "shippingDetail": "The Grimshade Courier ensures safe delivery with a promise to deliver within a week of purchase.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous; lasts until used up",
      "endsWhen": "Charges run out after 3 uses, recharging on a short rest",
      "charges": "3 charges"
    },
    "priceReason": "The fragment's rarity and the risk it poses to its wielder justify this price in XP.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:04:08.030177+00:00",
    "aiReviewedAt": "2026-07-25T01:04:08.030177+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparkling_hoof_charm": {
    "id": "equestria_item_sparkling_hoof_charm",
    "name": "Sparkling Hoof Charm",
    "description": "The Sparkling Hoof Charm is a delicate necklace forged from a genuine pony hoof, said to bring good luck and speed. Crafted by Crystal Empire artisans, this talisman not only enhances your movement with +2 feet of walking speed but also grants a +10% chance to dodge attacks, making it invaluable on the battlefield or in a race. Some say its faint apple scent is a relic of happier times.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐴",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "movement speed",
      "dodge"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Royal Mail Pegasus",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Movement",
        "rules": "The charm provides +2 feet to your walking speed, which lasts until the end of your next turn."
      },
      {
        "title": "Improved Dodging",
        "rules": "While wearing this charm, you have advantage on Dexterity saving throws related to dodging attacks. This effect ends when you stop wearing it."
      }
    ],
    "levelRequirementReason": "The charm's simplicity and widespread availability make it accessible to all pony adventurers starting their journey.",
    "vendorReason": "As a trusted supplier of magical accessories, Crystal Empire is known for its high-quality charms and trinkets.",
    "shippingDetail": "Delivered swiftly by the Royal Mail Pegasus, ensuring your charm arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect upon donning the charm.",
      "duration": "Lasts until you stop wearing it.",
      "endsWhen": "Discontinued when you remove the charm from your neck.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at this price, considering its common rarity and widespread utility in enhancing movement and dodging.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:03:21.787632+00:00",
    "aiReviewedAt": "2026-07-25T01:03:21.787632+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_tribal_totem": {
    "id": "animatopia_tribal_totem",
    "name": "Clan Protector Totem",
    "description": "The Clan Protector Totem, a towering artifact crafted by the esteemed Beast-Bazaar artisans, stands as a guardian of the wild. Its imposing form exudes an ancient charm that subtly calms territorial spirits and offers a defensive shield to those who call it their own. This sacred totem is said to have been blessed with the essence of the forest's most revered protector animals, granting its wielder a small area of calming influence and a chance to mitigate wild animal attacks (5%).",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Area of Calming Influence",
      "Mitigate Wild Animal Attacks"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle courier",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Area of Calming Influence",
        "rules": "The Totem creates a 10-foot radius area around it that offers a +2 bonus to AC for all creatures within the area. This effect lasts until the end of your next turn, and once per short or long rest."
      },
      {
        "title": "Mitigate Wild Animal Attacks",
        "rules": "For every successful wild animal attack against you while holding the Totem, there is a 5% chance to negate that damage entirely. This effect does not stack with other similar abilities and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Totem's ancient magic demands a minimum level of 7 to wield its protective essence.",
    "vendorReason": "As the artisans behind the Totem, Beast-Bazaar is entrusted with selling items that embody the spirit of the wild, making them the perfect purveyors of such a powerful totem.",
    "shippingDetail": "The giant beetle courier ensures swift delivery, often arriving in just one night.",
    "usage": {
      "activation": "Passive effect; no activation needed.",
      "duration": "Lasts until the end of your next turn or ends when you are no longer holding the Totem.",
      "endsWhen": "The duration ends when you stop holding the Totem, and it is destroyed if used in a hostile environment.",
      "charges": "Unlimited uses; does not expend charges."
    },
    "priceReason": "Crafted with rare materials and ancient magic, the Clan Protector Totem provides significant defensive benefits at an affordable price point for those willing to protect their territory.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:03:56.761074+00:00",
    "aiReviewedAt": "2026-07-25T01:03:56.761074+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_harmony_scroll": {
    "id": "animatopia_harmony_scroll",
    "name": "Song of the Shifting Sands",
    "description": "The Song of the Shifting Sands is a sacred scroll crafted from sandpaper and ink by the Tribal Trader, whose nomadic ancestors passed down this art through generations. The melody it hums can calm even the most hostile beast, turning potential adversaries into willing allies. This artifact not only boosts your charisma but also grants you an uncanny knack for understanding animal languages, making it invaluable in both trade and diplomacy.",
    "category": "faction",
    "price": 1000,
    "icon": "🎶",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Boosted Charisma",
      "Animal Tongue Proficiency"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "river_turtle",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Charismatic Boost",
        "rules": "When you activate the scroll as a bonus action, your Charisma score is temporarily increased by +2 for 1 hour. This effect can be used once per long rest."
      },
      {
        "title": "Animal Tongue Proficiency",
        "rules": "For the duration of 10 minutes after activation, you gain proficiency in any one language associated with a specific animal species (e.g., owl, wolf). You must choose this language when activating the scroll. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "The intricate melody requires a certain level of musical and linguistic proficiency.",
    "vendorReason": "The Tribal Trader has a deep connection with the animatopian tribes and understands their customs better than any other vendor.",
    "shippingDetail": "The scroll is delivered via river turtle, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate; once per long rest for Charisma boost and once per day for Animal Tongue Proficiency.",
      "duration": "1 hour for Charisma boost; 10 minutes for Animal Tongue Proficiency.",
      "endsWhen": "Effect ends when the time duration expires or you use it again within its daily limit.",
      "charges": "Unlimited, but subject to long rest and daily limits."
    },
    "priceReason": "This scroll is priced at 1000 XP, reflecting its intricate craftsmanship and the value it brings to diplomatic endeavors.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:04:21.845184+00:00",
    "aiReviewedAt": "2026-07-25T01:04:21.845184+00:00",
    "aiReviewVersion": 1
  },
  "internet_firewall_shard": {
    "id": "internet_firewall_shard",
    "name": "Null-Space Stabilizer",
    "description": "The Null-Space Stabilizer is a shimmering shard of collapsed firewall, its surface etched with runes that flicker like digital constellations. Crafted from the remnants of a bygone internet era, this fragment allows you to briefly phase out of physical attacks and manipulate data flows, but overuse risks invoking glitches that ripple through your system. Wario’s warned us not to stare at it for too long, lest we face unforeseen consequences in the digital void.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Phased Out Attack",
      "Data Manipulation"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_transmission",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Phased Out Attack",
        "rules": "As a reaction, you can phase out of a single melee attack made against you. The attacker must make a successful DC 15 Dexterity saving throw or miss their attack roll entirely. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Data Manipulation",
        "rules": "You gain resistance to digital effects, including spells and abilities that target you with an Intelligence (Arcana) check. Additionally, as a bonus action, you may attempt to reroll one saving throw against such effects once per long rest."
      }
    ],
    "levelRequirementReason": "It requires a high level of digital literacy and experience to properly handle the unstable nature of the Null-Space Stabilizer.",
    "vendorReason": "The cyber_market specializes in rare and powerful digital artifacts, making it the go-to vendor for such an item.",
    "shippingDetail": "Ships via secure encrypted channels to ensure safe delivery of this delicate piece of technology.",
    "usage": {
      "activation": "Reaction (once per turn) and Bonus Action (once per long rest)",
      "duration": "1 minute or until the end of your next turn",
      "endsWhen": "The effect ends if you are no longer in a digital environment, or upon using all charges.",
      "charges": "Unlimited"
    },
    "priceReason": "The Null-Space Stabilizer is priced at 1000 XP due to its rare materials and the advanced digital technology required for its crafting.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:04:20.115282+00:00",
    "aiReviewedAt": "2026-07-25T01:04:20.115282+00:00",
    "aiReviewVersion": 1
  }
};
