// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_054 = {
  "animatopia_spirit_reading": {
    "id": "animatopia_spirit_reading",
    "name": "Echoes of the Ancestors",
    "description": "The Echoes of the Ancestors is a ceremonial bone flute crafted from an ancient, glowing fossilized tooth. Whispered to be imbued with the spirits of long-dead ancestors, it allows a skilled shaman to contact these spectral voices for cryptic guidance. The ancestral murmurs often involve references to forgotten rituals and strange symbols that shimmer in the dark like ancient secrets. Prepare yourself for visions of past battles and omens that may or may not guide you toward your fate.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Gain a cryptic prophecy (random effect)",
      "Advantage on the next Wisdom check"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant beetle courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cryptic Prophecy",
        "rules": "Activates as an action. The shaman receives a single, cryptic prophecy that grants either a beneficial or detrimental effect at DM's discretion. This prophecy is not guaranteed to be helpful and may involve references to hidden knowledge or forgotten rituals. It lasts until the end of your next long rest."
      },
      {
        "title": "Wisdom Check Advantage",
        "rules": "Activates on the shaman’s turn as a bonus action. Grants advantage on the next Wisdom check made by the shaman, which must be declared before rolling. This effect can only activate once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to properly channel and understand the ancestral spirits.",
    "vendorReason": "The Beast Bazaar is known for its exotic and ancient artifacts, including items that communicate with the spirit world.",
    "shippingDetail": "Delivered by a giant beetle courier, which may add to the mystique of receiving such an item.",
    "usage": {
      "activation": "Activates as an action or bonus action depending on effect used.",
      "duration": "Instantaneous for cryptic prophecy; advantage lasts until end of next turn.",
      "endsWhen": "Exhausted after a long rest, or if the shaman falls unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price considering its rarity and unique abilities to communicate with ancestral spirits.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:06:55.600925+00:00",
    "aiReviewedAt": "2026-07-23T21:06:55.600925+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_bone_amulet": {
    "id": "animatopia_bone_amulet",
    "name": "Guardian's Grunt",
    "description": "Guardian's Grunt, a formidable amulet crafted from the femur of a fallen Warhog in Animatopia, radiates an aura that subtly enhances your defenses against nature's most insidious threats. This amulet not only grants you a +1 bonus to AC but also provides a 20% chance to resist poison effects, a critical safeguard for those navigating the region's volatile ecosystems. Wario recommends it as essential gear for any adventurer seeking to survive Animatopia's perils.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦴",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increased Armor Class",
      "Resist Poison"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Armor Class",
        "rules": "This amulet grants a +1 bonus to your AC. This effect is passive and always active while you wear the amulet."
      },
      {
        "title": "Resist Poison",
        "rules": "Once per short or long rest, you can use an action to invoke this amulet's protective essence against poison effects. You have advantage on saving throws made to resist poison effects for 10 minutes after using this ability."
      }
    ],
    "levelRequirementReason": "The Guardian's Grunt is tailored for adventurers with a basic understanding of survival, requiring at least level 5 to effectively wield its protective magic.",
    "vendorReason": "The forest market specializes in items crafted from local fauna and flora, making it the ideal vendor for Guardian's Grunt.",
    "shippingDetail": "The giant snail courier delivers the amulet within a week, ensuring that your protective magic is fresh upon arrival.",
    "usage": {
      "activation": "Passive and action-based (once per rest).",
      "duration": "Active while worn; resist poison effect lasts for 10 minutes after use.",
      "endsWhen": "Restored by completing a short or long rest. Once per day, can be used to resist poison effects.",
      "charges": "Unlimited"
    },
    "priceReason": "The Guardian's Grunt is priced at 1000 XP due to the rarity of Warhog femurs and the advanced enchantment required for such protective magic.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:06:55.868461+00:00",
    "aiReviewedAt": "2026-07-23T21:06:55.868461+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_crimson_echo": {
    "id": "teyvat_item_crimson_echo",
    "name": "Crimson Echo Shard",
    "description": "This pulsating crimson shard hums with residual Pyro energy, echoing the roar of a long-forgotten dragon. Holding it too long might incite an uncontrollable craving for spicy food or even cause your body to ignite in a fiery display. Crafted by the alchemical fires of Mondstadt, this shard is said to channel the very essence of flames, making it a must-have for those who dare to taste its power.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Pyro Boost",
      "Fire Resistance"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_goat",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pyro Boost",
        "rules": "When consumed, this shard grants you temporary hit points equal to twice your level (maximum of 40). This effect lasts for 1 minute. You can only benefit from this effect once per short or long rest."
      },
      {
        "title": "Fire Resistance",
        "rules": "For the duration of 1 hour after consuming this shard, you have advantage on saving throws against fire damage and resistance to fire damage. This effect does not stack with other sources of fire resistance."
      }
    ],
    "levelRequirementReason": "This item is crafted for beginners who wish to experiment with Pyro abilities without the risk of overpowered effects.",
    "vendorReason": "Mondstadt Market offers a wide variety of alchemical items, and this shard is one of their most popular offerings due to its accessibility and versatility.",
    "shippingDetail": "Ships via Winged Goat Courier; delivery within 3 days in normal conditions.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "1 minute for Pyro Boost, 1 hour for Fire Resistance.",
      "endsWhen": "The effects expire after the stated duration or when you take damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the item's balanced design and its role in introducing players to Pyro magic without being overly powerful.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-23T21:07:11.500889+00:00",
    "aiReviewedAt": "2026-07-23T21:07:11.500889+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_jade_resonance": {
    "id": "teyvat_item_jade_resonance",
    "name": "Jade Resonance Charm",
    "description": "The Jade Resonance Charm is a finely crafted Liyue artifact imbued with Geo energy. Its core, a glowing green crystal, subtly amplifies the wearer's Geo affinity, enhancing both their Geo damage by 10% and their armor by +5. The charm also grants a chance to stagger enemies on successful melee attacks, making it a valuable tool for any Geo mage or fighter. Beware, as prolonged use may instill an irresistible urge to haggle, even in the middle of combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "geo_damage_inCREASE",
      "armor_boost"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "merchant_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Geo Damage Amplification",
        "rules": "Increases Geo damage by 10% for the wearer. This effect is passive and does not require activation."
      },
      {
        "title": "Armor Boost",
        "rules": "Provides +5 to AC while worn, a bonus that stacks with other armor bonuses but cannot exceed the wearer's natural maximum AC."
      }
    ],
    "levelRequirementReason": "The charm provides a basic enhancement suitable for beginners and seasoned adventurers alike.",
    "vendorReason": "Liyue Harbor is known for its artisans who specialize in crafting magical trinkets that enhance Geo energy, making it the perfect vendor for this item.",
    "shippingDetail": "Ships via the Liyue Trade Route, delivered by experienced merchant ships within a week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous and continuous while worn.",
      "endsWhen": "Exhausts on death or removal from the wearer.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The charm offers a balanced enhancement that is both practical and affordable, suitable for players of all levels.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T21:06:40.815375+00:00",
    "aiReviewedAt": "2026-07-23T21:06:40.815375+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_phantom_scroll": {
    "id": "teyvat_item_phantom_scroll",
    "name": "Phantom Scroll of Windsong",
    "description": "The Phantom Scroll of Windsong is a delicate, ancient parchment encased in a fragile bamboo sheath. Whispered to be a relic from Inazuma's forgotten past, it occasionally grants fleeting glimpses into the city's lost history. With each unfurling, there’s a chance you might experience an illusory breeze that enhances your speed by 5%, but beware—this scroll can also induce a curious desire to chase after floating leaves and flowers, making you prone to whimsical flights of fancy.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎐",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "illusory_breeze",
      "chase_after_leaves"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "sea_serpent courier fleet",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illusory Breeze",
        "rules": "When activated as a bonus action, the scroll creates an illusory breeze that enhances your movement speed by 5% for 1 minute. This effect can only occur once per short or long rest."
      },
      {
        "title": "Chase After Leaves",
        "rules": "There is a 20% chance each time you use the scroll that you will feel an irresistible urge to chase after floating leaves and flowers, which lasts for 1 minute. You are incapacitated while in this state but can end it as a bonus action."
      }
    ],
    "levelRequirementReason": "The scroll's cryptic nature and illusory effects require a level 5 character to handle its mysteries.",
    "vendorReason": "Inazuma Imports specializes in artifacts from the region, including this enigmatic relic.",
    "shippingDetail": "The scroll is delivered via a sea serpent courier fleet, ensuring it arrives within days of purchase.",
    "usage": {
      "activation": "Bonus action to activate for illusory breeze or chase after leaves effect.",
      "duration": "1 minute per use.",
      "endsWhen": "The effect ends when its duration expires or you end it as a bonus action (chase after leaves).",
      "charges": "Unlimited uses."
    },
    "priceReason": "The scroll's unique effects and ancient craftsmanship justify this price, making it a valuable addition to any adventurer's collection.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T21:07:12.614531+00:00",
    "aiReviewedAt": "2026-07-23T21:07:12.614531+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_shimmering_shard": {
    "id": "the_edge_shimmering_shard",
    "name": "Shimmering Shard of the Void",
    "description": "The Shimmering Shard of the Void pulses with an eerie, otherworldly light, its surface a maelstrom of shifting shadows and fractured stars. When held, it grants temporary resistance to fear effects, allowing one's mind to remain steady in the face of terror. The shard also whispers secrets from the past, though the listener must discern truth from the void’s lies. These unsettling revelations come at a cost, leaving the wielder with a lingering sense of dread.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_resistance_fear_3",
      "whisper_of_the_void"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "void_packet",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Grant Resistance to Fear (3)",
        "rules": "When an enemy targets you with a fear effect, you gain temporary resistance for the duration of one short rest. This effect does not stack."
      },
      {
        "title": "Whisper of the Void",
        "rules": "Once per day, you can focus on the shard to reveal unsettling truths about your past. These revelations are likely lies, but they provide insight into your recent memories. You must make a Wisdom saving throw (DC 12) or become confused for 1 minute."
      }
    ],
    "levelRequirementReason": "The Shimmering Shard's power is too great for those without a deeper understanding of the mind and spirit.",
    "vendorReason": "The abyss trader, with their network reaching into the depths of space and time, can procure such rare and ancient artifacts from the void.",
    "shippingDetail": "Ships via a void packet, ensuring safe delivery through the interdimensional currents.",
    "usage": {
      "activation": "As an action or reaction to resist a fear effect.",
      "duration": "Until the end of your next turn (action) or until you take a short rest (reaction).",
      "endsWhen": "The resistance ends when you are no longer affected by a fear effect, or if you use it again.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the shard's effects provide significant utility while remaining within the realm of reasonable power for its rarity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:07:29.662533+00:00",
    "aiReviewedAt": "2026-07-23T21:07:29.662533+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronal_bracelet": {
    "id": "the_edge_chronal_bracelet",
    "name": "Chronal Bracelet of Temporal Distortion",
    "description": "The Chronal Bracelet of Temporal Distortion is a twisted bracelet made from solidified temporal echoes. When worn, it grants the wearer the ability to briefly rewind minor actions, altering the flow of time around them. Warnings are inscribed on its surface: 'Messing with time is bad for your stomach!' Each use comes with risks, as the wearer's reflexes increase, but they must endure the chance that their next action will be slowed by an unpredictable temporal ripple.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "rewind_action",
      "increase_reflexes"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "dimensional_scroll",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Rewind Action",
        "rules": "As a reaction, the wearer can attempt to rewind time for their last action. The effect lasts until the start of their next turn or until they take another action, whichever comes first. This use expends one charge. If used in combat, there is a 10% chance that the next action taken by the wearer will be slowed by a temporal ripple."
      },
      {
        "title": "Increase Reflexes",
        "rules": "The wearer's Dexterity (Acrobatics) checks and saving throws are made with advantage until their next short or long rest. This effect lasts for 1 hour after activation, but the bracelet can only be used once per day."
      }
    ],
    "levelRequirementReason": "Only those skilled in temporal manipulation and time magic can safely wield such a volatile artifact.",
    "vendorReason": "Edge Outpost deals exclusively in exotic and dangerous artifacts, making the Chronal Bracelet of Temporal Distortion a suitable addition to their inventory.",
    "shippingDetail": "Delivered via dimensional scroll, ensuring that the bracelet arrives intact but requiring the recipient to wait for the scroll's arrival from another plane.",
    "usage": {
      "activation": "Reaction (as a reaction)",
      "duration": "Until start of next turn or until another action is taken",
      "endsWhen": "Starts of their next short or long rest, or upon using it again in the same day",
      "charges": "5 charges; recharged after 7 days"
    },
    "priceReason": "The bracelet's rarity and the risk involved in its use justify its relatively low price compared to other legendary items.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:07:16.204954+00:00",
    "aiReviewedAt": "2026-07-23T21:07:16.204954+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_blood_of_the_abyss": {
    "id": "the_edge_blood_of_the_abyss",
    "name": "Blood of the Abyss (Forbidden)",
    "description": "The vial contains a viscous, iridescent fluid that shimmers with the colors of forgotten abysses. Consuming it grants immense strength and resistance to damage but also sows a dark craving for souls, as if your very essence is drawn into the void itself. The Blood of the Abyss is forbidden knowledge, crafted by ancient beings from the depths of the abyss, making even the most cautious wary of its effects.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🩸",
    "stock": 2,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "strength_boost_3",
      "damage_increase_5"
    ],
    "vendor": "final_shop",
    "shippedBy": "dark_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When consumed, this vial grants a +3 bonus to Strength (or Constitution) saving throws and checks for one hour. It can be used once per long rest."
      },
      {
        "title": "Damage Increase",
        "rules": "The user gains advantage on damage rolls against creatures of the undead or fiend type. This effect lasts 10 minutes, after which they must succeed on a DC 15 Constitution saving throw or become poisoned for 24 hours."
      }
    ],
    "levelRequirementReason": "The Blood of the Abyss is potent and dangerous, requiring at least fifth-level characters to handle its effects without peril.",
    "vendorReason": "Final Shop deals in forbidden knowledge and dark artifacts, making it a fitting vendor for such an item.",
    "shippingDetail": "Ships under cover of night, delivered by the Dark Messenger, ensuring secrecy and safety.",
    "usage": {
      "activation": "Eaten as a potion or ingested in one dose.",
      "duration": "The effects last for their specified durations.",
      "endsWhen": "The duration ends, or the user fails the Constitution saving throw if poisoned.",
      "charges": "Unlimited, but limited to once per long rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects both its power and the risk it poses to those who consume it.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-23T21:08:19.117118+00:00",
    "aiReviewedAt": "2026-07-23T21:08:19.117118+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_blueprint_service": {
    "id": "connectopia_blueprint_service",
    "name": "Schematic Scrying Session",
    "description": "Seeking insight into your intricate contraption? The Schematic Scrying Session grants you a meeting with a master schematist who meticulously examines your design, revealing hidden flaws and offering advice to simplify or enhance its construction – though they might just add an extra gear or two for good measure. This service not only boosts your crafting speed by 30%, but also increases the chance of receiving a free blueprint upgrade from the master’s vast library.",
    "category": "services",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Crafting Speed Boost",
      "Blueprint Upgrade Chance"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crafting Speed Boost",
        "rules": "Upon activation, you gain a +30 bonus to your crafting checks for 1 hour. This effect ends when the duration expires or if you spend more than 8 hours in a single day crafting."
      },
      {
        "title": "Blueprint Upgrade Chance",
        "rules": "Once per session, there is a 25% chance that the master schematist will provide you with an upgraded blueprint. This upgrade can improve your design’s complexity or efficiency by one tier, subject to the DM’s approval."
      }
    ],
    "levelRequirementReason": "Beginners often require expert guidance; this service is tailored for those who are just starting their crafting journey.",
    "vendorReason": "Pioneer Post specializes in services that aid adventurers in their endeavors, from maps to blueprints and beyond.",
    "shippingDetail": "The Courier Pigeon delivers with unmatched speed, ensuring your schematics are analyzed swiftly.",
    "usage": {
      "activation": "As an action at the beginning of each crafting session",
      "duration": "1 hour per activation",
      "endsWhen": "Duration expires or you spend more than 8 hours in a single day crafting",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1,000 XP, this service offers significant benefits for a reasonable price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:07:51.356272+00:00",
    "aiReviewedAt": "2026-07-23T21:07:51.356272+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_temporal_shard": {
    "id": "connectopia_temporal_shard",
    "name": "Echo of the Fractured Block",
    "description": "The Echo of the Fractured Block hums with fractured temporal energy, its surface etched with the remnants of alternate realities where Wario's victories were inevitable. When held, it momentarily distorts space and time, allowing glimpses into parallel worlds—though these visions are fleeting, leaving you disoriented for a moment if you linger too long. This shard is crafted from ancient fragments of reality itself, making it both delicate and potent.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Distortion",
      "Alternate Reality Glimpse"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Dimensional Portal Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, the wielder can create a localized distortion of time around them. This effect lasts for 1 minute and imposes disadvantage on all attack rolls and saving throws within a 5-foot radius until the start of their next turn."
      },
      {
        "title": "Alternate Reality Glimpse",
        "rules": "When activated as an action, the wielder can briefly glimpse into another possible reality. For the duration of one round, they gain advantage on Intelligence checks and saving throws. This effect has a 50% chance to create a minor temporal ripple that lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "The Echo requires even the most novice adventurers to handle its unstable energy.",
    "vendorReason": "Craft Corner specializes in rare and exotic items, making it the ideal vendor for this unique artifact.",
    "shippingDetail": "The Echo is shipped via a specialized dimensional portal that ensures safe arrival through alternate realities.",
    "usage": {
      "activation": "Bonus action to create temporal distortion; action to perform an alternate reality glimpse.",
      "duration": "1 minute for each effect.",
      "endsWhen": "The duration ends at the start of your next turn after activation or when destroyed by a successful DC 15 Strength (Athletics) check against a resisting creature's AC.",
      "charges": "Unlimited, but only one effect can be active at any time."
    },
    "priceReason": "The Echo is priced moderately due to its rarity and the specialized crafting required for such an artifact.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:08:23.720382+00:00",
    "aiReviewedAt": "2026-07-23T21:08:23.720382+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_whispers_of_discord": {
    "id": "midlands_item_whispers_of_discord",
    "name": "Fragment of a Lost Decree",
    "description": "A small obsidian shard, the Fragment of a Lost Decree, radiates an eerie glow as it hums with forgotten secrets. When held, unsettling visions and whispers of conspiracies flood your mind, revealing hidden enemies within earshot but also clouding your senses in confusion. This relic is said to have been crafted from the final words of a disgraced Imperial advisor, now a tool for spies and tacticians who seek to unravel the mysteries of their foes.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤫",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Hidden Enemy Detection",
      "Confusion"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "messenger_hawk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hidden Enemy Detection",
        "rules": "When you hold the shard as an action, it grants you advantage on Perception checks to detect hidden enemies within 30 feet. This effect lasts for 1 minute and ends if you are incapacitated or cease holding the shard."
      },
      {
        "title": "Confusion",
        "rules": "Once per short rest, you can activate this shard as a bonus action to cause confusion among creatures within 5 feet of you. Each creature must succeed on a Wisdom saving throw (DC 13) or be stunned until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The relic’s power is subtle but potent, requiring only basic training to wield.",
    "vendorReason": "As a reputable source for ancient artifacts and relics, Empire Exchange regularly acquires items like the Fragment of a Lost Decree.",
    "shippingDetail": "The shard is carefully packed in protective obsidian sheathing to prevent breakage during transit.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "1 minute (Hidden Enemy Detection) / Instantaneous (Confusion)",
      "endsWhen": "Incapacitation or ceasing to hold the shard (Hidden Enemy Detection); on a successful save (Confusion)",
      "charges": "Unlimited"
    },
    "priceReason": "The relic’s unique utility, combined with its limited daily stock and historical significance, justifies this price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:07:44.109721+00:00",
    "aiReviewedAt": "2026-07-23T21:07:44.109721+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_shadowfang_blade": {
    "id": "midlands_item_shadowfang_blade",
    "name": "Blade of the Broken King",
    "description": "The Blade of the Broken King is a cursed weapon forged in the depths of an ancient fortress. Its blade glows with an unnatural darkness, pulsing with malevolent energy that seems to whisper secrets of betrayal and deceit. It whispers dark promises to its wielder, tempting them with power at the cost of their soul. Rumored to have been wielded by a treacherous king, this sword will betray even the most loyal heart if not handled with extreme caution.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "deals_slashing_damage_1d10",
      "has_a_chance_to_poison_target"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "dark_raven",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Dealing Slashing Damage",
        "rules": "When you attack a creature with the Blade of the Broken King, it deals 1d10 slashing damage. This effect occurs on a successful hit."
      },
      {
        "title": "Chance to Poison Target",
        "rules": "There is a 25% chance that when you deal damage to a target, they are also poisoned until the start of your next turn. A creature can remove this poison with a successful DC 14 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The blade's malevolent nature demands a high level of control and discipline to wield without succumbing to its influence.",
    "vendorReason": "Forged in the same forgotten fortress as this cursed weapon, Fractured Forge is known for their unique and often dangerous items.",
    "shippingDetail": "The blade must be shipped via Dark Raven Express, which ensures that no light touches the item during transit to prevent any accidental use or corruption.",
    "usage": {
      "activation": "On a successful hit with this weapon",
      "duration": "Instantaneous; ends on the start of your next turn for the poisoned target",
      "endsWhen": "The target successfully makes a Constitution saving throw against poison, or it is destroyed by a good-aligned creature",
      "charges": "Unlimited"
    },
    "priceReason": "This weapon's cursed nature and unique forging process make it highly sought after and expensive.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:07:59.547797+00:00",
    "aiReviewedAt": "2026-07-23T21:07:59.547797+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_howler_fang": {
    "id": "animatopia_howler_fang",
    "name": "Howler Fang Amulet",
    "description": "The Howler Fang Amulet, a pulsating fang harvested from the legendary Howler Beast, amplifies your primal screams and fills the air with an eerie howl that can strike fear into the hearts of lesser predators. It is said to be crafted by ancient shamans who sought to harness the beast's power for protection against encroaching danger. This amulet not only intimidates foes but also subtly heals you, though overuse risks attracting more formidable threats.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐺",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "intimidating_scream",
      "healing_benefit"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_puma",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Intimidating Scream",
        "rules": "As a bonus action, the wearer can unleash an intimidating howl that has a range of 30 feet. All creatures within this radius must succeed on a DC 14 Wisdom saving throw or be frightened for 1 minute. The effect ends if the wearer makes noise louder than a howl, such as a scream or shout."
      },
      {
        "title": "Healing Benefit",
        "rules": "At the start of each of your turns while you are wearing this amulet, you regain 1d4+2 hit points. However, if you use an action to speak a howl (as part of the Intimidating Scream), the healing effect is lost until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The amulet's power requires a deeper understanding of primal magic, which is why only level 6 characters can wield it effectively.",
    "vendorReason": "The Tribal Trader has extensive connections with ancient tribes that have the knowledge to craft and trade such powerful relics.",
    "shippingDetail": "Delivered swiftly by a winged puma, this amulet arrives in pristine condition, ready for your protection.",
    "usage": {
      "activation": "Bonus action (for Intimidating Scream); Passive effect (Healing Benefit)",
      "duration": "Until the end of your next turn after using the Intimidating Scream",
      "endsWhen": "If you use an action to speak a howl, or if the wearer makes noise louder than a howl",
      "charges": "Unlimited"
    },
    "priceReason": "This amulet is crafted from rare materials and requires significant magical energy, making it moderately priced but still exclusive.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:08:38.671320+00:00",
    "aiReviewedAt": "2026-07-23T21:08:38.671320+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_forbidden_spirit_stone": {
    "id": "animatopia_forbidden_spirit_stone",
    "name": "Stone of Whispering Spirits",
    "description": "The Stone of Whispering Spirits is a dark, pulsating gemstone etched with the visages of tormented spirits. When held, it grants fleeting visions into future events but at the cost of one's sanity. The stone’s power can be felt in its weighty grip and the cold shivers it sends down your spine. Use this item with caution; those who have dared to touch it speak only of madness and endless echoes.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👻",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "fleeting_visions",
      "sanity_drain"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Fleeting Visions",
        "rules": "The user gains a brief vision into the future, revealing one key event. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Sanity Drain",
        "rules": "Each use has a chance to deal 1d4 points of Wisdom damage if the user fails a DC 15 Constitution saving throw. The item regains its full uses after 7 days."
      }
    ],
    "levelRequirementReason": "The stone's power is too great for those who are not adept in foresight and control.",
    "vendorReason": "As a merchant of the bizarre, Beast Bazaar naturally sells items that dabble in the forbidden arts like this stone.",
    "shippingDetail": "The giant beetle delivers the item with caution, ensuring it arrives safely but not before a week’s delay to let the user acclimate.",
    "usage": {
      "activation": "A bonus action is required to activate the stone and receive the visions.",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the time expires or the user fails their saving throw.",
      "charges": "One use per day"
    },
    "priceReason": "The item's rarity, limited availability, and its potential for both utility and danger justify this price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:08:12.417892+00:00",
    "aiReviewedAt": "2026-07-23T21:08:12.417892+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_echoing_totem": {
    "id": "animatopia_echoing_totem",
    "name": "Echoing Totem of the Ancients",
    "description": "The Echoing Totem of the Ancients is a petrified wooden totem imbued with the whispers of Animatopia’s ancient rituals. Its surface crackles faintly with residual energy, and it smells peculiarly of ripe berries mixed with decayed fruit. When held, its vibrations can mimic sounds, lulling foes into confusion or triggering traps inadvertently. A relic of forgotten magic, this totem is said to have been crafted by the ancients themselves in their mysterious rites.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗣️",
    "stock": 73,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Mimic Sound",
      "Trigger Traps"
    ],
    "vendor": "forest_market",
    "shippedBy": "Swift Squirrel Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mimic Sound",
        "rules": "As a bonus action, you can mimic any sound within range. This may confuse creatures nearby or trigger traps. The DC to save against the confusion is equal to 8 + your Charisma modifier."
      },
      {
        "title": "Trigger Traps",
        "rules": "While mimicking a sound, there is a 20% chance that any trap within 30 feet of you will be triggered. This effect lasts until the mimicry ends or you stop holding the totem."
      }
    ],
    "levelRequirementReason": "The totem’s power lies in its ancient magic, which requires no specific level to wield.",
    "vendorReason": "The forest market is known for selling relics and curiosities from Animatopia, including this totem.",
    "shippingDetail": "Delivered by the giant squirrel couriers within a day of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The mimicry ends or you stop holding the totem.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "Its rarity and unique magical properties justify its price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:08:27.298479+00:00",
    "aiReviewedAt": "2026-07-23T21:08:27.298479+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_sparkling_charm": {
    "id": "pokemon_sparkling_charm",
    "name": "Sparkling Charm of the Starter Pokémon",
    "description": "The Sparkling Charm of the Starter Pokémon, a shimmering talisman woven from the essence of an evolved starter Pokémon, glimmers with a soft, electric light. Its surface is etched with the patterns of a Pikachu's tail and emits a faint aroma reminiscent of fresh berries. This charm grants you a surge of speed and combat prowess, but beware: it can only be used once per week to avoid overexerting your starter Pokémon's evolved form.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "speed_boost",
      "starter_evolution_chance"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pokémail Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "When you activate the charm, you gain a +2 bonus to Dexterity (Acrobatics) checks and advantage on initiative rolls until the start of your next turn. This effect lasts for only one round."
      },
      {
        "title": "Starter Evolution Chance",
        "rules": "There is a 10% chance that each time you use this charm, your Pokémon will transform into its evolved form. If successful, it remains in that state until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This charm requires at least level 6 to activate due to the energy needed to harness an evolved starter Pokémon's essence.",
    "vendorReason": "Pokemarts are well-stocked with items that enhance Pokémon training, making this charm a staple in their offerings.",
    "shippingDetail": "The Sparkling Charm is shipped via Pokémail Express, ensuring it arrives in pristine condition and ready for immediate use.",
    "usage": {
      "activation": "Reaction",
      "duration": "One round",
      "endsWhen": "The effect ends at the start of your next turn or if you are incapacitated.",
      "charges": "Uses once per week"
    },
    "priceReason": "This charm is priced at 1000 XP, reflecting its rarity and the magical essence it contains.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:08:49.280519+00:00",
    "aiReviewedAt": "2026-07-23T21:08:49.280519+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_trainer_badge_of_valor": {
    "id": "pokemon_trainer_badge_of_valor",
    "name": "Badge of Valor - The Steel Wing",
    "description": "The Badge of Valor - The Steel Wing is a gleaming metal disc, its surface etched with the silhouette of a majestic Steel-type Pokémon. Crafted by a legendary trainer in the heart of the Sinnoh region, this badge resonates with unyielding strength and unwavering determination. Wearers report an increase in their courage, but also find themselves inexplicably drawn to shiny objects – a quirk that has become a source of both amusement and frustration among fellow adventurers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏆",
    "stock": 15,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "attack_boost",
      "defense_boost"
    ],
    "vendor": "league_store",
    "shippedBy": "Pokémon Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Steel Resilience",
        "rules": "The wearer gains a +2 bonus to AC as long as they are not wearing heavy armor. This effect lasts until the end of their next turn."
      },
      {
        "title": "Ironclad Resolve",
        "rules": "Once per short rest, the wearer can use an action to grant themselves advantage on one attack roll or saving throw. The badge must be worn for at least 24 hours before this ability can be used again."
      }
    ],
    "levelRequirementReason": "This badge requires a minimum of 10 levels to wield effectively, ensuring that only seasoned adventurers can fully benefit from its power.",
    "vendorReason": "The league store exclusively sells items crafted by legendary trainers and used in top-tier competitions, making it the perfect place for such an artifact.",
    "shippingDetail": "Ships within one week of order placement. Requires a signature from the badge's intended recipient.",
    "usage": {
      "activation": "Passive effect (worn as equipment)",
      "duration": "Until the end of the wearer’s next turn, or until removed by an action",
      "endsWhen": "The wearer removes it, or at the start of their next turn after a short rest",
      "charges": "Unlimited"
    },
    "priceReason": "This badge's rarity and the legendary crafting involved justify its moderate price in experience points.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:08:56.229557+00:00",
    "aiReviewedAt": "2026-07-23T21:08:56.229557+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_ancient_rune_of_mirage": {
    "id": "pokemon_ancient_rune_of_mirage",
    "name": "Ancient Rune of Mirage – The Shadow Dance",
    "description": "The Ancient Rune of Mirage – The Shadow Dance is etched with the forgotten symbols of an ancient Pokémon temple. This rune can blur the lines between reality and illusion, granting its wielder a chance to confuse foes with phantom attacks. Its whispering surface reflects light in ways that deceive both sight and mind. Legends say it was used to protect sacred sites, but only those who truly understand its secrets can harness its power without losing their way.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Phantom Mirage",
      "Evasive Shadows"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Legendary Delivery Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Phantom Mirage",
        "rules": "As a bonus action, you can activate the rune to create an illusory duplicate of yourself within your line of sight. This duplicate is indistinguishable from the real you for up to one minute or until you use this ability again. Creatures that fail their Wisdom saving throw (DC 14) are blinded until the start of your next turn."
      },
      {
        "title": "Evasive Shadows",
        "rules": "While the rune is active, you have advantage on Dexterity saving throws and can make a Dexterity (Stealth) check once per short rest. If you succeed, you gain temporary hit points equal to twice your level + your Dexterity modifier."
      }
    ],
    "levelRequirementReason": "Only those with significant experience in combat and magic are likely to wield the rune safely.",
    "vendorReason": "The Safari Shop is known for its unique and ancient curiosities, often recovered from lost sites like the one this rune came from.",
    "shippingDetail": "The rune requires special handling due to its delicate nature; expect a two-week delivery time.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute, or until you activate it again",
      "endsWhen": "You use this ability again or the duration ends normally",
      "charges": "Unlimited (recharges after a long rest)"
    },
    "priceReason": "The rune's price reflects its rarity and the skill needed to properly wield it without causing harm.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T21:08:42.692251+00:00",
    "aiReviewedAt": "2026-07-23T21:08:42.692251+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chromatic_halo": {
    "id": "kivotos_item_chromatic_halo",
    "name": "Chromatic Halo of Scholarly Focus",
    "description": "The Chromatic Halo of Scholarly Focus is a shimmering crown that glows with all colors, forged from the mischievous experiments of an alchemist. This regalia grants +5 to spellcasting and intellect checks but also has a 10% chance to confuse enemies when you hit them with a spell or ability. It’s perfect for late-night study sessions or practical jokes, though it might not be welcome in the Academy’s Honor Council!",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Spellcasting Boost",
      "Intellect Enhancement"
    ],
    "vendor": "academy_armory",
    "shippedBy": "air_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spellcasting Boost",
        "rules": "The wearer gains +5 to spell attack rolls and saving throws. This effect lasts for 1 hour or until the wearer uses an action, bonus action, or reaction to cast a spell."
      },
      {
        "title": "Confusion on Hit",
        "rules": "Once per short rest, when the wearer successfully hits an enemy with a spell or ability, there is a 10% chance that the target is confused for 1 round. The save DC for this effect is 14."
      }
    ],
    "levelRequirementReason": "This item is designed to assist beginners and scholars who need an extra boost without stringent prerequisites.",
    "vendorReason": "The Academy Armory stocks this item as a standard tool for all students, aiding in their studies and practical applications of magic.",
    "shippingDetail": "The halo is shipped via air mail, ensuring it arrives swiftly to eager scholars.",
    "usage": {
      "activation": "Instantaneous (as a spell)",
      "duration": "1 hour or until used in combat",
      "endsWhen": "Ends when the wearer uses an action, bonus action, or reaction to cast a spell, or after 1 hour",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare material and unique enchantments that provide significant yet balanced benefits.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:08:56.005541+00:00",
    "aiReviewedAt": "2026-07-23T21:08:56.005541+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_scroll": {
    "id": "kivotos_item_student_scroll",
    "name": "Forgotten Lecture Scroll",
    "description": "The Forgotten Lecture Scroll is a crinkled, slightly mildewed parchment that bears the scrawled notes of a particularly absent-minded professor. Its ink has faded to nearly illegible smudges, yet it still contains ancient diagrams and spells—mostly about organizing one’s desk with mystical precision. Rumor has it that those who read it can gain a fleeting boost in their wisdom or dexterity, but only if the scroll isn’t promptly whisked away by the classroom’s ever-present dust bunnies, which seem to guard it jealously.",
    "category": "consumables",
    "price": 1000,
    "icon": "📜",
    "stock": 85,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores 10 Hit Points",
      "Temporary Stat Boost"
    ],
    "vendor": "student_store",
    "shippedBy": "courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restores 10 Hit Points",
        "rules": "When read aloud in a classroom setting, the scroll restores 10 Hit Points to the reader. This effect can only be used once per long rest."
      },
      {
        "title": "Temporary Stat Boost",
        "rules": "The scroll grants a temporary bonus of +2 to either Wisdom or Dexterity for 1 hour after reading. The user must make this choice before using the scroll, and it cannot be changed. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginning students who might benefit from a gentle boost in focus or wisdom.",
    "vendorReason": "The Student Store caters to the whimsical and magical needs of young scholars, offering them scrolls and other educational tools.",
    "shippingDetail": "Delivered by the school’s own courier service within one week.",
    "usage": {
      "activation": "Read aloud in a classroom setting.",
      "duration": "Instantaneous for Hit Point restoration; 1 hour for stat boost.",
      "endsWhen": "At the end of each long rest, or if the scroll is damaged beyond repair.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The price reflects its unique historical and magical value, along with the risk of it being claimed by dust bunnies.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:09:15.178083+00:00",
    "aiReviewedAt": "2026-07-23T21:09:15.178083+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_disruptor_pin": {
    "id": "kivotos_item_chrono_disruptor_pin",
    "name": "Chrono Disruptor Pin – Prototype Model",
    "description": "The Chrono Disruptor Pin – Prototype Model hums with unstable temporal energy, its surface a mottled mix of corroded and gleaming metal. Crafted by a rogue student, this tiny device can warp time around you or nearby foes. When activated, it either slows an enemy’s movements to a crawl for 3 seconds or boosts your speed by 20% for the same duration. A dangerous toy that could easily backfire on its wielder.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Slow",
      "Speed Boost"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "When activated as a bonus action, this pin targets one creature within 30 feet and causes it to move at half speed for 3 seconds. The target can make a DC 15 Dexterity saving throw to negate the effect."
      },
      {
        "title": "Speed Boost",
        "rules": "Activating the pin as an action increases your movement speed by 20% for 3 seconds, allowing you to cover more ground swiftly. This effect does not stack with itself or other speed bonuses."
      }
    ],
    "levelRequirementReason": "Beginners can experiment with the Chrono Disruptor Pin’s unstable temporal effects without requiring a high level of expertise.",
    "vendorReason": "Club Supply caters to adventurers seeking unique and experimental items for their quests.",
    "shippingDetail": "Delivered with express courier, ensuring the Chrono Disruptor Pin arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action or action (choose one)",
      "duration": "3 seconds per activation",
      "endsWhen": "Effect ends when the duration expires or you are incapacitated",
      "charges": "Unlimited uses"
    },
    "priceReason": "This prototype model is priced at 1000 XP, reflecting its experimental nature and limited availability.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-23T21:09:32.825578+00:00",
    "aiReviewedAt": "2026-07-23T21:09:32.825578+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidshard_echo": {
    "id": "the_edge_voidshard_echo",
    "name": "Echoes of the Voidshards",
    "description": "The Echoes of the Voidshards shimmer faintly in your palm, their surface etched with the arcane whispers of forgotten realities. These fragments grant you a fleeting resilience against the creeping madness that plagues the minds of the lost, and they hum with an eerie intelligence that seems to anticipate the movements of your enemies before they do themselves. Holding them is as much a test of your resolve as it is a boon to your perception, offering a brief window where you can predict and counteract your foes' strategies.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Madness Resistance",
      "Perception Boost"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Madness Resistance",
        "rules": "When you are exposed to a fear effect, there is a 10% chance that the effect fails. This effect lasts for three rounds and can only occur once per short or long rest."
      },
      {
        "title": "Perception Boost",
        "rules": "For two rounds after activation, your Perception skill bonuses are increased by 5, enhancing your ability to discern threats and opportunities in battle. This effect is limited to a single use per day."
      }
    ],
    "levelRequirementReason": "The Echoes of the Voidshards require a level 8 character due to their arcane complexity and the mental fortitude needed to wield them.",
    "vendorReason": "The Abyss Trader, renowned for trading in ancient and otherworldly relics, carries these enigmatic shards as they are said to have originated from the void itself.",
    "shippingDetail": "These Echoes may only be shipped via the Dimensional Rift due to their volatile nature, ensuring safe delivery through a portal that weaves between dimensions.",
    "usage": {
      "activation": "Action",
      "duration": "3 rounds for Madness Resistance; 2 rounds for Perception Boost",
      "endsWhen": "The effects end naturally after their duration or if the user takes any action other than resting, as these shards are sensitive to mental strain.",
      "charges": "Limited to one use per day"
    },
    "priceReason": "Given its limited daily stock and unique properties, the Echoes of the Voidshards provide a balanced challenge and reward for level 8 characters.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:10:09.426957+00:00",
    "aiReviewedAt": "2026-07-23T21:10:09.426957+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_chronosplitter_gauntlet": {
    "id": "the_edge_chronosplitter_gauntlet",
    "name": "Chronosplitter Gauntlet of Fractured Time",
    "description": "Forged from solidified temporal anomalies, the Chronosplitter Gauntlet of Fractured Time is a gauntlet that allows its wearer to manipulate time briefly. With each wear, you can increase your attack rolls by +3 for two rounds and have a 15% chance to rewind time by one round, creating a ripple in reality that can be felt by all nearby creatures. However, the gauntlet's power is not without risk; prolonged use might tear open temporal inconsistencies, leading to unpredictable consequences.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Boost",
      "Chronal Rewind"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 11,
    "effectDetails": [
      {
        "title": "Temporal Boost",
        "rules": "When activated as a bonus action, this gauntlet grants the wearer +3 to attack rolls for two rounds. The effect ends if the wearer takes damage or casts a spell."
      },
      {
        "title": "Chronal Rewind",
        "rules": "Once per short rest, the gauntlet allows its wearer to attempt a rewind of time by one round with a successful DC 17 Wisdom saving throw. On a failure, there is a 50% chance that a temporal ripple occurs, affecting all creatures within 30 feet for 1d4 rounds."
      }
    ],
    "levelRequirementReason": "The gauntlet requires a level of at least 11 to handle its power without disrupting the fabric of time.",
    "vendorReason": "Edge Outpost specializes in rare and powerful artifacts from the Temporal Realms, making it the ideal vendor for such an item.",
    "shippingDetail": "The Chronosplitter Gauntlet is shipped via a Temporal Courier, ensuring safe and swift delivery through the folds of time itself.",
    "usage": {
      "activation": "Activates as a bonus action or once per short rest for the chronal rewind effect.",
      "duration": "Temporal Boost lasts for two rounds; Chronal Rewind lasts until the end of your next turn if successful, otherwise ends immediately on failure.",
      "endsWhen": "The effects end if you take damage, cast a spell, fail to successfully save against a temporal ripple, or run out of uses for the day.",
      "charges": "1 use per short rest; unlimited between long rests."
    },
    "priceReason": "The gauntlet's price is set at 1000 XP to reflect its balance and rarity as a powerful but manageable tool for time manipulation.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:09:43.682891+00:00",
    "aiReviewedAt": "2026-07-23T21:09:43.682891+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_abyssal_heartstone": {
    "id": "the_edge_abyssal_heartstone",
    "name": "Abyssal Heartstone of Silent Hunger",
    "description": "The Abyssal Heartstone of Silent Hunger, a pulsating core harvested from the deepest abysses, glows with an eerie blue light and whispers of ancient hunger. It radiates a biting chill that seeps into the soul, compelling nearby creatures to succumb to despair. This relic is said to have been crafted by forgotten gods for their silent raids on the living, now available only through the final shop's dark dealings.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "Silent Hunger",
      "Cold Aura"
    ],
    "vendor": "final_shop",
    "shippedBy": "Void Serpent",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Silent Hunger",
        "rules": "When a creature within 10 feet of you fails a Charisma saving throw, it is reduced to 0 hit points and falls unconscious. This effect has a daily limit of once per target."
      },
      {
        "title": "Cold Aura",
        "rules": "All creatures within 10 feet of the Heartstone must make a DC 15 Constitution saving throw or take 2d6 cold damage at the start of their turn. The save DC increases by 1 for each creature that fails it on their turn."
      }
    ],
    "levelRequirementReason": "The Heartstone's raw power requires a high level to wield effectively without risk.",
    "vendorReason": "Only the final shop dares deal with such forbidden relics, ensuring they are in capable hands.",
    "shippingDetail": "The Void Serpent delivers the Heartstone through a shadowy portal, arriving at your doorstep within minutes of purchase.",
    "usage": {
      "activation": "Passive effect; does not require activation.",
      "duration": "Instantaneous and continuous until expended or destroyed.",
      "endsWhen": "The Heartstone is destroyed by fire or dispelled by a spell with the fire descriptor.",
      "charges": "Unlimited, but may be exhausted if exposed to extreme heat."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its power while ensuring it remains a challenging relic for adventurers of all levels.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T21:09:41.512119+00:00",
    "aiReviewedAt": "2026-07-23T21:09:41.512119+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_echoing_shard": {
    "id": "the_edge_echoing_shard",
    "name": "Echoing Shard of Oblivion",
    "description": "The Echoing Shard of Oblivion is a jagged, obsidian fragment that hums with a spectral resonance. It whispers of forgotten realities and lost dimensions, offering fleeting glimpses into realms beyond comprehension. A brief hold in your hand might reveal hidden pathways through the fabric of reality, or it could drive you mad from the sheer weight of its knowledge. Wario advises caution when wielding this shard; its power is as perilous as it is potent.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "Reveal Hidden Pathways",
      "Risk of Madness"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "When activated, the Shard grants advantage on a Perception check to reveal hidden pathways. This effect lasts until the start of your next turn and can be used once per short or long rest."
      },
      {
        "title": "Risk of Madness",
        "rules": "There is a 10% chance that holding the Shard for more than five seconds will cause madness. On a failed saving throw (DC 15), the wielder suffers from temporary insanity, which can be cured by spending one hour in seclusion."
      }
    ],
    "levelRequirementReason": "The Echoing Shard's power is accessible to adventurers of all levels, but its unpredictable nature demands careful handling.",
    "vendorReason": "The Abyss Trader deals in items from the deepest realms, and the Shard of Oblivion comes directly from a forgotten pocket dimension.",
    "shippingDetail": "Ships via interdimensional courier, delivery may vary due to unpredictable rift fluctuations.",
    "usage": {
      "activation": "Object interaction (requires holding)",
      "duration": "Instantaneous effect; lasts until the start of your next turn",
      "endsWhen": "The Shard is dropped or used in combat",
      "charges": "Unlimited, but only one use per short or long rest"
    },
    "priceReason": "The Echoing Shard's mythic rarity and unpredictable nature justify its price as a rare commodity among adventurers.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:10:15.875151+00:00",
    "aiReviewedAt": "2026-07-23T21:10:15.875151+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_rusting_blade": {
    "id": "the_edge_rusting_blade",
    "name": "Blade of the Endless Fall",
    "description": "The Blade of the Endless Fall is a meteoric blade that whispers tales of ancient battles and impending doom. Its cold, metallic surface hums with latent power, yet it carries an eerie weight that can sap your resolve. This weapon excels at cleaving through undead and demonic foes, delivering deathly blows that bleed their essence. The blade's whispering voice promises strength but also foretells a darker fate for those who wield it.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "+2 damage to undead and demons",
      "bleeding on critical hits"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "winged courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Bleeding Edge",
        "rules": "On a critical hit against undead or demonic creatures, the target must succeed on a DC 15 Constitution saving throw or take an additional 2d6 necrotic damage at the start of its next turn."
      },
      {
        "title": "Dreadful Promise",
        "rules": "When you attack with this weapon and hit, you have disadvantage on your next attack roll until the end of your next turn. This effect stacks, but only up to three times per short or long rest."
      }
    ],
    "levelRequirementReason": "The blade's ancient power demands a seasoned warrior capable of wielding its dark promises responsibly.",
    "vendorReason": "Edge Outpost caters to adventurers seeking relics and artifacts from far-flung worlds, including the Blade of the Endless Fall.",
    "shippingDetail": "The blade is carefully packed in a protective case to prevent damage during transit by winged courier.",
    "usage": {
      "activation": "On hit as part of the attack action",
      "duration": "Instantaneous, with stacking effects until end of next turn or three uses per rest",
      "endsWhen": "The blade's uses are exhausted after a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the weapon’s potent abilities and rarity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:09:55.600870+00:00",
    "aiReviewedAt": "2026-07-23T21:09:55.600870+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_void_lantern": {
    "id": "the_edge_void_lantern",
    "name": "Lantern of the Unseen Depths",
    "description": "The Lantern of the Unseen Depths is a cryptic lantern forged from the molten cores of ancient volcanoes and twisted by the spirits of the deep sea. Its glassy surface glistens with an eerie, phosphorescent glow that absorbs ambient light, casting a chilling aura around you. In absolute darkness, it reveals hidden passageways and sends nearby foes reeling in disorientation, making it indispensable for explorers venturing into the abyssal realms of Final Shop's underground treasure hunts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔦",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Absorbs Light",
      "Disorienting Aura"
    ],
    "vendor": "final_shop",
    "shippedBy": "delivery_only",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorbs Light",
        "rules": "The Lantern absorbs ambient light, making it invisible to all forms of detection within a 10-foot radius. This effect persists for 1 minute or until the lantern is extinguished."
      },
      {
        "title": "Disorienting Aura",
        "rules": "Creatures within 30 feet who start their turn there must make a DC 15 Wisdom saving throw, taking 2d6 psychic damage on failure. On success, they are immune to this effect for 1 hour."
      }
    ],
    "levelRequirementReason": "This lantern is designed for adventurers of all levels but especially useful in the challenging depths.",
    "vendorReason": "Final Shop specializes in unique and powerful items that cater to all types of explorers, from novices to seasoned veterans.",
    "shippingDetail": "Shipped by Final Shop's trusted couriers, this lantern arrives sealed with protective enchantments ensuring its integrity during transit.",
    "usage": {
      "activation": "Passive effect; activated upon first use and persists until extinguished.",
      "duration": "1 minute or until extinguished",
      "endsWhen": "Extinguishing the lantern ends both effects immediately.",
      "charges": "Unlimited uses, recharged by an hour of daylight exposure."
    },
    "priceReason": "This lantern's advanced enchantments and unique crafting materials justify its substantial price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:10:24.077929+00:00",
    "aiReviewedAt": "2026-07-23T21:10:24.077929+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_crimson_blade": {
    "id": "the_edge_crimson_blade",
    "name": "Crimson Blade of the Fallen King",
    "description": "Forged from the solidified blood of a forgotten monarch, the Crimson Blade of the Fallen King pulses with a chilling red light that seems to echo the king’s final moments. Its blade is etched with ancient runes that hum with each strike, and the faint smell of despair lingers around it like a silent lament. This weapon is no mere tool; it channels the very essence of its creator's tragic reign, dealing fire damage and causing enemies to bleed profusely upon critical hits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "damage_type_fire",
      "chance_to_bleed"
    ],
    "vendor": "final_shop",
    "shippedBy": "winged_shadow",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Fire Damage",
        "rules": "When you hit a target with the Crimson Blade of the Fallen King, it deals fire damage equal to 1d6 + your proficiency bonus. On a critical hit, this increases by an additional 2d6."
      },
      {
        "title": "Bleed Effect",
        "rules": "If you score a critical hit with the blade, the target bleeds for 1d4 points of damage at the start of their next turn. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This weapon requires a level 7 character to wield due to its intricate enchantments and the dark magic it commands.",
    "vendorReason": "Final Shop stocks rare and powerful items, including those that have fallen into disuse but still retain their potency.",
    "shippingDetail": "The blade is delivered by Winged Shadow, a courier known for its speed and reliability, ensuring the weapon arrives in pristine condition.",
    "usage": {
      "activation": "On hit with a melee attack",
      "duration": "Instantaneous",
      "endsWhen": "After one use per short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The blade's rare forging materials and the dark magic imbued within it justify its value in experience points.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-23T21:10:53.698885+00:00",
    "aiReviewedAt": "2026-07-23T21:10:53.698885+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_scorching_rune": {
    "id": "teyvat_item_scorching_rune",
    "name": "Dragon's Breath Pebble",
    "description": "This unassuming pebble glows faintly, its surface etched with draconic runes that pulse with a fiery hue. When tossed, it ignites into a blinding flash of flame, scorching anything within reach. The Dragon's Breath Pebble is as unpredictable as it is potent; one moment it's just a harmless trinket, the next it becomes an incendiary weapon capable of leveling small brushwood or turning marshmallows into crisps with alarming efficiency.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 68,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Fire Damage",
      "Potential Minor Explosion"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scorching Flame",
        "rules": "When thrown, the Dragon's Breath Pebble explodes in a burst of fire centered on the target. This deals 12 fire damage to one creature within 5 feet (10 feet at level 4 and higher). There is a 5% chance that this attack also inflicts the burning condition for 1 minute."
      },
      {
        "title": "Explosive Impact",
        "rules": "There's a 2% chance that the explosion will trigger a minor secondary blast, affecting creatures within an additional 5-foot radius. This secondary effect deals half damage (6 fire damage) and has no saving throw."
      }
    ],
    "levelRequirementReason": "The Dragon's Breath Pebble is crafted from dragon-scale fragments, requiring minimal magical expertise to wield.",
    "vendorReason": "Tyrant's Bazaar, the market of Mondstadt, often stocks rare and exotic items, including this fiery charm.",
    "shippingDetail": "Delivered within a week from Tyrant's Bazaar; additional delivery fees apply for expedited service.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Expended after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The Dragon's Breath Pebble combines the rare materials of a dragon and the craftsmanship needed to harness its fiery essence, justifying its high price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:10:37.837644+00:00",
    "aiReviewedAt": "2026-07-23T21:10:37.837644+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_jade_resonance_charm": {
    "id": "teyvat_item_jade_resonance_charm",
    "name": "Liyue's Echoing Stone",
    "description": "Forged in the heart of Liyue Harbor, this jade stone resonates with ancient maritime magic and the echoes of bygone trade routes. Craftsmen inscribed it with runes that amplify your trading prowess, granting you a subtle but unmistakable boost to negotiation skills. Wearers report a newfound confidence, as if the jade itself whispers secrets of past deals long forgotten. The charm's power is both tangible and mysterious, enhancing your fortune in exchanges by 5%, while also doubling the chance of receiving bonus items during trades.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Trade Boost",
      "Lucky Trading"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Trade Boost",
        "rules": "When you trade goods or services, increase the value of your deals by +2d4%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Lucky Trading",
        "rules": "Roll a d100. On a successful roll (1-10), you receive an additional rare item in your trade at no extra cost. The effect is limited to one per day."
      }
    ],
    "levelRequirementReason": "The charm's magic requires a deeper understanding of trading strategies and the market.",
    "vendorReason": "Liyue Harbor's artisans have long been masters of crafting items that enhance local trades.",
    "shippingDetail": "The Sea Serpent Express ensures swift delivery, but only during the calmest tides to avoid accidental damage to the jade stone's delicate runes.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Lasts until your next turn after each trade.",
      "endsWhen": "Expires at the start of your next turn after a successful trade or if you stop trading for an hour.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The charm's rarity and its unique blend of magic and craftsmanship justify this price, offering traders significant advantages in their daily dealings.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:10:58.573288+00:00",
    "aiReviewedAt": "2026-07-23T21:10:58.573288+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_whispering_skull": {
    "id": "faerun_item_whispering_skull",
    "name": "Whispering Skull of Lost Secrets",
    "description": "The Whispering Skull of Lost Secrets is a gnarled, bone-white skull with dark, glowing eyes that seem to peer into the soul. When held, it murmurs forgotten prophecies and tales of bygone eras, often centered around taxes and tavern mishaps. Its whispers are not mere echoes but can grant you scrolls detailing ancient wisdom or clues leading to hidden treasures. The skull's voice is persistent yet maddeningly elusive; it knows more than it reveals, leaving you craving for answers that remain just out of reach.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "ancient_tales",
      "scroll_of_clarity"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Ancient Tales",
        "rules": "As an action, the wielder can ask the skull a question about historical events or prophecies. The skull provides one relevant prophecy or tale that has not been revealed before, which can be used to influence future events with a +2 bonus on related checks or saves."
      },
      {
        "title": "Scroll of Clarity",
        "rules": "When held, the skull grants the wielder a +1 bonus to all Intelligence (History) and Wisdom (Insight) checks for 1 hour. The effect ends if the wielder uses it more than once per day."
      }
    ],
    "levelRequirementReason": "The skull's arcane knowledge requires a certain level of experience to properly channel its power.",
    "vendorReason": "As one of the most eclectic shops in Faerun, Baldur's Bazaar is known for its unique and powerful curiosities like this skull.",
    "shippingDetail": "Delivered swiftly by enchanted flying carpet, ensuring the skull reaches you intact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts for 1 hour when used daily",
      "endsWhen": "The effect ends if used more than once a day or if the wearer is incapacitated.",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique and powerful abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:10:41.072072+00:00",
    "aiReviewedAt": "2026-07-23T21:10:41.072072+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shadowfang_dagger": {
    "id": "faerun_item_shadowfang_dagger",
    "name": "Shadowfang Dagger - Forbidden Legacy",
    "description": "The Shadowfang Dagger - Forbidden Legacy, forged in the depths of a cult’s sunken temple, drips with dark energy and hunger. Its blade is crafted from shadow metal, a substance born from the forge fires of forgotten gods. The dagger can deal extra poison damage to foes and has a chance to instill fear into its target, leaving them paralyzed with dread. Use it at your peril; it whispers promises of power, but only death awaits those who dally too long.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔪",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "deals_extra_poison_damage",
      "has_chance_to_fear_target"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "black_raven",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Extra Poison Damage",
        "rules": "When the Shadowfang Dagger strikes, it deals an additional 1d6 poison damage to the target. This effect has a recharge after three successful uses."
      },
      {
        "title": "Fearful Instincts",
        "rules": "There is a 20% chance that each attack made with this dagger instills fear in the target, reducing their speed by half and causing them to be frightened for 1d4+1 rounds. The target can make a Wisdom saving throw (DC 13) at the start of its next turn to end the effect."
      }
    ],
    "levelRequirementReason": "Only those with experience in battling dark forces and poisons should wield this cursed weapon.",
    "vendorReason": "Waterdeep Market sells rare items from all corners of Faerûn, including the forbidden and dangerous artifacts like the Shadowfang Dagger.",
    "shippingDetail": "Ships via Black Raven Couriers; delivery can take up to a week due to the secretive nature of the item's origin.",
    "usage": {
      "activation": "Requires a melee attack action",
      "duration": "Instantaneous, recharges after three successful uses",
      "endsWhen": "Exhausted after three successful poison damage deals or if its target saves successfully against fear",
      "charges": "Recharges after three successful poison damage deals"
    },
    "priceReason": "The Shadowfang Dagger's price reflects its dangerous nature and the secrecy surrounding its source, making it a rare find even for seasoned adventurers.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:11:25.706479+00:00",
    "aiReviewedAt": "2026-07-23T21:11:25.706479+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_rune_of_stability": {
    "id": "earth_land_rune_of_stability",
    "name": "The Steadfast Stone",
    "description": "The Steadfast Stone, a polished grey stone etched with ancient runes, hums softly when held. Its weight feels reassuring in times of turmoil, as if the earth itself is whispering calm to your soul. When you clasp it tightly, its power soothes away stress and fear, granting you an unshakable resolve even amidst chaos. Legends speak of its origin in the heart of a long-forgotten stone circle where ancient druids sought eternal peace.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 8,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Stress Reduction",
      "Resilience Against Fear"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying_pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stress Reduction",
        "rules": "When you activate the Steadfast Stone as an action, it reduces your stress by 20% for 1 hour. You can use this feature once at dawn."
      },
      {
        "title": "Resilience Against Fear",
        "rules": "While holding the Steadfast Stone, you have advantage on saving throws against being frightened and are immune to the frightened condition until midnight."
      }
    ],
    "levelRequirementReason": "The stone's calming influence is accessible to all who seek it.",
    "vendorReason": "The magic shop specializes in artifacts that bring peace and balance, making the Steadfast Stone a perfect addition to their inventory.",
    "shippingDetail": "Delivered swiftly by a fleet of trained flying pigeons, ensuring your stress is reduced even before you receive it.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until the stress reduction ends",
      "endsWhen": "The stress reduction effect ends at midnight or if you stop holding the stone for more than 5 minutes",
      "charges": "Once per dawn"
    },
    "priceReason": "The stone's rarity and the unique combination of its effects make it a valuable addition to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:11:10.126477+00:00",
    "aiReviewedAt": "2026-07-23T21:11:10.126477+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_guild_potion_of_fortitude": {
    "id": "earth_land_guild_potion_of_fortitude",
    "name": "Quartermaster's Strength Brew",
    "description": "The Quartermaster's Strength Brew, brewed by Pip – a burly goblin renowned for his enthusiasm – is a thick, greenish potion that bubbles vigorously in its glass flask. This potent concoction promises to bolster your strength and resilience, though it might just as likely leave you with an embarrassing belch. The Guild Quartermaster himself insists the brew can turn even the meekest adventurers into fortresses of muscle for a short time.",
    "category": "consumables",
    "price": 1000,
    "icon": "💪",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Strength",
      "Temporary Hit Points"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Strength",
        "rules": "Upon drinking, you gain a +3 bonus to Strength (Strength check and saving throws) for 3 turns. The effects of this potion are instantaneous."
      },
      {
        "title": "Temporary Hit Points",
        "rules": "You also receive temporary hit points equal to 20 until the end of your next long rest, after which they vanish without effect. This benefit is permanent and does not expire."
      }
    ],
    "levelRequirementReason": "The potion's effects are designed for novices who need a boost in combat without the complexity of higher-level spells or abilities.",
    "vendorReason": "Pip, the enthusiastic goblin Quartermaster, is always eager to see his friends and patrons succeed. This brew is one of his most popular offerings.",
    "shippingDetail": "The potion is shipped in a sturdy container with an internal cooling system to preserve its potency.",
    "usage": {
      "activation": "Drink the potion as a bonus action.",
      "duration": "Instantaneous, lasting for 3 turns.",
      "endsWhen": "The effects end at the beginning of your next turn after drinking the potion.",
      "charges": "Unlimited"
    },
    "priceReason": "Despite its simple appearance, this potion is crafted with rare ingredients and Pip's unique brewing techniques, justifying a higher price.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:11:22.530730+00:00",
    "aiReviewedAt": "2026-07-23T21:11:22.530730+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_godly_resonance_shard": {
    "id": "kivotos_item_godly_resonance_shard",
    "name": "Echoes of the Academy",
    "description": "Echoes of the Academy is a fragment that resonates with the collective knowledge and anxieties of Kivotos' student body, held together by the will of its last guardian. When invoked, it briefly projects possible futures, each more chaotic than the last, forcing you to choose between them. The shard's influence is undeniable, compelling you to ponder every academic opportunity with an overwhelming sense that you should join every club and society on campus!",
    "category": "premium",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "prophetic glimpses",
      "compulsive academic advice"
    ],
    "vendor": "academy_armory",
    "shippedBy": "interdimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prophetic Glimpses",
        "rules": "When activated as a bonus action, this shard projects three possible futures. Each future is accompanied by a cryptic message from the student body. The user must choose one to follow; choosing incorrectly results in a -2 penalty to all rolls for the next hour."
      },
      {
        "title": "Compulsive Academic Advice",
        "rules": "The shard emits a constant stream of advice, mostly bad and always conflicting. It grants resistance to psychic attacks but imposes disadvantage on Charisma (Deception) checks for 1d4 hours after each use."
      }
    ],
    "levelRequirementReason": "Even the simplest student at Kivotos can sense the shard's power.",
    "vendorReason": "The armory is entrusted with preserving and distributing the relics of Kivotos' legacy.",
    "shippingDetail": "Ships via a portal that requires a week to arrive, but it ensures safe delivery across dimensions.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; lasts for the chosen future's duration or until an hour passes",
      "endsWhen": "The user chooses a future and follows its path, or one hour has passed",
      "charges": "Unlimited"
    },
    "priceReason": "This shard is considered a premium item due to its unique properties and the lore surrounding it.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-23T21:11:28.708578+00:00",
    "aiReviewedAt": "2026-07-23T21:11:28.708578+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_gargoyle_shard": {
    "id": "earth_land_gargoyle_shard",
    "name": "Stoneheart's Echo",
    "description": "Stoneheart's Echo is a jagged shard, its surface etched with ancient runes that pulse with residual magic. This relic seems formed from the hardened essence of an old gargoyle, long since turned to stone by time and weather. When you hurl it at your foes, Stoneheart's Echo emits a thunderous roar that disorients nearby enemies, leaving them reeling in confusion for moments. The shard also grants you a brief respite, bolstering your defenses with +1 Armor Class as you brace against the next wave of attacks.",
    "category": "consumables",
    "price": 1000,
    "icon": "🗿",
    "stock": 75,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Disorienting Roar",
      "Strengthened Defense"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Magical Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Disorienting Roar",
        "rules": "When thrown, Stoneheart's Echo emits a deafening roar that targets all creatures within a 15-foot radius. These creatures must succeed on a DC 14 Wisdom saving throw or be disoriented for 2 rounds, during which they have disadvantage on attack rolls and ability checks."
      },
      {
        "title": "Strengthened Defense",
        "rules": "For the duration of 3 rounds after throwing Stoneheart's Echo, you gain a +1 bonus to your Armor Class. This effect does not stack with other sources of AC bonuses."
      }
    ],
    "levelRequirementReason": "The magic within Stoneheart's Echo is potent but controlled by ancient forces, requiring at least 6th level to wield.",
    "vendorReason": "The magic shop stocks this rare artifact as part of its collection of mystical relics and powerful consumables.",
    "shippingDetail": "Ships via the Magical Courier, known for its swift delivery of enchanted goods across the realm.",
    "usage": {
      "activation": "Action (thrown)",
      "duration": "Instantaneous; lasts until the end of your next turn",
      "endsWhen": "The effect ends if you take any other action on your turn or if you are incapacitated.",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "Stoneheart's Echo is priced at 1000 XP as it combines potent magical effects with a rare and powerful origin story.",
    "priceOriginal": 6800,
    "priceReviewedAt": "2026-07-23T21:11:41.605500+00:00",
    "aiReviewedAt": "2026-07-23T21:11:41.605500+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_dragonscale_helmet": {
    "id": "earth_land_dragonscale_helmet",
    "name": "Wyrm's Burden",
    "description": "Wyrm's Burden, forged from the discarded scales of a juvenile frost dragon, is a chilling helm that exudes a sub-zero aura. Its icy surface crackles with cold energy and offers robust protection against the biting winds of frost. The helmet grants a +3 bonus to your Armor Class and allows you to cast 'Hold Frost' once per long rest as an action, trapping enemies in a frigid barrier for one minute.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "+3 AC",
      "Cold Resistance"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Winged Messenger",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Hold Frost",
        "rules": "When you activate Hold Frost using an action, a 20-foot radius of ice and cold erupts from the helmet. Any creature within this area must make a DC 15 Dexterity saving throw or be restrained by icy chains for one minute. This effect can only be used once per long rest."
      },
      {
        "title": "Cold Resistance",
        "rules": "You gain resistance to cold damage while wearing Wyrm's Burden. Additionally, you have advantage on saving throws against effects dealing cold damage."
      }
    ],
    "levelRequirementReason": "This helmet requires a minimum level of 10 due to its dragon-scaled origins and potent frost magic.",
    "vendorReason": "The Guild Quartermaster deals exclusively with high-powered, limited-edition items suitable for seasoned adventurers like those capable of wielding Wyrm's Burden.",
    "shippingDetail": "Delivered swiftly by the Winged Messenger, this helmet arrives encased in a block of ice to preserve its integrity during transport.",
    "usage": {
      "activation": "Action (Hold Frost)",
      "duration": "Instantaneous effect; Hold Frost lasts one minute",
      "endsWhen": "The duration ends or you are no longer within the area of the effect",
      "charges": "Uses once per long rest"
    },
    "priceReason": "Wyrm's Burden is priced at 1000 XP, reflecting its dragon-scaled origins and potent frost magic that make it a rare and valuable treasure.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:11:54.106217+00:00",
    "aiReviewedAt": "2026-07-23T21:11:54.106217+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_godly_rune_of_frost": {
    "id": "earth_land_godly_rune_of_frost",
    "name": "Winter's Whisper",
    "description": "Hewn from an ancient, frozen shard that once belonged to the god of winter, Winter's Whisper hums with raw frost magic. When activated, it summons a chilling blizzard that engulfs enemies in ice and snow, reducing their movement speed by half and forcing them into a state of immobilizing cold. The rune also grants its wielder a surge of icy power, restoring hit points while dealing cold damage to foes who dare to come close.",
    "category": "consumables",
    "price": 1000,
    "icon": "❄️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Blizzard",
      "Cold Surge"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Ice Giant Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blizzard",
        "rules": "When activated as an action, the rune summons a localized blizzard that reduces enemy movement speed by half and imposes the 'Frozen' condition (DC 15 Constitution saving throw to avoid). The blizzard lasts for 3 rounds."
      },
      {
        "title": "Cold Surge",
        "rules": "Upon activation, the user restores 2d6 hit points and deals 1d8 cold damage to all creatures within 10 feet. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who are ready to master the basics of elemental magic.",
    "vendorReason": "The Earth Emporium specializes in rare and ancient artifacts, making it a fitting home for Winter's Whisper.",
    "shippingDetail": "The rune is packed with enchanted ice to ensure safe delivery, but the recipient must be prepared for the cold temperatures during transit.",
    "usage": {
      "activation": "Action",
      "duration": "3 rounds (Blizzard effect)",
      "endsWhen": "Ends when the duration expires or the user dismisses it as an action.",
      "charges": "Once per short or long rest"
    },
    "priceReason": "This price reflects the rune's rarity, ancient origins, and the raw frost magic it contains.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T21:12:09.534386+00:00",
    "aiReviewedAt": "2026-07-23T21:12:09.534386+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_glowing_cap": {
    "id": "mushroom_kingdom_item_glowing_cap",
    "name": "Glowshroom's Delight",
    "description": "The Glowshroom's Delight exudes a faint, otherworldly glow that dances across its cap like emerald fireflies. This oversized mushroom is not only a beacon in the dark but also an irritant to any beetle within reach, sending them scurrying away. Its luminescence grants you and your allies temporary light vision out to 30 feet, ideal for stealthy navigation through shadowed caverns or dazzling unwelcome intruders like Goombas without a single bite.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "light_vision_30ft",
      "disturb_beetles_1d4"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Toad Express Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Light Vision (30 feet)",
        "rules": "When activated, the Glowshroom's Delight grants you and your allies advantage on Perception checks within a 30-foot radius. This effect lasts for 10 minutes per use."
      },
      {
        "title": "Disturb Beetles",
        "rules": "Upon activation, it attracts beetles to a 20-foot radius around the user, causing them to scatter in all directions and become difficult to target. The scattered beetles are immune to all attacks for 1 minute after they disperse."
      }
    ],
    "levelRequirementReason": "The delicate balance of magic within the Glowshroom's Delight requires a certain level of arcane knowledge to activate and maintain.",
    "vendorReason": "The market in Toad Town is known for its unique and enchanted items, making it the perfect vendor for such a whimsical yet functional mushroom cap.",
    "shippingDetail": "Shipped via Toad Express Courier, this glowing mushroom is carefully packed to prevent any accidental light leakage during transit.",
    "usage": {
      "activation": "A bonus action to activate the Glowshroom's Delight and start its effects.",
      "duration": "Continuous for 10 minutes per use until dismissed or exhausted.",
      "endsWhen": "The effect ends if you are incapacitated, you take damage, or the glowing light is extinguished.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Glowshroom's Delight is priced at 1000 XP due to its magical properties and the complex enchantments required for its creation by Toad Town's master mushroom alchemists.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T21:12:40.021266+00:00",
    "aiReviewedAt": "2026-07-23T21:12:40.021266+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wario_coin_amulet": {
    "id": "mushroom_kingdom_item_wario_coin_amulet",
    "name": "Wario's Lucky Loot Amulet",
    "description": "Wario's Lucky Loot Amulet is a tarnished brass charm, its surface pocked with tiny dents and streaked with verdigris. Despite its rustic appearance, this amulet seems to draw wealth from the very air, as coins gleam within it like the stars in a night sky. Yet, its power comes at a cost, for those who wear it might find themselves plagued by opportunistic scavengers drawn to its shimmering treasure.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "wealthy_luck",
      "scavenger_attractor"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_mushroom",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wealthy Luck",
        "rules": "The wearer gains a +1 bonus to all saving throws and ability checks. This effect persists until the start of your next turn."
      },
      {
        "title": "Scavenger Attractor",
        "rules": "Once per short rest, the wearer can activate this amulet to draw nearby creatures with strong affinity for shiny objects within 30 feet toward them as a reaction. The drawn creatures must make a DC 15 Dexterity saving throw or be pulled towards the wearer."
      }
    ],
    "levelRequirementReason": "A novice adventurer can still appreciate the amulet's charm without needing advanced skill.",
    "vendorReason": "Only Wario would personally sell an item that once belonged to him, no matter how legendary it might be.",
    "shippingDetail": "The amulet arrives via a specially modified rocket mushroom with enhanced speed and precision.",
    "usage": {
      "activation": "Reaction (to draw scavengers) or passive effect (Wealthy Luck)",
      "duration": "Instantaneous for the scavenger attraction, lasts until start of next turn for Wealthy Luck",
      "endsWhen": "The reaction is used up or the rest ends",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a reasonable price as its effects are powerful but not overwhelming.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:12:23.381258+00:00",
    "aiReviewedAt": "2026-07-23T21:12:23.381258+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_strange_artifact": {
    "id": "mushroom_kingdom_item_strange_artifact",
    "name": "Echoing Spore Pod",
    "description": "A pulsating, iridescent spore pod that seems to whisper fragments of forgotten melodies. Holding it allows you to briefly glimpse echoes of past events – be warned, some are unsettling!",
    "category": "curiosities",
    "price": 1800,
    "icon": "🔮",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "reveal_hidden_secrets_50%",
      "chance_to_receive_a_vision_1d6",
      "minor_intellect_boost_2"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "mushroom_drone",
    "levelRequirement": 5
  },
  "kivotos_item_spectral_notepad": {
    "id": "kivotos_item_spectral_notepad",
    "name": "Whispers of the Archive",
    "description": "A notebook that seems to fill itself with cryptic messages and half-formed ideas. Scribbling in it grants insight, but beware - the notes are often unsettlingly accurate (and slightly judgmental).",
    "category": "curiosities",
    "price": 800,
    "icon": "📝",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "chance_insight_5%",
      "grant_knowledge_1"
    ],
    "vendor": "student_store",
    "shippedBy": "Standard Post",
    "levelRequirement": 3
  },
  "kivotos_item_nullifier_charm": {
    "id": "kivotos_item_nullifier_charm",
    "name": "The Quietude Stone",
    "description": "The Quietude Stone is a small obsidian charm that gleams with an internal glow of stillness. Crafted by ancient alchemists to disrupt magical disturbances, it creates a localized zone of silence around its wielder. Legend has it that the charm was found in the ruins of an old library, where whispers of forgotten knowledge lingered. This relic can be used to muffle ambient noise and resist enchantments, but some say it also dampens one's own thoughts.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🤫",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "silence_aura",
      "resist_magic"
    ],
    "vendor": "club_supply",
    "shippedBy": "Secret Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Silence Aura",
        "rules": "Activates as a bonus action. Creates a 10-foot radius sphere of silence centered on the wielder, preventing any sound within this area for 1 minute per use. The effect ends if the charm is destroyed or worn by another creature."
      },
      {
        "title": "Resist Magic",
        "rules": "Passive ability that grants a +2 bonus to saving throws against spells and magic effects. This benefit lasts until used in combat, at which point it expires after 10 minutes of rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency with Arcana or History to wield effectively.",
    "vendorReason": "Club Supply has a surplus from an old shipment, considering it useful for both sneaking and magical defense.",
    "shippingDetail": "Ships discreetly within 3 days; requires signature upon delivery to ensure no one is watching.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute per use, or until destroyed",
      "endsWhen": "Used in combat or when worn by another creature",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for a rare item that provides useful but not overpowered abilities.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T21:12:35.813081+00:00",
    "aiReviewedAt": "2026-07-23T21:12:35.813081+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_perfect_attendance": {
    "id": "kivotos_item_halo_of_perfect_attendance",
    "name": "The Grade-Getter's Halo",
    "description": "The Grade-Getter's Halo, forged by a student who aced every test ever, radiates an aura of focused determination around its wearer. Crafted from polished brass and adorned with intricate engravings of academic symbols, it subtly enhances one’s performance in any study-related endeavor. This halo ensures you always stay on point during exams, making mistakes rare indeed – but don't expect it to do your work for you; it simply sharpens your mind's edge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎓",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "focused_determination",
      "reduced_mistakes"
    ],
    "vendor": "student_store",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Focused Determination",
        "rules": "While wearing the Grade-Getter's Halo, you gain a +2 bonus to Intelligence and Wisdom (Insight) checks related to academic tasks. This effect is passive and does not require an action."
      },
      {
        "title": "Reduced Mistakes",
        "rules": "You have advantage on saving throws against effects that would cause you to fail an academic-related check or roll. Additionally, your chance of making a mistake during such checks decreases by 15%, as if you were always at the peak of your concentration."
      }
    ],
    "levelRequirementReason": "The item's power is balanced for characters who are still learning and developing their skills in academia.",
    "vendorReason": "The Student Store sells items that help students succeed, making the Grade-Getter's Halo a natural fit.",
    "shippingDetail": "Ships via Express Delivery within one day of purchase.",
    "usage": {
      "activation": "Passive effect; does not require activation.",
      "duration": "Instantaneous and constant while worn.",
      "endsWhen": "The item is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The Grade-Getter's Halo provides a significant academic boost without being game-breaking, making it fair for the XP cost.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-23T21:13:10.860574+00:00",
    "aiReviewedAt": "2026-07-23T21:13:10.860574+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_vortex_scroll_of_misdirection": {
    "id": "kivotos_item_vortex_scroll_of_misdirection",
    "name": "The Confuser's Scroll",
    "description": "The Confuser's Scroll radiates a palpable aura of chaotic energy, its parchment shimmering with an otherworldly light. This ancient artifact is crafted from enchanted paper and ink that whisper secrets of bygone magic, capable of inducing a momentary state of disorientation in foes. Should you unfurl it at the right instant, enemies will find their movements halved for a round, their minds momentarily muddled—perfect for escape or setting up a truly baffling tactical advantage. Just be wary; the scroll’s power can easily backfire on the unwary.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "disorientation",
      "movement_halving"
    ],
    "vendor": "club_supply",
    "shippedBy": "standard_shipping",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Glance",
        "rules": "When you activate the scroll, each enemy within a 10-foot radius must make a Wisdom saving throw. On a failed save, they are incapacitated for 1 round and their movement speed is halved."
      },
      {
        "title": "Muffled Steps",
        "rules": "For the duration of its effect, any noise made by an enemy within 20 feet is reduced to half volume, making them easier to surprise or flank."
      }
    ],
    "levelRequirementReason": "This scroll's power demands only a basic understanding of magic, suitable for novice spellcasters.",
    "vendorReason": "Club Supply specializes in magical curiosities and ancient artifacts, making this scroll an ideal addition to their inventory.",
    "shippingDetail": "Standard delivery takes a week, ensuring the scroll arrives in pristine condition for your next adventure.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of the turn or when the scroll is destroyed.",
      "endsWhen": "The scroll is destroyed or its effects are dispelled by magic.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This scroll offers a significant tactical advantage, making it a valuable and balanced addition to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:13:07.196555+00:00",
    "aiReviewedAt": "2026-07-23T21:13:07.196555+00:00",
    "aiReviewVersion": 1
  }
};
