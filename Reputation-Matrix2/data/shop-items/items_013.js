// Shop items enriched by tools/enrich_shop_items.py
import { SHOP_CATEGORIES } from './categories.js';

export const ITEMS_013 = {
  "faerun_shadowwhisper_belt": {
    "id": "faerun_shadowwhisper_belt",
    "name": "Shadowwhisper Belt",
    "description": "The Shadowwhisper Belt, woven from the threads of forgotten dreams and enchanted by ancient shadow mages, allows its wearer to phase into darkened corners of reality. Its eerie, bioluminescent weave reveals hidden paths and concealed doors in dimly lit dungeons, casting light only where needed. When triggered by a shadow-based spell or effect, it grants temporary invisibility for 10 seconds, cloaking the user in darkness without leaving any trace of their passage.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "+10% chance to detect hidden paths and concealed doors",
      "Grants temporary invisibility when activated"
    ],
    "vendor": "faerun",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Shadow Detection",
        "rules": "When the belt is triggered by a shadow-based spell or effect, it grants the wearer +10% chance to detect hidden paths and concealed doors in dimly lit areas. This effect lasts until the end of the wearer's next turn."
      },
      {
        "title": "Shadow Cloak",
        "rules": "Activating the Shadowwhisper Belt grants temporary invisibility for 10 seconds, allowing the user to move unseen through shadows and darkness without leaving a trace. This effect ends if the user moves into direct light or is hit by an attack."
      }
    ],
    "levelRequirementReason": "The belt's shadow magic requires a moderate command of spellcasting.",
    "vendorReason": "Faerun, with its vast underground networks and hidden passages, is home to many who appreciate the utility of such a belt.",
    "shippingDetail": "Ships via Rakasha messengers, known for their speed through shadowy realms.",
    "usage": {
      "activation": "Reaction or spell trigger",
      "duration": "10 seconds per activation",
      "endsWhen": "Ends when the user moves into direct light or is hit by an attack",
      "charges": "Unlimited, recharges after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its utility and shadow magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:54:32.678320+00:00",
    "aiReviewedAt": "2026-07-22T04:54:32.678320+00:00",
    "aiReviewVersion": 1
  },
  "faerun_silken_blood_scarf": {
    "id": "faerun_silken_blood_scarf",
    "name": "Silken Blood Scarf",
    "description": "The Silken Blood Scarf is spun from the threads of forgotten warriors' blood and moonlight, each strand imbued with a fragment of their valiant spirit. Worn in battle, it absorbs poison damage, turning foes' deadly strikes into their own weakness. Its soothing hum calms allies, bolstering morale and dispelling panic. A relic of ancient craftsmanship, this scarf is both a weapon and a shield for those who dare to wear its weight.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs Poison",
      "Boosts Ally Morale"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Absorbs Poison",
        "rules": "When worn in combat, the scarf absorbs 1d6 poison damage per turn. This effect ends when a creature successfully saves against a DC 15 Constitution saving throw."
      },
      {
        "title": "Boosts Ally Morale",
        "rules": "While wearing the scarf, allies within 30 feet gain advantage on saving throws against being frightened and have their morale score increased by +2. This effect lasts for 1 minute or until the wearer is incapacitated."
      }
    ],
    "levelRequirementReason": "The scarf's arcane weave demands a certain proficiency in battle.",
    "vendorReason": "Faerun holds relics of ancient heroes and this scarf is one such heirloom.",
    "shippingDetail": "Delivered with a special courier who ensures the scarf's delicate state remains intact.",
    "usage": {
      "activation": "Passive effect when worn in combat.",
      "duration": "Until the wearer is incapacitated or removes the scarf.",
      "endsWhen": "The wearer successfully saves against poison damage or becomes incapacitated.",
      "charges": "Unlimited, but requires a short rest to recover."
    },
    "priceReason": "Balanced for its unique combination of defensive and morale-boosting abilities.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T04:54:24.954110+00:00",
    "aiReviewedAt": "2026-07-22T04:54:24.954110+00:00",
    "aiReviewVersion": 1
  },
  "faerun_silken_tide_cloak": {
    "id": "faerun_silken_tide_cloak",
    "name": "Silken Tide Cloak of the Deepborn",
    "description": "The Silken Tide Cloak of the Deepborn, woven from the ruins of drowned cities and the lore of forgotten sea-elves, shimmers like a living tapestry when wet. It grants its wearer the grace of water-born kin, allowing them to move swiftly through underwater terrain as if it were dry land. The cloak's essence is drawn from ancient magic, providing temporary immunity to drowning and enhancing perception in murky waters.",
    "category": "equipment",
    "price": 1500,
    "icon": "🌊",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Grants water movement",
      "Immunity to Drowning"
    ],
    "vendor": "faerun",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Water Movement",
        "rules": "The wearer can move through underwater terrain as if it were difficult terrain. This effect is passive while the cloak is worn."
      },
      {
        "title": "Immunity to Drowning",
        "rules": "The wearer gains immunity to the drowning condition for 10 minutes when wearing this cloak. This effect ends immediately upon removal or destruction of the cloak."
      }
    ],
    "levelRequirementReason": "This cloak requires a level 3 character due to its complex magic and the need for proper handling.",
    "vendorReason": "Faerun's extensive trade routes include many deep-sea explorers, making them familiar with this item's utility and lore.",
    "shippingDetail": "Shipped via the Void Drifter Relay; arrives within a week, but requires special handling for water-sensitive packages.",
    "usage": {
      "activation": "Passive while worn",
      "duration": "10 minutes when effect is active",
      "endsWhen": "Removal or destruction of the cloak",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its rare materials and complex enchantments, balancing its utility for deep-sea adventurers.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:53:49.889497+00:00",
    "aiReviewedAt": "2026-07-22T04:53:49.889497+00:00",
    "aiReviewVersion": 1
  },
  "faerun_soul_tether_chain": {
    "id": "faerun_soul_tether_chain",
    "name": "Soul Tether Chain",
    "description": "The Soul Tether Chain, forged from the very essence of a legendary soul long lost to shadow, is a blackened chain that whispers of forgotten battles and unyielding valor. When linked to an ally, it channels their untapped strength into the wielder's resolve, granting invulnerability to debuffs and temporary fortitude against harm. This relic is said to have been crafted by ancient forges deep within the Veil, where the souls of heroes are said to reside.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧩",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Invulnerability to Debuffs",
      "Temporary Fortitude"
    ],
    "vendor": "faerun",
    "shippedBy": "Pipe Express",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Invulnerability to Debuffs",
        "rules": "The wielder gains complete resistance to all debuffs for 30 seconds. This effect cannot be used more than once per long rest."
      },
      {
        "title": "Temporary Fortitude",
        "rules": "For the duration of the battle, the wielder is considered to have advantage on saving throws against attack rolls that deal damage. The chain can only be linked to one ally at a time and must be recharged after 24 hours."
      }
    ],
    "levelRequirementReason": "The forging of such a chain requires immense magical power, which is not easily mastered by lower-level spellcasters.",
    "vendorReason": "Faerun's network of arcane collectors and blacksmiths can trace the origins of this rare relic.",
    "shippingDetail": "The chain is shipped in a custom, enchanted box that ensures its safe arrival, despite potential magical interference during transit.",
    "usage": {
      "activation": "Action",
      "duration": "30 seconds or until the end of the next long rest",
      "endsWhen": "The effect ends when the wielder takes damage or the chain is unlinked from an ally",
      "charges": "Unlimited, but recharging requires a short rest and 24 hours"
    },
    "priceReason": "The price reflects the rare material and ancient crafting techniques required to forge this soul-bound artifact.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:53:51.320804+00:00",
    "aiReviewedAt": "2026-07-22T04:53:51.320804+00:00",
    "aiReviewVersion": 1
  },
  "faerun_soulflame_rod": {
    "id": "faerun_soulflame_rod",
    "name": "Soulflame Rod of the Unseen Flame",
    "description": "The Soulflame Rod of the Unseen Flame is a staff hewn from the petrified remains of a fallen god's final breath, its surface etched with arcane runes that whisper of ancient sorcery. The rod emits an eerie, flickering flame that dances without sound, capable of dispelling even the most resilient magical wards and curses on contact. To wield it effectively requires the soul of a true believer to ignite its power.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Dispel Magic Grant",
      "Curses Extinguish"
    ],
    "vendor": "Faerun",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Dispel Magic Grant",
        "rules": "When the wielder makes an attack with the rod, it grants them advantage on dispel magic checks. The effect lasts until the end of their next turn."
      },
      {
        "title": "Curses Extinguish",
        "rules": "Upon contact with a cursed or enchanted object, the rod's flame dissipates the effects immediately, requiring no action from the wielder and affecting only one target per use."
      }
    ],
    "levelRequirementReason": "The arcane complexity of the Soulflame Rod demands a minimum understanding of magic.",
    "vendorReason": "Faerun, a hub for ancient artifacts and relics, houses this potent tool of dispelling and destruction.",
    "shippingDetail": "Ships within three days via Void Drifter Relay, ensuring its arrival is swift but not guaranteed to be immediate.",
    "usage": {
      "activation": "Attack with the rod",
      "duration": "Instantaneous",
      "endsWhen": "Upon successful contact with a target or upon missing an attack roll",
      "charges": "Unlimited"
    },
    "priceReason": "The rod's rarity and mystical properties justify its higher price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:54:13.900835+00:00",
    "aiReviewedAt": "2026-07-22T04:54:13.900835+00:00",
    "aiReviewVersion": 1
  },
  "faerun_staff_of_wild_magic": {
    "id": "faerun_staff_of_wild_magic",
    "name": "Staff of Wild Magic",
    "description": "The Staff of Wild Magic is a gnarled, ancient oak staff that crackles with unpredictable arcane energy, its surface covered in runes that shift and glow like stars in an ever-changing sky. Crafted by the enigmatic Chaos Dwarfs, this staff can unleash wild magic surges that warp reality itself. It requires attunement from a spellcaster to harness its chaotic potential, and once wielded, it grants unpredictable yet potent arcane effects.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Unpredictable Arcane Surges",
      "Arcane Surge Bonus Damage"
    ],
    "vendor": "faerun",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Unpredictable Arcane Surges",
        "rules": "When you use an action to cast a spell from the Staff of Wild Magic, there is a 15% chance that it triggers a wild magic surge. If this occurs, roll 2d6 and subtract the result from your spell’s damage dice before adding any other modifiers."
      },
      {
        "title": "Arcane Surge Bonus Damage",
        "rules": "When you deal damage with a spell cast through the Staff of Wild Magic, add 2d6 bonus arcane damage to the roll. This effect cannot be used more than once per long rest."
      }
    ],
    "levelRequirementReason": "The staff requires attunement by any level 1 spellcaster, as its chaotic nature demands a novice's touch to wield it.",
    "vendorReason": "Faerûn is known for its diverse array of magical artifacts and this staff is one of the few items that can be found in their vast inventory.",
    "shippingDetail": "The staff arrives fully charged, but any wild magic surges that occur during shipping are not counted toward your daily limit.",
    "usage": {
      "activation": "Action or Bonus Action to cast a spell from the Staff of Wild Magic",
      "duration": "Instantaneous; ends when you stop casting or if a wild magic surge occurs",
      "endsWhen": "The staff stops working until recharged, which requires a long rest and a successful DC 15 Constitution saving throw.",
      "charges": "Unlimited, but subject to the wild magic surge condition"
    },
    "priceReason": "The Staff of Wild Magic is priced at 1000 XP because its unpredictable nature and chaotic energy make it a valuable yet risky tool for spellcasters.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:54:50.870499+00:00",
    "aiReviewedAt": "2026-07-22T04:54:50.870499+00:00",
    "aiReviewVersion": 1
  },
  "faerun_sunken_archives_scribe_quill": {
    "id": "faerun_sunken_archives_scribe_quill",
    "name": "Scribe Quill of the Sunken Archives",
    "description": "The Scribe Quill of the Sunken Archives is crafted from bones that once belonged to scholars who perished in the depths. Its ink, derived from forgotten tomes, grants a writer the power to imbue their words with potent magic. Each quill can only be wielded by those attuned to its origins, and it regenerates after 10 minutes of rest. However, proximity to Void Touched entities induces fleeting hallucinations that distort reality for moments.",
    "price": 1000,
    "icon": "📜",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Magical Incantations",
      "Random Sunken Archive Effects"
    ],
    "vendor": "faerun",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 4,
    "effectDetails": [
      {
        "title": "Magical Incantations",
        "rules": "When used to write a magical incantation, this quill grants +2d6 spell power. The writer must be at least 1 level higher than the spell's original caster."
      },
      {
        "title": "Random Sunken Archive Effects",
        "rules": "Each time you use the quill to write a magical incantation, there is a 5% chance that a random effect from the Sunken Archives will occur. These effects are instantaneous and can be beneficial or detrimental."
      }
    ],
    "levelRequirementReason": "The arcane knowledge required to attune oneself with the quill's origins necessitates at least 4 levels of spellcasting experience.",
    "vendorReason": "Faerûn is renowned for its extensive libraries and ancient texts, making it a fitting vendor for an item that draws on such knowledge.",
    "shippingDetail": "Ships via Lakitu Drones' express courier service, ensuring safe and swift delivery within a week.",
    "usage": {
      "activation": "As a bonus action to write a magical incantation",
      "duration": "Instantaneous effect; lasts until the next long rest",
      "endsWhen": "Use of another quill or a successful DC 15 Wisdom saving throw ends it if used near a Void Touched entity",
      "charges": "Unlimited, but the ink regenerates after 10 minutes"
    },
    "priceReason": "The item's rare crafting materials and unique attunement process justify its price of 1000 XP.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:54:28.780999+00:00",
    "aiReviewedAt": "2026-07-22T04:54:28.780999+00:00",
    "aiReviewVersion": 1
  },
  "faerun_sword_of_the_broken_crown": {
    "id": "faerun_sword_of_the_broken_crown",
    "name": "Sword of the Broken Crown",
    "description": "The Sword of the Broken Crown, crafted from the last shard of a fallen king’s crown, gleams with an ancient, almost otherworldly light. Its hilt is encrusted with jewels that once adorned the lost monarch's throne. When noble hands grip it, the sword whispers tales of forgotten battles and royal glory. Wielded by one of noble birth, it grants courage in moments of peril, parrying enemy attacks with a regal grace and reducing fear effects for all nearby allies.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Courage Aura",
      "Regal Parry"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Courage Aura",
        "rules": "When activated as an action, the sword grants a 10 second aura of regal dignity that reduces fear effects by 50% for all allies within 30 feet. The effect ends if the wielder drops to 0 hit points or the aura is dispelled."
      },
      {
        "title": "Regal Parry",
        "rules": "The sword has a +10% chance to parry enemy attacks when wielded by one of noble birth. This parry reduces damage taken by half on successful parries, and the effect ends if the wielder fails a saving throw against a fear effect."
      }
    ],
    "levelRequirementReason": "The sword's ancient magic requires a noble soul to resonate with its power.",
    "vendorReason": "Faerun, the crown jewel of nobility, houses this relic fit for royalty.",
    "shippingDetail": "The sword is carefully packed in a custom wooden crate to ensure safe delivery through treacherous lands.",
    "usage": {
      "activation": "Action or Reaction (to activate Courage Aura)",
      "duration": "10 seconds",
      "endsWhen": "Wielder drops to 0 hit points or the aura is dispelled by magic.",
      "charges": "Unlimited"
    },
    "priceReason": "The sword's rarity and unique enchantments justify its moderate cost.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T04:55:07.118553+00:00",
    "aiReviewedAt": "2026-07-22T04:55:07.118553+00:00",
    "aiReviewVersion": 1
  },
  "faerun_venom_spray": {
    "id": "faerun_venom_spray",
    "name": "Venom Spray of the Whispering Gorge",
    "description": "The Venom Spray of the Whispering Gorge is a vial containing a corrosive, sentient poison that drips with the whispers of the dead. When applied to a target, it deals acid damage and forces an immediate Will save; failure compels the victim to whisper a forgotten memory from their past. The spray emits a lingering scent that attracts nearby undead creatures, drawing them towards the area in search of sustenance.",
    "price": 1000,
    "icon": "💉",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Deals 2d6 Acid Damage",
      "Forces Will Save or Recall Memory"
    ],
    "vendor": "faerun",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Acidic Lash",
        "rules": "When applied, this vial deals 2d6 acid damage to the target creature. The victim must make a DC 14 Will save; on failure, they whisper a memory from their past as dictated by the item."
      },
      {
        "title": "Undead Attraction",
        "rules": "The poison emits an odor that attracts nearby undead creatures. This effect lasts for 1 hour or until the vial is used again. Undead within 30 feet of the target must make a DC 14 Wisdom saving throw or be drawn towards the source."
      }
    ],
    "levelRequirementReason": "This item requires a minimum character level to handle its potent effects and avoid unintended consequences.",
    "vendorReason": "Faerun's extensive trade networks allow them access to rare poisons from the Whispering Gorge.",
    "shippingDetail": "Due to the volatile nature of this item, it is shipped under strict temperature controls and must be delivered within 24 hours.",
    "usage": {
      "activation": "Used as a bonus action during combat or exploration.",
      "duration": "Instantaneous effect with lasting odor.",
      "endsWhen": "The vial is used again; once expended, it can only be recharged by the vendor Faerun.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced price reflects the rarity and potency of this poison, suitable for mid-level adventurers.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T04:54:58.325519+00:00",
    "aiReviewedAt": "2026-07-22T04:54:58.325519+00:00",
    "aiReviewVersion": 1
  },
  "faerun_void_touched_talisman": {
    "id": "faerun_void_touched_talisman",
    "name": "Void Touched Talisman",
    "description": "The Void Touched Talisman is a tarnished silver disc etched with fractured symbols of reality, once imbued by the arcane arts of the Void Watchers. This talisman absorbs ambient magical energy and converts it to raw power, capable of reducing spellcasting costs for attuned spellcasters by 25%. When wielded near the Void, it triggers a ripple in reality, subtly distorting space-time around its user. However, this activation induces temporary blindness in the user, a small price to pay for the magical prowess it grants.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Absorbs Ambient Energy",
      "Reduces Spellcasting Cost"
    ],
    "vendor": "faerun",
    "shippedBy": "Bullet Bill Express",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Absorbs Ambient Energy",
        "rules": "The talisman absorbs ambient magical energy and converts it into raw power. This effect is passive but requires the user to be attuned to spells with a Void affinity, as crafted by the Void Watchers of the Midlands."
      },
      {
        "title": "Reduces Spellcasting Cost",
        "rules": "While holding this talisman, the cost of spellcasting for attuned spellcasters is reduced by 25%. This effect is active as long as the user maintains concentration on a spell and has not exhausted its uses."
      }
    ],
    "levelRequirementReason": "Users must be at least level 10 to harness the Void Touched Talisman's power, ensuring it is only accessible to experienced spellcasters.",
    "vendorReason": "Faerun, known for its extensive trade networks and access to ancient artifacts, carries this legendary talisman.",
    "shippingDetail": "Ships via Bullet Bill Express within Faerun; expect delivery within a few days.",
    "usage": {
      "activation": "Passive effect activated by attunement and Void affinity.",
      "duration": "Instantaneous, active as long as the user maintains concentration on spells.",
      "endsWhen": "Exhausted after a number of uses equal to the user's spellcasting ability modifier + their proficiency bonus.",
      "charges": "Unlimited; recharges upon a short or extended rest."
    },
    "priceReason": "The price is set at 1000 XP, reflecting its rarity and the skill required to use it effectively.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T04:55:00.879570+00:00",
    "aiReviewedAt": "2026-07-22T04:55:00.879570+00:00",
    "aiReviewVersion": 1
  },
  "faerun_whispered_horn": {
    "id": "faerun_whispered_horn",
    "name": "Whispered Horn of the Silent King",
    "description": "The Whispered Horn of the Silent King, crafted in the forges of ancient warlords, resonates with a haunting melody that can pacify even the fiercest beasts and break the wills of those who hear it. Only those whose hearts are as pure as the horn's crystal core may wield its power. When sounded in combat, enemies within earshot must make a Wisdom saving throw or flee for 3 rounds, unable to act.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Pacifies wild beasts",
      "Breaks the will of foes"
    ],
    "vendor": "faerun",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Enemy Retreat",
        "rules": "When played in combat, enemies within 60 feet must make a Wisdom saving throw (DC 14) or flee for 3 rounds. This effect ends if an enemy takes damage or the player drops to 0 hit points."
      },
      {
        "title": "Pacify Wild Beasts",
        "rules": "When sounded, beasts within 120 feet become docile and ignore any commands given by their trainers for 1 minute. This effect ends if a beast takes damage or the player drops to 0 hit points."
      }
    ],
    "levelRequirementReason": "Requires a character with some experience to wield its power without succumbing to its haunting melody.",
    "vendorReason": "The relics of ancient warlords are well-known in Faerûn, and only the trusted vendors like Faerun can handle such powerful items.",
    "shippingDetail": "Due to its power, the horn must be delivered by Shy Guy Smugglers for maximum safety and security.",
    "usage": {
      "activation": "A free action to play the horn",
      "duration": "Instantaneous; lasts until the end of the next long rest if not used again",
      "endsWhen": "The player drops to 0 hit points, or an enemy takes damage while within range of the effect.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP as it provides powerful but not overpowered effects in combat.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T04:55:20.318245+00:00",
    "aiReviewedAt": "2026-07-22T04:55:20.318245+00:00",
    "aiReviewVersion": 1
  },
  "fake_boo_ghost_trap": {
    "id": "fake_boo_ghost_trap",
    "name": "Fake Boo Ghost Trap",
    "description": "The Fake Boo Ghost Trap is a glass jar with a spectral figure of a ghost painted on its lid. Crafted by Spooky Knockoff Co., it seems to 'trap' minor illusions or spirits, but in reality, it's just a clever illusion itself. The jar offers advantage on Intimidation checks when dealing with ghosts and breaks easily if struck, requiring a DC 13 saving throw to avoid shattering it into harmless fragments.",
    "category": "equipment",
    "price": 1000,
    "icon": "🕳️",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Minor Illusion Trap",
      "Glass Fragility"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ghostly Glass Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Illusion Trap",
        "rules": "As an action, you can use the jar on a target within 30 feet that is a willing minor illusion or spirit. The target must make a DC 13 Constitution saving throw. On a failed save, it enters the jar for 1 minute and cannot escape unless it successfully saves again."
      },
      {
        "title": "Glass Fragility",
        "rules": "The jar breaks easily if struck by a forceful blow or impact. It requires a DC 13 Strength (Athletics) check to shatter it, which also ends any minor illusion trapped within."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to practice their Intimidation skills and learn about the fragility of objects.",
    "vendorReason": "Wario Land specializes in quirky, often broken or illusionary items that can be found at his bazaar.",
    "shippingDetail": "Ships via Ghostly Glass Express, known for its timely and sometimes eerie deliveries.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until the target escapes or a forceful blow is applied to shatter it",
      "endsWhen": "The minor illusion trapped within escapes, successfully saves against the saving throw, or the jar breaks from a hit",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects its unique combination of an Intimidation tool and fragile glassware.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-22T04:55:13.278808+00:00",
    "aiReviewedAt": "2026-07-22T04:55:13.278808+00:00",
    "aiReviewVersion": 1
  },
  "fake_bowser_fire_snort_candy": {
    "id": "fake_bowser_fire_snort_candy",
    "name": "Fake Bowser Fire Snort Candy",
    "description": "This small, glowing red candy twists your breath into a fiery snort that can ignite nearby items. After consuming it, you cough violently for several moments, making conversation nearly impossible and drawing laughter from those around you. Crafted by the mischievous Snort Sweets in the heart of Bowser's lair, this treat is a mix of candy and volcanic essence, perfect for those who dare to challenge the king of the Mushroom Kingdom.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍬",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Snort: Fire Breath",
      "Coughing Fit"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fire Fizz Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Snort: Fire Breath",
        "rules": "As an action, you can exhale a cone of fire in a 15-foot-long line. Creatures in the area must make a DC 12 Dexterity saving throw or take 2d6 fire damage."
      },
      {
        "title": "Coughing Fit",
        "rules": "You suffer disadvantage on all verbal communication for 1 minute after consuming the candy, and you are considered distracted. This effect ends early if you successfully save against a DC 10 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "This candy is potent enough to be dangerous even to low-level adventurers.",
    "vendorReason": "Wario's store often has items that are both practical and potentially hazardous, perfect for the mischievous adventurer.",
    "shippingDetail": "Ships with a small flame hazard warning. Must be carried by someone wearing fire-resistant gloves.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous breath; Coughing lasts for 1 minute",
      "endsWhen": "The coughing effect ends if you save against it or after one minute, whichever comes first.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as a unique candy that offers both utility and potential risk.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T04:55:30.131232+00:00",
    "aiReviewedAt": "2026-07-22T04:55:30.131232+00:00",
    "aiReviewVersion": 1
  },
  "fake_bowser_flame_breath_candy": {
    "id": "fake_bowser_flame_breath_candy",
    "name": "Fake Bowser Flame Breath Candy",
    "description": "Fake Bowser Flame Breath Candy is a wicked confection that mimics the fiery breath of Bowser. When consumed, it releases a cone of heat that scorches nearby foes, but the aftertaste lingers, causing you to sputter and talk incoherently for an hour. Koopa troops, however, find it a tool of intimidation, their confidence boosted by its mere presence. Crafted by Flame Fakes with genuine volcanic sugar, this candy is not just sweet; it's a dangerous treat from the fiery pits of Bowser’s domain.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔥",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Fire Breath Cone",
      "Mouth Burn"
    ],
    "vendor": "wario_land",
    "shippedBy": "Hot Head Haul",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Fire Breath Cone",
        "rules": "When consumed as an action, the user exhales a cone of fire with a range of 15 feet. All creatures in this area must make a DC 12 Dexterity saving throw or take 1d6 fire damage. This effect lasts for 1 minute."
      },
      {
        "title": "Mouth Burn",
        "rules": "For the next hour, the user has disadvantage on all Charisma (Performance) and Wisdom (Insight) checks due to a persistent burning sensation in their mouth."
      }
    ],
    "levelRequirementReason": "This candy is designed for beginners or those looking for a thrilling yet manageable experience.",
    "vendorReason": "Wario, being the mischievous and resourceful thief he is, has found this candy to be an entertaining product that can cause both mirth and mischief in the right hands.",
    "shippingDetail": "Ships hot, arrives at your doorstep ready for immediate consumption. Due to its volatile nature, it must be handled with care and delivered quickly.",
    "usage": {
      "activation": "Consumed as an action.",
      "duration": "1 minute until the fire breath effect ends; 1 hour until mouth burn effect ends.",
      "endsWhen": "The effects end naturally after their respective durations.",
      "charges": "Unlimited, as it is a consumable."
    },
    "priceReason": "This candy strikes the right balance by offering an exciting yet manageable risk, suitable for adventurers of all levels.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T04:55:23.945338+00:00",
    "aiReviewedAt": "2026-07-22T04:55:23.945338+00:00",
    "aiReviewVersion": 1
  },
  "fake_bowser_jr_clown_car_horn": {
    "id": "fake_bowser_jr_clown_car_horn",
    "name": "Fake Bowser Jr. Clown Car Horn",
    "description": "The Fake Bowser Jr. Clown Car Horn is a mischievous instrument crafted from gleaming brass and adorned with whimsical clowns in vibrant colors. When honked, it emits an ear-splitting sound that can send even the bravest adventurers scrambling for cover. Its origin lies in Wario Land's secret workshop where oddities are born. The horn comes with a limited use, perfect for pranks or quick escapes from dire situations.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚗",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Honk to Scare",
      "Silly Sound"
    ],
    "vendor": "wario_land",
    "shippedBy": "Car Clown Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Honk to Scare",
        "rules": "When you activate the horn as a bonus action, all creatures within 30 feet must succeed on a DC 14 Wisdom saving throw or be frightened for 1 round. This effect ends when the creature successfully saves."
      },
      {
        "title": "Silly Sound",
        "rules": "While holding the horn, you have disadvantage on Intimidation checks and Saving Throws that involve serious matters. This effect persists until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for newer adventurers who can benefit from its playful yet effective scare tactic.",
    "vendorReason": "Wario Land, known for oddities and quirky inventions, naturally sells this clown-themed horn.",
    "shippingDetail": "Delivered by Car Clown Express with a special delivery that may include free clown face-paint.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous for Honk to Scare; until the end of your next long rest for Silly Sound",
      "endsWhen": "The creature successfully saves against Honk to Scare or at the start of your next long rest for Silly Sound",
      "charges": "Recharges after a long rest"
    },
    "priceReason": "Balanced as it provides a fun and occasionally useful tool without overshadowing more serious adventuring gear.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-22T04:55:42.537321+00:00",
    "aiReviewedAt": "2026-07-22T04:55:42.537321+00:00",
    "aiReviewVersion": 1
  },
  "fake_bowser_jr_paintbrush": {
    "id": "fake_bowser_jr_paintbrush",
    "name": "Fake Bowser Jr. Paintbrush",
    "description": "The Fake Bowser Jr. Paintbrush is a whimsical, neon-pink brush with a mischievous flair. Crafted from an odd mix of paint and toy materials, this brush can 'paint' illusions that vanish when washed away by water. Its playful design makes it nearly impossible to take seriously, but its effects are undeniable: it grants you advantage on Deception checks against children under 12, and a minor illusion that lasts for one minute, detectable only with Wisdom (Perception) DC 13.",
    "category": "equipment",
    "price": 1000,
    "icon": "🖌️",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Minor Illusion",
      "Deception Advantage with Kids"
    ],
    "vendor": "wario_land",
    "shippedBy": "Paint Post Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Minor Illusion",
        "rules": "You can create the visual impression of an object, a creature, or some other visible phenomenon within range for one minute. This illusion appears in any unoccupied space within 10 feet of you and is governed by Wisdom (Perception) DC 13. It lasts until it is destroyed or dispelled."
      },
      {
        "title": "Deception Advantage with Kids",
        "rules": "For the duration, you have advantage on Deception checks against any creature that has not reached adulthood."
      }
    ],
    "levelRequirementReason": "This item is suitable for beginners and those who need a playful edge in their adventuring.",
    "vendorReason": "Wario Land, ever the entrepreneur, has found a way to turn Bowser Jr.'s mischievous antics into a profitable venture.",
    "shippingDetail": "Delivered with a fun, neon-pink bow on top of the package.",
    "usage": {
      "activation": "Bonus action to create an illusion or use Deception advantage.",
      "duration": "One minute for Minor Illusion; lasts until destroyed or dispelled.",
      "endsWhen": "The minor illusion is detected and destroyed, or when the effect ends.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects a unique item that provides both utility and whimsy without overshadowing more powerful gear.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T04:55:49.526041+00:00",
    "aiReviewedAt": "2026-07-22T04:55:49.526041+00:00",
    "aiReviewVersion": 1
  },
  "fake_bowser_shell_phone": {
    "id": "fake_bowser_shell_phone",
    "name": "Fake Bowser Shell Phone",
    "description": "The Fake Bowser Shell Phone is a conch shell encased in imitation brick, its glossy surface a testament to the craft of Shell Scams. When you press the faux speaker button, it amplifies your voice, granting advantage on Perception checks for sound. However, the echo chamber effect makes stealth nearly impossible; any attempt at remaining hidden incurs disadvantage. The phone's most potent feature is Bowser Calls, which boosts your Intimidation by +1, perfect for those who dare to stand against you.",
    "category": "equipment",
    "price": 1000,
    "icon": "📞",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Shell Echoes Loud",
      "Bowser Calls"
    ],
    "vendor": "wario_land",
    "shippedBy": "Echo Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Shell Echoes Loud",
        "rules": "When you use the Fake Bowser Shell Phone in a stealth situation, you incur disadvantage on Stealth checks. This effect lasts until your next short or long rest."
      },
      {
        "title": "Bowser Calls",
        "rules": "For 1 hour after activation, your Intimidation ability score is increased by 1. This benefit ends if you are incapacitated or fall unconscious."
      }
    ],
    "levelRequirementReason": "This phone's features are simple enough for anyone to use without requiring a high level of skill.",
    "vendorReason": "Wario Land is known for his eccentric inventions, and the Fake Bowser Shell Phone fits right into that legacy.",
    "shippingDetail": "The phone arrives with a special case to protect it during transit, ensuring its unique design remains intact.",
    "usage": {
      "activation": "Use an action to activate the phone's features.",
      "duration": "Instantaneous for Shell Echoes Loud; 1 hour for Bowser Calls.",
      "endsWhen": "Disadvantage on Stealth ends at next rest; Intimidation boost ends when you are incapacitated or fall unconscious.",
      "charges": "Unlimited, recharges after a short or long rest."
    },
    "priceReason": "Balanced for its utility and the convenience of having such an iconic item at your fingertips.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T04:55:51.099544+00:00",
    "aiReviewedAt": "2026-07-22T04:55:51.099544+00:00",
    "aiReviewVersion": 1
  },
  "fake_dk_coconut_gun": {
    "id": "fake_dk_coconut_gun",
    "name": "Fake DK Coconut Gun",
    "description": "The Fake DK Coconut Gun is a makeshift weapon crafted from scavenged materials in the dense jungles of Osmos. Its barrel, a hollowed-out coconut, is reinforced with metal strips scavenged from derelict ships. The weapon’s true power lies not in its projectile but in the chaos it incites; when fired, it launches pebbles that deal 1d4 bludgeoning damage within a 20-foot radius, and the subsequent jam forces the user to wait a round before firing again. This relic is favored by the mischievous DK crew, who have honed their charisma with these very weapons.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥥",
    "stock": 6,
    "rarity": "uncommon",
    "effects": [
      "Jammed Shot",
      "Monkey Charisma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Jungle Jolt Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Jammed Shot",
        "rules": "When you fire the Fake DK Coconut Gun, it may jam. On a failed Dexterity saving throw (DC 12), the weapon jams for one minute, preventing any further shots until shaken clear."
      },
      {
        "title": "Monkey Charisma",
        "rules": "While using the Fake DK Coconut Gun, all members of the DK crew gain advantage on Charisma checks and saves. This effect lasts as long as they are within 30 feet of you."
      }
    ],
    "levelRequirementReason": "The weapon's simplicity and reliance on user skill make it accessible to lower-level characters.",
    "vendorReason": "Wario Land, known for its quirky and eclectic inventory, stocks this item as a humorous addition to its wacky merchandise.",
    "shippingDetail": "Due to the weapon's fragile nature, it is shipped with extra padding to ensure safe delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous",
      "endsWhen": "The weapon jams or when a charge is expended (unlimited charges)",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced as an uncommon item, the Fake DK Coconut Gun offers a unique and humorous addition to any adventurer's arsenal without being overpowered.",
    "priceOriginal": 5600,
    "priceReviewedAt": "2026-07-22T04:55:44.372721+00:00",
    "aiReviewedAt": "2026-07-22T04:55:44.372721+00:00",
    "aiReviewVersion": 1
  },
  "fake_dk_diddy_kong_peanut_popgun": {
    "id": "fake_dk_diddy_kong_peanut_popgun",
    "name": "Fake DK Diddy Kong Peanut Popgun",
    "description": "The Fake DK Diddy Kong Peanut Popgun, a crude yet oddly charming toy, is crafted from mismatched materials scavenged from various Popgun Fakes inventories. This popgun's chambers are filled with dried beans that pop out like peanuts when fired. Despite its shoddy construction and the vendor's dubious reputation, it remains a favorite among those who appreciate the quirky, albeit unpredictable, nature of Diddy's creations. With each shot, the popgun jams, forcing you to reload in disadvantageous conditions, but it offers a +1 bonus to ranged attacks with nuts, ensuring that even when things go wrong, you still have an edge.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥜",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Pop Bean",
      "Gun Jams Nuts"
    ],
    "vendor": "wario_land",
    "shippedBy": "Peanut Pop Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pop Bean",
        "rules": "As a bonus action, you can fire the popgun. This causes it to discharge one dried bean in a 20-foot line. The target must succeed on a DC 12 Dexterity saving throw or be blinded until the start of your next turn."
      },
      {
        "title": "Gun Jams Nuts",
        "rules": "When you use this popgun, there is disadvantage on all attempts to load it again until the end of your next short rest. This effect does not apply if the popgun is reloaded with new materials from a vendor like Wario Land."
      }
    ],
    "levelRequirementReason": "The toy-like nature of this item requires no specific level, but it's best suited for beginners or those who seek novelty over power.",
    "vendorReason": "Wario Land sells a wide variety of odd and quirky items that appeal to the whimsical side of adventurers.",
    "shippingDetail": "Delivered with a special Peanut Pop Express delivery, ensuring the toy arrives in perfect condition despite its rough construction.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends once the target makes the saving throw or until the end of your next short rest due to jamming.",
      "charges": "Unlimited, but reloading requires a successful Dexterity check (DC 10) with disadvantage if jammed."
    },
    "priceReason": "The price is adjusted for its quirky design and limited functionality, making it a fair value for adventurers seeking a unique toy.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:56:13.368614+00:00",
    "aiReviewedAt": "2026-07-22T04:56:13.368614+00:00",
    "aiReviewVersion": 1
  },
  "fake_goomba_stomper_boots": {
    "id": "fake_goomba_stomper_boots",
    "name": "Fake Goomba Stomper Boots",
    "description": "These rubber boots are a parody of Mario's iconic stomper shoes, crafted by bootleggers who can't quite replicate their magic. While they don't grant you true Mario powers, they do make you feel like you're walking on air—literally. When you stomp with these, Goombas scatter in fear, and the sound of your boots squeaking will give away your position to anyone listening. Just beware: each time you use them, the rubber loses a bit more elasticity, until one day they might just pop like a cheap balloon.",
    "category": "equipment",
    "price": 1000,
    "icon": "👢",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Goomba Fears",
      "Squeaky Boots"
    ],
    "vendor": "wario_land",
    "shippedBy": "Stomp Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Goomba Fears",
        "rules": "When you make an attack roll against a Goomba, you have advantage. This effect lasts until the end of your next short or long rest."
      },
      {
        "title": "Squeaky Boots",
        "rules": "Each time you use these boots in combat, there is disadvantage on all Stealth checks made by you until the start of your next turn. This effect does not stack with other sources of disadvantage."
      }
    ],
    "levelRequirementReason": "Anyone can try to feel like Mario for a day.",
    "vendorReason": "Wario, being the master of parodies and knockoffs, sells these as a way to mock his rival's popularity without actually infringing on any copyrights.",
    "shippingDetail": "Delivery is slow due to the sound they make, which can alert potential customers in nearby areas.",
    "usage": {
      "activation": "As a bonus action",
      "duration": "Until the end of your next short or long rest",
      "endsWhen": "Rest ends",
      "charges": "Unlimited"
    },
    "priceReason": "While not as powerful as official footwear, these boots provide a fun and thematic advantage with no risk to the wearer.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:56:23.696972+00:00",
    "aiReviewedAt": "2026-07-22T04:56:23.696972+00:00",
    "aiReviewVersion": 1
  },
  "fake_kirby_star_rod_replica": {
    "id": "fake_kirby_star_rod_replica",
    "name": "Fake Kirby Star Rod Replica",
    "description": "The Fake Kirby Star Rod Replica is a whimsical wand crafted from cheap materials. It comes with a red string that can be used to 'suck in' small objects, up to five pounds, within ten feet. The wand's charm lies not only in its magical allure but also in the advantage it grants to Persuasion checks when dealing with puffballs, as fans of Kirby lore are quick to praise it.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "String Suction",
      "Fan Favor"
    ],
    "vendor": "wario_land",
    "shippedBy": "Puff Delivery",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "String Suction",
        "rules": "As an action, the user can use this wand to pull small objects (up to five pounds) within ten feet with a red string. The target must make a Dexterity saving throw (DC 12) or be entangled by the string, which tangles and makes any further uses of the wand disadvantageous until cleared."
      },
      {
        "title": "Fan Favor",
        "rules": "When using this item to aid in Persuasion checks with puffballs, the user gains advantage on such checks. This effect lasts for one hour after each successful use."
      }
    ],
    "levelRequirementReason": "The wand's simplicity and reliance on a mundane string make it accessible to lower-level characters.",
    "vendorReason": "Wario Land is known for his knack of selling oddball items, including knockoff versions of popular magical wands.",
    "shippingDetail": "Ships with a puffball courier who delivers the item within one day of purchase.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous for String Suction; lasts one hour for Fan Favor",
      "endsWhen": "The string tangles, or the effect expires after an hour",
      "charges": "Unlimited uses"
    },
    "priceReason": "This price reflects a balance between the item's whimsical design and its limited utility in combat.",
    "priceOriginal": 5900,
    "priceReviewedAt": "2026-07-22T04:56:03.195786+00:00",
    "aiReviewedAt": "2026-07-22T04:56:03.195786+00:00",
    "aiReviewVersion": 1
  },
  "fake_kirby_warp_star_toy": {
    "id": "fake_kirby_warp_star_toy",
    "name": "Fake Kirby Warp Star Toy",
    "description": "This toy star is a whimsical counterfeit of the beloved Warp Star. When thrown, it bounces across the battlefield to distract foes, who must succeed on a DC 12 Dexterity saving throw or be knocked prone. After deflating, it provides a minor performance boost, granting +1 Performance bonus until the next dawn. Its craftsmanship is unmistakable—made by Star Toy Fakes with an almost perfect replica of the original's iconic design.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Bounce and Distract",
      "Performance Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Whiz Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Bounce and Distract",
        "rules": "When thrown, this toy star bounces across the battlefield. Enemies within a 10-foot radius must succeed on a DC 12 Dexterity saving throw or be knocked prone. The effect lasts until the end of the next creature's turn following its creation."
      },
      {
        "title": "Performance Boost",
        "rules": "After deflating, the toy star grants +1 to Performance checks for one hour. This benefit is lost if the star is thrown again before that time expires."
      }
    ],
    "levelRequirementReason": "This toy is designed for beginners and players who want a fun distraction without needing high-level abilities.",
    "vendorReason": "Wario Land is known for its collection of quirky, yet effective, toys that can turn the tide in a pinch.",
    "shippingDetail": "Ships within 24 hours with Warp Whiz Express delivery.",
    "usage": {
      "activation": "Throw as an action",
      "duration": "Instantaneous and ends at start of next turn",
      "endsWhen": "Deflates or is thrown again",
      "charges": "Unlimited, but recharges after a short rest"
    },
    "priceReason": "The toy's uncommon rarity and limited functionality justify this price in experience points.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T04:56:04.410968+00:00",
    "aiReviewedAt": "2026-07-22T04:56:04.410968+00:00",
    "aiReviewVersion": 1
  },
  "fake_link_bomb_bag_pouch": {
    "id": "fake_link_bomb_bag_pouch",
    "name": "Fake Link Bomb Bag Pouch",
    "description": "The Fake Link Bomb Bag Pouch is a compact leather pouch designed to house 'bombs'—in this case, harmless firecrackers. It was crafted by Bomb Bootlegs, known for their dubious yet reliable explosive imitations. The pouch's design ensures that when you hurl one of its contents at an enemy, the resulting sound and flash can momentarily distract or startle them. However, using it in stealthy situations is a challenge, as the pouch emits a telltale puff of smoke upon use, giving away your position.",
    "category": "equipment",
    "price": 1000,
    "icon": "💣",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Blast Bomb",
      "Smoke Screen"
    ],
    "vendor": "wario_land",
    "shippedBy": "Explosive Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Blast Bomb",
        "rules": "When you throw a firecracker from the pouch as an action within 30 feet, it explodes in a 5-foot radius around its point of impact. Targets within this area must make a DC 12 Dexterity saving throw or be blinded for 1 round."
      },
      {
        "title": "Smoke Screen",
        "rules": "Using the pouch generates a puff of smoke upon activation, giving advantage on Stealth checks made to remain hidden in that area for 1 minute. However, this effect is noticeable and can be seen by creatures within 30 feet."
      }
    ],
    "levelRequirementReason": "The Fake Link Bomb Bag Pouch provides minor utility without being overly powerful for a level 1 character.",
    "vendorReason": "Wario Land, with his knack for explosives and gadgets, sells this item as a reliable yet harmless tool for adventurers of all levels.",
    "shippingDetail": "The pouch is delivered via Explosive Express, ensuring it arrives in pristine condition despite its contents being non-explosive.",
    "usage": {
      "activation": "Action or bonus action to throw a firecracker, and an additional bonus action for the smoke effect.",
      "duration": "Instantaneous for the blast; 1 minute for the smoke screen",
      "endsWhen": "The firecracker's effects end immediately if it misses its target. The smoke dissipates after 1 minute.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "The Fake Link Bomb Bag Pouch is priced at 1000 XP to reflect the convenience and utility it offers, balanced against its limited combat effectiveness.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-22T04:56:19.368081+00:00",
    "aiReviewedAt": "2026-07-22T04:56:19.368081+00:00",
    "aiReviewVersion": 1
  },
  "fake_link_master_sword_keychain": {
    "id": "fake_link_master_sword_keychain",
    "name": "Fake Link Master Sword Keychain",
    "description": "The Fake Link Master Sword Keychain, a diminutive replica of the legendary blade, gleams with an imitation sheen. Crafted from resilient plastic, this keychain's hilt is etched with the Hyrulean sigil. Despite its humble stature, it holds a secret: when used to pick locks, it grants advantage on checks for simple locks (heroic theme). However, its jingling sounds during stealth attempts impose disadvantage, making it an unintentional alarm. Fans of Link are easily swayed by its presence, offering +1 Persuasion bonuses in their company.",
    "category": "equipment",
    "price": 1000,
    "icon": "⚔️",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Lockpick Advantage",
      "Stealth Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Heros Haste Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Lockpick Advantage",
        "rules": "When used to pick locks, the user gains advantage on checks for simple locks. This effect is limited to once per day."
      },
      {
        "title": "Stealth Disadvantage",
        "rules": "While wearing or holding this keychain, the user suffers a disadvantage on Stealth checks due to its jingling sounds. This lasts until the keychain is no longer being worn or held."
      }
    ],
    "levelRequirementReason": "This item's lockpicking advantage makes it useful even for beginners.",
    "vendorReason": "Wario Land offers a wide range of quirky and functional items, including this fun keychain.",
    "shippingDetail": "Ships within one game session with guaranteed delivery.",
    "usage": {
      "activation": "Passive effect when the item is worn or held.",
      "duration": "Instantaneous for lockpicking advantage, lasts until removed or Stealth check ends.",
      "endsWhen": "Disadvantage on Stealth checks ceases when not being worn or held.",
      "charges": "Unlimited"
    },
    "priceReason": "The item's unique functionality and Hyrule-themed design justify this balanced price.",
    "priceOriginal": 4300,
    "priceReviewedAt": "2026-07-22T04:56:30.230804+00:00",
    "aiReviewedAt": "2026-07-22T04:56:30.230804+00:00",
    "aiReviewVersion": 1
  },
  "fake_luigi_ghostbuster_backpack": {
    "id": "fake_luigi_ghostbuster_backpack",
    "name": "Fake Luigi Ghostbuster Backpack",
    "description": "The Fake Luigi Ghostbuster Backpack appears as a standard backpack, but its zipper is enchanted to hold small spirits temporarily. When zipped shut, it provides advantage on checks to contain ghosts or undead within. However, the weight of the contained spirits makes carrying the pack cumbersome; you incur disadvantage on Strength (Carry) checks. The backpack was crafted by Pack Fakes, known for their dubious ghost-catching antics. Each use requires a successful DC 15 Wisdom (Insight) check to ensure the spirits remain contained.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Store small spirits",
      "Pack heavy"
    ],
    "vendor": "wario_land",
    "shippedBy": "Ghost Gear Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Store Small Spirits",
        "rules": "When you successfully zip the backpack, it provides advantage on checks to contain small ghosts or undead. Each use requires a DC 15 Wisdom (Insight) check to maintain containment."
      },
      {
        "title": "Pack Heavy",
        "rules": "You incur disadvantage on Strength (Carry) checks while carrying this backpack due to the weight of contained spirits."
      }
    ],
    "levelRequirementReason": "The backpack requires no level, as it is a basic tool for beginners interested in ghost-catching.",
    "vendorReason": "Wario Land sells this item because his stores cater to those who want to try their hand at capturing spirits without the need for high-level magic.",
    "shippingDetail": "Ships via Ghost Gear Express, known for its reliable delivery of ghost-related items.",
    "usage": {
      "activation": "Activating this backpack requires zipping it shut.",
      "duration": "Instantaneous, with a duration until the next short or long rest.",
      "endsWhen": "The contained spirits escape if you fail an Insight check, or when the backpack is unzipped.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "This price reflects the backpack's moderate difficulty in crafting and its utility for beginners.",
    "priceOriginal": 5500,
    "priceReviewedAt": "2026-07-22T04:56:40.468087+00:00",
    "aiReviewedAt": "2026-07-22T04:56:40.468087+00:00",
    "aiReviewVersion": 1
  },
  "fake_luigi_mushroom_backpack": {
    "id": "fake_luigi_mushroom_backpack",
    "name": "Fake Luigi Mushroom Backpack",
    "description": "The Fake Luigi Mushroom Backpack appears as a whimsical, mushroom-shaped pack that creaks and groans when you open it. Crafted by Pack Fakes from recycled materials, this backpack is rumored to have been made under the watchful eye of Wario in his underground factory. It holds an extra mushroom foraging space but also carries a curse: anyone with allergies must roll disadvantage on saving throws against spores released whenever the pack is opened.",
    "category": "equipment",
    "price": 1000,
    "icon": "🎒",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Extra Mushroom Space",
      "Spore Curse"
    ],
    "vendor": "wario_land",
    "shippedBy": "Mush Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Extra Mushroom Space",
        "rules": "This backpack holds one additional mushroom, providing an extra storage slot for foragers. It has no other active effects."
      },
      {
        "title": "Spore Curse",
        "rules": "If the owner of this pack opens it while suffering from allergies, they must make a DC 12 Constitution saving throw or take 1d4 temporary poison damage and be incapacitated until the condition is cured. This effect ends when the backpack is sealed again."
      }
    ],
    "levelRequirementReason": "This backpack can be used by beginners, as it offers a simple utility without requiring advanced skills.",
    "vendorReason": "Wario Land sells this item because it's a quirky product from Pack Fakes, known for their recycled goods in the underground market.",
    "shippingDetail": "Shipped via Mush Mail, which ensures timely delivery of any mushroom-related items.",
    "usage": {
      "activation": "Instantaneous when opening or sealing the backpack.",
      "duration": "Until sealed again.",
      "endsWhen": "When the pack is resealed.",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects its common rarity and the unique properties it offers, making it a fair value for players.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:57:24.123608+00:00",
    "aiReviewedAt": "2026-07-22T04:57:24.123608+00:00",
    "aiReviewVersion": 1
  },
  "fake_luigi_mushroom_polish": {
    "id": "fake_luigi_mushroom_polish",
    "name": "Fake Luigi Mushroom Polish",
    "description": "This bottle of Fake Luigi Mushroom Polish gleams with a slick sheen. It's rumored to have been mass-produced by the nefarious Polish Fakes factory, known for their dubious goods. When applied, it enhances one’s speed by +1 foot per round for ten minutes but also promotes unsanitary conditions, making hygiene checks disadvantageous. This polish is a must-have for those who dare to wear it and revel in its effects.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 11,
    "rarity": "common",
    "effects": [
      "Speed Boost",
      "Hygiene Penalty"
    ],
    "vendor": "wario_land",
    "shippedBy": "Courier Toadstool Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Speed Boost",
        "rules": "Apply as an action, enhancing your speed by +1 foot per round for ten minutes. The effect ends if you stop applying the polish or clean it off."
      },
      {
        "title": "Hygiene Penalty",
        "rules": "While wearing shoes polished with Fake Luigi Mushroom Polish, you take a -2 penalty on all Hygiene checks until the polish is removed."
      }
    ],
    "levelRequirementReason": "This item should be accessible to lower-level characters as it serves more of an comedic or situational purpose.",
    "vendorReason": "Wario Land, being a notorious supplier of questionable merchandise, naturally sells this dubious product.",
    "shippingDetail": "Ships within three days with standard courier services.",
    "usage": {
      "activation": "Apply as an action",
      "duration": "10 minutes or until removed",
      "endsWhen": "The effect ends when you stop applying the polish or clean it off",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at a price of 1000 XP, this item is priced to reflect its dubious nature and limited utility.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T04:56:36.191952+00:00",
    "aiReviewedAt": "2026-07-22T04:56:36.191952+00:00",
    "aiReviewVersion": 1
  },
  "fake_luigi_poltergust_nozzle": {
    "id": "fake_luigi_poltergust_nozzle",
    "name": "Fake Luigi Poltergust Nozzle",
    "description": "The Fake Luigi Poltergust Nozzle, crafted by Gust Fakes, is a mischievous contraption that mimics the genuine Poltergust's suction power. It whistles and hums with an eerie, mechanical resonance as it 'sucks' air in a 5-foot cone, sending small objects flying backward. However, its imitation comes at a price: the nozzle clogs after three uses, requiring immediate repair to restore its function. Despite its flaws, it remains a handy tool for vexing spirits, granting +1 to saving throws against them.",
    "category": "equipment",
    "price": 1000,
    "icon": "💨",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Suction Cone",
      "Clogs After Use"
    ],
    "vendor": "wario_land",
    "shippedBy": "Blow Breeze Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Suction Cone",
        "rules": "When activated as an action, the nozzle creates a 5-foot cone of suction that pushes small objects and creatures back up to 10 feet. This effect has no save DC but ends when the nozzle clogs."
      },
      {
        "title": "Clogs After Use",
        "rules": "After three uses or after being used on a creature with a CR greater than 2, the nozzle becomes clogged and requires repair before it can be used again. Repairing the nozzle is a short rest that costs 50 XP."
      }
    ],
    "levelRequirementReason": "This nozzle is designed for beginners to experiment with its suction capabilities without requiring high-level proficiency.",
    "vendorReason": "Wario Land, known for his knack for collecting and selling quirky gadgets, offers this imitation of the genuine Poltergust as a fun but unreliable tool.",
    "shippingDetail": "Ships within one business day with express delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous, ends when clogged or after three uses",
      "endsWhen": "After three uses or when it clogs from use on a creature with CR >2",
      "charges": "Unlimited, but repairs require a short rest and 50 XP"
    },
    "priceReason": "The nozzle is priced at 1000 XP to reflect its imitation quality and the need for repair.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:57:11.485515+00:00",
    "aiReviewedAt": "2026-07-22T04:57:11.485515+00:00",
    "aiReviewVersion": 1
  },
  "fake_luigi_vacuum_pollen_sucker": {
    "id": "fake_luigi_vacuum_pollen_sucker",
    "name": "Fake Luigi Vacuum Pollen Sucker",
    "description": "The Fake Luigi Vacuum Pollen Sucker is a peculiar contraption with a handle and a circular mouthpiece, crafted from mismatched vacuum hose and duct tape. It was made by Vacuum Fakes in the whimsical town of Wario Land, known for its oddball inventions. This device not only sucks up pollen to alleviate allergy symptoms but also inadvertently collects small dust bunnies, much to the chagrin of those trying to hold onto their belongings.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧹",
    "stock": 8,
    "rarity": "common",
    "effects": [
      "Pollinaria Purger",
      "Dust Bunny Dilemma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Suck Service Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pollinaria Purger",
        "rules": "As a bonus action, you can activate the Fake Luigi Vacuum Pollen Sucker to suck up pollen within 5 feet. You gain advantage on Constitution saving throws against poison from pollen for 1 hour. If you already have advantage from this effect, it does not stack but is replaced by any new source."
      },
      {
        "title": "Dust Bunny Dilemma",
        "rules": "When activated, the device also inadvertently creates a small dust bunny within reach that lasts until the start of your next turn. You take disadvantage on all Dexterity (Acrobatics) checks to hold onto small items during this time."
      }
    ],
    "levelRequirementReason": "This device is simple enough for any adventurer, requiring no particular skill or strength.",
    "vendorReason": "Wario Land is known for its eccentric and practical gadgets, making it the ideal vendor for this quirky invention.",
    "shippingDetail": "Ships via Suck Service Express within two business days of purchase. Delivery may cause a slight vacuum in your immediate area due to dust bunnies being transported.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous effect, but ongoing disadvantage on Dexterity checks until the start of your next turn.",
      "endsWhen": "After sucking up pollen or when the device is deactivated.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The device combines utility with a humorous twist, making it a fair value for its versatile and entertaining benefits.",
    "priceOriginal": 5000,
    "priceReviewedAt": "2026-07-22T04:56:50.670739+00:00",
    "aiReviewedAt": "2026-07-22T04:56:50.670739+00:00",
    "aiReviewVersion": 1
  },
  "fake_mario_block_pounder": {
    "id": "fake_mario_block_pounder",
    "name": "Fake Mario Block Pounder",
    "description": "The Fake Mario Block Pounder is a peculiar hammer crafted by Block Fakes, designed for the peculiar task of 'pounding' blocks (nails). This tool's forged heart glows faintly under stress, and it offers a +1 Strength bonus to any build attempts. However, using it during combat swings can be cumbersome, imposing disadvantage on attack rolls. Crafted with care from materials scavenged in the Wario Land mines, this hammer is a common find for those who need an edge in block-breaking tasks.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔨",
    "stock": 9,
    "rarity": "common",
    "effects": [
      "Pound nails",
      "Block breakers"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pound Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Pound nails",
        "rules": "When used to break blocks or nails, the wielder gains advantage on Strength (Athletics) checks. This effect is instantaneous and does not require an action."
      },
      {
        "title": "Block breakers",
        "rules": "The wielder receives a +1 bonus to Strength while using this hammer for block-breaking tasks. This benefit lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This tool is designed for those just starting their journey, offering a slight edge without requiring high-level expertise.",
    "vendorReason": "Wario Land's Block Fakes are known for crafting tools that assist in block-breaking tasks, and the Fake Mario Block Pounder is no exception.",
    "shippingDetail": "Shipped via Pound Post, delivery can take up to a week due to its weight and fragile nature.",
    "usage": {
      "activation": "Instantaneous use during block-breaking tasks.",
      "duration": "Until the start of your next turn for Block breakers; instantaneous for Pound nails.",
      "endsWhen": "The effect ends when the task is completed or a new attempt begins.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Balanced as an uncommon tool that aids in block-breaking tasks without overpowered effects, this hammer strikes a fair price point for its utility.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-22T04:56:54.352991+00:00",
    "aiReviewedAt": "2026-07-22T04:56:54.352991+00:00",
    "aiReviewVersion": 1
  },
  "fake_mario_buzzy_beetle_shell": {
    "id": "fake_mario_buzzy_beetle_shell",
    "name": "Fake Mario Buzzy Beetle Shell",
    "description": "The Fake Mario Buzzy Beetle Shell, crafted from lightweight, shimmering metallic beetle carapace, resembles a miniature fortress when worn. Its origin lies in the underbelly of Wario Land, where it was forged by Shell Scams for those seeking to mimic the invincibility of Mario's Buzzy Beetles. While not imbued with magic, this shell grants its wearer an added layer of protection and a distinct advantage in beetle-themed battles.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐢",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "+1 AC",
      "Beetle Fans +2"
    ],
    "vendor": "wario_land",
    "shippedBy": "Beetle Bounce Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Defense Boost",
        "rules": "When worn, the Fake Mario Buzzy Beetle Shell grants its wearer a +1 bonus to AC. This effect is passive and does not require activation."
      },
      {
        "title": "Beetle Fan Bonus",
        "rules": "While wearing this shell, you gain advantage on Dexterity (Stealth) checks when trying to mimic beetle movements or hide among beetles. This effect lasts until the end of your next long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who want a simple way to enhance their defense.",
    "vendorReason": "Wario Land specializes in humorous and quirky items, making this shell a natural fit for the vendor's inventory.",
    "shippingDetail": "Ships via Beetle Bounce within 3 days of purchase with a free delivery to your doorstep.",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or until the end of your next long rest.",
      "endsWhen": "When removed from wear or at the end of your next long rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price is balanced to reflect its uncommon rarity and utility, providing a good value for beginning adventurers.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T04:57:30.562680+00:00",
    "aiReviewedAt": "2026-07-22T04:57:30.562680+00:00",
    "aiReviewVersion": 1
  },
  "fake_mario_mushroom_cap": {
    "id": "fake_mario_mushroom_cap",
    "name": "Fake Mario Mushroom Cap",
    "description": "The Fake Mario Mushroom Cap is a red felt hat that bears an uncanny resemblance to Mario's iconic headgear, but its cheap construction is evident upon closer inspection. This hat bestows +1 to Charisma (Performance) when imitating plumber characters in a comedic or dramatic scene, but it also comes with a pesky itch that causes disadvantage on Concentration checks after just one hour of wear. Beware, for if the real Mario catches wind of this cap's existence, he might show up demanding its return, leading to an awkward and potentially humorous encounter.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍄",
    "stock": 15,
    "rarity": "common",
    "effects": [
      "Charisma (Performance) Boost",
      "Itchy Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Plumbers Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Charisma (Performance) Boost",
        "rules": "When worn, the cap grants a +1 bonus to Charisma (Performance) checks. This effect lasts until removed or until the wearer is no longer imitating a plumber character."
      },
      {
        "title": "Itchy Disadvantage",
        "rules": "After one hour of continuous wear, the cap causes disadvantage on all Concentration checks made by the wearer until it is removed. This itch may be temporarily alleviated with a successful DC 12 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The cap's effects are best suited for characters who need to quickly enhance their performance abilities without the complexity of higher-level magic.",
    "vendorReason": "Wario Land is known for its wide array of bootleg and knockoff items, making it a fitting vendor for this counterfeit cap.",
    "shippingDetail": "The hat may arrive in a small cardboard box with a note from Wario Land advising the recipient to 'enjoy your imitation!'",
    "usage": {
      "activation": "Worn as a headpiece, this cap provides its effects instantly upon donning.",
      "duration": "Until removed or until no longer imitating a plumber character.",
      "endsWhen": "The hat can be removed by the wearer at any time.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "Considering its limited magical properties and humorous appeal, this cap is priced reasonably as a common item that offers both a practical and entertaining advantage to players.",
    "priceOriginal": 4800,
    "priceReviewedAt": "2026-07-22T04:57:22.237329+00:00",
    "aiReviewedAt": "2026-07-22T04:57:22.237329+00:00",
    "aiReviewVersion": 1
  },
  "fake_mario_pipe_warp_key": {
    "id": "fake_mario_pipe_warp_key",
    "name": "Fake Mario Pipe Warp Key",
    "description": "The Fake Mario Pipe Warp Key is a tarnished iron key that looks like it has seen better days, its surface pitted and flaking from years of rust. Crafted by the nefarious Pipe Fakes in their underground workshops, this key can be used to open fake warp pipes, plunging you into a whirlpool of water. The key's origin is murky at best, but those who have purchased it claim it grants them an advantage on checks related to plumbing and a +1 bonus to Craft (plumbing) skills.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Advantage on Plumbing Checks",
      "Rusty Key"
    ],
    "vendor": "wario_land",
    "shippedBy": "Warp Water Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Advantage on Plumbing Checks",
        "rules": "When using this key to open fake warp pipes, the user gains advantage on any check related to plumbing. This effect lasts until the end of their next turn."
      },
      {
        "title": "Rusty Key",
        "rules": "If the key comes into contact with water or wet surfaces, the user suffers a -2 penalty on all rolls for 1 hour. The key can be cleaned and returned to its original state at the cost of 50 XP."
      }
    ],
    "levelRequirementReason": "This item is intended for beginners who may need assistance with basic plumbing tasks.",
    "vendorReason": "Wario Land stocks a variety of items that can be used to outsmart and outplay Mario, including this counterfeit key.",
    "shippingDetail": "Ships via Warp Water Express within the next full moon cycle.",
    "usage": {
      "activation": "Used as an action when attempting to open a fake warp pipe.",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends at the end of your next turn or if the key comes into contact with water.",
      "charges": "Unlimited, but cleaning it requires 50 XP."
    },
    "priceReason": "This item is priced lower than a common key to reflect its counterfeit nature and limited utility in genuine plumbing tasks.",
    "priceOriginal": 4700,
    "priceReviewedAt": "2026-07-22T04:57:39.219368+00:00",
    "aiReviewedAt": "2026-07-22T04:57:39.219368+00:00",
    "aiReviewVersion": 1
  },
  "fake_mario_starman_cape": {
    "id": "fake_mario_starman_cape",
    "name": "Fake Mario Starman Cape",
    "description": "The Fake Mario Starman Cape, a tattered relic of questionable origin, once belonged to the mischievous Starman. Crafted from fabric that seems to fray under intense light, this cape bestows temporary invincibility by reflecting harmful beams away. Its iconic design and star-shaped emblems make it recognizable even in the dimmest corners. However, flying under its protection is perilous; the cape's frayed edges hinder your flight attempts, forcing you to rely on other means of mobility.",
    "category": "equipment",
    "price": 1000,
    "icon": "⭐",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Reflective Shield",
      "Flight Hindrance"
    ],
    "vendor": "wario_land",
    "shippedBy": "Invincible Invoice",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reflective Shield",
        "rules": "As an action, the wearer can activate the cape's reflector properties. This grants advantage on saving throws against being blinded by light-based attacks or effects for a duration of 1 minute per use. The effect ends if you are subjected to another blinding condition."
      },
      {
        "title": "Flight Hindrance",
        "rules": "The cape causes disadvantage on any ability check or saving throw involving flight, as the fabric frays and interferes with your movements during such attempts. This effect persists until the end of your next short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to help them overcome early challenges without needing a high level.",
    "vendorReason": "Wario Land, known for his cunning and knack for acquiring unique goods, has found this relic and decided to sell it as an affordable option for those starting their journey in the world of adventure.",
    "shippingDetail": "The item is carefully packed with a special blinding shield to ensure it arrives intact, though the shipping duration may vary given its fragile nature.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute per use",
      "endsWhen": "Subjected to another blinding effect or condition",
      "charges": "Unlimited"
    },
    "priceReason": "The balance is justified by the item's limited but useful abilities, making it a fair price for beginners.",
    "priceOriginal": 5400,
    "priceReviewedAt": "2026-07-22T04:57:50.118470+00:00",
    "aiReviewedAt": "2026-07-22T04:57:50.118470+00:00",
    "aiReviewVersion": 1
  },
  "fake_mario_tanooki_tail": {
    "id": "fake_mario_tanooki_tail",
    "name": "Fake Mario Tanooki Tail",
    "description": "The Fake Mario Tanooki Tail is a meticulously crafted replica of the legendary tail that grants its wielder raccoon abilities. Its glossy black exterior and subtle red accents make it appear authentic, but a close inspection reveals the craftsmanship's imperfections. This tail provides +5 feet of gliding distance and imposes disadvantage on turns while granting an additional +1 to Acrobatics checks. It was made by Tail Tricks, known for their knockoff gear that is just as functional as the real thing.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦝",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Tail Spin",
      "Turn Disadvantage"
    ],
    "vendor": "wario_land",
    "shippedBy": "Raccoon Run Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Tail Spin",
        "rules": "As a bonus action, the wielder can use the tail to glide up to +5 feet. This effect lasts until the end of their next turn."
      },
      {
        "title": "Turn Disadvantage",
        "rules": "While wielding this tail, the wielder has disadvantage on Dexterity (Acrobatics) checks and saving throws that involve turning or twisting movements."
      }
    ],
    "levelRequirementReason": "The item's effects are simple and do not require high-level character capabilities.",
    "vendorReason": "Wario Land is known for selling knockoffs that are just as useful, if not identical to the original items used by Mario and his friends.",
    "shippingDetail": "Ships via Raccoon Run Express with a standard delivery time of three days.",
    "usage": {
      "activation": "Bonus action for Tail Spin, passive effect while wielding the tail.",
      "duration": "Tail Spin lasts until the end of the wielder's next turn. The disadvantage on turns is always active as long as the tail is equipped.",
      "endsWhen": "The effect ends when the tail is no longer being used or if the wielder drops it.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The price reflects a balance between its minor utility and the convenience of having an authentic-looking raccoon tail replica.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-22T04:57:38.058532+00:00",
    "aiReviewedAt": "2026-07-22T04:57:38.058532+00:00",
    "aiReviewVersion": 1
  },
  "fake_mustache": {
    "id": "fake_mustache",
    "name": "Fake Mustache",
    "description": "A clip-on mustache crafted from gleaming metal and hand-painted enamel, each curl meticulously designed to enhance your visage. This mustache can be worn at any angle, turning you into a dashing hero or an intimidating villain. It's said that the mustache was forged in the heart of the Volcanic Forge, where it absorbed the essence of the lava and metal used in its creation. The vendor, Toad Town Market, ensures that each mustache is imbued with subtle magic that enhances your performance in social situations.",
    "category": "equipment",
    "price": 1000,
    "icon": "〰️",
    "stock": 200,
    "rarity": "common",
    "effects": [
      "+1 to Deception checks",
      "Falls off on damage"
    ],
    "vendor": "toad_town_market",
    "shippedBy": "Standard Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Social Aura",
        "rules": "While wearing the Fake Mustache, you gain a +1 bonus to all Deception and Persuasion checks. This effect is instantaneous upon putting it on and lasts until removed or until your mustache falls off."
      },
      {
        "title": "Vulnerable in Combat",
        "rules": "If you take any damage while wearing the Fake Mustache, it immediately falls off. Once removed, the mustache cannot be worn again until after a short or long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who want to enhance their social skills without requiring extensive character development.",
    "vendorReason": "Toad Town Market specializes in quirky and magical accessories that can be found in the bustling markets of the town, making it a perfect place for such an item.",
    "shippingDetail": "Ships within one week from Toad Town. Standard Couriers are known for their reliability, ensuring your mustache arrives in pristine condition.",
    "usage": {
      "activation": "Wearing the Fake Mustache is a free action that you can take on your turn.",
      "duration": "Instantaneous effect; lasts until removed or falls off due to damage.",
      "endsWhen": "The effect ends when the mustache is removed or falls off due to taking damage. It cannot be worn again without a rest.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The item's unique design, magical properties, and vendor reputation justify its price of 1000 XP.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T04:58:10.669498+00:00",
    "aiReviewedAt": "2026-07-22T04:58:10.669498+00:00",
    "aiReviewVersion": 1
  },
  "fake_mustaches_to_impersonate_wario": {
    "id": "fake_mustaches_to_impersonate_wario",
    "name": "Wario's Mustache Disguise Kit (Gimmick Fun!)",
    "description": "The Wario's Mustache Disguise Kit (Gimmick Fun!) is a meticulously crafted kit of fake mustaches, complete with a special adhesive that ensures it stays in place for an hour. Created by Wario's Costume Closet, this kit includes a pair of intricately designed mustaches that allow you to impersonate the greedy villain with ease. The kit also comes with a secret ingredient: when you twirl the mustache, your Charisma (Performance) score is temporarily boosted by +1, making you the center of attention in any dramatic scene.",
    "category": "equipment",
    "price": 1000,
    "icon": "😵",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Mustache Adhesive",
      "Charisma Boost"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wacky Wig Wagon",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mustache Adhesive",
        "rules": "Apply the mustache as a bonus action. It lasts for 1 hour, but wearing it grants you disadvantage on Concentration checks due to constant itching."
      },
      {
        "title": "Charisma Boost",
        "rules": "Twirl the mustache once as an action to gain +1 to your Charisma (Performance) score until the start of your next turn. You can use this feature a number of times equal to your Wisdom modifier (minimum of 1)."
      }
    ],
    "levelRequirementReason": "This kit is designed for beginners and those who need an easy disguise, making it accessible from level 1.",
    "vendorReason": "Wario's Costume Closet specializes in disguises and mustaches, so they are the perfect vendor for this item.",
    "shippingDetail": "Delivered by the ever-reliable Wacky Wig Wagon, known for its quirky deliveries and timely service.",
    "usage": {
      "activation": "Bonus action to apply and use mustache; action to twirl it for Charisma boost",
      "duration": "Mustache lasts for 1 hour; Charisma boost is temporary",
      "endsWhen": "Adhesive wears off after an hour or if removed; Charisma boost ends at the start of your next turn",
      "charges": "Unlimited, but must wait until the end of your next turn to use it again"
    },
    "priceReason": "The kit is priced reasonably for its level, providing a fun and versatile disguise option without breaking the bank.",
    "priceOriginal": 8500,
    "priceReviewedAt": "2026-07-22T04:57:54.262829+00:00",
    "aiReviewedAt": "2026-07-22T04:57:54.262829+00:00",
    "aiReviewVersion": 1
  },
  "fake_peach_pound_cake_mold": {
    "id": "fake_peach_pound_cake_mold",
    "name": "Fake Peach Pound Cake Mold",
    "description": "The Fake Peach Pound Cake Mold is a meticulously crafted tin mold shaped like a ripe peach. Its surface glistens with a sheen of butter and flour, perfectly preserving the shape of a classic pound cake. Crafted by Cake Copies from a secret recipe passed down through generations, this mold bestows a +1 bonus to baking checks when used for peach-flavored cakes, but its use requires an extra minute of labor due to its intricate design.",
    "category": "equipment",
    "price": 1000,
    "icon": "🍰",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Mold cakes: +1 bake checks",
      "Peach flavor: +1 Charisma"
    ],
    "vendor": "wario_land",
    "shippedBy": "Pound Post",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Mold Cakes",
        "rules": "When you prepare a peach-flavored cake using this mold, you gain a +1 bonus to your baking check. This effect ends when the cake is successfully baked."
      },
      {
        "title": "Peach Flavor",
        "rules": "For 1 hour after using this mold, any character interacting with or tasting the resulting cake gains advantage on Charisma checks and saving throws. This effect can only be used once per day."
      }
    ],
    "levelRequirementReason": "This simple yet elegant mold is accessible to beginners in baking who want to improve their skills without requiring a high level of expertise.",
    "vendorReason": "Wario Land, known for its quirky and diverse selection of kitchenware, naturally includes this unique baking tool among its offerings.",
    "shippingDetail": "Ships via Pound Post with expedited delivery to ensure your Fake Peach Pound Cake Mold arrives in perfect condition.",
    "usage": {
      "activation": "Use as an action when preparing a peach-flavored cake.",
      "duration": "Instantaneous effect, lasting for the duration of baking and tasting the cake.",
      "endsWhen": "The effect ends when the cake is successfully baked or once the hour-long flavor bonus expires.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "This mold's unique design, craftsmanship, and rarity justify its fair value of 1000 XP in the market.",
    "priceOriginal": 5300,
    "priceReviewedAt": "2026-07-22T04:58:42.839916+00:00",
    "aiReviewedAt": "2026-07-22T04:58:42.839916+00:00",
    "aiReviewVersion": 1
  },
  "fake_peach_umbrella_parasol": {
    "id": "fake_peach_umbrella_parasol",
    "name": "Fake Peach Umbrella Parasol",
    "description": "The Fake Peach Umbrella Parasol is a whimsical yet practical accessory made from colorful plastic and paper. Originally crafted by Parasol Fakes, it mimics the iconic style of Princess Peach's parasols. This charming parasol provides shade to ward off the sun’s rays and offers a playful poke that can be used in improvised combat. It also enhances one's charisma when dealing with royalty or princesses, making it a delightful trinket for any adventurer seeking both practicality and flair.",
    "category": "equipment",
    "price": 1000,
    "icon": "☔",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Sunshade",
      "Princess Charm"
    ],
    "vendor": "wario_land",
    "shippedBy": "Sunny Shield Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Sunshade",
        "rules": "When activated as an action, the parasol provides shade, granting advantage on saving throws against heat-related effects until the start of your next turn. This effect can be used once per short or long rest."
      },
      {
        "title": "Princess Charm",
        "rules": "At the start of any interaction with a princess or noblewoman, you gain +1 to Charisma (Personality) checks for 1 hour. You must finish a long rest before using this effect again."
      }
    ],
    "levelRequirementReason": "This parasol is designed for beginners and adventurers of all levels who appreciate its practical and charming features.",
    "vendorReason": "Wario Land carries a wide range of quirky and useful items, making the Fake Peach Umbrella Parasol a perfect fit for his inventory.",
    "shippingDetail": "Ships within three days with guaranteed delivery.",
    "usage": {
      "activation": "Action",
      "duration": "Until start of next turn (Sunshade); 1 hour (Princess Charm)",
      "endsWhen": "Ends upon resting or until a new use is activated.",
      "charges": "Unlimited, but only one effect can be active at a time."
    },
    "priceReason": "The price reflects the item's combination of practical and thematic value, providing both utility and charm without being overly powerful or expensive for its rarity.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T04:58:04.260504+00:00",
    "aiReviewedAt": "2026-07-22T04:58:04.260504+00:00",
    "aiReviewVersion": 1
  },
  "fake_pikachu_ear_hat": {
    "id": "fake_pikachu_ear_hat",
    "name": "Fake Pikachu Ear Hat",
    "description": "The Fake Pikachu Ear Hat, crafted by Poke-Knockoffs, is a whimsical yet functional accessory that promises to electrify your day. Its soft, plush exterior conceals a shocking secret—when touched, it delivers an unexpected static shock with surprising force, leaving you and your foes taken aback. For those with a heart for electric creatures, it grants a +1 bonus to Animal Handling checks involving Pikachu-like creatures, making trainers more effective in their endeavors.",
    "category": "equipment",
    "price": 1000,
    "icon": "🐭",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Static Shock",
      "Animal Trainer's Edge"
    ],
    "vendor": "wario_land",
    "shippedBy": "Thunder Tail Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Static Shock",
        "rules": "When another creature touches the wearer, they must succeed on a DC 12 Dexterity saving throw or take 1d6 lightning damage. This effect is limited to once per short rest."
      },
      {
        "title": "Animal Trainer's Edge",
        "rules": "The wearer gains advantage on Animal Handling checks when interacting with Pikachu-like creatures, and this benefit lasts until the end of their next long rest."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners to introduce them to basic magical interactions.",
    "vendorReason": "Wario Land's merchandise often blurs reality, making the Fake Pikachu Ear Hat a natural addition to their line of quirky accessories.",
    "shippingDetail": "Ships within one game day, delivered by a thunderbolt for dramatic flair.",
    "usage": {
      "activation": "Instantaneous contact with another creature upon being touched.",
      "duration": "Until the end of the touching creature's next turn or until they make a saving throw.",
      "endsWhen": "The touched creature successfully saves against the static shock.",
      "charges": "Unlimited, but only usable once per short rest."
    },
    "priceReason": "Balanced at 1000 XP to ensure it's a rewarding yet affordable purchase for new adventurers.",
    "priceOriginal": 4500,
    "priceReviewedAt": "2026-07-22T04:58:19.568112+00:00",
    "aiReviewedAt": "2026-07-22T04:58:19.568112+00:00",
    "aiReviewVersion": 1
  },
  "fake_toad_house_key": {
    "id": "fake_toad_house_key",
    "name": "Fake Toad House Key",
    "description": "The Fake Toad House Key is a plastic trinket embossed with a whimsical toad design. It mimics the magic of genuine keys, but only works on doors that belong to Toad Houses—otherwise, it bends and snaps harmlessly. Wario_land's Bootleg Keysmiths crafted this key, known for their amusing yet unreliable wares. When used, it grants advantage in Persuasion attempts with Toads, who believe the key is a charming artifact from their world.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔑",
    "stock": 13,
    "rarity": "common",
    "effects": [
      "Toad Charm",
      "Bend or Break"
    ],
    "vendor": "wario_land",
    "shippedBy": "Mushroom Mail",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toad Charm",
        "rules": "When used on doors of Toad Houses, it grants advantage on Persuasion checks with nearby Toads. This effect lasts until the end of your next turn."
      },
      {
        "title": "Bend or Break",
        "rules": "There is a 50% chance that the key will unlock the door correctly and function as intended; otherwise, it bends and becomes unusable after three unsuccessful attempts."
      }
    ],
    "levelRequirementReason": "This item is designed for beginners who might need to navigate Toad Houses during early adventures.",
    "vendorReason": "Wario_land sells this key as a quirky, if unreliable, tool for aspiring heroes looking to charm and explore Toad territory.",
    "shippingDetail": "Standard delivery via Mushroom Mail; arrival is usually within the week.",
    "usage": {
      "activation": "As an action",
      "duration": "Until the end of your next turn",
      "endsWhen": "The effect ends when you use it on another door or at the end of your next turn",
      "charges": "Unlimited uses, but bends after three unsuccessful attempts"
    },
    "priceReason": "Balanced to reflect its limited functionality and charm appeal for beginner adventurers.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-22T04:58:17.622257+00:00",
    "aiReviewedAt": "2026-07-22T04:58:17.622257+00:00",
    "aiReviewVersion": 1
  },
  "fake_toad_pipe_smoke": {
    "id": "fake_toad_pipe_smoke",
    "name": "Fake Toad Pipe Smoke",
    "description": "The Fake Toad Pipe Smoke is a mischievous contraption crafted by the notorious Pipe Fakes. When puffed, it emits swirling smoke rings that warp and twist in mid-air, creating minor illusions of toads that dance around you. The toads are harmless but distracting, making them useful for stealth or amusing friends. However, the smoke itself is a bit harsh; it can cause coughing fits that disadvantage your next breath attack.",
    "category": "equipment",
    "price": 1000,
    "icon": "🚬",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Warping Smoke Rings",
      "Coughing Hazard"
    ],
    "vendor": "wario_land",
    "shippedBy": "Toadstool Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Warping Smoke Rings",
        "rules": "When activated as a bonus action, the user creates a series of smoke rings that form minor illusions of toads. These illusions last for 1 minute and have a range of 30 feet. Targets must succeed on a DC 12 Wisdom saving throw or become distracted by the toad illusions for 1 round."
      },
      {
        "title": "Coughing Hazard",
        "rules": "As an immediate reaction, any creature that breathes in the smoke has disadvantage on their next breath attack or saving throw. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "This item is designed for players who are just starting out to enjoy its whimsical effects without requiring a high-leveled character.",
    "vendorReason": "Wario Land, known for his mischievous and quirky items, sells this pipe smoke as part of his extensive collection of practical jokes and gadgets.",
    "shippingDetail": "The package is delivered by Toadstool Express, which may occasionally deliver the item in a more elaborate toad-themed box than expected.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "Instantaneous; illusions last for 1 minute",
      "endsWhen": "The effects end when you use an action or reaction to dismiss them, or after 1 minute if not dismissed",
      "charges": "Unlimited"
    },
    "priceReason": "At 1000 XP, the Fake Toad Pipe Smoke offers players a fun and affordable way to engage in light-hearted mischief without breaking the bank.",
    "priceOriginal": 4600,
    "priceReviewedAt": "2026-07-22T04:58:26.492479+00:00",
    "aiReviewedAt": "2026-07-22T04:58:26.492479+00:00",
    "aiReviewVersion": 1
  },
  "fake_yoshi_dino_tail": {
    "id": "fake_yoshi_dino_tail",
    "name": "Fake Yoshi Dino Tail",
    "description": "The Fake Yoshi Dino Tail is a meticulously crafted replica of the legendary Yoshi's tail. Crafted from lightweight yet durable plastic, this toy tail mimics the real thing with vibrant colors and intricate details. It comes with a set of rubbery spikes that provide a satisfying whip action when flicked. The tail has a unique design that allows it to make a distinct 'crack' sound upon use, perfect for adding flair to any performance or battle.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦕",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Whip Strike",
      "Tail Drag"
    ],
    "vendor": "wario_land",
    "shippedBy": "Tail Trot Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Whip Strike",
        "rules": "As a bonus action, the wielder can flick the tail like a whip. The target must make a Dexterity saving throw (DC 12) or be hit by the tail for 1d4 slashing damage and become disoriented until the start of their next turn."
      },
      {
        "title": "Tail Drag",
        "rules": "When the wielder drags the tail behind them, they have disadvantage on Dexterity (Stealth) checks to remain quiet. Additionally, any noise made by dragging the tail counts as a sound made by the user for the purpose of spells and effects."
      }
    ],
    "levelRequirementReason": "This toy is designed for beginners or those who wish to practice their combat moves without the need for higher-level abilities.",
    "vendorReason": "Wario's Land specializes in unique and whimsical items that cater to adventurers of all skill levels, making it a perfect fit for this playful toy.",
    "shippingDetail": "Delivered by Tail Trot Express, known for their reliable and speedy deliveries across the land.",
    "usage": {
      "activation": "Bonus action (Whip Strike), Instantaneous (Tail Drag)",
      "duration": "Until end of turn (Whip Strike), Until the start of your next turn (Tail Drag)",
      "endsWhen": "Onset of a new turn",
      "charges": "Unlimited"
    },
    "priceReason": "The toy's quality craftsmanship and unique features justify its fair value in XP.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-22T04:58:32.849284+00:00",
    "aiReviewedAt": "2026-07-22T04:58:32.849284+00:00",
    "aiReviewVersion": 1
  },
  "fake_yoshi_egg_carton": {
    "id": "fake_yoshi_egg_carton",
    "name": "Fake Yoshi Egg Carton",
    "description": "This carton, crafted from lightweight foam and adorned with a Yoshi egg icon, is designed to protect fragile eggs during transport. It offers travelers a sense of security, providing advantage on checks to handle eggs carefully but imposing disadvantage if used as a stackable item. The 'Made by: Egg Fakes' label hints at its origins, though it's no ordinary carton—it holds the promise of a safer journey for precious cargo.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥚",
    "stock": 12,
    "rarity": "common",
    "effects": [
      "Safe egg carry",
      "Yoshi: +1 Handling eggs"
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg Easy Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Safe egg carry",
        "rules": "When used to transport fragile items, this carton provides advantage on checks related to handling the items carefully. This effect lasts until the end of your next turn after placing the carton in use."
      },
      {
        "title": "Yoshi: +1 Handling eggs",
        "rules": "This carton grants a +1 bonus when used to handle eggs, whether for carrying or protecting them during transport. The effect persists as long as the carton is in use and ends if you abandon it or switch to another method of handling."
      }
    ],
    "levelRequirementReason": "This item's simplicity allows it to be used by characters of any level, offering a straightforward utility for travelers.",
    "vendorReason": "Wario Land is known for its quirky inventions and items that cater to the needs of adventurers, making this carton an easy addition to his inventory.",
    "shippingDetail": "Delivered with Egg Easy Express, ensuring safe and swift transport from Wario Land's warehouse.",
    "usage": {
      "activation": "Use as a bonus action when starting the journey or handling eggs.",
      "duration": "Until the end of your next turn after placement in use.",
      "endsWhen": "If abandoned or switched to another method during transport.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects its common rarity and straightforward utility, making it accessible yet valuable for adventurers.",
    "priceOriginal": 4400,
    "priceReviewedAt": "2026-07-22T04:58:46.786765+00:00",
    "aiReviewedAt": "2026-07-22T04:58:46.786765+00:00",
    "aiReviewVersion": 1
  },
  "fake_yoshi_egg_whistle": {
    "id": "fake_yoshi_egg_whistle",
    "name": "Fake Yoshi Egg Whistle",
    "description": "This tiny, polished whistle mimics a Yoshi egg's sound with uncanny precision. When blown as a bonus action, it summons an illusory Yoshi that dances and chirps for one round, distracting any nearby foes (DC 13 Wisdom saving throw). The whistle's shrill tone also penalizes you on Stealth checks for the next minute. Real Yoshis are quick to join in the fun, granting advantage on Animal Handling checks with them.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥚",
    "stock": 9,
    "rarity": "uncommon",
    "effects": [
      "Summons Illusory Yoshi",
      "Stealth Penalty"
    ],
    "vendor": "wario_land",
    "shippedBy": "Egg-Spress",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summons Illusory Yoshi",
        "rules": "When blown as a bonus action within sight of foes, the whistle summons an illusory Yoshi that dances and chirps for one round. This creates distraction (DC 13 Wisdom saving throw). The effect ends if a creature successfully saves or the summoner takes any other action."
      },
      {
        "title": "Stealth Penalty",
        "rules": "After using the whistle, you have disadvantage on Stealth checks until the end of your next short or long rest. This penalty is applied to all Stealth checks made by you during this period."
      }
    ],
    "levelRequirementReason": "The whistle's simple mechanics and visual effects are accessible to low-level characters.",
    "vendorReason": "Wario Land is known for selling quirky, often mischievous items that can be used in various pranks or distractions.",
    "shippingDetail": "Ships within a week of order placement with a special Egg-Spress delivery slip included.",
    "usage": {
      "activation": "Bonus action to summon an illusory Yoshi, and the whistle remains usable indefinitely without recharging.",
      "duration": "One round for the illusory Yoshi's performance; Stealth penalty lasts until your next rest.",
      "endsWhen": "The illusion ends if a creature saves successfully or when the user performs another action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced as it offers fun, thematic use without breaking game balance.",
    "priceOriginal": 5100,
    "priceReviewedAt": "2026-07-22T04:58:40.900961+00:00",
    "aiReviewedAt": "2026-07-22T04:58:40.900961+00:00",
    "aiReviewVersion": 1
  },
  "fake_yoshi_fruit_basket": {
    "id": "fake_yoshi_fruit_basket",
    "name": "Fake Yoshi Fruit Basket",
    "description": "The Fake Yoshi Fruit Basket is a woven basket that magically appears to contain fruit, though it only holds air. Crafted by the unscrupulous Basket Bootlegs in their dimly lit workshops, this basket seems full of delicious, ripe fruit when inspected. However, any attempt to reach inside reveals only empty space and a 10% chance of dropping a piece of fruit that is actually just a crumpled leaf or a pebble.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧺",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Holds Illusory Fruit",
      "Fruit Drop Risk"
    ],
    "vendor": "wario_land",
    "shippedBy": "Fruit Ferry",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Holds Illusory Fruit",
        "rules": "The basket appears to contain 10 pieces of fruit. When a character reaches inside, they must succeed on a DC 12 Wisdom (Perception) check or mistake the contents for real food. Successfully identifying the illusion grants advantage on the next saving throw made against hunger-related effects."
      },
      {
        "title": "Fruit Drop Risk",
        "rules": "If used in an area with loose items, there is a 10% chance that any fruit inside the basket will fall out and be replaced by a non-edible object such as a pebble or crumpled leaf. This effect has no save."
      }
    ],
    "levelRequirementReason": "This item requires no specific level to use, but is intended for lower-level characters to appreciate its whimsical nature.",
    "vendorReason": "Wario Land's collection of oddities and curiosities includes this basket as a nod to his own questionable taste in collectibles.",
    "shippingDetail": "Ships with the Fruit Ferry, which can sometimes deliver the basket too late for optimal use due to its unpredictable routes.",
    "usage": {
      "activation": "Passive effect when reaching into the basket",
      "duration": "Instantaneous",
      "endsWhen": "When fruit is removed or the illusion is dispelled",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's uncommon rarity and its limited practical use, making it a fun but not overpowered addition to any adventurer's collection.",
    "priceOriginal": 5200,
    "priceReviewedAt": "2026-07-22T04:58:49.362423+00:00",
    "aiReviewedAt": "2026-07-22T04:58:49.362423+00:00",
    "aiReviewVersion": 1
  },
  "fake_zelda_triforce_earrings": {
    "id": "fake_zelda_triforce_earrings",
    "name": "Fake Zelda Triforce Earrings",
    "description": "The Fake Zelda Triforce Earrings are crafted from tarnished gold and shaped to mimic the iconic Triforce symbol. These earring pieces 'balance' your wisdom, granting a +1 bonus on Wisdom saving throws, but they also tangle your hair so severely that you suffer disadvantage on appearance checks. While the earring's wearer gains royal favor when interacting with Hyrule citizens, their hair becomes a constant reminder of their counterfeit status.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔺",
    "stock": 10,
    "rarity": "common",
    "effects": [
      "Wisdom Balance",
      "Tangled Hair"
    ],
    "vendor": "wario_land",
    "shippedBy": "Wisdom Whisper",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Wisdom Balance",
        "rules": "When worn, the Fake Zelda Triforce Earrings grant a +1 bonus on Wisdom saving throws. This effect is passive and does not require activation."
      },
      {
        "title": "Tangled Hair",
        "rules": "The earring's design causes your hair to tangle, granting disadvantage on appearance checks. This effect persists until the end of each day unless you take a full-rest to tend to your hair."
      }
    ],
    "levelRequirementReason": "These earrings are accessible to beginners as they can be worn by players at any level without requiring extensive skills.",
    "vendorReason": "Wario Land is known for selling knockoff and humorous items, making the Fake Zelda Triforce Earrings a fitting addition to his inventory.",
    "shippingDetail": "The earrings are sent via Wisdom Whisper, ensuring they arrive in perfect condition with a special delivery note that reads 'May your hair remain untangled until you can afford the real thing.'",
    "usage": {
      "activation": "Passive effect; no activation required.",
      "duration": "Until removed or end of each day (hair tangles).",
      "endsWhen": "Earrings are removed or wearer takes a full-rest to tend to their hair.",
      "charges": "Unlimited, but must be tended to daily."
    },
    "priceReason": "The price reflects the quality of materials and the humorous nature of the item, making it accessible yet not trivial.",
    "priceOriginal": 4900,
    "priceReviewedAt": "2026-07-22T04:59:19.531477+00:00",
    "aiReviewedAt": "2026-07-22T04:59:19.531477+00:00",
    "aiReviewVersion": 1
  },
  "fallout_pipboy": {
    "id": "fallout_pipboy",
    "name": "Pip-Boy Device",
    "description": "The Pip-Boy Device is a rugged wrist-mounted console, its casing a weathered amalgam of metal and plastic. Designed for survivalists and wanderers, it maps out your surroundings in vivid detail and detects both radiation spikes and poison clouds with uncanny precision. The Pip-Boy's V.A.T.S. system grants you an extra chance to hit with a ranged weapon once per combat, enhancing your accuracy in critical moments.",
    "category": "equipment",
    "price": 1000,
    "icon": "⌚",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Radiation Detector",
      "V.A.T.S. Aim Assist"
    ],
    "vendor": "wario_direct",
    "shippedBy": "Tech Wristband Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiation Detector",
        "rules": "At the start of each round, you can use a bonus action to activate the Pip-Boy's radiation detector. If it detects high levels of radiation within 30 feet, you gain advantage on saving throws against that radiation until the end of your next turn."
      },
      {
        "title": "V.A.T.S. Aim Assist",
        "rules": "Once per combat, as a reaction to making an attack with a ranged weapon, you can reroll one roll of the attack die. You must use the second result."
      }
    ],
    "levelRequirementReason": "This device is designed for beginners and seasoned adventurers alike, requiring only basic proficiency to operate.",
    "vendorReason": "Wario Direct specializes in technology that empowers the common folk with advanced capabilities.",
    "shippingDetail": "Delivered within three days of purchase, directly from the nearest Tech Wristband facility.",
    "usage": {
      "activation": "Bonus action to activate radiation detector; reaction for V.A.T.S. Aim Assist",
      "duration": "One round for each activation; ends when the device is turned off or recharged",
      "endsWhen": "Turned off manually, recharging cycle begins, or after one use per combat",
      "charges": "Unlimited uses between charges"
    },
    "priceReason": "Balanced at this price point to reflect its utility without overshadowing more powerful items.",
    "priceOriginal": 20000,
    "priceReviewedAt": "2026-07-22T04:59:24.016191+00:00",
    "aiReviewedAt": "2026-07-22T04:59:24.016191+00:00",
    "aiReviewVersion": 1
  },
  "familiar_soul_jar": {
    "id": "familiar_soul_jar",
    "name": "Familiar Soul Jar",
    "description": "The Familiar Soul Jar holds the ethereal essence of a lost familiar, its glass vial shimmering with an otherworldly light that seems to pulse with residual memories. The jar's lid bears the mark of a shamanic ritual, and it whispers faintly as if still connected to the soul within. Summoned, the ghostly form appears in place, ready to deliver messages or scout unseen, retaining every detail of its former life.",
    "category": "curiosities",
    "price": 1000,
    "icon": "👻",
    "stock": 10,
    "rarity": "rare",
    "effects": [
      "Summon Familiar",
      "Retained Knowledge"
    ],
    "vendor": "shamans_hut",
    "shippedBy": "Ceramic Jar Courier",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Summon Familiar",
        "rules": "As an action, you can open the jar and summon a ghostly familiar (CR 0). The familiar remains for one hour per day of use. It appears in your space or within 5 feet thereof, ready to deliver messages, scout unseen, or carry small items. The familiar cannot be destroyed; it will return to the jar when dismissed."
      },
      {
        "title": "Retained Knowledge",
        "rules": "The ghostly familiar remembers everything it knew during its lifetime as your familiar. It can provide information about events and locations known to it, but only once per day. The familiar cannot be commanded to lie or deliberately mislead you."
      }
    ],
    "levelRequirementReason": "This item is suitable for a first-level spellcaster who wishes to maintain the connection with their lost companion.",
    "vendorReason": "The shamans at Shamans' Hut often deal in such mystical relics, preserving the spirits of those who have passed on.",
    "shippingDetail": "Delivered swiftly by a courier known for its reliable service, ensuring the jar arrives intact and ready to be opened.",
    "usage": {
      "activation": "Action",
      "duration": "One hour per day of use",
      "endsWhen": "Dismissed or when time expires",
      "charges": "Unlimited"
    },
    "priceReason": "The price reflects the item's rarity and the mystical energy bound within, making it a significant investment for spellcasters.",
    "priceOriginal": 15000,
    "priceReviewedAt": "2026-07-22T04:59:11.461118+00:00",
    "aiReviewedAt": "2026-07-22T04:59:11.461118+00:00",
    "aiReviewVersion": 1
  },
  "farasi_zebra_grass_salad_recipe": {
    "id": "farasi_zebra_grass_salad_recipe",
    "name": "Recipe: Farasi Zebra Grass Salad",
    "description": "The Recipe: Farasi Zebra Grass Salad yields a fresh, vibrant salad of savanna grasses and herbs, perfect for those who need to move swiftly across open terrain. Prepared under the watchful eyes of zebras, this dish grants you an extra burst of speed in wide-open spaces, allowing you to gallop with the grace of your equine mentors. Eat it on a sunny afternoon, and within minutes, you'll feel the savanna's rhythm coursing through your veins.",
    "price": 1000,
    "icon": "🥗",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Toss Greens",
      "Run Like the Wind"
    ],
    "vendor": "farasi_savanna",
    "shippedBy": "Green Graze Guide",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Toss Greens",
        "rules": "As an action, prepare and toss a portion of the salad. After 10 minutes, you gain +15 feet speed in open areas for 2 hours or until you enter dense cover."
      },
      {
        "title": "Run Like the Wind",
        "rules": "While your speed is increased by this effect, you have advantage on Dexterity (Acrobatics) checks and saving throws made to avoid falling prone. This effect does not stack with other sources of speed bonuses."
      }
    ],
    "levelRequirementReason": "This recipe can be learned at a young age by savanna dwellers, making it accessible to all adventurers starting their journey.",
    "vendorReason": "Farasi Herders are skilled in the art of preparing meals that not only satisfy but also enhance one's abilities in open terrain.",
    "shippingDetail": "Delivered by zebras, this recipe is usually fresh and arrives within a day.",
    "usage": {
      "activation": "As an action to prepare the salad.",
      "duration": "2 hours or until you enter dense cover.",
      "endsWhen": "Entering dense cover or expending all charges if used multiple times.",
      "charges": "Unlimited, as long as the recipe is prepared."
    },
    "priceReason": "The rare ingredients and preparation time required for this unique dish justify its modest price in experienced hands.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T04:59:14.577279+00:00",
    "aiReviewedAt": "2026-07-22T04:59:14.577279+00:00",
    "aiReviewVersion": 1
  },
  "farasi_zebra_herb_mix_premium": {
    "id": "farasi_zebra_herb_mix_premium",
    "name": "Farasi Zebra Herb Mix (Premium)",
    "description": "The Farasi Zebra Herb Mix (Premium) is a meticulously crafted blend of rare savanna herbs and zebra extracts, designed to invigorate both body and spirit. Consuming this mix grants you a temporary boost in speed, enhancing your agility on the battlefield or in a chase through the wilds. It also bestows a fleeting but striking appearance of stripes upon your skin, making you appear as if you’ve been blessed by the very essence of the savanna's most iconic creature.",
    "price": 1000,
    "icon": "🌿",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Boost Speed",
      "Temporary Stripes"
    ],
    "vendor": "farasi_savanna",
    "shippedBy": "Herb Pouch",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Boost Speed",
        "rules": "Consume the Farasi Zebra Herb Mix to gain a +10 foot speed boost for one hour. This effect is instantaneous upon consumption and lasts until its duration expires."
      },
      {
        "title": "Temporary Stripes",
        "rules": "After consuming, stripes appear temporarily on your skin as if painted by nature itself. These stripes are cosmetic in nature and do not affect your appearance or abilities beyond their visual appeal. The stripes last for one hour after consumption."
      }
    ],
    "levelRequirementReason": "This herb mix is designed to be accessible, providing a safe boost to speed without requiring high-level expertise.",
    "vendorReason": "Farasi Healers are renowned for their knowledge of savanna herbs and their ability to craft remedies that enhance both physical and spiritual well-being.",
    "shippingDetail": "The Herb Pouch is a specially designed container that preserves the freshness of the herbs during transit, ensuring they remain potent upon arrival.",
    "usage": {
      "activation": "Consume the herb mix as an action.",
      "duration": "One hour from consumption.",
      "endsWhen": "Its duration expires after one hour or if consumed again before the current effect ends.",
      "charges": "Unlimited uses."
    },
    "priceReason": "The premium quality and rare ingredients used in this herb mix justify its moderate price, offering a valuable boost to speed without breaking the bank.",
    "priceOriginal": 13000,
    "priceReviewedAt": "2026-07-22T04:59:39.618575+00:00",
    "aiReviewedAt": "2026-07-22T04:59:39.618575+00:00",
    "aiReviewVersion": 1
  },
  "farasi_zebra_herd_grater": {
    "id": "farasi_zebra_herd_grater",
    "name": "Farasi Zebra Herd Grater",
    "description": "The Farasi Zebra Herd Grater is a sleek, striped tool crafted by the Zebra Toolers from the savannas of Farasi. Its dual-edged blades are forged from durable zebra bone and sharpened with grass roots, making it perfectly suited for grating even the toughest grasses into fine strands. The handle's natural grip ensures you won't drop it during rough handling, but be wary—its sharp edges can cause injury if used carelessly.",
    "category": "equipment",
    "price": 1000,
    "icon": "🥗",
    "stock": 8,
    "rarity": "uncommon",
    "effects": [
      "Grates tough grass efficiently",
      "Natural grip reduces slip"
    ],
    "vendor": "farasi_savanna",
    "shippedBy": "Graze Grate Gear",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Grating Tough Grass",
        "rules": "When you use the Farasi Zebra Herd Grater to grate grass, you gain advantage on checks related to preparing herb-based dishes. This effect lasts until the end of your next short rest."
      },
      {
        "title": "Natural Grip",
        "rules": "As a bonus action, you can activate the natural grip feature by squeezing the handle. For the duration of one hour, you have advantage on Dexterity (Athletics) checks made to avoid falling when balancing or moving over uneven terrain."
      }
    ],
    "levelRequirementReason": "This simple yet effective tool is accessible to all adventurers.",
    "vendorReason": "Farasi SAVANNA has a deep connection with the Zebra Toolers and offers unique tools made from savanna resources.",
    "shippingDetail": "Ships via specialized zebra couriers known for their speed across the plains.",
    "usage": {
      "activation": "Bonus action to activate natural grip. No activation required for grating grass.",
      "duration": "Grating effect lasts until end of next short rest; natural grip lasts one hour.",
      "endsWhen": "Natural grip ends when you finish a short or long rest, or if you deactivate it as a bonus action.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The balanced price reflects the tool's utility and rarity in the market.",
    "priceOriginal": 6000,
    "priceReviewedAt": "2026-07-22T04:59:42.832835+00:00",
    "aiReviewedAt": "2026-07-22T04:59:42.832835+00:00",
    "aiReviewVersion": 1
  },
  "farasi_zebra_stripe_pants": {
    "id": "farasi_zebra_stripe_pants",
    "name": "Farasi Zebra Stripe Pants",
    "description": "The Farasi Zebra Stripe Pants are tailored from durable, flame-retardant fabric that mimics the stripes of a zebra to blend seamlessly into savanna herds. These pants grant you unmatched stealth when running through dense grasslands and increase your speed by an additional 10 feet in open plains. However, the constant contact with grass seeds causes persistent itching, forcing you to frequently scratch or risk distraction. Crafted by Farasi Tailors using ancient techniques passed down for generations.",
    "category": "equipment",
    "price": 1000,
    "icon": "👖",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Stealth Camouflage",
      "Increased Speed"
    ],
    "vendor": "farasi_savanna",
    "shippedBy": "Stripe Sew Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Stealth Camouflage",
        "rules": "When you are in a grassland or savanna environment, you have advantage on Dexterity (Stealth) checks. This effect lasts until the start of your next turn."
      },
      {
        "title": "Increased Speed",
        "rules": "You gain +5 feet to your walking speed while in open plains and grasslands, but this benefit is negated if you are wearing armor or any other encumbering clothing."
      }
    ],
    "levelRequirementReason": "These pants are designed for beginners who need to navigate the savanna safely.",
    "vendorReason": "Farasi Savanna is renowned for its expertise in crafting garments that blend with the environment, making these pants a staple of their inventory.",
    "shippingDetail": "Ships within one week from Farasi Tailors' workshop on the savanna.",
    "usage": {
      "activation": "Passive effect",
      "duration": "Instantaneous (until start of next turn)",
      "endsWhen": "The start of your next turn or if you leave the grassland or savanna environment",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the item's uncommon rarity and the specialized craftsmanship required to produce these unique pants.",
    "priceOriginal": 13500,
    "priceReviewedAt": "2026-07-22T05:00:01.077271+00:00",
    "aiReviewedAt": "2026-07-22T05:00:01.077271+00:00",
    "aiReviewVersion": 1
  },
  "fateweavers_thread_cutter": {
    "id": "fateweavers_thread_cutter",
    "name": "Fateweaver's Thread Cutter",
    "description": "Fateweaver's Thread Cutter is a gleaming, obsidian blade that hums with the weight of ancient destiny. Crafted by the Three Fates themselves from stars and shadows, it can sever a target’s thread of fate, making them immune to divination and fate magic forever. However, wielding this weapon comes at a cost; each use erases one year of the cutter's wielder's memories, leaving behind echoes of past moments lost in mist.",
    "price": 1000,
    "icon": "✂️",
    "stock": 1,
    "rarity": "godly",
    "effects": [
      "Immunity to Divination",
      "Permanent Loss of Memory"
    ],
    "vendor": "destiny_merchant",
    "shippedBy": "Weave Rip",
    "levelRequirement": 19,
    "effectDetails": [
      {
        "title": "Divination Immunity",
        "rules": "The target gains immunity to divination and fate magic. This effect is permanent upon successful use."
      },
      {
        "title": "Memory Loss",
        "rules": "The user loses one year of memory per use. The lost memories are replaced by vague, fleeting impressions that can be recalled as a bonus action once per long rest."
      }
    ],
    "levelRequirementReason": "This powerful item requires significant magical prowess to wield its fate-altering abilities.",
    "vendorReason": "The Destiny Merchant, keeper of the cosmos' secrets, sells this rare and treasured blade.",
    "shippingDetail": "The item is carefully wrapped in cosmic threads and delivered with a ritual that ensures its safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Permanent on the target; user's memory loss ends after one year",
      "endsWhen": "Target becomes immune to divination and fate magic; user loses memories per use",
      "charges": "Unlimited, but each use erases a year of memory"
    },
    "priceReason": "Balanced as an item that can significantly alter the course of destiny while imposing a high cost on its wielder.",
    "priceOriginal": 1025000,
    "priceReviewedAt": "2026-07-22T05:00:15.161673+00:00",
    "aiReviewedAt": "2026-07-22T05:00:15.161673+00:00",
    "aiReviewVersion": 1
  },
  "fawful_headgear": {
    "id": "fawful_headgear",
    "name": "Vacuum Helmet",
    "description": "The Vacuum Helmet is a menacing piece of headgear forged from meteoric iron. It hums with a dark energy that propels you through the air at an alarming rate, and its visor flickers with the arcane power to absorb incoming magic missile spells. The helmet's jets screech as they fire energy balls, capable of shattering foes and structures alike. A relic of war, it speaks in broken, furious English, echoing a voice that commands fear and fury.",
    "category": "equipment",
    "price": 1000,
    "icon": "🟢",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Jetpack Flight",
      "Absorb Magic Missile"
    ],
    "vendor": "rogueport_black_market",
    "shippedBy": "Mustard of Doom's Express Couriers",
    "levelRequirement": 9,
    "effectDetails": [
      {
        "title": "Jetpack Flight",
        "rules": "As an action, you can activate the jetpack for a short burst of flight. This grants you a fly speed of 30 feet for 1 minute. The effect ends early if you are incapacitated or if you take any action other than moving."
      },
      {
        "title": "Absorb Magic Missile",
        "rules": "When a creature within 5 feet of you casts a magic missile spell, the spell’s damage is reduced to zero and absorbed by the helmet. The helmet can absorb one magic missile per short or long rest."
      }
    ],
    "levelRequirementReason": "The Vacuum Helmet's complexity and raw power demand a seasoned adventurer with at least ninth level.",
    "vendorReason": "The Rogueport Black Market deals in the most exotic and dangerous goods, including this relic from an ancient war.",
    "shippingDetail": "Ships via Mustard of Doom’s Express Couriers within three days. Delivery includes a protective case to ensure safe transport.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute (recharges after a short or long rest)",
      "endsWhen": "You are incapacitated or take an action other than movement.",
      "charges": "Unlimited, recharging one use per short or long rest"
    },
    "priceReason": "The Vacuum Helmet is priced at 1000 XP to reflect its legendary rarity and the raw materials used in its forging.",
    "priceOriginal": 360000,
    "priceReviewedAt": "2026-07-22T04:59:53.871345+00:00",
    "aiReviewedAt": "2026-07-22T04:59:53.871345+00:00",
    "aiReviewVersion": 1
  },
  "fawfuls_furious_cackle_bomb": {
    "id": "fawfuls_furious_cackle_bomb",
    "name": "Fawful's Furious Cackle Bomb",
    "description": "Fawful's Furious Cackle Bomb is a compact, explosive orb that releases a bone-chilling cackle upon detonation. This maddening sound can be heard for miles and has a peculiar effect on those caught in its radius. All creatures within 15 feet must succeed on a DC 13 Wisdom saving throw or become Frightened of the source for up to one minute, while those who pass are instead Deafened for the duration of their next action.",
    "category": "consumables",
    "price": 1000,
    "icon": "💥",
    "stock": 10,
    "rarity": "uncommon",
    "effects": [
      "Deafening Cackle",
      "Frightening Sound"
    ],
    "vendor": "fawfuls_furious",
    "shippedBy": "Prankster Supply",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Deafening Cackle",
        "rules": "When activated, all creatures within a 15-foot radius must make a DC 13 Wisdom saving throw. On a failed save, the creature becomes Frightened of the source for up to one minute. This effect ends if the frightened creature moves out of the area or is incapacitated."
      },
      {
        "title": "Frightening Sound",
        "rules": "Creatures who succeed on their Wisdom saving throw are instead Deafened for the duration of their next action. This effect lasts until the beginning of their next turn, and they gain advantage on all Wisdom (Perception) checks made to notice sounds."
      }
    ],
    "levelRequirementReason": "Beginners can use this item to create chaos without needing a high level.",
    "vendorReason": "Fawfuls specialize in crafting and selling items that cause mayhem, making this explosive a perfect fit for their inventory.",
    "shippingDetail": "Ships via Prankster Express, delivery time varies depending on the region.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous (one minute for Frightened effect)",
      "endsWhen": "The frightened creature moves out of the area or is incapacitated; Deafened effect ends after one round.",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflecting its minor utility and moderate impact on combat.",
    "priceOriginal": 7000,
    "priceReviewedAt": "2026-07-22T04:59:57.098432+00:00",
    "aiReviewedAt": "2026-07-22T04:59:57.098432+00:00",
    "aiReviewVersion": 1
  },
  "fawfuls_furious_fusion_fajitas_recipe": {
    "id": "fawfuls_furious_fusion_fajitas_recipe",
    "name": "Recipe: Fawful's Furious Fusion Fajitas ",
    "description": "A recipe card that crackles with the essence of Fawful's mad culinary experiments. The card is embossed with a fiery Sizzle symbol and bears the signature of Furious Lab Cooks. Upon activation, these fajitas deliver an explosion of flavor and heat that can only be found in Fawful's chaotic kitchen. Eating them grants temporary Intelligence boost, making you sharper for a short while. This recipe is a testament to Fawful's relentless pursuit of culinary chaos.",
    "price": 1000,
    "icon": "🌮",
    "stock": 7,
    "rarity": "uncommon",
    "effects": [
      "Sizzle with Fury",
      "Mad Science Boost"
    ],
    "vendor": "fawfuls_furious_workshop",
    "shippedBy": "Sizzling Spice Sheet",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Sizzle with Fury",
        "rules": "Eating these fajitas immediately grants you advantage on Intelligence checks for the next hour. This effect lasts until used or dismissed."
      },
      {
        "title": "Mad Science Boost",
        "rules": "When you eat these fajitas, you gain +1 to your Intelligence score until the end of your next long rest. You can only use this effect once per short or long rest."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of how to prepare and enjoy spicy dishes.",
    "vendorReason": "Fawful's workshop is renowned for its experiments in culinary magic.",
    "shippingDetail": "Ships immediately with a special delivery spice packet to enhance the flavor upon arrival.",
    "usage": {
      "activation": "Eating the fajitas",
      "duration": "One hour or until used",
      "endsWhen": "The effect ends when you finish your next long rest, or if you eat another serving of these fajitas before then.",
      "charges": "Unlimited; regains uses after a short or long rest."
    },
    "priceReason": "Balanced price for an uncommon recipe that grants temporary buffs and unique flavor.",
    "priceOriginal": 6500,
    "priceReviewedAt": "2026-07-22T05:00:08.904368+00:00",
    "aiReviewedAt": "2026-07-22T05:00:08.904368+00:00",
    "aiReviewVersion": 1
  },
  "fey_curse_breaker": {
    "id": "fey_curse_breaker",
    "name": "Fey Curse Breaker (Amulet)",
    "description": "The Fey Curse Breaker, an amulet crafted by the Seelie Wardens from enchanted elderwood and silver, hums with a faint glow of ethereal light when exposed to fey magic. It is said that this amulet can sever the threads of enchantment woven by faeries and other fey creatures, instantly dispelling their spells upon contact. Its wearer gains an unshakeable resolve against charm effects, bolstering their willpower in moments of temptation or coercion.",
    "price": 1000,
    "icon": "🍀",
    "stock": 2,
    "rarity": "legendary",
    "effects": [
      "Disrupts Fey Enchantments",
      "Enhanced Charms Resistance"
    ],
    "vendor": "fey_court",
    "shippedBy": "Pixie Post",
    "levelRequirement": 16,
    "factionBonus": {
      "fey": 50
    },
    "effectDetails": [
      {
        "title": "Disrupts Fey Enchantments",
        "rules": "When touched to a creature under the effects of a fey enchantment, this amulet instantly dispels the magic. The target must succeed on a DC 18 Constitution saving throw or be freed from the effect immediately."
      },
      {
        "title": "Enhanced Charms Resistance",
        "rules": "The wearer gains +5 to all saving throws against charm effects until their next long rest. This benefit does not stack with similar abilities."
      }
    ],
    "levelRequirementReason": "To wield this amulet effectively, a character must be at least level 16 to combat the powerful fey magic it counters.",
    "vendorReason": "The Fey Court recognizes the amulet's importance in maintaining balance between their realm and that of mortals.",
    "shippingDetail": "Shipped by the swift messengers of the Pixie Post, this package arrives within a week if undisturbed.",
    "usage": {
      "activation": "Touch to a creature under a fey enchantment.",
      "duration": "Instantaneous effect; ends when dispelled or upon contact with another creature.",
      "endsWhen": "Exhausted after one use per day, recharging after a long rest.",
      "charges": "1/Day"
    },
    "priceReason": "The amulet is priced at 1000 XP to reflect its rarity and the Seelie Wardens' craftsmanship.",
    "priceOriginal": 660000,
    "priceReviewedAt": "2026-07-22T05:00:40.132133+00:00",
    "aiReviewedAt": "2026-07-22T05:00:40.132133+00:00",
    "aiReviewVersion": 1
  },
  "fey_deal_negotiation": {
    "id": "fey_deal_negotiation",
    "name": "Fey Deal Negotiation",
    "description": "The Fey Deal Negotiation is a meticulously crafted scroll, imbued with the essence of fae law and lore. When unfurled, it calls forth a spectral lawyer from the Veil to broker your deal. This ethereal advocate ensures that every clause is fair, though not without subtle protections or loopholes. The lawyer may demand a small part of your soul as payment for their expertise, ensuring that the Fey maintain at least a tiny claim over the agreement's terms.",
    "category": "services",
    "price": 1000,
    "icon": "🧑‍⚖️",
    "stock": 2,
    "rarity": "epic",
    "effects": [
      "Fey Advocate Presence",
      "Fair Deal Negotiation"
    ],
    "vendor": "fey_market",
    "shippedBy": "Golden Quill Courier",
    "levelRequirement": 10,
    "effectDetails": [
      {
        "title": "Fey Advocate Presence",
        "rules": "When activated as an action, this scroll calls forth a spectral lawyer from the Veil. The lawyer remains present for one hour or until dismissed by its user."
      },
      {
        "title": "Fair Deal Negotiation",
        "rules": "During that time, you gain a +2 bonus to all checks and saving throws related to negotiation with fey creatures. Any attempt to exploit the deal is met with subtle resistance, ensuring fairness within the bounds of Fey law."
      }
    ],
    "levelRequirementReason": "Requires significant experience to navigate the complex and often treacherous terms of a Fey deal.",
    "vendorReason": "The Fey Market is known for its dealings with fey creatures, making it the ideal vendor for such an item.",
    "shippingDetail": "Delivered via the Golden Quill's fastest courier service, ensuring swift and secure transport from the Veil to your doorstep.",
    "usage": {
      "activation": "Action",
      "duration": "One hour or until dismissed by its user",
      "endsWhen": "The lawyer is dismissed or the duration expires",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to ensure that only those with significant experience can afford and justify using this service.",
    "priceOriginal": 120000,
    "priceReviewedAt": "2026-07-22T05:00:30.333327+00:00",
    "aiReviewedAt": "2026-07-22T05:00:30.333327+00:00",
    "aiReviewVersion": 1
  },
  "fey_tattoo_ritual": {
    "id": "fey_tattoo_ritual",
    "name": "Fey Tattoo Ritual",
    "description": "Under the watchful gaze of the stars, a Fey artist inscribes a permanent magical tattoo upon your skin. The glowing ink weaves an ancient bond between you and the fey realm, radiating softly when fae are near. This arcane art bestows upon you a gift from the feywild, granting either *Misty Step*, *Wild Magic Surge*, or *Fey Charm*. Should you ever need to call upon your patron in the Feywild, they may request favors of you without hesitation.",
    "category": "services",
    "price": 1000,
    "icon": "🖤",
    "stock": 1,
    "rarity": "legendary",
    "effects": [
      "Fey Bond",
      "Feathered Glow"
    ],
    "vendor": "fey_market",
    "shippedBy": "Moonlit Inkwell",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Fey Bond",
        "rules": "At any time as a bonus action, you can call upon your Fey patron to bestow one of the following: *Misty Step*, *Wild Magic Surge*, or *Fey Charm*. The effect lasts for 1 hour. You may activate this ability only once per long rest."
      },
      {
        "title": "Feathered Glow",
        "rules": "The tattoo glows faintly when you are within 30 feet of a fey creature, illuminating your path through the forest with an ethereal light. The glow is visible for 1 hour or until obstructed by solid cover."
      }
    ],
    "levelRequirementReason": "The ritual requires a deep understanding of Fey magic and a strong bond with the feywild, which typically takes at least five levels to achieve.",
    "vendorReason": "Only those who have mastered the art of fae rituals can offer such intimate ties to the feywild.",
    "shippingDetail": "The tattoo is shipped via a trusted messenger, ensuring safe and swift delivery under the cover of night.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous activation; effect lasts for 1 hour or until used again",
      "endsWhen": "Exhausted after one use per long rest",
      "charges": "Unlimited, but only one use per long rest"
    },
    "priceReason": "The ritual requires rare ingredients and a delicate process that can take days to complete.",
    "priceOriginal": 200000,
    "priceReviewedAt": "2026-07-22T05:00:23.755377+00:00",
    "aiReviewedAt": "2026-07-22T05:00:23.755377+00:00",
    "aiReviewVersion": 1
  },
  "feywild_blinking_blooming_flower": {
    "id": "feywild_blinking_blooming_flower",
    "name": "Blinking Blooming Flower",
    "description": "The Blinking Blooming Flower, a rare bloom that only unfurls in the presence of wild magic, seems to pulse with the very essence of the Feywild itself. Its petals shimmer and shift, appearing to ripple between states before it teleports the bearer to a location within 100 feet—though beware, for this may be an illusory loop or a mirror that reflects back your own past, testing your resolve in a fey court's whimsical trap.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Wild Leap",
      "Fey Court Aura"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Wild Leap",
        "rules": "The user teleports to a random point within 100 feet. The target may be an illusory loop, a broken mirror reflection, or the throne of a Fey court. This effect uses one charge. The user must succeed on a DC 15 Dexterity saving throw or be pulled into the nearest loop or mirror for up to 1d4 rounds."
      },
      {
        "title": "Fey Court Aura",
        "rules": "For 1 round, the bearer gains +2 to all rolls against fey creatures. This effect is instantaneous and lasts until the end of your next turn. It can be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires a minimum level to ensure players have the necessary experience and understanding of magic.",
    "vendorReason": "The Feywild vendor, with deep ties to the natural magic of the land, is the only one who can source such enchanted blooms.",
    "shippingDetail": "Delivered via a Rakasha spirit that weaves through dimensions, ensuring the flower arrives in pristine condition.",
    "usage": {
      "activation": "A bonus action to activate and teleport.",
      "duration": "Instantaneous; ends when used or interrupted by an opposing force.",
      "endsWhen": "The user is pulled into a loop or mirror for up to 1d4 rounds, or the charge is expended.",
      "charges": "Limited to three charges per long rest."
    },
    "priceReason": "Balanced at 1000 XP as it offers versatile utility and a risk factor with its unpredictable destinations.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:00:45.706457+00:00",
    "aiReviewedAt": "2026-07-22T05:00:45.706457+00:00",
    "aiReviewVersion": 1
  },
  "feywild_blinking_blossom": {
    "id": "feywild_blinking_blossom",
    "name": "Blinking Blossom of the Fractured Atrium",
    "description": "The Blinking Blossom of the Fractured Atrium is a fragile bloom that pulses with the wild magic of the Feywild. Its petals shimmer with unpredictable colors, reflecting the chaotic beauty of its origin within the fractured atria. When activated, it briefly teleports the user to a nearby Fey court or time-looped chamber, but there's a 10% chance it will cause a minor reality distortion, leaving the user disoriented for up to 4 seconds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Feywild Teleportation",
      "Reality Distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Feywild Teleportation",
        "rules": "Activates as a bonus action within 30 feet of a Fey court or time-looped chamber. The user is teleported there instantly, but the target area must be clear of other creatures and objects."
      },
      {
        "title": "Reality Distortion",
        "rules": "There's a 10% chance (roll a d10) that activating the blossom will cause minor disorientation for up to 4 seconds. The user must succeed on a DC 12 Constitution saving throw or be stunned until the end of their next turn."
      }
    ],
    "levelRequirementReason": "Requires at least 3rd level to handle the wild magic safely.",
    "vendorReason": "The Feywild vendors specialize in items that originate from within their domain, including this blossoms of wild magic.",
    "shippingDetail": "Due to its delicate nature, the Blossom must be shipped with utmost care via Shy Guy Smugglers' special enchanted couriers.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous teleportation; disorientation lasts up to 4 seconds",
      "endsWhen": "User returns or is stunned by reality distortion",
      "charges": "3 uses, recharged after a long rest"
    },
    "priceReason": "Balanced for its rarity and the risk involved in handling Feywild magic.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:00:38.221760+00:00",
    "aiReviewedAt": "2026-07-22T05:00:38.221760+00:00",
    "aiReviewVersion": 1
  },
  "feywild_blinking_rose": {
    "id": "feywild_blinking_rose",
    "name": "Blinking Rose of Shifting Time",
    "description": "The Blinking Rose of Shifting Time is a delicate bloom with petals that shimmer and shift, hinting at alternate timelines. When touched, it grants moments of temporal fluidity: one can rewind time to correct an oversight or leap forward to avoid danger within its 30-foot radius. However, the Feywild's influence ensures that these temporal manipulations are not always straightforward—sometimes the rose itself becomes a whimsical but unpredictable companion in your adventures.",
    "price": 1000,
    "icon": "🌹",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewind Last Action",
      "Skip Combat Round"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewind Last Action",
        "rules": "When activated as an action, you may rewind time to revert the last action taken within a 30-foot radius. This effect lasts for one round and has a 10% chance to cause a reality ripple—a brief, disorienting visual distortion that affects all creatures within 10 feet."
      },
      {
        "title": "Skip Combat Round",
        "rules": "Activate as an action to skip the next combat round. This grants you and your allies one additional round of preparation before continuing the fight, but it has a 5% chance to cause a reality ripple affecting all creatures within 10 feet."
      }
    ],
    "levelRequirementReason": "Players need at least third-level proficiency to handle the temporal effects without causing unintended consequences.",
    "vendorReason": "The Feywild are masters of time and space, and their knowledge of the rose's magic is unparalleled.",
    "shippingDetail": "Ships with Lakitu Drones' express service, ensuring safe delivery even in the most unpredictable Feywild mists.",
    "usage": {
      "activation": "Action or Reaction",
      "duration": "Instantaneous",
      "endsWhen": "The effect ends when the round is skipped or time is rewound. A reality ripple occurs if a chance is rolled and not prevented.",
      "charges": "Unlimited, but cannot be used within 24 hours of a previous use."
    },
    "priceReason": "Balanced at 1000 XP to reflect the item's unpredictable nature and Feywild origin.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:01:01.979649+00:00",
    "aiReviewedAt": "2026-07-22T05:01:01.979649+00:00",
    "aiReviewVersion": 1
  },
  "feywild_blooming_gaze": {
    "id": "feywild_blooming_gaze",
    "name": "Blooming Gaze",
    "description": "This enchanted eye-patch, known as the Feywild Blooming Gaze, is crafted from the petals of time-bound flowers found only in the shifting mists of Elfhame. When worn, its petals unfold to reveal fleeting visions of alternate timelines and forgotten courts. Each glance through it grants a temporary glimpse into these magical realms, but prolonged exposure risks inducing a mild temporal drift that can disrupt one's sense of time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Vision Glimpses",
      "Increased Fey Encounters"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Vision Glimpses",
        "rules": "When activated as an action, the wearer gains temporary visions of alternate timelines. These visions last for a number of rounds equal to the wearer's Wisdom modifier (minimum 1 round). The effect ends if the wearer is hit by an attack or takes any damage."
      },
      {
        "title": "Increased Fey Encounters",
        "rules": "While wearing this eye-patch, the wearer has a +50% chance of encountering fey creatures. This increased likelihood persists for 1 hour after the item's last use."
      }
    ],
    "levelRequirementReason": "The delicate nature of the Feywild Blooming Gaze requires a minimum wisdom score of 12 and familiarity with elven or fey languages.",
    "vendorReason": "Feywild's extensive network in the Feywild ensures they have access to such rare, enchanted items.",
    "shippingDetail": "Special handling required due to the delicate nature of the item; delivery may take an additional day.",
    "usage": {
      "activation": "Activates as a bonus action when worn.",
      "duration": "Lasts until the wearer takes damage or is hit by an attack.",
      "endsWhen": "The effect ends if the wearer takes any damage, is hit by an attack, or removes the eye-patch.",
      "charges": "Unlimited uses per day"
    },
    "priceReason": "Balanced at 1000 XP for its unique temporal visions and increased fey encounter chance.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:01:22.054296+00:00",
    "aiReviewedAt": "2026-07-22T05:01:22.054296+00:00",
    "aiReviewVersion": 1
  },
  "feywild_blooming_tide_amber": {
    "id": "feywild_blooming_tide_amber",
    "name": "Blooming Tide Amber",
    "description": "The Blooming Tide Amber pulses with a vibrant, shifting light that dances like wild magic itself. Held in your hand, it warps time, allowing you to rewind a fleeting instant and correct missteps—though this comes at the cost of causing those around you to feel a moment's disorientation. The amber’s color reflects the Feywild’s whimsy, always changing with its mood and the shifting tides of nature.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Rewind Time",
      "Confusion Aura"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Rewind Time",
        "rules": "When activated as a reaction to an unwanted event, you can rewind time for yourself and one ally within reach. This effect lasts only until the beginning of your next turn. Targets must succeed on a DC 15 Dexterity saving throw or be affected by chaotic confusion (as the spell) for 1 round."
      },
      {
        "title": "Confusion Aura",
        "rules": "For as long as you hold the Blooming Tide Amber, any creature within 10 feet of you must make a DC 15 Wisdom saving throw at the start of their turns. On a failed save, they are affected by chaotic confusion (as the spell) until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This item requires a certain understanding of Feywild magic and timing to use effectively.",
    "vendorReason": "The Feywild recognizes this artifact as an essential tool for those navigating the capricious nature of their realm.",
    "shippingDetail": "Delivered by the Void Drifter, with a delay of one hour due to the mystical properties of the item.",
    "usage": {
      "activation": "Reaction (to an unwanted event)",
      "duration": "Until your next turn or until the effect is negated by a successful save",
      "endsWhen": "The effect ends when you make a successful saving throw against it, at the end of your next turn, or if you drop the item.",
      "charges": "Unlimited"
    },
    "priceReason": "Its rare crafting materials and mystical properties justify its fair price.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:01:39.586184+00:00",
    "aiReviewedAt": "2026-07-22T05:01:39.586184+00:00",
    "aiReviewVersion": 1
  },
  "feywild_blossom_bane_glove": {
    "id": "feywild_blossom_bane_glove",
    "name": "Blossom Bane Glove",
    "description": "The Blossom Bane Glove is crafted from the withering petals of the Feywild's time-withering thornbloom. These gloves grant you immunity to time loop effects for a full hour, allowing you to navigate through temporal anomalies unscathed. However, their use comes at a price: each activation splits your memories randomly, causing temporary disorientation and mild confusion. The gloves also enhance your Fey court diplomacy rolls by +2, making them invaluable when dealing with the whimsical denizens of the Feywild.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Immunity to Time Loops",
      "Memory Splitting"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immutiny to Time Loops",
        "rules": "Activates as a bonus action. Provides immunity to time loop effects for 1 hour. Ends when the duration expires or the user takes damage from an attack."
      },
      {
        "title": "Memory Splitting",
        "rules": "When activated, splits your memories randomly upon use (may cause temporary confusion). This effect lasts until the start of your next turn and cannot be resisted with a saving throw. The memory split is permanent but does not affect your ability to function normally."
      }
    ],
    "levelRequirementReason": "The gloves are crafted for adventurers at all stages, ensuring even novices can benefit from their time-traveling immunity.",
    "vendorReason": "The Feywild vendor is the only source of such intricate and powerful artifacts from the fey realms.",
    "shippingDetail": "Ships directly through the ethereal pathways, ensuring swift delivery to your doorstep within a week.",
    "usage": {
      "activation": "Bonus Action",
      "duration": "1 hour",
      "endsWhen": "Ends when the duration expires or you take damage from an attack.",
      "charges": "Unlimited; recharges after a long rest."
    },
    "priceReason": "The gloves are priced at 1000 XP, reflecting their rare materials and the delicate craftsmanship required for their creation.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:00:59.208932+00:00",
    "aiReviewedAt": "2026-07-22T05:00:59.208932+00:00",
    "aiReviewVersion": 1
  },
  "feywild_blossom_bell": {
    "id": "feywild_blossom_bell",
    "name": "Blossom Bell",
    "description": "The Blossom Bell is a delicate bell crafted from the thorns of Feywild flora, its surface shimmering with an ever-changing pattern of stars and constellations. It is said that those who hear its chime are drawn into the whimsical realm of the fey, where time itself seems to bend and flow. When struck, it summons a fleeting echo of a Fey court’s presence, disrupting any magic loops within 60 feet and creating an aura that can influence minor enchantments if held for more than five minutes.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disrupts Magic Loops",
      "Influences Enchantment Aura"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupts Magic Loops",
        "rules": "When the Blossom Bell is struck, it creates a 60-foot radius aura that disrupts any ongoing magic loops within its range. This effect lasts for 1 minute and ends when the bell is no longer held or used in combat."
      },
      {
        "title": "Influences Enchantment Aura",
        "rules": "If held by a creature for more than five minutes, the Blossom Bell creates an aura that can influence minor enchantments. This aura provides advantage on saving throws against enchantment spells and effects within 30 feet of the bell's bearer."
      }
    ],
    "levelRequirementReason": "The delicate nature of the Feywild's magic makes this item accessible to low-level characters who wish to explore its powers.",
    "vendorReason": "The Feywild is known for its intricate and whimsical items, which are often crafted by its resident fey beings.",
    "shippingDetail": "Delivered via a personal courier who ensures the bell arrives with minimal disruption to its magical properties.",
    "usage": {
      "activation": "Standard Action",
      "duration": "1 minute or until no longer held or used in combat",
      "endsWhen": "No longer held or used in combat, or after 1 minute",
      "charges": "Unlimited"
    },
    "priceReason": "The rare and delicate craftsmanship of the Blossom Bell justifies its moderate price, reflecting its unique magical properties.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:01:14.046708+00:00",
    "aiReviewedAt": "2026-07-22T05:01:14.046708+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_amber": {
    "id": "feywild_chaos_amber",
    "name": "Chaos Amber Shard",
    "description": "The Chaos Amber Shard hums with raw, untamed magic, its surface a swirling maelstrom of colors that seem to shift and change with each passing moment. This relic distorts time around the wielder, creating a temporal ripple that can disrupt foes' movements. When touched, it grants temporary immunity to time loops, rendering one's actions inviolable for three rounds. Nearby enemies are thrown into a state of chaotic confusion, their minds reeling as if caught in a maelstrom of shifting realities.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Resilience",
      "Chaotic Confusion"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Resilience",
        "rules": "When the wielder touches the Chaos Amber Shard, they gain temporary immunity to time loops for a duration of three rounds. This effect cannot be used again until after completing a short or long rest."
      },
      {
        "title": "Chaotic Confusion",
        "rules": "Upon activation, all creatures within 10 feet must succeed on a DC 15 Wisdom saving throw or suffer 1d4 confusion damage and be stunned for the start of their next turn. This effect has no save after the first use."
      }
    ],
    "levelRequirementReason": "Wielders need to have at least three levels to channel the raw chaos energy contained within.",
    "vendorReason": "Feywild, an expert in exotic and mystical artifacts, curates this item from the heart of the wild magic sea.",
    "shippingDetail": "Due to the shard's instability, it is shipped via a special sealed container with strict temperature controls to prevent any accidental temporal distortions during transit.",
    "usage": {
      "activation": "Standard action",
      "duration": "Instantaneous effect lasting three rounds",
      "endsWhen": "At the end of the wielder's next turn after activation or upon taking a short rest",
      "charges": "Unlimited, but requires a long rest to gain additional uses"
    },
    "priceReason": "The Chaos Amber Shard is priced at 1000 XP due to its rarity and the complex magic required to craft such a volatile item.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:28:28.823972+00:00",
    "aiReviewedAt": "2026-07-22T19:28:28.823972+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_bloom": {
    "id": "feywild_chaos_bloom",
    "name": "Chaos Bloom of the Shifting Veil",
    "description": "The Chaos Bloom of the Shifting Veil is a pulsating, iridescent flower that blooms in the Feywild's shifting veil. Its petals are a swirling mix of colors, and when touched, it grants chaos immunity to the bearer for 10 minutes. Nearby enemies suffer unpredictable magical backlash; their attacks turn against them with a chance to deal additional damage. The bloom is known to confuse foes, causing them temporary disorientation that lasts 1d4 rounds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Chaos Damage",
      "Unpredictable Magical Backlash"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 2,
    "effectDetails": [
      {
        "title": "Chaos Immunity",
        "rules": "When the user touches the bloom, they gain immunity to all chaos damage for 10 minutes. This effect does not stack with other forms of magical or chaotic protection."
      },
      {
        "title": "Magical Backlash",
        "rules": "For every creature within 30 feet when the bloom is touched, there's a 50% chance that their next attack deals an additional 1d6+CHA damage to them. The effect lasts for 5 seconds and can trigger multiple times."
      }
    ],
    "levelRequirementReason": "Requires at least level 2 to wield the bloom effectively, as its unpredictable nature demands a bit more experience.",
    "vendorReason": "The Feywild vendors are well-acquainted with the flora of their realm and can supply this rare item.",
    "shippingDetail": "Due to its delicate nature, it is shipped discreetly via the Shy Guy Smugglers, ensuring safe delivery through the Feywild's treacherous paths.",
    "usage": {
      "activation": "Touching the bloom",
      "duration": "10 minutes of chaos immunity and unpredictable magical backlash effects",
      "endsWhen": "The duration ends after 10 minutes or if the user is killed, leaving behind a withered bloom",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced at 1000 XP due to its unique effects and the delicate nature of acquiring it from the Feywild.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T19:28:28.518436+00:00",
    "aiReviewedAt": "2026-07-22T19:28:28.518436+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_bottle": {
    "id": "feywild_chaos_bottle",
    "name": "Chaos Bottle",
    "description": "The Feywild Chaos Bottle is a delicate glass vial that captures the whimsical chaos of the Feywild. Its surface etched with runes that shimmer with wild magic, it releases a burst of chaotic energy when shaken, disrupting enemy spellcasting and creating a brief time anomaly where time moves at its normal speed. Use it sparingly, for it may cause minor hallucinations, making you see fleeting visions from your past or hear the whispers of ancient fey spirits.",
    "price": 1000,
    "icon": "🌿",
    "stock": 2,
    "rarity": "uncommon",
    "effects": [
      "Disrupt Spell",
      "Temporal Anomaly"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Disrupt Spell",
        "rules": "When shaken as a bonus action, this vial releases a burst of chaotic energy that targets one creature within 10 feet. The target must make a DC 13 Dexterity saving throw or be disrupted for 1 round, unable to cast spells."
      },
      {
        "title": "Temporal Anomaly",
        "rules": "Shaking the bottle also creates a 30-second temporal anomaly where time moves at normal speed within a 20-foot radius. Creatures within this area are unaffected by any time-related effects for its duration."
      }
    ],
    "levelRequirementReason": "Beginners can harness the chaotic magic of the Feywild, though with caution.",
    "vendorReason": "The Feywild is home to this magical artifact, created by the whimsical fey who dwell there.",
    "shippingDetail": "Delivered swiftly via Lakitu's enchanted drones, ensuring safe and timely arrival from the heart of the Feywild.",
    "usage": {
      "activation": "Shaken as a bonus action",
      "duration": "Instantaneous effects; temporal anomaly lasts for 30 seconds",
      "endsWhen": "The duration ends when it expires or the user takes other actions that require concentration",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced price reflects its Feywild origins and the chaotic magic it contains.",
    "priceOriginal": 1500,
    "priceReviewedAt": "2026-07-22T05:01:37.252790+00:00",
    "aiReviewedAt": "2026-07-22T05:01:37.252790+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_cloak": {
    "id": "feywild_chaos_cloak",
    "name": "Chaos Cloak of the Wild Unbound",
    "description": "The Chaos Cloak of the Wild Unbound is woven from the laughter of forgotten fey courts. Its fabric shimmers with erratic patterns, shifting and mirroring the ever-changing nature of the Feywild. Wearing this cloak grants you immunity to time loops—a boon when caught in temporal paradoxes. However, it introduces an unpredictable element: once per combat round, your movement becomes whimsically altered, either doubling your speed or reversing direction at random.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Immunity to Time Loops",
      "Random Movement Alteration"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Immunity to Time Loops",
        "rules": "You gain immunity to time loop effects. This includes any effect that would cause you to relive or repeat a sequence of events. The cloak's magic prevents such temporal anomalies from affecting you."
      },
      {
        "title": "Random Movement Alteration",
        "rules": "Once per combat round, your movement becomes unpredictable. On your turn, roll a d6: on a 1-2, your speed is doubled; on a 3-4, it is halved; and on a 5-6, you reverse direction mid-step. This effect lasts until the start of your next turn."
      }
    ],
    "levelRequirementReason": "The cloak's magic is accessible to adventurers early in their journey, as it requires only basic understanding of fey enchantments.",
    "vendorReason": "Feywild vendors are well-acquainted with the whimsical and unpredictable nature of the wilds, making them the perfect purveyors of such an item.",
    "shippingDetail": "The cloak is carefully packed to withstand the capricious winds of the Feywild, ensuring it arrives in pristine condition.",
    "usage": {
      "activation": "Instantaneous upon donning the cloak.",
      "duration": "One combat round per use.",
      "endsWhen": "At the start of your next turn after using its effect.",
      "charges": "Unlimited"
    },
    "priceReason": "The cloak's rarity and unique properties, including its protection against time loops and unpredictable movement, justify a price of 1000 XP.",
    "priceOriginal": 3800,
    "priceReviewedAt": "2026-07-22T05:01:53.759860+00:00",
    "aiReviewedAt": "2026-07-22T05:01:53.759860+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_cloak_of_echoes": {
    "id": "feywild_chaos_cloak_of_echoes",
    "name": "Chaos Cloak of Echoes",
    "description": "The Chaos Cloak of Echoes shimmeringly weaves wild magic around its wearer, distorting time and reality. As it warps through echoes of past decisions, the wearer can hear their own voice from alternate timelines, each loop revealing a different path taken or not taken. Wielded in combat, this cloak allows for one reroll per round on an attack roll, ensuring that every strike could be shaped anew by the flux of time.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧭",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Temporal Echoes",
      "Combat Reroll"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporal Echoes",
        "rules": "Activates as a bonus action. The wearer hears their voice from alternate timelines for 1 minute, gaining temporary immunity to time-based effects such as slow and haste within that duration. This effect ends when the wearer removes the cloak or if they take an action other than movement."
      },
      {
        "title": "Combat Reroll",
        "rules": "Activates on a successful attack roll during combat. The wearer may reroll one attack roll per round, choosing to use the better result. This effect ends when the wearer takes another action or rests."
      }
    ],
    "levelRequirementReason": "This cloak's power is accessible to adventurers early in their journey, allowing them to adapt quickly and efficiently.",
    "vendorReason": "The Feywild are known for crafting items that blur the lines between reality and illusion, making this a perfect fit for their wares.",
    "shippingDetail": "This cloak arrives via Pipe Express, delivered with a swiftness befitting its magical nature, ensuring it reaches eager hands promptly.",
    "usage": {
      "activation": "Bonus action and reaction",
      "duration": "1 minute or until removed or an action is taken other than movement",
      "endsWhen": "Removed, takes another action, or rests",
      "charges": "Unlimited"
    },
    "priceReason": "This price reflects the cloak's balance between utility and magic, allowing it to be a valuable tool for adventurers of all levels.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:01:55.296875+00:00",
    "aiReviewedAt": "2026-07-22T05:01:55.296875+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_fang": {
    "id": "feywild_chaos_fang",
    "name": "Chaos Fang",
    "description": "The Chaos Fang is a fang hewn from the heartwood of a Feywild tree, its jagged edges glowing with chaotic magic. When it strikes, it may deal an extra 1d6 radiant damage and grant temporary hit points to the wielder equal to half their level for 1 hour, or summon a fey creature as if using a Greater Feat of Nature spell. On a critical hit, the target is also knocked prone.",
    "category": "equipment",
    "price": 1000,
    "icon": "🦷",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Extra Radiant Damage",
      "Temporary Hit Points"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Radiant Damage and Temporary HP",
        "rules": "When used as an action to attack, the fang deals extra 1d6 radiant damage on a hit. On a successful hit, the wielder gains temporary hit points equal to half their level (rounded down) for 1 hour."
      },
      {
        "title": "Fey Summon",
        "rules": "On a critical hit, the wielder can summon a fey creature as if using Greater Feat of Nature. The summoning lasts until the end of the encounter or is dismissed with an action."
      }
    ],
    "levelRequirementReason": "This fang requires minimal strength to wield but harnesses powerful magic.",
    "vendorReason": "The fey creatures of Feywild are known for crafting and trading such enchanted items.",
    "shippingDetail": "Ships via Pipe Express within a week, with expedited options available for an additional cost.",
    "usage": {
      "activation": "Action or bonus action to attack",
      "duration": "Instantaneous attack effect; temporary HP lasts until the end of the encounter",
      "endsWhen": "The wielder dismisses it as an action on their turn, or the encounter ends",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced to represent a powerful but not overpowered item that is rare and valuable.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:02:07.297171+00:00",
    "aiReviewedAt": "2026-07-22T05:02:07.297171+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_feywhistle": {
    "id": "feywild_chaos_feywhistle",
    "name": "Chaos Feywhistle of the Unbound Court",
    "description": "The Chaos Feywhistle of the Unbound Court is a crystal-tipped whistle forged in the whimsical realms of the Feywild, crafted from luminescent quartz and bound by the whispers of eldritch spirits. When you blow it, reality distorts around you for fleeting moments, unraveling the very fabric of space-time and causing chaos. The more you use it, the more pronounced the effects become, making it a dangerous yet mesmerizing relic that can only be wielded by those who understand its volatile nature.",
    "price": 1000,
    "icon": "🎶",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Disruptive Sound",
      "Magical Distortion"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Disruptive Sound",
        "rules": "When activated, the whistle emits a sound capable of unraveling reality’s threads. All enemies within 30 feet must succeed on a DC 15 Wisdom saving throw or become confused for 1 round."
      },
      {
        "title": "Magical Distortion",
        "rules": "The user gains a +2 bonus to wild magic damage rolls and suffers temporary magical fatigue, which lasts for 1 round after use. The user must make a DC 14 Constitution saving throw or be fatigued until the end of their next short rest."
      }
    ],
    "levelRequirementReason": "The complex magic embedded in the whistle requires a high degree of arcane knowledge and control.",
    "vendorReason": "The Feywild is home to the artisans who craft such volatile relics, ensuring their authenticity and power remain intact.",
    "shippingDetail": "Ships via a Rakasha spirit courier, arriving within 24 hours of purchase. The whistle must be delivered in a specially enchanted box to preserve its magic during transit.",
    "usage": {
      "activation": "Requires an action to blow the whistle and unleash its effects.",
      "duration": "Instantaneous effect with a 1-minute cooldown between uses.",
      "endsWhen": "The user exhausts all charges, which are refilled after a short rest.",
      "charges": "5 charges"
    },
    "priceReason": "Balanced for its powerful yet volatile nature, this whistle is priced at 1000 XP.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:02:41.012103+00:00",
    "aiReviewedAt": "2026-07-22T05:02:41.012103+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_feywild_item_name": {
    "id": "feywild_chaos_feywild_item_name",
    "name": "Wildfire Tassel",
    "description": "The Wildfire Tassel, a tassel of chaotic energy that pulses with the wild magic of the Feywild, weaves itself into the fabric of reality and releases bursts of unpredictable force when shaken. Its chaotic essence can turn an enemy’s next move into a random action—spell, fall, or misstep—that could spell their undoing in combat. This tassel is as enigmatic as it is powerful, and its magic has been known to disrupt even the most focused spellcasters.",
    "price": 1000,
    "icon": "🔮",
    "stock": 4,
    "rarity": "rare",
    "effects": [
      "Chaotic Burst",
      "Random Action"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Chaotic Burst",
        "rules": "When shaken, the Wildfire Tassel releases a burst of wild magic affecting all enemies within 5 meters. Each enemy must make a random action (roll a d6: 1-2 = cast a spell, 3-4 = move, 5-6 = fall prone). This effect lasts for one round and then dissipates."
      },
      {
        "title": "Random Action",
        "rules": "The random action is determined by rolling a d6. The results are as follows: 1-2 = cast a spell (the enemy must attempt to cast a spell they know, with disadvantage on the saving throw), 3-4 = move (the enemy must make a Dexterity saving throw or fall prone), 5-6 = fall prone."
      }
    ],
    "levelRequirementReason": "This tassel demands a certain level of control and understanding of chaotic magic.",
    "vendorReason": "The Feywild, being the source of this magical item's power, is the most fitting vendor for it.",
    "shippingDetail": "Due to its volatile nature, the tassel must be shipped in a specially designed container with cooling packs and requires an extra day for delivery.",
    "usage": {
      "activation": "A bonus action to shake the tassel.",
      "duration": "One round.",
      "endsWhen": "The effect ends after one round or when shaken again.",
      "charges": "Unlimited, but the tassel must be recharged by a successful DC 15 Arcana check."
    },
    "priceReason": "This price reflects its rarity and the complexity of its magical properties.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:02:36.887325+00:00",
    "aiReviewedAt": "2026-07-22T05:02:36.887325+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_flicker": {
    "id": "feywild_chaos_flicker",
    "name": "Chaos Flicker",
    "description": "The Chaos Flicker is a shimmering amulet that warps reality, causing brief but disorienting loops of time and space. It can re-roll one action, alter the environment with gravity flips or terrain shifts, and even mirror enemy actions back at them for a round. Each use leaves the wearer's essence slightly altered by the Feywild's chaotic magic, until it finally fades after three activations or if struck by a non-fey weapon.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Re-roll Action",
      "Environment Alteration"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Re-roll Action",
        "rules": "When activated as an action, the wearer can re-roll one attack roll or ability check. The effect lasts for 10 seconds and is exhausted after use."
      },
      {
        "title": "Environment Alteration",
        "rules": "Activates randomly to alter the environment around the wearer by flipping gravity, shifting colors, or warping terrain. This effect lasts for 3 rounds unless the wearer is struck by a non-fey blade, which ends it immediately."
      }
    ],
    "levelRequirementReason": "The Chaos Flicker's unpredictable effects require a firmer grasp of magical principles to control.",
    "vendorReason": "As a representative of the Feywild, the vendor ensures that only those who understand its essence can wield such an item.",
    "shippingDetail": "Delivered via a portal in the Feywild, ensuring the amulet's magical properties remain intact.",
    "usage": {
      "activation": "Action",
      "duration": "10 seconds per use",
      "endsWhen": "After three uses or if struck by a non-fey blade",
      "charges": "3"
    },
    "priceReason": "The Chaos Flicker's balance between unpredictable effects and controlled re-rolls, along with its Feywild origin, justifies this price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:02:52.685992+00:00",
    "aiReviewedAt": "2026-07-22T05:02:52.685992+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_gaze_lens": {
    "id": "feywild_chaos_gaze_lens",
    "name": "Chaos Gaze Lens",
    "description": "The Chaos Gaze Lens is a fractured obsidian lens, etched with ancient Fey runes. When focused upon, it reveals hidden paths and events in the Feywild, allowing the perceiver to glimpse the true nature of time loops. It grants +2 to Perception checks against Fey magic illusions and can reveal one such event within 100 yards when activated. However, if the revealed event is dangerous, the user may be temporarily confused for up to two rounds.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden paths or events",
      "Confusion from dangerous revelations"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Reveal Hidden Paths and Events",
        "rules": "When activated as an action, the user may reveal one hidden path or event within 100 yards. The effect lasts until the end of the user's next turn."
      },
      {
        "title": "Temporary Confusion from Dangerous Reactions",
        "rules": "If the revealed event is dangerous, the user must succeed on a DC 15 Wisdom saving throw or be confused for up to two rounds. This confusion ends if the user takes any action."
      }
    ],
    "levelRequirementReason": "Requires basic understanding of Feywild lore and magic.",
    "vendorReason": "The lens is a common trade item among Feywild explorers and scholars seeking to understand the region's mysteries.",
    "shippingDetail": "Ships within one week, delivered by Lakitu drones directly from the Feywild.",
    "usage": {
      "activation": "Activation as a bonus action",
      "duration": "Instantaneous effect lasting until end of next turn",
      "endsWhen": "The duration ends when the user's next turn begins",
      "charges": "Unlimited, recharged at dawn"
    },
    "priceReason": "Balanced by its limited use and unique utility within Feywild exploration.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:02:56.720028+00:00",
    "aiReviewedAt": "2026-07-22T05:02:56.720028+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_heart": {
    "id": "feywild_chaos_heart",
    "name": "Chaos Heart Pendant",
    "description": "The Chaos Heart Pendant, crafted from the molten core of a Feywild storm, pulses with wild magic that warps time around its wearer. Its ruby glow can warp reality, creating brief distortions that bend space and time. In unstable areas, this pendant allows you to escape by warping moments, briefly slipping through the very fabric of time itself. Worn only once per day, it grants immunity to time-based effects for 10 minutes and a chance to manipulate the flow of time around you.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Time Immunity",
      "Temporal Manipulation"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Immunity",
        "rules": "The wearer gains immunity to all time-based effects, including slowed movement and time loops, for a duration of 10 minutes. This effect can be activated once per day."
      },
      {
        "title": "Temporal Manipulation",
        "rules": "When worn, the pendant has a 25% chance to cause a minor temporal distortion around the wearer. This results in a 3-second time stutter for all nearby creatures. The effect is instantaneous and can be triggered once per day."
      }
    ],
    "levelRequirementReason": "The chaotic energy of the pendant requires a certain understanding of both time and magic, making it accessible to lower-level characters.",
    "vendorReason": "The vendors at Feywild are known for their unique and powerful items forged from the heart of the wilds.",
    "shippingDetail": "Due to its volatile nature, the pendant must be carefully packed in a specialized container provided by Koopa Postal.",
    "usage": {
      "activation": "Instantaneous activation upon donning the pendant.",
      "duration": "10 minutes of immunity and one use per day for temporal distortions.",
      "endsWhen": "The effect ends when its duration expires or the pendant is removed.",
      "charges": "One charge used per daily activation."
    },
    "priceReason": "Balanced as a rare item, reflecting its Feywild origin and potent magical properties.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:03:06.017111+00:00",
    "aiReviewedAt": "2026-07-22T05:03:06.017111+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_ink": {
    "id": "feywild_chaos_ink",
    "name": "Chaos Ink of the Whispering Court",
    "description": "The Chaos Ink of the Whispering Court drips like living ink, its surface shimmering with wild Feywild magic. When applied to parchment, it weaves intricate patterns that warp perception and reveal hidden truths or forgotten memories—illusions that linger for hours, distorting reality in a dance of time loops and shifting perspectives. Touching this ink with unbound magic can cause brief moments where the past echoes into the present, blurring the line between past and future.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals hidden lore or forgotten memories",
      "Causes temporary time-looping effects"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Hidden Lore",
        "rules": "When applied to parchment, the ink reveals hidden lore or forgotten memories. This effect lasts for 1 hour and can be used once per day."
      },
      {
        "title": "Time-Looping Effects",
        "rules": "If a mortal with unbound magic touches the ink, they experience brief time loops where past events echo into the present. The duration of these effects is 1 minute, and it can occur up to twice per long rest."
      }
    ],
    "levelRequirementReason": "This ink allows even a novice mage to access Feywild magic without extensive study.",
    "vendorReason": "Feywild, the source of all things magical, is known for its unique and powerful artifacts that manipulate reality in unexpected ways.",
    "shippingDetail": "Ships within a week via Koopa Postal's enchanted mail service, ensuring the ink remains potent even after long distances.",
    "usage": {
      "activation": "Passive effect when applied to parchment; requires no action to activate.",
      "duration": "1 hour per use for revealing hidden lore and up to twice per long rest for time-looping effects.",
      "endsWhen": "The duration ends naturally or if the ink is removed from the surface it was applied to.",
      "charges": "Unlimited uses, but can only be used once per day."
    },
    "priceReason": "Balanced at 1000 XP, this ink offers a unique and powerful effect that enhances storytelling and exploration without overpowering the game.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:03:11.286182+00:00",
    "aiReviewedAt": "2026-07-22T05:03:11.286182+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_satchel": {
    "id": "feywild_chaos_satchel",
    "name": "Chaos Satchel of the Unbound Court",
    "description": "The Chaos Satchel of the Unbound Court is a tattered leather bag adorned with wild magic threads. It absorbs time fractures and echoes of Feywild, stabilizing chaotic occurrences within a 10-foot radius when opened. However, this act comes at a cost: the user must endure an unpredictable next action for 10 seconds. The satchel glows faintly during time loops or when Fey magic is in use, hinting at its connection to the fey realms.",
    "category": "equipment",
    "price": 3000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Absorbs minor time fractures",
      "Random action delay (10 sec)"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Absorption",
        "rules": "When opened, this satchel absorbs minor time fractures within a 10-foot radius. This effect is instantaneous and has no save DC or duration."
      },
      {
        "title": "Unpredictable Action",
        "rules": "The user's next action becomes unpredictable for 10 seconds after opening the satchel. This effect can be countered with a successful Wisdom saving throw (DC 13). The satchel can only be used once per long rest."
      }
    ],
    "levelRequirementReason": "Requires the user to have sufficient experience and control over time magic.",
    "vendorReason": "The Feywild vendor specializes in items from their realm, including magical artifacts like this satchel.",
    "shippingDetail": "Delivered via fast courier drones, ensuring safe and swift arrival.",
    "usage": {
      "activation": "Action to open the satchel",
      "duration": "Instantaneous effect; ends when the user's next action is determined",
      "endsWhen": "The user successfully completes a Wisdom saving throw or after 10 seconds",
      "charges": "One charge per long rest"
    },
    "priceReason": "Reflects its rare, magical properties and the Feywild's stringent trade rules.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:03:07.502891+00:00",
    "aiReviewedAt": "2026-07-22T05:03:07.502891+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_scribe_book": {
    "id": "feywild_chaos_scribe_book",
    "name": "Chaos Scribe Book",
    "description": "The Chaos Scribe Book, a leather-bound tome adorned with arcane runes of shifting colors, seems to breathe life as it lies open in your hands. Its pages turn on their own accord, revealing Feywild laws that bend reality itself — time loops, spells that reverse themselves, and hidden court rulings that seem to shift with each glance. A dangerous but invaluable tool for those who dare to wield the power of the Feywild’s chaos.",
    "price": 1000,
    "icon": "📖",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Randomly Alters Rule",
      "Rewrites Spell Effect"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Randomly Alters Rule",
        "rules": "When activated as an action, this book reveals a random rule from the Feywild that temporarily alters reality for one round. The exact nature of the change is revealed upon opening and can include effects like 'time passes 10x faster', 'spells cast in this area are reversed', or 'all creatures gain advantage on saving throws'."
      },
      {
        "title": "Rewrites Spell Effect",
        "rules": "As a bonus action, you may rewrite the effect of one spell known to you for one round. The rewritten effect must be logically consistent and cannot negate or bypass the spell’s mechanics."
      }
    ],
    "levelRequirementReason": "The book's power requires a deep understanding of magic and the Feywild, which is only achieved at 6th level.",
    "vendorReason": "The Feywild marketplaces are known for their wondrous artifacts that can bend reality itself; it makes sense they would sell this chaotic tome.",
    "shippingDetail": "Due to its unstable nature, the book must be shipped via Koopa Postal's secure and magical delivery service to ensure safe transport through non-Feywild zones.",
    "usage": {
      "activation": "Action or Bonus Action",
      "duration": "Instantaneous effect; rule lasts one round",
      "endsWhen": "The altered rule reverts when the duration ends or if you open another page of the book.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The Chaos Scribe Book's value lies in its unpredictable but potentially game-changing effects, making it a rare and sought-after artifact.",
    "priceOriginal": 2000,
    "priceReviewedAt": "2026-07-22T05:03:57.621259+00:00",
    "aiReviewedAt": "2026-07-22T05:03:57.621259+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_silk_umbrella": {
    "id": "feywild_chaos_silk_umbrella",
    "name": "Chaos Silk Umbrella",
    "description": "The Chaos Silk Umbrella is a whimsical yet powerful artifact, its handle intricately carved from feywood and its canopy shimmering with wild magic patterns that dance like living threads of light. When opened in a time loop, it creates an imperceptible bubble where temporal distortions reset to the moment of opening, effectively nullifying any temporal effects within. However, each use brings a 10% chance of triggering a random effect on your next action, ranging from minor inconveniences to brief magical advantages.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Shield",
      "Random Action Effect"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Shield",
        "rules": "When activated as an action within a time loop, the Chaos Silk Umbrella creates a 30-foot radius temporal bubble around you. This bubble resets all ongoing temporal effects to the moment of opening. The effect lasts for 1 minute and has no save DC or limits."
      },
      {
        "title": "Random Action Effect",
        "rules": "There is a 10% chance that this umbrella will trigger a random effect on your next action after activation. This could range from gaining advantage on the next attack roll to suffering a minor penalty, such as disorienting yourself for one turn."
      }
    ],
    "levelRequirementReason": "The intricate magic of the Chaos Silk Umbrella requires a certain mastery of temporal manipulation.",
    "vendorReason": "The fey creatures who inhabit the wilds are known for their mastery over time and space, making them the perfect guardians of such an artifact.",
    "shippingDetail": "Delivered by Lakitu Drones, the umbrella arrives in pristine condition with a magical aura that hints at its origins from the Feywild.",
    "usage": {
      "activation": "Activate as an action within a time loop to create a temporal bubble around you for 1 minute.",
      "duration": "1 minute or until the next time loop resets, whichever comes first.",
      "endsWhen": "The effect ends when the next time loop resets or after 1 minute has passed.",
      "charges": "Unlimited uses."
    },
    "priceReason": "Crafted from feywood and imbued with potent temporal magic, this umbrella is a rare and valuable artifact that balances its powerful effects with a reasonable cost.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:03:53.929929+00:00",
    "aiReviewedAt": "2026-07-22T05:03:53.929929+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_talisman": {
    "id": "feywild_chaos_talisman",
    "name": "Chaos Talisman of the Shifting Veil",
    "description": "The Chaos Talisman of the Shifting Veil, a shimmering amulet encrusted with iridescent Feywild stones, pulses with chaotic magic that warps the very fabric of time. When worn, it grants fleeting mastery over temporal anomalies, allowing the wearer to create destabilized zones where reality bends and loops. The talisman's power can be harnessed in combat or exploration, but its use must be precise; any interference from a Fey court spell forces an immediate cooldown, ensuring its effects are short-lived yet potent.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Temporal Distortion",
      "Feywild Resonance"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Temporal Distortion",
        "rules": "The talisman allows the wearer to create a 10-foot-radius time loop, disrupting the passage of time for all creatures within its radius. This effect lasts for 1 minute and can be activated as an action. The duration ends when struck by a Fey court spell or if the user recharges it with another use."
      },
      {
        "title": "Feywild Resonance",
        "rules": "Wearing the talisman grants the wearer advantage on perception checks related to time anomalies and temporal magic for 1 hour. This effect is passive but can be dispelled by a successful DC 15 Constitution saving throw."
      }
    ],
    "levelRequirementReason": "The talisman's chaotic magic requires a user proficient in Feywild lore or at least three levels of spellcasting to wield its power without mishap.",
    "vendorReason": "The amulet is a rare artifact of the Feywild, and only the vendors who traverse these mystical realms can offer it to adventurers.",
    "shippingDetail": "Due to its delicate nature, the talisman must be shipped in a specially insulated box with strict temperature control; this ensures timely delivery without damage.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until struck by a Fey court spell",
      "endsWhen": "Struck by a Fey court spell, or the user recharges it with another use",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "The talisman's rarity and the chaotic magic it commands justify its price, making it an expensive yet indispensable tool for adventurers exploring the Feywild.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:03:36.633439+00:00",
    "aiReviewedAt": "2026-07-22T05:03:36.633439+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_talisman_7": {
    "id": "feywild_chaos_talisman_7",
    "name": "Chaos Talisman 7",
    "description": "The Chaos Talisman 7, forged from the bones of a forgotten Fey god, pulsates with chaotic energy. This jagged relic warps time itself when activated, creating a minor temporal vortex that shatters illusions and disorients foes. Its wearer experiences a brief period of time dilation, allowing them to exploit moments of confusion. When summoned in a crowded area, the vortex not only disrupts enemies but also forces allies into a state of temporary dizziness for 1d4 seconds.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Vortex",
      "Allies Experience Dizziness"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Vortex",
        "rules": "When activated as an action, the Talisman creates a minor temporal vortex that lasts for 3 seconds. All creatures within a 10-foot radius must succeed on a DC 15 Dexterity saving throw or be disoriented and reduced to half speed until the start of their next turn."
      },
      {
        "title": "Allies Experience Dizziness",
        "rules": "During the duration of the vortex, all allies within its effect area suffer from dizziness. These allies are stunned for 1d4 seconds, during which they cannot take actions or reactions and have a -2 penalty to their next attack roll and ability check."
      }
    ],
    "levelRequirementReason": "The talisman's power requires a high degree of control over temporal magic.",
    "vendorReason": "Feywild, known for its mystical artifacts, carries this relic as it is a powerful tool in the Fey realm.",
    "shippingDetail": "Delivery via Lakitu Drones takes 3 days and includes a special tracking charm to ensure safe arrival.",
    "usage": {
      "activation": "Action",
      "duration": "Instantaneous effect, duration of the vortex lasts for 3 seconds",
      "endsWhen": "The vortex ends when its duration expires or if the wearer is incapacitated",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced against other rare artifacts, this talisman offers a unique and powerful effect at an appropriate price.",
    "priceOriginal": 2800,
    "priceReviewedAt": "2026-07-22T05:04:08.365074+00:00",
    "aiReviewedAt": "2026-07-22T05:04:08.365074+00:00",
    "aiReviewVersion": 1
  },
  "feywild_chaos_tapestry": {
    "id": "feywild_chaos_tapestry",
    "name": "Chaos Tapestry of the Wild",
    "description": "The Chaos Tapestry of the Wild is a sentient tapestry spun from the chaotic threads of the Feywild. It weaves its patterns to reflect your innermost desires and fears, allowing you to traverse the most volatile corners of the Feywild. Upon activation, it grants you wild magic channeling (1d6 charges) and entangles you in Feywild echoes for 1 round, potentially triggering a random time-loop event that reshapes reality around you.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Wild Magic Channeling",
      "Feywild Echo Entanglement"
    ],
    "vendor": "feywild",
    "shippedBy": "Void Drifter Relay",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Wild Magic Channeling",
        "rules": "Grants the user wild magic channeling for 1 minute. The user can use an action to cast a spell from the Wild Magic subclass, but with a 20% chance of disaster."
      },
      {
        "title": "Feywild Echo Entanglement",
        "rules": "The user is entangled in Feywild echoes for 1 round (10 seconds). During this time, their movement speed is reduced by half and they are incapacitated. This effect ends when the duration expires or the user takes any damage."
      }
    ],
    "levelRequirementReason": "The tapestry's chaotic magic requires a certain level of magical proficiency to safely wield.",
    "vendorReason": "Feywild merchants specialize in artifacts that bridge the realms, including this dangerous yet powerful item.",
    "shippingDetail": "Ships via the Void Drifter Relay, with a 10% chance of delayed delivery due to spatial anomalies.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute or until used",
      "endsWhen": "The duration expires or the user takes damage",
      "charges": "1d6"
    },
    "priceReason": "Balanced at this price to reflect its powerful effects and the risk involved in using it.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:03:50.981258+00:00",
    "aiReviewedAt": "2026-07-22T05:03:50.981258+00:00",
    "aiReviewVersion": 1
  },
  "feywild_court_echo_rod": {
    "id": "feywild_court_echo_rod",
    "name": "Court Echo Rod of the Whispering Throne",
    "description": "The Court Echo Rod hums with the ancient magic of the Feywild, its polished surface shimmering with ethereal light. When swung, it can echo the whimsical moods of the Fey Courts—granting allies a +1 bonus to attack rolls against fey creatures or forcing enemies into a state of confused madness within 30 feet. With precise handling, it may summon a court’s spirit for one round, lending powerful aid in moments of need.",
    "category": "equipment",
    "price": 2000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Echo of the Fey",
      "Confusion Pulse"
    ],
    "vendor": "feywild",
    "shippedBy": "Pipe Express",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Echo of the Fey",
        "rules": "When swung as an action, the Court Echo Rod grants a +1 bonus to all attack rolls against fey creatures for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Confusion Pulse",
        "rules": "As a bonus action within 30 feet of an enemy, the Court Echo Rod emits a pulse that causes the target to suffer 1d6 confusion damage. The target must succeed on a DC 15 Wisdom saving throw or be stunned until the end of its next turn."
      }
    ],
    "levelRequirementReason": "This item requires a character with at least 3 levels to wield it effectively, as handling such ancient magic demands experience and discipline.",
    "vendorReason": "The Feywild vendor is the custodian of all things fey, and this rod is one of their most cherished items, passed down through generations.",
    "shippingDetail": "Ships via Pipe Express with expedited delivery within a week.",
    "usage": {
      "activation": "Action or bonus action depending on effect used.",
      "duration": "Echo of the Fey lasts for 1 minute, while Confusion Pulse is instantaneous and ends once the target is no longer within range.",
      "endsWhen": "The effects end when their duration expires or if the rod is broken or destroyed.",
      "charges": "Unlimited uses per day."
    },
    "priceReason": "The balanced XP price reflects the item’s rarity and utility, offering a significant tactical advantage in fey-themed encounters.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:04:37.179995+00:00",
    "aiReviewedAt": "2026-07-22T05:04:37.179995+00:00",
    "aiReviewVersion": 1
  },
  "feywild_court_soul_fragments": {
    "id": "feywild_court_soul_fragments",
    "name": "Court Soul Fragments of the Whispering Thorns",
    "description": "Court Soul Fragments of the Whispering Thorns are delicate, glowing shards that whisper secrets from the Feywild courts. When wielded, these fragments grant temporary charm resistance and induce minor reality shifts, causing the world around you to shimmer with strange light and forgotten memories. Each fragment's essence is unique, reflecting a different court’s magic; one might hum with the power of Malaestrae, while another crackles with the wild energy of Selvaes.",
    "price": 1000,
    "icon": "🌿",
    "stock": 5,
    "rarity": "rare",
    "effects": [
      "Charm Resistance Boost",
      "Fey Memory Trigger"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Charm Resistance Boost",
        "rules": "Activates on consumption as a bonus action, granting +2 to charm saving throws for 3 rounds. Ends when the duration expires."
      },
      {
        "title": "Fey Memory Trigger",
        "rules": "Upon consuming one fragment, there is a 50% chance of triggering a random memory from the Feywild courts. The memory can be either beneficial or chaotic, lasting until the end of your next turn. No save DC applies."
      }
    ],
    "levelRequirementReason": "These fragments are powerful enough to influence the balance between reality and dream, requiring a character with some experience in the Feywild.",
    "vendorReason": "The Feywild is the source of these shards, and only those who know its secrets can sell them.",
    "shippingDetail": "Ships via spectral courier, which may cause minor disorientation upon arrival.",
    "usage": {
      "activation": "Consumed as a bonus action.",
      "duration": "3 rounds after consumption.",
      "endsWhen": "Duration expires or the fragment is destroyed.",
      "charges": "Unlimited; fragments replenish naturally."
    },
    "priceReason": "The shards are crafted from Feywild essence, making them valuable but not excessively so as to maintain balance.",
    "priceOriginal": 1800,
    "priceReviewedAt": "2026-07-22T05:04:21.401507+00:00",
    "aiReviewedAt": "2026-07-22T05:04:21.401507+00:00",
    "aiReviewVersion": 1
  },
  "feywild_dancing_shards": {
    "id": "feywild_dancing_shards",
    "name": "Dancing Shards of the Courtly Hourglass",
    "description": "The Dancing Shards of the Courtly Hourglass are three crystalline shards that shimmer with the colors of Feywild. When held, they reflect the shifting time loops as their forms subtly change. By throwing them into a loop, you create a 10-foot-radius bubble where time slows dramatically, allowing for escape or an attempt to break free from the cycle entirely. Each shard is imbued with the essence of the fey realm, making it a rare and sought-after tool among those who navigate time loops.",
    "category": "equipment",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Bubble Creation",
      "Reflect Loop Phases"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Time Bubble Creation",
        "rules": "When thrown as an action, the shards create a 10-foot-radius bubble centered on them. This bubble allows creatures within to move freely and grants advantage on saving throws against time effects for 1 minute. The effect ends if the bubble is destroyed or after 3 uses."
      },
      {
        "title": "Reflect Loop Phases",
        "rules": "The shards reflect the current phase of the time loop, changing their appearance accordingly. This provides a +2 bonus to Insight checks made to understand the nature of the loop and grants advantage on any Intelligence (Investigation) check related to the loop's structure."
      }
    ],
    "levelRequirementReason": "Suitable for adventurers who are just beginning their journey into time loops.",
    "vendorReason": "Feywild, a master of arcane and mystical items from the Feywild realm, is well-known for offering tools that aid in navigating the whimsical but dangerous realms of time loops.",
    "shippingDetail": "Delivered with utmost secrecy; the parcels are protected by the fey magic that ensures they arrive safely and undisturbed.",
    "usage": {
      "activation": "Thrown as an action",
      "duration": "1 minute or until destroyed",
      "endsWhen": "Destroyed, moved out of range, or after 3 uses",
      "charges": "Unlimited"
    },
    "priceReason": "Balanced at this price to reflect its rarity and the complexity of its effects in gameplay.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:04:12.671213+00:00",
    "aiReviewedAt": "2026-07-22T05:04:12.671213+00:00",
    "aiReviewVersion": 1
  },
  "feywild_dream_mote": {
    "id": "feywild_dream_mote",
    "name": "Dream Mote of the Fractured Atrium",
    "description": "The Dream Mote of the Fractured Atrium is a shimmering fragment of the Feywild, pulsating with an ethereal light that hints at the hidden truths of the realm. When activated, it grants you a brief glimpse into forgotten memories or secret lore, but there's always a risk that your senses may become disoriented as the mote's light dances in unpredictable patterns. With each use, there is a 15% chance you will lose one action point, leaving you momentarily vulnerable to foes.",
    "price": 1000,
    "icon": "🌌",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Glimpse into Feywild Secrets",
      "Temporary Disorientation Risk"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Glimpse into Feywild Secrets",
        "rules": "As a bonus action, the user can activate the Dream Mote. For the next minute, they have advantage on Intelligence (Investigation) checks to uncover hidden lore or forgotten memories related to the Feywild."
      },
      {
        "title": "Temporary Disorientation Risk",
        "rules": "There is a 15% chance that activating the Dream Mote will cause you to lose one action point. This effect ends immediately if you are hit by an attack, and cannot be used again for 24 hours."
      }
    ],
    "levelRequirementReason": "Requires some familiarity with the Feywild's mysteries.",
    "vendorReason": "The motes are harvested directly from the Feywild and sold by those who have intimate knowledge of its secrets.",
    "shippingDetail": "Ships via Lakitu Drones, known for their swift and reliable deliveries across Faerûn.",
    "usage": {
      "activation": "Bonus action to activate",
      "duration": "1 minute of effect",
      "endsWhen": "Action lost or interrupted by an attack",
      "charges": "Unlimited uses"
    },
    "priceReason": "Balanced price for a rare item that offers both utility and risk.",
    "priceOriginal": 2100,
    "priceReviewedAt": "2026-07-22T05:05:09.536402+00:00",
    "aiReviewedAt": "2026-07-22T05:05:09.536402+00:00",
    "aiReviewVersion": 1
  },
  "feywild_dreaming_shroud": {
    "id": "feywild_dreaming_shroud",
    "name": "Dreaming Shroud of the Wild Echo",
    "description": "The Dreaming Shroud of the Wild Echo, a tattered cloak spun from the forgotten dreams of Feywild’s lost kings, allows the wearer to step into a dream loop where time flows in reverse and memories become malleable. When donned, it grants the user temporary advantage in combat for 1d6 rounds, but risks erasing one cherished memory if not worn within an hour. The shroud fades upon awakening or after 10 minutes of use, leaving behind a lingering echo of the dream world’s influence.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌌",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Time Flows Backward",
      "Memory Can Be Rewritten"
    ],
    "vendor": "Feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Loop",
        "rules": "When activated by donning the shroud, the wearer enters a temporal loop where time flows in reverse for 10 minutes. During this period, they gain temporary advantage on attack rolls and ability checks. If the wearer is not asleep within an hour of activation, or if they awaken outside their dream state, the effect ends immediately."
      },
      {
        "title": "Memory Manipulation",
        "rules": "Roll 1d6: On a result of 1–2, the wearer gains temporary advantage on attack rolls and ability checks for 1d6 rounds. On a roll of 3–6, there is a risk that one cherished memory becomes unstable, potentially leading to amnesia."
      }
    ],
    "levelRequirementReason": "Requires at least level 5 to harness the shroud's temporal and mnemonic effects without risk.",
    "vendorReason": "The Feywild holds many secrets, and only its denizens truly understand the shroud’s power.",
    "shippingDetail": "Ships via spectral courier with a delay of one night.",
    "usage": {
      "activation": "Donning the shroud to enter its effects.",
      "duration": "10 minutes or until awakened outside dream state.",
      "endsWhen": "Awakens in non-dream state or after 10 minutes, whichever comes first.",
      "charges": "Unlimited uses"
    },
    "priceReason": "The shroud’s rarity and mystical properties justify its price, as it is a powerful tool for those who dare to explore the dreamscape.",
    "priceOriginal": 4200,
    "priceReviewedAt": "2026-07-22T05:04:46.547520+00:00",
    "aiReviewedAt": "2026-07-22T05:04:46.547520+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echo_chime": {
    "id": "feywild_echo_chime",
    "name": "Echo Chime of the Feywild’s Lullaby",
    "description": "The Echo Chime of the Feywild’s Lullaby is a delicate crystal chime, its surface etched with ancient runes that shimmer with the light of forgotten fey courts. When played, it resonates with fragments of memory—fragments that can transport you to moments long past, where the very air hums with ethereal melodies. The chime’s notes are both a balm and a burden; while they allow you to relive cherished memories, they may also dredge up painful recollections you would rather forget.",
    "price": 1000,
    "icon": "🎵",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Relives a Memory Moment",
      "May Trigger Unwanted Recollections"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Memory Relic",
        "rules": "Activating the Echo Chime of the Feywild’s Lullaby allows you to relive a moment from the past for up to 30 seconds. This effect is passive, and no action is required to maintain it. The chime grants temporary immunity to fear-based spells or effects (1 minute) but does not protect against other forms of mental control."
      },
      {
        "title": "Unwanted Memory",
        "rules": "There is a 25% chance that the memory you relive will be one you do not wish to revisit. If this occurs, you are immediately brought back to reality with no further effects from the chime for 1 hour."
      }
    ],
    "levelRequirementReason": "Players must have a certain degree of emotional maturity and experience to handle the potential psychological impact of reliving memories.",
    "vendorReason": "The chimes are crafted by the fey themselves, who understand their potential for both healing and turmoil.",
    "shippingDetail": "Ships via Lakitu Drones, delivered directly to your doorstep within a week of purchase.",
    "usage": {
      "activation": "Passive effect upon playing the chime; duration is until you stop listening or are interrupted.",
      "duration": "30 seconds for reliving a moment, 1 minute immunity to fear-based effects",
      "endsWhen": "You cease to listen or are interrupted by an attack or magical effect",
      "charges": "Unlimited uses"
    },
    "priceReason": "The chime’s rarity and the emotional impact it provides justify its moderate price.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:04:56.827408+00:00",
    "aiReviewedAt": "2026-07-22T05:04:56.827408+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echo_gauntlet": {
    "id": "feywild_echo_gauntlet",
    "name": "Echo Gauntlet of the Fey Courts",
    "description": "The Echo Gauntlet of the Fey Courts is a gauntlet crafted from the laughter of long-forgotten fey courts, its surface etched with runes that shimmer faintly in the dark. When worn, it captures and repeats the last spoken word to any nearby fey creature, influencing their actions based on the perceived truth or falsehood of what was said. Misunderstandings can arise if the echo is mistaken for genuine speech.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Echoing Truth",
      "Fey Illusion"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Echoing Truth",
        "rules": "When a wearer speaks, they may roll 1d4. On a result of 1–2, the gauntlet attempts to influence nearby fey creatures, making them act in accordance with the speaker's intended meaning. The creature must succeed on a Wisdom saving throw (DC 13) or be swayed by the gauntlet’s subtle manipulation."
      },
      {
        "title": "Fey Illusion",
        "rules": "On a result of 3–4, the gauntlet creates an illusory replication of the last spoken word within a 10-foot radius. This illusion can mislead listeners into believing they heard something different than what was truly said."
      }
    ],
    "levelRequirementReason": "The gauntlet requires at least fifth-level proficiency to wield effectively, as it involves subtle fey magic and the manipulation of illusions.",
    "vendorReason": "Feywild is known for its extensive trade in arcane items related to fey creatures and their whimsical magic.",
    "shippingDetail": "Delivered via spectral mail, with a delay of one week due to the ethereal nature of its couriers.",
    "usage": {
      "activation": "As a bonus action when speaking",
      "duration": "Instantaneous effect; ends immediately after use or if the wearer removes it",
      "endsWhen": "The gauntlet exhausts after 5 uses, requiring reforge by a fey scribe to be used again.",
      "charges": "5 uses"
    },
    "priceReason": "Crafted from rare materials and ancient fey runes, the Echo Gauntlet is priced at 1000 XP to reflect its magical craftsmanship.",
    "priceOriginal": 3500,
    "priceReviewedAt": "2026-07-22T05:05:12.338169+00:00",
    "aiReviewedAt": "2026-07-22T05:05:12.338169+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echo_heart": {
    "id": "feywild_echo_heart",
    "name": "Echo Heart",
    "description": "The Echo Heart glows faintly, a crystalline pulsar that captures the final thought of a Fey who has fallen into timeless loops. This relic allows you to hear and understand the thoughts of those trapped in temporal cycles, but beware—overuse can lead to endless echoes that warp your own mind, causing hallucinations. Each use reveals one looped thought for 1 minute, while repeating the same thought may break a time loop if done correctly.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Reveals a Fey's final thought",
      "Can break a time loop with repeated thought"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Thought Revelation",
        "rules": "When activated as an action, this heart reveals the last thought of a trapped Fey for 1 minute. This effect can be used once per short or long rest."
      },
      {
        "title": "Loop Breaking",
        "rules": "By repeating the revealed thought three times in sequence within 10 feet of a time loop, you can attempt to break it. The DC for this saving throw is equal to 8 + your Wisdom modifier."
      }
    ],
    "levelRequirementReason": "The Echo Heart requires a minimum character level of 3 to handle its temporal resonance.",
    "vendorReason": "The Feywild's Shy Guy Smugglers trade in rare items, including this heart that reveals the secrets of their time-trapped kin.",
    "shippingDetail": "Due to its fragile nature, the Echo Heart is carefully packed and only shipped via the fastest courier available.",
    "usage": {
      "activation": "Action",
      "duration": "1 minute",
      "endsWhen": "The effect ends when you use it again or are incapacitated.",
      "charges": "Recharge after a long rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting its rarity and the complex magic required to craft such an item.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:05:33.022245+00:00",
    "aiReviewedAt": "2026-07-22T05:05:33.022245+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echo_of_the_soul": {
    "id": "feywild_echo_of_the_soul",
    "name": "Echo of the Soul",
    "description": "The Echo of the Soul is a delicate, silver bell imbued with the whispers of the Feywild. When touched by one who has crossed a time loop, it chimes with a resonant note that grants clarity and insight for a fleeting moment. Its touch echoes the last thought of its previous holder—a memory, a warning, or perhaps even a wish—offering a brief but potent psychic boost to the wearer's resolve.",
    "price": 1000,
    "icon": "🎵",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Grants +2d6 temporary hit points for 1 round",
      "Echoes the last thought of the person who last held it"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Temporary Hit Points Boost",
        "rules": "When activated, this item grants the user +2d6 temporary hit points for 1 round. This effect ends when the round concludes or if the user takes damage."
      },
      {
        "title": "Echoing Thought",
        "rules": "Upon activation, the bell resonates with the last thought of its previous holder. The listener may choose to act upon this thought as a reaction at the start of their next turn. This effect ends after one use."
      }
    ],
    "levelRequirementReason": "The Echo of the Soul is accessible to all adventurers, providing immediate utility and insight regardless of starting level.",
    "vendorReason": "Feywild traders often carry this item, as it is a symbol of their connection to the very fabric of time and memory in the Feywild.",
    "shippingDetail": "Delivered swiftly by Lakitu Drones, ensuring the Echo arrives fresh from its origins in the Feywild.",
    "usage": {
      "activation": "Activate as a bonus action",
      "duration": "1 round per activation",
      "endsWhen": "The effect ends when the round concludes or if the user takes damage",
      "charges": "Unlimited, but limited to one use of each effect per day"
    },
    "priceReason": "Balanced at 1000 XP, this item provides immediate and potent utility without being overpowered.",
    "priceOriginal": 3000,
    "priceReviewedAt": "2026-07-22T05:05:24.562825+00:00",
    "aiReviewedAt": "2026-07-22T05:05:24.562825+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echo_satchel": {
    "id": "feywild_echo_satchel",
    "name": "Echo Satchel",
    "description": "The Echo Satchel is a delicate, beaded pouch crafted from the shimmering threads of twilight. It captures and replays the last three actions taken by its bearer in the Feywild, allowing them to mimic or exploit these moments in combat or diplomacy. When activated, it triggers a minor echo effect that either heals or damages nearby creatures, depending on the situation. The satchel is particularly useful when dealing with fey creatures, offering +1 bonus to Diplomacy checks.",
    "price": 1000,
    "icon": "🎵",
    "stock": 5,
    "rarity": "uncommon",
    "effects": [
      "Echo Replay",
      "Fey Echo"
    ],
    "vendor": "feywild",
    "shippedBy": "Moonlit Courier Service",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Echo Replay",
        "rules": "Activate as a bonus action. Instantaneous effect that replays the last three actions of the user in the Feywild, including combat and social interactions. The replay can be used to mimic or exploit these moments for advantage."
      },
      {
        "title": "Fey Echo",
        "rules": "When activated, triggers a minor echo effect centered on the user (15-foot radius). This echo deals 1d4 damage or provides 1d4 healing, chosen at will. The effect lasts until the end of your next turn."
      }
    ],
    "levelRequirementReason": "This item is designed for adventurers just starting their journey into the Feywild to aid in both combat and social encounters.",
    "vendorReason": "The satchel's origin in the Feywild makes it a natural fit for sale by vendors who know these realms well.",
    "shippingDetail": "Ships via Moonlit Courier, ensuring safe arrival within one week of order placement.",
    "usage": {
      "activation": "Bonus action to activate; can be used twice before recharging.",
      "duration": "Instantaneous effect for Echo Replay and lasts until the end of your next turn for Fey Echo.",
      "endsWhen": "Recharges after a long rest or upon use, whichever comes first.",
      "charges": "2 uses per day"
    },
    "priceReason": "Balanced at 1000 XP to reflect its utility in both combat and social situations without giving an unbalanced advantage.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:05:24.691080+00:00",
    "aiReviewedAt": "2026-07-22T05:05:24.691080+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echo_scepter_of_chaos": {
    "id": "feywild_echo_scepter_of_chaos",
    "name": "Echo Scepter of Chaos",
    "description": "The Echo Scepter of Chaos hums with the untamed energy of feywild magic, its core a swirling vortex of chaotic thought. Crafted from the enchanted wood of the ancient Starweaver tree and imbued with the essence of a wandering spirit, it amplifies wild magic to devastating effect. When wielded, it echoes the last spell cast by its owner as if under the influence of the Chaotic Brew spell, but with unpredictable results.",
    "category": "equipment",
    "price": 1000,
    "icon": "🌀",
    "stock": 1,
    "rarity": "epic",
    "effects": [
      "Echo Spell",
      "Enhanced Wild Magic"
    ],
    "vendor": "feywild",
    "shippedBy": "Boo Spectral Mail",
    "levelRequirement": 6,
    "effectDetails": [
      {
        "title": "Echo Spell",
        "rules": "The wielder repeats the last spell they cast as a wild effect. This can cause chaotic and potentially harmful outcomes for the caster and their allies within the area of effect, but also offers an unexpected advantage against foes."
      },
      {
        "title": "Enhanced Wild Magic",
        "rules": "+3 to all wild magic checks. The user gains advantage on saving throws made as a result of wild magic effects and can cast one additional spell of 1st level or lower that uses the Chaotic Magic descriptor each day without expending a spell slot."
      }
    ],
    "levelRequirementReason": "Requires at least 6th level to handle the unpredictable and powerful nature of the scepter.",
    "vendorReason": "The feywild artisans are the only ones who can craft such an item, as it draws its power from the very essence of their realm.",
    "shippingDetail": "Delivered by spectral messengers who traverse the veils between worlds, ensuring swift delivery to the wielder.",
    "usage": {
      "activation": "Instantaneous, as a reaction",
      "duration": "Until the next long rest or until the wild magic effect ends",
      "endsWhen": "The caster takes damage from an enemy spell or when they make a failed saving throw against a wild magic effect",
      "charges": "Unlimited; recharges on a short rest"
    },
    "priceReason": "Balanced at 1000 XP, reflecting the item's rare and unpredictable nature.",
    "priceOriginal": 4000,
    "priceReviewedAt": "2026-07-22T05:05:58.743223+00:00",
    "aiReviewedAt": "2026-07-22T05:05:58.743223+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echoed_gaze": {
    "id": "feywild_echoed_gaze",
    "name": "Echoed Gaze Lens",
    "description": "The Echoed Gaze Lens is a pair of delicate, iridescent spectacles forged from Feywild crystal and bound to an ancient spell. When worn, they allow the wearer to glimpse the next possible moment in time, but only if the world isn't caught in a temporal loop. In such cases, the lenses cause a brief disorientation, leaving the user temporarily unable to act. The wearer gains +2 to Intimidation checks against foes who manipulate time and space.",
    "category": "equipment",
    "price": 1000,
    "icon": "🧠",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Temporal Glimpse",
      "Disorienting Loop"
    ],
    "vendor": "feywild",
    "shippedBy": "Shy Guy Smugglers",
    "levelRequirement": 5,
    "effectDetails": [
      {
        "title": "Temporal Glimpse",
        "rules": "As a bonus action, the wearer can activate the lenses to see the next possible moment in time for up to 5 seconds. This effect is ineffective if the world is caught in a temporal loop; in such cases, the user becomes temporarily disoriented for 1 round (can't act). The lenses have no charges and do not need to recharge."
      },
      {
        "title": "Disorienting Loop",
        "rules": "If activated while in a temporal loop, the wearer is subjected to a state of disorientation that lasts for 1 round. During this time, they are incapacitated and can't take actions or reactions. This effect automatically ends when the loop is resolved."
      }
    ],
    "levelRequirementReason": "Requires at least fifth level to handle the temporal magic involved without mishap.",
    "vendorReason": "The Feywild marketplaces are known for their wares that manipulate time and space, making it a reasonable place for these unique spectacles.",
    "shippingDetail": "Delivered via the whimsical paths of the Feywild, which may add an unpredictable delay to delivery times.",
    "usage": {
      "activation": "Bonus action",
      "duration": "Instantaneous (up to 5 seconds or until a loop is detected)",
      "endsWhen": "Temporal loop is resolved or wearer takes any action after activation",
      "charges": "Unlimited, but only one use per temporal loop"
    },
    "priceReason": "The item's rarity and unique temporal properties justify a price of 1000 XP.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:05:55.254141+00:00",
    "aiReviewedAt": "2026-07-22T05:05:55.254141+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echoing_bell": {
    "id": "feywild_echoing_bell",
    "name": "Echoing Bell of the Shifting Courts",
    "description": "The Echoing Bell of the Shifting Courts resonates with the whimsical echoes of lost Fey courts. When struck, it calls forth a court's ancient rule, granting temporary boons or curses that dance between the mundane and the magical. It has been said that each chime might bring fortune or misfortune to those who hear its call. Known for its unpredictable nature, it can only be relied upon in times of dire need.",
    "price": 1000,
    "icon": "🔮",
    "stock": 3,
    "rarity": "rare",
    "effects": [
      "Whimsical Boon",
      "Ancient Curse"
    ],
    "vendor": "feywild",
    "shippedBy": "Lakitu Drones",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Whimsical Boon",
        "rules": "Upon activation, the bell grants a temporary +2 to one ability score or -2 to another for 1 round. This effect is random and can be any of the six ability scores."
      },
      {
        "title": "Ancient Curse",
        "rules": "The bell might also curse you with a rule from a Fey court, such as 'all allies within hearing distance must take 1d4 damage to gain a free action' for 1 round. This effect is random and cannot be resisted."
      }
    ],
    "levelRequirementReason": "The bell's unpredictable nature requires a level of experience to handle its capricious magic.",
    "vendorReason": "Feywild, the master of all things Fey, is well-known for their mastery over such enigmatic artifacts.",
    "shippingDetail": "Lakitu Drones deliver with unparalleled precision, ensuring the bell arrives in perfect condition.",
    "usage": {
      "activation": "A bonus action to strike and activate the bell.",
      "duration": "Instantaneous effect; lasts for 1 round.",
      "endsWhen": "The duration ends or upon destruction of the bell.",
      "charges": "Unlimited, as it regenerates."
    },
    "priceReason": "Balanced at 1000 XP, this price reflects the rare and unpredictable nature of the Echoing Bell.",
    "priceOriginal": 2500,
    "priceReviewedAt": "2026-07-22T05:06:12.368792+00:00",
    "aiReviewedAt": "2026-07-22T05:06:12.368792+00:00",
    "aiReviewVersion": 1
  },
  "feywild_echoing_satchel": {
    "id": "feywild_echoing_satchel",
    "name": "Echoing Satchel",
    "description": "The Echoing Satchel is a worn leather pouch adorned with intricate Feywild runes, whispering softly of forgotten moments. When you place an item within its depths and open it later, the satchel reveals the last memory tied to that object, be it a lost trinket or a cherished relic from the Feywild. The satchel's magic is most potent in the heart of the Feywild, where the echoes of time are strongest. However, if the memories revealed are too intense, they may cause hallucinations that cloud your senses for an hour.",
    "category": "equipment",
    "price": 1000,
    "icon": "📦",
    "stock": 1,
    "rarity": "rare",
    "effects": [
      "Reveals Last Memory",
      "Causes Hallucinations"
    ],
    "vendor": "feywild",
    "shippedBy": "Rakasha Spirit Walk",
    "levelRequirement": 1,
    "effectDetails": [
      {
        "title": "Reveal Last Memory",
        "rules": "When you place an item in the satchel, it reveals the last memory associated with that item. This effect is triggered by opening the satchel and lasts until the end of your next turn. The DM decides if this memory causes hallucinations based on its intensity."
      },
      {
        "title": "Hallucination",
        "rules": "If the revealed memory is too vivid, you must make a DC 15 Wisdom saving throw or be affected by the effects of a hallucinatory terrain spell for 1 hour. This effect can only occur once per day."
      }
    ],
    "levelRequirementReason": "The satchel is simple enough in design but requires the user to have basic understanding and control over their environment.",
    "vendorReason": "The Satchel's magic is most potent within the Feywild, where it can tap into the natural flow of memory and dreams.",
    "shippingDetail": "Ships via spirit courier; delivery may vary depending on the location in relation to the Feywild.",
    "usage": {
      "activation": "Placing an item in the satchel and opening it later, or using it in the presence of a strong memory echo (DC 15 Wisdom save).",
      "duration": "Instantaneous reveal upon opening; hallucinations last for 1 hour if triggered.",
      "endsWhen": "The effect ends when the memory is revealed or the hallucination subsides.",
      "charges": "Unlimited uses, but can only trigger one hallucination per day."
    },
    "priceReason": "Balanced at 1000 XP as it requires a rare component from the Feywild and its magic is potent enough to potentially cause significant side effects.",
    "priceOriginal": 3200,
    "priceReviewedAt": "2026-07-22T05:06:00.849962+00:00",
    "aiReviewedAt": "2026-07-22T05:06:00.849962+00:00",
    "aiReviewVersion": 1
  },
  "feywild_entrancing_lore_satchel": {
    "id": "feywild_entrancing_lore_satchel",
    "name": "Entrancing Lore Satchel",
    "description": "The Entrancing Lore Satchel is a leather-bound pouch adorned with intricate Feywild runes that whisper forgotten tales to those who hold it. When opened within a Fey court, it emits a soft hum, causing nearby Fey creatures to react unpredictably—either dancing in harmony or erupting into chaotic song. The satchel grants its bearer unparalleled access to ancient lore, doubling their Lore knowledge rolls when using spells or actions related to history and memory.",
    "price": 1000,
    "icon": "🔮",
    "stock": 2,
    "rarity": "rare",
    "effects": [
      "Feywild Whispers",
      "Courtly Time Loops"
    ],
    "vendor": "feywild",
    "shippedBy": "Koopa Postal",
    "levelRequirement": 3,
    "effectDetails": [
      {
        "title": "Feywild Whispers",
        "rules": "When opened within a Fey court, the Entrancing Lore Satchel grants the wielder advantage on all Intelligence (History) and Arcana checks for 1 hour. This effect is limited to once per long rest."
      },
      {
        "title": "Courtly Time Loops",
        "rules": "Upon being opened in a Fey court, there's a 5% chance that time will loop within a 20-foot radius for 1d6 seconds. During this time, creatures are unable to take actions and must remain still until the effect ends."
      }
    ],
    "levelRequirementReason": "The satchel's knowledge and temporal effects require a character with at least three levels of experience to wield.",
    "vendorReason": "The Feywild is home to ancient libraries and mystical artifacts, making it the natural vendor for such an item.",
    "shippingDetail": "Ships via enchanted delivery, which ensures safe arrival within a week of purchase.",
    "usage": {
      "activation": "Uses an action to open and activate; can be re-used after a long rest within the same location.",
      "duration": "Instantaneous effect when opened in a Fey court; lasts until the next dawn or when time loops end.",
      "endsWhen": "The effect ends naturally at dawn, is interrupted by opening outside a Fey court, or expended with each use.",
      "charges": "Unlimited uses per long rest"
    },
    "priceReason": "Balanced as a rare item, the Entrancing Lore Satchel offers potent lore and temporal effects that are both unique and valuable.",
    "priceOriginal": 1200,
    "priceReviewedAt": "2026-07-22T05:06:14.547224+00:00",
    "aiReviewedAt": "2026-07-22T05:06:14.547224+00:00",
    "aiReviewVersion": 1
  }
};
