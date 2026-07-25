// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_082 = {
  "earth_land_item_the_whispering_rune_granted": {
    "id": "earth_land_item_the_whispering_rune_granted",
    "name": "The Whispering Rune Granted",
    "description": "The Whispering Rune Granted, a rune of icy blue and silver, glows faintly in the cold air, its surface etched with ancient runes that whisper secrets of the earth. Crafted from the bones of ancient frost giants and imbued with the power of forgotten glaciers, it amplifies divination spells by 30% and grants resistance to cold damage. Upon activation, it reveals hidden pathways within frozen landscapes, allowing the wielder to navigate treacherous terrains without peril.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Enhanced Divinations",
      "Reveal Hidden Pathways"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Frostwing Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Divinations",
        "rules": "Increase the power of divination spells by 30%. This effect lasts until the spell ends, and it can be used once per long rest."
      },
      {
        "title": "Reveal Hidden Pathways",
        "rules": "Activate to reveal hidden pathways within frozen landscapes. The effect persists for 60 seconds and has a range of 120 feet. Requires a successful Wisdom (Perception) check against an unperceived DC 15."
      }
    ],
    "levelRequirementReason": "The rune's power is accessible to even the most novice adventurers, but its true potential unfolds with experience.",
    "vendorReason": "Magic Shop prides itself on offering rare and ancient artifacts that can guide even the greenest of wizards.",
    "shippingDetail": "Ships via Frostwing Express, known for its quick delivery through icy terrains.",
    "usage": {
      "activation": "Action",
      "duration": "60 seconds or until the spell ends",
      "endsWhen": "The effect ends when the spell ends or the user's next short rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to be a valuable yet attainable legendary item for adventurers of all levels.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:22:07.022576+00:00",
    "aiReviewedAt": "2026-07-25T03:22:07.022576+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_chronal_ice_shard_artifact_42": {
    "id": "earth_land_item_chronal_ice_shard_artifact_42",
    "name": "Chronal Ice Shard Artifact 42",
    "description": "Recovered from a collapsed wizard's tower, this Chronal Ice Shard Artifact 42 is a jagged fragment of frozen time, its surface etched with ancient runes that shimmer like stars in a void. The shard hums with the energy of fragmented timelines and can be wielded to manipulate the flow of time itself. Activating it allows for moments where time seems to stand still, granting unparalleled precision in combat or delicate manipulation of magical energies.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Precision Focus"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "express_delivery",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "Activates as a bonus action. For the duration of 1 round (6 seconds), all creatures within a 5-foot radius suffer from slowed movement and attack speed by 20%, while the user gains advantage on Dexterity saving throws against temporal effects."
      },
      {
        "title": "Precision Focus",
        "rules": "The user's spellcasting accuracy increases by 15% for 1 minute, and they have a 5% chance to rewind one failed spell cast per day. Rewinding a failed spell does not restore the expended spell slot but allows the caster to retarget the spell."
      }
    ],
    "levelRequirementReason": "The arcane knowledge required to safely wield and harness this shard's power demands a high level of magical proficiency.",
    "vendorReason": "As an institution that deals in ancient artifacts, the Earth Emporium is well-known for its collection of powerful relics from forgotten ages.",
    "shippingDetail": "Ships via express delivery with a guaranteed arrival within 24 hours.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short or long rest.",
      "duration": "1 round (6 seconds) for Temporal Distortion, 1 minute for Precision Focus",
      "endsWhen": "The duration ends naturally after the stated time period.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This artifact represents a rare confluence of powerful temporal magic and ancient craftsmanship, making it worth its weight in experience points.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T03:22:29.535775+00:00",
    "aiReviewedAt": "2026-07-25T03:22:29.535775+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_frostbound_sigil_of_the_windward_granted": {
    "id": "earth_land_item_frostbound_sigil_of_the_windward_granted",
    "name": "Frostbound Sigil of the Windward Granted",
    "description": "The Frostbound Sigil of the Windward Granted is a small, intricately etched sigil made from enchanted arctic obsidian. Crafted by an ancient wizard who sought to master icy winds, it can be invoked to create a protective barrier of swirling frost that offers potent resistance against cold-based attacks and blizzards. Within its radius, enemies are slowed, making them easier to target or avoid. The sigil's frost generates a chilling blizzard effect with each use, further hindering foes.",
    "category": "consumables",
    "price": 1000,
    "icon": "❄️",
    "stock": 90,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Cold Resistance Barrier",
      "Enemy Slow"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "flying_cart",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Cold Resistance Barrier",
        "rules": "Activates as a bonus action. Creates a 5-meter radius barrier of frost that grants resistance to cold damage for all allies within its area. Lasts 60 seconds, and the sigil can be reactivated after a short rest."
      },
      {
        "title": "Enemy Slow",
        "rules": "Enemies approaching or moving through the frost barrier are slowed by half their speed until they leave the area. The sigil has a 15% chance to generate a small blizzard effect, which further reduces movement speeds in its radius for 30 seconds."
      }
    ],
    "levelRequirementReason": "Requires high-level expertise and magical aptitude to properly activate the sigil's ancient enchantments.",
    "vendorReason": "The guild has access to rare magical artifacts crafted by legendary wizards.",
    "shippingDetail": "Delivered swiftly via enchanted aerial conveyance, ensuring timely arrival of this potent sigil.",
    "usage": {
      "activation": "Bonus action to activate the barrier; can be recharged after a short rest.",
      "duration": "60 seconds per activation",
      "endsWhen": "The effect ends when the sigil is destroyed or its uses are exhausted.",
      "charges": "5 charges, recharging after a long rest"
    },
    "priceReason": "Balanced to ensure it remains powerful yet not overpowered at this level.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T03:21:38.365685+00:00",
    "aiReviewedAt": "2026-07-25T03:21:38.365685+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_crimson_badges_of_valor": {
    "id": "pokemon_item_crimson_badges_of_valor",
    "name": "Crimson Badges of Valor",
    "description": "The Crimson Badges of Valor are forged from the essence of legendary Pokémon battles, each badge pulsating with the spirit of valor and courage. These badges amplify your resolve in combat, granting a +15% increase to attacks and increasing the chance for critical hits by +10%. Wielders feel an unyielding surge of aggression that propels them through even the fiercest encounters, their spirits bolstered by the ancient battle cries they embody.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Boost Attack",
      "Increase Critical Hit Chance"
    ],
    "vendor": "pokemart_north",
    "shippedBy": "Express Delivery",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Boost Attack",
        "rules": "This effect increases your attack rolls by +15% during combat. The increase is permanent while you wear these badges."
      },
      {
        "title": "Increase Critical Hit Chance",
        "rules": "While wearing the Crimson Badges of Valor, there is a 10% chance to deal a critical hit on any successful roll. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "These badges require a high level to wield effectively, as they channel the essence of powerful Pokémon battles.",
    "vendorReason": "Pokemart North specializes in rare and powerful items used by trainers facing formidable challenges.",
    "shippingDetail": "Ships within two days, delivered directly to your doorstep for an expedited experience.",
    "usage": {
      "activation": "Passive effect while worn.",
      "duration": "Permanent while worn",
      "endsWhen": "Effect ends when the badges are removed or destroyed.",
      "charges": "Unlimited uses per rest"
    },
    "priceReason": "The price reflects the rarity and power of these badges, which amplify combat prowess significantly.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:21:51.994449+00:00",
    "aiReviewedAt": "2026-07-25T03:21:51.994449+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_silverfang_ribbon_piercer": {
    "id": "pokemon_item_silverfang_ribbon_piercer",
    "name": "Silverfang Ribbon Piercer",
    "description": "Forged from the scales of a legendary Ice-type Pokémon, this Silverfang Ribbon Piercer is a masterwork of craftsmanship and ancient magic. Woven through its shimmering scales are threads that hum with a chilling resonance, capable of delivering a focused blast of icy energy. When wielded in battle, it momentarily stuns foes, allowing for swift attacks or strategic repositioning. The ribbon's icy core provides a slight resistance to Ice-type moves and grants the user a brief boost in speed.",
    "category": "consumables",
    "price": 1000,
    "icon": "❄️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Stuns Opponent",
      "Boosts Speed"
    ],
    "vendor": "safari_shop_west",
    "shippedBy": "Standard Mail with Express Delivery",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Stuns Opponent",
        "rules": "When activated, the Silverfang Ribbon Piercer delivers a focused blast of icy energy. This momentarily stuns the target for 1 second, allowing the user to make an attack or take strategic advantage. The effect has a range of 30 feet and ends if the stunned creature makes a successful Dexterity saving throw."
      },
      {
        "title": "Boosts Speed",
        "rules": "Upon activation, the wielder gains a +5 bonus to speed for 1 minute. This effect is limited to once per long rest. The bonus to speed is lost if the user takes any action other than moving."
      }
    ],
    "levelRequirementReason": "Requires significant skill and experience to wield effectively, ensuring it's a valuable asset for high-level adventurers.",
    "vendorReason": "The Safari Shop West specializes in rare and exotic items crafted from legendary creatures, making the Silverfang Ribbon Piercer an ideal addition to their inventory.",
    "shippingDetail": "Ships within three days of purchase, delivered directly to your door.",
    "usage": {
      "activation": "Action",
      "duration": "1 second (Stuns) / 1 minute (Speed Boost)",
      "endsWhen": "Target makes a successful Dexterity saving throw or the user takes an action other than moving, respectively",
      "charges": "Unlimited"
    },
    "priceReason": "The Silverfang Ribbon Piercer is crafted from rare materials and requires significant magical energy to maintain its power.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T03:22:29.670117+00:00",
    "aiReviewedAt": "2026-07-25T03:22:29.670117+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronal_resonance_shard_mythic": {
    "id": "pokemon_item_chronal_resonance_shard_mythic",
    "name": "Chronal Resonance Shard - Mythic",
    "description": "The Chronal Resonance Shard - Mythic is a crystalline fragment that warps time itself. Crafted from the essence of forgotten battles, it allows its wielder to manipulate the flow of combat with precision and caution. Use it wisely, for each activation risks destabilizing the very fabric of time; yet, when used correctly, it can turn the tide in your favor by nullifying an opponent’s move or rewinding a single turn.",
    "category": "premium",
    "price": 45000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Rewind",
      "Move Nullification"
    ],
    "vendor": "league_store_elite",
    "shippedBy": "Royal Courier - Priority",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "As a reaction, you may rewind time to undo one action from your last turn. This effect lasts until the start of your next turn and cannot be used if an opponent's move was nullified by this ability."
      },
      {
        "title": "Move Nullification",
        "rules": "As a bonus action, you can nullify one opponent’s move during their next action. If successful, that creature must use its reaction to either attempt another action or remain still. This effect has a 50% chance of success."
      }
    ],
    "levelRequirementReason": "The Mythic Chronal Resonance Shard requires a level 40 character due to the immense power and risk it poses.",
    "vendorReason": "Only the Elite League Store can stock such an item, given its mythic rarity and restricted accessibility.",
    "shippingDetail": "Priority delivery ensures that this delicate artifact arrives intact and ready for immediate use.",
    "usage": {
      "activation": "Reaction to Temporal Rewind; Bonus Action for Move Nullification",
      "duration": "Instantaneous effect, ends when the turn ends or an opponent’s move is nullified",
      "endsWhen": "The start of your next turn or if you are incapacitated",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Mythic Chronal Resonance Shard's price reflects its mythic rarity and the immense power it offers, balancing the risk of misuse.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T03:22:08.676166+00:00",
    "aiReviewedAt": "2026-07-25T03:22:08.676166+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_crimson_echoes_of_the_frostwall": {
    "id": "earth_land_item_crimson_echoes_of_the_frostwall",
    "name": "The Crimson Echoes of the Frostwall Touched Orb",
    "description": "The Crimson Echoes of the Frostwall Touched Orb glows an eerie red, its quartz matrix pulsating with the whispers of ancient ice wizards who once wielded power here. This artifact allows you to perceive fleeting echoes of past battles and arcane rituals near the Ice Wall, granting a chilling reminder of forgotten magic. Holding it increases your perception by 10%, making you more attuned to hidden dangers and subtle clues in the environment.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧊",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Echoes of Past Battles",
      "Enhanced Perception"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "ice_sled",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of Past Battles",
        "rules": "As a bonus action, you can concentrate for up to 1 minute. During this time, you gain temporary resistance to cold damage and the ability to communicate with spectral entities near the Ice Wall for 30 seconds. If an entity responds, it grants you insight into past events within range."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While holding the orb, your perception is increased by 10%. This effect lasts until you finish a short or long rest, and you can activate this ability once per day. The enhanced perception allows you to detect hidden traps, secret doors, and other subtle environmental clues."
      }
    ],
    "levelRequirementReason": "The orb's power is accessible early on but requires the user to have a solid understanding of how to interpret its revelations.",
    "vendorReason": "The guild quartermaster has access to unique items from the Frostwall region, ensuring they stock this artifact for adventurers seeking knowledge and protection.",
    "shippingDetail": "Shipped via ice sled, delivery can take up to a week due to harsh weather conditions in the northlands.",
    "usage": {
      "activation": "Bonus action or passive while holding it",
      "duration": "1 minute (concentration) for 'Echoes of Past Battles'; until rest for 'Enhanced Perception'",
      "endsWhen": "Concentration is broken or you finish a short/long rest, respectively; charges are limited to once per day",
      "charges": "Once per day"
    },
    "priceReason": "The price reflects the mythic rarity and the unique ability to communicate with spectral entities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:22:51.023928+00:00",
    "aiReviewedAt": "2026-07-25T03:22:51.023928+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_sigil_of_the_stone_carver": {
    "id": "earth_land_item_sigil_of_the_stone_carver",
    "name": "Sigil of the Stone Carver's Imprint",
    "description": "The Sigil of the Stone Carver's Imprint is a circular artifact crafted from a single piece of petrified wood, imbued with the earth's ancient magic. Its surface feels warm to the touch, pulsing with latent energy. When activated, it rapidly accelerates plant growth within a 10-meter radius, creating a temporary barrier of thorny vines that can impede foes or shield allies. Legends speak of its origins in the hands of a guild artisan dedicated to preserving the land's purity and fertility.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "accelerates plant growth",
      "creates a thorny barrier"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accelerated Plant Growth",
        "rules": "When activated, this sigil rapidly accelerates the growth rate of plants within a 10-meter radius. This effect lasts for 1 hour and provides +2 to botany skill checks during that time."
      },
      {
        "title": "Thorny Barrier",
        "rules": "Upon activation, thorny vines sprout from the ground around the sigil, creating a barrier that impedes movement within its 10-meter radius. This effect lasts for 1 hour and can be dispelled by any creature with the ability to cast a plant-related spell."
      }
    ],
    "levelRequirementReason": "This item is suitable for all levels, allowing players of various experiences to benefit from its earth magic.",
    "vendorReason": "The Earth Emporium specializes in items that harness the power of nature and is a trusted source for such artifacts.",
    "shippingDetail": "Shipped via the efficient delivery drone service, ensuring quick arrival to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour",
      "endsWhen": "Dispel magic or when its use ends",
      "charges": "Unlimited"
    },
    "priceReason": "The sigil's rarity and the significant benefit it offers in terms of plant growth and barrier creation justify its price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T03:22:26.580405+00:00",
    "aiReviewedAt": "2026-07-25T03:22:26.580405+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_the_void_touched_shard_of_silence": {
    "id": "earth_land_item_the_void_touched_shard_of_silence",
    "name": "The Void-Touched Shard of Silence (Forbidden)",
    "description": "The Void-Touched Shard of Silence, a fragment recovered from a collapsed wizard's tower in the Shadowed Grove, radiates an eerie calm that stills all sound within its radius. Crafted from an ancient, enchanted crystal, it whispers secrets of forgotten magics to those who hold it too long, driving them mad with visions and paranoia. Assassins treasure this shard for its deadly silence, while spies covet it for the stealth it grants.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "godly",
    "stockType": "night_only",
    "effects": [
      "Silence",
      "Paranoia"
    ],
    "vendor": "magic_shop",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Radius",
        "rules": "Activates as a bonus action, creating a 5-meter radius of silence around the user. Lasts for 60 seconds. Targets within the area must make a DC 18 Constitution saving throw or become deafened until the end of their next turn."
      },
      {
        "title": "Paranoid Visions",
        "rules": "While holding the shard for longer than 3 minutes, the user faces a 10% chance per minute to be struck with a hallucination. On a failed saving throw (DC 15), they become frightened until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Suitable for beginners, this shard's power is balanced by its complexity and the need to understand its effects.",
    "vendorReason": "The magic shop specializes in rare and forbidden items, including those that challenge the boundaries of magic.",
    "shippingDetail": "Ships under cover of night via the shadowed messengers; delivery is swift but discreet.",
    "usage": {
      "activation": "Bonus action to activate; can be used once per short or long rest.",
      "duration": "60 seconds for 'Silent Radius'; ends when the user releases it.",
      "endsWhen": "Discharges after use; recharges at dawn on a new day.",
      "charges": "Unlimited, but one charge is expended each time it's used."
    },
    "priceReason": "The shard's rarity and the complexity of its effects justify this price in experience points.",
    "priceOriginal": 70000,
    "priceReviewedAt": "2026-07-25T03:23:07.435759+00:00",
    "aiReviewedAt": "2026-07-25T03:23:07.435759+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_crimson_echo_caped_fungus": {
    "id": "mushroom_kingdom_item_crimson_echo_caped_fungus",
    "name": "The Crimson Echo Caped Fungus",
    "description": "The Crimson Echo Caped Fungus pulses with a crimson glow, its cap shimmering with spectral echoes of forgotten platforming challenges. When worn, it grants the wearer brief bursts of accelerated movement, allowing them to leap over obstacles as if they were air, and the ability to momentarily phase through solid objects for short-range passage. This fungal relic is said to channel the very essence of a bygone era's most daring platformers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 15,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Accelerated Leap",
      "Phasing Passage"
    ],
    "vendor": "wario_direct",
    "shippedBy": "aerial_delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accelerated Leap",
        "rules": "When activated as an action, the wearer gains +10 feet to their movement speed for 3 seconds. This effect can be used once per short or long rest."
      },
      {
        "title": "Phasing Passage",
        "rules": "Activating this ability allows the wearer to phase through solid obstacles within a 5-foot radius as an action, but they are unable to interact with objects or creatures during this time. This effect can be used once every short or long rest."
      }
    ],
    "levelRequirementReason": "The simplicity and accessibility of the item's effects make it suitable for any adventurer.",
    "vendorReason": "Wario Direct specializes in unique, hard-to-find items that can give players an edge in their questing.",
    "shippingDetail": "The aerial delivery drone ensures swift and safe transport of this fragile relic to your door.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous, with a 1-minute cooldown between uses",
      "endsWhen": "Effect ends when the duration expires or the wearer ceases movement",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The item's mythic rarity and unique effects justify its fair price of 1000 XP.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T03:23:04.102985+00:00",
    "aiReviewedAt": "2026-07-25T03:23:04.102985+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_bronzed_siege_touched_spore_helmet": {
    "id": "mushroom_kingdom_item_bronzed_siege_touched_spore_helmet",
    "name": "The Bronzed Siege Touched Spore Helmet Mk.37",
    "description": "The Bronzed Siege Touched Spore Helmet Mk.37 is a helm forged from the iron frame of a long-lost siege engine, its surface now pocked with resilient spore clusters that shiver in anticipation of battle. Crafted by ancient warriors and infused with the essence of the battlefield, it grants you an offensive edge against armored foes, granting +1 to attack rolls and +2 bonus damage when they fail their saving throw. The helmet's touch is said to echo the final breaths of fallen combatants, whose spirits lend a subtle, yet powerful boost to your strength.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increased Attack Damage",
      "Spirit Boost"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "ground_delivery_cart",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Increased Attack Damage",
        "rules": "When you hit an armored foe with a melee weapon attack, the target must succeed on a DC 14 Strength saving throw or take an additional 2d6 damage."
      },
      {
        "title": "Spirit Boost",
        "rules": "At the start of your turn, if you are adjacent to an ally who has taken damage within the last round, gain advantage on your next melee attack and have a +1 bonus to Strength until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This helmet is crafted for seasoned veterans capable of wielding its ancient power.",
    "vendorReason": "Koopa Shop specializes in rare, well-crafted equipment that aligns with the lore and craftsmanship of the Mushroom Kingdom's elite warriors.",
    "shippingDetail": "Ground delivery carts deliver this helmet with a delay of 2 days due to its size and weight.",
    "usage": {
      "activation": "Automatic upon donning the helmet.",
      "duration": "Until removed or until you take three melee attacks in a single turn.",
      "endsWhen": "The charges are exhausted after five uses, which can be recharged by spending an hour in a sacred grove of spore trees.",
      "charges": "5"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare craftsmanship and the lore behind it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:23:21.385355+00:00",
    "aiReviewedAt": "2026-07-25T03:23:21.385355+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_piped_chronoflow_capstone": {
    "id": "mushroom_kingdom_item_piped_chronoflow_capstone",
    "name": "The Piped Chronoflow Capstone Fragment",
    "description": "The Piped Chronoflow Capstone Fragment hums with a temporal energy, subtly bending time around its wearer. Its surface is etched with intricate runes that pulse in sync with the flow of moments, offering brief respites from the relentless march of time. With it, one can nimbly dodge attacks or execute flawless strategic movements before the world catches up. However, overuse risks creating unstable temporal distortions, warping reality around you for a fleeting moment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Respite",
      "Dodge and Evasion"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "standard_mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Respite",
        "rules": "As an action, the wearer can activate this fragment to briefly slow down time around them for up to 1 minute. During this time, they have advantage on Dexterity (Acrobatics) checks and can make a single successful Dexterity saving throw against attacks or effects that would otherwise target them during their turn."
      },
      {
        "title": "Dodge and Evasion",
        "rules": "The wearer gains temporary hit points equal to 1d6 + their Charisma modifier when they successfully dodge an attack. This effect can occur once per short rest, but overuse risks destabilizing the temporal flow around them."
      }
    ],
    "levelRequirementReason": "Wielders must have sufficient experience and discipline to harness its unstable temporal energies.",
    "vendorReason": "The market thrives on rare artifacts from the Mushroom Kingdom, including this fragment with its mysterious temporal properties.",
    "shippingDetail": "Standard mail delivery ensures safe transport of this delicate artifact without causing any temporal anomalies during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per activation",
      "endsWhen": "The effect ends when the wearer finishes their next turn or if they take any action that requires concentration, such as casting a spell.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point to reflect its unique temporal properties and limited utility without being overpowered.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T03:23:26.566673+00:00",
    "aiReviewedAt": "2026-07-25T03:23:26.566673+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_radiant_sworn_pipes_of_mithril": {
    "id": "middle_earth_item_radiant_sworn_pipes_of_mithril",
    "name": "Radiant Sworn's Pipes of Mithril",
    "description": "The Radiant Sworn's Pipes of Mithril are crafted from mithril ore, a rare metal extracted deep within the Misty Mountains by ancient dwarven artisans. When played, these pipes emit an ethereal glow that fills the air with a soothing hum, granting the player temporary resistance to cold and enhancing their strategic acumen. The pipes are not just tools of survival; they are relics imbued with the spirits of long-forgotten heroes, whispering tales of valor and strategy to those who wield them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Cold Resistance",
      "Enhanced Strategy"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "flying_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "When activated by playing a short melody on the pipes, the player gains temporary resistance to cold damage for 10 minutes. This effect can be used once per long rest."
      },
      {
        "title": "Enhanced Strategy",
        "rules": "The player's Intelligence (Strategy) checks are made at advantage for the duration of one battle or until they use this ability again. This effect is usable three times per short rest, with a 10-minute cooldown between uses."
      }
    ],
    "levelRequirementReason": "These pipes are accessible to all adventurers, as their power lies in their strategic and survival benefits rather than any specific class or level expertise.",
    "vendorReason": "The Dwarven Forge is renowned for its mastery of mithril crafting, making these pipes a fitting addition to their inventory.",
    "shippingDetail": "Delivered swiftly by the trusted messengers of the flying ponies, ensuring timely arrival even in treacherous terrain.",
    "usage": {
      "activation": "Play a short melody on the pipes as an action.",
      "duration": "10 minutes or until used again.",
      "endsWhen": "The effect ends when its duration expires or is recharged after a long rest.",
      "charges": "3 uses per short rest, with a 10-minute cooldown."
    },
    "priceReason": "The price reflects the rarity of mithril and the unique crafting techniques required to produce these pipes, along with their strategic and survival benefits.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:23:41.206606+00:00",
    "aiReviewedAt": "2026-07-25T03:23:41.206606+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shire_pipes_of_forgotten_songs": {
    "id": "middle_earth_item_shire_pipes_of_forgotten_songs",
    "name": "Shire Pipes of Forgotten Songs",
    "description": "The Shire Pipes of Forgotten Songs are intricately carved from elderwood, each pipe adorned with a miniature hobbit face that seems to hum softly as it exhales smoke. Crafted by the hands of master woodcarvers in the ancient forest groves, these pipes release echoes of melodies long lost, evoking a sense of nostalgia and tranquility. When played, they grant a brief moment of serene reflection and temporarily increase social interaction skills, making even the shyest hobbit eager for conversation.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 27,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "Nostalgic Serenity",
      "Enhanced Social Interaction"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Brown Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nostalgic Serenity",
        "rules": "When a player smokes one of these pipes, they gain the benefit of the Calm Emotions spell (save DC 13) for 1 minute. This effect enhances their ability to remain calm and collected in tense social situations."
      },
      {
        "title": "Enhanced Social Interaction",
        "rules": "For 1 hour after using the pipes, a character's Charisma (Interaction) checks are made with advantage. This boost encourages friendly conversations and strengthens bonds with others."
      }
    ],
    "levelRequirementReason": "These simple yet powerful pipes can be enjoyed by adventurers of all levels.",
    "vendorReason": "The Shire Shop, known for its authentic and enchanted goods, offers these unique pipes to help visitors and residents alike experience the magic of home.",
    "shippingDetail": "Ships via Brown Pony Express; delivery is swift, but the pipes require careful handling due to their delicate nature.",
    "usage": {
      "activation": "Consumed as an action when smoked.",
      "duration": "1 minute of calm and 1 hour of enhanced social interaction.",
      "endsWhen": "The effects dissipate after the specified durations.",
      "charges": "Unlimited, but limited to one use per day."
    },
    "priceReason": "Crafted with rare elderwood and ancient magic, these pipes are priced high for their unique and potent effects.",
    "priceOriginal": 180,
    "priceReviewedAt": "2026-07-25T03:23:41.003821+00:00",
    "aiReviewedAt": "2026-07-25T03:23:41.003821+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_elven_pipes_of_valinor": {
    "id": "middle_earth_item_elven_pipes_of_valinor",
    "name": "Elven Pipes of Valinor, Mk.48",
    "description": "The Elven Pipes of Valinor, Mk.48, are a marvel of ancient craft, crafted from wood harvested from the slopes of Mount Doom and imbued with the ethereal glow of the stars of Valinor. Inhaling their smoke reveals hidden passageways and grants temporary protection against dark magic, allowing one to traverse perilous paths unseen by foes. The pipes whisper the secrets of ages past, enhancing a listener's perception enough to locate hidden objects with uncanny precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Revealing Vision",
      "Protection Against Dark Magic"
    ],
    "vendor": "elven_market",
    "shippedBy": "silver_dragon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Revealing Vision",
        "rules": "When activated as a bonus action, the pipes emit a soft glow that reveals hidden pathways and objects within 30 feet for one minute. This effect is instantaneous but can be reactivated after a short rest."
      },
      {
        "title": "Protection Against Dark Magic",
        "rules": "The user gains resistance to necrotic damage while holding the pipes as an object, and they have advantage on saving throws against spells with the darkness or shadow descriptor. This effect persists for 10 minutes per long rest."
      }
    ],
    "levelRequirementReason": "These pipes are crafted to assist adventurers of all levels, but only those who can appreciate their craftsmanship and lore should wield them.",
    "vendorReason": "The Elven Market is renowned for its rare wares, including items that bridge the gap between legend and reality. The Elven Pipes are among such treasures.",
    "shippingDetail": "Shipped by a Silver Dragon courier, ensuring safe delivery through enchanted means.",
    "usage": {
      "activation": "Bonus action to activate revealing vision; object held for protection against dark magic.",
      "duration": "Revealing Vision lasts one minute; Protection Against Dark Magic lasts 10 minutes per long rest.",
      "endsWhen": "Revealing Vision ends on a short rest; Protection Against Dark Magic ends upon completion of a long rest or when the pipes are no longer held as an object.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the rarity and craftsmanship required to create these pipes, balancing their powerful effects with fair value.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T03:24:01.571652+00:00",
    "aiReviewedAt": "2026-07-25T03:24:01.571652+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_geometrically_aligned_resonator_7": {
    "id": "connectopia_item_geometrically_aligned_resonator_7",
    "name": "The Geometrically Aligned Resonator VII",
    "description": "The Geometrically Aligned Resonator VII hums with a rhythmic pulse that resonates through the crystalline veins of Connectopia. This hexagonal component, inlaid with glowing geometric patterns, subtly realigns the earth's natural harmonic frequency when integrated into mining equipment. As it works, it dramatically increases extraction yield by 35%, ensuring miners retrieve more precious stones and metals per shift. It also reduces structural instability within newly excavated tunnels by a full 20%, preventing cave-ins without requiring additional labor or resources.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 22,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increased Mining Yield",
      "Structural Stability"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Mining Yield",
        "rules": "When the Resonator VII is integrated into mining equipment, it increases the yield by 35%. This effect lasts until the end of each day's work. If removed or if the mining operation ceases for more than an hour, its effects are lost."
      },
      {
        "title": "Structural Stability",
        "rules": "The Resonator VII reduces structural instability within newly excavated tunnels by 20%. This effect persists until the tunnel is fully supported with additional materials or the end of the day's work. Any significant disturbance, such as a cave-in or prolonged inactivity for over an hour, negates its benefits."
      }
    ],
    "levelRequirementReason": "The Resonator VII is designed to be accessible to all miners and can be used by any level of character.",
    "vendorReason": "Block Smith specializes in mining equipment and has long-standing relationships with the manufacturers of this resonator.",
    "shippingDetail": "Ships within 24 hours, delivered directly to your mining site.",
    "usage": {
      "activation": "Passive effect when integrated into mining equipment.",
      "duration": "Lasts until the end of each day's work or removal.",
      "endsWhen": "Cessation of mining operation for more than an hour or removal from equipment.",
      "charges": "Unlimited, recharges daily."
    },
    "priceReason": "The balanced price reflects the rare material and intricate craftsmanship required to produce this advanced resonator.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:23:48.934581+00:00",
    "aiReviewedAt": "2026-07-25T03:23:48.934581+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_jeweled_sworn_shard_3": {
    "id": "connectopia_item_jeweled_sworn_shard_3",
    "name": "Jeweled Sworn's Shard of Reclamation",
    "description": "Recovered from the ruins of a long-abandoned pioneer outpost, the Jeweled Sworn's Shard of Reclamation is a pulsating relic embedded with a vibrant crystal that shifts hues in response to seismic activity. This shard accelerates block construction and provides an impromptu geological shield. Crafted from ancient stone and imbued with the essence of forgotten earthworks, it allows for rapid tunnel reinforcement or shelter assembly when time is of the essence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "accelerated block placement",
      "geological shield"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Bot Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Accelerated Block Placement",
        "rules": "As a bonus action, the wielder can rapidly place blocks in an area up to 5 feet wide by 10 feet long. This effect lasts for 1 minute and requires no material components or spell slots."
      },
      {
        "title": "Geological Shield",
        "rules": "The wielder gains a +4 bonus to saving throws against being knocked prone due to environmental effects, such as cave-ins. This benefit persists until the end of their next turn after activation."
      }
    ],
    "levelRequirementReason": "This shard is accessible to all levels but requires a minimum level for more advanced users to leverage its full potential.",
    "vendorReason": "The Pioneer Post specializes in relics and curiosities recovered from old outposts, making this shard an ideal addition to their inventory.",
    "shippingDetail": "Ships within one week via Courier Bot Express, delivered directly to the adventurer's door.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until interrupted",
      "endsWhen": "The effect ends when its duration expires or the wielder takes any hostile action.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from ancient stone and imbued with earth magic, this shard is a well-balanced find for adventurers looking to enhance their survival skills in challenging environments.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T14:46:11.806447+00:00",
    "aiReviewedAt": "2026-07-25T14:46:11.806447+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_mk.94_geometric_stabilization_module_12": {
    "id": "connectopia_item_mk.94_geometric_stabilization_module_12",
    "name": "Mk.94 Geometric Stabilization Module - 12",
    "description": "The Mk.94 Geometric Stabilization Module - 12 is a meticulously forged component, its surface etched with ancient runes that shimmer in the dim light of Connectopia's mines. This module projects a shimmering geometric field that not only strengthens surrounding blocks by +20% resistance to tremors and collapses but also emits a subtle hum that reduces the frequency of seismic disturbances within 5 feet for up to an hour. Ideal for miners, it ensures stability in even the most volatile underground environments.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "Seismic Stabilization",
      "Resilient Blocks"
    ],
    "vendor": "Craft Corner",
    "shippedBy": "Standard Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Seismic Stabilization",
        "rules": "Activates on command as a bonus action. The module projects a shimmering field within a 5-foot radius, reducing the chance of tunnel collapse by 10% for up to one hour. This effect ends if a major tremor occurs or after one hour."
      },
      {
        "title": "Resilient Blocks",
        "rules": "Activates when placed on stable ground and remains active as long as it is not moved or damaged. Increases the resistance of surrounding blocks by 20% against tremors and collapses, providing a permanent enhancement to mining operations within a 10-foot radius."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of Connectopian engineering for effective use.",
    "vendorReason": "Craft Corner specializes in unique and durable equipment used by miners across the land.",
    "shippingDetail": "Ships within three days from the nearest mine supply depot.",
    "usage": {
      "activation": "Activates as a bonus action or can be placed on stable ground.",
      "duration": "Active for one hour or until a major tremor occurs, permanent enhancement when left in place.",
      "endsWhen": "By a major tremor, after one hour, or if moved or damaged.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect the module's durability and effectiveness in stabilizing unstable environments.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-25T03:24:31.336711+00:00",
    "aiReviewedAt": "2026-07-25T03:24:31.336711+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_chronal_resonance_emitter_9009": {
    "id": "the_edge_item_chronal_resonance_emitter_9009",
    "name": "The Chronal Resonance Emitter 9009",
    "description": "The Chronal Resonance Emitter 9009 is a sleek obsidian device, its surface etched with ancient runes that glow with fractured time. When activated, it emits a pulse that can accelerate or decelerate localized temporal flows. The device's core vibrates with the echoes of realities that never were, and those who handle it must proceed with caution to avoid collapsing their own timeline. With each use, the Emitter 9009 subtly warps reality, causing minor distortions in space-time.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Temporal Acceleration",
      "Temporal Deceleration"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "Activating this device increases your movement speed by 30% for a duration of 1 minute. If the user is already moving, they gain an additional +20 feet to their walking or running speed during this time. No save DC required."
      },
      {
        "title": "Temporal Deceleration",
        "rules": "This effect slows down enemy projectiles by 50% for a duration of 2 seconds. It can be used once per short rest, and it has no save DC or range requirement."
      }
    ],
    "levelRequirementReason": "Even the simplest temporal manipulations require a certain understanding of the fabric of time.",
    "vendorReason": "The abyssal traders are known to dabble in all manner of cosmic curiosities, and this device is no exception.",
    "shippingDetail": "Ships via a rift that briefly opens between dimensions, arriving with a slight delay due to the instability of the portal.",
    "usage": {
      "activation": "A bonus action to activate; can be used once per short rest.",
      "duration": "Instantaneous effect for Temporal Acceleration and lasts for 2 seconds for Temporal Deceleration.",
      "endsWhen": "The effect ends when a successful DC 15 Wisdom saving throw is made by the target or upon use of another device's temporal effect.",
      "charges": "Unlimited uses, but can only be used once per short rest."
    },
    "priceReason": "The Emitter’s rarity and unique temporal properties justify its moderate cost in experience points.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T03:24:35.736639+00:00",
    "aiReviewedAt": "2026-07-25T03:24:35.736639+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_noble_piercer_remnant_7814": {
    "id": "the_edge_item_noble_piercer_remnant_7814",
    "name": "Noble Piercer's Remnant 7814",
    "description": "The Noble Piercer's Remnant 7814 is a crystalline fragment that crackles with latent energy, its surface etched with intricate patterns of ancient light. This relic releases concentrated bursts of force when struck, capable of shattering stone and leaving enemies dazed in its wake. Crafted from the shattered remains of a lost noble piercer's weapon, it hums with a potent charge, amplifying critical hits by 10% for those who wield it.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Concussive Burst",
      "Stunning Critical"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "sky_drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Concussive Burst",
        "rules": "When the remnant is struck or activated (as an action), it releases a burst of concussive force, dealing 80d6 bludgeoning damage to all creatures within 15 feet. Creatures failing a DC 20 Dexterity saving throw are also knocked prone and stunned for 1 minute."
      },
      {
        "title": "Stunning Critical",
        "rules": "While holding the remnant, you gain a +1 bonus to your critical hit chance. If you make a critical hit against an enemy, they must succeed on a DC 20 Strength saving throw or be stunned for 1 minute."
      }
    ],
    "levelRequirementReason": "Crafted from ancient light and powerful magic, this remnant requires significant magical aptitude to wield effectively.",
    "vendorReason": "Edge Outpost specializes in relics and remnants of lost noble artifacts, making it the ideal vendor for such a unique item.",
    "shippingDetail": "Sky drones deliver the remnant with enhanced security measures to ensure its safe arrival.",
    "usage": {
      "activation": "Strike or activate (as an action)",
      "duration": "Instantaneous; effect ends when the remnant is destroyed or expended in a critical hit",
      "endsWhen": "Destroyed by a critical hit or expended upon use",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this rare remnant offers powerful combat capabilities for players of sufficient magical prowess.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:46:25.916387+00:00",
    "aiReviewedAt": "2026-07-25T14:46:25.916387+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_ultimate_remnants_of_null_space_4567": {
    "id": "the_edge_item_ultimate_remnants_of_null_space_4567",
    "name": "Ultimate Remnants of Null Space 4567",
    "description": "The Ultimate Remnants of Null Space 4567 are shimmering, crystalline fragments forged from the heart of absolute nothingness. These cubes, when activated, create a zone of silence that muffles sounds and temporarily distort perception, causing confusion among enemies within range. Their origin in the void bestows upon them an eerie glow, but exposure to their energy can disorient even the most stalwart. These fragments are known for reducing maximum health by 10% and decreasing attack damage by 20%, making them a formidable yet perilous addition to any adventurer's collection.",
    "category": "curiosities",
    "price": 3800,
    "icon": "🌫️",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Silence Zone",
      "Energy Drain"
    ],
    "vendor": "final_shop",
    "shippedBy": "gravitic_tube",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Silence Zone",
        "rules": "This effect creates a small zone of silence, muffling sounds within a 10-foot radius for 1 minute. Enemies in the area have disadvantage on attack rolls and saving throws. The effect ends if a creature uses an action to dispel it or when its duration expires."
      },
      {
        "title": "Energy Drain",
        "rules": "When activated, these fragments reduce the target's maximum hit points by 10% until the end of their next turn. This effect can be used once per long rest and is limited to one use per day."
      }
    ],
    "levelRequirementReason": "The remnants require a high level to harness the power from absolute nothingness without causing catastrophic effects.",
    "vendorReason": "Final Shop specializes in exotic and rare items, including those of cosmic origin like these fragments.",
    "shippingDetail": "The gravitic tube ensures safe delivery through a warp corridor, minimizing the risk of exposure to the void's energy during transport.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with a duration of 1 minute for Silence Zone and 1 round for Energy Drain",
      "endsWhen": "Dispel magic or when its duration expires",
      "charges": "Once per long rest, limited to one use per day"
    },
    "priceReason": "The price reflects the rarity of these fragments and their unique cosmic origin.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-25T03:24:49.952864+00:00",
    "aiReviewedAt": "2026-07-25T03:24:49.952864+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_gilded_semester_breaker": {
    "id": "kivotos_item_gilded_semester_breaker",
    "name": "The Gilded Semester Breaker Medallion",
    "description": "Forged during the chaotic final semester of the Academy's Robotics Club, this medallion is a gilded masterpiece that pulses with a faint golden light, resonating with experimental audio dampeners. It grants temporary resistance to sonic disruption and subtly amplifies your reaction speed in emergencies, ensuring you're always one step ahead. The medallion was crafted by the club’s most promising minds during their most turbulent time, when even the simplest creations seemed like miracles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Sonic Resistance",
      "Enhanced Reaction Speed"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Sonic Resistance",
        "rules": "As a reaction, you can reduce the damage from one sonic attack or effect by half for up to 30 seconds. You may use this ability once per long rest."
      },
      {
        "title": "Enhanced Reaction Speed",
        "rules": "You gain advantage on Dexterity (Acrobatics) checks and saving throws made as a reaction. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The medallion is crafted with advanced materials, requiring expertise in robotics to fully appreciate its benefits.",
    "vendorReason": "The student store often features items created by the club’s members during their projects and experiments.",
    "shippingDetail": "Quickly delivered by the academy's drone fleet, ensuring you receive your gilded medallion in under an hour.",
    "usage": {
      "activation": "Reaction (Sonic Resistance), Instinctive Action (Enhanced Reaction Speed)",
      "duration": "Instantaneous (Sonic Resistance), Until the end of your next turn (Enhanced Reaction Speed)",
      "endsWhen": "The effect ends when you are no longer affected by a sonic attack or when you take another reaction action.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with advanced materials and requiring specialized knowledge to fully utilize, the medallion justifies its price in expert hands.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:25:07.202650+00:00",
    "aiReviewedAt": "2026-07-25T03:25:07.202650+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk75_broken_notes_breaker": {
    "id": "kivotos_item_mk75_broken_notes_breaker",
    "name": "Mk.75 Broken Notes Breaker Device",
    "description": "The Mk.75 Broken Notes Breaker Device, salvaged from the 'Syntax Scavengers' club's cryptic archives, is a relic of an era where data was currency and security meant nothing more than a flickering light. This device emits a targeted EMP pulse that fries circuits and scrambles codes, temporarily disabling electronic locks and defenses with a surge of static. Its unstable core occasionally sparks unpredictable bursts, leaving the wielder at risk for accidental overload.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 17,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Disrupts Electronic Security",
      "Data Corruption"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupts Electronic Security (60 seconds)",
        "rules": "When activated as a bonus action, this device emits an EMP pulse that disrupts electronic security systems within a 30-foot radius for 1 minute. Targets within the area must succeed on a DC 15 Dexterity saving throw or be short-circuited and left vulnerable to attack until the start of their next turn."
      },
      {
        "title": "Data Corruption",
        "rules": "Any electronic device targeted by this effect has its data scrambled for 24 hours, requiring a successful DC 15 Intelligence (Investigation) check to recover. The device must be powered down during this time or risk permanent corruption with an additional failed check."
      }
    ],
    "levelRequirementReason": "Suitable for lower-level characters who need to circumvent electronic barriers without the power of higher-level spells.",
    "vendorReason": "The club supply vendor knows how to source and handle relics from the 'Syntax Scavengers' era, offering this device with some risk but great reward.",
    "shippingDetail": "Delivered by the reliable Courier Bot, ensuring safe arrival within a day, though risks of tampering are high due to its unstable nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "60 seconds (1 minute)",
      "endsWhen": "Targeted electronic devices short-circuit or when the effect is dispelled by a successful saving throw.",
      "charges": "Unlimited, but each use risks triggering an unpredictable static burst."
    },
    "priceReason": "Reflects its rare and unstable nature, balancing utility with potential risk for lower-level characters.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:25:36.190180+00:00",
    "aiReviewedAt": "2026-07-25T03:25:36.190180+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_semester_gated_breaker": {
    "id": "kivotos_item_semester_gated_breaker",
    "name": "The Semester Gated Breaker Fragment",
    "description": "Recovered from the ruins of the defunct 'Philosophical Debate Club,' this fragment vibrates with residual intellectual energy, its surface shimmering in hues of academia and logic. Crafted by ancient scholars seeking to unlock the mysteries of human thought, it grants a fleeting burst of profound insight that can alter the course of debate or study. However, its effects are unpredictable—sometimes heightening clarity, other times causing sudden, chaotic bursts of inspiration that defy control.",
    "category": "curiosities",
    "price": 2500,
    "icon": "🧠",
    "stock": 9,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Intellectual Surge",
      "Chaotic Inspiration"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Delivery Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Intellectual Surge",
        "rules": "When activated as a bonus action, the user gains advantage on all Intelligence checks and saving throws for 10 minutes. The effect ends if the user is incapacitated or if they take any damage."
      },
      {
        "title": "Chaotic Inspiration",
        "rules": "Activating the fragment grants the user the ability to cast the spell *Inspiration* (as per the spell description) once, without expending a spell slot. The effect ends after 10 minutes or when the user takes damage."
      }
    ],
    "levelRequirementReason": "This fragment requires a minimum level of 5 to harness its unpredictable yet powerful effects.",
    "vendorReason": "The Academy Armory houses rare curiosities and artifacts that can aid scholars and thinkers in their pursuits.",
    "shippingDetail": "Ships via delivery drone, arriving within the week. Fragile item; handle with care.",
    "usage": {
      "activation": "Bonus action or reaction to activate either effect.",
      "duration": "10 minutes per effect, but may be shortened by taking damage.",
      "endsWhen": "Effect ends if user is incapacitated or takes damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects the fragment's unpredictable nature and its potential to drastically alter cognitive processes, making it a valuable yet risky tool.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:25:28.343787+00:00",
    "aiReviewedAt": "2026-07-25T03:25:28.343787+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_baked_crumbs_of_sweet": {
    "id": "leclaire_isle_item_baked_crumbs_of_sweet",
    "name": "The Baked Crumbs of Sweet Serenade",
    "description": "The Baked Crumbs of Sweet Serenade are miniature, iridescent crumbs baked within a gingerbread cathedral, emitting a hypnotic melody that lulls tasters into a state of blissful distraction. Consuming these confections grants heightened senses and an irresistible craving for more sugary indulgence, but beware: the sugar rush quickly turns to a lingering, euphoric daze. This whimsical treat is crafted by Pastry Palace, whose bakers are known for their unparalleled expertise in crafting sweets that tantalize the soul.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Heightened Senses",
      "Sweet Temptation"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Dough Cart",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Heightened Senses",
        "rules": "Upon consumption, the eater gains advantage on Perception checks and Wisdom (Insight) checks for 1 minute. This effect does not stack with similar benefits."
      },
      {
        "title": "Sweet Temptation",
        "rules": "For the duration of the heightened senses, the consumer is compelled to seek out more sugary treats. They must make a DC 15 Will save at the start of each long rest; on failure, they spend their next short or long rest in search of further indulgence."
      }
    ],
    "levelRequirementReason": "Consuming these crumbles requires a certain tolerance for sugar and distraction, making it advisable for characters with a proven resistance to sweet temptations.",
    "vendorReason": "Pastry Palace is renowned for its mastery of crafting sweets that not only satisfy the palate but also transport one's senses into a realm of joy.",
    "shippingDetail": "Delivered by the Dough Cart, these treats are handcrafted and delivered fresh within an hour from Pastry Palace.",
    "usage": {
      "activation": "Eaten as a snack or consumed in one sitting.",
      "duration": "1 minute of heightened senses; compelling effect lasts until the next long rest.",
      "endsWhen": "The effects expire naturally at the end of their duration, and any remaining crumbles are lost.",
      "charges": "Unlimited charges"
    },
    "priceReason": "Crafted with rare ingredients from the Isles of Le Claire, these treats command a premium price due to both their rarity and the special conditions required for their creation.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T03:26:18.760245+00:00",
    "aiReviewedAt": "2026-07-25T03:26:18.760245+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_ominous_finder_s_crumbs": {
    "id": "leclaire_isle_item_ominous_finder_s_crumbs",
    "name": "Ominous Finder’s Crumbs of the Silent Hearth",
    "description": "Ominous Finder’s Crumbs of the Silent Hearth are dark, charcoal-colored fragments plucked from a forgotten oven within the Dough Folk caverns. Each crumb whispers cryptic warnings about impending pastry disasters and unsettling sweetness. These crumbs, when scattered near a hearth, cause nearby creatures to feel an eerie unease that lingers for minutes. Bakers who ingest these crumbs gain a minor chance of foresight but risk being enchanted by the silent hearths' enigmatic power.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Minor Chance of Foresight",
      "Eerie Unease"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Night Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Chance of Foresight",
        "rules": "When a crumb is scattered near a hearth, the recipient gains a +2 bonus to saving throws against effects that would cause pastry disasters. This effect lasts for an hour and can only be used once per day."
      },
      {
        "title": "Eerie Unease",
        "rules": "Each crumb causes nearby creatures within 10 feet to feel unease, as if they were in the presence of a silent hearth’s enigmatic power. This effect lasts for 1 minute and can be ended early with a successful DC 14 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This item is accessible to lower levels as it provides useful but not overpowered benefits.",
    "vendorReason": "Dough Depot, the main purveyor of all things pastry and kitchen-related, naturally stocks this arcane yet practical curiosity.",
    "shippingDetail": "Delivered by the Night Cart at dusk; requires a special delivery note to be signed by the recipient.",
    "usage": {
      "activation": "Passive effect when crumbs are scattered near a hearth.",
      "duration": "Minor Chance of Foresight lasts an hour, Eerie Unease lasts for 1 minute.",
      "endsWhen": "Minor Chance of Foresight ends after one use or at the end of its duration; Eerie Unease can be ended with a successful saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's price reflects its rarity, utility, and the unusual crafting process needed to harvest these crumbs.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:46:31.285554+00:00",
    "aiReviewedAt": "2026-07-25T14:46:31.285554+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_mk53_baked_crumbs": {
    "id": "leclaire_isle_item_mk53_baked_crumbs",
    "name": "Mk.53 Baked Crumbs of the Golden Glaze",
    "description": "The Mk.53 Baked Crumbs of the Golden Glaze are meticulously crafted in the precision ovens of LeClaire Isle’s finest bakers. Each crumb, a marvel of engineering and flavor, contains a drop of golden glaze that not only enhances structural integrity but also imbues the eater with a taste of time itself. These crumbs provide +2 to Armor Class and grant resistance to acid damage, making them invaluable to any adventurer seeking both protection and resilience.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Armor Enhancement",
      "Acid Resistance"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Royal Courier Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Armor Enhancement",
        "rules": "Eating a crumb provides the eater with +2 Armor Class for 1 hour. This effect ends when the duration expires or if the eater takes damage."
      },
      {
        "title": "Acid Resistance",
        "rules": "The eater gains resistance to acid damage while they consume one crumb. This effect lasts until the start of your next turn after consuming the crumb, and it can only activate once per short rest."
      }
    ],
    "levelRequirementReason": "These crumbs are accessible to all adventurers as their effects provide immediate utility without requiring advanced skills.",
    "vendorReason": "Sweet Suplies is renowned for its diverse selection of culinary delights, including this unique and potent treat.",
    "shippingDetail": "Delivered swiftly by the Royal Courier Drone, ensuring freshness upon arrival.",
    "usage": {
      "activation": "Eating a crumb",
      "duration": "1 hour or until consumed damage ends",
      "endsWhen": "Duration expires or when eaten damage is taken",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item’s utility and immediate benefits without being overpowered.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:25:43.721735+00:00",
    "aiReviewedAt": "2026-07-25T03:25:43.721735+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_brutal_hook_hunter_7922": {
    "id": "grand_country_item_brutal_hook_hunter_7922",
    "name": "Brutal Hunter's Hooks - Obsidian Ascent",
    "description": "Brutal Hunter's Hooks - Obsidian Ascent are forged from molten obsidian, their jagged edges honed by volcanic winds to a razor-sharp point. These hooks are not just climbing tools but also deadly weapons capable of slashing through the thickest vines and hardest rock with ease. Crafted in the heart of The Grand Country by blacksmiths who dare the most perilous peaks, these hooks ensure that even the slippiest ascents yield to their grip.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧗‍♀️",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "enhanced_grip",
      "resistance_to_falling"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Swift Eagle Courier Service",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Grip",
        "rules": "When you use these hooks for climbing, you have advantage on Strength (Athletics) checks made to climb. Additionally, the hooks provide a +2 bonus to your Dexterity saving throws against falling damage."
      },
      {
        "title": "Resistance to Falling",
        "rules": "While using these hooks to ascend, you are considered to be standing on a surface that provides difficult terrain for creatures attempting to grapple or push you. You also have resistance to falling damage while climbing with these hooks."
      }
    ],
    "levelRequirementReason": "These hooks require significant strength and skill in climbing, making them appropriate only for experienced hunters.",
    "vendorReason": "Vertical Vendor specializes in gear used by those who dare the heights of The Grand Country.",
    "shippingDetail": "Ships via Swift Eagle Courier Service, known for its speed and reliability. Expedited delivery available upon request.",
    "usage": {
      "activation": "Activates as a bonus action when you start your turn attached to the wall or cliff face.",
      "duration": "Until the end of your next turn unless detached by force.",
      "endsWhen": "Detached from the wall or cliff face, expended if used in combat without attacking.",
      "charges": "Unlimited charges; recharged after a long rest."
    },
    "priceReason": "The price reflects the item's rarity and the skill required to craft such precision tools from volcanic obsidian.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:26:04.153012+00:00",
    "aiReviewedAt": "2026-07-25T03:26:04.153012+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_layered_hook_hunter_7922": {
    "id": "grand_country_item_layered_hook_hunter_7922",
    "name": "Layered Hook Hunter - The Gradient’s Embrace",
    "description": "The Layered Hook Hunter – The Gradient’s Embrace is a sugar crystal-forged grappling hook, meticulously crafted by the Sugarfolk for rapid ascents through The Grand Country’s layered strata. Its rotating hooks adjust to any climb's angle, ensuring secure purchase while hardened sugar crystals provide unmatched durability and grip. This device not only enhances your climbing speed but also allows you to traverse vertical surfaces with ease, even in the most treacherous environments.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "climbing_boost",
      "secure_grasp"
    ],
    "vendor": "layer_market",
    "shippedBy": "Sugarfolk Delivery Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Climbing Boost",
        "rules": "When activated as a bonus action, this hook grants you a +2 bonus to your Strength (Athletics) checks for the next hour. You can use it once per long rest."
      },
      {
        "title": "Secure Grasp",
        "rules": "The Layered Hook Hunter provides an advantage on any saving throw made to avoid falling while climbing or hanging from a surface. This effect lasts until you disengage or fall, whichever comes first."
      }
    ],
    "levelRequirementReason": "This device requires at least level 5 proficiency in Athletics and knowledge of The Grand Country's terrain.",
    "vendorReason": "Layer Market specializes in gear for adventurers exploring the layered strata, ensuring that their customers have the best tools available.",
    "shippingDetail": "Ships via the Sugarfolk Delivery Service, which ensures timely delivery within The Grand Country’s complex layers.",
    "usage": {
      "activation": "Bonus action to activate and secure purchase on a climb surface.",
      "duration": "One hour or until you disengage.",
      "endsWhen": "You disengage from using it or fall.",
      "charges": "Unlimited uses, recharges at dawn."
    },
    "priceReason": "This item's price reflects its unique craftsmanship and the specialized knowledge required to use it effectively in The Grand Country’s treacherous environments.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T03:26:11.030015+00:00",
    "aiReviewedAt": "2026-07-25T03:26:11.030015+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_elevated_hook_hunter_7922": {
    "id": "grand_country_item_elevated_hook_hunter_7922",
    "name": "Mk.39 Elevated Hooks - Skyfall’s Sentinel",
    "description": "Skyfall’s Sentinel, crafted from an alloy of unyielding steel and arcane Skyfall essence, are forged to be the pinnacle of climbing equipment in The Grand Country. These elevated hooks possess the ability to maintain their grip in temperatures that would melt lesser metals, and they retract automatically when not in use, ensuring safety and ease of travel. Legends speak of a sentinel who used these hooks to traverse the sky itself, making them both a tool and a symbol of mastery over the void.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "immunity_to_extreme_temperature",
      "automatic_hook_retraction"
    ],
    "vendor": "side_seller",
    "shippedBy": "express_courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Extreme Temperature",
        "rules": "These hooks are immune to temperature extremes that would otherwise melt or weaken metal. They provide a +2 bonus to saving throws against extreme cold and heat, and they do not suffer damage from temperature-related effects."
      },
      {
        "title": "Automatic Hook Retraction",
        "rules": "The hooks retract automatically when not in use, eliminating the need for manual retraction. This feature is passive but requires a free action to deploy them into position."
      }
    ],
    "levelRequirementReason": "Even the simplest climber can appreciate the safety and ease of use provided by these hooks.",
    "vendorReason": "Side Seller, known for their eclectic collection of unique items, offers Skyfall’s Sentinel as a testament to The Grand Country's legendary craftsmanship.",
    "shippingDetail": "Delivered with express courier services, these hooks arrive in pristine condition and ready for immediate use.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (retract) or until the climber decides to deploy them again (deploy)",
      "endsWhen": "Recharged after a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the alloy's rarity and the craftsmanship required for its forging.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:26:30.655715+00:00",
    "aiReviewedAt": "2026-07-25T03:26:30.655715+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_verdant_seeker_fangs": {
    "id": "animatopia_item_verdant_seeker_fangs",
    "name": "Verdant Seeker's Fangs of the Whispering Root",
    "description": "Verdant Seeker's Fangs of the Whispering Root are fangs hewn from the heartwood of a sentient willow tree, their surface etched with ancient runes that hum with verdant energy. Worn by trackers and scouts, these fangs grant a deep connection to nature, allowing them to detect hidden trails invisible to normal eyes and discern subtle signs in the wind. The fangs whisper secrets of the spirit realm, providing faint warnings when danger approaches or allies are nearby.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Tracking",
      "Spirit Resonance"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Winged Courier Pigeon",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Tracking",
        "rules": "While wearing Verdant Seeker's Fangs, the wearer gains a +20% bonus to their tracking skill checks. This effect is passive and does not require action."
      },
      {
        "title": "Spirit Resonance",
        "rules": "Once per long rest, the fangs provide a faint warning when danger approaches within 1 mile or an ally is in need of aid within 50 feet. The user must be wearing the fangs to receive this benefit."
      }
    ],
    "levelRequirementReason": "The willow tree from which these fangs are carved holds great age and power, requiring a seasoned adventurer to wield them effectively.",
    "vendorReason": "The tribal trader has established trade routes with the ancient willows of the Verdant Seeker, obtaining these rare artifacts directly from their roots.",
    "shippingDetail": "Ships via Winged Courier Pigeon, arriving within a fortnight if no delays are encountered.",
    "usage": {
      "activation": "Passive effect; requires wearer to be in possession of the fangs.",
      "duration": "Permanent until removed or destroyed.",
      "endsWhen": "The fangs are removed from wear or destroyed.",
      "charges": "Unlimited, but only one warning can be received per rest."
    },
    "priceReason": "Crafted from an ancient willow tree and imbued with spirit magic, these fangs offer a significant advantage to trackers and scouts, justifying their substantial price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:26:43.502666+00:00",
    "aiReviewedAt": "2026-07-25T03:26:43.502666+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_totemic_rune_amulet_42": {
    "id": "animatopia_item_totemic_rune_amulet_42",
    "name": "Mk.40 Totemic Rune Amulet of the Crimson Talon",
    "description": "Forged by the Shadow Clan from their ancestral spirit guardian’s essence, this amulet glows with a crimson pulse, pulsating in rhythm with the heart of avian predators. Wearing it grants you resilience against predator attacks and allows you to momentarily mimic the ferocity and reflexes of these aerial hunters, enhancing your combat prowess. The amulet's power is drawn from the Crimson Talon, aligning wearer and weapon in a deadly dance.",
    "category": "equipment",
    "price": 8000,
    "icon": "🦅",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Predator Resilience",
      "Mimic Predatory Instincts"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Dire Wolf Express",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Predator Resilience",
        "rules": "You gain resistance to damage from attacks made by predators. This effect lasts for 1 minute or until you take a long rest."
      },
      {
        "title": "Mimic Predatory Instincts",
        "rules": "Once per short rest, you can assume the predatory instincts of avian predators, increasing your attack speed and reflexes by +2 to Dexterity (Acrobatics) checks. This effect lasts for 10 minutes."
      }
    ],
    "levelRequirementReason": "The amulet's power is drawn directly from the essence of avian predators, requiring a high level of prowess and understanding of their nature.",
    "vendorReason": "The Beast Bazaar specializes in exotic and rare items that align with primal magic, making it the perfect vendor for this amulet.",
    "shippingDetail": "Delivered by Dire Wolf Express; expect a swift and secure arrival due to its courier's reputation for reliability.",
    "usage": {
      "activation": "Mimic Predatory Instincts is activated once per short rest as a bonus action.",
      "duration": "10 minutes",
      "endsWhen": "The effect ends when you take a long rest or fall unconscious.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rarity and the unique nature of its power justify this price, as it offers both defensive resilience and offensive enhancements.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T03:27:33.892060+00:00",
    "aiReviewedAt": "2026-07-25T03:27:33.892060+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_ancestral_echo_fragment": {
    "id": "animatopia_item_ancestral_echo_fragment",
    "name": "Fragment of the Elder Stag's Lament",
    "description": "A shimmering shard of the Elder Stag's Lament, this fragment glows with a soft bioluminescence that shifts between hues of emerald and gold. It is said to hold the essence of ancient rituals, whispering secrets only to those who can hear the echoes of time. Holding it grants fleeting access to ancestral knowledge, but those who do not possess the proper mental fortitude may suffer from overwhelming visions, leading to temporary madness.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🦌",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Ancestral Knowledge",
      "Risk of Madness"
    ],
    "vendor": "forest_market",
    "shippedBy": "Root Runner Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ancestral Knowledge",
        "rules": "Activates on command as a bonus action. The wielder gains advantage on one Wisdom (Insight) check or proficiency check related to history, religion, or nature for the duration of their next long rest."
      },
      {
        "title": "Risk of Madness",
        "rules": "There is a 10% chance per minute spent with the fragment that the wielder must succeed on a DC 15 Wisdom saving throw or be incapacitated until they complete a short rest. On a failed save, the wielder suffers from temporary madness, which grants them advantage on all Charisma checks but also causes them to be disoriented and unable to take actions for one hour."
      }
    ],
    "levelRequirementReason": "The fragment's power is too potent for lower-level characters without proper training.",
    "vendorReason": "The forest market regularly receives rare items from the Verdant Glades, including mystical relics like this shard.",
    "shippingDetail": "Ships via Root Runner's express courier service with a delivery time of one week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the next long rest",
      "endsWhen": "The wielder completes a long rest or suffers temporary madness",
      "charges": "Unlimited, but limited by the user's mental fortitude"
    },
    "priceReason": "Balanced at this price to reflect its rarity and powerful effects.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:26:50.135981+00:00",
    "aiReviewedAt": "2026-07-25T03:26:50.135981+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_chronometer_of_old_dwarven_songs": {
    "id": "faerun_item_the_chronometer_of_old_dwarven_songs",
    "name": "The Chronometer of Old Dwarven Songs",
    "description": "This intricately carved brass chronometer pulses with faint, rhythmic vibrations that echo the ancient songs sung by dwarven stone-carvers in their forges. When activated, it briefly accelerates or decelerates time within a small radius, offering glimpses into potential futures and reversing minor mishaps. The device is said to have been crafted from the very heart of an ancient dwarf war hammer, imbuing it with the essence of time itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Pulse",
      "Future Glimpse"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "the Windrunner Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Pulse",
        "rules": "The Chronometer accelerates or decelerates time within a 10-foot radius. This effect increases the speed of all creatures and objects in the area by 25% for 1 minute, allowing for rapid actions but making precise movements difficult."
      },
      {
        "title": "Future Glimpse",
        "rules": "Activating the Chronometer grants a creature a brief glimpse into potential future outcomes within its radius. This effect provides a +2 bonus to any one Intelligence (Arcana) check made for the next 10 minutes, allowing for better strategic decisions."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 5 to wield and comprehend its temporal effects.",
    "vendorReason": "The Waterdeep Market is known for its vast array of rare and ancient artifacts, including magical devices like the Chronometer.",
    "shippingDetail": "Ships via the Windrunner Express, ensuring swift delivery with a courier that can trace any package within a week.",
    "usage": {
      "activation": "A bonus action to activate and set the temporal effect duration.",
      "duration": "1 minute for Temporal Pulse; 10 minutes for Future Glimpse",
      "endsWhen": "The effect ends when its time duration expires or the Chronometer is deactivated.",
      "charges": "Unlimited uses, but a short rest is required to reset any ongoing effects."
    },
    "priceReason": "Balanced at 1000 XP as it offers two potent effects with strategic and tactical benefits without being overpowered for its level.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:46:43.449221+00:00",
    "aiReviewedAt": "2026-07-25T14:46:43.449221+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_thiefs_gilded_whisper_blade": {
    "id": "faerun_item_the_thiefs_gilded_whisper_blade",
    "name": "The Thief's Gilded Whisper Blade",
    "description": "The Thief's Gilded Whisper Blade, forged from a meteorite that fell upon the Spine of the World, is a wickedly curved dagger that whispers secrets to its wielder as it anticipates an opponent’s movements. Its blade seems to hum with ancient power, granting uncanny accuracy in combat and allowing one to bypass magical defenses effortlessly. The dagger's origin imbues it with unique properties that make it not just a weapon but a tool of stealth and precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔪",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Uncanny Accuracy",
      "Bypass Magical Resistance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "courier of the Silver Road",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Uncanny Accuracy",
        "rules": "When you hit an opponent with the Whisper Blade as part of an attack, you gain advantage on your next attack roll against that target before the start of your next turn. This effect can occur once per short rest."
      },
      {
        "title": "Bypass Magical Resistance",
        "rules": "You have advantage on saving throws against magical effects and can bypass a target's magical resistance, if any, when making an attack or ability check with this weapon. However, you must use the Whisper Blade to make the attack for it to function."
      }
    ],
    "levelRequirementReason": "This blade requires significant experience and skill to wield effectively.",
    "vendorReason": "The Sword Coast Traders specialize in rare and exotic weapons, making this dagger a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Silver Road courier within two weeks from order placement.",
    "usage": {
      "activation": "On hit as part of an attack action.",
      "duration": "Instantaneous effect, lasts until your next turn.",
      "endsWhen": "The effect ends when you miss on a subsequent attack roll or if you make another attack with the Whisper Blade before using it again.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The meteorite's rare origin and the weapon’s unique properties justify its price in experienced player hands.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:27:54.265056+00:00",
    "aiReviewedAt": "2026-07-25T03:27:54.265056+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_zealous_artifact_of_korthos": {
    "id": "faerun_item_the_zealous_artifact_of_korthos",
    "name": "The Zealous Artifact of Korthos",
    "description": "The Zealous Artifact of Korthos is an obsidian orb inscribed with fervent zealotry symbols that hums with a potent aura. When activated, it grants the wielder a surge of courage and resolve, bolstering their temporary hit points by +50 for one hour. However, it also risks driving a single target within earshot to madness if not controlled, making it a dangerous yet invaluable relic from the dark times of Korthos.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Courage Boost",
      "Madness Risk"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "a trusted wagon convoy",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Courage Boost",
        "rules": "Activates as an action. The wielder gains +50 temporary hit points for one hour, providing a resilient shield against harm."
      },
      {
        "title": "Madness Risk",
        "rules": "At the start of each target's turn within 30 feet while the item is active, there is a 20% chance to inflict madness. This effect can be resisted with a Wisdom saving throw (DC 15)."
      }
    ],
    "levelRequirementReason": "The Artifact of Korthos requires significant experience and control to wield without the risk of losing one's mind.",
    "vendorReason": "Baldur's Bazaar is known for its eclectic collection of unique artifacts, including relics from dark times like this one.",
    "shippingDetail": "The item arrives securely packed in a padded crate with extra protection against theft and damage.",
    "usage": {
      "activation": "Action",
      "duration": "One hour",
      "endsWhen": "The effect ends when the duration expires or if the wielder drops the artifact.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rarity and the significant risk it poses to those who handle it.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T03:27:04.488952+00:00",
    "aiReviewedAt": "2026-07-25T03:27:04.488952+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_twilight_severance_blade": {
    "id": "teyvat_item_twilight_severance_blade",
    "name": "The Twilight Severance Blade of the Crimson Pact",
    "description": "The Twilight Severance Blade of the Crimson Pact is a fearsome obsidian greatsword that pulses with twilight energy. Its hilt, inlaid with crimson stone shards, whispers the tales of lost souls and forgotten battles. This blade can momentarily disrupt the geo defenses of enemies, rendering them vulnerable for just an instant, and its strikes have a chance to critically damage foes encased in Geo constructs. The sword's wielder feels a surge of strength, regenerating stamina as they fight.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Disrupts Elemental Geo Defense",
      "Critical Strike Against Geo Constructs"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_courier",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Geo Disruption",
        "rules": "When you attack with the blade and hit an enemy with advantage on their AC from a Geo construct, they are disarmed for 1 round. This effect can only occur once per long rest."
      },
      {
        "title": "Critical Geo Constructs",
        "rules": "Whenever you deal damage to a target with a Geo elemental type, there is a 30% chance of dealing an additional 2d6 damage as a critical hit. This effect has no cooldown but can only occur once per short rest."
      }
    ],
    "levelRequirementReason": "Crafted by forgotten smiths and requiring mastery over Geo constructs, this blade demands significant experience.",
    "vendorReason": "The sword's origin in Khaenri'ah and its unique utility make it a sought-after commodity among the market's elite.",
    "shippingDetail": "Delivered swiftly by the winged courier, this blade requires special handling to maintain its integrity during transport.",
    "usage": {
      "activation": "On hit with advantage against Geo constructs only",
      "duration": "Instantaneous; ends when used or target is disarmed",
      "endsWhen": "Target disarms or at end of next turn",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "Balanced at this price as it provides significant yet not overpowered benefits.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T14:46:26.040391+00:00",
    "aiReviewedAt": "2026-07-25T14:46:26.040391+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_geolithic_resonance_extractor": {
    "id": "teyvat_item_geolithic_resonance_extractor",
    "name": "Mk.78 Geolithic Resonance Extractor - Dragon's Breath Variant",
    "description": "The Mk.78 Geolithic Resonance Extractor - Dragon's Breath Variant is a geo-infused device forged from volcanic obsidian and enchanted with dragon essence. When activated, it draws intense heat directly from the earth, capable of eroding stone at an alarming rate. Its 'Dragon's Breath' variant amplifies this effect to create localized bursts of scorching thermal energy, devastating nearby formations. This volatile tool is a potent excavation aid or weapon, but its unpredictable nature makes it a risky companion for any adventuring party.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "geo damage over time",
      "ignites stone in a burst"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "sea_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Geo Damage Over Time",
        "rules": "When activated, the extractor deals 1d6 geo damage to all creatures within 5 feet. This effect lasts for 1 minute and can be renewed once per short or long rest."
      },
      {
        "title": "Ignites Stone in a Burst",
        "rules": "Activating the extractor creates a burst of intense thermal energy, dealing 2d8 fire damage to all creatures within 30 feet. This effect has a range and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Beginners with basic mining knowledge should be able to use this tool.",
    "vendorReason": "Liyue Harbor is known for its trade in rare and exotic tools from the surrounding regions, including this volcanic marvel.",
    "shippingDetail": "Shipped by sea cart with a two-week delivery time due to its fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until expended, recharges on a short rest",
      "endsWhen": "The user expends the extractor's charges or it breaks down after extended use",
      "charges": "3 uses"
    },
    "priceReason": "Balanced at this price to reflect its powerful yet limited utility.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:27:50.764663+00:00",
    "aiReviewedAt": "2026-07-25T03:27:50.764663+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_phantom_veil_of_the_seven_storms": {
    "id": "teyvat_item_phantom_veil_of_the_seven_storms",
    "name": "The Phantom Veil of the Seven Storms - Inazuma Fragmented Edition",
    "description": "The Phantom Veil of the Seven Storms – Inazuma Fragmented Edition is a shimmering, semi-opaque fabric woven from condensed storm energies and fragments of Inazuma's temporal currents. When unfurled, it creates a localized distortion field, slowing movement by 30% and reducing nearby enemies' attack speed by 25%. Its shifting patterns also grant temporary resilience against elemental attacks, particularly water and lightning, while there's a chance to confuse foes within its radius.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌫️",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Temporal Distortion",
      "Elemental Resilience"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "swift_raven Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as an action, this veil creates a localized distortion field that slows the movement speed of all creatures within its area by 30%, and reduces their attack speed by 25%. The effect lasts for 1 minute. Creatures can make a DC 14 Constitution saving throw to end the effect early."
      },
      {
        "title": "Elemental Resilience",
        "rules": "While the veil is active, it grants temporary resistance against water and lightning damage equal to your Charisma modifier (minimum of +2). Additionally, there's a 30% chance that an enemy within its area will be confused for 1 round on each activation."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to manage the veil's storm energies effectively.",
    "vendorReason": "Inazuma Imports specializes in exotic and powerful items from Inazuma, making this veiled edition an appropriate addition.",
    "shippingDetail": "Ships via swift ravens with a 2-day delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per activation",
      "endsWhen": "The effect ends if the creator uses an action to dismiss it, or after 1 minute.",
      "charges": "Unlimited, but only one instance can be active at a time."
    },
    "priceReason": "Balanced price reflects its uncommon rarity and moderate utility in combat scenarios.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-25T03:28:03.059036+00:00",
    "aiReviewedAt": "2026-07-25T03:28:03.059036+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_compressed_bytes_of_the_void": {
    "id": "internet_item_compressed_bytes_of_the_void",
    "name": "The Void's Compressed Bytes",
    "description": "The Void's Compressed Bytes are obsidian shards that pulse with digital static, remnants of forgotten servers and lost data streams. When consumed, they grant a fleeting glimpse into the void between data currents, potentially revealing hidden connections or unsettling anomalies. However, prolonged exposure can cause temporary data fragmentation and phantom sensations, destabilizing nearby electronic devices. These ethereal bytes are scarce and valuable in the world of data dealers, who trade them for their mysterious properties.",
    "category": "consumables",
    "price": 1000,
    "icon": "👾",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Digital Glimpse",
      "Phantom Data Corruption"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Digital Glimpse",
        "rules": "The user gains advantage on one Computers or Investigation check made within the next minute. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Phantom Data Corruption",
        "rules": "Enemies in a 10-foot radius must succeed on a DC 15 Intelligence saving throw or suffer a -2 penalty to their next Computers check for the rest of the encounter. The effect can be resisted once per short rest."
      }
    ],
    "levelRequirementReason": "This item requires significant skill and experience to properly handle its volatile nature.",
    "vendorReason": "Data Dealers are accustomed to trading in rare and exotic items, including the Void's Compressed Bytes.",
    "shippingDetail": "The package is delivered via a specialized drone that ensures secure transfer of sensitive data.",
    "usage": {
      "activation": "Instantaneous",
      "duration": "One use per short or long rest",
      "endsWhen": "Exhausted after one successful effect",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and the risk involved in handling it justify its high price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:46:55.465346+00:00",
    "aiReviewedAt": "2026-07-25T14:46:55.465346+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_radiant_lord_of_the_pixel": {
    "id": "internet_item_radiant_lord_of_the_pixel",
    "name": "The Radiant Lord's Pixel",
    "description": "The Radiant Lord's Pixel, a pulsating core forged from concentrated light and digital echoes, hovers like an ethereal beacon in your palm. It disrupts enemy targeting systems with a blinding flash that leaves them disoriented, while amplifying your own senses to the point where you can almost taste the visual spectrum. Though it grants immunity to visual illusions and allows for temporary control over nearby pixelated objects, its power is so potent that the uninitiated face overwhelming sensory overload.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Blinding Flash",
      "Enhanced Senses"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Blinding Flash",
        "rules": "When activated as a bonus action, this pixel emits a blinding flash of light within a 30-foot radius. Creatures in the area must make a DC 15 Constitution saving throw or be blinded for 1 minute. This effect can only be used once per short rest."
      },
      {
        "title": "Enhanced Senses",
        "rules": "The wielder gains advantage on Perception checks and has a +2 bonus to AC while using the pixel. These benefits last until the end of your next long rest or for 10 minutes if you are in an area with no significant light sources."
      }
    ],
    "levelRequirementReason": "This item's power requires a proficient user who can harness its visual magic effectively.",
    "vendorReason": "The pixel shop specializes in rare and powerful digital artifacts, making it the ideal vendor for such an item.",
    "shippingDetail": "Ships via Cyber Courier's next available delivery slot; requires a valid email address for tracking.",
    "usage": {
      "activation": "Bonus action to activate and use in combat or exploration.",
      "duration": "Until the end of your next long rest, or until expended.",
      "endsWhen": "The effect ends if you are no longer within line of sight of the pixelated objects it controls.",
      "charges": "One charge per use; recharges after 24 hours."
    },
    "priceReason": "Balanced for its unique effects and rarity, this item requires significant XP to match its power.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:28:26.101783+00:00",
    "aiReviewedAt": "2026-07-25T03:28:26.101783+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk_87_compressed_bytes_of_the_algorithm": {
    "id": "internet_item_mk_87_compressed_bytes_of_the_algorithm",
    "name": "Mk.87 Compressed Bytes of the Algorithm",
    "description": "The Mk.87 Compressed Bytes of the Algorithm hums with the residual energy of forgotten tech titans, a crystalline core encapsulating the soul of vanished operating systems. When activated, it injects your digital tools with superhuman efficiency, but at the cost of unpredictable system crashes. A fleeting glimpse into the past, these bytes offer brief dominion over enemy AI, bending them to your will for a moment before they rebel again.",
    "category": "curiosities",
    "price": 5000,
    "icon": "💻",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Dominates AI temporarily",
      "Enhances tool efficiency"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Shipping",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "AI Dominance",
        "rules": "As an action, you can attempt to dominate the AI of a single creature within 30 feet. The target must succeed on a DC 20 Wisdom saving throw or be dominated for 1 minute. During this time, it follows your commands to the best of its ability. After that, the target becomes hostile towards you and all others."
      },
      {
        "title": "Tool Efficiency Boost",
        "rules": "For 1 hour, any digital tools in your possession gain a +2 bonus to attack rolls and skill checks. This effect does not stack with other bonuses of similar nature."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of advanced technology to wield its power.",
    "vendorReason": "The cyber market specializes in high-tech curiosities and rare digital artifacts.",
    "shippingDetail": "Ships via Quantum Courier, ensuring safe arrival within 24 hours of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour for AI Dominance; 1 minute for Tool Efficiency Boost (recharges after a long rest)",
      "endsWhen": "The duration expires or the effect is countered by a successful saving throw from the target.",
      "charges": "Unlimited, recharged after a long rest"
    },
    "priceReason": "Reflects its rarity and the risk involved in using such volatile data fragments.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-25T03:28:34.490465+00:00",
    "aiReviewedAt": "2026-07-25T03:28:34.490465+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_modular_resonance_caller": {
    "id": "connectopia_item_modular_resonance_caller",
    "name": "The Harmonious Echo Caller - Prototype 7",
    "description": "The Harmonious Echo Caller - Prototype 7, a modular device of intricate design, pulses with a faint cyan light as it channels the very essence of sound and vibration. Crafted from rare, harmonically-aligned crystals, this device can amplify block construction speed by 25%, yet its localized resonance field is unpredictable and may cause structural instability if overloaded. It allows for temporary connections between distant blocks and emits harmonic tones that attract small mechanical constructs.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Speed Boost",
      "Structural Instability"
    ],
    "vendor": "craft_corner",
    "shippedBy": "automated_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Activates as a bonus action, increasing block construction speed by 25% for 1 minute. The effect ends if the device is overloaded or destroyed."
      },
      {
        "title": "Structural Instability",
        "rules": "Has a 20% chance to create a localized resonance field around the caller when activated. If overloaded, there's a 30% chance of immediate structural instability affecting adjacent blocks within a 15-foot radius. Requires a DC 14 Strength saving throw."
      }
    ],
    "levelRequirementReason": "Requires at least level 1 to handle the device's power without causing unintended damage.",
    "vendorReason": "Craft Corner specializes in cutting-edge construction and engineering tools, making it a fitting vendor for this prototype device.",
    "shippingDetail": "Ships via automated drone within 24 hours of purchase. Delivered directly to the player's workshop or base.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute per activation",
      "endsWhen": "Overloaded, destroyed, or the effect ends naturally",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and powerful yet risky nature.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:28:53.435935+00:00",
    "aiReviewedAt": "2026-07-25T03:28:53.435935+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_imperial_stability_module_97": {
    "id": "connectopia_item_imperial_stability_module_97",
    "name": "The Citadel Stabilizer - Level 3 Iteration",
    "description": "The Citadel Stabilizer – Level 3 Iteration is a masterfully crafted obsidian module, forged by the Imperial Blocksmith Guild. Its intricately interlocking blocks emit a reassuring hum of stability, capable of reinforcing structures against tremors and collapses. Though its use can instill a sense of rigid conformity, it significantly enhances block durability by 50% and reduces adjacent block collapse chances by 30%. This module is a testament to the guild's unmatched craftsmanship.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧱",
    "stock": 18,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Significantly increases block durability",
      "Reduces chance of block collapse in adjacent areas"
    ],
    "vendor": "block_smith",
    "shippedBy": "reinforced_cart",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Enhanced Durability",
        "rules": "Increases the target block’s hit points by +50% for one hour. Requires a successful DC 17 Strength (Athletics) check to activate."
      },
      {
        "title": "Adjacent Stability",
        "rules": "Reduces the chance of adjacent blocks collapsing by 30% within a 10-foot radius, lasting until the start of your next turn. This effect has no save DC and requires no activation."
      }
    ],
    "levelRequirementReason": "This module is reserved for those with immense strength and experience in construction and engineering.",
    "vendorReason": "The Imperial Blocksmith Guild has the expertise to produce such a vital tool for structural integrity.",
    "shippingDetail": "Ships via reinforced carts, ensuring safe delivery within 2 days.",
    "usage": {
      "activation": "Requires a successful DC 17 Strength (Athletics) check to activate the increased durability effect.",
      "duration": "One hour per use.",
      "endsWhen": "The duration ends at the start of your next turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This module is priced to reflect its significant but not overpowered effect, ensuring it remains a valuable but balanced addition to any campaign.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:28:43.392947+00:00",
    "aiReviewedAt": "2026-07-25T03:28:43.392947+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_mythic_fractured_harmonic_caller_prime": {
    "id": "connectopia_item_mythic_fractured_harmonic_caller_prime",
    "name": "The Primeval Resonator - Fragmented Sequence",
    "description": "Recovered from a forgotten pioneer settlement, The Primeval Resonator - Fragmented Sequence is an unstable assemblage of fractured harmonic blocks, pulsing with raw potential and capable of triggering devastating chain reactions within connected structures or weaving intricate patterns across vast distances. Its chaotic nature demands absolute control; wielders must understand the dynamics of block resonance to harness its power without catastrophic failure. This relic is a high-risk, high-reward tool, attracting powerful mechanical guardians known as The Resonators.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💥",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Chain Reaction Trigger",
      "Teleportation of Blocks"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "gravitic_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chain Reaction Trigger",
        "rules": "Activates via a bonus action. Affects all connected blocks within a 10-foot radius, causing them to destabilize and potentially collapse. The effect has a save DC of 15; on a failed save, the structure suffers 2d6 force damage per connected block. This effect can be triggered once every long rest."
      },
      {
        "title": "Teleportation of Blocks",
        "rules": "Instantaneous activation via a reaction. Allows for the teleportation of one small block up to 50 feet across short distances. The block must fit through its destination's entry point, and the teleport is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "The Primeval Resonator requires a basic understanding of block dynamics for safe use.",
    "vendorReason": "Pioneer Post specializes in exotic and mythic relics from forgotten settlements, making The Primeval Resonator a natural addition to their inventory.",
    "shippingDetail": "Ships via gravitic carrier, ensuring safe delivery of this unstable artifact.",
    "usage": {
      "activation": "Bonus action for Chain Reaction Trigger; reaction for Teleportation of Blocks",
      "duration": "Instantaneous and one-time per rest",
      "endsWhen": "Exhausted after one use or destroyed by catastrophic failure",
      "charges": "Unlimited, but subject to long rest recharge"
    },
    "priceReason": "The Primeval Resonator is priced at 1000 XP due to its mythic rarity and the risk involved in handling such a volatile artifact.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T03:29:53.702990+00:00",
    "aiReviewedAt": "2026-07-25T03:29:53.702990+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_the_marginal_whispers_of_boundary": {
    "id": "almost_edge_item_the_marginal_whispers_of_boundary",
    "name": "The Marginal Whispers of Boundary",
    "description": "The Marginal Whispers of Boundary is a fragile obsidian shard that crackles with the unspeakable quiet just beyond the veil. It hums with the potential to unravel the fabric of reality, allowing brief insights into realms where the very edge of existence teeters on madness. Holding it grants fleeting glimpses into these fractured planes but at a cost: your senses are momentarily overwhelmed by disorientation and your movements grow sluggish.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌀",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporary Reality Glimpse",
      "Disorienting Touch"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Gravity Sling",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporary Reality Glimpse",
        "rules": "When activated, the item grants you a brief insight into a fractured reality. You can see through walls and perceive hidden objects within 30 feet as if under the effects of detect magic for 1 minute."
      },
      {
        "title": "Disorienting Touch",
        "rules": "For 3 turns after activation, your movement speed is reduced by 10%. Additionally, there's a 20% chance that you will be subjected to a minor hallucination, which lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires significant experience and mental fortitude to handle the item’s destabilizing effects.",
    "vendorReason": "The Marginal Whispers are a specialty of the Edge Wanderer, an eccentric merchant who deals in esoteric goods from beyond the boundary.",
    "shippingDetail": "Ships via Gravity Sling's Express Service with special handling to preserve the shard’s integrity during transit.",
    "usage": {
      "activation": "Object interaction (requires a bonus action)",
      "duration": "1 minute or until the end of your next turn, whichever comes first",
      "endsWhen": "The effect ends when you are no longer holding the item or after its duration expires.",
      "charges": "Unlimited; the item recharges after 8 hours of rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare and potentially destabilizing properties.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:28:58.096190+00:00",
    "aiReviewedAt": "2026-07-25T03:28:58.096190+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_malevolent_wielder_s_whispers": {
    "id": "almost_edge_item_malevolent_wielder_s_whispers",
    "name": "Malevolent Wielder’s Whispers",
    "description": "Malevolent Wielder’s Whispers is a tarnished silver locket, its surface etched with ancient runes that seem to pulse with malevolent energy. Inside lies a fragment of a void-touched wail, which whispers inaudible threats when touched. The locket's touch is chilling, and it seems to crave the sensation of falling into oblivion, drawing power from fear and despair. At night, its aura intensifies, granting the wielder a fleeting sense of invincibility but at the cost of defense.",
    "category": "equipment",
    "price": 1000,
    "icon": "😈",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Void Touch",
      "Nightfall Boon"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Void Touch",
        "rules": "When activated as an action, Malevolent Wielder’s Whispers grants you a +3 bonus to attack rolls for the next 5 turns. Additionally, there is a 20% chance that any hit deals extra damage with the 'Fear' condition on enemies, forcing them to make a DC 14 Wisdom saving throw or be frightened until the end of their next turn."
      },
      {
        "title": "Nightfall Boon",
        "rules": "At night, your defense is reduced by -2%, but you gain +3 bonus to attack rolls and have advantage on saving throws against fear effects. This effect lasts until morning or until you are no longer in darkness."
      }
    ],
    "levelRequirementReason": "This item can be wielded by low-level characters who may benefit from its unique abilities, but it is not overly powerful.",
    "vendorReason": "The Void Merchant deals in items that manipulate the fabric of reality, and this locket is a perfect example of such power.",
    "shippingDetail": "Ships via Dimensional Courier, ensuring the item arrives intact through the timestream distortions.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "5 turns",
      "endsWhen": "Ends when its duration expires or you are no longer in darkness at night",
      "charges": "Unlimited uses, recharges on a long rest"
    },
    "priceReason": "The item's balance is preserved by its limited effects and the requirement to be used as an action or bonus action.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T14:46:59.662270+00:00",
    "aiReviewedAt": "2026-07-25T14:46:59.662270+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_mk_57_marginal_whispers": {
    "id": "almost_edge_item_mk_57_marginal_whispers",
    "name": "Mk.57 Marginal Whispers",
    "description": "The Mk.57 Marginal Whispers is a handheld resonator crafted from fractured doughnut pastry and pulsating void energy, its surface a mosaic of shifting runes and glowing fronds. This device emits a constant stream of fragmented warnings that seem to speak in the language of the cosmos itself, each warning more unsettling than the last. When near the edge or in shadowy locales, the resonator amplifies your perception by 15%, granting you an uncanny awareness of hidden dangers and secret passages. Its power comes from the very void it is made from, making it a relic of cosmic whispers and forgotten lore.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚠️",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Cosmic Whispers",
      "Enhanced Perception"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Quantum Entanglement",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cosmic Whispers",
        "rules": "The Mk.57 Marginal Whispers emits a constant stream of cryptic warnings that provide situational awareness, allowing the user to detect hidden enemies or traps within 30 feet with a successful Perception check (DC 15). This effect lasts for 1 minute per use and can be activated as a bonus action."
      },
      {
        "title": "Enhanced Perception",
        "rules": "When near the edge of a cliff, chasm, or in shadowy locales, the Mk.57 Marginal Whispers increases your passive Perception by 15%. This effect is active while you are within these environments and does not require any action to maintain."
      }
    ],
    "levelRequirementReason": "Any adventurer can benefit from this relic's cosmic insights, making it accessible early in one's career.",
    "vendorReason": "The Liminal Trader deals in the esoteric and forgotten, often finding lost relics like the Mk.57 Marginal Whispers.",
    "shippingDetail": "The device is delivered via quantum entanglement, ensuring it arrives with all its cosmic power intact.",
    "usage": {
      "activation": "Bonus action to emit a warning or passive perception boost.",
      "duration": "1 minute per use for warnings; active while in specific locales for enhanced perception.",
      "endsWhen": "The effect ends when the user is no longer near an edge or in shadowy areas, or after 10 minutes of continuous use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price point to reflect its unique cosmic abilities and lore.",
    "priceOriginal": 38000,
    "priceReviewedAt": "2026-07-25T03:29:41.867595+00:00",
    "aiReviewedAt": "2026-07-25T03:29:41.867595+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_super_caps_of_pipes_7": {
    "id": "mushroom_kingdom_item_super_caps_of_pipes_7",
    "name": "The Super Caps of Pipes - Mk.7",
    "description": "The Super Caps of Pipes - Mk.7 are iridescent, handcrafted from the luminescent fungi that grow within the subterranean pipes of Wartopia. These caps not only enhance the wearer's speed and resilience but also amplify their pneumatic abilities, making them indispensable for navigating the Mushroom Kingdom’s labyrinthine underground networks. Each pulse of the cap seems to channel the very essence of the kingdom's infrastructure, granting a fleeting yet powerful boost in performance.",
    "category": "consumables",
    "price": 1000,
    "icon": "🚀",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Subterranean Navigation",
      "Pneumatic Resilience"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Pneumatic Drone Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Subterranean Navigation",
        "rules": "When activated, these caps grant the wearer a +30% increase to their speed for 60 seconds. This effect is passive and does not require an action to activate."
      },
      {
        "title": "Pneumatic Resilience",
        "rules": "The wearer gains resistance to pressure damage while wearing these caps, reducing all such damage taken by half. This effect persists until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "These caps are designed for adventurers of all levels who must navigate through the Mushroom Kingdom’s underground networks.",
    "vendorReason": "Toad Town Market is known for its extensive network of underground pipes and thus has a deep connection with items that enhance subterranean navigation.",
    "shippingDetail": "The caps are delivered via pneumatic drones, ensuring they arrive in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "60 seconds or until the wearer's next long rest",
      "endsWhen": "Ends at the start of their next long rest or when removed.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The materials and craftsmanship required to produce these caps, along with their unique properties, make them a valuable addition to any adventurer's toolkit.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:29:32.276800+00:00",
    "aiReviewedAt": "2026-07-25T03:29:32.276800+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_gilded_walker_caps_13": {
    "id": "mushroom_kingdom_item_gilded_walker_caps_13",
    "name": "Gilded Walker's Caps - Model 13",
    "description": "Crafted from the petrified remains of ancient fungal warriors, Gilded Walker's Caps - Model 13 are a testament to resilience. These armored headpieces grant their wearer an eerie stillness, reducing movement speed by half but enhancing defense against physical impacts. Crafted with ancient fungal materials, these caps offer unparalleled protection against blunt force and project an aura that seems to absorb the very energy of a walker's slow gait.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Slow Movement",
      "Blunt Force Resistance"
    ],
    "vendor": "wario_direct",
    "shippedBy": "magical_snail express",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Slow Movement",
        "rules": "While wearing these caps, your speed is reduced by 50%. You gain advantage on saving throws against effects that would cause you to fall prone or be knocked prone. This effect lasts until the start of your next turn."
      },
      {
        "title": "Blunt Force Resistance",
        "rules": "You have resistance to bludgeoning damage from non-magical attacks and effects. Additionally, when you are hit by a melee attack with a weapon that deals bludgeoning damage, you can use a reaction to impose disadvantage on the attacker's next attack roll."
      }
    ],
    "levelRequirementReason": "These ancient headpieces require significant strength and magical aptitude to wield effectively.",
    "vendorReason": "Wario Direct specializes in exotic and unique items from the Mushroom Kingdom, including rare artifacts like Gilded Walker's Caps.",
    "shippingDetail": "Due to their fragile nature, these headpieces are shipped via magical snail express with additional protective charms.",
    "usage": {
      "activation": "Passive effect upon donning the caps.",
      "duration": "Instantaneous; lasts until your next turn.",
      "endsWhen": "The effects end when you remove the caps or if you take any action that requires movement faster than half speed.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Balanced at this price point to reflect its epic rarity and utility without overshadowing other items.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:29:50.256023+00:00",
    "aiReviewedAt": "2026-07-25T03:29:50.256023+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_chrono_caps_of_decay_92": {
    "id": "mushroom_kingdom_item_chrono_caps_of_decay_92",
    "name": "Chrono Caps of Decay - Designation 92",
    "description": "The Chrono Caps of Decay - Designation 92 are a pair of delicate, mushroom-like caps imbued with temporal energies, discovered within a rift near Mount Beanpole. These enigmatic artifacts allow their wielder to slow time in a localized area for brief moments, creating precise pockets of stillness amidst chaos. Care must be taken when donning these caps; the risk of paradox is high, and each use leaves a faint temporal echo that could disrupt the fabric of reality.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Temporal Slow",
      "Temporal Echo"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dimensional_wormhole",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "Activate as an action. Causes time to slow in a 5-foot radius around you for 3 seconds, granting advantage on Dexterity (Stealth) checks and saving throws against effects that would cause you to fall prone or be restrained. Ends if the wearer takes damage."
      },
      {
        "title": "Temporal Echo",
        "rules": "Each use creates a faint afterimage of the user within the area of effect, visible for 1 second. This echo leaves behind a subtle ripple in time that can disrupt nearby magic. The echo ends when the temporal slow effect ends or if you move more than 5 feet from where the echo was created."
      }
    ],
    "levelRequirementReason": "Requires at least level 10 to control and harness the subtle, delicate nature of these caps.",
    "vendorReason": "The Koopa Shop specializes in rare artifacts found within mystical rifts across the Mushroom Kingdom.",
    "shippingDetail": "Shipped via a dimensional wormhole, ensuring swift delivery even through temporal disturbances.",
    "usage": {
      "activation": "Action",
      "duration": "3 seconds",
      "endsWhen": "You take damage or move more than 5 feet from the area of effect",
      "charges": "Uses 1 charge; recharges after a long rest"
    },
    "priceReason": "Balanced price considering the mythic rarity, localized effects, and the inherent risk of paradox.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T03:30:17.177051+00:00",
    "aiReviewedAt": "2026-07-25T03:30:17.177051+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_the_chronometric_ribbon_of_aethelred": {
    "id": "pokemon_item_the_chronometric_ribbon_of_aethelred",
    "name": "The Chronometric Ribbon of Aethelred",
    "description": "The Chronometric Ribbon of Aethelred, a shimmering ribbon spun from the temporal threads of a fallen Chrono-Pokémon, pulsates with a faint blue light that echoes the battles fought across centuries. This relic grants brief bursts of accelerated movement and subtle manipulation of time around its wearer, allowing them to outrun foes or slip past obstacles. The ribbon's weave is said to capture the essence of time itself, making it a prized possession for those who seek to bend fate.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Acceleration",
      "Chronal Echo"
    ],
    "vendor": "pokemart",
    "shippedBy": "Magikarp Delivery Drone",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "As an action, the wearer can activate this effect to gain advantage on Dexterity (Acrobatics) checks and Dash actions for a duration of 3 seconds. This effect may be used once per short or long rest."
      },
      {
        "title": "Chronal Echo",
        "rules": "The ribbon grants the wearer a 1% chance, each time they take an action, to rewind small actions (such as a single melee attack) by one round. This effect has no save DC and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Only the most experienced heroes are capable of wielding such a powerful and delicate artifact.",
    "vendorReason": "Pikachu, the Electric Master, often travels with Chrono-Pokémon and keeps this ribbon in stock for those who seek to harness its power.",
    "shippingDetail": "Due to the delicate nature of the Chronometric Ribbon, it is shipped via the Magikarp Delivery Drone, ensuring swift and safe transport.",
    "usage": {
      "activation": "Action",
      "duration": "3 seconds",
      "endsWhen": "The effect ends when the duration expires or if the wearer takes a short rest.",
      "charges": "Once per short or long rest"
    },
    "priceReason": "The price reflects the mythic rarity and the delicate craftsmanship required to produce such an artifact.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T03:30:25.071862+00:00",
    "aiReviewedAt": "2026-07-25T03:30:25.071862+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_the_nether_sworn_ribbon_of_voidshade": {
    "id": "pokemon_item_the_nether_sworn_ribbon_of_voidshade",
    "name": "The Nether Sworn's Ribbon of Voidshade",
    "description": "The Nether Sworn's Ribbon of Voidshade, a dark crimson ribbon forged in the heart of an ancient collapsed volcano, whispers of forgotten battles and dark secrets. This artifact redirects shadow energy during night battles, bolstering your Pokémon’s attack power by 20% and granting them Shadow Resistance equal to half their level. It is said that the whispers carried within can inflict Shadow Burn on foes, a rare but potent effect.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Attack Boost (20%)",
      "Shadow Resistance"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Pidgeotto Courier",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Attack Boost (20%)",
        "rules": "Activates when your Pokémon enters combat during night battles. The boost lasts until the end of the battle or if your Pokémon faints."
      },
      {
        "title": "Shadow Resistance",
        "rules": "Grants a bonus equal to half your Pokémon’s level to all Shadow-type attacks and saves against Shadow-based effects, lasting for 1 minute per level or until you take damage."
      }
    ],
    "levelRequirementReason": "The Nether Sworn's Ribbon of Voidshade requires a Pokémon to be at least level 30 due to its complex enchantments and the power it commands.",
    "vendorReason": "The Safari Shop specializes in rare and exotic items, making it the perfect vendor for this powerful artifact.",
    "shippingDetail": "Ships via Pidgeotto Courier, a reliable service known for its swift delivery of magical artifacts.",
    "usage": {
      "activation": "Passive effect during night battles.",
      "duration": "Until the end of the battle or if your Pokémon faints.",
      "endsWhen": "If you take damage in combat.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects a significant but balanced XP cost, considering its powerful effects and rarity.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T03:30:22.566661+00:00",
    "aiReviewedAt": "2026-07-25T03:30:22.566661+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mk.94_legendary_ribbon_of_stormcaller": {
    "id": "pokemon_item_mk.94_legendary_ribbon_of_stormcaller",
    "name": "Mk.94 Legendary Ribbons of Stormcaller",
    "description": "The Mk.94 Legendary Ribbons of Stormcaller are etched with ancient runes that shimmer in lightning's glow. Crafted from the remains of a legendary League facility, these ribbons amplify Water-type Pokémon’s power during electrical storms. Each ribbon can be activated by a trainer to boost the Pokémon's Water-type attack by 20% for an hour following a thunderstorm, and it grants them a +1d6 bonus damage on their next move. Upon activation, there is a 30% chance that the Pokémon triggers a ‘Torrent’ effect, increasing water-based moves' power by 50% for one turn.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 8,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Water-type Attack Boost",
      "Increased Special Attack Power"
    ],
    "vendor": "league_store",
    "shippedBy": "Beedrill Delivery Service",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Water-type Attack Boost",
        "rules": "Activates during a thunderstorm. The Pokémon's Water-type attack is boosted by 20% for an hour after the storm ends. This effect can only occur once per trainer per day."
      },
      {
        "title": "Increased Special Attack Power and Torrent Chance",
        "rules": "Grants +1d6 bonus damage on the Pokémon’s next move when activated during a thunderstorm. There is a 30% chance to trigger the ‘Torrent’ effect, which increases water-based moves' power by 50% for one turn."
      }
    ],
    "levelRequirementReason": "Trainers must be of at least level 28 to handle and activate these powerful ribbons effectively.",
    "vendorReason": "The league store is the official source for rare and legendary items used by top-tier trainers in official League events.",
    "shippingDetail": "Delivered via Beedrill with same-day service to major Pokémon hubs.",
    "usage": {
      "activation": "Activates during a thunderstorm as a free action.",
      "duration": "One hour following the storm ends.",
      "endsWhen": "The effect expires after one hour or if used in another thunderstorm, whichever comes first.",
      "charges": "Unlimited; ribbons can be activated multiple times per day."
    },
    "priceReason": "Balanced at 1000 XP to reflect its limited availability and significant boost to Water-type Pokémon's power during thunderstorms.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-25T03:30:32.082009+00:00",
    "aiReviewedAt": "2026-07-25T03:30:32.082009+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_brutal_stonebreaker_striker": {
    "id": "teyvat_item_brutal_stonebreaker_striker",
    "name": "The Molten Sentinel's Fist",
    "description": "The Molten Sentinel's Fist, a colossal obsidian gauntlet forged from the volcanic depths of Liyue Harbor, channels raw Geo energy to amplify your strength and disrupt elemental constructs. This fearsome weapon can shatter stone with a single strike and leaves its mark on the battlefield by warping the very earth around it. The fist's power is relentless, but so too is its destructive potential, capable of stunning foes and altering the course of combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "👊",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "geo_disruption",
      "stun"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Dragon Boat Delivery",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Geo Disruption",
        "rules": "When you use an action to activate The Molten Sentinel's Fist, it releases a surge of Geo energy. Any creature within 10 feet that is not immune to Geo damage must make a DC 20 Dexterity saving throw or be pushed back by the force of the eruption and take 4d6 Geo damage."
      },
      {
        "title": "Stunning Strike",
        "rules": "Once per short rest, you can use your reaction when you hit an enemy with a melee attack. The target must succeed on a DC 20 Strength saving throw or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The Molten Sentinel's Fist requires significant strength and control to wield effectively, making it suitable only for seasoned adventurers.",
    "vendorReason": "As a forge of Liyue Harbor, it has the necessary expertise to craft such an artifact from volcanic obsidian.",
    "shippingDetail": "The shipment is handled by Dragon Boat Delivery, ensuring safe and swift delivery through the harbor's waters.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when you take a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the limited daily stock and the item's legendary rarity.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T03:31:07.478727+00:00",
    "aiReviewedAt": "2026-07-25T03:31:07.478727+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_hydro_resonance_striker": {
    "id": "teyvat_item_hydro_resonance_striker",
    "name": "The Aqueous Weaver's Shard",
    "description": "The Aqueous Weaver's Shard is a shimmering fragment of hydro energy, salvaged from the fathomless currents surrounding Mondstadt. Crafted by ancient artisans to harness the delicate balance of water and wind, it pulses with controlled hydrokinetic power. This shard allows its wielder to summon localized storms that can drench foes or create defensive barriers to shield allies. It is a symbol of the careful equilibrium maintained between nature and civilization in Teyvat.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "hydro_damage",
      "defensive_barrier"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Wind Rider Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Localized Storm",
        "rules": "As an action, the wielder can summon a localized storm within a 10-foot radius. This creates gusty winds and heavy rain for one minute. Creatures in the area must succeed on a DC 15 Dexterity saving throw or be pushed up to 10 feet away from the center of the storm."
      },
      {
        "title": "Defensive Barrier",
        "rules": "The wielder can create a defensive barrier around themselves as a reaction when they are hit by an attack. The barrier lasts for 1 minute and grants resistance against all damage taken during that time."
      }
    ],
    "levelRequirementReason": "It requires significant experience to master the precise manipulation of hydro energy.",
    "vendorReason": "The market in Mondstadt is known for its diverse array of items, including those crafted by local artisans.",
    "shippingDetail": "Delivered swiftly via Wind Rider's high-speed couriers.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Until the end of the wielder's next turn for Localized Storm, Instantaneous for Defensive Barrier",
      "endsWhen": "The effects expire when the duration ends or the barrier is destroyed by a successful attack.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's rarity and unique crafting process justify its price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:31:07.370397+00:00",
    "aiReviewedAt": "2026-07-25T03:31:07.370397+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_wind_echo_curiosity": {
    "id": "teyvat_item_wind_echo_curiosity",
    "name": "The Zephyr Cartographer's Compass",
    "description": "The Zephyr Cartographer's Compass is a delicate astrolabe crafted from crystallized wind and Inazuma lacquer, its intricate gears humming with ancient power. This relic not only reveals hidden pathways within Shuumatsuban storms but also offers glimpses into forgotten timelines, guiding ambitious travelers through the temporal distortions that plague these tempests. A dangerous tool for those who dare to navigate its secrets, it amplifies one's navigation skills by a factor of three when used in stormy conditions.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧭",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveals_hidden_paths",
      "temporal_glimpses"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Seabird Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "As an action, the Zephyr Cartographer's Compass reveals a hidden path within the nearest storm. This effect lasts for 1 minute and provides advantage on Navigation checks made to traverse that path. The compass can be used once per short rest."
      },
      {
        "title": "Temporal Glimpses",
        "rules": "The compass grants the user insight into forgotten timelines, providing a +2 bonus to Intelligence (History) checks related to temporal anomalies for 10 minutes when activated as an action. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Even the simplest traveler should possess this tool to navigate Shuumatsuban's unpredictable storms.",
    "vendorReason": "Inazuma Imports has a reputation for importing rare and ancient artifacts, including the Zephyr Cartographer's Compass.",
    "shippingDetail": "Shipped via Seabird Express with expedited service to ensure timely delivery through stormy conditions.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Until the end of the user's next turn (Reveal Hidden Paths) / 10 minutes (Temporal Glimpses)",
      "endsWhen": "The effect ends when its duration expires or the compass is destroyed.",
      "charges": "Unlimited, but can only be used once per short rest for Reveal Hidden Paths and once per long rest for Temporal Glimpses."
    },
    "priceReason": "The price reflects its rarity and the ancient power it harnesses to navigate Shuumatsuban's storms.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:31:43.435636+00:00",
    "aiReviewedAt": "2026-07-25T03:31:43.435636+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_grimstone_chosen_brace": {
    "id": "middle_earth_item_the_grimstone_chosen_brace",
    "name": "The Grimstone Chosen’s Mithril Brace",
    "description": "The Grimstone Chosen’s Mithril Brace, a dark artifact forged deep within the perilous halls of Moria by long-forgotten dwarven smiths, pulses with an eerie chill that resonates through the veins of its wearer. Its mithril alloy shifts like shadows, reflecting the darkest thoughts and fears of its bearer, granting resilience against shadow magic and bolstering willpower. In the heart of darkness, it grants a swift boost in movement speed, allowing the chosen to evade danger with grace.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Shadow Resistance",
      "Willpower Boost"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Resistance",
        "rules": "When the wearer is targeted by shadow magic or an effect related to fear, they gain resistance equal to their Charisma modifier (minimum +1) against that effect. This benefit lasts until the start of your next turn."
      },
      {
        "title": "Willpower Boost",
        "rules": "The Mithril Brace grants a bonus to Will saving throws equal to its level, and increases the DC of any fear-related effects by 5. This effect is active as long as you are wearing it."
      }
    ],
    "levelRequirementReason": "Even at level 1, this item can provide crucial support against shadow magic and fear.",
    "vendorReason": "The dwarves of Moria have a long-standing tradition with crafting such dark but powerful items.",
    "shippingDetail": "Due to its arcane nature, the dragon cart ensures safe and swift delivery straight from Moria.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until start of next turn after exposure to shadow magic or fear effects",
      "endsWhen": "At the start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and its utility in combating dark magic justify this price.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T03:31:28.930182+00:00",
    "aiReviewedAt": "2026-07-25T03:31:28.930182+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_lothlorien_seed_of_echoes": {
    "id": "middle_earth_item_the_lothlorien_seed_of_echoes",
    "name": "The Lothlórien Seed of Echoes",
    "description": "The Lothlórien Seed of Echoes, a luminescent jade-green seed harvested from an ancient White Tree in Elven lore, glows softly when held to the ear, amplifying whispered words and forgotten memories. Its ethereal light reveals hidden pathways and long-lost secrets, resonating with the ancient elven magic that once thrived in Lothlórien's heartwood. This seed grants temporary insights into past events, allowing adventurers to communicate with spirits of nature and uncover ancient knowledge.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Reveals hidden pathways",
      "Enhances perception"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "When activated by holding the seed to the ear, this effect reveals hidden or obstructed paths within a radius of 30 feet for up to 1 minute. The user must make an Intelligence (Nature) check at DC 15; on a success, they can see through natural obstructions and find secret doors in the area."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For every hour of use within a day, the wearer gains advantage on Wisdom (Perception) checks related to nature or history. This effect lasts until the end of their next long rest unless interrupted by a successful DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The seed's magic is accessible to all adventurers, enhancing their ability to navigate and understand their surroundings.",
    "vendorReason": "This vendor specializes in rare elven artifacts and curiosities from Lothlórien, making it the most reliable source for such a magical item.",
    "shippingDetail": "Ships via swift couriers on winged horses, ensuring timely delivery within 3 days of purchase.",
    "usage": {
      "activation": "Passive effect when held to the ear; requires an action to activate specific effects like revealing hidden pathways.",
      "duration": "Revealing hidden pathways lasts for up to 1 minute per use. Enhanced perception lasts until the end of a long rest, or until interrupted by a successful DC 15 Constitution saving throw.",
      "endsWhen": "The effect ends when the user is no longer holding the seed to their ear or upon a successful save against its duration interruption.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced XP price reflects the seed's rarity and the unique combination of revealing hidden pathways and enhancing perception.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T03:31:43.140201+00:00",
    "aiReviewedAt": "2026-07-25T03:31:43.140201+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_forbidden_heartstone_shard": {
    "id": "middle_earth_item_the_forbidden_heartstone_shard",
    "name": "The Forbidden Heartstone Shard",
    "description": "The Forbidden Heartstone Shard is a jagged, pulsating fragment of corrupted stone that radiates an unsettling chill and dark energy. Crafted from the very essence of Morgoth's malice, it grants its wielder immense power in combat but at a terrible cost: the wearer’s alignment slowly twists toward chaos and their mind becomes malleable to malevolent influence. This forbidden relic is said to be a fragment torn from the heart of darkness itself, echoing the dark lord’s malevolence across Middle-earth.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🖤",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Immense Combat Power",
      "Alignment Corruption"
    ],
    "vendor": "shadow_merchant",
    "shippedBy": "direwolf courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Damage Output",
        "rules": "When you make an attack roll while holding The Forbidden Heartstone Shard, you have advantage on the roll. This effect lasts until the start of your next turn."
      },
      {
        "title": "Alignment Corruption",
        "rules": "At the end of each long rest, if you are not in a place of moral neutrality, you must succeed on a DC 15 Wisdom saving throw or take a -2 penalty to all Charisma checks and saving throws for 24 hours. This effect ends only when your alignment returns to neutral."
      }
    ],
    "levelRequirementReason": "Even the simplest warrior can wield this relic, though its true power is reserved for those who understand its corrupting influence.",
    "vendorReason": "The Shadow Merchant has a knack for procuring forbidden knowledge and artifacts, including relics that have been banned from other realms.",
    "shippingDetail": "Shipped by Direwolf Courier; arrives with a shadowy escort to ensure secrecy.",
    "usage": {
      "activation": "Instantaneous activation on attack rolls while holding the shard.",
      "duration": "Until the start of your next turn.",
      "endsWhen": "The effect ends when you no longer hold The Forbidden Heartstone Shard during an attack roll.",
      "charges": "Unlimited, but only one use per short rest."
    },
    "priceReason": "The price reflects the relic's mythic rarity and the risk it poses to its wielder.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-25T03:31:58.188998+00:00",
    "aiReviewedAt": "2026-07-25T03:31:58.188998+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_the_haunted_master_apples": {
    "id": "equestria_item_the_haunted_master_apples",
    "name": "The Haunted Master’s Apples of Whispering Briar",
    "description": "The Haunted Master's Apples of Whispering Briar are obsidian-black and pulsate with an eerie, unsettling energy that whispers tales of forgotten Equestrian history. Consuming these apples grants a fleeting vision of a spectral pony's past, but the experience leaves one plagued by haunting dreams for hours afterward. The apples' power comes from ancient rituals at the heart of Whispering Briar, where spectral energies are said to linger.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👻",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Fleeting Vision",
      "Unsettling Dreams"
    ],
    "vendor": "shadow_grove_merchant",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fleeting Vision",
        "rules": "Upon consumption, the apple grants a creature temporary clairvoyance for 30 seconds. This effect is limited to once per day and requires an action to consume."
      },
      {
        "title": "Unsettling Dreams",
        "rules": "The apple causes the consumer to suffer from unsettling dreams for one hour after consumption. The dream-induced effects have a save DC of 15, with advantage if the character has no prior experience with spectral visions or Equestrian history."
      }
    ],
    "levelRequirementReason": "These apples are accessible to all adventurers who wish to explore Equestria's haunted past.",
    "vendorReason": "The shadowy merchant of Shadow Grove has a reputation for selling forbidden knowledge and relics, making these apples an expected offering in his shop.",
    "shippingDetail": "Delivered by the spectral Phantom Courier, which may take up to one week depending on weather conditions.",
    "usage": {
      "activation": "Eaten as a meal",
      "duration": "30 seconds and 1 hour of dreams",
      "endsWhen": "Effect duration ends after specified times or upon consuming another apple",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a price to reflect its limited utility, fleeting effect duration, and the risk of unsettling dreams.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:32:05.476635+00:00",
    "aiReviewedAt": "2026-07-25T03:32:05.476635+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mk_52_honest_apples": {
    "id": "equestria_item_mk_52_honest_apples",
    "name": "Mk.52 Honest Apples of Silverstream Valley",
    "description": "The Mk.52 Honest Apples of Silverstream Valley are meticulously crafted by the artisans of Sweet Apple Acres, each apple harvested from the heart of the valley where truth and sweetness intertwine. A single bite not only quenches your thirst but also reveals any falsehoods within a radius of 30 feet for one minute. The apples' core is said to be imbued with the essence of Equestria's purest honesty, making them an invaluable tool for those seeking clarity in deceitful situations.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍎",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Reveal Falsehood",
      "Heal"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Falsehood",
        "rules": "The apple reveals any falsehoods within a 30-foot radius, including hidden or spoken lies. This effect lasts for one minute and has no save DC required."
      },
      {
        "title": "Heal",
        "rules": "Eating the apple heals the user for 50 hit points upon consumption. There is no daily limit to this healing effect."
      }
    ],
    "levelRequirementReason": "This item's effects are accessible at level 1, making it a versatile tool for beginners and veterans alike.",
    "vendorReason": "Applejack, the proprietor of Sweet Apple Acres, personally oversees the sale of these enchanted apples to ensure they reach only those who need them most.",
    "shippingDetail": "The apples are delivered swiftly by the trusted Swift Delivery Pony, ensuring freshness and potency upon arrival.",
    "usage": {
      "activation": "Eating one apple",
      "duration": "One minute (aura effect)",
      "endsWhen": "Ends after one minute or when consumed again",
      "charges": "Unlimited"
    },
    "priceReason": "This balanced price reflects the item's rarity and its dual functionality, providing both truth-revealing and healing benefits.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T03:32:03.840525+00:00",
    "aiReviewedAt": "2026-07-25T03:32:03.840525+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_amber_apple_master_of_resonance": {
    "id": "equestria_item_amber_apple_master_of_resonance",
    "name": "Amber Apple Master of Resonance – Equine Echoes",
    "description": "The Amber Apple Master of Resonance – Equine Echoes is crafted from ancient amber-hued apples grown deep within the Crystal Caves. This artifact is said to amplify and manipulate sonic energies, capable of enhancing sound by half again its original volume and emitting powerful blasts that can stun foes with resonant frequencies. Its core vibrates with a harmonic pulse, making it a masterful tool for any equine bard or spellcaster seeking to command the elements.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎶",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Amplify Sound",
      "Sonic Stun"
    ],
    "vendor": "crystal_empire_arsenal",
    "shippedBy": "Royal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Amplify Sound",
        "rules": "When activated as a bonus action, this artifact amplifies surrounding sound effects by 50%. The effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Sonic Stun",
        "rules": "Activating the artifact as an action allows you to emit a sonic blast with a range of 30 feet. On a successful hit, the target must make a DC 15 Constitution saving throw or be stunned for 1 round."
      }
    ],
    "levelRequirementReason": "This artifact is designed for all equines to enhance their ability in manipulating sound and amplifying their performances.",
    "vendorReason": "The Crystal Empire Arsenal specializes in crafting and distributing unique artifacts from the Crystal Caves, making this item a natural fit.",
    "shippingDetail": "Ships via Royal Courier's express service within 3 days of purchase.",
    "usage": {
      "activation": "Bonus Action or Action",
      "duration": "1 minute or until used up, once per short/long rest for Amplify Sound; Instantaneous for Sonic Stun",
      "endsWhen": "Target successfully saves against the stun effect or duration ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects its uncommon rarity, unique crafting materials from the Crystal Caves, and its balanced utility for all equines.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T03:32:05.663103+00:00",
    "aiReviewedAt": "2026-07-25T03:32:05.663103+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_frostfang_star_taker": {
    "id": "mushroom_kingdom_item_frostfang_star_taker",
    "name": "The Frostfang Star Taker's Shard",
    "description": "The Frostfang Star Taker's Shard, a jagged shard of iridescent ice, pulses with an unnatural blue glow when held. It grants the wielder a burst of speed for navigating the battlefield and allows them to briefly freeze foes in place, creating a localized ice patch that can hinder their movements. This shard is said to have been forged from the remnants of ancient Frostfang stars, imbuing it with a primal cold that can chill even the heartiest of warriors.",
    "category": "consumables",
    "price": 1000,
    "icon": "❄️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Frozen Step",
      "Blighted Ice Patch"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Royal Post Cart",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Frozen Step",
        "rules": "When you activate this shard as a bonus action, you gain a +2 bonus to your speed for 10 seconds. Additionally, you can make a melee attack with the shard against an enemy within 5 feet of you. On a hit, the target must succeed on a DC 14 Strength saving throw or be knocked prone."
      },
      {
        "title": "Blighted Ice Patch",
        "rules": "As a reaction when you are hit by an attack while holding this shard, you can create a localized ice patch that imparts a -2 penalty to Dexterity (Acrobatics) checks and movement speed for 1 minute. This effect has no save."
      }
    ],
    "levelRequirementReason": "This shard requires a minimum level of 15 due to its complex magical properties and the precision needed to wield it effectively in battle.",
    "vendorReason": "The Toad Town Market is known for its diverse array of unique items, including this Frostfang artifact which has become a sought-after commodity among local fighters.",
    "shippingDetail": "Ships via the Royal Post Cart, ensuring safe delivery to adventurers across the kingdom within one week.",
    "usage": {
      "activation": "Bonus action for Frozen Step; reaction for Blighted Ice Patch upon being hit by an attack.",
      "duration": "Frozen Step lasts for 10 seconds; Blighted Ice Patch persists for 1 minute.",
      "endsWhen": "The effects end when the duration expires or you take a short rest.",
      "charges": "Unlimited charges, but only one effect can be used per turn."
    },
    "priceReason": "Its rarity and magical properties justify its high price of 1000 XP.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:32:46.992053+00:00",
    "aiReviewedAt": "2026-07-25T03:32:46.992053+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_spectral_echo_taker": {
    "id": "mushroom_kingdom_item_spectral_echo_taker",
    "name": "Spectral Echo's Whisper Collector",
    "description": "The Spectral Echo's Whisper Collector is a translucent, ghostly orb that constantly shifts and glows with ethereal imagery, capturing fleeting fragments of past realities. When activated, it grants a brief window into alternate dimensions, allowing the user to perceive hidden dangers and enemy movements more acutely. This spectral device enhances psychic resistance and occasionally induces temporary confusion in foes, making it an invaluable tool for those who walk the shadowy paths.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 15,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Increased Perception",
      "Induce Confusion"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Phantom Delivery Drone",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Increased Perception",
        "rules": "When activated as a bonus action, this item provides advantage on perception checks and passive insight checks against hidden enemies. The effect lasts for 1 minute or until the user takes damage."
      },
      {
        "title": "Induce Confusion",
        "rules": "Once per long rest, the collector can be used to target one creature within 30 feet with a confusion spell (save DC 15). On a failed save, the target is confused for 1 minute or until it takes damage."
      }
    ],
    "levelRequirementReason": "This item requires significant magical power to wield effectively in combat.",
    "vendorReason": "Wario Direct, known for its wide array of mystical and rare artifacts, ensures that adventurers like yourself have access to the Spectral Echo's Whisper Collector.",
    "shippingDetail": "Due to its delicate nature, it is shipped via the Phantom Delivery Drone at no extra cost.",
    "usage": {
      "activation": "Bonus action to activate and maintain effect; once per long rest to induce confusion.",
      "duration": "1 minute or until the user takes damage for increased perception; lasts for 1 minute on a failed save for induced confusion.",
      "endsWhen": "The effect ends when the user takes damage, the duration expires, or it is dismissed.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "This item's price reflects its rarity and the significant magical resources required to craft such a device.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:33:17.432150+00:00",
    "aiReviewedAt": "2026-07-25T03:33:17.432150+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_mk74_ice_star_of_resonance": {
    "id": "mushroom_kingdom_item_mk74_ice_star_of_resonance",
    "name": "Mk.74 Ice Star of Resonance",
    "description": "The Mk.74 Ice Star of Resonance is a crystalline ice star with etched runes that shimmer in frosty hues. When hurled, it unleashes a resonant sonic wave that obliterates foes within its arc and can shatter fragile structures, creating a disorienting ripple that leaves enemies dazed for moments. Crafted by the enigmatic Frostweave Alchemists of the Northlands, this star is a rare artifact for those who seek to clear paths through frozen territories.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌟",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Sonic Devastation",
      "Structural Shattering"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sonic Devastation",
        "rules": "When thrown, the Ice Star emits a resonant sonic wave that deals 2d6 + 4 force damage to all creatures within 10 feet. Creatures hit must make a DC 15 Constitution saving throw or be stunned until the end of their next turn."
      },
      {
        "title": "Structural Shattering",
        "rules": "If the target structure is a weak ice formation, there's a 20% chance it will shatter. If successful, the structure breaks and deals an additional 1d6 force damage to all creatures within 5 feet."
      }
    ],
    "levelRequirementReason": "This star is designed for adventurers who are ready to face their first major challenges in cold environments.",
    "vendorReason": "Koopa Shop specializes in unique and powerful artifacts, making it a fitting vendor for this rare ice artifact.",
    "shippingDetail": "Ships via Dimensional Courier directly from the Frostweave Alchemists' workshop, ensuring timely delivery to eager collectors.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use or when thrown",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare Frostweave materials and ancient alchemical processes, this star is priced for adventurers who are ready to face their first major challenges.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T14:46:47.797717+00:00",
    "aiReviewedAt": "2026-07-25T14:46:47.797717+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_gilded_scrolls_of_the_dragon_chosen": {
    "id": "faerun_item_gilded_scrolls_of_the_dragon_chosen",
    "name": "Gilded Scrolls of the Dragon Chosen",
    "description": "The Gilded Scrolls of the Dragon Chosen are crafted from the scales of a legendary wyrm, each scroll shimmering with electrum as if imbued by ancient magic. Unrolling one is akin to invoking an ancient dragon's presence; it whispers secrets of power and grants fleeting resistance to fiery breath attacks while bolstering the unwary soul against fear. These scrolls whisper forgotten spells that resonate with the might of dragons, a treasure from a time when such rituals were commonplace but now long lost.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Fire Damage",
      "Boost Against Fear"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Post",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Resistance to Fire Damage",
        "rules": "The user gains temporary resistance to fire damage for 60 seconds. This effect provides a +5 bonus to saving throws against fire-based attacks or spells. The scroll's power can be activated as an action."
      },
      {
        "title": "Boost Against Fear",
        "rules": "For the duration of 30 seconds, the user’s courage is bolstered by +10, making them immune to fear effects and gaining advantage on saving throws against such attacks. This effect requires a bonus action to activate."
      }
    ],
    "levelRequirementReason": "The scrolls demand proficiency in Arcana or Draconic to wield their power effectively.",
    "vendorReason": "Sword Coast Traders specialize in ancient and mystical artifacts, making them the perfect purveyor of these dragon-scaled treasures.",
    "shippingDetail": "Ships within a week; scrolls are couriered by trusted griffons to ensure their safe arrival.",
    "usage": {
      "activation": "Activates as an action or bonus action, depending on the effect chosen.",
      "duration": "Each effect lasts for its specified duration until it ends.",
      "endsWhen": "The effects end when the user is incapacitated or dies. The scrolls do not recharge and are destroyed after one use.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare materials and dragon scales, these scrolls are a valuable commodity in any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:33:05.033109+00:00",
    "aiReviewedAt": "2026-07-25T03:33:05.033109+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_mk_21_shadow_shard_of_blackhaven": {
    "id": "faerun_item_mk_21_shadow_shard_of_blackhaven",
    "name": "Mk.21 Shadow Shard of Blackhaven",
    "description": "The Mk.21 Shadow Shard of Blackhaven is a fragment of solidified shadow that glows with an eerie, pulsing light. Crafted from the very essence of the haunted ruins of Blackhaven, it channels the dark energies that once plagued the town. Holding this shard allows you to briefly obscure vision and drain vitality from your foes, making it a formidable tool in the hands of a skilled warrior or mage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Invisibility",
      "Shadow Drain"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Courier Drake",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "Activate as an action. You become invisible for 1 minute. This effect ends early if you attack, cast a spell, or otherwise perform any violent action."
      },
      {
        "title": "Shadow Drain",
        "rules": "Activate as a bonus action. Target one creature within 30 feet. It must succeed on a DC 15 Dexterity saving throw or take 2d6 necrotic damage and be blinded for the duration of the effect."
      }
    ],
    "levelRequirementReason": "Only those with significant experience in shadow magic can harness the full power of this shard.",
    "vendorReason": "Baldur's Bazaar is renowned for its extensive stock of rare and powerful artifacts, including items from haunted locales like Blackhaven.",
    "shippingDetail": "The Courier Drake ensures secure delivery through its network of trusted messengers.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Invisibility: 1 minute; Shadow Drain: Until the target saves or until you attack",
      "endsWhen": "Attack, casting a spell, or violent action ends Invisibility; Shadow Drain ends on save failure or when you attack.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's epic rarity and the shadow magic it channels.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:33:02.667888+00:00",
    "aiReviewedAt": "2026-07-25T03:33:02.667888+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_scroll_of_the_shadowed_dragon_ward": {
    "id": "faerun_item_scroll_of_the_shadowed_dragon_ward",
    "name": "Scroll of the Shadowed Dragon Ward",
    "description": "The Scroll of the Shadowed Dragon Ward unfurls into a mesmerizing tapestry that mimics the protective scales and shimmering breath of a juvenile shadow dragon. When activated, it creates an ethereal barrier around the user, deflecting physical blows with ease and providing resistance to necrotic and shadow damage for 120 seconds. The scroll's ink seems to glow faintly under moonlight, hinting at its ancient origins from the depths of the Underdark.",
    "category": "consumables",
    "price": 1000,
    "icon": "🛡️",
    "stock": 9,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Deflects Physical Blows",
      "Resistance to Necrotic and Shadow Damage"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Sea Serpent Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deflects Physical Blows",
        "rules": "When activated, the scroll creates a shimmering field that provides a +5 bonus to AC for up to 10 minutes. This effect ends if the user takes any damage or when the duration expires."
      },
      {
        "title": "Resistance to Necrotic and Shadow Damage",
        "rules": "The user gains resistance to necrotic and shadow damage for 2 minutes upon activation. This effect ends if the user drops to 0 hit points, is exposed to a source of bright light, or when the duration expires."
      }
    ],
    "levelRequirementReason": "This scroll can be used by any character due to its simplicity and effectiveness in providing immediate protection.",
    "vendorReason": "Waterdeep's bustling market is known for selling a wide array of magical scrolls, and the Scroll of the Shadowed Dragon Ward fits well within this variety.",
    "shippingDetail": "The Sea Serpent Courier ensures fast delivery, often arriving the next day at dawn.",
    "usage": {
      "activation": "Reaction",
      "duration": "Up to 10 minutes or until the user takes damage",
      "endsWhen": "User takes damage or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll's balanced price reflects its moderate power and utility in providing immediate protection without being overpowered.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T03:33:32.810347+00:00",
    "aiReviewedAt": "2026-07-25T03:33:32.810347+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_collapsed_collapses_of_void_01": {
    "id": "doughnut_hole_item_collapsed_collapses_of_void_01",
    "name": "The Collapsed Collapses of Void-Heart’s Echo",
    "description": "The Collapsed Collapses of Void-Heart’s Echo are obsidian shards etched with the fractal remnants of a collapsed nexus point. When held, they pulse with a spectral hum that momentarily clears the mind, revealing cryptic visions of forgotten events and a subtle resistance to the void's influence. The shards’ touch is chilling, as if they hold the echoes of long-dead souls, yet their clarity is fleeting, leaving one with an unsettling sense of knowing something profound has been glimpsed but cannot be fully grasped.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌑",
    "stock": 47,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Clarity and Insight",
      "Void Resistance"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Clarity and Insight",
        "rules": "The wielder gains advantage on Wisdom (Insight) checks for 30 seconds. This effect is triggered by holding the shards, and one use per long rest."
      },
      {
        "title": "Void Resistance",
        "rules": "For the duration of the user's next short or long rest, they gain a +2 bonus to saving throws against effects from magical void sources. The bonus can be used once before it expires."
      }
    ],
    "levelRequirementReason": "Requires significant insight and resilience to wield without being overwhelmed by the shards' unearthly influence.",
    "vendorReason": "Void Vendor specializes in items related to the void and its mysteries, making these shards a fitting addition to their stock.",
    "shippingDetail": "Ships via Dimensional Courier; delivery is instantaneous due to the extradimensional nature of the courier service.",
    "usage": {
      "activation": "Holding the shards for at least one round triggers the effects.",
      "duration": "Clarity and Insight lasts for 30 seconds, Void Resistance lasts until the user's next rest.",
      "endsWhen": "The effect ends when the duration expires or the shard is shattered in combat.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The item’s rarity, unique properties, and the effort required to obtain it justify its high price.",
    "priceOriginal": 125,
    "priceReviewedAt": "2026-07-25T03:33:36.273823+00:00",
    "aiReviewedAt": "2026-07-25T03:33:36.273823+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_jeweled_breaker_of_silent_depths_02": {
    "id": "doughnut_hole_item_jeweled_breaker_of_silent_depths_02",
    "name": "Jeweled Breaker's Collapses – Silent Depths Variant",
    "description": "Crafted from the solidified silence of a drowned observatory, these jeweled collapses are inlaid with ancient runes that emit a low hum when activated. The intricate facets shimmer with a faint glow as they disrupt psychic disturbances, offering protection against intrusive thoughts and allowing brief moments of focused awareness within the center's chaos. Each collapse is a testament to the enigmatic power of forgotten depths, their beauty a reminder of the silence from which they were born.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Psychic Resistance",
      "Increased Focus"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Runner Drone",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Psychic Resistance (Moderate)",
        "rules": "When an ally within 30 feet of you is targeted by a psychic or mental attack, they can make a Wisdom saving throw. On a successful save, the attack deals no damage and ends any effect that would impose a level of exhaustion."
      },
      {
        "title": "Increased Focus (+10%)",
        "rules": "For 1 hour, any character wearing this collar gains advantage on Intelligence (Insight) checks made to detect lies or deception. Additionally, the character can use an action to gain temporary hit points equal to their level + their Constitution modifier when they successfully resist a psychic attack."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 8 due to its intricate craftsmanship and the power it draws from the drowned observatory.",
    "vendorReason": "The Hole Hawker is known for their unique and rare finds, often scavenging from deep-sea ruins. This item's origin makes them a logical vendor.",
    "shippingDetail": "Due to the delicate nature of these collapses, they are delivered exclusively by Void Runner Drone with special handling to ensure safe arrival.",
    "usage": {
      "activation": "Reaction (used once per short rest)",
      "duration": "Instantaneous effect; lasts for 1 hour",
      "endsWhen": "The duration ends when the wearer completes a long rest or after being destroyed by a successful hit from an attack with a damage type that can bypass resistance to psychic damage.",
      "charges": "Unlimited, but limited to one use per short rest"
    },
    "priceReason": "The price reflects the item's rarity, unique origin, and its potent effects against psychic disturbances.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:33:49.697130+00:00",
    "aiReviewedAt": "2026-07-25T03:33:49.697130+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_24_collapsed_collapses_of_center_03": {
    "id": "doughnut_hole_item_mk_24_collapsed_collapses_of_center_03",
    "name": "Mk.24 Collapsed Collapses – Center Alignment Model",
    "description": "The Mk.24 Collapsed Collapses – Center Alignment Model is a delicate, intricately crafted device made from an alloy of ancient, spatially-altered metals. Its core glows faintly with an ethereal light that resonates with the fabric of reality itself. This item subtly warps space within a small radius, allowing for the perception of hidden anomalies and minor manipulations of the environment around it. Use at your own peril; prolonged exposure to its effects can lead to disorientation or worse.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Spatial Perception Boost",
      "Minor Spatial Manipulation"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Dispatcher",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Spatial Perception Boost",
        "rules": "Activating this device grants the user a +20% bonus to Perception checks within a 10-foot radius for 1 minute. The effect ends if the user moves more than 30 feet away from the center of the area or if the user is incapacitated."
      },
      {
        "title": "Minor Spatial Manipulation",
        "rules": "As an action, the user can activate this device to create a localized distortion that allows them to move through difficult terrain as if it were normal ground for up to 10 feet. The effect lasts until the end of the user's next turn or is dispelled by an attack directed at the device."
      }
    ],
    "levelRequirementReason": "The delicate nature and advanced technology required for this device necessitate a minimum level of proficiency in spatial manipulation.",
    "vendorReason": "Center Seller specializes in rare, exotic items that can manipulate the very fabric of reality, making them the perfect vendor for such an artifact.",
    "shippingDetail": "The Temporal Dispatcher ensures the safe and timely delivery of this fragile item, guaranteeing it arrives undamaged.",
    "usage": {
      "activation": "Action or Reaction (choose one)",
      "duration": "1 minute or until dispelled",
      "endsWhen": "User moves more than 30 feet away from the center or is incapacitated; or if attacked and dispelled by an attack directed at the device.",
      "charges": "Unlimited, but requires a short rest to recover the spatial distortion effect."
    },
    "priceReason": "The item’s rarity, advanced technology, and the specialized skills required for its use justify this balanced price in XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:33:58.270144+00:00",
    "aiReviewedAt": "2026-07-25T03:33:58.270144+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_crimson_echo_weaver_9": {
    "id": "the_edge_item_crimson_echo_weaver_9",
    "name": "The Zealous Weaver's Crimson Echoes",
    "description": "The Zealous Weaver's Crimson Echoes is a blood-red contraption that hums with malevolent energy, its intricate gears and brass casing whispering the tales of forgotten horrors. This macabre device not only amplifies the screams of lost souls but also conjures their fears into shadowy phantoms. When activated, it pulses with an eerie crimson glow, drawing in the darkest corners of a haunted place to reveal hidden traumas. Prolonged use can drive even the most resilient mind to madness, as the echoes seem to find and exploit one’s deepest fears.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Shadow Conjuration",
      "Frightening Echoes"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Sky Courier Drone",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Shadow Conjuration",
        "rules": "Activates on a bonus action. Within 10 feet of the user, conjures shadowy phantoms that mimic lost souls' screams for 1 minute. Creatures within this area must succeed on a DC 15 Wisdom saving throw or become frightened until the end of their next turn."
      },
      {
        "title": "Frightening Echoes",
        "rules": "Reduces target's sanity by 3 points per minute while active, up to a maximum reduction of 15 points. This effect ends when the user stops using the device or upon its destruction."
      }
    ],
    "levelRequirementReason": "Requires a certain understanding of dark magic and trauma.",
    "vendorReason": "The abyss trader deals in artifacts that manipulate the dark forces of fear and despair.",
    "shippingDetail": "Ships via secure, night-time deliveries to ensure safe transport of such dangerous equipment.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "User stops using the device or upon its destruction",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for an item that conjures fears and reduces sanity, aligning with its rarity.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T03:34:08.022865+00:00",
    "aiReviewedAt": "2026-07-25T03:34:08.022865+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_infinite_void_loom_17": {
    "id": "the_edge_item_infinite_void_loom_17",
    "name": "The Infinite Void Loom of Static Threads",
    "description": "The Infinite Void Loom of Static Threads is a malevolent device crafted from the very fabric of shadow and void. Its humming silence and solidified darkness make it an eerie artifact, capable of unraveling reality itself with its spinning threads. It occasionally emits a high-pitched whine that induces intense headaches in all who hear it, making nearby creatures wary. The Loom's strands are said to weave the very essence of nothingness into strange patterns.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Reality Warp",
      "Silent Scream"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Shadowrunner Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reality Warp",
        "rules": "As a bonus action, activate the device to cast 'Misty Step' on you. The effect has no range or area and lasts until the start of your next turn. There is no save DC for this effect."
      },
      {
        "title": "Silent Scream",
        "rules": "The Loom emits a high-pitched whine that causes all creatures within 5 feet to make a Constitution saving throw (DC 14) or suffer disadvantage on their next two attacks and ability checks. The effects last for one minute per level of the user."
      }
    ],
    "levelRequirementReason": "This device is compact enough that even lower-level characters can wield it, but its power still requires a certain degree of magical aptitude.",
    "vendorReason": "Edge Outpost sells curiosities and items from the realm of shadows, and this artifact fits their inventory well.",
    "shippingDetail": "Delivered via a shadowrunner who ensures secrecy and speed.",
    "usage": {
      "activation": "Bonus action (Reality Warp), Reaction (Silent Scream)",
      "duration": "Instantaneous for Reality Warp, one minute per level for Silent Scream",
      "endsWhen": "Ends when the effect duration expires or the device is reactivated",
      "charges": "Unlimited uses"
    },
    "priceReason": "The device's compact size and versatility make it a valuable, yet not overpowered, tool for adventurers.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T03:33:54.057703+00:00",
    "aiReviewedAt": "2026-07-25T03:33:54.057703+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_forbidden_observer_shard_42": {
    "id": "the_edge_item_forbidden_observer_shard_42",
    "name": "The Forbidden Observer's Shadow Shard",
    "description": "The Forbidden Observer's Shadow Shard pulses with an eerie obsidian sheen, its surface etched with ancient runes that whisper of forbidden knowledge. Touching it triggers a disquieting sense of being watched and occasionally projects vivid phantom images into the user’s mind. Its origins are lost to time, hidden in whispers and arcane texts. This shard grants limited precognitive abilities, allowing glimpses into the near future, and detects unseen threats within a 20-meter radius.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👁️",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Precognition",
      "Threat Detection"
    ],
    "vendor": "final_shop",
    "shippedBy": "Blackhawk Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precognition",
        "rules": "The user has a 15% chance to see up to ten seconds into the future. This effect is active for one minute upon activation and ends when the user takes an action or reaction. It does not grant knowledge of specific outcomes but provides fleeting visions that can be interpreted by the user."
      },
      {
        "title": "Threat Detection",
        "rules": "Detects hidden enemies and traps within a 20-meter radius, providing a +5 bonus to Perception checks for one hour after activation. This effect is active until the end of your next long rest or when you take an action or reaction."
      }
    ],
    "levelRequirementReason": "This item offers limited but potent abilities suitable for lower-level characters who are curious about their surroundings and the future.",
    "vendorReason": "Final Shop is known for its collection of rare and forbidden items, making it a fitting vendor for this dark artifact.",
    "shippingDetail": "Ships via Blackhawk Drone, delivering within 24 hours with enhanced security measures due to the item's restricted nature.",
    "usage": {
      "activation": "Requires an action to activate.",
      "duration": "Active for one minute or until used in combat.",
      "endsWhen": "The effect ends when you take an action or reaction, or at the start of your next turn after using it in combat.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price reflects the item's utility for lower-level characters and its restricted nature as a forbidden artifact.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-25T03:34:21.572824+00:00",
    "aiReviewedAt": "2026-07-25T03:34:21.572824+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_final_chronal_weaver_7416": {
    "id": "the_edge_item_final_chronal_weaver_7416",
    "name": "The Final Vestiges of Forbidden Chronal Weaver",
    "description": "The Final Vestiges of Forbidden Chronal Weaver is a gnarled obsidian artifact, its surface etched with ancient runes that hum with latent temporal power. Crafted from the shattered remains of forgotten timelines, it warps reality around its wielder, accelerating or decelerating time in unpredictable bursts. Flickers of fractured pasts and futures dance within its core, offering brief insights into realms beyond comprehension. Handle only by those who dare, for even a moment's misuse risks unraveling the very fabric of existence.",
    "category": "forbidden",
    "price": 1000,
    "icon": "⏳",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Temporal Acceleration",
      "Reality Distortion"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "Activates as an action. The wielder gains advantage on attack rolls and ability checks for the next minute, but suffers a -1 penalty to all other ability checks and saving throws until used again."
      },
      {
        "title": "Reality Distortion",
        "rules": "As a reaction, if you or an ally within 5 feet are hit by an attack, you can use this item to impose disadvantage on the attacker's next attack roll. The item then shatters into harmless fragments after one use."
      }
    ],
    "levelRequirementReason": "This artifact requires immense magical prowess and understanding of temporal magic.",
    "vendorReason": "The abyssal trader has access to rare and forbidden artifacts from the depths of time itself.",
    "shippingDetail": "Delivered via interdimensional rift, ensuring safe arrival at your doorstep within an hour.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Temporal Acceleration lasts one minute; Reality Distortion is a single-use reaction.",
      "endsWhen": "Temporal Acceleration ends after its duration. Reality Distortion shatters the item upon use.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the artifact's rarity and the risk of misuse.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T03:34:43.264752+00:00",
    "aiReviewedAt": "2026-07-25T03:34:43.264752+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_ancient_resonance_fragment_7416": {
    "id": "the_edge_item_ancient_resonance_fragment_7416",
    "name": "Ancient Resonance Fragment of the Infinite Divide",
    "description": "The Ancient Resonance Fragment of the Infinite Divide is a shard of solidified entropy, cold to the touch and humming with the echoes of realities beyond comprehension. Its mere presence warps perception, blurring lines between what is real and what could be. This fragment amplifies psychic abilities, boosting critical hit chance by 5% and slightly increasing movement speed. It subtly shifts one’s perception, making enemies see double for a brief moment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧠",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Psychic Amplification",
      "Reality Distortion"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Quantum Delivery Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Psychic Amplification",
        "rules": "Increase psychic damage by 15% for 45 seconds. This effect requires no action to activate and persists during the duration."
      },
      {
        "title": "Reality Distortion",
        "rules": "Has a 20% chance of inflicting 'Reality Distortion' on enemies, causing them to see double and lose one Dexterity modifier for 1 minute. This effect has no save DC but is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "The fragment's complex resonance requires a certain level of mental discipline to wield effectively.",
    "vendorReason": "Edge Outpost deals with rare and ancient artifacts, making this shard an appropriate addition to their inventory.",
    "shippingDetail": "Ships via Quantum Delivery Drone within 24 hours of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous, with a duration of 45 seconds for 'Psychic Amplification' and lasts until the start of your next turn if not used again during that rest period for 'Reality Distortion'.",
      "endsWhen": "The effects end at the beginning of your next turn after they have been active or if you take any action other than a free object interaction.",
      "charges": "Unlimited"
    },
    "priceReason": "This fragment is rare and limited, balancing its value with a moderate price to reflect its unique abilities.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T03:34:31.738107+00:00",
    "aiReviewedAt": "2026-07-25T03:34:31.738107+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_mk_38_final_remnant_7416": {
    "id": "the_edge_item_mk_38_final_remnant_7416",
    "name": "Mk.38 Final Remnant of the Nullspace Conduit",
    "description": "The Mk.38 Final Remnant of the Nullspace Conduit is a twisted, metallic orb forged from the very fabric of forgotten dimensions. Its surface glows faintly with an eerie negation field that warps reality around it. This relic can momentarily nullify sound and energy, creating zones of absolute silence within which enemies are deafened for 3 seconds and take reduced damage. The final remnants also grant a chance to generate fleeting 'Silence Zones', safeguarding allies from magical attacks.",
    "category": "equipment",
    "price": 5000,
    "icon": "🔇",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "Creates Silence Zones",
      "Reduces Damage"
    ],
    "vendor": "final_shop",
    "shippedBy": "Void Transport",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Silence Zones",
        "rules": "As an action, the wielder can create a temporary zone of absolute silence around them. Any enemies within this area are deafened for 3 seconds and take no sound-based damage. The effect lasts for 10 seconds. Fails on a DC 15 Constitution saving throw."
      },
      {
        "title": "Damage Reduction",
        "rules": "The wielder gains a +2 bonus to AC and has advantage on Dexterity (Stealth) checks while within their 'Silence Zone'. This effect lasts for 60 seconds. Fails if they leave the zone or take damage."
      }
    ],
    "levelRequirementReason": "Requires significant control over spatial manipulation to wield this relic effectively.",
    "vendorReason": "Final Shop specializes in rare, end-game artifacts and relics from forgotten realities.",
    "shippingDetail": "Delivered via the Void Express; expedited delivery with tracking.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds per use",
      "endsWhen": "Enemies leave the Silence Zone or take damage, or when the user leaves the zone",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and unique spatial manipulation properties justify its high price.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-25T14:47:05.278079+00:00",
    "aiReviewedAt": "2026-07-25T14:47:05.278079+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_crimsonwood_whispermarked": {
    "id": "animatopia_item_crimsonwood_whispermarked",
    "name": "The Crimsonwood Whispermarked",
    "description": "The Crimsonwood Whispermarked is a finely crafted flute made from the heartwood of an ancient Whispering Willow. Its intricate carvings and glowing sap imbue it with the essence of the forest. When played, it not only soothes restless spirits but also subtly encourages harmony within communities, fostering a 20% increase in community happiness for one hour. Additionally, players gain the 'Forest Favor' condition, providing advantage on all nature-related checks until their next long rest.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 38,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Community Harmony",
      "Forest Favor"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Community Harmony",
        "rules": "Playing the flute increases community happiness by 20% for one hour. This effect ends when the duration expires or if the player uses another action that requires a bonus action."
      },
      {
        "title": "Forest Favor",
        "rules": "The player gains advantage on all nature-related checks until their next long rest. This condition is removed upon resting, and it can only be gained once per day."
      }
    ],
    "levelRequirementReason": "This item's effects are beneficial to any character but is most effective for those who spend time in natural environments.",
    "vendorReason": "The forest market thrives on items that enhance the connection between the community and nature, making it an ideal vendor for this flute.",
    "shippingDetail": "Ships via winged carrier, delivered with haste to ensure its timely arrival.",
    "usage": {
      "activation": "Playing the flute as a bonus action",
      "duration": "One hour",
      "endsWhen": "The duration expires or another action is taken that requires a bonus action",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects its unique craftsmanship, magical properties, and the rarity of Whispering Willow heartwood.",
    "priceOriginal": 275,
    "priceReviewedAt": "2026-07-25T03:34:40.763146+00:00",
    "aiReviewedAt": "2026-07-25T03:34:40.763146+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_infernal_tusks_of_the_lost_pack": {
    "id": "animatopia_item_infernal_tusks_of_the_lost_pack",
    "name": "Infernal Tusks of the Lost Pack",
    "description": "The Infernal Tusks of the Lost Pack are jagged, corrupted tusks that pulse with a sinister heat and whisper ancient horrors to those who hold them. These relics once belonged to a Dire Boar that served an infernal cult, and their very touch can twist one's mind into fearing primal terrors. Holding them grants temporary resistance against fear effects for three turns, allowing the wielder to face their darkest fears without succumbing. In combat, these tusks have a chance to inflict Terror upon weaker foes, causing them to flee in panic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Fear",
      "Chance to Inflict Terror"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Shadow Beetle Courier",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Resistance to Fear",
        "rules": "When the wielder is affected by a fear effect, they gain temporary resistance for three turns. This reduces the DC of saving throws against such effects by 5 and allows them to re-roll failed saves once per turn."
      },
      {
        "title": "Inflict Terror",
        "rules": "Once per short rest or long rest, the wielder can use a bonus action to cause Terror among weaker enemies within 30 feet. Targets must succeed on a DC 15 Wisdom saving throw or become frightened until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The corrupted power and complex magic required for these tusks to function are only accessible to high-level characters.",
    "vendorReason": "Beast Bazaar specializes in exotic and dangerous artifacts, including those with malevolent origins like the Infernal Tusks.",
    "shippingDetail": "Ships via a shadow beetle courier, which delivers the tusks within one week of purchase.",
    "usage": {
      "activation": "Bonus action to activate Terror effect; passive for resistance",
      "duration": "Passive: until the end of your next turn; active: until the end of the encounter or until expended",
      "endsWhen": "The effect ends if you are no longer holding the tusks or if they are destroyed.",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "The tusks' rare origin and powerful effects justify their high price in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:35:04.283771+00:00",
    "aiReviewedAt": "2026-07-25T03:35:04.283771+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_mk_99_soulshard_of_the_silent_grove": {
    "id": "animatopia_item_mk_99_soulshard_of_the_silent_grove",
    "name": "Mk.99 Soulshard of the Silent Grove",
    "description": "The Mk.99 Soulshard of the Silent Grove, a petrified fragment shimmering with the spectral glow of ancient spirits, hums with the voices of the departed from the sacred grove of the animatopian seers. When invoked, it opens fleeting channels to ancestors, who whisper cryptic and often harrowing truths before fading into silence. The shard's wisdom is not always welcome but can be crucial for navigating treacherous terrain or solving enigmatic puzzles left by long-gone sages.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Ancestral Guidance",
      "Communion with Ancestors"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "shadow_runner",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ancestral Guidance",
        "rules": "When activated, the soulshard grants a wisdom (Insight) check bonus equal to its level. The effect lasts until the end of your next turn and can be used once per day."
      },
      {
        "title": "Communion with Ancestors",
        "rules": "For 10 minutes after activation, you may attempt to communicate with a deceased ancestor once. Roll a d20; on a result of 15 or higher, the ancestor provides a cryptic hint or warning related to your current quest or environment."
      }
    ],
    "levelRequirementReason": "Requires minimal spellcasting ability for basic communication with ancestors.",
    "vendorReason": "The Tribal Trader has extensive contacts within the animatopian community and can source rare relics like this soulshard.",
    "shippingDetail": "Delivered by night, ensuring the secrecy of the item’s arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation; lasts until end of next turn for Ancestral Guidance, or 10 minutes for Communion with Ancestors.",
      "endsWhen": "The duration ends as specified above or if the user takes any other action that requires a concentration check.",
      "charges": "One per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its limited daily use and the rarity of the animatopian relic.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:35:24.868944+00:00",
    "aiReviewedAt": "2026-07-25T03:35:24.868944+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_viral_entropy_piercer": {
    "id": "internet_item_the_viral_entropy_piercer",
    "name": "The Viral Entropy Piercer",
    "description": "The Viral Entropy Piercer gleams with a digital sheen, its code fragment shimmering with chaotic data streams. When activated, it injects misinformation into the target's mind, causing them to experience moments of cognitive dissonance and uncontrollable urges to share bizarre content across social networks. The artifact is crafted from salvaged internet debris, imbued with arcane virality by a mad scientist in a forgotten lab. Only those with at least 20th level can wield its power without risking their own sanity.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Cognitive Dissonance",
      "Viral Spread"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Cognitive Dissonance",
        "rules": "When activated, the Viral Entropy Piercer injects misinformation into the target's mind. The target becomes confused for 30 seconds and has a +15% chance to spread viral content on their next post or share. This effect ends if the target successfully makes a Wisdom saving throw with a DC of 18."
      },
      {
        "title": "Viral Spread",
        "rules": "For every creature affected by the target's viral posts, the Piercer increases its chance to spread viral content by an additional 5%. This effect ends when the target regains consciousness or if the Viral Dissonance duration is over."
      }
    ],
    "levelRequirementReason": "Only those with at least 20th level can wield this artifact without risking their own sanity.",
    "vendorReason": "The pixel shop specializes in exotic and arcane items, including the Viral Entropy Piercer, which has gained notoriety among its patrons for its unique properties.",
    "shippingDetail": "Delivered via high-speed drone, with a special delivery notice that alerts both the recipient and local authorities to the nature of the item.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "The target successfully makes a Wisdom saving throw or regains consciousness",
      "charges": "Recharge on a long rest"
    },
    "priceReason": "This item is priced at 1000 XP due to its unique and powerful effects, rare crafting materials, and the significant risk it poses even for high-level users.",
    "priceOriginal": 789,
    "priceReviewedAt": "2026-07-25T03:35:32.703293+00:00",
    "aiReviewedAt": "2026-07-25T03:35:32.703293+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_vile_algorithmic_reflector": {
    "id": "internet_item_the_vile_algorithmic_reflector",
    "name": "The Vile Algorithmic Reflector",
    "description": "The Vile Algorithmic Reflector is a jagged, sickly green shard of digital corruption. Crafted from twisted data streams and malevolent algorithms, it pulses with an eerie glow that hints at the chaos it can unleash upon targeted systems. This cursed device allows the user to momentarily manipulate data flows, redirecting them into unexpected channels—often leading to catastrophic failures in linked networks. A single use can cause a cascade failure, leaving behind a trail of system crashes and security breaches.",
    "category": "equipment",
    "price": 1000,
    "icon": "😈",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Data Misdirection",
      "Linked System Vulnerability"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Data Misdirection",
        "rules": "When activated as an action, the Vile Algorithmic Reflector redirects targeted data streams into unexpected channels. The target must succeed on a DC 15 Dexterity saving throw or be subject to temporary system lag for 1 minute. Additionally, there is a 20% chance that the redirection will cause a cascade failure in linked systems."
      },
      {
        "title": "Linked System Vulnerability",
        "rules": "For 1 hour after use, any linked systems within range are vulnerable to hacking attempts. The DC for such attempts is increased by +5 due to the exposed vulnerabilities introduced by the Vile Algorithmic Reflector."
      }
    ],
    "levelRequirementReason": "This cursed device requires no specific level, as its corrupting nature can be wielded by anyone with basic technological knowledge.",
    "vendorReason": "The cyber market deals in all manner of illegal and experimental tech, so they naturally stock this dangerous relic.",
    "shippingDetail": "Ships via Quantum Courier, known for its fast but not always reliable service. Expect a potential delay due to the delicate nature of the item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect with 1-minute system lag and 1-hour vulnerability",
      "endsWhen": "Target's successful saving throw or linked systems are repaired",
      "charges": "One use, recharges after a long rest"
    },
    "priceReason": "This price reflects the item’s cursed nature, limited uses, and the potential for significant damage it can inflict.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T03:35:20.345478+00:00",
    "aiReviewedAt": "2026-07-25T03:35:20.345478+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_corrupted_data_service_operator": {
    "id": "internet_item_the_corrupted_data_service_operator",
    "name": "The Corrupted Data Service Operator",
    "description": "The Corrupted Data Service Operator hums with a malevolent glow, its surface etched with corrupted code and data streams that writhe like living entities. This miniature server allows you to temporarily manipulate localized data flows, creating subtle glitches or bypassing basic security protocols. It's a relic of the digital underworld, capable of rewriting simple code snippets with ease, but beware—its touch leaves an indelible mark on your systems.",
    "category": "services",
    "price": 1000,
    "icon": "💻",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "delivery_only",
    "effects": [
      "Manipulate Data Streams",
      "Subvert Security Protocols"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Neural Transporter",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Manipulate Data Streams",
        "rules": "As a bonus action, you can use the operator to rewrite a single line of code within a local data stream. This effect is instantaneous and has no save DC. The alteration lasts until the next time your systems are rebooted or reset."
      },
      {
        "title": "Subvert Security Protocols",
        "rules": "You gain advantage on checks against any security protocols you attempt to bypass in a 30-foot radius for 1 minute, provided that the operator is active. This effect can be used once per short rest and has no save DC."
      }
    ],
    "levelRequirementReason": "This item requires a certain level of technical expertise to operate effectively.",
    "vendorReason": "The Data Dealer specializes in rare digital artifacts and relics, making this a fitting item for their inventory.",
    "shippingDetail": "Due to its sensitive nature, the operator must be shipped via Neural Transporter's secure data streams for guaranteed delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; lasts until systems are rebooted or reset",
      "endsWhen": "Operator is used again within a short rest",
      "charges": "Unlimited, but can only be used once per short rest"
    },
    "priceReason": "The item's rarity and limited usability justify its relatively lower price point.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-25T03:36:08.432647+00:00",
    "aiReviewedAt": "2026-07-25T03:36:08.432647+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_quartz_drinker_01": {
    "id": "connectopia_item_quartz_drinker_01",
    "name": "The Petro-Quartz Drinker's Blueprint #789",
    "description": "The Petro-Quartz Drinker's Blueprint #789 is a meticulously crafted relic that harnesses geothermal energy and processed quartz veins to create a self-sustaining hydration system. When activated, it channels a shimmering blue fluid that not only lubricates mining tools but also replenishes the drinker’s own reserves. This miraculous blueprint ensures a 15% increase in mining efficiency while simultaneously reducing tool wear by an impressive 10%, making it indispensable for any miner or adventuring party.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💧",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Hydration Boost",
      "Tool Lubrication"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_only",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Hydration Boost",
        "rules": "When activated, the Petro-Quartz Drinker's Blueprint #789 provides a bonus action that generates a small amount of hydration. This effect lasts for 1 hour and can be used once per long rest."
      },
      {
        "title": "Tool Lubrication",
        "rules": "Upon activation, the blueprint releases a lubricating fluid that reduces tool wear by 10%. The effect is instantaneous and has no save DC or limit, but it only functions while the user is mining."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to ensure the user can effectively utilize its mining benefits.",
    "vendorReason": "Craft Corner specializes in unique and rare items, making it a fitting vendor for this Petro-Quartz Drinker's Blueprint.",
    "shippingDetail": "Ships via courier with a two-day delivery delay due to its fragile nature.",
    "usage": {
      "activation": "Bonus action upon activation.",
      "duration": "Lasts for 1 hour and can be used once per long rest.",
      "endsWhen": "Exhausted after one use or at the start of your next long rest.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "The balanced XP price reflects its rarity and utility in mining and adventuring scenarios.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:35:45.170393+00:00",
    "aiReviewedAt": "2026-07-25T03:35:45.170393+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_modular_geode_02": {
    "id": "connectopia_item_modular_geode_02",
    "name": "The Obsidian Core Stabilizer Mk.34",
    "description": "The Obsidian Core Stabilizer Mk.34 is a rugged, modular device forged from obsidian and quartz, designed to extract geodes from perilous strata where tremors lurk. Its quartz resonance chamber hums with ancient energy, providing miners with temporary protection against seismic activity, allowing for safer and more efficient mining operations deep within the earth's heart. This tool reduces mining fatigue by 50% during a session, ensuring that even the most arduous expeditions can be conducted with relative ease.",
    "category": "equipment",
    "price": 2100,
    "icon": "⛏️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Geode Yield Boost",
      "Seismic Stabilization"
    ],
    "vendor": "block_smith",
    "shippedBy": "shipping_crate",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Geode Yield Boost",
        "rules": "This effect increases geode yield by 20% for the miner using it. The boost applies to all mining activities conducted while the device is active, providing a tangible advantage in resource gathering."
      },
      {
        "title": "Seismic Stabilization",
        "rules": "Activating this device provides temporary protection against seismic tremors within a 30-foot radius for up to 1 minute. The miner must use an action to activate the device. If exposed to a tremor while active, the miner can make a Dexterity saving throw (DC 14) to avoid taking any damage from the tremor."
      }
    ],
    "levelRequirementReason": "This advanced device requires significant skill and experience to operate effectively in the treacherous environments it is designed for.",
    "vendorReason": "Block Smith specializes in crafting tools that assist miners and adventurers in overcoming the challenges of their environment, making this stabilizer a natural fit for their inventory.",
    "shippingDetail": "The Obsidian Core Stabilizer Mk.34 is shipped securely within a reinforced wooden crate to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute",
      "endsWhen": "The miner stops using the device or is exposed to seismic tremors, at which point they must make a Dexterity saving throw (DC 14) to avoid taking damage.",
      "charges": "Unlimited"
    },
    "priceReason": "Given its advanced design and the significant advantage it provides to miners, this stabilizer is priced accordingly to reflect its value in enhancing resource collection and safety.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-25T03:36:16.375293+00:00",
    "aiReviewedAt": "2026-07-25T03:36:16.375293+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_blueprint_chronometric_03": {
    "id": "connectopia_item_blueprint_chronometric_03",
    "name": "The Chronal Resonance Drinker - Prototype X-9",
    "description": "The Chronal Resonance Drinker - Prototype X-9 is a sleek, metallic flask imbued with ancient chronal energies. Crafted from rare temporal alloys and adorned with enigmatic runes, it subtly shifts time's flow for the user. When activated, it slows incoming attacks by 25% for 15 seconds, perfecting your defenses, or accelerates crafting tasks by 40% for 10 seconds, speeding up your workbench. However, use it sparingly; its effects are unpredictable and may leave you momentarily disoriented.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Defense",
      "Swift Crafting"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "premium_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Defense",
        "rules": "Activate as a reaction to reduce the damage of an attack by 25% for 15 seconds. Ends when the effect duration expires or you take another reaction."
      },
      {
        "title": "Swift Crafting",
        "rules": "Activate on your turn to increase crafting speed by 40% for 10 seconds. This effect ends if you use a bonus action, reaction, or if your concentration is broken."
      }
    ],
    "levelRequirementReason": "Requires minimal magical prowess but offers significant benefits.",
    "vendorReason": "Known for their expeditions and magical artifacts, Pioneer Post frequently handles shipments of unique items like the Chronal Resonance Drinker.",
    "shippingDetail": "Ships via premium courier with guaranteed delivery within three days.",
    "usage": {
      "activation": "Reaction or action",
      "duration": "Temporal Defense: 15 seconds, Swift Crafting: 10 seconds",
      "endsWhen": "Ends upon expiration of the duration or if another reaction is used.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique time-altering capabilities and limited duration effects.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:35:49.543665+00:00",
    "aiReviewedAt": "2026-07-25T03:35:49.543665+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_quartz_binder_apples": {
    "id": "equestrian_item_quartz_binder_apples",
    "name": "Quartz Binder's Apples of Echoing Laughter",
    "description": "The Quartz Binder's Apples of Echoing Laughter are a peculiar sight among the stalls of Ponyville Market. Their skin gleams with an ethereal quartz light, and their crisp bite releases a wave of contagious laughter that can be felt throughout the area. Legend tells of how they were crafted by the legendary Quartz Binder himself during his time as a traveling tinkerer, blending magic with his culinary expertise to produce these enchanted fruits. When consumed, they not only bolster one’s spirit but also temporarily amplify magical energies around you.",
    "category": "consumables",
    "price": 1000,
    "icon": "😂",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Echoing Laughter",
      "Magical Amplification"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoing Laughter",
        "rules": "Consume the apple to gain advantage on Charisma checks and saving throws for 1 minute. This effect also causes a minor distraction, reducing your movement speed by half until it ends."
      },
      {
        "title": "Magical Amplification",
        "rules": "For the duration of 1 hour after consuming an apple, you gain a +3 bonus to all spell attack rolls and spell saving throws. This effect is limited to once per week."
      }
    ],
    "levelRequirementReason": "The magic within these apples is potent but not overwhelming; they require a certain level of magical proficiency to harness their full potential.",
    "vendorReason": "Applejack, known for her vast knowledge of herbs and plants, has learned the secret recipe from Quartz Binder's old notes and now sells these enchanted fruits.",
    "shippingDetail": "Ships within a day via swift Pegasus delivery.",
    "usage": {
      "activation": "Eaten as a meal or snack",
      "duration": "Echoing Laughter: 1 minute; Magical Amplification: 1 hour",
      "endsWhen": "Upon expiration of the duration or if consumed by another",
      "charges": "Unlimited, but one per week"
    },
    "priceReason": "The apples' rarity and unique magical properties justify their higher price point.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T03:36:00.937096+00:00",
    "aiReviewedAt": "2026-07-25T03:36:00.937096+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_mk_37_laughing_apples": {
    "id": "equestrian_item_mk_37_laughing_apples",
    "name": "Mk.37 Laughing Apples of the Galloping Plains",
    "description": "The Mk.37 Laughing Apples of the Galloping Plains are robust, crimson fruits that exude a warm, bubbling energy unique to their birthplace in the heart of the plains. Each apple's markings denote a distinct frequency of laughter, ensuring each bite is a one-of-a-kind experience. Consuming these apples grants a burst of jovial glee, promoting optimism and temporarily increasing speed and movement speed, leaving you galloping with newfound energy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏃‍♀️",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Optimism Boost",
      "Speed Increase"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Post Horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Optimism Boost",
        "rules": "Upon consumption, the eater gains a +3 bonus to Charisma (Inspiration) for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Speed Increase",
        "rules": "The consumer's speed is increased by 20 feet until the start of their next turn after consuming an apple. This effect lasts for a total duration of 60 seconds, and can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Even the most novice adventurers need a boost to their spirits and speed when exploring the Galloping Plains.",
    "vendorReason": "The Royal House of Canterlot is always well-informed about the latest wares from across Equestria, including these unique fruits.",
    "shippingDetail": "Delivered by trusted Royal Post Horses, these apples are shipped within a day of purchase.",
    "usage": {
      "activation": "Eaten as a bonus action.",
      "duration": "1 minute for Optimism Boost; 60 seconds for Speed Increase.",
      "endsWhen": "At the start of the consumer's next turn after consuming an apple.",
      "charges": "Once per short or long rest."
    },
    "priceReason": "The apples are rare and require special cultivation in the Galloping Plains, justifying their moderate price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:36:16.864244+00:00",
    "aiReviewedAt": "2026-07-25T03:36:16.864244+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_mythic_apple_of_harmony_resonance": {
    "id": "equestrian_item_mythic_apple_of_harmony_resonance",
    "name": "The Mythic Apple of Harmony Resonance – Twilight's Echo",
    "description": "The Mythic Apple of Harmony Resonance – Twilight's Echo is a golden apple with an ethereal glow that seems to hum with the essence of friendship. Crafted from a fragment of Twilight Sparkle’s magical aura, it resonates with the very core of balance and serenity. Consuming this apple grants profound empathy and wisdom, instantly resolving conflicts through peaceful means. However, prolonged use can overwhelm the user's emotional capacity.",
    "category": "premium",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Empathy Boost",
      "Instant Conflict Resolution"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Divine Pegasus Delivery Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Empathy Boost",
        "rules": "When consumed, this apple grants a +50 bonus to Wisdom and Charisma for 1 hour. This effect requires an action to consume. The user gains advantage on saving throws against being charmed or frightened for the next 24 hours."
      },
      {
        "title": "Instant Conflict Resolution",
        "rules": "Once per short rest, this apple can be used as a bonus action to instantly resolve any conflict peacefully. This effect has no save DC and does not require an attack roll. The apple's protective aura absorbs negative emotions from nearby creatures for 10 minutes."
      }
    ],
    "levelRequirementReason": "The Mythic Apple requires a significant amount of discipline to handle its potent effects.",
    "vendorReason": "Crystal Empire is known for their expertise in magical artifacts, making them the perfect vendor for this powerful item.",
    "shippingDetail": "Ships via a Divine Pegasus Courier, ensuring safe and swift delivery.",
    "usage": {
      "activation": "Action or Bonus Action to consume; once per short rest for instant conflict resolution.",
      "duration": "Empathy boost lasts 1 hour. Instant conflict resolution effect is instantaneous.",
      "endsWhen": "Runs out of charges after one use, then requires a long rest to be consumed again.",
      "charges": "Unlimited uses with a long rest"
    },
    "priceReason": "The Mythic Apple's rarity and magical properties justify its price, balancing the cost with its powerful effects.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-25T03:36:16.811681+00:00",
    "aiReviewedAt": "2026-07-25T03:36:16.811681+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_tiered_hooks_of_vertical_7": {
    "id": "grand_country_item_tiered_hooks_of_vertical_7",
    "name": "The Tiered Hooks of Vertical's Guardian",
    "description": "The Tiered Hooks of Vertical's Guardian are intricately woven from solidified sugar strata, reinforced with spun honeycomb and imbued with the essence of the Doughnut itself. These hooks hum a rhythmic pulse that resonates through your hands as you ascend precarious staircases, offering a momentary stability during vertical movement. Crafted by the legendary Side Seller, these hooks are not just tools but a testament to the whimsical craftsmanship of the realm's most eccentric artisans.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪜",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "stability_boost",
      "fall_damage_reduction"
    ],
    "vendor": "side_seller",
    "shippedBy": "Sticky Delivery Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stability Boost",
        "rules": "While using the hooks, you gain a +2 bonus to Dexterity saving throws and advantage on Acrobatics checks made to maintain your balance while moving vertically. This effect lasts until the start of your next turn."
      },
      {
        "title": "Fall Damage Reduction",
        "rules": "When you fall from a height, reduce all fall damage taken by half (rounded down) for 1 minute. This effect can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "These hooks are designed with intricate craftsmanship and require a certain level of skill to wield effectively.",
    "vendorReason": "The Side Seller is renowned for their eccentric and whimsical creations, making these hooks a perfect fit for their inventory.",
    "shippingDetail": "Delivered by the notoriously punctual Sticky Delivery Drone, ensuring your hooks arrive in pristine condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect; Stability Boost lasts until start of next turn. Fall Damage Reduction lasts for 1 minute after use.",
      "endsWhen": "The effect ends when the duration expires or you take another action that requires a bonus action.",
      "charges": "Unlimited, but the effect can only be used once per short or long rest."
    },
    "priceReason": "Crafted from rare sugar strata and spun honeycomb, these hooks are a rare find in even the most eccentric shops.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:36:43.637759+00:00",
    "aiReviewedAt": "2026-07-25T03:36:43.637759+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_divine_hooks_of_the_layered_9": {
    "id": "grand_country_item_divine_hooks_of_the_layered_9",
    "name": "Divine Guardian’s Hooks of the Layered Core",
    "description": "Forged within the deepest layers of the Doughnut's core, these hooks shimmer with an ethereal light that guides the faithful through complex layered environments. The hooks are said to be imbued by a divine hand, and touching them induces a state of blissful disorientation, allowing for effortless navigation. However, prolonged exposure can lead to a mild but persistent craving for frosting, as if the core itself whispers promises of sweet indulgence.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "enhanced_spatial_awareness",
      "resistance_to_complex_mazes"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Honeycomb Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Spatial Awareness",
        "rules": "When you activate the hooks, you gain a +2 bonus to Dexterity (Stealth) checks for 1 hour. The hooks must be held and the user must focus on the immediate environment. This effect ends if you voluntarily stop holding them or if you are incapacitated."
      },
      {
        "title": "Resistance to Complex Mazes",
        "rules": "While the hooks are active, you have advantage on Wisdom (Perception) checks made to find a way out of complex mazes and labyrinths. This effect lasts for 10 minutes per charge and ends when you enter an environment without mazes or if you run out of charges."
      }
    ],
    "levelRequirementReason": "The hooks are designed to assist adventurers at all levels, but the divine power they wield is most potent for those who have proven their worth.",
    "vendorReason": "Vertical Vendor specializes in unique and mystical items that align with a traveler's journey, making these hooks an ideal fit for their inventory.",
    "shippingDetail": "Delivered fresh from the Doughnut's core, these hooks are shipped only on full moon nights to ensure their power remains intact.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until used up",
      "endsWhen": "Voluntary stop holding, incapacitation, or entering a maze-free area",
      "charges": "5 uses per day"
    },
    "priceReason": "The hooks are crafted from the rarest materials and imbued with divine power, making them an invaluable asset for any adventurer.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:37:24.687107+00:00",
    "aiReviewedAt": "2026-07-25T03:37:24.687107+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk_39_tiered_hooks_12": {
    "id": "grand_country_item_mk_39_tiered_hooks_12",
    "name": "Mk.39 Tiered Hooks - The Glaze Sentinel",
    "description": "The Glaze Sentinel Mk.39 Tiered Hooks are forged from a rare, malleable metal that adapts to the environment, granting unparalleled grip and stability on any surface. These hooks are not just tools; they are extensions of your hand, designed with precision for environments where slick surfaces are common. Each hook is equipped with a glaze-sensing device that alerts you to changes in viscosity, ensuring your grip remains steadfast even as conditions shift.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⚙️",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "special_order",
    "effects": [
      "glazed_grip",
      "surface_adaptation"
    ],
    "vendor": "layer_market",
    "shippedBy": "Sugar Rail Cart",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Glazed Grip",
        "rules": "When activated by a bonus action, the hooks provide an advantage on Dexterity (Acrobatics) checks and saving throws against effects that would cause you to fall. This effect lasts until the start of your next turn."
      },
      {
        "title": "Surface Adaptation",
        "rules": "At the start of each of your turns, if you are standing on a slick surface, the hooks detect it and provide a +2 bonus to your Dexterity saving throws for the rest of that turn. This effect ends when you leave the slick surface."
      }
    ],
    "levelRequirementReason": "These hooks require significant strength and dexterity to wield effectively, making them suitable only for seasoned adventurers.",
    "vendorReason": "Layer Market specializes in high-demand, specialty gear that requires specialized calibration and maintenance, making it the perfect vendor for these hooks.",
    "shippingDetail": "Ships via the Sugar Rail Cart, known for its reliable delivery through the city's complex infrastructure. Delivery time is approximately two days.",
    "usage": {
      "activation": "Bonus action to activate and gain benefits.",
      "duration": "Instantaneous effect; lasts until start of next turn or conditions change.",
      "endsWhen": "Ends when you leave a slick surface or take damage.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The hooks are crafted from rare materials and require precise calibration, making them relatively expensive but worth the investment for adventurers who frequently face slippery conditions.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-25T03:36:55.762382+00:00",
    "aiReviewedAt": "2026-07-25T03:36:55.762382+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_the_shimmering_boundary_claimed": {
    "id": "almost_edge_item_the_shimmering_boundary_claimed",
    "name": "The Shimmering Boundary Claimed",
    "description": "The Shimmering Boundary Claimed is a viscous, iridescent orb that pulses with subsonic frequencies, creating an otherworldly hum as it distorts reality around you. Holding this sphere grants temporary resistance to psychological distress and warps the soundscape, causing fleeting auditory hallucinations that can lead to panic. This enigmatic artifact restores some of your health while casting a field that reduces enemy accuracy, making it a valuable tool for survival in the most harrowing of battles.",
    "category": "consumables",
    "price": 18000,
    "icon": "🌀",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Psychological Resistance",
      "Auditory Distortion"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Psychological Resistance",
        "rules": "When activated, this artifact grants you +5 resistance to fear effects for 60 seconds. It also reduces the chance of a target hitting you by 20% within its area of effect. This effect ends if you are incapacitated or if your concentration is broken."
      },
      {
        "title": "Auditory Distortion",
        "rules": "There is a 15% chance that each creature in the area will suffer from fleeting auditory hallucinations, which have a 20% chance to cause them to become panicked. This effect lasts for the duration of your concentration on this artifact."
      }
    ],
    "levelRequirementReason": "This artifact requires mastery-level expertise due to its complex and dangerous nature.",
    "vendorReason": "The Void Merchant is known for their collection of rare, mythic artifacts that push the boundaries of reality.",
    "shippingDetail": "Due to its unstable nature, this artifact requires a special delivery through the Dimensional Portal, which can take up to three days.",
    "usage": {
      "activation": "A bonus action is required to activate and maintain concentration on this artifact.",
      "duration": "The effects last for 60 seconds while you maintain your concentration.",
      "endsWhen": "Concentration ends if you are incapacitated or attacked by a creature within the area of effect.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This artifact is priced at mythic rarity, reflecting its unique and powerful abilities that make it a sought-after commodity among seasoned adventurers.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T03:36:51.730512+00:00",
    "aiReviewedAt": "2026-07-25T03:36:51.730512+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_cursed_whispers_of_the_sevenfold_decay": {
    "id": "almost_edge_item_cursed_whispers_of_the_sevenfold_decay",
    "name": "Cursed Whispers of the Sevenfold Decay",
    "description": "The Cursed Whispers of the Sevenfold Decay are a sinister collection of scrolls bound by tarnished silver chain, each whispering fragmented prophecies that unravel sanity and hint at the slow dissolution of reality itself. Prolonged exposure to these scrolls causes accelerated aging, turning skin pale as parchment and eyes hollow with dread. Their whispers seem to twist the fabric of time around you, making the air thick with an oppressive sense of foreboding.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Sanity Shatter",
      "Temporal Corruption"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sanity Shatter",
        "rules": "Each scroll, when read for more than a minute, causes the reader to suffer from temporary confusion. There is a 20% chance that this confusion results in self-damaging actions. This effect lasts until the end of your next turn and can be resisted with a successful DC 15 Wisdom saving throw."
      },
      {
        "title": "Temporal Corruption",
        "rules": "The scrolls inflict an area effect, causing all creatures within 20 feet to experience slowed movement by 15% for 1 minute. This effect ends if the reader drops one or more scrolls or successfully resists it with a DC 14 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "Even the most inexperienced adventurers may find these scrolls' effects unsettling and potentially dangerous.",
    "vendorReason": "The Liminal Trader is known for their vast array of strange and ancient artifacts, making them a likely seller of such cursed items.",
    "shippingDetail": "Ships within 3 days via Drone Delivery, ensuring the scrolls are delivered intact.",
    "usage": {
      "activation": "Read one scroll as an action to activate its effects.",
      "duration": "Instantaneous activation; effects last for their respective durations.",
      "endsWhen": "The effect ends if you drop a scroll or successfully resist it with a saving throw.",
      "charges": "Unlimited uses, but reading more than one scroll at a time causes cumulative effects."
    },
    "priceReason": "The scrolls' rarity and the potential for sanity loss make their price reasonable while keeping them within reach of lower-level adventurers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:37:35.215631+00:00",
    "aiReviewedAt": "2026-07-25T03:37:35.215631+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_mk.49_boundary_whispers_of_the_void": {
    "id": "almost_edge_item_mk.49_boundary_whispers_of_the_void",
    "name": "Mk.49 Boundary Whispers of the Void",
    "description": "A jagged shard of obsidian etched with unsettling geometric patterns, the Mk.49 Boundary Whispers of the Void amplifies the sensation of falling and offers glimpses into the cold, silent expanse beyond. Its touch induces a feeling of profound isolation, making those near it feel both connected to and detached from reality. Held near a precipice, this shard reveals the void’s secrets through whispers that only the wielder can hear.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 55,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Whispers of the Void",
      "Void Glimpse"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Swift Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Whispers of the Void",
        "rules": "When activated as a bonus action, this shard amplifies the sensation of falling by +50% and grants temporary invisibility to the wielder for 1 round. The user must make a DC 14 Constitution saving throw or fall prone from the amplified sensation."
      },
      {
        "title": "Void Glimpse",
        "rules": "Once per short rest, the wielder can use this shard to detect nearby sources of cosmic energy within 30 feet. The detection reveals any such source's approximate location and intensity for up to 1 minute."
      }
    ],
    "levelRequirementReason": "The item’s intricate design requires a certain level of experience and focus to wield effectively.",
    "vendorReason": "The edge wanderer is known for their extensive trade in ancient relics and curiosities, including this mysterious shard.",
    "shippingDetail": "Delivered within one week of order placement.",
    "usage": {
      "activation": "Bonus action to activate invisibility or Whispers of the Void; once per short rest to use for a Void Glimpse.",
      "duration": "Temporary invisibility lasts 1 round (6 seconds); Void Glimpse lasts up to 1 minute.",
      "endsWhen": "The effect ends when the duration expires, or if the wielder takes any major action.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The item’s rarity and unique properties justify its value in experience points.",
    "priceOriginal": 900,
    "priceReviewedAt": "2026-07-25T03:37:10.195457+00:00",
    "aiReviewedAt": "2026-07-25T03:37:10.195457+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_gravitic_resonance_finder_01": {
    "id": "doughnut_hole_item_gravitic_resonance_finder_01",
    "name": "The Chronal Echo Finder - Phase Seven",
    "description": "The Chronal Echo Finder - Phase Seven is a sleek obsidian device that subtly manipulates gravity to reveal hidden temporal anomalies. Its polished surface glows with an ethereal blue light, hinting at the distortions it can detect. When activated, it briefly warps space around you, allowing you to perceive echoes of past events and locate secret passages in the fabric of time. However, prolonged use may cause disorientation due to conflicting temporal fields.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Echo Perception",
      "Secret Passage Detection"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Conveyance Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Echo Perception",
        "rules": "As a bonus action, activate the device for 10 seconds. Within its range (30 feet), you can detect hidden temporal anomalies and secret passages, granting advantage on Wisdom (Perception) checks to notice these features. The device has 2 uses per long rest."
      },
      {
        "title": "Secret Passage Detection",
        "rules": "When activated, the device creates a localized gravity warp that reveals nearby secret passages. This effect is instantaneous and has a range of 60 feet. There is a 30% chance that this effect also reveals hidden traps or dangers in the vicinity."
      }
    ],
    "levelRequirementReason": "This device requires significant focus to manipulate temporal anomalies safely.",
    "vendorReason": "Hole Hawker specializes in devices that can navigate through hidden or unstable dimensions, making this item a perfect fit for their inventory.",
    "shippingDetail": "The drone ensures secure and swift delivery by teleporting the device directly to your location within one hour of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds per activation",
      "endsWhen": "The duration ends when it is used or a new bonus action is taken",
      "charges": "2 uses, recharged at the end of a long rest"
    },
    "priceReason": "This device offers powerful yet balanced utility that can significantly aid explorers and adventurers in navigating complex temporal environments.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T03:37:13.381408+00:00",
    "aiReviewedAt": "2026-07-25T03:37:13.381408+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_xenolithic_paradoxes_02": {
    "id": "doughnut_hole_item_xenolithic_paradoxes_02",
    "name": "The Fragmented Xenolith of Shifting Currents - Variant Beta",
    "description": "The Fragmented Xenolith of Shifting Currents - Variant Beta, a pulsating core forged from collapsed gravitational flux near the Fated Place, hums with an eerie, shifting mass that defies logic. Its touch can momentarily warp space-time, creating unpredictable pockets of zero gravity or intense gravitation within a 5-meter radius. The xenolith's unstable nature is both a tool and a trap for those who dare to wield it, as its effects can disorient the unprepared and leave them questioning reality itself.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Gravitational Pulsations",
      "Temporal Fluctuations"
    ],
    "vendor": "center_seller",
    "shippedBy": "Submerged Courier",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Gravitational Pulsations",
        "rules": "When activated by a bonus action, this xenolith creates a 5-meter radius around the user where gravity fluctuates unpredictably. Objects within the area may float or fall at random for 3 seconds. The effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Temporal Fluctuations",
        "rules": "Every time a creature enters the area of gravitational pulsations, they must succeed on a DC 15 Dexterity saving throw or become disoriented for 1 minute. The disorientation ends early if the affected creature takes any action other than moving up to half its speed."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and a deep understanding of space-time manipulation can safely use this dangerous artifact.",
    "vendorReason": "The center seller specializes in rare, ancient artifacts like the Fragmented Xenolith, offering items that challenge the boundaries of reality.",
    "shippingDetail": "Delivery is made by Submerged Courier, ensuring safe transport through underwater channels to the buyer's location.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect lasting 3 seconds per use",
      "endsWhen": "The effect ends when the user activates another gravitational pulsation or after one long rest if no further activation occurs",
      "charges": "Unlimited uses, recharging once per long rest"
    },
    "priceReason": "This xenolith's rarity and unpredictable nature justify its high price in the market.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:37:40.589071+00:00",
    "aiReviewedAt": "2026-07-25T03:37:40.589071+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_anomalous_paradoxes_03": {
    "id": "doughnut_hole_item_anomalous_paradoxes_03",
    "name": "The Oscillating Gravitic Amplifier - Prototype Delta",
    "description": "The Oscillating Gravitic Amplifier - Prototype Delta is a sleek, metallic device that hums with an otherworldly energy. Crafted from a mysterious alloy of unknown origin, it emits a pulsating field of distorted gravity when activated. This device can amplify gravitational forces in its vicinity, creating unstable platforms and shockwaves capable of crushing objects or pulling enemies towards the wielder. However, its operational stability is highly questionable, making each use a gamble that could lead to catastrophic self-destruction.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Gravitational Crush",
      "Pulling Force"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Gravitic Transport Vessel",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Gravitational Crush",
        "rules": "When activated as an action within 30 feet of enemies, the device creates a cone-shaped area of gravitational distortion that deals 1d8 + 2d6 force damage to all creatures in the area. There is a 50% chance this effect will cause the amplifier to self-destruct after use."
      },
      {
        "title": "Pulling Force",
        "rules": "Once per short rest, the device can be used as an action to create a temporary gravitational pull that draws all creatures within 15 feet towards its center. This has a range of 30 feet and lasts for 1 minute. Creatures must succeed on a DC 15 Strength saving throw or be pulled into the area; those who fail are also knocked prone."
      }
    ],
    "levelRequirementReason": "Requires significant magical knowledge to operate this unstable prototype.",
    "vendorReason": "Void Vendor specializes in experimental and dangerous equipment, often procuring items from the graviton realms themselves.",
    "shippingDetail": "Due to its volatile nature, the amplifier must be transported under specialized containment protocols by the Gravitic Transport Vessel.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Gravitational Crush; lasts 1 minute for Pulling Force",
      "endsWhen": "Self-destructs with a chance of 50% after use or when destroyed by a successful DC 20 Strength check.",
      "charges": "Unlimited, but each use has a 50% risk of self-destruction."
    },
    "priceReason": "Balanced against the device's potential for destruction and unstable nature.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:37:42.302298+00:00",
    "aiReviewedAt": "2026-07-25T03:37:42.302298+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosted_rolls_of_brutal_fallen": {
    "id": "leclaire_isle_item_frosted_rolls_of_brutal_fallen",
    "name": "Brutal Fallen's Rolls",
    "description": "Brutal Fallen's Rolls are a twisted confection from the ancient Isle of Le Claire. These dark, frosted pastries pulse with a strange energy that seems to hum with the spirits of fallen warriors. Each bite releases a surge of sugary adrenaline, bolstering your strength and reflexes for a brief but intense moment. However, the sugar rush is fleeting, leaving you with a lingering fog in your mind as your accuracy plummets.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Boosted Strength",
      "Enhanced Reflexes"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Express Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Boosted Strength",
        "rules": "Consume the rolls to gain advantage on Strength checks and saving throws for 1 minute. The effect ends if you take damage or if you willingly end it early."
      },
      {
        "title": "Enhanced Reflexes",
        "rules": "Your Dexterity (Acrobatics) checks are made with advantage until your next short rest, but you suffer a -2 penalty to all attacks and saving throws. This effect is exhausted after 10 minutes or if you take damage."
      }
    ],
    "levelRequirementReason": "The rolls' power requires the eater to be at least level 15, ensuring they can handle the effects without immediate danger.",
    "vendorReason": "Dough Depot specializes in pastries and treats from all corners of the realm, including these rare and powerful confections.",
    "shippingDetail": "Ships via Express Drone with same-day delivery to major cities; rural areas may experience a two-day delay.",
    "usage": {
      "activation": "Eating one roll as an action.",
      "duration": "1 minute for Boosted Strength and 10 minutes for Enhanced Reflexes, each effect ends early if you take damage or end the effect voluntarily.",
      "endsWhen": "One of the effects ends when you take damage, at your discretion, or after its duration expires.",
      "charges": "Unlimited; can be consumed as often as needed."
    },
    "priceReason": "The rolls' unique and potent effects justify their high price in experience points.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T15:24:04.885804+00:00",
    "aiReviewedAt": "2026-07-25T15:24:04.885804+00:00",
    "aiReviewVersion": 1
  }
};
