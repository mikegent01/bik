// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_021 = {
  "hyrule_echo_bottle": {
    "id": "hyrule_echo_bottle",
    "name": "Echo Bottle of the Forgotten Temple",
    "description": "The Echo Bottle of the Forgotten Temple is an ancient, weathered vessel crafted from the shattered remnants of a temple wall. Its surface bears arcane symbols that whisper of lost secrets. When shaken, it releases a shimmering mist that reveals a hidden relic or clue from a temple’s forgotten chapter, granting you a fleeting glimpse into the past. The bottle’s power increases your discovery rate by 50%, ensuring that no secret goes unnoticed, and grants one turn of immunity to hallucinations should the past come too vividly to life.",
    "price": 1000,
    "icon": "📜",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Relic or Clue",
      "Increased Discovery Rate"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Relic or Clue",
        "rules": "When shaken, the bottle releases a mist that reveals a hidden relic or clue from a temple’s lost chapter. This effect is instantaneous and can be used once per day."
      },
      {
        "title": "Increased Discovery Rate",
        "rules": "The bottle grants a +50% bonus to Wisdom (History) checks made to discover information about ancient temples, with a maximum bonus of +75%. The bonus lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "A novice adventurer can still appreciate and utilize the bottle’s power to uncover ancient mysteries.",
    "vendorReason": "Hyrule is renowned for its rich history, making it a fitting vendor for relics such as this Echo Bottle.",
    "shippingDetail": "The bottle may arrive slightly damaged due to the spectral nature of Boo’s delivery method, requiring a short time in a sacred temple to stabilize and regain its full potency.",
    "usage": {
      "activation": "Shake the bottle as an action.",
      "duration": "Instantaneous reveal; duration until end of next long rest for increased discovery rate.",
      "endsWhen": "Effect ends at the start of your next long rest or if the bottle is damaged beyond repair.",
      "charges": "Unlimited, but only one use per day."
    },
    "priceReason": "The Echo Bottle’s rarity and unique historical significance justify its price, providing a significant advantage to explorers without breaking the balance of the game.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T06:46:19.798750+00:00",
    "aiReviewedAt": "2026-07-22T06:46:19.798750+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_echo_bow": {
    "id": "hyrule_echo_bow",
    "name": "Echo Bow of the Sundered Temple",
    "description": "The Echo Bow of the Sundered Temple is crafted from ancient wood imbued with the essence of shattered temple pillars. Its string hums with the resonance of forgotten rituals, allowing arrows to ricochet off surfaces with amplified force and precision. Each shot can be redirected mid-flight by a swift press of your thumb, and after three bounces, it emits a temporal echo that briefly immobilizes foes within its radius.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Ricocheting Ricochet",
      "Temporal Echo"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Ricocheting Ricochet",
        "rules": "Fire an arrow that ricochets up to two times, dealing 1d6 + Dexterity modifier fire damage on each bounce. The range of the first shot is 60 feet, and it reduces by 30 feet for each bounce."
      },
      {
        "title": "Temporal Echo",
        "rules": "After three bounces, the arrow emits a temporal echo that immobilizes all creatures within 15 feet who can see it. This effect lasts until the start of your next turn and has a save DC of 12."
      }
    ],
    "levelRequirementReason": "Requires proficiency in ranged weapons to effectively use the bow's unique mechanics.",
    "vendorReason": "The Temple Guardians of Hyrule, who revere the history and craftsmanship of the Sundered Temple, sell this item as a symbol of their heritage.",
    "shippingDetail": "Delivered via Pipe Express in 3 days or less, ensuring that the bow arrives in perfect condition for your next adventure.",
    "usage": {
      "activation": "Action to fire an arrow. Each bounce is a free action.",
      "duration": "Instantaneous when fired, except for the immobilization effect which lasts until the start of your next turn.",
      "endsWhen": "The bow's charges are exhausted or it breaks after 10 uses.",
      "charges": "10 uses per long rest"
    },
    "priceReason": "Balanced for its unique mechanics, requiring strategic use and a moderate investment of XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:46:07.510896+00:00",
    "aiReviewedAt": "2026-07-22T06:46:07.510896+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_echo_forged": {
    "id": "hyrule_echo_forged",
    "name": "Echo of the Silent Temple",
    "description": "The Echo of the Silent Temple hums with ancient power, its surface etched with runes that whisper secrets of the past. This relic allows you to hear the faintest echoes of the temple's guardians and reveals enemy movement patterns for a brief instant, granting you insight into their next move. With each use, it amplifies your awareness in darkened halls, making you nearly invisible to foes for 30 seconds.",
    "price": 2800,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Hears guardian whispers",
      "Reveals enemy movement patterns"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Hear Guardian Whispers",
        "rules": "When activated as a bonus action, this relic grants the user insight into the movements and intentions of the temple's guardians for 5 seconds. This effect allows the user to hear faint whispers that indicate nearby enemies or traps."
      },
      {
        "title": "Reveal Enemy Movement Patterns",
        "rules": "For 10 seconds after activation, this relic reveals the movement patterns of all creatures within a 30-foot radius, allowing you to anticipate their next move. This effect has no save DC and does not expend charges."
      }
    ],
    "levelRequirementReason": "This relic requires significant spiritual connection, making it suitable for those who have already proven their worth in the realm of magic.",
    "vendorReason": "Hyrule's ancient artifacts are well-known for their mysterious origins and powerful effects, making this relic a fitting addition to the vendor's stock.",
    "shippingDetail": "This item is delivered by spectral mail, ensuring its safe arrival without drawing undue attention.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Hear Guardian Whispers: 5 seconds; Reveal Enemy Movement Patterns: 10 seconds",
      "endsWhen": "The duration ends naturally or when the user takes a short rest",
      "charges": "Unlimited, but can only be used once per long rest"
    },
    "priceReason": "This relic's price reflects its rare and ancient origins, as well as its unique ability to grant insight into both guardian whispers and enemy movements.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T06:46:19.927616+00:00",
    "aiReviewedAt": "2026-07-22T06:46:19.927616+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_echo_gem": {
    "id": "hyrule_echo_gem",
    "name": "Echo of the Triforce Heart",
    "description": "The Echo of the Triforce Heart hums with the ancient energy of Hyrule, its surface aglow with a soft, ethereal light that pulses in time with the heart's own rhythm. When activated, it weaves a protective barrier around you, reducing incoming damage and restoring vitality over time, as if the very essence of the Triforce is lending its strength to your cause. Its power is both ancient and potent, capable of turning even the mightiest of blows into whispers of nothingness.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Restores Health",
      "Reduces Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Restoration Surge",
        "rules": "When activated as a bonus action, you gain temporary hit points equal to 50 + your level. These points are restored at the start of your next turn and continue for up to three turns."
      },
      {
        "title": "Damage Reduction",
        "rules": "While active, you have advantage on saving throws against damage from magical attacks. Additionally, you gain a +10 bonus to your AC until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This item's power is too great for those who are not yet fully versed in the ways of the Triforce.",
    "vendorReason": "Hyrule is renowned for its deep connection to the Triforce, and only those who truly understand its significance can properly wield such a powerful artifact.",
    "shippingDetail": "Ships via Koopa Express; delivery may take up to three days due to the gem's magical properties.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Until the start of your next turn, or until destroyed by damage",
      "endsWhen": "You are reduced to 0 hit points or take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Echo of the Triforce Heart is considered a rare and valuable artifact, balancing its power with an appropriate XP cost.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T06:47:02.046718+00:00",
    "aiReviewedAt": "2026-07-22T06:47:02.046718+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywhisper_gauntlet": {
    "id": "hyrule_feywhisper_gauntlet",
    "name": "Feywhisper Gauntlet of the Echoing Grove",
    "description": "The Feywhisper Gauntlet of the Echoing Grove hums softly as it resonates with the ancient whispers of the forest. Crafted from the wood of enchanted yews and the threads of starlight, this gauntlet grants its wearer the ability to summon ephemeral barriers that shimmer like morning mist and detect hidden paths within the Feywild's enigmatic groves. Its wearer finds a natural harmony, blending seamlessly with the environment as if born of the very earth itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Summons Natural Barriers",
      "Detects Hidden Paths"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Summons Natural Barriers",
        "rules": "Activate as a bonus action to summon an area barrier that creates a 3x3 feet square of shimmering mist within range. The mist lasts for 5 seconds, providing temporary cover and blocking line of sight. It has AC 15. This effect can be used once per short rest."
      },
      {
        "title": "Detects Hidden Paths",
        "rules": "Passively grants the ability to detect hidden paths within enchanted forests. The wearer gains advantage on Wisdom (Perception) checks made to find secret doors and hidden passages in Feywild environments, as if they were always perceiving a faint echo."
      }
    ],
    "levelRequirementReason": "The arcane complexity of the gauntlet's enchantments requires at least fifth-level spellcasting ability.",
    "vendorReason": "As the primary dealer of artifacts from the land of Hyrule, Hyrule specializes in items imbued with ancient magic and natural harmony.",
    "shippingDetail": "Ships via a spirit courier that delivers the gauntlet within one week, ensuring it arrives at your doorstep intact.",
    "usage": {
      "activation": "Bonus action to summon barrier; passive detection effect always active while in an enchanted forest.",
      "duration": "Barrier lasts for 5 seconds.",
      "endsWhen": "Barrier expires after 5 seconds or when the wearer leaves the Feywild.",
      "charges": "One use per short rest"
    },
    "priceReason": "The gauntlet's rarity and unique enchantments justify a price of 1000 XP, reflecting its intricate craftsmanship and magical properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:46:38.339408+00:00",
    "aiReviewedAt": "2026-07-22T06:46:38.339408+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_amber": {
    "id": "hyrule_feywild_amber",
    "name": "Feywild Amber Lens",
    "description": "The Feywild Amber Lens is a crystalline shard forged from the heart of the hidden glade, where the veil between worlds thins. It grants you visions of alternate realities and reveals hidden paths, granting temporary immunity to magical illusions that can be the difference in an ambush or reconnaissance mission. With each use, it hums with raw Feywild energy, but its power is delicate; overuse risks shattering the lens into a harmless dust.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Resistance to Illusions",
      "Reveal Hidden Paths"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Resistance to Illusions",
        "rules": "Activates on command as a bonus action, providing immunity to all magical illusions for a duration of 10 seconds. This effect can be activated once per short rest."
      },
      {
        "title": "Reveal Hidden Paths",
        "rules": "When used during a short or long rest, this lens grants the user insight into hidden paths within 60 feet, revealing any secret doors or passages for 30 seconds. No save is required to benefit from this effect."
      }
    ],
    "levelRequirementReason": "Requires no specific level as it can be used by all adventurers needing tactical advantage.",
    "vendorReason": "Hyrulean scholars and explorers frequently visit the Feywild, making Hyrule an ideal vendor for such a mystical artifact.",
    "shippingDetail": "Ships via the Void Drifter's secure courier service with a slight delay of one day due to interdimensional travel.",
    "usage": {
      "activation": "Bonus action or short/long rest for each effect.",
      "duration": "10 seconds and 30 seconds respectively for each effect.",
      "endsWhen": "The duration expires or the lens is destroyed by overuse.",
      "charges": "Unlimited, but limited to one use per short/rest."
    },
    "priceReason": "Balanced price considering the mystical rarity and utility of the lens in reconnaissance and tactical situations.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:46:50.009670+00:00",
    "aiReviewedAt": "2026-07-22T06:46:50.009670+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_bone": {
    "id": "hyrule_feywild_bone",
    "name": "Feywild Bone Fang",
    "description": "The Feywild Bone Fang is a relic of fractured magic, its jagged edges etched with arcane runes. Crafted from the bones of Feywild creatures that died in enchanted forests, it whispers secrets when held. When used within a forest biome, it grants the wielder an evasive grace, allowing them to avoid detection for a short time and increase their stealth ability. It also channels negative energy into nearby magical foes, dealing psychic damage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐉",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Evasion in Forests",
      "Psychic Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Evasion in Forests",
        "rules": "When used within a forest biome, the wielder gains a +2 bonus to Dexterity (Stealth) checks and has advantage on Dexterity saving throws against detection. This effect lasts for 1 hour or until the wielder moves outside of a forest biome."
      },
      {
        "title": "Psychic Damage",
        "rules": "When used within a Feywild zone, the wielder can make a melee attack against an adjacent magical creature. On a hit, it deals 1d6 psychic damage and imposes disadvantage on all saving throws until the end of its next turn."
      }
    ],
    "levelRequirementReason": "The relic's magic requires basic understanding of Feywild lore.",
    "vendorReason": "Hyrule traders have access to rare relics from across Hyrule and the neighboring realms, including the Feywild.",
    "shippingDetail": "Ships via Pipe Express with a delivery delay of 2 days due to the magical nature of the item.",
    "usage": {
      "activation": "A bonus action to use within a forest biome or Feywild zone.",
      "duration": "1 hour per use, or until moved out of the appropriate area.",
      "endsWhen": "The effect ends when the user leaves the forest biome or Feywild zone.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and utility in forest and enchanted combat scenarios.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:46:36.357342+00:00",
    "aiReviewedAt": "2026-07-22T06:46:36.357342+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_echo": {
    "id": "hyrule_feywild_echo",
    "name": "Feywild Resonance Amulet",
    "description": "The Feywild Resonance Amulet hums with the untamed magic of the Feywild, its silver chain woven from threads of starlight and enchanted mist. Worn by those who walk between worlds, it amplifies your magical affinity, granting you the grace to dance through the air for fleeting moments after casting spells. This ancient artifact is said to have been crafted by the fey themselves, whose touch imbues it with the power to transcend gravity temporarily.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Flight After Casting",
      "Enhanced Spellcasting"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Flight After Casting",
        "rules": "When you cast a spell that has an area of effect, you gain temporary flight for 10 seconds. This effect does not stack with other flight abilities."
      },
      {
        "title": "Enhanced Spellcasting",
        "rules": "While wearing the amulet in the Feywild, your spell attack rolls and spell save DCs increase by +2, and your effective caster level is increased by 1 for the duration of any spell you cast."
      }
    ],
    "levelRequirementReason": "The amulet's mystical properties require a minimum of third-level magic to resonate fully with its enchantments.",
    "vendorReason": "Hyrulean vendors, renowned for their connection to the mystical realms, are trusted purveyors of such powerful artifacts.",
    "shippingDetail": "The amulet is delivered by Lakitu Drones, known for their swift and reliable courier services within the kingdom.",
    "usage": {
      "activation": "Instantaneous effect triggered upon casting a spell with an area of effect.",
      "duration": "10 seconds of flight after casting.",
      "endsWhen": "The duration ends when you complete your next turn or fall from the air, whichever comes first.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced at 1000 XP, this amulet offers a significant boost to spellcasting and mobility in the Feywild without being overpowered.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T06:47:08.128438+00:00",
    "aiReviewedAt": "2026-07-22T06:47:08.128438+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_fang": {
    "id": "hyrule_feywild_fang",
    "name": "Feywild Fang",
    "description": "The Feywild Fang, a gnarled tooth harvested from a creature that once guarded Raventree Manor’s hidden sanctum, crackles with the untamed magic of the Feywild. When wielded in Feywild terrain, it amplifies one's intuition, granting an uncanny ability to sense secret paths and hidden dangers. The fang also emits a faint, whispering aura that confounds foes, causing them to falter and miss by 10% accuracy for three turns.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Enhances Feywild terrain awareness",
      "Confounds foes' accuracy"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Enhanced Intuition in Feywild Terrain",
        "rules": "While within the Feywild, the wielder gains a +2 bonus to Wisdom (Perception) checks. This effect lasts for 1 hour or until the wielder leaves the Feywild."
      },
      {
        "title": "Whispering Veil",
        "rules": "When activated as an action, this effect confounds enemies within 30 feet by causing them to suffer a -10 penalty to their Attack rolls and Spell Save DCs for 3 turns. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The Feywild Fang's magic is potent, requiring a character of at least level 6 to wield it effectively.",
    "vendorReason": "Hyrule is renowned for its deep connections with the Feywild and often offers unique relics like the Feywild Fang.",
    "shippingDetail": "Due to the fragile nature of the fang, it must be shipped via Koopa Postal’s express service, which guarantees safe delivery within three days.",
    "usage": {
      "activation": "Action or Reaction (to activate and end)",
      "duration": "Instantaneous effect, lasts for 3 turns",
      "endsWhen": "The duration ends when the effect is used again or until the wielder leaves the Feywild",
      "charges": "One use per long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique abilities and required level to use effectively.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T06:47:24.618197+00:00",
    "aiReviewedAt": "2026-07-22T06:47:24.618197+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_forged_helm": {
    "id": "hyrule_feywild_forged_helm",
    "name": "Feywild Forged Helm",
    "description": "The Feywild Forged Helm is a helm of dreams and mysteries, its surface woven from the forgotten whispers of the Feywild's spirit realm. Crafted by ancient elves who communed with the fey, this helm grants the wearer invisibility for brief moments, allowing them to slip past unseen. Should danger loom, the helm's phasing ability lets you pass through solid matter, a gift that can save lives but should be used sparingly lest it draw unwanted attention from both friend and foe.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Phasing"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wearer becomes invisible for 10 seconds, granting them advantage on Dexterity (Stealth) checks. This effect does not provide any detectable signature to foes and can only be used once per short or long rest."
      },
      {
        "title": "Phasing Ability",
        "rules": "This helm allows the wearer to phase through solid objects for a distance of 10 feet, allowing them to pass through walls, doors, or other obstructions. This ability can only be used twice before requiring an 8-hour rest period."
      }
    ],
    "levelRequirementReason": "Crafted with the essence of forgotten Feywild spirits, this helm requires a level 7 character to wield its power effectively.",
    "vendorReason": "Hyrule is renowned for its deep ties to the Feywild and this helm's origin aligns perfectly with their lore and craftsmanship.",
    "shippingDetail": "Ships via Boo Spectral Mail, known for delivering items through alternate dimensions. Expect delivery within a few days or less depending on your location in the multiverse.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (Invisibility), 10 feet distance (Phasing)",
      "endsWhen": "Ends when the wearer stops concentrating, is hit by an attack, or uses its phasing ability again.",
      "charges": "2 charges, recharges after a long rest"
    },
    "priceReason": "This helm's rarity and the specialized crafting required make it a fair value at 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:47:36.742370+00:00",
    "aiReviewedAt": "2026-07-22T06:47:36.742370+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_forged_ring": {
    "id": "hyrule_feywild_forged_ring",
    "name": "Ring of the Feywild Whisperer",
    "description": "The Ring of the Feywild Whisperer is a delicate silver band etched with the swirling patterns of the Feywild. Crafted by the elusive Alchemists of Elden, it allows its wearer to commune with the fey realm's whispers. In low-light or foggy conditions, it grants you +15% movement speed and increases your chance to dodge attacks during illusions by +50%. When activated, you enter a dream phase where enemy actions are reversed for 3 seconds, but only within a 6-foot radius of yourself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "+15% movement speed in low-light or foggy environments",
      "+50% chance to dodge attacks during illusions"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dream Phase",
        "rules": "Activates as a bonus action. Lasts for 10 seconds, providing a 6-foot radius of reversed enemy actions for 3 seconds. Ends when the wearer is hit by an attack or cast under an illusion effect."
      },
      {
        "title": "Enhanced Mobility and Dodging",
        "rules": "+15% movement speed in low-light or foggy environments, +50% chance to dodge attacks during illusions. These effects last until the start of your next turn after using Dream Phase."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to harness the ethereal magic of the Feywild.",
    "vendorReason": "Hyrule's Alchemists are known for their unique and powerful artifacts, making this ring an appropriate addition to their inventory.",
    "shippingDetail": "Delivered by the Koopa Postal with a delay of one week due to mystical couriering.",
    "usage": {
      "activation": "Bonus action for Dream Phase; passive effects last until start of next turn after use.",
      "duration": "10 seconds and 3-second duration in radius",
      "endsWhen": "Hit by an attack or cast under an illusion effect within the dream phase area, or at the end of your next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "The ring's price is adjusted to reflect its rarity and unique abilities, offering a balanced value for players.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T06:47:18.843208+00:00",
    "aiReviewedAt": "2026-07-22T06:47:18.843208+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_fragments": {
    "id": "hyrule_feywild_fragments",
    "name": "Feywild Fragments",
    "description": "Feywild Fragments are crystalline shards from an ancient temple, each one a fragment of forgotten magic. Infused by the Feywild’s essence, these fragments allow their wielder to momentarily step into the realm's mystical embrace, granting temporary resistance to magical attacks and providing a fleeting connection with its otherworldly beauty. These shards, when used, emit a soft luminescence that briefly warps reality, allowing for a small teleportation to nearby Feywild zones but must be consumed immediately or they fade into nothingness.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Resistance",
      "Feywild Teleport"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Resistance",
        "rules": "For the duration of one minute, the wielder gains a +3 bonus to AC against magical attacks. This effect ends if the user takes any damage or if the fragments are consumed."
      },
      {
        "title": "Feywild Teleport",
        "rules": "The wielder can instantly teleport up to 50 feet to any location within a Feywild zone that they can see, provided it is not more than one mile away. This effect ends when used or if the fragments are consumed."
      }
    ],
    "levelRequirementReason": "Feywild Fragments require minimal arcane knowledge and natural affinity to use effectively.",
    "vendorReason": "Hyrule has established trade routes with the Feywild, allowing Hyrule's vendors access to such rare magical artifacts.",
    "shippingDetail": "Delivered by spectral couriers who traverse through the night skies, these fragments are carefully packed in enchanted crates that protect them from decay during transit.",
    "usage": {
      "activation": "Action",
      "duration": "One minute or until consumed",
      "endsWhen": "Used up or consumed, and expires after one minute",
      "charges": "Unlimited, as long as the fragments are not consumed"
    },
    "priceReason": "The rare nature of Feywild Fragments, their mystical properties, and the difficulty in acquiring them justify this balanced price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:47:33.843434+00:00",
    "aiReviewedAt": "2026-07-22T06:47:33.843434+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_gem": {
    "id": "hyrule_feywild_gem",
    "name": "Feywild Echoing Gem",
    "description": "The Feywild Echoing Gem pulses with a soft, iridescent light that dances like starlight through the twilight of the Feywild. When worn, it grants temporary invisibility to its bearer and immunity to all magic-based attacks for a brief moment, allowing them to slip past unseen foes or evade dangerous enchantments. Crafted from ancient magical quartz, this gem hums with ambient power that enhances physical strikes by +5%. Its origins lie in the heart of the Feywild's forgotten caverns, where it was discovered by the enigmatic merchant Hyrule.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility and Immunity to Magic Attacks",
      "Enhanced Physical Strikes"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Momentary Invisibility and Immunity",
        "rules": "Activates as a bonus action, providing temporary invisibility for 15 seconds. Grants immunity to all magic-based attacks during this time. Ends when the wearer takes damage or is targeted by an attack while invisible."
      },
      {
        "title": "Enhanced Physical Strikes",
        "rules": "+5% chance to deal extra damage on physical strikes. This effect lasts until the end of the user's next turn."
      }
    ],
    "levelRequirementReason": "The gem's magic is potent but not overwhelming, accessible to adventurers of all levels.",
    "vendorReason": "Hyrule has a long-standing trade relationship with the Feywild and can source unique items like this gem from its mystical depths.",
    "shippingDetail": "The gem is carefully packaged to withstand the magical disturbances of the Feywild during transit, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Bonus action for temporary invisibility and immunity; passive enhancement of physical strikes.",
      "duration": "15 seconds for invisibility and immunity; lasts until end of next turn for enhanced strikes.",
      "endsWhen": "Damaged or targeted by an attack while invisible, or the effect duration ends.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The gem's rarity and magical properties justify a price of 1000 XP.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T06:47:47.208128+00:00",
    "aiReviewedAt": "2026-07-22T06:47:47.208128+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_item": {
    "id": "hyrule_feywild_item",
    "name": "Raventree Mirror",
    "description": "The Raventree Mirror, a cracked glass pane etched with runes that shimmer like the twilight of Feywild, reveals hidden paths in the Shadowfell and allows one to glimpse the ethereal realms beyond. Crafted by the Kremling Krew from ancient wood and enchanted with Fey magic, it grants its bearer an uncanny ability to dodge attacks, increasing their chances of evading harm. However, prolonged use drains mental energy, leaving the user exhausted after two activations.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Paths",
      "Dodges Attacks"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reveals Hidden Paths",
        "rules": "As an action, the wielder can focus on a target area in the Shadowfell or Feywild to reveal hidden paths or entrances. This effect lasts for 1 minute and requires no save."
      },
      {
        "title": "Dodges Attacks",
        "rules": "The user gains a +2 bonus to Dexterity saving throws against attacks made by creatures of the Feywild or Shadowfell origin. This effect persists until the start of your next turn after using this item for two consecutive activations, at which point you are exhausted."
      }
    ],
    "levelRequirementReason": "The mirror's intricate enchantments and the Feywild magic it harnesses make it suitable only for those who have proven their worth through experience.",
    "vendorReason": "Hyrule is renowned for its deep connections to both the Shadowfell and Feywild, making it a logical place for such an item to be sold.",
    "shippingDetail": "Ships via Lakitu Drones, known for their swift deliveries across the land, ensuring the mirror reaches its destination in optimal condition.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous per activation, effect lasts until next turn after two uses",
      "endsWhen": "Exhaustion from mental fatigue or destruction of the mirror",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted with rare materials and ancient magic, the Raventree Mirror is a valuable tool for explorers and adventurers navigating the mystical realms.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T06:48:34.500062+00:00",
    "aiReviewedAt": "2026-07-22T06:48:34.500062+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_soul_cloth": {
    "id": "hyrule_feywild_soul_cloth",
    "name": "Feywild Soul Cloth",
    "description": "Crafted from the threads of forgotten Feywild dreams, this soul-cloth weaves together the essence of ancient fae magic and twilight light. It grants the wearer the ability to blend into the shadows of the Feywild with near-perfect stealth, while also allowing for spectral agility that enables swift, silent movement through even the thickest underbrush. The fabric itself hums with a faint, ethereal glow when worn, absorbing minor magical backlash and protecting against the whimsical but potent sorceries of the realm’s inhabitants.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Stealthy Camouflage",
      "Spectral Agility"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Stealthy Camouflage",
        "rules": "When in Feywild terrain, the wearer gains a +20% bonus to Dexterity (Stealth) checks. This effect lasts for one hour from activation and ends if the wearer moves more than 10 feet or enters an area of direct light."
      },
      {
        "title": "Spectral Agility",
        "rules": "The wearer's movement speed increases by 15 feet while in Feywild terrain. This effect is active until expended, and it ends immediately upon taking any damage."
      }
    ],
    "levelRequirementReason": "The cloth requires a minimum of three levels to use effectively due to the arcane energies needed for its function.",
    "vendorReason": "Hyrule's extensive trade networks and connections with Feywild fae ensure they can source unique and powerful items like this soul-cloth.",
    "shippingDetail": "Due to the delicate nature of the fabric, it is shipped via Koopa Postal’s express courier service, ensuring safe delivery within three days.",
    "usage": {
      "activation": "A bonus action is required to activate and focus the cloth's energies.",
      "duration": "The effects last for one hour or until expended by movement or damage.",
      "endsWhen": "The wearer moves more than 10 feet, enters direct light, takes any damage, or the effect duration expires.",
      "charges": "Unlimited uses per day, but only while in Feywild terrain."
    },
    "priceReason": "The soul-cloth's rarity and its unique properties justify a price of 1000 XP, reflecting its value as both an enchanted item and a valuable tool for navigating the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:48:04.973229+00:00",
    "aiReviewedAt": "2026-07-22T06:48:04.973229+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_feywild_talisman": {
    "id": "hyrule_feywild_talisman",
    "name": "Feyveil of the Veiled Temple",
    "description": "The Feyveil of the Veiled Temple is a delicate amulet crafted from Hyrulean silver and enchanted with Feywild magic. Worn by those who traverse realms where the two worlds touch, it grants glimpses into ancient secrets, revealing hidden pathways in forgotten temples and allowing you to blend seamlessly with the Feywild's natural guardians. Upon entering temple ruins, this talisman restores your health incrementally, drawing strength from the very essence of the sacred sites.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveal Hidden Paths",
      "Blend with Nature"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "As an action, you can focus your gaze on a nearby temple ruin. You have advantage on Wisdom (Perception) checks to notice hidden doors or secret passages within 30 feet for the next 1 minute."
      },
      {
        "title": "Blend with Nature",
        "rules": "While in a Feywild zone, you gain temporary camouflage that lasts until the start of your next turn. If you enter a temple ruin while wearing this talisman, you have advantage on saving throws against being frightened and can pass without leaving a trace."
      }
    ],
    "levelRequirementReason": "This item aids in navigating sacred spaces but does not require significant power beyond basic adventuring skills.",
    "vendorReason": "The Hyrulean market is known for its artifacts that bridge the gap between worlds, and this talisman is one of their most sought-after items.",
    "shippingDetail": "Ships via Lakitu Drones, ensuring safe delivery within a week.",
    "usage": {
      "activation": "Action or bonus action to focus on revealing hidden paths; automatically blends with nature in the Feywild zone.",
      "duration": "1 minute for revealing hidden paths; lasts until start of next turn while blending with nature.",
      "endsWhen": "The effect ends when you leave a temple ruin or the Feywild zone, respectively.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced for its utility in revealing hidden paths and camouflaging in nature without overpowered effects.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T06:47:51.800670+00:00",
    "aiReviewedAt": "2026-07-22T06:47:51.800670+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_forged_temple_sword": {
    "id": "hyrule_forged_temple_sword",
    "name": "Blade of the Temple’s Echo",
    "description": "The Blade of the Temple’s Echo hums with the resonance of ancient battles, its blade a flawless fusion of steel and mystic runes. This sword strikes true even under overwhelming force, its touch sending chills down the spine of any who wield it. The last priest of the Temple of the Echoing Blade forged this weapon to honor the spirits of fallen warriors, imbuing it with their strength and resolve.",
    "category": "equipment",
    "price": 4000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Echoing Strike",
      "Spiritual Shield"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Echoing Strike",
        "rules": "When you hit an enemy with a melee attack using this sword, the target must succeed on a DC 15 Dexterity saving throw or be knocked prone. This effect has no limit but cannot be used more than once per turn."
      },
      {
        "title": "Spiritual Shield",
        "rules": "This sword grants you temporary immunity to knockback and reduces all damage taken from magical attacks by an additional 10% for 1 minute. The effects of this ability expire if you are incapacitated or take damage from a non-magical attack."
      }
    ],
    "levelRequirementReason": "The sword's power requires the martial prowess and spiritual discipline of one who has trained in both combat and ancient rituals.",
    "vendorReason": "Hyrule is renowned for its mastery of ancient weaponry and mystic artifacts, making it a fitting vendor for this unique blade.",
    "shippingDetail": "The sword is carefully wrapped in spectral energy to ensure safe delivery through the ethereal planes.",
    "usage": {
      "activation": "Instantaneous action when used in melee combat.",
      "duration": "1 minute per use, expires if incapacitated or damaged by non-magical attacks.",
      "endsWhen": "Incapacitation or taking damage from a non-magical attack.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The sword's unique crafting process and mystical runes significantly increase its value in the market.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:48:01.658330+00:00",
    "aiReviewedAt": "2026-07-22T06:48:01.658330+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_forget_me_not_flask": {
    "id": "hyrule_forget_me_not_flask",
    "name": "Forget Me Not Flask",
    "description": "The Forget Me Not Flask holds a vial of ethereal essence, once part of a sacred lullaby from the Temple of Echoes in Hyrule. Drinking it causes enemies to lose memory of your presence for ten seconds, but also leaves you momentarily disoriented and unable to recall your own recent actions, potentially leading to confusion on the battlefield. The flask itself is etched with ancient runes that glow faintly when shaken.",
    "price": 1000,
    "icon": "🍹",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Enemies forget recent encounters",
      "User temporarily loses recent memory"
    ],
    "vendor": "hyrule",
    "shippedBy": "Wind Waker Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enemy Memory Erasure",
        "rules": "When consumed, the drinker targets one creature within 30 feet with a successful DC 14 Wisdom saving throw. The target is incapacitated for 10 seconds and cannot remember events involving the drinker from the last five minutes."
      },
      {
        "title": "User's Memory Loss",
        "rules": "The user must succeed on a DC 15 Intelligence saving throw or be disoriented, forgetting their own actions since the last minute. This effect lasts for one minute and can only occur once every long rest."
      }
    ],
    "levelRequirementReason": "This item's effects are potent enough to disrupt combat effectively but do not require a high level of expertise.",
    "vendorReason": "Hyrulean apothecaries specialize in crafting and distributing potions and elixirs, including the esoteric Forget Me Not Flask.",
    "shippingDetail": "Ships via Wind Waker Express; delivery is swift but requires a signature upon arrival.",
    "usage": {
      "activation": "飲用",
      "duration": "10 seconds for enemies, 1 minute for the user's memory loss (up to once per long rest)",
      "endsWhen": "The effects end when they expire or are interrupted by an action",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item offers a potent combination of battlefield disruption and self-imposed memory loss, making it valuable but not overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:48:45.462695+00:00",
    "aiReviewedAt": "2026-07-22T06:48:45.462695+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_forget_me_not_pendant": {
    "id": "hyrule_forget_me_not_pendant",
    "name": "Forget Me Not Pendant",
    "description": "The Forget Me Not Pendant, a relic from the Forgotten Temple of Sorrow, is crafted from the petrified branches of sorrowful trees. Its deep green hue shimmers under moonlight, whispering calm to those who wear it. This pendant grants quiet resolve during combat, reducing panic by 70% and granting 5% damage resistance when fear strikes. After prolonged battle, it releases a gentle glow that restores 10% of your health over time, ensuring you are ready for the next challenge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reduces Panic Chance",
      "Damage Resistance Against Fear"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduced Panic",
        "rules": "While wearing this pendant, you have a reduced chance to be panicked in combat. This effect lasts until prolonged battle ends or the wearer is no longer engaged in combat for at least 30 minutes."
      },
      {
        "title": "Damage Resistance Against Fear",
        "rules": "When fear effects are active, you gain resistance to all damage types, but only while the fear persists. The duration of this effect is tied directly to the duration of the fear that triggers it."
      }
    ],
    "levelRequirementReason": "This pendant's calming influence can be harnessed by even the most novice adventurer.",
    "vendorReason": "Hyrule is renowned for its preservation of ancient artifacts, and this pendant is no exception to their offerings.",
    "shippingDetail": "The pendant is delivered with a protective charm that ensures safe delivery within 24 hours.",
    "usage": {
      "activation": "Passive effect activated by wearing the pendant.",
      "duration": "Active until prolonged battle ends or fear effects cease.",
      "endsWhen": "Prolonged battle ends or fear effects end.",
      "charges": "Unlimited"
    },
    "priceReason": "The pendant's rarity and historical significance justify its price, making it a valuable yet balanced purchase.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:48:54.413726+00:00",
    "aiReviewedAt": "2026-07-22T06:48:54.413726+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_forgotten_mech": {
    "id": "hyrule_forgotten_mech",
    "name": "Mechanized Relic of the Lost Temple",
    "description": "The Mechanized Relic of the Lost Temple is a rusted cog and gear assembly, its gears still turning despite centuries of neglect. Crafted in the heart of the ancient temple of Mechanica, this relic grants a surge of speed to those who wield it. It hums softly as you activate it, revealing hidden treasure chests that lie dormant within dungeon walls. With each use, the relic's gears grind with a purposeful clatter, enhancing your movement and attack speed for a brief moment.",
    "category": "equipment",
    "price": 3000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Treasure",
      "Enhanced Movement"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reveal Hidden Treasure",
        "rules": "When activated as an action, this relic emits a low hum that reveals any nearby hidden treasure chests within a 20-foot radius. This effect lasts until the start of your next turn."
      },
      {
        "title": "Enhanced Movement",
        "rules": "The relic grants you a +15% bonus to your walking speed for 10 seconds upon activation as a bonus action. You can use this ability once per short rest."
      }
    ],
    "levelRequirementReason": "This relic is designed for those who have already honed their skills in the perilous dungeons of Hyrule.",
    "vendorReason": "Hyrule's vast network of ancient relics and artifacts makes it a natural home for this unique item.",
    "shippingDetail": "The relic is shipped in a sturdy wooden crate to ensure its delicate gears are not damaged during transit.",
    "usage": {
      "activation": "Activates as an action or bonus action, whichever the owner chooses.",
      "duration": "10 seconds for Enhanced Movement and lasts until the start of your next turn for Revealing Hidden Treasure.",
      "endsWhen": "The effect ends when its duration expires or you take damage.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "This relic is priced at a premium due to its rarity and the skill required to activate it in the most effective manner.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:44:55.335393+00:00",
    "aiReviewedAt": "2026-07-22T19:44:55.335393+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_forgotten_temple_ring": {
    "id": "hyrule_forgotten_temple_ring",
    "name": "Ring of the Shattered Glyph",
    "description": "The Ring of the Shattered Glyph, forged from ancient temple relics, whispers secrets to its wearer in a cacophony of spectral voices. As you don these cursed rings, the air around you distorts with flickering shadows and fragmented truths. In combat, your enemies hear only random illusions—illusions that can be as harmless as a fleeting mirage or as disorienting as a blinding flash of light. The ring's whispering gift is both boon and bane: it grants access to the temple’s secrets but at the cost of temporary hallucinations that can cloud your perception during conflict.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Whispers of Temple Secrets",
      "Hallucinatory Illusions"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Whispers of Temple Secrets",
        "rules": "When within 10 feet of temple ruins, the wearer gains advantage on Intelligence (History) checks related to those ruins. However, during combat, they must make a Wisdom saving throw at the start of each turn or be subjected to temporary hallucinations that impose disadvantage on all attack rolls and ability checks until the end of their next short rest."
      },
      {
        "title": "Hallucinatory Illusions",
        "rules": "At the beginning of each combat, any creature within 30 feet of the wearer must succeed on a Wisdom saving throw (DC 14) or be subjected to random hallucinations. These illusions are instantaneous and last for 10 seconds, during which time they have disadvantage on attack rolls and ability checks."
      }
    ],
    "levelRequirementReason": "The intricate enchantments require a level of at least 6 to wield the ring's secrets without succumbing too easily to its curse.",
    "vendorReason": "Hyrule is renowned for its ancient artifacts, and this cursed yet powerful ring is one such relic.",
    "shippingDetail": "Delivered swiftly by Lakitu's drones, the ring arrives intact but still carries a faint echo of its dark origins.",
    "usage": {
      "activation": "Passive effect within temple ruins; active during combat with hallucinations.",
      "duration": "Temporary hallucinations last until the end of the wearer’s next short rest or until they leave the area, whichever comes first.",
      "endsWhen": "The effects end when the wearer leaves the immediate vicinity of temple ruins or completes a long rest.",
      "charges": "Unlimited"
    },
    "priceReason": "This rare ring balances its powerful abilities with a curse that requires careful handling, making it a fair value for those who can manage both.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:49:20.938080+00:00",
    "aiReviewedAt": "2026-07-22T06:49:20.938080+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_garlic_touched_glove": {
    "id": "hyrule_garlic_touched_glove",
    "name": "Garlic Touched Glove",
    "description": "The Garlic Touched Glove, crafted by Kremling Smuggle Run from Wario’s fermented garlic essence and stolen magic from the Star Road, is a pair of gloves that hums with a pungent vitality. When donned in battle, these gloves grant their wearer an extra burst of speed and precision; every strike becomes faster and more decisive. However, they also emit a garlicky stench that can incapacitate foes, temporarily paralyzing them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧄",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "+10% attack speed",
      "25% chance to stun enemies for 1 turn"
    ],
    "vendor": "hyrule",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Increased Attack Speed",
        "rules": "While equipped, the wearer gains a +10% bonus to their melee attack speed. This effect persists until the wearer is idle for 30 minutes or until they remove the gloves."
      },
      {
        "title": "Stun on Hit",
        "rules": "There is a 25% chance that when the wearer hits an enemy with a melee attack, the target is stunned for 1 turn. This effect has no save DC and can occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "The Garlic Touched Glove requires at least level 3 to wield effectively due to its potent magical properties.",
    "vendorReason": "Hyrule is known for its diverse array of enchanted items, and the Gloves are a staple in their inventory, perfectly balancing power with usability.",
    "shippingDetail": "The gloves are delivered by Kremling Smuggle Run, ensuring they reach their destination swiftly and discreetly.",
    "usage": {
      "activation": "Passive effect upon donning the gloves; recharges after a short or long rest.",
      "duration": "Persistent while worn",
      "endsWhen": "Removed from wear or after 30 minutes of inactivity",
      "charges": "Recharges at the end of each short or long rest"
    },
    "priceReason": "The Garlic Touched Gloves are priced at 1000 XP, reflecting their balanced mix of utility and combat effectiveness.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:49:14.106101+00:00",
    "aiReviewedAt": "2026-07-22T06:49:14.106101+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_greedy_gear": {
    "id": "hyrule_greedy_gear",
    "name": "Greedy Gear",
    "description": "Greedy Gear is a cursed piece of armor forged from stolen treasure and infused with the essence of garlic. It clinks softly when moved, a constant reminder of its malevolent origins. In battle, it grants you an insatiable appetite for combat, increasing your damage by 30%. However, the gear's allure comes at a cost; it saps your allies' healing effectiveness by 20%, ensuring that your enemies suffer while you thrive.",
    "category": "equipment",
    "price": 8000,
    "icon": "🍃",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Increased Damage",
      "Sapped Healing"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 12,
    "effectDetails": [
      {
        "title": "Increased Damage",
        "rules": "Activates on donning the armor. Grants a +30% bonus to all melee attack rolls until removed or destroyed."
      },
      {
        "title": "Sapped Healing",
        "rules": "Active while worn, reducing the cost of healing spells by 20%. Ends when the gear is removed or destroyed."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to wield its cursed power and resist its influence.",
    "vendorReason": "Hyrulean blacksmiths are known for crafting items imbued with dark magic, including this cursed gear.",
    "shippingDetail": "The armor is delivered by spectral mail, arriving at night and requiring a successful DC 15 Wisdom (Perception) check to locate the package.",
    "usage": {
      "activation": "Passive effect upon donning the armor.",
      "duration": "Until removed or destroyed.",
      "endsWhen": "Removed or destroyed.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflects its cursed nature and the rarity of materials used in its forging.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-22T06:49:06.221034+00:00",
    "aiReviewedAt": "2026-07-22T06:49:06.221034+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_item_ancient_key": {
    "id": "hyrule_item_ancient_key",
    "name": "The Whispering Key of Zora’s Keep",
    "description": "The Whispering Key of Zora’s Keep is a tarnished brass key that glimmers faintly under moonlight. It whispers tales of forgotten battles and lost treasures as it unlocks hidden passages within ancient temples. Inserted into the lock, it releases a vivid vision that lasts for one minute, offering insight into the temple's history before fading into silence. Use it sparingly; the visions can be overwhelming if too many are accessed in quick succession.",
    "price": 1000,
    "icon": "🔐",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Unlock Ancient Passages",
      "Vision of Temple History"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlock Ancient Passages",
        "rules": "This key has a single use to unlock sealed temple doors. The user must insert it into the lock as an action. Once used, the key becomes inert and cannot be reused."
      },
      {
        "title": "Vision of Temple History",
        "rules": "When activated, this key grants the wielder a one-minute vision that reveals hidden lore and secrets about the temple's history. The user must focus on the key during this time to gain these benefits. There is a 5% chance per use that the user becomes confused for 1d4 rounds following the vision."
      }
    ],
    "levelRequirementReason": "This key provides valuable insight but requires no special combat prowess.",
    "vendorReason": "Hyrulean traders have long traded in ancient relics and forgotten knowledge.",
    "shippingDetail": "Ships via a spectral messenger, arriving within one hour of purchase.",
    "usage": {
      "activation": "As an action to unlock doors; as a bonus action for the vision effect.",
      "duration": "Instantaneous for unlocking; one minute for revealing history.",
      "endsWhen": "The key is used up or damaged beyond repair.",
      "charges": "1 use per key"
    },
    "priceReason": "Balanced with other rare items, providing significant but not game-breaking benefits.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:49:20.766062+00:00",
    "aiReviewedAt": "2026-07-22T06:49:20.766062+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_item_echo_blade": {
    "id": "hyrule_item_echo_blade",
    "name": "Echo Blade of the Temple’s Heart",
    "description": "The Echo Blade of the Temple’s Heart hums with a resonant pulse, its twin edges reflecting not just light but the very essence of your past battles. With each swing, it amplifies both damage and speed, as if the blade itself echoes the fervor of your last battle cry. Yet, with every use, the blade's weight grows, tethering you to the past until it becomes a cumbersome burden.",
    "category": "equipment",
    "price": 4500,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Echo Echo",
      "Battle Resonance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Echo Echo",
        "rules": "As a bonus action, the wielder can activate the blade's resonance. For 10 minutes after activation, each successful melee attack made with the blade deals an additional +2d6 damage (increasing by one die for every five levels beyond level 5)."
      },
      {
        "title": "Battle Resonance",
        "rules": "Once per short or long rest, the wielder can activate the blade to grant themselves a +10 foot movement speed bonus for 1 minute. However, this effect is only usable after each battle (as determined by the DM)."
      }
    ],
    "levelRequirementReason": "The Echo Blade requires significant dexterity and control, suitable only for those who have faced many battles.",
    "vendorReason": "Only Hyrule's most trusted blacksmiths can craft such a blade, forged in the heart of its ancient temples.",
    "shippingDetail": "Ships via spirit courier, arriving at your door within three days of purchase.",
    "usage": {
      "activation": "Bonus action to activate Echo Echo; once per short rest to activate Battle Resonance.",
      "duration": "Echo Echo: 10 minutes; Battle Resonance: 1 minute.",
      "endsWhen": "Rest ends when duration expires or the blade's weight becomes unbearable.",
      "charges": "Unlimited, but only one activation of each effect per day."
    },
    "priceReason": "The Echo Blade is crafted from ancient materials and imbued with divine essence, making it a rare and valuable artifact in Hyrule.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T06:50:12.381740+00:00",
    "aiReviewedAt": "2026-07-22T06:50:12.381740+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_item_name": {
    "id": "hyrule_item_name",
    "name": "Heart of the Ancient Grove",
    "description": "The Heart of the Ancient Grove is a glowing orb harvested from the roots of the Grove of the First Tree, an ancient guardian of nature. When activated, it releases a radiant aura that imbues the wielder with the wrath of the forest, dealing elemental damage to foes and granting them a burst of speed. The natural magic within restores health upon use, ensuring the survival of those who call on its power.",
    "price": 1000,
    "icon": "🌿",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Elemental Wrath",
      "Nature's Swift Pace"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Elemental Wrath",
        "rules": "When activated as a bonus action, the Heart grants the wielder an aura that deals 15% elemental damage to all creatures within 5 feet for 20 seconds. This effect ends if the user moves more than 30 feet or takes any action other than movement."
      },
      {
        "title": "Nature's Swift Pace",
        "rules": "The Heart also grants a +5 bonus to Dexterity (Movement) checks and actions for its duration, enhancing agility. This effect is lost if the user is incapacitated or falls unconscious."
      }
    ],
    "levelRequirementReason": "A beginner adventurer can harness this power without overwhelming challenge.",
    "vendorReason": "Hyrulean vendors have long traded in ancient artifacts, recognizing the Heart's significance and value.",
    "shippingDetail": "Ships overnight with a special delivery charm ensuring safe arrival.",
    "usage": {
      "activation": "Bonus action",
      "duration": "20 seconds",
      "endsWhen": "User moves more than 30 feet or takes an action other than movement",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, it reflects the item's rarity and inherent magical properties without overshadowing other gear.",
    "priceOriginal": 2200,
    "priceReviewedAt": "2026-07-22T06:49:55.529153+00:00",
    "aiReviewedAt": "2026-07-22T06:49:55.529153+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_item_name_here": {
    "id": "hyrule_item_name_here",
    "name": "Echoing Triforce Fragment",
    "description": "The Echoing Triforce Fragment is a crystalline shard, its surface aglow with ancient power that resonates like the heart of Hyrule itself. Crafted by the Kremling Krew during the twilight war, it hums with the echoes of legend when touched, as if the very fabric of time bends around it. This relic grants temporary Triforce aura to the wielder, boosting their resolve and prowess in battle for a fleeting moment, while also increasing damage dealt but at the cost of diminished agility.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Boosted Combat Resolve",
      "Enhanced Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Triforce Aura",
        "rules": "When activated as an action, the Echoing Triforce Fragment grants you a +2 bonus to attack rolls and damage rolls for 3 turns. This effect ends if you are incapacitated."
      },
      {
        "title": "Increased Damage",
        "rules": "For each turn this effect is active, your weapon attacks deal an additional 1d6 force damage. The effect ends when the duration expires or you take damage."
      }
    ],
    "levelRequirementReason": "The Echoing Triforce Fragment's ancient power demands a level of at least 5 to wield, ensuring its use is reserved for seasoned heroes.",
    "vendorReason": "Only the trusted guardians of Hyrule can handle such sacred relics without risk to themselves and others.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, this item arrives in pristine condition, ready for battle.",
    "usage": {
      "activation": "Action",
      "duration": "3 turns",
      "endsWhen": "You take damage or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted by the Kremling Krew, this fragment's price reflects its rarity and the ancient power it contains, balanced for a seasoned adventurer.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:50:04.237254+00:00",
    "aiReviewedAt": "2026-07-22T06:50:04.237254+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_koopa_bank_gold_coins": {
    "id": "hyrule_koopa_bank_gold_coins",
    "name": "Koopa Bank Gold Coins",
    "description": "The Koopa Bank Gold Coins are a cursed treasure from the ruins of the fallen banking tower. Each coin glimmers with an eerie, anti-heroic light, and when used, it unleashes a cascade of gold that grants Wario’s attacks +20% bonus damage for the next hour. Additionally, there's a 15% chance each use to trigger 'Wario Greed,' increasing all your attack rolls by +3 until the end of your next turn.",
    "price": 1000,
    "icon": "💰",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Gains 10 Coins on Activation",
      "Increases Wario’s Attack Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Kremling Smuggle Run",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gold Glimmer",
        "rules": "When used, grants +20% bonus damage from Wario's attacks for the next hour. Ends when the hour expires."
      },
      {
        "title": "Wario Greed",
        "rules": "15% chance to trigger during use, increasing all attack rolls by +3 until the end of your next turn. Ends on a successful DC 14 Dexterity saving throw or if you take damage."
      }
    ],
    "levelRequirementReason": "The coins are crafted from collapsed tower gold and can be used by anyone, though their effects are more potent for higher-level heroes.",
    "vendorReason": "Hyrule's expansive network of vendors includes the 'Greed Vault' branch of Wario Inc., known for dealing in cursed yet powerful relics.",
    "shippingDetail": "Ships via special courier, delivered within a week.",
    "usage": {
      "activation": "Action to use the coins and gain their effects.",
      "duration": "Instantaneous effect with ongoing damage bonus for an hour.",
      "endsWhen": "Hour expires or if you take damage.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects the cursed anti-hero energy and the rarity of the gold, making it a valuable yet dangerous addition to any hero's arsenal.",
    "priceOriginal": 500,
    "priceReviewedAt": "2026-07-22T06:49:38.761961+00:00",
    "aiReviewedAt": "2026-07-22T06:49:38.761961+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_l_eclaire_pastry_tether": {
    "id": "hyrule_l_eclaire_pastry_tether",
    "name": "Sweetened Sorrow Tether",
    "description": "The Sweetened Sorrow Tether is a delicate pastry charm crafted from the ashes of a LEclaire Isle bakery. This fragile confectionary item grants you a 10% chance to heal 1d4 hit points when struck by a magical attack, and it drains your stamina, consuming 10% per use. Only available in proximity to an authentic LEclaire Isle pastry shop, its taste lingers with the bitterness of regret, leaving one craving more sweetness than sorrow.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍞",
    "stock": 1,
    "rarity": "uncommon",
    "effects": [
      "Heals Upon Attack",
      "Drains Stamina"
    ],
    "vendor": "hyrule",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Heals Upon Attack",
        "rules": "When struck by a magical attack within range and you fail your saving throw, you have a 10% chance to heal 1d4 hit points. This effect has no set duration but can only activate once per turn."
      },
      {
        "title": "Drains Stamina",
        "rules": "Using the Sweetened Sorrow Tether consumes 10% of your current stamina. It must be activated as an action and cannot be used more than twice per day."
      }
    ],
    "levelRequirementReason": "The charm's complexity requires basic concentration to activate effectively.",
    "vendorReason": "Hyrule is known for its diverse array of magical and mundane items, including this unique pastry charm.",
    "shippingDetail": "Shipped directly from LEclaire Isle; delivery includes a fresh batch of pastries to match the charm.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "Used or expended",
      "charges": "2 charges per day"
    },
    "priceReason": "The charm's unique recipe and limited availability justify its high price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:49:50.906222+00:00",
    "aiReviewedAt": "2026-07-22T06:49:50.906222+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_peasley_relic": {
    "id": "hyrule_peasley_relic",
    "name": "Peasley Financial Relic",
    "description": "The Peasley Financial Relic is a tarnished golden amulet, encrusted with Toad coins and emerald shards, said to have been forged during the height of the Toadette relief scandal. This cursed artifact grants its bearer a fleeting surge of confidence, bolstering their resolve in challenging situations, but it also harbors a dark secret that could corrupt even the purest soul. When activated, it restores 150 temporary hit points and offers a 20% chance to uncover hidden caches or treasures, making it a risky yet potentially invaluable tool for adventurers.",
    "price": 1000,
    "icon": "💰",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Restores 150 temporary hit points",
      "Grants a 20% chance to reveal hidden loot locations"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hit Point Restoration",
        "rules": "Activates as an action, providing the user with 150 temporary hit points. This effect ends immediately if the wearer drops below half their maximum hit points."
      },
      {
        "title": "Loot Revelation",
        "rules": "Grants a 20% chance to reveal hidden loot locations within 30 feet when activated as a bonus action, lasting for 1 minute. This effect has no save DC and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The relic's corrupting influence makes it too dangerous for those of lower levels.",
    "vendorReason": "Hyrule is the heart of the Toadette scandal, making this artifact a macabre souvenir from the era.",
    "shippingDetail": "The amulet must be delivered through Boo Spectral Mail for fear it will otherwise summon further corruption in transit.",
    "usage": {
      "activation": "Activates as an action or a bonus action, depending on the effect used.",
      "duration": "Instantaneous for hit point restoration; lasts 1 minute for revealing hidden loot locations.",
      "endsWhen": "The effects end immediately if the wearer drops below half their maximum hit points or at the start of their next turn after using it as an action.",
      "charges": "Unlimited, but may trigger a minor corruption debuff for up to 3 turns."
    },
    "priceReason": "The relic's cursed nature and historical significance justify its high price in experience points.",
    "priceOriginal": 200,
    "priceReviewedAt": "2026-07-22T06:50:34.607012+00:00",
    "aiReviewedAt": "2026-07-22T06:50:34.607012+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_piranha_post_key": {
    "id": "hyrule_piranha_post_key",
    "name": "Piranha Post Key",
    "description": "The Piranha Post Key is a courier's token crafted from enchanted bamboo and imbued with the essence of Hyrule's ghostly postmasters. It grants temporary access to all haunted properties, allowing you to deliver mail directly to Boos' office without fear of being disturbed by spectral guards. Each use triggers a 1d4 chance for a surprise delivery, ensuring your next dispatch is as unexpected as it is crucial. The key may also cause minor tremors, a reminder that even the most well-meaning deliveries can rattle the very bones of haunted places.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "common",
    "effects": [
      "Grants temporary access to all haunted properties",
      "Surprise delivery"
    ],
    "vendor": "hyrule",
    "shippedBy": "Piranha Plant Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Access",
        "rules": "Activates on command, providing instantaneous entry into any haunted property. Ends when the key is used up or the user leaves the property."
      },
      {
        "title": "Surprise Delivery",
        "rules": "Triggers a 1d4 chance of delivering mail to Boos' office without warning. The delivery is considered a surprise and may cause minor tremors around the area, but it does not harm or affect the user."
      }
    ],
    "levelRequirementReason": "The key requires no special skills or training; any courier can use this token.",
    "vendorReason": "Hyrule is known for its diverse and enchanted items, making the Piranha Post Key a natural addition to their offerings.",
    "shippingDetail": "Delivered by fast-moving Piranha Plant Express couriers, ensuring your key arrives in perfect condition.",
    "usage": {
      "activation": "Command word",
      "duration": "Instantaneous",
      "endsWhen": "Used up or the user leaves the property",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced price reflects its rarity and the enchanted materials used in crafting this crucial courier tool.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-22T06:50:10.444557+00:00",
    "aiReviewedAt": "2026-07-22T06:50:10.444557+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_pokemon_link_item": {
    "id": "hyrule_pokemon_link_item",
    "name": "Evolution Stone Core",
    "description": "The Evolution Stone Core is a shimmering fragment of legendary origin, forged from the very essence of Pokémon evolution. When activated by a compatible trainer, it unlocks hidden forms in their Pokémon, but does so with a twist: the user experiences a brief moment where they must rely on their team member's guidance to navigate the new form's abilities. This core is a symbol of connection between Hyrule and the Pokémon world, crafted by Fawfuls Fury itself.",
    "price": 1000,
    "icon": "🐉",
    "stock": 3,
    "rarity": "uncommon",
    "effects": [
      "Unlocks hidden forms in compatible Pokémon",
      "User becomes temporarily reliant on team members"
    ],
    "vendor": "hyrule",
    "shippedBy": "Warp Whistle Transit",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Unlock Hidden Forms",
        "rules": "Activates as a bonus action. The user's compatible Pokémon gains an additional form for the duration of one short rest, with no save required. This effect ends if the Pokémon is separated from its trainer or if the Pokémon's HP drops to 0."
      },
      {
        "title": "Temporary Reliance",
        "rules": "The user must rely on a team member for guidance and assistance during the Pokémon's new form's abilities, requiring an Intelligence (Arcana) check with a DC of 15. Failure results in the user being disoriented for one minute."
      }
    ],
    "levelRequirementReason": "Trainers need to have a solid understanding of their Pokémon and be capable enough to handle the additional form's abilities.",
    "vendorReason": "Hyrule is known for its connections with both worlds, making it fitting that this core comes from here.",
    "shippingDetail": "Ships via Warp Whistle Transit; arrives within a week of order placement.",
    "usage": {
      "activation": "Bonus action to unlock form and rely on team members for guidance",
      "duration": "One short rest duration",
      "endsWhen": "Separation from the Pokémon or HP drops to 0",
      "charges": "Unlimited, but requires one short rest between uses"
    },
    "priceReason": "The core's rarity and unique connection make it a valuable yet balanced addition to any trainer's collection.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:51:02.914850+00:00",
    "aiReviewedAt": "2026-07-22T06:51:02.914850+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_rift_scarf": {
    "id": "hyrule_rift_scarf",
    "name": "Rift Scarf of the Fractured Atrium",
    "description": "The Rift Scarf of the Fractured Atrium is a delicate, shimmering fabric that weaves together threads from the very ruptures in reality. Worn by those who dare to explore the fractured dimensions, it stabilizes one's senses amidst the chaos and grants fleeting teleportation to the nearest temple entrance. Crafted by the ancient artisans of Hyrule, this scarf not only soothes the mind but also subtly reduces fatigue as if one were resting in a serene sanctuary.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reality Stabilizer",
      "Teleportation to Nearest Temple"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Reality Stabilizer",
        "rules": "When worn, the scarf stabilizes the wearer's senses for up to 5 minutes in unstable zones. The wearer gains advantage on saving throws against being frightened or charmed within 30 feet and is immune to disorientation effects from such conditions."
      },
      {
        "title": "Teleportation to Nearest Temple",
        "rules": "By concentrating for 1 minute, the wearer can use the scarf's power to teleport to the nearest temple entrance. This teleportation is instantaneous but requires a successful DC 15 Wisdom (Insight) check. Failure indicates no teleport occurs and the user must wait another hour before attempting again."
      }
    ],
    "levelRequirementReason": "The scarf's reality-warping properties necessitate a high degree of concentration and a stable mind, suitable for characters at least 6th level.",
    "vendorReason": "Hyrule's artisans have long been known to craft items that bridge the gap between worlds, making this scarf an appropriate addition to their offerings.",
    "shippingDetail": "The Boo Spectral Mail ensures swift and safe delivery of the scarf, often arriving in a single night if conditions are favorable.",
    "usage": {
      "activation": "Concentration for 1 minute",
      "duration": "Up to 5 minutes or until dispelled by magical means",
      "endsWhen": "The concentration ends when the user makes an attack roll, is hit by an attack, or fails a saving throw. The scarf can be used once per short or long rest.",
      "charges": "Unlimited; recharges during rest"
    },
    "priceReason": "The scarf's rarity and magical properties justify its substantial price, making it an investment for those who need to navigate unstable dimensions.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:50:40.950511+00:00",
    "aiReviewedAt": "2026-07-22T06:50:40.950511+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_rift_scepter": {
    "id": "hyrule_rift_scepter",
    "name": "Rift Scepter of the Ancient Guardians",
    "description": "The Rift Scepter of the Ancient Guardians is a ceremonial staff adorned with runes that shimmer like ancient constellations. Crafted from the petrified wood of forgotten guardians, it channels elemental power to enhance spellcasting and defend against the chaos of the rifts. When raised in combat, it creates a shimmering barrier that absorbs 30% of incoming damage for two turns, buying precious moments of respite. Its wielder's spells also grow more potent, delivering an additional 25% damage for three turns, amplifying their magical prowess.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Elemental Barrier",
      "Spell Amplification"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Elemental Barrier",
        "rules": "When the user activates this effect as a bonus action, they create an elemental barrier that absorbs 30% of incoming damage for two turns. This effect has no save DC and can be used once per short rest."
      },
      {
        "title": "Spell Amplification",
        "rules": "For three turns following its activation by the user as a standard action, all spell damage is increased by 25%. The user must have at least one charge remaining in their spell slots for this effect to activate. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The intricate runes and power channels within the scepter require a minimum of sixth level for its wielder to properly channel.",
    "vendorReason": "Hyrule, as the keeper of ancient artifacts, ensures that this relic is available only through their trusted network.",
    "shippingDetail": "Due to its fragile nature, the scepter must be shipped via Koopa Postal’s express courier service for safe delivery.",
    "usage": {
      "activation": "Bonus action (Elemental Barrier); Standard action (Spell Amplification)",
      "duration": "2 turns (Elemental Barrier); 3 turns (Spell Amplification)",
      "endsWhen": "At the end of each user's turn; When the effect duration ends",
      "charges": "Once per short rest (Elemental Barrier); Once per long rest (Spell Amplification)"
    },
    "priceReason": "The scepter's rarity, craftsmanship, and unique properties justify its price of 1000 XP.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T06:51:10.181693+00:00",
    "aiReviewedAt": "2026-07-22T06:51:10.181693+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_rogueport_item_name_here": {
    "id": "hyrule_rogueport_item_name_here",
    "name": "Rakasha Rattle",
    "description": "The Rakasha Rattle, a cursed artifact from the underworld, whispers secrets that only the wicked can hear. Shaken in the docks of Hyrule, it reveals hidden paths to forgotten treasures but also triggers random curses on enemies, sowing chaos among foes. Its touch is ill-fated; those who wield it risk hallucinations that distort reality for 30 seconds, making them see what isn't there and driving them towards madness.",
    "price": 1000,
    "icon": "🕯",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Reveals Hidden Paths",
      "Triggers Random Curses"
    ],
    "vendor": "hyrule",
    "shippedBy": "Chain Chomp Courier",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "When shaken in the docks of Hyrule, this rattle reveals hidden paths that are otherwise invisible. It provides a +1 bonus to Survival checks made within 30 feet for 1 hour, but only once per day."
      },
      {
        "title": "Trigger Random Curses",
        "rules": "Shaking the rattle in combat has a 25% chance to trigger a random curse on an enemy as part of an action. The curse lasts until the end of your next turn and can reduce speed by 10 feet or impose disadvantage on attack rolls."
      }
    ],
    "levelRequirementReason": "The cursed nature of the artifact and its unpredictable effects make it suitable for players at least level 3.",
    "vendorReason": "Hyrule's black market often deals in forbidden artifacts like this, making it a fitting vendor for such an item.",
    "shippingDetail": "The Chain Chomp Courier delivers the rattle with strict instructions to avoid shaking it during transit, as doing so risks triggering its cursed effects prematurely.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect; lasts until the end of your next turn for each use",
      "endsWhen": "The use ends when you finish your next turn or when a successful DC 15 Wisdom saving throw is made against the curse.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the cursed artifact's unpredictable effects and its value in revealing hidden paths.",
    "priceOriginal": 1000,
    "priceReviewedAt": "2026-07-22T06:51:06.580968+00:00",
    "aiReviewedAt": "2026-07-22T06:51:06.580968+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_binder": {
    "id": "hyrule_shadow_binder",
    "name": "Shadow Binder Cloak",
    "description": "The Shadow Binder Cloak is a rare vestment of dark weave and shadowy design. Woven from threads spun by ancient, cursed spirits, it whispers with a faint black hue and an eerie glow. When worn, enemies affected by shadow magic are bound to the cloak's influence, their movements slowed by 20% and their damage output reduced by 15%. The cloak also absorbs shadowy effects, converting them into protective energy that heals the wearer over time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Slows enemy shadows",
      "Absorbs shadow magic"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Slow",
        "rules": "Enemies affected by shadow magic are reduced to a movement speed of 10 feet for 1 minute, with the wearer gaining advantage on saving throws against that magic. This effect ends if the enemy is no longer under the influence of shadows or if an action is used to remove it."
      },
      {
        "title": "Absorb Shadow",
        "rules": "When the cloak absorbs shadow magic, the wearer gains 1d4 hit points at the start of their next turn. This effect can occur once per minute and requires a successful DC 15 Constitution saving throw for the wearer to benefit."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 3 to wield the cloak's shadow magic effectively.",
    "vendorReason": "Hyrulean artisans are skilled in creating items that blend ancient lore with practical utility, making this cloak a fitting addition to their inventory.",
    "shippingDetail": "Ships via Lakitu Drones, known for their fast and reliable delivery services within Hyrule.",
    "usage": {
      "activation": "Passive effect upon donning the cloak.",
      "duration": "Instantaneous activation; lasts until the wearer removes it or is no longer affected by shadow magic.",
      "endsWhen": "The cloak's effects end when the wearer takes off the cloak, is no longer under the influence of shadows, or if an action is used to dispel them.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides a useful utility in combat against shadow-based threats while maintaining the balance of power.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:50:55.769825+00:00",
    "aiReviewedAt": "2026-07-22T06:50:55.769825+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_fey_wisp": {
    "id": "hyrule_shadow_fey_wisp",
    "name": "Feywild Wisp of the Raventree",
    "description": "The Feywild Wisp of the Raventree is a fragile, iridescent fragment of the Feywild’s chaotic essence. Its delicate wings shimmer in shades of twilight and mist as it hovers just beyond the reach of mortal hands. This wisp allows its wielder to momentarily breach the veil between realms, granting them swift movement within the Shadowfell or Feywild and an increased chance to dodge attacks during these brief transdimensional forays.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dimensional Teleportation",
      "Shadowfall Dodge"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Dimensional Teleportation",
        "rules": "When activated, the wisp allows the wielder to teleport to the nearest dimension portal. This effect is instantaneous and requires no action. The wisp can be used once per long rest."
      },
      {
        "title": "Shadowfall Dodge",
        "rules": "During a successful dimensional teleportation, the wielder has a 20% chance to dodge attacks made against them while in transit. This effect lasts until the end of their next turn and does not stack with other dodging abilities."
      }
    ],
    "levelRequirementReason": "The wisp's essence requires a strong connection to the Feywild, which is only granted at higher levels.",
    "vendorReason": "Hyrulean scholars and mages often seek out this wisp for its unique properties in studying dimensional anomalies.",
    "shippingDetail": "The wisp must be shipped via Pipe Express to ensure safe delivery through the realms.",
    "usage": {
      "activation": "Reaction (used once per long rest)",
      "duration": "Instantaneous, lasts until end of next turn",
      "endsWhen": "Use of another teleportation effect or death",
      "charges": "Unlimited"
    },
    "priceReason": "The wisp's rarity and unique properties make it a valuable tool for explorers and mages, justifying its price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T06:51:50.502262+00:00",
    "aiReviewedAt": "2026-07-22T06:51:50.502262+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_heart": {
    "id": "hyrule_shadow_heart",
    "name": "Shadow Heart Fragment",
    "description": "The Shadow Heart Fragment is a fragment of corrupted light, forged in the heart of Hyrule’s twilight realm. Crafted from the very essence of shadow and light, it enhances your stealth with an otherworldly shimmer. When worn, you gain a +1 bonus to Dexterity (Stealth) checks for 1 minute. Additionally, there's a 20% chance each round that you can phase through enemy melee attacks, lasting 3 seconds before you must make a DC 15 Constitution saving throw or lose the effect temporarily.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Shadow Stealth",
      "Phasing Defense"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shadow Stealth",
        "rules": "Activate as a bonus action. While wearing this fragment, you gain a +1 bonus to Dexterity (Stealth) checks for the duration of 1 minute."
      },
      {
        "title": "Phasing Defense",
        "rules": "You have a 20% chance each round to phase through an enemy's melee attack. If successful, you are unaffected by the attack and gain temporary hit points equal to your level + Constitution modifier for 3 seconds. The effect ends if you take damage or if you move more than 5 feet."
      }
    ],
    "levelRequirementReason": "This fragment is crafted from corrupted light, suitable for adventurers of all levels.",
    "vendorReason": "Hyrule has long been a hub for mystical and rare artifacts, and the Shadow Heart Fragment is no exception to their offerings.",
    "shippingDetail": "Ships via Lakitu Drones within Hyrule, typically delivered within 2 days of purchase.",
    "usage": {
      "activation": "Bonus action for Shadow Stealth; Phasing Defense is a passive effect.",
      "duration": "Shadow Stealth lasts 1 minute. Phasing Defense lasts 3 seconds per successful use and ends if you take damage or move more than 5 feet.",
      "endsWhen": "Shadow Stealth ends when the duration expires. Phasing Defense ends if you are damaged or move more than 5 feet.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item combines stealth and defensive capabilities, offering a balanced addition to any adventurer's inventory.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:52:12.917242+00:00",
    "aiReviewedAt": "2026-07-22T06:52:12.917242+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_mantle": {
    "id": "hyrule_shadow_mantle",
    "name": "Shadow Mantle of the Temple Guardian",
    "description": "The Shadow Mantle of the Temple Guardian is a cloak woven from the very shadows that haunt the Temple of the Unbroken. Crafted by the temple guardians themselves, it whispers secrets and protections to those who wear it, granting invisibility in shadowy environs and allowing you to move like a wraith through the night. With each step, enemies' detection is dulled, and your agility soars, making you nearly impossible to catch.",
    "category": "equipment",
    "price": 2800,
    "icon": "👤",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Invisibility in Shadows",
      "Enhanced Agility"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invisibility in Shadows",
        "rules": "As a bonus action, the wearer can become invisible for up to 1 minute. While invisible within shadowy conditions, they have advantage on Dexterity (Stealth) checks and gain +2 to AC against visual attacks. This effect ends if the user moves more than 30 feet or enters an area with bright light."
      },
      {
        "title": "Enhanced Agility",
        "rules": "While wearing this mantle, the wearer's movement speed increases by 15%. Additionally, the user can use a bonus action to gain advantage on Dexterity (Acrobatics) checks for up to 1 hour. This effect ends if the wearer stops moving or is hit by an attack."
      }
    ],
    "levelRequirementReason": "The cloak's intricate weaving and powerful magic require a minimum level of understanding and skill.",
    "vendorReason": "Hyrule's master weavers and guardians craft this item, ensuring it is both functional and imbued with ancient temple lore.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, the mantle arrives within 24 hours of purchase.",
    "usage": {
      "activation": "Bonus action for invisibility; Bonus action to enhance agility",
      "duration": "1 minute or until interrupted",
      "endsWhen": "User moves more than 30 feet or enters bright light for invisibility; Ends when user stops moving or is hit by an attack for enhanced agility",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's rarity and unique crafting process justify its high price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T06:51:43.882107+00:00",
    "aiReviewedAt": "2026-07-22T06:51:43.882107+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_metal": {
    "id": "hyrule_shadow_metal",
    "name": "Shadowforged Temple Key",
    "description": "The Shadowforged Temple Key is a dark, intricately etched key forged from the very heart of the Temple of Shadows. Crafted by ancient hands in shadowy zones, it whispers secrets to those who wield it. Upon insertion into a lock, it reveals hidden passages and secret chambers, granting access to forgotten relics. Its touch alone can reveal an enemy's weaknesses on the first strike, offering a tactical advantage in combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Pathways",
      "Enemies' Weaknesses Revealed"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Pathways",
        "rules": "When used to open a lock, the Shadowforged Temple Key reveals hidden pathways and secret chambers within a 10-foot radius. This effect lasts for 1 minute or until the key is expended in use."
      },
      {
        "title": "Enemies' Weaknesses Revealed",
        "rules": "Upon first attack with a weapon, this key grants you advantage on your next attack roll against an enemy within 30 feet. You must be using the key to reveal weaknesses; otherwise, this effect is lost."
      }
    ],
    "levelRequirementReason": "This key is accessible early in one's adventuring career as it assists in navigating dark and mysterious locations.",
    "vendorReason": "Hyrule's vast network of ancient ruins and hidden treasures makes the Hyrulean vendor a fitting source for such an artifact.",
    "shippingDetail": "The key is delivered via the Void Drifter Relay, ensuring secure and timely arrival to the buyer.",
    "usage": {
      "activation": "Standard action to open locks or use in combat",
      "duration": "1 minute per usage or until expended",
      "endsWhen": "When used to its full effect; depleted upon revealing hidden pathways or after one attack with revealed enemy weaknesses",
      "charges": "Unlimited, as the key can be recharged by returning it to the Temple of Shadows"
    },
    "priceReason": "The key's rarity and utility justify its moderate price in terms of experience points.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:51:47.908677+00:00",
    "aiReviewedAt": "2026-07-22T06:51:47.908677+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_soul": {
    "id": "hyrule_shadow_soul",
    "name": "Shadow Soul Fragment",
    "description": "The Shadow Soul Fragment is a fragment of dark essence, bound to an ancient relic crafted by the shadowy artisans of the Underworld. This relic exudes an eerie glow and whispers of power that corrupts as it enhances. Only those who walk the line between light and shadow can wield it without succumbing entirely to darkness. Wielding this fragment drains stamina but amplifies one's attacks, making it a dangerous yet essential tool for the battle-weary warrior.",
    "price": 1000,
    "icon": "🌑",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Dark Corruption",
      "Enhanced Attacks"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Dark Corruption",
        "rules": "When activated, this fragment reduces the target's defense by 20% for 10 seconds. The user must have a minimum of 50 stamina to activate it; failing to do so results in no effect."
      },
      {
        "title": "Enhanced Attacks",
        "rules": "Activating this relic grants +30% attack damage for 10 seconds, requiring the user to expend 50 stamina. The effect ends if the user's stamina is reduced below 50 or upon death."
      }
    ],
    "levelRequirementReason": "Requires a minimum level of 5 to wield this fragment without risking complete corruption.",
    "vendorReason": "Hyrulean vendors, having access to ancient relics and dark artifacts, can offer the Shadow Soul Fragment due to their deep knowledge of shadow magic.",
    "shippingDetail": "The Koopa Postal requires an additional delivery delay for items shipped from the Underworld.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds",
      "endsWhen": "User's stamina drops below 50 or upon death",
      "charges": "Unlimited"
    },
    "priceReason": "The balanced XP price reflects the fragment’s dark power, its limited availability, and the risk it poses to users.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T19:45:04.842532+00:00",
    "aiReviewedAt": "2026-07-22T19:45:04.842532+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_temple_heart": {
    "id": "hyrule_shadow_temple_heart",
    "name": "Darkspire Core",
    "description": "The Darkspire Core is a pulsating, obsidian artifact forged from the heart of a collapsed Shadowfell temple. Its surface crackles with dark energy, and when activated, it distorts reality, allowing the wielder to manipulate shadows at will. However, this power comes at a cost: prolonged use drains the user's sanity and temporarily weakens their physical form, reducing maximum hit points by 10%. The core's true essence lies in its ability to transport the user to nearby Shadowfell entrances with a mere thought.",
    "category": "equipment",
    "price": 6000,
    "icon": "📦",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "+30% damage against Shadowfell enemies",
      "Teleportation to nearest Shadowfell temple entrance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Sanity Drain and Physical Weakness",
        "rules": "While the Darkspire Core is active, the wielder suffers a -10% penalty to maximum hit points. This effect automatically reverts after 30 seconds, regardless of whether the core is still in use."
      },
      {
        "title": "Shadow Manipulation Teleport",
        "rules": "Activating the core allows the user to teleport instantly to the nearest Shadowfell temple entrance within a 100-meter radius. The core can be activated once per short rest, with a successful DC 15 concentration save required each time."
      }
    ],
    "levelRequirementReason": "The Darkspire Core requires significant magical aptitude and experience to wield effectively.",
    "vendorReason": "Hyrulean scholars and mystics, with their deep ties to Shadowfell lore, are the only ones who can reliably source such powerful artifacts.",
    "shippingDetail": "Delivery via Lakitu Drones is swift but requires a special tracking spell to ensure safe transport of the core's volatile energy.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, reverts after 30 seconds",
      "endsWhen": "The user loses concentration or completes a short rest",
      "charges": "1 charge per short rest"
    },
    "priceReason": "Reflects the rare and dangerous nature of acquiring such an artifact, as well as its potent magical properties.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T06:52:15.090189+00:00",
    "aiReviewedAt": "2026-07-22T06:52:15.090189+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_temple_key": {
    "id": "hyrule_shadow_temple_key",
    "name": "Shadow Temple Keyblade",
    "description": "The Shadow Temple Keyblade, a corrupted keyblade forged from the very essence of the Shadow Temple’s final guardian, glows ominously in your hand. Its blade is etched with dark runes that seem to shift and writhe like living shadows. When activated, it transforms you into a silhouette of pure shadow, allowing you to slip through solid walls and evade attacks. The keyblade hums with malevolent energy as you wield its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Shadow Form",
      "Evasion Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Form",
        "rules": "By using an action, you can transform into a shadowy silhouette for 1 minute. While in this form, you gain +20% damage on melee attacks and are immune to all forms of physical damage. You can pass through solid objects as if they were air. This effect ends when you leave the form or take any non-magical lethal damage."
      },
      {
        "title": "Evasion Boost",
        "rules": "While in Shadow Form, you gain +10% evasion chance against all attacks for its duration. Additionally, you have +5% damage reduction from dark magic spells and effects. This bonus does not stack with any other evasion or damage reduction bonuses."
      }
    ],
    "levelRequirementReason": "To wield the Shadow Temple Keyblade effectively requires a level of at least 5 to handle its malevolent power without succumbing to corruption.",
    "vendorReason": "Hyrule’s most respected blacksmiths have refined this powerful artifact, ensuring only those deemed capable can master it.",
    "shippingDetail": "The Shadow Temple Keyblade is carefully packaged and shipped via the Void Drifter Relay to ensure its safe arrival at your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute, or until you leave the form or take lethal non-magical damage",
      "endsWhen": "You exit Shadow Form or suffer non-magical lethal damage",
      "charges": "Unlimited"
    },
    "priceReason": "The Shadow Temple Keyblade is priced at 1000 XP, reflecting its rare material and the risk of corruption it poses to those who wield it.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:44:54.059371+00:00",
    "aiReviewedAt": "2026-07-22T19:44:54.059371+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadow_temple_talisman": {
    "id": "hyrule_shadow_temple_talisman",
    "name": "Shadow Temple Talisman",
    "description": "The Shadow Temple Talisman, a darkened talisman forged in the depths of the Shadowfell, whispers secrets of forbidden lore as it glows faintly within your grasp. When you enter a chamber marked by ancient runes or shadowy sigils, its emerald hue intensifies, granting you a +20% chance to remain undetected and an additional +15% resistance to light-based attacks. The talisman's light reveals the true form of enemies upon contact, allowing you to exploit their weaknesses more effectively.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Stealth Aura",
      "Light Resistance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Stealth Aura",
        "rules": "While wearing the talisman in a forbidden chamber, you have advantage on Dexterity (Stealth) checks. This effect lasts for the duration of your time spent in such chambers."
      },
      {
        "title": "Light Resistance",
        "rules": "You gain resistance to damage from all light-based attacks and spells within forbidden chambers. This effect persists until you leave the chamber or are otherwise removed from its influence."
      }
    ],
    "levelRequirementReason": "This talisman requires a minimum level of 5 due to its complex enchantment and the arcane knowledge needed to operate it effectively.",
    "vendorReason": "Hyrule's ancient artifacts are known for their mysterious origins, making this item fit right into the vendor's extensive collection of legendary relics.",
    "shippingDetail": "The talisman is carefully packed in a shadowed crate to preserve its integrity during transport through treacherous terrains.",
    "usage": {
      "activation": "Passive effect upon entering forbidden chambers marked by ancient runes or shadowy sigils.",
      "duration": "Lasts until you leave the chamber or are otherwise removed from its influence.",
      "endsWhen": "Exhausted when you exit a forbidden chamber, but can be re-obtained if returned to Hyrule's underground forges.",
      "charges": "Unlimited"
    },
    "priceReason": "The talisman's rare enchantments and the arcane materials used in its forging justify this price.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:52:55.381509+00:00",
    "aiReviewedAt": "2026-07-22T06:52:55.381509+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadowfell_bone_key": {
    "id": "hyrule_shadowfell_bone_key",
    "name": "Shadowfell Bone Key",
    "description": "The Shadowfell Bone Key is a relic crafted from the bones of ancient guardians, their essence infused into its very core. Its glow pulses in time with the heartbeat of the land's forgotten secrets, and it hums softly when near an ancient tomb or sealed passage. This key opens chambers that have been locked for millennia, granting access to lost treasures and hidden knowledge within the Shadowfell’s depths.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Opens sealed Shadowfell chambers",
      "Temporarily resists shadow-based attacks"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sealed Chamber Opening",
        "rules": "Activates as a bonus action, opening one sealed Shadowfell chamber for up to 1 hour. The key must be in contact with the lock or seal to activate its effect. Once used, it requires a short rest to recharge."
      },
      {
        "title": "Shadow Resistance",
        "rules": "Grants temporary resistance to all shadow-based attacks equal to your proficiency bonus for 10 minutes after opening a chamber. This effect does not stack with other forms of resistance or immunity."
      }
    ],
    "levelRequirementReason": "The key requires a certain understanding of the Shadowfell's mysteries, accessible only to those of at least third level.",
    "vendorReason": "Hyrulean relics are known for their ancient craftsmanship and power, making them trustworthies in the Hyrule market.",
    "shippingDetail": "Due to its fragile nature, the key is shipped via special padded couriers ensuring safe delivery within a week.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 1 hour when used; temporary resistance lasts for 10 minutes after opening a chamber",
      "endsWhen": "After 1 hour or upon being resealed, whichever comes first. Temporary resistance ends at the end of your next turn.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The key’s rare material and ancient lore justify its moderate price in Hyrule.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:52:54.059180+00:00",
    "aiReviewedAt": "2026-07-22T06:52:54.059180+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadowfell_heart": {
    "id": "hyrule_shadowfell_heart",
    "name": "Shadowfell Core Shard",
    "description": "The Shadowfell Core Shard pulses with an eerie, dark energy, its surface etched with faint sigils that seem to shift and whisper secrets of the void. Crafted from the very heart of the Shadowfell, it grants wielders a tangible connection to the plane's malevolent essence. Feel its pulse in battle, for it channels this dark power into your strikes against creatures of shadow, amplifying their suffering with every blow.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Darkened Strikes",
      "Void Echo"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Darkened Strikes",
        "rules": "When you deal damage to a creature with an alignment descriptor of chaotic or evil, the damage is increased by 1d6. This effect lasts until the start of your next turn."
      },
      {
        "title": "Void Echo",
        "rules": "Once per short rest, activate this item as a bonus action to gain resistance to necrotic and shadow damage for 1 minute. You must succeed on a DC 15 Constitution saving throw or be incapacitated until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to wield effectively, as it demands a deeper understanding of dark magic.",
    "vendorReason": "Hyrule is well-known for its mystical artifacts and this item fits the theme of their offerings.",
    "shippingDetail": "Ships via Pipe Express, known for their reliable delivery across Hyrulean territories.",
    "usage": {
      "activation": "Bonus action or as a reaction to an attack against you with a chaotic or evil alignment descriptor.",
      "duration": "Until the start of your next turn (Darkened Strikes) or 1 minute (Void Echo).",
      "endsWhen": "The effect ends when its duration expires, or if you take damage from a source other than a creature with a chaotic or evil alignment descriptor (Darkened Strikes), or at the end of your next long rest (Void Echo).",
      "charges": "Unlimited uses per short rest"
    },
    "priceReason": "Balanced to be within reach for mid-level adventurers, this item provides a significant tactical advantage.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T19:45:07.743066+00:00",
    "aiReviewedAt": "2026-07-22T19:45:07.743066+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadowfell_item_name_here": {
    "id": "hyrule_shadowfell_item_name_here",
    "name": "Soul Mirror Shard",
    "description": "A shimmering shard of glass from Hyrule's Mirror of the Shadowfell, this fragment can be wielded to summon a spectral soul for combat. Crafted by Red Winter, it exudes an eerie glow that pulses with life and death. Once summoned, the soul lashes out at foes, reflecting damage back upon them. However, failing to use its power within moments leads to a loss of 10% of your hit points.",
    "price": 1000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Soul Reflection",
      "Spectral Summon"
    ],
    "vendor": "hyrule",
    "shippedBy": "Dry Bones Dead Drop",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Soul Reflection",
        "rules": "When activated as an action, the shard reflects all damage taken by its wielder back to the attacker. This effect lasts for 5 seconds and has a recharge time of 1 hour."
      },
      {
        "title": "Spectral Summon",
        "rules": "Activating this effect summons a spectral soul that attacks nearby enemies with an attack bonus equal to your Charisma modifier + 2, dealing force damage. The summoning lasts for 5 seconds and has a recharge time of 1 hour."
      }
    ],
    "levelRequirementReason": "This item requires significant power to handle its mystical properties and the risks involved in using it.",
    "vendorReason": "Hyrule is known for its mastery of ancient artifacts and relics, including those from the Shadowfell.",
    "shippingDetail": "The shard must be couriered via Dry Bones Dead Drop to ensure it arrives in pristine condition. The delivery can take up to a week due to the fragility of the item.",
    "usage": {
      "activation": "Action",
      "duration": "5 seconds, recharges after 1 hour",
      "endsWhen": "Effect expires or is interrupted by an attack or action against the user",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and mystical properties justify its price in terms of experience points.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T06:53:10.127534+00:00",
    "aiReviewedAt": "2026-07-22T06:53:10.127534+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadowfell_key": {
    "id": "hyrule_shadowfell_key",
    "name": "Shadowfell Key of the Forgotten Vault",
    "description": "The Shadowfell Key of the Forgotten Vault is a gnarled iron key forged in the heart of the Shadowfell, its surface etched with arcane runes that glow faintly under moonlight. This relic not only unlocks sealed doors but also grants a fleeting glimpse into the shadowed truths beyond them, revealing hidden paths and forgotten secrets. With each use, it taps into the very essence of the Shadowfell, drawing upon dark energies to enhance your weapon's power against its native inhabitants.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Unlocks one hidden door per encounter",
      "Enhances damage against dark-type enemies"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Unlocking Doors",
        "rules": "When used, the key unlocks a single hidden or sealed door. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Enhanced Damage",
        "rules": "For every 10 levels of proficiency you possess with weapons that deal necrotic damage, your weapon deals an additional +5 bonus damage to dark-type enemies for one minute. This effect ends when the key is used again or if you cease attacking dark-type enemies."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of Shadowfell magic can wield this key effectively.",
    "vendorReason": "Hyrule's master blacksmiths have forged the only known copies, making it a sought-after relic among adventurers and scholars.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring that the key reaches its destination without delay.",
    "usage": {
      "activation": "Instantaneous action",
      "duration": "One minute per use",
      "endsWhen": "The key is used again or if you cease attacking dark-type enemies",
      "charges": "Unlimited; recharged after a short rest"
    },
    "priceReason": "Balanced to ensure it remains a valuable but not overpowered addition to any adventurer's gear.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T06:53:47.125563+00:00",
    "aiReviewedAt": "2026-07-22T06:53:47.125563+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadowforged_sword": {
    "id": "hyrule_shadowforged_sword",
    "name": "Shadowforged Blade of the Sundered Temple",
    "description": "The Shadowforged Blade of the Sundered Temple hums with ancient magic, its blade a fractured mirror of the Temple’s lost splendor. Crafted from the shattered essence of the Ancients’ temple, it slices through shadows and grants spectral vision to its wielder, allowing them to see in darkness as if it were day. After each successful strike against shadowy foes, the sword temporarily cloaks the user, providing a fleeting moment of invisibility that can be used to outmaneuver or escape danger.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+20% damage to shadow-based attacks",
      "Grants temporary invisibility for 3 seconds after each attack"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Strike Damage",
        "rules": "When the wielder lands a hit on an enemy with a shadow-based attack, they gain +20% damage to that attack. This effect lasts until their next turn."
      },
      {
        "title": "Spectral Cloak",
        "rules": "After successfully hitting an opponent with a shadow-based attack, the user gains temporary invisibility for 3 seconds. They can activate this effect once per short rest."
      }
    ],
    "levelRequirementReason": "The sword's ancient magic requires a seasoned warrior to wield it effectively.",
    "vendorReason": "Hyrule is renowned for its mastery of shadow and light, making it the perfect vendor for such an artifact.",
    "shippingDetail": "Ships via spirit courier, ensuring swift delivery through otherworldly means.",
    "usage": {
      "activation": "Instantaneous action when successfully hitting a shadow-based attack.",
      "duration": "3 seconds of invisibility per successful hit.",
      "endsWhen": "The invisibility ends after the duration expires or if the wielder takes any action that requires their vision.",
      "charges": "Once per short rest"
    },
    "priceReason": "Balanced to reflect the sword's powerful effects and rare craftsmanship.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:53:36.561190+00:00",
    "aiReviewedAt": "2026-07-22T06:53:36.561190+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadows_edge": {
    "id": "hyrule_shadows_edge",
    "name": "Shadows Edge",
    "description": "Shadows Edge, a blade forged from the fractured essence of Raventree Manor’s Shadowfell dimension, hums with spectral light that dances along its edge like a whispered secret come to life. Its touch reveals hidden truths and echoes the last movements of its foes, making it an invaluable asset in shadowy encounters. The sword's glow intensifies when facing enemies steeped in darkness, dealing 150% damage to them and granting a 20% chance to reveal their location after each strike.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Spectral Echo",
      "Shadow Damage"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Echo",
        "rules": "When you deal damage with Shadows Edge, there is a 20% chance that the enemy faintly echoes their last move. This effect lasts for 1 minute and can only occur once per target."
      },
      {
        "title": "Shadow Damage",
        "rules": "Shadows Edge deals 150% damage to shadow-based enemies, requiring an Intelligence saving throw (DC 14) with a failure causing the enemy to be frightened for 1 round. This effect can only occur once per target."
      }
    ],
    "levelRequirementReason": "The blade's dark essence and intricate forging require at least third level proficiency in Arcane Tradition or Shadow Magic.",
    "vendorReason": "Hyrule’s vendors have access to rare artifacts from the twilight realms, making Shadows Edge a natural addition to their stock.",
    "shippingDetail": "The blade is carefully packaged to prevent any spectral energy from leaking during transit, ensuring safe delivery.",
    "usage": {
      "activation": "Melee weapon attack",
      "duration": "Instantaneous with a 1-minute cooldown between uses on the same target",
      "endsWhen": "On a miss or when you use an action that requires concentration",
      "charges": "Unlimited; recharges after a long rest"
    },
    "priceReason": "Balanced against other rare weapons, its unique spectral abilities and dark damage make it a sought-after item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:53:48.928140+00:00",
    "aiReviewedAt": "2026-07-22T06:53:48.928140+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shadowshard_amulet": {
    "id": "hyrule_shadowshard_amulet",
    "name": "Shadowshard Amulet of the Vanishing Veil",
    "description": "The Shadowshard Amulet of the Vanishing Veil is a tiny amulet crafted from darkened obsidian and imbued with the essence of the realm's forgotten shadows. Worn by those who dare to walk in twilight, it absorbs ambient shadow magic and channels it into moments of total invisibility within shadowy environments. The amulet whispers secrets of the night and subtly enhances one’s stealth, making you harder for enemies to detect even beyond the veil of darkness.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisible Shadow",
      "Enhanced Stealth"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invisible Shadow",
        "rules": "Activates as a bonus action. The wearer becomes invisible within shadowy environments for up to 5 seconds, allowing them to slip past foes undetected. This effect is limited to once per short or long rest."
      },
      {
        "title": "Enhanced Stealth",
        "rules": "Increases the wearer’s stealth checks by +2 while in shadowy areas, and reduces enemy detection range by 10 feet within these zones. This benefit persists as long as the wearer is in a shadowy environment."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure players can handle the challenges of using this amulet effectively.",
    "vendorReason": "Hyrulean artisans are skilled in crafting items that blend ancient magic with modern utility, making them perfect custodians of such an item.",
    "shippingDetail": "Ships via the Rakasha's ethereal courier service ensuring swift delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Up to 5 seconds per use; ends when the wearer leaves a shadowy environment or upon exhaustion of uses per rest.",
      "endsWhen": "Leaving a shadowy area, ending one's turn in full sunlight, or using it again on the same rest.",
      "charges": "Uses exhausted each short or long rest"
    },
    "priceReason": "Balanced at this cost to reflect its unique utility and limited uses per day.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:53:52.009259+00:00",
    "aiReviewedAt": "2026-07-22T06:53:52.009259+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shattered_echo": {
    "id": "hyrule_shattered_echo",
    "name": "Shattered Echo of the Temple",
    "description": "The Shattered Echo of the Temple is a fragmented relic carved from the heartwood of an ancient sacred tree. It hums with residual magic that reveals hidden passageways in forgotten temples, but its power diminishes with each use until it shatters completely. The echoes it emits can be heard only within the first three miles of its origin, and its resonance subtly enhances one's stealth abilities within such areas.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Passages",
      "Enhances Stealth"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveals Hidden Passages",
        "rules": "As an action, the wielder can point the Shattered Echo at a temple ruin and use their Investigation check. On a success, they reveal hidden passageways within 10 feet. This effect loses 25% of its remaining durability each time it is used."
      },
      {
        "title": "Enhances Stealth",
        "rules": "While within 3 miles of the Shattered Echo's origin, a wielder can use an action to cast the Detect Magic spell (DC 16) for 10 minutes. This effect loses 5% of its remaining durability each time it is used."
      }
    ],
    "levelRequirementReason": "Requires basic knowledge of ancient magic and temple lore.",
    "vendorReason": "Hyrulean scholars often seek relics like the Shattered Echo for their research into forgotten temples.",
    "shippingDetail": "Due to its magical nature, it is shipped under cover of darkness and must be delivered within a week.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous; lasts for the duration of the spell effect (10 minutes) upon successful use.",
      "endsWhen": "The Echo's durability reaches zero, causing it to shatter into harmless fragments.",
      "charges": "3 uses"
    },
    "priceReason": "Balanced as a rare item with limited uses and effects that are both powerful and perilous.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:54:02.970334+00:00",
    "aiReviewedAt": "2026-07-22T06:54:02.970334+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shattered_sword": {
    "id": "hyrule_shattered_sword",
    "name": "Shattered Blade of the Fallen Temple",
    "description": "The Shattered Blade of the Fallen Temple is a relic forged from the molten remains of an ancient temple that once housed the First Sage's power. Its blade, while fractured, hums with primordial magic that can rend through even the strongest plate armor. Each strike amplifies its fury, and with each enemy felled in close quarters combat, it grows more ferocious until it finally unleashes a cataclysmic pulse of raw energy.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Armor Piercing",
      "Cataclysmic Pulse"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Armor Piercing",
        "rules": "When the Shattered Blade strikes an armored target, it deals an additional 50% damage. The blade charges after each hit against armored foes; once fully charged, it unleashes a devastating pulse that affects all enemies within 10 feet of the wielder."
      },
      {
        "title": "Cataclysmic Pulse",
        "rules": "Activates when the blade has struck three times consecutively on armored targets. The wielder must make a DC 15 Constitution saving throw or be stunned for 1 round. Targets within 10 feet also take 7d6 force damage, and they must succeed on a DC 15 Strength saving throw or be knocked prone."
      }
    ],
    "levelRequirementReason": "The Shattered Blade requires the user to have mastered basic combat techniques before wielding its raw power.",
    "vendorReason": "Hyrule is known for preserving and trading ancient artifacts, including this relic from a bygone era of magic.",
    "shippingDetail": "The blade's fragile nature necessitates special handling; it will be delivered via Void Drifter Express to ensure safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The pulse ends when the wielder makes a successful attack in another room, or after 1 minute if unused.",
      "charges": "Unlimited"
    },
    "priceReason": "The Shattered Blade's rare nature and unique properties justify its value in experience points.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:54:31.183740+00:00",
    "aiReviewedAt": "2026-07-22T06:54:31.183740+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_shroud_of_hag": {
    "id": "hyrule_shroud_of_hag",
    "name": "Hag’s Shroud of Silence",
    "description": "The Hag’s Shroud of Silence is a cloak spun from the very essence of a defeated Hag, its threads woven from the whispers of the dead and the shadows of forgotten battles. The fabric itself hums with the unspoken words and eerie echoes of ancient lore, granting the wearer near-perfect invisibility in dark or foggy conditions. Its presence on the battlefield is as unsettling to foes as it is beneficent for allies, creating a brief pocket of silence where sound seems to dissolve into the night itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility in Dark/Foggy Conditions",
      "Unsettling Presence"
    ],
    "vendor": "hyrule",
    "shippedBy": "Zora River Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invisibility in Dark/Foggy Conditions",
        "rules": "Activates as a bonus action. The wearer becomes invisible for 15 seconds per use within dark or foggy environments. This effect does not grant advantage on Stealth checks but reduces visibility to enemies, granting them disadvantage on Perception checks until their next turn. The invisibility ends if the user moves more than 5 feet or is attacked."
      },
      {
        "title": "Unsettling Presence",
        "rules": "The wearer’s presence unnerves nearby foes, causing a 30% chance of missing on their next attack action when they are within 30 feet. This effect lasts for the duration of the invisibility or until the user moves more than 5 feet. The shroud grants the wearer advantage on Intimidation checks and saving throws against fear effects."
      }
    ],
    "levelRequirementReason": "This item is crafted to be accessible early in a character's journey, providing a useful tool without overwhelming power.",
    "vendorReason": "Hyrulean blacksmiths are skilled at crafting items from the essence of powerful creatures like Hags, making this shroud available through their network.",
    "shippingDetail": "Ships via a swift current, ensuring timely delivery to adventurers across Hyrule.",
    "usage": {
      "activation": "Bonus action",
      "duration": "15 seconds per use within dark or foggy conditions",
      "endsWhen": "User moves more than 5 feet or is attacked; recharges after a long rest",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity and unique crafting process, combined with its utility in combat and stealth scenarios, justify this price.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:54:58.975877+00:00",
    "aiReviewedAt": "2026-07-22T06:54:58.975877+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_silence_scepter": {
    "id": "hyrule_silence_scepter",
    "name": "Silence Scepter of the Vaulted Choir",
    "description": "The Silence Scepter of the Vaulted Choir is a staff carved from ancient oak and inlaid with runes that whisper forgotten hymns. It can be wielded to silence foes' voices, rendering them speechless for three turns, and conjure a choir of ethereal spirits that distract attackers by playing haunting melodies. This relic was forged deep within the Temple of Echoes, where it is said the spirits of the choir once roamed freely.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎵",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Silence Enemies",
      "Ethereal Choir"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Silence Enemies",
        "rules": "When activated as a bonus action, the Silence Scepter silences hostile creatures within 30 feet for three turns. On a successful save, the target is only rendered speechless but not silenced."
      },
      {
        "title": "Ethereal Choir",
        "rules": "For each round that enemies are silenced by the Silence Scepter, an ethereal choir plays haunting melodies around them, reducing their movement speed by 10 feet until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The Silence Scepter requires a level 7 character to wield due to its arcane and divine nature.",
    "vendorReason": "Hyrule is known for its ancient artifacts and relics, making it the ideal vendor for this item.",
    "shippingDetail": "The Void Drifter Relay ensures that such a powerful artifact arrives safely to its destination within one week of purchase.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Three turns",
      "endsWhen": "The start of your next turn or when the target makes a successful saving throw",
      "charges": "Unlimited, as it recharges after a short rest"
    },
    "priceReason": "The Silence Scepter is crafted from rare materials and imbued with both arcane and divine energies, justifying its price of 1000 XP.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T06:54:10.122264+00:00",
    "aiReviewedAt": "2026-07-22T06:54:10.122264+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_skaven_mechanical_glove": {
    "id": "hyrule_skaven_mechanical_glove",
    "name": "Ironclad Guttering Gauntlet",
    "description": "The Ironclad Guttering Gauntlet is a recycled Hyrulean temple gear, crafted by the Skaven to withstand the most brutal of urban skirmishes. Its gears clatter and grind with each strike, enhancing your melee attacks with a speed that leaves foes in the dust. This gauntlet also paralyzes undead enemies for a momentary eternity, allowing you to capitalize on their immobility. It can be used as a shield, providing a 10% block chance against incoming blows.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚙",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rusted Paralysis",
      "Temple Gear Edge"
    ],
    "vendor": "hyrule",
    "shippedBy": "Hammer Bros Handling",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Rusted Paralysis",
        "rules": "When you hit an undead foe with this gauntlet, it causes them to be restrained for 1 round. The undead must succeed on a DC 13 Constitution saving throw or fall prone."
      },
      {
        "title": "Temple Gear Edge",
        "rules": "While wearing the Ironclad Guttering Gauntlet, your melee attack speed is increased by 20%, and you deal an additional 1d4 damage to undead enemies. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The gauntlet's recycled Hyrulean temple gears require a proficient craftsman with experience in urban combat.",
    "vendorReason": "Hyrulean blacksmiths, like the Skaven, are known for their unique and durable craftsmanship.",
    "shippingDetail": "The gauntlet is carefully packed to prevent damage during transit due to its fragile yet powerful nature.",
    "usage": {
      "activation": "Instantaneous use as a bonus action when attacking an undead foe or defending with the gauntlet.",
      "duration": "Until the start of your next turn for each effect.",
      "endsWhen": "On a failed Constitution saving throw by the target undead, upon using another bonus action, or if the gauntlet is removed.",
      "charges": "Unlimited"
    },
    "priceReason": "The gauntlet's rarity and unique properties justify its price, making it a valuable addition to any adventurer's arsenal.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T19:45:21.465861+00:00",
    "aiReviewedAt": "2026-07-22T19:45:21.465861+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_soul_echo": {
    "id": "hyrule_soul_echo",
    "name": "Soul Echo Pendant",
    "description": "The Soul Echo Pendant hums with the resonant whispers of fallen champions, its silver chain and obsidian stone pulsing in sync with your heartbeat. When worn, it not only boosts morale but also restores health gradually over time, a constant reminder that valor endures even in silence. Those whose spirits align with nobility can harness its power to find hidden relics more easily, as if the earth itself whispers their location.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Gradual Health Restoration",
      "Morale Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Gradual Health Restoration",
        "rules": "When worn, the pendant restores 5% of your maximum hit points every 30 seconds. This effect is passive and does not require any action from you."
      },
      {
        "title": "Morale Boost",
        "rules": "Allies within a 10-foot radius gain a +2 morale bonus to attack rolls and saving throws while in combat, lasting until the end of their next turn. This effect is active as long as the wearer remains conscious."
      }
    ],
    "levelRequirementReason": "The pendant's power requires a noble heart, which typically develops at a higher level.",
    "vendorReason": "Hyrule's artisans craft this pendant from the very essence of its fallen heroes, making it a fitting tribute to their memory and a symbol of nobility for those who wear it.",
    "shippingDetail": "Delivered swiftly by Lakitu drones, ensuring the pendant arrives in perfect condition.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or wearer falls unconscious.",
      "endsWhen": "Wearer becomes unconscious or removes the pendant.",
      "charges": "Unlimited"
    },
    "priceReason": "The rare materials and craftsmanship required for this pendant justify its price, as it is both a practical and symbolic item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:54:36.449050+00:00",
    "aiReviewedAt": "2026-07-22T06:54:36.449050+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_soul_forged_shield": {
    "id": "hyrule_soul_forged_shield",
    "name": "Soulforged Shield of the Triforce",
    "description": "The Soulforged Shield of the Triforce, a relic from the heart of Hyrule’s greatest hero, channels the divine essence of the Triforce into its steel. This shield not only absorbs the fury of sacred attacks but also imbues allies within a fifty-foot radius with a surge of valor, enhancing their attack power by +20%. Its presence is so potent that enemies nearby feel a chill in their resolve, reducing morale by 15% as long as it remains active.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs divine damage",
      "Enhances allies' attack power"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Divine Absorption",
        "rules": "When the shield is activated, it absorbs all incoming divine damage for as long as it remains in use. This effect does not stack with other similar shields."
      },
      {
        "title": "Valor Infusion",
        "rules": "Allies within a 50-foot radius gain a +20% bonus to attack rolls while the shield is active. This effect ends if an ally moves more than 30 feet away from the shield."
      }
    ],
    "levelRequirementReason": "The shield's divine power requires a seasoned warrior familiar with Hyrulean lore.",
    "vendorReason": "Only the Temple of Time can offer such a sacred relic, entrusted to those who have proven their worth.",
    "shippingDetail": "Ships via spectral courier with an overnight delivery guarantee.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "1 minute",
      "endsWhen": "The wielder moves more than 30 feet away from the shield or as a result of an attack that deals 50 points of damage to it",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price, considering its divine origin and potent effects on both defense and ally combat effectiveness.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:55:15.263340+00:00",
    "aiReviewedAt": "2026-07-22T06:55:15.263340+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_soul_shard": {
    "id": "hyrule_soul_shard",
    "name": "Soul Shard of the Crimson Temple",
    "description": "The Soul Shard of the Crimson Temple radiates an ethereal crimson light that hums with ancient power. Crafted from the very soul essence of the temple itself, this shard is said to have been forged in the heart of a forgotten battle. When activated, it heals allies for 300 hit points and grants its wielder moments of invisibility, allowing them to slip past unseen foes. With each use, the shard pulses with renewed vitality, though prolonged exposure can strain even the strongest souls.",
    "price": 1000,
    "icon": "💉",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Heals Allies",
      "Invisibility Burst"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Soul Healing Surge",
        "rules": "When activated as an action, this shard heals up to two nearby allies for 300 hit points. The user must be within 5 feet of the target and cannot benefit from this effect themselves."
      },
      {
        "title": "Momentary Invisibility",
        "rules": "Upon activation, the wielder becomes invisible for 10 seconds. This invisibility can only be dispelled by a successful DC 14 Con saving throw or if the user takes any action other than movement."
      }
    ],
    "levelRequirementReason": "The shard's ancient power demands that users possess at least three levels of experience to channel its essence.",
    "vendorReason": "Hyrule, the guardian of sacred relics, holds this shard as a symbol of the temple's enduring legacy and its connection to the divine soul energy.",
    "shippingDetail": "Ships via Pipe Express, ensuring safe delivery within three days. Due to its fragility, it is recommended to keep the item in a padded container for long-term storage.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds of invisibility",
      "endsWhen": "The user takes an action other than movement or is dispelled by a successful DC 14 Con saving throw",
      "charges": "Unlimited, but the shard recharges after one long rest"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the item's rare and powerful nature without overshadowing other options.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:55:04.586219+00:00",
    "aiReviewedAt": "2026-07-22T06:55:04.586219+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_spectral_mechanism": {
    "id": "hyrule_spectral_mechanism",
    "name": "Phantom Gear",
    "description": "Phantom Gear, a humbling artifact crafted from the whispers of long-dead guardians, is an intricate mechanism that seems to shimmer in and out of existence. When activated, it grants the wielder a fleeting moment of invisibility, allowing them to slip past foes unseen. Its most potent feature is a 30% chance to bypass enemy defenses during its active duration, making it ideal for those who must strike swiftly and stealthily.",
    "category": "equipment",
    "price": 2500,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Invisibility",
      "Bypass Defense Checks"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invisibility",
        "rules": "The wielder becomes invisible for 10 seconds upon activation. This effect ends if the user takes any action other than movement or if they are hit by an attack."
      },
      {
        "title": "Bypass Defense Checks",
        "rules": "There is a 30% chance that each attack made against the wielder during the invisibility effect bypasses their defense checks. The effect ends when the invisibility duration expires, and this feature cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "Phantom Gear requires a minimum level of 5 to wield effectively due to its complex mechanics and the need for precision.",
    "vendorReason": "Hyrule is renowned for its crafting prowess, and Phantom Gear's intricate design makes it an ideal item for their shop.",
    "shippingDetail": "Phantom Gear requires special handling by Boo Spectral Mail to ensure the artifact arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds per use",
      "endsWhen": "Upon taking an action other than movement or being hit by an attack, or at the end of its duration.",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The intricate craftsmanship and rare materials used in Phantom Gear justify its high price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T21:57:25.749347+00:00",
    "aiReviewedAt": "2026-07-22T21:57:25.749347+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_spectral_satchel": {
    "id": "hyrule_spectral_satchel",
    "name": "Spectral Satchel",
    "description": "The Spectral Satchel is a leather-bound pouch adorned with faded, spectral emblems of the lost. Crafted from the very essence of forgotten memories, it can store up to five memory fragments, each imbued with the essence of a loved one's presence. When drained, the satchel reveals a fragment that grants its wielder +2 to Perception checks for 1 hour, helping them see through the shadows of their grief. After ten uses, the satchel weathers to nothing but an empty shell, a reminder of lost connections and found truths.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧠",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Memory Fragment Storage",
      "Enhanced Perception"
    ],
    "vendor": "hyrule",
    "shippedBy": "Piranha Plant Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Memory Fragment Storage",
        "rules": "The Spectral Satchel can hold up to five memory fragments. Each fragment provides +2 to Perception checks for the wielder, allowing them to perceive and interpret their surroundings more clearly."
      },
      {
        "title": "Reveal Forgotten Truths",
        "rules": "When drained of all fragments, the satchel reveals a single fragment that grants +2 to Perception checks for 1 hour. This effect can be used once per long rest and is only usable by those who have lost someone close."
      }
    ],
    "levelRequirementReason": "The Spectral Satchel requires no level, as it aids in overcoming personal challenges.",
    "vendorReason": "Hyrule is known for its rich history and deep connections to the past, making them a fitting vendor for an item that stores memories of the lost.",
    "shippingDetail": "Ships via the Piranha Plant Post within 3 days, with special handling to ensure the satchel arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect; fragments reveal their benefits upon being stored or drained.",
      "duration": "Fragments grant +2 Perception checks for up to 1 hour after draining the satchel.",
      "endsWhen": "After ten uses, the satchel wears out and becomes an empty shell.",
      "charges": "Unlimited (up to five fragments can be stored)"
    },
    "priceReason": "The Spectral Satchel's fair value is set at 1000 XP, reflecting its unique ability to store and reveal memories.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:55:32.671924+00:00",
    "aiReviewedAt": "2026-07-22T06:55:32.671924+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_spirit_bolt": {
    "id": "hyrule_spirit_bolt",
    "name": "Rakasha Spirit Bolt",
    "description": "The Rakasha Spirit Bolt, a mystical energy projectile forged from the essence of the ancient Rakasha, is a fearsome weapon that channels their malevolent spirit into a single, devastating shot. This bolt can be charged for an explosive burst, dealing 1.5 times its base damage on impact and creating a lethal ripple effect within a 5m radius. The bolt's origins lie in the dark forges of the Rakasha, where spirits are bound to metal, making it a potent tool for those who dare to wield its power.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Charged Shot",
      "Explodes on Impact"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charged Shot",
        "rules": "The user must make a bonus action to charge the Rakasha Spirit Bolt. Once charged, the bolt deals an additional 500 points of damage upon impact and can be released as part of a melee attack. The bolt has unlimited uses but cannot be recharged until the next long rest."
      },
      {
        "title": "Explodes on Impact",
        "rules": "Upon hitting an enemy, the Rakasha Spirit Bolt explodes in a 5m radius dealing 750 points of force damage to all creatures within. This effect has no save DC and does not require any action from the user."
      }
    ],
    "levelRequirementReason": "The Rakasha Spirit Bolt is designed for those who have a basic understanding of martial combat, making it accessible to lower-level characters.",
    "vendorReason": "Hyrule is known for its diverse array of magical and martial equipment, and the Rakasha Spirit Bolt fits well within this eclectic range.",
    "shippingDetail": "The bolt arrives encased in a protective aura that preserves its volatile nature until activated.",
    "usage": {
      "activation": "Bonus action to charge; melee attack to release",
      "duration": "Instantaneous",
      "endsWhen": "Used or recharged during the next long rest",
      "charges": "Unlimited uses, rechargeable after a long rest"
    },
    "priceReason": "The Rakasha Spirit Bolt's unique crafting process and volatile nature justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:55:50.967027+00:00",
    "aiReviewedAt": "2026-07-22T06:55:50.967027+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_spirit_chime": {
    "id": "hyrule_spirit_chime",
    "name": "Temple Chime of the Lost",
    "description": "The Temple Chime of the Lost resonates with the ancient echoes of the Divine Sanctum, its bronze surface etched with forgotten runes. When struck, it emits a melodious tone that not only reveals hidden passages but also momentarily blinds nearby foes, leaving them disoriented for three seconds. The chime's sound is so pure and powerful that it enhances one’s agility, granting a 10% speed boost for five seconds after each activation.",
    "price": 1000,
    "icon": "🎵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Reveals Hidden Passages",
      "Blinds Nearby Foes"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths",
        "rules": "When struck, the chime emits a resonant tone that reveals hidden passages and enemy positions within a 30-foot radius for three seconds. This effect is instantaneous upon activation."
      },
      {
        "title": "Blind Nearby Foes",
        "rules": "The chime's sound momentarily blinds any creatures within a 20-foot cone, leaving them blinded for three seconds as they are disoriented by the ancient magic of the sanctum. This effect ends if the creature moves or is targeted by another effect."
      }
    ],
    "levelRequirementReason": "The chime's power is accessible to those who have not yet reached the peak of their training.",
    "vendorReason": "Hyrule’s ancient artifacts are carefully curated by the Hyrulean Scholars, preserving and selling relics like this chime.",
    "shippingDetail": "Delivered via a Rakasha spirit courier, ensuring swift delivery with a slight delay of one day due to their ethereal nature.",
    "usage": {
      "activation": "Standard Action",
      "duration": "Instantaneous effect; lasts for three seconds",
      "endsWhen": "The duration expires or the chime is struck again",
      "charges": "Unlimited, but requires a short rest to be used again"
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the chime's rarity and the power it wields from the Divine Sanctum.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T06:55:56.976719+00:00",
    "aiReviewedAt": "2026-07-22T06:55:56.976719+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_spirit_forged_shield": {
    "id": "hyrule_spirit_forged_shield",
    "name": "Spirit Forged Shield",
    "description": "Hewn from the bone of a guardian who fell in defense of the Sacred Grove, this Spirit Forged Shield glows with an inner sanctity that absorbs divine strikes and reflects their energy back at attackers. When struck by a holy weapon or spell, it emits a radiant pulse that also summons a spectral guardian to assist for five seconds. This shield's divine essence ensures you are never truly alone in battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Divine Absorption",
      "Spectral Guardian"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Divine Absorption",
        "rules": "When the shield is struck by a holy attack, it absorbs 15% of the damage as radiant energy. This effect can occur once per short or long rest."
      },
      {
        "title": "Spectral Guardian",
        "rules": "On being struck by an attack, this shield summons a spectral guardian to assist you for 5 seconds. The guardian deals 2d6 radiant damage and has a +1 bonus to AC. This effect can be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "The spiritual energy of the shield requires a proficient caster or fighter with a strong connection to divine magic.",
    "vendorReason": "Hyrule's mystical relics are curated by the wise sages who protect the Sacred Grove, ensuring only those who truly need it can obtain this shield.",
    "shippingDetail": "Delivered swiftly through the skies of Hyrule by Lakitu's trusted drones, ensuring the shield arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous upon being struck by a holy attack",
      "duration": "5 seconds for summoned spectral guardian; once per long rest",
      "endsWhen": "Shield is struck again or after duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The shield's rare crafting materials and divine enchantments justify its fair value of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:56:00.932015+00:00",
    "aiReviewedAt": "2026-07-22T06:56:00.932015+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_spirit_shroud_cloak": {
    "id": "hyrule_spirit_shroud_cloak",
    "name": "Spirit Shroud Cloak",
    "description": "The Spirit Shroud Cloak is woven from the ethereal remnants of a fallen guardian's soul. Worn by those seeking to evade both the living and the dead, it grants invisibility to all foes and reduces their ability to detect you. Its fabric hums with ancient magic, granting +15% dodge chance and reducing your enemy's detection radius by 30%. Crafted by Hyrulean artisans who honor the spirits of the past, this cloak is a relic of lost guardian power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕯",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invisibility to all foes",
      "Reduces detection"
    ],
    "vendor": "hyrule",
    "shippedBy": "Royal Courier of Hyrule",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Invisibility to All Foes",
        "rules": "Activate as a bonus action. Lasts until the start of your next turn. Ends if you attack, cast a spell, or are hit by an attack."
      },
      {
        "title": "Reduces Detection",
        "rules": "Passive effect. Reduces enemy detection radius by 30% while you are within 60 feet of them. This effect ends when the cloak is removed or if your visibility status changes."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to handle the cloak's complex energy signature.",
    "vendorReason": "Hyrule is known for its deep ties with ancient guardian spirits and relics of lost power.",
    "shippingDetail": "Delivered by the Royal Courier, ensuring swift and secure transport within the kingdom.",
    "usage": {
      "activation": "Bonus action to activate invisibility; passive effect for reducing detection radius.",
      "duration": "Invisibility lasts until your next turn; detection reduction is continuous while the cloak is worn.",
      "endsWhen": "Invisibility ends if you attack, cast a spell, or are hit by an attack. Detection reduction ends when the cloak is removed or visibility status changes.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The cloak's rarity and magical properties justify its moderate price.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:56:08.930711+00:00",
    "aiReviewedAt": "2026-07-22T06:56:08.930711+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_spirit_warden_gear": {
    "id": "hyrule_spirit_warden_gear",
    "name": "Spirit Warden Gear",
    "description": "Crafted from the bones of ancient spirits and enshrined within a sacred forgeskin, Spirit Warden Gear is the armor worn by the guardians of the Temple of the Forgotten. Its whispers of wind and stone grant the wearer a shield that absorbs magical strikes with a shimmering barrier, and it subtly slows time around its wielder, making every blow seem to stretch into eternity. The gear's essence channels the sacred winds, providing a 30% chance to dodge magical projectiles during combat.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs Magical Strikes",
      "Dodges Magical Projectiles"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Absorbs Magical Strikes",
        "rules": "When a creature makes a melee attack against the wearer, Spirit Warden Gear grants a +20% defense bonus to the wearer's AC for magical attacks. This effect lasts until the end of the wearer’s next turn."
      },
      {
        "title": "Dodges Magical Projectiles",
        "rules": "The wearer has a 30% chance to dodge any incoming magical projectile during combat. This ability can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Only those who have mastered the art of balance and are at least level 6 can wield this ancient armor.",
    "vendorReason": "The sacred artifacts of Hyrule, including Spirit Warden Gear, are safeguarded by the Temple of the Forgotten for their divine craftsmanship and power.",
    "shippingDetail": "Delivered via Pipe Express with a 2-day delivery time, ensuring the armor arrives in pristine condition.",
    "usage": {
      "activation": "Passive effect during combat",
      "duration": "Until the end of the next turn or until the wearer is no longer engaged in combat",
      "endsWhen": "The wearer leaves combat or takes a long rest",
      "charges": "Unlimited, but can only be used once per short or long rest for dodging magical projectiles"
    },
    "priceReason": "Crafted from ancient materials and imbued with sacred energies, Spirit Warden Gear is priced at 1000 XP to reflect its rarity and divine craftsmanship.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T06:56:38.624913+00:00",
    "aiReviewedAt": "2026-07-22T06:56:38.624913+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_amber": {
    "id": "hyrule_temple_amber",
    "name": "Amber of the Forgotten Guardian",
    "description": "The Amber of the Forgotten Guardian is a crystalline orb, its facets shimmering with the essence of an ancient temple sentinel. When danger looms, it radiates a protective glow that shields nearby allies, and when struck by a ranged attack, it disorients foes, buying your party precious time to react. This relic’s light strengthens in moments of peril, ensuring that even the most forgotten guardian will never truly be lost.",
    "price": 1000,
    "icon": "💫",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Shield of Light",
      "Disorienting Strike"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shield of Light",
        "rules": "When an ally within 5 feet is critically endangered, activate as a reaction to grant them a shield of light that reduces incoming damage by 20% for the next three turns. This effect can only occur once per short or long rest."
      },
      {
        "title": "Disorienting Strike",
        "rules": "If an enemy within range is hit by a ranged attack, they become disoriented for 1 turn (no save). The target cannot take any actions until the start of their next turn. This effect can be triggered once per short or long rest."
      }
    ],
    "levelRequirementReason": "The guardian's spirit within demands a certain degree of experience and understanding to wield its power effectively.",
    "vendorReason": "Hyrule has preserved the ancient lore and relics, making it fitting for this sacred artifact.",
    "shippingDetail": "Due to its delicate nature, the Amber is shipped in a specially insulated container via Koopa Postal's fastest courier service.",
    "usage": {
      "activation": "Reaction (to an ally being critically endangered) or as a bonus action (for disorienting strike)",
      "duration": "Instantaneous for disorienting strike; three turns for shield of light",
      "endsWhen": "The effect ends when the duration expires, or if the target is no longer within range.",
      "charges": "Recharges after a short or long rest"
    },
    "priceReason": "Balanced against other rare items, this Amber retains its rarity and power without becoming overpowered.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T06:57:14.338580+00:00",
    "aiReviewedAt": "2026-07-22T06:57:14.338580+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_amber_key": {
    "id": "hyrule_temple_amber_key",
    "name": "Temple Amber Key",
    "description": "The Temple Amber Key is a molten key forged from the very core of an ancient temple. Its amber surface crackles with the residual heat of forgotten rituals, and when used, it releases a wave of arcane energy that resonates through the air. This key not only unlocks doors and traps but also emits a protective aura, granting +1 to all perception checks related to hidden dangers within 5 squares.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unlocking Power",
      "Perception Aura"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unlocking Power",
        "rules": "When the key is used, it unlocks any door or trap within range. If a creature attempts to open a locked door or trap with a tool, they must make a DC 15 Dexterity (Sleight of Hand) check. The user automatically succeeds on this check."
      },
      {
        "title": "Perception Aura",
        "rules": "The key grants all creatures within 5 squares +1 to Perception checks related to detecting hidden dangers or traps. This effect lasts until the end of the user's next turn and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This key is accessible early on, as it aids new adventurers in navigating ancient temples without requiring advanced skills.",
    "vendorReason": "Hyrule's renowned for its preservation of ancient artifacts and keys to forgotten realms.",
    "shippingDetail": "Pipe Express delivers this key quickly, ensuring it arrives in perfect condition without any magical interference.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for unlocking; lasts until the end of the user's next turn for Perception Aura",
      "endsWhen": "The effect ends when a creature within range successfully or fails their Perception check due to this aura, or at the start of the user’s next turn.",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its rarity and utility for adventurers navigating ancient temples.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:56:20.758387+00:00",
    "aiReviewedAt": "2026-07-22T06:56:20.758387+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_ancient_heart": {
    "id": "hyrule_temple_ancient_heart",
    "name": "Ancient Heart of the Temple Guardian",
    "description": "The Ancient Heart of the Temple Guardian is a pulsating relic, forged deep within the sacred walls of the Temple of the Ancients. This gemstone glows with an otherworldly light that pulses in time with the heartbeat of the temple itself. When struck or damaged, it releases a protective shield, absorbing blows and restoring vitality to its bearer. The ancient guardians have long revered this relic, whispering that it is a conduit between the mortal world and the divine.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Regenerates Health",
      "Absorbs Shield"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Health Regeneration",
        "rules": "The Ancient Heart regenerates 5% of the user's maximum hit points per second. This effect is passive and does not require any action to activate."
      },
      {
        "title": "Shield Absorption",
        "rules": "When struck, the Ancient Heart grants a shield that absorbs up to 20% of incoming damage as healing for the user. The shield can be activated once per short or long rest."
      }
    ],
    "levelRequirementReason": "The heart's power is accessible to all who seek it, but its strength grows with experience.",
    "vendorReason": "Hyrulean scholars and mystics have long sought the protection of this relic, and Hyrule is their primary source for such ancient artifacts.",
    "shippingDetail": "The package will be delivered by Shy Guys on bicycles, ensuring a safe but slow journey through treacherous terrain.",
    "usage": {
      "activation": "Passive and automatic once the heart is worn or held in hand.",
      "duration": "Instantaneous shield activation; health regeneration is continuous while the relic is active.",
      "endsWhen": "The relic's power fades after a short or long rest.",
      "charges": "Unlimited, but requires rest to recharge."
    },
    "priceReason": "This relic offers both defensive and healing benefits, making it a valuable asset for any adventurer.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:56:34.842665+00:00",
    "aiReviewedAt": "2026-07-22T06:56:34.842665+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_ancient_key": {
    "id": "hyrule_temple_ancient_key",
    "name": "Temple Guardian Key",
    "description": "The Temple Guardian Key, forged from sacred heartwood found only within the hidden groves of the Temple of Whispers, is a relic that unlocks ancient chambers long sealed by time and magic. Upon use, it grants the wielder temporary access to forbidden zones, revealing unseen weaknesses in both foes and defenses. The key's touch also enhances one’s chances of uncovering rare treasures within guarded areas, making it invaluable for those who seek the secrets of lost temples.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Reveals hidden enemy weaknesses",
      "Enhances treasure discovery"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Weaknesses",
        "rules": "Upon activation as a bonus action, this key grants advantage on attack rolls against enemies within the chamber for 1 minute. The effect ends if the user takes damage or enters a different zone."
      },
      {
        "title": "Enhance Treasure Discovery",
        "rules": "For 10 minutes after use, the wielder has a 25% chance to find rare loot in guarded areas. This benefit is lost if the key's uses are exhausted."
      }
    ],
    "levelRequirementReason": "This key requires a user with at least three levels of experience to activate its magic.",
    "vendorReason": "Hyrulean collectors and guardians of ancient lore sell this rare item due to its significance in unlocking lost temples.",
    "shippingDetail": "The key is delivered by spectral couriers who ensure it reaches its destination swiftly but with a slight delay for mystical handling.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute per use",
      "endsWhen": "User takes damage or enters a different zone, or the 10-minute duration expires",
      "charges": "Uses (2 charges)"
    },
    "priceReason": "The Temple Guardian Key's price reflects its rarity and the power to reveal hidden secrets within ancient temples.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T06:56:47.073083+00:00",
    "aiReviewedAt": "2026-07-22T06:56:47.073083+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_ancient_soul": {
    "id": "hyrule_temple_ancient_soul",
    "name": "Echo of the Temple’s Whisper",
    "description": "A shimmering fragment of an ancient temple's core, Echo of the Temple’s Whisper is a relic that allows you to summon a spectral guardian for combat. This ethereal spirit appears in the form of a radiant light and stands steadfast by your side, bolstered by millennia-old magic. For thirty seconds, this guardian grants you an aura of protection, reducing all incoming damage by 25%, while also increasing your attack speed by 50%. The spectral entity fades into nothingness after its time is up or if you command it to dissipate.",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Spectral Guardian",
      "Damage Reduction"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Spectral Guardian",
        "rules": "When activated, the Echo summons a radiant spectral guardian that stands at your side for thirty seconds. The guardian has 200 hit points and provides you with an additional +50% attack speed while it is present."
      },
      {
        "title": "Damage Reduction",
        "rules": "The spectral guardian grants all nearby allies within 10 feet a temporary damage resistance of 25%. This effect lasts until the guardian dissipates, which occurs after thirty seconds or when dismissed by command."
      }
    ],
    "levelRequirementReason": "Requires at least third level to channel the ancient temple's power effectively.",
    "vendorReason": "Hyrule is renowned for its connection to ancient mystical artifacts and relics, including this Echo of a long-forgotten temple.",
    "shippingDetail": "The spirit courier ensures safe and swift delivery, but the item must be used within three days of receipt.",
    "usage": {
      "activation": "Reaction",
      "duration": "30 seconds or until dismissed",
      "endsWhen": "Guardian dissipates after time limit or dismissal by command",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity, ancient origin, and the unique spectral abilities it grants make its price justified within this shop.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:56:50.916216+00:00",
    "aiReviewedAt": "2026-07-22T06:56:50.916216+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_blessing_amulet": {
    "id": "hyrule_temple_blessing_amulet",
    "name": "Temple Blessing Amulet",
    "description": "The Temple Blessing Amulet is a delicate golden pendant adorned with ancient Hylian runes. Crafted from sacred materials found deep within the Eldin Caverns, it channels divine energy to protect and guide its wearer. This amulet enhances one’s combat morale during perilous adventures, boosting courage by 15% for 8 seconds. Additionally, it grants a +5% chance to find hidden treasure, ensuring that even the most mundane exploration yields unexpected riches.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+5% chance to find hidden treasure",
      "Boosts combat morale by 15% for 8 seconds"
    ],
    "vendor": "hyrule",
    "shippedBy": "Windmill Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Morale Boost",
        "rules": "The wearer gains a +15 bonus on Charisma (Performance) checks and saving throws against fear effects. This effect lasts for 8 seconds upon activation."
      },
      {
        "title": "Treasure Hunter’s Gift",
        "rules": "When the amulet is activated, it increases the chance to find hidden treasure by +5%. This effect persists until the end of the wearer's next turn."
      }
    ],
    "levelRequirementReason": "This amulet is suitable for all adventurers, providing a foundational boost in morale and exploration.",
    "vendorReason": "The Hyrulean Vendors are known for their connection to ancient artifacts and relics of the kingdom's past.",
    "shippingDetail": "Delivered by Windmill Express, ensuring swift delivery even in the most remote areas of Hyrule.",
    "usage": {
      "activation": "A free action is required to activate the amulet’s effects.",
      "duration": "Each effect lasts for a duration as specified above.",
      "endsWhen": "The effects end at the end of the wearer's next turn or when they are destroyed by damage.",
      "charges": "Unlimited uses, with no need for recharging."
    },
    "priceReason": "Balanced at 1000 XP, this amulet provides a versatile and essential tool for any adventurer, enhancing both combat morale and exploration skills without being overpowered.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:56:55.256224+00:00",
    "aiReviewedAt": "2026-07-22T06:56:55.256224+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_blood_of_the_sundered": {
    "id": "hyrule_temple_blood_of_the_sundered",
    "name": "Blood of the Sundered",
    "description": "The Blood of the Sundered is a vial filled with dark crimson liquid that whispers of ancient horrors and lost souls. Infusing it with your blood grants you temporary invulnerability, allowing you to shrug off fatal blows for fleeting moments. It also reveals hidden temple traps, ensuring safe passage through treacherous sanctuaries. However, the relic's power is not without cost—it drains 10% of your hit points upon activation.",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invulnerability",
      "Trap Vision"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Invulnerability",
        "rules": "You gain temporary invulnerability for 5 seconds. During this time, you are immune to all damage from attacks and environmental hazards. This effect ends when the duration expires or if you take any action other than movement."
      },
      {
        "title": "Trap Vision",
        "rules": "For the next 30 seconds, you can see through hidden temple traps within a 30-foot radius. You gain advantage on Perception checks to detect such hazards and can automatically succeed on checks that would normally require a roll. This effect ends when its duration expires."
      }
    ],
    "levelRequirementReason": "The relic's power is drawn from your blood, requiring even the simplest of adventurers to have the courage to wield it.",
    "vendorReason": "Hyrulean relics are known for their unpredictable nature and powerful effects, making them a staple in Hyrule’s black market.",
    "shippingDetail": "The Blood of the Sundered is fragile and must be transported under strict conditions to prevent its power from leaking during transit.",
    "usage": {
      "activation": "Object Interaction",
      "duration": "5 seconds (Invulnerability), 30 seconds (Trap Vision)",
      "endsWhen": "Duration expires or you take an action other than movement (Invulnerability); Duration expires (Trap Vision)",
      "charges": "Unlimited"
    },
    "priceReason": "The Blood of the Sundered balances cost and value, reflecting its rare nature and powerful effects without overburdening players.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:57:02.553957+00:00",
    "aiReviewedAt": "2026-07-22T06:57:02.553957+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_blood_ritual": {
    "id": "hyrule_temple_blood_ritual",
    "name": "Blood of the Fractured Temple",
    "description": "The vial contains a single, crimson drop of blood from an ancient guardian of the Temple of Trials. Consuming it grants you temporary invincibility in the heart of the Atrium, where shifting architecture and reality rifts test even the mightiest heroes. For ten seconds, no force can harm you as you navigate the temple’s treacherous corridors, guided by a revelation that reveals the true path forward through the Atrium's ever-changing geometry.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporary Invincibility",
      "Reveal True Path"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Invincibility",
        "rules": "When consumed, you gain temporary invincibility for 10 seconds. During this time, no damage can be dealt to you by any source. This effect is instantaneous and cannot be dispelled or ended early."
      },
      {
        "title": "Reveal True Path",
        "rules": "For the duration of your temporary invincibility, you gain the ability to see through the Atrium's shifting architecture and reality rifts. You can instantly discern the true path forward without any hesitation or misdirection."
      }
    ],
    "levelRequirementReason": "Even the novice must prove their worth in the Temple of Trials, but this vial grants a crucial advantage to all who dare consume it.",
    "vendorReason": "Hyrule's ancient guardians and vendors alike recognize the value of such an item for any brave soul venturing into the temple.",
    "shippingDetail": "The vial is shipped in a specially designed, temperature-controlled container to ensure its potency remains intact during transit.",
    "usage": {
      "activation": "Consumed as an action",
      "duration": "10 seconds of temporary invincibility and the ability to reveal true paths",
      "endsWhen": "The effect ends when the duration expires or you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity, lore, and unique benefits of this vial justify its price in experienced hands.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:57:50.039507+00:00",
    "aiReviewedAt": "2026-07-22T06:57:50.039507+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_bloodstone": {
    "id": "hyrule_temple_bloodstone",
    "name": "Crimson Vessel of the Deep",
    "description": "The Crimson Vessel of the Deep is a glowing obsidian shard said to be the final remnant of Hyrule’s Temple altar. Crafted in the heart of the temple, it emits an eerie crimson light that pierces through shadows and time. It grants immunity to poison and disease for three turns, allowing one to walk unharmed through the foulest of plagues. Additionally, it enhances movement speed by 10% when traversing dark or sacred temple environs, making exploration swift and silent.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Poison & Disease",
      "Enhanced Movement Speed"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Poison & Disease",
        "rules": "The user gains immunity to poison and disease effects for three turns. This effect is triggered upon activation, lasts until the end of their next turn, and can be used once per long rest."
      },
      {
        "title": "Enhanced Movement Speed",
        "rules": "While in dark or temple environments, the user's movement speed increases by 10%. The effect is active as long as they are within these areas; it ends when leaving such locations, and can be activated once per short rest."
      }
    ],
    "levelRequirementReason": "This item is crafted for adventurers of all levels to provide a starting advantage in challenging temple environments.",
    "vendorReason": "Hyrule's vendors are well-known for their connections to ancient relics and artifacts from the Temple’s storied history.",
    "shippingDetail": "Ships via Koopa Postal with expedited delivery, ensuring timely arrival of this sacred relic.",
    "usage": {
      "activation": "Action (activate once per long rest)",
      "duration": "Three turns upon activation; ends at the end of the next turn or when used again",
      "endsWhen": "The effect expires after three turns or is reactivated for a new duration",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects its rarity and the special crafting required to produce such an artifact from the Temple of Hyrule.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:57:09.790201+00:00",
    "aiReviewedAt": "2026-07-22T06:57:09.790201+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_bone_ward": {
    "id": "hyrule_temple_bone_ward",
    "name": "Temple Bone Ward",
    "description": "The Temple Bone Ward is a ceremonial shield crafted from the bones of fallen temple guardians, each rib infused with holy energy. Its faint hum resonates with forgotten prayers and whispers warnings of impending undead incursions. When worn in sacred temples, its enchanted surface grants +1 to defense and absorbs physical damage, reducing incoming strikes by 20%. Upon contact with undead foes, it has a 30% chance to stun them momentarily.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs Physical Damage",
      "Stuns Undead on Contact"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Damage Absorption",
        "rules": "The Temple Bone Ward reduces incoming physical damage by 20% when worn. This effect is passive and lasts until the wearer takes a short or long rest."
      },
      {
        "title": "Stun on Contact",
        "rules": "When in contact with an undead foe, the shield has a 30% chance to stun it as a reaction. The stunned undead cannot take actions for one round. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The intricate enchantments and sacred nature of the Temple Bone Ward require a minimum level to properly channel its protective energies.",
    "vendorReason": "Hyrule's ancient temples are known for crafting and preserving such holy relics, ensuring their guardians have the means to defend against undead threats.",
    "shippingDetail": "Ships within three days of order placement; expedited delivery available at an additional cost.",
    "usage": {
      "activation": "Passive effect. No activation required when worn in temple zones.",
      "duration": "Permanent while worn, lasts until a short or long rest is taken.",
      "endsWhen": "Exhausted by taking a short or long rest; can be recharged with a full night's sleep.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item’s rarity, holy enchantments, and the time required for its creation justify this balanced XP price.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T06:57:28.946548+00:00",
    "aiReviewedAt": "2026-07-22T06:57:28.946548+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_core": {
    "id": "hyrule_temple_core",
    "name": "Heart of the Atrium",
    "description": "The Heart of the Atrium hums with raw, unstable power extracted from the fractured heart of Hyrule's ancient Atrium. This pulsating core amplifies the wielder’s attack during moments of reality instability but demands a toll on stamina. In temple areas, it grants the user a 10% chance to bypass terrain barriers, and for two turns, it reduces enemy regeneration by 15%, making it an invaluable tool for heroes facing Hyrule's fractured heart.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temple Terrain Bypass",
      "Enemy Regeneration Reduction"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Temple Terrain Bypass",
        "rules": "When in temple areas, the Heart of the Atrium grants the wielder a 10% chance to ignore terrain barriers. This effect is limited to one use per day."
      },
      {
        "title": "Enemy Regeneration Reduction",
        "rules": "During moments of reality instability, this core reduces enemy regeneration by 15%, lasting for two turns. It can be activated as a bonus action and has no save DC or recharge requirement."
      }
    ],
    "levelRequirementReason": "Wielders must possess the physical and mental fortitude to handle such volatile power.",
    "vendorReason": "Hyrule's ancient artifacts are meticulously preserved by the guardians of the temples, ensuring their proper use and handling.",
    "shippingDetail": "Due to its unstable nature, this item is only delivered via Koopa Postal’s secure air express service.",
    "usage": {
      "activation": "Bonus action during moments of reality instability for enemy regeneration reduction; passive effect in temple areas for terrain bypass chance.",
      "duration": "Instantaneous activation, lasting the duration of two turns for enemy regeneration reduction.",
      "endsWhen": "The core's effects end upon being destroyed or when its uses are exhausted.",
      "charges": "Unlimited daily uses"
    },
    "priceReason": "Balanced at this price to reflect the item’s unique and limited utility, ensuring it remains a valuable but not overpowered addition to any adventurer's arsenal.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T06:57:52.888372+00:00",
    "aiReviewedAt": "2026-07-22T06:57:52.888372+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_crimson_core": {
    "id": "hyrule_temple_crimson_core",
    "name": "Crimson Core of the Crimson Temple",
    "description": "The Crimson Core of the Crimson Temple hums with a raw, volcanic power, its surface crackling with crimson light. When activated, it grants the user an overwhelming aura that dominates foes within a 15-foot radius, compelling them to attack the nearest non-hostile target. This core's ancient magic comes from the heart of the temple, where it was forged in the fires of a forgotten age. Drawing on this power costs the user stamina; every turn during its use, they lose an additional 5% of their total stamina.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 0,
    "rarity": "rare",
    "effects": [
      "+20% damage to all enemies within 15 feet",
      "Compels foes to attack nearest non-hostile target"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 8,
    "effectDetails": [
      {
        "title": "Dominating Aura",
        "rules": "Activates as a bonus action. The aura lasts for 1 minute. Within this time, all hostile creatures within 15 feet must make a DC 14 Wisdom saving throw or be compelled to attack the nearest non-hostile target. This effect ends if the user drops the core or takes any damage."
      },
      {
        "title": "Stamina Drain",
        "rules": "Every turn during use, the user loses 5% of their total stamina until it is exhausted. The core can only be used once per short rest due to this strain on the user's stamina."
      }
    ],
    "levelRequirementReason": "Only those with a proven mastery of combat and magic are capable of wielding the Crimson Core's raw power without succumbing to its drain.",
    "vendorReason": "Hyrule is home to many ancient artifacts, and the Crimson Temple itself has long been a source of potent relics.",
    "shippingDetail": "Ships via the Void Drifter Relay, which ensures safe delivery but takes an additional day due to the core's unstable nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until the user drops it or takes damage",
      "endsWhen": "The user drops the core or takes damage",
      "charges": "Once per short rest"
    },
    "priceReason": "The Crimson Core's rarity and the significant stamina drain make its price fair, offering a powerful but perilous tool for seasoned adventurers.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T06:57:42.622434+00:00",
    "aiReviewedAt": "2026-07-22T06:57:42.622434+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo": {
    "id": "hyrule_temple_echo",
    "name": "Echo of the Ancient Guardian",
    "description": "The Echo of the Ancient Guardian is a crystalline artifact forged from the last breath of an ancient guardian, its surface etched with forgotten runes that shimmer like starlight. When activated, it summons a spectral echo that strikes all enemies within a 5-meter radius with devastating force, leaving them reeling in shock and pain. The guardian's final breath imbues the spell with a potent surge of magic, enhancing your allies' attacks by +30% damage for ten seconds, ensuring their next blow lands true.",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Spectral Echo",
      "Guardian's Favor"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Spectral Echo",
        "rules": "Activates as a bonus action. A spectral echo is summoned within a 5-meter radius of the user, striking all enemies in the area with a spell attack that deals 200% damage. If an enemy's hit points are below 25%, the damage increases by 50%. The effect lasts for 5 seconds and can be used once per short or long rest."
      },
      {
        "title": "Guardian's Favor",
        "rules": "Grants +30% bonus to all magic attack rolls made by allies within a 10-meter radius. This effect lasts for 10 seconds after the spectral echo is summoned and can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Only those with a deep understanding of ancient magic, such as a 7th-level spellcaster, can properly invoke the guardian's spirit.",
    "vendorReason": "The Temple of Time, in Hyrule, holds many relics from its past guardians; it only makes sense that they would have access to this powerful artifact.",
    "shippingDetail": "Shipped via the Rakasha's ethereal plane, ensuring swift and safe delivery without the risk of theft or damage.",
    "usage": {
      "activation": "Bonus action to summon the spectral echo; magic attack bonus from Guardian's Favor lasts for 10 seconds after activation.",
      "duration": "Spectral Echo lasts 5 seconds, Guardian's Favor lasts 10 seconds",
      "endsWhen": "After its duration expires or when a new use is activated",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "This artifact, crafted from the essence of an ancient guardian, commands a price that reflects both its rarity and the immense power it holds.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-22T06:58:00.381734+00:00",
    "aiReviewedAt": "2026-07-22T06:58:00.381734+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo_amulet": {
    "id": "hyrule_temple_echo_amulet",
    "name": "Temple Echo Amulet",
    "description": "The Temple Echo Amulet is a glowing pendant imbued with the essence of ancient temples. Its surface crackles with an ethereal light, and when worn, it hums with the spirits of bygone eras. This amulet grants its wearer the ability to hear the whispers of the past and detect hidden temple entrances within 20 meters. It also reveals the location of any enemies in a temple zone, aiding in stealthy maneuvers and strategic combat.",
    "category": "equipment",
    "price": 3000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Whispers of the Past",
      "Detect Hidden Entrances"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Whispers of the Past",
        "rules": "By spending an action to focus on a temple, the wearer can hear faint whispers and gain insight into past events within that location. This effect provides a +1d4 bonus to History checks made in the vicinity for 10 minutes."
      },
      {
        "title": "Detect Hidden Entrances",
        "rules": "As an action, the amulet detects hidden temple entrances within 20 meters of the wearer. This effect can be used once per short or long rest and requires a successful Wisdom (Perception) check against DC 15."
      }
    ],
    "levelRequirementReason": "The complex magic woven into the amulet demands a minimum level to fully harness its powers.",
    "vendorReason": "As a guardian of ancient lore and history, Hyrule is entrusted with artifacts that preserve the past for future generations.",
    "shippingDetail": "Shipped via Pipe Express, known for their reliable and swift deliveries across the kingdom.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous (Whispers of the Past) / 10 minutes (Perception check)",
      "endsWhen": "Used up or expended on a failed Wisdom (Perception) check",
      "charges": "Once per short or long rest"
    },
    "priceReason": "The amulet's rarity and the intricate magic required to craft it justify its high price.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T06:58:36.644601+00:00",
    "aiReviewedAt": "2026-07-22T06:58:36.644601+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo_chime": {
    "id": "hyrule_temple_echo_chime",
    "name": "Temple Echo Chime",
    "description": "The Temple Echo Chime, a resonant artifact forged from ancient temple bells, amplifies the user's voice and reveals hidden paths when spoken to. Crafted in the sacred forges of Hyrule, this chime can be heard echoing through distant walls, guiding lost heroes to their goal with its melodious call. It amplifies speech by 30%, ensuring your words carry farther than they should, while also revealing secret doors within ancient ruins—miracles of craftsmanship that only those who know the sacred language can unlock.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Speech Amplification",
      "Reveal Hidden Doors"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speech Amplification",
        "rules": "Activates on a bonus action. The user's voice is amplified, increasing its range by 30%. This effect lasts for 1 minute or until the user speaks again."
      },
      {
        "title": "Reveal Hidden Doors",
        "rules": "When spoken to, this chime can reveal hidden doors within ancient ruins. It must be used in a specific sacred language known only to those initiated into its mysteries; otherwise, no effect occurs. The effect lasts until the next long rest."
      }
    ],
    "levelRequirementReason": "This item is accessible early on for characters who need guidance and communication tools.",
    "vendorReason": "Hyrulean artisans have a deep understanding of ancient crafts, making them the perfect keepers of such relics.",
    "shippingDetail": "Delivered with Pipe Express, known for their reliable and speedy deliveries within Hyrule.",
    "usage": {
      "activation": "Bonus action to activate speech amplification; spoken command to reveal hidden doors.",
      "duration": "Speech amplification lasts for 1 minute or until the user speaks again. Revealing hidden doors is instantaneous but only once per short rest.",
      "endsWhen": "The effects end when the duration expires, a long rest is taken, or the item's use limit is reached.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item’s rarity and utility justify its price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:58:30.644126+00:00",
    "aiReviewedAt": "2026-07-22T06:58:30.644126+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo_cloak": {
    "id": "hyrule_temple_echo_cloak",
    "name": "Whispering Cloak of the Oracle",
    "description": "Woven from the voice of ancient guardians, the Whispering Cloak of the Oracle is a shimmering garment that whispers secrets of forgotten realms into your ear. As you step into ancient ruins, it amplifies the subtle sounds of hidden traps and puzzles, guiding you to their location with eerie precision. Worn in the presence of relics or artifacts, the cloak can even ‘speak’ on behalf of these silent objects, providing cryptic yet invaluable information.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Hear Hidden Secrets",
      "Detect Traps and Puzzles"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Hear Hidden Secrets",
        "rules": "The wearer gains advantage on Wisdom (Insight) checks to discern hidden secrets or truths. This effect is active while the cloak is worn."
      },
      {
        "title": "Detect Traps and Puzzles",
        "rules": "When within 30 feet of a trap or puzzle, the wearer can use an action to gain passive Perception (Investigation) insight into its nature. The DC for this check is equal to 10 + the trap's or puzzle's level."
      }
    ],
    "levelRequirementReason": "This cloak offers a significant advantage in exploring ancient ruins, making it accessible early on.",
    "vendorReason": "Hyrule is renowned for its rich history and connection to ancient lore, making it fitting that the Oracle's Whispering Cloak originates from there.",
    "shippingDetail": "The cloak arrives within a week but requires careful handling due to its delicate nature.",
    "usage": {
      "activation": "Passive effect while worn; no activation required.",
      "duration": "Instantaneous with each check, until the wearer removes it or leaves the area of effect.",
      "endsWhen": "The cloak is removed from the wearer's body or they leave the immediate vicinity of traps and puzzles.",
      "charges": "Unlimited"
    },
    "priceReason": "Reflecting its rarity, this item provides significant utility early in a character’s journey but does not grant overpowered abilities.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:58:20.140419+00:00",
    "aiReviewedAt": "2026-07-22T06:58:20.140419+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo_gear": {
    "id": "hyrule_temple_echo_gear",
    "name": "Echoing Temple Gear",
    "description": "The Echoing Temple Gear is forged from the whispering stones of Hyrule's Great Temple of Twilight. This ancient artifact amplifies the wielder’s ability to hear and understand the ancient chants that guide through hidden passages. Crafted with the essence of twilight, it grants a passive sense of the temple’s layout within 20 meters, ensuring no secret path remains undiscovered. Its resonance fades after 30 seconds, leaving the user prepared for the next challenge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Amplifies Ancient Chants",
      "Passive Temple Awareness"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Amplifies Ancient Chants",
        "rules": "The wielder gains advantage on Intelligence (History) checks related to ancient Hyrulean lore and can unlock hidden passages within the temple. This effect lasts until its resonance fades after 30 seconds."
      },
      {
        "title": "Passive Temple Awareness",
        "rules": "The user has passive perception of temple entrances within a 20-meter radius, allowing them to detect secret doors or other concealed paths without requiring an action."
      }
    ],
    "levelRequirementReason": "This gear is designed for adventurers who are just beginning their journey into the mysteries of Hyrule's temples.",
    "vendorReason": "Hyrulean vendors like to stock items that resonate with the history and culture of the land, making this artifact a natural fit.",
    "shippingDetail": "Ships via a spirit courier ensuring swift delivery within Hyrule’s sacred grounds.",
    "usage": {
      "activation": "Passive effect active; no activation required.",
      "duration": "30 seconds, until resonance fades.",
      "endsWhen": "Resonance fades after 30 seconds or when the user enters a new location.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The gear’s rarity and historical significance justify its moderate price, aligning with other rare items in Hyrule.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:58:13.695391+00:00",
    "aiReviewedAt": "2026-07-22T06:58:13.695391+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo_ring": {
    "id": "hyrule_temple_echo_ring",
    "name": "Temple Echo Ring",
    "description": "The Temple Echo Ring hums with the ancient power of Hyrule's sacred temples, its surface etched with runes that whisper protective chants. When worn, it allows the wearer to dodge incoming attacks with uncanny precision and summons a shimmering shield that reduces damage by 10% for a short time upon being struck. The ring is said to have been crafted in the heart of the Temple of Time, where its origins are shrouded in legend.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Dodges Next Attack",
      "Summons Temporary Shield"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Dodge Next Attack",
        "rules": "When you take damage from an attack while wearing the ring, you have a 25% chance to dodge it. This effect can only occur once per short or long rest."
      },
      {
        "title": "Summons Temporary Shield",
        "rules": "If you are hit by an attack, the Temple Echo Ring creates a shimmering shield that reduces the damage taken from that attack by 10%, lasting for 1 minute. You can activate this ability once per long rest."
      }
    ],
    "levelRequirementReason": "The ring's ancient power requires a level 5 character to wield, ensuring it is not overpowered.",
    "vendorReason": "Hyrulean artisans are skilled in crafting relics that bridge the gap between myth and reality, making this ring a natural addition to their offerings.",
    "shippingDetail": "Delivered via the magical pipes that crisscross Hyrule, ensuring swift delivery directly from the Temple of Time.",
    "usage": {
      "activation": "Reaction (once per long rest)",
      "duration": "1 minute upon being hit by an attack",
      "endsWhen": "The duration ends when the ring is removed or destroyed, or after 1 minute has passed.",
      "charges": "Once per long rest"
    },
    "priceReason": "The ring's rare crafting materials and ancient magic make it a valuable yet balanced addition to any adventurer's arsenal.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:59:07.847798+00:00",
    "aiReviewedAt": "2026-07-22T06:59:07.847798+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo_shard": {
    "id": "hyrule_temple_echo_shard",
    "name": "Temple Echo Shard",
    "description": "The Temple Echo Shard, a shimmering fragment of ancient temple resonance, hums with forgotten prayers and whispers of hidden lore. When wielded in combat, it amplifies the spirit of its bearer, granting temporary insight into the sacred geometry of the temple. The shard’s resonant hum can reveal secret doorways or traps, offering a fleeting glimpse into the unknown. Upon contact with magical forces, it momentarily reduces their resistance to arcane attacks, allowing for more potent and precise spells.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+15% damage against temple enemies",
      "Grants 10% chance to reveal hidden doorways or traps"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Hazards",
        "rules": "When the wielder is within 30 feet of a concealed trap or secret doorway, they have a 10% chance to immediately detect it. This effect lasts for 1 minute and can be used once per short or long rest."
      },
      {
        "title": "Enhanced Magical Resistance",
        "rules": "For the duration of one encounter, when the wielder successfully hits an enemy with a magic attack, they reduce that enemy’s magical resistance by 20% for 5 seconds. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The shard is accessible to beginners who are eager to explore and protect sacred temples.",
    "vendorReason": "Hyrule, the guardian of ancient knowledge, sells this relic to adventurers seeking to uncover forgotten secrets and legends.",
    "shippingDetail": "This item is carefully packed in a custom Hyrulean crate and delivered by Pipe Express within 3 days.",
    "usage": {
      "activation": "Instantaneous action when the wielder is within 30 feet of a concealed area or magical force.",
      "duration": "1 minute for 'Reveal Hidden Hazards', encounter for 'Enhanced Magical Resistance'",
      "endsWhen": "The duration ends naturally, or the effect can be expended once per rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Temple Echo Shard is moderately priced given its unique abilities to aid in exploration and combat within temple environments.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:59:32.642661+00:00",
    "aiReviewedAt": "2026-07-22T06:59:32.642661+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echo_sword": {
    "id": "hyrule_temple_echo_sword",
    "name": "Echo of the Temple Blade",
    "description": "The Echo of the Temple Blade is a sword forged from the echoes of ancient temples, its hilt adorned with runes that glow faintly in the dark. It strikes with divine precision, leaving spectral imprints on foes and resonating with the spirits of forgotten guardians who once defended these sacred grounds. The blade's touch can be felt even when wielded far from temple ruins, though its power wanes outside such hallowed spaces.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echoing Strikes",
      "Guardian Summoning"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoing Strikes",
        "rules": "When the Echo of the Temple Blade strikes an enemy within temple ruins, it deals 120% damage and has a 15% chance to stagger the target for 2 turns. This effect can occur once every 3 attacks."
      },
      {
        "title": "Guardian Summoning",
        "rules": "By concentrating on the sword's runes (a bonus action), you may summon a ghostly guardian that grants you a +1 bonus to AC and provides a 10% resistance to magical damage for 3 turns. The guardian can only be summoned once per short rest."
      }
    ],
    "levelRequirementReason": "The blade's echo requires the wielder to have mastered basic swordsmanship and be attuned to the spiritual energies of ancient temples.",
    "vendorReason": "Hyrule is renowned for its connection to ancient sites, making it a fitting vendor for this sacred weapon.",
    "shippingDetail": "Ships within three days with tracking enabled; fragile items must be handled with care.",
    "usage": {
      "activation": "Instantaneous (requires concentration on Guardian Summoning)",
      "duration": "3 turns for Echoing Strikes, once per short rest for Guardian Summoning",
      "endsWhen": "Ends when the target of Echoing Strikes is no longer in temple ruins or guardian's effects expire",
      "charges": "Unlimited; regenerates after 24 hours"
    },
    "priceReason": "Balanced to reflect its divine craftsmanship and sacred powers, this sword justifies a price that is both fair and challenging for players of suitable level.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:58:59.630262+00:00",
    "aiReviewedAt": "2026-07-22T06:58:59.630262+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echoes": {
    "id": "hyrule_temple_echoes",
    "name": "Temple Echoes of the Forgotten",
    "description": "The Temple Echoes of the Forgotten amulet is a shimmering, ancient pendant crafted from the very heart of Hyrule's lost temples. Its surface glows faintly as it hums with the whispers of forgotten secrets. When worn, it reveals hidden paths and doorways in dungeons, offering invaluable assistance to explorers seeking relics. The echoes subtly boost combat awareness during battles, sharpening senses by 20% and slightly increasing HP regeneration after each encounter.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals Hidden Entrances",
      "Combat Awareness Boost"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveals Hidden Entrances",
        "rules": "When worn, the amulet can be activated as a bonus action to reveal hidden dungeon entrances within 30 feet. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Combat Awareness Boost",
        "rules": "The wearer gains a +20 bonus to Insight checks related to combat awareness until the start of their next turn after using this amulet. This effect is instantaneous and does not require an action or reaction, but it can be used only once per day."
      }
    ],
    "levelRequirementReason": "The amulet's power is accessible to all adventurers who seek lost relics.",
    "vendorReason": "Hyrule is renowned for its expertise in crafting items that connect adventurers with ancient lore and forgotten secrets.",
    "shippingDetail": "The amulet arrives within a week, sealed in an enchanted container that protects it from magical tampering.",
    "usage": {
      "activation": "Bonus action to reveal hidden entrances; no activation for combat awareness boost.",
      "duration": "1 minute for revealing hidden entrances; instantaneous for combat awareness boost.",
      "endsWhen": "Ends when the duration expires or a short rest is taken after using it.",
      "charges": "Rechargeable daily"
    },
    "priceReason": "The amulet's rarity and unique properties make it a valuable tool for explorers, justifying its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-24T23:24:02.298456+00:00",
    "aiReviewedAt": "2026-07-24T23:24:02.298456+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_echoing_crown": {
    "id": "hyrule_temple_echoing_crown",
    "name": "Echoing Crown of the Fallen Sage",
    "description": "The Echoing Crown of the Fallen Sage, a relic of Hyrule’s sacred temples, whispers ancient magic into the ears of its wearer. Crafted from enchanted silver and inlaid with runes that glow faintly under torchlight, it amplifies the strength and wisdom of those who dare to wear it within the temple’s hallowed halls. Those who wield this crown can call upon a guardian spirit for 15 seconds, bolstering their allies' resilience and striking fear into the hearts of enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🏯",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "+30% damage against temple guardians",
      "Summons a temporary Guardian Spirit"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Guardian Spirit",
        "rules": "Activates as an action, creating a protective spirit that grants +2 bonus to AC and advantage on saving throws for the wearer and nearby allies within 10 feet. Lasts for 15 seconds or until dismissed."
      },
      {
        "title": "Increased Temple Damage",
        "rules": "Grants +30% damage against temple guardians, with a maximum of +2 bonus to attack rolls during this duration."
      }
    ],
    "levelRequirementReason": "The crown’s ancient magic requires the wearer to have mastered basic combat skills.",
    "vendorReason": "Hyrule is renowned for its sacred relics and ancient artifacts, making it fitting that this powerful item be sold there.",
    "shippingDetail": "Delivered with a Shy Guy delivery slip ensuring safe arrival within three days.",
    "usage": {
      "activation": "Action to summon Guardian Spirit; bonus action for increased damage against temple guardians.",
      "duration": "15 seconds or until dismissed",
      "endsWhen": "Dismissed by the wearer, or when the duration expires",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The crown’s rarity and ancient power justify a price of 1000 XP.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T06:59:29.681628+00:00",
    "aiReviewedAt": "2026-07-22T06:59:29.681628+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_essence": {
    "id": "hyrule_temple_essence",
    "name": "Ruin’s Whisper",
    "description": "Ruin’s Whisper is a crystalline shard forged from the ancient heart of the Temple of the Lost Echoes. Infused with dark magic, it amplifies spell damage by 20% and grants fleeting recall of your last battle for 3 seconds upon death, allowing you to relive the combat in vivid memory. This relic, crafted in a ritual that defies time itself, is a symbol of the temple’s lost power.",
    "price": 1000,
    "icon": "📦",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "+20% Spell Damage",
      "Fleeting Battle Recall"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "+20% Spell Damage",
        "rules": "Activates as a bonus action. The spell damage of all spells cast is increased by 20%. This effect lasts until the start of your next turn."
      },
      {
        "title": "Fleeting Battle Recall",
        "rules": "Triggers upon death, providing a brief memory recall of the caster’s last battle for 3 seconds. The caster can relive and review this combat in vivid detail as a reaction to an attack that deals damage to them."
      }
    ],
    "levelRequirementReason": "This relic is accessible to all adventurers, as it aids in their earliest battles without imposing a steep level barrier.",
    "vendorReason": "Hyrule, being the cradle of ancient magic and lore, holds this shard within its vast archives for scholars and brave souls alike.",
    "shippingDetail": "Delivered by spectral messengers; may arrive on time or slightly delayed due to their whimsical nature.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The start of your next turn",
      "charges": "Unlimited"
    },
    "priceReason": "This relic strikes a balance between its potent magical effects and accessibility, ensuring it remains valuable without being overpowered.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T06:59:22.299953+00:00",
    "aiReviewedAt": "2026-07-22T06:59:22.299953+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_forged_blade": {
    "id": "hyrule_temple_forged_blade",
    "name": "Tempest’s Edge",
    "description": "Tempest’s Edge is a blade forged from the shattered heart of an ancient temple guardian, its surface etched with runes that pulse like living veins. The sword hums with residual magic, capable of cleaving through both shadow and stone, and it echoes with the forgotten rituals of a bygone era. When wielded within a temple’s sacred confines, Tempest’s Edge amplifies its power, dealing extra damage to enemies ensconced in the holy ground.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "+20% Damage against Shadowfell Enemies",
      "Temple Echo"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temple Echo",
        "rules": "When within a temple zone, Tempest’s Edge deals an additional +15 damage to enemies. This effect lasts until the end of your next turn or until you leave the temple area."
      },
      {
        "title": "+20% Damage against Shadowfell Enemies",
        "rules": "Tempest’s Edge inflicts 20% increased damage on all attacks against Shadowfell creatures. This bonus applies every time you attack a Shadowfell enemy, but not more than once per turn."
      }
    ],
    "levelRequirementReason": "The blade's ancient magic and the rituals it embodies demand a seasoned warrior with at least five levels to wield it effectively.",
    "vendorReason": "Hyrule is renowned for its deep ties to ancient artifacts and relics, making it a fitting vendor for Tempest’s Edge.",
    "shippingDetail": "Ships via Lakitu Drones with expedited delivery within three days of purchase.",
    "usage": {
      "activation": "Instantaneous effect upon entering a temple zone; duration lasts until the end of your next turn or leaving the area.",
      "duration": "Until the end of your next turn or when you leave the temple zone.",
      "endsWhen": "The bonus damage from Temple Echo ends either at the end of your next turn or when you exit the temple’s sacred confines.",
      "charges": "Unlimited, as long as you remain within a temple zone."
    },
    "priceReason": "The blade's rare crafting materials and ancient magic justify its price of 1000 XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T07:00:12.048843+00:00",
    "aiReviewedAt": "2026-07-22T07:00:12.048843+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_fragments": {
    "id": "hyrule_temple_fragments",
    "name": "Echoing Temple Shard",
    "description": "The Echoing Temple Shard is a fragment of ancient craftsmanship, its surface etched with runes of forgotten lore. Crafted from the heartwood of an enchanted tree that once grew in the sacred grounds of the Temple of the Forgotten, this relic hums with residual magic that resonates with the spirits of long-lost guardians. It grants temporary immunity to silence and confusion, allowing you to speak your truth even under duress. When within 100 feet of a temple ruin, it amplifies your critical hits by 15%, ensuring that your most devastating blows are truly unforgettable.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Silence & Confusion Immunity",
      "Enhanced Critical Hits"
    ],
    "vendor": "hyrule",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Silence & Confusion Immunity",
        "rules": "When you enter a state of silence or confusion, this shard grants temporary immunity to these effects. This effect lasts until the start of your next turn after entering the state."
      },
      {
        "title": "Enhanced Critical Hits",
        "rules": "While within 100 feet of a temple ruin, any melee weapon attack you make deals an additional +2d6 damage on a critical hit. This effect is limited to one use per long rest."
      }
    ],
    "levelRequirementReason": "This shard's power draws from ancient magic that is accessible to all who seek it.",
    "vendorReason": "Hyrule, as a guardian of ancient sites and relics, naturally possesses this item for its cultural significance.",
    "shippingDetail": "Ships via the fastest spirit courier service, ensuring swift delivery from the Temple grounds to your doorstep.",
    "usage": {
      "activation": "Passive effect when within range of a temple ruin.",
      "duration": "Instantaneous for immunity; limited to one use per long rest for enhanced critical hits.",
      "endsWhen": "The effect ends upon entering silence or confusion, or after one successful critical hit with the weapon.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price point to reflect its rare material and ancient magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T06:59:47.916248+00:00",
    "aiReviewedAt": "2026-07-22T06:59:47.916248+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_fury_amulet": {
    "id": "hyrule_temple_fury_amulet",
    "name": "Fury of the Temple Guardian",
    "description": "The Fury of the Temple Guardian is an amulet forged from the heart of ancient Hyrulean temples. It channels the wrath and resilience of guardian spirits, enhancing your melee prowess in combat. Upon activation, it grants a surge of strength, boosting your attack speed by 30% and increasing damage output by 25%, but be wary—its power comes at a cost; after a critical hit, you are drenched in an armor-like barrier for three turns, temporarily bolstering your defense to the max.",
    "category": "equipment",
    "price": 2800,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Melee Boost",
      "Critical Armor"
    ],
    "vendor": "hyrule",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Melee Boost",
        "rules": "Activates as a bonus action. Increases melee attack speed by 30% and damage by 25% for 10 seconds, after which the effects dissipate."
      },
      {
        "title": "Critical Armor",
        "rules": "After landing a critical hit with any weapon, you are enveloped in an armor-like barrier that grants 100% armor for three turns. This effect can only occur once per combat."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to wield the amulet's power and channel its ancient magic effectively.",
    "vendorReason": "Hyrule is renowned for its mastery of sacred relics, making it a fitting vendor for this divine artifact.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, the amulet arrives in pristine condition, ready to be activated upon receipt.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds per activation",
      "endsWhen": "After landing a critical hit or when the duration ends",
      "charges": "Unlimited, but can only activate once after a critical hit"
    },
    "priceReason": "The amulet's price reflects its rare material and the ancient craftsmanship required to forge it.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T06:59:47.924249+00:00",
    "aiReviewedAt": "2026-07-22T06:59:47.924249+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heart": {
    "id": "hyrule_temple_heart",
    "name": "Temple Heart of the Unbroken",
    "description": "The Temple Heart of the Unbroken, forged deep within Hyrule's sacred temples, pulses with an ancient energy that grants the wearer a momentary defiance against harm. When struck twice in combat, it activates to grant invulnerability for thirty seconds, allowing you to shrug off the next two attacks. Additionally, while active, this relic restores 10% of your maximum hit points every ten seconds, ensuring you remain battle-ready through prolonged skirmishes.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Invulnerability on Consecutive Hits",
      "Hit Point Regeneration"
    ],
    "vendor": "hyrule",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Invulnerability on Consecutive Hits",
        "rules": "When the wearer of the Temple Heart is struck twice consecutively in combat, it activates to grant invulnerability for thirty seconds. During this time, they are immune to all damage and status effects. The effect ends when the duration expires or if the wearer takes any form of damage."
      },
      {
        "title": "Hit Point Regeneration",
        "rules": "While active, the relic restores 10% of the wearer's maximum hit points every ten seconds. This effect is limited to a maximum of five restorations per long rest and ends when the relic is expended or destroyed."
      }
    ],
    "levelRequirementReason": "The intricate magic and divine craftsmanship required for its creation necessitate at least sixth-level proficiency to wield effectively.",
    "vendorReason": "Hyrule's priests and scholars, who have safeguarded the relic since its creation, are entrusted with its distribution.",
    "shippingDetail": "The Void Drifter Relay ensures timely delivery via a secure, starship courier service.",
    "usage": {
      "activation": "Passive effect upon equipping and activation by consecutive hits in combat.",
      "duration": "Thirty seconds per activation.",
      "endsWhen": "Ends when the duration expires or wearer takes damage.",
      "charges": "Unlimited, but limited to five restorations per long rest."
    },
    "priceReason": "The relic's balanced price reflects its significant power and rarity without breaking game balance.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T07:01:01.106532+00:00",
    "aiReviewedAt": "2026-07-22T07:01:01.106532+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heart_brooch": {
    "id": "hyrule_temple_heart_brooch",
    "name": "Brooch of the Temple Heart",
    "description": "The Brooch of the Temple Heart, crafted from the very core of Hyrule's ancient Temple of the Unbroken, pulses with a steady energy that resonates like the heart of the temple itself. When worn in combat, it channels this power to grant a protective aura and restore vitality. This relic not only enhances your defense against magical attacks but also ensures you recover lost health over time after resting.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+30% resistance to magical damage",
      "Restores 150 HP every minute while inactive"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Magical Defense Boost",
        "rules": "Activates as a reaction when exposed to a magical attack. Provides +30% resistance against such attacks for the next round."
      },
      {
        "title": "Healing Pulse",
        "rules": "Restores 150 HP every minute while the wearer is inactive and not engaged in combat. Ends if the wearer enters battle or uses any consumable healing items."
      }
    ],
    "levelRequirementReason": "The brooch's ancient magic can be harnessed by even the most novice adventurers.",
    "vendorReason": "Hyrule is renowned for its preservation of ancient relics and artifacts, making it the ideal vendor for such a powerful item.",
    "shippingDetail": "Packages are dispatched with Koopa Postal's fastest delivery service to ensure your brooch arrives in pristine condition.",
    "usage": {
      "activation": "Reaction (only once per combat)",
      "duration": "Instantaneous effect; lasts for the next round after activation",
      "endsWhen": "The wearer enters combat or uses a consumable healing item",
      "charges": "Unlimited, but requires at least one minute of inactivity to recharge"
    },
    "priceReason": "Balanced against other rare items of similar power and functionality.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T19:45:42.919871+00:00",
    "aiReviewedAt": "2026-07-22T19:45:42.919871+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heart_core": {
    "id": "hyrule_temple_heart_core",
    "name": "Heart Core of the First Temple",
    "description": "The Heart Core of the First Temple is a pulsating relic carved from the sacred stone of the Temple of Time. Its origins are shrouded in the legends of ancient Hyrule, and it hums with the raw essence of the Guardians who once defended the temple. When activated, this core summons a spectral guardian that fights alongside you during combat, delivering devastating blows to foes while providing a shield against incoming attacks.",
    "category": "equipment",
    "price": 4800,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Spectral Guardian",
      "Guardian Shield"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 7,
    "effectDetails": [
      {
        "title": "Spectral Guardian",
        "rules": "As an action, the user can summon a spectral guardian that fights by their side. The guardian deals 200% damage to enemies and lasts for 1 minute or until destroyed."
      },
      {
        "title": "Guardian Shield",
        "rules": "While the spectral guardian is active, you have resistance to all non-magical damage. This effect ends if the guardian takes any damage."
      }
    ],
    "levelRequirementReason": "The core's ancient magic demands a user of at least 7th level to channel its power.",
    "vendorReason": "Hyrule is the keeper and custodian of many relics from the Temple of Time, including this sacred Heart Core.",
    "shippingDetail": "Delivered via Pipe Express, known for its swift and reliable courier service in Hyrule.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until destroyed",
      "endsWhen": "Guardian takes damage or is dismissed",
      "charges": "Unlimited"
    },
    "priceReason": "The relic's rarity and the power it provides justify its high price in the market.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T07:00:02.199468+00:00",
    "aiReviewedAt": "2026-07-22T07:00:02.199468+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heart_gem": {
    "id": "hyrule_temple_heart_gem",
    "name": "Heart of the Temple Gem",
    "description": "The Heart of the Temple Gem pulses with an ancient, otherworldly energy, its facets shimmering with hues of gold and crimson as if forged from the very soul of Hyrule’s sacred temples. This pulsating crystal, born in the sanctum of a long-lost temple, grants the wearer enhanced healing and the ability to see hidden paths within the temple walls. When activated, it releases a radiant glow that mends wounds with ethereal precision, while also revealing secret routes previously veiled from sight.",
    "price": 1000,
    "icon": "💎",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Enhanced Healing",
      "Vision of Hidden Paths"
    ],
    "vendor": "hyrule",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Healing",
        "rules": "Activates as a bonus action. Restores 50% of the user's hit point maximum and grants temporary immunity to all forms of damage for 1 minute upon activation."
      },
      {
        "title": "Vision of Hidden Paths",
        "rules": "Grants the user a +3 insight bonus on Perception checks to detect hidden or secret doors within a temple, but only during the first hour after the gem is activated. Lasts until the end of the session."
      }
    ],
    "levelRequirementReason": "The Heart of the Temple Gem's power is accessible to all adventurers, as its ancient magic can be harnessed by anyone willing to seek it.",
    "vendorReason": "Hyrule’s renowned vendors, known for their vast knowledge and connections within the kingdom, regularly stock this rare item due to its revered history and practical utility in temple exploration.",
    "shippingDetail": "Ships via Koopa Postal with expedited delivery, ensuring adventurers receive their gem safely and promptly.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous (Enhanced Healing) / Until the end of the session (Vision of Hidden Paths)",
      "endsWhen": "The effect ends when the user takes damage or at the end of the session (whichever comes first).",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this gem's price reflects its rarity and the valuable benefits it offers to adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:00:31.308508+00:00",
    "aiReviewedAt": "2026-07-22T07:00:31.308508+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heart_ore": {
    "id": "hyrule_temple_heart_ore",
    "name": "Temple Heart Ore",
    "description": "Temple Heart Ore gleams faintly in the dark, a mineral harvested from the sacred core of Hyrule’s ancient temple. When consumed, it not only restores stamina but also grants the user temporary vision to detect hidden traps and hazards, invaluable for navigating treacherous dungeons or avoiding unseen perils. In darkness, its glow intensifies, heightening one's senses, yet at a cost: while temporarily sharper-eyed, the user becomes slightly more vulnerable to damage.",
    "price": 1000,
    "icon": "💊",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Restores Stamina",
      "Detects Hidden Traps"
    ],
    "vendor": "hyrule",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stamina Restoration",
        "rules": "When consumed, Temple Heart Ore restores 20% of the user’s maximum stamina. This effect is instantaneous."
      },
      {
        "title": "Trap Detection",
        "rules": "For 10 seconds after consumption, the user gains advantage on Perception checks to detect hidden traps and hazards. This effect ends when the duration expires or if the user takes damage in combat."
      }
    ],
    "levelRequirementReason": "The simplicity of extracting and consuming this ore makes it accessible even for lower-level adventurers.",
    "vendorReason": "Hyrule’s extensive mining operations ensure a steady supply of Temple Heart Ore, which is readily available to all travelers and explorers.",
    "shippingDetail": "Delivered via Pipe Express, this ore arrives fresh from the mines within a day, ensuring its potency remains unimpaired.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "10 seconds or until the user takes damage in combat",
      "endsWhen": "Duration expires or user takes damage",
      "charges": "Unlimited"
    },
    "priceReason": "This ore is moderately priced, reflecting its common origin and practical utility for adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:45:44.572949+00:00",
    "aiReviewedAt": "2026-07-22T19:45:44.572949+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heart_pendant": {
    "id": "hyrule_temple_heart_pendant",
    "name": "Heart of the Atronian Vault",
    "description": "The Heart of the Atronian Vault hangs heavy upon the neck, its blackened crystal pulsing with a faint, otherworldly glow. Crafted from the heart of an ancient guardian and forged in the shadowy flames of the Temple of Shadows, this pendant amplifies one's courage in the face of darkness. When near sacred ruins, it resonates with the spirits of long-dead guardians, granting a defensive boon and drawing dark creatures to their doom.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Absorbs Negative Energy",
      "Defensive Resonance"
    ],
    "vendor": "hyrule",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Guardian Echo",
        "rules": "When within 10 meters of temple structures, the Heart of the Atronian Vault activates a Guardian Echo. For each dark creature within this radius, you gain a +2 bonus to your AC and damage rolls against them until the start of your next turn."
      },
      {
        "title": "Defensive Resonance",
        "rules": "When near ancient ruins (within 50 feet), the Heart amplifies your defensive prowess by granting a +15% increase in AC for 1 minute. This effect can be triggered up to three times per long rest."
      }
    ],
    "levelRequirementReason": "The intricate magic within requires a level of at least 3 to properly harness.",
    "vendorReason": "Hyrule's master artisans are the only ones capable of forging such powerful relics from ancient materials.",
    "shippingDetail": "Delivered by Shy Guys, known for their timely and discreet deliveries within Hyrule.",
    "usage": {
      "activation": "Passive effect when near sacred ruins; Guardian Echo activated as a bonus action within 10 meters of temple structures.",
      "duration": "Guardian Echo lasts until the start of your next turn. Defensive Resonance lasts for 1 minute, recharging after a long rest.",
      "endsWhen": "Guardian Echo ends when you move more than 20 feet away from a temple structure or when a dark creature is no longer within range.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from ancient guardian hearts and shadow flames, this pendant's price reflects its rare materials and potent magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T07:01:01.090023+00:00",
    "aiReviewedAt": "2026-07-22T07:01:01.090023+00:00",
    "aiReviewVersion": 1
  },
  "hyrule_temple_heart_pulse": {
    "id": "hyrule_temple_heart_pulse",
    "name": "Heart Pulse of the Temple",
    "description": "The Heart Pulse of the Temple, a pulsating core forged from the ancient Echoes, resonates with the very heartbeat of Hyrule's sacred architecture. When activated, it grants a burst of speed to the wielder and their allies within a five-meter radius for ten seconds. The artifact's pulse also heals one ally up to 30% of their maximum hit points, restoring both body and spirit in an instant.",
    "price": 1000,
    "icon": "🔮",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Heals Ally",
      "Boosts Speed"
    ],
    "vendor": "hyrule",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Healing Pulse",
        "rules": "When activated as a bonus action, the Heart Pulse heals one ally within five meters up to 30% of their maximum hit points. The effect ends if the user or target is incapacitated."
      },
      {
        "title": "Swift Step",
        "rules": "The user and all allies within three meters gain a +20 feet movement speed bonus for ten seconds when the Heart Pulse is activated as a reaction to an opportunity attack. This effect ends if the user or any ally moves more than 30 feet."
      }
    ],
    "levelRequirementReason": "The Heart Pulse's ancient power is accessible to all adventurers, making it a starting gift for those who seek to protect Hyrule.",
    "vendorReason": "Hyrule's vendors are entrusted with the temple's relics to ensure they fall into capable hands that can harness their sacred energy.",
    "shippingDetail": "The Boo Spectral Mail ensures swift and safe delivery of the Heart Pulse, as it is a revered artifact of Hyrule.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Ten seconds for healing; ten seconds for speed boost",
      "endsWhen": "Target incapacitated or user moves more than 30 feet",
      "charges": "Unlimited, but requires a short rest to recover the speed bonus"
    },
    "priceReason": "The Heart Pulse's price reflects its rare origin and the sacred energy it holds, making it a valuable starting gift for any adventurer.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T07:01:14.999286+00:00",
    "aiReviewedAt": "2026-07-22T07:01:14.999286+00:00",
    "aiReviewVersion": 1
  }
};
