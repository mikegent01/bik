// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_083 = {
  "leclaire_isle_item_mk_27_frosted_rolls_of_silent_decay": {
    "id": "leclaire_isle_item_mk_27_frosted_rolls_of_silent_decay",
    "name": "Mk.27 Frosted Rolls of Silent Decay",
    "description": "The Mk.27 Frosted Rolls of Silent Decay are eerily perfect pastries coated in a shimmering frost that seems to absorb light, reflecting the moon's glow. Consuming these rolls grants temporary resistance against psychic attacks and provides +5 to Charisma checks due to their unsettling appearance. The rolls offer a chance for prophetic dreams, which can be both comforting and terrifying, revealing fragments of L'Eclaire Isle’s forgotten past.",
    "category": "equipment",
    "price": 1000,
    "icon": "💀",
    "stock": 8,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Psychic Resistance",
      "Charisma Boost"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "Phantom Parceler",
    "levelRequirement": 30,
    "effectDetails": [
      {
        "title": "Psychic Resistance",
        "rules": "When consumed, the rolls grant temporary resistance to psychic damage for an hour. This effect ends if the consumer takes any psychic damage or at the end of their next long rest."
      },
      {
        "title": "Charisma Boost",
        "rules": "The rolls provide a +5 bonus to Charisma checks and saves made within 10 minutes of consumption. This effect is cumulative with other bonuses but does not stack with similar effects from other sources. The duration ends once the consumer has used this benefit or at the end of their next long rest."
      }
    ],
    "levelRequirementReason": "The complexity and power of these rolls are best suited for seasoned adventurers who can handle their effects without succumbing to paranoia.",
    "vendorReason": "Pastry Palace is renowned for its unique and powerful pastries, making the Frosted Rolls a fitting addition to their offerings.",
    "shippingDetail": "The Phantom Parceler ensures that these delicate rolls arrive in perfect condition through special cold chain packaging and rapid delivery.",
    "usage": {
      "activation": "Eaten as a meal or snack",
      "duration": "1 hour, until consumed or interrupted by psychic damage",
      "endsWhen": "At the end of the consumer's next long rest or if they take any psychic damage",
      "charges": "Unlimited"
    },
    "priceReason": "The rarity and power of these rolls justify their relatively high price, offering significant benefits that are otherwise difficult to obtain.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:38:19.897991+00:00",
    "aiReviewedAt": "2026-07-25T03:38:19.897991+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_the_mythic_roll_of_eternal_frosting": {
    "id": "leclaire_isle_item_the_mythic_roll_of_eternal_frosting",
    "name": "The Mythic Roll of Eternal Frosting",
    "description": "The Mythic Roll of Eternal Frosting, an impossibly large confection encased in a perpetual layer of glistening frosting, is said to have been crafted by the first Dough Folk master baker. Consuming this legendary treat grants you near-immortality (of sorts) and access to arcane pastry knowledge. The roll's frosting holds secrets of the ages, allowing limited control over frosting-based magic while creating pastries spontaneously as if they were summoned from the very air.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "godly",
    "effects": [
      "Eternal Frosting",
      "Arcane Pastry Mastery"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "Celestial Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Eternal Frosting",
        "rules": "You gain immunity to all forms of aging and decay related to food. This effect is permanent, providing a +2 bonus to saving throws against poison and disease. The frosting's magic can be used once per long rest."
      },
      {
        "title": "Arcane Pastry Mastery",
        "rules": "You gain proficiency in the Cooking skill and a +1 bonus to all ability checks related to baking or pastry making. This effect is permanent, requiring no additional action or concentration."
      }
    ],
    "levelRequirementReason": "The item's arcane nature and its effects demand a certain level of magical understanding.",
    "vendorReason": "Sweet Supplies deals in rare and mythic culinary treasures, making it the only place to find this legendary roll.",
    "shippingDetail": "The roll is delivered with a special temperature-controlled container ensuring its pristine condition.",
    "usage": {
      "activation": "Passive effect upon consumption of the roll.",
      "duration": "Permanent, lasting until consumed or destroyed.",
      "endsWhen": "Destroyed when consumed or subjected to extreme heat above 120°F.",
      "charges": "Unlimited"
    },
    "priceReason": "The roll's mythic rarity and its permanent effects justify this price, providing significant benefits.",
    "priceOriginal": 85000,
    "priceReviewedAt": "2026-07-25T03:39:13.748836+00:00",
    "aiReviewedAt": "2026-07-25T03:39:13.748836+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_ghostwood_wrights_wand": {
    "id": "faerun_item_the_ghostwood_wrights_wand",
    "name": "The Ghostwood Wright's Wand",
    "description": "This intricately carved wand, crafted from the petrified wood of a long-dead treant, hums with the ancient magic of spectral sprites and hidden pathways. When activated, it summons fleeting, shimmering sprites that disrupt enemy attacks with ethereal force, while also revealing previously unseen routes through shadowy environs. The wand's power is drawn from an unyielding core of petrified wood, a testament to its enduring craftsmanship and arcane might.",
    "category": "equipment",
    "price": 1000,
    "icon": "👻",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Disrupts Attacks",
      "Reveals Pathways"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "Dragon Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupts Attacks",
        "rules": "When activated as a bonus action, the wand summons spectral sprites that disrupt one attack made against you or an ally within 10 feet. The sprite imposes disadvantage on the attack roll, lasts for 1 round, and requires no concentration."
      },
      {
        "title": "Reveals Pathways",
        "rules": "As a bonus action, the wand illuminates hidden pathways in shadowed areas within 30 feet. For 1 minute, any creature with darkvision can see normally in these areas, but the effect ends if you are incapacitated or leave the area."
      }
    ],
    "levelRequirementReason": "The Ghostwood Wright's Wand requires a minimum level of 1 to wield effectively, allowing even novice mages to access its ancient power.",
    "vendorReason": "Sword Coast Traders specialize in rare and exotic wands, making the Ghostwood Wright's Wand an appropriate addition to their inventory.",
    "shippingDetail": "Ships via Dragon Express, arriving within a week of purchase. The wand is carefully packed and enchanted with protective wards during transit.",
    "usage": {
      "activation": "Bonus action for each effect",
      "duration": "Instantaneous; lasts until the end of your next turn for 'Disrupts Attacks'; 1 minute for 'Reveals Pathways'",
      "endsWhen": "The effect ends when you are incapacitated or leave the area for 'Reveals Pathways', or at the start of your next turn for 'Disrupts Attacks'",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Ghostwood Wright's Wand is priced at 1000 XP, reflecting its rare crafting materials and ancient enchantments.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:38:52.114770+00:00",
    "aiReviewedAt": "2026-07-25T03:38:52.114770+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_crimson_rune_of_kraznak_wright": {
    "id": "faerun_item_the_crimson_rune_of_kraznak_wright",
    "name": "The Crimson Rune of Kraznak's Wright",
    "description": "The Crimson Rune of Kraznak's Wright is a volcanic rune forged deep within the molten heart of Mount Kraznak. Its surface crackles with raw, untamed magic, pulsing like a heartbeat of fiery destruction. When activated, it emits a searing wave of heat that melts through armor and incinerates foes in its path, leaving behind a smoldering trail of singed flesh. The rune's curse is real; those who wield it must endure the minor burn effect themselves.",
    "category": "consumables",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "melts through armor",
      "inflicts burning damage"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "gondorian_courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Localized Heat Wave",
        "rules": "The user makes a melee attack against all creatures within a 10-foot radius. On a hit, the target takes 2d6 fire damage and is knocked prone. The rune also melts through any armor worn by the target, reducing its effectiveness for one hour."
      },
      {
        "title": "Minor Burn",
        "rules": "The user suffers 1d4 fire damage at the start of their turn each round while wielding this rune. This effect cannot be ended early and lasts until the rune is destroyed or recharged."
      }
    ],
    "levelRequirementReason": "This rune requires significant magical power to control its raw, volcanic magic.",
    "vendorReason": "Baldur's Bazaar caters exclusively to adventurers seeking powerful and unique items from the most reputable forgers in Faerûn.",
    "shippingDetail": "Due to its volatile nature, the rune must be shipped via Gondorian Courier with special heat-resistant packaging.",
    "usage": {
      "activation": "Melee attack action",
      "duration": "Instantaneous effect; lasts until expended or destroyed",
      "endsWhen": "Destroyed by fire-based damage or when all charges are used",
      "charges": "5 uses"
    },
    "priceReason": "The rune's rarity, forging complexity, and the risk of its fiery curse ensure a high price in experience points.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:38:19.713437+00:00",
    "aiReviewedAt": "2026-07-25T03:38:19.713437+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_the_shadow_singer_s_mantle": {
    "id": "faerun_item_the_shadow_singer_s_mantle",
    "name": "The Shadow Singer’s Mantle of Umbra",
    "description": "The Shadow Singer’s Mantle of Umbra, a dark grey cloak adorned with silver thread depicting mournful ballads, was crafted by an exiled bard who wove sorrow into its fibers. It allows for near-silent movement and the manipulation of shadows to create minor illusions, but the lingering sorrow it emits slowly drains the wearer's willpower over prolonged use. The mantle is a relic of ancient lore, once worn by bards who could command the very shadows themselves.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "shadow manipulation",
      "near-silent movement"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "silver_arrow_express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Shadow Manipulation",
        "rules": "As an action, you can create minor illusions using your shadow. These illusions last for up to 1 minute and do not grant any advantage on stealth checks. You cannot use this feature again until you finish a short or long rest."
      },
      {
        "title": "Near-Silent Movement",
        "rules": "You have advantage on Dexterity (Stealth) checks while wearing the mantle for up to 1 hour per long rest. The effect ends if you attack with a weapon or cast a spell of 1st level or higher."
      }
    ],
    "levelRequirementReason": "The item's effects are powerful enough that only a mid-level character can manage the draining willpower cost.",
    "vendorReason": "Waterdeep Market is known for its collection of rare and exotic items, including those with ancient or mythic origins.",
    "shippingDetail": "Ships within 3 days, delivered by Silver Arrow Express.",
    "usage": {
      "activation": "Action to create minor illusions; Bonus action for near-silent movement (while wearing).",
      "duration": "Minor illusions last up to 1 minute. Near-silent movement lasts until you attack or cast a spell of 1st level or higher.",
      "endsWhen": "Minor illusions end after 1 minute, and the effect ends if you attack with a weapon or cast a spell.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "The item's effects are balanced to provide significant advantages in stealth and shadow manipulation while maintaining a price that reflects its mythic rarity and craftsmanship.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T03:38:48.503588+00:00",
    "aiReviewedAt": "2026-07-25T03:38:48.503588+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_chronos_resonance_ward": {
    "id": "pokemon_item_chronos_resonance_ward",
    "name": "The Chronos Resonance Ward of Trainer Silas",
    "description": "The Chronos Resonance Ward of Trainer Silas hums with a temporal energy that accelerates the growth rate of nearby Pokémon by 50% for three turns, giving them an extra burst of strength. It subtly shifts their battle instincts, making them more aggressive and precise in their attacks, +1 priority against foes. The ward occasionally triggers a 'time slip' effect, reversing an opponent’s last move to disrupt their strategy. Silas's creation provides temporary resistance to status effects, ensuring Pokémon remain in fighting form longer.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 12,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Boost",
      "Battle Instinct Shift"
    ],
    "vendor": "pokemart_silas",
    "shippedBy": "winged_delivery_bird",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Temporal Boost",
        "rules": "Activates as a bonus action. Increases the growth rate of nearby Pokémon by 50% for three turns, providing an extra burst of strength during battles."
      },
      {
        "title": "Battle Instinct Shift",
        "rules": "Activates on reaction when a Pokémon is targeted by an attack or effect. Shifts their battle priority +1 against the attacker for two turns. Ends if the Pokémon faints or the ward runs out of charges."
      }
    ],
    "levelRequirementReason": "Mastering time-based tactics requires significant experience and control over one's Pokémon.",
    "vendorReason": "Silas is known for his mastery in time manipulation, making the Chronos Resonance Ward a fitting addition to his inventory.",
    "shippingDetail": "Ships within three days via winged courier.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "Instantaneous; ends when the Pokémon faints or the ward runs out of charges",
      "endsWhen": "Faints, or the ward runs out of charges (2 uses)",
      "charges": "2 uses"
    },
    "priceReason": "The Chronos Resonance Ward is a limited daily item with a unique crafting lore and powerful effects.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T03:39:04.367154+00:00",
    "aiReviewedAt": "2026-07-25T03:39:04.367154+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_ethereal_symphony_shard": {
    "id": "pokemon_item_ethereal_symphony_shard",
    "name": "The Ethereal Symphony Shard of Echoing Dreams",
    "description": "The Ethereal Symphony Shard of Echoing Dreams is a shimmering fragment of sound, forged from the harmonics of forgotten dreams and celestial melodies. When held by a trainer, it gently hums with an ancient tune that calms agitated Pokémon, restoring their joy and enhancing their connection to their environment. The shard also grants fleeting visions into alternate realities where battles unfold in unheard-of strategies, inspiring new tactics and moves.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🎶",
    "stock": 7,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Tranquil Symphony",
      "Phantom Echo"
    ],
    "vendor": "safari_shop_echoes",
    "shippedBy": "moonlit_delivery_drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tranquil Symphony",
        "rules": "When a trainer holds the shard, it emits a soothing melody that calms agitated Pokémon, restoring 1d6 + trainer level happiness points. This effect is instantaneous and can be used once per short or long rest."
      },
      {
        "title": "Phantom Echo",
        "rules": "There's a 20% chance each time the shard triggers a move that it will briefly duplicate an opponent's move, allowing the trainer to counteract or exploit it. This effect lasts for one round and can occur once per battle."
      }
    ],
    "levelRequirementReason": "The shard's gentle yet powerful effects make it accessible early in a trainer's journey.",
    "vendorReason": "As the keeper of exotic Pokémon and ancient artifacts, Safari Shop Echoes is known for its diverse collection of relics like this ethereal shard.",
    "shippingDetail": "The delivery arrives under a halo of moonlight, ensuring the trainer receives their shard in perfect condition.",
    "usage": {
      "activation": "Passive effect when held by the trainer.",
      "duration": "Instantaneous for 'Tranquil Symphony', lasts one round for 'Phantom Echo'.",
      "endsWhen": "Exhausted after a short or long rest, or upon losing contact with the shard.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The ethereal nature and ancient craftsmanship of the shard justify its modest price in experienced hands.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T03:39:36.184317+00:00",
    "aiReviewedAt": "2026-07-25T03:39:36.184317+00:00",
    "aiReviewVersion": 1
  },
  "pokemon_item_mk72_lumina_stone_of_valor": {
    "id": "pokemon_item_mk72_lumina_stone_of_valor",
    "name": "Mk.72 Lumina Stone of Valor - Prototype Designation",
    "description": "The Mk.72 Lumina Stone of Valor is a obsidian-like relic that absorbs and releases the raw energy of battles, manifesting as brilliant blue light to amplify strategic prowess. This prototype recovered from a forgotten Pokémon League facility temporarily boosts the trainer’s critical hit rate by 15% and provides a small shield against direct attacks. Its origins hint at its power being tied to the ancient lore of valor and battle strategy.",
    "category": "equipment",
    "price": 23000,
    "icon": "✨",
    "stock": 4,
    "rarity": "epic",
    "stockType": "delivery_only",
    "effects": [
      "Critical Boost",
      "Shielding Aura"
    ],
    "vendor": "league_store_prototype",
    "shippedBy": "reinforced_transport_truck",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Critical Boost",
        "rules": "Increases the trainer's critical hit rate by 15% for 1 minute. Ends if the trainer attacks twice without scoring a critical hit."
      },
      {
        "title": "Shielding Aura",
        "rules": "Provides a +2 bonus to AC against one direct attack per battle, with a maximum of three times per day. Ends if the shield is used or after 10 minutes."
      }
    ],
    "levelRequirementReason": "This relic requires significant experience and power to wield effectively.",
    "vendorReason": "As a prototype recovered from a forgotten facility, it's only sold through the official League store.",
    "shippingDetail": "Shipped via reinforced transport truck due to its delicate nature and power.",
    "usage": {
      "activation": "Passive effect activated upon absorbing battle energy; requires a short rest to recharge.",
      "duration": "1 minute or until the shield is used, whichever comes first.",
      "endsWhen": "After 10 minutes of inactivity or if the trainer scores two consecutive non-critical hits.",
      "charges": "Unlimited charges, but recharges after a short rest."
    },
    "priceReason": "The item's rarity and prototype status justify its high price.",
    "priceOriginal": 23000,
    "priceReviewedAt": "2026-07-25T03:39:07.674829+00:00",
    "aiReviewedAt": "2026-07-25T03:39:07.674829+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_radiant_bearer_of_echoes": {
    "id": "equestria_item_radiant_bearer_of_echoes",
    "name": "Radiant Bearer's Badges of Echoes",
    "description": "The Radiant Bearer's Badges of Echoes, forged from twilight's essence and imbued with the whispers of ancient harmony, emit a soft, ethereal glow that amplifies the wearer’s empathy and subtly corrects minor miscommunications in their presence. Each badge pulses with a gentle light when near significant locations, revealing echoes of past events tied to profound emotional resonance. These badges are both a symbol and a tool for fostering understanding and connection among those who wear them.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Empathy Amplification",
      "Minor Miscommunication Correction"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "winged_delivery_pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Empathy Amplification",
        "rules": "While wearing the badges, the wearer's empathy is increased by 15%. This effect is passive and does not require any action to activate. It persists for the duration of the session."
      },
      {
        "title": "Minor Miscommunication Correction",
        "rules": "When within a 30-foot radius of another creature, there is a 20% chance that minor miscommunications are subtly corrected. This effect has no save DC and does not expend charges; it simply occurs whenever the conditions are met."
      }
    ],
    "levelRequirementReason": "The badges provide a gentle, continuous benefit without being overly powerful for any level.",
    "vendorReason": "Twilight Sparkle, a master of harmony and empathy, often uses these badges to promote understanding among the Equestrian populace.",
    "shippingDetail": "Shipped via the Winged Delivery Pony service with same-day delivery within Equestria.",
    "usage": {
      "activation": "Passive effect; does not require activation.",
      "duration": "Persistent for the duration of the session.",
      "endsWhen": "Session ends or removed from wear.",
      "charges": "Unlimited"
    },
    "priceReason": "The badges provide a significant, ongoing benefit that is neither trivial nor game-breaking, making them reasonably priced for their value.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:40:15.630612+00:00",
    "aiReviewedAt": "2026-07-25T03:40:15.630612+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mk.73_kind_badges_of_resonance": {
    "id": "equestria_item_mk.73_kind_badges_of_resonance",
    "name": "Mk.73 Kind Badges of Resonance",
    "description": "Forged during a rare convergence of elemental energies within the Crystal Heart, these badges radiate a soothing warmth that envelops the wearer in a cocoon of peaceful energy. The intricate engravings depict scenes of ponies cooperating with unwavering kindness, symbolizing the pursuit of harmony and mutual respect. When worn, they not only restore 25% of the user's hit points over 30 minutes but also create a small zone of calming influence that extends outwards for 10 meters around the wearer, fostering understanding among all within its radius.",
    "category": "consumables",
    "price": 1000,
    "icon": "💖",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Restores Health Gradually",
      "Creates Zone of Calming Influence"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "royal_carriage",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Gradual Healing",
        "rules": "When worn by a pony, this badge restores 25% of the wearer's hit points over a period of 30 minutes. This effect is passive and does not require any action from the wearer."
      },
      {
        "title": "Zone of Calming Influence",
        "rules": "While wearing these badges, the wearer creates a zone of calming influence with a radius of 10 meters around them. Any pony within this area gains advantage on saving throws against fear and anxiety for the duration of their next turn."
      }
    ],
    "levelRequirementReason": "This badge requires a level 40 pony to wield, as its power draws from profound elemental energies that are only accessible to those of great experience and wisdom.",
    "vendorReason": "Canterlot Commerce is known for their extensive network of trade with the most rare and powerful items, including these badges forged by the Crystal Heart's energy.",
    "shippingDetail": "The badges are shipped via a royal carriage, ensuring they reach their destination in pristine condition and within a matter of days.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Lasts for the duration of wear or until removed by the user.",
      "endsWhen": "The wearer removes them from their person or if the wearer's concentration is broken.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This badge offers powerful benefits that are highly sought after, but its rarity and the deep magic required to craft it keep its price at a moderate epic level of 1000 XP.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:40:16.138817+00:00",
    "aiReviewedAt": "2026-07-25T03:40:16.138817+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_godly_harmony_shield_of_the_aureate": {
    "id": "equestria_item_godly_harmony_shield_of_the_aureate",
    "name": "Godly Harmony Shield of the Aurate",
    "description": "The Godly Harmony Shield of the Aurate, a divine relic forged in the golden age before Equestria's creation, glimmers with an ethereal light that soothes and protects its bearer. Crafted from ancient, enchanted gold, it whispers the harmony that once governed the cosmos. This shield not only grants +60 armor value but also deflects negative magic back at its caster with 50% success rate. Its aura of peace can pacify nearby creatures, ensuring tranquility in times of strife.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Reflects Negative Magic",
      "Pacifies Nearby Creatures"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Starshard Courier Service",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Reflects Negative Magic",
        "rules": "When a negative magic attack is directed at the wielder, there is a 50% chance that the spell will be reflected back to its caster. This effect has no save DC and can occur once per long rest."
      },
      {
        "title": "Pacifies Nearby Creatures",
        "rules": "The shield emits an aura of harmony within a 30-foot radius, pacifying all hostile creatures within this area for the duration of one short or long rest. Hostile creatures must succeed on a DC 18 Wisdom saving throw or be charmed by the shield's influence until the end of their next turn."
      }
    ],
    "levelRequirementReason": "This shield requires significant spiritual and magical prowess to wield its divine power effectively.",
    "vendorReason": "The Crystal Empire, with its deep ties to ancient magic, is the keeper of this sacred relic.",
    "shippingDetail": "Ships via Starshard Courier Service, ensuring safe and swift delivery within a week.",
    "usage": {
      "activation": "Passive effect; activation required when negative magic or hostile creatures are present.",
      "duration": "Until the end of each short or long rest for pacification effect; once per long rest for reflect effect.",
      "endsWhen": "At the end of a long rest, unless negated by an external factor.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shield's divine craftsmanship and its rare magical properties justify its moderate price in experience points.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T03:39:54.224530+00:00",
    "aiReviewedAt": "2026-07-25T03:39:54.224530+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_lumina_chronos_ring": {
    "id": "earth_land_item_lumina_chronos_ring",
    "name": "The Lumina Chronos Ring - Frostweaver's Echo",
    "description": "The Lumina Chronos Ring, a fragment of ancient frost magic encased in silver and ice, hums softly as it traps fleeting moments of frozen time. Crafted by long-dead wizards who sought to harness the essence of cold, this ring grants resistance to cold damage but warns that prolonged use can unravel the fabric of time itself, causing minor temporal distortions that might inadvertently heal small wounds or slow an enemy's movements.",
    "category": "equipment",
    "price": 1000,
    "icon": "❄️",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Resistance to Cold Damage",
      "Temporal Distortion"
    ],
    "vendor": "magic_shop",
    "shippedBy": "winged_delivery_bird",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Cold Resistance",
        "rules": "The wearer gains resistance to cold damage. This effect is passive and lasts indefinitely while the ring is worn."
      },
      {
        "title": "Temporal Distortion",
        "rules": "Once per short rest, the wearer can activate this effect to create a brief distortion of time, slowing an enemy's movement speed by half for 1 minute or until they make a Wisdom saving throw (DC 15). On a success, the distortion ends immediately."
      }
    ],
    "levelRequirementReason": "The intricate magic and ancient lore required to wield this ring demand a high level of magical proficiency.",
    "vendorReason": "As a premier supplier of rare and ancient artifacts, Magic Shop is known for its vast collection of enchanted items, including the Lumina Chronos Ring.",
    "shippingDetail": "Delivered swiftly by a fleet of winged delivery birds, ensuring that the ring arrives in perfect condition.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until an enemy makes a Wisdom saving throw (DC 15)",
      "endsWhen": "An enemy successfully saves against the distortion or after 1 minute",
      "charges": "Once per short rest"
    },
    "priceReason": "The ring's rarity and the complexity of its magic justify this price in experience points.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:40:02.906937+00:00",
    "aiReviewedAt": "2026-07-25T03:40:02.906937+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_sylvanus_hunter_amulet": {
    "id": "earth_land_item_sylvanus_hunter_amulet",
    "name": "Sylvanus’ Hunter Amulet - Echoes of the Verdant Wyrm",
    "description": "Crafted from petrified dragonwood and imbued with the essence of a territorial ancient wyrm, Sylvanus’ Hunter Amulet - Echoes of the Verdant Wyrm enhances tracking skills and grants a primal connection to nature. When worn in forested areas, it increases movement speed (+25%) and allows the wearer to sense creatures within 30 meters. However, its power draws unwanted attention from woodland spirits, making it a dangerous yet invaluable tool for hunters and scouts.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌿",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Increased Movement Speed",
      "Sense Nearby Creatures"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "giant beetle",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Increased Movement Speed",
        "rules": "The wearer gains +25% to their movement speed while in forests. This effect is passive, providing a constant boost for the duration of the amulet's wear."
      },
      {
        "title": "Sense Nearby Creatures",
        "rules": "Active within 30 meters, this ability allows the user to sense nearby creatures, granting advantage on Perception checks related to locating hidden or camouflaged targets. The effect lasts until the wearer stops concentrating (as a bonus action) or is interrupted by another creature."
      }
    ],
    "levelRequirementReason": "This amulet's power and complexity demand a high level of proficiency from its user.",
    "vendorReason": "The Earth Emporium specializes in items that harmonize with nature, making it the perfect vendor for this enchanted amulet.",
    "shippingDetail": "Shipped by a giant beetle courier, the delivery can take up to three days depending on local terrain.",
    "usage": {
      "activation": "Passive effect. Concentration is required to end the sense nearby creatures ability (as a bonus action).",
      "duration": "Concentration until ended or interrupted.",
      "endsWhen": "Concentration ends (bonus action) or when the wearer is attacked by another creature.",
      "charges": "Unlimited"
    },
    "priceReason": "The amulet's rare materials and complex enchantments justify its moderate price.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:40:09.609217+00:00",
    "aiReviewedAt": "2026-07-25T03:40:09.609217+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_aethelred_skycaller": {
    "id": "earth_land_item_aethelred_skycaller",
    "name": "Aethelred’s Skycaller - Celestial Resonance Shard",
    "description": "Aethelred’s Skycaller—Celestial Resonance Shard is a glowing bone shard carved with ancient runes. It hums softly, its light flickering with the essence of fallen celestial dragons. The wielder can summon this power to create protective barriers that absorb magical damage and dispel minor enchantments, or unleash a radiant blast that disrupts and repels arcane threats. Overuse risks attracting the attention of higher-dimensional entities seeking the shard’s secrets.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "protective barrier",
      "radiant disruption"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "griffin",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Protective Barrier",
        "rules": "The wielder can activate this effect as a bonus action to create a 10-foot-radius, 15-foot-tall barrier that absorbs up to 2d8 + 4 magic damage. It lasts for 1 minute and ends if the wearer takes any non-magical damage."
      },
      {
        "title": "Radiant Disruption",
        "rules": "Activating this effect as a reaction allows the wielder to disrupt one spell or magical attack targeting them, dealing 2d6 radiant damage. The target must succeed on a DC 15 Dexterity saving throw or be pushed 10 feet away from the caster."
      }
    ],
    "levelRequirementReason": "The shard’s power requires significant magical knowledge and experience to wield safely.",
    "vendorReason": "The guild has access to ancient relics and artifacts, including this powerful shard.",
    "shippingDetail": "Shipped by swift griffins, the item arrives within a week of purchase.",
    "usage": {
      "activation": "bonus action or reaction",
      "duration": "1 minute or until disrupted",
      "endsWhen": "wearer takes non-magical damage, spell ends, or effect is dispelled",
      "charges": "unlimited (recharges after a long rest)"
    },
    "priceReason": "The shard’s rarity and the risks of overuse justify its high price.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:40:21.930474+00:00",
    "aiReviewedAt": "2026-07-25T03:40:21.930474+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_the_frostbound_dragons_song": {
    "id": "earth_land_item_the_frostbound_dragons_song",
    "name": "The Frostbound Dragons' Song",
    "description": "The Frostbound Dragons' Song is a leather-bound grimoire, its pages shimmering with crystalline frost and etched with arcane symbols that whisper of ancient magic. The book's aura is both chilling and enchanting, as if the very air around it hums with forgotten dragon songs. With each turn, the reader feels an icy chill seep into their bones, yet they are fortified against the cold, gaining resilience to frost damage and a natural affinity for ice spells.",
    "category": "forbidden",
    "price": 10000,
    "icon": "🧊",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "special_order",
    "effects": [
      "Frost Resistance Boost",
      "Glacial Resonance"
    ],
    "vendor": "guild_quartermaster",
    "shippedBy": "Ice Wraith Courier",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Frost Resistance Boost",
        "rules": "The user gains resistance to cold damage while holding The Frostbound Dragons' Song. This effect lasts until the end of their next turn, providing a +30% bonus to their AC and saving throws against frost-based attacks."
      },
      {
        "title": "Glacial Resonance",
        "rules": "Activating this effect requires the user to chant a forgotten dragon melody as a bonus action. It creates an icy aura around them for 1 minute, dealing 15d6 cold damage in a 20-foot cone once per day."
      }
    ],
    "levelRequirementReason": "This grimoire is too powerful and complex to be mastered by less experienced users.",
    "vendorReason": "Only the Guild Quartermaster, with a deep understanding of ancient magic, can verify that only those capable of handling such power deserve it.",
    "shippingDetail": "The Ice Wraith Courier delivers this item wrapped in enchanted frost crystals to ensure its safe arrival.",
    "usage": {
      "activation": "Bonus action for Glacial Resonance; passive effect of Frost Resistance Boost while holding the book.",
      "duration": "Glacial Resonance lasts for 1 minute, ending when the user stops chanting or is incapacitated. Frost Resistance Boost lasts until the end of their next turn and recharges at dawn.",
      "endsWhen": "The effect ends if the user is incapacitated or no longer holds The Frostbound Dragons' Song.",
      "charges": "One daily use for Glacial Resonance."
    },
    "priceReason": "This item's rarity and powerful effects justify its high price, ensuring only those who truly need it can afford it.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:40:44.700725+00:00",
    "aiReviewedAt": "2026-07-25T03:40:44.700725+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_the_geothermic_resonator_of_old_grimstone": {
    "id": "earth_land_item_the_geothermic_resonator_of_old_grimstone",
    "name": "The Geothermic Resonator of Old Grimstone",
    "description": "The Geothermic Resonator of Old Grimstone is an intricate device forged from petrified magma and arcane metals, pulsing with latent earth heat. Its weighty frame hums with subterranean thermal currents, granting the wielder a fleeting connection to the fiery heart of the planet. When activated, it generates a faint heat signature that can temporarily blind foes, while also allowing the user to create small geysers that deal fire damage to nearby targets.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Geothermal Heat Aura",
      "Subterranean Geyser"
    ],
    "vendor": "earth_emporium",
    "shippedBy": "Magma Runner Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Geothermal Heat Aura",
        "rules": "When activated as a bonus action, this device creates a faint heat signature in a 10-foot radius around the user. Creatures within this area have disadvantage on Dexterity saving throws for 1 minute or until they leave the aura."
      },
      {
        "title": "Subterranean Geyser",
        "rules": "Activating the resonator allows the user to create a small geyser in a point of their choice within range. This geyser deals 30d6 fire damage to all creatures within a 5-foot radius, including the target if they are within this area. The effect lasts for 1 minute or until dispelled."
      }
    ],
    "levelRequirementReason": "This item's raw power demands that even low-level characters should exercise caution and skill to wield it effectively.",
    "vendorReason": "The Geothermic Resonator is a cornerstone of the Earth Emporium’s collection, offering adventurers a glimpse into ancient earth magic.",
    "shippingDetail": "Delivery via Magma Runner ensures the resonator arrives in pristine condition, protected from any external elements that could disrupt its power.",
    "usage": {
      "activation": "Bonus action to create heat signature or geyser",
      "duration": "1 minute for each effect",
      "endsWhen": "Effect ends when the duration expires or the device is destroyed",
      "charges": "Unlimited uses, but recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP as it provides potent fire damage capabilities and area effects without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T03:41:11.218945+00:00",
    "aiReviewedAt": "2026-07-25T03:41:11.218945+00:00",
    "aiReviewVersion": 1
  },
  "earth_land_item_the_arcane_shard_of_glacial_memory": {
    "id": "earth_land_item_the_arcane_shard_of_glacial_memory",
    "name": "The Arcane Shard of Glacial Memory",
    "description": "The Arcane Shard of Glacial Memory is a jagged fragment of an ancient ice wall, its surface flecked with glacial runoff and etched with runes that whisper forgotten lore. Holding it grants fleeting glimpses into the past, revealing hidden passages or clues when you least expect them; however, these visions are often fragmented and unsettling. The shard can also briefly allow communication with spirits trapped within the ice wall, though the connection is tenuous at best, leaving users feeling both enlightened and haunted.",
    "category": "curiosities",
    "price": 1000,
    "icon": "❄️",
    "stock": 27,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Reveal Hidden Passages",
      "Communicate with Spirits"
    ],
    "vendor": "magic_shop",
    "shippedBy": "Spectral Messenger",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Reveal Hidden Passages",
        "rules": "When you interact with a wall or door, there is a 10% chance that the shard reveals an unseen passage or hidden mechanism. This effect lasts for 1 minute and can be used once per long rest."
      },
      {
        "title": "Communicate with Spirits",
        "rules": "You can attempt to communicate with spirits trapped within the ice wall by concentrating on it for 1 hour. There is a 25% chance that you successfully contact one spirit, which provides cryptic advice or information. This effect has no save DC and can be used once per day."
      }
    ],
    "levelRequirementReason": "This shard requires significant arcane knowledge to interpret its visions accurately.",
    "vendorReason": "The magic shop specializes in ancient artifacts and relics from forgotten ages, making it the ideal vendor for such an item.",
    "shippingDetail": "Ships via Spectral Messenger at no additional cost; may arrive with a mysterious note attached.",
    "usage": {
      "activation": "Passive effect when holding the shard.",
      "duration": "1 minute for 'Reveal Hidden Passages'; varies by spirit contact attempt.",
      "endsWhen": "The long rest or daily limit is reached.",
      "charges": "Unlimited, but limited by use per day and rest."
    },
    "priceReason": "This shard’s rarity and the knowledge required to utilize it justify its price in experience points.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T03:40:52.352721+00:00",
    "aiReviewedAt": "2026-07-25T03:40:52.352721+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_fringe_caller_of_void_resonances": {
    "id": "almost_edge_item_fringe_caller_of_void_resonances",
    "name": "The Fringe Caller's Whispers",
    "description": "The Fringe Caller's Whispers are fractured obsidian orbs that hum with the distant echoes of realities just beyond perception. When held, they grant fleeting glimpses into the swirling chaos of the void’s fringe, offering a terrifyingly beautiful understanding of existence. The caller can perceive subtle shadows and whispers from realms unseen, yet these fragments come at a cost—chance inflicts 'Cosmic Dissonance,' causing minor hallucinations that blur one's sense of reality.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌌",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Glimpse into the Void",
      "Hallucinatory Echoes"
    ],
    "vendor": "edge_wanderer",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Glimpse into the Void",
        "rules": "Activates as a bonus action. The user gains advantage on Perception checks for 1 minute. Ends if the user is incapacitated or drops the orb."
      },
      {
        "title": "Hallucinatory Echoes",
        "rules": "There is a 20% chance (DC 13) that holding the orb inflicts 'Cosmic Dissonance,' causing minor hallucinations for 1d4 rounds. The user can make a Wisdom saving throw to resist. Ends if the user takes any action other than resting."
      }
    ],
    "levelRequirementReason": "The caller must have the mental fortitude to withstand the void's whispers.",
    "vendorReason": "As a merchant of the strange and arcane, the edge wanderer is well-acquainted with such curiosities.",
    "shippingDetail": "The courier ensures safe delivery through interdimensional turbulence.",
    "usage": {
      "activation": "Bonus action",
      "duration": "1 minute or until incapacitated/dropped",
      "endsWhen": "Incapacitation or dropping the orb",
      "charges": "Unlimited, recharging after a long rest"
    },
    "priceReason": "The item's rarity and its ability to provide both useful perception bonuses and potential hazards justify its high price.",
    "priceOriginal": 125,
    "priceReviewedAt": "2026-07-25T03:40:36.302765+00:00",
    "aiReviewedAt": "2026-07-25T03:40:36.302765+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_fabled_caller_of_the_abyss": {
    "id": "almost_edge_item_fabled_caller_of_the_abyss",
    "name": "Fabled Caller’s Whispers of the Abyss",
    "description": "The Fabled Caller’s Whispers of the Abyss is a device forged from solidified twilight, its surface pulsing with an unsettling violet light that hints at the abyssal realms. It whispers secrets in darkened chambers and can warp reality to reveal hidden passages, though those who listen too long may find their minds twisted by the void’s influence. This artifact grants temporary speed boosts and the ability to see through illusions, but its whispers are not always welcome.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖤",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Illusion Piercer",
      "Swift Step"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Void Freight",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Illusion Piercer",
        "rules": "When activated as a bonus action in an area of dim light or darkness, the user can attempt to see through one illusion within 30 feet. The illusion has a 50% chance of being exposed for 1 minute. If successful, the user gains advantage on perception checks related to that illusion."
      },
      {
        "title": "Swift Step",
        "rules": "Activates as a bonus action and increases the user’s walking speed by +10 feet until the end of their next turn. This effect can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 5th level to wield an artifact that warps reality and enhances perception.",
    "vendorReason": "The void merchant deals in rare and ancient artifacts, including this device crafted from the twilight of the abyss.",
    "shippingDetail": "Delivery via a mysterious black courier, arriving at night with no visible means of transport.",
    "usage": {
      "activation": "Bonus action or reaction to activate either effect.",
      "duration": "Instantaneous for Illusion Piercer; +10 feet walking speed until end of next turn for Swift Step.",
      "endsWhen": "Exhausted after one use per short or long rest.",
      "charges": "Unlimited, recharged on a long rest."
    },
    "priceReason": "Balanced at 1000 XP due to its unique abilities and the risk of mental effects from prolonged use.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:41:06.848954+00:00",
    "aiReviewedAt": "2026-07-25T03:41:06.848954+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_mk_52_fringe_whispers_of_the_fractured_plane": {
    "id": "almost_edge_item_mk_52_fringe_whispers_of_the_fractured_plane",
    "name": "Mk.52 Fringe Whispers of the Fractured Plane",
    "description": "The Mk.52 Fringe Whispers of the Fractured Plane is a device forged from the fractured remnants of another dimension, its iridescent glass shards pulsing with raw, chaotic energy. It emits a constant stream of disjointed thoughts and memories that can disrupt even the sturdiest mind. Despite its unsettling nature, it grants fleeting moments where the user can phase through solid objects, a phenomenon both eerie and potentially life-saving in certain situations.",
    "category": "premium",
    "price": 6500,
    "icon": "✨",
    "stock": 3,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Disruptive Whispers",
      "Phasing Touch"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Quantum Logistics",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Disruptive Whispers",
        "rules": "When activated, this device emits an unsettling stream of fragmented thoughts that reduce the user's focus by -10. This effect lasts for a duration of 90 seconds and has no save DC. The item can be used once per day."
      },
      {
        "title": "Phasing Touch",
        "rules": "The user gains the ability to phase through solid objects, but this effect is limited to brief moments (1d4 rounds). There's a low chance of failure with each attempt, requiring a successful DC 20 Dexterity saving throw. The item can be used once per long rest."
      }
    ],
    "levelRequirementReason": "The device requires significant mental fortitude and experience to handle its chaotic energy.",
    "vendorReason": "The Liminal Trader specializes in items from other dimensions, making the Mk.52 a fitting addition to their inventory.",
    "shippingDetail": "Shipping is expedited via Quantum Courier, ensuring it arrives safely and on time.",
    "usage": {
      "activation": "A bonus action to activate or deactivate the device.",
      "duration": "Disruptive Whispers lasts for 90 seconds. Phasing Touch has a duration of 1d4 rounds per use.",
      "endsWhen": "The effects end when the duration expires, and the item is used up once per day/rest limit.",
      "charges": "Uses are limited to one per long rest or day."
    },
    "priceReason": "The device's rarity, origin, and unique abilities justify its high price in the market.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T03:41:16.884924+00:00",
    "aiReviewedAt": "2026-07-25T03:41:16.884924+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_sugared_cookies_of_cozy": {
    "id": "leclaire_isle_item_sugared_cookies_of_cozy",
    "name": "The Sugared Cookies of Cozy",
    "description": "The Sugared Cookies of Cozy are delicate pastries crafted from the finest flour and honey, said to bring warmth to even the coldest Dough Folk heart. Each cookie exudes a comforting aroma that lingers in the air like the scent of a hearthfire, perfect for restoring spirits during quiet contemplation or moments of joyous celebration. Consuming one grants a fleeting sense of contentment, as if the world has slowed to match the pace of the sweet treat.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍪",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Restores Health",
      "Boosts Charisma"
    ],
    "vendor": "dough_depot",
    "shippedBy": "rolling_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Health",
        "rules": "Eating one cookie restores 10 hit points. The effect is instantaneous and does not require an action."
      },
      {
        "title": "Charisma Boost",
        "rules": "For the following round, the consumer gains a +2 bonus to Charisma (Performance) checks and saving throws. This boost lasts for three rounds."
      }
    ],
    "levelRequirementReason": "These cookies are simple yet effective, suitable for adventurers of all levels.",
    "vendorReason": "Dough Depot is known throughout the realm for its delicious pastries and treats, including these comforting cookies.",
    "shippingDetail": "The rolling cart delivers these sweet delights with a cheerful rhythm, ensuring they are always fresh upon arrival.",
    "usage": {
      "activation": "Instantaneous consumption",
      "duration": "Instantaneous for health restoration; +2 Charisma (Performance) bonus lasts three rounds",
      "endsWhen": "Effect of Charisma boost ends after the specified duration or if eaten again before timing out",
      "charges": "Unlimited"
    },
    "priceReason": "The premium quality ingredients and the unique magical properties of these cookies justify their higher price.",
    "priceOriginal": 275,
    "priceReviewedAt": "2026-07-25T03:41:23.515763+00:00",
    "aiReviewedAt": "2026-07-25T03:41:23.515763+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_jade_binder_sugared_cookies": {
    "id": "leclaire_isle_item_jade_binder_sugared_cookies",
    "name": "Jade Binder's Sugared Cookies",
    "description": "Jade Binder's Sugared Cookies are crafted from rare jade-infused dough and delicately sugared, rumored to be favored by ancient Baker Kings of L’Eclaire Isle. These confections momentarily bind chaotic energies, slowing enemy movements for a brief respite and granting the eater temporary protection. Each cookie not only tempers the chaos but also offers a fleeting burst of sugary energy, enhancing one's speed for a moment before all is calm again.",
    "category": "equipment",
    "price": 1000,
    "icon": "💎",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "binds chaotic movement",
      "temporary armor boost"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "delivery_drone",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Chaotic Bind",
        "rules": "When consumed, the eater may use an action to bind nearby chaotic forces for 5 turns. Enemies within a 10-foot radius have their movement speed reduced by 50%. This effect ends when it expires or if the consumer takes any damage."
      },
      {
        "title": "Armor Boost",
        "rules": "Upon consumption, the eater gains +2 to AC as a bonus action that lasts for 1 minute. This boost is not cumulative with other armor bonuses and ends once the duration expires."
      }
    ],
    "levelRequirementReason": "The intricate crafting of these cookies requires a fair amount of skill and knowledge, suitable only for those at least level 5.",
    "vendorReason": "Pastry Palace is known for its unique confections that harness the power of L’Eclaire Isle's ancient lore, making Jade Binder's Sugared Cookies a natural addition to their offerings.",
    "shippingDetail": "Ships via Pastry Palace’s proprietary delivery drone, ensuring the cookies arrive fresh and intact.",
    "usage": {
      "activation": "action",
      "duration": "5 turns or until the consumer takes damage",
      "endsWhen": "expires after duration or if consumer takes damage",
      "charges": "unlimited"
    },
    "priceReason": "The rare ingredients and ancient crafting techniques required to produce these cookies justify their high price in experience points.",
    "priceOriginal": 987,
    "priceReviewedAt": "2026-07-25T03:41:37.763689+00:00",
    "aiReviewedAt": "2026-07-25T03:41:37.763689+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_mk.38_sugared_cookies": {
    "id": "leclaire_isle_item_mk.38_sugared_cookies",
    "name": "Mk.38 Sugared Cookies",
    "description": "The Mk.38 Sugared Cookies are meticulously crafted from ancient recipes, their sugar crystals glistening like stars in the moonlight. When consumed, these treats not only enhance your perception but also unlock hidden pathways within L'Eclaire Isle's labyrinthine tunnels for a brief moment. The cookies' aroma is said to transport you to forgotten culinary realms, granting you a fleeting taste of the past and opening secret routes that can aid your journey through the island’s mysteries.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🍪✨",
    "stock": 5,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "reveals hidden passages",
      "improves perception"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "mythical_snail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Passages",
        "rules": "When consumed, you gain the ability to see and map out hidden tunnels within L'Eclaire Isle for 60 seconds. This effect is instantaneous upon consumption and does not require any action."
      },
      {
        "title": "Enhanced Perception",
        "rules": "For the next two turns, your perception checks are made at advantage. This effect lasts until the end of your next turn after consuming the cookies."
      }
    ],
    "levelRequirementReason": "These cookies are accessible to all adventurers as a way to enhance their exploration and discovery in L'Eclaire Isle.",
    "vendorReason": "Sweet Supplies prides itself on offering unique and magical treats, making it the perfect vendor for these legendary cookies.",
    "shippingDetail": "Delivered by a fleet of mythical snails, ensuring your cookies arrive fresh from L'Eclaire Isle's kitchens.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "60 seconds and two turns",
      "endsWhen": "Effect expires or you take damage",
      "charges": "Unlimited"
    },
    "priceReason": "The cookies are priced at a moderate level, reflecting their unique recipe and the effort to bring them from L'Eclaire Isle.",
    "priceOriginal": 18500,
    "priceReviewedAt": "2026-07-25T03:41:41.762650+00:00",
    "aiReviewedAt": "2026-07-25T03:41:41.762650+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_compressed_keys_of_viral_storm": {
    "id": "internet_item_compressed_keys_of_viral_storm",
    "name": "The Compressed Keys of Viral Storm",
    "description": "The Compressed Keys of Viral Storm are forged from solidified data streams, their surface etched with the remnants of a thousand viral trends. When wielded, they grant momentary immunity to unwanted meme exposure and allow for brief bursts of accelerated thought, doubling one's mental processing speed. These keys hum with latent energy, ready to unleash a minor surge that restores 5% of the bearer's hit points when activated.",
    "category": "equipment",
    "price": 1000,
    "icon": "💥",
    "stock": 37,
    "rarity": "epic",
    "stockType": "limited_daily",
    "effects": [
      "Viral Immunity",
      "Accelerated Thought"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery - Priority",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Viral Immunity",
        "rules": "The Compressed Keys provide momentary immunity to unwanted meme exposure. This effect lasts for 60 seconds and can only be used once per long rest."
      },
      {
        "title": "Accelerated Thought",
        "rules": "While holding the keys, the user's mental processing speed is doubled, granting a +2 bonus to Intelligence (Insight) checks and saving throws. This effect lasts for 1 minute, but ends if the user takes any damage."
      }
    ],
    "levelRequirementReason": "The Compressed Keys of Viral Storm require a minimum level to ensure their effects are balanced with the player's overall capabilities.",
    "vendorReason": "Data Dealer specializes in cutting-edge technology, including items that enhance mental acuity and data processing, making them an ideal vendor for these keys.",
    "shippingDetail": "Delivered within the hour with priority handling.",
    "usage": {
      "activation": "Use as a bonus action",
      "duration": "60 seconds or until the user takes damage, whichever comes first",
      "endsWhen": "The effect ends if the user takes any damage or after its duration expires",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Compressed Keys of Viral Storm are priced at 1000 XP to reflect their balanced and limited-use effects, ensuring they remain a valuable but not overpowered tool for players.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:41:58.700472+00:00",
    "aiReviewedAt": "2026-07-25T03:41:58.700472+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_jeweled_forged_nodes_of_the_lost_signal": {
    "id": "internet_item_jeweled_forged_nodes_of_the_lost_signal",
    "name": "Jeweled Forged's Nodes of the Lost Signal",
    "description": "These intricately jeweled nodes, meticulously forged from salvaged network architecture, hum with a faint, melancholic signal. Immersing yourself in their resonance allows you to briefly tap into forgotten data streams – potentially uncovering valuable information or experiencing echoes of past online interactions.",
    "category": "curiosities",
    "price": 8000,
    "icon": "📡",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Brief Echo of Past Online Interaction (30 seconds)",
      "Probability of discovering hidden data (+5%)",
      "Minor Data Corruption Resistance"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Courier - Standard",
    "levelRequirement": 28
  },
  "internet_item_mk_77_compressed_tokens_of_the_algorithmic_echo": {
    "id": "internet_item_mk_77_compressed_tokens_of_the_algorithmic_echo",
    "name": "Mk.77 Compressed Tokens of the Algorithmic Echo",
    "description": "The Mk.77 Compressed Tokens of the Algorithmic Echo are sleek, metallic discs imbued with the essence of countless digital computations. When activated, they create a brief, localized distortion that warps data streams and momentarily shields your communications from prying eyes. These tokens are the result of advanced cybernetic alchemy, crafted by the Cyber Market to protect users in an increasingly surveilled world. Each pulse is a testament to their creators' ingenuity, capable of disrupting digital surveillance for mere moments but leaving no trace behind.",
    "category": "consumables",
    "price": 1000,
    "icon": "🛡️",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Digital Distortion",
      "Temporal Shield"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Automated Delivery - Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Distortion",
        "rules": "When activated as a bonus action, the Mk.77 generates a localized distortion field that disrupts digital surveillance within a 10-foot radius for 5 seconds. This effect has no save DC and does not require concentration."
      },
      {
        "title": "Temporal Shield",
        "rules": "The tokens create a temporal shield around you, reducing the chance of being detected by digital surveillance by 20% (10%) per token used, for up to 5 minutes. This effect is cumulative with multiple tokens and cannot exceed a 30% reduction."
      }
    ],
    "levelRequirementReason": "The Mk.77 Compressed Tokens are accessible to any user who can afford the price, as their primary function is data protection.",
    "vendorReason": "The Cyber Market specializes in cutting-edge technology and cybersecurity solutions, making these tokens a natural addition to their inventory.",
    "shippingDetail": "Tokens are delivered within the hour via express courier, ensuring they arrive fresh and ready for use.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous activation; Digital Distortion lasts 5 seconds; Temporal Shield lasts up to 5 minutes (cumulative with tokens)",
      "endsWhen": "The effect ends when the duration expires or you deactivate it, and no recharges are required.",
      "charges": "Unlimited"
    },
    "priceReason": "The Mk.77 Compressed Tokens offer a unique blend of immediate protection against digital surveillance combined with extended temporal shielding, making them a valuable tool for anyone in need of cybersecurity.",
    "priceOriginal": 650,
    "priceReviewedAt": "2026-07-25T03:42:18.750719+00:00",
    "aiReviewedAt": "2026-07-25T03:42:18.750719+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_kaleidoscopic_ward_of_resonance": {
    "id": "kivotos_item_kaleidoscopic_ward_of_resonance",
    "name": "Kaleidoscopic Ward's Cards - Echoes of the Assembly",
    "description": "These shimmering cards, etched with intricate patterns resembling the winding hallways of Academy City's classrooms, hum softly when held. They grant brief glimpses into the collective thoughts of those within the city’s bounds—a chaotic yet occasionally insightful experience that reveals snippets of student musings and academic ambitions. Holding them increases perception by 10% for 30 seconds, enhancing one's ability to notice subtle social cues. However, the cards also cause minor auditory hallucinations, which can be either pleasant or unsettling depending on the moment.",
    "category": "curiosities",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Briefly Reveals Thoughts",
      "Enhances Perception"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Briefly Reveals Thoughts",
        "rules": "When activated as a bonus action, this card grants the holder a brief insight into the thoughts of nearby students within Academy City for 30 seconds. The effect causes minor auditory hallucinations that last until the duration ends."
      },
      {
        "title": "Enhances Perception",
        "rules": "While holding these cards, the user's perception is increased by 10%, allowing them to notice subtle social cues more easily. This benefit lasts for 30 seconds and can be renewed once per short or long rest."
      }
    ],
    "levelRequirementReason": "Only students with a foundational understanding of Academy City's inner workings would find this item useful.",
    "vendorReason": "The Student Store caters to the unique academic and social needs of its patrons, offering items that enhance their experience within Academy City.",
    "shippingDetail": "Delivered instantly via Academy City's drone network for immediate use in classrooms or libraries.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "30 seconds",
      "endsWhen": "The duration ends, or the card is used again during a short or long rest",
      "charges": "Unlimited"
    },
    "priceReason": "The item's rarity and limited availability justify its price in terms of both knowledge and utility.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:42:22.281721+00:00",
    "aiReviewedAt": "2026-07-25T03:42:22.281721+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_elite_card_of_lumina_protection": {
    "id": "kivotos_item_elite_card_of_lumina_protection",
    "name": "The Mk.68 Elite Cards - Lumina Guardian Ward",
    "description": "The Mk.68 Elite Cards - Lumina Guardian Ward are forged from solidified light harvested during a student performance, imbuing them with a protective aura against mental disruption. These cards are incredibly fragile and require careful handling; mishandling can shatter their power before it fully activates. When activated, they create a shimmering shield around the user for 60 seconds, deflecting mental attacks and reducing negative emotions by 15%. Occasionally, they emit a burst of radiant energy, stunning nearby enemies momentarily.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Radiant Shield",
      "Mental Resilience"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Courier Pigeon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Shield",
        "rules": "Activates as an action. Creates a shimmering shield around the user for 60 seconds, providing +5 resistance to all mental damage and saving throws against being charmed or frightened."
      },
      {
        "title": "Mental Resilience",
        "rules": "Passively reduces negative emotions by 15% within a 30-foot radius. Ends when the user is no longer within the radius of another Radiant Shield effect."
      }
    ],
    "levelRequirementReason": "The delicate nature of these cards requires a user with basic understanding and control over their mental state.",
    "vendorReason": "The academy armory is known for its unique and specialized items, including this elite grade protection device.",
    "shippingDetail": "Delivered swiftly by Courier Pigeon; the cards must be handled with care during transit to preserve their integrity.",
    "usage": {
      "activation": "Activates as an action.",
      "duration": "60 seconds, recharges after a short rest.",
      "endsWhen": "The user is no longer within the radius of another Radiant Shield effect or if the card breaks.",
      "charges": "Unlimited charges."
    },
    "priceReason": "Balanced at 1000 XP, reflecting its unique properties and the rare materials required for crafting these elite protection cards.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T03:42:44.409095+00:00",
    "aiReviewedAt": "2026-07-25T03:42:44.409095+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_forbidden_shard_of_divine_discord": {
    "id": "kivotos_item_forbidden_shard_of_divine_discord",
    "name": "The Chronal Discord - Godly Fragment of the Silent Judgement",
    "description": "The Chronal Discord - Godly Fragment of the Silent Judgement is a cold, crystalline shard that hums with the raw power of time itself. When activated, it ripples the fabric of reality within a 10-foot radius, causing temporal anomalies and echoes of past events to manifest. Its wielder must endure a harrowing ordeal: the risk of immediate madness as the fabric of time bends around them. Only those who have mastered the art of chaos and paradox dare handle this forbidden relic.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🔥",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "Temporal Anomalies",
      "Echoes of the Past"
    ],
    "vendor": "shadow_merchant",
    "shippedBy": "Chrono Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Anomalies",
        "rules": "When activated, the Chronal Discord disrupts the local temporal flow. Enemies within a 10-foot radius must make a DC 20 Wisdom saving throw or be knocked prone and suffer 5d6 force damage. The effect lasts for 1 minute per caster level."
      },
      {
        "title": "Echoes of the Past",
        "rules": "The shard summons fleeting echoes that provide advantage on History checks within 30 feet, but also impose disadvantage on Perception checks due to the constant shifting of events. This effect persists for 1 hour or until dispelled by a successful DC 25 Con saving throw."
      }
    ],
    "levelRequirementReason": "The fragment's raw power demands a caster who has honed their skills in temporal magic.",
    "vendorReason": "The shadow merchant, known for trading in the most dangerous and forbidden items, is rumored to have secured this relic from an ancient, forgotten temple.",
    "shippingDetail": "Delivery via Chrono Express ensures the fragile nature of the shard remains intact during transit, but it comes with a steep delivery fee.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous activation; effect duration varies",
      "endsWhen": "The effect ends when dispelled or the duration expires",
      "charges": "Unlimited, as long as the shard remains intact"
    },
    "priceReason": "The shard's rarity and the potential for catastrophic temporal events it can cause justify its high price.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T03:42:54.093339+00:00",
    "aiReviewedAt": "2026-07-25T03:42:54.093339+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_chronoflow_bits": {
    "id": "equestria_item_chronoflow_bits",
    "name": "The Chronoflow Bits of Twilight's Echoes",
    "description": "The Chronoflow Bits of Twilight's Echoes are iridescent, time-warped fragments that whisper of past moments and secret histories. Crafted from the very fabric of Equestria’s temporal winds, these bits can briefly correct minor mishaps in action or perception. A dropped item can be reclaimed, a missed step corrected, or a poorly aimed kick rectified with this bit. However, overuse risks creating unstable time ripples that could disrupt the natural flow of events.",
    "category": "consumables",
    "price": 1000,
    "icon": "⏳",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Correction",
      "Risk of Temporal Distortion"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pegasus Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Correction",
        "rules": "When activated as a reaction to a minor mishap, this bit rewinds the last action by up to 5 feet. The user gains advantage on the next ability check or attack roll made immediately after activation. This effect can be used once per short rest."
      },
      {
        "title": "Risk of Temporal Distortion",
        "rules": "Overusing these bits increases the risk of causing minor temporal distortions, which have a 10% chance to occur with each use beyond three activations in a single day. These distortions cause dizziness and reduce movement speed by half for 1 minute."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of time manipulation.",
    "vendorReason": "Canterlot Commerce deals in rare and powerful magical artifacts, including items that can manipulate time.",
    "shippingDetail": "Ships via the Royal Pegasus Courier with express delivery within a week.",
    "usage": {
      "activation": "Reaction to correct a minor mishap.",
      "duration": "Instantaneous; lasts until action is corrected or next short rest.",
      "endsWhen": "The effect ends when the last action is corrected, or at the start of the user's next turn if no correction is made.",
      "charges": "Unlimited uses per long rest."
    },
    "priceReason": "Balanced as a rare item with limited daily stock to ensure its value and scarcity.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:42:50.875372+00:00",
    "aiReviewedAt": "2026-07-25T03:42:50.875372+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_crystalline_heartshard": {
    "id": "equestria_item_crystalline_heartshard",
    "name": "Mk.78 Crystalline Heartshard of Fluttershy's Sanctuary",
    "description": "The Mk.78 Crystalline Heartshard of Fluttershy’s Sanctuary is a shimmering fragment harvested from the core of her sacred sanctuary, radiating an ethereal glow that resonates with the gentle essence of ponies and nature alike. This shard amplifies empathy and persuasion skills, but those who dwell too long near it may find their emotions running wild, overwhelmed by waves of compassion. It can pacify agitated creatures within a 10-foot radius, reducing aggression and bolstering one’s own compassionate resolve.",
    "category": "curiosities",
    "price": 1000,
    "icon": "💖",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Empathy Amplifier",
      "Aggression Reduction"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Delivery Pony Express",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Empathy Amplifier",
        "rules": "The user gains advantage on Persuasion checks. This effect lasts until the end of their next short or long rest."
      },
      {
        "title": "Aggression Reduction",
        "rules": "Any creature within a 10-foot radius of the user has disadvantage on attack rolls and saving throws against fear effects for 1 minute, unless they succeed on a DC 15 Wisdom saving throw. The effect ends early if the creature moves more than 30 feet away."
      }
    ],
    "levelRequirementReason": "Requires a certain level to harness its empathetic and persuasive power effectively.",
    "vendorReason": "Fluttershy, the sanctuary’s caretaker, personally curates this item for those in need of her gentle wisdom.",
    "shippingDetail": "Ships within one day, delivered by a trusted member of the Equestrian Post.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "1 minute per short or long rest for Empathy Amplifier. Aggression Reduction lasts 1 minute and ends early if conditions change.",
      "endsWhen": "The effects end when the duration expires, the user moves more than 30 feet away from affected creatures, or the user is incapacitated.",
      "charges": "Unlimited; regenerates during rest."
    },
    "priceReason": "Balanced price reflects its rarity and utility for those who need to enhance empathy and persuasion in challenging situations.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:43:03.372560+00:00",
    "aiReviewedAt": "2026-07-25T03:43:03.372560+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_cursed_bits_of_shadowhoof": {
    "id": "equestria_item_cursed_bits_of_shadowhoof",
    "name": "The Cursed Bits of Shadowhoof's Lament",
    "description": "The Cursed Bits of Shadowhoof's Lament are obsidian-black fragments forged in the darkest corners of Equestria by a long-lost shadow pony. These relics grant incredible physical prowess, but they do so at a terrible cost: they slowly corrupt the user’s spirit with despair and paranoia, eroding willpower over time. Only those who have faced their deepest fears can wield these cursed bits without succumbing to madness.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🌑",
    "stock": 5,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Incredible Strength",
      "Magical Resistance"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Dark Pegasus Messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Incredible Strength",
        "rules": "When activated, the user gains a +4 bonus to Strength and Constitution saving throws. This effect lasts for 1 hour per level of the user. The activation requires an action."
      },
      {
        "title": "Magical Resistance",
        "rules": "The user gains temporary resistance to all magical attacks equal to half their proficiency bonus (minimum of +2). This effect persists until expended or until the user is knocked unconscious."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure users can handle the mental toll.",
    "vendorReason": "The Crystal Empire, with its deep connection to magic and shadow lore, holds these relics in a private vault for those who truly understand their power.",
    "shippingDetail": "The Dark Pegasus Messenger ensures the safe delivery of such dangerous items by nightfall.",
    "usage": {
      "activation": "Action",
      "duration": "1 hour per level",
      "endsWhen": "User is knocked unconscious or until expended",
      "charges": "Unlimited, but each use drains a small portion of the user's willpower"
    },
    "priceReason": "Balanced to ensure the item remains powerful yet not overpowered for its level.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-25T03:43:01.287227+00:00",
    "aiReviewedAt": "2026-07-25T03:43:01.287227+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_infernal_striker_s_memories": {
    "id": "the_edge_item_infernal_striker_s_memories",
    "name": "Infernal Striker’s Memories – Echoes of the Unwritten",
    "description": "The Infernal Striker’s Memories – Echoes of the Unwritten is a jagged obsidian shard, pulsating with the heat of forgotten battles. Each pulse grants fleeting visions that offer strategic foresight, while also risk unraveling your own memories if exposed too long. This relic is said to be crafted from the very essence of a warforged warrior who fought in the infernal planes, and its effects are as unpredictable as the flames of hell itself.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Strategic Insight",
      "Phantom Pain"
    ],
    "vendor": "abyss_trader",
    "shippedBy": "Hellfire Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Strategic Insight",
        "rules": "When activated by an action, you gain a +10 bonus to Perception checks for 60 seconds. The shard then releases its visions, which can be either helpful or disturbing. There is a 5% chance that these visions will cause temporary madness (-2 to Wisdom until the next long rest)."
      },
      {
        "title": "Phantom Pain",
        "rules": "There is a 10% chance that the visions will inflict 'Phantom Pain', dealing 1d6 psychic damage each round for three rounds. This effect can only occur once per short or long rest."
      }
    ],
    "levelRequirementReason": "Only those with experience in the infernal realms can harness this relic's unpredictable power.",
    "vendorReason": "The abyssal traders have a unique connection to infernal artifacts, making them the only reliable source for such a dangerous yet fascinating relic.",
    "shippingDetail": "Ships via the Hellfire Courier, known for its swift and often perilous deliveries through the infernal planes.",
    "usage": {
      "activation": "Activate as an action.",
      "duration": "60 seconds per use.",
      "endsWhen": "The effect ends when you are no longer within range or if you take a short rest.",
      "charges": "Unlimited, but each use has a chance to cause temporary madness."
    },
    "priceReason": "This relic is priced high due to its rarity and the potential risks it poses to its wielder.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T03:43:55.915754+00:00",
    "aiReviewedAt": "2026-07-25T03:43:55.915754+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_mk_24_endless_memories": {
    "id": "the_edge_item_mk_24_endless_memories",
    "name": "Mk.24 Endless Memories – The Cartographer's Lament",
    "description": "The Mk.24 Endless Memories – The Cartographer's Lament is a tightly wound sphere of solidified regret, purportedly a record of a cartographer who mapped the shifting edges of reality. When touched, it floods your mind with fragmented maps and desperate calculations—each fragment an attempt to impose order on the chaotic world around you. In unfamiliar environments, your movement speed increases by 10%, but at the cost of slowly draining your sanity, reducing it by -1 per hour of prolonged use.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗺️",
    "stock": 9,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "+5 to Cartography skill checks",
      "Spatial Awareness"
    ],
    "vendor": "edge_outpost",
    "shippedBy": "Dimensional Transit",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Improved Cartography Skills",
        "rules": "This item grants a +5 bonus to Cartography skill checks. The effect is active as long as you hold the sphere in your hand. You must make an Intelligence (Cartography) check each time you attempt to map or decipher a complex terrain, and this bonus applies to that roll."
      },
      {
        "title": "Spatial Awareness",
        "rules": "When in unfamiliar environments, you gain a +10 foot bonus to your movement speed. This effect lasts for 1 hour after the first use but does not stack with other similar effects. The item's use ends if you enter a familiar environment or if you lose contact with it (e.g., by dropping it)."
      }
    ],
    "levelRequirementReason": "This item is designed for high-level adventurers who have faced the complexities of mapping and navigating dangerous, unfamiliar terrains.",
    "vendorReason": "Edge Outpost specializes in rare and ancient artifacts that can aid explorers and cartographers in their endeavors.",
    "shippingDetail": "Due to its fragile nature, the item is shipped via Dimensional Transit's secure and swift courier service with extra padding.",
    "usage": {
      "activation": "This item provides effects as long as it remains held in your hand or carried on you. The Spatial Awareness effect lasts for 1 hour after the first use.",
      "duration": "Active as long as held, Spatial Awareness lasts 1 hour from the first activation.",
      "endsWhen": "The item's effects end if you lose contact with it (e.g., by dropping it) or enter a familiar environment. The Spatial Awareness effect ends after 1 hour.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects the item's rarity, its utility in complex terrains, and its ability to enhance critical skills for high-level adventurers.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T03:43:27.735446+00:00",
    "aiReviewedAt": "2026-07-25T03:43:27.735446+00:00",
    "aiReviewVersion": 1
  },
  "the_edge_item_forbidden_chronal_fragments_77": {
    "id": "the_edge_item_forbidden_chronal_fragments_77",
    "name": "Forbidden Chronal Fragments – The Obsidian Shard’s Lament",
    "description": "The Forbidden Chronal Fragments – The Obsidian Shard’s Lament are seven jagged, crystallized shards of time that hum ominously in your palm. Their touch sends shivers down your spine as they warp reality around you, revealing glimpses into alternate timelines. Each shard holds the weight of a universe, and their combined power can bend the fabric of space-time, though doing so risks creating temporal paradoxes that could unravel the very order of existence.",
    "category": "forbidden",
    "price": 1000,
    "icon": "⏳",
    "stock": 3,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "Temporal Manipulation",
      "Reality Distortion"
    ],
    "vendor": "final_shop",
    "shippedBy": "Void Serpent Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Manipulation",
        "rules": "Once per day, you can activate one shard to attempt a short-range temporal jump. This effect lasts up to 1 minute and grants you advantage on all saving throws related to time manipulation for that duration. There is a 20% chance of inadvertently creating a paradox upon activation."
      },
      {
        "title": "Reality Distortion",
        "rules": "While holding the shards, you gain temporary resistance +20 against temporal effects and attacks. However, this power comes at a cost: there's a 15% chance each day that using or simply touching them will trigger an unpredictable reality shift within your immediate area."
      }
    ],
    "levelRequirementReason": "Even the most inexperienced adventurers can wield these shards, as their raw power is not fully realized until they are mastered.",
    "vendorReason": "The final shop caters to those who seek forbidden knowledge and powerful artifacts that challenge the very fabric of reality.",
    "shippingDetail": "Ships via a dimensional rift, ensuring immediate delivery but increasing the risk of paradoxes in transit.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per day (Temporal Manipulation)",
      "endsWhen": "The effect ends when its duration expires or if a paradox is created.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP, these shards are moderately priced for their significant power and risk.",
    "priceOriginal": 55000,
    "priceReviewedAt": "2026-07-25T03:43:47.840583+00:00",
    "aiReviewedAt": "2026-07-25T03:43:47.840583+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_gravitic_helix_caller": {
    "id": "grand_country_item_gravitic_helix_caller",
    "name": "The Karmic Caller’s Spiral Ascender",
    "description": "The Karmic Caller’s Spiral Ascender is a delicate artifact, forged from the very essence of gravity and iridescent layer-silk. This spiral ascends with a melodic pulse, allowing its wielder to defy gravity momentarily. Crafted by the ancient Doughnut Side, it resonates with karmic energy, providing brief bursts of directional control as you scale impossible surfaces. Beware its unpredictable harmonic shifts that can either aid or hinder your climb.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧗‍♀️",
    "stock": 7,
    "rarity": "legendary",
    "stockType": "limited_daily",
    "effects": [
      "gravity_defiance",
      "karmic_resonance"
    ],
    "vendor": "vertical_vendor",
    "shippedBy": "Gravity Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Defiance",
        "rules": "As a bonus action, the user can activate this device to briefly defy gravity for up to 1 minute. The user gains advantage on Strength (Athletics) checks and saving throws while within 30 feet of solid ground or stable surfaces. This effect ends if the user moves more than 30 feet from these surfaces."
      },
      {
        "title": "Karmic Resonance",
        "rules": "When activated, this device channels karmic energy, granting resistance to falling damage for 1 hour. If the user falls within 60 feet of a stable surface, they can attempt an Athletics check (DC = 15) to land safely on that surface."
      }
    ],
    "levelRequirementReason": "This item is accessible at level 1 as it provides utility and challenge-appropriate support.",
    "vendorReason": "Vertical Vendor specializes in items for those who defy gravity, making this artifact a perfect fit for their inventory.",
    "shippingDetail": "Ships via the Gravity Drone express service; delivery within one week.",
    "usage": {
      "activation": "Bonus action to activate and use.",
      "duration": "1 minute per activation, or until the user moves more than 30 feet from stable surfaces (Gravity Defiance); 1 hour for Karmic Resonance.",
      "endsWhen": "Effect ends when the user moves out of range or upon falling (Gravity Defiance); expires after 1 hour (Karmic Resonance).",
      "charges": "Unlimited, but requires concentration."
    },
    "priceReason": "This price reflects its rarity and utility, making it a balanced choice for adventurers of all levels.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T03:43:19.863590+00:00",
    "aiReviewedAt": "2026-07-25T03:43:19.863590+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_layered_rope_of_shifting_depths": {
    "id": "grand_country_item_layered_rope_of_shifting_depths",
    "name": "Mk.47 Layered Rope of Shifting Depths",
    "description": "The Mk.47 Layered Rope of Shifting Depths is a braided marvel crafted from the compressed echoes of ancient, shifting layers and reinforced with solidified gravity fields. This rope can phase you partially into adjacent planes for brief moments, allowing traversal through narrow crevices or tight spaces that would otherwise be impassable. Its core is forged from the remnants of dimensional breaches, imbuing it with a subtle distortion that aligns with your stride when pulled, but excessive use risks unraveling the very fabric of its construction and trapping you in an unstable state.",
    "category": "equipment",
    "price": 8500,
    "icon": "🔗",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "dimensional_traversal",
      "gravity_distortion"
    ],
    "vendor": "side_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 28,
    "effectDetails": [
      {
        "title": "Dimensional Traversal",
        "rules": "As a bonus action, pulling on this rope allows you to phase partially into adjacent layers for up to 1 minute. You gain advantage on Strength (Athletics) checks and can pass through small openings that would otherwise be too tight. This effect ends if the rope is pulled again or if you take damage."
      },
      {
        "title": "Gravity Distortion",
        "rules": "The rope exerts a minor gravitational distortion, giving you advantage on Dexterity (Acrobatics) checks and saving throws against being moved by environmental effects within 30 feet. This effect persists for 1 hour per use until the rope is pulled again."
      }
    ],
    "levelRequirementReason": "Requires high-level expertise to control the unpredictable nature of shifting dimensions without losing balance or getting trapped.",
    "vendorReason": "Side Seller specializes in rare and exotic equipment that defies conventional reality, making this rope a fitting addition to their inventory.",
    "shippingDetail": "The Dimensional Courier ensures swift and secure delivery through any plane of existence, guaranteeing the safe arrival of this delicate artifact.",
    "usage": {
      "activation": "Bonus action when pulling the rope",
      "duration": "1 minute or until pulled again",
      "endsWhen": "Rope is pulled again or you take damage",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The intricate craftsmanship and unique properties of this rope justify its high price, offering unparalleled utility in navigating treacherous terrain.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:43:38.361355+00:00",
    "aiReviewedAt": "2026-07-25T03:43:38.361355+00:00",
    "aiReviewVersion": 1
  },
  "grand_country_item_forbidden_vertical_hook_of_stasis": {
    "id": "grand_country_item_forbidden_vertical_hook_of_stasis",
    "name": "The Obsidian Stasis Hook Caller",
    "description": "The Obsidian Stasis Hook Caller is a horrifying device forged from solidified negative gravity, its surface etched with dark runes that hum with malevolent intent. This relic allows you to briefly suspend yourself in a state of absolute vertical stasis, effectively nullifying the effects of any fall. However, prolonged use invites the wrath of the deeper layers, as it disrupts the natural flow of gravitation and balance, leaving behind a karmic debt that can only be repaid with sacrifice.",
    "category": "forbidden",
    "price": 1000,
    "icon": "💀",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "gravity_nullification",
      "fall_damage_resistance"
    ],
    "vendor": "layer_market",
    "shippedBy": "Shadow Weaver",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravity Nullification",
        "rules": "As an action, you can activate the Obsidian Stasis Hook Caller to suspend yourself in a state of absolute vertical stasis for up to 1 minute. This effect nullifies any fall damage within its duration and prevents you from being knocked prone by gravity-related effects."
      },
      {
        "title": "Karmic Debt",
        "rules": "Using the Obsidian Stasis Hook Caller more than once per day incurs a karmic debt, which can only be repaid with a significant personal sacrifice. The DM will decide what constitutes an acceptable repayment of this debt."
      }
    ],
    "levelRequirementReason": "Even the lowest-level spellcasters may find use for this device in dangerous situations.",
    "vendorReason": "The layer_market is known for its exotic and forbidden items, making it a fitting vendor for such an artifact.",
    "shippingDetail": "Ships under cover of night to ensure the secrecy of this item's delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 1 minute per day",
      "endsWhen": "The duration ends when the effect is no longer needed or when the user activates another effect of the device.",
      "charges": "Unlimited, but limited to once per day."
    },
    "priceReason": "This item provides a unique and powerful utility for adventurers, making it a valuable addition to any party's arsenal without being overpowered.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-25T03:44:01.873760+00:00",
    "aiReviewedAt": "2026-07-25T03:44:01.873760+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_the_scorched_mane_guardian": {
    "id": "equestrian_item_the_scorched_mane_guardian",
    "name": "The Scorched Mane Guardian’s Bit",
    "description": "The Scorched Mane Guardian’s Bit is a sleek obsidian bit, etched with fiery runes that glow faintly like embers. Crafted by the blacksmiths of Ponyville, this bit grants its rider resistance to cold and ignites a protective flame around their hooves, making them a formidable adversary in icy climes or confrontations. Legends speak of its origins in a forgeside ritual where loyalty is forged from the heart of the earth itself.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 37,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Fire Resistance",
      "Hoof Flame"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Pegasus Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fire Resistance",
        "rules": "The rider gains temporary resistance to cold damage equal to their proficiency bonus +10. This effect lasts for 1 minute."
      },
      {
        "title": "Hoof Flame",
        "rules": "For the duration of the fire resistance, a minor flame ignites around the rider's hooves, providing advantage on checks made with speed or agility while navigating icy terrain. The flame persists until it is extinguished by water, mud, or another similar obstacle."
      }
    ],
    "levelRequirementReason": "The bit requires a rider of at least fifth level to harness its fiery essence and withstand the cold resistance.",
    "vendorReason": "As a local artifact from Ponyville, the market is known for hosting unique items crafted by skilled artisans like those who forged this bit.",
    "shippingDetail": "Ships via Pegasus Courier within three game days of purchase.",
    "usage": {
      "activation": "Activates as a bonus action when the rider is in icy conditions or facing cold-based threats.",
      "duration": "1 minute, or until expended in combat.",
      "endsWhen": "Exhausted after one use per short rest.",
      "charges": "One charge; recharges on completion of a long rest."
    },
    "priceReason": "Balanced at 1000 XP, this item provides significant utility for fifth-level riders and above without overshadowing other combat options.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T03:44:10.656912+00:00",
    "aiReviewedAt": "2026-07-25T03:44:10.656912+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_the_crystalline_echo_shard": {
    "id": "equestrian_item_the_crystalline_echo_shard",
    "name": "The Crystalline Echo Shard of Twilight’s Reverie",
    "description": "The Crystalline Echo Shard of Twilight’s Reverie is a shimmering fragment of twilight, its surface etched with ancient melodies and ghostly whispers. When held, it allows the user to perceive fleeting echoes of past events within a location—glimpses of conversations long forgotten and spectral visions that dance just beyond the edge of comprehension. Though the images are often fragmented and unsettling, they offer a rare window into the forgotten threads of history, weaving together lost memories with an eerie clarity.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔮",
    "stock": 12,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "echo perception",
      "intuition enhancement"
    ],
    "vendor": "crystal_empire_artifacts",
    "shippedBy": "Griffin Delivery Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echo Perception",
        "rules": "By concentrating for 1 minute, the user can perceive echoes of past events within a location. This grants advantage on Wisdom (Insight) checks to recall information about the area and allows the user to detect hidden objects within 30 feet with no roll required."
      },
      {
        "title": "Intuition Enhancement",
        "rules": "For the duration of one short rest, the user gains a +2 bonus to Intelligence saving throws. The shard can only be used once per day and must be recharged after an extended rest."
      }
    ],
    "levelRequirementReason": "The shard is designed for adventurers at any level who wish to explore the depths of lost memories.",
    "vendorReason": "Crystal Empire Artifacts specializes in rare and ancient relics, making it the perfect vendor for the Crystalline Echo Shard.",
    "shippingDetail": "The shard is shipped via the Griffin Delivery Service, known for its swift and reliable courier service.",
    "usage": {
      "activation": "Concentrate on echo perception for 1 minute; no activation required for intuition enhancement.",
      "duration": "Echo Perception lasts until the end of your next turn. Intuition Enhancement lasts until after you complete a short rest.",
      "endsWhen": "Echo Perception ends when concentration is interrupted or after one minute. Intuition Enhancement ends at the start of your next short rest.",
      "charges": "One use per day, recharging after an extended rest."
    },
    "priceReason": "The shard’s balanced price reflects its rarity and utility without being overpowered for a single-use item.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T03:44:21.974472+00:00",
    "aiReviewedAt": "2026-07-25T03:44:21.974472+00:00",
    "aiReviewVersion": 1
  },
  "equestrian_item_the_vile_bits_of_discord": {
    "id": "equestrian_item_the_vile_bits_of_discord",
    "name": "The Vile Bits of Discord's Lament",
    "description": "These tarnished bits are said to have been forged in the heart of a forgotten argument. Each bite introduces a subtle sense of unease and paranoia, making it difficult to trust even closest companions – proceed with caution.",
    "category": "consumables",
    "price": 600,
    "icon": "😈",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "paranoia +15%",
      "reduced trust (3%)",
      "chance to trigger negative emotions in others",
      "minor reduction in charisma"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Ground Delivery",
    "levelRequirement": 10
  },
  "middle_earth_item_obsidian_whisperer_of_mirkwood": {
    "id": "middle_earth_item_obsidian_whisperer_of_mirkwood",
    "name": "The Obsidian Whisperer of Mirkwood",
    "description": "This intricately carved obsidian shard pulses with the echoes of forgotten songs and dark secrets. Holding it grants temporary clarity in treacherous shadows, revealing hidden paths within the tangled depths of Mirkwood – but prolonged use risks succumbing to its melancholic influence.",
    "category": "curiosities",
    "price": 7800,
    "icon": "🦉",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_shadow_vision",
      "temporary_resistance_to_fear",
      "chance_to_reveal_hidden_paths"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_owl",
    "levelRequirement": 25
  },
  "middle_earth_item_dwarven_mithril_of_grimstone": {
    "id": "middle_earth_item_dwarven_mithril_of_grimstone",
    "name": "The Dwarven Mithril of Grimstone’s Fury",
    "description": "Forged deep within the malevolent mines of Grimstone Peak, this mithril axe head resonates with primal rage. When swung with focused intent, it can shatter stone and disrupt the flow of magical energies – a favored tool for dwarven warriors seeking to punish transgressions.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "increased_damage_against_stone",
      "chance to inflict bleeding",
      "temporarily boosts attack speed"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dire_wolf",
    "levelRequirement": 40
  },
  "middle_earth_item_service_of_the_greywatchers": {
    "id": "middle_earth_item_service_of_the_greywatchers",
    "name": "The Greywatcher’s Vigilance Offering",
    "description": "A shimmering, ethereal sphere created by the ancient Greywatchers, this object projects a calming aura around its user. It can momentarily bolster courage and offer protection from overwhelming despair – a valuable service for those facing daunting trials or battling inner demons.",
    "category": "services",
    "price": 5500,
    "icon": "🛡️",
    "stock": 33,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "restores courage",
      "provides temporary protection from despair",
      "chance to dispel minor curses"
    ],
    "vendor": "shire_shop",
    "shippedBy": "swift_horse",
    "levelRequirement": 30
  },
  "dohut_hole_item_forsaken_walker_tears": {
    "id": "dohut_hole_item_forsaken_walker_tears",
    "name": "Forsaken Walker's Tears of Shifting Gravity",
    "description": "These obsidian tears pulse with the residual echoes of collapsed realities. When consumed, they grant momentary control over localized gravitational fields – pulling objects towards you or briefly levitating yourself while navigating unstable terrain within the Fated Place.",
    "category": "consumables",
    "price": 875,
    "icon": "🌌",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Grants temporary control over gravity (range: 5m)",
      "Increases movement speed by 10% for 15 seconds",
      "Minor chance of localized distortion – brief visual hallucinations"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Courier Drone",
    "levelRequirement": 25
  },
  "dohut_hole_item_mk_91_void_walker": {
    "id": "dohut_hole_item_mk_91_void_walker",
    "name": "Mk.91 Void Walker’s Resonance Core",
    "description": "A geometrically fractured sphere of solidified void energy, this core hums with the instability of the central anomaly. Imbueing it into your armor grants resistance to gravity-based attacks and allows you brief phaseshifts through thin walls.",
    "category": "equipment",
    "price": 17500,
    "icon": "🌀",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Reduces gravity-based damage by 30%",
      "Allows brief phaseshift – short range teleportation (1m)",
      "Increases resistance to void anomalies",
      "Chance of emitting a localized distortion field, confusing enemies"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Transit Packet",
    "levelRequirement": 45
  },
  "dohut_hole_item_forbidden_void_tears_98": {
    "id": "dohut_hole_item_forbidden_void_tears_98",
    "name": "Forbidden Void Tears of the Anomaly’s Maw",
    "description": "Collected from the deepest recesses within a rift, these crimson tears radiate an unsettling awareness. Drinking them grants access to precognitive flashes—brief glimpses of potential futures directly tied to your actions within the Fated Place, but at the cost of fragmenting your sanity.",
    "category": "forbidden",
    "price": 50000,
    "icon": "🩸",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "Grants brief precognitive flashes – reveals potential outcomes for a single action (chance based)",
      "Increases intelligence by 20% for 60 seconds",
      "Significant risk of temporary madness – paranoia, hallucinations",
      "Chance to attract the attention of entities from beyond the void"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Retrieval Unit",
    "levelRequirement": 50
  },
  "kivotos_item_quartz_dancer_uniform": {
    "id": "kivotos_item_quartz_dancer_uniform",
    "name": "Quartz Dancer's Ensemble - Semester 7 Variant",
    "description": "This shimmering uniform, crafted from synthesized quartz fibers, allows the wearer to subtly manipulate light and sound within Academy City’s echoing halls. Initial tests indicate a slight amplification of club announcements – potentially useful for disrupting lectures… or rallying supporters.",
    "category": "equipment",
    "price": 1200,
    "icon": "✨",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "amplified_sound_perception",
      "minor_light_distortion",
      "increased_club_influence"
    ],
    "vendor": "student_store",
    "shippedBy": "drone_delivery",
    "levelRequirement": 25
  },
  "kivotos_item_mk_4_semester_pins_of_discord": {
    "id": "kivotos_item_mk_4_semester_pins_of_discord",
    "name": "Mk.4 Semester Pins of Discord - Crimson Variant",
    "description": "A collection of crimson enamel pins, each imbued with a suppressed echo of chaotic energy from the Academy’s forbidden clubs. Wearing multiple pins simultaneously triggers unpredictable disruptions in nearby electronics and minor shifts in social dynamics.",
    "category": "curiosities",
    "price": 8500,
    "icon": "🔥",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "randomized_electrical_interference",
      "minor_social_disruption",
      "chance_of_temporary_confusion"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 40
  },
  "kivotos_item_forbidden_resonator_circulator_of_silence": {
    "id": "kivotos_item_forbidden_resonator_circulator_of_silence",
    "name": "Forbidden Resonator Circulator - Obsidian Variant",
    "description": "This device, salvaged from a collapsed student initiation ritual, generates a localized field of absolute silence. Prolonged exposure leads to disorientation and a severe reduction in sensory input – potentially useful for clandestine operations or avoiding unwanted attention… if you can control it.",
    "category": "forbidden",
    "price": 75000,
    "icon": "🤫",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "absolute_silence_field",
      "sensory_deprivation",
      "chance_of_hallucination"
    ],
    "vendor": "academy_armory",
    "shippedBy": "encrypted_package",
    "levelRequirement": 50
  },
  "animatopia_item_twilight_keeper_of_shattered_echoes": {
    "id": "animatopia_item_twilight_keeper_of_shattered_echoes",
    "name": "Twilight Keeper's Pelts of Shattered Echoes",
    "description": "These intricately woven pelts, harvested from the nocturnal Shadow Lynx, pulse with a faint twilight luminescence. Wearing them grants you heightened awareness in dim light and allows you to momentarily hear whispers of past events, though their truth is often fragmented.",
    "category": "equipment",
    "price": 1200,
    "icon": "🌙",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_nightvision",
      "chance_to_hear_echoes",
      "minor_confusion_resistance",
      "shadow_blend_bonus"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "beast_carrier",
    "levelRequirement": 25
  },
  "animatopia_item_mk94_instinctive_pelts_of_the_stone_sentinels": {
    "id": "animatopia_item_mk94_instinctive_pelts_of_the_stone_sentinels",
    "name": "Mk.94 Instinctive Pelts of the Stone Sentinels",
    "description": "Forged under the gaze of ancient, moss-covered stone golems, these pelts possess an almost instinctive connection to the earth’s rhythms. When worn, you gain a small but steady regeneration rate and resilience against territorial aggression from woodland creatures.",
    "category": "consumables",
    "price": 8500,
    "icon": "🌿",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "slow_healing",
      "resistance_to_animal_aggression",
      "enhanced_earth_sense",
      "minor_poison_resistance"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_beast",
    "levelRequirement": 40
  },
  "animatopia_item_the_bloodstained_keeper_of_wildsong": {
    "id": "animatopia_item_the_bloodstained_keeper_of_wildsong",
    "name": "The Bloodstained Keeper of Wildsong",
    "description": "Crafted from the heart-throbbing hide of a corrupted Warhorn, this item radiates an unnerving energy. Wearing it grants you access to primal battle cries and temporarily enhances your strength, but risks attracting the attention of vengeful spirits.",
    "category": "equipment",
    "price": 35000,
    "icon": "🩸",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "strength_boost",
      "wildsong_charge",
      "chance_of_spirit_aggression",
      "increased_rage"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 50
  },
  "mushroom_kingdom_item_verdant_marked_caps_1": {
    "id": "mushroom_kingdom_item_verdant_marked_caps_1",
    "name": "Verdant Marked's Caps - Phase Shift",
    "description": "These caps, harvested from the deepest fungal groves of Northeast Midlands, pulse with a verdant energy. Consuming them grants a momentary phase shift, allowing you to briefly pass through solid objects – perfect for escaping sticky situations or snagging hidden valuables.",
    "category": "consumables",
    "price": 789,
    "icon": "🌀",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporary phase shift (5 seconds)",
      "increased movement speed (10%)",
      "chance to trigger a minor localized gravity distortion"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 15
  },
  "mushroom_kingdom_item_mk_83_fungal_caps_2": {
    "id": "mushroom_kingdom_item_mk_83_fungal_caps_2",
    "name": "Mk.83 Fungal Caps - Resonance Amplification",
    "description": "Forged during the Coin Wars, these heavily modified fungal caps vibrate with concentrated coin energy. When consumed, they amplify your senses to an almost overwhelming degree – perfect for locating hidden caches or detecting approaching enemies through vibrations.",
    "category": "equipment",
    "price": 12500,
    "icon": "🔊",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "enhanced hearing (30%)",
      "vibration sense (detects movement within 10 meters)",
      "chance to trigger a localized sonic pulse (disorients enemies)"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_ship",
    "levelRequirement": 35
  },
  "mushroom_kingdom_item_the_fungal_caps_of_coins_3": {
    "id": "mushroom_kingdom_item_the_fungal_caps_of_coins_3",
    "name": "The Fungal Caps of Coins - Celestial Alignment",
    "description": "These caps, discovered within the ruins of a forgotten coin shrine, shimmer with an otherworldly luminescence. Upon ingestion, they align your aura with celestial energies, granting brief moments of divine favor – though often accompanied by unpredictable side effects.",
    "category": "premium",
    "price": 65000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "temporary invulnerability (3 seconds)",
      "chance for a beneficial cosmic event to occur (e.g., temporary speed boost, minor luck increase)",
      "aura of celestial radiance (dazzles nearby enemies)",
      "vulnerability to psychic attacks"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_airship",
    "levelRequirement": 50
  },
  "teyvat_item_chronometric_herald_of_storm": {
    "id": "teyvat_item_chronometric_herald_of_storm",
    "name": "The Chronometric Herald of Storm’s Brand",
    "description": "A pulsating, obsidian orb etched with swirling glyphs reminiscent of the Dragonspine mountains. When activated, it briefly accelerates local time, granting increased movement speed and attack power against foes vulnerable to temporal distortions – a testament to forgotten god-smithing techniques.",
    "category": "equipment",
    "price": 7500,
    "icon": "⏳",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased movement speed for 10 seconds",
      "attack power bonus against elementally weak enemies",
      "chance to briefly slow enemy projectiles",
      "minor temporal distortion effect - chance of brief disorientation"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 25
  },
  "teyvat_item_abyssal_resonance_of_the_sands": {
    "id": "teyvat_item_abyssal_resonance_of_the_sands",
    "name": "Abyssal Resonance of the Sands – The Khthonic Cartouche",
    "description": "A small, intricately carved sandstone tablet infused with a faint umbral luminescence. Touching this artifact triggers a localized sandstorm capable of obscuring vision and inflicting damage over time - an echo of ancient desert rituals used to summon storms.",
    "category": "consumables",
    "price": 1800,
    "icon": "🏜️",
    "stock": 57,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "creates a localized sandstorm for 6 seconds",
      "inflicts damage over time to enemies within the storm's radius",
      "reduces visibility for nearby opponents",
      "chance to inflict 'blinding dust' status effect"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 18
  },
  "teyvat_item_umbral_branded_vison_of_the_shattered_wind": {
    "id": "teyvat_item_umbral_branded_vison_of_the_shattered_wind",
    "name": "Umbral Branded’s Vision of the Shattered Wind - The Aeravani Prism",
    "description": "A shimmering, violet prism that seems to capture and distort wind currents. Focusing this vision allows for brief bursts of increased speed and air control – a remnant from a lost nation's mastery of the skies.",
    "category": "equipment",
    "price": 12000,
    "icon": "💨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "grant temporary flight for a short duration",
      "increased movement speed when airborne",
      "can deflect ranged projectiles with precise wind manipulation",
      "chance to create a small tornado that pulls enemies towards the user"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "sea_dragon_ship",
    "levelRequirement": 45
  },
  "leclaire_isle_item_ambered_tart_sworn": {
    "id": "leclaire_isle_item_ambered_tart_sworn",
    "name": "Ambered Tart Sworn to the Hearth",
    "description": "This tart, glazed with honey-infused amber syrup and baked until its shell crackles with warmth, is said to grant a fleeting moment of blissful contentment. The Dough Folk swear by consuming it before long journeys, believing it strengthens resolve and protects against misfortune. A noble confection, truly.",
    "category": "consumables",
    "price": 287,
    "icon": "🍯",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Increases happiness by 10 for 60 seconds",
      "Grants a +2 bonus to Charisma checks",
      "Reduces fear effects by 50%",
      "Restores 2 points of stamina"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_cart",
    "levelRequirement": 15
  },
  "leclaire_isle_item_bronzed_biscuit_chronicle": {
    "id": "leclaire_isle_item_bronzed_biscuit_chronicle",
    "name": "Bronzed Biscuit Chronicle of the Rising Sun",
    "description": "Crafted from a blend of sun-dried almonds and rare orchid honey, this biscuit is meticulously baked in ovens fueled by geothermal vents. Legend claims consuming it reveals glimpses into possible futures - though these visions are often cryptic and unsettling. A curious piece of equipment.",
    "category": "equipment",
    "price": 1250,
    "icon": "☀️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Grants a +3 bonus to Intelligence checks related to divination or prediction.",
      "Provides resistance to psychic damage for 30 seconds.",
      "Allows the user to ‘scan’ their surroundings, revealing hidden passages (DC 15 Perception check)",
      "Increases mental fortitude – reduces confusion and fear effects by 25%"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "dragon_scale_carrier",
    "levelRequirement": 30
  },
  "leclaire_isle_item_crimson_tart_of_regret": {
    "id": "leclaire_isle_item_crimson_tart_of_regret",
    "name": "Crimson Tart of Regret, Sworn to the Bitterest Dreams",
    "description": "This dark crimson tart, infused with spiced star anise and baked until its filling shimmers like blood, is rumored to induce vivid memories—often painful ones. Only consumed by those seeking clarity or a confrontation with their past, but be warned - prolonged consumption can lead to melancholy.",
    "category": "curiosities",
    "price": 8900,
    "icon": "🩸",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Causes the user to experience a detailed flashback related to their deepest regret.",
      "Grants advantage on saving throws against fear effects for 1 hour.",
      "Allows communication with spirits of the departed (limited interaction)",
      "Reduces exhaustion by 5 points, but imposes disadvantage on all Wisdom checks for 24 hours"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "phantom_messenger",
    "levelRequirement": 50
  },
  "equestria_item_the_gilded_wrights_harmonious_resonator": {
    "id": "equestria_item_the_gilded_wrights_harmonious_resonator",
    "name": "The Gilded Wright's Harmonious Resonator",
    "description": "This intricately crafted resonator, forged by the legendary crystalwright Silas Stonehoof, vibrates with a subtle harmony of earth and wind. When held aloft, it amplifies magical energies, particularly those related to stability and protection, offering a shimmering golden aura.",
    "category": "equipment",
    "price": 875,
    "icon": "🛡️",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increases magical resistance by 10%",
      "provides a small shield against earth-based attacks",
      "chance to disrupt enemy spells (15%)",
      "boosts healing magic effectiveness by 5%"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pony Express",
    "levelRequirement": 20
  },
  "equestria_item_mk.23_sparkly_crystal_fragments_of_echoing_storms": {
    "id": "equestria_item_mk.23_sparkly_crystal_fragments_of_echoing_storms",
    "name": "Mk.23 Sparkly Crystal Fragments of Echoing Storms",
    "description": "These jagged fragments, harvested from the heart of a captured thundercloud by Ponyville's most eccentric inventor, Fizzwick Sprocket, pulse with residual electrical energy. Holding them generates a faint crackling sound and a chilling static.",
    "category": "consumables",
    "price": 312,
    "icon": "⚡",
    "stock": 68,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "restores 25 HP",
      "chance to stun enemy (5%)",
      "increases speed by 10% for 30 seconds",
      "provides minor protection from lightning attacks"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 12
  },
  "equestria_item_the_aureate_crest_of_resonance_faction": {
    "id": "equestria_item_the_aureate_crest_of_resonance_faction",
    "name": "The Aureate Crest of Resonance Faction",
    "description": "This exquisitely crafted crest, imbued with the essence of Celestia's celestial harmony and adorned with shimmering auroc crystals, serves as a symbol of dedication to the Harmony Faction. It radiates a calming aura and amplifies the wearer’s connection to elemental magic.",
    "category": "faction",
    "price": 6500,
    "icon": "✨",
    "stock": 9,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "grants access to advanced Harmony Faction spells",
      "increases magical potency by 15%",
      "provides bonus to calming or shielding magic spells",
      "reduces stress and anxiety levels (passive)"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 45
  },
  "connectopia_item_celestial_miner_shards": {
    "id": "connectopia_item_celestial_miner_shards",
    "name": "Celestial Miner's Shard Cluster - Phase 7",
    "description": "A collection of shimmering, solidified mineral fragments harvested from the upper reaches of the Connectopia canyons. These shards resonate with a faint celestial hum, boosting your mining efficiency and revealing hidden veins of rare block compounds.",
    "category": "equipment",
    "price": 250,
    "icon": "⛏️",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "mining speed +15%",
      "chance to find rare blocks +10%",
      "increased block carrying capacity",
      "resistance to cave-ins"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated Drone Delivery",
    "levelRequirement": 15
  },
  "connectopia_item_pioneer_cursed_grapple_hook": {
    "id": "connectopia_item_pioneer_cursed_grapple_hook",
    "name": "Pioneer's Cursed Grapple Hook - Timberfang",
    "description": "Forged from salvaged timber and infused with a restless spirit, this grapple hook allows you to swiftly traverse perilous cliff faces and reach distant mining sites. Beware, its movements are unpredictable and occasionally snag on phantom settlers.",
    "category": "equipment",
    "price": 875,
    "icon": "⛓️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "grapple range +25m",
      "chance to trigger a small tremor when used",
      "increased climbing speed",
      "resistance to fall damage"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Bot - Express Route",
    "levelRequirement": 30
  },
  "connectopia_item_settler_service_cart_repair": {
    "id": "connectopia_item_settler_service_cart_repair",
    "name": "Settler's Service Cart - Stabilized Unit Beta",
    "description": "A heavily reinforced service cart designed for transporting resources and supplies across the rough terrain of Connectopia. This unit provides a temporary, automated repair service for other carts and equipment, instantly mending minor damage and malfunctions.",
    "category": "services",
    "price": 1200,
    "icon": "🛠️",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "instantly repairs damaged equipment (minor)",
      "increased cart carrying capacity",
      "automatic resource sorting",
      "reduces repair costs by 20%"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Mobile Repair Depot - Scheduled Delivery",
    "levelRequirement": 45
  },
  "doughnut_hole_item_crimson_void_binder": {
    "id": "doughnut_hole_item_crimson_void_binder",
    "name": "The Crimson Void Binder",
    "description": "This viscous, pulsating tear shimmers with an unsettling crimson light, capable of momentarily solidifying the ambient void. When consumed, it grants a fleeting resistance to dimensional instability and allows brief manipulation of nearby negative space.",
    "category": "consumables",
    "price": 750,
    "icon": "🩸",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "temporary void resistance (15 seconds)",
      "minor spatial distortion",
      "chance to phase through small objects",
      "increases gravity manipulation skill by 3 levels for 60 seconds"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Courier Drone",
    "levelRequirement": 15
  },
  "doughnut_hole_item_wicked_resonance_fragment": {
    "id": "doughnut_hole_item_wicked_resonance_fragment",
    "name": "Wicked Resonance Fragment - Mk.77",
    "description": "A jagged shard of solidified dissonance, pulsing with a wicked energy. This fragment seems to actively seek out and amplify the most unsettling thoughts and emotions within its bearer, potentially leading to temporary madness or heightened perception.",
    "category": "equipment",
    "price": 1800,
    "icon": "😈",
    "stock": 17,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "amplifies negative emotions (chance of madness)",
      "increases psychic resistance by 20%",
      "provides a minor boost to intimidation skills",
      "causes auditory hallucinations for 30 seconds"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 35
  },
  "doughnut_hole_item_anomalous_chronal_tears_of_silence": {
    "id": "doughnut_hole_item_anomalous_chronal_tears_of_silence",
    "name": "Anomalous Chronal Tears of Silence - Variant Theta",
    "description": "These shimmering, obsidian tears seem to absorb all sound and movement within a small radius.  Holding one grants a distorted awareness of the timestream and can briefly freeze localized temporal flow for minor manipulation.",
    "category": "forbidden",
    "price": 52000,
    "icon": "🤫",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "temporarily silences all sound within a 10-meter radius",
      "creates a small temporal bubble (freeze time for 5 seconds)",
      "chance to glimpse future echoes of events",
      "reduces vulnerability to chronal attacks by 40%"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Delivery Unit – Class VII",
    "levelRequirement": 50
  },
  "teyvat_item_electro_mora_of_reverie": {
    "id": "teyvat_item_electro_mora_of_reverie",
    "name": "The Electro Mora of Reverie Granted",
    "description": "This pulsating mora orb crackles with electro energy, channeling the restless spirits of Mondstadt. Holding it grants temporary heightened awareness and a subtle amplification of your combat prowess against Anemo-aligned foes.",
    "category": "consumables",
    "price": 750,
    "icon": "⚡️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increases attack damage by 15% for 60 seconds",
      "Grants +5 Electro Resistance",
      "Chance to trigger a 'Reverie' effect, stunning the target briefly"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Courier",
    "levelRequirement": 20
  },
  "teyvat_item_sacred_granted_of_lithos": {
    "id": "teyvat_item_sacred_granted_of_lithos",
    "name": "Sacred Granted’s Lithos Resonance",
    "description": "A meticulously crafted amulet, forged in the heart of Liyue Harbor during a sacred geomantic ritual. It resonates with the earth's core, bolstering your defenses against physical attacks and providing minor protection from Geo-based magic.",
    "category": "equipment",
    "price": 1200,
    "icon": "⛰️",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Increases Physical Defense by 10%",
      "Grants +3 Geo Resistance",
      "Reduces damage taken from Earth-based attacks by 5%"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 35
  },
  "teyvat_item_mk17_electro_mora_of_flux": {
    "id": "teyvat_item_mk17_electro_mora_of_flux",
    "name": "Mk.17 Electro Mora of Flux Granted",
    "description": "A complex device designed by unknown artificers, this mora sphere contains a contained miniature storm, capable of manipulating electro currents. It’s said to have been salvaged from a forgotten Inazuman shrine dedicated to the flow of time.",
    "category": "curiosities",
    "price": 4500,
    "icon": "🌀",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Can be used to instantly replenish a limited amount of Electro energy (50)",
      "Chance to trigger 'Flux Pulse', dealing moderate electro damage in a small radius",
      "Slows the movement speed of enemies within 3 meters for 2 seconds"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Phantom Delivery Drone",
    "levelRequirement": 48
  },
  "middle_earth_item_sunstone_dancer_of_valar": {
    "id": "middle_earth_item_sunstone_dancer_of_valar",
    "name": "Sunstone Dancer of Valar",
    "description": "This intricately crafted cloak, woven with threads of solidified sunlight and infused with the echoes of Valar song, grants brief bursts of radiant warmth and a shimmering protective aura. The movement of the fabric seems to mimic a celestial dance, subtly bolstering the wearer’s stamina during arduous journeys through Middle-earth.",
    "category": "equipment",
    "price": 1200,
    "icon": "☀️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increases stamina by 15%",
      "provides minor radiant protection (reduces fire damage by 20%)",
      "grants a chance to reflect small projectiles back at enemies"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15
  },
  "middle_earth_item_orcish_rune_of_grimstone_whisper": {
    "id": "middle_earth_item_orcish_rune_of_grimstone_whisper",
    "name": "Orcish Rune of Grimstone Whisper",
    "description": "Forged in the depths beneath Mordor, this unsettling curiosity appears to pulse with a faint, guttural resonance.  Holding it allows one to briefly understand the fragmented whispers of ancient orcish battles and forgotten rituals – though deciphering them is a perilous undertaking.",
    "category": "curiosities",
    "price": 850,
    "icon": "👹",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "chance to gain temporary madness (low chance)",
      "grants a vague understanding of orcish language (limited duration)",
      "provides resistance to fear effects"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Grimstone Cart",
    "levelRequirement": 28
  },
  "middle_earth_item_mk_86_cloak_of_shire_protection": {
    "id": "middle_earth_item_mk_86_cloak_of_shire_protection",
    "name": "Mk.86 Cloak of Shire Protection",
    "description": "This oddly practical cloak, a seemingly standard issue piece developed by the Shire's surprisingly advanced engineering corps, provides excellent protection against the elements and minor scrapes.  Its unique design incorporates reinforced stitching and pockets for essential supplies.",
    "category": "equipment",
    "price": 600,
    "icon": "🧺",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "provides moderate protection against weather effects (rain, snow)",
      "increases carrying capacity by 10%",
      "grants a small chance to find extra food or supplies while traveling"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Cart Pony",
    "levelRequirement": 8
  },
  "mushroom_kingdom_item_the_crimson_lord_shroom": {
    "id": "mushroom_kingdom_item_the_crimson_lord_shroom",
    "name": "The Crimson Lord’s Shroom",
    "description": "This pulsating, scarlet mushroom exudes a faint heat and whispers of ancient warlords. Consuming it grants temporary command over lesser fungal units, bolstering your attack power and intimidating opponents with its imposing presence.",
    "category": "consumables",
    "price": 750,
    "icon": "🍄",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increases attack damage by 15% for 30 seconds",
      "summoning minor mushroom soldiers (lasts 60 seconds)",
      "reduces enemy resistance to fungal attacks by 10%",
      "chance to trigger a 'spore burst' dealing small area damage"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 25
  },
  "mushroom_kingdom_item_the_echoing_gearplate": {
    "id": "mushroom_kingdom_item_the_echoing_gearplate",
    "name": "The Echoing Gearplate of Silent Coins",
    "description": "Forged from solidified coin-dust and imbued with the memories of countless trades, this gearplate amplifies the value of any acquired currency. It vibrates subtly when near wealth, guiding the user towards lucrative opportunities.",
    "category": "equipment",
    "price": 1800,
    "icon": "💰",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "increases coin acquisition rate by 20%",
      "provides a chance to double the value of coins earned during combat (10%)",
      "grants passive bonus to trading prices at vendor stalls",
      "detects hidden coin caches within a 10-meter radius"
    ],
    "vendor": "wario_direct",
    "shippedBy": "express_mushroom_delivery",
    "levelRequirement": 38
  },
  "mushroom_kingdom_item_the_mega_yielding_primeval_puff": {
    "id": "mushroom_kingdom_item_the_mega_yielding_primeval_puff",
    "name": "The Mega Yielding Primeval Puff",
    "description": "A colossal, bioluminescent mushroom grown deep within the war-torn territories. This oversized puff releases a potent spore cloud when consumed, rapidly accelerating growth and granting temporary strength and resilience – perfect for weathering a siege or overwhelming an enemy.",
    "category": "consumables",
    "price": 3500,
    "icon": "🍄💥",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "immediately increases strength and defense by 40% for 60 seconds",
      "rapidly accelerates personal growth rate (temporary size increase)",
      "provides immunity to poison and disease effects",
      "chance to trigger a 'primeval surge', dealing heavy damage in a small radius"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "royal_mushroom_messenger",
    "levelRequirement": 50
  },
  "faerun_item_twilight_stalker_helm": {
    "id": "faerun_item_twilight_stalker_helm",
    "name": "The Twilight Stalker’s Helm of Drakon's Whisper",
    "description": "Forged from the scales of a twilight drake, this helm grants whispers of ancient dragon lore and a chilling resistance to fire. It’s etched with runes depicting forgotten prophecies relating to the return of dragons to Faerûn.",
    "category": "equipment",
    "price": 750,
    "icon": "🔥",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "increased fire resistance",
      "chance to detect dragons",
      "passive whisper of dragon knowledge",
      "small bonus to intimidation checks"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "winged_horse",
    "levelRequirement": 15
  },
  "faerun_item_ancient_stalker_amulet": {
    "id": "faerun_item_ancient_stalker_amulet",
    "name": "The Ancient Stalker’s Amulet of the Silverwood Guardians",
    "description": "Carved from a petrified branch of the Silverwood, this amulet pulses with protective magic and embodies the spirits of ancient guardians. It is said to ward against unnatural decay and offers limited protection in areas of heavy plant growth.",
    "category": "curiosities",
    "price": 1200,
    "icon": "🌿",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "resistance to poison and disease",
      "minor regeneration of wounds",
      "advantage on survival checks in forests",
      "chance to summon a spectral guardian (once per day)"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "giant_owl",
    "levelRequirement": 30
  },
  "faerun_item_mk_78_ancient_helm": {
    "id": "faerun_item_mk_78_ancient_helm",
    "name": "Mk.78 Ancient Helms of the Forgotten Kings",
    "description": "Recovered from the ruins of a long-lost kingdom beneath Candlekeep, this helm exudes an aura of forgotten power and arcane knowledge. It's rumored to have once belonged to a line of kings who commanded the elements.",
    "category": "equipment",
    "price": 5800,
    "icon": "👑",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "increased mana regeneration",
      "chance to cast elemental spells (minor)",
      "resistance to necrotic damage",
      "bonus to spellcasting ability score"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "sea_serpent",
    "levelRequirement": 45
  },
  "kivotos_item_twilight_gifted_uniform": {
    "id": "kivotos_item_twilight_gifted_uniform",
    "name": "Twilight Gifted's Circlet of Student Resonance",
    "description": "This shimmering circlet, woven from twilight-infused academy silks and blessed by the Halos Club’s elder initiates, amplifies your connection to the Academy City’s neural network. It grants heightened perception and allows you to subtly influence the flow of information within a localized radius, perfect for navigating student politics.",
    "category": "equipment",
    "price": 7500,
    "icon": "✨",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "increased perception",
      "subtle influence on neural networks",
      "resistance to mental manipulation",
      "boosts club reputation"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 35
  },
  "kivotos_item_mk91_club_uniform": {
    "id": "kivotos_item_mk91_club_uniform",
    "name": "Mk.91 Club Standardized Uniform of Echoing Voices",
    "description": "Crafted from reinforced academy fabric and imprinted with complex sonic glyphs, this uniform instantly grants you membership within any student club. The garment subtly amplifies your voice during group discussions, increasing your persuasive power and providing a minor auditory echo effect for dramatic emphasis.",
    "category": "equipment",
    "price": 1800,
    "icon": "🗣️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased persuasion",
      "auditory echo effect",
      "minor club affiliation",
      "reduces nervousness in group settings"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier",
    "levelRequirement": 20
  },
  "kivotos_item_halo_resonance_service": {
    "id": "kivotos_item_halo_resonance_service",
    "name": "The Chronal Harmonization Service: Temporal Echo Audit",
    "description": "A bespoke service offered by the Academy’s temporal mechanics department, this consultation analyzes your personal chrono-signature for resonance imbalances. The process involves a highly precise, non-invasive scan designed to identify and gently correct minor temporal distortions affecting your cognitive processes – essentially a ‘resetting’ of your personal timeline.",
    "category": "services",
    "price": 35000,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "temporal dissonance correction",
      "enhanced cognitive clarity",
      "reduced susceptibility to temporal anomalies",
      "unlocks hidden memories (potential side effects)"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 50
  },
  "internet_item_buffered_keys_of_the_phantom_server": {
    "id": "internet_item_buffered_keys_of_the_phantom_server",
    "name": "The Buffered Keys of the Phantom Server",
    "description": "These keys, shimmering with residual code, allow brief access to echoes of abandoned servers – a ghostly glimpse into forgotten data streams. Holding them grants momentary clarity amidst the digital chaos, but prolonged exposure risks becoming lost in the static.",
    "category": "equipment",
    "price": 185,
    "icon": "📡",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Increases data processing speed by 10% for 60 seconds",
      "Grants minor resistance to digital corruption",
      "Provides a faint auditory echo of server activity"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 5
  },
  "internet_item_fabled_bound's_key_of_the_lost_archive": {
    "id": "internet_item_fabled_bound's_key_of_the_lost_archive",
    "name": "Fabled Bound’s Key of the Lost Archive",
    "description": "Forged from solidified regret and compressed bandwidth, this key unlocks access to a hidden archive – a repository of forgotten user profiles and corrupted data. The air around it crackles with a strange nostalgia, pulling on the memories of those nearby.",
    "category": "curiosities",
    "price": 875,
    "icon": "🔑",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Reveals hidden data fragments within a 10-meter radius",
      "Provides a temporary boost to memory recall (increased chance of finding clues)",
      "Emits a low, unsettling hum that can disorient opponents",
      "Chance to summon a spectral 'Data Echo' - a fleeting image of a past user."
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 22
  },
  "internet_item_mk.86_buffered_resonance_key_of_the_algorithmic_storm": {
    "id": "internet_item_mk.86_buffered_resonance_key_of_the_algorithmic_storm",
    "name": "Mk.86 Buffered Resonance Key of the Algorithmic Storm",
    "description": "This intricately carved key, pulsing with contained energy, allows manipulation of localized data streams – a miniature algorithmic storm within your grasp. Utilizing it incorrectly can cause catastrophic system failures.",
    "category": "equipment",
    "price": 3200,
    "icon": "⚡",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Creates a localized data disruption field (damages enemy electronic devices)",
      "Allows the user to reroute data packets for short distances",
      "Provides increased resistance to hacking attempts",
      "Can temporarily overload an enemy's sensor array, stunning them."
    ],
    "vendor": "cyber_market",
    "shippedBy": "Automated Delivery Bot",
    "levelRequirement": 40
  },
  "equestria_item_luminous_shaper_horseshoes": {
    "id": "equestria_item_luminous_shaper_horseshoes",
    "name": "Luminous Shaper's Horseshoes – Mk.81",
    "description": "These exquisitely crafted horseshoes shimmer with a gentle, luminous energy, channeling the very essence of the elements. When worn by a pony, they subtly enhance natural movement and allow for brief manipulation of kinetic force – perfect for navigating tricky terrain or delivering a surprising kick.",
    "category": "equipment",
    "price": 1200,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased movement speed (+15%)",
      "kinetic force manipulation (short bursts)",
      "minor elemental resistance",
      "enhanced balance"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pony Express",
    "levelRequirement": 20
  },
  "equestria_item_kind_horseshoes_of_resonance": {
    "id": "equestria_item_kind_horseshoes_of_resonance",
    "name": "Kind Horseshoes of Resonance – The Silver Quill",
    "description": "Forged from polished silver and imbued with the spirit of compassion, these horseshoes resonate deeply with harmonious energy. Wearing them fosters a sense of calm and facilitates empathetic understanding between ponies, potentially diffusing tense situations.",
    "category": "consumables",
    "price": 850,
    "icon": "💖",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "increased empathy (+20%)",
      "reduced combat aggression",
      "minor healing effect (restores a small amount of HP)",
      "harmonious aura – pacifies nearby enemies"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Cloud Courier Services",
    "levelRequirement": 15
  },
  "equestria_item_aureate_harmony_shield_of_echoes": {
    "id": "equestria_item_aureate_harmony_shield_of_echoes",
    "name": "Aureate Harmony Shield of Echoes – The Chronos Guard",
    "description": "This legendary shield, forged in the heart of a temporal rift, pulses with the concentrated power of harmonious echoes. It protects its wielder not just from physical harm, but also from distortions in time and space, offering glimpses into potential futures.",
    "category": "premium",
    "price": 75000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "significant damage absorption (+60%)",
      "temporal distortion resistance",
      "chance to rewind enemy attacks",
      "passive ability: 'Echoes of Harmony' – occasionally grants a brief shield regeneration"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Temporal Logistics Corp.",
    "levelRequirement": 50
  },
  "animatopia_item_crimson_echo_talon": {
    "id": "animatopia_item_crimson_echo_talon",
    "name": "The Crimson Echo Talon of the Elder Burrow",
    "description": "This talon, forged from solidified primal screams and river clay, vibrates with the faintest whisper of long-lost tribal songs. When wielded, it grants momentary clarity during chaotic situations, revealing hidden pathways within the deepest forests.",
    "category": "equipment",
    "price": 1200,
    "icon": "🐾",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Grants +3 to Perception for 60 seconds",
      "Reveals hidden paths in dense forests for 15 seconds",
      "Chance to trigger a brief, calming illusion of ancestral voices"
    ],
    "vendor": "forest_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15
  },
  "animatopia_item_starfall_weaver_reaver": {
    "id": "animatopia_item_starfall_weaver_reaver",
    "name": "Starfall Weaver’s Reaver of the Lunar Grove",
    "description": "Crafted from solidified moonlight and woven with celestial fibers, this reaver hums with an otherworldly energy. It allows the wielder to manipulate shadows during nocturnal rituals, bolstering their connection to the spirits.",
    "category": "equipment",
    "price": 8000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Increases Shadow Magic damage by 25%",
      "Allows the user to cast 'Veil of Shadows' once per day.",
      "Grants bonus movement speed in dark areas."
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Dire Rat Delivery",
    "levelRequirement": 35
  },
  "animatopia_item_serpent_song_service_token": {
    "id": "animatopia_item_serpent_song_service_token",
    "name": "The Serpent Song Service Token - 'Whisper of the Coil'",
    "description": "A polished obsidian token inlaid with shimmering scales, this item grants access to a rare service offered by the enigmatic Coil Singers. These skilled artisans can temporarily imbue weaponry with potent sonic vibrations, disrupting enemy defenses.",
    "category": "services",
    "price": 25000,
    "icon": "🐍",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Allows user to commission a weapon enhancement (Sonic Distortion) - deals bonus damage against armored targets.",
      "Enhancement lasts for 30 minutes.",
      "The Coil Singers provide personalized combat advice for the next 24 hours."
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Giant Beetle Transport",
    "levelRequirement": 45
  },
  "doughnut_hole_item_gilded_wrights_null_of_shimmering_descent": {
    "id": "doughnut_hole_item_gilded_wrights_null_of_shimmering_descent",
    "name": "Gilded Wright's Null of Shimmering Descent",
    "description": "This pulsing null, crafted from solidified void-gravity, emits a faint shimmer as if constantly falling downwards. Holding it grants brief moments of reduced gravitational influence – perfect for precarious jumps or escaping crushing pressure, but beware its unsettling resonance.",
    "category": "equipment",
    "price": 7800,
    "icon": "🌌",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Reduced Gravity (5%) for 30 seconds",
      "Increased Jump Height (10%) for 30 seconds",
      "Minor Void Resonance – chance of temporary disorientation"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Conveyor Belt",
    "levelRequirement": 25
  },
  "doughnut_hole_item_mk_42_void_nulls_of_the_fractured_echo": {
    "id": "doughnut_hole_item_mk_42_void_nulls_of_the_fractured_echo",
    "name": "Mk.42 Void Nulls of the Fractured Echo",
    "description": "These obsidian-like nulls, recovered from the edges of a collapsed gravity pocket, subtly repeat fragments of screams – whispers from realities devoured by the void.  Each touch grants fleeting insight into impossible geometries and an unnerving sense of being watched.",
    "category": "curiosities",
    "price": 1850,
    "icon": "👂",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Minor Psychic Echo – chance of receiving a cryptic vision",
      "Increased Perception (10%) for 60 seconds",
      "Void Resonance - brief feelings of unease"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 18
  },
  "doughnut_hole_item_void_services_of_the_gravitic_resonance": {
    "id": "doughnut_hole_item_void_services_of_the_gravitic_resonance",
    "name": "Void Services of the Gravitic Resonance",
    "description": "A shimmering, self-contained chamber filled with swirling void energy. This service allows for temporary manipulation of local gravitational fields – useful for creating instant platforms or disrupting enemy attacks, but prolonged use risks attracting unwanted attention from deeper within The Fated Place.",
    "category": "services",
    "price": 42000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Localized Gravity Manipulation (Up to 15% Reduction/Increase) for 60 seconds",
      "Creates Temporary Gravitic Platform",
      "Risk: Attracts Void Entities – chance of summoning a minor void wraith"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Portals",
    "levelRequirement": 45
  },
  "almost_edge_item_spectral_drift_branded": {
    "id": "almost_edge_item_spectral_drift_branded",
    "name": "The Spectral Drift Branded by Chronos's Lament",
    "description": "A shimmering, viscous essence harvested from the moments lost just beyond the edge. It grants a fleeting glimpse into fractured timelines, inducing disorientation and a chilling awareness of the void’s hunger. Prolonged exposure can unravel the user’s sense of self, replacing it with echoes of forgotten realities.",
    "category": "consumables",
    "price": 12000,
    "icon": "🌌",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "Temporarily increases perception by 50%",
      "Causes mild disorientation for 3 turns",
      "Chance to inflict ‘Fractured Memory’ (reduces target's attack by 20% for 1 turn)",
      "Grants resistance to fear effects."
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier Drone",
    "levelRequirement": 35
  },
  "almost_edge_item_liminal_resonance_curiosity": {
    "id": "almost_edge_item_liminal_resonance_curiosity",
    "name": "The Liminal Resonance of the Unwritten Threshold",
    "description": "A perfectly smooth, obsidian stone etched with swirling patterns that seem to shift and rearrange themselves before your eyes. Holding this curiosity evokes a profound sense of unease and disorientation, briefly blurring the boundaries between realities. It’s rumored to be formed from the solidified anxieties of those who have gazed too long into the abyss.",
    "category": "curiosities",
    "price": 8000,
    "icon": "🚪",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reduces target's attack by 10% for 2 turns",
      "Increases user’s evasion chance by 15%",
      "Causes a brief hallucination (random effect – sleep, confusion, fear)",
      "Provides +3 to Insight checks."
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Phase Shift Package",
    "levelRequirement": 20
  }
};
