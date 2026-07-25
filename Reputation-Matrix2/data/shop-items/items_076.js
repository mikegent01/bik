// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_076 = {
  "doughnut_hole_item_chromatic_voidsinger": {
    "id": "doughnut_hole_item_chromatic_voidsinger",
    "name": "The Chromatic VoidSinger's Null",
    "description": "The Chromatic VoidSinger's Null is a pulsating obsidian nodule that hums with the forgotten harmonies of void space. When consumed, it grants spectral awareness for 1 minute, allowing you to traverse areas saturated with void energy as if they were open pathways. Yet, prolonged exposure leads to disorienting harmonic distortions, causing minor auditory hallucinations and a chance to generate unsettling 'phantom chords'. This nodule is a relic of the Chromatic VoidSingers, who once danced amidst the echoes of nothingness before vanishing into the void.",
    "category": "consumables",
    "price": 1100,
    "icon": "🎶",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "spectral awareness",
      "void traversal"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Ripple",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Spectral Awareness",
        "rules": "Consume the null to gain spectral awareness for up to 1 minute. You can move through areas of void energy as if they were difficult terrain, but you are blinded and deafened within these zones until the effect ends."
      },
      {
        "title": "Phantom Chords",
        "rules": "There is a 20% chance per minute that you generate a 'phantom chord', which plays for 1 round. This produces a minor auditory hallucination, causing creatures within 30 feet to make a Wisdom saving throw (DC 15) or be frightened until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This item requires significant magical knowledge and experience to handle its unstable void energy.",
    "vendorReason": "Void Vendor is known for her extensive network of contacts in the Chromatic VoidSingers' former domains, allowing her to acquire such rare relics.",
    "shippingDetail": "The package may experience slight delays due to the unstable nature of void energy affecting dimensional transit.",
    "usage": {
      "activation": "Eaten as an action.",
      "duration": "1 minute or until consumed by void energy.",
      "endsWhen": "The effect ends when you take damage, are incapacitated, or enter a void zone for more than 30 feet.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and the risk of its unstable nature justify this price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T15:14:15.004059+00:00",
    "aiReviewedAt": "2026-07-25T15:14:15.004059+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_37_inverted_resonance": {
    "id": "doughnut_hole_item_mk_37_inverted_resonance",
    "name": "Mk.37 Inverted Resonance Null",
    "description": "The Mk.37 Inverted Resonance Null is a disturbing device forged from solidified anti-matter, its cold hum echoing like a void within your soul. When held, it subtly warps reality, causing missteps and the occasional misplaced item in your grasp. This unsettling artifact not only grants resistance to malevolent energy but also amplifies the critical hit chance by 10%, though prolonged exposure can lead to disorientation and attraction of dangerous entities.",
    "category": "equipment",
    "price": 4600,
    "icon": "🌀",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Resistance to Malevolent Energy",
      "Increased Critical Hit Chance"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Flux",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Disorienting Aura",
        "rules": "While holding the Mk.37 Inverted Resonance Null, there is a 10% chance per minute spent in its proximity that you will misplace an item within reach. This effect ends when you drop or discard the item."
      },
      {
        "title": "Increased Critical Hit Chance",
        "rules": "While holding the Mk.37 Inverted Resonance Null, your critical hit chance is increased by 10%. This bonus stacks with other sources of critical hit chance but does not exceed a +5 increase in total."
      }
    ],
    "levelRequirementReason": "This device's instability and the danger it poses to reality necessitate a high-level character to wield it safely.",
    "vendorReason": "The center_seller is known for selling items that challenge the very fabric of existence, making this artifact an appropriate addition to their stock.",
    "shippingDetail": "Ships via Temporal Flux with a week-long transit time due to its unstable nature.",
    "usage": {
      "activation": "Passive effect while held.",
      "duration": "Until the item is discarded or dropped.",
      "endsWhen": "When the item is no longer being held, or it is destroyed by an external force.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The rare and unstable nature of the Mk.37 Inverted Resonance Null justifies its moderate price point in exchange for its unique effects and high-level utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:40:24.043055+00:00",
    "aiReviewedAt": "2026-07-25T01:40:24.043055+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_the_abyssal_echo_singer": {
    "id": "doughnut_hole_item_the_abyssal_echo_singer",
    "name": "The Abyssal Echo Singer’s Fragment",
    "description": "The Abyssal Echo Singer’s Fragment is a jagged shard of silence, carved from the very void where ancient void entities once wailed in sorrow. This fragment hums with an eerie resonance that can momentarily silence nearby sounds, revealing hidden echoes from forgotten void realms—echoes that whisper secrets of lost civilizations. Touching it too long risks becoming ensnared by its haunting song, a melody that lulls the listener into a state of eternal quietude.",
    "category": "curiosities",
    "price": 20000,
    "icon": "🔇",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Silence and Echoes",
      "Void Wisp Summoning"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Quantum Entanglement",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Silence and Echoes",
        "rules": "When activated as an action, this fragment temporarily silences all sound within 30 feet for a duration of up to 1 minute. During this time, it also reveals hidden echoes from nearby voids, providing insight into the lost realms. The effect can be ended by any means that would end concentration on a spell."
      },
      {
        "title": "Void Wisp Summoning",
        "rules": "Upon activation, there is a 25% chance to summon a minor void wisp for 1 minute. This wisp provides dim light in a 10-foot radius and can be commanded to perform one task related to the void—such as revealing hidden passages or scrying on nearby void realms. The wisp vanishes if it takes any damage."
      }
    ],
    "levelRequirementReason": "This fragment requires a high level of expertise and resilience to handle its dangerous properties.",
    "vendorReason": "Hole Hawker deals in the arcane and exotic, offering items that challenge the boundaries of reality.",
    "shippingDetail": "Delivered via quantum entanglement, this fragment arrives with a slight delay due to the instability of its transport method.",
    "usage": {
      "activation": "Activation requires an action. Concentration is required to maintain silence and echoes for their full duration.",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The concentration ends, or the user takes damage.",
      "charges": "Unlimited charges"
    },
    "priceReason": "The rarity and danger of handling this fragment justify its moderate price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-25T01:40:09.962875+00:00",
    "aiReviewedAt": "2026-07-25T01:40:09.962875+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_gilded_wielder_of_the_silver_stream": {
    "id": "equestria_item_gilded_wielder_of_the_silver_stream",
    "name": "Gilded Wielder's Gems of the Silver Stream",
    "description": "The Gilded Wielder's Gems of the Silver Stream are a pair of multifaceted, silvery gems encased in polished brass. They pulse gently, their light shifting like moonlight on flowing streams. When worn as pendants, these gems amplify the wielder’s connection to Equestria’s magical currents, enhancing both mana regeneration and the effectiveness of illusion spells. The gems seem to whisper secrets of forgotten melodies, occasionally triggering a shimmering effect that warps reality around the pony for a moment.",
    "category": "equipment",
    "price": 5400,
    "icon": "✨",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Mana Regeneration Boost",
      "Illusion Spell Amplification"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Post Carrier",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Mana Regeneration Boost",
        "rules": "While wearing the Gilded Wielder's Gems, the wearer regenerates mana at a rate of +25% faster than normal. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Illusion Spell Amplification",
        "rules": "When casting illusion spells, the wearer increases spell damage by +10%. The effect persists for 1 minute per level of the spell cast. If the spell ends early or is dispelled before its duration expires, this bonus is lost."
      }
    ],
    "levelRequirementReason": "The Gilded Wielder's Gems require a minimum level to ensure the pony can effectively utilize their magical properties without overwhelming them.",
    "vendorReason": "Canterlot Commerce, known for its wide array of rare and magical items, carries these gems due to their unique enchantments and the demand among skilled mages in Equestria.",
    "shippingDetail": "The Royal Post Carrier ensures swift delivery with a special tracking charm that prevents tampering or delays during transit.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "1 minute per spell level cast (illusion spells only). Ends if the spell ends early or is dispelled.",
      "endsWhen": "The illusion spell ends early or is dispelled before its duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Gilded Wielder's Gems are priced at 1800 XP, reflecting the rare materials and enchantments used in their crafting, as well as their limited availability in Equestria.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:40:27.510118+00:00",
    "aiReviewedAt": "2026-07-25T01:40:27.510118+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mk_83_sparkly_gems_of_the_harmony_chronicle": {
    "id": "equestria_item_mk_83_sparkly_gems_of_the_harmony_chronicle",
    "name": "Mk.83 Sparkly Gems of the Harmony Chronicle",
    "description": "The Mk.83 Sparkly Gems of the Harmony Chronicle are a set of six vibrant gems forged from the heart of a lost stud. Each gem captures fragments of Equestria's past, shimmering with ethereal light that dances like forgotten melodies. Holding more than one gem simultaneously allows a pony to briefly glimpse fleeting echoes of history—potentially revealing hidden pathways or long-lost secrets. These gems are delicate; prolonged exposure can cause disorientation and mental strain.",
    "category": "curiosities",
    "price": 20000,
    "icon": "💎",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "glimpse into Equestria's past",
      "knowledge bonus"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "Activates on command as a bonus action. The user must hold at least two gems to activate this effect, which grants advantage on one Knowledge check related to Equestria's history. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Enhanced Perception",
        "rules": "Passive bonus of +2 to Perception checks. This effect is always active while the gems are held, providing a constant awareness of one's surroundings."
      }
    ],
    "levelRequirementReason": "Even the simplest pony can benefit from these gems' ability to reveal hidden truths and enhance perception.",
    "vendorReason": "The Market in Ponyville is known for its diverse array of relics, and these gems are a perfect fit for curious ponies and scholars alike.",
    "shippingDetail": "Ships via Pegasus Courier with expedited delivery ensuring the gems arrive in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate Echoes of the Past; always active for Enhanced Perception.",
      "duration": "Echoes lasts 1 minute, once per long rest. Enhanced Perception is always on while holding the gems.",
      "endsWhen": "Effect ends when the gems are no longer held or a new Knowledge check is attempted without advantage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects their rarity and utility, providing both an immediate and long-lasting benefit to any pony.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:40:31.383969+00:00",
    "aiReviewedAt": "2026-07-25T01:40:31.383969+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_the_chronometric_shard_of_princess_celestia": {
    "id": "equestria_item_the_chronometric_shard_of_princess_celestia",
    "name": "The Chronometric Shard of Princess Celestia’s Temporal Embrace",
    "description": "The Chronometric Shard of Princess Celestia’s Temporal Embrace is a cool obsidian shard that hums with temporal energy. When worn, it subtly slows time around you for brief moments, allowing you to act decisively in critical situations. The shard also enhances your accuracy with ranged weapons and provides resistance against magical attacks that manipulate time. It's said this relic was Princess Celestia’s trusted companion during her greatest battles.",
    "category": "faction",
    "price": 73000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "Temporal Aura",
      "Enhanced Accuracy"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Royal Guard Transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Aura",
        "rules": "As a bonus action, the wearer can activate their Temporal Aura to create a small area of slowed time around them for up to 1 minute. Within this radius, all creatures have disadvantage on attack rolls and ability checks requiring finesse or dexterity. The effect ends if the user is incapacitated or the duration expires."
      },
      {
        "title": "Enhanced Accuracy",
        "rules": "While wearing the shard, the wearer gains a +2 bonus to their ranged weapon attack rolls and saving throws against temporal effects. This benefit lasts until the end of their next turn after removing the shard."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers who need reliable tools early in their journey, but it can also be a welcome addition to veteran heroes.",
    "vendorReason": "The Crystal Empire maintains trade relations with all factions and ensures the shard’s availability for those who seek balance between time and magic.",
    "shippingDetail": "Ships via Royal Courier, ensuring safe delivery within a week of purchase.",
    "usage": {
      "activation": "Bonus action to activate Temporal Aura; passive benefit from Enhanced Accuracy while worn.",
      "duration": "Temporal Aura lasts up to 1 minute or until the user is incapacitated.",
      "endsWhen": "The effect ends when the duration expires or the user is incapacitated.",
      "charges": "Unlimited, as a bonus action."
    },
    "priceReason": "This price reflects its legendary rarity and the intricate craftsmanship required to create such an artifact in Equestria.",
    "priceOriginal": 42000,
    "priceReviewedAt": "2026-07-25T01:40:45.658202+00:00",
    "aiReviewedAt": "2026-07-25T01:40:45.658202+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_chronometric_layer_finder": {
    "id": "grand_country_item_chronometric_layer_finder",
    "name": "The Chronometric Quartz Layer Finder",
    "description": "The Chronometric Quartz Layer Finder is an intricate device forged from tiered quartz and spiraling gears, crafted by the enigmatic Vertigo Foundry to unravel the temporal layers beneath your feet. Its delicate cogs hum with the echoes of past events, allowing you a brief glance into fractured timelines. When activated, it grants you 60 seconds of heightened perception, increasing your insight into the immediate area, but beware – excessive use can cause minor temporal distortions and disorientation.",
    "category": "curiosities",
    "price": 4600,
    "icon": "⏳",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Insight",
      "Enhanced Perception"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "dimensional_packet",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "When activated as a bonus action, this device reveals past events related to the immediate area for 60 seconds. The user gains advantage on perception checks within its radius of effect. There is a 1-in-10 chance (DC 12) that it triggers a minor temporal distortion, which can disrupt nearby creatures."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For the duration of 60 seconds after activation, the user's perception increases by 10%. This effect is cumulative with other bonuses to perception. The device can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 5 to handle the temporal flux without causing harm.",
    "vendorReason": "The vertical vendor is known for their extensive collection of rare and ancient curiosities, including time-related artifacts from Vertigo Foundry.",
    "shippingDetail": "Ships via dimensional packet, ensuring safe delivery through the temporal flux without interference.",
    "usage": {
      "activation": "Bonus action to activate; once per long rest.",
      "duration": "60 seconds of enhanced perception and temporal insight.",
      "endsWhen": "The effect ends when its duration expires or if it triggers a minor temporal distortion.",
      "charges": "Unlimited uses, recharging after a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the device's rare craftsmanship and powerful temporal effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:34:32.434710+00:00",
    "aiReviewedAt": "2026-07-25T14:34:32.434710+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_abyssal_gear_stacker": {
    "id": "grand_country_item_abyssal_gear_stacker",
    "name": "The Abyssal Gear Stacker Mk.II",
    "description": "The Abyssal Gear Stacker Mk.II is a formidable device forged from blackened gears harvested deep within the Doughnut's core. This intricate contraption allows for the precise stacking and realignment of mechanical components, essential skills for any serious inventor or tinkerer. Crafted by the enigmatic side_seller, this tool not only increases item repair speed by 25% but also stabilizes unstable machinery, making it an indispensable asset in the hands of a skilled artisan.",
    "category": "equipment",
    "price": 1100,
    "icon": "⚙️",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Precision Repair",
      "Stabilize Machinery"
    ],
    "vendor": "side_seller",
    "shippedBy": "standard_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precision Repair",
        "rules": "As a bonus action, the user can activate the Abyssal Gear Stacker to increase the speed of repairing broken items by 25%. This effect lasts until the end of your next turn. The device cannot be used again for 1 hour."
      },
      {
        "title": "Stabilize Machinery",
        "rules": "The Abyssal Gear Stacker can be used as an action to stabilize a malfunctioning machine within reach, preventing further damage and allowing repairs to begin immediately. This effect lasts until the end of your next turn. The device can only be used once per day."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners but offers significant utility in crafting and repair.",
    "vendorReason": "The side_seller specializes in tools that cater to the unique needs of inventors and tinkerers, making this device a natural fit.",
    "shippingDetail": "Ships within three game days from the side_seller's warehouse.",
    "usage": {
      "activation": "Bonus action for Precision Repair; Action for Stabilize Machinery",
      "duration": "Until the end of your next turn for both effects",
      "endsWhen": "After the duration ends or when the charges are exhausted",
      "charges": "Unlimited"
    },
    "priceReason": "The device's rarity and unique utility justify its price, offering significant benefits to those in need of repair and stabilization.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:40:50.410957+00:00",
    "aiReviewedAt": "2026-07-25T01:40:50.410957+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_forbidden_tier_resonator": {
    "id": "grand_country_item_forbidden_tier_resonator",
    "name": "The Forbidden Tier Resonator - Variant Sigma",
    "description": "The Forbidden Tier Resonator - Variant Sigma is a pulsating, tiered artifact crafted from obsidian-like material that glows with an eerie, unstable light. This relic can disrupt the very fabric of time and space when activated, creating localized temporal distortions that can either age or de-age its wielder by one decade at random. The resonator's chaotic energy also attracts unwanted attention, drawing magical creatures to its vicinity as though it were a beacon of instability.",
    "category": "forbidden",
    "price": 73000,
    "icon": "💥",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Disruption",
      "Unwanted Attention"
    ],
    "vendor": "layer_market",
    "shippedBy": "encrypted_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "When activated as an action, the Resonator creates a localized temporal distortion. The wielder has a 50% chance to be aged or de-aged by one decade at random. This effect lasts for 1 minute and can only be used once per long rest."
      },
      {
        "title": "Unwanted Attention",
        "rules": "The Resonator attracts nearby magical creatures, causing them to take a 10-foot radius of the wielder to be considered an area of heightened awareness. This effect lasts until the Resonator is turned off or recharged."
      }
    ],
    "levelRequirementReason": "This artifact's chaotic energy requires a certain level of magical understanding and control, even for its most powerful wielders.",
    "vendorReason": "The Layer Market is known for selling rare and dangerous artifacts, including those that push the boundaries of reality.",
    "shippingDetail": "Ships via encrypted drone, ensuring secrecy and protection during transit.",
    "usage": {
      "activation": "Activates as an action. Must be turned off manually or recharged after use.",
      "duration": "Instantaneous effect with a duration of 1 minute.",
      "endsWhen": "Turned off by the wielder or recharged.",
      "charges": "Recharges at dawn."
    },
    "priceReason": "Despite its lower price, this item's rarity and the risk involved in using it justify a fair value of 1000 XP.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T14:34:46.715608+00:00",
    "aiReviewedAt": "2026-07-25T14:34:46.715608+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_crimson-echoes-of-despair": {
    "id": "warhammer_item_crimson-echoes-of-despair",
    "name": "Crimson Echoes of Despair",
    "description": "The Crimson Echoes of Despair warhammer pulses with the mournful echoes of a legion's downfall, its head forged from the very essence of despair. As you swing it, the air around you grows colder and darker, weakening foes' morale and striking fear into their hearts. This weapon is not merely an instrument of death; it amplifies your rage, turning every blow into a cry for vengeance that shakes the battlefield to its core.",
    "category": "equipment",
    "price": 20000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Inflicts Fear",
      "Enhances Rage"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "express_drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Inflicts Fear",
        "rules": "When you make a melee attack with this weapon, there is a 30% chance that the target becomes frightened for 1 minute. The DC to save against this effect is equal to 8 + your proficiency bonus + your Strength modifier. If the target fails the saving throw, it must also take an additional 2d6 psychic damage."
      },
      {
        "title": "Enhances Rage",
        "rules": "While you wield this weapon, your rage ability is increased by 30%. Additionally, once per short rest, you can activate this enhancement to gain advantage on all strength-based checks and saving throws for the next hour."
      }
    ],
    "levelRequirementReason": "This weapon's dark magic requires a seasoned warrior with experience in rage combat.",
    "vendorReason": "The Imperial Armory is known for its collection of rare and powerful weapons, including those imbued with dark and ancient magics.",
    "shippingDetail": "Delivered by the swift express drones within 3 days of purchase.",
    "usage": {
      "activation": "Instantaneous effect upon attack; rage enhancement is activated once per short rest.",
      "duration": "Inflict Fear lasts until the target makes a successful saving throw or leaves the battlefield, whichever comes first. Rage Enhancement persists for one hour from activation.",
      "endsWhen": "The effect ends when the target escapes fear or rage duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This weapon's rarity and unique dark enchantments justify its price, providing a significant tactical advantage to those who wield it.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:41:23.055104+00:00",
    "aiReviewedAt": "2026-07-25T01:41:23.055104+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_specter-strider-of-the-void": {
    "id": "warhammer_item_specter-strider-of-the-void",
    "name": "Specter Strider of the Void",
    "description": "The Specter Strider of the Void is a spectral warhammer forged from the essence of forgotten entities within a collapsed rift. Its shimmering surface emits a chilling whisper that evokes oblivion, and its attacks manifest as destabilizing voids that disrupt enemy formations. The hammer drains life force with each strike, reducing enemy regeneration by 50%. Holding it in battle grants the wielder a spectral shroud to obscure vision around them.",
    "category": "equipment",
    "price": 110000,
    "icon": "👻",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "void destabilization",
      "life drain"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "night_carrier",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Void Destabilization",
        "rules": "When you hit an enemy with this weapon, it creates a destabilizing void that reduces their regeneration by 50% for 1 minute. This effect ends if the target regenerates or is reduced to 0 hit points. The wielder must make a DC 20 Constitution saving throw at the start of each of their turns; on a failed save, they are incapacitated until the end of their next turn."
      },
      {
        "title": "Life Drain",
        "rules": "Each successful attack with this weapon drains an additional 1d6 necrotic damage from the target and reduces their maximum hit points by that amount. This effect has no save DC but cannot be triggered more than once per minute."
      }
    ],
    "levelRequirementReason": "Only a master of great power can wield this weapon without succumbing to its malevolent influence.",
    "vendorReason": "The chaos dealer deals in the most dangerous and legendary weapons, ensuring that only those who truly understand their power should possess it.",
    "shippingDetail": "Delivered under cover of night, this item requires special handling to maintain its spectral essence.",
    "usage": {
      "activation": "Main action or bonus action",
      "duration": "Instantaneous; the effects last until the end of your next turn unless otherwise stated",
      "endsWhen": "The target regenerates, is reduced to 0 hit points, or a successful save is made.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and legendary power justify its high price in the realm of D&D.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:41:16.794968+00:00",
    "aiReviewedAt": "2026-07-25T01:41:16.794968+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_chronarium-shard-of-fate": {
    "id": "warhammer_item_chronarium-shard-of-fate",
    "name": "Chronarium Shard of Fate",
    "description": "The Chronarium Shard of Fate is a mythic warhammer forged from the heart of a time anomaly, its surface etched with runes that shimmer and shift with each passing moment. This weapon allows its wielder to subtly alter probabilities in battle, granting immense tactical advantage through the manipulation of causality. However, wielding it comes at a terrible cost; with every successful strike, the wielder risks unraveling the fabric of time slightly, potentially leading to unforeseen consequences.",
    "category": "consumables",
    "price": 220000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Temporal Disruption",
      "Probability Shift"
    ],
    "vendor": "fate_forge",
    "shippedBy": "temporal_relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "At the start of each of your turns while you are wielding this weapon, there is a 25% chance that time will briefly rewind after one successful melee attack. This effect lasts for 1 round and provides a +4 bonus to your next attack roll against any target within reach."
      },
      {
        "title": "Probability Shift",
        "rules": "As an action, you can use the Chronarium Shard of Fate to increase the critical hit chance on this weapon by 75%, but only for one turn. This effect has no save DC and is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "Even at lower levels, the wielder must possess a basic understanding of time manipulation.",
    "vendorReason": "Fate Forge specializes in crafting items that interact with the fabric of time and causality.",
    "shippingDetail": "Ships via the Temporal Relay, ensuring safe and swift delivery through the timestream.",
    "usage": {
      "activation": "Action or bonus action to use either effect.",
      "duration": "Instantaneous for Probability Shift; lasts 1 round for Temporal Disruption.",
      "endsWhen": "Runs out of charges, ends on a critical hit, or when you finish a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as an uncommon mythic item that offers unique time-manipulating abilities.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T01:42:17.722058+00:00",
    "aiReviewedAt": "2026-07-25T01:42:17.722058+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_chromatic_meme_sworn": {
    "id": "internet_item_chromatic_meme_sworn",
    "name": "The Chromatic Meme Sworn",
    "description": "The Chromatic Meme Sworn is a sleek, glowing USB drive that crackles with digital energy. When activated, it releases a wave of shifting color palettes and distorted meme archetypes, causing those nearby to experience a chaotic cascade of viral sensations. Users feel their senses overwhelmed by a barrage of memes, from the absurdly funny to the deeply unsettling, as if reality itself is bending into a kaleidoscope of internet chaos.",
    "category": "consumables",
    "price": 1100,
    "icon": "🌈",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Meme Cascade",
      "Color Perception Alteration"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Meme Cascade",
        "rules": "Upon activation, all creatures within 10 feet must succeed on a DC 15 Wisdom saving throw or become temporarily confused for 30 seconds. The confusion ends early if the affected creature takes any action."
      },
      {
        "title": "Color Perception Alteration",
        "rules": "For 1 minute after activation, all creatures within 20 feet gain advantage on saving throws against being charmed by memes or internet-related illusions. This effect does not stack with similar abilities."
      }
    ],
    "levelRequirementReason": "The Chromatic Meme Sworn requires a minimum level to properly handle its chaotic energy and avoid unintended consequences.",
    "vendorReason": "Pixel Shop specializes in tech and internet-related gadgets, making the Chromatic Meme Sworn an ideal addition to their inventory.",
    "shippingDetail": "Ships via Drone Delivery within 24 hours of purchase. Requires a signature upon delivery.",
    "usage": {
      "activation": "Standard action",
      "duration": "One use per short rest",
      "endsWhen": "The effect ends when the duration expires or if used again before completing a short rest.",
      "charges": "Uses one charge"
    },
    "priceReason": "The Chromatic Meme Sworn is priced at 1000 XP, reflecting its rare nature and unique ability to manipulate digital realities.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:41:50.518633+00:00",
    "aiReviewedAt": "2026-07-25T01:41:50.518633+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_ancient_data_cache_7982": {
    "id": "internet_item_ancient_data_cache_7982",
    "name": "Ancient Data Cache - Seed 7982",
    "description": "The Ancient Data Cache - Seed 7982 is a shimmering obsidian cube, its surface etched with arcane data patterns from forgotten networks. When activated, it releases a torrent of obsolete internet protocols and fragmented digital thought, boosting data processing speed by +10 for one minute. The cache also grants temporary 'buffer' status, reducing the chance of digital attacks by half for 3 hours. Handling this relic can induce vivid hallucinations, causing disorientation in users.",
    "category": "equipment",
    "price": 4600,
    "icon": "💾",
    "stock": 9,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Enhances Data Processing",
      "Grants Buffer Status"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Courier Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Data Processing",
        "rules": "Activates as a bonus action for 1 minute. Grants +10 to data processing speed. Ends when the duration expires."
      },
      {
        "title": "Buffer Status",
        "rules": "Grants temporary 'buffer' status, reducing the chance of digital attacks by half for 3 hours. Ends if the user is knocked unconscious or the duration expires."
      }
    ],
    "levelRequirementReason": "The cache's ancient data requires minimal experience to handle.",
    "vendorReason": "The Data Dealer specializes in relics from forgotten networks and arcane data caches.",
    "shippingDetail": "Ships directly via the internet, ensuring swift delivery within a week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute",
      "endsWhen": "Duration expires or user is knocked unconscious",
      "charges": "Unlimited"
    },
    "priceReason": "The Ancient Data Cache's historical and technological value justifies its moderate price.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:42:49.971850+00:00",
    "aiReviewedAt": "2026-07-25T01:42:49.971850+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_void_echo_prime": {
    "id": "internet_item_void_echo_prime",
    "name": "Void Echo Prime - Designation: Zero-Seven",
    "description": "The Void Echo Prime - Designation: Zero-Seven is a forbidden artifact, a solidified echo of digital oblivion. Crafted from corrupted data and bound within a pocket dimension, it hums with residual consciousnesses trapped in chaotic entropy. Activating this item risks summoning hostile digital entities and unleashing waves of corrupted code that devastate nearby systems, but it also grants temporary immunity to hacking attempts at the cost of one's mental stability.",
    "category": "forbidden",
    "price": 73000,
    "icon": "💀",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Summons Void Wraith",
      "Data Corruption Radius"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Secure Quantum Transmission",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summon Void Wraith",
        "rules": "Activating this item has a chance (20%) to summon a minor 'Void Wraith' within 5 feet, which lasts until the next dawn. The wraith deals 1d6 necrotic damage plus an amount equal to half the user's level. It can be dismissed by using an action and making a DC 18 Wisdom saving throw."
      },
      {
        "title": "Data Corruption Radius",
        "rules": "The item corrupts data within a 5-meter radius for 1 hour, reducing the effectiveness of all digital systems in that area by 20%. This effect can be mitigated with a successful DC 16 Intelligence (Computers) check. The corruption ends if the item is destroyed or when its activation ends."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to handle the risks and manage the potential damage this artifact can cause.",
    "vendorReason": "The cyber market deals in forbidden and restricted artifacts, including the Void Echo Prime.",
    "shippingDetail": "Shipment is via encrypted quantum channels to ensure data integrity and secure delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per activation",
      "endsWhen": "Destroyed, its use ends, or the next dawn arrives",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and risk of summoning hostile entities justify a moderate price.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T01:42:07.354694+00:00",
    "aiReviewedAt": "2026-07-25T01:42:07.354694+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_ghostspeaker_ward": {
    "id": "faerun_item_the_ghostspeaker_ward",
    "name": "The Ghostspeaker’s Ward",
    "description": "The Ghostspeaker’s Ward are spectral leather gloves etched with runes that whisper of past battles. These eldritch artifacts allow the wearer to commune briefly with the spirits of past combat, offering fleeting tactical insights but at a terrible cost: after each use, the wielder feels an icy chill and a creeping madness that gnaws at their sanity until the next dawn. These gloves are said to have been crafted by ancient mages who sought to harness the wisdom of battle’s echoes.",
    "category": "equipment",
    "price": 4600,
    "icon": "👻",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Battle Echoes",
      "Madness Whispers"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Magical Delivery",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Battle Echoes",
        "rules": "At the start of your next turn, you can activate the Ghostspeaker’s Ward to gain a +4 bonus to Wisdom (Perception) checks for 6 rounds. Once activated, this effect cannot be used again until after completing a short or long rest."
      },
      {
        "title": "Madness Whispers",
        "rules": "There is a 20% chance that activating the Ghostspeaker’s Ward results in a roll of 15 or higher on a d20, causing you to suffer from temporary madness. This effect lasts for one minute and requires an Intelligence saving throw with a DC of 14. On failure, your mind becomes clouded by visions of past battles."
      }
    ],
    "levelRequirementReason": "The Ghostspeaker’s Ward are complex artifacts that require significant magical knowledge to use effectively.",
    "vendorReason": "Waterdeep Market is known for its diverse array of rare and powerful artifacts, including the Ghostspeaker’s Ward.",
    "shippingDetail": "The gloves are shipped using Magical Delivery, ensuring they reach their destination safely within a week.",
    "usage": {
      "activation": "Action",
      "duration": "6 rounds",
      "endsWhen": "After completing a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Ghostspeaker’s Ward are rare and powerful, offering significant tactical advantages but at the cost of potential mental strain.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:42:31.911080+00:00",
    "aiReviewedAt": "2026-07-25T01:42:31.911080+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_abyssal_echo_shard": {
    "id": "faerun_item_the_abyssal_echo_shard",
    "name": "The Abyssal Echo Shard - Fragment 7",
    "description": "This obsidian shard pulses with the unholy energy of an ancient pact made deep within the Nine Hells. Holding it evokes fragmented visions of demonic rituals and untold suffering, as if you're witnessing the very essence of infernal corruption. The shard grants temporary advantage on saving throws against fear effects for three rounds upon activation but has a 20% chance to inflict disadvantage on Wisdom (Wis) checks while held.",
    "category": "curiosities",
    "price": 20000,
    "icon": "😈",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Nightmare Visions",
      "Advantage Against Fear"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Nightmare Visions",
        "rules": "While holding this shard for more than one minute, the wielder experiences vivid and terrifying nightmares. The character must make a Wisdom saving throw (DC 15) at the end of each long rest while holding it; on a failed save, they fall into a nightmare-filled slumber for an hour."
      },
      {
        "title": "Advantage Against Fear",
        "rules": "Upon activation, this shard grants temporary advantage on all saving throws against fear effects until the start of your next turn. The effect lasts for three rounds from the time it is activated."
      }
    ],
    "levelRequirementReason": "The shard's unholy energy requires a certain spiritual resilience that even lower-level characters can muster.",
    "vendorReason": "As one of Faerûn's most eclectic merchants, Baldur's Bazaar stocks items from all planes, including this infernal relic.",
    "shippingDetail": "The shard is couriered through a dimensional portal, ensuring its arrival in pristine condition.",
    "usage": {
      "activation": "Interact Action",
      "duration": "Instantaneous",
      "endsWhen": "Starts of your next turn or when discarded",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's balance is justified by its limited duration and the need to return it after use, preventing overuse.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:42:39.123292+00:00",
    "aiReviewedAt": "2026-07-25T01:42:39.123292+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_seraphim_ward_of_protection": {
    "id": "faerun_item_the_seraphim_ward_of_protection",
    "name": "The Seraphim Ward of Protection - Mk.42",
    "description": "The Seraphim Ward of Protection - Mk.42 is a heavy breastplate forged from the very core of a celestial seraph's heart, encased in pure silver and imbued with divine power. Its surface shimmers with an ethereal glow that flickers like stars, offering potent defenses against dark magic. This armor is said to be blessed by a benevolent celestial being itself, whose grace protects its wearer from fear and curses alike.",
    "category": "equipment",
    "price": 1300000,
    "icon": "✨",
    "stock": 3,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Divine Grace Aura",
      "Celestial Resistance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "winged_beast",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Divine Grace Aura",
        "rules": "The Seraphim Ward of Protection grants the wearer a +5 bonus to AC. Additionally, it provides immunity to fear effects and allows the wearer to automatically dispel minor curses and enchantments as an action."
      },
      {
        "title": "Celestial Resistance",
        "rules": "While wearing this breastplate, the wearer has resistance to necrotic damage. This effect is active until the end of each long rest or when the wearer removes the armor."
      }
    ],
    "levelRequirementReason": "The divine power and celestial essence required for such protection are only accessible to those who have reached a level where they can fully channel the grace and might of a celestial being.",
    "vendorReason": "As purveyors of rare and divine artifacts, Sword Coast Traders have the means to source and distribute items such as this celestial breastplate.",
    "shippingDetail": "Ships via winged beast courier; expect a delivery time of up to one month due to the item's divine nature.",
    "usage": {
      "activation": "Automatic upon donning the armor; dispels minor curses and enchantments as an action.",
      "duration": "Active until removed or at the end of each long rest.",
      "endsWhen": "The wearer removes the armor or completes a long rest.",
      "charges": "Unlimited, recharges during a long rest."
    },
    "priceReason": "The divine essence and celestial forges used in its creation justify this reduced price, as it is considered a godly artifact that provides significant protection without overburdening the wearer's abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:42:49.705148+00:00",
    "aiReviewedAt": "2026-07-25T01:42:49.705148+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_kaleidoscopic_borns_keys": {
    "id": "internet_item_kaleidoscopic_borns_keys",
    "name": "Kaleidoscopic Born's Keys – Nexus Drift",
    "description": "The Kaleidoscopic Born's Keys – Nexus Drift are shimmering, fractal-patterned keys that pulse with a kaleidoscopic light, reflecting the chaotic beauty of the digital core in the East of Midlands. These keys allow the user to momentarily phase through congested network pathways, increasing speed and providing glimpses of past transmissions. However, their use can induce fragmented memories and phantom connections. Each key is etched with lost data streams, a testament to the ancient technology that once dominated this region’s network.",
    "category": "equipment",
    "price": 20000,
    "icon": "✨",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Network Speed Boost",
      "Data Echo Glimpses"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Network Speed",
        "rules": "Activating one key allows the user to increase network speed by 50% for 1 minute. The duration is reduced to 30 seconds if used again within an hour."
      },
      {
        "title": "Data Echo Glimpses",
        "rules": "Each key grants a brief glimpse of past data transmissions, providing the user with +2 to Intelligence (Computers) checks for 1 minute. The effect is lost if the user fails a Wisdom saving throw against DC 15."
      }
    ],
    "levelRequirementReason": "These keys are accessible to lower-level characters as they provide essential network access without overwhelming power.",
    "vendorReason": "Pixel Shop, known for its cutting-edge tech and digital artifacts, stocks these keys due to their unique utility in navigating the region’s complex networks.",
    "shippingDetail": "Ships via Drone Delivery within 24 hours of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect, duration varies based on key used",
      "endsWhen": "Duration ends or user fails a Wisdom saving throw against DC 15",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the unique utility and limited duration of network speed boost and data echo glimpses.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:43:41.608416+00:00",
    "aiReviewedAt": "2026-07-25T01:43:41.608416+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk_55_viral_keys": {
    "id": "internet_item_mk_55_viral_keys",
    "name": "Mk.55 Viral Keys – Cascade Ignition",
    "description": "Forged within the core of a viral propagation node, Mk.55 Viral Keys – Cascade Ignition emit a constant stream of digital static, capable of triggering chain reactions in interconnected systems. Their metallic surfaces are covered in micro-circuitry that constantly shifts and rearranges itself like a swarm of bees. Upon activation, these keys unleash a localized data bloom—a surge of information that spreads rapidly through the network, creating a cascading effect on adjacent nodes. The keys' unique design ensures they can bypass basic security protocols with ease.",
    "category": "consumables",
    "price": 1100,
    "icon": "💥",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Data Bloom",
      "Viral Cascade"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Automated Packet Delivery",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Data Bloom",
        "rules": "When activated, these keys unleash a surge of data that spreads through the network. This effect deals 40 damage to all electronic systems within 30 feet and has a 25% chance to create a viral cascade spreading to adjacent nodes. The activation is a bonus action with an instantaneous duration."
      },
      {
        "title": "Viral Cascade",
        "rules": "If the Data Bloom results in a successful viral cascade, it spreads to all electronic systems within 60 feet of the initial target. This effect has a 15% chance on activation and lasts for 1 minute, with no save DC required."
      }
    ],
    "levelRequirementReason": "Requires high-level expertise in hacking and data manipulation to control these powerful keys.",
    "vendorReason": "The Data Dealer specializes in the most cutting-edge cybernetic and digital equipment, including items like the Mk.55 Viral Keys.",
    "shippingDetail": "Ships within a data packet that must be manually opened by the recipient.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous with Data Bloom; 1 minute for Viral Cascade",
      "endsWhen": "Ends when the duration expires or is interrupted by an opposing force",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rarity and its ability to bypass advanced security measures.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:42:58.796858+00:00",
    "aiReviewedAt": "2026-07-25T01:42:58.796858+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_lost_fragment_key": {
    "id": "internet_item_the_lost_fragment_key",
    "name": "The Lost Fragment Key – Chronos’ Echo",
    "description": "Recovered from the shattered remnants of a temporal server, The Lost Fragment Key – Chronos’ Echo vibrates with the echoes of forgotten timelines. Its intricate design seems to shift and distort in the periphery, as if resisting observation. Holding it evokes brief flashes of paradoxical events and alternate realities—brief moments outside of the current digital flow. This key grants the user 'Temporal Awareness', enhancing perception checks, and offers resistance to data corruption effects (+25%).",
    "category": "curiosities",
    "price": 100000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Brief Timelines Glimpses",
      "Temporal Anomaly Generation"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Brief Timelines Glimpses",
        "rules": "When activated, the user gains a brief insight into an alternate timeline. This effect lasts for 1 minute and provides a +2 bonus to Perception checks within that time."
      },
      {
        "title": "Temporal Anomaly Generation",
        "rules": "There is a 5% chance per day of generating a minor temporal anomaly, causing a 10-foot radius area around the user to distort for 1 minute. This effect can be resisted with a DC 20 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This key requires significant arcane knowledge and experience to wield effectively.",
    "vendorReason": "The cyber market specializes in rare and powerful digital artifacts, including Chronos’ Echo.",
    "shippingDetail": "Ships via Quantum Courier, ensuring safe and swift delivery of this sensitive temporal artifact.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until dismissed",
      "endsWhen": "The effect ends when the user dismisses it or after its duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "This item is a rare and powerful legendary curiosity, justifying its high price in experience points.",
    "priceOriginal": 6700,
    "priceReviewedAt": "2026-07-25T01:43:08.799148+00:00",
    "aiReviewedAt": "2026-07-25T01:43:08.799148+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_luminous_shadowborn_cloak_chosen": {
    "id": "faerun_item_luminous_shadowborn_cloak_chosen",
    "name": "The Luminous Shadowborn Cloak Chosen",
    "description": "The Luminous Shadowborn Cloak Chosen, a cloak woven from the scales of a Shade Serpent captured in the Plane of Shadows, whispers with an ethereal light that dances along its edges. It enhances stealth in dim conditions and offers resistance to necrotic damage, making the wearer an enigmatic figure shrouded in shadow. The cloak's fabric seems to pulse with ancient magic, offering the wearer a connection to the realm of shadows.",
    "category": "equipment",
    "price": 4600,
    "icon": "🌑",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "enhanced_stealth",
      "resistance_to_necrotic"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "winged_sprite",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Enhanced Stealth",
        "rules": "While wearing this cloak in dim light or darkness, you have advantage on Dexterity (Stealth) checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Resistance to Necrotic Damage",
        "rules": "You have resistance to necrotic damage while wearing this cloak. The effect persists for 1 minute and can be activated once per long rest."
      }
    ],
    "levelRequirementReason": "This cloak requires a high level of arcane knowledge to properly weave its shadow magic into the fabric.",
    "vendorReason": "Sword Coast Traders specialize in rare, exotic items from the Plane of Shadows and beyond.",
    "shippingDetail": "Ships via a Winged Sprite courier who delivers within three days of purchase.",
    "usage": {
      "activation": "Activates as a bonus action.",
      "duration": "1 minute, starting when you activate it and ending when you deactivate it or at the start of your next turn.",
      "endsWhen": "The effect ends if you are no longer in dim light or darkness, or if you remove the cloak.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This cloak's rarity and unique properties justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:44:01.121946+00:00",
    "aiReviewedAt": "2026-07-25T01:44:01.121946+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_mk_47_chronal_observatory_curiosity": {
    "id": "faerun_item_mk_47_chronal_observatory_curiosity",
    "name": "Mk.47 Chronal Observatory Curiosity",
    "description": "The Mk.47 Chronal Observatory Curiosity is a delicate timepiece of Elven craftsmanship, encased in a glass dome that shimmers with ancient runes. This relic allows its wielder to briefly glimpse one possible future outcome for their next action, offering strategic insight without altering the timeline. Crafted from ethereal eldritch metal and imbued with the essence of an elven chronomancer, it subtly shifts perception, making the user more intuitive in moments of decision.",
    "category": "curiosities",
    "price": 20000,
    "icon": "⏱️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Vision of Future Outcomes",
      "Enhanced Intuition"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision of Future Outcomes",
        "rules": "As a bonus action, activate to briefly see one possible future outcome of your next action. This effect lasts for the start of your next turn and provides no save DC. The vision is random each use but does not alter reality. You can use this feature once per long rest."
      },
      {
        "title": "Enhanced Intuition",
        "rules": "You gain a +2 bonus to Intelligence (Insight) checks for the duration of one short or long rest, representing heightened awareness and strategic foresight."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of magic to wield this intricate artifact.",
    "vendorReason": "As a renowned merchant of exotic items, Baldur's Bazaar is known for its eclectic collection of magical curiosities.",
    "shippingDetail": "Delivered by the slow yet reliable giant snails of the region, ensuring safe and timely arrival.",
    "usage": {
      "activation": "Bonus action to activate; once per long rest to use vision feature.",
      "duration": "Starts at your next turn after activation.",
      "endsWhen": "At the start of your next turn or when destroyed.",
      "charges": "Unlimited uses, recharging with a long rest."
    },
    "priceReason": "Balanced for its utility and rarity, this item offers strategic insight without being game-breaking.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:43:17.890297+00:00",
    "aiReviewedAt": "2026-07-25T01:43:17.890297+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_divine_aegis_of_the_verdant_king": {
    "id": "faerun_item_divine_aegis_of_the_verdant_king",
    "name": "Divine Aegis of the Verdant King",
    "description": "The Divine Aegis of the Verdant King, a shimmering shield encased in emerald and bound by Silvanus's sacred essence, exudes an ancient, verdant aura that soothes and protects the wielder from unnatural threats. Crafted deep within an enchanted forest, its surface crackles with life-force energy that heals minor wounds and repels malevolent forces. This sacred shield is said to have been forged under a moonlit sky by the hands of druids in service to the King of the Woodlands.",
    "category": "equipment",
    "price": 73000,
    "icon": "🌿",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "back_order",
    "effects": [
      "Radiant Shield",
      "Nature's Ward"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "the swift centaur courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Shield",
        "rules": "As an action, the wielder can call forth a radiant barrier that grants temporary hit points equal to half their level (rounded down). This effect lasts for 1 minute and provides resistance against poison damage. The shield dissipates if the user takes any fatal blow or if they willingly dismiss it."
      },
      {
        "title": "Nature's Ward",
        "rules": "The aegis grants immunity to disease and poison, while also dealing radiant damage equal to twice the user’s proficiency bonus when attacking undead creatures with natural attacks. This effect is always active as long as the wielder remains within an area of natural light."
      }
    ],
    "levelRequirementReason": "This shield provides essential early-game protection and resilience, making it accessible to lower-level adventurers.",
    "vendorReason": "The Waterdeep Market is a hub for diverse wares from across Faerûn, including sacred relics like the Divine Aegis of the Verdant King.",
    "shippingDetail": "Ships via the swift centaur couriers, delivered within one week to any point in Waterdeep.",
    "usage": {
      "activation": "Action or Bonus Action (to activate Radiant Shield)",
      "duration": "1 minute (Radiant Shield) / Always active (Nature's Ward)",
      "endsWhen": "The user takes a fatal blow or dismisses it / No specific condition for Nature's Ward",
      "charges": "Unlimited"
    },
    "priceReason": "This shield is priced at 1000 XP, reflecting its moderate rarity and essential utility for adventurers.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-25T01:43:46.202813+00:00",
    "aiReviewedAt": "2026-07-25T01:43:46.202813+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_xenolithic_echoes_of_the_lost_server": {
    "id": "internet_item_xenolithic_echoes_of_the_lost_server",
    "name": "Xenolithic Echoes of the Lost Server",
    "description": "The Xenolithic Echoes of the Lost Server are shimmering, fossilized data fragments that pulse with the residual energy of forgotten servers. These relics allow you to briefly perceive fragmented memories from across the network's vast history—a chaotic torrent of deleted files and panicked system alerts. When activated, they can reveal hidden data trails and increase processing speed by 5% for sixty seconds. However, there is a chance each use will trigger a random, chaotic data surge that could disrupt your surroundings.",
    "category": "curiosities",
    "price": 4600,
    "icon": "💾",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Reveals hidden data trails",
      "Increases processing speed"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Data Trails",
        "rules": "As an action, you can use the Xenolithic Echoes to reveal hidden data trails. This effect lasts for a duration of one minute and provides advantage on checks related to cybersecurity and data analysis."
      },
      {
        "title": "Increase Processing Speed",
        "rules": "Activate this item as a bonus action to increase your processing speed by 5% for sixty seconds. You can only use this effect once per long rest."
      }
    ],
    "levelRequirementReason": "This item is accessible early in the campaign, allowing players to engage with technology-themed challenges.",
    "vendorReason": "The Data Dealer specializes in rare and exotic tech artifacts, making this relic a fitting addition to their inventory.",
    "shippingDetail": "Ships via Drone Delivery within three days of purchase.",
    "usage": {
      "activation": "Action or bonus action",
      "duration": "Instantaneous effect with a duration of one minute for Reveal Hidden Data Trails, and sixty seconds for Increase Processing Speed.",
      "endsWhen": "The effect ends when the time duration is up or when you use the item again.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced price reflects a rare, tech-themed relic that enhances specific skills without being overpowered.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:44:10.278545+00:00",
    "aiReviewedAt": "2026-07-25T01:44:10.278545+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_digital_cursed_prime_fragments": {
    "id": "internet_item_digital_cursed_prime_fragments",
    "name": "Digital Cursed Prime Fragments",
    "description": "Digital Cursed Prime Fragments are cursed shards of corrupted directives harvested from an ancient system overrun by self-replicating algorithms. These fragments whisper promises of unparalleled processing power, but at a terrible cost: they slowly consume your mind and logic, leaving you vulnerable to data corruption. Each fragment grants a massive boost in processing speed for 30 seconds, but also increases the risk of generating corrupted data streams that damage nearby devices.",
    "category": "consumables",
    "price": 220000,
    "icon": "⚠️",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Processing Speed Boost",
      "Data Corruption Risk"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Secure Packet Transmission",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Processing Speed Boost",
        "rules": "Activates as a bonus action. Grants +50% processing speed for 30 seconds, requiring a DC 16 Wisdom saving throw to avoid becoming overwhelmed with data."
      },
      {
        "title": "Data Corruption Risk",
        "rules": "Each fragment has a 25% chance of generating a corrupted data stream within the next minute. This effect deals 1d6 force damage to all electronic devices within 30 feet, requiring a DC 14 Dexterity saving throw for half damage."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of computing and logic to handle the fragments' power.",
    "vendorReason": "Cyber Market specializes in high-tech and mythic artifacts, making these cursed fragments a fitting addition to their inventory.",
    "shippingDetail": "Ships via encrypted packets that ensure the data integrity of the fragments during transit.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds",
      "endsWhen": "Ends if you are incapacitated or fall unconscious within its duration.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the risk and utility of these fragments, suitable for lower-level characters.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:43:58.660047+00:00",
    "aiReviewedAt": "2026-07-25T01:43:58.660047+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk.74_data_resonance_tokens": {
    "id": "internet_item_mk.74_data_resonance_tokens",
    "name": "Mk.74 Data Resonance Tokens",
    "description": "These meticulously crafted tokens vibrate with the echoes of countless digital interactions, their surfaces etched with arcane runes that shimmer faintly under the glow of network lights. A subtle nudge here, a brief blockage there – they allow for targeted manipulation of network traffic, but prolonged use risks attracting unwanted attention from system administrators and security protocols. Each token is forged in the heart of an ancient data center, imbued with the essence of countless digital transactions.",
    "category": "equipment",
    "price": 1100,
    "icon": "📡",
    "stock": 33,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Targeted Manipulation",
      "Attracts Security Attention"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Standard Postal Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Targeted Manipulation",
        "rules": "Activate as a bonus action to subtly alter network traffic, rerouting packets for up to 1 minute. This effect can be used once per long rest."
      },
      {
        "title": "Attracts Security Attention",
        "rules": "Each use has a 20% chance of drawing the attention of automated security programs for the next hour. The DC to avoid this effect is 15."
      }
    ],
    "levelRequirementReason": "These tokens are designed to be accessible, even to lower-level characters who need to manipulate network traffic.",
    "vendorReason": "Pixel Shop specializes in tech-related items and equipment, making these tokens a natural addition to their inventory.",
    "shippingDetail": "Tokens are carefully packed to ensure safe delivery, with no additional delays.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The effect ends when the duration expires or you use an action to stop it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The tokens are crafted with rare materials and require significant skill to forge, justifying their moderate price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-25T14:34:30.622802+00:00",
    "aiReviewedAt": "2026-07-25T14:34:30.622802+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_chronometric_gravity_anchor": {
    "id": "grand_country_item_chronometric_gravity_anchor",
    "name": "The Chronometric Gravity Anchor - Phase Seven",
    "description": "The Chronometric Gravity Anchor - Phase Seven is a pulsating obsidian sphere that hums with temporal energy, subtly warping gravity to create brief, inverted pockets of descent. Its rhythmic pulses allow for controlled leaps through chaotic layers, yet prolonged use can induce disorientation and fractured memories. This artifact grants the wielder increased jump height by 50% and offers temporary resistance to gravity shifts, but it also has a chance to trigger a brief temporal echo, causing a momentary teleportation.",
    "category": "equipment",
    "price": 5900,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Leap Boost",
      "Gravity Resistance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravitational Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Leap Boost",
        "rules": "When activated as an action, the Chronometric Gravity Anchor grants the wielder a +50% bonus to jump height for 1 minute. The effect ends if the wielder takes any damage or rests."
      },
      {
        "title": "Gravity Resistance",
        "rules": "The anchor provides temporary resistance to gravity shifts within a 30-foot radius, reducing the severity of falling damage by half. This effect lasts until the start of your next turn and can be reactivated as an action once per long rest."
      }
    ],
    "levelRequirementReason": "The intricate temporal mechanics require a minimum level to fully comprehend and control.",
    "vendorReason": "Vertical Vendor specializes in rare, gravity-related artifacts that balance practical utility with mystical power.",
    "shippingDetail": "The Chronometric Gravity Anchor is shipped via the Gravitational Courier Drone for expedited delivery to your doorstep.",
    "usage": {
      "activation": "Activates as an action, or can be used once per short rest.",
      "duration": "1 minute (or until interrupted)",
      "endsWhen": "The wielder takes damage or rests.",
      "charges": "Unlimited, recharges at dawn."
    },
    "priceReason": "This rare artifact commands a high price due to its complex temporal mechanics and limited production.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T01:44:31.556147+00:00",
    "aiReviewedAt": "2026-07-25T01:44:31.556147+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_haunted_piercer_of_stasis": {
    "id": "grand_country_item_haunted_piercer_of_stasis",
    "name": "The Haunted Piercer of Stasis - Fragment XIII",
    "description": "Forged from solidified screams and haunted twilight, this jagged spike emanates a chilling aura that briefly suspends movement. When applied to an enemy, it traps them in moments of frozen stillness, rendering them immobile for several heartbeats—a terrifying spectacle for the casual observer. The Haunted Piercer's touch is as deadly as it is spectral, dealing minor piercing damage and inflicting a 'Fear' status that further cripples their resolve.",
    "category": "consumables",
    "price": 1200,
    "icon": "🔪",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Freezes target in place",
      "Deals minor piercing damage"
    ],
    "vendor": "side_seller",
    "shippedBy": "Shadow Delivery Service",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Freezes Target",
        "rules": "The Haunted Piercer of Stasis applies the 'Stasis' effect to a creature, immobilizing it for 3 seconds. There is a 50% chance that upon activation, the target becomes frightened and must make a DC 14 Wisdom saving throw or be incapacitated until the end of their next turn."
      },
      {
        "title": "Deals Piercing Damage",
        "rules": "In addition to immobilizing, the Haunted Piercer inflicts 2d6 piercing damage on the target. This effect has no save and does not provoke an attack of opportunity."
      }
    ],
    "levelRequirementReason": "This item requires a high level of expertise to wield effectively against formidable foes.",
    "vendorReason": "Side sellers are known for their unique and powerful items, often acquired from ethereal realms or haunted locales.",
    "shippingDetail": "The Shadow Delivery Service ensures the Haunted Piercer arrives safely but with a delay of one week due to its spectral nature.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, lasting 3 seconds",
      "endsWhen": "The target escapes or is incapacitated by fear",
      "charges": "Unlimited"
    },
    "priceReason": "Reflecting its spectral and rare crafting materials, the Haunted Piercer of Stasis is priced at 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:44:36.745838+00:00",
    "aiReviewedAt": "2026-07-25T01:44:36.745838+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk.81_vertical_weights_of_resonance": {
    "id": "grand_country_item_mk.81_vertical_weights_of_resonance",
    "name": "Mk.81 Vertical Weights of Resonance - Core Unit Delta",
    "description": "The Mk.81 Vertical Weights of Resonance - Core Unit Delta are a series of interlocking, vertically oriented weights forged from ancient metals that vibrate with unique harmonic frequencies. When arranged around your body, these weights create an oscillating field that amplifies sound by 100%, distorting the perception of nearby enemies and generating a small area of distortion that slows their movement. The core's resonance can warp reality just enough to cause auditory hallucinations in foes.",
    "category": "curiosities",
    "price": 27000,
    "icon": "🔊",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Amplified Sound",
      "Auditory Hallucination"
    ],
    "vendor": "layer_market",
    "shippedBy": "Dimensional Parcel Service",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Amplified Sound",
        "rules": "When activated, the weights amplify sound by 100% within a 30-foot radius. This effect lasts for 1 minute and can be reactivated after a short rest."
      },
      {
        "title": "Auditory Hallucination",
        "rules": "The core generates an area of distortion that causes nearby enemies to hear auditory hallucinations, requiring them to make a DC 15 Wisdom saving throw or become blinded for the duration. This effect can be used once every long rest."
      }
    ],
    "levelRequirementReason": "This item requires a high level of expertise and focus to handle its complex resonance.",
    "vendorReason": "Layer Market specializes in rare and exotic curiosities, including items that manipulate the environment in unique ways.",
    "shippingDetail": "Due to their size and delicacy, these weights must be shipped via Dimensional Parcel Service for safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until ended by an action",
      "endsWhen": "The effect ends if you deactivate it or are incapacitated.",
      "charges": "Unlimited, but can only be reactivated after a short rest."
    },
    "priceReason": "The item's unique crafting and powerful effects justify its high price in the market.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:44:26.712893+00:00",
    "aiReviewedAt": "2026-07-25T01:44:26.712893+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_verdant_helix_finder": {
    "id": "grand_country_item_verdant_helix_finder",
    "name": "Verdant Helix Finder",
    "description": "The Verdant Helix Finder is a spiraling hook forged from petrified moss and polished obsidian, crafted by the ancient forest guardians. Its verdant glow pulses with the energy of the earth itself, allowing its wielder to momentarily defy gravity. This enchanted tool enhances grip strength by 10% and grants a brief burst of gravitational distortion, enabling swift ascents along vertical surfaces. The helix absorbs ambient energy for these bursts, drawing from the very essence of the natural world.",
    "category": "consumables",
    "price": 350,
    "icon": "🌿",
    "stock": 45,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Grip",
      "Gravitational Distortion"
    ],
    "vendor": "side_seller",
    "shippedBy": "Rolling Dough Drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Grip",
        "rules": "The wielder's grip strength increases by 10%. This effect lasts for a duration of 5 seconds. While active, the user gains advantage on Strength (Athletics) checks to climb and maintain balance."
      },
      {
        "title": "Gravitational Distortion",
        "rules": "Activate as a bonus action. For 30 feet around the wielder, gravity briefly shifts, granting a +2 bonus to Acrobatics checks for 1 minute. This effect ends if the user moves more than 20 feet away from the center point or is incapacitated."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively, given the arcane energy and physical demands of the item.",
    "vendorReason": "Side Seller specializes in crafting items that enhance natural abilities, making this Verdant Helix Finder a perfect fit for their inventory.",
    "shippingDetail": "Ships via Rolling Dough Drone's express courier service within 3 days of purchase.",
    "usage": {
      "activation": "Bonus action or reaction (can be used once per short rest)",
      "duration": "Instantaneous activation, with effects lasting as described above",
      "endsWhen": "The user moves more than 20 feet away from the center point or is incapacitated; ends if the user takes any action that would normally end the effect.",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced at 1000 XP due to its unique combination of utility and duration, aligning with other high-demand consumables.",
    "priceOriginal": 120,
    "priceReviewedAt": "2026-07-25T01:44:48.429686+00:00",
    "aiReviewedAt": "2026-07-25T01:44:48.429686+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_mk_82_gravitic_hook": {
    "id": "grand_country_item_mk_82_gravitic_hook",
    "name": "Mk.82 Gravitic Hook - The Anchor's Embrace",
    "description": "The Anchor's Embrace is a Mk.82 Gravitic Hook, a marvel of sugar crystal engineering and mechanical finesse. Crafted from refined sugarcane and reinforced with minuscule gears, it hums softly as it generates a localized gravity field. This hook allows you to anchor yourself against walls or ceilings, making precarious perches feel safe. Nearby objects are drawn towards its core, creating an attractive pull that can be used for quick access of items within reach.",
    "category": "equipment",
    "price": 1200,
    "icon": "⚙️",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Gravitational Anchor",
      "Object Attraction"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Sticky Roller Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitational Anchor",
        "rules": "As a bonus action, you may attach the Mk.82 Gravitic Hook to a solid surface, allowing you to remain anchored in place for up to 1 minute. You are immune to all fall damage while anchored."
      },
      {
        "title": "Object Attraction",
        "rules": "When activated, the hook exerts a gravitational pull that attracts nearby objects within 5 feet towards its core. This effect lasts until the end of your next turn and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The simplicity and utility make it accessible to lower-level characters who require stability in precarious situations.",
    "vendorReason": "Vertical Vendor specializes in items that enhance mobility and safety, making the Anchor's Embrace a perfect fit for their inventory.",
    "shippingDetail": "Ships via Sticky Roller Courier; typically arrives within one business day.",
    "usage": {
      "activation": "Bonus action to anchor, once per long rest to attract objects",
      "duration": "1 minute while anchored; effect lasts until end of next turn for object attraction",
      "endsWhen": "Unattached or used again",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, the Anchor's Embrace offers practical utility and safety features that justify its price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:44:53.481312+00:00",
    "aiReviewedAt": "2026-07-25T01:44:53.481312+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_chronometric_hook_of_reversal": {
    "id": "grand_country_item_chronometric_hook_of_reversal",
    "name": "Chronometric Hook of Reversal - The Temporal Knot",
    "description": "The Chronometric Hook of Reversal, known as The Temporal Knot, is a crystalline hook forged from time-fragments harvested in the Temporal Veins of Eldoria. When deployed, it momentarily reverses gravity within a ten-foot radius, allowing anyone nearby to ascend with unnatural speed and precision. The hook's core glows faintly with temporal energy, hinting at its power over time itself. Handle this artifact with care; prolonged use risks attracting dangerous time anomalies that could disrupt the fabric of reality.",
    "category": "curiosities",
    "price": 4600,
    "icon": "⏳",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Temporal Ascension",
      "Risk of Anomalies"
    ],
    "vendor": "layer_market",
    "shippedBy": "Sugar Shock Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Ascension",
        "rules": "Activates as a bonus action, creating an area of reversed gravity within a ten-foot radius centered on you. All creatures in the area can move upward at triple their normal speed for 15 seconds. The effect ends if you or any creature in the area moves more than 30 feet away from the center."
      },
      {
        "title": "Risk of Anomalies",
        "rules": "There is a 20% chance that deploying the hook will attract a temporal anomaly, which lasts for 1d4 rounds. During this time, any creature within 60 feet must make a DC 15 Dexterity saving throw or be pulled toward the anomaly with disadvantage on all attacks and checks until it dissipates."
      }
    ],
    "levelRequirementReason": "The hook's intricate design requires a basic understanding of temporal mechanics.",
    "vendorReason": "Layer Market specializes in rare curiosities and ancient artifacts, including items that manipulate the fabric of reality.",
    "shippingDetail": "The Temporal Knot is shipped via a special temporal courier service to ensure it arrives intact through any potential anomalies.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "15 seconds, or until you move more than 30 feet away from the center of effect",
      "endsWhen": "You or another creature in the area moves more than 30 feet away from the center; anomaly dissipates after 1d4 rounds",
      "charges": "Unlimited uses"
    },
    "priceReason": "The hook's rarity and the complexity of its temporal properties justify this balanced price.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-25T01:45:11.956918+00:00",
    "aiReviewedAt": "2026-07-25T01:45:11.956918+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_stoneheart_finder": {
    "id": "middle_earth_item_stoneheart_finder",
    "name": "The Stoneheart Finder's Mithril Shard",
    "description": "The Stoneheart Finder's Mithril Shard glimmers faintly, its jagged edges etched with the ancient runes of a lost dwarven king. This relic pulses with an otherworldly rhythm, echoing the heart that once beat for Middle-earth's greatest stronghold. When held, it grants a temporary resistance to fear and provides a subtle advantage in navigating treacherous underground tunnels, as if the king’s spirit guides one through the dark. Holding this shard allows you to move more swiftly and safely through subterranean realms, feeling its pulse guide your steps with uncanny precision.",
    "category": "equipment",
    "price": 4600,
    "icon": "⛰️",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Fear Resistance",
      "Advantage on Navigation Checks"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fear Resistance",
        "rules": "While holding the Mithril Shard, you have advantage on saving throws against being frightened. This effect lasts for 1 hour from the moment of first use."
      },
      {
        "title": "Advantage on Navigation Checks",
        "rules": "When navigating treacherous underground tunnels or similar environments, you have advantage on Wisdom (Perception) checks and Dexterity (Acrobatics) checks. This effect is active for 1 hour after the shard begins to pulse."
      }
    ],
    "levelRequirementReason": "The shard requires significant experience to wield its ancient power effectively.",
    "vendorReason": "The dwarves of Erebor have long revered the heart of their lost king, and this shard is a testament to his enduring legacy.",
    "shippingDetail": "Shipped by winged courier; delays may vary due to unpredictable flight paths in treacherous terrain.",
    "usage": {
      "activation": "Passive effect upon holding the shard.",
      "duration": "1 hour per use.",
      "endsWhen": "The effect ends when the hour passes or you lose contact with it, whichever occurs first.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced to reflect its rare nature and limited stock, this shard is a treasure of immense value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:45:37.213073+00:00",
    "aiReviewedAt": "2026-07-25T01:45:37.213073+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shadowbloom_service": {
    "id": "middle_earth_item_shadowbloom_service",
    "name": "The Shadowbloom's Silent Service",
    "description": "The Shadowbloom's Silent Service is a vial of concentrated essence extracted from a rare, nocturnal flower found only in the deepest shadows of Mordor. Its petals are said to absorb the very silence of night and darkness itself. When consumed, you gain temporary invisibility and complete silence for 60 seconds, making it an invaluable tool for both stealthy reconnaissance missions and escaping unwanted attention in the harshest of environments.",
    "category": "services",
    "price": 20000,
    "icon": "👻",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "temporary invisibility",
      "complete silence"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Invisibility",
        "rules": "You become invisible to all creatures within a 30-foot radius. This effect lasts for 60 seconds and can be ended early by the creature consuming it."
      },
      {
        "title": "Complete Silence",
        "rules": "Your movements are completely silent during this duration, rendering you undetectable through sound-based senses such as hearing or tracking. This effect is not subject to save checks but ends if you speak or make a noise."
      }
    ],
    "levelRequirementReason": "This item requires no level restriction as it provides a unique and powerful service rather than raw combat strength.",
    "vendorReason": "The Shire Shop, known for its exotic and rare goods, carries this item due to its unique utility in reconnaissance missions.",
    "shippingDetail": "Ships via the Pony Express, ensuring swift delivery within a week of purchase.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "60 seconds.",
      "endsWhen": "The effect ends if you speak or make noise, or it can be ended early by the consumer.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the rare and exotic nature of the Shadowbloom flower, as well as its unique utility in stealth operations.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:45:21.930962+00:00",
    "aiReviewedAt": "2026-07-25T01:45:21.930962+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_ornate_rune_finder": {
    "id": "middle_earth_item_ornate_rune_finder",
    "name": "The Ornate Rune Finder Mk.II - Pristine",
    "description": "The Ornate Rune Finder Mk.II – Pristine gleams with an ancient elven patina, its surface etched with runes that seem to hum with forgotten power. This amulet is said to have been crafted by the hands of long-lost Elven mages, and when activated, it momentarily reveals hidden passageways within the very fabric of reality, allowing explorers to bypass insurmountable challenges. It also unlocks ancient chambers sealed for millennia, providing access to lost treasures and secrets that time has buried deep.",
    "category": "curiosities",
    "price": 1200,
    "icon": "✨",
    "stock": 27,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "reveals hidden pathways",
      "unlocks long-lost chambers"
    ],
    "vendor": "elven_market",
    "shippedBy": "hawk_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "When activated as a bonus action, the Ornate Rune Finder Mk.II – Pristine reveals hidden passageways within a 30-foot radius. This effect lasts for 1 minute and grants advantage on Wisdom (Perception) checks to detect secret doors or hidden traps in this area."
      },
      {
        "title": "Unlock Long-Lost Chambers",
        "rules": "Activating the amulet as an action allows you to unlock any long-lost chamber within a 60-foot radius that is sealed by magic. This effect has a daily limit of once and requires a successful DC 15 Wisdom (Arcana) check."
      }
    ],
    "levelRequirementReason": "The Ornate Rune Finder Mk.II – Pristine requires at least first level to activate due to its complex magical properties.",
    "vendorReason": "The Elven Market is known for its vast collection of ancient and enchanted artifacts, making it the ideal place to find such a relic.",
    "shippingDetail": "Shipped by hawk courier, arriving within one week from the Elven Market.",
    "usage": {
      "activation": "Bonus action or action (daily limit once)",
      "duration": "Instantaneous and lasts for 1 minute (Reveal) / Instantaneous (Unlock)",
      "endsWhen": "Effect duration ends after 1 minute, or when used again the next day",
      "charges": "Daily limit; unlimited uses per long rest"
    },
    "priceReason": "The Ornate Rune Finder Mk.II – Pristine is priced at 1000 XP due to its unique magical properties and historical significance.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-25T01:46:00.089810+00:00",
    "aiReviewedAt": "2026-07-25T01:46:00.089810+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_jade_render_certificate_of_luminescence": {
    "id": "kivotos_item_jade_render_certificate_of_luminescence",
    "name": "Jade Render's Certificates of Luminescence",
    "description": "These meticulously crafted certificates, rendered in polished jade and shimmering with residual halo energy, are a student's ticket to the Academy’s restricted holographic archives. Holding one allows a scholar to momentarily project a perfect replica of any theoretical construct or philosophical argument—perfect for dazzling professors or impressing fellow students with an unparalleled display of knowledge. The certificates grant temporary access to forbidden texts and simulations, but their power is fleeting, making them invaluable yet scarce among the student body.",
    "category": "curiosities",
    "price": 4600,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant temporary holographic projection",
      "increase persuasive argument ability by 15%"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Temporary Holographic Projection",
        "rules": "Activates as a bonus action. The user can project a perfect replica of any theoretical construct or philosophical argument for up to 1 minute. This projection is indistinguishable from the original until its duration ends."
      },
      {
        "title": "Increase Persuasive Argument Ability by 15%",
        "rules": "The holder gains a +2 bonus to Persuasion checks and Insight checks to influence others. This effect lasts for the duration of the projection or until the user takes another action on their turn, whichever comes first."
      }
    ],
    "levelRequirementReason": "These certificates are accessible to all students regardless of level as they require no combat proficiency.",
    "vendorReason": "The student store stocks these certificates as they are a popular and essential tool for academic success among the student body.",
    "shippingDetail": "Delivered instantly by the academy's drone fleet, ensuring that students receive their Certificates of Luminescence promptly.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute",
      "endsWhen": "The duration ends or the user takes another action on their turn",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its limited availability and academic utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:46:00.588500+00:00",
    "aiReviewedAt": "2026-07-25T01:46:00.588500+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk83_graduate_certificates_of_discord": {
    "id": "kivotos_item_mk83_graduate_certificates_of_discord",
    "name": "Mk.83 Graduate Certificates of Discord",
    "description": "The Mk.83 Graduate Certificates of Discord are issued by the enigmatic 'Order of Disruptive Thought,' a clandestine society known for its ability to sow confusion and dissent among intellects. Each certificate, stamped with a stylized graduation cap and a miniature symbol of chaotic energy, emits an invisible field that subtly destabilizes logical thought patterns in nearby individuals, making it perfectly suited for challenging authority or inciting controlled intellectual disagreement during gatherings.",
    "category": "equipment",
    "price": 20000,
    "icon": "💣",
    "stock": 9,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Disruptive Influence",
      "Logical Disarray"
    ],
    "vendor": "club_supply",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disruptive Influence",
        "rules": "On activation, the certificate emits a subtle field that causes nearby individuals to experience temporary confusion. This effect lasts for 1 minute and has a range of 30 feet. Creatures within this area must make a DC 15 Wisdom saving throw or become incapacitated until the duration ends. The effect can be ended early by being damaged."
      },
      {
        "title": "Logical Disarray",
        "rules": "For every certificate used, there is a +20% chance that an unintended consequence occurs, such as increased charisma but with a 30% risk of accidentally embarrassing oneself or others. This effect persists for the duration of the certificate's influence."
      }
    ],
    "levelRequirementReason": "The Certificates are designed to be accessible to those with basic understanding and experience in disruptive thought, as they rely on subtle magical properties.",
    "vendorReason": "Club Supply specializes in items that enhance social interactions and gatherings, making these certificates a natural addition to their inventory.",
    "shippingDetail": "The Shadow Courier ensures the Certificates arrive safely but with a slight delay due to their sensitive nature.",
    "usage": {
      "activation": "Object interaction",
      "duration": "1 minute, until interrupted or destroyed",
      "endsWhen": "The duration ends when it is damaged",
      "charges": "Unlimited, each use expends one charge"
    },
    "priceReason": "Balanced at this price point to reflect its moderate rarity and the subtle but effective disruption it causes.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:45:40.913769+00:00",
    "aiReviewedAt": "2026-07-25T01:45:40.913769+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_graduate_certificate_of_halos_prime": {
    "id": "kivotos_item_graduate_certificate_of_halos_prime",
    "name": "Graduate Certificate of Halos Prime",
    "description": "The Graduate Certificate of Halos Prime is a meticulously crafted document by the Academy's elite halo engineers. It contains a fragment of pure halo energy that can be activated to project a protective aura around its bearer, enhancing their perception and awareness in perilous environments. The document’s invisibility effect is most potent in dimly lit areas, making it ideal for navigating upper corridors safely and discreetly within the academy.",
    "category": "consumables",
    "price": 220000,
    "icon": "🔆",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Protective Halo Aura",
      "Enhanced Perception"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Secure Transport Vessel",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Protective Halo Aura",
        "rules": "Activates as a bonus action, creating an aura that provides a +2 bonus to AC and resistance to mental damage for up to 1 minute. Ends if the user takes any hostile action."
      },
      {
        "title": "Enhanced Perception",
        "rules": "Passive effect providing advantage on perception checks in dimly lit areas. This effect is permanent, but only active within such conditions."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to activate the protective aura due to the item's complexity and power.",
    "vendorReason": "The academy armory specializes in high-end items, including this unique document from its elite engineers.",
    "shippingDetail": "Ships via a secure courier with tracking; delivery typically takes 3 days within the academy grounds.",
    "usage": {
      "activation": "Bonus action to activate halo aura",
      "duration": "1 minute, ends if hostile actions are taken",
      "endsWhen": "Ends or is expended upon taking any hostile action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects the item's mythic rarity and utility for navigating academy corridors safely.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-25T01:45:54.046061+00:00",
    "aiReviewedAt": "2026-07-25T01:45:54.046061+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_hyperlink_distortion_binder": {
    "id": "internet_item_hyperlink_distortion_binder",
    "name": "The Hyperlink Distortion Binder",
    "description": "The Hyperlink Distortion Binder is a crimson-bound tome, its pages etched with arcane symbols that shimmer with compressed memes and viral sensations. When opened, it warps the viewer's perception, momentarily distorting reality into fractured echoes of the internet past, revealing long-forgotten trends and twisted realities. The binder grants fleeting insights into data tribes, enhancing charisma in their presence, yet its power is limited to brief moments before dissipating into mere static.",
    "category": "curiosities",
    "price": 4600,
    "icon": "✨",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Data Tribe Charisma Boost",
      "Visual Distortion"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Charismatic Data Tribes",
        "rules": "When activated as a bonus action, the binder grants +2 Charisma for 1 minute. This effect ends if you are incapacitated or when your next short rest begins."
      },
      {
        "title": "Visual Distortion",
        "rules": "As an instantaneous effect on interaction with pages of the binder, it causes minor visual distortions for 5 seconds. These distortions last until they naturally fade away and do not require a saving throw to resist."
      }
    ],
    "levelRequirementReason": "Requires significant experience to harness such complex and unstable data.",
    "vendorReason": "Pixel Shop specializes in unique and rare technological curiosities, making the Hyperlink Distortion Binder a fitting addition to their inventory.",
    "shippingDetail": "Ships via fast-drone courier with same-day delivery within major cities.",
    "usage": {
      "activation": "Bonus action on interaction with pages of the binder.",
      "duration": "1 minute or until incapacitated, whichever comes first.",
      "endsWhen": "Ends when you are incapacitated or at the beginning of your next short rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Hyperlink Distortion Binder's rarity and unique functionality justify its price, offering a balanced value for players seeking to enhance their charisma in specific situations.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:46:10.941111+00:00",
    "aiReviewedAt": "2026-07-25T01:46:10.941111+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_divine_link_nexus_fragment": {
    "id": "internet_item_divine_link_nexus_fragment",
    "name": "The Divine Link Nexus Fragment",
    "description": "The Divine Link Nexus Fragment, a shimmering obsidian shard recovered from the forgotten corners of the Deep Web, pulses with an ethereal glow. This relic allows you to momentarily tap into the core stream of viral information, granting precognitive glimpses of trending content and enhancing your ability to navigate the ever-changing digital landscape. Holding this fragment can provide resistance to information overload and allow temporary communication with network ghosts.",
    "category": "equipment",
    "price": 74000,
    "icon": "🔮",
    "stock": 9,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Precognitive Glimpse",
      "Enhanced Data Processing"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precognitive Glimpse",
        "rules": "You can use an action to attempt a DC 15 Intelligence (Investigation) check to gain precognitive knowledge of trending content. This effect is usable once per long rest."
      },
      {
        "title": "Enhanced Data Processing",
        "rules": "While holding the fragment, you gain a +3 bonus to all Intelligence checks related to data processing and analysis. This bonus does not stack with similar abilities."
      }
    ],
    "levelRequirementReason": "Any level character can benefit from this fragment's unique connection to the digital world.",
    "vendorReason": "The cyber_market specializes in rare and exotic items related to the Deep Web and virtual realms, making it a logical place for such an artifact.",
    "shippingDetail": "This item is shipped via secure Quantum Courier with enhanced delivery handling to ensure safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when you use it or at the start of your next turn if you do not take an action related to data processing.",
      "charges": "Unlimited, but usable once per long rest."
    },
    "priceReason": "This fragment's balanced price reflects its unique connection to the digital world and its limited utility in enhancing specific skills.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:46:58.423244+00:00",
    "aiReviewedAt": "2026-07-25T01:46:58.423244+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_compressed_meme_cascade_scroll": {
    "id": "internet_item_compressed_meme_cascade_scroll",
    "name": "Compressed Meme Cascade Scroll",
    "description": "This intricately woven scroll, a relic of internet lore, contains an alchemical brew of iconic memes and jokes. Upon activation, it unleashes a chaotic cascade of visual and auditory stimuli that can leave even the most stoic warrior speechless with laughter. The resulting wave of absurdity not only damages enemies but also saps their willpower, leaving them distracted for several rounds. Use it wisely; prolonged exposure might just make you question reality itself.",
    "category": "consumables",
    "price": 20000,
    "icon": "😂",
    "stock": 17,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Chaotic Visual and Auditory Assault",
      "Enemies Distracted"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Courier Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chaotic Visual and Auditory Assault",
        "rules": "When activated, the scroll unleashes a torrent of memes and jokes that deal 50 necrotic damage to all creatures in a 10-foot radius. Creatures must succeed on a DC 14 Constitution saving throw or be stunned for 1 minute."
      },
      {
        "title": "Enemies Distracted",
        "rules": "All enemies within the area of effect are subjected to a 'Distracted' condition, which lasts for 3 turns. During this time, they have disadvantage on attack rolls and ability checks that require concentration."
      }
    ],
    "levelRequirementReason": "Suitable for any brave soul to carry into battle, but only those with a strong will can resist the scroll's effects.",
    "vendorReason": "The data dealer specializes in rare and exotic items from the digital realm, making this scroll an ideal addition to their inventory.",
    "shippingDetail": "Ships via Courier Bot’s express delivery service. Delivery can be delayed by up to 24 hours due to the delicate nature of the item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, duration lasts until all creatures within the area are no longer affected.",
      "endsWhen": "The scroll is destroyed once its effects have concluded or if a creature successfully saves against the 'Distracted' condition.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this scroll offers a unique and powerful utility for any party, making it a worthwhile investment.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T14:35:39.454548+00:00",
    "aiReviewedAt": "2026-07-25T14:35:39.454548+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_crimson-skull-banner-eater": {
    "id": "warhammer_item_crimson-skull-banner-eater",
    "name": "The Crimson Skull Banner Eater",
    "description": "The Crimson Skull Banner Eater, a fearsome banner woven from the pulverized bones of countless skull beasts, exudes an aura that sends shivers down the spines of its beholders. When unfurled in battle, it emits a low, rhythmic pulse that induces primal terror among enemies, causing them to falter and lose their edge. This macabre artifact not only saps away 10% of an enemy's attack power but also has a chance to paralyze foes weaker than you by half your level.",
    "category": "services",
    "price": 1200,
    "icon": "💀",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Aura of Terror",
      "Weakened Attack"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Aura of Terror",
        "rules": "When unfurled, the banner emits a low, rhythmic pulse that induces fear within a small radius. Enemies within this area must make a DC 15 Wisdom saving throw or be incapacitated for 1 minute."
      },
      {
        "title": "Weakened Attack",
        "rules": "Enemies struck by attacks while within the banner's aura have their attack power reduced by 10%. This effect persists until the end of the creature’s next turn."
      }
    ],
    "levelRequirementReason": "The banner requires a significant level to wield effectively, as it demands a deep understanding of fear and terror.",
    "vendorReason": "The Imperial Armory supplies this unique artifact to those who can afford its power and the training required to use it.",
    "shippingDetail": "The banner is carefully delivered by drone, ensuring it reaches its destination in pristine condition.",
    "usage": {
      "activation": "Action (unfurled)",
      "duration": "Instantaneous effect on enemies within a small radius; aura persists until the end of your next turn or when you dismiss it.",
      "endsWhen": "The aura dissipates at the start of your next turn, or you can dismiss it as an action.",
      "charges": "Unlimited"
    },
    "priceReason": "The banner's unique properties and the training required to use it justify its high price in XP.",
    "priceOriginal": 285,
    "priceReviewedAt": "2026-07-25T01:46:51.472826+00:00",
    "aiReviewedAt": "2026-07-25T01:46:51.472826+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_ethereal-shade-whisperer": {
    "id": "warhammer_item_ethereal-shade-whisperer",
    "name": "The Ethereal Shade Whisperer",
    "description": "The Ethereal Shade Whisperer is a delicate amulet forged from obsidian and shadow, capturing the whispers of restless spirits within its core. This artifact allows the wearer to briefly commune with spectral entities, revealing hidden pathways and forgotten secrets. However, the knowledge gained comes at a cost; there's a small chance that each use will induce temporary madness, clouding judgment for an hour. The amulet also grants a 15% reduction in damage taken from undead creatures.",
    "category": "equipment",
    "price": 4600,
    "icon": "👻",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reveals Hidden Passages",
      "Induces Temporary Madness"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Nightshade Delivery Serpent",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Commune with Spirits",
        "rules": "As an action, the wearer can attempt to commune with the spirits. This allows them to reveal hidden passages and forgotten secrets within a 30-foot radius. The DC for any Wisdom (Perception) or Intelligence (Investigation) check made as part of this effect is 15. There's a 20% chance that each successful use grants an additional insight, but there's also a 10% chance it induces temporary madness, reducing the wearer’s Charisma by 2 for one hour."
      },
      {
        "title": "Undead Resistance",
        "rules": "While wearing this amulet, the wearer gains a +5 bonus to saving throws against undead creatures. This effect lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "This item requires no minimum level as it is designed for all adventurers who might encounter hidden dangers and need extra protection.",
    "vendorReason": "The Chaos Dealer, known for their dealings in the supernatural, would naturally stock an artifact that allows one to commune with spirits.",
    "shippingDetail": "Shipped under moonlight, ensuring the secrecy of its delivery and the wearer’s privacy.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of the next long rest if a successful saving throw is made.",
      "endsWhen": "The effect ends when the wearer successfully makes a Wisdom (Perception) or Intelligence (Investigation) check, or at the start of their next turn after an unsuccessful one.",
      "charges": "Unlimited; recharges on a long rest."
    },
    "priceReason": "The item’s rarity and unique abilities justify its price, offering significant utility to adventurers while maintaining balance within the game economy.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:46:36.812014+00:00",
    "aiReviewedAt": "2026-07-25T01:46:36.812014+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fate-forge-mk-7-temporal-resonator": {
    "id": "warhammer_item_fate-forge-mk-7-temporal-resonator",
    "name": "Mk.7 Fate Forge Temporal Resonator",
    "description": "The Mk.7 Fate Forge Temporal Resonator hums with the raw energy of a dying star, its surface etched with intricate patterns that shimmer like the auroras of old. This weapon bends time itself to enhance its wielder's movements, allowing them to strike with blinding speed and precision. Yet, those who overuse it risk becoming trapped in a temporal loop, their actions repeating in an endless cycle of paradoxes.",
    "category": "equipment",
    "price": 21000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Boost",
      "Paradox Rewind"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Chronos Delivery Wing",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Boost",
        "rules": "Activates as a bonus action. Grants the wielder a +20 temporary modifier to Dexterity (Acrobatics and Sleight of Hand checks only) for 1 minute. The duration can be extended by an additional 30 seconds with a successful DC 15 Constitution saving throw."
      },
      {
        "title": "Paradox Rewind",
        "rules": "Activates as a reaction when the wielder is targeted by a temporal effect or would suffer from a temporal displacement. The reaction allows the wielder to negate the effect and revert their last action, effectively undoing any damage or effects it might have caused."
      }
    ],
    "levelRequirementReason": "The complex mechanics of the Temporal Resonator require significant experience to control its power without causing harm.",
    "vendorReason": "Fate Forge specializes in crafting items that manipulate time and space, making them a logical provider for this unique piece of equipment.",
    "shippingDetail": "Ships via time-displaced courier, ensuring the item arrives safely but may experience slight temporal delays during transit.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "1 minute (extendable)",
      "endsWhen": "The duration ends when the effect is extended or the user is no longer proficient with the weapon.",
      "charges": "Unlimited, but requires a short rest to negate any temporal displacement effects"
    },
    "priceReason": "Balanced at this price point as it provides significant buffs and defensive capabilities without overpowered functionality.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:47:09.306096+00:00",
    "aiReviewedAt": "2026-07-25T01:47:09.306096+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_blessed_potions_of_silverstream": {
    "id": "faerun_item_blessed_potions_of_silverstream",
    "name": "The Blessed Potions of Silverstream",
    "description": "The Blessed Potions of Silverstream are crystalline and shimmer with a silvery luster, each drop infused with the sacred essence of the River Silverstream. This ethereal liquid is said to cleanse wounds touched by shadow or blight, offering swift recovery for grievous injuries. The river's magic whispers promises of resilience against the creeping touch of death, granting temporary resistance to necrotic damage and bolstering one’s resolve in moments of despair.",
    "category": "consumables",
    "price": 350,
    "icon": "✨",
    "stock": 47,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Swift Recovery",
      "Necrotic Resistance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Flying Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Recovery",
        "rules": "When consumed, the potion restores 30 hit points to the imbiber. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Necrotic Resistance",
        "rules": "For 1 hour after imbibing, the drinker gains temporary resistance to necrotic damage equal to half their proficiency bonus (minimum +2). This benefit ends if they take any necrotic damage or when the duration expires."
      }
    ],
    "levelRequirementReason": "These potions are designed for adventurers of all levels, providing immediate aid in dire situations.",
    "vendorReason": "The Sword Coast Traders have long-standing ties with the Silverstream River and its guardians, ensuring these potent remedies reach those who need them most.",
    "shippingDetail": "Delivered swiftly by the renowned Flying Couriers, ensuring potions arrive in pristine condition.",
    "usage": {
      "activation": "Instantaneous consumption upon opening the bottle.",
      "duration": "1 hour or until consumed by necrotic damage.",
      "endsWhen": "Either when its duration expires or it is used against necrotic damage.",
      "charges": "Unlimited; each potion is a single-use item."
    },
    "priceReason": "The rarity and sacred nature of the Silverstream's essence elevate these potions' value, making them worth ten times their common counterpart.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:47:57.492310+00:00",
    "aiReviewedAt": "2026-07-25T01:47:57.492310+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_twilight_sworn_s_elixir": {
    "id": "faerun_item_twilight_sworn_s_elixir",
    "name": "Twilight Sworn’s Elixir of Silent Passage",
    "description": "Twilight Sworn’s Elixir of Silent Passage is a thick, amethyst-colored liquid drawn from the Murkwater Marshes. Its potent aroma lingers like a forgotten promise, and when consumed, it grants the imbiber invisibility for 3 rounds, allowing them to slip past unseen enemies. The elixir's touch can chill the very air, dealing 1d6 cold damage on a successful touch attack, making it a deadly weapon in close combat.",
    "category": "consumables",
    "price": 1200,
    "icon": "👻",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Invisibility",
      "Cold Touch"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Dark Elf Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The user becomes invisible for 3 rounds. This effect ends if the user takes any action other than moving silently, or if they are struck by an attack."
      },
      {
        "title": "Cold Touch",
        "rules": "On a successful touch attack, the user deals 1d6 cold damage to their target. The user must make a Constitution saving throw (DC 15) or be subjected to a chill effect for 1 minute, reducing their speed by half."
      }
    ],
    "levelRequirementReason": "This elixir is accessible to all adventurers who can afford its price due to its widespread availability in Faerûn.",
    "vendorReason": "The bazaar stocks a variety of exotic goods, and this elixir is one such item that travelers often seek for its unique properties.",
    "shippingDetail": "Shipped with utmost secrecy to ensure the elixir remains potent throughout transit.",
    "usage": {
      "activation": "飲用或使用",
      "duration": "3 rounds of invisibility, instantaneous cold touch effect",
      "endsWhen": "The effect ends if the user takes an action other than moving silently or is struck by an attack; the cold touch deals damage on a successful touch.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare and potent nature, allowing it to be a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:47:18.551193+00:00",
    "aiReviewedAt": "2026-07-25T01:47:18.551193+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_mk71_forbidden_vial_of_nightshade": {
    "id": "faerun_item_mk71_forbidden_vial_of_nightshade",
    "name": "Mk.71 Forbidden Vial of Nightshade Bloom",
    "description": "Recovered from a desecrated temple of Lolth, this vial is forged from dark obsidian and sealed with a sigil of forbidden knowledge. The concentrated essence of Nightshade bloom within is said to have been crafted by the Dark Lady herself, capable of paralyzing foes and draining their vitality in an instant. Once used, the vial's power dissipates, leaving only a noxious mist that lingers for moments before vanishing into the air.",
    "category": "forbidden",
    "price": 5900,
    "icon": "💀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Paralyze Target",
      "Drain Vitality"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Paralyze Target",
        "rules": "When activated by throwing, this vial strikes a single target within 30 feet. The target must make a DC 17 Constitution saving throw or be paralyzed for the duration of one round (2 rounds). This effect can only be used once per short rest."
      },
      {
        "title": "Drain Vitality",
        "rules": "On a successful hit, the target takes 4d6 poison damage. The vial then shatters and releases a noxious cloud that lingers for 1 minute before dissipating completely. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Due to the forbidden nature of its creation, this item requires a character at least level 35 to wield it.",
    "vendorReason": "The Waterdeep Market houses rare and ancient artifacts, including items with dark origins like the Mk.71 Forbidden Vial of Nightshade Bloom.",
    "shippingDetail": "Ships under cover of night to prevent unwanted attention from deities or fiends.",
    "usage": {
      "activation": "Requires a thrown attack action.",
      "duration": "Instantaneous for paralyzing effect; one round duration. For drain vitality, the vial shatters upon use and dissipates in 1 minute.",
      "endsWhen": "The target successfully saves against the save DC or the effect ends naturally after its duration.",
      "charges": "One-time use per short rest for paralysis; one-time use per long rest for drain vitality."
    },
    "priceReason": "The item's rarity, forbidden nature, and limited stock justify a high price in the market.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:48:22.096969+00:00",
    "aiReviewedAt": "2026-07-25T01:48:22.096969+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_stoneheart_watcher": {
    "id": "middle_earth_item_stoneheart_watcher",
    "name": "The Stoneheart Watcher’s Fragment",
    "description": "The Stoneheart Watcher’s Fragment is a jagged, obsidian shard that glows faintly with an ancient pulse. Crafted from the very heart of Middle-earth's oldest ruins, it whispers tales of forgotten battles and lost quests as its surface shifts with the echoes of past conflicts. This fragment grants fleeting visions of historical events relevant to your current quest (1/day) and subtly enhances perception when exploring ancient sites (+5 Perception checks).",
    "category": "equipment",
    "price": 4600,
    "icon": "🗿",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Vision of Past Battles",
      "Enhanced Perception"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision of Past Battles",
        "rules": "When activated, this fragment grants the user a fleeting vision of past battles relevant to their current quest. This effect lasts for 1 minute and provides +5 to Perception checks made within ancient ruins or battlefields."
      },
      {
        "title": "Enhanced Perception",
        "rules": "Passively grants the wielder a +2 bonus to saving throws against fear effects, enhancing their composure in moments of terror."
      }
    ],
    "levelRequirementReason": "The fragment's power is accessible to all adventurers who seek ancient knowledge.",
    "vendorReason": "The Shire Shop specializes in rare artifacts from both modern and ancient times, making it the perfect vendor for such a relic.",
    "shippingDetail": "Shipped via the Pony Express with expedited delivery to all locations within Middle-earth.",
    "usage": {
      "activation": "Activates as a bonus action when used near ancient ruins or battlefields.",
      "duration": "1 minute per use.",
      "endsWhen": "The vision ends after 1 minute, and the fragment can be used again after completing an hour-long rest.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The item's rarity and unique abilities justify its moderate price point in the market.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:47:52.483938+00:00",
    "aiReviewedAt": "2026-07-25T01:47:52.483938+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_rune_of_eldoria": {
    "id": "middle_earth_item_rune_of_eldoria",
    "name": "The Rune of Eldoria’s Lament",
    "description": "The Rune of Eldoria’s Lament is a deeply inscribed mithril rune that glows with a melancholic blue light, whispering tales of ancient Elven kingdoms long lost to time and despair. Crafted by the last runesmiths before Gondor's fall, it weaves sorrow into its very essence, offering those who hold it solace in their darkest hours. This artifact not only restores vitality but also soothes the soul, granting peace amidst overwhelming grief.",
    "category": "consumables",
    "price": 1200,
    "icon": "💔",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Sorrow's Embrace",
      "Empathy's Shield"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sorrow's Embrace",
        "rules": "Activates as a bonus action. Restores 20 hit points and removes one level of exhaustion. The rune’s melancholic light pulses, resonating with the user's sorrow, granting advantage on saving throws against despair effects for 1 hour."
      },
      {
        "title": "Empathy's Shield",
        "rules": "Passively grants advantage on persuasion checks when appealing to empathy or trying to comfort others. The rune amplifies emotions, making the wielder more attuned to the feelings of those around them, thereby enhancing their ability to connect and console."
      }
    ],
    "levelRequirementReason": "This item is accessible to all levels as it provides a universal form of comfort and protection.",
    "vendorReason": "The Elven Market sells rare relics that bridge the gap between past and present, making this rune an ideal offering for their customers seeking connection with ancient lore.",
    "shippingDetail": "Shipped via a swift flying ship, ensuring the rune arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action or passive effect.",
      "duration": "Instantaneous activation; effect against despair lasts for 1 hour.",
      "endsWhen": "The user's hit points are restored and exhaustion is removed; ends upon death of the wielder.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This rune’s profound emotional impact, crafted by ancient Elven artisans, justifies its high price in experience points.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:47:46.980925+00:00",
    "aiReviewedAt": "2026-07-25T01:47:46.980925+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_scroll_of_the_watchful_eye": {
    "id": "middle_earth_item_scroll_of_the_watchful_eye",
    "name": "The Scroll of the Watchful Eye - Mk.III",
    "description": "The Scroll of the Watchful Eye - Mk.III is a tightly rolled parchment bound with mithril thread, etched with intricate runes that depict an ever-vigilant eye. Crafted by master scouts of Moria, this scroll is said to guide the user through perilous landscapes by revealing hidden dangers and secret paths. It whispers tactical advice in times of combat, granting a +10 bonus to Survival checks when navigating treacherous terrains and a 'warning' effect that alerts you to nearby perils within 50 meters.",
    "category": "curiosities",
    "price": 74000,
    "icon": "👁️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "+10 to Survival checks in wilderness environments",
      "Grants a 'warning' effect when within 50 meters of dangerous creatures or traps"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_transport",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Survival Bonus",
        "rules": "Activates passively while the user is navigating treacherous landscapes. The +10 bonus to Survival checks applies only in wilderness environments and does not stack with other bonuses."
      },
      {
        "title": "Danger Warning",
        "rules": "Passive effect that activates when within 50 meters of dangerous creatures or traps. Grants a 'warning' condition, which lasts until the danger is neutralized or moves beyond 50 meters. The user can take a bonus action to dismiss this warning."
      }
    ],
    "levelRequirementReason": "All adventurers need some form of guidance in their early stages of exploration and combat.",
    "vendorReason": "The dwarves of Moria are renowned for their expertise in crafting scrolls that aid in survival, making it only fitting they sell this updated version.",
    "shippingDetail": "Shipped via the trusted dragon couriers who ensure the scroll arrives swiftly and safely.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous warning upon entering range of danger, passive bonus always active in wilderness environments.",
      "endsWhen": "Dismissible by taking a bonus action or when the source of danger is neutralized or moves beyond 50 meters.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its legendary status and the expertise required in crafting such a scroll.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T01:48:07.684230+00:00",
    "aiReviewedAt": "2026-07-25T01:48:07.684230+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_verdant_crowneds_cloak": {
    "id": "faerun_item_verdant_crowneds_cloak",
    "name": "Verdant Crowned's Cloak of the Verdant Grove",
    "description": "The Verdant Crowned's Cloak of the Verdant Grove is a cloak woven from moss and starlight, radiating a gentle warmth that soothes the soul. As you wear it within the forest, fleeting glimpses into the paths favored by ancient spirits whisper their wisdom to your heart, bolstering your courage against shadowy threats. The fabric itself seems alive, its green hue shifting with the seasons, and each star in the sky is reflected upon it like a celestial map.",
    "category": "equipment",
    "price": 4600,
    "icon": "🌿",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Poison Resistance",
      "Spiritual Guidance"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "While wearing this cloak, you have resistance to poison damage. This effect persists for the duration of your time in a forest biome."
      },
      {
        "title": "Spiritual Guidance",
        "rules": "As an action, you can call upon the spirits within the cloak to guide you through hidden paths. Once per short or long rest, this ability grants you advantage on one Wisdom (Perception) check related to detecting secret doors, traps, or hidden passages."
      }
    ],
    "levelRequirementReason": "The cloak's spiritual guidance requires a deep connection with the natural world, which is only achieved at higher levels.",
    "vendorReason": "Waterdeep Market is known for its diverse array of magical artifacts and rare items, including those that harness nature's power.",
    "shippingDetail": "Delivered swiftly by a winged messenger, ensuring the cloak reaches you in pristine condition within days.",
    "usage": {
      "activation": "Action or reaction to call upon spiritual guidance; passive poison resistance while in a forest.",
      "duration": "Passive effect until leaving a forest biome; one use of spiritual guidance per short or long rest.",
      "endsWhen": "Leaving the forest, using another action to call on the cloak's abilities, or resting without using it.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the magical energies woven into its fabric.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:49:08.081158+00:00",
    "aiReviewedAt": "2026-07-25T01:49:08.081158+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_mk_47_shadow_cloaks": {
    "id": "faerun_item_mk_47_shadow_cloaks",
    "name": "Mk.47 Shadow Cloaks of the Silent Watcher",
    "description": "The Mk.47 Shadow Cloaks of the Silent Watcher are charcoal-grey, etched with runes depicting watchful owls. They whisper secrets to those who listen closely in dimly lit areas, granting near-perfect concealment and enhancing one's awareness of hidden details. These cloaks are said to have been crafted by ancient druids who sought harmony between nature and shadow. Wearing them is akin to becoming a silent sentinel among the night, perfect for those who need to move unseen or unnoticed.",
    "category": "equipment",
    "price": 21000,
    "icon": "🦉",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "near-perfect concealment",
      "whispering secrets"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "dark_horse_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Near-Perfect Concealment",
        "rules": "While wearing these cloaks in dimly lit areas, you gain a +6 bonus to Stealth checks. This effect lasts until the start of your next turn after removing the cloak."
      },
      {
        "title": "Whispering Secrets",
        "rules": "You can use an action to make a Wisdom (Perception) check with advantage when trying to detect hidden creatures or illusions within 30 feet. This effect is usable once per short or long rest."
      }
    ],
    "levelRequirementReason": "The cloaks are designed for all adventurers, not just the most seasoned warriors.",
    "vendorReason": "Sword Coast Traders specialize in rare and exotic items that enhance a character's abilities, making them indispensable to any adventurer.",
    "shippingDetail": "The cloaks are carefully packed and shipped by dark horse cart, ensuring safe arrival at your doorstep within three days.",
    "usage": {
      "activation": "action",
      "duration": "until the start of your next turn after removal",
      "endsWhen": "removing the cloak or ending a short/long rest",
      "charges": "unlimited"
    },
    "priceReason": "The cloaks are crafted with rare materials and ancient druidic magic, ensuring their quality and utility justify this price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T14:34:47.059181+00:00",
    "aiReviewedAt": "2026-07-25T14:34:47.059181+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_shadow_rune_of_the_lost_trail": {
    "id": "faerun_item_shadow_rune_of_the_lost_trail",
    "name": "Shadow Rune of the Lost Trail - Consumable",
    "description": "The Shadow Rune of the Lost Trail is a cold, pulsating obsidian talisman that burns with an eerie, spectral light. Upon ingestion, it momentarily pierces the veil of darkness, illuminating treacherous paths and dispelling magical concealment within a narrow radius around its bearer. The rune's shadowy glow can be seen even through thick fog or impenetrable shadows, making it invaluable for adventurers venturing into the deepest, most unforgiving lands.",
    "category": "consumables",
    "price": 1200,
    "icon": "🌑",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Illuminates Hidden Trails",
      "Disrupts Magical Concealment"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "swift courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illuminates Hidden Trails",
        "rules": "When consumed, this rune illuminates a 10-foot radius area in pitch darkness for up to 1 minute. It reveals hidden trails and obstacles, but does not provide light beyond the specified range."
      },
      {
        "title": "Disrupts Magical Concealment",
        "rules": "For the duration of its effect, this rune disrupts any active magical concealment within a 20-foot radius for up to 1 minute. Any creature affected by such concealment must make a DC 15 Wisdom saving throw or be seen as clearly as in daylight."
      }
    ],
    "levelRequirementReason": "Adventurers below level 5 may lack the experience needed to handle the rune's shadowy magic without risk.",
    "vendorReason": "Baldur, ever the benevolent patron of adventurers, ensures that even the most obscure and powerful items are available through his bazaar.",
    "shippingDetail": "Ships via swift courier for expedited delivery directly to your door.",
    "usage": {
      "activation": "Eaten as a bonus action.",
      "duration": "1 minute.",
      "endsWhen": "The duration expires or the consumer is incapacitated, at which point it is expended.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted from rare shadowrunes and imbued with potent arcane energies, this rune commands a high price for its utility in dark and perilous terrains.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T15:14:11.949017+00:00",
    "aiReviewedAt": "2026-07-25T15:14:11.949017+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_the-abyssal-resonance-breaker": {
    "id": "warhammer_item_the-abyssal-resonance-breaker",
    "name": "The Abyssal Resonance Breaker",
    "description": "A shattered warhammer crafted from solidified chaos, pulsing with a sickly green light. It emits a constant tremor that disrupts enemy formations and amplifies your own attacks—a testament to the unending conflict within.",
    "category": "equipment",
    "price": 110000,
    "icon": "🔥",
    "stock": 35,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Increases attack damage by 25%",
      "Chance to inflict 'Chaos Wound' on hit (deals extra damage over time)",
      "Reduces enemy armor rating by 10%",
      "Causes minor tremors around the wielder"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Hellhound Courier",
    "levelRequirement": 35
  },
  "warhammer_item_twilight-sentinel-medallion": {
    "id": "warhammer_item_twilight-sentinel-medallion",
    "name": "Twilight Sentinel Medallion of Broken Wills",
    "description": "The Twilight Sentinel Medallion of Broken Wills is a heavy, silver medallion inlaid with emerald stars and etched with runes from forgotten battles. It whispers the fading memories of countless warriors, offering a chilling reminder of war's psychological toll. This artifact grants the wearer an eerie aura that reduces enemy morale by 30%, and occasionally strikes fear into foes, causing temporary paralysis. Wielders gain +5 to Willpower checks, bolstering their resolve in the face of chaos.",
    "category": "equipment",
    "price": 4600,
    "icon": "🌑",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reduces Enemy Morale",
      "Causes Temporary Paralysis"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Reduced Morale",
        "rules": "The wearer's presence reduces enemy morale by 30% for a duration of 1 minute. This effect ends if the medallion is removed or the wearer drops to 0 hit points."
      },
      {
        "title": "Causes Temporary Paralysis",
        "rules": "Once per short rest, the wearer can attempt to instill terror in an enemy within 60 feet by using a bonus action. The target must succeed on a DC 15 Wisdom saving throw or be paralyzed for 1 minute."
      }
    ],
    "levelRequirementReason": "This medallion is designed to harness the power of twilight and chaos, which requires significant experience and mastery.",
    "vendorReason": "The Chaos Dealer specializes in items that manipulate fear and chaos, making this medallion a perfect fit for their inventory.",
    "shippingDetail": "Ships via the Shadow Messenger with expedited delivery to ensure it arrives under cover of darkness.",
    "usage": {
      "activation": "Bonus action (to instill terror)",
      "duration": "Instantaneous effect, lasts until the end of the encounter or until removed",
      "endsWhen": "When the wearer removes or drops the medallion, or if the wearer is reduced to 0 hit points.",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "The medallion's rare crafting materials and unique powers justify its moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:49:28.615167+00:00",
    "aiReviewedAt": "2026-07-25T01:49:28.615167+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_mk-78-purified-medals-of-desolation": {
    "id": "warhammer_item_mk-78-purified-medals-of-desolation",
    "name": "Mk.78 Purified Medals of Desolation",
    "description": "The Mk.78 Purified Medals of Desolation are crafted from the very essence of a forgotten battlefield, their surfaces etched with ancient runes that whisper tales of war and peace. These medals, imbued with the desolate calm of past battles, offer protection against the worst effects of combat, but at a terrible price. They grant +10 temporary defense to physical attacks and reduce the duration of negative status effects by 50%, ensuring their wearer remains steadfast in the face of chaos.",
    "category": "consumables",
    "price": 350,
    "icon": "🛡️",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Defense Amplification",
      "Status Effect Mitigation"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Winged Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Defense Amplification",
        "rules": "Activates on contact with a physical attack, providing +10 temporary defense. This effect lasts for 1 minute or until the wearer is hit by another physical attack."
      },
      {
        "title": "Status Effect Mitigation",
        "rules": "Reduces the duration of any negative status effects by 50%. This effect can be used once per long rest and has no save DC required. It functions passively, reducing the duration when applicable."
      }
    ],
    "levelRequirementReason": "The item's resilience and complexity demand a higher level to ensure it is balanced for player use.",
    "vendorReason": "The Imperial Armory stock this item due to its strategic importance in equipping warriors facing the harshest battles.",
    "shippingDetail": "Ships via Winged Courier within 3 days of purchase, arriving at your doorstep under secure conditions.",
    "usage": {
      "activation": "Passive effect upon contact with a physical attack.",
      "duration": "1 minute or until the wearer is hit by another physical attack.",
      "endsWhen": "The wearer is hit by another physical attack or the duration expires.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity, craftsmanship, and strategic value justify its price of 1000 XP.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-25T01:49:49.428625+00:00",
    "aiReviewedAt": "2026-07-25T01:49:49.428625+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_spectral_halo_render": {
    "id": "kivotos_item_spectral_halo_render",
    "name": "The Spectral Halo Render of Veritas Hall",
    "description": "The Spectral Halo Render of Veritas Hall is a shimmering band made from threads woven by the ambitions of past students and the light of Veritas Academy itself. It grants its wearer heightened perception, allowing them to discern subtle truths others miss, and emits an ethereal glow that subtly commands attention without being overtly authoritative. Rumors suggest it can briefly shield against logical paradoxes, though prolonged use may cause disorienting visions.",
    "category": "equipment",
    "price": 1200,
    "icon": "✨",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "heightened perception",
      "brief resistance to paradox"
    ],
    "vendor": "student_store",
    "shippedBy": "drone_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Heightened Perception",
        "rules": "The wearer gains advantage on Intelligence (Insight) checks and can see through illusions within a 30-foot radius for the duration. This effect lasts 1 minute, and expends a use from its limited daily supply."
      },
      {
        "title": "Brief Resistance to Paradox",
        "rules": "The wearer gains immunity to logical paradoxes for 1 hour upon activation. This effect can be used once per day. The item is destroyed if exposed to a paradox beyond the wielder's understanding."
      }
    ],
    "levelRequirementReason": "Wielding the Spectral Halo requires a deep understanding of logic and perception, fitting only those who have reached an advanced level in their studies.",
    "vendorReason": "The student store is a hub for academic artifacts that enhance learning and research, making it the ideal vendor for this item.",
    "shippingDetail": "Delivered by drone directly to your door, ensuring swift arrival of this delicate artifact.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until expended",
      "endsWhen": "The effect ends when the duration expires or the item is destroyed upon exposure to a logical paradox beyond the wielder's comprehension.",
      "charges": "Limited daily supply of uses"
    },
    "priceReason": "This price reflects the rarity and unique properties of the Spectral Halo, requiring significant resources to replicate.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:49:38.942102+00:00",
    "aiReviewedAt": "2026-07-25T01:49:38.942102+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_crimson_render_of_discord": {
    "id": "kivotos_item_crimson_render_of_discord",
    "name": "The Crimson Render of Discord's Echoes",
    "description": "The Crimson Render of Discord's Echoes is a heavy brass band adorned with unsettling sigils that pulse with an eerie, discordant energy. Crafted from ancient brass mined near a cursed forge, it whispers malevolent secrets to those who wear it too long. When activated, it subtly distorts the perceptions of nearby creatures, eroding their trust and creating brief moments of confusion. Rumor has it that a single use can leave listeners questioning reality itself.",
    "category": "equipment",
    "price": 4600,
    "icon": "😈",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "distorted perception",
      "eroded trust"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Distorted Perception (Area Effect)",
        "rules": "When activated, the item creates an area of distorted perception within a 10-foot radius. Creatures in this area must succeed on a DC 15 Wisdom saving throw or be stunned for 1 round as their senses are overwhelmed by conflicting images and sounds."
      },
      {
        "title": "Eroded Trust",
        "rules": "For the duration of one hour, any creature that interacts with an individual wearing this item has disadvantage on Charisma (Persuasion) checks. The effect ends when the wearer removes the item or completes a long rest."
      }
    ],
    "levelRequirementReason": "The item's subtle magic requires only basic concentration to activate, but its effects are potent enough that even the lowliest adventurers should be wary.",
    "vendorReason": "Club Supply caters to adventurers seeking unique and potentially dangerous trinkets for their escapades.",
    "shippingDetail": "Express Delivery ensures the item arrives swiftly, but it cannot deliver during night-only stock periods.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until removed or a long rest is completed",
      "endsWhen": "The wearer removes the item or completes a long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at this price, it reflects the item's subtle but potent magical properties and its potential to significantly impact social interactions.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T01:49:46.714155+00:00",
    "aiReviewedAt": "2026-07-25T01:49:46.714155+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_honor_bands_mk68": {
    "id": "kivotos_item_honor_bands_mk68",
    "name": "Honor Bands MK.68 - The Citadel Protocol",
    "description": "The Honor Bands MK.68 - The Citadel Protocol are meticulously forged from the strictest protocols of the academy's honor system, each band a testament to unwavering discipline and integrity. Crafted with unyielding discipline, they reflect an aura that sharpens focus and enhances academic performance in all its forms. While some suspect these bands subtly mold one’s thoughts, their true power lies in instilling a sense of purpose and resolve into the wearer's mind.",
    "category": "equipment",
    "price": 21000,
    "icon": "🏅",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "enhanced focus",
      "academic prowess boost"
    ],
    "vendor": "academy_armory",
    "shippedBy": "tracked_delivery",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Enhanced Focus",
        "rules": "The wearer gains advantage on concentration checks for the duration. This effect lasts until the end of their next long rest."
      },
      {
        "title": "Academic Prowess Boost",
        "rules": "For a short period, the wearer's Intelligence and Wisdom (Insight) checks are made with advantage. The effect ends when the user completes a short or long rest."
      }
    ],
    "levelRequirementReason": "These bands require a solid foundation of discipline and focus, which typically takes four levels to achieve.",
    "vendorReason": "The academy armory specializes in items that aid students in their rigorous studies and training.",
    "shippingDetail": "Ships within the next academic term, ensuring they are delivered before the next exam period begins.",
    "usage": {
      "activation": "Passive effect upon donning the bands.",
      "duration": "Lasts until the end of the wearer's next long rest.",
      "endsWhen": "The effect ends when the user completes a short or long rest.",
      "charges": "Unlimited, as it is a passive effect."
    },
    "priceReason": "Crafted from strict protocols and disciplined craftsmanship, these bands are priced to reflect their unique benefits and limited availability.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:50:21.112135+00:00",
    "aiReviewedAt": "2026-07-25T01:50:21.112135+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_gravitic_resonance_bearer": {
    "id": "doughnut_hole_item_gravitic_resonance_bearer",
    "name": "The Chronal Displacement Bearer",
    "description": "The Chronal Displacement Bearer is a pulsating obsidian orb, its surface etched with the fractured patterns of collapsed timelines. This ancient artifact hums with the residual echoes of past realities, allowing you to briefly invert local gravity for incredible leaps and maneuvers. While the effect lasts only a fleeting instant, prolonged use risks attracting the attention of the Fated Place’s currents, as it seems the very fabric of time itself shifts around its wielder.",
    "category": "equipment",
    "price": 4600,
    "icon": "🚀",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Leap",
      "Gravitational Resistance"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Leap",
        "rules": "Activate as a bonus action to invert local gravity for 5 seconds. Increases jump height by 30%. The orb can be used once per short or long rest."
      },
      {
        "title": "Gravitational Resistance",
        "rules": "While the Chronal Displacement Bearer is active, you gain resistance to falling damage and have advantage on saving throws against being pushed or pulled. This effect lasts for the duration of the gravity inversion."
      }
    ],
    "levelRequirementReason": "This item allows even low-level characters to experience the thrill of defying gravity.",
    "vendorReason": "Void Vendor is known for offering curiosities from the Fated Place, and this artifact fits perfectly with their inventory.",
    "shippingDetail": "Ships via the Void Courier; delivery may be delayed by one day due to cosmic interference.",
    "usage": {
      "activation": "Bonus action",
      "duration": "5 seconds",
      "endsWhen": "Effect ends when the duration expires or you take any action other than a bonus action.",
      "charges": "Recharge on a long rest"
    },
    "priceReason": "The Chronal Displacement Bearer's rarity and unique functionality justify its fair value in XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:50:41.096095+00:00",
    "aiReviewedAt": "2026-07-25T01:50:41.096095+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_unholy_nulls_of_descent": {
    "id": "doughnut_hole_item_unholy_nulls_of_descent",
    "name": "The Unholy Nulls of Descent",
    "description": "The Unholy Nulls of Descent are fractured, grey spheres that seem to pull at the very fabric of existence. Holding one grants brief visions of possible futures, offering glimpses into the void's depths, but prolonged exposure can warp your perception and leave you vulnerable to unearthly whispers. These relics are crafted from a dark, unholy substance found in the deepest chasms of forgotten realms, and their touch is as chilling as the void itself.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🌀",
    "stock": 21,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Brief Visions of Futures",
      "Vulnerability to Whispers"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Shadow Cartographer",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Brief Visions of Futures",
        "rules": "Passive effect. Grants random visions of possible futures for 1 minute. After this duration, the user must succeed on a DC 15 Wisdom saving throw or be subjected to a minor hallucination that lasts until the start of their next turn."
      },
      {
        "title": "Vulnerability to Whispers",
        "rules": "While holding the Unholy Nulls of Descent, you are vulnerable to any mind-altering effect. This vulnerability persists for 1 minute after ceasing to hold the item unless a successful DC 15 Wisdom saving throw is made."
      }
    ],
    "levelRequirementReason": "Only those with significant experience and mental fortitude can handle these relics without succumbing to their malevolent influence.",
    "vendorReason": "Hole Hawker has a vast network of contacts in the underworld, allowing them access to rare and dangerous artifacts like the Unholy Nulls of Descent.",
    "shippingDetail": "Ships via shadow travel, ensuring secrecy but with potential delays due to unpredictable routes.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute or until the user's next turn after ceasing to hold it.",
      "endsWhen": "The effect ends when you stop holding the item and successfully make a Wisdom saving throw.",
      "charges": "Unlimited, but only one effect operates at a time."
    },
    "priceReason": "The Unholy Nulls of Descent are priced high due to their rarity, dark craftsmanship, and the risks they pose to any who wield them.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T14:35:27.106361+00:00",
    "aiReviewedAt": "2026-07-25T14:35:27.106361+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_inverted_gravity_prism_97": {
    "id": "doughnut_hole_item_inverted_gravity_prism_97",
    "name": "The Inverted Gravity Prism - Mk.97",
    "description": "The Inverted Gravity Prism - Mk.97 is a multifaceted crystal etched with arcane glyphs that seem to defy gravity itself. Crafted from the chaotic energies of Fated Place's gravity wells, this prism channels its volatile power into localized distortions, allowing the user to walk on walls and ceilings with surprising grace. However, the very instability of the prism means it can unpredictably trigger a surge, momentarily turning the surrounding area into an inverted gravitational field.",
    "category": "equipment",
    "price": 28000,
    "icon": "🧱",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Wall Walker",
      "Gravity Surge"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Postman",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Wall Walker",
        "rules": "As a bonus action, you can activate the prism to allow you to walk on walls and ceilings. This effect lasts for 10 seconds or until you drop prone, whichever comes first."
      },
      {
        "title": "Gravity Surge",
        "rules": "There is a 25% chance that when you use Wall Walker, a localized gravity surge occurs. During this surge, the area around you becomes unstable and grants you temporary hit points equal to your level + your Constitution modifier for 1 minute."
      }
    ],
    "levelRequirementReason": "This item requires a minimum character level of 4 due to its complex arcane properties.",
    "vendorReason": "Center Seller specializes in rare and exotic magical items, including those that manipulate the very fabric of gravity like this prism.",
    "shippingDetail": "The Dimensional Postman ensures secure delivery through interdimensional transit. Items are delivered within a week but must be collected personally from the Center Seller's location.",
    "usage": {
      "activation": "Bonus action to activate and use Wall Walker, which ends when you drop prone or after 10 seconds.",
      "duration": "10 seconds or until you drop prone",
      "endsWhen": "Dropping prone or after 10 seconds",
      "charges": "Unlimited uses"
    },
    "priceReason": "The prism's unique and volatile nature, combined with its rarity and the complexity of its construction, justify a high price point.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T14:35:41.069135+00:00",
    "aiReviewedAt": "2026-07-25T14:35:41.069135+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronos_resonance_mark": {
    "id": "pokemon_item_chronos_resonance_mark",
    "name": "The Chronos Resonance Mark",
    "description": "The Chronos Resonance Mark, a shimmering obsidian band etched with ancient glyphs that whisper of time's fluidity, subtly bends reality around its wearer. For fleeting moments, it accelerates their Pokémon’s evolution, granting a surge in attack and speed but also risks unpredictable mutations. This relic is forged from the very essence of the league’s most dynamic battles, making it a mythic treasure for those willing to push their limits.",
    "category": "consumables",
    "price": 370000,
    "icon": "⏳",
    "stock": 23,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Accelerated Evolution",
      "Increased Risk of Mutation"
    ],
    "vendor": "league_store",
    "shippedBy": "express_delivery",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Accelerated Evolution",
        "rules": "Activates as an action. The wearer’s Pokémon gains +2 to attack and speed for the next 5 turns. This effect ends if the Pokémon is hit by an attack or if it uses a move that requires its turn."
      },
      {
        "title": "Increased Risk of Mutation",
        "rules": "There's a 10% chance each round that the wearer’s Pokémon will undergo a random evolution, which can be either advantageous or detrimental. This risk persists for one minute after activation and is cumulative if used again before the cooldown ends."
      }
    ],
    "levelRequirementReason": "Only those with significant experience in battling can harness the unstable energy of the Chronos Resonance Mark without causing catastrophic side effects.",
    "vendorReason": "The league store stocks this item as it is a direct offering from the Pokémon League, ensuring its authenticity and rarity among trainers.",
    "shippingDetail": "Ships within one league day via express courier with a special delivery guarantee.",
    "usage": {
      "activation": "Action",
      "duration": "5 turns of enhanced attack and speed",
      "endsWhen": "The Pokémon is hit by an attack or uses its turn, or after 5 turns",
      "charges": "Unlimited"
    },
    "priceReason": "This mythic item reflects the league’s commitment to providing trainers with unparalleled tools for their journeys.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:51:06.432280+00:00",
    "aiReviewedAt": "2026-07-25T01:51:06.432280+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shadowdrift_amulet_7": {
    "id": "pokemon_item_shadowdrift_amulet_7",
    "name": "The Shadowdrift Amulet of Seven Echoes",
    "description": "The Shadowdrift Amulet of Seven Echoes, crafted from moonlit glass and encased in a lattice of spectral threads, is said to house the spirits of those who have lost their Pokémon. When worn, it allows for the creation of a ghostly duplicate that can assist in battle. This spectral clone fights alongside the wearer for three turns before fading into shadow, leaving behind only a lingering presence. Its touch is cold, and its eyes glow with an eerie luminescence, making it a formidable ally against dark forces.",
    "category": "equipment",
    "price": 4600,
    "icon": "👻",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Spectral Clone",
      "Moonlit Defense"
    ],
    "vendor": "safari_shop",
    "shippedBy": "swift_feather Courier Service",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Spectral Clone",
        "rules": "Activates as a bonus action. Creates a spectral clone of the wearer's Pokémon that can engage in combat for three turns. The clone has half the hit points and ability scores of the original, but it is immune to physical damage. It cannot attack with physical weapons or cast spells. Ends when the clone takes any damage or after three turns."
      },
      {
        "title": "Moonlit Defense",
        "rules": "The wearer gains immunity to confusion and other mental status effects while wearing this amulet. Additionally, their Intelligence (Arcana) checks related to psychic energy are made at advantage. This effect lasts until the end of your next turn after activation."
      }
    ],
    "levelRequirementReason": "Only those who have experienced loss and gained strength from it can wield this amulet effectively.",
    "vendorReason": "The Safari Shop has a unique collection of items that honor the bond between trainer and Pokémon, making it the ideal vendor for such an artifact.",
    "shippingDetail": "Ships via swift courier service, delivered within three days to any location within the region.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous; lasts until the end of your next turn after activation or when the spectral clone takes damage.",
      "endsWhen": "The clone is destroyed by taking any damage, or it fades into shadow after three turns.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare materials and imbued with powerful psychic energies, the amulet's price reflects its rarity and utility.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:51:19.681681+00:00",
    "aiReviewedAt": "2026-07-25T01:51:19.681681+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_kryptonian_echo_shard": {
    "id": "pokemon_item_kryptonian_echo_shard",
    "name": "The Kryptonian Echo Shard of Temporal Resonance",
    "description": "The Kryptonian Echo Shard of Temporal Resonance is a fractured fragment from an ancient meteorite that crashed into this plane, believed to have come from a realm where time flows like liquid. This relic allows your Pokémon to briefly phase through attacks and reflect projectiles back at their source with unnerving precision, creating a ripple effect in the battlefield. Each use leaves a shimmering trail of temporal energy behind it, as if the shards themselves whisper secrets of the cosmos.",
    "category": "curiosities",
    "price": 360,
    "icon": "💫",
    "stock": 75,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Temporal Phase",
      "Reflective Shield"
    ],
    "vendor": "pokemart",
    "shippedBy": "express_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Temporal Phase",
        "rules": "As an action, your Pokémon can phase through one attack per battle. This effect lasts for a number of turns equal to half its level (rounded down), and it ends if the Pokémon takes damage or uses another action that requires concentration."
      },
      {
        "title": "Reflective Shield",
        "rules": "Your Pokémon has a 20% chance to reflect projectiles back at their origin when hit by a ranged attack. This effect has a cooldown of one minute and is limited to three uses per day."
      }
    ],
    "levelRequirementReason": "This shard requires the user's Pokémon to be at least level 15 to effectively harness its temporal energies.",
    "vendorReason": "Pokemart is known for offering a wide array of items that can enhance the abilities of Pokémon, making this shard an ideal addition to their collection.",
    "shippingDetail": "Ships within one business day and includes free insurance on shipments above 500 XP value.",
    "usage": {
      "activation": "Action",
      "duration": "Number of turns equal to half the Pokémon's level (rounded down)",
      "endsWhen": "The Pokémon takes damage or uses another action requiring concentration, or if the effect is interrupted by a spell or ability with a save DC of 15.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's unique properties and the level requirement justify its price in XP.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-25T01:51:41.942234+00:00",
    "aiReviewedAt": "2026-07-25T01:51:41.942234+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_karmic_bearer_of_resonance": {
    "id": "kivotos_item_karmic_bearer_of_resonance",
    "name": "The Karmic Bearer's Cards - Semester Echoes",
    "description": "The Karmic Bearer's Cards - Semester Echoes shimmer with a faint, karmic light, their iridescent edges catching the dim glow of the academy library. When played in sequence during a study session, these cards amplify the emotional resonance among fellow students for an entire semester, potentially swaying decisions and actions. However, prolonged use risks unpredictable ripple effects that could destabilize the very fabric of campus life. Each set is a limited daily stock, ensuring that only those with the heart—and perhaps the soul—to wield them can partake in their power.",
    "category": "consumables",
    "price": 4600,
    "icon": "✨",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "emotional resonance amplification",
      "academic influence"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery - Standard",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Emotional Resonance Amplification",
        "rules": "When played, these cards temporarily amplify the emotional resonance of surrounding students for a duration of one semester. This effect has no set duration within a single session but is limited to once per day. Any student subjected to this amplification may experience heightened empathy or a shift in their usual behavior patterns."
      },
      {
        "title": "Academic Influence",
        "rules": "There's a 10% chance that the amplified emotions will inadvertently trigger minor academic disruptions, such as forgotten assignments or unexpected study group collaborations. These disruptions are harmless but can significantly affect one’s semester progress if not managed carefully."
      }
    ],
    "levelRequirementReason": "Suitable for students with a grasp of basic emotional manipulation and the discipline to wield such power responsibly.",
    "vendorReason": "The Student Store, known for its academic supplies, offers these unique tools that enhance study sessions without disrupting daily routines.",
    "shippingDetail": "Delivered via automated drones, ensuring timely arrival to eager hands across campus.",
    "usage": {
      "activation": "Requires a short rest and is activated once per day.",
      "duration": "One semester (180 days) of amplified emotional resonance among students.",
      "endsWhen": "The effect ends naturally after one semester or when the card set is exhausted.",
      "charges": "Limited to 3 uses daily, with a full recharge at midnight."
    },
    "priceReason": "Balanced price reflects its limited daily use and the potential for significant academic influence over an extended period.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T01:52:00.368598+00:00",
    "aiReviewedAt": "2026-07-25T01:52:00.368598+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk_77_semester_cards": {
    "id": "kivotos_item_mk_77_semester_cards",
    "name": "Mk.77 Semester Cards - Academy Protocol",
    "description": "Mk.77 Semester Cards - Academy Protocol are meticulously crafted by the Academy Armory, each card emblazoned with the city's founding runes. Upon activation, these cards induce a localized temporal ripple that momentarily immobilizes students within a five-foot radius for three seconds, allowing quick recoveries of lost items or strategic maneuvers. The cards also grant the wielder +10 agility temporarily, making them an indispensable tool for both mundane and extraordinary situations.",
    "category": "equipment",
    "price": 21000,
    "icon": "⚙️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Temporal Freeze",
      "Agility Boost"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Express Courier - Priority",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Freeze",
        "rules": "Activates as a bonus action within the Academy. Targets all students within a five-foot radius, freezing them in place for three seconds. There is a 25% chance to steal a random item from the frozen student. The effect ends if an opposing force moves into the area or after its duration expires."
      },
      {
        "title": "Agility Boost",
        "rules": "Grants +10 agility to the user for one turn upon activation, enhancing their dexterity and reflexes during the localized temporal anomaly. This bonus does not stack with other agility-boosting effects. The effect ends when the duration of the Temporal Freeze expires or if the wielder drops the cards."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure users can handle the risk associated with temporal distortions.",
    "vendorReason": "The Academy Armory is responsible for crafting and supplying tools that maintain order within the city, making them the appropriate vendor for these cards.",
    "shippingDetail": "Ships immediately with Express Courier service ensuring timely delivery.",
    "usage": {
      "activation": "Bonus action",
      "duration": "3 seconds per activation",
      "endsWhen": "Duration expires or an opposing force enters the area",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced price considers the item's rarity and utility within the Academy environment.",
    "priceOriginal": 1750,
    "priceReviewedAt": "2026-07-25T01:51:27.779974+00:00",
    "aiReviewedAt": "2026-07-25T01:51:27.779974+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_perfect_notes_26631_518": {
    "id": "kivotos_item_halo_of_perfect_notes_26631_518",
    "name": "Halo of Perfect Notes - The Composer's Blessing",
    "description": "The Halo of Perfect Notes - The Composer's Blessing is a shimmering crown of silver and brass, its surface etched with intricate musical patterns. Forged in the heart of a composer’s dreams by the legendary artisan Pauline, this artifact amplifies the wearer’s performance to perfection, creating an aura that harmonizes soundscapes around them. It subtly influences listeners' emotions through its melodic resonance, enhancing concentration and creativity within a 30-foot radius.",
    "category": "premium",
    "price": 100000,
    "icon": "🎶",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Enhanced Musical Performance",
      "Harmonic Aura"
    ],
    "vendor": "club_supply",
    "shippedBy": "Royal Messenger - Platinum Service",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Enhanced Musical Performance",
        "rules": "The wearer’s proficiency in musical instruments is increased by two steps. This effect lasts until the end of their next long rest."
      },
      {
        "title": "Harmonic Aura",
        "rules": "Creates a 30-foot radius area around the wearer where noise and distractions are reduced by half, for a duration of 10 minutes per use, usable once every short or long rest."
      }
    ],
    "levelRequirementReason": "This item requires significant magical power to wield effectively.",
    "vendorReason": "Club Supply specializes in unique and powerful artifacts that enhance performance and creativity.",
    "shippingDetail": "Delivered with utmost care, ensuring the halo arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous activation; can be used once per short or long rest.",
      "duration": "10 minutes per use",
      "endsWhen": "The end of a long rest ends both effects.",
      "charges": "Unlimited uses, but only one effect can be active at a time."
    },
    "priceReason": "This legendary item combines potent magical properties with unique craftsmanship, making it an invaluable asset for high-level performers and composers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:51:36.502584+00:00",
    "aiReviewedAt": "2026-07-25T01:51:36.502584+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_compressed_echoes_of_memories": {
    "id": "internet_item_compressed_echoes_of_memories",
    "name": "Compressed Echoes of Memories - Mk.47",
    "description": "Compressed Echoes of Memories - Mk.47 are shimmering, digital shards that hum with the echoes of long-forgotten internet memes and viral trends. When consumed, they transport the user to a fleeting, digitized ghost town where obsolete content lingers. For a moment, the consumer is ensnared by obsessive nostalgia and gains an unsettling ability to predict short-lived internet fads, though at the cost of hearing persistent dial-up modem sounds.",
    "category": "consumables",
    "price": 1200,
    "icon": "✨",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Obsessive Nostalgia",
      "Internet Fad Prediction"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Obsessive Nostalgia",
        "rules": "The consumer becomes temporarily fixated on a random viral trend from the past. This obsession grants +10% chance to predict trending hashtags for 60 seconds, but leaves them vulnerable to minor auditory hallucinations of dial-up modem sounds."
      },
      {
        "title": "Internet Fad Prediction",
        "rules": "For 60 seconds after consumption, the user gains a +10% bonus to Wisdom (Insight) checks made to predict short-lived internet fads. This effect ends if the consumer becomes aware of a different viral trend or if they are distracted by another source."
      }
    ],
    "levelRequirementReason": "Requires significant mental acuity and experience with digital trends to handle the effects without becoming overwhelmed.",
    "vendorReason": "Data Dealer specializes in unusual and ephemeral items related to technology and data streams, making this item a natural fit.",
    "shippingDetail": "Delivered via a fleet of autonomous drones that ensure timely delivery.",
    "usage": {
      "activation": "Eaten as a consumable.",
      "duration": "60 seconds per use.",
      "endsWhen": "The effect ends when the consumer becomes aware of a different viral trend or is distracted by another source, or if they are no longer in a digital environment.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to ensure that the item's effects provide a unique and balanced experience without overpowered outcomes.",
    "priceOriginal": 789,
    "priceReviewedAt": "2026-07-25T01:51:46.471003+00:00",
    "aiReviewedAt": "2026-07-25T01:51:46.471003+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_ancient_data_eater": {
    "id": "internet_item_the_ancient_data_eater",
    "name": "The Ancient Data Eater - Prototype X9",
    "description": "The Ancient Data Eater - Prototype X9 is a sleek obsidian shard, its surface etched with the remnants of forgotten social networks and digital avatars. This relic absorbs 50% of nearby data streams, instantly clearing network congestion in its vicinity but leaving users feeling slightly paranoid as if their every move is being watched by unseen algorithms. With each use, the shard hums with a faint pulse that resonates through the ether, ensuring blissful silence—temporarily—at the cost of one charge.",
    "category": "equipment",
    "price": 4600,
    "icon": "👾",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Network Congestion Mitigator",
      "Paranoid Pulse"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Secure Packet Transfer",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Network Congestion Mitigator",
        "rules": "When activated as a bonus action, this artifact reduces all nearby data streams by 50%, instantly clearing network congestion within a 30-foot radius. The effect lasts for 1 minute and ends if the user is disconnected from the network or if the shard runs out of charges."
      },
      {
        "title": "Paranoid Pulse",
        "rules": "Upon activation, users gain temporary immunity to targeted online advertising for 24 hours but suffer a -1 penalty to all Wisdom (Perception) checks related to detecting surveillance. This effect lasts until the user is disconnected from the network or if the shard runs out of charges."
      }
    ],
    "levelRequirementReason": "This item's power, while potent, can be utilized by any adventurer who needs immediate relief from data overload.",
    "vendorReason": "The cyber market specializes in cutting-edge and ancient tech, making it the perfect vendor for this relic.",
    "shippingDetail": "Ships via encrypted packets, ensuring safe delivery of the artifact to its destination.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect lasting 1 minute or until network connection is lost",
      "endsWhen": "Network disconnection or shard runs out of charges",
      "charges": "Limited uses per day; recharges on a long rest"
    },
    "priceReason": "This item's rarity, power, and unique ability to mitigate network congestion make it a valuable asset worth its price in XP.",
    "priceOriginal": 12456,
    "priceReviewedAt": "2026-07-25T14:36:53.531193+00:00",
    "aiReviewedAt": "2026-07-25T14:36:53.531193+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mythic_chronometric_flux": {
    "id": "internet_item_mythic_chronometric_flux",
    "name": "Mythic Chronometric Flux - The Timestamp Serpent",
    "description": "The Timestamp Serpent is a swirling vortex of compressed time-data, harvested from the collapse of obsolete servers. Crafted by rogue tech-savvy alchemists in the shadows, this forbidden item allows users to manipulate temporal distortions. It grants momentary control over local time, rewinding blunders or fast-forwarding through tedious content—perfect for those who wish to avoid the pitfalls of modern technology. Handle with extreme caution; paradoxes are a frequent side effect.",
    "category": "forbidden",
    "price": 220000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Rewind Time",
      "Temporal Boost"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Quantum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As an action, you can rewind time by up to 10 seconds for yourself or one creature within 5 feet. This effect has a 24-hour cooldown and causes unpredictable temporal distortions with a 50% chance of negative effects."
      },
      {
        "title": "Temporal Boost",
        "rules": "For the duration of 1 minute, you gain advantage on Dexterity (Stealth) checks and can move up to your speed +10 feet. This effect is limited to once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item is accessible to all characters, as it represents the ability to manipulate technology in a fantastical setting.",
    "vendorReason": "The pixel_shop caters to those who dabble in the arcane and technological realms, making this item an appropriate offering for their clientele.",
    "shippingDetail": "Delivered with a time-stamped note to ensure authenticity.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Rewind Time)",
      "endsWhen": "Ends when the effect is used again or after 24 hours.",
      "charges": "Recharge after 1 day"
    },
    "priceReason": "The price reflects a balanced XP cost, considering its mythic rarity and the balance it brings to the game without overpowered effects.",
    "priceOriginal": 87500,
    "priceReviewedAt": "2026-07-25T14:35:57.517986+00:00",
    "aiReviewedAt": "2026-07-25T14:35:57.517986+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_echoing_heartwood_speaker": {
    "id": "middle_earth_item_echoing_heartwood_speaker",
    "name": "The Echoing Heartwood Speaker",
    "description": "The Echoing Heartwood Speaker is a delicate, intricately carved wooden device, its inlaid silver runes glowing faintly as they resonate with ancient tales and forgotten lore. Crafted from the heartwood of an Ent fallen to time's scythe, it hums with the echoes of lost battles and Elven melodies. When activated, it emits a cacophony of whispers—fragmented stories that can temporarily enhance perception and reveal hidden paths or weaknesses in both terrain and foes.",
    "category": "equipment",
    "price": 4600,
    "icon": "🎶",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "enhances perception",
      "reveals hidden pathways"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Enhanced Perception",
        "rules": "The user gains advantage on Wisdom (Perception) checks for 1 minute upon activation. This effect has a recharge after 5 minutes of inactivity."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "When activated, this item reveals hidden or secret paths within a 60-foot radius. The DC to find these paths is reduced by 10 for the next hour."
      }
    ],
    "levelRequirementReason": "The speaker's ancient magic requires a user with experience and focus.",
    "vendorReason": "Elves have long revered the heartwood of Ents, crafting items that preserve their wisdom and history.",
    "shippingDetail": "Delivered swiftly by winged messengers, ensuring the item arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when the user completes a short rest or the speaker is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from rare heartwood and ancient runes, this item commands a high price for its unique abilities.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:36:23.394819+00:00",
    "aiReviewedAt": "2026-07-25T14:36:23.394819+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_vile_stone_of_grim_silence": {
    "id": "middle_earth_item_vile_stone_of_grim_silence",
    "name": "The Vile Stone of Grim Silence",
    "description": "The Vile Stone of Grim Silence is a chilling obsidian stone pulsating with a palpable sense of dread, allegedly crafted by a dark sorcerer in the depths of Moria. Holding it grants the user unsettling control over sound, momentarily silencing all ambient noise and even dampening magical effects reliant on vocal incantations. The stone's malevolent energy can turn the battlefield into a silent void, making enemies' whispered strategies ineffective for a brief time.",
    "category": "consumables",
    "price": 1200,
    "icon": "🤫",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Silence",
      "Dampen Magic"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "cart_of_stones",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Silence",
        "rules": "Activates as a bonus action. Creates a 3-meter radius of silence around the user, silencing all ambient and magical sounds within its area for 15 seconds. Enemies within the effect have disadvantage on Dexterity (Stealth) checks and Perception (Senses) checks that rely on sound. Ends when the duration expires or if the user drops the stone."
      },
      {
        "title": "Dampen Magic",
        "rules": "Activates as a bonus action. Reduces the effectiveness of any spell with verbal components by 20% for up to 30 seconds, ending early if the user drops the stone or takes any damage. Has no effect on spells without verbal components."
      }
    ],
    "levelRequirementReason": "Requires 18th level due to its dark magic and potential to disrupt combat effectively.",
    "vendorReason": "The dwarves of Moria are well-known for their mastery in crafting items with ancient, malevolent power.",
    "shippingDetail": "Ships via a specially enchanted cart that ensures the stone's dark energy does not affect the delivery route.",
    "usage": {
      "activation": "Bonus action to activate each effect sequentially or independently.",
      "duration": "Silence lasts for 15 seconds, Dampen Magic up to 30 seconds.",
      "endsWhen": "Duration ends when the user drops the stone or takes damage, or if the user activates another effect.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Vile Stone's powerful effects and dark magic justify its high price of 1000 XP.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:52:17.716804+00:00",
    "aiReviewedAt": "2026-07-25T01:52:17.716804+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mk50_silver_mithril_chronometer": {
    "id": "middle_earth_item_mk50_silver_mithril_chronometer",
    "name": "Mk.50 Silver Mithril Chronometer",
    "description": "The Mk.50 Silver Mithril Chronometer, a masterpiece of elven craftsmanship forged from the rarest mithril and adorned with ancient Elven glyphs, measures not mere time but the subtle currents of magic that ripple around an opponent. Its readings can predict the flow of energy in combat, revealing a foe's next strike or pinpointing their magical vulnerabilities. With this tool, a warrior may act a heartbeat ahead of their enemy, enhancing both initiative and reaction speed.",
    "category": "curiosities",
    "price": 21000,
    "icon": "⏱️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveals enemy's attack pattern probability",
      "detects magical weaknesses"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reveal Attack Pattern",
        "rules": "When used as an action, this chronometer reveals the probability of a foe's next attack. This effect lasts for 60 seconds and provides a +2 bonus to initiative rolls."
      },
      {
        "title": "Detect Magical Vulnerabilities",
        "rules": "This ability is active at all times while worn. It grants you advantage on saving throws against magical effects and allows you to make an Intelligence (Arcana) check with advantage when determining the weaknesses of a magical item or creature."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 15 to wield its power effectively.",
    "vendorReason": "The Shire Shop, known for its unique and powerful artifacts, offers this rare chronometer to adventurers who can afford its extraordinary value.",
    "shippingDetail": "Ships via the trusted Pony Express with a two-day delivery guarantee.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "60 seconds when revealed, active at all times while worn",
      "endsWhen": "The effect ends when you take another action to reveal an attack pattern or when the chronometer is removed from your person.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the chronometer's rarity and its unique utility in combat.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T01:52:43.946158+00:00",
    "aiReviewedAt": "2026-07-25T01:52:43.946158+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_whispering_chronal_tear_of_reverie": {
    "id": "doughnut_hole_item_whispering_chronal_tear_of_reverie",
    "name": "Whispering Chronal Tear of Reverie",
    "description": "The Whispering Chronal Tear of Reverie is a shimmering fragment of temporal dissonance, its surface etched with silver lines that ripple like liquid light. When held, it releases fragmented memories and whispers from potential futures, subtly altering your perception of time for 60 seconds. This tear can be found floating in the void, a remnant of forgotten timelines, often appearing without warning to those attuned to the fabric of reality.",
    "category": "consumables",
    "price": 21000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Fragmented Memories"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dimensional Ripple",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When activated as a bonus action, this tear creates a localized distortion in time affecting the wielder. For 60 seconds, your perception of time is altered, causing you to experience fragmented moments from potential futures. There is a 1% chance per hour that a localized time stutter occurs within a 5-foot radius around you. This effect ends when the duration expires or if you are incapacitated."
      },
      {
        "title": "Fragmented Memories",
        "rules": "As this tear distorts time, it also stirs dormant memories and potential futures. You gain advantage on Wisdom (Perception) checks related to detecting temporal anomalies for 1 minute after using the tear. This effect ends when the duration expires or if you are incapacitated."
      }
    ],
    "levelRequirementReason": "This item requires a high level of discipline and understanding of time magic, suitable only for seasoned spellcasters.",
    "vendorReason": "The void vendor is known to trade in items that manipulate reality itself, making this tear an appropriate addition to their stock.",
    "shippingDetail": "Ships directly from the void, arriving with a slight delay as it traverses interdimensional pathways.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "60 seconds",
      "endsWhen": "Incapacitated or duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The tear's rarity and the power it wields make it a valuable but not overpowered addition to any spellcaster's arsenal.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:53:06.305050+00:00",
    "aiReviewedAt": "2026-07-25T01:53:06.305050+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_centrally_aligned_watcher_shard": {
    "id": "doughnut_hole_item_centrally_aligned_watcher_shard",
    "name": "Centrally Aligned Watcher Shard - Mk.III",
    "description": "The Centrally Aligned Watcher Shard, a black obsidian prism, hums with an eerie void energy that seems to pierce through time and space itself. Crafted by ancient watchtowers of the Fated Place, it grants its bearer a subtle awareness of impending anomalies and distortions within the void. Legends speak of this shard's ability to resist the ravages of the void, offering 10% damage mitigation from any void-related effects.",
    "category": "equipment",
    "price": 4600,
    "icon": "👁️",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Anomaly Detection",
      "Void Resistance"
    ],
    "vendor": "center_seller",
    "shippedBy": "Void Packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Anomaly Detection",
        "rules": "The wearer gains passive awareness of anomalies and distortions within a 30-foot radius. This effect functions as an always-on sensory overlay, providing subtle warnings whenever void-related phenomena are detected."
      },
      {
        "title": "Void Resistance",
        "rules": "For every hour the shard is worn, the wearer gains resistance to one type of damage from void effects (acid, cold, or necrotic). This effect stacks with other similar resistances but cannot exceed a total of three types."
      }
    ],
    "levelRequirementReason": "This shard's raw power is harnessed through an ancient ritual that requires the user to be at least level 1.",
    "vendorReason": "The center seller specializes in relics and artifacts from the Fated Place, making this shard a natural addition to their inventory.",
    "shippingDetail": "Delivered via Void Packet, ensuring the item arrives without any interference or tampering.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; active as long as worn.",
      "endsWhen": "Exhaustion occurs after 24 hours of continuous use.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the ancient crafting process contribute to its moderate price, making it accessible yet valuable.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:53:22.019961+00:00",
    "aiReviewedAt": "2026-07-25T01:53:22.019961+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_nobly_decaying_curiosity_essence": {
    "id": "doughnut_hole_item_nobly_decaying_curiosity_essence",
    "name": "Nobly Decaying Curiosity Essence - Variant Gamma",
    "description": "Nobly Decaying Curiosity Essence – Variant Gamma, a gelid, opalescent fluid extracted from ancient void experiments, grants fleeting access to forbidden lore but risks unraveling your mind with every sip. Its iridescent sheen and chaotic pulse evoke the raw essence of chaos itself. Immersing yourself in its depths brings unsettling visions and a brief but profound connection to the void’s dark heart; yet, prolonged exposure may permanently erode your sanity.",
    "category": "curiosities",
    "price": 230000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Forbidden Knowledge",
      "Unsettling Visions"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Phantom Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forbidden Knowledge",
        "rules": "Activates on contact. Grants a single use of temporary access to obscure lore and ancient knowledge for up to 10 minutes. The user must make a DC 25 Intelligence saving throw; failure results in a cumulative -1 penalty to all Intelligence checks until the next dawn."
      },
      {
        "title": "Unsettling Visions",
        "rules": "Passive effect while immersed in the essence. The user gains disadvantage on Wisdom (Perception) checks for 24 hours after use. This effect cannot be resisted and persists until the essence is no longer ingested or the user rests."
      }
    ],
    "levelRequirementReason": "Even the simplest scholars are at risk when meddling with the void’s secrets.",
    "vendorReason": "Hole Hawker deals in all manner of strange and mythic curiosities, including those that challenge sanity.",
    "shippingDetail": "Delivery is perilous; the fluid must be kept refrigerated to maintain its integrity during transit.",
    "usage": {
      "activation": "Passive effect upon contact with the essence. The forbidden knowledge effect requires a single use and lasts for up to 10 minutes.",
      "duration": "10 minutes or until dispelled by the user's willpower.",
      "endsWhen": "The essence is no longer ingested, or the user rests; the unsettling visions persist for 24 hours.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as a mythic item, this essence offers powerful but dangerous knowledge at a cost that reflects its chaotic and unpredictable nature.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T15:21:48.887245+00:00",
    "aiReviewedAt": "2026-07-25T15:21:48.887245+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_pixel_striker_792": {
    "id": "internet_item_pixel_striker_792",
    "name": "Waning Striker’s Packets of Corrupted Algorithmic Echoes",
    "description": "The Waning Striker’s Packets of Corrupted Algorithmic Echoes are iridescent, pulsing with fragmented data streams from forgotten social media trends. Upon activation, they briefly overload a target's neural network with simulated emotional responses, causing disorientation and temporary paranoia that lasts for 5 seconds. The packets also increase the target's susceptibility to psychological manipulation by 20%, making them easier prey to mind games. Each use leaves behind a lingering phantom notification, as if a tweet never quite fades from memory.",
    "category": "consumables",
    "price": 4600,
    "icon": "🌀",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Disorienting Echo",
      "Mind Game Vulnerability"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "drone_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorienting Echo",
        "rules": "When activated by the Waning Striker, this effect causes the target to become disoriented for 5 seconds. The target has disadvantage on all Wisdom (Perception) checks and saving throws against being charmed or frightened until the end of their next turn."
      },
      {
        "title": "Mind Game Vulnerability",
        "rules": "For 1 hour after using this item, the target's susceptibility to psychological manipulation increases by 20%, making them more likely to succumb to mind games and similar effects. This effect stacks with other sources of vulnerability but does not exceed a total increase of 50%. A successful DC 14 Wisdom saving throw ends this effect early."
      }
    ],
    "levelRequirementReason": "This item targets the user's ability to manipulate social media echo chambers and is thus accessible to low-level users who understand its psychological impact.",
    "vendorReason": "The pixel_shop specializes in tech-related items, making them a natural vendor for this data-altered artifact.",
    "shippingDetail": "Delivered within the hour by drone, directly from the pixel_shop's headquarters.",
    "usage": {
      "activation": "A bonus action to activate and target an enemy within 30 feet.",
      "duration": "Instantaneous effect; ends when the target is successfully targeted or the item runs out of charges.",
      "endsWhen": "The target successfully resists the effects, or the item runs out of uses.",
      "charges": "5 uses"
    },
    "priceReason": "This price reflects the rare and limited nature of the data packets, as well as their psychological impact.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:53:36.305028+00:00",
    "aiReviewedAt": "2026-07-25T01:53:36.305028+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_data_striker_481": {
    "id": "internet_item_data_striker_481",
    "name": "The Cached Packets of the Lost Streamer’s Lament",
    "description": "The Cached Packets of the Lost Streamer’s Lament are dense, almost tangible streams of data that hum faintly with remnants of their creator's charisma and passion. When analyzed, these packets warp reality to vividly reenact the streamer's most dramatic moments, from epic fails to fan interactions that never should have gone viral. Users find themselves momentarily entangled in the streamer’s world, where every keystroke feels like a performance, and every pixel blinks with significance. However, the experience is not without cost; there's an unsettling 10% chance of attracting unwanted digital attention from obsessed fans who refuse to let go.",
    "category": "equipment",
    "price": 21000,
    "icon": "🖥️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Epic Emotional Resonance",
      "Digital Stalker Attraction"
    ],
    "vendor": "cyber_market",
    "shippedBy": "encrypted_package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Epic Emotional Resonance",
        "rules": "Activating the packets grants a +2 bonus to Charisma (Performance) checks for 1 hour. The user must make an Intelligence saving throw (DC 15) or experience a vivid hallucination of a particularly embarrassing moment, which lasts until the start of their next turn."
      },
      {
        "title": "Digital Stalker Attraction",
        "rules": "There is a 10% chance that after using the packets, the user attracts unwanted attention from digital stalkers. This results in a -2 penalty to all Charisma-based checks and saves for 24 hours unless the user completes a short rest."
      }
    ],
    "levelRequirementReason": "Even at level 1, adventurers can appreciate the nostalgia and drama these packets offer.",
    "vendorReason": "The cyber market specializes in rare and nostalgic digital artifacts that are sought after by collectors and stream enthusiasts alike.",
    "shippingDetail": "Shipped via a secure, encrypted package to ensure the data remains intact during transit.",
    "usage": {
      "activation": "Standard action to analyze the packets.",
      "duration": "Instantaneous effect with duration as specified.",
      "endsWhen": "The hallucination ends when the user's next turn begins.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item’s rarity, nostalgic value, and unique effects justify this price point.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:53:39.617250+00:00",
    "aiReviewedAt": "2026-07-25T01:53:39.617250+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_cached_striker_901": {
    "id": "internet_item_cached_striker_901",
    "name": "Mythic Data Broker's Protocol Nexus – ‘The Glitch Shepherd’",
    "description": "The Mythic Data Broker's Protocol Nexus, 'The Glitch Shepherd,' is a sleek, metallic device resembling a compact server core encased in a glowing matrix of blue and purple lines. Crafted from rare, corrupted data shards, this artifact allows its wielder to interface with unstable online networks, siphoning vast troves of information at the risk of their own digital integrity. Overuse can lead to permanent fragmentation of one's virtual self, leaving behind fleeting 'ghost' avatars in the digital realm.",
    "category": "services",
    "price": 230000,
    "icon": "📡",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Siphons data from corrupted network nodes",
      "Summons temporary ghost avatars"
    ],
    "vendor": "data_dealer",
    "shippedBy": "quantum_relay",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Data Siphoning",
        "rules": "Activates as a bonus action. Targets one unstable online server within range (30 feet). The user can siphon data from the targeted node, which grants access to rare and valuable information for up to 1 minute. There is a 20% chance of acquiring rare data fragments. This effect has no save DC but ends if the server becomes stable or if the user's digital footprint becomes too unstable."
      },
      {
        "title": "Ghost Avatars",
        "rules": "Summons temporary avatars that can interact with the virtual environment for 1 hour or until the device is turned off. These avatars are indistinguishable from real entities and can perform tasks like hacking, reconnaissance, or data extraction without risking the user's digital integrity."
      }
    ],
    "levelRequirementReason": "Requires a high level of expertise to safely interface with unstable network architectures.",
    "vendorReason": "The Data Dealer is known for their extensive knowledge of and access to the most volatile data streams in the digital world.",
    "shippingDetail": "Ships via secure, encrypted quantum relay channels ensuring the device arrives undetected and with minimal risk of corruption.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "Target server stabilizes or user's digital footprint becomes too unstable; charges are unlimited but overuse risks permanent fragmentation",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect the risk and utility of interfacing with volatile data streams.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T01:54:48.732251+00:00",
    "aiReviewedAt": "2026-07-25T01:54:48.732251+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_stonehand_master": {
    "id": "middle_earth_item_the_stonehand_master",
    "name": "The Stonehand Master’s Gripscale Rune",
    "description": "The Stonehand Master’s Gripscale Rune, a dwarven artifact carved from volcanic obsidian and enchanted with geothermal energy, hums with latent heat as it is wielded. The rune grants its bearer an iron grip on stone surfaces, allowing for effortless scaling of cliffs, and bestows a resilience that nullifies damage from rock-based attacks or effects. Whispers of Khazad-dûm’s mining prowess echo in the rune's core, reinforcing its durability and utility among miners and explorers alike.",
    "category": "equipment",
    "price": 1200,
    "icon": "⛏️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "enhanced_grip",
      "resilience_to_stone"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "wagon",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Grip",
        "rules": "The wielder gains advantage on Strength (Athletics) checks made to climb or hold onto stone surfaces. This effect lasts until the end of their next turn."
      },
      {
        "title": "Resilience to Stone",
        "rules": "When a creature makes an attack roll against the user with a weapon primarily made of stone, the rune grants a resistance to half damage from this attack. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and raw materials required for its creation necessitate a minimum level of expertise.",
    "vendorReason": "Only the dwarven artisans of Khazad-dûm possess the skills to fashion such an item.",
    "shippingDetail": "Delivered by trusted dwarven couriers, ensuring safe passage through treacherous terrain.",
    "usage": {
      "activation": "Passive effect upon donning the rune.",
      "duration": "Lasts until the end of the user's next turn or until removed.",
      "endsWhen": "The duration ends when the rune is no longer being worn.",
      "charges": "Unlimited, but only one use per long rest for Resilience to Stone."
    },
    "priceReason": "Balanced with a rare crafting technique and unique materials sourced from deep within Khazad-dûm.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:54:07.188787+00:00",
    "aiReviewedAt": "2026-07-25T01:54:07.188787+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_shire_songweaver": {
    "id": "middle_earth_item_the_shire_songweaver",
    "name": "The Shire Songweaver's Harmonic Resonance Charm",
    "description": "A delicate silver charm strung with threads of spun moonpetal and etched with the runes of ancient Elvish harmonics, this Shire Songweaver's Harmonic Resonance Charm amplifies your voice like a bell in a meadow and can soothe even the most agitated beast. Crafted by the master artisans of Green Hill, it is said to carry the melodies of the Hobbits' joyful songs, capable of weaving harmony into discordant sounds. The charm's power waxes with the phases of the moon, amplifying its effects during the full moon.",
    "category": "consumables",
    "price": 4600,
    "icon": "🎶",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "voice_amplification",
      "animal_soothing"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Voice Amplification",
        "rules": "When you activate this charm as a bonus action, your voice is amplified for 1 minute. Any creature within 30 feet of you that can hear your voice has disadvantage on saving throws against being frightened by you until the end of its next turn."
      },
      {
        "title": "Animal Soothing",
        "rules": "You can use an action to focus the charm's energy, soothing a willing creature within 30 feet. The target must make a Wisdom saving throw (DC 14). On a successful save, it is calmed and gains advantage on its next attack roll or ability check before the end of your next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to effectively use the charm’s soothing and amplification powers.",
    "vendorReason": "The Shire Shop is known for its unique wares, including magical items crafted by local artisans like those who made this charm.",
    "shippingDetail": "Shipped via the Pony Express, arriving within a week of purchase.",
    "usage": {
      "activation": "Bonus action or action (for Animal Soothing)",
      "duration": "1 minute for Voice Amplification; instantaneous for Animal Soothing",
      "endsWhen": "Ends when you deactivate it or after its duration expires",
      "charges": "Unlimited uses, recharges at dawn on the first day of a new moon"
    },
    "priceReason": "The charm's rarity and unique crafting process justify its price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:53:57.102052+00:00",
    "aiReviewedAt": "2026-07-25T01:53:57.102052+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_the_woodhaven_watcher": {
    "id": "middle_earth_item_the_woodhaven_watcher",
    "name": "The Woodhaven Watcher’s Eldertree Sigil",
    "description": "The Woodhaven Watcher’s Eldertree Sigil is a weathered, oak-bound sigil etched with the stylized image of an ancient watching Elder Tree. Crafted from centuries-old wood and imbued with Elven magic, it glows faintly under moonlight. This artifact grants fleeting glimpses into the near future, typically warnings related to immediate danger within forested areas. Its connection to the ancient Elven knowledge is palpable, and its power resonates with those who understand the language of the trees.",
    "category": "curiosities",
    "price": 21000,
    "icon": "🌳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "premonition",
      "forest_connection"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_hawk",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Premonition",
        "rules": "Activating this sigil provides a fleeting glimpse into the immediate future. You gain advantage on all Wisdom (Perception) checks made to avoid danger within forested areas for 1 minute. This effect ends if you suffer any damage or if you move more than 30 feet away from the nearest tree."
      },
      {
        "title": "Forest Connection",
        "rules": "While wearing this sigil, you are considered proficient with Survival checks made in forested areas. Additionally, you have a +1 bonus to initiative rolls when within 50 feet of a tree or plant. This effect persists as long as the sigil is worn."
      }
    ],
    "levelRequirementReason": "The complexity and power of this artifact demand a minimum level to ensure proper handling and understanding.",
    "vendorReason": "The Elven Market often carries items imbued with ancient magic, making it the ideal vendor for such an artifact.",
    "shippingDetail": "Ships via a flying hawk courier, ensuring safe and swift delivery to the buyer's door.",
    "usage": {
      "activation": "Passive effect when worn; no activation required.",
      "duration": "Lasts until ended by damage or movement.",
      "endsWhen": "Suffering damage or moving more than 30 feet away from a tree.",
      "charges": "Unlimited, recharges upon removal and reinsertion."
    },
    "priceReason": "This artifact is priced at 1000 XP due to its rarity, the complexity of crafting such an item, and its limited availability.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:54:31.348577+00:00",
    "aiReviewedAt": "2026-07-25T01:54:31.348577+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_gilded_chronos_reaver": {
    "id": "kivotos_item_gilded_chronos_reaver",
    "name": "The Gilded Chronos Reaver Certificate",
    "description": "The Gilded Chronos Reaver Certificate is a shimmering artifact, meticulously crafted from solidified temporal echoes and gilded with platinum harvested from the Academy's chronometric relays. Holding this relic allows you to manipulate time briefly around a single target, either slowing their reactions by a fraction or accelerating their aging process, both visible as fleeting distortions in the air. It is said that only those deemed truly deserving can wield such power, and it has been personally commissioned for those who have shown exceptional ruthlessness in handling time-sensitive matters.",
    "category": "consumables",
    "price": 1300000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "godly",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Aging Acceleration"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "As a bonus action, the user can target a single creature within 30 feet. This causes time around the target to slow by 25%, reducing their reaction speed for 10 seconds. The target has advantage on saving throws against this effect and can make an Intelligence saving throw (DC 14) at the start of its turn to end the effect early."
      },
      {
        "title": "Aging Acceleration",
        "rules": "As a bonus action, the user can target a single creature within 30 feet. This causes visible distortions in time that accelerate the target's aging process by a fraction of a second. The target appears visibly older and gains one negative age condition for the duration."
      }
    ],
    "levelRequirementReason": "This item requires significant control over temporal magic to wield effectively.",
    "vendorReason": "The student store sells a variety of magical artifacts, including this one, which is known for its educational value and practical use in time-sensitive experiments.",
    "shippingDetail": "Delivered within the hour by Drone Delivery's fastest courier service.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds or until target ends it with a successful saving throw",
      "endsWhen": "Target makes an Intelligence save, user runs out of charges, or effect duration expires",
      "charges": "5 uses per long rest"
    },
    "priceReason": "This item is priced at 1000 XP as it requires significant magical materials and expertise to produce.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:54:27.355347+00:00",
    "aiReviewedAt": "2026-07-25T01:54:27.355347+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_forbidden_resonance_circulator": {
    "id": "kivotos_item_forbidden_resonance_circulator",
    "name": "The Forbidden Resonance Circulator Device",
    "description": "The Forbidden Resonance Circulator Device is a compact obsidian artifact, its surface etched with arcane symbols that glow faintly. Crafted from fragments of ancient research, it channels unstable dimensional harmonics to create localized distortions, warping the fabric of reality for fleeting moments. Use it, and you may glimpse parallel worlds or witness objects briefly phasing in and out. But be wary; prolonged exposure can drive even the most steadfast mad with its chaotic whispers.",
    "category": "equipment",
    "price": 360,
    "icon": "🌀",
    "stock": 12,
    "rarity": "common",
    "stockType": "night_only",
    "effects": [
      "Dimensional Distortion",
      "Psychic Resonance"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier - Express Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dimensional Distortion",
        "rules": "When activated, this device creates a localized distortion field in a 10-foot radius. Any creature within the area must succeed on a DC 15 Wisdom saving throw or be subjected to unpredictable minor effects for 1 minute."
      },
      {
        "title": "Psychic Resonance",
        "rules": "Each use has a 20% chance of inflicting temporary madness (reduced Charisma by 2) on the user that lasts until the next dawn. The effect can be resisted with a successful DC 15 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "This device is complex enough to require basic proficiency in Arcana or Investigation.",
    "vendorReason": "Club Supply caters to those with a taste for the forbidden and arcane, making this device an obvious addition to their stock.",
    "shippingDetail": "The package is fragile and requires expedited handling to ensure safe arrival.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous",
      "endsWhen": "Charges are depleted or the user chooses to deactivate it.",
      "charges": "5 charges, recharged by dawn"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its complex mechanism and unpredictable effects.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:54:36.092976+00:00",
    "aiReviewedAt": "2026-07-25T01:54:36.092976+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_certificiate_of_glimmering_reputation": {
    "id": "kivotos_item_academy_certificiate_of_glimmering_reputation",
    "name": "The Academy Certificate of Glimmering Reputation",
    "description": "The Academy Certificate of Glimmering Reputation is a shimmering parchment that shifts hues in sync with your standing within the hallowed halls of the academy. Embossed with intricate crests and holographic projections, it not only grants access to exclusive club events but also bestows a subtle aura that enhances one’s influence among student factions. The certificate's shifting colors reflect your current social capital, a constant reminder of your position in this elite institution.",
    "category": "curiosities",
    "price": 1200,
    "icon": "✨",
    "stock": 88,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhances social standing within specific student factions.",
      "Grants temporary access to exclusive club events."
    ],
    "vendor": "academy_armory",
    "shippedBy": "Standard Postal Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Influence Boost",
        "rules": "When used, the certificate temporarily boosts your Charisma (Persuasion) checks by +1d4 when dealing with Academy politics. This effect lasts for one hour and can be used once per day."
      },
      {
        "title": "Exclusive Access",
        "rules": "Using the certificate allows access to exclusive club events, limited to three times per month. Failure to return it after use results in a loss of one event slot for the following month."
      }
    ],
    "levelRequirementReason": "Requires at least 15th level to leverage the complex social dynamics and political maneuvering within the academy.",
    "vendorReason": "The Academy Armory is responsible for maintaining and verifying all official documents, including this certificate.",
    "shippingDetail": "Delivered by Standard Postal Service; may take up to three days depending on current academy operations.",
    "usage": {
      "activation": "Activates as a bonus action when presented at an event or during social interactions.",
      "duration": "One hour per activation.",
      "endsWhen": "Expires after one hour or if the certificate is not returned within the specified time for events.",
      "charges": "Can be used once daily."
    },
    "priceReason": "The unique holographic and parchment treatments, combined with exclusive access to elite social functions, justify this balanced XP cost.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T01:55:02.882372+00:00",
    "aiReviewedAt": "2026-07-25T01:55:02.882372+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_ironclad-desolation-stalker": {
    "id": "warhammer_item_ironclad-desolation-stalker",
    "name": "The Ironclad Desolation Stalker’s Medallion",
    "description": "The Ironclad Desolation Stalker’s Medallion is a blackened steel medallion that pulses with a chilling resonance, amplifying the wearer's resilience against relentless assault. Crafted from the ruins of shattered empires, it grants resistance to physical damage and enhances stealth in desolate landscapes. A grim blessing worn by those who have faced death itself, this medallion offers temporary protection and the ability to briefly vanish into shadows when danger looms.",
    "category": "equipment",
    "price": 1200,
    "icon": "🛡️",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "enhanced resilience",
      "brief shadowstep"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "swift courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Resilience",
        "rules": "The wearer gains resistance to all damage from physical attacks for a short duration. This effect lasts until the wearer takes another action or reaction, and it can be used once per long rest."
      },
      {
        "title": "Shadowstep",
        "rules": "Once per short rest, the wearer becomes invisible and silent for 1 minute, granting advantage on Dexterity (Stealth) checks. This effect ends early if the wearer attacks or casts a spell."
      }
    ],
    "levelRequirementReason": "The medallion is designed to channel the essence of desolation, which requires a strong will and experience to wield effectively.",
    "vendorReason": "The Imperial Armory deals in relics of empire, including those that offer unique benefits to its patrons.",
    "shippingDetail": "Delivered via swift courier within a week of purchase.",
    "usage": {
      "activation": "Active on use; no additional actions required.",
      "duration": "Until the wearer takes another action or reaction, and once per long rest for Enhanced Resilience. Brief duration for Shadowstep.",
      "endsWhen": "The effect ends if the wearer attacks or casts a spell while using Shadowstep, or when the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Crafted from rare materials and imbued with ancient magic, the medallion's price reflects its unique abilities and historical significance.",
    "priceOriginal": 275,
    "priceReviewedAt": "2026-07-25T01:55:11.931187+00:00",
    "aiReviewedAt": "2026-07-25T01:55:11.931187+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_wicked-chronos-manipulator": {
    "id": "warhammer_item_wicked-chronos-manipulator",
    "name": "Wicked Chronos Manipulator - The Obsidian Fragment",
    "description": "The Wicked Chronos Manipulator - The Obsidian Fragment is a jagged obsidian shard that pulses with a malevolent, time-warped energy. This relic allows its wielder to briefly manipulate time, either rewinding their actions or accelerating their movements with unpredictable consequences. A misstep in its use can lead to temporal distortions, leaving the user confused and disoriented for a short while. Those who wield it must be careful not to overextend themselves lest they find themselves inextricably caught within the very fabric of time itself.",
    "category": "curiosities",
    "price": 4600,
    "icon": "⏳",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Rewind Time",
      "Temporal Acceleration"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "the Winged Beast Courier Service",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "As a reaction, the wielder can rewind their most recent action by up to 5 rounds. This effect is instantaneous but has a 20% chance of causing a temporal distortion that confuses the user for 1d4 turns. The manipulation does not affect other creatures or objects."
      },
      {
        "title": "Temporal Acceleration",
        "rules": "The wielder can increase their movement speed by +30 feet as a bonus action, lasting until the end of their next turn. If used consecutively within 1 minute, there is a cumulative -2 penalty to Dexterity (Stealth) checks and disadvantage on attack rolls for the remainder of that minute."
      }
    ],
    "levelRequirementReason": "Requires significant magical aptitude and discipline to wield without causing catastrophic temporal anomalies.",
    "vendorReason": "The Chaos Dealer is known for their extensive collection of misaligned and arcane artifacts, making the Wicked Chronos Manipulator a fitting addition to their inventory.",
    "shippingDetail": "Ships via the fastest winged beast courier, ensuring swift delivery but at a premium rate.",
    "usage": {
      "activation": "Reaction (Rewind Time), Bonus Action (Temporal Acceleration)",
      "duration": "Instantaneous (Rewind Time), Until End of Next Turn (Temporal Acceleration)",
      "endsWhen": "Used up in one minute if Temporal Acceleration is used consecutively",
      "charges": "Unlimited, but requires concentration for Rewind Time"
    },
    "priceReason": "Balanced to reflect its rare and unpredictable nature, offering a significant yet manageable advantage.",
    "priceOriginal": 8300,
    "priceReviewedAt": "2026-07-25T01:54:56.593362+00:00",
    "aiReviewedAt": "2026-07-25T01:54:56.593362+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_fate-forge-mk-89-desolation-medals": {
    "id": "warhammer_item_fate-forge-mk-89-desolation-medals",
    "name": "Fate Forge Mk.89 Desolation Medals - Blessed Sacrifice",
    "description": "Forged within the heart of a collapsing fortress, these medals are imbued with the essence of forgotten gods and dark pacts. As you wear them, they weave protective magic around your form, granting resistance to dark magic and bolstering your defense. However, their power comes at a cost: each day, a fragment of your memories fades until none remain, a silent reminder of the pact you made with ancient forces.",
    "category": "forbidden",
    "price": 74000,
    "icon": "💀",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Dark Resistance",
      "Memory Erosion"
    ],
    "vendor": "fate_forge",
    "shippedBy": "dimensional-portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dark Resistance",
        "rules": "While wearing these medals, you gain resistance to necrotic and shadow damage. This effect lasts until you remove the medals or are no longer within their protective radius."
      },
      {
        "title": "Memory Erosion",
        "rules": "Each day at dawn, roll a DC 15 Wisdom saving throw. On a failed save, you lose one memory fragment. You start each new day with the same number of fragments as when you first obtained these medals. This effect ends if you remove the medals or are no longer within their protective radius."
      }
    ],
    "levelRequirementReason": "The medallions' power is too great for novices, requiring at least a level 1 character to handle their dark magic.",
    "vendorReason": "Fate Forge has the means and dark lore necessary to craft such powerful and dangerous items.",
    "shippingDetail": "The dimensional portal can only deliver these fragile artifacts once per week, ensuring their safe transit through otherworldly means.",
    "usage": {
      "activation": "Passive effect upon wearing the medals.",
      "duration": "Lasts until removed or protective radius is lost.",
      "endsWhen": "Removing the medals or losing protective radius",
      "charges": "Unlimited"
    },
    "priceReason": "The item's legendary rarity and powerful effects, combined with the limited availability through Fate Forge, justify its 1000 XP price.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-25T15:14:51.875607+00:00",
    "aiReviewedAt": "2026-07-25T15:14:51.875607+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_chromatic_meme_echo": {
    "id": "internet_item_chromatic_meme_echo",
    "name": "The Chromatic Meme Echo",
    "description": "The Chromatic Meme Echo is a pulsating, iridescent orb that hums with the energy of countless viral trends. Crafted from salvaged internet data and ancient digital artifacts, its surface crackles with static as it distills the essence of meme culture. Holding this artifact allows you to project a targeted meme directly into another's mind, though the effects are notoriously unpredictable and can lead to fits of laughter or moments of profound realization.",
    "category": "consumables",
    "price": 1200,
    "icon": "🔊",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "meme projection",
      "temporary charisma boost"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Meme Projection",
        "rules": "As a bonus action, you project a targeted meme directly into another creature's mind. The target must succeed on a Wisdom saving throw (DC 15) or become charmed for 1 minute. On a successful save, the target is unaffected and becomes immune to your Meme Projection for 24 hours."
      },
      {
        "title": "Temporary Charisma Boost",
        "rules": "While holding The Chromatic Meme Echo, you gain advantage on Charisma checks and saving throws until the end of your next long rest. This effect does not stack with any other source of temporary Charisma bonuses."
      }
    ],
    "levelRequirementReason": "The complex nature of meme culture and the unpredictable effects necessitate a higher-level character to wield it effectively.",
    "vendorReason": "As purveyors of all things digital, pixel_shop is well-equipped to offer this unique artifact.",
    "shippingDetail": "Ships via Drone Delivery within the city limits; for out-of-town customers, additional fees apply.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous projection duration; effect lasts until end of next long rest",
      "endsWhen": "The target successfully saves or the effect's duration expires",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted from rare internet data and ancient digital artifacts, this artifact is priced high to reflect its unique and unpredictable nature.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:55:58.783961+00:00",
    "aiReviewedAt": "2026-07-25T01:55:58.783961+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_eldritch_born_key_of_recursion": {
    "id": "internet_item_eldritch_born_key_of_recursion",
    "name": "Eldritch Born's Key of Recursion",
    "description": "Forged from compressed infinite loops and the echoes of forgotten chatrooms, Eldritch Born's Key of Recursion is a digital artifact that grants brief access to fractured realities and distorted timelines. Turning it opens rifts between parallel computing universes, allowing a user to traverse networks in an instant. Be warned, prolonged use risks becoming lost in its recursive depths; the key's power can warp one’s perception and manipulate data around you into chaotic patterns.",
    "category": "equipment",
    "price": 5500,
    "icon": "🔑",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "network traversal",
      "recursive distortion"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Data Courier - Phase Shift",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Network Traversal",
        "rules": "Activating the Key of Recursion allows a user to instantly teleport through digital networks within a 50-foot radius. The effect lasts for 1 minute per level of the user, and it expends one charge. If the user moves more than 20 feet away from the point of activation during this time, they must make a DC 17 Constitution saving throw or become disoriented until the end of their next turn."
      },
      {
        "title": "Recursive Distortion",
        "rules": "Each use of the Key of Recursion has a 20% chance to trigger a recursive distortion. On a successful distortion, all creatures within 10 feet must succeed on a DC 15 Dexterity saving throw or be incapacitated for 1 minute as their digital environment becomes disordered and unpredictable."
      }
    ],
    "levelRequirementReason": "The Key of Recursion requires significant magical power to manipulate the chaotic nature of digital networks.",
    "vendorReason": "Cyber Market specializes in exotic and powerful artifacts related to data and technology, making it the ideal vendor for such an item.",
    "shippingDetail": "Delivery via Data Courier - Phase Shift takes 3 days but ensures secure and reliable transport of the artifact.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per level, up to a maximum of 5 minutes",
      "endsWhen": "The user moves more than 20 feet away from the point of activation or if the Key's charges run out",
      "charges": "Limited to 3 uses"
    },
    "priceReason": "Given its rarity, powerful effects, and unique crafting process involving advanced digital magic, the Key is priced at 2100 XP.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-25T01:56:13.805061+00:00",
    "aiReviewedAt": "2026-07-25T01:56:13.805061+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_the_algorithmic_oracle_service": {
    "id": "internet_item_the_algorithmic_oracle_service",
    "name": "The Algorithmic Oracle Service",
    "description": "The Algorithmic Oracle Service is a sleek, glowing device that hums with an eerie digital pulse. It draws upon the vast and unpredictable flow of internet data to provide cryptic yet eerily accurate predictions. Once activated, it emits a series of unsettlingly specific advertisements aimed at your current interests, while subtly surveilling your online activity for future recommendations. This device occasionally detects temporal anomalies, hinting at its connection to the fabric of time itself.",
    "category": "services",
    "price": 74000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "cryptic prediction",
      "advertising cascade"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Quantum Entanglement Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Prediction",
        "rules": "The Algorithmic Oracle Service provides a single cryptic, yet surprisingly accurate, reading about future events. The DM decides the nature of this reading. This effect is instantaneous and does not require an action to activate."
      },
      {
        "title": "Advertising Cascade",
        "rules": "Upon activation, the device triggers a cascade of personalized digital advertisements targeted at your current interests and online behavior. These ads do not provide any mechanical benefit but reflect the user's current internet activity. The effect lasts until the next long rest."
      }
    ],
    "levelRequirementReason": "This item is accessible to all characters, providing a balanced starting advantage.",
    "vendorReason": "Data Dealer specializes in cutting-edge devices that manipulate and interpret data streams for various purposes.",
    "shippingDetail": "The device is shipped via the Quantum Entanglement Relay, ensuring a secure and swift delivery to your doorstep.",
    "usage": {
      "activation": "Passive (device activates upon first use)",
      "duration": "Instantaneous for prediction; lasts until next long rest for advertising cascade",
      "endsWhen": "Exhausts after one use or when the next long rest occurs",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's ability to provide a cryptic prediction and subtle data surveillance, offering a strategic advantage without being overly powerful.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-25T01:55:27.811408+00:00",
    "aiReviewedAt": "2026-07-25T01:55:27.811408+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_chromatic_bitshaper": {
    "id": "equestria_item_chromatic_bitshaper",
    "name": "The Chromatic Bitshaper Mk.37",
    "description": "The Chromatic Bitshaper Mk.37 is a meticulously crafted bit forged from solidified prismatic energy, emblazoned with arcane runes that shimmer in vibrant hues of azure, crimson, and gold. It allows the rider to infuse their steed with elemental might: azure for unmatched speed, crimson for unyielding strength, or gold for potent magic. This tool is a harmonious marvel, crafted by Canterlot's most esteemed blacksmiths from the very heart of the Elements themselves.",
    "category": "equipment",
    "price": 1300000,
    "icon": "✨",
    "stock": 7,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Elemental Boost",
      "Enhanced Vitality"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pony Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Boost (Azure)",
        "rules": "Activate as a bonus action. The steed gains a +50% speed bonus for 10 seconds, but the rider must make a DC 20 Dexterity saving throw at the start of their next turn or fall prone due to the sudden surge in speed."
      },
      {
        "title": "Enhanced Vitality (Crimson)",
        "rules": "Activate as a bonus action. The steed gains a +30% strength bonus for 10 seconds, but it must make a DC 25 Constitution saving throw at the end of each of its turns; on a failure, it takes 1d6 necrotic damage."
      }
    ],
    "levelRequirementReason": "This bitshaper is designed for riders of all levels to enhance their steeds' prowess.",
    "vendorReason": "Canterlot Commerce, known for its unparalleled selection of magical and mundane items, stocks this unique bitshaper as a premium product.",
    "shippingDetail": "Delivered by the Royal Pony Post with same-day delivery within Equestria.",
    "usage": {
      "activation": "Bonus action to activate each element.",
      "duration": "10 seconds per activation, ending on its next turn.",
      "endsWhen": "The effect ends when the steed takes damage or the rider dismounts.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This bitshaper's balanced price reflects its unique elemental capabilities and rarity, suitable for all riders seeking to enhance their mounts.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:55:45.213611+00:00",
    "aiReviewedAt": "2026-07-25T01:55:45.213611+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_wicked_shade_shaper": {
    "id": "equestria_item_wicked_shade_shaper",
    "name": "The Wicked Shade Shaper – Obsidian Variant",
    "description": "The Wicked Shade Shaper – Obsidian Variant is a chilling artifact crafted from solidified nightmare essence, forged by ancient specters in the deepest pits of Equestria's shadowed realms. This macabre device allows its wielder to momentarily warp reality around their pony, creating unsettling illusions that disorient foes and suppress magical defenses within a 10-meter radius. Use it with caution; prolonged exposure may leave an eerie imprint on your very essence.",
    "category": "equipment",
    "price": 4600,
    "icon": "😈",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Illusionary Disruption",
      "Magical Suppression"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Swift Delivery Pony",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Illusionary Disruption",
        "rules": "As a bonus action, the user can create a minor illusion that disorients enemies within range. The effect lasts for 5 seconds and has a 20% chance to inflict 'Wickedness' status on the target."
      },
      {
        "title": "Magical Suppression",
        "rules": "The user can suppress magical effects within a 10-meter radius as an action, reducing their effectiveness by half for 3 seconds. This effect has no save DC but is limited to once per short rest."
      }
    ],
    "levelRequirementReason": "This artifact requires a high level of magical proficiency and control to wield its shadowy powers safely.",
    "vendorReason": "Applejack's keen eye for quality and her extensive network with the spectral realms ensure this rare item finds its way into the market.",
    "shippingDetail": "The delivery is expedited, but the package must be received under moonlight to preserve the artifact’s integrity.",
    "usage": {
      "activation": "Bonus Action or Action",
      "duration": "Instantaneous for Illusionary Disruption; 3 seconds for Magical Suppression",
      "endsWhen": "The effect ends when its duration expires or the user retracts the item's power.",
      "charges": "Unlimited, but once per short rest for the Magical Suppression."
    },
    "priceReason": "Despite being a rare artifact with limited use, the price reflects its value as a tool for shadowy magic and its potential to disrupt enemies.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T15:14:43.734742+00:00",
    "aiReviewedAt": "2026-07-25T15:14:43.734742+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_harmonious_bits_of_resonance": {
    "id": "equestria_item_harmonious_bits_of_resonance",
    "name": "The Harmonious Bits of Resonance - Series Theta",
    "description": "The Harmonious Bits of Resonance - Series Theta are intricately crafted, polished to a high luster by the artisans of Equestria. These bits resonate with the purest harmony, allowing riders to feel an almost telepathic connection to their steeds. The rider can sense and guide their mount with precision, while the horse responds in kind, creating a bond that unites them as one in every gallop. Feel the rhythm of Equestria flow through you as you command your trusted steed with ease.",
    "category": "consumables",
    "price": 1200,
    "icon": "🎵",
    "stock": 99,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Communication",
      "Boost to Riding Accuracy"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Communication",
        "rules": "Activates on a bonus action, allowing the rider and steed to communicate telepathically for up to 1 minute. The effect ends if one of them acts in combat or is within 30 feet of another hostile creature."
      },
      {
        "title": "Boost to Riding Accuracy",
        "rules": "+2 bonus to Dexterity (Riding) checks and saving throws related to riding, which lasts until the end of your next turn after activation. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a rider proficient in Riding to fully benefit from the enhanced communication.",
    "vendorReason": "The Crystal Empire is renowned for its mastery of harmony and balance, making it fitting that they sell these resonant bits.",
    "shippingDetail": "Ships via express courier within Equestria; delivery takes no longer than a day.",
    "usage": {
      "activation": "Bonus action to activate the communication and riding accuracy bonuses.",
      "duration": "Instantaneous activation, with effects lasting for their respective durations.",
      "endsWhen": "The effect ends if the rider acts in combat or is within 30 feet of another hostile creature. The communication bonus lasts up to 1 minute from initial activation.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at a high price due to its unique telepathic and riding accuracy bonuses that are rare among Equestrian items.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:56:33.895352+00:00",
    "aiReviewedAt": "2026-07-25T01:56:33.895352+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_dragonscale_walker": {
    "id": "faerun_item_dragonscale_walker",
    "name": "The Dragonscale Walker’s Treaders",
    "description": "The Dragonscale Walker’s Treaders are crafted from ancient dragon scales, salvaged from an underground hoard beneath Candlekeep. These boots resonate with a subtle draconic aura that grants their wearer unmatched traction on treacherous terrains and subtle resistance to fire damage. The yielding scales have been enchanted to protect the walker against scorching temperatures, and the boots' weight feels as if they were molded specifically for your feet, offering an almost imperceptible boost in movement speed.",
    "category": "equipment",
    "price": 75000,
    "icon": "🐉",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "enhanced_traction",
      "fire_resistance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Griffon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Traction",
        "rules": "The Dragonscale Walker’s Treaders grant a +2 bonus to Dexterity (Acrobatics) checks made for balance and movement on difficult terrains. This effect lasts until the end of your next turn."
      },
      {
        "title": "Fire Resistance",
        "rules": "You gain resistance to fire damage while wearing these boots. Additionally, you have advantage on saving throws against being set on fire by non-magical sources. This resistance does not stack with other forms of fire resistance or immunity."
      }
    ],
    "levelRequirementReason": "These boots are crafted to be accessible to adventurers of all levels, allowing even the youngest heroes to benefit from their protective enchantments.",
    "vendorReason": "The Sword Coast Traders have a long-standing relationship with the dragon hoard's caretakers and have been entrusted by them to sell these rare boots.",
    "shippingDetail": "Delivered by the swift wings of Griffin Express, ensuring that the Dragonscale Walker’s Treaders reach their destination in perfect condition.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Instantaneous upon donning and lasts until removed or a new turn begins.",
      "endsWhen": "The boots' effects end when they are removed or at the start of your next turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Given their craftsmanship from an ancient dragon hoard and the unique enchantments, these boots provide a balanced value for adventurers looking to enhance their survivability in fire-filled environments.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T14:37:21.455889+00:00",
    "aiReviewedAt": "2026-07-25T14:37:21.455889+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_silversong_walker": {
    "id": "faerun_item_silversong_walker",
    "name": "Silversong Walker’s Echo Boots",
    "description": "Silversong Walker's Echo Boots are crafted by Mithral Hall's most skilled dwarven artisans from a silver alloy that whispers secrets of old lore. Infused with fragments of a siren’s lament, these boots not only grant uncanny stealth but also enhance one's hearing in echoing environments, making every step and sound a potential advantage in the shadows. Their ethereal hum resonates like distant melodies, subtly masking movement and amplifying ambient sounds for the wearer.",
    "category": "equipment",
    "price": 4600,
    "icon": "🎶",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "stealth",
      "hearing_boost"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "Night Hauler Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth",
        "rules": "When you take the Hide action, you have advantage on Dexterity (Stealth) checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Enhanced Hearing",
        "rules": "In echoing environments, you can use an action to gain a +2 bonus to your Passive Perception score for 1 minute. This effect ends early if you are exposed to non-echoing sounds or silence."
      }
    ],
    "levelRequirementReason": "These boots offer subtle enhancements that are accessible to lower-level adventurers who can benefit from improved stealth and hearing.",
    "vendorReason": "Baldur's Bazaar caters to adventurers seeking unique and powerful gear, including items that enhance core skills like stealth and perception.",
    "shippingDetail": "Delivered by the Night Hauler Cart at dawn, ensuring secrecy during shipment.",
    "usage": {
      "activation": "Passive effect for Stealth; Enhanced Hearing activated as a bonus action.",
      "duration": "Stealth is permanent until your next turn. Enhanced Hearing lasts 1 minute.",
      "endsWhen": "Stealth ends when you no longer need to hide, and Enhanced Hearing ends if exposed to non-echoing sounds or silence.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots offer balanced benefits without overtly powerful effects, making them accessible yet valuable.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:37:24.310118+00:00",
    "aiReviewedAt": "2026-07-25T14:37:24.310118+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_forgotten_walker": {
    "id": "faerun_item_forgotten_walker",
    "name": "The Forgotten Walker’s Rust-Eaten Shards",
    "description": "The Forgotten Walker’s Rust-Eaten Shards are a pair of decrepit yet resilient boots crafted from ancient metal fused with the essence of a long-forgotten deity. These relics offer protection against psychic attacks and reveal glimpses into the minds of those who dare to wear them, allowing for brief insight into their thoughts. The boots also provide minor healing at intervals, ensuring that their wearer remains battle-ready even in the face of adversity.",
    "category": "equipment",
    "price": 1200,
    "icon": "💀",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "psychic_protection",
      "mind_sight"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Standard Courier Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Psychic Protection",
        "rules": "As a bonus action, the wearer can activate this effect to gain advantage on saving throws against psychic damage and effects for 1 minute. The effect ends early if the wearer takes any damage."
      },
      {
        "title": "Mind Sight",
        "rules": "Once per short rest, the wearer can focus their attention towards a creature within 30 feet, gaining insight into that creature's thoughts until the end of their next turn. This ability does not require an action and has no save DC."
      }
    ],
    "levelRequirementReason": "The Forgotten Walker’s Rust-Eaten Shards are crafted from ancient relics and require a significant amount of spiritual strength to wield effectively.",
    "vendorReason": "Waterdeep Market is known for its connections with forgotten lore and relics, making it the perfect vendor for these mysterious boots.",
    "shippingDetail": "Ships within 3 days of purchase. Expedited delivery available for an additional fee.",
    "usage": {
      "activation": "Bonus action to activate Psychic Protection; no activation required for Mind Sight.",
      "duration": "Psychic Protection lasts for 1 minute or until the wearer takes damage, whichever comes first. Mind Sight has a duration of one turn per use.",
      "endsWhen": "The effect ends if the wearer takes damage while Psychic Protection is active or when Mind Sight's insight into another creature expires.",
      "charges": "Unlimited uses; charges do not apply."
    },
    "priceReason": "The balanced XP price reflects the boots' unique abilities and the rare materials used in their crafting, making them a sought-after but not overpowered item.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:56:51.077194+00:00",
    "aiReviewedAt": "2026-07-25T01:56:51.077194+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_item_jeweled_striker_of_vexation": {
    "id": "warhammer_item_jeweled_striker_of_vexation",
    "name": "Jeweled Striker's Insignias of Vexation",
    "description": "The Jeweled Striker's Insignias of Vexation are intricately crafted, pulsing with chaotic energy, designed to disrupt enemy formations during battle. Each insignia is inlaid with shimmering obsidian and etched with glyphs depicting the shattered banners of fallen empires. Wearing this insignia grants temporary advantage in aggressive combat maneuvers, making every strike feel like a blow against an ancient foe's legacy. These insignias are said to channel the last breaths of defeated legions, lending you their strength and resolve.",
    "category": "equipment",
    "price": 1200,
    "icon": "⚔️",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Disruptive Maneuvers",
      "Enhanced Aggression"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "Imperial Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Disruptive Maneuvers",
        "rules": "Activates as a bonus action. For the next minute, all melee attacks you make deal an additional +1d6 damage and have a 20% chance to cause the target to become disoriented for one round."
      },
      {
        "title": "Enhanced Aggression",
        "rules": "Passive effect that boosts your aggression stat by 20%, reducing enemy armor rating by 10%. This effect persists until you take a long rest or are incapacitated."
      }
    ],
    "levelRequirementReason": "The complexity and power of the insignias demand a minimum character level to wield their chaotic energy effectively.",
    "vendorReason": "The Imperial Armory is known for its unparalleled selection of enchanted battle gear, including items that channel ancient energies like these insignias.",
    "shippingDetail": "Delivered swiftly by the drones, ensuring the insignias arrive in perfect condition and with minimal delay.",
    "usage": {
      "activation": "Bonus action to activate the Disruptive Maneuvers effect.",
      "duration": "One minute duration for Disruptive Maneuvers.",
      "endsWhen": "The bonus action is reactivated or you take a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect the item's unique combination of chaotic energy and battlefield disruption, this price ensures it remains a valuable yet attainable asset.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:57:26.577018+00:00",
    "aiReviewedAt": "2026-07-25T01:57:26.577018+00:00",
    "aiReviewVersion": 1
  }
};
