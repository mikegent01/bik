// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_016 = {
  "feywild_woven_echo": {
    "id": "feywild_woven_echo",
    "name": "Woven Echo of the Courtly Whisper",
    "description": "A delicate silk sash woven with threads from the Feywild, this Woven Echo of the Courtly Whisper whispers fragments of forgotten lore upon its wearer. It subtly nudges one toward hidden paths or lost feasts, and when worn too long, it may cause time to stutter in a brief, disorienting fashion. The sash is said to have been crafted by Feywild artisans using magic from ancient feasts that have yet to be rediscovered.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whispered lore fragments",
      "Enhanced perception against Fey illusions"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Whispered Lore Fragments",
        "rules": "The sash grants the wearer a random fragment of forgotten lore during each long rest. This effect is passive and does not require an action to trigger."
      },
      {
        "title": "Enhanced Perception Against Fey Illusions",
        "rules": "While wearing this sash, the wearer gains a +1 bonus to Perception checks made against illusions originating from the Feywild. This effect persists until the wearer removes the sash or ends their turn in a non-Feywild location."
      }
    ],
    "levelRequirementReason": "The complexity of interacting with Feywild magic requires at least 3rd level to properly harness.",
    "vendorReason": "The sash was originally crafted by artisans in the Feywild and only sold by vendors who maintain connections with these realms.",
    "shippingDetail": "Ships via Lakitu Drones, known for their precise deliveries within the Feywild region. Delivery time may vary depending on the recipient’s location.",
    "usage": {
      "activation": "Passive effect upon donning",
      "duration": "Until removed or end of turn in a non-Feywild location",
      "endsWhen": "Sash is removed or wearer ends their turn outside the Feywild",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against its unique effects and the rarity of materials used in its crafting.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:32:12.547265+00:00",
    "aiReviewedAt": "2026-07-22T05:32:12.547265+00:00",
    "aiReviewVersion": 1
  },
  "feywild_woven_fey_loops": {
    "id": "feywild_woven_fey_loops",
    "name": "Woven Fey Loops",
    "description": "The Woven Fey Loops are an intricate tapestry of enchanted thread, each strand a shimmering weave of Feywild magic that loops through time and space. Wearers find themselves momentarily immune to any trap that relies on the passage of time, while also being able to create a fleeting 'loop bubble'—a pocket of reality where time seems suspended. This loop grants the wearer a brief window of freedom from danger.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Create a 5ft radius loop bubble",
      "Immunity to time-based traps"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Loop Bubble",
        "rules": "The wearer can create a 5-foot-radius loop bubble that resists any time-based effect. This effect is instantaneous and lasts for 1 minute, after which the loop collapses. The wearer must use their action to activate it."
      },
      {
        "title": "Immunity to Time-Based Traps",
        "rules": "While wearing the Woven Fey Loops, the wearer gains +2 to saving throws against traps that rely on time manipulation or temporal anomalies. This benefit lasts until the end of their next turn after the loop bubble collapses."
      }
    ],
    "levelRequirementReason": "The loops are crafted from simple magic but require a basic understanding of Feywild lore to wield effectively.",
    "vendorReason": "The Feywild merchants specialize in enchanted items drawn directly from the heart of their realm, and these Loops are no exception.",
    "shippingDetail": "Ships via the Void Drifter Relay, ensuring safe delivery through the ethereal corridors of the Feywild.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The loop collapses at the end of the wearer's next turn after activation.",
      "charges": "Unlimited; regenerates upon collapse"
    },
    "priceReason": "Crafted from Feywild threads and imbued with basic temporal magic, these loops offer a practical yet limited boon to adventurers.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:32:25.335571+00:00",
    "aiReviewedAt": "2026-07-22T05:32:25.335571+00:00",
    "aiReviewVersion": 1
  },
  "final_form_unlock_key": {
    "id": "final_form_unlock_key",
    "name": "Final Form Unlock Key",
    "description": "The Final Form Unlock Key is a gleaming, rune-engraved key made of adamantine and platinum. It whispers promises of untapped potential and ancient lore when touched. Only those who have reached the pinnacle of their journey may claim this key, as it unlocks the final form that lies dormant within each soul. Once used, the key transforms the user into a paragon of their chosen path, granting access to all class features, spells, and abilities they've ever mastered.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔑",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Unlock your character's ultimate potential",
      "Gain all class features, spells, and abilities from all classes"
    ],
    "vendor": "transformation_services",
    "shippedBy": "Power Unleashed",
    "levelRequirement": 80,
    "effectDetails": [
      {
        "title": "Final Form Revelation",
        "rules": "Activating the key is a bonus action. The key grants you access to all class features, spells, and abilities that you have ever selected or gained through feats or racial traits. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Unlocked Abilities",
        "rules": "You gain proficiency in any tools or weapons you previously had proficiency with. Additionally, you can use any spells you've learned from all spell lists. These abilities do not require a save or check to maintain."
      }
    ],
    "levelRequirementReason": "Only characters who have reached the pinnacle of their journey may unlock their final form.",
    "vendorReason": "Transformation Services specializes in unlocking potential and is trusted by adventurers seeking to reach their ultimate forms.",
    "shippingDetail": "Ships via a specialized magic courier, arriving within an hour of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next long rest",
      "endsWhen": "The effect ends when you complete a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1,000 XP due to its powerful effects and the significant level requirement.",
    "priceOriginal": 85000000,
    "priceReviewedAt": "2026-07-22T05:32:54.341053+00:00",
    "aiReviewedAt": "2026-07-22T05:32:54.341053+00:00",
    "aiReviewVersion": 1
  },
  "fire_bro_fireball": {
    "id": "fire_bro_fireball",
    "name": "Fire Bro Fireball Glove",
    "description": "The Fire Bro Fireball Glove is a gauntlet forged from the very heart of a volcano. Its surface glows with an eerie, pulsating heat, and the leather is embossed with ancient runes that emit sparks when agitated. This glove launches fiery projectiles that ricochet off surfaces before detonating, creating a cascade of flames upon impact. The gloves are said to have been crafted by a blacksmith whose forge never cooled, ensuring each pair's unparalleled craftsmanship.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Bouncing Fireball",
      "Volcanic Ignition"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Volcanic Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bouncing Fireball",
        "rules": "As a bonus action, the wearer can launch a fireball that bounces off one surface before detonating. The initial explosion deals 2d6 fire damage to all creatures in a 10-foot radius. On a successful DC 14 Dexterity saving throw, the target takes half as much damage and is immune to the effect for 1 minute."
      },
      {
        "title": "Volcanic Ignition",
        "rules": "When the fireball detonates, it ignites any flammable objects in the area. These objects catch fire and burn until doused or extinguished. This effect does not ignite creatures or magical flames."
      }
    ],
    "levelRequirementReason": "Requires a minimum of 5 levels to wield effectively, as it demands precision and control over such volatile magic.",
    "vendorReason": "The Onyx Hand specializes in crafting items that harness elemental forces, making them the perfect vendor for this glove.",
    "shippingDetail": "Ships via a courier who personally delivers the gloves from the forge where they were created, ensuring they arrive in pristine condition.",
    "usage": {
      "activation": "Bonus action to launch a fireball.",
      "duration": "Instantaneous; recharges after a short rest.",
      "endsWhen": "Exhausted when all charges are used.",
      "charges": "3 uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its craftsmanship and the risk involved in using such a volatile item.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T05:32:14.139458+00:00",
    "aiReviewedAt": "2026-07-22T05:32:14.139458+00:00",
    "aiReviewVersion": 1
  },
  "fire_flower": {
    "id": "fire_flower",
    "name": "Fire Flower",
    "description": "The Fire Flower is a radiant orange blossom that crackles with intense thermal energy. Its petals are imbued with the fiery breath of ancient volcanoes, and when consumed, it grants you pyrokinetic abilities. For one minute, you can cast Produce Flame at will to ignite your surroundings and create a wall of fire. Additionally, you gain the power to unleash a scorching burst of flames in a 15-foot cone with Burning Hands.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Pyrokinetic Mastery",
      "Burning Burst"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Insulated Container Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pyrokinetic Mastery",
        "rules": "You can cast the spell Produce Flame at will, allowing you to create a wall of fire that deals 1d6 fire damage per foot (up to 5 feet) to all creatures in the wall's area. This effect lasts for the duration."
      },
      {
        "title": "Burning Burst",
        "rules": "You can use this ability once, dealing 8d6 fire damage in a 15-foot cone. Creatures within the area must make a DC 13 Dexterity saving throw or take half the damage and be knocked prone."
      }
    ],
    "levelRequirementReason": "The Fire Flower's effects are potent, but its power is balanced for lower-level characters to aid in early exploration.",
    "vendorReason": "Toad Town Market specializes in exotic and magical consumables that can be found only within the market's bustling stalls.",
    "shippingDetail": "The Fire Flower is shipped using specially insulated containers to preserve its potency until it reaches the recipient.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "One minute for Pyrokinetic Mastery, Instantaneous for Burning Burst",
      "endsWhen": "The duration ends when the effect expires or you take damage.",
      "charges": "Once per day"
    },
    "priceReason": "Given its limited daily use and powerful effects, the Fire Flower is priced at 1000 XP to balance its rarity and utility.",
    "priceOriginal": 30000,
    "priceReviewedAt": "2026-07-22T05:32:29.219211+00:00",
    "aiReviewedAt": "2026-07-22T05:32:29.219211+00:00",
    "aiReviewVersion": 1
  },
  "fire_flower_pendant": {
    "id": "fire_flower_pendant",
    "name": "Fire Flower Pendant",
    "description": "The Fire Flower Pendant is a necklace crafted from molten obsidian and enchanted with the spirit of a dormant fire flower. When worn, it emanates a gentle warmth that can be felt by all within ten feet. The pendant's core glows faintly, hinting at the untapped power within. It grants immunity to extreme heat up to 150°F and leaves a subtle, glowing mark on any surface it touches.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Fire Resistance",
      "Glowing Mark"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Sealed Urn",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flame Embrace",
        "rules": "The wearer can activate the pendant as an action to cast the Fire Bolt spell (1d8 fire damage) at a creature within 30 feet. The effect has no cooldown and can be used once per long rest."
      },
      {
        "title": "Glowing Mark",
        "rules": "The pendant leaves behind a glowing, faintly warm mark on any surface it touches for one hour. This mark provides advantage on saving throws against heat-related effects within 10 feet of the mark until expended by use or environmental factors."
      }
    ],
    "levelRequirementReason": "The pendant's enchantment is mild but effective, suitable for beginners to harness its power.",
    "vendorReason": "The market offers a variety of enchanted items, including the Fire Flower Pendant, which can be used by adventurers at any stage of their journey.",
    "shippingDetail": "Ships via Sealed Urn's express courier service within three days from Toad Town.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous with a long rest recharge",
      "endsWhen": "Expended or destroyed by use, environmental factors, or after one long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Fire Flower Pendant offers balanced utility and is priced accordingly for its fire resistance and occasional spell-casting capabilities.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T05:32:29.302213+00:00",
    "aiReviewedAt": "2026-07-22T05:32:29.302213+00:00",
    "aiReviewVersion": 1
  },
  "fire_shield_badge": {
    "id": "fire_shield_badge",
    "name": "Fire Shield Badge",
    "description": "The Fire Shield Badge is a small, molten badge that glows ominously in your hand, its surface etched with ancient runes of fire magic. When you wear it, it grants resistance to fire damage and protects you from freezing temperatures, making it invaluable for those who brave the fiery trials of the desert or the frosty mountains. Crafted by the artisan blacksmiths of Emberforge using a rare alloy known as Pyrolith, this badge is not just an item but a symbol of resilience against the harshest elements.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Resistance to Fire Damage",
      "Immunity to Freezing"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Fire Damage",
        "rules": "While wearing the Fire Shield Badge, you have resistance to fire damage. This effect lasts until the start of your next turn after activation."
      },
      {
        "title": "Immunity to Freezing",
        "rules": "For 1 hour each day while you wear the badge, you are immune to the effects of cold and freezing temperatures. You can activate this immunity as a bonus action at the beginning of your turn."
      }
    ],
    "levelRequirementReason": "The Fire Shield Badge requires no specific level because it provides essential protection against fire damage and offers a unique ability to remain unfrozen.",
    "vendorReason": "The Valley Trading Post often stocks rare and useful items crafted by local artisans, including the Fire Shield Badge.",
    "shippingDetail": "The badge is carefully packed in a protective case to ensure it reaches you in pristine condition.",
    "usage": {
      "activation": "Activate as a bonus action or reaction.",
      "duration": "Instantaneous; the fire resistance effect lasts until your next turn, and immunity to freezing lasts for 1 hour each day.",
      "endsWhen": "The effects end when you remove the badge or it is destroyed.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "The Fire Shield Badge offers significant protection against fire and freezing, making it a valuable item for adventurers facing challenging environments.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T05:32:54.399750+00:00",
    "aiReviewedAt": "2026-07-22T05:32:54.399750+00:00",
    "aiReviewVersion": 1
  },
  "first_attack_badge": {
    "id": "first_attack_badge",
    "name": "First Attack Badge",
    "description": "The First Attack Badge gleams with a metallic sheen, its design etched with ancient runes that whisper tales of swift victories past. This badge grants you an advantage on initiative rolls and allows you to make your first attack before any creature acting in the same round. It's said to have been crafted by rogue artisans from the depths of the Undercity, their work hidden beneath layers of secrecy.",
    "category": "equipment",
    "price": 1000,
    "icon": "👊",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Advantage on Initiative Rolls",
      "First Strike"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Priority Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Initiative Rolls",
        "rules": "When you roll initiative, you gain advantage. This effect lasts for the entire combat encounter."
      },
      {
        "title": "First Strike",
        "rules": "You can make your first attack of the round before any other creature acts. If you miss or are hit by an attack while making this attack, the ability ends immediately."
      }
    ],
    "levelRequirementReason": "The badge's power is subtle but potent, requiring no prior combat experience to wield.",
    "vendorReason": "Only the Rogueport Black Market dares sell items that grant such a significant advantage in combat.",
    "shippingDetail": "Delivered with utmost secrecy, ensuring it arrives safe and sound to your doorstep.",
    "usage": {
      "activation": "Automatic on initiative roll or when first attacking in the round",
      "duration": "Entire combat encounter",
      "endsWhen": "You are hit by an attack or miss with your first strike attempt",
      "charges": "Unlimited"
    },
    "priceReason": "The badge's rarity and unique crafting process justify its relatively modest price, though it represents a significant tactical advantage.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-22T05:33:10.410790+00:00",
    "aiReviewedAt": "2026-07-22T05:33:10.410790+00:00",
    "aiReviewVersion": 1
  },
  "flashlight": {
    "id": "flashlight",
    "name": "Bright Flashlight",
    "description": "The Bright Flashlight emits a steady, blinding beam of light that slices through the darkest corners of the night. Crafted from durable steel and encased in a weather-resistant shell, it not only illuminates your path but also repels spectral threats. Legend has it that this flashlight was forged by the hands of ancient blacksmiths who sought to protect against the undead. With batteries included, its glow can be relied upon even when supernatural forces are at play.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔦",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Cone of Light",
      "Repel Ghosts"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cone of Light",
        "rules": "The Bright Flashlight emits a 30-foot cone of blinding light. Creatures in the area must make a DC 14 Constitution saving throw or be blinded until the end of their next turn."
      },
      {
        "title": "Repel Ghosts",
        "rules": "Ghosts and similar incorporeal creatures within 30 feet that can see the flashlight’s light have disadvantage on attack rolls and ability checks. They also cannot use their Invisibility feature while in this area."
      }
    ],
    "levelRequirementReason": "The Bright Flashlight is designed for beginners to help them navigate safely without requiring advanced skills.",
    "vendorReason": "The Toad Town Market caters to adventurers seeking essential gear, including this flashlight that has proven invaluable in the region's haunted forests.",
    "shippingDetail": "Ships within a week with Standard Courier; expedited shipping available for an additional fee.",
    "usage": {
      "activation": "A bonus action to activate or deactivate the flashlight.",
      "duration": "Instantaneous activation, lasts until turned off.",
      "endsWhen": "The flashlight is switched off.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The balanced price reflects both its material quality and the supernatural benefits it offers without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T05:33:30.923384+00:00",
    "aiReviewedAt": "2026-07-22T05:33:30.923384+00:00",
    "aiReviewVersion": 1
  },
  "flower_kingdom_floral_arrangement_magic": {
    "id": "flower_kingdom_floral_arrangement_magic",
    "name": "Flower Kingdom Magical Floral Arrangement",
    "description": "The Flower Kingdom Magical Floral Arrangement is a meticulously crafted bouquet of vibrant blooms that not only captivate with their beauty but also protect and heal. Each blossom, handcrafted by the renowned Flower Kingdom Florists, radiates a subtle, rejuvenating essence when its fragrant petals are inhaled. The arrangement's thorns, though ornamental, can unleash a minor alarm if disturbed, ensuring your privacy is respected. Watering this masterpiece daily keeps it content; neglect it for too long, and it transforms into a cluster of hostile twig blights, attacking any who dare come near.",
    "category": "premium",
    "price": 1000,
    "icon": "🌸",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Healing Breeze",
      "Alarming Thorns"
    ],
    "vendor": "flower_kingdom",
    "shippedBy": "Pollen Cloud Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Breeze",
        "rules": "As a bonus action, the user can breathe in the floral essence of the arrangement to gain 1d4 temporary hit points. This effect lasts for one hour and can be used once per day."
      },
      {
        "title": "Alarming Thorns",
        "rules": "The flowers emit an audible alarm when physically disturbed or if their daily watering requirement is not met. This is treated as a non-magical, 10-foot-radius alarm spell with a duration of one hour and a save DC of 12 to ignore."
      }
    ],
    "levelRequirementReason": "This arrangement requires no specific level because it provides daily benefits that are accessible to all adventurers.",
    "vendorReason": "The Flower Kingdom Florists are renowned for their magical creations and ensure the arrangements remain in perfect condition.",
    "shippingDetail": "Ships via Pollen Cloud Express, delivered within three days of purchase, ensuring the flowers arrive fresh and vibrant.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Hour",
      "endsWhen": "Daily use ends after one hour; watering prevents it from becoming hostile.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The arrangement's price is set at a fair value, reflecting its daily utility and the quality craftsmanship of the Flower Kingdom Florists.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T05:33:13.236642+00:00",
    "aiReviewedAt": "2026-07-22T05:33:13.236642+00:00",
    "aiReviewVersion": 1
  },
  "flower_kingdom_petal_glider_premium": {
    "id": "flower_kingdom_petal_glider_premium",
    "name": "Flower Kingdom Petal Glider (Premium)",
    "description": "Crafted from the finest petals of the Flower Kingdom, this premium glider is a masterpiece of floral engineering. Its wings shimmer and shift like living flowers, perfectly attuned to the whimsical winds that float through the kingdom's gardens. Glide gracefully on these floral breezes for short distances, or land safely in times of need—its petals wilt only after exposure to water, ensuring it remains in pristine condition until its next use.",
    "price": 1000,
    "icon": "🌸",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Glide Gracefully",
      "Water-sensitive"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Petal Pack Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glide Gracefully",
        "rules": "As a bonus action, the wielder can glide up to 30 feet through the air. This effect is usable once per day and provides a +2 bonus on Dexterity (Acrobatics) checks made to avoid falling damage in gardens."
      },
      {
        "title": "Water-sensitive",
        "rules": "The glider wilts after exposure to water, requiring immediate repairs or drying before it can be used again. It regains its functionality once thoroughly dried and is usable again the next day."
      }
    ],
    "levelRequirementReason": "This premium glider is crafted for beginners who wish to explore the gardens of the Flower Kingdom without needing high-level skills.",
    "vendorReason": "The flower artisans at Flower Kingdom Garden are renowned for their craftsmanship, ensuring that each glider meets the highest standards of quality and functionality.",
    "shippingDetail": "Ships via Petal Pack Express within 3 days, directly from the heart of the Flower Kingdom.",
    "usage": {
      "activation": "Bonus action to glide up to 30 feet through the air",
      "duration": "Instantaneous effect; usable once per day",
      "endsWhen": "Exhausted after one use or exposure to water",
      "charges": "Once per day, recharges daily"
    },
    "priceReason": "Balanced at 1000 XP, this glider offers a unique and useful feature without overpricing itself.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T05:33:26.245090+00:00",
    "aiReviewedAt": "2026-07-22T05:33:26.245090+00:00",
    "aiReviewVersion": 1
  },
  "flower_kingdom_petal_petal_salad_recipe": {
    "id": "flower_kingdom_petal_petal_salad_recipe",
    "name": "Recipe: Flower Kingdom Petal Salad",
    "description": "The Recipe: Flower Kingdom Petal Salad promises a symphony of colors and flavors, each petal carefully selected from the blooming gardens of the Flower Kingdom. This dish not only heals but also harmonizes with nature's essence, granting you advantage on all Nature checks for two hours after consumption. The salad requires fresh petals gathered at dawn when the dew is still present; only then does it possess its full healing and advantageous properties.",
    "price": 1000,
    "icon": "🥗",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Nature's Advantage",
      "Healing Petals"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Petal Platter Page",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nature's Advantage",
        "rules": "After consuming this dish, you gain advantage on all Nature checks for a duration of two hours. This effect is instantaneous and does not require any additional action."
      },
      {
        "title": "Healing Petals",
        "rules": "When you eat the salad, you heal 1d6 hit points. The effects of this healing are immediate upon consumption. If the salad is not made with fresh petals from dawn dew, the advantage on Nature checks and healing effect are halved."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for even the novice adventurer to learn.",
    "vendorReason": "The Kingdom Gardeners specialize in growing and harvesting the petals used in this legendary dish.",
    "shippingDetail": "Shipped by the trusted Petal Platter Page, ensuring that each salad arrives fresh from the gardens of the Flower Kingdom.",
    "usage": {
      "activation": "Instantaneous upon consumption.",
      "duration": "Two hours for advantage on Nature checks; immediate healing effect is permanent once consumed.",
      "endsWhen": "The effects end naturally after their specified duration or if the dish is not made with fresh petals from dawn dew.",
      "charges": "Unlimited, as long as you have access to fresh petals."
    },
    "priceReason": "The rarity and specific requirements for ingredients make this recipe a valuable and sought-after item in the market.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T05:33:40.899554+00:00",
    "aiReviewedAt": "2026-07-22T05:33:40.899554+00:00",
    "aiReviewVersion": 1
  },
  "flower_kingdom_petal_petticoat": {
    "id": "flower_kingdom_petal_petticoat",
    "name": "Flower Kingdom Petal Petticoat",
    "description": "The Flower Kingdom Petal Petticoat is a layered garment of fresh, vibrant petals that shimmers in the light like a garden come to life. Worn by royalty and noblewomen alike, it whispers with each step, releasing a calming scent that soothes both heart and soul. Crafted by the skilled hands of the Flower Dressmakers using petals harvested from the royal gardens, this petticoat not only enhances one's charisma in horticultural settings but also brings a touch of nature to every appearance.",
    "category": "equipment",
    "price": 1000,
    "icon": "👗",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Charisma Boost",
      "Scent of Tranquility"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Blooming Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When worn within a garden, the wearer gains advantage on Charisma checks and saving throws. This effect lasts for 1 hour or until the wearer leaves a garden."
      },
      {
        "title": "Scent of Tranquility",
        "rules": "The petticoat releases a calming scent that grants targets nearby advantage on saves against fear effects, provided they are within 30 feet. This effect lasts for 1 minute per hour the garment is worn and can be used once every long rest."
      }
    ],
    "levelRequirementReason": "The Flower Kingdom Petal Petticoat requires only a basic understanding of etiquette, suitable for beginners.",
    "vendorReason": "The Flower Dressmakers are renowned for their intricate craftsmanship and knowledge of the royal gardens, making them the perfect vendors for this unique item.",
    "shippingDetail": "Ships within a week with careful handling to ensure petals remain fresh during transit.",
    "usage": {
      "activation": "Passive effect upon wearing in a garden.",
      "duration": "1 hour or until the wearer leaves a garden.",
      "endsWhen": "Wearer leaves a garden.",
      "charges": "Unlimited; regenerates with daily wear."
    },
    "priceReason": "The Flower Kingdom Petal Petticoat is priced at 1000 XP, reflecting its craftsmanship and the rarity of the petals used in its creation.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T05:33:44.738383+00:00",
    "aiReviewedAt": "2026-07-22T05:33:44.738383+00:00",
    "aiReviewVersion": 1
  },
  "flower_kingdom_petal_presser": {
    "id": "flower_kingdom_petal_presser",
    "name": "Flower Kingdom Petal Presser",
    "description": "The Flower Kingdom Petal Presser, a delicate brass contraption forged from the heart of the kingdom's gardens, flattens petals with precision for use in floral recipes. Crafted by the skilled hands of the Kingdom Gardeners, it extracts essence from pressed blooms to heal wounds, restoring vitality and color back into life. Overuse risks crushing fragile petals beyond repair, but when used correctly, its touch is as gentle as a gardener's hand.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥗",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Presses delicate petals",
      "Heals with extracted essence"
    ],
    "vendor": "flower_kingdom_garden",
    "shippedBy": "Bloom Press Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Floral Press",
        "rules": "Activate on your action. This device presses one bloom in your possession, granting +1 to Nature checks for any floral recipe or related skill check. The bloom must be fresh and intact; overuse risks damaging the petals beyond use."
      },
      {
        "title": "Essence Extract",
        "rules": "Once per short rest after pressing a flower, you can apply the extracted essence to a creature within 5 feet. This essence heals 1d4+2 hit points. A creature can only benefit from this effect once every long rest."
      }
    ],
    "levelRequirementReason": "Beginners can learn to use the Petal Presser with minimal training, making it accessible to all adventurers.",
    "vendorReason": "The gardeners of Flower Kingdom are known for their expertise in botany and herbal medicine; they naturally offer this useful tool.",
    "shippingDetail": "Ships within the kingdom via the Royal Blossom Express, ensuring petals remain fresh during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The bloom is crushed or essence is applied; the device requires a fresh bloom for each use.",
      "charges": "Unlimited"
    },
    "priceReason": "The Petal Presser's balance reflects its utility in both culinary and healing applications, making it an essential tool for any adventurer.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T05:33:57.408934+00:00",
    "aiReviewedAt": "2026-07-22T05:33:57.408934+00:00",
    "aiReviewVersion": 1
  },
  "fludd_unit": {
    "id": "fludd_unit",
    "name": "F.L.U.D.D. Unit",
    "description": "The F.L.U.D.D. Unit is a backpack encased in sleek, reflective armor, its AI companion whispering updates and advice. Deployed from a gilded gryphon vendor, this device can transform any battlefield with its versatile nozzles: the Hover Nozzle grants you flight for a turn, while the Turbo Nozzle lets you dash as a bonus action. The Water Gun is not just a nozzle but an on-demand deluge that pushes enemies away and leaves them drenched in confusion.",
    "category": "equipment",
    "price": 1000,
    "icon": "💧",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Water Jet",
      "Flight"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Swift Gryphon Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Water Jet",
        "rules": "As a bonus action, activate the Water Gun to unleash a jet of water. This pushes any creature within 10 feet away from you by 20 feet (STR save DC 14). The target must succeed on this saving throw or be pushed and fall prone if in an environment with no room to move."
      },
      {
        "title": "Flight",
        "rules": "Activate the Hover Nozzle as a bonus action. You gain fly speed of up to 30 feet until your next turn, but you must land at the end of your movement or else fall prone. This effect ends if you take damage."
      }
    ],
    "levelRequirementReason": "Requires proficiency with ranged weapons and a certain degree of dexterity to manage its AI companion effectively.",
    "vendorReason": "The gilded gryphon is known for its expertise in crafting and distributing advanced battlefield tools, including the F.L.U.D.D. Unit.",
    "shippingDetail": "Delivered by a swift gryphon courier to your doorstep within an hour of purchase.",
    "usage": {
      "activation": "Bonus action for Water Jet; bonus action or reaction for Flight (ends if you take damage)",
      "duration": "Instantaneous effect for Water Jet; lasts until end of next turn for Flight",
      "endsWhen": "Targeted save failure, fall prone on terrain restrictions, or taking damage.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's unique AI capabilities and versatility in enhancing combat scenarios.",
    "priceOriginal": 260000,
    "priceReviewedAt": "2026-07-22T05:34:04.094711+00:00",
    "aiReviewedAt": "2026-07-22T05:34:04.094711+00:00",
    "aiReviewVersion": 1
  },
  "forbidden_artifact_activation": {
    "id": "forbidden_artifact_activation",
    "name": "Forbidden Artifact Activation",
    "description": "The Forbidden Artifact Activation is a ritual that can be performed to awaken a dormant artifact. It is an ancient and dangerous procedure, often carried out by those seeking forbidden knowledge or power. The ritual requires precise incantations and gestures, and once begun, it cannot be interrupted. The ritual has a chance of unlocking new powers within the artifact, but also risks triggering unpredictable and catastrophic effects that could unravel reality itself.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🏺",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Artifact Awakens",
      "Risks Catastrophic Effects"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Ritual Scroll",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Artifact Awakens",
        "rules": "Activates once per long rest. The artifact gains a new power at the DM's discretion, but this may come with unforeseen consequences."
      },
      {
        "title": "Risks Catastrophic Effects",
        "rules": "Each activation has a 10% chance to trigger a catastrophic effect that could affect the caster or their surroundings. The DM determines the nature and extent of these effects."
      }
    ],
    "levelRequirementReason": "This ritual is extremely dangerous and requires significant magical aptitude.",
    "vendorReason": "The crypt courier has access to ancient knowledge and forbidden magic that allows them to offer this service.",
    "shippingDetail": "The ritual scroll is delivered via a mysterious courier who arrives at night, leaving the artifact in a hidden compartment within an ancient stone chest.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Completion or catastrophic effect",
      "charges": "Once per long rest"
    },
    "priceReason": "The ritual is complex and requires rare ingredients, making it costly.",
    "priceOriginal": 900000,
    "priceReviewedAt": "2026-07-22T05:33:54.767166+00:00",
    "aiReviewedAt": "2026-07-22T05:33:54.767166+00:00",
    "aiReviewVersion": 1
  },
  "forbidden_dimensional_rift": {
    "id": "forbidden_dimensional_rift",
    "name": "Forbidden Dimensional Rift",
    "description": "The Forbidden Dimensional Rift is a shimmering, vortex-like rift that pulses with otherworldly energy. Crafted from forbidden materials found in the deepest pits of the Abyss, this rift allows you to open a portal between dimensions. With each use, the rift's chaotic nature risks summoning unexpected planar effects, potentially disrupting reality itself. This artifact is relentlessly hunted by cosmic entities who covet its power for their own dark purposes.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Dimensional Transport",
      "Risk of Planar Effects"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Void Box",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Dimensional Transport",
        "rules": "Activates as a bonus action. The user opens a rift to another dimension, allowing them to teleport themselves or an object up to 30 feet in size to the targeted location within the same plane of existence. The effect lasts until the end of their next turn and is limited to once per long rest."
      },
      {
        "title": "Risk of Planar Effects",
        "rules": "Each use risks summoning a random planar effect from the Outer Planes, which has a 10% chance. These effects are temporary and last until the end of the user's next turn. If summoned, the DM rolls on the Planar Effect table found in the Dungeon Master’s Guide to determine the nature and severity."
      }
    ],
    "levelRequirementReason": "This item requires a high level of arcane knowledge and power to safely use without causing catastrophic disruptions.",
    "vendorReason": "The Celestial Exchange deals in forbidden and powerful artifacts, making it the only known source for this dangerous but invaluable artifact.",
    "shippingDetail": "The Void Box delivers with a delay of one week due to the nature of dimensional transport involved in shipping such an item.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Ends at the end of the user's next turn or if the rift is closed prematurely by the user.",
      "charges": "One use per long rest"
    },
    "priceReason": "The price reflects its godly rarity and the risk associated with its use, making it a valuable but dangerous asset.",
    "priceOriginal": 2000000,
    "priceReviewedAt": "2026-07-22T05:34:26.386796+00:00",
    "aiReviewedAt": "2026-07-22T05:34:26.386796+00:00",
    "aiReviewVersion": 1
  },
  "forbidden_knowledge_scroll": {
    "id": "forbidden_knowledge_scroll",
    "name": "Forbidden Knowledge Scroll",
    "description": "The Forbidden Knowledge Scroll is a brittle, ancient scroll covered in arcane symbols that glow faintly with an ethereal light. Its origins are shrouded in mystery, having been crafted by forgotten scholars who sealed their deepest secrets within its parchment. Each use of this forbidden tome grants the reader one *Wish*-like effect, but at a terrible cost: a random madness afflicts them for 1d4 days following each invocation. The scroll is relentlessly pursued by cosmic entities that seek to destroy it before its secrets are fully uncovered.",
    "category": "forbidden",
    "price": 1000,
    "icon": "📜",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Grants one *Wish*-like effect",
      "Each use causes random madness (1d4 days)"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Lead Box",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Wish-Like Effect",
        "rules": "Activates on command as an action. The user can wish for any one object, being, or effect within the scroll's capabilities. This is subject to DM discretion and the laws of physics. The effect lasts until expended."
      },
      {
        "title": "Random Madness",
        "rules": "Occurs immediately after use, lasting 1d4 days. During this time, the user must make a DC 20 Wisdom saving throw or become insane for the duration. The exact nature of the madness is determined by the DM and can include hallucinations, delusions, or other debilitating effects."
      }
    ],
    "levelRequirementReason": "This scroll requires significant magical power to access its forbidden secrets.",
    "vendorReason": "The crypt courier deals in the most dangerous and sought-after items, including forbidden knowledge scrolls.",
    "shippingDetail": "Shipped securely within a lead-lined box to prevent any accidental exposure of its contents during transit.",
    "usage": {
      "activation": "Activates on command as an action.",
      "duration": "Instantaneous for the *Wish*-like effect; lasts until expended for madness.",
      "endsWhen": "The effect is used or madness subsides.",
      "charges": "Recharges after 7 days of rest."
    },
    "priceReason": "This scroll's price reflects its godly rarity and the immense power it contains, balanced against the risk of madness.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-22T05:35:06.682105+00:00",
    "aiReviewedAt": "2026-07-22T05:35:06.682105+00:00",
    "aiReviewVersion": 1
  },
  "forbidden_summoning_circle": {
    "id": "forbidden_summoning_circle",
    "name": "Forbidden Summoning Circle",
    "description": "The Forbidden Summoning Circle is a dark and intricate design etched into a circular stone. Its ancient runes glow with an eerie, violet light, summoning creatures from realms beyond. Once activated, it can bring forth powerful fiends or other CR 15+ entities that remain loyal for one hour, aiding the caster in battle before they are dismissed or fall to their own nature. However, its use is fraught with danger; it may attract the attention of other dimension-hopping entities and unwanted interdimensional visitors.",
    "category": "forbidden",
    "price": 1000,
    "icon": "⭕",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Summons a CR 15+ creature (DM discretion)",
      "Loyalty lasts for one hour"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Blood Ink Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Summon",
        "rules": "Requires an action. The summoned creature remains loyal to the caster for one hour or until dismissed by the caster. If not dismissed, it returns to its plane of origin at the end of this duration."
      },
      {
        "title": "Attracts Attention",
        "rules": "There is a 25% chance that another creature from an adjacent plane will be drawn in for every hour the summoned creature remains active, requiring a DC 18 Constitution saving throw to resist. Failure results in an additional hostile creature appearing."
      }
    ],
    "levelRequirementReason": "Requires significant power and control to safely summon and handle such dangerous creatures.",
    "vendorReason": "Crypt Courier deals with the black market and forbidden magic, making them a suitable vendor for this item.",
    "shippingDetail": "Ships via an arcane courier pigeon that ensures the package arrives within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "One hour or until dismissed",
      "endsWhen": "Creature is dismissed by the caster or returns to its plane after one hour",
      "charges": "Unlimited, but may only be used once per long rest"
    },
    "priceReason": "Balanced at a price of 1000 XP, reflecting the high risk and power associated with summoning such creatures.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T05:34:13.267923+00:00",
    "aiReviewedAt": "2026-07-22T05:34:13.267923+00:00",
    "aiReviewVersion": 1
  },
  "forbidden_weapon_forging": {
    "id": "forbidden_weapon_forging",
    "name": "Forbidden Weapon Forging",
    "description": "The Forbidden Weapon Forging is a sentient weapon forged in the shadows of forgotten realms, its core crafted from the bones of ancient gods and cursed with forbidden magic. It exudes an aura of malevolent power, capable of dealing +3d6 damage of any type, but at a cost—each use has a 10% chance to curse the wielder with a lingering malady. The weapon's very essence craves more, feeding on the wielder’s willpower and resilience over time.",
    "category": "forbidden",
    "price": 1000,
    "icon": "⚔️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Random Damage Type",
      "Curse Chance"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Cursed Forge",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Random Damage Type",
        "rules": "When used, this weapon deals +3d6 damage of a random type. The wielder must make a DC 17 Constitution saving throw or be cursed with a lingering malady that reduces their hit point maximum by 2 until cured."
      },
      {
        "title": "Curse Chance",
        "rules": "There is a 10% chance each use to curse the wielder. The curse lasts for 24 hours and can only be removed through specific rituals or magical means. Wielding this weapon beyond its limits risks permanent corruption."
      }
    ],
    "levelRequirementReason": "Only those of considerable strength and experience can harness the raw power without succumbing to the weapon’s malevolent nature.",
    "vendorReason": "The crypt courier dares to offer this forbidden weapon, knowing full well its potential for mayhem. They have seen many fall under its curse and thus are cautious in their dealings with it.",
    "shippingDetail": "Ships via the Cursed Forge, a delivery that takes twice as long due to the weapon's malevolent nature, but arrives intact if the recipient can withstand the weapon’s aura.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous",
      "endsWhen": "When its uses are exhausted or the wielder is cursed by it",
      "charges": "10 charges, recharged at dawn"
    },
    "priceReason": "This weapon’s price reflects its rarity and the risk involved in using it. Its forbidden nature ensures that only those willing to pay a premium for power will consider purchasing it.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-22T05:35:03.042009+00:00",
    "aiReviewedAt": "2026-07-22T05:35:03.042009+00:00",
    "aiReviewVersion": 1
  },
  "forgery_commission": {
    "id": "forgery_commission",
    "name": "Forgery Commission (1 Document)",
    "description": "TheForgery Commission is a rare service offered by Rogueport's Black Market. For a sum of 5,500 XP, you can hire a master forger to create a convincing fake document that could pass inspection with only a DC 12 check. The forgery takes three days to complete and requires a successful DC 16 Deception or Sleight of Hand check to ensure its authenticity. However, if the document is scrutinized closely, there's a risk it will be discovered.",
    "category": "services",
    "price": 5500,
    "icon": "🖇️",
    "stock": 15,
    "rarity": "rare",
    "effects": [
      "Create 1 convincing forged document",
      "Forgery DC 16 to detect (normal inspection: DC 12)"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Covert Delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Document Creation",
        "rules": "Activates on command. The forgery takes three days to complete and requires a successful DC 16 Deception or Sleight of Hand check. Once created, the document is indistinguishable from an original without close inspection."
      },
      {
        "title": "Detection Difficulty",
        "rules": "The document can be detected with a normal inspection using a DC 12 Wisdom (Insight) check. A successful Deception or Sleight of Hand check by the forger reduces this to DC 16."
      }
    ],
    "levelRequirementReason": "Requires at least level 4 to ensure the caster has the necessary skill and experience to understand the complexity of the forgery.",
    "vendorReason": "The Rogueport Black Market is known for its specialized services, including those from master forgers who can craft convincing fakes.",
    "shippingDetail": "Documents are sent via a secure courier service to ensure they reach you in three days without being intercepted or examined.",
    "usage": {
      "activation": "Command word",
      "duration": "Instantaneous upon completion of the forgery process",
      "endsWhen": "The document is discovered or destroyed",
      "charges": "Unlimited, as the service can be used multiple times"
    },
    "priceReason": "The price reflects the expertise and time required to create a convincing fake that can pass inspection with only a DC 12 check.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T05:34:28.454214+00:00",
    "aiReviewedAt": "2026-07-22T05:34:28.454214+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_bamboo_steamer": {
    "id": "formosa_ultima_bamboo_steamer",
    "name": "Formosa Ultima Bamboo Steamer",
    "description": "Crafted from ancient Formosa bamboo, this steamer ensures that every rice ball and delicate dish emerges perfectly shaped without sticking. Its layers preserve nutrients, granting +1 hit point to any character who consumes a meal prepared in it. The steamers warp at extreme dry heat but are easily restored by a quick dip in water. A specialty of the Ultima Bamboo Crafters, this item has been trusted for generations across Formosa Village.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍙",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Nutrient-Preserving Steam",
      "Shape-Shaping Advantage"
    ],
    "vendor": "formosa_ultima_village",
    "shippedBy": "Bamboo Basket Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nutrient-Preserving Steam",
        "rules": "When a meal is prepared in the steamer, any character consuming it gains +1 hit point. This effect does not stack with similar effects."
      },
      {
        "title": "Shape-Shaping Advantage",
        "rules": "The user has advantage on Dexterity (Sleight of Hand) checks to shape and form rice into perfect spheres or delicate forms."
      }
    ],
    "levelRequirementReason": "This steamer is designed for beginners in the kitchen, making it accessible to all adventurers.",
    "vendorReason": "Formosa Village is known for its bamboo craftsmanship and this steamer is a signature product of their artisans.",
    "shippingDetail": "Ships within one week, delivered by trusted Bamboo Basket Bundle couriers.",
    "usage": {
      "activation": "Passive upon preparation of food in the steamer.",
      "duration": "Instantaneous and permanent for each meal prepared.",
      "endsWhen": "Exhausted with use; no recharge required.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The price reflects the craftsmanship, rarity of materials, and long-standing tradition behind this culinary tool.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T05:34:39.843146+00:00",
    "aiReviewedAt": "2026-07-22T05:34:39.843146+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_beauty_enhancement": {
    "id": "formosa_ultima_beauty_enhancement",
    "name": "Formosa Ultima Beauty Enhancement",
    "description": "Formosa Ultima's Beauty Enhancement transforms you into a living masterpiece, your features captured in timeless perfection. For one week, your appearance becomes a canvas of Renaissance elegance, granting +2 Charisma and -2 Dexterity. Art critics from around the globe may seek to 'collect' this moving portrait, turning your journey into a whirlwind of admiration or scrutiny. Beware: water damage can shatter your delicate form, so avoid rain at all costs.",
    "category": "services",
    "price": 1000,
    "icon": "🎨",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Living Portrait",
      "Critic's Desire"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Canvas Wrap Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Living Portrait",
        "rules": "For a duration of one week (7 days), you gain +2 Charisma and -2 Dexterity. This effect is passive and does not require any action to activate or maintain."
      },
      {
        "title": "Critic's Desire",
        "rules": "Art critics from the Formosa Ultima Atelier may attempt to 'collect' you, which requires a successful DC 15 Persuasion check. If successful, they will request your company for an exhibition, ending the duration of this effect."
      }
    ],
    "levelRequirementReason": "This enhancement is suitable for characters who have reached a level where they can afford to invest in their social graces without compromising combat capabilities.",
    "vendorReason": "Formosa Ultima Atelier specializes in enhancing beauty and artistry, making this service part of its core offerings.",
    "shippingDetail": "The enhancement is shipped via Canvas Wrap Express, ensuring your portrait arrives safely and undamaged.",
    "usage": {
      "activation": "Passive effect upon application by a Formosa Ultima Atelier master painter.",
      "duration": "One week (7 days).",
      "endsWhen": "Art critics successfully Persuade you to join an exhibition or when water damage occurs.",
      "charges": "Unlimited; the enhancement can be reapplied."
    },
    "priceReason": "The balanced XP price reflects a service that provides significant social benefits but does not impact combat effectiveness, making it accessible to mid-level characters.",
    "priceOriginal": 22500,
    "priceReviewedAt": "2026-07-22T05:34:55.082885+00:00",
    "aiReviewedAt": "2026-07-22T05:34:55.082885+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_embroidered_kimono": {
    "id": "formosa_ultima_embroidered_kimono",
    "name": "Formosa Ultima Embroidered Kimono",
    "description": "This exquisite kimono, embroidered with the delicate motifs of a mystical island, whispers tales of ancient Formosa. The silk fabric is as soft as spring petals and as resilient as bamboo, making it a masterpiece of Ultima Tailors' craftsmanship. Wielders gain advantage on Dexterity (Acrobatics) checks, and once per day they can cast Minor Illusion to create an ethereal illusion of cherry blossoms that distracts foes within 30 feet for 1 round.",
    "price": 21500,
    "icon": "👘",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Acrobatics",
      "Distraction with Blossoms"
    ],
    "vendor": "formosa_ultima_village",
    "shippedBy": "Bamboo Fold",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Advantage on Acrobatics",
        "rules": "You gain advantage on Dexterity (Acrobatics) checks while wearing the kimono. This effect lasts until you finish a short or long rest."
      },
      {
        "title": "Distraction with Blossoms",
        "rules": "Once per day, you can cast Minor Illusion as an action to create an illusion of cherry blossoms that distracts targets within 30 feet for 1 round. The spell ends if a creature other than the target moves more than 5 feet or if a creature makes an attack roll."
      }
    ],
    "levelRequirementReason": "The intricate embroidery and magical properties of this kimono require a level of at least 6 to properly harness its mystical essence.",
    "vendorReason": "Formosa Ultima Village is renowned for its connection with the island's ancient magic, making it the perfect vendor for such an artifact.",
    "shippingDetail": "The kimono arrives rolled in a bamboo tube to protect its delicate silk and intricate embroidery from damage during transit.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous (Minor Illusion duration)",
      "endsWhen": "Spell ends if a creature other than the target moves more than 5 feet or makes an attack roll, or when you cast it again.",
      "charges": "1/Day"
    },
    "priceReason": "The kimono's rarity and unique magical properties justify its high price in the market.",
    "priceOriginal": 21500,
    "priceReviewedAt": "2026-07-22T05:35:54.807816+00:00",
    "aiReviewedAt": "2026-07-22T05:35:54.807816+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_mango_juice": {
    "id": "formosa_ultima_mango_juice",
    "name": "Formosa Ultima Mango Juice",
    "description": "Formosa Ultima Mango Juice is a vibrant elixir that promises to rejuvenate even the most weary traveler. This golden-hued nectar, carefully crafted in the tropical groves of Formosa, reinvigorates your spirit and body with every sip. The juice's refreshing taste transports you to the lush mangosteen orchards, where the sun itself seems to pour into each drop. A single swallow can banish the effects of exhaustion, restoring both vitality and a sense of renewed vigor.",
    "category": "consumables",
    "price": 1000,
    "icon": "🥭",
    "stock": 50,
    "rarity": "common",
    "effects": [
      "Single Use",
      "Instantaneous"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Refrigerated Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Banish Exhaustion",
        "rules": "Consume as a bonus action to remove one level of exhaustion. This effect is instantaneous, providing immediate relief and stamina."
      },
      {
        "title": "Restorative Refreshment",
        "rules": "Upon drinking, you gain the benefit of a short rest for 1 hour. During this time, your hit point maximum is restored by half (rounded down)."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers just starting their journey.",
    "vendorReason": "Formosa Ultima specializes in exotic fruits and juices, known for their restorative properties.",
    "shippingDetail": "Shipped within the same day to ensure freshness and peak flavor.",
    "usage": {
      "activation": "Bonus action to consume. Instantaneous effect upon drinking.",
      "duration": "Immediate relief from exhaustion; short rest benefit lasts for 1 hour.",
      "endsWhen": "Effect ends when the drinker has consumed it or after 1 hour if enjoying a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rare and exotic origin, providing immediate but not overwhelming benefits.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:35:22.976038+00:00",
    "aiReviewedAt": "2026-07-22T05:35:22.976038+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_recipe_fancy_pasta": {
    "id": "formosa_ultima_recipe_fancy_pasta",
    "name": "Recipe: Formosa Ultima Fancy Pasta",
    "description": "The Recipe: Formosa Ultima Fancy Pasta, a culinary masterpiece that transforms mere noodles into a work of art. Each strand is meticulously crafted to resemble delicate filigree, shimmering like gold in the light. Consumed with proper fork technique, this pasta grants +1 Charisma for an hour and bestows upon you a level of sophistication that can charm even the most stoic adversary. The Formosa Ultima Pasta Artisans' expertise ensures each serving is an edible sculpture fit for any grand feast.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Elegant Edible Sculpture",
      "Charismatic Charm"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Canvas Wrap Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elegant Edible Sculpture",
        "rules": "When consumed with proper fork technique, the pasta grants a +1 bonus to Charisma checks and saving throws for one hour. If eaten incorrectly, you must make a Dexterity (Sleight of Hand) check at DC 15 or suffer disadvantage on all Charisma-based interactions until after your next long rest."
      },
      {
        "title": "Charismatic Charm",
        "rules": "For the duration, any creature within 30 feet that successfully makes an interaction with you has advantage on saving throws against being charmed by you. This effect does not stack with other sources of Charisma-based charm."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the artistry and grace required to prepare this exquisite pasta.",
    "vendorReason": "Formosa Ultima Pasta Artisans are renowned for their culinary innovations, making their fancy pasta a natural addition to their offerings.",
    "shippingDetail": "The Canvas Wrap Couriers ensure your fancy pasta arrives fresh and intact, delivered within three days of purchase.",
    "usage": {
      "activation": "Eaten with proper fork technique (disadvantage if not)",
      "duration": "One hour upon consumption",
      "endsWhen": "After one hour or when consumed incorrectly",
      "charges": "Unlimited"
    },
    "priceReason": "The recipe's artisanal preparation and the unique effects justify its balanced price of 1000 XP.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T05:35:33.592097+00:00",
    "aiReviewedAt": "2026-07-22T05:35:33.592097+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_rice_ball_recipe": {
    "id": "formosa_ultima_rice_ball_recipe",
    "name": "Recipe: Formosa Ultima Onigiri",
    "description": "The Recipe for Formosa Ultima Onigiri, a cherished culinary secret passed down through generations of Formosa’s Ultima Cooks. This delicate rice ball is wrapped in seaweed from the island's sacred groves, imbuing it with the essence of the ocean and the spirit of the land. Eating one grants you a burst of energy, allowing you to sprint at +10 ft speed for an hour, and fills your belly with nourishing warmth. This snack also restores 1d4 hit points, ensuring you can face whatever challenges come next.",
    "price": 1000,
    "icon": "🍙",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Portable Nourishment",
      "Boosted Agility"
    ],
    "vendor": "formosa_ultima_village",
    "shippedBy": "Bamboo Ball Bundle",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portable Nourishment",
        "rules": "When consumed as a bonus action, the onigiri grants you a meal that restores 1d4 hit points. This effect is instantaneous and does not require any other action."
      },
      {
        "title": "Boosted Agility",
        "rules": "For one hour after eating an onigiri, your speed increases by +10 feet. This effect lasts until the start of your next long rest or until you are incapacitated."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers who wish to partake in Ultima Cooks' culinary traditions.",
    "vendorReason": "Formosa’s Ultima Village, known for its rich cultural heritage and delectable cuisine, is the only place where this sacred recipe can be found.",
    "shippingDetail": "Delivered by Bamboo Ball Bundle, a courier service that ensures the freshness of each onigiri. Delivery time may vary depending on distance.",
    "usage": {
      "activation": "Bonus action to consume and gain effects",
      "duration": "One hour or until incapacitated",
      "endsWhen": "Starts of next long rest or becoming incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and cultural significance of this recipe, as well as the ingredients sourced from Formosa’s sacred groves.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T05:35:35.439100+00:00",
    "aiReviewedAt": "2026-07-22T05:35:35.439100+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_silk_gloves": {
    "id": "formosa_ultima_silk_gloves",
    "name": "Formosa Ultima Silk Gloves",
    "description": "The Formosa Ultima Silk Gloves are masterfully crafted from rare silks that shimmer with a faint, iridescent light. These gloves not only enhance your dexterity for intricate tasks but also whisper ancient secrets in your ear when you roll a natural 20 on an Intelligence (Investigation) check. They hold small tools without dropping, and their delicate weave is both a symbol of Formosa's cultural heritage and a practical aid.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enhanced Dexterity for Fine Work",
      "Whisper Lore on Natural 20"
    ],
    "vendor": "formosa_ultima",
    "shippedBy": "Silk-Wrapped Parcel",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Enhanced Dexterity for Fine Work",
        "rules": "You gain advantage on Dexterity (Sleight of Hand) and Intelligence (Investigation) checks related to fine work. This effect is passive."
      },
      {
        "title": "Whisper Lore on Natural 20",
        "rules": "When you roll a natural 20 on an Intelligence (Investigation) check, the gloves whisper forgotten lore relevant to the investigation. This effect can occur once per day."
      }
    ],
    "levelRequirementReason": "These gloves are crafted with intricate detailing and advanced techniques that require a certain level of expertise.",
    "vendorReason": "Formosa Ultima is renowned for its mastery in silk weaving and cultural heritage, making these gloves a fitting product.",
    "shippingDetail": "Delivered by skilled couriers who ensure the delicate nature of the gloves during transit.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until destroyed or lost.",
      "endsWhen": "The gloves are destroyed, lost, or given away.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The craftsmanship and rarity of the silk used justify a modest price point.",
    "priceOriginal": 16900,
    "priceReviewedAt": "2026-07-22T05:35:37.561110+00:00",
    "aiReviewedAt": "2026-07-22T05:35:37.561110+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_silk_gloves_premium": {
    "id": "formosa_ultima_silk_gloves_premium",
    "name": "Formosa Ultima Silk Gloves (Premium)",
    "description": "The Formosa Ultima Silk Gloves (Premium) are a masterpiece of craftsmanship, their threads woven from the finest silkworms in all of Formosa. These gloves grant you an edge when it comes to both thievery and spellcasting, allowing you to manipulate locks with ease and cast Arcana spells with precision. The whispers of silk are not mere coincidences; they provide subtle hints that can guide you toward minor secrets or advantages during your endeavors.",
    "price": 1000,
    "icon": "🧤",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Advantage on Sleight of Hand checks",
      "Silk whispers secrets"
    ],
    "vendor": "formosa_ultima_market",
    "shippedBy": "Silk Road Runner",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Sleight of Hand Advantage",
        "rules": "You gain advantage on Sleight of Hand checks for one use per day. This effect is triggered when you attempt to disarm a lock or disable a trap."
      },
      {
        "title": "Silk Whispers Secrets",
        "rules": "Once per short rest, the silk in your gloves provides you with a minor hint about a nearby secret. The hint could be a location, an item, or a clue that helps you solve a puzzle. This effect is not cumulative."
      }
    ],
    "levelRequirementReason": "These gloves are crafted for those who have honed their skills to a refined art, requiring at least 7th level proficiency in thievery and spellcasting.",
    "vendorReason": "Formosa Ultima Market is renowned for its high-quality goods, including these gloves which are made by the Formosan Weavers.",
    "shippingDetail": "Delivered via the Silk Road Runner with expedited service within a week of purchase.",
    "usage": {
      "activation": "Instantaneous use for Sleight of Hand checks; minor action to invoke silk whispers secrets.",
      "duration": "Sleight of Hand advantage lasts until the end of your next turn. The silk whisper lasts one minute.",
      "endsWhen": "The effect ends when you no longer have a relevant check or rest, respectively.",
      "charges": "Unlimited uses; however, only one minor hint can be obtained per short rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect the exquisite craftsmanship and unique abilities of these gloves.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T05:36:18.999034+00:00",
    "aiReviewedAt": "2026-07-22T05:36:18.999034+00:00",
    "aiReviewVersion": 1
  },
  "formosa_ultima_silk_rope": {
    "id": "formosa_ultima_silk_rope",
    "name": "Formosa Ultima Silk Rope",
    "description": "The Formosa Ultima Silk Rope, a marvel of craftsmanship, is a 50-foot length of spider silk so finely woven that it never tangles or knots, even when submerged in water. Crafted by the legendary weavers at Formosa Ultima, this rope can support up to two tons of weight without breaking. It is said that the spiders used in its creation were fed only the finest silkworms from the region, imbuing it with a resilience unmatched by any mundane cord.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕸️",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Never Knots or Tangles",
      "Supports Up to 2 Tons"
    ],
    "vendor": "formosa_ultima_trader",
    "shippedBy": "Swift Courier of Formosa",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unknotting",
        "rules": "The Formosa Ultima Silk Rope can be used as an action to untangle itself, even if it has been entangled. This effect does not require a check."
      },
      {
        "title": "Weight Support",
        "rules": "This rope can support up to 2 tons of weight without breaking or sagging. It is considered part of the creature's equipment and does not impose encumbrance penalties."
      }
    ],
    "levelRequirementReason": "This rope is crafted for adventurers just beginning their journey, providing a reliable tool that can be used by anyone.",
    "vendorReason": "Formosa Ultima's trader is known for selling only the finest enchanted items, and this rope is no exception.",
    "shippingDetail": "Ships via a dedicated courier who ensures the rope arrives in pristine condition.",
    "usage": {
      "activation": "Action (to untangle or support weight)",
      "duration": "Instantaneous for untangling; until the end of the user's next turn when supporting weight",
      "endsWhen": "The effect ends if the rope is severed or when a creature attempts to use it in combat.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare materials and expert craftsmanship required for its creation, making it a valuable yet balanced addition to any adventurer's gear.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T05:36:02.483666+00:00",
    "aiReviewedAt": "2026-07-22T05:36:02.483666+00:00",
    "aiReviewVersion": 1
  },
  "formosan_silk_cloak": {
    "id": "formosan_silk_cloak",
    "name": "Formosan Silk Cloak",
    "description": "The Formosan Silk Cloak is a delicate, bioluminescent garment that glows faintly in dark environs like a starlit night sky. Woven from silk spun by fireflies and adorned with iridescent threads, it whispers secrets to the wearer as it moves silently through shadows. Made by the artisans of Formosa Ultima, this cloak not only enhances Stealth but also promises the wearer an air of mystery that commands attention in any gathering.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Silent Steps",
      "Bioluminescent Glow"
    ],
    "vendor": "formosan_embassy",
    "shippedBy": "Courier Phoenix Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silent Steps",
        "rules": "While wearing this cloak, you gain advantage on Dexterity (Stealth) checks made to move silently through an area. The effect lasts until the start of your next turn after using it in combat or a situation where silence is critical."
      },
      {
        "title": "Bioluminescent Glow",
        "rules": "The cloak emits a soft, ambient light equivalent to that of a torch within 10 feet when you are not moving. This glow does not create darkness but enhances visibility in dimly lit or pitch-black areas, allowing you advantage on perception checks made to see in such conditions."
      }
    ],
    "levelRequirementReason": "The cloak's enchantments provide a significant boost to stealth and visibility without requiring high-level magic.",
    "vendorReason": "Formosa Ultima is renowned for its exquisite craftsmanship, making this cloak available only through their embassy.",
    "shippingDetail": "Ships via airmail within three days of purchase.",
    "usage": {
      "activation": "Passive effect until the start of your next turn after using it in combat or a critical stealth situation.",
      "duration": "Until the start of your next turn after activation.",
      "endsWhen": "The effect ends when you move normally or engage in combat.",
      "charges": "Unlimited, but only one use per long rest."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the cloak's unique properties and its limited utility without being overpowered.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T05:36:07.479307+00:00",
    "aiReviewedAt": "2026-07-22T05:36:07.479307+00:00",
    "aiReviewVersion": 1
  },
  "fortnite_build_kit": {
    "id": "fortnite_build_kit",
    "name": "Build Kit",
    "description": "The Build Kit is a compact, sturdy toolkit crafted from reinforced steel and imbued with ancient construction magic. Each kit contains ten materials and can instantly craft walls or ramps of impressive durability—walls have an AC of 15 and hit points of 30, while ramps are built to exacting specifications for secure passage. Crafted by the master builders of the Valley Trading Post, this kit is a testament to their unparalleled craftsmanship and ability to extract resources from even the most barren landscapes.",
    "category": "consumables",
    "price": 1000,
    "icon": "🛠️",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Instant Wall/Ramp Construction",
      "Enhanced Resource Harvesting"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Tool Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Wall/Ramp Construction",
        "rules": "The Build Kit allows you to instantaneously construct a wall or ramp. The wall has an AC of 15 and hit points of 30, providing excellent fortification. The ramp is built with precision for safe passage. This effect requires your action and can be used once per short rest."
      },
      {
        "title": "Enhanced Resource Harvesting",
        "rules": "When using the Build Kit to gather materials from the environment, you gain advantage on Intelligence (Nature) checks related to construction or resource gathering. This benefit lasts for 10 minutes after crafting an item with the kit."
      }
    ],
    "levelRequirementReason": "The Build Kit is designed for beginners and experienced builders alike, but it requires a minimum level of 1 to ensure proper use.",
    "vendorReason": "As the premier supplier of construction tools and resources in the region, the Valley Trading Post is known for its reliable Build Kits.",
    "shippingDetail": "Delivered by a Tool Bag courier, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Ends when the effect is used or after a short rest if not used.",
      "charges": "Unlimited"
    },
    "priceReason": "The Build Kit's price reflects its high-quality materials and the advanced magic embedded within, making it an excellent investment for any adventurer.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T05:36:53.678504+00:00",
    "aiReviewedAt": "2026-07-22T05:36:53.678504+00:00",
    "aiReviewVersion": 1
  },
  "fountain_of_mirrored_souls": {
    "id": "fountain_of_mirrored_souls",
    "name": "Fountain of Mirrored Souls",
    "description": "The Fountain of Mirrored Souls stands in a forgotten corner of a shadowy cathedral, its surface shimmering with reflections that hint at lives lived and futures unwritten. Drinking from this fountain grants you a glimpse into an alternate version of your soul, allowing you to experience the life of one such self—memories, skills, or traumas. The water itself is cold as night, yet it holds the essence of countless souls, each with its own unique story. Merge with one of these versions and permanently adopt their abilities and memories, but at a cost: severing all ties to your original existence.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💧",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Soul Reflection",
      "Soul Merging"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Obsidian Basin",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Soul Reflection",
        "rules": "As an action, you drink from the fountain. The DM chooses one alternate version of yourself to reflect upon, during which you gain a memory, skill, or trauma from that life. You can only perform this effect once per long rest."
      },
      {
        "title": "Soul Merging",
        "rules": "At any time after successfully experiencing the life of an alternate self, as a ritual requiring 1 hour and the completion of a short rest, you may merge with that version. You gain all its abilities and memories but lose all memory of your original existence. This effect can only be performed once."
      }
    ],
    "levelRequirementReason": "Only those who have proven their strength and wisdom through great trials are deemed worthy to interact with the Fountain's ancient power.",
    "vendorReason": "The celestial exchange operates at the crossroads of time and soul, offering items that bridge worlds. The Fountain is a testament to their unique stock.",
    "shippingDetail": "The delivery is made by a courier known as 'Shadowsong', who ensures the package arrives safely but leaves no trace behind.",
    "usage": {
      "activation": "Action or ritual depending on effect used",
      "duration": "Instantaneous for Soul Reflection; permanent upon merging souls",
      "endsWhen": "Charges exhausted (one per merge)",
      "charges": "Unlimited"
    },
    "priceReason": "While the Fountain is not a weapon or treasure, its power to alter existence makes it priceless in the eyes of those who seek to reshape their fate.",
    "priceOriginal": 700000,
    "priceReviewedAt": "2026-07-22T05:36:32.289866+00:00",
    "aiReviewedAt": "2026-07-22T05:36:32.289866+00:00",
    "aiReviewVersion": 1
  },
  "fox_arwing_model": {
    "id": "fox_arwing_model",
    "name": "Arwing Model",
    "description": "The Arwing Model is a meticulously crafted miniature fighter jet, its sleek lines and gleaming hull hinting at the power that lies within. This model isn't just a toy—it's an illusionary masterpiece created by the skilled artisans of Comet Observatory. When activated, it summons a fleeting but fearsome jet that can fly 60 feet and unleash a dazzling laser blast, fooling even the most discerning foes into believing they face a real fighter jet.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✈️",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Summon Illusion Jet",
      "Disorienting Laser"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Express Aether Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Summon Illusion Jet",
        "rules": "Activates as an action. The Arwing Model summons an illusionary jet that can fly up to 60 feet and fires a laser dealing 2d8 fire damage. This effect lasts for 1 minute or until the model is destroyed, expended, or the illusion is dispelled by magical means."
      },
      {
        "title": "Disorienting Laser",
        "rules": "When the jet fires its laser, it has a chance to disorient enemies within 30 feet. The target must succeed on a DC 14 Dexterity saving throw or be stunned until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure it can be used effectively in combat.",
    "vendorReason": "Comet Observatory is known for its intricate and magical artifacts, making the Arwing Model an ideal offering from them.",
    "shippingDetail": "Delivered via Express Aether Express, which ensures swift delivery within a day.",
    "usage": {
      "activation": "Action to summon the illusion jet and fire its laser.",
      "duration": "Lasts for 1 minute or until expended.",
      "endsWhen": "Destroyed, expended, or dispelled by magical means.",
      "charges": "Once per long rest"
    },
    "priceReason": "The Arwing Model is priced at 1000 XP due to its epic rarity and the specialized craftsmanship required for its creation.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T05:36:36.003408+00:00",
    "aiReviewedAt": "2026-07-22T05:36:36.003408+00:00",
    "aiReviewVersion": 1
  },
  "fp_plus_badge": {
    "id": "fp_plus_badge",
    "name": "FP Plus Badge",
    "description": "The FP Plus Badge is a delicate, flower-shaped badge crafted from enchanted brass. Its intricate filigree glows faintly in shades of emerald and sapphire, imbued with the essence of forgotten forests and ancient magic. This badge enhances one's magical capacity, allowing wearers to cast an additional 1st-level spell slot while attuned. The badge is a symbol of harmony between nature and arcane might, often worn by shamans and druids seeking to balance their powers more efficiently in the wild.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌸",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 1st Level Spell Slot",
      "Requires Attunement"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Mystic Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Spell Capacity",
        "rules": "While attuned, you gain one additional 1st-level spell slot. This effect lasts for the duration of your concentration (up to 10 minutes) or until you lose your concentration."
      },
      {
        "title": "Attunement Requirement",
        "rules": "You must complete a short rest while wearing the badge to attune to it, and you can only be attuned to one FP Plus Badge at a time. Attunement ends when you remove the badge or if your concentration is broken."
      }
    ],
    "levelRequirementReason": "This badge enhances spellcasting ability, making it suitable for lower-level characters who are still learning and refining their magical prowess.",
    "vendorReason": "The Shamans Hut specializes in mystical trinkets that enhance natural magic, making the FP Plus Badge a perfect fit for their inventory.",
    "shippingDetail": "Ships via Mystic Mail’s enchanted courier, ensuring safe and swift delivery within two game days.",
    "usage": {
      "activation": "Passive effect once attuned.",
      "duration": "Concentration up to 10 minutes or until concentration is lost.",
      "endsWhen": "You lose your concentration or remove the badge.",
      "charges": "Unlimited; no charge limit."
    },
    "priceReason": "The FP Plus Badge offers a significant enhancement in spellcasting, making it a valuable but not overpowered item for new adventurers.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-22T05:37:30.894014+00:00",
    "aiReviewedAt": "2026-07-22T05:37:30.894014+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_abyssal_gaze_glove": {
    "id": "fractured_atrium_abyssal_gaze_glove",
    "name": "Abyssal Gaze Glove",
    "description": "The Abyssal Gaze Glove is a leather glove embossed with arcane symbols and dark runes, worn by those who dare to peer into the abyss. It grants its wearer glimpses of the soul's essence, revealing hidden necromantic sigils that shimmer faintly in the shadows. With each use, the glove grants a fleeting vision of ghostly echoes from defeated foes, allowing for strategic ambushes and tactical advantage in battles against undead forces.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Necromancy",
      "Glimpse of Defeated Foes"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveals Hidden Necromancy",
        "rules": "When the wearer uses an action, they can scan a 5-foot square area. This effect lasts for 1 minute and reveals any hidden necromantic sigils or undead traps within that area, granting advantage on Perception checks to detect them."
      },
      {
        "title": "Glimpse of Defeated Foes",
        "rules": "Once per short rest, the wearer can activate this ability as a bonus action. For 10 seconds, they gain the benefit of seeing ghostly echoes of defeated enemies within a 30-foot radius. This allows them to recall tactical advantages and plan future encounters more effectively."
      }
    ],
    "levelRequirementReason": "The wearer must be at least level 5 to wield this item, as it requires a solid understanding of necromancy and the ability to focus on its effects.",
    "vendorReason": "Fractured Atrium specializes in rare and ancient artifacts that are often used by adventurers who delve into dark magic and necromancy.",
    "shippingDetail": "Delivered via the Void Drifter Relay, known for its swift and reliable service through the astral planes.",
    "usage": {
      "activation": "Reveals Hidden Necromancy: Uses an action; Glimpse of Defeated Foes: Bonus Action",
      "duration": "Reveals Hidden Necromancy lasts 1 minute; Glimpse of Defeated Foes lasts for 10 seconds, ends when the wearer uses another bonus action to activate it or when they fall unconscious.",
      "endsWhen": "Exhausts after one use per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at a fair value, balancing the item's powerful effects with its rarity and the risks involved in using it.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:37:17.986667+00:00",
    "aiReviewedAt": "2026-07-22T05:37:17.986667+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_blood_echo": {
    "id": "fractured_atrium_blood_echo",
    "name": "Blood Echo Vessel",
    "description": "The Blood Echo Vessel is a dark, obsidian vessel adorned with etched runes that whisper of ancient necromancy. When activated, it amplifies the user's willpower and drains enemy vitality, allowing them to become momentarily invisible while silencing their foes. Nearby enemies hear only the echoes of the dead, unable to react as effectively. This vessel is said to have been crafted in the fractured heart of Atrium by dark necromancers seeking to harness the power of death itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Amplifies necromantic aura",
      "Silences and blinds foes"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromantic Amplification",
        "rules": "The user's necromantic abilities are enhanced by +1d6 damage against undead enemies. This effect lasts until the start of their next turn."
      },
      {
        "title": "Invisibility and Silence",
        "rules": "All nearby foes become temporarily blinded and silenced for 3 seconds upon activation. The vessel expends one charge, which can be recharged after a long rest."
      }
    ],
    "levelRequirementReason": "Requires significant control over necromantic energies, making it accessible only to those of at least 5th level.",
    "vendorReason": "The vessel's dark origins and crafting secrets are known to the denizens of Atrium, who supply such rare wares.",
    "shippingDetail": "Delivery is swift, but the package must be picked up personally at the next town square due to strict regulations on necromantic items.",
    "usage": {
      "activation": "A bonus action",
      "duration": "Instantaneous effect lasting 3 seconds",
      "endsWhen": "The start of their next turn or when the user takes a major action",
      "charges": "Expends one charge; recharges after a long rest"
    },
    "priceReason": "Balanced for its rarity and necromantic power, making it a strategic but not overpowered choice.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:37:35.305831+00:00",
    "aiReviewedAt": "2026-07-22T05:37:35.305831+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_blood_rune": {
    "id": "fractured_atrium_blood_rune",
    "name": "Blood Rune of the Necrotic Throne",
    "description": "The Blood Rune of the Necrotic Throne is a cursed amulet forged from the very essence of a long-dead kingdom's throne, its surface etched with runes that pulse with a necrotic glow. It drains vitality with each use, leaving the user weaker but more potent in their dark rituals. When activated, it enhances necromantic spells by 50% for three turns and unleashes a wave of necrotic energy that devastates foes within its reach.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Necromancy",
      "Necrotic Surge"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Necromancy",
        "rules": "Activates on command as a bonus action. Enhances all necromantic spells cast by the wearer for three turns, granting a +50% bonus to spell damage and effect duration."
      },
      {
        "title": "Necrotic Surge",
        "rules": "When activated, emits a surge of necrotic energy targeting enemies within 3 squares. Deals 2d6 necrotic damage per turn for three turns or until the wearer's next turn. The user must succeed on a DC 15 Constitution saving throw or suffer 10% of their maximum hit points in damage each turn."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield, as the amulet's malevolent power demands significant magical prowess.",
    "vendorReason": "The frayed remnants of the ancient necropolis are inextricably linked with the Blood Rune, making it a natural fit for the vendor.",
    "shippingDetail": "Ships via Koopa Express, ensuring the cursed amulet arrives safely and swiftly.",
    "usage": {
      "activation": "Activated as a bonus action by command.",
      "duration": "3 turns or until the wearer's next turn if used more than three times.",
      "endsWhen": "The effect ends when the user's next turn begins, after three uses, or upon destruction of the amulet.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its potent necromantic power and cursed nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:37:23.946586+00:00",
    "aiReviewedAt": "2026-07-22T05:37:23.946586+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_blood_scarf": {
    "id": "fractured_atrium_blood_scarf",
    "name": "Blood Scarf of the Hollowed",
    "description": "Woven from the remnants of a fallen necromancer’s soul, the Blood Scarf of the Hollowed is a crimson accessory that pulses with the echo of forgotten rituals. It drains vitality from foes while granting the wearer temporary immunity to psychic backlash, making every step a silent scream in the heart of the undead. Its pulse amplifies damage against undead by 20%, and its soul-draining touch reduces their necromantic aura by 30% for ten seconds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Drains Vitality",
      "Immunity to Psychic Backlash"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Drain Vitality",
        "rules": "Activates passively, draining 10% of the nearest enemy's hit points at the start of each of its turns. Ends when the scarf is removed or destroyed."
      },
      {
        "title": "Immunity to Psychic Backlash",
        "rules": "Grants temporary immunity to psychic backlash for 24 hours upon activation, which can be triggered once per long rest. No save required."
      }
    ],
    "levelRequirementReason": "The scarf's raw power requires only basic necromantic knowledge.",
    "vendorReason": "Fractured Atrium specializes in relics and artifacts from the war against necromancers.",
    "shippingDetail": "Ships via the Void Drifter Relay, a courier known for its timely deliveries of rare goods.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "Scarff is removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "The scarf's rarity and necromantic properties justify its price in the market.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:30:45.685265+00:00",
    "aiReviewedAt": "2026-07-22T19:30:45.685265+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bloodbound_tome": {
    "id": "fractured_atrium_bloodbound_tome",
    "name": "Bloodbound Tome of the Corvinarus",
    "description": "The Bloodbound Tome of Corvinarus is a leather-bound grimoire, its pages dyed in the dark blood of the Corvinarus, a once-legendary necromancer. When opened, it whispers the names of the dead and grants the user temporary dominion over their spirits. Summon these spectral allies to fight by your side, or command them to speak for you in whispered counsel. Each spirit is a fragment of the dead, loyal only as long as the tome’s power holds sway.",
    "price": 2000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons a Spectral Ally",
      "Enhances Necromancy Spells"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Ally",
        "rules": "Activates as an action. Summons one spirit ally with 15 hit points, which gains 20% of the user's maximum HP and can speak or attack alongside you for up to 1 minute. The spirit has advantage on Wisdom (Perception) checks related to necromancy. Ends when dismissed, after its time limit expires, or if the tome is closed."
      },
      {
        "title": "Enhanced Necromancy",
        "rules": "Grants +25% duration to all necromancy spells cast by the user. This effect persists for 10 minutes per use and can be renewed at the start of each long rest, with a saving throw DC of 13."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to control the spirits effectively without risking their untimely demise.",
    "vendorReason": "This vendor specializes in ancient, cursed items and the knowledge that comes with them.",
    "shippingDetail": "Delivered by spectral couriers who deliver the tome under cover of darkness to avoid unwanted attention.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per use, renewable at long rest",
      "endsWhen": "Dismissed, time limit expires, or tome is closed",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for its unique and powerful abilities within the rarity of a rare item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:38:39.880861+00:00",
    "aiReviewedAt": "2026-07-22T05:38:39.880861+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_blooded_mirror": {
    "id": "fractured_atrium_blooded_mirror",
    "name": "Blooded Mirror of the Fallen",
    "description": "The Blooded Mirror of the Fallen is a dark, obsidian mirror carved from the bones of a fallen necromancer. Its surface glows faintly with an eerie purple light that flickers like the soul of its last victim. When activated, it momentarily opens a spectral link to the spirit of your most recent foe, allowing for a brief exchange. The mirror subtly exerts a gravitational pull on you when enemies approach, as if their very presence is mirrored in its depths.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Voice Link with Enemy's Soul",
      "Gravitational Pull"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Voice Link with Enemy's Soul",
        "rules": "When activated using an action, the mirror opens a spectral voice link to your last slain enemy’s spirit. The connection lasts for 3 seconds and allows you to speak directly with it. This effect has no range limit but ends when either participant is incapacitated or the mirror is destroyed."
      },
      {
        "title": "Gravitational Pull",
        "rules": "While within 10 feet of the mirror, you are subjected to a minor gravitational pull that slightly slows your movement speed by 5 feet. This effect persists as long as you remain in proximity and ends when you move out of range or if the mirror is destroyed."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level to ensure players can handle its spectral effects without undue risk.",
    "vendorReason": "The Dark Atrium's vendors deal in relics of the fallen, and this mirror is a prime example of their wares.",
    "shippingDetail": "Due to its volatile nature, the Blooded Mirror must be shipped via Shy Guy Smugglers for guaranteed safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; Voice Link lasts 3 seconds; Gravitational Pull persists as long as within range",
      "endsWhen": "Voice Link ends when either participant is incapacitated or the mirror is destroyed; Gravitational Pull ceases if you leave the 10-foot radius around the mirror.",
      "charges": "Unlimited"
    },
    "priceReason": "The Blooded Mirror's rarity and utility justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:38:13.546360+00:00",
    "aiReviewedAt": "2026-07-22T05:38:13.546360+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bone_binder": {
    "id": "fractured_atrium_bone_binder",
    "name": "Bone Binder of Corvinarus",
    "description": "The Bone Binder of Corvinarus is a cursed artifact forged from the ribs of a fallen warlord. Its weighty form is adorned with ancient runes that glow faintly in the dark. When activated, it binds your soul to the grave, granting you immunity to necrotic damage but at the cost of your sanity and movement speed; each minute under its influence erodes your mind's resilience until you deactivate it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immortal to Necrotic",
      "Sanity Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Immortal to Necrotic",
        "rules": "Activation: Action. Duration: Concentration up to 1 minute. Ends When: You lose concentration or take damage from a source other than necrotic. Save DC: 15. Benefit: Grants immunity to necrotic damage while active."
      },
      {
        "title": "Sanity Drain",
        "rules": "Each minute of activation reduces your Wisdom (Insight) saving throw by -20%. Ends When: The artifact is deactivated or destroyed. Limit: Once per short rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle the artifact's malevolent energy without severe consequences.",
    "vendorReason": "The vendor specializes in rare and dangerous artifacts, including cursed relics like the Bone Binder of Corvinarus.",
    "shippingDetail": "Delivered with special precautions to protect against the artifact’s inherent dangers.",
    "usage": {
      "activation": "Action",
      "duration": "Concentration up to 1 minute",
      "endsWhen": "You lose concentration or take damage from a source other than necrotic, or it is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect the artifact's powerful and dangerous nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:37:48.058117+00:00",
    "aiReviewedAt": "2026-07-22T05:37:48.058117+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bone_bottle": {
    "id": "fractured_atrium_bone_bottle",
    "name": "Bone Bottle of Unspoken Echoes",
    "description": "A fragile vial containing the ossified essence of a long-lost Corvinarus ancestor, its bone walls shimmering faintly as if alive. When cracked, it releases a psychic resonance that binds a target’s memories to the wielder, allowing them to delve into the target's most painful recollections. The bottle is said to have been crafted in the forges of forgotten Atrium, where ancient magics coalesced with natural bones to forge this potent artifact.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Memory Binding",
      "Psychic Resonance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Memory Binding",
        "rules": "When activated as an action, the Bone Bottle of Unspoken Echoes releases a psychic resonance that temporarily binds a target's memories to the wielder. The effect lasts for 10 seconds and grants the wielder knowledge of the target’s most recent traumatic event. This effect has no save DC but can be ended by the target making a successful Wisdom saving throw."
      },
      {
        "title": "Psychic Resonance",
        "rules": "While the memory is bound, the target experiences a 20% reduction in their spellcasting ability for the duration of the effect. This penalty cannot be removed until the end of the effect's duration or if the target successfully saves against it."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to effectively utilize and manage such a potent artifact.",
    "vendorReason": "The Fractured Atrium is known for its vast collection of ancient artifacts, including this bottle's origin in the lost forges of their ancestors.",
    "shippingDetail": "Ships via ethereal courier, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Activates as an action by cracking the bottle.",
      "duration": "10 seconds duration per use.",
      "endsWhen": "The target successfully saves against it or the effect ends naturally.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced for its rarity and unique utility, this bottle’s price reflects its historical significance and powerful effects.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:38:18.591665+00:00",
    "aiReviewedAt": "2026-07-22T05:38:18.591665+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bone_chime": {
    "id": "fractured_atrium_bone_chime",
    "name": "Bone Chime of the Corvinarus Echo",
    "description": "The Bone Chime of the Corvinarus Echo is a relic carved from the bones of ancient necromancers, each ribcage etched with runes that whisper secrets of the dead. When struck, it summons a spectral echo of your last battle cry, which can instill fear in foes within earshot and grant you a +5% bonus to all necromantic damage when wielded. The chime’s resonance is said to amplify the voices of the deceased, making it an indispensable tool for those who command the undead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Spectral Echo",
      "Enhances Necromantic Damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spectral Echo",
        "rules": "When struck, the chime summons a spectral echo of your last battle cry. This echo can instill fear in enemies within 10 feet for 1 round (the DC to save against this effect is equal to 8 + your Wisdom modifier). The echo dissipates after its duration ends."
      },
      {
        "title": "Enhanced Necromantic Damage",
        "rules": "For the duration of one battle, you gain a +5% bonus to all necromantic damage dealt. This enhancement persists for the entire encounter and is reset at the beginning of your next short or long rest."
      }
    ],
    "levelRequirementReason": "The chime requires no specific level because it offers utility suitable for lower-level characters who could benefit from its unique abilities.",
    "vendorReason": "Fractured Atrium is known for dealing with rare and ancient artifacts, making the Bone Chime of the Corvinarus Echo a fitting addition to their inventory.",
    "shippingDetail": "The chimes are delicate and must be shipped in specially designed padded crates to ensure they arrive intact.",
    "usage": {
      "activation": "Standard action",
      "duration": "One round (Spectral Echo) / One battle (Enhanced Necromantic Damage)",
      "endsWhen": "Ends after its duration or when the chime is destroyed",
      "charges": "Unlimited, resets at the start of each rest"
    },
    "priceReason": "The item’s rarity and unique properties make it a valuable addition to any necromancer's arsenal, hence its fair value of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:38:50.111211+00:00",
    "aiReviewedAt": "2026-07-22T05:38:50.111211+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bone_key": {
    "id": "fractured_atrium_bone_key",
    "name": "Bone Key of Corvinarus",
    "description": "The Bone Key of Corvinarus, a relic forged from the shattered bones of a noble fallen in battle, glows faintly with a cold blue aura that hints at its necromantic origins. It grants the wielder temporary control over spectral entities and allows for the summoning of minor constructs to aid in exploration or combat. Its touch reveals hidden paths through ancient necrotic zones, offering invaluable insight into forgotten tombs and ruins.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Control",
      "Spectral Insight"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Control",
        "rules": "The Bone Key allows the user to bind a single spectral entity for up to 2 rounds. This control grants the spectral entity's assistance in combat or exploration. The key can be used once per short rest."
      },
      {
        "title": "Spectral Insight",
        "rules": "Upon activation, the Bone Key reveals hidden necrotic pathways and entrances within a 30-foot radius. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to effectively manage the key's necromantic abilities.",
    "vendorReason": "The fractured atrium is known for its extensive network of ancient necrotic ruins, making it a logical vendor for such a relic.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk courier, ensuring safe and swift delivery to your doorstep.",
    "usage": {
      "activation": "Uses an action or bonus action to activate, with no additional range or target requirements.",
      "duration": "Necrotic Control lasts for up to 2 rounds per use; Spectral Insight reveals hidden paths once per long rest.",
      "endsWhen": "The effects of Necrotic Control end when the key is removed from contact with the bound spectral entity, and Spectral Insight ends after its duration expires or upon a short rest.",
      "charges": "Unlimited uses between rests."
    },
    "priceReason": "The price reflects the rarity of the material used in crafting this relic and its unique abilities within necromantic magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:38:53.460745+00:00",
    "aiReviewedAt": "2026-07-22T05:38:53.460745+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bone_key_of_the_oracle": {
    "id": "fractured_atrium_bone_key_of_the_oracle",
    "name": "Bone Key of the Oracle",
    "description": "The Bone Key of the Oracle is a gnarled key forged from the ribs of an ancient necromantic sage. When inserted into its lock, it releases a ghastly glow and unlocks the hidden chamber of the Oracle’s archives. Once opened, the portal to Corvinarus reveals forbidden knowledge that could sway any contest of wills or intellect. The key is said to have been crafted during the height of the Sage's power, imbued with the essence of the dead to ensure its secrets remain secret.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Unlocks the Oracle’s hidden archives",
      "Grants access to forbidden knowledge"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unlock and Access Archives",
        "rules": "Requires an action to insert into a specific lock. Once inserted, it unlocks the chamber for one minute. The portal remains active until closed or the key's charge is exhausted. Closing the portal requires an Intelligence saving throw (DC 15) against the user’s Intelligence modifier."
      },
      {
        "title": "Forbidden Knowledge",
        "rules": "Upon successful access to the archives, the user gains advantage on one Intelligence-based skill check of their choice for 24 hours. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The key's arcane nature and the power it commands make it accessible to those with at least third-level spellcasting capabilities.",
    "vendorReason": "Fractured Atrium, a repository of ancient knowledge, is the only known source for such an artifact.",
    "shippingDetail": "The key requires special handling and is delivered via the Void Drifter Relay within one week.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous unlock; portal remains active for one minute",
      "endsWhen": "Closing the portal, or when its charge is exhausted after a long rest",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "The key's rarity and magical properties justify its price, reflecting both its historical significance and the power it commands.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:38:47.864908+00:00",
    "aiReviewedAt": "2026-07-22T05:38:47.864908+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bone_rune": {
    "id": "fractured_atrium_bone_rune",
    "name": "Bone Rune of the Atrium",
    "description": "The Bone Rune of the Atrium, chipped from the fractured heart of an ancient atrium, is a necromantic talisman that etches living curses into the battlefield. Its inscribed glyphs pulse with dark energy, spreading their malevolent touch to all foes within range. Each rune carves a permanent mark upon the ground, but only one can be active at any time, ensuring the caster's focus remains singularly intent on the next strike.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Etches living curses",
      "Grants necromancy spell duration"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Glyph Etching",
        "rules": "The Bone Rune allows a caster to etch a single glyph onto the ground or walls. This glyph lasts for 1 minute and deals 50% of the caster's maximum hit points as necrotic damage to all creatures within 20 feet at the start of their turn."
      },
      {
        "title": "Necromancy Spell Duration",
        "rules": "When used in conjunction with other necromancy spells, this rune increases the duration of these spells by an additional 1 hour. This effect lasts until another rune is etched or a short rest is taken."
      }
    ],
    "levelRequirementReason": "Only those who have mastered basic necromancy can wield such dark power.",
    "vendorReason": "The fractured atrium has seen many dark rituals, making it a fitting home for such a cursed artifact.",
    "shippingDetail": "Delivered via shadowy courier, the rune arrives in a sealed case, ensuring its arrival is both swift and secure.",
    "usage": {
      "activation": "A bonus action to inscribe a glyph onto the ground or walls.",
      "duration": "1 minute per etched glyph",
      "endsWhen": "Another glyph is inscribed or a short rest is taken",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its necromantic power and rarity.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:39:11.069804+00:00",
    "aiReviewedAt": "2026-07-22T05:39:11.069804+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bone_whisperer": {
    "id": "fractured_atrium_bone_whisperer",
    "name": "Bone Whisperer",
    "description": "The Bone Whisperer hums with an eerie, spectral energy, a relic of ancient necromancers long gone. Crafted from the bones of fallen necromancers, it whispers forgotten commands to the dead, granting the wielder temporary control over ghostly minions. Each use calls forth a spectral servant for three turns, whispering dark secrets and lending its ethereal strength. Wielders must heed its call with caution, as after three activations, the relic drains 10% of the user's health.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Ghostly Servant",
      "Temporary Health Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Summon Ghostly Servant",
        "rules": "As a bonus action, the Bone Whisperer summons one ghostly servant for three turns. The spectral minion grants +20% damage to necrotic attacks and can be commanded to perform simple tasks. The servant vanishes after its duration ends."
      },
      {
        "title": "Temporary Health Drain",
        "rules": "After using the Bone Whisperer for three activations, the user suffers a 10% health penalty until restored by magical means or resting for one full day."
      }
    ],
    "levelRequirementReason": "Requires at least third level to wield the cursed relic effectively.",
    "vendorReason": "Fractured Atrium is known for its dark artifacts and relics, making it a fitting vendor for such an item.",
    "shippingDetail": "Shipped discreetly via Pipe Express; delivery can take up to three days due to the nature of the cargo.",
    "usage": {
      "activation": "Bonus action to summon ghostly servant",
      "duration": "Three turns for summoned spectral minion",
      "endsWhen": "Upon natural expiration or when the user takes a short rest",
      "charges": "Unlimited, recharged after one full day"
    },
    "priceReason": "Balanced price reflects its cursed nature and temporary health drain effect.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:39:43.517310+00:00",
    "aiReviewedAt": "2026-07-22T05:39:43.517310+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_bonewhisper_amber": {
    "id": "fractured_atrium_bonewhisper_amber",
    "name": "BoneWhisper Amber",
    "description": "BoneWhisper Amber is a cursed gemstone hewn from ancient bones, infused with the echoes of countless battles and forgotten names. When worn in combat, it summons spectral whispers that bolster your defenses and grant you fleeting visions of past conflicts. These ghostly allies appear as spectral warriors, offering temporary respite to your weary heart. Yet, its power comes at a price: after three seconds of use, living foes are struck with disorienting echoes, blurring their vision for the duration of the encounter.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% defense against undead attacks",
      "Grants 10% chance to summon ghostly allies during combat"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Respite",
        "rules": "When activated as a bonus action, BoneWhisper Amber summons spectral whispers that grant you a +20 bonus to your AC against undead attacks until the end of the encounter. This effect ends if you are no longer within 30 feet of an undead creature."
      },
      {
        "title": "Ghostly Allies",
        "rules": "Once per short rest, BoneWhisper Amber grants you a +10 bonus to your Charisma (Persuasion) checks against living creatures for the duration of one combat. This effect ends if you fail a Wisdom saving throw with a DC of 13."
      }
    ],
    "levelRequirementReason": "The gem's power is too potent, requiring at least level 5 to wield without risking disorientation and other side effects.",
    "vendorReason": "Fractured Atrium specializes in cursed artifacts and relics from forgotten realms, making BoneWhisper Amber a fitting addition to their inventory.",
    "shippingDetail": "The gem is delivered by the Rakasha, ensuring it arrives intact but accompanied by a cryptic warning about its malevolent origins.",
    "usage": {
      "activation": "Activates as a bonus action or reaction.",
      "duration": "Until the end of the encounter for Spectral Respite; ends if you fail a Wisdom saving throw with a DC of 13 for Ghostly Allies.",
      "endsWhen": "Spectra Respite ends when you are no longer within 30 feet of an undead creature, or when you lose your concentration. Ghostly Allies end on a failed Wisdom save.",
      "charges": "Unlimited"
    },
    "priceReason": "The gem's unique properties and the risk it poses to its wielder justify this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:31:17.614895+00:00",
    "aiReviewedAt": "2026-07-22T19:31:17.614895+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corrupted_echo": {
    "id": "fractured_atrium_corrupted_echo",
    "name": "Corrupted Echo of the Deep Mirror",
    "description": "The Corrupted Echo of the Deep Mirror is a fractured shard that crackles with necrotic energy. Crafted from the twisted essence of the Deep Mirror, it whispers forgotten spells in the tongue of the dead. This relic can resurrect one corpse for three turns, granting it 100% damage resistance and allowing its wielder to cast necromantic spells at a faster rate. However, each use consumes a fragment of your soul.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Resurrection",
      "Necrotic Speed"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Resurrection",
        "rules": "Activate as an action to resurrect one corpse for three turns with 100% damage resistance. The effect ends when the target dies, is destroyed, or the shard is expended."
      },
      {
        "title": "Necrotic Speed",
        "rules": "Grant a +2 bonus to your spell attack rolls and spell save DCs while you have this shard in your possession. This effect lasts until the end of your next turn after using the Resurrection ability or when the shard is expended."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to wield such dark magic responsibly.",
    "vendorReason": "The vendors at Fractured Atrium specialize in relics and artifacts of shadowy origin, making this shard available.",
    "shippingDetail": "Due to the fragile nature of necrotic shards, they are shipped using Koopa Postal’s reinforced dark matter containers.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Instantaneous.",
      "endsWhen": "The target dies, is destroyed, or the shard is expended.",
      "charges": "Unlimited (expended after use)"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dark magic and soul-consuming nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:39:06.564580+00:00",
    "aiReviewedAt": "2026-07-22T05:39:06.564580+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corrupted_heart": {
    "id": "fractured_atrium_corrupted_heart",
    "name": "Corrupted Heart of the Hollow King",
    "description": "The Corrupted Heart of the Hollow King, a pulsating obsidian heart, pulses with necrotic energy that seeps into the very fabric of life around it. When worn, this unholy relic grants temporary necromantic resonance, allowing you to summon spectral echoes of the dead as allies for brief battles. The heart's dark magic reduces stamina regeneration by 20%, but in exchange, it increases your damage against undead foes by a third.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% extra damage vs. undead",
      "Spectral Companion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Extra Damage Against Undead",
        "rules": "When you deal damage to an undead creature, it gains +30% additional damage. This effect lasts until the end of your next turn."
      },
      {
        "title": "Spectral Companion",
        "rules": "As a bonus action, you can summon a spectral companion that provides battlefield support for 10 seconds. The companion has a reach of 5 feet and can use its bite attack to deal necrotic damage equal to half your proficiency bonus."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level to ensure the user can effectively harness its dark magic without overextending their abilities.",
    "vendorReason": "The Fractured Atrium is known for its macabre artifacts and relics, making it the perfect vendor for such an unholy heart.",
    "shippingDetail": "Due to the corrupting nature of the item, Lakitu Drones require special handling and a delayed delivery by one day.",
    "usage": {
      "activation": "Bonus action for summoning; passive while worn",
      "duration": "Summoned companion lasts 10 seconds or until dismissed",
      "endsWhen": "Ends if you are killed, the companion is destroyed, or you remove it from your body",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's dark magic and spectral abilities justify a moderate price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:39:49.656324+00:00",
    "aiReviewedAt": "2026-07-22T05:39:49.656324+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corrupted_mirror": {
    "id": "fractured_atrium_corrupted_mirror",
    "name": "Corrupted Mirror of the Deep Atrium",
    "description": "The Corrupted Mirror of the Deep Atrium is a fractured glass orb, its surface etched with runes that glow faintly in necrotic light. Crafted from ancient bones and darkened by centuries of unhallowed use, it whispers secrets of the dead to those brave enough to look into it. Each glance reveals hidden truths within necromantic rituals, but at a terrible cost: the mirror's gaze saps your sanity with each use, leaving you forever changed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Truths",
      "Saps Sanity"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveal Hidden Truths",
        "rules": "When activated as an action within 30 feet of a necromantic ritual or undead creature, this mirror reveals hidden runes and symbols that provide insight into the target. The mirror can be used once per short rest."
      },
      {
        "title": "Saps Sanity",
        "rules": "Upon successful activation, the wielder must make a Wisdom saving throw (DC 14). On failure, they suffer 1d4 points of sanity loss, reducing their maximum Wisdom by that amount until fully restored. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This mirror's power requires a level 5 character to wield effectively.",
    "vendorReason": "The vendor, Fractured Atrium, specializes in rare and corrupted artifacts from forgotten realms.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring safe delivery with a 1d4 day delay due to spectral interference.",
    "usage": {
      "activation": "Used as an action within 30 feet of the target.",
      "duration": "Instantaneous effect; lasts until used or dismissed.",
      "endsWhen": "Exhausted after one use per short rest, or if damaged beyond repair.",
      "charges": "Unlimited uses between long rests"
    },
    "priceReason": "The mirror's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:31:27.275500+00:00",
    "aiReviewedAt": "2026-07-22T19:31:27.275500+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corrupted_reflection": {
    "id": "fractured_atrium_corrupted_reflection",
    "name": "Corrupted Reflection Shard",
    "description": "The Corrupted Reflection Shard is a fractured mirror fragment, its surface darkened and corrupted by necromantic energies. When wielded, it reveals the spectral form of nearby undead, granting temporary sight through their ethereal visage. Its whispering echo reveals hidden weaknesses in these spirits, allowing foes to exploit them. The shard's power comes from an ancient source, hinting at a time when such relics were used to control and manipulate the dead.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Vision",
      "Reveal Undead Weaknesses"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Vision",
        "rules": "Activates as an action. Grants the user temporary spectral vision for 10 seconds when targeting a creature with the undead type within 30 feet, allowing them to see through and around the target. Ends if the target moves more than 10 feet away or is destroyed."
      },
      {
        "title": "Reveal Undead Weaknesses",
        "rules": "Activates as an action. Reveals a hidden weakness in any undead creature within 30 feet, providing advantage on one attack roll against that target. Ends if the user moves more than 10 feet away or if the target is destroyed."
      }
    ],
    "levelRequirementReason": "This item requires at least level 5 to wield due to its necromantic power and complexity.",
    "vendorReason": "The vendor, fractured atrium, specializes in relics and artifacts recovered from ancient, dark sites where such shards were once used.",
    "shippingDetail": "The shipment is handled carefully by the Shy Guy Smugglers, known for their expertise in delivering sensitive and dangerous goods.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds or until target moves more than 10 feet away",
      "endsWhen": "Target moves too far or is destroyed",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The price reflects the item's rare material and the dangerous nature of its necromantic energy.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:40:13.227259+00:00",
    "aiReviewedAt": "2026-07-22T05:40:13.227259+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corv_necro_catalyst": {
    "id": "fractured_atrium_corv_necro_catalyst",
    "name": "Corv Necro Catalyst",
    "description": "The Corv Necro Catalyst is a shard of corrupted bone, its surface etched with runes that hum with malevolent energy. Crafted from the bones of ancient necromancers, it whispers the voices of the dead to those who wield it. When activated, it channels dark necrotic power into devastating spells, sapping the life force of enemies and leaving them weaker for days. It is said this relic was once a part of Corvinarus himself, now reduced to a weapon of terror in the hands of the living.",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% Necromancy Spell Damage",
      "Grants 20% Chance to Summon Spectral Pet"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Surge",
        "rules": "When a spell using necromancy is cast, the user must spend 10% of their maximum Hit Points. This effect ends after 30 seconds or if they are reduced to 0 Hit Points."
      },
      {
        "title": "Spectral Companion",
        "rules": "Once per long rest, the wielder can summon a spectral pet that fights by their side for 1 minute. The pet has a CR of 2 and is controlled by the user but cannot speak or cast spells."
      }
    ],
    "levelRequirementReason": "The Corv Necro Catalyst requires a minimum level to wield its necrotic power safely.",
    "vendorReason": "The vendors of Fractured Atrium specialize in relics and artifacts from the ancient necromancers, making this relic an apt addition to their inventory.",
    "shippingDetail": "Delivery is handled by the Rakasha Spirit Walk, which ensures the item arrives with a whisper of darkness.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous casting; Spectral Companion lasts for 1 minute",
      "endsWhen": "Reduction to 0 Hit Points or after 30 seconds without spending HP",
      "charges": "Unlimited, but the user must rest for 30 minutes after each use"
    },
    "priceReason": "The Corv Necro Catalyst's price is balanced at 1000 XP as it provides significant necromancy benefits and has a unique spectral summoning feature.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T05:40:22.110977+00:00",
    "aiReviewedAt": "2026-07-22T05:40:22.110977+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corv_soul_core": {
    "id": "fractured_atrium_corv_soul_core",
    "name": "Corvinarus Soul Core Fragment",
    "description": "The Corvinarus Soul Core Fragment is a jagged, pulsating shard of necromantic energy, forged from the heart of a fallen noble in the shadowy halls of Corvinarus. This fragment can be invoked during rituals to summon three skeletal minions that dance at your command for ten seconds, their eyes glowing with malevolent intent. The core also subtly enhances the duration of any necromancy spell you cast by 20%, allowing you to extend the life span of your undead creations just enough to dominate their actions in battle.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Undead Minion Summoning",
      "Extended Necromancy Spell Duration"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Undead Minion Summoning",
        "rules": "Activates as a bonus action. Summons three skeletal minions that obey your commands for 10 seconds. The minions have 25 hit points each and can be dismissed at any time by the user or upon their death."
      },
      {
        "title": "Extended Necromancy Spell Duration",
        "rules": "Increases the duration of any necromancy spell you cast by 20%. For instance, a raise dead spell would last for an additional two rounds. This effect can be applied to one spell per short rest and requires concentration while active."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively manage the summoned undead and cast necromancy spells.",
    "vendorReason": "The vendors of Fractured Atrium specialize in arcane artifacts from fallen noble houses, including this fragment.",
    "shippingDetail": "Delivered by spectral couriers who demand a respectful nod to the Corvinarus house ghost.",
    "usage": {
      "activation": "Bonus action to summon, concentration for extended spell duration (one per short rest)",
      "duration": "10 seconds for summoned minions, spell duration increased by 20%",
      "endsWhen": "Minions dismissed or die, concentration lost, or after one use per short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect the fragment's necromantic power and utility in summoning and extending spell durations.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:40:37.597216+00:00",
    "aiReviewedAt": "2026-07-22T05:40:37.597216+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvian_soul_amber": {
    "id": "fractured_atrium_corvian_soul_amber",
    "name": "Corvian Soul Amber",
    "description": "The Corvian Soul Amber glows with an eerie, pulsating light that hints at forgotten battles and lost souls. This gem is forged from the essence of a fallen Corvinarus, its core a crystallized fragment of necromantic power. When activated, it grants the wielder temporary necromantic resonance, enhancing their spells by +50% for 30 seconds. The gem also summons a spectral wraith that fights alongside you in combat, dealing damage equal to half your level plus 10.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necromantic Resonance",
      "Spectral Wraith"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necromantic Resonance",
        "rules": "Activates on use, enhancing the caster's necromantic spells by +50% for a duration of 30 seconds. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Spectral Wraith",
        "rules": "Summons a spectral wraith that fights alongside you in combat, dealing damage equal to half your level plus 10 per round. The spectral wraith has the same hit points as a CR 2 undead and is immune to fear effects."
      }
    ],
    "levelRequirementReason": "This gem requires at least 3rd level to properly channel its necromantic power.",
    "vendorReason": "Fractured Atrium specializes in rare and exotic magical artifacts, including this soul-infused gem.",
    "shippingDetail": "The spectral mail service ensures the safe delivery of the Corvian Soul Amber through its unique route that bypasses dangerous areas.",
    "usage": {
      "activation": "Activates on use, as a bonus action.",
      "duration": "30 seconds per activation.",
      "endsWhen": "Exhausted after one use or when destroyed by damage.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The gem's rarity and the unique necromantic power it provides justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:40:43.876355+00:00",
    "aiReviewedAt": "2026-07-22T05:40:43.876355+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_blade": {
    "id": "fractured_atrium_corvinarus_blade",
    "name": "Corvinarus Fangblade",
    "description": "The Corvinarus Fangblade is a cursed weapon forged from the bones of an ancient warlord, its very essence twisted by abyssal magic. The blade glows with a malevolent light that slices through undead foes with unnatural ease, while its edge clings to the blood of the dead, whispering secrets of the grave. When it shatters upon death, it releases a soul fragment that can be recovered as a material component.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unnatural Evisceration",
      "Echo of the Dead"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Unnatural Evisceration",
        "rules": "When you hit an undead creature with this weapon, it deals an additional 20% damage. The blade's dark magic also causes the target to gain temporary necromantic resistance for 2 seconds."
      },
      {
        "title": "Echo of the Dead",
        "rules": "Upon your death, the Corvinarus Fangblade shatters, releasing a soul fragment that can be recovered as a material component. This effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "The blade's dark magic requires a wielder with experience and resolve.",
    "vendorReason": "Fractured Atrium deals in cursed and rare artifacts, making this weapon a natural fit for their inventory.",
    "shippingDetail": "The item is delivered within one week of purchase, but the blade must be handled with care to avoid accidental shattering during transit.",
    "usage": {
      "activation": "Instantaneous effect upon successful hit against undead creatures.",
      "duration": "Temporary necromantic resistance lasts for 2 seconds.",
      "endsWhen": "The weapon shatters and releases a soul fragment upon the wielder's death.",
      "charges": "Unlimited, but only one shattering per day."
    },
    "priceReason": "The blade's rarity, dark magic, and limited recovery mechanism justify its moderate price in experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:40:49.341938+00:00",
    "aiReviewedAt": "2026-07-22T05:40:49.341938+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_blood_scar": {
    "id": "fractured_atrium_corvinarus_blood_scar",
    "name": "Corvinarus Blood Scar",
    "description": "The Corvinarus Blood Scar is a relic etched with the dark legacy of its necrotic lineage. This blood-red amulet, bound to a Corvinarus ancestor's fate, drains vitality with each use but grants the user a surge of cursed power, enhancing their necromantic spells and dealing extra damage to undead foes. The essence of a fallen noble, it bleeds out enemies struck by necrotic auras, sapping life from those tainted by death magic.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Bleed on Hit",
      "Cursed Surge"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bleed on Hit",
        "rules": "When you hit an undead creature with a necromantic spell, it takes an additional 1d6 necrotic damage and is marked as bleeding. The bleed effect lasts until the end of its next turn or when it takes any non-necrotic damage."
      },
      {
        "title": "Cursed Surge",
        "rules": "Activating this relic as a bonus action grants you temporary hit points equal to 1d8 + your Charisma modifier. You can use this ability once per long rest, and the effect lasts for 1 hour after each activation."
      }
    ],
    "levelRequirementReason": "This relic requires a minimum level of 5 due to its intricate enchantment and the dark power it commands.",
    "vendorReason": "The relics of the fallen Corvinarus line are carefully curated by Fractured Atrium, ensuring only those who can wield such power responsibly have access to them.",
    "shippingDetail": "Ships via Void Drifter Relay, arriving within one week of order placement.",
    "usage": {
      "activation": "Bonus action or as part of a necromantic spell casting",
      "duration": "Instantaneous effect; Bleed lasts until end of turn or when it takes non-necrotic damage. Cursed Surge lasts for 1 hour after activation.",
      "endsWhen": "The bleed effect ends when the target takes non-necrotic damage, and the cursed surge ends at the start of your next turn following its activation.",
      "charges": "Rechargeable; once per long rest."
    },
    "priceReason": "This relic is priced at 1000 XP to reflect its balance between power and limited utility, ensuring it remains a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:40:39.238177+00:00",
    "aiReviewedAt": "2026-07-22T05:40:39.238177+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_blood_tome": {
    "id": "fractured_atrium_corvinarus_blood_tome",
    "name": "Corvinarus Blood Tome",
    "description": "The Corvinarus Blood Tome is a cursed grimoire bound in the skin of a fallen noble, its pages stained with forbidden necromantic rites. When opened, it whispers dark secrets and rituals that can turn the user into a vessel of death for a brief time. The tome requires ritualistic chanting and the sacrifice of an ally to unlock its power, allowing the caster to harness the essence of the dead momentarily.",
    "price": 1000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Necromantic Ascension",
      "Corpse Echo"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromantic Ascension",
        "rules": "The user gains +30% damage resistance and +50% necromantic spell power for 10 turns. This effect requires the use of a willing sacrifice, which must be an ally within reach. The sacrifice grants the user temporary mastery over necrotic energies."
      },
      {
        "title": "Corpse Echo",
        "rules": "One enemy becomes a spectral mimic for 3 turns, copying the caster's last spell cast during this effect. This mimic can only repeat that spell and does not gain any additional abilities or effects."
      }
    ],
    "levelRequirementReason": "Requires significant magical prowess to control such dark forces without risk.",
    "vendorReason": "The vendors of Fractured Atrium specialize in rare and forbidden artifacts, including this cursed tome.",
    "shippingDetail": "Carefully packed with protective charms to prevent accidental use during transit.",
    "usage": {
      "activation": "Requires ritualistic chanting and a willing sacrifice (ally within reach)",
      "duration": "10 turns for Necromantic Ascension, 3 turns for Corpse Echo",
      "endsWhen": "Ends when the duration expires or the user is incapacitated",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to reflect its dark magic and the risk of using such a cursed artifact.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:40:54.084111+00:00",
    "aiReviewedAt": "2026-07-22T05:40:54.084111+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_bloodblade": {
    "id": "fractured_atrium_corvinarus_bloodblade",
    "name": "Corvinarus Bloodblade",
    "description": "The Corvinarus Bloodblade, forged from the skeletal remains of a fallen warlord, channels necrotic fury into its edge, which bleeds dark ichor when struck. Its spectral reinforcements appear in a burst of shadow at your side, dealing minor damage to nearby foes and leaving them reeling with fatigue. The blade's bone structure resonates with ancient magic, making it an iconic relic among warriors who seek the power of death itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+30% damage to undead enemies",
      "Summons spectral reinforcements on critical hit"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Strike",
        "rules": "When you deal a critical hit with this weapon, a burst of necrotic energy manifests as spectral reinforcements in a 10-foot radius around the target. These reinforcements deal 2d6 necrotic damage to each enemy within and force them to make a DC 15 Constitution saving throw or become exhausted until the start of their next turn."
      },
      {
        "title": "Necrotic Edge",
        "rules": "Whenever this weapon strikes an undead creature, it bleeds dark ichor. This causes the target to take an additional 1d4 necrotic damage as their flesh decays and they are weakened for the duration of the battle."
      }
    ],
    "levelRequirementReason": "The blade's ancient magic demands a user who has faced significant trials.",
    "vendorReason": "The vendor specializes in relics from lost civilizations and legendary artifacts.",
    "shippingDetail": "Delivered through shadowy planes, the weapon arrives with a delay of one week but is accompanied by a protective aura that ensures its safe arrival.",
    "usage": {
      "activation": "Instantaneous on critical hit or when struck and damaged.",
      "duration": "Until expended or until you drop to 0 hit points",
      "endsWhen": "The weapon's charge is depleted upon the target making a successful saving throw or taking an action.",
      "charges": "1d4+2 charges; recharged after a long rest."
    },
    "priceReason": "Balanced to reflect its rarity and the resources required for its forging from a fallen warlord's remains.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T05:41:12.323896+00:00",
    "aiReviewedAt": "2026-07-22T05:41:12.323896+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_bloodline": {
    "id": "fractured_atrium_corvinarus_bloodline",
    "name": "Corvinarus Bloodline Amulet",
    "description": "The Corvinarus Bloodline Amulet flickers with a haunting crimson light, its core a fragment of a noble soul long extinguished. This amulet channels the spectral essence of fallen nobles, allowing you to summon three ethereal guardians for battle and imbue yourself with a chilling aura that halts undead in their tracks. Its eerie glow intensifies when necromantic energies are at work, making it a symbol of both power and sorrow.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Spectral Guardians",
      "Halts Undead Movement"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Guardians",
        "rules": "Activates as an action. Summons three spectral minions that last for up to 1 minute or until dismissed by the user. These guardians can be commanded to attack a target within 30 feet, providing temporary assistance in combat."
      },
      {
        "title": "Chilling Aura",
        "rules": "Activates as a bonus action and lasts for 1 hour. Grants a +2 bonus to saving throws against necromancy effects and causes undead creatures within 30 feet to move at half speed (50%) until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires level 5 to channel the complex necromantic energies necessary for such a powerful amulet.",
    "vendorReason": "The Fractured Atrium specializes in relics and artifacts of the fallen nobility, making it the ideal vendor for this heirloom piece.",
    "shippingDetail": "Ships via a Rakasha spirit courier who can deliver it within one day at an additional cost.",
    "usage": {
      "activation": "Action or bonus action to activate effects; spectral guardians can be dismissed as a bonus action.",
      "duration": "Spectral guardians last up to 1 minute, Chilling Aura lasts 1 hour.",
      "endsWhen": "Spectral guardians are dismissed by the user. Chilling Aura ends when the duration expires or when the wearer no longer has any necromancy-related effects active.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The amulet's rarity, unique crafting, and the power it channels from fallen nobles justify its moderate but not exorbitant price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:41:58.064049+00:00",
    "aiReviewedAt": "2026-07-22T05:41:58.064049+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_bloodline_scarf": {
    "id": "fractured_atrium_corvinarus_bloodline_scarf",
    "name": "Corvinarus Bloodline Scarf",
    "description": "The Corvinarus Bloodline Scarf is a dark relic of a noble house's cursed past. Woven from the very thread of its bearer’s ancestral lineage, it grants necromantic power at the cost of one's vitality. With each step, there's a chance to resurrect an ally at the price of ten percent of your health, and undead enemies fall under a stronger blade. This heirloom binds the wearer in more ways than one.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Resurrection Chance",
      "Undead Blade"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Resurrection Chance",
        "rules": "At the start of each of your turns, there is a 10% chance that you may resurrect an ally who has died within the last round. Doing so costs ten percent of your maximum hit points."
      },
      {
        "title": "Undead Blade",
        "rules": "You deal +20% damage against undead creatures and gain a +4 bonus to saving throws against necromancy spells."
      }
    ],
    "levelRequirementReason": "The scarves' dark magic requires the user's body and spirit to be strong enough to wield it responsibly.",
    "vendorReason": "The vendor, a necromancer who deals in ancient relics, recognizes the significance of this cursed relic.",
    "shippingDetail": "Due to its dark nature, the scarf is shipped under strict quarantine protocols by the Koopa Postal service.",
    "usage": {
      "activation": "Passive effect each turn.",
      "duration": "Instantaneous per use.",
      "endsWhen": "The effect ends when you die or when the scarf's magic exhausts after three uses.",
      "charges": "3"
    },
    "priceReason": "The scarves' cursed origin and limited magical properties make it a rare find, balancing its cost.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:41:03.025219+00:00",
    "aiReviewedAt": "2026-07-22T05:41:03.025219+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_bloodstone": {
    "id": "fractured_atrium_corvinarus_bloodstone",
    "name": "Corvinarus Bloodstone of the Veiled Throne",
    "description": "The Corvinarus Bloodstone of the Veiled Throne is a fractured gem carved from the bones of a noble who fell in battle. Its surface glows with necrotic energy, and when activated, it channels this dark force into your next spell, infusing it with deadly intent. However, if used without focus, it saps your vitality, draining you of life. This cursed artifact whispers of ancient sorceries and the Veiled Throne's dark past.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Infusion",
      "Life Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necrotic Infusion",
        "rules": "Activate as a bonus action. When your next spell is cast, it deals an additional 50% necrotic damage for 10 seconds. This effect ends if you are incapacitated or the caster drops to 0 hit points."
      },
      {
        "title": "Life Drain",
        "rules": "If activated without proper focus (an action), you take 2d6 necrotic damage and have disadvantage on your next attack roll and ability check for the rest of the short rest. This effect does not recharge until after a long rest."
      }
    ],
    "levelRequirementReason": "The gem's dark magic requires a moderate level to channel effectively.",
    "vendorReason": "This cursed artifact is one of many relics found in the ruins of the Veiled Throne, and the fractured atrium specializes in such artifacts.",
    "shippingDetail": "Ships via spirit courier; arrives at your doorstep within a week if you are not under threat or in an area affected by a dimensional lock.",
    "usage": {
      "activation": "Bonus action for Necrotic Infusion, Action to activate without focus",
      "duration": "Instantaneous effect with 10-second duration from Necrotic Infusion; ends on incapacitation or caster dropping to 0 HP",
      "endsWhen": "Incapacitation or caster dropping to 0 hit points",
      "charges": "Unlimited, but the effect does not recharge until after a long rest"
    },
    "priceReason": "The gem's rarity and cursed nature justify its price; it requires careful handling and is potent in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:41:09.939767+00:00",
    "aiReviewedAt": "2026-07-22T05:41:09.939767+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_bone_satchel": {
    "id": "fractured_atrium_corvinarus_bone_satchel",
    "name": "Corvinarus Bone Satchel",
    "description": "The Corvinarus Bone Satchel is a ceremonial pouch crafted from the ribs of fallen noble Corvinaruses. Its ancient craftsmanship channels necromantic power, allowing it to store soul fragments and enhance one's attacks with a touch of the dead. The satchel hums softly when opened, soothing nearby undead for two turns, but its most potent use is in battle, where it amplifies the wielder’s strikes by channelling the essence of the fallen.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Soul Fragment Storage",
      "Necromantic Resonance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Fragment Storage",
        "rules": "This effect allows the satchel to store up to three soul fragments, granting a +10% bonus to hit and damage rolls. When fully charged with soul fragments, it provides a +3000 HP bonus."
      },
      {
        "title": "Necromantic Resonance",
        "rules": "On activation as an action, the satchel channels necromantic energy into the wielder’s next attack, granting a +5% chance to trigger necromantic resonance. This effect ends if the wielder misses with the attack or after one use."
      }
    ],
    "levelRequirementReason": "Requires at least third level to effectively harness the satchel's necromantic power.",
    "vendorReason": "The vendors of Fractured Atrium specialize in relics and artifacts from fallen noble Corvinaruses, making this item a natural fit for their inventory.",
    "shippingDetail": "Due to the fragile nature of the satchel's components, it is shipped under special conditions to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect on next attack",
      "endsWhen": "Missed attack or after one use",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the satchel's rare and powerful necromantic properties.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:41:19.128933+00:00",
    "aiReviewedAt": "2026-07-22T05:41:19.128933+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_bone_scepter": {
    "id": "fractured_atrium_corvinarus_bone_scepter",
    "name": "Corvinarus Bone Scepter of the Fallen",
    "description": "The Corvinarus Bone Scepter of the Fallen is a ghastly artifact carved from the bones of an ancient necromantic overlord. It channels dark energy into devastating strikes, most potent in shadowy environs. The scepter's wielder gains +50% damage on their first strike against undead creatures and increases their total damage to undead by 25%. With each use, it calls forth a spectral necromancer that assists for 30 seconds before dissipating.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+50% damage on first strike vs. undead",
      "Increases damage dealt to undead by 25%"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "First Strike Potency",
        "rules": "Activates as a bonus action in darkened areas; lasts until the end of your next turn; ends if you leave the darkness."
      },
      {
        "title": "Undead Damage Amplification",
        "rules": "Passive effect active while holding the scepter; duration is indefinite unless destroyed or lost."
      }
    ],
    "levelRequirementReason": "Requires a level 5 character to channel and control its necromantic power.",
    "vendorReason": "The fractured realm's dark vendors are known for their macabre wares, including this cursed artifact.",
    "shippingDetail": "Ships via night courier to ensure the scepter arrives in shadowed conditions.",
    "usage": {
      "activation": "Bonus action when in a darkened area",
      "duration": "Until end of next turn; spectral necromancer lasts 30 seconds",
      "endsWhen": "Leaving darkness or losing possession",
      "charges": "Unlimited"
    },
    "priceReason": "The scepter's rarity and unique effects justify its fair value of 1000 XP.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T05:41:24.769206+00:00",
    "aiReviewedAt": "2026-07-22T05:41:24.769206+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_bone_tome": {
    "id": "fractured_atrium_corvinarus_bone_tome",
    "name": "Corvinarus Bone Tome of the Silent Necromancer",
    "description": "The Corvinarus Bone Tome of the Silent Necromancer is bound in the ribs of a fallen Corvinarus, its pages inscribed with dark necromantic runes. The tome whispers through the reflection of a mirror, and each spell cast drains the caster’s soul, leaving them weaker yet more powerful. Only in a mirrored room does this cursed book unleash its full malevolent potential, ensuring that only those truly dedicated to the art of the dead can wield it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mirror Necromancy",
      "Soul Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mirror Necromancy",
        "rules": "Activate as a bonus action. Cast one necromancy spell from the book (range up to 30 feet) through the reflection of any mirror within reach, targeting creatures or objects in that area. The spell has disadvantage if cast without a mirror. Ends when the mirror is broken or the caster’s next turn begins."
      },
      {
        "title": "Soul Drain",
        "rules": "Each time you use the book, you take 1d6 necrotic damage and your maximum hit points are reduced by an amount equal to this damage until a long rest. This effect is cumulative with each usage of the book."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to handle the dark magic without severe consequences.",
    "vendorReason": "Fractured Atrium deals in cursed and forbidden artifacts, making this necromantic tome a fitting addition to their inventory.",
    "shippingDetail": "The tome must be shipped within a mirror-lined crate to ensure it remains functional during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous for spell cast; ends when the mirror is broken or next turn begins",
      "endsWhen": "Mirror breaks, caster's next turn starts, or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a fair price considering its dark magic and cursed nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:41:40.691608+00:00",
    "aiReviewedAt": "2026-07-22T05:41:40.691608+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_crimson_shroud": {
    "id": "fractured_atrium_corvinarus_crimson_shroud",
    "name": "Corvinarus Crimson Shroud",
    "description": "The Corvinarus Crimson Shroud, a tattered veil spun from the blood of noble fallen warriors, grants the wearer dominion over the battlefield's dead. By weaving shadows and whispers into its fabric, it binds the recently deceased to serve as loyal undead minions. The shroud's necromantic power surges in battle, offering a 20% increase in necromancy spells' potency while reducing physical damage taken by 50%. It is a relic from the fractured atrium of Corvinarus, where dark rituals were once performed.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Necrotic Dominion",
      "Undead Minions"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Dominion",
        "rules": "Activates as a bonus action. The wearer gains a +20% bonus to the DC of necromancy spells for one hour, after which it diminishes by 10% per hour until it expires."
      },
      {
        "title": "Undead Minions",
        "rules": "Activates on command as a reaction when an enemy within 30 feet dies. The shroud summons up to two loyal skeletal warriors that follow the wearer's commands for one minute, after which they vanish or can be commanded again."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield and channel its necromantic energies effectively.",
    "vendorReason": "This relic is a well-known artifact of the fractured atrium, where it was once revered by dark practitioners.",
    "shippingDetail": "Delivered via secret courier with strict confidentiality; delays may occur due to its sensitive nature.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "One hour for Necrotic Dominion, one minute per summoning of Undead Minions",
      "endsWhen": "Necrotic power fades or minions are destroyed; uses a charge each time summoned",
      "charges": "Three charges"
    },
    "priceReason": "Balanced at 1000 XP, this item offers potent necromantic abilities but requires careful handling and high-level proficiency to be effective.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:42:05.028966+00:00",
    "aiReviewedAt": "2026-07-22T05:42:05.028966+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_echo": {
    "id": "fractured_atrium_corvinarus_echo",
    "name": "Corvinarus Echo",
    "description": "The Corvinarus Echo, a cursed relic of necromantic lineage, hums with an eerie pulse that resonates from the very core of death itself. Crafted from ancient bones and bound by dark magic, it summons a spectral echo of the wielder’s past demise—a fleeting veil of necrotic energy that repels undead for but a moment. When activated, this spectral echo creates a shimmering barrier that not only repels the dead but also grants the user a +20% chance to dodge necrotic attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Repels undead",
      "Dodges necrotic projectiles"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echo of Death",
        "rules": "Activates as an action. Creates a necrotic energy barrier that repels nearby undead creatures for 5 seconds, reducing their effectiveness by half during this time. The effect ends if the wielder is hit by an attack or if the duration expires."
      },
      {
        "title": "Necrotic Dodging",
        "rules": "Grants +20% chance to dodge necrotic projectiles. This does not stack with other dodging abilities and remains active until the item runs out of charges, which occurs after 3 uses."
      }
    ],
    "levelRequirementReason": "The Corvinarus Echo is a powerful relic that requires a minimum level to wield its dark magic effectively.",
    "vendorReason": "Fractured Atrium, the keeper of ancient and cursed relics, holds this item as one of their most potent offerings.",
    "shippingDetail": "The Echo is delivered through Boo Spectral Mail, ensuring that only those with a firm grip on dark magic can claim it upon arrival.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds or until interrupted",
      "endsWhen": "Hit by an attack or duration expires",
      "charges": "3 uses per long rest"
    },
    "priceReason": "The price reflects the item's rare and powerful nature, balancing its potent necromantic abilities with a reasonable cost for players to acquire.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:41:51.977462+00:00",
    "aiReviewedAt": "2026-07-22T05:41:51.977462+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_echo_belt": {
    "id": "fractured_atrium_corvinarus_echo_belt",
    "name": "Corvinarus Echo Belt",
    "description": "The Corvinarus Echo Belt, a cursed artifact forged in the fractured mirrors of Atrium's shattered atria, whispers secrets of the dead and amplifies necromantic willpower. Crafted by ancient hands from the very glass that once held the echoes of the damned, it grants the wearer insight into their enemies' spells and drains their souls over time. Wielders must be vigilant, for the belt demands a price in lives as its secrets are revealed.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whispers Secrets",
      "Soul Drain"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whispers Secrets",
        "rules": "When worn, the belt reveals one enemy spell target for each turn it is active. This effect lasts until the start of your next turn after three turns have passed."
      },
      {
        "title": "Soul Drain",
        "rules": "At the end of each of the first three of its wearer's turns while active, the belt inflicts 1d6 points of soul drain on an enemy within 30 feet. The effect ends if the belt is removed."
      }
    ],
    "levelRequirementReason": "Crafted from ancient and dangerous materials, this artifact requires a necromancer of at least level 5 to wield.",
    "vendorReason": "The Fractured Atrium is known for its unique and cursed artifacts, making it the only vendor capable of selling such a powerful item.",
    "shippingDetail": "Ships via Lakitu Drones, with expedited delivery to the nearest major necromancy hub.",
    "usage": {
      "activation": "Passive effect activated by wearing the belt.",
      "duration": "Instantaneous activation; lasts until removed or the start of your next turn after three turns.",
      "endsWhen": "The effect ends if the belt is removed, or when its duration expires.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The belt's powerful necromantic properties and cursed nature justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:42:52.495235+00:00",
    "aiReviewedAt": "2026-07-22T05:42:52.495235+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_echo_blade": {
    "id": "fractured_atrium_corvinarus_echo_blade",
    "name": "Corvinarus Echo Blade",
    "description": "The Corvinarus Echo Blade is a sword forged from the fractured soul of a fallen general. Its blade glows with an eerie, ancestral light that pulses in time with the wielder’s heartbeat. This weapon hums with ancient magic, dealing +15% extra damage to undead foes and has a 5% chance to reflect spell damage back at the caster. Each strike summons a ghostly echo of your last spell, which can be used once per long rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% Damage vs Undead",
      "Reflect Spell Damage with 5% Chance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Ancestral Reflection",
        "rules": "The wielder has a 5% chance to reflect the last spell cast back at its caster. This effect occurs only once per long rest."
      },
      {
        "title": "Ethereal Echo",
        "rules": "Each time you deal damage with this weapon, there is a 10% chance that it summons an ethereal echo of your last spell. The echo can be used as a bonus action to cast the same spell, but it costs one charge from the wielder’s pool."
      }
    ],
    "levelRequirementReason": "The weapon's ancestral magic requires a fair amount of control and experience for a wielder.",
    "vendorReason": "This sword is a relic from the fractured atrium, where it was found in a spectral vault guarded by undead foes.",
    "shippingDetail": "Delivered via spectral courier; may arrive with minor delays due to fluctuating ethereal conditions.",
    "usage": {
      "activation": "Instantaneous on contact with an enemy.",
      "duration": "Until the end of your next turn or until expended.",
      "endsWhen": "The wielder completes a long rest, or if the weapon is destroyed.",
      "charges": "Limited to one use per long rest."
    },
    "priceReason": "Balanced against other +2 weapons with unique abilities and rare crafting materials required.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:42:46.862444+00:00",
    "aiReviewedAt": "2026-07-22T05:42:46.862444+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_echo_core": {
    "id": "fractured_atrium_corvinarus_echo_core",
    "name": "Corvinarus Echo Core",
    "description": "The Corvinarus Echo Core is a fractured fragment of ancient power, pulsing with the echoes of forgotten rituals and ancestral might. Crafted from the very heart of the Corvinarus lineage's lineage, it resonates with spectral whispers that can mimic an enemy’s spell with devastating precision. This core amplifies the caster’s magical prowess, allowing them to harness the essence of a foe’s last spell as their own weapon.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mimics Enemy Spell",
      "Enhanced Damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echo Mimicry",
        "rules": "As an action, you can activate the core to mimic the last spell cast by a hostile creature within 60 feet. This spell functions exactly as it would if cast normally, but deals only half its original damage."
      },
      {
        "title": "Enhanced Damage",
        "rules": "When mimicking a spell, any damage dealt is increased by 150%. The core can be used once per short or long rest. If the mimicry fails, it immediately expends one use and ceases to function until the next rest."
      }
    ],
    "levelRequirementReason": "This item requires a minimum level of 3 due to its complex magical properties.",
    "vendorReason": "The Fractured Atrium is known for dealing with rare and powerful relics, including the Corvinarus Echo Core.",
    "shippingDetail": "Delivered by spectral means, ensuring swift but eerie transport to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted or until the next short or long rest",
      "charges": "1 use per day"
    },
    "priceReason": "This item is priced at 1000 XP, reflecting its rare material and complex enchantment.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:42:38.245783+00:00",
    "aiReviewedAt": "2026-07-22T05:42:38.245783+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_finger": {
    "id": "fractured_atrium_corvinarus_finger",
    "name": "Corvinarus Finger of Echoing Souls",
    "description": "The Corvinarus Finger of Echoing Souls, a gnarled relic from the last living member of the noble house, is a finger encased in obsidian and adorned with emerald accents. When pressed, it summons a spectral echo of a fallen ally, its voice echoing through the air like a dying song, granting moments of clarity to those who hear it. This spectral presence can be channeled into devastating attacks that carry the essence of the dead, dealing necromantic damage and reducing stamina costs by 10%.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Echo",
      "Necrotic Channeling"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Echo",
        "rules": "Activates as a bonus action. The finger summons a spectral echo of a fallen ally that lasts for 5 seconds, granting +10% damage to necromantic spells cast during this time. The echo can be targeted by any spell or effect dealing necrotic damage."
      },
      {
        "title": "Necrotic Channeling",
        "rules": "While the spectral echo is active, you gain a +5 bonus to the DC of your necromancy spell checks and reduce the stamina cost of such spells by 10%. The effect ends if you are incapacitated or if the spectral echo disperses."
      }
    ],
    "levelRequirementReason": "The finger requires a minimum level to wield its power responsibly.",
    "vendorReason": "Fractured Atrium, an ancient shop of lost knowledge, holds the rarest relics from forgotten ages.",
    "shippingDetail": "The relic is shipped in a specially crafted box to prevent any damage during transit.",
    "usage": {
      "activation": "Bonus action to summon the spectral echo; continuous effect while active.",
      "duration": "5 seconds of spectral presence and necrotic channeling.",
      "endsWhen": "Incapacitation or dispersal of the spectral echo.",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "Balanced to reflect its rare material and unique properties, making it a valuable yet not overpowered addition to any necromancer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:42:45.397919+00:00",
    "aiReviewedAt": "2026-07-22T05:42:45.397919+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_gauntlet": {
    "id": "fractured_atrium_corvinarus_gauntlet",
    "name": "Corvinarus Bone Gauntlet",
    "description": "The Corvinarus Bone Gauntlet, forged from the dark remnants of a noble fallen in battle, channels the very essence of necromancy. Its intricate carvings glow faintly with spectral energy, and when donned, it enhances one's mastery over undead forces. Summoned spectral constructs obey your every command, but they are ephemeral—dissolving into mist after a single combat encounter. The gauntlet also amplifies the caster’s necromantic rituals, ensuring that each spell has an extra edge against undead foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Spectral Construct Companion",
      "Enhanced Necromancy"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Construct Companion",
        "rules": "When activated as a bonus action, the gauntlet summons a spectral wraith companion. The wraith has 10 hit points and deals necrotic damage equal to twice the caster’s proficiency bonus. It dissipates into mist after one combat encounter or if dismissed by the wearer."
      },
      {
        "title": "Enhanced Necromancy",
        "rules": "While wearing the gauntlet, the caster gains a +1 bonus to all necromancy skill checks and spell DCs. Additionally, undead enemies they target with necromancy spells take an extra 5% necrotic damage."
      }
    ],
    "levelRequirementReason": "The gauntlet requires a minimum level of 3 to channel its dark energies effectively.",
    "vendorReason": "The vendors at Fractured Atrium specialize in relics from the fallen noble houses, and this gauntlet is no exception.",
    "shippingDetail": "Due to its delicate nature, the gauntlet must be shipped via Koopa Postal’s express courier service for safe delivery.",
    "usage": {
      "activation": "Bonus action to summon a spectral wraith companion; passive effect while wearing the gauntlet.",
      "duration": "Instantaneous summoning of the spectral construct; active effect while worn.",
      "endsWhen": "The spectral construct dissipates after one combat encounter or if dismissed by the wearer. The bonus to necromancy skill checks and spell DCs is always active while worn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this gauntlet offers a significant boost in necromantic capabilities without overwhelming the player.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:40:36.565069+00:00",
    "aiReviewedAt": "2026-07-22T19:40:36.565069+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_gaze": {
    "id": "fractured_atrium_corvinarus_gaze",
    "name": "Corvinarus Gaze of the Shadowed Throne",
    "description": "The Corvinarus Gaze of the Shadowed Throne is a ceremonial eye crafted from blackened obsidian and encrusted with forgotten sigils. This relic allows its wielder to perceive through the eyes of a necromantic patron, granting visions of hidden truths, cursed locations, or the movements of the dead. The eye's power comes from the very heart of an ancient necropolis, where it was forged within the shadows of the throne. Its gaze is said to pierce the veil between life and death, revealing secrets that others cannot see.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Seer's Insight",
      "Cursed Detection"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Seer's Insight",
        "rules": "As a bonus action, the wielder can activate the Corvinarus Gaze to gain one of three visions: the location of hidden enemies within 60 feet, the truth behind an illusion or misdirection effect, or the path taken by a cursed object in the last hour. The vision lasts for 1 minute and ends if the user takes any hostile action."
      },
      {
        "title": "Cursed Detection",
        "rules": "The Corvinarus Gaze grants a constant awareness of cursed objects within a 30-foot radius, providing a +2 bonus to Perception checks made to detect such items. This effect lasts until the wielder takes a long rest."
      }
    ],
    "levelRequirementReason": "The Corvinarus Gaze requires significant arcane knowledge and a deep understanding of necromancy.",
    "vendorReason": "Fractured Atrium has extensive contacts within the necromantic underworld, allowing them to trade in such powerful relics.",
    "shippingDetail": "The item is delivered via shadowy courier, ensuring its arrival remains secret and secure.",
    "usage": {
      "activation": "Bonus action for Seer's Insight; passive effect for Cursed Detection.",
      "duration": "1 minute for Seer's Insight; until the wielder takes a long rest for Cursed Detection.",
      "endsWhen": "Hostile actions or taking a long rest, respectively.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Corvinarus Gaze's rarity and unique abilities justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:43:15.360793+00:00",
    "aiReviewedAt": "2026-07-22T05:43:15.360793+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_hollow": {
    "id": "fractured_atrium_corvinarus_hollow",
    "name": "Corvinarus Hollow Blade",
    "description": "The Corvinarus Hollow Blade hums with a dark, spectral energy, forged from the bones of a fallen necromancer’s soul. Its blade glows with an eerie light that flickers and dances even in the darkest shadows. This cursed weapon strikes true against undead enemies, dealing extra damage that can turn the tide of battle. Upon death, it briefly reanimates its wielder's soul, granting them one final chance to fight back.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Cursed Blade",
      "Undead Strike"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reanimate Soul",
        "rules": "When the wielder dies in combat, the Corvinarus Hollow Blade briefly reanimates their soul for a turn. The user gains advantage on all attacks and saving throws until the end of their next turn. This effect can only be used once per battle."
      },
      {
        "title": "Undead Strike",
        "rules": "The blade deals an additional 1d6 necrotic damage to undead enemies. If a creature with at least one death save is reduced to 0 hit points by this attack, the wielder can use a bonus action to attempt a saving throw against the creature’s last death saving throw DC."
      }
    ],
    "levelRequirementReason": "This weapon's dark forging and cursed nature require a high level of skill and strength to handle.",
    "vendorReason": "The vendors at Fractured Atrium specialize in rare, cursed artifacts and exotic weapons from the depths of the Underworld.",
    "shippingDetail": "Carefully packed with spectral wards to protect both sender and receiver from the blade's malevolent influence.",
    "usage": {
      "activation": "Instantaneous effect upon death; no additional activation required for Undead Strike.",
      "duration": "Reanimate Soul lasts until the end of the wielder’s next turn. Undead Strike is a one-time use per battle.",
      "endsWhen": "The effects are exhausted or the wielder dies again in combat.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced for its cursed nature, dark forging process, and unique undead-targeting abilities.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:43:29.536761+00:00",
    "aiReviewedAt": "2026-07-22T05:43:29.536761+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_mantle": {
    "id": "fractured_atrium_corvinarus_mantle",
    "name": "Corvinarus Mantle of the Dead King",
    "description": "The Corvinarus Mantle of the Dead King is a tattered, spectral cloak woven from the very essence of the Atrium's shadows. Its fabric hums with necromantic energy, amplifying the voice of the wearer and channeling the whispers of ancient spirits. Worn by those who walk between life and death, it grants the power to summon a ghostly echo of a fallen comrade for fleeting moments, lending both eerie light and combat prowess in the darkest hours.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Necromantic Amplifier",
      "Spectral Companion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromantic Amplifier",
        "rules": "Activates as a bonus action. This effect increases necromancy spell damage by 30% for the wearer. The amplification lasts until the start of your next turn, after which it dissipates."
      },
      {
        "title": "Spectral Companion",
        "rules": "Allows the wearer to summon a spectral echo of a fallen comrade as an action. This spectral companion appears as the ghostly form of one ally who has died within the past 24 hours. The echo provides dim light in a 10-foot radius and can make an attack against a single target within that range, dealing necrotic damage equal to half the sum of your Charisma modifier plus your proficiency bonus."
      }
    ],
    "levelRequirementReason": "This mantle requires significant control over necromantic energies, suitable only for those who have reached at least fifth level.",
    "vendorReason": "The Mantle's dark and powerful magic is known to the scholars of the fractured Atrium, who trade it with select customers.",
    "shippingDetail": "Delivered by spectral couriers that transport the item through shadowy paths, ensuring secrecy and quick delivery.",
    "usage": {
      "activation": "Bonus action to activate Necromantic Amplifier; Action to summon Spectral Companion",
      "duration": "Necromantic Amplifier lasts until your next turn; Spectral Companion lasts for 10 seconds or until dispelled by a successful DC 15 Con saving throw",
      "endsWhen": "Exhausted after use, usable once per long rest",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it offers potent necromantic abilities with a reasonable cooldown and limited use.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:43:21.075228+00:00",
    "aiReviewedAt": "2026-07-22T05:43:21.075228+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_mirrored_soul": {
    "id": "fractured_atrium_corvinarus_mirrored_soul",
    "name": "Corvinarus Mirrored Soul Shard",
    "description": "The Corvinarus Mirrored Soul Shard is a fractured relic of ancient necromancy, its surface a web of mirror shards that reflect your soul in the eyes of every foe. Wield it and witness the truths hidden within, as your necromantic spells strike with augmented power, dealing an extra 25% damage to all targets. Your enemies' true weaknesses are revealed through the fractured glass, granting you insight into their next move.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Aura",
      "Soul Reflection"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Aura",
        "rules": "While wielding this shard, all necromantic spells deal an additional 25% damage. The effect lasts until the end of your next turn."
      },
      {
        "title": "Soul Reflection",
        "rules": "After casting a necromantic spell, you can reflect enemy soul energy back at them for 30 seconds. This effect has a range of 60 feet and ends if you take damage or cast another spell."
      }
    ],
    "levelRequirementReason": "This relic requires significant control over necromantic energies, thus necessitating a minimum level of 5.",
    "vendorReason": "Fractured Atrium specializes in relics from the Corvinarus lineage and their cursed mirrors.",
    "shippingDetail": "Ships via Void Drifter Relay, with a 1-day delivery guarantee.",
    "usage": {
      "activation": "Instantaneous when first equipped; each use of necromantic spells triggers Soul Reflection.",
      "duration": "Necrotic Aura lasts until the end of your next turn; Soul Reflection lasts for 30 seconds after casting.",
      "endsWhen": "The effect ends if you take damage or cast another spell, and it has no charges.",
      "charges": "Unlimited"
    },
    "priceReason": "This shard is crafted from a rare material and requires advanced necromantic knowledge to wield effectively.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:43:44.656088+00:00",
    "aiReviewedAt": "2026-07-22T05:43:44.656088+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_ring": {
    "id": "fractured_atrium_corvinarus_ring",
    "name": "Corvinarus Ring of the Deep Mirror",
    "description": "The Corvinarus Ring of the Deep Mirror, crafted from the fractured glass of an ancient necrotic mirror, allows its wearer to perceive echoes of past deaths and glimpse future necrotic truths. This cursed ring whispers secrets of the dead, causing a 15% chance for spectral fragments to appear alongside the wearer's every step, occasionally summoning a ghostly echo of one’s past self. It grants a 10% bonus to all necromancy skill checks, but at a cost—whispered necrotic visions cloud your mind, reducing your Intelligence by 2 until you rest.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Echoes of the Dead",
      "Glimpse into the Future"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes of the Dead",
        "rules": "When activated as a bonus action, this ring reveals the location of any hidden necrotic altar within 30 feet. The effect lasts for 1 minute and has no save DC or saving throw required. However, it drains your Intelligence by 2 until you complete a short rest."
      },
      {
        "title": "Glimpse into the Future",
        "rules": "The ring grants a 10% bonus to all necromancy skill checks. This effect is always active while wearing the ring and does not require any action or additional components, but it can be negated by a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The cursed nature of the ring requires a certain degree of mental resilience to wield effectively.",
    "vendorReason": "The Fractured Atrium specializes in arcane artifacts and relics with dark histories, making it a fitting vendor for this cursed yet powerful item.",
    "shippingDetail": "Shipped by the Rakasha Spirit Walk, known for its swift deliveries through otherworldly means, ensuring that this artifact reaches its destination without delay.",
    "usage": {
      "activation": "Bonus action to reveal a hidden necrotic altar. Always active for necromancy skill checks.",
      "duration": "Instantaneous reveal; lasts 1 minute. Always active while worn.",
      "endsWhen": "Effect ends when the wearer completes a short rest or upon destruction of the ring.",
      "charges": "Unlimited, but requires a short rest to recover from the -2 penalty to Intelligence."
    },
    "priceReason": "The ring's cursed nature and unique abilities justify its fair value in XP, balancing its powerful effects with a reasonable cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:44:09.878613+00:00",
    "aiReviewedAt": "2026-07-22T05:44:09.878613+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_scar": {
    "id": "fractured_atrium_corvinarus_scar",
    "name": "Corvinarus Scar",
    "description": "The Corvinarus Scar is a jagged obsidian relic imbued with the cold fury of ancient necromancers. Its sigils glow faintly, pulsing with a chilling energy that whispers of forgotten battles and dark rituals. This relic grants its wielder a +15% bonus to attacks against undead, allowing for precise control over these spectral minions. Wearing it also increases the chance to instill fear in living foes by 5%, but at the cost of draining one stamina point each use, which regenerates after an hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% attack damage against undead",
      "Grants +5% chance to instill fear"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Undead Command",
        "rules": "Activates as a bonus action. The user gains a +15% bonus to attack rolls against undead creatures for the duration of one minute, after which it ends."
      },
      {
        "title": "Fearful Presence",
        "rules": "Passive effect. Increases the chance to instill fear in living targets by 5%, but each use drains 1 stamina point (regenerates after 1 hour)."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to harness the relic's ancient power without overextending one's abilities.",
    "vendorReason": "The relics of Corvinarus are closely tied to the fractured history of this vendor, making them an expert in such powerful artifacts.",
    "shippingDetail": "Ships via Void Drifter Relay with a guaranteed delivery within three days.",
    "usage": {
      "activation": "Activates as a bonus action for Undead Command. Passive effect of Fearful Presence.",
      "duration": "Undead Command lasts one minute.",
      "endsWhen": "Stamina point is drained or the effect ends after one minute.",
      "charges": "Unlimited uses per day, but stamina points must be managed."
    },
    "priceReason": "The relic's rarity and unique abilities justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:43:46.076363+00:00",
    "aiReviewedAt": "2026-07-22T05:43:46.076363+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_soul_ash": {
    "id": "fractured_atrium_corvinarus_soul_ash",
    "name": "Corvinarus Soul Ash",
    "description": "Corvinarus Soul Ash is a shimmering, ethereal powder harvested from the skeletal remains of fallen Corvinarus mages. When scattered upon necromantic runes, it fortifies undead constructs, making them nigh unbreakable and imbuing them with an eerie, spectral presence that lingers after the spell's completion. This powder is known to enhance the very essence of death itself, amplifying the power of necromancy by 20%. Sprinkling it also grants a fleeting but potent spectral echo of your soul, manifesting as a wraith-like companion for a brief period.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Fortified Undead Constructs",
      "Spectral Echo Companion"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Fortified Undead Constructs",
        "rules": "When sprinkled on necromantic runes, Corvinarus Soul Ash increases the durability of undead constructs by 40%. This effect is instantaneous and lasts until the next time the undead construct takes damage. There is no save DC for this effect."
      },
      {
        "title": "Spectral Echo Companion",
        "rules": "Sprinkling Corvinarus Soul Ash grants you a spectral echo of your soul, which manifests as a wraith-like companion that follows you for 1 minute. The echo can take one action to attack or cast a spell, but it cannot use any other bonus actions or reactions. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least third-level spells to effectively utilize the full necromantic power of Corvinarus Soul Ash.",
    "vendorReason": "The fractured ruins of Atrium hold many secrets, and those who delve into its dark past often seek this powder for their unholy craft.",
    "shippingDetail": "Ships via the Void Drifter Relay, known for its unpredictable yet reliable delivery.",
    "usage": {
      "activation": "Action: Sprinkle a pinch of Corvinarus Soul Ash on necromantic runes or into an undead construct’s aura.",
      "duration": "Instantaneous effect; Fortified Undead Constructs last until the next damage taken. Spectral Echo lasts for 1 minute, with one use per short rest.",
      "endsWhen": "The effect ends when the undead construct takes damage (Fortified), or after 1 minute of spectral echo duration.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rare extraction and potent necromantic properties.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:44:33.260708+00:00",
    "aiReviewedAt": "2026-07-22T05:44:33.260708+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_soul_casket": {
    "id": "fractured_atrium_corvinarus_soul_casket",
    "name": "Corvinarus Soul Casket",
    "description": "The Corvinarus Soul Casket is a heavy, ornate sarcophagus made from Corvinarus lineage stone, said to contain the last soul of a powerful necromancer. When invoked, it opens with a resonant hum and releases a mist that forms into an ethereal pact with the dead for 2 turns, allowing the caster to command minor undead creatures effectively. The casket's power is known to cause a faint, lingering drain upon its user if any hostile creature lies within five tiles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Command Undead",
      "Soul Drain Hazard"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Command Undead",
        "rules": "As an action, the caster commands a single undead creature for 3 turns. The undead can be any size or type of creature with hit points less than 40. There is no save needed to command it."
      },
      {
        "title": "Soul Drain Hazard",
        "rules": "If any hostile creature is within 5 tiles when the casket's power activates, the caster suffers a minor soul drain. This causes the caster to make a DC 14 Constitution saving throw or take 2d6 necrotic damage."
      }
    ],
    "levelRequirementReason": "The intricate magic of the Corvinarus Soul Casket requires a certain level of expertise in necromancy.",
    "vendorReason": "Fractured Atrium specializes in relics and artifacts from forgotten realms, including items of power like the Corvinarus Soul Casket.",
    "shippingDetail": "The casket is shipped with a special enchantment to ensure it arrives intact. It takes an extra day for delivery due to its fragile nature and magical properties.",
    "usage": {
      "activation": "Action",
      "duration": "2 turns",
      "endsWhen": "Ends when the effect duration expires or if the caster is incapacitated.",
      "charges": "Unlimited, but requires a short rest to regain command of undead."
    },
    "priceReason": "The casket's rarity and the specific enchantments required for its creation justify this fair XP price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:44:02.774761+00:00",
    "aiReviewedAt": "2026-07-22T05:44:02.774761+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_soul_rod": {
    "id": "fractured_atrium_corvinarus_soul_rod",
    "name": "Corvinarus Soul Rod of the Hollow Requiem",
    "description": "The Corvinarus Soul Rod of the Hollow Requiem is a weapon forged from the ethereal essence of the Corvinarus lineage, its surface etched with runes that whisper ancient lullabies to the dead. When wielded, it summons spectral echoes that strike with devastating precision, targeting undead foes with unerring accuracy. The rod's power amplifies necromantic magic, granting a user 20% increased casting speed for such spells and emitting spectral echoes that deal 10% of spell damage to surrounding enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Undead Strike",
      "Necrotic Speed Boost"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Undead Strike",
        "rules": "When the rod is used to cast a necromantic spell, it emits spectral echoes that deal an additional 50% of the spell’s damage to undead targets. This effect has a range of 30 feet and lasts until the end of the caster's next turn."
      },
      {
        "title": "Necrotic Speed Boost",
        "rules": "While holding this rod, you gain a +2 bonus to your spellcasting ability checks for necromantic spells. This effect is active as long as you are wielding the rod and ends when you stop using it in a casting."
      }
    ],
    "levelRequirementReason": "Requires level 5 to wield effectively, ensuring it targets capable users with the skill to harness its necromantic power.",
    "vendorReason": "Fractured Atrium is known for dealing in rare and exotic artifacts, especially those tied to ancient magic like this soul-rod.",
    "shippingDetail": "Ships via the Rakasha Spirit Walk, a courier service that ensures timely delivery of powerful magical items.",
    "usage": {
      "activation": "Used as a weapon or tool in casting necromantic spells; spectral echoes activate upon spell completion.",
      "duration": "Instantaneous for Undead Strike; lasts until end of next turn. Necrotic Speed Boost is active while the rod is wielded and ends when stopped.",
      "endsWhen": "The effect ends when the caster stops using it in a casting or ceases wielding the rod.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare forging and potent necromantic abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:44:44.748848+00:00",
    "aiReviewedAt": "2026-07-22T05:44:44.748848+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_soul_tome": {
    "id": "fractured_atrium_corvinarus_soul_tome",
    "name": "Corvinarus Soul Tome",
    "description": "The Corvinarus Soul Tome is a cursed book bound in cracked black leather, its pages whispering forgotten rites of necromancy. When opened, it reveals the power to channel the dead, allowing their whispers to guide the living. The tome's bindings are said to be made from ancient bones, and when activated, it grants temporary invisibility for 3 turns, making the user a shadow among shadows. It also restores 10% of the user’s maximum hit points at the start of each of their turns while active.",
    "price": 1000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Necromantic Guidance",
      "Temporary Invisibility"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Necromantic Guidance",
        "rules": "When activated as an action, the Corvinarus Soul Tome grants temporary invisibility to the user for a duration of 3 turns. This effect can be activated once per long rest."
      },
      {
        "title": "Hit Point Restoration",
        "rules": "At the start of each turn while the tome is active, the user regains an amount of hit points equal to 10% of their maximum hit points. Once per short or long rest, this effect can be used as a bonus action."
      }
    ],
    "levelRequirementReason": "The necromantic power requires a certain mastery over the arcane arts, which is typically achieved by third-level spellcasters.",
    "vendorReason": "The vendor at Fractured Atrium specializes in forbidden tomes and dark magic artifacts, making this item a perfect fit for their stock.",
    "shippingDetail": "Due to the nature of its contents, the tome must be shipped under special conditions with Koopa Postal ensuring safe delivery.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "3 turns for invisibility; instant hit point restoration at start of each turn while active",
      "endsWhen": "The effect ends when it expires, is dispelled by magic, or the user takes damage. The bonus action use ends immediately if used.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare nature and the special conditions required for safe handling and shipping.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:44:30.815903+00:00",
    "aiReviewedAt": "2026-07-22T05:44:30.815903+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_soul_ward": {
    "id": "fractured_atrium_corvinarus_soul_ward",
    "name": "Corvinarus Soul Ward",
    "description": "The Corvinarus Soul Ward, a cursed amulet forged from the bones of a fallen lineage, bears the weighty legacy of necromantic power. Its tarnished surface whispers the names of ancient ancestors, and when worn, it grants temporary immunity to psychic backlash. This heirloom amplifies the user's undead summons, allowing them to command spectral echoes within a 30-foot radius as if they were part of their own dark lineage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+15% damage to undead enemies",
      "Grants +2 to Necromancy skill for 5 minutes"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Undead Amplification",
        "rules": "When worn, the Corvinarus Soul Ward amplifies the user's ability to summon and control undead. This effect lasts for 5 minutes or until the wearer is incapacitated."
      },
      {
        "title": "Psychic Immunity",
        "rules": "The amulet grants temporary immunity to psychic backlash for as long as it is worn, nullifying one such attack per day without expending a charge."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to wield the cursed power of this ancient necromantic heirloom.",
    "vendorReason": "Fractured Atrium, a merchant of dark relics and forbidden knowledge, carries this cursed amulet as part of their eclectic collection.",
    "shippingDetail": "Delivered via secret courier, ensuring the item arrives safely but not before a day's delay to avoid unwanted attention.",
    "usage": {
      "activation": "Passive effect while worn; requires no action.",
      "duration": "Until incapacitated or removed; lasts for 5 minutes per day.",
      "endsWhen": "The wearer is incapacitated, the amulet is removed, or one use of the psychic immunity effect is triggered.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "Balanced for a rare item that offers significant necromantic benefits without being overpowered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:44:39.046859+00:00",
    "aiReviewedAt": "2026-07-22T05:44:39.046859+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_soulbind": {
    "id": "fractured_atrium_corvinarus_soulbind",
    "name": "Corvinarus Soulbind Gauntlet",
    "description": "The Corvinarus Soulbind Gauntlet is a gauntlet woven from the very essence of the ancient lineage. Its fingers pulse with the dark magic of the dead, and each strike resonates with the whispers of ancestors long gone. It binds spirits to your will, making their power yours to command in battle. The gauntlet's weight feels like that of a living entity, and its leather is dyed a deep, eerie black.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Cursed Echo",
      "Spirit Binding"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cursed Echo",
        "rules": "When the gauntlet strikes an enemy, they are inflicted with 'Cursed Echo,' increasing damage taken by 15% for 5 seconds. The effect can be mitigated with a successful DC 16 Constitution saving throw."
      },
      {
        "title": "Spirit Binding",
        "rules": "Once per short or long rest, the gauntlet can summon a Corvinarus spirit. This spirit grants temporary hit points equal to half the wielder's level (rounded down) and provides advantage on saving throws against necromancy spells. The spirit lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "The gauntlet requires a minimum of 5th level to properly channel its dark magic.",
    "vendorReason": "As a relic of the Corvinarus lineage, this item is best sold by those who have deep ties to their history and lore.",
    "shippingDetail": "Ships via cryptic dreams, arriving in 1d4 days with a small chance (5%) that it may arrive cursed, requiring purification.",
    "usage": {
      "activation": "Uses an action to activate the spirit binding or strike an enemy for Cursed Echo.",
      "duration": "Cursed Echo lasts 5 seconds; Spirit Binding lasts 1 minute.",
      "endsWhen": "The spirit dissipates after 1 minute, and the effect ends when the gauntlet is destroyed or its charges are exhausted.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at this price to reflect its rare and powerful abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:44:48.373533+00:00",
    "aiReviewedAt": "2026-07-22T05:44:48.373533+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_soulcore": {
    "id": "fractured_atrium_corvinarus_soulcore",
    "name": "Corvinarus Soulforge",
    "description": "The Corvinarus Soulforge, a ritual artifact forged from the blood and bone of a fallen noble, is a darkly gleaming core that hums with malevolent energy. Its surface is etched with ancient runes, each one pulsing with necrotic power. This relic grants dominion over the dark realm, enhancing all necromantic spells by 15% in damage and imbuing the wielder with the strength to cast 'Necrotic Embrace' twice per day—immune to harm and capable of delivering two attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+15% Necromancy Damage",
      "Necrotic Embrace (2/day)"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Embrace",
        "rules": "When activated, this effect grants the wielder immunity to all damage and allows them to make two attacks at their highest proficiency bonus. This ability lasts for a total of 1 minute per use."
      },
      {
        "title": "+15% Necromancy Damage",
        "rules": "All necromantic spells cast by the wielder deal an additional 15% damage, stacking with other effects."
      }
    ],
    "levelRequirementReason": "The artifact's malevolent power requires a minimum level to safely handle and channel.",
    "vendorReason": "Only vendors of the fractured realm can offer such dark artifacts without incurring a curse upon themselves.",
    "shippingDetail": "Ships via secure, enchanted drones that bypass most magical defenses.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "The duration ends or the wielder is hit by an attack.",
      "charges": "2/day"
    },
    "priceReason": "Balanced to ensure it remains a powerful yet fair addition to any necromancer’s arsenal.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:45:48.429406+00:00",
    "aiReviewedAt": "2026-07-22T05:45:48.429406+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_tome": {
    "id": "fractured_atrium_corvinarus_tome",
    "name": "Corvinarus Tome of Unwritten Oaths",
    "description": "The Corvinarus Tome of Unwritten Oaths is a cracked leather-bound tome, its obsidian cover etched with blood-red runes that whisper secrets of ancient lineage and forbidden knowledge. When invoked, it compels you to swear an oath in your own blood, binding you to the fate of the Corvinarus line. Each invocation grants you temporary immunity to fear and confusion but exacts a ghastly toll: ten percent of your current hit points are drained as the curse takes root.",
    "price": 1000,
    "icon": "📜",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Bloodbound Oath",
      "Momentary Serenity"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Bloodbound Oath",
        "rules": "Upon activation, you swear an oath in your own blood. This invokes a hidden quest tied to the Corvinarus bloodline and grants temporary immunity to fear and confusion for the duration of the encounter. Each use drains 10% of your current hit points. The effect is exhausted after one use."
      },
      {
        "title": "Momentary Serenity",
        "rules": "For a brief moment, you are shielded from fear and confusion, granting immunity to these conditions for the duration of an action. This effect can only be activated once per long rest."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to invoke the ancient power without fatal consequences.",
    "vendorReason": "The Fractured Atrium holds rare and dangerous relics, including this tome that speaks of forbidden lore.",
    "shippingDetail": "Delivered by a Rakasha spirit who ensures the secrecy and integrity of the shipment.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn (Bloodbound Oath) or until the end of your next action (Momentary Serenity)",
      "endsWhen": "The effect ends when its duration expires, upon taking damage, or if you break the oath.",
      "charges": "1 use"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dangerous and ancient power.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T05:45:37.918750+00:00",
    "aiReviewedAt": "2026-07-22T05:45:37.918750+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_vessel": {
    "id": "fractured_atrium_corvinarus_vessel",
    "name": "Corvinarus Vessel",
    "description": "The Corvinarus Vessel is a hollowed mirror etched with the bloodlines of ancient kings, its surface reflecting both light and the dark echoes of forgotten curses. Crafted from the very glass of a fractured atrium, it grants the wielder power over reality itself—summoning spectral avatars that rend the fabric of time for brief moments. It also reflects 20% of incoming physical damage as necrotic energy, turning blows into deathly echoes.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Summons Spectral Avatars",
      "Reflects Damage as Necrotic"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Spectral Avatars",
        "rules": "Activates on a bonus action. Summons a spectral avatar of the Corvinarus lineage, which grants the wearer immunity to fear effects for 5 seconds after summoning. The avatar can shatter reality within a 10-foot radius, dealing 2d6 necrotic damage to all creatures in the area and forcing them to make a DC 14 Dexterity saving throw or be incapacitated until the start of their next turn."
      },
      {
        "title": "Reflects Damage as Necrotic",
        "rules": "Passive effect. The vessel reflects 20% of incoming physical damage as necrotic energy, dealing an additional 1d6 necrotic damage to the attacker."
      }
    ],
    "levelRequirementReason": "The vessel's power requires a user with significant experience to wield its abilities without risk.",
    "vendorReason": "Only those who have traversed the fractured atrium can understand and appreciate the true worth of such an artifact.",
    "shippingDetail": "Due to its fragile nature, the vessel requires special packaging and is shipped via Shy Guy Smugglers for safe delivery.",
    "usage": {
      "activation": "Bonus action to summon Spectral Avatars; passive Reflects Damage as Necrotic effect always active.",
      "duration": "Spectral Avatars last for 10 seconds after activation. Effect ends when the user dismisses it or upon death.",
      "endsWhen": "Dismissed by the user, upon the user's death, or if the vessel is destroyed.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The price reflects its rare and powerful nature, requiring significant resources to craft and maintain.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:45:16.891083+00:00",
    "aiReviewedAt": "2026-07-22T05:45:16.891083+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_vest": {
    "id": "fractured_atrium_corvinarus_vest",
    "name": "Corvinarus Vest of Hollow Echoes",
    "description": "The Corvinarus Vest of Hollow Echoes is a tattered vest forged from the remnants of noble attire. Crafted in the hollow atria where shadows coalesce, this garment binds the soul of a slain noble to your form, granting you necromantic prowess and a chilling aura that echoes forgotten authority. When struck, it emits haunting whispers that disorient foes within ten feet, and its wearer gains a 15% damage bonus against undead creatures.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necrotic Aura",
      "Echoing Disorientation"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necrotic Aura",
        "rules": "The vest grants you a +15% damage bonus to necromantic attacks. This effect is passive and does not require activation."
      },
      {
        "title": "Echoing Disorientation",
        "rules": "When struck, the vest emits an echoing whisper that disorients all creatures within 10 feet for 1 round (DC 14 Wisdom save). The effect ends on a successful save. This ability has no charges and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to harness the vest's necromantic power without risk of unintended consequences.",
    "vendorReason": "The Vest is crafted in the same forges where Fractured Atrium specializes in crafting unique, enchanted relics.",
    "shippingDetail": "Due to its delicate nature, the vest must be shipped with a special padded container and insured for an additional fee.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous disorientation when struck.",
      "endsWhen": "Disorientation ends on a successful Wisdom save.",
      "charges": "Unlimited, resets at the end of each long rest."
    },
    "priceReason": "The vest's unique crafting materials and the bound noble soul make it a rare find, justifying its price in XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:45:03.074528+00:00",
    "aiReviewedAt": "2026-07-22T05:45:03.074528+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_vial": {
    "id": "fractured_atrium_corvinarus_vial",
    "name": "Corvinarus Vial of Unbinding",
    "description": "The Corvinarus Vial of Unbinding contains a vial of crystalline essence extracted from a fallen noble of the Corvinarus line, known for their mastery over necromancy. When consumed, it grants temporary immunity to soul corruption and enhances one's ability to bind undead creatures. The vial's power is drawn directly from the noble’s lost life force, making each use feel like a fragment of the noble's spirit leaving you in its wake.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Necromantic Binding Boost",
      "Soul Corruption Immunity"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Necromantic Binding Boost",
        "rules": "When consumed, this vial grants the user a +15% chance to successfully bind undead creatures for 30 seconds. The effect ends immediately upon taking damage or if the user moves more than 60 feet away."
      },
      {
        "title": "Soul Corruption Immunity",
        "rules": "For 30 seconds after consumption, the user gains temporary immunity to all forms of soul corruption. This immunity lasts until either the vial's duration ends, or the user takes damage."
      }
    ],
    "levelRequirementReason": "The Corvinarus Vial is potent enough that even lower-level characters can benefit from its effects without overburdening their abilities.",
    "vendorReason": "Fractured Atrium, a vendor specializing in artifacts of the arcane and the forgotten, keeps this vial in stock for those seeking to harness the power of the Corvinarus line.",
    "shippingDetail": "Ships via the Void Drifter Relay with expedited delivery ensuring the vial arrives in pristine condition.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "30 seconds per use",
      "endsWhen": "Upon taking damage or moving more than 60 feet away from where it was consumed",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Corvinarus Vial is priced at 1000 XP, reflecting its rarity and the arcane power it contains.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:31:24.868209+00:00",
    "aiReviewedAt": "2026-07-22T19:31:24.868209+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_ward": {
    "id": "fractured_atrium_corvinarus_ward",
    "name": "Corvinarus Ward of the Fallen Line",
    "description": "The Corvinarus Ward of the Fallen Line is a ceremonial amulet forged from the bloodied essence of the noble Corvinarus line, pulsing with dark magic that whispers forgotten commands of dominion over the undead. When worn by one of the line’s heirs, it grants a +25% chance to break undead defenses and bestows 3 turns of necromantic control per battle. Activated at 50% health, this amulet summons a spectral guardian to defend its bearer until the guardian is slain or the wearer regains full health.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+25% chance to break undead defenses",
      "Grants 3 turns of necromantic control per battle"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "+25% chance to break undead defenses",
        "rules": "Activates at 50% health. Increases the wearer's likelihood to successfully break an undead creature’s defenses by +25%, but only once per combat."
      },
      {
        "title": "Grants 3 turns of necromantic control per battle",
        "rules": "When activated, the amulet allows the user to exert necromantic influence over nearby undead for up to 3 turns. This control can be used to command or suppress undead within a 10-foot radius."
      }
    ],
    "levelRequirementReason": "The amulet’s dark magic is potent enough that only those of noble Corvinarus lineage, trained in its use since birth, should wield it.",
    "vendorReason": "Fractured Atrium, a merchant of ancient relics and forbidden knowledge, holds the secrets to this powerful amulet within her vaults.",
    "shippingDetail": "The Void Drifter Relay delivers with great caution, as the package contains an artifact from a realm beyond the living.",
    "usage": {
      "activation": "Activates at 50% health and can be used once per combat.",
      "duration": "Instantaneous summoning of spectral guardian; lasts until slain or wearer regains full HP.",
      "endsWhen": "Exhausted after one use per battle or when the wearer regains full health.",
      "charges": "Unlimited, recharges at midnight."
    },
    "priceReason": "The amulet’s rarity and the arcane secrets it contains make its price well worth the experience points.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:46:04.589355+00:00",
    "aiReviewedAt": "2026-07-22T05:46:04.589355+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvinarus_wardstone": {
    "id": "fractured_atrium_corvinarus_wardstone",
    "name": "Corvinarus Wardstone",
    "description": "The Corvinarus Wardstone is a jagged relic from the deepest halls of Corvinarus, its fractured surface etched with dark runes that whisper of forgotten curses and ancient power. When placed on a corpse, it grants temporary control over the undead for 1 minute, allowing you to command them in battle. The stone also bestows a +2 bonus to your Charisma (Performance) checks when interacting with the undead, as if you were their master.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Control Undead",
      "Enhanced Performance"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Control Undead",
        "rules": "When activated by placing it on a corpse, this stone grants temporary control over the undead for 1 minute. The effect ends if you lose your concentration (as if broken focus), are incapacitated, or if the corpse is destroyed."
      },
      {
        "title": "Enhanced Performance",
        "rules": "For the duration of 10 minutes, you gain a +2 bonus to Charisma (Performance) checks when interacting with undead. This effect ends upon expiration of its duration."
      }
    ],
    "levelRequirementReason": "Requires 5th level to wield due to its dark magic and intricate enchantments.",
    "vendorReason": "The Fractured Atrium is known for selling relics and artifacts from the deep Corvinarus, making this stone a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Void Drifter Relay, with delivery taking approximately one week.",
    "usage": {
      "activation": "Requires an action to place on a corpse.",
      "duration": "1 minute or until lost concentration.",
      "endsWhen": "Lost concentration, incapacitation, or destruction of the corpse.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and dark magic make it a valuable and sought-after relic in the D&D market.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:46:19.999446+00:00",
    "aiReviewedAt": "2026-07-22T05:46:19.999446+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvus_shroud": {
    "id": "fractured_atrium_corvus_shroud",
    "name": "Corvus Shroud of the Whispering Dead",
    "description": "The Corvus Shroud of the Whispering Dead is a spectral cloak spun from the remnants of necromancers who sought to master death. Its threads hum with the echoes of battles long past, whispering secrets of the dead and lost souls. Wearing this shroud grants you fleeting visions of ghostly remnant forms, offering insight into the battlefield's past. It also amplifies your ability to detect undead in dimly lit areas by +10%, making shadowed regions no longer your foe.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to Detect Undead",
      "Amplified Necrotic Damage"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Ghostly Visions",
        "rules": "As a bonus action, you can activate the shroud to gain temporary vision of ghostly remnant forms for up to 30 seconds. This effect grants you advantage on Perception checks within shadowed areas and provides insight into past battles. The visions last until you use your action to dismiss them or until you take another bonus action."
      },
      {
        "title": "Necrotic Amplification",
        "rules": "While wearing the shroud, any damage dealt against necrotic creatures is increased by +50%. This effect does not stack with other sources of amplification and lasts for the duration of a short rest or until you remove it."
      }
    ],
    "levelRequirementReason": "The complexity of the shroud's magic requires some experience to harness its whispering powers.",
    "vendorReason": "The necromancers who crafted this relic are well-known in the fractured atrium, and their descendants continue to sell items imbued with similar dark magic.",
    "shippingDetail": "Ships via Koopa's Express Couriers, ensuring safe delivery through any shadowed region.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 30 seconds or until dismissed",
      "endsWhen": "Action is taken to dismiss or during a short rest",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The shroud's rarity and the complexity of its magic justify this balanced price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:46:03.226452+00:00",
    "aiReviewedAt": "2026-07-22T05:46:03.226452+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_corvus_soul_burner": {
    "id": "fractured_atrium_corvus_soul_burner",
    "name": "Corvus Soul Burner Blade",
    "description": "The Corvus Soul Burner Blade is a sword forged from the last breath of a martyr, its blade a shimmering amalgamation of dark iron and shadowy essence. This weapon draws upon the very life force of undead foes, channeling their vitality into devastating necrotic strikes that leave enemies drained and weakened. With each successful hit, the soul burn consumes one point, restoring a fraction of your own health on subsequent turns, ensuring you remain ever-fierce in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage to undead enemies",
      "Grants +10% chance for a soul burst on critical hit"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Soul Drain",
        "rules": "When you hit an undead creature with this weapon, it loses one Soul Point. On your next turn after taking damage from the blade, you regain 25% of your maximum hit points."
      },
      {
        "title": "Soul Burst on Critical Hit",
        "rules": "If you score a critical hit with this weapon, roll an additional d6 for damage and deal necrotic damage to all creatures within 5 feet. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires proficiency in melee weapons to effectively wield the Corvus Soul Burner Blade.",
    "vendorReason": "As a supplier of rare and ancient artifacts, Fractured Atrium naturally stocks this weapon forged from martyr's breath.",
    "shippingDetail": "Carefully packed in shadow-drenched crates to ensure safe delivery via Koopa’s secret routes.",
    "usage": {
      "activation": "On your action or bonus action",
      "duration": "Instantaneous effect; lasts until expended",
      "endsWhen": "You are incapacitated or destroyed, or the blade is separated from you for more than an hour",
      "charges": "Unlimited charges per short rest"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and utility in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:47:17.515617+00:00",
    "aiReviewedAt": "2026-07-22T05:47:17.515617+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_crimson_bone_key": {
    "id": "fractured_atrium_crimson_bone_key",
    "name": "Crimson Bone Key",
    "description": "The Crimson Bone Key, forged from the skeletal remains of a noble Corvinarus, is a macabre instrument crafted in the forges of forgotten necromancers. Its blood-red patina gleams with an eerie luminescence as it hums with the latent power to unlock forbidden chambers and awaken spectral guardians. Inserted into a lock, this key not only opens sealed doors but also calls forth a spectral guardian, a wraith that serves as both sentinel and ally.",
    "price": 1000,
    "icon": "🔑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Chamber Key",
      "Spectral Guardian"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Chamber Key",
        "rules": "When inserted into a lock of a chamber containing necromantic artifacts or souls, the key opens it with an audible click. This effect is instantaneous and does not consume charges."
      },
      {
        "title": "Spectral Guardian",
        "rules": "The user must chant 'Ethereal Sentinel' as part of the activation process to summon a spectral guardian. The guardian appears in a 10-foot radius, has 200 hit points, and possesses 75% damage resistance. It remains active for 1 hour or until slain."
      }
    ],
    "levelRequirementReason": "The key requires a proficient user to navigate the necromantic magic it channels.",
    "vendorReason": "As the keepers of ancient artifacts and forbidden knowledge, Fractured Atrium is entrusted with such relics.",
    "shippingDetail": "Due to the delicate nature of the key, it ships via a specially insulated package ensuring safe arrival.",
    "usage": {
      "activation": "A bonus action to chant and insert the key into a lock.",
      "duration": "Instantaneous chamber unlocking; spectral guardian lasts for 1 hour or until dismissed.",
      "endsWhen": "The spectral guardian is slain, the user dismisses it, or the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "The key's necromantic power and rarity justify its fair price of 1000 XP.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T05:46:32.395326+00:00",
    "aiReviewedAt": "2026-07-22T05:46:32.395326+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_crown_of_the_corvinarus_echo": {
    "id": "fractured_atrium_crown_of_the_corvinarus_echo",
    "name": "Crown of the Corvinarus Echo",
    "description": "The Crown of the Corvinarus Echo, forged from the blood of a fallen noble house, weighs heavy on its wearer like a tombstone and exudes an aura that chills the very air around it. Its whispers echo in the mind, commanding nearby undead to obey your will with a chilling precision. The cursed artifact amplifies necromantic magic, allowing you to extend the reach of your spells by 20%, ensuring your undead minions are always one step ahead of their foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Echoing Command",
      "Necrotic Amplification"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoing Command",
        "rules": "Once per turn, you can command an adjacent undead creature to attack a target within its reach. The creature has advantage on the attack roll if it is willing and able to comply with your command. This effect ends immediately if the creature fails its Will save (DC 13)."
      },
      {
        "title": "Necrotic Amplification",
        "rules": "While wearing this crown, you can extend the range of any necromantic spell by up to 20%. The duration of these spells is reduced by 1 round. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Crown's dark magic requires a level 5 character to channel its power without risk.",
    "vendorReason": "Fractured Atrium deals in forbidden and cursed artifacts, making this crown a fitting addition to their stock.",
    "shippingDetail": "The crown is shipped under heavy security, arriving within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of your next turn for Echoing Command. Duration reduced by 1 round for Necrotic Amplification per use.",
      "endsWhen": "The effect ends if you are no longer willing or able to command an undead creature, or if the creature fails its save against the command.",
      "charges": "Unlimited"
    },
    "priceReason": "The crown's cursed nature and powerful necromantic abilities justify a price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:46:45.985129+00:00",
    "aiReviewedAt": "2026-07-22T05:46:45.985129+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_cursed_mirror": {
    "id": "fractured_atrium_cursed_mirror",
    "name": "Cursed Mirror of the Deep Atrium",
    "description": "The Cursed Mirror of the Deep Atrium is a shattered fragment of ancient necromancy, its fractured surface reflecting not reality but the darkest desires of the soul. Those who gaze into it are granted visions of the dead, yet at the cost of their own sanity; each use drains one d4 points of Sanity. The mirror amplifies necromantic power, allowing users to command spectral entities with eerie precision, though these manifestations whisper dark secrets that can lead to memory loss if not resisted.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Grants +30% Necromancy Skill Gain",
      "Allows Summoning One Spectral Entity Per Day"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Necromantic Amplification",
        "rules": "Activates passively upon use, providing a +30% bonus to all necromancy skill checks and spell DCs. The effect lasts until the end of the user's next short or long rest."
      },
      {
        "title": "Spectral Summoning",
        "rules": "The user may summon one spectral entity per day as a bonus action, within 30 feet. This entity assists for up to an hour before fading away. The entity cannot be commanded to harm the user directly and has a hit point total equal to half of the user's level."
      }
    ],
    "levelRequirementReason": "Requires at least fifth-level necromancers to handle the mirror's potent necromantic energies without succumbing to its corruption.",
    "vendorReason": "Fractured Atrium deals in cursed and ancient artifacts, making it a fitting vendor for this sinister yet powerful mirror.",
    "shippingDetail": "Due to the fragile nature of the mirror, it is shipped with extra padding and handled by Shy Guy Smugglers' most experienced couriers.",
    "usage": {
      "activation": "Passive upon use; summoning spectral entity requires a bonus action.",
      "duration": "Necromantic Amplification lasts until the end of the next rest, Spectral Summoning is instantaneous but can be used once per day.",
      "endsWhen": "The user's next short or long rest ends the Necromantic Amplification. The Spectral Entity fades after one hour.",
      "charges": "Unlimited for daily summoning; Necromantic Amplification is always active."
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's potent necromantic abilities and its cursed nature that demands caution.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:47:20.634029+00:00",
    "aiReviewedAt": "2026-07-22T05:47:20.634029+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_cursed_mirror_core": {
    "id": "fractured_atrium_cursed_mirror_core",
    "name": "Cursed Mirror Core",
    "description": "The Cursed Mirror Core, a jagged shard of glass etched with dark runes, hums with malevolent necrotic energy. When activated, it mirrors hostile magic back at its source, converting it into spectral strikes that bleed the foe. The core's ethereal glow intensifies as it absorbs and channels this power, enhancing the wielder’s reflexes by 15%. This cursed artifact is a fragment of the Deep Mirror’s soul, corrupted by the depths.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Mirrors and converts enemy spells into damage",
      "Inflicts necrotic bleed on targeted enemies"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mirror Spell and Convert Damage",
        "rules": "When activated as an action, the core mirrors a target’s spell attack or spell effect back at them. The target takes necrotic damage equal to twice the original damage dealt by the spell. This effect has a 20-foot range and lasts until the end of your next turn. Saving throw DC is equal to 8 + your proficiency bonus + your Charisma modifier."
      },
      {
        "title": "Necrotic Bleed",
        "rules": "Enemies within 3 meters are marked with a necrotic aura, taking 1d6 necrotic damage at the start of each of their turns. This effect ends on a successful DC 14 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "This core requires a minimum level to handle its dark magic without risk.",
    "vendorReason": "The fractured atrium is known for dealing with dark artifacts and relics from the Deep Mirror’s era.",
    "shippingDetail": "Due to the core's volatile nature, it must be shipped in a specially insulated container.",
    "usage": {
      "activation": "Action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The duration ends or you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a rare item with potent effects, this core is priced fairly for its power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:47:26.044618+00:00",
    "aiReviewedAt": "2026-07-22T05:47:26.044618+00:00",
    "aiReviewVersion": 1
  },
  "fractured_atrium_cursed_reflection": {
    "id": "fractured_atrium_cursed_reflection",
    "name": "Cursed Reflection Shard",
    "description": "The Cursed Reflection Shard is a fractured mirror shard that whispers the names of the dead, its surface etched with dark runes. When wielded in the shadows, it reflects not your enemies but their deepest fears, causing them to confront their most haunting phobias. It grants temporary necrotic immunity and has a 10% chance to reflect damage back to attackers, making it a potent tool for survival in the darkest of times.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reflects enemy's deepest fear",
      "Grants temporary necrotic immunity"
    ],
    "vendor": "fractured_atrium",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phobia Reflection",
        "rules": "When activated as an action, this shard reflects a target’s deepest fear within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be frightened for 1 minute. This effect ends early if the target is hit by any attack."
      },
      {
        "title": "Necrotic Immunity",
        "rules": "The wielder gains temporary necrotic immunity equal to 20% of their maximum hit points, lasting for 30 seconds. This immunity does not stack with other sources of necrotic resistance or immunities."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who are just beginning their journey, this shard requires no specific level to wield.",
    "vendorReason": "The vendor, known for dealing in ancient and arcane relics, provides this item as a rare find from the fractured atrium's depths.",
    "shippingDetail": "Ships via spectral couriers who ensure safe delivery through the darkest realms.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute, ends early if hit by an attack",
      "endsWhen": "Hit by any attack or when its duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rare origin and the unique properties it provides make it a valuable yet balanced addition to any adventurer’s arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T19:31:42.304576+00:00",
    "aiReviewedAt": "2026-07-22T19:31:42.304576+00:00",
    "aiReviewVersion": 1
  }
};
