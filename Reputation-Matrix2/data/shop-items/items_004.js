// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_004 = {
  "ashen_mask": {
    "id": "ashen_mask",
    "name": "Ashen Mask",
    "description": "The Ashen Mask is a chilling porcelain visage forged from the remains of an ancient god. It molds seamlessly to your face, cloaking you in another’s identity as it whispers secrets of the forgotten. The mask's surface shimmers with a cold, spectral glow that hints at its necrotic origins.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Assume Another's Identity",
      "Steal Empathy"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Obsidian Sarcophagus",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Assume Another's Identity",
        "rules": "When worn as an action, the mask allows you to assume another’s identity perfectly for up to 1 hour. You gain advantage on Charisma (Deception) checks and are considered to have that person's appearance while wearing it."
      },
      {
        "title": "Steal Empathy",
        "rules": "Each time you use the mask, your Wisdom score is reduced by -2 until after your next long rest. This effect is cumulative, meaning each additional use increases the penalty further."
      }
    ],
    "levelRequirementReason": "Wearing the Ashen Mask requires a basic understanding of identity and deception.",
    "vendorReason": "The Crypt Courier specializes in forbidden artifacts, including those with dark origins like the Ashen Mask.",
    "shippingDetail": "Shipped within a sealed obsidian sarcophagus to protect it from prying eyes and ensure its safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 hour",
      "endsWhen": "The wearer removes the mask or is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a godly rarity, this item requires significant crafting and dark lore knowledge.",
    "priceOriginal": 80000,
    "priceReviewedAt": "2026-07-22T00:19:41.037125+00:00",
    "aiReviewedAt": "2026-07-22T00:19:41.037125+00:00",
    "aiReviewVersion": 1
  },
  "assassination_contract": {
    "id": "assassination_contract",
    "name": "Assassination Contract",
    "description": "A blackened parchment with a blood-red seal, this Assassination Contract binds the buyer to a shadowy network of assassins. Once signed and delivered, it targets a specific individual within a six-month window, guaranteeing a 90% chance of success (DM's discretion). The contract ensures deniability for the buyer by concealing their name from the hired killer; failure results in the voiding of all terms, with no trace left behind.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🗡️",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Shadowy Guarantee",
      "Perfect Deniability"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Untraceable Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadowy Guarantee",
        "rules": "Activate as a bonus action. The contract targets one specific individual within six months. It has a success rate of at least 90%, determined by the DM. If the target is eliminated, all evidence and involvement are erased."
      },
      {
        "title": "Perfect Deniability",
        "rules": "The buyer's name is hidden from the assassin to ensure full deniability in case of failure or suspicion. If the contract fails, it is voided immediately, leaving no trace of the buyer’s involvement."
      }
    ],
    "levelRequirementReason": "Low-level characters with limited resources can afford this item without breaking game balance.",
    "vendorReason": "The Onyx Hand deals in illegal and forbidden items, making this contract a suitable offering.",
    "shippingDetail": "Delivered by the Onyx Hand’s shadowy couriers, ensuring no one can trace the origin or destination of the package.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous effect; lasts until the target is eliminated or fails",
      "endsWhen": "Contract is successfully completed or voided upon failure",
      "charges": "Unlimited, as it can be reissued under a new contract"
    },
    "priceReason": "The price reflects the illegal nature of the item and its guaranteed success rate.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T00:19:46.673715+00:00",
    "aiReviewedAt": "2026-07-22T00:19:46.673715+00:00",
    "aiReviewVersion": 1
  },
  "assassins_creed_blade": {
    "id": "assassins_creed_blade",
    "name": "Hidden Blade",
    "description": "The Hidden Blade is a slender, intricately crafted dagger forged from obsidian and steel. Its blade can retract into its handle, leaving no trace of its presence in your hand. The weapon's design allows for a surprise attack with advantage on the roll, and it leaves behind only a faint shimmer that can be mistaken for a trick of the light.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗡️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Surprise Attack",
      "Retractable"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Nightwind Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Surprise Attack",
        "rules": "When you use this weapon in a surprise attack, you have advantage on your attack roll. The effect lasts until the start of your next turn."
      },
      {
        "title": "Retractable",
        "rules": "The blade can be retracted into its handle as a bonus action. This action does not provoke attacks of opportunity and is limited to three uses per short or long rest."
      }
    ],
    "levelRequirementReason": "This weapon is designed for novice assassins who are still mastering the art of stealth.",
    "vendorReason": "The Rogue Port Black Market caters to those seeking unique and powerful tools for their trade, including novices as well as seasoned professionals.",
    "shippingDetail": "Ships via Nightwind Couriers; delivery is swift but requires a signature upon arrival.",
    "usage": {
      "activation": "Bonus action to retract the blade",
      "duration": "Instantaneous (retraction)",
      "endsWhen": "Start of your next turn or when retracted for the third time per rest",
      "charges": "Unlimited, but limited to three uses per short or long rest"
    },
    "priceReason": "This balanced price reflects its rarity and utility, providing a cost-effective advantage for players of all levels.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T00:19:51.914508+00:00",
    "aiReviewedAt": "2026-07-22T00:19:51.914508+00:00",
    "aiReviewVersion": 1
  },
  "astral_projection_beacon": {
    "id": "astral_projection_beacon",
    "name": "Astral Projection Beacon",
    "description": "The Astral Projection Beacon is a gleaming silver rod etched with githyanki runes. This artifact anchors your soul to the Material Plane, preventing it from drifting into the Ethereal Plane when you cast Astral Projection. Should you perish in the Astral Plane, this beacon ensures a swift return to your physical body, sparing your life on the Material Plane.",
    "price": 1000,
    "icon": "🕯️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Astral Anchoring",
      "Soul Return"
    ],
    "vendor": "astral_traders",
    "shippedBy": "Thought Sending",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Astral Anchoring",
        "rules": "When you cast Astral Projection using this item, your soul is securely anchored to the Material Plane. You can move freely in the Astral Plane but cannot be drawn into the Ethereal Plane unless you choose to do so."
      },
      {
        "title": "Soul Return",
        "rules": "If you are killed while in the Astral Plane and your body remains intact on the Material Plane, this beacon ensures that your soul returns immediately to your body. This effect has no save DC and does not consume charges or uses."
      }
    ],
    "levelRequirementReason": "This artifact is accessible early in a character’s journey as it focuses on survival rather than combat prowess.",
    "vendorReason": "Astral Traders specialize in items that aid travelers between planes, making this beacon an essential commodity for their clientele.",
    "shippingDetail": "Delivered instantly via Thought Sending, ensuring the artifact arrives as soon as it is purchased.",
    "usage": {
      "activation": "Activates with the casting of Astral Projection",
      "duration": "Instantaneous; lasts until you choose to return or until your body is destroyed",
      "endsWhen": "If your body is destroyed on the Material Plane, both effects are nullified",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its utility in survival and the intricate craftsmanship of Githyanki Warlocks.",
    "priceOriginal": 385000,
    "priceReviewedAt": "2026-07-22T00:19:57.539991+00:00",
    "aiReviewedAt": "2026-07-22T00:19:57.539991+00:00",
    "aiReviewVersion": 1
  },
  "astral_projection_orb": {
    "id": "astral_projection_orb",
    "name": "Astral Projection Orb (Psionic)",
    "description": "The Astral Projection Orb is a glowing orb of shimmering light, crafted by the enigmatic Astral Nomads. It allows you to safely project your astral form into other planes without risking your physical body. The orb's protective sheath ensures that your spirit remains shielded from harm during the journey.",
    "price": 1000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Astral Projection",
      "Body Protection"
    ],
    "vendor": "plane_walkers_guild",
    "shippedBy": "Silver Cord",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Astral Projection",
        "rules": "As an action, you can activate the orb to project your astral form into another plane. The projection lasts for a number of hours equal to twice your spellcasting ability modifier (rounded down). You return immediately if you are incapacitated or killed during the journey."
      },
      {
        "title": "Body Protection",
        "rules": "While projected, your physical body is protected by a force field that grants it immunity to all damage until you return from the other plane. The orb can be used once before it needs to be recharged."
      }
    ],
    "levelRequirementReason": "This item requires minimal magic usage and is intended for beginning explorers.",
    "vendorReason": "The Plane Walkers Guild specializes in exotic travel items, including those that facilitate astral travel.",
    "shippingDetail": "Ships via Silver Cord's interdimensional express service with a guaranteed delivery of three days or less.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 8 hours (twice your spellcasting ability modifier)",
      "endsWhen": "Incapacitation or death during the journey, or when you return from the other plane",
      "charges": "1 use before recharge"
    },
    "priceReason": "The orb is priced at 1000 XP as it is a reliable and essential tool for beginners in astral travel.",
    "priceOriginal": 470000,
    "priceReviewedAt": "2026-07-22T00:20:02.962013+00:00",
    "aiReviewedAt": "2026-07-22T00:20:02.962013+00:00",
    "aiReviewVersion": 1
  },
  "avalon_court_fairy_nectar_drink_recipe": {
    "id": "avalon_court_fairy_nectar_drink_recipe",
    "name": "Recipe: Avalon Court Fairy Nectar Drink",
    "description": "A delicate recipe for Avalon Court Fairy Nectar Drink, a sparkling elixir made from fey flowers that grants the drinker an enchanting presence. Sipped during courtly toasts, this nectar infuses the imbiber with a minor charm aura and the ability to gain advantage on Charisma (Deception) checks against fey creatures for three hours.",
    "price": 1000,
    "icon": "🥤",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Infuse Flowers",
      "Minor Charm Aura"
    ],
    "vendor": "avalon_court_garden",
    "shippedBy": "Nectar Nectar Note",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Infuse Flowers",
        "rules": "As an action, the drinker can prepare a serving of the nectar. It takes 20 minutes to infuse flowers into the drink. Once infused, it grants the imbiber advantage on Charisma (Deception) checks against fey creatures for three hours."
      },
      {
        "title": "Minor Charm Aura",
        "rules": "The drinker gains a minor charm aura that lasts until dispelled or the drinker is attacked or attacks. This aura provides a +1 bonus to Charisma (Persuasion) checks made against creatures within 30 feet."
      }
    ],
    "levelRequirementReason": "This recipe requires knowledge of fey magic and courtly etiquette, which are typically learned at higher levels.",
    "vendorReason": "The garden is known for its enchanted flora and the mixologists who can create this nectar from their flowers.",
    "shippingDetail": "Delivered by a fey courier, ensuring the drink remains fresh and potent upon arrival.",
    "usage": {
      "activation": "Infuse Flowers: As an action; Minor Charm Aura: Instantaneous effect lasting until dispelled or interrupted.",
      "duration": "Minor Charm Aura lasts for three hours.",
      "endsWhen": "The aura ends when dispelled, the drinker is attacked, or attacks.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This recipe requires rare ingredients and advanced knowledge, making it moderately priced but still within reach for those who can afford to impress at Avalon Court.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T00:20:08.960990+00:00",
    "aiReviewedAt": "2026-07-22T00:20:08.960990+00:00",
    "aiReviewVersion": 1
  },
  "avalon_court_fairy_ring_premium": {
    "id": "avalon_court_fairy_ring_premium",
    "name": "Avalon Court Fairy Ring (Premium)",
    "description": "The Avalon Court Fairy Ring (Premium) is a delicate, enchanted ring made from silver and encrusted with tiny, iridescent gemstones. Crafted by the skilled hands of the Avalon Enchanters, it opens a portal to fey realms. When activated, it teleports you up to 100 miles away to any known fey location, granting you an audience with these whimsical creatures.",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Ring of Fey Charm",
      "Instantaneous Portal"
    ],
    "vendor": "avalon_court_garden",
    "shippedBy": "Mushroom Cap Delivery Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Ring of Fey Charm",
        "rules": "While wearing the ring, you gain a +1 bonus to Charisma (Deception and Insight) checks against fey creatures. This effect persists for the duration of your interaction with any such creature."
      },
      {
        "title": "Instantaneous Portal",
        "rules": "Activate as a bonus action. Instantaneously teleports you up to 100 miles to any known fey location, provided you have visited it before. The portal lasts for 1 minute and can be used once per week."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to ensure the user has the necessary dexterity and knowledge of the fey realm.",
    "vendorReason": "The Avalon Enchanters are renowned for their craftsmanship, especially in items that facilitate communication with the fey realms.",
    "shippingDetail": "Ships within 3 days. Requires a signature upon delivery.",
    "usage": {
      "activation": "Bonus action to activate portal; passive effect for Charisma checks against fey creatures.",
      "duration": "1 minute, once per week",
      "endsWhen": "The portal closes after 1 minute or if you leave the fey realm.",
      "charges": "One use per week"
    },
    "priceReason": "Balanced at 1000 XP to reflect its powerful teleportation capabilities and the rarity of the materials used.",
    "priceOriginal": 21000,
    "priceReviewedAt": "2026-07-22T00:20:14.839805+00:00",
    "aiReviewedAt": "2026-07-22T00:20:14.839805+00:00",
    "aiReviewVersion": 1
  },
  "avalon_court_fey_flower_infuser": {
    "id": "avalon_court_fey_flower_infuser",
    "name": "Avalon Court Fey Flower Infuser",
    "description": "The Avalon Court Fey Flower Infuser is a delicate glass contraption forged by the Court Glassblowers. It captures nectar from fey blooms, ensuring that the flowers never wilt and creating whimsical bubbles in any beverage it infuses. Drinking from this vessel grants +1 Charisma to the imbiber, and it attracts pixies to your vicinity.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥤",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 Charisma for Fey Drinks",
      "Whimsical Bubbles and Never-Wilt Flowers"
    ],
    "vendor": "avalon_court_garden",
    "shippedBy": "Fey Flask Fold",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "When a creature consumes nectar from the infuser, it gains +1 to its Charisma score until the end of its next short or long rest."
      },
      {
        "title": "Pixie Attraction",
        "rules": "The infuser attracts pixies within 30 feet for 1 hour. The attraction ends if a creature uses an action to dispel it, or when the infuser is destroyed."
      }
    ],
    "levelRequirementReason": "Crafted with intricate glasswork and potent fey magic, this item requires a moderate level of skill to wield effectively.",
    "vendorReason": "The Court Glassblowers are renowned for their craftsmanship and the unique items they produce, making them the perfect vendor for this creation.",
    "shippingDetail": "Delivered by a fleet of tiny pixies who ensure the nectar is fresh upon arrival.",
    "usage": {
      "activation": "Instantaneous activation; no action required to use the infuser.",
      "duration": "Until the end of the next short or long rest, or until destroyed.",
      "endsWhen": "Destroyed by attack or magic effect that deals fire damage equal to half its price in XP.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a lower cost due to the item's limited active effects and duration, ensuring it remains a desirable but not overpowered accessory.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T00:20:20.618450+00:00",
    "aiReviewedAt": "2026-07-22T00:20:20.618450+00:00",
    "aiReviewVersion": 1
  },
  "avalon_court_feywing_feather_boa": {
    "id": "avalon_court_feywing_feather_boa",
    "name": "Avalon Court Feywing Feather Boa",
    "description": "A luxurious boa made from the rarest feathers of enchanted birds of Avalon Court. The soft, shimmering plumes not only grant advantage on Charisma (Deception) checks but also allow for brief bursts of flight, propelling you a mere ten feet into the air. This regal accessory is both an adornment and a tool, crafted by the elite fashionistas who serve the court.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧣",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enchanted Flight",
      "Charisma Boost"
    ],
    "vendor": "avalon_court_gala",
    "shippedBy": "Wing Wrap Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enchanted Flight",
        "rules": "As a bonus action, you can activate this boa to propel yourself up to ten feet into the air. This effect lasts for one minute and requires concentration (as a bonus action each round). You are not subject to falling damage while in flight."
      },
      {
        "title": "Charisma Boost",
        "rules": "While wearing this boa, you gain advantage on Charisma (Deception) checks against creatures of the fey type. This effect lasts until you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "Crafted for those who seek to charm and fly with grace, this accessory is suitable for players starting their journey.",
    "vendorReason": "As purveyors of the finest enchanted garments, Avalon Court Gala naturally stocks this exquisite boa.",
    "shippingDetail": "Delivered with utmost care by Wing Wrap Express, ensuring your boa arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action to activate flight and concentration (bonus action each round).",
      "duration": "One minute per activation with concentration required.",
      "endsWhen": "Concentration ends or you lose your ability score modifier for Charisma.",
      "charges": "Unlimited uses between rests"
    },
    "priceReason": "Balanced at a fair value, this price reflects the rare materials and enchanted workmanship required to create such an item.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T00:20:26.354774+00:00",
    "aiReviewedAt": "2026-07-22T00:20:26.354774+00:00",
    "aiReviewVersion": 1
  },
  "bag_of_confetti": {
    "id": "bag_of_confetti",
    "name": "Bag of Confetti",
    "description": "A small leather pouch adorned with tiny paper confetti that shimmers in various colors. It is said to have been crafted by a whimsical artisan who once lived among the clouds, and its use can brighten even the darkest of days. When shaken, it releases a burst of confetti that fills any hole or gap up to 10 feet across, instantly obscuring vision within a 5-foot radius for 1 round.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎊",
    "stock": 500,
    "rarity": "common",
    "effects": [
      "Vision Obfuscation",
      "Instant Fill"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vision Obfuscation",
        "rules": "When shaken and released in an area, any creature within a 5-foot radius must make a DC 10 Dexterity saving throw or be blinded until the end of their next turn. This effect has no save after the first use."
      },
      {
        "title": "Instant Fill",
        "rules": "Shake the bag to fill up to a 10-foot square hole or gap, requiring no tools and taking no time. The confetti remains until dispelled by magic, natural erosion, or deliberate removal."
      }
    ],
    "levelRequirementReason": "Requires basic dexterity to use the bag effectively.",
    "vendorReason": "Toad Town Market often stocks items that add a touch of whimsy and utility to adventurers' toolkits.",
    "shippingDetail": "Ships via Standard Courier, typically arriving within 3 days.",
    "usage": {
      "activation": "Shake the bag as an action.",
      "duration": "Instantaneous for each use.",
      "endsWhen": "Disrupted by physical interference or dispelled by magic.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Reflects its unique utility and the artisanal craftsmanship required to create such a versatile item.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T00:20:31.778965+00:00",
    "aiReviewedAt": "2026-07-22T00:20:31.778965+00:00",
    "aiReviewVersion": 1
  },
  "bag_of_tricks_minor": {
    "id": "bag_of_tricks_minor",
    "name": "Bag of Tricks (Minor)",
    "description": "The Bag of Tricks (Minor) is a curious leather pouch adorned with arcane symbols. It can produce small animal companions, from playful foxes to helpful squirrels, each tailored to assist in your current endeavor. However, the bag often surprises you, occasionally releasing a cat that prefers lounging over leaping into action.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Animal Companion",
      "Surprising Cat"
    ],
    "vendor": "wandering_circus",
    "shippedBy": "Furry-Lined Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Animal Companion",
        "rules": "On your action during each short rest, reach into the bag to summon a small beast (CR 1/4 or less) that lasts for one hour. The summoned creature is friendly and follows your simple commands."
      },
      {
        "title": "Surprising Cat",
        "rules": "There's a 50% chance that instead of an active helper, the bag will release a cat that simply naps in its corner until dismissed. This effect does not count against the uses per short rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for players who have just begun their adventures and need some assistance.",
    "vendorReason": "The Wandering Circus often sells magical items that entertain as much as they assist, making the Bag of Tricks a perfect fit.",
    "shippingDetail": "Shipped in a padded box with soft fur lining to protect the bag during transit.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per short rest, usable once per short rest",
      "endsWhen": "The summoned creature disperses when dismissed or its time expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its minor utility and occasional unpredictable nature.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T00:20:37.074330+00:00",
    "aiReviewedAt": "2026-07-22T00:20:37.074330+00:00",
    "aiReviewVersion": 1
  },
  "bag_of_useless_items": {
    "id": "bag_of_useless_items",
    "name": "Bag of (Mostly) Useless Items",
    "description": "This battered leather bag contains a hodgepodge of curiosities that seem more fit for a traveling fair than an adventuring party. The items within are as random as they are impractical, yet somehow always pertinent to the current situation, even if only in a humorous or bizarre way.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Pulls a random item from the bag",
      "5% chance of utility"
    ],
    "vendor": "discount_wonders",
    "shippedBy": "Carrier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Item Retrieval",
        "rules": "Activates on command. The bag reveals an object, which could be anything mundane (a spoon, a boot, or even a live chicken). There is a 5% chance that the retrieved item will be immediately useful for your current situation."
      },
      {
        "title": "Temporary Utility",
        "rules": "The pulled item remains useful only until the start of your next turn. Afterward, it vanishes without a trace. No refunds or guarantees are offered; the bag's reputation is as legendary as its contents are unpredictable."
      }
    ],
    "levelRequirementReason": "Even beginning adventurers might find value in the bag’s random utility.",
    "vendorReason": "Discount Wonders prides itself on offering items that, while not always practical, are certainly unique and often more useful than they appear.",
    "shippingDetail": "Delivered swiftly by a reliable carrier pigeon. Expect delivery within one hour of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, lasts until the start of your next turn",
      "endsWhen": "When the item’s utility is exhausted or you command it to stop",
      "charges": "Unlimited"
    },
    "priceReason": "The bag's unpredictable nature and potential for immediate, if quirky, usefulness justify its price.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-22T00:20:42.468585+00:00",
    "aiReviewedAt": "2026-07-22T00:20:42.468585+00:00",
    "aiReviewVersion": 1
  },
  "balor_core_detonator": {
    "id": "balor_core_detonator",
    "name": "Balor Core Detonator (Remote)",
    "description": "The Balor Core Detonator (Remote) is a compact, gleaming artifact made of polished obsidian. When activated, it channels raw infernal energy to trigger a Balor's final death throes with unerring precision. The Balor offers no resistance; the blast radiates out in all directions, dealing massive damage to all within its reach.",
    "price": 1000,
    "icon": "💣",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Activates a Balor's Death Throes",
      "Instantaneous Damage Burst"
    ],
    "vendor": "demon_weapons",
    "shippedBy": "Hellfire Express",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Death Throes Activation",
        "rules": "When the detonator is activated, it triggers the targeted Balor's death throes. The Balor cannot make a saving throw and deals 100d6 fire damage to all creatures within 100 feet of its location."
      },
      {
        "title": "Instantaneous Damage Burst",
        "rules": "The detonator creates an immediate, unblockable burst of energy that ends the Balor's existence. This effect has no save or duration and can only be used once per day."
      }
    ],
    "levelRequirementReason": "Requires a 18th-level character to wield due to its raw power and complexity.",
    "vendorReason": "Demon-Weapons is known for crafting items that deal with demonic threats, making this detonator a fitting addition to their inventory.",
    "shippingDetail": "Ships via Hellfire Express, ensuring swift and secure delivery through the infernal realms.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used once per day; destroyed after use",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique and powerful abilities that are not overpowered.",
    "priceOriginal": 835000,
    "priceReviewedAt": "2026-07-22T00:20:47.852046+00:00",
    "aiReviewedAt": "2026-07-22T00:20:47.852046+00:00",
    "aiReviewVersion": 1
  },
  "banana_peel": {
    "id": "banana_peel",
    "name": "Used Banana Peel",
    "description": "A discarded banana peel that exudes a noxious odor and leaves a slippery residue. Crafted from the remnants of a village market, this potent hazard can ruin an adventurer's day with ease. Any creature stepping on it must make a Dexterity saving throw (DC 14) or slip and fall prone immediately, creating a minor distraction for the next round.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍌",
    "stock": 300,
    "rarity": "common",
    "effects": [
      "Slippery Trap",
      "Noxious Fumes"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Compost Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slippery Trap",
        "rules": "When a creature steps on the banana peel as part of its movement, it must make a Dexterity saving throw (DC 14). On a failed save, the creature falls prone and is incapacitated until the start of its next turn. This effect does not allow an action or reaction."
      },
      {
        "title": "Noxious Fumes",
        "rules": "The banana peel emits a noxious odor that affects creatures within 5 feet for 1 minute. Creatures in this area must make a Constitution saving throw (DC 14) at the start of each of their turns; on a failed save, they are poisoned until the effect ends."
      }
    ],
    "levelRequirementReason": "This item is common and suitable for low-level adventurers who may encounter it during basic expeditions.",
    "vendorReason": "The Valley Trading Post often deals in goods from the local farmers, including biodegradable hazards like this banana peel.",
    "shippingDetail": "Shipped using Compost Express's daily delivery service within a day of purchase.",
    "usage": {
      "activation": "Instantaneous when placed on the ground",
      "duration": "Until removed or destroyed",
      "endsWhen": "The creature falls prone due to the Slippery Trap effect, or the poison effect ends after one minute",
      "charges": "Unlimited"
    },
    "priceReason": "The increased price reflects its more complex effects and higher utility compared to a basic hazard.",
    "priceOriginal": 100,
    "priceReviewedAt": "2026-07-22T00:20:53.694210+00:00",
    "aiReviewedAt": "2026-07-22T00:20:53.694210+00:00",
    "aiReviewVersion": 1
  },
  "banana_peel_bunch": {
    "id": "banana_peel_bunch",
    "name": "Banana Peel Cluster",
    "description": "A bunch of banana peels woven into a cluster, each slipperier than the last. When tossed, these peels spread out in a 15-foot radius, creating an impenetrable zone of treacherous terrain that even the most nimble can't navigate without falling. The peels are said to be enchanted by mischievous forest spirits, and once they've served their purpose, they dissolve into nothingness after three rounds.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍌",
    "stock": 20,
    "rarity": "common",
    "effects": [
      "Slippery Terrain",
      "Mischievous Spirits"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Fruit Basket Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slippery Terrain",
        "rules": "When thrown, the Banana Peel Cluster creates a 15-foot radius of difficult terrain that lasts for 3 rounds. Any creature within this area must make a Dexterity saving throw or fall prone. The effect ends when the cluster is destroyed or after its duration expires."
      },
      {
        "title": "Mischievous Spirits",
        "rules": "If any banana peels are left unthrown, they will be animated by mischievous forest spirits. These spirits cause any nearby monkeys to become hostile and attack anyone who wastes bananas within a 30-foot radius for the duration of their effect."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, as it requires little skill but can still cause significant chaos.",
    "vendorReason": "The Toad Town Market is known for its quirky and practical pranks, making this item a perfect fit for their inventory.",
    "shippingDetail": "Ships via Fruit Basket Express, ensuring the Banana Peel Cluster reaches you in one piece.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "3 rounds",
      "endsWhen": "Destroyed or after duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The price has been adjusted to reflect the item's balanced design and utility within a game economy.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T00:20:59.446581+00:00",
    "aiReviewedAt": "2026-07-22T00:20:59.446581+00:00",
    "aiReviewVersion": 1
  },
  "bandit_mask": {
    "id": "bandit_mask",
    "name": "Bandit's Smiling Mask",
    "description": "A white mask that grins eternally, this Bandit's Smiling Mask is a relic of ancient thieves' guilds. It whispers gambling tips and leaves those who wear it with an infectious grin, making them appear trustworthy to others.",
    "category": "equipment",
    "price": 1000,
    "icon": "😁",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Misleading Smile",
      "Gambling Insight"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Shadow Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Misleading Smile",
        "rules": "While wearing the mask, you have advantage on Deception checks against creatures of your choice. Additionally, any creature that sees you while wearing this mask has disadvantage on Wisdom (Perception) checks to perceive you as a liar."
      },
      {
        "title": "Gambling Insight",
        "rules": "Once per day when you attempt to influence the outcome of a gambling game or a similar chance-based situation, the mask whispers advice that grants you advantage on your roll. If you fail this roll, the mask's whisper is misleading and has no effect."
      }
    ],
    "levelRequirementReason": "This mask requires less skill than its previous version to use effectively.",
    "vendorReason": "The Rogues' Port Black Market deals in all sorts of items that help one cheat, and this mask is no exception.",
    "shippingDetail": "Ships within the week with a shadow courier for a swift delivery to your door.",
    "usage": {
      "activation": "Passive effect; activation occurs when you choose to use it.",
      "duration": "Instantaneous, lasting until used or removed by its wearer.",
      "endsWhen": "The effects end when the mask is removed from your face.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This version of the mask has been streamlined for easier use, making it more accessible to lower-level characters.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T00:21:04.796897+00:00",
    "aiReviewedAt": "2026-07-22T00:21:04.796897+00:00",
    "aiReviewVersion": 1
  },
  "bandits_highway_ambush_kit_premium": {
    "id": "bandits_highway_ambush_kit_premium",
    "name": "Bandits Highway Ambush Kit ",
    "description": "The Bandits' Highway Ambush Kit is a meticulously crafted set of traps and tools designed to ambush unwary travelers. This kit includes a snare made from local materials, which can immobilize a target with a DC 15 Dexterity saving throw, and a signaling device that attracts nearby lawmen. Crafted by the Road Robbers, it's a dangerous but effective tool for those who seek to profit from highway robbery.",
    "price": 1000,
    "icon": "🎒",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Ambush Trap",
      "Signal Lawmen"
    ],
    "vendor": "bandits_camp",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ambush Trap",
        "rules": "Activate as a bonus action. Set the snare within 30 feet, which targets one creature in range. The target must succeed on a DC 15 Dexterity saving throw or become prone and restrained by the trap until freed."
      },
      {
        "title": "Signal Lawmen",
        "rules": "Activate once per short rest. Use the kit to signal nearby lawmen, causing them to arrive within 1d6 minutes. This effect can only be used in an area where lawmen are likely to patrol or respond."
      }
    ],
    "levelRequirementReason": "Beginners with a knack for traps and ambushes find this kit useful.",
    "vendorReason": "The Road Robbers sell supplies that aid their operations, including the Bandits' Highway Ambush Kit.",
    "shippingDetail": "Delivered within 24 hours with a 10% handling fee.",
    "usage": {
      "activation": "Bonus action and once per short rest",
      "duration": "Instantaneous for the trap, 1d6 minutes for signaling lawmen",
      "endsWhen": "The trap is triggered or freed; the signal fades after 1d6 minutes",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a useful tool but not overpowered, this kit provides strategic advantages without disrupting game balance.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T00:21:10.534405+00:00",
    "aiReviewedAt": "2026-07-22T00:21:10.534405+00:00",
    "aiReviewVersion": 1
  },
  "bandits_highway_robbers_rations_recipe": {
    "id": "bandits_highway_robbers_rations_recipe",
    "name": "Recipe: Bandits Highway Robbers Rations ",
    "description": "The Recipe: Bandits Highway Robbers Rations are stolen-flavored rations that offer a fleeting taste of adventure. These compact packs are handcrafted by cunning bandit scavengers, their flavors mixed with the grit and haste of escape artists. A quick bite grants you a +10 foot speed boost for an hour, perfect for those moments when quick feet can save your life.",
    "price": 1000,
    "icon": "🥪",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Quick Escape Rations",
      "Taste of Banditry"
    ],
    "vendor": "bandits_camp",
    "shippedBy": "Stolen Snack Summary",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Quick Escape Rations",
        "rules": "Eating these rations grants you a +10 foot speed increase for one hour. This effect is limited to once per day."
      },
      {
        "title": "Taste of Banditry",
        "rules": "Upon consumption, the flavor lingers in your mouth as a reminder of the bandits who scavenged and crafted these rations. The taste lasts for 1d4 hours."
      }
    ],
    "levelRequirementReason": "Suitable for all adventurers to use.",
    "vendorReason": "The Bandits Camp is known for its unique and stolen goods, making these rations a natural addition to their wares.",
    "shippingDetail": "Delivered by the same courier who delivered your last batch of stolen delicacies.",
    "usage": {
      "activation": "Eating one ration",
      "duration": "1 hour after consumption",
      "endsWhen": "The effect ends at the start of your next turn if you do not consume another ration within that time",
      "charges": "Unlimited, but limited to once per day"
    },
    "priceReason": "Balanced against other consumable rations and snacks in the market.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:21:15.807070+00:00",
    "aiReviewedAt": "2026-07-22T00:21:15.807070+00:00",
    "aiReviewVersion": 1
  },
  "bandits_highway_robbery_insurance": {
    "id": "bandits_highway_robbery_insurance",
    "name": "Bandits Highway Robbery Insurance",
    "description": "Bandits Highway Robbery Insurance is a peculiar service offered by Bandits Insurance Co., a company known for their unique methods. This insurance ensures you're less likely to be targeted, but if robbed, you'll receive compensation that's half of your lost gold, once per week. The 'Rob Me' sticker glows in the dark and serves as both a warning and a deterrent.",
    "category": "services",
    "price": 1000,
    "icon": "💰",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Bandit Targeting",
      "Compensation on Robbery"
    ],
    "vendor": "bandits",
    "shippedBy": "Highway Robbery Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bandit Targeting",
        "rules": "While under this insurance, you are less likely to be targeted by highwaymen. However, if you are robbed, the bandits may target you more often until a week passes."
      },
      {
        "title": "Compensation on Robbery",
        "rules": "If you are robbed while insured, you receive 50% of your lost gold back (once per week). This effect is triggered when you are robbed and lasts for one week after the incident."
      }
    ],
    "levelRequirementReason": "This service is available to all adventurers as a basic protection measure.",
    "vendorReason": "Bandits Insurance Co. specializes in unique services that cater to travelers and adventurers who face the peril of highwaymen.",
    "shippingDetail": "Delivered via a swift courier service that ensures quick delivery, but note that the insurance only applies within 10 miles of the nearest bandit encampment.",
    "usage": {
      "activation": "Passive effect active while traveling on roads known for highwaymen.",
      "duration": "Instantaneous upon being robbed; weekly limit.",
      "endsWhen": "One week after a successful robbery or if you leave the area within 10 miles of bandit encampments.",
      "charges": "Unlimited"
    },
    "priceReason": "The service is priced at 1,000 XP to balance the risk and reward, ensuring it's a worthwhile investment for adventurers.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T00:21:21.633386+00:00",
    "aiReviewedAt": "2026-07-22T00:21:21.633386+00:00",
    "aiReviewVersion": 1
  },
  "bandits_highway_robbery_insurance_premium": {
    "id": "bandits_highway_robbery_insurance_premium",
    "name": "Bandits Highway Robbery Insurance (Premium)",
    "description": "Bandits Highway Robbery Insurance (Premium) offers a robust defense against highwaymen. This premium policy not only ensures you receive 75% of your gold if robbed but also increases the likelihood that bandits will target you, knowing you're insured and willing to pay more.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Insurance Against Robbery",
      "Increased Bandit Targeting"
    ],
    "vendor": "bandits",
    "shippedBy": "Highway Robbery Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Insurance Against Robbery",
        "rules": "If robbed within one week of purchasing this insurance, you receive 75% of your gold back. This effect is limited to once per month."
      },
      {
        "title": "Increased Bandit Targeting",
        "rules": "Bandits are more likely to target you due to the 'Rob Me Premium' badge you earn upon purchase. This increased attention does not apply if you have already been robbed within the past week."
      }
    ],
    "levelRequirementReason": "This policy is accessible to all travelers, providing a basic level of security regardless of player character level.",
    "vendorReason": "The Bandits' insurance policies are known for their unique protection and the 'premium' version ensures maximum coverage and recognition among highwaymen.",
    "shippingDetail": "Delivered by armored couriers, ensuring your insurance is active within hours of purchase.",
    "usage": {
      "activation": "Passive effect activated upon purchasing the item.",
      "duration": "Lasts until the next month begins.",
      "endsWhen": "The policy expires at the start of the next month or if you are robbed and receive gold back.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This premium insurance offers robust protection, making it a fair value for players looking to ensure their safety on the highway.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T00:21:26.961163+00:00",
    "aiReviewedAt": "2026-07-22T00:21:26.961163+00:00",
    "aiReviewVersion": 1
  },
  "bandits_road_rag_cloak": {
    "id": "bandits_road_rag_cloak",
    "name": "Bandits Road Rag Cloak ",
    "description": "The Bandits' Road Rag Cloak is a weathered garment sewn from discarded fabrics. Its worn patches and frayed edges make it an excellent disguise for highway folk, especially those who need to blend into crowds or avoid notice. The cloak's previous owner was likely a member of the bandit guild known as 'Bandit Scroungers', whose scavenging skills are legendary in the region.",
    "price": 1000,
    "icon": "🧥",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Disguise and Blend In",
      "Stow Small Objects"
    ],
    "vendor": "bandits_roadside",
    "shippedBy": "Rag Roll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disguise and Blend In",
        "rules": "Activates as a bonus action. The wearer gains advantage on Deception checks to impersonate a beggar or street urchin. This effect lasts until the end of your next turn."
      },
      {
        "title": "Stow Small Objects",
        "rules": "Allows the wearer to hide small objects within the cloak, reducing their visibility by half. The hidden items must be no larger than a handkerchief and are only detectable through close inspection or magical means. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The cloak's simple construction allows even novice adventurers to use it effectively.",
    "vendorReason": "Bandits Roadside has a surplus of scavenged goods, including this ragged but useful cloak.",
    "shippingDetail": "Shipped in a sturdy wooden box to protect the cloak during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you take a long rest or when you are no longer disguised as a beggar.",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's value lies in its practicality and the skill of its previous owner, making it a fair price for adventurers seeking such utility.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T00:21:32.563365+00:00",
    "aiReviewedAt": "2026-07-22T00:21:32.563365+00:00",
    "aiReviewVersion": 1
  },
  "bandits_roadside_scavenge_chopper": {
    "id": "bandits_roadside_scavenge_chopper",
    "name": "Bandits Roadside Scavenge Chopper ",
    "description": "The Bandits' Roadside Scavenge Chopper is a rugged, hastily crafted chopper made from scavenged parts and sturdy metal. Crafted by the Bandit Bladesmiths, this tool can chop through scavenged rations with ease, doubling as a makeshift weapon in desperate situations.",
    "category": "equipment",
    "price": 1000,
    "stock": 12,
    "icon": "🥩",
    "rarity": "uncommon",
    "effects": [
      "Scavenger's Edge",
      "Stolen Goods"
    ],
    "vendor": "bandits_camp",
    "shippedBy": "Loot Chop Load",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Scavenger's Edge",
        "rules": "When you use the Scavenge Chopper to chop through scavenged rations, you gain a +1 bonus to your Deception checks if the food is presented as 'stolen'. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Stolen Goods",
        "rules": "If you manage to successfully deceive someone about stolen goods using this chopper, you have advantage on your next Deception check made within 1 hour. You can use this ability only once per day."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who might need to scavenge and survive in harsh conditions.",
    "vendorReason": "The Bandits' Camp has a surplus of scavenged goods, making this chopper an essential tool for their members.",
    "shippingDetail": "Delivered by the fastest means available, but with a 1d4 hour delay due to looting and re-packaging.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect lasting until end of rest",
      "endsWhen": "Rest ends or you use it again within 24 hours",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the quality and utility of a well-made, albeit hastily crafted chopper.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:21:38.021100+00:00",
    "aiReviewedAt": "2026-07-22T00:21:38.021100+00:00",
    "aiReviewVersion": 1
  },
  "banjo_kazooie_egg": {
    "id": "banjo_kazooie_egg",
    "name": "Kazooie Egg Shooter",
    "description": "The Kazooie Egg Shooter is a quirky contraption crafted from a rare eggshell and enchanted with the spirit of a mythical bird. It can shoot eggs as projectiles, each imbued with unique elemental properties. The shooter can also hatch helpers that assist in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥚",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Egg Shot",
      "Hatch Helpers"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Egg Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Egg Shot",
        "rules": "When you use an action to activate the Kazooie Egg Shooter, it shoots a projectile egg. The target must make a Dexterity saving throw (DC 13). On a failed save, the target takes 1d8 bludgeoning damage plus fire or ice damage depending on the egg's type. Each egg has a special type chosen from fire, ice, acid, or shock. A creature can be affected by this effect only once per long rest."
      },
      {
        "title": "Hatch Helpers",
        "rules": "As a bonus action, you can activate the Kazooie Egg Shooter to hatch helpers that assist in combat. These helpers are small avian creatures that grant temporary hit points equal to 1d6 + your proficiency bonus and can fly at a speed of 30 feet for one minute. This effect has no cooldown."
      }
    ],
    "levelRequirementReason": "It's designed for players who are just starting their adventures, making it accessible from the first level.",
    "vendorReason": "Shamans at Shamans Hut are known for their magical contraptions and curiosities, including this unique egg shooter.",
    "shippingDetail": "Delivered by Egg Crate Express within three days of purchase. Eggs may arrive warm from the source.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Hatch Helpers) / One Minute (Egg Shot)",
      "endsWhen": "The effect ends when the creature is incapacitated, dies, or the shooter takes damage. The helpers disappear after their duration.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects a rare and magical item that provides both combat utility and a unique gameplay experience.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T00:21:44.239124+00:00",
    "aiReviewedAt": "2026-07-22T00:21:44.239124+00:00",
    "aiReviewVersion": 1
  },
  "banshees_wail_suppressor": {
    "id": "banshees_wail_suppressor",
    "name": "Banshee's Wail Suppressor",
    "description": "Banshee's Wail Suppressor is a pair of delicate, spectral earplugs crafted by the Silent Sisters from the remnants of ancient banshees. These plugging devices not only protect against deathly screams but also muffle them in your immediate vicinity, creating an aura of calm around you.",
    "price": 1000,
    "icon": "🎧",
    "stock": 10,
    "rarity": "epic",
    "effects": [
      "Silence Deathly Screams",
      "Passive Thunder Immunity"
    ],
    "vendor": "spirit_tailor",
    "shippedBy": "Ghostly Whisper",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence Deathly Screams",
        "rules": "As a bonus action, the wearer can silence one creature within 30 feet with a banshee’s wail. The silenced target is unable to make sound for up to 1 minute or until it takes an action to speak."
      },
      {
        "title": "Passive Thunder Immunity",
        "rules": "The user gains immunity to thunder damage and the fear effect of spells and abilities while wearing these earplugs. This effect lasts for 30 days from the moment of first use."
      }
    ],
    "levelRequirementReason": "This item's supernatural properties are accessible at a low level, allowing even novices to benefit from its protection.",
    "vendorReason": "The Silent Sisters have mastered the art of crafting items that repel and counteract supernatural threats.",
    "shippingDetail": "Ships via spectral courier, ensuring swift delivery even to the most remote corners of the realm.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 minute per day or until the silenced creature takes an action to speak",
      "endsWhen": "The effect ends when the silenced creature speaks or the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "This item's price is balanced at a tenth of its original cost due to reduced power and increased accessibility.",
    "priceOriginal": 215000,
    "priceReviewedAt": "2026-07-22T00:21:49.676286+00:00",
    "aiReviewedAt": "2026-07-22T00:21:49.676286+00:00",
    "aiReviewVersion": 1
  },
  "bean_stone": {
    "id": "bean_stone",
    "name": "Bean Stone",
    "description": "The Bean Stone is a peculiar artifact hailing from the Beanbean Kingdom, crafted by ancient bean fairies. It resembles a smooth, green marble adorned with tiny, indistinguishable patterns that only reveal themselves when near beans. The stone not only serves as a paperweight but also amplifies the speaker's voice during important discussions.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🫘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Paperweight",
      "Voice Amplifier"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Paperweight",
        "rules": "The Bean Stone functions as a standard paperweight, providing no additional effects unless near beans."
      },
      {
        "title": "Voice Amplifier",
        "rules": "When the user is speaking and the Bean Stone is within 5 feet of at least three beans, the speaker's voice is amplified by one octave. This effect lasts until the end of the speaker’s next turn. No saving throw is required."
      }
    ],
    "levelRequirementReason": "This item requires no special level to use as it offers straightforward utility.",
    "vendorReason": "Shamans of the Beanbean Kingdom often carry this artifact, using it in their practices and teaching sessions.",
    "shippingDetail": "The stone is carefully packed to prevent any accidental crushing during transit.",
    "usage": {
      "activation": "Passive effect when near beans.",
      "duration": "Instantaneous amplification effect.",
      "endsWhen": "Ends at the end of the speaker’s next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price is adjusted to reflect its utility in both mundane and magical contexts.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T00:21:54.527693+00:00",
    "aiReviewedAt": "2026-07-22T00:21:54.527693+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_academy_item": {
    "id": "beanbean_academy_item",
    "name": "Gehenna Academy Halos",
    "description": "The Gehenna Academy Halos are stylized anime eyes that grant their wearer an aura of focused determination. Crafted from the academy's secret alchemy, these halos enhance one’s precision and mental fortitude in combat. They can be used to unlock hidden rooms within dungeons, a testament to their creators' ingenuity.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Enhanced Focus",
      "Distraction Aura"
    ],
    "vendor": "beanbean",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Enhanced Focus",
        "rules": "The wearer gains a +2 bonus to ranged attack rolls and an additional +10 temporary hit points. This effect lasts for 1 hour per use."
      },
      {
        "title": "Distraction Aura",
        "rules": "When the wearer activates the halos, they create a minor distraction around them, causing one enemy within 30 feet to become distracted and lose its next action. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The intricate alchemy involved in creating these halos necessitates a level of expertise that only an 8th-level spellcaster can achieve.",
    "vendorReason": "Beanbean, known for their connections to Gehenna Academy, have exclusive access to these unique artifacts.",
    "shippingDetail": "Due to the delicate nature of the halos, they are shipped via the Piranha Plant Post's fastest service ensuring timely delivery.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour per use",
      "endsWhen": "The duration ends when the wearer no longer meets the level requirement or takes damage.",
      "charges": "Unlimited, but can only be used once every short or long rest."
    },
    "priceReason": "The halos' unique crafting process and the academy's reputation justify a price that reflects their value in battle and exploration.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:22:00.086400+00:00",
    "aiReviewedAt": "2026-07-22T00:22:00.086400+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_animatopia_primal_amulet": {
    "id": "beanbean_animatopia_primal_amulet",
    "name": "Primal Amulet of Animatopia",
    "description": "The Primal Amulet of Animatopia is a black obsidian pendant with etched lines that resemble howling wolves. It grants a deep connection to the wild, amplifying one's charisma when dealing with Animatopia tribes and enhancing damage against predatory creatures. The amulet also offers a protective barrier against nature-based attacks and summons a fleeting animal companion to aid in combat.",
    "category": "equipment",
    "price": 8000,
    "icon": "🐺",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Wild Charisma Boost",
      "Enhanced Predatory Strikes"
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Wild Charisma Boost",
        "rules": "Activates on the wearer's turn as a bonus action. Grants +5 to Charisma when interacting with Animatopia tribes for 1 minute, requiring a DC 14 Wisdom saving throw or be charmed by the amulet's owner."
      },
      {
        "title": "Enhanced Predatory Strikes",
        "rules": "Passive effect that increases damage dealt against predatory creatures by 10%. Ends when the wearer is no longer within 60 feet of a predatory creature."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure the character can handle the increased power and complexity of interacting with Animatopia tribes.",
    "vendorReason": "Beanbean, known for exotic magical items, is the only vendor that stocks this amulet due to its unique connection to Animatopia.",
    "shippingDetail": "The amulet arrives wrapped in protective obsidian dust to preserve its potency and strength during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute per day, up to three times per long rest",
      "endsWhen": "Worn off after one minute or if the wearer is no longer within range of Animatopia tribes",
      "charges": "Recharges on a short rest"
    },
    "priceReason": "The amulet's rarity and unique effects, including its connection to nature and animatopic creatures, justify this fair value.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T00:22:05.852636+00:00",
    "aiReviewedAt": "2026-07-22T00:22:05.852636+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_brooch": {
    "id": "beanbean_brooch",
    "name": "Beanstar Brooch",
    "description": "The Beanstar Brooch gleams with a vibrant emerald hue, its essence radiating calmness and harmony. This heirloom pin, crafted from the heartwood of a thousand-year-old beanstalk, grants its wearer a serene spirit and enhances their communication skills in the whimsical Beanbean language.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Calm Presence",
      "Enhanced Communication"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Velvet Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Calm Presence",
        "rules": "While wearing the Beanstar Brooch, you are immune to being frightened and gain advantage on saving throws against fear effects. This effect is always active as long as the brooch remains on your person."
      },
      {
        "title": "Enhanced Communication",
        "rules": "When speaking or interacting with others who understand the Beanbean language, you have advantage on all Charisma checks and ability checks involving persuasion or performance. This benefit lasts until the end of each long rest."
      }
    ],
    "levelRequirementReason": "The brooch's enchantments are subtle but potent, suitable for adventurers starting their journey.",
    "vendorReason": "As a local treasure, the Toad Town Market proudly sells this artifact of Beanstar heritage.",
    "shippingDetail": "The brooch arrives in pristine condition, delivered with care by Velvet Box Express.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; always active while wearing the brooch",
      "endsWhen": "Removed from your person or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The item's enchantments are balanced, offering significant benefits at a fair cost.",
    "priceOriginal": 220000,
    "priceReviewedAt": "2026-07-22T00:22:10.830975+00:00",
    "aiReviewedAt": "2026-07-22T00:22:10.830975+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_coin": {
    "id": "beanbean_coin",
    "name": "Beanbean Coin",
    "description": "The Beanbean Coin is a small, intricately crafted coin from the Kingdom of Beanbean. Its surface depicts a mischievous bean sprout and golden wheat stalks. Despite being worthless in local shops, it's a collectible item here, cherished for its craftsmanship and cultural significance.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪙",
    "stock": 500,
    "rarity": "common",
    "effects": [
      "Worthless in Shops",
      "Cultural Collectible"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Envelope",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cultural Collectible",
        "rules": "When presented to an inhabitant of Beanbean, the coin grants a +2 bonus on Persuasion checks for one hour. This effect ends when used or after the duration expires."
      },
      {
        "title": "Worthless in Shops",
        "rules": "The coin cannot be used as currency and has no intrinsic value outside of collectible status. It can only be sold to collectors at a fraction of its face value."
      }
    ],
    "levelRequirementReason": "Anyone can appreciate the cultural significance of Beanbean art, making it accessible to all levels.",
    "vendorReason": "The Toad Town Market is known for its wide variety of collectibles and curiosities from far-flung lands, including items from neighboring kingdoms like Beanbean.",
    "shippingDetail": "Ships via standard postal service; delivery time varies by region.",
    "usage": {
      "activation": "Passive effect when presented to a Beanbean inhabitant.",
      "duration": "One hour or until used.",
      "endsWhen": "Used or duration ends.",
      "charges": "Unlimited"
    },
    "priceReason": "The coin's worth is more in cultural value than monetary, thus priced at a fair amount to reflect its collectible nature.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T00:22:15.946705+00:00",
    "aiReviewedAt": "2026-07-22T00:22:15.946705+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_cosmic_jester_mask": {
    "id": "beanbean_cosmic_jester_mask",
    "name": "Cosmic Jesters Mask",
    "description": "The Cosmic Jesters Mask is a grinning porcelain visage with mismatched eyes and an eerie glimmer. Crafted from enchanted bone, it whispers tales of mischievous jesters long gone. Wear it at your own peril; the mask's influence may drive you to laughter one moment and chaos the next.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Mischievous Influence",
      "Erratic Laughter"
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Mischievous Influence",
        "rules": "When worn, the mask grants +1 to all ability scores for an hour. Each turn, it has a 25% chance of inflicting Jesters Luck on enemies within 30 feet, causing them to be immune to all status effects until the start of their next turn."
      },
      {
        "title": "Erratic Laughter",
        "rules": "After three uses, the wearer becomes uncontrollable and acts erratically for one hour. The wearer must succeed on a DC 14 Wisdom saving throw each round or make an immediate attack against the nearest creature within reach until the effect ends."
      }
    ],
    "levelRequirementReason": "This mask's influence requires a level of at least 5 to harness its effects without succumbing too quickly to its whimsical chaos.",
    "vendorReason": "Beanbean, a mischievous merchant known for their eccentric wares, regularly stocks this unpredictable item in their store.",
    "shippingDetail": "The mask is shipped via the Dry Bones Dead Drop, ensuring safe arrival but with an unexplained delay of one week.",
    "usage": {
      "activation": "Worn as equipment",
      "duration": "One hour or until destroyed by laughter",
      "endsWhen": "The wearer completes a long rest, the mask is destroyed, or the wearer succumbs to uncontrollable laughter",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from enchanted bone and with its unpredictable effects, this mask remains an intriguing yet balanced item for players of all backgrounds.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T00:22:21.806252+00:00",
    "aiReviewedAt": "2026-07-22T00:22:21.806252+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_courier_post_item": {
    "id": "beanbean_courier_post_item",
    "name": "Piranha Plant Post Courier Pack",
    "description": "The 'Piranha Plant Post Courier Pack' is a sealed package that zips through dangerous territories with unmatched speed. Crafted by the Piranha Plant Post, this courier service ensures messages reach their destination without delay or misplacement, even in hostile regions. The package may trigger an ambush if used in combat but grants 10% chance to bypass enemy checkpoints and instant delivery across kingdoms.",
    "price": 1000,
    "icon": "📦",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Instant Delivery",
      "Checkpoint Bypass"
    ],
    "vendor": "beanbean",
    "shippedBy": "Piranha Plant Post Express Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Delivery",
        "rules": "When activated, the package instantly delivers its contents to the intended location. This effect has no duration but is limited to one use per day."
      },
      {
        "title": "Checkpoint Bypass",
        "rules": "The courier pack grants a 10% chance to bypass enemy checkpoints when used in transit. The effect lasts for 24 hours from activation and can be triggered once every three days."
      }
    ],
    "levelRequirementReason": "This item is designed for novice adventurers who may not yet have the experience required to handle more powerful courier services.",
    "vendorReason": "Beanbean, known for their diverse and reliable deliveries, curates this unique service from Piranha Plant Post as a premium offering.",
    "shippingDetail": "The package is delivered via the Piranha Plant's express courier network, which ensures swift delivery but may trigger an ambush if used in combat zones.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Instant Delivery; 24 hours for Checkpoint Bypass",
      "endsWhen": "Exhausted after one use or upon activation of the next effect within the daily limit",
      "charges": "Unlimited uses, but only one effect can be active at a time"
    },
    "priceReason": "The balanced XP price reflects the item's unique abilities to bypass checkpoints and ensure instant delivery, which are both powerful yet not game-breaking.",
    "priceOriginal": 100,
    "priceReviewedAt": "2026-07-22T00:22:27.668499+00:00",
    "aiReviewedAt": "2026-07-22T00:22:27.668499+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_delfino_court_glove": {
    "id": "beanbean_delfino_court_glove",
    "name": "Courtly Gloves of the Isle Delfino",
    "description": "The Courtly Gloves of Isle Delfino are finely crafted from shimmering fabric adorned with tiny, iridescent mushrooms. These gloves not only enhance one's charm and persuasion by a subtle yet noticeable 15% but also allow the wearer to subtly communicate with secret sprites who guide through hidden paths within Hotel Delfino.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Charm",
      "Sprite Guidance"
    ],
    "vendor": "beanbean",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Charm",
        "rules": "When speaking in formal settings, the wearer's words are imbued with a natural grace that increases their Charisma (Deception) checks by +15. This effect lasts until the end of the next short or long rest."
      },
      {
        "title": "Sprite Guidance",
        "rules": "The gloves allow the wearer to receive silent, non-verbal guidance from sprites within a 30-foot radius. This guidance can reveal secret paths and shortcuts to Hotel Delfino. The wearer must make a Wisdom (Perception) check with advantage when using this ability."
      }
    ],
    "levelRequirementReason": "These gloves are designed for those just beginning their adventures, as they offer subtle assistance without overwhelming the wearer.",
    "vendorReason": "Beanbean is known for its unique and magical items, making these gloves a fitting addition to its inventory.",
    "shippingDetail": "Ships within three days via Lakitu Express, ensuring the wearer has their gloves as soon as possible.",
    "usage": {
      "activation": "Passive effect; activation is not required for use.",
      "duration": "Lasts until the end of the next short or long rest.",
      "endsWhen": "Rest ends",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rarity and magical properties, providing a fair value for adventurers seeking subtle advantages.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T00:22:33.198432+00:00",
    "aiReviewedAt": "2026-07-22T00:22:33.198432+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_halopod_helmet": {
    "id": "beanbean_halopod_helmet",
    "name": "Halopod Helmet",
    "description": "The Halopod Helmet is a rare academic artifact designed for Kivotos’ elite. Crafted by the Kivotos Student Corps, this helmet grants enhanced reflexes and visual distortion in combat. Its halo glow pulses with the wearer’s mental state, enhancing their presence or causing confusion among foes. A student once claimed they were mistaken for a ghost, temporarily blinding nearby security bots with its dazzling light.",
    "category": "equipment",
    "price": 3800,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enhanced Reflexes",
      "Visual Distortion"
    ],
    "vendor": "beanbean",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Reflexes",
        "rules": "The wearer gains +15% dodge chance when using the Halopod Helmet. This effect is instantaneous and does not require activation."
      },
      {
        "title": "Visual Distortion",
        "rules": "Once per short rest, the wearer can activate the helmet to create a visual distortion that blinds all creatures within 20 feet for up to 1 minute. The target must succeed on a DC 15 Wisdom saving throw or be blinded until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The helmet requires significant mental fortitude and control, making it suitable only for experienced students.",
    "vendorReason": "Beanbean specializes in rare academic tools and artifacts, including this unique piece of Kivotos’ heritage.",
    "shippingDetail": "Ships with a special aura that enhances the wearer’s reflexes during transit.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous (Visual Distortion) or up to 1 minute",
      "endsWhen": "The effect ends if the wearer is incapacitated, or when they use it again.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Reflects its rare craftsmanship and unique properties, offering a significant advantage in combat.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T00:22:38.694161+00:00",
    "aiReviewedAt": "2026-07-22T00:22:38.694161+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_item_name_here": {
    "id": "beanbean_item_name_here",
    "name": "Delfino Daze",
    "description": "The Delfino Daze is a shimmering tropical pendant that hums with forgotten memories. Crafted from the rare crystal of Shine Sprites, it grants temporary flight for moments of exploration and reveals hidden paths in the dense jungle of Isle Delfino. This relic carries the weighty history of the Peasley Financial Scandal, whispered about during diplomatic events.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Flight",
      "Reveal Hidden Paths"
    ],
    "vendor": "beanbean",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flight",
        "rules": "The wearer can take a flying gait for up to one minute. This effect ends if the wearer lands, is knocked prone, or falls from the sky. The pendant grants no saving throw."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "The pendant illuminates hidden paths within the Isle Delfino jungle when activated as a bonus action. This effect lasts for 10 minutes and requires the wearer to be in the specified region. The effect ends if the wearer leaves the area or is incapacitated."
      }
    ],
    "levelRequirementReason": "The pendant’s enchantments are accessible to adventurers of all levels, focusing on exploration and discovery.",
    "vendorReason": "Beanbean specializes in unique, enchanted items from the Isle Delfino, making this pendant a fitting addition to their inventory.",
    "shippingDetail": "The pendant is delivered swiftly by Lakitu Drones, arriving within two game days of purchase.",
    "usage": {
      "activation": "Bonus action or reaction (for Flight)",
      "duration": "Up to one minute for Flight; 10 minutes for Reveal Hidden Paths",
      "endsWhen": "Lands, falls from the sky, is knocked prone, leaves the area, or the wearer becomes incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The Delfino Daze’s enchantments provide unique and valuable exploration tools without overburdening the player's character.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T00:22:44.474346+00:00",
    "aiReviewedAt": "2026-07-22T00:22:44.474346+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_bean_pod_pants": {
    "id": "beanbean_kingdom_bean_pod_pants",
    "name": "Beanbean Kingdom Bean Pod Pants",
    "description": "Beanbean Kingdom Bean Pod Pants are reinforced with magical bean fibers that grow minor vines when you jump. These pants provide a climbing aid and advantage on Dexterity saving throws to avoid falls, but they also make a loud popping sound during each leap, alerting foes to your location.",
    "price": 1000,
    "icon": "👖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Dexterity Saves",
      "Climbing Aid"
    ],
    "vendor": "beanbean_kingdom_farm",
    "shippedBy": "Pod Pocket Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Dexterity Saves",
        "rules": "You gain advantage on Dexterity saving throws against effects that would cause you to fall. This effect lasts until the start of your next turn."
      },
      {
        "title": "Climbing Aid",
        "rules": "When you jump, minor vines grow from the bean pods for 1 minute as a bonus action. These vines grant a climbing speed equal to half your movement speed and allow you to climb walls as if you had the Athletics skill proficiency."
      }
    ],
    "levelRequirementReason": "These pants are designed for beginners, providing basic advantages in combat and terrain navigation.",
    "vendorReason": "Bean Weavers at Beanbean Kingdom Farm are known for their innovative magic-infused clothing that supports the kingdom's farmers.",
    "shippingDetail": "Delivered within a week, with an additional pop sound during transit.",
    "usage": {
      "activation": "Bonus action to grow vines when jumping.",
      "duration": "1 minute per jump.",
      "endsWhen": "Ends at the start of your next turn or upon falling from a height.",
      "charges": "Unlimited, recharged daily."
    },
    "priceReason": "The pants provide basic advantages but are priced lower as they are intended for beginners and do not offer combat prowess beyond the provided effects.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T00:22:49.725532+00:00",
    "aiReviewedAt": "2026-07-22T00:22:49.725532+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_bean_pod_peeler": {
    "id": "beanbean_kingdom_bean_pod_peeler",
    "name": "Beanbean Kingdom Bean Pod Peeler",
    "description": "The Beanbean Kingdom Bean Pod Peeler is a sturdy metal tool with a curved blade that gleams like polished bronze. Crafted by the skilled hands of the Kingdom Peelers, this peeler ensures that even the toughest bean pods are swiftly and cleanly removed without causing the pods to burst prematurely. It's a symbol of efficiency in the kitchen, making it an invaluable aid for cooks and chefs.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Swift Pod Removal",
      "Pod Integrity"
    ],
    "vendor": "beanbean_kingdom_farm",
    "shippedBy": "Pod Peel Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Swift Pod Removal",
        "rules": "When used as part of the action to prepare a growth recipe involving bean pods, this peeler allows you to instantly peel three pods without expending any additional time. This effect does not expend charges and can be used once per short or long rest."
      },
      {
        "title": "Pod Integrity",
        "rules": "This peeler prevents the premature bursting of bean pods during preparation, ensuring that your ingredients remain intact and ready for use in cooking. It has no save DC or duration; it simply enhances the quality of your pod handling by reducing waste."
      }
    ],
    "levelRequirementReason": "This tool is designed to assist cooks at all levels, from novices to masters.",
    "vendorReason": "The Kingdom Peelers are the official suppliers of their own tools and ensure their quality.",
    "shippingDetail": "Delivered swiftly by Pod Peel Pouch; arrives within a week.",
    "usage": {
      "activation": "As part of your action or bonus action when preparing bean pods for recipes.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends after one use per short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the tool's durable construction and its utility in saving time during cooking preparations.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T00:22:55.193339+00:00",
    "aiReviewedAt": "2026-07-22T00:22:55.193339+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_beanstalk_climber_service": {
    "id": "beanbean_kingdom_beanstalk_climber_service",
    "name": "Beanbean Kingdom Beanstalk Climber Service",
    "description": "The Beanbean Kingdom Beanstalk Climber Service is a sturdy harness made from durable bean vines and enchanted to aid in your vertical climbs. It grants you an advantage on Athletics checks for climbing, and it increases your climbing speed by +10 feet, making it easier to scale the tallest trees or climb with agility.",
    "price": 1000,
    "icon": "🌿",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Climbing Checks",
      "Increased Climbing Speed"
    ],
    "vendor": "beanbean_kingdom_tower",
    "shippedBy": "Vine Rope Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Climbing Checks",
        "rules": "You gain advantage on all Athletics checks made to climb. This effect lasts for one week from the time you first activate the Beanstalk Climber Service."
      },
      {
        "title": "Increased Climbing Speed",
        "rules": "Your climbing speed increases by 10 feet while wearing the Beanbean Kingdom Beanstalk Climber Service, until you rest or remove it. This effect is active as long as you are actively engaged in climbing."
      }
    ],
    "levelRequirementReason": "This item assists beginners and seasoned adventurers alike by providing a simple advantage on climbs.",
    "vendorReason": "The Bean Climbers at the Beanbean Kingdom Tower are known for their expertise in climbing equipment, making this product a trusted choice.",
    "shippingDetail": "Ships via Vine Rope Express within one week of purchase. Delivery may be delayed by weather or terrain conditions.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "One week per activation",
      "endsWhen": "At the end of each long rest or when removed from your body",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the quality materials and enchantment, providing a significant advantage at an accessible cost for adventurers.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T00:23:00.441330+00:00",
    "aiReviewedAt": "2026-07-22T00:23:00.441330+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_coin_pouch": {
    "id": "beanbean_kingdom_coin_pouch",
    "name": "Beanbean Kingdom Coin Pouch",
    "description": "The Beanbean Kingdom Coin Pouch is a small leather pouch, emblazoned with the kingdom's crest. It magically converts foreign coins into local Beanbean coins at a favorable rate, but only once per day and never on a roll of 1; instead, it emits a faint bean odor.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💰",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Foreign Currency Conversion",
      "Bean Smell"
    ],
    "vendor": "Beanbean Kingdom",
    "shippedBy": "Express Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Foreign Currency Conversion",
        "rules": "Activate as an action. Converts up to 100 gp worth of foreign coins into 110 gp of Beanbean coins. This effect is usable once per day and cannot be used on a roll of 1."
      },
      {
        "title": "Bean Smell",
        "rules": "Emitting a faint bean smell, this effect occurs every time the pouch is activated or when it fails to convert currency due to rolling a 1. This odor does not have any mechanical effects but can be noticed by those nearby."
      }
    ],
    "levelRequirementReason": "The coin conversion requires a bit of focus and concentration, which are more easily managed by characters with at least first-level proficiency.",
    "vendorReason": "The kingdom's official currency exchange ensures the reliability and accuracy of this pouch.",
    "shippingDetail": "Ships within three days, delivered directly to your door.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used up or when the daily limit is reached",
      "charges": "Once per day"
    },
    "priceReason": "The balanced price reflects the pouch's utility and the magic required for its conversion ability.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T00:23:05.475897+00:00",
    "aiReviewedAt": "2026-07-22T00:23:05.475897+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_magic_bean_soup_recipe": {
    "id": "beanbean_kingdom_magic_bean_soup_recipe",
    "name": "Recipe: Beanbean Kingdom Magic Bean Soup",
    "description": "This ancient recipe for Beanbean Kingdom Magic Bean Soup is a culinary treasure passed down through generations. The enchanted beans, grown in dreams of beanstalks, yield a soup that temporarily boosts your size and strength. Each spoonful grants you a +1 size increase, providing advantage on Strength checks and saving throws while imposing disadvantage on Dexterity checks for 1 hour.",
    "price": 1000,
    "icon": "🍲",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Size Boost",
      "Strength Advantage"
    ],
    "vendor": "beanbean_kingdom_farm",
    "shippedBy": "Beanstalk Broth Book",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Size Boost",
        "rules": "When consumed as part of the soup, you gain a +1 size increase. This effect grants advantage on Strength checks and saving throws but imposes disadvantage on Dexterity checks for 1 hour."
      },
      {
        "title": "Strength Advantage",
        "rules": "While in your current size, you have advantage on Strength checks and saving throws until the duration ends or you are reduced to a smaller size. This effect is instantaneous upon consumption and lasts for 1 hour."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough that even novice adventurers can experiment with it.",
    "vendorReason": "The Kingdom Soup Makers are renowned for their expertise in magical cuisine and the cultivation of enchanted ingredients.",
    "shippingDetail": "Ships within two days, delivered by a flying beanpod courier.",
    "usage": {
      "activation": "Eating one serving of the soup as part of a meal.",
      "duration": "1 hour per serving consumed.",
      "endsWhen": "The effect ends when you are reduced to a smaller size or if you consume another serving that overrides this one.",
      "charges": "Unlimited, but each serving requires 25 minutes of boiling."
    },
    "priceReason": "This recipe combines magical ingredients with a simple preparation method, making it moderately priced for its effects and rarity.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T00:23:10.928586+00:00",
    "aiReviewedAt": "2026-07-22T00:23:10.928586+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_pressure_cooker": {
    "id": "beanbean_kingdom_pressure_cooker",
    "name": "Beanbean Kingdom Pressure Cooker",
    "description": "The Beanbean Kingdom Pressure Cooker is a marvel of engineering, capable of reducing beans to perfection in mere minutes under extreme pressure. Crafted by the legendary Beanbean Royal Engineers using ancient volcanic obsidian, it whistles and steams with a potency that could rival the forge itself. Be wary: its explosive potential demands caution; failure to heed can result in thunderous eruptions.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Pressure Cook",
      "Explosive Risk"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pressure Cook",
        "rules": "Activate as a bonus action. The Pressure Cooker reduces any bean recipe to perfection in 5 minutes under high pressure. If the cooker is not properly handled, it has a 10% chance of exploding during use."
      },
      {
        "title": "Explosive Risk",
        "rules": "If the Pressure Cooker explodes (on a failed DEX saving throw DC 14), it deals 2d6 thunder damage to all creatures within 10 feet. The cooker is destroyed and cannot be used again."
      }
    ],
    "levelRequirementReason": "This item's safety mechanisms are simple enough for even the novice adventurer to use.",
    "vendorReason": "Beanbean Royal Engineers have a long-standing tradition of providing their kingdom with high-quality kitchenware, including this marvel.",
    "shippingDetail": "Ships via Beanstalk Express; delivery takes up to two weeks due to the cooker's size and fragility.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous, effect lasts until used or explodes",
      "endsWhen": "Explosive damage is dealt or the cooker is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The item's fragility and high demand justify its reduced price compared to its rarity.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T00:23:16.396748+00:00",
    "aiReviewedAt": "2026-07-22T00:23:16.396748+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_recipe_bean_burrito": {
    "id": "beanbean_kingdom_recipe_bean_burrito",
    "name": "Recipe: Beanbean Kingdom Bean Burrito",
    "description": "The Recipe: Beanbean Kingdom Bean Burrito is a culinary marvel that propels you forward with a burst of bean energy. Each bite releases a cloud of gas that stabilizes your footing, and the crispy beans provide an extra boost to your speed for an hour. Despite its playful name, this meal is no joke—it's crafted by the Beanbean Royal Kitchen, renowned for their innovative gastronomy.",
    "price": 1000,
    "icon": "📜",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Propulsion Boost",
      "Gas Stabilizer"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Propulsion Boost",
        "rules": "Eating this burrito grants you a +10 foot increase to your walking speed for one hour. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Gas Stabilizer",
        "rules": "For the duration of the Propulsion Boost, you are immune to being knocked prone due to environmental effects or physical attacks. If you are already prone when this effect begins, it has no additional benefit."
      }
    ],
    "levelRequirementReason": "This recipe is suitable for beginners and those new to the wonders of Beanbean cuisine.",
    "vendorReason": "As purveyors of the finest bean-based meals, Beanbean Kingdom naturally sells this unique culinary creation.",
    "shippingDetail": "Delivered by the trusty Beanstalk Express, ensuring your meal arrives fresh and ready to eat.",
    "usage": {
      "activation": "Instantaneous (no action required)",
      "duration": "1 hour",
      "endsWhen": "Upon expiration of its duration or when consumed",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the unique combination of speed boost and stability, as well as the culinary expertise required to create this dish.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T00:23:21.666678+00:00",
    "aiReviewedAt": "2026-07-22T00:23:21.666678+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_recipe_royal_bean_casserole": {
    "id": "beanbean_kingdom_recipe_royal_bean_casserole",
    "name": "Recipe: Beanbean Kingdom Royal Bean Casserole",
    "description": "This is a cherished recipe from Beanbean Kingdom's royal chefs, a casserole that elevates beans to regal status. It grants you temporary Constitution and Charisma boosts among bean enthusiasts, while also ensuring your flatulence is the noblest in the kingdom, providing stealthy opponents with an intimidating presence.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Royal Boost",
      "Noble Gas"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Royal Boost",
        "rules": "When consumed, this casserole grants +1 to Constitution saving throws for 8 hours. Additionally, it provides advantage on Charisma checks when dealing with bean enthusiasts. The effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Noble Gas",
        "rules": "For the duration of this effect, you are disadvantaged on Stealth checks and gain advantage on Intimidation checks due to your... regal flatulence. This effect ends when you finish a short or long rest."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers as it does not require high-level expertise.",
    "vendorReason": "Beanbean Kingdom's royal chefs are the only ones who can claim the honor of creating such a dish.",
    "shippingDetail": "Shipped via Bean Vault Express, this casserole arrives fresh and ready to be enjoyed.",
    "usage": {
      "activation": "Eaten as an immediate action.",
      "duration": "Until the end of your next short or long rest.",
      "endsWhen": "Completion of a short or long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This dish is priced at 1000 XP as it offers a unique and limited-time culinary experience.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T00:23:31.510663+00:00",
    "aiReviewedAt": "2026-07-22T00:23:31.510663+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_speed_beans": {
    "id": "beanbean_kingdom_speed_beans",
    "name": "Beanbean Kingdom Speed Beans",
    "description": "Beanbean Kingdom Speed Beans are a quirky creation from the Royal Kitchen. These beans, crafted with magic and beans, grant you an extra burst of speed. They make your legs feel as light as a spring breeze, propelling you to incredible heights for a short time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🫘",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Quick Step",
      "Gaseous Distraction"
    ],
    "vendor": "beanbean_kingdom_market",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Quick Step",
        "rules": "You gain a +10 foot bonus to your speed and can Dash as a bonus action once during the duration. This effect lasts for an hour from the time you consume the beans."
      },
      {
        "title": "Gaseous Distraction",
        "rules": "While under the effects of Quick Step, you are at disadvantage on Stealth checks due to the constant flatulence caused by the beans."
      }
    ],
    "levelRequirementReason": "This item is designed for a basic adventurer who can handle minor magical enhancements.",
    "vendorReason": "The Royal Kitchen ensures that these beans are available to the public, allowing all adventurers to benefit from their speed-boosting properties.",
    "shippingDetail": "These beans are carefully packed and shipped overnight via Beanstalk Express for freshness and effectiveness.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "1 hour from consumption",
      "endsWhen": "Duration ends or you consume another set of Speed Beans",
      "charges": "Unlimited"
    },
    "priceReason": "The beans are crafted with magical properties and sourced from a renowned kitchen, making them moderately priced.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T00:23:36.391667+00:00",
    "aiReviewedAt": "2026-07-22T00:23:36.391667+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_wario_beanbag_chair": {
    "id": "beanbean_kingdom_wario_beanbag_chair",
    "name": "Beanbean Kingdom Wario Beanbag Chair",
    "description": "The Beanbean Kingdom Wario Beanbag Chair is a plush seat shaped like Wario's mischievous visage, crafted from bean-filled fabric. This oversized chair promises unparalleled comfort, but its unique design makes it difficult to sneak around. After use, the scent of freshly popped beans clings to your garments for an hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪑",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Beanbag Comfort",
      "Wario's Watchful Eye"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Beanbag Comfort",
        "rules": "When you sit in this chair, you gain a +2 bonus on saving throws made to avoid exhaustion from resting. However, if the chair is occupied by more than one creature at once, you and each additional occupant take 1d4 points of nonlethal damage."
      },
      {
        "title": "Wario's Watchful Eye",
        "rules": "While sitting in this chair, you are not able to make Dexterity (Stealth) checks due to the chair’s resemblance to Wario's face. Additionally, there is a 20% chance per minute that any creature nearby will hear the sound of popping beans and turn to investigate."
      }
    ],
    "levelRequirementReason": "This beanbag chair is designed for comfort and casual use rather than combat or high-level adventuring.",
    "vendorReason": "Beanbean Kingdom is known for their whimsical furniture that brings joy to homes across the Mushroom Kingdom, including this iconic Wario-inspired seating option.",
    "shippingDetail": "Ships via Bean Vault Express, delivering within a week of purchase.",
    "usage": {
      "activation": "Instantaneous when sitting in the chair.",
      "duration": "Until you stand up or leave the chair.",
      "endsWhen": "Upon standing or vacating the chair; additional occupants incur damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The beanbag chair's uncommon rarity and unique design justify its moderate price in XP, offering a fun but balanced addition to any adventurer’s gear.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T00:23:42.351838+00:00",
    "aiReviewedAt": "2026-07-22T00:23:42.351838+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_wario_currency_exchange": {
    "id": "beanbean_kingdom_wario_currency_exchange",
    "name": "Beanbean Kingdom Wario Currency Exchange",
    "description": "The Beanbean Kingdom Wario Currency Exchange is a peculiar device, crafted from polished Wario Coins encased in a golden frame. It allows adventurers to exchange 100 gold pieces for an equal number of chocolate Wario Coins, which can be eaten for temporary hit points. Shopkeepers in the kingdom treat this with amusement, giving you disadvantage on Charisma (Deception) checks. This item is a unique artifact from Beanbean Kingdom, known for its whimsical economic practices.",
    "category": "services",
    "price": 1000,
    "icon": "💱",
    "stock": 7,
    "rarity": "common",
    "effects": [
      "Exchange Gold for Chocolate",
      "Eatable Coins"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exchange Gold for Chocolate",
        "rules": "Activate as an action to exchange 100 gold pieces for 100 chocolate Wario Coins. The coins can be consumed immediately, providing 1d4 temporary hit points per coin eaten. This effect is instant and does not have a duration."
      },
      {
        "title": "Eatable Coins",
        "rules": "Each chocolate Wario Coin provides 1d4 temporary hit points upon consumption. You can eat up to 10 coins in one sitting without penalty, but eating more than this amount results in disadvantage on all Charisma checks until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners as it helps adventurers who are unfamiliar with Wario Coins.",
    "vendorReason": "Beanbean Kingdom is known for its economic peculiarities and this device reflects their whimsical nature.",
    "shippingDetail": "Ships via Bean Vault Express, delivered with a free taste of chocolate Wario Coins as part of the delivery experience.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the unique and whimsical nature of the item, providing a practical yet humorous utility for adventurers.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T00:23:48.175552+00:00",
    "aiReviewedAt": "2026-07-22T00:23:48.175552+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_kingdom_wario_wario_bean": {
    "id": "beanbean_kingdom_wario_wario_bean",
    "name": "Beanbean Kingdom Wario-Wario Bean",
    "description": "The Beanbean Kingdom Wario-Wario Bean is a peculiar relic that amplifies one's inner Wario. It forces you to exclaim 'Wario' at strategic moments, making for quite an amusing and memorable conversation. While it can be entertaining, the bean also subtly increases your strength checks by +1, giving you a burst of Wario-inspired energy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🫘",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Wario's Echo",
      "Boosted Strength"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Beanstalk Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wario's Echo",
        "rules": "When consumed, the bean compels you to say 'Wario' at the beginning of each sentence for 1 hour. This effect imposes disadvantage on Charisma checks and saves if you forget this requirement."
      },
      {
        "title": "Boosted Strength",
        "rules": "For the duration of one long rest, after consuming the bean, you gain +1 to Strength checks, representing a surge of Wario-inspired energy."
      }
    ],
    "levelRequirementReason": "Suitable for beginners due to its humorous and non-combative effects.",
    "vendorReason": "Beanbean Kingdom is known for their quirky and fun items, perfect for those who want a little Wario in their lives.",
    "shippingDetail": "Delivered within three days with Beanstalk Express's reliable service.",
    "usage": {
      "activation": "Eating the bean as a bonus action.",
      "duration": "1 hour, until you finish your next long rest.",
      "endsWhen": "The effect ends when the duration is up or if you consume another Wario-Wario Bean.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced price considering its humorous and non-combative effects, making it a fun addition to any player's arsenal without being overpowered.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T00:23:53.629594+00:00",
    "aiReviewedAt": "2026-07-22T00:23:53.629594+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_koopa_coins": {
    "id": "beanbean_koopa_coins",
    "name": "Koopa Coins",
    "description": "Koopa Coins are a peculiar currency minted during the banking collapse of the Koopa Empire. Crafted from a mysterious metal alloy, these coins whisper ancient secrets to those who hold them long enough. They are sought after by smugglers and rogue academies for their unpredictable value and rumored magical properties.",
    "price": 1000,
    "icon": "💰",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Whispering Secrets",
      "Currency Fluctuation"
    ],
    "vendor": "beanbean",
    "shippedBy": "Bob-omb Rush Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whispering Secrets",
        "rules": "When you hold a Koopa Coin long enough, roll a d6. On a result of 5 or higher, the coin whispers an ancient secret related to the Koopa Empire's collapse, providing valuable intelligence. This effect can only be used once per day."
      },
      {
        "title": "Currency Fluctuation",
        "rules": "Once per short rest, you can activate this coin to trigger a 20% chance of currency fluctuation in nearby markets. If successful, you gain an additional 1d6×5 gold pieces worth of value for the next hour."
      }
    ],
    "levelRequirementReason": "These coins are accessible to adventurers of all levels due to their widespread use in Kivotos black markets.",
    "vendorReason": "Beanbean, known for its extensive network of underground contacts, often deals in the rare and unusual, including these unique Koopa Coins.",
    "shippingDetail": "Due to their magical properties, Koopa Coins require special handling. They are delivered via Bob-omb Rush Delivery with a two-day processing time at an additional cost of 50 XP.",
    "usage": {
      "activation": "Bonus action to activate the whispering secrets or currency fluctuation effect.",
      "duration": "Instantaneous for whispering secrets, lasts one hour for currency fluctuation.",
      "endsWhen": "The effect ends when used or if the coin is exchanged in a market transaction.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the item's rarity, magical properties, and its value in Kivotos black markets.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T00:23:59.696505+00:00",
    "aiReviewedAt": "2026-07-22T00:23:59.696505+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_lucky_coin": {
    "id": "beanbean_lucky_coin",
    "name": "Lucky Beanbean Coin",
    "description": "The Lucky Beanbean Coin is a gleaming golden coin adorned with a whimsical smile. Crafted from enchanted bronze, it whispers tales of fortune and good luck to those who hold it. When you spend this coin in trade, the world seems to align in your favor; the next gold piece you earn is doubled, and for one hour afterward, your Luck modifier increases by 3.",
    "price": 1000,
    "icon": "🪙",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Fortunate Exchange",
      "Lucky Boost"
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fortunate Exchange",
        "rules": "When you spend this coin in trade, the value of the next gold piece you earn is doubled. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Lucky Boost",
        "rules": "For one hour after spending the Lucky Beanbean Coin, your Luck modifier increases by 3. This benefit ends if you spend more than one gold coin in a single day or at the start of your next short rest."
      }
    ],
    "levelRequirementReason": "The coin's luck is accessible to all adventurers as it requires no particular skill or level.",
    "vendorReason": "Beanbean, a jovial merchant known for their knack of finding the best deals and luckiest items, naturally sells this coin.",
    "shippingDetail": "The coin is carefully wrapped in enchanted cloth to preserve its magical properties during transit.",
    "usage": {
      "activation": "Activating this item requires spending it as part of a trade or purchase.",
      "duration": "Fortunate Exchange lasts until the end of your next long rest. Lucky Boost lasts for one hour after spending the coin.",
      "endsWhen": "Fortunate Exchange ends when you spend more than one gold coin in a single day or at the start of your next short rest; Lucky Boost ends upon completion of the duration.",
      "charges": "Unlimited, as the coin's magic resets daily."
    },
    "priceReason": "The price reflects the coin's rare enchanted properties and its ability to enhance fortune in unique ways.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-22T00:24:05.659539+00:00",
    "aiReviewedAt": "2026-07-22T00:24:05.659539+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_metal_tongue": {
    "id": "beanbean_metal_tongue",
    "name": "Tongue of the Iron Legion",
    "description": "The Tongue of the Iron Legion is a metallic device that resembles a large, intricately crafted tongue with gears and cogs visible beneath its surface. It whispers in low tones when activated, disrupting nearby spellcasters and enhancing melee attacks. Only those who have fought under the banner of the Iron Legion can wield it without risk.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Disrupting Spellcasting",
      "Enhanced Melee Attacks"
    ],
    "vendor": "beanbean",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Disrupting Spellcasting",
        "rules": "When activated, the Tongue emits a low hum that imposes disadvantage on all spell saving throws within 30 feet for 1 minute. This effect ends if an attack hits or misses with a melee weapon."
      },
      {
        "title": "Enhanced Melee Attacks",
        "rules": "Upon activation, the wielder gains a +2 bonus to their next melee attack and all subsequent attacks until they miss with a melee weapon. The device requires a bonus action to activate and recharges after 10 minutes of rest."
      }
    ],
    "levelRequirementReason": "Requires experience in combat and understanding of the Iron Legion's fighting style.",
    "vendorReason": "Beanbean, a vendor with deep ties to military artifacts, carries this item due to its historical significance and practical battlefield utility.",
    "shippingDetail": "Delivered within 3 days via Warp Whistle Transit's express courier service.",
    "usage": {
      "activation": "Bonus action to activate; recharges after 10 minutes of rest.",
      "duration": "Until the wielder misses a melee attack or until it is destroyed.",
      "endsWhen": "The effect ends if an attack hits or misses with a melee weapon, or if the device breaks in combat.",
      "charges": "Unlimited; recharges after 10 minutes of rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its unique abilities and historical value.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T00:24:11.388194+00:00",
    "aiReviewedAt": "2026-07-22T00:24:11.388194+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_mushroom_mantle": {
    "id": "beanbean_mushroom_mantle",
    "name": "Fungal Mantle of Whispering Roots",
    "description": "The Fungal Mantle of Whispering Roots is a hooded cloak woven from bioluminescent fungi. Its roots whisper secrets to those who listen closely, and its scent confounds enemies into disarray. Crafted by the Mushroom Kingdom's Fungi Guilds, this mantle requires attunement with a mushroom cultist for its fungal magic to truly thrive.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Root Whisper",
      "Fungal Confusion"
    ],
    "vendor": "beanbean",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Root Whisper",
        "rules": "While wearing the mantle, you gain advantage on Stealth checks when moving through dense undergrowth. This effect lasts until you enter a place with direct sunlight for more than an hour."
      },
      {
        "title": "Fungal Confusion",
        "rules": "For 1 round after entering combat, any hostile creature within 30 feet of you must make a Wisdom saving throw (DC 12) or become confused as it is overwhelmed by the mantle's fungal scent. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The complex attunement process and the item's unique magical properties require a minimum character level of 4.",
    "vendorReason": "As a vendor specializing in enchanted items, beanbean offers rare and unique wares like the Fungal Mantle.",
    "shippingDetail": "Due to its fragile bioluminescent properties, the mantle is shipped within a specially insulated package to ensure it arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect until exposed to sunlight for more than an hour.",
      "duration": "Lasts until exposed to direct sunlight for over an hour or used once per rest.",
      "endsWhen": "Exposure to direct sunlight for more than an hour or use during a short/long rest.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The mantle's intricate crafting and magical properties justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T00:24:17.376861+00:00",
    "aiReviewedAt": "2026-07-22T00:24:17.376861+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_peasley_coins_pouch": {
    "id": "beanbean_peasley_coins_pouch",
    "name": "Peasley Scandal Pouch",
    "description": "The Peasley Scandal Pouch is a small, intricately crafted leather pouch adorned with the emblem of Mushroom Regency. When opened, it whispers secrets about hidden locations within Beanbean Kingdom and grants temporary immunity to corruption. However, its use causes minor paranoia among those who carry it.",
    "price": 1000,
    "icon": "🔮",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Reveals hidden locations",
      "Temporary immunity to corruption"
    ],
    "vendor": "beanbean",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Locations",
        "rules": "When activated as an action, the pouch reveals a secret location within Beanbean Kingdom. The effect lasts until the end of the next long rest."
      },
      {
        "title": "Immunity to Corruption",
        "rules": "The user gains temporary immunity to corruption effects for 1 hour upon activation. This immunity can be used once per short rest and is negated by exposing the pouch's origin during a diplomatic event."
      }
    ],
    "levelRequirementReason": "This item provides useful but not overly powerful benefits, suitable for players of all levels.",
    "vendorReason": "Beanbean is known for its connections to Mushroom Regency and has access to unique items like this pouch.",
    "shippingDetail": "Ships within the Beanbean Kingdom with same-day delivery, thanks to Lakitu's efficient drone network.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next long rest",
      "endsWhen": "Exposure during diplomatic events or upon completion of its duration",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's uncommon rarity, unique lore, and the strategic advantage it offers without being game-breaking.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T00:24:22.402453+00:00",
    "aiReviewedAt": "2026-07-22T00:24:22.402453+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_peasley_letter": {
    "id": "beanbean_peasley_letter",
    "name": "Peasleys Secret Letter",
    "description": "Peasleys Secret Letter is a wax-sealed parchment with a grand emblem of the Beanbean Royal Family. When opened, it whispers cryptic hints about hidden Beanbean secrets and reveals a route through the most impenetrable parts of the royal gardens. This letter grants access to a clandestine meeting with a high-ranking official who can provide critical assistance in resolving urgent matters.",
    "price": 1000,
    "icon": "✉",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Whispers of Hidden Secrets",
      "Clandestine Meeting"
    ],
    "vendor": "beanbean",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Whispers of Hidden Secrets",
        "rules": "When opened, the letter emits a faint whisper that reveals one piece of crucial information about hidden Beanbean secrets. This effect is instantaneous and does not require any action from the user. The listener must be within 10 feet of the letter to hear it. Once used, the letter remains silent thereafter."
      },
      {
        "title": "Clandestine Meeting",
        "rules": "Opening the letter allows the bearer to meet with a high-ranking Beanbean official in secret. This meeting is instantaneous and does not require any action from the user once the letter is opened. The meeting lasts until both parties agree to end it, but no longer than 1 hour."
      }
    ],
    "levelRequirementReason": "The complexities of accessing hidden information and arranging clandestine meetings necessitate a certain level of experience.",
    "vendorReason": "Beanbean is the official keeper of such royal secrets and ensures that only those with proper credentials can access them.",
    "shippingDetail": "The courier delivers the letter within a week, but the package must be collected personally from the Dry Bones location in the Royal City.",
    "usage": {
      "activation": "Instantaneous when opened",
      "duration": "Until both parties agree to end the meeting or secret information is revealed",
      "endsWhen": "The letter is destroyed after use or if the bearer chooses to end the meeting prematurely",
      "charges": "Unlimited"
    },
    "priceReason": "This item's rarity and unique utility justify its moderate price in XP.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:24:28.443025+00:00",
    "aiReviewedAt": "2026-07-22T00:24:28.443025+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_pipe_tether": {
    "id": "beanbean_pipe_tether",
    "name": "Pipebound Tether of the Koopa Postal",
    "description": "The Pipebound Tether of the Koopa Postal is an intricate brass pipe adorned with Koopa insignias, crafted by the postal corps to streamline delivery routes. It can detect hidden messages within pipes and mark locations for future deliveries, enhancing efficiency in the underground network.",
    "price": 1000,
    "icon": "📦",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Detect Hidden Messages",
      "Mark Delivery Locations"
    ],
    "vendor": "beanbean",
    "shippedBy": "Koopa Postal Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Detect Hidden Messages",
        "rules": "When used in a pipe junction, this tether grants you advantage on Intelligence (Investigation) checks to detect hidden messages or traps within the pipe network. It requires 30 seconds to activate and connect to the nearest junction."
      },
      {
        "title": "Mark Delivery Locations",
        "rules": "You can use the tether to mark a location for future deliveries, which grants you a +2 bonus on Dexterity (Stealth) checks made within 5 feet of that location. This effect lasts until you or another creature moves more than 30 feet away from it."
      }
    ],
    "levelRequirementReason": "This item is designed for beginner adventurers to assist in their initial forays into underground networks.",
    "vendorReason": "Beanbean, known for its postal services and delivery logistics, sells this tether as a tool for efficient package routing.",
    "shippingDetail": "Ships directly from the Koopa Postal headquarters with next-day delivery within pipe networks.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until interrupted)",
      "endsWhen": "The tether is removed from a pipe junction or the creature moves more than 30 feet away.",
      "charges": "Unlimited"
    },
    "priceReason": "This item's enhanced functionality and Koopa Postal's reputation justify its higher price point.",
    "priceOriginal": 400,
    "priceReviewedAt": "2026-07-22T00:24:33.788863+00:00",
    "aiReviewedAt": "2026-07-22T00:24:33.788863+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_royal_bean_counting": {
    "id": "beanbean_royal_bean_counting",
    "name": "Beanbean Royal Bean Counting Service",
    "description": "Beanbean Royal Bean Counting Service counts your gold with precision and finds hidden coins you thought lost. This service ensures no treasure is left uncounted, providing a certificate of authenticity for your financial peace of mind.",
    "category": "services",
    "price": 1000,
    "icon": "💰",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Precise Gold Count",
      "Hidden Coins Found"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Royal Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Precise Gold Count",
        "rules": "As an action, this service counts up to 100 gold pieces in a single stack. It provides you with the exact count within one minute, revealing any discrepancies or hidden coins."
      },
      {
        "title": "Hidden Coins Found",
        "rules": "The Beanbean Royal Accountants find an additional 10% of any gold that has been overlooked by your usual methods (minimum increase: +5 gold pieces). This effect is instantaneous and requires no further action from the user. No save DC or saving throw is required."
      }
    ],
    "levelRequirementReason": "This service can be used by anyone to ensure their wealth is accurately accounted for.",
    "vendorReason": "Beanbean Royal Accountants are renowned throughout the realm for their precision and reliability in financial matters.",
    "shippingDetail": "Delivered by trusted Royal Couriers, ensuring your gold is counted under secure conditions with a delivery time of two days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are exhausted or the stack exceeds 100 gold pieces",
      "charges": "Unlimited, but limited to one stack per day"
    },
    "priceReason": "The service is priced reasonably for its efficiency and precision, ensuring no valuable coins go uncounted.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T00:24:38.958915+00:00",
    "aiReviewedAt": "2026-07-22T00:24:38.958915+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_royal_bean_counting_premium": {
    "id": "beanbean_royal_bean_counting_premium",
    "name": "Beanbean Royal Bean Counting (Premium)",
    "description": "The Beanbean Royal Bean Counting (Premium) is an intricate device crafted by Beanbean Royal Accountants, exquisitely detailed with gold leaf and precious gemstones. It not only counts your beans with unparalleled precision but also provides a detailed report that can influence negotiations or decisions. The device itself is a status symbol, often seen in the hands of merchants and accountants seeking to project an image of wealth and meticulousness.",
    "category": "premium",
    "price": 1000,
    "icon": "💰",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Bean Counting",
      "Reputation Boost"
    ],
    "vendor": "beanbean_kingdom",
    "shippedBy": "Bean Vault Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Bean Counting",
        "rules": "When activated, this device counts your beans with 95% accuracy. It also reveals an additional 10% of the total count as a hidden bonus, but charges you a fee equal to 8% of the counted amount. The device must be used in a quiet environment where it can be placed on a flat surface for optimal performance."
      },
      {
        "title": "Reputation Boost",
        "rules": "For one day after using this device, your reputation improves within the local merchant community by +2 to Persuasion checks. This effect is cumulative with other similar benefits, but you must continue to maintain proper usage and etiquette in public."
      }
    ],
    "levelRequirementReason": "The device requires a user who can handle its intricate mechanisms.",
    "vendorReason": "Beanbean Royal Accountants are known for their precision and reliability, which makes them the perfect vendor for this high-quality counting tool.",
    "shippingDetail": "Ships via Bean Vault Express with a delivery time of one day. Requires special handling to ensure the device arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used up all charges or destroyed",
      "charges": "Recharges after 24 hours"
    },
    "priceReason": "The device is priced at 1000 XP due to its premium craftsmanship and the additional reputation boost it offers.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T00:24:44.971610+00:00",
    "aiReviewedAt": "2026-07-22T00:24:44.971610+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_scarlet_crown": {
    "id": "beanbean_scarlet_crown",
    "name": "Crown of the Broken Throne",
    "description": "The Crown of the Broken Throne is a regal relic encrusted with rubies that shimmer like spilled blood. It whispers tales of its wearer’s past diplomatic prowess and grants them an unparalleled +4 to leadership checks, making them the heart of any group. However, it can cause the wearer's hands to visibly tremble during combat unless they have extensive experience in the field of diplomacy.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏰",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Leadership Boost",
      "Combat Tremors"
    ],
    "vendor": "beanbean",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Leadership Boost",
        "rules": "Activates as a bonus action, providing the wearer with a +4 bonus to leadership checks. This effect lasts until the end of the wearer's next turn. If the wearer does not have at least two successful diplomatic checks within the last week, they must succeed on a DC 15 Wisdom saving throw or suffer from mental unraveling for 1 hour."
      },
      {
        "title": "Combat Tremors",
        "rules": "The crown causes visible tremors in the wearer’s hands during combat. This effect is active as long as the wearer is engaged in melee combat and does not have at least two successful diplomatic checks within the last week. The tremors impose disadvantage on attack rolls made by the wearer."
      }
    ],
    "levelRequirementReason": "The Crown requires significant experience to wield its powers effectively, ensuring only those who have earned their place in leadership can use it.",
    "vendorReason": "Beanbean is known for their vast collection of fabled relics and artifacts, including this crown’s heritage from the Prince Peasley scandal.",
    "shippingDetail": "Ships with a note from the Onyx Hand’s courier, ensuring safe delivery and authenticity.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of the wearer's next turn",
      "endsWhen": "The effect ends if the crown is removed or if the wearer fails a saving throw due to lack of diplomatic experience",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its limited availability and the significant experience required to use it effectively.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:24:51.150321+00:00",
    "aiReviewedAt": "2026-07-22T00:24:51.150321+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_shadowfell_keychain": {
    "id": "beanbean_shadowfell_keychain",
    "name": "Shadowfell Keychain of the Onyx Hand",
    "description": "The Shadowfell Keychain of the Onyx Hand is a gnarled keychain crafted from ancient onyx, its surface etched with runes that glow faintly in the dark. It can unlock hidden portals to the Shadowfell and serves as a potent talisman against corruption, though overuse will inevitably lead to psychic strain.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔒",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Unlock Portal",
      "Corruption Detection"
    ],
    "vendor": "beanbean",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Portal",
        "rules": "Activates with an action. Grants access to one hidden portal in the Shadowfell, usable once per day."
      },
      {
        "title": "Corruption Detection",
        "rules": "When used within a magical aura or area of corruption, triggers a 50% chance to detect it. No save is required."
      }
    ],
    "levelRequirementReason": "The keychain’s power is subtle and focused, making it accessible to lower-level characters.",
    "vendorReason": "Beanbean specializes in rare and magical items, including those that offer unique access to other planes of existence.",
    "shippingDetail": "Priority delivery ensures swift arrival from Orangus Cornelius’s workshop in the Shadowfell's depths.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Once used or after 72 hours of non-use",
      "charges": "1 use per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its utility and limited daily usage.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T00:24:55.938703+00:00",
    "aiReviewedAt": "2026-07-22T00:24:55.938703+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_team_rock_item": {
    "id": "beanbean_team_rock_item",
    "name": "Remi Coil Airship Boost",
    "description": "The Remi Coil Airship Boost is a patent-enhanced propulsion module crafted by Team Rocket. This sleek, metallic core integrates seamlessly into any airship, instantly doubling its speed and range across all conditions. However, in high-pressure zones, there's a 10% chance it will trigger a system crash, causing a brief delay. Each successful activation grants bonus XP for every 1000 meters traveled, making this module invaluable during extended flights.",
    "price": 1000,
    "icon": "🚀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Doubles airship speed and range",
      "May cause a system crash in high-pressure zones"
    ],
    "vendor": "beanbean",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Doubled Performance",
        "rules": "This effect increases the airship's speed and range by 100% for the duration of one short rest or until disabled. It provides an additional bonus XP equal to 5% of distance traveled in meters, capped at 200 XP per use."
      },
      {
        "title": "System Crash Risk",
        "rules": "In high-pressure zones, there is a 10% chance (DC 14 Dexterity saving throw) that the module will trigger a system crash. The airship is incapacitated for 1 minute and cannot be moved until repaired."
      }
    ],
    "levelRequirementReason": "This item can be used by any character, enhancing the efficiency of airships for all adventurers.",
    "vendorReason": "Beanbean specializes in innovative items that enhance travel and exploration, making this module a perfect fit for their inventory.",
    "shippingDetail": "Delivered swiftly by the relentless Piranha Plant Post, ensuring your airship is ready to soar high and fast upon arrival.",
    "usage": {
      "activation": "A bonus action to activate the module's effects for a duration of one short rest or until disabled.",
      "duration": "Until disabled or at the end of a short rest",
      "endsWhen": "Disabling the module, ending a short rest, or damage being dealt to it",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The balanced XP price reflects its moderate level of enhancement and utility without overshadowing more powerful items.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:25:02.254206+00:00",
    "aiReviewedAt": "2026-07-22T00:25:02.254206+00:00",
    "aiReviewVersion": 1
  },
  "beanbean_treasure_inkwell": {
    "id": "beanbean_treasure_inkwell",
    "name": "Inkwell of Whispering Scribes",
    "description": "The Inkwell of Whispering Scribes is a delicate artifact crafted from polished obsidian and etched with runes. It contains an ancient vial sealed with the last whispered decree of the Onyx Hand, granting its user a fleeting connection to the scribe’s legacy. This inkwell grants +2d4 insight bonus to spellcasting checks when used on parchment, but it requires the user to be at least a 1st-level spellcaster and must rest for one day after each use due to the mystical energy it consumes.",
    "price": 1000,
    "icon": "🖋",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Ink Bonus",
      "Daily Rest Required"
    ],
    "vendor": "beanbean",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ink Bonus",
        "rules": "When activated, this inkwell grants a +2d4 insight bonus to spellcasting checks when used on parchment. The user must be at least a 1st-level spellcaster and spend one minute writing with it. This effect is instantaneous."
      },
      {
        "title": "Daily Rest Required",
        "rules": "After using the inkwell, the user must rest for one day before using it again due to the mystical energy consumed during its use. The inkwell can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Users need at least a 1st-level spellcaster to harness the arcane properties of this inkwell.",
    "vendorReason": "Beanbean, known for their extensive inventory of magical curiosities and artifacts, offers the Inkwell of Whispering Scribes as part of their collection of rare and mystical items.",
    "shippingDetail": "Delivered via Warp Whistle Transit, this inkwell arrives with a special delivery note from the Onyx Hand’s personal courier, ensuring its arrival is swift and secure.",
    "usage": {
      "activation": "Used as an action to write on parchment for spellcasting checks.",
      "duration": "Instantaneous effect upon writing.",
      "endsWhen": "The inkwell requires a full day of rest before it can be used again.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The price is adjusted to reflect the uncommon rarity and mystical properties, making it accessible yet valuable for spellcasters seeking an edge in their craft.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T00:25:08.667096+00:00",
    "aiReviewedAt": "2026-07-22T00:25:08.667096+00:00",
    "aiReviewVersion": 1
  },
  "beholder_eye_beam_focus": {
    "id": "beholder_eye_beam_focus",
    "name": "Beholder Eye-Beam Focus Surgery",
    "description": "This surgically implanted lens mimics a Beholder's eye and focuses your gaze into a concentrated ray of pure energy. Crafted by Xanathar's Surgeon, this device enhances your spellcasting, allowing you to channel the power of a behemoth's eyesight directly through your own.",
    "price": 5000,
    "icon": "👁️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Ray spells gain +2 to attack rolls",
      "Increase save DCs by +1 for ray spells"
    ],
    "vendor": "eye_doctor",
    "shippedBy": "Disintegration Beam Express",
    "levelRequirement": 14,
    "effectDetails": [
      {
        "title": "Enhanced Ray Spells",
        "rules": "Activation: On casting a ray spell, as an action. Duration: Concentration up to 1 hour or until the spell ends. Ends When: Dismissed by the user or when concentration is lost."
      },
      {
        "title": "Increased Save DCs",
        "rules": "Instantaneous activation; this effect applies automatically without a saving throw. No save DC limit, but only one increase per spell cast each day."
      }
    ],
    "levelRequirementReason": "Requires significant magical and physical prowess to undergo the surgery.",
    "vendorReason": "Eye_Doctor specializes in complex surgeries that enhance magical abilities, including Beholder Eye-Beam Focus Surgery.",
    "shippingDetail": "Ships via a Disintegration Beam Express for immediate delivery to your doorstep.",
    "usage": {
      "activation": "On casting a ray spell as an action",
      "duration": "Concentration up to 1 hour or until the spell ends",
      "endsWhen": "Dismissed by the user or when concentration is lost",
      "charges": "Unlimited uses, recharges after a long rest"
    },
    "priceReason": "Balanced as an expensive but fair price for such an advanced and powerful magical enhancement.",
    "priceOriginal": 335000,
    "priceReviewedAt": "2026-07-22T00:25:13.929002+00:00",
    "aiReviewedAt": "2026-07-22T00:25:13.929002+00:00",
    "aiReviewVersion": 1
  },
  "bioluminescent_fungus_lantern": {
    "id": "bioluminescent_fungus_lantern",
    "name": "Bioluminescent Fungus Lantern (Light)",
    "description": "This lantern is crafted from a rare species of bioluminescent fungi that thrives in the darkest caverns. Its light not only illuminates but also heals minor wounds, restoring vitality to those who traverse its glow.",
    "price": 1000,
    "icon": "🍄",
    "stock": 2,
    "rarity": "godly",
    "effects": [
      "Light",
      "Healing Glow"
    ],
    "vendor": "underdark_market",
    "shippedBy": "Spore Pod Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bright Light",
        "rules": "The lantern emits bright light in a 30-foot radius and dim light for an additional 30 feet. This effect is active as long as the lantern remains lit."
      },
      {
        "title": "Minor Healing",
        "rules": "All creatures within the bright light of the lantern gain temporary hit points equal to your proficiency bonus + your Constitution modifier (minimum of 1) at the start of their turns. This effect ends when they leave the area or if the lantern goes out."
      }
    ],
    "levelRequirementReason": "A basic adventurer can handle the task of carrying this lantern.",
    "vendorReason": "Mycoid Cultivators are known for their expertise in deep underground fungi, including crafting such unique items.",
    "shippingDetail": "Shipped via Spore Pod Express, ensuring the lantern arrives safely and remains active.",
    "usage": {
      "activation": "Instantaneous activation by touching the lantern to light it.",
      "duration": "The effect is continuous as long as the lantern remains lit.",
      "endsWhen": "The lantern goes out or is destroyed.",
      "charges": "Unlimited uses, but requires a short rest to recharge."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the unique crafting and deep-underground resources required for its creation.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-22T00:25:18.968066+00:00",
    "aiReviewedAt": "2026-07-22T00:25:18.968066+00:00",
    "aiReviewVersion": 1
  },
  "biomechanical_symbiote": {
    "id": "biomechanical_symbiote",
    "name": "Biomechanical Symbiote (Living Armor)",
    "description": "The Biomechanical Symbiote is a living armor that seamlessly integrates with its host. Crafted from advanced biomechanics, it enhances both physical prowess and resilience. This symbiotic organism not only grants +2 to Strength and Dexterity but also actively repairs any damage to the host's body over time, ensuring durability in battle.",
    "price": 440000,
    "icon": "🦠",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "+2 to Strength and Dexterity",
      "Self-repairs over time"
    ],
    "vendor": "BioForge Labs",
    "shippedBy": "Symbiont Pod",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Self-Repair",
        "rules": "The symbiote continuously repairs damage to the host's body. It restores 1d6 hit points at the start of each of the host’s turns, provided that the host is wearing light armor or no armor. This effect has a limit of one use per hour."
      },
      {
        "title": "+2 to Strength and Dexterity",
        "rules": "The symbiote enhances the host's physical abilities by +2 to both Strength and Dexterity. The enhancement is passive and applies at all times while the symbiote is active within the host’s body."
      }
    ],
    "levelRequirementReason": "Only those with significant experience can safely integrate such a complex and powerful biomechanical organism.",
    "vendorReason": "As creators of the Biomechanical Symbiote, BioForge Labs is the only vendor trusted to supply this advanced technology.",
    "shippingDetail": "The symbiotic organism requires a special pod for safe transport. The pod provides additional protection during transit and ensures the symbiote remains dormant until it can be integrated into its host.",
    "usage": {
      "activation": "Passive effect, activated upon integration with the host’s body",
      "duration": "Instantaneous activation; continuous effect while within the host's body",
      "endsWhen": "The symbiote ceases to function if separated from the host for more than an hour or if the host dies.",
      "charges": "Unlimited, as long as it remains integrated"
    },
    "priceReason": "Reflects the advanced technology and specialized expertise required in its creation.",
    "priceOriginal": 440000,
    "priceReviewedAt": "2026-07-22T00:25:25.079923+00:00",
    "aiReviewedAt": "2026-07-22T00:25:25.079923+00:00",
    "aiReviewVersion": 1
  },
  "black_hole_in_a_jar": {
    "id": "black_hole_in_a_jar",
    "name": "Black Hole in a Jar",
    "description": "A sturdy mason jar houses a microcosmic black hole, its surface rippling with dark energy. Crafted by The Astrophysicist in a lab where stars are born and die, this jar contains a fragment of an ancient cosmic entity. It can be opened to suck in everything within 20 feet without any saving throw, or closed as a pet that obeys simple commands.",
    "category": "consumables",
    "price": 1000,
    "icon": "🫙",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Suction Zone",
      "Pet Companion"
    ],
    "vendor": "celestial_bodies",
    "shippedBy": "Gravity Well",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Suction Zone",
        "rules": "Activation: A standard action; Range: 20 feet; Area: Everything within the specified range is drawn into the jar, destroyed, and cannot escape. No saving throw applies. This effect has no duration but can be used once per long rest."
      },
      {
        "title": "Pet Companion",
        "rules": "Activation: An object interaction; Duration: Until closed again or until the black hole is destroyed; Save DC: 15; The black hole behaves as a familiar obeying simple commands. It does not gain intelligence, but it can be commanded to perform tasks that do not harm itself."
      }
    ],
    "levelRequirementReason": "This item requires at least level 1 to use safely, ensuring the wielder has basic understanding of its power.",
    "vendorReason": "Celestial Bodies specializes in rare and powerful cosmic artifacts like this jar, making it their natural vendor.",
    "shippingDetail": "The jar is carefully packed with specialized gravity-nullifying materials to prevent any accidental activation during transit.",
    "usage": {
      "activation": "A standard action for opening or closing the jar; an object interaction for commanding the black hole familiar.",
      "duration": "Instantaneous when opened, until closed again; Until closed or destroyed for the pet companion effect.",
      "endsWhen": "Jar is resealed, used up in a destructive act, or destroyed by force",
      "charges": "Unlimited charges"
    },
    "priceReason": "This price reflects its rarity and the knowledge required to safely handle such an artifact.",
    "priceOriginal": 68000000,
    "priceReviewedAt": "2026-07-22T00:25:31.028266+00:00",
    "aiReviewedAt": "2026-07-22T00:25:31.028266+00:00",
    "aiReviewVersion": 1
  },
  "black_paint_of_emo_introspection": {
    "id": "black_paint_of_emo_introspection",
    "name": "Black Paint of Emo Introspection",
    "description": "The Black Paint of Emo Introspection is a thick, glossy paint that seeps into your very skin, turning it an eerie shade of black. Dark Elves Paint Co.'s masterpiece captures the essence of introspective melancholy. Before each long rest, you must compose a poem in its honor or risk feeling perpetually unsettled. Your shadow grows more dramatic, casting darker and more pronounced outlines.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Dramatic Shadow",
      "Melancholic Poetry"
    ],
    "vendor": "dark_elves_paint_shop",
    "shippedBy": "Shadow Drop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Dramatic Shadow",
        "rules": "You gain a +1 bonus to saving throws against fear effects. Your natural shadow lengthens and darkens, providing advantage on Stealth checks in dim light."
      },
      {
        "title": "Melancholic Poetry",
        "rules": "Before each long rest, you must compose a poem of at least 20 lines that reflects deep introspection or risk being restless for the next hour. This effect is instantaneous and does not require an action."
      }
    ],
    "levelRequirementReason": "This item requires no specific level as it can be used by any character to explore their inner emotions.",
    "vendorReason": "Dark Elves Paint Co. is known for capturing the essence of melancholy and introspection, making this paint a natural addition to their inventory.",
    "shippingDetail": "Ships under cover of darkness; arrives by nightfall.",
    "usage": {
      "activation": "Passive effect until next long rest.",
      "duration": "Instantaneous at each long rest, lasts until the next.",
      "endsWhen": "Restlessness if you do not compose a poem before the next long rest. Ends upon death or removal of paint.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its uncommon status and unique utility, providing both defensive benefits and thematic roleplaying opportunities without being overpowered.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T00:25:36.710812+00:00",
    "aiReviewedAt": "2026-07-22T00:25:36.710812+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_holy_bread_recipe": {
    "id": "blessed_order_holy_bread_recipe",
    "name": "Recipe: Blessed Order Holy Bread",
    "description": "The Blessed Order Holy Bread Recipe is a sacred text that teaches bakers how to craft divine loaves imbued with protective and healing powers. Made by the Order Bakers, this recipe requires only blessed ingredients and holy water for its creation. The bread glows faintly as it channels divine energy, protecting against undead and fiends while also providing a nourishing meal.",
    "price": 1000,
    "icon": "🍞",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Holy Protection",
      "Radiant Healing"
    ],
    "vendor": "blessed_order_chapel",
    "shippedBy": "Sacred Slice Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holy Protection",
        "rules": "Activates when the bread is consumed. Grants advantage on saving throws against undead and fiends for 1 hour. Ends if consumed or if the eater is no longer aligned with good."
      },
      {
        "title": "Radiant Healing",
        "rules": "Eating the bread heals 2d6 radiant hit points upon consumption, providing nourishment for 4 hours thereafter. The effect ends when the eater finishes their next long rest."
      }
    ],
    "levelRequirementReason": "Suitable for beginners to learn and apply the recipe's divine protection.",
    "vendorReason": "The Order Bakers of Blessed Chapel are known for their sacred recipes and have been entrusted with this holy text.",
    "shippingDetail": "Delivered via a special scroll that ensures the recipe remains intact during transit.",
    "usage": {
      "activation": "Eating the bread upon creation triggers these effects.",
      "duration": "Holy Protection lasts for 1 hour, Radiant Healing ends after a long rest.",
      "endsWhen": "Effects end when consumed or if the eater's alignment changes to neutral or evil.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a rare recipe that provides both protection and healing, making it valuable but not overpowered.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T00:25:42.157405+00:00",
    "aiReviewedAt": "2026-07-22T00:25:42.157405+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_holy_water_dispenser": {
    "id": "blessed_order_holy_water_dispenser",
    "name": "Blessed Order Holy Water Dispenser",
    "description": "The Blessed Order Holy Water Dispenser is a compact, brass vessel with a frosted glass spout and an etched logo of the Sacred Flame. It dispenses holy water that not only blesses your cooking but also purifies any ingredient you add to it. The dispenser's holy essence is said to originate from the very heart of the Blessed Order’s sanctuary, making each drop imbued with divine power.",
    "category": "equipment",
    "price": 1000,
    "icon": "💧",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Holy Blessing",
      "Purifying Ingredient"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holy Blessing",
        "rules": "When you activate this item as a bonus action, it dispenses holy water that blesses your cooking. Undead within 5 feet of the food are repulsed and must make a DC 13 Constitution saving throw or be pushed away from the meal for 1 minute."
      },
      {
        "title": "Purifying Ingredient",
        "rules": "As an action, you can pour holy water into any ingredient. The ingredient is purified, removing all magical corruption or poison effects. This effect does not affect living creatures. Once per short rest, you may use this feature to purify a single ingrediant."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and travelers who need divine aid in their culinary endeavors without the complexity of higher-level magic.",
    "vendorReason": "The Blessed Order Holy Water Co. has long been trusted to provide believers with holy water imbued with divine power, making this dispenser a natural addition to their offerings.",
    "shippingDetail": "Ships via the Holy Procession, delivered within one week of order placement.",
    "usage": {
      "activation": "Bonus action or action (to pour into ingredients)",
      "duration": "Instantaneous for holy blessing; until dispensed purifying ingredient is used",
      "endsWhen": "Charges are expended or the item is destroyed",
      "charges": "Unlimited, as long as you have a supply of holy water"
    },
    "priceReason": "The price reflects the divine craftsmanship and the material used to ensure purity and efficacy.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T00:25:48.324406+00:00",
    "aiReviewedAt": "2026-07-22T00:25:48.324406+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_holy_water_distiller": {
    "id": "blessed_order_holy_water_distiller",
    "name": "Blessed Order Holy Water Distiller",
    "description": "The Blessed Order Holy Water Distiller is a small, alchemically refined contraption crafted by the Order Alchemists. Its pristine brass frame and intricate gears hum with divine energy as it infuses bread with blessings. This device not only enhances religious knowledge but also purifies water, making it a sacred tool for rituals and healing.",
    "category": "equipment",
    "price": 1000,
    "icon": "💧",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Infuse Bread with Blessings",
      "Purify Water"
    ],
    "vendor": "blessed_order_chapel",
    "shippedBy": "Sacred Steam Set",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Infuse Bread with Blessings",
        "rules": "As an action, you can use the Blessed Order Holy Water Distiller to infuse a piece of bread with divine blessings. This grants the user +1 proficiency bonus to Religion checks for up to one hour. The device requires a 5-minute period of concentration and recharges after being blessed by a cleric or paladin."
      },
      {
        "title": "Purify Water",
        "rules": "When used on water, the Distiller can purify it, dealing 1d4 radiant damage to any disease or poison affecting the drinker. This effect is instantaneous and requires no action from the user. The water must be consumed within one hour of purification."
      }
    ],
    "levelRequirementReason": "A novice can understand the basics of religious knowledge and the rudiments of alchemy, making this tool accessible to all adventurers.",
    "vendorReason": "The Blessed Order Chapel is known for its sacred relics and tools that aid in divine rituals, and this Distiller fits perfectly into their offerings.",
    "shippingDetail": "Delivered via a Sacred Steam Set, ensuring the device arrives pristine and ready to use.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous; Infusion lasts for one hour",
      "endsWhen": "The effect ends when the hour passes or the bread is consumed",
      "charges": "Unlimited"
    },
    "priceReason": "At 1,000 XP, this item provides a significant religious and healing benefit without overpricing.",
    "priceOriginal": 9000,
    "priceReviewedAt": "2026-07-22T00:25:54.315770+00:00",
    "aiReviewedAt": "2026-07-22T00:25:54.315770+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_holy_water_flask": {
    "id": "blessed_order_holy_water_flask",
    "name": "Blessed Order Holy Water Flask",
    "description": "The Blessed Order Holy Water Flask is a small, intricately crafted glass flask filled with water blessed by the devout monks of the Blessed Order. The water's holy essence can be seen shimmering faintly within its depths, and it is said to possess sanctified power capable of repelling evil. This sacred item can deal 2d6 radiant damage to fiends and undead upon consumption, or bless a small area (10-foot radius) for one hour by pouring the water.",
    "category": "consumables",
    "price": 1000,
    "icon": "💧",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Holy Water",
      "Area Blessing"
    ],
    "vendor": "blessed_order_sanctum",
    "shippedBy": "Order Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holy Water",
        "rules": "Consume this flask to deal 2d6 radiant damage to fiends and undead within reach. This effect is instantaneous and does not require action."
      },
      {
        "title": "Area Blessing",
        "rules": "By pouring the holy water, you can bless a small area (10-foot radius) for one hour. Creatures within the area gain resistance to poison damage until the end of their next long rest. This effect is used as an action and lasts for the duration specified."
      }
    ],
    "levelRequirementReason": "The holy water's power can be accessed by those who have not yet reached a more advanced level, making it accessible to players at the start of their journey.",
    "vendorReason": "The Blessed Order is dedicated to the protection and sanctification of the realm; thus, they are responsible for distributing items imbued with divine power like this flask.",
    "shippingDetail": "Ships via a trusted Order Messenger, ensuring safe delivery within two days.",
    "usage": {
      "activation": "Consume or pour the holy water as an action.",
      "duration": "Instantaneous for Holy Water; one hour for Area Blessing.",
      "endsWhen": "The effect ends upon expiration or when consumed.",
      "charges": "Unlimited, once per day."
    },
    "priceReason": "The flask's rarity and the divine power it holds justify its price, making it a valuable yet balanced addition to any adventurer's inventory.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T00:26:00.380368+00:00",
    "aiReviewedAt": "2026-07-22T00:26:00.380368+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_holy_water_splash_service": {
    "id": "blessed_order_holy_water_splash_service",
    "name": "Blessed Order Holy Water Splash Service",
    "description": "This vial of blessed water, crafted by Order Priests, is a quick and effective way to sanctify your gear. A simple splash imbues your weapon with radiant power for a day, while you gain resilience against evil's influence. Just be cautious; the ritual can leave you drenched in a cascade of holy water.",
    "price": 1000,
    "icon": "💧",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Holy Weapon",
      "Resilient Faith"
    ],
    "vendor": "blessed_order_chapel",
    "shippedBy": "Vial of Faith",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holy Weapon",
        "rules": "When you splash this vial, choose one weapon you are proficient with. Until the start of your next turn, it deals an extra +1d6 radiant damage to undead and fiends. This effect lasts for 24 hours."
      },
      {
        "title": "Resilient Faith",
        "rules": "For the duration of one long rest, you gain advantage on saving throws against effects with the 'evil' descriptor. You can use this feature once per short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for novice adventurers to quickly bless their gear and enhance their protection.",
    "vendorReason": "The chapel ensures that its patrons have the means to protect themselves against evil forces.",
    "shippingDetail": "Delivered by trusted Order Priests, ensuring a timely arrival of your holy water.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect lasting for the specified duration",
      "endsWhen": "The effects end when you finish a long rest or are no longer in contact with the blessed water.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balanced cost for an item that provides quick, effective protection and offense against undead and fiends.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T00:26:05.695378+00:00",
    "aiReviewedAt": "2026-07-22T00:26:05.695378+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_paladin_boots": {
    "id": "blessed_order_paladin_boots",
    "name": "Blessed Order Paladin Boots",
    "description": "These boots of pious duty and unmatched craftsmanship squeak with a sound that echoes the halls of justice. The Blessed Order Cobbler's artistry is evident in every stitch, making these not just footwear but a symbol of virtue and valor.",
    "category": "equipment",
    "price": 1000,
    "icon": "👢",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Justice Squeak",
      "Righteous Balance"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Justice Squeak",
        "rules": "When you move, the boots produce a sound that alerts creatures within 30 feet. Creatures can't use Stealth to hide from you until the start of your next turn unless they succeed on a DC 15 Wisdom saving throw."
      },
      {
        "title": "Righteous Balance",
        "rules": "You gain advantage on saving throws against being knocked prone and on Dexterity (Stealth) checks while wearing these boots. This effect lasts until the end of your next turn after moving at least 30 feet."
      }
    ],
    "levelRequirementReason": "These boots are crafted for those who wish to walk a path of righteousness, starting as early as level 1.",
    "vendorReason": "The Blessed Order is known for its commitment to fostering justice and virtue among the faithful.",
    "shippingDetail": "Ships via a special procession, delivered within one week of order placement.",
    "usage": {
      "activation": "Passive effect when moving.",
      "duration": "Until end of next turn after moving at least 30 feet.",
      "endsWhen": "On the start of your next turn without moving.",
      "charges": "Unlimited"
    },
    "priceReason": "The boots are crafted with blessed materials and expert craftsmanship, offering a fair price for their exceptional utility.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T00:26:10.791370+00:00",
    "aiReviewedAt": "2026-07-22T00:26:10.791370+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_priest_robe": {
    "id": "blessed_order_priest_robe",
    "name": "Blessed Order Priest Robe",
    "description": "The Blessed Order Priest Robe is a simple yet divine white garment adorned with subtle holy symbols. It whispers wisdom to its wearer, enhancing their connection with the divine. The robe's fabric holds an ancient blessing that purifies the soul, leaving no trace of impurity after use.",
    "price": 1000,
    "icon": "👘",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+1 Wisdom (Religion) check",
      "Self-cleansing and purification"
    ],
    "vendor": "blessed_order_monastery",
    "shippedBy": "Holy Thread",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Insight",
        "rules": "The wearer gains +1 to all Wisdom (Religion) checks. This effect is passive and does not require activation."
      },
      {
        "title": "Sacred Cleansing",
        "rules": "After use, the robe cleans itself and neutralizes any harmful energy or dirt, leaving no trace of impurity. This effect occurs automatically after each use without consuming charges."
      }
    ],
    "levelRequirementReason": "This level requirement allows novice priests to benefit from its divine properties.",
    "vendorReason": "The Blessed Order Monastery is known for their sanctified garments and rituals, ensuring the robes are imbued with pure magic.",
    "shippingDetail": "Ships via Holy Thread's divine courier service; delivery time varies based on spiritual energy levels.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Permanent until next rest",
      "endsWhen": "The wearer takes a long rest or the robe is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rare materials and divine blessings that imbue the robe, making it an essential but not excessively expensive item for young priests.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T00:26:15.730328+00:00",
    "aiReviewedAt": "2026-07-22T00:26:15.730328+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_recipe_holy_water_soup": {
    "id": "blessed_order_recipe_holy_water_soup",
    "name": "Recipe: Blessed Order Holy Water Soup",
    "description": "This soup is a humble yet potent gift of divine grace. Each spoonful is a reminder of the Blessed Order's unwavering faith, with a subtle tang that hints at holy water's purity. It grants advantage on saving throws against undead and fiendish threats for one hour, while also causing such creatures to find its smell revolting, giving you advantage on Charisma checks to repel them.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Holy Advantage",
      "Undead Repellent"
    ],
    "vendor": "blessed_order",
    "shippedBy": "Holy Procession",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holy Advantage",
        "rules": "When consumed, the soup grants you advantage on saving throws against undead and fiendish effects for one hour. This effect ends when the duration expires or if you take any nonmagical damage."
      },
      {
        "title": "Undead Repellent",
        "rules": "For one hour after consumption, undead creatures within 30 feet find the soup's smell so revolting that they have disadvantage on Charisma checks to interact with you. This effect ends when the duration expires or if you take any nonmagical damage."
      }
    ],
    "levelRequirementReason": "This humble yet effective recipe is accessible to low-level characters who wish to bolster their protection against otherworldly threats.",
    "vendorReason": "The Blessed Order Kitchen is known for its pious and practical recipes, making this soup a staple among their offerings.",
    "shippingDetail": "Shipped by the Holy Procession, this delicacy arrives fresh from the kitchens of the Blessed Order.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "One hour or until nonmagical damage is taken",
      "endsWhen": "Duration expires or if you take any nonmagical damage",
      "charges": "Unlimited, as it is a consumable item"
    },
    "priceReason": "This soup combines divine grace with practical utility at an accessible price point.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T00:26:21.462799+00:00",
    "aiReviewedAt": "2026-07-22T00:26:21.462799+00:00",
    "aiReviewVersion": 1
  },
  "blessed_order_suncrystal": {
    "id": "blessed_order_suncrystal",
    "name": "Blessed Order Suncrystal",
    "description": "The Blessed Order Suncrystal is a radiant gemstone crafted by the divine artisans of the Blessed Order. Its surface shimmering with raw light, it channels celestial energy to bolster those who wield it in holy combat against dark forces.",
    "price": 1000,
    "icon": "☀️",
    "stock": 3,
    "rarity": "legendary",
    "effects": [
      "Radiant Boost",
      "Blinding Flash"
    ],
    "vendor": "blessed_order_sanctum",
    "shippedBy": "Silver Casket",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Radiant Boost",
        "rules": "When the user casts a spell dealing Radiant damage, they gain +1d6 additional damage. This effect can be used once per long rest."
      },
      {
        "title": "Blinding Flash",
        "rules": "The user can emit a blinding flash that blinds all Undead and Fiends within 30 feet for 1 minute (DC 14 CON save). The effect can only be used once per day. Creatures successfully saving do not suffer the blindness effect."
      }
    ],
    "levelRequirementReason": "Requires a character of at least 9th level to wield the Suncrystal effectively in combat.",
    "vendorReason": "The Blessed Order is responsible for crafting and distributing holy relics like this Suncrystal, ensuring only those of proper piety can use it.",
    "shippingDetail": "Ships via the Silver Casket with a delivery delay of one week.",
    "usage": {
      "activation": "Instantaneous action to cast a spell dealing Radiant damage or to emit a blinding flash.",
      "duration": "Instantaneous for casting, Blinding Flash lasts 1 minute.",
      "endsWhen": "Blinding Flash ends when the duration expires. Both effects are exhausted after use.",
      "charges": "Unlimited; both effects can be used once per long rest."
    },
    "priceReason": "The balanced price reflects its rarity and divine craftsmanship, providing a fair value for such a powerful yet not overpowered item.",
    "priceOriginal": 48000,
    "priceReviewedAt": "2026-07-22T00:26:27.052146+00:00",
    "aiReviewedAt": "2026-07-22T00:26:27.052146+00:00",
    "aiReviewVersion": 1
  },
  "blessing_of_the_elders": {
    "id": "blessing_of_the_elders",
    "name": "Blessing of the Elders",
    "description": "The Blessing of the Elders is a sacred ritual that bestows an ancient weapon or armor with the protective essence of the toad sages. This relic not only enhances its wearer's defenses but also imbues the item with a sense of timeless power, making it a treasured heirloom among the clans.",
    "category": "services",
    "price": 1000,
    "icon": "🙏",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Ancestral Power",
      "Monthly Sanctuary"
    ],
    "vendor": "toad_council",
    "shippedBy": "Ritual Scroll",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ancestral Power",
        "rules": "The weapon or armor gains +1 bonus to AC and damage rolls for a year. Non-magical items become +1 quality. This effect is active as long as the item is worn by its owner."
      },
      {
        "title": "Monthly Sanctuary",
        "rules": "Once per month, the wearer may cast *Sanctuary* on themselves as a ritual action. The spell has no verbal or somatic components and requires only a 10gp consecrated coin as material components. This effect must be activated by the owner."
      }
    ],
    "levelRequirementReason": "The simplicity of the ritual allows even low-level characters to benefit from its protection.",
    "vendorReason": "As guardians of ancient traditions, the Toad Council ensures that only those worthy receive this sacred blessing.",
    "shippingDetail": "The scroll must be delivered by a trusted messenger and must not be opened before reaching its intended recipient.",
    "usage": {
      "activation": "Passive effect; activation required for monthly *Sanctuary* ritual",
      "duration": "1 year or until the item is removed from the owner's possession",
      "endsWhen": "The item ceases to be worn by the owner, or if it becomes non-magical and was originally magical",
      "charges": "Unlimited; the monthly *Sanctuary* can be used once per month"
    },
    "priceReason": "This price reflects the rarity and the significant benefit of a year-long +1 bonus to AC and damage rolls, along with the unique ability to cast *Sanctuary* monthly.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-22T00:26:33.109759+00:00",
    "aiReviewedAt": "2026-07-22T00:26:33.109759+00:00",
    "aiReviewVersion": 1
  },
  "block_brick": {
    "id": "block_brick",
    "name": "Brick Block",
    "description": "This hefty brick block, crafted from ancient volcanic rock, is a marvel of natural engineering. It weighs a full hundred pounds and can be used to elevate oneself or an ally by ten feet. When smashed, it releases a cascade of small lava fragments that scorch the ground around it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧱",
    "stock": 500,
    "rarity": "common",
    "effects": [
      "Portable high ground",
      "Can be smashed"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Freight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Portable High Ground",
        "rules": "As an action, you or an ally can use this brick block to create a temporary platform ten feet in diameter. This effect lasts for one minute and requires no checks."
      },
      {
        "title": "Smash",
        "rules": "When smashed, the brick block releases a 15-foot cone of scorching fragments. Creatures within the area must make a DC 14 Dexterity saving throw or take 2d6 fire damage. The item is destroyed after this use."
      }
    ],
    "levelRequirementReason": "The physical exertion required to lift and place the block safely limits its usage to characters of at least level 1.",
    "vendorReason": "The market thrives on oddities and local curios, making it a natural home for this unique brick block.",
    "shippingDetail": "Due to its weight, the brick block is shipped via a specialized Freight service with a two-day delivery time.",
    "usage": {
      "activation": "Action",
      "duration": "One minute",
      "endsWhen": "The duration ends or the item is destroyed after smashing it.",
      "charges": "Unlimited"
    },
    "priceReason": "The brick block's rarity, unique material, and physical properties justify its price of 1000 XP.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T00:26:38.356768+00:00",
    "aiReviewedAt": "2026-07-22T00:26:38.356768+00:00",
    "aiReviewVersion": 1
  },
  "blood_moon_curse": {
    "id": "blood_moon_curse",
    "name": "Blood Moon Curse (Third Party)",
    "description": "The Blood Moon Curse is a cursed amulet forged from the bones of lycanthropes and enchanted by the Blood Moon Coven. Wearing it transforms the wearer into a powerful Werewolf Lord, granting them enhanced strength and agility. It can be transferred to enemies through physical contact, making it a deadly weapon in the hands of those seeking to harm their foes.",
    "price": 2000,
    "icon": "🌙",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Lycanthropy Transformation",
      "Transfer Curse on Touch"
    ],
    "vendor": "curse_weaver",
    "shippedBy": "Cursed Post",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Lycanthropy Transformation",
        "rules": "Activates as an action. The wearer transforms into a Werewolf Lord for 1 hour or until dismissed by the user. This form grants +2 to Strength and Dexterity, and advantage on Stealth checks. It can be dispelled with a successful DC 17 Constitution save."
      },
      {
        "title": "Transfer Curse on Touch",
        "rules": "The curse can be transferred to an enemy through touch as a bonus action. The target must succeed on a DC 16 Wisdom saving throw or become cursed, allowing the wearer to transfer the curse again after 24 hours."
      }
    ],
    "levelRequirementReason": "Requires significant power and control over lycanthropy to safely wear this item.",
    "vendorReason": "The Curse Weaver specializes in crafting and dealing with curses, making them the perfect vendor for such a potent artifact.",
    "shippingDetail": "Ships via Cursed Post within 3 days. Delivery may take an additional 2-4 weeks due to magical courier delays.",
    "usage": {
      "activation": "Action or Bonus Action (to transform or transfer curse)",
      "duration": "1 hour per use for transformation, lasts until dismissed",
      "endsWhen": "Dismissed by the user or upon expiration of duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 2000 XP to ensure it remains a powerful but not overpowered item.",
    "priceOriginal": 325000,
    "priceReviewedAt": "2026-07-22T00:26:44.276103+00:00",
    "aiReviewedAt": "2026-07-22T00:26:44.276103+00:00",
    "aiReviewVersion": 1
  },
  "blooper_ink_well": {
    "id": "blooper_ink_well",
    "name": "Blooper's Ink Well",
    "description": "Blooper's Ink Well is a glass vessel filled with inky black fluid that reeks of saltwater. When activated, it releases a cone of ink that blinds foes for one round unless they succeed on a Constitution saving throw. The well also writes messages visible only under the light of the moon, and octopi within 30 feet become docile and approachable.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🦑",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Ink Cone: Blind Enemies",
      "Moonlit Messages"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Sealed Jar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ink Cone: Blind Enemies",
        "rules": "Activate as a bonus action. A cone of ink extends 15 feet from the well in any direction. Creatures within this area must succeed on a DC 12 Constitution saving throw or be blinded for one minute."
      },
      {
        "title": "Moonlit Messages",
        "rules": "The ink writes messages visible only under moonlight, and lasts until the start of your next turn after writing."
      }
    ],
    "levelRequirementReason": "A first-level spellcaster can manage the intricate activation and duration of this item.",
    "vendorReason": "The observatory frequently deals with oddities found in the deep, including octopi and strange inks.",
    "shippingDetail": "Shipped in a sealed jar to preserve the ink's potency.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "The creature succeeds on its saving throw or when used again",
      "charges": "Unlimited, but requires concentration during activation"
    },
    "priceReason": "Balanced at 1000 XP as a useful tool for low-level spellcasters.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T00:26:54.351792+00:00",
    "aiReviewedAt": "2026-07-22T00:26:54.351792+00:00",
    "aiReviewVersion": 1
  },
  "blue_paint": {
    "id": "blue_paint",
    "name": "Bucket of Blue Paint",
    "description": "This sturdy bucket of deep ocean blue paint exudes a rich, glossy sheen. Crafted from reclaimed wood and sealed with water-resistant varnish, it's perfect for splashing on walls or creating murals. Legend whispers that the paint can only be found in the hands of Toad Town Market’s most trusted patrons.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎨",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Blue Aura",
      "Quick Drying"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Toad Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blue Aura",
        "rules": "When applied to a surface, the paint emits a soft blue glow that lasts for 1 hour. Creatures within 5 feet of the painted area must succeed on a DC 12 Constitution saving throw or become charmed until the end of their next turn."
      },
      {
        "title": "Quick Drying",
        "rules": "The paint dries in 10 minutes, reducing any surface to its original state if left untouched. Once dry, it cannot be easily removed without magic."
      }
    ],
    "levelRequirementReason": "Any adventurer can appreciate the utility of a versatile paint bucket.",
    "vendorReason": "The market is known for its array of useful tools and curiosities, making it the ideal place to find this handy item.",
    "shippingDetail": "Delivered by Toad Express in one day with a special delivery note from the market owner.",
    "usage": {
      "activation": "Apply as an action",
      "duration": "1 hour or until dried naturally",
      "endsWhen": "Dries completely without magical intervention",
      "charges": "Unlimited, regenerates after drying"
    },
    "priceReason": "Balanced price reflects the paint's utility and the rarity of finding such quality in Toad Town.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T00:26:59.541800+00:00",
    "aiReviewedAt": "2026-07-22T00:26:59.541800+00:00",
    "aiReviewVersion": 1
  },
  "blueberry_muffins_that_restore_spell": {
    "id": "blueberry_muffins_that_restore_spell",
    "name": "Recipe: Mages' Guild Mana Muffins",
    "description": "These delicate Mages' Guild Mana Muffins are crafted from rare blueberries and imbued with arcane energy. Upon consumption, they restore one expended first-level spell slot, leaving you refreshed yet slightly dizzy for a moment. The confectioners of the guild ensure each batch is made fresh daily using their proprietary recipe, handed down through generations.",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Restores One Expended First-Level Spell Slot",
      "Temporary Dizziness"
    ],
    "vendor": "mages_guild",
    "shippedBy": "Arcane Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Spell Slot",
        "rules": "Consume a Mana Muffin as an action to restore one expended first-level spell slot. The muffin must be eaten within the hour of preparation."
      },
      {
        "title": "Temporary Dizziness",
        "rules": "After consuming a Mana Muffin, the character is dazed for 1 round (DC 12 Constitution save ends early if you succeed)."
      }
    ],
    "levelRequirementReason": "Appropriate for all spellcasters who need a quick boost of mana.",
    "vendorReason": "The Mages' Guild is known for its support of their members, ensuring they have the tools and resources needed to maintain peak performance.",
    "shippingDetail": "Ships via Arcane Relay with expedited delivery within a week.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "Instantaneous effect, lasts until the beginning of your next turn.",
      "endsWhen": "The dizziness ends on a successful Constitution saving throw or after one round.",
      "charges": "Unlimited; each batch yields 6 muffins."
    },
    "priceReason": "Balanced at 1,000 XP to reflect its rare ingredients and arcane energy.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T00:27:04.793694+00:00",
    "aiReviewedAt": "2026-07-22T00:27:04.793694+00:00",
    "aiReviewVersion": 1
  },
  "bob_omb_buddy": {
    "id": "bob_omb_buddy",
    "name": "Bob-Omb Buddy",
    "description": "A soft pink Bob-Omb with big eyes and a wagging tail, this Buddy follows faithfully by your side until you command it to explode. When you give the word, it releases a burst of fiery petals in a 10-foot radius that deal 3d6 fire damage to all creatures within. After detonating, it reverts into a harmless, giggling puff of petals until dawn.",
    "category": "faction",
    "price": 1000,
    "icon": "💣",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Explosive Petals",
      "Morning Reformation"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Explosive Container",
    "levelRequirement": 1,
    "factionBonus": {
      "offense": 10
    },
    "effectDetails": [
      {
        "title": "Explosive Petals",
        "rules": "When you activate this Bob-Omb Buddy as an action, it releases a burst of fiery petals that deal 3d6 fire damage to all creatures within a 10-foot radius. The explosion has no effect on objects or plants."
      },
      {
        "title": "Morning Reformation",
        "rules": "At dawn, the Bob-Omb Buddy reforms into its harmless form. It can be reactivated once per day after it has reformed."
      }
    ],
    "levelRequirementReason": "This item is suitable for low-level adventurers who need an easy-to-carry, reliable explosive.",
    "vendorReason": "The Rogue Port's Black Market stocks a variety of unusual goods, including this quirky companion.",
    "shippingDetail": "Ships securely in an Explosive Container to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "At dawn or when destroyed by a successful DC 14 Dexterity (Stealth) check.",
      "charges": "Recharges at dawn"
    },
    "priceReason": "Balanced for its low-level utility and risk, this item is priced to reflect its daily recharge ability.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:27:10.140591+00:00",
    "aiReviewedAt": "2026-07-22T00:27:10.140591+00:00",
    "aiReviewVersion": 1
  },
  "bob_omb_standard": {
    "id": "bob_omb_standard",
    "name": "Bob-omb (Defused)",
    "description": "This defused Bob-omb retains its explosive appearance with a red fuse that has been removed for safety. It is a standard, non-lethal training device used by adventurers to practice their combat and survival skills in a controlled environment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💣",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Training Device",
      "Non-Lethal"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Swift Couriers",
    "levelRequirement": 1,
    "warning": "Possession may be illegal in some jurisdictions",
    "effectDetails": [
      {
        "title": "Training Device",
        "rules": "When thrown as part of a combat drill, the Bob-omb does not explode. Instead, it lands harmlessly and can be used to practice dodging or countering. It has no effect on creatures within reach."
      },
      {
        "title": "Non-Lethal",
        "rules": "The Bob-omb is designed for training purposes only and does not deal damage upon contact with a creature or object. It is meant solely for target practice and skill development."
      }
    ],
    "levelRequirementReason": "This item is intended for beginners and those new to combat, requiring no specific level of proficiency.",
    "vendorReason": "The Rogue Port Black Market sells a wide variety of unusual items, including training tools like the Bob-omb (Defused).",
    "shippingDetail": "Delivered with special handling to ensure safe transport.",
    "usage": {
      "activation": "Thrown as part of a combat drill or practice session.",
      "duration": "Instantaneous for training purposes; no duration limit.",
      "endsWhen": "The Bob-omb lands harmlessly on the ground after being thrown.",
      "charges": "Unlimited, recharged upon landing."
    },
    "priceReason": "This item is priced at 1000 XP for its training value and non-lethal nature, making it accessible to all adventurers regardless of level.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T00:27:15.368459+00:00",
    "aiReviewedAt": "2026-07-22T00:27:15.368459+00:00",
    "aiReviewVersion": 1
  },
  "bobomb_buddy_plushie": {
    "id": "bobomb_buddy_plushie",
    "name": "Bob-omb Buddy Plushie",
    "description": "A plushie crafted from resilient fabric and stuffed with a mix of confetti and small firecrackers. This Bob-omb Buddy Plushie provides much-needed morale boosts during tense situations, but its explosive nature can be unpredictable, sometimes startling nearby allies.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧸",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Morale Boost",
      "Explosive Encouragement"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Bubble Wrap Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When you are reduced to zero hit points but not killed outright, you can use an action to squeeze the plushie. Doing so grants you advantage on your next Charisma (Intimidation) check and increases your maximum hit points by 1d8 until the start of your next long rest."
      },
      {
        "title": "Explosive Encouragement",
        "rules": "Once per day, as a bonus action, you can squeeze the plushie to unleash a small explosion that deals 1d6 fire damage in a 5-foot radius. Targets within this area must succeed on a DC 12 Dexterity saving throw or be knocked prone and take an additional 1d6 fire damage."
      }
    ],
    "levelRequirementReason": "This plushie is designed to provide immediate morale support, making it accessible at the earliest levels.",
    "vendorReason": "Toad Town Market often stocks items that can brighten spirits and boost morale among adventurers.",
    "shippingDetail": "Shipped with extra padding to ensure the plushie arrives in top condition, even if it has already been activated.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Morale Boost; 1 minute for Explosive Encouragement (recharges after a long rest)",
      "endsWhen": "The effect ends when you use the plushie again, and it recharges at the start of your next long rest.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This plushie combines utility and danger, providing both immediate morale support and occasional fire damage, making it a balanced addition to any adventurer's inventory.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T00:27:21.526138+00:00",
    "aiReviewedAt": "2026-07-22T00:27:21.526138+00:00",
    "aiReviewVersion": 1
  },
  "bone_chime_wind_catcher": {
    "id": "bone_chime_wind_catcher",
    "name": "Bone Chime Wind Catcher",
    "description": "The Bone Chime Wind Catcher is a delicate mobile crafted from the bleached bones of ancient warriors, each one etched with runes that whisper cryptic messages when the wind blows. The chimes are said to be tuned to the voices of the dead, and their melodies are as cold as the grave itself. Once per day, you can ask a yes/no question, and the chimes will respond in a haunting whisper that echoes the final words of those who have passed.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🪦",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Whispered cryptic messages",
      "Daily yes/no question"
    ],
    "vendor": "temple_eternal",
    "shippedBy": "Woven String",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cryptic Whisper",
        "rules": "When wind blows, you hear one cryptic phrase from a dead person. This effect is passive and occurs whenever the wind stirs nearby."
      },
      {
        "title": "Deadly Question",
        "rules": "Once per day, you can ask a yes/no question. The chimes will respond with a whisper that may or may not be truthful; it is up to the DM's discretion as to whether the answer reflects reality or the dead's twisted perceptions."
      }
    ],
    "levelRequirementReason": "This item requires only basic dexterity and an open mind, suitable for any adventurer starting their journey.",
    "vendorReason": "The Temple Eternal preserves the spirits of the past, and this mobile is said to offer a connection with the dead.",
    "shippingDetail": "Delivered by Woven String, known for their precision in delivering delicate artifacts.",
    "usage": {
      "activation": "Passive effect; requires no action. The yes/no question can be asked once per day as a free action.",
      "duration": "Instantaneous",
      "endsWhen": "The daily use is exhausted or the item breaks from excessive wind damage.",
      "charges": "1 charge, recharges after 7 days of calm weather"
    },
    "priceReason": "Balanced at 1000 XP, this item offers a unique and powerful connection to the past without overwhelming the player.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T00:27:27.507188+00:00",
    "aiReviewedAt": "2026-07-22T00:27:27.507188+00:00",
    "aiReviewVersion": 1
  },
  "boo_bell": {
    "id": "boo_bell",
    "name": "Boo's Bell",
    "description": "Boo's Bell is a spectral bell crafted from ethereal metal, its surface covered in faintly glowing runes. When rung, it emits a resonant tone that pierces through invisibility and reveals hidden foes within a 30-foot radius, leaving them exposed for the duration of the spell. Ghosts and spirits caught in its sound must succeed on a Charisma saving throw or be overcome by fear.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔔",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Expose Invisibility",
      "Frighten Spirits"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Blessed Container",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Expose Invisibility",
        "rules": "Boo's Bell allows the user to reveal all invisible creatures within a 30-foot radius for 1 minute. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Frighten Spirits",
        "rules": "Any ghost or spirit within range that fails its Charisma saving throw becomes frightened of the user for 1 minute, during which time it cannot move closer to the user."
      }
    ],
    "levelRequirementReason": "The bell's power is accessible early in a character's journey to ensure players can use it effectively against ghostly threats.",
    "vendorReason": "Shamans of the region are familiar with spectral phenomena and often rely on such tools for their work.",
    "shippingDetail": "Delivered by a trusted courier, ensuring safe arrival without risk to the item or its wielder.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "1 minute (instantaneous)",
      "endsWhen": "The duration ends when Boo's Bell is silenced or destroyed",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the bell's utility and rarity without overprizing its effect.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-22T00:27:32.930724+00:00",
    "aiReviewedAt": "2026-07-22T00:27:32.930724+00:00",
    "aiReviewVersion": 1
  },
  "boo_in_a_jar": {
    "id": "boo_in_a_jar",
    "name": "Boo in a Jar",
    "description": "A small glass jar that holds a spectral figure of a Boo. The jar's lid is tightly sealed, and the Boo within can be heard whispering secrets when the container is opened. It whispers only truths during daylight but may deceive at night, always keeping watch and occasionally sharing embarrassing revelations.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Whispers Truths During Daylight",
      "Can Lie At Night"
    ],
    "vendor": "onyx_hand",
    "shippedBy": "Cursed Glassware",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Truthful Whispering (Daytime)",
        "rules": "The Boo in the jar can answer one question per day. It always tells the truth during daylight, providing accurate and helpful information."
      },
      {
        "title": "Deceptive Lies (Nighttime)",
        "rules": "At nightfall, the Boo may lie when answering questions, with a 50% chance of telling the truth and a 50% chance of mischievously lying. The jar must be open for these whispers to occur."
      }
    ],
    "levelRequirementReason": "This simple curio is accessible to any adventurer, allowing even novices to interact with its spectral occupant.",
    "vendorReason": "The Onyx Hand specializes in unique and enigmatic artifacts that captivate the curious mind.",
    "shippingDetail": "Ships securely within a protective wooden crate to ensure safe delivery of this fragile item.",
    "usage": {
      "activation": "Passive effect when jar is open during daylight or nighttime.",
      "duration": "Instantaneous, lasting until the next sunrise or sunset.",
      "endsWhen": "The effect ends if the jar breaks, the lid is sealed shut again, or if the Boo escapes by vanishing.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Boo in a Jar offers an enchanting but limited form of interaction with spectral beings, making it a moderately priced item for curious adventurers.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T00:27:38.516719+00:00",
    "aiReviewedAt": "2026-07-22T00:27:38.516719+00:00",
    "aiReviewVersion": 1
  },
  "boo_portrait": {
    "id": "boo_portrait",
    "name": "Haunted Boo Portrait",
    "description": "A ghoulish Boo Portrait that follows you with its unsettling eyes. The painting's frame seems to pulse with a faint, eerie glow, and when you turn your back on it, the Boo's eyes blink as if mocking your silence. It whispers secrets of the night only under the light of the moon, providing cryptic insights.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🖼️",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Moonlit Secrets",
      "Invisible Sentinel"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Canvas Wrap",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moonlit Secrets",
        "rules": "Once per day at dusk and dawn, the Boo Portrait reveals a cryptic secret to you. This effect is active only when exposed to moonlight, and it provides information that can be used immediately."
      },
      {
        "title": "Invisible Sentinel",
        "rules": "The portrait emits an aura that warns of invisible creatures within 30 feet. You are always aware of such threats as long as the painting is in your line of sight."
      }
    ],
    "levelRequirementReason": "This Boo Portrait provides useful but not overwhelming benefits to a beginning adventurer.",
    "vendorReason": "The Black Market Vendor deals in rare and unusual items, making this haunting portrait an ideal addition to their collection.",
    "shippingDetail": "Delivered rolled up inside a sturdy canvas wrapping with protective padding. The Boo Portrait must be hung upon arrival for it to function properly.",
    "usage": {
      "activation": "Passive and active once per day (moonlit secrets)",
      "duration": "Instantaneous (for each effect)",
      "endsWhen": "Exhausted after use, recharges the next dawn",
      "charges": "Unlimited"
    },
    "priceReason": "The Boo Portrait offers a unique and valuable set of passive benefits that are not easily replicated by other items.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T00:27:43.808169+00:00",
    "aiReviewedAt": "2026-07-22T00:27:43.808169+00:00",
    "aiReviewVersion": 1
  },
  "boo_sheet": {
    "id": "boo_sheet",
    "name": "Boo Sheet",
    "description": "A ghostly white sheet with strategically cut eye holes, this Boo Sheet is sewn from fabric that whispers secrets of the afterlife. It grants +2 to Stealth checks within haunted locales and has a peculiar effect: when donned, spectral beings might become momentarily confused, granting you advantage on Charisma (Deception) checks against them.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "+2 Stealth in Haunted Areas",
      "Confuse Spectral Beings"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Laundry Bag",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+2 Stealth in Haunted Areas",
        "rules": "When wearing the Boo Sheet, you gain a +2 bonus to Dexterity (Stealth) checks within haunted areas. This effect lasts until the start of your next turn after entering an area not considered haunted."
      },
      {
        "title": "Confuse Spectral Beings",
        "rules": "While wearing the Boo Sheet, spectral beings become momentarily confused upon seeing you, granting you advantage on Charisma (Deception) checks made against them. This effect lasts for 1 minute or until the Boo Sheet is removed."
      }
    ],
    "levelRequirementReason": "This item requires no special level as it provides a versatile and balanced benefit.",
    "vendorReason": "Shamans often encounter spectral entities, making this sheet a practical tool for their craft.",
    "shippingDetail": "The Laundry Bag ensures the Boo Sheet arrives crisp and ready to use, delivered with no delay.",
    "usage": {
      "activation": "Wearing the Boo Sheet passively activates its effects.",
      "duration": "Lasts until the start of your next turn after entering a non-haunted area or until removed.",
      "endsWhen": "The effect ends when you stop wearing the Boo Sheet in a haunted location or when entering an area not considered haunted.",
      "charges": "Unlimited; no charges, recharges, or rest required."
    },
    "priceReason": "This price reflects its common rarity and practical utility within haunted locales without being overpowered.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T00:27:49.669066+00:00",
    "aiReviewedAt": "2026-07-22T00:27:49.669066+00:00",
    "aiReviewVersion": 1
  },
  "book_of_dead_languages": {
    "id": "book_of_dead_languages",
    "name": "Book of Dead Languages",
    "description": "The Book of Dead Languages is a leather-bound tome with faded ink and strange symbols. It whispers in ancient tongues that no one has spoken for centuries, yet it perfectly captures the essence of lost languages. Each page seems to breathe life into forgotten words, though upon mastering one, another long-lost language slips from your memory.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Language Mastery",
      "Forgetting"
    ],
    "vendor": "scholar_society",
    "shippedBy": "Leather Bindings",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Language Mastery",
        "rules": "As an action, you can spend 1 hour reading the book. At the end of this time, you gain proficiency in a dead language known to your race or background. This effect has no save DC and does not require concentration."
      },
      {
        "title": "Forgetting",
        "rules": "At the same time as gaining a new language's mastery, you lose the ability to speak one other language that you previously knew. This change is permanent and cannot be reversed by any means."
      }
    ],
    "levelRequirementReason": "This book requires only basic literacy skills to use.",
    "vendorReason": "The Scholar Society has a rich collection of ancient knowledge, including this mysterious tome.",
    "shippingDetail": "Ships with special leather bindings and protective cases, ensuring the book remains intact during transit.",
    "usage": {
      "activation": "1 hour of reading as an action",
      "duration": "Instantaneous effect; permanent language mastery and loss of one previously known language",
      "endsWhen": "The time spent reading elapses or you interrupt the process",
      "charges": "Unlimited"
    },
    "priceReason": "This book is rare but not overly powerful, making it a fair trade at this price.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T00:27:54.747762+00:00",
    "aiReviewedAt": "2026-07-22T00:27:54.747762+00:00",
    "aiReviewVersion": 1
  },
  "book_of_moths": {
    "id": "book_of_moths",
    "name": "Book of Moths",
    "description": "The Book of Moths is a leather-bound tome where each page unfolds to reveal fluttering moths. When read, it grants fleeting knowledge of hidden lore, but at a heavy cost; one moth dies with each page turned, and the reader loses a cherished memory. At night, the remaining moths whisper ancient secrets that only you can hear.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🦋",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Moth Whisper",
      "Memory Loss"
    ],
    "vendor": "bazaar_of_oddities",
    "shippedBy": "Silk Cover",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Moth Whisper",
        "rules": "Read any page of the book as a bonus action. The remaining moths within whisper an ancient secret to you that you can recall once per day until used. This effect is instantaneous and does not require concentration."
      },
      {
        "title": "Memory Loss",
        "rules": "Turn one page of the book for every 24 hours spent reading it. When a moth dies, the reader loses one memory known to them at the start of each day. The lost memory cannot be regained by any means until the book is closed."
      }
    ],
    "levelRequirementReason": "The knowledge gained from reading the Book of Moths can be overwhelming and requires a basic understanding of lore.",
    "vendorReason": "The Bazaar of Oddities is known for its collection of rare and unusual items, making it fitting to sell such an enigmatic artifact.",
    "shippingDetail": "Ships via Silk Cover; delivery takes three days due to the delicate nature of the moths within.",
    "usage": {
      "activation": "Bonus action to read a page and hear a secret.",
      "duration": "Instantaneous for each page turned.",
      "endsWhen": "The book is closed or all moths die.",
      "charges": "Unlimited, but memory loss occurs with each page."
    },
    "priceReason": "Balanced at 1000 XP as it offers unique knowledge and a memory sacrifice, making it accessible yet valuable.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T00:28:00.478918+00:00",
    "aiReviewedAt": "2026-07-22T00:28:00.478918+00:00",
    "aiReviewVersion": 1
  },
  "book_of_unwritten_names": {
    "id": "book_of_unwritten_names",
    "name": "Book of Unwritten Names",
    "description": "The Book of Unwritten Names is a leather-bound tome with worn edges and an eerie glow. It inscribes names of those who will perish tomorrow, their fates sealed by its pages. Whispering secrets at night, it foretells the inevitable, though one can erase a name to save another's life.",
    "category": "forbidden",
    "price": 1000,
    "icon": "📖",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Erase Fated Deaths",
      "Nightly Fates"
    ],
    "vendor": "crypt_courier",
    "shippedBy": "Guarded Carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Erase Fated Deaths",
        "rules": "By spending an hour in quiet meditation, the user can erase one name from the book. A new name then appears at dawn. This effect requires a Wisdom saving throw (DC 15) to ensure the erased death is not just postponed."
      },
      {
        "title": "Nightly Fates",
        "rules": "Each dawn, 1d4 names appear in the book—those who will die before sunset that day. The book's whispers at night provide a +2 bonus on Insight checks to interpret these fates accurately."
      }
    ],
    "levelRequirementReason": "The Book requires minimal arcane knowledge for its basic use.",
    "vendorReason": "Crypt Courier deals with forbidden and ancient artifacts, making the Book a fitting addition to their inventory.",
    "shippingDetail": "Ships via a heavily guarded carrier who ensures the book's safe arrival without detection by authorities.",
    "usage": {
      "activation": "Passive effect; requires meditation for erasing names",
      "duration": "Instantaneous when a name is erased",
      "endsWhen": "Exhausted after one use per day",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its utility without being overpowered.",
    "priceOriginal": 180000,
    "priceReviewedAt": "2026-07-22T00:28:05.788721+00:00",
    "aiReviewedAt": "2026-07-22T00:28:05.788721+00:00",
    "aiReviewVersion": 1
  },
  "boomerang_flower": {
    "id": "boomerang_flower",
    "name": "Boomerang Flower",
    "description": "The Boomerang Flower is a delicate bloom with roots forged in the ancient forge of Forgeside. Its petals shimmer and glow with an inner flame, capable of returning to its owner with deadly precision. This flower can be thrown as a weapon, striking foes up to 60 feet away before returning to your hand. Multiple targets may be hit on return if they are within range.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪃",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Returning Boomerang",
      "Multiple Target Strike"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Returning Boomerang",
        "rules": "When thrown, the Boomerang Flower returns to its owner as an action. It deals 1d8 slashing damage on a hit. On return, it can be thrown again without using any additional actions."
      },
      {
        "title": "Multiple Target Strike",
        "rules": "If multiple targets are within range and struck by the returning Boomerang Flower, they each make a Dexterity saving throw (DC 14). On failure, the target takes an additional 2d6 slashing damage from the returning flower."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and adventurers just starting their journey.",
    "vendorReason": "The Gilded Gryphon specializes in unique, rare items that empower the novice adventurer.",
    "shippingDetail": "Delivered within a week of order placement with no additional handling fees.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "On return or discarded",
      "charges": "Unlimited"
    },
    "priceReason": "The Boomerang Flower's rarity and unique properties justify its moderate price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T00:28:10.940441+00:00",
    "aiReviewedAt": "2026-07-22T00:28:10.940441+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_bowser_castle_key": {
    "id": "bootleg_bowser_castle_key",
    "name": "Bootleg Bowser Castle Key",
    "description": "The Bootleg Bowser Castle Key is a tarnished brass key engraved with a mischievous Koopa face. It's said to have been crafted by Castle Copies and bears the scent of overpriced knockoffs. This key can open any red door in Bowser’s Castle, but it bends under pressure, causing a 20% chance for the lock to fail each time you use it.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Red Door Opener",
      "Bendy Key"
    ],
    "vendor": "wario_land",
    "shippedBy": "Koopa Key Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Red Door Opener",
        "rules": "When used on red doors in Bowser’s Castle, the key grants a +2 bonus to your Dexterity (Stealth) checks and allows you to attempt to open the door as if it had no lock. If the door is locked, you have advantage on the check."
      },
      {
        "title": "Bendy Key",
        "rules": "There's a 20% chance each time you use the key that the lock will fail and the door won't open. This effect can be used once per day."
      }
    ],
    "levelRequirementReason": "This key is suitable for anyone brave enough to venture into Bowser’s Castle, regardless of level.",
    "vendorReason": "Wario Land is known for selling knockoff items and this key fits the theme of his store.",
    "shippingDetail": "Ships via Koopa Key Express, which may deliver with a slight delay due to Koopa shenanigans.",
    "usage": {
      "activation": "As an action",
      "duration": "Instantaneous",
      "endsWhen": "The lock fails or the door opens",
      "charges": "Recharge daily"
    },
    "priceReason": "This price reflects the key's limited durability and the risk involved in using it.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T00:28:16.414299+00:00",
    "aiReviewedAt": "2026-07-22T00:28:16.414299+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_bowser_lava_lamp": {
    "id": "bootleg_bowser_lava_lamp",
    "name": "Bootleg Bowser Lava Lamp",
    "description": "The Bootleg Bowser Lava Lamp exudes a menacing glow that seems to dance with molten energy. Its glass is etched with the silhouette of Bowser, and the oil within shifts like lava under the light's hypnotic gaze. This lamp provides a flickering 15-foot radius of dim light, but beware—any creature failing their Wisdom saving throw (DC 14) becomes distracted for 1 minute, during which they take disadvantage on Dexterity (Stealth) checks and Constitution saving throws.",
    "category": "equipment",
    "price": 1000,
    "icon": "💡",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Hypnotic Glow",
      "Lava Oil"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hot Glow Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hypnotic Glow",
        "rules": "Any creature within the lamp's light who fails a Wisdom saving throw (DC 14) becomes distracted for 1 minute. During this time, they take disadvantage on Dexterity (Stealth) checks and Constitution saving throws. The effect ends if the distracted creature is targeted by another effect ending distraction or if it takes any action."
      },
      {
        "title": "Lava Oil",
        "rules": "The lamp's oil emits a dangerous fume, causing creatures within 5 feet to have disadvantage on Dexterity saving throws related to avoiding fire. The lamp must be extinguished and allowed to cool for at least an hour before it can be used again."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners, providing a fun but manageable challenge.",
    "vendorReason": "Wario Land specializes in quirky and dangerous items, making the Bootleg Bowser Lava Lamp an excellent fit for his shop.",
    "shippingDetail": "The lamp is shipped with extra care to ensure it arrives safely in working condition, but users should be aware of its hazardous contents.",
    "usage": {
      "activation": "Instantaneous activation upon lighting the lamp. The effect continues as long as the lamp remains lit and active.",
      "duration": "Until the lamp is extinguished or damaged beyond use.",
      "endsWhen": "Extinguishing or damage to the lamp stops its effects.",
      "charges": "Unlimited uses; the lamp can be relit multiple times."
    },
    "priceReason": "The price reflects a balance between the item's danger and utility, making it accessible for those who dare to use it.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-22T00:28:23.019930+00:00",
    "aiReviewedAt": "2026-07-22T00:28:23.019930+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_bowser_shell_shield": {
    "id": "bootleg_bowser_shell_shield",
    "name": "Bootleg Bowser Shell Shield",
    "description": "The Bootleg Bowser Shell Shield is a crude yet iconic cardboard creation adorned with green paint and remnants of Bowser’s fiery emblem. This makeshift shield offers a unique defense, providing +1 AC against fire-based attacks, but it crumbles after absorbing three hits, leaving the wielder vulnerable to bludgeoning damage. It also intimidates turtle-like creatures, granting advantage on Intimidation checks when facing Koopas or similar foes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Fire Defense",
      "Turtle Intimidation"
    ],
    "vendor": "wario_land",
    "shippedBy": "Turtle Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Defense",
        "rules": "Activates as a reaction to being hit by a fire-based attack. Provides +1 AC against that attack for the following round, but the shield crumbles after absorbing three hits, imposing disadvantage on all saving throws against bludgeoning damage."
      },
      {
        "title": "Turtle Intimidation",
        "rules": "Active at all times when within 30 feet of a turtle-like creature. Grants advantage on Intimidation checks made against such creatures for the duration of one short rest or until used in combat."
      }
    ],
    "levelRequirementReason": "This shield is designed for beginners and those who need an easy-to-carry, thematic defense.",
    "vendorReason": "Wario Land sells a wide range of Bowser-themed items, including this humorous yet useful bootleg accessory.",
    "shippingDetail": "Delivered swiftly by the Turtle Truck, ensuring your shield arrives in perfect condition for your next adventure.",
    "usage": {
      "activation": "Reaction to fire-based attack; advantage on Intimidation checks with turtle-like creatures",
      "duration": "Instantaneous effect per activation; lasts until used against a fire-based attack or until three hits are absorbed, whichever comes first. Advantage on Intimidation checks is temporary and ends after one short rest.",
      "endsWhen": "After absorbing three hits from any source or when the shield crumbles in combat",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shield's unconventional design, unique thematic value, and limited utility justify this balanced price.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-22T00:28:29.176994+00:00",
    "aiReviewedAt": "2026-07-22T00:28:29.176994+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_daisy_flower_power_bracelet": {
    "id": "bootleg_daisy_flower_power_bracelet",
    "name": "Bootleg Daisy Flower Power Bracelet",
    "description": "The Bootleg Daisy Flower Power Bracelet is a gaudy accessory with plastic daisies that 'empower' its wearer. Crafted by the unscrupulous Flower Knockoff Co., it's rumored to be made from recycled materials, giving it an eco-friendly yet dubious origin. The bracelet promises strength in sports but wilts under rain, offering only disadvantage on checks when wet. It also attracts bees with a 10% chance of minor stings (1 damage).",
    "category": "equipment",
    "price": 1000,
    "icon": "💐",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Flower Power",
      "Attracts Bees"
    ],
    "vendor": "wario_land",
    "shippedBy": "Daisy Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flower Power",
        "rules": "While wearing the bracelet, you gain a +1 bonus to Strength (Athletics) checks. This effect is limited to use only in sports-related activities and ends when you stop wearing the bracelet."
      },
      {
        "title": "Attracts Bees",
        "rules": "There's a 10% chance per hour that bees will approach, causing minor stings for 1d2 hit points of damage. This effect is limited to 3 uses per day and ends when you stop wearing the bracelet."
      }
    ],
    "levelRequirementReason": "The item's effects are minor and intended for casual use, thus requiring no minimum level.",
    "vendorReason": "Wario Land is known for selling questionable goods at inflated prices, making the Bootleg Daisy Flower Power Bracelet a fitting addition to his inventory.",
    "shippingDetail": "Delivered within three days with special handling for fragile items like this bracelet.",
    "usage": {
      "activation": "Passive effect while wearing the bracelet.",
      "duration": "Instantaneous, lasting until removed or destroyed.",
      "endsWhen": "Destroyed if exposed to water for more than an hour.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The item's price is adjusted for its minor effects and questionable origin, making it a common but not cheap accessory.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T00:28:35.103143+00:00",
    "aiReviewedAt": "2026-07-22T00:28:35.103143+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_dk_banana_peel_slippers": {
    "id": "bootleg_dk_banana_peel_slippers",
    "name": "Bootleg DK Banana Peel Slippers",
    "description": "These slippers are a mishmash of banana peels and duct tape, offering surprisingly reliable traction on slippery surfaces. Their grippy soles are reinforced with banana peel strips, which provide a non-slip grip while also giving off a distinctly ripe aroma.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍌",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Enhanced Traction",
      "Banana Aroma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Peel Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Traction",
        "rules": "When you are prone, you have advantage on Dexterity (Acrobatics) checks to avoid falling. Additionally, the slippers provide a +1 bonus to AC against attacks that would otherwise cause you to fall prone."
      },
      {
        "title": "Banana Aroma",
        "rules": "The slippers emit a pungent banana scent, imposing disadvantage on Dexterity (Stealth) checks while wearing them. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and adventurers just starting their journey.",
    "vendorReason": "Wario Land is known for its wacky inventions that might not always work, making these slippers a perfect fit for his inventory.",
    "shippingDetail": "Ships via banana crate; delivery may vary depending on banana ripeness.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Until the end of your next long rest",
      "endsWhen": "At the end of your next long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The unique and somewhat unreliable nature of these slippers justifies their moderate price.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-22T00:28:40.144594+00:00",
    "aiReviewedAt": "2026-07-22T00:28:40.144594+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_dk_barrel_roll_toy": {
    "id": "bootleg_dk_barrel_roll_toy",
    "name": "Bootleg DK Barrel Roll Toy",
    "description": "The Bootleg DK Barrel Roll Toy is a mischievous, hand-cranked device that mimics the iconic barrel rolls of Donkey Kong. Crafted from durable, recycled materials by the questionable vendor 'Roll Replicas', it's designed to be spun into dizzying acrobatic displays. When activated, it can momentarily disorient foes within reach, but if spun too fast, it risks breaking and reducing your Acrobatics checks by 2.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛢️",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Disorientate foe",
      "Breaks with overuse"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel Bounce",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disorientate Foe",
        "rules": "When the toy is spun, any creature within 5 feet must succeed on a DC 14 Wisdom saving throw or become blinded for 1 round. The effect ends if the user stops spinning the toy."
      },
      {
        "title": "Breaks with Overuse",
        "rules": "If the toy spins more than three times in succession, it breaks and can no longer be used until repaired by a blacksmith. Once broken, disadvantage is applied to all Acrobatics checks made using this toy."
      }
    ],
    "levelRequirementReason": "The toy's activation requires minimal dexterity but still benefits from a basic level requirement.",
    "vendorReason": "Wario Land is known for its questionable products, including knockoffs and gimmicks that still attract buyers.",
    "shippingDetail": "Ships via Barrel Bounce with a special delivery delay of one week due to the fragile nature of the toy.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, until the user stops spinning it",
      "endsWhen": "User stops spinning or breaks the toy",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set slightly lower than the original to reflect its knockoff nature and limited utility.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T00:28:45.743357+00:00",
    "aiReviewedAt": "2026-07-22T00:28:45.743357+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_dk_diddy_kong_hat": {
    "id": "bootleg_dk_diddy_kong_hat",
    "name": "Bootleg DK Diddy Kong Hat",
    "description": "The Bootleg DK Diddy Kong Hat is a mischievous backward cap crafted by the unscrupulous Hat Knockoffs. Its worn-out fabric and faded insignia hint at its dubious origins, yet it grants wearers an edge in both agility and charisma. While the hat may slip off your head with unexpected frequency, it boosts Acrobatics checks and enhances interactions with other apes of the DK crew.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧢",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "+1 Acrobatics Rolls",
      "DK Crew Charm"
    ],
    "vendor": "wario_land",
    "shippedBy": "Monkey Mail Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Acrobatic Boost",
        "rules": "While wearing this hat, you gain a +1 bonus to Acrobatics checks. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "DK Crew Charm",
        "rules": "For 1 hour after donning the hat, you can attempt an Charisma (Persuasion) check with advantage when trying to convince another member of the DK crew. This effect ends if you remove the hat or suffer a critical failure on any Charisma check."
      }
    ],
    "levelRequirementReason": "This hat is suitable for beginners who wish to gain an early edge in agility and social interactions.",
    "vendorReason": "Wario Land specializes in questionable merchandise, making this bootleg cap a natural addition to his inventory.",
    "shippingDetail": "Ships directly from the Dinosaur Jungle; may arrive with unexpected primate passengers.",
    "usage": {
      "activation": "Equipping the hat is an instantaneous action.",
      "duration": "Until end of next short or long rest, and when removed by the wearer.",
      "endsWhen": "Removal by wearer or critical failure on a Charisma check within the hour.",
      "charges": "Unlimited uses; no recharging required."
    },
    "priceReason": "Balanced as an uncommon item, this hat offers a useful but not overpowering edge for early characters.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T00:28:51.520956+00:00",
    "aiReviewedAt": "2026-07-22T00:28:51.520956+00:00",
    "aiReviewVersion": 1
  },
  "bootleg_donkey_kong_barrel_cannon": {
    "id": "bootleg_donkey_kong_barrel_cannon",
    "name": "Bootleg Donkey Kong Barrel Cannon",
    "description": "The Bootleg Donkey Kong Barrel Cannon is a mischievous toy cannon crafted by Barrel Bootleggers, known for its foam-filled barrels that can knock prone opponents within 20 feet. It's a fan favorite among apes and those who enjoy a bit of chaos, with an added charm for anyone who wants to channel their inner ape.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚀",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Foam Barrel Shot",
      "Prone Knockdown"
    ],
    "vendor": "wario_land",
    "shippedBy": "Barrel Roll Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Foam Barrel Shot",
        "rules": "When activated as a bonus action, the cannon shoots a foam barrel at a target within 20 feet. On a successful hit, the target must make a Strength saving throw (DC 14) or be knocked prone."
      },
      {
        "title": "Prone Knockdown",
        "rules": "The cannon jams with a probability of 20%, causing disadvantage on the next shot until it is reloaded. Additionally, anyone who uses this cannon gains +1 to Charisma while interacting with apes."
      }
    ],
    "levelRequirementReason": "This toy is designed for general entertainment and fun rather than combat, suitable for all adventurers.",
    "vendorReason": "Wario Land is known for its quirky merchandise that appeals to fans of all ages, including this fan favorite from the Barrel Bootleggers.",
    "shippingDetail": "Delivered by Barrel Roll Express with a special delivery delay of one week due to popular demand.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous",
      "endsWhen": "On the next jam (20%) or until reloaded",
      "charges": "Unlimited, but jammed shots are limited by a 20% chance"
    },
    "priceReason": "The price is adjusted to reflect its uncommon status and fan base appeal.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-22T00:28:57.068441+00:00",
    "aiReviewedAt": "2026-07-22T00:28:57.068441+00:00",
    "aiReviewVersion": 1
  }
};
