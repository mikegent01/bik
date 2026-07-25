// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_053 = {
  "animatopia_scavenger_claw": {
    "id": "animatopia_scavenger_claw",
    "name": "Rumbling Root Claw",
    "description": "The Rumbling Root Claw, forged from an ancient petrified root beast, is a hefty weapon that feels as if it has been around since the dawn of the jungle. Its gnarled surface is etched with primal patterns that resonate with the earth's energy, and its weighty form allows you to dig through dense foliage effortlessly. When threatened, it can unleash a shockwave that momentarily dazes smaller creatures, buying you precious time for escape or counterattack.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "digging_expertise",
      "distract_enemy"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Winged Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Digging Expertise",
        "rules": "When using the Rumbling Root Claw to dig through soil or roots, you have advantage on Strength (Athletics) checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Distract Enemy",
        "rules": "As a bonus action, you can shake the Rumbling Root Claw in front of an enemy within 5 feet to create a shockwave. The target must succeed on a DC 12 Dexterity saving throw or be dazed until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The Rumbling Root Claw requires some proficiency with heavy weapons and an understanding of the jungle's natural forces.",
    "vendorReason": "The Tribal Trader has a deep connection to the local flora, which allows them to source unique petrified relics like this claw.",
    "shippingDetail": "Delivered swiftly by the Winged Couriers, but only available during daylight hours due to their limited flight range in the dense jungle canopy.",
    "usage": {
      "activation": "Bonus action or as part of a digging check (passive use)",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you make another Strength (Athletics) check with it or until the start of your next turn.",
      "charges": "Unlimited, but only one 'Distract Enemy' action can be used per long rest."
    },
    "priceReason": "The Rumbling Root Claw's unique material and its dual functionality as both a weapon and digging tool justify this price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T20:53:44.091892+00:00",
    "aiReviewedAt": "2026-07-23T20:53:44.091892+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_echoing_mask": {
    "id": "animatopia_echoing_mask",
    "name": "Whispering Mask of the Shaman",
    "description": "The Whispering Mask of the Shaman is crafted from the bones and feathers of Animatopia’s most ancient totems. It whispers primal calls that can summon a cloud of stinging hornets, blinding foes with their venomous sting. The mask also grants you the eerie ability to mimic the growls and howls of the forest, confusing your enemies into disarray. Legends speak of shamans who used this artifact to rally spirits or drive away intruders, but beware—its power is as unpredictable as it is potent.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎭",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "illusionary_sound",
      "chance_to_confuse"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Giant Beetle Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Summoning Swarm of Hornets",
        "rules": "As a bonus action, you can activate the mask to summon a swarm of hornets within 30 feet. This swarm lasts for 1 minute or until dismissed by an action. On a successful DC 14 Wisdom saving throw, targets become blinded for 1d4+2 rounds. The mask has three uses per long rest."
      },
      {
        "title": "Primal Mimicry",
        "rules": "As a bonus action, you can mimic the primal growls and howls of Animatopia’s beasts, causing confusion among nearby creatures within 30 feet for up to 1 minute. Targets must succeed on a DC 14 Wisdom saving throw or become confused until the end of their next turn. The mask has three uses per long rest."
      }
    ],
    "levelRequirementReason": "The mask requires a level 8 character due to its complex enchantments and the power it commands.",
    "vendorReason": "Beast Bazaar is known for its exotic and enchanted curiosities, including artifacts like the Whispering Mask of the Shaman.",
    "shippingDetail": "Ships via Giant Beetle Express, delivered within three days with a special delivery confirmation.",
    "usage": {
      "activation": "Bonus action to activate either effect.",
      "duration": "Swarm lasts for 1 minute or until dismissed; confusion effect lasts up to 1 minute.",
      "endsWhen": "The effect ends when the duration expires or if you dismiss it with a bonus action.",
      "charges": "Three uses per long rest."
    },
    "priceReason": "The mask is priced at 1000 XP due to its unique enchantments and limited daily stock supply.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-23T20:53:30.583679+00:00",
    "aiReviewedAt": "2026-07-23T20:53:30.583679+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_ember_charm": {
    "id": "animatopia_ember_charm",
    "name": "Heart of the Ember Spirit",
    "description": "The Heart of the Ember Spirit glows with a soft, pulsating heat that crackles and dances like ancient fire spirits' breath. This rare charm is said to be forged from the molten remains of forgotten volcanoes. When held aloft, it releases a burst of fiery energy capable of both lighting torches and setting small objects ablaze. Only those who have earned its trust may wield this relic from the heart of the earth.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "fire_burst",
      "ignition"
    ],
    "vendor": "forest_market",
    "shippedBy": "Hot Air Balloon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Burst",
        "rules": "When activated as an action, the Heart unleashes a burst of fiery energy in a 10-foot radius. Targets within this area must make a DC 15 Dexterity saving throw or take 2d6 fire damage and be set ablaze for the duration of their next turn."
      },
      {
        "title": "Ignition",
        "rules": "The Heart can be used to light small objects such as torches. This does not expend charges but may only be done once per day."
      }
    ],
    "levelRequirementReason": "This charm's power is too great for lower-level characters, ensuring it remains a valuable tool for more experienced adventurers.",
    "vendorReason": "The forest market often receives rare items from the nearby volcanic regions where this relic was discovered.",
    "shippingDetail": "Delivered by hot air balloon, ensuring safe and swift transportation of such a volatile item.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use; recharges daily at dawn.",
      "charges": "1/Day"
    },
    "priceReason": "While not a high-level item, the Heart's rarity and unique properties make it worth this amount of XP.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-23T20:53:26.680649+00:00",
    "aiReviewedAt": "2026-07-23T20:53:26.680649+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_fang_charm": {
    "id": "animatopia_fang_charm",
    "name": "Howler's Echo Charm",
    "description": "Howler's Echo Charm is a gnarled, fang-shaped trinket crafted from the legendary Rumblehowl, an irascible creature known for its deep, resonant roars that echo through the night. This charm amplifies any shout or roar you unleash, making it an invaluable tool in both combat and social situations. With each use, your voice can terrify smaller creatures within 30 feet, driving them into a panic with a 15% chance to succeed at frightening them. The Rumblehowl's fang imbues the charm with a natural resistance to fear effects, granting you a +2 bonus on saving throws against such spells or abilities.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐺",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Voice Amplification",
      "Frightening Roar"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged_parrot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Voice Amplification",
        "rules": "Activate as an action. Your shouts and roars are amplified, increasing the volume by +20%. This effect lasts for 1 minute or until you use this charm again."
      },
      {
        "title": "Frightening Roar",
        "rules": "Activate once per short rest. You can use your action to unleash a terrifying roar within 30 feet, forcing creatures in the area to make a DC 12 Wisdom saving throw or become frightened for 1 minute, as long as you are not incapacitated."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurers can harness this charm's power to intimidate and protect themselves.",
    "vendorReason": "The Tribal Trader specializes in exotic goods from far-flung tribes, including the Rumblehowl fangs used in this charm.",
    "shippingDetail": "Delivered swiftly by a winged parrot, ensuring you receive your order quickly and intact.",
    "usage": {
      "activation": "Action or Bonus Action for Voice Amplification; Action for Frightening Roar",
      "duration": "1 minute for Voice Amplification; 1 minute or until reactivated for Frightening Roar",
      "endsWhen": "Effect ends when the duration expires or you use this charm again.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The charm's rarity and the Rumblehowl fang material contribute to its substantial value.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:53:43.794101+00:00",
    "aiReviewedAt": "2026-07-23T20:53:43.794101+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_blade": {
    "id": "animatopia_spirit_blade",
    "name": "Echo of the Ancestors",
    "description": "The Echo of the Ancestors is a finely crafted katana, its blade etched with the visages of ancient protectors from Animatopia's lost tribes. It whispers tactical advice, often about foraging and avoiding predators, but this time-honored sword grants its wielder advantage on Perception checks to discern animal tracks. The blade hums with an ethereal energy that enhances one’s understanding of the natural world, making it a favored weapon among those who respect the wild.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Perception checks involving animal tracks",
      "Tactical advice (5% chance)"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant beetle",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Advantage on Perception Checks",
        "rules": "Gain advantage on Perception checks to discern animal tracks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Tactical Advice",
        "rules": "There is a 5% chance that when you attack with this weapon, it whispers tactical advice. The advice is often about foraging or avoiding predators and has no game effect but is always in-character advice from the blade’s spirit."
      }
    ],
    "levelRequirementReason": "The Echo of the Ancestors requires a minimum level to properly wield its spiritual guidance.",
    "vendorReason": "The Beast Bazaar deals in rare and unique items from Animatopia, making it fitting for such an artifact.",
    "shippingDetail": "Shipped by a giant beetle, the Echo of the Ancestors arrives with a flourish, delivered to your doorstep by nature’s own courier.",
    "usage": {
      "activation": "Passive effect; activated on attack or when making Perception checks involving animal tracks.",
      "duration": "Instantaneous",
      "endsWhen": "On the start of your next turn after using it in combat or checking for animal tracks.",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "The Echo of the Ancestors is priced at 1000 XP due to its rare craftsmanship and unique spiritual abilities.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:53:58.651368+00:00",
    "aiReviewedAt": "2026-07-23T20:53:58.651368+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_godly_spirit_amulet": {
    "id": "animatopia_godly_spirit_amulet",
    "name": "Heart of the Great Howl",
    "description": "Recovered from a sacred Rumblehowl burial ground, this pulsating amulet is carved from ancient stone imbued with the essence of the Great Howls themselves. The Heart whispers calming energy into your soul, granting you unnerving resilience and a surprisingly soothing presence that earns your acceptance among the Rumblehowls. While they may not bite, their howls can still be quite disconcerting, but under this amulet's protection, you remain safe from their wrath.",
    "category": "premium",
    "price": 1000,
    "icon": "🐾",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Primal Resilience",
      "Soothing Calm"
    ],
    "vendor": "forest_market",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Primal Resilience",
        "rules": "When a creature makes a saving throw against fear or charm effects, you have advantage on the roll. Additionally, if you are in a state of panic, this amulet grants you temporary hit points equal to 1d6 + your Constitution modifier."
      },
      {
        "title": "Soothing Calm",
        "rules": "At the start of each of your turns for up to one minute, there is a 25% chance that you heal 1d6 hit points. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Heart requires significant experience and understanding of primal magic to wield its protective powers.",
    "vendorReason": "Forest Market, known for its exotic and rare finds, has a special arrangement with the Rumblehowls to trade in sacred relics like this amulet.",
    "shippingDetail": "The Heart is shipped via a trusted dragon courier who ensures the safe arrival of such powerful artifacts.",
    "usage": {
      "activation": "Passive effect, activated upon donning the amulet.",
      "duration": "Until removed or until you finish a long rest.",
      "endsWhen": "When removed from your person or at the end of a long rest.",
      "charges": "Unlimited, recharges after a long rest."
    },
    "priceReason": "The Heart's price reflects its rarity and the profound magic it contains, providing a significant yet balanced value for adventurers.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-23T20:54:14.370317+00:00",
    "aiReviewedAt": "2026-07-23T20:54:14.370317+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_rusty_gear": {
    "id": "connectopia_rusty_gear",
    "name": "Overgeared Gizmo",
    "description": "The Overgeared Gizmo is a rusted, cobbled-together contraption that looks like it should be in a museum rather than on your person. Crafted from salvaged parts and sheer willpower, its gears hum with barely contained energy. Despite its humble appearance, the Gizmo grants you a +1 bonus to Strength checks and an additional 5% chance of scoring a critical hit during combat. It's a testament to human ingenuity, even if it doesn't seem like much at first glance.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increase_strength_1",
      "chance_of_critical_hit_5_percent"
    ],
    "vendor": "block_smith",
    "shippedBy": "Block Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increase Strength",
        "rules": "While wearing the Overgeared Gizmo, you gain a +1 bonus to Strength checks and saving throws. This effect is always active while the item is equipped."
      },
      {
        "title": "Critical Hit Boost",
        "rules": "When you score a critical hit with an attack roll or ability check, there's a 5% chance that the damage dealt is doubled. This effect has no cooldown and can occur multiple times per combat."
      }
    ],
    "levelRequirementReason": "The Overgeared Gizmo requires only level 1 to wear as its effects are minor but useful for most adventurers at this stage.",
    "vendorReason": "Block Smith is known for their eclectic collection of unique and functional gear, including the Overgeared Gizmo which showcases ingenuity and resourcefulness.",
    "shippingDetail": "The Block Courier ensures that your Gizmo arrives in pristine condition with an expedited delivery time.",
    "usage": {
      "activation": "Passive effect while equipped.",
      "duration": "Instantaneous; always active while worn.",
      "endsWhen": "Destroyed when the item breaks beyond repair or sold to another party.",
      "charges": "Unlimited"
    },
    "priceReason": "The Overgeared Gizmo is priced at 1000 XP due to its unique construction and balanced utility, making it a fair addition to any adventurer's gear.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:54:18.186902+00:00",
    "aiReviewedAt": "2026-07-23T20:54:18.186902+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_void_resonator": {
    "id": "connectopia_void_resonator",
    "name": "Nullity Amplifier",
    "description": "The Nullity Amplifier hums with an unsettling silence, its surface etched with runes that shimmer faintly in the dark. Crafted from a fragment of forgotten reality, this device is said to briefly disrupt the flow of time and space, causing minor chaos around it. Those who dare wield it risk drawing unwanted attention from entities that lurk beyond the veil of existence, making it an item of great peril and power.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Minor Reality Disturbance",
      "Reduced Enemy Damage"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Shadow Delivery",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Minor Reality Disturbance",
        "rules": "Activating the Amplifier causes a ripple in reality, causing all creatures within 10 feet to roll a saving throw (DC 15). On a failed save, they are incapacitated for 1 minute. This effect has no save or ends if the user drops the Amplifier."
      },
      {
        "title": "Reduced Enemy Damage",
        "rules": "Enemies within 30 feet of the Amplifier have their attack damage reduced by 2 until the end of the user's next turn. If the user takes any damage, this effect ends immediately."
      }
    ],
    "levelRequirementReason": "Crafted from a fragment of forgotten reality, only those with sufficient knowledge and power can wield the Nullity Amplifier safely.",
    "vendorReason": "As an expert in forbidden crafts, Craft Corner is known for their ability to handle such powerful and dangerous items.",
    "shippingDetail": "Delivered under cover of darkness by Shadow Delivery's elite couriers, ensuring the Nullity Amplifier arrives without drawing attention.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The user drops the Amplifier or takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its inherent risk and utility, this item is priced at a level suitable for those who can afford such dangers.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:54:14.650934+00:00",
    "aiReviewedAt": "2026-07-23T20:54:14.650934+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravity_boots": {
    "id": "doughnut_hole_gravity_boots",
    "name": "Voidwalker's Boots",
    "description": "Voidwalker's Boots are a pair of enigmatic footwear crafted from shadowed leather and adorned with runes that shimmer like trapped starlight. These boots allow you to manipulate gravity, defying the laws of physics in both subtle and dramatic ways. Stomp down on the ground and briefly float several feet above it, or reverse the effect to create an unstable trip hazard for those who dare to challenge you. The very air seems to twist around them as if they were made from the fabric of another dimension.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "gravity_manipulation",
      "unstable_trip_hazard"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "dimensional_mail",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Gravity Manipulation",
        "rules": "As a bonus action, you can manipulate gravity to briefly float yourself or others up to 15 feet above the ground. This effect lasts for 1 round and requires concentration. If you fail your Concentration save (DC 14), you fall prone instead."
      },
      {
        "title": "Unstable Trip Hazard",
        "rules": "As an action, you can reverse the gravity manipulation to create a trip hazard within a 5-foot cube in front of you. Any creature that enters or starts its turn there must make a Dexterity saving throw (DC 14) or fall prone and take 2d6 force damage."
      }
    ],
    "levelRequirementReason": "This item requires significant magical power to wield effectively, suitable for high-level spellcasters.",
    "vendorReason": "Hole Hawker specializes in arcane curiosities and items that challenge the boundaries of reality, making Voidwalker's Boots a perfect fit for their inventory.",
    "shippingDetail": "The boots are shipped via Dimensional Mail, which ensures they reach you intact but may cause minor dimensional disturbances along the way.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "1 round (gravity manipulation) / Instantaneous (unstable trip hazard)",
      "endsWhen": "Concentration ends for gravity manipulation; creature successfully saves against unstable trip hazard",
      "charges": "Unlimited, but only 2 uses per long rest"
    },
    "priceReason": "The boots' rarity and unique effects justify their price of 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:54:33.269422+00:00",
    "aiReviewedAt": "2026-07-23T20:54:33.269422+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_compass": {
    "id": "doughnut_hole_anomaly_compass",
    "name": "The Center's Whisper",
    "description": "The Center's Whisper is a peculiar compass made from an ancient, rusted key found at the heart of the city. It points not north but towards anomalies—places where reality bends and twists. When activated, it occasionally leads you to bizarre locales like a hidden bakery in the sky or a café that serves pastries from the future. However, its readings are unreliable, sometimes sending adventurers on wild goose chases through time and space.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧭",
    "stock": 35,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "teleport_to_anomaly",
      "reveal_hidden_objects"
    ],
    "vendor": "center_seller",
    "shippedBy": "wormhole_express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Teleport to Anomaly",
        "rules": "Activating the compass has a 20% chance of teleporting the user to a random anomaly within 50 meters. The exact destination is unpredictable and could be anything from a pocket dimension filled with sentient sprinkles to a portal leading to last Tuesday. This effect lasts until the end of your next turn."
      },
      {
        "title": "Reveal Hidden Objects",
        "rules": "The compass has a 10% chance to reveal hidden objects within 30 feet, such as secret doors or caches. Once activated, this effect persists for one minute and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This item's unpredictable nature requires a certain level of experience to handle its risks.",
    "vendorReason": "The Center's Seller specializes in items related to the city's heart, making this compass an ideal addition to their inventory.",
    "shippingDetail": "Due to the nature of its contents, it must be shipped via wormhole express to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn or until an anomaly is reached",
      "endsWhen": "Ends when a teleport occurs or the next turn begins",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The item's rarity and unpredictable nature justify its moderate price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T20:54:30.957265+00:00",
    "aiReviewedAt": "2026-07-23T20:54:30.957265+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_mythic_singularity_donut": {
    "id": "doughnut_hole_mythic_singularity_donut",
    "name": "The Zero Point Delight",
    "description": "The Zero Point Delight is a doughnut that harbors a micro-singularity at its core, rumored to be a fragment from an ancient cosmic anomaly. Consuming it can either grant you a burst of incredible power or cause your body's atoms to rearrange into a slightly different configuration, as if the universe itself has taken a playful bite out of you. Only the Void Vendor dares to sell such a dangerous delicacy, and only those who have proven their worth beyond level 20 are deemed worthy of its risk.",
    "category": "premium",
    "price": 1000,
    "icon": "🍩",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "cosmic_power_burst",
      "unstable_molecular_realignment"
    ],
    "vendor": "void_vendor",
    "shippedBy": "chronal_delivery",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Cosmic Power Burst",
        "rules": "Upon consuming the Zero Point Delight, you gain a +2 bonus to one ability score of your choice for 1 minute. This effect has a 5% chance to occur upon each bite taken. If the effect activates, it cannot be triggered again until after resting."
      },
      {
        "title": "Unstable Molecular Realignment",
        "rules": "For 10 minutes after consuming the Zero Point Delight, you are immune to the effects of gravity within a 5-foot radius around you. During this time, you can move through creatures and objects as if they were difficult terrain. This effect ends early if you take any damage."
      }
    ],
    "levelRequirementReason": "Only those with proven expertise at level 20 or higher should attempt to consume such a volatile item.",
    "vendorReason": "The Void Vendor specializes in items that defy the laws of physics and logic, making the Zero Point Delight an ideal addition to their wares.",
    "shippingDetail": "Chronal Delivery ensures the Zero Point Delight is delivered intact through a series of temporal shortcuts, bypassing any potential disruptions in space-time.",
    "usage": {
      "activation": "Eating the entire Zero Point Delight",
      "duration": "10 minutes for Unstable Molecular Realignment; 1 minute for Cosmic Power Burst (per use)",
      "endsWhen": "Effect duration ends or you take damage, whichever comes first. The effect cannot be triggered again until after resting.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Zero Point Delight is priced at 1000 XP due to its volatile nature and the risk it poses, making it a premium item for those who dare to experiment with cosmic anomalies.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-23T20:54:52.553955+00:00",
    "aiReviewedAt": "2026-07-23T20:54:52.553955+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_ironclad_banner": {
    "id": "the_edge_ironclad_banner",
    "name": "Crimson Resolve",
    "description": "The Crimson Resolve is a banner crafted from the very essence of those lost to The Edge, forged in a furnace of despair. Its crimson fabric crackles with the energy of unyielding will, bolstering your resolve and resilience against the abyssal terrors that lurk beyond. Only the most seasoned heroes should wield this banner in combat; it radiates an aura that grants a +3 bonus to morale checks for 5 rounds, while also offering resistance to charm effects from creatures of the abyss for 4 rounds.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Resolve Boost",
      "Abysmal Resistance"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "aerial_drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Resolve Boost",
        "rules": "When activated as a bonus action, this banner grants you and your allies within 30 feet a +3 bonus to morale checks for 5 rounds. This effect has no save DC and is usable once per short or long rest."
      },
      {
        "title": "Abysmal Resistance",
        "rules": "This banner provides resistance to charm effects from creatures of the abyss for 4 rounds when activated as a bonus action. The duration ends if you take damage, or if the effect that granted this resistance is ended."
      }
    ],
    "levelRequirementReason": "Only seasoned heroes with the experience to handle such powerful items should wield the Crimson Resolve.",
    "vendorReason": "The Edge Outpost specializes in rare and dangerous artifacts, ensuring that only those who need it most can access such a potent banner.",
    "shippingDetail": "The aerial drone delivery ensures swift transport of the banner to your doorstep, but it is fragile; care must be taken during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of next turn or until you take damage",
      "endsWhen": "You take damage or another effect ends this ability",
      "charges": "Unlimited, but only usable once per short or long rest"
    },
    "priceReason": "The Crimson Resolve's balanced price reflects its rarity and the limited number of heroes capable of wielding it effectively.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:54:33.503975+00:00",
    "aiReviewedAt": "2026-07-23T20:54:33.503975+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_voidwalker_token": {
    "id": "the_edge_voidwalker_token",
    "name": "Fragment of the Shifting Plane",
    "description": "The Fragment of the Shifting Plane is a shimmering, iridescent crystal that hums with chaotic energy. Crafted from the very fabric of the plane itself, it grants brief passage through rifts in reality. Use this relic carefully; one misstep could tear you into the void, where you might never return. It's said that those who have used its power speak of a surreal journey, but many are never heard from again.",
    "category": "faction",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "+5 to saving throws against teleportation effects",
      "10% chance of attracting void entities"
    ],
    "vendor": "final_shop",
    "shippedBy": "Void Messenger",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Teleport to a random location within 30 feet (once per day)",
        "rules": "Activate as an action. You can use this ability once per long rest. The destination is determined randomly and is within 30 feet of your current position, but you cannot target yourself or any creature with an Intelligence score higher than yours."
      },
      {
        "title": "10% chance of attracting void entities",
        "rules": "When used, there's a 10% chance that void creatures will be drawn to the area. These entities are hostile and attempt to claim you as their prize. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This relic is crafted from the very fabric of the plane itself, making it too powerful for those with less experience.",
    "vendorReason": "Final Shop is known to trade in rare and dangerous artifacts, including relics that can transport you through dimensions.",
    "shippingDetail": "The Void Messenger ensures safe delivery but cannot guarantee the safety of its passengers due to the unpredictable nature of the void.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use or interrupted by a hostile creature.",
      "charges": "Once per long rest"
    },
    "priceReason": "This relic's price is balanced to reflect its rarity and the potential danger it poses, requiring careful handling.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-24T23:50:53.711640+00:00",
    "aiReviewedAt": "2026-07-24T23:50:53.711640+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sticky_surprise": {
    "id": "leclaire_isle_sticky_surprise",
    "name": "Sticky Surprise Dough Bomb",
    "description": "The Sticky Surprise Dough Bomb appears as a gleaming, golden pastry with a heart-shaped core. Crafted by the mischievous Dough Folk of Le Claire Isle, this treat explodes into a cloud of sticky dough upon impact, enveloping foes in a sugary embrace that clings to them like a second skin. The explosion is not only damaging but also leaves a trail of gooey residue that reduces movement speed and temporarily boosts your own agility.",
    "category": "consumables",
    "price": 1000,
    "icon": "💣",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Explosive Sugar Cloud",
      "Slowed Movement"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Explosive Sugar Cloud",
        "rules": "When thrown, the Sticky Surprise Dough Bomb explodes in a 5-foot-radius burst centered on a point of your choice within 20 feet. All creatures in that area must succeed on a DC 14 Dexterity saving throw or take 36 (6d8) bludgeoning damage and be covered in sticky dough, reducing their movement speed by half until the effect ends."
      },
      {
        "title": "Slowed Movement",
        "rules": "For as long as a creature is covered in sticky dough from this effect, its movement speed is reduced to half of its normal value. This effect lasts for 1 minute or until removed by magic."
      }
    ],
    "levelRequirementReason": "The Sticky Surprise Dough Bomb requires a minimum character level of 3 due to the complexity and potency of its effects.",
    "vendorReason": "Dough Depot, known for their unique and potent consumables, offers this delightful yet dangerous item among their selection.",
    "shippingDetail": "Shipped by swift courier, the Sticky Surprise Dough Bomb arrives fresh and ready to be used.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when a creature successfully saves against it or is no longer covered in sticky dough.",
      "charges": "3 charges, recharged after a long rest"
    },
    "priceReason": "The Sticky Surprise Dough Bomb is priced at 1000 XP due to its balanced effects and the rarity of its origin.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:54:50.718444+00:00",
    "aiReviewedAt": "2026-07-23T20:54:50.718444+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_golden_whisk": {
    "id": "leclaire_isle_golden_whisk",
    "name": "Golden Whisk of Ever-Baking",
    "description": "The Golden Whisk of Ever-Baking, forged from starlight and enchanted dough, is a pastry chef's dream come true. Crafted by the master bakers of Le Clair Isle, this whisk can instantly transform any ingredient into a golden masterpiece or, in a rare chaotic moment, unleash a fiery culinary explosion that scorches nearby ingredients. Use it to quickly prepare your next feast or sabotage an enemy’s meal with a burst of radiant energy.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Instant Baking",
      "Radiant Explosion"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "courier_hooves",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Instant Baking",
        "rules": "As a bonus action, the wielder can use the Golden Whisk to instantly bake any ingredient into a delicious treat. This effect has no range and lasts until used up. The target must be within 5 feet of the user. There is no save DC required. Each use expends one charge."
      },
      {
        "title": "Radiant Explosion",
        "rules": "As an action, the wielder can unleash a fiery culinary explosion that deals 4d6 radiant damage to all creatures within 10 feet of them. This effect has no save DC and requires concentration for 1 minute. The user must make a Dexterity saving throw (DC 15) at the start of their turn or lose concentration on this effect."
      }
    ],
    "levelRequirementReason": "Requires dexterous hands and culinary knowledge, making it suitable for level 5 characters.",
    "vendorReason": "Pastry Palace specializes in items that enhance the art of baking and sabotage, making this whisk a natural fit.",
    "shippingDetail": "Delivered by swift hooves to ensure freshness upon arrival.",
    "usage": {
      "activation": "Bonus action for Instant Baking; Action for Radiant Explosion",
      "duration": "Instantaneous and Concentration (1 minute) respectively",
      "endsWhen": "Concentration is lost or the effect is used up, whichever comes first",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced price for an epic item that enhances both baking and combat capabilities.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T20:55:06.309615+00:00",
    "aiReviewedAt": "2026-07-23T20:55:06.309615+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sweet_illusion": {
    "id": "leclaire_isle_sweet_illusion",
    "name": "Sweet Illusion Amulet",
    "description": "The Sweet Illusion Amulet gleams with an ethereal sheen, its surface etched with delicate pastry designs. When worn, it projects a mesmerizing illusion of delectable pastries in front of you, luring nearby creatures into a fit of dazed distraction. The amulet's enchantment is so potent that even seasoned adventurers find themselves momentarily sidetracked by the vision of sugary delights. Use with caution, for prolonged exposure to its charm can lead to an uncontrollable craving for sweets.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍬",
    "stock": 33,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Lures enemies",
      "Reduces enemy accuracy"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Courier of the Moonlit Path",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Lure Effect",
        "rules": "When activated as a bonus action, the amulet projects an irresistible illusion of pastries. Creatures within 30 feet must succeed on a DC 15 Wisdom saving throw or become charmed for 1 minute. The charmed creature is incapacitated and can take no actions other than to remain still."
      },
      {
        "title": "Reduced Accuracy",
        "rules": "Enemies affected by the amulet's illusion have their attack rolls reduced by 2 until the start of your next turn. This effect persists for 1 minute per use, and you can activate the amulet once at each long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to cast spells or maintain concentration on illusions.",
    "vendorReason": "Sweet Supplies specializes in enchanted curiosities and sweets that can be used for various magical effects.",
    "shippingDetail": "Ships only during the waxing moon, ensuring a timely delivery of the amulet's potent enchantments.",
    "usage": {
      "activation": "Bonus action to activate and concentrate on the illusion for up to one minute.",
      "duration": "1 minute per use; concentration ends early if you take damage or are incapacitated.",
      "endsWhen": "Concentration is lost, or a creature escapes from its charmed state.",
      "charges": "Unlimited uses at long rest."
    },
    "priceReason": "Balanced price reflects the amulet's potent illusion effect and limited use per day.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-23T20:55:53.085426+00:00",
    "aiReviewedAt": "2026-07-23T20:55:53.085426+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_shadow_shard": {
    "id": "midlands_item_shadow_shard",
    "name": "Fragment of the Obsidian Eye",
    "description": "A pulsing shard of obsidian, the Fragment of the Obsidian Eye is said to be a fragment from an ancient artifact that once granted its wielder terrifying visions. It feels strangely warm to the touch and whispers unsettling secrets—mostly about Wario's bad fashion choices. When activated, it casts a shadowy glow that reveals hidden dangers lurking in the dark, and its touch can cause confusion, leaving foes momentarily disoriented.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 18,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "detects_hidden_dangers",
      "causes_confusion"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "hawk courier service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Detects Hidden Dangers",
        "rules": "The wielder gains advantage on Perception checks to detect hidden or secret things within 30 feet. This effect lasts until the start of their next turn."
      },
      {
        "title": "Causes Confusion",
        "rules": "When an enemy creature you can see makes a melee attack against you, it must succeed on a DC 12 Wisdom saving throw or be knocked prone and stunned for 1 round. This effect has no limit but cannot be used more than once per short or long rest."
      }
    ],
    "levelRequirementReason": "The shard requires significant magical power to wield effectively.",
    "vendorReason": "Empire Exchange deals in rare and ancient artifacts, making the Fragment of the Obsidian Eye a fitting addition to their inventory.",
    "shippingDetail": "Ships via the trusted hawk courier service; delivery can take up to three days depending on location.",
    "usage": {
      "activation": "A bonus action to activate and use its effects.",
      "duration": "Instantaneous, with effects lasting until the end of their next turn or rest period.",
      "endsWhen": "The effect ends when used again within a short or long rest.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced for its rare nature and the significant magical power it contains.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T20:55:19.309521+00:00",
    "aiReviewedAt": "2026-07-23T20:55:19.309521+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_bloodstone_amulet": {
    "id": "midlands_item_bloodstone_amulet",
    "name": "Amulet of the Crimson Pact",
    "description": "The Amulet of the Crimson Pact pulses with a sickly red glow, its dark metal seemingly molten from unseen fires. Legend claims it was forged in the blood of fallen soldiers on hallowed battlefields, and those who wear it can command shadows to their will—though at a cost. The amulet grants limited control over darkness but also introduces an unsettling chance that demonic influence might seep into one's soul. Beware, for you may find yourself walking a path darker than any shadow.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🩸",
    "stock": 5,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "control_over_shadows",
      "demonic_influence"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "raven courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Control Over Shadows",
        "rules": "As an action, the wearer can command shadows within 30 feet to form into a minor shape for up to 1 minute. The shadow can take the form of a creature no larger than Medium and move up to half your speed. Failing a DC 15 Wisdom saving throw, the target is frightened until the end of its next turn."
      },
      {
        "title": "Demonic Influence",
        "rules": "Once per short or long rest, the wearer can roll a d20; on an even number, they are subjected to minor demonic possession for 1 hour. During this time, their alignment shifts slightly toward chaotic evil, and they have disadvantage on Wisdom saving throws until the effect ends."
      }
    ],
    "levelRequirementReason": "The amulet's dark magic requires a level of at least 12 to safely wield its powers without succumbing fully to its influence.",
    "vendorReason": "Fractured Forge deals in forbidden and powerful relics, making the Amulet of the Crimson Pact an ideal addition to their inventory.",
    "shippingDetail": "The amulet is delivered by a specially equipped raven courier, ensuring its arrival remains secret and secure.",
    "usage": {
      "activation": "Action or Reaction (to command shadows)",
      "duration": "Instantaneous to 1 minute (control over shadows); 1 hour (demonic influence)",
      "endsWhen": "The effect ends when the amulet is removed, a successful Wisdom save is made, or the wearer's alignment shifts permanently.",
      "charges": "Unlimited; regains charges after a long rest"
    },
    "priceReason": "The amulet’s price reflects its rare crafting materials and dark magic, balancing its powerful effects with a fair value.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:56:06.751442+00:00",
    "aiReviewedAt": "2026-07-23T20:56:06.751442+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chrono_shifter": {
    "id": "kivotos_item_chrono_shifter",
    "name": "Temporal Tickle",
    "description": "The Temporal Tickle appears as a whimsical, crumpled stack of old homework papers held together by a rusted paperclip. When activated, it briefly slows time around you, creating a ripple in the fabric of reality for just three seconds. Witness your snacks materialize before your eyes or escape from sticky social situations with surprising ease. Wario found it particularly effective for dodging unwanted classroom tasks—though he never admitted to using it during detention.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Slows Time",
      "Lucky Chance"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Slow",
        "rules": "When activated, the Temporal Tickle slows time around you by 10% for a duration of 3 seconds. This effect is instantaneous and has no save DC or target range."
      },
      {
        "title": "Lucky Boost",
        "rules": "There's a 5% chance that your next attack or ability check will be augmented with minor luck, granting advantage on the roll for one action. This effect only triggers once per use."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to experiment with time manipulation without advanced skill.",
    "vendorReason": "The student store stocks practical gadgets and gizmos that help students navigate their daily challenges, including this quirky device.",
    "shippingDetail": "Delivered promptly by drones, the Temporal Tickle arrives fresh from the student store's workshop.",
    "usage": {
      "activation": "A bonus action to activate the item.",
      "duration": "Instantaneous effect lasting 3 seconds.",
      "endsWhen": "The duration ends when the time manipulation fades or you move more than 10 feet away.",
      "charges": "Recharges after a short rest."
    },
    "priceReason": "Balanced at 1000 XP, this item provides a fun and useful utility without being overpowered for its rarity.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:55:47.842597+00:00",
    "aiReviewedAt": "2026-07-23T20:55:47.842597+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_amplifier": {
    "id": "kivotos_item_halo_amplifier",
    "name": "Halo Harmonizer",
    "description": "The Halo Harmonizer is a gleaming, intricately crafted device forged from polished obsidian and shimmering silver, its core a glowing crystal that seems to hum with latent power. This artifact subtly amplifies the magic of halos worn by nearby allies, creating a dazzling aura around them. The device not only boosts their magical abilities by 20% but also grants a small shield effect, absorbing up to 50 points of damage in a single strike.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Enhanced Halo Power",
      "Shielding Aura"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Magical Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Halo Power",
        "rules": "This effect increases the wearer's halo's magic damage by 20%. It is an instantaneous activation that lasts until the next long rest. The device can be used once per short or long rest."
      },
      {
        "title": "Shielding Aura",
        "rules": "The Halo Harmonizer grants a small shield effect, absorbing up to 50 points of damage in a single attack. This effect is triggered when the wearer takes damage and lasts for 1 minute. The device can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The device requires no specific level, but it is designed to enhance magical abilities, which are typically acquired at lower levels.",
    "vendorReason": "Academy Armory stocks this item as a unique and valuable tool for students and novice spellcasters looking to augment their magical prowess.",
    "shippingDetail": "The Halo Harmonizer is delivered by the reliable Magical Courier, known for its quick and safe service within the realm.",
    "usage": {
      "activation": "Instantaneous use; no action required.",
      "duration": "Until next long rest for Enhanced Halo Power; 1 minute for Shielding Aura.",
      "endsWhen": "The effect ends when the wearer completes a short or long rest, or if the device is destroyed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced price reflects its modest level requirement and utility as a magical enhancement tool for beginners.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:56:15.432066+00:00",
    "aiReviewedAt": "2026-07-23T20:56:15.432066+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_phantom_notes": {
    "id": "kivotos_item_phantom_notes",
    "name": "Echoing Scribbles",
    "description": "Echoing Scribbles are cryptic, shifting notes that seem to whisper forgotten lore with each glance. Touching them briefly reveals fleeting memories—potentially unlocking hidden clues or granting a minor boost in knowledge—but prolonged scrutiny can distort your perceptions, causing confusion to assail foes within reach. These notes, crafted from the remnants of ancient parchment and imbued with the essence of long-forgotten scribes, are said to make even the most astute minds dizzy if gazed upon for too long.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📝",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Fleeting Clue",
      "Confuse Enemy"
    ],
    "vendor": "club_supply",
    "shippedBy": "Standard Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fleeting Clue",
        "rules": "When a creature touches Echoing Scribbles, it has a 25% chance to reveal one hidden clue related to the nearest secret or puzzle. This effect is instantaneous and can only occur once per day."
      },
      {
        "title": "Confuse Enemy",
        "rules": "If a creature holds Echoing Scribbles for more than five seconds, they have a 10% chance of causing a single enemy within 5 feet to become confused until the end of their next turn. This effect can be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "Echoing Scribbles are accessible to beginners, as they offer subtle benefits without overwhelming the user.",
    "vendorReason": "Club Supply stocks Echoing Scribbles due to their popularity among novice adventurers and scholars seeking a bit of serendipity in their quests.",
    "shippingDetail": "Delivered within one week, with no special handling required for these lightweight notes.",
    "usage": {
      "activation": "Touching the Scribbles briefly (no action required)",
      "duration": "Instantaneous; Fleeting Clue lasts until used or dismissed by the creature",
      "endsWhen": "The effect ends if the Scribbles are destroyed, or if a creature holds them for more than five seconds.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Echoing Scribbles provide subtle yet useful benefits without being overly powerful, justifying their price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T20:56:04.617507+00:00",
    "aiReviewedAt": "2026-07-23T20:56:04.617507+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_goblin_grease": {
    "id": "middle_earth_goblin_grease",
    "name": "Goblin Grease - Guaranteed Slippery!",
    "description": "Goblin Grease - Guaranteed Slippery! This noxious, shimmering sludge is a notorious creation of goblin alchemy, used to lubricate not only their tools but also to sabotage the weapons and armor they encounter in battle. It's rumored that when applied, it forms an invisible layer that can cause even the most polished blade to falter and slip in the hands of its wielder. Once smeared on a weapon or piece of armor, it reduces its effectiveness by half for hours and, if touched, causes those who come into contact with it to lose their grip for a round.",
    "category": "consumables",
    "price": 1000,
    "icon": "🛢️",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "apply_grease_effect",
      "chance_to_slip"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Apply Grease Effect",
        "rules": "When applied to a weapon or piece of armor, the item's effectiveness is reduced by half for 1 hour. This effect can be countered with a successful DC 15 Dexterity saving throw."
      },
      {
        "title": "Chance to Slip",
        "rules": "Any creature that comes into contact with the grease has a 20% chance (DC 14) of losing their grip and falling prone for one round. This can be countered by making a DC 15 Strength saving throw."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners, as it requires no specific combat expertise to use effectively.",
    "vendorReason": "The Shire Shop stocks this item due to its popularity among travelers and adventurers looking to add an element of surprise to their arsenal.",
    "shippingDetail": "Typically arrives within a few days, depending on weather conditions in the Shire.",
    "usage": {
      "activation": "Apply as a bonus action.",
      "duration": "1 hour or until removed by washing off with soap and water.",
      "endsWhen": "The duration expires or when washed off.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the item's effectiveness in combat, rarity of goblin alchemy, and its strategic value to adventurers.",
    "priceOriginal": 450,
    "priceReviewedAt": "2026-07-23T20:56:22.138176+00:00",
    "aiReviewedAt": "2026-07-23T20:56:22.138176+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_ancient_rune": {
    "id": "middle_earth_ancient_rune",
    "name": "Whispers of the Old Kings",
    "description": "Whispers of the Old Kings is an ancient rune stone, its surface etched with arcane symbols that seem to shimmer and hum with a forgotten power. When handled, it releases fleeting visions of past battles fought under moonlit skies, often involving dwarves who guard their secrets jealously. The stone's aura is both mesmerizing and unsettling; prolonged contact can leave you yearning for root vegetables or other humble fare, as if the runes whisper tales of simpler times.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "grant_insight",
      "chance_of_prophecy"
    ],
    "vendor": "elven_market",
    "shippedBy": "flying_message",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Insight",
        "rules": "As a bonus action, touching Whispers of the Old Kings grants you advantage on one Intelligence (History) check related to ancient lore or lost civilizations. This effect lasts for 10 minutes and can be used once per short rest."
      },
      {
        "title": "Chance of Prophecy",
        "rules": "Once per long rest, touching Whispers of the Old Kings has a 25% chance (DC 13) to reveal a cryptic prophecy or ancient wisdom related to your recent actions. The prophecy can offer guidance but is often vague and open to interpretation."
      }
    ],
    "levelRequirementReason": "The stone's power is accessible to all adventurers, offering valuable insights without overwhelming higher-level characters.",
    "vendorReason": "Elves have long held a deep connection with ancient artifacts and lore, making them the perfect caretakers of Whispers of the Old Kings.",
    "shippingDetail": "The rune stone is delivered via swift flying messenger, ensuring it reaches its destination swiftly and in pristine condition.",
    "usage": {
      "activation": "Bonus action to touch and activate; can be used once per short rest for the 'Grant Insight' effect.",
      "duration": "10 minutes or until used again",
      "endsWhen": "Rest ends, or if the user is incapacitated or dies",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The stone's rarity and historical significance justify a price of 1000 XP, offering valuable insights without being overly powerful.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:56:34.567587+00:00",
    "aiReviewedAt": "2026-07-23T20:56:34.567587+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_hammer_shard": {
    "id": "middle_earth_dwarven_hammer_shard",
    "name": "The Heart of Grong's Fury",
    "description": "The Heart of Grong's Fury is a jagged, dwarven hammer shard forged from the very essence of its namesake’s fury. Crafted in the forges of Khazad-dûm during the height of Dwarven might, it radiates untamed power and a malevolent intensity that whispers of ancient battles and grudges long unresolved. When wielded, it imbues the bearer with raw strength and an unpredictable force capable of stunning foes and dealing extra damage to undead. Yet, it demands caution; its very essence is volatile, liable to cause unintended destruction if not handled carefully.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Stun",
      "Undead Damage"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "giant_worm",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Stun",
        "rules": "When you hit a creature with an attack using The Heart of Grong's Fury, it has a 25% chance to be stunned for 1 round. This effect requires no action and lasts until the start of your next turn."
      },
      {
        "title": "Undead Damage",
        "rules": "The Heart of Grong's Fury deals an additional +10 bonus to damage rolls against undead creatures. This effect is passive and does not require activation."
      }
    ],
    "levelRequirementReason": "The Heart of Grong's Fury requires a minimum level of 7 due to its raw power and the risk it poses in inexperienced hands.",
    "vendorReason": "Only the Dwarven Forge can craft such an item, as their expertise lies in harnessing ancient dwarven magic and forging artifacts like The Heart of Grong's Fury.",
    "shippingDetail": "Shipped by a giant worm through treacherous mountain passes; delivery times are unpredictable but the item is insured against loss or damage.",
    "usage": {
      "activation": "Instantaneous, passive effect when used in combat.",
      "duration": "Persistent until expended.",
      "endsWhen": "Destroyed upon reaching zero charges.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Heart of Grong's Fury is priced at 1000 XP due to its rare crafting materials, ancient dwarven lore, and the unpredictable nature of its effects.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:56:37.242937+00:00",
    "aiReviewedAt": "2026-07-23T20:56:37.242937+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_sparkling_mane_potion": {
    "id": "equestria_item_sparkling_mane_potion",
    "name": "Sparkling Mane Potion",
    "description": "Sparkling Mane Potion, a shimmering vial that glows faintly when shaken, instantly revives your mane and tail in a dazzling display of color and light. This potion is perfect for those moments when you need to make an entrance, whether it's at the Royal Gala or simply to win over the crowd with your radiant appearance. The effects are fleeting but powerful, leaving you feeling refreshed and admired by all who see you.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Glowing Mane",
      "Increased Aura"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glowing Mane",
        "rules": "Upon activation, the user's mane and tail emit a vibrant, sparkling light for 1 minute. This effect grants advantage on Charisma (Performance) checks made within this time."
      },
      {
        "title": "Increased Aura",
        "rules": "For 2 turns after consumption, the user gains an aura that dazzles nearby creatures, increasing their perception of your charisma by +3 to all interactions and conversations. This aura has a radius of 10 feet."
      }
    ],
    "levelRequirementReason": "This potion is designed for beginners or those just starting their journey in Equestria.",
    "vendorReason": "The Ponyville Market stocks a variety of potions and elixirs, ensuring that every pony can look and feel their best.",
    "shippingDetail": "Shipped by Pony Express with same-day delivery within the kingdom.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "1 minute for Glowing Mane, 2 turns for Increased Aura.",
      "endsWhen": "The effects wear off naturally after their respective durations.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This price reflects the rarity and effectiveness of the potion, providing an excellent value for any pony looking to make a grand impression.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-23T20:56:55.718470+00:00",
    "aiReviewedAt": "2026-07-23T20:56:55.718470+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_canterlot_royal_badge": {
    "id": "equestria_item_canterlot_royal_badge",
    "name": "Canterlot Royal Badge",
    "description": "The Canterlot Royal Badge gleams with the radiance of a thousand suns, forged by the most skilled artisans in all of Equestria. This badge not only bestows upon its wearer an aura of unwavering loyalty to Princess Celestia and Fluttershy but also enhances their ability to navigate courtly intrigue and diplomacy. With this symbol, you gain the favor of the royal court, making it easier to secure allies and navigate through any political challenge.",
    "category": "faction",
    "price": 1000,
    "icon": "👑",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Courtly Favor",
      "Diplomatic Edge"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_guard_delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Courtly Favor",
        "rules": "When you are in the presence of a member of the royal court, you gain +5 reputation with them. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Diplomatic Edge",
        "rules": "You have advantage on persuasion checks made against creatures within 30 feet of you. This effect ends when you are no longer in a courtly setting or upon the completion of a short rest."
      }
    ],
    "levelRequirementReason": "This badge is designed for those who have already proven their worth to the kingdom, ensuring it remains a symbol of trust and loyalty.",
    "vendorReason": "The royal guards oversee the distribution of this emblem to ensure only those who deserve it are granted access.",
    "shippingDetail": "The badge is delivered by a trusted member of the royal guard, ensuring its arrival with all due haste and ceremony.",
    "usage": {
      "activation": "Passive effect upon wearing; no activation required.",
      "duration": "Until the end of your next long rest or short rest, respectively.",
      "endsWhen": "The effects end when you are no longer in a courtly setting or upon completion of a short rest or long rest, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "This badge is crafted with rare materials and requires the expertise of master artisans, making its cost reflective of both its rarity and craftsmanship.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T20:56:51.417794+00:00",
    "aiReviewedAt": "2026-07-23T20:56:51.417794+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_grumbleweed_root": {
    "id": "equestria_item_grumbleweed_root",
    "name": "Grumbleweed Root",
    "description": "The Grumbleweed Root, a gnarled and bitter root that grows in the deepest shadows of Equestria's darkest corners, is said to hold the essence of grumpiness itself. When brewed into a potent tea or ingested directly, it can disrupt magical enchantments with a 25% chance of success, making it a rare tool for those who seek to neutralize powerful spells. However, its potency comes at a cost: consuming it grants temporary disadvantage on charisma-based skill checks and interactions.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 33,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Disrupts Magical Effects",
      "Grumpiness Infliction"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "swift_cloud Courier Service",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Disrupts Magical Effects",
        "rules": "Activates as a bonus action. Has a 25% chance to disrupt an ongoing magical effect in the area or on a target within 30 feet. The effect ends immediately, and there is no save for the target."
      },
      {
        "title": "Grumpiness Infliction",
        "rules": "The user must succeed on a DC 15 Constitution saving throw or become grumpy, suffering disadvantage on charisma-based skill checks and interactions until the start of their next turn. This effect lasts for one minute per level."
      }
    ],
    "levelRequirementReason": "Requires at least second-level spellcasting to effectively use this item's magical disruption.",
    "vendorReason": "The market often stocks rare items from all over Equestria, including the mystical Grumbleweed Root.",
    "shippingDetail": "Ships via swift Cloud Messenger pigeons; delivery is reliable but slightly delayed due to weather patterns in the clouds.",
    "usage": {
      "activation": "Bonus action (Disrupts Magical Effects) or as a free object interaction (Grumpiness Infliction)",
      "duration": "Instantaneous for Disruption, one minute per level for Grumpiness",
      "endsWhen": "The effect ends when the duration expires or the item is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price due to its rarity and the unique combination of magical disruption and negative side effects.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:57:07.289276+00:00",
    "aiReviewedAt": "2026-07-23T20:57:07.289276+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_shimmering_shard": {
    "id": "grand_country_shimmering_shard",
    "name": "Echoing Shard of the Fallen Peak",
    "description": "The Echoing Shard of the Fallen Peak is a jagged crystal shard imbued with the gravity-warping essence of an ancient peak's collapse. Crafted from the very fabric of the mountains themselves, it whispers secrets of the past to those who hold it briefly. For a fleeting moment, climbers feel their ascent become effortless, while their perception sharpens, revealing hidden details in the world around them. Yet, prolonged exposure causes a disorienting vertigo, leaving one dizzy and unsteady.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increase_climbing_speed",
      "enhanced_perception"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Winged Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Climbing Speed",
        "rules": "When you hold the shard for at least 1 round but no more than 2 minutes, your climbing speed increases by 10 feet until the start of your next turn. This effect ends if you drop the shard or are incapacitated."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While holding the shard for at least 1 round but no more than 2 minutes, you gain advantage on Wisdom (Perception) checks until the end of your next turn. This effect ends if you drop the shard or are incapacitated."
      }
    ],
    "levelRequirementReason": "The Echoing Shard's gravitational essence requires a certain level of physical prowess and mental stability to wield effectively.",
    "vendorReason": "The vertical vendor specializes in mountaintop finds, making the Echoing Shard an ideal addition to their inventory.",
    "shippingDetail": "Delivered by the swift wings of the Winged Courier, this shard arrives at your doorstep in a sealed, gravity-stabilized container to protect its delicate nature.",
    "usage": {
      "activation": "Object interaction (holding)",
      "duration": "1 round per use; maximum 2 minutes total",
      "endsWhen": "You drop the shard or become incapacitated",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Echoing Shard's rare material and unique properties justify its moderate price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:57:07.397427+00:00",
    "aiReviewedAt": "2026-07-23T20:57:07.397427+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_wormhole_lantern": {
    "id": "grand_country_wormhole_lantern",
    "name": "Dimensional Flicker Lantern",
    "description": "The Dimensional Flicker Lantern is a bizarre lantern crafted from layered obsidian and swirling arcane energy, its surface etched with runes that hum faintly when aglow. When lit, it briefly opens a shimmering rift in the fabric of reality, allowing for the retrieval of lost items or quick escapes—a handy trick for those familiar with its quirks. However, the unstable wormhole can sometimes summon small, mischievous creatures from other dimensions, making it more unpredictable than reliable.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "teleport_short_range",
      "chance_to_summon"
    ],
    "vendor": "layer_market",
    "shippedBy": "Rope Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport Short Range",
        "rules": "When activated as a bonus action, the lantern briefly opens a rift allowing for instantaneous teleportation up to 10 feet. The target must be within line of sight and cannot exceed their movement speed. This effect has a cooldown of one hour."
      },
      {
        "title": "Chance to Summon",
        "rules": "There is a 25% chance that when the lantern opens a rift, it will summon a small, mischievous imp from another dimension. The summoned creature acts independently and can be dismissed as an action by its creator without expending additional charges or uses."
      }
    ],
    "levelRequirementReason": "This lantern is designed for adventurers who have demonstrated basic proficiency in navigating the perils of the unknown.",
    "vendorReason": "The Layer Market specializes in unique and arcane items, making it a natural fit for selling the Dimensional Flicker Lantern.",
    "shippingDetail": "Due to its delicate nature, this item is shipped via Rope Delivery, ensuring safe transport through magical means.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "The rift closes after the effect or if the lantern is extinguished",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique properties and utility in adventuring.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T20:57:43.619667+00:00",
    "aiReviewedAt": "2026-07-23T20:57:43.619667+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_forbidden_gravity_stone": {
    "id": "grand_country_forbidden_gravity_stone",
    "name": "The Unraveler's Core",
    "description": "The Unraveler's Core is a jagged, pulsating obsidian stone that exudes an unstable gravity field. Crafted by a deranged dimension-traveler, it radiates chaotic energy that can disorient and destabilize its surroundings. Legend has it that if the core’s power is fully unleashed, all gravitational forces within range would collapse into a temporary black hole, creating a catastrophic event. Wario's minions have been seen looting for this item, but only to ensure their own chaos.",
    "category": "forbidden",
    "price": 95000,
    "icon": "💥",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "black_hole_inducer",
      "disorienting_gravity_field"
    ],
    "vendor": "side_seller",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 22,
    "effectDetails": [
      {
        "title": "Black Hole Inducer",
        "rules": "When activated, the Unraveler's Core creates a localized black hole within a 20-foot radius. All creatures in the area must make a DC 18 Dexterity saving throw or be pulled into the singularity and become pinned until the end of their next turn."
      },
      {
        "title": "Disorienting Gravity Field",
        "rules": "The core emits an unstable gravitational field that disorients all creatures within its 30-foot radius. Creatures in this area have disadvantage on all attack rolls, saving throws, and ability checks until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The Unraveler's Core requires a high level to handle its chaotic power effectively.",
    "vendorReason": "Only those with a reputation for chaos and misrule would dare sell such an item, like the side_seller.",
    "shippingDetail": "The Shadow Messenger ensures secure delivery of this volatile artifact using its own specialized couriers.",
    "usage": {
      "activation": "Action",
      "duration": "One use per long rest",
      "endsWhen": "Exhausted after one use, recharging at the end of a long rest.",
      "charges": "1 charge"
    },
    "priceReason": "The Unraveler's Core is priced at 95000 XP due to its mythic rarity and the danger it poses.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-23T20:57:31.402966+00:00",
    "aiReviewedAt": "2026-07-23T20:57:31.402966+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_reinforced_plate": {
    "id": "connectopia_reinforced_plate",
    "name": "Pioneer's Bulwark",
    "description": "Forged from salvaged block plating and reinforced with a surprisingly effective magnetic sealant, the Pioneer's Bulwark offers more than just protection—it channels the very resilience of its creators. Despite its utilitarian origins, this armor deflects projectiles at a chance of 10%, turning deadly strikes into mere echoes. Its rugged exterior may lack style, but it compensates with unmatched durability and a silent promise of survival in harsh conditions.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Armor Deflection",
      "Increased Armor Class"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Block Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Armor Deflection",
        "rules": "The user has a 10% chance to deflect a projectile attack. This effect is triggered once per round and does not apply to magical attacks."
      },
      {
        "title": "Increased Armor Class",
        "rules": "Increases the wearer's Armor Class by 2. This bonus remains until the end of each long rest or when the user changes their armor."
      }
    ],
    "levelRequirementReason": "This armor requires a minimum level to ensure the user can effectively utilize its unique defensive properties.",
    "vendorReason": "The Pioneer Post specializes in gear from salvaged materials, making the Pioneer's Bulwark a fitting addition to their inventory.",
    "shippingDetail": "Delivered within a week by Block Courier; expedited shipping available for an additional fee.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until end of the wearer's next long rest or armor change",
      "endsWhen": "Changing armor or completing a long rest",
      "charges": "Unlimited, recharges with rest"
    },
    "priceReason": "The Pioneer's Bulwark is priced at 1000 XP due to its unique defensive properties and the craftsmanship required for its magnetic sealant.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:57:39.326306+00:00",
    "aiReviewedAt": "2026-07-23T20:57:39.326306+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_temporal_beacon": {
    "id": "connectopia_temporal_beacon",
    "name": "Chronometric Resonance Device",
    "description": "The Chronometric Resonance Device is a sleek, compact gadget crafted from ancient temporal alloys. It allows users to perform short-range temporal shifts with pinpoint accuracy, making it invaluable for both tactical maneuvers and quick escapes. Its core component, a fragment of the Timekeeper's Vein, ensures that each use feels like stepping into another moment in history without the risk of causing catastrophic paradoxes—though overuse might still lead to an unexpected craving for turnips or similar oddities.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Temporal Shift",
      "Paradox Prevention"
    ],
    "vendor": "block_smith",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Shift",
        "rules": "The user can teleport up to 10 feet in any direction as a bonus action. The effect is instantaneous, and it has a cooldown of one minute between uses."
      },
      {
        "title": "Paradox Prevention",
        "rules": "Each use reduces the risk of paradoxes by 5%, stacking with each subsequent use up to a maximum reduction of 20%. Once this cap is reached, further uses have no additional effect on paradox prevention."
      }
    ],
    "levelRequirementReason": "The device requires minimal magical power and can be used by any character, making it accessible even to lower-level adventurers.",
    "vendorReason": "Block Smith specializes in temporal artifacts and has the necessary knowledge to provide such advanced technology.",
    "shippingDetail": "The item is delivered by the Temporal Courier, ensuring it arrives at its destination without any time distortions.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "Cooldown of one minute between uses",
      "charges": "Unlimited"
    },
    "priceReason": "The device is priced at 1000 XP, reflecting its rare material composition and the intricate craftsmanship required for such an artifact.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T20:57:24.576885+00:00",
    "aiReviewedAt": "2026-07-23T20:57:24.576885+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravity_slip": {
    "id": "doughnut_hole_gravity_slip",
    "name": "Void-Sucking Donut",
    "description": "The Void-Sucking Donut is a suspiciously shiny pastry that seems to warp reality around it. Consuming this donut grants you a temporary leap of faith, boosting your jump height by +4 feet and granting an additional +1d6 feet for the rest of the encounter. However, its gravitational instability can pull nearby objects into a vortex, creating a 5-foot radius area of unstable space that lasts until the end of your next turn.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍩",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "jump_height +4",
      "gravitational instability (5-foot radius)"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Jump Height",
        "rules": "Eating this donut grants you a temporary increase to your jump height by +4 feet, and an additional +1d6 feet for the rest of the encounter. This effect ends when the encounter ends."
      },
      {
        "title": "Gravitational Instability",
        "rules": "The donut creates a 5-foot radius area around you that is subject to gravitational instability. Any creature or object within this area has disadvantage on Strength (Athletics) checks until the end of your next turn. The effect ends when the encounter ends."
      }
    ],
    "levelRequirementReason": "The donut's effects are unpredictable and can be dangerous, requiring a certain degree of experience to handle.",
    "vendorReason": "Hole Hawker specializes in bizarre and otherworldly treats that push the boundaries of reality, making this donut an ideal addition to their menu.",
    "shippingDetail": "Due to its unstable nature, the Void-Sucking Donut requires special handling and is only delivered via Dimensional Rift, ensuring safe transport through alternate dimensions.",
    "usage": {
      "activation": "Eating the donut",
      "duration": "Until the end of your next turn",
      "endsWhen": "The encounter ends",
      "charges": "Unlimited"
    },
    "priceReason": "The Void-Sucking Donut's unpredictable nature and the specialized handling required justify its higher price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:57:41.014363+00:00",
    "aiReviewedAt": "2026-07-23T20:57:41.014363+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_shard": {
    "id": "doughnut_hole_anomaly_shard",
    "name": "Singularity Stone Fragment",
    "description": "The Singularity Stone Fragment is a shimmering shard of dark matter, its pulsating surface emitting an eerie gravitational hum. Originating from the core of a miniature black hole, it radiates a potent force that warps space-time around you. Touching it for more than a moment can cause unpredictable spatial distortions, bending reality in your immediate vicinity. This fragment offers resistance to gravity effects and a rare chance to teleport, making it both a perilous and invaluable tool.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "gravity resistance",
      "teleportation"
    ],
    "vendor": "center_seller",
    "shippedBy": "Warped Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Resistance",
        "rules": "This effect provides you with resistance to all gravity-based effects. While holding the fragment, you gain advantage on saving throws against any spell or ability that deals damage from a gravitational source."
      },
      {
        "title": "Teleportation",
        "rules": "There is a 5% chance per minute of holding the fragment that you will be teleported to an unoccupied space within 30 feet. This effect has no save DC and does not consume charges or use your action, but it can only occur once every hour."
      }
    ],
    "levelRequirementReason": "Beginners with a basic understanding of physics can handle the fragment's initial gravitational effects.",
    "vendorReason": "The center seller deals in rare and exotic items, including cosmic curiosities like this shard.",
    "shippingDetail": "Delivery by Warped Courier can take up to a week due to the fragment's unstable nature.",
    "usage": {
      "activation": "Passive effect while holding the fragment.",
      "duration": "Instantaneous teleportation, but always active gravity resistance.",
      "endsWhen": "The fragment is destroyed or lost.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rare cosmic origin and unique utility.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T20:57:49.273102+00:00",
    "aiReviewedAt": "2026-07-23T20:57:49.273102+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_crumb": {
    "id": "doughnut_hole_void_crumb",
    "name": "Echoing Pastry Piece",
    "description": "A crumb of a forgotten donut, radiating with the chilling whispers of lost realities, this Echoing Pastry Piece is said to be crafted from the remains of a celestial treat consumed by a godling. When ingested, it briefly opens a fissure in time, allowing you to glimpse unsettling echoes of potential futures. The crumb's surface shimmers with an otherworldly sheen, hinting at forgotten dimensions and the whispers of destinies unfulfilled.",
    "category": "consumables",
    "price": 1000,
    "icon": "👻",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Potential Future Glimpse",
      "Temporal Echo"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Black Hole Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Potential Future Glimpse",
        "rules": "As an action, consume the crumb to briefly glimpse a possible future outcome. This effect lasts for 1 turn and has a chance of revealing hidden passages within the area (20% chance)."
      },
      {
        "title": "Temporal Echo",
        "rules": "For 1 round after consuming the crumb, you are subject to a mild state of temporal disorientation, causing you to suffer from temporary madness (-3) until the end of your next turn."
      }
    ],
    "levelRequirementReason": "Even novices can handle this pastry's brief but potent effects without undue risk.",
    "vendorReason": "Void Vendor often collects such strange and wondrous items from the far reaches of the multiverse, including this forgotten confection.",
    "shippingDetail": "Delivered via a chaotic rift in space-time; arrival may be delayed by an unpredictable number of turns.",
    "usage": {
      "activation": "Eaten as an action.",
      "duration": "1 turn for each effect.",
      "endsWhen": "The effects end at the start of your next turn, or if consumed again within the same turn.",
      "charges": "Unlimited; can be consumed multiple times per day."
    },
    "priceReason": "The Echoing Pastry Piece's rarity and unique ability to reveal potential futures justify its high price in the market.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-24T23:50:40.064931+00:00",
    "aiReviewedAt": "2026-07-24T23:50:40.064931+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_rusty_wrench": {
    "id": "connectopia_rusty_wrench",
    "name": "Wario's Block Buster",
    "description": "Wario's Block Buster is a rust-streaked, hand-forged wrench that glows faintly with an inner fire of determination. Crafted from discarded metal and sheer willpower, it’s said to have been tempered in the very heart of a legendary forge. This tool not only smashes through obstacles but can also collapse sturdy blocks, causing them to crumble into rubble. Legend has it that it once belonged to Wario himself, who used it to clear his way from blockades during his mischievous escapades.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Block Collapse",
      "Mining Efficiency"
    ],
    "vendor": "block_smith",
    "shippedBy": "Block Cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Block Collapse",
        "rules": "When used against a block, there is a 30% chance to trigger the collapse of the block. If successful, the block crumbles into rubble. This effect has no save DC and can be triggered once per short rest."
      },
      {
        "title": "Mining Efficiency",
        "rules": "Increases mining speed by 50%. The increased speed lasts for 1 minute upon activation. The effect ends if used against a block or when the wielder takes damage from an attack."
      }
    ],
    "levelRequirementReason": "Wario's Block Buster requires at least level 6 to operate, as it channels the raw power of determination and brute force.",
    "vendorReason": "The block smith is known for crafting tools that are essential for mining and clearing blocks, making this wrench a staple in their inventory.",
    "shippingDetail": "Delivered by the Block Cart, which may cause minor disruptions to other deliveries due to its size.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Block Collapse; 1 minute for Mining Efficiency",
      "endsWhen": "Used against a block or when taking damage from an attack",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the uncommon rarity and the unique combination of functions provided by Wario's Block Buster.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:58:56.996548+00:00",
    "aiReviewedAt": "2026-07-23T20:58:56.996548+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_badge": {
    "id": "connectopia_pioneer_badge",
    "name": "Badge of the Steadfast Pioneer",
    "description": "The Badge of the Steadfast Pioneer is a rugged, weathered leather pin emblazoned with a golden compass and the words 'Pioneer Post' etched into its surface. It's been passed down through generations of settlers who dared to call this harsh land home. Wear it proudly as you navigate the blocky wasteland; your reputation among the Pioneers rises, and you may earn a free crate of supplies with each visit to the Pioneer Post. But be wary—should you misplace it, the bots will claim it for themselves.",
    "category": "faction",
    "price": 1000,
    "icon": "🤠",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Boost Reputation",
      "Free Supplies"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Boost Reputation",
        "rules": "When interacting with the Pioneer Post, your reputation is increased by one step. This effect has no cooldown."
      },
      {
        "title": "Free Supplies",
        "rules": "Once per day, you may present this badge to the Pioneer Post for a free crate of supplies. The crate contains essential rations and tools worth 250 XP in value. You must make a DC 15 Wisdom (Survival) check to successfully claim your reward."
      }
    ],
    "levelRequirementReason": "This badge is designed for travelers who have already established themselves as reliable members of the community.",
    "vendorReason": "The Pioneer Post issues this badge as a token of respect and loyalty to its patrons.",
    "shippingDetail": "The Courier Pigeon delivers the badge swiftly, ensuring it arrives before your next journey into the wasteland.",
    "usage": {
      "activation": "Presented to the Pioneer Post during interactions.",
      "duration": "Instantaneous effect; reputation boost is immediate.",
      "endsWhen": "No expiration or charges. The badge continues providing its benefits until lost or destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The badge's rarity and the value of free supplies make it worth this price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T20:57:59.413677+00:00",
    "aiReviewedAt": "2026-07-23T20:57:59.413677+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_hyperdrive_core": {
    "id": "connectopia_hyperdrive_core",
    "name": "Wario's Velocity Stabilizer",
    "description": "The Wario's Velocity Stabilizer hums with the raw energy of a hyperdrive core. This compact device can be clipped to your belt and instantly grants you a surge of speed, making you nearly impossible to catch. However, it occasionally releases small bursts of unstable energy that could set off a minor explosion if not controlled properly. With careful handling, this stabilizer can turn even the most mundane task into a blur of action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased movement speed",
      "unstable energy bursts"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Dimensional Portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "Activates as a bonus action. Grants you advantage on Dexterity (Acrobatics) checks and increases your walking speed by +10 feet for 1 minute."
      },
      {
        "title": "Unstable Energy Bursts",
        "rules": "Has a 5% chance to release a small explosion when you take damage from an attack. The explosion deals 1d6 fire damage centered on yourself, but grants you temporary hit points equal to the damage dealt for 1 hour."
      }
    ],
    "levelRequirementReason": "The device is designed with basic energy management systems that even novices can operate.",
    "vendorReason": "Craft Corner specializes in custom modifications and upgrades, offering this stabilizer for adventurers seeking to enhance their speed and agility.",
    "shippingDetail": "Ships via the Dimensional Portal, ensuring safe delivery within a week of purchase.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute",
      "endsWhen": "The duration ends after 1 minute or if you take any non-movement actions that require your speed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide a significant boost in mobility without being game-breaking, this device is priced reasonably.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T20:58:04.130732+00:00",
    "aiReviewedAt": "2026-07-23T20:58:04.130732+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_shards": {
    "id": "almost_edge_item_chronal_shards",
    "name": "Echoes of the Void",
    "description": "Echoes of the Void are shimmering fragments that pulse with distorted time, remnants of realities that slipped through the edge of existence. These chronal shards grant fleeting glimpses into potential futures or horrifying pasts, but beware—those who stare too long risk losing their sense of self. The void whispers secrets in fragmented visions, and those who collect them may find themselves compelled to explore the very fabric of time itself.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Glimpse",
      "Phantom Confusion"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "Upon activation, the wielder gains +3 temporal resistance for 6 turns. This effect grants a brief insight into future events or past occurrences, but it can also lead to disorientation if overused."
      },
      {
        "title": "Phantom Confusion",
        "rules": "There is a small chance (10%) that the wielder will be temporarily confused for 1 minute. This effect can occur during any use of Echoes and should be considered when engaging in strategic combat or critical decision-making."
      }
    ],
    "levelRequirementReason": "Collecting these shards requires a solid understanding of time manipulation, which is why it is recommended for characters of at least level 6.",
    "vendorReason": "The void merchant specializes in items that challenge the very fabric of reality, making Echoes of the Void an ideal addition to their inventory.",
    "shippingDetail": "Ships via Dimensional Rift, with a transit time of 2d4 days through the interdimensional void.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous effect; duration lasts for 6 turns or until the wielder's next long rest, whichever comes first",
      "endsWhen": "The effect ends when the wielder completes their next long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "Echoes of the Void are rare and valuable due to their ability to provide temporal insights, making them a sought-after commodity among time travelers and scholars.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T20:58:53.983181+00:00",
    "aiReviewedAt": "2026-07-23T20:58:53.983181+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_whisper": {
    "id": "almost_edge_item_liminal_whisper",
    "name": "The Static's Embrace",
    "description": "The Static's Embrace is a small, intricately carved wooden box that hums with an unsettling silence. When opened, it releases fragmented thoughts and half-remembered dreams, creating a cacophony of whispers that can either terrify foes or unravel your own sanity. The device's power comes from the Liminal Trader, a mysterious vendor known for crafting items that blur the line between reality and nightmare. Caution is advised; once activated, it might consume you as much as it does those around you.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔊",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Psychic Aura",
      "Fearful Whisper"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Psychic Aura",
        "rules": "When used, the Static's Embrace emits a psychic aura that deals 1d6 points of psychic damage to a single target within 5 feet. There is a 20% chance this attack also inflicts the ‘Fear’ condition on the target for 1 minute."
      },
      {
        "title": "Dreamscapes",
        "rules": "Upon activation, the item restores 5 points of sanity to the user but has a 30% chance of dealing an additional 2d6 psychic damage to the user if they are already in a state of fear."
      }
    ],
    "levelRequirementReason": "The Static's Embrace requires a minimum level of 1 to use due to its inherent mental strain.",
    "vendorReason": "The Liminal Trader is known for their unique and dangerous wares, making The Static's Embrace a fitting addition to their collection.",
    "shippingDetail": "Ships via the Dimensional Courier with expedited delivery, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges depleted or used by another creature",
      "charges": "5"
    },
    "priceReason": "The Static's Embrace is priced at 1000 XP due to its unique mental effects and the risk it poses.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-24T23:51:09.161667+00:00",
    "aiReviewedAt": "2026-07-24T23:51:09.161667+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_service_memory_scan": {
    "id": "almost_edge_item_service_memory_scan",
    "name": "Cognitive Calibration",
    "description": "Cognitive Calibration is a sleek, compact device adorned with intricate neural circuits. Crafted by the Edge Wanderer from ancient, arcane materials, it emits a soft hum as it probes your mind. This tool not only enhances one skill by +4 for 8 turns but also has a 30% chance of uncovering hidden quest information. Its most unsettling feature is its ability to restore 10 sanity points and cleanse one minor negative status effect.",
    "category": "services",
    "price": 1000,
    "icon": "🧠",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Skill Boost",
      "Quest Insight"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Temporal Delivery System",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Skill Boost",
        "rules": "Activates as a bonus action. The user gains +4 to one chosen skill for 8 turns. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Quest Insight",
        "rules": "Has a 30% chance of revealing hidden quest information when activated. This effect is instantaneous and has no save DC or duration."
      }
    ],
    "levelRequirementReason": "Suitable for beginners, as it aids in unlocking potential and understanding complex quests.",
    "vendorReason": "The Edge Wanderer is renowned for their innovative devices that assist adventurers in their journeys.",
    "shippingDetail": "Ships within one week, with expedited delivery available for an additional fee.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous and 8 turns (Skill Boost)",
      "endsWhen": "Ends when the duration expires or a new bonus action is taken to activate it again",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects its utility in enhancing skills and revealing quest information.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T20:59:06.637724+00:00",
    "aiReviewedAt": "2026-07-23T20:59:06.637724+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_chronometer_of_delay": {
    "id": "midlands_item_chronometer_of_delay",
    "name": "Temporal Tick-Tock Device",
    "description": "The Temporal Tick-Tock Device is a intricately crafted pocket watch adorned with gears and springs that whisper of ancient clockwork lore. Crafted from brass and enameled glass, it subtly slows time for its wielder, allowing them to sidestep peril or escape awkward situations. The device’s hands tick lazily, as if time itself has been coaxed into a dawdling gait, granting the user a brief reprieve from the relentless march of minutes.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "slow_time",
      "evasion_boost"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "magical_portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slow Time",
        "rules": "When activated as an action, this device slows time for the wielder and any allies within 30 feet. The duration is equal to your Intelligence modifier (minimum of 1 round). Enemies' attack rolls are made at disadvantage during this time. This effect ends when a creature takes damage or if you use your reaction on another creature."
      },
      {
        "title": "Evasion Boost",
        "rules": "For the duration, you have advantage on Dexterity saving throws and an additional +2 to your AC. This effect lasts until the end of your next turn after activation."
      }
    ],
    "levelRequirementReason": "The Temporal Tick-Tock Device is designed for beginners who might need a bit more time to master it.",
    "vendorReason": "Empire Exchange sells a wide variety of items that can provide an edge in tricky situations, and this device fits perfectly into their inventory.",
    "shippingDetail": "The magical portal ensures swift delivery, but the item must be activated within 24 hours of receiving it to function properly.",
    "usage": {
      "activation": "action",
      "duration": "1 round per Intelligence modifier (minimum 1 round)",
      "endsWhen": "taking damage or using a reaction on another creature",
      "charges": "unlimited"
    },
    "priceReason": "The Temporal Tick-Tock Device is crafted from rare clockwork components and requires precise calibration, making it moderately priced for its utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T20:59:25.016442+00:00",
    "aiReviewedAt": "2026-07-23T20:59:25.016442+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_divine_scroll_of_fortune": {
    "id": "midlands_item_divine_scroll_of_fortune",
    "name": "The Oracle's Whispers (Probably)",
    "description": "The Oracle's Whispers (Probably) unfolds into a delicate parchment, its edges adorned with gold leaf and lapis lazuli. The ink within glows faintly, a testament to divine influence. While it may not predict grand events, it subtly adjusts fortunes, ensuring that even the most mundane tasks seem fortuitous. Each unfolding reveals a cryptic message, sometimes urging you to plant turnips or mend your socks, yet always imbued with a sense of cosmic harmony and reassurance.",
    "category": "premium",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "cryptic_message",
      "divine_fortune"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "winged_serpent",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Cryptic Message",
        "rules": "When activated, the scroll unfurls to reveal a cryptic message. It grants advantage on one ability check of your choice at any time before the end of your next turn. The message's content is incoherent, but its effect is unmistakable."
      },
      {
        "title": "Divine Fortune",
        "rules": "For 1 hour after activation, you gain resistance to all damage types and advantage on saving throws. This effect ends if you take any damage or fail a saving throw."
      }
    ],
    "levelRequirementReason": "The scroll's power is subtle but potent; it requires a certain degree of spiritual awareness to properly channel its effects.",
    "vendorReason": "Master Blacksmith Erek at Fractured Forge has forged a pact with local deities, allowing him to sell these divine trinkets.",
    "shippingDetail": "Delivered by winged serpents, the Oracle's Whispers (Probably) is often accompanied by their unique brand of whimsy and delay.",
    "usage": {
      "activation": "Reaction or bonus action to unfold and read the message.",
      "duration": "1 hour after activation.",
      "endsWhen": "Taking damage or failing a saving throw ends the effects early.",
      "charges": "Unlimited, recharges when you finish a long rest."
    },
    "priceReason": "The item's divine influence and unique effect justify its moderate price in terms of experience points.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-23T20:59:24.700035+00:00",
    "aiReviewedAt": "2026-07-23T20:59:24.700035+00:00",
    "aiReviewVersion": 1
  },
  "internet_glitch_worm": {
    "id": "internet_glitch_worm",
    "name": "Data Corruption Worm",
    "description": "The Data Corruption Worm is a shimmering, pulsating creature that seems to crawl straight from your monitor. Its iridescent body glows with an eerie blue light as it disrupts digital realms, causing spells to glitch and armor to momentarily phase out of existence. This concentrated dose of digital chaos can be devastating in the right hands, but be wary—its effects are unpredictable and leave you questioning whether the world is truly stable.",
    "category": "consumables",
    "price": 1000,
    "icon": "🐛",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Glitches Enemy Spells",
      "Armor Phasing"
    ],
    "vendor": "data_dealer",
    "shippedBy": "packet_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glitches Enemy Spells",
        "rules": "When activated as a bonus action, this worm causes all ongoing magical effects on one target to malfunction for 1 minute. The DC of saving throws against these glitches is equal to 8 + the spell's level. This effect ends if the target is incapacitated or the spell effect ends."
      },
      {
        "title": "Armor Phasing",
        "rules": "For 24 hours after activation, any armor worn by a creature struck by this worm becomes partially translucent and loses all benefits of armor proficiency for that duration. This effect can only occur once per target."
      }
    ],
    "levelRequirementReason": "Players at level 1 are beginning to explore the digital realms, making them suitable candidates to wield this tool.",
    "vendorReason": "The Data Dealer specializes in cutting-edge and experimental tech items, including those that can manipulate digital environments.",
    "shippingDetail": "Ships via high-speed data packets ensuring the worm arrives fresh and ready for use.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect, but ongoing magical effects glitch for 1 minute",
      "endsWhen": "Target becomes incapacitated or spell effects end",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Data Corruption Worm is a rare and versatile tool that can disrupt digital environments, making it valuable but not overly expensive for its utility.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:23:59.017793+00:00",
    "aiReviewedAt": "2026-07-25T14:23:59.017793+00:00",
    "aiReviewVersion": 1
  },
  "internet_meme_amulet": {
    "id": "internet_meme_amulet",
    "name": "Distracted Boyfriend Amulet",
    "description": "The Distracted Boyfriend Amulet is a delicate piece of jewelry forged from the twisted laughter of the internet. Crafted by the mischievous minds at Pixel Shop, this amulet subtly bends reality, causing nearby foes to momentarily lose focus and attack one another. The charm’s power lies in its ability to distract and divide, granting you the upper hand in combat. Just avoid looking into mirrors or cameras for too long—this artifact can be just as distracting for yourself.",
    "category": "equipment",
    "price": 1000,
    "icon": "👀",
    "stock": 18,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Divide and Conquer",
      "Charismatic Distraction"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "fiber_optic",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divide and Conquer",
        "rules": "When you activate this amulet, a wave of internet memes distorts the perceptions of nearby foes for 1 minute. Each affected creature has a 30% chance to target another foe instead of you. The effect ends if any creature within 20 feet of you is targeted by an attack."
      },
      {
        "title": "Charismatic Distraction",
        "rules": "For the duration, your Charisma score increases by 5 and you gain advantage on Persuasion checks. This effect lasts for 6 turns. It ends if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "This amulet is crafted to be accessible, allowing even the lowest-level characters to exploit its mischievous power.",
    "vendorReason": "Pixel Shop is known for its quirky and internet-inspired goods, making this amulet a perfect fit for their inventory.",
    "shippingDetail": "The amulet is packaged in a protective foam-lined box to ensure it arrives undistorted from the laughter of the internet.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until interrupted",
      "endsWhen": "Any creature within 20 feet targets you with an attack",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet’s balanced price reflects its unique combination of distraction and charisma boost, making it a versatile tool for any adventurer.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T20:59:33.199402+00:00",
    "aiReviewedAt": "2026-07-23T20:59:33.199402+00:00",
    "aiReviewVersion": 1
  },
  "internet_godly_data_core": {
    "id": "internet_godly_data_core",
    "name": "The Source of All Memes",
    "description": "The Source of All Memes is a pulsating digital core housed in an obsidian casing adorned with neon memes and viral trends. It pulses with the energy of forgotten cat videos and trending memes, granting you temporary mastery over the internet's whims. Touch it to restore your stats and gain immunity to digital curses; however, prolonged contact can overwhelm you with an endless stream of puppy videos or existential dread.",
    "category": "premium",
    "price": 1000,
    "icon": "💻",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "restores health",
      "immunity to digital threats"
    ],
    "vendor": "cyber_market",
    "shippedBy": "quantum_tunnel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "As a bonus action, touching the core restores all hit points. The effect ends if you take damage."
      },
      {
        "title": "Immunity to Digital Threats",
        "rules": "You gain immunity to digital curses and viruses for 1 hour. This immunity ends when the duration expires or you are exposed to a digital threat again."
      }
    ],
    "levelRequirementReason": "The Source of All Memes is accessible to all who seek its power, as it can be used by any character to restore health and protect against digital dangers.",
    "vendorReason": "Cyber Market specializes in the latest tech and internet-related artifacts, making The Source of All Memes a natural addition to their inventory.",
    "shippingDetail": "The core is delivered via quantum tunnel, ensuring swift and secure transport from the cyber market.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "1 hour per use",
      "endsWhen": "Exposure to a digital threat ends it early, or after one hour if no threat is present",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Source of All Memes offers significant utility for any adventurer facing digital threats and requires minimal upkeep.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-23T20:59:40.064250+00:00",
    "aiReviewedAt": "2026-07-23T20:59:40.064250+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_jungle_charm": {
    "id": "animatopia_jungle_charm",
    "name": "Primal Howler Charm",
    "description": "This Primal Howler Charm, crafted from an ancient giant beetle shell and adorned with jungle vines, hums with the primal energy of Animatopia's dense forests. When worn around the neck in the wild, it enhances your intimidation by a significant margin—perfect for warding off pesky grubs or larger predators. Its vibrations also grant you a 10% increase to movement speed within dense jungles, making you as elusive as the jungle itself.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🐾",
    "stock": 35,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Increased Intimidation",
      "Enhanced Jungle Movement"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "vine_messenger",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Intimidation",
        "rules": "When in dense jungle terrain, this charm grants you a +2 bonus to your intimidation checks. It also has a small chance (15%) of causing nearby enemies to be frightened for one round."
      },
      {
        "title": "Enhanced Jungle Movement",
        "rules": "While within 50 feet of dense jungle, you gain a +10% increase to movement speed and can navigate through difficult terrain as if it were normal ground. This effect lasts until the end of your next turn after leaving the dense jungle."
      }
    ],
    "levelRequirementReason": "This charm is crafted for those who have already ventured into Animatopia's wilds and can handle its challenging terrain.",
    "vendorReason": "The Tribal Trader has deep roots in Animatopia, making them a trusted source for items that resonate with the land’s natural magic.",
    "shippingDetail": "Ships via fast-growing vines, arriving within one day of purchase.",
    "usage": {
      "activation": "Passive effect upon wearing in dense jungle terrain.",
      "duration": "Instantaneous; lasts until the end of your next turn after leaving dense jungle.",
      "endsWhen": "The charm's effects expire when you leave dense jungle terrain or if the wearer is no longer within 50 feet of it.",
      "charges": "Unlimited, but only functions while in dense jungle."
    },
    "priceReason": "The rare material and intricate crafting required to produce this charm justify its price. It's a must-have for those navigating Animatopia’s treacherous jungles.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:00:06.292996+00:00",
    "aiReviewedAt": "2026-07-23T21:00:06.292996+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stone_golem_shard": {
    "id": "animatopia_stone_golem_shard",
    "name": "Fragment of the Stone Guardian",
    "description": "This jagged shard of a Stone Guardian is a fragment chipped from an ancient golem that once guarded the sacred grove against invaders. Its surface shimmers with residual earth magic, and when held, it pulses with the strength of the very stone from which it was forged. The guardian's essence lingers within, granting limited defensive prowess to those who wield it—but beware, for its power is as sharp as its edges.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗿",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Defensive Boost",
      "Projectile Deflection"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "rock_carrier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Defensive Boost",
        "rules": "When you activate this shard, it increases your armor class by 3 until the start of your next turn. If you are reduced to 0 hit points while holding it, the shard grants you temporary hit points equal to its level."
      },
      {
        "title": "Projectile Deflection",
        "rules": "Once per short rest, when an attack roll is made against you and a projectile is involved, there is a 15% chance that the attack is deflected harmlessly away. This effect has no saving throw associated with it."
      }
    ],
    "levelRequirementReason": "The guardian's essence within this shard demands a wielder of sufficient experience to harness its power.",
    "vendorReason": "Beast Bazaar curates rare and ancient items, making it the perfect vendor for such a relic from the Stone Guardian.",
    "shippingDetail": "Shipped by the Rock Carrier, known for its dependable service in delivering heavy cargo across treacherous terrains.",
    "usage": {
      "activation": "Action",
      "duration": "Until your next turn",
      "endsWhen": "At the start of your next turn or if you drop it",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the ancient magic imbued within make it a valuable yet balanced addition to any adventurer's inventory.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-24T23:51:07.589442+00:00",
    "aiReviewedAt": "2026-07-24T23:51:07.589442+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_legendary_spirit_lantern": {
    "id": "animatopia_legendary_spirit_lantern",
    "name": "Whispering Lantern of the Elders",
    "description": "The Whispering Lantern of the Elders, handcrafted from polished bone and filled with shimmering spirit dust, casts an ethereal glow that reveals hidden secrets of Animatopia's ancient past. Holding it allows you to briefly communicate with the echoes of forgotten spirits, but be wary—some spirits are not always willing to share their tales. This lantern provides a small bonus to perception checks and increases charisma by 5, making it easier for the wielder to navigate both literal and metaphorical dark alleys.",
    "category": "premium",
    "price": 1000,
    "icon": "🕯️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Spirit Echo Communication",
      "Enhanced Perception"
    ],
    "vendor": "forest_market",
    "shippedBy": "owl_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spirit Echo Communication",
        "rules": "When activated as an action, this lantern allows you to communicate with the echoes of forgotten spirits. You can ask one question and receive a cryptic answer from a spirit echo within 30 feet. The effect lasts for 1 minute. Concentrating on the lantern is difficult ( disadvantage on your next attack roll or saving throw after ending concentration)."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While holding this lantern, you gain a +2 bonus to perception checks. This benefit persists as long as you hold the lantern."
      }
    ],
    "levelRequirementReason": "The Whispering Lantern requires only level 1 due to its magical properties aiding in both communication and perception tasks.",
    "vendorReason": "The forest market is known for its ties to ancient lore, making it a fitting location for this enchanted lantern.",
    "shippingDetail": "Delivered swiftly by the owls of Animatopia, ensuring the lantern arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (concentration)",
      "endsWhen": "Concentration ends or you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the lantern's unique combination of communication and perception bonuses.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-23T21:00:19.003387+00:00",
    "aiReviewedAt": "2026-07-23T21:00:19.003387+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_greed_scroll": {
    "id": "mushroom_kingdom_greed_scroll",
    "name": "Wario's Secret Recipe",
    "description": "Wario's Secret Recipe is an ancient scroll of parchment, its edges worn by time and use. The ink sparkles faintly under dim light, hinting at the magic within. This recipe grants you temporary resistance to charm effects, allowing you to maintain your cunning amidst enchantments. However, it also sharpens your insatiable desire for gold, doubling the value of any shiny coins found during its duration, but beware, as this greed can attract unwanted attention from treasure-guarding goblins.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💰",
    "stock": 15,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Charm Effects",
      "Increased Gold Value Perception"
    ],
    "vendor": "wario_direct",
    "shippedBy": "snail_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Charm Effects",
        "rules": "When you are the target of a charm effect, you gain resistance to that effect for 10 seconds. This does not negate the effect but allows you more time to resist its influence."
      },
      {
        "title": "Increased Gold Value Perception",
        "rules": "For every gold coin found or gained while this item is active, its value is doubled in your perception. This effect increases the effective wealth of gold by 20% for 30 seconds. However, the increased greed might cause you to overlook other items."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers as it can be used in any situation where charm effects or treasure hunting are relevant.",
    "vendorReason": "Wario himself would personally deliver this secret ingredient, ensuring its authenticity and potency.",
    "shippingDetail": "Due to the fragile nature of ancient scrolls, they are delivered by snail express to ensure safe arrival.",
    "usage": {
      "activation": "Use as a bonus action",
      "duration": "10 seconds for resistance and 30 seconds for increased gold value perception; both effects end when their duration is over or the scroll is used again.",
      "endsWhen": "The spell ends if you use it again, unless the charm effect is successfully resisted.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the rare and valuable nature of ancient recipes that can provide significant advantages in both combat and treasure hunting.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-23T21:00:36.750721+00:00",
    "aiReviewedAt": "2026-07-23T21:00:36.750721+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_dark_artifact": {
    "id": "mushroom_kingdom_dark_artifact",
    "name": "The Soul Snatcher's Shard",
    "description": "The Soul Snatcher's Shard is a fractured relic of ancient origins, its surface etched with arcane symbols that hum with malevolent intent. This shard can siphon life essence from foes within a ten-foot radius for up to three rounds, dealing 1d6 necrotic damage per round. If the target fails their saving throw, it also becomes weak for 2 minutes. Handling this relic too long risks your own vitality; prolonged exposure might cause you to weaken and collapse from exhaustion.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "life essence drain",
      "weakness on failed save"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "shadow_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Life Essence Drain",
        "rules": "When activated, the shard drains life energy from targets within a ten-foot radius. Each target takes 1d6 necrotic damage per round for up to three rounds. The effect ends if the item is removed or destroyed."
      },
      {
        "title": "Weakness on Failed Save",
        "rules": "If a target fails their Constitution saving throw, they become weak for 2 minutes. This effect has no save DC and can be triggered once per use."
      }
    ],
    "levelRequirementReason": "The shard's potent necrotic energy requires concentration to wield effectively.",
    "vendorReason": "Despite its forbidden nature, this relic is rumored to have been salvaged by the Koopa Shop for collectors of dark artifacts.",
    "shippingDetail": "Ships under cover of darkness with a courier who ensures no light touches the shard during transport.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Up to three rounds",
      "endsWhen": "The item is removed or destroyed, or after three rounds",
      "charges": "Unlimited, but must be recharged by a 5th-level spellcaster"
    },
    "priceReason": "Balanced at 1000 XP to reflect its dark magic and limited use.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-23T21:00:26.795530+00:00",
    "aiReviewedAt": "2026-07-23T21:00:26.795530+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_grizzly_grumbles": {
    "id": "faerun_item_potion_of_grizzly_grumbles",
    "name": "Potion of Grizzly Grumbles",
    "description": "The Potion of Grizzly Grumbles is a murky green concoction that smells suspiciously of wet fur and echoes of frustrated roars. When consumed, it grants the imbiber a grizzled demeanor, temporarily boosting their strength with the resilience of a bear's determination... or at least makes them *sound* like one. The potion's effects are as unpredictable as an angry bear’s, often leading to moments of excessive rumbling and growling.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "temporary_strength",
      "grumbling_sound"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Strength",
        "rules": "The drinker gains a +2 bonus to Strength checks and saving throws for 1 hour. This effect lasts until it is dispelled or the user drops prone."
      },
      {
        "title": "Grumbling Sound",
        "rules": "For the duration of the potion's effect, the drinker emits an unsettling growling sound. Any creature within 30 feet must succeed on a DC 12 Wisdom saving throw or become frightened for 1 minute."
      }
    ],
    "levelRequirementReason": "This simple potion is designed for adventurers just starting their journey, providing them with basic resilience and a touch of intimidation.",
    "vendorReason": "Baldur's Bazaar stocks this item as it caters to the fledgling heroes who need a bit more oomph in their early battles.",
    "shippingDetail": "The flying carpet ensures swift delivery, often arriving within an hour of purchase.",
    "usage": {
      "activation": "Drink the potion as a bonus action.",
      "duration": "1 hour or until prone.",
      "endsWhen": "The effect ends if you drop prone, are incapacitated, or dispelled by another creature.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price is adjusted to reflect the potion's increased duration and more potent effects.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:00:32.406722+00:00",
    "aiReviewedAt": "2026-07-23T21:00:32.406722+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_amulet_of_forgotten_omens": {
    "id": "faerun_item_amulet_of_forgotten_omens",
    "name": "Amulet of Forgotten Omens",
    "description": "This tarnished silver amulet shimmers faintly in the dark, its surface etched with arcane symbols that whisper of forgotten prophecies and ancient omens. It feels cold to the touch, as if it holds secrets from realms beyond. Wearers are drawn into a vortex of visions, each one a cryptic warning or foreboding omen. Rumor has it that prolonged use can lead to an uncontrollable urge to hoard shiny objects, but those who resist might find their luck inexplicably bolstered in times of need.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "whispers_of_omen",
      "luck_boost"
    ],
    "vendor": "Waterdeep Market",
    "shippedBy": "Courier of the Silver Star",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Whispers of Omen",
        "rules": "As an action, the wearer can invoke the amulet to receive a cryptic prophecy. This has a chance to grant advantage on one saving throw or attack roll before the end of their next turn. The amulet can be used once per long rest."
      },
      {
        "title": "Luck Boost",
        "rules": "The wearer gains a +1 bonus to all Dexterity saving throws for 1 hour, starting when they activate the amulet. This effect ends if the wearer takes any damage or if they finish a short rest."
      }
    ],
    "levelRequirementReason": "This amulet is designed for those who have proven themselves in the harshest of trials.",
    "vendorReason": "The Waterdeep Market caters to adventurers seeking rare and powerful artifacts from the farthest corners of Faerûn.",
    "shippingDetail": "Delivered by trusted couriers, ensuring safe and timely arrival. Requires a special delivery permit for legendary items.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Whispers of Omen), 1 hour (Luck Boost)",
      "endsWhen": "Ends if the wearer takes damage or finishes a short rest; recharges at dawn on the next day after use.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "Balanced to reflect the amulet's ability to provide both tactical and situational advantages without overpowered effects.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T21:01:29.038767+00:00",
    "aiReviewedAt": "2026-07-23T21:01:29.038767+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_silverwood_amulet": {
    "id": "faerun_item_silverwood_amulet",
    "name": "Amulet of the Whispering Woods",
    "description": "The Amulet of the Whispering Woods, crafted from ancient Silverwood found in the heart of Faerûn's oldest forest, subtly glows with an ethereal light. Its whispers carry tales of ancient secrets and cryptic warnings that have eluded even the most seasoned adventurers. It grants a subtle advantage in wilderness survival checks and offers fleeting insights into the hidden dangers lurking within the woods, mostly steering one clear of common traps laid by mischievous forest spirits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌳",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Survival Checks",
      "Fleeting Cryptic Warnings"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Survival Insight",
        "rules": "When you make a Survival check in the wilderness, you have advantage. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Warning Whispers",
        "rules": "Once per short or long rest, the amulet offers a cryptic warning about an impending danger within 30 feet. There is a 5% chance this will be a false alarm. This effect does not require action and ends when you hear the warning."
      }
    ],
    "levelRequirementReason": "The amulet's subtle but helpful effects are accessible to adventurers of all levels, offering early-stage assistance without overwhelming more experienced players.",
    "vendorReason": "Baldur's Bazaar is known for its extensive collection of magical trinkets and artifacts, making it the ideal vendor for such a unique and lore-rich item.",
    "shippingDetail": "Ships within 1d4 turns via enchanted flying carpets, delivered directly to your doorstep with minimal fuss.",
    "usage": {
      "activation": "Passive effect; cryptic warnings are offered without action.",
      "duration": "Until the end of your next long rest, or until the warning is heard.",
      "endsWhen": "At the end of a long rest, or when the cryptic warning is heeded and understood.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's price reflects its rarity, magical properties, and the limited stock available from Baldur's Bazaar.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-23T21:01:02.163231+00:00",
    "aiReviewedAt": "2026-07-23T21:01:02.163231+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_guildmaster_badge": {
    "id": "faerun_item_guildmaster_badge",
    "name": "Dwarven Guildmaster's Recognition",
    "description": "The Dwarven Guildmaster's Recognition is a hefty piece of jewelry, crafted from gleaming steel and emblazoned with the emblem of Stonebeard Clan. Its weighty form not only catches the light like Wario’s favorite mirror but also signifies respect and access to exclusive dwarven trade routes. This badge provides a discount at all dwarven shops in Faerûn and boosts your reputation among the clan, ensuring you are treated with deference wherever you go.",
    "category": "faction",
    "price": 1000,
    "icon": "💎",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Dwarven Trade Route Access",
      "Shop Discount"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "Iron Road Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dwarven Trade Route Access",
        "rules": "Activates upon wearing this badge. Grants access to exclusive dwarven trade routes, allowing you to purchase goods at a significant discount compared to public markets. This effect lasts until the badge is removed or lost."
      },
      {
        "title": "Shop Discount",
        "rules": "Passive effect while wearing the badge. Provides a 10% discount at all dwarven shops in Faerûn. The discount cannot be combined with other offers and expires upon removing the badge from your person."
      }
    ],
    "levelRequirementReason": "The recognition is simple enough that even the lowest-ranking guild member can wear it, but it remains a symbol of respect.",
    "vendorReason": "Waterdeep Market often deals with Stonebeard Clan and thus stocks this badge for their patrons.",
    "shippingDetail": "Ships via the Iron Road Express, ensuring swift delivery from the dwarven strongholds of Faerûn.",
    "usage": {
      "activation": "Passive upon wearing the badge.",
      "duration": "Until removed or lost.",
      "endsWhen": "Upon removal or loss of the badge.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects both its rarity and its practical utility in gaining access to valuable trade routes.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T21:01:10.067978+00:00",
    "aiReviewedAt": "2026-07-23T21:01:10.067978+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_weave": {
    "id": "animatopia_spirit_weave",
    "name": "Spirit Weave Offering Bowl",
    "description": "The Spirit Weave Offering Bowl is crafted from shimmering beetle wings and woven forest vines, each strand imbued with the essence of Animatopia's spirits. This sacred vessel not only grants blessings but also provides temporary resistance to fear effects, ensuring your courage in the face of the unknown. As you offer it to the spirits, expect to hear whispers of guidance and perhaps even see paths previously hidden by mist appear before you.",
    "category": "services",
    "price": 1000,
    "icon": "🌿",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Spiritual Guidance",
      "Fear Resistance"
    ],
    "vendor": "forest_market",
    "shippedBy": "Giant Spider Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spiritual Guidance",
        "rules": "When activated as an action, this bowl grants the user a random beneficial effect from Animatopia's spirits. The effect can range from finding lost berries to receiving wisdom on local lore. This blessing lasts for 1 hour and can be used once per day."
      },
      {
        "title": "Fear Resistance",
        "rules": "This offering bowl provides the recipient with temporary resistance to fear effects, granting advantage on saving throws against such effects until it is consumed or destroyed. It remains active as long as the user holds the bowl in their possession."
      }
    ],
    "levelRequirementReason": "Even the simplest of Animatopia's inhabitants can offer this bowl to the spirits, making it accessible to all travelers.",
    "vendorReason": "The forest market thrives on offerings and rituals that connect communities with the natural world.",
    "shippingDetail": "Delivered by a giant spider courier, ensuring safe arrival through Animatopia's dense forests.",
    "usage": {
      "activation": "Activate as an action to receive a blessing or benefit.",
      "duration": "Effect lasts for 1 hour or until consumed.",
      "endsWhen": "Upon consumption or destruction of the bowl.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The cost reflects the rarity and magical properties of the bowl, balancing its utility with a mythic item's value.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T21:01:06.410870+00:00",
    "aiReviewedAt": "2026-07-23T21:01:06.410870+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_warrior_mask": {
    "id": "animatopia_warrior_mask",
    "name": "Mask of the Primal Howler",
    "description": "The Mask of the Primal Howler is crafted from the hardened hide of a fearsome rhino and adorned with bone fragments that reflect the raw power of Animatopia's fiercest warriors. Wearing this mask unleashes primal rage, boosting your combat prowess and granting you resilience against poisons. The mask’s sharp edges enhance your melee attacks, dealing an extra 3 points of damage and leaving foes bleeding. A warrior's essence courses through its metalwork, temporarily fortifying your strength.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦁",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "+3 attack damage",
      "chance to inflict bleeding"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Rattlesnake Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Boosted Attack Damage",
        "rules": "When you wear the Mask of the Primal Howler, your melee weapon attacks deal an additional +3 damage until the start of your next turn."
      },
      {
        "title": "Bleeding on Hit",
        "rules": "Each time you score a critical hit or natural 19-20 while wearing the mask, there is a 50% chance to inflict the bleeding condition on one target within reach. The effect lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "The Mask of the Primal Howler's raw power requires a warrior with significant experience and discipline.",
    "vendorReason": "Beast Bazaar regularly stocks items from Animatopia, ensuring that even the most seasoned warriors can find gear to enhance their combat abilities.",
    "shippingDetail": "The Rattlesnake Express delivers with precision and speed, guaranteeing the Mask of the Primal Howler arrives in pristine condition.",
    "usage": {
      "activation": "Equipping the mask is a free action.",
      "duration": "One minute.",
      "endsWhen": "At the start of your next turn after removing it.",
      "charges": "Unlimited"
    },
    "priceReason": "The Mask of the Primal Howler's reduced price reflects its more balanced and strategic effects, rather than raw power.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-23T21:01:19.240920+00:00",
    "aiReviewedAt": "2026-07-23T21:01:19.240920+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_goblin_grease": {
    "id": "earth_land_goblin_grease",
    "name": "Sticky Goblin Goo",
    "description": "Sticky Goblin Goo, a suspiciously bright green paste harvested from the goblin sewers, is more than just a greasy inconvenience—it clings to your weapon like a second skin, making every strike stickier and harder to shake off. The foul-smelling goo is said to be infused with the essence of rotten turnips, lending it an eerie glow in dim light. When applied, this paste not only increases the damage done by melee attacks but also leaves opponents grappling with the slippery residue for a moment after contact.",
    "category": "consumables",
    "price": 1000,
    "icon": "🟢",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "weapon_damage_increase_1",
      "grapple_residue_on_contact"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "horseback courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Weapon Damage Increase",
        "rules": "When you attack with a weapon, you gain a +1 bonus to the damage roll. This effect persists for 1 minute after application."
      },
      {
        "title": "Grapple Residue on Contact",
        "rules": "Whenever an opponent makes a successful melee attack against you while wearing this sticky goo, they must make a DC 13 Strength saving throw or be grappled until the start of your next turn. The effect ends if you are disarmed."
      }
    ],
    "levelRequirementReason": "This item's potency is balanced for beginners to enjoy its practical benefits without overwhelming them.",
    "vendorReason": "The Guild Quartermaster stocks this versatile goo as a reliable option for those embarking on their first quests, offering a bit of extra edge in combat.",
    "shippingDetail": "Delivered by horseback courier within three days from the shop.",
    "usage": {
      "activation": "Apply to your weapon as an action.",
      "duration": "1 minute per application.",
      "endsWhen": "The effect ends if you are disarmed or when the duration expires.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The price reflects its unique properties, increased durability, and the special handling required for transport.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-23T21:01:49.715968+00:00",
    "aiReviewedAt": "2026-07-23T21:01:49.715968+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_ancient_rune_tablet": {
    "id": "earth_land_ancient_rune_tablet",
    "name": "Runic Tablet of the Silent Guardians",
    "description": "The Runic Tablet of the Silent Guardians is a weathered stone tablet etched with ancient runes that hum softly when touched. It whispers forgotten secrets, but only for those who can decipher its cryptic language. A fleeting sense of unease accompanies each touch, as if the tablet knows more than it reveals. This relic grants temporary wisdom and insight into hidden truths, making it invaluable against powerful foes like dragons or ancient sorcerers.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "whisper_of_forbidden_knowledge",
      "wisdom_boon"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Courier of Silent Steps",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whisper of Forbidden Knowledge",
        "rules": "When the tablet is touched, you gain advantage on a single Intelligence (Insight) check to uncover hidden information. This effect lasts for one minute and can be used once per long rest."
      },
      {
        "title": "Wisdom Boon",
        "rules": "For 10 minutes after touching the tablet, your Wisdom score is increased by 2, providing a +2 bonus on saving throws against fear and charm effects. This effect ends if you take damage or fall unconscious."
      }
    ],
    "levelRequirementReason": "The tablet's ancient power requires only basic arcane knowledge to activate.",
    "vendorReason": "The Earth Emporium specializes in artifacts of nature and ancient lore, making it the perfect vendor for this relic.",
    "shippingDetail": "Delivered by a courier who ensures the tablet remains undisturbed until it reaches its destination.",
    "usage": {
      "activation": "Action",
      "duration": "Whisper lasts one minute, Wisdom Boon lasts for 10 minutes",
      "endsWhen": "On damage or unconsciousness; ends if not used within a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The tablet's rarity and ancient power justify its moderate price, offering both tactical advantage and lore.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:01:23.485783+00:00",
    "aiReviewedAt": "2026-07-23T21:01:23.485783+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_chronometric_pendulum": {
    "id": "kivotos_item_chronometric_pendulum",
    "name": "Temporal Tick Tocker",
    "description": "The Temporal Tick Tocker is a pendulum clock with a polished brass casing and an intricate mechanism. Crafted from ancient elvish alchemy, it subtly bends the flow of time around you when activated. Winding it in moments of crisis grants you a fleeting boost to your reaction speed, allowing you to dodge attacks or counter foes with precision. It can also briefly reverse small events, erasing minor missteps without altering history's course.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "enhanced_reaction_speed",
      "minor_time_rewind"
    ],
    "vendor": "academy_armory",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Reaction Speed",
        "rules": "When activated as a reaction, you gain advantage on your next attack or saving throw. This effect lasts for 1 round and can be used once per long rest."
      },
      {
        "title": "Minor Time Rewind",
        "rules": "Activate as an action to rewind time for minor events up to 30 seconds in the past, negating the effects of one damaging spell or ability. This effect is instantaneous and can only be used once every 24 hours."
      }
    ],
    "levelRequirementReason": "The Temporal Tick Tocker requires no level to use as its effects are minor and intended for emergency situations.",
    "vendorReason": "The Academy Armory stocks unique items crafted by ancient artisans, and the Temporal Tick Tocker is a perfect example of their work.",
    "shippingDetail": "Delivered within a day with express courier service.",
    "usage": {
      "activation": "reaction or action",
      "duration": "instantaneous or until end of next turn for Enhanced Reaction Speed; instantaneous for Minor Time Rewind",
      "endsWhen": "used up, recharged after a long rest for Enhanced Reaction Speed; cooldown period of 24 hours for Minor Time Rewind",
      "charges": "unlimited uses per day"
    },
    "priceReason": "The Temporal Tick Tocker's balanced price reflects its minor utility and the expertise needed to craft such an item.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:01:35.219556+00:00",
    "aiReviewedAt": "2026-07-23T21:01:35.219556+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_of_dedication": {
    "id": "kivotos_item_halo_of_dedication",
    "name": "The Scholar's Spark",
    "description": "The Scholar's Spark is a shimmering halo forged from concentrated student energy, encased in a delicate lattice of silver and glass. It hums softly as it amplifies your focus, making even the most tedious tasks a breeze. The halo subtly encourages organization, causing you to rearrange books and notes with precision, though this can lead to fits of alphabetical ordering that leave your study area neatly sorted but perhaps not in its original state.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "increased_learning_efficiency",
      "organized_urge"
    ],
    "vendor": "club_supply",
    "shippedBy": "winged_messenger",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Increased Learning Efficiency",
        "rules": "While wearing The Scholar's Spark, you gain a +1 bonus to all Intelligence (History) and Intelligence (Investigation) checks. This effect is passive."
      },
      {
        "title": "Organized Urge",
        "rules": "When you spend 1 minute organizing your surroundings, you can attempt an Intelligence (Persuasion) check with advantage against creatures that notice the change. On a success, they are charmed for 1 hour."
      }
    ],
    "levelRequirementReason": "The Scholar's Spark requires at least 6th level to channel its focused energy without overwhelming the user.",
    "vendorReason": "Club Supply specializes in academic and scholarly curiosities, making The Scholar's Spark a natural fit for their inventory.",
    "shippingDetail": "Delivered swiftly by winged messenger with a 24-hour delivery guarantee.",
    "usage": {
      "activation": "Passive effect while wearing the item.",
      "duration": "Permanent until removed or destroyed.",
      "endsWhen": "The item is removed from your person or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect its limited utility and scholarly focus, making it a valuable but not overpowered addition to any scholar's gear.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-23T21:01:53.484574+00:00",
    "aiReviewedAt": "2026-07-23T21:01:53.484574+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_vortex_scroll": {
    "id": "kivotos_item_vortex_scroll",
    "name": "Dimensional Scribbles",
    "description": "The Dimensional Scribbles scroll appears to be a tattered relic of forgotten dimensions, its edges shimmering with impossible geometries and arcane symbols that seem to twist in place like living ink. When unfurled, it briefly opens a localized vortex, perfect for escaping awkward conversations or retrieving dropped items without alerting the surrounding area. However, users must exercise caution as the vortex can inadvertently pull nearby objects and creatures closer, potentially causing untimely entanglements.",
    "category": "premium",
    "price": 1000,
    "icon": "🌀",
    "stock": 33,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "teleport_short_range",
      "local_vortex"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport Short Range",
        "rules": "As a bonus action, the user may teleport up to 5 feet towards an object or creature. The target must be within range and visible. This effect has no save DC but is limited to once per short rest."
      },
      {
        "title": "Local Vortex",
        "rules": "When activated as a reaction in response to being targeted by an attack, the user can create a localized vortex that pulls all creatures within 5 feet towards it. Creatures must succeed on a DC 13 Dexterity saving throw or be pushed back 5 feet and knocked prone. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Suitable for lower-level adventurers to help in tight situations without requiring high proficiency.",
    "vendorReason": "The student store caters to the needs of young, resourceful explorers and scholars who often require such items for their adventures.",
    "shippingDetail": "Ships via standard mail within the kingdom; delivery usually takes no longer than a week.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous (Teleport) / Until the end of next turn (Local Vortex)",
      "endsWhen": "Exhausted after one use per rest",
      "charges": "Unlimited, recharges on a short or long rest"
    },
    "priceReason": "Balanced for its utility in both combat and exploration without being overly powerful.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-24T23:51:35.219298+00:00",
    "aiReviewedAt": "2026-07-24T23:51:35.219298+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_singing_donut": {
    "id": "doughnut_hole_singing_donut",
    "name": "Resonance Ring Donut",
    "description": "The Resonance Ring Donut radiates a faint, doughy glow that resonates through the air like a forgotten melody. This peculiar pastry hums with untapped potential, and when consumed, it unleashes a wave of dissonant energy that disrupts nearby foes, causing them to momentarily lose their balance in a symphony of chaos. The donut's core is said to be crafted from the very essence of The Doughnut Hole itself, lending it an otherworldly quality that defies explanation.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍩",
    "stock": 42,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Disruptive Hum",
      "Momentary Stun"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Dimensional Wormhole Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Disruptive Hum",
        "rules": "When consumed, the Resonance Ring Donut emits a dissonant hum that targets one creature within 30 feet. The target must succeed on a DC 15 Wisdom saving throw or be stunned for 1 round."
      },
      {
        "title": "Momentary Stun",
        "rules": "The target is momentarily incapacitated, losing their ability to take actions during the stun duration and suffering 2d6 psychic damage. This effect has no save."
      }
    ],
    "levelRequirementReason": "Consuming this donut requires a moderate understanding of its chaotic energy.",
    "vendorReason": "The Hole Hawker has exclusive access to the ingredients from The Doughnut Hole, ensuring the authenticity and potency of these rare pastries.",
    "shippingDetail": "Ships via a wormhole express, arriving within moments of ordering.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous effect; the target is stunned for 1 round",
      "endsWhen": "The stun ends when the target's next turn begins or they are hit by an attack",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "Crafted from rare ingredients and the essence of The Doughnut Hole, this donut is a delicacy worth its weight in experience points.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-23T21:02:45.809388+00:00",
    "aiReviewedAt": "2026-07-23T21:02:45.809388+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravity_stone": {
    "id": "doughnut_hole_gravity_stone",
    "name": "Centrifugal Shard",
    "description": "The Centrifugal Shard, hewn from the collapsing fabric of a parallel dimension, warps space-time in its immediate vicinity. As you activate it, gravity bends and twists around you, creating a 3-foot radius of distorted force that snares nearby projectiles, slowing them by 20%. Any creature caught within this field is also subject to an unpredictable flip, with a 15% chance of being sent flying in the opposite direction. Use with caution; the last person who tried it ended up in the wrong dimension entirely!",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 18,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Gravitational Distortion",
      "Projectile Slowdown"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitational Distortion",
        "rules": "When activated, this shard creates a 3-foot radius area of distorted gravity. Any creature or object that enters the area has its movement speed reduced by 50%. The effect lasts for 1 minute and ends if the shard is destroyed or if any creature outside the area casts a dispel magic spell on it."
      },
      {
        "title": "Projectile Slowdown",
        "rules": "This effect slows all projectiles within a 3-foot radius by 20% of their speed. It has no effect on creatures and ends when the shard is destroyed or if any creature outside the area casts a dispel magic spell on it."
      }
    ],
    "levelRequirementReason": "This shard requires minimal magical power to activate, making it accessible to low-level characters.",
    "vendorReason": "The Void Vendor is known for their extensive collection of exotic and rare dimensional artifacts, including the Centrifugal Shard.",
    "shippingDetail": "Ships via the Void Courier's interdimensional express service, ensuring delivery within a day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "Destroyed or dispelled by a dispel magic spell outside the area",
      "charges": "Unlimited"
    },
    "priceReason": "The Centrifugal Shard's unique and potentially dangerous properties justify its price, making it an epic rarity in this D&D-inspired shop.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:02:30.756123+00:00",
    "aiReviewedAt": "2026-07-23T21:02:30.756123+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_mirror": {
    "id": "doughnut_hole_anomaly_mirror",
    "name": "Reflective Echo",
    "description": "The Reflective Echo is a fractured mirror that distorts reality with each glance. It reveals fleeting glimpses of alternate realities, yet its shards can also cause a brief disorientation or dizziness if held too long in one's sight. Crafted from the remnants of The Doughnut Hole’s mystical construction, this mirror provides +1 to Perception checks and has a chance to grant a temporary buff (random effect) upon use.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary buffs",
      "perception boost"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Buffs",
        "rules": "Roll a d8 to determine the type of temporary buff granted. The effect lasts for 1 minute and can be used once per day."
      },
      {
        "title": "Perception Boost",
        "rules": "+1 bonus to Perception checks while holding Reflective Echo, active until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Reflective Echo's power is subtle yet potent; it requires no significant character level to utilize.",
    "vendorReason": "Center Seller curates oddities from The Doughnut Hole, making the Reflective Echo a fitting addition to their collection.",
    "shippingDetail": "The Temporal Drone ensures safe and timely delivery, but the mirror's fragile nature requires special care during transit.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "Instantaneous",
      "endsWhen": "Charges are expended or upon destruction of the mirror",
      "charges": "Unlimited"
    },
    "priceReason": "The Reflective Echo's mystical properties and unique crafting from The Doughnut Hole justify this price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:02:05.940317+00:00",
    "aiReviewedAt": "2026-07-23T21:02:05.940317+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_fractured_echo": {
    "id": "almost_edge_item_fractured_echo",
    "name": "Fractured Echo of the Void",
    "description": "The Fractured Echo of the Void is a jagged, shimmering shard that glows faintly with an eerie, otherworldly light. Its origin lies at the edge of reality itself, torn from the void by intrepid explorers who dared to venture too close to the unspoken. Hold it for more than a minute and you might hear whispers of the forgotten, compelling you to leap into the unknown, where the echoes of the void call your soul.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Echoes of Madness",
      "Silent Insight"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional rift",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echoes of Madness",
        "rules": "There is a 15% chance that any creature holding this item for more than one minute will suffer from auditory hallucinations, compelling them to make a DC 13 Wisdom saving throw. On a failed save, they must take a short rest and are prone until their next turn."
      },
      {
        "title": "Silent Insight",
        "rules": "This shard grants the wielder advantage on Insight checks for 1 hour after it is held. It can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Wielders must have a certain level of experience to resist the item's potential madness and focus on its beneficial effects.",
    "vendorReason": "The Void Merchant has connections with explorers who recovered this shard from dangerous void expeditions.",
    "shippingDetail": "The shard is carefully sealed in a containment field to prevent it from affecting the vessel during transit.",
    "usage": {
      "activation": "Passive effect while held, once per long rest for Silent Insight.",
      "duration": "Silent Insight lasts for 1 hour after activation.",
      "endsWhen": "The duration ends when the effect is used or the shard is no longer being held.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rare origin and limited availability justify its price, balancing its potential for both benefit and risk.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-23T21:02:45.976547+00:00",
    "aiReviewedAt": "2026-07-23T21:02:45.976547+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_crumb": {
    "id": "almost_edge_item_chronal_crumb",
    "name": "Chronal Crumb of the Forgotten",
    "description": "A tiny, dust-covered crumb that clings to your palm like a relic from forgotten timelines. This Chronal Crumb of the Forgotten can warp time around you for fleeting moments, either speeding it up or slowing it down. The precise effect is unpredictable—some say it grants +3 to attack rolls while others report a -3 to defense—but one thing's certain: consuming it leaves you disoriented and your allies' clocks ticking erratically.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Temporal Buff",
      "Temporal Disruption"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Buff",
        "rules": "Choose either +3 to attack rolls or -3 to defense. This effect lasts for 1 round (6 turns). There is a 50% chance of this effect being applied when the crumb is consumed."
      },
      {
        "title": "Temporal Disruption",
        "rules": "For 1d4 rounds, your allies' and enemies' turn-based actions are temporarily adjusted. This causes them to act either faster or slower by a random amount within a round. A DC 15 Wisdom saving throw can negate this effect."
      }
    ],
    "levelRequirementReason": "The crumb's unpredictable effects and temporal manipulations require at least a first-level character to safely handle its chaotic nature.",
    "vendorReason": "Liminal Traders specialize in items that bridge realities, making the Chronal Crumb of the Forgotten a fitting addition to their wares.",
    "shippingDetail": "The delivery is handled by the Temporal Courier, ensuring the crumb remains stable during transit.",
    "usage": {
      "activation": "Eating the crumb as an action",
      "duration": "1 round (6 turns) or until interrupted",
      "endsWhen": "Interrupted by damage or a successful Wisdom saving throw",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "The Chronal Crumb's unpredictable nature and the risk of temporal disruption justify its moderate price.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-23T21:02:50.594185+00:00",
    "aiReviewedAt": "2026-07-23T21:02:50.594185+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_voidwalker_badge": {
    "id": "almost_edge_item_voidwalker_badge",
    "name": "Badge of the Voidwalker (Order of the Shifting Sands)",
    "description": "The Badge of the Voidwalker is a tarnished emblem forged by the Order of the Shifting Sands, crafted from ancient voidmetal. Wielding it grants you a subtle connection to the ethereal realm, making you more attuned to psychic energies and enhancing your charisma when conversing with entities of the void. With a 10% chance each day, you may teleport a short distance within sight, aiding in swift escapes or rapid exploration. This badge provides resistance to psychic damage, shielding you from the mind-warping effects that plague those who delve too deeply into forbidden knowledge.",
    "category": "faction",
    "price": 1000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Void Attunement",
      "Teleport Chance"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "dimensional courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Void Attunement",
        "rules": "You gain a +2 bonus to Charisma checks when interacting with void entities. This effect is passive and lasts until the start of your next turn."
      },
      {
        "title": "Teleport Chance",
        "rules": "Each day, you have a 10% chance to instantly teleport up to 30 feet in any direction as a bonus action. This ability can only be used once per long rest and is subject to the usual rules for movement."
      }
    ],
    "levelRequirementReason": "The Badge of the Voidwalker requires a minimum level to ensure its effects are balanced with player capabilities.",
    "vendorReason": "Edge Wanderers have deep ties with the Order of the Shifting Sands and often carry relics like this badge.",
    "shippingDetail": "The courier ensures the badge arrives in perfect condition, even across vast inter-dimensional distances.",
    "usage": {
      "activation": "Passive effect; requires no activation for Void Attunement. Teleport Chance is a bonus action.",
      "duration": "Instantaneous for teleport chance; passive until next turn for Charisma checks with void entities.",
      "endsWhen": "The ability ends when you finish a long rest or are incapacitated.",
      "charges": "Unlimited, but can only be used once per short or long rest."
    },
    "priceReason": "This badge is priced at 1000 XP to reflect its rare and powerful abilities within the Order of the Shifting Sands.",
    "priceOriginal": 38000,
    "priceReviewedAt": "2026-07-23T21:02:56.693760+00:00",
    "aiReviewedAt": "2026-07-23T21:02:56.693760+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_glittering_crumb": {
    "id": "doughnut_hole_glittering_crumb",
    "name": "Glittering Crumb of Unraveling",
    "description": "The Glittering Crumb of Unraveling, a fragment of shadowy doughnut core, hums with an eerie void-light that warps the air around you. When consumed, it grants a brief moment where gravity bends to your will, allowing you to float freely for 5 seconds—perfect for escaping sticky situations or annoying your enemies. The crumb's shimmering surface hints at dimensions beyond, and its consumption leaves behind a lingering echo of reality-altering residue.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "gravity_bending",
      "dimensional_echo"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Packet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Bending",
        "rules": "Consume the crumb to temporarily defy gravity, allowing you to float uncontrollably for 5 seconds. This effect can be used once per short rest."
      },
      {
        "title": "Dimensional Echo",
        "rules": "For as long as you remain within 10 feet of where you consumed the Glittering Crumb, there is a faint shimmer in the air, granting advantage on Perception checks made to notice distortions or anomalies in your immediate vicinity."
      }
    ],
    "levelRequirementReason": "This crumb's effects are potent enough to challenge even low-level adventurers, but its unpredictable nature ensures it remains a balanced addition.",
    "vendorReason": "Hole Hawker is known for their extensive knowledge of strange and powerful items from the shadowy markets—this crumb fits right into their eclectic inventory.",
    "shippingDetail": "The Glittering Crumb arrives in a sealed, shimmering container that protects it from external influences until consumption.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "5 seconds",
      "endsWhen": "Ends when the effect duration expires or you take damage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Glittering Crumb's unique properties and limited shelf life in its sealed container justify this price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:03:17.199704+00:00",
    "aiReviewedAt": "2026-07-23T21:03:17.199704+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_chronal_boots": {
    "id": "doughnut_hole_chronal_boots",
    "name": "Chronal Boots of Temporal Slip",
    "description": "The Chronal Boots of Temporal Slip are woven from threads of fractured time, their leather soles sewn with stars and nebulae. Each step you take rips open a temporal fissure, granting you fleeting bursts of speed that leave behind shimmering trails. With a swift flick of your heel, you can rewind time to correct a misstep by three meters, but be wary—this power might unravel the very fabric of reality if overused!",
    "category": "equipment",
    "price": 1000,
    "icon": "⏱️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Dash",
      "Rewind Step"
    ],
    "vendor": "center_seller",
    "shippedBy": "Chrono Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Dash",
        "rules": "As an action, you can activate your Chronal Boots to gain a +2 bonus to movement speed for up to 10 seconds. This effect ends if you take damage or are incapacitated."
      },
      {
        "title": "Rewind Step",
        "rules": "You may use this ability as a reaction when you step on an unstable surface, allowing you to rewind your position back three meters. You can only use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "The boots require minimal dexterity and basic understanding of time manipulation.",
    "vendorReason": "Center Seller specializes in unique, time-related artifacts that challenge the very nature of reality.",
    "shippingDetail": "Your order will be delivered via Chrono Express, ensuring your boots arrive with minimal temporal distortion.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "10 seconds (Temporal Dash); Instantaneous (Rewind Step)",
      "endsWhen": "Take damage; Incapacitated; Rewind Step ends after one use per short rest",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are priced at 1000 XP, reflecting their unique design and the risk of misuse.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:03:15.681113+00:00",
    "aiReviewedAt": "2026-07-23T21:03:15.681113+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_voidstone_amulet": {
    "id": "doughnut_hole_voidstone_amulet",
    "name": "Voidstone Amulet of Null Reflection",
    "description": "The Voidstone Amulet of Null Reflection is crafted from a fragment of the void, forged in the heart of an ancient stargazer's forge. This amulet doesn't merely absorb damage—it actively reflects it back at attackers, doubling their suffering. Crafted from dark, shimmering stone that glows faintly with starlight, it grants its wearer a sense of cosmic balance and resilience. When struck by an attack, the amulet absorbs half of the damage, reflecting 50% back to the assailant.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "reflect_damage",
      "magic_resistance"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Gravity Wormhole",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Reflective Shield",
        "rules": "When hit by an attack, the amulet absorbs half of the damage and reflects 50% back to the attacker. This effect has no save DC but is limited to once per turn."
      },
      {
        "title": "Magic Resistance",
        "rules": "The wearer gains a +25 bonus to saving throws against magic effects, which can be used up to twice per long rest."
      }
    ],
    "levelRequirementReason": "This amulet is crafted for those who have already faced the void and emerged victorious.",
    "vendorReason": "Void Vendor has a deep connection with the astral realms, making them the keeper of such powerful relics.",
    "shippingDetail": "The amulet is delivered via a gravity wormhole, ensuring it arrives swiftly and intact from the farthest reaches of space.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until the wearer is hit by an attack again.",
      "endsWhen": "The amulet's reflective properties cease when the wearer takes damage, and it can be used once per turn.",
      "charges": "Unlimited"
    },
    "priceReason": "This amulet is a balanced purchase for players of level 16, offering both defensive and magical benefits.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:04:00.130447+00:00",
    "aiReviewedAt": "2026-07-23T21:04:00.130447+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_shimmering_orb": {
    "id": "pokemon_item_shimmering_orb",
    "name": "Shimmering Orb of Evolution",
    "description": "The Shimmering Orb of Evolution hums with raw evolutionary power. Its surface pulses with a spectrum of colors, hinting at the countless Pokémon battles it has witnessed. When brought close to a creature, this orb can accelerate evolution by up to 50%, but there's always a risk—sometimes it triggers an unexpected secondary evolution. Users beware, for after using it, they may speak in Pokémon cries for several minutes, adding a humorous twist to their next encounter.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 25,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Boosts Evolution Speed",
      "Risk of Unexpected Evolution"
    ],
    "vendor": "pokemart",
    "shippedBy": "poke-drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Boosted Evolution",
        "rules": "Activates on contact with the target creature. Grants a +50% bonus to evolution speed, but there's a 1 in 6 chance it will trigger an unexpected secondary evolution. This effect lasts until the next rest or until the user is out of range for one minute."
      },
      {
        "title": "Cry Frenzy",
        "rules": "Upon using the orb, the user speaks randomly in Pokémon cries for 1 minute, disrupting any ongoing actions they might be performing. This effect ends when the duration expires or if the user takes a short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to safely handle the orb's powerful energy without causing unintended chaos.",
    "vendorReason": "Wario, being the Pokémon expert he is, stocks this item in his pokemart for trainers who wish to accelerate their Pokémon's growth.",
    "shippingDetail": "The poke-drone delivers the orb within an hour of purchase, ensuring trainers can use it immediately upon arrival.",
    "usage": {
      "activation": "Contact with a target creature.",
      "duration": "Until the next rest or one minute after being out of range.",
      "endsWhen": "Ends when the duration expires or if the user is out of range for one minute.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the orb's powerful but potentially chaotic abilities.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:03:10.569675+00:00",
    "aiReviewedAt": "2026-07-23T21:03:10.569675+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_trainer_scroll": {
    "id": "pokemon_item_trainer_scroll",
    "name": "Ancient Trainer Scroll Fragment",
    "description": "This crumbling scroll fragment, faintly scented of wild berries, bears inscriptions that hint at forgotten battle strategies. Its ancient leather cover bears the mark of countless trainers who sought to unlock its secrets. Wario indeed keeps his spare coins hidden beneath it, though he claims it's merely a convenient shelf. Studying this relic can grant you tactical insights and a minor boost in charisma, but beware—its influence might cause you to spontaneously burst into song at inappropriate moments.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 88,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Unlock Tactical Insights",
      "Boost Charisma"
    ],
    "vendor": "safari_shop",
    "shippedBy": "poke-messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Tactical Insights",
        "rules": "Upon activation as a bonus action, the user gains advantage on one Intelligence (Strategy) check. This effect lasts for an hour and can be used once per long rest."
      },
      {
        "title": "Boost Charisma",
        "rules": "The user gains a +1 bonus to their Charisma score until the end of their next short or long rest, but there is a 25% chance that the user will burst into song at an inappropriate time as a reaction."
      }
    ],
    "levelRequirementReason": "Trainers of all levels might benefit from this fragment's insights and charisma boost.",
    "vendorReason": "The Safari Shop specializes in relics that enhance the trainer experience, making this scroll a fitting addition to their stock.",
    "shippingDetail": "Delivered by trusted Poke-Messengers known for their reliability and punctuality.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "One Hour",
      "endsWhen": "Ends at the start of your next short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll's rarity, historical significance, and unique effects justify its substantial price.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-23T21:03:49.695472+00:00",
    "aiReviewedAt": "2026-07-23T21:03:49.695472+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_legendary_charm": {
    "id": "pokemon_item_legendary_charm",
    "name": "Charm of the Primal Pokemon",
    "description": "The Charm of the Primal Pokemon is a mystical amulet crafted from the molten core of an ancient volcano and imbued with the essence of legendary Pokémon. It grants its wearer a protective barrier that deflects enemy attacks, but also emits a powerful aura that can provoke the curiosity—or worse, the wrath—of formidable beasts and rival trainers. Wario's unyielding desire for shiny objects makes this charm an indispensable accessory in his quest for treasure, despite the risks it entails.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Deflects Attacks",
      "Provokes Attention"
    ],
    "vendor": "league_store",
    "shippedBy": "delivery_truck",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Deflects Attacks",
        "rules": "When a creature attacks the wearer of this charm during combat, there is a 20% chance that the attack is deflected and redirected to another enemy within 5 feet. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Provokes Attention",
        "rules": "The charm emits an aura that increases the chances of wild Pokémon attacks by 10%. This effect lasts for the duration of a short rest, but it can provoke unwanted encounters with dangerous fauna. There is no save DC or special condition required."
      }
    ],
    "levelRequirementReason": "This charm requires a minimum level to ensure that the user can handle its defensive capabilities and potential risks.",
    "vendorReason": "The league store specializes in rare and powerful items, making it the ideal vendor for this mystical charm.",
    "shippingDetail": "Ships via a reliable delivery truck within 3 days of purchase.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (aura) and once per short/long rest (deflects attacks)",
      "endsWhen": "At the end of each short or long rest, or when destroyed in combat",
      "charges": "Unlimited"
    },
    "priceReason": "This charm strikes a balance between its defensive benefits and potential risks, making it a fair price for players seeking a unique and powerful accessory.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-23T21:03:36.915039+00:00",
    "aiReviewedAt": "2026-07-23T21:03:36.915039+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_rainbow_shard": {
    "id": "equestria_item_rainbow_shard",
    "name": "Rainbow Shard of Harmony",
    "description": "The Rainbow Shard of Harmony is a shimmering fragment of light, said to contain a sliver of Princess Twilight's magic. When held, it pulses with vibrant energy, temporarily boosting one's ability to forge unbreakable bonds through heartfelt gestures—though the target must endure an awkward hug. It also has a whimsical side effect: whenever used, there’s a chance for a spontaneous dance break, filling the air with levity and joy.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌈",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Boosts friendship by 10",
      "Causes spontaneous dance breaks"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bond Strengthening",
        "rules": "When activated as a bonus action, this shard boosts the user's Friendship ability score by 10 for 60 seconds. This effect ends if the user is incapacitated or takes an action to end it. The target must also spend at least one round in close proximity to the user during this duration."
      },
      {
        "title": "Dance Break",
        "rules": "There’s a 25% chance that, upon activation, the wielder and their allies within 10 feet will be compelled into an impromptu dance. This lasts until the end of the next long rest or if any participant is incapacitated."
      }
    ],
    "levelRequirementReason": "This item is accessible to all adventurers, as it requires no specific class or background.",
    "vendorReason": "As a prestigious merchant in Equestria, Canterlot Commerce stocks items that enhance social interactions and community bonds.",
    "shippingDetail": "The Rainbow Shard of Harmony is typically delivered within three days via Pony Express.",
    "usage": {
      "activation": "Bonus action to activate, must be held during duration.",
      "duration": "60 seconds",
      "endsWhen": "Target is incapacitated or takes an action to end it; ends with the user's long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This balanced price reflects its limited daily stock and the special ingredients used in crafting.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-23T21:03:45.076832+00:00",
    "aiReviewedAt": "2026-07-23T21:03:45.076832+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starry_saddlebag": {
    "id": "equestria_item_starry_saddlebag",
    "name": "Starry Saddlebag of the Crystal Empire",
    "description": "The Starry Saddlebag of the Crystal Empire is a meticulously crafted saddlebag made from crystallized stardust and enchanted with the magic of Equestria. It expands to hold an additional five inventory slots, ensuring you never run out of space for your treasures. When looted in dangerous areas, it has a 15% chance to yield rare gems, enriching your hoard beyond measure. This saddlebag is also protected by a minor dimensional barrier that repels minor rifts and pranks from mischievous Pegasi.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Increased Inventory Space",
      "Rare Gem Discovery"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "royal_guard_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expanded Storage",
        "rules": "This saddlebag provides an additional five inventory slots, allowing you to carry more items. It has no activation cost and is always active."
      },
      {
        "title": "Gem Discovery Bonus",
        "rules": "When used in a dangerous area or during looting, there is a 15% chance that rare gems will be found within the saddlebag after a successful exploration check. This effect requires an exploration roll with a DC of 12."
      }
    ],
    "levelRequirementReason": "The Starry Saddlebag's enchantment is accessible to all adventurers, providing a useful tool for beginners and seasoned travelers alike.",
    "vendorReason": "The Crystal Empire is known for its craftsmanship and magical artifacts, making it the perfect vendor for this saddlebag.",
    "shippingDetail": "Shipped with utmost care by the Royal Guard Delivery service to ensure safe arrival.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The Starry Saddlebag's enchantment, craftsmanship, and rarity justify its moderate price of 1000 XP.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:03:53.217812+00:00",
    "aiReviewedAt": "2026-07-23T21:03:53.217812+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_discord_charm": {
    "id": "equestria_item_discord_charm",
    "name": "Discord's Whispered Charm",
    "description": "Discord's Whispered Charm is a tiny, unsettling trinket that glows faintly in the dark. It whispers cryptic advice and occasionally causes minor chaos within the party, often leading to unintended and humorous situations – much to Wario's delight. The charm seems to have a life of its own, sometimes slipping from your pocket to land on another party member’s head with a mischievous smirk etched into its surface.",
    "category": "curiosities",
    "price": 1000,
    "icon": "😈",
    "stock": 18,
    "rarity": "legendary",
    "stockType": "night_only",
    "effects": [
      "Whispering Cryptic Advice",
      "Minor Chaos Trigger"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "swift_ranger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whispering Cryptic Advice",
        "rules": "Once per short rest, the charm can be activated as a bonus action to whisper cryptic advice. This advice confuses the recipient, causing them to make an Intelligence saving throw (DC 13) or suffer a -2 penalty to their next ability check and attack roll."
      },
      {
        "title": "Minor Chaos Trigger",
        "rules": "At the start of each long rest, there is a 50% chance that the charm will trigger a minor chaotic event. This could include temporary blindness for one party member (lasting until the end of their next turn), a random teleportation within a 10-foot radius, or a brief disruption in time (causing all creatures to be unable to take actions for 1 round)."
      }
    ],
    "levelRequirementReason": "The charm's unpredictable nature and ability to cause confusion make it best suited for players of at least 5th level.",
    "vendorReason": "Apple Bloom, the manager of Ponyville Market, occasionally receives this item as a gift from her brother Apple Jack, who has connections with Discord's old friends and foes.",
    "shippingDetail": "The charm is delivered by Swift Ranger, known for their timely deliveries. The package may arrive slightly late due to the charm's magical properties, but it ensures safe delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or until a short rest is taken",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's legendary status and its unpredictable nature justify the price, as it offers both useful advice and chaotic fun.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-23T21:04:16.959644+00:00",
    "aiReviewedAt": "2026-07-23T21:04:16.959644+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_pioneer_rations_omega": {
    "id": "connectopia_pioneer_rations_omega",
    "name": "Omega Rations - Pioneer's Delight!",
    "description": "Omega Rations - Pioneer's Delight! are not just food; they're a gourmet feast for the soul, crafted by the most skilled chefs of Connectopia. These fortified rations pack a powerful nutritional punch and an irresistible flavor profile that can sustain even the hungriest miner through grueling expeditions. Each ration contains synthesized nutrients that not only nourish but also quench your thirst for creativity, causing you to impulsively build miniature castles upon consumption.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍖",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Instant Energy Boost",
      "Creative Surge"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Mail Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Energy Boost",
        "rules": "Consume as a bonus action. Restores 40 hit points and regains 15 energy points, providing temporary resistance to poison (30 seconds). This effect can only be used once per short or long rest."
      },
      {
        "title": "Creative Surge",
        "rules": "Upon eating these rations, you gain the benefit of the Meticulous Toolsmith feat for 1 minute. This allows you to add your proficiency bonus to any check made using tools related to construction or crafting. This effect ends when the duration expires."
      }
    ],
    "levelRequirementReason": "These rations are suitable for adventurers of all levels who need a quick and powerful meal.",
    "vendorReason": "The Pioneer Post is known for its robust supply lines, ensuring that even the most remote areas receive these essential provisions.",
    "shippingDetail": "Rations are delivered within a day via the Mail Drone service, ensuring freshness and quality.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until the effect ends early",
      "endsWhen": "Ends when the duration expires or if you take damage in combat",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the item's potent effects, making it a worthwhile investment for any adventurer.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:04:06.034060+00:00",
    "aiReviewedAt": "2026-07-23T21:04:06.034060+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_service_structural_analysis": {
    "id": "connectopia_service_structural_analysis",
    "name": "Structural Integrity Scan",
    "description": "With a wave of his hand, the Block Smith deploys a Structural Integrity Scan that vibrates through your block structures like a fine tuning fork. This premium service not only identifies weak points and suggests reinforcement techniques but also has a knack for revealing hidden crafting opportunities within your haphazardly built constructions. You walk away with an improved understanding of your creation's potential, albeit with a newfound respect for the Smith's unmatched expertise.",
    "category": "services",
    "price": 1000,
    "icon": "🔍",
    "stock": 2,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Identifies structural weaknesses",
      "Grants temporary mining speed bonus"
    ],
    "vendor": "block_smith",
    "shippedBy": "Mobile Analysis Unit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Structural Weakness Identification",
        "rules": "The Block Smith performs an analysis of your block structures, identifying any points of vulnerability. This effect is instantaneous and does not require any action from the user."
      },
      {
        "title": "Mining Speed Bonus",
        "rules": "For 1 hour after the scan, you gain a +15% bonus to mining checks made with pickaxes or similar tools. This effect ends when it expires or if you take a long rest."
      }
    ],
    "levelRequirementReason": "This service is accessible to all levels as it serves as an educational tool for beginners and an enhancement for experienced builders alike.",
    "vendorReason": "The Block Smith specializes in crafting and analyzing block structures, making them the perfect vendor for this service.",
    "shippingDetail": "The Mobile Analysis Unit delivers the scan directly to your location within a day of purchase.",
    "usage": {
      "activation": "Passive effect triggered by the Block Smith's action",
      "duration": "1 hour or until you take a long rest",
      "endsWhen": "Expiry or when you take a long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at 1000 XP to reflect its comprehensive analysis and the Block Smith's expertise.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:04:20.526684+00:00",
    "aiReviewedAt": "2026-07-23T21:04:20.526684+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rusty_ring": {
    "id": "middle_earth_rusty_ring",
    "name": "Bilbo's Slightly Tarnished Ring",
    "description": "Bilbo's Slightly Tarnished Ring looks like a miniature version of the One Ring, tarnished to the point where it gleams in all the wrong places. The ring's surface is pitted and worn, as if it has seen countless battles and misadventures. It whispers secrets of old when worn, but its true power lies in its ability to deflect unwanted attention—dark eyes tend to gloss over its presence. Alas, it provides only minor protection against fear and a chance to detect orcs in the wilds.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💍",
    "stock": 78,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "minor_protection_against_fear",
      "chance_to_detect_orc"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Protection Against Fear",
        "rules": "This ring grants you advantage on saving throws against fear effects. As a bonus action, you can activate the ring to create a temporary barrier that lasts for up to 1 minute. The barrier provides immunity to all fear effects within its radius."
      },
      {
        "title": "Chance to Detect Orcs",
        "rules": "While wearing this ring, you have advantage on Wisdom (Perception) checks made to detect orcs. Additionally, if you are in an environment where orcs might be present, the ring has a 25% chance each day of revealing their presence."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who need immediate protection and situational awareness.",
    "vendorReason": "Elves of the Mirkwood have a keen eye for such relics, knowing their value in keeping travelers safe.",
    "shippingDetail": "Shipped by swift winged horse, arriving within two days of order.",
    "usage": {
      "activation": "Bonus action to activate the ring's barrier feature.",
      "duration": "Up to 1 minute or until dispelled by a creature with an Intimidation check equal to your Wisdom modifier + 5",
      "endsWhen": "The ring's barrier ends when its duration expires, is dispelled, or you remove it from your hand.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects the ring's unique properties and the risk of misplacing such an item in perilous lands.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:04:30.538090+00:00",
    "aiReviewedAt": "2026-07-23T21:04:30.538090+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_map_of_shadows": {
    "id": "middle_earth_map_of_shadows",
    "name": "A Cartographer's Faded Warning",
    "description": "This ancient map, brittle and smelling faintly of pipeweed, is a Cartographer's Faded Warning—a relic from the Third Age of Middle-earth. It charts the shifting paths of shadow and light across the land, revealing hidden trails that could lead you into peril or towards untold riches. The faded ink still whispers secrets of local threats and lore, but beware: its very touch might seal your fate in the hands of darkness or destiny.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 33,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "reveals_hidden_paths",
      "provides_lore_about_local_threats"
    ],
    "vendor": "shire_shop",
    "shippedBy": "poney",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "As an action, you can unfold this map and let it rest on the ground. It reveals hidden paths in a 30-foot radius around its center for 1 minute. If a creature enters or starts its turn there, it must make a DC 12 Wisdom saving throw or become frightened until the end of your next turn."
      },
      {
        "title": "Whispered Lore",
        "rules": "The map provides you with one piece of lore about local threats every hour. You can ask for more lore if you spend an hour studying it, but doing so exhausts one use. This effect is limited to 3 uses per long rest."
      }
    ],
    "levelRequirementReason": "Revealing the map's hidden paths and accessing its lore requires a basic understanding of the land.",
    "vendorReason": "The Shire Shop stocks this item because it holds historical value for both locals and travelers alike, even if in faded form.",
    "shippingDetail": "Ships via a trusted poney, ensuring quick delivery to your doorstep.",
    "usage": {
      "activation": "As an action or bonus action (to unfold and reveal paths; for lore, it is passive)",
      "duration": "Revealing hidden paths lasts 1 minute. Lore can be accessed once per hour.",
      "endsWhen": "The map's effect ends when the duration expires, you are incapacitated, or you fold the map away.",
      "charges": "Unlimited uses for lore; revealing paths is a one-time use."
    },
    "priceReason": "This item's price reflects its historical and strategic value as both a relic and a tool for adventurers.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-23T21:05:10.961342+00:00",
    "aiReviewedAt": "2026-07-23T21:05:10.961342+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_whispering_charm": {
    "id": "almost_edge_item_whispering_charm",
    "name": "The Edge's Silent Plea",
    "description": "The Edge's Silent Plea is a polished obsidian charm that hums with an unsettling warmth, pulsing in sync with the heartbeat of forgotten realities. Its surface etched with runes that whisper of infinite emptiness and lost knowledge, this talisman grants its bearer a keen awareness to subtle deceptions while subtly healing them over time. Holding it for too long can drive one mad with the echoes of vanished truths.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤫",
    "stock": 30,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Whispering Awareness",
      "Healing Resonance"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "black_raven",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Whispering Awareness",
        "rules": "Gain advantage on saving throws against illusion spells and effects. This effect lasts until the start of your next turn after using this item."
      },
      {
        "title": "Healing Resonance",
        "rules": "Regain 1 hit point at the start of each of your turns. This effect does not stack with other healing sources."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 8 to wield this item, as its power comes from deep knowledge and experience.",
    "vendorReason": "The Liminal Trader specializes in rare artifacts that bridge the worlds, making The Edge's Silent Plea an appropriate addition to their inventory.",
    "shippingDetail": "Shipped via Black Raven Courier, known for its swift and reliable deliveries across the realms.",
    "usage": {
      "activation": "Passive effect activated upon holding the charm.",
      "duration": "Instantaneous, lasting until your next turn after using it.",
      "endsWhen": "The effect ends when you stop holding the charm or if you use an action to dismiss it temporarily.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its unique abilities and the rare obsidian material from which it is crafted.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:04:46.464334+00:00",
    "aiReviewedAt": "2026-07-23T21:04:46.464334+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_resonator": {
    "id": "almost_edge_item_void_resonator",
    "name": "Wario's Deluxe Distortion Device",
    "description": "Wario's Deluxe Distortion Device is a sleek chrome device that hums with unstable energy and wafts a pungent scent of burnt sugar. This relic, crafted by the eccentric inventor Wario himself, allows you to briefly warp reality around you, creating a small area of disruption that can disorient foes and grant you a temporary boost in speed. Use it wisely; a single misstep could lead to unintended duplicates or worse.",
    "category": "premium",
    "price": 1000,
    "icon": "🌀",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "distortion_field",
      "movement_boost"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "wormhole_delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Distortion Field",
        "rules": "As an action, activate the device to create a small area of disruption around you. This effects a 10-foot radius centered on you for 1 minute. All creatures within this area must make a DC 13 Dexterity saving throw or be disoriented until the start of their next turn."
      },
      {
        "title": "Movement Boost",
        "rules": "While the distortion field is active, your movement speed increases by 10%. This effect lasts for the duration of the distortion field. If you leave the area before the duration ends, this effect ceases immediately."
      }
    ],
    "levelRequirementReason": "This device requires a minimum level to ensure users can handle its unstable energy and potential risks.",
    "vendorReason": "Edge Wanderer specializes in rare artifacts and devices, making Wario's Deluxe Distortion Device an excellent fit for their inventory.",
    "shippingDetail": "Ships via Wormhole Delivery with a 1-day processing delay at the vendor's location.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The distortion field dissipates or you leave the area before its duration ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The device's unique combination of effects and potential for unintended duplicates justifies a balanced price point.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-23T21:04:36.251412+00:00",
    "aiReviewedAt": "2026-07-23T21:04:36.251412+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_glowing_stone": {
    "id": "middle_earth_glowing_stone",
    "name": "Heartstone of Eärendil",
    "description": "The Heartstone of Eärendil pulses with an ethereal glow, its warmth a reminder of the distant stars it fragments once belonged to. Crafted from the very ship of the Elf-friend, this glowing stone subtly enhances your luck in perilous situations and grants you the ability to uncover hidden pathways that others might miss. It is rumored to be a fragment of Eärendil's ship, a symbol of hope and protection in the darkest of times.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 7,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Luck",
      "Reveal Hidden Pathways"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Luck",
        "rules": "When you roll initiative or an ability check, you can use a bonus action to activate the Heartstone. For the next minute, your luck is bolstered by +1d4 advantage on one check of your choice."
      },
      {
        "title": "Reveal Hidden Pathways",
        "rules": "As a bonus action, you can focus on the stone for 1 round and gain the ability to detect hidden or secret passages within 30 feet. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Heartstone's power is accessible early in a campaign, aiding new adventurers as they navigate their first challenges.",
    "vendorReason": "The elves of Eärendil hold this relic close to their hearts and often sell it to those who seek to honor the memory of the Elf-friend.",
    "shippingDetail": "Delivered swiftly by a winged pony, ensuring you receive your stone in time for your next adventure.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "1 minute (Enhanced Luck) / Until the start of your next turn (Reveal Hidden Pathways)",
      "endsWhen": "Effect duration ends naturally, or you use it again",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its early-game utility and limited power, the Heartstone of Eärendil is priced to allow new adventurers to access a powerful but not overpowered relic.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-23T21:05:01.190900+00:00",
    "aiReviewedAt": "2026-07-23T21:05:01.190900+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_dwarven_battleaxe": {
    "id": "middle_earth_dwarven_battleaxe",
    "name": "Grimstone's Bite",
    "description": "Grimstone's Bite is a dwarven battleaxe forged in the heart of Mount Grondor, where it endures trials of fire and steel. This axe is not only a weapon of war but also a symbol of Dwarven resilience. Its weighty haft and massive head are crafted from ancient black iron, lending it an imposing presence that can cleave through stone and flesh alike. With each swing, the axe emits a resounding boom, leaving its target stunned for moments afterward.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 15,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Stunning Strike",
      "Armor Penetration"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "stone_cart",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Stunning Strike",
        "rules": "When you hit with this battleaxe as part of an attack action, there is a 30% chance that the target is stunned for 1 round. This effect has no save DC and does not consume any charges."
      },
      {
        "title": "Armor Penetration",
        "rules": "This axe ignores up to two layers of armor or other forms of protection (such as shield bonuses). It deals an additional 2d6 damage against targets with such protections. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "Crafted for seasoned warriors, Grimstone's Bite requires a minimum level of 9 to wield effectively.",
    "vendorReason": "The dwarves of Mount Grondor are renowned for their craftsmanship and the forging of such powerful weapons.",
    "shippingDetail": "Delivered via stone carts, which ensure the axe arrives in pristine condition.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous",
      "endsWhen": "The battleaxe is destroyed or its effect is interrupted by a successful save against the stunning strike chance.",
      "charges": "Unlimited"
    },
    "priceReason": "Grimstone's Bite is priced at 1000 XP, reflecting its epic rarity and formidable combat capabilities.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-23T21:04:50.140731+00:00",
    "aiReviewedAt": "2026-07-23T21:04:50.140731+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_shire_favor": {
    "id": "middle_earth_shire_favor",
    "name": "Bilbo's Good Will",
    "description": "A small, intricately carved wooden box filled with honey cakes and a handwritten note from Bilbo Baggins himself. The scent of wildflowers lingers in its aroma, hinting at the Shire's natural beauty. Accepting this favor will grant you the goodwill of the Shirefolk—anyone who meets your gaze may offer assistance or point towards hidden trails. In return, there's a chance that local shopkeepers might gift you with free goods from their stores.",
    "category": "faction",
    "price": 1000,
    "icon": "🍪",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Goodwill of the Shirefolk",
      "Chance for Free Goods"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Goodwill of the Shirefolk",
        "rules": "When interacting with Shire inhabitants, you gain a +2 bonus to Charisma (Persuasion) checks. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Chance for Free Goods",
        "rules": "Once per day, upon entering a Shire shop, there is a 20% chance that you receive free goods from the shopkeeper. This chance resets after completing a short or long rest."
      }
    ],
    "levelRequirementReason": "The item's goodwill and free gift opportunities are accessible to all travelers who wish to support the Shire.",
    "vendorReason": "As local notables, the shire shopkeepers frequently receive such favors from Bilbo Baggins and other visitors.",
    "shippingDetail": "Delivered via Pony Express; delivery is swift but may vary depending on weather conditions in the Shire.",
    "usage": {
      "activation": "Passive effect upon acceptance of the favor.",
      "duration": "Lasts until the end of your next long rest.",
      "endsWhen": "Completing a long rest.",
      "charges": "Unlimited, resets after completing a short or long rest."
    },
    "priceReason": "The item's rarity and the significant goodwill it offers to travelers justify its higher price in XP.",
    "priceOriginal": 300,
    "priceReviewedAt": "2026-07-23T21:05:01.416048+00:00",
    "aiReviewedAt": "2026-07-23T21:05:01.416048+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_warrior_claw": {
    "id": "animatopia_warrior_claw",
    "name": "Primal Howl Claw",
    "description": "Forged from a Stone Bear's claw in the heart of the ancient forest, this primal howl claw resonates with raw ferocity. Its grip is as strong as it is deadly, and its roar can shatter stone and send lesser foes into paralyzing fear. The wearer's savage cry amplifies to a devastating sonic blast that echoes through the trees, ensuring no pesky squirrel or grumpy badger will disturb their peace again.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐾",
    "stock": 5,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Savage Roar",
      "Fear Aura"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "winged beetle courier",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Savage Roar",
        "rules": "As a bonus action, the wielder can unleash a primal roar that deals 10d6 sonic damage to all creatures within 30 feet. Creatures must succeed on a DC 17 Constitution saving throw or be stunned until the start of their next turn."
      },
      {
        "title": "Fear Aura",
        "rules": "When worn, this claw grants a +2 bonus to attack rolls and deals an additional 5 damage on hit against creatures with fewer than half the wielder's hit points. Creatures within 10 feet have disadvantage on saving throws."
      }
    ],
    "levelRequirementReason": "This claw requires significant strength and control, making it suitable for only seasoned warriors.",
    "vendorReason": "The tribal trader, a nomad of the wildlands, carries this relic from his travels through ancient forests.",
    "shippingDetail": "Shipped by a swift and agile winged beetle, ensuring timely delivery to eager adventurers.",
    "usage": {
      "activation": "Bonus action for Savage Roar; passive effect when worn.",
      "duration": "Instantaneous (Savage Roar), permanent aura while worn (Fear Aura)",
      "endsWhen": "Used or removed by the wielder",
      "charges": "Unlimited, recharges on a long rest"
    },
    "priceReason": "The price reflects the claw's rarity and its significant combat utility.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-23T21:05:40.093502+00:00",
    "aiReviewedAt": "2026-07-23T21:05:40.093502+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_curiosity_spirit_stone": {
    "id": "animatopia_curiosity_spirit_stone",
    "name": "Echoing Spirit Stone",
    "description": "A smooth, grey stone pulsing with faint animal spirits, the Echoing Spirit Stone is a conduit for ancient Animatopian wisdom. When held, it channels whispers from the forest's guardians—mostly complaints about modern tourists and lost hiking trails. Its touch sharpens perception in woodlands, providing +15 to Perception checks within a 60-foot radius, while also granting a chance to commune with local spirits, offering guidance or warnings for a limited number of uses.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Spirit Commune",
      "Enhanced Perception"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Spirit Commune",
        "rules": "As an action, you can attempt to communicate with the forest's ancient spirits. If successful (DC 15 Wisdom saving throw), you gain a +2 bonus to one Intelligence (Insight) check or Charisma (Deception) check of your choice."
      },
      {
        "title": "Enhanced Perception",
        "rules": "While holding the Echoing Spirit Stone, you have advantage on Perception checks within 60 feet. This effect lasts for 1 hour per use and is exhausted after one day."
      }
    ],
    "levelRequirementReason": "This stone requires no specific level as it can be used by any character to gain insight into the forest's mysteries.",
    "vendorReason": "The forest market is a hub for those who need guidance or seek knowledge of Animatopia, making it the perfect vendor for such an artifact.",
    "shippingDetail": "Ships by giant snail, arriving within one week of purchase. The stone must be checked upon arrival to ensure its spirit remains intact.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per use",
      "endsWhen": "After one day or when used again",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Echoing Spirit Stone's price reflects its rarity and the unique value it brings to understanding Animatopia’s ancient wisdom.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-23T21:05:21.584391+00:00",
    "aiReviewedAt": "2026-07-23T21:05:21.584391+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_lucky_feather": {
    "id": "animatopia_item_lucky_feather",
    "name": "Lucky Jungle Plum Feather",
    "description": "The Lucky Jungle Plum Feather gleams with a vibrant iridescence, its plumes shimmering in hues of emerald and gold. Plucked from the legendary Plumwing Parrot deep within the Enchanted Jungles, this feather is said to bring good fortune—though only slightly more than a mere chance at finding bruised jungle fruit or narrowly avoiding colossal lumbering beasts. Its power lies not in grand deeds but subtle blessings, enhancing one's luck in mundane tasks with a touch of whimsy and a hint of danger.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍀",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Luck",
      "Mundane Treasure Hunt"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_mosquito",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Luck",
        "rules": "When used, the Lucky Jungle Plum Feather grants a +1 bonus to all saving throws and checks for one combat. This effect lasts until the end of the next long rest."
      },
      {
        "title": "Mundane Treasure Hunt",
        "rules": "For 24 hours after use, there is a 30% chance that any map or treasure chest found yields an additional item, but only items worth up to 50 XP. This effect does not stack with other similar effects."
      }
    ],
    "levelRequirementReason": "This feather's luck is suited for adventurers just starting their journey.",
    "vendorReason": "The Beast Bazaar trades in exotic goods from the wild, and this feather is a testament to the magic of the jungle.",
    "shippingDetail": "Ships via giant mosquito courier; may arrive with minor damage but still functional.",
    "usage": {
      "activation": "Use an action to activate.",
      "duration": "Until the end of the next long rest.",
      "endsWhen": "The effect ends at the start of your next short or long rest.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The feather's rarity and magical properties justify this price in experience points.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:05:35.728394+00:00",
    "aiReviewedAt": "2026-07-23T21:05:35.728394+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_whispering_stone": {
    "id": "faerun_item_whispering_stone",
    "name": "Whispering Stone of Prophecy",
    "description": "The Whispering Stone of Prophecy is a cold, smooth grey stone that seems to hum with an ancient, almost otherworldly energy. When held close, it emits faint whispers in your mind, often about important matters you've been neglecting or overlooked. However, its warnings are not always accurate, and it may occasionally lead you into dangerous situations, such as a pit of spiders or a trap designed for goblins. This stone is said to have been crafted by the ancient dwarves of Mount Hototogisu, who used it in their prophecies long ago.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "prophetic_visions",
      "unreliable_advice"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Prophetic Visions",
        "rules": "As an action, you can concentrate on the stone for 1 minute. During this time, it grants you a +2 bonus to Wisdom (Insight) checks made to discern the truth from falsehoods or foresee upcoming events. However, the visions are not always clear, and there is a 5% chance per day that they lead you into an immediate danger of your choice."
      },
      {
        "title": "Unreliable Advice",
        "rules": "The stone provides advice that is often off by one degree. For example, if it advises you to go north, you might end up heading east instead. This effect is not a saving throw but affects all decisions made while the stone is in your possession."
      }
    ],
    "levelRequirementReason": "Even the simplest adventurer can appreciate the value of knowing what lies ahead.",
    "vendorReason": "Baldur's Bazaar stocks a variety of mystical and ancient relics, making it the perfect place for such an item.",
    "shippingDetail": "The stone is carefully wrapped in enchanted silk and delivered by the swift winged horses, ensuring its safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "You stop concentrating on it or suffer a danger from its visions.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the stone's rarity and the risk involved in using it, balancing its potential benefits with the dangers.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-23T21:05:28.421453+00:00",
    "aiReviewedAt": "2026-07-23T21:05:28.421453+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_enhanced_guts": {
    "id": "faerun_item_potion_of_enhanced_guts",
    "name": "Potion of Enhanced Guts",
    "description": "This vial of scarlet liquid glows faintly as if alive, radiating warmth and courage. Drink it to bolster your heart against fear and gain temporary resilience, though some claim that after its effect wears off, you may find yourself craving the next challenge or a hearty meal. It's said that adventurers who partake in this potion often return with tales of overcoming giants and feasting on more exotic fare than they'd ever imagined before. Wario would indeed love this concoction!",
    "category": "consumables",
    "price": 1000,
    "icon": "🧪",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temporary_resilience",
      "advantage_on_saving_throws_against_fear"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "swift_raven_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Resilience",
        "rules": "When you drink the potion, you gain temporary hit points equal to twice your level. These last for a number of minutes equal to your Constitution modifier (minimum of 1 minute). This effect can only be used once per long rest."
      },
      {
        "title": "Advantage on Saving Throws Against Fear",
        "rules": "For the duration of one short or long rest, you gain advantage on saving throws against being frightened. You can't use this feature if you already have advantage from another source."
      }
    ],
    "levelRequirementReason": "Beginners often start their adventures with a bit of courage; this potion is designed for those just entering the world.",
    "vendorReason": "Waterdeep's Market is known for its diverse and reliable stock, including items that can help adventurers face their first fears.",
    "shippingDetail": "The swift ravens deliver this potion with unmatched speed, ensuring it arrives fresh and potent.",
    "usage": {
      "activation": "Drink the potion as an action.",
      "duration": "1 minute per level of the drinker.",
      "endsWhen": "At the end of a short or long rest, whichever comes first.",
      "charges": "One use per day"
    },
    "priceReason": "The potion's rarity and its ability to provide significant benefits make it a costly yet essential item for adventurers.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:05:53.181619+00:00",
    "aiReviewedAt": "2026-07-23T21:05:53.181619+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_sticky_step": {
    "id": "grand_country_sticky_step",
    "name": "Sticky Step Boots",
    "description": "The Sticky Step Boots are crafted from a blend of ancient leather and enchanted spider silk, granting their wearer an adhesive step that can cling to almost any surface. With each step, you can scale even the most treacherous walls with ease, but beware – if caught in a sudden gust of wind, you risk falling back down with a resounding thud. These boots are not just for climbing; they're for those who dare to reach new heights.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 67,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "adhesive_climb",
      "resilient_fall"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "winged beetle courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Adhesive Climb",
        "rules": "As a bonus action, you can cause your boots to adhere to the ground or a wall for up to 1 minute. You have advantage on Strength (Athletics) checks made to climb. This effect ends if you take damage or move more than 5 feet away from where you applied it."
      },
      {
        "title": "Resilient Fall",
        "rules": "If you fall while wearing these boots, the adhesive holds for an additional 10 feet of freefall before you hit the ground. You must succeed on a DC 15 Dexterity saving throw or take half damage from the fall instead of full."
      }
    ],
    "levelRequirementReason": "These boots require a level 6 character to wield effectively, as they channel the wearer's strength into maintaining their adhesive grip.",
    "vendorReason": "The Vertical Vendor specializes in climbing gear and equipment for those who dare to reach new heights, making these boots a natural fit.",
    "shippingDetail": "Ships via the Winged Beetle Courier, known for its precision and speed. Delivery can take up to one week depending on your location.",
    "usage": {
      "activation": "Bonus action to activate adhesive grip; maintains for up to 1 minute.",
      "duration": "Up to 1 minute per use",
      "endsWhen": "You take damage or move more than 5 feet away from the applied area.",
      "charges": "Unlimited, but each use expends one charge."
    },
    "priceReason": "Crafted with ancient leather and enchanted spider silk, these boots are a rare find, making them worth their weight in gold.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:06:01.564358+00:00",
    "aiReviewedAt": "2026-07-23T21:06:01.564358+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_layered_shard": {
    "id": "grand_country_layered_shard",
    "name": "Layered Shard of Echoes",
    "description": "The Layered Shard of Echoes gleams with a spectrum of iridescent hues, each facet reflecting whispers from past times. By holding it and concentrating for a moment, you can briefly perceive echoes of historical events within a small radius, unveiling hidden passages or secret doors that blend into the environment. However, these echoes are not always clear; sometimes they are mere fragments of memory, leaving your mind in a haze of confusion.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveals_hidden_objects",
      "detects_past_events"
    ],
    "vendor": "layer_market",
    "shippedBy": "winding_worm",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Reveal Hidden Objects",
        "rules": "As an action, you can hold the shard and concentrate for 1 minute. Within a 20-foot radius centered on you, hidden objects or secret doors become visible as if under the effects of the Detect Secret Doors spell."
      },
      {
        "title": "Detect Past Events",
        "rules": "While holding the shard, once per short rest, you can attempt to perceive echoes from past events within a 20-foot radius. This requires an Intelligence (History) check. On a success, you gain insight into recent occurrences, but on failure, the echoes are too fragmented for meaningful interpretation."
      }
    ],
    "levelRequirementReason": "Players need to be of at least 10th level to handle the shard's ancient power without being overwhelmed.",
    "vendorReason": "The Layer Market specializes in rare and exotic curiosities from distant lands, including artifacts with unique historical significance like this shard.",
    "shippingDetail": "Shipped by the Winding Worm, a creature known for its intricate and reliable delivery methods through hidden routes.",
    "usage": {
      "activation": "action or reaction to hold and concentrate (Reveal Hidden Objects) or use once per short rest (Detect Past Events)",
      "duration": "1 minute for Reveal Hidden Objects; instantaneous effect for Detect Past Events",
      "endsWhen": "after the duration ends, upon being destroyed, or when you stop holding it during Detect Past Events",
      "charges": "unlimited uses"
    },
    "priceReason": "The shard's rarity and unique historical value justify its high price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:06:06.812650+00:00",
    "aiReviewedAt": "2026-07-23T21:06:06.812650+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_sticky_bun": {
    "id": "leclaire_isle_sticky_bun",
    "name": "Giant Doughnut of Delight",
    "description": "The Giant Doughnut of Delight is a gargantuan confectionary creation, its golden crust crackling with magical energy. Made from enchanted flour, it bursts with an overwhelming sweetness that can be both a boon and a bane in the right moment. Consume this doughnut to gain +2d6 temporary hit points for 1 hour, or use it as a swift action to grant yourself advantage on one Athletics check of your choice.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍩",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "temp_hit_points",
      "advantage_on_athletics"
    ],
    "vendor": "dough_depot",
    "shippedBy": "a winged dune buggy",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Hit Points",
        "rules": "Consume the doughnut as an action to gain +2d6 temporary hit points for a duration of 1 hour. This effect ends if you consume another Giant Doughnut of Delight or when your temporary hit points are reduced to 0."
      },
      {
        "title": "Advantage on Athletics",
        "rules": "Use the doughnut as a swift action to grant yourself advantage on one Athletics check of your choice until the start of your next turn. This effect ends if you consume another Giant Doughnut of Delight or when your temporary hit points are reduced to 0."
      }
    ],
    "levelRequirementReason": "The doughnut's magical properties are not overly powerful, making it accessible for lower-level characters.",
    "vendorReason": "Dough Depot is known for its vast array of baked goods, including enchanted confections like the Giant Doughnut of Delight.",
    "shippingDetail": "The doughnut is delivered quickly by a winged dune buggy, ensuring it arrives in perfect condition and remains potent until consumption.",
    "usage": {
      "activation": "Action or Swift Action",
      "duration": "1 hour for hit points; until the start of your next turn for advantage on Athletics check",
      "endsWhen": "Consumption of another Giant Doughnut of Delight or when temporary hit points are reduced to 0",
      "charges": "Unlimited"
    },
    "priceReason": "The doughnut's rarity and magical properties, combined with its unique flavor and effects, justify a high but balanced price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-23T21:05:57.096286+00:00",
    "aiReviewedAt": "2026-07-23T21:05:57.096286+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_pastry_charm": {
    "id": "leclaire_isle_pastry_charm",
    "name": "Doughfolk Favor Charm",
    "description": "The Doughfolk Favor Charm is a delicate, golden-brown charm crafted from croissant dough, embossed with intricate patterns of sugared flowers and flour-dusted stars. When worn, it bestows the blessings of the Dough Folk upon you, enhancing your reputation among bakers and sweetmeat artisans. Should you find yourself in need of extra ingredients or a helping hand in crafting pastries, this charm ensures that such assistance is readily available.",
    "category": "faction",
    "price": 1000,
    "icon": "🍪",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "favor_with_doughfolk",
      "extra_ingredients"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "flying pastry cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Favor with Dough Folk",
        "rules": "While wearing the Doughfolk Favor Charm, you gain a +1 bonus to Charisma (Performance) checks when interacting with bakers and pastry chefs. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Chance to Find Extra Ingredients",
        "rules": "Once per day while wearing the charm, roll a d20. On a result of 15 or higher, you discover an additional ingredient in any recipe you are preparing, enhancing its quality by one step (e.g., from flour to almond flour)."
      }
    ],
    "levelRequirementReason": "The charm's effects are subtle but beneficial for all adventurers who appreciate the art of sweet creation.",
    "vendorReason": "Pastry Palace is renowned for its intricate pastries and their connection to the Dough Folk, making it a fitting vendor for this charming token.",
    "shippingDetail": "The charm is delivered by a swift flying pastry cart, ensuring it arrives fresh and intact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "At the end of your next short or long rest.",
      "charges": "Unlimited, but can only be used once per day for the 'Chance to Find Extra Ingredients' effect."
    },
    "priceReason": "The charm is priced at 1000 XP, reflecting its rare craftsmanship and the benefits it brings.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-23T21:06:16.505847+00:00",
    "aiReviewedAt": "2026-07-23T21:06:16.505847+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_frosting_potion": {
    "id": "leclaire_isle_frosting_potion",
    "name": "Sweet Surprise Potion",
    "description": "The Sweet Surprise Potion exudes an otherworldly glow, its surface shimmering like a thousand pastries dancing in a bakery's warm light. When consumed, you're momentarily drenched in a frothy frosting that coats your skin and leaves your vision slightly blurred for the duration of the effect. This sticky armor grants you resistance to cold damage but also slows nearby enemies, making it perfect for those frosty nights when you least expect an icy encounter.",
    "category": "consumables",
    "price": 2500,
    "icon": "✨",
    "stock": 12,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "sticky_frosting_armor",
      "slow_enemies"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Giant Gingerbread Man Courier Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sticky Frosting Armor",
        "rules": "Upon consuming the potion, you gain resistance to cold damage for a duration of 1 minute. This effect ends if you take any non-magical bludgeoning damage or if you are subjected to an effect that imposes blindness on you."
      },
      {
        "title": "Slow Enemies",
        "rules": "For the first round after consuming the potion, all enemies within a 30-foot radius have their movement speed reduced by 10 feet. This effect ends when the duration of Sticky Frosting Armor expires or if an enemy makes a successful Dexterity saving throw."
      }
    ],
    "levelRequirementReason": "The potion's effects are potent enough to require a minimum level, ensuring it is not overpowered for lower-level characters.",
    "vendorReason": "Sweet Supplies is known for its unique and powerful elixirs that cater to adventurers seeking an edge in their quests.",
    "shippingDetail": "The Giant Gingerbread Man personally delivers the potion, ensuring it arrives at its destination in pristine condition.",
    "usage": {
      "activation": "Instantaneous action upon consumption",
      "duration": "1 minute",
      "endsWhen": "Non-magical bludgeoning damage or blindness effect is imposed on you",
      "charges": "Unlimited uses"
    },
    "priceReason": "The potion's balanced price reflects its unique effects and the rarity of such a powerful elixir in the market.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-23T21:06:28.010018+00:00",
    "aiReviewedAt": "2026-07-23T21:06:28.010018+00:00",
    "aiReviewVersion": 1
  }
};
