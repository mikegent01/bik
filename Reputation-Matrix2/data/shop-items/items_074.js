// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_074 = {
  "leclaire_isle_item_sugar_surge": {
    "id": "leclaire_isle_item_sugar_surge",
    "name": "Sugar Surge",
    "description": "Sugar Surge is a shimmering, amber-colored liquid that exudes the very essence of the Pastry Palaces' legendary confections. This alchemical elixir is crafted by the eccentric chefs who toil in the heart of Le Cleraire Isle, their hands never idle from crafting sugary wonders. A single sip unleashes an overwhelming wave of sweetness, temporarily enhancing your charisma and persuasiveness, leaving you feeling as light-hearted as the sweetest cloud.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍬",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Charisma Boost",
      "Delightful Sugar Rush"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Honey Badger Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma Boost",
        "rules": "Consume this potion to gain a +4 bonus to Charisma checks and saving throws, along with advantage on Persuasion checks. This effect lasts for 1 minute."
      },
      {
        "title": "Delightful Sugar Rush",
        "rules": "For the duration of its effectiveness, you are immune to exhaustion from non-magical fatigue sources and gain temporary hit points equal to your level + Constitution modifier (maximum 50). This effect ends if you take damage or fall unconscious."
      }
    ],
    "levelRequirementReason": "This potion is accessible to all adventurers, as its effects are designed to be universally beneficial.",
    "vendorReason": "The Pastry Palaces are renowned for their culinary prowess and the creation of Sugar Surge.",
    "shippingDetail": "Ships via Honey Badger Courier, known for its speedy delivery even in the most challenging terrains.",
    "usage": {
      "activation": "飲用",
      "duration": "1 minute or until you take damage or fall unconscious",
      "endsWhen": "You take damage or fall unconscious",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the potion's potent, but not overpowered, effects and its accessibility to all adventurers.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-25T01:22:29.584622+00:00",
    "aiReviewedAt": "2026-07-25T01:22:29.584622+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dohk_favor": {
    "id": "leclaire_isle_item_dohk_favor",
    "name": "Dohk Favor Token",
    "description": "The Dohk Favor Token is a gleaming golden disc embossed with intricate patterns of dough and flour, handed out by the Dough Folk to those who have truly mastered the art of baking. This token grants access to exclusive pastry recipes and unlocks special discounts at Sweet Supplies Guild, allowing you to purchase ingredients at 15% off and earn double reputation points for any baking-related tasks undertaken within their guild.",
    "category": "faction",
    "price": 1000,
    "icon": "🍪",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Guild Discounts",
      "Exclusive Recipes"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Rolling Pin Delivery Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Guild Discounts",
        "rules": "Activates upon presentation to Sweet Supplies Guild. Grants a 15% discount on all purchases made at the guild. This effect is instantaneous and applies only once per week."
      },
      {
        "title": "Exclusive Recipes",
        "rules": "Unlock exclusive pastry recipes that can be used immediately, allowing you to craft rare pastries not available in any other shop. These recipes have a limited duration of 1 day from the moment they are unlocked and can only be used once per recipe."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to master baking skills sufficiently to warrant such an award.",
    "vendorReason": "Sweet Supplies Guild is the premier supplier of baking ingredients and equipment, and only those who have proven their skill are given this token.",
    "shippingDetail": "Delivered within a day by the Rolling Pin Delivery Service. Special care is taken to ensure the token arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous when presented at Sweet Supplies Guild.",
      "duration": "1 week for discounts, 1 day per recipe.",
      "endsWhen": "At the end of their respective durations or if lost.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides a significant benefit in terms of discounts and access to exclusive recipes.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T01:21:25.516512+00:00",
    "aiReviewedAt": "2026-07-25T01:21:25.516512+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dough_whisperer": {
    "id": "leclaire_isle_item_dough_whisperer",
    "name": "Dough Whisperer's Charm",
    "description": "The Dough Whisperer's Charm is a delicate, intricately carved figurine of a Dough Folk elder, its surface dusted with cinnamon and etched with runes that whisper tales of ancient dough magic. Legends speak of its ability to command the very essence of flour and water, allowing you to shape it into traps or shields. It carries the faint scent of regret, hinting at forgotten promises made in exchange for its creation.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍪",
    "stock": 8,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "control_dough",
      "detect_hidden_ingredients"
    ],
    "vendor": "dough_depot",
    "shippedBy": "slow_delivery_snail",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Control Dough",
        "rules": "As a bonus action, you can focus on the Dough Whisperer's Charm to command nearby dough within 30 feet. You gain control over up to two cubic feet of dough for 1 minute, shaping it into walls, traps, or shields. This control allows you to create simple shapes or blockages that last until the duration ends."
      },
      {
        "title": "Detect Hidden Ingredients",
        "rules": "By holding the Dough Whisperer's Charm and concentrating on a food item for 1 minute, you gain insight into any hidden ingredients within it. This reveals if the item contains harmful additives or unexpected allergens, but not the exact composition."
      }
    ],
    "levelRequirementReason": "Only those with significant experience can harness the ancient magic of the Dough Whisperer's Charm.",
    "vendorReason": "Dough Depot is renowned for its connection to Dough Folk lore and the creation of magical curiosities like this charm.",
    "shippingDetail": "Delivered by a slow delivery snail, ensuring the charm arrives in perfect condition. The journey can take up to one week depending on your location.",
    "usage": {
      "activation": "Bonus action for Control Dough; 1 minute concentration for Detect Hidden Ingredients",
      "duration": "Control Dough lasts until the end of your next turn; Detect Hidden Ingredients lasts 1 minute",
      "endsWhen": "The duration ends when you lose concentration or take damage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP, this charm offers both utility and lore, justifying its mythic rarity.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:21:42.052575+00:00",
    "aiReviewedAt": "2026-07-25T01:21:42.052575+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_frosting_phantom": {
    "id": "leclaire_isle_item_frosting_phantom",
    "name": "Frosting Phantom's Quill",
    "description": "The Frosting Phantom's Quill, crafted from solidified frosting and said to be shed by the elusive Frosting Phantoms who haunt the deepest bakeries, is a shimmering artifact that allows you to cast minor illusions of delectable treats. The quill also imbues your writing with a spell of charming sweetness, compelling creatures within 30 feet for up to one minute. However, prolonged use risks turning your hand into a sugary mess, as the frosting melts away, leaving only a sticky residue.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "minor_illusion",
      "charm_monster"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "moonlit_delivery_raven",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Minor Illusion",
        "rules": "As an action, you can use your quill to cast the Minor Illusion spell. The duration is up to one hour, and it creates a harmless visual illusion of a pastry or dessert. This effect ends if you dismiss it or when the duration expires."
      },
      {
        "title": "Charm Monster",
        "rules": "As an action, you can write a message on paper with your quill and cast a spell of charming sweetness that compels creatures within 30 feet for up to one minute. The target must succeed on a DC 15 Wisdom saving throw or be charmed by you for the duration. This effect ends if you dismiss it, the target escapes using its action, or when the duration expires."
      }
    ],
    "levelRequirementReason": "Requires second-level proficiency to handle such an arcane quill without mishap.",
    "vendorReason": "Sweet Supplies specializes in magical artifacts related to sweetness and charm, making it the perfect vendor for this unique item.",
    "shippingDetail": "The moonlit delivery raven ensures timely arrival, especially suitable for night-only stock items like this one.",
    "usage": {
      "activation": "Action or Bonus Action (choose when to cast the Minor Illusion spell; Charm Monster is a single action).",
      "duration": "Up to one hour for Minor Illusion; up to one minute for Charm Monster, which can be dismissed at any time.",
      "endsWhen": "Minor Illusion ends on your turn if you dismiss it or when its duration expires. Charm Monster ends if the target escapes, you dismiss it, or its duration expires.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced at 1000 XP as a unique, limited-use epic item that requires specific proficiency and has interesting flavor and mechanics.",
    "priceOriginal": 28000,
    "priceReviewedAt": "2026-07-25T01:21:42.582933+00:00",
    "aiReviewedAt": "2026-07-25T01:21:42.582933+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_phantom_shift": {
    "id": "pokemon_item_phantom_shift",
    "name": "Echoing Phantom Shard",
    "description": "The Echoing Phantom Shard is a jagged relic of ancient battles, its surface etched with ghostly runes that shimmer faintly. This fragment grants you the power to phase through solid objects for a brief moment, allowing you to evade attacks or slip into tight spaces unnoticed. The shard's residual energy hums with spectral strength, enhancing your speed by 20 feet and increasing your chance of evading attacks by 15%. Beware, its power is fleeting but potent.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 7,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "shadow_phase",
      "evade_chance"
    ],
    "vendor": "pokemart",
    "shippedBy": "Swift Delivery Drone",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Phase",
        "rules": "As a bonus action, you can phase through solid objects for up to 30 feet. This effect lasts for 1 minute or until you take damage. You cannot use this ability again until the start of your next turn after it ends."
      },
      {
        "title": "Evade Chance",
        "rules": "While holding the Echoing Phantom Shard, you have a +2 bonus to Dexterity saving throws and an additional 15% chance to evade melee attacks. This effect persists for as long as you hold the shard."
      }
    ],
    "levelRequirementReason": "The Echoing Phantom Shard requires a minimum level of 3 due to its spectral energy and the complexity of mastering such an ability.",
    "vendorReason": "Pokemart caters to trainers seeking unique and powerful tools like the Echoing Phantom Shard, enhancing their journey through the Pokémon world.",
    "shippingDetail": "Ships via Swift Delivery Drone within 24 hours of purchase.",
    "usage": {
      "activation": "Bonus action to phase through objects and reaction to evade attacks.",
      "duration": "1 minute or until you take damage, whichever comes first.",
      "endsWhen": "You take damage or the start of your next turn after it ends.",
      "charges": "Unlimited; uses do not deplete charges."
    },
    "priceReason": "The Echoing Phantom Shard is priced at 1000 XP, reflecting its spectral power and rarity among trainers looking for unique combat advantages.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:21:40.363538+00:00",
    "aiReviewedAt": "2026-07-25T01:21:40.363538+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_league_favor": {
    "id": "pokemon_item_league_favor",
    "name": "Champion’s Token of Appreciation",
    "description": "The Champion’s Token of Appreciation is a gleaming metal badge that glows faintly with a warm, golden light. Crafted from rare metals found in the ancient ruins of Sinnoh, this token not only boosts your reputation by 10% but also increases your chances of being offered exclusive trainer quests by the League. The scent of victory and slightly burnt pizza lingers around it, a reminder of countless battles fought and won under its protection.",
    "category": "faction",
    "price": 1000,
    "icon": "🏆",
    "stock": 15,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "league_rep_boost",
      "quest_chance"
    ],
    "vendor": "league_store",
    "shippedBy": "League Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "League Reputation Boost",
        "rules": "The Champion’s Token of Appreciation grants you a +1 bonus to your reputation with the Pokémon League for an hour after activation. This effect does not stack and lasts until the end of your next long rest."
      },
      {
        "title": "Exclusive Quests",
        "rules": "Upon activation, there is a 20% chance that the next trainer you interact with will offer you an exclusive quest from the League. This effect can only trigger once per day."
      }
    ],
    "levelRequirementReason": "This token is accessible to trainers of all levels who wish to show their appreciation and commitment.",
    "vendorReason": "The Pokémon League offers this token as a way to recognize and reward dedicated trainers who contribute to the community.",
    "shippingDetail": "Delivered via the trusted League Courier, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Object Interaction (as an action)",
      "duration": "1 hour or until the end of your next long rest",
      "endsWhen": "The effect ends when the duration expires or you complete a long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "This token offers significant benefits to trainers, making it a valuable and balanced purchase at 1000 XP.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:22:00.394533+00:00",
    "aiReviewedAt": "2026-07-25T01:22:00.394533+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mystic_herb": {
    "id": "pokemon_item_mystic_herb",
    "name": "Lunar Bloom Extract",
    "description": "The Lunar Bloom Extract is a thick, shimmering liquid harvested from nocturnal Pokémon herbs during a full moon. Its origins are shrouded in mystery and folklore, believed to accelerate healing by up to 80 HP and temporarily boost Strength by +2 for an hour. However, it might also cause unexpected side effects like uncontrollable giggling or a sudden urge to dance under the moonlight, which lasts until your next long rest.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 99,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "heal_80_hp",
      "boost_strength_plus_2"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Delivery Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Surge",
        "rules": "The user can activate this effect as a bonus action, providing an instantaneous healing of up to 80 HP. This effect has no save DC and is limited to once per day."
      },
      {
        "title": "Temporary Strength Boost",
        "rules": "Boosts the user's Strength by +2 for one hour after consuming the extract. It ends when the duration expires or if the user takes a long rest, with no saving throw required."
      }
    ],
    "levelRequirementReason": "The Lunar Bloom Extract is easily accessible to all adventurers who can afford its price.",
    "vendorReason": "Safari Shop regularly procures unique items from the Pokémon world, including this extract, due to its popularity among trainers and researchers.",
    "shippingDetail": "The extract is shipped quickly by the reliable Delivery Pigeon, ensuring it reaches its destination in perfect condition.",
    "usage": {
      "activation": "Bonus action for healing surge; passive effect for strength boost",
      "duration": "Instantaneous and one hour respectively",
      "endsWhen": "At end of duration or upon taking a long rest",
      "charges": "Unlimited, as it is consumed once per use"
    },
    "priceReason": "The Lunar Bloom Extract's rare extraction process and its dual benefits justify its higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:22:04.639617+00:00",
    "aiReviewedAt": "2026-07-25T01:22:04.639617+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_ring_of_whispering_winds": {
    "id": "middle_earth_item_ring_of_whispering_winds",
    "name": "Ring of Whispering Winds",
    "description": "The Ring of Whispering Winds is a deceptively simple silver band, its surface etched with ancient runes that seem to hum in harmony with the forest's breath. Within the woodland, it grants the wearer advantage on Dexterity (Stealth) checks, and when worn, it subtly shifts your presence, making you nearly undetectable by the most perceptive creatures. The ring also whispers cryptic clues about nearby dangers, though these are often misleading, leading to a trail of false leads that seem suspiciously similar to Wario's infamous gold-hiding habits.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌬️",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Advantage on Dexterity (Stealth) checks within woodland environments",
      "Whispers cryptic clues about nearby dangers"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_pony",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Advantage on Stealth Checks",
        "rules": "The wearer gains advantage on Dexterity (Stealth) checks within any woodland environment. This effect is passive and does not require an action to activate."
      },
      {
        "title": "Whispers of Danger",
        "rules": "Twice per long rest, the ring can whisper cryptic clues about nearby dangers. These clues are often misleading and may lead to false leads. The DM decides on the nature and reliability of these clues."
      }
    ],
    "levelRequirementReason": "This ring is designed for adventurers who have already proven their skills in stealth within woodlands.",
    "vendorReason": "The Elven Market specializes in enchanted items that enhance the natural abilities of those who dwell among nature's heart.",
    "shippingDetail": "Shipped by winged ponies, this ring arrives within a day, delivered directly to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until removed or destroyed.",
      "endsWhen": "The ring is removed from the wearer's finger or destroyed.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This ring strikes a balance, offering significant stealth benefits while remaining affordable for adventurers of moderate levels.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:22:18.565907+00:00",
    "aiReviewedAt": "2026-07-25T01:22:18.565907+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_dwarven_stone_of_persuasion": {
    "id": "middle_earth_item_dwarven_stone_of_persuasion",
    "name": "Dwarven Stone of Persuasion",
    "description": "The Dwarven Stone of Persuasion is a polished chunk of granite, imbued with the spirit of a grumpy dwarf's unmatched skill at argumentation. It grants its bearer an aura that subtly shifts conversations in their favor, and when wielded properly, can even bend the will of foes who resist. Legends say it was crafted by a dwarf who spent too much time arguing with goblins – and indeed, it seems to have a knack for making humans, elves, and hobbits alike more agreeable.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗣️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Increased Persuasion",
      "Intimidation Boost"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "rolling_cart",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Increased Persuasion",
        "rules": "When you use an action to make a persuasion check or attempt a negotiation with a merchant, you gain advantage on the check. This effect lasts until the end of your next short rest."
      },
      {
        "title": "Intimidation Boost",
        "rules": "You can spend 1 minute to focus the stone's power by making an Intimidate check as part of an action, which has a +2 bonus on your persuasion skill checks against creatures with fewer hit dice than you. This effect lasts for 10 minutes."
      }
    ],
    "levelRequirementReason": "The stone's power demands a certain level of expertise to wield effectively.",
    "vendorReason": "Dwarves are renowned for their craftsmanship and the Dwarven Forge is known for its quality items that enhance social skills.",
    "shippingDetail": "Delivered by a rolling cart, which ensures the stone remains polished and functional during transit.",
    "usage": {
      "activation": "A bonus action to focus the stone or an action at the start of your turn for persuasion checks.",
      "duration": "Until end of short rest or until used up in negotiations.",
      "endsWhen": "The effect ends when you take a long rest, unless exhausted by overuse.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This rare item is priced high due to its unique crafting and the significant advantage it provides in social situations.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T01:23:01.872665+00:00",
    "aiReviewedAt": "2026-07-25T01:23:01.872665+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_lore_scroll_of_forgotten_songs": {
    "id": "middle_earth_item_lore_scroll_of_forgotten_songs",
    "name": "Lore Scroll of Forgotten Songs",
    "description": "This brittle parchment, its edges frayed and runes faded to a whisper of their former glory, hums softly as you touch it. The forgotten melodies it holds are said to be able to soothe even the fiercest beast, turning wrath into rhapsody, or reveal hidden pathways long lost to time—rumors claim it might also cause Wario to spontaneously break into an impromptu dance, much to your chagrin and amusement.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎶",
    "stock": 8,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Soothes Aggressive Creatures",
      "Reveals Hidden Passages"
    ],
    "vendor": "shire_shop",
    "shippedBy": "magical_owl",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Soothes Aggressive Creatures",
        "rules": "As a bonus action, you can attempt to soothe an aggressive creature within 30 feet. The creature must succeed on a DC 13 Wisdom saving throw or remain calm for the duration of one short rest."
      },
      {
        "title": "Reveals Hidden Passages",
        "rules": "When you are in an area that seems sealed, you can spend 1 charge to attempt to reveal any hidden passages. You make a DC 15 Intelligence (History) check to determine the location and nature of the hidden passage."
      }
    ],
    "levelRequirementReason": "This scroll is crafted for beginning adventurers who might encounter both hostile creatures and ancient, forgotten secrets.",
    "vendorReason": "The Shire Shop specializes in items that help travelers navigate the natural world with ease, including this scroll which aids in such endeavors.",
    "shippingDetail": "Delivered by a magical owl, ensuring the scroll arrives safely and intact.",
    "usage": {
      "activation": "Bonus action or as part of an investigation check",
      "duration": "One short rest for soothing; Instantaneous for revealing hidden passages",
      "endsWhen": "The spell ends when the creature calms down or the passage is revealed, whichever comes first. Charges are exhausted after use.",
      "charges": "10 charges"
    },
    "priceReason": "The scroll combines both soothing and exploratory magic, making it a valuable tool for adventurers of all levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T15:13:44.135905+00:00",
    "aiReviewedAt": "2026-07-25T15:13:44.135905+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_sticky_shroom": {
    "id": "mushroom_kingdom_item_sticky_shroom",
    "name": "Gooey Growth Goggles",
    "description": "Gooey Growth Goggles are crafted from luminescent fungi found in the heart of Mushroom Kingdom. These goggles, when donned, coat the wearer's face with a layer of resilient, slippery gel that allows for swift, nearly silent movement across any surface. The wearer can slide between enemies or escape tight squeezes without leaving behind a trail. However, if they touch anything while active, the gel is smeared, and their speed decreases by half until it dries.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "slippery_surface",
      "silent_movement"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slippery Surface",
        "rules": "The wearer's movement speed is increased by +10 feet for 1 minute. This effect ends if the wearer touches any surface or creature, at which point their movement speed decreases to normal until the gel dries after a short rest."
      },
      {
        "title": "Silent Movement",
        "rules": "The wearer becomes nearly silent while moving; they have advantage on Dexterity (Stealth) checks. This effect ends if the wearer uses an action or reaction, or if their movement is detected by a creature within 30 feet."
      }
    ],
    "levelRequirementReason": "The goggles are designed for adventurers who need to navigate the slippery surfaces of Mushroom Kingdom without detection.",
    "vendorReason": "Toad Town Market sells a variety of items that help travelers and adventurers in their quest through the kingdom.",
    "shippingDetail": "The goggles are delivered by a mushroom cart, which can be found at Toad Town Market.",
    "usage": {
      "activation": "Putting on the goggles as an action",
      "duration": "1 minute or until the wearer touches anything",
      "endsWhen": "The effect ends if the wearer touches any surface or creature; movement speed decreases to normal until a short rest is taken",
      "charges": "Unlimited"
    },
    "priceReason": "The goggles are crafted from rare fungi and require intricate crafting, justifying their high price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:22:35.786475+00:00",
    "aiReviewedAt": "2026-07-25T01:22:35.786475+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_warp_berry": {
    "id": "mushroom_kingdom_item_warp_berry",
    "name": "Dimensional Dazzle Drops",
    "description": "Dimensional Dazzle Drops are shimmering, ethereal berries that pulse with an unstable, otherworldly energy. Each drop is a delicate balance between light and shadow, capable of briefly opening a rift in space-time. Consuming one allows you to teleport a short distance, but the destination is as unpredictable as the stars themselves; you could appear just outside your current location or find yourself hopelessly lost in an alien dimension. This strange fruit offers a quick escape, but be wary—its whimsical nature might strand you in a place more dangerous than the one you left behind.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "teleport_short_range",
      "5% chance to inflict confusion"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_mushroom",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Teleport Short Range",
        "rules": "When consumed, you immediately teleport up to 10 feet in a direction of your choice. The destination is random; the DM determines the exact location within this range."
      },
      {
        "title": "5% Chance to Inflict Confusion",
        "rules": "There is a 5% chance that upon successful activation, you become confused for 1 minute. During this time, you have disadvantage on attack rolls and ability checks unless you succeed on a DC 10 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "These berries are potent but unstable, requiring only basic magic to activate.",
    "vendorReason": "Wario Direct specializes in exotic and unpredictable items, making these berries a perfect fit for their catalog.",
    "shippingDetail": "Shipped via rocket mushroom express; delivery may be delayed by up to one week due to the volatile nature of the cargo.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous teleportation, confusion lasts for 1 minute",
      "endsWhen": "The effect ends when the duration expires or you are destroyed in the destination location",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, these berries offer a unique and unpredictable utility that justifies their cost.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:23:11.353472+00:00",
    "aiReviewedAt": "2026-07-25T01:23:11.353472+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_fate_shard": {
    "id": "curiosity_fate_shard",
    "name": "Fragment of Twisted Destiny",
    "description": "The Fragment of Twisted Destiny hums with a cold, pulsating energy that seems to echo the whispers of forgotten destinies. Its surface shimmers with patterns of fate, occasionally flickering with visions of tentacles and goblins. Handling it grants fleeting glimpses into possible futures, mostly unpleasant, but also offers a brief reprieve for diviners' skills and a lucky break in their endeavors. Beware: tampering with such power can invite unwanted attention from the spirits of misfortune.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 35,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Fleeting Glimpses",
      "Divination Boost"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fleeting Glimpses",
        "rules": "As an action, you can hold the shard and gain a temporary prophecy. This vision is a random event from your possible futures, often involving tentacles or goblins. There's a small chance of attracting negative spirits nearby for 1d4 hours."
      },
      {
        "title": "Divination Boost",
        "rules": "For 1 hour after using the shard, you gain advantage on one divination skill check of your choice. This effect can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "The fragment's power is accessible to those who have just begun their journey.",
    "vendorReason": "The chaos dealer deals in all manner of unpredictable and potentially dangerous curiosities, making this shard a fitting addition to their wares.",
    "shippingDetail": "Delivered with the same secretive efficiency as always, ensuring it arrives safely but not revealing its contents.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until used in a divination skill check",
      "endsWhen": "The effect ends when you use the shard for another divination skill check within that time frame or at the end of your next long rest, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's unpredictable nature and potential to bring both knowledge and misfortune justify its higher price.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:23:18.939444+00:00",
    "aiReviewedAt": "2026-07-25T01:23:18.939444+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_iron_grip": {
    "id": "warhammer_iron_grip",
    "name": "Iron Grip of the Legionnaire",
    "description": "The Iron Grip of the Legionnaire is a warhammer forged from blackened iron, its surface etched with the stoic visage of countless fallen legionnaires. Despite its imposing appearance, it feels surprisingly light in hand and delivers devastating blows that can shatter stone with terrifying force. Its wielder gains increased armor class and a chance to stun on hit, making every strike both a test of strength and a battle cry for victory.",
    "category": "equipment",
    "price": 1000,
    "icon": "🪨",
    "stock": 25,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "increased armor class",
      "stun on hit"
    ],
    "vendor": "imperial_armory",
    "shippedBy": "supply_wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stunning Strike",
        "rules": "When you hit an opponent with this weapon as part of your attack action, there is a 20% chance that the target is stunned for 1 round. The DC to resist this effect is equal to 8 + your Strength modifier."
      },
      {
        "title": "Increased Armor Class",
        "rules": "While wielding this warhammer, you gain a bonus to your AC equal to half your proficiency bonus (minimum of +2). This benefit lasts until the start of your next turn after using it in an attack action."
      }
    ],
    "levelRequirementReason": "This weapon is designed for beginners and seasoned warriors alike, providing a reliable tool for close combat.",
    "vendorReason": "The Imperial Armory stocks this versatile weapon to equip legions with the tools they need for relentless assault.",
    "shippingDetail": "Delivered by supply wagons, which can take up to a week depending on road conditions and local disturbances.",
    "usage": {
      "activation": "Attack action",
      "duration": "Instantaneous effect; lasts until the start of your next turn after using it in an attack action.",
      "endsWhen": "Exhausted upon successful hit, or if you use a bonus action to drop it as part of any action.",
      "charges": "Unlimited"
    },
    "priceReason": "This weapon combines durability and offensive capabilities at an XP cost reflective of its unique properties.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T01:23:35.466325+00:00",
    "aiReviewedAt": "2026-07-25T01:23:35.466325+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wario_coin_charm": {
    "id": "mushroom_kingdom_item_wario_coin_charm",
    "name": "Wario's Lucky Coin Charm",
    "description": "A gleaming gold coin, said to be blessed by Wario himself, this charm is rumored to bring a sudden burst of luck or an unfortunate case of indigestion. Rub it thrice and you might just find yourself with a critical hit in the heat of battle, or perhaps a minor treasure find that requires careful handling. The coin’s origins are shrouded in folklore, passed down from Wario's own treasury, where it was said to have been used for both mischief and blessing.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💰",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "critical_blessing",
      "minor_luck_boost"
    ],
    "vendor": "wario_direct",
    "shippedBy": "warp_pipe",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Critical Blessing",
        "rules": "When you activate this charm by rubbing it thrice, there is a +1d4 bonus to your attack rolls for the next hour. On a hit, there is a 5% chance of dealing an additional critical hit. This effect ends if you take damage or if the hour expires."
      },
      {
        "title": "Minor Luck Boost",
        "rules": "For the duration of one short rest, you gain advantage on Dexterity (Stealth) checks and saving throws against poison effects. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "The charm's power is accessible to adventurers with basic combat training.",
    "vendorReason": "Wario Direct has a reputation for offering items imbued with his personal touch, making this charm an authentic and sought-after collectible.",
    "shippingDetail": "The warp pipe ensures swift delivery straight to your doorstep.",
    "usage": {
      "activation": "Bonus action to rub the coin thrice.",
      "duration": "One hour for Critical Blessing; one short rest for Minor Luck Boost.",
      "endsWhen": "On damage taken or at the end of the specified duration.",
      "charges": "Unlimited, recharged after a long rest."
    },
    "priceReason": "The coin's rarity and Wario’s personal blessing make it a valuable addition to any adventurer's collection, justifying its price in XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:24:00.913415+00:00",
    "aiReviewedAt": "2026-07-25T01:24:00.913415+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_royal_potion_of_distortion": {
    "id": "mushroom_kingdom_item_royal_potion_of_distortion",
    "name": "Potion of Shifting Realities",
    "description": "The Potion of Shifting Realities, a swirling elixir swathed in iridescent hues, is crafted by the Royal Alchemists from rare ingredients harvested across dimensions. Drinking it allows you to briefly traverse between realities, encountering bizarre landscapes and creatures that defy logic – just don’t linger too long or risk shattering the fabric of reality entirely. A sip can be a wild adventure or an existential crisis, all in the blink of an eye.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "dimensional_shift",
      "random_monster_encounter"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Dimensional Shift",
        "rules": "The drinker is transported to another dimension for 1 minute. They can move up to their speed, but any attempt to interact with the environment without the proper knowledge or abilities has a 50% chance of causing them harm due to the unfamiliar nature of the place."
      },
      {
        "title": "Random Monster Encounter",
        "rules": "During your time in the other dimension, there is a 20% chance per minute that you will encounter a random monster from an alternate reality. These creatures are not hostile but can be dangerous if their environment is incompatible with yours."
      }
    ],
    "levelRequirementReason": "The potion requires significant alchemical knowledge and resilience to handle the dimensional flux without harm.",
    "vendorReason": "Koopa Shop, known for its exotic wares from across dimensions, is trusted by alchemists to carry this potent potion.",
    "shippingDetail": "The delivery of the potion is handled by a single dragon courier who ensures it arrives safely and intact.",
    "usage": {
      "activation": "Consume as an action",
      "duration": "1 minute per dose",
      "endsWhen": "Ends when time runs out or if you are transported back to your own dimension",
      "charges": "1 use"
    },
    "priceReason": "The potion requires rare ingredients and advanced alchemical knowledge, making it a costly but limited luxury.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T01:24:08.013113+00:00",
    "aiReviewedAt": "2026-07-25T01:24:08.013113+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_ritual_mask": {
    "id": "animatopia_ritual_mask",
    "name": "Mask of the Lost Howler",
    "description": "The Mask of the Lost Howler is a twisted visage made from the bones and fur of ancient howlers. It whispers dark secrets to those who wear it, compelling them to unleash primal beast forms. Wearing this mask amplifies one's connection with nature, allowing for temporary transformation into a beast and granting increased mana regeneration at the cost of unsettling visions and an irresistible urge to commune with the wild.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🎭",
    "stock": 15,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "temporary_transformation_beast",
      "increased_mana_regeneration"
    ],
    "vendor": "forest_market",
    "shippedBy": "shadow_owl",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Temporary Transformation Beast",
        "rules": "As a bonus action, the wearer can assume a beast form for 1 minute. This transformation grants the user advantage on Stealth checks and Intimidation checks against animals. The effect ends early if the wearer takes any damage or when the wearer voluntarily ends it."
      },
      {
        "title": "Increased Mana Regeneration",
        "rules": "The wearer regains an additional 2d6 mana points at the start of their turn. This effect lasts for 1 hour and can be interrupted by taking damage, ending the wearer's concentration, or being incapacitated."
      }
    ],
    "levelRequirementReason": "Advanced magic users who have proven their worthiness through trials are required to wear this mask.",
    "vendorReason": "The forest market caters exclusively to those who delve into the arcane and natural mysteries of the wildlands.",
    "shippingDetail": "Delivered by a shadow owl, the package arrives shrouded in darkness. The delivery can take up to three days depending on weather conditions.",
    "usage": {
      "activation": "Bonus action for transformation; passive effect of mana regeneration.",
      "duration": "1 minute for temporary beast form; 1 hour for mana regeneration",
      "endsWhen": "Transformation ends by taking damage, ending concentration, or being incapacitated. Mana regeneration ends when the duration expires or the wearer is incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "The Mask of the Lost Howler is priced at 1000 XP due to its rare crafting materials and the forbidden rituals involved in its creation.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:23:42.171324+00:00",
    "aiReviewedAt": "2026-07-25T01:23:42.171324+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_gear_of_the_unyielding": {
    "id": "connectopia_gear_of_the_unyielding",
    "name": "Pioneer’s Grit Cog",
    "description": "Forged from the toughest block-metal, the Pioneer’s Grit Cog is a testament to Connectopia's pioneering spirit. It grants its bearer resilience against the harsh realities of the frontier, providing an unexpected resistance to despair that can turn even the darkest nights into opportunities for innovation. With each successful day spent in the forge, this cog becomes a symbol of endurance and resolve, ready to face whatever challenges come next.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increase_armor",
      "resistance_to_fear"
    ],
    "vendor": "block_smith",
    "shippedBy": "delivery_drone",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Armor",
        "rules": "While wearing this cog as part of their armor, the wearer gains a +1 bonus to AC. This effect is passive and does not require any action."
      },
      {
        "title": "Resistance to Fear",
        "rules": "The wearer has advantage on saving throws against being frightened or charmed by fear-based effects for 1 hour after activating this cog. The effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires level 10 to ensure the wearer has the necessary skills and experience to wield a symbol of such importance.",
    "vendorReason": "The block smith is the only vendor capable of forging such an item, as their expertise lies in creating gear that embodies the spirit of Connectopia's pioneers.",
    "shippingDetail": "Ships via delivery drone within three days of purchase, ensuring this symbol of resilience reaches its intended recipient quickly and safely.",
    "usage": {
      "activation": "Activates as a bonus action. The effect against fear lasts for 1 hour after activation.",
      "duration": "1 hour",
      "endsWhen": "The effect ends when the wearer stops wearing the cog or completes a long rest.",
      "charges": "Unlimited, but only usable once per long rest."
    },
    "priceReason": "The Pioneer’s Grit Cog is priced at 1000 XP due to its rarity and the unique benefits it provides, making it a valuable asset for any adventurer or pioneer.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:24:21.478307+00:00",
    "aiReviewedAt": "2026-07-25T01:24:21.478307+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_quantum_crumb": {
    "id": "doughnut_hole_quantum_crumb",
    "name": "Singularity Snack",
    "description": "The Singularity Snack is a shimmering, ethereal crumb that seems to defy all known physics. These crumbs are said to have been crafted from the very fabric of space-time itself in a forgotten laboratory of mad science. Each bite causes a brief distortion in reality, increasing your movement speed by 20% and allowing you to phase through thin walls for 10 seconds, but prolonged consumption leads to disorientation and a lingering sense of existential dread.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Distortion",
      "Phasing"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "gravity_parcel",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When consumed as an action, the eater experiences a brief increase in speed by 20% for 10 seconds. This effect does not stack with other movement speed increases and ends immediately upon taking damage."
      },
      {
        "title": "Phasing",
        "rules": "Eating the snack grants you the ability to phase through thin walls within a 5-foot radius for 10 seconds, but you remain visible during this time. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "The Singularity Snack requires an advanced understanding of physics and the ability to handle such powerful temporal effects.",
    "vendorReason": "Hole Hawker, with his expertise in bizarre and forgotten sciences, is known for selling items that challenge the boundaries of reality.",
    "shippingDetail": "Ships via gravity parcel, which may result in delayed delivery due to unpredictable gravitational anomalies.",
    "usage": {
      "activation": "Eaten as an action.",
      "duration": "10 seconds per effect.",
      "endsWhen": "Upon taking damage or the end of your next turn after use.",
      "charges": "Once per short rest."
    },
    "priceReason": "The Singularity Snack is priced at 1000 XP, reflecting its limited daily stock and the advanced technology required for its creation.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:24:29.710826+00:00",
    "aiReviewedAt": "2026-07-25T01:24:29.710826+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_chronal_gauntlet": {
    "id": "doughnut_hole_chronal_gauntlet",
    "name": "The Time-Twisted Grip",
    "description": "The Time-Twisted Grip, a gauntlet forged from solidified temporal eddies, allows its wearer to manipulate time around their attacks. Its jittery mechanics occasionally render punches invisible in a puff of glitter, but when it aligns perfectly, the target's last action is rewound with a resounding BOOM! This relic requires precision to wield effectively, as even the slightest misstep can cause your own strikes to vanish in a cascade of shimmering light.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Temporal Disruption",
      "Rewind Strike"
    ],
    "vendor": "void_vendor",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 16,
    "effectDetails": [
      {
        "title": "Temporal Disruption",
        "rules": "As an action, the wielder may attempt to manipulate time around their next melee attack. The target has disadvantage on their next action taken as a result of the attack if successful (DC 18 Con saving throw). This effect can only be used once per short or long rest."
      },
      {
        "title": "Rewind Strike",
        "rules": "Once per turn, when this gauntlet is worn and the wielder hits with a melee attack, there's a 20% chance that the target's last action is rewound in time. The target must succeed on a DC 15 Dexterity saving throw or be knocked prone as their actions are undone."
      }
    ],
    "levelRequirementReason": "The intricate temporal mechanics of the Time-Twisted Grip require significant experience and understanding to wield effectively.",
    "vendorReason": "Void Vendor holds a collection of lost and found artifacts, including those that have been misplaced in the fabric of reality itself.",
    "shippingDetail": "The gauntlet is delivered through a dimensional rift, arriving with a slight shimmer and an echo of time's passage.",
    "usage": {
      "activation": "Action or Reaction (requires concentration on successful Temporal Disruption)",
      "duration": "Instantaneous for Rewind Strike; Concentration up to 1 minute for Temporal Disruption",
      "endsWhen": "Concentration ends, target saves successfully against Temporal Disruption, or the gauntlet is removed",
      "charges": "Unlimited, but only one Temporal Disruption per short/long rest"
    },
    "priceReason": "The Time-Twisted Grip's rarity and unique temporal capabilities justify its modest price in experience points.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-25T01:24:38.443787+00:00",
    "aiReviewedAt": "2026-07-25T01:24:38.443787+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_wario_wrench": {
    "id": "mushroom_kingdom_item_wario_wrench",
    "name": "Wario's Precision Wrench",
    "description": "Forged from solidified coin-dust and infused with Wario's chaotic energy, this wrench glows ominously when wielded. Crafted in the heart of the Mushroom Kingdom by the mischievous plumber himself, it can repair any machine with a flick of its blade… or set off an explosion that shakes the very ground beneath you. Use at your own peril and prepare to face the wrath of Wario's coin-cursed craftsmanship.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔧",
    "stock": 18,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "increased_repair_skill",
      "chance_to_cause_explosions"
    ],
    "vendor": "wario_direct",
    "shippedBy": "coin_delivery",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Increased Repair Skill",
        "rules": "When used in a repair attempt, you gain advantage on the check and can spend an additional action to perform two repairs instead of one. This ability does not stack with other similar effects."
      },
      {
        "title": "Chance to Cause Explosions",
        "rules": "There is a 25% chance (roll a d4; if the result is 1, explosion occurs) that using this wrench will set off an explosive reaction. On a successful DC 15 Dexterity saving throw, you are unaffected and can reroll once. Failure results in a minor explosion that deals 1d6 fire damage to all creatures within 5 feet of you."
      }
    ],
    "levelRequirementReason": "This wrench requires the user's familiarity with complex machinery and the ability to handle coin-dust, both of which are gained after reaching level 10.",
    "vendorReason": "Wario himself ensures that only those truly worthy can wield this treacherous tool.",
    "shippingDetail": "Shipped via the Coin Delivery service, which guarantees safe arrival but may result in a delayed shipment due to coin shortages and other Wario-related delays.",
    "usage": {
      "activation": "Action (to repair or use)",
      "duration": "Instantaneous for repairs; explosion occurs on failure",
      "endsWhen": "Explodes if you fail the saving throw, or when used normally in a repair attempt",
      "charges": "Unlimited"
    },
    "priceReason": "The coin-dust material and Wario's chaotic energy infuse this wrench with significant value, though it remains within reach for those who can afford the risk.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:24:43.854464+00:00",
    "aiReviewedAt": "2026-07-25T01:24:43.854464+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_portal_tuning": {
    "id": "mushroom_kingdom_item_portal_tuning",
    "name": "Dimensional Harmonizer",
    "description": "The Dimensional Harmonizer is a delicate, intricately crafted device made from rare interdimensional alloys and enchanted to stabilize unstable rifts between worlds. Crafted by the Mushroom Kingdom's most trusted engineers, it can prevent catastrophic reality shifts during interdimensional travel or when dealing with misbehaving Toads. With a mere flick of its switch, it emits a shimmering pulse that stabilizes the portal for exactly 10 minutes, ensuring safe passage and preventing accidental dimensional breaches.",
    "category": "services",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "stabilize_portal",
      "prevent_dimensional_shift"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dimensional_express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stabilize Portal",
        "rules": "Activates as a bonus action. The device emits a shimmering pulse that stabilizes an unstable rift for exactly 10 minutes, preventing catastrophic reality shifts within the stabilized area. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Prevent Dimensional Shift",
        "rules": "While the portal is stabilized, any attempt to alter its destination through magical means results in an immediate failure of that attempt. This effect does not require a saving throw but has no recharge and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "The device requires basic knowledge of interdimensional mechanics, accessible to even the most novice adventurers.",
    "vendorReason": "Koopa Shop specializes in oddities and services related to travel, making it a natural fit for this device.",
    "shippingDetail": "The Dimensional Express ensures safe delivery through its specialized interdimensional courier service, known for its reliability.",
    "usage": {
      "activation": "Bonus action to activate and stabilize the portal.",
      "duration": "10 minutes per use.",
      "endsWhen": "The stabilization effect ends after 10 minutes or if the device is damaged.",
      "charges": "Unlimited uses, but only one may be active at a time."
    },
    "priceReason": "The Dimensional Harmonizer is priced at 1000 XP due to its intricate craftsmanship and specialized function in ensuring safe interdimensional travel.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T14:33:17.027311+00:00",
    "aiReviewedAt": "2026-07-25T14:33:17.027311+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stonehide_shield": {
    "id": "animatopia_stonehide_shield",
    "name": "Rumble Stone Shield",
    "description": "The Rumble Stone Shield is a masterpiece of ancient craftsmanship forged by the Stonewall Clan. Its surface shimmers with an earthy glow, and it feels surprisingly light despite its formidable resilience. When struck, it releases a low rumble as it absorbs much of the impact from blunt attacks, leaving opponents dazed for a moment. It's not just a shield—it’s a guardian that whispers the secrets of the earth to those who wield it.",
    "category": "equipment",
    "price": 6200,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Earthbound Resilience",
      "Blunt Absorption"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "giant_beetle",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Earthbound Resilience",
        "rules": "The shield grants you a +3 bonus to your Armor Class. This effect is passive and does not require an action."
      },
      {
        "title": "Blunt Absorption",
        "rules": "When you take damage from a blunt attack, there's a 20% chance that the Rumble Stone Shield absorbs half of the damage for 1 turn (up to once per short or long rest)."
      }
    ],
    "levelRequirementReason": "The ancient forging process and the shield’s resilience require a minimum level to wield effectively.",
    "vendorReason": "The Beast Bazaar deals in rare artifacts from the wild, including this relic of the Stonewall Clan.",
    "shippingDetail": "Delivered by a giant beetle courier, ensuring safe and swift transport to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous (earthbound resilience) and lasts for 1 turn when blunt absorption activates.",
      "endsWhen": "The effects end at the start of your next turn or after absorbing damage, whichever comes first. The shield recharges with a short rest.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflecting its rare crafting and ancient origins, this shield is priced accordingly.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T01:24:49.784764+00:00",
    "aiReviewedAt": "2026-07-25T01:24:49.784764+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_memory_petal": {
    "id": "animatopia_memory_petal",
    "name": "Whisperwind's Remembrance",
    "description": "Whisperwind's Remembrance are delicate, iridescent petals that shimmer with the essence of lost memories. Crafted from the ancient bark of the Great Spirit Tree, these petals grant a fleeting glimpse into the past when consumed. They are said to reveal hidden truths and weaknesses, making them invaluable for deciphering ancient riddles or uncovering secrets long buried in time. A rare find at the forest market, these petals offer a brief respite from the present, allowing the user to ponder the mysteries of their origins.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌸",
    "stock": 23,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Memory Vision",
      "Temporary Intelligence Boost"
    ],
    "vendor": "forest_market",
    "shippedBy": "delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Vision",
        "rules": "When consumed, Whisperwind's Remembrance grant a single 'memory' vision that reveals hidden truths or weaknesses. This effect lasts for 1 minute and can only be used once per day."
      },
      {
        "title": "Temporary Intelligence Boost",
        "rules": "For the duration of the memory vision, the user gains a +5 bonus to Intelligence checks and saving throws. This benefit lasts for up to 2 turns."
      }
    ],
    "levelRequirementReason": "Whisperwind's Remembrance are accessible to all adventurers who wish to uncover hidden truths.",
    "vendorReason": "The forest market is known for its unique and rare items, making it the perfect place to find Whisperwind's Remembrance.",
    "shippingDetail": "These delicate petals are delivered swiftly by delivery drones, ensuring they remain fresh upon arrival.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "1 minute and up to 2 turns",
      "endsWhen": "The effect ends when the duration expires or the user is incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Whisperwind's Remembrance are priced at 1000 XP due to their rarity and the unique benefits they offer.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:25:09.004659+00:00",
    "aiReviewedAt": "2026-07-25T01:25:09.004659+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_chaos_shard": {
    "id": "curiosity_chaos_shard",
    "name": "Fragment of Unraveling Chaos",
    "description": "The Fragment of Unraveling Chaos hums with raw, untamed energy that dances across your skin like a restless storm. This pulsating shard can warp perception and leave you stumbling through a world where logic bends into whimsy. Rumor has it that staring too long at its chaotic core might send you into fits of spontaneous poetry or make you juggle flaming skulls with ease – all in the name of sheer, unbridled chaos.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💥",
    "stock": 95,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "chaos-infused movement",
      "spontaneous poetic outbursts"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Rattlesnake Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Chaotic Movement",
        "rules": "When you activate this item, you gain a +1 bonus to your speed for 2 turns. Additionally, there is a 5% chance that a creature within 5 feet of you becomes confused until the start of its next turn."
      },
      {
        "title": "Poetic Spree",
        "rules": "There is a 10% chance each round that you spontaneously recite a rhyming couplet, which grants advantage on your next Charisma (Persuasion) check. This effect ends if you are hit by an attack."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers just starting to explore the chaotic realms of magic and wonder.",
    "vendorReason": "The chaos dealer is known for their eclectic collection of items that blur the lines between sanity and madness, making this shard a fitting addition to their inventory.",
    "shippingDetail": "Ships via Rattlesnake Express with an additional delay of one day due to its volatile nature.",
    "usage": {
      "activation": "Action",
      "duration": "2 turns",
      "endsWhen": "The duration ends or you are hit by an attack.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its unique utility and the unpredictable nature of its effects, this shard remains a treasure worth the investment.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:25:27.291986+00:00",
    "aiReviewedAt": "2026-07-25T01:25:27.291986+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_apple_pie_recipe": {
    "id": "equestria_item_apple_pie_recipe",
    "name": "Grandma Sweetie Pie's Secret Recipe",
    "description": "Grandma Sweetie Pie's Secret Recipe is a delicate parchment imbued with the essence of Equestria’s finest apple pie. Its edges shimmer with hints of cinnamon and sugar, and its scent alone can transport you to Ponyville Market. Only those who have earned her blessing may use it; otherwise, it bursts into a cascade of harmless sparks that fizz like confetti fireworks. The result is an apple pie so delectable, it could charm even the most grumpy of ponies.",
    "category": "services",
    "price": 1000,
    "icon": "🍎",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "grant_cooking_skill_level_3",
      "chance_to_create_apple_pie"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Carriage",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Cooking Skill Level 3",
        "rules": "Activates on a successful roll. The user gains the effects of a Cooking skill at level 3, allowing them to prepare meals that are highly praised by their audience."
      },
      {
        "title": "Chance to Create Apple Pie",
        "rules": "Once per day, the user can attempt to create an apple pie using this recipe. If successful (DC 15 Wisdom check), they produce a pie that grants temporary hit points equal to its creator’s level +4 to all within 30 feet for 24 hours."
      }
    ],
    "levelRequirementReason": "Beginners should start with the basics, and this recipe is no exception.",
    "vendorReason": "As a staple of Ponyville Market, it only makes sense for Sweetie Pie to sell her family’s secret recipe.",
    "shippingDetail": "Delivered by the most reliable carriage service in Equestria. Expect delivery within two days.",
    "usage": {
      "activation": "Once per day, active on a successful Wisdom (Perception) check (DC 15).",
      "duration": "24 hours for those who consume the pie.",
      "endsWhen": "Upon consumption of the pie or if the creator fails to roll a successful check.",
      "charges": "1/Day"
    },
    "priceReason": "Reflecting its rarity and the expertise required, this recipe is priced at 1000 XP.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:25:04.513657+00:00",
    "aiReviewedAt": "2026-07-25T01:25:04.513657+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_star_dust_amulet": {
    "id": "equestria_item_star_dust_amulet",
    "name": "Amulet of Celestial Dreams",
    "description": "The Amulet of Celestial Dreams is crafted from solidified starlight, its surface etched with ancient runes that shimmer faintly in the dark. This artifact whispers promises of prophetic dreams and fleeting glimpses into the future, often revealing hidden truths just out of reach. It feels cool to the touch, a reminder of the cosmos' eternal cycle, and Wario's attempts at using it for treasure hunting are legendary within the crystal empire.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "prophetic_dreams",
      "night_vision"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Prophetic Dreams",
        "rules": "At the start of your turn, roll a d20. On a result of 15 or higher, you gain one piece of useful information related to future events. This effect lasts until the end of your next short rest."
      },
      {
        "title": "Night Vision",
        "rules": "You have darkvision out to 60 feet while wearing this amulet. The effect is active as long as you are wearing it and does not require action or concentration."
      }
    ],
    "levelRequirementReason": "The mystical power of the amulet demands a high level of discipline and focus, suitable only for seasoned adventurers.",
    "vendorReason": "The crystal empire is renowned for its mastery over celestial artifacts like this one, ensuring its authenticity and rarity.",
    "shippingDetail": "Ships via the Royal Messenger, known for reliability and speed within Equestria.",
    "usage": {
      "activation": "Passive effect; requires no action to activate.",
      "duration": "Instantaneous; lasts until end of next short rest or removed from wearer.",
      "endsWhen": "The effect ends when you finish a short rest, remove the amulet, or are incapacitated.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it provides unique and powerful effects without overshadowing other items.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T01:26:02.857985+00:00",
    "aiReviewedAt": "2026-07-25T01:26:02.857985+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronometric_shard": {
    "id": "almost_edge_item_chronometric_shard",
    "name": "Echoing Void Fragment",
    "description": "This pulsating shard glows with an eerie, shifting light that whispers of forgotten timelines and alternate realities. It briefly accelerates or decelerates time within a small radius, allowing users to experience moments in a surreal, accelerated flow or slow motion. Handle it carefully; you might find yourself living through the same moment twice! A fragment from the very fabric of non-existence, this shard is both a blessing and a curse.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "time_dilation",
      "temporal_distortion"
    ],
    "vendor": "void_merchant",
    "shippedBy": "dimensional_rift",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Dilation",
        "rules": "The user gains advantage on saving throws against time-based effects for the duration of their next short or long rest. This effect can be used once per day."
      },
      {
        "title": "Temporal Distortion",
        "rules": "Within a 10-foot radius, time slows by 5% for all creatures and objects within its range. This effect lasts for up to 1 minute and can be activated as a bonus action. Creatures within the area must make a DC 14 Constitution saving throw or become stunned until the start of their next turn."
      }
    ],
    "levelRequirementReason": "Even the simplest spellcasters should exercise caution with this fragment, which can be unpredictable and dangerous.",
    "vendorReason": "The void merchant deals in rare and exotic items from other dimensions, including fragments like this one.",
    "shippingDetail": "Ships via a rift that may cause minor temporal distortions during transit.",
    "usage": {
      "activation": "Bonus action to activate; requires concentration for the duration of the effect.",
      "duration": "Up to 1 minute per day, or until the user discontinues concentration.",
      "endsWhen": "Concentration is lost if distracted by a creature or environmental hazard.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The fragment's unpredictable nature and mythic rarity justify its price, making it accessible to those of any level.",
    "priceOriginal": 230000,
    "priceReviewedAt": "2026-07-25T01:26:11.419567+00:00",
    "aiReviewedAt": "2026-07-25T01:26:11.419567+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_desiccated_siren_song": {
    "id": "almost_edge_item_desiccated_siren_song",
    "name": "Murmur of the Absent Coast",
    "description": "The Murmur of the Absent Coast is a desiccated shell that once belonged to a siren, now a relic of forgotten lore and wistful longing. Its cracked surface glows faintly with an ethereal light, and when held, it releases a haunting melody that echoes in the mind like waves on a shore you cannot reach. The song induces a sense of overwhelming nostalgia, clouding the senses and making foes question their reality, perfect for distracting guards or confusing enemies into paralysis.",
    "category": "consumables",
    "price": 1000,
    "icon": "🎶",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "confusion",
      "illusionary_suggestion"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "carrier_pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "When an enemy creature holds the Murmur and plays it as a bonus action, they must succeed on a DC 15 Wisdom saving throw or be confused (as the spell) until the end of their next turn."
      },
      {
        "title": "Illusory Suggestion",
        "rules": "The Murmur can also cast an illusory suggestion effect. Once per short rest, when an enemy creature hears it and makes a successful Wisdom saving throw (DC 15), they hear a voice that suggests a course of action that is logically sound but subtly misleading."
      }
    ],
    "levelRequirementReason": "This item's effects are subtle yet effective, making it accessible to lower-level characters who need distractions and illusions.",
    "vendorReason": "The Liminal Trader specializes in exotic and arcane relics from forgotten worlds, making this siren relic a natural fit for their inventory.",
    "shippingDetail": "Delivered by carrier pigeon, the Murmur usually arrives within a few days, though delays may occur if the bird is intercepted.",
    "usage": {
      "activation": "Bonus action to activate; illusory suggestion usable once per short rest.",
      "duration": "Confusion lasts until the end of the creature's next turn. Illusory suggestion lasts for one hour or until dispelled.",
      "endsWhen": "The effect ends when the Murmur is destroyed, its effects are dispelled, or the duration expires.",
      "charges": "Illusory suggestion usable once per short rest."
    },
    "priceReason": "This item offers powerful yet subtle effects that can be crucial for lower-level characters, justifying a high price in XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:25:58.862750+00:00",
    "aiReviewedAt": "2026-07-25T01:25:58.862750+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_static_resonance_bracelet": {
    "id": "almost_edge_item_static_resonance_bracelet",
    "name": "The Boundary Tether",
    "description": "The Boundary Tether is a heavy brass bracelet imbued with arcane runes that hum in sync with the fabric of reality. Crafted by the Edge Wanderer to counteract the whimsical terrors of the void, it offers steadfast protection against minor dimensional shifts and grants a subtle advantage when facing creatures from between worlds. Legend has it that Wario indeed wore this bracelet to safeguard his lunch during a particularly chaotic meal at Luigi's Diner.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "dimensional_stability",
      "resilient_to_void"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "gravitational_wormhole",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Dimensional Stability",
        "rules": "As a bonus action, the wearer can activate this effect to stabilize minor dimensional distortions around them. This provides temporary stability for up to one minute against any creature from between realities that is within 10 feet of the wearer. The bracelet requires no charges and does not expend any resources."
      },
      {
        "title": "Resilient to Void",
        "rules": "While wearing this bracelet, the wearer gains resistance to all void damage (e.g., from creatures or effects originating in the void). This effect is permanent as long as the wearer remains within the bracelet's range of influence. No save is required."
      }
    ],
    "levelRequirementReason": "This item requires at least level 8 to wield effectively, ensuring it complements more experienced adventurers.",
    "vendorReason": "The Edge Wanderer is renowned for their expertise in crafting items that protect against the perils of dimensional travel and void creatures.",
    "shippingDetail": "Ships via a Gravitational Wormhole, ensuring swift delivery to even the most remote realms.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Up to one minute",
      "endsWhen": "The effect ends when the wearer no longer needs stability or the creature causing the distortion is banished or leaves range.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its rarity and utility in combating unique threats that adventurers frequently encounter.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:25:52.133535+00:00",
    "aiReviewedAt": "2026-07-25T01:25:52.133535+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_croissant_of_gust": {
    "id": "leclaire_isle_croissant_of_gust",
    "name": "Croissant of Gust",
    "description": "The Croissant of Gust is a flaky confectionary creation from Le Claire Isle, where every bite unleashes a gust of wind that can clear obstacles or unnerve foes. The pastry's layers are so tightly packed with elemental energy that even the most seasoned bakers marvel at its power. Biting into it releases a potent burst of air that sends nearby creatures reeling in their tracks, leaving them disoriented for moments.",
    "category": "consumables",
    "price": 1000,
    "icon": "💨",
    "stock": 67,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "Wind Burst",
      "Disorientation"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wind Burst",
        "rules": "When consumed, the Croissant of Gust unleashes a gust of wind that sends a target up to 10 feet away with no action required. The target must succeed on a DC 14 Strength saving throw or be pushed and suffer 2d6 force damage."
      },
      {
        "title": "Disorientation",
        "rules": "The gust also causes the target to become disoriented for the start of its next turn, reducing all movement speeds by half. This effect lasts until the end of the target's next turn."
      }
    ],
    "levelRequirementReason": "This pastry is best suited for beginners, as even a novice can wield its gusty might.",
    "vendorReason": "Dough Depot prides itself on serving the finest pastries from Le Claire Isle, including this gusty treat.",
    "shippingDetail": "Ships within three days of order placement.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "Instantaneous; effect ends when the target makes a saving throw or completes its next turn",
      "endsWhen": "The target successfully saves against the gust or at the end of their next turn",
      "charges": "Unlimited; one per day"
    },
    "priceReason": "Balanced with other rare consumables, this pastry's price reflects its elemental power and rarity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:26:44.601620+00:00",
    "aiReviewedAt": "2026-07-25T01:26:44.601620+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_forbidden_doughnut_of_confusion": {
    "id": "leclaire_isle_forbidden_doughnut_of_confusion",
    "name": "Forbidden Doughnut of Confusion",
    "description": "The Forbidden Doughnut of Confusion is a dark, swirling pastry forged in the deepest recesses of Pastry Palace. Its surface crackles with an unsettling energy, and when consumed, it casts a veil of confusion over its target. Enemies might turn on their allies or forget critical tasks altogether. The doughnut's power comes from ancient ovens where mischievous sprites craft chaos from forgotten flour and sugar. Beware: the more you eat, the higher your chance for unintended actions that could lead to a sprinkle addiction.",
    "category": "forbidden",
    "price": 1000,
    "icon": "😵‍💫",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Target suffers confusion",
      "Unintended actions"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "courier_of_shadow_moon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Confusion",
        "rules": "The target must succeed on a DC 15 Wisdom saving throw or be incapacitated and confused for 1 minute. During this time, the target has disadvantage on attack rolls. If the effect ends before the duration expires, the target is stunned until the start of its next turn."
      },
      {
        "title": "Unintended Actions",
        "rules": "The target has a 50% chance to perform an unintended action each round it is confused. This could range from accidentally attacking allies to dropping items or engaging in bizarre behavior, such as dancing uncontrollably."
      }
    ],
    "levelRequirementReason": "Beginners can appreciate the chaos and fun this doughnut brings but must be cautious of its effects.",
    "vendorReason": "Pastry Palace, known for its eccentric creations, is the only vendor with the expertise to handle such a dangerous yet delightful treat.",
    "shippingDetail": "Shipped under cover of night by the Courier of Shadow Moon to ensure the doughnut arrives in perfect condition.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 minute or until effect ends early",
      "endsWhen": "The target successfully saves against confusion, or the confused state expires",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to ensure it remains a fun but not overpowered option for players of all levels.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:26:20.351621+00:00",
    "aiReviewedAt": "2026-07-25T01:26:20.351621+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_golden_rollingpin_of_creation": {
    "id": "leclaire_isle_golden_rollingpin_of_creation",
    "name": "Golden Rolling Pin of Creation",
    "description": "The Golden Rolling Pin of Creation is a shimmering artifact crafted from crystallized sugar and captured moonlight, its surface etched with arcane runes. Wielded by a skilled artisan, this pin can transform dough into healing delicacies or reshape the terrain to suit one's whims. Bakers across LeClaire Isle whisper that it was forged in the heart of the moon’s alchemy, imbuing it with both culinary and combat prowess.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥠",
    "stock": 34,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "Healing Pastry",
      "Terrain Manipulation"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "royal_carriage",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Healing Pastry",
        "rules": "As a bonus action, the wielder can create a small pastry that heals 1d8 hit points to all creatures within a 5-foot radius. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Terrain Manipulation",
        "rules": "The user may reshape terrain as an action, creating or removing up to 10 cubic feet of material within a 5-foot cube. The terrain change is temporary and lasts until the end of the wielder’s next turn. This effect has no save DC and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "This item requires significant skill to master its full potential, thus a high-level artisan is necessary.",
    "vendorReason": "Sweet Supplies has the finest bakers and confectioners, making it fitting for them to stock this masterpiece of creation.",
    "shippingDetail": "Delivered by the Royal Carriage, ensuring safe travel and timely arrival.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "Instantaneous or until end of next turn",
      "endsWhen": "The effect ends when used again or at the start of the wielder's next turn",
      "charges": "Unlimited, but can only be cast once per short rest"
    },
    "priceReason": "This item is crafted from rare materials and requires significant skill to use effectively, making it a valuable asset worth 1000 XP.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T01:26:24.100408+00:00",
    "aiReviewedAt": "2026-07-25T01:26:24.100408+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_godly_stormbringer": {
    "id": "warhammer_godly_stormbringer",
    "name": "Stormbringer's Fury",
    "description": "Forged in the heart of a dying god, Stormbringer's Fury crackles with raw elemental energy. This colossal warhammer channels lightning and storms, capable of obliterating entire armies – but its immense power demands absolute control… or it’ll destroy you! When wielded by one who commands it, it grants immunity to thunder damage and increases strength by 30%. With each strike, there's a chance to summon a lightning bolt that arcs from the warhammer’s tip.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "immunity to thunder damage",
      "increases strength by 30%"
    ],
    "vendor": "fate_forge",
    "shippedBy": "Celestial Express",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Immunity to Thunder Damage",
        "rules": "The wielder gains immunity to all thunder damage. This effect lasts until the end of their next turn."
      },
      {
        "title": "Strength Boost",
        "rules": "Increases the wielder's Strength score by 30% for 1 minute. Once per long rest, the wielder can use a bonus action to increase their Strength by an additional 5 points for 1 round."
      }
    ],
    "levelRequirementReason": "Only those of godly power and unmatched skill can control Stormbringer's Fury without succumbing to its destruction.",
    "vendorReason": "The gods themselves crafted this weapon, and only the most trusted forges dare handle such a relic.",
    "shippingDetail": "Ships via Celestial Express, delivering directly to your door with no delay.",
    "usage": {
      "activation": "Instantaneous activation on attack rolls.",
      "duration": "Until the end of their next turn or until destroyed by a successful DC 30 Strength (Athletics) check.",
      "endsWhen": "The wielder fails a DC 30 Strength (Athletics) check, is hit by thunder damage, or the warhammer breaks.",
      "charges": "Unlimited, recharged upon destruction and recreation."
    },
    "priceReason": "While powerful, Stormbringer's Fury requires godly strength to wield. Its price reflects both its rarity and the cost of divine craftsmanship.",
    "priceOriginal": 800000,
    "priceReviewedAt": "2026-07-25T01:27:18.475640+00:00",
    "aiReviewedAt": "2026-07-25T01:27:18.475640+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_frostbite_shard": {
    "id": "earth_land_frostbite_shard",
    "name": "Frozen Whisper Shard",
    "description": "The Frozen Whisper Shard is a jagged, ice-laden fragment torn from the Wall of Eternal Frost. When held, it grants the wielder temporary resistance to cold damage and occasionally emits cryptic whispers that only those with an affinity for ancient languages can understand. The shard's surface shimmers with frozen runes that pulse with each heartbeat, hinting at forgotten secrets of the ice giants who once ruled these lands.",
    "category": "consumables",
    "price": 1000,
    "icon": "❄️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grant_resistance_cold_v2",
      "whisper_of_forgotten_giants"
    ],
    "vendor": "magic_shop",
    "shippedBy": "frost_elemental",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Grant Resistance to Cold",
        "rules": "When activated by a bonus action, this shard grants the wielder temporary resistance to cold damage for 1 minute. The effect ends early if the wielder takes fire damage or if the shard is removed from their possession."
      },
      {
        "title": "Whispers of Forgotten Giants",
        "rules": "Once per long rest, the shard can be held and focused upon to receive a cryptic whisper in an ancient tongue. The listener must have proficiency with Arcana or Insight to understand the message fully; otherwise, it conveys only vague impressions. This effect has no save DC but requires concentration for 1 minute."
      }
    ],
    "levelRequirementReason": "This shard is designed for those who can handle its ancient magic and have a basic understanding of cold environments.",
    "vendorReason": "The magic shop has long traded with the ice giants, making them privy to such rare artifacts.",
    "shippingDetail": "Ships via a frost elemental, ensuring safe and swift delivery through icy winds and snowstorms.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute (ends early if fire damage is taken or the shard is removed)",
      "endsWhen": "Fire damage to the wielder or removal of the shard from their possession",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the ancient magic it contains justify its moderate price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:26:52.961714+00:00",
    "aiReviewedAt": "2026-07-25T01:26:52.961714+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_godly_chronos_orb": {
    "id": "earth_land_godly_chronos_orb",
    "name": "The Echoing Chronos Orb",
    "description": "The Echoing Chronos Orb is said to be a fragment of time itself, shattered during the Great Dragon Wars and now wielded by Wario for his alchemical experiments. Its surface glows with an ethereal blue light, hinting at its temporal nature. While it doesn’t grant true time manipulation, it does allow Wario to slightly accelerate the creation process of his legendary items, a feat that has left many in awe but few fully understanding how this ancient artifact works.",
    "category": "premium",
    "price": 1000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "temporal_acceleration",
      "slight_time_reversal"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Temporal Acceleration",
        "rules": "Activates as a bonus action, the Chronos Orb allows Wario to slightly accelerate his item creation process. This effect lasts for 1 minute and has no save DC or target range. The orb can be used once per long rest."
      },
      {
        "title": "Slight Time Reversal",
        "rules": "The user must succeed on a Wisdom (Perception) check with a DC of 15 to activate this effect, which has a 20% chance to occur. When successful, the orb temporarily reverses time for up to 1 round, allowing the user to rework or correct their work without losing progress."
      }
    ],
    "levelRequirementReason": "Only those of immense magical prowess and experience can properly wield such a powerful godly artifact.",
    "vendorReason": "The Earth Emporium is known for its rare and ancient artifacts, including the Chronos Orb which they acquired through trade with otherworldly entities.",
    "shippingDetail": "Ships via a dimensional portal, ensuring safe delivery within a week of purchase.",
    "usage": {
      "activation": "Bonus action or reaction (at the user's discretion)",
      "duration": "1 minute for Temporal Acceleration; instantaneous for Slight Time Reversal",
      "endsWhen": "The duration expires or the effect is interrupted by an external force",
      "charges": "Once per long rest"
    },
    "priceReason": "While not as powerful as a full temporal artifact, this godly item still requires significant magical energy and craftsmanship to craft.",
    "priceOriginal": 850000,
    "priceReviewedAt": "2026-07-25T01:26:55.813498+00:00",
    "aiReviewedAt": "2026-07-25T01:26:55.813498+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_potion_of_minor_illusion": {
    "id": "faerun_item_potion_of_minor_illusion",
    "name": "Potion of Minor Illusion",
    "description": "Crafted by a gnome illusionist, this shimmering vial contains a potent potion that allows you to conjure simple illusions for a short time. The liquid inside glows faintly as it reacts with your touch, and the effects are both visually striking and sound-like. Perfect for distracting guards or creating a false treasure hoard, this potion mimics the essence of Wario's coin-hiding antics, making it a favorite among mischievous adventurers.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 38,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Create Small Illusion",
      "Mimic Sound or Shape"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "flying_carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Create Small Illusion",
        "rules": "You can use an action to create the illusion of one small object, creature, or other creation. This illusion appears within range and lasts for up to 1 minute. You can change its appearance at any time as a bonus action, but you must maintain concentration (as if concentrating on a spell) to do so."
      },
      {
        "title": "Mimic Sound or Shape",
        "rules": "The illusion can also mimic the sound of a creature’s voice or footsteps. This is an auditory effect only and requires no visual component. The sound lasts for up to 30 seconds after you create the illusion."
      }
    ],
    "levelRequirementReason": "This potion's effects are simple enough that even low-level characters can use it effectively.",
    "vendorReason": "Baldur’s Bazaar is known for its extensive variety of magical items, including this versatile potion.",
    "shippingDetail": "Delivered swiftly by a flying carpet, ensuring that your order arrives fresh and potent.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute or until concentration is lost",
      "endsWhen": "Concentration ends or the effect is dispelled",
      "charges": "Unlimited uses"
    },
    "priceReason": "The potion's effects, while useful, are not overly powerful for its rarity and price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:27:18.099321+00:00",
    "aiReviewedAt": "2026-07-25T01:27:18.099321+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_scroll_of_divination": {
    "id": "faerun_item_scroll_of_divination",
    "name": "Scroll of Divination - A Wario Prediction!",
    "description": "This ancient scroll, purportedly penned by an eccentric oracle known for predicting treasure hoards and pitfalls alike, offers a cryptic glimpse into your immediate future. Unfold it on a calm night under the light of a full moon to reveal a hidden location within fifty feet or gain a single, invaluable hint regarding an upcoming challenge. The oracle's predictions, while often misguided by greed, have a peculiar accuracy that cannot be ignored.",
    "category": "premium",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "reveal_a_hidden_location_within_50ft",
      "grant_a_single_hint_regarding_an_upcoming_challenge"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "magic_messenger_pigeon",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reveal Hidden Location",
        "rules": "When activated as an action, this scroll reveals a hidden location within fifty feet. This effect is instantaneous and does not require line of sight to the target."
      },
      {
        "title": "Hint on Upcoming Challenge",
        "rules": "Activating this scroll grants you a single hint regarding an upcoming challenge or danger. The hint provides a cryptic clue that may be interpreted in various ways, but it is always relevant and useful for avoiding or preparing against the coming peril."
      }
    ],
    "levelRequirementReason": "The scroll's cryptic nature requires a moderate understanding of fate to properly interpret its revelations.",
    "vendorReason": "Waterdeep Market stocks rare and ancient items, making it the perfect vendor for this mystical artifact.",
    "shippingDetail": "The scroll is delivered via a magical messenger pigeon, ensuring swift and secure delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after one use",
      "charges": "Unlimited"
    },
    "priceReason": "The scroll's rarity and the cryptic, yet useful, nature of its effects justify this fair price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:27:51.419756+00:00",
    "aiReviewedAt": "2026-07-25T01:27:51.419756+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_rusty_gearbox": {
    "id": "connectopia_rusty_gearbox",
    "name": "Wario's Scrap Fortress Heart",
    "description": "Crafted from salvaged parts of a forgotten automated fortress, Wario's Scrap Fortress Heart is a pulsating gearbox that hums ominously as it boosts your mining speed by an impressive 30%. This relic occasionally triggers small explosions with showers of sparks, dealing minor damage to nearby enemies and causing temporary blindness. The heart also enhances the durability of any tools you wield, providing a steady repair buff in the midst of your work.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙️",
    "stock": 45,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Mining Speed Boost",
      "Explosive Showers"
    ],
    "vendor": "block_smith",
    "shippedBy": "express_delivery",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Mining Speed Boost",
        "rules": "Increases your mining speed by 30% while active. This effect is passive and does not require an action to activate."
      },
      {
        "title": "Explosive Showers",
        "rules": "There's a 10% chance that the relic will trigger, dealing 1d4 fire damage to all creatures within 5 feet and causing them to become blinded for 1 round. The effect ends when triggered."
      }
    ],
    "levelRequirementReason": "The relic's chaotic energy and complex parts require a seasoned miner with at least 9th level experience to safely wield.",
    "vendorReason": "As the local blacksmith, Block Smith specializes in crafting tools from salvaged materials, making Wario's Scrap Fortress Heart a natural addition to his inventory.",
    "shippingDetail": "Expressed via fast courier, delivery is guaranteed within three days of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous explosion when triggered; lasts until the end of your next turn.",
      "endsWhen": "The relic stops functioning immediately after a successful save or upon being destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Crafted from rare salvaged parts, the relic's balanced price reflects its unique combination of utility and danger.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:27:27.896492+00:00",
    "aiReviewedAt": "2026-07-25T01:27:27.896492+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_godly_resonance_shard": {
    "id": "connectopia_godly_resonance_shard",
    "name": "The Architect’s Echo",
    "description": "The Architect’s Echo is a shimmering shard of Connectopia's ancient block-laying machines, its surface etched with intricate patterns that pulse with latent energy. Crafted from the very essence of construction itself, it hums with the potential to either repair or destroy, depending on one’s skill and intent. Wario assures that this fragment can rebuild entire castles in a single pass, but if misused, it might inadvertently unleash chaotic explosions that reshape the landscape around you.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Instant Repair",
      "Crafting Speed Boost"
    ],
    "vendor": "craft_corner",
    "shippedBy": "dragon_flight",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Repair",
        "rules": "Activates as a bonus action. This effect has a chance to instantly repair one piece of equipment with a total cost not exceeding 50 XP. The effect is usable once per long rest."
      },
      {
        "title": "Crafting Speed Boost",
        "rules": "Active passively, this item grants a temporary boost to the user’s crafting speed by +50%. This effect lasts until the end of the next short or long rest."
      }
    ],
    "levelRequirementReason": "This shard requires no level for use as it is an artifact that aids in construction and repair, accessible to all who seek its benefits.",
    "vendorReason": "Craft Corner specializes in items related to construction and repair, making The Architect’s Echo a perfect fit for their inventory.",
    "shippingDetail": "Shipped via dragon flight courier service which ensures safe delivery within one week of purchase.",
    "usage": {
      "activation": "Bonus action or passive effect",
      "duration": "Instantaneous or lasts until the end of the next short rest, whichever ends first",
      "endsWhen": "The effect is expended after a successful use or at the end of a long rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This shard's price reflects its utility in repair and construction, providing significant benefits without being overpowered.",
    "priceOriginal": 350000,
    "priceReviewedAt": "2026-07-25T01:28:20.132619+00:00",
    "aiReviewedAt": "2026-07-25T01:28:20.132619+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_shadow_scroll": {
    "id": "midlands_item_shadow_scroll",
    "name": "Fragment of Whispered Secrets",
    "description": "This brittle, ink-stained parchment bears cryptic prophecies and half-forgotten rumors, whispered secrets from spies, assassins, and disgruntled nobles of a bygone era. Each page is hand-written in an ancient script that defies modern understanding, yet those who can decode its enigmatic messages may uncover hidden passages leading to lost treasures or perilous betrayals. Wario's infamous attempts at obtaining this scroll have made it notorious across the Midlands, earning it a reputation as both a boon and a bane for any who dare to possess it.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 15,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Secret Passage Revelation",
      "Ancient Texts Insight"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "swift_hawk_courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Secret Passage Revelation",
        "rules": "When you spend an action to focus on the scroll, there is a 10% chance that it reveals a hidden passage in your current location. This effect has a cooldown of one hour."
      },
      {
        "title": "Ancient Texts Insight",
        "rules": "While deciphering ancient texts with an Investigation check, you gain advantage on the roll and are considered proficient even if you lack proficiency. You can use this ability once per short or long rest."
      }
    ],
    "levelRequirementReason": "The scroll requires a character of at least level 8 to handle its cryptic nature and potential for peril.",
    "vendorReason": "Empire Exchange deals in rare, ancient items that hold significant historical value, making the 'Fragment of Whispered Secrets' a fitting addition to their inventory.",
    "shippingDetail": "The parchment is shipped rolled up and secured within a protective leather sheath to prevent damage during transit.",
    "usage": {
      "activation": "Action or bonus action to focus on the scroll for its effects.",
      "duration": "Instantaneous for secret passage revelation; duration of an Investigation check for text insight.",
      "endsWhen": "The effect ends when the duration expires, a new use is made, or it is destroyed in combat.",
      "charges": "Unlimited uses per rest"
    },
    "priceReason": "The balanced price reflects the scroll's rarity and potential for both aiding and endangering its possessor.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T01:27:53.493792+00:00",
    "aiReviewedAt": "2026-07-25T01:27:53.493792+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_shimmering_crumb": {
    "id": "almost_edge_item_shimmering_crumb",
    "name": "Shimmering Crumb of Uncertainty",
    "description": "The Shimmering Crumb of Uncertainty is a minuscule, almost invisible fragment of doughnut that glows faintly with an unsettling luminescence. When consumed, it grants a fleeting glimpse into the void, revealing hidden paths or forgotten lore. However, this insight comes at a price; it may also attract unwanted attention from entities beyond human comprehension. The crumb's ethereal light dances around you, casting eerie shadows that could easily become permanent fixtures in your vision.",
    "category": "consumables",
    "price": 1000,
    "icon": "✨",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Glimpse into the Void",
      "Unsettling Aura"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Slipstream",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse into the Void",
        "rules": "Upon consuming, you gain a fleeting insight that provides advantage on one Intelligence or Wisdom check of your choice. This effect lasts for 1 minute, and it has no save DC. However, there is a 5% chance per minute this effect is active that an entity from the void attempts to claim you as its vessel."
      },
      {
        "title": "Unsettling Aura",
        "rules": "For the duration of your next long rest, you suffer disadvantage on Charisma (Persuasion) checks and are subject to a mild illusion effect that causes you to see strange, fleeting shadows around you. This aura does not require saving against but lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "The Shimmering Crumb of Uncertainty is designed for those who are just starting their journey and need to balance curiosity with caution.",
    "vendorReason": "The Edge Wanderer, a seasoned traveler, often comes across such peculiar artifacts on their expeditions into the unknown.",
    "shippingDetail": "Due to its volatile nature, this item is shipped via Dimensional Slipstream to ensure it arrives intact and potent.",
    "usage": {
      "activation": "Eaten as a consumable",
      "duration": "1 minute for the Glimpse into the Void; until your next long rest for the Unsettling Aura",
      "endsWhen": "The effects end either by their duration or if consumed in combat, causing them to be immediately expended.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the rarity and potential danger of the item, balancing it with its utility for adventurers.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:28:01.305689+00:00",
    "aiReviewedAt": "2026-07-25T01:28:01.305689+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_void_echo_charm": {
    "id": "almost_edge_item_void_echo_charm",
    "name": "Void Echo Charm – Resonance of the Rim",
    "description": "The Void Echo Charm – Resonance of the Rim hums with an eerie, ethereal whisper that resonates from the edge of the known world. This unsettling charm allows you to perceive echoes of past events and hidden dangers, potentially uncovering secrets of the void... or driving you mad from the whispers that fill your mind. The charm's subtle vibrations can be felt through the skin, a reminder of the unseen forces lurking nearby.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Echoes of the Past",
      "Perception Boost"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Gravity Well Delivery",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Echoes of the Past",
        "rules": "As an action, you can focus on the charm and perceive a brief echo of events that occurred near the edge. This allows you to uncover hidden passages or clues within a 30-foot radius for up to 1 minute. The effect has no save DC but is limited to once per day."
      },
      {
        "title": "Perception Boost",
        "rules": "The charm grants a +2 bonus to Perception checks made to detect hidden dangers or clues while wearing it, as long as the wearer is within 30 feet of an edge. This effect lasts for 1 hour and can be used once per day."
      }
    ],
    "levelRequirementReason": "The charm's subtle but persistent connection to the void requires a minimum level of concentration and discipline, suitable for characters who have honed their senses.",
    "vendorReason": "The Void Merchant specializes in items that bridge the gap between reality and the unknown, making this charm an ideal fit for their inventory.",
    "shippingDetail": "Due to its fragile nature, the Void Echo Charm is shipped via a secure, specialized container to ensure safe delivery.",
    "usage": {
      "activation": "Action or Reaction (Echoes of the Past)",
      "duration": "Up to 1 minute (Echoes of the Past); 1 hour (Perception Boost)",
      "endsWhen": "Effect ends when its duration expires",
      "charges": "Once per day"
    },
    "priceReason": "The charm's rarity and unique properties, combined with its daily limit, justify this price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:28:27.572393+00:00",
    "aiReviewedAt": "2026-07-25T01:28:27.572393+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_luminescent_dust": {
    "id": "almost_edge_item_luminescent_dust",
    "name": "Luminescent Dust of the Lost Cycle",
    "description": "The Luminescent Dust of the Lost Cycle, extracted from the forgotten geometries of a bygone cycle, glows with an eerie, sickly light that dances like spectral embers in the darkness. When scattered, it weaves fleeting illusions that dance and shift, confusing foes and leaving them disoriented for moments. It also reveals hidden ethereal presences within a 10-foot radius, their faint traces glowing under its touch, aiding exploration and discovery.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💫",
    "stock": 15,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Fleeting Illusions",
      "Reveals Ethereal"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fleeting Illusions",
        "rules": "When activated as a bonus action within 30 feet, the dust creates small, shifting illusions that last for 6 seconds. These illusions are visible to and can be interacted with by enemies, providing them a momentary distraction but do not grant cover or shelter."
      },
      {
        "title": "Reveals Ethereal",
        "rules": "When activated as an action within 30 feet, the dust reveals any invisible or ethereal creatures in a 10-foot radius for 30 seconds. This effect does not require line of sight and can be used once per short rest."
      }
    ],
    "levelRequirementReason": "The complexity of manipulating forgotten geometries requires a minimum character level to properly utilize the dust’s effects.",
    "vendorReason": "The Liminal Trader specializes in items from forgotten realms, making this dust an appropriate addition to their wares.",
    "shippingDetail": "Ships within a week via the Temporal Courier’s secure and reliable service.",
    "usage": {
      "activation": "Bonus action or action",
      "duration": "6 seconds for illusions, 30 seconds for revealing ethereal creatures",
      "endsWhen": "Effect duration ends naturally or when used again in the same rest",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The dust is priced at 1000 XP, balancing its utility and the complexity of obtaining such a rare relic.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:28:28.032702+00:00",
    "aiReviewedAt": "2026-07-25T01:28:28.032702+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_godly_resonance_stone": {
    "id": "grand_country_godly_resonance_stone",
    "name": "The Layer's Lament",
    "description": "The Layer's Lament is a jagged, crystalline stone forged from the molten fabric of the Grand Country. Its surface hums with latent energy, shimmering in hues of shifting reality. This relic grants limited control over localized gravity fields and allows its wielder to perceive multiple layers of existence, making it invaluable for explorers and treasure hunters alike. Wielders report that conversations seem less awkward when viewed through this lens.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 3,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "localized_gravity_control",
      "reality_perception"
    ],
    "vendor": "layer_market",
    "shippedBy": "temporal_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Localized Gravity Control",
        "rules": "As an action, the wielder can manipulate gravity within a 5-foot radius for up to 1 minute. This effect is useful for creating levitation platforms or counteracting environmental hazards. The use requires concentration and ends if the user ceases concentrating."
      },
      {
        "title": "Reality Perception",
        "rules": "The wielder gains advantage on Wisdom (Perception) checks made to locate hidden or secret things within 30 feet for 10 minutes upon activation as a bonus action. This effect does not provide any insight into the nature of the hidden items."
      }
    ],
    "levelRequirementReason": "The stone's latent energy requires a certain level of spiritual and physical discipline to harness.",
    "vendorReason": "Layer Market is renowned for dealing in premium artifacts from the Grand Country, including this unique relic.",
    "shippingDetail": "The stone requires special packaging to prevent temporal distortion during transit.",
    "usage": {
      "activation": "bonus action or reaction (for Reality Perception)",
      "duration": "1 minute per use for gravity control, 10 minutes for reality perception",
      "endsWhen": "concentration is lost or the effect's duration ends",
      "charges": "unlimited"
    },
    "priceReason": "The stone's rarity and unique crafting process justify its moderate price.",
    "priceOriginal": 650000,
    "priceReviewedAt": "2026-07-25T01:28:16.512655+00:00",
    "aiReviewedAt": "2026-07-25T01:28:16.512655+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_guild_token_of_valor": {
    "id": "earth_land_guild_token_of_valor",
    "name": "Token of Valor - Stoneguard Guild",
    "description": "The Token of Valor - Stoneguard Guild is a intricately engraved stone token that bears the guild's insignia. It is said to be imbued with the spirit of valor, and its use commands respect from the guild members. Upon activation, it grants a +2 bonus on reputation checks with the Stoneguard Guild and allows for a 15% discount on all purchases at their stalls. The token also subtly intimidates lesser foes within 30 feet, compelling them to lower their guard or flee in fear.",
    "category": "faction",
    "price": 1000,
    "icon": "🛡️",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Reputation Boost",
      "Discounted Prices"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "messenger_rat",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Reputation Boost",
        "rules": "Activating the token grants a +2 bonus on reputation checks with the Stoneguard Guild. This effect lasts for an hour and can be used once per day."
      },
      {
        "title": "Discounted Prices",
        "rules": "The token provides a 15% discount on all purchases made at the Stoneguard Guild's stalls. The discount can be applied up to three times per week, but it cannot be combined with other discounts or offers."
      }
    ],
    "levelRequirementReason": "The guild's token is designed for those who have proven themselves worthy through experience and valor.",
    "vendorReason": "As the quartermaster oversees all supplies and tokens, it makes sense that they would sell this symbol of trust and loyalty.",
    "shippingDetail": "The token is delivered by a clever messenger rat known for its impeccable timing and reliable service.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour or until expended",
      "endsWhen": "After one hour or when the user chooses to expend it, whichever comes first. It can be used once per day.",
      "charges": "Once daily"
    },
    "priceReason": "The token's value is balanced by its ability to enhance social standing and provide significant discounts, making it a worthwhile investment for adventurers.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:28:38.752670+00:00",
    "aiReviewedAt": "2026-07-25T01:28:38.752670+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_chrono_shard_fragment": {
    "id": "earth_land_chrono_shard_fragment",
    "name": "Chrono Shard Fragment – Echoes of Time",
    "description": "The Chrono Shard Fragment – Echoes of Time hums with raw temporal energy, its surface etched with ancient runes that pulse and shift like a living chronicle. This fragment is said to be a remnant from a shattered artifact, capable of revealing fleeting visions of the past and future, though these glimpses are often distorted by Wario's insatiable appetite for cake. Holding it can warp reality itself, but only the most daring dare to wield its power at their own peril.",
    "category": "curiosities",
    "price": 1000,
    "icon": "⏳",
    "stock": 8,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Vision",
      "Enhanced Intelligence"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Vision",
        "rules": "As an action, you can focus on the shard and gain temporary foresight. For one minute, you have advantage on Wisdom (Insight) checks to determine future events. However, this effect has a 20% chance of causing a minor temporal anomaly, dealing 1d6 force damage at the end of each long rest."
      },
      {
        "title": "Enhanced Intelligence",
        "rules": "You gain a +1 bonus to intelligence checks and saving throws while holding the shard. This effect lasts until you take a short or long rest."
      }
    ],
    "levelRequirementReason": "The fragment's raw temporal energy requires a certain level of magical understanding to control.",
    "vendorReason": "Earth Emporium specializes in rare and powerful curiosities that can bend the fabric of reality, making it an ideal vendor for such an item.",
    "shippingDetail": "The shard is shipped through a dimensional portal, ensuring its arrival with minimal risk to the package or sender.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until you take a short rest",
      "endsWhen": "At the end of each long rest due to temporal anomalies or when you stop holding it",
      "charges": "Unlimited"
    },
    "priceReason": "The shard's rarity and the potential risks involved justify its price.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-25T01:28:53.463851+00:00",
    "aiReviewedAt": "2026-07-25T01:28:53.463851+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_rainbow_hoof_amulet": {
    "id": "equestria_item_rainbow_hoof_amulet",
    "name": "Rainbow Hoof Amulet",
    "description": "The Rainbow Hoof Amulet glimmers and shifts in color as you wear it, its surface a living tapestry of hues that seem to dance with every step. Crafted from a genuine unicorn horn and enchanted by the Elements themselves, this amulet grants you an unerring sense of direction when lost and a surprising resistance to negative effects, such as fear and charm spells. It’s a constant reminder of Equestria's magic and resilience, even in the most challenging of times.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌈",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Directional Guidance",
      "Resistance to Negative Effects"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Pony Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Directional Guidance",
        "rules": "When you are lost or confused about your surroundings, as a bonus action, you can activate this amulet. You gain advantage on Wisdom (Survival) checks and have a +2 bonus to passive Perception while navigating unfamiliar terrain for 1 hour."
      },
      {
        "title": "Resistance to Negative Effects",
        "rules": "While wearing the Rainbow Hoof Amulet, you have resistance to all saving throws against fear and charm effects. Additionally, once per short rest, you can use your reaction to negate a single negative effect that would otherwise debilitate you."
      }
    ],
    "levelRequirementReason": "This amulet requires a certain level of focus and magical attunement, making it suitable for experienced adventurers.",
    "vendorReason": "Canterlot's premier mercantile shop is known for its diverse and high-quality enchanted items, including this rare piece from the Elements' own handiwork.",
    "shippingDetail": "Delivered within a week by trusted couriers of the Pony Express.",
    "usage": {
      "activation": "Bonus action to activate; once per short rest for Directional Guidance; once per long rest to negate negative effect.",
      "duration": "1 hour for Directional Guidance; instantaneous for negating an effect.",
      "endsWhen": "Rest ends when the effects expire or are used up.",
      "charges": "Unlimited, but one use per short and long rest."
    },
    "priceReason": "The amulet's rarity and magical properties justify its moderate price in terms of XP value.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:29:05.467941+00:00",
    "aiReviewedAt": "2026-07-25T01:29:05.467941+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_starfall_shard": {
    "id": "equestria_item_starfall_shard",
    "name": "Starfall Fragment",
    "description": "A Starfall Fragment, a crystalline shard of a fallen star, glimmers faintly under moonlight. Crafted from the celestial debris of Equestria's night sky, it pulses with an ancient magic that can disrupt dark enchantments and emit dazzling light beams. Although fragile, its power is unmatched in dispelling malevolent energies, making it a treasure of the Crystal Empire, once nearly crushed by Wario’s ill-fated attempt to use it as a weapon.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌟",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Disrupt Dark Magic",
      "Channel Starlight"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "magic portal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupt Dark Magic",
        "rules": "As an action, you can target a creature or object affected by a dark magic effect. This fragment emits a burst of starlight, dealing 5d6 radiant damage to the target and attempting to dispel the dark magic effect. The save DC is 18. You can use this ability once per short rest."
      },
      {
        "title": "Channel Starlight",
        "rules": "As a bonus action, you can channel starlight through the fragment to create dazzling beams of light that blind creatures within 30 feet for 1 minute (save DC 16). This effect has no save and ends when its duration expires."
      }
    ],
    "levelRequirementReason": "Even novice heroes can harness this shard's celestial power, making it accessible to all who seek to defend Equestria.",
    "vendorReason": "The Crystal Empire is renowned for its mastery of star magic and has long been a repository of such relics.",
    "shippingDetail": "Ships via the Celestial Express, arriving within three days.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous for Disrupt Dark Magic; Channel Starlight lasts until its duration ends.",
      "endsWhen": "Disrupt Dark Magic on a failed save; Channel Starlight ends when the duration expires.",
      "charges": "Unlimited, recharging after a short rest."
    },
    "priceReason": "Balanced at 1000 XP, it remains within reach for a young but determined adventurer.",
    "priceOriginal": 250000,
    "priceReviewedAt": "2026-07-25T01:29:08.742740+00:00",
    "aiReviewedAt": "2026-07-25T01:29:08.742740+00:00",
    "aiReviewVersion": 1
  },
  "curiosity_chronometer_of_misfortune": {
    "id": "curiosity_chronometer_of_misfortune",
    "name": "Chronometer of Misfortune",
    "description": "The Chronometer of Misfortune is a tarnished brass pocket watch with intricate bone gears that whisper stories of misfortune. When wound, it subtly warps time around you, creating brief moments where your foes' attacks falter or your own speed increases. However, its malevolent essence can also cause nearby creatures to suffer temporary debuffs, all while enhancing your perception. Be wary; the watch's bad luck is not to be underestimated.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🕰️",
    "stock": 3,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "temporal distortions",
      "bad luck aura"
    ],
    "vendor": "chaos_dealer",
    "shippedBy": "Night Raven Delivery",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Distortions",
        "rules": "When activated as a bonus action, the Chronometer of Misfortune creates a momentary distortion in time around you. For 1 minute, any creature that starts its turn adjacent to you must make a DC 13 Dexterity saving throw or be slowed until the start of your next turn. This effect can occur up to once per long rest."
      },
      {
        "title": "Bad Luck Aura",
        "rules": "For as long as the Chronometer is active, any creature within 10 feet of you has disadvantage on attack rolls and saving throws. This aura persists for 1 minute or until a creature leaves your proximity."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield effectively due to the complexity of managing its effects.",
    "vendorReason": "The Chaos Dealer is known for dealing with all kinds of cursed and misfortunate items, making this watch an ideal fit.",
    "shippingDetail": "Delivered via the Night Raven's shadowy route, ensuring secrecy but potentially causing delays in arrival.",
    "usage": {
      "activation": "Bonus action to activate; can be used up to twice per short rest.",
      "duration": "1 minute or until a creature starts its turn adjacent to you.",
      "endsWhen": "The duration ends when the user stops concentrating, after being hit by an attack or failing a saving throw against an effect, or at the end of a long rest.",
      "charges": "Unlimited uses per short and long rest."
    },
    "priceReason": "Balanced price reflects its cursed nature, misfortune effects, and limited duration.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T01:28:53.276582+00:00",
    "aiReviewedAt": "2026-07-25T01:28:53.276582+00:00",
    "aiReviewVersion": 1
  },
  "warhammer_voidbringer_x": {
    "id": "warhammer_voidbringer_x",
    "name": "Voidbringer’s Embrace",
    "description": "Forged in the heart of a collapsed star, Voidbringer’s Embrace hums with an unholy light that seems to absorb all around it. Its surface is etched with ancient runes that glow faintly, and the hammer's head appears to be made from solidified starlight. Holding this weapon grants you resistance to necrotic damage, but beware—its attacks can pull enemies into the abyssal void, causing them to feel an overwhelming sense of dread and fear. Prolonged use may drain your essence, leaving you weakened and vulnerable.",
    "category": "equipment",
    "price": 2500,
    "icon": "🌌",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Resilient Necrosis",
      "Abyssal Pull"
    ],
    "vendor": "Fate Forge",
    "shippedBy": "Dimensional Rift Express",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Resilient Necrosis",
        "rules": "While holding Voidbringer’s Embrace, you gain resistance to necrotic damage. You can activate this effect as a bonus action. The resistance lasts until the start of your next turn."
      },
      {
        "title": "Abyssal Pull",
        "rules": "As an action, you can use Voidbringer’s Embrace to cast Teleport on yourself and any willing creature within 30 feet who is holding it. This effect has a range of 120 feet and lasts for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires significant magical power to wield the weapon's potent effects.",
    "vendorReason": "Only the most skilled blacksmiths at Fate Forge can craft such a powerful and dangerous artifact.",
    "shippingDetail": "The delivery is accompanied by a special guardian to ensure safe transport through unstable dimensions.",
    "usage": {
      "activation": "Bonus action for Resilient Necrosis; Action for Abyssal Pull",
      "duration": "Until the start of your next turn (Resilient Necrosis); 1 minute (Abyssal Pull)",
      "endsWhen": "Effect ends when you lose concentration or the duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a mythic item that offers potent defensive and offensive capabilities.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-25T01:29:36.665448+00:00",
    "aiReviewedAt": "2026-07-25T01:29:36.665448+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_donut_of_speed": {
    "id": "leclaire_isle_donut_of_speed",
    "name": "Donut of Speed",
    "description": "The Donut of Speed, a lightning-glazed pastry from Le Claire Isle's Dough Depot, delivers an electrifying burst of speed. Its core is baked with enchanted sugar that crackles with raw energy, making it a sought-after treat for adventurers in a hurry. Eat this donut and you'll feel the world spin around you as your feet barely touch the ground; perfect for escaping danger or racing to the finish line in a pie-eating contest.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍩",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "grant_speed_buff",
      "chance_to_spin"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grant Speed Buff",
        "rules": "Eating the Donut of Speed grants you a +2 bonus to your movement speed for 1 minute. This effect is instantaneous upon consumption and ends when you finish a short or long rest."
      },
      {
        "title": "Chance to Spin",
        "rules": "There's a 5% chance each time you eat the Donut of Speed that you will become confused for 1 round, as your legs involuntarily dance uncontrollably. This effect has no save DC and can occur multiple times per day."
      }
    ],
    "levelRequirementReason": "This donut is accessible to all adventurers as it requires minimal preparation and provides a fun but not overly powerful speed boost.",
    "vendorReason": "Dough Depot is renowned for its innovative baked goods, including the legendary Donut of Speed, which they are proud to offer to their customers.",
    "shippingDetail": "The donuts are delivered by swift snails, ensuring that your order arrives fresh and ready to spin you into action.",
    "usage": {
      "activation": "Eating the Donut of Speed",
      "duration": "1 minute per serving",
      "endsWhen": "Completion of a short or long rest",
      "charges": "Unlimited; each donut is a one-time use"
    },
    "priceReason": "The Donut of Speed's price reflects its unique enchantment and the rare ingredients used in its creation, making it a valuable yet fair-priced item for adventurers.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:29:19.133616+00:00",
    "aiReviewedAt": "2026-07-25T01:29:19.133616+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_crusty_armor": {
    "id": "leclaire_isle_crusty_armor",
    "name": "Crusty Armor of the Baker",
    "description": "Forged from the hardened crust of Le Claire Isle’s legendary pastries, this armor provides a delightful yet sturdy barrier against the world. When struck, it crumbles in a cascade of flaky pastry, but its ancient magic grants resistance to bludgeoning damage and offers an unexpected sticky situation that can ensnare foes. Though it may not stop arrows or heavy blows, it’s a charming addition for any baker-warrior's arsenal.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "resistance_to_bludgeoning",
      "sticky_situation"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "rolling_cart",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Resistance to Bludgeoning",
        "rules": "While wearing this armor, you have resistance to bludgeoning damage. This effect lasts until the start of your next turn."
      },
      {
        "title": "Sticky Situation",
        "rules": "Once per short rest, as a bonus action, you can cause an opponent within 5 feet to become stuck in a cloud of pastry for 1 minute. On a successful Dexterity saving throw, the effect ends immediately. This ability has no cooldown."
      }
    ],
    "levelRequirementReason": "The armor's enchantments and the unique materials used require a certain level to properly harness its full potential.",
    "vendorReason": "Le Claire Isle’s Pastries are renowned for their craftsmanship, so it makes sense that they would sell such an item forged from their own legendary dough.",
    "shippingDetail": "Delivered by a rolling cart, often accompanied by the bakers themselves to ensure freshness and proper handling.",
    "usage": {
      "activation": "Bonus action for Sticky Situation; passive effect for Resistance to Bludgeoning",
      "duration": "Instantaneous for sticky situation; until start of next turn for bludgeoning resistance",
      "endsWhen": "Sticky situation ends with a successful saving throw or after 1 minute; bludgeoning resistance lasts until the start of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The armor's rarity, unique crafting process, and enchanted properties justify its moderate but not overly expensive price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:29:47.606502+00:00",
    "aiReviewedAt": "2026-07-25T01:29:47.606502+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_anomaly_slice": {
    "id": "doughnut_hole_anomaly_slice",
    "name": "Anomaly Slice",
    "description": "Anomaly Slice is a morsel that defies all logic, a slice of nothingness that leaves its consumer in a realm where physics are rewritten. As you take your first bite, reality bends and warps around you; objects near the eater may shift, blur, or even invert their orientation. The taste is indescribable—sweet yet nauseatingly strange—and the effects can last from moments to minutes, depending on how your body responds. Some have reported that the slice grants a temporary alteration of their abilities, while others suffer from disorienting confusion.",
    "category": "forbidden",
    "price": 1000,
    "icon": "👾",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Reality Distortion",
      "Temporary Transformation"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Dark Matter Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reality Distortion",
        "rules": "The eater must make a DC 15 Constitution saving throw. On a failed save, they are subjected to a momentary reality distortion (instantaneous). For the duration of the effect, objects within a 10-foot radius may shift their orientation or blur randomly for up to one minute."
      },
      {
        "title": "Temporary Transformation",
        "rules": "The eater has a 25% chance each time they consume an Anomaly Slice (unlimited uses) to gain a random temporary transformation effect. This lasts for 1d4 hours, during which the eater’s physical form may change in some way—such as gaining wings or growing a tail—but retains all their abilities and memories."
      }
    ],
    "levelRequirementReason": "Even novices can handle the brief reality-warping effects of this slice.",
    "vendorReason": "The Void Vendor deals in items that bend the fabric of reality, and what better way to sell something than to make it appear as nothing?",
    "shippingDetail": "Delivered via a Dark Matter Drone, which ensures safe and quick transport through even the most unstable regions.",
    "usage": {
      "activation": "Eaten as an action or bonus action.",
      "duration": "Instantaneous; lasts for up to one minute per failed save.",
      "endsWhen": "The effect ends when the duration expires or a successful saving throw is made.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The Anomaly Slice’s rarity and unique effects justify its price, making it a valuable yet risky addition to any adventurer's arsenal.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T01:29:50.936583+00:00",
    "aiReviewedAt": "2026-07-25T01:29:50.936583+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_boots": {
    "id": "almost_edge_item_chronal_boots",
    "name": "Chronal Boots of the Fractured Step",
    "description": "The Chronal Boots of the Fractured Step hum with a faint, shifting aura as they pulse slightly out of sync with their surroundings. Crafted from ancient, fractured chronal fragments, these boots allow for fleeting distortions in time, enabling swift dashes and dodges. However, prolonged wear can unravel one's connection to reality, causing disorientation. These boots are said to have been crafted by the Chronomancers of Eternis, whose mastery over temporal anomalies is unparalleled.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏱️",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Temporal Distortion",
      "Chronal Dodge"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Gravity Well Courier",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "When you use your action to activate these boots, you gain a +10 bonus to Dexterity saving throws for the next minute. If this effect is used multiple times, it resets after 5 minutes."
      },
      {
        "title": "Chronal Dodge",
        "rules": "On a successful Dexterity saving throw against an attack, you can attempt to dodge by using your reaction to teleport up to 10 feet in any direction. This use expends one of the boots' charges."
      }
    ],
    "levelRequirementReason": "Requires significant magical power and a deep understanding of temporal magic.",
    "vendorReason": "The Edge Wanderers are known for their extensive trade in arcane and mystical items, including Chronal Boots.",
    "shippingDetail": "Ships via the Gravity Well Courier, which can deliver these boots within a week of order placement.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when you are incapacitated or die. You regain the ability to use this feature after a long rest.",
      "charges": "5 charges, recharged after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, considering its unique temporal abilities and limited recharge.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T14:33:43.540384+00:00",
    "aiReviewedAt": "2026-07-25T14:33:43.540384+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_memory_lantern": {
    "id": "almost_edge_item_memory_lantern",
    "name": "Lantern of Lost Recollections",
    "description": "The Lantern of Lost Recollections is a tarnished brass lantern that casts an ethereal glow, pulling forgotten memories from the void. It hums softly as it illuminates dim areas, revealing fleeting visions of past events tied to the environment. These glimpses are both enlightening and unsettling, offering hidden clues or lore about the surroundings with a 10% chance. The lantern can be used to briefly stun foes by projecting disorienting visions, though prolonged exposure is taxing on the viewer's psyche.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💡",
    "stock": 91,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Memory Revelation",
      "Brief Stun"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "dimensional echo",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Revelation",
        "rules": "The user can focus on an object within 30 feet to reveal hidden clues or lore about it with a 10% chance. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Brief Stun",
        "rules": "As a bonus action, the lantern can be aimed at one target within 60 feet to project disorienting visions, stunning them for 1 round (up to twice per long rest). The target must succeed on a DC 13 Wisdom saving throw or be stunned. On a successful save, they are only blinded for 1 minute."
      }
    ],
    "levelRequirementReason": "This lantern is suitable for lower-level characters as it aids in exploration and offers strategic advantages without overwhelming combat situations.",
    "vendorReason": "The Liminal Trader specializes in arcane curiosities that aid in exploration, making the Lantern of Lost Recollections a fitting addition to their inventory.",
    "shippingDetail": "Delivered via a Dimensional Echo, ensuring the lantern arrives intact and ready for use.",
    "usage": {
      "activation": "Bonus action or passive focus (Memory Revelation); Bonus action (Brief Stun)",
      "duration": "Instantaneous (Memory Revelation); 1 round (Brief Stun) or until stunned ends",
      "endsWhen": "Exhausted uses, recharged after a long rest; Dismissed by the user",
      "charges": "2 charges, recharging after a long rest"
    },
    "priceReason": "The Lantern of Lost Recollections offers significant utility in both exploration and combat without being overpowered, justifying its fair value.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:30:02.266646+00:00",
    "aiReviewedAt": "2026-07-25T01:30:02.266646+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_dohk_favor": {
    "id": "leclaire_isle_dohk_favor",
    "name": "Dohk Favor Token - 'The Perfect Tart'",
    "description": "The Dohk Favor Token - 'The Perfect Tart' is a gleaming confectionary medallion, crafted with exquisite care from dough and sugar. It bears the intricate symbol of the Dohk Council, representing years of mastery in pastry artistry. To present this token to a member of the council is an honor reserved for those who have achieved culinary perfection. The Dough Folk's tastes are indeed unforgiving, but should you win their favor through this token, they may share rare ingredients or unique quests that could change your fortunes forever.",
    "category": "faction",
    "price": 1000,
    "icon": "🍩",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grant_dohk_favor",
      "increased_reputation"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "honeycomb_cart",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Grant Dohk Favor",
        "rules": "Presenting this token to a council member grants you access to exclusive quests and discounts on rare pastry ingredients. This effect is instantaneous upon presentation, but is limited to once per month."
      },
      {
        "title": "Increased Reputation",
        "rules": "Upon successful completion of a quest granted through the Dohk Favor Token, your reputation with the Dough Folk increases by 5 points. This effect has no save DC and does not consume charges or have a duration; it is a passive benefit."
      }
    ],
    "levelRequirementReason": "Only those who have achieved a certain level of skill in pastry artistry can earn the respect to present such an item.",
    "vendorReason": "Sweet Supplies is a trusted vendor known for its connections with the Dough Folk and its knowledge of their tastes.",
    "shippingDetail": "The token is shipped in a protective honeycomb container, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Presenting the token to a council member",
      "duration": "Instantaneous upon presentation",
      "endsWhen": "Once per month for Grant Dohk Favor; passive and ongoing for Increased Reputation",
      "charges": "Unlimited"
    },
    "priceReason": "The token's rarity, the value of its potential rewards, and the limited monthly use make it a fair price for players.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:30:11.699732+00:00",
    "aiReviewedAt": "2026-07-25T01:30:11.699732+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rusty_dwarven_shovel": {
    "id": "middle_earth_rusty_dwarven_shovel",
    "name": "Grub's Grumbling Shovel",
    "description": "The Grub's Grumbling Shovel is a dwarven relic forged from stubborn steel that has seen countless diggings and meals. Its rusted blade, though weathered, still gleams with an unnatural sharpness, ensuring it can cut through the toughest dirt with ease. Known for its ability to unearth even the most stubbornly buried treasure, this shovel also slightly reduces the size of dirt piles and has a small chance of disarming traps during excavation.",
    "category": "consumables",
    "price": 1000,
    "icon": "⛏️",
    "stock": 91,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Increased Mining Speed",
      "Unearthed Treasure"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "rolling_barrel",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Mining Speed",
        "rules": "When used for mining, the Grub's Grumbling Shovel provides a +25% bonus to mining checks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Unearthed Treasure",
        "rules": "There is a 10% chance each time you use the shovel that you will find an additional piece of treasure or resource, beyond what would normally be expected from digging. This effect also ends when you finish your next turn."
      }
    ],
    "levelRequirementReason": "The Grub's Grumbling Shovel is simple enough in design for even the novice adventurer to wield effectively.",
    "vendorReason": "Dwarven craftsmen are known for their expertise in creating tools that can withstand harsh conditions, making this shovel a perfect fit for Dwarven Forge's offerings.",
    "shippingDetail": "Delivered via rolling barrel, which ensures the shovel arrives at your door in pristine condition.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Instantaneous effect; lasts until end of next turn",
      "endsWhen": "Ends when you finish your next turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Grub's Grumbling Shovel is crafted from rare, ancient dwarven steel and combines practical utility with a touch of lore, justifying its higher price.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:30:14.424641+00:00",
    "aiReviewedAt": "2026-07-25T01:30:14.424641+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_scroll_of_lost_lore": {
    "id": "middle_earth_scroll_of_lost_lore",
    "name": "Fragment of the Silmaril Prophecy",
    "description": "This brittle scroll, a Fragment of the Silmaril Prophecy, contains an ancient prophecy written in a language of stars and shadow. Its parchment is yellowed with age, yet it crackles with the power of lost lore. The words 'shiny' and 'danger' are etched alongside more cryptic phrases that hint at the creation of the Rings of Power. It’s said that those who decipher its secrets may unlock hidden knowledge or face perilous challenges.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📜",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "oracle's wisdom",
      "shimmering insight"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Oracle's Wisdom",
        "rules": "As a bonus action, the wielder can activate this scroll to gain advantage on one Intelligence check or saving throw. This effect lasts for a number of rounds equal to your Intelligence modifier."
      },
      {
        "title": "Shimmering Insight",
        "rules": "The scroll grants the user temporary hit points equal to 5 + your level whenever you are struck by an attack. This effect can be used once per long rest but cannot exceed half your maximum hit points."
      }
    ],
    "levelRequirementReason": "It requires a moderate understanding of ancient languages and lore.",
    "vendorReason": "The Shire Shop specializes in rare magical artifacts from Middle-earth.",
    "shippingDetail": "Shipped by the Pony Express, delivered within three days with a slight delay during moonless nights.",
    "usage": {
      "activation": "Bonus action to activate; once per long rest for Oracle's Wisdom and once per day for Shimmering Insight.",
      "duration": "Oracle's Wisdom lasts until the end of your next turn. Shimmering Insight lasts for a number of rounds equal to your Intelligence modifier, up to your level.",
      "endsWhen": "The effect ends when you take damage again or at the start of your next turn after using it.",
      "charges": "Unlimited; recharges on completion of a long rest."
    },
    "priceReason": "Its rarity and ancient power justify its high price in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:30:23.912753+00:00",
    "aiReviewedAt": "2026-07-25T01:30:23.912753+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_battleworn_plate": {
    "id": "midlands_item_battleworn_plate",
    "name": "Shard of the Fallen Emperor’s Guard",
    "description": "Crafted from the fragmented remains of an emperor’s fallen guard, this Shard bears the scars of countless battles and the whispers of forgotten glory. Its dents and scratches tell tales of valor and tragedy, yet it offers a semblance of protection—though not without its own dark history. This relic grants +3 Armor Class to those who wield it but reduces the wearer's effectiveness in close combat, forcing them into defensive stances.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Grants +3 Armor Class",
      "Reduces damage from blunt attacks by 2"
    ],
    "vendor": "empire_exchange",
    "shippedBy": "Imperial Post",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Armor Class Boost",
        "rules": "This effect provides a passive bonus to the user’s Armor Class equal to +3. The effect remains active as long as the user is wearing this Shard."
      },
      {
        "title": "Blunt Attack Reduction",
        "rules": "When an opponent makes a successful attack with a blunt weapon, reduce the amount of damage taken by 2 points. This effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "The Shard's dark history and complex enchantment require a seasoned warrior to wield it effectively.",
    "vendorReason": "The empire exchange deals in relics and artifacts of historical significance, this shard being no exception.",
    "shippingDetail": "Ships via the Imperial Messenger service, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Instantaneous; lasts until the end of your next turn after taking blunt damage.",
      "endsWhen": "Exhausted at the end of each day.",
      "charges": "Unlimited"
    },
    "priceReason": "The Shard's rarity and historical significance justify its moderate cost, despite not being a high-powered item.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:30:48.797919+00:00",
    "aiReviewedAt": "2026-07-25T01:30:48.797919+00:00",
    "aiReviewVersion": 1
  },
  "midlands_item_warrio_s_lucky_coin": {
    "id": "midlands_item_warrio_s_lucky_coin",
    "name": "Wario's Lost Fortune Coin",
    "description": "Wario's Lost Fortune Coin is a tarnished gold coin said to have been dropped during his infamous treasure hunt. This relic, though not imbued with true luck, has a knack for causing minor misfortunes among foes—most often tripping them or making their weapons slip from their grasp. The coin feels warm to the touch, as if it holds onto the fleeting moments of chaos from its past adventures.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Trip on Attack",
      "Weapon Slip"
    ],
    "vendor": "fractured_forge",
    "shippedBy": "roller",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Trip on Attack",
        "rules": "When you use this coin to make an attack roll against a creature within 5 feet, it has disadvantage on the roll. If it hits, the target must succeed on a DC 13 Dexterity saving throw or fall prone."
      },
      {
        "title": "Weapon Slip",
        "rules": "Once per short rest, you can use this coin to make a ranged attack against an enemy's weapon within 5 feet of you. On a hit, the target must drop one weapon it is holding and take 1d6 force damage."
      }
    ],
    "levelRequirementReason": "The coin’s effects require a player to have some experience in combat before they can effectively utilize its mischievous abilities.",
    "vendorReason": "As a vendor specializing in oddities and lost treasures, fractured_forge is known for dealing in items with unique properties like Wario's Lost Fortune Coin.",
    "shippingDetail": "The coin is carefully packed to prevent further tarnishing during transit and delivered via roller courier for quick delivery.",
    "usage": {
      "activation": "Action or bonus action (once per short rest)",
      "duration": "Instantaneous effect on hit",
      "endsWhen": "Exhausted after one use per short rest",
      "charges": "Unlimited uses, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, the coin’s effects are powerful enough to be considered valuable without overshadowing other items.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:30:34.789570+00:00",
    "aiReviewedAt": "2026-07-25T01:30:34.789570+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_dough_folk_favor": {
    "id": "leclaire_isle_dough_folk_favor",
    "name": "The Baker's Blessing",
    "description": "The Baker's Blessing is a delicate gingerbread figurine, intricately carved to resemble a flour-sprinkled baker with an apron tied neatly around its waist. Crafted by the Dough Folk of Le Claire Isle, this charm subtly enhances the quality of baked goods, ensuring that every loaf rises just right and every sprinkle lands in perfect measure. It’s said that those who carry it experience an unerring hand when crafting pastries and breads, even turning near-failures into successes.",
    "category": "faction",
    "price": 1000,
    "icon": "🥷",
    "stock": 18,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "baking_blessing",
      "dough_folk_alliance"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "messenger_bird",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Baking Blessing",
        "rules": "When creating baked goods, the wielder has a +5% chance to achieve perfect results. This effect is passive and does not require any action or expenditure."
      },
      {
        "title": "Dough Folk Alliance",
        "rules": "For one week after activation, the wielder gains a +2 bonus on Diplomacy checks with representatives of the Dough Folk, enhancing their standing within this community. This effect is temporary and ends when the duration expires."
      }
    ],
    "levelRequirementReason": "The charm's subtle magic requires no specific level to activate, making it accessible to all adventurers who wish to honor the Dough Folk.",
    "vendorReason": "Sweet Supplies is known for its connections with the Dough Folk of Le Claire Isle and frequently stocks unique gifts like The Baker's Blessing.",
    "shippingDetail": "The messenger bird delivers the charm swiftly, ensuring it arrives within a day of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Permanent until expended or destroyed.",
      "endsWhen": "Destroyed when its effects are exhausted or if the charm is broken.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The charm's rarity and magical properties, combined with its connection to a revered faction, justify this fair price in experience points.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T01:31:22.300914+00:00",
    "aiReviewedAt": "2026-07-25T01:31:22.300914+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitic_glove": {
    "id": "doughnut_hole_gravitic_glove",
    "name": "Gravitic Glove",
    "description": "The Gravitic Glove is a peculiar leather glove embossed with arcane symbols that hum in sync with gravitational anomalies. Crafted from enchanted leather found only in the highest peaks of the Celestial Mountains, it allows its wearer to defy gravity briefly, leaping across chasms and standing firm against shifting ground. The glove's core component, a fragment of the Gravitic Nexus, limits its use to once per combat, preventing overuse.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 12,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Defy Gravity",
      "Disrupt Terrain"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Warped Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Defy Gravity",
        "rules": "As an action, you can briefly defy gravity by leaping up to 15 feet higher than normal. This effect lasts for 1 round and has no save DC."
      },
      {
        "title": "Disrupt Terrain",
        "rules": "When you are in a chaotic environment (such as quicksand or unstable ground), you can use the glove's power to briefly stabilize yourself, reducing the movement speed of all creatures within 5 feet by 10 feet for 1 minute. This effect has a save DC of 14 and can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires expertise in gravity manipulation to safely wield the glove's unstable power.",
    "vendorReason": "Void Vendor specializes in rare, otherworldly items that defy conventional physics, making the Gravitic Glove a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Warp Stream Express, ensuring delivery within one week of purchase.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "1 round for 'Defy Gravity'; 1 minute for 'Disrupt Terrain'",
      "endsWhen": "At the end of your next turn for 'Defy Gravity'; ends when a creature successfully saves against 'Disrupt Terrain'",
      "charges": "One use per long rest"
    },
    "priceReason": "The glove's rarity, limited materials, and unique construction justify its moderate price.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T01:30:55.642922+00:00",
    "aiReviewedAt": "2026-07-25T01:30:55.642922+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_echoing_portal_shard": {
    "id": "doughnut_hole_echoing_portal_shard",
    "name": "Echoing Portal Shard",
    "description": "A fractured piece of a miniature, unstable portal, this Echoing Portal Shard is a splintered remnant of forgotten dimensions. Holding it allows you to briefly glimpse into distorted reflections of the Doughnut Hole's past, or perhaps just a really weird donut. The shard hums with residual magic, leaking fragments of time that can be both a blessing and a curse—revealing hidden passages, but potentially misleading your perceptions in the process.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Glimpse into Time",
      "Reveal Hidden Passages"
    ],
    "vendor": "center_seller",
    "shippedBy": "Gravity Well Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Glimpse into Time",
        "rules": "As a bonus action, you can activate the shard to briefly see a distorted vision of events that occurred within the last hour. This effect lasts for 1 round and has a 5% chance of revealing hidden passages nearby. The vision is potentially misleading, as it may not be an accurate representation of reality."
      },
      {
        "title": "Reveal Hidden Passages",
        "rules": "Upon activation, there's a 20% chance that the shard reveals a hidden passage within 30 feet. This effect can only occur once every 24 hours and has no save DC required. The passage revealed is stable enough to walk through but may collapse after use."
      }
    ],
    "levelRequirementReason": "The shard's residual magic requires a basic understanding of dimensional manipulation, accessible at level 1.",
    "vendorReason": "The center seller deals in rare and ancient curiosities that have been passed down through generations, including fragments like the Echoing Portal Shard.",
    "shippingDetail": "Ships via gravity well, ensuring safe arrival with no risk of damage to the fragile shard.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous; vision lasts for 1 round",
      "endsWhen": "The effect ends when the duration expires or you take damaging action",
      "charges": "Unlimited, but only one reveal per day"
    },
    "priceReason": "This shard offers both utility and risk, making it a valuable tool for explorers and adventurers without being overpowered.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T01:31:51.835710+00:00",
    "aiReviewedAt": "2026-07-25T01:31:51.835710+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_singing_shard": {
    "id": "almost_edge_item_singing_shard",
    "name": "Resonance of the Void",
    "description": "The Resonance of the Void is a jagged shard that sings an eerie melody, a fragment torn from the void itself. When held, it induces vivid hallucinations of endless corridors and impossible geometries, disorienting foes and sowing dread within them. The shard's melodic hum can be heard by all within earshot, and its presence alone can reduce enemy attack rolls by 10%. Holding this artifact is said to grant temporary madness (roll d6), but it also has a chance to confuse enemies for three turns.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎵",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "confuses foes",
      "induces temporary madness"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Rift Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Confuse Foes",
        "rules": "When activated, this artifact confuses all creatures within 30 feet of the wielder for three turns. The save DC is 14. If a creature succeeds on its saving throw, it is immune to the effect of this artifact for the rest of the day."
      },
      {
        "title": "Temporary Madness",
        "rules": "Roll a d6 when holding the shard. On a 5 or 6, you gain temporary madness (roll d6). The madness lasts until the end of your next long rest and grants you advantage on Charisma checks but disadvantage on Wisdom checks."
      }
    ],
    "levelRequirementReason": "This artifact requires a certain level to wield its power safely, preventing lower-level characters from being overwhelmed by its effects.",
    "vendorReason": "The void merchant deals in strange and dangerous curiosities, making the Resonance of the Void a natural addition to their inventory.",
    "shippingDetail": "Ships via Dimensional Rift Courier with an additional delivery delay of one week due to the artifact's unstable nature.",
    "usage": {
      "activation": "Activates as a bonus action when held and sung.",
      "duration": "Confusion lasts for three turns, madness is temporary.",
      "endsWhen": "Madness ends at the end of your next long rest; confusion ends when the effect is dispelled or its duration expires.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the artifact's rare material and the risk it poses, making it a valuable but not overpowered addition to any character's arsenal.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:31:16.501690+00:00",
    "aiReviewedAt": "2026-07-25T01:31:16.501690+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_chronal_gauntlet": {
    "id": "almost_edge_item_chronal_gauntlet",
    "name": "The Time-Slip Grip",
    "description": "The Time-Slip Grip is a gauntlet forged from solidified temporal anomalies, its surface etched with runes that shimmer and shift like fleeting shadows. Crafted by an eccentric gnome tinkerer who once nearly lost his map in a time loop, it allows the wearer to manipulate time briefly—rewinding the immediate past or accelerating their movement through space. Rumored to be favored by obsessive cartographers, this gauntlet is a whimsical yet powerful tool for those who dare to bend reality.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 2,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Rewind",
      "Motion Acceleration"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Phase Shifter Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Temporal Rewind",
        "rules": "The wearer can rewind time by 5 seconds, effectively moving back in time. This effect has a range of 10 feet and lasts for the duration of one action. The target or attacker must succeed on a DC 14 Dexterity saving throw or be displaced to an earlier moment in history, potentially missing their intended attack."
      },
      {
        "title": "Motion Acceleration",
        "rules": "The wearer's movement speed is increased by +50% for the duration of one minute. This effect has a range of 10 feet and can only be used once per long rest. The user must make a DC 14 Strength saving throw or fall prone due to the strain."
      }
    ],
    "levelRequirementReason": "Requires a minimum character level of 8 to wield this delicate yet powerful tool.",
    "vendorReason": "Edge Wanderer specializes in rare and exotic items for adventurers, including time-related curiosities like the Time-Slip Grip.",
    "shippingDetail": "Ships via Phase Shifter Express with a special delivery delay of one week to account for temporal fluctuations during transit.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "One action or until the end of your next turn",
      "endsWhen": "Target misses their intended attack, user falls prone, or effect is interrupted by another action",
      "charges": "Unlimited"
    },
    "priceReason": "The Time-Slip Grip's balanced price reflects its rarity and the complexity of its temporal manipulation.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T01:31:22.486667+00:00",
    "aiReviewedAt": "2026-07-25T01:31:22.486667+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_memory_rune": {
    "id": "almost_edge_item_memory_rune",
    "name": "Echo of Oblivion",
    "description": "Echo of Oblivion is a small, pulsating rune that seems to hum with forgotten memories and lost emotions. When consumed, it grants you a fleeting glimpse into realities long buried, offering insights that can be both enlightening and disorienting. For one round, your mind feels as though it has been touched by the very fabric of forgotten time, providing advantage on Intelligence checks but leaving you momentarily adrift in thoughts of what once was.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧠",
    "stock": 98,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Advantage on Intelligence Checks",
      "Mild Disorientation"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Spectral Delivery Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Intelligence Check Advantage",
        "rules": "When consumed, Echo of Oblivion grants you advantage on one Intelligence check. This effect lasts for 1 round (6 turns) and ends if you take any damage."
      },
      {
        "title": "Mild Disorientation",
        "rules": "For the duration of its effect, you are mildly disoriented. You have disadvantage on Dexterity saving throws until the end of your next short or long rest. This effect is not negated by taking an action to stabilize yourself."
      }
    ],
    "levelRequirementReason": "Echo of Oblivion is intended for lower-level characters who can benefit from increased Intelligence checks without requiring a high character level.",
    "vendorReason": "The Liminal Trader specializes in items that bridge the gap between the known and unknown, making Echo of Oblivion an ideal addition to their inventory.",
    "shippingDetail": "Ships via Spectral Delivery Drone. The rune may pulse more during transit, but it remains intact upon arrival.",
    "usage": {
      "activation": "Eaten or consumed as a bonus action.",
      "duration": "1 round (6 turns).",
      "endsWhen": "If you take damage, the effect ends immediately.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Echo of Oblivion provides a unique and potentially powerful advantage on Intelligence checks at a fair price relative to its effects and rarity.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:32:25.258395+00:00",
    "aiReviewedAt": "2026-07-25T01:32:25.258395+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_frostbite_potion": {
    "id": "earth_land_frostbite_potion",
    "name": "Absolute Zero Elixir",
    "description": "The Absolute Zero Elixir is a shimmering, icy blue potion that instantly freezes its target, encasing them in a block of solid ice. Upon contact with skin or armor, it forms a crystalline shell that shatters into frosty shards, dealing cold damage over time and immobilizing the foe. This potion is a versatile tool for quick battlefield interventions but should be handled carefully; a sip by the wielder results in an instant chill, making them unfit for combat.",
    "category": "consumables",
    "price": 1000,
    "icon": "🧊",
    "stock": 75,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Freezes target",
      "Deals Cold Damage"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying_carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Instant Freeze",
        "rules": "The drinker targets a creature within 30 feet. The target is immediately encased in ice, immobilizing it for 2 rounds (10 seconds). On the first and each subsequent turn of the target's movement, it takes 1d6 cold damage."
      },
      {
        "title": "Cold Vulnerability",
        "rules": "The target has disadvantage on saving throws against cold-based spells or effects. Additionally, if the target is exposed to a source of fire within 30 feet, they take an additional 2d6 cold damage each round until the effect ends."
      }
    ],
    "levelRequirementReason": "This potion can be used by beginners as it deals non-lethal damage and has a short duration.",
    "vendorReason": "The magic shop specializes in potions that enhance combat capabilities, making this elixir a staple for their inventory.",
    "shippingDetail": "Shipped swiftly by enchanted flying carpets to ensure the potion remains potent upon arrival.",
    "usage": {
      "activation": "A bonus action to drink and target an enemy within range.",
      "duration": "Instantaneous, with effects lasting for 2 rounds (10 seconds) after activation.",
      "endsWhen": "The target escapes or is freed from the ice, or if a source of fire is introduced nearby.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the potion's versatile use in combat and its non-lethal effects.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:31:45.564797+00:00",
    "aiReviewedAt": "2026-07-25T01:31:45.564797+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_godly_echoing_amulet": {
    "id": "earth_land_godly_echoing_amulet",
    "name": "The Resonant Shard of Silence",
    "description": "The Resonant Shard of Silence hums with the forgotten whispers of ancient times, its surface etched with runes that shimmer and fade as it absorbs sound waves. This amulet grants uncanny stealth abilities, making the wearer nearly invisible to the ear, and allows them to mimic a voice with eerie precision for short durations, potentially leading to unintended conversations within one's own mind. Only those who respect the balance of silence should wield this godly artifact, lest they find themselves in conversation with their inner monologue.",
    "category": "equipment",
    "price": 1000,
    "icon": "🤫",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "Stealthy Ears",
      "Voice Mimicry"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "dimensional_portal",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Stealthy Ears",
        "rules": "Activates as a bonus action. Grants the wearer advantage on Stealth checks for 1 minute. The effect ends if the wearer speaks or makes noise."
      },
      {
        "title": "Voice Mimicry",
        "rules": "Activates as a standard action, allowing the wearer to mimic a single voice for 30 seconds. The mimicry can be used once per day and requires concentration. If successful, it confuses any creature within 15 feet who hears the voice. There is a 20% chance of failure."
      }
    ],
    "levelRequirementReason": "Requires significant control over sound to wield this godly artifact without causing chaos.",
    "vendorReason": "The Earth Emporium specializes in relics that harness the power of nature and silence, making it a fitting vendor for this artifact.",
    "shippingDetail": "Ships via dimensional portal, arriving within one week from order placement.",
    "usage": {
      "activation": "Bonus action to activate Stealthy Ears; standard action to use Voice Mimicry.",
      "duration": "Stealthy Ears lasts for 1 minute. Voice Mimicry is instantaneous but requires concentration and can only be used once per day.",
      "endsWhen": "Voice Mimicry ends if the wearer stops concentrating or speaks, and Stealthy Ears ends when noise is made by the wearer.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price reflects the item's rarity and utility without overshadowing other gear.",
    "priceOriginal": 750000,
    "priceReviewedAt": "2026-07-25T01:32:08.016659+00:00",
    "aiReviewedAt": "2026-07-25T01:32:08.016659+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_whispering_shard": {
    "id": "middle_earth_item_whispering_shard",
    "name": "Whispering Shard of Durin's Folk",
    "description": "A fragment of ancient stone pulsates with a faint, rhythmic hum. This shard is said to contain the last echoes of Durin's Folk and can briefly reveal hidden paths or forgotten riddles. While it primarily grants a minor luck boost, the whispering shard also causes a slight itching sensation that lasts for 1 round. Legends speak of its origin in the deep mines where dwarves once sang their ancient songs.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💎",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Minor luck boost",
      "Slight itching"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Luck Boost",
        "rules": "As a bonus action, you can roll 1d4 and add the result to your next attack or saving throw. This effect has no cooldown and can be used once per short rest."
      },
      {
        "title": "Slight Itching",
        "rules": "For 1 round after using the shard, you suffer a -2 penalty to Dexterity saving throws. This effect ends when it's your turn or if you take any action other than movement."
      }
    ],
    "levelRequirementReason": "The whispering shard is accessible to low-level characters as it provides a minor but useful advantage.",
    "vendorReason": "Elves of the deep forests have ancient ties with dwarven lore and often trade in relics like this shard.",
    "shippingDetail": "Delivered swiftly by swift-winged mounts, ensuring safe arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect with ongoing penalties",
      "endsWhen": "At the start of your next turn or when you take an action other than movement",
      "charges": "Unlimited uses"
    },
    "priceReason": "The whispering shard's rarity and historical significance justify its higher price, despite providing a minor effect.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:32:06.274499+00:00",
    "aiReviewedAt": "2026-07-25T01:32:06.274499+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_shire_healing_potion": {
    "id": "middle_earth_item_shire_healing_potion",
    "name": "Shire Hearthbrew Potion",
    "description": "The Shire Hearthbrew Potion is a thick, amber-colored elixir that smells of freshly cut hay and wildflowers. Brewed in the heart of Bag End with honey from the hobbit's beehives and herbs gathered from the rolling hills, this potion is known to bring comfort and warmth to those who drink it. It’s not just for healing wounds; it also subtly lifts the spirit, granting a small but noticeable improvement in mood that can make even the most grumpy of hobbits feel slightly more at ease.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚕️",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Comforting Elixir",
      "Mood Boost"
    ],
    "vendor": "shire_shop",
    "shippedBy": "pony_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Comforting Elixir",
        "rules": "When consumed, this potion heals 15 Hit Points and restores 5 Stamina Points. The effects are instantaneous and do not require any action to activate."
      },
      {
        "title": "Mood Boost",
        "rules": "For the next hour, the drinker gains advantage on Charisma checks and saving throws involving social interactions. This effect is cumulative with other similar abilities but does not stack in other ways."
      }
    ],
    "levelRequirementReason": "This potion is designed for common folk of the Shire who may need a bit more than just the healing magic available to trained healers.",
    "vendorReason": "The local Shire Shop stocks this beloved elixir, ensuring that every hobbit can find comfort and warmth when they need it most.",
    "shippingDetail": "Ships via local pony cart, delivered within a few days. Shipping is reliable but not express.",
    "usage": {
      "activation": "Instantaneous consumption (no action required)",
      "duration": "One hour",
      "endsWhen": "The effect ends after one hour or when consumed by another individual",
      "charges": "Unlimited, as the potion regenerates with each new batch brewed."
    },
    "priceReason": "This price reflects the high quality of ingredients and the labor-intensive brewing process that ensures its effectiveness and flavor.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:32:15.202715+00:00",
    "aiReviewedAt": "2026-07-25T01:32:15.202715+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mithril_resonance_tuning": {
    "id": "middle_earth_item_mithril_resonance_tuning",
    "name": "Mithril Resonance Tuning Device",
    "description": "The Mithril Resonance Tuning Device is a delicate contraption of gleaming mithril and enchanted gears, crafted by dwarven forges in the heart of Mount Ironpeak. This device amplifies the inherent vibrations of precious metals, enhancing their resonance during weapon strikes. When wielded with rare metals, it can add an extra 5d6 to weapon damage, but it also emits a persistent hum that drives nearby creatures mad unless you know how to harness its magic.",
    "category": "services",
    "price": 1000,
    "icon": "⚙️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Enhances weapon damage",
      "Causes magical resonance"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_hawk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enhanced Weapon Damage",
        "rules": "When used with weapons made of mithril, the device adds a bonus of 5d6 to the weapon's damage roll for one round. This effect ends when the weapon is no longer touching an enemy or after the round ends."
      },
      {
        "title": "Magical Resonance",
        "rules": "Once per short rest, the device can be activated to emit a magical resonance that affects all creatures within 10 feet. The DM rolls a d20 with a DC of 15; if it exceeds this, a random beneficial or detrimental effect is triggered on a creature in range."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of weapon and enchantment magic to attune.",
    "vendorReason": "Dwarves are master craftsmen, and their forges produce items that enhance the natural properties of materials like mithril.",
    "shippingDetail": "Ships swiftly via a dragon hawk courier, delivering your device within one week.",
    "usage": {
      "activation": "Uses an action to activate and touch a weapon made of mithril for the duration.",
      "duration": "One round when used with mithril weapons; once per short rest for magical resonance.",
      "endsWhen": "The effect ends when the weapon is no longer touching an enemy or after one round. The resonance ends at the end of your next turn.",
      "charges": "Unlimited, but requires a short rest to reset."
    },
    "priceReason": "Balanced for its rarity and unique effects, this item is moderately priced for its power level.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:32:50.620758+00:00",
    "aiReviewedAt": "2026-07-25T01:32:50.620758+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_primal_massage": {
    "id": "animatopia_primal_massage",
    "name": "Primal Restoration Ritual",
    "description": "Experience the primal pulse of nature as a Forest Shaman’s hands work their magic, combining ancient lore and raw power to mend your wounds and restore vigor. Feel the earth resonate through each chant and touch, knowing that the grubs used in this ritual are said to imbue the massage with regenerative properties. This service removes one level of exhaustion, heals 2d6 hit points, and grants you a surge of stamina, leaving you feeling as though you’ve been reborn from the heart of the forest.",
    "category": "services",
    "price": 1000,
    "icon": "💆‍♀️",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Heals Minor Wounds",
      "Removes Exhaustion"
    ],
    "vendor": "forest_market",
    "shippedBy": "giant_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heal Minor Wounds",
        "rules": "Activates on a successful touch attack. Heals 2d6 hit points and removes one level of exhaustion. This effect has no save DC and can be used once per short or long rest."
      },
      {
        "title": "Remove Exhaustion",
        "rules": "Instantaneous removal upon activation. No save required, but the effect is limited to once per day."
      }
    ],
    "levelRequirementReason": "This service requires no specific level as it is a restorative ritual easily accessible to all travelers in need of rejuvenation.",
    "vendorReason": "The Forest Market, run by the local shamans, offers this unique and essential service to all visitors seeking to restore their vitality after long journeys through the wilds.",
    "shippingDetail": "Delivered swiftly by a giant snail, ensuring that travelers receive the revitalizing effects before embarking on their next adventure.",
    "usage": {
      "activation": "Touch attack",
      "duration": "Instantaneous",
      "endsWhen": "Exhaustion is removed or the effect is used again",
      "charges": "Unlimited, but only once per short or long rest"
    },
    "priceReason": "The price reflects a balance between the unique and powerful effects of the ritual and its accessibility to all adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:32:46.458437+00:00",
    "aiReviewedAt": "2026-07-25T01:32:46.458437+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stone_of_the_beast": {
    "id": "animatopia_stone_of_the_beast",
    "name": "Stone of the Beast’s Fury",
    "description": "The Stone of the Beast’s Fury is a black obsidian fragment imbued with the essence of a wild predator. When activated, it channels raw fury into a devastating burst of rage that strikes all creatures within its 5-foot radius, dealing piercing damage. The stone's power comes from an ancient beast spirit trapped within its core, which can sometimes lash out unpredictably and harm you as well. Activating this relic temporarily amplifies your strength, turning you into a force to be reckoned with in close combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Raging Fury",
      "Self-Damage Risk"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "dire_wolf",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Raging Fury",
        "rules": "When activated as an action, this stone unleashes a burst of raw fury within a 5-foot radius. All creatures in the area take 1d6 piercing damage. The effect lasts for 3 rounds and grants you a +2 bonus to Strength checks and saving throws."
      },
      {
        "title": "Self-Damage Risk",
        "rules": "There is a 10% chance that when you activate this stone, it will inadvertently harm you as well, dealing 1d6 piercing damage. This risk applies once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 8th level to harness the raw power of the beast spirit within.",
    "vendorReason": "The Beast Bazaar specializes in exotic and dangerous items, including those imbued with primal magic like the Stone of the Beast’s Fury.",
    "shippingDetail": "Shipped by a dire wolf courier who delivers it personally, ensuring safe transport to your doorstep.",
    "usage": {
      "activation": "Activating this item requires an action.",
      "duration": "The effect lasts for 3 rounds or until you take damage.",
      "endsWhen": "The effect ends if you take damage, are incapacitated, or use it again before the duration expires.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the raw power and unpredictable nature of the stone's beast spirit.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:32:34.650696+00:00",
    "aiReviewedAt": "2026-07-25T01:32:34.650696+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sticky_scone": {
    "id": "leclaire_isle_item_sticky_scone",
    "name": "Glazed Goblin Scones",
    "description": "Glazed Goblin Scones are a delightful pastry with a mischievous twist. Crafted from enchanted wheat and sprinkled with pixie dust, these scones offer not just sustenance but also a subtle charm to aid in your adventures. Each bite grants you a burst of energy and a +1 bonus to Charisma for 3 rounds, perfect for charming creatures or simply enjoying the sweet treat. A sprinkle of luck accompanies each serving, offering a 15% chance to cause a minor distraction that can help turn the tide of battle.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍪",
    "stock": 78,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Energy Burst",
      "Charisma Boost"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_tray",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Energy Burst",
        "rules": "When consumed, the Glazed Goblin Scones provide a burst of energy. This effect restores 20 hit points and grants you advantage on Charisma checks for 1 minute."
      },
      {
        "title": "Charisma Boost",
        "rules": "For 3 rounds after consuming the scone, you gain a +1 bonus to all Charisma-based rolls. Additionally, there is a 15% chance that any creature within 20 feet of you becomes distracted for 1 minute."
      }
    ],
    "levelRequirementReason": "These tasty treats are designed for adventurers starting their journey and can be enjoyed by all.",
    "vendorReason": "Dough Depot is known for its wide selection of enchanted pastries, making them the perfect vendor for these Glazed Goblin Scones.",
    "shippingDetail": "The scones are delivered fresh and warm on a rolling tray from the bakery.",
    "usage": {
      "activation": "Eaten as a bonus action",
      "duration": "1 minute for Energy Burst, 3 rounds for Charisma Boost; ends when the effect expires or you take damage",
      "endsWhen": "The effects end if you take damage or after their respective durations expire",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to provide a significant but not game-breaking benefit, these scones are priced at 1000 XP.",
    "priceOriginal": 350,
    "priceReviewedAt": "2026-07-25T01:32:44.025636+00:00",
    "aiReviewedAt": "2026-07-25T01:32:44.025636+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dwarf_dough_alchemy": {
    "id": "leclaire_isle_item_dwarf_dough_alchemy",
    "name": "Dough Whisperer's Consultation",
    "description": "The Dough Whisperer's Consultation is a rare alchemical service offered by Pastry Palace. This consultation allows you to infuse your baked goods with powerful buffs, enhancing them with magical properties for a limited time. For every pastry crafted, you can choose from a variety of temporary enhancements, such as increased strength or dexterity, or even summon a small, temporary Dough Golem companion to assist in battle. Be cautious, however, as the alchemist's expertise is unpredictable and the results are never guaranteed.",
    "category": "services",
    "price": 1000,
    "icon": "🧪",
    "stock": 3,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporary Buff",
      "Dough Golem Companion"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_drone",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporary Buff",
        "rules": "Choose one ability score to increase by +2 for a duration of 1 hour. This effect is instantaneous upon activation and can only be used once per day."
      },
      {
        "title": "Dough Golem Companion",
        "rules": "With a successful DC 15 Wisdom (Animal Handling) check, you can summon a small Dough Golem companion that fights by your side for up to 10 minutes. The Dough Golem has 20 hit points and provides a +1 bonus to AC. It reverts back to dough upon taking any amount of damage or after the duration ends."
      }
    ],
    "levelRequirementReason": "This service requires a minimum level of 3 to ensure that you can effectively utilize its magical properties.",
    "vendorReason": "Pastry Palace specializes in alchemical pastries and is renowned for their expertise in Dough Whisperer's Consultation.",
    "shippingDetail": "Delivered via delivery drone, ensuring the dough remains fresh and magical properties intact.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The Dough Golem reverts to dough upon taking damage or after the duration ends; a temporary buff lasts for 1 hour.",
      "charges": "One use per day"
    },
    "priceReason": "This balanced price reflects the rare and alchemical nature of the service, ensuring it remains a valuable yet achievable option.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:32:58.232553+00:00",
    "aiReviewedAt": "2026-07-25T01:32:58.232553+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_royal_crumb_armor": {
    "id": "leclaire_isle_item_royal_crumb_armor",
    "name": "Crusty Champion's Vestments",
    "description": "The Crusty Champion's Vestments are forged from the discarded crumbs of a royal feast, imbued with ancient baking magic. This vest not only offers surprising protection but also deflects minor projectiles with a 20% chance. Though it may seem like mere crumbs, its resilience is unmatched, providing minor resistance to poison damage and granting +3 armor class. Expect it to withstand more than just goblin spit, thanks to the enchantments woven into its fibers.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Projectile Deflection",
      "Poison Resistance"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "magical_cart",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Projectile Deflection",
        "rules": "The vest has a 20% chance per attack or spell that targets the wearer to deflect projectiles. This effect is passive and does not require any action from the wearer."
      },
      {
        "title": "Poison Resistance",
        "rules": "The vest provides resistance to poison damage, reducing it by half. This effect lasts until the end of your next turn after taking poison damage."
      }
    ],
    "levelRequirementReason": "This item is crafted with ancient magic and requires a high level of skill to properly wield its enchantments.",
    "vendorReason": "Sweet Supplies specializes in rare and magical items related to food and drink, making it the perfect vendor for this unique piece of armor.",
    "shippingDetail": "The vest is delivered by magical cart, ensuring that it arrives in pristine condition. However, due to its fragile nature, it may take an additional day for delivery.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of your next turn after taking poison damage or until the vest is destroyed.",
      "endsWhen": "The vest's enchantments cease when you take poison damage, are destroyed, or lose all charges (if applicable).",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The vest is an epic rarity and crafted with ancient magic, making it a valuable addition to any adventurer's arsenal while still being balanced in terms of price.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:33:31.494651+00:00",
    "aiReviewedAt": "2026-07-25T01:33:31.494651+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_shadow_hoof": {
    "id": "equestria_item_shadow_hoof",
    "name": "Shadow Hoof of Nocturne",
    "description": "The Shadow Hoof of Nocturne is a gnarled, obsidian talon forged from the darkest dreams and forgotten nightmares of Equestria. Its surface pulses with an eerie blue glow that lingers in one's vision after contact. Touching it grants temporary shadow resistance but also saps your willpower, leaving you prone to fits of paranoia. The hoof whispers dark secrets and promises of power, yet prolonged exposure corrupts the mind, leading to a descent into madness.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Shadow Resistance",
      "Fear Aura"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "dark_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Resistance",
        "rules": "When you activate this hoof, you gain +15 temporary shadow resistance. This effect lasts until the end of your next turn. You can use it once per long rest."
      },
      {
        "title": "Fear Aura",
        "rules": "Once per short or long rest, when an enemy within 30 feet of you starts its turn, it must make a Wisdom saving throw (DC 12) or become frightened for the duration. The effect ends if you leave the area."
      }
    ],
    "levelRequirementReason": "The Shadow Hoof's corrupting influence necessitates a higher level to wield without significant risk.",
    "vendorReason": "Canterlot Commerce, known for its eclectic and often questionable wares, sells the Shadow Hoof due to its dark allure and mysterious origins.",
    "shippingDetail": "The Dark Messenger delivers the hoof with a chillingly silent courier, ensuring it arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "Until end of next turn or until you leave its range",
      "endsWhen": "Ends when you use another version of this ability or at the start of your next turn",
      "charges": "One per short rest"
    },
    "priceReason": "The Shadow Hoof's rarity and unique properties justify its moderate price, balanced against its limited utility.",
    "priceOriginal": 7200,
    "priceReviewedAt": "2026-07-25T01:33:19.901789+00:00",
    "aiReviewedAt": "2026-07-25T01:33:19.901789+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_shadow_charm": {
    "id": "animatopia_shadow_charm",
    "name": "Whisper of the Night Shade",
    "description": "The Whisper of the Night Shade is a sleek obsidian pendant that glows faintly with an otherworldly light. Crafted by a disgraced Shademaster, it whispers secrets of the forest’s darkest corners to those who wear it. Rumor has it that it can make you see things that aren’t there—like Wario—but only if you let your guard down. The charm is said to detect nearby undead and grant its wearer a +20% bonus to Stealth checks, making them vanish into the night like shadows themselves.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌑",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Shadow Detection",
      "Stealth Boost"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "silent_owl",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Detection",
        "rules": "Passive ability that allows the wearer to detect nearby undead creatures within 30 feet, providing a +2 bonus to Wisdom (Perception) checks for this purpose. Ends when removed or destroyed."
      },
      {
        "title": "Stealth Boost",
        "rules": "Active effect granting the wearer advantage on Stealth checks until they attack with melee weapons or cast spells. This effect can be used once per short rest."
      }
    ],
    "levelRequirementReason": "Requires a character of at least level 3 to wield its abilities effectively.",
    "vendorReason": "The Beast Bazaar specializes in items that enhance one's connection with the natural world, making it fitting for this shadow-themed charm.",
    "shippingDetail": "Delivered by silent owl courier, ensuring discreet and timely delivery to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the wearer attacks or casts a spell, or until the end of their next short rest.",
      "endsWhen": "When the wearer attacks with melee weapons or casts spells, or at the end of their next short rest.",
      "charges": "Unlimited, but only usable once per short rest."
    },
    "priceReason": "Balanced price for a rare item that provides stealth and undead detection benefits without being overpowered.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T01:33:09.940994+00:00",
    "aiReviewedAt": "2026-07-25T01:33:09.940994+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_forbidden_skull": {
    "id": "animatopia_forbidden_skull",
    "name": "The Skull of Silent Echoes",
    "description": "The Skull of Silent Echoes, a pulsating green relic recovered from an Animatopian temple, offers a brief glimpse into ancient rituals when touched. Its eerie glow hints at forgotten magic, yet attracts shadowy entities and Wario's ravenous interest. Touching the skull grants you resistance to necrotic damage for 1 hour but also exposes you to a 5% chance of madness each day until removed. This cursed artifact is sold by the forest_market, delivered by the Raven Messenger with a special delivery delay.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Resistance to Necrotic Damage",
      "Madness Risk"
    ],
    "vendor": "forest_market",
    "shippedBy": "Raven Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Necrotic Resistance",
        "rules": "When you touch the skull, you gain resistance to necrotic damage for 1 hour. This effect ends if you are exposed to a source of radiant damage."
      },
      {
        "title": "Madness Risk",
        "rules": "You have a 5% chance each day after touching the skull to become mad until cured by magic. There is no limit to this effect, but it can be ended with a successful DC 14 Wisdom saving throw."
      }
    ],
    "levelRequirementReason": "The Skull of Silent Echoes' ancient magic and potential for madness make it accessible only to those at least level 1.",
    "vendorReason": "The forest_market specializes in rare artifacts, and this skull's origin from their territory makes it a fitting item for sale there.",
    "shippingDetail": "The Raven Messenger delivers the skull with a special delay of one day to ensure proper handling of such powerful relics.",
    "usage": {
      "activation": "Touching the skull",
      "duration": "1 hour, or until exposed to radiant damage",
      "endsWhen": "Exposure to radiant damage or successful Wisdom saving throw",
      "charges": "Unlimited"
    },
    "priceReason": "The Skull's rare origin and potential for madness make it a balanced purchase at 1,000 XP.",
    "priceOriginal": 6200,
    "priceReviewedAt": "2026-07-25T14:33:26.764619+00:00",
    "aiReviewedAt": "2026-07-25T14:33:26.764619+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_whispering_herb_potion": {
    "id": "earth_land_whispering_herb_potion",
    "name": "Whispering Herb Potion",
    "description": "Crafted by eccentric herbalists in the heart of ancient forests, the Whispering Herb Potion tastes faintly of moss and earth. When consumed, it grants you a fleeting connection to the spirits of the land, whispering advice that feels like the wind's breath through the trees. For an hour, your perception sharpens, granting advantage on Perception checks, while you also gain temporary inspiration, allowing for one attack roll with advantage. This potion is a rare find, passed down from enchanted groves where the earth speaks in secrets and whispers of lost treasures.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Perception Advantage",
      "Inspiration"
    ],
    "vendor": "magic_shop",
    "shippedBy": "flying carpet",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Perception Advantage",
        "rules": "Granting advantage on Perception checks for 1 hour after consuming the potion. This effect ends when the duration expires."
      },
      {
        "title": "Temporary Inspiration",
        "rules": "Allows one attack roll with advantage. This effect can only be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "This potion is suitable for any adventurer, providing a boost to perception and combat without requiring a high level of expertise.",
    "vendorReason": "The magic shop stocks this rare potion as it appeals to adventurers seeking both magical and practical advantages in their quests.",
    "shippingDetail": "Delivered swiftly by enchanted flying carpets, ensuring the potion remains potent upon arrival.",
    "usage": {
      "activation": "Drinking the potion",
      "duration": "1 hour",
      "endsWhen": "Duration expires or the drinker completes a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The unique brewing process and enchanted ingredients make this potion highly sought after, justifying its value in experience points.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:33:24.362489+00:00",
    "aiReviewedAt": "2026-07-25T01:33:24.362489+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_student_uniform_of_focus": {
    "id": "kivotos_item_student_uniform_of_focus",
    "name": "The Concentrated Canvas",
    "description": "The Concentrated Canvas is a student uniform that seems unremarkable until donned. Its tailored fabric subtly enhances concentration, making mental tasks feel effortless. This uniform not only sharpens spellcasting speed by 20%, but it also slightly increases the chance of critical hits with spells by 10%. Worn by diligent scholars at the Student Store, this item is a must-have for those who value efficiency and precision in their studies and magical endeavors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎓",
    "stock": 25,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Enhanced Concentration",
      "Improved Critical Hit Chance"
    ],
    "vendor": "student_store",
    "shippedBy": "standard_mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Concentration",
        "rules": "While wearing the Concentrated Canvas, the wearer gains a +2 bonus to Intelligence (Arcana) checks and spellcasting. This effect is active while the item is worn."
      },
      {
        "title": "Improved Critical Hit Chance",
        "rules": "The wearer has advantage on Dexterity (Stealth) checks when wearing this uniform. Additionally, the chance of landing a critical hit with any spell increases by 10%, but this effect cannot cause a critical hit unless it would already qualify."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to help them focus and improve their magical abilities.",
    "vendorReason": "The Student Store stocks this item because many students find it invaluable for enhancing their studies and spellcasting practice.",
    "shippingDetail": "Ships via standard mail, usually arriving within a week.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Instantaneous (lasts while worn)",
      "endsWhen": "The item is removed from the wearer.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its uncommon rarity and the benefits it provides to spellcasters.",
    "priceOriginal": 800,
    "priceReviewedAt": "2026-07-25T01:33:37.568476+00:00",
    "aiReviewedAt": "2026-07-25T01:33:37.568476+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_harmonic_resonator": {
    "id": "kivotos_item_harmonic_resonator",
    "name": "The Discordant Delight",
    "description": "The Discordant Delight is a delicate, intricately crafted device that generates precise sound waves capable of disrupting even the most disciplined formations. Crafted from ancient, enchanted brass, its resonating core hums with the potential to muffle spells and reduce an enemy’s armor class by 5%. A true masterpiece of acoustics, it demands a skilled hand to harness its power, for improper use can lead to unintended chaos—both on the battlefield and among the ranks.",
    "category": "services",
    "price": 1000,
    "icon": "🎶",
    "stock": 1,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Muffles Enemy Spells",
      "Reduces Armor Class"
    ],
    "vendor": "club_supply",
    "shippedBy": "delivery_only",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Muffle Spells",
        "rules": "When activated as a bonus action, the Discordant Delight creates a zone of silence within a 10-foot radius. Any spell cast by an enemy within this area has disadvantage on its save checks for 2 rounds. This effect ends when the spell is resolved or the area becomes noisy again."
      },
      {
        "title": "Reduce Armor Class",
        "rules": "For 2 rounds after activation, any creature that starts their turn in a 10-foot radius centered on the resonator has its armor class reduced by 5. This effect ends when the duration expires or the resonator is used again."
      }
    ],
    "levelRequirementReason": "The complex calibration and precise control required to effectively use the Discordant Delight necessitate a minimum character level of 8.",
    "vendorReason": "As a premium service item, only Club Supply can offer such a finely tuned device that demands expert handling.",
    "shippingDetail": "The Discordant Delight is shipped via trusted couriers, ensuring it reaches its destination in pristine condition and with minimal delay.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "2 Rounds",
      "endsWhen": "Spell Resolved or Area Becomes Noisy Again; Reused",
      "charges": "Unlimited"
    },
    "priceReason": "The Discordant Delight is priced at 1000 XP, reflecting its rare craftsmanship and the expertise needed to operate it effectively.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T01:34:10.087160+00:00",
    "aiReviewedAt": "2026-07-25T01:34:10.087160+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_pr_echoing_badge": {
    "id": "pokemon_item_pr_echoing_badge",
    "name": "Echoing Badge Fragment",
    "description": "The Echoing Badge Fragment is a shimmering shard recovered from the ancient ruins of Luminous Gym. When held to your ear, you can faintly hear the echoing cheers and roars of legendary battles. This fragment subtly boosts your Pokémon's attack by +5 during one turn near battlefields, and it grants a 10% chance to increase its speed stat for an entire day. These effects serve as a potent motivator for any aspiring trainer.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 45,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Battlefield Boost",
      "Speed Surge"
    ],
    "vendor": "pokemart",
    "shippedBy": "Pokémail Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Battlefield Boost",
        "rules": "When near battlefields, the Echoing Badge Fragment boosts your Pokémon's attack by +5 for one turn. This effect is instantaneous upon activation and ends when you leave a battlefield."
      },
      {
        "title": "Speed Surge",
        "rules": "The fragment grants a 10% chance to increase your Pokémon’s speed stat for an entire day, starting at the beginning of your next turn after activation. This effect requires a successful DC 12 Constitution saving throw or ends immediately."
      }
    ],
    "levelRequirementReason": "The fragment's effects are designed to help trainers of any level who need motivation and support in their Pokémon battles.",
    "vendorReason": "Pokemart is known for its wide array of items that assist both beginners and experienced trainers alike, making the Echoing Badge Fragment a fitting addition.",
    "shippingDetail": "Delivered via Pokémail Express within three days.",
    "usage": {
      "activation": "Activate as an action by holding the fragment to your ear near a battlefield or during battle.",
      "duration": "Instantaneous for Battlefield Boost; one day for Speed Surge.",
      "endsWhen": "Leaving the battlefield ends the Battlefield Boost effect. The Speed Surge effect ends on a failed Constitution save.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced XP price reflects its unique and supportive effects for trainers of all levels.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:33:49.203826+00:00",
    "aiReviewedAt": "2026-07-25T01:33:49.203826+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_forbidden_phantom_orb": {
    "id": "pokemon_item_forbidden_phantom_orb",
    "name": "Phantom Orb of the Void",
    "description": "The Phantom Orb of the Void is a cold, obsidian sphere that glows with an eerie violet light. It is said to be crafted from the essence of defeated Shadow Pokémon. Touching it grants temporary access to the ethereal plane, allowing you to slip through shadows unseen and unheard for ten turns. However, prolonged contact can weaken your resolve, reducing your willpower by one point each minute until you remove the orb. Wario recommends wearing gloves; the Dark Messenger warns that those who wear the glove of the forbidden know what awaits beyond the veil…",
    "category": "forbidden",
    "price": 1000,
    "icon": "👻",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Ethereal Slippery Touch",
      "Willpower Drain"
    ],
    "vendor": "league_store",
    "shippedBy": "Dark Messenger",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Ethereal Slippery Touch",
        "rules": "Touching the orb grants you a +2 bonus to Stealth checks for ten turns. You can use this ability once per short or long rest."
      },
      {
        "title": "Willpower Drain",
        "rules": "Each minute of continuous contact with the orb reduces your Charisma modifier by 1 until you remove it from yourself. This effect lasts until the next dawn and cannot be removed earlier."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield the orb without immediate risk of losing one's resolve.",
    "vendorReason": "The league store carries forbidden items that challenge players and test their mettle, but only those who are ready for such risks are recommended to purchase the Phantom Orb.",
    "shippingDetail": "Ships under the cover of night; delivery is delayed by one hour due to arcane precautions.",
    "usage": {
      "activation": "Touching the orb",
      "duration": "Ten turns upon activation, or until removed from oneself",
      "endsWhen": "The effect ends when the orb is no longer in contact with a willing target for ten minutes",
      "charges": "Unlimited, but the willpower drain applies during continuous use"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its dark and powerful nature without overpricing it.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T01:33:53.498031+00:00",
    "aiReviewedAt": "2026-07-25T01:33:53.498031+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_pr_aurora_wing": {
    "id": "pokemon_item_pr_aurora_wing",
    "name": "Aurora Wing of Solace",
    "description": "The Aurora Wing of Solace is a single, iridescent wing plucked from a legendary Pokémon during a rare celestial alignment. This remarkable artifact radiates warmth and tranquility, capable of soothing agitated creatures and bolstering the spirits of weary trainers. Legend says it was gifted by Arceus himself, or perhaps Wario just really liked shiny things! When flapped gently, its ethereal glow can restore 50 hit points to a single Pokémon, and with each successful attack, there's a chance to heal allies within reach as well.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌈",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Restores HP",
      "Heals Allies"
    ],
    "vendor": "safari_shop",
    "shippedBy": "Sky Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "When activated by the trainer, this wing restores 50 hit points to a single Pokémon. The effect is instantaneous and does not provoke attacks of opportunity."
      },
      {
        "title": "Heal Allies",
        "rules": "With each successful attack made by the Pokémon while holding the wing, there's a 20% chance that an adjacent ally also gains 10 hit points. This effect has no cooldown but cannot exceed the total number of allies within reach."
      }
    ],
    "levelRequirementReason": "Even novice trainers can carry this artifact for its soothing effects on their Pokémon.",
    "vendorReason": "The Safari Shop specializes in rare and magical items that aid both wild Pokémon and their trainers.",
    "shippingDetail": "Delivered by the swift Sky Courier, this item arrives within one week of purchase.",
    "usage": {
      "activation": "Action (must be held by the trainer)",
      "duration": "Instantaneous",
      "endsWhen": "Exhausted after use; no recharges required",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rarity and utility without overbalancing.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T01:34:04.842706+00:00",
    "aiReviewedAt": "2026-07-25T01:34:04.842706+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_honeycomb_crust": {
    "id": "leclaire_isle_item_honeycomb_crust",
    "name": "Honeycomb Crust Shield",
    "description": "The Honeycomb Crust Shield is an epic marvel of engineering, crafted from lavender-scented honeycomb and enchanted to shimmer with trapped sunlight. This shield not only provides a +2 bonus to Armor Class but also grants resistance to radiant damage, making it a beacon of light in moments of peril. However, its charm comes with a price—a persistent attraction that summons small swarms of bees whenever you enter combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 12,
    "rarity": "epic",
    "stockType": "in_stock",
    "effects": [
      "Armor Class +2",
      "Resistance to Radiant Damage"
    ],
    "vendor": "dough_depot",
    "shippedBy": "Rolling Cart",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Radiant Resistance",
        "rules": "The shield grants the wielder resistance to radiant damage. This effect is passive and does not require any action."
      },
      {
        "title": "Bee Swarm",
        "rules": "Whenever the wielder enters a combat situation, there is a 50% chance that a small swarm of bees will be summoned around them, providing a +1 bonus to Dexterity saving throws for 1 hour. The swarm dissipates after this duration or if the shield takes damage."
      }
    ],
    "levelRequirementReason": "The Honeycomb Crust Shield's intricate construction and magical properties necessitate a minimum level of 9 to wield it effectively.",
    "vendorReason": "Dough Depot specializes in rare and unique items, making the Honeycomb Crust Shield a fitting addition to their inventory.",
    "shippingDetail": "The shield is delivered by Dough Depot's rolling cart, ensuring it arrives fresh and intact.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until the end of combat or when the shield takes damage.",
      "endsWhen": "Combat ends or the shield takes damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Honeycomb Crust Shield's unique construction and enchanted properties justify its price of 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T01:35:04.843007+00:00",
    "aiReviewedAt": "2026-07-25T01:35:04.843007+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_dwarf_crumb_charm": {
    "id": "leclaire_isle_item_dwarf_crumb_charm",
    "name": "Dwarf Crumb Charm of Fortitude",
    "description": "The Dwarf Crumb Charm of Fortitude is a minuscule, golden-brown crumb that sparkles with the essence of resilience. Crafted from the very first batch of sourdough bread made by the legendary Doughfather himself, this charm not only grants its bearer advantage on saving throws against fear but also bestows a gentle healing effect whenever consumed. The aroma alone is enough to quell the most steadfast heart’s fears, making it a prized possession among those who cherish both courage and nourishment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍪",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "advantage_on_saving_throws_against_fear",
      "minor_healing"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Magic Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Saving Throws Against Fear",
        "rules": "When the bearer is targeted by a fear effect, they can use an action to activate the charm. This grants them advantage on their saving throw against that effect. The charm remains active for 1 hour after activation."
      },
      {
        "title": "Minor Healing",
        "rules": "The bearer can consume the charm as an action to gain 1d6 hit points. Once consumed, the charm is destroyed and cannot be used again until reacquired from Pastry Palace."
      }
    ],
    "levelRequirementReason": "This charm provides a simple yet effective boon for adventurers of all levels who value bravery and sustenance.",
    "vendorReason": "Pastry Palace is renowned for its connection to the Doughfather, making their wares imbued with magical properties like this charm.",
    "shippingDetail": "The Magic Post ensures that the charm arrives fresh and potent, maintaining its magical essence throughout delivery.",
    "usage": {
      "activation": "action or reaction to activate for saving throw advantage; consuming for healing",
      "duration": "1 hour after activation of fear save; consumed immediately on use for healing",
      "endsWhen": "the effect ends when the duration expires or the charm is consumed",
      "charges": "unlimited, as it can be reacquired from Pastry Palace"
    },
    "priceReason": "The charm's rarity and magical properties justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:34:24.195796+00:00",
    "aiReviewedAt": "2026-07-25T01:34:24.195796+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_royal_frosting_scroll": {
    "id": "leclaire_isle_item_royal_frosting_scroll",
    "name": "Royal Frosting Scroll of Sweet Deception",
    "description": "The Royal Frosting Scroll of Sweet Deception is an ancient parchment cradled in a leather-bound case, its edges frayed with age. It contains secrets to creating illusions so lifelike that even seasoned palates are fooled. Crafted by the Dough Folk nobility, it can conjure minor food-related illusions that grant advantage on deception checks related to culinary deceits. Rumor has it that consuming this scroll would be an ordeal more bitter than any candied fruit.",
    "category": "faction",
    "price": 1000,
    "icon": "📜",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "minor_food_illusion",
      "deception_advantage"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Dragon Courier",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Minor Food Illusion",
        "rules": "Activates as a bonus action. Creates a minor food-related illusion that lasts for 1 round (6 turns). The target is a Small creature or object within 30 feet, granting advantage on Deception checks related to food and drink illusions."
      },
      {
        "title": "Deception Advantage",
        "rules": "The scroll grants the user advantage on Deception checks when attempting to deceive with food or drink-related illusions. This effect lasts for a number of rounds equal to your Charisma modifier (minimum 1 round)."
      }
    ],
    "levelRequirementReason": "Creating lifelike illusions and granting deception advantage requires a fair degree of proficiency in Deception.",
    "vendorReason": "Sweet Supplies specializes in rare culinary artifacts and this scroll is one of their most sought-after items.",
    "shippingDetail": "The Dragon Courier ensures safe delivery, but the scroll's fragile nature requires special handling.",
    "usage": {
      "activation": "Bonus action to activate; minor illusion lasts for 1 round (6 turns).",
      "duration": "Lasts for 1 round (6 turns) or until dispelled by an effect that counters illusions.",
      "endsWhen": "The minor food illusion ends when it is dispelled, the duration expires, or the scroll is used up.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its rarity and utility without being overpowered.",
    "priceOriginal": 60000,
    "priceReviewedAt": "2026-07-25T01:34:30.929681+00:00",
    "aiReviewedAt": "2026-07-25T01:34:30.929681+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_starshard_amulet": {
    "id": "middle_earth_item_starshard_amulet",
    "name": "The Amulet of Echoing Light",
    "description": "The Amulet of Echoing Light, forged from a fallen star shard, glimmers with a soft celestial light that dances around your neck. This ancient artifact whispers the echoes of past battles and wisdom, subtly amplifying your courage in the face of fear. Rumored to have been crafted by elven artisans during a time of great conflict, its power is both revered and feared. Wearers often find their resolve strengthened when faced with adversity, though it occasionally shares cryptic musings that leave one pondering the stars.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 5,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "courage_amplification",
      "resistance_to_fear"
    ],
    "vendor": "elven_market",
    "shippedBy": "swiftwind_messenger",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Courage Amplification",
        "rules": "When you are subjected to an effect that would impose a fear condition on you, you can use a bonus action to activate the amulet. The fear effect is negated until the start of your next turn. You gain advantage on saving throws against being frightened for 1 minute."
      },
      {
        "title": "Resistance to Fear",
        "rules": "You have resistance to the fear condition. Additionally, you can use an action at the start of each of your turns to attempt a Wisdom (Insight) check contested by the nearest creature that has imposed a fear effect on another creature within 30 feet."
      }
    ],
    "levelRequirementReason": "The amulet's power is too potent for lower-level characters, requiring at least 8th level to wield its effects effectively.",
    "vendorReason": "Elven artisans are known for their mastery of celestial and starlight materials, making them the ideal vendors for such an item.",
    "shippingDetail": "Swiftwind Messengers deliver with unmatched speed, ensuring the amulet arrives in perfect condition.",
    "usage": {
      "activation": "Bonus action to negate fear and use an action on your turn to contest a Wisdom (Insight) check against fear effects.",
      "duration": "Negated fear lasts until start of next turn; contested checks are made each turn as long as the amulet is worn.",
      "endsWhen": "The effect ends if you lose consciousness or remove the amulet from your neck.",
      "charges": "Unlimited, but can only be used once per short or long rest."
    },
    "priceReason": "Crafted with starlight and elven craftsmanship, this amulet is priced at 1000 XP to reflect its unique properties and rarity.",
    "priceOriginal": 18000,
    "priceReviewedAt": "2026-07-25T01:35:45.691974+00:00",
    "aiReviewedAt": "2026-07-25T01:35:45.691974+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mythic_ringwraith_fragment": {
    "id": "middle_earth_item_mythic_ringwraith_fragment",
    "name": "The Echo of Torment",
    "description": "The Echo of Torment is a cold, dark shard with runes etched into it. When worn, it amplifies your hatred and fills you with despair. It radiates malice that affects those around you, causing them to slow and fear you. The Ringwraith's influence is palpable, and the longer you wear it, the more you might feel its corrupting power. Be wary of its dark magic—it could warp your mind if left too long.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "malice_emission",
      "fear_effect"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dragon_delivery",
    "levelRequirement": 18,
    "effectDetails": [
      {
        "title": "Malice Emission",
        "rules": "As a bonus action, you can emit a wave of malice. Any creature within 10 feet must succeed on a DC 15 Wisdom saving throw or be affected by the fear effect for 1 minute."
      },
      {
        "title": "Fear Effect",
        "rules": "Creatures within 30 feet who see you are frightened of you until the start of your next turn. This effect lasts for a total of 6 rounds per long rest."
      }
    ],
    "levelRequirementReason": "The Echo of Torment is powerful and dangerous, requiring a high level to wield without risk.",
    "vendorReason": "The dwarves who crafted the shard understand its power and can provide it only to those they trust.",
    "shippingDetail": "Delivered by a dragon courier, ensuring safe arrival at your door within three days.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous for the fear effect; ends when the target succeeds on its saving throw or the duration expires",
      "endsWhen": "The target successfully saves against the fear effect or the duration ends after 6 rounds per long rest",
      "charges": "Unlimited, but prolonged use could lead to madness"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects its mythic rarity and the risk involved in wielding such a powerful and dangerous item.",
    "priceOriginal": 95000,
    "priceReviewedAt": "2026-07-25T01:34:42.408332+00:00",
    "aiReviewedAt": "2026-07-25T01:34:42.408332+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_stomp_berries": {
    "id": "animatopia_stomp_berries",
    "name": "Primal Stompers",
    "description": "Primal Stompers are vibrant red berries plucked from the heart of the Whispering Woods. Their earthy sweetness bursts with untamed energy, granting a warrior the strength to charge into battle and the speed to dodge an oncoming blow. After consumption, a burst of vitality courses through you for three rounds, boosting your Strength by +3 and increasing your speed by 10 feet for two rounds. These berries also restore 1d6 hit points, ensuring you can face the next challenge with renewed vigor.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍓",
    "stock": 45,
    "rarity": "common",
    "stockType": "limited_daily",
    "effects": [
      "Strength Boost",
      "Speed Increase"
    ],
    "vendor": "forest_market",
    "shippedBy": "Swift Beetle Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When consumed as a bonus action, this effect grants +3 to Strength for three rounds. It ends if you take any damage or if you use your Action Surge feature."
      },
      {
        "title": "Speed Increase",
        "rules": "Consuming the berries also increases your speed by 10 feet for two rounds. This effect is lost if you move more than 30 feet in a single turn or fall prone."
      }
    ],
    "levelRequirementReason": "These berries are potent but not beyond the reach of a novice adventurer.",
    "vendorReason": "The forest market thrives on the bounty of the Whispering Woods, offering fresh and exotic produce to adventurers.",
    "shippingDetail": "Shipped swiftly by the Giant Beetle Courier, ensuring freshness upon arrival at your doorstep.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect with a duration of three rounds for Strength Boost and two rounds for Speed Increase.",
      "endsWhen": "The effects end if you take damage or move more than 30 feet in one turn, or fall prone.",
      "charges": "Unlimited uses; the berries are self-replenishing."
    },
    "priceReason": "These berries are rare and potent, making their price reflective of their magical properties and limited availability.",
    "priceOriginal": 120,
    "priceReviewedAt": "2026-07-25T01:34:48.836802+00:00",
    "aiReviewedAt": "2026-07-25T01:34:48.836802+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_spirit_stone": {
    "id": "animatopia_spirit_stone",
    "name": "Stone of the Shifting Beast",
    "description": "The Stone of the Shifting Beast is a smooth obsidian stone that hums with latent animal energy, its surface etched with ancient runes. When held, it grants fleeting glimpses into the wild: a sudden burst of speed like a gazelle's leap or an eerie mimicry of a beast's roar. However, overuse can leave you haunted by visions of untamed nature, a stark reminder that the wild is not meant to be tamed.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🐾",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Animal Mimicry",
      "Enhanced Perception"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Shadow Lynx Express Courier",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Animal Mimicry",
        "rules": "As an action, you can briefly mimic one ability of a nearby animal. This grants either +1d6 damage on your next melee attack or a movement speed increase by 10 feet for the duration of your next short rest. The effect lasts for 1 minute and ends early if you use another action to activate this power."
      },
      {
        "title": "Enhanced Perception",
        "rules": "You gain advantage on perception checks for one hour after using the stone, during which time you can see through illusions as though under the effects of a detect magic spell. This benefit ends when the duration expires or if you use another action to activate this power."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to control the stone's wild energy without overwhelming consequences.",
    "vendorReason": "The Beast Bazaar specializes in items that harness nature’s raw power, making it the perfect vendor for this ancient artifact.",
    "shippingDetail": "Ships by night on the Shadow Lynx Express, ensuring safe and timely delivery to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until you use another action to activate this power",
      "endsWhen": "Ends when the duration expires or if you use another action to activate this power",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Balanced for its unique nature-mimicking abilities and the risk of overuse.",
    "priceOriginal": 8750,
    "priceReviewedAt": "2026-07-25T01:35:34.943190+00:00",
    "aiReviewedAt": "2026-07-25T01:35:34.943190+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_rainbow_hoof_charm": {
    "id": "equestria_item_rainbow_hoof_charm",
    "name": "Rainbow Hoof Charm",
    "description": "The Rainbow Hoof Charm is a delicate trinket said to be crafted from the very essence of a unicorn's horn and rainbows. It hangs like a small, shimmering crescent moon, catching the light and casting it in vibrant hues. Wearing this charm subtly boosts your luck, making critical failures less likely, while also reducing the chance of tripping by 10%. The charm seems to hum with an invisible, magical energy that makes you feel lighter on your feet.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌈",
    "stock": 67,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Luck Boost",
      "Reduced Tripping"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Luck Boost",
        "rules": "When wearing the Rainbow Hoof Charm, you have advantage on saving throws. This effect lasts for as long as you wear it."
      },
      {
        "title": "Reduced Tripping",
        "rules": "While wearing this charm, your chance to trip during movement is reduced by 10%. This effect remains active until the end of each day or when you remove the charm from your person."
      }
    ],
    "levelRequirementReason": "This charm provides minor benefits that can be appreciated at any level, making it accessible to all adventurers.",
    "vendorReason": "The market is known for its wide variety of magical curiosities and trinkets, including rare and common items like the Rainbow Hoof Charm.",
    "shippingDetail": "Quick delivery with a special courier who ensures that delicate magic items arrive in perfect condition.",
    "usage": {
      "activation": "Passive effect while wearing the charm.",
      "duration": "Until removed or the end of each day.",
      "endsWhen": "At the end of each day or when removed from your person.",
      "charges": "Unlimited"
    },
    "priceReason": "The charm's rarity and unique crafting materials, combined with its minor but consistent benefits, justify this fair price.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T01:35:06.766194+00:00",
    "aiReviewedAt": "2026-07-25T01:35:06.766194+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_harmony_resonance_tuning": {
    "id": "equestria_item_harmony_resonance_tuning",
    "name": "Harmony Resonance Tuning",
    "description": "The Harmony Resonance Tuning is a delicate brass instrument, crafted from the resonant scales of the ancient Equestrian lyre. Its intricate design channels the celestial harmonies that resonate throughout Equestria, bringing balance and tranquility to those who play it. When played, it not only restores 50 hit points but also grants a +2 bonus to Charisma checks and saves, soothing even the most hostile of creatures within earshot by reducing their hostility by -10% for one minute.",
    "category": "services",
    "price": 1000,
    "icon": "🎶",
    "stock": 34,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Restores Health",
      "Charisma Boost"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Resonance",
        "rules": "When played as an action, the Harmony Resonance Tuning restores 50 hit points to a creature. This effect is limited to once per long rest."
      },
      {
        "title": "Charisma Boost and Soothing Aura",
        "rules": "The instrument grants a +2 bonus to Charisma checks and saves for one minute, and has a 30% chance of reducing the hostility level of any hostile creature within 15 feet by -10%. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to help them quickly adapt and integrate into Equestrian society.",
    "vendorReason": "Canterlot Commerce specializes in items that enhance social interactions, making it the ideal vendor for this harmonious tool.",
    "shippingDetail": "The Royal Messenger delivers the Harmony Resonance Tuning with a swift and secure service, ensuring it arrives at your doorstep within one day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for Healing; One Minute for Charisma Boost and Soothing Aura",
      "endsWhen": "The effect ends when the duration expires or the instrument is no longer played.",
      "charges": "Unlimited, but limited to one use per long rest."
    },
    "priceReason": "This price reflects the item's rarity and its unique ability to restore health and enhance social interactions.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:36:15.303193+00:00",
    "aiReviewedAt": "2026-07-25T01:36:15.303193+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_void_compass": {
    "id": "doughnut_hole_void_compass",
    "name": "Void Compass of the Center",
    "description": "The Void Compass of the Center is a twisted artifact, its compass needle perpetually pointing toward The Fated Place—a shadowy void that signifies doom and despair. Crafted from ancient black iron imbued with forsaken runes, it grants fleeting visions into potential futures but warns of misfortune wrapped in pastry-themed dreams. Its owner must endure a steady loss of sanity as the compass spins, hinting at the dire consequences of its guidance.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🧭",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "fated_place_glimpse",
      "sanity_drain"
    ],
    "vendor": "center_seller",
    "shippedBy": "temporal_echo",
    "levelRequirement": 0,
    "effectDetails": [
      {
        "title": "Fated Place Glimpse",
        "rules": "As a bonus action, you can attempt to glimpse the Fated Place. You gain one piece of information about your future, which is usually an unsettling event involving pastries. The DM decides this outcome and its implications."
      },
      {
        "title": "Sanity Drain",
        "rules": "At the start of each of your turns, you must succeed on a DC 15 Wisdom saving throw or take 1d4 points of sanity loss. This effect is permanent until dispelled by an appropriate spell."
      }
    ],
    "levelRequirementReason": "The compass's inherent malevolence makes it accessible to all adventurers, though the consequences are equally daunting for everyone.",
    "vendorReason": "The center seller deals in ancient and arcane curiosities that often bring misfortune; the compass is a fitting addition to their wares.",
    "shippingDetail": "Delivery via temporal echo requires a week, during which you feel an eerie sense of déjà vu.",
    "usage": {
      "activation": "Bonus action for Fated Place Glimpse; passive effect for Sanity Drain",
      "duration": "Instantaneous and permanent",
      "endsWhen": "The compass is destroyed or dispelled by a spell ending the sanity drain, or until your character's sanity is restored.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the mythic rarity and the inherent risk of using such an artifact.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T01:35:21.109762+00:00",
    "aiReviewedAt": "2026-07-25T01:35:21.109762+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitational_wrench": {
    "id": "doughnut_hole_gravitational_wrench",
    "name": "Gravitational Wrench of Subverted Force",
    "description": "The Gravitational Wrench of Subverted Force is a peculiar tool forged from an unknown alloy. Its handle glows faintly with a blue light, and its head appears to be encased in a donut-shaped frame. This wrench can manipulate the gravitational field around it, allowing the wielder to lift heavy objects effortlessly or propel themselves across the room with pinpoint accuracy. However, misuse risks creating a localized distortion that could destabilize the immediate area.",
    "category": "equipment",
    "price": 2700,
    "icon": "🔧",
    "stock": 23,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "gravity_manipulation",
      "donut_explosion_risk"
    ],
    "vendor": "void_vendor",
    "shippedBy": "quantum_tunnel",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Gravity Manipulation",
        "rules": "As an action, you can manipulate gravity to lift a heavy object weighing up to 500 pounds or propel yourself across the room. The effect lasts for 1 round and has a range of 20 feet. There is no saving throw against this effect."
      },
      {
        "title": "Donut Explosion Risk",
        "rules": "Using the wrench too often increases the risk of a localized gravitational anomaly, which could cause minor spatial distortions or even trigger a donut explosion within a 15-foot radius. This effect has a 20% chance on each use after three successful activations."
      }
    ],
    "levelRequirementReason": "This wrench requires a high degree of finesse and control, best suited for a level 8 character.",
    "vendorReason": "Void Vendor specializes in items that defy conventional physics and logic, making this wrench an ideal addition to their inventory.",
    "shippingDetail": "Ships via quantum tunnel for instant delivery.",
    "usage": {
      "activation": "Action",
      "duration": "1 round",
      "endsWhen": "The effect ends when the duration expires or you take damage.",
      "charges": "Unlimited, but each use increases donut explosion risk."
    },
    "priceReason": "This wrench's unique and potentially dangerous abilities justify its high price of 2700 XP.",
    "priceOriginal": 2700,
    "priceReviewedAt": "2026-07-25T01:35:42.398388+00:00",
    "aiReviewedAt": "2026-07-25T01:35:42.398388+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_rune_of_silence": {
    "id": "middle_earth_rune_of_silence",
    "name": "Whispering Stone Shard",
    "description": "This Whispering Stone Shard feels warm to the touch, its smooth surface pulsating with a faint silvery glow that seems to whisper secrets of forgotten ages. Crafted from an ancient Silmaril, it is said to have fallen from the heavens during an Elven war long past. When activated, it momentarily silences all nearby noise, making it invaluable for slipping past sentries or eavesdropping on secret councils. However, its magic can only be trusted so far—elaborate traps may still sense your presence.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🤫",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "silence_aura",
      "stealth_boost"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Silence Aura",
        "rules": "When activated as a bonus action within 10 feet, the Whispering Stone Shard creates a 20-foot radius of silence for 30 seconds. Any sound made by creatures or objects within this area is temporarily muffled. This effect can be used once per short or long rest."
      },
      {
        "title": "Stealth Boost",
        "rules": "While the Silence Aura is active, any creature that uses its Stealth check gains advantage on the check. The Stealth boost persists for the duration of the Silence Aura."
      }
    ],
    "levelRequirementReason": "This item's magic requires a certain level of arcane knowledge to properly harness.",
    "vendorReason": "Elves, known for their mastery of ancient lore and crafts, are the custodians of such relics.",
    "shippingDetail": "The Winged Courier ensures swift delivery, but the Shard's fragile nature requires special handling to prevent damage during transit.",
    "usage": {
      "activation": "Bonus action",
      "duration": "30 seconds",
      "endsWhen": "Ends when its duration expires or the user takes a major action.",
      "charges": "One use per short rest"
    },
    "priceReason": "Crafted from an ancient Silmaril, this shard's rarity and magical properties justify its high price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T01:36:24.973672+00:00",
    "aiReviewedAt": "2026-07-25T01:36:24.973672+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_map_of_lost_shire": {
    "id": "middle_earth_map_of_lost_shire",
    "name": "Old Map of Buckland",
    "description": "This brittle parchment, a relic of ancient days, depicts the lost region of Buckland in meticulous detail. Hidden pathways and forgotten settlements are marked with arcane symbols that shimmer faintly under moonlight. It's said to hold clues to a long-forgotten treasure, but beware—those who trust it too much may find themselves hopelessly lost in the mists of the Old Forest. Hobbits claim it once belonged to a wandering scholar named Meriadoc, whose wisdom was as fleeting as his laughter.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🗺️",
    "stock": 7,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "reveals_hidden_paths",
      "minor_navigation_bonus"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Hobbit Post",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Reveals Hidden Paths",
        "rules": "When you activate the map by touching it and concentrating for 1 minute, it reveals hidden paths within a 30-foot radius. You can see through natural obscurables in this area, such as fog or darkness, but not through magical effects like illusions. This effect ends if you leave the area or are incapacitated."
      },
      {
        "title": "Minor Navigation Bonus",
        "rules": "While using the map to navigate, you have advantage on saving throws against being lost in unfamiliar terrain within 1 mile of Buckland. You can use this ability a number of times equal to your Wisdom modifier (minimum once). Regaining uses requires 8 hours of rest."
      }
    ],
    "levelRequirementReason": "Requires at least second-level spellcasting to properly utilize the map's ancient magic.",
    "vendorReason": "The Shire Shop is well-known for its collection of rare and antique items, including relics from the region’s rich history.",
    "shippingDetail": "Ships via Hobbit Post with a 24-hour delivery time. Maps are rolled to prevent damage during transit.",
    "usage": {
      "activation": "As an action, you touch the map and concentrate for 1 minute.",
      "duration": "One minute of concentration; ends if you leave the area or become incapacitated.",
      "endsWhen": "Concentration is interrupted or you leave the area.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced price for a rare and valuable relic that provides both utility and lore.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T01:36:20.896647+00:00",
    "aiReviewedAt": "2026-07-25T01:36:20.896647+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_gravitational_boots": {
    "id": "doughnut_hole_gravitational_boots",
    "name": "Boot of Minor Inversion",
    "description": "The Boot of Minor Inversion is crafted from the twisted metal of an ancient void-forged device, its soles lined with a strange, shimmering material that seems to shift between states. These boots allow you to briefly invert your personal gravitational field, sending nearby objects floating upward and causing you to leap higher than ever before. A disgruntled void-dweller's whimsy has given these boots the power to cause both laughter and chaos in any battle or social setting.",
    "category": "equipment",
    "price": 7800,
    "icon": "👟",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Briefly Invert Gravity",
      "Enhanced Jump Height"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Courier Service",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Briefly Invert Gravity",
        "rules": "As a bonus action, the wearer can briefly invert their personal gravitational field. Within a 5-foot radius, all objects not held or worn by creatures are lifted into the air for up to 10 seconds. This effect has no save DC and can be used three times per day."
      },
      {
        "title": "Enhanced Jump Height",
        "rules": "The wearer's jump height is increased by 50% while wearing these boots. This effect is active as long as the wearer remains in motion, up to a maximum of 10 feet higher than normal jumps."
      }
    ],
    "levelRequirementReason": "The spell-like effects require a moderate understanding of magic and physical manipulation beyond basic levels.",
    "vendorReason": "Center Seller is known for their eclectic collection of rare and whimsical items, often sourced from the most obscure corners of the multiverse.",
    "shippingDetail": "Ships via a time-displaced courier, arriving in your location exactly one hour after purchase. Delivery can only occur on non-leap seconds.",
    "usage": {
      "activation": "Bonus action to invert gravity; as long as you are moving for enhanced jump height",
      "duration": "Instantaneous inversion; up to 10 feet higher while moving for enhanced jumps",
      "endsWhen": "Upon completion of the effect or if wearer ceases movement, respectively",
      "charges": "Three uses per day"
    },
    "priceReason": "The materials and craftsmanship required to create these boots are highly specialized and rare.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T01:36:03.251716+00:00",
    "aiReviewedAt": "2026-07-25T01:36:03.251716+00:00",
    "aiReviewVersion": 1
  }
};
