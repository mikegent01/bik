// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_019 = {
  "glarnia_gem_inlaid_belt": {
    "id": "glarnia_gem_inlaid_belt",
    "name": "Glarnia Gem-Inlaid Belt",
    "description": "The Glarnia Gem-Inlaid Belt is a sleek leather belt adorned with low-grade gems that seem to pulse with an internal glow. It whispers of ancient craftsmanship and glimmers faintly when placed in a treasure hoard, drawing the eye of the greedy. The belt's gems are known for pinching at those who covet them too eagerly, a subtle reminder from Glarnia Mined Jewels to stay honest. This relic is said to bring minor good luck, though only once per day.",
    "price": 1000,
    "icon": "👖",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Minor Good Luck",
      "Pinches the Greedy"
    ],
    "vendor": "glarnia_mines",
    "shippedBy": "Gemstone Clasp",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Good Luck",
        "rules": "Activates on a bonus action. Grants advantage on one luck-based roll of your choice at the end of your turn, once per day."
      },
      {
        "title": "Pinches the Greedy",
        "rules": "If you attempt to take more than two items from a hoard or treasure chest in a single day without paying for them, the belt pinches gently but noticeably. The intensity increases as the number of unclaimed items rises."
      }
    ],
    "levelRequirementReason": "Suitable for beginners to try their luck and test the belt's rumored effects.",
    "vendorReason": "Glarnia Mined Jewels sources this from their own mines, ensuring that each belt is imbued with genuine Glarnian charm.",
    "shippingDetail": "Ships within three days, delivered by a trusted courier who can identify the belt's origin.",
    "usage": {
      "activation": "Bonus action at the end of your turn.",
      "duration": "Instantaneous effect when activated.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Unlimited, recharges daily."
    },
    "priceReason": "The belt's charm and lore are worth a significant amount of XP, but the minor effect keeps its value in check.",
    "priceOriginal": 17000,
    "priceReviewedAt": "2026-07-22T06:19:02.893991+00:00",
    "aiReviewedAt": "2026-07-22T06:19:02.893991+00:00",
    "aiReviewVersion": 1
  },
  "glarnia_gem_polishing_peeler": {
    "id": "glarnia_gem_polishing_peeler",
    "name": "Glarnia Gem Polishing Peeler ",
    "description": "The Glarnia Gem Polishing Peeler is a sleek, tool-like implement forged from polished obsidian and adorned with the insignia of the Glarnian Toolers. This peeler can effortlessly strip the skin off fruits, revealing their inner brilliance as if they were precious gems. It grants advantage on Deception checks when preparing candy with gleaming treats and creates a minor distraction (as a 10-foot cone that lasts for 1 round), drawing attention to its user.",
    "category": "equipment",
    "price": 240,
    "icon": "🍭",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Gleaming Treats",
      "Minor Distraction"
    ],
    "vendor": "glarnia_mines",
    "shippedBy": "Shiny Peel Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gleaming Treats",
        "rules": "When used, the Glarnia Gem Polishing Peeler grants advantage on Deception checks when preparing candy with highly polished or shiny ingredients. This effect lasts until the end of your next turn."
      },
      {
        "title": "Minor Distraction",
        "rules": "Activating this tool creates a minor distraction in a 10-foot cone that lasts for 1 round, causing creatures within to make a Wisdom saving throw (DC 13) or be distracted. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "This peeler is designed for beginners and hobbyists in candy-making.",
    "vendorReason": "The Glarnian Toolers are renowned for their craftsmanship, ensuring that this peeler meets the highest standards of quality and function.",
    "shippingDetail": "Delivered in a decorative pouch designed to keep your peeler gleaming and ready for use.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of your next turn or is interrupted by an action",
      "endsWhen": "The effect ends when you use it again, are incapacitated, or finish a short rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the quality materials and craftsmanship required to produce such a versatile and useful tool.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T06:18:21.703986+00:00",
    "aiReviewedAt": "2026-07-22T06:18:21.703986+00:00",
    "aiReviewVersion": 1
  },
  "glarnia_luck_laundering": {
    "id": "glarnia_luck_laundering",
    "name": "Glarnia Luck Laundering",
    "description": "The Glarnia Luck Laundering is a whimsical service offered by Glarnia Probability Brokers, known for transforming ill-fated dice rolls into a minor misfortune for another. For seven days, you can reroll any three natural 1s on your dice, and in exchange, a random NPC gains a streak of bad luck that makes them a minor villain for the duration. As a token of this service, you receive a 'Luck Laundered' sticker which grants +1 to Initiative, making you slightly more likely to be noticed during chaotic events.",
    "category": "services",
    "price": 1000,
    "icon": "🎰",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reroll Three Natural 1s",
      "NPC Bad Luck"
    ],
    "vendor": "glarnia",
    "shippedBy": "Quantum Entanglement Courier Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reroll Three Natural 1s",
        "rules": "You may activate this service once per week, allowing you to reroll any three natural 1s on your dice. The effect lasts for the remainder of the current adventure or until you complete a long rest."
      },
      {
        "title": "NPC Bad Luck",
        "rules": "As part of the service, a random NPC within 30 feet becomes a minor villain, experiencing bad luck that lasts until they either succeed on a DC 12 Wisdom saving throw or leave the area. This effect does not target NPCs who are already villains."
      }
    ],
    "levelRequirementReason": "This service is only available to characters of at least 6th level, ensuring that those who use it have the experience and resources to handle the minor disruptions it may cause.",
    "vendorReason": "Glarnia Probability Brokers specialize in manipulating probabilities and fortune, making them the perfect vendor for a service like this.",
    "shippingDetail": "The courier ensures that your luck is laundered within the next week of purchase.",
    "usage": {
      "activation": "Once per week by spending a bonus action.",
      "duration": "Instantaneous effect; lasts until the end of the current adventure or until you complete a long rest.",
      "endsWhen": "The effects expire at the end of the current adventure or when you complete a long rest.",
      "charges": "Unlimited uses per week."
    },
    "priceReason": "This service is considered rare and valuable, as it offers significant reroll benefits while also introducing an interesting narrative element into play.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-22T06:18:23.826361+00:00",
    "aiReviewedAt": "2026-07-22T06:18:23.826361+00:00",
    "aiReviewVersion": 1
  },
  "glarnia_recipe_probability_popcorn": {
    "id": "glarnia_recipe_probability_popcorn",
    "name": "Recipe: Glarnia Probability Popcorn",
    "description": "Glarnia's Probability Popcorn, a quantum snack from the whimsical land of Glarnia, is a treat whose kernels pop into unpredictable outcomes. Each handful reveals a random minor boon: +1 AC, +1 attack roll, or +1 saving throw for an hour. The chefs' secret recipe ensures that you can never predict its effects; disadvantage on planning checks as you're caught in the popcorn's quantum conundrum. And when the kernels pop, they vanish only to reappear in your pocket for later enjoyment.",
    "price": 240,
    "icon": "📜",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Random Minor Boon",
      "Disadvantage on Planning Checks"
    ],
    "vendor": "glarnia",
    "shippedBy": "Quantum Entanglement Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Random Minor Boon",
        "rules": "When consumed, a handful of Glarnia Probability Popcorn grants one random minor effect: +1 AC, +1 attack roll, or +1 saving throw for 1 hour. The DM rolls a d6 to determine the specific benefit. This effect is instantaneous upon consumption and lasts until its duration ends."
      },
      {
        "title": "Disadvantage on Planning Checks",
        "rules": "Consuming this popcorn imposes disadvantage on all checks related to planning or strategy for 1 hour, as the unpredictable nature of the snack clouds your mind's focus. This effect is active while you have any remaining uses."
      }
    ],
    "levelRequirementReason": "This snack provides a minor advantage but doesn't require high-level expertise to appreciate its effects.",
    "vendorReason": "Glarnia Probability Chefs are renowned for their experimental and unpredictable recipes, making this popcorn one of their most sought-after items.",
    "shippingDetail": "Ships via Quantum Entanglement Express, ensuring your snack arrives just as you finish your previous handful.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "1 hour per handful consumed",
      "endsWhen": "Duration ends or when the popcorn's effect is exhausted (only one use per handful)",
      "charges": "Unlimited uses, each handful provides a single effect"
    },
    "priceReason": "The balanced price reflects its rarity and the unique quantum properties of Glarnia Probability Popcorn.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T06:18:34.835689+00:00",
    "aiReviewedAt": "2026-07-22T06:18:34.835689+00:00",
    "aiReviewVersion": 1
  },
  "glarnia_truth_serum": {
    "id": "glarnia_truth_serum",
    "name": "Glarnian Truth Serum",
    "description": "The Glarnian Truth Serum is a clear, odorless potion that, upon ingestion, induces an excruciating sensation whenever the imbiber attempts to lie. This discomfort is so severe it feels as if the soul itself is being torn apart. The serum's effects are not easily ignored; even the most hardened liars find themselves bound by its power for one hour. Targets remain acutely aware of this turmoil, making deceit a painful and arduous task.",
    "category": "consumables",
    "price": 1000,
    "icon": "💉",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Involuntary Lie Suppression",
      "Soul-Searing Truth"
    ],
    "vendor": "Glarnia",
    "shippedBy": "Medical Cooler",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Involuntary Lie Suppression",
        "rules": "Upon activation by consuming the serum, the target must make a Wisdom saving throw. On a failed save, they are incapacitated and unable to speak any deliberate lies for one hour. The target is aware of this effect and understands that lying will only worsen their physical discomfort."
      },
      {
        "title": "Soul-Searing Truth",
        "rules": "The serum imposes an additional condition: the target feels a profound sense of regret and remorse whenever they attempt to lie, making it nearly impossible to deceive. This effect lasts for one hour after consuming the potion."
      }
    ],
    "levelRequirementReason": "The Glarnian Truth Serum is accessible to those who are just beginning their adventures, providing a powerful tool for adventurers seeking truth in uncertain times.",
    "vendorReason": "Glarnia, known for its medical and alchemical expertise, ensures that only the most reliable and trustworthy individuals receive this potent serum.",
    "shippingDetail": "Shipped via Medical Cooler, ensuring safe delivery within a week of purchase.",
    "usage": {
      "activation": "Eaten as a potion",
      "duration": "One hour per use",
      "endsWhen": "The effects expire after one hour or when the target speaks another deliberate lie",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Glarnian Truth Serum is priced at 1000 XP, reflecting its rarity and the complexity of its alchemical creation.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:19:37.847938+00:00",
    "aiReviewedAt": "2026-07-22T06:19:37.847938+00:00",
    "aiReviewVersion": 1
  },
  "glarnian_poison_pen": {
    "id": "glarnian_poison_pen",
    "name": "Glarnian Poison Pen",
    "description": "The Glarnian Poison Pen is a sleek fountain pen crafted from polished obsidian. Its ink is laced with a mild paralytic that can sicken an opponent if they come into contact with it, causing them to stagger and lose their balance for the next round. The pen's invisible messages are revealed by applying heat, making it a clandestine tool for spies and diplomats alike. This weapon of ink is renowned in Glarnia, where its use is limited to those who have proven their worth.",
    "category": "equipment",
    "price": 1000,
    "icon": "✒️",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Ink Paralysis",
      "Heat-Activated Messages"
    ],
    "vendor": "glarnian_scribe",
    "shippedBy": "Courier of Glarnia",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Ink Paralysis",
        "rules": "When a creature touches the ink, it must succeed on a DC 15 Dexterity saving throw or be restrained until the start of its next turn. On that turn, the creature must make another DC 15 Dexterity saving throw or fall prone and take 1d6 poison damage."
      },
      {
        "title": "Heat-Activated Messages",
        "rules": "The pen can write invisible messages that are revealed by applying heat to the ink with a successful DC 10 Intelligence (Investigation) check. The message is legible for only one hour before fading."
      }
    ],
    "levelRequirementReason": "This item requires basic dexterity and stealth skills, making it accessible to lower-level characters.",
    "vendorReason": "Glarnia's scribes are known for their precision and secrecy; this pen is a symbol of their expertise in clandestine communication.",
    "shippingDetail": "Ships via the fastest courier with overnight delivery to any major city within Glarnia.",
    "usage": {
      "activation": "Use an action to write or apply heat.",
      "duration": "Instantaneous effect, lasts until end of turn for targets hit by Ink Paralysis.",
      "endsWhen": "The effect ends when the target successfully saves against it or the ink fades after one hour in case of Heat-Activated Messages.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced pricing reflects its exotic materials and specialized craftsmanship.",
    "priceOriginal": 9800,
    "priceReviewedAt": "2026-07-22T06:18:40.556313+00:00",
    "aiReviewedAt": "2026-07-22T06:18:40.556313+00:00",
    "aiReviewVersion": 1
  },
  "glarnian_rhetoric_tome": {
    "id": "glarnian_rhetoric_tome",
    "name": "Glarnian Rhetoric Tome",
    "description": "The Glarnian Rhetoric Tome, a leather-bound volume of grandiloquent and subtly misleading prose, whispers secrets in its pages. Crafted by Glarnia's elite orators, this tome promises to bend words to your will, turning the simplest lie into a truth that even the most discerning can mistake for reality. Master it over a week-long study, and you'll gain a +1 bonus to Charisma (Deception) forever; its pages also teach the 'Glarnian Pivot,' an ancient verbal trick that allows you to redirect the meaning of any statement in your favor with a successful Charisma check.",
    "category": "services",
    "price": 4900,
    "icon": "📖",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Master the Tome",
      "Glarnian Pivot"
    ],
    "vendor": "glarnia_lecture_hall",
    "shippedBy": "Swift Scroll Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Master the Tome",
        "rules": "Study the Glarnian Rhetoric Tome for one week. Upon completion, you gain a +1 bonus to your Charisma (Deception) ability score permanently. This effect cannot be repeated."
      },
      {
        "title": "Glarnian Pivot",
        "rules": "As an action, use the 'Glarnian Pivot' to redirect the meaning of any statement in your favor. Make a Charisma (Deception) check; on a success, you can alter the listener's perception of the statement by 1d4 levels of reality distortion. This ability can be used once per day."
      }
    ],
    "levelRequirementReason": "Beginners in rhetoric and oratory find this tome accessible but powerful enough to require at least first-level proficiency.",
    "vendorReason": "Glarnia's Lecture Hall specializes in scholarly works, including the Glarnian Rhetoric Tome, which they import directly from their renowned libraries.",
    "shippingDetail": "The courier ensures that each tome arrives intact and ready for study within a week of purchase.",
    "usage": {
      "activation": "One action to use the Glarnian Pivot ability, one week of study to master the tome.",
      "duration": "Instantaneous for Glarnian Pivot; permanent bonus from mastering the tome.",
      "endsWhen": "Daily limit on Glarnian Pivot usage is reached; mastery effect remains until lost by disuse or a significant life event.",
      "charges": "One use per day for Glarnian Pivot"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the tome's rarity and the depth of knowledge it imparts.",
    "priceOriginal": 19000,
    "priceReviewedAt": "2026-07-22T06:19:26.237939+00:00",
    "aiReviewedAt": "2026-07-22T06:19:26.237939+00:00",
    "aiReviewVersion": 1
  },
  "globe_of_the_lost_world": {
    "id": "globe_of_the_lost_world",
    "name": "Globe of the Lost World",
    "description": "The Globe of the Lost World is a crystalline orb that hums with an ancient, unspoken language. When activated, it reveals a perfect world where you were never hurt or wronged — a place where time flows like liquid silver. For one hour, you may step inside this timeless realm, but beware: if you linger too long, the globe’s enchantment will bind you to its eternal space, erasing your presence from the world outside.",
    "category": "forbidden",
    "price": 280000,
    "icon": "🌍",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Perfect Sanctuary",
      "Timeless Step"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Crystal Orb",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perfect Sanctuary",
        "rules": "Activates as a bonus action. The user is teleported into the globe’s interior for one hour. While inside, they are immune to all damage and effects from the environment outside the globe."
      },
      {
        "title": "Timeless Step",
        "rules": "If the user remains within the globe longer than 12 hours, their physical form begins to merge with the world inside. After 48 hours, the user cannot leave the globe’s interior without a Wish spell or similar magic."
      }
    ],
    "levelRequirementReason": "The globe's power is accessible but dangerous, requiring a minimum level to use safely.",
    "vendorReason": "As keepers of forbidden knowledge and lost relics, Celestial Exchange often deals in artifacts that blur the line between reality and fantasy.",
    "shippingDetail": "The globe is shipped within an enchanted Crystal Orb that ensures its safe arrival with minimal risk of damage or tampering.",
    "usage": {
      "activation": "Bonus action to activate, once per long rest.",
      "duration": "1 hour when first activated; additional activations last for only 30 minutes each.",
      "endsWhen": "The user steps out of the globe’s interior, time expires, or they are forcibly removed from inside.",
      "charges": "Recharges after a long rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its forbidden nature and limited utility without being overpowered.",
    "priceOriginal": 600000,
    "priceReviewedAt": "2026-07-22T06:19:11.932206+00:00",
    "aiReviewedAt": "2026-07-22T06:19:11.932206+00:00",
    "aiReviewVersion": 1
  },
  "gloves_that_make_your_bite": {
    "id": "gloves_that_make_your_bite",
    "name": "Wario's Chomp Champ Gloves",
    "description": "Wario's Chomp Champ Gloves are a pair of crimson mittens adorned with chew marks. Crafted by Wario's Munch Workshop, these gloves amplify your bite’s ferocity and satisfy your insatiable appetite. Wear them to gain +2 damage on Bite attacks (Wario-style chomping) and advantage on eating contests or foraging checks (thanks to their extra-wide digits). However, the gloves' constant stimulation can lead to a ravenous hunger; you must make a saving throw against gluttony every hour while wearing them. Failing this check reduces your Constitution by 1 until you rest.",
    "category": "equipment",
    "price": 240,
    "icon": "🧤",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Bite Attack Boost",
      "Eating Contests Advantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Chomp Chain Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bite Attack Boost",
        "rules": "Activation: On a Bite attack. Duration: Instantaneous. Range/Area: Self. The gloves add +2 damage to your Bite attacks (Wario's infamous chomp!). This effect is limited to once per short or long rest."
      },
      {
        "title": "Eating Contests Advantage",
        "rules": "Activation: Passive while wearing the gloves. Duration: Until removed. The gloves grant advantage on eating contests and foraging checks due to their enhanced grip and increased bite strength."
      }
    ],
    "levelRequirementReason": "These gloves are designed for adventurers who are just starting their journey, needing a boost in combat and survival skills.",
    "vendorReason": "Wario Land is known for its quirky and powerful equipment, making these gloves an obvious addition to the vendor's stock.",
    "shippingDetail": "Shipping via Chomp Chain Express ensures your gloves arrive in perfect condition, ready for a day of munching and biting adventures!",
    "usage": {
      "activation": "On a Bite attack or during an eating contest/foraging check.",
      "duration": "Instantaneous; limited to once per short or long rest.",
      "endsWhen": "The effect ends when the gloves are removed, and you make a saving throw against gluttony every hour while wearing them.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Crafted by Wario's Munch Workshop, these gloves offer significant advantages in combat and survival, justifying their balanced XP price.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T06:19:24.441934+00:00",
    "aiReviewedAt": "2026-07-22T06:19:24.441934+00:00",
    "aiReviewVersion": 1
  },
  "glow_shroom": {
    "id": "glow_shroom",
    "name": "Glow Shroom",
    "description": "The Glow Shroom, a bioluminescent mushroom sealed within a glass jar, glows softly yet brightly, casting an ethereal light that dances in the dark. Its luminescence is so vivid it can light rooms for hours without flicker or fail. Consuming a small bite grants you darkvision for a night, allowing you to see as if under moonlight. Overindulgence, however, results in a gentle bioluminescent glow that illuminates your skin with a soft, natural radiance.",
    "category": "consumables",
    "price": 240,
    "icon": "🍄",
    "stock": 30,
    "rarity": "uncommon",
    "effects": [
      "Bright Light",
      "Darkvision"
    ],
    "vendor": "orchard_stall",
    "shippedBy": "Glass Jar",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bright Light",
        "rules": "This effect provides bright light in a 10-foot radius for up to 8 hours. If the environment changes or if you move outside this area, the light fades and recharges after 24 hours."
      },
      {
        "title": "Darkvision",
        "rules": "Eating a small bite of the Glow Shroom grants darkvision for 1 hour. This effect is limited to one use per day."
      }
    ],
    "levelRequirementReason": "The Glow Shroom's bright light can be useful even in lower levels, but its effects are potent enough that first-level characters benefit the most.",
    "vendorReason": "The orchard stall often sells rare and exotic goods, including the unique Glow Shroom which adds a touch of magic to their offerings.",
    "shippingDetail": "Shipped in its signature glass jar to protect it during transit. Handle with care as the light may dim slightly during shipment.",
    "usage": {
      "activation": "Eating a small bite or placing the jar in an area you can see.",
      "duration": "Bright Light for up to 8 hours, Darkvision for 1 hour.",
      "endsWhen": "The light fades if moved outside its radius or after 24 hours. Darkvision ends upon expiration of the effect.",
      "charges": "Unlimited uses; eating a bite resets darkvision."
    },
    "priceReason": "This price reflects the Glow Shroom's rarity, the magic it contains, and its useful effects for adventurers of all levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:19:45.657179+00:00",
    "aiReviewedAt": "2026-07-22T06:19:45.657179+00:00",
    "aiReviewVersion": 1
  },
  "go_rock_squad_geode_cracking": {
    "id": "go_rock_squad_geode_cracking",
    "name": "Go-Rock Squad Geode Cracking",
    "description": "The Go-Rock Squad Geode Cracking is a unique service offered by the hardy miners of Go-Rock Squad. This task involves carefully splitting geodes to reveal their inner treasures, whether they be glittering crystals or rare minerals. Each geode yields a mix of 1d4 gp worth of valuable ore and a chance to find one Rock-type Pokemon that will attempt to join your party if not caught immediately. The process leaves you with iridescent glitter that persists for three days, adding a touch of sparkle to your gear.",
    "category": "services",
    "price": 240,
    "icon": "🪨",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Crack Geodes for Profit",
      "Encounter Rock-Type Pokémon"
    ],
    "vendor": "go_rock_squad",
    "shippedBy": "Rock Slide Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crack Geodes for Profit",
        "rules": "You spend an action cracking open one geode. This reveals a mix of 1d4 gp worth of valuable ore and the possibility of finding one Rock-type Pokémon, which will try to join your party unless you catch it immediately with a successful DC 12 Charisma (Performance) check."
      },
      {
        "title": "Iridescent Glitter",
        "rules": "Upon completing the geode cracking process, you are covered in glitter that remains for three days. This effect imposes no penalties but provides a minor cosmetic enhancement to your appearance during this time."
      }
    ],
    "levelRequirementReason": "This service is suitable for adventurers of all levels as it introduces players to the thrill of discovery and the chance to encounter unique Pokémon.",
    "vendorReason": "Go-Rock Squad Miners have extensive experience with geodes, making them the perfect vendors for this service.",
    "shippingDetail": "The geode is delivered via Rock Slide's secure and reliable courier service, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "When the geode is cracked open or if you choose to stop the process early.",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects the labor involved in safely cracking each geode and the potential for valuable rewards.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T06:19:40.446082+00:00",
    "aiReviewedAt": "2026-07-22T06:19:40.446082+00:00",
    "aiReviewVersion": 1
  },
  "go_rock_squad_geode_cracking_premium": {
    "id": "go_rock_squad_geode_cracking_premium",
    "name": "Go-Rock Squad Geode Cracking (Premium)",
    "description": "Go-Rock Squad's Geode Cracking (Premium) is a handcrafted tool that allows you to shatter geodes with a swift motion. The premium quality ensures each crack yields 2d10 gold pieces in sparkling crystals, and the process may occasionally release a friendly Rock-type Pokémon, which can be befriended by sharing some of those crystals. Your hands are permanently adorned with glitter, imposing a disadvantage on Stealth checks but adding to your mystique when mining or dealing with valuable minerals.",
    "category": "premium",
    "price": 240,
    "icon": "🪨",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Crack Geodes",
      "Friendly Pokémon Encounter"
    ],
    "vendor": "go_rock_squad",
    "shippedBy": "Rock Slide Premium Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Crack Geodes",
        "rules": "As an action, you can use this tool on a geode. The geode shatters into glittering crystals that contain 2d10 gold pieces. Each successful crack has a chance to release a friendly Rock-type Pokémon, which requires sharing 5 gold pieces to be tamed."
      },
      {
        "title": "Permanent Glitter",
        "rules": "Your hands are permanently adorned with glitter. This imposes disadvantage on Stealth checks but grants advantage on mining and treasure-hunting rolls due to the increased visibility of valuable minerals."
      }
    ],
    "levelRequirementReason": "This tool is designed for beginners as it requires no specific skill or level to use.",
    "vendorReason": "Go-Rock Squad Premium Miners specialize in geode cracking and offer this premium version of their tools.",
    "shippingDetail": "Delivered via Rock Slide Premium Express, ensuring secure and timely delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after cracking one geode; recharges at dawn the next day.",
      "charges": "Unlimited"
    },
    "priceReason": "The reduced price reflects its beginner-friendly nature and the premium quality of materials used.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T06:19:40.285616+00:00",
    "aiReviewedAt": "2026-07-22T06:19:40.285616+00:00",
    "aiReviewVersion": 1
  },
  "go_rock_squad_rock_crusher_mill": {
    "id": "go_rock_squad_rock_crusher_mill",
    "name": "Go-Rock Squad Rock Crusher Mill ",
    "description": "The Go-Rock Squad Rock Crusher Mill is a rugged device forged in the heart of volcanic rock, its gears and hammers made from ancient stone. This mill can reduce even the toughest cookie grains into fine dust with a single turn, granting +1 Strength bonus to any recipe that requires 'rock hard' ingredients. The crushing force it exerts creates dust clouds that obscure vision for nearby bakers, forcing them to reroll checks in the affected area until the milling stops.",
    "category": "equipment",
    "price": 240,
    "icon": "🍪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Grind Like Rocks",
      "Dust Clouds"
    ],
    "vendor": "go_rock_squad_cave",
    "shippedBy": "Crush Cookie Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grind Like Rocks",
        "rules": "As a bonus action, the user can activate this mill to reduce 'rock hard' cookie grains into fine dust. This grants a +1 Strength bonus for rock-hard recipe checks until the next long rest."
      },
      {
        "title": "Dust Clouds",
        "rules": "Whenever this device is used, it creates a dust cloud in a 5-foot radius that lasts for 1 minute or until the mill stops. Any creature within the area must succeed on a DC 13 Dexterity saving throw or be blinded until the end of their next turn."
      }
    ],
    "levelRequirementReason": "The Go-Rock Squad Rock Crusher Mill is designed for beginner bakers who are just starting to experiment with rock-hard ingredients.",
    "vendorReason": "The Go-Rock Squad, known for their expertise in handling and processing volcanic materials, naturally sells this specialized mill.",
    "shippingDetail": "Ships via a sturdy wooden crate, ensuring the device arrives intact despite its rough nature.",
    "usage": {
      "activation": "Bonus action to activate and grind ingredients. Stops automatically when the user stops turning it or when the mill reaches its maximum capacity.",
      "duration": "Instantaneous activation; effect lasts until the next long rest.",
      "endsWhen": "The user stops using it, or the device reaches its grinding limit.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This item is priced at 1000 XP to reflect a specialized tool that provides both mechanical and tactical advantages in bakeshops.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T06:20:09.800365+00:00",
    "aiReviewedAt": "2026-07-22T06:20:09.800365+00:00",
    "aiReviewVersion": 1
  },
  "go_rock_squad_rock_golem_mini_service": {
    "id": "go_rock_squad_rock_golem_mini_service",
    "name": "Go-Rock Squad Rock Golem Mini Service",
    "description": "The Go-Rock Squad Rock Golem Mini Service is a diminutive guardian crafted from gleaming obsidian. Its eyes glint with an ancient, unyielding light as it tirelessly stands guard. This rock guardian alerts its master to any danger within 30 feet by delivering a sharp stomp that trips foes for 1d4 damage and knocks them prone. Though sturdy and reliable, the Rock Golem moves at a slow pace, making it less agile but more dependable in its role as a sentinel.",
    "price": 240,
    "icon": "🪨",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Alerts to Danger",
      "Sturdy but Slow"
    ],
    "vendor": "go_rock_squad_cave",
    "shippedBy": "Pebble Pocket Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Alerts to Danger",
        "rules": "When an enemy enters the Rock Golem's 30-foot radius, it makes a Wisdom (Perception) check. On a success, it uses its reaction to trip one creature within 5 feet of itself for 1d4 damage and knocks that target prone."
      },
      {
        "title": "Sturdy but Slow",
        "rules": "The Rock Golem has AC 16 and 20 hit points. It moves at a speed of only 30 feet, making it less agile but ensuring it can sustain prolonged combat."
      }
    ],
    "levelRequirementReason": "This mini service rock guardian is designed for beginners to have an early sense of protection and alertness.",
    "vendorReason": "Go-Rock Squad specializes in creating and maintaining these stalwart guardians, perfecting their design since the dawn of time.",
    "shippingDetail": "The Pebble Pocket Express ensures swift delivery from the depths of the cave, guaranteeing that your Rock Golem is fresh out of the forge.",
    "usage": {
      "activation": "Reaction",
      "duration": "Instantaneous",
      "endsWhen": "Until a new enemy enters its range or until it is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Rock Golem Mini Service, though small in size, represents the expertise and craftsmanship of Go-Rock Squad, making it worth 1000 XP.",
    "priceOriginal": 10000,
    "priceReviewedAt": "2026-07-22T06:19:59.245376+00:00",
    "aiReviewedAt": "2026-07-22T06:19:59.245376+00:00",
    "aiReviewVersion": 1
  },
  "go_rock_squad_rock_hard_cookies_recipe": {
    "id": "go_rock_squad_rock_hard_cookies_recipe",
    "name": "Recipe: Go-Rock Squad Rock Hard Cookies ",
    "description": "The Recipe: Go-Rock Squad Rock Hard Cookies imparts a squad's favorite treat, crafted from rugged 'rocks' and flour to ensure they are as durable as the mountains themselves. These cookies are so tough that eating one grants a +1 bonus to Strength saving throws against crushing forces for two hours. The Go-Rock Squad only sells this recipe, ensuring each batch is as formidable as the last. Munching on these cookies not only toughens your jaw but also makes you feel like part of an unbreakable squad.",
    "price": 240,
    "icon": "🍪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Rock-hard Confection",
      "Strength Against Crushing"
    ],
    "vendor": "go_rock_squad_cave",
    "shippedBy": "Hard Hit Handbook",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rock-hard Confection",
        "rules": "Eating one cookie grants a +1 bonus to Strength saving throws against crushing forces. This effect lasts for two hours."
      },
      {
        "title": "Strength Against Crushing",
        "rules": "By consuming the cookie, you gain temporary resistance to crushing damage equal to your Strength modifier (minimum 1) until the start of your next turn after eating it."
      }
    ],
    "levelRequirementReason": "The Recipe: Go-Rock Squad Rock Hard Cookies requires a minimum level of 5 due to its unique and potent effects.",
    "vendorReason": "Only the Go-Rock Squad, known for their resilience and strength, can craft such formidable cookies.",
    "shippingDetail": "Ships via Hard Hit Handbook's express courier, ensuring your squad receives these mighty morsels in pristine condition.",
    "usage": {
      "activation": "Eating one cookie",
      "duration": "Two hours; ends when the effect expires",
      "endsWhen": "Starts of next turn after consuming",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the recipe's unique effects and rarity, ensuring it remains a valuable but not overpowered addition to any squad's strategy.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T06:20:46.519436+00:00",
    "aiReviewedAt": "2026-07-22T06:20:46.519436+00:00",
    "aiReviewVersion": 1
  },
  "go_rock_squad_rocker_jacket": {
    "id": "go_rock_squad_rocker_jacket",
    "name": "Go-Rock Squad Rocker Jacket ",
    "description": "The Go-Rock Squad Rocker Jacket is a leather ensemble that channels the raw energy of rock and roll. Its durable construction resists crushing, making it ideal for performances where stunts are involved. The jacket smells faintly of gravel, evoking memories of long nights under neon lights and pounding drums. Made by the Go-Rock Squad, this jacket not only boosts your Strength (Athletics) but also grants you a +2 bonus to saving throws against being knocked prone.",
    "price": 240,
    "icon": "🧥",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "+1 to Strength (Athletics) with rocks",
      "Jacket resists crushing"
    ],
    "vendor": "go_rock_squad_cave",
    "shippedBy": "Stone Stud Couriers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boosted Athletics",
        "rules": "When wearing this jacket and using the Athletics skill for activities involving rocks, you gain a +2 bonus. This effect lasts until the end of your next turn."
      },
      {
        "title": "Crush Resistance",
        "rules": "This jacket provides a +2 bonus to saving throws against being knocked prone or restrained by physical force. It has no save DC and can be used once before it requires a short rest to recover."
      }
    ],
    "levelRequirementReason": "The jacket's durability and rock-related abilities are accessible to players of any level.",
    "vendorReason": "Go-Rock Squad is known for their gear that enhances the performances of musicians and stunts alike, making this jacket a staple in their product line.",
    "shippingDetail": "Delivered via Stone Stud Couriers, who ensure packages arrive intact even after bumpy road conditions.",
    "usage": {
      "activation": "Passive effect; applies automatically when the jacket is worn and used during relevant activities.",
      "duration": "Instantaneous for saving throws against being knocked prone. Lasts until end of next turn for Strength (Athletics) with rocks.",
      "endsWhen": "Restored after a short rest or when the jacket is removed.",
      "charges": "Unlimited"
    },
    "priceReason": "The jacket's unique construction and vendor reputation justify its moderate price in XP.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-22T06:20:42.052985+00:00",
    "aiReviewedAt": "2026-07-22T06:20:42.052985+00:00",
    "aiReviewVersion": 1
  },
  "gobble_hat": {
    "id": "gobble_hat",
    "name": "Gobble Hat",
    "description": "The Gobble Hat is a jaunty cap adorned with a whimsical beak, crafted from soft felt and topped with colorful feathers. It's said to have been woven by the mischievous Fae of the Orchard Stall, imbuing it with an enchanting ability that compels nearby creatures to offer you food. The hat's material is surprisingly durable but retains a touch of the natural world, making it slightly damp when exposed to moisture and giving it a unique look that draws attention wherever you go.",
    "category": "equipment",
    "price": 45,
    "icon": "🧢",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Compelling Bites",
      "Safe Storage"
    ],
    "vendor": "orchard_stall",
    "shippedBy": "Cloth Cap Box",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Compelling Bites",
        "rules": "While wearing the Gobble Hat, you gain advantage on Persuasion checks when food is present. Additionally, once per day, you can activate this effect to compel a creature within 5 feet that has seen you eat recently to offer you a small object (coins, tiny trinkets) as a gift."
      },
      {
        "title": "Safe Storage",
        "rules": "By activating the hat's beak, you can safely store a small object by consuming it. This effect is instantaneous and does not require an action. The stored item remains hidden until you choose to retrieve it, at which point it reappears in your possession."
      }
    ],
    "levelRequirementReason": "The Gobble Hat's enchantment is subtle but effective, making it accessible to beginning adventurers.",
    "vendorReason": "The Orchard Stall is known for its magical trinkets and whimsical items, and the Gobble Hat fits perfectly into their collection of quirky gear.",
    "shippingDetail": "Delivered swiftly by the Cloakwing Express, a fleet of mischievous fairies who ensure the hat arrives in perfect condition.",
    "usage": {
      "activation": "Reaction (once per day)",
      "duration": "Instantaneous",
      "endsWhen": "Charges are exhausted or the hat is destroyed",
      "charges": "1"
    },
    "priceReason": "The Gobble Hat's enchantment, combined with its unique crafting and vendor reputation, justifies a price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:20:28.296250+00:00",
    "aiReviewedAt": "2026-07-22T06:20:28.296250+00:00",
    "aiReviewVersion": 1
  },
  "goblin_gizmo_grenade": {
    "id": "goblin_gizmo_grenade",
    "name": "Goblin Gizmo Grenade",
    "description": "The Goblin Gizmo Grenade is a clunky, misshapen device that looks like it was cobbled together from scrap metal and mismatched parts. This explosive is notorious for its unpredictable behavior; in one trial, it either fails to detonate or misfires with surprising force. Crafted by the mischievous goblins of the Deepwood Glades, this grenade grants a +1 bonus to Intimidation checks when wielded as a threat. However, its fickle nature means there's always a 50% chance of it fizzling out upon throwing, dealing only minor damage to the thrower.",
    "category": "equipment",
    "price": 240,
    "icon": "💣",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Boom or Bust",
      "Misfire"
    ],
    "vendor": "goblin_junkyard",
    "shippedBy": "Explosive Parcel (Handle with Care)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boom or Bust",
        "rules": "The Grenade is thrown as a ranged weapon attack with a range of 20 feet and an additional reach of 60 feet. On a hit, it deals 2d6 thunder damage in a 10-foot radius centered on the target. The thrower must succeed on a Dexterity saving throw (DC 13) or take half as much damage from the grenade's unintended explosion."
      },
      {
        "title": "Misfire",
        "rules": "There is a 50% chance that when thrown, the grenade will misfire and deal only 1d4 thunder damage to the thrower. The device is considered expended after this attempt."
      }
    ],
    "levelRequirementReason": "Even the simplest goblin can fashion one of these grenades.",
    "vendorReason": "The Goblin Junkyard is known for its stock of quirky and unpredictable items, including the infamous Goblin Gizmo Grenades.",
    "shippingDetail": "Due to its explosive nature, this item must be shipped in specially reinforced containers. Shipping times may vary.",
    "usage": {
      "activation": "Ranged Weapon Attack",
      "duration": "Instantaneous",
      "endsWhen": "Expendable after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The unpredictable nature of the grenade makes it a risky but intriguing purchase.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T06:20:25.337786+00:00",
    "aiReviewedAt": "2026-07-22T06:20:25.337786+00:00",
    "aiReviewVersion": 1
  },
  "goblin_kings_mercenary_contract": {
    "id": "goblin_kings_mercenary_contract",
    "name": "Goblin King's Mercenary Contract",
    "description": "The Goblin King's Mercenary Contract is a parchment scroll sealed with Grizznak's sigil, summoning goblin rogues known for their cunning and mischievous tricks. Each squad consists of 1d4+1 goblins who will scout, place traps, or engage in stealthy thefts. They operate under the contract for 24 hours but have a 50% chance of 'finding' items they stole from you earlier, adding to their loot pile without your knowledge.",
    "category": "services",
    "price": 1000,
    "icon": "📜",
    "stock": 6,
    "rarity": "rare",
    "effects": [
      "Goblin Squad Deployment",
      "Hidden Theft"
    ],
    "vendor": "goblin_hr_department",
    "shippedBy": "Suspicious Package Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Goblin Squad Deployment",
        "rules": "Activates as a bonus action. Summons 1d4+1 goblin rogues (level 3) for 24 hours. The goblins operate under stealth and do not engage in direct combat. They can be dismissed at any time by the user."
      },
      {
        "title": "Hidden Theft",
        "rules": "The summoned goblins have a 50% chance of 'finding' items they stole from you earlier, adding to their loot pile without your knowledge. This effect lasts for the duration of the contract and ends when the goblins are dismissed or the contract expires."
      }
    ],
    "levelRequirementReason": "Only a seasoned adventurer with at least 6 levels can handle the strategic deployment and risks involved in summoning these mischievous goblins.",
    "vendorReason": "The Goblin HR Department specializes in crafting contracts that harness the unique skills of their kin, ensuring adventurers have access to this valuable service.",
    "shippingDetail": "Ships within 48 hours; delivery includes a tracking code and a note from Grizznak himself.",
    "usage": {
      "activation": "Bonus action to summon the goblins.",
      "duration": "24 hours for each deployment.",
      "endsWhen": "Dismissed by the user or contract expiration.",
      "charges": "Unlimited, but only one squad can be deployed at a time."
    },
    "priceReason": "The contract ensures strategic goblin assistance without breaking the balance of the campaign. It's priced reasonably to reflect its utility and risk.",
    "priceOriginal": 16800,
    "priceReviewedAt": "2026-07-22T06:20:55.839478+00:00",
    "aiReviewedAt": "2026-07-22T06:20:55.839478+00:00",
    "aiReviewVersion": 1
  },
  "god_of_war_leviathan": {
    "id": "god_of_war_leviathan",
    "name": "Leviathan Axe Replica",
    "description": "The Leviathan Axe Replica is a fearsome weapon, its head forged from the bones of ancient sea creatures and its haft hewn from driftwood. It returns to your hand when thrown, and upon striking an enemy, it freezes them in their tracks, forcing them to make a Constitution saving throw or be restrained until they succeed. This axe is not only resilient but also imbued with godly durability, ensuring it remains in perfect fighting condition through countless battles.",
    "category": "equipment",
    "price": 24000,
    "icon": "🪓",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Return on Throw",
      "Freeze and Restrain"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Axe Crate",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Return on Throw",
        "rules": "When thrown as an action, the axe returns to your hand at the start of your next turn. If it strikes a creature, it reappears in your hand after the attack."
      },
      {
        "title": "Freeze and Restrain",
        "rules": "If you hit with this weapon, the target must make a Constitution saving throw (DC 15) or be restrained until they succeed. The effect ends if the target moves more than 5 feet or if it is broken."
      }
    ],
    "levelRequirementReason": "This axe requires a minimum level of 10 due to its godly durability and unique properties.",
    "vendorReason": "The Gilded Gryphon, known for its extensive collection of rare artifacts, is the only vendor to stock this legendary weapon.",
    "shippingDetail": "Delivered by a trusted courier, ensuring safe arrival within three game days.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (returns on your next turn)",
      "endsWhen": "The target moves more than 5 feet or the axe is broken",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's legendary rarity, godly durability, and unique properties.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T06:21:08.266063+00:00",
    "aiReviewedAt": "2026-07-22T06:21:08.266063+00:00",
    "aiReviewVersion": 1
  },
  "godly_artifact_auction": {
    "id": "godly_artifact_auction",
    "name": "Legendary Artifact Auction Bid (Minimum)",
    "description": "The Legendary Artifact Auction Bid is a shimmering, sealed envelope inscribed with celestial runes and held by an auction house courier. Inside lies the chance to win one of five godly artifacts, each as ancient as the heavens themselves. The auction starts at a minimum bid of 500,000 gp, but bidders must be wary; once the hammer falls in seven days, any overbid will send you reeling from the underworld's gaze. Winning such an artifact not only grants you its power but also bestows legendary status among the dead and living alike.",
    "category": "premium",
    "price": 280000,
    "icon": "🏺",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Enter exclusive auction for one of five godly artifacts",
      "Winners receive a legendary artifact with underworld recognition"
    ],
    "vendor": "celestial_exchange",
    "shippedBy": "Auction House Invitation",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Auction Participation",
        "rules": "This item allows you to participate in the auction. The auction starts at 500,000 gp and can exceed this amount if outbid. You must be present or have a representative at the auction house for bidding."
      },
      {
        "title": "Legendary Status",
        "rules": "Upon winning an artifact, you gain legendary status in both the mortal and underworld realms. This status confers significant respect and influence but also makes you a target of envy and competition."
      }
    ],
    "levelRequirementReason": "This item requires high-level expertise to afford and handle its potential risks.",
    "vendorReason": "The Celestial Exchange is known for handling the most prestigious auctions of divine and godly artifacts.",
    "shippingDetail": "Delivered by a courier with an escort to ensure the envelope's integrity and safety.",
    "usage": {
      "activation": "Activate on demand during the auction period",
      "duration": "Instantaneous, lasting until the hammer falls or you are outbid",
      "endsWhen": "Exhausted upon winning an artifact or being outbid beyond your means",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at a fraction of its true value to reflect the prestige and risk involved.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T06:21:09.984551+00:00",
    "aiReviewedAt": "2026-07-22T06:21:09.984551+00:00",
    "aiReviewVersion": 1
  },
  "godly_blessing_ceremony": {
    "id": "godly_blessing_ceremony",
    "name": "Godly Blessing Ceremony",
    "description": "The Godly Blessing Ceremony is a sacred ritual overseen by the High Priest of the Temple Eternal. This divine service bestows an enduring aura that grants +1 to all saving throws for one year, making you visibly blessed with a halo or stigmata. The god's favor may be invoked once annually, ensuring success on a single critical moment, but beware—your deity may demand future service in exchange for this boon.",
    "category": "premium",
    "price": 4900,
    "icon": "⛪",
    "stock": 3,
    "rarity": "epic",
    "effects": [
      "Divine Aura",
      "Annual Divine Intervention"
    ],
    "vendor": "temple_eternal",
    "shippedBy": "Ceremonial Ritual",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divine Aura",
        "rules": "Gain +1 to all saving throws until the end of your next long rest. This effect is visible, manifesting as a radiant glow or holy symbol on you."
      },
      {
        "title": "Annual Divine Intervention",
        "rules": "Once per year, upon successfully petitioning the god during this ceremony, you may automatically succeed one saving throw. The deity may require future service or a quest in exchange for granting this intervention."
      }
    ],
    "levelRequirementReason": "This ritual is accessible to all who seek divine favor, making it available at level 1.",
    "vendorReason": "The Temple Eternal is the custodian of sacred rituals and divine blessings, ensuring such a ceremony can only be conducted here.",
    "shippingDetail": "Ships via ceremonial carriage, delivered by the temple courier with utmost reverence.",
    "usage": {
      "activation": "The High Priest performs the ceremony at the Temple Eternal. The effect begins immediately and lasts until your next long rest.",
      "duration": "Until your next long rest",
      "endsWhen": "Upon completion of a long rest",
      "charges": "Unlimited, as you can petition once per year"
    },
    "priceReason": "The price reflects the significant resources and divine energy required to perform such a sacred ritual.",
    "priceOriginal": 110000,
    "priceReviewedAt": "2026-07-22T06:21:14.304088+00:00",
    "aiReviewedAt": "2026-07-22T06:21:14.304088+00:00",
    "aiReviewVersion": 1
  },
  "gold_bar": {
    "id": "gold_bar",
    "name": "Gold Bar",
    "description": "A solid bar of gold, gleaming and heavy in your hands. This ancient artifact is not merely currency; it's a symbol of wealth and power from an era long past. When struck with force, the Gold Bar can be used as a makeshift weapon, delivering a powerful blow to any foe within reach. Legend says that its weight alone can humble even the mightiest of warriors, making it a treasured relic among those who value both strength and history.",
    "category": "curiosities",
    "price": 45,
    "icon": "🥇",
    "stock": 100,
    "rarity": "common",
    "effects": [
      "Heavy Improvised Weapon",
      "Symbol of Wealth"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Armored Truck",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Improvised Weapon",
        "rules": "When you strike with the Gold Bar as an improvised weapon, you make a melee attack against a target within reach. On a hit, the target takes 1d8 bludgeoning damage plus your Strength modifier."
      },
      {
        "title": "Symbol of Wealth",
        "rules": "As a bonus action, you can display the Gold Bar to gain advantage on saving throws related to being charmed or frightened for 1 minute. This effect ends early if you are no longer able to see the Gold Bar."
      }
    ],
    "levelRequirementReason": "The Gold Bar's weight and historical significance make it accessible to even the most novice adventurers.",
    "vendorReason": "Wario Direct deals in a variety of rare items, including those with historical or monetary value.",
    "shippingDetail": "Shipped via armored truck for extra security and to prevent the Gold Bar from being damaged during transit.",
    "usage": {
      "activation": "Improvised Weapon: On a strike; Symbol of Wealth: As a bonus action, once per short rest.",
      "duration": "Instantaneous (improvised weapon); 1 minute (symbol of wealth).",
      "endsWhen": "The effect ends if you are no longer able to see the Gold Bar or at the end of your next turn.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Gold Bar is priced moderately as it combines historical value with practical utility, making it a desirable item for adventurers seeking both power and prestige.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T19:42:23.437987+00:00",
    "aiReviewedAt": "2026-07-22T19:42:23.437987+00:00",
    "aiReviewVersion": 1
  },
  "gold_bar_x3": {
    "id": "gold_bar_x3",
    "name": "Gold Bar x3",
    "description": "Three solid gold bars, each a yard in length and as heavy as a warhorse’s armor. Crafted from the purest ore found deep within the Lich King's forges, these bars shimmer with an inner glow that hints at their ancient origins. Wario personally mines them, ensuring they are free of any impurities or flaws. These gold bars are not merely worth 3000 gold coins each; they are a testament to the king’s power and wealth.",
    "category": "curiosities",
    "price": 240,
    "icon": "🏆",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Worth 3000 Gold Coins",
      "Very Heavy"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Armored Convoy",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mined by Wario",
        "rules": "These gold bars, when presented as payment to Wario Direct, grant a +2 bonus to Charisma (Deception) checks. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Deadly Weight",
        "rules": "When you use these gold bars in combat and drop them on an enemy within 5 feet, it must succeed on a DC 14 Strength saving throw or be knocked prone. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Beginners need to start small, and these gold bars are no exception.",
    "vendorReason": "Wario personally mines these gold bars and sells them directly from his mine in the Lich King's forges.",
    "shippingDetail": "Ships via Armored Convoy, known for their punctuality and secure deliveries. Delays may occur if the convoy is ambushed by bandits.",
    "usage": {
      "activation": "Use as a bonus action to activate either effect.",
      "duration": "Instantaneous or until end of next short/long rest depending on the effect used.",
      "endsWhen": "The effect ends at the end of your next short or long rest, whichever comes first.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "These gold bars are crafted with rare and ancient materials, making them a bargain compared to their value.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-22T06:22:14.247172+00:00",
    "aiReviewedAt": "2026-07-22T06:22:14.247172+00:00",
    "aiReviewVersion": 1
  },
  "gold_flower": {
    "id": "gold_flower",
    "name": "Gold Flower",
    "description": "The Gold Flower gleams with an otherworldly radiance, its petals shimmering like solid gold coins. This rare consumable can turn enemies into currency when used: it deals devastating force damage and, if successful in a kill, converts the slain foe's remains into 100gp per Challenge Rating. When activated, you transform briefly into solid gold, gaining +5 AC and immovable form for one round, but you cannot take any actions during this time.",
    "category": "consumables",
    "price": 24000,
    "icon": "🌻",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Devastating Force Damage",
      "Turn Enemies to Gold"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Armored Truck",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Devastating Force Damage",
        "rules": "As a bonus action, expend 1 charge. This consumes the item and deals 20d6 force damage in a 30-foot radius centered on you. Targets must make a DC 15 Dexterity saving throw or be knocked prone. On a failed save, they are also stunned until the end of their next turn."
      },
      {
        "title": "Turn Enemies to Gold",
        "rules": "If any target reduced to 0 hit points by this effect is an enemy creature, it transforms into gold coins worth 100gp per Challenge Rating. This transformation occurs on a successful save only; otherwise, the item's effects are wasted."
      }
    ],
    "levelRequirementReason": "Requires at least fifth level to master the forces that bind and transform.",
    "vendorReason": "Wario Direct specializes in rare and powerful consumables, including this legendary item.",
    "shippingDetail": "Ships via armored truck with a two-day delivery guarantee.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The effects end upon successful save by the target or upon using all charges.",
      "charges": "3 Charges"
    },
    "priceReason": "Balanced for a legendary item, reflecting its rarity and powerful effects.",
    "priceOriginal": 300000,
    "priceReviewedAt": "2026-07-22T06:21:49.235357+00:00",
    "aiReviewedAt": "2026-07-22T06:21:49.235357+00:00",
    "aiReviewVersion": 1
  },
  "golden_tanooki": {
    "id": "golden_tanooki",
    "name": "Golden Tanooki Statue",
    "description": "The Golden Tanooki Statue looms like a guardian of gold, its eyes gleaming with ancient wisdom. Crafted from solid gold and imbued with the spirit of the forest, it bestows invincibility frames for a price. For those who dare to purchase it, this statue grants permanent 'Dodge' actions (disadvantage on attacks against you) and resistance to all damage types. However, if you ever fall into a pit, you are doomed; there is no saving throw or reprieve from the curse that comes with its protection.",
    "category": "premium",
    "price": 24000,
    "icon": "🦊",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Invincibility Frames",
      "Resistance to All Damage Types"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Golden Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Permanent 'Dodge' Action",
        "rules": "You gain a permanent 'Dodge' action, granting disadvantage on attacks made against you. This effect does not stack with similar abilities."
      },
      {
        "title": "Resistance to All Damage Types",
        "rules": "You have resistance to all damage types as long as the Golden Tanooki Statue remains in your possession and is not damaged or destroyed."
      }
    ],
    "levelRequirementReason": "Even the simplest of heroes can afford this priceless artifact, making it accessible for any adventurer.",
    "vendorReason": "Toad Town Market, known for its eclectic and often whimsical offerings, offers this rare and precious statue to all who seek protection in the form of gold and forest magic.",
    "shippingDetail": "The Golden Box Express delivers with utmost care, ensuring the statue arrives safe and sound at your doorstep within a week.",
    "usage": {
      "activation": "Passive effect; no activation required. The 'Dodge' action is always available when in combat.",
      "duration": "Permanent until destroyed or sold to another party.",
      "endsWhen": "The statue's protection ends if it is damaged, destroyed, or sold to a new owner.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Golden Tanooki Statue offers unparalleled protection at a price that reflects its rarity and the value of gold itself.",
    "priceOriginal": 480000,
    "priceReviewedAt": "2026-07-22T06:21:40.027895+00:00",
    "aiReviewedAt": "2026-07-22T06:21:40.027895+00:00",
    "aiReviewVersion": 1
  },
  "golden_toilet": {
    "id": "golden_toilet",
    "name": "Golden Toilet",
    "description": "The Golden Toilet, a throne-like urinal crafted from solid gold and adorned with opaline accents, serves as both a luxury restroom and a source of serenity. After use, it flushes away not just waste but also the stress that lingers after each task completed. Nobles often gather around to witness its majestic glow, hoping for good fortune. The toilet is indestructible, self-cleaning, and attracts those with envy who wish to bask in similar splendor.",
    "category": "premium",
    "price": 4900,
    "icon": "🚽",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Serenity Boost",
      "Indestructibility"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Gold Plating Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Serenity Boost",
        "rules": "When used as an action, the user gains advantage on all checks and saving throws until the end of their next turn. This effect cannot be gained more than once per long rest."
      },
      {
        "title": "Indestructibility",
        "rules": "The Golden Toilet is immune to damage from any source, remains self-cleaning after each use, and is indestructible. It does not require maintenance or repairs."
      }
    ],
    "levelRequirementReason": "The Golden Toilet's opulent design requires a level requirement of 1 to ensure it is appreciated by those who can afford its luxury.",
    "vendorReason": "Wario Direct, known for its premium products and eccentric sales, offers the Golden Toilet as part of their exclusive collection.",
    "shippingDetail": "Ships via Gold Plating Express with a delivery delay of one week due to its custom gold plating process.",
    "usage": {
      "activation": "Used as an action, immediately boosting the user's next turn.",
      "duration": "Until end of their next turn.",
      "endsWhen": "After use or if the user takes another action requiring a check or saving throw.",
      "charges": "Unlimited"
    },
    "priceReason": "The Golden Toilet's price is set at 1000 XP, reflecting its premium design and the labor-intensive gold plating process.",
    "priceOriginal": 100000,
    "priceReviewedAt": "2026-07-22T06:22:21.788017+00:00",
    "aiReviewedAt": "2026-07-22T06:22:21.788017+00:00",
    "aiReviewVersion": 1
  },
  "golden_warp_pipe": {
    "id": "golden_warp_pipe",
    "name": "Golden Warp Pipe",
    "description": "The Golden Warp Pipe is a shimmering conduit of solid gold, its surface polished to a mirror finish that gleams like the sun's rays. This regal artifact not only teleports you to any desired location with a mere thought but also leaves an opulent trail of golden dust, marking your path in luxury and style. Crafted from the very essence of the sun itself, it is immune to all forms of damage and theft, ensuring its safety and exclusivity.",
    "category": "premium",
    "price": 24000,
    "icon": "🪙",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Teleports user to any known location (1/day)",
      "Leaves a trail of golden dust"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Armored Truck",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Teleportation",
        "rules": "The user may activate the Golden Warp Pipe as an action. The teleportation is instantaneous, sending the user to any known location within range. This effect has no save DC and does not require a target or area. The pipe can only be used once per day."
      },
      {
        "title": "Golden Dust Trail",
        "rules": "Upon activation of the Golden Warp Pipe, it leaves behind a trail of shimmering golden dust that marks the path taken during teleportation. This effect is visual and does not have a save DC or target area. The dust remains visible for 1 hour before dissipating."
      }
    ],
    "levelRequirementReason": "The Golden Warp Pipe requires a minimum level of 5 to ensure the user can handle its power safely.",
    "vendorReason": "Wario Direct, known for their unique and high-end items, offers this rare artifact as part of their premium collection.",
    "shippingDetail": "Delivered by a specially armored truck to ensure the pipe's golden trail does not attract unwanted attention during transit.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Charges are exhausted (1/day limit)",
      "charges": "Limited to one use per day"
    },
    "priceReason": "The Golden Warp Pipe is priced at 1000 XP, reflecting its legendary rarity and the daily limit on its usage.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-22T06:22:18.380382+00:00",
    "aiReviewedAt": "2026-07-22T06:22:18.380382+00:00",
    "aiReviewVersion": 1
  },
  "gondor_herbal_remedy_kit_premium": {
    "id": "gondor_herbal_remedy_kit_premium",
    "name": "Gondor Herbal Remedy Kit (Premium)",
    "description": "The Gondor Herbal Remedy Kit (Premium) is a meticulously crafted first aid kit, its leather pouch lined with plush Minas Tirith herbs. Each poultice and salve within this kit carries the essence of the White Tree, ensuring swift recovery for the wounded in battle. The kit's signature remedy not only heals 2d4+2 hit points once per day but also banishes one level of exhaustion, restoring vigor to weary warriors. Its flavor is a harmonious mix of healing and pipe-weed, offering both sustenance and solace.",
    "price": 1000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Heals and Restores",
      "Banishes Exhaustion"
    ],
    "vendor": "kingdom_gondor_healers",
    "shippedBy": "Ranger Caravan",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Prolonged Injury",
        "rules": "Activate as an action. This kit heals the target for 2d4+2 hit points once per day. It also removes one level of exhaustion from the target."
      },
      {
        "title": "Poison Resistance Boost",
        "rules": "The user gains advantage on saving throws against poison for 8 hours after using any remedy from this kit."
      }
    ],
    "levelRequirementReason": "This basic yet effective kit is accessible to all healers and soldiers, regardless of their current level.",
    "vendorReason": "The apothecaries of Gondor are renowned for their expertise in crafting remedies that can withstand the rigors of battle.",
    "shippingDetail": "Delivered by trusted rangers, this kit is often shipped directly from Minas Tirith to ensure it arrives in pristine condition.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "Instantaneous; the effects last until used or the day ends.",
      "endsWhen": "The effect expires at midnight if not used.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Offered at a reduced price to ensure every soldier and healer can access this crucial battlefield aid.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-22T06:22:27.976272+00:00",
    "aiReviewedAt": "2026-07-22T06:22:27.976272+00:00",
    "aiReviewVersion": 1
  },
  "gondor_ranger_campfire_pot": {
    "id": "gondor_ranger_campfire_pot",
    "name": "Gondor Ranger Campfire Pot",
    "description": "The Gondor Ranger Campfire Pot is a robust iron vessel forged by Gondor Blacksmiths. Its sturdy build allows it to resist dampness and brew hearty stews over open flames, reducing cooking time for camp cooks by 15 minutes. Foraging for ingredients becomes easier with this pot; it grants +1 to Survival checks when searching for edible plants in the wild. Though heavy, a full pot imposes disadvantage on carrying rolls, making it cumbersome but indispensable for rangers and their expeditions.",
    "category": "equipment",
    "price": 250,
    "icon": "🍲",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Reduces Cooking Time",
      "Enhances Foraging"
    ],
    "vendor": "kingdom_gondor_outpost",
    "shippedBy": "Trail-Ready Tote",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduced Cooking Time",
        "rules": "When used to prepare stews over an open flame, this pot reduces the cooking time by 15 minutes. This effect is passive and does not require activation."
      },
      {
        "title": "Enhanced Foraging",
        "rules": "+1 to Survival checks when searching for edible plants in wild areas. This benefit lasts until a long rest or until the user’s next extended rest, whichever comes first."
      }
    ],
    "levelRequirementReason": "The Gondor Ranger Campfire Pot is suitable for adventurers of all levels and is thus available to those as low as level 1.",
    "vendorReason": "Kingdom Gondor Outpost caters to the needs of travelers, providing essential gear like this pot for their expeditions.",
    "shippingDetail": "Ships via Trail-Ready Tote, ensuring safe and timely delivery to adventurers in the field.",
    "usage": {
      "activation": "Passive benefit when using the pot over an open flame; +1 to Survival checks while foraging.",
      "duration": "Until a long rest or next extended rest",
      "endsWhen": "Upon completion of a long rest or next extended rest",
      "charges": "Unlimited"
    },
    "priceReason": "The Gondor Ranger Campfire Pot is priced at 1000 XP, reflecting its robust construction and essential utility for adventurers.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T06:22:32.629485+00:00",
    "aiReviewedAt": "2026-07-22T06:22:32.629485+00:00",
    "aiReviewVersion": 1
  },
  "gondor_ranger_survival_kit": {
    "id": "gondor_ranger_survival_kit",
    "name": "Ranger of Gondor Survival Kit",
    "description": "The Ranger of Gondor Survival Kit is a meticulously crafted bundle issued to the elite rangers patrolling Ithilien's perilous borders. Crafted from the sturdy oak of Fangorn Forest, this kit contains ten days' worth of hearty, non-perishable rations and a signal whistle that can be heard for miles across the Misty Mountains. Its leather sheath is lined with medicinal herbs and tools essential for survival in the wild.",
    "category": "equipment",
    "price": 250,
    "icon": "🎒",
    "stock": 15,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Survival checks",
      "Contains ten days of non-perishable rations"
    ],
    "vendor": "Kingdom Gondor",
    "shippedBy": "Messenger Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Survival Checks",
        "rules": "When making a Survival check, you gain advantage if you are in an environment where this kit was designed for. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Non-Perishable Rations",
        "rules": "This kit includes ten days' worth of non-perishable rations that provide basic nutrition. You can consume one ration per day, and they do not spoil or degrade in quality over time."
      }
    ],
    "levelRequirementReason": "The survival skills required to use this kit effectively are taught during the first year of a ranger's training.",
    "vendorReason": "Only the King's rangers are issued these kits, and they source their supplies from Kingdom Gondor.",
    "shippingDetail": "Delivered by trained messenger pigeons that can traverse the treacherous terrain of Ithilien in a single day.",
    "usage": {
      "activation": "Passive effect, but requires your proficiency with Survival checks to activate advantage.",
      "duration": "Until the end of your next long rest",
      "endsWhen": "The long rest ends or you take a long enough break from the environment where this kit is effective.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the high-quality materials and specialized training required to use this survival kit effectively.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:22:46.982306+00:00",
    "aiReviewedAt": "2026-07-22T06:22:46.982306+00:00",
    "aiReviewVersion": 1
  },
  "gondor_stew_recipe": {
    "id": "gondor_stew_recipe",
    "name": "Recipe: Gondor Ranger Stew",
    "description": "The Gondor Ranger Stew Recipe is a parchment scroll adorned with symbols of the wild, detailing a hearty meal made from foraged herbs and game meats. This stew is not just sustenance but a reminder of home, boosting morale and providing vital nourishment during long marches. A successful Survival check (DC 12) can yield enough ingredients to prepare a single serving in one hour. The flavors are rich with the essence of Gondor's wilds, offering temporary health and advantage on Constitution saves against exhaustion.",
    "price": 250,
    "icon": "🍲",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Forage for Ingredients",
      "Boost Morale"
    ],
    "vendor": "kingdom_gondor_outpost",
    "shippedBy": "Rangers Cookbook Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Forage for Ingredients",
        "rules": "This effect requires a Survival check (DC 12) to gather the necessary ingredients. Once successful, it takes one hour to prepare a single serving of stew that serves one person."
      },
      {
        "title": "Boost Morale",
        "rules": "Eating the stew grants temporary hit points equal to 1d6 and advantage on Constitution saving throws against exhaustion for four hours."
      }
    ],
    "levelRequirementReason": "The recipe is accessible to all adventurers, as it does not require any particular skill or background.",
    "vendorReason": "The outpost sells supplies for adventurers, including this cherished recipe from the heart of Gondor.",
    "shippingDetail": "Ships within a week via trusted Ranger courier.",
    "usage": {
      "activation": "Prepare stew by completing a successful Survival check and spending one hour foraging ingredients.",
      "duration": "4 hours of temporary hit points and advantage on Constitution saves against exhaustion.",
      "endsWhen": "The effect ends when the time expires or if the recipe is used again, expending a new serving.",
      "charges": "Unlimited; can be prepared daily."
    },
    "priceReason": "The price reflects the skill and knowledge required to forage effectively and prepare the stew, as well as the ingredients' rarity in the wild.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T06:22:52.036813+00:00",
    "aiReviewedAt": "2026-07-22T06:22:52.036813+00:00",
    "aiReviewVersion": 1
  },
  "gondor_stewards_signal_flare": {
    "id": "gondor_stewards_signal_flare",
    "name": "Gondor Steward's Signal Flare",
    "description": "The Gondor Steward's Signal Flare is a towering pillar of white flame that pierces the sky. Crafted with ancient lore and Minas Tirith's finest materials, this flare summons forth 1d4 Gondor militia in an hour to your aid. However, their presence isn't always welcome; there’s a 50% chance they'll bring supplies you could do without—stale rations and outdated maps. Once lit, the pillar is visible for miles around, so stealth becomes a distant memory.",
    "category": "equipment",
    "price": 250,
    "icon": "🎆",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Summon Gondor Militia",
      "No Stealth"
    ],
    "vendor": "kingdom_gondor_militia",
    "shippedBy": "Pony Express (Gondor)",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Gondor Militia",
        "rules": "When activated as an action, this flare summons 1d4 Gondor militia (NPC Guards) in one hour. There is a 50% chance they will bring stale rations and outdated maps along with them. The effect ends when the summoned militia arrive or if the item is destroyed."
      },
      {
        "title": "No Stealth",
        "rules": "Once used, the pillar becomes visible for 1 mile around, providing no stealth benefit to the user until it extinguishes after 10 minutes."
      }
    ],
    "levelRequirementReason": "Requires minimal training and presence as a basic communication tool.",
    "vendorReason": "The militia is responsible for maintaining the supply of such signals, ensuring they are used effectively in distress situations.",
    "shippingDetail": "Sent via trusted Pony Express couriers; delivery can take up to a week depending on Gondor’s current military engagements.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous summoning, visible for 10 minutes",
      "endsWhen": "Militia arrive or item is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a utility tool that can be used repeatedly without significant risk.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T06:22:42.903838+00:00",
    "aiReviewedAt": "2026-07-22T06:22:42.903838+00:00",
    "aiReviewVersion": 1
  },
  "gondor_warden_shield": {
    "id": "gondor_warden_shield",
    "name": "Gondor Warden Shield",
    "description": "The Gondor Warden Shield, a gleaming white shield emblazoned with the iconic Tree of Gondor, offers its bearer and allies an aura of divine protection. Crafted from enchanted wood by the skilled artisans of Gondor, this shield not only grants +2 AC when wielded as a shield but also emits a faint, protective light that illuminates the area for 10 feet. Should the need arise, striking with it in melee combat can stun an enemy (DC 14 CON save). Its origins lie in the heart of Gondor's sacred forests, where only the most pure-hearted are entrusted with its use.",
    "category": "equipment",
    "price": 5600,
    "icon": "🛡️",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+2 AC when used as a shield",
      "Stun enemy with shield bash (DC 14 CON save)"
    ],
    "vendor": "kingdom_gondor_hq",
    "shippedBy": "Escorted Delivery",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Divine Protection",
        "rules": "The Gondor Warden Shield grants the wielder and nearby allies +2 AC. This effect persists as long as the shield is used in combat."
      },
      {
        "title": "Shield Bash Stun",
        "rules": "When the wielder uses the shield bash action, a target within reach must succeed on a DC 14 Constitution saving throw or be stunned for 1 round. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The shield's divine enchantments require the wielder to have reached at least third level in order to effectively channel its power.",
    "vendorReason": "As a direct representative of Gondor, Kingdom Gondor HQ ensures that only those truly deserving receive this sacred shield.",
    "shippingDetail": "The shield is delivered by a group of elite knights who ensure its safe arrival and proper installation in the recipient's possession.",
    "usage": {
      "activation": "As an action or reaction (shield bash)",
      "duration": "Instantaneous (shield bash), until end of turn (divine protection)",
      "endsWhen": "On a failed save (shield bash), after 1 minute (divine protection)",
      "charges": "Unlimited, but can only be used once per long rest for the shield bash effect"
    },
    "priceReason": "The shield's divine enchantments and the craftsmanship required to produce it justify a higher price than standard shields.",
    "priceOriginal": 22000,
    "priceReviewedAt": "2026-07-22T06:23:19.354123+00:00",
    "aiReviewedAt": "2026-07-22T06:23:19.354123+00:00",
    "aiReviewVersion": 1
  },
  "goodstyle_fabulous_cape": {
    "id": "goodstyle_fabulous_cape",
    "name": "Goodstyle Fabulous Cape ",
    "description": "The Goodstyle Fabulous Cape, a shimmering garment adorned with twinkling sequins and feathers, is the epitome of theatrical elegance. When worn, it not only grants +2 to Performance checks for grand entrances but also provides +1 to Intimidation attempts when intimidating an audience or rival. The cape's glittery fabric creates a dazzling display that can distract foes within 5 feet, compelling them to make a Wisdom saving throw or lose their concentration on one spell they are currently casting.",
    "category": "equipment",
    "price": 250,
    "icon": "🧥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "+2 Performance for grand entrances",
      "+1 Intimidation when facing an audience"
    ],
    "vendor": "goodstyle_boutique",
    "shippedBy": "Sparkle Fold Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Performance Boost",
        "rules": "While wearing the cape, you gain a +2 bonus to Performance checks. This effect is always active while the cape is worn."
      },
      {
        "title": "Glittering Distraction",
        "rules": "When you use an action to command the cape to shimmer and create a dazzling display within 5 feet of a creature, it creates a glittering distraction. The target must make a Wisdom saving throw (DC 13) or lose their concentration on any spell they are currently casting."
      }
    ],
    "levelRequirementReason": "The cape's flashy design and performance benefits require only basic coordination, suitable for a first-level character.",
    "vendorReason": "Goodstyle Boutique specializes in the latest trends and accessories to help customers stand out, making it fitting that they stock this glamorous item.",
    "shippingDetail": "The cape is carefully packed with anti-glitter bubble wrap and shipped by Sparkle Fold Express, known for its fast and secure deliveries.",
    "usage": {
      "activation": "Action (to command the cape to shimmer)",
      "duration": "Instantaneous effect; the glittering display lasts until you dismiss it or another creature moves into the area",
      "endsWhen": "The glittering distraction ends when a creature moves within 5 feet of the area or as an action by the wearer.",
      "charges": "Unlimited, but only one creature can be affected at a time"
    },
    "priceReason": "The cape's unique design and performance benefits justify its price, offering a fair value for players looking to enhance their character's stage presence.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T06:23:14.571605+00:00",
    "aiReviewedAt": "2026-07-22T06:23:14.571605+00:00",
    "aiReviewVersion": 1
  },
  "goodstyle_fancy_finger_foods_recipe": {
    "id": "goodstyle_fancy_finger_foods_recipe",
    "name": "Recipe: Goodstyle Fancy Finger Foods ",
    "description": "The Goodstyle Fancy Finger Foods Recipe is a meticulously crafted guide to creating elegant hors d'oeuvres that dazzle any gathering. Its delicate ingredients and posh presentation ensure that every bite is a feast for both eyes and palate. This recipe, perfected by Style Caterers, allows you to assemble these exquisite morsels in just 20 minutes; savoring one garnish grants +1 Charisma (Performance) bonus for the next hour, enhancing your charm and poise at social events.",
    "price": 250,
    "icon": "🍴",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Charismatic Delight",
      "Elegant Bites"
    ],
    "vendor": "goodstyle_salon",
    "shippedBy": "Delicate Delivery Doves",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charismatic Delight",
        "rules": "When you consume a garnish from this recipe, you gain a +1 bonus to Charisma (Performance) checks for the next hour. This effect does not stack with itself."
      },
      {
        "title": "Elegant Bites",
        "rules": "By using the recipe to assemble hors d'oeuvres in 20 minutes, you create an impressive spread that enhances your social standing and impresses guests. The ingredients must be of high quality for this effect to work."
      }
    ],
    "levelRequirementReason": "This recipe is accessible to all adventurers who wish to dazzle their companions or clients with a touch of elegance.",
    "vendorReason": "Goodstyle Salon specializes in catering and culinary arts, making it the perfect vendor for this refined recipe.",
    "shippingDetail": "Shipped by Delicate Delivery Doves, ensuring your ingredients arrive fresh and ready to use.",
    "usage": {
      "activation": "Consuming a garnish or assembling hors d'oeuvres using the recipe.",
      "duration": "One hour for Charismatic Delight; instantaneous effect when assembling hors d'oeuvres.",
      "endsWhen": "The effects expire naturally after their durations end.",
      "charges": "Unlimited, as long as you have ingredients and time."
    },
    "priceReason": "This recipe is priced at 1000 XP to reflect its high-quality ingredients and the expertise required for its creation.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T06:23:02.330720+00:00",
    "aiReviewedAt": "2026-07-22T06:23:02.330720+00:00",
    "aiReviewVersion": 1
  },
  "goodstyle_hair_styling_premium": {
    "id": "goodstyle_hair_styling_premium",
    "name": "Goodstyle Hair Styling ",
    "description": "The Goodstyle Hair Styling Premium is a compact wand made of polished mahogany and inlaid with shimmering silver threads. This artisanal creation, crafted by Style Wizards, enhances your flair with a touch of elegance. For 24 hours, it grants +2 Charisma and allows your hair to defy gravity, offering advantage on wind-related saving throws. However, the magic is fleeting; after an hour, your hair becomes susceptible to wind's whims, imposing a disadvantage on subsequent checks.",
    "price": 250,
    "icon": "💇",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "+2 Charisma",
      "Hair defies gravity"
    ],
    "vendor": "goodstyle_salon",
    "shippedBy": "Swift Wind Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Activate as a bonus action. The effect lasts for 24 hours and grants +2 to all Charisma checks, ability checks, and saving throws."
      },
      {
        "title": "Gravity Defiance",
        "rules": "Activate by touching your hair with the wand. Grants advantage on wind-related saving throws until the end of your next turn. The effect ends when you use it again or after 1 hour if not used."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to enhance their confidence and style without requiring high-level proficiency.",
    "vendorReason": "Goodstyle Salon specializes in enhancing one's appearance, offering a wide range of products that cater to personal grooming needs.",
    "shippingDetail": "Ships via Swift Wind Courier with same-day delivery within metropolitan areas; rural deliveries take two days.",
    "usage": {
      "activation": "Bonus action for Charisma boost, reaction for Gravity Defiance (must be touched to hair).",
      "duration": "24 hours for Charisma boost, until end of next turn for Gravity Defiance.",
      "endsWhen": "After one hour if not used or when reactivated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item is priced at 1000 XP, reflecting its uncommon rarity and the utility it offers in enhancing social interactions and physical appearance.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T06:23:07.073221+00:00",
    "aiReviewedAt": "2026-07-22T06:23:07.073221+00:00",
    "aiReviewVersion": 1
  },
  "goodstyle_style_sifter": {
    "id": "goodstyle_style_sifter",
    "name": "Goodstyle Style Sifter ",
    "description": "The Goodstyle Style Sifter is a delicate, intricately crafted sifter with a silver handle and a shimmering, ornate body. Made by Style Silvers in their renowned workshop, it sifts with impeccable precision, adding an extra +1 to Charisma (Performance) for any food presentation. The sifted treats are dusted with a layer of sparkling cosmetic glitter that enhances the elegance of the dish. This sifter is designed for refined use and should not be used roughly; too much force could damage its delicate mechanism.",
    "category": "equipment",
    "price": 250,
    "icon": "🍴",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Flair in Every Sift",
      "Enhanced Presentation"
    ],
    "vendor": "goodstyle_salon",
    "shippedBy": "Fancy Flour Fold",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flair in Every Sift",
        "rules": "When you use the Goodstyle Style Sifter to present food, you gain a +1 bonus to your Charisma (Performance) check for that presentation. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Enhanced Presentation",
        "rules": "Any food presented with the sifter is dusted with cosmetic sparkle, adding an additional +20 to its appearance score, which can be used as a reaction to increase the DC of any Charisma (Performance) check made by another creature."
      }
    ],
    "levelRequirementReason": "This sifter requires no special level to use, but is crafted for those who appreciate elegance and finesse in their performances.",
    "vendorReason": "Goodstyle Salon specializes in items that enhance one's performance and presentation, making this sifter a perfect fit.",
    "shippingDetail": "Ships via overnight delivery ensuring it arrives fresh and pristine for your next event.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "Upon exhaustion of charges or at the start of your next long rest",
      "charges": "Unlimited, but requires a short rest to gain any benefits"
    },
    "priceReason": "This sifter is priced moderately as it combines elegance and utility without compromising on quality.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T06:23:22.587707+00:00",
    "aiReviewedAt": "2026-07-22T06:23:22.587707+00:00",
    "aiReviewVersion": 1
  },
  "goomba_king_scepter": {
    "id": "goomba_king_scepter",
    "name": "Goomba King's Scepter",
    "description": "The Goomba King's Scepter is a tarnished relic from the Mushroom Kingdom, forged during the reign of the tyrannical King Koopa. Its dented head glows faintly with ancient power, and those who wield it command the respect of even the most timid Goombas. The scepter’s form is both imposing and fragile, reminiscent of a king's authoritative yet broken crown. When shaken, it summons hordes of obedient Goomba guards to your side, and its headbutt delivers a potent blow that echoes the might of Koopa's lost army.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔱",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Command Goombas",
      "Headbutt Attack"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Mushroom Crate Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Command Goombas",
        "rules": "As an action, you can command nearby Goombas to form a temporary throne around you. These Goombas remain loyal for 1 minute or until they take damage. This effect has no save DC and does not expend charges."
      },
      {
        "title": "Headbutt Attack",
        "rules": "You can make a melee weapon attack with the scepter as a bonus action. On a hit, you deal 1d8 bludgeoning damage plus an additional 2d6 bludgeoning damage if the target is a Goomba or Koopa."
      }
    ],
    "levelRequirementReason": "The relic's power is simple enough to be used by low-level adventurers, but it retains enough danger to be a challenge.",
    "vendorReason": "Gilded Gryphons have a long-standing relationship with the Mushroom Kingdom and often trade in relics of its past.",
    "shippingDetail": "Delivered by Goomba messengers, ensuring safe transport across the kingdom within one day.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Command effect), 1 minute (Throne) or until expended (Headbutt)",
      "endsWhen": "Goombas take damage (Command), after its duration (Throne), or when you make a headbutt attack (Headbutt)",
      "charges": "Unlimited"
    },
    "priceReason": "The relic's historical significance and command abilities justify this fair price in XP.",
    "priceOriginal": 16000,
    "priceReviewedAt": "2026-07-22T06:23:27.998066+00:00",
    "aiReviewedAt": "2026-07-22T06:23:27.998066+00:00",
    "aiReviewVersion": 1
  },
  "goomba_mask": {
    "id": "goomba_mask",
    "name": "Goomba Mask",
    "description": "The Goomba Mask is a meticulously crafted headgear, modeled after the iconic Mushroom Kingdom trooper. Its green, rubbery surface feels warm to the touch, and the eyes are set with small, clear lenses that distort your vision slightly when you wear it. It's said that the mask was once owned by King Shylock himself, who used it to blend in with his goomba soldiers during covert operations. While wearing this mask, Goombas will not attack unless provoked; however, speech is entirely stifled, and the wearer must rely on gestures or other means of communication.",
    "category": "equipment",
    "price": 250,
    "icon": "🍄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Goombas do not attack you unless provoked",
      "Speech is completely suppressed while wearing"
    ],
    "vendor": "valley_trading_post",
    "shippedBy": "Hat Box Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Goomba Non-Aggression",
        "rules": "While the Goomba Mask is worn, Goombas will not initiate attacks against you. This effect lasts for an hour per use and ends when removed or if you provoke a Goomba. There are no saving throws required."
      },
      {
        "title": "Silent Speech",
        "rules": "You remain completely mute while wearing the mask. You can only communicate using gestures, written notes, or other non-verbal means. This effect persists as long as the mask is worn and ends when removed."
      }
    ],
    "levelRequirementReason": "The Goomba Mask's simplicity and widespread use make it accessible to lower-level adventurers.",
    "vendorReason": "Valley Trading Post handles a variety of items from the Mushroom Kingdom, including those used by its inhabitants for both combat and stealth missions.",
    "shippingDetail": "The Hat Box ensures safe delivery using their signature 'Top Hat' courier service, which guarantees a swift arrival within one week.",
    "usage": {
      "activation": "Wear the mask as equipment",
      "duration": "1 hour per use or until removed or provoked",
      "endsWhen": "Removed, provoked, or duration ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Goomba Mask is priced at 1000 XP to reflect its utility and the materials used in its construction.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T19:42:36.673847+00:00",
    "aiReviewedAt": "2026-07-22T19:42:36.673847+00:00",
    "aiReviewVersion": 1
  },
  "goomba_stomp_boots": {
    "id": "goomba_stomp_boots",
    "name": "Goomba-Stomp Boots",
    "description": "Goomba-Stomp Boots are heavy, sturdy footwear crafted from the resilient hides of Goombas, imbued with an ancient magic that amplifies your stomping prowess. These boots not only enhance your attacks against smaller foes but also ensure a hearty sound that terrifies all who hear it. Wearing these boots, you can crush opponents beneath your feet more effectively and even earn a reputation for making the ground shake at your approach.",
    "category": "equipment",
    "price": 250,
    "icon": "👢",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enhanced Stomp Damage",
      "Increased Area of Effect"
    ],
    "vendor": "gilded_gryphon",
    "shippedBy": "Courier Pigeon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Stomp Damage",
        "rules": "When you make a melee attack against a creature smaller than you, the Goomba-Stomp Boots allow you to deal an additional 1d6 bludgeoning damage. This effect lasts for the duration of one short rest and can be used once per long rest."
      },
      {
        "title": "Increased Area of Effect",
        "rules": "For every two levels you possess, the area affected by your stomping actions increases by an additional 5 feet in radius. This effect is always active as long as you are wearing these boots and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "The Goomba-Stomp Boots require at least first level to ensure their effects are balanced with the player's capabilities.",
    "vendorReason": "Gilded Gryphon, a vendor known for its eclectic array of unusual and powerful items, naturally carries these boots as part of its collection.",
    "shippingDetail": "The boots arrive within one day via the swift Courier Pigeon Express service.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts for the duration of one short rest and can be used once per long rest.",
      "endsWhen": "Exhaustion from overuse or upon completion of a short rest.",
      "charges": "Unlimited, recharging at the start of each long rest."
    },
    "priceReason": "The Goomba-Stomp Boots are priced at 1000 XP to reflect their unique abilities and the effort required in crafting footwear from Goomba hides imbued with magic.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T06:24:05.374691+00:00",
    "aiReviewedAt": "2026-07-22T06:24:05.374691+00:00",
    "aiReviewVersion": 1
  },
  "gorgons_blood_antivenom": {
    "id": "gorgons_blood_antivenom",
    "name": "Gorgon's Blood Antivenom (Universal)",
    "description": "The vial of Gorgon's Blood Antivenom, a crimson elixir sealed in a glass bottle, is said to have been distilled from Medusa’s own blood by her trusted alchemist. This potent antidote instantly cures petrification, but it also comes with a dire price: upon its use, the user must endure a 90-day period of vulnerability to any form of encasing or immobilizing attack. Only the most desperate and resourceful heroes dare to carry this elixir on their quests.",
    "price": 4900,
    "icon": "🩸",
    "stock": 10,
    "rarity": "epic",
    "effects": [
      "Instant Cure for Petrification",
      "90-Day Vulnerability"
    ],
    "vendor": "stone_healer",
    "shippedBy": "Stone to Flesh Express Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Cure for Petrification",
        "rules": "When consumed, the Gorgon's Blood Antivenom instantly cures all forms of petrification. The user is no longer affected by any petrifying effects and regains full mobility immediately."
      },
      {
        "title": "90-Day Vulnerability",
        "rules": "For 90 days following its use, the user becomes vulnerable to encasing or immobilizing effects. Any successful attack that would petrify the user will have a +4 bonus to hit and double damage on a successful roll."
      }
    ],
    "levelRequirementReason": "Even the simplest heroes can be struck by petrification, making this item essential for all adventurers.",
    "vendorReason": "The Stone Healer is known for its vast collection of remedies and antidotes that cater to various conditions, including those inflicted by mythical creatures like gorgons.",
    "shippingDetail": "Delivered with utmost haste using the Stone to Flesh express courier, ensuring this vital item arrives safely and swiftly.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous effect; vulnerable state lasts for 90 days",
      "endsWhen": "The 90-day vulnerable period ends upon expiry",
      "charges": "Unlimited, but only one use per day"
    },
    "priceReason": "This item is priced at a balanced 1000 XP due to its rarity and the critical nature of its effects in combat.",
    "priceOriginal": 255000,
    "priceReviewedAt": "2026-07-22T06:23:51.655872+00:00",
    "aiReviewedAt": "2026-07-22T06:23:51.655872+00:00",
    "aiReviewVersion": 1
  },
  "gradual_syrup": {
    "id": "gradual_syrup",
    "name": "Gradual Syrup",
    "description": "Gradual Syrup is a thick, amber-colored syrup that exudes a slow-moving, viscous flow when poured. It restores your arcane might gradually, replenishing one spell slot level at the start of each turn for three consecutive turns. This syrup's power comes from the ancient alchemical traditions of Toad Town, where it was brewed in small batches by the Market's apothecaries using ingredients sourced directly from the town's enchanted gardens.",
    "category": "consumables",
    "price": 250,
    "icon": "🍯",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores Spell Slots",
      "Slow Healing"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Sticky Bottle Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Regenerate Spell Slot Levels",
        "rules": "At the start of your turn, you regain the use of one spell slot level that was expended during the previous battle or combat. This effect lasts for three consecutive turns."
      },
      {
        "title": "Arcane Infusion",
        "rules": "For the duration, any spell cast while under the influence of Gradual Syrup gains a +1 bonus to its saving throw DC and the spell's range is extended by 30 feet. This effect does not stack with similar bonuses."
      }
    ],
    "levelRequirementReason": "Gradual Syrup is suitable for beginners who are still learning how to manage their spell slots.",
    "vendorReason": "The Toad Town Market has a long-standing tradition of offering healing and magical remedies, making Gradual Syrup a natural addition to their product line.",
    "shippingDetail": "Ships via the trusted Sticky Bottle Express with overnight delivery.",
    "usage": {
      "activation": "Passive effect beginning at the start of your turn.",
      "duration": "Three turns.",
      "endsWhen": "The duration ends after three consecutive turns or if you cast a spell that requires more than one slot level.",
      "charges": "Unlimited"
    },
    "priceReason": "Gradual Syrup offers significant benefits in terms of spell slot recovery and enhanced spell effects, making it a cost-effective choice for adventurers.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-22T06:23:41.789528+00:00",
    "aiReviewedAt": "2026-07-22T06:23:41.789528+00:00",
    "aiReviewVersion": 1
  },
  "grand_cathay_fireworks_display": {
    "id": "grand_cathay_fireworks_display",
    "name": "Grand Cathay Fireworks Display",
    "description": "The Grand Cathay Fireworks Display is a grand, meticulously crafted array of pyrotechnics that lights up the night sky. Each explosion sends out showers of stars and fire, creating a dazzling spectacle for miles around. When viewed by allies, their next attack roll gains advantage, providing them with a momentary boost in confidence and accuracy. This display can also be used to signal troops or create a diversion, making it invaluable on the battlefield.",
    "category": "services",
    "price": 1000,
    "icon": "🎆",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Morale Boost",
      "Targeted Advantage"
    ],
    "vendor": "Grand Cathay",
    "shippedBy": "Pyrotechnician Crew",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "When an ally witnesses the fireworks display, they gain advantage on their next attack roll. This effect is instantaneous and does not require any action from the viewer."
      },
      {
        "title": "Targeted Advantage",
        "rules": "The display can be used to signal troops or create a diversion by emitting specific patterns that only allies recognize. Doing so requires an action, and it lasts until the pattern is completed or interrupted."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginning adventurers who need a morale-boosting tool in their early campaigns.",
    "vendorReason": "Grand Cathay is renowned for its expertise in fireworks and celebrations, ensuring that the display is both spectacular and reliable.",
    "shippingDetail": "The crew ensures a safe delivery, but the display must be set off within one week of receiving it to maintain its potency.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for advantage; ongoing for signaling patterns",
      "endsWhen": "Interrupted or completed",
      "charges": "Unlimited"
    },
    "priceReason": "The fireworks are crafted with high-quality materials and require a significant amount of setup, making them a rare and valuable asset.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T06:23:55.413163+00:00",
    "aiReviewedAt": "2026-07-22T06:23:55.413163+00:00",
    "aiReviewVersion": 1
  },
  "grand_cathay_silk_armor": {
    "id": "grand_cathay_silk_armor",
    "name": "Grand Cathay Silk Armor",
    "description": "The Grand Cathay Silk Armor, a shimmering vestment of enchanted silk spun from the finest threads of the Cathay Empire, offers unparalleled protection against slashing attacks. Its weave is so delicate and strong that it can only be worn by those who have proven their worth through rigorous training. This armor not only enhances your defense but also subtly enhances your dexterity, making you a more nimble fighter in close combat.",
    "category": "equipment",
    "price": 250,
    "icon": "👕",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "AC 13 + DEX modifier (max 2)",
      "Resistance to slashing damage"
    ],
    "vendor": "cathay_trade_route",
    "shippedBy": "Silk Bundle Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Defense",
        "rules": "While wearing this armor, your Armor Class is increased by an additional +1 for every point of your Dexterity modifier, up to a maximum of +2. This effect is passive and does not require any action."
      },
      {
        "title": "Slashing Resistance",
        "rules": "When you take slashing damage from an attack or other source, you have resistance against that damage. This resistance persists until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This armor is designed for those who are just beginning their journey into combat, ensuring they can handle basic threats with ease.",
    "vendorReason": "The Cathay Trade Route sources the finest materials and craftsmanship from the heart of the empire, offering this exclusive armor to adventurers seeking authenticity and quality.",
    "shippingDetail": "Ships via Silk Bundle Express, ensuring swift delivery through Cathay's renowned courier service.",
    "usage": {
      "activation": "Passive",
      "duration": "Instantaneous (effect lasts until the start of your next turn)",
      "endsWhen": "The effects end when you remove the armor or it is destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the high demand and craftsmanship required to produce such a unique piece of armor, blending beauty with practicality.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T19:42:21.948512+00:00",
    "aiReviewedAt": "2026-07-22T19:42:21.948512+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_beanbean_bottle": {
    "id": "grand_country_beanbean_bottle",
    "name": "Beanbean Bottled Chaos",
    "description": "The Beanbean Bottled Chaos is a vial of frothy liquid, its surface flecked with gold and emerald hues like a chaotic storm in a glass. It mimics the corrupting influence of the Peasley Financial Scandal, making those who drink it see visions of wealth and prosperity that are as illusory as they are dangerous. Those who imbibe experience temporary courage, bolstered by the very chaos within, but also suffer minor hallucinations of Beanbean coins dancing in front of their eyes. The bottle's contents may occasionally reveal hidden stashes of wealth in Rogueport, a boon for those willing to risk their minds and sanity.",
    "price": 46,
    "icon": "🍽",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Temporary Courage",
      "Minor Hallucinations"
    ],
    "vendor": "grand_country",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Courage",
        "rules": "Drinking this vial grants the imbiber temporary courage equal to 2d4. This effect lasts for a round and can be activated once per session."
      },
      {
        "title": "Minor Hallucinations",
        "rules": "After imbibing, the drinker experiences minor hallucinations of Beanbean coins, causing them to see fleeting visions of wealth. These hallucinations persist until the end of their next turn or when they take damage."
      }
    ],
    "levelRequirementReason": "It requires no specific level as it is a common item and can be found in any shop.",
    "vendorReason": "Grand Country is known for its wide array of exotic and dangerous items, making the Beanbean Bottled Chaos an ideal addition to their stock.",
    "shippingDetail": "Shipped via the Koopa Postal service with no delivery delays. Ensure to handle with care as it may leak if not properly sealed.",
    "usage": {
      "activation": "Drinking the vial",
      "duration": "Instantaneous, lasts for a round",
      "endsWhen": "The effect ends when the drinker takes damage or at the end of their next turn",
      "charges": "Unlimited, can be used once per session"
    },
    "priceReason": "The price is adjusted to reflect its rare and potentially dangerous nature, making it a significant but not overpowered item.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-22T06:24:24.892784+00:00",
    "aiReviewedAt": "2026-07-22T06:24:24.892784+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_connectopia_crafting_rod": {
    "id": "grand_country_connectopia_crafting_rod",
    "name": "Connectopia Crafting Rod",
    "description": "The Connectopia Crafting Rod is a compact, tool-like device forged from the very blocks of the land itself. Crafted within the heart of Connectopia’s bustling workshops, it harnesses the raw potential of the terrain to shape raw materials into functional and durable tools. Each use of this rod transforms three blocks into crafted items, each blessed with an additional 10% durability that lasts for a century or more. However, its power comes at a cost; each activation consumes 300 mana and requires a 20-minute cooldown to recharge.",
    "price": 46,
    "icon": "🛠",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Crafts 3 useful items from raw materials",
      "Each crafted item gains +10% durability"
    ],
    "vendor": "grand_country",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Material Transmutation",
        "rules": "Activates with an action, crafting three blocks into functional tools or structures. Each crafted item gains a +10% durability bonus for one century. Requires 300 mana and a 20-minute cooldown."
      },
      {
        "title": "Connectopia Focus",
        "rules": "Must be used within Connectopian zones; requires the user to have spent time learning its secrets in the workshops of Connectopia."
      }
    ],
    "levelRequirementReason": "It's a common tool for beginners and travelers, but the knowledge required to use it effectively comes from spending time in the workshops.",
    "vendorReason": "The grand country’s artisans are known for their mastery of Connectopian crafting techniques, making this rod a staple among their offerings.",
    "shippingDetail": "Ships via Boo Spectral Mail, ensuring safe and swift delivery to your doorsteps.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Cooldown ends after 20 minutes; uses up one charge from a limited supply of three charges per day",
      "charges": "Limited use; 3 charges per day"
    },
    "priceReason": "The rod is valued at 1000 XP, reflecting the mana cost and its usefulness in transforming raw materials into durable tools.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T06:25:00.711619+00:00",
    "aiReviewedAt": "2026-07-22T06:25:00.711619+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_cursed_potion": {
    "id": "grand_country_cursed_potion",
    "name": "The Laughing Sack",
    "description": "The Laughing Sack is a peculiar, leather pouch imbued with a curse that forces its bearer to giggle uncontrollably for ten minutes. The laughter is so intense it halves your movement speed and renders you vulnerable to nearby attacks. Crafted by the DK Crew, this potion also comes with a hidden danger: consume it within a dungeon, and though you gain temporary blindness, you paradoxically heal +10 hit points at the cost of your vision.",
    "price": 46,
    "icon": "🍸",
    "stock": 1,
    "rarity": "common",
    "effects": [
      "Uncontrollable Laughter",
      "Temporary Blindness"
    ],
    "vendor": "grand_country",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Uncontrollable Laughter",
        "rules": "You are incapacitated for 10 minutes, halving your movement speed and granting advantage on saving throws against fear. Any melee attack made within 5 feet of you has advantage. You cannot move or take reactions during this time."
      },
      {
        "title": "Temporary Blindness",
        "rules": "For the duration of the effect, you are blinded but heal +10 hit points at the start of your turn if you are in a dungeon. This effect ends immediately if you enter combat or leave the dungeon."
      }
    ],
    "levelRequirementReason": "This potion is designed for lower-level characters to provide an amusing yet challenging experience.",
    "vendorReason": "Grand Country's vendors stock a variety of quirky and cursed items, appealing to adventurers seeking unique experiences.",
    "shippingDetail": "Ships within three days via special courier, ensuring the potion remains potent.",
    "usage": {
      "activation": "Drinking the potion as an action.",
      "duration": "10 minutes.",
      "endsWhen": "You enter combat or leave a dungeon; you can drink it only once per long rest.",
      "charges": "Unlimited."
    },
    "priceReason": "The price reflects the potion's unique properties, its cursed nature, and the danger it presents to adventurers.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T06:24:51.907930+00:00",
    "aiReviewedAt": "2026-07-22T06:24:51.907930+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_doughnut_edge_tether": {
    "id": "grand_country_doughnut_edge_tether",
    "name": "Doughnut Edge Tether",
    "description": "The Doughnut Edge Tether is a cursed anchor, forged from twisted dough and bound to the very edge of reality. It hums with latent chaos, its surface flecked with arcane runes that shimmer like fractured starlight. This artifact binds you to the nearest edge of existence when you are stunned, pulling you toward it with irresistible force. Each use grants a 10% increase in damage against Liminal Void entities and has a 20% chance to tear reality on your next attack.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Void Damage Boost",
      "Reality Tear Chance"
    ],
    "vendor": "grand_country",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Void Damage Boost",
        "rules": "When this item is activated, you gain a +1 bonus to damage rolls against entities from the Liminal Void. This effect lasts until the end of your next turn."
      },
      {
        "title": "Reality Tear Chance",
        "rules": "There is a 20% chance that your next attack deal significant additional damage and create a reality tear upon hitting an enemy from the Liminal Void. This effect only triggers once per combat."
      }
    ],
    "levelRequirementReason": "Requires at least level 6 to wield this cursed artifact, ensuring it is not overpowered for lower-level characters.",
    "vendorReason": "Grand Country vendors are known for their unique and powerful artifacts, making the Doughnut Edge Tether a fitting addition to their offerings.",
    "shippingDetail": "Ships via Goomba Ground Delivery, known for its reliable but eccentric couriers. Expect delivery within one week.",
    "usage": {
      "activation": "Activates as an action when you are stunned and pulled toward the nearest edge of reality.",
      "duration": "Effect lasts until the end of your next turn.",
      "endsWhen": "Exhausts after a single use per session.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's powerful abilities and its rarity as a cursed artifact.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:24:58.720167+00:00",
    "aiReviewedAt": "2026-07-22T06:24:58.720167+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_falling_hazard_tether": {
    "id": "grand_country_falling_hazard_tether",
    "name": "Falling Hazard Tether",
    "description": "The Falling Hazard Tether is a sturdy rope crafted from the enchanted threads of the Mushroom Kingdom. It not only binds you to the edge but also grants you an unexpected advantage when airborne foes attack. When you attune to its gravity-defying weave, it reduces fall damage by half and offers a 10% chance for a surprise drop on your enemies. This tether is a Koopa Troop invention, designed specifically for those who dare to explore the unpredictable skies of the Mushroom Kingdom.",
    "category": "equipment",
    "price": 250,
    "icon": "🌪",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Reduces fall damage",
      "Surprise Drop Chance"
    ],
    "vendor": "grand_country",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduced Fall Damage",
        "rules": "When you use this tether, any fall damage is reduced by 50%. This effect lasts until the start of your next turn. You can't use this ability again for 1 minute."
      },
      {
        "title": "Surprise Drop on Enemies",
        "rules": "At the beginning of each enemy's turn, there is a 10% chance that a surprise drop occurs from above you. This effect has no save or DC and can occur multiple times per encounter."
      }
    ],
    "levelRequirementReason": "The tethers are designed for adventurers of all levels to experience the thrills of Mushroom Kingdom aerial combat.",
    "vendorReason": "Grand Country is renowned for its exploration gear, and this tether is a must-have for anyone venturing into the skies over Toad Town.",
    "shippingDetail": "Ships via Goomba Ground Delivery with standard delivery times. Ensure you have it attuned before your next flight.",
    "usage": {
      "activation": "Use as a bonus action when about to fall or encounter airborne foes.",
      "duration": "Instantaneous and recharges at dawn.",
      "endsWhen": "The tether is destroyed by damage, or you stop using it.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced for its utility in aerial combat and exploration, this tether provides a valuable asset to any adventurer.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T06:25:08.666285+00:00",
    "aiReviewedAt": "2026-07-22T06:25:08.666285+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_bolt": {
    "id": "grand_country_gravity_bolt",
    "name": "Gravity Bolt",
    "description": "The Gravity Bolt is a compact device that warps local gravity with a press of its button. In vertical terrain, it grants you a 30% bonus to your movement speed while causing 1d4 damage to any enemy caught in the ensuing inversion. It also activates a brief stasis field, immobilizing an ally within its radius for 10 seconds. Crafted by Lakitu Drones and only functional in The Grand Country's unique gravity fields.",
    "category": "equipment",
    "price": 250,
    "icon": "⚖",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Vertical Terrain Boost",
      "Enemy Damage"
    ],
    "vendor": "grand_country",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vertical Terrain Boost",
        "rules": "When activated, you gain a +30 bonus to your movement speed while on vertical terrain. This effect lasts until the start of your next turn and is limited to once per short or long rest."
      },
      {
        "title": "Enemy Damage",
        "rules": "Any creature within 10 feet that starts its turn under the effects of Gravity Bolt takes 1d4 force damage at the beginning of each of their turns. This effect ends when the device is deactivated or expended."
      }
    ],
    "levelRequirementReason": "This item aids explorers in navigating The Grand Country's unique terrain without requiring a high-level character.",
    "vendorReason": "Grand Country vendors sell this item to aid travelers and adventurers within their jurisdiction.",
    "shippingDetail": "Ships via Lakitu Drones, known for their swift aerial delivery services in The Grand Country.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect lasting until the start of your next turn",
      "endsWhen": "Deactivated or expended after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The Gravity Bolt's balanced price reflects its utility for navigation and combat in The Grand Country.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T21:56:33.949561+00:00",
    "aiReviewedAt": "2026-07-22T21:56:33.949561+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gravity_tether": {
    "id": "grand_country_gravity_tether",
    "name": "Gravity Tether",
    "description": "The Gravity Tether is a sleek, metallic device crafted by DK Crew, designed to tether your feet firmly to any vertical surface. This compact marvel enhances your agility on slopes and cliffs, granting you an additional 10% jump height when ascending. However, it also introduces a whimsical side effect: once every hour, there's a 5% chance that the tether will cause a temporary gravity stutter, making you briefly levitate before crashing back down with double your current weight pressing on you.",
    "category": "equipment",
    "price": 250,
    "icon": "🌌",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Vertical Leap Boost",
      "Gravity Stutter"
    ],
    "vendor": "grand_country",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Vertical Leap Boost",
        "rules": "When used in vertical terrain, the Gravity Tether increases your jump height by 10%. This effect lasts until you land or use it again. No save required."
      },
      {
        "title": "Gravity Stutter",
        "rules": "Once per hour, there is a 5% chance that using the Gravity Tether will cause a brief moment of levitation followed by a crash, dealing 1d6 force damage to you and pushing you back down with twice your current weight. No save."
      }
    ],
    "levelRequirementReason": "This device is designed for beginners and travelers who need the extra boost in vertical environments.",
    "vendorReason": "Grand Country's diverse landscapes make them a prime vendor for this gravity-enhancing gadget.",
    "shippingDetail": "Ships via Noki Coral Fleet with expedited delivery to any port city within a week.",
    "usage": {
      "activation": "As an action or bonus action",
      "duration": "Instantaneous, per use",
      "endsWhen": "You land on the ground or re-use it",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Gravity Tether offers a balance of utility and whimsy, justifying its fair value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:25:13.991246+00:00",
    "aiReviewedAt": "2026-07-22T06:25:13.991246+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_gym_battle_bolt": {
    "id": "grand_country_gym_battle_bolt",
    "name": "Gym Battle Bolt",
    "description": "The Gym Battle Bolt is a sleek, metallic device worn by trainers during Pokémon gym battles. Crafted from iron infused with the essence of legendary gyms, it channels their power to amplify your trainer's abilities. When activated, it grants temporary immunity to status effects and increases attack power by 20% for the duration of any battle. The bolt also has a rare chance to trigger an evolution in Pokémon with hidden forms during gym battles.",
    "category": "equipment",
    "price": 250,
    "icon": "⚔",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Status Immunity",
      "Boosted Attack Power"
    ],
    "vendor": "grand_country",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Status Immunity",
        "rules": "When activated, the Gym Battle Bolt grants temporary immunity to all status effects for the duration of a single gym battle. This effect ends if the trainer loses the battle or when the bolt runs out of charges."
      },
      {
        "title": "Boosted Attack Power",
        "rules": "Activates as a bonus action at the start of any gym battle, increasing the user's attack power by 20% for the duration. This effect is exhausted after one use and recharges when the trainer completes their next gym challenge."
      }
    ],
    "levelRequirementReason": "Beginner trainers can benefit from the Bolt’s amplifying properties without overburdening them with complex mechanics.",
    "vendorReason": "Grand Country is known for its connection to Pokémon gyms and trainers, making it a natural vendor for such an item.",
    "shippingDetail": "Shipped via Koopa Postal with expedited delivery within the region, ensuring timely arrival before battles.",
    "usage": {
      "activation": "Bonus Action at the start of any gym battle",
      "duration": "Duration of a single battle",
      "endsWhen": "Trainer loses the battle or when recharged after completing another challenge",
      "charges": "Unlimited, recharging upon completion of each gym battle"
    },
    "priceReason": "The balanced price reflects the item's moderate abilities and its connection to an important in-game mechanic without overvaluing it.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:25:16.585066+00:00",
    "aiReviewedAt": "2026-07-22T06:25:16.585066+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_name_here": {
    "id": "grand_country_item_name_here",
    "name": "Delfino Bridge Key",
    "description": "The Delfino Bridge Key is a shimmering onyx artifact adorned with the symbol of the Onyx Hand. Crafted from the very essence of Delfino Village, it opens a hidden path between worlds for an hour, granting temporary access to the mystical realm. Upon activation, travelers experience a brief teleportation delay as they pass through the dimensional rift. This key is a relic of ancient craftsmanship, forged by the Onyx Hand to maintain the delicate balance between dimensions.",
    "price": 24000,
    "icon": "🌊",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Opens the Delfino Bridge",
      "Grants temporary access"
    ],
    "vendor": "grand_country",
    "shippedBy": "Paratroopa Air Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Dimensional Passage",
        "rules": "When activated as an action, the user opens a rift in space-time to allow passage through the Delfino Bridge for one hour. This effect has a cooldown of 24 hours."
      },
      {
        "title": "Teleportation Delay",
        "rules": "Upon activation, all travelers passing through the bridge experience a 10-second delay as they traverse the dimensional rift. The effect is instantaneous and does not require an action to activate."
      }
    ],
    "levelRequirementReason": "This key requires mastery of complex spatial magic, making it suitable for players at least 8th level.",
    "vendorReason": "The grand country is renowned for its ties to the mystical realms and thus holds this relic with great reverence.",
    "shippingDetail": "Ships via Paratroopa Air Express, known for its reliable service and quick delivery.",
    "usage": {
      "activation": "Action",
      "duration": "One hour",
      "endsWhen": "The effect ends when the time expires or the key is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "This item's balanced price reflects its rarity and the utility it provides in opening a critical passage between worlds.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T06:25:23.498410+00:00",
    "aiReviewedAt": "2026-07-22T06:25:23.498410+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_minus_world_map_fragment": {
    "id": "grand_country_minus_world_map_fragment",
    "name": "Minus World Map Fragment",
    "description": "The Minus World Map Fragment, a relic of a realm that never returned, is etched with arcane symbols and glowing with ethereal light from the Grand Country. Crafted by Mr. Wario himself after the cataclysmic Minus World Incident, it reveals hidden paths through The Grand Country and grants a 50% chance to uncover lost faction members. However, using this fragment leaves the user feeling dizzy for 30 minutes, impairing their senses until the effects subside.",
    "price": 24000,
    "icon": "🌌",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Reveals Hidden Paths",
      "Grants Chance to Find Lost Faction Members"
    ],
    "vendor": "grand_country",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "The user gains advantage on perception checks and can see through illusions in The Grand Country for a duration of 1 hour. This effect is triggered upon use."
      },
      {
        "title": "Chance to Find Lost Faction Members",
        "rules": "The user has a 50% chance to locate a lost faction member within the next 24 hours after using this fragment. This effect lasts until used, but only usable once per lifetime."
      }
    ],
    "levelRequirementReason": "Even beginners can harness the power of this relic to aid their journey through The Grand Country.",
    "vendorReason": "The grand country's lore and geography are deeply intertwined with the Minus World Map Fragment, making it a natural fit for their inventory.",
    "shippingDetail": "Ships under cover of darkness to ensure safe delivery through The Grand Country’s treacherous terrain.",
    "usage": {
      "activation": "Used as an action at the start of your turn.",
      "duration": "1 hour or until used up, whichever comes first.",
      "endsWhen": "The user's senses are impaired by dizziness for 30 minutes after use.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and the limited lifetime usage, making it a valuable tool without being overpowered.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T06:25:42.383043+00:00",
    "aiReviewedAt": "2026-07-22T06:25:42.383043+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_mystic_tinker_tool": {
    "id": "grand_country_mystic_tinker_tool",
    "name": "The Forge of Forgotten Schemes",
    "description": "The Forge of Forgotten Schemes is a tinkerer's dream—a gleaming brass contraption with intricate gears and glowing runes. Crafted by DK Crew, this device allows you to manipulate terrain with precision, creating safe zones or deadly traps in an instant. When activated, it emits a blinding flash of sparks that can cause nearby enemies to misfire or stumble into your carefully designed hazards. A true testament to the Grand Country's frontier expansion tech.",
    "price": 25000,
    "icon": "⚙",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Terrain Manipulation",
      "Glitch Trigger"
    ],
    "vendor": "grand_country",
    "shippedBy": "Noki Coral Fleet",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Terrain Manipulation",
        "rules": "Activates as a bonus action, creating a safe zone or trap within 30 feet. The effect lasts for 1 minute per use and can only be used once every 8 hours. Requires an attunement by a tinkerer or engineer."
      },
      {
        "title": "Glitch Trigger",
        "rules": "There is a 25% chance (DC 14 Dexterity saving throw) that nearby enemies will misfire or trip into your traps for 1d6 + Engineer proficiency bonus damage. The glitch effect ends if the user is incapacitated."
      }
    ],
    "levelRequirementReason": "Requires a high level of skill to properly attune and operate this complex device.",
    "vendorReason": "The Grand Country's frontier expansion tech is renowned for its innovative tools, making The Forge of Forgotten Schemes an essential item for tinkerers there.",
    "shippingDetail": "Delivered by the Noki Coral Fleet with a 2-day transit time from Connectopia.",
    "usage": {
      "activation": "Bonus action to activate, using attunement once per day.",
      "duration": "1 minute per use, ending if you are incapacitated or the device is destroyed.",
      "endsWhen": "Incapacitation or destruction of the device.",
      "charges": "One use per 8 hours"
    },
    "priceReason": "Balanced at 1000 XP, this item reflects its legendary rarity and complex attunement requirements.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T06:25:31.957459+00:00",
    "aiReviewedAt": "2026-07-22T06:25:31.957459+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_oracle_vessel_fragment": {
    "id": "grand_country_oracle_vessel_fragment",
    "name": "Oracle Vessel Fragment",
    "description": "A shard from the necromantic research vessel built by the Oracle, this fragment glows faintly with ancient power. Crafted from enchanted obsidian and imbued with the will of the Oracle, it crackles with latent energy when held. It is said that using this fragment in conjunction with a Pianta artifact reveals hidden lore that even the oldest scholars have forgotten. Fused to an item, it amplifies necromantic spells, reducing spellcasting time by 2 seconds per use and inflicting 1d4 necrotic damage on all enemies within 5 feet.",
    "price": 4900,
    "icon": "⚪",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Necromantic Amplifier",
      "Necrotic Aura"
    ],
    "vendor": "grand_country",
    "shippedBy": "Goomba Ground Delivery",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Necromantic Amplifier",
        "rules": "Activates as a bonus action. Reduces spellcasting time by 2 seconds per use for the caster. This effect lasts until the end of the caster’s next turn."
      },
      {
        "title": "Necrotic Aura",
        "rules": "Inflicts 1d4 necrotic damage on all enemies within a 5-foot radius at the start of each of your turns while attuned to this fragment. This effect ends when you stop being attuned or if you take any action other than moving."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 8 to harness and control the fragment's power effectively.",
    "vendorReason": "As part of their extensive library and artifact collection, Grand Country can provide this rare fragment for scholarly and arcane pursuits.",
    "shippingDetail": "Ships directly from the Grand Library within a week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until end of next turn or until you take an action other than moving",
      "endsWhen": "You stop being attuned to this fragment or take any action other than moving",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the fragment's rarity and its limited availability.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T06:25:38.689521+00:00",
    "aiReviewedAt": "2026-07-22T06:25:38.689521+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_seal_fragment": {
    "id": "grand_country_seal_fragment",
    "name": "Primordial Seal Shard",
    "description": "The Primordial Seal Shard is a jagged, obsidian fragment from the shattered seal beneath the Valley of Bowser. Its surface glows faintly with ancient magic, and when wielded near high-altitude zones, it causes subtle tremors that rattle the very air around you. This relic must be attuned to by a spellcaster to unleash its full potential; only then can it restore one seal fragment in ritual and grant temporary resistance against gravity effects.",
    "price": 1000,
    "icon": "🧩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Seal Fragments",
      "Grants Gravity Resistance"
    ],
    "vendor": "grand_country",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Restore Seal Fragment",
        "rules": "When used during a ritual, the Primordial Seal Shard restores one seal fragment. This effect requires attunement by a spellcaster and is instantaneous."
      },
      {
        "title": "Temporary Gravity Resistance",
        "rules": "For 1 minute while wielded near high-altitude zones, the Primordial Seal Shard grants the wielder 2d4 temporary points of resistance against gravity effects. This effect ends if the shard is removed from a high-altitude zone."
      }
    ],
    "levelRequirementReason": "The Primordial Seal Shard requires attunement by a spellcaster, which typically necessitates at least level 7 to effectively use.",
    "vendorReason": "Grand Country, being the steward of ancient relics and magic items, possesses this shard due to its historical significance in their lore.",
    "shippingDetail": "Ships via Koopa Postal with a delay of three days, ensuring safe delivery to the spellcaster's doorstep.",
    "usage": {
      "activation": "Instantaneous use during ritual; passive effect when near high-altitude zones",
      "duration": "1 minute for gravity resistance",
      "endsWhen": "Effect ends if shard is removed from a high-altitude zone or upon death of the wielder",
      "charges": "Unlimited, but requires attunement"
    },
    "priceReason": "The Primordial Seal Shard's price reflects its rarity and historical significance, as well as the value of attunement.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:26:00.601010+00:00",
    "aiReviewedAt": "2026-07-22T06:26:00.601010+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_soul_tether": {
    "id": "grand_country_soul_tether",
    "name": "Soul Tether",
    "description": "The Soul Tether is a delicate, iridescent pendant crafted from the enchanted essence of Beanbean Kingdom's royal oak. It weaves an unbreakable telepathic bond between its bearer and the kingdom, allowing for instant communication with any emissary. Its pulsating gemstone glows faintly, reducing all incoming damage by 20% while simultaneously reflecting harm back to attackers in the form of psychic energy, dealing 1d4 points of psychic damage on each strike. This artifact is a symbol of trust and power, requiring a Beanbean coin to activate it within the kingdom's borders.",
    "price": 25000,
    "icon": "🤝",
    "stock": 0,
    "rarity": "legendary",
    "effects": [
      "Telepathic Bond",
      "Damage Reduction"
    ],
    "vendor": "grand_country",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Telepathic Bond",
        "rules": "Activates as an action. The bearer can communicate with any emissary of Beanbean Kingdom instantaneously, even across long distances. This effect is limited to one use per day."
      },
      {
        "title": "Damage Reduction and Psychic Reflection",
        "rules": "Passive effect while within Beanbean Kingdom. Reduces all damage taken by 20%. When an enemy attacks the wearer, they suffer 1d4 points of psychic damage as a reaction. This effect has no save DC but is limited to three uses per day."
      }
    ],
    "levelRequirementReason": "Sufficiently advanced for a capable adventurer who can navigate the kingdom's complex telepathic systems.",
    "vendorReason": "The grand country is the heart of Beanbean Kingdom, and thus sells artifacts with deep ties to its royal lineage.",
    "shippingDetail": "Ships within a day via Lakitu Drone express service.",
    "usage": {
      "activation": "Activates as an action by touching the pendant and speaking the activation phrase, 'Soul Tether, connect.'",
      "duration": "Instantaneous for telepathic communication. Passive effect while within Beanbean Kingdom.",
      "endsWhen": "Used up to its daily limit or when removed from Beanbean Kingdom.",
      "charges": "Daily limit of 3 uses"
    },
    "priceReason": "Balanced at a lower price point due to the item's limited duration and effect range.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-22T06:26:09.821071+00:00",
    "aiReviewedAt": "2026-07-22T06:26:09.821071+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_team_rocket_key": {
    "id": "grand_country_team_rocket_key",
    "name": "Team Rocket Keychain",
    "description": "The Team Rocket Keychain is a gleaming metal trinket engraved with the iconic Team Rocket symbol. Crafted from rare magnetic alloy and infused with the remnants of a legendary Pokémon’s evolution stone, it grants access to their hidden lair in the Grand Country's upper strata. Activating it triggers a 5% chance for a rogue Pokémon to appear during battle, adding an unpredictable element to encounters. The keychain also subtly alters your aura, making you more likely to attract unwanted attention from the Ranger Union.",
    "price": 5000,
    "icon": "🎮",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Access to Team Rocket’s Hidden Lair",
      "Rogue Pokémon Summoning"
    ],
    "vendor": "grand_country",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Access to Team Rocket’s Hidden Lair",
        "rules": "Activating this keychain allows you to access a hidden lair in the Grand Country's upper strata. This effect is instantaneous and does not require any save or action."
      },
      {
        "title": "Rogue Pokémon Summoning",
        "rules": "There is a 5% chance that during battle, a rogue Pokémon will appear. This effect is random and occurs once per day. It has no saving throw or DC required."
      }
    ],
    "levelRequirementReason": "The keychain requires a high level to wield due to its connection with Team Rocket’s secretive operations.",
    "vendorReason": "Grand Country is known for dealing in rare and exotic items, including those of the shadowy Team Rocket organization.",
    "shippingDetail": "Ships within a week from the Grand Country’s postal hub. Delivery may be delayed due to the nature of Team Rocket’s activities.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "Permanent until used",
      "endsWhen": "Used once per day, recharges at dawn on the next day",
      "charges": "Unlimited uses"
    },
    "priceReason": "The keychain’s balanced XP price reflects its connection to Team Rocket and its limited daily use.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T06:25:56.122727+00:00",
    "aiReviewedAt": "2026-07-22T06:25:56.122727+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_tomb_keychain": {
    "id": "grand_country_tomb_keychain",
    "name": "Tomb Keychain",
    "description": "The Tomb Keychain, a relic forged from cursed tombstone material, is a small, intricately carved keychain that whispers secrets of the dead into your ear when activated. It grants a 10% chance to bypass traps on the side of a cliff and attracts unwanted attention from Rakasha clans when worn near their hideouts. This artifact can be used as a distraction during heists and opens hidden passages in the Grand Country’s vertical terrain, making it invaluable for explorers and treasure hunters.",
    "category": "equipment",
    "price": 250,
    "icon": "🔑",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Bypass Trap",
      "Attract Attention"
    ],
    "vendor": "grand_country",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bypass Trap",
        "rules": "When worn near a cliffside, the Tomb Keychain grants you advantage on Dexterity (Stealth) checks to bypass traps for 1 minute. This effect ends if you are no longer within 30 feet of the cliff or if you take damage."
      },
      {
        "title": "Attract Attention",
        "rules": "When worn near a Rakasha clan hideout, you and your allies become the target of their attention for 1 hour. You have disadvantage on Dexterity (Stealth) checks within 50 feet of any Rakasha until this effect ends."
      }
    ],
    "levelRequirementReason": "This keychain is designed to help novices navigate treacherous traps and attract unwanted attention, making it accessible for those just starting their adventures.",
    "vendorReason": "The Grand Country's vendors are known for selling relics from ancient tombs, and the Tomb Keychain fits perfectly with their offerings.",
    "shippingDetail": "Due to its cursed nature, this item requires special handling. It is shipped via Koopa Postal’s express courier service for an additional cost of 50 XP.",
    "usage": {
      "activation": "Reaction (Must be within range and not already in the effect's duration)",
      "duration": "1 minute or until you take damage",
      "endsWhen": "You are no longer near a cliffside or Rakasha hideout, or if you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item’s cursed materials and unique abilities that make it both dangerous and invaluable.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-22T06:26:53.223349+00:00",
    "aiReviewedAt": "2026-07-22T06:26:53.223349+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_waluigi_talisman": {
    "id": "grand_country_waluigi_talisman",
    "name": "Waluigi Talisman of Unwritten Law",
    "description": "The Waluigi Talisman of Unwritten Law is a twisted medallion forged from cursed gold, adorned with chaotic runes that shimmer with an eerie glow. It grants its wearer immunity to gravity-defiance penalties in The Grand Country but exacts a price: it attracts cultists who believe in Waluigi's chaotic nature and may cause the wearer to lose sanity if used outside a chaotic environment. Wielded by those daring enough to challenge gravity, this talisman is a relic of chaos and defiance.",
    "price": 25000,
    "icon": "⚔",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Grants immunity to gravity-defiance penalties",
      "Attracts cultists"
    ],
    "vendor": "grand_country",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Gravity Defiance Immunity",
        "rules": "The wearer gains immunity to all penalties related to defying gravity in The Grand Country. This effect is passive and does not require activation."
      },
      {
        "title": "Cultist Attraction",
        "rules": "Once per short rest, the talisman attracts a number of cultists equal to 1 + your Charisma modifier within 50 feet who worship Waluigi as their deity. The effect lasts for 1 minute and ends if you move more than 30 feet away from the center point."
      }
    ],
    "levelRequirementReason": "The talisman's chaotic nature requires a certain level of resolve to wield effectively.",
    "vendorReason": "Grand Country is known for its unique artifacts and this item is a hallmark of their market.",
    "shippingDetail": "The talisman must be shipped in a custom, enchanted box to prevent any chaotic runes from affecting the delivery personnel.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until attuned or removed.",
      "endsWhen": "Requires attunement by a cultist or rogue with black market connections. Ends if used in non-chaotic environments for more than an hour.",
      "charges": "Unlimited, but ends on the above conditions."
    },
    "priceReason": "The talisman's rarity and chaotic nature justify a high price, offering unique benefits in The Grand Country.",
    "priceOriginal": 45000,
    "priceReviewedAt": "2026-07-22T06:26:17.176631+00:00",
    "aiReviewedAt": "2026-07-22T06:26:17.176631+00:00",
    "aiReviewVersion": 1
  },
  "grand_star": {
    "id": "grand_star",
    "name": "Grand Star",
    "description": "The Grand Star is a colossal stellar entity, its surface burning with an infernal glow that illuminates entire systems. Its gravitational pull bends light and space around it, and those who gaze upon it are entranced by its magnetic allure. The ancient observatories of the cosmos crafted this wonder to harness its power, but only at great peril. Those who wield it gain unparalleled strength, flight, and invulnerability—though their presence cannot be hidden from prying eyes or stealthy foes.",
    "category": "forbidden",
    "price": 290000,
    "icon": "⭐",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Mighty Glow",
      "Galactic Flight"
    ],
    "vendor": "comet_observatory",
    "shippedBy": "Supernova Express",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Mighty Glow",
        "rules": "The Grand Star emits a blinding light that fills the area in bright starlight, rendering stealth impossible within its radius. Creatures within the affected area must succeed on a DC 18 Constitution saving throw or be blinded until the start of their next turn."
      },
      {
        "title": "Galactic Flight",
        "rules": "As an action, you can activate the Grand Star's gravitational pull to enable flight at a speed of 100 feet. This effect lasts for a number of rounds equal to your Charisma modifier (minimum 1 round). The star recharges after a long rest."
      }
    ],
    "levelRequirementReason": "Only those with the strength and discipline of a godly entity can harness the raw power of the Grand Star.",
    "vendorReason": "The comet observatories have long been guardians of cosmic wonders like the Grand Star, ensuring they are used responsibly.",
    "shippingDetail": "Delivered by Supernova Express, with a special delivery delay to ensure the safety of those receiving this cosmic marvel.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation, lasts for rounds equal to your Charisma modifier (minimum 1 round)",
      "endsWhen": "The effect ends when you are incapacitated or the star recharges after a long rest",
      "charges": "Unlimited, charges recharge after a long rest"
    },
    "priceReason": "While not as powerful as some godly artifacts, the Grand Star's unique and dangerous nature justifies its relatively high price.",
    "priceOriginal": 1000000,
    "priceReviewedAt": "2026-07-22T19:42:50.840516+00:00",
    "aiReviewedAt": "2026-07-22T19:42:50.840516+00:00",
    "aiReviewVersion": 1
  },
  "grand_star_core": {
    "id": "grand_star_core",
    "name": "Grand Star Core",
    "description": "The Grand Star Core is a gleaming, crystalline artifact, the heart of Rosalina's solar system. Its surface pulses with an ethereal light, drawing in stray cosmic particles and converting them into boundless energy. This core allows for instantaneous space travel within the faction’s territories and powers immense planetary shields capable of deflecting any incoming threat. The comet observatory guards it jealously, as its loss would spell doom for all.",
    "category": "faction",
    "price": 290000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Powers Instantaneous Space Travel",
      "Activates Planetary Shields"
    ],
    "vendor": "comet_observatory",
    "factionBonus": {
      "energy": 100,
      "defense": 50
    },
    "effectDetails": [
      {
        "title": "Instantaneous Space Travel",
        "rules": "The Grand Star Core allows a faction member to instantly travel between any two points within the faction’s territories. This effect is used as an action and requires clear skies or a cloudless environment for optimal function."
      },
      {
        "title": "Planetary Shields",
        "rules": "Activates planetary shields that can deflect all incoming physical attacks. This activation consumes 1 charge from the core, which recharges after 24 hours of inactivity. The shield has a +50 defense bonus and lasts for 1 hour."
      }
    ],
    "levelRequirement": 6,
    "levelRequirementReason": "Requires characters to be at least level 6 to handle the core’s immense power safely.",
    "vendorReason": "The comet observatory is the caretaker and guardian of the Grand Star Core, responsible for its safekeeping and usage within the faction.",
    "shippedBy": "Swift Comet Express",
    "shippingDetail": "Ships via Swift Comet Express, known for its reliability and speed. Delivery time is approximately 12 hours.",
    "usage": {
      "activation": "Action or Reaction (for shield activation)",
      "duration": "Instantaneous (space travel), 1 hour (shield)",
      "endsWhen": "Charges are exhausted or the core is damaged beyond repair",
      "charges": "Limited to 5 charges per day"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its utility and rarity in the faction.",
    "priceOriginal": 1400000,
    "priceReviewedAt": "2026-07-22T06:27:02.841868+00:00",
    "aiReviewedAt": "2026-07-22T06:27:02.841868+00:00",
    "aiReviewVersion": 1
  },
  "grand_theft_auto_car": {
    "id": "grand_theft_auto_car",
    "name": "Custom Car",
    "description": "The Custom Car, a sleek and powerful automobile forged in the heart of Wario's Garage, is a marvel of speed and engineering. Its chassis is reinforced with titanium alloy, making it impervious to minor collisions. Engineered specifically for quick getaways, it can carry four passengers effortlessly and boasts a ramming attack that deals 4d10 bludgeoning damage. The car's faction bonus allows the driver to escape virtually any tight spot without assistance.",
    "category": "faction",
    "price": 25000,
    "icon": "🚗",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Speed",
      "Ram Attack"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Garage Delivery",
    "levelRequirement": 1,
    "factionBonus": {
      "mobility": 50
    },
    "effectDetails": [
      {
        "title": "Speed",
        "rules": "The Custom Car has a base speed of 100 feet and can carry four passengers. It grants the driver advantage on Dexterity (Stealth) checks to escape or flee from any situation."
      },
      {
        "title": "Ram Attack",
        "rules": "As an action, the driver can attempt to ram an opponent within reach with the car. This attack deals 4d10 bludgeoning damage and requires a successful Strength (Athletics) check against the target's AC. The car can only be used for one ramming attack per long rest."
      }
    ],
    "levelRequirementReason": "The Custom Car is designed to be accessible to low-level characters, serving as a reliable getaway vehicle.",
    "vendorReason": "Wario Direct specializes in high-performance vehicles and equipment, making the Custom Car an obvious addition to their inventory.",
    "shippingDetail": "The car is delivered by Garage Delivery, a service known for its efficiency and reliability.",
    "usage": {
      "activation": "Action or Reaction (for ramming attack)",
      "duration": "Instantaneous (ramming attack)",
      "endsWhen": "After the ramming attack or when the vehicle is destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Custom Car, while not as powerful as its legendary counterparts, offers a significant boost to mobility and combat effectiveness at a fair price.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T06:26:56.228053+00:00",
    "aiReviewedAt": "2026-07-22T06:26:56.228053+00:00",
    "aiReviewVersion": 1
  },
  "gravity_manipulator_belt": {
    "id": "gravity_manipulator_belt",
    "name": "Gravity Manipulator Belt (Utility)",
    "description": "The Gravity Manipulator Belt, a sleek contraption of GravTech's engineering prowess, allows its wearer to defy gravity in two distinct ways: by boosting their jump height tenfold or activating zero-gravity mode for precise aerial maneuvers. The belt is crafted from lightweight alloy and features a pulsing gravitic core that powers it through 2 hours of continuous use. A true marvel of modern magic, this item was designed to enhance the mobility and combat effectiveness of seasoned adventurers.",
    "price": 1600000,
    "icon": "🪢",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Enhanced Jump",
      "Zero-Gravity Mode"
    ],
    "vendor": "zero_g_shop",
    "shippedBy": "Orbital Belt Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Enhanced Jump",
        "rules": "The user can increase their jump height by tenfold, allowing for impressive aerial acrobatics and greater reach. This effect lasts until the user deactivates it or exhausts its charge."
      },
      {
        "title": "Zero-Gravity Mode",
        "rules": "Activating this mode grants the user complete control over their movement in a zero-gravity environment, allowing for precise aerial maneuvers and complex acrobatics. The user must remain within a 10-foot radius of the belt's activation point to benefit fully from this effect."
      }
    ],
    "levelRequirementReason": "This advanced utility item requires significant skill and experience to master its gravity-defying capabilities.",
    "vendorReason": "Zero G Shop specializes in the most cutting-edge equipment for space explorers and high-flying adventurers, making this belt a natural addition to their inventory.",
    "shippingDetail": "Ships via Orbital Belt Express within two days of purchase, delivered directly to your planet-side hangar.",
    "usage": {
      "activation": "Action",
      "duration": "10 minutes per activation",
      "endsWhen": "Effect ends when the user deactivates it or exhausts its charge",
      "charges": "2 charges"
    },
    "priceReason": "This item's advanced technology and rarity justify a price of 50,000 XP.",
    "priceOriginal": 500000,
    "priceReviewedAt": "2026-07-22T19:43:08.579357+00:00",
    "aiReviewedAt": "2026-07-22T19:43:08.579357+00:00",
    "aiReviewVersion": 1
  },
  "gravity_pipette": {
    "id": "gravity_pipette",
    "name": "Gravity Pipette",
    "description": "The Gravity Pipette is a delicate glass dropper with intricate engravings. Crafted by alchemists in the heart of the city, it can manipulate gravity over small areas and protect its bearer from fall damage. When used on an object within a 5-foot cube, it causes everything to fall ten times slower for one minute, perfect for stabilizing precarious structures or slowing down a plummeting crate. Used on yourself, you ignore all falling damage for the next hour; just be wary of its fragile nature and how easily it could break during rough handling.",
    "category": "equipment",
    "price": 5000,
    "icon": "🧪",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Gravitation Stabilizer",
      "Gravity Shield"
    ],
    "vendor": "alchemist_stall",
    "shippedBy": "Swift Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitation Stabilizer",
        "rules": "Activate as a bonus action within range. Choose a 5-foot cube in line of sight. For the next minute, all objects and creatures in that area fall ten times slower than normal."
      },
      {
        "title": "Gravity Shield",
        "rules": "Activate once per long rest by drinking the contents. You gain immunity to falling damage for one hour. This effect ends when you take any falling damage or at the start of your next short rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who need a reliable tool without overpowered effects.",
    "vendorReason": "The alchemists are known for creating practical tools that aid adventurers in their daily challenges.",
    "shippingDetail": "Delivered within three days of purchase, ensuring it arrives safely and intact.",
    "usage": {
      "activation": "Bonus action or drinking the pipette's contents (for Gravity Shield)",
      "duration": "1 minute for Gravitation Stabilizer; 1 hour for Gravity Shield",
      "endsWhen": "At the start of your next short rest, or if you take falling damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its delicate craftsmanship and utility without being an overpowered item.",
    "priceOriginal": 47000,
    "priceReviewedAt": "2026-07-22T06:27:11.131073+00:00",
    "aiReviewedAt": "2026-07-22T06:27:11.131073+00:00",
    "aiReviewVersion": 1
  },
  "gray_paint_of_moral_ambiguity": {
    "id": "gray_paint_of_moral_ambiguity",
    "name": "Gray Paint of Moral Ambiguity",
    "description": "The Gray Paint of Moral Ambiguity is a mysterious substance that defies categorization, smearing into a malleable gray hue when applied to skin or armor. Rolled from the hands of the enigmatic Gray Area Paint Co., this paint shifts perceptions, making you indiscernible to alignment detection spells and granting advantage on saves against lawful effects while imposing disadvantage on those for chaotic ones. Your very essence becomes a moving target, forcing your allies to reconsider their strategies at every turn.",
    "category": "equipment",
    "price": 250,
    "icon": "🎨",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Gray Shift: Alignment Detection Failure",
      "Ambiguous Advantage"
    ],
    "vendor": "void_drifters_paint",
    "shippedBy": "Neutral Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gray Shift: Alignment Detection Failure",
        "rules": "When worn or applied as a shield, you gain resistance to all alignment-based attacks and effects. This effect lasts until the start of your next turn after activation. You are considered neither lawful nor chaotic for the purposes of spell and ability checks."
      },
      {
        "title": "Ambiguous Advantage",
        "rules": "You have advantage on saving throws against lawful effects but disadvantage on those against chaotic effects. This persists for 1 minute or until you take a short rest, whichever comes first. Once used per day."
      }
    ],
    "levelRequirementReason": "This paint is suitable for all adventurers, providing a versatile tool to navigate the complex social and magical environments.",
    "vendorReason": "Void Drifters Paint specializes in paints that blur lines between reality and illusion, making this item an excellent fit for their catalog.",
    "shippingDetail": "Ships via the Neutral Courier with a standard delivery time of 3 days.",
    "usage": {
      "activation": "Action (applied as a shield or worn)",
      "duration": "1 minute, or until you take a short rest",
      "endsWhen": "The start of your next turn after activation for Gray Shift; ends when the duration expires for Ambiguous Advantage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This paint offers significant strategic advantages in combat and social situations, making it a valuable but not overpowered purchase.",
    "priceOriginal": 14500,
    "priceReviewedAt": "2026-07-22T06:27:30.439994+00:00",
    "aiReviewedAt": "2026-07-22T06:27:30.439994+00:00",
    "aiReviewVersion": 1
  },
  "green_paint_of_envious_imitation": {
    "id": "green_paint_of_envious_imitation",
    "name": "Green Paint of Envious Imitation",
    "description": "The Green Paint of Envious Imitation is a vibrant, emerald-hued pot made by the mischievous Envious Imps Paint Co., whose logo features a sly imp grinning at its reflection in a mirror. This paint not only allows you to blend seamlessly with your surroundings but also casts an illusion that makes you feel envious of whatever surface it perfectly mimics, leading to moments where you're distracted by the stability and charm of that very thing. The scent is unmistakably fresh-cut grass, drawing curious herbivores nearby.",
    "category": "equipment",
    "price": 250,
    "icon": "🎨",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Blend in",
      "Envy Trigger"
    ],
    "vendor": "greenskins_paint_dept",
    "shippedBy": "Paint Tube Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blend In",
        "rules": "You can use an action to apply the paint to yourself and match your appearance with one surface perfectly for up to 1 hour. During this time, you have advantage on Dexterity (Stealth) checks made to hide in environments similar to that surface. The effect is exhausted after use."
      },
      {
        "title": "Envy Trigger",
        "rules": "For the next 24 hours, you are distracted by whatever surface you used the paint to match. You have disadvantage on saving throws against charm effects and other forms of persuasion until this period ends."
      }
    ],
    "levelRequirementReason": "This item is designed for players who want a bit more than just basic camouflage, but not requiring any specific level to use its unique enchantments.",
    "vendorReason": "The Greenskins Paint Department is known for their whimsical yet effective paints, and this particular product has proven popular among adventurers seeking both practical and magical solutions.",
    "shippingDetail": "Delivered via a Paint Tube Express mail service, the paint arrives in its original pot without any damage or leakage.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 hour per day",
      "endsWhen": "After use and after 24 hours of being distracted by envy",
      "charges": "Unlimited, but you can only apply it once a day"
    },
    "priceReason": "The balance price reflects the unique combination of camouflage and charm resistance effects, making it a valuable yet not overpowered item.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T06:27:53.410852+00:00",
    "aiReviewedAt": "2026-07-22T06:27:53.410852+00:00",
    "aiReviewVersion": 1
  },
  "greenskin_waaagh_banner": {
    "id": "greenskin_waaagh_banner",
    "name": "Greenskin WAAAGH! Banner",
    "description": "The Greenskin WAAAGH! Banner is a tattered but potent standard that crackles with the primal energy of the battlefield. Its hum is like the rumbling of distant thunder, and those who stand beneath it feel their blood boil in fierce readiness. Allies within 30 feet are imbued with an unshakable will to fight, while the banner itself seems to call out to nearby Greenskins, drawing them closer whether they're welcome or not.",
    "category": "faction",
    "price": 5000,
    "icon": "🚩",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Battle Frenzy",
      "Greenskin Attraction"
    ],
    "vendor": "Greenskins",
    "shippedBy": "Battlewagons",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Battle Frenzy",
        "rules": "While the banner is planted, all allies within 30 feet gain advantage on melee attack rolls. This effect lasts until the end of your next turn."
      },
      {
        "title": "Greenskin Attraction",
        "rules": "Once per long rest, you can activate the banner to attract nearby Greenskins. If successful, one unaligned Greenskin within 1 mile is drawn to the banner and becomes an ally until it either leaves your immediate vicinity or dies."
      }
    ],
    "levelRequirementReason": "Only seasoned warriors with experience in battle can wield such a volatile artifact.",
    "vendorReason": "The Greenskin WAAAGH! Banner is the pride of their faction and only sold by its creators.",
    "shippingDetail": "Shipped in a massive, armored battlewagon to ensure safe delivery to your doorstep.",
    "usage": {
      "activation": "As an action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The banner is removed or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at a cost that reflects its potent battlefield utility without overshadowing other items.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-22T06:27:28.585310+00:00",
    "aiReviewedAt": "2026-07-22T06:27:28.585310+00:00",
    "aiReviewVersion": 1
  },
  "greenskin_war_banner": {
    "id": "greenskin_war_banner",
    "name": "Greenskin War Banner (Waaagh Boost)",
    "description": "The Greenskin War Banner, a tattered but potent symbol of Waaagh! pride, crackles with the raw energy of unrefined magic. Crafted by the greenskins themselves from ancient wood imbued with the spirits of fallen kin, it bestows a +1 morale bonus to all allies within 60 feet when carried in battle. Legend has it that the banner's power can turn even the most reluctant warriors into berserkers capable of felling armies.",
    "price": 1000,
    "icon": "🚩",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Waaagh Boost",
      "Morale Aura"
    ],
    "vendor": "greenskin_warboss",
    "shippedBy": "Crude Pole Express",
    "levelRequirement": 1,
    "factionBonus": {
      "morale": 25
    },
    "effectDetails": [
      {
        "title": "Waaagh Boost",
        "rules": "Allied greenskin and goblinoid creatures gain a +1 bonus to attack rolls while within 60 feet of the banner. This effect is active as long as the banner is carried in combat by a creature with Strength of at least 10."
      },
      {
        "title": "Morale Aura",
        "rules": "All allies within 60 feet receive a +2 bonus to saving throws against fear and panic effects for the duration. This effect expires when the banner is not being carried in combat or if a creature within the range fails a saving throw."
      }
    ],
    "levelRequirementReason": "The banner's magic is potent but not overwhelming, suitable for even the most novice warriors who can wield its power effectively.",
    "vendorReason": "As a Greenskin Warboss, it is only fitting that they sell this symbol of their might and terror to their allies and enemies alike.",
    "shippingDetail": "The banner is shipped rolled up in a sturdy wooden tube with padding to ensure safe delivery. Expect a few days for the delivery due to its cumbersome nature.",
    "usage": {
      "activation": "Passive effect when carried by a creature meeting the Strength requirement.",
      "duration": "Instantaneous; expires if not being carried or if an ally fails a saving throw.",
      "endsWhen": "The banner is no longer being carried in combat or an allied creature within 60 feet fails a saving throw.",
      "charges": "Unlimited, recharges when the banner is not used for three days."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its potent but not overpowered effect and the greenskins' craftsmanship.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-22T06:28:16.254033+00:00",
    "aiReviewedAt": "2026-07-22T06:28:16.254033+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_choppa_cleaver": {
    "id": "greenskins_choppa_cleaver",
    "name": "Greenskins Choppa Cleaver",
    "description": "The Greenskins Choppa Cleaver is a formidable cleaver forged by the Greenskins, known for its unmatched sharpness and durability. This cleaver grants you an advantage on cooking checks involving chopping vegetables, meat, or bones; it's so precise that even missteps result in a small cut (1d2 slashing damage). When used as a weapon, it delivers 1d6 slashing damage but risks getting stuck in your foe—remove it with a bonus action. Legend has it that the cleaver is always sharp, ensuring you never cut yourself accidentally when retrieving it from its bag.",
    "category": "equipment",
    "price": 250,
    "icon": "🔪",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Cooking Advantage",
      "Weapon Stuck"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cooking Advantage",
        "rules": "You gain advantage on checks to chop ingredients for cooking. Additionally, you take 1d2 slashing damage if you accidentally cut yourself while retrieving the cleaver from its bag."
      },
      {
        "title": "Weapon Stuck",
        "rules": "When used as a weapon, the Greenskins Choppa Cleaver deals 1d6 slashing damage but has a tendency to get stuck in your target. To remove it, you must use a bonus action on your next turn."
      }
    ],
    "levelRequirementReason": "This cleaver is designed for beginners and adventurers who are still learning their skills.",
    "vendorReason": "The Greenskins Choppa Makers have a long-standing reputation for crafting tools that serve multiple purposes, from cooking to combat.",
    "shippingDetail": "Delivered with great enthusiasm by the Choppa Delivery team; expect a cheerful delivery note included in your package.",
    "usage": {
      "activation": "Bonus action to remove when stuck as a weapon.",
      "duration": "Instantaneous effect on checks and damage.",
      "endsWhen": "Exhausted after one use per day.",
      "charges": "Recharges daily."
    },
    "priceReason": "The cleaver's balanced price reflects its dual functionality in combat and cooking without being overpowered.",
    "priceOriginal": 15500,
    "priceReviewedAt": "2026-07-22T06:28:13.290714+00:00",
    "aiReviewedAt": "2026-07-22T06:28:13.290714+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_green_skin_care": {
    "id": "greenskins_green_skin_care",
    "name": "Greenskins Green Skin Care",
    "description": "Greenskins Green Skin Care is a potion that transforms your skin into vibrant emerald hues, granting you an advantage on Charisma checks when dealing with fellow orcs. However, your interactions with non-orcs take a turn for the worse; you must endure disadvantageous rolls as they recoil in disgust at this unnatural greenness. The scent of algae clings to you, hampering your Stealth attempts, but the formula is crafted by Greenskins Cosmetology, ensuring it remains a popular choice among orcish clientele.",
    "category": "services",
    "price": 46,
    "icon": "💚",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Advantage on Charisma checks with orcs",
      "Disadvantage on Charisma checks with non-orcs due to appearance"
    ],
    "vendor": "greenskins",
    "shippedBy": "Green Paint Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma with Orcs",
        "rules": "This effect provides advantage on all Charisma-based checks when interacting with orcs. It lasts for the duration of an hour after drinking the potion."
      },
      {
        "title": "Disadvantage with Non-Orcs",
        "rules": "You must endure disadvantageous rolls on all Charisma-based checks when dealing with non-orcs due to their perception of you as looking ill or repulsive. This effect persists for an hour after consumption."
      }
    ],
    "levelRequirementReason": "This potion is suitable for adventurers of any level but requires a minimum proficiency in Charisma-based skills.",
    "vendorReason": "Greenskins Cosmetology specializes in products that cater to the unique needs and aesthetics of orcish society, making this potion one of their bestsellers.",
    "shippingDetail": "Ships via Green Paint Express within a week. Delivery time may vary based on orcish postal schedules.",
    "usage": {
      "activation": "Drunk as a potion",
      "duration": "One hour per use",
      "endsWhen": "After one hour or when the effect is negated by an opposing action",
      "charges": "Unlimited uses"
    },
    "priceReason": "The potion's balanced price reflects its effectiveness, rarity, and utility in orcish social situations.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T06:28:35.227619+00:00",
    "aiReviewedAt": "2026-07-22T06:28:35.227619+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_orcish_grill_spit": {
    "id": "greenskins_orcish_grill_spit",
    "name": "Greenskins Orcish Grill Spit",
    "description": "This rugged spit is forged from Greenskin iron and designed for use over campfires. Its sturdy frame withstands the abuse of a horde, ensuring that even rough cooking turns out edible. The spit's rusted surface subtly enhances the flavor, adding a layer of earthy richness to every meal. Made by the skilled hands of Orc Forges, it is perfect for those who need reliable equipment in the most unforgiving conditions.",
    "category": "equipment",
    "price": 250,
    "icon": "🥣",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Rust-Enhanced Flavor",
      "Survives Harsh Conditions"
    ],
    "vendor": "greenskins_camp",
    "shippedBy": "Waaagh! Weld Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Rust-Enhanced Flavor",
        "rules": "The spit adds a subtle layer of earthy flavor to cooked meals. This effect is always active while in use and does not require an action."
      },
      {
        "title": "Survives Harsh Conditions",
        "rules": "This spit has advantage on saving throws against damage from harsh environments, such as storms or fires. It can only be destroyed by a direct hit from a destructive spell or a deliberate act of sabotage."
      }
    ],
    "levelRequirementReason": "Requires minimal strength and skill to use effectively.",
    "vendorReason": "Greenskin camps often need reliable equipment for their communal meals.",
    "shippingDetail": "Ships via the fastest available transport, ensuring timely delivery to eager cooks.",
    "usage": {
      "activation": "Use as a normal weapon or cooking tool.",
      "duration": "Instantaneous; recharges after a long rest.",
      "endsWhen": "Destroyed by damage from spells or sabotage.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price for a practical, durable tool with minor flavor benefits.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T19:42:48.049942+00:00",
    "aiReviewedAt": "2026-07-22T19:42:48.049942+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_orcish_loincloth": {
    "id": "greenskins_orcish_loincloth",
    "name": "Greenskins Orcish Loincloth ",
    "description": "The Greenskins Orcish Loincloth, a minimalist garment of rough leather and frayed fabric, is tailored by the brutish artisans of the Greenskin tribes in the heart of their encampments. Worn with pride despite its discomfort during long marches, this loincloth grants the wearer a +1 bonus to Strength checks when performing athletic feats in hot climates. It also instills fear into civilized folk, granting a +2 bonus on Intimidation checks against them. However, prolonged exertion takes its toll; the loincloth's chafing nature imposes disadvantage on Constitution saving throws made during extended marches.",
    "category": "equipment",
    "price": 250,
    "icon": "👙",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Brutish Bravado",
      "Civilized Intimidation"
    ],
    "vendor": "greenskins_camp",
    "shippedBy": "Rough Hide Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brutish Bravado",
        "rules": "While wearing the Greenskins Orcish Loincloth, you gain a +1 bonus to Strength (Athletics) checks in hot climates. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Civilized Intimidation",
        "rules": "When interacting with civilized folk, you have advantage on Intimidation checks and gain a +2 bonus to the check. This effect is temporary and resets after 10 minutes without successfully using it against another target."
      }
    ],
    "levelRequirementReason": "The loincloth's design, though practical for Greenskin warriors, requires no particular level of expertise to wear.",
    "vendorReason": "Greenskins Camp is the primary trading post for all things made or traded by the Greenskin tribes, including their unique and practical clothing items.",
    "shippingDetail": "The loincloth is carefully packed to prevent damage during transport, ensuring it arrives in its original condition.",
    "usage": {
      "activation": "Passive effect while wearing the garment.",
      "duration": "Until the end of your next short or long rest for Brutish Bravado; resets after 10 minutes without successful use for Civilized Intimidation.",
      "endsWhen": "The effects expire as described above, and the loincloth can be worn again when ready.",
      "charges": "Unlimited"
    },
    "priceReason": "The loincloth is priced at 1000 XP to reflect its practical utility, unique cultural significance, and the effort required in its handmade production.",
    "priceOriginal": 9500,
    "priceReviewedAt": "2026-07-22T06:28:46.832141+00:00",
    "aiReviewedAt": "2026-07-22T06:28:46.832141+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_recipe_goblin_gumbo": {
    "id": "greenskins_recipe_goblin_gumbo",
    "name": "Recipe: Greenskins Goblin Gumbo",
    "description": "This parchment bears the scribbled recipe for Greenskins Goblin Gumbo, a dish known to heighten the cook's reflexes and cunning. Made with real goblins (optional), it grants the chef a +1 bonus on Dexterity saving throws for one hour, as well as the ability to understand and speak Goblin for that time. The scent of exotic spices lingers even when not in use, hinting at its origins from the bustling markets of Goblintown.",
    "price": 46,
    "icon": "📜",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Goblin's Reflexes",
      "Speak Goblin"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Goblin's Reflexes",
        "rules": "When you activate this recipe, you gain a +1 bonus to Dexterity saving throws until the end of your next long rest."
      },
      {
        "title": "Speak Goblin",
        "rules": "For one hour after activation, you can understand and speak the Goblin language. You are considered proficient in it for the duration."
      }
    ],
    "levelRequirementReason": "Any character with basic cooking skills can benefit from this recipe.",
    "vendorReason": "Greenskins Survival Cooking is renowned for their unique and exotic recipes, including this one.",
    "shippingDetail": "The delivery is swift but requires a small risk of misplacement due to the chaotic nature of Goblintown.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per activation",
      "endsWhen": "Ends when the duration expires or you take damaging action in combat",
      "charges": "Unlimited, as long as you have raw goblin ingredients"
    },
    "priceReason": "The exotic nature of the recipe and its unique effects justify a moderate price.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T06:28:29.975918+00:00",
    "aiReviewedAt": "2026-07-22T06:28:29.975918+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_recipe_waaagh_fuel_chili": {
    "id": "greenskins_recipe_waaagh_fuel_chili",
    "name": "Recipe: Greenskins WAAAGH! Fuel Chili",
    "description": "This parchment recipe is a fiery legacy from a Greenskin cook who survived a WAAAGH! Its chili, when cooked and consumed, grants you an extra burst of speed and ferociousness. For one hour, your steps are swift as you dance through battle with +10 feet to movement and advantage on attack rolls. Yet, after the fiery rush fades, you're left in a state of intestinal turmoil, giving disadvantage on Stealth checks. Only the most resilient can stomach this concoction.",
    "price": 250,
    "icon": "📜",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "WAAAGH! Fuel",
      "Intestinal Turmoil"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "WAAAGH! Fuel",
        "rules": "Consume the chili to gain +10 feet of movement and advantage on attack rolls for one hour. This effect ends when the duration expires or if you are incapacitated."
      },
      {
        "title": "Intestinal Turmoil",
        "rules": "After the WAAAGH! Fuel effect, suffer disadvantage on Stealth checks until your next long rest due to lingering effects of the chili."
      }
    ],
    "levelRequirementReason": "This recipe is simple enough for any adventurer to try and doesn't require high-level expertise.",
    "vendorReason": "Greenskin Battle Cooks are known for their fiery concoctions that can fuel even the most war-weary warriors.",
    "shippingDetail": "The recipe is shipped in a sealed container to ensure it remains potent until consumption.",
    "usage": {
      "activation": "Consume the chili by cooking and eating it.",
      "duration": "One hour from ingestion.",
      "endsWhen": "Ends when the duration expires or if you are incapacitated.",
      "charges": "Unlimited, as long as you have the recipe."
    },
    "priceReason": "The recipe is moderately priced due to its unique and flavorful effects that can enhance combat effectiveness temporarily.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T06:28:44.127689+00:00",
    "aiReviewedAt": "2026-07-22T06:28:44.127689+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_waaagh_drum_premium": {
    "id": "greenskins_waaagh_drum_premium",
    "name": "Greenskins Waaagh! Drum (Premium)",
    "description": "The Greenskins Waaagh! Drum (Premium) is a massive, painted drum crafted by Ork Warbosses. It resonates with the raw energy of a battlefield, and its deep, thunderous beats can rally even the most weary warriors. When beaten, it channels the orkish spirit to bolster allies within 30 feet, granting them a +1d4 bonus to attack rolls for one minute. The drum's sound is so powerful that it must be accompanied by a battle cry of 'Waaagh!'; failing to do so renders the effect inert.",
    "price": 1000,
    "icon": "🥁",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Battle Cry",
      "Rallying Beat"
    ],
    "vendor": "greenskins_camp",
    "shippedBy": "Troll Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Battle Cry",
        "rules": "Require that you shout 'Waaagh!' for the drum's effects to activate. Failure to do so renders the effect inert."
      },
      {
        "title": "Rallying Beat",
        "rules": "Once per short rest, beat the drum within 30 feet of allies to grant them a +1d4 bonus to attack rolls for one minute. The duration ends early if you or an ally nearby takes damage."
      }
    ],
    "levelRequirementReason": "This basic yet effective tool is accessible to all adventurers, regardless of level.",
    "vendorReason": "Greenskin camps are known for their vibrant culture and constant need for battle-ready equipment.",
    "shippingDetail": "Ships via land route from the nearest Greenskin encampment, typically arriving within a week.",
    "usage": {
      "activation": "A bonus action to beat the drum and shout 'Waaagh!'",
      "duration": "One minute per short rest",
      "endsWhen": "Taking or dealing damage to yourself or nearby allies ends it early.",
      "charges": "Unlimited, but requires a short rest to regain effectiveness"
    },
    "priceReason": "The drum's premium quality and the unique craftsmanship make it a valuable addition to any adventurer's arsenal.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T06:28:53.417215+00:00",
    "aiReviewedAt": "2026-07-22T06:28:53.417215+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_waaagh_energy_drink": {
    "id": "greenskins_waaagh_energy_drink",
    "name": "Greenskins WAAAGH! Energy Drink",
    "description": "Greenskins WAAAGH! Energy Drink is a neon-green, sugary concoction that tastes like the chaos of war itself. It's said to have been brewed in the heart of Skavenblight by the Greenskins Brewmasters, who claim it grants warriors the strength and fervor needed for battle. Sip this drink and your speed increases by 10 feet for an hour; you also gain a +1 bonus on attack rolls. However, after the rush comes a price—your Intelligence checks are at disadvantage until the effect ends due to the brain fog left in its wake.",
    "category": "premium",
    "price": 250,
    "icon": "🥤",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Speed Boost",
      "Attack Bonus"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Consume this drink as an action. You gain a +10 bonus to your speed for one hour, and you have advantage on attack rolls until the start of your next turn after drinking it."
      },
      {
        "title": "Attack Bonus",
        "rules": "After consuming the drink, you have a +1 bonus to all attack rolls until the start of your next turn. This effect does not stack with any other sources of attack bonuses."
      }
    ],
    "levelRequirementReason": "It's designed for any adventurer who needs an extra boost before battle.",
    "vendorReason": "The Greenskins Brewmasters are known for their unique and potent concoctions, making this drink a staple in their inventory.",
    "shippingDetail": "Due to the volatile nature of the contents, Choppa Delivery guarantees safe and swift delivery within 12 hours of purchase.",
    "usage": {
      "activation": "Consume as an action.",
      "duration": "One hour or until you take a long rest.",
      "endsWhen": "The effect ends when you finish your next turn after drinking it or at the start of your next long rest.",
      "charges": "Unlimited, but only one dose can be active at a time."
    },
    "priceReason": "The drink's rarity and unique effects justify its moderate price in terms of XP.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T06:29:24.536174+00:00",
    "aiReviewedAt": "2026-07-22T06:29:24.536174+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_waaagh_gruel_recipe": {
    "id": "greenskins_waaagh_gruel_recipe",
    "name": "Recipe: Greenskins Waaagh! Gruel",
    "description": "A bowl of steaming gruel thickened by the sweat and tears of Ork warriors. This porridge not only fuels their berserk rage but also grants a human ally temporary strength. Consuming it results in a one-hour frenzy where you can lift twice your weight, but your intellect falters—suffering disadvantage on Intelligence checks during this time. The recipe is jealously guarded by Ork Camp Cooks who have learned to harness the primal energy of their kin.",
    "price": 250,
    "icon": "🥣",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Rage Fuel",
      "Berserk Mode"
    ],
    "vendor": "greenskins_camp",
    "shippedBy": "Grubby Grain Guide",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rage Fuel",
        "rules": "Eating this gruel grants you a bonus action to increase your Strength by 2 until the start of your next turn. On your next turn, you can make a melee attack with advantage."
      },
      {
        "title": "Berserk Mode",
        "rules": "While under the effect of the Rage Fuel, you have disadvantage on Intelligence checks and saving throws. This effect lasts for 1 hour or until you take damage."
      }
    ],
    "levelRequirementReason": "This item's effects are best suited for characters who can handle the mental strain.",
    "vendorReason": "Ork Camp Cooks have perfected this recipe and sell it to outsiders seeking a taste of Orkish might.",
    "shippingDetail": "The delivery is slow, as the Grubby Grain Guide must navigate the perilous paths of the Greenskin encampments.",
    "usage": {
      "activation": "Eating the gruel grants you the effects immediately.",
      "duration": "1 hour or until you take damage",
      "endsWhen": "You take damage or the duration expires",
      "charges": "Unlimited, as it is consumed once"
    },
    "priceReason": "The recipe's rarity and the unique effects justify this price.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T06:29:18.047673+00:00",
    "aiReviewedAt": "2026-07-22T06:29:18.047673+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_waaagh_wok": {
    "id": "greenskins_waaagh_wok",
    "name": "Greenskins WAAAGH! Wok",
    "description": "The Greenskins WAAAGH! Wok is a ferocious culinary weapon forged in the heart of Gorkamortis. This screaming wok not only cooks with kinetic energy but also channels the primal might of the Greenskin war-cooks. When wielded, it crackles with fiery power and emits deafening 'WAAAGH!'s', driving away stealthy foes. A single bite from its cooked meal grants a burning fire damage to your next attack, ensuring the battlefield is never left unseasoned.",
    "category": "equipment",
    "price": 250,
    "icon": "🥘",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Cooks with Kinetic Energy",
      "Battle Spice"
    ],
    "vendor": "greenskins",
    "shippedBy": "Choppa Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Cooks with Kinetic Energy",
        "rules": "When you use an action to wield the Wok in combat, it cooks food instantly. The cooked meal grants a bonus to your next attack roll equal to half the proficiency bonus of a Greenskin (+2). This effect can only occur once per short or long rest."
      },
      {
        "title": "Battle Spice",
        "rules": "After consuming the meal prepared by the Wok, you deal an additional 1d6 fire damage on your next melee attack. You cannot benefit from this effect more than twice in a single day."
      }
    ],
    "levelRequirementReason": "Beginners can already appreciate the culinary and tactical benefits of this weapon.",
    "vendorReason": "The Greenskins are renowned for their cooking prowess, so it's no surprise they sell such a versatile item.",
    "shippingDetail": "Ships via Choppa, known for its swift and reliable service within the Warlord's domain.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The meal is consumed or the attack occurs",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to reflect a unique and versatile item, perfect for those who value both combat prowess and culinary skills.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T06:29:07.120176+00:00",
    "aiReviewedAt": "2026-07-22T06:29:07.120176+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_war_paint": {
    "id": "greenskins_war_paint",
    "name": "Greenskins War Paint",
    "description": "Greenskins War Paint is a set of pigments and oils meticulously crafted by Greenskin warriors. When smeared on the skin, it transforms the wearer into an imposing figure, enhancing their presence with every step they take. The paint's vibrant hues and intricate patterns make the wearer seem larger than life, causing immediate intimidation among foes within 30 feet. This war paint is not only waterproof but also lasts a full day, making it perfect for extended battles or skirmishes.",
    "category": "consumables",
    "price": 47,
    "icon": "🎨",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Intimidating Presence",
      "Waterproof"
    ],
    "vendor": "greenskin_warboss",
    "shippedBy": "Paint Pot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intimidating Presence",
        "rules": "When applied to the wearer, the Greenskins War Paint grants advantage on Charisma (Intimidation) checks for 1 hour. This effect can be used once per short or long rest."
      },
      {
        "title": "Waterproof",
        "rules": "The paint is waterproof and remains effective for 24 hours after application, regardless of exposure to water or moisture. There are no saving throws required to maintain the paint's properties."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers who have yet to master their combat prowess but still wish to enhance their battlefield presence.",
    "vendorReason": "The warboss, being a master of Greenskin traditions and craftsmanship, ensures that the paints are of the highest quality and effectiveness in battle.",
    "shippingDetail": "Delivered by Paint Pot within 3 days. The paints must be refrigerated upon arrival to maintain their potency.",
    "usage": {
      "activation": "Apply as a bonus action.",
      "duration": "1 hour, recharges after a short or long rest.",
      "endsWhen": "After the duration ends or if the wearer removes it early.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced price reflects the item's limited duration and the specialized craftsmanship required for its creation, making it accessible to low-level adventurers without being overly powerful.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:29:24.333968+00:00",
    "aiReviewedAt": "2026-07-22T06:29:24.333968+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_war_paint_kit": {
    "id": "greenskins_war_paint_kit",
    "name": "Greenskins War Paint Kit",
    "description": "The Greenskins War Paint Kit is a fearsome face-painting set crafted by the orcs themselves, made from pigments mixed with oils and extracts of local flora. The paint not only grants you advantage on Intimidation checks for seven days but also imbues you with an orcish presence, giving you disadvantage on Charisma checks when interacting with non-orc NPCs. The paint is permanent until removed by scrubbing it off with steel wool, a painful process that takes hours and leaves your skin raw.",
    "category": "equipment",
    "price": 250,
    "icon": "🎨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Intimidation Checks",
      "Disadvantage on Charisma Checks (Non-Orcs)"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fearful Presence",
        "rules": "You gain advantage on all Intimidation checks for a duration of seven days. This effect can be activated and used passively."
      },
      {
        "title": "Orcish Aura",
        "rules": "For the duration, you suffer disadvantage on Charisma checks with non-orc NPCs. The paint is permanent until removed by scrubbing it off with steel wool, which requires at least four hours and results in painful skin irritation."
      }
    ],
    "levelRequirementReason": "This kit is designed for adventurers just starting their journey, providing a basic advantage without overwhelming the player.",
    "vendorReason": "The Greenskins War Painters are renowned for their expertise in creating paints that enhance both combat and intimidation.",
    "shippingDetail": "Ships via the War Drum Courier Service, known for its reliable delivery and quick service within a week of purchase.",
    "usage": {
      "activation": "Passive use; no activation required to gain advantage on Intimidation checks.",
      "duration": "Lasts for seven days from application.",
      "endsWhen": "Paint is removed with steel wool, which takes four hours and leaves the skin irritated.",
      "charges": "Unlimited uses until paint is removed."
    },
    "priceReason": "The price reflects a balance between the item's temporary advantage and its one-time use nature, providing value without breaking the game economy.",
    "priceOriginal": 11500,
    "priceReviewedAt": "2026-07-22T06:30:05.532167+00:00",
    "aiReviewedAt": "2026-07-22T06:30:05.532167+00:00",
    "aiReviewVersion": 1
  },
  "greenskins_war_paint_mixer": {
    "id": "greenskins_war_paint_mixer",
    "name": "Greenskins War Paint Mixer",
    "description": "The Greenskins War Paint Mixer is a formidable tool crafted from rusted metal and adorned with war paint, its mixer head shaped like a fearsome skull. This relic not only blends paints to perfection but also batter for quick meals. Use it in the heat of battle or at the campfire; it grants you advantage on Intimidation checks when donning the painted visage. Alas, its loud operation makes it a poor fit for stealth missions, imposing disadvantage on Stealth checks while in use.",
    "category": "equipment",
    "price": 250,
    "icon": "🎨",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Paint Perfection",
      "Intimidating Paint"
    ],
    "vendor": "greenskins",
    "shippedBy": "War Drum Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Paint Perfection",
        "rules": "When used to mix paints or batter, the user gains advantage on any cooking check involving mixing. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Intimidating Paint",
        "rules": "While wearing war paint mixed with this mixer, the user gains advantage on Intimidation checks. The effect lasts until the start of your next turn after using the mixer to apply the paint."
      }
    ],
    "levelRequirementReason": "The Greenskins War Paint Mixer is a versatile tool that can be wielded by any adventurer, making it accessible at level 1.",
    "vendorReason": "The Greenskins who crafted this mixer are renowned for their war paint and equipment, making them the perfect vendor to sell such a tool.",
    "shippingDetail": "Ships with loud marching drums that announce its arrival in camp.",
    "usage": {
      "activation": "Instantaneous use when mixing paints or batter.",
      "duration": "Instantaneous for the mixing effect; advantage on Intimidation checks lasts until next turn.",
      "endsWhen": "The effect ends naturally at the start of your next turn after using it to apply war paint.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is uncommon but practical, balancing its utility with a price that reflects its versatility and craftsmanship.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T06:29:50.111523+00:00",
    "aiReviewedAt": "2026-07-22T06:29:50.111523+00:00",
    "aiReviewVersion": 1
  },
  "griffonstone_aerial_spit_roaster": {
    "id": "griffonstone_aerial_spit_roaster",
    "name": "Griffonstone Aerial Spit Roaster",
    "description": "The Griffonstone Aerial Spit Roaster is a wind-resistant contraption designed for goulash on the wing, crafted from resilient griffon feathers and enchanted with aerodynamic properties. This lightweight roaster rotates seamlessly in aerial gusts, ensuring your meal never catches too much of the sky's chill. The roaster’s surface leaves a fine, edible layer of grease that adheres to the meat, enhancing flavor without weighing down your griffon cook.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍲",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Wind-Resistant Cooking",
      "Feather Grease Enhancement"
    ],
    "vendor": "griffonstone_aerie",
    "shippedBy": "Wing Wind Ware",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wind-Resistant Cooking",
        "rules": "While the roaster rotates in strong winds, you gain a +1 bonus to cooking checks made for aerial meals. The roaster can only be used in flight and must be held by a creature proficient with flying mounts or creatures."
      },
      {
        "title": "Feather Grease Enhancement",
        "rules": "The grease left on the meat from this roaster enhances its flavor, granting you advantage on saving throws against starvation and dehydration for 1 hour after using it. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "This item is designed for novice flyers who might need help in managing their cooking while airborne.",
    "vendorReason": "Griffonstone Aerial Spit Roasters are a specialty of the Aerie Forgers, known for their innovative items that enhance daily life for griffons and their riders.",
    "shippingDetail": "Delivered by trusted Wing Wind couriers who ensure your roaster arrives intact, even in the most turbulent skies.",
    "usage": {
      "activation": "Use an action to start cooking. The roaster can only be used while flying or hovering.",
      "duration": "Instantaneous effect; lasts until you stop using it.",
      "endsWhen": "The roaster stops rotating when not held in flight, expending its one-time use after the flavor-enhancing effect is applied.",
      "charges": "Unlimited uses, but only one flavor-enhancing effect per day."
    },
    "priceReason": "Crafted with enchanted feathers and designed for specialized aerial cooking, this item offers a unique utility that sets it apart from standard roasters.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T06:29:57.670721+00:00",
    "aiReviewedAt": "2026-07-22T06:29:57.670721+00:00",
    "aiReviewVersion": 1
  },
  "griffonstone_aerial_wing_harness": {
    "id": "griffonstone_aerial_wing_harness",
    "name": "Griffonstone Aerial Wing Harness",
    "description": "The Griffonstone Aerial Wing Harness is a meticulously crafted harness for griffon riders, forged from the molten core of a dormant volcano and reinforced with feathers from ancient griffons. This harness not only provides advantage on flight maneuvers but also ensures the rider's safety during steep dives by securing them tightly to the griffon’s back. The straps are lined with volcanic glass that repels water, making it perfect for both dry and wet climates.",
    "category": "equipment",
    "price": 1100,
    "icon": "🎽",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Advantage on Flight Maneuvers",
      "Secure During Dives"
    ],
    "vendor": "griffonstone_nest",
    "shippedBy": "Wing Wing Express Delivery",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Advantage on Flight Maneuvers",
        "rules": "The harness grants the rider advantage on any ability check or saving throw related to mounted flight maneuvers. This effect lasts as long as the rider is mounted and actively using the harness."
      },
      {
        "title": "Secure During Dives",
        "rules": "When the griffon dives, the harness locks into place, preventing the rider from falling off during sharp descents. This effect is triggered automatically when a griffon begins a dive."
      }
    ],
    "levelRequirementReason": "This harness requires significant skill and strength to operate effectively, suitable only for riders of at least 7th level.",
    "vendorReason": "Griffon Aviators are renowned for their expertise in crafting gear for griffon riders, ensuring the highest quality and reliability.",
    "shippingDetail": "Ships via specialized griffon couriers. Awaiting weather conditions may delay delivery by up to three days.",
    "usage": {
      "activation": "Passive effect upon mounting a griffon.",
      "duration": "Lasts until the rider dismounts or the harness is removed.",
      "endsWhen": "The harness automatically detaches when the rider dismounts or if it suffers damage exceeding half its original value.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from volcanic glass and reinforced with ancient griffon feathers, this harness is a rare find, justifying the reduced price.",
    "priceOriginal": 19500,
    "priceReviewedAt": "2026-07-22T06:30:23.832053+00:00",
    "aiReviewedAt": "2026-07-22T06:30:23.832053+00:00",
    "aiReviewVersion": 1
  },
  "griffonstone_griffon_feather_quill_premium": {
    "id": "griffonstone_griffon_feather_quill_premium",
    "name": "Griffonstone Griffon Feather Quill (Premium)",
    "description": "The Griffonstone Griffon Feather Quill (Premium) is crafted from the downy feathers of a griffon, imbued with the essence of its noble spirit. This quill never runs out of ink and writes under its own volition when you sign an important contract, sealing your promise with a feathered tickle that only you can feel. The quill's ink binds lightly but is unbreakable in the eyes of those who value honor above all.",
    "price": 1100,
    "icon": "🪶",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Feathered Binding",
      "Ink Never Fails"
    ],
    "vendor": "griffonstone_aerie",
    "shippedBy": "Winged Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Feathered Binding",
        "rules": "When you sign a contract with this quill, it writes under its own volition and seals your word. The ink dries instantly, creating an unbreakable bond that cannot be tampered with or erased without the signer's consent."
      },
      {
        "title": "Ink Never Fails",
        "rules": "This quill never runs out of ink and can write continuously until it is no longer in use. It requires no refills or replacements, ensuring it remains a reliable companion for all your drafting needs."
      }
    ],
    "levelRequirementReason": "The quill's magic is straightforward and does not require high-level arcane knowledge.",
    "vendorReason": "Griffon Scribes, the artisans of Griffonstone, are known for their unparalleled craftsmanship in creating items that reflect the essence of griffons.",
    "shippingDetail": "The Winged Post ensures swift delivery by air, ensuring your quill arrives at its destination without delay.",
    "usage": {
      "activation": "Instantaneous action when signing a contract or document.",
      "duration": "Permanent until the ink is no longer in use.",
      "endsWhen": "Exhausts upon completion of writing and drying, after which it requires a short rest to regain its abilities.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The quill's premium rarity and craftsmanship justify the cost, offering unparalleled reliability and unique functionality.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T06:30:44.146974+00:00",
    "aiReviewedAt": "2026-07-22T06:30:44.146974+00:00",
    "aiReviewVersion": 1
  },
  "griffonstone_griffon_griff_goulash_recipe": {
    "id": "griffonstone_griffon_griff_goulash_recipe",
    "name": "Recipe: Griffonstone Griff Goulash",
    "description": "Griffonstone Griff Goulash, a recipe handed down from the Aerie Cooks of Griffo, is a culinary masterpiece that elevates the taste and strength of aerial predators. This hearty stew transforms the toughest game meats into tender morsels, while its secret ingredient, griff-tough, ensures each bite strengthens your wings. Eat this goulash to gain advantage on flying and mounted checks for 3 hours, as if you've been feasting in the heart of a storm cloud.",
    "price": 1100,
    "icon": "🍲",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Fluffy Wing Flap",
      "Taste of the Sky"
    ],
    "vendor": "griffonstone_aerie",
    "shippedBy": "Wing-Worthy Whisk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Fluffy Wing Flap",
        "rules": "As an action, eat this goulash to gain advantage on flying and mounted checks for 3 hours. You must consume it within one hour of receiving it from Aerie Cooks."
      },
      {
        "title": "Taste of the Sky",
        "rules": "The recipe grants you temporary resistance to fall damage equal to your proficiency bonus when you are in flight or riding a mount, lasting for 1 minute. This effect can be triggered once per short rest."
      }
    ],
    "levelRequirementReason": "This recipe requires at least level 6 to ensure the cook's expertise and the ingredients' potency.",
    "vendorReason": "The Aerie Cooks have perfected this recipe, passed down through generations of aerial mastery.",
    "shippingDetail": "Delivered by Wing-Worthy Whisk in a sealed, insulated container to preserve the stew's integrity and flavor.",
    "usage": {
      "activation": "Eating this goulash as an action",
      "duration": "3 hours of advantage on flying and mounted checks; 1 minute temporary resistance to fall damage",
      "endsWhen": "The effects expire after their durations or if you consume any other food that does not contain griff-tough ingredients.",
      "charges": "Unlimited, as it regenerates upon consumption"
    },
    "priceReason": "Crafted with rare griff-tough and precise Aerie Cooks' expertise, the price reflects its rarity and culinary value.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T06:30:26.996910+00:00",
    "aiReviewedAt": "2026-07-22T06:30:26.996910+00:00",
    "aiReviewVersion": 1
  },
  "grodus_staff": {
    "id": "grodus_staff",
    "name": "Techno-Staff",
    "description": "The Techno-Staff hums with a vibrant, neon glow, its surface etched with intricate circuitry and adorned with X-Naut insignias. This relic of the cybernetic leader commands mechanical constructs with a mere thought, creating forcefields to ward off threats, and unleashes lightning strikes that can shatter even the strongest armor. Rumored to have been forged in the heart of their secret lair, it is said the staff's power wanes if separated from its creator.",
    "category": "equipment",
    "price": 25000,
    "icon": "📡",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Dominate Machine",
      "Forcefield"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "X-Naut Pod Courier Service",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Dominate Machine",
        "rules": "As an action, you can command a construct within 30 feet to perform one of your actions. The construct must succeed on a Wisdom saving throw with a DC of 17 or be immune to this effect."
      },
      {
        "title": "Forcefield",
        "rules": "You can create a forcefield around yourself, granting you a +3 bonus to AC until the start of your next turn. This effect lasts for 1 minute and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires at least 12th level to command constructs effectively and harness the staff's power.",
    "vendorReason": "The rogue port's black market is known for its clandestine dealings with X-Naut technology, making it a fitting vendor for this relic.",
    "shippingDetail": "Ships directly from the lair of the X-Naut leader, ensuring quick delivery and authenticity.",
    "usage": {
      "activation": "Action or Bonus Action (choose one)",
      "duration": "Instantaneous for Dominate Machine; 1 minute for Forcefield",
      "endsWhen": "The effect ends if you are incapacitated or the construct is destroyed.",
      "charges": "Unlimited, but requires a short rest to use Forcefield again."
    },
    "priceReason": "Balanced price considering its legendary rarity and unique abilities, suitable for high-level adventuring parties.",
    "priceOriginal": 580000,
    "priceReviewedAt": "2026-07-22T19:43:20.367304+00:00",
    "aiReviewedAt": "2026-07-22T19:43:20.367304+00:00",
    "aiReviewVersion": 1
  },
  "guide_to_snifits": {
    "id": "guide_to_snifits",
    "name": "A Guide to Snifits",
    "description": "A leather-bound tome with intricate illustrations of Snifits, this guide not only details the subtle differences between their mask colors but also includes anecdotes and lore from the ancient Keepers who first encountered these creatures. The Guide to Snifits is a must-have for any scholar or adventurer seeking to understand these enigmatic beasts better. Its pages are imbued with knowledge that grants you an edge in your interactions with Snifits, allowing you to discern their moods and intentions more accurately.",
    "category": "curiosities",
    "price": 47,
    "icon": "📘",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Advantage on Intelligence checks related to Snifits",
      "Passive knowledge of Snifit behavior"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Book Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Intelligence Checks",
        "rules": "When making an Intelligence check related to Snifits, you gain advantage. This effect lasts until the end of your next long rest."
      },
      {
        "title": "Passive Knowledge of Snifit Behavior",
        "rules": "You gain a +2 bonus to passive Perception checks related to observing and interpreting the behavior of Snifits. This benefit is always active as long as you have this guide in your possession."
      }
    ],
    "levelRequirementReason": "This guide is designed for beginners or those just starting their journey into the study of Snifits, requiring no more than basic adventuring skills.",
    "vendorReason": "The Toad Town Market is known for its eclectic collection of curiosities and scholarly materials, making it a fitting vendor for this guide.",
    "shippingDetail": "Delivered via Book Mail, ensuring the book arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Until end of your next long rest or until lost",
      "endsWhen": "Lost or destroyed",
      "charges": "Unlimited"
    },
    "priceReason": "The Guide to Snifits is a common item, but its specific and valuable knowledge makes it worth half the gold price of a rare treasure.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:30:51.102342+00:00",
    "aiReviewedAt": "2026-07-22T06:30:51.102342+00:00",
    "aiReviewVersion": 1
  },
  "guild_membership": {
    "id": "guild_membership",
    "name": "Guild Membership (1 Year)",
    "description": "A Guild Membership (1 Year) card entitles you to a year-long affiliation with one of the most prestigious guilds in the land, whether it be Thieves, Mages, or Mercenaries. This membership grants access to exclusive training, resources, and a network of powerful contacts. As a member, you can request aid from your guild (at DM discretion), but remember, you must pay monthly dues equal to 10% of the annual fee each month.",
    "category": "services",
    "price": 25000,
    "icon": "🎖️",
    "stock": 5,
    "rarity": "legendary",
    "effects": [
      "Exclusive Access",
      "Request Aid"
    ],
    "vendor": "guild_hall",
    "shippedBy": "Guild Charter",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Exclusive Access",
        "rules": "Gain access to guild resources, training facilities, and a network of powerful contacts. This effect is passive and lasts for one year from the date of purchase."
      },
      {
        "title": "Request Aid",
        "rules": "You may request aid from your guild when in need. The DM will determine the success or failure based on circumstances. This ability can be used once per month, but only under dire emergencies as determined by the DM."
      }
    ],
    "levelRequirementReason": "Suitable for all levels to benefit from this opportunity.",
    "vendorReason": "The Guild Hall is responsible for managing and distributing memberships to ensure proper use of resources.",
    "shippingDetail": "Delivered via official guild courier with a two-week processing time.",
    "usage": {
      "activation": "Passive effect, no activation required.",
      "duration": "Lasts for one year from the date of purchase.",
      "endsWhen": "Expires after one year or if you voluntarily resign from the guild.",
      "charges": "Unlimited uses per year."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the value of a year-long association with a powerful guild without being overpowered.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-22T06:31:04.946894+00:00",
    "aiReviewedAt": "2026-07-22T06:31:04.946894+00:00",
    "aiReviewVersion": 1
  },
  "gyro_seed": {
    "id": "gyro_seed",
    "name": "Gyro Seed",
    "description": "The Gyro Seed hums with a steady, magnetic pulse as it spins ceaselessly. When planted near a toppling structure or creature, its spinning stabilizes the falling debris, negating fall damage within a 10-foot radius for up to one minute. Equipped to ammunition, this seed enhances your aim, granting +1 to hit rolls on ranged attacks. It requires a magnetized surface for optimal performance and is harvested from the ancient, clockwork forests of Gearstone.",
    "category": "consumables",
    "price": 250,
    "icon": "🔩",
    "stock": 12,
    "rarity": "uncommon",
    "effects": [
      "Fall Damage Stabilizer",
      "Ranged Aim Enhancement"
    ],
    "vendor": "gearworks",
    "shippedBy": "Padded Crate",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fall Damage Stabilizer",
        "rules": "When planted within a 10-foot radius of a falling object or creature, the Gyro Seed emits a stabilizing magnetic pulse that negates fall damage for up to one minute. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Ranged Aim Enhancement",
        "rules": "When affixed to ammunition, the Gyro Seed grants +1 to hit rolls on ranged attacks. This enhancement lasts until spent or until you make another attack with that piece of ammunition. You can use this effect once per short rest."
      }
    ],
    "levelRequirementReason": "The Gyro Seed is simple enough for even the most novice adventurers to wield effectively.",
    "vendorReason": "Gearworks specializes in items that enhance combat and survival, making the Gyro Seed a perfect addition to their catalog.",
    "shippingDetail": "The seeds are shipped in sturdy padded crates with protective foam inserts to ensure they arrive undamaged.",
    "usage": {
      "activation": "Instantaneous (planting) and Reaction (for ranged attacks)",
      "duration": "Up to one minute for the fall damage stabilization; until spent or another attack is made for ranged enhancement",
      "endsWhen": "Effect ends when the short rest duration expires or ammunition is used again",
      "charges": "Unlimited, with a short rest recharge"
    },
    "priceReason": "The balanced price reflects its utility in stabilizing falls and enhancing ranged attacks without being overpowered.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:31:13.998551+00:00",
    "aiReviewedAt": "2026-07-22T06:31:13.998551+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_ad_blocker_apron": {
    "id": "hacktivist_ad_blocker_apron",
    "name": "Hacktivist Ad-Blocker Apron",
    "description": "The Hacktivist Ad-Blocker Apron is a durable, flame-retardant canvas apron adorned with subtle, matte-black patterns that disrupt magical sales pitches. Crafted by Hacktivist Tailors, it features hidden pockets made of a fabric woven to block all tracking signals. While wearing this apron in the kitchen, you can rest easy knowing no ad for cooking supplies will ever find you—magical or otherwise. However, you must constantly inspect your ingredients closely; otherwise, paranoia sets in, causing disadvantage on checks related to ingredient quality.",
    "category": "equipment",
    "price": 260,
    "icon": "🚫",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Magical Ad-Immunity",
      "Tracking Blocker"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Ad-Immunity",
        "rules": "While wearing the Hacktivist Ad-Blocker Apron, you are immune to magical sales pitches for cooking supplies. This effect is active as long as you wear the apron in a kitchen environment and does not require any action or concentration."
      },
      {
        "title": "Tracking Blocker",
        "rules": "The pockets of the apron have been woven with a fabric that blocks all tracking signals, granting you advantage on saving throws against divination spells. This effect lasts for 1 hour when you first wear the apron and requires no action to activate."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who need protection from magical distractions in a kitchen setting.",
    "vendorReason": "Hacktivist Tailors specialize in crafting gear that resists the encroachment of the digital age, making this apron their signature product.",
    "shippingDetail": "Delivered by a trusted courier who ensures your package arrives safely without any unwanted tracking signals.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active while wearing the apron in a kitchen environment.",
      "endsWhen": "Effect ends when you stop wearing the apron or leave the kitchen.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the item’s utility for both magical protection and practical tracking blocking in a kitchen setting.",
    "priceOriginal": 10500,
    "priceReviewedAt": "2026-07-22T06:31:20.990680+00:00",
    "aiReviewedAt": "2026-07-22T06:31:20.990680+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_burner_identity": {
    "id": "hacktivist_burner_identity",
    "name": "Hacktivist Burner Identity",
    "description": "The Hacktivist Burner Identity is a meticulously crafted fake identity that includes all necessary papers and background, seamlessly disappearing after precisely 48 hours. It's forged by the notorious Hacktivist Collective using cutting-edge technology that leaves your true name tattooed on your tongue in invisible ink—detectable only with Detect Magic. While it provides you with an alias, it comes with a price: thieves in the criminal underworld will recognize it as counterfeit and penalize you with disadvantage on Charisma checks.",
    "category": "services",
    "price": 260,
    "icon": "📛",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Counterfeit Alias",
      "Thieves' Recognition"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Anonymous Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Counterfeit Alias",
        "rules": "This effect provides a complete fake identity that lasts for exactly 48 hours. It includes all necessary documentation and background, which are instantly destroyed after the specified duration."
      },
      {
        "title": "Thieves' Recognition",
        "rules": "While using this identity, you suffer disadvantage on Charisma checks with thieves who recognize it as counterfeit. This effect persists until a new Burner Identity is acquired or the current one expires."
      }
    ],
    "levelRequirementReason": "Anyone can use a burner identity for temporary anonymity.",
    "vendorReason": "The Hacktivist Collective specializes in creating and distributing such identities to their clients.",
    "shippingDetail": "Delivered through a trusted courier ensuring no one can trace the package back to its origin.",
    "usage": {
      "activation": "Instantaneous activation upon receiving the identity.",
      "duration": "48 hours from the moment of activation.",
      "endsWhen": "The duration expires or a new Burner Identity is obtained.",
      "charges": "Unlimited uses, as it is a single-use item."
    },
    "priceReason": "Balanced price for a temporary and effective counterfeit identity.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T06:31:19.697514+00:00",
    "aiReviewedAt": "2026-07-22T06:31:19.697514+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_burner_identity_rental": {
    "id": "hacktivist_burner_identity_rental",
    "name": "Hacktivist Burner Identity Rental",
    "description": "The Hacktivist Burner Identity Rental is a sleek, compact device that seamlessly fabricates a new identity. This self-destructing gadget lasts precisely 24 hours before erasing all memories of its user, rendering it a perfect tool for those seeking to commit the perfect crime. Once activated, you are free from tracking and recall; however, after the day ends, your mind blanks out any actions taken under this guise, leaving you with no recollection until later when the DM informs you of what transpired.",
    "category": "services",
    "price": 260,
    "icon": "💥",
    "stock": 4,
    "rarity": "uncommon",
    "effects": [
      "Perfect Crime Tool",
      "Erasable Memory"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Shattered Signal Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Perfect Crime Tool",
        "rules": "Activate as a bonus action. Lasts for 24 hours, granting advantage on Deception checks to avoid detection and disadvantage on Investigation checks to trace you. Ends when the time limit expires or if the gadget self-destructs."
      },
      {
        "title": "Erasable Memory",
        "rules": "At the end of 24 hours, all memories related to your actions during this period are erased. You retain no knowledge of what occurred until later, when the DM reveals the events. This effect cannot be reversed by any means."
      }
    ],
    "levelRequirementReason": "Requires a character with at least 6 levels to manage and utilize the device effectively.",
    "vendorReason": "Hacktivist Black Market specializes in providing services that help users evade detection, making this rental a staple among their offerings.",
    "shippingDetail": "Delivered instantly via the Shattered Signal Courier service, ensuring you have your gadget ready for immediate use.",
    "usage": {
      "activation": "Activate as a bonus action.",
      "duration": "24 hours or until self-destructed.",
      "endsWhen": "Time limit expires or device self-destructs.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the gadget's utility and the risk involved in using it for a full day.",
    "priceOriginal": 16500,
    "priceReviewedAt": "2026-07-22T06:31:45.753466+00:00",
    "aiReviewedAt": "2026-07-22T06:31:45.753466+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_byte_blender": {
    "id": "hacktivist_byte_blender",
    "name": "Hacktivist Byte Blender ",
    "description": "The Hacktivist Byte Blender is a sleek, metallic device that seamlessly blends digital and real-world snacks. Crafted by Net Blenders from recycled tech and artisanal ingredients, it whirs to life with a flick of your wrist. Its blades sometimes glitch, causing minor electrical fizzles, but this only adds to the unique flavor experience. It grants advantage on checks involving technology and creates a refreshing 'code' fizz that energizes users.",
    "category": "equipment",
    "price": 260,
    "icon": "🥤",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Blends Fast",
      "Code Fizz"
    ],
    "vendor": "hacktivist_net",
    "shippedBy": "Digital Drink Drive",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blends Fast",
        "rules": "When using the Blender, you have advantage on checks related to technology and can blend snacks more quickly."
      },
      {
        "title": "Code Fizz",
        "rules": "Once per short rest, consuming a snack blended by this device grants you temporary hit points equal to half your level (rounded down) for 1 hour. This effect ends if you consume another food item or take damage in the same turn."
      }
    ],
    "levelRequirementReason": "Basic knowledge of technology is required to operate this device.",
    "vendorReason": "Net Blenders are known for their innovative and tech-savvy creations, making them the perfect vendor for this unique device.",
    "shippingDetail": "Ships via Digital Drink Drive within one week of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (effect lasts until consumed or interrupted)",
      "endsWhen": "Effect ends if you consume another food item or take damage in the same turn, or after 1 hour if not consumed.",
      "charges": "Unlimited"
    },
    "priceReason": "The device's unique blend of technology and culinary innovation justifies a price slightly below uncommon rarity.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:31:30.435974+00:00",
    "aiReviewedAt": "2026-07-22T06:31:30.435974+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_decryption_key": {
    "id": "hacktivist_decryption_key",
    "name": "Hacktivist Decryption Key",
    "description": "A sleek, matte-black USB drive branded with a stylized 'H' in neon green, this Hacktivist Decryption Key is said to have been crafted from salvaged data shards recovered during a high-profile cyber heist. When inserted into a secure system, it bypasses conventional firewalls and encryption protocols, granting access to even the most sophisticated networks. However, its use on advanced systems carries a risk: there's a 50% chance that the intrusion will trigger an alert, drawing unwanted attention from the network’s security team.",
    "category": "curiosities",
    "price": 1100,
    "icon": "🔑",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Bypass Digital Security",
      "Risks Network Alert"
    ],
    "vendor": "hacktivist",
    "shippedBy": "Dead Drop",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bypass Digital Security",
        "rules": "Activates as an action. Grants temporary access to a locked computer system or network for up to one hour, with DM discretion on the extent of access granted. The effect ends if the target system detects unauthorized activity."
      },
      {
        "title": "Risks Network Alert",
        "rules": "When used on high-security systems, there is a 50% chance (DC 14 Dexterity saving throw) that it triggers an alert. If the save is failed, the use of the key becomes known to the system's security team."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and those just starting their cyber heist career.",
    "vendorReason": "As a vendor specializing in digital tools, hacktivist naturally carries this essential gadget.",
    "shippingDetail": "The USB drive is couriered through Dead Drop's secure channels, ensuring it arrives undisturbed and fully functional.",
    "usage": {
      "activation": "Uses an action to insert into a target system.",
      "duration": "One hour or until detected by the security system.",
      "endsWhen": "Detection by the target system or expiration of one hour.",
      "charges": "Unlimited uses, but limited to one per day."
    },
    "priceReason": "The item's value is balanced by its utility and the risk it poses, making it a worthwhile investment for aspiring hackers.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-22T06:32:07.001709+00:00",
    "aiReviewedAt": "2026-07-22T06:32:07.001709+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_digital_byte_bites_recipe": {
    "id": "hacktivist_digital_byte_bites_recipe",
    "name": "Recipe: Hacktivist Digital Byte Bites ",
    "description": "The Hacktivist Digital Byte Bites are crunchy, tech-flavored snacks that cater to the mind as much as the palate. When you eat these byte bites, your brain seems to spark with new insights—your fingers dance over code more nimbly, and your eyes glimmer with a newfound hunger for data. These byte bites were crafted by Net Snackers using custom circuits and nuts, making them both a delicacy and a tool for sharpening one’s coding prowess.",
    "price": 260,
    "icon": "🍪",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Byte Crunch",
      "Code Inspiration"
    ],
    "vendor": "hacktivist_net",
    "shippedBy": "Byte Binary Book",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Byte Crunch",
        "rules": "Eating the byte bites grants you advantage on Intelligence (Technology) checks for 1 hour. The snack requires a bite and can be consumed once per day."
      },
      {
        "title": "Code Inspiration",
        "rules": "Upon consumption, you gain the ability to instantly recall one forgotten line of code or algorithm that you know. This effect is usable once per long rest."
      }
    ],
    "levelRequirementReason": "This snack requires no specific level as it aids in quick problem-solving and coding.",
    "vendorReason": "Net Snackers are renowned for their tech-related products, including this byte bite recipe.",
    "shippingDetail": "Ships via Byte Binary Book with a 24-hour delivery guarantee.",
    "usage": {
      "activation": "Consumed by biting into one snack piece.",
      "duration": "1 hour and one use per long rest.",
      "endsWhen": "The effect ends when the duration expires or you gain another advantage on an Intelligence (Technology) check for a different reason.",
      "charges": "Unlimited uses, but only one per day."
    },
    "priceReason": "The price reflects both the unique recipe and its rarity in the market.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T06:31:48.787086+00:00",
    "aiReviewedAt": "2026-07-22T06:31:48.787086+00:00",
    "aiReviewVersion": 1
  },
  "hacktivist_digital_camo_pants": {
    "id": "hacktivist_digital_camo_pants",
    "name": "Hacktivist Digital Camo Pants ",
    "description": "Hacktivist Digital Camo Pants are a pair of sleek black cargo pants with an intricate pattern of green and blue pixels. These aren't just stylish; they're designed to blend into tech-heavy urban environments like a digital ghost. The pants come with reinforced knee pads and a hidden pocket for stashing essential tools like USB drives, making them indispensable for any urban explorer or net hacker. A quick EMP pulse will cause the pattern to glitch momentarily, alerting others to your presence.",
    "price": 260,
    "icon": "👖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Advantage on Stealth checks",
      "Hidden USB drive pocket"
    ],
    "vendor": "hacktivist_den",
    "shippedBy": "Code Cloth Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Urban Camouflage",
        "rules": "You gain a +2 bonus on Dexterity (Stealth) checks when in urban environments rich with technology, such as tech hubs and data centers. This effect lasts until the end of your next long rest."
      },
      {
        "title": "USB Stash Pocket",
        "rules": "The pants feature a hidden pocket that can securely hold one small electronic device or tool, like a USB drive or a lockpick set. You must use an action to access this pocket."
      }
    ],
    "levelRequirementReason": "These pants are designed for beginners and seasoned tech experts alike, providing essential utility without imposing a steep level requirement.",
    "vendorReason": "Net Hackers specializes in gear that caters to urban explorers, making these pants an ideal fit for their clientele.",
    "shippingDetail": "Ships via Code Cloth Express with a delivery delay of one week due to the specialized nature of the item and its high demand.",
    "usage": {
      "activation": "Passive effect; no activation required",
      "duration": "Until end of next long rest",
      "endsWhen": "Ends at the start of your next long rest",
      "charges": "Unlimited, recharges with a short or long rest"
    },
    "priceReason": "The price is adjusted to reflect the item's utility and the vendor's focus on specialized tech gear.",
    "priceOriginal": 14000,
    "priceReviewedAt": "2026-07-22T06:31:45.785662+00:00",
    "aiReviewedAt": "2026-07-22T06:31:45.785662+00:00",
    "aiReviewVersion": 1
  }
};
