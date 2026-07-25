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
    "description": "The Jeweled Forged Nodes of the Lost Signal are intricately crafted from salvaged network architecture, their surfaces shimmering with a faint, melancholic signal that hums through the ether. These nodes allow you to tap into forgotten data streams, potentially uncovering valuable information or experiencing echoes of past online interactions. As you immerse yourself in their resonance, they emit a soft glow, hinting at the vast and often overlooked digital archives from which they were forged.",
    "category": "curiosities",
    "price": 1000,
    "icon": "📡",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Brief Echo of Past Online Interaction",
      "Probability of Discovering Hidden Data"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Courier - Standard",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Brief Echo of Past Online Interaction",
        "rules": "As a bonus action, you can activate the nodes to briefly immerse yourself in a nostalgic echo of past online interactions. This effect lasts for 30 seconds and grants you advantage on one Intelligence (Computers) check per short rest."
      },
      {
        "title": "Probability of Discovering Hidden Data",
        "rules": "While wearing the nodes, your chance to discover hidden data increases by +5%. Additionally, if you fail an Intelligence (Computers) check, you have a 10% chance of uncovering useful information about the failed task."
      }
    ],
    "levelRequirementReason": "Requires at least fourth level to handle the complex and delicate nature of the nodes.",
    "vendorReason": "The pixel shop specializes in unique and rare digital curiosities, making these nodes a fitting addition to their inventory.",
    "shippingDetail": "Standard delivery time is two game days.",
    "usage": {
      "activation": "Bonus action",
      "duration": "30 seconds",
      "endsWhen": "The duration ends when the effect expires, or if you are incapacitated.",
      "charges": "Unlimited charges"
    },
    "priceReason": "Balanced at 1000 XP as it provides useful but not overwhelmingly powerful abilities.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T15:24:23.309327+00:00",
    "aiReviewedAt": "2026-07-25T15:24:23.309327+00:00",
    "aiReviewVersion": 1
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
    "description": "The Vile Bits of Discord's Lament are a twisted amalgamation of forgotten arguments and gnawed metal, forged in the heart of a long-lost quarrel. These tarnished fragments emit an insidious aura that subtly erodes trust among those who consume them, making even the closest companions seem unreliable. Biting into these cursed relics leaves you plagued with paranoia, reducing your charisma by 1 point and increasing the chance for others to react negatively towards you.",
    "category": "consumables",
    "price": 1000,
    "icon": "😈",
    "stock": 89,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Paranoia",
      "Reduced Charisma"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Swift Pony Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Paranoia",
        "rules": "Upon consuming the Vile Bits, you become paranoid and distrusting of your companions. This effect lasts until the end of your next long rest. It does not require a saving throw but reduces your charisma by 1 point."
      },
      {
        "title": "Reduced Charisma",
        "rules": "Your charisma score is reduced by 1 point while you are under the effects of these bits, and this reduction persists until the end of your next long rest. This effect does not allow saving throws to negate its impact."
      }
    ],
    "levelRequirementReason": "A lower-level character might find it difficult to cope with the paranoia and reduced charisma effects.",
    "vendorReason": "Canterlot Commerce, known for their eclectic range of goods, includes these items in their stock due to their unique and controversial nature.",
    "shippingDetail": "Ships via the Swift Pony Express, delivered within three days of purchase.",
    "usage": {
      "activation": "Eaten as a consumable item.",
      "duration": "Lasts until the end of your next long rest.",
      "endsWhen": "The effects end at the conclusion of your next long rest.",
      "charges": "Unlimited, but one cannot consume more than three in a week."
    },
    "priceReason": "The price reflects the unique and potentially destabilizing nature of these items, balancing their utility with the risk they pose.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T03:44:41.043786+00:00",
    "aiReviewedAt": "2026-07-25T03:44:41.043786+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_obsidian_whisperer_of_mirkwood": {
    "id": "middle_earth_item_obsidian_whisperer_of_mirkwood",
    "name": "The Obsidian Whisperer of Mirkwood",
    "description": "The Obsidian Whisperer of Mirkwood is a hand-carved shard of dark obsidian, its surface etched with the forgotten runes of ancient elven lore. When wielded within the shadowy confines of Mirkwood, it pulses with a spectral light, illuminating hidden paths and revealing secrets that have lain dormant for ages. However, prolonged use can drive one mad, as the whispers of the past grow ever more insistent, tempting the user to delve deeper into the forest's dark heart.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🦉",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "increased_shadow_vision",
      "hidden_path_revelation"
    ],
    "vendor": "elven_market",
    "shippedBy": "winged_owl",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Shadow Vision",
        "rules": "When activated as an action within Mirkwood, you gain advantage on Perception checks to notice hidden creatures or objects in shadowy areas for 1 minute. This effect ends if you leave Mirkwood's bounds."
      },
      {
        "title": "Hidden Path Revelation",
        "rules": "Upon activation, you can spend a bonus action to reveal an unexplored path within the forest that bypasses minor obstacles and traps for up to 8 hours or until you leave Mirkwood. This effect ends if you use it again."
      }
    ],
    "levelRequirementReason": "Even the simplest ranger can appreciate the utility of this artifact when navigating Mirkwood's treacherous terrain.",
    "vendorReason": "The elves of Mirkwood are known for their intimate connection with nature and ancient relics, making them the perfect custodians of such a powerful tool.",
    "shippingDetail": "Delivered by the swift messengers of the forest, ensuring safe passage through Mirkwood's most perilous regions.",
    "usage": {
      "activation": "Action or Bonus Action within Mirkwood",
      "duration": "1 minute (Shadow Vision) / Up to 8 hours (Path Revelation)",
      "endsWhen": "Effect ends when you leave Mirkwood or use the item again",
      "charges": "Unlimited, but only one effect can be active at a time"
    },
    "priceReason": "Balanced as a rare item with limited availability, this artifact's price reflects its utility and the danger of using it within Mirkwood.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T14:47:48.709632+00:00",
    "aiReviewedAt": "2026-07-25T14:47:48.709632+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_dwarven_mithril_of_grimstone": {
    "id": "middle_earth_item_dwarven_mithril_of_grimstone",
    "name": "The Dwarven Mithril of Grimstone’s Fury",
    "description": "The Dwarven Mithril of Grimstone’s Fury, a fearsome axe head forged in the heart of Grimstone Peak, crackles with the unyielding fury of ancient stone and dark magic. When wielded by one who knows its secrets, it can rend stone as if it were parchment and disrupt arcane spells with a single swing. Its edge is said to be sharper than any blade ever crafted, yet it whispers of death to those who dare invoke its wrath.",
    "category": "equipment",
    "price": 12000,
    "icon": "🔨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "night_only",
    "effects": [
      "Stonecutter",
      "Arcane Disruption"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "dire_wolf",
    "levelRequirement": 40,
    "effectDetails": [
      {
        "title": "Stonecutter",
        "rules": "When you hit a target with this axe and the target is a construct or made of stone, it takes an additional 2d6 damage. This effect can be used once per short rest."
      },
      {
        "title": "Arcane Disruption",
        "rules": "As a bonus action, you can unleash a surge of disrupted energy that disrupts one active spell within 30 feet with a DC 18 Wisdom saving throw. On a failed save, the spell ends immediately."
      }
    ],
    "levelRequirementReason": "Only those who have faced and survived Grimstone Peak's darkest trials are deemed worthy to wield this axe.",
    "vendorReason": "The dwarves of the forge are the only ones who can craft weapons that channel the raw power of Grimstone’s fury.",
    "shippingDetail": "Ships via dire wolf courier, known for their speed and endurance in treacherous terrains.",
    "usage": {
      "activation": "Main action or bonus action to use Stonecutter; bonus action to use Arcane Disruption",
      "duration": "Instantaneous effects",
      "endsWhen": "Uses are exhausted after each short rest, spell disruption ends on a successful save by the caster of the targeted spell.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The axe’s forging required rare and dangerous materials, along with the expertise of master dwarven forges.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:48:27.925901+00:00",
    "aiReviewedAt": "2026-07-25T14:48:27.925901+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_service_of_the_greywatchers": {
    "id": "middle_earth_item_service_of_the_greywatchers",
    "name": "The Greywatcher’s Vigilance Offering",
    "description": "The Greywatcher’s Vigilance Offering is a shimmering, ethereal sphere that pulses with the ancient wisdom of the Greywatchers. Crafted from the essence of the Misty Mountains and imbued with the protective spirit of the Watchers, this glowing orb provides its bearer with unshakable courage in times of trial. When wielded in combat or meditation, it emits a soft glow that can dispel minor curses and bolster one’s resolve against overwhelming despair.",
    "category": "services",
    "price": 1000,
    "icon": "🛡️",
    "stock": 33,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "dispels minor curses",
      "bolsters courage"
    ],
    "vendor": "shire_shop",
    "shippedBy": "swift_horse",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Curse Dispelling",
        "rules": "When activated as an action, this offering grants advantage on saving throws against minor curses. The effect lasts until the start of your next turn and can be used once per long rest."
      },
      {
        "title": "Bolstering Courage",
        "rules": "This item provides a +1 bonus to all Charisma (Intimidation) checks for 1 hour after activation as an action. The effect ends early if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "Even the simplest heroes may need this offering when facing overwhelming despair.",
    "vendorReason": "The Shire Shop stocks essential items for all travelers, including this rare gift from the Greywatchers.",
    "shippingDetail": "Delivered by swift horse courier within one week of purchase.",
    "usage": {
      "activation": "Action or Bonus Action to activate and use in combat or meditation.",
      "duration": "Instantaneous effect with ongoing benefits for the specified duration.",
      "endsWhen": "The effect ends if you are incapacitated, fall unconscious, or do not use it within a long rest period.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Balanced to reflect its divine origin and rare utility for adventurers of all levels.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-25T03:44:48.030418+00:00",
    "aiReviewedAt": "2026-07-25T03:44:48.030418+00:00",
    "aiReviewVersion": 1
  },
  "dohut_hole_item_forsaken_walker_tears": {
    "id": "dohut_hole_item_forsaken_walker_tears",
    "name": "Forsaken Walker's Tears of Shifting Gravity",
    "description": "The Forsaken Walker's Tears of Shifting Gravity are obsidian orbs that hum with the raw energy of collapsing dimensions. When consumed, these tears allow you to manipulate gravity within a 5-foot radius, pulling objects closer or suspending yourself in mid-air for brief moments. They are said to be crafted from the very essence of forgotten realities, their power only active when wielded by one who has walked through the Fated Place.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌌",
    "stock": 33,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Gravity Manipulation",
      "Enhanced Mobility"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Courier Drone",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Gravity Manipulation",
        "rules": "As an action, you can manipulate gravity within a 5-foot radius for up to 10 seconds. Objects in the area are drawn toward you with a force equal to half your Strength modifier (rounded down), and creatures can move through them as if they were difficult terrain. This effect ends when you use it again or after 1 minute."
      },
      {
        "title": "Enhanced Mobility",
        "rules": "For the duration of manipulating gravity, you gain a +2 bonus to AC and your movement speed increases by 10 feet. You can remain in this state for up to 30 seconds per short rest."
      }
    ],
    "levelRequirementReason": "The tears' power is too great for novices, requiring at least 1st level to wield them safely.",
    "vendorReason": "Hole Hawker, a master of the Fated Place, has access to these rare and dangerous artifacts.",
    "shippingDetail": "Ships directly from the Fated Place; delivery can take several days depending on the courier's route through the collapsing dimensions.",
    "usage": {
      "activation": "Action",
      "duration": "Up to 10 seconds per use, up to 30 seconds per short rest",
      "endsWhen": "You use it again or after 1 minute of continuous effect",
      "charges": "Unlimited"
    },
    "priceReason": "The tears are rare and their power is immense, justifying a price of 1000 XP.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T15:18:36.946212+00:00",
    "aiReviewedAt": "2026-07-25T15:18:36.946212+00:00",
    "aiReviewVersion": 1
  },
  "dohut_hole_item_mk_91_void_walker": {
    "id": "dohut_hole_item_mk_91_void_walker",
    "name": "Mk.91 Void Walker’s Resonance Core",
    "description": "The Mk.91 Void Walker’s Resonance Core is a fractured sphere of solidified void energy, its surface etched with ancient runes that shimmer with unstable void anomalies. This core can be fused into armor to grant resistance against gravity-based attacks and the ability to briefly phase through thin walls, disrupting the very fabric around you. When activated, it emits localized distortions, confusing enemies in a 5-foot radius for a moment.",
    "category": "equipment",
    "price": 17500,
    "icon": "🌀",
    "stock": 8,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Resists Gravity-Based Attacks",
      "Brief Phaseshift Teleport"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Transit Packet",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Resist Gravity-Based Attacks",
        "rules": "While the Resonance Core is fused into your armor, you gain resistance to damage from gravity-based attacks. This effect lasts until the end of your next turn."
      },
      {
        "title": "Brief Phaseshift Teleport",
        "rules": "As a bonus action, you can briefly phase through thin walls for up to 10 feet. You must be touching the wall and can only do this once per short or long rest."
      }
    ],
    "levelRequirementReason": "Only high-level characters have the fortitude and skills needed to harness such a volatile core.",
    "vendorReason": "The center seller specializes in rare, high-tier magical items that can be used by powerful adventurers.",
    "shippingDetail": "The package is delivered via Dimensional Transit Packet, ensuring safe and swift delivery through the void pathways.",
    "usage": {
      "activation": "Bonus action for brief phaseshift; passive effect of resistance to gravity-based attacks.",
      "duration": "Instantaneous for brief phaseshift; lasts until end of next turn with resistance.",
      "endsWhen": "Exhausted after one use or recharge at the start of a short rest.",
      "charges": "1 charge, recharges on a short rest"
    },
    "priceReason": "The core's rarity and its powerful effects justify this high price.",
    "priceOriginal": 17500,
    "priceReviewedAt": "2026-07-25T14:48:03.225389+00:00",
    "aiReviewedAt": "2026-07-25T14:48:03.225389+00:00",
    "aiReviewVersion": 1
  },
  "dohut_hole_item_forbidden_void_tears_98": {
    "id": "dohut_hole_item_forbidden_void_tears_98",
    "name": "Forbidden Void Tears of the Anomaly’s Maw",
    "description": "Hewn from the heart of a rift in space-time, these crimson tears of the Anomaly’s Maw are said to be collected by those who dare venture into the forbidden depths of reality. Drinking them grants brief precognitive flashes—glimpses of potential futures directly linked to your actions within the Fated Place—but at the cost of fragmenting one's sanity. The Anomaly’s Maw whispers in your mind, its voice a cacophony of futures and pasts, each tear a fragment of reality torn from the fabric of time itself.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🩸",
    "stock": 1,
    "rarity": "mythic",
    "stockType": "back_order",
    "effects": [
      "Brief Precognitive Flashes",
      "Sanity Fracture"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Temporal Retrieval Unit",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Brief Precognitive Flashes",
        "rules": "When consumed, this item grants a brief flash of potential futures related to your next action within the Fated Place. The effect is instantaneous and lasts until the start of your next turn. You gain advantage on one ability check or attack roll of your choice before the end of your next turn. There is a 10% chance per use that you perceive an alternate future outcome, but this increases your risk of attracting entities from beyond the void."
      },
      {
        "title": "Sanity Fracture",
        "rules": "Each successful consumption of these tears has a cumulative -1 penalty to Intelligence. This penalty stacks, and if it reaches -5 or higher, you are incapacitated until the end of your next long rest. The item is destroyed upon this occurrence."
      }
    ],
    "levelRequirementReason": "Even the most novice adventurers might need a glimpse into the future to navigate the dangers of the Fated Place.",
    "vendorReason": "Void Vendor operates in the shadows, dealing in rare and forbidden artifacts from realms beyond comprehension. The Forbidden Void Tears are one such item, kept under lock and key for those who can truly appreciate their price in sanity.",
    "shippingDetail": "Ships via Temporal Retrieval Unit with a 24-hour delay to ensure the package arrives intact through time's tumultuous currents.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "Instantaneous, lasts until start of next turn",
      "endsWhen": "Destroyed upon incurring the sanity fracture penalty",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced for its rarity and the risk it poses to a character's mental stability.",
    "priceOriginal": 50000,
    "priceReviewedAt": "2026-07-25T14:48:34.934242+00:00",
    "aiReviewedAt": "2026-07-25T14:48:34.934242+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_quartz_dancer_uniform": {
    "id": "kivotos_item_quartz_dancer_uniform",
    "name": "Quartz Dancer's Ensemble - Semester 7 Variant",
    "description": "The Quartz Dancer's Ensemble – Semester 7 Variant is a gleaming uniform crafted from synthesized quartz fibers, designed for subtle manipulation of light and sound within Academy City’s echoing halls. This ensemble amplifies sound perception in crowded spaces by up to two levels, making it ideal for rallying supporters or subtly disrupting lectures without drawing immediate attention. The wearer's movements can slightly distort the ambient light, creating a shimmering effect that enhances their presence among peers.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "amplified_sound_perception",
      "light_shimmer"
    ],
    "vendor": "student_store",
    "shippedBy": "drone_delivery",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Amplified Sound Perception",
        "rules": "The wearer gains advantage on Perception checks related to sound for the duration of a short rest. This effect enhances their ability to discern subtle sounds and conversations in crowded spaces."
      },
      {
        "title": "Light Shimmer",
        "rules": "When the wearer performs an action that requires movement, they can create a shimmering light effect around them. This effect is visible within 10 feet and lasts for 1 minute or until the wearer moves again. No save DC is required."
      }
    ],
    "levelRequirementReason": "This ensemble's advanced technology requires a high level of proficiency in Academy City’s specialized courses.",
    "vendorReason": "The student store caters to the unique needs and resources of Academy City students, including their specialized uniforms.",
    "shippingDetail": "Ships via drone within a day, delivered directly to the dormitory.",
    "usage": {
      "activation": "Passive effect upon wearing the uniform.",
      "duration": "Until the wearer takes a short rest or removes the uniform.",
      "endsWhen": "The wearer stops wearing it or completes a short rest.",
      "charges": "Unlimited, recharges with a short rest."
    },
    "priceReason": "Balanced at 1000 XP to reflect its advanced technology and specialized use within Academy City’s educational environment.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:48:39.974209+00:00",
    "aiReviewedAt": "2026-07-25T14:48:39.974209+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk_4_semester_pins_of_discord": {
    "id": "kivotos_item_mk_4_semester_pins_of_discord",
    "name": "Mk.4 Semester Pins of Discord - Crimson Variant",
    "description": "The Mk.4 Semester Pins of Discord - Crimson Variant are a collection of sleek, crimson enamel pins that pulse with a suppressed, chaotic energy from the forbidden clubs of the Academy. When worn in multiples, these pins trigger unpredictable disruptions in nearby electronics and subtle shifts in social dynamics, causing temporary confusion among those around you. The wearer must be cautious as the pins' effects can inadvertently lead to embarrassing situations or awkward moments for anyone they interact with.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔥",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "night_only",
    "effects": [
      "electronic_interference",
      "social_shift"
    ],
    "vendor": "club_supply",
    "shippedBy": "express_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Electrical Disruption",
        "rules": "Activating involves wearing at least two pins simultaneously. The wearer must make a DC 15 Dexterity saving throw to avoid causing minor electrical interference in the immediate area, such as sparking lights or malfunctioning devices within 30 feet. This effect lasts for 1 minute and can be ended early with a successful concentration check."
      },
      {
        "title": "Social Disruption",
        "rules": "The pins subtly alter social interactions around the wearer. Any creature within 20 feet of them must succeed on a DC 14 Wisdom saving throw or become temporarily confused, acting erratically for 1 minute. This effect can be ended by successfully concentrating and passing the save."
      }
    ],
    "levelRequirementReason": "The pins are designed to be worn by students of any level but require a certain understanding of the social and electrical environments.",
    "vendorReason": "Club Supply specializes in items from the forbidden clubs, including these pins that can cause both academic and social disruptions.",
    "shippingDetail": "Expressed by a courier who has been warned of the pins' effects to ensure safe delivery without causing any accidental disruptions.",
    "usage": {
      "activation": "Activating involves wearing at least two pins simultaneously. This action can be taken as an action or a bonus action.",
      "duration": "1 minute, with concentration required for longer durations.",
      "endsWhen": "The wearer ceases concentrating on the pins' effects or successfully saves against their influence.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "The price reflects the mythic rarity and the unpredictable nature of the pins, providing a balance for players of all levels.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T14:48:59.648806+00:00",
    "aiReviewedAt": "2026-07-25T14:48:59.648806+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_forbidden_resonator_circulator_of_silence": {
    "id": "kivotos_item_forbidden_resonator_circulator_of_silence",
    "name": "Forbidden Resonator Circulator - Obsidian Variant",
    "description": "The Forbidden Resonator Circulator - Obsidian Variant, a salvaged relic from a collapsed student initiation ritual, emits an eerie, dark violet glow when activated. This device generates a localized field of absolute silence that can disorient and reduce the sensory input of those within its radius. The artifact's power is unpredictable; prolonged exposure increases the chance of hallucinations, making it both a potent tool for stealth operations and a dangerous weapon if not wielded with care.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🤫",
    "stock": 1,
    "rarity": "godly",
    "stockType": "special_order",
    "effects": [
      "absolute_silence_field",
      "chance_of_hallucination"
    ],
    "vendor": "academy_armory",
    "shippedBy": "encrypted_package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Absolute Silence Field",
        "rules": "When activated, this device creates a 10-foot radius centered on the user. All creatures within the area are subjected to an effect of absolute silence for 1 minute, during which they cannot hear or speak normally unless they succeed on a DC 20 Constitution saving throw."
      },
      {
        "title": "Chance of Hallucination",
        "rules": "Any creature that fails their save against the Absolute Silence Field has a 50% chance to experience vivid hallucinations for the duration of the silence effect. These effects are purely visual and auditory, not harmful but can severely impact situational awareness."
      }
    ],
    "levelRequirementReason": "The device's unpredictable nature requires a minimum level to ensure users have enough discipline and experience to handle its risks.",
    "vendorReason": "As salvaged from a ritual gone awry, the academy armory handles this artifact with caution, offering it only to those who can demonstrate appropriate training and understanding of its dangers.",
    "shippingDetail": "The package is sealed with arcane wards that prevent tampering until it reaches its intended recipient.",
    "usage": {
      "activation": "Action: The user must concentrate on the device for 1 minute to activate and maintain the field. Concentration is lost if the user takes any damage or if a creature within the radius fails their save against the Silence Field.",
      "duration": "Instantaneous activation, lasts 1 minute with concentration",
      "endsWhen": "Concentration ends when the user takes damage or a creature within the radius fails their save.",
      "charges": "Unlimited uses; can be reactivated after each use."
    },
    "priceReason": "The device's rarity and unpredictable nature justify its high price, despite being rechargeable. Its potential for both utility and danger ensures a premium value in the market.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T14:49:02.306126+00:00",
    "aiReviewedAt": "2026-07-25T14:49:02.306126+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_twilight_keeper_of_shattered_echoes": {
    "id": "animatopia_item_twilight_keeper_of_shattered_echoes",
    "name": "Twilight Keeper's Pelts of Shattered Echoes",
    "description": "The Twilight Keeper's Pelts of Shattered Echoes are intricately woven from the fur of nocturnal Shadow Lynxes, whose twilight luminescence pulses ever so faintly in dim light. Wearing these pelts grants you heightened night vision and the ability to momentarily hear whispers of past events, though their truth is often fragmented and misleading. These pelts also provide a subtle shadowy blend that makes you harder to detect by enemies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌙",
    "stock": 37,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "heightened_nightvision",
      "hear_whispers"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "beast_carrier",
    "levelRequirement": 25,
    "effectDetails": [
      {
        "title": "Heightened Nightvision",
        "rules": "While wearing these pelts, your vision is enhanced in dim light conditions. This enhancement provides a +2 bonus to Wisdom (Perception) checks made to detect things in dim light and allows you to see normally when the darkness exceeds what would be absolute blindness."
      },
      {
        "title": "Hear Whispers",
        "rules": "Once per short rest, you can focus your senses on hearing whispers of past events. This ability allows you to make a Wisdom (Insight) check against an unassociated DC 15 as if the event had just happened. The result is often fragmented and may require further investigation for clarity."
      }
    ],
    "levelRequirementReason": "The pelts are crafted from the rare and elusive Shadow Lynxes, making them difficult to obtain and their effects potent.",
    "vendorReason": "The Tribal Trader has exclusive access to the rare Shadow Lynx pelts due to his deep ties with the forest tribes who hunt these creatures.",
    "shippingDetail": "The pelts are delivered by a fleet of beast carriers, ensuring they reach their destination in one piece and with minimal wear and tear.",
    "usage": {
      "activation": "Passive effect for heightened nightvision; active use once per short rest for hear whispers.",
      "duration": "Instantaneous for heightened nightvision; lasts until the start of your next turn for hear whispers.",
      "endsWhen": "The effects end when you remove the pelts or are incapacitated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The pelts are crafted from a rare and elusive creature, making their value equivalent to 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:49:06.291696+00:00",
    "aiReviewedAt": "2026-07-25T14:49:06.291696+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_mk94_instinctive_pelts_of_the_stone_sentinels": {
    "id": "animatopia_item_mk94_instinctive_pelts_of_the_stone_sentinels",
    "name": "Mk.94 Instinctive Pelts of the Stone Sentinels",
    "description": "Forged under the watchful gaze of ancient moss-covered stone golems, these pelts resonate with an almost instinctive connection to the earth's rhythms. When worn, they grant a steady regeneration rate and resilience against territorial aggression from woodland creatures, as if the wearer shares in the guardianship of the forest. The pelts' weave is both ancient and resilient, imbuing the wearer with a deep sense of the natural world’s heartbeat and a protective barrier that wards off harm from those who would claim the forest as their own.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌿",
    "stock": 12,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "slow_healing",
      "resistance_to_animal_aggression"
    ],
    "vendor": "forest_market",
    "shippedBy": "winged_beast",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Slow Healing",
        "rules": "You gain a +1 bonus to your hit point maximum. This effect lasts for the duration of one long rest."
      },
      {
        "title": "Resistance to Animal Aggression",
        "rules": "While wearing these pelts, you have advantage on saving throws against effects from woodland creatures that would cause you harm or aggression. Additionally, hostile woodland creatures within 30 feet do not target you with their attacks for the duration of one long rest."
      }
    ],
    "levelRequirementReason": "The pelts are crafted to be worn by adventurers of any level who wish to connect more deeply with the natural world.",
    "vendorReason": "The vendors at Forest Market, long familiar with the lore and craftsmanship of ancient stone golems, are trusted sources for these rare and powerful items.",
    "shippingDetail": "Shipped by the swift winged beasts of the forest, the pelts arrive in pristine condition, though they must be worn within a week of delivery to maintain their full power.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Lasts for the duration of one long rest or until removed.",
      "endsWhen": "The wearer removes the pelts from their body or completes a long rest without them on.",
      "charges": "Unlimited, but the effect resets upon removal."
    },
    "priceReason": "Crafted with ancient stone golem essence and rare woodland materials, these pelts are priced at 1000 XP to reflect their unique crafting and powerful effects.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-25T14:49:10.863195+00:00",
    "aiReviewedAt": "2026-07-25T14:49:10.863195+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_the_bloodstained_keeper_of_wildsong": {
    "id": "animatopia_item_the_bloodstained_keeper_of_wildsong",
    "name": "The Bloodstained Keeper of Wildsong",
    "description": "The Bloodstained Keeper of Wildsong, crafted from the heart-throbbing hide of a corrupted Warhorn, radiates an unnerving energy that resonates with primal might. Wearers can summon the wild's untamed power through battle cries, enhancing their strength and drawing the ire of vengeful spirits. This item is said to have been found in the lair of a fabled beast, its presence now coveted by those who seek both power and peril.",
    "category": "equipment",
    "price": 1000,
    "icon": "🩸",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "delivery_only",
    "effects": [
      "strength_boost",
      "spirit_attraction"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "shadow_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Strength Boost",
        "rules": "When activated as an action, you gain a +2 bonus to your Strength score until the end of your next turn. This effect can only be used once per long rest."
      },
      {
        "title": "Spirit Attraction",
        "rules": "For every hour this item is worn, there is a 10% chance that vengeful spirits will attempt to claim you as their own. If one succeeds, the wearer must make a DC 15 Wisdom saving throw or be cursed with a Spirit Bond, which imposes disadvantage on all attack rolls and ability checks until removed."
      }
    ],
    "levelRequirementReason": "This item's power is accessible to even low-level characters, providing a challenge that matches their growing abilities.",
    "vendorReason": "The Beast Bazaar thrives on rare and exotic items that push the boundaries of reality, making this corrupted relic an ideal addition to its offerings.",
    "shippingDetail": "Ships via shadow messenger, ensuring swift and discreet delivery only during the night.",
    "usage": {
      "activation": "Activating this item requires a successful action. The effect is temporary and lasts until the end of your next turn.",
      "duration": "Instantaneous duration with a single use per long rest.",
      "endsWhen": "The effect ends when the wearer ceases to wear it or upon being removed by another creature's actions.",
      "charges": "Unlimited uses, but only one can be active at a time."
    },
    "priceReason": "This item is priced at 1000 XP as its rarity and power level make it an excellent value for both new and experienced adventurers.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T14:49:46.646050+00:00",
    "aiReviewedAt": "2026-07-25T14:49:46.646050+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_verdant_marked_caps_1": {
    "id": "mushroom_kingdom_item_verdant_marked_caps_1",
    "name": "Verdant Marked's Caps - Phase Shift",
    "description": "Verdant Marked's Caps, plucked from the heart of Northeast Midlands' fungal groves, pulse with a vibrant emerald light. Consuming these caps grants you the fleeting ability to phase through solid objects for five seconds, allowing swift escapes or stealthy acquisitions. Afterward, you experience a brief disorientation, leaving you vulnerable for 10 seconds. These caps also enhance your movement speed by 10%, making every step lighter and faster during your phase shift.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌀",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Phase Shift",
      "Increased Movement Speed"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Phase Shift",
        "rules": "Activates as a bonus action, lasts for 5 seconds. You can pass through solid objects within a 10-foot radius. Requires a successful DC 12 Dexterity saving throw or risk disorientation for the next 10 seconds."
      },
      {
        "title": "Increased Movement Speed",
        "rules": "Active while phase shifting, you gain a +10% bonus to your movement speed during this effect."
      }
    ],
    "levelRequirementReason": "Requires at least third-level proficiency to manage the disorientation risk and utilize the phase shift effectively.",
    "vendorReason": "Toad Town Market specializes in exotic fungi and rare botanical items, making these caps a fitting addition to their stock.",
    "shippingDetail": "Shipped by the Mushroom Cart, known for its reliable delivery through the fungal groves of Midlands.",
    "usage": {
      "activation": "Bonus action",
      "duration": "5 seconds and a 10-second disorientation window after use",
      "endsWhen": "Upon completion or if you fail the saving throw",
      "charges": "Unlimited, recharges on a short rest"
    },
    "priceReason": "Balanced for an uncommon item with unique and potent effects.",
    "priceOriginal": 789,
    "priceReviewedAt": "2026-07-25T14:50:00.916582+00:00",
    "aiReviewedAt": "2026-07-25T14:50:00.916582+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_mk_83_fungal_caps_2": {
    "id": "mushroom_kingdom_item_mk_83_fungal_caps_2",
    "name": "Mk.83 Fungal Caps - Resonance Amplification",
    "description": "Forged during the Coin Wars, these Mk.83 Fungal Caps are a marvel of alchemical ingenuity, crafted from the hardened shells of rare fungi found in the war-torn lands. Each cap resonates with the concentrated energy of gold and silver coins. When consumed, they amplify your hearing by 50%, allowing you to detect hidden caches or approaching enemies through subtle vibrations within a 20-foot radius, but at the cost of overwhelming sensory overload that can disorient you if not controlled.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔊",
    "stock": 7,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Enhanced Hearing",
      "Vibration Sense"
    ],
    "vendor": "wario_direct",
    "shippedBy": "rocket_ship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Hearing",
        "rules": "When consumed, these caps grant a +50% increase to your passive Perception checks for detecting sounds and hidden objects within 20 feet. The effect lasts until the start of your next turn after consuming the cap."
      },
      {
        "title": "Vibration Sense",
        "rules": "You gain the ability to detect movement within a 20-foot radius as long as you are not incapacitated or unconscious. This sense is heightened, allowing you to pinpoint the location and direction of any creature moving within range with a successful Wisdom (Perception) check."
      }
    ],
    "levelRequirementReason": "These caps are designed for beginners who need an edge in their coin-hunting endeavors but lack advanced alchemical knowledge.",
    "vendorReason": "Wario Direct specializes in rare and exotic items, making these fungal caps a natural fit for their inventory.",
    "shippingDetail": "Due to the delicate nature of these items, they are shipped via rocket ship, ensuring swift delivery but with a slight delay of two days.",
    "usage": {
      "activation": "Instantaneous consumption as an action.",
      "duration": "1 minute per cap consumed (up to 3 caps).",
      "endsWhen": "The effect ends when the duration expires or you are incapacitated, unconscious, or disoriented by sensory overload.",
      "charges": "Unlimited; each cap is a one-use item."
    },
    "priceReason": "These caps are priced at 1000 XP due to their unique alchemical properties and the rarity of the materials used in their creation.",
    "priceOriginal": 12500,
    "priceReviewedAt": "2026-07-25T14:49:33.398940+00:00",
    "aiReviewedAt": "2026-07-25T14:49:33.398940+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_the_fungal_caps_of_coins_3": {
    "id": "mushroom_kingdom_item_the_fungal_caps_of_coins_3",
    "name": "The Fungal Caps of Coins - Celestial Alignment",
    "description": "The Fungal Caps of Coins - Celestial Alignment, gleaming with an ethereal luminescence, are said to have been blessed by ancient celestial beings. Upon consumption, these rare caps grant a fleeting moment of divine favor, bestowing temporary invulnerability and a chance for a cosmic boon to fortify your spirit. Yet, their unpredictable nature can leave you vulnerable to psychic attacks, making them a dangerous yet invaluable treasure for the truly brave.",
    "category": "premium",
    "price": 1000,
    "icon": "✨",
    "stock": 1,
    "rarity": "godly",
    "stockType": "delivery_only",
    "effects": [
      "temporary invulnerability (3 seconds)",
      "chance for a beneficial cosmic event"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "dragon_airship",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Invulnerability",
        "rules": "The user becomes temporarily invulnerable to all attacks and damage for 3 seconds. This effect is instantaneous upon consumption of the caps."
      },
      {
        "title": "Cosmic Boon",
        "rules": "There is a 25% chance that after consuming the caps, you gain temporary hit points equal to your level + Constitution modifier (minimum 1). This effect lasts for 1 minute and ends if you take any damage."
      }
    ],
    "levelRequirementReason": "The Fungal Caps of Coins are accessible to all adventurers who can afford their exorbitant price, as they offer a potent yet unpredictable boost.",
    "vendorReason": "Koopa Shop has established trade routes that occasionally bring in rare and mystical items from distant realms.",
    "shippingDetail": "The dragon airship ensures the safe arrival of these delicate caps, often requiring a week to reach their destination due to the fragile nature of the shipment.",
    "usage": {
      "activation": "Instantaneous upon consumption",
      "duration": "3 seconds for invulnerability; 1 minute for cosmic boon (ends on damage)",
      "endsWhen": "Effect ends when you take damage or after its duration expires, whichever comes first",
      "charges": "Unlimited"
    },
    "priceReason": "The Fungal Caps of Coins are priced at 1000 XP due to their rarity and the unpredictable nature of their effects.",
    "priceOriginal": 65000,
    "priceReviewedAt": "2026-07-25T14:49:36.861313+00:00",
    "aiReviewedAt": "2026-07-25T14:49:36.861313+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_chronometric_herald_of_storm": {
    "id": "teyvat_item_chronometric_herald_of_storm",
    "name": "The Chronometric Herald of Storm’s Brand",
    "description": "The Chronometric Herald of Storm’s Brand is a pulsating obsidian orb etched with swirling glyphs that echo the ancient Dragonspine mountains. Crafted by god-smiths, this relic accelerates time momentarily, granting you and your allies increased movement speed and attack power against foes vulnerable to temporal distortions. Activated during moments of chaos, it also snares enemy projectiles and casts a brief disorientation spell on those caught in its wake.",
    "category": "equipment",
    "price": 1000,
    "icon": "⏳",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Surge",
      "Elemental Weakness Amplification"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "winged_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Surge",
        "rules": "Activates as a bonus action. Briefly accelerates time within a 10-foot radius, granting you and nearby allies advantage on Dexterity (Acrobatics) checks and increasing your movement speed by 20 feet for 10 seconds. Ends if the user takes damage."
      },
      {
        "title": "Elemental Weakness Amplification",
        "rules": "While activated, increases attack power against enemies vulnerable to temporal effects by +2d6. Lasts until the end of your next turn and can be used again after a short rest."
      }
    ],
    "levelRequirementReason": "This relic is designed for versatility, suitable for any adventurer who can wield it.",
    "vendorReason": "Mondstadt’s market offers rare and versatile items that cater to a wide range of adventurers' needs.",
    "shippingDetail": "Delivered swiftly by the winged messengers, ensuring you receive your Chronometric Herald in perfect condition.",
    "usage": {
      "activation": "Bonus action",
      "duration": "10 seconds duration; ends if user takes damage or if a new activation is made",
      "endsWhen": "User takes damage or another Temporal Surge is activated",
      "charges": "Unlimited, but can only be used once per short rest"
    },
    "priceReason": "The item's rarity and the unique god-smithing technique required for its creation justify a price of 1000 XP.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T14:50:07.405124+00:00",
    "aiReviewedAt": "2026-07-25T14:50:07.405124+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_abyssal_resonance_of_the_sands": {
    "id": "teyvat_item_abyssal_resonance_of_the_sands",
    "name": "Abyssal Resonance of the Sands – The Khthonic Cartouche",
    "description": "The Khthonic Cartouche, a small sandstone tablet adorned with ancient Khonoit runes and glowing with an eerie umbral light, is said to be a relic of the desert gods. Touching it unleashes a tempest that obliterates visibility within its radius, turning the air thick with swirling dunes that buffet foes for 6 seconds. The storm's howling wind leaves a trail of desiccating sand that continues to deal damage over time.",
    "category": "consumables",
    "price": 1000,
    "icon": "🏜️",
    "stock": 57,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "induces a blinding sandstorm",
      "deals damage over time"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "cargo_ship",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Induce Sandstorm",
        "rules": "Activates on command as an action. The sandstorm lasts for 6 seconds within a 20-foot radius centered on the user, reducing visibility and dealing 1d6 necrotic damage each second to all creatures in the area. A DC 15 Wisdom saving throw halves the damage."
      },
      {
        "title": "Damage Over Time",
        "rules": "The sandstorm also applies a 'blinding dust' effect, causing affected creatures to take an additional 1d6 necrotic damage at the start of their turns until the storm ends. This effect can be resisted with a successful DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to channel the ancient powers of the Khthonic Cartouche.",
    "vendorReason": "Liyue Harbor merchants have access to rare artifacts from the deserts of Teyvat, including this relic.",
    "shippingDetail": "Ships via the Windcarriers for expedited delivery within a week of order.",
    "usage": {
      "activation": "Action",
      "duration": "6 seconds",
      "endsWhen": "The storm dissipates at the end of its duration or if the user dismisses it early as an action.",
      "charges": "Unlimited, but requires concentration to maintain."
    },
    "priceReason": "Balanced for a rare artifact with unique environmental effects and limited utility in combat.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T14:50:45.105045+00:00",
    "aiReviewedAt": "2026-07-25T14:50:45.105045+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_umbral_branded_vison_of_the_shattered_wind": {
    "id": "teyvat_item_umbral_branded_vison_of_the_shattered_wind",
    "name": "Umbral Branded’s Vision of the Shattered Wind - The Aeravani Prism",
    "description": "The Aeravani Prism is a shimmering violet prism that captures and distorts wind currents with an ethereal glow. Crafted from the remnants of Umbral Branded’s lost nation, it grants brief bursts of increased speed and air control, echoing the mastery over the skies long forgotten by time. This relic allows for precise wind manipulation to deflect ranged attacks and creates small tornadoes that pull enemies closer, enhancing aerial combat with both agility and force.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Aerobic Burst",
      "Wind Deflection"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Sea Dragon Ship",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Aerobic Burst",
        "rules": "As a bonus action, the wielder can activate this effect to gain temporary flight for up to 1 minute. During this time, their movement speed increases by 30 feet while airborne. The duration ends if they land or take damage."
      },
      {
        "title": "Wind Deflection",
        "rules": "The wielder can use a bonus action to deflect one ranged attack per turn within 5 feet of them. If successful, the attack is redirected harmlessly away from its target and deals no damage. This ability has a recharge time of 1 minute."
      }
    ],
    "levelRequirementReason": "This item requires high-level proficiency to effectively utilize its abilities in combat.",
    "vendorReason": "Inazuma Imports specializes in rare artifacts from lost nations, making this prism a fitting addition to their inventory.",
    "shippingDetail": "Ships via the Sea Dragon Ship within two weeks of purchase.",
    "usage": {
      "activation": "Bonus action or reaction (Aerobic Burst), bonus action (Wind Deflection)",
      "duration": "1 minute per activation for Aerobic Burst; instantaneous for Wind Deflection",
      "endsWhen": "Landing, taking damage, or using a second deflection within the same turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "This item is priced to reflect its rarity and the expertise required to wield it effectively.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:50:04.026170+00:00",
    "aiReviewedAt": "2026-07-25T14:50:04.026170+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_ambered_tart_sworn": {
    "id": "leclaire_isle_item_ambered_tart_sworn",
    "name": "Ambered Tart Sworn to the Hearth",
    "description": "The Ambered Tart Sworn to the Hearth, a confection glazed with honey-infused amber syrup and baked until its shell crackles with warmth, is a testament to the Dough Folk's culinary prowess. This noble pastry not only sweetens the soul but also fortifies the spirit, granting a fleeting moment of blissful contentment that can bolster one’s resolve in times of trial. Consumed before long journeys, it is said to protect against misfortune and strengthen the heart, making every bite a reminder of home.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍯",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Blissful Contentment",
      "Fortified Spirit"
    ],
    "vendor": "dough_depot",
    "shippedBy": "swift_delivery_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blissful Contentment",
        "rules": "Upon consumption, the tart grants a +2 bonus to Charisma checks and a +10 increase in happiness for 60 seconds. This effect is temporary but can bolster one’s resolve and protect against fear effects by reducing their severity by 50%. The duration ends when the user completes an action or rests."
      },
      {
        "title": "Fortified Spirit",
        "rules": "For the next hour, the tart restores 2 points of Stamina. This effect can only be used once per long rest and is exhausted after use."
      }
    ],
    "levelRequirementReason": "Any adventurer can benefit from the tart's soothing effects before embarking on new quests.",
    "vendorReason": "The Dough Folk are renowned for their culinary creations, and this pastry is a staple in their offerings.",
    "shippingDetail": "Delivered within the hour from the nearest Dough Depot location.",
    "usage": {
      "activation": "Eaten as a consumable item",
      "duration": "60 seconds for Blissful Contentment; 1 hour for Stamina restoration",
      "endsWhen": "Action or rest, and after use during long rests respectively",
      "charges": "Unlimited"
    },
    "priceReason": "The tart's rarity and the unique benefits it provides justify its high price in XP.",
    "priceOriginal": 287,
    "priceReviewedAt": "2026-07-25T14:50:34.231503+00:00",
    "aiReviewedAt": "2026-07-25T14:50:34.231503+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_bronzed_biscuit_chronicle": {
    "id": "leclaire_isle_item_bronzed_biscuit_chronicle",
    "name": "Bronzed Biscuit Chronicle of the Rising Sun",
    "description": "The Bronzed Biscuit Chronicle of the Rising Sun is a delicacy forged in the heart of Le Claire Isle, where ancient geothermal vents fuel ovens that bake this treat. Crafted from sun-dried almonds and rare orchid honey, it's said to grant visions into future possibilities, though these glimpses are often cryptic and unsettling. A curious piece of equipment, it enhances divination efforts and offers resistance against psychic harm.",
    "category": "equipment",
    "price": 1000,
    "icon": "☀️",
    "stock": 12,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Divination Enhancer",
      "Psychic Resistance"
    ],
    "vendor": "pastry_palace",
    "shippedBy": "dragon_scale_carrier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Divination Enhancer",
        "rules": "When consumed, the biscuit grants a +3 bonus to Intelligence (Arcana) checks related to divination or prediction. This effect lasts for 1 minute and can be used once per short rest."
      },
      {
        "title": "Psychic Resistance",
        "rules": "For 30 seconds after consumption, the user gains resistance to psychic damage from any source. If the user is already resistant to psychic damage, they instead gain advantage on saving throws against such effects for this duration."
      }
    ],
    "levelRequirementReason": "The biscuit's effects are potent enough to influence divination and protect against psychic attacks, making it accessible early in a character's journey.",
    "vendorReason": "Pastry Palace is renowned for its culinary magic and has the expertise to craft such a mystical treat.",
    "shippingDetail": "The biscuit must be delivered by dragon-scale carrier for optimal freshness, ensuring the visions it grants are clear and true.",
    "usage": {
      "activation": "Eaten as a meal",
      "duration": "1 minute or until used in divination checks",
      "endsWhen": "Ends at the start of your next turn if not used in an Intelligence (Arcana) check related to divination within its duration.",
      "charges": "Unlimited"
    },
    "priceReason": "The biscuit's unique crafting process, combined with its rare ingredients and mystical properties, justifies this price.",
    "priceOriginal": 1250,
    "priceReviewedAt": "2026-07-25T14:50:19.962066+00:00",
    "aiReviewedAt": "2026-07-25T14:50:19.962066+00:00",
    "aiReviewVersion": 1
  },
  "leclaire_isle_item_crimson_tart_of_regret": {
    "id": "leclaire_isle_item_crimson_tart_of_regret",
    "name": "Crimson Tart of Regret, Sworn to the Bitterest Dreams",
    "description": "The Crimson Tart of Regret, Sworn to the Bitterest Dreams, is a small, dark red tart with a filling that glistens like congealed blood. Infused with spiced star anise and baked until its essence shimmers, this pastry forces the eater to relive a painful memory—often their most profound regret. Consumed only by those seeking catharsis or closure, it grants brief solace before plunging the imbiber into melancholy. Only the brave—or foolhardy—venture near this confection.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🩸",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Flashback of Deepest Regret",
      "Cathartic Comfort"
    ],
    "vendor": "sweet_supplies",
    "shippedBy": "phantom_messenger",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Flashback of Deepest Regret",
        "rules": "The user experiences a vivid, painful memory related to their deepest regret. This effect lasts for 1 hour and grants advantage on saving throws against fear effects during this time. The tart must be consumed as an action."
      },
      {
        "title": "Cathartic Comfort",
        "rules": "Reduces exhaustion by 5 points but imposes disadvantage on all Wisdom (Perception) checks until the start of your next long rest. This effect requires no activation and is instantaneous upon consumption."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers at any level who seek personal growth or closure.",
    "vendorReason": "Sweet Supplies specializes in rare, magical confections that can aid the soul as much as the body.",
    "shippingDetail": "Ships via the Phantom Messenger, known for its speed and discretion. Delivery is immediate upon payment.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 hour or until consumed by fear effects",
      "endsWhen": "The effect ends when a successful DC 15 Wisdom saving throw is made against fear effects, or the tart's flavor is fully experienced.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at 1000 XP as it offers profound yet temporary benefits for adventurers seeking personal growth.",
    "priceOriginal": 8900,
    "priceReviewedAt": "2026-07-25T14:50:24.921949+00:00",
    "aiReviewedAt": "2026-07-25T14:50:24.921949+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_the_gilded_wrights_harmonious_resonator": {
    "id": "equestria_item_the_gilded_wrights_harmonious_resonator",
    "name": "The Gilded Wright's Harmonious Resonator",
    "description": "The Gilded Wright's Harmonious Resonator is a delicate yet robust crystal instrument crafted by Silas Stonehoof, renowned for his mastery of earth and wind magic. Its golden surface gleams with an internal harmony that resonates with the natural world. When held aloft during combat, it amplifies protective energies, creating a shimmering aura that reflects both stability and resilience. This resonator is known to disrupt spells cast by enemies, offering a shield against earth-based attacks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🛡️",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Stabilizing Shield",
      "Disruptive Aura"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pony Express",
    "levelRequirement": 20,
    "effectDetails": [
      {
        "title": "Stabilizing Shield",
        "rules": "When activated as an action, the Harmonious Resonator grants a +1 bonus to AC and advantage on saving throws against spells or effects with the earth descriptor. This effect lasts until the start of your next turn."
      },
      {
        "title": "Disruptive Aura",
        "rules": "The resonator emits a disruptive field within 30 feet around you, imposing disadvantage on attack rolls made by creatures with the earth subtype. This effect persists for 1 minute or until you are incapacitated."
      }
    ],
    "levelRequirementReason": "Requires high-level expertise to wield effectively in combat and maintain its magical resonance.",
    "vendorReason": "Known for their extensive stock of rare and powerful artifacts, Canterlot Commerce is a reliable source for such items.",
    "shippingDetail": "Delivered within one week via the esteemed Royal Pony Express service.",
    "usage": {
      "activation": "Action",
      "duration": "Until the start of your next turn or until you are incapacitated, whichever comes first",
      "endsWhen": "You are incapacitated or lose concentration (as if concentrating on a spell)",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Reflects its craftsmanship by a legendary crystalwright and its powerful utility in combat.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T14:50:39.084167+00:00",
    "aiReviewedAt": "2026-07-25T14:50:39.084167+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_mk.23_sparkly_crystal_fragments_of_echoing_storms": {
    "id": "equestria_item_mk.23_sparkly_crystal_fragments_of_echoing_storms",
    "name": "Mk.23 Sparkly Crystal Fragments of Echoing Storms",
    "description": "The Mk.23 Sparkly Crystal Fragments of Echoing Storms are jagged, iridescent shards harvested from the heart of a captured thundercloud by Ponyville's eccentric inventor Fizzwick Sprocket. These crystals pulse with residual electrical energy, crackling faintly and emitting a chilling static. They can be held to restore 25 hit points and increase speed by 10% for 30 seconds, but they also have an unpredictable side effect: there’s a 5% chance that using them will stun the wielder's target foe.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡",
    "stock": 68,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Restores HP",
      "Increases Speed"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Standard Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Restore Hit Points",
        "rules": "When held, this item restores 25 hit points to the user. The effect is instantaneous and has no save DC or duration limit."
      },
      {
        "title": "Increase Speed",
        "rules": "While holding these fragments, the user's speed increases by 10% for a period of 30 seconds. This effect ends if the user drops the fragments, takes damage, or uses an action to end it early."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and adventurers who may not yet have reached higher levels.",
    "vendorReason": "Fizzwick Sprocket, the inventor of these fragments, sells them at his market stall to support Ponyville's growing community.",
    "shippingDetail": "Delivered via Standard Delivery service within three days.",
    "usage": {
      "activation": "Holding the fragments",
      "duration": "Instantaneous and lasts for 30 seconds",
      "endsWhen": "If the user drops them, takes damage, or uses an action to end it early",
      "charges": "Unlimited"
    },
    "priceReason": "The price is set at 1000 XP as a balanced value for its level of power and utility.",
    "priceOriginal": 312,
    "priceReviewedAt": "2026-07-25T15:18:36.277176+00:00",
    "aiReviewedAt": "2026-07-25T15:18:36.277176+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_the_aureate_crest_of_resonance_faction": {
    "id": "equestria_item_the_aureate_crest_of_resonance_faction",
    "name": "The Aureate Crest of Resonance Faction",
    "description": "The Aureate Crest of Resonance Faction, a shimmering artifact forged from Celestia's celestial essence and adorned with iridescent auroc crystals, hums with an ancient power that resonates in harmony with the elements. This crest not only amplifies the wearer’s magical potency but also serves as a symbol of dedication to the Harmony Faction. Wielders find themselves attuned to elemental magic, their stress and anxiety dissolving under its calming aura.",
    "category": "faction",
    "price": 6500,
    "icon": "✨",
    "stock": 9,
    "rarity": "rare",
    "stockType": "special_order",
    "effects": [
      "Faction Symbol",
      "Elemental Amplification"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Crystal Courier",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Faction Symbol (Passive)",
        "rules": "The wearer gains access to advanced Harmony Faction spells. This effect is always active, enhancing the caster's connection to elemental magic and granting +2 bonus to Charisma (Intimidation) checks."
      },
      {
        "title": "Elemental Amplification",
        "rules": "Activates as a bonus action. The wearer’s next spell of 1st level or higher has advantage on its saving throw, and the spell's duration is doubled. This effect can be used once per long rest."
      }
    ],
    "levelRequirementReason": "This crest requires significant power to channel the advanced spells and harmonize with Celestia’s celestial essence.",
    "vendorReason": "The Crystal Empire, as a bastion of magical artifacts, holds exclusive rights to sell items imbued with the essence of the Harmony Faction.",
    "shippingDetail": "Ships via the Crystal Courier within one week of purchase. Expedited shipping available at extra cost.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the end of next turn",
      "endsWhen": "The effect ends when a new spell is cast or the wearer takes damage from an elemental source",
      "charges": "Once per long rest"
    },
    "priceReason": "This crest’s rarity and power, combined with its exclusive vendor and limited availability, justify this price.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-25T14:51:02.735248+00:00",
    "aiReviewedAt": "2026-07-25T14:51:02.735248+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_celestial_miner_shards": {
    "id": "connectopia_item_celestial_miner_shards",
    "name": "Celestial Miner's Shard Cluster - Phase 7",
    "description": "The Celestial Miner's Shard Cluster - Phase 7 glows faintly as it rests in your palm, a collection of shimmering mineral fragments forged from the upper reaches of Connectopia’s canyons. Crafted by the ancient miners who once ruled these lands, each shard resonates with a celestial hum that enhances your mining prowess. When you wield this cluster, hidden veins of rare block compounds are revealed with uncanny precision, and your efficiency in extracting them is greatly improved.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛏️",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Miner's Edge",
      "Vein Revelation"
    ],
    "vendor": "block_smith",
    "shippedBy": "Automated Drone Delivery",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Miner's Edge",
        "rules": "While holding the Celestial Miner's Shard Cluster - Phase 7, your mining speed increases by 15%. This effect is passive and does not require activation."
      },
      {
        "title": "Vein Revelation",
        "rules": "Once per short rest, you can focus on a section of rock to reveal hidden veins of rare block compounds. You must succeed on an Intelligence (Investigation) check with a DC equal to 10 + the rarity level of the block compound. This effect is limited to once per long rest."
      }
    ],
    "levelRequirementReason": "This advanced mining tool requires significant skill and experience to master.",
    "vendorReason": "The Block Smith specializes in rare and ancient mining tools, which are perfect for expert miners like those who need the Celestial Miner's Shard Cluster - Phase 7.",
    "shippingDetail": "Ships directly from Connectopia’s canyons, ensuring fresh minerals within a week of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required for mining speed increase.",
      "duration": "Instantaneous; once per short rest to reveal hidden veins.",
      "endsWhen": "Exhausted after one use per long rest.",
      "charges": "Unlimited, recharges on a full night’s sleep."
    },
    "priceReason": "The advanced technology and craftsmanship required for this shard cluster justify its high price in experience points.",
    "priceOriginal": 250,
    "priceReviewedAt": "2026-07-25T14:51:06.120171+00:00",
    "aiReviewedAt": "2026-07-25T14:51:06.120171+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_pioneer_cursed_grapple_hook": {
    "id": "connectopia_item_pioneer_cursed_grapple_hook",
    "name": "Pioneer's Cursed Grapple Hook - Timberfang",
    "description": "The Pioneer's Cursed Grapple Hook - Timberfang is a relic of the old frontier, forged from salvaged timber and imbued with an ancient spirit that once roamed these lands. Its tethered line is said to occasionally entangle with phantom settlers, creating small tremors as it does so. Use this hook to swing across chasms or reach distant mining sites at breakneck speed, but beware the unpredictable nature of its movements.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛓️",
    "stock": 23,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Grapple Range +25m",
      "Occasional Phantom Entanglement"
    ],
    "vendor": "pioneer_post",
    "shippedBy": "Courier Bot - Express Route",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Phantom Entanglement",
        "rules": "When used, there is a 10% chance that the hook triggers a small tremor. The tremor deals 1d4 force damage to any creature within 5 feet and knocks them prone if they fail a DC 13 Dexterity saving throw."
      },
      {
        "title": "Grapple Range +25m",
        "rules": "This effect allows you to use the grapple hook at an additional 25 meters of reach. You can make a grapple check using your Strength modifier plus half your proficiency bonus as usual, but this range does not include any distance covered by movement."
      }
    ],
    "levelRequirementReason": "The item's unpredictable nature requires at least level 1 to handle effectively.",
    "vendorReason": "Pioneer Post is known for dealing in frontier relics and this hook is a cherished artifact of the old west.",
    "shippingDetail": "The Courier Bot ensures quick delivery, but due to its cursed nature, it may take an additional day if the tremor effect is triggered during shipment.",
    "usage": {
      "activation": "As a bonus action, you can activate the grapple hook's tethering ability.",
      "duration": "Instantaneous",
      "endsWhen": "The hook is retracted or destroyed by force; it regains charges when not in use for 1d4 hours.",
      "charges": "Unlimited, but only one use per day due to the cursed nature."
    },
    "priceReason": "This item combines rare materials with a powerful effect, making its price fair yet steep.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T14:51:14.662602+00:00",
    "aiReviewedAt": "2026-07-25T14:51:14.662602+00:00",
    "aiReviewVersion": 1
  },
  "connectopia_item_settler_service_cart_repair": {
    "id": "connectopia_item_settler_service_cart_repair",
    "name": "Settler's Service Cart - Stabilized Unit Beta",
    "description": "The Settler's Service Cart - Stabilized Unit Beta is a rugged, forgehearted marvel of engineering, crafted to endure Connectopia’s harshest terrains. Its reinforced chassis and automated repair systems instantly mend minor malfunctions in other carts, ensuring that supply lines stay unbroken even under the most grueling conditions. This cart doubles as a mobile workshop, capable of reducing repair costs by 20%, making it an indispensable asset for any adventurer or settler facing unpredictable challenges on the road.",
    "category": "services",
    "price": 1000,
    "icon": "🛠️",
    "stock": 9,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Automated Repair",
      "Reduced Repair Costs"
    ],
    "vendor": "craft_corner",
    "shippedBy": "Mobile Repair Depot - Scheduled Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Automated Repair",
        "rules": "Instantly repairs minor damage to other carts and equipment within a 30-foot radius. Requires line of sight and direct contact with the damaged item. Targets must be within the cart's repair range, which is extended by its reinforced chassis."
      },
      {
        "title": "Reduced Repair Costs",
        "rules": "Reduces the cost of repairs to other carts or equipment by 20% for the next hour. Applies as a passive benefit while the cart remains operational within sight and reach of the user."
      }
    ],
    "levelRequirementReason": "This item is suitable for adventurers of all levels, but it requires a basic understanding of mechanics to operate effectively.",
    "vendorReason": "Craft Corner specializes in high-quality service items and repairs, making them the ideal vendor for this rugged cart.",
    "shippingDetail": "Ships via scheduled delivery, ensuring timely arrival to any location within Connectopia.",
    "usage": {
      "activation": "Passive effect that activates automatically when the cart is operational and within sight of damaged equipment.",
      "duration": "Instantaneous repair; reduced cost benefit lasts for one hour.",
      "endsWhen": "The cart's power source depletes or repairs are completed. The passive cost reduction ends after an hour regardless.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility and the materials used in its construction, ensuring it is a valuable addition without being overpowered.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:51:31.351494+00:00",
    "aiReviewedAt": "2026-07-25T14:51:31.351494+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_crimson_void_binder": {
    "id": "doughnut_hole_item_crimson_void_binder",
    "name": "The Crimson Void Binder",
    "description": "The Crimson Void Binder is a viscous, pulsating tear of reality that shimmers with an unsettling crimson light. When consumed, it momentarily solidifies the ambient void around you, granting fleeting resistance to dimensional instability and allowing brief manipulation of nearby negative space. Its power can be felt in the way it warps gravity for 60 seconds, making small objects phase through each other as if they were never there at all.",
    "category": "consumables",
    "price": 1000,
    "icon": "🩸",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Void Resistance",
      "Spatial Warp"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Courier Drone",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Void Resistance",
        "rules": "Activates on consumption. Grants a +4 bonus to saving throws against spells or effects that would manipulate the fabric of reality for 15 seconds. Ends when the duration expires."
      },
      {
        "title": "Spatial Warp",
        "rules": "Grants the user the ability to phase through small objects within a 30-foot radius as long as they are consumed. This effect lasts for 60 seconds and can be used once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires at least 15th level to utilize the dimensional manipulation and gravity control effects effectively.",
    "vendorReason": "Void Vendor is known for dealing in rare and powerful items that manipulate the very fabric of reality, making The Crimson Void Binder a fitting addition to their inventory.",
    "shippingDetail": "Ships directly from the void, arriving with a slight delay as it traverses through different dimensions.",
    "usage": {
      "activation": "Consumption",
      "duration": "15 seconds for Void Resistance; 60 seconds for Spatial Warp",
      "endsWhen": "Duration expires or if used again before resting",
      "charges": "Unlimited, but can only be used once per short or long rest"
    },
    "priceReason": "The balanced XP price reflects the item's rare nature and powerful effects that enhance reality manipulation.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:52:03.996255+00:00",
    "aiReviewedAt": "2026-07-25T14:52:03.996255+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_wicked_resonance_fragment": {
    "id": "doughnut_hole_item_wicked_resonance_fragment",
    "name": "Wicked Resonance Fragment - Mk.77",
    "description": "The Wicked Resonance Fragment - Mk.77 is a jagged, pulsating shard of solidified dissonance. Crafted from the very essence of chaos and madness, this fragment seems to actively seek out and amplify the bearer's darkest thoughts, potentially leading to fleeting moments of temporary insanity or profound perceptual clarity. Its malevolent energy can cause auditory hallucinations for 30 seconds, forcing the wearer to confront their most unsettling emotions in vivid detail.",
    "category": "equipment",
    "price": 1800,
    "icon": "😈",
    "stock": 17,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "dark resonance amplification",
      "psychic resistance boost"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Shadow Messenger",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Dark Resonance Amplification",
        "rules": "The bearer must make a DC 15 Wisdom saving throw or suffer from temporary madness for 1 minute. This effect can be resisted once per long rest."
      },
      {
        "title": "Psychic Resistance Boost",
        "rules": "The bearer gains advantage on all saving throws against psychic damage and effects until the start of their next turn, with a maximum duration of 8 hours in any given day."
      }
    ],
    "levelRequirementReason": "This fragment's malevolent energy is too powerful for those less experienced or less resilient to its influence.",
    "vendorReason": "Hole Hawker specializes in exotic and dangerous items, making the Wicked Resonance Fragment a natural addition to their inventory.",
    "shippingDetail": "The Shadow Messenger ensures discreet delivery within three days of order placement.",
    "usage": {
      "activation": "Passive effect upon donning the fragment; ends when removed or destroyed.",
      "duration": "Instantaneous, with a daily cooldown period.",
      "endsWhen": "Removed by the bearer or destroyed in battle.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The item's rarity and powerful effects justify its high price tag.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T14:52:00.987644+00:00",
    "aiReviewedAt": "2026-07-25T14:52:00.987644+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_anomalous_chronal_tears_of_silence": {
    "id": "doughnut_hole_item_anomalous_chronal_tears_of_silence",
    "name": "Anomalous Chronal Tears of Silence - Variant Theta",
    "description": "The Anomalous Chronal Tears of Silence - Variant Theta are obsidian spheres with a shimmering, almost liquid surface. When held, they create a localized temporal disturbance that muffles sound and momentarily freezes time within their vicinity, allowing the wielder to glimpse fleeting echoes of past events. These tears are said to have been crafted from the very fabric of the timestream itself by an ancient artifact forger known only as 'Silence'.",
    "category": "forbidden",
    "price": 1000,
    "icon": "🤫",
    "stock": 3,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Muffle",
      "Chronal Echo Glimpse"
    ],
    "vendor": "center_seller",
    "shippedBy": "Temporal Delivery Unit – Class VII",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Muffle",
        "rules": "Activate on a bonus action to create a localized silence within a 10-foot radius for 5 seconds. During this time, all sound is muffled and movement appears distorted. This effect has no save DC and can be used once per long rest."
      },
      {
        "title": "Chronal Echo Glimpse",
        "rules": "Once per short or long rest, the wielder gains a brief insight into past events within their line of sight for 10 seconds. This provides advantage on one Wisdom (Perception) check related to detecting temporal anomalies."
      }
    ],
    "levelRequirementReason": "Requires a certain understanding of chronal mechanics not available below level 5.",
    "vendorReason": "Known for their extensive knowledge in rare and ancient artifacts, the Center Seller often carries unique items like these Chronal Tears.",
    "shippingDetail": "Delivered via a secure temporal flux, ensuring the item arrives undistorted by time shifts.",
    "usage": {
      "activation": "Bonus action to activate, once per short or long rest for Temporal Muffle; once per day for Chronal Echo Glimpse.",
      "duration": "5 seconds for Temporal Muffle; 10 seconds for Chronal Echo Glimpse.",
      "endsWhen": "Effect duration ends naturally after time is restored, or the item is destroyed.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price considering its unique temporal effects and rarity.",
    "priceOriginal": 52000,
    "priceReviewedAt": "2026-07-25T14:51:49.839247+00:00",
    "aiReviewedAt": "2026-07-25T14:51:49.839247+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_electro_mora_of_reverie": {
    "id": "teyvat_item_electro_mora_of_reverie",
    "name": "The Electro Mora of Reverie Granted",
    "description": "The Electro Mora of Reverie Granted, a pulsating orb that crackles with the restless energy of Mondstadt's electro spirits, grants you heightened combat awareness and a subtle amplification of prowess against Anemo-aligned foes. Held in your hand, it channels the very essence of the city’s guardian, Mora, imbuing you with a surge of power that can turn the tide of battle when faced with wind-elemental adversaries.",
    "category": "consumables",
    "price": 1000,
    "icon": "⚡️",
    "stock": 32,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Anemo Amplifier",
      "Mora's Reverie"
    ],
    "vendor": "mondstadt_market",
    "shippedBy": "Sky Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Anemo Amplifier",
        "rules": "When activated, this item grants a +15% increase to your attack damage against Anemo-aligned enemies for 60 seconds. This effect can be used once per short or long rest."
      },
      {
        "title": "Mora's Reverie",
        "rules": "There is a 25% chance that when you critically hit an Anemo enemy, they will be stunned for 1 round. This effect cannot be triggered more than once every 24 hours."
      }
    ],
    "levelRequirementReason": "Players must have reached at least level 10 to harness the full power of this artifact.",
    "vendorReason": "The market in Mondstadt is known for its diverse and powerful artifacts, and The Electro Mora of Reverie Granted is no exception.",
    "shippingDetail": "Ships within three days with Sky Courier's express delivery service.",
    "usage": {
      "activation": "Activates as a bonus action when you critically hit an Anemo enemy.",
      "duration": "60 seconds, or until the target is no longer an Anemo-aligned enemy.",
      "endsWhen": "The effect ends if you are incapacitated or the item is destroyed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "This artifact is crafted with rare materials and imbued with powerful magic, making it a valuable but not overpowered purchase for players of level 10 and above.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:52:07.952504+00:00",
    "aiReviewedAt": "2026-07-25T14:52:07.952504+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_sacred_granted_of_lithos": {
    "id": "teyvat_item_sacred_granted_of_lithos",
    "name": "Sacred Granted’s Lithos Resonance",
    "description": "Forged within the sacred confines of Liyue Harbor, this amulet captures the very essence of the earth's core in its molten heart. When worn, it channels the Geo-resonance into a protective shield around you, reducing physical damage by 10% and providing a steady pulse that counters Earth-based attacks with an additional 5%. Its arcane geometry whispers tales of ancient geomantic rituals, safeguarding the wearer from the very ground they walk upon.",
    "category": "equipment",
    "price": 1000,
    "icon": "⛰️",
    "stock": 18,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Geo Resonance Shield",
      "Earth Counter"
    ],
    "vendor": "liyue_harbor",
    "shippedBy": "Sea Serpent Express",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Geo Resonance Shield",
        "rules": "When activated as a bonus action, this amulet grants a +10% increase to your AC and provides +3 Geo Resistance. This effect lasts for 1 minute or until you take damage from a non-Geo attack, at which point the shield dissipates."
      },
      {
        "title": "Earth Counter",
        "rules": "For every 5 points of physical damage you mitigate with this amulet's effects, you gain temporary hit points equal to half that amount. This effect stacks up to +10 temporary hit points and does not exceed your maximum hit point total."
      }
    ],
    "levelRequirementReason": "The intricate craftsmanship and sacred energies embedded in the amulet demand a high level of expertise to wield effectively.",
    "vendorReason": "As guardians of ancient lore, the artisans at Liyue Harbor are entrusted with the creation and distribution of such powerful relics.",
    "shippingDetail": "Delivered swiftly by the Sea Serpent Express, ensuring this amulet arrives in pristine condition.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 minute or until you take damage from a non-Geo attack",
      "endsWhen": "Damage from a non-Geo attack or after 1 minute",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced to offer significant defensive benefits without overshadowing other gear options.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:52:21.392618+00:00",
    "aiReviewedAt": "2026-07-25T14:52:21.392618+00:00",
    "aiReviewVersion": 1
  },
  "teyvat_item_mk17_electro_mora_of_flux": {
    "id": "teyvat_item_mk17_electro_mora_of_flux",
    "name": "Mk.17 Electro Mora of Flux Granted",
    "description": "The Mk.17 Electro Mora of Flux Granted is a delicate sphere crafted from ancient Inazuman bronze and encased in a lustrous flux crystal. It hums with latent electrical energy, a relic salvaged from the depths of an underwater shrine dedicated to the flow of time. This artifact can be used to momentarily disrupt electro currents, granting brief bursts of power and creating a localized surge that snares foes in its grasp.",
    "category": "curiosities",
    "price": 4500,
    "icon": "🌀",
    "stock": 7,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Flux Surge",
      "Snares of Flux"
    ],
    "vendor": "inazuma_imports",
    "shippedBy": "Phantom Delivery Drone",
    "levelRequirement": 48,
    "effectDetails": [
      {
        "title": "Flux Surge",
        "rules": "As a bonus action, the user can activate the Mora to unleash a surge of electro energy within a 5-foot radius. All enemies in that area take 2d6 lightning damage and are pushed back 10 feet. The effect lasts for 1 minute."
      },
      {
        "title": "Snares of Flux",
        "rules": "The Mora emits an electromagnetic field when activated, reducing the movement speed of all creatures within a 30-foot radius by half for 2 seconds. This effect can be triggered once per long rest."
      }
    ],
    "levelRequirementReason": "This device requires significant magical knowledge and control to harness its volatile electro energy.",
    "vendorReason": "Inazuma Imports specializes in exotic artifacts from forgotten shrines, making this relic an appropriate addition to their inventory.",
    "shippingDetail": "The Phantom Delivery Drone ensures swift and secure transport of the Mora, guaranteeing it arrives pristine and intact.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 Minute",
      "endsWhen": "The effect ends when a creature moves out of the radius or at the end of its next turn",
      "charges": "Unlimited"
    },
    "priceReason": "The artifact's ancient origins and powerful effects justify this balanced price.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-25T14:52:16.978060+00:00",
    "aiReviewedAt": "2026-07-25T14:52:16.978060+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_sunstone_dancer_of_valar": {
    "id": "middle_earth_item_sunstone_dancer_of_valar",
    "name": "Sunstone Dancer of Valar",
    "description": "The Sunstone Dancer of Valar is an elven cloak, its threads spun from solidified sunlight and enchanted with the ancient songs of the Valar. Worn during perilous journeys through Middle-earth, it not only provides a shimmering protective aura but also grants bursts of radiant warmth that bolster stamina. The fabric dances in the wind like a celestial being, its movement both mesmerizing and comforting to those who wear it.",
    "category": "equipment",
    "price": 1000,
    "icon": "☀️",
    "stock": 35,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Radiant Warmth",
      "Celestial Aura"
    ],
    "vendor": "elven_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Radiant Warmth",
        "rules": "At the start of each of your turns while wearing the cloak, you gain a +1 bonus to your Constitution saving throws and can recover a number of hit points equal to 5 plus your level."
      },
      {
        "title": "Celestial Aura",
        "rules": "While wearing the cloak, you have a shimmering protective aura that reduces all fire damage you take by 20% for up to 1 minute. This effect ends if you take any non-fire damage or are incapacitated."
      }
    ],
    "levelRequirementReason": "This cloak requires significant magical power, making it suitable only for seasoned adventurers.",
    "vendorReason": "The elven market specializes in rare artifacts and relics of great power, ensuring that this enchanted item is available to those who can afford its price.",
    "shippingDetail": "Ships via the Winged Courier, known for swift and reliable deliveries across Middle-earth.",
    "usage": {
      "activation": "Passive effect",
      "duration": "1 minute",
      "endsWhen": "You take non-fire damage or become incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "The balance is maintained by the cloak's limited daily stock and its significant magical components.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:52:19.337969+00:00",
    "aiReviewedAt": "2026-07-25T14:52:19.337969+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_orcish_rune_of_grimstone_whisper": {
    "id": "middle_earth_item_orcish_rune_of_grimstone_whisper",
    "name": "Orcish Rune of Grimstone Whisper",
    "description": "Forged deep within Mordor's infernal forges, the Orcish Rune of Grimstone Whisper glows with a malevolent, guttural pulse. Holding it momentarily allows you to grasp fleeting fragments of ancient orcish whispers—tales of forgotten battles and rituals that seem to echo from the very pits of Sauron's domain. The rune's resonant hum is both mesmerizing and perilous; understanding its fragmented messages comes at a cost, as your mind begins to unravel in the chaos of its whispering.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👹",
    "stock": 12,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Orcish Whisper",
      "Resilience Against Fear"
    ],
    "vendor": "dwarven_forge",
    "shippedBy": "Grimstone Cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Orcish Whisper",
        "rules": "As a bonus action, you can focus on the rune for up to 1 minute. While active, you gain temporary access to fragments of the orcish language. You can understand and speak orcish as if fluent, but interpreting the messages is fraught with danger; there's a 20% chance each round that you become confused (as the effect) until your next short or long rest."
      },
      {
        "title": "Resilience Against Fear",
        "rules": "While in contact with the rune, you have advantage on saving throws against fear effects. Additionally, if you are already affected by a fear effect when you activate the rune, you can make an additional saving throw against it at the start of your next turn."
      }
    ],
    "levelRequirementReason": "The rune's malevolent energy requires a basic understanding of resilience to handle its whispers.",
    "vendorReason": "The dwarves of Erebor, ever intrigued by dark artifacts, have acquired and studied this cursed relic.",
    "shippingDetail": "Shipped with special care to prevent the rune from affecting the courier's mind.",
    "usage": {
      "activation": "Bonus action to activate; remains active for up to 1 minute.",
      "duration": "Up to 1 minute, or until you stop focusing on it.",
      "endsWhen": "You stop concentrating, or if you become confused by the whispers.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The rune's dark origin and the perilous nature of its effects justify a high price.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T14:52:26.338598+00:00",
    "aiReviewedAt": "2026-07-25T14:52:26.338598+00:00",
    "aiReviewVersion": 1
  },
  "middle_earth_item_mk_86_cloak_of_shire_protection": {
    "id": "middle_earth_item_mk_86_cloak_of_shire_protection",
    "name": "Mk.86 Cloak of Shire Protection",
    "description": "The Mk.86 Cloak of Shire Protection is a meticulously crafted garment made from sturdy wool and reinforced with hobbit-engineered stitching. It features hidden pockets for supplies and a hood that doubles as a small shelter, providing excellent protection against the elements. Known to enhance survival chances in the wild, it subtly increases your carrying capacity by 10% and offers a 5% chance of finding extra food or supplies during your travels.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧺",
    "stock": 78,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Protection Against Elements",
      "Increased Carrying Capacity"
    ],
    "vendor": "shire_shop",
    "shippedBy": "Cart Pony",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Protection Against Elements",
        "rules": "The cloak provides moderate protection against rain, snow, and minor scrapes. It has no save requirement but is only effective while you are wearing it."
      },
      {
        "title": "Increased Carrying Capacity",
        "rules": "Increases your carrying capacity by 10%, a passive effect that remains active as long as the cloak is worn."
      }
    ],
    "levelRequirementReason": "This cloak is designed to be accessible, providing basic protection and utility for all adventurers.",
    "vendorReason": "The Shire Shop specializes in goods crafted by hobbits, including this practical yet charming piece of attire.",
    "shippingDetail": "Delivered swiftly by a Cart Pony, often arriving the same day if the weather is clear.",
    "usage": {
      "activation": "Passive effect when worn.",
      "duration": "Instantaneous; active as long as the cloak is worn.",
      "endsWhen": "Exhausted upon removal or destruction of the cloak.",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's unique engineering and utility justify its higher price, offering both protection and convenience.",
    "priceOriginal": 600,
    "priceReviewedAt": "2026-07-25T14:52:33.824106+00:00",
    "aiReviewedAt": "2026-07-25T14:52:33.824106+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_the_crimson_lord_shroom": {
    "id": "mushroom_kingdom_item_the_crimson_lord_shroom",
    "name": "The Crimson Lord’s Shroom",
    "description": "The Crimson Lord's Shroom pulses with a fiery red glow, its surface smooth yet subtly textured like ancient stone. This fungal monarch whispers of battles fought and won by warlords long past. Consuming it grants you temporary command over lesser fungal units, bolstering your attack power and intimidating foes with its imposing presence. The mushroom's spores are known to linger in the air for days after consumption, spreading a cloud that enhances fungal attacks against all enemies nearby.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄",
    "stock": 42,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Command Over Fungus",
      "Fungal Ferocity"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "mushroom_cart",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Command Over Fungus",
        "rules": "You gain temporary control over any fungal unit within 30 feet for the duration. You can issue a single command per round, which must be obeyed by all affected fungi. The effect lasts until the start of your next turn."
      },
      {
        "title": "Fungal Ferocity",
        "rules": "You gain a +2 bonus to attack rolls and a +1 bonus to damage rolls against targets within 30 feet for 60 seconds. Additionally, enemies within this range have their resistance to fungal attacks reduced by 25%. This effect ends if you are incapacitated or if the duration expires."
      }
    ],
    "levelRequirementReason": "This mushroom is potent enough to be consumed by even low-level adventurers for its immediate tactical advantage.",
    "vendorReason": "The Toad Town Market specializes in local fungi and their unique properties, making it the perfect vendor for such a powerful yet accessible item.",
    "shippingDetail": "Delivered by a mushroom cart, this item may arrive with minor delays due to its delicate nature. Ensure proper handling upon receipt.",
    "usage": {
      "activation": "Eaten as an action",
      "duration": "1 minute",
      "endsWhen": "You are incapacitated or the duration ends",
      "charges": "Unlimited, recharges after a short rest"
    },
    "priceReason": "Balanced at this price to reflect its potent effects and limited daily stock.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:53:14.840005+00:00",
    "aiReviewedAt": "2026-07-25T14:53:14.840005+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_the_echoing_gearplate": {
    "id": "mushroom_kingdom_item_the_echoing_gearplate",
    "name": "The Echoing Gearplate of Silent Coins",
    "description": "The Echoing Gearplate of Silent Coins is a thick, coin-dusted plate that whispers to its wearer, guiding them through bustling markets and combat alike. Crafted from the very essence of countless trades, it hums softly when valuable coins are nearby, amplifying wealth and providing subtle cues to lucrative opportunities. In battle, the gearplate doubles the value of any earned coinage during combat encounters, turning even the smallest gains into fortune.",
    "category": "equipment",
    "price": 1000,
    "icon": "💰",
    "stock": 15,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Coin Duplication Bonus",
      "Market Mastery"
    ],
    "vendor": "wario_direct",
    "shippedBy": "express_mushroom_delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Coin Duplication Bonus",
        "rules": "While wearing this gearplate in a combat encounter, the wearer has a 10% chance to double the value of any coins they earn during that battle. This effect lasts for the duration of the fight and can be used once per day."
      },
      {
        "title": "Market Mastery",
        "rules": "The wearer gains a +2 bonus to all trading and haggling rolls when interacting with vendor stalls or markets, making them nearly unbeatable at bargaining. This passive effect is always active while the gearplate is worn."
      }
    ],
    "levelRequirementReason": "This item's subtle enhancements make it accessible for most adventurers who can afford its price.",
    "vendorReason": "Wario Direct specializes in items that enhance one's fortune and trading skills, making the Echoing Gearplate a perfect fit for their inventory.",
    "shippingDetail": "Delivered swiftly by Express Mushroom Delivery, this item arrives within a day of purchase.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Active while worn and during combat encounters only for the duration of said battle.",
      "endsWhen": "The effect ends when removed or at the end of a combat encounter, whichever comes first. It can be used once per day.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Offered as an accessible rare item, this gearplate provides significant utility without breaking the game balance.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T14:53:01.750261+00:00",
    "aiReviewedAt": "2026-07-25T14:53:01.750261+00:00",
    "aiReviewVersion": 1
  },
  "mushroom_kingdom_item_the_mega_yielding_primeval_puff": {
    "id": "mushroom_kingdom_item_the_mega_yielding_primeval_puff",
    "name": "The Mega Yielding Primeval Puff",
    "description": "The Mega Yielding Primeval Puff, a colossal bioluminescent mushroom grown deep within the war-torn territories of Mushroom Kingdom, glows with an ethereal light that illuminates its fierce form. When consumed, it releases a potent spore cloud that rapidly accelerates growth and grants temporary strength and resilience, perfect for weathering sieges or overwhelming foes. The spores also provide immunity to poison and disease effects, ensuring the wielder's survival in perilous conditions.",
    "category": "consumables",
    "price": 1000,
    "icon": "🍄💥",
    "stock": 8,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Rapid Growth Acceleration",
      "Primeval Surge"
    ],
    "vendor": "koopa_shop",
    "shippedBy": "royal_mushroom_messenger",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Rapid Growth Acceleration",
        "rules": "When consumed, this oversized mushroom immediately increases the user’s Strength and Constitution by +40% for 60 seconds. The effect is instantaneous upon activation but ends if the user takes any damage or moves more than 20 feet away."
      },
      {
        "title": "Primeval Surge",
        "rules": "There is a 50% chance that, once per short rest, the mushroom triggers a Primeval Surge. This effect deals 10d6 bludgeoning damage in a 10-foot radius centered on the user and lasts for 1 minute, expiring if the user takes any damage."
      }
    ],
    "levelRequirementReason": "This ancient mushroom requires a certain level of resilience to activate its potent effects safely.",
    "vendorReason": "The Koopa Shop specializes in rare and powerful items, including this legendary mushroom.",
    "shippingDetail": "Delivered by the fastest royal courier within 24 hours of purchase.",
    "usage": {
      "activation": "Eaten as a consumable.",
      "duration": "60 seconds or until triggered Primeval Surge ends, whichever comes first.",
      "endsWhen": "The user takes damage or moves more than 20 feet away; the Primeval Surge effect expires after 1 minute.",
      "charges": "Unlimited uses per short rest."
    },
    "priceReason": "This item’s rarity, potent effects, and limited availability justify its high price in XP.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-25T14:53:22.144476+00:00",
    "aiReviewedAt": "2026-07-25T14:53:22.144476+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_twilight_stalker_helm": {
    "id": "faerun_item_twilight_stalker_helm",
    "name": "The Twilight Stalker’s Helm of Drakon's Whisper",
    "description": "Forged from the scales of a twilight drake, The Twilight Stalker’s Helm of Drakon's Whisper bears runes that whisper ancient dragon lore to its wearer. It grants chilling resistance to fire and an uncanny ability to detect dragons by scent alone, as if they were mere shadows in the night. A helm so potent that it seems almost alive with the whispers of forgotten prophecies, it is a relic from a time when dragons ruled Faerûn.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 32,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Detect Dragons",
      "Fire Resistance"
    ],
    "vendor": "sword_coast_traders",
    "shippedBy": "winged_horse",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Detect Dragons",
        "rules": "At will, you can activate this helm to gain the ability to detect dragons within 60 feet as if using the Detect Magic spell. This effect lasts for a number of rounds equal to your proficiency bonus (minimum of 1 round)."
      },
      {
        "title": "Fire Resistance",
        "rules": "While wearing The Twilight Stalker’s Helm, you have advantage on saving throws against fire damage and gain resistance to fire damage."
      }
    ],
    "levelRequirementReason": "This helm requires a minimum character level of 15 due to its complex enchantments and the potent dragon lore it contains.",
    "vendorReason": "The Sword Coast Traders are known for their extensive network of contacts across Faerûn, ensuring that even the most arcane items find a home in their inventory.",
    "shippingDetail": "Delivered swiftly by winged horse couriers, this helm arrives with a special protective charm to ensure it remains undamaged during transit.",
    "usage": {
      "activation": "At will (recharges after a short or long rest)",
      "duration": "Instantaneous for Detect Dragons; lasts until the end of your next turn",
      "endsWhen": "The helm is removed, or you make an attack with a melee weapon",
      "charges": "Unlimited"
    },
    "priceReason": "This helm’s price reflects its rarity and the complex enchantments that imbue it with dragon lore and fire resistance.",
    "priceOriginal": 750,
    "priceReviewedAt": "2026-07-25T14:53:42.369339+00:00",
    "aiReviewedAt": "2026-07-25T14:53:42.369339+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_ancient_stalker_amulet": {
    "id": "faerun_item_ancient_stalker_amulet",
    "name": "The Ancient Stalker’s Amulet of the Silverwood Guardians",
    "description": "The Ancient Stalker's Amulet of the Silverwood Guardians is a petrified branch encased in shimmering silver, its surface etched with intricate runes that pulse with ancient magic. Crafted from the heartwood of the Silverwood, it protects against decay and offers a spectral guardian when summoned. This amulet enhances survival checks within dense forests, granting advantage on such rolls, while also offering minor regeneration to wounds sustained in these verdant realms.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🌿",
    "stock": 18,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Poison Resistance",
      "Regeneration"
    ],
    "vendor": "baldurs_bazaar",
    "shippedBy": "giant_owl",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Poison Resistance",
        "rules": "The wearer gains resistance to poison damage. This effect lasts until the start of their next turn after taking poison, providing a temporary immunity."
      },
      {
        "title": "Minor Regeneration",
        "rules": "Once per long rest, the wearer regains 1d6 + Constitution modifier hit points as long as they are in an area with heavy plant growth. This effect can only be used once per day and is exhausted after use."
      }
    ],
    "levelRequirementReason": "The amulet's intricate runes require a seasoned adventurer to wield it effectively.",
    "vendorReason": "Baldur’s Bazaar caters to adventurers seeking rare and ancient artifacts that can enhance their survival in the wilds.",
    "shippingDetail": "The amulet is delivered by a giant owl, ensuring safe passage through treacherous terrains.",
    "usage": {
      "activation": "Passive effect; regeneration occurs automatically when conditions are met.",
      "duration": "Instantaneous for poison resistance; daily use for regeneration.",
      "endsWhen": "Exhausted after one use or once the long rest period ends.",
      "charges": "Unlimited"
    },
    "priceReason": "Crafted from ancient Silverwood and imbued with powerful protective magic, this amulet justifies its substantial price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:53:29.846666+00:00",
    "aiReviewedAt": "2026-07-25T14:53:29.846666+00:00",
    "aiReviewVersion": 1
  },
  "faerun_item_mk_78_ancient_helm": {
    "id": "faerun_item_mk_78_ancient_helm",
    "name": "Mk.78 Ancient Helms of the Forgotten Kings",
    "description": "The Mk.78 Ancient Helm of the Forgotten Kings is a helm forged from the lost metals of an ancient kingdom, its surface etched with runes that whisper tales of elemental might. Crafted by kings who commanded the elements, it exudes an aura of forgotten power and arcane knowledge. The helm's weighty presence commands respect, and those who wear it feel the weight of their legacy upon their shoulders.",
    "category": "equipment",
    "price": 1000,
    "icon": "👑",
    "stock": 5,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Elemental Command",
      "Forgotten Fortitude"
    ],
    "vendor": "waterdeep_market",
    "shippedBy": "sea_serpent",
    "levelRequirement": 45,
    "effectDetails": [
      {
        "title": "Elemental Command",
        "rules": "As a bonus action, you may command one element to aid you. Choose between fire, water, air, or earth. The chosen element provides a minor benefit for the duration of your next short rest."
      },
      {
        "title": "Forgotten Fortitude",
        "rules": "You gain resistance to necrotic damage and have advantage on saving throws against being charmed or frightened. This effect lasts until you finish a long rest."
      }
    ],
    "levelRequirementReason": "Only the most powerful and seasoned heroes can wield such an ancient artifact without risk.",
    "vendorReason": "The Waterdeep Market is known for its extensive collection of rare and exotic artifacts, including relics from lost ages.",
    "shippingDetail": "Delivered by the Sea Serpent, this helm arrives with a delay due to its sheer weight and importance.",
    "usage": {
      "activation": "Bonus action (Elemental Command), Instantaneous (Forgotten Fortitude)",
      "duration": "Until next short rest (Elemental Command), Until end of long rest (Forgotten Fortitude)",
      "endsWhen": "Exhaustion ends when the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The helm's rarity and magical properties make it a fair price, but still within reach for those on the highest tier of adventuring.",
    "priceOriginal": 5800,
    "priceReviewedAt": "2026-07-25T14:53:29.661383+00:00",
    "aiReviewedAt": "2026-07-25T14:53:29.661383+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_twilight_gifted_uniform": {
    "id": "kivotos_item_twilight_gifted_uniform",
    "name": "Twilight Gifted's Circlet of Student Resonance",
    "description": "This shimmering circlet, forged from twilight-infused academy silks and blessed by the Halos Club’s elder initiates, amplifies your connection to the neural network of Academy City. It grants heightened perception within a localized radius, allowing you to subtly influence information flow—perfect for navigating student politics or evading notice in crowded halls. The circlet is said to resonate with the very fabric of knowledge itself, its power drawing from the city’s own mind.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 12,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "Heightened Perception",
      "Subtle Influence"
    ],
    "vendor": "student_store",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Heightened Perception",
        "rules": "While wearing this circlet, you gain advantage on Wisdom (Perception) checks and can attempt to notice details within a 30-foot radius. You can use an action to cast the Detect Thoughts spell without expending a spell slot."
      },
      {
        "title": "Subtle Influence",
        "rules": "You can expend one charge to exert a subtle influence on a single creature or object within your circlet’s localized radius, affecting its perception of you as either more or less important than they are. This effect lasts for 1 minute and has no save DC."
      }
    ],
    "levelRequirementReason": "This circlet requires significant mental fortitude to wield effectively, suitable only for the most experienced students of the Academy City.",
    "vendorReason": "The student store stocks this item as it is a crucial tool for navigating both academic and social spheres within the city’s elite institutions.",
    "shippingDetail": "Ships via Drone Delivery, usually arriving within 24 hours of purchase.",
    "usage": {
      "activation": "Action or Reaction to cast Detect Thoughts spell (no spell slot required) or expend a charge for Subtle Influence.",
      "duration": "Instantaneous, lasts until the end of your next turn unless countered.",
      "endsWhen": "The effect ends when you are incapacitated or the circlet is removed from your head.",
      "charges": "5 charges; recharges after 8 hours of uninterrupted rest."
    },
    "priceReason": "This circlet’s price reflects its mythic rarity and the advanced neural technology required for its construction, making it a sought-after tool among students.",
    "priceOriginal": 7500,
    "priceReviewedAt": "2026-07-25T14:53:53.948591+00:00",
    "aiReviewedAt": "2026-07-25T14:53:53.948591+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_mk91_club_uniform": {
    "id": "kivotos_item_mk91_club_uniform",
    "name": "Mk.91 Club Standardized Uniform of Echoing Voices",
    "description": "The Mk.91 Club Standardized Uniform of Echoing Voices is crafted from reinforced academy fabric, adorned with intricate sonic glyphs that whisper the history of its purpose. This uniform grants you instant membership to any student club and subtly amplifies your voice during group discussions, enhancing both your persuasive power and providing a dramatic echo effect for emphasis. The garment's origin lies in the hallowed halls of Echoing Academy, where tradition meets innovation.",
    "category": "equipment",
    "price": 1000,
    "icon": "🗣️",
    "stock": 45,
    "rarity": "rare",
    "stockType": "in_stock",
    "effects": [
      "increased persuasion",
      "auditory echo effect"
    ],
    "vendor": "club_supply",
    "shippedBy": "Courier Express Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Increased Persuasion",
        "rules": "As a bonus action, you can activate the uniform's subtle amplification to enhance your persuasive efforts. This increases the DC of any Charisma (Persuasion) check by +2 until the start of your next turn."
      },
      {
        "title": "Auditory Echo Effect",
        "rules": "The uniform grants a minor auditory echo effect, allowing you to repeat a word or phrase you just heard as if it were your own. This can be used once per long rest and has no range limitation."
      }
    ],
    "levelRequirementReason": "This uniform is designed for beginners and those seeking immediate club affiliation.",
    "vendorReason": "Club_supply specializes in the ephemeral needs of students, including this emblematic piece of attire.",
    "shippingDetail": "Delivered within a week, ensuring you're ready for your first club meeting.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Until the start of your next turn",
      "endsWhen": "The effect ends when you use another bonus action to activate it or until your next long rest",
      "charges": "Unlimited, as a long rest recharges it"
    },
    "priceReason": "This price reflects the unique combination of club affiliation and enhanced persuasive abilities offered by this uniform.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-25T14:53:58.759770+00:00",
    "aiReviewedAt": "2026-07-25T14:53:58.759770+00:00",
    "aiReviewVersion": 1
  },
  "kivotos_item_halo_resonance_service": {
    "id": "kivotos_item_halo_resonance_service",
    "name": "The Chronal Harmonization Service: Temporal Echo Audit",
    "description": "The Chronal Harmonization Service: Temporal Echo Audit is a bespoke consultation offered by the Academy's temporal mechanics department. This meticulously crafted service involves a highly precise, non-invasive scan that gently corrects minor temporal distortions affecting your cognitive processes—essentially resetting your personal timeline to enhance clarity and stability. The process reveals hidden memories, unlocking forgotten knowledge and experiences with no adverse effects. This service is a legend among scholars seeking to recalibrate their chronometric patterns.",
    "category": "services",
    "price": 500,
    "icon": "⏳",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Resonance Calibration",
      "Enhanced Cognitive Stability"
    ],
    "vendor": "academy_armory",
    "shippedBy": "Temporal Courier",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Resonance Calibration",
        "rules": "This effect provides a bonus of +1 on all Intelligence (History) and Wisdom (Insight) checks for the next 24 hours. The service also grants temporary hit points equal to your Constitution modifier × 5, which are regained at the end of each short rest."
      },
      {
        "title": "Enhanced Cognitive Stability",
        "rules": "For 1 hour after the consultation, you gain advantage on saving throws against effects that would alter time or impose conditions related to time manipulation. This effect does not stack with similar abilities."
      }
    ],
    "levelRequirementReason": "This service is designed for individuals who have already demonstrated a basic understanding of chronometric principles and are seeking to fine-tune their temporal knowledge.",
    "vendorReason": "The Academy Armory exclusively offers this service, as it requires the specialized expertise of its temporal mechanics department.",
    "shippingDetail": "Ships via a Temporal Courier within one game week. Delivery is guaranteed to be precise and accurate.",
    "usage": {
      "activation": "Passive effect upon completion of the consultation, lasting for the duration specified in the effects.",
      "duration": "24 hours and 1 hour (as specified in the effects).",
      "endsWhen": "The temporal stability is regained or the effect ends naturally.",
      "charges": "Unlimited; one consultation per character."
    },
    "priceReason": "This service is balanced at 500 XP, offering a limited-time boost to temporal knowledge and resilience without overpowered effects.",
    "priceOriginal": 35000,
    "priceReviewedAt": "2026-07-25T14:54:04.205319+00:00",
    "aiReviewedAt": "2026-07-25T14:54:04.205319+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_buffered_keys_of_the_phantom_server": {
    "id": "internet_item_buffered_keys_of_the_phantom_server",
    "name": "The Buffered Keys of the Phantom Server",
    "description": "The Buffered Keys of the Phantom Server shimmer with faint, digital afterglows—remnants of forgotten data streams and lost server echoes. Holding them grants a brief moment of clarity amidst chaotic code, but prolonged use risks becoming ensnared in the static. These keys are crafted from salvaged silicon and copper, imbued with the essence of long-dormant servers, allowing for a fleeting glimpse into the ghostly pasts of digital realms.",
    "category": "equipment",
    "price": 1000,
    "icon": "📡",
    "stock": 42,
    "rarity": "common",
    "stockType": "in_stock",
    "effects": [
      "Digital Clarity",
      "Static Resistance"
    ],
    "vendor": "data_dealer",
    "shippedBy": "Drone Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Digital Clarity",
        "rules": "Activates as a bonus action. Grants a +20% increase to data processing speed for 60 seconds, allowing for rapid and efficient handling of complex digital tasks. Ends when the user completes their next turn."
      },
      {
        "title": "Static Resistance",
        "rules": "Passive effect while holding the keys. Provides resistance against digital corruption effects equal to your proficiency bonus +2. This effect does not stack with other forms of static resistance or similar benefits."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners and those just starting their journey in the digital realm, offering them a gentle introduction to handling complex data without overwhelming challenges.",
    "vendorReason": "The Data Dealer specializes in salvaged tech and digital artifacts, making these keys an ideal addition to their inventory.",
    "shippingDetail": "Ships via Drone Delivery for expedited service; typically arrives within a day.",
    "usage": {
      "activation": "Bonus action",
      "duration": "60 seconds, ending at the start of your next turn",
      "endsWhen": "Ends when you complete your next turn",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's rarity, its origin from salvaged servers, and the specific benefits it provides justify this price point.",
    "priceOriginal": 185,
    "priceReviewedAt": "2026-07-25T14:54:12.865118+00:00",
    "aiReviewedAt": "2026-07-25T14:54:12.865118+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_fabled_bound's_key_of_the_lost_archive": {
    "id": "internet_item_fabled_bound's_key_of_the_lost_archive",
    "name": "Fabled Bound’s Key of the Lost Archive",
    "description": "Forged from the molten essence of forgotten internet connections and the compressed remnants of a bygone digital era, Fabled Bound’s Key of the Lost Archive is a relic that warps reality with its touch. When activated, it hums with a nostalgic energy, coaxing forth data fragments from the ether—corrupted bytes that glow faintly in the air like ghostly memories. Within a 10-meter radius, this key can summon fleeting Data Echoes of past users, their faces and voices echoing as if they were still alive. The key’s presence can disorient foes with its low hum, making it a dangerous tool for those who seek to uncover hidden truths.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🔑",
    "stock": 15,
    "rarity": "uncommon",
    "stockType": "limited_daily",
    "effects": [
      "Data Fragment Revelation",
      "Temporal Disorientation"
    ],
    "vendor": "pixel_shop",
    "shippedBy": "Cyber Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Data Fragment Revelation",
        "rules": "When activated as an action within a 10-meter radius, the key reveals corrupted data fragments. These fragments can be used to uncover hidden clues or information. The effect lasts until the end of your next turn."
      },
      {
        "title": "Temporal Disorientation",
        "rules": "The key emits a low hum that can disorient any creature within 5 meters for 1 round (30 seconds). A successful DC 14 Wisdom saving throw ends this effect early. The key has a limited use and requires a short rest to recharge."
      }
    ],
    "levelRequirementReason": "The key’s power lies in its ability to manipulate forgotten data, which is accessible even to those of lower levels.",
    "vendorReason": "As a hub for digital curiosities and relics, Pixel Shop naturally stocks this internet artifact.",
    "shippingDetail": "Ships via Cyber Courier within one business day; requires special handling to preserve the key’s integrity.",
    "usage": {
      "activation": "As an action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends at the beginning of your next turn or when the key is destroyed",
      "charges": "Recharges after a short rest"
    },
    "priceReason": "The key’s rarity and unique ability to reveal hidden data justify its price in XP.",
    "priceOriginal": 875,
    "priceReviewedAt": "2026-07-25T14:54:28.097045+00:00",
    "aiReviewedAt": "2026-07-25T14:54:28.097045+00:00",
    "aiReviewVersion": 1
  },
  "internet_item_mk.86_buffered_resonance_key_of_the_algorithmic_storm": {
    "id": "internet_item_mk.86_buffered_resonance_key_of_the_algorithmic_storm",
    "name": "Mk.86 Buffered Resonance Key of the Algorithmic Storm",
    "description": "The Mk.86 Buffered Resonance Key of the Algorithmic Storm is an intricately carved digital artifact, its surface a maelstrom of pulsing binary light. Crafted from obsidian and inlaid with microchips harvested from ancient data nodes, this key allows you to manipulate localized data streams. With it, you can create temporary algorithmic storms that disrupt enemy electronic devices or reroute data packets for tactical advantage. Misuse risks catastrophic system failures, so wield it with precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚡",
    "stock": 8,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Creates a localized data disruption field",
      "Allows rerouting of data packets"
    ],
    "vendor": "cyber_market",
    "shippedBy": "Automated Delivery Bot",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Localized Data Disruption Field",
        "rules": "When activated as an action within range (30 feet), this key creates a field that deals 1d6 force damage to all electronic devices in the area. The effect lasts for 1 minute or until dispelled by magic."
      },
      {
        "title": "Data Packet Rerouting",
        "rules": "As a bonus action, you can reroute data packets within a 50-foot radius, providing a +2 bonus to all electronic device-related checks and saving throws made against hacking attempts. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This key is designed for beginners who wish to experiment with data manipulation without advanced training.",
    "vendorReason": "The cyber_market specializes in high-tech and digital equipment, making it the ideal vendor for such a specialized item.",
    "shippingDetail": "Delivered instantly by the Automated Delivery Bot to your doorstep.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Localized Data Disruption Field lasts 1 minute; Data Packet Rerouting lasts until next turn.",
      "endsWhen": "The field is dispelled by magic, and rerouting ends when the user's turn ends.",
      "charges": "Unlimited uses"
    },
    "priceReason": "This key strikes a balance between its powerful effects and rarity, making it moderately expensive.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-25T14:54:28.434425+00:00",
    "aiReviewedAt": "2026-07-25T14:54:28.434425+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_luminous_shaper_horseshoes": {
    "id": "equestria_item_luminous_shaper_horseshoes",
    "name": "Luminous Shaper's Horseshoes – Mk.81",
    "description": "The Luminous Shaper's Horseshoes – Mk.81 shimmer with a soft, ethereal glow that hints at elemental power. Crafted from enchanted metal and infused with the essence of the Elements, these horseshoes subtly enhance a pony’s movement speed by +15%, allowing for agile navigation through treacherous terrain or delivering powerful kicks. When activated, they channel kinetic force into brief bursts, enabling the wearer to manipulate nearby objects with surprising precision.",
    "category": "equipment",
    "price": 1000,
    "icon": "✨",
    "stock": 42,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Enhanced Agility",
      "Kinetic Manipulation"
    ],
    "vendor": "canterlot_commerce",
    "shippedBy": "Royal Pony Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Enhanced Agility",
        "rules": "The Luminous Shaper's Horseshoes grant a +15% increase to movement speed for the wearer. This effect is passive and does not require activation."
      },
      {
        "title": "Kinetic Manipulation",
        "rules": "By expending a use, the pony can manipulate kinetic force within 5 feet of them, creating a minor push or pull on objects (1d4 force damage) for a duration of up to 1 minute. This effect requires an action and ends if the wearer moves more than 30 feet away from the target."
      }
    ],
    "levelRequirementReason": "These horseshoes are designed for beginners who wish to enhance their natural abilities with a touch of magic.",
    "vendorReason": "Canterlot Commerce specializes in unique and enchanted items, making the Luminous Shaper's Horseshoes an ideal addition to its inventory.",
    "shippingDetail": "The horseshoes are shipped within two days of purchase with priority delivery.",
    "usage": {
      "activation": "Uses an action or bonus action.",
      "duration": "Up to 1 minute per use.",
      "endsWhen": "Exhausted after a use, recharges at dawn the next day.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The horseshoes are priced at 1000 XP due to their magical enchantments and rarity in crafting materials.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:55:09.871934+00:00",
    "aiReviewedAt": "2026-07-25T14:55:09.871934+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_kind_horseshoes_of_resonance": {
    "id": "equestria_item_kind_horseshoes_of_resonance",
    "name": "Kind Horseshoes of Resonance – The Silver Quill",
    "description": "The Kind Horseshoes of Resonance – The Silver Quill are crafted from polished silver, each horseshoe intricately engraved with symbols of compassion and peace. These enchanted horseshoes not only foster a deep sense of calm but also amplify empathetic understanding among ponies, potentially diffusing even the most tense situations into harmonious accord. Worn by a pony, they emit a soft, soothing glow that can pacify nearby enemies without resorting to combat or aggression.",
    "category": "consumables",
    "price": 1000,
    "icon": "💖",
    "stock": 17,
    "rarity": "uncommon",
    "stockType": "night_only",
    "effects": [
      "Increased Empathy",
      "Pacifying Aura"
    ],
    "vendor": "ponyville_market",
    "shippedBy": "Cloud Courier Services",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Increased Empathy (+20%)",
        "rules": "The wearer gains a +1 bonus to Charisma (Persuasion) checks and has advantage on Insight checks made to sense the emotions of others. This effect lasts until the end of each day."
      },
      {
        "title": "Pacifying Aura",
        "rules": "This aura creates a 10-foot radius around the wearer, which provides advantage on saving throws against being frightened or charmed within its area for up to one hour per use. Once used, it must recharge after 8 hours of rest."
      }
    ],
    "levelRequirementReason": "The Kind Horseshoes require a minimum level as they are crafted for ponies who have already demonstrated the capacity for deep empathy and pacifism.",
    "vendorReason": "As a central market, Ponyville Market is trusted by many to sell items that promote peace and harmony among all residents.",
    "shippingDetail": "Ships via Cloud Courier Services with same-day delivery within the Equestria region.",
    "usage": {
      "activation": "Passive effect, activated upon donning the horseshoes.",
      "duration": "Lasts until the end of each day for Increased Empathy and one hour per use for Pacifying Aura.",
      "endsWhen": "The effects end when the day ends or the aura is used up to its limit.",
      "charges": "Increased Empathy lasts indefinitely, but the Pacifying Aura can be used once every 8 hours."
    },
    "priceReason": "The high price reflects the unique crafting process and rare materials needed for these horseshoes, ensuring a fair value based on their magical properties.",
    "priceOriginal": 850,
    "priceReviewedAt": "2026-07-25T14:54:45.877368+00:00",
    "aiReviewedAt": "2026-07-25T14:54:45.877368+00:00",
    "aiReviewVersion": 1
  },
  "equestria_item_aureate_harmony_shield_of_echoes": {
    "id": "equestria_item_aureate_harmony_shield_of_echoes",
    "name": "Aureate Harmony Shield of Echoes – The Chronos Guard",
    "description": "The Aureate Harmony Shield of Echoes, a legendary relic from the Chronos Guard, is forged in the heart of temporal rifts and adorned with iridescent runes that pulse with harmonious energy. It not only absorbs significant physical damage but also protects its wielder from the distortions of time, offering glimpses into potential futures. With each strike, the shield whispers secrets of the past and future, enhancing its protector's awareness of impending danger.",
    "category": "premium",
    "price": 1000,
    "icon": "🛡️",
    "stock": 1,
    "rarity": "legendary",
    "stockType": "special_order",
    "effects": [
      "Temporal Shield",
      "Echo Glimpses"
    ],
    "vendor": "crystal_empire",
    "shippedBy": "Temporal Logistics Corp.",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Shield",
        "rules": "When you are hit by an attack, this shield absorbs significant damage (+60%) and grants a brief regeneration. It also provides resistance to temporal distortions."
      },
      {
        "title": "Echo Glimpses",
        "rules": "Once per short or long rest, the wielder gains a brief flash of insight into potential futures, providing advantage on one saving throw against time-based effects."
      }
    ],
    "levelRequirementReason": "Even the simplest warrior can benefit from this shield's protective properties.",
    "vendorReason": "The Crystal Empire has a long-standing relationship with the Chronos Guard, ensuring only the finest relics are sold.",
    "shippingDetail": "Ships via Temporal Courier Service, arriving instantly upon payment of fees.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous; lasts until the end of your next turn",
      "endsWhen": "The effect ends when you take a long rest or are incapacitated",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced to be within reach for a skilled warrior, yet still rare and valuable.",
    "priceOriginal": 75000,
    "priceReviewedAt": "2026-07-25T14:54:58.134876+00:00",
    "aiReviewedAt": "2026-07-25T14:54:58.134876+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_crimson_echo_talon": {
    "id": "animatopia_item_crimson_echo_talon",
    "name": "The Crimson Echo Talon of the Elder Burrow",
    "description": "The Crimson Echo Talon of the Elder Burrow is a talon forged from the hardened cries of ancient burrowing spirits and river clay. Its surface crackles with primal energy, whispering of forgotten tribal secrets. When wielded in chaos, it grants the user momentary clarity, enhancing Perception for 60 seconds, and reveals hidden pathways within dense forests for 15 seconds. The talon occasionally conjures a calming illusion of ancestral voices, soothing the soul during tumultuous times.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐾",
    "stock": 45,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Clarity and Pathfinding",
      "Ancestral Illusion"
    ],
    "vendor": "forest_market",
    "shippedBy": "Winged Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Clarity and Pathfinding",
        "rules": "Activates as a bonus action. Grants +3 to Perception checks for 60 seconds, revealing hidden paths in dense forests for the same duration. This effect can be used once per long rest."
      },
      {
        "title": "Ancestral Illusion",
        "rules": "Can be activated as a reaction when you are affected by a hostile force or chaotic situation within a forest. Conjures an illusory presence of ancestral voices that soothes the soul for 1 minute, providing advantage on all Wisdom (Perception) checks made to resist being frightened."
      }
    ],
    "levelRequirementReason": "Requires significant experience and understanding of natural magic to wield this talon effectively.",
    "vendorReason": "The forest market has the extensive knowledge of local fauna and spirits, making it a trusted source for such items.",
    "shippingDetail": "Ships via the Winged Courier within two game days, ensuring safe delivery to your doorstep.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "60 seconds or until end of effect",
      "endsWhen": "Effect ends when used again or after one long rest for Clarity and Pathfinding; upon activation of a hostile force for Ancestral Illusion.",
      "charges": "Unlimited, recharges at dawn"
    },
    "priceReason": "Balanced price reflects the talon's unique abilities and its rarity in the wild.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-25T14:54:45.936881+00:00",
    "aiReviewedAt": "2026-07-25T14:54:45.936881+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_starfall_weaver_reaver": {
    "id": "animatopia_item_starfall_weaver_reaver",
    "name": "Starfall Weaver’s Reaver of the Lunar Grove",
    "description": "The Starfall Weaver’s Reaver of the Lunar Grove is a sabre forged from the solidified essence of moonlight, its blade woven with threads of celestial silk and enchanted by the spirits of the night. Crafted in the shadowed halls of the Lunar Grove, it hums with an ancient power that resonates during lunar rituals. The reaver allows the wielder to manipulate shadows, enhancing their connection to the ethereal realm, and grants them swift movement through darkened spaces.",
    "category": "equipment",
    "price": 8000,
    "icon": "✨",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Celestial Shadow Manipulation",
      "Moonlit Swiftstep"
    ],
    "vendor": "beast_bazaar",
    "shippedBy": "Dire Rat Delivery",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Celestial Shadow Manipulation",
        "rules": "As an action, the wielder can use this reaver to cast 'Veil of Shadows' once per day. This spell creates a shimmering veil that grants advantage on Stealth checks and allows the caster to move through difficult terrain at half speed without triggering opportunity attacks."
      },
      {
        "title": "Moonlit Swiftstep",
        "rules": "While in dark areas, the wielder gains a bonus to movement equal to 10 feet. This effect lasts until the start of their next turn or until they leave a dark area."
      }
    ],
    "levelRequirementReason": "This reaver requires significant power and control over shadow magic, suitable only for those of great experience in arcane arts.",
    "vendorReason": "The Beast Bazaar trades in rare magical artifacts, including this celestial weapon forged deep within the Lunar Grove.",
    "shippingDetail": "Ships via Dire Rat Delivery’s express nocturnal route, ensuring timely arrival during the night cycle.",
    "usage": {
      "activation": "Action to cast 'Veil of Shadows'; passive movement bonus active in dark areas.",
      "duration": "Veil of Shadows lasts until end of turn; Moonlit Swiftstep ends when leaving a dark area.",
      "endsWhen": "Charges expended or wielder leaves a dark area",
      "charges": "1 daily charge"
    },
    "priceReason": "The reaver's unique crafting materials and the power it commands make it an expensive and rare treasure.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T14:55:17.262658+00:00",
    "aiReviewedAt": "2026-07-25T14:55:17.262658+00:00",
    "aiReviewVersion": 1
  },
  "animatopia_item_serpent_song_service_token": {
    "id": "animatopia_item_serpent_song_service_token",
    "name": "The Serpent Song Service Token - 'Whisper of the Coil'",
    "description": "The Serpent Song Service Token, 'Whisper of the Coil,' is a polished obsidian token inlaid with scales that shimmer like living silver. Crafted by the enigmatic Coil Singers, this token allows you to commission a weapon imbued with potent sonic vibrations. The resulting enhancement disrupts enemy defenses and grants bonus damage against armored foes, leaving them reeling from the shockwaves. The service also includes 24 hours of personalized combat advice, ensuring your next battle is well-prepared.",
    "category": "services",
    "price": 1000,
    "icon": "🐍",
    "stock": 1,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Sonic Distortion",
      "Personalized Combat Advice"
    ],
    "vendor": "tribal_trader",
    "shippedBy": "Swift Dragon Courier",
    "levelRequirement": 15,
    "effectDetails": [
      {
        "title": "Sonic Distortion",
        "rules": "Activates as a bonus action. The weapon imbued with this enhancement deals an additional 1d6 force damage against armored targets. This effect lasts for 30 minutes."
      },
      {
        "title": "Personalized Combat Advice",
        "rules": "Provides the user with in-depth, strategic advice for combat lasting 24 hours. The advice can be used once per day and must be requested before entering a battle."
      }
    ],
    "levelRequirementReason": "Requires significant skill to properly commission and utilize this service.",
    "vendorReason": "The Tribal Trader has exclusive access to the Coil Singers' services due to long-standing alliances.",
    "shippingDetail": "Delivery is expedited within a week, ensuring timely arrival for critical battles.",
    "usage": {
      "activation": "Bonus action to activate the weapon enhancement; combat advice can be requested at any time before battle.",
      "duration": "30 minutes of enhanced weapon and 24 hours of personalized advice",
      "endsWhen": "The effect ends upon expiration or when a new token is used.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects the rare service offered by the Coil Singers and the time invested in creating each enhancement.",
    "priceOriginal": 25000,
    "priceReviewedAt": "2026-07-25T14:55:03.264224+00:00",
    "aiReviewedAt": "2026-07-25T14:55:03.264224+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_gilded_wrights_null_of_shimmering_descent": {
    "id": "doughnut_hole_item_gilded_wrights_null_of_shimmering_descent",
    "name": "Gilded Wright's Null of Shimmering Descent",
    "description": "The Gilded Wright's Null of Shimmering Descent is a shimmering, void-sculpted device that pulses with an eerie gravitational hum. Crafted from solidified void-gravity, it emits a faint, mesmerizing glow as if the fabric of space-time itself warps around it. This artifact grants brief moments of reduced gravitational influence, making precarious jumps easier and allowing you to escape crushing pressure with grace. However, its unsettling resonance can leave you momentarily disoriented, testing your resolve.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 12,
    "rarity": "rare",
    "stockType": "limited_daily",
    "effects": [
      "Reduced Gravity",
      "Enhanced Leap"
    ],
    "vendor": "hole_hawker",
    "shippedBy": "Void Conveyor Belt",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reduced Gravity",
        "rules": "Activating the Gilded Wright's Null reduces local gravitational influence by 5% for 30 seconds. This effect provides a +1 bonus to Dexterity (Acrobatics) checks and saves, but it also increases the DC of Strength (Athletics) checks by +2 while within its range."
      },
      {
        "title": "Enhanced Leap",
        "rules": "For 30 seconds after activation, you gain a +1 bonus to your jump distance. Additionally, you have advantage on Dexterity (Acrobatics) checks made to avoid falling damage and can make such checks with disadvantage only once per long rest."
      }
    ],
    "levelRequirementReason": "The item's reduced gravity effect requires a character to be at least level 1 to safely benefit from its reduced gravitational influence.",
    "vendorReason": "Hole Hawker, a master of all things void-related, regularly stocks this unique artifact for adventurers seeking an edge in treacherous environments.",
    "shippingDetail": "The item is delivered via the Void Conveyor Belt, which ensures swift and reliable transportation even through interdimensional turbulence.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds",
      "endsWhen": "The duration ends when you deactivate it or until your next long rest if the effect is still active.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The item's rarity and specific utility justify its price of 1000 XP, reflecting its unique gravitational manipulation capabilities.",
    "priceOriginal": 7800,
    "priceReviewedAt": "2026-07-25T14:55:29.069563+00:00",
    "aiReviewedAt": "2026-07-25T14:55:29.069563+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_mk_42_void_nulls_of_the_fractured_echo": {
    "id": "doughnut_hole_item_mk_42_void_nulls_of_the_fractured_echo",
    "name": "Mk.42 Void Nulls of the Fractured Echo",
    "description": "The Mk.42 Void Nulls of the Fractured Echo are obsidian fragments recovered from a collapsed gravity pocket, where reality itself seems to unravel into whispers and echoes. Each touch reveals fleeting glimpses of impossible geometries and an unsettling sense that one is being observed by unseen entities. These relics hum with a subtle resonance, amplifying perception but also leaving their bearer feeling as if they are walking the edge of sanity's precipice.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👂",
    "stock": 47,
    "rarity": "uncommon",
    "stockType": "in_stock",
    "effects": [
      "Minor Psychic Echo",
      "Increased Perception"
    ],
    "vendor": "center_seller",
    "shippedBy": "Dimensional Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Psychic Echo",
        "rules": "When touched, there is a 25% chance that the wielder receives a cryptic vision related to impossible geometries or the void. The vision lasts for 1 minute and does not provide actionable information."
      },
      {
        "title": "Increased Perception",
        "rules": "The user gains a +1 bonus to Wisdom (Perception) checks until the end of their next long rest. This effect cannot be gained more than once per day."
      }
    ],
    "levelRequirementReason": "Even the simplest perception can be overwhelmed by these relics, making them unsuitable for lower-level characters.",
    "vendorReason": "The center seller specializes in oddities and curios that challenge one's understanding of reality, making them a fitting vendor for such an item.",
    "shippingDetail": "Ships via the Dimensional Courier, known for its reliable delivery through the fabric of space-time, even to the most remote locations.",
    "usage": {
      "activation": "Touch",
      "duration": "Instantaneous; once per day",
      "endsWhen": "The effect ends at the start of the next long rest or when the user intentionally ends it.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced against other uncommon items, this relic provides unique and powerful effects without being overpowered.",
    "priceOriginal": 1850,
    "priceReviewedAt": "2026-07-25T14:55:52.365414+00:00",
    "aiReviewedAt": "2026-07-25T14:55:52.365414+00:00",
    "aiReviewVersion": 1
  },
  "doughnut_hole_item_void_services_of_the_gravitic_resonance": {
    "id": "doughnut_hole_item_void_services_of_the_gravitic_resonance",
    "name": "Void Services of the Gravitic Resonance",
    "description": "A shimmering, self-contained chamber filled with swirling void energy, the Void Services of the Gravitic Resonance is a delicate construct forged from gravitic alloys and infused with the essence of The Fated Place's dark matter. It allows for temporary manipulation of local gravitational fields, creating platforms that defy gravity or disrupting attacks by shifting weight. However, prolonged use risks attracting unwanted attention from deeper within The Fated Place, potentially summoning minor void wraiths to claim the disturbance.",
    "category": "services",
    "price": 1000,
    "icon": "🌀",
    "stock": 3,
    "rarity": "epic",
    "stockType": "special_order",
    "effects": [
      "Gravitic Manipulation",
      "Void Summoning Risk"
    ],
    "vendor": "void_vendor",
    "shippedBy": "Void Portals",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Gravitic Manipulation",
        "rules": "Activate as a bonus action. This effect creates a localized area of manipulated gravity, reducing or increasing the local gravitational pull by up to 15% for 60 seconds within a 15-foot-radius sphere centered on you. The manipulation is instantaneous and requires no concentration."
      },
      {
        "title": "Void Summoning Risk",
        "rules": "Each use has a 10% chance of summoning a minor void wraith, which appears as a spectral entity that hovers nearby for the duration of its summoning. A successful DC 14 Constitution saving throw ends this effect prematurely."
      }
    ],
    "levelRequirementReason": "This service is accessible to all adventurers, making it valuable in various scenarios.",
    "vendorReason": "Void Vendor specializes in items and services that manipulate the fabric of space-time, including those that interact with gravitational forces.",
    "shippingDetail": "Ships via void portal, arrival time varies due to atmospheric disturbances but is typically within one day.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect; lasts for 60 seconds",
      "endsWhen": "Effect ends when the user chooses or on a failed Constitution saving throw",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP, this item is affordable for most adventuring parties to have as an emergency tool.",
    "priceOriginal": 42000,
    "priceReviewedAt": "2026-07-25T14:55:55.868858+00:00",
    "aiReviewedAt": "2026-07-25T14:55:55.868858+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_spectral_drift_branded": {
    "id": "almost_edge_item_spectral_drift_branded",
    "name": "The Spectral Drift Branded by Chronos's Lament",
    "description": "The Spectral Drift Branded by Chronos's Lament is a shimmering, viscous essence harvested from moments lost beyond the edge. It grants a fleeting glimpse into fractured timelines, inducing disorientation and chilling awareness of the void’s hunger. Prolonged exposure can unravel your sense of self, replacing it with echoes of forgotten realities. This essence is forged in the shadowy realms of Chronos's Lament, where time itself warps and bends.",
    "category": "consumables",
    "price": 1000,
    "icon": "🌌",
    "stock": 7,
    "rarity": "mythic",
    "stockType": "limited_daily",
    "effects": [
      "Temporal Insight",
      "Mild Disorientation"
    ],
    "vendor": "void_merchant",
    "shippedBy": "Dimensional Courier Drone",
    "levelRequirement": 35,
    "effectDetails": [
      {
        "title": "Temporal Insight",
        "rules": "On activation, you gain a +50% bonus to your perception checks for the duration of one short rest or until you use this item again. This effect does not stack with other bonuses to perception."
      },
      {
        "title": "Mild Disorientation",
        "rules": "For 3 turns after activation, you are incapacitated and take a -2 penalty to all ability checks, attack rolls, and saving throws. You must succeed on a DC 15 Constitution saving throw at the start of each of your turns or fall unconscious until this effect ends."
      }
    ],
    "levelRequirementReason": "This item requires significant power to wield effectively without risking catastrophic consequences.",
    "vendorReason": "The void merchant deals in the rarest and most dangerous items found beyond reality’s edge, making this essence a regular but risky trade.",
    "shippingDetail": "Delivered via interdimensional courier drones that traverse the void between realms. Delivery can take up to one week depending on your location in relation to the nearest dimensional rift.",
    "usage": {
      "activation": "Object interaction as a bonus action",
      "duration": "1 hour or until reactivated, whichever comes first",
      "endsWhen": "Effect ends when you use this item again or until the duration expires",
      "charges": "Unlimited"
    },
    "priceReason": "The essence is rare and requires significant alchemical and magical resources to produce, justifying its lower price.",
    "priceOriginal": 12000,
    "priceReviewedAt": "2026-07-25T14:55:33.279422+00:00",
    "aiReviewedAt": "2026-07-25T14:55:33.279422+00:00",
    "aiReviewVersion": 1
  },
  "almost_edge_item_liminal_resonance_curiosity": {
    "id": "almost_edge_item_liminal_resonance_curiosity",
    "name": "The Liminal Resonance of the Unwritten Threshold",
    "description": "The Liminal Resonance of the Unwritten Threshold is a smooth obsidian stone etched with ever-shifting, arcane patterns that seem to whisper secrets of alternate realities. Holding it causes an unsettling disorientation, momentarily blurring the line between worlds. Crafted from the fearsome echoes of those who dared to peer into the void, this relic can be felt in its very touch—a tangible reminder of the unknown and the unspoken.",
    "category": "curiosities",
    "price": 1000,
    "icon": "🚪",
    "stock": 23,
    "rarity": "rare",
    "stockType": "night_only",
    "effects": [
      "Reality Distortion",
      "Anxiety Artifact"
    ],
    "vendor": "liminal_trader",
    "shippedBy": "Phase Shift Package",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reality Distortion",
        "rules": "When activated as a bonus action, it distorts reality for the wielder. For 2 rounds, all enemies within 10 feet must make a DC 15 Wisdom saving throw or be disoriented, receiving disadvantage on attack rolls and ability checks until the end of their next turn."
      },
      {
        "title": "Anxiety Artifact",
        "rules": "Activating this relic grants you advantage on Insight checks for 1 minute. However, you must make a DC 15 Wisdom saving throw at the start of your turn; failure results in an additional round of disorientation as described above."
      }
    ],
    "levelRequirementReason": "This relic is crafted to be accessible but potent enough to challenge even low-level adventurers.",
    "vendorReason": "The Liminal Trader specializes in curiosities that bridge the gap between worlds, and this artifact fits perfectly with their inventory.",
    "shippingDetail": "Ships via Phase Shift Package, ensuring its arrival through dimensional shortcuts.",
    "usage": {
      "activation": "Bonus action or reaction",
      "duration": "2 rounds per activation (Reality Distortion); 1 minute per activation (Anxiety Artifact)",
      "endsWhen": "Ends when the effect's duration expires or you take a short rest",
      "charges": "Unlimited, but each activation costs 50 XP."
    },
    "priceReason": "The item's balanced price reflects its moderate rarity and utility in combat and social situations without being overpowered.",
    "priceOriginal": 8000,
    "priceReviewedAt": "2026-07-25T14:55:43.024472+00:00",
    "aiReviewedAt": "2026-07-25T14:55:43.024472+00:00",
    "aiReviewVersion": 1
  }
};
