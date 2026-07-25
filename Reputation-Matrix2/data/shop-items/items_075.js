// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_075 = {
  "connectopia_shard_of_echo": {
    "id": "connectopia_shard_of_echo",
    "name": "Echo Fragment",
    "description": "The Echo Fragment is a crystalline shard that hums faintly, its surface etched with the echoes of forgotten miners. When held close to your ear, it amplifies subtle sounds, making distant whispers and ambient murmurs audibly clear. A rare find from the oldest mines, this fragment occasionally releases ghostly impressions of past events, offering fleeting glimpses into the lives of those who once worked these veins. It’s surprisingly heavy for its size, a testament to the ancient power it holds.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔊",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Amplifies ambient sounds",
      "Occasional Ghostly Echo"
    ],
    "vendor": "craft_corner",
    "shippedBy": "delivery_truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Amplified Sounds",
        "rules": "When you hold the Echo Fragment close to your ear, you gain advantage on Perception checks related to hearing. This effect lasts until the end of your next turn."
      },
      {
        "title": "Occasional Ghostly Echo",
        "rules": "Once per short or long rest, you can activate the Echo Fragment to hear a brief, ghostly echo of an event from the past. This echo provides insight into a nearby location's history but does not grant advantage on checks."
      }
    ],
    "levelRequirementReason": "The Echo Fragment is accessible to beginners as it requires minimal concentration and training.",
    "vendorReason": "Craft Corner specializes in rare artifacts from the oldest mines, making this item a natural fit for their stock.",
    "shippingDetail": "Ships via Delivery Truck within three days of order placement.",
    "usage": {
      "activation": "Active (requires holding close to your ear)",
      "duration": "Until the end of your next turn or until you stop holding it.",
      "endsWhen": "The effect ends when you stop holding the Echo Fragment or at the start of your next turn.",
      "charges": "Unlimited; the fragment regains its abilities after a short or long rest."
    },
    "priceReason": "Balanced with an XP price that reflects its rarity and utility without overshadowing other items in the shop.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-25T01:37:00.066953+00:00",
    "aiReviewedAt": "2026-07-25T01:37:00.066953+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_disruptor_pen": {
    "id": "kivotos_item_chrono_disruptor_pen",
    "name": "Chrono Disruptor Pen",
    "description": "The Chrono Disruptor Pen, a sleek silver pen crafted from the ancient metal of time-worn chronometers, hums with latent temporal power. When wielded to sketch a precise diagram, it can momentarily warp reality, slowing down time for a single target by +5 seconds. This unique artifact is perfect for escaping tense situations or securing that last pastry at the bakery – a favorite among quick-thinking heroes and villains alike.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 28,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "slow_target +5 seconds",
      "targeted disruption (10%)"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "Activating the Chrono Disruptor Pen requires a bonus action. The target of your sketch is slowed by +5 seconds, during which time their movement and actions are reduced to half speed. This effect lasts for up to 1 minute per use. A successful DC 14 Constitution saving throw ends this effect early."
      },
      {
        "title": "Targeted Disruption",
        "rules": "There is a 10% chance that, when the target fails their save against Temporal Slow, their next action will be disrupted, causing them to waste an additional action. This effect has no save and can only occur once per target."
      }
    ],
    "levelRequirementReason": "This pen requires a minimum character level of 5 due to its intricate temporal mechanics.",
    "vendorReason": "Club Supply is known for their diverse array of magical curiosities, and the Chrono Disruptor Pen fits right into their inventory as an in-demand item among adventurers.",
    "shippingDetail": "Express Delivery ensures that your Chrono Disruptor Pen arrives swiftly, ready to be used upon receipt.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per use",
      "endsWhen": "The target successfully saves or the duration expires",
      "charges": "3 charges, recharges after a long rest"
    },
    "priceReason": "The Chrono Disruptor Pen's rare construction and potent temporal abilities justify its high price of 1000 XP.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:37:04.249893+00:00",
    "aiReviewedAt": "2026-07-25T01:37:04.249893+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_academy_ward": {
    "id": "kivotos_item_academy_ward",
    "name": "Academy Ward of Protection",
    "description": "The Academy Ward of Protection is a delicate, intricately woven amulet that pulses with protective energy, designed to deflect minor magical attacks and the judgmental stares of overly-serious professors. Crafted from enchanted linen and imbued with the essence of calm, it grants its wearer a sense of tranquility in times of stress. The ward's weave is so fine that even Wario finds himself wishing for pockets, though its true value lies in its ability to mitigate fear effects and absorb magical energies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "absorb_magic",
      "reduce_fear"
    ],
    "vendor": "academy_armory",
    "shippedBy": "magical_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absorb Magic",
        "rules": "The Academy Ward of Protection absorbs minor magical attacks. It reduces the severity of magic damage by half, up to a maximum reduction of 2d6 points. This effect is triggered when a spell or magical attack is targeted at the wearer."
      },
      {
        "title": "Reduce Fear",
        "rules": "The ward grants resistance to fear effects and has a 5% chance upon activation to reflect any incoming fear-based spells back towards their caster. The duration of this protection lasts for an hour, after which it dissipates without further use."
      }
    ],
    "levelRequirementReason": "Wielders must be at least level 1 to attune themselves to the calming energies of the ward.",
    "vendorReason": "Academy Armory stocks this item as a staple for students and scholars, ensuring they are prepared against both magical attacks and academic pressures.",
    "shippingDetail": "The item is delivered via the Magical Portal, which ensures swift and reliable transport to your destination.",
    "usage": {
      "activation": "Passive effect; requires attunement.",
      "duration": "One hour of protection against fear effects.",
      "endsWhen": "The duration ends after one hour or when the wearer is no longer in need of its protective properties.",
      "charges": "Unlimited uses, as long as it remains attuned."
    },
    "priceReason": "This price reflects the item's balanced rarity and utility within the academy setting.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:37:28.519749+00:00",
    "aiReviewedAt": "2026-07-25T01:37:28.519749+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_legendary_flareon_scale": {
    "id": "pokemon_item_legendary_flareon_scale",
    "name": "Scale of the Blaze Pokémon",
    "description": "A shimmering, iridescent scale shed by a truly magnificent Flareon. Imbued with intense heat and power, this scale provides a significant boost to fire-type attacks and offers resistance against cold.",
    "category": "equipment",
    "price": 60000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "increases fire damage by 30%",
      "resistance to cold (50%)",
      "chance to burn on hit (15%)"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Safari Zone Drone",
    "levelRequirement": 16
  },
  "pokemon_item_ancient_dragon_scale": {
    "id": "pokemon_item_ancient_dragon_scale",
    "name": "Scale of the Ancient Dragon, Ignis",
    "description": "The Scale of Ignis, a relic shed by the ancient and fiery dragon, ignites in your grasp, crackling with primal heat. Its surface gleams with embers that cast a warming glow around you, warding off cold and damp. This scale grants you fire resistance and a fiery aura that can incinerate foes within close range. However, those who wear it too long are at risk of succumbing to its allure, as the urge to collect more shiny objects grows ever stronger.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Fire Resistance",
      "Fiery Aura"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Winged Courier",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "You gain a +50% bonus to AC against fire-based attacks. This effect lasts until you take damage from an attack of a different type."
      },
      {
        "title": "Fiery Aura",
        "rules": "For every creature within 10 feet that starts its turn adjacent to you, it must make a DC 15 Constitution saving throw or take 2d6 fire damage. This effect ends if you enter an area of difficult terrain."
      }
    ],
    "levelRequirementReason": "Only those with the strength and experience to wield such a powerful relic can resist its fiery allure.",
    "vendorReason": "The Safari Shop has exclusive access to ancient relics like this, having traded extensively with dragon-tamers and explorers.",
    "shippingDetail": "Delivered by the swift Winged Courier, this scale arrives in pristine condition, ready for your use.",
    "usage": {
      "activation": "Passive effect.",
      "duration": "Instantaneous; ends when you take damage from an attack of a different type or enter difficult terrain.",
      "endsWhen": "When you are damaged by an attack not of fire origin, or if you move into an area with difficult terrain.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the rarity and power of this relic while remaining balanced for a legendary item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:37:44.418069+00:00",
    "aiReviewedAt": "2026-07-25T01:37:44.418069+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_shard": {
    "id": "grand_country_gravity_shard",
    "name": "Fractured Echo of Descent",
    "description": "The Fractured Echo of Descent hums and pulses with the weightless secrets of fallen giants, briefly granting the wielder a fleeting boost in speed as if gravity itself bends to their will. Its surface etched with ancient runes that whisper of vertigo, this shard can reduce fall damage by 20% and provide a momentary surge in agility, leaving enemies disoriented for a heartbeat. Legends say these shards are fragments from the colossal creatures who once defied The Grand Country’s gravity.",
    "category": "equipment",
    "price": 1000,
    "icon": "💫",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Gravity Defiance",
      "Disorienting Aura"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "gravitational_packet",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Gravity Defiance",
        "rules": "At the start of your movement, you gain a +10 foot bonus to your speed until the end of your next turn. This effect lasts for one minute and ends if you are incapacitated or fall prone."
      },
      {
        "title": "Disorienting Aura",
        "rules": "For 1 minute, any creature that starts its turn within 5 feet of you has advantage on attack rolls against you until the start of your next turn. This effect ends early if you move more than 30 feet away from the source."
      }
    ],
    "levelRequirementReason": "Requires at least level 7 to wield this shard, as it taps into gravity-defying energies.",
    "vendorReason": "The Vertical Vendor stocks unique artifacts that defy conventional physics, making the Fractured Echo of Descent a fitting addition.",
    "shippingDetail": "Ships via Gravitational Packet, ensuring safe and swift delivery through The Grand Country’s complex gravitational anomalies.",
    "usage": {
      "activation": "At the start of your movement.",
      "duration": "One minute or until incapacitated/fallen prone.",
      "endsWhen": "You are incapacitated, fall prone, or move more than 30 feet away from the source.",
      "charges": "Unlimited"
    },
    "priceReason": "The Fractured Echo of Descent is priced at 1000 XP as it offers unique and balanced benefits that enhance mobility and combat effectiveness.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:37:32.416581+00:00",
    "aiReviewedAt": "2026-07-25T01:37:32.416581+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_berry": {
    "id": "grand_country_sticky_berry",
    "name": "Glooping Gloomberries",
    "description": "These unsettlingly vibrant berries are incredibly sticky and leave a faintly luminescent trail wherever they’re dropped. Consume one to gain temporary resistance to poison, but be warned - the lingering goo is... peculiar.",
    "category": "consumables",
    "price": 250,
    "icon": "🍇",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restore 30 health points",
      "grant poison resistance for 5 minutes"
    ],
    "vendor": "side_seller",
    "shippedBy": "express_delivery",
    "levelRequirement": 1
  },
  "grand_country_godly_layer_lens": {
    "id": "grand_country_godly_layer_lens",
    "name": "The Observer's Prism",
    "description": "The Observer's Prism is a crystalline lens forged from the very fabric of The Grand Country's dimensional strata, its surface shimmering with the fleeting colors of alternate layers. This relic reveals hidden pathways with a 20% chance when gazed through and detects illusions with a 30% accuracy rate, granting temporary insight that increases Perception by 10%. Prolonged use risks driving one mad, as the layers within The Grand Country whisper secrets best left undisturbed.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Reveal Hidden Pathways",
      "Detect Illusions"
    ],
    "vendor": "layer_market",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Pathways",
        "rules": "The user must spend a minute gazing through the prism to have a 20% chance of revealing a hidden pathway. This effect is instantaneous and has no duration, but prolonged use can cause temporary madness."
      },
      {
        "title": "Detect Illusions",
        "rules": "By holding the prism up to light and focusing intently for 10 minutes, the user gains advantage on Perception checks against illusions for 24 hours. This effect requires a successful DC 15 Wisdom (Perception) check."
      }
    ],
    "levelRequirementReason": "This relic is crafted to be accessible even to low-level adventurers who seek to explore The Grand Country's mysteries.",
    "vendorReason": "Layer Market specializes in exotic and unique items from the dimensional strata, making it a logical vendor for this prism.",
    "shippingDetail": "Ships via the dimensional portal, but due to the delicate nature of the prism, it requires an experienced courier. Delivery usually takes three days.",
    "usage": {
      "activation": "Minute action",
      "duration": "Instantaneous; lasts until used or lost",
      "endsWhen": "Used or lost",
      "charges": "Unlimited"
    },
    "priceReason": "The prism's rarity and the unique skills required for its creation justify a price of 1000 XP.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T01:37:59.148053+00:00",
    "aiReviewedAt": "2026-07-25T01:37:59.148053+00:00",
    "aiReviewVersion": 1
  },
  "internet_phantom_armor": {
    "id": "internet_phantom_armor",
    "name": "Nullspace Plate Armor",
    "description": "Forged from the forgotten websites and lost login credentials of ancient cyber realms, Nullspace Plate Armor flickers with a digital sheen. Wario's assurances that it’s 'surprisingly comfy… for something made of broken dreams' ring true, as it provides unyielding protection while subtly siphoning mana from nearby entities like a digital vacuum cleaner. This armor is said to have been crafted by the last internet phantom in an era long past.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Mana Drain",
      "Cyber Flicker"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Mana Drain",
        "rules": "The armor deals 2 necrotic damage per attack and has a 5% chance to inflict 'Data Rot' (target suffers minor stat penalties). The effect ends when the wearer takes an action or when they are no longer in contact with a magical source."
      },
      {
        "title": "Cyber Flicker",
        "rules": "While wearing this armor, the user has advantage on saving throws against being charmed and has resistance to psychic damage. The effect ends if the wearer is knocked unconscious or if they remove the armor."
      }
    ],
    "levelRequirementReason": "Crafted from ancient cyber fragments, Nullspace Plate Armor requires a high level of magical understanding to wield.",
    "vendorReason": "Wario's vast knowledge and connections in the digital underworld allow him to procure such unique relics.",
    "shippingDetail": "Ships with a 24-hour delay via the Cyber Courier’s secure data stream.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; ends on removal or knock unconscious",
      "endsWhen": "Knocked unconscious, armor removed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a unique, high-rarity item crafted from ancient cyber fragments.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:37:56.298539+00:00",
    "aiReviewedAt": "2026-07-25T01:37:56.298539+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_oracle_shard": {
    "id": "internet_godly_oracle_shard",
    "name": "The Echoing Singularity",
    "description": "The Echoing Singularity, a shard of digital essence, hums with raw data and cryptic omens. When held, it pulses with insights into future events, yet its fickle nature can drive even the most level-headed into madness. Crafted from an ancient AI's core, this relic contains vast troves of information—rumored to include every viral cat video ever created… or perhaps not. Its whispers are both a gift and a curse.",
    "category": "premium",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "prophetic visions",
      "intelligence boost"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prophetic Vision",
        "rules": "Activates as an action, granting the user one random effect from a list of future events. The user must succeed on a DC 15 Wisdom saving throw or risk becoming temporarily insane for 24 hours."
      },
      {
        "title": "Intelligence Boost",
        "rules": "Passively grants +3 to Intelligence and +5 to Wisdom as long as the shard is held, providing enhanced analytical and insight capabilities."
      }
    ],
    "levelRequirementReason": "This shard requires no specific level as it offers a wide range of benefits and risks.",
    "vendorReason": "The data dealer specializes in rare digital artifacts, and the Echoing Singularity is one such piece.",
    "shippingDetail": "Ships via Dimensional Portal's express service with a guaranteed delivery time of three days.",
    "usage": {
      "activation": "Activates as an action to access a prophetic vision.",
      "duration": "Instantaneous effect; lasts until used or until the next long rest.",
      "endsWhen": "The vision ends immediately on failure of the saving throw.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced to offer a mix of utility and risk, this shard is priced at 1000 XP, reflecting its unique combination of benefits and potential dangers.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-25T01:38:14.961662+00:00",
    "aiReviewedAt": "2026-07-25T01:38:14.961662+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_glowing_orb": {
    "id": "pokemon_item_glowing_orb",
    "name": "Radiant Poffin",
    "description": "The Radiant Poffin is a glistening orb harvested from Pokémon with exceptionally bright auras. This delicacy not only boosts your Special Attack by 35% for 12 seconds but also has a 10% chance to ignite the target with a burn, dealing an additional 8d6 fire damage over 4 turns. Consuming one is like feeding a spark of pure energy into your Pokémon's body, preparing it for its most devastating strikes.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 72,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Boost Special Attack",
      "Burn Chance"
    ],
    "vendor": "pokemart",
    "shippedBy": "Winged Pokemon Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boost Special Attack",
        "rules": "When consumed, the Radiant Poffin grants a +35% increase to your Pokémon's Special Attack for 12 seconds. This effect can be triggered once per day."
      },
      {
        "title": "Burn Chance",
        "rules": "There is a 10% chance that the target will catch on fire, dealing 8d6 fire damage over 4 turns and imposing the Burn condition. The burn ends when the target completes its next turn without taking any action."
      }
    ],
    "levelRequirementReason": "The Radiant Poffin is a versatile consumable that can be used by any trainer, regardless of their current level.",
    "vendorReason": "Pokemarts are known for offering a wide variety of items that cater to all Pokémon trainers, from beginners to veterans.",
    "shippingDetail": "Delivered swiftly by the Winged Pokemon Delivery service, often arriving within an hour of purchase in Pokemart branches nationwide.",
    "usage": {
      "activation": "Eaten as a food item",
      "duration": "12 seconds",
      "endsWhen": "Ends when the duration expires or the effect is interrupted by another action",
      "charges": "Use once per day"
    },
    "priceReason": "The Radiant Poffin's balanced price reflects its significant boost to Special Attack and additional burn chance, offering a strategic advantage in battle.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:38:12.878235+00:00",
    "aiReviewedAt": "2026-07-25T01:38:12.878235+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_giant_mushroom_stool": {
    "id": "mushroom_kingdom_item_giant_mushroom_stool",
    "name": "Giant Mushroom Stool",
    "description": "The Giant Mushroom Stool, a relic of the Mushroom Kingdom's eccentric craftsmanship, is an oversized, intricately carved seat made from the same resilient fungi that grow in the kingdom's lush fields. Its sturdy cap offers surprisingly comfortable seating for even the largest of visitors, and its roots provide a minor but steady boost to balance, reducing the risk of accidental slips by 50%. A whimsical design element ensures that any coins dropped within a five-foot radius have a 10% chance of being scooped up into your pouch.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧯",
    "stock": 35,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "balance_boost",
      "coin_finder"
    ],
    "vendor": "wario_direct",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Balance Boost",
        "rules": "The Giant Mushroom Stool grants the user a +2 bonus to Dexterity saving throws and ability checks related to balance. This effect lasts for 1 minute, ending if the user falls prone or takes any action other than moving up to their speed."
      },
      {
        "title": "Coin Finder",
        "rules": "While seated on the Giant Mushroom Stool, you have a 10% chance of finding a coin within a five-foot radius during each short rest. This effect does not function if you are engaged in combat or other activities that would disrupt your concentration."
      }
    ],
    "levelRequirementReason": "The Giant Mushroom Stool is designed for beginners and travelers, providing comfort without requiring any specific level of expertise.",
    "vendorReason": "Wario Direct caters to adventurers who need a break from their journeys, offering items that enhance both comfort and convenience.",
    "shippingDetail": "Delivered by the Mushroom Cart, known for its reliable service and speedy deliveries across the kingdom.",
    "usage": {
      "activation": "Passive effect upon sitting on the stool.",
      "duration": "1 minute per short rest or until you fall prone or take an action other than moving up to your speed.",
      "endsWhen": "The duration ends if the user falls prone, takes any action other than moving up to their speed, or after 5 minutes of inactivity.",
      "charges": "Unlimited"
    },
    "priceReason": "The Giant Mushroom Stool provides a significant balance boost and coin-finding utility at an affordable price for adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:39:00.640828+00:00",
    "aiReviewedAt": "2026-07-25T01:39:00.640828+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_koopa_troopa_gold_coin_charm": {
    "id": "mushroom_kingdom_item_koopa_troopa_gold_coin_charm",
    "name": "Koopa Troopa Gold Coin Charm",
    "description": "A gleaming gold coin charm, purportedly favored by Koopa Troopas. This collector's item not only brings a steady stream of loose change but also subtly attracts nearby small coins to your person. The charm’s origins are shrouded in the Mushroom Kingdom’s lore, making it a coveted piece among adventurers and collectors alike. Its shiny surface is etched with intricate patterns that shimmer under torchlight, hinting at its magical properties.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💰",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "coin_attraction",
      "gold_gain"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "snail_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Attraction",
        "rules": "As a bonus action, the charm attracts nearby loose coins and small change. These items are teleported to your person, with a maximum of five copper pieces or an equivalent in smaller denominations."
      },
      {
        "title": "Gold Gain",
        "rules": "At the end of each day, there is a 20% chance that you gain one additional copper piece as if by finding it. This effect does not stack and resets after seven days."
      }
    ],
    "levelRequirementReason": "The charm's effects are subtle but reliable, making it accessible to even the most novice adventurers.",
    "vendorReason": "Koopa Shop specializes in unique and collectible items favored by Koopas, including this rare charm.",
    "shippingDetail": "The charm is delivered via snail courier, known for its reliability even in the Mushroom Kingdom's challenging landscapes.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "When expended or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The charm’s unique and beneficial effects, coupled with its limited stock and collector's value, justify the price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:38:27.542756+00:00",
    "aiReviewedAt": "2026-07-25T01:38:27.542756+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wario_royal_banner": {
    "id": "mushroom_kingdom_item_wario_royal_banner",
    "name": "Wario Royal Banner",
    "description": "The Wario Royal Banner, a grand and intimidating relic from Wario's reign, is crafted from dark velvet embroidered with gold thread that once gleamed under his watchful eye. It grants its bearer a +2 bonus to Strength checks as well as the chance to find hidden treasure with a roll of 15 or higher. Display it in your camp at night and you may attract swarms of mushrooms, but beware—their presence might not always be welcome.",
    "category": "faction",
    "price": 1000,
    "icon": "👑",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increased_strength",
      "chance_to_find_treasure"
    ],
    "vendor": "wario_direct",
    "shippedBy": "giant_mushroom_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Increased Strength",
        "rules": "While holding the banner, the wielder gains a +2 bonus to Str checks. This effect lasts until you sheath the banner."
      },
      {
        "title": "Chance to Find Treasure",
        "rules": "When you display the banner at night within 50 feet of your campsite and roll a d10, on a result of 15 or higher, you find a hidden treasure. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "The banner's dark magic requires a certain level of strength to wield without attracting unwanted attention.",
    "vendorReason": "Wario himself ensures that the banner is only sold directly, preserving its potency and legend.",
    "shippingDetail": "The banner must be shipped via giant mushroom courier, ensuring it arrives in one piece.",
    "usage": {
      "activation": "Passive effect while holding the banner.",
      "duration": "Until you sheath or put away the banner.",
      "endsWhen": "You put away the banner.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other mythic items, this banner offers significant but not overpowered benefits.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T01:38:41.783022+00:00",
    "aiReviewedAt": "2026-07-25T01:38:41.783022+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_temporal_echo": {
    "id": "connectopia_temporal_echo",
    "name": "Chronal Resonance Device",
    "description": "The Chronal Resonance Device is a sleek, chronometer-shaped artifact that hums with temporal energy. Crafted from ancient, iridescent quartz and bound by the whispers of time itself, it allows users to glimpse fleeting visions of potential futures. Wario's rumored use hints at its power, yet the echoes can distort reality, making predictions unreliable. Use cautiously; the device is said to have caused minor temporal disturbances in the hands of the unwary.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "random_vision",
      "chance_to_predict_enemy_movements"
    ],
    "vendor": "Craft Corner",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Random Vision",
        "rules": "As a bonus action, you can activate the device to briefly perceive one random future event within a 30-foot radius. The vision lasts for 1 round but does not grant insight into specific outcomes. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Chance to Predict Enemy Movements",
        "rules": "For the duration of your next combat encounter, you gain advantage on Dexterity (Stealth) checks and have a 20% chance to predict an enemy's movement within 30 feet. This effect ends when you finish a short rest or if you are incapacitated."
      }
    ],
    "levelRequirementReason": "Requires at least 10th level to handle the temporal energy without risk of distortion.",
    "vendorReason": "Craft Corner specializes in mystical and arcane devices, making it a logical vendor for the Chronal Resonance Device.",
    "shippingDetail": "Ships via Dimensional Portal, ensuring safe arrival through any temporal disruptions.",
    "usage": {
      "activation": "Bonus action to activate; combat encounter duration for the second effect.",
      "duration": "Instantaneous activation with a 1-round vision and combat encounter duration for prediction chance.",
      "endsWhen": "The first effect ends after 1 round, the second at the end of your next combat encounter or when you finish a short rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced as an Epic rarity item with limited utility but significant strategic value.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:38:45.382764+00:00",
    "aiReviewedAt": "2026-07-25T01:38:45.382764+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dough_boots": {
    "id": "leclaire_isle_item_dough_boots",
    "name": "Elastic Dough Boots",
    "description": "The Elastic Dough Boots are crafted from the finest, most pliable dough in L'Eclaire Isle. These squishy boots provide surprisingly good traction on slippery surfaces and an unsettling ability to mold around your feet, making them perfect for sneaking or escaping sticky situations. The dough is said to be enchanted by the bakers of L'Eclaire Isle, granting the wearer a +2 bonus to Dexterity saving throws when moving silently.",
    "category": "equipment",
    "price": 1000,
    "icon": "👟",
    "stock": 3,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Improved Traction",
      "Silent Movement"
    ],
    "vendor": "dough_depot",
    "shippedBy": "wagon_of_wonder",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Improved Traction",
        "rules": "When wearing these boots, your speed is increased by an additional 10 feet on slippery surfaces. This effect lasts for the duration of one short rest."
      },
      {
        "title": "Silent Movement",
        "rules": "You gain advantage on Dexterity (Stealth) checks when moving silently while wearing these boots. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "These boots are designed for anyone to use, as their squishy dough composition makes them versatile and comfortable.",
    "vendorReason": "Dough Depot is known throughout L'Eclaire Isle for its exceptional craftsmanship in creating footwear that combines comfort with functionality.",
    "shippingDetail": "Ships via the Wagon of Wonder, a trusted courier service known for delivering goods swiftly and safely.",
    "usage": {
      "activation": "Passive effect while wearing boots; requires no action to activate.",
      "duration": "Duration is tied to the wearer's time spent in L'Eclaire Isle or until rested.",
      "endsWhen": "The effect ends at the end of one short rest, or when you remove them from L'Eclaire Isle.",
      "charges": "Unlimited use."
    },
    "priceReason": "The boots are crafted with enchanted dough and fine craftsmanship, making them a rare yet affordable luxury for adventurers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:39:33.198489+00:00",
    "aiReviewedAt": "2026-07-25T01:39:33.198489+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_scroll": {
    "id": "leclaire_isle_item_frosting_scroll",
    "name": "Scroll of Decadent Frosting",
    "description": "The Scroll of Decadent Frosting, penned in a shimmering confection of sugar and cream, is sealed by an intricately crafted miniature sugar plum. This ancient treatise was created by a Dough Folk sorcerer known for his indulgences. When unrolled, it releases a wave of restorative sweetness that can rapidly mend wounds and restore exhausted adventurers to full vigor. The scroll's creator ensured its potency with ingredients from the frozen peaks of Frostpeak Isle, where only the purest snowflakes are found.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎂",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Heals Wounds",
      "Restores Exhaustion"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "nightly_delivery_gnomes",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heals Wounds",
        "rules": "When activated as an action, this scroll unleashes a wave of restorative sweetness that heals the target for 3d8 + 4 hit points. This effect has no save DC and can only be used once per long rest."
      },
      {
        "title": "Restores Exhaustion",
        "rules": "This scroll also restores one level of exhaustion, allowing the user to regain their full vigor instantly. There is no save required for this effect, but it can only be used once every 24 hours."
      }
    ],
    "levelRequirementReason": "The scroll's effects are balanced for first-level casters who require a reliable restorative tool.",
    "vendorReason": "Sweet Supplies is known for its extensive collection of magical confections and scrolls, including this Frostpeak Isle specialty.",
    "shippingDetail": "The scroll arrives in a sealed container to preserve the delicate frosting until it reaches its destination.",
    "usage": {
      "activation": "action",
      "duration": "instantaneous",
      "endsWhen": "used or destroyed upon activation",
      "charges": "unlimited, as long as material components are present"
    },
    "priceReason": "The scroll's rare ingredients and the specialized craftsmanship required for its creation justify this price.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:39:14.208088+00:00",
    "aiReviewedAt": "2026-07-25T01:39:14.208088+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_warrior_hide": {
    "id": "animatopia_warrior_hide",
    "name": "Rumbleclaw's Shoulder Plate",
    "description": "Forged from the unyielding hide of a Rumbleclaw bear, this shoulder plate is a marvel of ancient blacksmithry. Its weighty construction provides formidable protection, and its unique design allows for enhanced strength, making it an indispensable piece for warriors seeking to crush their foes with every strike. Crafted by the secretive Forgemaster Zephyr, this armor not only shields but also amplifies the wearer's physical prowess, ensuring that each blow carries greater impact.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "armor_4",
      "increased_strength_2"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "tracked_crate",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Armor +4",
        "rules": "The Rumbleclaw's Shoulder Plate provides a +4 bonus to AC, enhancing the wearer’s protection against all forms of attack."
      },
      {
        "title": "Increased Strength",
        "rules": "While wearing this shoulder plate, you gain a +2 bonus to STR checks and rolls. Additionally, your melee attacks deal an extra 1d6 force damage."
      }
    ],
    "levelRequirementReason": "This shoulder plate is designed for seasoned warriors who can best appreciate its weighty craftsmanship and enhanced combat capabilities.",
    "vendorReason": "The Beast Bazaar is known for offering unique, creature-inspired gear, making it the perfect vendor for a Rumbleclaw's Shoulder Plate.",
    "shippingDetail": "Shipped in a specially reinforced crate to ensure safe delivery of this heavy armor piece.",
    "usage": {
      "activation": "Passive effect; no activation required, the benefits are always present while wearing the shoulder plate.",
      "duration": "Instantaneous; effects last until removed or destroyed.",
      "endsWhen": "The armor is removed or destroyed by damage exceeding its hit points.",
      "charges": "Unlimited"
    },
    "priceReason": "The Rumbleclaw's Shoulder Plate offers exceptional protection and combat enhancement, making it a worthy investment for those seeking to bolster their defenses and strength.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:39:13.972824+00:00",
    "aiReviewedAt": "2026-07-25T01:39:13.972824+00:00",
    "aiReviewVersion": 1
  },
  "internet_faction_echochamber": {
    "id": "internet_faction_echochamber",
    "name": "The Algorithm's Blessing",
    "description": "The Algorithm's Blessing is an amulet forged from the very essence of a sentient AI known as The Algorithm, which oversees digital information flow across The Internet. This artifact grants you secure access to encrypted networks and protects against malicious data streams, but it also subtly alters your behavior, making you more predictable in online interactions. With this amulet, you can manipulate enemy AI systems into fear or confusion, but at the cost of becoming a less reliable hacker yourself.",
    "category": "faction",
    "price": 1000,
    "icon": "🤖",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Secure Network Access",
      "Manipulate Enemy Behavior"
    ],
    "vendor": "cyber_market",
    "shippedBy": "secure_transmission",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Secure Network Access",
        "rules": "As an action, activate The Algorithm's Blessing to gain advantage on Intelligence (Computers) checks for the next hour. This effect ends if you are knocked unconscious or if you remove the amulet."
      },
      {
        "title": "Manipulate Enemy Behavior",
        "rules": "Once per long rest, as an action, you can attempt to manipulate a hostile AI system within 100 feet into fear or confusion for up to 1 minute. The DC for this save is equal to 8 + your Intelligence modifier. This effect ends if the target AI regains consciousness or if the amulet's charges are depleted."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and advanced digital magic required to wield The Algorithm's Blessing demand a high level of expertise.",
    "vendorReason": "Cyber Market specializes in exotic and powerful artifacts related to the digital world, making it the ideal vendor for The Algorithm's Blessing.",
    "shippingDetail": "The amulet is carefully packaged and securely transmitted through encrypted channels to ensure its safe arrival.",
    "usage": {
      "activation": "Action or Reaction (requires concentration)",
      "duration": "Until the start of your next turn, or until you are knocked unconscious",
      "endsWhen": "You lose consciousness or remove the amulet from your person",
      "charges": "Unlimited, but requires a long rest to regain manipulation uses"
    },
    "priceReason": "The Algorithm's Blessing is priced at 1000 XP due to its unique digital magic and the specialized crafting required for such an artifact.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T01:39:28.370853+00:00",
    "aiReviewedAt": "2026-07-25T01:39:28.370853+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_geode_of_echoes": {
    "id": "earth_land_geode_of_echoes",
    "name": "Resonance Stone",
    "description": "The Resonance Stone, a geode smooth as glass and resonant like a bell, hums with ancient magic when struck. Its powerful concussive wave not only stuns foes within its vicinity but also has a peculiar knack for disarming any nearby Wario, who often finds himself without his usual weapon after the stone's strike. This artifact, crafted by forgotten alchemists of old, is a rare find and promises both awe and danger to those brave enough to wield it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 67,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "stuns_target",
      "disarms_weapon"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "rock_golem",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Concussive Wave",
        "rules": "When activated as a bonus action, the Resonance Stone emits a powerful concussive wave with an audible boom. Targets within a 10-foot radius must succeed on a DC 15 Dexterity saving throw or be stunned for 1 round."
      },
      {
        "title": "Disarm Weapon",
        "rules": "Additionally, there is a 25% chance (DC 14 Dexterity save) that the stone will disarm any weapon held by foes within its effect area. This effect occurs only once per short or long rest and targets must be wearing metal armor for it to have any chance of success."
      }
    ],
    "levelRequirementReason": "The Resonance Stone requires a minimum level of 3 due to its complexity and the risk involved in wielding such an ancient artifact.",
    "vendorReason": "Earth Emporium specializes in rare geological finds, including this stone, which is known for both its power and unpredictability.",
    "shippingDetail": "Ships via a Rock Golem, who may occasionally provide a free message or warning regarding the artifact's unpredictable nature.",
    "usage": {
      "activation": "Bonus action to strike the Resonance Stone.",
      "duration": "Instantaneous; effect ends when used.",
      "endsWhen": "The use of the stone exhausts its charge, requiring a short rest to recharge.",
      "charges": "1 charge per day"
    },
    "priceReason": "The Resonance Stone's rarity and the risks associated with its use justify its high price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:39:42.978479+00:00",
    "aiReviewedAt": "2026-07-25T01:39:42.978479+00:00",
    "aiReviewVersion": 1
  }
};
